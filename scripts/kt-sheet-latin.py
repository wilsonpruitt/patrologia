#!/usr/bin/env python3
"""Contact sheets for the image check of LATIN-ONLY kt chunks (2026-11-05, Sophronius Or. I, III, VI).

Usage: python3 scripts/kt-sheet-latin.py <work> <chunk> [--per=20] [--cols=2] [--scale=0.5] [--kinds=ocr,doubt,print,subscript]
  reads   translate/<work>/<chunk>.en.md OCR table (tags pNNNN.L|R.LL), translate/<work>/<chunk>.lines.tsv (djvu line boxes,
          plate pixels, written by kt-scaffold-latin.py), raw/kraken/<work>/pages/p-NNNN.png
  writes  raw/kraken/<work>/sheets-latin-<chunk>/sheet-NNN.png + ROWS.tsv (sheet, slot, chunk, tag, printed, reading, kind, located)

Each tile is the tagged line with one line above and below (the whole column width), a red bar on the target line, and the
row's label. ⚠ so-019/so-020 OCR tables were written against the v1 scaffold, whose tags are one line off near restored
column tops: the line is therefore found by TEXT. The tagged line is used if the printed token is in it, otherwise the
nearest line within ±3 in the same column that contains it (`located` = 'tag', 'moved±n', or 'tag?' when not found).
Record verdicts with kt-verdict.py's codes in translate/<work>/IMAGE-CHECK-LATIN.tsv (see kt-verdict-latin note in RUN.md).
"""
import csv, os, re, sys, unicodedata as ud
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
args = [a for a in sys.argv[1:] if not a.startswith('--')]
opt = dict(a[2:].split('=', 1) for a in sys.argv[1:] if a.startswith('--') and '=' in a)
work, chunk = args[0], args[1]
PER, COLS, SC = int(opt.get('per', 20)), int(opt.get('cols', 2)), float(opt.get('scale', 0.5))
KINDS = set(opt.get('kinds', 'ocr,doubt,print,subscript').split(','))
T = os.path.join(ROOT, 'translate', work); K = os.path.join(ROOT, 'raw/kraken', work)
OUT = os.path.join(K, f'sheets-latin-{chunk}'); os.makedirs(OUT, exist_ok=True)
FONT = ImageFont.truetype('/System/Library/Fonts/Supplemental/Times New Roman.ttf', 30)

boxes = {}; order = []
for r in csv.DictReader(open(f'{T}/{chunk}.lines.tsv'), delimiter='\t'):
    boxes[r['tag']] = (int(r['x1']), int(r['y1']), int(r['x2']), int(r['y2']), r['text']); order.append(r['tag'])
idx = {t: i for i, t in enumerate(order)}
norm = lambda s: re.sub(r'[^a-zæœ]', '', ud.normalize('NFC', s.lower()))

def locate(tag, printed):
    tok = norm(printed.split('/')[0].split()[0]) if printed.strip() else ''
    if tag not in idx: return None, 'MISSING'
    i = idx[tag]; col = tag[:7]
    if not tok or tok in norm(boxes[tag][4]): return i, 'tag'
    for d in (1, -1, 2, -2, 3, -3):
        j = i + d
        if 0 <= j < len(order) and order[j][:7] == col and tok in norm(boxes[order[j]][4]): return j, f'moved{d:+d}'
    return i, 'tag?'

rows = []
for l in open(f'{T}/{chunk}.en.md').read().split('\n## OCR', 1)[-1].split('\n'):
    if not l.startswith('| p'): continue
    c = [x.strip() for x in l.strip().strip('|').split('|')]
    if len(c) < 6 or c[4] not in KINDS or not re.match(r'p\d{4}\.[LR]\.\d+', c[0]): continue
    rows.append((c[0], c[1], c[2], c[4]))

log = ['sheet\tslot\tchunk\ttag\tprinted\treading\tkind\tlocated']
for s in range(0, len(rows), PER):
    tiles = []
    for slot, (tag, pr, rd, kind) in enumerate(rows[s:s + PER], 1):
        i, how = locate(tag, pr)
        if i is None:
            img = Image.new('RGB', (1600, 120), 'white'); ty = None
        else:
            x1, y1, x2, y2, _ = boxes[order[i]]
            nb = [boxes[order[j]] for j in (i - 1, i + 1) if 0 <= j < len(order) and order[j][:7] == order[i][:7]]
            X1 = min([x1] + [b[0] for b in nb]) - 30; X2 = max([x2] + [b[2] for b in nb]) + 30
            Y1 = min([y1] + [b[1] for b in nb]) - 10; Y2 = max([y2] + [b[3] for b in nb]) + 10
            pg = order[i][1:5]
            img = Image.open(f'{K}/pages/p-{pg}.png').crop((max(0, X1), max(0, Y1), X2, Y2)).convert('RGB')
            ImageDraw.Draw(img).rectangle((0, y1 - Y1, 8, y2 - Y1), fill=(220, 0, 0))
        img = img.resize((max(1, int(img.width * SC)), max(1, int(img.height * SC))))
        tw = int(1750 * SC)
        tile = Image.new('RGB', (tw, img.height + 40), 'white'); tile.paste(img, (0, 40))
        ImageDraw.Draw(tile).text((4, 2), f'{slot}. {tag} [{kind}] {pr} → {rd}'[:int(tw / 13)], fill=(170, 0, 0), font=FONT)
        tiles.append(tile)
        log.append(f'{s // PER + 1:03d}\t{slot}\t{chunk}\t{tag}\t{pr}\t{rd}\t{kind}\t{how}')
    tw = tiles[0].width; col_h = [0] * COLS; place = []
    for k, t in enumerate(tiles):
        c = k % COLS; place.append((c * (tw + 10), col_h[c], t)); col_h[c] += t.height + 8
    sheet = Image.new('RGB', (COLS * (tw + 10), max(col_h)), (200, 200, 200))
    for x, y, t in place: sheet.paste(t, (x, y))
    sheet.save(f'{OUT}/sheet-{s // PER + 1:03d}.png')
open(f'{OUT}/ROWS.tsv', 'w').write('\n'.join(log) + '\n')
from collections import Counter
print(f'{chunk}: {len(rows)} rows → {(len(rows) + PER - 1) // PER} sheets in {os.path.relpath(OUT, ROOT)}/;',
      dict(Counter(l.split('\t')[-1] for l in log[1:])))
