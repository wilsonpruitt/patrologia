#!/usr/bin/env python3.11
"""
Render whole PG leaves, full page width, for transcription. Replaces column crops.

WHY THIS REPLACES `pg-leaf-crops.py` (Wilson's call, 2026-08-05)

Column cropping failed three times on a single batch of 20 leaves, and every
failure was invisible in the output — the surviving text read as fluent Greek:

  1. lines OUTDENTED past the column measure had their openings sliced off
     (`ύθως` for `καὶ ἀκολούθως`; a transcriber then offered the fluent, wrong
     `εὐθέως`);
  2. lines Migne sets FULL WIDTH, where a paragraph's Greek outran its Latin,
     kept only their right half (`τὸ κου-` running straight into `Χριστῷ`);
  3. a WIDE-SET line past even the widened 260 px overshoot was cut by BOTH the
     narrow and the wide crop, so both transcription passes lost it and the diff
     could not see it — `Ἡ ὁδός ἐστιν, ὡς λέγει ὁ ἅγιος Βασίλειος, ὁ κόσμος
     οὗτος.` (leaf 856).

Each patch cost a full re-read. Batch 2 ran to roughly 107k tokens per leaf
across five passes; one full-page pass is ~25-33k. **Cropping to the column was
cheaper per pass and far more expensive per leaf.** A page cannot lose text off
the side of itself, so this retires the whole class rather than patching it.

The transcriber now does what the crop was trying to do for it — follow the Greek
column, and read a line that escapes the column as the whole line it is. That is
a reading judgement, which is the thing that caught all three defects; geometry
never did.

Renders at the scan's NATIVE 600 dpi: at 400 this fount's word-final sigma reads
as a semicolon and its circumflex as an iota subscript, both yielding well-formed
Greek that nothing downstream can catch.

Outer white margins are trimmed from the page's own ink profile — they carry no
text and cost tokens on every segment. Trimming is measured, never assumed, and
the manifest records what was cut so a later pass can tell a trim from a loss.

Usage:
  pg-page-segments.py --pdf raw/pg088/088.pdf --map data/pg-column-maps/pg088.json \\
                      --leaves 865-880 --out raw/pg088/batch3
"""

import argparse
import json
import pathlib
import subprocess
import tempfile

import numpy as np
from PIL import Image

DPI = 600
INK = 170
SEGMENTS = 8
MARGIN = 60          # px of white kept around the text block, at DPI


def parse_leaves(spec):
    out = []
    for part in spec.split(","):
        if "-" in part:
            a, b = part.split("-")
            out += list(range(int(a), int(b) + 1))
        else:
            out.append(int(part))
    return out


def render(pdf, page, wd):
    stem = pathlib.Path(wd) / f"p{page}"
    subprocess.run(["pdftoppm", "-f", str(page), "-l", str(page), "-r", str(DPI),
                    "-png", "-gray", str(pdf), str(stem)],
                   check=True, capture_output=True)
    return Image.open(sorted(pathlib.Path(wd).glob(f"p{page}-*.png"))[0]).convert("L")


def text_box(ink):
    """The page's text block, from its own ink profile. Ignores speckle."""
    cols = ink.mean(axis=0) > 0.004
    rows = ink.mean(axis=1) > 0.004
    xs, ys = np.flatnonzero(cols), np.flatnonzero(rows)
    if xs.size == 0 or ys.size == 0:
        return None
    return int(xs[0]), int(ys[0]), int(xs[-1]), int(ys[-1])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--map", required=True)
    ap.add_argument("--leaves", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--segments", type=int, default=SEGMENTS)
    ap.add_argument("--overlap", type=int, default=90,
                    help="px each segment overlaps the next, so no line is cut in half")
    args = ap.parse_args()

    cmap = json.loads(pathlib.Path(args.map).read_text())
    # Column maps come in two schemas: PG 88 uses colLeft/colRight, while PG 89
    # (and the older maps) use colOdd/colEven with an explicit greekCol. Normalise
    # here rather than at every call site — the audit has to walk several volumes.
    pages = {}
    for p in cmap["pages"]:
        rec = dict(p)
        if "colLeft" not in rec:
            rec["colLeft"] = rec.get("greekCol", rec.get("colOdd"))
        pages[rec["leaf"]] = rec
    latin_only = {int(k) for k in cmap.get("latinOnlyLeaves", {})}
    out = pathlib.Path(args.out)
    (out / "segs").mkdir(parents=True, exist_ok=True)
    manifest = {}

    with tempfile.TemporaryDirectory() as wd:
        for leaf in parse_leaves(args.leaves):
            rec = pages.get(leaf)
            if not rec:
                print(f"leaf {leaf}: not in the column map — skipped")
                continue
            if rec.get("skipInHarvest"):
                print(f"leaf {leaf}: duplicate re-scan, skipInHarvest — skipped")
                continue
            if leaf in latin_only:
                print(f"leaf {leaf}: LATIN-ONLY per the map — no Greek to transcribe, skipped")
                continue

            img = render(args.pdf, rec["pdfPage"], wd)
            a = np.asarray(img)
            box = text_box(a < INK)
            if box is None:
                print(f"leaf {leaf}: no ink found — inspect by hand")
                continue
            x0, y0, x1, y1 = box
            W, H = img.size
            x0, y0 = max(0, x0 - MARGIN), max(0, y0 - MARGIN)
            x1, y1 = min(W, x1 + MARGIN), min(H, y1 + MARGIN)
            page = img.crop((x0, y0, x1, y1))

            step = (y1 - y0) / args.segments
            files = []
            for i in range(args.segments):
                s0 = max(0, int(i * step) - (args.overlap if i else 0))
                s1 = min(page.height, int((i + 1) * step) + args.overlap)
                seg = page.crop((0, s0, page.width, s1))
                f = out / "segs" / f"leaf{leaf}_p{rec['pdfPage']}_seg{i + 1}.png"
                seg.save(f)
                files.append(str(f))

            manifest[str(leaf)] = {
                "leaf": leaf, "pdfPage": rec["pdfPage"],
                "greekSide": rec["greekSide"], "printedColumn": rec["colLeft"],
                "columnVerified": bool(rec.get("verified")),
                "dpi": DPI, "trimmedTo": [x0, y0, x1, y1], "pageSize": [W, H],
                "segments": len(files), "overlapPx": args.overlap, "files": files,
            }
            print(f"leaf {leaf}: col {rec['colLeft']}, Greek {rec['greekSide']:5} → "
                  f"{len(files)} segs, {page.width}x{page.height} "
                  f"(trimmed {x0},{y0}–{x1},{y1} of {W}x{H})")
            if not rec.get("verified"):
                print(f"  ⚠ printed column {rec['colLeft']} is INTERPOLATED — "
                      f"do not cite it without reading the head")

    (out / "manifest.json").write_text(json.dumps(manifest, indent=1))
    print(f"\n{len(manifest)} leaves → {out}")
    print("FULL PAGE WIDTH: the transcriber follows the Greek column itself and")
    print("reads any line that escapes the column as the whole line it is.")


if __name__ == "__main__":
    main()
