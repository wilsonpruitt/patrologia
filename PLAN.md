# Patrologia — English Translation of Migne's PG & PL (Wroot Press capstone)

## Context

The capstone Wroot Press project: an English translation of Migne's *Patrologia Latina* (221 vols) and *Patrologia Graeca* (161 vols) — the largest single corpus of Christian tradition ever assembled, most of it never translated into English. This applies everything learned on Acta Sanctorum (multi-million-word chunked agent translation), Ambrose Ps 118 (vision-OCR column discipline, verifier-source separation), and Bonaventure (Tier-2 fidelity, decade-polish gates) at one order of magnitude larger scale.

Per the Labs-vs-Press doctrine: the corpus is the **open layer** — free reading site, always. Print editions and Lectern/Catena wiring come later as separate layers.

**Locked decisions (Wilson, 2026-07-02):**
1. **English-first** reading site (Acta model); select works promoted to bilingual print editions (Ambrose model) when they merit it.
2. **Untranslated-first** prioritization — skip works with existing public-domain English; translate the never-translated majority.
3. Preservation: **rescue Google-Books-only volumes now**; archive.org-hosted volumes fetched lazily as translation reaches them.
4. PG: **translate from the Greek**, with Migne's parallel Latin column as inline verifier (the Zelzer pattern — crosscheck, never source).
   > ⚠️ **PARTLY UNMET AS OF 2026-07-28 — the Latin column is not HARVESTED.** `sources/pg/`
   > holds only the Calfa **Greek** corpus; there is no persistent `src/latin/` twin for
   > any PG work. The 2026-07-03 Joel pilot *did* use a Latin verifier, read ad-hoc off
   > the scan's `djvu.xml` (Allatius) — that worked, but it left nothing behind. So any
   > later pass over a PG work has no verifier at all: the 2026-07-28 polarity sweep of
   > Joel had to read Greek against English blind, and its plate-side findings are
   > therefore **provisional**. The Calfa transcription is heavily OCR-damaged (`Κφιε`
   > for `Κύριε`, mangled numerals), so a bad Greek reading is evidence about our source
   > file before it is evidence about Migne's plate.
   >
   > **DECISION (Wilson, 2026-07-29) — do NOT backfill Latin onto the existing Greek.
   > Pilot a few more PG works first, ingesting Greek and Latin TOGETHER so the two
   > columns confirm each other at ingest time.** Rationale: a backfill can only ever
   > check a corpus we already committed to; paired ingest makes the columns mutually
   > corroborating from the start — Calfa's OCR damage is caught by the Latin, and a
   > genuine plate defect surfaces as a Greek/Latin *divergence* (rule 6's "scholarly
   > gold") instead of an unfalsifiable suspicion. More pilots will also surface
   > problems we cannot predict yet, and tooling built now would be built against
   > assumptions. **Backfill of PG 139/Joel comes after the paired-ingest pilots, not
   > before.** Until then no PG finding may be attributed to Migne on our side of the
   > page alone.

**Architecture decision (Wilson, 2026-07-02) — "the total Migne, complete map first":**
The eventual goal is the total Migne easily accessible in English AND Latin. The bones must hold that from day one, and early translations must not feel dwarfed inside a centimillion-word corpus. Resolution: **ONE canonical structure, complete at the map level from launch** — not separate per-piece constructions.
- **Every work is a page from day one**: Latin text (from the Corpus Corporum/Calfa harvests) readable and citable by `PL/PG vol + column` immediately; the site is a complete, navigable, free Migne before a single translation ships — already a contribution in itself.
- **Every work carries an English slot with an explicit state**: `ours` (our translation) · `pd-ingested` (ANF/NPNF etc., hosted) · `elsewhere` (pointer to the copyrighted print translation — honest coverage, no redundant work) · `queued` / `untranslated`. The triage data (authors-status.json → per-work) IS this coverage map's seed.
- **Dwarfing is solved by inversion**: the map is complete; translation lights up territory. Each untranslated-first piece is a *first-ever English translation* — an announceable, datable event ("first published English translation: Wroot Press, 2026"), not a percentage of 100M words.
- **"Versions" are views, not constructions**: per-author spotlights, print editions, "recently Englished" — all generated from the one canonical work-keyed store (CPL/CPG + volume:column ref-keys, per the data-repository standard). Never two divergent structures.

## Research findings that shape the plan (verified 2026-07-02)

- **patristica.net** (`www.patristica.net/latina/`, `/graeca/` — note: bare `latina.patristica.net` has a broken TLS cert; use the `www.patristica.net/<series>/` form) indexes every volume with per-volume Google Books (2–6 links), archive.org, and Gallica links. This is the enumeration source for the volume registry.
- **Corpus Corporum** (mlat.uzh.ch, Univ. of Zurich) holds the **entire PL machine-readable** (~215M Latin words repo-wide), downloadable as TEI-XML/txt where rights allow. → For most of PL, **no OCR is needed at all**; the scan is the verifier, the transcription is the working text.
- **Calfa PG corpus** (arXiv 2603.09470, Mar 2026; GitHub `calfa-co/Patrologia-Graeca`; ground-truth set on Zenodo 7296539): OCR of the **previously-undigitized PG volumes**, YOLO layout + CRNN, **CER 1.05% / WER 4.69%**, ~6M lemmatized tokens. Combined with Open Greek & Latin / First1KGreek holdings, much of the Greek side is also already machine-readable.
- **Consequence:** vision OCR is the *gap-filler and verifier*, not the primary ingest. And because ground truth exists (Corpus Corporum for Latin, Calfa Zenodo set for Greek), we can **measure Claude models' CER on real Migne columns** and pick by data instead of vibes.

## Repo & naming

- New repo `~/patrologia/` (private GitHub `wilsonpruitt/patrologia`, same pattern as acta-sanctorum/bonaventure-sentences). `raw/` (scans, PDFs) gitignored.
- **Domain: `migne.app`** (**PURCHASED by Wilson 2026-07-02**). Rationale: the citation scheme becomes the URL scheme — `migne.app/pl/139/473a` resolves any Migne citation; covers PG+PL equally. .app is HTTPS-only (fine on Vercel). Wiring: Cloudflare DNS -> Vercel, per actasanctorum pattern.
- In-repo `CLAUDE.md` + `next-session-resume.md` as authoritative live state (Bonaventure convention) — memory file stays high-level.

## Phase 0 — Volume registry (the spine everything hangs on)

Scrape patristica.net latina + graeca into `data/volumes.json`: one record per volume — series, tome number, authors/contents summary, every source link (Google Books IDs, archive.org IDs, Gallica ARKs), and link-health status. This is quick (2 static pages) and unblocks both the rescue and the gap map.

Then build `data/works.json`: one record per **work**, keyed by **CPL / CPG number** (Clavis Patrum Latinorum/Graecorum — the canonical work identifiers), with author, title, volume, **column range** (Migne is cited by column + section letter, e.g. `PL 32, col. 1234C` — column ranges, not pages, are the citation-resolving unit). Seed from the patristica.net TOCs + Corpus Corporum metadata; refine per-volume as translation reaches it.

## Phase 1 — Preservation rescue (Google-Books-only volumes)

**RESOLVED 2026-07-02 (Phase 0 finding): no Google Books rescue needed.** patristica.net's link lists are stale; current archive.org coverage is total — every PL and PG tome has at least one archive.org copy (see README.md: `patrologia-volumes` mega-item for PG, `PatrologiaLatina` + `patrologiaecur{NNN}mign` family for PL, plus the 351 MB `Patrologia_Latina_1-221.zip` corpus-level text mirror). Remaining Phase 1 items:

1. ~~Blocked on storage~~ **RESOLVED later 2026-07-02**: 30 GB freed (deleted-but-open Photos WAL — see memory `reference_deleted-but-open-disk-space`). PL text zip downloaded + hashed (`raw/mirrors/`, provenance.json). Full scan mirrors (100+ GB) still want an external drive eventually.
2. Verification flag: PG 075 candidate (`bim_early-english-books-1641-1700_patrologiae-cursus-completus-_1859_75`) — confirm it's Series Graeca, not Latina, on download.
3. Archive.org fetches: **always `{id}_jp2.zip` or direct PDF, never IIIF bursts** (aggressive rate-limiting — see `reference_archive-org-iiif`).

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

## Phase 3b — Trained Greek HTR for the 134 non-Calfa PG tomes (scoped 2026-08-14)

**Status: SCOPED, not started. Executable by a Sonnet session against this section; the doctrine below is settled — don't relitigate it.**

Phase 3 closed with "do not vision-OCR Greek at bulk scale" and left the gap volumes on a Sonnet-transcribes/Opus-adjudicates workflow (`PG-OCR-PROMPT.md`). That workflow works but is expensive per column and leaks a defect class no downstream check can see. Phase 3b replaces it for bulk with a **trained HTR model**.

### Why (three reasons, in order of weight)

1. **The conformation defect is architectural, not a prompt problem.** `benchmark/pg88-pilot/RESULTS.md`: Opus wrote `Γρηγόριος` where the plate prints `Γρηγορίας` (adopting Migne's own footnote correction into the body), and conformed `ἔγγυται`/`ἀποπέση μοι` toward the LXX. A CTC/HTR recognizer carries **no Septuagint prior** and cannot make that error. `PG-OCR-PROMPT.md` currently fights this with prose and an adjudication round; a trained model removes the failure mode instead of policing it.
2. **Accuracy, on this exact typography, already measured by others.** Calfa's published figures for Migne PG: **CER 4.19% from 10 pages of fine-tuning GT; 1.1% from 50 pages**; layout at 95% mean IoU. Phase 3's Sonnet arm was 8.59% mean / ~3.3% median. Fifty annotated pages beats our best current model by 3–8×.
3. **Scale.** `data/gap-map.json`: **134 of 167 PG tomes** have no Calfa text. Re-verified against the live GitHub repo 2026-08-14 — still 33 volumes, same list as the 2026-05-03 clone. The gap is not shrinking on its own.

### What is already ours, free, on disk

- **`sources/pg/calfa/models/REG-YOLOv12s.pt`** (19 MB) — Calfa's region/layout detector, shipped in the repo, CC BY 4.0. **The layout half of the problem is already solved and does not need training.** This is the direct fix for the defect classes the Antiochus audit caught: crop-truncated footnotes, full-width lines halved at the gutter, Latin bleeding into Greek source files. It replaces `crops.json` guesswork with trained region boxes.
- **`benchmark/greek-gt/task2/`** — 100 image+pageXML ground-truth pairs (Zenodo `20008699`). At Calfa's own 50-page figure, **this may be enough to train a first recognizer with zero hand annotation.**
- The repo ships **no recognition model**. Recognition is the only thing that actually needs training.

### Order of operations

1. **Try Calfa Vision's hosted PG models on a gap volume first.** They offer the PG project type free on the platform. Inference on someone else's trained recognizer beats training ours. Only if this is unavailable, rate-limited, or unusable at our scale does step 2 begin.
2. **Wire up `REG-YOLOv12s.pt` regardless of step 1's outcome** — it improves the *existing* Sonnet workflow immediately by feeding it correctly-bounded Greek regions instead of x-coordinate crops. This is the cheapest win in the whole phase and is not contingent on any training happening.
3. **Fine-tune a Kraken recognizer** on `benchmark/greek-gt/task2/`, ~70 train / ~30 held out.
4. **Validate on fresh pages from a *gap* volume**, hand-corrected — not on Zenodo pages. The task2 set is plausibly Calfa's own eval set; a CER measured on it is optimistic and must not be reported as the model's real number.

### Compute

Off this machine (8 GB won't host it). A ~70-page Kraken fine-tune is one mid-tier GPU for a couple of hours — under ~$20 anywhere. Lightning.ai Studios, Colab, Runpod, Modal all work; **the vendor is not a decision worth deliberating.** Lightning's only real edge is a persistent Studio, which matters because the painful part is standing up eScriptorium/Kraken, not the training run.

### Decision rule

Trained recognizer takes bulk gap-OCR if it clears **≤2% CER on the held-out gap-volume validation pages**. Below that bar, fall back to the current `PG-OCR-PROMPT.md` workflow — which stays the canonical method for spot-fills and small gaps either way. Deliverable: extend `benchmark/RESULTS.md` with a Greek-HTR row measured the same way as the existing arms (`score.mjs`, NFC-normalized).

### Carried-forward gotchas

- **NFC-normalize before any diff or scoring** — un-normalized polytonic combining marks produce false diffs (bit us on the Joel lacuna sweep *and* mid-benchmark).
- **Calfa pageXML: use the region-level `TextEquiv`, dehyphenate line-final `-`, ignore per-line `TextEquiv`s.** Getting this wrong inflated measured CER to ~50% uniformly. See `benchmark/extract-greek-gt.mjs`.
- **Migne prints a GRAVE before a comma.** It is a convention of the edition, not an error. Any model's output that "corrects" it to an acute is producing a defect — and this accounted for an entire ~24-item disagreement class in PG 88 batch 1.

### Addendum — Zenodo coverage check, run 2026-08-14 (result: gap CONFIRMED, phase stands)

The open question before starting Phase 3b was whether Calfa's Zenodo releases had already outrun `data/gap-map.json` (built from the GitHub README's 33-volume table), which would have collapsed the 134-tome gap and made the phase moot. **They have not.** The premise was inverted: the July 2025 record is *older* than our data, not newer.

Three Zenodo records, enumerated by downloading the archives and listing them (not by reading the landing pages, whose descriptions name no volumes):

| Record | Date | Archive | Volumes |
|---|---|---|---|
| [`15780625`](https://zenodo.org/records/15780625) | 2025-07-01 | `PG.zip` 47.8 MB | **14** |
| [`19915273`](https://zenodo.org/records/19915273) | 2026-04-30 | `PG.zip` 103 MB | **33** |
| [`20008699`](https://zenodo.org/records/20008699) | 2026-05-03 | `data.zip` 120 MB / `data-v2.zip` 406 MB | ground truth, see below |

**Findings:**

1. **`19915273` is the current corpus release and its 33 volumes match `data/gap-map.json` exactly** — `003 005 006 008 009 016_3 021 042 067 071 073 087_1 101 107 109 112 113 118 121 122 123 124 125 126 134 139 146 148 151 153 155 157 158`, byte-for-byte the same tome list, sub-parts included. **The gap map is current and correct. Do not regenerate it, and do not re-run this check against `15780625` — that record is superseded.** The 47.8 MB → 103 MB size jump is richer tagging and re-OCR of volumes we already had, plus the 19 added below — not a coverage story the README missed.
2. **Coverage grew 14 → 33 in the ten months from 2025-07 to 2026-04** (~1.9 tomes/month). Straight-lined, the remaining 134 tomes are a **~6-year wait**. This is the quantitative form of the Phase 3b "scale" argument: waiting for CGPG is not a strategy, and the phase's premise survives the check that was meant to kill it.
3. **⚠ Supersedes step 3's training data: `data-v2.zip` is 304 image + pageXML pairs, and it is "the full training set used for processing the PG."** `benchmark/greek-gt/task2/` is the **V1** set — 100 images / 2,579 annotated lines, from 2021–22, built for the Programming Historian lesson. V2 is 3× larger and is Calfa's actual production training corpus. **Train on V2, not on task2.** Two consequences: at 304 pages we are far past Calfa's own 50-page/1.1% CER figure, so the ≤2% CER decision rule is a soft bar rather than a stretch; and the "task2 is plausibly their eval set" worry is now *confirmed as the wrong worry in the right direction* — V2 is explicitly their **training** set, so a CER measured on any part of it is optimistic for the ordinary reason (train/test leakage), and **step 4's held-out validation on hand-corrected pages from a real gap volume is not optional.** It is the only honest number.
4. V1's task-1 layout annotations (col_greek 52, col_lat 54, footnotes 27, titles 9) are the provenance of `REG-YOLOv12s.pt`. Nothing changes for step 2 — the shipped detector still gets wired up first, still unconditionally.

**Not yet done:** `data-v2.zip` is not downloaded (406 MB; leave it off this machine — it belongs on whatever GPU host step 3 runs on, fetched there directly from `https://zenodo.org/api/records/20008699/files/data-v2.zip/content`). The two corpus zips pulled for this check were scratch and were not added to the repo; `sources/pg/calfa/` is unchanged and needs no update.

### Addendum — Calfa Vision hosted-model check, run 2026-08-14 (result: NO free recognizer; step 1 is CLOSED)

Step 1 of the order of operations above said to try Calfa Vision's hosted PG models before training anything. **There is no hosted PG recognizer to borrow.** Step 1 is closed; do not re-open it, and do not register for the platform expecting to find one.

**⚠ Correction to this section as originally written:** it claimed Calfa Vision "offers the PG project type free." That is true of **layout only**. The recognition half was never free and is not published anywhere.

Evidence, three independent sources agreeing:

1. **The Zenodo ground-truth record (`20008699`) says it in so many words:** *"Final model of **layout analysis** is freely usable on the Calfa Vision platform, by choosing the 'Greek printed (Patrologia Graeca)' type of project."* Layout analysis, named explicitly. No equivalent sentence exists anywhere for the recognizer.
2. **The platform's own tier list.** Free tier: *"Transcribe your documents / Export your data / Free features included / **No support** / **Annotation only**"* — automated line detection and semantic segmentation with generic models. OCR/HTR **inference is not in it**. It appears only under the Research Plan: *"OCR/HTR model for your corpus (custom ML training) / OCR/HTR on 3500 pages included."*
3. **The GitHub repo ships the region model and nothing else.** `REG-YOLOv12s.pt` is the layout detector. No recognition weights, in any release, on any record.

**Why the paid lane is not a fallback.** The Research Plan is **€3,500 for 3,500 pages (€1/page; €0.40 per additional page)**. The 134 gap tomes run roughly 700–1,500 double-column plates each — call it ~100,000 pages. At the marginal rate that is **~€40,000**, and it buys a corpus we would not own the pipeline for. Categorically out. There is also a separate courtesy — free OCR up to **50 printed pages** for researchers, via demo onboarding — which is a favour, not a pipeline: 50 pages against ~100,000 is noise.

**What this does to the phase: it strengthens it.** The two halves of the problem now have opposite answers, and both point the same way. **Layout is solved and already ours** (`REG-YOLOv12s.pt`, on disk, CC BY 4.0) — so step 2 is not merely unconditional, it is now the *only* thing Calfa gives us. **Recognition is precisely the thing Calfa does not give away** — so training our own is not one option among several, it is the only route to bulk gap OCR that does not cost five figures. The revised order of operations is simply: **step 2 → step 3 → step 4.**

**Validation material is already on disk** (bears on step 4): `raw/pg088/` and `raw/pg089/` hold several hundred plate segments, and **PG 88 and PG 89 are both gap tomes** — neither is in Calfa's 33. Better still, PG 88 has been through the Sonnet-transcribes/Opus-adjudicates workflow with human-adjudicated verdicts (`benchmark/pg88-pilot/BATCH*-VERDICTS-*.md`), so a held-out set from a *real gap volume* can be assembled from work already done, not from fresh annotation. Use PG 89 pages for the honest number if PG 88 risks contamination from having been looked at so hard.

**One residual, deliberately not resolved:** all of the above is read off public pages and the Zenodo record, not from inside a logged-in account. Registering is free and would settle it definitively. Not done — an account on a third-party platform is Wilson's call, and the evidence is consistent enough across three sources that the phase can proceed without it. Same for writing to Calfa to ask whether the recognizer can be shared with an academic project: that is an outward-facing send and needs an explicit OK.

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
6. **PG translation recipe** *(blocked — see the warning under rule 4: the Latin column is not harvested)*: English from the Greek chunk; Migne's Latin column read inline as verifier per batch (the Zelzer pattern — divergences fixed immediately, no deferred backlog); flag where Migne's Latin materially diverges from his Greek (these notes are scholarly gold).

## Phase 6 — Pilot (gate before scale)

Pick from the triage queue: **one untranslated PL work + one untranslated PG work** (criteria: single author, ~50–150 columns, no English ever, clean transcription available). Run each end-to-end: acquire → chunk → translate → assemble → dedupe-scan → static page. Gate questions: chunk metadata sufficient to resolve citations? per-agent throughput as projected? Greek-with-Latin-verifier workflow sustainable? Fix the pipeline before bulk.

## Phase 7 — Site + production cadence

- Static site at **migne.app**, Acta architecture (pure HTML+CSS, pagefind search, Vercel deploy with `--archive=tgz`), organized by author → work → columns, every page carrying its Migne citation (`PL/PG vol, col range`) and CPL/CPG number; URL scheme mirrors citations (`/pl/139/473a`).
- Production runs as background cadence like Acta months: ship in author/work units, each unit = chunk → 6-agent rounds → scan → build → deploy.
- **Scale honesty:** PL alone is ~100M+ Latin words; untranslated share still dwarfs all Acta done so far. This is a multi-year corpus that ships value continuously — untranslated-first means every shipped unit is a first-ever English translation.

## Verification

- Phase 0/1: `volumes.json` spot-check 10 random volumes against patristica.net; rescued PDFs open and page-count sanity-checked; provenance hashes recorded.
- Phase 2: gap map cross-checked — sample 5 "covered" works (transcription actually matches the scan) and 5 "gap" works (really absent from Corpus Corporum/Calfa).
- Phase 3: benchmark scored by script against ground truth, not eyeballed; results table committed.
- Phase 6 pilot: full diff-vs-source verification on the PL pilot (Ambrose `diff-vs-djvu` pattern), duplicate scan clean, citations resolve, deployed page renders.

## Priority block — Glossa ordinaria, Migne recension (PL 113–114) (decided 2026-08-18)

Wilson moved the Glossa up the queue (session 2026-08-18, feasibility investigation in memory `glossa-ordinaria.md`). **62 works, ~783K Latin words**, author "Anselmus Laudunensis et schola"; all verified-untranslated; 66/67 chunk-scan clean (9008 *Threni* is a 42-word stub with a word-drift fail — fix at its turn).

- **Ruth (text 8968, work 3945, 2,455 w, 3 chunks) PREPARED 2026-08-18 — it is the conventions pilot.** Decisions it must settle before any other Glossa book runs: lemma rendering (Migne prints `VERS. n.--` + italic *lemma* + comment — keep Latin lemma with English, or English-only?), attribution sigla (`[n: (RAB.)]` = Rabanus etc. — expand or preserve as printed?), and whether the standard work-page template suffices or glosses need a lemma-aware layout.
- Then scale **book-by-book, smallest-first**, as ordinary queue cadence — not a bulk block.
- **Honesty labels, every work page:** this is *Migne's abridged 19th-century recension* — marginal glosses only (no interlinear layer), 58 of ~73 books (no Ezekiel, Daniel, minor prophets, Maccabees), attributions unreliable ("Walafrid Strabo" myth). Say so plainly.
- **Badge care at ship time:** English of the *Rusch* text (a different recension) exists for some books — Klumpenhouwer/Emmaus: Genesis, Matthew (John, Exodus in progress); TEAMS: Romans, Song; Consolamini: Jonah, 1–3 John, Revelation. Per-work priority adjudication as usual; settle the wording pattern once, at Ruth.

## Explicitly deferred

- **Glossa ordinaria exhaustive edition (the Rusch / received-text question).** The PL 113–114 recension above is the fast lane, not the last word. A future full edition would translate either (a) the **medieval Glossa** — Rusch 1480/81 editio princeps; the Gloss-e/IRHT transcription (gloss-e.irht.cnrs.fr) is **all rights reserved with "traduction" explicitly requiring written permission** (contact glossae.net@gmail.com; site invites collaborators), else vision-transcribe the PD incunable (gothic, heavily abbreviated); or (b) the **early-modern received text** — Venice 1603 / Douai 1617 / Antwerp 1634 six-volume sets with Lyra, Burgensis, Thoring: clear roman type, spelled-out, archive.org has 1603 vols 1–3+5–6 at 300 dpi (`bibliorumsacroru0Nstrauoft`; vol 4 via Google Books); existing OCR unusable (long-s, scrambled frames) but the plates are vision-pipeline-ready and FAR easier than Rusch. Competition: Klumpenhouwer/Emmaus Academic translates Rusch print-first at $79.95/vol, ~1 book/yr since 2023. Full dossier: memory `glossa-ordinaria.md`.

- Bilingual print promotions (per-work decisions, post-pilot).
- Lectern/Catena/Dictionary wiring (connective-tissue layer, after corpus exists).
- Full scan mirror to cloud storage (only Google-Books-only rescue now).
- jan-vol1-style retrofits — pipeline is being built right the first time instead.
- **The wider Migne catalog as a future wing of the map** (Wilson, 2026-07-02: "way outside the scope, but interesting to note"). The *Scripturae Sacrae Cursus Completus* (28 vols, 1837–45) + *Theologiae Cursus Completus* (~28 vols) — Migne's FIRST compilations, the proof of concept for the Patrologia — plus *Encyclopédie théologique* (171 vols), *Orateurs sacrés* (99+), *Démonstrations évangéliques*. Never translated into any language; the Cursus's component authors are only partially Englished elsewhere (a Lapide via Mossman, PD, incomplete). Same author/work/column architecture would fit. **Blocker: no machine-readable text exists** (unlike PL via Corpus Corporum / PG via Calfa) — scans are plentiful (archive.org `scripturaesacraeNNmign` / `theologiaecursuNNmign` families, ~157 items; DCO full-text PDFs) but text would need OCR at ~50-60 vol scale per series, and Tesseract will be messy on this typography. Revisit when vision-OCR gets cheaper (likely within months) — the Phase 3 benchmark harness applies directly: same prep recipe, ground truth bootstrappable from a hand-corrected sample.
