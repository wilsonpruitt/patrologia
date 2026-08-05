#!/usr/bin/env python3.11
"""
Crop reported bands FULL PAGE WIDTH, so a full-width Greek line can be read whole.

Second half of the full-width-line workflow:
  1. pg-fullwidth-scan.py  — render each leaf with a labelled band ruler
  2. a reading pass         — report which BANDS carry Greek crossing the gutter
  3. this script            — crop those bands at full width and full resolution
  4. a transcription pass   — read each line as ONE line, left edge to right edge

Why the column crops cannot be used here: they are cut to one column, so a line
Migne set across the whole measure survives in them only as its right-hand half,
and what remains still reads as fluent prose. That is the defect this recovers.

⚑ PAD GENEROUSLY. The band labels are a place to look, not a measurement — the
reading pass names a band, and the line may sit near its edge or straddle two.
Padding costs a few neighbouring lines in the image, which the transcriber simply
ignores; too little padding silently truncates the line at top or bottom and
reproduces the original defect in a new place. Default pad is half a band.

Usage:
  pg-fullwidth-crop.py --pdf raw/pg088/088.pdf --scan raw/pg088/fullwidth-scan \\
                       --spec "847:L02,L03  853:L06" --out raw/pg088/fullwidth-crops
"""

import argparse
import json
import pathlib
import subprocess
import tempfile

from PIL import Image

DPI = 400          # the resolution the transcription passes use


def parse_spec(spec):
    out = {}
    for item in spec.replace(",", " ").split():
        if ":" not in item:
            continue
        leaf, band = item.split(":", 1)
        out.setdefault(leaf.strip(), []).append(band.strip())
    # allow "847:L02,L03" by re-splitting bands that arrived separately
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--scan", required=True, help="output dir of pg-fullwidth-scan.py")
    ap.add_argument("--spec", required=True,
                    help='e.g. "847:L02 847:L03 853:L06" — leaf:band pairs')
    ap.add_argument("--out", required=True)
    ap.add_argument("--pad", type=float, default=0.5,
                    help="padding above and below, in band heights (default 0.5)")
    args = ap.parse_args()

    scan = pathlib.Path(args.scan)
    man = json.loads((scan / "manifest.json").read_text())
    out = pathlib.Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    spec = parse_spec(args.spec)
    scale = DPI / man[next(iter(man))]["dpi"]
    written = []

    with tempfile.TemporaryDirectory() as wd:
        for leaf, bands in sorted(spec.items(), key=lambda kv: int(kv[0])):
            rec = man.get(leaf)
            if not rec:
                print(f"leaf {leaf}: not in the scan manifest — skipped")
                continue
            page = rec["pdfPage"]
            stem = pathlib.Path(wd) / f"p{page}"
            subprocess.run(["pdftoppm", "-f", str(page), "-l", str(page), "-r", str(DPI),
                            "-png", "-gray", str(args.pdf), str(stem)],
                           check=True, capture_output=True)
            img = Image.open(sorted(pathlib.Path(wd).glob(f"p{page}-*.png"))[0])
            W, H = img.size

            for band in bands:
                if band not in rec["bands"]:
                    print(f"leaf {leaf}: no band {band} — skipped")
                    continue
                y0, y1 = rec["bands"][band]
                bh = y1 - y0
                # scan coords -> full-res coords, minus the label gutter the scan added
                Y0 = int((y0 - args.pad * bh) * scale)
                Y1 = int((y1 + args.pad * bh) * scale)
                Y0, Y1 = max(0, Y0), min(H, Y1)
                crop = img.crop((0, Y0, W, Y1))
                f = out / f"leaf{leaf}_{band}_fullwidth.png"
                crop.save(f)
                written.append({"leaf": int(leaf), "band": band, "file": str(f),
                                "rows": [Y0, Y1], "dpi": DPI,
                                "printedColumn": rec["printedColumn"],
                                "greekSide": rec["greekSide"]})
                print(f"leaf {leaf} {band}: rows {Y0}-{Y1} full width ({crop.width}px) → {f.name}")

    (out / "manifest.json").write_text(json.dumps(written, indent=1))
    print(f"\n{len(written)} full-width crops → {out}")
    print("Each is a WHOLE PAGE WIDTH. Read each full-width line as ONE line,")
    print("left edge to right edge, ignoring the neighbouring two-column lines.")


if __name__ == "__main__":
    main()
