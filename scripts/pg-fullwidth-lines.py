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

⛔ STATUS 2026-08-05: THE PHENOMENON IS CONFIRMED; GEOMETRY ALONE DOES NOT
DECIDE IT, AND THIS SCRIPT SHOULD NOT BE TRUSTED TO ENUMERATE IT.

Leaf 847's two full-width lines are verified by eye. Five successive tests were
each wrong, and the reasons are worth keeping because they are not obvious:

  1. any() ink in the gutter — Migne's marginal capitals A/B/C/D live in the
     gutter, so every leaf scored ~4 phantom hits.
  2. >80% gutter coverage — found 2 lines in 20 leaves and missed leaf 847.
  3. the gutter was being MIS-MEASURED at 17 px against a true ~50 px, because
     the threshold scaled to page mean ink and caught only the channel's core.
     At 17 px a marginal capital fills the channel, which is why (1) and (2)
     could not both be satisfied. Fixed with an absolute threshold.
  4. judging line BANDS — the Latin and Greek columns do not share baselines, so
     a band across the page merges ink from two different lines and fills the
     channel. Put 4 phantom lines on leaf 863, which has none.
  5. per-row shape (a marginal is one isolated glyph) — still fires on the
     marginal capital whenever the neighbouring columns' letters poke into the
     measured channel, giving three runs instead of one.

The two remaining failure modes are in direct tension and cannot both be fixed
by a threshold:
  · a full-width line can have a WORD SPACE in the gutter (leaf 847's first
    line breaks between ἀνάλαβον and κατὰ), so its gutter ink is sparse;
  · a marginal capital flanked by intruding letters has gutter ink that is not
    sparse and not a single run.
Sparseness and run-count therefore both fail. What actually distinguishes them
is that the glyphs beside the gutter are GREEK on a full-width line and LATIN on
an ordinary one — a reading judgement, not a measurement.

RECOMMENDATION: detect these with a vision pass (one low-resolution full-page
image per leaf, asking for the y-positions of Greek lines crossing the central
gutter), and keep this script only as a cheap pre-filter whose hits are all
verified. Do not use its counts as a total.

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
    """The columns' white channel, measured with an ABSOLUTE ink threshold.

    Measuring this correctly is the whole problem. An earlier version scaled the
    threshold to the page's mean ink and took the widest run under it, which
    returned only the channel's narrowest core — 17 px on leaf 847 against a true
    width near 52. At 17 px the gutter is about one capital wide, so Migne's
    marginal letters A/B/C/D fill it, and any coverage test then reports them as
    full-width lines or, tightened, reports nothing at all. Both happened.

    An absolute threshold works because the channel is genuinely empty on all but
    a handful of rows: a column of the gutter carries ink on a few percent of
    rows (the marginals, and the full-width lines we are hunting), while a column
    of text carries it on 15-25%."""
    col = ink.mean(axis=0)
    w = len(col)
    lo, hi = int(w * 0.30), int(w * 0.70)
    quiet = col[lo:hi] < 0.06
    best = cur = None
    for i, q in enumerate(quiet):
        if q:
            cur = (i, i) if cur is None else (cur[0], i)
            if best is None or (cur[1] - cur[0]) > (best[1] - best[0]):
                best = cur
        else:
            cur = None
    if best is None or (best[1] - best[0]) < 12:
        return None
    return lo + best[0], lo + best[1]


def line_bands(ink, min_ink=25):
    """Group rows into text lines, so a line is judged as a line and not row by row."""
    rows = ink.sum(axis=1) >= min_ink
    bands, cur = [], None
    for y, r in enumerate(rows):
        if r:
            cur = [y, y] if cur is None else [cur[0], y]
        elif cur is not None:
            if cur[1] - cur[0] >= 3:
                bands.append(cur)
            cur = None
    if cur and cur[1] - cur[0] >= 3:
        bands.append(cur)
    return bands


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
            # Judge SINGLE ROWS, not line bands. The Latin and Greek columns do
            # not share baselines, so any band drawn across the whole page merges
            # ink from a Latin line and a different Greek line; their union fills
            # the channel and the check fires on ordinary text. That mistake put
            # 4 phantom lines on leaf 863, which has none.
            #
            # Per row, coverage still cannot decide it — a WORD SPACE can land in
            # the gutter (leaf 847's first full-width line breaks between
            # ἀνάλαβον and κατὰ). What separates them is shape: a marginal capital
            # is ONE isolated ink run about a third of the channel wide; a line of
            # type crossing it is several runs, or one much wider than a letter.
            h = ink.shape[0]
            band = ink[:, g0:g1 + 1]
            gw = g1 - g0 + 1
            hits = []
            for y in range(int(h * 0.10), int(h * 0.94)):
                prof = band[y]
                if not prof.any():
                    continue
                segs, cur = [], None
                for i, v in enumerate(prof):
                    if v:
                        cur = [i, i] if cur is None else [cur[0], i]
                    elif cur is not None:
                        segs.append(cur); cur = None
                if cur:
                    segs.append(cur)
                widest = max(s[1] - s[0] + 1 for s in segs)
                marginal = len(segs) == 1 and widest <= 0.45 * gw
                if prof.mean() >= 0.22 and not marginal:
                    hits.append(y)

            runs, cur = [], None
            for y in hits:
                if cur is not None and y - cur[1] <= 2:
                    cur[1] = y
                else:
                    if cur and cur[1] - cur[0] >= MIN_RUN:
                        runs.append(cur)
                    cur = [y, y]
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
