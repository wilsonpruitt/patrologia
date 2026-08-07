#!/usr/bin/env python3.11
"""
Rebuild a PG volume's leaf → printed-column map from the running heads.

⚠⚠ THE FINDING THIS SCRIPT EXISTS FOR (PG 88, 2026-08-05). The first PG 88 map
recorded "PG 88 has no usable linear column-to-page formula… average slope is
1.621 columns per leaf, not 2.000, so about a fifth of leaves do not advance the
count at all." **That diagnosis was wrong, and the map built on it was unusable:
its `colLeft` never interpolated at all — it stalled, giving 1613 to every leaf
from 836 to 850 and 1619 to all 99 leaves from 852 to 950.**

PG 88's pagination is perfectly ordinary: **+2 columns per leaf, always.** What is
not ordinary is the SCAN. `raw/pg088/088.pdf` contains three RE-SCANNED BLOCKS —
after leaf 864 it jumps back from col 1669 to 1659, after 892 from 1713 to 1695,
after 940 from 1789 to 1779. All three boundaries are plate-verified, as is
leaf 865 reprinting leaf 859's columns 1659|1660 with identical body text. Those
22 duplicated leaves are the whole of the missing 0.379 columns/leaf.

**The generalised rule stands but its reason changes: verify the concordance at
BOTH ENDS, because a scan can repeat itself in the middle. A slope that is not
2.000 is evidence about the SCAN, not about the volume — do not "fix" it by
interpolating column numbers, which silently mis-addresses every citation.**

Method: the running heads of both scan copies are OCR'd (noisily — the digit
confusions are systematic: 1616→1516, 1626→1925, 1630→130, 1637→4631), and a
Viterbi pass picks the column sequence that best explains them, given that a leaf
either continues +2 from its predecessor or begins a new run at a penalised jump.
Plate-read anchors are hard constraints. The result is checked against the work's
own column range: it must cover every column exactly once.

Usage:
  pg-column-map-rebuild.py --heads-a headsA.json --heads-b headsB.json \
      --copy-b-offset 8 --leaves 835-973 --columns 1611-1844 \
      --anchors 835=1611,851=1643,859=1659,865=1659,901=1711,971=1839,973=1843 \
      --existing data/pg-column-maps/pg088.json --out data/pg-column-maps/pg088.json

The heads JSON files are produced by `pg-heads-extract.py`.
"""

import argparse
import json

JUMP_PENALTY = -9.0   # a new run must be strongly supported by the heads to beat +2


def sim(tok, val):
    """OCR-tolerant similarity between a head token and a candidate column number."""
    v = str(val)
    if len(tok) == len(v):
        m = sum(a == b for a, b in zip(tok, v))
        return m - 0.6 * (len(v) - m) if m >= 2 else 0
    if len(tok) == len(v) - 1:                     # a digit dropped by the OCR
        best = 0
        for d in range(len(v)):
            c = v[:d] + v[d + 1:]
            m = sum(a == b for a, b in zip(tok, c))
            best = max(best, m - 0.6 * (len(c) - m))
        return best - 1.0 if best >= 2 else 0
    return 0


def emission(heads, leaf, left_col):
    """How well leaf's observed head tokens support `left_col` | `left_col+1`."""
    s = 0.0
    for src, off in heads:
        r = src.get(str(leaf + off))
        if not r:
            continue
        for t in r["left"]:
            s += sim(t, left_col)
        for t in r["right"]:
            s += sim(t, left_col + 1)
    return s


def viterbi(leaves, states, heads, anchors):
    NEG = -1e9
    dp = {(leaves[0], L): (emission(heads, leaves[0], L)
                           if anchors.get(leaves[0], L) == L else NEG) for L in states}
    back = {}
    for i in range(1, len(leaves)):
        leaf, prev = leaves[i], leaves[i - 1]
        best_any = max(states, key=lambda p: dp.get((prev, p), NEG))
        for L in states:
            if leaf in anchors and anchors[leaf] != L:
                dp[(leaf, L)] = NEG
                continue
            cont = dp.get((prev, L - 2), NEG)                  # same run
            jump = dp.get((prev, best_any), NEG) + JUMP_PENALTY  # a re-scanned block
            best, bp = (cont, L - 2) if cont >= jump else (jump, best_any)
            dp[(leaf, L)] = best + emission(heads, leaf, L) if best > NEG / 2 else NEG
            back[(leaf, L)] = bp
    L = max(states, key=lambda s: dp[(leaves[-1], s)])
    path = {}
    for leaf in reversed(leaves):
        path[leaf] = L
        L = back.get((leaf, L), L)
    return path


def parse_range(s):
    a, b = s.split("-")
    return int(a), int(b)


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--heads-a", required=True)
    ap.add_argument("--heads-b")
    ap.add_argument("--copy-b-offset", type=int, default=0)
    ap.add_argument("--leaves", required=True, help="e.g. 835-973")
    ap.add_argument("--columns", required=True, help="e.g. 1611-1844")
    ap.add_argument("--anchors", required=True,
                    help="comma-separated leaf=column, ALL plate-read")
    ap.add_argument("--existing", help="prior map, to carry greekSide etc. forward")
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    l0, l1 = parse_range(args.leaves)
    c0, c1 = parse_range(args.columns)
    leaves = list(range(l0, l1 + 1))
    states = list(range(c0, c1, 2))
    anchors = {int(k): int(v) for k, v in
               (p.split("=") for p in args.anchors.split(","))}

    heads = [(json.load(open(args.heads_a)), 0)]
    if args.heads_b:
        heads.append((json.load(open(args.heads_b)), args.copy_b_offset))

    path = viterbi(leaves, states, heads, anchors)

    # Every column of the work must be covered exactly once. A scan that repeats a
    # block still has to account for the whole work; a gap here means a lost leaf,
    # not a numbering slip, and it must be found before anything is transcribed.
    first_seen, duplicates = {}, {}
    for lf in leaves:
        c = path[lf]
        if c in first_seen:
            duplicates[lf] = first_seen[c]
        else:
            first_seen[c] = lf
    uncovered = [c for c in states if c not in first_seen]

    boundaries = [(a, b, path[a], path[b]) for a, b in zip(leaves, leaves[1:])
                  if path[b] - path[a] != 2]

    prior = {p["leaf"]: p for p in json.load(open(args.existing))["pages"]} \
        if args.existing else {}
    old = json.load(open(args.existing)) if args.existing else {}

    pages = []
    for lf in leaves:
        p = dict(prior.get(lf, {"leaf": lf, "pdfPage": lf + 1}))
        p["leaf"], p["colLeft"], p["colRight"] = lf, path[lf], path[lf] + 1
        p["verified"] = lf in anchors
        if lf in duplicates:
            p["duplicateOfLeaf"] = duplicates[lf]
            p["skipInHarvest"] = True
        else:
            p.pop("duplicateOfLeaf", None)
            p.pop("skipInHarvest", None)
        p.pop("headsSeen", None)   # superseded: the heads now live in the reconstruction
        pages.append(p)

    out = {
        "volume": old.get("volume"),
        "work": old.get("work"),
        "colRange": old.get("colRange"),
        "method": (
            "Leaf -> printed column reconstructed by scripts/pg-column-map-rebuild.py "
            "from the running heads of BOTH scan copies, Viterbi over {continue +2, "
            "start a new run}, with plate-read anchors as hard constraints. "
            "PG 88 advances +2 per leaf everywhere; the apparent 1.62 slope in the "
            "first map was caused by THREE RE-SCANNED BLOCKS in the PDF, not by the "
            "volume. Leaves marked skipInHarvest repeat columns already covered."),
        "anchorsPlateVerified": anchors,
        "rescanBoundariesPlateVerified": [
            {"afterLeaf": a, "lastCol": ca, "resumesAtLeaf": b, "resumesAtCol": cb}
            for a, b, ca, cb in boundaries],
        "duplicateLeaves": sorted(duplicates),
        "columnsCovered": len(first_seen),
        "columnsExpected": len(states),
        "columnsUncovered": uncovered,
        "lowConfidenceLeaves": old.get("lowConfidenceLeaves", []),
        # `latinOnlyLeaves` is RETIRED — a boolean cannot describe a leaf on which
        # a work ends and another begins. Carry the per-run replacement instead.
        "leafGreekState": old.get("leafGreekState", {}),
        "workEndsAt": old.get("workEndsAt"),
        "pages": pages,
    }
    json.dump(out, open(args.out, "w"), indent=1, ensure_ascii=False)

    print(f"{len(pages)} leaves → {args.out}")
    print(f"columns covered {len(first_seen)}/{len(states)}; "
          f"{len(duplicates)} duplicate leaves; {len(boundaries)} re-scan boundaries")
    for a, b, ca, cb in boundaries:
        print(f"  leaf {a} (col {ca}) → leaf {b} (col {cb})")
    if uncovered:
        print(f"  ⛔ {len(uncovered)} COLUMNS UNCOVERED — do not harvest: {uncovered[:20]}")


if __name__ == "__main__":
    main()
