#!/usr/bin/env python3
"""Card-shape translation (translate/<work>/dd-NNN.en.md) -> site chunks (src/greek, src/pg-latin, src/english).

Built for Dorotheus, *Doctrinae* (2026-10-27), the first work translated by the kt- method (kt-scaffold.py):
the chunk cuts are the translators' own, so this writes the Greek to MATCH them rather than re-chunking
(chunk-work-pg-ours.mjs would cut its own and orphan the English).

  python3 scripts/kt-to-site.py dorotheus-doctrinae            # writes all three trees + manifests
  python3 scripts/kt-to-site.py dorotheus-doctrinae --dry      # report only

Greek = the plate-checked text (raw/kraken/<work>/checked/) with translate/<work>/verify/GREEK-PATCHES.tsv applied,
hyphenated line breaks joined, [col] at each page, [b: X] kept, paragraph breaks at headings and section numerals.
English = the card body; numbered translator notes go to cruces.md (keyed by column and band, with the words they
follow), except where a note is replaced in the text by a [sic:] (plate-confirmed misprint, verify/VERDICTS.tsv) or by
Migne's own [n:] (notes/APPARATUS.json, when present). After this: mark-sentences.mjs <key> (Greek) ->
align-sentences.mjs <key> --write -> verify-english-pg.mjs <key>.
"""
import csv, json, os, re, statistics, sys, unicodedata as ud

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
CONF = {
    'dorotheus-doctrinae': dict(key='dorotheus-gazaeus-doctrinae', vol=88, cmap='data/pg-column-maps/pg088.json',
                                xml='raw/scans/pg088/copyA_088_djvu.xml', prefix='dd'),
    'moschus-pratum': dict(key='moschus-pratum-spirituale', vol=87, cmap='data/pg-column-maps/pg087c.json',
                           xml='raw/scans/pg087c/copyA_087c_djvu.xml', prefix='mp'),
    'procopius-rhetorica': dict(key='procopius-gazaeus-rhetorica', vol=87, cmap='data/pg-column-maps/pg087c.json',
                                xml='raw/scans/pg087c/copyA_087c_djvu.xml', prefix='pr'),
    # Sophronius: so-001..018 Greek + so-019..021 Latin-only (LATIN-ONLY-SPEC.md, built 2026-11-05): all 21 chunks, in COLUMN order.
    'sophronius-orationes': dict(key='sophronius-hierosolymitanus-orationes', vol=87, cmap='data/pg-column-maps/pg087c.json',
                                 xml='raw/scans/pg087c/copyA_087c_djvu.xml', prefix='so', unwrap=True),   # unwrap: the so- cards are hard-wrapped at ~120 columns; join lines inside a paragraph
}
work = sys.argv[1]; DRY = '--dry' in sys.argv
C = CONF[work]; KEY = C['key']
T = os.path.join(ROOT, 'translate', work)
K = os.path.join(ROOT, 'raw/kraken', work)
reg = json.load(open(os.path.join(ROOT, 'data/pg-works.json')))
W = next(w for w in reg['works'] if w['key'] == KEY)
_m = json.load(open(os.path.join(ROOT, C['cmap'])))
cmap = {p['pdfPage']: p for p in _m['pages']}
SKIP = {l + 1 for l in _m.get('duplicateLeaves', [])}
def gcol(pdf): m = cmap[pdf]; return m['colRight'] if m['greekSide'] == 'right' else m['colLeft']
def lcol(pdf): m = cmap[pdf]; return m['colLeft'] if m['greekSide'] == 'right' else m['colRight']
nfc = lambda s: ud.normalize('NFC', s)

# ---------- chunks, in order ----------
chunks = []; LANG = {}
for f in sorted(os.listdir(T)):
    m = re.match(rf'({C["prefix"]}-\d{{3}})\.md$', f)
    if not m: continue
    if int(m.group(1)[-3:]) > C.get('maxn', 10**9): continue
    s_ = open(f'{T}/{f}').read()
    r = re.search(r'range: p-(\d+):(\d+) – p-(\d+):(\d+)', s_)
    if r: chunks.append((m.group(1), tuple(map(int, r.groups())))); continue
    pg = re.search(r'^pages: (.*)$', s_, re.M)                # a scaffold with `pages:` and no `range:` is Latin-only (LATIN-ONLY-SPEC.md section 2)
    if pg:
        ps = [int(x.split(':')[0]) for x in pg.group(1).split()]
        chunks.append((m.group(1), (ps[0], 0, ps[-1], 999))); LANG[m.group(1)] = 'la'
# the Doctrina I pilot (dd-001–003) was cut on RAW Kraken line numbers; in the checked text its heading
# ΤΟΥ ΕΝ ΑΓΙΟΙΣ ΠΑΤΡΟΣ… is line 6 of p-0839, not 7 (the other two pilot boundaries coincide; checked by eye)
OVERRIDE = {'dorotheus-doctrinae': {'dd-001': (839, 6, 843, 4)}}.get(work, {})
chunks = [(c, OVERRIDE.get(c, r)) for c, r in chunks]
if LANG: chunks.sort(key=lambda c: (c[1][0], c[1][1]))        # Latin chunks interleave by column; Greek-only works keep file order (= page order)
N = len(chunks)
isla = lambda ci: LANG.get(chunks[ci][0]) == 'la'

# ---------- Greek ----------
patches = {}
for p in csv.DictReader(open(f'{T}/verify/GREEK-PATCHES.tsv'), delimiter='\t'):
    patches.setdefault((int(p['page'][2:]), int(p['line'])), []).append(p)

def patched(pdf, i, line):
    for p in patches.get((pdf, i), []):
        a, b = p['from'], p['to']
        if a.startswith('(no band letter)'): line = f'{b} {line}'; continue
        if ' / ' in a: a = a.split(' / ')[-1]; b = {'αἰτιᾶσθαι': 'τιᾶσθαι'}.get(b, b)
        if a not in line: sys.exit(f'patch does not apply: p-{pdf:04d}:{i} {a!r} in {line!r}')
        line = line.replace(a, b, 1)
    return line

# ---------- Moschus: chapter breaks, band letters, garbled head lines (scripts/mp-greek-breaks.py, mp-bands.py) ----------
MP = os.path.exists(f'{T}/verify/GREEK-BREAKS.tsv')   # Moschus, Procopius: any work with a breaks table (2026-11-05)
MP_GARBLE = re.compile(r'[ΡρPp][ΥυYy][ΤτT]')
MP_BREAK, MP_DROP, MP_BANDS = set(), set(), {}
if MP:
    for r in csv.DictReader(open(f'{T}/verify/GREEK-BREAKS.tsv'), delimiter='\t'):
        MP_BREAK.add((r['page'], int(r['line'])))
        if r['drop']: MP_DROP.add((r['page'], int(r['drop'])))
    for r in csv.DictReader(open(f'{T}/verify/GREEK-DROPS.tsv'), delimiter='\t'):
        MP_DROP.add((r['page'], int(r['line'])))
    for r in csv.DictReader(open(f'{T}/verify/GREEK-BANDS.tsv'), delimiter='\t'):
        MP_BANDS[(r['page'], int(r['line']))] = (r['letter'], r['strip_from'], r['strip_to'])

SECT = re.compile(r"^(\[b: .\] )?([ΑΒΓΔΕϚΖΗΘΙΚΛΜ]{1,3}['ʹ΄´′]\.|Ἐρώτησις|Ἀπόκρισις)")
def is_head(line, prev):
    t = re.sub(r'^\[b: .\] ', '', line)
    letters = [c for c in t if c.isalpha()]
    if letters and all(not c.islower() for c in letters): return True          # ΔΙΔΑΣΚΑΛΙΑ Β'. / ΤΟΥ ΕΝ ΑΓΙΟΙΣ …
    return prev is not None and prev.startswith('ΔΙΔΑΣΚΑΛΙΑ') and len(t.split()) <= 10   # its title line

def join(items):
    # join: hyphenated breaks close up; an anchor or band marker inside a broken word moves after it
    out, pend = '', []          # pend = markers waiting for the end of a broken word
    for kind, t in items:
        if kind == 'para':
            m = re.search(r'(\[\d{4}\])\s*$', out)          # an anchor just placed opens the NEW paragraph
            if m: out = out[:m.start()].rstrip() + '\n\n' + m.group(1) + ' '
            else: out = out.rstrip() + '\n\n'
            continue
        if kind == 'anchor':
            if out.endswith('-'): pend.append(t)
            else: out += ('' if out.endswith('\n') or not out else ' ') + t + ' '
            continue
        bands = re.match(r'^(\[b: .\] )', t)
        if bands: t = t[len(bands.group(1)):]
        if out.endswith('-') and not out.endswith(' -'):
            w, _, rest = t.partition(' ')
            out = out[:-1] + w
            marks = pend + ([bands.group(1).strip()] if bands else [])
            out += (' ' + ' '.join(marks) if marks else '') + (' ' + rest if rest else '')
            pend = []
        else:
            sep = '' if (not out or out.endswith('\n') or out.endswith(' ')) else ' '
            out += sep + (bands.group(1) if bands else '') + t
    return re.sub(r'[ \t]+', ' ', out).strip()

def greek(ci):
    cid, (fp, fl, lp, ll) = chunks[ci]
    items = []   # (kind, text): 'anchor' | 'line' | 'para'
    prev = None
    for pdf in range(fp, lp + 1):
        if pdf in SKIP: continue
        lines = open(f'{K}/checked/p-{pdf:04d}.txt').read().split('\n')
        a = fl if pdf == fp else 1; b = ll if pdf == lp else len(lines)
        items.append(('anchor', f'[{gcol(pdf)}]'))
        for i in range(a, b + 1):
            if MP:
                pg = f'p-{pdf:04d}'; raw_ = lines[i - 1].strip()
                if (pg, i) in MP_DROP: continue
                bd = MP_BANDS.get((pg, i))
                if bd and bd[2] and raw_ == bd[1]: raw_ = bd[2]                  # the glued margin letter off
                line = nfc(patched(pdf, i, raw_))
                if not line: continue
                if (pg, i) in MP_BREAK: items.append(('para', ''))
                items.append(('line', (f'[b: {bd[0]}] ' if bd else '') + line))
                continue
            line = nfc(patched(pdf, i, lines[i - 1].strip()))
            if not line: continue
            head = is_head(line, prev)
            if head or SECT.match(line) or (prev is not None and is_head(prev, None) and not head):
                items.append(('para', ''))
            items.append(('line', line))
            prev = line
    return join(items)


# ---------- Latin-only chunks (LATIN-ONLY-SPEC.md): the Latin column IS the source ----------
def latin_source(ci, app):
    """raw/kraken/<work>/latin-checked/<cid>.tsv (kt-apply-latin.py) -> source text: a [col] anchor at each column's first kept
    line, Migne's Latin-column notes (APP['latin']) as [n:]/[nt:], paragraph breaks from the plate's geometry, joined by join()."""
    cid = chunks[ci][0]
    rows = [l.rstrip('\n').split('\t', 1) for l in open(f'{K}/latin-checked/{cid}.tsv') if l.strip()]
    geo = {}
    for l in open(f'{T}/{cid}.lines.tsv').read().split('\n')[1:]:
        if l: r = l.split('\t'); geo[r[0]] = (int(r[1]), int(r[3]))
    med = {}
    for tag, (x1, x2) in geo.items(): med.setdefault(tag[:7], []).append((x1, x2))
    med = {k: (statistics.median(a for a, _ in v), statistics.median(b for _, b in v)) for k, v in med.items()}
    heads = {r['replaces'].split(',')[0] for r in csv.DictReader(open(f'{T}/verify/LATIN-HEADS.tsv'), delimiter='\t') if r['chunk'] == cid}
    notes = {}
    for rec in app.get('latin', {}).get(cid, []):                 # [tag, anchor, text, kind, nth, en]
        notes.setdefault(rec[0], []).append(rec)
    items, prev, prev_x2, seen_cols, in_head = [], None, None, set(), False
    SENT = re.compile(r'[.?!:»]$')
    for tag, text in rows:
        pg, side = int(tag[1:5]), tag[6]
        col = cmap[pg]['colLeft'] if side == 'L' else cmap[pg]['colRight']
        if (pg, side) not in seen_cols:
            seen_cols.add((pg, side)); items.append(('anchor', f'[{col}]'))
        plain = re.sub(r'^\[b: .\] ', '', text)
        ishead = '+' in tag or tag in heads
        brk = False
        if ishead:
            brk = (not in_head) or plain.startswith(('Ex ms.', 'Interprete')) or (prev is not None and re.match(r'^[IVX]+\.( [A-D])?$', prev))
        else:
            x1, x2 = geo[tag]; m1, m2 = med[tag[:7]]
            if in_head: brk = True
            elif prev is not None and SENT.search(prev) and x1 > m1 + 35: brk = True
            elif prev is not None and SENT.search(prev) and prev_x2 is not None and prev_x2 < m2 - 250: brk = True
            if re.match(r'^Cap\. [IVX]+\.', plain) or re.match(r'^\d{1,2}\. [A-ZÆŒ«]', plain) or tag == 'p0220.R.42': brk = True
        if brk and prev is not None: items.append(('para', ''))
        # Migne's notes after their anchor word (the nth occurrence on the line); several on one line: right to left
        ins = []
        for rec in notes.get(tag, []):
            anchor, ntext, kind = rec[1], rec[2], rec[3]; nth = rec[4] if len(rec) > 4 else 0
            ms = [m_ for m_ in re.finditer(r'(?<!\w)' + re.escape(anchor), text)] or [m_ for m_ in re.finditer(re.escape(anchor), text)]
            if not ms: sys.exit(f'Latin note anchor {anchor!r} not on {tag}: {text!r}')
            m_ = ms[min(nth, len(ms) - 1)]
            ins.append((m_.end(), f' [{kind}: {ntext}]'))
        for pos, ins_t in sorted(ins, key=lambda x: -x[0]): text = text[:pos] + ins_t + text[pos:]
        items.append(('line', text))
        in_head = ishead; prev = plain; prev_x2 = None if ishead else geo[tag][1]
    return join(items)

# ---------- Latin twin (witness) ----------
regions = json.load(open(f'{K}/regions.json'))
_xml = None
def latin(pdf):
    global _xml
    if _xml is None: _xml = open(os.path.join(ROOT, C['xml'])).read().split('<OBJECT ')
    boxes = [r['box'] for r in regions.get(f'p-{pdf:04d}', []) if r['class'] == 'MainText_ColLatin']
    out = []
    for line in re.findall(r'<LINE[^>]*>(.*?)</LINE>', _xml[pdf], re.S):
        ws = [w for c, w in re.findall(r'<WORD coords="([^"]+)"[^>]*>([^<]*)</WORD>', line)
              if (lambda x1, y2, x2, y1: any(b[0] <= (x1 + x2) / 2 <= b[2] and b[1] <= (y1 + y2) / 2 <= b[3] for b in boxes))(*map(int, c.split(',')[:4]))]
        if ws: out.append(' '.join(ws))
    return '\n'.join(out)

# ---------- English ----------
def card(cid):
    s = open(f'{T}/{cid}.en.md').read()
    body, _, rest = s.partition('\n## Notes')
    notes_txt, _, _ = rest.partition('\n## OCR')
    body = re.sub(r'^title:.*\n', '', body.lstrip()); body = re.sub(r'^---\s*\n', '', body.lstrip())
    notes = {m.group(1): m.group(2).strip() for m in re.finditer(r'^\[\^(\d+)\]:\s*(.*)$', notes_txt, re.M)}
    return body.strip(), notes

def english(cid, sics, ns):
    """sics: {note_no: printed} -> [sic:]; ns: {note_no: migne_text} -> [n:]. Others -> cruces (returned)."""
    body, notes = card(cid)
    if C.get('unwrap'): body = re.sub(r'(?<!\n)\n(?!\n)', ' ', body)      # Sophronius: hard-wrapped cards (single newline = same paragraph)
    body = re.sub(r'^#{2,4} ', '', body, flags=re.M)     # so-020's `### Chapter` heads: plain text (no builder renders ###)
    body = body.replace('**', '')                      # Instruction heads: plain (the builder's *…* is italic only)
    crux = []; col = None; band = None
    def rep(m):
        n = m.group(1)
        if n in sics: return f' [sic: *{sics[n]}*]⟪{n}⟫'   # the translator's explanation still goes to the cruces
        if n in ns:   # Migne's own reference replaces ours; a translator's note that says MORE stays in the cruces
            keep = len(re.sub(r'^S\.\s*', '', notes.get(n, '')).strip()) > 30
            return f' [n: {ns[n]}]' + (f'⟪{n}⟫' if keep else '')
        return f'⟪{n}⟫'
    body = re.sub(r'\[\^(\d+)\]', rep, body)
    # locate the remaining notes for cruces.md
    for m in re.finditer(r'\[(\d{4})\]|\[b: ([A-D])\]|⟪(\d+)⟫', body):
        if m.group(1): col, band = m.group(1), None
        elif m.group(2): band = m.group(2)
        else:
            n = m.group(3); before = re.sub(r'\[[^\]]*\]|⟪\d+⟫', '', body[max(0, m.start() - 120):m.start()]).split()[-8:]
            crux.append((col, band, ' '.join(before), notes.get(n, '(note text missing)')))
    body = re.sub(r'⟪\d+⟫', '', body)
    body = re.sub(r'[ \t]+([,.;:·])', r'\1', re.sub(r'[ \t]{2,}', ' ', body))
    return body, crux

def frontmatter(ci, g, ctx=None):
    body = re.findall(r'\[(\d{4})\]', g)
    cols = body or [ctx]
    ctxv = ctx or cols[0]
    words = len(re.sub(r'\[[^\]]*\]', ' ', g).split())
    inc = ' '.join((re.sub(r'\[nt?: [^\]]*\]', ' ', g) if isla(ci) else g).split()[:14]).replace('"', '\\"')   # Latin-only: Migne's notes are not the incipit
    return '\n'.join(['---', f'workKey: "{KEY}"', f'work: "{W["title"]}"', f'workEn: "{W["titleEn"]}"',
        f'authors: ["{W["author"]}"]', 'series: "pg"', f'volume: {C["vol"]}', f'language: "{"la" if isla(ci) else "grc"}"',
        f'chunk: {ci + 1}', f'chunkCount: {N}', f'colContext: "{ctxv}"', f'colFirst: "{cols[0]}"',
        f'colLast: "{cols[-1]}"', f'words: {words}', f'incipit: "{inc}"', (f'latinSource: "ours-djvu-ocr-image-checked"' if isla(ci) else f'greekSource: "{W.get("greekSource", "ours-vision-ocr")}"'), '---', '']), cols, words

if __name__ == '__main__':
    APP = json.load(open(f'{T}/notes/APPARATUS.json')) if os.path.exists(f'{T}/notes/APPARATUS.json') else {}
    SICS = json.load(open(f'{T}/verify/SIC-MAP.json')) if os.path.exists(f'{T}/verify/SIC-MAP.json') else {}
    gdir, ldir, edir = (os.path.join(ROOT, d, KEY) for d in ('src/greek', 'src/pg-latin', 'src/english'))
    for d in (gdir, ldir, edir): os.makedirs(d, exist_ok=True)
    man = {'workKey': KEY, 'series': 'pg', 'volume': C['vol'], 'title': W['title'], 'titleEn': W['titleEn'],
           'authors': [W['author']], 'citRange': W['citRange'], 'chunkCount': N, 'greekSource': W.get('greekSource', 'ours-vision-ocr'),
           'builtBy': 'scripts/kt-to-site.py (kt method: translated before site chunking; cuts are the translators\')',
           'chunks': []}
    allcrux = []; placed_g = set(); placed_all = set()
    def base(x): return ''.join(c for c in ud.normalize('NFD', x.lower()) if ud.category(c) in ('Ll', 'Lu', 'Lo'))
    def find_word(g, word, start):
        """end offset of `word` (or its letters, accents ignored) at or after `start`; multiword allowed"""
        word = {'προεσημηνύσαμεν': 'προεσημηνήσαμεν', 'ἀφαρῇ': 'ἀφρῇ'}.get(word, word)   # note reader's spelling vs ours
        i = g.find(word, start)
        if i >= 0: return i + len(word)
        want = base(word)
        for m in re.finditer(r'\S+', g[start:]):
            for k in (1, 2):                                   # one token, or two (ἀλλὰ χοῦ)
                toks = re.findall(r'\S+', g[start + m.start():])[:k]
                if base(''.join(toks)) == want or (len(want) > 4 and base(toks[0]).startswith(want[:-1]) and k == 1):
                    end = start + m.start() + len(' '.join(toks))
                    while end > 0 and g[end - 1] in ',.·;»':
                        end -= 1
                    return end
        return None
    for ci, (cid, (fp, fl, lp, ll)) in enumerate(chunks):
        g = latin_source(ci, APP) if isla(ci) else greek(ci)
        for ckey, items in APP.get('greek', {}).items():           # Migne's numbered notes, keyed to the GREEK
            if cid not in ckey.split('|'): continue
            for page, word, txt in items:
                if not txt.strip(): continue                           # an unprinted variant line: listed, never placed
                if (cid, page, word) in placed_g or (page, word, txt.strip()) in placed_all: continue
                if page not in cmap: continue
                gm = re.sub(r'\[n: [^\]]*\]', lambda m_: '\0' * len(m_.group()), g)   # search with earlier notes masked: a note's own words are not anchors
                anc = f'[{gcol(page)}]'; start = gm.find(anc)
                if start < 0: continue
                ln_ = (APP.get('greekLines', {}).get(f'{page}|{word}|{txt.strip()}') or {}).get('line')
                if ln_:                                                  # Moschus: begin the search at the note's own line
                    ltok = nfc(open(f'{K}/checked/p-{page:04d}.txt').read().split('\n')[ln_ - 1]).split()[1:4]
                    m_ = re.compile(r'(?:\s|\0)+'.join(re.escape(t_) for t_ in ltok)).search(gm, start) if ltok else None   # earlier notes sit between the line's words as \0 runs
                    if m_: start = m_.start()
                nth = {(940, 'ἑπτὰ'): 3}.get((page, word), 1)   # blind read R5: Migne's mark is on the THIRD ἑπτὰ of the page (Αἱ γὰρ ἑπτὰ, p0940.37)
                for _ in range(nth - 1):
                    k = gm.find(word, start)
                    if k >= 0: start = k + len(word)
                hit = find_word(gm, word, start)
                if hit is None: continue
                if MP:                                                   # a note belongs to ITS page's column: never look past the next column anchor
                    nx = re.search(r'\[\d{4}\]', gm[start + len(anc):])
                    if nx and hit > start + len(anc) + nx.start(): continue
                g = g[:hit] + f' [n: {txt}]' + g[hit:]; placed_g.add((cid, page, word)); placed_all.add((page, word, txt.strip()))
        e, crux = english(cid, SICS.get(cid, {}), APP.get('english', {}).get(cid, {}))
        ctx = None
        if fl > 1 and ci > 0 and LANG.get(chunks[ci - 1][0]) == LANG.get(cid):   # (LANG guard: a Greek chunk after a Latin one keeps its anchor)   # opens mid-page: the column anchor belongs to the previous chunk; this one carries it as colContext only
            ctx = f'{gcol(fp)}'
            g = re.sub(r'^\[' + ctx + r'\]\s*', '', g, count=1)
            e = re.sub(r'\[' + ctx + r'\]\s*', '', e, count=1)
        fm, cols, words = frontmatter(ci, g, ctx)
        allcrux += [(ci + 1, cid) + c for c in crux]
        pages = [p for p in range(fp, lp + 1) if p not in SKIP]
        lat = '\n\n'.join(f'[{lcol(p)}] ' + latin(p) for p in pages)
        n4 = f'{ci + 1:04d}.md'
        man['chunks'].append({'chunk': ci + 1, 'file': n4, 'source': cid, 'colFirst': cols[0], 'colLast': cols[-1],
                              'words': words, 'pdfPages': pages, **({'language': LANG.get(cid, 'grc')} if LANG else {})})
        if DRY: print(n4, cid, cols[0], cols[-1], words); continue
        open(f'{gdir}/{n4}', 'w').write(fm + '\n' + g + '\n')
        open(f'{edir}/{n4}', 'w').write(fm + '\n' + e + '\n')
        if isla(ci):
            open(f'{ldir}/{n4}', 'w').write(f'<!-- No twin: Migne prints this oration in Latin only; the Latin IS the source (src/greek/{KEY}/{n4}). -->\n')
        else: open(f'{ldir}/{n4}', 'w').write(f'<!-- Latin twin for {KEY} chunk {ci + 1} ({cid}). Facing Latin columns of pdf pages '
            f'{pages[0]}–{pages[-1]}, WHOLE pages (the twin can start before and run past the Greek). Source: {C["xml"]} '
            f'(archive.org OCR). ⛔ WITNESS, NOT AUTHORITY. Built by scripts/kt-to-site.py -->\n\n{lat}\n')
    if DRY: sys.exit()
    man['colFirst'] = man['chunks'][0]['colFirst']; man['colLast'] = man['chunks'][-1]['colLast']
    man['words'] = sum(c['words'] for c in man['chunks'])
    json.dump(man, open(f'{gdir}/manifest.json', 'w'), ensure_ascii=False, indent=2)
    json.dump({'workKey': KEY, 'source': C['xml'], 'builtBy': 'scripts/kt-to-site.py',
               'role': 'WITNESS for adjudication and vocabulary. Not authority, not the apparatus source.',
               'chunks': [{'chunk': c['chunk'], 'pdfPages': c['pdfPages']} for c in man['chunks']]},
              open(f'{ldir}/manifest.json', 'w'), ensure_ascii=False, indent=2)
    with open(f'{edir}/cruces.md', 'w') as o:
        o.write(f'# Cruces — {KEY}\n\nTranslators\' notes (kt method, 2026-10-27), moved out of the running English. Each is keyed by '
                'chunk, column and band, and quotes the English words it follows. Plate verdicts: '
                f'`translate/{work}/verify/VERDICTS.tsv`. Glossary: `translate/{work}/GLOSSARY.md`. In the English, ⟨…⟩ marks words '
                'we supply where the printed sentence needs them (whether the plate lost them or Migne\'s text never had them); '
                'each has a note below.\n\n')
        cur = None
        for ci, cid, col, band, before, txt in allcrux:
            if ci != cur: o.write(f'\n## Chunk {ci:04d} ({cid})\n\n'); cur = ci
            o.write(f'- **{col}{band or ""}** · …{before} — {txt}\n')
        placed_words = {(p_, w_) for _, p_, w_ in placed_g}
        miss = [n for n in APP.get('unplaced', [])] + [
            {'page': f'p-{p_:04d}', 'series': 'numbered', 'marker': None, 'text': t_ or '(variant line unprinted)', 'greekWord': w_}
            for k_, its in APP.get('greek', {}).items() for p_, w_, t_ in its if (p_, w_) not in placed_words]
        allg = sum(len(v) for v in APP.get('greek', {}).values())
        o.write(f'\n## Migne\'s notes not placed in the running text\n\nMigne\'s foot-of-page apparatus was read for every page '
                f'(translate/{work}/notes/result-*.jsonl). Placed in the text: {len(placed_g)} of {allg} numbered Greek notes, and the '
                'Scripture notes whose quotation a translator had marked. The rest are listed here by page: notes to Migne\'s own '
                'prefatory notice, his cautions on the Latin, and Scripture references with no marked quotation.\n\n')
        for n in miss:
            o.write(f"- p. {n['page'][2:]} ({n.get('series')}, {n.get('marker') or 'marker illegible'}): {n['text']}"
                    + (f" — keyed to {n.get('latinWord') or n.get('greekWord') or ''}" if (n.get('latinWord') or n.get('greekWord')) else '') + '\n')
        vf = f'{T}/verify/VERDICTS.tsv'
        if os.path.exists(vf):
            if MP: o.write('\n## Readings checked at the plate\n\nEvery reading the translators flagged was looked up on the page image '
                    '(2026-11-04). **migne** = the plate prints it (Migne\'s own text); the Greek stands as printed. '
                    'Of the 1,018 flagged readings, 648 were slips in our own transcription and are corrected in the Greek without comment; '
                    'this table lists the 368 where the plate agrees with the machine reading: 208 where Migne\'s type is itself wrong and the '
                    'English follows the corrected reading, 146 where the translator suspected a misprint but the plate prints that very form '
                    '(Migne\'s own text, so not emended), and 14 not settled at the plate. No misprint is marked `[sic:]` in the English: '
                    'that mark claims a defect in Migne\'s page and waits on a full-page reading of each column.\n\n')
            else: o.write('\n## Readings checked at the plate\n\nEvery reading the translators flagged, looked up on the page image '
                    '(2026-10-27). **migne** = the plate prints it (Migne\'s own text; a misprint carries `[sic:]` in the English where '
                    'a note marked the spot); **ours** = a slip in our transcription, corrected in the Greek; **neither** = worn type.\n\n')
            o.write('| page.line | printed | read as | kind | verdict | plate |\n|---|---|---|---|---|---|\n')
            for r in csv.DictReader(open(vf), delimiter='\t'):
                cell = lambda x: x.replace('|', '/').replace('\n', ' ')
                o.write(f"| {r['tag']} | {cell(r['printed'])} | {cell(r['reading'])} | {r['kind']} | {r['verdict']} | {cell(r['plate'])} |\n")
    if LANG:                                                  # Latin-only chunks: two more cruces sections (LATIN-ONLY-SPEC.md section 4)
        with open(f'{edir}/cruces.md', 'a') as o:
            o.write("\n## Migne's notes to the Latin-only orations, in English\n\nOrations I, III and VI survive in Migne only in Latin, so his Latin-column apparatus stands "
                    "in the Latin text as `[n:]` (a locator) or `[nt:]` (prose). Each prose note is listed here with a **working translation of Migne's note** "
                    "(a first reading, not yet reviewed), by column and Latin anchor word.\n\n")
            for cid_, recs in sorted(APP.get('latin', {}).items()):
                for tag, anchor, ntext, kind, *rest in recs:
                    if kind != 'nt': continue
                    pg_ = int(tag[1:5]); col_ = cmap[pg_]['colLeft'] if tag[6] == 'L' else cmap[pg_]['colRight']
                    o.write(f"- **{col_}** · Latin *{anchor}* ({cid_}) — working translation of Migne's note: {(rest[1] if len(rest) > 1 and rest[1] else '(no English recorded)')}\n")
            lf = f'{T}/verify/LATIN-OVERRIDES.tsv'
            nrow = list(csv.DictReader(open(lf), delimiter='\t'))
            cnt = {v: sum(1 for r in nrow if r['verdict'] == v) for v in 'MP?'}
            o.write("\n## Readings checked at the plate: Orations I, III, VI\n\nMigne prints these orations in Latin only. Every reading the translators flagged (949) "
                    "was looked up on the page image (2026-11-05): 910 were slips in our transcription of the scan and are corrected without comment; "
                    f"the table lists the other {len(nrow)}: {cnt['M']} where Migne's type is itself wrong (the Latin column prints it as he did; the English follows the corrected reading), "
                    f"{cnt['P']} where the plate prints the form the translator doubted (Migne's text, kept), {cnt['?']} not settled at the plate.\n\n")
            o.write('| page.line | the scaffold read | the Latin column prints | verdict |\n|---|---|---|---|\n')
            for r in nrow:
                cell = lambda x: x.replace('|', '/').replace('\n', ' ')
                o.write(f"| {r['tag']} | {cell(r['printed'])} | {cell(r['latin'])} | {r['verdict']} |\n")
    print(f'{N} chunks -> {gdir}, {ldir}, {edir}; {len(allcrux)} cruces')
