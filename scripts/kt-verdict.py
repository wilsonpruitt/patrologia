"""Record image-check verdicts for a contact sheet (kt method, 2026-11-04).

Usage: python3 scripts/kt-verdict.py <work> <sheet> "<slot><code>[:comment] …"
  codes: R plate shows the translator's reading (apply) · P plate shows what Kraken printed (withdraw the row)
         M plate prints the faulty form = Migne's misprint (row becomes kind print) · ? not decidable from the crop
  Appends to translate/<work>/IMAGE-CHECK.tsv (sheet, slot, chunk, tag, printed, reading, kind, verdict, comment),
  replacing any earlier verdicts for the same sheet.
"""
import os, re, sys
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
PASS2 = '--pass2' in sys.argv            # second pass (sheets2/): verdicts REPLACE the matching '?' rows of pass 1
args = [a for a in sys.argv[1:] if a != '--pass2']
work, sheet, spec = args[0], f'{int(args[1]):03d}', args[2]
rows = [l.rstrip('\n').split('\t') for l in open(f'{ROOT}/raw/kraken/{work}/{"sheets2" if PASS2 else "sheets"}/ROWS.tsv')][1:]
mine = {int(r[1]): r for r in rows if r[0] == sheet}
v = {}
for m in re.finditer(r'(\d+)([RPM?])(?::([^ ]+))?', spec):
    v[int(m.group(1))] = (m.group(2), (m.group(3) or '').replace('_', ' '))
missing = sorted(set(mine) - set(v))
if missing: sys.exit(f'sheet {sheet}: no verdict for slots {missing}')
out = f'{ROOT}/translate/{work}/IMAGE-CHECK.tsv'
head = 'sheet\tslot\tchunk\ttag\tprinted\treading\tkind\tverdict\tcomment'
old = [l.rstrip('\n') for l in open(out)][1:] if os.path.exists(out) else []
if PASS2:
    upd = {(mine[s][3], mine[s][4]): (v[s][0], 'pass2: ' + v[s][1]) for s in mine}
    new_old = []
    for l in old:
        c = l.split('\t')
        if c[7] == '?' and (c[3], c[4]) in upd: c[7], c[8] = upd.pop((c[3], c[4]))
        new_old.append('\t'.join(c))
    if upd: sys.exit(f'no pass-1 "?" row for {list(upd)}')
    open(out, 'w').write('\n'.join([head] + new_old) + '\n')
else:
    old = [l for l in old if not l.startswith(sheet + '\t')]
    new = [f'{sheet}\t{s}\t{mine[s][2]}\t{mine[s][3]}\t{mine[s][4]}\t{mine[s][5]}\t{mine[s][6]}\t{v[s][0]}\t{v[s][1]}' for s in sorted(mine)]
    open(out, 'w').write('\n'.join([head] + sorted(old + new)) + '\n')
from collections import Counter
print(sheet, dict(Counter(x[0] for x in v.values())))
