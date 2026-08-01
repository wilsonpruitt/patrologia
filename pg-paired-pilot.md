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

### 4a. THE THIRD WITNESS — the scan's own Greek column (found 2026-07-31)

**The djvu.xml we crop the Latin twin from carries Migne's GREEK column on the
very same leaves.** Splitting the *other* side of the x-range yields an OCR of
the plate's Greek that is **completely independent of Calfa** — a third
witness, available at zero marginal cost, with no leaf render required.

This changes the ladder's economics. "Plate-verify the Greek" (required before
any numeral or pronoun-itacism `[lat:]`, and before any `calfa-patches` entry)
stops being an expensive render-and-read and becomes a grep. It also promotes
a whole class of finding: where scan-Greek and Latin agree *against* Calfa, the
defect is certainly ours; where scan-Greek and Calfa agree against the Latin,
the divergence is certainly the plate's.

- **Standard practice from now on**, for every PG work: agents get the scan
  path and are expected to use it for plate verification.
- The Nicetas 0006–0009 run proved it in the hardest case: Calfa printed
  **περίγραπτος for ἀπερίγραπτος** — "the Trinity is *circumscribed*" — a
  doctrinal predicate inverted, invisible once translated, caught because two
  other witnesses of the same plate said otherwise.
- Caveat, learned the same run: **the scan's OCR is rough on BOTH sides**, so
  a divergence resting on scan-Latin alone can be crop noise. Where the Greek
  is plate-verified and only the *Latin* reading is shaky, do not fire —
  log it (the εʹ / "6." numeral case).
- Tooling: ✅ **DONE 2026-08-01** — `scripts/pg-greek-column.mjs` (gate
  condition 1), generalized alongside `pg-latin-twin.mjs`.

**⚑ THE CROPS ARE RECIPROCAL REPAIR KITS (found 2026-08-01, Joel backfill).**
The same x-range split that yields each crop spills the *other* column's
edge-words into it: Latin runs surface inside `src/pg-greek-scan/`, Greek
fragments inside `src/pg-latin/`. The two crops fail at the boundary
**independently**, so each recovers the other's losses for the price of a grep.

- **Therefore: a gap in the Latin twin is NOT evidence of a gap in Migne's
  Latin column.** Grep the Greek crop for Latin script before attributing any
  absence — or any divergence resting on one — to the plate.
- Worked case, a false `[lat:]` caught one keystroke short: Joel 0236, Greek
  `ἐτῶν ογʹ` (73) against the twin's *etatis anno septuagesimo* (70). The Greek
  crop of the same leaf held the dropped Latin — `tertio, sepeliturque cum
  patre Davide. Sub` — so the column reads *septuagesimo tertio*, 73, and the
  columns agree. **The truncation that still parses is the dangerous one**:
  *septuagesimo* is a complete, grammatical, plausible numeral, and nothing
  downstream could have flagged it.
- Second worked case, the other direction: a Greek bleed (`εἰ`) landing **on**
  the Latin numeral at Joel 0236's *duo millia εἰ septuaginta* is what stopped
  a second false marker — the crop is damaged at precisely the point in
  dispute, so the §4a caveat (Greek sound, Latin shaky → do not fire) applies.
- Joel's Greek crop carries 26 Latin runs, 4 substantive. Expect the same
  order of magnitude per work; it is cheap and it is decisive.

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

## 8a. GATE RULING — Fable, 2026-08-01

Ruled after reading the three merged cruces files in full (nicetas 770 lines,
glabas 601, oecumenius 1,725 + its `OPEN-QUESTIONS.md`) — from the findings,
not from the resume note's sketch of them.

**THE GATE IS OPEN.** Joel's Latin backfill and PG queue additions may proceed,
under the five conditions at the end of this section.

### Q1 — the twin sanity gate caught real misalignment, but the band is not the instrument

The 0.9–1.3× band is a **wrong-column detector**, nothing more. It did its one
job (a twin at 0.2× means the crop caught the wrong column), but the pilots
showed two failure classes it cannot see and one calibration error:

- **Genre-dependence:** healthy twins ran dialogue ≈1.08 aggregate and homily
  ≈1.48 — the homily end sits OUTSIDE the old band. **Band amended to
  0.85–1.6×**, with sub-0.5× = presumptive wrong column.
- **Line-interleave blindness:** the Nicetas cols 0195–0196 crop passed the
  count and was non-continuous prose; the agent correctly treated it as
  unusable rather than reading divergence into it. **§3.4(c)'s per-work eye
  spot-check must read for CONTINUOUS PROSE, not mere presence.**
- **Greek-plate blind spots:** where the Latin was recovered from an alt
  witness but the primary scan has no leaf, the twin "looks healthy" while §4a
  verification is unavailable. **`greekPlateAbsentPages` is now a REQUIRED
  twin-manifest field, written at harvest time from the leaf inventory** — not
  discovered mid-translation, as it had to be twice in Oecumenius (p.669,
  p.671).

### Q2 — the Latin settled most Calfa damage; the decisive instrument was the THIRD WITNESS

The fear behind this question half-materialized: no pilot chunk came back
clean, and in most the finding was damage in OUR file, where the twin gives
sense-evidence but not letter-evidence — so plate checks stayed common. What
answers the fear is §4a: the scan's own Greek column turned "plate-verify the
Greek" from a render-and-read into a grep, and it carried the hardest catch of
the pilots (περίγραπτος for ἀπερίγραπτος — a doctrinal predicate inverted,
invisible once translated). **Verdict: the harvest is adequate for scale with
§4a as standard practice; the twin is necessary but the twin+third-witness pair
is the instrument.**

### Q3 — `[lat:]` fired 3 / 1 / 10 per work; Pattern 16's materiality threshold HELD

No marker spam: Allatius's freedom generated roughly two dozen logged-unmarked
candidates across the three works, and every rejection carries its reason —
which is what makes the ~14 fired markers auditable. Classes now attested
beyond numerals: pronoun itacism (fired where Greek-plate-verified; declined in
every leaf gap), dropped negation (Nicetas 0185), a negation the Latin lacks
(Nicetas 0212), opposite motives (1298), temporal polarity (οὐκ ἔτι /
*nondum*), οι/αι confusion (καινήν / *communem*), a missing protasis (Εἰ
δυνατόν), lemma-word substitution (σύν / *Per*), the ὑπο- reciprocal-ratio
terms, and ἑκών / *invitus*. The two no-marker rules the pilots earned — **the
plate's own apparatus adjudicates (in either column), and Vulgate-conformation
in the Latin is convention** — are already codified in `translation-style.md`.
The materiality boundary held at its hardest test (Ἐπίσχες / *Retinuisti*:
mood-shift on an ambiguous form = looseness, no marker) — ratified.

### Q4 — no genre broke the register section; anchor-per-new-genre stays mandatory

The per-genre failure-mode prediction was confirmed by yield, not just
consistency: Glabas's epithet rule caught exactly the flattening it was written
for (πολυύμνητος and πανύμνητος three lines apart, ONE Latin word for both);
Oecumenius's 7a″-at-double-strength produced the divergence lists as
deliverables; Nicetas's fixed equivalences carried a work whose argument IS
those distinctions. The three anchors also added durable rules the volume
agents then used (mention-vs-use, ΛΟΓΟΣ per-work division term, catena sigla
as sacred structure). Genres still without an anchor: **liturgical/ordo (the
9637 gate is unchanged) and verse.**

### Q5 — the tooling generalizes; every volume still buys its own verification

PG 118 forced fresh derivation of everything PG 139 had made look constant:
column constant K=−23 vs −15 (`chunk-work-pg.mjs` now derives K per work),
steeper leaf drift (+4→−3 across 34 pages), one genuine side-parity exception.
**Verdict: generalizes.** §3.1's per-volume verification (distinctive-token
check + drift measured across the whole target span) is sufficient and costs
nothing like the Joel pilot. No volume ever gets an assumed map.

### Q6 — EN/Greek ratios by genre, for the cost model

**Chronicle 1.25 · lemma-gloss 1.35 · dialogue 1.37 · homily 1.49.** Burn
estimation stays ~20K tokens per chunk (runbook rule of thumb) — the ratio
spread affects page count, not materially the per-chunk burn.

### Conditions attached to the open gate

1. ✅ **DONE 2026-08-01 (Sonnet). `scripts/pg-greek-column.mjs` written**,
   generalized from the Nicetas scratch splitter — mirrors `pg-latin-twin.mjs`
   exactly but crops the GREEK side of the same x-range split instead of the
   Latin side. Writes `src/pg-greek-scan/<workKey>/NNNN.md` (chunk-aligned scan
   OCR, verifier-only, never a translation source) + a manifest. Re-run on all
   three pilot works; recovered ἀπερίγραπτος cleanly in Nicetas 0001/0007 —
   the exact reading the render-and-read catch depended on. No more per-run
   scratch scripts for the third witness.
2. ✅ **DONE 2026-08-01. `greekPlateAbsentPages` now a required top-level field**
   in every PG twin manifest (`pg-latin-twin.mjs`, computed from the same leaf
   walk) AND mirrored into the new `pg-greek-column.mjs` manifest. All three
   pilot manifests regenerated. Also folded in while touching the script: the
   Q1 band amendment (0.85–1.6×, sub-0.5× presumptive wrong column) was ruled
   but never applied to the gate code — `bPerChunkOutOfBand` now uses the
   amended band.
3. **Prompt addendum §6 names the genre subsection** of `translation-style.md`
   the work falls under (7a″ for every commentary, the epithet rule for every
   homily) — the mechanism found five defects in 7914 only because it was in
   the prompt.
4. **Eye spot-check reads for continuous prose** (interleave caveat, Q1).
5. **Merge discipline as learned:** check the Greek, not the cruces claim;
   check a method note's arithmetic against its own worked examples; a crux
   whose reasoning is STATED gets more scrutiny, not less (7a′, the λυσιτελῶν
   reversal).

### 8a.B — Joel Latin backfill spec (first output of the gate)

The 2026-07-28 sweep's Joel findings have waited under a standing caveat ("do
not cite these as Migne's defects until the Latin column is harvested"). Close
it:

1. **Sonnet — harvest the twin.** `src/pg-latin/joel-chronographia/0000–0011.md`
   per §2–3, from `data/pg-column-maps/pg139.json` (map already token-verified;
   tail leaf values for Calfa pp. 146–151 corrected 2026-07-04 — trust the
   committed map, not memory). Sanity gate at the chronicle expectation
   (≈0.9–1.3×); write `greekPlateAbsentPages`; registry entry gains
   `latinVerifier`. The old `raw/verifier/joel-chronographia-latin.txt` remains
   format precedent ONLY — it is not chunk-aligned; do not promote it.
2. ✅ **DONE 2026-08-01 (Opus).** Full write-up at the end of
   `src/english/joel-chronographia/cruces.md`. Results: **0272 `δυσσεβῆ` —
   conjecture *εὐσεβῆ* REFUTED** by scan-Greek (`δυσσεθῆ`, this scan's β→θ) +
   Latin *virum impium*, no edit. **0236 Asa — CLOSED as the plate's own
   reading**, three witnesses plus a positive control (the same plate prints
   `τὸ εὐθές` for Josaphat three lines below, so the alternative formula is
   demonstrably live). **Three `[lat:]` markers placed** (0240, 0269, 0288).
   **Polarity read against both columns: zero ours-side defects** — 35
   formula firings all concur and all render correctly, every Latin negation
   checked concurs; the reason is genre (7a″), a king-list's risk is the
   NUMERAL, not the negation. Twin also corrected two cruces claims (Eli's
   *annorum 90* is printed after all; Achab `κβʹ` upgraded from inference to
   verified by the third witness) and produced the reciprocal-crop finding
   in §4a above. *Original spec text follows.*

   **Opus — one session, hard-stop first.** Retroactive twin pass per §6 over
   all 12 chunks + polarity read against both columns. Priority adjudications:
   - **0272 δυσσεβῆ καὶ ἀπράγμονα** (sweep conjecture εὐσεβῆ) — twin + third
     witness; this is the exact class the verifier settles in one look.
   - **0236 Asa τὸ πονηρόν** — a LEAD, explicitly failed the
     contradicting-neighbour test; record what the twin says, expect no edit.
   - **Retrofit Pattern 16 `[lat:]` markers** on the plate divergences that
     predate the pattern and currently live only in cruces: **0240 Joram ἔτη
     βʹ vs *annos duodecim*; 0288 Michael VII ζʹ vs *sex*** (both ratified by
     Wilson 2026-07-04, Greek stands); and **0269 Justinian II ἔτη ιʹ vs
     *annum unum*** (the Latin is the outlier — material divergence all the
     same). The marker contract exists so the READER sees these, not just the
     repo.
   - Re-verify (`verify-english-pg.mjs`), re-run `polarity-record.mjs`,
     re-index (`index-work-pg.mjs`) since markers change English text; work
     page rebuilds at the next deploy.

### 8a.C — PG queue additions (second output of the gate)

Standing policy: **a PG work enters the queue only with a committed,
sanity-gated twin** (§3: no twin, no translation). Ruled IN as the next two
additions, in order:

1. **Glabas, Sermons II–IV** (PG 139, from col 40) — the conventions and the
   Marian epithet table travel with them (the table was built to govern the
   set); same-volume harvest, cheap. Sermon-by-sermon publishing per the
   registry's own note.
2. **A second Oecumenius unit from PG 118** — the smallest complete unit
   remaining in the Calfa file, which carries **Romans→Philippians only**
   (likely Galatians or Ephesians; size at harvest — the spec's Jude
   suggestion does not exist in our source, a pilot finding).

Sequencing: Joel backfill before new-volume work; any volume beyond PG 139/118
waits on condition 1 (`pg-greek-column.mjs`). Every translation launch keeps
the hard-stop ritual. Badge rules unchanged (rule 8): Glabas sermons can carry
"First" only per-work if triage evidence is in hand; otherwise "New," and we
do not hunt.

### Runbook merge

Done with this ruling: §5's pipeline diff is folded into
`translation-runbook.md` as a PG section (2026-08-01). This file remains the
detailed PG reference (ladder, harvest spec, prompt addendum); the runbook
carries the operational summary.

## 9. Standing items for Wilson (not blocking the harvest)

- **Ratify English-follows-printed-Greek at divergences** — policy since the
  Joel pilot, still awaiting read-through ratification; Pattern 16 encodes it.
  The pilots proceed under it as the locked default.
- Per-launch hard-stops as always: harvest tooling is cheap (no stop needed);
  each translation launch states chunks + burn + "which model, and go?"
