#!/usr/bin/env python3
"""(Copied from maximus-diversa-capita/notes/place.py, 2026-11-23, for the Quaestiones et dubia; four result files, one per nine pages, all pages SEEN; notes that run across a page are JOINED to their start note; orphanCall / none / unread / work-preceding / work-following records dropped.) Place Migne's recovered notes (result-*.jsonl) -> APPARATUS.json, same shape as Dorotheus's.
- numbered notes keyed in the GREEK column -> greek["cid|cid"] = [[page, anchorWord, text], ...]; kt-to-site puts [n: text] after that word. Sidecar greekLines[...] picks the right occurrence of a repeated word.
- everything else (lettered / asterisk / scholion notes in either column, `bracket-inline` = Migne's brackets INSIDE the Greek text (already text, listed on the cruces page only), Scripture locators keyed in the Latin column, anything with no anchor) -> unplaced[], listed on the cruces page with latinWord/greekWord and the translator's `en`.
Quaestiones et dubia (PG 90): result-1 (396-404), result-2 (405-413), result-3 (414-422), result-4 (423-431).
Scripture locators (lettered OR numbered, keyed in the Latin column, `en` null) are mirrored into the English only where a translator's S note gives the same reference (the Sophronius pass is the model).
Run from ~/patrologia:  python3 translate/maximus-quaestiones-dubia/notes/place.py"""
import csv, json, os, re, unicodedata as ud
from collections import Counter
T = 'translate/maximus-quaestiones-dubia'; K = 'raw/kraken/maximus-quaestiones-dubia/checked'
OVER = set()   # no overlay re-read for Maximus
rows = []
FILES = [('1', range(396, 405)), ('2', range(405, 414)), ('3', range(414, 423)), ('4', range(423, 432))]
dropped = {'orphanCall': 0, 'none': 0, 'unread': 0, 'preceding': 0, 'following': 0, 'off-range': 0}
for k, pgs in FILES:
    for l in open(f'{T}/notes/result-{k}.jsonl'):
        if not l.strip(): continue
        r = json.loads(l); r['_file'] = k
        if r.get('unread'): dropped['unread'] += 1; continue
        if r.get('none'): dropped['none'] += 1; continue
        if r.get('orphanCall') and not r.get('text'): dropped['orphanCall'] += 1; continue
        if r.get('work') == 'preceding': dropped['preceding'] += 1; continue
        if r.get('work') == 'following': dropped['following'] += 1; continue
        if int(r['page'][2:]) not in pgs: dropped['off-range'] += 1; continue
        rows.append(r)
print('per file kept:', {k: sum(1 for r in rows if r['_file'] == k) for k, _ in FILES}, '| dropped', dropped)
# a note that runs across a page is ONE note: join the continuation to the start note (same marker, the earlier page), text and en.
# Conventions of the readers: `continued: "from p-NNNN"` / `continuesFrom: "p-NNNN"` / `continued: True` on the later of two same-marker notes on consecutive pages /
# result-2 p-0631 `continued: "e"` (no marker). Their descriptive prefixes ("[continued from ...]") are cut.
PRE = re.compile(r"^(?:\[(?:[Cc]ontinu.*?)(?:'\]|:\])|\[p-\d{4} ends[^\]]*\])\s*")      # also the reader's «[p-0423 ends 'prote-']» prefix on a continuation line
def clean(t): return PRE.sub('', t.strip()).strip() if t else t
def join_text(a, b):
    a = a.rstrip(); b = re.sub(r'^\[[a-zæœ]+\](?=[a-zæœ])', '', clean(b))
    if re.search(r'[A-Za-zæœ]-$', a) and re.match(r'[a-zæœ]', b): return a[:-1] + b
    return a + ' ' + b
def mk(r):
    return (r.get('marker') or '').strip('()')
HINT = {('p-0414', ''): ('p-0413', 'h')}        # p-0414's head is an UNKEYED continuation of note (h) of p-0413 (apparatus reader 3)
joined = 0
for r in list(rows):
    c = r.get('continued'); cf = r.get('continuesFrom'); page = int(r['page'][2:]); prevp = 'p-%04d' % (page - 1)
    cont_from = None; mark = mk(r)
    if cf: cont_from = re.match(r'p-\d{4}', cf).group(0)                                   # «continuesFrom: p-0397 note (c)»
    elif c is True or c == 'True': cont_from = prevp                                         # `continued: true` on the later page: the start note is the same marker on the page before
    elif isinstance(c, str) and c.startswith('from '): cont_from = c[5:].strip()
    elif r.get('series') == 'lettered' and re.match(r"\s*\[p-\d{4} ends", r.get('text') or ''): cont_from = prevp          # p-0424 (q): «[p-0423 ends 'prote-'] gentis mentem…»
    if cont_from is None and r.get('series') == 'lettered' and any(isinstance(x.get('continued'), str) and x['continued'].startswith('to ' + r['page']) and x.get('series') == 'lettered' and mk(x) == mark for x in rows if x is not r):
        cont_from = prevp                                                                    # p-0429 (u): the start note on p-0428 says «continued: to p-0429»
    if cont_from is not None and (r['page'], mark) in HINT: cont_from, mark = HINT[(r['page'], mark)]
    if cont_from is None: continue
    st = [x for x in rows if x is not r and x.get('page') == cont_from and x.get('series') == 'lettered' and mk(x) == mark]
    if len(st) != 1: raise SystemExit(f'continuation {r["page"]} ({mark}) has {len(st)} start notes on {cont_from}')
    st[0]['text'] = join_text(st[0]['text'], r['text'])
    if st[0].get('en') and r.get('en'): st[0]['en'] = join_text(st[0]['en'], r['en'])
    st[0]['joinedFrom'] = r['page']; st[0].pop('continued', None); st[0].pop('continuesOn', None)
    if r.get('unreadable') and not st[0].get('unreadable'): st[0]['unreadable'] = r['unreadable']
    rows.remove(r); joined += 1; print("  joined", r["page"], mark, "->", cont_from)
print('continuation notes joined to their start notes:', joined)
REPL = {r['replaces'] for r in rows if r.get('replaces')}
rows = [r for r in rows if r.get('replaces') or f"{r.get('page')}|{(r.get('text') or '')[:20]}" not in REPL]
rows = [r for r in rows if not (r['page'] in OVER)]

# Anchor fixes from the blind polarity read (2026-11-05): the note reader left the anchor null; the reader R1 read it at the plate.
ANCHOR_FIX = {}   # none
for r in rows:
    fx = ANCHOR_FIX.get((r.get('page'), str(r.get('marker')), r.get('text')))
    if fx and r.get('column') == 'greek': r['anchorWord'], r['anchorLine'] = fx
notes, seen, dups = [], set(), 0
for r in rows:
    if r.get('none') or any(k in r for k in ('orphanCall', 'scholionCall', 'fullWidthBody', 'crosscheck', 'callCrossCheck')) or not r.get('text'): continue   # Opuscula: calls/flags, not notes; Mystagogia: page-level cross-check records (a 'note' and no 'text') are not notes either
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
# ---------------- English mirror (build brief step 5.6, 2026-11-06) ----------------
# The editor's Scripture locators stand in his Latin column (lettered (a)..(z) and * notes, `en` null). Mirror each into the English
# ONLY where a translator's S note already gives the same reference (the Sophronius place.py Latin pass is the model): one
# monotone dynamic programme over the whole work, locators in text order (page, then reading order in the result files; bare
# Ibid. resolved in that order) against the S notes in chunk-then-note order. 5 = the S note quotes Migne's printed locator,
# 3 = exact verse, 1 = within +-2 verses (Psalms +-1 chapter, LXX/Vulgate). Anything unmatched stays in unplaced[] (cruces only).
src = open('translate/dorotheus-doctrinae/notes/place.py').read()
exec(src[src.index('ROMAN = '):src.index('def card(')])           # roman, BOOK, EN, LAST, migne_refs, s_refs: Dorotheus's matcher, reused unchanged
EN.update({'dt': 'deut', 'is': 'isa', 'mt': 'matt', 'lk': 'luke', 'jn': 'john', 'mk': 'mark', 'sir': 'sir', 'ecclesiasticus': 'sir', 'zechariah': 'zech', 'zech': 'zech', 'job': 'job', 'kings': 'kgs', 'psalm': 'ps', 'ps': 'ps', 'ex': 'exod', 'lev': 'lev', 'leviticus': 'lev', 'acts': 'acts', 'revelation': 'rev', 'rev': 'rev', 'ephesians': 'eph', 'eph': 'eph', 'philippians': 'phil', 'phil': 'phil', 'colossians': 'col', 'col': 'col', 'titus': 'titus', 'ti': 'titus', 'proverbs': 'prov', 'jer': 'jer', 'ezekiel': 'ezek', 'ezek': 'ezek', 'daniel': 'dan', 'dan': 'dan', 'micah': 'mic', 'mic': 'mic', 'malachi': 'mal', 'mal': 'mal', 'judges': 'judg', 'judg': 'judg', 'joshua': 'josh', 'josh': 'josh', 'song': 'song', 'ecclesiastes': 'eccl', 'eccl': 'eccl', 'lamentations': 'lam', 'lam': 'lam', 'habakkuk': 'hab', 'hab': 'hab', 'amos': 'amos', 'joel': 'joel', 'isaiah': 'isa', 'isa': 'isa', '1 thessalonians': '1 thess', '2 thessalonians': '2 thess', '1 timothy': '1 tim', '2 timothy': '2 tim', '1 peter': '1 pet', '2 peter': '2 pet', '1 cor': '1 cor', '2 cor': '2 cor', '1 sam': '1 sam', '2 sam': '2 sam', '1 kgs': '1 kgs', '2 kgs': '2 kgs', '3 kingdoms': '1 kgs', '4 kingdoms': '2 kgs', '1 kingdoms': '1 sam', '2 kingdoms': '2 sam'})
def card_notes(cid):
    s_ = open(f'{T}/{cid}.en.md').read(); nt = s_.partition('\n## Notes')[2].partition('\n## OCR')[0]
    return {m.group(1): m.group(2) for m in re.finditer(r'^\[\^(\d+)\]:\s*(.*)$', nt, re.M)}
def nrm(x): return re.sub(r'[^a-z0-9]', '', x.lower())
LOC = re.compile(r'\s*(?:(?:I{1,3}V?|IV)\.?\s+)?[A-Z][a-z]+\.?\s+[ivxlcIVXLC]+\s*[,.]\s*\d+|\s*[Ii]bid')
loc_idx = [k for k, u in enumerate(app['unplaced']) if u.get('series') in ('lettered', 'asterisk', 'numbered') and u.get('column') == 'latin'
           and u.get('en') is None and LOC.match(re.sub(r'\s*\[[^\]]*\]\s*$', '', (u.get('text') or '').strip()))]
locs = [app['unplaced'][k] for k in loc_idx]                            # unplaced[] is already in (page, reading order)
LAST[0] = None; refs = []
for u in locs:
    t_ = (u['text'] or '').strip()
    if re.match(r'\s*[Ii]bid\.?\s*$', t_) and LAST[0]: refs.append([LAST[0]])
    else: refs.append(migne_refs(t_))
S = []
for cid, *_ in chunks:
    cn = card_notes(cid)
    S += [(cid, no, t) for no, t in sorted(cn.items(), key=lambda x: int(x[0])) if t.lstrip().startswith('S')]
def score(i, j):
    t = S[j][2]; lt_ = (locs[i]['text'] or '').strip()
    if nrm(lt_) and nrm(lt_) in nrm(t): return 5
    sr = s_refs(t); a_ = refs[i]
    if any(a[0] == b[0] and a[1] == b[1] and a[2] == b[2] for a in a_ for b in sr): return 3
    if any(a[0] == b[0] and a[1] == b[1] and abs(a[2] - b[2]) <= 2 for a in a_ for b in sr) or \
       any(a[0] == b[0] == 'ps' and abs(a[1] - b[1]) <= 1 and abs(a[2] - b[2]) <= 1 for a in a_ for b in sr): return 1
    return 0
n_, m_ = len(locs), len(S)
D = [[0] * (m_ + 1) for _ in range(n_ + 1)]
SC = [[score(i, j) for j in range(m_)] for i in range(n_)]
for i in range(n_ - 1, -1, -1):
    for j in range(m_ - 1, -1, -1):
        sc = SC[i][j]
        D[i][j] = max(D[i + 1][j], D[i][j + 1], (sc + D[i + 1][j + 1]) if sc else 0)
app['english'] = {}; mirrored = set(); i = j = 0
while i < n_ and j < m_:
    sc = SC[i][j]
    if sc and D[i][j] == sc + D[i + 1][j + 1]:
        app['english'].setdefault(S[j][0], {})[S[j][1]] = re.sub(r'\s*\[[^\]]*\]\s*$', '', locs[i]['text'].strip()); mirrored.add(loc_idx[i]); i += 1; j += 1
    elif D[i][j] == D[i + 1][j]: i += 1
    else: j += 1
print('  mirrored per apparatus file:', dict(Counter(app['unplaced'][k].get('_file') for k in mirrored)), '| notes per file:', dict(Counter(n.get('_file') for n in notes)), '| Greek-keyed numbered [n:] placed per file:', dict(Counter(n.get('_file') for n in notes if n.get('series') == 'numbered' and n.get('column') == 'greek' and n.get('anchorWord') and (n.get('text') or '').strip())))
app['unplaced'] = [u for k, u in enumerate(app['unplaced']) if k not in mirrored]
print(f'ENGLISH MIRROR: {n_} Scripture locators (Latin column) vs {m_} translator S notes | mirrored {len(mirrored)}:', {c: len(v) for c, v in app['english'].items()})
json.dump(app, open(f'{T}/notes/APPARATUS.json', 'w'), ensure_ascii=False, indent=1)
print('notes', len(notes), '(dropped exact duplicates:', dups, ')')
print('greek placed-candidates', sum(len(v) for v in app['greek'].values()), '| unplaced', len(app['unplaced']),
      Counter(u.get('series') for u in app['unplaced']))
print('numbered Greek notes whose anchor word is NOT in checked/ for that page:', len(miss_anchor))
for m in miss_anchor: print('  ', m)
print('Greek notes whose line could not be located (placed by word, in the first chunk that has it):', len(nolines)); [print('  ', m) for m in nolines[:12]]
print('notes on pages in no chunk:', [n['page'] for n in notes if not cids_for(int(n['page'][2:]))])
