#!/usr/bin/env python3.11
"""
Find lines where Migne sets the Greek ACROSS THE FULL PAGE, spanning both columns.

Found 2026-08-05 on PG 88 leaf 847. When a paragraph's Greek runs longer than its
facing Latin, Migne does not pad the Latin — he ends the Latin paragraph and sets
the Greek tail full measure, across the gutter and over the Latin column's width,
then resumes two columns at the next section. On leaf 847 the last two lines of
the paragraph read, full width:

    κρωσις τῆς ἀλόγου ἐπιθυμίας· καὶ τὸν ἀνάλαβον κατὰ τῶν ὤμων, ὅ ἐστι σταυρός.
    Ἰδοὺ καὶ τὸ κουκούλιον· ὅ ἐστι σημεῖον τῆς ἀκακίας, καὶ τῆς ἐν Χριστῷ νηπιότητος.

A per-column crop keeps only the RIGHT part of such a line and silently drops the
left. The damage does not look like damage: the transcription still reads as
continuous prose. Both blind passes over leaf 847 flagged the wreckage without
being able to name it — one saw `ἡ νέ-` with no continuation, the other saw
`τὸ κου-` jumping straight to `Χριστῷ`, which is precisely this line minus its
left half.

Detection is easy once the cause is known, because a full-width line FILLS THE
GUTTER — the vertical white channel that separates the columns on every ordinary
row. So: locate the gutter from the page's own ink profile, then report rows
whose ink crosses it. No thresholds to tune and no guessing about measures.

⛔ STATUS 2026-08-05: THE PHENOMENON IS CONFIRMED; THIS DETECTOR IS NOT.
Leaf 847's two full-width lines are verified by eye against the plate. This
script does NOT find them, and three successive versions of the test were each
wrong in a different way:
  1. `any()` ink in the gutter — Migne's marginal capitals A/B/C/D live in the
     gutter too, so every leaf scored 4 phantom hits.
  2. ink over >80% of the gutter band — too strict; it found 2 lines in 20
     leaves and missed leaf 847 entirely, the one case known to be real.
  3. (not yet written) the honest test is contiguity: a full-width line runs
     unbroken from the Latin column THROUGH the gutter into the Greek, whereas
     a marginal capital is an isolated glyph with white on both sides. The
     gutter here is only 10-25 px at 300 dpi, about one capital wide, so
     coverage alone cannot separate them — connectivity can.
DO NOT trust this script's counts until (3) is built and checked against leaf
847. Until then, full-width lines are found by reading the plate.

Reports; never edits. These lines must be cropped full width and read as one line.

Usage:
  pg-fullwidth-lines.py --pdf raw/pg088/088.pdf --map data/pg-column-maps/pg088.json \\
                        --leaves 845-864
"""

import argparse
import json
import pathlib
import subprocess
import tempfile

import numpy as np
from PIL import Image

INK = 170
DPI = 300           # enough to see a filled gutter; cheap
MIN_RUN = 5         # rows; a real line, not a speck of dirt


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


def find_gutter(ink):
    """The widest low-ink vertical channel in the middle of the text block."""
    col = ink.mean(axis=0)
    w = len(col)
    lo, hi = int(w * 0.30), int(w * 0.70)
    quiet = col[lo:hi] < (col[col > 0.01].mean() * 0.18)
    best = cur = None
    for i, q in enumerate(quiet):
        if q:
            cur = (i, i) if cur is None else (cur[0], i)
            if best is None or (cur[1] - cur[0]) > (best[1] - best[0]):
                best = cur
        else:
            cur = None
    if best is None:
        return None
    return lo + best[0], lo + best[1]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--map", required=True)
    ap.add_argument("--leaves", required=True)
    ap.add_argument("--json")
    args = ap.parse_args()

    cmap = json.loads(pathlib.Path(args.map).read_text())
    pages = {p["leaf"]: p for p in cmap["pages"]}
    out, total = {}, 0

    with tempfile.TemporaryDirectory() as wd:
        for leaf in parse_leaves(args.leaves):
            rec = pages.get(leaf)
            if not rec:
                continue
            img = render(args.pdf, rec["pdfPage"], wd)
            ink = np.asarray(img) < INK
            g = find_gutter(ink)
            if g is None:
                print(f"leaf {leaf}: no gutter found — inspect by hand")
                continue
            g0, g1 = g
            # A row crossing the gutter must have ink along essentially the WHOLE
            # channel, not merely somewhere inside it. Migne's marginal capitals
            # A/B/C/D live in the gutter too, and `.any()` counts each of them as
            # a full-width line — that alone put 4 phantom hits on every leaf.
            # A single letter cannot span the channel; a line of type does.
            band = ink[:, g0:g1 + 1]
            crossing = band.mean(axis=1) > 0.80
            # ignore the running head and the foot: heads span the page by design
            h = len(crossing)
            crossing[:int(h * 0.10)] = False
            crossing[int(h * 0.94):] = False

            runs, cur = [], None
            for y, c in enumerate(crossing):
                if c:
                    cur = [y, y] if cur is None else [cur[0], y]
                elif cur is not None:
                    if cur[1] - cur[0] >= MIN_RUN:
                        runs.append(cur)
                    cur = None
            if cur and cur[1] - cur[0] >= MIN_RUN:
                runs.append(cur)

            if runs:
                out[str(leaf)] = {"gutter": [int(g0), int(g1)], "rows": runs, "dpi": DPI}
                total += len(runs)
            print(f"leaf {leaf}: gutter x {g0}-{g1}  →  {len(runs)} full-width line(s)"
                  + (f"  rows {runs}" if runs else ""))

    print(f"\n{len(out)} leaves carry full-width Greek — {total} lines in total")
    if out:
        print("→ crop these rows FULL WIDTH and read each as a single line.")
    if args.json:
        pathlib.Path(args.json).write_text(json.dumps(out, indent=1))


if __name__ == "__main__":
    main()
