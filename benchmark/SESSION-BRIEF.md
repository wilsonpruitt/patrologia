# Phase 3 — Vision-OCR model benchmark — SESSION BRIEF

*Handoff written 2026-07-04. Read this, then `PLAN.md` §"Phase 3" (lines ~55–63) and `next-session-resume.md`. This is the authoritative kickoff for a fresh session dedicated to Phase 3.*

## Model & posture
**Run this session on Sonnet.** Per the model plan in `patrologia.md`, Phase 3 is *Sonnet mechanics* — scripted OCR + scoring, one cheap model-choice reading at the end. Do **not** burn Opus/Fable here. Keep the loop tight: prep → OCR → score by script → table.

## What you're deciding (the whole point)
Measure Claude models' **CER/WER on real Migne columns** against existing ground truth, so we pick the OCR gap-filler by data, not vibes.

**Decision rule (from PLAN):** the *cheapest* model with **CER ≤ ~1% on Latin body text** does bulk gap-OCR; a stronger model is reserved only for flagged/hard pages. For Greek: if *no* Claude model beats ~2% CER, the correct answer is "run/borrow the Calfa pipeline, don't vision-OCR" — that is a valid, expected outcome, not a failure.

Models to compare, cheapest-first: **Haiku 4.5 → Sonnet 5 → Opus 4.8 (/Fable only if needed)**.

## Two arms — do both

### Arm A — Latin
- **Ground truth is already local:** `sources/pl/tei/*.xml` (5,276 TEI works, Corpus Corporum). The TEI transcription IS the reference text.
- **Sample ~25 columns** across typography eras / print quality, drawn from volumes where TEI exists. Spread the sample — early vs late PL, clean vs damaged plates.
- **Scans:** only `raw/scans/pl139/` and `raw/scans/pg139/` are local right now. For sampled columns in other volumes you must fetch the scan PDF first — always via archive.org `{id}_jp2.zip` or the text-PDF, **never IIIF bursts** (see `PLAN.md` preservation rules and `reference_archive-org-iiif`). Crop the single column to an image for the model.

### Arm B — Greek (polytonic — expect it to be much harder)
- **Ground truth is NOT downloaded yet — this is your first step.** Fetch the Calfa OCR **ground-truth** set from **Zenodo record `20008699`** (100 images + pageXML). ⚠️ Note the record-number confusion in the docs: `20008699` = ground-truth (what you want); `19915273` = tagged corpus; PLAN.md's older "7296539" reference is stale — use **20008699**. Confirm the README at `sources/pg/calfa/README.md` (badges list both).
- The local `sources/pg/calfa/PGxxx_text.txt` files are **text-only, no page images** — they cannot serve as an OCR benchmark. You need the Zenodo image+pageXML pairs.
- Same protocol as Arm A: model transcribes the page image, score CER/WER vs the pageXML ground truth. Calfa's own published baseline is **CER 1.05% / WER 4.69%** — that's the bar to beat.

## Scoring (must be scripted, not eyeballed)
- No OCR/scoring script exists yet (`scripts/` has none). Write `benchmark/score.mjs`: standard **CER = Levenshtein(hyp, ref) / len(ref)**, WER on whitespace tokens.
- **Normalize NFC before diffing** — hard-won lesson from the Joel lacuna sweep: un-normalized polytonic Greek produced 5 false diffs. Apply to both arms.
- Decide up front how you treat the Migne apparatus / footnotes and column furniture (signature lines, running heads) — exclude them from the scored region consistently, or you'll measure layout noise, not OCR.

## Discipline rules (carry over verbatim — `feedback_vision-ocr-discipline`)
Transcribe only what's on the plate. `[?]` for unreadable — **never fabricate a plausible clause**. Small batches (**3 leaves per pass**). Multiple unclear words in a row = stop and escalate resolution, don't push through.

## Deliverable
`benchmark/RESULTS.md` — a **CER/WER × model × cost** table for both arms, committed, plus a one-paragraph recommendation applying the decision rule (which model for Latin bulk, and the Greek verdict). Update `data/gap-map.json` targets are Phase 2's job, not this session — stay scoped to the benchmark.

## Gotchas already known (don't rediscover)
- **Column-map / leaf-offset drift:** scan-leaf ≠ PDF-page−1, and the offset can *drift within a volume* (PG 139 tail drifted +2). Verify column identity with **distinctive tokens only**, never generic words.
- **Garnier post-fire reprints have different column numbers** than Migne originals (Ambrose col 45→41) — if you cite a column, note which printing.
- Some scan copies **clip line-initial characters** on a margin; keep a second copy if a reading looks truncated (this is why pg139 has two PDFs).
