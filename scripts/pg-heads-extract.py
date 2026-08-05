#!/usr/bin/env python3.11
"""
Pull the running-head column numbers off a scan copy's djvu.xml.

Feeds `pg-column-map-rebuild.py`. One JSON per scan copy: {page: {left: [...],
right: [...]}} — the numeric tokens found in the head band, split by which half
of the page they sit in.

⚠ TWO TRAPS, both of which cost a pass to find:

1. **djvu WORD coords are (left, TOP, right, BOTTOM) with the origin at the
   TOP-left.** Reading them as bottom-left origin puts the head band at the foot
   of the page and yields almost nothing — 48 pages out of 1,082 on PG 88, which
   looks like "the heads just didn't OCR" rather than like a bug. Right way up
   it is 930 of 1,082.

2. **The numbers are noisy and the noise is systematic**, so do not filter to
   "plausible" values and do not trust any single reading. Measured on PG 88:
   1616→1516, 1626→1925, 1630→130, 1637→4631, 1619→1519, 1640→1610. Everything
   numeric in the band is emitted; the reconstruction is what denoises it.
"""

import argparse
import json
import re

WORD = re.compile(r'<WORD coords="(\d+),(\d+),(\d+),(\d+)"[^>]*>([^<]*)</WORD>')
OBJ = re.compile(r'width="(\d+)" height="(\d+)"')


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("djvu_xml")
    ap.add_argument("out_json")
    ap.add_argument("--head-band", type=float, default=0.10,
                    help="fraction of page height, from the TOP, that holds the head")
    args = ap.parse_args()

    res, idx, cur, w, h = {}, -1, None, None, None

    def flush():
        if cur is None or not w:
            return
        nums = [(x, t) for x, t in cur if re.fullmatch(r"[0-9]{3,4}", t)]
        if nums:
            res[idx] = {"left": [t for x, t in nums if x < 0.5 * w],
                        "right": [t for x, t in nums if x >= 0.5 * w]}

    for line in open(args.djvu_xml, encoding="utf-8", errors="replace"):
        if "<OBJECT" in line:
            flush()
            idx += 1
            m = OBJ.search(line)
            w, h = (int(m.group(1)), int(m.group(2))) if m else (None, None)
            cur = []
        elif cur is not None and h:
            for mm in WORD.finditer(line):
                x0, y0, _, y1 = map(int, mm.groups()[:4])
                if min(y0, y1) < args.head_band * h:
                    cur.append((x0, mm.group(5)))
    flush()

    json.dump(res, open(args.out_json, "w"))
    print(f"{args.djvu_xml.split('/')[-1]}: {len(res)} pages with head numbers "
          f"→ {args.out_json}")


if __name__ == "__main__":
    main()
