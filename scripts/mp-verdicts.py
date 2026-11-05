#!/usr/bin/env python3
"""translate/moschus-pratum/IMAGE-CHECK.tsv -> verify/VERDICTS.tsv (the public cruces table: print errors M, readings kept P,
undecided ?; the R rows, our own OCR slips, stay in APPLIED.tsv). Run from ~/patrologia."""
import csv
T = 'translate/moschus-pratum/'
out = []
for r in csv.DictReader(open(T + 'IMAGE-CHECK.tsv'), delimiter='\t'):
    v = r['verdict']
    if v == 'R': continue
    why = {'M': 'Migne prints this form; the English follows the corrected reading', 'P': "the plate prints this (Migne's own text); the translator's emendation is NOT adopted", '?': 'not settled at the plate; the Greek stands as Kraken read it'}[v]
    out.append((r['chunk'], r['tag'], r['kind'], r['printed'], r['reading'], {'M': 'migne', 'P': 'migne', '?': 'undecided'}[v], (r['comment'] or '').strip() or why, {'M': 'print error', 'P': 'reading kept', '?': 'undecided'}[v]))
with open(T + 'verify/VERDICTS.tsv', 'w') as o:
    o.write('n\tchunk\ttag\tkind\tprinted\treading\tverdict\tplate\tmark\twhy\tnote\n')
    for i, (ch, tag, kind, pr, rd, vd, pl, why) in enumerate(out, 1): o.write(f'{i}\t{ch}\t{tag}\t{kind}\t{pr}\t{rd}\t{vd}\t{pl}\t\t{why}\t\n')
print(len(out), 'rows')
