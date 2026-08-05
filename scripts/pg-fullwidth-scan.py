#!/usr/bin/env python3.11
"""
Render PG leaves for the full-width-line vision pass, with a labelled band ruler.

Why a vision pass at all: when a paragraph's Greek runs longer than its facing
Latin, Migne ends the Latin paragraph and sets the Greek tail ACROSS THE FULL
PAGE, over the gutter and the Latin column's width. A per-column crop keeps only
the right half of such a line and silently drops the left; the result still reads
as continuous prose. Plate-verified on PG 88 leaf 847.

`pg-fullwidth-lines.py` tries to find these geometrically and cannot do it
reliably — five documented attempts, failing because a full-width line may have a
word space sitting in the gutter (sparse ink) while a marginal capital flanked by
intruding letters has dense multi-run ink there. Sparseness and run-count both
fail. What separates the cases is that the glyphs beside the gutter are GREEK on
a full-width line and LATIN on an ordinary one — a reading judgement.

So: render the whole page and let a model read it.

⚑ THE RULER IS THE POINT. Models estimate pixel coordinates poorly, and a
mis-located band means cropping the wrong rows at full resolution — which would
lose exactly the text this pass exists to recover. So the page is drawn with
labelled horizontal bands (L01, L02, …) down the left margin, and the reporter
names BANDS, never pixels. Bands are generous and overlap by design at the crop
stage; a band is a place to look, not a measurement.

This renders only. It makes no judgement about which lines are full width —
that is the reading pass's job, and a script that pre-marked its guesses onto the
image would anchor the reader to exactly the geometry that has already failed.

Usage:
  pg-fullwidth-scan.py --pdf raw/pg088/088.pdf --map data/pg-column-maps/pg088.json \\
                       --leaves 845-864 --out raw/pg088/fullwidth-scan
"""

import argparse
import json
import pathlib
import subprocess
import tempfile

from PIL import Image, ImageDraw, ImageFont

DPI = 200          # enough to tell Greek from Latin and see line structure
BANDS = 14         # labelled horizontal bands per page


def parse_leaves(spec):
    out = []
    for part in spec.split(","):
        if "-" in part:
            a, b = part.split("-")
            out += list(range(int(a), int(b) + 1))
        else:
            out.append(int(part))
    return out


def font(size):
    for p in ("/System/Library/Fonts/Supplemental/Arial Bold.ttf",
              "/System/Library/Fonts/Helvetica.ttc",
              "/Library/Fonts/Arial.ttf"):
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


def render(pdf, page, wd):
    stem = pathlib.Path(wd) / f"p{page}"
    subprocess.run(["pdftoppm", "-f", str(page), "-l", str(page), "-r", str(DPI),
                    "-png", "-gray", str(pdf), str(stem)],
                   check=True, capture_output=True)
    return Image.open(sorted(pathlib.Path(wd).glob(f"p{page}-*.png"))[0]).convert("L")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--map", required=True)
    ap.add_argument("--leaves", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    cmap = json.loads(pathlib.Path(args.map).read_text())
    pages = {p["leaf"]: p for p in cmap["pages"]}
    out = pathlib.Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    manifest = {}
    GUT = 92   # left margin added for the labels

    with tempfile.TemporaryDirectory() as wd:
        for leaf in parse_leaves(args.leaves):
            rec = pages.get(leaf)
            if not rec:
                print(f"leaf {leaf}: not in the column map — skipped")
                continue
            img = render(args.pdf, rec["pdfPage"], wd)
            w, h = img.size

            canvas = Image.new("L", (w + GUT, h), 255)
            canvas.paste(img, (GUT, 0))
            d = ImageDraw.Draw(canvas)
            f = font(34)

            top, bot = int(h * 0.06), int(h * 0.97)
            step = (bot - top) / BANDS
            bands = {}
            for i in range(BANDS):
                y0 = int(top + i * step)
                y1 = int(top + (i + 1) * step)
                label = f"L{i + 1:02d}"
                bands[label] = [y0, y1]
                d.line([(0, y0), (w + GUT, y0)], fill=170, width=2)
                d.text((6, y0 + 8), label, fill=0, font=f)
            d.line([(0, bot), (w + GUT, bot)], fill=170, width=2)

            file = out / f"leaf{leaf}_p{rec['pdfPage']}.png"
            canvas.save(file)
            manifest[str(leaf)] = {
                "leaf": leaf, "pdfPage": rec["pdfPage"], "greekSide": rec["greekSide"],
                "printedColumn": rec["colLeft"], "dpi": DPI, "labelGutterPx": GUT,
                "bands": bands, "file": str(file),
            }
            print(f"leaf {leaf} → {file.name}  ({BANDS} bands, {w}x{h} @ {DPI}dpi)")

    (out / "manifest.json").write_text(json.dumps(manifest, indent=1))
    print(f"\n{len(manifest)} pages → {out}")
    print("Hand these to a reading pass; it reports BAND LABELS, never pixels.")


if __name__ == "__main__":
    main()
