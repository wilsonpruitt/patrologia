# Next session — resume note

*Updated 2026-07-04 (PG Google Books gap-fill + resolver-merge session).*

## → NEXT SESSION: widen resolve-pg-authors.mjs's description-parser regex
**Start here.** Google Books titles are now folded into the resolver and re-run end to end:

- **Archive.org re-query was a dead end** (tried this session, see history below) — don't re-try without a new signal.
- **Google Books titles → resolver, Signal 3.** `scripts/gapfill-pg-googlebooks.mjs` produces `data/pg-tome-googlebooks.json` (26/35 no-candidate tomes get a real title); `resolve-pg-authors.mjs` now reads it as a third evidence tier for any tome archive.org couldn't match, keeping ALL distinct authors per tome (not just the majority — PG 131 genuinely bundles Euthymius Zigabenus + a fragment of Anna Comnena's *Alexias*, both are kept). Known-bad link `ovIUAAAAQAAJ` (Origen mismatched onto PG 105) is excluded structurally in `gapfill-pg-googlebooks.mjs`'s `EXCLUDE_IDS`, not just flagged.
- **Re-ran the full chain**: `resolve-pg-authors.mjs` → **56/167 tomes with an author signal** (up from 30: 20 high + 36 medium); `build-gap-map.mjs` → **48 gap tomes with author** (up from 25). `firstOneKCandidateAuthors`: **Anna Comnena now confirmed at tome 131** (renamed off "(PG volume unconfirmed)" in `CHECKLIST_AUTHORS`). Still unconfirmed: Epiphanius of Salamis, Methodius of Olympus, Theodoret of Cyrus, John Zonaras (already Calfa-covered, PG 134, so low-priority).
- Still bare (no author signal at all, any source): **069, 071, 072, 073, 097, 110, 125, 126, 150** (9 tomes) plus whichever archive.org-matched tomes had no description signal.

Concrete remainder:
1. **95/132 archive.org-matched tomes have a "rich" description** (>150 chars) but the resolver only trusts two evidence shapes from them (per-volume `vol_NNN - Author` titles, and "t. N-M. Author" spans inside a shared multi-volume TOC blurb) — widen the parser's regex coverage against the unresolved-but-rich descriptions before writing them off. This is now the highest-value remaining lever (bigger pool than the 9 still-bare tomes).
2. The 9 fully-bare tomes (069, 071–073, 097, 110, 125, 126, 150) have no archive.org item AND no usable Google Books title — would need a different signal entirely (e.g. patristica.net's own per-volume blurb text, not yet mined for author names) or manual lookup; low priority, small tome count.
3. Epiphanius/Methodius/Theodoret/Zonaras: dedicated search pass needed (First1KGreek confirms they're transcribed somewhere; they just aren't pinned to a PG tome number yet).

**Only after that:** Phase 3 OCR benchmark is done (`benchmark/RESULTS.md`) — Sonnet 5 for Latin bulk gap-OCR (1.48% mean CER), Greek stays on Calfa's pipeline. Per-work triage of partial/mixed PL authors is a separate, unrelated Phase 4 thread.
Still-open decisions (Wilson): Joel read-through (two Greek-vs-Latin rulings) + Migne biography read-through — independent of the above.

## Done 2026-07-04 (PG Google Books gap-fill session, history)
- **Archive.org re-query dead end**: tried `title:(patrologiae graeca)` (247 docs) and `description:("series graeca")` (215 docs), merged with the original 246 to 275 unique items, re-ran the same volume/identifier/title matching against all 35 gap tomes — 0 new matches. These tomes have no individually-cataloged archive.org item, only the `patrologia-volumes` mega-item (no per-file metadata).
- **Google Books titles worked**: `scripts/gapfill-pg-googlebooks.mjs` fetched the plain-HTML `<title>` tag for every `googlebooks` link in `data/volumes.json` (162 requests, 800ms spaced), filtered Migne's boilerplate ("Patrologiae cursus completus...", "Patrologiae Graecae - Jacques-Paul Migne") → `data/pg-tome-googlebooks.json`, 26/35 gap tomes with a real title (e.g. 067 → Socrates Scholasticus/Sozomen *Historia ecclesiastica*; 091 → Maximus Confessor; 131 → Anna Comnena *Alexias*).
- Caught one mismatched-link case (PG 105 credited to Origen via a stray Google Books ID that's actually Origen's own works) — excluded by ID rather than left as a loose flag.

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
