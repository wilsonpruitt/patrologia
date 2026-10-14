#!/usr/bin/env python3
"""Tesseract grc vs Calfa ground truth (Zenodo 20008699 task2), same CER/WER definition as score.mjs
(NFC, edit distance over code points / ref length; WER over whitespace tokens).
Usage: tess-eval.py <hypdir> [--confusions]   e.g. hyp/tess, hyp/sonnet
Pages: every gt-greek/<page>.txt that has <hypdir>/gr-<page>.txt. PG_127-526 is excluded from the
mean, as in RESULTS.md (its GT covers 63 of ~380 words)."""
import sys, os, unicodedata, collections
from rapidfuzz.distance import Levenshtein as L

hd = sys.argv[1]; conf = '--confusions' in sys.argv
def nfc(s): return unicodedata.normalize('NFC', s)
def flat(s): return ' '.join(nfc(s).split())
rows, C = [], collections.Counter()
for f in sorted(os.listdir('gt-greek')):
    p = f[:-4]; h = os.path.join(hd, f'gr-{p}.txt')
    if not os.path.exists(h): continue
    ref, hyp = open(f'gt-greek/{f}').read(), open(h).read()
    cer = L.distance(nfc(hyp), nfc(ref)) / max(1, len(nfc(ref)))
    fr, fh = flat(ref), flat(hyp)
    cerf = L.distance(fh, fr) / max(1, len(fr))
    wer = L.distance(fh.split(), fr.split()) / max(1, len(fr.split()))
    rows.append((p, cer, cerf, wer, len(fr.split())))
    if conf:
        for op in L.editops(fh, fr):
            a = fh[op.src_pos] if op.tag != 'insert' else ''
            b = fr[op.dest_pos] if op.tag != 'delete' else ''
            C[(a, b)] += 1
use = [r for r in rows if r[0] != 'PG_127-526']
mean = lambda i: sum(r[i] for r in use) / len(use)
med = lambda i: sorted(r[i] for r in use)[len(use) // 2]
for r in rows: print(f'{r[0]:14} CER {r[1]*100:6.2f}%  CER(ws-flat) {r[2]*100:6.2f}%  WER {r[3]*100:6.2f}%  words {r[4]}')
print(f'\n{hd}: n={len(use)}  mean CER {mean(1)*100:.2f}%  median {med(1)*100:.2f}%  | ws-flat mean {mean(2)*100:.2f}% median {med(2)*100:.2f}%  | WER mean {mean(3)*100:.2f}% median {med(3)*100:.2f}%')
if conf:
    print('\ntop confusions (hyp -> ref):')
    for (a, b), n in C.most_common(40): print(f'  {a!r:>6} -> {b!r:6} {n}')
