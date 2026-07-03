# Next session — resume note

*Updated 2026-07-03, end of founding day. Everything below is committed through `8051211`.*

## State: founding day complete

- **Phase 0–2 (Latin) DONE.** Full PL on disk: `sources/pl/tei/` (5,276 files, 87M words, manifest hashed). Calfa PG cloned. Volume registry complete, zero Google-Books-only tomes. PL text-PDF mirror in `raw/mirrors/` (hashed).
- **Phase 4 DONE at author level.** `data/triage/authors-status.json` = canonical; 73 authors / 8.3M words VERIFIED never translated. Flags for the per-work pass in `data/triage/round*-flags.json` (incl. Hericus/Haimo confusion, parked unknown).
- **Domain migne.app PURCHASED** (not wired — no site yet). Architecture: complete-map-first (PLAN.md). Front-end sketch APPROVED (`sketch/`). Biography draft fact-checked (`content/migne-biography.md`) — awaiting Wilson read-through.
- Deep-research + 6 dossiers behind the biography are in `data/migne-bio/`.

## Next moves (pick one; no strict order)

1. **works.json — the site's data spine.** Fuse `cc-pl-index.json` + `authors-status.json` + per-TEI header metadata (title, PL volume, column range from first/last `<pb>`) into one work-keyed store. Handle: the 100 duplicate text-entries (texts shared across works); CPL numbers where derivable (later enrichment fine). This unblocks site build + per-work triage.
2. **Abbo pilot (Phase 6, PL half).** Make the sketch's demo real: chunk `sources/pl/tei/9741.xml` (Canones, PL 139, 473–508, ~11K words) per Acta rules (column-anchor continuity validator), translate (strict-prompt agents; Tier-2 register), assemble + dedupe-scan, render as a static page in the approved design. Gate questions in PLAN.md Phase 6.
3. **Phase 3 OCR benchmark.** Ground truth now local: sample ~25 columns from TEI-covered volumes, pull matching scan pages (archive.org `_jp2.zip`, column-band crop per Ambrose recipe), score Haiku/Sonnet/Opus CER. Greek side vs Calfa Zenodo ground truth (record 20008699).
4. **PG gap map.** Inventory Calfa (33 vols) + First1KGreek PG holdings vs the PG registry → `data/gap-map.json`. (First1KGreek not yet inventoried — that's the research bit.)
5. **Per-work triage** of the `partial` (74 authors / 19.7M words) and `mixed-bucket` (31 / 9.5M) statuses — works lists now complete in `raw/cc-index/`. Haiku agents WITH the telemetry gate; resolve round-flags while at it.

## Open flags / small debts

- PG 075 scan candidate needs series verification on download (`bim_…1859_75` — Graeca or Latina?).
- Author-level tail (ranks 401–1528, ~5.7M words) untriaged — folds into per-work pass.
- Wilson to read the biography; wire migne.app DNS only when a site exists.
- Disk was ~19GB free; TEI took 700MB. Full scan mirrors still want an external drive someday.
- No git remote (Wilson decides if/when; ask before creating).
