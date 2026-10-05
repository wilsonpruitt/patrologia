#!/usr/bin/env python3
"""Locate text in a PG volume's archive.org OCR and report which Migne COLUMN it sits in.

    python3 scripts/pg-colfind.py 120 'VITA S\\. NILI'          # regex, case-insensitive
    python3 scripts/pg-colfind.py 120 --col 175                 # print the OCR around column 175
    python3 scripts/pg-colfind.py 120 --stats                   # how well the column map held
    python3 scripts/pg-colfind.py 120 --near 37179              # every page-number line within ±150 lines
    python3 scripts/pg-colfind.py 120 --heads 480 500           # capitals lines (likely heads) in cols 480–500
    python3 scripts/pg-colfind.py 120 --ordo                    # the closing ORDO RERUM lines that carry columns

Column numbers reach the djvu.txt as bare lines ("183", "183 NICETÆ PAPHLAGONIS 184"), with OCR
misreads (3201 for 201, 904 for 204). They only ever increase through the volume, so we keep the
longest chain of candidates that increases at a plausible rate (DP, longest increasing subsequence
with a rate bound) and drop the rest. A hit's column = the last chain anchor at or above it.
⚠ A column from this tool is OCR-derived evidence, not a plate read. Report it as such.
"""
import re, sys, pathlib, bisect

ROOT = pathlib.Path(__file__).resolve().parent.parent
NUM = re.compile(r"^\s*(\d{1,4})\s*$|^\s*(\d{1,4})\s+\S.{0,80}?\s+(\d{1,4})\s*$")
# plausible lines-per-column in these files is ~60-170; allow wide slack
MIN_LPC, MAX_LPC = 10, 600


def load(vol):
    p = ROOT / f"raw/pg-djvu/{vol}.txt"
    return p.read_text(errors="replace").splitlines()


def chain(lines):
    cands = []
    for i, l in enumerate(lines):
        m = NUM.match(l)
        if not m:
            continue
        for g in m.groups():
            if g:
                cands.append((i, int(g)))
    n = len(cands)
    best = [1] * n
    prev = [-1] * n
    for j in range(n):
        lj, cj = cands[j]
        # look back a bounded window for speed
        for k in range(max(0, j - 400), j):
            lk, ck = cands[k]
            dc, dl = cj - ck, lj - lk
            if dc <= 0 or dl < 0:
                continue
            if dl < MIN_LPC * dc * 0.3 or dl > MAX_LPC * dc:
                continue
            if best[k] + 1 > best[j]:
                best[j], prev[j] = best[k] + 1, k
    if not n:
        return []
    j = max(range(n), key=lambda x: best[x])
    out = []
    while j != -1:
        out.append(cands[j])
        j = prev[j]
    return out[::-1]


def col_at(anchors, line):
    ls = [a[0] for a in anchors]
    k = bisect.bisect_right(ls, line) - 1
    before = anchors[k] if k >= 0 else None
    after = anchors[k + 1] if k + 1 < len(anchors) else None
    return before, after


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    vol, arg = sys.argv[1], sys.argv[2]
    lines = load(vol)
    anchors = chain(lines)
    if arg == "--stats":
        cols = [c for _, c in anchors]
        gaps = sum(1 for a, b in zip(cols, cols[1:]) if b - a > 2)
        print(f"PG {vol}: {len(lines)} lines, {len(anchors)} column anchors, cols {cols[0]}–{cols[-1]}, "
              f"{gaps} jumps >2 cols")
        return
    if arg == "--col":
        target = int(sys.argv[3])
        for i, (l, c) in enumerate(anchors):
            if c >= target:
                s = anchors[i - 1][0] if i else 0
                print(f"[col {anchors[i-1][1] if i else '?'}→{c}, OCR lines {s+1}-{l+1}]")
                print("\n".join(lines[s:l + 40]))
                return
        print("column beyond map")
        return
    if arg == "--near":
        L = int(sys.argv[3]) - 1
        R = int(sys.argv[4]) if len(sys.argv) > 4 else 150
        inchain = {i for i, _ in anchors}
        for i in range(max(0, L - R), min(len(lines), L + R)):
            if i == L:
                print(f"{i+1}\t>>>>\t{lines[i].strip()[:90]}")
            elif NUM.match(lines[i]):
                print(f"{i+1}\t{'CHAIN' if i in inchain else 'other'}\t{lines[i].strip()[:90]}")
        return
    if arg == "--heads":
        a, b = int(sys.argv[3]), int(sys.argv[4])
        for i, l in enumerate(lines):
            t = l.strip()
            letters = [ch for ch in t if ch.isalpha()]
            if len(letters) < 6 or sum(ch.isupper() for ch in letters) / len(letters) < 0.8:
                continue
            bf, _ = col_at(anchors, i)
            if bf and a <= bf[1] <= b:
                print(f"line {i+1}\tcol ≈{bf[1]}\t{t[:100]}")
        return
    if arg == "--ordo":
        starts = [i for i, l in enumerate(lines) if re.search(r"ORDO\s+RERUM", l, re.I)]
        if not starts:
            print("no ORDO RERUM found")
            return
        s0 = starts[0] if starts[0] > len(lines) * 0.8 else starts[-1]
        for i in range(s0, len(lines)):
            if re.search(r"\d{1,4}\s*$", lines[i]) or re.search(r"ORDO|CONTINENTUR", lines[i], re.I):
                print(f"{i+1}\t{lines[i].strip()[:110]}")
        return
    rx = re.compile(arg, re.I)
    hits = 0
    for i, l in enumerate(lines):
        if rx.search(l):
            b, a = col_at(anchors, i)
            bc = b[1] if b else "?"
            ac = a[1] if a else "?"
            print(f"line {i+1}\tcol ≈{bc} (next anchor {ac})\t{l.strip()[:110]}")
            hits += 1
            if hits >= 40:
                print("… (40 hits, narrow the pattern)")
                break


if __name__ == "__main__":
    main()
