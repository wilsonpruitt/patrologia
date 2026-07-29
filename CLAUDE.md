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
  pilot read the Latin verifier ad-hoc off the scan `djvu.xml`, which worked but
  persisted nothing, so every LATER pass over a PG work runs blind (the 2026-07-28
  polarity sweep did). Combined with heavy OCR damage in the Calfa text, that means
  **no PG finding may be attributed to Migne's plate from our files alone** — it is
  evidence about our source first. Harvest before scaling PG (`next-session-resume.md`).
- `raw/` — gitignored except `raw/html/`; Bloch + Hamman PDFs/extracts live here under Zelzer rules
- `sketch/` — APPROVED front-end design (see previews); vert `#1E3B2C`, dorure `#C3A343`, maroquin `#7E2D26`, papier `#F2EAD8`; GFS Didot + EB Garamond (modern u: `locl` off for Latin)

## Hard rules

1. **Column anchors are sacred.** TEI `<pb n="0473A"/>` marks are the citation-resolving unit (`migne.app/pl/139/473a`). Chunkers and renderers must preserve them; validate continuity at every chunk boundary.
2. **Column numbers follow the ORIGINAL Migne plates, not Garnier reprints** (they differ; e.g. Ambrose Paul commentary col 45 vs 41). Say so in any citation UI.
3. **Zelzer rules for copyrighted material** (Bloch/Hamman PDFs, modern translations): local research verifiers only — never transcribed at length, never committed, never republished.
4. **Research agents get the telemetry gate** (see memory `feedback_haiku-agent-telemetry-gate`): mandate minimum searches, forbid constructed URLs and delegation, reject/repair on low tool-use counts. Repair by RESUMING the same agent (SendMessage) with the gap named.
5. **Max 6 parallel agents per round** (Acta discipline). **Translation sessions run from `translation-runbook.md`** (model policy, hard-stop ritual, pipeline, prompt template). Translation agents: strict prompt per `feedback_acta-agent-prompt`; preserve inline markers from day 1; dedupe safety nets at assembly. **Every translation prompt points at `translation-style.md`** (register rules + recurring construction patterns from Wilson's read-throughs) plus the style-anchor chunk. New read-through findings that name a construction class go into that file, with a sweep of existing English for the class.
6. **archive.org: always `{id}_jp2.zip` or direct PDF, never IIIF bursts.** Corpus Corporum: 400ms between requests, resumable scripts, never pipe a long crawl through `tail` (you lose the crash log).
7. Wilson's git rules apply: local commits to master freely. Remote is **github.com/wilsonpruitt/patrologia (private)**, created 2026-07-04 — pushes to master are fine going forward (small solo repo, no PR ceremony), but any force-push/rebase/branch-delete still needs Wilson's per-action OK per his global git workflow rules.
8. **Verification gates the CLAIM, not the QUEUE** (Wilson, 2026-07-28 — supersedes the old "nothing enters the queue without per-work verification of its none status," which contradicted the 2026-07-17 untranslated-first relaxation and made sessions do needless work).
   - **The queue is flexible.** Anything may be translated. The goal is completing Migne, so a foundational or poignant text is worth doing afresh even where English exists — we acknowledge prior versions openly rather than avoiding the work. Queue order is editorial judgment (smallest-first, genre pilots), not a verification gate.
   - **The gate sits at DEPLOY, on the badge.** `build-landing.mjs` prints one of two claims beside every work: **"First English translation"** or **"New English translation."** The strong claim is the only thing that needs evidence, and it needs it per work. Never ship a "First" claim on an unverified work — that is a public assertion of scholarly priority, and it is the one thing on this site a reader cannot check for themselves.
   - **Fail safe: absence of evidence is not evidence of a first.** A missing, `unclear`, or unrecognized status renders "New English translation," never "First." The weak claim is always true of our work, so defaulting to it costs nothing and cannot mislead.
   - **Do NOT go hunting to earn the strong claim** (Wilson, 2026-07-28). If a verified none-status is already in hand from triage, use "First." If it is not, use "New" and move on — never open a research task just to upgrade a badge. **The text is the product; the badge is garnish.** An hour spent confirming a VTT table of contents is an hour not spent translating Migne, and the weak claim costs us nothing.
   - Evidence, when it happens to exist, = `workStatus: none`, or `ours` flipped from a verified none. A search-engine synthesis asserting a translation exists is NOT evidence either way — 11546 and 11548 are the worked examples: both carried unconfirmed claims of a VTT translation and both shipped a "First" badge until 2026-07-28. The fix was to downgrade the badge, not to go verify.
   - Attribution is a SEPARATE question from translation status and does not gate the badge — but a byline naming the wrong author is its own defect, and unlike the badge it IS part of the text (11545: only the prologue is Richard's, the body is Walter of St Victor's).
9. **Index from day one.** Every shipped work runs `node scripts/index-work.mjs <textIdno>` after verify — `data/index/<series>/<idno>.json` accretes the site-wide indexes (no retroactive passes). Tracked: **scripture** (Migne's `[n:]` citations, dual-keyed per `reference_data-repository-standard` — OSIS `refKey` + verbatim `refDisplay`, located by column), **fontes** (all other citations, raw verbatim, from BOTH `[n:]` notes and `[f:]` inline-locator tags per `translation-style.md` pattern 4 — `[f:]` tags are harvested from the ENGLISH chunks (their content is verbatim Latin) and validated as a substring of the Latin twin, asterisks stripped/whitespace normalized, mismatch = hard error; inline records carry `inline: true`; a bare or partial *Ibid.* is resolved at index time to its nearest preceding non-*Ibid.* locator, stored as `antecedent` + `antecedentColumn` while `raw` keeps the printed *Ibid.* — this is a deterministic inference from the printed sequence, NOT a correction, so no `citation-corrections.json` entry; there is deliberately NO `fonsKey` yet — the controlled source-name vocab is derived later FROM the accumulated raws, never from memory, and inline locators join that same pool), **heads** (la+en chapter titles + column → TOC/search), **unparsed** (alias-table gaps; never silently dropped). Deliberately NOT tracked yet: theme/topic tags (needs open-tag→consolidate→freeze on a corpus slice per `reference_tagging-philosophy`), entity extraction, source-name normalization.

## Session cadence

Bonaventure convention: each session = one logical unit, commit as you go, and END by updating `next-session-resume.md` (current pointer, open flags, what's next). Memory (`patrologia.md`, NOW.md) stays high-level — repo files are authoritative.
