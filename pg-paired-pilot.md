# PG paired pilot — Greek + Latin ingested together

Written 2026-07-30 (Fable, per `next-session-resume.md` item 2 and Wilson's
2026-07-29 ruling: **pilot first, backfill later**). This is the score; cheaper
sessions play it. Read alongside `CLAUDE.md`, `translation-style.md` (which now
carries the Greek register section and Pattern 16 `[lat:]`), and
`translation-runbook.md` (whose pipeline this extends — it is not restated here,
only diffed).

**Who does what:**
- **Sonnet** — harvest tooling, column mapping, twin extraction, registry entries
  (§2–3). Mechanics against this spec; no translation, no register judgment.
- **Fable** — chunk `0000` of each pilot work in a new genre (dialogue, homily,
  lemma-and-gloss are all new; runbook model policy: *new genre = Fable
  mini-pilot first*). Each produces the work's style anchor and extends the
  Greek register section. Also reads the pilots' findings at the end (§8).
- **Opus** — all remaining translation chunks, ≤6 agents, hard-stop ritual
  before every launch ("which model, and go?").
- **Nobody** — Joel's Latin backfill or new PG queue additions, until the gate
  questions in §8 are answered. Both are OUTPUTS of this pilot, not inputs.

## 1. Why paired, and what failed before (context, brief)

PLAN.md rules 4 and 6 require Migne's parallel Latin column as inline verifier
(Zelzer pattern: crosscheck, never source) and call Greek-vs-Latin divergences
"scholarly gold." The 2026-07-03 Joel pilot ran the verifier ad-hoc and the
2026-07-28 polarity sweep then read Joel blind — so PG findings are stuck as
provisional, attributable to our OCR-damaged Calfa source but never to Migne's
plate.

**Correction to the record (found 2026-07-30):** the Joel verifier was NOT
unpersisted. It exists at `raw/verifier/joel-chronographia-latin.txt` — 90KB,
organized by column pair, each section headed with Calfa page + scan leaf +
token-hit count. The failure was **where it lived**: `raw/` is gitignored, the
file is invisible to git and to any session that doesn't know to look, and it is
not chunk-aligned. The format is good; the location and shape were the bug. This
spec keeps the format and fixes both.

## 2. The verifier artifact — `src/pg-latin/<workKey>/`

The Latin twin is a first-class, **committed** artifact, chunk-aligned 1:1 with
`src/greek/<workKey>/`.

- **Path:** `src/pg-latin/<workKey>/NNNN.md`, same chunk numbers as the Greek.
  Deliberately NOT a sibling file inside `src/greek/<workKey>/` — existing
  tools glob `*.md` in chunk dirs and would sweep a `.latin.md` sibling in as a
  chunk. Deliberately NOT `raw/` — that gitignore is what erased the Joel
  verifier from history.
- **Committed.** Migne's Latin column (Allatius etc.) is public domain; a whole
  work's twin is ~100KB. The artifact IS the evidence; an uncommitted verifier
  is the failure mode this pilot exists to close.
- **Frontmatter** mirrors the Greek chunk (`workKey`, `chunk`, `chunkCount`,
  `series`, `volume`) plus: `language: "la"`, `role: "verifier"`, `latinColFirst`
  / `latinColLast` (Latin column numbers — the twin carries its OWN anchors,
  e.g. `[0223]` facing Greek `[0224]`), and a `provenance` block: `scanItem`,
  `leaves` (range), `extracted` (date), `method` (djvu.xml x-range crop),
  `ocr: "rough — verifier only, never source"`.
- **Body:** running Latin with `[0223]`-style column anchors. Rough OCR is
  acceptable and expected; do NOT hand-correct it (a corrected verifier is a
  second source of silent error — its value is that it is independent witness,
  warts and all).
- **NOT marker-parity-checked.** Greek↔English carry the sacred-marker
  contract; the Latin twin does not (it is a translation printed in a different
  column, with its own note apparatus, read through rough OCR).
  `verify-english-pg.mjs` must never be pointed at it.
- **Header line in every file:** "Migne's parallel Latin — verifier only, never
  translate FROM this." (Joel-file precedent, kept.)

## 3. Harvest spec (Sonnet builds; per volume, then per work)

Existing assets: `scripts/pg-page-column-map.mjs`, `data/pg-column-maps/pg139.json`
(built + token-verified for the Joel range), the two `gapfill-pg-*.mjs`
harvesters, 162 PG scans registered in `data/volumes.json`, and the Joel
verifier file as format precedent.

Per volume:
1. **Column map** for the target page range (`data/pg-column-maps/pgNNN.json`),
   verified by ≥2 **distinctive** Greek tokens per column pair found in the scan
   leaf (generic tokens produce false verification). Known gotchas, all live:
   Calfa `$8` = PDF page, not column; Greek and Latin **swap sides every page**;
   scan-leaf↔PDF-page offset **drifts within a volume** (PG 139 tail +2) — never
   assume it constant.
2. **Latin extraction:** from the scan's `djvu.xml`, crop by x-range to the
   Latin column of each mapped page (side per the swap parity), words in reading
   order. Record per-page leaf + token hits in the map, as the Joel file does.
3. **Twin slicing:** cut the extracted Latin at the column boundaries matching
   each Greek chunk's `colFirst`/`colLast` (the pair mapping lives in the column
   map). One Greek chunk → one Latin twin file.
4. **Sanity gate before committing a twin:** (a) every Greek chunk has a
   non-empty twin; (b) twin word count within a plausible band of the Greek's
   (Latin ≈ 0.9–1.3× Greek words for translation columns — a twin at 0.2× means
   the crop caught the wrong column or the map drifted); (c) spot-check 2 chunks
   per work by eye against a leaf render. Log results in the twin manifest.
5. **Registry:** the work's `data/pg-works.json` entry gains
   `latinVerifier: "src/pg-latin/<workKey>/"` + the scan item. New works (PG 118
   pilot) get full entries; leave `translationStatus` absent/unverified unless
   evidence is already in hand — the badge fails safe to "New" and **we do not
   hunt** (CLAUDE.md rule 8).

**No twin, no translation.** This is the PG analogue of runbook step 1 ("Latin
ready?"): a PG work whose twin is not on disk, committed, and sanity-gated does
not get a translation agent launched at it. Ever.

## 4. The verifier contract — the attribution ladder

At translation time each agent reads its Greek chunks AND their Latin twins. The
Latin is consulted, not obeyed: **English translates the Greek** (PLAN.md rule
4; Allatius's phrasing must never leak into the English — he is a witness, not a
model). Every crux that cites the Latin quotes it verbatim with its column, so
the claim is checkable against the committed twin.

Classify every suspicious reading on this ladder — it is the epistemology the
whole pilot exists to buy:

| Evidence | Verdict | Action |
|---|---|---|
| Greek suspicious; Latin gives the expected sense | **Calfa OCR damage** (defect in OUR file) | Correct silently in the English if the true reading is certain (Joel precedent); log in `cruces.md` with the Latin quoted. A `data/calfa-patches/` entry (changing stored Greek) additionally requires a **plate check** — Latin agreement is sense-evidence, not letter-evidence. |
| Greek reads cleanly; Latin materially diverges | **Greek/Latin divergence** — the scholarly gold | English follows the Greek; mark `[lat: …]` per Pattern 16; log in `cruces.md`. |
| Greek and Latin AGREE on an odd/corrupt sense | **Attributable to the plate pair** — the strongest evidence short of the plate itself | Render literally (Pattern 7); log the crux, noting both columns concur. This two-witness concurrence is the payoff of paired ingest: neither column alone could support the attribution. |
| Both columns damaged/absent at the same spot | **No attribution** | Plate check or `[ed: …]`; never guess. |

Standing rule, unchanged: **no PG finding is attributed to Migne's plate from
our files alone.** What the ladder adds is that Greek+Latin *concurrence* is no
longer "our files alone" — it is two independently-transmitted witnesses of the
same plate.

**Numerals get named handling.** Greek letter-numerals (βʹ, ιβʹ, λʹ) are both
the most OCR-fragile class in Calfa AND the commonest real-divergence class
(both known Joel divergences are numerals: Joram βʹ vs *duodecim*; Michael VII
ζʹ vs *sex*). So: a numeral divergence is never smoothed in either direction;
before marking one `[lat:]`, verify the GREEK numeral against the plate (leaf
render) — otherwise a Calfa-mangled numeral manufactures a false divergence.

**Polarity read (runbook step 4a) for PG reads the English against BOTH
columns.** The Latin is a second witness for exactly the defect class that
leaves no lexical trace in a single pair.

## 5. Pipeline diff vs `translation-runbook.md`

The PL per-work pipeline holds, with these substitutions:
1. Step 1 becomes: Greek chunked (`chunk-work-pg.mjs`) **and twin present +
   sanity-gated** (§3.4).
2. Step 2: agents get the PG prompt addendum (§6) and their twin paths.
3. Step 3: `verify-english-pg.mjs` (Greek↔English only; never the twin).
4. Step 4a: polarity read against both columns (§4).
5. Steps 5–8 (bio, build, index, stage, deploy checklist incl. the polarity
   gate) unchanged; `build-work-page-pg.mjs` / `index-work-pg.mjs` are the PG
   builders. Landing badge rules (CLAUDE.md rule 8) unchanged — `workStatus` is
   never overwritten.

After the pilots validate this, fold it into `translation-runbook.md` as a PG
section; until then this file is the PG runbook and the PL runbook's general
discipline (6-agent cap, hard-stop ritual, transport-recovery notes, cruces
merge rules) applies as written.

## 6. Agent prompt addendum (PG)

Append to the runbook template (which stays in force — sacred markers, negation
fidelity, false-positive block, anti-self-throttle):

> This is a PG work: translate the GREEK chunks of `src/greek/<workKey>/`.
> Migne's parallel Latin column is at `src/pg-latin/<workKey>/` (same chunk
> numbers) — a verifier, never a source: English renders the Greek; never adopt
> the Latin's phrasing, and never let it settle a reading without saying so in
> `cruces.md` with the Latin quoted and its column cited.
>
> For EVERY chunk, after drafting, make one deliberate pass against the Latin
> twin hunting three things: (1) a place your Greek made no sense — check
> whether the Latin shows it to be OCR damage in our source (the ladder in
> `pg-paired-pilot.md` §4 says what you may do about it); (2) a place Greek and
> Latin assert different facts — number, name, negation, an extra or missing
> clause — mark `[lat: …]` per translation-style.md Pattern 16; (3) a negation
> or polarity the two columns disagree on — that is a crux, never a smoothing.
> Allatius translates freely: looseness is his norm and is NOT a divergence.
> Name in your cruces log the chunks where this pass found nothing — a pass
> that reports only findings cannot be told apart from a pass never made.
>
> Greek register: follow the "Register (PG / Greek)" section of
> `translation-style.md` and this work's `0000` anchor pair exactly.

## 7. The pilot slate — three works, three genres, two volumes

With Joel (chronicle, done) these cover the four dominant PG genres, and force
the harvest to generalize past the one volume it has ever run on.

**P1 — Nicetas of Maroneia, *Dialogi de processione Spiritus Sancti*, Dial. I
(+ fragments II–VI as printed). PG 139, 169–221 (Calfa pp. 92–118).**
Genre: theological dialogue/polemic — negation-dense, doctrinally load-bearing,
the hardest test of the polarity machinery. And the subject *is* the
Greek-Latin dispute: a Filioque dialogue as the first paired-ingest work is the
site's story writing itself. `translationStatus: none`, verified 2026-07-03 →
can earn "First." The work page MUST state the fragment situation (PG prints
Hergenröther's fragments, "not even a third" — see `queueNote`; CCSG 92 is the
full Greek, no translation).
Scale: ~53 Greek cols; expect Joel-like size (~12 chunks, ~1M Greek words → EN
≈ 1.25×… compute from the harvest; hard-stop with real numbers).

**P2 — Isidore Glabas, ONE of the *Sermones IV in B. Mariam Virginem* —
Sermon I only. PG 139, from col 11 (span determined at harvest).**
Genre: high rhetorical Byzantine homily — the ornate end of the register, the
opposite pole from chronicle paratax. Registry: `none`, verified → "First."
Sermon-by-sermon publishing is already the registry's own note. The remaining
three sermons are NOT part of the pilot — they are exactly the volume work the
pilot's conventions will govern.

**P3 — one SHORT lemma-and-gloss unit from PG 118 (Oecumenius corpus):
recommend the commentary on Jude (or 2–3 John if Jude proves oversized) —
smallest complete unit in the volume.**
Purpose is double: (a) lemma-and-gloss is the richest genre for the paired
check (the PL sweep's own finding: the lemma quoted twice hands you a
contradicting neighbour — here the LATIN column supplies a third witness), and
it is the majority genre of the eventual PG queue (Theophylact, Oecumenius,
Cyril); (b) a **second volume** forces column map + swap parity + leaf drift to
be discovered fresh, which is the tooling-generalization test PG 139 alone
cannot give. No verified status in hand → badge fails safe to **"New"** and we
do not hunt (rule 8). Needs a full `pg-works.json` entry at harvest time.

Explicitly deferred, per Wilson 2026-07-29: **Joel's Latin backfill** (after
the pilots; its two provisional findings and two scan-found divergences simply
wait), and **any further PG queue additions** (an output of §8, not an input).

## 8. Gate questions (answer before backfill or scale)

The pilots exist to surface what we cannot predict. Before Joel's backfill or
any PG volume run, a session (Fable reads the findings) must answer:
1. Did the twin sanity gate (§3.4) catch real misalignment, and at what rate?
   Is 0.9–1.3× the right band, or genre-dependent?
2. What fraction of cruces did the Latin settle (vs plate checks still
   needed)? If plate checks stayed common, the twin under-delivers and the
   harvest needs quality work before scale.
3. How many `[lat:]` divergences per work, and what classes beyond numerals?
   Does Pattern 16's materiality threshold hold, or does Allatius's freedom
   generate marker spam?
4. Did dialogue/homily/lemma-gloss break the Greek register section, and what
   did the three Fable `0000` anchors have to add?
5. Does the swap-parity/leaf-drift handling generalize (PG 118 evidence), or
   does every volume need hand-verification at Joel-pilot cost?
6. EN/Greek ratio per genre (chronicle 1.25× is the only datum; cost model
   needs the other three).
Then: Joel backfill spec, PG queue additions, and the runbook merge (§5).

## 9. Standing items for Wilson (not blocking the harvest)

- **Ratify English-follows-printed-Greek at divergences** — policy since the
  Joel pilot, still awaiting read-through ratification; Pattern 16 encodes it.
  The pilots proceed under it as the locked default.
- Per-launch hard-stops as always: harvest tooling is cheap (no stop needed);
  each translation launch states chunks + burn + "which model, and go?"
