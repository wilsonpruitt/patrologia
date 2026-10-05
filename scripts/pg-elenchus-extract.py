#!/usr/bin/env python3
"""Cut the front ELENCHUS AUCTORUM ET OPERUM block out of each PG volume's archive.org djvu.txt.

Input:  raw/pg-djvu/NNN.txt  (archive.org item `patrologia-volumes`, NNN_djvu.txt; PG 106 from
        `patrologiaecurs67migngoog`, alt witness `patrologicursus24migngoog` as 106-alt.txt)
Output: data/pg-toc/elenchus/NNN.txt — the block verbatim (blank-line runs squeezed), with a header
        recording source line numbers. Report to stdout: per volume, found/not, line span.

The block is OCR of a two-column list: author heads in caps, then work titles each ending in the
starting COLUMN number. OCR garbles digits ($ for 5/3, g for 9, l for 1) and interleaves columns —
structuring and column checks are a later step (data/briefs/PG-TOC-BRIEF.md). This script only cuts.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "raw/pg-djvu"
OUT = ROOT / "data/pg-toc/elenchus"

HEAD = re.compile(r"AUCTORUM\s+ET\s+OPERUM|OPERUM\s+QUI\s+IN\s+HOC|QUI\s+IN\s+HOC\s+TOMO", re.I)
# The list ends where the volume's text begins. Signals seen: a second TOMUS/PATROLOGIA running
# title, a long run of body prose, or Greek. We cut generously (cap) and let the brief trim.
CAP = 400


def cut(path):
    lines = path.read_text(errors="replace").splitlines()
    start = next((i for i, l in enumerate(lines[:6000]) if HEAD.search(l)), None)
    if start is None:
        # fallback: the closing ORDO RERUM (fuller, chapter-level; agents take top-level entries)
        ordo = [i for i, l in enumerate(lines) if re.search(r"IN\s+HOC\s+TOMO\s+CONTINENTUR", l, re.I)]
        if not ordo:
            return None
        s = max(0, ordo[-1] - 3)
        return s, len(lines), ["# FALLBACK: no front Elenchus found; this is the CLOSING ORDO RERUM"] + lines[s:]
    # back up to include an "ELENCHUS" line just above
    s = max(0, start - 4)
    end = min(len(lines), start + CAP)
    # stop early at the first line that looks like the start of a work's text: "PATROLOGIA" running
    # head or "TOMUS" after at least 30 lines of list
    for j in range(start + 30, end):
        if re.search(r"Ex\s+t[yv]pis|MIGNE", lines[j], re.I):  # imprint line closes the list
            end = j + 1
            break
        if re.search(r"PATROLOG|^\s*TOMUS\b|PROLEGOMENA|MONITUM|PRAEFATIO|PRÆFATIO", lines[j], re.I):
            end = j
            break
    return s, end, lines[s:end]


def main(vols):
    OUT.mkdir(parents=True, exist_ok=True)
    for p in sorted(SRC.glob("*.txt")):
        if vols and p.stem not in vols:
            continue
        r = cut(p)
        if r is None:
            print(f"{p.stem}\tNOT FOUND")
            continue
        s, e, block = r
        text = re.sub(r"\n\s*\n(\s*\n)+", "\n\n", "\n".join(block))
        (OUT / f"{p.stem}.txt").write_text(
            f"# source: raw/pg-djvu/{p.name} lines {s + 1}-{e}\n\n{text}\n")
        print(f"{p.stem}\t{s + 1}-{e}\t{e - s} lines")


if __name__ == "__main__":
    main(set(sys.argv[1:]))
