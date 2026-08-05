#!/usr/bin/env python3.11
"""
⛔ SUPERSEDED 2026-08-05 by scripts/pg-page-segments.py — do not harvest with this.

Cropping to the column lost text three times in one 20-leaf batch, each time
invisibly, because what survived still read as fluent Greek: outdented line
openings, full-width lines kept only as their right half, and a wide-set line cut
by BOTH the narrow and the widened crop so that both transcription passes lost it
and the diff could not see it. Each patch cost a full re-read; the batch ran to
~107k tokens per leaf across five passes against ~30k for a single full-page
pass. A page cannot lose text off the side of itself.

Kept because the gutter/marginal-letter geometry documented below is still the
best description of how Migne sets his subdivision letters, and because the
measured 45 → 260 px overshoot history explains what went wrong.

Crop the Greek column off PG plate leaves, ready for the OCR pass.

Written 2026-08-05 out of the Batch 1 adjudication (`benchmark/pg88-pilot/
BATCH1-ADJUDICATION.md`), which found that the hand-rolled crops of Batch 1 cut
the marginal subdivision letters in half on two of eight leaves.

⚠ THE RULE THIS TOOL EXISTS TO ENFORCE. Migne's marginal capitals A/B/C/D sit in
the GUTTER, between the two columns — never in the outer margin. Verified on both
parities of PG 88: leaf 837 (Greek right) carries them immediately LEFT of the
Greek, leaf 836 (Greek left) carries them immediately RIGHT of it. They are the
column's subdivision anchors, and a clipped letter is a lost citation address
(hard rule 1). So the crop always runs from the Greek column's OUTER edge across
the gutter to just short of the facing Latin — never stopping at the gutter.

Column geometry is measured off the plate's own ink profile, not assumed: the two
text blocks are found as the two widest inked runs, and the gutter is the gap
between them. The crop stops at `--gutter-keep` of the way across that gap
(default 0.85), which takes the letters and leaves the Latin behind. Latin inside
a Greek source file is a serious defect (layout rule 4), so the manifest records
the measured clearance for every leaf and the script warns when it drops.

Usage:
  pg-leaf-crops.py --pdf raw/pg088/088.pdf --map data/pg-column-maps/pg088.json \
                   --leaves 845-860 --out raw/pg088/batch2

Then hand each leaf's segments to a Sonnet transcriber under PG-OCR-PROMPT.md.
"""

import argparse
import json
import pathlib
import subprocess
import sys
import tempfile

from PIL import Image

INK_THRESHOLD = 170       # 0-255; below this a pixel counts as ink
QUIET_FRACTION = 0.22     # x is "quiet" when its ink is under this share of the column median
CENTRAL_BAND = (0.34, 0.66)  # where to look for the gutter, as a fraction of page width


def render(pdf, page, dpi, workdir):
    """Render one PDF page to PNG at `dpi` and return it as a PIL image."""
    stem = pathlib.Path(workdir) / f"p{page}"
    subprocess.run(
        ["pdftoppm", "-f", str(page), "-l", str(page), "-r", str(dpi), "-png",
         str(pdf), str(stem)],
        check=True, capture_output=True,
    )
    hits = sorted(pathlib.Path(workdir).glob(f"p{page}-*.png"))
    if not hits:
        raise RuntimeError(f"pdftoppm produced nothing for page {page}")
    return Image.open(hits[0]).convert("L")


def ink_profile(img):
    """Per-x ink counts over the page body, excluding the outer 2% (scan edge)."""
    w, h = img.size
    body = img.crop((0, int(0.04 * h), w, int(0.97 * h)))
    px = body.load()
    bw, bh = body.size
    step = max(1, bh // 400)  # sample rows; full precision is not needed for block edges
    prof = [0] * bw
    for y in range(0, bh, step):
        for x in range(bw):
            if px[x, y] < INK_THRESHOLD:
                prof[x] += 1
    return prof


def gutter_floor(prof, page_w):
    """The x of the gutter's ink minimum, plus the page's text-ink median.

    ⚠ The gutter is NOT a blank run, and this is the trap that broke the first
    two attempts at this function. Migne's marginal letters sit inside it, the
    running head crosses it, and the scans are slightly skewed so each column's
    edge smears ~50 px sideways. A "find the runs of zero ink" split therefore
    merges the two columns into one block. The gutter is a VALLEY: find its floor.
    """
    inked = [v for v in prof if v > 0]
    if not inked:
        return None, None
    median = sorted(inked)[len(inked) // 2]
    lo, hi = int(CENTRAL_BAND[0] * page_w), int(CENTRAL_BAND[1] * page_w)
    floor_x = min(range(lo, hi), key=lambda x: prof[x])
    return floor_x, median


def outer_edges(prof, median):
    """First and last x carrying sustained column text (letters are far too faint)."""
    strong = [x for x, v in enumerate(prof) if v >= median * 0.75]
    if not strong:
        return None
    return strong[0], strong[-1] + 1


def crop_leaf(img, greek_side, overshoot, pad):
    """Crop the Greek column, running past the gutter floor to catch the marginals.

    ⚠ WHY AN OVERSHOOT AND NOT A COLUMN EDGE. The marginal letter does not sit at
    a fixed place in the gutter, so no edge rule catches it. Measured on PG 88:
    on leaf 837 (Greek right) the letter runs 1379-1408 with the floor at 1368 —
    it hugs the Greek. On leaf 836 (Greek left) it runs 1321-1343 with the floor
    at 1320 — it sits 23 px PAST the floor, on the Latin side. Crop at the floor
    and one parity loses its anchors silently.

    So the crop runs `overshoot` px past the floor into the far side. That can
    admit a sliver of the facing column where the scan is skewed, and it is the
    right trade: Latin bleed is caught downstream (layout rule 4, which Batch 1
    showed the transcriber applies well — 6 intrusions excluded in 8 columns, one
    correctly re-classified), while a clipped marginal letter is a lost citation
    address that nothing downstream can detect.
    """
    w, h = img.size
    prof = ink_profile(img)
    floor_x, median = gutter_floor(prof, w)
    if floor_x is None:
        return None, {"error": "blank page — no ink"}
    edges = outer_edges(prof, median)
    if edges is None:
        return None, {"error": "no sustained column text found"}
    e0, e1 = edges

    if greek_side == "left":
        x0 = max(0, e0 - pad)
        x1 = min(w, floor_x + overshoot)
    else:
        x0 = max(0, floor_x - overshoot)
        x1 = min(w, e1 + pad)

    meta = {
        "greekSide": greek_side,
        "gutterFloorX": floor_x,
        "textInkMedian": median,
        "pageTextEdges": [e0, e1],
        "cropX": [x0, x1],
        "overshootPastFloorPx": overshoot,
    }
    return img.crop((x0, 0, x1, h)), meta


def segment(img, n):
    """Split a tall column into n horizontal strips (layout rule 7)."""
    w, h = img.size
    edges = [int(h * i / n) for i in range(n + 1)]
    return [img.crop((0, edges[i], w, edges[i + 1])) for i in range(n)]


def parse_leaves(spec):
    out = []
    for part in spec.split(","):
        part = part.strip()
        if "-" in part:
            a, b = part.split("-")
            out.extend(range(int(a), int(b) + 1))
        else:
            out.append(int(part))
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--map", required=True, help="data/pg-column-maps/pgNNN.json")
    ap.add_argument("--leaves", required=True, help="e.g. 845-860 or 845,847,850")
    ap.add_argument("--out", required=True)
    # 600 = the scan's NATIVE resolution (pdfimages -list: 4032x6214 per page).
    # 400 was silently lossy in a way that produced well-formed Greek, which is
    # the worst kind: in this fount the word-final SIGMA reads as a semicolon and
    # the CIRCUMFLEX reads as an iota subscript at 400 dpi. That yielded οὕτω for
    # οὕτως and τῇ; for τῆς in Batch 2 — both perfectly good Greek, so no check
    # downstream could catch them. Opus adjudication had to re-render at 600 to
    # decide them, i.e. we were paying for the resolution anyway, after the error.
    ap.add_argument("--dpi", type=int, default=600)
    # 6 rather than 4, so a segment at 600 dpi is about the pixel height a segment
    # was at 400 — the point is more detail per glyph, not a bigger image to skim.
    ap.add_argument("--segments", type=int, default=6)
    # 45 was measured against ORDINARY lines and is wrong for PG 88. Migne sets
    # his italic scripture quotations wider than the column measure, outdenting
    # them across the gutter into space the facing Latin leaves free when it runs
    # short — so a crop fitted to the measure slices their openings off, and the
    # loss lands precisely on quoted scripture. Found 2026-08-05 when three Batch 2
    # transcribers each reported a truncated opening; `ύθως` on leaf 861 is the
    # tail of `καὶ ἀκολούθως`, and one agent, reasoning from sense, offered the
    # plausible and wrong εὐθέως. 260 px recovers that line whole (190 still cut
    # the `καὶ`). Verify with scripts/pg-crop-clip-check.py; the wider crop drags
    # in more facing Latin, which layout rule 4 already tells the transcriber to
    # exclude and report — a reported Latin bleed is recoverable, a silently
    # eaten Greek word is not.
    ap.add_argument("--overshoot", type=int, default=260,
                    help="px to run past the gutter floor, to take the marginal letters. "
                         "PG 88 at 400 dpi: 23 is the measured need, 45 keeps every anchor "
                         "whole while admitting only a character or two of facing Latin; "
                         "70 was visibly worse (2-3 chars). Re-verify on the contact sheet "
                         "if the dpi or the volume changes.")
    ap.add_argument("--pad", type=int, default=40, help="px of slack at the outer edge")
    args = ap.parse_args()

    colmap = json.load(open(args.map))
    pages = {p["leaf"]: p for p in colmap["pages"]}
    low_conf = set(colmap.get("lowConfidenceLeaves", []))

    outdir = pathlib.Path(args.out)
    (outdir / "segs").mkdir(parents=True, exist_ok=True)
    (outdir / "out").mkdir(parents=True, exist_ok=True)

    manifest, warnings, gutter_strips = {}, [], []
    with tempfile.TemporaryDirectory() as tmp:
        for leaf in parse_leaves(args.leaves):
            rec = pages.get(leaf)
            if rec is None:
                warnings.append(f"leaf {leaf}: not in the column map — skipped")
                continue
            img = render(args.pdf, rec["pdfPage"], args.dpi, tmp)
            crop, meta = crop_leaf(img, rec["greekSide"], args.overshoot, args.pad)
            if crop is None:
                warnings.append(f"leaf {leaf}: {meta['error']} — skipped")
                continue

            name = f"leaf{leaf}_p{rec['pdfPage']}_{rec['greekSide']}"
            crop.save(outdir / f"{name}.png")
            for i, seg in enumerate(segment(crop, args.segments), 1):
                seg.save(outdir / "segs" / f"{name}_seg{i}.png")

            meta.update({
                "pdfPage": rec["pdfPage"],
                "printedColumn": rec.get("colLeft"),
                "columnVerified": bool(rec.get("verified")),
                "size": list(crop.size),
                "file": str((outdir / f"{name}.png").resolve()),
                "segments": args.segments,
            })
            manifest[str(leaf)] = meta

            # The gutter strip of every leaf, stacked into one contact sheet: the cheap
            # way to confirm no marginal letter was clipped and no Latin walked in.
            strip = crop.crop((0, 0, args.overshoot * 2, crop.height)) if rec["greekSide"] == "right" \
                else crop.crop((crop.width - args.overshoot * 2, 0, crop.width, crop.height))
            gutter_strips.append((leaf, strip))

            if leaf in low_conf:
                warnings.append(
                    f"leaf {leaf}: flagged lowConfidence in the column map "
                    f"(may be Latin-only or an odd layout) — eyeball it")
            if not rec.get("verified"):
                warnings.append(
                    f"leaf {leaf}: printed column {rec.get('colLeft')} is INTERPOLATED, "
                    f"not plate-verified — do not cite it without a look at the head")

    if gutter_strips:
        sw = max(s.width for _, s in gutter_strips)
        sh = max(s.height for _, s in gutter_strips)
        sheet = Image.new("L", (sw * len(gutter_strips), sh), 255)
        for i, (_, s) in enumerate(gutter_strips):
            sheet.paste(s, (i * sw, 0))
        sheet.resize((sheet.width // 2, sheet.height // 2)).save(outdir / "gutter-contact.png")
        print(f"gutter contact sheet ({', '.join(str(l) for l, _ in gutter_strips)}) "
              f"→ {outdir / 'gutter-contact.png'} — LOOK AT IT before transcribing")

    json.dump(manifest, open(outdir / "manifest.json", "w"), indent=1, ensure_ascii=False)
    print(f"{len(manifest)} leaves → {outdir}")
    for w in warnings:
        print(f"  ⚠ {w}", file=sys.stderr)


if __name__ == "__main__":
    main()
