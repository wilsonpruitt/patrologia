# Maximus the Confessor, *Hymni* (PG 91.1417–1424), queue #3: run log

## 2026-11-15 — step 1 DONE: verified Greek + Latin base (Opus agent, plate-read; Kraken only a typing aid)
Not two hymns but **three** (Daniel, *Thesaur. hymnolog.* III, 97 seqq.): I «Ὕμνος εὐχαριστήριος καὶ ἱκετήριος πρὸς Θεόν» (col 1417 foot → 1420), II «Ὕμνος ἱκετήριος εἰς Χριστόν …»
(1420 l.55 → 1424), III «εἰς τὴν ἁγίαν Τριάδα» (1424 l.9 → end). pdf pp. 771 (foot) – 774 (upper half; the *Thalassius* Notitia below is not ours). **297 Greek / 296 Latin verse lines**
(one Latin line renders two Greek lines at 1423 G19–20). Short verse lines, Latin facing line for line; two printed columns per pdf page, each a Greek block + a Latin block.
Files: `base/NNNN.{greek,latin}.txt` (1417–1424; `#H` headings, `#C` citation), `base/BANDS.tsv`, `base/DOUBTS.tsv` (58; 9 evident Migne misprints kept as printed, flagged MIGNE?), `base/REPORT.md`.
Kraken: `raw/kraken/maximus-hymni/` (4 pages; its layout model splits the columns but the verse blocks drop lines: 1421/1422/1419 short, p. 771 foot garbled: do not use it as a base).
Weakest plate: p. 772 (cols 1419–1420, broken impression, worst at the tops); rough/smooth breathings indistinguishable in this scan (standard breathing written, per REPORT.md).
Costing: far smaller than the Epistulae rate: ≈1,000–1,200 Greek words; est. all-in ≈0.3–0.5M.

## 2026-11-15 — step 2 DONE: the verse pilot (Fable, in session; Wilson: "fable pilot. good point")
`translation-style.md` → new section **"Greek verse (anacreontics, hemiambs)"**, V1–V10, before "## Patterns"; the Sophronius *Anacreontica* inherits it.
`ANCHOR.en.md` = Hymn III entire (17 lines) + Hymn I lines 1–33, worked row by row with T notes; `GLOSSARY.md` seeded. The rule that carries the rest (V1): for each Greek
SENTENCE the English has exactly as many lines as the Greek, words move between lines only inside the sentence and as little as English allows: the model is the facing Latin on the
plate, which keeps the count and reorders. No metre, no rhyme, no padding (V2); metrical dress and filler particles not rendered (V3); epithets stay epithets (V4); a capital on every
line as the plate has (V5); acrostics noted, never imitated (V6); `[lat:]` only for a departure of sense, e.g. l.1 τλήμονα / *beatum* (V7); metre is evidence about the base, never a
licence to emend (V8); one printed line = one file line, blank lines only where Migne divides, the sentence aligner is NOT run on verse (V9).
Found in passing: **Hymn III is an acrostic, ΜΑΞΙΜΟΣ ΤΑΔΕ ΓΡΑΨΕΝ.** Metre: hemiambs (7 syllables).

## ⚑ ATTRIBUTION — probably NOT the Confessor (unverified; do not write the about text until checked)
From memory (Fable), not confirmed: these three hymns are **Maximus Margunius's** (bishop of Cythera, d. 1602), from his *Hymni anacreontici* with Conrad Rittershausen's Latin
(Augsburg 1601), which Daniel reprinted and Migne set under the Confessor. Web check 2026-11-15: the 1601 edition and Rittershausen's Latin are confirmed to exist
(katalog.snk.sk record 960217; Europeana); that PG 91's three hymns are IN it is NOT confirmed (nothing found either way; the Russian azbyka.ru translation prints them as the Confessor's).
Internal evidence fits a humanist, not a seventh-century author: hemiambs with a signature acrostic, a line-for-line Latin verse crib. **To settle: open a digitised copy of the 1601
edition (or Daniel, *Thes. hymn.* III p. 97 and his note) and look for the incipit Λειμών με τλήμον' ἔσχε.** Until then the registry/about text says "printed by Migne among the works of
Maximus the Confessor; the attribution is doubtful" and no more. Same class as the Procopius-of-Caesarea piece in the *Rhetorica*. The queue's "New" badge is unaffected (weak claim by default; rule 8).

## ▶ NEXT (each needs Wilson's model + go; est. ≈0.3–0.4M all-in)
1. **Translate** (Opus, ONE agent, the whole 297 lines: too small to split; brief = this RUN.md + the verse section + ANCHOR + GLOSSARY + `base/` + DOUBTS.tsv; output `hy-00N.en.md` per hymn, one
   line per line, T/S notes, `[lat:]` per V7; it re-reads the plate wherever DOUBTS or the metre (V8) raises a question; Hymn III and Hymn I 1–33 are DONE in the anchor: carry them over verbatim).
2. **Build** (Sonnet): the kt chain assumes ONE Greek column per pdf page and prose paragraphs; the Hymni have two columns per page and lines. Needed: a small `hy-to-site.py` (or a verse mode in
   `kt-to-site.py`) writing src/greek, src/pg-latin, src/english with one printed line per line, `[NNNN]` + `[b: X]` (base/BANDS.tsv) at line starts; builder support for line breaks
   (the PL chunker already carries verse `<l>` as an in-block newline: see `scripts/lib/chunk-core.mjs` NL); alignment by line within sentence, no align-sentences run (V9). Check
   `verify-english-pg` ratio and dedupe on short lines. Registry key `maximus-confessor-hymni`, slug `hymni`, citRange PG 91, 1417–1424.
3. **Blind read** (Opus, 1 reader: 297 lines), polarity record, preflight, then Wilson: about text (with the attribution settled), deploy, push.
