# Patrologia (migne.app) — project conventions

Wroot Press capstone: English translation of Migne's Patrologia Latina + Graeca.
**Read `PLAN.md` (phases, locked decisions, architecture) and `next-session-resume.md` (live state, next moves) before doing anything.** This file holds only stable conventions.

## What lives where

- `data/volumes.json` — every PL/PG tome + all scan sources (rebuild: `node scripts/build-supplements.mjs && node scripts/build-volumes.mjs`)
- `data/cc-pl-index.json` — Corpus Corporum PL index: 5,304 works / 5,377 text entries (100 are duplicates shared across works; 5,277 unique)
- `data/pl-tei-manifest.json` — hashes for all downloaded TEI; known-missing: idno 21336 (Chaussier catalog, server-side gone)
- `data/triage/authors-status.json` — CANONICAL post-verification translation statuses (400 authors, 93% of PL by words). Never regress to the raw result-*.json files.
- `data/migne-bio/` — page-cited dossiers (Bloch, Hamman, verified web) behind `content/migne-biography.md`
- `sources/pl/tei/` — the full Latin PL, 5,276 TEI files, 87M words (GITIGNORED, re-downloadable via `node scripts/cc-harvest.mjs texts`)
- `sources/pg/calfa/` — Calfa PG corpus clone (33 vols, CC-BY 4.0). **Greek only —
  Migne's parallel LATIN column is not harvested for any PG work.** The 2026-07-03 Joel
  pilot's Latin verifier survives at `raw/verifier/joel-chronographia-latin.txt` but is
  gitignored, invisible, and not chunk-aligned — so every later pass over a PG work ran
  blind (the 2026-07-28 polarity sweep did). Combined with heavy OCR damage in the
  Calfa text, that means **no PG finding may be attributed to Migne's plate from our
  files alone** — it is evidence about our source first. **The fix is specced:
  `pg-paired-pilot.md` (2026-07-30) governs all PG work** — committed chunk-aligned
  Latin twins at `src/pg-latin/<workKey>/`, the attribution ladder, Pattern 16
  `[lat:]`, and the pilot slate. No twin, no translation.
- `raw/` — gitignored except `raw/html/`; Bloch + Hamman PDFs/extracts live here under Zelzer rules
- `sketch/` — APPROVED front-end design (see previews); vert `#1E3B2C`, dorure `#C3A343`, maroquin `#7E2D26`, papier `#F2EAD8`; GFS Didot + EB Garamond (modern u: `locl` off for Latin)

## Hard rules

1. **Column anchors are sacred.** TEI `<pb n="0473A"/>` marks are the citation-resolving unit (`migne.app/pl/139/473a`). Chunkers and renderers must preserve them; validate continuity at every chunk boundary.
2. **Column numbers follow the ORIGINAL Migne plates, not Garnier reprints** (they differ; e.g. Ambrose Paul commentary col 45 vs 41). Say so in any citation UI.
3. **Zelzer rules for copyrighted material** (Bloch/Hamman PDFs, modern translations): local research verifiers only — never transcribed at length, never committed, never republished.
4. **Research agents get the telemetry gate** (see memory `feedback_haiku-agent-telemetry-gate`): mandate minimum searches, forbid constructed URLs and delegation, reject/repair on low tool-use counts. Repair by RESUMING the same agent (SendMessage) with the gap named.
5. **Parallelism is capped by the SIZE OF THE WHOLE RUN, not by the round.** Ordinary rounds: **max 6 parallel agents** (Acta discipline). **⛔ But on any multi-million-token run — an Acta-scale fleet, and the Dorotheus 87-leaf harvest is one — throttle to THREE AT A TIME.** Wilson's rule, from Acta experience (2026-08-07): six concurrent agents on a fleet that size burns the usage window and **the run gets stuck waiting on a usage reset**, which is worse than slow — a stalled fleet strands half-finished state. Three is the sustainable rate. Plan the wall clock accordingly: at the Epistolae pilot's measured ~13 min slowest-agent round, 87 leaves at 3/round is **29 rounds ≈ 6+ hours for transcription alone**, before adjudication. **That is a multi-session run, not a session.** Which is also why the whole downstream pipeline must be proven BEFORE the fleet starts: discovering mid-fleet that the chunker cannot take the output costs days, not minutes. **Translation sessions run from `translation-runbook.md`** (model policy, hard-stop ritual, pipeline, prompt template). Translation agents: strict prompt per `feedback_acta-agent-prompt`; preserve inline markers from day 1; dedupe safety nets at assembly. **Every translation prompt points at `translation-style.md`** (register rules + recurring construction patterns from Wilson's read-throughs) plus the style-anchor chunk. New read-through findings that name a construction class go into that file, with a sweep of existing English for the class.
6. **archive.org: always `{id}_jp2.zip` or direct PDF, never IIIF bursts.** Corpus Corporum: 400ms between requests, resumable scripts, never pipe a long crawl through `tail` (you lose the crash log).
6a. **DEPLOY IS `cd site && npx vercel --prod --archive=tgz`.** The Vercel project is **`migne`** and it is linked at **`site/`**, which is also the deploy root (`vercel.json` rewrites live there). `--archive=tgz` is required: the tree exceeds Vercel's 15,000-file upload cap. `migne.app` + `www.migne.app` are bound to that project and no other. **Do not link the repo root to a Vercel project.** It was linked to a stray `patrologia` project that served nothing, was Git-connected (so every push burned a build producing 404s), and silently absorbed a `--prod` deploy meant for the site — it printed a healthy URL and changed nothing on migne.app. Project deleted and the root link removed 2026-07-29; if a root `.vercel/` ever reappears, delete it rather than deploying from there.
7. Wilson's git rules apply: local commits to master freely. Remote is **github.com/wilsonpruitt/patrologia (private)**, created 2026-07-04 — pushes to master are fine going forward (small solo repo, no PR ceremony), but any force-push/rebase/branch-delete still needs Wilson's per-action OK per his global git workflow rules.
8. **Verification gates the CLAIM, not the QUEUE** (Wilson, 2026-07-28 — supersedes the old "nothing enters the queue without per-work verification of its none status," which contradicted the 2026-07-17 untranslated-first relaxation and made sessions do needless work).
   - **The queue is flexible.** Anything may be translated. The goal is completing Migne, so a foundational or poignant text is worth doing afresh even where English exists — we acknowledge prior versions openly rather than avoiding the work. Queue order is editorial judgment (smallest-first, genre pilots), not a verification gate.
   - **The gate sits at DEPLOY, on the badge.** `build-landing.mjs` prints one of two claims beside every work: **"First English translation"** or **"New English translation."** The strong claim is the only thing that needs evidence, and it needs it per work. Never ship a "First" claim on an unverified work — that is a public assertion of scholarly priority, and it is the one thing on this site a reader cannot check for themselves.
   - **Fail safe: absence of evidence is not evidence of a first.** A missing, `unclear`, or unrecognized status renders "New English translation," never "First." The weak claim is always true of our work, so defaulting to it costs nothing and cannot mislead.
   - **Do NOT go hunting to earn the strong claim** (Wilson, 2026-07-28). If a verified none-status is already in hand from triage, use "First." If it is not, use "New" and move on — never open a research task just to upgrade a badge. **The text is the product; the badge is garnish.** An hour spent confirming a VTT table of contents is an hour not spent translating Migne, and the weak claim costs us nothing.
   - **`workStatus` is the TRIAGE verdict and is never overwritten. `englishState: "ours"` is the only field that records that we shipped a work.** Until 2026-07-29 shipping flipped *both*, and since `build-landing` read `ours` as a First claim, the routine act of shipping destroyed the evidence field the fail-safe reads — routing around the fail-safe itself. Absence of evidence was handled; **overwriting** of evidence was not. Abbo's *Canones* (`4712`/`9741` — the pilot work and the style anchor) went live claiming priority by exactly that path: never triaged at work level, `workStatus: null`, flipped straight to `ours`, while the author register carries Abbo as `minimal`, unverified. All 49 flipped works were restored from git history on 2026-07-29 (48 were `none`, 1 null); `ours` is now in `NOT_VERIFIED_NONE`, so it can never grant the claim again. **Do not re-introduce the flip, and never "tidy" a null `workStatus` into `none`.**
   - Evidence, when it happens to exist, = `workStatus: none`. A search-engine synthesis asserting a translation exists is NOT evidence either way — 11546 and 11548 are the worked examples: both carried unconfirmed claims of a VTT translation and both shipped a "First" badge until 2026-07-28. The fix was to downgrade the badge, not to go verify.
   - Attribution is a SEPARATE question from translation status and does not gate the badge — but a byline naming the wrong author is its own defect, and unlike the badge it IS part of the text (11545: only the prologue is Richard's, the body is Walter of St Victor's).
9. **Index from day one.** Every shipped work runs `node scripts/index-work.mjs <textIdno>` after verify — `data/index/<series>/<idno>.json` accretes the site-wide indexes (no retroactive passes). Tracked: **scripture** (Migne's `[n:]` citations, dual-keyed per `reference_data-repository-standard` — OSIS `refKey` + verbatim `refDisplay`, located by column), **fontes** (all other citations, raw verbatim, from BOTH `[n:]` notes and `[f:]` inline-locator tags per `translation-style.md` pattern 4 — `[f:]` tags are harvested from the ENGLISH chunks (their content is verbatim Latin) and validated as a substring of the Latin twin, asterisks stripped/whitespace normalized, mismatch = hard error; inline records carry `inline: true`; a bare or partial *Ibid.* is resolved at index time to its nearest preceding non-*Ibid.* locator, stored as `antecedent` + `antecedentColumn` while `raw` keeps the printed *Ibid.* — this is a deterministic inference from the printed sequence, NOT a correction, so no `citation-corrections.json` entry; there is deliberately NO `fonsKey` yet — the controlled source-name vocab is derived later FROM the accumulated raws, never from memory, and inline locators join that same pool), **heads** (la+en chapter titles + column → TOC/search), **unparsed** (alias-table gaps; never silently dropped). Deliberately NOT tracked yet: theme/topic tags (needs open-tag→consolidate→freeze on a corpus slice per `reference_tagging-philosophy`), entity extraction, source-name normalization.

## Session cadence

Bonaventure convention: each session = one logical unit, commit as you go, and END by updating `next-session-resume.md` (current pointer, open flags, what's next). Memory (`patrologia.md`, NOW.md) stays high-level — repo files are authoritative.

## Band letters in PG (`[b: X]`) — ruled by Wilson 2026-08-06

Migne prints a marginal **A/B/C/D** beside every column, dividing it into four
bands. In **PL** that letter is fused into the column anchor — `[0473A]`,
`[0473B]` — and it is what makes `migne.app/pl/139/473a` a resolvable citation
address under hard rule 1. **PG had nothing.** No band letter survived chunking
anywhere in the PG corpus, and Calfa records none at all (its markers are
`$0=139 $8=99 $9=1`, volume/page/column only), so for six of the seven shipped
PG works the data does not exist and cannot be recovered short of re-reading
every plate.

**The ruling: capture the band, keep the URLs column-level.**

- A chunk marks a band with **`[b: C]`** at the point the plate prints the
  letter, alongside the ordinary `[1425]` column anchor, which is unchanged.
- `index-work-pg.mjs` records `band` on every citation and a `bands[]` list.
- **The URL stays `#c1425`.** PG addresses remain column-level, uniformly, so a
  reader never meets two granularities inside one series. The builder still
  emits `id="c1425c"` on an empty span at each band, so the anchor already
  resolves and turning band-level addressing on later is a *rebuild*, not a
  re-harvest.
- **Never band only the works that have the data.** Mixed granularity inside PG
  was considered and rejected: same series, two address schemes, no cue to the
  reader which applies.

⚠ **This is why the decision was forced when it was:** Dorotheus is 234 columns
of our own plate OCR, so its band letters are readable exactly once — while the
leaves are being transcribed. Capture the band **as each work is chunked**. A
retroactive band pass is a re-read of the plates, which is the thing rule 9
exists to prevent.

⚠ `[b: X]` is a marker like `[n:]`/`[lat:]`, and **markers reach the reader as
raw brackets unless a builder transforms them** — that has now happened twice on
PG pages (47 markers in 2026-08-01, `[n:]`/`[nt:]` in 2026-08-04), both times
because nothing checks rendered output. `scripts/scan-raw-markers.mjs` exists to
catch it; run it before any deploy.
