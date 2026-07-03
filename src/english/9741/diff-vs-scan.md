# Abbo Canones — diff-vs-scan spot check (2026-07-03)

Scan: archive.org `patrologiaecurs96unkngoog` (PL 139, 838 pp, downloaded to
`raw/scans/pl139/`, gitignored). Concordance: col pair 473|474 = PDF p241;
Abbo spans PDF pp241–258.

**Method:** three sample pages read off the plates at 150dpi — opening
(cols 473–474: incipit, Praefatio, Capitula), middle (489–490: canons
XXIV–XXVIII), end (505–506: canons XLVII–LII) — and 28 distinctive phrases
grepped verbatim against `src/latin/9741/`. Column-anchor placement checked
at [0505A].

**Result: PASS.**
- 27/28 phrases exact; the 28th differs only in numeral case (TEI `XX
  librarum` vs plate `xx libræ`) — equivalent.
- [0505A] falls exactly at the plate's column top ("civilem sive
  militarem, perducatur vel exhibeatur"); [0505B] at the B section mark.
- Known, deliberate divergences of the Corpus Corporum TEI from the plates:
  æ/œ ligatures normalized to ae/oe; Mabillon's footnotes (e.g. nn. 29–32
  under the Praefatio, n. 46 at col 505) and their in-text callout markers
  are NOT in the TEI and hence not on our page. If the site ever wants
  Migne's full apparatus, the notes would need OCR from the plates — out of
  scope for the pilot.

The pre-deploy diff-vs-scan debt for Abbo is settled: the TEI Latin is
faithful to the plates at the level our page presents.
