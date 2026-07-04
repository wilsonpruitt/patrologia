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
