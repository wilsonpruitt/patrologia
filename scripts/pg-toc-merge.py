#!/usr/bin/env python3
"""Merge data/pg-toc/works/NNN.json into the Byzantine PG queue.

- endCol = (next located start in the same volume) - 1; the last item runs "to end of volume" (null),
  because the OCR's last page number is not trustworthy enough to print as Migne's.
- crossrefs (printed in another volume) are kept out of the column arithmetic and listed apart.
- writes data/pg-byzantine-queue.json tomes[].workLevelBreakdown (replacing "NOT BUILT") and
  data/pg-toc/works.tsv (one row per entry, for review).
Columns are OCR-derived (pg-colfind + the two printed lists), not plate reads.
"""
import json, pathlib, csv

ROOT = pathlib.Path(__file__).resolve().parent.parent
WORKS = ROOT / "data/pg-toc/works"
QUEUE = ROOT / "data/pg-byzantine-queue.json"
TSV = ROOT / "data/pg-toc/works.tsv"


def load(vol):
    p = WORKS / f"{vol}.json"
    return json.loads(p.read_text()) if p.exists() else None


def breakdown(d):
    ents = d["entries"]
    located = sorted({e["bodyCol"] for e in ents
                      if e.get("kind") != "crossref" and isinstance(e.get("bodyCol"), int)})
    out = []
    for e in ents:
        r = {"author": e["author"], "title": e["title"], "kind": e["kind"],
             "startCol": e.get("bodyCol"), "endCol": None, "colStatus": e.get("colStatus"),
             "greek": e.get("greek")}
        if e.get("listedIn"):
            r["listedIn"] = e["listedIn"]
        if e["kind"] == "crossref":
            r["crossRefVolume"] = e.get("crossRefVolume")
            r["crossRefCol"] = e.get("crossRefCol")
        elif isinstance(r["startCol"], int):
            later = [c for c in located if c > r["startCol"]]
            r["endCol"] = later[0] - 1 if later else None
        if e.get("parts"):
            r["parts"] = len(e["parts"])
        out.append(r)
    return out


def main():
    q = json.loads(QUEUE.read_text())
    rows, built, missing = [], 0, []
    for t in q["tomes"]:
        d = load(t["pgVolume"])
        if not d:
            missing.append(t["tome"])
            continue
        b = breakdown(d)
        t["workLevelBreakdown"] = {
            "source": "data/pg-toc/works/%s.json" % t["pgVolume"],
            "listSource": d.get("listSource", "elenchus"),
            "counts": {k: sum(1 for x in b if x["kind"] == k) for k in ("work", "editorial", "crossref")},
            "unlocated": sum(1 for x in b if x["colStatus"] == "unlocated"),
            "entries": b,
        }
        built += 1
        for x in b:
            rows.append([t["pgVolume"], x["author"], x["title"], x["kind"], x["startCol"] or "",
                         x["endCol"] or ("end" if x["startCol"] and x["kind"] != "crossref" else ""),
                         x["colStatus"], x["greek"], x.get("parts", ""),
                         x.get("listedIn", ""),
                         f'{x.get("crossRefVolume") or ""} {x.get("crossRefCol") or ""}'.strip()])
    q["workLevelNote"] = ("Work-level entries from each tome's front ELENCHUS (or closing ORDO RERUM), "
                          "start columns confirmed in archive.org OCR (scripts/pg-colfind.py); OCR "
                          "evidence, NOT plate reads. endCol = next start - 1. Brief: "
                          "data/briefs/PG-TOC-BRIEF.md.")
    QUEUE.write_text(json.dumps(q, ensure_ascii=False, indent=1) + "\n")
    with TSV.open("w", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["vol", "author", "title", "kind", "startCol", "endCol", "colStatus", "greek",
                    "parts", "listedIn", "crossRef"])
        w.writerows(rows)
    print(f"built {built} tomes, {len(rows)} entries; missing: {' '.join(missing) or 'none'}")


if __name__ == "__main__":
    main()
