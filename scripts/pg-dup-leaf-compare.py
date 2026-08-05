#!/usr/bin/env python3.11
"""
Compare the two scans of a duplicated PG 88 leaf and say which one to keep.

`raw/pg088/088.pdf` re-shoots three blocks of leaves (see the column map's
`rescanBoundariesPlateVerified`). The map keeps the FIRST scan of every repeated
column — but a block may have been re-shot precisely BECAUSE the first pass was
bad, in which case keeping the first is exactly the wrong default. This tool
measures both members of each pair so the choice rests on the plates, not on the
order they happen to sit in the file.

Metrics, all computed on the Greek column only (the map records which side it is
on), because a scan can be sharp in the gutter and soft where the Greek is:

  sharp   variance of the Laplacian, normalised by contrast. Higher = crisper
          edges. The single most reliable focus proxy on printed type.
  contr   5th-to-95th percentile spread of grey levels. Low = washed out.
  ink     share of pixels below the ink threshold. A very low value means a
          faint plate; a very high one means bleed-through or a dark scan.
  skew    estimated rotation in degrees, from the row-ink profile's sharpness
          under small rotations. Type that is skewed is type the OCR mis-reads.

No metric is authoritative on its own, so the tool reports a verdict only when
`sharp` differs by more than --margin (default 15%); otherwise it says TOSS-UP
and the pair goes to a human look. It never edits the map.

Usage:
  pg-dup-leaf-compare.py --pdf raw/pg088/088.pdf --map data/pg-column-maps/pg088.json
  pg-dup-leaf-compare.py ... --dump raw/pg088/dup-compare   # write side-by-side PNGs
"""

import argparse
import json
import pathlib
import subprocess
import tempfile

import numpy as np
from PIL import Image

INK_THRESHOLD = 170
DPI = 200


def render(pdf, page, workdir):
    stem = pathlib.Path(workdir) / f"p{page}"
    subprocess.run(
        ["pdftoppm", "-f", str(page), "-l", str(page), "-r", str(DPI), "-png",
         str(pdf), str(stem)],
        check=True, capture_output=True,
    )
    hits = sorted(pathlib.Path(workdir).glob(f"p{page}-*.png"))
    if not hits:
        raise RuntimeError(f"pdftoppm produced nothing for page {page}")
    return Image.open(hits[0]).convert("L")


def greek_half(img, side):
    """The Greek column's half of the page, trimmed of the outer scan edge."""
    w, h = img.size
    x0, x1 = (0, w // 2) if side == "left" else (w // 2, w)
    box = (x0 + int(0.04 * w), int(0.06 * h), x1 - int(0.02 * w), int(0.94 * h))
    return np.asarray(img.crop(box), dtype=np.float64)


def laplacian_var(a):
    lap = (-4 * a[1:-1, 1:-1] + a[:-2, 1:-1] + a[2:, 1:-1]
           + a[1:-1, :-2] + a[1:-1, 2:])
    return float(lap.var())


def contrast(a):
    lo, hi = np.percentile(a, [5, 95])
    return float(hi - lo)


def ink_share(a):
    return float((a < INK_THRESHOLD).mean())


def skew_deg(img, side):
    """Rotation that maximises the row-profile's variance — text lines go flat."""
    small = img.resize((img.width // 3, img.height // 3))
    best, best_ang = -1.0, 0.0
    for ang in np.arange(-1.5, 1.55, 0.25):
        rot = small.rotate(ang, resample=Image.BILINEAR, fillcolor=255)
        a = greek_half(rot, side)
        prof = (a < INK_THRESHOLD).mean(axis=1)
        v = float(prof.var())
        if v > best:
            best, best_ang = v, float(ang)
    return best_ang


def measure(pdf, leaf, side, workdir, dump=None, tag=""):
    img = render(pdf, leaf + 1, workdir)
    a = greek_half(img, side)
    c = contrast(a)
    m = {
        "leaf": leaf,
        "sharp": laplacian_var(a) / max(c, 1.0) ** 2,
        "contr": c,
        "ink": ink_share(a),
        "skew": skew_deg(img, side),
        "px": f"{img.width}x{img.height}",
    }
    if dump:
        pathlib.Path(dump).mkdir(parents=True, exist_ok=True)
        Image.fromarray(a.astype(np.uint8)).save(
            pathlib.Path(dump) / f"{tag}leaf{leaf}.png")
    return m


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--map", required=True)
    ap.add_argument("--margin", type=float, default=0.15,
                    help="relative sharpness gap needed before calling a winner")
    ap.add_argument("--dump", help="directory for the cropped Greek halves")
    ap.add_argument("--json", help="write the full measurements here")
    args = ap.parse_args()

    m = json.loads(pathlib.Path(args.map).read_text())
    pages = {p["leaf"]: p for p in m["pages"]}
    first = {}
    for p in m["pages"]:
        if not p.get("skipInHarvest"):
            first.setdefault(p["colLeft"], p["leaf"])

    rows = []
    with tempfile.TemporaryDirectory() as wd:
        for dup in m["duplicateLeaves"]:
            p = pages[dup]
            kept = first.get(p["colLeft"])
            if kept is None:
                print(f"leaf {dup}: no first-scan counterpart — skipped")
                continue
            side = p["greekSide"]
            if pages[kept]["greekSide"] != side:
                print(f"⚠ leaf {dup}/{kept}: parity differs, compare by hand")
            a = measure(args.pdf, kept, side, wd, args.dump, "kept-")
            b = measure(args.pdf, dup, side, wd, args.dump, "dup-")
            gap = (b["sharp"] - a["sharp"]) / max(a["sharp"], 1e-9)
            if gap > args.margin:
                verdict = "PREFER RESCAN"
            elif gap < -args.margin:
                verdict = "keep first"
            else:
                verdict = "toss-up"
            rows.append({"kept": a, "dup": b, "cols": f"{p['colLeft']}|{p.get('colRight')}",
                         "gap": gap, "verdict": verdict})
            print(f"cols {p['colLeft']:>4}|{p.get('colRight'):<4} "
                  f"first {kept} sharp {a['sharp']:.4f} contr {a['contr']:.0f} "
                  f"ink {a['ink']:.3f} skew {a['skew']:+.2f}   "
                  f"rescan {dup} sharp {b['sharp']:.4f} contr {b['contr']:.0f} "
                  f"ink {b['ink']:.3f} skew {b['skew']:+.2f}   "
                  f"gap {gap:+.1%}  {verdict}")

    n_rescan = sum(1 for r in rows if r["verdict"] == "PREFER RESCAN")
    n_first = sum(1 for r in rows if r["verdict"] == "keep first")
    print(f"\n{len(rows)} pairs — prefer rescan {n_rescan}, keep first {n_first}, "
          f"toss-up {len(rows) - n_rescan - n_first}")
    if args.json:
        pathlib.Path(args.json).write_text(json.dumps(rows, indent=1))


if __name__ == "__main__":
    main()
