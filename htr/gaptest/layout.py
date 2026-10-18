"""Crop each page's Greek text blocks with Calfa's region model (REG-YOLOv12s).

    layout.py   (run in ~/.local/share/yolo-venv)  -> layout/crops/*.png + layout/blocks.json

Keeps MainText_ColGreek and MainText_Title boxes (titles are filtered by script
after OCR), drops overlapping duplicates, orders blocks top to bottom (a page is
upper column / full-width block / lower column, so y-order is reading order).
"""
import json
from pathlib import Path
from PIL import Image
from ultralytics import YOLO

HERE = Path(__file__).parent
MODEL = Path.home() / 'patrologia/sources/pg/calfa/models/REG-YOLOv12s.pt'
KEEP = {'MainText_ColGreek', 'MainText_Title'}
PAD, CONF = 12, 0.25
PAGES = list(range(846, 866)) + [971, 972, 973, 974]


def overlap(a, b):
    ix = max(0, min(a[2], b[2]) - max(a[0], b[0]))
    iy = max(0, min(a[3], b[3]) - max(a[1], b[1]))
    return ix * iy / min((a[2] - a[0]) * (a[3] - a[1]), (b[2] - b[0]) * (b[3] - b[1]))


if __name__ == '__main__':
    m = YOLO(str(MODEL))
    (HERE / 'layout/crops').mkdir(parents=True, exist_ok=True)
    blocks, allr = {}, {}
    for p in PAGES:
        src = HERE / f'pages/p-{p:04d}.png'
        r = m.predict(str(src), device='mps', verbose=False)[0]
        boxes = [(m.names[int(c)], [int(v) for v in b], s) for b, c, s in
                 zip(r.boxes.xyxy.tolist(), r.boxes.cls.tolist(), r.boxes.conf.tolist())
                 if m.names[int(c)] in KEEP and s >= CONF]
        boxes.sort(key=lambda x: -x[2])
        kept = []
        for b in boxes:
            if all(overlap(b[1], k[1]) < 0.5 for k in kept):
                kept.append(b)
        kept.sort(key=lambda x: x[1][1])
        im = Image.open(src).convert('L')
        blocks[p] = []
        for i, (cls, (x0, y0, x1, y1), s) in enumerate(kept):
            box = (max(0, x0 - PAD), max(0, y0 - PAD), min(im.width, x1 + PAD), min(im.height, y1 + PAD))
            name = f'p{p}-b{i}.png'
            im.crop(box).save(HERE / 'layout/crops' / name)
            blocks[p].append({'crop': name, 'class': cls, 'box': box, 'conf': round(s, 2)})
        print(p, [(b['class'][9:], b['box'][1]) for b in blocks[p]])
        allr[p] = [{'class': m.names[int(c)], 'box': [int(v) for v in b], 'conf': round(s, 2)} for b, c, s in
                   zip(r.boxes.xyxy.tolist(), r.boxes.cls.tolist(), r.boxes.conf.tolist()) if s >= 0.25]
    (HERE / 'layout/blocks.json').write_text(json.dumps(blocks, indent=1))
    (HERE / 'layout/regions-all.json').write_text(json.dumps(allr, indent=1))
