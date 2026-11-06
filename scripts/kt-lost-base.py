#!/usr/bin/env python3
"""Lost-line scan for a work whose BASE is not Kraken (Maximus, 2026-11-06): Kraken's own read (xml/) is the witness,
the base is ruled/. Prints every Greek-looking Kraken line in the Greek column whose middle base letters are absent
from the base page (hyphens joined). Candidates are then read on the plate (RESTORED-LINES.tsv).
    python3 scripts/kt-lost-base.py <work> [min_letters=10]"""
import json, os, re, sys, unicodedata as ud, glob
W = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'raw/kraken', sys.argv[1]); MIN = int(sys.argv[2]) if len(sys.argv) > 2 else 10
R = json.load(open(f'{W}/regions.json'))
gb = lambda s: ''.join(c for c in ud.normalize('NFD', s.lower()) if 'α' <= c <= 'ω')
tot = 0
for x in sorted(glob.glob(f'{W}/xml/p-*.xml')):
    p = os.path.basename(x)[:-4]
    if not os.path.exists(f'{W}/ruled/{p}.txt'): continue
    base = gb(open(f'{W}/ruled/{p}.txt').read().replace('-\n', '').replace('\n', ' '))
    boxes = [r['box'] for r in R.get(p, []) if r['class'] == 'MainText_ColGreek']
    s = open(x).read(); out = []
    for m in re.finditer(r'<TextLine[^>]*>\s*<Coords points="([^"]+)"/>(.*?)</TextLine>', s, re.S):
        pts = [tuple(map(int, q.split(','))) for q in m.group(1).split()]
        cx = sum(a for a, _ in pts) / len(pts); cy = sum(b for _, b in pts) / len(pts)
        if boxes and not any(b[0] - 60 <= cx <= b[2] + 60 and b[1] - 60 <= cy <= b[3] + 60 for b in boxes): continue
        t = re.findall(r'<Unicode>(.*?)</Unicode>', m.group(2)); t = t[-1] if t else ''
        g = gb(t)
        if len(g) < MIN or len(g) < 0.6 * sum(ch.isalpha() for ch in t): continue
        k = len(g) // 2; probe = g[max(0, k - 6):k + 6]
        if probe not in base and g[:12] not in base and g[-12:] not in base: out.append((int(cy), t))
    for cy, t in out: print(f'{p}\ty≈{cy}\t{t}')
    tot += len(out)
print('candidates:', tot, file=sys.stderr)
