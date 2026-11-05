#!/usr/bin/env python3
"""Lines of the checked Moschus Greek that are not Greek text: Kraken's reads of Migne's Latin furniture (garbled CAPUT heads,
running heads JOANNIS MOSCHI / PRATUM SPIRITUALE, the NOTÆ headings over note blocks) and four specks/junk lines.
Writes translate/moschus-pratum/verify/GREEK-DROPS.tsv (page, line, text, why); kt-to-site deletes them. The CAPUT heads that
mp-greek-breaks.py already located are in GREEK-BREAKS.tsv `drop`; this adds the rest, found by pattern.
Run from ~/patrologia:  python3 scripts/mp-drops.py"""
import re
K = 'raw/kraken/moschus-pratum/checked/'; T = 'translate/moschus-pratum/verify/'
RUNNING = {(40, 2), (44, 2), (46, 1), (52, 1), (128, 1), (138, 1), (161, 1), (168, 1)}
JUNK = {(44, 1): 'speck', (101, 1): 'speck', (70, 33): 'junk', (155, 58): 'junk', (77, 50): 'junk'}
rows = []
for n in range(40, 171):
    pg = f'p-{n:04d}'
    for i, l in enumerate(open(K + pg + '.txt').read().split('\n'), 1):
        t = l.strip()
        if not t: continue
        why = None
        if (n, i) in RUNNING: why = 'running head'
        elif (n, i) in JUNK: why = JUNK[(n, i)]
        elif len(t) <= 24 and re.search(r'[ΡρPp][ΥυYy][ΤτT]', t) and not re.search(r'[α-ωά-ώἀ-ῼ]{4,}', t.replace('υ', '')): why = 'garbled CAPUT head'
        elif re.fullmatch(r'[νΝ][οΟ][τΤT][αΑεΕ]*\.?', t): why = 'NOTAE heading'
        if why: rows.append((pg, i, t, why))
with open(T + 'GREEK-DROPS.tsv', 'w') as o:
    o.write('page\tline\ttext\twhy\n')
    for r in rows: o.write('\t'.join(map(str, r)) + '\n')
print(len(rows), 'lines;', {w: sum(1 for r in rows if r[3] == w) for w in set(r[3] for r in rows)})
