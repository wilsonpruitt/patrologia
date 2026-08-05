#!/usr/bin/env python3.11
"""
Detect body lines that run past a Greek-column crop's edge and are being cut.

Why this exists (found 2026-08-05, Batch 2). `pg-leaf-crops.py` fits the crop to
the Greek column's normal measure, plus a fixed overshoot across the gutter to
take the marginal letters. That is right for ordinary text and WRONG for the
lines Migne sets wider than the measure: on PG 88 his italic scripture
quotations are outdented into the gutter, several characters further out than
the surrounding prose. The crop slices their openings off.

The damage is quiet and lands on the worst possible lines. Three Batch 2
transcribers independently reported a truncated line-opening — `ύθως`, `αθεῖν`,
and a bracketed letter that "isn't actually visible ink". `ύθως` is the tail of
**ἀκολούθως**, and one transcriber, reasoning from sense, offered εὐθέως. Sense
is a plausible guess and a plausible guess is exactly the defect: a scripture
quotation is where a conformed reading does the most harm, and it is the class
of line this crop bug preferentially eats.

Method: render the leaf at the same dpi the crops use, walk the crop's rows, and
for each row ask whether ink sits in the strip just OUTSIDE the crop boundary
AND touches the boundary from inside. Ink outside alone is the facing column or
a marginal letter, which is why the contiguity test matters — this reports lines
that are CUT, not lines that have a neighbour.

Reports; never edits. The fix is to re-crop with a wider bound and re-read the
affected lines against the plate.

Usage:
  pg-crop-clip-check.py --pdf raw/pg088/088.pdf --manifest raw/pg088/batch2/manifest.json
"""

import argparse
import json
import pathlib

import numpy as np
from PIL import Image

INK = 170
GAP = 40      # ink separated by more than this is a different block (gutter/Latin)
EDGE = 3      # a line starting this close to the crop edge is cut
ZONE = 320    # px of gutter zone to inspect, at the 400 dpi the crops use


def gutter_gap(row, side, width, minimum):
    """Is there a gutter-sized whitespace between the crop edge and the text?

    The crop's outer strip legitimately holds a marginal letter and 2-3 characters
    of the facing Latin, separated from the Greek by the gutter. So a line that
    merely has ink at the edge is normal; a line that runs from the edge into the
    text WITHOUT crossing a gutter-sized gap is one the crop has cut.

    Walking inward word-by-word cannot make this call: justified Greek stretches
    its word-spaces past any threshold small enough to detect the gutter, which
    is why an earlier version of this check missed the very line on leaf 861 that
    prompted it (`ἀκολούθως`, cut to `ύθως`)."""
    xs = np.flatnonzero(row) if side == "right" else np.flatnonzero(row[::-1])
    if xs.size == 0 or xs[0] > EDGE:
        return True          # nothing at the edge — nothing to worry about
    # Scan only the gutter zone. Scanning the whole row is useless: every line
    # ends short of the crop's far edge, so the right margin's whitespace always
    # satisfies the test and the check passes everything. That bug hid the very
    # line on leaf 861 this was written to catch.
    run = 0
    for i in range(xs[0], min(width, ZONE)):
        px = row[i] if side == "right" else row[width - 1 - i]
        if px:
            run = 0
        else:
            run += 1
            if run >= minimum:
                return True  # crossed the gutter before reaching the text
    return False


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--manifest", required=True)
    ap.add_argument("--json")
    ap.add_argument("--slack", type=int, default=26,
                    help="px beyond the column's normal measure before a line counts as outdented")
    args = ap.parse_args()

    man = json.loads(pathlib.Path(args.manifest).read_text())
    out, total = {}, 0

    for leaf in sorted(man, key=int):
        rec = man[leaf]
        side = rec["greekSide"]
        a = np.asarray(Image.open(rec["file"]).convert("L"))
        ink = a < INK
        w = ink.shape[1]

        # Only rows that are actually part of a text line. Whitespace rows between
        # lines carry a stray speck or two and would pollute the sample.
        MIN_ROW_INK = 20
        GUTTER = 60          # a whitespace run this wide is the gutter, not a word space

        hits = []
        for y in range(ink.shape[0]):
            row = ink[y]
            if row.sum() < MIN_ROW_INK:
                continue
            if not gutter_gap(row, side, w, GUTTER):
                hits.append(y)

        runs = []
        for y in sorted(hits):
            if runs and y - runs[-1][1] <= 3:
                runs[-1][1] = y
            else:
                runs.append([y, y])
        runs = [r for r in runs if r[1] - r[0] >= 4]
        if runs:
            out[leaf] = runs
            total += len(runs)
        print(f"leaf {leaf} ({side:5}) width={w}: "
              f"{len(runs)} line(s) run from the crop edge into the text" + (f"  rows {runs}" if runs else ""))

    print(f"\n{len(out)} of {len(man)} leaves affected — {total} cut lines in total")
    if out:
        print("→ these are lines Migne sets wider than the measure; re-crop wider and re-read them.")
    if args.json:
        pathlib.Path(args.json).write_text(json.dumps(out, indent=1))
    raise SystemExit(1 if out else 0)


if __name__ == "__main__":
    main()
