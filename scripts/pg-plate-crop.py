#!/usr/bin/env python3
"""Crop half of a PG plate's GREEK column (gutter included, so band letters show) for reading.

    python3 scripts/pg-plate-crop.py 155 101 a      # top half of the Greek column on Calfa p.101
    python3 scripts/pg-plate-crop.py 155 101 b      # bottom half
    python3 scripts/pg-plate-crop.py 155 101 lat-a  # top half of the LATIN column (rarely needed)

Reads raw/pg<vol>-plates/index.json (Calfa page -> rendered 200 dpi PNG + Greek side).
Writes one PNG to $TMPDIR and prints its path. View it, write your findings, delete it —
one crop at a time (image context is what stalled earlier plate agents).
"""
import sys, json, os, tempfile
from PIL import Image
vol, page, half = sys.argv[1], int(sys.argv[2]), sys.argv[3]
idx = {r['calfaPage']: r for r in json.load(open(f'raw/pg{vol}-plates/index.json'))}
r = idx[page]; im = Image.open(r['png']); w, h = im.size
side = r['greekSide']
if half.startswith('lat'): side = 'left' if side == 'right' else 'right'
box = (int(w * 0.46), 0, w, h) if side == 'right' else (0, 0, int(w * 0.54), h)
col = im.crop(box); cw, ch = col.size
part = col.crop((0, 0, cw, ch // 2 + 30)) if half.endswith('a') else col.crop((0, ch // 2 - 30, cw, ch))
out = os.path.join(tempfile.gettempdir(), f'pg{vol}-p{page}-{half}-{os.getpid()}.png')  # pid: parallel readers must not overwrite each other
part.save(out); print(out, f"cols {r['cols']} greekCol {r['greekCol']} side {r['greekSide']}")
