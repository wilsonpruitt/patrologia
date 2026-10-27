#!/usr/bin/env python3
"""Place Migne's recovered notes (result-*.jsonl) -> APPARATUS.json, read by scripts/kt-to-site.py.

- numbered notes keyed in the GREEK -> greek[cid] = [[page, greekWord, text], ...]: [n: text] after that word
- lettered Scripture notes (keyed in the LATIN) -> english[cid][S-note-no] = text: replaces the translator's
  S note at the close of the same quotation (house rule: Migne's marker sits at the close of the quotation)
- everything else (notes to Migne's own notice, Latin cautions, unmatched) -> unplaced[], listed in cruces.md
Run from ~/patrologia:  python3 translate/dorotheus-doctrinae/notes/place.py
"""
import json, os, re, unicodedata as ud

T = 'translate/dorotheus-doctrinae'
notes = []
for f in ('result-1.jsonl', 'result-2.jsonl'):
    notes += [json.loads(l) for l in open(f'{T}/notes/{f}') if l.strip()]
notes = [n for n in notes if not n.get('none')]

chunks = []
for f in sorted(os.listdir(T)):
    m = re.match(r'(dd-\d{3})\.md$', f)
    if m:
        r = tuple(map(int, re.search(r'range: p-(\d+):(\d+) – p-(\d+):(\d+)', open(f'{T}/{f}').read()).groups()))
        chunks.append((m.group(1), r))
OVR = {'dd-001': (839, 6, 843, 4)}
chunks = [(c, OVR.get(c, r)) for c, r in chunks]
def cids_for(page): return [c for c, (fp, fl, lp, ll) in chunks if fp <= page <= lp]

ROMAN = {'i': 1, 'v': 5, 'x': 10, 'l': 50, 'c': 100}
def roman(s):
    s = s.lower().strip('.'); t = 0
    for i, ch in enumerate(s):
        v = ROMAN.get(ch, 0); t += -v if i + 1 < len(s) and ROMAN.get(s[i + 1], 0) > v else v
    return t
BOOK = {  # Migne's Latin abbreviations -> the English names our translators used
    'gen': 'gen', 'exod': 'exod', 'levit': 'lev', 'num': 'num', 'deut': 'deut', 'jos': 'josh', 'judic': 'judg',
    'i reg': '1 sam', 'ii reg': '2 sam', 'iii reg': '1 kgs', 'iv reg': '2 kgs', 'job': 'job', 'psal': 'ps', 'ps': 'ps',
    'prov': 'prov', 'eccle': 'eccl', 'eccli': 'sir', 'sap': 'wis', 'isa': 'isa', 'jerem': 'jer', 'thren': 'lam', 'ezech': 'ezek',
    'dan': 'dan', 'ose': 'hos', 'osee': 'hos', 'baruch': 'bar', 'num': 'num', 'tob': 'tob', 'i joan': '1 john', 'ii reg': '2 sam', 'joel': 'joel', 'amos': 'amos', 'mich': 'mic', 'habac': 'hab', 'zach': 'zech', 'mal': 'mal',
    'matth': 'matt', 'marc': 'mark', 'luc': 'luke', 'joan': 'john', 'act': 'acts', 'rom': 'rom', 'i cor': '1 cor',
    'ii cor': '2 cor', 'galat': 'gal', 'gal': 'gal', 'ephes': 'eph', 'philipp': 'phil', 'coloss': 'col', 'i thess': '1 thess',
    'ii thess': '2 thess', 'i tim': '1 tim', 'ii tim': '2 tim', 'tit': 'titus', 'hebr': 'heb', 'jac': 'jas', 'i petr': '1 pet',
    'ii petr': '2 pet', 'i joan': '1 john', 'apoc': 'rev', 'cant': 'song', 'tob': 'tob', 'eccles': 'eccl',
}
EN = {'genesis': 'gen', 'exodus': 'exod', 'deuteronomy': 'deut', 'psalm': 'ps', 'psalms': 'ps', 'proverbs': 'prov',
      'matthew': 'matt', 'luke': 'luke', 'john': 'john', 'mark': 'mark', 'romans': 'rom', 'galatians': 'gal',
      'hebrews': 'heb', 'james': 'jas', 'isaiah': 'isa', 'jeremiah': 'jer', 'wisdom': 'wis', 'sirach': 'sir', 'hosea': 'hos', 'baruch': 'bar', 'numbers': 'num', 'tobit': 'tob', 'exodus': 'exod', 'ecclesiasticus': 'sir', 'samuel': 'sam', '1 corinthians': '1 cor', '2 corinthians': '2 cor', '1 john': '1 john', '2 timothy': '2 tim', '2 samuel': '2 sam', '2 kingdoms': '2 sam', 'isa': 'isa', 'jer': 'jer', 'matt': 'matt', 'gen': 'gen', 'deut': 'deut', 'ps': 'ps', 'prov': 'prov', 'rom': 'rom', 'gal': 'gal', 'cor': 'cor', 'exod': 'exod', 'sir': 'sir', 'hos': 'hos', 'wis': 'wis', 'heb': 'heb', 'jas': 'jas', 'num': 'num', 'tob': 'tob'}
LAST = [None]
def migne_refs(text):
    out = []
    for m in re.finditer(r'((?:I{1,3}V?|IV)\.?\s+)?([A-Z][a-z]+)\.?\s+([ivxlcIVXLC]+)\s*[,.]\s*(\d+)', text):
        bk = ((m.group(1) or '').replace('.', '').strip().lower() + ' ' + m.group(2).lower()).strip()
        out.append((BOOK.get(bk, bk), roman(m.group(3)), int(m.group(4))))
    m = re.match(r'\s*[Ii]bid\.?\s*(?:([ivxlc]+)\s*,\s*)?(\d+)', text)      # ibid. 5. / ibid. iii, 5.
    if m and LAST[0]:
        out.append((LAST[0][0], roman(m.group(1)) if m.group(1) else LAST[0][1], int(m.group(2))))
    if out: LAST[0] = out[-1]
    return out
def s_refs(text):
    """'Gen 2:8, 2:15–17; Deut 6:4' -> [(gen,2,8),(gen,2,15..17),(deut,6,4)]: a bare c:v inherits the last book."""
    out, bk = [], None
    for m in re.finditer(r'(?:(\d\s*)?([A-Z][a-z]+)\.?\s+)?(\d+)(?:\s*\(\d+\))?\s*:\s*(\d+)(?:\s*[–-]\s*(\d+))?', text):
        if m.group(2): bk = EN.get(((m.group(1) or '').strip() + ' ' + m.group(2).lower()).strip(), ((m.group(1) or '').strip() + ' ' + m.group(2).lower()).strip())
        if not bk: continue
        v0 = int(m.group(4)); v1 = int(m.group(5)) if m.group(5) else v0
        out += [(bk, int(m.group(3)), v) for v in range(v0, v1 + 1)]
    return out

def card(cid):
    s = open(f'{T}/{cid}.en.md').read(); nt = s.partition('\n## Notes')[2].partition('\n## OCR')[0]
    return {m.group(1): m.group(2) for m in re.finditer(r'^\[\^(\d+)\]:\s*(.*)$', nt, re.M)}

notes.sort(key=lambda n: n['page'])
for n in notes:
    if n.get('series') == 'lettered': n['_refs'] = migne_refs(n['text'])
app = {'greek': {}, 'english': {}, 'unplaced': []}
used = set()
for n in notes:
    page = int(n['page'][2:]); cids = cids_for(page)
    if n.get('series') == 'numbered' and n.get('greekWord') and n.get('keyedIn') != 'latin':
        app['greek'].setdefault('|'.join(cids), []).append([page, n['greekWord'], n['text'].strip()])
        continue
    if n.get('series') == 'lettered' and n['page'] != 'p-0836':
        refs = n['_refs']; hit = None
        for cid in cids:
            for no, t in card(cid).items():
                if (cid, no) in used or not t.lstrip().startswith('S'): continue
                sr = s_refs(t)
                if any(a[0] == b[0] and a[1] == b[1] and (a[2] == b[2] or abs(a[2] - b[2]) <= 2) for a in refs for b in sr) or \
                   any(a[0] == b[0] == 'ps' and abs(a[1] - b[1]) <= 1 and abs(a[2] - b[2]) <= 1 for a in refs for b in sr):
                    hit = (cid, no); break
            if hit: break
        if hit:
            used.add(hit); app['english'].setdefault(hit[0], {})[hit[1]] = n['text'].strip(); continue
    app['unplaced'].append({k: v for k, v in n.items() if k != '_refs'})
json.dump(app, open(f'{T}/notes/APPARATUS.json', 'w'), ensure_ascii=False, indent=1)
from collections import Counter
print('greek', sum(len(v) for v in app['greek'].values()), '| english', sum(len(v) for v in app['english'].values()),
      '| unplaced', len(app['unplaced']), Counter(n.get('series') for n in app['unplaced']))
