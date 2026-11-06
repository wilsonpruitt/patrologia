#!/usr/bin/env python3
"""Place Migne's recovered notes (result-*.jsonl + verify overlay) -> APPARATUS.json, same shape as Dorotheus's.
- numbered notes keyed in the GREEK column -> greek["cid|cid"] = [[page, anchorWord, text], ...]; kt-to-site puts
  [n: text] after that word. Sidecar greekLines[f"{page}|{word}|{text}"] = anchorLine for picking the right
  occurrence of a repeated word (kt-to-site Dorotheus used a hard-coded nth).
- everything else (lettered scholia, NOTÆ endnotes, notes keyed in the Latin, anything with no anchor) -> unplaced[],
  listed on the cruces page with latinWord/greekWord and the translator's `en`.
Overlay: result-1b.jsonl REPLACES result-1 for pp. 187-192.
Checks printed: anchor word found on the page in checked/; duplicates dropped; chunk of every note.
Run from ~/patrologia:  python3 translate/sophronius-orationes/notes/place.py"""
import csv, json, os, re, unicodedata as ud
from collections import Counter
T = 'translate/sophronius-orationes'; K = 'raw/kraken/sophronius-orationes/checked'
OVER = {f'p-{n:04d}' for n in range(187, 193)}   # result-1b (clean re-read) REPLACES result-1 for pp. 187-192
rows = []
for k in range(1, 7):
    for l in open(f'{T}/notes/result-{k}.jsonl'):
        if l.strip(): rows.append(json.loads(l))
rows = [r for r in rows if not (r['page'] in OVER)]
rows += [json.loads(l) for l in open(f'{T}/notes/result-1b.jsonl') if l.strip()]
notes, seen, dups = [], set(), 0
for r in rows:
    if r.get('none'): continue
    key = (r['page'], r.get('marker'), r.get('text'), r.get('anchorWord'))
    if key in seen: dups += 1; continue
    seen.add(key); notes.append(r)
chunks = []
for r in csv.DictReader(open(f'{T}/CHUNKS.tsv'), delimiter='\t'):
    f_, l_ = r['first'].split(':'), r['last'].split(':')   # Latin-only chunks carry a bare page: whole pages
    chunks.append((r['chunk'], int(f_[0][2:]), int(f_[1]) if len(f_) > 1 else 0, int(l_[0][2:]), int(l_[1]) if len(l_) > 1 else 999))
def cids_for(page): return [c for c, fp, fl, lp, ll in chunks if fp <= page <= lp]
def cid_at(page, line): return next((c for c, fp, fl, lp, ll in chunks if (page, line) >= (fp, fl) and (page, line) <= (lp, ll)), None)
def toks(x): return [base(w) for w in x.split() if base(w)]
def find_line(page, anchor_line, word):
    """the checked line of `page` that best matches the note's anchorLine (token overlap), requiring the anchor word on it"""
    if not anchor_line: return None
    A = set(toks(re.sub(r'[⁰¹²³⁴⁵⁶⁷⁸⁹*]+', ' ', anchor_line))); best = (0, None)
    L = open(f'{K}/p-{page:04d}.txt').read().split('\n')
    for i, l in enumerate(L, 1):
        ov = len(A & set(toks(l)))
        if ov > best[0] and (base(word) in base(l)): best = (ov, i)
    return best[1] if best[0] >= 2 else None
def base(x): return ''.join(c for c in ud.normalize('NFD', x.lower()) if ud.category(c) in ('Ll', 'Lu', 'Lo'))
pagetext = {}
def onpage(page, word):
    t = pagetext.setdefault(page, base(open(f'{K}/p-{page:04d}.txt').read()))
    return base(word) in t
app = {'greek': {}, 'greekLines': {}, 'unplaced': []}; miss_anchor = []; nolines = []
notes.sort(key=lambda n: (n['page'], n.get('where') != 'foot'))
for n in notes:
    page = int(n['page'][2:]); cids = cids_for(page)
    w, txt = n.get('anchorWord'), (n.get('text') or '')
    if n.get('series') == 'numbered' and n.get('column') == 'greek' and w and txt.strip():
        if not onpage(page, w): miss_anchor.append((n['page'], n.get('marker'), w))
        ln = find_line(page, n.get('anchorLine'), w)
        cid = cid_at(page, ln) if ln else None
        key_ = cid or '|'.join(cids)                       # located -> ONE chunk; else both candidates (kt-to-site places once)
        app['greek'].setdefault(key_, []).append([page, w, txt.strip()])
        app['greekLines'][f'{page}|{w}|{txt.strip()}'] = {'line': ln, 'anchorLine': n.get('anchorLine')}
        if not ln: nolines.append((n['page'], n.get('marker'), w))
        continue
    u = {k: v for k, v in n.items()}
    if n.get('column') == 'latin' and w: u['latinWord'] = w
    elif w: u['greekWord'] = w
    u['chunks'] = cids
    app['unplaced'].append(u)
# ---------------- Latin pass (LATIN-ONLY-SPEC.md section 4): notes keyed in the LATIN column of so-019/020/021 ----------------
# The Latin of these three orations IS the source text (no Greek), so Migne's Latin-column apparatus is placed there:
#   [n: text] for a locator (en is null: Scripture, Ibid.), [nt: text] for prose (Hardouin, Mai, Ballerini, Bollandist).
# Scripture locators are also mirrored into the English (Dorotheus's matcher) against the chunk's translator S notes.
# What does not locate stays in unplaced[] (cruces only). Mai's note printed IN the column (p0220.R.42-44, unmarked) is dropped.
LATIN_DIR = 'raw/kraken/sophronius-orationes/latin-checked'
LCH = {'so-019': range(215, 221), 'so-020': range(258, 266), 'so-021': range(272, 276)}
SUP = {c: str(i) for i, c in enumerate('⁰¹²³⁴⁵⁶⁷⁸⁹')}
src = open('translate/dorotheus-doctrinae/notes/place.py').read()
exec(src[src.index('ROMAN = '):src.index('def card(')])           # roman, BOOK, EN, LAST, migne_refs, s_refs: Dorotheus's matcher, reused unchanged
def card_notes(cid):
    s = open(f'{T}/{cid}.en.md').read(); nt = s.partition('\n## Notes')[2].partition('\n## OCR')[0]
    return {m.group(1): m.group(2) for m in re.finditer(r'^\[\^(\d+)\]:\s*(.*)$', nt, re.M)}
latin = {}
if os.path.isdir(LATIN_DIR):
    for cid in LCH:
        for l in open(f'{LATIN_DIR}/{cid}.tsv'):
            tag, text = l.rstrip('\n').split('\t', 1)
            latin.setdefault((cid, int(tag[1:5])), []).append((tag, re.sub(r'^\[b: .\] ', '', text)))
def call_word(n):
    """the word just before the call in the reader's anchorLine when it shows the call, else anchorWord; plus which occurrence"""
    al = n.get('anchorLine') or ''; w = n.get('anchorWord') or ''
    al2 = ''.join(SUP.get(c, c) if c in SUP else c for c in al)
    cands = list(re.finditer(r'(\S+?)\s*(?:\((\d+(?:[-·]\d+)?)\)|([⁰¹²³⁴⁵⁶⁷⁸⁹]+)|(\*+))', al))
    pick = None
    for m in cands:
        num = m.group(2) or (''.join(SUP[c] for c in m.group(3)) if m.group(3) else None)
        if num and str(n.get('marker')) == num.split('-')[0].split('·')[0]: pick = m; break
    if pick is None and len(cands) == 1: pick = cands[0]
    if pick and base(pick.group(1)): return pick.group(1).strip('.,;:?!»«()').replace('-', ''), al[:pick.start(1)]
    return w.replace('-', ''), al[:al.find(w)] if w in al else ''
placed_lat, used_s = [], set()
app['latin'] = {}; app['english'] = {}
keep_unplaced = []
for u in app['unplaced']:
    page = int(u['page'][2:]); cid = next((c for c, r in LCH.items() if page in r), None)
    if cid is None or u.get('column') != 'latin' or not latin: keep_unplaced.append(u); continue
    if u.get('series') == 'unmarked' and page == 220:        # Mai's note, already printed in the column (p0220.R.42-44)
        placed_lat.append(('dropped (printed in the column)', u['page'], u.get('marker'))); continue
    anchor, before = call_word(u)
    lt = lambda x: {w for w in toks(x) if len(w) >= 4}                      # content words only: et/in/sum cannot make a match
    A = lt(re.sub(r'[⁰¹²³⁴⁵⁶⁷⁸⁹*]+', ' ', u.get('anchorLine') or '')); best = (0, None, None, None)
    ba = base(anchor)
    def has(bt): return bool(ba) and (ba in bt or (len(ba) >= 8 and ba[:-2] in bt))
    lines_ = latin.get((cid, page), [])
    need = 1 if len(A) <= 2 else 2                                       # a short anchorLine needs one shared content word, else two
    for i, (tag, text) in enumerate(lines_):
        win = [text, (lines_[i - 1][1] + ' ' + text) if i else text, (text + ' ' + lines_[i + 1][1]) if i + 1 < len(lines_) else text]   # the reader's line can run over a plate line
        ov = max(len(A & lt(w_)) for w_ in win)
        if ov >= need and has(base(text)) and ov > best[0]: best = (ov, tag, text, anchor)
        if text.endswith('-') and i + 1 < len(lines_) and lines_[i + 1][0][:7] == tag[:7]:   # an anchor word broken across the line: the note stands after its tail
            t2 = lines_[i + 1][1]; j = re.sub(r'\W+$', '', text[:-1].split()[-1]) + (t2.split() or [''])[0]
            ov2 = len(A & lt(text + ' ' + t2))
            if ov2 >= need and ba and ba in base(j) and not has(base(text)) and not has(base(t2)) and ov2 > best[0]:
                best = (ov2, lines_[i + 1][0], t2, re.sub(r'[^\w]+$', '', (t2.split() or [''])[0]))
    if best[1] is None or not anchor: keep_unplaced.append(u); continue
    tag, text, anchor = best[1], best[2], best[3]
    if anchor not in text:                                               # a near match (Samosatenii / Samosateni): the note stands on the line's own token
        anchor = next((t_.strip('.,;:?!»«()') for t_ in text.split() if len(base(t_)) >= 6 and (base(t_) in ba or ba[:-2] in base(t_))), anchor)
    nth = len([w for w in toks(before) if w == base(anchor)]) if has(base(text)) else 0          # which occurrence of the anchor word on the line
    kind = 'n' if u.get('en') is None else 'nt'
    app['latin'].setdefault(cid, []).append([tag, anchor, u['text'].strip(), kind, nth, u.get('en')])
    placed_lat.append((cid, tag, anchor)); mirrored = False
    if kind == 'n':                                                    # mirror the Scripture locator into the English S note
        refs = migne_refs(u['text'])
        for no, t in card_notes(cid).items():
            if (cid, no) in used_s or not t.lstrip().startswith('S'): continue
            sr = s_refs(t)
            if any(a[0] == b[0] and a[1] == b[1] and abs(a[2] - b[2]) <= 2 for a in refs for b in sr) or \
               any(a[0] == b[0] == 'ps' and abs(a[1] - b[1]) <= 1 and abs(a[2] - b[2]) <= 1 for a in refs for b in sr):
                used_s.add((cid, no)); app['english'].setdefault(cid, {})[no] = u['text'].strip(); mirrored = True; break
app['unplaced'] = keep_unplaced
json.dump(app, open(f'{T}/notes/APPARATUS.json', 'w'), ensure_ascii=False, indent=1)
if latin:
    cand = [n for n in notes if n.get('column') == 'latin' and any(int(n['page'][2:]) in r for r in LCH.values())]
    nplaced = sum(len(v) for v in app['latin'].values())
    print(f'LATIN PASS: {len(cand)} Latin-column records on the so-019/020/021 pages | placed {nplaced} '
          f'({ {c: len(v) for c, v in app["latin"].items()} }) | mirrored into English {sum(len(v) for v in app["english"].values())} | dropped {sum(1 for p in placed_lat if str(p[0]).startswith("dropped"))}')
    print('  not located (-> cruces):')
    for u in app['unplaced']:
        if any(int(u['page'][2:]) in r for r in LCH.values()): print('   ', u['page'], u.get('marker'), u.get('column'), (u.get('text') or '')[:70])
print('notes', len(notes), '(dropped exact duplicates:', dups, ')')
print('greek placed-candidates', sum(len(v) for v in app['greek'].values()), '| unplaced', len(app['unplaced']),
      Counter(u.get('series') for u in app['unplaced']))
print('numbered Greek notes whose anchor word is NOT in checked/ for that page:', len(miss_anchor))
for m in miss_anchor: print('  ', m)
print('Greek notes whose line could not be located (placed by word, in the first chunk that has it):', len(nolines)); [print('  ', m) for m in nolines[:12]]
print('notes on pages in no chunk:', [n['page'] for n in notes if not cids_for(int(n['page'][2:]))])
