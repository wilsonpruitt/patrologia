#!/usr/bin/env python3
"""Phase C Greek pilot: Morpheus coverage over the shipped PG works. Sample + verdicts: data/phase-c/sample-greek.tsv.
Usage: python3 scripts/phase-c-greek-pilot.py"""
import glob, os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'lib'))
import morpheus as M

allt = {os.path.basename(d.rstrip('/')): M.tokens_of(d) for d in sorted(glob.glob('src/greek/*/'))}
R = M.analyse_all(set(t for ts in allt.values() for t in ts))
print(f'{"work":42s} tokens  A%    B%   C(accent-ignored)%  none%')
for k, ts in allt.items():
    c = {'A': 0, 'B': 0, 'C': 0, None: 0}
    for t in ts: c[R[t]['pass']] += 1
    n = len(ts); print(f'{k:42s} {n:6d} {100*c["A"]/n:5.1f} {100*c["B"]/n:5.1f} {100*c["C"]/n:5.1f} {100*c[None]/n:6.1f}')
print('cruncher crashed on', len(set(M.CRASHED)), 'forms')
