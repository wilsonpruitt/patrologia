# Next session — resume note

*Updated 2026-07-04 (PG gap map session, commit `f5b3b69`).*

## → NEXT SESSION: build the PG tome→author index (Sonnet mechanics)
**Start here — this is the one concrete next step, not a menu.** Phase 2 gap map is DONE (`data/gap-map.json`, commit `f5b3b69`): 33/167 PG tomes are Calfa-covered (5.6M words, real data from `sources/pg/calfa/README.md`); the other 134 default to `status: "gap"`. Those 134 have `author: null` — there is currently NO per-tome author metadata for PG at all (unlike PL's `data/cc-pl-index.json`), which blocks two things: (a) applying the `firstOneKCandidateAuthors` checklist (Origen, Eusebius, Epiphanius, Hippolytus, Methodius, Theodoret, Gregory of Nazianzus — confirmed present in First1KGreek/canonical-greekLit, 2026-07-04 research pass, but not pinned to tome numbers) to actually close any gap tomes, and (b) any sane untranslated-first triage of the gap list.

**Concrete plan for next session:** `data/volumes.json`'s PG entries already carry `links[]` with archive.org/Google-Books IDs per tome. For PL139 this session, archive.org's own item metadata (`pdfinfo`/`archive.org/metadata/<id>`) gave a real, verifiable title (`Sancti Aurelii Augustini...` etc. — matched actual scanned content, not guessed). Do the same for all 167 PG tomes: pull each tome's archive.org item title/description via the metadata API (`https://archive.org/metadata/<id>`), and use THAT as the verified author/work field — not memory, not a scraped Wikipedia summary (tried khazarzar.skeptik.net for a full volume table this session; TLS cert mismatch, dead end — don't retry that domain). Write `data/pg-tome-index.json`, then re-run/extend `scripts/build-gap-map.mjs` to merge it in and finally apply the First1KGreek checklist against real tome-author matches.

**Only after that:** Phase 3 OCR benchmark is done (`benchmark/RESULTS.md`) — Sonnet 5 for Latin bulk gap-OCR (1.48% mean CER), Greek stays on Calfa's pipeline. Per-work triage of partial/mixed PL authors is a separate, unrelated Phase 4 thread if the tome-author index stalls.
Still-open decisions (Wilson): Joel read-through (two Greek-vs-Latin rulings) + Migne biography read-through — independent of the above.

## Done 2026-07-04 (this session)
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
