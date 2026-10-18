# Phase 3 — Vision-OCR model benchmark: RESULTS

*Run 2026-07-04, on Sonnet per the model plan (Phase 3 = Sonnet mechanics).*

## Scope actually run (vs. the brief)

- **Latin arm:** 13 columns (not ~25) from PL 139 only (not multiple volumes). Reasoning: the volume→page concordance formula (`colOdd = 2·page − 9`) was verified exact across the whole 838-page volume, giving reliable, zero-download samples spanning the volume's full column range (9–1638) and several genres (chronicle, geometry, epistolary, hagiography, canon law, papal-lives narrative). Pulling additional volumes would have meant unverified archive.org scans and new column-map work for marginal extra diversity; skipped given time/disk tradeoffs. Logged here rather than silently shrunk.
- **Greek arm:** 9 pages sampled across 9 distinct PG volumes (2, 17, 87, 89, 98, 99, 114, 127, 145) from the Zenodo `20008699` V1 ground-truth set (100 images, task2 = line-level Greek). One page (**PG_127-526) dropped from the aggregate** — its region-level ground-truth annotation only covers 63 of the visible column's ~380+ words (a Zenodo data-quality gap, not a model or scoring error); both models' raw transcriptions for it are in `hyp/*/gr-PG_127-526.txt` for reference but excluded from the mean.
- **Opus run on Latin only, not Greek.** The Latin arm showed Opus ≈ Sonnet (no practical gain, see below); extrapolated rather than spending another 9 calls confirming the same pattern on Greek. Flagging this as a scope call, not a silent omission.

## Latin (PL 139), CER/WER vs Corpus Corporum TEI, n=13 columns

| Model | Mean CER | Mean WER |
|---|---|---|
| Haiku 4.5 | **32.98%** | 55.81% |
| Sonnet 5 | **1.48%** | 5.23% |
| Opus 4.8 | **1.54%** | 5.25% |

Per-column detail in git history of this file / re-derivable via `score.mjs` against `gt/pl-col*.txt` and `hyp/<model>/pl-col*.txt`.

**Key finding — Haiku's failure mode is column-selection, not just character recognition, but it's not *only* that either.** Full-page prompts (page image + "transcribe the left/right column") caused Haiku to interleave words from both columns on several pages (e.g. col 30: 95% CER from genuine cross-column interleaving). A follow-up pre-cropped single-column test (col 1050, isolating the column so there's no selection ambiguity) still scored **29.2% CER** for Haiku — barely better than its full-page result (23.9%) on that same column. So: pre-cropping would recover *some* of Haiku's full-page losses, but this typography (worn 19th-c. Migne type, medieval Latin proper nouns) is genuinely hard for Haiku's character recognition, independent of layout. Sonnet and Opus showed no interleaving artifacts on any column.

**Sonnet vs Opus: no meaningful gap.** 1.48% vs 1.54% mean CER — within noise. Opus buys nothing over Sonnet for this typography.

## Greek (PG, polytonic), CER/WER vs Calfa Zenodo ground truth, n=8 pages (1 dropped, see above)

| Model | Mean CER | Mean WER |
|---|---|---|
| Haiku 4.5 | **24.73%** | 45.33% |
| Sonnet 5 | **8.59%** | 13.74% |

Calfa's own published baseline: **CER 1.05% / WER 4.69%**.

Per-page Sonnet CER ranged 1.5–7.0% on 7 of 8 pages, but one page (PG_98-1360, a heavily worn/damaged plate with proper-name confusions like Σάῤῥα/Σάββα) scored 42.96% — a single hard outlier pulling the mean up substantially. Median Sonnet CER across the 8 pages is closer to ~3.3%.

## Scoring methodology notes (carry forward — these were real bugs caught mid-benchmark)

1. **NFC-normalize before diffing** (`score.mjs` does this) — un-normalized polytonic Greek combining marks produce false diffs, as previously found on the Joel lacuna sweep.
2. **Calfa's task2 pageXML has a region-level `TextEquiv` in addition to per-`TextLine` ones** — it appears once, after the last `</TextLine>`, and is the authoritative combined-reading-order transcription. Extracting *all* `<Unicode>` tags naively double-counts every line (once per-line, once in the region summary) and — worse — the region-level copy still has literal line-break hyphens (e.g. `εὔκαι-\nρον`) that must be stitched back into one word, not left as `"εὔκαι- ρον"`. Getting this wrong inflated measured CER to ~50% uniformly across every Greek page before the fix (see `extract-greek-gt.mjs`). **Lesson for any future Calfa-ground-truth consumption: use the region-level `TextEquiv`, dehyphenate line-final `-`, ignore per-line `TextEquiv`s.**
3. Footnote/running-head exclusion (Latin arm): crops were full pages, not pre-cut columns, after a pre-cut column crop was found to clip text unpredictably on some PL139 pages (column width isn't constant across the volume's 838 pages — a `pdftoppm -x/-W` crop that worked cleanly on p.241 clipped the right edge of the left column on p.362). Models were instead given the whole page image and instructed which column to read and what to exclude (header, footnotes, inline footnote-callout numbers) — this is what surfaced Haiku's interleaving failure mode as a side effect.

## Decision rule applied

**Latin bulk gap-OCR: use Sonnet 5.** It clears the ≤1% CER target on more than half the sample and averages 1.48% — Opus adds nothing, Haiku is not viable even pre-cropped for this typography. Reserve Opus only for individually flagged hard pages if any turn up during real production runs (none did in this sample).

**Greek: do not vision-OCR at bulk scale with current Claude models.** Sonnet's 8.59% mean (3.3% median) doesn't clear the ~2% bar, and Calfa's own pipeline is already sitting at 1.05% CER with an existing corpus covering 33 PG volumes. For Greek gaps outside Calfa's 33-volume coverage, the recommendation is to **run/adapt the Calfa pipeline** (or commission/borrow it) rather than default to Claude vision-OCR; reserve Sonnet vision-OCR for spot-checking or filling small gaps where CER in the 3–8% range is an acceptable cost against not having Calfa coverage at all.

## Cost note

No token/dollar accounting was captured per call in this run (would need to be pulled from usage logs post-hoc if a $-per-page figure is wanted for the deliverable table). Flagging as an open follow-up rather than fabricating a number.

## Artifacts

- `benchmark/score.mjs` — CER/WER scorer (Levenshtein, NFC-normalized)
- `benchmark/extract-gt.mjs` — Latin TEI column extractor (by `<pb n="NNNNx"/>` marker)
- `benchmark/extract-greek-gt.mjs` — Greek pageXML region-level extractor (dehyphenates)
- `benchmark/gt/`, `benchmark/hyp/{haiku,sonnet,opus}/` — ground truth + all model transcriptions, both arms
- `benchmark/render/`, `benchmark/crops/` — rendered/cropped page images used (Latin arm; crops superseded by full-page renders, kept for the diagnostic re-test)
- `benchmark/greek-gt/task2/` — extracted Zenodo `20008699` V1 ground-truth image+pageXML pairs (task1 region-only annotations excluded, not needed)

## Open follow-ups

- Per-call token/cost figures, if wanted for the deliverable table.
- Greek arm on Opus, if the ~8.59%-mean verdict is contested (unlikely to change the Calfa-pipeline recommendation given Sonnet≈Opus on Latin).
- A true multi-volume Latin sample (the original ~25-column, cross-volume brief) if Wilson wants confirmation the PL139-only result generalizes — current result is a single-volume, single-typography-batch sample.

## 2026-10-14 — Junk-OCR witness scan as a verifier for vision OCR: NEGATIVE

**Question:** can archive.org's Latin-letter "junk" Greek OCR (`NNN_djvu.xml`) serve as an
independent witness that flags a Claude vision transcription's errors, so that only the flagged
spots are read at the plate (a cheap Greek pipeline for the volumes outside Calfa)?
**Method:** `scripts/greek-witness-scan.py` (look-alike letter map + Smith-Waterman alignment; flags
plate-only runs, transcription-only runs and mismatch clusters) scored by
`benchmark/witness-eval.py` on the 8 Greek benchmark pages. True errors are the Levenshtein diff of
the model output against Calfa's ground truth; an error is caught if a flag lands within 12 characters.

| detector | Sonnet letter errors caught | of those ≥3 letters | flags not near a real error | text still to read |
|---|---|---|---|---|
| gaps only (omission/insertion) | 14/58 | 6/20 | 143/170 | 24% |
| gaps + mismatch clusters | 27/58 | 14/20 | 302/350 | 46% |
| Haiku, gaps + clusters | 582/950 | 222/323 | 87/433 | 54% |

**Ruling: not a verifier for vision OCR.** It misses about half of Sonnet's errors, and most of its
flags are noise from the junk OCR, so a reader still covers a quarter to half the page. Sonnet's
errors are mostly letter swaps and accents, which the look-alike map cannot see. Its large errors
are rare (20 across 8 pages).
**Where it DID work:** finding omissions in a *keyed* transcription against PG 91's OCR (Maximus,
`pg-paired-pilot.md` 0e), where the candidate is clean, so every flag is signal. PG 91's OCR may
also be cleaner than some of these volumes; PG 145 flagged 91% of its text.

### Follow-up, same day — Calfa word-form list as a detector: also NEGATIVE

`scripts/build-greek-lexicon.py` builds a frequency list from the 33 Calfa volumes (6.77M tokens,
531K forms → `raw/greek-lexicon.tsv`, gitignored). `benchmark/lexicon-eval.py` flags every word of
the model output that occurs fewer than K times in that list.
- **Haiku:** at K≥2 it catches 668 of 950 letter errors with 95% of flags real, but it flags 20% of
  all words, and Haiku is too inaccurate to use anyway.
- **Sonnet**, after excluding ground-truth apparatus that Sonnet merely didn't transcribe (brackets,
  chapter numerals, Latin sigla), has **43 genuine misreadings on 8 pages**. The word list catches
  16, the junk-OCR scan 16, and the **union 27 (63%), while flagging 59% of all words.** Reading
  every word costs little more than that and catches everything.
- **Why:** Sonnet's residual errors are mostly *real Greek words*. It substitutes plausible
  vocabulary (PG 89: διαπράττ- → ἐργάζ-, κηδό- → χρώ-, πολέμῳ → πᾶσι), drops particles (τοῦ, οὖν,
  δέ σου) and makes accent swaps that still yield valid forms. No form-level or alignment-level
  check sees these. Only a plate read does.

**Standing conclusion:** there is no cheap verifier for Claude vision Greek with these tools. A
full plate read stays mandatory, so the original ruling holds (Calfa's pipeline, not Claude
vision, for volumes outside Calfa). Untested and costs model calls: two independent vision reads
diffed against each other.

### Follow-up, 2026-10-14 — Tesseract and the CLLG kraken model: CLLG works as a SECOND WITNESS

The test asked whether a free local OCR could supply the Greek for volumes outside Calfa, starting
with PG 91, whose Maximus *Epistulae* have no ready Greek (`pg-paired-pilot.md` 0f/0g).

**Tesseract `grc`** (brew 4.1.0 and `tessdata_best`): REJECTED. Even after line joining and a
lexicon-guided confusion corrector (`tess-correct.py`, learned on PG 145), WER is about 30%.
`tess-eval.py` scores any hyp dir. It makes systematic κ→χ and β→δ errors.

**CLLG Polytonic Greek** (Inria, Zenodo 22232579, CC-BY-4.0, kraken 7.1,
`ppocr_v6_tau090.safetensors`). It runs on this Intel Mac with torch 2.2.2 and a one-line patch
(`benchmark/CLLG-SETUP.md`). Speed: ~2 min/page with given lines, ~4–5 min/column when it segments the
page itself. **As a base text it is not good enough**: on the benchmark pages its WER is about
twice Sonnet's (`hyp/cllg`, `hyp/cllg-lay`). **As a witness it works**, because its errors are
different in kind from Claude's. CLLG makes letter-shape errors and loses characters; Claude
substitutes plausible real Greek words. Where the two readings disagree is where to look.

**Test 1: Sonnet as primary, CLLG as witness, judged against Calfa GT** (`second-witness-eval.py`,
7 pages, excluding the worn PG 98):

| comparison key | Sonnet substitutions flagged | omissions flagged | words flagged (load) |
|---|---|---|---|
| accented (grave=acute) | **75 / 87 = 86%** | 13 / 15 | 394 / 2369 = 17% |
| base letters only | 51 / 69 = 74% | 13 / 15 | 11% |

Of the 12 misses on the accented key, about 7 are ρρ/ῤῥ or accent conventions, or GT typos. About
5 are genuine joint misses (πύριον/θύριον, ἁλίαιτον, a breathing, εὐθὺ;, one dropped word). Compare
the word-list detector above: 63% of errors caught while flagging 59% of words. Here it is 86%
caught while flagging 17%. **This is the "second independent read" that the standing conclusion
left untested, and it costs nothing in tokens.**

**Test 2: CLLG against a keyed transcription, on the five PG 91 columns already collated at the
plate** (`scripts/maximus-cllg-diff.py`, myriobiblos vs CLLG, cols 289/661/1033/1241/1404).
**Every substantive defect found by the plate collation (pilot 0d) is flagged:**
- col 289: both eye-skips, the dropped μή, οὐδέν→οὐδέ ×2, the iota-subscript slip
- col 661: ἐλέγθη, θείας
- col 1033: the dropped τόν and γάρ, the garbled parenthesis
- col 1241: ὑπὲρ αὐτούς for ἡμᾶς, πάσης, ὑπεράνων, με᾿

The one miss is the lowercased Πνεύματος (col 1404). The key ignores case, so this is by design.
**Load: 168 of 1784 words flagged = 9.4%** (7–14% per column) on gutter-cropped columns. Kraken's
whole-page segmentation was *worse* (231/1780 = 13%): it truncates line starts (speaker sigla),
and it does not remove CLLG's line-break letter loss. Crop the Greek column, preferably with a few
px of margin.

Two diff rules carry the load figure, and both are safe for omissions:
1. Start and end the alignment at a run of three or more agreeing words.
2. Suppress CLLG's own faults: spacing-only differences, and readings that are the transcription
   with letters lost, when the transcription's words are all known forms.

A transcription that drops text always leaves the OCR side longer, so rule 2 cannot hide it.
**Blind spot:** a transcription with an *extra* letter that still makes a known form, where CLLG
happens to lose the same letter. `--all` shows everything.

**Standing conclusion, revised:** CLLG is a free second witness for any non-Calfa PG volume. Its
disagreement list becomes the checklist the plate stint must resolve. **It does not replace the
every-page plate read** (the exhaustiveness rule). It does make that read targeted rather than
blind, which is the affordable verification that 8a.D found missing for Dorotheus, Moschus,
Sophronius and Procopius.

## 2026-10-17 — Fine-tuned CLLG on a GAP volume: clears the Phase 3b bar (PLAN step 4)

The 2026-10-14 verdict above ("as a base text it is not good enough") was for the **stock** CLLG
model. Fine-tuned on the 40-page task2 split (`htr/`, PLAN 3b step 3; recipe in memory
`reference_kraken-apple-silicon`), the picture reverses.

**Test set:** PG 88 (Dorotheus) — a gap volume, never seen in training. 20 batch-2 leaves
(pdf pp. 846–865) + the 4 Epistolae leaves (971–974, trimmed to cols 1837–1841): **58,308
reference characters.** Kraken segmented the raw 600 dpi pages itself (default blla), Greek lines
kept by script + side of gutter. Reference = our own plate transcriptions (`raw/pg088/batch2-final`,
shipped `src/greek/dorotheus-epistolae-ad-diversos`).

**Method — every disagreement read at the plate** (exhaustive, no sampling): 833 disagreements,
merged to 633 items, cropped at native resolution, ruled by 6 Opus readers (~870K tokens, ~5 min
wall): K (Kraken = print) 118 · T (transcription = print) 164 · N (neither) 18 · L (not body text)
119 · U (undecidable on this 1-bit JBIG2 copy) 214. Scripts + verdicts: `htr/gaptest/`.

| reading | CER on gap-volume Greek |
|---|---|
| **Fine-tuned Kraken** | **0.50% (U counted right) – 1.08% (U counted wrong)** |
| Our vision-model transcription (Sonnet/Opus + adjudication) | 1.75% + up to 0.57% on U |

**Decision rule (≤2% CER): MET even at the worst case.** Kraken's residual errors: letters 190 chars
(much of it Latin-column bleed on lines the default segmenter ran across the gutter), accents and
breathings 71, spaces 24 (drops the space before »), punctuation 8. The transcription's: 405 chars of
⟨?⟩ gaps (full-width lines the old crops halved, which Kraken read whole), letters 540 (κ read as χ in
this face; dropped/duplicated phrases), and graves "corrected" to acutes, the convention PLAN warns about.

**What it does and does not license:**
- Kraken can now be the **primary** reading for gap volumes, with the vision model as the second witness:
  the 2026-10-14 arrangement turned around. Both are local or cheap, and their errors still differ in kind.
- It does **not** replace the every-page plate read before shipping (exhaustiveness rule, plate gate).
  It makes that read a checklist of disagreements rather than a blind read.
- **The 119 L items are the next job:** layout. The default segmenter merges Latin+Greek lines across the
  gutter and picks up band letters, running heads, headings and footnotes. PLAN step 2 (`REG-YOLOv12s.pt`)
  is now the bottleneck, not recognition.
- Breathing (smooth vs rough) is the main undecidable class on this copy (most of the 214 U); a second
  scan witness (the Google Books copies in `volumes.json`) would settle them if a work ever needs it.
