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
- `sources/pg/calfa/` — Calfa PG corpus clone (33 vols, CC-BY 4.0)
- `raw/` — gitignored except `raw/html/`; Bloch + Hamman PDFs/extracts live here under Zelzer rules
- `sketch/` — APPROVED front-end design (see previews); vert `#1E3B2C`, dorure `#C3A343`, maroquin `#7E2D26`, papier `#F2EAD8`; GFS Didot + EB Garamond (modern u: `locl` off for Latin)

## Hard rules

1. **Column anchors are sacred.** TEI `<pb n="0473A"/>` marks are the citation-resolving unit (`migne.app/pl/139/473a`). Chunkers and renderers must preserve them; validate continuity at every chunk boundary.
2. **Column numbers follow the ORIGINAL Migne plates, not Garnier reprints** (they differ; e.g. Ambrose Paul commentary col 45 vs 41). Say so in any citation UI.
3. **Zelzer rules for copyrighted material** (Bloch/Hamman PDFs, modern translations): local research verifiers only — never transcribed at length, never committed, never republished.
4. **Research agents get the telemetry gate** (see memory `feedback_haiku-agent-telemetry-gate`): mandate minimum searches, forbid constructed URLs and delegation, reject/repair on low tool-use counts. Repair by RESUMING the same agent (SendMessage) with the gap named.
5. **Max 6 parallel agents per round** (Acta discipline). Translation agents: strict prompt per `feedback_acta-agent-prompt`; preserve inline markers from day 1; dedupe safety nets at assembly. **Every translation prompt points at `translation-style.md`** (register rules + recurring construction patterns from Wilson's read-throughs) plus the style-anchor chunk. New read-through findings that name a construction class go into that file, with a sweep of existing English for the class.
6. **archive.org: always `{id}_jp2.zip` or direct PDF, never IIIF bursts.** Corpus Corporum: 400ms between requests, resumable scripts, never pipe a long crawl through `tail` (you lose the crash log).
7. Wilson's git rules apply: local commits to master freely; NO remote exists yet; pushing/remotes = ask first.
8. Untranslated-first: nothing enters the translation queue without per-work verification of its "none" status.
9. **Index from day one.** Every shipped work runs `node scripts/index-work.mjs <textIdno>` after verify — `data/index/<series>/<idno>.json` accretes the site-wide indexes (no retroactive passes). Tracked: **scripture** (Migne's `[n:]` citations, dual-keyed per `reference_data-repository-standard` — OSIS `refKey` + verbatim `refDisplay`, located by column), **fontes** (all other citations, raw verbatim — the controlled source-name vocab is derived later FROM the accumulated raws, never from memory), **heads** (la+en chapter titles + column → TOC/search), **unparsed** (alias-table gaps; never silently dropped). Deliberately NOT tracked yet: theme/topic tags (needs open-tag→consolidate→freeze on a corpus slice per `reference_tagging-philosophy`), entity extraction, source-name normalization.

## Session cadence

Bonaventure convention: each session = one logical unit, commit as you go, and END by updating `next-session-resume.md` (current pointer, open flags, what's next). Memory (`patrologia.md`, NOW.md) stays high-level — repo files are authoritative.
