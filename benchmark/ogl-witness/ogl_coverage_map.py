#!/usr/bin/env python3
"""Per OGL volume: witnesses (scan copies), page files, and the fraction that are NON-EMPTY (>=200 bytes of text).
Uses the GitHub tree API (blob sizes), so nothing is downloaded. Output: coverage-map.json + a printed summary."""
import json, subprocess, sys, collections, re
repos = [l.split()[0] for l in open(sys.argv[1]) if l.strip()]
out = {}
for r in repos:
    p = subprocess.run(['gh', 'api', f'repos/OGL-PatrologiaGraecaDev/{r}/git/trees/master?recursive=1', '-q',
                        '.tree[] | select(.type=="blob") | select(.path|endswith(".txt")) | "\\(.size) \\(.path)"'],
                       capture_output=True, text=True)
    if p.returncode:
        out[r] = {'error': p.stderr.strip()[:120]}; continue
    wit = collections.defaultdict(lambda: [0, 0])
    for line in p.stdout.splitlines():
        size, path = line.split(' ', 1)
        d = path.split('/')[0]
        if '/' not in path: continue
        wit[d][0] += 1
        if int(size) >= 200: wit[d][1] += 1
    out[r] = {d: {'pages': a, 'nonempty': b, 'frac': round(b / a, 3) if a else 0} for d, (a, b) in wit.items()}
json.dump(out, open('coverage-map.json', 'w'), indent=1)
print(len(out), 'repos')
