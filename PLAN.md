# Patrologia — English Translation of Migne's PG & PL (Wroot Press capstone)

## Context

The capstone Wroot Press project: an English translation of Migne's *Patrologia Latina* (221 vols) and *Patrologia Graeca* (161 vols) — the largest single corpus of Christian tradition ever assembled, most of it never translated into English. This applies everything learned on Acta Sanctorum (multi-million-word chunked agent translation), Ambrose Ps 118 (vision-OCR column discipline, verifier-source separation), and Bonaventure (Tier-2 fidelity, decade-polish gates) at one order of magnitude larger scale.

Per the Labs-vs-Press doctrine: the corpus is the **open layer** — free reading site, always. Print editions and Lectern/Catena wiring come later as separate layers.

**Locked decisions (Wilson, 2026-07-02):**
1. **English-first** reading site (Acta model); select works promoted to bilingual print editions (Ambrose model) when they merit it.
2. **Untranslated-first** prioritization — skip works with existing public-domain English; translate the never-translated majority.
3. Preservation: **rescue Google-Books-only volumes now**; archive.org-hosted volumes fetched lazily as translation reaches them.
4. PG: **translate from the Greek**, with Migne's parallel Latin column as inline verifier (the Zelzer pattern — crosscheck, never source).

## Research findings that shape the plan (verified 2026-07-02)

- **patristica.net** (`www.patristica.net/latina/`, `/graeca/` — note: bare `latina.patristica.net` has a broken TLS cert; use the `www.patristica.net/<series>/` form) indexes every volume with per-volume Google Books (2–6 links), archive.org, and Gallica links. This is the enumeration source for the volume registry.
- **Corpus Corporum** (mlat.uzh.ch, Univ. of Zurich) holds the **entire PL machine-readable** (~215M Latin words repo-wide), downloadable as TEI-XML/txt where rights allow. → For most of PL, **no OCR is needed at all**; the scan is the verifier, the transcription is the working text.
- **Calfa PG corpus** (arXiv 2603.09470, Mar 2026; GitHub `calfa-co/Patrologia-Graeca`; ground-truth set on Zenodo 7296539): OCR of the **previously-undigitized PG volumes**, YOLO layout + CRNN, **CER 1.05% / WER 4.69%**, ~6M lemmatized tokens. Combined with Open Greek & Latin / First1KGreek holdings, much of the Greek side is also already machine-readable.
- **Consequence:** vision OCR is the *gap-filler and verifier*, not the primary ingest. And because ground truth exists (Corpus Corporum for Latin, Calfa Zenodo set for Greek), we can **measure Claude models' CER on real Migne columns** and pick by data instead of vibes.

## Repo & naming

- New repo `~/patrologia/` (private GitHub `wilsonpruitt/patrologia`, same pattern as acta-sanctorum/bonaventure-sentences). `raw/` (scans, PDFs) gitignored.
- Site target (later phase): `patrologia.wrootpress.com` initially; own domain deferrable.
- In-repo `CLAUDE.md` + `next-session-resume.md` as authoritative live state (Bonaventure convention) — memory file stays high-level.

## Phase 0 — Volume registry (the spine everything hangs on)

Scrape patristica.net latina + graeca into `data/volumes.json`: one record per volume — series, tome number, authors/contents summary, every source link (Google Books IDs, archive.org IDs, Gallica ARKs), and link-health status. This is quick (2 static pages) and unblocks both the rescue and the gap map.

Then build `data/works.json`: one record per **work**, keyed by **CPL / CPG number** (Clavis Patrum Latinorum/Graecorum — the canonical work identifiers), with author, title, volume, **column range** (Migne is cited by column + section letter, e.g. `PL 32, col. 1234C` — column ranges, not pages, are the citation-resolving unit). Seed from the patristica.net TOCs + Corpus Corporum metadata; refine per-volume as translation reaches it.

## Phase 1 — Preservation rescue (Google-Books-only volumes)

1. From `volumes.json`, list volumes with **no archive.org copy** — Google Books links only.
2. Download those PDFs now → `raw/rescue/` (gitignored; likely a modest subset, est. 5–20 GB).
3. Record SHA-256 + source URL + fetch date in `data/provenance.json`.
4. Archive.org-hosted volumes: fetch lazily, and **always via `{id}_jp2.zip` direct download, never IIIF bursts** (known aggressive rate-limiting; recovery 20+ min — see `reference_archive-org-iiif`).
5. Optional follow-up (flag for Wilson, not automatic): upload rescued Google-Books-only scans to archive.org as a public preservation act.

## Phase 2 — Text acquisition & gap map

- **PL:** bulk-harvest Corpus Corporum TEI/txt for PL works → `sources/pl/` with per-work provenance records (their provenance chains vary; log it, since the *published* layer is our English, transcription provenance mainly matters for any bilingual promotion — where we apply the Ambrose rule: body from PD scan OCR, restricted transcriptions as gitignored verifiers only).
- **PG:** pull the Calfa corpus (GitHub/Zenodo) + First1KGreek PG holdings → `sources/pg/`.
- Produce `data/gap-map.json`: which works/column-ranges have **no usable transcription** → these are the only vision-OCR targets.

## Phase 3 — Vision-OCR model benchmark (the Tesseract replacement)

The Ambrose/Bonaventure recipe is the prep pipeline; the open question is *which Claude model* reads Migne columns cheapest at acceptable accuracy.

- **Prep (proven):** extract leaves from `_jp2.zip`, PIL crop into **column bands + footnote band** (Migne is two-column; PG pages are Greek col + Latin col), ~450 dpi equivalent, 2× upscale, Read tool per band. Escalate hard crops to 4× zoom (Ambrose qmark toolkit pattern).
- **Latin benchmark:** ~25 sampled columns across typography eras/print quality, from volumes where Corpus Corporum text exists as ground truth. Score CER/WER per model: **Haiku 4.5 → Sonnet 5 → Opus/Fable**.
- **Greek benchmark:** same protocol against the Calfa Zenodo ground-truth pages (100 images + pageXML). Expect polytonic Greek to be much harder; if no Claude model beats ~2% CER, the answer for Greek gaps is "run/borrow the Calfa pipeline, don't vision-OCR" — that's a valid benchmark outcome.
- **Decision rule:** cheapest model with CER ≤ ~1% on Latin body text does bulk gap-OCR; stronger model only for flagged/hard pages. Deliverable: `benchmark/RESULTS.md` with CER/WER × cost table.
- **Discipline rules carry over verbatim** (`feedback_vision-ocr-discipline`): transcribe what's there, `[?]` for unreadable, never fabricate plausible clauses; small batches (3 leaves/pass); multiple unclear words in a row = stop and escalate resolution, don't push through.

## Phase 4 — Untranslated-first triage

Build `data/translation-status.json` keyed by CPL/CPG: for each work, does English exist — **public-domain** (ANF/NPNF, Library of the Fathers → link/ingest, don't retranslate), **copyrighted modern** (FOTC, ACW, TTH, CCSL-era → deprioritize; ours would be redundant), or **none** (→ the queue). Sources: CCEL indexes, Roger Pearse's translation inventories, FOTC/ACW/TTH catalog lists — agent-driven web research, ~1 agent per PL/PG tranche.

This artifact is independently publishable ("what in Migne has never been Englished") and becomes the permanent prioritization queue. Within the untranslated set, order by: single-author coherence (ship "Works of X" units), size, and pull from Lectern/Catena/Dictionary needs.

## Phase 5 — Chunking pipeline (Acta lessons codified from day 1)

Chunker: `scripts/chunk-work.mjs` operating per-work (not per-volume), emitting `src/latin/{cpl}/NNNN.md` (or `src/greek/{cpg}/`) chunks. Every Acta bug becomes a day-1 invariant:

1. **Manifest before chunking.** Per-volume work manifest (boundaries from TOC/incipits) written and eyeballed *before* any bulk run — the Acta `isSaintBoundary` honorific bug (`ON B./S./SS./VEN.` missed → 937 silently mis-merged saints) says get the boundary grammar complete up front, and expect to re-split (`feedback_acta-split-before-build`).
2. **Chunk metadata** (the "details to grab"): work ID (CPL/CPG), volume, **column range + section letters** (so `PL 32, 1234C` resolves to a chunk), sequential chunk index, incipit line, footnote markers present, and for PG the Greek/Latin column pairing. Numbering-continuity validator at every chunk boundary (June's merged-numeral bug).
3. **Inline footnote markers preserved in the translation prompt from day 1** — bracketed `[letter]` markers carried Latin→English (retroactive insertion on Acta cost ~6 agent rounds).
4. **Dedupe safety net at assembly** (Acta `dedupeBlocks()` pattern) + run a `scan-duplicate-translations.mjs` equivalent after every shipped unit — translation agents re-emitting chunks at boundaries is a known failure mode, self-heal don't trust.
5. **Agent economics (Acta-May actuals):** 50–79 chunks per agent, **6-agent cap per round**, strict prompt (permission test + explicit floor + anti-self-throttle + style anchor + verbatim frontmatter — reuse `feedback_acta-agent-prompt`). Errored agents flush partial work; re-tally on disk each round, mop tails next round.
6. **PG translation recipe:** English from the Greek chunk; Migne's Latin column read inline as verifier per batch (the Zelzer pattern — divergences fixed immediately, no deferred backlog); flag where Migne's Latin materially diverges from his Greek (these notes are scholarly gold).

## Phase 6 — Pilot (gate before scale)

Pick from the triage queue: **one untranslated PL work + one untranslated PG work** (criteria: single author, ~50–150 columns, no English ever, clean transcription available). Run each end-to-end: acquire → chunk → translate → assemble → dedupe-scan → static page. Gate questions: chunk metadata sufficient to resolve citations? per-agent throughput as projected? Greek-with-Latin-verifier workflow sustainable? Fix the pipeline before bulk.

## Phase 7 — Site + production cadence

- Static site, Acta architecture (pure HTML+CSS, pagefind search, Vercel deploy with `--archive=tgz`), organized by author → work → columns, every page carrying its Migne citation (`PL/PG vol, col range`) and CPL/CPG number.
- Production runs as background cadence like Acta months: ship in author/work units, each unit = chunk → 6-agent rounds → scan → build → deploy.
- **Scale honesty:** PL alone is ~100M+ Latin words; untranslated share still dwarfs all Acta done so far. This is a multi-year corpus that ships value continuously — untranslated-first means every shipped unit is a first-ever English translation.

## Verification

- Phase 0/1: `volumes.json` spot-check 10 random volumes against patristica.net; rescued PDFs open and page-count sanity-checked; provenance hashes recorded.
- Phase 2: gap map cross-checked — sample 5 "covered" works (transcription actually matches the scan) and 5 "gap" works (really absent from Corpus Corporum/Calfa).
- Phase 3: benchmark scored by script against ground truth, not eyeballed; results table committed.
- Phase 6 pilot: full diff-vs-source verification on the PL pilot (Ambrose `diff-vs-djvu` pattern), duplicate scan clean, citations resolve, deployed page renders.

## Explicitly deferred

- Bilingual print promotions (per-work decisions, post-pilot).
- Lectern/Catena/Dictionary wiring (connective-tissue layer, after corpus exists).
- Full scan mirror to cloud storage (only Google-Books-only rescue now).
- Domain purchase; jan-vol1-style retrofits — pipeline is being built right the first time instead.
