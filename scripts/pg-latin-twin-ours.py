#!/usr/bin/env python3.11
"""pg-latin-twin-ours.py — build the chunk-aligned Latin twin for a PG work
transcribed from OUR OWN plate OCR.

Usage: python3.11 scripts/pg-latin-twin-ours.py <workKey>

WHY THIS EXISTS ALONGSIDE pg-latin-twin.mjs (2026-08-07)
    The .mjs twin builder aligns to a CALFA-chunked work and reads the column
    map's `greekCol` to decide which side is Latin. An our-OCR work is chunked
    by scripts/chunk-work-pg-ours.mjs from an explicit plate-read segment list,
    and its leaves are not reliably one column of one work. Same reasoning as
    the chunker: two source contracts behind one entry point buys a silent
    mis-alignment, and a Latin twin silently facing the wrong Greek is worse
    than no twin at all — it would be consulted with confidence.

WHAT THE TWIN IS FOR, AND WHAT IT IS NOT
    ⛔ It is a WITNESS, not authority. It is machine OCR (archive.org's copyA
    layer) of a 19th-century plate. Measured failures, both on this volume:
      · leaf859 note reads `quæst. 115`; the plate reads 113.
      · leaf971 note reads `Ma th. vi, 54.`; the plate reads 34.
    Both are the same 3/5 confusion this fount decides with one stroke, and an
    OCR engine is MORE susceptible to it than a directed read, not less.
    Use the twin to raise a question and to settle vocabulary (it retired the
    Σαρακηνῶν κ/χ flag in one grep). NEVER let it overwrite a plate reading.

    ⚠ Superscript note markers OCR badly or vanish. The apparatus stays
    plate-read; it does not come from here.

THE LATIN COLUMN IS THE SIDE THE GREEK IS NOT
    Migne sets the Greek at the gutter and the Latin outside, so greekSide
    alternates. Latin col = colLeft when the Greek is on the right, and
    colRight when the Greek is on the left.

WHY THE WINDOWS ARE EXPLICIT
    A leaf's Latin column is not all twin material. On this work:
      · leaf970's col 1838 is Doctrina XXIV's Latin ABOVE the title block and
        the Epistolae's Latin below it.
      · leaf972's col 1842 stops at the epistles' `Amen.`; below it come the
        foot-rule notes and then INDEX CAPITUM.
      · every leaf's foot-rule block sits below the running text and spans the
        full page width.
    Each window is recorded in data/pg-works.json with the text anchor it was
    derived from, so it can be audited rather than trusted.
"""
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
key = sys.argv[1] if len(sys.argv) > 1 else None
if not key:
    sys.exit("usage: python3.11 scripts/pg-latin-twin-ours.py <workKey>")

reg = json.loads((ROOT / "data/pg-works.json").read_text())
work = next((w for w in reg["works"] if w["key"] == key), None)
if not work:
    sys.exit(f"work key {key} not found")
segs = work.get("oursSegments") or []
windows = work.get("latinWindows") or {}
if not segs:
    sys.exit(f"{key} has no oursSegments[]")

volpad = f"{work['volume']:03d}"
cmap = json.loads((ROOT / f"data/pg-column-maps/pg{volpad}.json").read_text())
byleaf = {r["leaf"]: r for r in cmap["pages"]}

scan = work.get("latinScanFile") or f"raw/scans/pg{volpad}/copyA_{volpad}_djvu.xml"
scan_path = ROOT / scan
if not scan_path.exists():
    sys.exit(f"scan OCR layer not found: {scan}")

# copyA's djvu page index == leaf number (verified 2026-08-07 on leaves 969/970/971
# against plate-read running heads). copyB is offset by +8 AND is a Greek-configured
# OCR that transliterates Latin into Greek glyphs — it is NOT a second Latin witness.
pat_obj = re.compile(r'usemap="[^"]*?(\d{4})\.djvu"')
pat_word = re.compile(r'<WORD coords="(\d+),(\d+),(\d+),(\d+)"[^>]*>([^<]*)</WORD>')

wanted = {f"{s['leaf']:04d}": s["leaf"] for s in segs}
words = {s["leaf"]: [] for s in segs}
cur = None
with scan_path.open(encoding="utf8", errors="replace") as f:
    for line in f:
        mo = pat_obj.search(line)
        if mo:
            cur = wanted.get(mo.group(1))
            continue
        if cur is not None:
            for x0, ybot, x1, ytop, w in pat_word.findall(line):
                if w.strip():
                    words[cur].append((int(x0), int(ytop), w))

SCALE = 3963 / 3982  # djvu page width vs our PDF render width

latin_by_leaf = {}
for s in segs:
    leaf = s["leaf"]
    rec = byleaf[leaf]
    greek_side = rec["greekSide"]
    latin_col = rec["colLeft"] if greek_side == "right" else rec["colRight"]
    split = int(rec["splitX"] * SCALE)
    win = windows.get(str(leaf), {})
    ymin, ymax = win.get("yMin", 0), win.get("yMax", 10**9)

    keep = [
        w for (x, ytop, w) in words[leaf]
        if ((x < split) if greek_side == "right" else (x > split)) and ymin <= ytop <= ymax
    ]
    if not keep:
        sys.exit(f"⛔ leaf {leaf}: window produced NO Latin — check latinWindows")
    latin_by_leaf[leaf] = {
        "latinCol": latin_col,
        "greekCol": rec["colRight"] if greek_side == "right" else rec["colLeft"],
        "text": " ".join(keep),
        "words": len(keep),
        "window": win,
    }

# ---- align to the Greek chunks ----
gdir = ROOT / "src/greek" / key
man = json.loads((gdir / "manifest.json").read_text())
outdir = ROOT / "src/pg-latin" / key
outdir.mkdir(parents=True, exist_ok=True)
for old in outdir.glob("*.md"):
    old.unlink()

col_to_leaf = {v["greekCol"]: k for k, v in latin_by_leaf.items()}
emitted = []
for c in man["chunks"]:
    text = (gdir / c["file"]).read_text()
    cols = [int(m) for m in re.findall(r"\[(\d{3,4})\]", text.split("---", 2)[2])]
    seen, order = set(), []
    for col in cols:
        if col in col_to_leaf and col not in seen:
            seen.add(col); order.append(col)
    parts, latin_cols = [], []
    for col in order:
        L = latin_by_leaf[col_to_leaf[col]]
        parts.append(f"[{L['latinCol']}] {L['text']}")
        latin_cols.append(L["latinCol"])
    body = "\n\n".join(parts)
    head = (
        f"<!-- Latin twin for {key} chunk {c['chunk']} ({c['file']}).\n"
        f"     Greek cols {c['colFirst']}–{c['colLast']}  ·  facing Latin cols "
        f"{', '.join(str(x) for x in latin_cols)}\n"
        f"     Source: {scan} (archive.org OCR layer), built by "
        f"scripts/pg-latin-twin-ours.py\n"
        f"     ⛔ WITNESS, NOT AUTHORITY. Machine OCR of a 19th-c plate; measurably\n"
        f"        wrong in this fount's way (3/5 confused: it reads `quaest. 115` for\n"
        f"        113 and `Matth. vi, 54.` for 34). Raise questions with it; never let\n"
        f"        it overwrite a plate reading. The apparatus is NOT taken from here.\n"
        f"-->\n\n"
    )
    (outdir / c["file"]).write_text(head + body + "\n")
    emitted.append({"chunk": c["chunk"], "file": c["file"], "greekCols": order,
                    "latinCols": latin_cols,
                    "latinWords": sum(latin_by_leaf[col_to_leaf[x]]["words"] for x in order)})

(outdir / "manifest.json").write_text(json.dumps({
    "workKey": key, "series": "pg", "volume": work["volume"],
    "source": scan, "builtBy": "scripts/pg-latin-twin-ours.py",
    "role": "WITNESS for adjudication and vocabulary. Not authority, not the apparatus source.",
    "perLeaf": {str(k): {kk: vv for kk, vv in v.items() if kk != "text"} for k, v in latin_by_leaf.items()},
    "chunks": emitted,
}, ensure_ascii=False, indent=2) + "\n")

print(f"{key}: {len(emitted)} twin file(s) → src/pg-latin/{key}/")
for e in emitted:
    print(f"  {e['file']}  greek {e['greekCols']} ← latin {e['latinCols']}  {e['latinWords']}w")
for leaf, v in sorted(latin_by_leaf.items()):
    w = v["window"]
    rng = f"y {w.get('yMin','–')}..{w.get('yMax','–')}" if w else "full column"
    print(f"  leaf {leaf}: greek {v['greekCol']} / latin {v['latinCol']}  {v['words']}w  [{rng}]")
