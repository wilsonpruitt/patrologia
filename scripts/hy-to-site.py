#!/usr/bin/env python3
"""VERSE builder: translate/<work>/<prefix>-00N.en.md cards + base/NNNN.{greek,latin}.txt -> site chunks
(src/greek, src/pg-latin, src/english) for a work in Greek verse printed in short lines, two columns per pdf page.

Built for Maximus, *Hymni* (PG 91.1417-1424), 2026-11-15; the Sophronius *Anacreontica* can reuse it (change CONF).

  python3 scripts/hy-to-site.py maximus-hymni            # writes all three trees + manifests + cruces.md
  python3 scripts/hy-to-site.py maximus-hymni --dry      # report only

Rules (translation-style.md, "Greek verse", V1/V9): ONE printed line = ONE file line; the English has exactly as many lines as the
Greek. A paragraph (⟦pN⟧) is one SENTENCE; each of its lines carries ⟦sK⟧ (K = line within the sentence); its lines are joined by a newline, which the page builder renders as a line break
(work.verse = true). The sentence boundaries are the ENGLISH ones (a line ending . ? !) applied to the Greek at the same line
index, because V1 makes the two coincide (Greek ';' is a question mark but may sit mid-sentence: 1421 line 2). The sentence aligner
is NOT run (the pairing is 1:1 by construction; the Latin twin is a witness only). The heading block (title, citation, hymn
number + heading) is one paragraph.
Column anchors [NNNN] sit at the first line of each printed column (the cards already carry them; asserted equal to the Greek's);
the band letters ([b: X], from base/BANDS.tsv, file-line numbers) go in the GREEK only, as in the prose works.
Numbered translator notes [^n] leave the English and go to cruces.md keyed by column and band.
"""
import csv, json, os, re, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
CONF = {
    'maximus-hymni': dict(key='maximus-confessor-hymni', vol=91, prefix='hy',
                          cols=['1417', '1418', '1419', '1420', '1421', '1422', '1423', '1424'],
                          # pdf page of each column pair (Greek side), from base/REPORT.md
                          pdf={'1417': 771, '1418': 771, '1419': 772, '1420': 772, '1421': 773, '1422': 773, '1423': 774, '1424': 774},
                          # a hymn starts at its '#H <numeral>.' line; chunk 1 starts at the top of the first column
                          starts=['I.', 'II.', 'III.']),
}
work = sys.argv[1]; DRY = '--dry' in sys.argv
C = CONF[work]; KEY = C['key']
T = os.path.join(ROOT, 'translate', work); B = f'{T}/base'
reg = json.load(open(os.path.join(ROOT, 'data/pg-works.json')))
W = next(w for w in reg['works'] if w['key'] == KEY)

# ---------- base: (col, file_line_no, kind, text) ----------
def read_base(kind):
    rows = []
    for col in C['cols']:
        for i, l in enumerate(open(f'{B}/{col}.{kind}.txt').read().split('\n'), 1):
            if not l.strip(): continue
            k = 'H' if l.startswith('#H ') else 'C' if l.startswith('#C ') else 'V'
            rows.append((col, i, k, l[3:] if k != 'V' else l))
    return rows
bands = {(r['col'], int(r['line_no_in_greek_file'])): r['letter'] for r in csv.DictReader(open(f'{B}/BANDS.tsv'), delimiter='\t')}

def split_hymns(rows):
    """rows -> list of per-hymn row lists, cut at the '#H <numeral>.' line that opens each hymn (the first hymn opens at the top)."""
    cuts = [0] + [i for i, r in enumerate(rows) if r[2] == 'H' and r[3] in C['starts'][1:]]
    return [rows[a:b] for a, b in zip(cuts, cuts[1:] + [len(rows)])]

def head_groups(hrows):
    """leading H/C rows -> display lines: a numeral line ('I.') joins the heading that follows it"""
    out = []; i = 0
    while i < len(hrows) and hrows[i][2] in 'HC':
        r = hrows[i]
        if r[2] == 'H' and r[3] in C['starts'] and i + 1 < len(hrows) and hrows[i + 1][2] == 'H':
            out.append((r[0], r[1], r[3] + ' ' + hrows[i + 1][3])); i += 2
        else: out.append((r[0], r[1], r[3])); i += 1
    return out, hrows[i:]

greek_h = split_hymns(read_base('greek')); latin_h = split_hymns(read_base('latin'))
N = len(greek_h)

# ---------- English cards ----------
SENT_END = re.compile(r'[.?!][\'"’”»)*]*$')
def card(n):
    s = open(f'{T}/{C["prefix"]}-{n:03d}.en.md').read()
    s = re.sub(r'^---\n.*?\n---\n', '', s, flags=re.S)
    m = re.search(r'(?m)^\[\^1\]:', s)
    body = s[:m.start()] if m else s
    notes = {x.group(1): re.sub(r'\s*\n\s*', ' ', x.group(2)).strip()
             for x in re.finditer(r'^\[\^(\d+)\]:\s*(.*?)(?=\n\[\^\d+\]:|\Z)', s[m.start():] if m else '', re.M | re.S)}
    blocks = [b for b in body.strip('\n').split('\n\n') if b.strip()]
    assert len(blocks) == 2, f'{n}: expected heading block + verse block, got {len(blocks)}'
    return blocks[0].split('\n'), blocks[1].split('\n'), notes

def plain(l): return re.sub(r'\s*\[\^\d+\]|\s*\[lat: [^\]]*\]|\[\d{4}\]\s*|\*', '', l).strip()

# ---------- build ----------
gdir, ldir, edir = (os.path.join(ROOT, d, KEY) for d in ('src/greek', 'src/pg-latin', 'src/english'))
man = {'workKey': KEY, 'series': 'pg', 'volume': C['vol'], 'title': W['title'], 'titleEn': W['titleEn'], 'authors': [W['author']],
       'citRange': W['citRange'], 'chunkCount': N, 'greekSource': W.get('greekSource', 'ours-vision-ocr'),
       'builtBy': 'scripts/hy-to-site.py (verse: one printed line per line, one paragraph per sentence)', 'chunks': []}
crux_all = []; problems = []; review = []
def fm_for(ci, g, ctxcols):
    cols = re.findall(r'\[(\d{4})\]', g) or [ctxcols[0]]
    words = len(re.sub(r'\[[^\]]*\]', ' ', g).split())
    inc = ' '.join(re.sub(r'\[b: [A-D]\]|\[\d{4}\]', ' ', g).split()[:14]).replace('"', '\\"')
    return '\n'.join(['---', f'workKey: "{KEY}"', f'work: "{W["title"]}"', f'workEn: "{W["titleEn"]}"', f'authors: ["{W["author"]}"]',
        'series: "pg"', f'volume: {C["vol"]}', 'language: "grc"', f'chunk: {ci + 1}', f'chunkCount: {N}', f'colContext: "{ctxcols[0]}"',
        f'colFirst: "{cols[0]}"', f'colLast: "{cols[-1]}"', f'words: {words}', f'incipit: "{inc}"', f'greekSource: "{W.get("greekSource", "ours-vision-ocr")}"', '---', '']), cols, words

for ci in range(N):
    n = ci + 1
    eh, ev, notes = card(n)
    gh, gv = head_groups(greek_h[ci]); lh, lv = head_groups(latin_h[ci])
    if len(eh) != len(gh): problems.append(f'hy-{n:03d}: heading lines English {len(eh)} vs Greek {len(gh)}')
    if len(ev) != len(gv): problems.append(f'hy-{n:03d}: verse lines English {len(ev)} vs Greek {len(gv)}')
    if problems: continue
    # first column of the chunk: the column of its first Greek row; the card's own anchor must agree at every line
    prev_col = None; g_lines = []; l_lines = []; e_lines = []
    allg = [(c, fl, t, 'H') for c, fl, t in gh] + [(c, fl, t, 'V') for c, fl, k, t in gv]
    for i, (c, fl, t, k) in enumerate(allg):
        anchor = f'[{c}] ' if c != prev_col else ''
        # chunk 2 and 3 open with an anchor for the column the hymn heading sits in, even when it is the previous chunk's column too
        if i == 0: anchor = f'[{c}] '
        prev_col = c
        band = f'[b: {bands[(c, fl)]}] ' if (c, fl) in bands else ''
        g_lines.append(anchor + band + t)
    # English: the card's anchors are the truth for the English; check they coincide with the Greek's
    e_anch = [re.match(r'\[(\d{4})\]', l).group(1) if re.match(r'\[(\d{4})\]', l) else None for l in eh + ev]
    g_anch = [re.match(r'\[(\d{4})\]', l).group(1) if re.match(r'\[(\d{4})\]', l) else None for l in g_lines]
    if e_anch != g_anch:
        for i, (a, b) in enumerate(zip(e_anch, g_anch)):
            if a != b: problems.append(f'hy-{n:03d} line {i + 1}: anchor English {a} vs Greek {b}')
        continue
    # sentences = English line ends; applied to heading block (one paragraph) then verse
    e_all = eh + ev
    ends = [False] * len(e_all)
    ends[len(eh) - 1] = True
    for i in range(len(eh), len(e_all)):
        ends[i] = bool(SENT_END.search(plain(e_all[i]))) or i == len(e_all) - 1
    # review: Greek line ends with . ; ! (mark) where English does not end, and vice versa
    for i in range(len(eh), len(e_all)):
        gt = gv[i - len(eh)][3].rstrip()
        gend = bool(re.search(r'[.;!]$', gt))
        if gend != ends[i]: review.append(f'hy-{n:03d} verse line {i - len(eh) + 1} [{gv[i - len(eh)][0]}]: Greek {gt[-12:]!r} / English {plain(e_all[i])[-18:]!r}  (English decides)')
    def paragraphs(lines):
        out = []; cur = []; pn = 0
        for l, end in zip(lines, ends):
            cur.append(f'⟦s{len(cur) + 1}⟧ ' + l)     # every printed line is a marked unit, so the parallel view pairs line with line (V1)
            if end:
                pn += 1; out.append(f'⟦p{pn}⟧ ' + '\n'.join(cur)); cur = []
        return '\n\n'.join(out), pn
    # notes: leave the English, go to cruces keyed by column + band + the words before the marker
    col = None; band = None; e_clean = []
    for i, l in enumerate(e_all):
        m_ = re.match(r'\[(\d{4})\]', l)
        if m_: col = m_.group(1)
        fl = allg[i][1]; c_ = allg[i][0]
        if (c_, fl) in bands: band = bands[(c_, fl)]
        for mk in re.finditer(r'\[\^(\d+)\]', l):
            before = re.sub(r'\[\^\d+\]|\[lat: [^\]]*\]|\[\d{4}\]|\*', '', l[:mk.start()]).split()[-8:]
            crux_all.append((n, col, band, ' '.join(before), notes.get(mk.group(1), '(note text missing)')))
        e_clean.append(re.sub(r'\s*\[\^\d+\]', '', l))
    # tidy: marker removal can leave "[lat: …]" glued to punctuation fine; nothing else to do
    e_clean[0:0] = []
    gtxt, pn = paragraphs(g_lines); etxt, pn2 = paragraphs(e_clean)
    assert pn == pn2
    fm, cols, words = fm_for(ci, gtxt, [allg[0][0]])
    # Latin twin: facing verse lines of the same hymn, anchors at column starts
    lat = []; pc = None
    for c, fl, t in lh: lat.append((f'[{c}] ' if (c != pc or not lat) else '') + t); pc = c
    for c, fl, k, t in lv: lat.append((f'[{c}] ' if c != pc else '') + t); pc = c
    pages = sorted({C['pdf'][c] for c in re.findall(r'\[(\d{4})\]', gtxt)})
    n4 = f'{n:04d}.md'
    man['chunks'].append({'chunk': n, 'file': n4, 'source': f'{C["prefix"]}-{n:03d}', 'colFirst': cols[0], 'colLast': cols[-1], 'words': words, 'pdfPages': pages})
    print(n4, cols[0], cols[-1], f'{pn} sentences', f'{len(e_all)} lines', words, 'Greek words')
    if DRY: continue
    for d in (gdir, ldir, edir): os.makedirs(d, exist_ok=True)
    open(f'{gdir}/{n4}', 'w').write(fm + '\n' + gtxt + '\n')
    open(f'{edir}/{n4}', 'w').write(fm + '\n' + etxt + '\n')
    open(f'{ldir}/{n4}', 'w').write(f'<!-- Latin twin for {KEY} chunk {n} ({C["prefix"]}-{n:03d}). The facing Latin verse (Rittershausen?: unverified) of the same hymn, line for line, from raw/kraken/{work}/pages by plate reading '
                                   f'(translate/{work}/base/*.latin.txt). ⛔ WITNESS, NOT AUTHORITY. Built by scripts/hy-to-site.py -->\n\n' + '\n'.join(lat) + '\n')

if problems:
    print('PROBLEMS:'); [print(' ', p) for p in problems]; sys.exit(1)
print(f'{len(review)} sentence-end differences Greek punctuation vs English (English decides):'); [print(' ', r) for r in review]
if DRY: sys.exit()
man['colFirst'] = man['chunks'][0]['colFirst']; man['colLast'] = man['chunks'][-1]['colLast']; man['words'] = sum(c['words'] for c in man['chunks'])
json.dump(man, open(f'{gdir}/manifest.json', 'w'), ensure_ascii=False, indent=2)
json.dump({'workKey': KEY, 'source': f'translate/{work}/base/*.latin.txt', 'builtBy': 'scripts/hy-to-site.py',
           'role': 'WITNESS for adjudication and vocabulary. Not authority.',
           'chunks': [{'chunk': c['chunk'], 'pdfPages': c['pdfPages']} for c in man['chunks']]}, open(f'{ldir}/manifest.json', 'w'), ensure_ascii=False, indent=2)
with open(f'{edir}/cruces.md', 'w') as o:
    o.write(f'# Cruces — {KEY}\n\nTranslators\' notes (kt method, 2026-11-15), moved out of the running English. Each is keyed by chunk, column and band, '
            f'and quotes the English words it follows. Plate checks: `translate/{work}/PLATE-CHECKS.tsv`. Glossary: `translate/{work}/GLOSSARY.md`. '
            'Where the facing Latin verse departs in sense from the Greek, the English carries a `[lat: …]` mark; its ordinary freedoms are not marked.\n\n')
    cur = None
    for n, col, band, before, txt in crux_all:
        if n != cur: o.write(f'\n## Chunk {n:04d} ({C["prefix"]}-{n:03d})\n\n'); cur = n
        o.write(f'- **{col}{band or ""}** · …{before} — {txt}\n')
print('written:', gdir)
