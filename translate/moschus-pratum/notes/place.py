#!/usr/bin/env python3
"""Place Migne's recovered notes (result-*.jsonl + verify overlay) -> APPARATUS.json, same shape as Dorotheus's.
- numbered notes keyed in the GREEK column -> greek["cid|cid"] = [[page, anchorWord, text], ...]; kt-to-site puts
  [n: text] after that word. Sidecar greekLines[f"{page}|{word}|{text}"] = anchorLine for picking the right
  occurrence of a repeated word (kt-to-site Dorotheus used a hard-coded nth).
- everything else (lettered scholia, NOTÆ endnotes, notes keyed in the Latin, anything with no anchor) -> unplaced[],
  listed on the cruces page with latinWord/greekWord and the translator's `en`.
Overlay: verify-54-58.jsonl REPLACES result-1's rows for pp. 54-58 (independent plate re-read; 6 text fixes).
Checks printed: anchor word found on the page in checked/; duplicates dropped; chunk of every note.
Run from ~/patrologia:  python3 translate/moschus-pratum/notes/place.py"""
import csv, json, os, re, unicodedata as ud
from collections import Counter
T = 'translate/moschus-pratum'; K = 'raw/kraken/moschus-pratum/checked'
OVER = {f'p-{n:04d}' for n in range(54, 59)}
rows = []
for k in range(1, 7):
    for l in open(f'{T}/notes/result-{k}.jsonl'):
        if l.strip(): rows.append(json.loads(l))
rows = [r for r in rows if not (r['page'] in OVER)]
rows += [json.loads(l) for l in open(f'{T}/notes/verify-54-58.jsonl') if l.strip()]
notes, seen, dups = [], set(), 0
for r in rows:
    if r.get('none'): continue
    key = (r['page'], r.get('marker'), r.get('text'), r.get('anchorWord'))
    if key in seen: dups += 1; continue
    seen.add(key); notes.append(r)
chunks = []
for r in csv.DictReader(open(f'{T}/CHUNKS.tsv'), delimiter='\t'):
    f_, l_ = r['first'].split(':'), r['last'].split(':')
    chunks.append((r['chunk'], int(f_[0][2:]), int(f_[1]), int(l_[0][2:]), int(l_[1])))
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
json.dump(app, open(f'{T}/notes/APPARATUS.json', 'w'), ensure_ascii=False, indent=1)
print('notes', len(notes), '(dropped exact duplicates:', dups, ')')
print('greek placed-candidates', sum(len(v) for v in app['greek'].values()), '| unplaced', len(app['unplaced']),
      Counter(u.get('series') for u in app['unplaced']))
print('numbered Greek notes whose anchor word is NOT in checked/ for that page:', len(miss_anchor))
for m in miss_anchor: print('  ', m)
print('Greek notes whose line could not be located (placed by word, in the first chunk that has it):', len(nolines)); [print('  ', m) for m in nolines[:12]]
print('notes on pages in no chunk:', [n['page'] for n in notes if not cids_for(int(n['page'][2:]))])
