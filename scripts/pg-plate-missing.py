"""Text-coverage test after pg-plate-api.py: every Kraken line of 4+ words must appear in the checked text.
  python3 scripts/pg-plate-missing.py raw/kraken/<work>     (needs rapidfuzz; prints only pages with misses)"""
import os, re, sys, unicodedata
from rapidfuzz import fuzz
D = sys.argv[1]
def norm(s):
    s = unicodedata.normalize('NFD', s.lower())
    return ' '.join(re.sub(r'[^\w\s]|\d|_', '', ''.join(c for c in s if not unicodedata.combining(c))).split())
for f in sorted(os.listdir(os.path.join(D, 'checked'))):
    if not f.endswith('.txt') or not f.startswith('p-'): continue
    p = f[:-4]
    chk = norm(re.sub(r'\[b: [A-D]\]', '', open(os.path.join(D, 'checked', f), encoding='utf-8').read()).replace('-\n', ''))
    miss = []
    for l in open(os.path.join(D, 'text', f), encoding='utf-8'):
        n = norm(l)
        if len(n.split()) < 4: continue
        if fuzz.partial_ratio(n, chk) < 75: miss.append(l.strip()[:55])
    if miss: print(p, len(miss), miss[:3])
