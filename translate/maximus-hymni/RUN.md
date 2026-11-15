# Maximus the Confessor, *Hymni* (PG 91.1417–1424), queue #3: run log

## 2026-11-15 — step 1 DONE: verified Greek + Latin base (Opus agent, plate-read; Kraken only a typing aid)
Not two hymns but **three** (Daniel, *Thesaur. hymnolog.* III, 97 seqq.): I «Ὕμνος εὐχαριστήριος καὶ ἱκετήριος πρὸς Θεόν» (col 1417 foot → 1420), II «Ὕμνος ἱκετήριος εἰς Χριστόν …»
(1420 l.55 → 1424), III «εἰς τὴν ἁγίαν Τριάδα» (1424 l.9 → end). pdf pp. 771 (foot) – 774 (upper half; the *Thalassius* Notitia below is not ours). **297 Greek / 296 Latin verse lines**
(one Latin line renders two Greek lines at 1423 G19–20). Short verse lines, Latin facing line for line; two printed columns per pdf page, each a Greek block + a Latin block.
Files: `base/NNNN.{greek,latin}.txt` (1417–1424; `#H` headings, `#C` citation), `base/BANDS.tsv`, `base/DOUBTS.tsv` (58; 9 evident Migne misprints kept as printed, flagged MIGNE?), `base/REPORT.md`.
Kraken: `raw/kraken/maximus-hymni/` (4 pages; its layout model splits the columns but the verse blocks drop lines: 1421/1422/1419 short, p. 771 foot garbled: do not use it as a base).
Weakest plate: p. 772 (cols 1419–1420, broken impression, worst at the tops); rough/smooth breathings indistinguishable in this scan (standard breathing written, per REPORT.md).
Costing: far smaller than the Epistulae rate: ≈1,000–1,200 Greek words; est. all-in ≈0.3–0.5M.

## ⏸ STOPPED before translation: the verse register is undecided
`pg-paired-pilot.md` §4 (Sophronius *Anacreontica*): verse "needs a Fable mini-pilot and a `translation-style.md` section before any agent touches it, same standing rule as 9637".
Settled already: `translation-style.md` 8a (keep Migne's verse lines one for one; never lineate what he printed as prose). Open: the English register (line-for-line literal vs rhythmic),
rhyme, how the Latin facing verse is treated, the page layout for verse in the builder (does it render one line per row?). Wilson's call: Fable pilot (per the standing rule, shared with the *Anacreontica*) or Opus decides.
Then: Latin twin + chunk (kt scaffold needs a column-unit adaptation: 2 Greek columns per pdf page, hymn headings), translate, sweep, apparatus (Daniel's citation only), build, blind read.
