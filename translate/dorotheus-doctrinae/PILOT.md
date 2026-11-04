# Pilot: translation as the plate check (Dorotheus, Doctrina I), 2026-10-27

**Question (Wilson):** FitzRalph showed that translating does the plate read's work. Can it replace the
blind read + every-line check (`scripts/pg-plate-api.py`, $18.29 for the Doctrinae) on the Kraken-queue works?

**Design.** One Opus brief (`_briefs/dd-001_003.md`, card `CARD.md`) translated Doctrina I (3 chunks, 4,924
Greek words, pp. 839–850) from the **raw Kraken** Greek, with the facing Latin column (copyA OCR) as a witness,
and logged every spot it thought misread. Dorotheus is the one work with a full plate check already paid for, so
that check is the answer key: `scripts/kt-score.py` diffs Kraken vs `checked/` and scores the translator's rows.
Cost: **≈202K tokens** (one agent, 11 min), plus ~12 line crops read in session.

## Result (`SCORE.md`)

| class | fixes the plate check made | caught by the translator |
|---|---|---|
| letters (a different or broken word) | 62 | 51 (82%) |
| accents / breathings | 103 | 65 (63%) |
| punctuation | 37 | 28 (76%) |
| band letters | 6 | 2 |

**The 11 "missed" letter diffs, looked at one by one:** 5 are band-letter debris (`Ο`, `Σ`, `ἐκΒ`, `ἀπα-Β`), which
the translator handled as `[b: X]` or fixed on the next line; 1 is a matcher miss (`ποιῖ`, flagged as `ποῖ`); 1
is the check inserting Migne's printed *(sic)*; 1 (`Βορσανουφίου`) is Migne's misprint, which the check kept and
the translator did not flag (no effect on the English). **Real misses: 3** (`γενομένην`/`γεγομένην`,
`ἐπέβης`/`ἐπέδης`, `Οὐκ`/`Οὐχ`), none changing the English.

**The accent misses are systematic, so a script can fix most of them.** About 20 of the 38 are an acute before a
comma, where Migne prints a grave (`ἀγαθόν,` → `ἀγαθὸν,`). Most of the rest are rough/smooth breathing on an
initial η/ω (`ἥθελεν` → `ἤθελεν`, `ὥμους` → `ὤμους`). Both can be handled by a rule pass before translation.

**What the translator found that the check did not.** 34 rows sit on no diff. 50 more were glyph-only (`´` →
`᾿`), which one rule settles. The substantive ones were checked against the page images, and **every one is Migne's
own text**: `ἔγγυται` (Gen 8:21, for ἔγκειται), `αὐτῷ` (for αὐτὸ), `μόρον (sic)`, `Ἐν τῷ τούτῳ`, `πᾶσαν` (for
πῶς), `ἀνείδειαν` (Migne's footnote 6), `Οὖν` opening a sentence after a lost word (Latin note 8), `ἐκείνῳ … ἐν
ἡμῖν` (Latin note 14), `ἀντέρει`. The check reproduced these faithfully and said nothing about them. The
translator read through each one and explained it. ⚠ **But it labelled them `ocr`, not `print`.** Applied blind,
those rows would have emended Migne. As in FitzRalph, **the flagged rows still need an image check** to sort the
OCR's errors from the print's before any fix touches the Greek.

## Verdict

For the **English**, translating from the raw Kraken text is as good as the full plate check. It is also better
at explaining defects in the print. For the **displayed Greek**, it needs two cheap additions: a free rule pass
(elision glyphs, grave before a comma, breathing on initial η/ω) and an image check of the flagged rows (crops,
in session). Proposed workflow for the Kraken-queue works (Moschus, Sophronius, Procopius, the rest of the
Doctrinae): **Kraken → rule pass → translate + flag → image-check flagged rows → apply ocr fixes, record print
errors.** The blind read and the every-line check are dropped.

Tools: `scripts/kt-scaffold.py` (scaffolds + briefs), `scripts/kt-score.py` (answer-key scoring; Dorotheus only).
Line crops for the image check: `scripts/kt-crop.py --out=<dir> p-0841:41 …` (Dorotheus paths; generalise per work).
⬜ The English is in card shape (`dd-00N.en.md`), not yet site chunks: conversion to `src/english/` format, the
Latin twin and the site build remain open.

## Addendum 2026-11-04: the rule pass, built and scored (`scripts/kt-rules.py`)

Run over all 113 pages of raw Kraken and scored against `checked/` (`--score`). Counted on word pairs whose
letters already match, i.e. the accent/breathing/glyph layer the translator misses:

| rule | fixed | broke | changed, still wrong |
|---|---|---|---|
| glyph (elision marks → ᾿, stray `]`) | 505 | 0 | 9 |
| accent (Migne's grave/acute by position) | 312 | 27 | 19 |
| lexical (one breathing / iota-subscript edit to a clean-lexicon form) | 361 | 18 | 39 |

Errors in this layer fall from ≈2,300 to ≈1,170 (1,178 fixed, 45 introduced, every change listed in
`ruled/CHANGES.tsv`). **What the 45 are:** the accent breaks are Migne's own inconsistency (acute before a comma,
clustered on p. 877; no rule can predict them); about half the lexical breaks restore correct Greek where Migne
misprints (`φάγη`, `ἀπέλθη`, `ἀγίαν`) or uses an older spelling (`ζῶον`, `παῤῥησία` dat.), which counts against
the rule because the displayed Greek is Migne's.
**What it leaves:** ≈450 breathing and ≈120 iota-subscript errors on forms that are real words either way, or that
the lexicon does not know. Those are context's call, and they remain the translator's and the image check's.
**Tuning, all measured here:** acute↔circumflex edits are OFF (Byzantine accentuation like `κρῖμα` read as error:
+12 breaks for +12 fixes); the frequency-ratio swap is 10× (knee of the curve: 5× adds 23 fixes for 6 more
wrong-either-way rows); it is NOT capped by the form's own frequency (`ἣ`→`ἢ` fixed 92, broke 0). Removing an iota
subscript is never proposed (Kraken drops them; it does not add them). Half-words at a line-end hyphen are skipped.
⚠ **Not tested by the answer key:** Moschus prints chapter numerals `ιʹ`; the first version turned them into elisions.
`ʹ` is now never touched. Any new work's first `CHANGES.tsv` should be skimmed for a class Dorotheus did not have.
The lexicon leaves out every work whose key shares the ruled work's first word (`dorotheus-*` here), so the score
is not self-confirming. `kt-scaffold.py` now reads `ruled/` by default (`--raw` for `text/`).
