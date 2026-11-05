#!/usr/bin/env python3
"""Cut thumbnails + note-block tiles for Moschus's foot-of-page apparatus read.
Per page: <p>-thumb.png (whole page, 700 px wide) and tiles <p>-t<N>.png. Tiles cover every layout-model
Marginalia_Footnote region (padded); a page with none gets the bottom band instead (the model can miss a block, so the
agent still looks at the thumbnail). Tiles are 2100 px wide halves (overlap 200), <=1000 px high, from the 600 dpi page.
Run from ~/patrologia:  python3 scripts/mp-note-crops.py [work]   (default moschus-pratum; generalised 2026-11-05)"""
import json, os, sys
from PIL import Image
work = sys.argv[1] if len(sys.argv) > 1 else 'moschus-pratum'
K = f'raw/kraken/{work}'
OUT = f'translate/{work}/notes/img'
os.makedirs(OUT, exist_ok=True)
regs = json.load(open(f'{K}/regions.json'))
man = {}
for p, rs in sorted(regs.items()):
    im = Image.open(f'{K}/pages/{p}.png').convert('L')
    W, H = im.size
    im.resize((700, round(H * 700 / W))).save(f'{OUT}/{p}-thumb.png')
    fb = [r['box'] for r in rs if 'Footnote' in r['class']]
    bands = [(max(0, b[1] - 40), min(H, b[3] + 40)) for b in fb] or [(5300, H)]
    tiles = []
    n = 0
    for y0, y1 in bands:
        y = y0
        while y < y1:
            ye = min(y + 1000, y1)
            for x0, x1 in ((0, 2100), (W - 2100, W)):
                n += 1
                im.crop((x0, y, x1, ye)).save(f'{OUT}/{p}-t{n}.png')
                tiles.append(f'{p}-t{n}.png')
            y = ye
    man[p] = {'model_found_notes': bool(fb), 'tiles': tiles}
json.dump(man, open(f'translate/{work}/notes/manifest.json', 'w'), indent=0)
print(len(man), 'pages', sum(len(v['tiles']) for v in man.values()), 'tiles')
