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
   - **The claim is computed in ONE place — `scripts/lib/first-english.mjs` — and imported. Never copy it.** It has failed three times by being written in two places: hardcoded into `build-work-page.mjs` (2026-08-17, ten false claims); then *mirrored* rather than shared, whose copy drifted the same day onto a status vocabulary that matched no data, so 7561 and 8715 claimed to be the first English of texts we re-translated *because* a PD English exists; and `build-landing.mjs` keying works by `volume/title`, a pair that collides on 176 keys / 472 texts, which denied 11031 a claim it had earned. PL is keyed **by idno**; pages emit `<meta name="migne-idno">`. **`build-landing.mjs` asserts every built page's rendered badge equals what it computes and exits non-zero on any disagreement** — none of the three failures ever showed in a status code.
   - **GRANDFATHERED, Wilson 2026-08-17: `workStatus === 'none'` IS the verified-none test for PL, even though `workStatusVerified` is empty on all 85 works claiming First.** *"We hunted pretty far when we first built out the queue of untranslated so it wasn't speculative."* The triage was the search; the empty timestamp is bookkeeping, not missing evidence. **Do not retract those verdicts, and do not read the empty field as an unsupported claim.**
   - **`workStatus` is the TRIAGE verdict and is never overwritten. `englishState: "ours"` is the only field that records that we shipped a work.** Until 2026-07-29 shipping flipped *both*, and since `build-landing` read `ours` as a First claim, the routine act of shipping destroyed the evidence field the fail-safe reads — routing around the fail-safe itself. Absence of evidence was handled; **overwriting** of evidence was not. Abbo's *Canones* (`4712`/`9741` — the pilot work and the style anchor) went live claiming priority by exactly that path: never triaged at work level, `workStatus: null`, flipped straight to `ours`, while the author register carries Abbo as `minimal`, unverified. All 49 flipped works were restored from git history on 2026-07-29 (48 were `none`, 1 null); `ours` is now in `NOT_VERIFIED_NONE`, so it can never grant the claim again. **Do not re-introduce the flip, and never "tidy" a null `workStatus` into `none`.**
   - Evidence, when it happens to exist, = `workStatus: none`. A search-engine synthesis asserting a translation exists is NOT evidence either way — 11546 and 11548 are the worked examples: both carried unconfirmed claims of a VTT translation and both shipped a "First" badge until 2026-07-28. The fix was to downgrade the badge, not to go verify.
   - Attribution is a SEPARATE question from translation status and does not gate the badge — but a byline naming the wrong author is its own defect, and unlike the badge it IS part of the text (11545: only the prologue is Richard's, the body is Walter of St Victor's).
8a. **⛔ SHIP TEST — no `[sic:]` or `[var:]` on a column nobody has read at the plate.** `node scripts/plate-gate.mjs <idno>` before a work is marked `ours`; it exits non-zero and names every marker standing on an unread column. **Reads are recorded in `data/plate-reads.json`** (a read = the page on screen with the corner numbers checked first, whether or not anything was found). ⭐ **Why this exists, 2026-08-28:** a `[sic:]` accuses MIGNE'S TYPE and a `[var:]` asserts MIGNE'S TEXT diverges from a witness — both are public claims about the printed page, and **our Latin is not the printed page**. 9003's page-by-page collation, the first ever run, found Corpus Corporum departing from Migne at **~3 sites per page (63 patches over 22 pages)** against a standing corpus estimate of *three instances in total*; it prevented five false public claims against Migne, and it showed the digitization **manufacturing** a Vulgate divergence (`judicabit`→`judicavit`) that a collation then dutifully "found" — **no Vulgate collation can catch that class.** The rule was already written in `reference_plate-read-triage` (for a non-word, frequency is decisive that an error exists, never whose it is) and **nothing enforced it**: live, gate-passed 8977 shipped two false `[sic:]` against Migne, each carrying the words "plate-read caveat" in its own crux. ⭐⭐ **AND A TRANSLATING AGENT'S ATTRIBUTION GUESS IS NOT EVIDENCE — MEASURED 2026-09-02 ON 9004.**
The stints were asked to fire the marker and say which class they thought each defect belonged
to. Read at the plate, their "probably our-file" calls were **right 5 times and wrong 9**, and
the three withdrawals in a fourth stint's range were fired by the one stint that offered no class
at all — so across the work **confidence and truth were close to uncorrelated**. Every wrong call
rested on internal corroboration that reads as decisive at the time (*"the correct form prints
eleven words later"*, *"a non-word, and the sentence is an etymology of that very word"*, *"a
contracted* arbores*"*, *"a fusion at a line break"*). This is `reference_plate-read-triage`'s
rule with a number on it: **frequency and internal corroboration prove an error EXISTS, never
whose it is.** ⚑ Corollary, same session: **a FUSED word is not automatically our artifact** —
9004 @0897C *prava indirecta* was classed as our fusion and the plate, re-read at 400 dpi, sets
it fused with normal spacing either side. ⚑ And the class split is the reliable prior, not the
agent's hunch: on that work **46 of 46 `[var:]` stood and 8 of 27 `[sic:]` fell, every fall a
single word and not one a quoted clause.**

⛔ **NOT A RETROFIT** (the no-retrofit rule below, "RECOVER GOING FORWARD, DO NOT SWEEP THE DONE CORPUS", Wilson 2026-08-18): `--all` surveys the shipped corpus and exits zero. Measured 2026-08-28: **1,587 of 1,650 markers stand on unread columns, across 81 of 82 englished works** — 9003 is the only clean one. That number sizes a decision about sample width; it is not a mandate to re-open 38 books.

9. **Index from day one.** Every shipped work runs `node scripts/index-work.mjs <textIdno>` after verify — `data/index/<series>/<idno>.json` accretes the site-wide indexes (no retroactive passes). Tracked: **scripture** (Migne's `[n:]` citations, dual-keyed per `reference_data-repository-standard` — OSIS `refKey` + verbatim `refDisplay`, located by column), **fontes** (all other citations, raw verbatim, from BOTH `[n:]` notes and `[f:]` inline-locator tags per `translation-style.md` pattern 4 — `[f:]` tags are harvested from the ENGLISH chunks (their content is verbatim Latin) and validated as a substring of the Latin twin, asterisks stripped/whitespace normalized, mismatch = hard error; inline records carry `inline: true`; a bare or partial *Ibid.* is resolved at index time to its nearest preceding non-*Ibid.* locator, stored as `antecedent` + `antecedentColumn` while `raw` keeps the printed *Ibid.* — this is a deterministic inference from the printed sequence, NOT a correction, so no `citation-corrections.json` entry; there is deliberately NO `fonsKey` yet — the controlled source-name vocab is derived later FROM the accumulated raws, never from memory, and inline locators join that same pool), **heads** (la+en chapter titles + column → TOC/search), **unparsed** (alias-table gaps; never silently dropped). Deliberately NOT tracked yet: theme/topic tags (needs open-tag→consolidate→freeze on a corpus slice per `reference_tagging-philosophy`), entity extraction, source-name normalization.

## Migne's conjecture notes — RECOVER GOING FORWARD, DO NOT SWEEP THE DONE CORPUS (Wilson, 2026-08-18)

**Migne prints numbered textual footnotes at the foot of his pages** — editorial conjectures,
set as `Forte *word*.` (usually spelled out; sometimes `F.` / `f.`). **Corpus Corporum's TEI
does not contain them, anywhere.** Measured 2026-08-18 across **all 5,276 PL TEI files and
498,774 `<note>` elements: ZERO.** The 413 `<note>` we do get per work are Migne's *inline
parenthetical citations*; the foot-of-page notes are a separate apparatus layer with no
representation in our source at all.

⚑ **Why it matters: these are conjectures, so they are exactly the apparatus that settles
cruces.** Worked case — 11613 col. 1254B prints *quanam « Aaron » (46) filiabus Sion
consulitur egredi*, which does not construe, and the foot of that page reads **"(46) F.
earum."** A translating agent weighed two conjectures and correctly declined for want of a
witness. **The witness was printed on the same page and is in no file we hold.**

⚠ **BUT THE ZERO IS ABOUT THE FOOT-OF-PAGE LAYER ONLY (measured 2026-09-02, 9004).** PL 114
col. 0865A prints an editorial conjecture **inline in the running text, in brackets** —
*[ Forte, priusquam]* — and **our TEI carries it**. So Migne's conjectures are not uniformly
absent from what we hold: the ones set at the FOOT of the page are, the ones set INLINE can
survive. **A `Forte` grep over the TEI is therefore not a guaranteed zero**, and a translating
agent that meets a bracketed *Forte* in its Latin is meeting Migne's own apparatus and must not
mark it as ours (Pattern 19).

⛔ **THE RULING — scope, not merit.** Recover the notes **for works from now on**, as part of
chunking. **Do NOT re-run the completed corpus** (105 works) until funding makes it
worthwhile. Wilson, 2026-08-18: *"this is something i want to do going forward, but not rerun
the completed corpus at this point until there is an infusion of funds that make that
worthwhile. i have recently received four monthly sponsors and turning out new works helps
that keep going and may increase the funders."*

⭐ **The standing priority that follows: SHIPPING NEW WORKS is the funding lever.** Do not
gold-plate a work in progress with retrospective passes; finish it and start the next. When
proposing work, say which option produces a new public work and which does not.

**Where the recovery belongs: at CHUNKING, per VOLUME — not per work, and never retroactively.**
Same argument as the PG band letters above, and for the same reason: a retroactive pass is a
re-read of the plates. One volume render serves every work in that tome. Method proven on
PL 202 (2026-08-18): archive.org Google scan, **PDF page = 600 + (column − 1187) / 2** for that
volume, verified against the running head; notes are legible at 300 dpi and locatable at 150.
⚠ **Crop the FULL page width, not a footnote strip** — notes sit under BOTH columns, and at a
work division they sit MID-page (PL 202 p. 581). A narrow bottom-strip crop silently loses
them; it lost 3 of the first 10 and was caught only because **the note numbers run
sequentially and a gap is a detector.** Always check the sequence.

### ⭐ THE SPOT CHECK IS PART OF CHUNKING (Wilson, 2026-08-19)

**Every newly chunked work gets its own plate sample before it is translated.** One page read
at the plate; **two where a work division falls mid-page**, because that is exactly where Migne
sets notes mid-page. A checked zero is recorded in `data/plate-notes/coverage.json` as coverage
**`"spot"`**; notes found are recovered to `data/plate-notes/<idno>.tsv` and the work is
**re-chunked**, since `chunk-work.mjs` runs `inject-plate-notes.mjs` last and chunking rewrites
chunks from TEI (an earlier injection would be erased **silently**).

⛔ **Never inherit a sibling book's zero.** PL 113's "no foot-of-page apparatus" finding rests on
19 pages across four books and PL 114's on 8 — both are samples, and **it is the work in hand that
ships.** `chunk-work.mjs` now prints `⬜ PLATE SPOT CHECK OWED` for any work whose coverage is
`none` or unrecorded, so the debt is visible at the moment it is incurred rather than discovered
by a translator who declines a crux Migne already answered.

⚑ `"spot"` is deliberately weaker than `"full"`: it licenses **shipping without `[cn:]`
recovery**, and it does **not** license the claim that the work has no notes.

⛔⛔ **CALIBRATE THE PAGE MAP AGAINST THE PRINTED COLUMN NUMBERS, EVERY VOLUME, EVERY TIME —
an archive.org LEAF NUMBER IS NOT A PDF PAGE NUMBER.** Found 2026-08-19 on PL 114: our stored
figure was `leaf n = (col + 9) / 2`, taken from archive.org `page/nNNN` URLs, and the downloaded
PDF's page is **leaf + 1**, so the stored formula reads the wrong plate. Using it against the
on-disk file would have produced a **false checked zero** — the worst possible outcome, because a
zero recorded from the wrong page is indistinguishable from a real one.
**Verified maps for the on-disk PDFs** (both re-checked this session against the numbers printed in
the top corners): **PL 113 `patrologiaecurs04migngoog`: PDF page = (column + 11) / 2** (p. 287 =
cols 563/564). **PL 114 `patrologiaecurs06saingoog`: PDF page = (column + 11) / 2** (p. 217 = cols
423/424) — the same formula, which is a coincidence of the two scans' front matter and not a rule.
⚑ **The check costs one page render.** Render one page, read the corner numbers, confirm. Never
carry a map between a leaf-numbered source and a PDF without it.

### ⭐ THE ASTERISK LAYER — Migne's SECOND foot-of-page apparatus (ruled by Wilson, 2026-08-24)

Beside the numbered conjectures, Migne prints a second foot-of-page layer **keyed by a raised
asterisk**: editorial cross-references rather than textual conjectures. **Corpus Corporum carries it
no more than it carries the numbered one.** Worked case, PL 114 p. 37 — the preface of *Prophetia
Baruch*, a work we had already shipped, prints *in Vulgata editione\** and keys it to
*\* Vulgata editio, de qua fit mentio in prologo super Baruch, exponitur in prologo super
Ezechielem. Caetera plana sunt.*

**The ruling: recover it with the numbered notes at chunking, and give it BOTH columns.**

- **Latin:** `[cn: * | …]`, injected exactly where Migne sets the asterisk. Same machinery, same
  file (`data/plate-notes/<idno>.tsv`), key `*` instead of a number; it takes no part in the numeric
  sequence check, because it belongs to no sequence.
- **English:** a **translated `[nt: …]`** at the same point. ⚑ **This is where it differs from the
  numbered layer, and the reason is the content:** *Forte earum* is a reading, and a reading needs no
  translation — but these notes are **sentences that say something**, and leaving one Latin-only
  strands an English-only reader in front of a line he cannot read. Pattern 15's existing
  prose-vs-locator test is exactly the test being applied; no new marker was invented.
- ⛔ **A NUMBERED `[cn:]` stays LATIN-ONLY, unchanged** (2026-08-18). Do not give one an English
  twin. `verify-english.mjs` enforces the split: only `[cn: * | …]` joins the note sequence and
  requires an `[nt:]` opposite it; a numbered one stays outside it. That distinction was drawn in
  code only after including all `[cn:]` failed 11613, the one work with a recovered numbered
  sequence.

⚠ **Three places had to learn the class, and a fourth caught the miss:** the injector
(`inject-plate-notes.mjs`), the verifier (parity, the `[cn:]` form check, and the ratio — the
English twin must be stripped from the word count exactly as the Latin's is, or a 25-word footnote
against 51 Latin words reads as padding), and the page builder, whose `[cn:]` pattern required a
number and rendered the asterisk note as raw brackets in the Latin column. **`scan-raw-markers.mjs`
is what caught that**, which is the third time that script has earned its place.

### ⭐⭐ A VOLUME HAS MORE THAN ONE SCAN — "UNREADABLE" IS A FACT ABOUT YOUR COPY (2026-08-24)

**Before recording any reading as illegible, check `data/volumes.json` for another witness.** Every
PL tome there lists its scans, and they are different photographs of different physical copies with
different margins.

⛔ **Measured: our archive.org copy of PL 113 (`patrologiaecurs04migngoog`) CLIPS THE LEFT MARGIN on
some pages** — p. 320 and p. 354 confirmed, where the left column's opening characters are cut off
while the right column is clean. Two candidates were recorded as unreadable on that basis. **Both
were then settled in a single page fetch each from the second witness**, and they went opposite
ways: one was our suspicion withdrawn (8951 @0697A *magistorum* is Migne's), the other a defect
proved to be **Migne's own broken sort** (8955 @0629D *ulit* for *Tulit*, with *Tulit quoque*
printing cleanly two lines above on the same page) — which changed that work's marker from `[cj:]`
to `[sic:]`, because a `[sic:]` asserts a plate defect and only a plate can license it.

**PL 113 second witness — Gallica `ark:/12148/bpt6k5505319w`.** IIIF, no download needed:

    https://gallica.bnf.fr/iiif/ark:/12148/bpt6k5505319w/f<N>/full/1400,/0/native.jpg      # whole page, readable
    https://gallica.bnf.fr/iiif/ark:/12148/bpt6k5505319w/f<N>/<x,y,w,h>/full/0/native.jpg  # native-resolution crop
    https://gallica.bnf.fr/iiif/ark:/12148/bpt6k5505319w/f<N>/info.json                    # native dimensions

⚠ **`f<N>.highres` returns 403; the IIIF endpoint works, and a User-Agent is required.**
⛔⛔ **The map is NOT the archive.org map and must be calibrated like any other: for this Gallica
copy `f = (column + 1) / 2`**, against `(column + 11) / 2` for the on-disk archive PDF — a five-leaf
difference in front matter. Verified against the printed corner numbers before either read.

⚑ Server-side IIIF cropping means a second-witness check costs **one HTTP request**, not a 38 MB
download. There is no longer a reason to leave a candidate unread because our copy is poor.

⚠ **Never guess a conjecture.** An illegible note is recorded as illegible; a wrong one would
enter our apparatus wearing Migne's own voice.

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
