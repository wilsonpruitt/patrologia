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

### 4b. ✅ RATIFIED (Wilson, 2026-08-04) — the ladder when the Greek is OUR OCR

***IN FORCE.** Drafted from the Antiochus pilot and ratified same day. §4 assumes
Calfa supplies the Greek. For the 128 PG volumes outside Calfa's 33 it does not,
and the ladder's independence is rebuilt from different parts, as follows. Regime
**(c)** below is the ratified verification path for the Palestine block.*

#### The problem in one line

§4's three witnesses are independent because the **source** (Calfa) and the
**third witness** (our crop of the plate) are different acts on different
artifacts. Take Calfa away and make our OCR the source, and source and witness
become **one OCR pass over one image** — agreement then proves nothing.

#### The rule: independence is bought with a SECOND PHYSICAL COPY

Antiochus's answer, and it worked: **the source is our OCR of scan copy A; the
third witness is an independent OCR of scan copy B — a different physical copy
of the same volume.** Here: copy A = `patrologia-volumes/089.pdf`, copy B =
`patrologicursus105migngoog`. Two copies of one edition fail *differently* — copy
B carries systematic **κ→χ** and **β→δ** damage that copy A does not — so the
disagreements localize the errors instead of confirming them. 1,178 tokens,
96.8% agreement, and every one of the 38 residuals explained.

**No second copy, no OCR-as-source.** Before any non-Calfa work is queued,
confirm two independent scans exist. `data/volumes.json` already registers
multiple items per tome; this becomes a queue precondition, like "no twin, no
translation."

#### ✅ SECOND-COPY SEARCH: PG 88 CLEARED (2026-08-04)

Dorotheus's precondition is **met**. Two separately-scanned copies of PG 88 exist,
both with independent OCR:

| | item | pages | assets |
|---|---|---|---|
| **A (source)** | `patrologia-volumes` → `088.*` | **1,082** | `088.pdf`, `088_jp2.zip` (images), `088_djvu.xml`, 600 ppi, uploaded 2019 |
| **B (witness)** | `PatrologiaGraeca` → `Patrologia Graeca Vol. 088.*` | **1,093** | PDF 143 MB, `_djvu.xml` 83 MB, uploaded 2017, different uploader |

**The page counts differ — 1,082 vs 1,093.** Two digitizations of the same edition
handle front matter and blanks differently; one scan re-uploaded twice cannot
differ in page count. That is the cheap decisive test for "different physical
copy," and it should be the standard one: **compare `/Linearized /N` in the PDF
header (or `NNN_page_numbers.json`) before accepting a second copy.**

Copy B is confirmed to cover Dorotheus — columns 1648 and 1811–1824 are present,
with `Δωροθ` and `ἀποταγ` in the text. ⚑ **Its OCR ran a Greek model over the
LATIN column as well**, so Migne's Latin comes out of copy B as garbled
pseudo-Greek: **useless as a twin, perfectly good as a Greek witness.** Take the
twin from copy A.

#### ⛔ CORRECTION, and a trap this search exposed

I previously assumed the `patrologia-volumes` mega-item held PDFs only. **It does
not — it carries a full derivative set per volume**, including `NNN_djvu.xml` and
`NNN_jp2.zip`. That is good news for sourcing (jp2 images beat rendering the PDF)
but it plants a trap directly in the path of this amendment:

> **Using the mega-item's own `NNN_djvu.xml` as the "third witness" for a text we
> OCR from the mega-item's own images is TWO PASSES OVER ONE PHYSICAL COPY.** It
> would satisfy the letter of the ladder and none of its purpose, and it is the
> easiest mistake available now that the derivatives are known to exist.

The witness must come from a **different item whose page count differs**. Antiochus
is unaffected — its witness was `patrologicursus105migngoog`, a Google digitization
distinct from the mega-item, and the two demonstrably failed differently (κ→χ,
β→δ present in one and not the other).

#### Four things the pilot proved, which the amendment must carry

1. **The witness is NOT ground truth and may not be scored against.** Copy B is
   noisier than we are. It corroborates; it cannot produce a CER. Any figure
   quoted as "our Greek OCR accuracy" from a witness comparison is invalid.
2. **The residual must be hand-classified.** The automated checker cannot resolve
   a hyphen-split whose witness halves are themselves damaged (`ὑπερ-` +
   `δεδηχότες`). The claim "no divergent reading" rests on a human reading the
   residual list, and the verification file must say so rather than quoting the
   automated percentage alone.
3. **Migne's Latin may be conjectural, and this volume says so.** PG 89 col
   1421/1422: *hanc narrationem mire corruptam saepe divinando Latine
   reddidimus.* Where the editor divines, the Latin is derived from the same
   corrupt Greek and **cannot corroborate it** — agreement is circular.
   ⚑ **Every non-Calfa volume gets a scan of its own prefatory matter and
   footnotes for such admissions BEFORE the Latin is trusted.** This is cheap and
   nobody was doing it.
4. **The twin desynchronizes.** The Latin lagged the Greek by ~half a column by
   the work's end, and the final Latin was printed *below* the Greek in the last
   column. Per-chunk ratio gates mislead at work boundaries; a `[lat:]` check must
   consult both adjacent twin files.

#### The unsolved part — and it is the one that matters for the big four

The load-bearing verification for Antiochus was **a human reading all 1,178 words
against the plate at 400 dpi.** That is affordable at six columns. It is not
affordable at Dorotheus's 230, Moschus's 264, or Sophronius's 324.

Three candidate regimes, and I recommend the third:

- **(a) Sampling.** Hand-check a defined fraction. Cheap, but it converts a
  verified text into an estimated one, and the project's whole claim is that
  someone actually looked.
- **(b) Second model as third leg.** A different model's OCR of copy A, giving
  three passes. Catches model-specific failure, not shared failure — and shared
  failure on worn Migne type is exactly the plausible risk.
- **(c) ⭐ RATIFIED — THE BOOK-READING IS THE HAND-CHECK, AND IT IS LOGGED.** Wilson is
  translating all four for [[church-in-palestine]] regardless. Close translation
  *is* a word-by-word read; the gap (§8a.E) is that it finds errors which change
  the sense, not errors that yield a different plausible word. So: **pair the
  book-reading with a targeted machine pass over exactly the classes it misses**
  — numerals, proper names, negations, and any token where the two copies
  disagree. Those are enumerable and small. Antiochus is the evidence: the
  automated cross-copy diff produced a 38-item list a human cleared in minutes,
  and the numeral sweep — not the reading — is what found both real divergences.

  Under (c) a work ships only when **both** are logged: the reading, and the
  cleared disagreement list. Until both exist it stays staged.

#### Claim discipline

A work whose Greek is our own OCR **may not carry "First English translation" on
the strength of the OCR**. Rule 8 is unchanged — the badge tracks translation
priority, not text quality — but the About text for such works must say plainly
that the Greek was established by machine transcription of the plate and
cross-checked against a second copy. **The reader is owed the provenance of the
text, not just of the translation.** ✅ Now a shipping requirement: a work whose
Greek is machine-established does not ship without it.

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

### 8a.D — THE PALESTINE BLOCK (Wilson, 2026-08-04) — top of the PG queue

Five works, requested top-priority, all serving
[[church-in-palestine]] (`~/wroot-press/church-in-palestine/`). Listed in
Wilson's order; **all five are blocked on the same missing capability, see the
gate below — this is a priority ruling, not a launch.**

1. **Antiochus Monachus, *Epistula ad Eustathium*** (PG 89) — a few columns,
   likely first-ever English. Greek, Mar Saba, from the generation of the 614
   Persian sack. Solves a real problem for **chapter 14**: the famous Strategos
   account survives only in Georgian (out of the shop's competence), and this
   letter supplies an in-competence eyewitness-era source. Hours, not weeks.
2. **Dorotheus of Gaza** (PG 88, ~230 cols) — bounded, beloved, the single most
   important text for **chapter 12** (the Gaza centerpiece). Wheeler's
   Cistercian translation exists but is in copyright: this is the textbook
   relaxed-rule case (2026-07-17) — foundational text translated afresh, prior
   version acknowledged openly in the about-blurb. Badge = **"New"**, never
   "First".
3. **John Moschus, *Pratum Spirituale*** (PG 87.3, ~260 cols) — the anecdote
   mine for the eve-of-conquest chapters, and charming enough to be a corpus
   draw in its own right.
4. **Sophronius — SUBSET ONLY** (PG 87.3): the homilies, the synodical letter,
   and the anacreontic poems on the fall of Jerusalem. **Explicitly excluded:
   the *Miracles of Cyrus and John*** (large, and the book does not need it).
   The anacreontics may be first English; the homilies acknowledge Duffy's
   Dumbarton Oaks volume. ⚑ Verse = a genre the register rulebook has never
   covered — the anacreontics need a Fable mini-pilot and a
   `translation-style.md` section before any agent touches them, same standing
   rule as `9637 Ordo ad regem benedicendum`.
5. **Procopius of Gaza — letters + *Panegyric*** (PG 87.1–2) — rounds out the
   Gaza rhetorical school for chapter 12. **His enormous biblical commentaries
   stay excluded.**

#### ⛔ GATE: none of these five has a Greek text. This is the whole cost.

Verified 2026-08-04 against `sources/pg/calfa/` and `data/volumes.json`:

| Target | Calfa Greek? | Scan |
|---|---|---|
| PG 89 (Antiochus) | **no** | `patrologia-volumes/089.pdf` |
| PG 88 (Dorotheus) | **no** | `088.pdf` |
| PG 87.3 (Moschus, Sophronius) | **no** | `087c.pdf` |
| PG 87.2 (Procopius letters/Panegyric) | **no** | `087b.pdf` |
| PG 87.1 (Procopius) | `PG087_1_text.txt` — **but it is the OT commentaries, the excluded part** | `087a.pdf` |

Every PG work shipped so far took its Greek from Calfa's clean OCR and used the
scan crops as *verifier only* — condition 1 above says so in as many words
(`pg-greek-scan/` is "chunk-aligned scan OCR, verifier-only, never a
translation source"). These five volumes are outside Calfa's 33, so there is
nothing to translate FROM. The tooling gap is real and named: **Phase 3, the
OCR model benchmark, has never been run on Greek** — `benchmark/greek-gt/` is
empty and `benchmark/crops/` is all PL.

So the ladder collapses too. Today it is: clean Calfa Greek → Latin twin →
scan-Greek third witness, three sources failing independently. Without Calfa,
the translation source and the third witness become **the same OCR pass over
the same plate**, and the independence that caught δυσσεθῆ and ἀπερίγραπτος is
gone. Migne's Latin column would be doing more work than the ladder was
designed to ask of it.

#### Path in, cheapest-first

0. ✅ **DONE 2026-08-04 (Opus). SOURCE HUNT RAN. Result: NEGATIVE — no open,
   machine-readable ancient-Greek text exists for any of the five.** Step 1
   below is therefore unavoidable; nothing found removes the OCR benchmark.
   What was checked and what it holds:

   - **First1KGreek / OpenGreekAndLatin — structural negative, the strongest
     result here.** Searched the repo itself, not a description of it. Only two
     name-hits and both are false friends: `tlg4102` is **Catenae (Novum
     Testamentum)** (Sophronius appears as a *cited* name inside a catena) and
     `tlg1337` is **Dorotheus of SIDON, the astrologer** — not of Gaza. No
     Moschus, no Procopius of Gaza, no Antiochus. This is the largest open
     patristic-Greek corpus and it does not have them.
   - **Documenta Catholica Omnia** — has the *Pratum* (`z_0550-0619__Joannes_
     Moschus__Pratum_Spirituale__MLT.pdf`, 5.7MB) but it is a **PDF scan of
     Migne's plate**, image-based. Same tier as our own scans; not a text source.
   - **TLG** — has all five. Subscription-licensed and non-redistributable, so
     it cannot be the source of a text we publish. Usable as a *private
     verifier* under Zelzer rules if Wilson ever has access; not a way in.
   - **archive.org / Google Books `_djvu.txt`** — exists for these volumes, but
     it is plate OCR, which is precisely the tier this project already rules
     verifier-only. It is not a shortcut past step 1; it IS step 1's input.
   - ⚑ **Greek Orthodox digital libraries — a real lead, but NOT a source, and
     NOT yet verified by eye.** `greekdownloads.wordpress.com` ("Ελληνική
     Πατρολογία", which keeps a per-volume Κλειδί including PG 87c and 88) and
     `myriobiblos.gr` appear to carry ancient-Greek HTML transcriptions.
     **Moschus there is EXTRACTS ONLY** — three anecdotes against the work's
     ~219 units. Dorotheus looks fuller. Two disqualifiers stand regardless:
     the edition behind the transcription is **unstated**, and there are **no
     Migne column numbers**, which fails hard rule 1 (column anchors are the
     citation-resolving unit). ⚠ These readings come from a page-summarizer,
     not from reading the pages directly — treat as a lead to check, not a
     finding.

   **The one genuinely useful thing the hunt turned up:** the Dorotheus
   transcription, IF it is real continuous ancient Greek, is a candidate
   **second independent witness** — not a translation source, but exactly the
   thing that repairs the independence problem in step 3 below. A transcription
   made from a different manuscript tradition fails *differently* from our OCR
   of Migne's plate, which is the property the ladder needs and the property
   OCR-as-sole-source destroys. Worth one session's direct look before the
   ladder amendment is written, and worth it for Dorotheus specifically because
   it is the 230-column centerpiece.

0a. ✅ **DONE 2026-08-04 (Opus). THE DOROTHEUS LEAD, OPENED AND MEASURED.**
   Read directly this time — pulled the wikitext off the MediaWiki API and
   counted it, no summarizer. The blog page is a nav shell; its one outbound
   link is the real artifact: **`el.wikisource.org/wiki/Ασκητικά Δωρόθεου`**,
   the only Dorotheus page on Greek Wikisource (51,647 chars / **8,347 words**).

   **It is genuine patristic Greek.** Polytonic, correct, and it opens with
   Discourse I *Περὶ ἀποταγῆς* at `Ἐν ἀρχῇ ὅτε ἐποίησεν ὁ Θεὸς τὸν ἄνθρωπον…`.
   Not a modern-Greek paraphrase. That much of the lead holds.

   **But it is ~20% of the work, and it is structurally broken:**
   - **Five sections only**, numbered `Αʹ · Βʹ · Γʹ · Αʹ · Ζʹ` — **a duplicate
     Αʹ** and gaps at Δʹ Εʹ Ϛʹ. Against PG 88's ~230 columns (Greek ≈ 40K words)
     this is about a fifth.
   - **It is not even one work.** Discourse I is complete (5,045 w), but Βʹ
     (*πρὸς τοὺς ἐν τῷ μοναστηρίῳ ἐπιστάτας*) and Γʹ (*πρὸς τὸν ἔχοντα τὴν
     διακονίαν τοῦ κελλαρίου*) are **Epistles, not Didaskaliai** — the
     Didaskaliai Βʹ is *περὶ ταπεινοφροσύνης*. The page silently mixes the
     discourses with letters under one discourse numbering.
   - **Zero provenance.** No edition named, no Migne, no columns; the single
     literal `88` in the file is incidental.
   - **It has been through a lossy reformatting.** `·` (ano teleia) occurs
     **0** times and `•` (bullet) **257** times — the Greek punctuation mark was
     substituted wholesale, plus 262 `<br />`. Whatever it was transcribed from,
     it is at least one careless pass away from any printed edition.

   **Ruling: not a source, and only a narrow witness.** It cannot be a
   translation source (unknown edition, no columns, 20% coverage, fails hard
   rule 1). As the step-3 second witness it is worth **exactly one thing**:
   **Discourse I, where its 5,045 words are complete and continuous** and can be
   collated against our OCR of PG 88's plate. That is a real asset for the
   pilot's opening stretch and worthless past it. Do not let its existence argue
   that Dorotheus is cheaper than it is — **the other ~80% has no witness but
   Migne's Latin.** (Licensing is not the obstacle: Wikisource is CC BY-SA but
   the underlying text is PD and a faithful transcription of a PD text adds no
   new rights — cf. [[wroot-press-licensing]]. Cite it as a collation witness
   anyway, as the ladder requires.)

   ⚠ **Open, not checked:** whether Greek Wikisource has a comparable page for
   Moschus. Given the blog carried only 3 of ~219 *Pratum* units, expect little.

0b. ⛔ **THE HUNT IS CLOSED (Wilson, 2026-08-04). Do not reopen it.**
   Ruling: *"we need to focus on the OCR benchmark and not hunt forever for a
   transcription."* Steps 0 and 0a answered the question they were asked — no
   open Greek text exists, and the one partial witness has been measured — and
   that is where source-hunting stops. **No further session may open a
   transcription search for these five works, or for any PG volume outside
   Calfa.** The generalization of rule 8's principle from badges to sources:
   **the text is the product; acquisition archaeology is not.** An afternoon
   spent looking for a Greek Moschus is an afternoon not spent building the
   thing that unblocks all 128 non-Calfa volumes at once.

   If a transcription surfaces incidentally in the course of other work, record
   it as a collation witness and move on. Do not go looking.
1. ⛔ **CORRECTION 2026-08-04 — "the Greek OCR benchmark has never been run" was
   WRONG, and it was asserted twice.** It ran **2026-07-04**; `benchmark/RESULTS.md`
   has the Greek arm in full. The empty `benchmark/greek-gt/` directory was read
   as absence of the work; the results file was not opened. ⚑ **An empty output
   directory is not evidence that a phase never ran** — the same "absence of
   evidence" trap CLAUDE.md rule 8 legislates against for badges.

   **The benchmark already ruled, and it ruled against us:** *"Greek: do not
   vision-OCR at bulk scale with current Claude models."* Sonnet 8.59% mean /
   ~3.3% median CER against Calfa's own 1.05%; the standing recommendation is to
   run or adapt **Calfa's pipeline** for volumes outside their 33.

   **And the sample happens to contain two of our five target volumes.** Scored
   directly 2026-08-04:

   | page | Sonnet CER / WER | Haiku CER / WER |
   |---|---|---|
   | `PG_89-1855` (Antiochus's volume) | **3.64% / 8.31%** | 10.37% / 26.91% |
   | `PG_87-4080` (Moschus + Sophronius) | **7.00% / 7.98%** | 25.56% / 46.01% |

   Both miss the ~2% translation-source bar. PG 87 misses it badly.

2. ⚑ **THE RULING THIS PRODUCES — split the block. The bar is a BULK bar.**
   ~2% CER is the threshold for text nobody will read against the plate. It is
   the wrong test for a work short enough to hand-check whole.

   - **Antiochus (PG 89) is VIABLE NOW, and it is the one Wilson wanted first.**
     A few columns at 3.64% CER is on the order of a few dozen character errors
     — every one of them catchable in a single careful read against the plate,
     which at this length costs an afternoon. Add the Latin twin and the third
     witness and the ladder still stands. **This is his "hours of work, not
     weeks," and the numbers agree.**
   - **Dorotheus · Moschus · Sophronius · Procopius are NOT viable.** At
     230–260 columns each, hand-checking OCR at 3.6–7% CER is the same order of
     labour as translating the work. There is no affordable verification, so
     there is no honest translation. **They wait on Calfa** — and per 0b we wait
     rather than hunt.
   - Corollary: the Wikisource Discourse I witness (0a) does **not** rescue
     Dorotheus. It covers ~12% of that work's Greek; the remaining 88% has the
     same unaffordable-verification problem.

3. **The Calfa route is the only way the big four open, so make it the ask.**
   The clone carries `sources/pg/calfa/models/REG-YOLOv12s.pt` — that is the
   **region/layout detector only, not the text-recognition model**, so we cannot
   simply run their stack. CGPG (Jean-Marie Auwers, UCLouvain + Calfa) is an
   *active* project whose stated purpose is OCR-ing the remaining non-digital PG
   volumes; PG 87.2/87.3, 88, 89 are plausibly already on their roadmap. The
   corpus is CC-BY and we are a legitimate downstream user.
   ⚑ **Contacting them is outward-facing — Wilson's call and Wilson's send.**
   Do not draft-and-send; draft only if asked.

4. **Ladder amendment — still required, now only for Antiochus.** Our OCR as
   translation source collapses source and third witness into one pass over one
   plate. For Antiochus the replacement is affordable and concrete: the full
   hand-check against the plate IS the independent witness, plus Migne's Latin
   promoted from witness to co-source. Write that into §4 before translating.

**Sequencing against 8a.C:** Glabas Sermon II is already harvested and
gate-green, so finish it — it is the cheapest shipped work available and costs
this block nothing. Sermons III–IV and the second Oecumenius unit are the
natural interim work *while* step 0/1 run, since they need no new capability.
The Palestine block outranks them the moment it has a Greek text.

### 8a.E — THE FOUR MEASURED, AND THE VIABILITY RULING REVERSED (2026-08-04)

**Wilson: *"I am going to translate them for another project, so they would be
worth the vision OCR on this one — as opposed to other PG volumes where we can
wait on Calfa."*** That flips step 2's ruling and the flip is correct. The
"unaffordable hand-check" was only unaffordable as *extra* work; he is doing the
close reading anyway for [[church-in-palestine]]. **These four are now the
justified exception to the benchmark's bulk verdict** — and the verdict still
stands for every other non-Calfa PG volume, which continue to wait on Calfa.

**Why it actually holds, mechanically** (not just because the reading is free):
the PG pipeline already sets **the chunk-aligned Latin twin beside every Greek
chunk**, and agents are already instructed to mark divergence with `[lat:]`
(Pattern 16). An OCR corruption in the Greek therefore surfaces as a
**Greek↔Latin disagreement** — the twin is doing verification work at every
chunk, unprompted, at 3.6–7% CER exactly as it does at Calfa's 1.05%.
⚠ **The honest caveat: translating is not collating.** Reading a text closely
finds corruptions that *change the sense*; it does not find a corruption that
silently yields a different plausible word. That residue is what the twin and
the third witness are for, and it is why the ladder amendment (step 4) is still
required rather than waived.

#### Column ranges — verified against DCO's *Rerum Conspectus Pro Columnis*

Not estimated. Pulled from the per-volume column indexes for PG 087c, 088, 089
and read from the raw index, not a summarizer.

| work | PG | columns | span | Greek words (est.) |
|---|---|---|---|---|
| Antiochus, *Epistula ad Eustathium* | 89 | 1422–1427 | **6** | ~1,200 |
| Procopius, *Panegyricus in Anastasium* | 87.3 | 2793–2825 | 32 | ~6,200 |
| Procopius, *Descriptio S. Sophiae* | 87.3 | 2825–2837 | 12 | ~2,300 |
| Procopius, *Monodia* | 87.3 | 2837–2843 | 6 | ~1,200 |
| Moschus, *Pratum Spirituale* | 87.3 | 2851–3115 | **264** | ~51,500 |
| Dorotheus, *Doctrinae diversae* | 88 | 1611–1835 | **224** | ~43,700 |
| Dorotheus, *Epistolae I–VIII* | 88 | 1838–1844 | 6 | ~1,200 |
| Sophronius, *Epistola synodica* | 87.3 | 3147–3201 | 54 | ~10,500 |
| Sophronius, *Orationes I–IX* | 87.3 | 3201–3365 | **164** | ~32,000 |
| Sophronius, *Anacreontica* (verse) | 87.3 | 3733–3839 | **106** | ~12,200 |
| **the four, total** | | | **868** | **~161,000** |

Word estimates use **145–220 Greek words per column NUMBER**, measured from our
own five shipped PG works (Oecumenius 220 · Joel 201 · Nicetas 196 · Glabas
145/145); midpoint 195, and 115 for the verse. Band on the four:
**126,000–191,000 words.** Downstream: **~169 chunks**, **~3.4M tokens** of
translation burn at the runbook's 20K/chunk, **~233K English words** at the
homily-heavy 1.45× ratio, **~434 plate pages** to OCR.

#### ⚠ Three corrections to the brief, all material

1. **Procopius's LETTERS ARE NOT IN MIGNE.** PG 87c's index has no *Epistolae*
   for him at all — the rhetorical corpus there is the *Panegyricus*, the
   *Descriptio S. Sophiae*, and the *Monodia*. His letters were edited outside
   Migne (Garzya–Loenertz). **A "letters + Panegyric" scope cannot be filled
   from Migne**; either drop the letters or source them elsewhere, which is a
   different project and out of this repo's remit.
2. **Procopius's rhetorical works are in PG 87.3, not 87.1–2.** 87.1–2 are the
   biblical commentaries — the part being excluded. The brief had this inverted.
3. **The Sophronius "subset only" is the LARGEST of the four**, at 324 columns —
   bigger than Moschus or Dorotheus. Excluding the *Miracula* (3423–3675, 252
   cols) does save real weight, but the *Orationes* alone are 164 columns. If
   the block needs trimming, this is where the trimming decision lives, not in
   Dorotheus.

#### ⚑ The efficiency finding: one volume buys three works

**PG 87.3 carries Moschus AND Sophronius AND Procopius** — 632 of the 868
columns. One column map, one crop calibration, one OCR pass over one volume's
plates covers three of the five works. Dorotheus needs PG 88 and Antiochus PG 89.
**So the whole block is three volumes, not five**, and 87.3 is far and away the
highest-value single target. Sequence the volume work 87.3 → 88 → 89, but keep
**Antiochus first for translation** (6 columns, it is the chapter-14 unlock, and
it pilots the OCR-as-source path at a length where a total hand-check is trivial).

### 8a.F — Dorotheus QUEUED; PG 88's concordance is NON-LINEAR (2026-08-04)

Source and both witnesses are on disk (`raw/pg088/088.pdf` 125 MB;
`raw/scans/pg088/copyA_088_djvu.xml` 69 MB for the Latin twin;
`copyB_088_djvu.xml` 79 MB as third witness). jp2 deliberately skipped — 2.66 GB
against 13 GB free, and the PDF renders fine at 400 dpi.

**⛔ The finding that changes the harvest plan: PG 88 has no usable linear
column↔page formula.** PG 89's `colLeft = 2·page − 13` held across its whole
span. PG 88 does not behave that way:

- **Plate-verified anchor 1:** PDF page 836 = cols **1611|1612**, head *S.
  DOROTHEI ABBATIS* — Dorotheus's opening.
- **Plate-verified anchor 2:** PDF page 952 = cols **1799|1800** — the linear fit
  from anchor 1 predicted **1843|1844**. **44 columns of drift.**
- Average slope across the work is **1.621 columns per leaf, not 2.000**, so
  roughly a fifth of the leaves do not advance the column count at all
  (interleaved *Notae*, plates, or scan inserts — not yet diagnosed).
- Consequently **col 1844 sits near leaf 975, not 951**: Dorotheus occupies
  about **141 leaves, not the 117** a linear fit predicts. A harvest that trusted
  the formula would have silently stopped 24 leaves short — losing the end of the
  work, which is exactly where the *Epistolae* are.

⚑ **Generalise: verify the concordance at BOTH ENDS of every work, never just at
its start.** PG 89 was verified at one end and happened to be linear; PG 88 is
not, and one anchor would have concealed it. This is the same shape as the
step-2 error corrected in §4 — one confirmed example does not establish a
relation across a whole work.

**Next, and it is mechanical (Sonnet per §3):** build a per-leaf column map for
leaves ~835–975 into `data/pg-column-maps/pg088.json` from copy A's running
heads, smoothed against the observed slope and **spot-verified against renders at
several points, not merely at the ends**. Record per-leaf Greek/Latin parity;
PG 88's parity has not yet been measured and must not be assumed to alternate as
PG 89's did.

### 8a.G — ⛔ THE ABOVE IS WRONG. PG 88 IS LINEAR; THE SCAN REPEATS ITSELF (2026-08-05)

Two things were wrong in §8a.F, and the map built on them was unusable.

**1. The map never interpolated anything — it stalled.** `colLeft` gave **1613 to
every leaf from 836 to 850**, and **1619 to all 99 leaves from 852 to 950**: 14
distinct column numbers across 139 leaves. Nothing consumes the field yet, so
nothing shipped wrong, but Dorotheus could not have been chunked from it, and
every citation it produced would have been false.

**2. PG 88's pagination is perfectly ordinary — +2 columns per leaf, everywhere.**
What is not ordinary is the SCAN. `raw/pg088/088.pdf` contains **three re-scanned
blocks**, each plate-verified at its boundary:

| after leaf | last col | resumes at leaf | at col | leaves repeated |
|---|---|---|---|---|
| 864 | 1669 | 865 | **1659** | 6 |
| 892 | 1713 | 893 | **1695** | 10 |
| 940 | 1789 | 941 | **1779** | 6 |

Leaf 865 reprints leaf 859's columns 1659\|1660 with identical body text
(*excidat. 391 Is igitur perfectus timor ab hac cha-*), confirmed on a solo
render, not just a contact sheet. **Those 22 duplicated leaves are the entire
missing 0.379 columns/leaf.** 139 leaves − 22 duplicates = **117 unique leaves =
234 columns = 1611–1844 exactly**, which is the work's own stated range.

So the alarming §8a.F conclusion — that the work runs to leaf ~975 and a linear
harvest would stop 24 leaves short and lose the *Epistolae* — was an artifact.
**The linear fit was right about the volume and wrong about the file.**

⚑ **The generalised rule survives but its REASON changes, and the new reason is
the useful one: a slope that is not 2.000 is evidence about the SCAN, not about
the volume.** Verify both ends — then, when they disagree, look for repeated
pages before concluding the pagination is irregular. **Do not "fix" a bad slope by
interpolating column numbers**; interpolation spreads the error evenly over every
leaf and silently mis-addresses every citation, which is strictly worse than a
map that fails loudly.

**Rebuilt 2026-08-05** by `scripts/pg-column-map-rebuild.py` (heads from both
copies via `scripts/pg-heads-extract.py`, Viterbi over {continue +2, start a new
run}, plate anchors as hard constraints). Result: **117/117 columns covered, zero
uncovered**, 22 leaves carrying `skipInHarvest`. Checks it passes that were NOT
fed to it: leaf 837 = 1615\|1616 (read off the plate), **leaf 951 = 1799\|1800 —
§8a.F's own second anchor, deliberately withheld from the fit and reproduced
exactly**, and leaf 973 = 1843\|1844, the work's stated end.

⚠ **Open, and a judgement call not a mechanical one: the map keeps the FIRST
scan of a repeated leaf.** A block may well have been re-shot because the first
pass was bad. Before harvesting the three affected stretches, compare a duplicate
pair and keep the better plate.


#### 8a.G.1 — Which scan of a duplicated leaf to keep: RULED, keep the first (2026-08-05)

This was one of the three things owed before Batch 2. **Ruling: the map's
keep-first default stands; no re-shot block is a quality repair.** Measured, not
eyeballed — `scripts/pg-dup-leaf-compare.py` (written for this) renders both
members of all **22 pairs** and scores the Greek column of each.

The worry was reasonable: a block gets re-shot *because* the first pass was bad,
which would make keep-first exactly backwards. It is not what happened here.

- **Sharpness separates nothing.** All 22 pairs fall inside ±4%, well under the
  15% margin the tool needs before it will name a winner: 22 toss-ups, 0 either
  way. The reason is structural — **the plates are 1-bit JBIG2 at 600 dpi**, so
  contrast is pinned at its maximum on every leaf (254 across all 44 scans) and
  no focus gradient survives the binarisation. A grey-scale focus proxy cannot
  discriminate bitonal scans, and any future tool that claims to is measuring
  noise.
- **They are nonetheless genuinely different exposures**, not one page object
  referenced twice — `pdfimages -list` gives different byte counts and even
  different pixel dimensions (e.g. 4032×6214 vs 3982×6204 for 883/893). So the
  question was real; the answer is just that both shots are good.
- **A direct look confirms it.** Leaves 883 and 893 at native resolution are the
  same plate at the same legibility; the re-shot page is framed a little
  differently and nothing more.

**Two false alarms the margin metrics threw, both run down and dismissed:**

1. *leaf 859 shows ink at the very right page edge (margin 0)* — not clipping.
   Read at 600 dpi the Greek column's line-ends are all present with a clean
   right margin; the flag was scan-edge dirt.
2. *several first scans have very tight bottom margins (8–47 px) where their
   re-shots have 74–119* — this is the **"Digitized by Google" watermark**, which
   sits below the type and shifts with framing. It is on both members of every
   pair and never touches the text.

⚑ **Durable:** on this volume, *framing* varies between shots and *quality* does
not. Harvest from the first scan of a duplicated block and do not spend another
session re-deciding this.

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

#### 8a.G.2 — Full-width Greek lines: the defect, and the workflow that finds them (2026-08-05)

**The defect.** When a paragraph's Greek runs longer than its facing Latin,
Migne does not pad the Latin — he ends the Latin paragraph and sets the Greek
tail **across the full page measure**, over the gutter and the Latin column's
width, resuming two columns at the next section. Plate-verified on PG 88
leaf 847, the last two lines of ch. XIII:

> κρωσις τῆς ἀλόγου ἐπιθυμίας· καὶ τὸν ἀνάλαβον κατὰ τῶν ὤμων, ὅ ἐστι σταυρός.
> Ἰδοὺ καὶ τὸ κουκούλιον· ὅ ἐστι σημεῖον τῆς ἀκακίας, καὶ τῆς ἐν Χριστῷ νηπιότητος.

A per-column crop keeps only the **right half** of such a line and drops the
left. **The wreckage does not look like wreckage** — what survives still reads as
fluent prose. Both blind passes over leaf 847 flagged it without being able to
name it: one saw `ἡ νέ-` with no continuation, the other saw `τὸ κου-` jumping
straight to `Χριστῷ`, which is that line minus its left half. Neither invented a
bridge, and that is the only reason it was recoverable.

**Why there is no geometric detector.** `pg-fullwidth-lines.py` documents five
attempts, each failing differently; the file keeps them so they are not retried.
The two live failure modes are in direct tension and no threshold resolves them:
a full-width line may have a **word space sitting in the gutter** (leaf 847's
first line breaks between `ἀνάλαβον` and `κατὰ`), so its gutter ink is sparse;
while a **marginal capital flanked by intruding letters** has gutter ink that is
dense and multi-run. Sparseness fails, run-count fails. What actually separates
the cases is that the glyphs beside the gutter are **Greek** on a full-width line
and **Latin** on an ordinary one — a reading judgement, not a measurement. The
script survives only as a pre-filter; **its counts are not to be quoted.**

**The workflow (built and verified end-to-end on leaf 847):**
1. `scripts/pg-fullwidth-scan.py` — renders each leaf whole at 200 dpi with
   labelled horizontal bands **L01…L14** down the left margin. Greek and Latin
   are trivially distinguishable at this resolution.
2. A reading pass reports **band labels, never pixels** — models estimate
   coordinates poorly, and a mis-stated position crops the wrong rows, losing
   exactly the text the pass exists to recover. It also quotes the first few
   Greek words of each line, so every hit can be located and verified.
3. `scripts/pg-fullwidth-crop.py` — crops the named bands **full page width** at
   400 dpi, padded by half a band above and below. Padding is deliberate: a band
   is a place to look, not a measurement.
4. A transcription pass reads each full-width line as **one line**, left edge to
   right edge, ignoring the neighbouring two-column lines.

The scan renders deliberately carry **no marks showing where the script thinks
the lines are** — pre-marking would anchor the reader to the very geometry that
has already failed.

**Applies to every Migne parallel-column volume, not just PG 88.** Any work
harvested by column crops before 2026-08-05 may have lost the left half of a
paragraph-final line; the loss is invisible in the shipped text. Not yet audited
for the PG works already live.

#### 8a.G.3 — Why full-page harvesting works: the transcriber need not notice (2026-08-05)

The first full-page pass over leaves 845–847 produced a result worth recording,
because it is the strongest argument for the model change and it arrived by
accident.

**The agent reported that leaves 845 and 847 carried no full-width lines. Both
do — and it transcribed them correctly anyway.** Leaf 847's `νέ-|κρωσις τῆς
ἀλόγου ἐπιθυμίας· καὶ τὸν ἀνάλαβον κατὰ τῶν ὤμων…` is complete, hyphen joined,
`ἀνάλαβον` present; leaf 845's two page-wide lines are complete. It simply
followed the text across the page without registering that anything unusual had
happened.

**That is the point.** Under column cropping, the defect had to be *detected* —
by a geometric test that never worked, or a vision pass, or an adjudicator
noticing a fragment. Under full-page harvesting there is nothing to detect: the
line is on the page, so it gets read. A defect that requires recognition is a
defect that will eventually be missed; this one no longer requires recognition.

(The agent's line-BREAK structure differs — on 847 it split the page-wide line
at the gutter into two, on 845 it kept them whole. Layout rule 1 wants the
printed breaks, so that is a real if minor infidelity. It costs no text and no
anchor, and is worth fixing in the prompt rather than by re-reading.)

**A cross-check fell out of it too.** The same lines had been recovered
separately by the band workflow, and the two independent recoveries disagree on
one letter: the band pass read `χατὰ τοὺς πατέρας ἡμῶν`, the full-page pass
`κατὰ`. The full-page pass applied the baseline test (κ sits on the baseline, χ
descends below it) that adjudication had established in between. **κατὰ is
right**, and the disagreement is a clean demonstration that the κ/χ guidance
changes outcomes rather than merely sounding sensible.
