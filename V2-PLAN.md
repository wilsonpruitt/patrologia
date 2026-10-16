# migne.app 2.0 — reader tools

Drafted 2026-10-15. **Status: RULED 2026-10-15. Phase 0 TOOLING BUILT 2026-10-15 (see "Phase 0 as built"); nothing else started.** Wilson's rulings are in the last section. Next action: run `mark-sentences.mjs` on the next translated work and measure the cost.

## Origin

Reader feedback via the Wroot Labs contact form (Rabira Dame, 2026-10-14):

1. *"a built in grammar/syntax and lexicon so that when you click a word or highlight a sentence you can see the word, as sometimes the translation can mistranslate a word or translate a word differently."*
2. *"a tool to where we can make a account and highlight texts and make notes."*
3. Browse models he pointed to: syriaccorpus.org/browse.html, aquinas.cc, mlat.uzh.ch/browser.
4. A mobile app (iOS/Android, Catena-like: commentaries, texts, liturgical calendar). **DEFERRED** — Wilson: that app would be holistic across the whole Press corpus, not migne.app alone. Out of scope here, but it constrains #2 (see Phase D).

The underlying need in #1 is **verification**: a reader who distrusts a rendering wants to check it against the Latin/Greek without leaving the page. Every design choice below should serve that, which is why honesty about ambiguity outranks polish.

## What the repo already gives us (verified 2026-10-15)

- **Paragraph alignment is already 1:1.** `src/latin/<id>/NNNN.md` and `src/english/<id>/NNNN.md` carry the same paragraph count (spot-checked 10047, 10080), sharing column anchors `[1025A]` and `## ` heads. `scripts/verify-english.mjs` already runs parity checks (guillemets, question marks) against the Latin twin. This is the spine every 2.0 feature hangs on.
- **The site is static** (`site/`, Vercel, built by `scripts/build-*.mjs`). Phases A–C keep it static by precomputing at build time. Only Phase D needs a backend.
- ~181 works have English in `src/english/` (PL + PG). PG English lives in `src/greek/` / PG pipeline (`build-work-page-pg.mjs`).
- `scripts/build-greek-lexicon.py` exists but is a **form-frequency list** from Calfa OCR (for OCR triage), not a lexicon. Don't mistake it for Phase C groundwork.

## Phase 0 — convention change (do FIRST, before the next translated work)

**Why it can't wait:** this is the same failure as the un-anchored notes on *The Church in Palestine* (CLAUDE.md, 2026-08-14). Which English sentence renders which Latin sentence is known for certain only at translation time. Every work shipped without sentence anchors becomes a retrofit-by-inference later.

1. **Stable paragraph IDs.** Each paragraph gets an ID that survives re-chunking and text corrections (plate patches, polarity fixes). Proposal: `<textIdno>.<chunk>.<para>` assigned once at chunk time and carried in both files; never renumbered after a work ships — a later split takes a suffix (`.4a`). Needed by Phases B and D.
2. **Sentence anchors at translation time.** The translation prompt (`translation-runbook.md` template) asks the agent to emit a sentence-segment marker in the Latin and the matching marker in the English, e.g. `⟦s3⟧`, many-to-one allowed (two Latin sentences → one English is fine; record it, don't force 1:1).
3. **`verify-english.mjs` gains a check:** marker sets match per paragraph; no orphans; order monotonic.
4. **Build strips markers** from the plain reading view; Phase B consumes them. ⚠ Markers reach the reader as raw brackets unless a builder transforms them (has happened twice on PG pages — CLAUDE.md, band letters). Teach `scan-raw-markers.mjs` the new marker in the same commit that introduces it.
5. **Cost check:** markers add a little to every translation stint. Measure on the first work; it must not slow the ship rate, since new works are the funding lever (CLAUDE.md, 2026-08-18).

Acceptance: next translated work ships with markers in both languages and passes the new check. Retrofit of shipped works is Phase B's job, not Phase 0's.

### Phase 0 as built (2026-10-15)

- `scripts/lib/sentence-markers.mjs` — marker grammar, `stripMarkers`, `compareMarked`.
- `scripts/mark-sentences.mjs <idno|dir> [--greek]` — stamps `⟦pN⟧` / `⟦sN⟧` into the SOURCE chunks (runbook step 1a′). **Deviation from the proposal, for Wilson's notice:** the source-language markers are stamped by script, not emitted by the translation agent. Reason: the Latin twin is a regenerable TEI transform, and an agent editing it risks drift; the agent now only mirrors markers into the English. A bad machine break is repaired in the English with a merge marker (`⟦s2+s3⟧`). Round-trip tested on 9741 (stripping markers restores every chunk byte-for-byte; 160 paragraphs, 516 sentences, in a scratch copy, not written to `src/`).
- `verify-english.mjs` and `verify-english-pg.mjs` — new check (IDs equal, coverage 1..n, order, no orphans); no-op when neither side has markers; 9741 still verifies. Negative cases (orphan, out-of-order, mismatched ID) caught.
- `build-work-page.mjs` / `build-work-page-pg.mjs` strip markers; `scan-raw-markers.mjs` flags a raw `⟦` in built HTML.
- Runbook: step 1a′ and a prompt-template paragraph.
- **Not yet done:** the cost check (item 5) — needs the first marked work. **Before that work ships, audit the other readers of `src/latin` / `src/english`** (`index-work*.mjs`, `plate-gate`, `build-cruces`, `polarity-record`, `extract-quotations`, `lemma-inventory`, `marker-reconcile`, `decade-check`) for marker tolerance; only the verifiers and the two page builders have been taught so far.

## Phase A — browse tree (small, visible, static)

Rabira's three links are all *navigation* models: syriaccorpus and mlat.uzh.ch are dense author → work trees; aquinas.cc is paragraph-paired Latin|English (which migne.app already does).

- New page (e.g. `site/browse/`) built from `data/works.json`: collapsible series → author → work tree, one line per work, English-available works marked (gilt, matching the shelf), counts at each level, client-side filter box.
- Must work at phone width; no framework — follow the existing build-script pattern.
- Before building, look at the existing `site/authors/`, `site/latina/`, `site/graeca/` pages — this may be a re-presentation of data already there, not new data.

Acceptance: every shipped work reachable within two clicks from `/browse/`; page weight reasonable on mobile.

### Phase A as built (2026-10-15)

`scripts/build-browse.mjs` → `site/browse/index.html` (397 KB raw, one embedded JSON block; PL 1,491 authors / 5,276 works, PG 237 / 973; 191 in English, gilt and linked). Series → author → work, counts at each level, filter box (author or title, accent-folded), "In English only" toggle; work lists render lazily. Added to `build-site.mjs` INDEXES, `preflight` freshness list and the nav (`Browse`). Checked in a browser: filter, English toggle, no horizontal scroll at 390 px. Also fixed an existing site-wide bug: the nav bar overflowed on phones (now wraps).
**Caveats:** PG author names come from two sources, so a shipped author and the same author's unshipped works can show as two entries. The nav change reaches work pages only when they are next rebuilt. `sitemap.xml` not regenerated. Pushed 2026-10-15 (`cd87be1b`); **not deployed: held until after the Oct 20 pause (Wilson).**

## Phase B — sentence highlighting

Hover/tap a sentence in either column → its counterpart highlights in the other.

- **New works:** consume Phase 0 markers directly.
- **Shipped works (retrofit):** ⚖ this touches the completed corpus, which the 2026-08-18 no-retrofit ruling protects. That ruling is about plate passes (re-reading Migne), and this is a cheap machine pass over files we hold that leaves the text untouched, but it is Wilson's call (open call 5). If approved, align sentences *within each already-aligned paragraph* — the problem is a handful of sentences per paragraph, not a document. Options, cheapest first:
  - embedding aligner (Bertalign / LaBSE) locally — mind the 8 GB RAM; one process at a time;
  - per-paragraph cheap API call (Haiku) returning index pairs — see [[reference_api-vs-agent-cost]]: direct API, not agents.
  - Pilot both on 2–3 works, compare against a hand-checked paragraph sample, pick one.
- **Low-confidence paragraphs fall back to paragraph-level highlighting.** A wrong sentence pairing is worse than none — it tells a verifying reader the wrong Latin is behind the English.
- **Explicit non-goal: word-to-word alignment.** Free translation makes it unreliable; don't build it, don't promise it.

Acceptance: pilot work live with sentence highlighting; measured alignment accuracy on the hand-checked sample stated in the work's build notes.

### Phase B pilot as built (2026-10-15, Sonnet, Abbo *Canones* 9741)

- **Method chosen: local Gale–Church length alignment, no API.** `scripts/align-sentences.mjs <idno> [--write]` aligns each paragraph (beads 1:1, 1:2, 2:1, 2:2, plus a ?-parity penalty) and stamps `⟦sN⟧` into the English; text untouched. A paragraph with any doubtful bead (|z|>2.2 or a ?-break) falls back to paragraph level (one merged marker over the whole paragraph). Per-paragraph report: `data/sentence-align/9741.tsv`. Shared segmenter: `scripts/lib/segment.mjs`. Cost: zero tokens beyond this session; the Haiku and LaBSE options were not needed.
- **Result:** 160 paragraphs, 516 Latin sentences; 158 sentence-level (98.8%), 2 paragraph-level (a 16-sentence and a 12-sentence paragraph). Non-1:1 beads: 8 of 1:2, 3 of 2:1 (all legitimate: a Latin split at "Ex conc. Tolet." / "III, cap. 20", a question rendered as two English sentences, a Latin sentence pair joined in English).
- **Accuracy, stated honestly:** hand-checked by the model (Sonnet), not by Wilson: all 11 paragraphs with unequal sentence counts, 14 of the 1:1 paragraphs (every 11th), and both fallbacks, 28 paragraphs in all. **0 wrong pairings found.** Sample is 17.5% of paragraphs; the 1:1 majority is checked only at that rate, and a Wilson spot-check of a few paragraphs is still worth doing before the rollout.
- **Front end:** `scripts/lib/sentence-highlight.js`, inlined by `build-work-page.mjs` only on pages with markers. Hover (desktop) or tap: the counterpart sentence lights up in the other column (CSS Custom Highlight API, no DOM wrapping); merged and repeated ids light the whole group; browsers without the API get the plain page. Verified in a real browser on the 9741 page: clicking a Latin sentence highlights the matching English one.
- **Marker audit done:** `index-work`, `extract-quotations`, `marker-reconcile`, `plate-gate`, `lemma-inventory`, `emdash-sites`, `decade-check`, `cj-inversion`, `sentence-mark-sites`, `scan-inline-citations` now strip markers on read. A real leak was found and fixed first: `index-work` had put raw `⟦sN⟧` into the citation-index excerpts. Re-run on 9741: index JSON byte-identical to before. `preflight` OK, `verify-english` OK.
- **Not yet audited:** `build-cruces`, `build-glossa`, `build-queue`, `build-polarity-report`, `polarity-record`, `withdrawn-net` (no direct chunk reads found; they ran clean in `build-site 9741`).
- **⚠ Incident, 2026-10-15:** my Phase A commit `cd87be1b` (pushed) overwrote `site/styles.css` with a plain copy of `sketch/styles.css`, dropping the work-page CSS that `build-work-page.mjs` appends (828 → 497 lines). Never deployed. Fixed: rebuilding a work page regenerates the full file. **Never `cp sketch/styles.css site/styles.css`; run a work-page build instead.** Anything built from `master` as pushed would have had unstyled work pages.
- **Rollout DONE 2026-10-15 (Sonnet), local only:** 166 of 172 PL works stamped and aligned; 26,330 paragraphs, **222 (0.8%) paragraph-level fallback**, the rest sentence-level. Every stamped work passes `verify-english`; `preflight` OK; `scan-raw-markers` clean; `data/index` byte-identical to before. All 166 work pages rebuilt with highlighting. Not deployed (held to after Oct 20), not pushed.
- **The 6 refused works are now stamped (2026-10-15, Sonnet):** 11055, 11064, 11632, 8957, 8967, 9852. Causes found: an English-only `[ed:]` line standing alone as a paragraph (11055); the English splitting one Latin paragraph in two (11632, 11064, 8967, 9852) or joining two Latin paragraphs into one (8957). The aligner now pairs paragraphs first (beads 1:1, 1:2, 2:1, 1:3, 3:1, 2:2, with a penalty when `[col]` anchors differ), then aligns sentences per group; the marker grammar gained a mid-line `⟦pN⟧` (one English paragraph rendering two Latin ones) and `⟦sN⟧`-only continuation lines (an English paragraph break inside one Latin paragraph); standalone English editorial lines are skipped. 17 ragged groups in total; 2 of them (8957 cols 37, a 2:1) fell back to paragraph level and highlight only the first Latin paragraph on the English side. Equal-count works are byte-identical to the first rollout; all 172 PL works pass `verify-english`; `preflight` OK. Browser-checked a 2:1 group on PL 113 *Liber Job* (clicking the English sentence lights the right Latin sentence of the second paragraph). Totals: all 172 PL works have sentence highlighting; PG (9 works) still do not.
- **Two rollout bugs caught by the verifier/sample, both fixed:** (1) the verifier rejected legitimate many-to-many beads (2:2); (2) the English segmenter broke sentences inside `[var: Vulg. …]`, `[sic:]`, `[ed:]`, `[d:]`, `[lat:]`, `[cj:]` notes, which mis-paired sentences (first sample found it in 11613 and 9033); notes are now masked and all 166 works re-aligned. Second sample after the fix (9 random multi-bead paragraphs across works): no wrong pairings seen. **Accuracy is model-checked on ~45 paragraphs in total, not human-checked; the 1:1 majority is unsampled beyond that.** Highest fallback rates (check before trusting): see `data/sentence-align/*.tsv`.

## Phase C — click a word: lemma, morphology, lexicon

Precomputed at build time; nothing runs in the reader's browser but a lookup.

**Pipeline per work:**
1. Normalize Migne orthography for analysis only (display text untouched): accents (`quàm`, `prò`), j/v, u/v, æ/œ, ligatures.
2. Tokenize the source paragraphs; analyze each token.
3. Emit `site/<series>/<vol>/<work>.words.json` (token → candidate analyses) and a per-work lexicon bundle holding only the lemmas that work uses. Expect a few hundred KB per work; lazy-load on first click.
4. Popup shows: form, **all** candidate analyses (lemma + parse), and the lexicon entry(ies). Labelled as automatic.

**Tools and lexica:**

| | Latin (PL) | Greek (PG) |
|---|---|---|
| Morphology | Collatinus (returns all analyses natively) or LatinCy | Morpheus or greCy/OdyCy (weaker on Byzantine Greek) |
| Classical lexicon | Lewis & Short (Perseus XML) | LSJ (Perseus XML) |
| **Late/medieval lexicon** | **Du Cange**, *Glossarium mediae et infimae latinitatis* (Favre ed. 1883–87, PD text) | **E. A. Sophocles, *Greek Lexicon of the Roman and Byzantine Periods*** (1887, PD) |

- **The late/medieval column is not optional.** Much PL/PG vocabulary is absent from L&S/LSJ or carries a later sense; a classical-only lookup misleads on precisely the words a verifying reader cares about.
- **Show ambiguity, don't resolve it.** No single "best guess" tag unless the tagger's confidence is high and the alternatives are still one click away.
- **Latin first, one PL work as pilot**; Greek after, because Byzantine morphology tooling is weaker and needs its own accuracy check.
- Lampe's *Patristic Greek Lexicon* and Niermeyer are in copyright — not usable.

**To verify before building (not yet checked):**
- Licences: Perseus L&S and LSJ XML are CC BY-SA; Collatinus is GPL-3. Against the CC BY-NC on our English ([[wroot-press-licensing]]), the lexicon layer must stay a separately-licensed, separately-attributed data layer. Settle with the licensing memory and [[open-corpus-plan]] before shipping.
- Digital source for Du Cange (the École des chartes online edition's terms vs. OCR of the PD print) and for Sophocles (archive.org scans; is there a clean digitization?).
- Measure tagger accuracy on Migne Latin (medieval, Migne spelling) on a hand-checked sample before trusting any single-analysis display.

Acceptance: pilot work live with word popups; tagger accuracy on a hand-checked sample recorded; licensing ruled on.

## Phase D — accounts, highlights, notes

The only phase that needs a backend (auth + annotation store) and robust anchoring: our texts change after shipping (plate patches, polarity repairs), so a note anchored to a character offset drifts. Anchor = stable paragraph ID (Phase 0) + quoted-text selector with fuzzy re-anchoring (W3C Web Annotation model).

**Recommendation: do NOT build accounts for migne.app.**
- Accounts belong to the deferred Press-wide app — one login across migne.app, Acta, Wesley, etc. Building migne-only accounts now means building them twice.
- **Interim: embed Hypothesis** (one script tag). Free accounts, highlights, private/group/public notes, quote-based re-anchoring. Also measures whether readers actually annotate before we invest.
- **Fallback if Hypothesis is unwanted:** browser-local highlights/notes + an export button. No accounts, no data we hold.
- Either way, Phase 0's paragraph IDs make a later migration into a Press-wide system possible.

Acceptance (interim): annotation available on all work pages; a short note on the method/about page saying notes are held by Hypothesis, not by us.

## Phase E — share a quote (link + OG image card)

Added 2026-10-15 (Wilson). **The one phase aimed at reach rather than at readers already here:** a shared quote card carries the site, the author and a column citation into feeds, so it is the phase that feeds the funding lever.

**E1 — stopgap, no dependencies (can ship any time):**
- "Copy link to this passage" on text selection, building a text-fragment URL: `…/work#:~:text=<start>,<end>` (Chrome, Edge, Safari scroll to and highlight it natively).
- Preview shows the site-wide OG image, not a per-quote card. Browsers without fragment support simply land on the page.
- Static JS only; no server code. Roughly an hour.

**E2 — per-quote card (after Phase 0 + B):**
- **Share URL** addresses sentences, not character offsets: `migne.app/q/<series>/<vol>/<paraId>.<s>-<s>` (exact form to settle with Phase 0's ID scheme). Offsets would drift when a plate patch or polarity repair changes the text; sentence IDs don't.
- **A Vercel function** answers that URL: returns HTML with `og:title`/`og:description`/`og:image` (crawlers don't run JS) and redirects humans to the work page with the sentences highlighted. Image route renders the card with `@vercel/og`.
- **Card:** approved palette (vert `#1E3B2C`, dorure `#C3A343`, papier `#F2EAD8`), EB Garamond; English quote, optional Latin/Greek beneath; author · work · column citation (`PL 144, 1025A`); CC BY-NC credit line. 1200×630.
- **Length cap ~280 chars.** Longer selections: truncate with ellipsis on the card (full text at the link), or decline to share — pick one at build time.
- **Fonts bundled with the function** as TTF: EB Garamond, GFS Didot, and a Greek-capable face for PG quotes. Test polytonic Greek rendering in the card before PG goes live.
- Cache images at the CDN (stable inputs → stable image).

**Watch-outs:**
- **First server code in the `migne` project.** The deploy (`cd site && npx vercel --prod --archive=tgz --scope wilson-pruitts-projects`) uploads `site/`; confirm a function under `site/api/` builds and serves under that recipe on a preview deploy before relying on it, and that `vercel.json` rewrites don't swallow `/q/`.
- `preflight.mjs` and `scan-raw-markers.mjs` must not trip on the new route; add a preflight check that a sample `/q/` URL returns OG tags.
- Card text comes from our built pages, so markers (`[n:]`, `⟦s3⟧`, etc.) must be stripped exactly as the reading view strips them; test against a paragraph carrying notes.

Acceptance: E1 live on all work pages. E2: a shared `/q/` link unfurls with a correct card on at least iMessage, Facebook, and X/Bluesky; the link lands on the highlighted sentences.

## Order

1. **Phase 0** — runbook + verifier change. Blocks nothing, but every day without it adds retrofit work.
2. **Phase A** — browse tree. Small; the quickest visible reply to the feedback.
3. **Phase B** — sentence highlighting, pilot then roll out.
4. **Phase C** — word lookup, Latin pilot → Latin rollout → Greek.
5. **Phase D** — Hypothesis interim; own accounts only with the Press-wide app.
6. **Phase E** — E1 (text-fragment link) can go in alongside Phase A at any time; E2 (OG card) follows Phase B.

Model tiers ([[reference_model-prudence-rubric]]): Phase 0's convention wording and Phase C's licensing/lexicon-source choice are judgment calls; Phases A, B rollout, C rollout and E are pattern-following volume work for a cheaper session working from this file.

## Rulings (Wilson, 2026-10-15)

1. **Phase 0 — accepted as proposed.** Sentence markers `⟦sN⟧` emitted at translation time in both languages; paragraph IDs `<textIdno>.<chunk>.<para>`, never renumbered after ship, splits take a suffix (`.4a`). Applies from the next translated work.
2. **Phase D — Hypothesis** as the interim annotation layer. Own accounts only with the Press-wide app.
3. **Pilot work for Phases B and C — Abbo, *Canones* (PL 139, idno 9741)**, the first pilot and style anchor.
4. **Rabira — replied by Wilson (2026-10-15); closed.**
5. **Phase B retrofit — outside the no-retrofit ruling; do it.** Machine-only alignment over files we hold, text untouched; low-confidence paragraphs fall back to paragraph-level highlighting.
6. **Priority — Phase 0 now; the rest slot between works** as small units and never displace a work in progress.
