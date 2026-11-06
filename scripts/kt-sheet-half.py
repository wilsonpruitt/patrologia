#!/usr/bin/env python3
"""Pass-2 contact sheets for the kt image check, cut from the GREEK HALF of the page (2026-11-06, Maximus Opuscula).

    python3 scripts/kt-sheet-half.py <work> <IMAGE-CHECK.tsv> [--out=DIR] [--per=10] [--pad=160]

Why: kt-sheet.py finds the Greek column from the yolo region boxes; on pages where those boxes fail it crops the LATIN
column, and its pass-2 ('--redo') crops start only 30 px left of Kraken's line box, which misses letters squeezed into
the gutter (pp. 103, 118, 121, 153 of PG 91). Here the Greek side comes from the column map (`greekSide`), the line is
matched by text among the xml lines whose centre lies in that half, and every tile is the whole half-page width over the
target line with one line above and below. Rows = every verdict '?' in the given IMAGE-CHECK.tsv.
Writes DIR/sheet-NNN.png + DIR/ROWS.tsv in kt-sheet's shape, so kt-verdict.py --pass2-style recording works with
`--rows=DIR/ROWS.tsv --out=<file>`.
"""
import csv, difflib, json, os, re, sys, unicodedata as ud
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
args = [a for a in sys.argv[1:] if not a.startswith('--')]
opt = dict(a[2:].split('=', 1) for a in sys.argv[1:] if a.startswith('--') and '=' in a)
work, ic = args[0], args[1]
K = os.path.join(ROOT, 'raw/kraken', work)
OUT = opt.get('out', os.path.join(K, 'sheets3')); os.makedirs(OUT, exist_ok=True)
PER = int(opt.get('per', 10)); PAD = int(opt.get('pad', 160))
cm_path = {'maximus-opuscula': 'data/pg-column-maps/pg091.json', 'maximus-epistulae': 'data/pg-column-maps/pg091.json'}[work]
CM = {p['pdfPage']: p for p in json.load(open(os.path.join(ROOT, cm_path)))['pages']}
FONT = ImageFont.truetype('/System/Library/Fonts/Supplemental/Times New Roman.ttf', 30)
nfc = lambda s: ud.normalize('NFC', s)
gb = lambda s: ''.join(c for c in ud.normalize('NFD', s.lower()) if 'α' <= c <= 'ω')
LINE = re.compile(r'<TextLine[^>]*>\s*<Coords points="([^"]+)"/>(.*?)</TextLine>', re.S)

_x = {}
def xlines(p):
    if p not in _x:
        out = []
        for pts, body in LINE.findall(open(f'{K}/xml/{p}.xml', encoding='utf-8').read()):
            P = [tuple(map(int, q.split(','))) for q in pts.split()]
            u = re.findall(r'<Unicode>(.*?)</Unicode>', body)
            out.append((min(a for a, _ in P), min(b for _, b in P), max(a for a, _ in P), max(b for _, b in P), nfc(u[-1]) if u else ''))
        _x[p] = out
    return _x[p]

rows = [r for r in csv.DictReader(open(ic), delimiter='\t') if r['verdict'] == '?']
log = ['sheet\tslot\tchunk\ttag\tprinted\treading\tkind\tlocated']
tiles = []
for r in rows:
    m = re.match(r'p(\d{4})\.(\d+)', r['tag']); pdf, ln = int(m.group(1)), int(m.group(2)); p = f'p-{pdf:04d}'
    im = Image.open(f'{K}/pages/{p}.png').convert('L'); W = im.width; mid = W // 2
    left = CM[pdf]['greekSide'] == 'left'
    xa, xb = (0, mid + 40) if left else (mid - 40, W)
    tl = open(f'{K}/text/{p}.txt', encoding='utf-8').read().split('\n')
    t = nfc(tl[ln - 1]) if ln <= len(tl) else ''
    cands = [L for L in xlines(p) if xa <= (L[0] + L[2]) / 2 <= xb and gb(L[4])]
    best = max(cands, key=lambda L: difflib.SequenceMatcher(None, gb(L[4]), gb(t)).ratio(), default=None)
    how = 'half'
    if not best or not t.strip() or difflib.SequenceMatcher(None, gb(best[4]), gb(t)).ratio() < 0.5:
        how = 'MISSING'; tile_img = Image.new('L', (xb - xa, 80), 255)
    else:
        h = best[3] - best[1]
        tile_img = im.crop((xa, max(0, best[1] - h - 10), xb, min(im.height, best[3] + h + 10)))
        d = ImageDraw.Draw(tile_img); d.rectangle((0, h + 10, 10, 2 * h + 10), fill=0)
    tile_img = tile_img.convert('RGB'); sc = 1400 / tile_img.width
    tile_img = tile_img.resize((1400, int(tile_img.height * sc)))
    tile = Image.new('RGB', (1400, tile_img.height + 40), 'white'); tile.paste(tile_img, (0, 40))
    ImageDraw.Draw(tile).text((4, 4), f"{len(tiles) % PER + 1}. {r['tag']} [{r['kind']}] {r['printed']} → {r['reading']}"[:90], fill=(170, 0, 0), font=FONT)
    tiles.append(tile)
    log.append(f"{(len(tiles) - 1) // PER + 1:03d}\t{(len(tiles) - 1) % PER + 1}\t{r['chunk']}\t{r['tag']}\t{r['printed']}\t{r['reading']}\t{r['kind']}\t{how}")
for s in range(0, len(tiles), PER):
    batch = tiles[s:s + PER]; H = sum(t.height + 8 for t in batch)
    sheet = Image.new('RGB', (1400, H), (200, 200, 200)); y = 0
    for t in batch: sheet.paste(t, (0, y)); y += t.height + 8
    sheet.save(f'{OUT}/sheet-{s // PER + 1:03d}.png')
open(f'{OUT}/ROWS.tsv', 'w').write('\n'.join(log) + '\n')
from collections import Counter
print(len(tiles), 'rows →', (len(tiles) + PER - 1) // PER, 'sheets;', dict(Counter(l.split('\t')[-1] for l in log[1:])))
