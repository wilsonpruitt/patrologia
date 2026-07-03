# Next session — resume note

*Updated 2026-07-03 (Abbo pilot session).*

## State

- **Phase 6 PL PILOT DONE 2026-07-03: Abbo of Fleury, *Canones* (PL 139, 473A–508A) translated end-to-end** — first English translation (verified: no English exists; CNRS critical ed. is French; the one complete MS has 44 chapters vs Migne's 52 — apparatus says so honestly).
  - Pipeline built + validated: `scripts/chunk-work.mjs` (11 chunks, column-anchor/note/word-conservation validators), `scripts/verify-english.mjs` (frontmatter/anchors/notes/sections/ratio + dedupe scan), `scripts/build-work-page.mjs` (approved design; parallel Latin|English; gilt anchors both margins).
  - Translation: chunk 0000 hand-done as style anchor, chunks 1–10 via 2 strict-prompt agents (Acta prompt) — **zero self-throttle, all validators pass first try**. Agent crux logs preserved in session transcript; corrupt printed-Latin passages rendered literally per Tier-2.
  - Page: `site/pl/139/canones/index.html` (54 sections, 132 anchors/side, ids follow citation scheme `#c473a`). Preview: `cd site && python3 -m http.server 8123`.
  - **Gate answers:** (1) chunk metadata resolves citations — YES (colContext/colFirst/colLast + anchor ids; still need the site-level `/pl/139/473a` → work-page redirect layer). (2) throughput — YES, better than projected (5 chunks/agent, ~8–14 min, ~100–125K tokens, no relaunches). (3) English runs **~1.5× Latin words**, not the projected 1.1–1.2× — recalibrate cost/print estimates. (4) pipeline fix folded in: dedupe scan must whitelist Latin-side repetitions (canon collections quote the same authority twice).
  - **Before any deploy:** diff-vs-scan spot verification of the CC transcription against the PL 139 plates (Ambrose pattern) not yet done; no landing page; no resolver; migne.app DNS unwired. Wilson read-through of the translation pending (esp. the corrupt-Latin cruxes).
- **Indexing-from-day-one DECIDED 2026-07-03 (Wilson's call: track from the start, no retroactive passes).** `scripts/index-work.mjs` runs after verify on every shipped work → `data/index/pl/<idno>.json`. Tracks facts only (citations/columns/heads — see CLAUDE.md rule 9); theme tags + source-name vocab deliberately deferred until a corpus slice exists to derive them from. Abbo indexed: 21 scripture (dual OSIS refKey + verbatim Migne display), 37 fontes, 54 heads, 0 unparsed.

- **works.json DONE 2026-07-03.** `data/works.json` = the site's work-keyed spine: 5,204 unique works / 5,277 texts / 85.5M unique words, each with title, PL volume, column range (`colFirst`/`colLast`), triage status, TEI hash. Rebuild: `node scripts/build-works.mjs`. Findings baked into its `note` field:
  - The "100 duplicate texts" were NOT shared-across-works — Corpus Corporum cross-lists dubia/spuria under every candidate author (and collection pieces under both "Auctores varii" and the individual). Merged: one record per workIdno with an `attributions[]` array (94 multi-attribution works). True unique-word total is 85.5M, not 87.1M.
  - **~27% of texts (1,439) have non-monotonic `<pb>` sequences — mostly benign structure** (bare-number marks step back a column at page-pair boundaries; parallel versions; appendices) plus a couple of genuine source typos (7728 ends `…1199A, 1120A`). The Phase 5 chunker continuity validator must tolerate these patterns, not assume strict ascent. `pbMonotonic` flag per text; `colLast` = highest mark (typo-robust).
  - 71 tiny texts (~50K words total) have zero pb marks; 5 files have Roman-numeral/odd pb formats (see `anomalies.badPbSamples`); 21336 (Chaussier) still the sole missing TEI.
  - V8 gotcha for future TEI sweeps: regex-extracted substrings retain the whole parent XML string — flatten (Buffer round-trip) or the sweep OOMs at the 1GB heap cap.
- **Phase 0–2 (Latin) DONE.** Full PL on disk: `sources/pl/tei/` (5,276 files, 87M words, manifest hashed). Calfa PG cloned. Volume registry complete, zero Google-Books-only tomes. PL text-PDF mirror in `raw/mirrors/` (hashed).
- **Phase 4 DONE at author level.** `data/triage/authors-status.json` = canonical; 73 authors / 8.3M words VERIFIED never translated. Flags for the per-work pass in `data/triage/round*-flags.json` (incl. Hericus/Haimo confusion, parked unknown).
- **Domain migne.app PURCHASED** (not wired — no site yet). Architecture: complete-map-first (PLAN.md). Front-end sketch APPROVED (`sketch/`). Biography draft fact-checked (`content/migne-biography.md`) — awaiting Wilson read-through.
- Deep-research + 6 dossiers behind the biography are in `data/migne-bio/`.

## Next moves (pick one; no strict order)

1. **PG pilot (Phase 6, Greek half).** The Latin half is done; the untested gate question is the Greek-with-Latin-verifier workflow (Zelzer pattern). Pick an untranslated PG work with Calfa coverage, run the same chunk→translate→verify→render loop.
2. **Phase 3 OCR benchmark.** Ground truth now local: sample ~25 columns from TEI-covered volumes, pull matching scan pages (archive.org `_jp2.zip`, column-band crop per Ambrose recipe), score Haiku/Sonnet/Opus CER. Greek side vs Calfa Zenodo ground truth (record 20008699).
3. **PG gap map.** Inventory Calfa (33 vols) + First1KGreek PG holdings vs the PG registry → `data/gap-map.json`. (First1KGreek not yet inventoried — that's the research bit.)
4. **Per-work triage** of the `partial` (74 authors / 19.7M words) and `mixed-bucket` (31 / 9.5M) statuses — works lists now complete in `raw/cc-index/`; per-work triage can now write straight into works.json's `translation.workStatus`/`englishState` slots. Haiku agents WITH the telemetry gate; resolve round-flags while at it.

## Open flags / small debts

- PG 075 scan candidate needs series verification on download (`bim_…1859_75` — Graeca or Latina?).
- Author-level tail (ranks 401–1528, ~5.7M words) untriaged — folds into per-work pass.
- Wilson to read the biography; wire migne.app DNS only when a site exists.
- Disk was ~19GB free; TEI took 700MB. Full scan mirrors still want an external drive someday.
- No git remote (Wilson decides if/when; ask before creating).
