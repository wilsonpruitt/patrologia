# Next session — resume note

*Updated 2026-07-04 (PG tome→author index session).*

## → NEXT SESSION: widen the 35 still-unmatched PG tomes, then re-run author resolution
**Start here.** The PG tome→author index is now built and merged into `data/gap-map.json`. Concrete remainder:

1. **35 tomes have NO archive.org candidate at all**: 067–069, 071–076, 078–079, 088, 091, 097–098, 100, 103, 105, 110, 125–127, 130–131, 133, 137, 142, 149–150, 152, 155–156, 158, 160–161 (see `data/pg-tome-index.json` entries with `status: "no-candidate"`). The current search only queried archive.org for the title phrase `"patrologiae cursus completus graeca"` (`data/cache/ia-search-pg.json`, 246 docs) — widen with a second query dropping "cursus completus" or matching `"series graeca"` alone, and/or try the Google Books IDs already in `data/volumes.json`'s `links[]` (Google Books API is unauthenticated-quota-exhausted — 429 with no key — but the plain HTML page at `books.google.com/books?id=<id>` returns a `<title>` tag; it was generic for the one ID tried this session, not yet tried across all 35 gap tomes' Google Books links).
2. **95/132 matched tomes have a "rich" archive.org description** (>150 chars) but only 30 currently resolve to a clean `author` field (`data/pg-tome-authors.json`) — `resolve-pg-authors.mjs` only trusts two evidence shapes (per-volume `vol_NNN - Author` titles, and "t. N-M. Author" spans inside a shared multi-volume TOC blurb). Worth widening the parser's regex coverage against the unresolved-but-rich descriptions before writing them off.
3. Only after (1)+(2): re-run `node scripts/build-pg-tome-index.mjs && node scripts/resolve-pg-authors.mjs && node scripts/build-gap-map.mjs` and re-check `firstOneKCandidateAuthors.stillUnconfirmed` (currently: Epiphanius, Methodius, Theodoret, Zonaras, Anna Comnena — none pinned to a tome yet).

**Only after that:** Phase 3 OCR benchmark is done (`benchmark/RESULTS.md`) — Sonnet 5 for Latin bulk gap-OCR (1.48% mean CER), Greek stays on Calfa's pipeline. Per-work triage of partial/mixed PL authors is a separate, unrelated Phase 4 thread.
Still-open decisions (Wilson): Joel read-through (two Greek-vs-Latin rulings) + Migne biography read-through — independent of the above.

## Done 2026-07-04 (PG tome→author index session)
- **`data/pg-tome-index.json` built** (`scripts/build-pg-tome-index.mjs`): matched 132/167 PG registry tomes to an archive.org item (up from the 47 already linked in `volumes.json`) by cross-referencing a fresh archive.org title search (`data/cache/ia-search-pg.json`, 246 docs matching "patrologiae cursus completus graeca") against three signals — the search doc's `volume` field, `_vol_NNN[a-c]` in its identifier, or "Volume NN" in its title — then pulled each matched item's own `/metadata/<id>` record (its `description` field is archive.org's own catalog note, e.g. tome 010's "S. Gregorius Thaumaturgus, S. Hippolytus Portuensis..." — NOT scraped from a third party, NOT from memory).
- **`data/pg-tome-authors.json` built** (`scripts/resolve-pg-authors.mjs`): turns the raw index into a clean `tome -> author` field. Caught and fixed a real bug en route — several archive.org items (`patrologiaecursu04/10/15/16/36/37/38/45/66/93mignuoft`) share the IDENTICAL multi-volume TOC blurb ("t.3-4. Dionysius...--t.15. Origenis.--t.16. Origenis (3 pts)...--t.35-38. Gregorius Nazianzenus..."); naively substring-matching a checklist author against that blurb would credit e.g. "Origen" to tome 004 (wrong — 004 is Dionysius the Areopagite, t.3-4). The resolver now parses `t. N[-M]. Author` spans and only credits a tome when its own number falls inside the span. 30/167 tomes now have a resolved author (20 high-confidence direct hits, 10 medium-confidence span matches).
- **`firstOneKCandidateAuthors` in `data/gap-map.json` is now computed, not asserted**: 4 of 9 checklist authors pinned to real tome numbers — **Origen → 011, 013, 014, 015, 016-1, 016-2, 016-3, 017**; **Eusebius of Caesarea → 020, 021, 023, 024**; **Gregory of Nazianzus → 036, 037, 038**; **Hippolytus → 010** (combined-author tome, one name among several — not a clean single-work tome). Epiphanius, Methodius, Theodoret, Zonaras, Anna Comnena still unconfirmed (see next-session item 3). 25/134 gap tomes now carry a verified author field total (`gapTomesWithAuthor`).
- Not yet committed to git this session — do that before touching anything else.

## Done 2026-07-04 (Stripe/OG session, earlier)
- **Support tiers now Migne-native Stripe links** (commit `b764b0f`, deployed): were reusing Acta products; created live Wroot Labs products/prices/links — $10 column / $300 work / $10-mo patron, each tagged metadata `project=migne`+`tier`. Old Acta links untouched.
- **OG image + social meta** (commit `e9d5ea7`, deployed, verified live): `site/og.png` (1200×630, shelf + PG 162 ghost); `site/og.html` = regen source; OG/Twitter tags added to `site/index.html` AND `scripts/build-landing.mjs` so rebuilds keep them.

## State

- **LANDING + RESOLVER BUILT 2026-07-03** (commit `8b7cf26`, per `site/landing-resolver-spec.md` — all deliverables + acceptance checklist run in browser).
  - `scripts/build-landing.mjs` → `site/index.html` + `site/resolver-data.json` (13KB). Englished set scanned from built pages; ledger from registries (85,525,824 / 387 / 73); shelf server-rendered with PG 162 ghost; run it after every work ships. **New works must also be prepended to the `RECENT` list at the top of the script** (editorial, newest first — the build fails loudly if a built page is missing from it).
  - `site/resolve/index.html`: path or query params (`s`/`v`/`c`, plus `vc` for the no-JS form), PL nearest-preceding anchor, PG pair normalization (223→#c224 verified), miss/ghost/invalid pages.
  - **`vercel.json` lives in `site/`, NOT repo root** — deliberate deviation from the spec: the deploy root is `site/` (`cd site && npx vercel`) and Vercel reads rewrites from the deploy root only.
  - Both work-page builders now emit the nearest-anchor hash fallback + the analytics snippet; pages rebuilt, verifiers clean. `volumes` map in resolver-data includes ALL volume numbers (scan-less ones as `{}`) so range validation works.
  - **Rewrites don't exist on the local http.server** — citation paths 404 locally; test via `/resolve/?s=…&v=…&c=…`, and re-test path form after first deploy.
  - **DEPLOYED — migne.app IS LIVE (2026-07-03, Wilson's per-action OKs given in-session).** Vercel project `migne` on team wilson-pruitts-projects, prod deployed via `cd site && npx vercel --prod`, domains migne.app + www attached (Cloudflare A/CNAME, DNS-only), Web Analytics toggled ON by Wilson (script serves 200). Citation rewrites verified live: `/pl/139/473a` → Abbo `#c473a`, `/pg/139/223` → Joel `#c224`.
  - **Support section added post-launch same day** (commit `626a5f1`, Wilson authorized): Acta pattern, SAME Stripe payment links as actasanctorum ($10/$300/$10-mo), migne copy ("a column / a work / patron"), queue count interpolated from the rollup. Styles live in `sketch/styles.css` (base) so work-page rebuilds preserve them.

- **DIFF-VS-SCAN DONE FOR BOTH PILOTS 2026-07-03** (commits `3cf8f84` Joel, `c84cdd4` Abbo). This closes the pre-deploy verification debt from both pilot sessions.
  - **Joel: all 21 flagged cruces adjudicated against the plates** (verdict-by-verdict record appended to `src/english/joel-chronographia/cruces.md`; page rebuilt, verifier clean, re-indexed — 202 cruces).
    - **Real corrections landed:** Ozias 52 (was 59 — Calfa νθί = νβʹ), Zambri 12 (was 18 — ιᾔʹ = ιβʹ), Eli's ϟʹ=90 plate-verified (koppa misread as ἱ), βέβηλον (was θέόηλον — broken type), Συνέπων (was Τυνέπων), κοιτωνίσκων (was κοιτώνων), Tzimiskes ἡμέρας λʹ, Seven Sleepers τβʹ=302 plate-verified on BOTH columns.
    - **Two Greek/Latin divergences in Migne himself** (not OCR): Joram ἔτη βʹ vs Latin *duodecim*; Michael VII χρόνους ζʹ vs Latin *sex*. Per the Greek-primary/as-printed policy the English now follows the printed Greek (two / seven) with the Latin noted — **flag these two for Wilson's read-through; if he prefers Latin-side readings the policy needs a stated exception.**
    - **Three NEW lacuna patches (10–12,** all appliedPostChunking): Ochozias's upper-story clause (0240), Nestorius's `(υἱὸς` (0256), Maximinus's wax/bones line (0256→0257 seam). 13 patches total; patches 5/6/7/8 plate-confirmed verbatim en route.
    - **Scan-copy gotcha:** `patrologiaecurs63migngoog` clips line-initial characters on some left margins; a second copy (`patrologicursus73migngoog`, 86MB, now in `raw/scans/pg139/`, offset +4 pp, full margins) settled the two clipped readings (Maximinus γʹ, Συνέπων Σ).
    - **Column-map tail fixed:** leaf values for Calfa pages 146–151 were +2 (token verification had matched generic words — lesson: verify with distinctive tokens only); corrected in `data/pg-column-maps/pg139.json`. The three parity-inferred greekCols (284/285/288) were all CORRECT — chunk 0011's anchors stand.
  - **Abbo: spot check PASS** (`src/english/9741/diff-vs-scan.md`): 3 sample pages, 28 phrases, anchor-placement check — TEI faithful to plates. Known TEI boundary: æ→ae normalization + **Mabillon's footnotes absent** (deliberate; would need OCR from plates if the site ever wants Migne's full apparatus). PL 139 scan in `raw/scans/pl139/` (57MB, gitignored).
- **Joel read-through by Wilson still PENDING** — now with the two Greek-vs-Latin policy flags above plus register/alignment as before. Page: `site/pg/139/chronographia/` (preview: `cd site && python3 -m http.server 8123`).
- **Abbo read-through was already APPROVED**; with diff-vs-scan done, Abbo's remaining pre-deploy items are site-wide, not work-level.
- Pipeline/state detail from the pilot sessions: see the 2026-07-03 pilot entries in git log and `patrologia.md` memory; earlier state (works.json, TEI corpus, triage, biography, sketch) in prior resume-note versions.

## Next moves

1. **Wilson read-through of Joel** — register + column-pair alignment + the two Greek-vs-Latin divergence rulings (Joram, Michael VII).
2. **Phase 3 OCR benchmark** (unchanged): ~25 TEI-covered columns vs scan crops, Haiku/Sonnet/Opus CER; Greek side vs Calfa Zenodo ground truth (record 20008699).
3. **PG gap map**: Calfa 33 vols + First1KGreek inventory vs the PG registry → `data/gap-map.json`.
4. **Per-work triage** of partial/mixed PL authors (unchanged) — can now write into works.json slots.

## Open flags / small debts

- Consider a **systematic bottom-line/overhang sweep per Calfa volume** before future PG works: Joel yielded 13 patches, 3 of them found only at diff-vs-scan. The detector (Greek tokens in Latin-column x-range) plus a last-line-of-column check would catch most up front.
- Scan-leaf ≠ PDF-page−1 cannot be assumed constant within a volume (PG 139 drifts by 2 in the tail); column-map verification must use distinctive tokens.
- PG 075 scan series check; author-tail triage; biography read-through — all unchanged.
- Scan artifacts: `raw/scans/pg139/` (~210MB, two copies) + `raw/scans/pl139/` (57MB), all gitignored, re-downloadable.
- No git remote (ask Wilson before creating).
