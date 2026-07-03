# Next session — resume note

*Updated 2026-07-03 (PG pilot session — Joel).*

## State

- **Phase 6 PG PILOT DONE 2026-07-03: Joel, *Chronographia compendiaria* (PG 139, 223–288) translated end-to-end** — first English translation of a complete Byzantine world chronicle (verified untranslated by a 28-search telemetry-gated agent; the only English of anything in PG 139's untranslated works is one blog excerpt of Nicetas of Maroneia).
  - **Page:** `site/pg/139/chronographia/index.html` — 33 column pairs, Greek in GFS Didot, English facing; anchors follow the citation scheme (`migne.app/pg/139/224` → `#c224`). Preview: `cd site && python3 -m http.server 8123`. Screenshot-checked (renders clean; favicon 404 is the only console noise). **Wilson read-through PENDING.** Minor polish candidate: within a column pair the English block sits a hair lower than the Greek (font metrics).
  - **Pipeline (all new, PG side):** `pg-page-column-map.mjs` (Calfa $8 pages → Migne columns, scan-verified; Greek/Latin swap sides per page so greekCol is read empirically per leaf) → `chunk-work-pg.mjs` (sentence-cut, column-anchored, applies lacuna patches NFC-normalized) → 2 strict-prompt agents + hand anchor chunk → `verify-english-pg.mjs` (frontmatter/anchors/ratio [1.1–2.0]/dedupe) → `build-work-page-pg.mjs` (column-pair layout) → `index-work-pg.mjs` (33 column incipits; scripture/fontes deferred — Calfa has no apparatus layer).
  - **Gate answers (Greek half):** (1) Calfa quality — GOOD but has **systematic lacunae: bottom/overhang Greek lines dropped** (9 patches for Joel, all restored from scan renders at 200–260dpi and recorded with provenance in `data/calfa-patches/joel-chronographia.json`). Detection recipe: Greek tokens in the Latin-column x-range of scan OCR + agent sense-checks vs the Latin verifier; VERIFY candidates against NFC-normalized Calfa (naive greps gave 5 false positives). (2) Latin-verifier workflow (Zelzer) — WORKS: `extract-latin-verifier.mjs` pulls Allatius per column pair from the scan djvu.xml; agents adjudicated ~30 numerals/names against it. (3) EN/Greek ratio ≈ **1.2–1.35×** (chronicle Greek runs leaner than Abbo's 1.5× Latin) — recalibrate PG cost estimates DOWN. (4) Throughput: 2 agents × 5–6 chunks, no relaunches, all validators first-try.
  - **Cruces:** 180 logged in `src/english/joel-chronographia/cruces.md` (NEW convention — per-work crux file, not session-transcript-only as in Abbo). ~8 flagged for diff-vs-scan (σωθήσεται θ/τ, Ozias νθʹ, Seven Sleepers τῤʹ→302-vs-372, Eli ϟʹ, Zambri ιηʹ, θέόηλον, Jacob's daughters μίαν, "Junor").
  - **Before deploy:** same as Abbo — diff-vs-scan spot pass (start from the flagged cruces), landing page, resolver, migne.app DNS. Also: PG resolver must normalize either column of a pair to the same spread (Ordo rerum cites the LATIN column; scholars cite the Greek).
- **PG 139 intelligence** (in `data/pg-works.json`): Nicetas of Maroneia = Dialogue I + fragments only (full work = CCSG 92 2021, Greek-only, untranslated — strong next candidate; page must state the fragment situation). Isidore Glabas's 4 Marian sermons untranslated, sermon-by-sermon publishable. **John of Citrus is NOT in PG 139** (cross-ref only; text = PG 119, 960–985; attribution partly Chomatenos — flag before translating).
- **Abbo (PL half)** unchanged: read-through approved; diff-vs-scan before deploy still open.
- Earlier state (works.json, TEI corpus, triage, biography, sketch) — see git log and prior resume-note versions.

## Next moves

1. **Wilson read-through of Joel** (register + the 8 flagged cruces + column-pair alignment polish). New construction classes → translation-style.md per rule 5.
2. **Diff-vs-scan pass** for BOTH pilots (Abbo + Joel) — Joel's flagged cruces give the starting list; the Ambrose column-band recipe applies. This also decides whether Calfa pages need a systematic bottom-line/overhang sweep per volume (detector exists in the column-map script lineage).
3. **Phase 3 OCR benchmark** (unchanged): ~25 TEI-covered columns vs scan crops, Haiku/Sonnet/Opus CER; Greek side vs Calfa Zenodo ground truth (record 20008699).
4. **PG gap map**: Calfa 33 vols + First1KGreek inventory vs the PG registry → `data/gap-map.json`.
5. **Per-work triage** of partial/mixed PL authors (unchanged) — can now write into works.json slots.

## Open flags / small debts

- Joel: 3 tail pages' greekCol parity-inferred (149–151) — confirm at diff-vs-scan (chunk 0011 flagged).
- calfa-patches: 4 of 9 patches are `appliedPostChunking` (edited into chunks 0001/0002/0004/0005/0008 directly) — **a re-chunk re-applies them at source and SHIFTS chunk boundaries; re-verify English after any re-chunk.**
- PG 075 scan series check; author-tail triage; biography read-through; migne.app DNS — all unchanged.
- Scan artifacts for PG 139 live in `raw/scans/pg139/` (~120MB, gitignored, re-downloadable from archive.org `patrologiaecurs63migngoog`).
- No git remote (ask Wilson before creating).
