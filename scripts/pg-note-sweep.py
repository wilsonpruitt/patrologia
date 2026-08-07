#!/usr/bin/env python3.11
"""
Locate and read Migne's NOTES on a PG leaf — the apparatus, not the body.

WHY THIS EXISTS (2026-08-07)

Batch 2's foot-rule records were written from the retired 4-segment column crops
and several admit clipping in their own text ("cut off at right edge of crop").
Re-reading them needs a repeatable method, and the obvious methods were tried
first and FAILED. They are recorded here so they are not tried again:

  1. MEASURING INK AT THE PAGE BOTTOM misses every mid-page note. leaf838's
     `c Prov. ix, 9.` sits above Migne's `Sequentia non habentur in Graeco`
     notice, because that is where its Greek run ends — and a work ending
     mid-page is exactly where new notes cluster.
  2. SEARCHING FOR A HORIZONTAL RULE finds nothing on any leaf. In this volume
     the "foot rule" is a block of small type after a vertical gap. There is no
     printed line to find.
  3. A LINE-HEIGHT DETECTOR breaks on heavily inked leaves. leaf843's ~56 body
     lines resolve as 12, because the row ink profile never falls below
     threshold between them, so the median line height is meaningless.

What works is dull: a whole-page thumbnail to LOCATE the note blocks by eye —
they are visually obvious as a separate mass of small type — then a 600 dpi crop
to READ them. This script does exactly that and nothing cleverer. `candidates`
PROPOSES regions; it never decides that a leaf has no notes. Only a reader looking
at the whole page may conclude that.

⛔ THE MARKER RULE, measured 2026-08-07 and the reason `glyph` exists:

    Letters are distinguished by SILHOUETTE — ascenders, descenders, hooks,
    crossbars. Digits are distinguished by COUNTERS. When a plate over-inks,
    the counters close first and the silhouette survives.

So the lettered a-z series is readable and is a valid completeness gate, while
every numbered marker examined on PG 88 (839 #1, 840 #1, 842, 844, 845) is a
solid blob with no counter and cannot be read at all. Use `glyph` to print a
pixel map before asserting ANY marker. If the map shows no counter and no
distinguishing silhouette, the marker is ILLEGIBLE — record it as such. That is
a fact about the source, the same class as a numeral worn off the plate.
NEVER complete a marker from its series.

Usage:
  pg-note-sweep.py grid       --pdf raw/pg088/088.pdf --leaves 846-864 --out /tmp/sweep
  pg-note-sweep.py candidates --pdf raw/pg088/088.pdf --leaves 846-864
  pg-note-sweep.py crop       --pdf raw/pg088/088.pdf --leaf 850 --box 0,5600,4032,6100 --out /tmp/sweep
  pg-note-sweep.py glyph      --pdf raw/pg088/088.pdf --leaf 845 --box 380,5700,540,5790

Leaf N is PDF page N+1, i.e. zero-based page index N. Coordinates are always
600 dpi FULL-PAGE pixels, untrimmed — never segment coordinates, and never the
trimmed box from a batch manifest.
"""

import argparse
import os
import sys

import fitz
import numpy as np
from PIL import Image

DPI = 600
MAT = fitz.Matrix(DPI / 72, DPI / 72)
THUMB_DPI = 150


def page_gray(doc, leaf, dpi=DPI):
    """Full page as a grayscale ndarray. Leaf N == page index N."""
    pix = doc[leaf].get_pixmap(matrix=fitz.Matrix(dpi / 72, dpi / 72),
                               colorspace=fitz.csGRAY)
    return np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width)


def parse_leaves(spec):
    out = []
    for part in spec.split(","):
        if "-" in part:
            a, b = part.split("-")
            out.extend(range(int(a), int(b) + 1))
        else:
            out.append(int(part))
    return out


def cmd_grid(args):
    """Contact sheets, 4 leaves each, for locating note blocks by eye."""
    doc = fitz.open(args.pdf)
    leaves = parse_leaves(args.leaves)
    os.makedirs(args.out, exist_ok=True)
    for i in range(0, len(leaves), 4):
        chunk = leaves[i:i + 4]
        ims = [Image.fromarray(page_gray(doc, l, THUMB_DPI)) for l in chunk]
        w = max(im.width for im in ims)
        h = max(im.height for im in ims)
        sheet = Image.new("L", (w * 2 + 30, h * 2 + 30), 255)
        for k, im in enumerate(ims):
            sheet.paste(im, ((k % 2) * (w + 30), (k // 2) * (h + 30)))
        name = f"grid_{chunk[0]}-{chunk[-1]}.png"
        sheet.save(os.path.join(args.out, name))
        print(f"{name}  TL={chunk[0]}"
              + (f" TR={chunk[1]}" if len(chunk) > 1 else "")
              + (f" BL={chunk[2]}" if len(chunk) > 2 else "")
              + (f" BR={chunk[3]}" if len(chunk) > 3 else ""))


def text_lines(dark, min_rows=8, thresh=25):
    rows = dark.sum(axis=1)
    on = rows > thresh
    segs, y, H = [], 0, len(on)
    while y < H:
        if on[y]:
            s = y
            while y < H and on[y]:
                y += 1
            if y - s >= min_rows:
                segs.append((s, y))
        else:
            y += 1
    return segs


def cmd_candidates(args):
    """PROPOSE note-block regions across the FULL column height.

    Deliberately over-proposes. A leaf with zero candidates has NOT been shown
    to have zero notes — look at its thumbnail.
    """
    doc = fitz.open(args.pdf)
    for leaf in parse_leaves(args.leaves):
        a = page_gray(doc, leaf)
        dark = a < 140
        segs = text_lines(dark)
        if not segs:
            print(f"leaf{leaf}: NO TEXT LINES FOUND — look at the thumbnail")
            continue
        heights = np.array([e - s for s, e in segs])
        med = float(np.median(heights))
        H = a.shape[0]
        cands = []
        prev_end = None
        for (s, e) in segs:
            gap = s - prev_end if prev_end is not None else 0
            band = dark[s:e]
            cols = np.where(band.any(axis=0))[0]
            x0, x1 = (int(cols[0]), int(cols[-1])) if len(cols) else (0, 0)
            small = (e - s) < med * 0.85
            big_gap = gap > 55
            if small or big_gap:
                cands.append((s, e, gap, x0, x1, small, big_gap))
            prev_end = e
        print(f"leaf{leaf}: {len(segs)} lines, median h={med:.0f}, "
              f"{len(cands)} candidate band(s)  [page height {H}]")
        for (s, e, gap, x0, x1, small, big) in cands:
            tags = ",".join(t for t, on in (("small", small), ("gap", big)) if on)
            print(f"    y={s}-{e}  h={e-s:<4} gap={gap:<4} x={x0}-{x1}  [{tags}]")
        print(f"    -> read with:  crop --leaf {leaf} --box 0,<y0-40>,4032,<y1+40>")


def cmd_crop(args):
    doc = fitz.open(args.pdf)
    x0, y0, x1, y1 = (int(v) for v in args.box.split(","))
    clip = fitz.Rect(x0 / (DPI / 72), y0 / (DPI / 72),
                     x1 / (DPI / 72), y1 / (DPI / 72))
    pix = doc[args.leaf].get_pixmap(matrix=MAT, clip=clip)
    os.makedirs(args.out, exist_ok=True)
    path = os.path.join(args.out, f"leaf{args.leaf}_{y0}-{y1}.png")
    pix.save(path)
    print(f"{path}  {pix.width}x{pix.height}")


def cmd_glyph(args):
    """Pixel map of one marker. Read this BEFORE asserting any marker letter."""
    doc = fitz.open(args.pdf)
    x0, y0, x1, y1 = (int(v) for v in args.box.split(","))
    a = page_gray(doc, args.leaf)
    reg = a[y0:y1, x0:x1]
    print(f"leaf{args.leaf} box=({x0},{y0})-({x1},{y1})  "
          f"{reg.shape[1]}x{reg.shape[0]}px  min={reg.min()} max={reg.max()}")
    for r in reg:
        print("".join("#" if v < 110 else ("+" if v < 185 else ".") for v in r))
    print()
    print("Counters visible? If NO counter and NO distinguishing silhouette,")
    print("the marker is ILLEGIBLE. Record it as illegible. Do NOT complete it")
    print("from the series — see this file's header.")


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)

    g = sub.add_parser("grid", help="contact sheets for locating note blocks by eye")
    g.add_argument("--pdf", required=True)
    g.add_argument("--leaves", required=True)
    g.add_argument("--out", default="/tmp/pg-note-sweep")
    g.set_defaults(func=cmd_grid)

    c = sub.add_parser("candidates", help="PROPOSE note bands (never concludes absence)")
    c.add_argument("--pdf", required=True)
    c.add_argument("--leaves", required=True)
    c.set_defaults(func=cmd_candidates)

    r = sub.add_parser("crop", help="600 dpi crop, full-page coordinates")
    r.add_argument("--pdf", required=True)
    r.add_argument("--leaf", type=int, required=True)
    r.add_argument("--box", required=True, help="x0,y0,x1,y1 at 600 dpi")
    r.add_argument("--out", default="/tmp/pg-note-sweep")
    r.set_defaults(func=cmd_crop)

    y = sub.add_parser("glyph", help="pixel map of one marker, for adjudication")
    y.add_argument("--pdf", required=True)
    y.add_argument("--leaf", type=int, required=True)
    y.add_argument("--box", required=True, help="x0,y0,x1,y1 at 600 dpi")
    y.set_defaults(func=cmd_glyph)

    args = ap.parse_args()
    args.func(args)


if __name__ == "__main__":
    sys.exit(main())
