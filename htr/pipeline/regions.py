"""Detect page regions with Calfa's REG-YOLOv12s (run in ~/.local/share/yolo-venv).

    regions.py <pages-dir> <regions.json>

Writes every detection at conf >= 0.25 for every p-NNNN.png, keyed by page.
"""
import json, sys
from pathlib import Path
from ultralytics import YOLO

MODEL = Path.home() / 'patrologia/sources/pg/calfa/models/REG-YOLOv12s.pt'

if __name__ == '__main__':
    pages, out = Path(sys.argv[1]), Path(sys.argv[2])
    m = YOLO(str(MODEL))
    res = {}
    for f in sorted(pages.glob('p-*.png')):
        r = m.predict(str(f), device='mps', verbose=False)[0]
        res[f.stem] = [{'class': m.names[int(c)], 'box': [int(v) for v in b], 'conf': round(s, 2)}
                       for b, c, s in zip(r.boxes.xyxy.tolist(), r.boxes.cls.tolist(), r.boxes.conf.tolist())
                       if s >= 0.25]
    out.write_text(json.dumps(res, indent=1))
