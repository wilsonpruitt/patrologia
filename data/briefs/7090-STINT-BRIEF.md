# Innocent I, PL 20 — translating stint brief (Wilson: Opus, go, 2026-09-24)

Your launch message gives: work idno, chunk range, page range, stint tag (T1..T7).
Work in `~/patrologia`. Translate Latin chunks of `src/latin/<idno>/` to `src/english/<idno>/` (same filenames; mkdir if needed).

## Read first
1. `translation-style.md` — ALL of it, incl. "Papal letters — Innocent I" P0–P3 and Patterns 11–19, 7a (negation).
2. `translation-runbook.md` lines ~308–420 (agent prompt template: sacred markers, known false positives, em-dash rule, do-not-stop-early).
3. Style anchor pair: `src/latin/9741/0000.md` + `src/english/9741/0000.md`. Copy each Latin chunk's frontmatter VERBATIM.
4. CLAUDE.md "BIAS TO EXHAUSTIVENESS": open EVERY page of your range at the plate ONCE, collate text and read the notes in the same visit. No sampling.

## Plate
Scan `raw/scans/pl020/pl020.pdf`. PDF page = floor((col+11)/2); printed corner numbers confirm it (check them first on every page). Pre-render YOUR pages only, into your own scratch dir `SCRATCH/<tag>/`:
`pdftoppm -f N -l N -r 300 -png raw/scans/pl020/pl020.pdf SCRATCH/<tag>/p` (one page at a time; 8 GB Mac, no parallel renders). Crop the FULL page width for footnotes; notes sit under both columns. Never fetch anything online.

## Notes (P0)
- Latin `[cn: <letter> | …]` are already injected (486 auto-placed). Keep each verbatim in the English chunk at the same spot AND add an English `[nt: …]` twin right after it, per P0 (bare variant words stay Latin italic; expand Merl.→Merlin, Crab.→Crabbe, Quesn.→Quesnel, Garn.→Garnier, Isid.→the Isidorian collection, Rom.→the Roman edition; manuscript sigla stay). No `[sic:]/[var:]/[cj:]` on a Coustant reading.
- UNPLACED notes: `data/briefs/7090-UNPLACED-NOTES.md` and `7091-UNPLACED-NOTES.md`. Take those whose page falls in your range. With the page open, place each BY EYE by adding `[cn: <letter> | text]` to the Latin chunk (src/latin/<idno>/NNNN.md, at the printed key) and to the English with its `[nt:]` twin. If you cannot place one, do NOT guess: log it in your cruces file.
- Check the per-page a,b,c… sequence on every page: a gap = a missed note. Report gaps, and compare against the recovered notes; if you find a note the sweep missed, add it (Latin `[cn:]` + English twin) and log it.
- Truncated notes at page foot (p.244 g, 269 d, 272 c, 287 h, 306 l, 310 e): translate what is printed, mark nothing complete by guess.
- Page 245's left corner prints 379 for 479: Migne's own misprint.

## Plate reads and cruces
- Write `src/english/<idno>/cruces-<firstChunk>.md` (column + reading + your note) for garbled type. Render literally; never repair a sentence into sense.
- Record every page you read in `data/briefs/<idno>-PLATE-READS-<firstChunk>.json` (your OWN file, never `data/plate-reads.json`); follow the format used by an existing `data/briefs/*-PLATE-READS-*.json` (look at one). If none exists, use {"pages":[{"page":N,"cols":[...],"result":"full","corners_checked":true}]}.
- `[sic:]/[var:]` only on columns you read at the plate. Your attribution guess (ours vs Migne's) is NOT evidence; the plate is.

## 7091 only (P1)
Translate from the GREEK where Migne prints it (Latin as check; differences → cruces); PG register rules apply. The one Latin-only letter from the Latin. Byline handled later.

## Finish
- Count column anchors and notes in each English chunk vs Latin; run `node scripts/verify-english.mjs <idno>` for your chunks if it supports it (else report). Do NOT run build, deploy, index-work, or git commit. Do not touch other stints' chunks.
- Report (under 250 words): chunks done, pages read, notes placed/added/unplaced, cruces count, any transport or tooling problem.
- Do not stop early. Six chunks of ~1,150 words at full fidelity is routine.
