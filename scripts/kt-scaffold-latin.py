#!/usr/bin/env python3
"""Scaffolds for a LATIN-ONLY stretch of a PG volume (Migne prints no Greek column), kt method.

The source is the archive.org copyA OCR (djvu xml) of Migne's Latin, cut to Kraken's MainText_ColLatin boxes
(regions.json), column by column: left column top to bottom, then the right. Running heads and
Marginalia_Footnote regions are left out (the notes are read in the apparatus step). Every line is tagged
pNNNN.L.LL / pNNNN.R.LL (page, column, line) and its djvu box is written to <chunk>.lines.tsv so the image
check can crop the plate line. Built 2026-11-05 for Sophronius Or. I, III, VI (PG 87.3).

    python3 scripts/kt-scaffold-latin.py <work> <chunk-id> <page>[:ymin[:ymax]] …
      e.g. sophronius-orationes so-019 215 216 217 218 219 220:0:4440
      a page spec may bound the y range (plate pixels) to cut a piece that starts or ends mid-page.
Brief: python3 scripts/kt-scaffold.py <work> brief <ids…> (same as the Greek; it only concatenates files).
"""
import json, os, re, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
WORKS = {'sophronius-orationes': ('data/pg-column-maps/pg087c.json', 'raw/scans/pg087c/copyA_087c_djvu.xml')}
work, cid, specs = sys.argv[1], sys.argv[2], sys.argv[3:]
cmap_path, xml_path = WORKS[work]
cmap = {p['pdfPage']: p for p in json.load(open(os.path.join(ROOT, cmap_path)))['pages']}
regions = json.load(open(os.path.join(ROOT, 'raw/kraken', work, 'regions.json')))
xml = open(os.path.join(ROOT, xml_path)).read().split('<OBJECT ')
OUT = os.path.join(ROOT, 'translate', work)

def words(pdf):
    out = []
    for c, w in re.findall(r'<WORD coords="([^"]+)"[^>]*>([^<]*)</WORD>', xml[pdf]):
        x1, y2, x2, y1 = map(int, c.split(',')[:4])
        out.append(((x1 + x2) / 2, (y1 + y2) / 2, x1, y1, x2, y2, w))
    return out

parts, rows, nwords = [], [], 0
for spec in specs:
    f = spec.split(':'); pdf = int(f[0])
    ymin = int(f[1]) if len(f) > 1 else 0; ymax = int(f[2]) if len(f) > 2 else 10 ** 6
    boxes = sorted([r['box'] for r in regions[f'p-{pdf:04d}'] if r['class'] == 'MainText_ColLatin'], key=lambda b: b[0])
    W = words(pdf); m = cmap[pdf]; mid = (boxes[0][0] + boxes[-1][2]) / 2 if boxes else 2000
    block = []
    for side, col in (('L', m['colLeft']), ('R', m['colRight'])):
        bs = [b for b in boxes if ((b[0] + b[2]) / 2 < mid) == (side == 'L') and b[2] - b[0] < 2500]
        full = [b for b in boxes if b[2] - b[0] >= 2500]           # a full-width Latin band (p-0272): read once, as L
        if side == 'L': bs += full
        ws = [w for w in W if any(b[0] <= w[0] <= b[2] and b[1] <= w[1] <= b[3] for b in bs) and ymin <= w[1] <= ymax]
        ws.sort(key=lambda w: w[1]); lines = []
        for w in ws:                                              # group into lines by y
            if lines and abs(w[1] - lines[-1][-1][1]) < 35: lines[-1].append(w)
            else: lines.append([w])
        if not lines: continue
        block.append(f'### column {col} ({side})\n\n```')
        for i, ln in enumerate(lines, 1):
            ln.sort(key=lambda w: w[0]); t = ' '.join(w[6] for w in ln); tag = f'p{pdf:04d}.{side}.{i:02d}'
            block.append(f'{tag} | {t}'); nwords += len(ln)
            rows.append((tag, min(w[2] for w in ln), min(min(w[3], w[5]) for w in ln), max(w[4] for w in ln), max(max(w[3], w[5]) for w in ln), t))
        block.append('```\n')
    parts.append(f'## p-{pdf:04d} · Latin cols {m["colLeft"]}/{m["colRight"]}' + ('' if len(f) == 1 else f' · y {ymin}–{ymax} only') + '\n\n' + '\n'.join(block))
head = f'chunk: {cid}\nwork: {work}\nsource: copyA djvu OCR (Latin only; no Greek printed)\npages: {" ".join(specs)}\nlatin_words: {nwords}\n\n'
open(f'{OUT}/{cid}.md', 'w').write(head + '\n'.join(parts))
with open(f'{OUT}/{cid}.lines.tsv', 'w') as fh:
    fh.write('tag\tx1\ty1\tx2\ty2\ttext\n')
    for r in rows: fh.write('\t'.join(map(str, r)) + '\n')
print(f'{OUT}/{cid}.md', nwords, 'Latin words')
