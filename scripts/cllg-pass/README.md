# CLLG column pass (first used on Maximus' Epistulae, PG 91.361-650, 2026-10-14/15)

These scripts run from the volume's working dir (`raw/pg091/`, gitignored), which holds `091.pdf`,
`091_djvu.xml` and `latin-words.txt`. Setup is in `benchmark/CLLG-SETUP.md`.

1. `pagemap.py`: reads each PDF page's running-head column numbers from the djvu OCR, and finds the
   Latin side by counting known Latin words per half. Greek alternates sides, so the side is
   measured per page, not assumed.
2. `gutter.py`: per page, the widest low-ink valley in the middle 30-70% (it may contain Migne's
   A-D marginal letters).
3. `ep-run.py`: crops the Greek column at the gutter and runs kraken, ~4 min/page. Resumable. A page
   with no gutter (full-width Latin) is recorded as skipped.

Output: `cllg/ep/p<page>.txt` plus `.json` (side, gutter, running-head cols).

Run result: 160 pages, 3.3-4.4 min each, 50-70 lines each. One page was skipped (p199, the Monitum).
About 19 pages carry Combefis' Latin notes at the foot; `maximus-cllg-diff.py` drops those lines.
Calibration on p163 gave a 14.5% flag load, against 14.0% for the hand crop.
