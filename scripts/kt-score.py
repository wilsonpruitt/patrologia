#!/usr/bin/env python3
"""Score translators' OCR tables against a plate-checked answer key (Dorotheus pilot, 2026-10-27).

  python3 scripts/kt-score.py <work> <chunk-id> …

Answer key = raw/kraken/<work>/text (what the translator saw) diffed against raw/kraken/<work>/checked
(the blind read + every-line plate check, pg-plate-api.py). Each diff is classed:
  letters   base letters differ (sense-bearing or at least a different word)
  accent    same base letters, diacritics differ (accent, breathing, iota subscript)
  punct     punctuation / elision mark only
A translator row HITS a diff when it sits on the same page, within one line, and its printed text overlaps the
diff's Kraken tokens. Rows that hit nothing are listed for eyeballing: an over-call, or a spot the check missed.
Writes translate/<work>/SCORE.md.
"""
import difflib, os, re, sys, unicodedata as ud
from collections import Counter

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
work, ks = sys.argv[1], sys.argv[2:]
T = os.path.join(ROOT, 'translate', work)
K = os.path.join(ROOT, 'raw/kraken', work)

def nfc(s): return ud.normalize('NFC', s)
def base(s): return ''.join(c for c in ud.normalize('NFD', s.lower()) if ud.category(c) in ('Ll', 'Lu', 'Lo'))
def marks(s): return ''.join(c for c in ud.normalize('NFD', s) if ud.category(c) == 'Mn')
BAND = set('ΑΒΓΔABCD')
APOS = str.maketrans({'´': '᾿', '′': '᾿', '’': '᾿', "'": '᾿', 'ʹ': '᾿', '΄': '᾿', '`': '᾿'})

def tokens(path, lo=1, hi=10**6, kraken=True):
    out = []
    for i, l in enumerate(open(path).read().split('\n'), 1):
        if not (lo <= i <= hi): continue
        l = re.sub(r'\[b: .\]\s*', '', nfc(l)).translate(APOS)          # elision / numeral-sign glyphs: one rule, not a misread
        l = re.sub(r'«\s+', '«', re.sub(r'\s+»', '»', l))                  # guillemet spacing: house convention
        ws = l.split()
        if kraken and ws and ws[-1] in BAND: ws = ws[:-1]          # glued band letter
        if kraken and ws and len(ws[-1]) > 1 and ws[-1][-1] in BAND and ws[-1][-2] in ',.·;': ws[-1] = ws[-1][:-1]
        out += [(i, w) for w in ws]
    return out

# chunk ranges from the scaffold headers
rng = {}
for k in ks:
    r = re.search(r'range: p-(\d+):(\d+) – p-(\d+):(\d+)', open(f'{T}/{k}.md').read()).groups()
    rng[k] = tuple(map(int, r))

def unband(ws):
    ws = [w for w in ws if w not in BAND]
    return [w[1:] if len(w) > 2 and w[0] in BAND and w[1].islower() else w.rstrip('ΑΒΓΔABCD') if len(w) > 2 and w[-2] in '-,.·;ςνσ' and w[-1] in BAND else w for w in ws]

def classify(a, b):
    A, B = ' '.join(a), ' '.join(b)
    if base(A) != base(B):
        return 'band' if base(' '.join(unband(a))) == base(B) else 'letters'
    if marks(A.translate(APOS)) != marks(B.translate(APOS)) and re.sub(r'[^\w]', '', A) != re.sub(r'[^\w]', '', B): return 'accent'
    return 'punct'

diffs = []   # whole pages diffed once; each diff assigned to the chunk whose line range holds it
pages = sorted({p for fp, fl, lp, ll in rng.values() for p in range(fp, lp + 1)})
def owner(p, ln):
    for k, (fp, fl, lp, ll) in rng.items():
        if (p, ln) >= (fp, fl) and (p, ln) <= (lp, ll): return k
for p in pages:
    kt = tokens(f'{K}/text/p-{p:04d}.txt')
    ct = tokens(f'{K}/checked/p-{p:04d}.txt', kraken=False)
    sm = difflib.SequenceMatcher(None, [w for _, w in kt], [w for _, w in ct], autojunk=False)
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == 'equal': continue
        a = [w for _, w in kt[i1:i2]]; b = [w for _, w in ct[j1:j2]]
        line = kt[i1][0] if i1 < len(kt) else kt[-1][0]
        k = owner(p, line)
        if k: diffs.append(dict(chunk=k, page=p, line=line, k=a, c=b, cls=classify(a, b), hit=False))

rows = []
for k in ks:
    if not os.path.exists(f'{T}/{k}.en.md'): continue
    t = open(f'{T}/{k}.en.md').read().partition('\n## OCR')[2]
    for l in t.split('\n'):
        c = [x.strip() for x in l.strip().strip('|').split('|')]
        if len(c) < 6 or not re.match(r'p\d{4}\.\d+', c[0]): continue
        p, ln = map(int, c[0][1:].split('.'))
        rows.append(dict(chunk=k, page=p, line=ln, printed=nfc(c[1]).translate(APOS), reading=nfc(c[2]).translate(APOS), sure=c[3], kind=c[4], why=c[5], hit=None))

def overlap(r, d):
    pr = set(r['printed'].replace('-', ' ').split())
    return any(w in pr or any(w in x or x in w for x in pr if len(x) > 2) for w in d['k'])

for r in rows:
    if r['printed'] == r['reading']: r['hit'] = 'rule'; continue
    for d in diffs:
        if d['page'] == r['page'] and abs(d['line'] - r['line']) <= 1 and overlap(r, d):
            d['hit'] = True; r['hit'] = d['cls']
            r['right'] = base(r['reading']) == base(' '.join(d['c'])) and marks(r['reading']) == marks(' '.join(d['c']))

out = [f'# Pilot score: translation-as-plate-check vs the full plate check ({", ".join(ks)})\n']
dc = Counter(d['cls'] for d in diffs); hc = Counter(d['cls'] for d in diffs if d['hit'])
out.append('| class | diffs (Kraken vs checked) | caught by a translator row | recall |\n|---|---|---|---|')
for c in ('letters', 'accent', 'punct', 'band'):
    out.append(f'| {c} | {dc[c]} | {hc[c]} | {hc[c] / dc[c] * 100 if dc[c] else 0:.0f}% |')
hits = [r for r in rows if r['hit'] and r['hit'] != 'rule']
out.append(f'\nTranslator rows: {len(rows)}; on a real diff: {len(hits)} '
           f'(reading exactly matches the checked text: {sum(1 for r in hits if r.get("right"))}); '
           f'glyph-only (fixed by rule): {sum(1 for r in rows if r["hit"] == "rule")}; on no diff: {sum(1 for r in rows if not r["hit"])}. Rows by kind: {dict(Counter(r["kind"] for r in rows))}\n')
out.append('## Missed: letters (the ones that can change the English)\n')
out += [f'- {d["chunk"]} p{d["page"]:04d}.{d["line"]:02d}: Kraken `{" ".join(d["k"])}` → checked `{" ".join(d["c"])}`'
        for d in diffs if d['cls'] == 'letters' and not d['hit']]
out.append('\n## Translator rows on no diff (over-call, or the check missed it)\n')
out += [f'- {r["chunk"]} p{r["page"]:04d}.{r["line"]:02d}: `{r["printed"]}` → `{r["reading"]}` ({r["kind"]}, {r["sure"]}; {r["why"]})'
        for r in rows if not r['hit']]
out.append('\n## Missed: accent / punct\n')
out += [f'- {d["chunk"]} p{d["page"]:04d}.{d["line"]:02d} [{d["cls"]}]: `{" ".join(d["k"])}` → `{" ".join(d["c"])}`'
        for d in diffs if d['cls'] in ('accent', 'punct') and not d['hit']]
open(f'{T}/SCORE.md', 'w').write('\n'.join(out) + '\n')
print('\n'.join(out[:8]))
