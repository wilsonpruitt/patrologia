# OGL (Open Patrologia Graeca, 2015) vs Calfa — first measurement, 2026-10-01

Scripts here: `ogl_vs_calfa.py` (per-volume), `ogl_coverage_map.py` (all 196 repos, GitHub tree sizes, no download),
`joel_lacunae_check.py`. Outputs: `pg107/ pg71/ pg139/` (`results.json`, `disagreement-sample.tsv`), `coverage-map.json`.
Source: github.com/OGL-PatrologiaGraecaDev/Vol.-N — several independent OCR runs per volume, one per scanned copy.

## Method (and what it is NOT)
Every witness aligned word-for-word to Calfa; all sources put on the same Calfa positions; the pairwise disagreement
matrix solved for each source's own error (d_ij ≈ e_i + e_j). **No source is ground truth** (Calfa is itself an OCR).
Two keys: *letters only* (accents/breathings ignored) and *accented* (grave≡acute, ϐ→β, numeral keraia stripped).
Folded on purpose: OGL emits **acute for Migne's grave** (3,589 diffs in PG 107 alone — consistent with the 2015 spell-check
step pulling toward dictionary forms) and keeps Migne's medial **ϐ** (Calfa normalizes to β).

## Results (word error vs the other sources, solved)
| Vol | witnesses | Calfa tokens covered by ≥1 / ≥3 witnesses | Calfa, letters | best–typical witness, letters | worst witness | 5-way vote, letters (est.) | Calfa / witnesses / vote, accented |
|---|---|---|---|---|---|---|---|
| 107 | 5 | 96.9% / 92.0% | 2.6–3.3% | 1.5–2.2% | 5.1% | ≈0.2% | 7.7–8.5% / 5.0–6.1% / ≈1.6% |
| 139 | 5 | 98.8% / 95.8% | 3.1–3.7% | 2.5–3.2% | 5.4% | ≈0.6% | 7.8–8.5% / 6.2–7.3% / ≈1.8% |
| 71 | 7 | **71.5% / 45.8%** | 1.7–2.3% | 1.1–1.6% | 4.6% | ≈0.1% (clean 20% only) | 6.6–7.3% / 4.8–5.5% / ≈1.8% |

* In a 45-site sample of places where **all five witnesses agree against Calfa** (PG 107), Calfa is the one in error in ~40
  (`ἐνταῦθσ`, `τδ`, `Κτοῦ`, `ὅὲ`, `βασιλεὸς`…), the witnesses in ~2, ~3 ambiguous. Frequency/eyeball only — **NOT plate-adjudicated**.
* Calfa's Latin-column noise (Greek-looking garble such as `ΟΟΝΒΤΙΤΟΤΙΟ`) and tables are most of the unaligned 10–12%.
* Joel (PG 139) — the 11 testable plate-verified Calfa lacunae (overhang lines): **present in the OGL witnesses (≥67–100% of the restored words, loose window)**.
  So the OGL layout does not share Calfa's overhang loss in these cases.

## The finding that matters: COVERAGE, not accuracy
Many OGL page files are EMPTY in the repo itself (hOCR 0 bytes too) — a 2015 pipeline failure. Coverage map over all 196 repos
(witness = scan copy; "good" = ≥80% non-empty page files):
* **109 volumes strong** (≥3 good witnesses). PG 107 / 139 sit at 99.7% non-empty.
* The weak set is **Vols 6–99** (early Fathers; best witness 45–75% non-empty; PG 71 = 56%).
* Of the **134 gap tomes: 82 strong (all 41 in PG 100–161 + 41 in 1–99), 3 medium (033, 043, 058), 47 weak (all in 7–99), 2 no pages (016-1, 016-2).**

## Caveats
Independence of errors is assumed → solved rates are LOWER BOUNDS (same type → shared confusions). "Common positions" (all
witnesses aligned) skew toward clean text; larger triple-based sets gave Calfa +0.5–1.5 pts, so treat figures as optimistic.
Vote error = difference of two noisy numbers (±~0.3). Nothing is attributed to Migne's plate (CLAUDE.md: no PG finding from our
files alone). Not measured: Latin column, footnotes, Latin words inside Greek, whether spell-check changed rare forms.
