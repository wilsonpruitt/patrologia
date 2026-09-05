# *Glossa ordinaria*, **Liber Genesis** — cruces

Anselm of Laon and his school, PL 113 cols 0067B–0182D. **47 chunks, ~46,600 Latin words →
~70,800 English (1.52×), translated in nine Opus stints, 2026-09-05.**

Apparatus as merged: **96 `[var:]` · 2 `[sic:]` · 8 `[ed:]` · 1 `[cj:]` · 1 `[nt:]` · 0 `[d:]`.**
`verify-english` OK on all 47 chunks. `plate-gate` GREEN — **50 recorded plate reads covering 96 of
the work's 116 columns (83%)**, and every column carrying a marker was read.

---

## §0 · WORK-WIDE CONVENTIONS, AND WHAT THE MERGE CHANGED

⛔ **This section is the reconciliation, and it is the only place in this file where a stint's text
was overridden. Everything below §0 is the nine stint files verbatim** (headings demoted one level),
including the places where an early stint says something a later one corrected — those corrections
are recorded in the later stint's own section and are not back-edited, so the reasoning stays
legible. **Read §0 before trusting a convention statement further down.**

### What was already unanimous — measured, not assumed

Nine stints, briefed from the same series file, converged without needing to be reconciled. Each of
these was checked mechanically across all 47 chunks at merge time:

| convention | check | result |
|---|---|---|
| `etc., *usque ad*` (Migne's splice) → `etc., *as far as*` | 245 formula sites, Latin vs English | **1:1, all nine ranges** |
| sense tags `*Historice / Allegorice / Mystice / Moraliter*` | 49 instances | **1:1 — 6 / 21 / 16 / 6** |
| `## CAPUT N.` heads | 60 heads | **60 both sides, no Latin left in an English head** |
| `mysterium` / `sacramentum` kept apart | 9 and 24 | **1:1 after one repair, below** |
| `turba` → crowd · `multitudo` → multitude | 1 and 15 | **1:1** |
| `daemonium` → demon | 4 | **1:1** |
| frontmatter copied verbatim from the Latin twin | 47 chunks | **byte-identical, field order included** |

⭐ The `usque ad` result is the one worth naming, because it is the convention most likely to drift
and the hardest to check: **two ranges appeared to disagree and neither did.** Chunk 0016 carries
Migne's own abbreviated `etc., *usque,*` (no *ad*), correctly read as the formula; chunk 0023 carries
`*uque ad*`, also correctly read as the formula. Both stints had documented their reasoning, so the
merge only had to confirm it.
⛔ **Correction, 2026-09-05, from the Gallica check:** the merge first recorded that second site as
*our twin's* typo. It is **Migne's** — Gallica prints `uque ad` at 0131C exactly as our twin has it.
The *rendering* is unaffected and still right (it is the splice formula either way), but the
attribution was backwards: there is no patch here, and a `[sic:]` is a live candidate instead.

### ⚑ THE ONE REAL DRIFT, AND WHY IT MATTERED — `pactum`

**Two renderings were in the work: `pactum` → *compact* in the 0019–0023 range (6 sites), and
`pactum` → *covenant* in three sites elsewhere (0013, 0014, 0025).**

⛔ **Collapsing them would have destroyed an argument on the page.** At 0122D Migne glosses the
Hebrew: *In Hebraeo* berith *quod **non testamentum, sed foedus, sive pactum** significat* — the
whole point is that one Hebrew word answers to three Latin ones. Render `pactum` as "covenant" and
that sentence says *not testament, but covenant, or covenant*, which argues nothing. This is the
11551 *epistylium*/"epistyle" failure exactly: two stints, neither able to see the other, diverging
on the vocabulary a third passage's argument rests on.

**Resolved work-wide in favour of the range that had the argument in front of it:**

    testamentum → testament    ·    foedus → covenant    ·    pactum → compact

Three sites were changed by the merge — 0013 *receive a compact*, 0014 *establish my compact*,
0025 *made a compact with Abimelech*. ⚑ `foedus` appears as a noun **only** in the 0019–0023 range,
so "covenant" is unambiguous everywhere else in the work.
⚠ **Not a fourth site:** 0011 renders *coarctatis* "well **compacted**" of the ark's timber — an
ordinary participle from a different root, unrelated to the triad. Leave it; a later sweep should
not "harmonise" it.

### ⚑ ONE AXIS CROSSOVER REPAIRED — `sacramentum` rendered as its own partner

0032 read *nec indignatur cognito **sacramento*** as "nor is he indignant, the **mystery** being
known" — in a chunk that renders *sacramento* "sacrament" three other times, twelve lines away.
Changed to *the sacrament being known*. The pair is now exactly 9 and 24, 1:1 across the work.
⭐ Both repairs in this section were found by counting Latin against English work-wide, not by
reading: a crossover inside one chunk is invisible to the stint that made it and to `verify-english`.

### Conventions settled by a stint and adopted by the rest

Stated once here; the reasoning is in the stint section named.

1. **No `[var:]` on a quotation Migne labels himself** as a rival version — *Alia translatio*,
   *quidam codices*, *secundum Hebraeum*, *Hebraica veritas*, an announced LXX/Aquila/Symmachus/
   Theodotion reading. (Stint 3.) Roughly 40 divergences across the work decline by this rule alone;
   without it the informative markers are buried.
2. **Words follow the plate; punctuation follows the twin.** (Stint 3.) Following the plate on a
   *mark* manufactures a mismatch in the very instrument that finds real ones. **One deliberate
   exception, at 0178D** (stint 9), where the twin's added period cuts the sentence into a verbless
   fragment — argued in place.
3. **An italic Latin word: MEANING is Englished, a word MENTIONED AS A WORD is not.** (Stint 4,
   applied by stints 6, 7, 8, 9.) *domus Dei* → *the house of God*; but where the argument is about
   the letter-sequence itself, the Latin stands.
4. **`usque ad` is decided per occurrence by the `etc.` splice test**, never by italic membership.
   Work-wide: **245 formulas**, the remainder ordinary.
5. **Heads mirror the plate's own form** — `CAPUT PRIMUM` → *CHAPTER ONE* (a word, not a numeral),
   and Migne's single abbreviated `CAP. XLIV.` → *CHAP. XLIV.* `(cont.)` rides as the chunker set it.
6. **The abridgment's tails are parsed as strictly as prose, and no verb or object is ever supplied**
   to complete an `usque ad` splice. (Stint 2.)
7. **Unpaired guillemets are mirrored, never tidied**, and no policy is adopted about one without
   looking at the column — our twin has been caught **both** supplying a mark Migne does not print
   (0113C, 0125C) and dropping one he does (0106A, 0115D).

### ⛔ WHAT A LATER READER MUST NOT TAKE FROM THIS FILE

- **Single-witness letter-level plate calls are not confirmed.** The archive.org copy is over-inked
  in places and manufactured **12 divergences at pp. 85–88 and 13 of 15 at pp. 92–96**, all refuted
  by Gallica, with our TEI twin right every time. Several stint sections below were written before
  that was known and state such calls as findings. **See `data/briefs/8950-PATCH-GATE-READ-FIRST.md`
  before applying any patch.** The rule: **a `[sic:]` needs two witnesses; a dropped word needs one**
  — ink can turn one letter into another, but it cannot put on the page a word that is not there.
- **The two `[sic:]` that stand met that bar**: `pinguedidine` @0152A (on the plate *and* verbatim in
  our twin) and `trangressionis` @0169B (read on both copies).
- ⛔ **THREE NON-WORDS WERE FILED AS OURS AND ARE MIGNE'S** (Gallica, 2026-09-05): `dilicta` @0099C,
  `uque ad` @0131C, `virginet` @0130D. The stints that met them declined a `[sic:]` on the ground
  that our twin had corrupted a clean plate — the plate carries all three. **No patch; three live
  `[sic:]` candidates**, which is the exact reverse of how they were filed. Anything in the stint
  sections below that calls these "ours" is superseded here.
- **Our Vulgate comparand has typos** that manufacture divergences no plate read can catch — *Suscipe*
  for *Suspice* at Gn 15:5, *trienem* for *triennem* at Gn 15:9, both inside one column of this work.
  See the ERRATA in `sources/vulgate/README.md`.

### Open at merge time

- ✅ **CLOSED at the merge — the six open-ended lemmata** (`data/briefs/8950-OPEN-ENDED-FOR-MERGE.md`),
  which no instrument could see until the harvester was fixed. All six collated under 7a″:
  **zero new markers.** Four agree with their verse verbatim as far as Migne's `etc.`; one (0069A,
  Sir 18:1 *vivit*/*vivet*) is the site the 0000–0003 stint had already declined by name; and 0100C
  only looked like a divergence — *terra Naid* is absent from the Clementine, but Migne labels the
  reading `LXX:` himself and the properly-closed lemma four words earlier agrees with Gn 4:16
  exactly. ⚑ On a guillemet book an unclosed `«` often opens a quotation of ANOTHER VERSION rather
  than a lemma, and what settles it is the closed lemma standing beside it.
- **The TEI patch pass is VERIFIED against a second witness and its result is mostly negative.**
  125 single-witness claims were checked at Gallica (`bpt6k5505319w`, `f = (col+1)/2`, corners read
  first on every leaf): **~100 REFUTED, and not one letter-level claim survived in any file.** What
  stands is a narrow set — **lost Hebrew** (whole non-Latin words), **Migne's line-head `«`
  repeats**, a few **defects in our own transcription against a clean plate**, and two spacing/mark
  forms. ⛔ **The `[sic:]` backlog those files predicted has evaporated**: no `[sic:]` is owed
  anywhere in cols 0095–0160, because the defects they accused Migne of are not on his page.
- ⛔⛔ **THE DROPPED `non` AT 0141B DOES NOT EXIST**, and it was reported as this work's most
  important finding. Gallica f71 prints *quia in eo quod credidit, **vacua non remansit***: no `non`
  after *quia*, the phrase closed up at normal spacing, and **the sentence's only `non` standing in
  the next clause**. The reader attributed a word that is genuinely on the page to the wrong slot,
  in a sentence whose argument wanted a negative there — **7a″ conformation operating inside a plate
  read**, where nothing downstream checks for it. The English has been reverted.
- **Three non-words are MIGNE'S, filed as ours** — `dilicta` @0099C, `uque ad` @0131C, `virginet`
  @0130D — so three `[sic:]` are available where three patches were expected. Not fired; a later
  session may.
- **The blind polarity read has not run.** ⚑ Its premise is now cleaner than when this file was
  written: our Latin is no longer believed to be missing a negation, so the pass compares an English
  against a Latin twin that two witnesses agree with.


---

## STINT 1 — chunks 0000–0003 (cols 0067B–0082A)

*Filed as `cruces-0000.md`; merged verbatim, headings demoted one level. Nothing in it was rewritten — where a later stint corrected it, the correction stands in that stint's section.*


Stint 1 of 8950. Four chunks, 6,252 Latin body words → 9,183 English (1.47×).
`verify-english.mjs` reports **no error on 0000–0003**: column anchors, `[n:]` notes,
guillemets, italics and question marks all 1:1 with the Latin twins.

**Apparatus fired: 5 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
Every `[var:]` stands on a column recorded as read at the plate (0067, 0069, 0070, 0081) **and**
is corroborated by the archive.org scan's own OCR (§2). Nothing was marked on an unread column.

Counts, chunk by chunk (Latin = English in every case):
guillemets `«`/`»` — 0000: 42/40 · 0001: 36/36 · 0002: 23/26 · 0003: 37/35 (frontmatter included).
`[n:]` notes — 19 / 26 / 23 / 29. Question marks — 3 / 6 / 0 / 1.

---

### §0 · SPAN COUNT AGAINST THE BRIEF — ONE SPAN IS MISSING FROM `8950-lemmata-0000.txt`

**My Latin carries 168 marked spans; the brief prints 167.** Counted mechanically over the four
chunk bodies with `«[^«»]*»|\*[^*\n]+\*`, then diffed span-for-span against the brief's inventory
lines. The lists agree everywhere except:

- ⛔ **`« Mente servio legi Dei, »` — 0075B, chunk 0002 — is NOT in the brief.** Collated here
  independently: Rom 7:25 Clementine reads *Igitur ego ipse **mente servio legi Dei** : carne
  autem, legi peccati.* Migne's span is an exact whole-word fragment of the Clementine. **No
  divergence.** (Its twin at 0082C, chunk 0004, sets the same words with the `[n:]` inside the
  guillemets — a different stint's range.)
- One presentational difference, not a count difference: at 0079C the brief prints the span as
  `« Dixit quoque Deus: Producat « terra, »` (outer `«` paired with the closing `»`) where my
  regex isolates the inner `« terra, »`. Same single site, counted once either way.

**So: 167 + 1 = 168, and the brief's omission is at the head of chunk 0002, not at a range
boundary** — i.e. it is not the 9001 mis-split shape. It looks like a single dropped line rather
than a bad cut. A later stint should still run its own count.

---

### §1 · CONVENTIONS — inherited unchanged, plus four this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were not re-opened: `VERS. n.--` passes verbatim;
the lemma is Englished; a fragmentary lemma is rendered as the phrase it stands for; sigla ride as
`[n: …]` with Migne's own internal spacing (`(BEDA, in Hexaem. )`, `(ISID., in Gen.? )`,
`(BED., ibid.)`); `*usque ad*` → ***as far as*** with **no verb ever supplied** — all 31
occurrences in these chunks follow an `etc.` and are the abridgment formula.

⚠ **The `usque ad` LOOK-ALIKES in this range, all ordinary Latin, all rendered by sense** (brief
addendum D; none italicised in the Latin, and none follows an `etc.`):
0000 @0070D *ab Adam **usque ad** Noe* → "from Adam to Noah" · 0001 @0073D *omnes partes terrae
**usque ad** coelum texerant* → "covered all parts of the earth up to the heaven" · 0002 @0075B
*divina mandata praeteribant **usque ad** Saulis malitiam* → "until the wickedness of Saul"
(inside an abridgment tail — the formula and a temporal use in one sentence) · 0002 @0077D *quasi
carcer sit **usque ad** tempus judicii* → "until the time of judgment". Four of thirty-five.

#### (a) NEW — a citation siglum that arrives as an ITALIC span, not as an `[n:]` note

0002 @0077B–C sets Migne's source-siglum in italics rather than as a note:
`*(AUG., lib. II de Gen. ad litt., ex c. 1, 2, 3, 4, [0077C] 5 et 6, tom. III.)*` — and the column
anchor falls **inside** it. Every one of its twenty-two siblings in the same chunk is an `[n:]`.

**Ruling taken: treat it exactly as an `[n:]` would be treated — Latin verbatim, unanglicized,
italics preserved 1:1, anchor kept in place.** Convention 4 of the series brief says sigla need no
new convention because the locked register already governs them ("markers pass through verbatim,
Latin abbreviations unanglicized"); the register does not depend on which wrapper Corpus Corporum
gave it. Englishing it because it happens to be italic would make one siglum in this book read
differently from the other ninety-seven in the same four chunks.
⚑ This is very likely a TEI defect (a `<note>` transcribed as `<hi rend="italic">`), not Migne
printing this one differently. **Not marked** — a `[sic:]`/`[ed:]` would assert something about
the plate that nothing here supports. Filed for the plate in §4.

#### (b) NEW — a gloss that DISTINGUISHES LATIN LEXEMES, with one English word for all of them

0002 @0075A–B: *Sementis, frugum et arborum; semen, hominum, et animalium. Seminium vel sementum,
cujusque rei exordium.* English has "seed" for all four. Italics cannot be used — every italic
span must be 1:1 with the Latin twin, and the twin has none here.

**Ruling: keep the four Latin words in roman inside our own straight quotes** —
`"Sementis" is of crops and of trees; "semen," of men and of animals. "Seminium" or "sementum,"
the beginning of anything whatever.` Pattern 6 makes `" "` ours and free (guillemet parity is
untouched), and the words being *mentioned rather than used* is the same call the PG register
already makes for a mentioned particle. Rendering them all "seed" would have turned a lexical
note into a tautology.

#### (c) The three supplied colons are Pattern 8b, and they are the ONLY punctuation added

A band-by-band comparison (Test 3 — colons, semicolons, `?`, `«`, `»`, `!`, per column anchor,
markers stripped) returned **exactly three mismatched bands in the four chunks, all the same
class**, and zero elsewhere:

| column | Migne | English |
|---|---|---|
| 0071A | *Si autem quaeritur, ubi est facta … tegeret? patet quod* | But if it be asked**:** where was it made … ? it is plain that |
| 0073A | *Quaeritur etiam si stet an moveatur coelum?* | It is also asked**:** does the heaven stand still, or is it moved? |
| 0081C | *Quaeritur, cum singillatim caetera bona dicantur, cur homo … dicatur?* | It is asked**:** since the rest are severally called good, why is man … ? |

Migne's `?` is kept in all three; English cannot end an indirect construction with it (8b).
⚑ The scan pass that found these also found **thirteen unlicensed marks that had crept in** — four
supplied colons of apposition at 0069A (*Coelum, creatura spiritualis* etc.), one each at 0068C,
0069B, 0070C, 0075A, 0076D, four supplied semicolons (0077B, 0078D, 0081A, 0081C) and **one
DESTROYED colon at 0078A** (*per haec autem erudimus: Cum igitur*) and **one at 0075C**
(*infimae parti mundi:*). All repaired. **The totals had very nearly cancelled** — this is Test 3
earning its place a third time.

⛔ **Not one comma→semicolon sweep was made.** Migne prints semicolons freely in this book (47 in
these four chunks), so Tobit's narrow exception does not apply here and was not invoked.

#### (d) `CAPUT PRIMUM.` → `CHAPTER ONE.`, and `(cont.)` rides as the chunker set it

`## CAPUT PRIMUM. (cont.)` → `## CHAPTER ONE. (cont.)`. Spelled, per the corpus rule (61 works
`CHAPTER ONE.`, zero spelled forms above ONE).

---

### §2 · ⭐ THE ARCHIVE SCAN'S OWN OCR IS ON DISK, AND IT IS A SECOND WITNESS — USE IT

`raw/scans/pl113/patrologiaecurs04migngoog_djvu.txt` is Google's OCR **of the plate scan**, not of
Corpus Corporum. It is independent of our TEI, it is free, and it settled or strengthened nine
calls in this stint. It is noisy (`coelnm`, `Qai`, `seternum`) and it is **not a plate read** —
it cannot license a marker on its own — but where our twin prints a non-word and the OCR prints a
word, the OCR is telling you the non-word is ours.

⚠ Two mechanics, or it returns nothing: the file is hard-wrapped and double-spaced, so
**join lines and squeeze spaces first** (`tr '\n' ' ' | tr -s ' '`); and the two columns of a page
**interleave in the OCR stream**, so a passage can be cut in half by a line from the facing column
(this happened at 0069B, §3.2).

**Every check run against it, with the result** — a list of findings alone cannot be told from a
report by an agent that never looked:

| site | our TEI | OCR of the plate | verdict |
|---|---|---|---|
| 0069B | *se **recerunt** deformes* | `fecerunt deformes` | **ours** — §3.1 |
| 0067C | *In principio **fecit** Deus* | `« In principio fecit Deus c ccelum et terram, »` | Migne's; and he prints a **repeated `«`** our TEI drops |
| 0069A | *de materia informi* | `« Qai fecisti mundum de materia informi (Sap. xi). »` | Migne's — `[var:]` licensed |
| 0069C | *astra matutina … filii Dei?* | `« Ubi eras cum me laudarent astra matutina, et « jobilareot omnes filii Dei ? »` | Migne's; **second repeated `«` our TEI drops** |
| 0070A/B/C | *Spiritus **Domini*** | `« Et Spiritus Domini ferebatur super aquas^ »` ×2 | Migne's — `[var:]` licensed |
| 0070C | *Emitte, ait, Spiritum tuum* | `Psal. ciii : « Emitte, ait, Spir…` | Migne's — `[var:]` licensed |
| 0071C | *primo **invisibilibus** credit* | `primo invisi-bilibus credit … Dominus apparere` | **Migne's** — §3.4, a checked negative |
| 0073C | *« Congregentur aquae? »* | `c Congregentor aqnee?` | Migne's `?` — preserved |
| 0075A | *Quod tibi non vis fieri* | `« Quod tibi non vis iieri, alii non feceris (ro6. iv). »` | Migne's — §5 |
| 0075A | *et vos **eadem** illis facite* | `et vos cadem illis facite (Matth vii)` | Migne's — §5 |
| 0075A | `Sementem. »` (orphan close) | `Sementem. » (Strab., Rab.)` | Migne's — reproduced unopened |
| 0075D | `Et dividant diem. »` (orphan close) | `Et dividant diem. » (Beda, in Hexaem.)` | Migne's — reproduced unopened |
| 0078D | *possunt,ita plurimae* | `vivere possunt, ita plurimse aves` | **ours** — a lost space, §4 |
| 0081A | *Seminavimus spiritualia vobis* | `« Seminavimus spiritualia vobis, magnom est si car-nalia vestra metamus (1 Cor. iz). »` | Migne's — `[var:]` licensed |

---

### §3 · THE DECLINED LIST — suspect readings that took NO marker

The rule this stint worked to: **a `[sic:]` accuses Migne's type and a `[var:]` asserts Migne's
text; our Latin is not the printed page.** Where the file could not settle whose the defect was, or
where the column has not been read, the crux is the answer and the marker is not.

#### 3.1 ⛔ 0069B *se **recerunt** deformes* — a NON-WORD, and it is OURS, so no `[sic:]`

*« Et terram, » id est eos qui postea superbiendo, terram, id est terreni hominis imaginem,
portantes, se **recerunt** deformes.* `recerunt` is no Latin word. The plate's OCR reads
**`fecerunt deformes. « Terra autem erat inanis, » quia`** — the identical sentence, with the
following lemma attached, so it is certainly this site and not a homonym elsewhere in the volume.
An f→r substitution is a classic digitization artifact and its direction here is decided by the
witness, not by the sense.

**Rendered "made themselves deformed", with NO marker.** Both alternatives were live and both are
refused for the same reason Tobit refused them at *Nephtlali* (8970 §2): a `[sic: *recerunt*]`
would publicly accuse Migne of a defect the scan of his own page does not carry, and a
`[var:]` is about scripture, not type. The remaining option — carrying `*recerunt*` untranslated
under Pattern 7 without a marker — is forbidden by Pattern 12 and would print a hole for a defect
that is ours.

⚑ **Still owed: an eyes-on read of PDF p. 40 (cols 0069/0070) confirming `fecerunt`, and then a
`data/tei-patches/8950.json` entry**, so the Latin column converges on the English. Until that
patch lands the two columns disagree at this word, and §4 records it as a pending patch.

#### 3.2 0069B Eccli 18:1 *Qui **vivit** in aeternum* — Clementine has *vivet*. DECLINED.

Sir/Eccli 18:1 reads `Qui **vivet** in aeternum creavit omnia simul.` Migne prints *vivit*
(present). **One letter**, and `sources/vulgate/README.md` warns that this copy carries no later
upstream corrections, so a call turning on a single letter should say so rather than trust it.
A second, unrelated occurrence of the verse elsewhere in this volume also OCRs as `vivit`, which
makes it Migne's usage rather than a slip — but that is an argument about frequency, and frequency
proves an error exists, never whose it is. **Logged, not marked.** Rendered "Who lives for ever".

⚠ **The quotation is UNCLOSED in our twin and stays unclosed in the English** (Pattern 5
corollary): `« Qui vivit in [0069B] « aeternum, creavit omnia simul [n: (Eccli. XVIII)], secundum
originem tamen…`. Two opens, no close. The second `«` is Migne's line-continuation mark, which he
uses throughout this book; the OCR shows him closing the verse with `simul. »` at his other
printing of it, so **our twin has probably lost the `»`**, not Migne. Not repairable from here —
guillemets must be 1:1 with the twin. Filed in §4.

#### 3.3 0067B *ad se **imperfectionem** creaturae revocare* — OCR says *perfectionem*. DECLINED.

The OCR of p. 39 reads `ad se perfectionem creaturce re- vocare`. Our twin has *imperfectionem*.
The sense supports *imperfectionem* (God recalls the creature's **imperfection** to himself, the
whole clause being about *imperfectio* not imitating the Word's form), Augustine's *De Gen. ad
litt.* I.4 has *imperfectionem*, and a two-letter loss at a line start is exactly what this scan
does elsewhere (CLAUDE.md records this copy clipping the left margin on some pages). **So the OCR
is the likelier error here — but that is a judgment, not a reading.** Rendered *imperfectionem*
("the imperfection of the creature"); **no marker either way**; PDF p. 39, left column, is the
leaf that settles it.

#### 3.4 ⭐ 0071C *primo **invisibilibus** credit* — CHECKED, and it is MIGNE'S. A negative result.

Migne prints the same Isidore excerpt twice, four columns apart, and **the two copies differ**:

- 0071C (mine): *primo die, lucem fidei, quoniam primo **invisibilibus** credit propter quam fidem
  Dominus apparere dignatus est.*
- 0082C (chunk 0004, another stint): *primo die lucem fidei, quando primum **visibilibus** credit,
  propter quam fidem Dominus **visibiliter** apparere dignatus est.*

The 0082C form is the coherent one — faith in *visible* things, for which faith the Lord deigned to
appear *visibly* — and it is very tempting to call 0071C our corruption. **The OCR of p. 41 reads
`quoniam primo invisi- bilibus credit propter qoam fidem Dominus apparere dignatus est`, and the
OCR of p. 46 reads `quando primum visibilibos credit, pro- pter quam fidem Dominus visibiiiter`.
Both variants are on the plate.** Migne set the excerpt twice from different copy. Rendered as
printed on each side; no marker; **logged as a checked negative**, which is worth having precisely
because §3.1 came back the other way.

#### 3.5 Real words that read oddly, rendered as printed, no marker (brief addendum A)

- **0073A** *propter binarium **principem alternitatis*** — "the binary number, the chief of
  alternation". *alternitas* is attested medieval Latin; Jerome's *Adv. Iovin.* I.16 argues from
  the binary as the number that first departs from unity, which is what stands here. Rendered.
- **0070A** *quibus alia duo inserta sunt, aqua, scilicet, et terra, quibus insunt ignis et aer*
  — the apposition *aqua … et terra* sits after *inserta sunt* but must belong to the FIRST pair,
  since *quibus insunt ignis et aer* makes water and earth the containers. **Rendered in Migne's
  order, ambiguity intact** ("into which two others were inserted, water, namely, and earth, in
  which are fire and air"). Reordering to disambiguate would be a silent repair of his syntax.
- **0075B** the doubled ablative absolute — *separata labe, ac fluctibus carnalium tentationum,
  tanquam aridam habet terram **tentationibus separatis*** — says the separating twice, in
  different words. Not a `[d:]` (the runs are not the same run), and the 0082C twin phrases it
  once (*tanquam aridam habet mentem a perturbationibus maris*). **Both rendered.**
- **0080D** *quia spiritualis quisque **effectus**, et Deo similis, omnia judicat* — *effectus* as
  a participle ("made spiritual"), echoing 1 Cor 2:15. Ordinary. Rendered.

#### 3.6 Unexpressed subjects supplied, with what decided each

- **0072A** *quia si culpam rectitudo eliminat, cogitationis nostrae foribus assidens … pulsat.*
  Supplied **"guilt"** as the subject of *assidens … pulsat*. Decided by the sentence's own
  argument, not by proximity: Gregory's point is that sin is never so driven out that one rests
  unshaken — what returns to knock is *culpa*, the thing *rectitudo* has just expelled.
  *Rectitudo* is the nearer nominative and would reverse the moral.
- **0076C** *hinc esse aiunt quod multo longinquior a terris atque altior **quam luna** incedit.*
  Supplied **"it" = the sun**. Decided by *quam luna*: the term compared to the moon cannot be the
  moon.
- **0079C** *ut inter similia … distinguerentur a caeteris* — left with "they", the kinds, as the
  Latin leaves it; both readings (kinds / individuals) yield the same claim here, so nothing is at
  stake and nothing was chosen.

---

### §4 · PENDING TEI PATCHES / PLATE DEBTS — the Latin column disagrees with the plate here

None of these is repairable from the English side; each needs an eyes-on read and a
`data/tei-patches/8950.json` entry. **The English mirrors the TWIN in every case except §3.1**,
which is called out there.

1. **0069B `recerunt` → `fecerunt`** (§3.1). English already renders *fecerunt*; the Latin does
   not yet. This is the one live divergence between our two columns in this stint.
2. **0078D `possunt,ita` → `possunt, ita`** — a lost space; the OCR has the space. Invisible in the
   English, but it is a defect in the Latin column.
3. **0067C — Migne prints a REPEATED `«` our TEI drops**: `« In principio fecit Deus « coelum et
   terram, »`. The OCR's stray `c ccelum` is that guillemet.
4. **0069C — same class, second instance**: `« Ubi eras cum me laudarent astra matutina, et
   « jubilarent omnes filii Dei? »`.
   ⚑ **This is a CLASS, not two accidents.** Migne repeats `«` at the head of a continued line
   throughout this book; our TEI keeps it at 0069B and 0079A and drops it at 0067C and 0069C. Since
   guillemet parity is checked against the twin and not against the plate, **every dropped one is
   invisible to `verify-english`** — a later stint should expect more, and the count of `«` against
   `»` per chunk is the cheap detector (0000 and 0003 run two opens long, 0002 two closes long).
5. **0069B — the Eccli 18:1 quotation is unclosed in our twin** (§3.2); the OCR closes it at
   Migne's other printing. Possibly the same class as 3–4, in the other direction.
6. **0077B–C — the AUG. siglum is an italic span, not an `[n:]` note** (§1a). Very likely a TEI
   markup defect. Note parity is unaffected (both sides have 23 `[n:]`), so nothing downstream can
   see it, and this book's `fontes` index will silently lose one citation.

**Plate coverage for this range:** columns 0067–0070 and 0081–0082 are on the read list
(PDF pp. 39, 40, 46; page = (column + 11) / 2). **Columns 0071–0080 — pp. 41–45 — are UNREAD**, and
that is why §5's divergences at 0072D, 0073B, 0074D, 0075A, 0076A, 0078C and 0080B carry no marker.

---

### §5 · 7a″ — THE VULGATE COLLATION, ALL 168 SPANS

Collated against `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. **The spans
that AGREE are listed too** — a list of divergences alone cannot be told from a report by an agent
who only chased the ⚠ marks.

#### 5a. MARKED — five `[var:]`, every one on a read column and OCR-corroborated

| col | Migne prints | Clementine | marker |
|---|---|---|---|
| 0067C | `« In principio **fecit** Deus coelum et terram, »` | Gn 1:1 *In principio **creavit** Deus caelum et terram* | `[var: Vulg. Gen. 1:1 *creavit*, "created"]` |
| 0069A | `« Qui fecisti mundum de materia informi »` (*Sap. XI*) | Sap 11:18 *quae **creavit orbem terrarum ex materia invisa*** | `[var: …]` |
| 0070A | `« Et Spiritus **Domini** ferebatur super aquas. »` | Gn 1:2 *spiritus **Dei** ferebatur super aquas* | `[var: Vulg. Gen. 1:2 *Spiritus Dei*]` |
| 0070C | `« **Emitte**, ait, Spiritum tuum et creabuntur. »` | Ps 103:30 ***Emittes** spiritum tuum, et creabuntur* | `[var: Vulg. Ps. 103:30 *Emittes*]` |
| 0081A | `« **Seminavimus** spiritualia vobis, magnum est si carnalia vestra metamus »` | 1 Cor 9:11 ***Si nos vobis spiritualia seminavimus**, magnum est si **nos** carnalia vestra metamus **?*** | `[var: … a conditional …, closing as a question]` |

Notes on two of them. **0067C:** Migne prints *creavit* three times in the same paragraph and
*fecit* once, in the sentence whose whole point is that *principium* = the Son — so the divergence
sits inside the argument, not beside it; marked once, at the divergent occurrence only.
**0070A:** *Domini* is printed **four times** in this range (0070A, 0070B ×2, 0070C), and Migne's
own Trinitarian gloss two lines later parses the phrase as *Spiritus Dei, Spiritus sanctus* —
i.e. the exposition uses the Vulgate's word and the lemma does not. **Marked once, at the first
full occurrence**, per Pattern 14's practice of noting rather than repeating.

#### 5b. DIVERGENT, and DECLINED FOR THE SHIP TEST — columns 0071–0080 are unread

Each of these is a real difference from the Clementine and would carry a `[var:]` on a read column.
**All are rendered as Migne prints them.** The leaf that settles each is PDF p. (column + 11)/2.

| col | Migne | Clementine | note |
|---|---|---|---|
| 0072D | `« Fiat firmamentum et factum est ita, »` | Gn 1:6 has **no** *et factum est ita*; it closes 1:7 | **This is the whole point of Augustine's *quaeritur*** — why, after *fiat* and *factum est ita*, does he add *et fecit Deus*? Migne's copy-text carries the Old-Latin/LXX plus. p. 42. |
| 0073B | `« Coelum sicut liber plicabitur. »` (*Isa. XXXIV*) | Is 34:4 *et **complicabuntur** sicut liber **caeli*** | Different verb, number and subject. p. 42. |
| 0074D | `« pariet tibi, »` | Gn 3:18 *Spinas et tribulos **germinabit** tibi* | p. 43. |
| 0075A | `« Quod tibi non vis fieri, alii non feceris »` (*Tob. IV*) | Tob 4:16 *Quod ab alio oderis fieri tibi, vide ne tu aliquando alteri facias* | The proverbial form, not the Vulgate's. Introduced as *quidam sapiens ait*, which may be why. OCR-confirmed as Migne's. p. 43. |
| 0075A | `« Quaecunque vultis … et vos **eadem** illis facite »` (*Matth. VII*) | Mt 7:12 ***Omnia ergo** quaecumque vultis … et vos facite illis* | *eadem* added, *Omnia ergo* dropped. OCR-confirmed. p. 43. |
| 0076A | `« Fecit Deus duo luminaria. »` | Gn 1:16 ***Fecitque** Deus duo luminaria **magna*** | *magna* is dropped from the lemma and then argued about in the very next sentence (*Luminaria magna possumus accipere*). p. 43. |
| 0078C | `« Benedixitque **illis**, »` at **VERS. 22** | Gn 1:22 *Benedixitque **eis**, dicens*; *illis* is Gn **1:28** | ⚑ The `⚑ MATCHES ONLY ELSEWHERE` shape. And **this work prints the other form for the same verse at 0079D** — *« Benedixitque **eis** Deus dicens: Crescite et multiplicamini, »* — so Migne is inconsistent with himself two columns apart. p. 44. |
| 0080B | `« Et **fecit** Deus hominem ad imaginem **Dei**, »` (×3 in the paragraph) | Gn 1:27 *Et **creavit** Deus hominem ad imaginem **suam*** | Augustine's text, and the argument turns on it (*non Pater ad imaginem tantum Filii*). p. 45. |

#### 5c. DIVERGENT and DECLINED ON THE MERITS — the marker was weighed and refused

- **0069C Job 38:7** — Migne: `« Ubi eras cum me laudarent astra matutina, et jubilarent omnes
  filii Dei? »`; Clementine 38:7 *cum me laudarent **simul** astra matutina…*, and *Ubi eras* is
  **38:4**. Read column, OCR-confirmed as Migne's, so a marker was available. **Refused:** the
  omission of *simul* changes nothing the gloss argues (it argues that the *astra matutina* are the
  angels), and the join of 38:4 to 38:7 stays inside the chapter Migne actually cites, *Job XXXVIII*
  — a citation practice, not a text divergence. Firing here would spend the marker on noise.
  ⚠ The same lemma is clipped to its first half at 0068C, which agrees.
- **0079D Gn 1:22** — Migne: `« Benedixitque eis **Deus** dicens: Crescite et multiplicamini, »`;
  Clementine has no *Deus*. One supplied noun, no argument on it, unread column. Declined.
- **0081A** — `« fecit Deus hominem ad imaginem et similitudinem suam, »` conflates Gn 1:26
  (*ad imaginem et similitudinem **nostram***) with 1:27 (***creavit** … ad imaginem **suam***).
  **Read column, so a marker was available, and refused:** this is the gloss's own back-reference
  ("Post haec…"), a recall rather than a proof-text, and no step of the argument rests on the
  wording. Contrast 0081A's Paul quotation eight words later, which IS adduced as proof and IS
  marked.
- **0077D** — `« Secus firmamentum coeli, »` for Gn 1:20 *sub firmamento caeli*. **No marker by
  construction:** Migne labels it *Alia translatio*, so the divergence is already stated on the
  page in his own voice, and ours would tell the reader twice. (Same instinct as Pattern 12's rule
  about Migne's own *( sic )*.)

#### 5d. COLLATED AND AGREEING — checked, exact, no divergence

Gn 1:1 `« In principio creavit, »` (0067B, 0068B, 0068C) · `« In principio creavit Deus coelum et
terram. »` (0073D) · `« In principio creavit Deus coelum. »` + `« Et terram, »` (0069B, the
*Mystice* split) · Gn 1:2 `« Terra autem erat inanis, »` · `« Et vacua, »` · `« Inanis et vacua. »`
· `« Et tenebrae erant, »` / `« Tenebrae erant, »` · `« super faciem abyssi, »` · Gn 1:3
`« Dixitque Deus: Fiat lux. »` · `« Fiat lux, »` · `« Et facta est lux, »` / `« Facta est lux; »` ·
Gn 1:4 `« Et vidit Deus lucem, »` · Gn 1:5 `« Factumque est vespere. »` and its repeats · Gn 1:6
`« Fiat firmamentum, »` · `« Fiat firmamentum in medio. »` · Gn 1:7 `« Et fecit Deus firmamentum, »`
· `« Divisitque aquas quae erant, »` · `« et factum est ita »` in all six of its printings ·
Gn 1:8 `« Et factum est vespere, »` · Gn 1:9 `« Dixit vero Deus, »` · `« Congregentur aquae, »` and
`« Congregentur aquae? »` · Gn 1:10 `« Et vocavit Deus aridam terram. »` ·
`« Congregationesque aquarum appellavit maria. »` · Gn 1:11 `« Et ait: Germinet terra, »` ·
`« Germinet terra herbam, »` · `« Facientem semen. »` · `« lignum pomiferum. »` · Gn 1:12
`« Et protulit terra herbam, »` · `« Lignumque. »` · `Sementem. »` · Gn 1:13
`« Et factum est vespere et mane. »` · Gn 1:14 `« Dixit autem Deus: Fiant luminaria, »` ·
`Et dividant diem. »` · `« Et sint in signa, »` / `« in signa, »` · Gn 1:15 `« Ut luceant, »` ·
Gn 1:16 `« Luminare majus, »` · `« Et luminare minus, »` · Gn 1:17 `« Ut lucerent, »` · Gn 1:18
`« ut praeessent diei, »` · `« et nocti, »` · `« dividerent lucem ac tenebras, »` · Gn 1:20
`« Dixit etiam Deus, »` · `« Dixit etiam Deus: Producant aquae reptile, »` · `« Animae viventis. »`
· `« Sub firmamento » ,` · Gn 1:21 `« Creavitque Deus cete grandia, »` · `« Et omnem animam, »` ·
Gn 1:22 `« Crescite. »` · `« Crescite et multiplicamini, »` · Gn 1:24
`« Dixit quoque Deus: Producat « terra, »` · `« Producat terra, »` · `« In genere suo. »` · Gn 1:25
`« Et fecit Deus bestias terrae, »` · Gn 1:26 `« Faciamus hominem. »` · `« ad imaginem nostram, »` ·
`« Et praesit, »` · `« Et praesit piscibus maris et volatilibus coeli. »` · Gn 1:27
`« Et creavit Deus hominem ad imaginem, »` · `« Et creavit Deus, »` · `« ad imaginem suam. »` ·
`« ad imaginem Dei, »` · `« Masculum et feminam creavit eos, »` · Gn 1:28
`« Et dominamini piscibus, »` · `« Et dominamini piscibus maris. »` · Gn 1:29
`« Dixitque Deus: Ecce dedi, »` · Gn 1:30 `« Et factum est ita. »` · Gn 1:31 `« Viditque Deus, »` ·
`« Et factum est vespere et mane, »` · Ps 101:26 `« Initio tu, Domine, terram fundasti, »`
(**exact, including the vocative commas**) · Dn 3:72 `« Benedicite, lux et tenebrae, Domino, »`
(**exact**) · Rom 7:25 `« Mente servio legi Dei, »` (**exact — the span the brief omits, §0**) ·
1 Cor 4:16 `« Imitatores mei estote, »` (**exact**).

⚠ **`coelum` for *caelum* is orthography, not divergence**, and is not listed as one. Migne sets
*coelum* throughout; the Clementine sets *caelum*. Same for `Terram`/`Maria` capitalized as proper
names in the Clementine and lowercase in Migne's lemmata at 0073D–0074A.

---

### §6 · SECTIONS READ CLEAN

Read paragraph by paragraph against the Latin, asking only whether the English asserts what Migne
asserts (Test 4), after the counts were known clean:

- **0067B–0068C** — the *In principio* / *Dixit Deus, Fiat* argument, the densest and most negation-
  heavy passage in the stint (*Non enim habet vitam informem Verbum Dei, cui est idem esse quod
  vivere* against *Creatura vero spiritualis habet informem vitam, cui non est hoc esse quod
  vivere*). The two limbs are deliberately mirrored and the negatives are the only difference
  between them; both checked twice.
- **0072A–0073B** — Gregory on evening, Augustine on the firmament, Jerome on the binary. Clean.
- **0075C–0077B** — Isidore's day-by-day allegory and Bede on the luminaries. Clean.
- **0078A–0078B** — Theodoret on the beasts, the longest continuous narrative here. Clean.
- **0079C–0081D** — Augustine on *secundum genus suum*, the image of God, and the sixth day. Clean.

**Candidates rejected, with reasons, so a blind reader knows they were looked at:** §3.1–3.5 above,
plus — *nautarum* at 0071B (a real word, and divers are what is described; not *urinatorum*, and no
marker on a corpus argument, addendum A) · *Septem sunt coeli* at 0069B listing seven names for
what are then re-ordered by Jerome to three (Migne's source, not a defect) · `VERS. 17, 18-- ` at
0076C printing no period before the dashes where every other address in the range prints one
(reproduced verbatim; a spacing artifact of the kind §4.2 records, not worth a patch entry on its
own) · the five `. . . .` ellipsis runs after `VERS. n.--` (Migne's, reproduced with his own
spacing).


---

## STINT 2 — chunks 0004–0007 (cols 0082A–0095A)

*Filed as `cruces-0004.md`; merged verbatim, headings demoted one level. Nothing in it was rewritten — where a later stint corrected it, the correction stands in that stint's section.*


Translated 2026-09-05, one stint, 4 chunks (5,737 Latin words), on Opus.
Bands: **0082A–0095A** (CAPUT II from Gn 2:1, CAPUT II cont., CAPUT III to Gn 3:14).
⚠ The launch message named this range "0071B–0079C"; the chunks' own frontmatter and the
lemma brief both give **0082A–0095A**, and the word count (5,737) matches exactly. The band
figure in the launch message is wrong; the chunk numbers are right. Nothing was translated
outside 0004–0007.

**Marked-span count: 215 in my four chunks, against the 215 printed in
`data/briefs/8950-lemmata-0004.txt`. Exact.** Method: guillemet spans matched first
(`«.*?»`, non-greedy, DOTALL), then italic spans in what remains — italics nested inside a
guillemet span are not counted separately, which is the brief's own convention. Per chunk:
0004 27 `« »` + 27 `*…*`; 0005 35 + 25; 0006 20 + 12; 0007 43 + 26.

**Apparatus fired: 3 `[var:]` · 1 `[nt:]` (Migne's own foot note) · 0 `[sic:]` · 0 `[cj:]` ·
0 `[d:]` · 0 `[ed:]`.**
Parity with the Latin twins, per chunk, all exact: column anchors (14/14/10/14, verbatim and
in order), `[n:]` notes (39/33/15/41), guillemets, question marks (2/4/5/5), italic spans.
Punctuation compared **band by band** (colons, semicolons, guillemet-opens, question marks):
zero mismatched bands except the single licensed Pattern 8b colon at 0088D (§5).
EN/LA word ratio 1.49 / 1.48 / 1.51 / 1.53.

---

### §1 · CONVENTIONS — inherited, and what this stint had to decide

Ruth (8968) §1 and Tobit (8970) §1 govern unchanged and were not re-opened: `VERS. n.--`
passes through verbatim; the lemma is Englished; a fragmentary lemma is rendered as the
phrase it stands for; the attribution sigla are ordinary `[n: …]` notes with Migne's own
internal spacing, contents unanglicized; **the guillemets are the plate's, 1:1**, and their
contents are Englished.

#### (a) Sigla spacing reproduced character for character
`(BEDA, in Hexaem. )` ×2 · `(BED., ubi supra.)` · `(PROCOP. in Gen. )` ·
`(ISID. ex Aug. ubi supra. )` · `(AUG. ubi supra, c. 6)` (no terminal period — his) ·
`(AUG., l. VI de Gen. ad litt., c. I, tom. III.)` (Roman **I** for the chapter number — his).
All carried as printed, uncorrected.

#### (b) `*usque ad*` → `*as far as*`, 77 times, no verb and no object ever supplied
Every italic `*usque ad*` in these four chunks follows an `etc.` and names the point at which
the abridgment resumes — the `etc.` splice test passes on all of them. The resumption tails
land mid-clause constantly and are left mid-clause:
- 0085D `*as far as* he created that in which he should live` (no antecedent for *qua*).
- 0089D `*as far as* and to subjugate to the dominion of reason, grace cooperating` — the
  **object** of *subjugare* is inside the cut. Nothing supplied.
- 0084A `*as far as* and the rest` (*et reliqua*).
- 0084B `*as far as* Therefore on the seventh day no evening came on` — the tail opens with a
  capital *Ideo*, mid-sentence in ours; kept.
- 0084B `*as far as* and more truly morning?` — the tail carries Migne's `?` and keeps it.

**One variant form of the formula: `*usque ad haec*` at 0091D** — *Oblivio tamen, etc.,
**usque ad haec** c. 10: Providet bonos…*. The italic span includes *haec*, so the English
italic span is `*as far as these*` and the chapter reference stands outside it, as Migne sets
it. This is the formula, not ordinary Latin (it follows an `etc.` and names the resumption).

**Three ORDINARY, non-formula `usque ad` in these chunks — none italic, none after an
`etc.`, and each rendered by sense, per the brief's §D:**
1. **0084C** *Numerati sunt sex dies quibus universitas saeculi **a capite usque ad finem***
   → "from beginning to end". The head of a sentence whose own splice-formula stands four
   words later; the two sit in one clause, exactly the 8967 col 0953C shape.
2. **0086C** *pertingentem **usque ad** lunarem circulum* (Strabo on paradise's height)
   → "reaching as far as the lunar circle" — the English coincides with the formula's word,
   but by sense, not by formula.
3. **0089C** *nomina quae **usque ad** divisionem linguarum in Genesi legimus* (Jerome on
   Hebrew as the first language) → "until the division of tongues" — temporal.

#### (c) The vocabulary axes
- `gentes` — **two occurrences, rendered two ways, both by the axis**: 0089C *Significans
  **gentes** quae salvae fierent in Ecclesia per Christum* → **Gentiles** (the Church-of-the-
  Gentiles typology, the lemma being Adam naming the animals and Isa 65:15 *nomine alio*);
  0087B *Haec flumina **gentibus**, etc.* → **nations** (plainly generic, Augustine on the
  four rivers' fame). No `natio`, no `gentilis`, no `gentilitas`, no `ethnicus` in range.
- `sacramentum` → **sacrament** (0086D, *in altero sacramentum vitae aeternae*). No
  `mysterium` in range, so the 1:1 pair is not exercised.
- `diabolus` → **devil** throughout (7 occurrences, all chunk 0007). No `daemonium`, no
  `satanas`.
- ⚑ **`turb-` fires three times and every one is the verb *turbare*** — 0091A *turbavit*,
  0093A *turbata est* (Ps 41), 0093C *turbatur*. **Zero `turba` in range.** Instrument
  checked before reporting, per the brief.
- The commentator's own voice is not archaised (`dicit`/`ait` → "says"); `-est`/`-eth` forms
  appear only inside quoted scripture and in second-person singular address.
- **Pattern 17.** Second person singular → *thou*: 0089A *Si comederis* → "If thou eat";
  0084B Ex 20:8 *sanctifices* → "that thou keep holy"; 0088B *quod tenes* → "what thou
  holdest"; 0093B Jo 1:48 *Cum esses… vidi te* → "When thou wast… I saw thee"; 0093D *Adam,
  ubi es?* → "Adam, where art thou?"; 0095A *repes* → "thou shalt creep". Plural → *you*:
  0092A *eritis sicut dii* and *Cur praecepit **vobis** Deus?* → "you shall be as gods",
  "Why hath God commanded you?" — the serpent addresses the pair, and the number changes
  inside a single Gregory paragraph, which is the distinction Pattern 17 exists to keep.

#### (d) Heads
`CAPUT II.` → `CHAPTER II.`; `CAPUT II. (cont.)` → `CHAPTER II. (cont.)`; `CAPUT III.` →
`CHAPTER III.` **Numerals mirror the plate** — Migne sets these in numerals, so the English
does, per the corpus measurement (26 works print `CHAPTER XIII.`, none spells above ONE).

#### (e) Frontmatter copied VERBATIM from each Latin chunk, field order included
Chunk 0007's Latin frontmatter orders `words` → `noteCount` → `incipit`, unlike its three
siblings; the English copies that order rather than normalizing it.

---

### §2 · ⭐ MIGNE'S OWN FOOT-OF-PAGE NOTE AT 0094D — what I did, exactly

The Latin (injected at chunking from the plate) reads:

> « Ventrem » LXX addiderunt, sed in Hebraeo habetur « pectus ª [cn: a | In Hebræo est
> *gahon*, quod *ventrem* et *pectus* significat.] » tantum, …

**What I did:**
1. **The printed body reading stands untouched and is what the English renders.** The note
   emends nothing: *pectus* is still what the Hebrew is said to have, and the English says so.
2. **An `[nt: …]` at the same position, carrying the note in English**, per the 2026-08-24
   ruling and Pattern 15's prose-vs-locator test — this note is a sentence that says
   something, so a Latin-only rendering would strand an English reader:
   `« breast [nt: In the Hebrew it is *gahon*, which signifies *belly* and *breast*.] » only,`
3. **`gahon` kept as it stands**, in its italics, untransliterated and unnormalized.
4. **`ventrem` / `pectus` inside the note are TRANSLATED** (*belly* / *breast*), keeping their
   italics — they are the two Latin renderings the note is adjudicating between, and the
   English body two words away already renders the same two words « Belly » and « breast »
   from the guillemet lemmata. Leaving them Latin inside a translated note would make the note
   unreadable to the reader it exists for.
5. **Migne's raised key `ª` is NOT carried into the English.** Corpus precedent: 9005/0000
   (Baruch, the founding asterisk case) and 8996/0001 both place a bare `[nt: …]` where the
   Latin carries `[cn: * | …]`, with no key character on the English side. The key belongs to
   the Latin apparatus, which keeps it; on our side the marker *is* the key.
6. Guillemet parity is unaffected — the `[nt:]` sits inside the same `« … »` the `[cn:]` sits
   inside, so the counts are 1:1.

#### ⛔ TWO VERIFIER ERRORS FIRE ON THIS, AND BOTH ARE INFRASTRUCTURE, NOT TRANSLATION

`node scripts/verify-english.mjs 8950` reports exactly two things in my range:

```
0007.md: note markers — Latin 41, English 42
0007.md: [cn: a | …] is malformed — the form is [cn: <Migne's note number> | <his note>]
```

Both have one cause: **this note's key is a LETTER (`a`), and `verify-english.mjs` knows only
digits and `*`.** Two places in it:
- line ~184, the form check: `/^(?:[0-9]+(?:-[0-9]+)?\*?|\*) \| \S/` — a bare `a` fails it.
- line ~94, `inSequence`: `n.kind !== 'cn' || /^\*\s*\|/.test(n.text)` — only the
  **asterisk**-keyed `[cn:]` joins the note sequence, so this lettered one does not, and the
  `[nt:]` I was told to write has nothing on the Latin side to pair with. Hence 41 vs 42.

⚑ **I did not touch the verifier**, and I did not touch the Latin chunk: peers are working the
same work concurrently and this is a corpus-wide script. **The English is as Wilson's ruling
requires**; the fix is two regexes (admit a single lower-case letter key alongside `*` in both
places), and it belongs to whoever merges the stints. ⚠ Note that the ruling in
`translation-style.md` §19 and CLAUDE.md is written for the *asterisk* layer specifically; a
**lettered** key is a third shape neither the prose nor the code has met. It behaves exactly
like the asterisk layer — editorial prose, not a `Forte` conjecture — so it takes the English
twin, but somebody should say so in §19 rather than leaving it to inference.

---

### §3 · ⚠⚠ 7a″ — THE VULGATE DIVERGENCE LIST. This is the deliverable.

Every lemma in these four chunks was collated against `sources/vulgate/clementine-flat.txt`
by grepping the verse, never from memory. **Both the agreements and the divergences are
recorded, because a list of findings alone cannot be told apart from a report by an agent
that never looked.**

#### 3.0 ⛔ WHY ONLY THREE `[var:]` FIRED — the plate gate, and it is the binding constraint

`data/plate-reads.json` **has no entry for 8950 at all.** The launch message states that PDF
pages 39, 40, 46, 52, 53, 60, 67, 74, 82, 89 and 96 of
`raw/scans/pl113/patrologiaecurs04migngoog.pdf` have been read; at that volume's map
(page = (column + 11)/2, verified in CLAUDE.md) the pages overlapping my range are
**46 (cols 0081/0082), 52 (cols 0093/0094) and 53 (cols 0095/0096)**. Everything from
**0083A to 0092D is unread**, which is 10 of my 14 columns.

So: **markers only on 0093/0094 (three fired), and the declined list for the rest.** A
`[var:]` is a public claim that MIGNE'S TEXT diverges from a witness, our Latin is not the
plate, and 9003 showed the digitization *manufacturing* a Vulgate divergence that a collation
then dutifully found — the one class no amount of collation can catch. The list below names
every site and says which leaf settles it, so the markers can be fired later at the cost of
one page render each.

⚠ **AND EVEN THE THREE THAT FIRED WILL FAIL `plate-gate.mjs` UNTIL 8950 IS ADDED TO
`data/plate-reads.json`.** They stand on read pages; the read is simply not recorded. Whoever
merges must either record pages 52–53 for 8950 or withdraw the three markers. Naming this is
not a request to skip the gate.

#### 3.1 The three `[var:]` fired (all chunk 0007, all on plate-read page 52)

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0093A | « Tunc **viderunt** quod nudi essent, » | Gn 3:7 *cumque **cognovissent** se esse nudos* | Isidore expounds **seeing**, and does so twice in the same sentence — *oculis scilicet perversis*, *quibus nuditas… erubescenda **videbatur*** — so the whole gloss rests on a verb the Vulgate does not have here. Old-Latin form. |
| 0093B | « Cum esses sub ficus vidi te, **et descendi**, » subaudi « liberare te. » | Jo 1:48 *Priusquam te Philippus vocavit, cum esses sub ficu, vidi te* — **no** *et descendi* | Alcuin's *subaudi* supplies *liberare te* to a clause John does not print; the added *et descendi… liberare* is Exod 3:8's language grafted on. The marker names what John has. |
| 0093D | « **Adam,** ubi es? » | Gn 3:9 *et dixit ei: Ubi es?* — no vocative | Gregory's gloss turns on the **calling by name**: *eumque **vocat** ac requirit dicens… Dum **vocat**, significat quia ad poenitentiam revocat.* The vocative is the hinge and is not in the Vulgate. |

**Rejected on those same read columns, and named here because a blind reader will look:**
- **0093A** « Ad meipsum **turbata est anima mea**. » [n: (Psal. XLI.)] against Ps 41:7
  *Ad meipsum **anima mea conturbata est***. Word order plus simplex for compound. Real, and
  **no marker**: the sense is identical and Pattern 14 fires on divergence "in a way that
  changes the sense." Logged, not asserted.
- **0093D** « **Vocavitque Deus** Adam, » against Gn 3:9 *Vocavitque **Dominus Deus** Adam* —
  *Dominus* dropped. Not sense-changing; and the same chunk prints the full
  *Vocavitque Dominus Deus Adam* correctly at 0093C, twenty lines above, which is an internal
  control that the shorter form is a real feature of the second citation and not a systematic
  habit. Logged, no marker.
- **0093B** *sub **ficus*** for *sub **ficu***. `ficus` is a well-formed Latin word (nom.
  sing., gen. sing., nom./acc. pl.), so Pattern 7's non-word clause does not reach it and
  `[sic:]` has nothing to wrap; the Addendum-A rule is explicit that **a real word that reads
  oddly is Migne's until a plate says otherwise**. Rendered as an ordinary "under the fig
  tree". A 400 dpi look at p. 52 would settle whether the plate sets *ficu*.
- **0094B** « Ego dixi: Domine, miserere mei, sana animam meam, quia peccavi tibi » — checked
  **verbatim against Ps 40:5. Agrees exactly**, including the asyndeton. Recorded because a
  checked negative is worth having.
- **0094A/0094B/0094C/0094D** — « Mulier quam dedisti, » (×3, Gn 3:12), « Et dixit Dominus
  Deus ad mulierem, » (Gn 3:13), « Serpens decepit, » / « Serpens decepit me, » (Gn 3:13),
  « Vidit igitur, » (Gn 3:6), « Et ait Dominus Deus, » / « …ad serpentem, » (Gn 3:14),
  « Super pectus tuum, » (Gn 3:14): **every one agrees with the Clementine verbatim** as far
  as it runs. Nine clean lemmata on a read page.
- **0095A** « Pectore et ventre repes. » is **Gregory's own paraphrase**, not a lemma — Gn 3:14
  reads *super pectus tuum gradieris*. No marker: it is the moralist's wording, and the gloss
  that follows (*Ventre repit… Serpit pectore…*) is built on it. Logged.
- **0082A–0082D** (the other read column) — « Igitur perfecti sunt coeli et terra, » and
  « …et omnis ornatus eorum. » agree with **Gn 2:1** (Migne's `coeli` for `caeli` is
  orthography, and an added comma after *coeli* is his punctuation); « Complevitque Deus, »
  ×2 agrees with **Gn 2:2**; « Mente servio legi Dei » agrees with **Rom 7:25** verbatim as
  far as it runs. **Nothing fired on the volume's other read column**, and that is a result,
  not an omission.

#### 3.2 The declined divergences — 0083A–0092D, unread columns. Each names its leaf.

**PDF page for a column = (column + 11)/2** on `patrologiaecurs04migngoog.pdf`; the Gallica
second witness (`ark:/12148/bpt6k5505319w`) is `f = (column + 1)/2` and costs one IIIF request.

| col | pdf p. | Migne prints | Clementine | note |
|---|---|---|---|---|
| 0084C | 47 | « Antequam **oriretur** in terra. » | Gn 2:5 *antequam **orietur** in terra* | one letter, impf. subj. for fut. ind.; sense unchanged. Single-letter calls are exactly what `sources/vulgate/README.md` warns not to trust this copy for. |
| 0084C | 47 | « Non enim pluerat **Deus** super terram, » | Gn 2:5 *non enim pluerat **Dominus Deus** super terram* | *Dominus* dropped. ⭐ **Internal control: 0085A prints « Non enim pluerat Dominus, » WITH it**, so the two citations of one verse differ inside twelve lines — which makes this a real feature of the text, but says nothing about whose. |
| 0086B | 48 | « Plantavit **Dominus paradisum in Eden ad Orientem**, » and « Plantavit autem Dominus paradisum **in Eden**. » | Gn 2:8 *Plantaverat autem Dominus Deus paradisum **voluptatis a principio*** | The largest divergence in the range. It is the Hebrew-based reading, and **Migne knows it**: 0088A quotes Jerome — *Pro « voluptate » in Hebraeo habetur « Eden »* — so the two forms are the gloss's own subject. Would take a `[var:]`; needs p. 48. |
| 0086B | 48 | « Et **ejecit Deus de terra** omne lignum, » | Gn 2:9 *Produxitque Dominus Deus **de humo** omne lignum* | Old Latin / LXX (ἐξανέτειλεν). |
| 0086D | 48 | « Produxitque Dominus lignum etiam vitae. » | Gn 2:9 *Produxitque Dominus **Deus de humo omne lignum pulchrum visu, et ad vescendum suave** lignum etiam vitae* | An abridged **lemma**, not necessarily a variant — but it also drops *Deus*. Convention 3 renders it as the phrase it stands for. |
| 0086D | 48 | « Lignum vitae **his est** qui apprehenderint eam. » | Prv 3:18 *Lignum vitae **est his** qui apprehenderint eam* | word order only. |
| 0088A | 49 | « **initium enim** superbiae hominis **est** apostatare a Deo. » | Sir 10:14 *Initium superbiae hominis apostatare a Deo* | two words added (*enim*, *est*). ⚠ This is the 8960 shape — a lean on a particle — except that here the file confirms it rather than memory. Still declined: the leaf decides whose. |
| 0088B | 49 | VERS. 16.-- « **Praecipitque** ei, » | Gn 2:16 *praecepitque ei, dicens* | present for perfect. ⭐ **Internal control: 0088C prints « Praecepitque ei dicens: Ex omni, etc.** with the perfect**, four lines below.** A real Latin word either way, so **no `[sic:]`** (Addendum A: every suspicion aimed at a real, well-formed word in that batch was refuted at the plate, and two of the arguments were excellent). Rendered as printed — "And he enjoineth him". p. 49 settles it. |
| 0088D | 49 | « Priusquam sciat puer **bonum aut malum, contemnet malitiam, ut eligat bonum**. » (Isa. VII) | Is 7:16 *antequam sciat puer **reprobare malum et eligere bonum**, derelinquetur terra…* (cf. 7:15) | Old Latin. **Material, and the gloss depends on it**: *Quomodo quod nescit aut **contemnit**, aut **eligit**?* — Augustine's question is built word for word on *contemnet* and *eligat*. Strongest `[var:]` candidate on an unread column. |
| 0089A | 50 | « Corpus mortuum est propter peccatum; » | Rom 8:10 *corpus **quidem** mortuum est propter peccatum* | *quidem* dropped; the gloss turns on *mortuum* (*non ait mortale, sed « mortuum »*), not on the particle. |
| 0089C | 50 | « **Vocabo servos meos** nomine alio. » (Isa. LXV) | Is 65:15 *et **servos suos vocabit** nomine alio* | **first person for third** — a change of speaker inside the quotation. Material; would take a `[var:]`. |
| 0089D | 50 | « Speciosus **enim** forma prae filiis hominum. » | Ps 44:3 *Speciosus forma prae filiis hominum* | one connective added inside the marks. Not sense-changing. |
| 0089D | 50 | « **Nemo inventus est dignus aperire librum et solvere signacula ejus**, » (Apocalypsis V) | Apc 5:4 *nemo dignus inventus est aperire librum, **nec videre eum*** — the second half is **Apc 5:2** *Quis est dignus aperire librum, et solvere signacula ejus?* | a **conflation of 5:2 and 5:4**, cited to the right chapter. Would take a `[var:]` naming both verses. |
| 0090A | 50 | « Immisit ergo Dominus soporem, » | Gn 2:21 *Immisit ergo Dominus **Deus** soporem in Adam* | *Deus* dropped, as at 0084C. |
| 0083A | 47 | « Requiem non habebant, dicentia: Sanctus, sanctus, sanctus, » (Apocalypsis IV) | Apc 4:8 *et requiem non habebant **die ac nocte**, dicentia : Sanctus, Sanctus, Sanctus **Dominus Deus omnipotens*** | an abridged quotation; the point being made is only *dicere non cessabant*. |
| 0082B | **46, READ** | *et requievit Deus die septimo **ab operibus suis*** | Gn 2:2 *et requievit die septimo **ab universo opere quod patrarat*** | Augustine's citation of Gn 2:2 **assimilated to Hbr 4:4** (*Et requievit Deus die septima ab omnibus operibus suis*), which the same chunk quotes as itself at 0083A. On a read column, and still **no marker**: it is a citation-form question, not a sense change, and naming it as a Genesis divergence would misdescribe it. |
| 0086A | 48 | *Qui **dedit flatum populis super terram**, et spiritum calcantibus eam* (Isaias, Irenaeus) | Is 42:5 ***dans** flatum **populo qui est super eam***, et spiritum calcantibus eam | ⚑ **Not in the brief's inventory** — Migne sets this quotation **unmarked**, neither italic nor guilleted, so no span-based instrument sees it. Found by reading. The gloss then re-expounds it in Migne's own wording (*omni populo qui est super terram*), so the divergence is load-bearing. |
| 0092C | 52 | « Initium autem figmenti » | Job 40:14 *Ipse est **principium viarum Dei*** | Old Latin of Job 40:19 LXX (*ἀρχὴ πλάσματος*). Augustine is expounding that form; no marker. |
| 0091C | 51 | *Quod nudi erant **et erubescebant*** | Gn 2:25 *et **non** erubescebant* | **see §4.1 — the single most important entry in this file.** |

#### 3.3 Divergences that are NOT divergences — labelled by Migne himself

Each of these is introduced by the plate as an alternative version, so it is data about
Migne's practice and **takes no `[var:]` by construction**:
- 0082C *Alia translatio:* « Consummavit Deus **die sexto** opera quae fecit, » (LXX; Gn 2:2).
- 0082D *In Hebraeo habetur* « **die septima**. » (Jerome, on Gn 2:2 — and the *Arctabimus
  ergo Judaeos* argument that follows requires exactly this reading, so the plate is coherent).
- 0084D *Alia translatio habet:* « Hic est **liber creaturae** coeli et terrae, » (Gn 2:4 LXX).
- 0086C *Quidam codices habent:* « Eden **ad Ortum**. » (Strabo).
- 0087B *Alia translatio:* « **Fons exiit** de Eden, qui irrigat paradisum, » (Gn 2:10 LXX).
- 0087D *Antiqua translatio habet* « **carbunculum et prasium**. » (Gn 2:12 LXX; Clementine
  *bdellium, et lapis onychinus*) — and the gloss then etymologizes *prasius* from πράσον,
  so the reading is the point.
- 0091C *Alii,* « prudentissimus, » / *Quidam codices habent* « sapientissimus, » (Gn 3:1
  *callidior*).
- 0092A « Gustate, et eritis sicut dii, » — **Gregory's composition**, the devil's speech built
  out of Gn 3:5, not a citation. Migne's own frame (*quodammodo dicit*) says so.
- 0087C *Evilath* for the Clementine's *Hevilath* (Gn 2:11): H-dropping, orthography, and the
  name is being etymologized (*parturiens*), which fixes the form.

#### 3.4 Lemmata collated and found to AGREE with the Clementine — recorded, per 7a″
Gn 2:1 (×2) · 2:2 (×2) · 2:4 (×3: *Istae sunt generationes*, *Istae sunt generationes coeli*,
*In die quo fecit*) · 2:5 (×3: *Et omne virgultum*, *Non enim pluerat Dominus*, *homo non erat
qui operaretur terram*) · 2:6 (×2) · 2:7 (×2 + the unguilleted *Et inspiravit… in animam
viventem*, verbatim) · 2:8 (×2: *Plantaverat autem*, *In quo posuit*) · 2:9 (×2: *Lignum etiam
vitae*, *Lignumque scientiae boni et mali*) · 2:10 · 2:12 (*Bdellium*) · 2:15 (×4) · 2:17 (×2
+ *In quocunque* — `quocunque`/`quocumque` is orthography) · 2:18 · 2:19 · 2:20 (×4) · 2:21 ·
2:25 (×2) · 3:1 (×5) · 3:5 · 3:6 (×4) · 3:6–7 across the verse join (*Deditque viro suo, qui
comedit. Et aperti sunt oculi amborum* — **verbatim**, which is why a one-verse-per-line phrase
search missed it) · 3:7 (*Consuerunt folia ficus*) · 3:8 (×3) · 3:9 · 3:10 · 3:12 (×3) ·
3:13 (×3) · 3:14 (×3) · Ex 20:8 · Rom 7:24 (Migne's `!` for the Clementine's comma is his
punctuation, kept) · Rom 7:25 · 1Cor 14:35 · Ps 40:5 · Phlp 3:21 (unmarked, in Rupert).

---

### §4 · THE DECLINED LIST — suspect readings, what would settle each, and the leaf

**Zero `[sic:]` fired in 5,737 words.** Nine of my fourteen columns have never been read at
the plate, our Latin is not the plate, and on 9004 translating agents' "probably our-file"
calls were right 5 times and wrong 9. Every candidate below is logged rather than asserted.
None is a non-word: **there is not a single non-word in these four chunks** — no split run, no
fused run, no doubled syllable — which is itself worth recording, since that is the class that
has been right every time.

#### 4.1 ⭐⭐ 0091C — `Quod nudi erant et erubescebant` : A MISSING NEGATIVE, AND I DID NOT REPAIR IT

Migne's last sentence of chunk 0006:

> « Erat autem uterque nudus, » etc. [n: (ISID., in Gen., ex Aug. de Gen. contra Manich., lib.
> II, c. 15.)] Quod [0091C] nudi erant **et erubescebant**, etc., *usque ad* quia in consensu
> rea tenetur conscientia.

**Rendered literally: "That they were naked and were ashamed".** Gn 2:25 reads *et **non**
erubescebant*, and the printed lemma four lines above in the same paragraph is
« Erat autem uterque nudus. » — the verse whose second half is the negative.

The internal corroboration is overwhelming and that is exactly why **no marker fired**:
- 0090C, same chunk: *nuda erant, **nec** erubescebant*;
- 0090C Rupert: *quod nuditatem suam **non** erubescebant*;
- 0091A Rupert: *nudus erat uterque **et non** erubescebant, quia quod erubescerent **non**
  habebant*.

Four independent negatives against one affirmative, inside two columns. **Frequency and
internal corroboration prove an error EXISTS, never whose it is** — this is
`reference_plate-read-triage`'s rule and CLAUDE.md 8a's measured version of it, and a `[sic:]`
here would publicly accuse Migne's type of a defect that could just as easily be Corpus
Corporum's dropped *non*. Isidore's source (Aug. *de Gen. c. Manich.* II.15) has the negative.

⚑ **What settles it: PDF p. 51 of `patrologiaecurs04migngoog` (cols 0091/0092), or Gallica
`f46`.** One page render. If Migne prints *non*, this is a tei-patch, the English gains the
negative, and no marker is ever needed; if Migne omits it, it is a `[sic:]` and one of the
more interesting defects in the book. **It must not ship unread in either direction without a
reader knowing it is here**, which is why it is the first entry in this section.

⛔ And note what I did **not** do: I did not render it "and were **not** ashamed" on the
strength of the argument above. That is 7a's silent repair, and it would have been invisible
to every check this edition runs.

#### 4.2 0082B — a `»` that closes a quotation nothing opened, and a second one

> …et intelligat quid sit, **»** et requievit Deus die septimo ab operibus suis: **»** quia et
> ipse in nobis haec bona operatur…

Two closing guillemets, no opening one. Under Pattern 5's corollary the plate is mirrored and
nothing is supplied: the English carries both `»` in the same places. Almost certainly the
first should be `«` (opening the Gn 2:2 quotation) — but supplying it would be exactly the
punctuation repair Pattern 8 forbids, and **0082 is a read column (p. 46), so this is cheap to
settle from a leaf already on someone's screen.** Chunk 0004 therefore runs 28 `«` against
29 `»`, deliberately.

#### 4.3 0088A and 0088B — three unclosed OPENING guillemets in chunk 0005

Chunk 0005 runs **38 `«` against 36 `»`**, and the English mirrors it exactly. The sites:
1. **0088A** *Symmachus vero, qui* **«** *paradisum florentem ante transtulerat, hic*
   « amoenitatem, » *vel* « delicias » *posuit.* — an opening mark before *paradisum* that is
   never closed, and it nests inside the following pair.
2. **0088B** *Ex eo quod additum est,* **«** *Et custodiret, innuitur qualis operatio esset:*
   — the mark should close after *custodiret,*.
3. **0088C** **«** *Praecepitque ei dicens: Ex omni, etc.* — opens the lemma and never closes.
   ⚠ Compare 0082D's « Complevitque Deus, » etc. and 0088D's « De ligno autem, » etc., both
   properly closed: this book closes its lemmata, so this is an anomaly, not a house style.
Plus the mirror-image at 0085D, *Et inspiravit in faciem ejus… in animam viventem.* **»**,
which closes a quotation nothing opened.
All four render as printed. **p. 49 (cols 0087/0088) and p. 48 (0085/0086) settle them.**

#### 4.4 Readings suspected and NOT marked — real words, rendered as printed
- **0088B `Praecipitque`** for the expected perfect — §3.2 above; a real word, an internal
  control four lines away, no marker. Rendered "And he enjoineth him."
- **0093A `hypocricis`** for *hypocrisis*. An attested medieval spelling of a Greek loan, not
  a non-word; Pattern 9 governs (attested medieval spellings are correct Latin, translated
  normally, no italics). Rendered "hypocrisy." Recorded because it *looks* like a defect.
- **0090B `Quamobrem`** set as one word where the Clementine has *Quam ob rem* (Gn 2:24):
  orthography, universal in medieval MSS. No marker.
- **0090B `VERS. 22, 24.`** skips verse 23, and the lemma splices two verses with Migne's own
  ellipsis `. . . .` — **the spacing of the four stops is reproduced exactly**, as is
  `VERS. 5.--. . . . . ` at 0092C. Migne's ordering and his ellipses are not ours to tidy.
- ⚑ **§4 of the brief, the "suspiciously tidy" class:** I have nothing to raise. These four
  chunks are uniformly clean prose — the only rough spots are the guillemets above, and a
  normalization would not show there. **Recorded as a checked negative**, since that is the
  one form of evidence this class can produce from the Latin alone.

#### 4.5 Unexpressed subjects supplied — named, with what decided each
- **0082B** *et post ab operibus requiescere* — a second infinitive still governed by
  *dicitur* eleven words back, not a new finite clause. Rendered "and afterwards to rest from
  his works", keeping it under "is rightly said."
- **0083D** *quod in tempore gratiae sublatum est, in **qua** perpetuum observat sabbatum* —
  the antecedent of *qua* is **gratia** (feminine), not *tempore* (neuter) and not *quod*.
  Rendered "in which" with no gloss; the Latin's own morphology decides it.
- **0085A** *praecedens formationem non tempore sed origine* — the participle can agree with
  the subject (God) or with *formabilitatem*. **Both construe**; I left the participle
  unattached in English too ("…preceding the forming not in time but in origin"), which
  preserves the ambiguity rather than choosing silently.
- **0086A** *Sed forte animae sexta die factae…* — dative *animae*, so "to the soul made on
  the sixth day", not a genitive "of the soul". The head is cut by the abridgment; the case
  decides it.
- **0090C** *quia nullam legem in membris senserant legi mentis repugnantem, **quae**
  inobedientiam secuta est* — *quae* is the **law in the members**, not the law of the mind:
  it is concupiscence that followed on disobedience. Rendered "which followed upon
  disobedience" in that position.
- **0094D** *sed de illo diabolus, et per illum, et in illo* — the three *ille*s are the
  serpent, the subject is *diabolus*. Rendered "but the devil out of him, and through him, and
  in him."

#### 4.6 A negation whose SCOPE the abridgment has cut away — 0094C, and I declined it
> [n: (AUG., ibid., c. 28.)] Notandum quod **non** diabolus est permissus feminam tentare,
> etc., *usque ad* sed ex hac homini invidisse ratio ostendit.

This fires test 2a's trigger exactly: a negative on a verb with a *sed* correlative nearby.
Two readings construe — "the devil was **not** permitted to tempt the woman" (negative on
*permissus*) and "it was **not the devil** that was permitted to tempt the woman" (negative on
*diabolus*, with the *sed* naming the real agent or motive). **The half of the correlative
that would decide it is inside the `usque ad` cut**, so 2a's own instruction — prove the host
from the sentence's own structure, never from what reads well — cannot be carried out.
**I took the first**, because Latin habitually sets *non* before the verb phrase and constituent
negation needs positive structural proof I do not have; the rival is recorded here so that a
reader meets it. This is the one place in the range where I chose between two live readings.

⚑ Contrast **0094D**, where the same shape *was* resolvable and I did act on it:
*quia **non ipse** propria voluntate et natura fecit, **sed de illo diabolus*** — here the
*sed* clause survives and names *diabolus* against *ipse*, so the negative belongs on **ipse**,
not on *fecit*. Rendered "because **it was not he that did it** by his own will and nature, but
the devil out of him" — an earlier draft read "he himself did not do it", which floats the
negative onto the verb and is the 8948/8990 defect exactly.

#### 4.7 Other places test 2a fires, checked and found correctly hosted
- **0084A** *requies Dei **non ipsi Deo, sed** rerum perfectioni inchoatur* → "begun not for
  God himself, but for the perfection of things." Host = *ipsi Deo*, proved by *sed*.
- **0092D** ***nullo** enim regente per suam potestatem **solus** Deus beatus est* → "for, with
  none ruling him, God alone is blessed through his own power." The negative is inside the
  ablative absolute; *solus* is **affirmed** of God. This is the 8990 @0614B shape with the
  opposite answer, and the ablative absolute is the structural proof.
- **0092B** *quando **nulli** bene est ab ipso recedere* → "when it is well for **no one** to
  withdraw from him." Host = the dative *nulli*, not *est*.
- **0088B** ***non sic** eo fruerentur, **ut** integritatem naturae suae usurpando vetitum
  violarent* → "should **not so** enjoy it **as to** violate…". The *sic…ut* correlative fixes
  the host: what is forbidden is not the enjoying but the manner.
- **0090C** *Non erat hoc ignominiae, **sed** honoris… non erat insipientiae, **sed**
  securitatis* → both negatives on the predicate genitives, both proved by *sed*.
- **0090C** *Aut **nunquid** confusionem hujusmodi natura, et **non potius** conscientia
  facit?* → "Or is it nature, and not rather conscience, that makes confusion of this kind?"
  The *non potius* attaches to the alternative subject, and the English keeps it there.
- **0090D** *origo ejus pullulavit **non** ex conditione primaeva, **sed** ex juniore culpa* →
  host = the prepositional phrase, proved by *sed*.

---

### §5 · PUNCTUATION AND THE MARKS

- **Question marks are at exact parity in all four chunks** (2 / 4 / 5 / 5), and every one is
  Migne's. Three sit on **resumption tails** of the abridgment formula (0084B *et verius
  mane?*, 0092B *…praescientiam de seipsis?*, 0092B *…incerta sua beatitudo?*) — a tail is
  parsed as strictly as ordinary prose and keeps its mark.
- **⭐ ONE Pattern 8b recasting, and it is the only punctuation this stint added anywhere:**
  0088D *Quaeritur quomodo loqui potuerunt, vel loquentem intelligere…?* → **"It is asked: how
  could they speak, or understand one speaking…?"** Migne closes an indirect question with `?`
  and English cannot; the colon carries the *quaeritur* frame so the mark survives. This is
  the single colon by which band 0088D's English exceeds its Latin, and it is the only
  band-level punctuation mismatch in 5,737 words. Every other *Quaeritur* in the range is
  truncated by *etc.* before the mark (0082C, 0084A, 0090A, 0092A) and takes no colon.
- **Nothing else was supplied, softened or deleted.** Band-by-band counts of colons,
  semicolons, guillemet-opens and question marks are identical in every one of the 56 bands
  except that one. Three drafting slips were caught by that test and repaired against the
  Latin (a colon at 0089B, semicolons at 0092A and 0093D) — recording it because the test is
  what found them, not a re-read.
- **0093A** *…erubescenda videbatur. etc., usque ad…* — Migne sets a full stop **before**
  *etc.* The English does the same. Not a defect (cf. Tobit §1(a) « Et factum est. » etc.).
- **Em-dashes:** seven characters across five sentences (0085A ×2 in one apposition, 0085C,
  0089B, 0091B ×2 around Rupert's *quod impossibile est*, 0094B), each where English needs the
  break. Not a defect class, not marked, not reported.

### §6 · SECTIONS READ CLEAN

Read against the Latin sentence by sentence with the counts already known clean, asking only
"does the English assert what he asserts": **0083A–0084B** (Augustine on the seventh day,
sixteen consecutive abridged notes, the densest `usque ad` stretch in the range),
**0086C–0087D** (Strabo and the etymologies — Evilath, bdellium, onyx, prase, with the two
Greek words ὄνυξ and πράσον carried in Greek script as printed), **0090C–0091B** (Rupert on
nakedness, the longest continuous prose in the range and the only paragraph with no lemma at
all), and **0094A–0095A**. No findings in any of them beyond what is logged above.

---

### §7 · ADDENDUM (added after the coordinator's harvester fix) — two recovered spans, collated

The lemma harvester paired guillemets positionally and lost spans on any line whose first
delimiter was a `»` closing a quotation opened in an earlier paragraph. Regenerated, my brief
prints **216**, and two spans in my range were absent from the file I worked against:

    [0085D] « flavit, vel sufflavit, »
    [0088A] « delicias »

**Both were translated in the delivered English** — they were never missing from the page,
only from the inventory — but neither had been collated under 7a″. That is done below.
**No English text changed as a result.**

#### 7.1 ⭐ THE RECOUNT — 216/216, and my own 215 was one short by the SAME class of bug

Re-run with the span scan **bounded to the paragraph**, my four chunks give **216**: 0004
27 `« »` + 27 `*…*`; 0005 35 + **26**; 0006 20 + 12; 0007 43 + 26.

⛔ **My original 215/215 was a false reconciliation, and the fault was mine as well as the
file's.** My scan ran an open cursor across the *whole chunk* rather than stopping at the
paragraph, so an **unclosed `«` swallowed the next paragraph's span**. The exact site:

> 0088A … *Ex eo quod additum est,* **«** *Et custodiret, innuitur qualis operatio* [0088B]
> *esset: …vetitum violarent.*
>
> 0088B **VERS. 16.-- « Praecipitque ei, »** *etc.*

The `«` before *Et custodiret* never closes in its own paragraph (§4.3, site 2), so my cursor
ran on, ignored the `«` of the next paragraph's lemma, and closed on **its** `»` — fusing two
paragraphs into one span and deleting **« Praecipitque ei, »** from my tally. The same thing
happened one paragraph later at 0088C's unclosed `« Praecepitque ei dicens: Ex omni, etc.`,
which swallowed 0088D's « Priusquam sciat puer… » — there the two errors cancelled, which is
why the total came out one short rather than two.

⚑ **The lesson, and it is the general one:** an unclosed guillemet is a hazard for *any* span
counter, not only for a positional pairer, and **the two bugs are the same bug wearing
different clothes** — mine let an unclosed open run forward, the harvester's let an unmatched
close shift the pairing. This work carries **five** unmatched delimiters in my range alone
(§4.2, §4.3), all in chunks 0004–0005, which is why the class bit here rather than elsewhere.
**Any future count on a guillemet book should be paragraph-bounded and should report its
unmatched-delimiter count alongside the total** — had I printed "5 unmatched" beside "215",
the disagreement would have been visible immediately instead of looking like agreement.

⚠ Note also that **an unclosed `«` produces NO span at all** under the paragraph-bounded rule,
so 0088A's *« Et custodiret* and 0088C's *« Praecepitque ei dicens* are in nobody's inventory —
mine or the brief's. They are logged at §4.3 and are not lemmata anyone can collate; recording
that here so a later reader does not go looking for them in the brief.

#### 7.2 [0085D] « flavit, vel sufflavit, » — a MENTION, not a quotation. No marker.

> Et inspiravit in faciem ejus spiraculum vitae, et factus est homo in animam viventem. »
> [n: (AUG., ibid., l. VII, c. 3, 5, 7.)] Sine dubitatione, **« flavit, vel sufflavit, »**
> dicendum est, etc., *usque ad* poenam si contemneret?

**Collation.** Neither word stands in Gn 2:7, which reads *et **inspiravit** in faciem ejus
spiraculum vitae* — and **the lemma printed immediately above carries `inspiravit`, verbatim
and correct** (already recorded clean at §3.4). So the two are not competing readings of the
same line: the lemma quotes the verse, and this span quotes **two Latin verbs Augustine says
ought to be used instead**. *De Gen. ad litt.* VII.3 is arguing that the Greek ἐνεφύσησεν is
better Latinized *sufflavit* than *inspiravit*, because *inspiravit* imports something the
text does not say.

**Therefore no `[var:]`, and the reason is categorical, not evidential: Pattern 14 fires where
*Migne's printed scripture* diverges from the received text, and this is not printed scripture
at all — it is a discussion of how to render it.** It is the mention-vs-use distinction the PG
register section already draws (never silently English a *mentioned* particle into its
meaning), applied to a Latin verb. Firing a marker here would tell a reader that Migne's
Genesis reads *flavit*, which it does not, four words away.

**Corroboration that the type is sound** — both forms are ordinary Latin and the Clementine
itself carries them: *sufflavit* at Is 40:7, *insufflavit* at Jo 20:22 and Sap 15:11, bare
*flavit* at Is 40:24 and Sir 43:22. **No non-word, nothing to `[sic:]`, no plate read owed.**

⭐ **What the English had to protect, and did.** The whole point of the sentence is the
preposition. Our rendering keeps *inspiravit* as **"he breathed into"** ("And he breathed into
his face the breath of life") against *sufflavit* as **"he breathed upon"** — so Augustine's
distinction survives in English. Collapsing both into a single "breathed" would have been 7a″
conformation in its purest form: the exposition would have rested on a contrast the page no
longer made. Recorded because it was got right by accident of literalism rather than by the
brief, which did not list the span.

#### 7.3 [0088A] « delicias » — Jerome reporting Symmachus. No marker.

> Symmachus vero, qui « paradisum florentem ante transtulerat, hic « amoenitatem, » vel
> **« delicias »** posuit.

**Collation.** Gn 2:8 reads *paradisum **voluptatis** a principio*; *delicias* is not the
Vulgate's word there, nor anywhere in Genesis 2–3 (the Clementine's only Genesis instance of
the noun is Gn 49:20, *praebebit **delicias** regibus*). But the span is **explicitly framed as
a report** — *Symmachus vero … posuit* — so it belongs with §3.3's labelled alternatives and
takes no `[var:]` by construction, exactly like « Eden ad Ortum » and « carbunculum et
prasium ». **No plate read owed.**

Two things worth recording:
- ⭐ **The Vulgate does use this very word of paradise elsewhere**: Ez 28:13, *In **deliciis
  paradisi** Dei fuisti*. So Jerome's report is not an exotic reading but the Latin Bible's own
  alternative vocabulary for Eden, which is precisely why he offers it.
- ⭐ **Internal consistency, and the English keeps it.** Two columns earlier, at 0086B, the
  gloss itself renders *in Eden* as **« …in Eden. » Id est *in deliciis*** — the same word,
  unmarked, in the commentator's own voice. Our English gives "in delights" there and
  "« delights »" here, so a reader can see that Jerome's report of Symmachus and the gloss's
  own paraphrase land on the same Latin word. Had the two been varied ("pleasures" / "delights")
  the connection would have been silently destroyed — the within-work reconciliation rule.

#### 7.4 Consequential amendments to what I filed above

- **§1's span figure and §3's opening claim now read against 216, not 215.** The two spans join
  §3.3 (Migne's own labelled alternatives) — « delicias » — and a new category the file did not
  previously need: **a mentioned word that is neither lemma nor citation** — « flavit, vel
  sufflavit, ». Nothing in §3.1 or §3.2 changes; **no `[var:]` is added or withdrawn**, and the
  apparatus total for my range stands at **3 `[var:]` · 1 `[nt:]` · 0 `[sic:]` · 0 `[cj:]`**.
- **§3.0's warning about `data/plate-reads.json` is now spent**: the entry exists, pp. 39, 40,
  46 and 52 are read, and **all three `[var:]` at 0093A/0093B/0093D are confirmed as Migne's own
  type**. The paragraph stays as filed as a record of the state at delivery.
- **§2's verifier finding is likewise spent**: the letter-keyed `[cn:]` is now accepted in both
  places, and Pattern 19 documents the letter as a third key shape. Chunk 0007 verifies clean.
- **⛔ §4.1 — 0091C `Quod nudi erant et erubescebant` — IS NOT SETTLED AND STAYS DECLINED.**
  Its column is on **p. 51, which nobody has read.** One page render (or Gallica `f46`) decides
  whether this is a tei-patch restoring a dropped *non* or a `[sic:]` on Migne's own type. It
  remains the most important unresolved item in this range, and it is deliberately unmarked.
- **The band range in §Preamble** (launch message said 0071B–0079C; the chunks are
  0082A–0095A) is confirmed as a launch-message error, not a translation one. Left as filed.


---

## STINT 3 — chunks 0008–0011 (cols 0095A–0106D)

*Filed as `cruces-0008.md`; merged verbatim, headings demoted one level. Nothing in it was rewritten — where a later stint corrected it, the correction stands in that stint's section.*


Translated 2026-09-05, one translator, 4 chunks (5,041 Latin words). `verify-english.mjs`:
**zero errors on 0008–0011** (column anchors, `[n:]` notes, guillemets and question marks all
1:1 with the Latin twins; 0007's two errors are a neighbouring stint's and are untouched here).

**Apparatus fired: 5 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
Per-chunk parity (English / Latin): anchors 12/12 · 14/14 · 11/11 · 10/10 · notes 23/23 ·
23/23 · 13/13 · 14/14 · `«` 29/29 · 46/46 · 29/29 · 25/25 · `»` 28/28 · 44/44 · 29/29 ·
25/25 · `?` 3/3 · 1/1 · 0/0 · 0/0.

**SPAN COUNT — the brief's 183, confirmed.** Counted in my own four Latin chunks: **123
closed `« … »` spans + 60 `*…*` spans = 183**, matching the brief's header exactly.
⚠ The count reconciles only because the harvester pairs guillemets: the raw marks are **125
`«` and 124 `»`**, and the three unpaired ones (§3 below) appear in no inventory line. They
are Migne's, not ours — the plate was read for all three.

⭐ **THE WHOLE RANGE WAS READ AT THE PLATE**, before the English was written, not after:
archive.org `patrologiaecurs04migngoog`, **PDF page = (column + 11) / 2**, corner numbers read
first on each page — pp. 53 (095/096), 54 (097/098), 55 (099/100), 56 (101/102),
57 (103/104), 58 (105/106). Nineteen twin/plate divergences were confirmed at 600–1200 dpi
and are filed in `data/briefs/8950-PENDING-TEI-PATCHES-0008.md`; thirteen more were seen only
at 300 dpi and are listed there as **not acted on**. **Foot-of-page apparatus: checked zero on
all six pages, both layers.**

---

### §1 · CONVENTIONS — decisions this stint made, stated for the merge

Ruth (8968 §1) and Tobit (8970 §1) govern and were not re-opened: `VERS. n.--` passes through
verbatim; the lemma is Englished; a fragmentary lemma is rendered as the phrase it stands for;
sigla ride as ordinary `[n:]` notes with Migne's own internal spacing; `*usque ad*` →
***as far as***, with **no verb ever supplied**. What follows is what this range had to settle.

#### (a) The `*Historice / Allegorice / Mystice*` tags are TRANSLATED, in their italic span
`*Mystice.*` → ***Mystically.*** (0096A), `*Allegorice.*` → ***Allegorically.*** (0098B,
0101D). Corpus precedent, not invention: the shipped English carries 14 `*Mystically.*` and
2 `*Historically.*` and no untranslated tag. **A note inside the tag's italic span stays
inside it** — 0096A prints `*Mystice. [n: (AUG., …)]*` and the English does the same.

#### (b) ⭐ NO `[var:]` on a quotation Migne HIMSELF labels as a rival version
This range is dense with them — LXX (×7), Aquila, Symmachus, Theodotion, *in Hebraeo*,
*alia translatio*. Where Migne announces the version, its divergence from the Clementine **is
the sentence's own subject**, and a `[var:]` restates what the text already says. Marking them
would have put ~12 markers in four chunks and buried the four that carry information.
**The rule taken: `[var:]` fires where the words are offered AS the text and diverge.**
Worked pair at 0095B, which is exactly why the rule was needed: Jerome's first quotation is
given bare, under a naked `(HIERON.)`, so it **took the marker**; his second is introduced
*Melius in Hebraeo habetur*, so it **did not**.

#### (c) ⛔ WORDS follow the plate; PUNCTUATION follows the TWIN
Nineteen twin/plate divergences were confirmed in this range (patch file, Part A), and they
split into two classes that must be handled differently:

- **A divergent WORD** — the English renders what Migne printed, per the locked "plate where
  read" rule. Five sites: *Deos* (0097A), *potest* (0098A), *interpretatur* (0100A),
  *intellectu* (0102C), plus the four non-words whose SENSE the English renders.
- **A divergent MARK** — ⛔ **the English follows the TWIN, not the plate.** Three sites were
  first set from the plate and then reverted: `« septempliciter: »` at 0100A (twin `;`), the
  semicolon after *positio* and the absent one after *dedicatio* at 0103C, and the dropped
  opening `«` at 0106A. **The reason is mechanical and not a softening of Pattern 8:**
  `verify-english` compares guillemets against the twin as a hard check, and the band-by-band
  colon/semicolon comparison (the test that caught 8989 and Tobit) partitions on the twin's
  anchors — so an English that follows the plate on a mark manufactures a mismatch in exactly
  the instrument that exists to find real ones, for a difference no reader can act on. The
  plate readings are in the patch file; when the patch lands, both columns move together.
  ⚑ **Band comparison run and clean:** colons, semicolons, question marks and guillemets match
  the Latin twin in **every band of all four chunks**, zero mismatches.

#### (d) The *gentes* axis in this range
`gentes` of the peoples subdued by Rome, and of "all nations" out of which the Church gathers
(0100B, 0106A) → **nations**, generic. `sub gentibus sive sub Christianis regibus` (0100B) →
**Gentiles**, the *Judaei*/*gentes* opposition, with *gens Judaea* → **the Jewish nation** in
the same sentence. `Dispersus in gentibus` of the scattered Jews (0099C) → **nations**.
`diversitas gentium` (0106B) → **nations**. `daemonibus` (0104C) → **demons**, per the axis.
⚠ Instrument check run: `natio` appears **nowhere** in this range (every hit is
*damnatio-/condemnatio-/generatio-/interpretatio-*); `turba`/`multitudo` — one *multitudine*
(0099C) and one *multitudinem* (0106A), both **multitude**, no *turba* at all.

#### (e) `usque ad` — 20 formulas, 6 ordinary. Decided per occurrence, per the `etc.` splice test
**Formula (italic, after an `etc.`, 20×):** 0095B, 0095C, 0095D, 0096A, 0096B, 0096C ×2,
0098A, 0098B, 0098D, 0100B ×2, 0100C, 0101B, 0103D, 0104B, 0104D, 0105D ×2, 0106B.
**Ordinary Latin, unitalicised (6×), and each takes its own English:** 0097A *usque ad ultimum
judicium* → "until the last judgment"; 0099D and 0100A *usque ad septimam generationem* /
*usque ad tempus illud* → "until"; 0102A *ab Adam usque ad Christum* → "from Adam to Christ";
0103B *per denarium usque ad Noe* → "up to Noah"; 0102D *usque ad diluvium* → "up to the
flood". Not one of the six sits inside an italic span, and not one follows an `etc.`

#### (f) The abridgment's tails are parsed as strictly as prose, and none was completed
Three resumption tails land mid-clause and stay there: 0095C *sed prius reluctatum est cum
dolore consuetudini malae*; 0096C *quae falsum verum esse putavit*; **0098A**, where the plate
reads *sed **potest** in exsilio generata* and the complementary infinitive has been cut out by
the splice. Only there is a word supplied, in brackets — "but it can **[be]** begotten in
exile" — because *potest* demands a complement that the abridgment removed. **This is not the
formula being completed** (Tobit §1(b)); it is a bracketed English exponent inside a
resumption. Recorded because it is the one place in the stint where anything was supplied.

---

### §2 · THE FLAGGED SITE — 0104D, and it is a REAL divergence. `[var:]` FIRED.

    VERS. 5.-- « Videns autem Dominus, » etc.

**Verdict: Migne prints *Dominus*; the Clementine's Gn 6:5 reads *Deus*. The `⚑ MATCHES ONLY
ELSEWHERE` mark was right, and the marker stands.**

Evidence, in order:

1. **The file.** `sources/vulgate/clementine-flat.txt`, **Gn 6:5**: *Videns autem **Deus** quod
   multa malitia hominum esset in terra…* The gloss is on Genesis 6 — its head is `CAPUT VI.`,
   its neighbours are `VERS. 3, 4.` (Gn 6:3, *Non permanebit spiritus meus*) and `VERS. 6-8.`
   (Gn 6:6, *Poenituit eum*), and the lemma is addressed `VERS. 5.` So the verse is fixed
   independently of the words, and it is Gn 6:5.
2. **The brief's other address, checked and rejected as the source.** **Gn 29:31** does read
   *Videns autem Dominus quod despiceret Liam* — but that is Jacob and Lia, four books' worth
   of narrative away, in a chapter this commentary has not reached and does not cite. It
   explains why a mechanical phrase search matched; it is not a candidate reading here.
3. ⭐ **The plate, read at 1200 dpi (p. 57, col 104, band D, corner numbers checked first):**
   `VERS. 5. — « Videns autem Dominus, » etc. Non in Deum poenitentia cadit…`
   **Migne's type reads *Dominus*.** So this is not the digitization manufacturing a divergence
   — the class `plate-reads.json` exists to catch, and the class that would have made a
   collation "find" a defect nobody printed. The claim is against the plate and the plate
   supports it.
4. **Not the gloss's own word.** The comment immediately below reads *Non in **Deum**
   poenitentia cadit* and *ira **Dei***, i.e. the expositor says *Deus* while the lemma says
   *Dominus* — so the divergence is in the quotation alone, which is exactly Pattern 14's case.

Marker as fired: `[var: Vulg. Gn 6:5 reads *Deus*, "God"]`.

⚑ **And the same divergence recurs 25 columns earlier**, unflagged by the brief because the
phrase matches Gn 4:25 well enough for the pre-scan: **0102B `« Posuit mihi Dominus semen
aliud, »`** against Clementine Gn 4:25 *Posuit mihi **Deus** semen aliud pro Abel*. Plate read
at p. 56 (corners 101/102) — Migne prints *Dominus*. `[var:]` fired there too. **The check
that fired once found a pair; a `⚑` mark is a place to start, not the extent of the class.**

---

### §3 · THE THREE UNPAIRED GUILLEMETS — all three are MIGNE'S, plate-read

- **0100C, unclosed `«`** — `LXX: « Habitavit in terra Ναΐδ Naid, … dum huc atque illuc
  profugus aberrat.` Plate (p. 55): the quotation opens and is never closed. Mirrored
  unclosed, per Pattern 5's corollary.
- **0101C, unclosed `«`** — `VERS. 22.-- . . . « Tubalcain. [n: (RAB.)] Qui secundum
  Josephum…` Plate (p. 56): likewise open. Mirrored.
- **0106A, orphan `»`** — `Ostium autem arcae, » etc.` ⛔ **This one is NOT Migne's.** The
  plate (p. 58) prints **`« Ostium autem arcae, » etc.`**, balanced. **Corpus Corporum has
  dropped the opening mark.** The English nevertheless mirrors the twin and prints the orphan
  `»`, because guillemet parity against the twin is a hard `verify-english` check and the
  English cannot carry a mark the Latin column does not show. Patch filed; when it lands, the
  English takes the `«` too. **Recorded prominently because a blind reader will meet this and
  read it as our defect — it is our SOURCE's, and the plate is clean.**
- ⚠ The corollary that matters for the merge: **two of three unpaired marks were Migne's and
  one was the digitization's, and no test but the plate separates them.** Do not adopt a
  policy of mirroring unpaired guillemets as "his" without reading the column.

---

### §4 · THE VULGATE DIVERGENCE LIST — every lemma collated, agreements included

Collated against `sources/vulgate/clementine-flat.txt`, never from memory. **Agreements are
listed because a list of findings alone cannot be told from a report by an agent that never
looked.**

#### Fired — 5 `[var:]`

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0095B | `« Ipsa servabit calcaneum tuum, et tu conteres ejus calcaneum. »` | Gn 3:15 *ipsa conteret caput tuum, et tu **insidiaberis calcaneo ejus*** | given bare under `(HIERON.)`, as the verse; both halves differ, and the second reverses who does what — Migne's has the serpent crushing, the Vulgate has him lying in wait |
| 0099C | `« Mortuus est enim propter delicta nostra, et resurrexit propter justificationem nostram: »` | Rom 4:25 ***qui traditus est** propter delicta nostra…* | "he died" for "who was delivered up"; the gloss builds on the death (*crucifigendo sunt operati*), so the substituted verb is load-bearing |
| 0102B | `« Posuit mihi Dominus semen aliud, »` | Gn 4:25 *Posuit mihi **Deus** semen aliud pro Abel* | *Dominus* for *Deus*; plate-confirmed, see §2 |
| 0103B | `« Vidit stultum firma radice, et maledixit pulchritudini ejus statim. »` | Job 5:3 ***Ego vidi** stultum firma radice, et **maledixi** pulchritudini ejus statim* | first person turned to third — Eliphaz's testimony becomes an anonymous report. **And Migne cites it `Joan. V`: the words are Job's, and there is no such verse in John.** Plate read at 1200 dpi (p. 57): the type is `Joan. v`, so the misattribution is his, not the digitization's. Reproduced uncorrected per the sigla rule; the marker names the real source. |
| 0104D | `« Videns autem Dominus, »` | Gn 6:5 *Videns autem **Deus*** | the flagged site; plate-confirmed. Full argument at §2. |

#### Checked and DECLINED, with the reason — these are not defects

- **0095B `« Ipsa conteret caput tuum, et tu conteres calcaneum ejus, »`** — diverges from
  Gn 3:15 in the second half, and is introduced *Melius in Hebraeo habetur*. §1(b): announced.
- **0097B, three spans** (`« Et ejecit, et habitare fecit contra paradisum… »`, `« et ejecit
  Dominus, »`, `« et habitare fecit ante paradisum… »`) — all against Gn 3:24, all explicitly
  LXX or *in Hebraeo*. Announced.
- **0098C `« Et inflammavit Dominus super Abel… non inflammavit? »`** — announced as
  Theodotion's. Not in the Clementine at all, and could not be.
- **0099C `« gemens et tremens. »`**, **0100A `« Omnis qui occiderit Cain septem vindictas
  exsolvet, »` / `« Septem vindictas exsolvet. »`**, **`« septempliciter »` / `« septulum »` /
  `« per hebdomadem »`** — announced LXX, Aquila, Symmachus, Theodotion. Announced.
- **0104B `« filios deorum »` / `« Videntes filii potentum filias hominum. »`**, **0104C
  `« Non judicabit spiritus meus homines in sempiternum, quoniam caro sunt. »`** — announced
  Aquila, Symmachus, and the Hebrew against Gn 6:3's *Non permanebit spiritus meus in homine
  in aeternum, quia caro est.* Announced.
- **0105C, 0106A `« Bicamerata et tricamerata… »`** — announced LXX against Gn 6:16.
- **0096A `« Et vocavit Adam nomen uxoris suae Eva, »`** — Gn 3:20 spells **Heva**. Spelling
  only; no sense turns on it. Same for **0100D `« Porro Enoch, »`** against Gn 4:18 *Porro
  **Henoch***, and note that our own gloss spells it *Henoch* nine lines later at 0100C.
- **0101D `« Non dico tibi septies, sed usque septuagies septies, »`** — Mt 18:22 reads *Non
  dico tibi **usque** septies*. A dropped *usque* in the first member; the sense and the
  arithmetic the gloss builds on are untouched. Declined.
- **0102A `« Non enim judicabit Deus bis in idipsum, »`** — **not a Vulgate verse.** The nearest
  is Nah 1:9 *non consurget duplex tribulatio*, which shares no wording. Jerome's own maxim, not
  a quotation. No received reading exists to name, so `[var:]` has nothing to compare against.
  Declined and recorded, because its absence from the list would otherwise look like an oversight.
- **0100B `« Disperge illos in virtute tua [n: (Psal. LIII)]. »`** — **the text agrees exactly**
  with Ps 58:12; it is **Migne's citation** that is wrong by five psalms. The note rides
  verbatim (`refDisplay` keeps what he prints); no `[var:]`, since Pattern 14 marks the text.
- **0106A `« Qui non colligit mecum, dispergit. »`** cited *Matth. XI* — the wording is
  **Lc 11:23 exactly**; Mt 12:30 reads *qui non congregat mihi, spargit*. So Migne quotes Luke
  under Matthew's name. Text agrees with its real source, so no `[var:]`; citation logged here.
  ⚠ The *previous* `Matth. XI` in the same chunk (0105A, *Discite a me quia mitis sum et humilis
  corde*) is **correct** — Mt 11:29. The two are not one error.
- **0104A `« Et fuerunt omnes dies Mathusalae quos vixit anni nongenti sexaginta novem… »`** —
  Gn 5:27 reads *Et **facti sunt** omnes dies Mathusala nongenti sexaginta novem anni.* Jerome
  is quoting his own version inside a discussion of the codices' arithmetic, and Migne prints
  the Vulgate form as the lemma four words earlier (`« Et facti sunt omnes dies, »`), so the
  contrast is deliberate. Sense identical. Declined.
- **0100C `« Habitavit in terra ad orientalem plagam Eden. »`** — Gn 4:16 reads *habitavit**que
  profugus** in terra ad orientalem plagam Eden.* A clipped lemma, not a divergence.

#### Checked and found to AGREE with the Clementine exactly

Gn 3:15 (`Inimicitias ponam… Ipsa conteret caput tuum`, with Migne's own ellipsis) · 3:16
(`Mulieri quoque`, `Multiplicabo aerumnas`, `Multiplicabo aerumnas tuas`) · 3:17 (`Maledicta
terra`, `Maledicta terra in opere tuo` ×2, `In laboribus`) · 3:19 (`Pulvis es`) · 3:21 (`Fecit
quoque`) · 3:22 (`Et ait: Ecce Adam quasi unus ex nobis`, and all five re-quotations of `quasi
unus ex nobis`) · 3:23 (`Et emisit eum`) · 3:24 (`Ejecitque Adam`, `Et collocavit` ×2,
`Collocavit`, `flammeum gladium`) · 4:1 (`Adam vero`, `Concepit et peperit`) · 4:2 (`Fuit autem
Abel`, `agricola`, `pastor ovium`) · 4:4 (`Abel quoque obtulit`, `Et respexit Dominus ad Abel`)
· 4:7 (`In foribus`) · 4:8 (`Dixitque Cain`) · 4:9 (`Et ait Dominus ad Cain`) · 4:10 (`Vox
sanguinis`) · 4:11 (`Nunc igitur maledictus eris` ×2, `Maledictus eris super terram`) · 4:12
(`Cum operatus`, `Vagus et profugus`) · 4:13 (`Major est iniquitas mea` ×2) · 4:14 (`Omnis
igitur qui invenerit me`) · 4:15 (`Nequaquam ita fiet`, `Omnis qui occiderit Cain`, `Qui
occiderit Cain`, `Sed omnis qui occiderit Cain`, `septuplum punietur`, `Posuitque Dominus Cain
signum`) · 4:17 (`Cognovit autem Cain uxorem suam`, `Et aedificavit civitatem`) · 4:19 (`Qui
accepit duas uxores`) · 4:20 (`Genuitque Ada Jabel`) · 4:21 (`Et nomen fratris ejus Jubal`) ·
4:23 (`Dixitque Lamech`, `Occidi virum in vulnus meum`, `Occidi virum`, `in vulnus meum`, `et
adolescentulum in livorem meum`) · 4:24 (`Septuplum ultio dabitur`) · 4:25 (`Cognovit quoque
adhuc`) · 4:26 (`Quem vocavit Enos` ×2, `coepit invocare nomen Domini` ×2) · 5:1 (`Hic est
liber generationis Adam`, `In die qua creavit Deus hominem`, `Ad similitudinem Dei`) · 5:3
(`Vixit autem Adam`, `Et genuit`) · 5:24 (`Ambulavitque cum Deo`) · 5:25 (`Vixit quoque
Mathusala`) · 5:32 (`Noe vero cum quingentorum esset annorum`) · 6:1 (`Cumque coepissent
homines multiplicari super terram`) · 6:2 (`Videntes filii Dei`) · 6:3 (`Dixitque Deus: Non
permanebit Spiritus meus`, `Eruntque dies illius`) · 6:9 (`Noe vir justus`, `In generationibus
suis`) · 6:13 (`Disperdam eos cum`) · 6:14 (`Fac tibi arcam de lignis`, `Mansiunculas`) · 6:15
(`Trecentorum cubitorum`) · 6:16 (`In cubito consummabis summitatem ejus`, `Coenacula et
tristega`) · 6:19 (`Et ex cunctis`) · 6:21 (`Tolles igitur`) · Ps 62:6 (`Sicut adipe et
pinguedine repleatur anima mea`) · Mt 11:29 (`Discite a me quia mitis sum et humilis corde`).

⚠ **One address anomaly, Migne's, reproduced and not reordered:** the lemma at `VERS. 31.`
(`« Et facti sunt omnes dies, »`, 0104A) glosses Mathusala, i.e. **Gn 5:27**, and the lemma
under the same address at 0104B (`« Noe vero cum quingentorum esset annorum, »`) is **Gn 5:32**.
The recension's verse numbering is its own; Ruth's §1 rule (never reorder, log it) applies.

---

### §5 · THE DECLINED LIST — suspect words, what would settle them, and why NO `[sic:]` fired

**Zero `[sic:]` and zero `[cj:]` in 5,041 words, and this is a finding, not a gap.** Every
plate defect this range actually contains is one our twin has already tidied away, so a
`[sic:]` on it would fail the verbatim-substring guard — the guard is right and the marker is
owed, not withheld. All nineteen confirmed divergences are in
`data/briefs/8950-PENDING-TEI-PATCHES-0008.md`; the ones that will take a marker after the
patch are named there. Below is what a reader should know from the English side.

**`[sic:]` OWED, after the patch — plate defect, twin corrected (all read at 600–1200 dpi):**

1. **0097A `Deos enim et aeternus est`** (twin: *Deus*). A real word with **no grammatical
   slot** — accusative plural as subject of a singular *est* — which is Pattern 12's own test
   (1). English renders the sense, "For God is both eternal and happy"; nothing in the English
   discloses it until the marker can be fired.
2. **0098C `» et. Quia justus`** (twin: *etc.*). Migne's broken abbreviation.
3. **0100A `« septulum; »`** (twin: *septuplum*). Non-word.
   ⚠ And a second thing is lost here even when it is patched: *septempliciter* (Aquila,
   adverbial) and *septuplum* (Symmachus, accusative) **both render "sevenfold" in English**,
   which flattens a distinction Migne is drawing between two Greek translators. There is no
   English exponent for it; Pattern 9's reasoning applies, and this note is the only record.
4. **0101C `id est vulnera quod infixi`** (twin: *vulnere*). Neuter plural against a singular
   relative — no slot. English renders "by the wound which I inflicted".
5. **0104D `contesimo anno`** (twin: *centesimo*). Non-word. English: "the hundredth year".
6. **0105D `Potet in trecentis cubitis`** (twin: *Potest*). Non-word — and *trecentis* prints
   correctly in the very same clause, so it is a broken sort, not an orthography.
7. **0105D `Arca quae treeentis cubitis`** (twin: *trecentis*). Non-word, two lines below (6),
   and the two together are the compositor having trouble with one word on one page.

**Suspicions raised and REFUTED at the plate — recorded because a checked negative is worth
having (brief §4 asks for exactly these):**

- **0099C `dilicta`** — our twin's reading, a non-word, and the natural suspicion is Migne's
  type. **The plate reads `delicta`.** This one is **ours**, and a `[sic:]` here would have
  been a public accusation against a clean page. It is also the shape brief §A calls decisive:
  the suspicion aimed at a non-word was right that an error existed and **wrong about whose it
  was** — which is the whole of `plate-read-triage`'s rule with an instance attached.
- **0097D `Remotus est`** — read oddly against *gladius*; the plate has **`Remotum est`**, an
  impersonal. **English has no exponent** ("it was removed" serves both), so nothing changes in
  the text and no marker is possible either way.
- **0102C `intellecta diligeret`** — reads smoothly as *intelligendo → intellecta → dilecta*,
  a three-term chain, and that smoothness is exactly what brief §4 warns about. **The plate
  reads `intellectu`.** The English follows the plate — "might love with understanding" — and
  the rival (*intellecta*, "might love the things it understood") **loses because the plate
  decides it**, not because it reads worse; it reads better, which is the point.
- **0098A `sed post in exsilio generata`** — construes cleanly ("but afterwards begotten in
  exile"). **The plate reads `sed potest`**, read at 1200 dpi. The tidy twin reading was the
  suspect and the rough plate reading won. See §1(f) for the bracketed supply.
- **0100A `interpretantur`** — plural, distributing over Aquila, Symmachus and Theodotion.
  **The plate reads `interpretatur`**, singular, so the verb belongs to Theodotion alone and
  the first two clauses are elliptical. English follows the plate.

**Raised, unresolved, and deliberately NOT acted on** — thirteen punctuation and orthography
divergences seen only in the 300-dpi full-page render (Part B of the patch file). A mark is
precisely the class a 300-dpi glance gets wrong, so the rule this stint applied is: **act on
the plate only where the line was re-cropped at 600 dpi or better; otherwise log and leave the
twin alone.** Two are worth naming here because they touch structure rather than a comma:
`VERS. 23.--` at 0097B may be set **`VERS. — 23.`** on the plate (the dash before the number,
against every other address in the range), and `CAPUT IV.` may lack its period.

---

### §6 · UNEXPRESSED SUBJECTS — every supplied pronoun, named

- **0095B, *et Dominus conteret Satan sub pedibus ejus*** → "under **her** feet". *ejus* is
  genitive singular and common in gender, so the Latin does not decide it. The antecedent
  taken is the **`ipsa`/`mulier` of the lemma directly above**, which the whole paragraph is
  expounding (*Ipsa conteret caput tuum*) — the head-crushing member of the verse, of which
  this clause is the gloss. ⚠ **The rival is real and is named here rather than buried:**
  Rom 16:20 has *sub pedibus **vestris***, and a translator reaching for the remembered verse
  gets "your feet" or "his feet". Neither is what Migne prints, and *ejus* cannot be plural.
- **0095A, *qui cum ab initio deprehenditur, percutere calcaneo molitur*** → "when **he** is
  caught": the serpent, from *serpentis* two clauses earlier; the same subject carries through
  *non percutit* and *decipere tendit*.
- **0096D–0097B, the whole Rupert paragraph** → "**he**" is Adam throughout (*tam miser factus
  Adam*), and "**let us**" is the divine plural of *quasi unus ex nobis* which the passage is
  glossing. The one place the referent shifts is *ob hoc veracem se esse rideat oculus nequam
  diaboli* — subject *oculus*, not Adam.
- **0100D, *Figurate progenies impiorum … civitatem exstruxit quam vocavit Henoch*** → "**he**
  called", singular, agreeing with *progenies*; the plurals that follow (*dedicant, plantant,
  floreant, arescant*) are Migne's own shift to the collective and are carried as plurals.
  Both numbers are in the printed Latin; neither was harmonised.
- **0103A, *Quasi et iste portavit imaginem terreni qui pro Abel justo repositus est*** →
  "**he** who was put in the place of the just Abel" = **Seth**, named nowhere in the sentence
  but fixed by *pro Abel* and by *ante Seth nullum legitur genuisse* four lines below.
- **0106D, *qui etiam ut sine cibo viverent divina facultate donaret*** → "**they**" are the
  animals of the preceding sentence, not Noe and his household; *viverent* is plural and the
  paragraph's subject throughout is *animalia*.

### §7 · NEGATION — the hosts, named (test 2 / 2a)

Fired on the trigger population (a negative on a verb with a quantifier or correlative near):

- **0095D *Terrae maledixit, non aquis*** — `non` is on **`aquis`**, not on the verb; the
  `non … quia … non de aquis bibit` chain confirms it. English keeps it on "the waters".
- **0096A *sed non ut laborem homini inferrent*** — on the **purpose clause**, not on *erant*:
  the thorns did exist. English: "Thorns were there before, but not so as to bring labor".
  ⚠ This is the 8987 shape exactly (a `sed non ut` beside a verb that would take the negative
  plausibly), and the plate was checked: Migne prints *erant sed non ut*.
- **0099B *qui noluit esse sub gratia, sed sub lege*** — the `sed` correlative fixes the
  negative on **`sub gratia`**, not on *esse*; rendered "who would not be under grace, but
  under the law".
- **0099D *tanquam aut omnia non possit, aut invideat saluti*** — `non` on **`possit`** inside
  the first arm of `aut … aut`; the second arm is affirmative and must stay so.
- **0103B *justorum enim est omnia viriliter agere, nihil femineum, nihil fragile usurpare*** —
  two `nihil`, both on **`usurpare`**, both carried.
- **0104C *Non est incredibile ab hominibus, non ab angelis*** — the second `non` is on
  **`ab angelis`**, and the whole point is that the giants were begotten **by men**. Rendering
  it onto the verb would reverse the claim. English: "by men, not by angels".
- **0105A *nihil fecerit quod poenitendo resipiscat*** — `nihil` is the **object** of *fecerit*;
  7a⁗'s fourth question (does the clause still have the thing it acts on) answered explicitly.
- **0106B *nec impulsu ventorum, nec impetu fluctuum, nec inquietudine animalium … inclinari
  posset aut mergi*** — three `nec`, all on the ablatives, all carried; the *aut* is inside the
  scope of the negation and English keeps it there ("neither tilted nor sunk").
- **0106C *nihil est quod Deus suave et salubre facere non possit*** — a double negative Migne
  prints and the English prints: "there is nothing which God cannot make sweet and wholesome".

### §8 · READ CLEAN — sections examined and found without defect

0095A–0095D (Gregory on crushing the serpent's head; the Augustine splices on Gn 3:16–18) ·
0096B–0096C (the *perizomata* / tunics gloss; the two Augustine splices on *quasi unus ex
nobis*) · 0096D–0097B (Rupert entire — the longest continuous passage in the range, and the
one place where the printed Latin's antitheses could most easily have been smoothed; the
*aeterna felicitas, felix aeternitas* chiasmus is Migne's and is carried in his order both
times) · 0098B–0098D (Isidore on the two peoples; Theodotion on the sacrifice) · 0099A–0099B ·
0100A–0100B (the seven vengeances, all four versions) · 0101A–0101B · 0102A–0102B · 0102C–0103A
· 0103C–0103D (the name-interpretation catalogue) · 0104A–0104B · 0105A–0105C (the ark's
chambers, Strabo and Augustine; the two accounts genuinely disagree in Migne and are left
disagreeing) · 0106A–0106D.

⚠ **One passage that reads oddly and was checked rather than repaired:** 0106C prints *habens
in se **longitudinem**, id est, Trinitatis fidem ac **longitudinem** vitae et immortalitatis;
latitudinem in charitate … altitudinem in spe*. The word repeats where the triad
length/breadth/height would lead a reader to expect something else, and the shape invites a
`[d:]`. **It is not a dittography:** the two occurrences govern different phrases (*Trinitatis
fidem* and *vitae et immortalitatis*) and neither is an eye-skip with no grammatical slot,
which is Pattern 11a's test. Plate read at p. 58: both are printed. Rendered as printed.


---

## STINT 4 — chunks 0012–0018 (cols 0106D–0120D)

*Filed as `cruces-0012.md`; merged verbatim, headings demoted one level. Nothing in it was rewritten — where a later stint corrected it, the correction stands in that stint's section.*


Stint 4 of 8950. Seven chunks, 5,898 Latin body words → 8,477 English (1.437×).
Bands **0106D–0120D**: CAPUT VII (the flood) through CAPUT XIV (Melchisedech).
`verify-english.mjs` reports **no error on 0012–0018** — column anchors, `[n:]` notes,
guillemets, italic spans and question marks all 1:1 with the Latin twins. (The run exits
non-zero only on the chunks other stints have not yet filed.)

⭐⭐ **THE WHOLE RANGE WAS READ AT THE PLATE — all eight leaves, cols 0106D–0120D.**
archive.org `patrologiaecurs04migngoog`, **PDF page = (column + 11) / 2**, **corner numbers read
first on every page**: pp. 58 (105/106), 59 (107/108), 60 (109/110), 61 (111/112), 62 (113/114),
63 (115/116), 64 (117/118), 65 (119/120). Reads are recorded in
`data/briefs/8950-PLATE-READS-0012.json` for the coordinator to merge — **`data/plate-reads.json`
was NOT written**, and was verified byte-identical afterwards. `plate-gate.mjs 8950` returns
**`gate OK`** against a simulated merge.

**Apparatus fired: 16 `[var:]` · 3 `[ed:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[nt:]`.**
⛔ **Zero `[sic:]`, and that is a finding, not caution.** Every defect this range contains is
**Corpus Corporum's, not Migne's** — nine sites where the digitization silently *corrected* the
plate — so a `[sic:]` would fail `verify-english`'s verbatim-substring guard and would publicly
accuse Migne of the transcription's error. Five `[sic:]` are **OWED after the patch pass** and
are named in `data/briefs/8950-PENDING-TEI-PATCHES-0012.md`. This is the same result the
0008–0011 stint reached over its own range, independently.

Per-chunk parity (English = Latin in every column):

| chunk | anchors | `[n:]` | `?` | `«` / `»` | italic spans | `[var:]` | `[ed:]` |
|---|---|---|---|---|---|---|---|
| 0012 | 7 | 13 | 3 | 21 / 21 | 4 | 3 | 0 |
| 0013 | 10 | 17 | 2 | 26 / 25 | 4 | 2 | 0 |
| 0014 | 8 | 13 | 1 | 22 / 22 | 7 | 2 | 0 |
| 0015 | 5 | 4 | 1 | 22 / 23 | 8 | 1 | 1 |
| 0016 | 11 | 20 | 1 | 31 / 33 | 18 | 5 | 1 |
| 0017 | 6 | 2 | 1 | 17 / 17 | 10 | 1 | 1 |
| 0018 | 9 | 8 | 1 | 20 / 20 | 36 | 2 | 0 |

**Em-dashes: ZERO in all seven chunks** (four written in draft, all four removed for a comma).

⚑ **Ten places where the English now renders MIGNE'S TYPE rather than our twin's**, under
`translation-style.md` § "What the English translates — THE PLATE WHERE READ": 0108B
`VERS. 20-22.--`, 0110B *non dicit* and the dropped *et*, 0113A *Japhet* ×2, 0115D the comma
inside `*as far as*`, 0117B the head `CHAPTER XIII.`, 0118B a full stop for a comma, 0119B a
comma for a full stop **and** a full stop for a comma four lines apart, 0119B the two tag
periods, 0120D a semicolon inside a quotation. **Every one is filed as a pending patch**, so the
Latin converges on the English rather than the two drifting.

### §0 · SPAN COUNT AGAINST THE BRIEF — 245 against 245, EXACT

Counted mechanically over the seven chunk bodies (frontmatter excluded): guillemet spans matched
first with a non-greedy `«[\s\S]*?»`, then `\*[^*\n]+\*` over what remained, so an italic span
nested inside a guillemet span is not double-counted — the brief's own convention.

| chunk | `« … »` | `*…*` | total | raw `«` / `»` |
|---|---|---|---|---|
| 0012 | 21 | 4 | 25 | 21 / 21 |
| 0013 | 25 | 4 | 29 | 26 / 25 |
| 0014 | 22 | 7 | 29 | 22 / 22 |
| 0015 | 22 | 8 | 30 | 22 / 23 |
| 0016 | 31 | 18 | 49 | 31 / 33 |
| 0017 | 17 | 10 | 27 | 17 / 17 |
| 0018 | 20 | 36 | 56 | 20 / 20 |
| **total** | **158** | **87** | **245** | **159 / 161** |

**245 = the 245 printed in `data/briefs/8950-lemmata-0012.txt`.** Every inventory line was matched
to a span in my own Latin and every span to a line; there is no residue in either direction, and
the seven spans the rebuilt harvester recovered in this range (0108C ×2, 0108D ×2, 0115D, 0116C ×2)
are all present and all collated below. **The mis-split shape reported on 9001 is not present here.**

⚠ **The raw marks are unbalanced — 159 `«` against 161 `»` — and that is Migne, not a count error**
(§3). One extra open at 0013 and three extra closes at 0015/0016; the pairing regex absorbs them,
which is why the span total still reconciles.

---

### §1 · CONVENTIONS — inherited unchanged, and the three this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not re-opened**, nor were the three earlier
stints of this same work (`cruces-0000.md`, `cruces-0004.md`, `cruces-0008.md`), which I read
before drafting: `VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary lemma
is rendered as the phrase it stands for; sigla ride as ordinary `[n: …]` notes with Migne's own
internal spacing, contents unanglicized; **the guillemets are the plate's, 1:1**, and their
contents are Englished; `*usque ad*` → ***as far as***, with **no verb and no object ever
supplied**; the `*Historice / Allegorice / Mystice*` tags are translated inside their italic span
(stint 3 §1a) — `*Mystice.*` → ***Mystically.***, `*Allegorice.*` → ***Allegorically.***,
`*[n: (STRAB.)] Historice.*` → ***[n: (STRAB.)] Historically.*** with the note kept inside the span,
exactly where Migne sets it (0110B).

#### (a) ⭐ NEW — an italic Latin word: MEANING is Englished, a word MENTIONED AS A WORD is not

This range is the etymological heart of the book (Genesis 10–14 is a name-list), and it carries
**53 italic spans that are Latin rather than Hebrew**. They split into two classes that must be
treated oppositely, and getting it wrong destroys an argument either way:

1. **The Latin gloss that gives the MEANING of a Hebrew name is Englished inside its span.**
   `Bethel … *domus Dei,*` → `*the house of God,*` · `Heber, *transitor,* … *transitores.*` →
   `*a passer-over,* … *passers-over*` (and the next sentence, *qui … transeunt*, turns on it) ·
   `*declinans*` → `*declining*` · `*descensum,*` → `*a going down,*` · `*rex justitiae,* …
   *rex pacis,*` → `*king of justice,* … *king of peace,*` · and the whole Genesis 14 chain at
   0118C–0119C (`*excussio dentium*`, `*fetor eorum*`, `*Decorus manipulus*`, `*Sciens jugum*`,
   `*in angustia constitutum,*`, `*cinguli maeroris,*`, `*praecipitatio*`, `*absorbitio:*` …).
   Leaving these Latin would leave an English reader the name and not the interpretation, which is
   the only thing the paragraph says.
2. ⛔ **The Latin word MENTIONED as a word — where the argument is about the form itself — stays
   Latin.** Two sites, both cross-linguistic:
   - **0115B** *in Latino **sidera** non **ferrea** significat, sicut in Graeco, sed **astra***.
     The whole point is that one letter-sequence means different things in the two languages;
     Englishing *sidera* would make the sentence say that "stars" does not signify "iron" but
     "stars". The transliteration `*in raudo sidera.*` is likewise carried untouched, as is the
     Greek ἐν ραβδῳ σιδηρᾶ.
   - **0118B** *quod in quibusdam codicibus, **mare** pro **occidente** ponitur*. A statement about
     what stands in certain codices, not about what a name means.
   Hebrew and Greek forms are never touched at all: `*heth*`, `χ *chi*`, `*Cham*`, `*Ham,*`,
   `*samech,*`, `*schin*`, `*scheba*`, `*seba.*`, `*tau*` ×2, `*Salissam*`, `*Zoara*`,
   `*in Ur Chesdim*`.

⚑ **The test, stated so a later stint can apply it without re-deriving it: is the italic word the
TRANSLATION of something, or the SUBJECT of the sentence?** A translation is Englished; a subject
is quoted. This is the same line Pattern 6's corollary draws for quotation marks and the same line
stint 1 §1(b) drew for *sementis/semen/seminium* — that stint had no italics in its twin and used
our own straight quotes; here the italics exist, so the span carries the distinction instead.

⚠ **Two spans resisted the rule and are recorded as such**, both because the Latin gloss contains an
untranslatable Hebrew element:
- **0118C** `*civitas, arbe quatuor.*` — *CHARIAT enim Hebraice **civitas, arbe quatuor.*** Rendered
  `*a city, arbe four.*`: *civitas* and *quatuor* are the Latin meanings, *arbe* is the Hebrew word
  being glossed, and all three sit in ONE italic span that cannot be split without breaking span
  parity. The English therefore mixes the two classes inside one span. Its twin four words earlier,
  `*civitas quatuor;*` → `*the city of four;*`, is a pure meaning-gloss and took the ordinary rule.
- **0119D** `*transfluviali;*` → `*one from beyond the river;*` — the Seventy's rendering of
  *Hebraeus* (περάτης). Englished as a meaning, because the next clause (*transito fluvio Euphrate*)
  is the argument for it.

#### (b) `usque ad` — 16 formulas, 7 ORDINARY. Decided per occurrence by the `etc.` splice test

**Formula (italic, immediately after an `etc.`), 16×**, all → `*as far as*`, no verb, no object and
no antecedent supplied anywhere: **0107A · 0107B · 0108C · 0110B · 0111B · 0112C · 0113A · 0114D ·
0115C · 0115D · 0116A ×2 · 0116C · 0116D · 0119D · 0120D.** Fifteen are `*usque ad*`; the sixteenth
is 0115D's `*usque,*`, discussed below.
⚠ Two of the fifteen land mid-clause and are left mid-clause: **0112C** *aversi operuerunt, etc.,
**usque ad** « tanquam in pacem anguli concurrentes. »* — the resumption is itself inside guillemets
and has no finite verb; and **0113A** *etc., **usque ad** id est opus eorum* — a bare apposition.

⛔ **Seven ORDINARY, non-formula `usque ad`, none italic, none after an `etc.`, each rendered by
sense** (brief addendum D):

| col | Latin | English |
|---|---|---|
| 0109A | *quod **usque ad** ipsos montes aqua est exaltata* | "as far as the mountains themselves" |
| 0113B | *a Tauro et Amano … **usque ad** fluvium Tanaim* | "as far as the river Tanais" |
| 0113B | *in Europa vero **usque ad** Gadira* | "as far as Gadira" |
| 0116A | *quando ibi vixit **usque ad** nativitatem Jacob* | "until the birth of Jacob" |
| 0118C | *« Et dominabitur a mari **usque ad** mare. »* | "from sea to sea" — **Ps 71:8's own words** |
| 0120B | *ostendunt eum **usque ad** Isaac vixisse* | "until Isaac" |
| 0120B | *omnes primogenitos a Noe **usque ad** Aaron* | "from Noah to Aaron" |

⭐ **0115D `*usque,*` is a VARIANT OF THE FORMULA and is listed above only because it lacks *ad*.**
*« Tulit itaque Thare Abram, » etc., **usque,** facti sunt dies Thare ducentorum quinque annorum, et
mortuus est in Haran. »* — it follows an `etc.`, it names the point at which the abridgment resumes,
and the resumption is Gn 11:32 verbatim. **Rendered `*as far as,*`, with the comma inside the span
as Migne sets it.** Precedent: stint 2's `*usque ad haec*` at 0091D, ruled the formula on the same
grounds. **Said here explicitly, per the series brief's requirement that an exception name the Latin
that forced it.**
⚠ **0118C is the 8967 col 0953C shape and is the one that must not be swept**: Ps 71:8 prints
*usque ad* as part of the verse, four lines below a formula at 0116D. Rendered "from sea to sea".

#### (c) The vocabulary axes — every instance, with the instrument checked before reporting

- **`gentes` / `gentilis`.** 25 occurrences (instrument checked: `gentesimo`, `indigentia` and
  `ducentorum` are excluded, and every remaining hit is listed). **Gentiles** where the *Judaei*/*gentes* opposition is
  live: 0111B *in vocatione **gentium** ad fidem* (Peter's dish); 0112A *« Judaeis scandalum,
  **gentibus** stultitiam … Judaeis et **gentibus**, »* glossed *quasi Sem et Japheth*; 0112D–0113A
  *in populo **gentium** orbem terrae occupavit Ecclesia*; 0113A *de Japheth **gentiles*** (the
  `gentilis` → Gentile rule, added on 9000); 0116C *non tantum gentis Judaicae, sed omnium
  **gentium** fidem suam sequentium*; 0118D *stultitiam **gentilium***; 0120C *Ecclesiam **gentium***.
  **nations** where the sense is plainly generic: 0113B *nomina locis et **gentibus** relinquentes*;
  0114A *caeterae sex **gentes** nobis ignotae* and *deletae sunt **gentes** bello Aethiopico*;
  0114B *hae **gentes** a fluvio Cono*; 0115B *diversis **gentibus** divisit*; 0117D *inter **gentes**
  Chananaei et Pheresaei*; 0118C *haereditas omnium **gentium*** and Ps 2:8's *dabo tibi **gentes***;
  0118D *rex **gentium*** (Gn 14:1's own words); 0119D *nomina locorum et **gentium***; 0118A *gente, sicut omnes Judaei* → **by nation**, the axis's
  singular-`gens`-of-the-Jewish-people rule; 0112D *Deus omnium **gentium*** and *in ipsis
  **gentibus***.
  - ⚠ **The one place the axis had to be applied twice in one sentence, and it is deliberate:**
    0116C sets the exposition *non tantum gentis Judaicae, sed omnium **gentium*** against its own
    proof-text *« Et benedicentur in te omnes **gentes** terrae. »* The exposition is the
    *Judaei*/*gentes* opposition → **Gentiles**; the verse is the axis's own generic exemplar shape
    (*omnes gentes*, Mt 28:19) and is universal, covering the Jews it has just named → **nations**.
    Singular *gens Judaica* → **the Jewish nation**, per the axis. **Recorded because it reads as an
    inconsistency and is not one.**
- **`natio` — ZERO in this range.** ⚑ Instrument checked before reporting, per the series brief: a
  raw `natio` grep returns **five** hits and every one is *damnatione* (0112D), *dominatio*
  (0115B), *cognationem* (0116B), *cognatione* (0116B) or *cognatione* (0118A). There is no
  `natio` in the range at all.
- **`turba` — ZERO.** Every `turb-` is absent entirely; there is no verb *turbare* here either.
  **`multitudo` ×2, both "multitude"** (0113A *lata est multitudo credentium*, 0120B *non in
  multitudine exercitus*).
- **`daemonium` — ZERO. `diabolus` ×2 → devil** (0113C, 0119C). No *satanas*.
- **`sacramentum` ×7 → sacrament** (0107D, 0108D, 0109B, 0110A, 0110C, 0110D, 0120A); **`mysterium` ×1 →
  mystery** (0110A *nullis egeamus mysteriis*). The 1:1 pair is exercised in adjacent columns and
  was kept 1:1.
- **The commentator's own voice is not archaised**: *dicit/ait/aiunt* → "says / say", never *saith*.
  `-eth`/`-est` forms appear only inside quoted scripture (Gal 5:17 *concupiscit* → "lusteth",
  1 Cor 3:7 *plantat/rigat* → "planteth/watereth", Job 5:2 *interficit/occidit* →
  "killeth/slayeth") and in second-person singular address.
- **Pattern 17.** Singular → *thou*: 0110C's whole Mystice paragraph (*addas · adjicias · pervenisti
  · egeas · invenies* → "thou add … thou hast come … thou needest … thou shalt find"); 0115D
  *« Ego sum qui eduxi **te** de Ur Chaldaeorum. »*; 0116D *« Dic ergo, obsecro, »*; 0117B *quomodo
  potuit dives esse valde* is third person and untouched; 0118A *si attenuatus fuerit frater
  **tuus** et vendiderit se **tibi***; 0118A–B *« Leva oculos, »* and *quantum **vides***; 0118C
  *« Tibi dabo. »* and Ps 2:8 *« Postula a me, et dabo **tibi** … »*. Plural → *you*: 0111B
  *« Et terror **vester**, »*; 0119D Jos 24 *« Quid **vultis** servire diis patrum **vestrorum**? »*.

#### (d) Heads — numerals mirror the plate, INCLUDING a missing period

`CAPUT VII.` → `CHAPTER VII.` · `CAPUT VIII.` → `CHAPTER VIII.` · `CAPUT IX.` → `CHAPTER IX.` ·
`CAPUT X.` → `CHAPTER X.` · `CAPUT XI.` → `CHAPTER XI.` · `CAPUT XII.` → `CHAPTER XII.` ·
`CAPUT XIV.` → `CHAPTER XIV.` — numerals throughout, per the corpus measurement.
⚠ **Chunk 0017's head is `## CAPUT XIII` with NO terminal period**, and its `heads:` frontmatter
field carries the same defect (`"CAPUT XIII"`). **The English head is `## CHAPTER XIII`, also with
no period**, and the frontmatter is copied verbatim. This is the opposite call from Tobit's
`CAPUT XIV` case (8970 §1e), where the plate was READ and shown to carry the period, so the English
head restored it while the frontmatter kept the TEI's reading. **Here the plate is unread**, so
supplying a period would be a silent repair of a head I have no witness for. Filed in §5 as a
plate debt: **PDF p. 64 settles it.**

#### (e) Frontmatter copied VERBATIM from each Latin chunk, field order included

Every field, in the Latin twin's own order, including `words:` figures that count the Latin.
Chunk 0012's `colContext: "0106D"` against `colFirst: "0107A"` is the chunker's, and is copied.

---

### §2 · THE THREE `[ed:]` — Corpus Corporum has dropped MIGNE'S HEBREW at four sites

Migne sets Hebrew square script in this book wherever Jerome is quoted on a name, and **our
transform has lost every occurrence in my range.** All four were read at 1200 dpi.

| col | our TEI reads | Migne's plate reads | what remains in our Latin |
|---|---|---|---|
| 0113C | `in Hebraeo habetur et *scheba* et *seba.*` | `in Hebraeo habetur **שׂבא** et **סבא** scheba et seba.` | a stray `et … et` that reads as a correlative |
| 0115C | `*in Ur Chesdim* **( )**` | `*in Ur Chesdim* (**אורכשׂדים**)` | an EMPTY pair of parentheses |
| 0117A | `habetur *gravis vehementer:*` | `habetur **כבד** *gravis vehementer*:` | nothing — the sentence still construes |
| 0118C | `*civitas quatuor;* CHARIAT enim Hebraice *civitas, arbe quatuor.*` | `*civitas quatuor*; **קרית** CHARIAT enim Hebraice *civitas*, **ארבע** *arbe quatuor*.` | two of Migne's italic phrases FUSED into one span |

**Three take an `[ed:]`; the fourth does not, and the line is Pattern 13a's own.** Clause 2 gives
the marker to a loss that would otherwise be **invisible as an absence**; clause 1 leaves an
ordinary mid-sentence loss to a silent patch and a crux. So:

- **0113C, 0115C and 0118C are MARKED** — each leaves a visible scar in our own text that
  misleads a reader who has only the two columns: a correlative that is not one, an empty
  bracket, and a fused italic span. ⭐ **0118C's scar is the one I had already flagged as a
  convention problem in §1(a) before I read the plate** — "two spans that resisted the rule" —
  and the plate shows the fusion is the digitization's, not Migne's oddity. That is the crux
  file catching something the Latin alone could not.
- **0117A is NOT marked** — the loss leaves the sentence sound and says nothing false. Crux and
  patch only.

⛔ **None of the four is a `[sic:]` or a `[var:]`.** They are Pattern 13 source loss: the plate
is perfectly legible and it is our transcription that has the hole. Pattern 13's rule that an
`[ed:]` **never supplies the lost text** is kept — the recovered Hebrew is recorded here and in
the patch file, not in the running English.

⚑ Stint 3 recorded the identical class at 0104C ("two Hebrew words dropped by CC"), so this is a
known, recurring behaviour in this book and not a local accident. **Eight Hebrew words are now
known lost across cols 0104–0118.**

---

### §3 · THE GUILLEMETS — the plate settles all four unpaired marks, and it splits them 2–2

Before the plate pass I reported four unpaired marks and called them all Migne's. **That was
half right, and the half that was wrong is the more interesting half.**

| col | our twin | the plate | verdict |
|---|---|---|---|
| 0108C | extra OPEN: `« Recordatus est autem Deus « Noe, »` | the same, with the repeat | **DECLINED** (an added auxiliary; sense unchanged). **MIGNE'S** — his line-continuation mark |
| 0116B | extra CLOSE: `VERS. 2-3.--Faciamque te in gentem magnam, »` | no opening mark either | **MIGNE'S** — reproduced unopened, per Pattern 5's corollary |
| 0113C | extra CLOSE: `Reges Arabum et Saba dona adducent, » in Hebraeo` | ⛔ **the plate has NO closing mark on `« Regma et Saba, etc.`** | **OURS** — our twin *supplies* a `»` Migne does not print, and that supplied mark is what leaves this one stranded |
| 0115D | extra CLOSE: `*usque,* facti sunt dies Thare … in Haran. »` | ⛔ **the plate OPENS `« facti`, and repeats it at each line head** | **OURS** — the plate is BALANCED here and our twin dropped the opener |

⭐ **So the class is not "Corpus Corporum drops Migne's repeated `«`." It is "Corpus Corporum
normalizes the quotation marks in whichever direction makes the pair balance"** — dropping an
opener at 0106D, 0107C, 0115C and 0115D, and *supplying* a closer at 0113C. That is a stronger
and more worrying statement than the one the earlier stints could make, and it means **a
balanced pair in our Latin is not evidence that Migne's pair was balanced.**

⛔ **Nothing was repaired.** Guillemet parity is checked against the twin, so the English mirrors
the twin at all four sites and the corrections belong in the patch file, where all six dropped
line-head repeats in this range are listed (0106D ×2, 0107C, 0113C, 0115C, 0115D).

---

### §4 · ⚠⚠ 7a″ — THE VULGATE COLLATION. **This is the deliverable.**

All 158 guillemet spans and the scriptural italic spans were collated **against
`sources/vulgate/clementine-flat.txt`, line by line, cited by book chapter:verse** — never from
memory, and never from the brief's pre-scan, whose `✓` addresses were read and in four places found
to point at the wrong book (Ps 119:7 filed under 1Par; Gn 11:8 under 1Par 24:3; Ps 71:8 and Ps 2:8
correctly). **The spans that AGREE are listed too (§4d): a list of divergences alone cannot be told
apart from a report by an agent that only chased the ⚠ marks.**

#### 4a. ⭐ THE PLATE WAS READ, SO THE MARKERS COULD BE FIRED — 16 of the 26

All eight leaves were read before any marker was placed, and **every one of the 26 divergences
was confirmed as MIGNE'S TYPE at 200–1200 dpi.** Not one turned out to be the digitization
manufacturing a Vulgate divergence — the class `plate-gate.mjs` exists to catch, and the class
9003's collation showed a Vulgate collation can never catch by itself.

**Sixteen took a `[var:]`; ten are recorded and declined.** The line I drew, stated so it can be
checked rather than admired — **fire where the divergent word is (a) a different lexeme, (b) a
different referent or grammatical person, or (c) a word the gloss itself argues from; decline
where the difference is orthography, a clipped fragment boundary, a synonymous connective, or
word order alone.** Pattern 14's bar is "in a way that changes the sense", and a marker on
word order is noise that buries the fourteen that carry information.

⚑ The ten declines are in §4b's own table, flagged **DECLINED**, with the reason on each row —
not hidden in a separate list, because a reader comparing the two needs them side by side.

#### 4b. DIVERGENT — 26 sites, ALL plate-confirmed as Migne's. **16 FIRED · 10 DECLINED.**

| col | Migne prints | Clementine | note · leaf |
|---|---|---|---|
| 0106D | `« Ex omnibus animantibus mundis **tolles** septena et septena, »` | Gn 7:2 ***tolle*** (imperative) | **DECLINED** (same lexeme, mood only; the gloss argues the number, not the verb). Future for imperative. **OCR-confirmed as Migne's.** p. 58 |
| 0107C | `« **Egressus est Noe et uxor ejus.** »` introduced *sic enim scriptum est* | Gn 8:18 *Egressus est **ergo** Noe, **et filii ejus : uxor illius, et uxores filiorum ejus cum eo*** | **FIRED.** ⚑ **Material**: the gloss's whole point is that they went out MINGLED, men with women, and the quotation has been cut to just Noah and his wife to make it. p. 59 |
| 0107C | `« Tempus enim **amplectendi** et tempus **abstinendi** [n: (Eccli. III)]. »` | Ecl 3:5 *tempus **amplexandi**, et tempus **longe fieri ab amplexibus*** | **FIRED.** A different verb and a wholly different second member. p. 59 |
| 0108B | `« **insufflavit** in faciem ejus **spiritum** vitae; »` | Gn 2:7 ***inspiravit** in faciem ejus **spiraculum** vitae* | **FIRED.** Two words. ⚠ Migne himself flags only the second (*sed quidam codices habent melius, « flatum vitae. »*), so the first is unlabelled. p. 59 |
| 0108C | `« Recordatus **est** autem Deus « Noe, »` | Gn 8:1 *Recordatus autem Deus Noe* | **DECLINED** (an added auxiliary; sense unchanged). *est* supplied. **OCR-confirmed as Migne's.** p. 59 |
| 0110D | `« **nunc** caro concupiscit adversus spiritum, **et** spiritus adversus carnem. »` | Gal 5:17 *Caro **enim** concupiscit adversus spiritum, spiritus **autem** adversus carnem* | **FIRED.** Two connectives changed; *nunc* is load-bearing (the gloss opposes *nunc* to *in resurrectione*). **OCR-confirmed as Migne's.** p. 60 |
| 0110D | `« Non percutiam omnem animam viventem sicut feci, »` | Gn 8:21 *non **igitur ultra** percutiam …* | **FIRED** — *ultra* is what limits the promise. *ultra* dropped, and it is the word that limits the promise. p. 60 |
| 0111A | `« Benedixitque Deus Noe et filiis; »` | Gn 9:1 *et filiis **ejus*** | **DECLINED** (a dropped possessive). p. 60 |
| 0112A | `« Erant **igitur** filii Noe, »` | Gn 9:18 *Erant **ergo** filii Noe* | **DECLINED** (synonymous connectives). p. 61 |
| 0112A | `« Judaeis scandalum, **gentibus** stultitiam, ipsis autem vocatis Judaeis et **gentibus**, »` | 1Cor 1:23–24 *Judaeis **quidem** scandalum, **gentibus autem** stultitiam, ipsis autem vocatis Judaeis, **atque Graecis***  | **FIRED.** ⚑ **Material and doubly so**: *gentibus* replaces *Graecis* in v. 24, and the gloss reads the two names as **Sem and Japheth** — i.e. the argument rests on the substituted word. p. 61 |
| 0112A | `« **Dei virtus,** et Dei sapientia: quia quod stultum est Dei … »` | 1Cor 1:24 ***Christum Dei virtutem**, et Dei sapientia* | *(covered by the same marker as the row above.)* Nominative for accusative, *Christum* dropped. p. 61 |
| 0112C, 0112D | `« Maledictus Chanaan **puer**, »` (twice) | Gn 9:25 *Maledictus Chanaan, **servus servorum erit fratribus suis*** | **FIRED once, at the first occurrence**, per Pattern 14's practice. *puer* is the Old-Latin/LXX παῖς and is not in the Clementine at all. **OCR-confirmed as Migne's.** p. 61 |
| 0113D | `« **Ascendam super astra coeli.** »` | Is 14:13 *In caelum **conscendam**, super astra **Dei** exaltabo solium meum* | **FIRED.** A free conflation, adduced as the devil's own words. p. 62 |
| 0114A | `« Ludim et Anamim. Laabim, **Nephetuim**, »` | Gn 10:13 *Ludim, et Anamim et Laabim, **Nephthuim*** | **DECLINED** (orthography of a proper name). p. 62 |
| 0114C | `« **viderunt**, inquit, campum in terra Sennaar, »` | Gn 11:2 ***invenerunt** campum in terra Senaar* | **FIRED.** ⚑ The gloss opens *Vide quomodo…*, so the substituted verb is the one the exposition echoes. **OCR-confirmed as Migne's.** p. 62 |
| 0114D | `« Descendamus, et confundamus linguam eorum, »` | Gn 11:7 *confundamus **ibi** linguam eorum* | **DECLINED** (a dropped adverb the gloss does not touch). p. 62 |
| 0115A | `« **Fecit** Deus hominem ad imaginem **et similitudinem** suam. »` | Gn 1:27 ***creavit** Deus hominem ad imaginem suam* | **FIRED.** The same divergence stint 1 logged at 0080B and 0081A; here it is adduced to prove the singular verb. p. 63 |
| 0115B | `« Sem **centum erat annorum**. »` | Gn 11:10 *Sem **erat centum** annorum* | **DECLINED** (word order alone). Word order only. p. 63 |
| 0115D | `« **Ego sum qui** eduxi te de Ur Chaldaeorum. »` | Gn 15:7 ***Ego Dominus qui** eduxi te de Ur Chaldaeorum* | **FIRED.** p. 63 |
| 0115D | `« **Aram** patris Melchae. »` (and *Aram filius Thare* below it) | Gn 11:29 ***Aran** patris Melchae* | **FIRED.** **OCR-confirmed as Migne's, in both places.** p. 63 |
| 0116C | `« Et benedicentur in te omnes **gentes** terrae. »` | Gn 12:3 *atque in te benedicentur **universae cognationes** terrae* | **FIRED.** ⚑ **Material**: this is the proof-text for Abraham as father *omnium gentium*, and the Clementine's word is not *gentes*. The form Migne prints is Gal 3:8 / Act 3:25. p. 63 |
| 0117D | `« Haereticum hominem post **primam** et secundam **correctionem** devita: »` | Tit 3:10 *post **unam** et secundam **correptionem** devita* | **FIRED.** Two words; *correptio* (rebuke) and *correctio* (correction) are different words, and the gloss is about avoiding heretics after rebuke. p. 64 |
| 0119D | `« Raphaim in **Astaroch**, »` | Gn 14:5 *Raphaim in **Astarothcarnaim*** | **FIRED.** p. 65 |
| 0119D | `« Quid vultis servire diis patrum vestrorum qui sunt trans flumen? »` | Jos 24:14–15 *auferte deos quibus servierunt patres vestri in Mesopotamia … utrum diis, quibus servierunt patres vestri in Mesopotamia* | **FIRED.** A free conflation of two verses; the words as printed occur nowhere. p. 65 |
| 0120C | `« sine patre **et** matre, »` | Hbr 7:3 *sine patre, **sine** matre, sine genealogia* | **DECLINED** (a conjunction for a repeated preposition; sense unchanged). p. 65 |
| 0120D | `« Malae bestiae, **pigri ventres**, »` | Tit 1:12 *malae bestiae, **ventres pigri*** | **DECLINED** (word order alone). Word order. **OCR-confirmed as Migne's** — and the OCR sets a semicolon inside the guillemets where our twin has a comma (§5). p. 65 |

#### 4c. DIVERGENT AND DECLINED ON THE MERITS — Migne labels the version himself

Stint 3's ruling (§1b of `cruces-0008.md`) governs: **`[var:]` fires where the words are offered AS
the text and diverge; where Migne announces the version, its divergence IS the sentence's subject
and a marker would tell the reader twice.** Five sites, and this range would have carried five extra
markers without the rule:

- **0108B** `« flatum vitae. »` — introduced *sed quidam codices habent melius*. Migne's own
  variant-report.
- **0113D** `« quia ipse coepit esse **gigas** super terram. »` against Gn 10:8 *potens in terra* —
  introduced *vel « gigas, » **secundum alios***, and the next sentence argues with it.
- **0117A–B** `« Abiit unde venerat in desertum usque Bethel, »` — introduced *ut in LXX legitur*,
  and expressly contrasted with the next.
- **0117B** `« Abiit in itinere suo per austrum usque Bethel. »` — introduced *secundum Hebraeum*.
  Gn 13:3 reads *Reversusque est per iter quo venerat a meridie in Bethel*; the whole paragraph is
  Jerome adjudicating between the two, so the divergence is the text.
- **0117A** `*gravis vehementer:*` for Gn 13:2 *dives valde* — introduced *sed in Hebraica veritate
  habetur*, and the gloss then argues from it (*Aegypti enim pondere gravabatur*).
- **0108D** `*[Al., unum]*` — **Migne's own bracketed variant**, reproduced verbatim and
  untranslated per the locked register. It offers Gn 1:9's *unum* against the text's *suum*, and it
  is his conjecture layer, not ours (Pattern 19's instinct).

#### 4d. COLLATED AND AGREEING — checked, exact or a clean whole-word fragment

Recorded so this can be told from a report by an agent who only read the ⚠ lines.

**Gn 7** — `« Dixitque Dominus, »` (7:1) · `« Ex omnibus animantibus, »` (7:2) · `« Ego pluam, »`
(7:4) · `« Fecit ergo Noe omnia, »` (7:5) · `« Eratque sexcentorum annorum, »` (7:6) ·
`« Ingressus est Noe et filii ejus, uxor, »` and `« Ingressus est Noe et filii ejus, »` and
`« uxor ejus et uxores filiorum ejus. »` (7:7 — the lemma opens mid-verse, dropping only the
Clementine's initial *Et*) · `« Cumque transissent, »` (7:10) · `« Anno sexcentesimo, »` (7:11) ·
`« Cataractae. »` (7:11) · `« Bina et bina, »` and `« In qua erat spiritus vitae, »` (7:15) ·
`« Quadraginta diebus, »` (7:17) · `« Quindecim cubitis altior, »` and `« Quindecim. »` (7:20) ·
`« Deleta sunt de terra. »` (7:23).
**Gn 8** — `« Adduxit spiritum super terram, »` (8:1) · `« centum quinquaginta dies »` (8:3) ·
`« Requievitque arca mense septimo, »` (8:4) · `« Decimo enim mense. »` (8:5) ·
`« Qui egrediebatur, »` (8:7) · `« Emisit quoque. »` (8:8) · `« Reversa est. »` (8:9) ·
`« Exspectatis, »` (8:10 — *Expectatis* is orthography, not divergence) · `« Portans ramum. »`
(8:11) · `« Exspectavitque nihilominus septem alios dies, »` (8:12, same orthography) ·
`« Sexcentesimo primo anno, »` (8:13) · `« Mense secundo. »` and `« Mense secundo, »` (8:14) ·
`« Egredere de arca, »` (8:16) · `« Et tollens, »` (8:20) · `« Sensus enim, »` (8:21).
**Gn 9** — `« Crescite et multiplicamini. »` (9:1) · `« Et terror vester, »` (9:2) ·
`« Carnem cum sanguine. »` (9:4) · `« Ecce ego statuam pactum, »` (9:9) · `« Arcum meum ponam, »`
(9:13) · `« Bibensque vinum, »` and `« In tabernaculo suo, »` (9:21) · `« Quod cum vidisset, »`
(9:22) · `« At vero Sem, »` (9:23) · `« Benedictus Dominus Deus Sem. »` (9:26) ·
`« Dilatet Deus Japheth. »` ×3 and `« Et habitet in tabernaculis Sem, »` (9:27) · `« Chanaan. »`.
**Gn 10** — `« Hae sunt generationes, »` (10:1) · `« Gomer. »` (10:2) · `« Thubal. »` (10:2) ·
`« Chanaan. »` (10:6) · `« Saba. »` (10:7) · `« Nemrod. »` and `« Ipse coepit esse potens, »` and
`« gigas, »` (10:8) · `« Robustus venator. »` (10:9) · `« Babylon. »` (10:10) · `« Assur. »` ×2
(10:11, 10:22) · `« At vero Mesraim, »` (10:13) · `« De Sem. »` (10:21) · `« Heber. »` (10:24) ·
`« Natique sunt Heber filii, »` (10:25).
**Gn 11–14** — `« Erat autem terra labii unius, »` (11:1) · `« Cumque proficiscerentur. »` (11:2) ·
`« Venite. »` (11:3) · `« Venite igitur, »` (11:7) · `« et divisit eos, »` and `« Divisit eos. »`
(11:8) · `« quia tulit eum Deus. »` (5:24, exact) · `« In Ur Chaldaeorum. »` (11:28) ·
`« Tulit itaque Thare Abram, »` (11:31) · *facti sunt dies Thare ducentorum quinque annorum, et
mortuus est in Haran. »* (11:32, **exact, including the terminal clause**) ·
`« Egredere de terra, »` and `« de domo patris, »` and `« Et veni in terram quam monstrabo tibi. »`
(12:1) · `Faciamque te in gentem magnam, »` (12:2) · `« Septuaginta quinque annorum. »` (12:4) ·
`« Bethel. »` · `« Hai. »` · `« Dic ergo, obsecro, »` (12:13, dropping only *te*) ·
`« Sublata est mulier. »` (12:15) · `« Ascendit ergo Abram, »` (13:1) · `« In Bethel, »` (13:3) ·
`« Erat quippe substantia eorum multa, »` (13:6) · `« Ne quaeso sit, »` and `« Fratres enim
sumus. »` (13:8) · `« Sicut paradisus, »` (13:10) · `« Coram Domino. »` (13:13) ·
`« Leva oculos, »` (13:14) · `« Omnem terram, »` and `« Tibi dabo. »` (13:15) ·
`« Surge et perambula terram, »` (13:17) · `« In Hebron. »` (13:18) · `« Amraphel. »` ×2 ·
`« Arioch. »` · `« Chodorlahomor. »` · `« Thadal. »` (14:1) · `« Balae. »` (14:2) ·
`« Duodecim, »` (14:4) · `« Percusseruntque. »` (14:5) · `« Hebraeo. »` (14:13) ·
`« Quod cum audisset Abram, »` (14:14) · `« At vero Melchisedech, »` (14:18) ·
`« Dedit ei decimas. »` (14:20) · `« Qui venerunt, »` (14:24).
**Non-Genesis proof-texts that agree exactly** — Gn 1:2 `« Spiritus Dei ferebatur super [0108D]
aquas: »` (the anchor falls **inside** the quotation and is reproduced inside it) · Gn 1:26
`« Faciamus hominem ad imaginem et similitudinem nostram. »` · Ps 106:25 `« Et stetit spiritus
procellae, »` · Ps 118:104 `« A mandatis tuis intellexi. »` · Lc 10:21 `« Abscondisti haec a
sapientibus et prudentibus, et revelasti ea parvulis. »` (**and Migne's `Luc X` is right**) ·
Ps 119:7 `« Cum his qui oderunt pacem eram pacificus: [0109D] cum loquebar illis, »` ·
1Cor 3:7 `« Neque qui plantat est aliquid, neque qui rigat, sed qui incrementum dat Deus »` ·
Ps 2:9 `« In virga ferrea, »` · Ps 2:8 `« Postula a me, et dabo tibi gentes haereditatem tuam »` ·
Ps 71:8 `« Et dominabitur a mari usque ad mare. »` · Ps 109:4 / Hbr 7:17 `« Tu es sacerdos in
aeternum secundum ordinem Melchisedech, »` · Hbr 7:2 `*rex justitiae,*` and `*rex pacis,*` ·
Job 5:2 `« Stultum interficit iracundia, parvulum occidit invidia. »` (dropping only *Vere* and
*et*, and Migne's `Job V` is right).

⚠ **`coelum`/`coeli` for *caelum*, `Sennaar` for *Senaar*, `Hierusalem` for *Jerusalem* and
`quaeso/caeteri` spellings are Migne's orthography, not divergences, and are not listed as such.**

#### 4e. TWO CITATION SIGLA THAT POINT ELSEWHERE — reproduced verbatim, uncorrected

- **0109C `[n: (Psal. XIX)]`** on `« Cum his qui oderunt pacem eram pacificus … »`. The verse is
  **Ps 119:7**, and the Clementine agrees with Migne's words exactly. `XIX` for `CXIX` is a dropped
  C. **Notes pass through verbatim** (series brief convention 4) and this is not the English's to
  fix; the correction belongs in `data/citation-corrections.json` at index time.
- **0119C `[n: (I Cor. XV)]`** on `« Comedamus et bibamus, cras enim moriemur »`. 1Cor 15:32 reads
  ***Manducemus** et bibamus*; **Is 22:13 reads *comedamus et bibamus, cras enim moriemur* — Migne's
  words exactly.** So the words are Isaiah's under a Corinthians siglum (Paul is himself quoting
  Isaiah there). ⚑ **This is the reason a bare `✓` is not clearance**: the brief's own pre-scan
  matched it to Is 22:13, which is the mark telling you the siglum names a different verse.
  Reproduced as printed; **no `[var:]`, because against the address Migne's own words are the ones
  he printed and there is no divergence to report** — the anomaly is in the siglum, not the text.

---

### §5 · THE DECLINED LIST — suspect readings, what would settle each, and the leaf

**PDF page = (column + 11) / 2** on `raw/scans/pl113/patrologiaecurs04migngoog.pdf`. Cols 0106–0120
are pp. 58–65 and **every one is unread**. Where the archive OCR was consulted the result is given,
and it is **not a plate read**: it licenses no marker on its own.

#### 5.1 ⭐⭐ 0110B — SETTLED AT THE PLATE. All three words go against our twin.

Migne's *Historice* on Gn 8:14 reads, **in our twin**:

> *Id est, Maio, Noe annum fecit in arca, **et** ipsa die qua ingressus fuerat, egressus est.
> **Ingressus es** enim vicesima septima die mensis secundi; **num** dicit quia egressus est
> septima et vicesima die ejusdem mensis.*

**The plate (p. 60, col 110, band D, read at 1200 dpi, corner numbers checked first) reads:**

> *Id est, Maio, Noe annum fecit in arca, ipsa die qua ingressus fuerat, egressus est.
> **Ingressus est** enim vicesima septima die mensis secundi; **non** dicit quia egressus est
> septima et vicesima die ejusdem mensis.*

1. ⛔ ***Ingressus es* is OURS.** The `t` is unmistakable. A second-person singular stranded in a
   narrative about Noah is Pattern 12's test-1 shape and would have earned a `[sic:]` on the
   Latin alone — **exactly the false public claim against Migne the ship test exists to stop.**
   The English already rendered *est*; no marker, patch owed.
2. ⛔ ***num* is OURS too, and the plate reads *non*.** Three clear letters, a round `o`, no `m`
   and no `c` — it is neither our twin's *num* nor the *nunc* the sense had tempted me toward.
   ⭐ **This is the entry I am most glad I declined.** Before the read I had rendered *num* as an
   interrogative particle without supplying a question mark, producing a sentence that read as
   broken and that I flagged as the stint's headline crux. **Had I "repaired" it to the *nunc*
   the argument seemed to want, I would have been wrong, and invisibly so.** The English now
   reads *non dicit* — "it does not say that he went out on the seventh and twentieth day of
   the same month" — which is what Migne printed, and the lunar computation that follows is
   what supplies the exit date he says Scripture does not give.
3. **The twin's *et* before *ipsa die* is OURS** — the plate has none. English corrected.
4. ⚠ ***vicesima septima* as the date of ENTRY is MIGNE'S.** It contradicts Gn 7:11
   (*septimodecimo die mensis*) and it contradicts this paragraph's own next sentence
   (*decima septima … dies mensis secundi fuit*). **Rendered as printed, and it is his
   contradiction, not ours.** It takes no `[cj:]`: a numeral slip is neither a negation nor a
   correlative, which is Pattern 18's declining class, and the sentence asserts nothing false
   about the argument once the lunar reckoning is read.

#### 5.2 Real words that read oddly — checked at the plate. **Five stand as Migne's; two did not.**

Per addendum A: a real, well-formed word that reads oddly is **Migne's** until a plate says
otherwise, and the corpus argument loses even when it is good.

- **0110B** *Vitae Noe, id est, peractis sexcentis annis* — a genitive with no governing noun, the
  abridgment having cut the head of Bede's sentence. Rendered "Of Noah's life, that is, six hundred
  years being completed"; this is the formula working, not a defect.
- **0110D** *Juncti exeunt, qui disjuncti **intraverunt*** — the OCR reads `intraverant`
  (pluperfect). Both are real words and the sense is unaffected. **Rendered *intraverunt*
  ("who entered"), no marker.** Recorded because it is a genuine twin/plate disagreement candidate
  that changes nothing; p. 60.
- ⭐⭐ **0112B — the plate found a defect TWO WORDS to the left of the one I raised.** I had flagged
  *debebat* for having no infinitive and rendered it as printed. **The plate reads *ridiculum ei
  visum ET FACIMUS cui minime debebat*, where our twin has *visum est facinus*** — Corpus Corporum
  has repaired **two words at once**, and its repair is good Latin that reads so naturally nothing
  in the Latin column could ever have raised it. Migne's line does not construe: *facimus* is a
  first-person verb among third-person narrative about Cham, and *visum et* leaves the clause with
  no copula. **`[sic: *et facimus*]` is OWED and cannot be fired** until the patch lands, because
  the marker's content must be verbatim in the twin. *debebat* itself is Migne's and stands.
  ⚑ **This is addendum C exactly — "read the whole line, not the target word"** — and it is the
  strongest argument in this stint for reading plates at all: the site I flagged was sound, and
  the site four characters away was not. p. 61.
- **0113A** *Quia igitur lata est multitudo credentium, a latitudine, quae Japheth dicitur,
  **latitudo nominatur*** — the etymology names *latitudo* twice and says nothing new the second
  time. Real words; rendered literally. p. 62.
- **0117D** *Pastores ejus, haereticos et schismaticos, qui … ascendunt ad Dominum, pacem et
  unitatem continentes;* — an accusative in apposition with no verb to govern it (*significant* has
  to be carried over from the previous sentence), and *continentes* is a nominative plural that can
  attach neither to *Dominum* (accusative singular) nor coherently to the heretics, of whom the
  clause has just denied peace and unity. **Rendered in Migne's order with the participle left
  dangling exactly where he leaves it**; reordering it to disambiguate would be a silent repair of
  his syntax. p. 64.
- ⛔ **0119B — REFUTED BY THE PLATE, and it is the one entry on this list that the read reversed.**
  Our twin prints *in mare Mortuum versa est. **quod** a Graecis stagnum Asphalti … dicitur*, and I
  logged the full stop before a lower-case relative as Migne's under addendum A's rule that a real
  mark reading oddly is his until a plate says otherwise. **The plate says otherwise: Migne prints a
  COMMA.** Our twin introduced the sentence break. English corrected to a comma.
  ⭐ **And the same class runs the other way four lines below**: the plate prints *superant primum
  Bara. qui interpretatur* with a FULL STOP where our twin has a comma. **Corpus Corporum swapped
  both marks, in opposite directions, within four lines** — which no totals-based punctuation check
  could ever see, and which is why Test 3 compares band by band. Both now follow the plate. p. 65.
- **0118C** *Ibi enim situs est **Adam maximus** et Abram* — Jos 14:15's *Adam maximus ibi inter
  Enacim situs est*, a proper name in Migne's copy where modern texts read a common noun. Rendered
  "Adam the greatest", as printed. p. 64.

#### 5.3 The head at 0117B, and the address anomalies — all reproduced, none tidied

- ✅ **`## CAPUT XIII` — SETTLED. The plate prints `CAPUT XIII.` WITH the terminal period** (p. 64,
  read at 1200 dpi), so the omission is our twin's and its `heads:` frontmatter carries the same
  defect. **The English head is now `## CHAPTER XIII.`**, and the frontmatter is left exactly as
  copied, because "copy the Latin chunk's frontmatter VERBATIM" is unconditional and the patch will
  fix both sides at once. **This is Tobit 8970 §1e applied, not re-derived** — and it is the call I
  declined to make before the read, correctly, because an unread plate could not license it.
- **0108B `VERS. 20-22--`** (chunk 0012) — no terminal period and the double hyphen unspaced from the numeral,
  against `VERS. n.-- ` in the other forty-one addresses of this stint. Reproduced verbatim.
- **0116B `VERS. 2-3.--Faciamque`** — no space after `.--`, and the lemma's opening `«` missing
  (§3.4). Reproduced verbatim.
- **0113C and 0113D both print `VERS. 8.`** — the first on `« Regma et Saba, »`, which is **Gn 10:7**
  (*Filii Regma : Saba et Dadan*), the second on `« Nemrod. »`, which is Gn 10:8. **Migne's own
  ordering and his own address; reproduced, never renumbered** (series brief: a verse number out of
  sequence is his). And **0113D prints `VERS. 10, 12.` before `VERS. 11.`** — the same class, four
  lines later. p. 62.

#### 5.4 Unexpressed subjects supplied — named, with what decided each

- **0108D** *tunc ferebatur, ut, **congregatis** in suum locum, terra appareat* — the ablative
  absolute has no noun. Supplied **"the waters"**. Decided by the verse being expounded, not by
  proximity: Gn 1:9 *Congregentur aquae … in locum unum, et appareat arida*, which is also what
  Migne's own bracketed `*[Al., unum]*` is pointing at. The nearer candidate, *spiritus*, cannot be
  gathered into a place and is the subject of *ferebatur* in the same clause.
- **0108D** *nunc adducitur, ut … faciem terrae **revelaret*** — supplied **"it", the spirit**,
  from *adducitur* in the same clause; the alternative (God) would require a change of subject the
  Latin does not mark.
- **0111C** *ne perdat **eam** diluvio* — "it" = *omnem animam vivam*, the nearest and only feminine
  singular accusative in the sentence.
- **0112B** *quia forte nesciebat vino posse inebriari* — "he", Noah, named in the same sentence.
- **0113B** *Ad quas misit Dominus septuaginta duos discipulos* — "to which", the seventy-two
  **generations**, not the three sons: the number is the whole point of the sentence.
- **0114B** *quia ejus generationem, et generationis lineam prosequitur* — "he", **Moses the
  narrator**, not Sem: Sem is *ejus*.
- **0116A** *Sed per recapitulationem ostenditur vivo patre **Dominum** praecepisse* — the subject is
  printed; recorded only because the English word order has to move it.
- **0119A–C** the whole *Allegorice* passage: *superant · Vincunt · obruunt · hortantur · decipiunt
  · mittunt* all have **"they" = the four kings / the contrary powers**, fixed by *Quatuor reges
  quinque superant* two sentences above and by *Tales reges superant primum Bara*. No other plural
  agent is in view.
- **0120C** *Ex quo vult colligere* — "he", **the Apostle**, named as the subject of *refert* in the
  same paragraph; *Melchisedech* is its object.
- ⚠ **One place where both readings construe and nothing was chosen: 0111C** *Illi enim non pereunt
  diluvio **separati ab Ecclesia**, qui … agnoscunt gloriam Christi.* *separati* can be a predicate
  of *illi* ("they do not perish in the flood as men separated from the Church do") or a concession
  ("they, though separated from the Church, do not perish"), and the second reverses this book's own
  doctrine four columns earlier (0107C: *extra Ecclesiam aqua baptismi … non valet ad salutem*).
  **Rendered in Migne's order with the participle left where he puts it** — "For they perish not in
  the flood, separated from the Church, who … acknowledge the glory of Christ" — so the ambiguity
  survives into the English instead of being decided silently. p. 60.

#### 5.5 Test 2a fired and checked — negatives on a verb with a quantifier or correlative nearby

Every site in the trigger population, with the host proved from the sentence's structure:

- **0108B** *non solum de hominibus, sed et de pecoribus dictum* — `non solum … sed et`; the host is
  **de hominibus**, not *dictum*. English: "is said **not of men only, but of cattle also**."
- **0106D–0107A** *Non geminatum septenarium … sed tantum septem* and *non quatuor, sed tantum duo* — the
  `sed tantum` correlative fixes the host on the numeral both times.
- **0111B** *sciant se irrationabilibus, sed non rationabilibus dominari* — `sed non` puts the
  negative on **rationabilibus**, not on *dominari*: they DO have dominion, but not over the
  rational. Rendered "they have dominion over the irrational, but not over the rational."
- **0110D** *« Non percutiam **omnem** animam viventem sicut feci »* — a negative on a verb with
  *omnem* beside it, the exact 8990 @0611D shape. **Left scope-ambiguous in English as it is in
  Latin** ("I will not strike every living soul as I have done"), because the Latin does not
  disambiguate and the gloss's next clause (*quae largitate bonitas donat indignis*) does not turn
  on the scope. See §4b for the separate *ultra* divergence.
- **0118B** *Non hoc **solum** promissum est* — host is **hoc solum**. "Not this only was promised."
- **0116C** *non tantum gentis Judaicae, sed omnium gentium* — `non tantum … sed`, host on the
  genitive. ✓
- **0116D** *non **solum** in hoc quod non inquinatur corpus **nec** anima **nisi** mentis consensu,
  sed etiam in hoc* — four negatives in one clause. Hosts: *solum* → "not only"; *inquinatur* +
  *nec* → "neither body nor soul is defiled"; *nisi* → "save by the consent of the mind". All four
  present, each on its own word.
- **0112C–D** *Non praetermittit Deus **inulta** peccata* — a negative verb with a privative
  adjective; both carried ("does not pass over sins **unavenged**"), which is the reading the
  following *sed ita judicium … incipit* requires.
- **0111D** *ne homines formidolosi timerent altero diluvio deleri* — host on *timerent*, and the
  purpose clause is the point of the rainbow. ✓
- **0115B** *ut **non** intelligeretur jubens homini, qui **noluit** intelligere ut obediret jubenti
  Deo* — two negatives, and the second is the reason for the first. Host of the first is
  *intelligeretur* (the punishment IS unintelligibility), proved by the preceding *dominatio
  imperantis in lingua est*; host of the second is *voluit*. Rendered "so that he who commanded
  should not be understood by man, the man who would not understand so as to obey God who
  commanded."

**No site in this range required a negative to be relocated, and none was.**

#### 5.6 Sections read clean (Test 4 — does the English ASSERT what he asserts?)

Run last, with all counts already known clean, paragraph against paragraph:

- **0106D–0108C** — the seven-and-seven arithmetic, Origen's geometrical cubit, and the
  *spiritus/flatus vitae* variant. The densest numeral passage in the stint; every figure checked
  against the Latin digit by digit.
- **0108C–0110A** — Augustine on recapitulation, the raven and the dove. The *aut … aut* and
  *an … an* disjunctions were checked for completeness; both limbs survive in each.
- **0110B–0111A** — the lunar computation (§5.1), the *Mystice* on seventeen and twenty-seven, and
  Gregory on the *Moralia*. The arithmetic (*si decem et septem decem addas, fiunt viginti septem*)
  is internally consistent in the English.
- **0111A–0113A** — the rainbow, Cham's sin, and the blessing of Japheth. Procopius's catalogue of
  aggravations at 0112B is the one place where colons carry the argument and they were matched
  band-for-band.
- **0113B–0114B** — the table of nations. Almost pure onomastics; each name checked against Gn 10
  for spelling as Migne prints it.
- **0114C–0117A** — Babel, the *sidera/astra* argument, Thare's years, and Abram in Egypt. The
  hardest single sentence is 0115B's cross-linguistic pun (§1a).
- **0117B–0118C** — Jerome on *gravis vehementer*, the shepherds' quarrel, and the promise of the
  land. Read twice for §5.2's dangling *continentes*.
- **0118C–0120D** — the four kings, the etymological chain, and Melchisedech. Every one of the
  twenty-three etymological glosses was checked against the name it interprets.

**Candidates raised and rejected, so a blind reader knows they were looked at:** everything in
§5.2; plus *abusive* at 0107D (*Cataractae … abusive pro omnibus fenestris ponuntur* — a real
adverb, "by misuse", and the standard grammarians' term; rendered, no crux); *superfluus* at 0119C
(*Duodenarius superfluus est numerus* — the medieval arithmetical term for an abundant number, and
twelve is the first one, so the sentence is technically exact and not a slip); *Helia* at 0117B
(Aelia Capitolina, Migne's spelling, attested); *Phutaei* / *Laabin* / *Nephetuim* at 0114A (Migne's
onomastic spellings, which vary from the Clementine's throughout this chapter and are its own
class); and *ternarius quadratus* at 0107B (= nine, and the abridgment's tail says so).

---

### §6 · PENDING TEI PATCHES — 23 confirmed sites, and the class is NORMALIZATION

Full table with plate readings: **`data/briefs/8950-PENDING-TEI-PATCHES-0012.md`**. The summary
that matters here:

⭐⭐ **Nine of the twenty-three are Corpus Corporum silently CORRECTING Migne** — brief §4's
class, and **not one is detectable from the Latin alone, because every one reads perfectly
well**: `uspue`→`usque` (0108C), `et facimus`→`est facinus` (0112B, two words at once),
`es`→`est` and `num`→`non` (0110B), `debito`→`debita` and `utilitatum`→`utilitatem` (0120D),
`Japhet`→`Japheth` (0113A ×2), and two punctuation marks swapped in opposite directions four
lines apart (0119B `versa est,`→`versa est.` and `Bara.`→`Bara,`).

⭐ **The most consequential is 0112B.** Migne prints *ridiculum ei visum **et facimus** cui
minime debebat*, which does not construe — *facimus* is a first-person verb among third-person
narrative about Cham, and *visum et* leaves the clause with no copula. Our twin prints *visum
est facinus*, which is good Latin and reads so naturally that nothing in the Latin column could
ever have raised it. **I had logged *debebat* at this exact site as an addendum-A candidate
("a real word that reads oddly, rendered as printed"); the plate shows the real defect was two
words to its left.** That is addendum C's rule earning its place — read the whole line, not the
target word.

⛔ **Five `[sic:]` are OWED and none could be fired**, because `verify-english` requires the
marker's content to be a verbatim substring of the Latin twin and in every case the twin carries
the *repaired* form: `[sic: *uspue*]` · `[sic: *et facimus*]` · `[sic: *debito*]` ·
`[sic: *utilitatum*]` — and the fifth is not a `[sic:]` at all but the `es`/`num` pair, which
needs no marker once patched because *est* and *non* are what the English already prints. **This
is precisely the coordinator's prediction and the 0008–0011 stint's result, reproduced
independently: where the plate confirms our twin has tidied Migne's defect away, what is owed is
a patch, not a marker.**

⚑ **Also patched-not-marked: four Hebrew losses** (§2), **six dropped line-head guillemets and
one supplied closer** (§3), **a dropped head period** at 0117B, and **five siglum-punctuation
differences** (0107B `Ibid.`, 0110B `(Ibid )`, 0115C `lib. iii.`, 0112A capital `Χ`, 0113B
`CAPUT ·X.`).

**Foot-of-page apparatus: CHECKED ZERO on all eight pages, both layers** — no numbered notes and
no asterisk layer anywhere in cols 0106D–0120D. Neither foot rule nor note appears; p. 58 carries
only the signature `4` and p. 65 only a closing rule. ⚑ **This is a real result and it is
recorded as coverage, not as a skip.** With stint 3's six pages it takes PL 113's checked-zero
sample to **fourteen pages across this book**, and with Ruth's five and Tobit's four to
**twenty-three pages across four books** — but per CLAUDE.md it licenses nothing about the
columns nobody has opened, and it does not license the claim that this work has no notes.

---

### §7 · PUNCTUATION — compared BAND BY BAND, and the only added marks are four Pattern 8b colons

Test 3 run mechanically over all seven chunks: markers stripped, both twins partitioned by their
verified-1:1 column anchors, and colons, semicolons, question marks, `«`, `»` and `!` counted per
band. **Exactly four bands differ, all in the same direction, all the same class, and zero
elsewhere:**

| col | Migne | English |
|---|---|---|
| 0107A | *Quaeritur utrum tam magna arca centum annis potuit fabricari a quatuor hominibus … ?* | It is asked**:** could so great an ark be built … ? |
| 0108A | *De arca solet quaeri utrum tanta capacitate … ferre potuerit?* | Concerning the ark it is commonly asked**:** with so great a capacity … ? |
| 0109B | *Quaeritur utrum corvus mortuus sit, an aliquo modo vivere potuerit?* | It is asked**:** did the raven die, or could it in some way live? |
| 0109D | *Quaestio est quomodo columba non invenerit ubi resideret … ?* | It is a question**:** how did the dove not find where to settle … ? |

Migne's `?` is kept in all four; English cannot end an indirect construction with it (Pattern 8b),
and the colon carries the *quaeritur* frame. **Question-mark parity is exact in every chunk**
(3 / 2 / 1 / 1 / 1 / 1 / 1).

⚠ **The scan that produced this table also found 23 unlicensed marks in the draft, and the totals
had very nearly cancelled band for band.** All were repaired against the Latin:

- **7 supplied colons removed** (Migne prints a comma): 0110A *quando requies sanctorum erit,* ·
  0110B *Id est, Maio,* · 0111C *ne perdat eam diluvio,* and *per lapidem,* · 0114C *quod humanum
  genus perdit,* · 0116B *Duo promittuntur Abrae,* · 0120C *ministerium nostrum veri ordinis
  signatur,*
- **5 destroyed colons restored**: 0108D *terra appareat:* · 0109B *immunditia cupiditatis
  teterrimos:* · 0112B *facinus detexisset omnibus:* · 0117B *euntibus Neapolim:* · 0120B *usque ad
  Isaac vixisse:*
- **7 supplied semicolons removed**: 0107C *egressi sunt,* · 0107D *requiem significat,* · 0112B
  *Despectui habet parentem,* and *jacuerit pater,* · 0115A *Creatorem conspiciendo,* · 0117A
  *ascendisse legitur,* · 0117C *altare Domino aedificavit,*
- **4 destroyed semicolons restored**: 0107B *quod pertinet ad dies;* · 0114A *Phutaei vocabantur;*
  · 0117B *separata sacerdotibus;* · 0120C *dicta est Hierusalem;*

This is Test 3 earning its place again: the raw totals for the stint were within one of each other
before the repair, and only the per-band comparison found the sites.

⚑ **ONE band now differs from the twin on purpose, and it is a plate reading**: 0120D shows
`semi 1/2`, because Migne closes the Tit 1:12 quotation `« Malae bestiae, pigri ventres **;** »`
with a semicolon inside the guillemets and our twin has a comma (p. 65, 1200 dpi). The English
follows the plate and the divergence is filed as a pending patch. **Nine further English/twin
punctuation divergences of the same kind are listed in §6**; each is a mark Migne prints that our
twin has altered, and each is filed. A blind reader comparing the columns will meet them and
should not read them as supplied marks.

⛔ **No comma→semicolon sweep was made.** Migne prints semicolons freely in this range (31 in the
seven chunks), so Tobit's narrow exception does not apply and was not invoked.

⚑ **Three places where an English question was NOT given a mark, because Migne prints none:**
0114D–0115C *Magna quaestio nobis nascitur … quomodo Sem biennio post diluvium centum esse annorum
dicatur* (rendered as an indirect "how", no mark); 0116D *Quaeritur cur patriarcha voluit mentiri,
etc.* (no mark, no colon); 0112C *Quid est ergo quod filii verenda patris … operuerunt, nisi quia …
occultent:* — an interrogative sentence that Migne closes with a **colon**, reproduced with the
colon and no question mark.


---

## STINT 5 — chunks 0019–0023 (cols 0120D–0133C)

*Filed as `cruces-0019.md`; merged verbatim, headings demoted one level. Nothing in it was rewritten — where a later stint corrected it, the correction stands in that stint's section.*


Translated 2026-09-05, one stint, 5 chunks (5,245 Latin words by the frontmatter; 5,013 body words with anchors and notes stripped → 7,501 English, 1.50x).
Bands: **0120D–0133C** — CAPUT XV, XVI, XVII, XVIII, XVIII (cont.), XIX.
`verify-english.mjs 8950` reports **no error on 0019–0023** (the only failures in the work are
`MISSING English chunk` for ranges other stints hold).

**SPAN COUNT — 189, of which 3 OPEN-ENDED.** Counted **paragraph-bounded** in my own five Latin
chunks: **115 closed `« … »` spans + 71 `*…*` spans + 3 unclosed `«` = 189**, matching the rebuilt
brief's header exactly. Per chunk: 0019 23+11+0 · 0020 22+38+0 · 0021 27+4+2 · 0022 5+1+1 ·
0023 38+17+0. ⚠ The raw marks are **120 `«` / 115 `»`**, and the five-mark gap is real and
accounted for: three unclosed quotations (0127B, 0127D, 0129D — **all three plate-confirmed as
Migne's**, §3) and **two** *nested* line-head `«` inside closed spans (0121A, 0127D), each of which
pairs into its host and is counted once. A bare `«`/`»` total is not a checkable number on this book.
⚑ The counting method matters: a DOTALL non-greedy `«.*?»` over the whole chunk body runs an
unclosed quote forward across a paragraph break and swallows the next span. Counting
paragraph-bounded is what keeps the two errors from cancelling.

**Apparatus fired: 11 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
Every one stands on a column read at the plate this session.

Per-chunk parity (English / Latin), all exact: column anchors 8/8 · 11/11 · 14/14 · 3/3 · 15/15 ·
`[n:]` notes 14/14 · 12/12 · 18/18 · 3/3 · 20/20 · `«` 24/22/30/6/38 · `»` 23/22/27/5/38 ·
question marks 0/2/4/2/2. EN/LA word ratio (apparatus stripped) 1.48 / 1.46 / 1.52 / 1.45 / 1.51.
**Zero em-dashes supplied in 5,245 words.**

⭐ **THE WHOLE RANGE WAS READ AT THE PLATE before the English was written**: archive.org
`patrologiaecurs04migngoog`, **PDF page = (column + 11) / 2**, corner numbers read first on every
page — pp. 66 (121/122), 67 (123/124), 68 (125/126), 69 (127/128), 70 (129/130), 71 (131/132),
72 (133/134). **Foot-of-page apparatus: CHECKED ZERO on all seven pages, both layers.** Reads are
recorded in `data/briefs/8950-PLATE-READS-0019.json` for the orchestrator to merge; twin/plate
divergences are in `data/briefs/8950-PENDING-TEI-PATCHES-0019.md`.
⚠ Band **0120D** (the two lemmata before the first anchor of chunk 0019) sits on p. 65 and was
**not** read. Nothing fired there; both lemmata agree with the Clementine exactly.

---

### §1 · CONVENTIONS — inherited, and what this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were not re-opened: `VERS. n.--` passes through
verbatim; the lemma is Englished; a fragmentary lemma is rendered as the phrase it stands for;
sigla ride as ordinary `[n: …]` notes with Migne's own internal spacing (`(ISID. in Gen. )`,
`( Glossa Graeca. )`, `(AUG. Quaest in Gen. )`, `(AUG., Q. in Gen.)`); the guillemets are the
plate's, 1:1, and their contents are Englished; `*usque ad*` → ***as far as***, with **no verb ever
supplied**.

The three conventions the earlier 8950 stints settled were adopted, not re-derived:
**(i)** no `[var:]` on a quotation Migne himself labels a rival version — one worked instance here,
§4.3; **(ii)** words follow the plate, punctuation follows the twin — eight instances, patch file
Part A3; **(iii)** unpaired guillemets are mirrored, never tidied, and are usually Migne's — three
here, all his, §3.

#### (a) The sense tags are translated in their italic span, and one is ABBREVIATED
`*Tropologice.*` → ***Tropologically.*** (0121B) · `*Allegorice.*` → ***Allegorically.*** (0123C,
0131B) · `*Historice.*` → ***Historically.*** (0124C) · `*Moraliter.*` → ***Morally.*** (0126A,
0129A, 0131A) · `*Mystice.*` → ***Mystically.*** (0129A, 0131A, 0132A). A note inside the tag's
italic span stays inside it (`*[n: (GREG., lib. XVI Moral., c. 20.)] Tropologice.*`).
⚑ **0131C prints the tag ABBREVIATED — `*Moral.*` — where the same tag is spelled out three times
elsewhere in the same range.** Rendered ***Morally.***: English has no exponent for a Latin
abbreviation, and the facing Latin column preserves it, which is exactly Pattern 9's argument for
normalizing a section label. Flagged rather than decided silently, because it is the first
abbreviated tag in this book.

#### (b) A gloss word that must NOT be Englished, and three that must
- **`« Tria sata. »` → « Three sata. »** (0126B, 0126C ×2), and `Satum genus est mensurae` → "A
  satum is a kind of measure." ⛔ Rendering *sata* as "measures" would have made the gloss read "A
  measure is a kind of measure" — the tautology trap the 0000 stint met at *sementis/semen*. The
  word is carried in **roman inside the guillemets**, because italicizing it would add an italic
  span the Latin twin does not have and break span parity.
- **`*aedificatio*` → *a building up*** (0122A). Jerome's point is that the Hebrew expresses
  bearing children by the verb "to be built up"; the word is Latin, not Hebrew, so it is translated.
- **`*onager.*` → *a wild ass.*** and **`*rusticus,*` → *a rustic,*** (0122B) — Latin gloss-words.
  The Hebrew beside them (`*phara*`) is kept.
- **`*caecitas,*` → *blindness,*** (0131B) and **`*motus eorum:*` → *their motion:*** (0123A) —
  Latin etymologies of Hebrew place-names, translated in their spans.
- ⚠ **`*avidentia,*` (0130D) is CARRIED, untranslated, in its italics.** It is Augustine's coinage
  for Greek ἀορασία and Migne flags it as one — *si possit dici*, "if it may be so called" — so the
  register's italic-Latin rule for a technical word with no clean English equivalent applies, and
  the flag would be unintelligible beside an ordinary English word. **No `[sic:]`**: the type is
  sound and the coinage is the author's.
- **Hebrew letter-names stay Hebrew**: *scin · res · iod · he · zadich · ain · tau · schin* (0124B),
  and the single letters *h* / *a* / *r* stay letters. `*centum*` → *a hundred* (0124A, the numeral
  value of Greek ρ, a Latin word being mentioned). `*princeps mea,*` → *my princess,* ·
  `*princeps,*` / `*principem,*` → *a princess,* · `*lepram*` → *leprosy,* · `*sarai*` and `*Sara*`
  kept.
- **`*ex patre,*` and `*de patre*` both → *from the father*** (0133B, 0133C). English has one
  preposition for Migne's two; nothing in Jerome's etymology of *Moab* turns on the difference.
  Recorded rather than hidden.

#### (c) The *foedus* / *pactum* / *testamentum* triad is kept 1:1, because the gloss distinguishes them
0122D prints the distinction as its whole point — *In Hebraeo* berith *quod non testamentum, sed
foedus, sive pactum significat.* So, fixed for the range: **`testamentum` → testament ·
`foedus` → covenant · `pactum` → compact.** Hence « I will establish my **compact** » (0124C, Gn
17:19) beside « And an everlasting **covenant** » in the next line — Migne's two words, not one
English word twice. Same reason as the *mysterium*/*sacramentum* pair below.

#### (d) The vocabulary axes, with the instrument checked first
- **`gentes` — 8 occurrences, split by the axis, and the split is recorded because it is visible on
  one page.** **Gentiles** where the *Judaei*/*gentes* typology is explicit: 0124A *vocatione
  **gentium*** (Isaac the type of the Church against Ismael the type of the Jews) and 0128A *omnes
  **gentes** per fidem*, opposed in the same clause to *gens Judaeorum secundum carnem*.
  **Nations** where the sense is plainly generic, which is the axis's own named exception: 0122B
  *omnes gentes quibus desertum … jungitur*; 0123A *pater multarum **gentium***; 0123C *ne
  misceretur semen ejus **gentibus***; 0123D *pater multarum gentium*; 0124B *omnium … gentium
  princeps futura*.
  ⚠ **The one place the split shows: 0128A.** The lemma « in eo benedicentur omnes **gentes**
  terrae » is the generic verse formula and reads "all the **nations** of the earth"; the
  exposition four words later, *omnes **gentes** per fidem* against *gens Judaeorum*, is the
  typology and reads "all the **Gentiles** through faith". Both are the axis as written; the lemma
  and its re-quotation therefore differ, which is the one thing 7a″ normally forbids. **Flagged
  here rather than decided silently** — if the merge prefers one word for both, it is "nations"
  in both places, and the typology then lives only in *gens Judaeorum* → "the Jewish nation".
- **Singular `gens` of a people → nation**: 0121A *gentem Christianam* → "the Christian nation",
  *gens Judaeorum* → "the nation of the Jews"; 0128A *gens Judaeorum* → "the Jewish nation";
  0128A *in gentem magnam futurus* → "about to be a great nation".
- ⚑ **Instrument checked before reporting.** `natio` matches **once** in 5,245 words (0123B
  *nationibus* → "nations"); the other three hits are *cognatione / incarnationem / peregrinationem*.
  `turb-` fires **nine** times and **every one is *perturbare* / *perturbatio*** — there is **no
  `turba` at all** in this range, so the *turba*/*multitudo* pair is not exercised on the *turba*
  side. `multitudo` fires three times (0121A *multitudine*, 0122A *prae multitudine*, 0124D
  *multitudo*) and is **multitude** in all three.
- **`mysterium` → mystery, `sacramentum` → sacrament**, and the 1:1 pair IS exercised: 0126A
  *mysterium futuri sacramenti* → "the mystery of the sacrament to come".
- **Zero `daemonium`, `diabolus`, `satanas`, `gentilis`, `gentilitas`, `ethnicus`** in range.
- **The commentator's own voice is not archaised** (`dicit`/`ait` → "says"); `-est`/`-eth` forms
  appear only inside quoted scripture and in second-person singular address.
- **Pattern 17.** Singular → *thou*: 0121A *cujus tu pater futurus es* → "whose father thou art to
  be"; 0121C *Scito praenoscens* → "Know thou beforehand"; 0122C *non apparebit tibi* → "shall not
  appear to thee"; 0122D *Nec ultra vocabitur nomen tuum* → "Neither shall thy name any more be
  called"; 0131A *Si vis perfectus esse … quae habes* → "If thou wilt be perfect … that thou hast".
  Plural → *you*: 0123B *ex vobis* → "among you"; 0126D 1 Cor 3:2 *Lac potum dedi vobis* → "Milk I
  gave you to drink"; 0129D *Videte si inveniatis* → "See if you find".
  ⚑ Two plural imperatives are rendered as bare English imperatives, which mark no number:
  0130A « Lavate. » → « Wash. » and 0132B « Mementote uxoris Lot, » → « Remember the wife of Lot, ».
  *Wash ye* / *Be ye mindful* were drafted and withdrawn — Pattern 17 gives the plural **you**, not
  *ye*, and an English imperative supplies no pronoun at all.

#### (e) `usque ad` — 10 formulas, 5 ordinary, decided per occurrence by the `etc.` splice test
**Formula (italic, following an `etc.`, 10×):** 0121A, 0121B, 0121C, 0121D ×2, 0122A, 0123C,
0127D, 0131C, 0132C. Every one is preceded by `etc.` and names the point at which the abridgment
resumes; **no verb and no object was supplied to any of them.** Three tails land mid-clause and
stay there: 0121C *as far as* "a disturbance not to be named" (the governing verb is inside the
cut — *non dicendam perturbationem* rendered as the bare accusative phrase it is); 0121D *as far
as* "and they arrive at Solomon"; 0131C *as far as* "whence it is said to Lot:", whose colon is
Migne's and closes on nothing.
⚠ **0131C's formula prints as the non-word `*uque ad*` in our twin. The plate reads `usque ad`**
(600 dpi, p. 71), so the defect is OURS; the English renders the formula and the patch file carries
the repair. **No `[sic:]`** — it would accuse a clean page.
**Ordinary Latin (5×), none italic, none after an `etc.`, each rendered by sense:** 0121B *ab Adam
usque ad Noe, et inde usque ad Abram, deinde usque ad David* → "from Adam **to** Noah, and thence
**to** Abram, and then **to** David" (three in one clause); 0128D *a quo usque ad decem descendit*
→ "from which he descends **down to** ten"; 0128D *Usque ad decem justos non perire Sodomam dixit*
→ "**up to** ten just men". ⚑ The two at 0128D were deliberately **not** given the formula's "as
far as", to keep the abridgment mark distinguishable on a page where it occurs nowhere else.
⚠ Also present and NOT this word: 0122C *Usque hodie* → "To this day", and 0123B *quantum pertinet*
→ "so far as pertains".

#### (f) Heads and frontmatter
`CAPUT XV.` → `CHAPTER XV.`, `CAPUT XVI.` → `CHAPTER XVI.`, `CAPUT XVII.` → `CHAPTER XVII.`,
`CAPUT XVIII.` → `CHAPTER XVIII.`, `CAPUT XVIII. (cont.)` → `CHAPTER XVIII. (cont.)`,
`CAPUT XIX.` → `CHAPTER XIX.` **Numerals mirror the plate.** Frontmatter copied VERBATIM from each
Latin chunk, field order included.

#### (g) Three addresses Migne prints irregularly, all reproduced as printed
- **`VERS. 27-19.--` at 0127D — the plate's own reading, and our TEI had normalized it.** See §2.
- **`« VERS. 10.--Et habebit filium, »` at 0127A** — Migne sets the verse address **inside** the
  guillemets. Reproduced there, untranslated, exactly as the twin has it.
- **`VERS. 37, 38. «` at 0133B** — no `--` after the period, where every other address in the range
  prints one. Reproduced bare.

---

### §2 · ⭐⭐ 0127D — `VERS. 27-19.` IS WHAT THE PLATE PRINTS, and our twin had tidied it

    twin:   VERS. 17-19.-- « Num celare potero Abrahae quae « gessurus sum. »
    plate:  VERS. 27-19. — « Num celare potero Abrahæ quæ « gessurus sum. »

Read at 600 dpi on p. 69 (corner numbers 127/128 checked first). **The first digit is a 2, not a
1**, and the control is on the same line: the `1` of the adjacent `19` is a plain vertical stroke
with a foot-serif, while the first glyph carries the flat base and curled head of a 2. A second
control sits on p. 71, where Migne sets `VERS. 17-19.` correctly for Gn 19:17–19 — the same two
digits, in the same fount, unmistakably different.

**The English renders the plate: `VERS. 27-19.--`.** Three reasons, and they agree:
1. The locked rule — *where a translator has opened the column at the plate and Migne's type
   differs from our TEI twin, the English renders what Migne printed*, with the pending patch filed.
2. It is not a mark, so it is not covered by the punctuation-follows-the-twin carve-out. It is
   content: a citation address, and this edition's addresses are its citation-resolving apparatus.
3. Migne's own printing is not ours to tidy — the series brief's rule for a verse number out of
   sequence (Jude prints VERS. 23 before VERS. 21) is this case exactly, one step further along.

⛔ **No `[sic:]`**, and it could not have taken one: the marker's content must be verbatim in the
Latin twin, and the twin prints `17-19`. The patch is what makes the two columns agree again.
⚑ **This is the sharpest instance in the range of brief §4 — the digitization "corrects" as well as
corrupts — and nobody could have flagged it from the Latin alone**, because `VERS. 17-19.` is
exactly the address the lemma requires. Only the plate shows it.

---

### §3 · THE THREE UNPAIRED GUILLEMETS — all three MIGNE'S, all plate-read

The rebuilt brief emits these as `⚠ UNCLOSED «` spans running to the end of their paragraph, and
warns the printed span may be short of what Migne quotes. Each was collated at the line, not from
the brief.

| col | Migne opens | what he is quoting | plate |
|---|---|---|---|
| 0127B | `« Quo audito, etc.` | **Gn 18:10** *Quo audito, Sara risit post ostium tabernaculi* — agrees verbatim as far as it runs | p. 69: opens, never closes |
| 0127D | `« Non risi, etc.` | **Gn 18:15** *Negabit Sara, dicens: Non risi, timore perterrita* — agrees verbatim | p. 69: opens, never closes |
| 0129D | `« Videte si inveniatis hominem facientem justitiam [n: (Jer. V)];` | **Jer 5:1**, and it DIVERGES — `[var:]` fired, §4.1 | p. 70: opens, never closes |

**All three are mirrored unclosed** (Pattern 5's corollary). In each the `etc.` or the `quasi:` that
follows shows the quotation is complete for Migne's purpose; the missing `»` is his.
⚠ The fourth apparent anomaly is not one: at **0121A** and **0127D** an inner `«` stands at a
line head inside a closed span (`« Dixitque Abram. [n: …] « Ego vado sine liberis, »`;
`« Num celare potero Abrahae quae « gessurus sum. »`). That is Migne's line-continuation mark, the
class the 0000 stint identified, and it is reproduced in place. **At 0121A the plate actually sets a
CLOSING `»` there** and our twin sets `«` — a mark, so the English follows the twin and the patch
file carries the plate reading.

---

### §4 · ⚠⚠ 7a″ — THE VULGATE COLLATION. This is the deliverable.

Every lemma in these five chunks was collated against `sources/vulgate/clementine-flat.txt` by
grepping the verse, cited book chapter:verse — **never from memory**. Agreements are listed with
divergences, because a list of findings alone cannot be told apart from a report by an agent that
never looked.

#### 4.0 ⭐⭐ THE FLAGGED SITE, 0121A — `« Suspice coelum, »` — **NOT a divergence**, and the reason is in OUR comparand

    [0121A] VERS. 5-8.-- « Suspice coelum, »   ⚑ MATCHES ONLY ELSEWHERE — Job 35:5  (lemma is Gn 15)

**Verdict: Migne prints Gn 15:5's own words. No marker. The flag fired on a defect in the
Clementine copy on disk, compounded by orthography.** Walked at the line and settled with the file:

1. **The verse is fixed independently of the words.** The address is `VERS. 5-8.` under
   `## CAPUT XV.`; its neighbours are `VERS. 2.` (Gn 15:2 *Dixitque Abram*) and `VERS. 9-10.`
   (Gn 15:9 *Sume, inquit, mihi*); and the paragraph's own next lemma is
   **« Sic erit semen tuum, »** — the closing words of **Gn 15:5**, which our file carries verbatim.
   So the lemma is Gn 15:5 and cannot be Job.
2. ⛔ **`sources/vulgate/clementine-flat.txt` line 15072 and `clementine/Gn.lat` line 365 both read
   `Suscipe cælum` at Gn 15:5.** The received Sixto-Clementine reads **`Suspice cælum`**, as does
   Weber. **The defect is in our copy, not in Migne** — and `sources/vulgate/README.md` says in
   terms that later upstream corrections are not applied and that a call turning on a single letter
   must say so rather than trust this copy to that precision. This is that case, on the comparand
   side.
3. **`coelum` for `caelum` is Migne's orthography throughout this book** and is not a divergence
   (cruces-0000 settled it). With `Suscipe` in the flat file, a normalized phrase search could match
   neither Gn 15:5 nor anything else in Genesis — so it fell through to **Job 35:5**
   (*Suspice caelum, et intuere*), a different book that the commentary has not reached and does
   not cite. The `⚑` is telling you where the *string* matched, which is exactly what the brief says
   it does.
4. **The plate, read at 600 dpi (p. 66, col 121, band A, corner numbers checked first):**
   `VERS. 5-8. — « Suspice cœlum, » etc. Superius dixit :` — Migne's type reads **Suspice coelum**.
   So there is nothing here to mark against him.

⭐ **AND THE RECURRENCE, which is why the brief tells you to look for one.** The same class fires a
second time nine lines below, at **0121B `« Vaccam triennem, et capram trimam, »`** — marked
`⚠ NOT in Clementine verbatim` on the same grounds. **Our copy reads `vaccam trienem` at Gn 15:9**
(one *n*); the received Clementine reads `triennem`, exactly as Migne prints it. **No divergence
there either.**

⛔ **The finding worth carrying past this stint: the comparand can manufacture a divergence.**
CLAUDE.md 8a records the digitization manufacturing one on the *Latin* side (9003's
`judicabit`→`judicavit`); this is the same failure on the *Vulgate* side, twice in one column, and
no plate read can catch it — only reading the received text can. **Both would have produced a false
public claim against Migne had the ⚠/⚑ been trusted as findings.** Every single-letter divergence in
§4.2 below is therefore reported as a single-letter divergence and declined.

#### 4.1 The eleven `[var:]` fired — all on columns read at the plate this session

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0121A | « Ego vado sine liberis, » | **Gn 15:2** *ego **vadam absque** liberis* | present for future in a lemma given bare as the verse; two words of four differ. Old Latin. |
| 0121C | « **Pavor** irruit, » | **Gn 15:12** ***sopor** irruit super Abram* | ⭐ **the gloss rests on it.** Augustine's *quaestio* is *propter eos qui contendunt istas **perturbationes** non cadere in animum sapientis* and the resumption tail is *non dicendam **perturbationem***: the whole question is about a disturbance of mind, which *pavor* is and *sopor* is not. |
| 0122C | « Videbis posteriora mea, **nam facies non apparebit tibi**. » | **Ex 33:23** *videbis posteriora mea: **faciem autem meam videre non poteris*** | a different clause, not an abridgment. Old Latin. And the gloss is built on the face/hinder-parts opposition it states. |
| 0122C | « Non enim **homo videbit faciem meam** et vivet » | **Ex 33:20** *non enim **videbit me homo** et vivet* | *faciem meam* supplied for *me*, and the order changed — and the next sentence expounds precisely the seeing of the face: *Illam enim manifestationem sapientiae Dei nemo potest videre et vivere.* |
| 0124D | « Ascendit Deus **ad** Abraham, » | **Gn 17:22** *ascendit Deus **ab** Abraham* | ⭐ **the direction is reversed** — one preposition, and the *Glossa Graeca* immediately infers *Ergo … descenderat*. The 11535 @1360C shape (*ab* for *ad*), here on quoted scripture, so Pattern 14 and not Pattern 18. |
| 0126A | « Abraham **vidit** diem meum et gavisus est » | **Jo 8:56** *Abraham **pater vester exsultavit ut videret** diem meum: **vidit, et** gavisus est* | not an ellipsis: the two-clause structure is collapsed into one and the governing verb changed. The gloss then reads it as simple foresight — *Praevidit enim mysterium futuri sacramenti.* |
| 0128A | « in eo benedicentur omnes **gentes** terrae. » | **Gn 18:18** *benedicendae sint **in illo** omnes **nationes** terrae* | ⭐⭐ **7a″'s own case: the exposition uses the lemma's word and not the Vulgate's.** Migne's *gentes* is picked up four words later in *omnes **gentes** per fidem*, against *gens Judaeorum secundum carnem* — the whole point of the sentence. Also *benedicentur* (fut. ind.) for the gerundive and *in eo* for *in illo*. |
| 0129D | « Videte si inveniatis **hominem** facientem **justitiam** » | **Jer 5:1** ***an** inveniatis **virum** facientem **judicium*** | three words, and *justitiam* is the load-bearing one: the passage is Abraham's bargain for the **just** men of Sodom, and the gloss glosses it *quasi: Invenite vel unum, et parco eis.* |
| 0130A | « Hospitalitatem nolite oblivisci: per hanc enim **placuerunt quidam Deo**, angelis hospitio receptis. » | **Hbr 13:2** *per hanc enim **latuerunt quidam**, angelis hospitio receptis* | ⭐⭐ **the largest divergence in the range.** The Vulgate says some have entertained angels *unawares*; Migne says some have *pleased God*. A different verb and an added *Deo* — and the sentence is adduced as the proof of *commendatur virtus hospitalitatis*, which Migne's form asserts and the Vulgate's does not. |
| 0130D | « **Ecce duae filiae meae quae non** cognoverunt virum, » | **Gn 19:8** ***Habeo duas filias, quae necdum*** cognoverunt virum | the clause is restructured and *necdum* → *non*. Adduced by Jerome as the proof that the daughters were virgins, against the *generos* of Gn 19:14 — a proof-text, and the wording is what carries it. |
| 0131A | « Si vis perfectus esse, vade **et** vende **omnia** quae habes, » cited ***Marci XIX*** | **Mt 19:21** *Si vis perfectus esse, vade, vende quae habes, **et da pauperibus*** | *omnia* added (from Lc 18:22) and the clause re-jointed. ⚑ **And the citation names Mark 19, which does not exist** — Mark has sixteen chapters and the verse is Matthew's. Plate-confirmed as Migne's type (p. 71); reproduced uncorrected per the sigla rule, and **the marker names the real source**, following the 0008 stint's treatment of `Joan. V` for Job 5:3 at 0103B. |

#### 4.2 DIVERGENT and DECLINED ON THE MERITS — every one on a read column, so the marker was available

**These are the ones a blind reader will find, so each says why it was refused.**

- **0121A « Erit semen tuum sicut arena maris, »** — introduced *Superius dixit*. **Not a Vulgate
  verse.** Gn 13:16 has *sicut pulverem terrae*, Gn 22:17 *velut arenam quae est in littore maris*,
  Gn 32:12 *sicut arenam maris* of Jacob. It is the gloss's own summary back-reference. `[var:]` has
  no received reading to name; declined and recorded, as the 0008 stint recorded 0102A.
- **0121A « Sic faciam semen tuum, »** — likewise no Vulgate verse: Rabanus's coined antithesis to
  Gn 15:5's *Sic erit semen tuum*, which stands three lines below with the sand instead of the
  stars. Declined.
- **0122B « Tu laborem et dolorem consideras, et tibi derelictus est pauper, »** — **Ps 9:35**
  *Vides, quoniam tu laborem et dolorem consideras, **ut tradas eos in manus tuas**. Tibi
  derelictus est pauper.* Migne drops the opening *Vides quoniam* and the *ut tradas* clause and
  joins the two halves with *et*. One verse abridged, and the omitted clause is not what the gloss
  adduces it for (*gratuito consulit miseris*). Declined; the joining *et* is recorded.
- **0122B « Vocavit autem Agar. »** — **Gn 16:13** *Vocavit autem **nomen Domini qui loquebatur ad
  eam***. Migne's lemma names Agar, whom the Vulgate leaves as the implicit subject, and cuts the
  object. **Declined as a clipped lemma with the subject supplied for the address**, convention 3's
  shape: the gloss immediately restores what is cut (*Recte **nomen ejus** ita vocavit*), so nothing
  rests on the difference. Recorded because the substitution of a proper name into a lemma is
  unusual.
- **0123A « Daboque tibi et semini tuo. . . .et omnem terram Chanaan. »** — **Gn 17:8** *Daboque
  tibi et semini tuo **terram peregrinationis tuae,** omnem terram Chanaan*. Migne's own four-point
  ellipsis marks the cut, and the *et* before *omnem* is his join. A signalled abridgment, not a
  variant. Declined.
- **0123B « Circumcidetur ex vobis masculinum, »** — **Gn 17:10** *circumcidetur ex vobis **omne**
  masculinum*. One word dropped; nothing in Strabo's three causes turns on it. Rendered without
  "every", literally. Declined.
- **0124B « Cecidit Abraham in faciem suam, et risit in corde suo. »** — **Gn 17:17** *Cecidit
  Abraham in faciem suam, et risit, **dicens** in corde suo*. Dropping *dicens* moves *in corde suo*
  onto *risit*, which makes the laughter interior — and interiority is close to Jerome's point
  (Isaac is named from **Abraham's** laughter, not Sara's). ⚠ **The nearest of the declines to the
  line.** Refused because a single dropped word yields a perfectly natural reading either way, and
  because Jerome's argument is about *whose* laughter, not about where it was.
- **0124C « Et vocabis nomen ejus Isaac: »** — **Gn 17:19** ***vocabisque** nomen ejus Isaac*. A
  connective. Declined.
- **0124C « Et foedus sempiternum, »** — **Gn 17:19** *constituam pactum meum illi **in** foedus
  sempiternum*. A clipped lemma with *in* → *Et*. Declined.
- **0125A « Nos sumus enim circumcisio, qui spiritu Deo servimus. »** cited *Phil. III* — **Phlp
  3:3** *Nos **enim sumus** circumcisio, qui spiritu **servimus Deo***. Word order twice, sense
  identical, citation correct. Declined.
- **0126D « Lac potum dedi vobis, non escam, »** cited *I Cor. III* — **1 Cor 3:2** *lac **vobis
  potum dedi**, non escam*. Word order only; citation correct. Declined.
- **0127B « Laetare sterilis, quae non parturis, »** cited *Isa. LIV et Gal. IV* — **Gal 4:27**
  *Laetare sterilis, quae non **paris**; erumpe et clama, **quae non parturis***; **Is 54:1**
  *Lauda, sterilis, quae non paris*. Migne joins Galatians' opening to Galatians' second relative
  clause, skipping the middle. ⚑ **Declined because Migne cites BOTH sources himself**, so the
  conflated form is a citation-form question, not a text divergence — the 0004 stint's 0082B
  precedent. And nothing in the gloss rests on *paris* against *parturis*. Rendered *parturis* as
  "travailest", keeping the two verbs distinguishable.
- **0127D « Num celare potero Abrahae quae gessurus sum. »** — **Gn 18:17** *Num celare potero
  **Abraham** quae **gesturus** sum*. Two divergences, **both plate-confirmed at 600 dpi**:
  *Abrahae* (dative, the late/medieval construction of *celare*) for the accusative, and *gessurus*
  (a perfect-stem analogical future participle) for *gesturus*. **Declined: neither has an English
  exponent** — both readings give "hide from Abraham" and "what I am about to do", so Pattern 14's
  "in a way that changes the sense" is not met. ⛔ **And no `[sic:]` on *gessurus*:** it is a
  well-formed Latin word-shape, not broken type, and Addendum A's rule is that a real word that
  reads oddly is Migne's until a plate says otherwise — here the plate says it IS Migne's.
- **0128A « in gentem magnam futurus, »** — **Gn 18:18** *cum **futurus sit** in gentem magnam*.
  The verse's own words, re-jointed into Migne's sentence as a participial phrase. Declined.
- **0128A « in quo sunt omnes thesauri sapientiae et scientiae absconditi »** cited *II Cor. II* —
  **the text agrees with Col 2:3 exactly**; it is Migne's citation that is wrong, and the plate
  prints it barer still (`(II Cor)`, no chapter). No `[var:]`, since Pattern 14 marks the text; the
  note rides verbatim per `refDisplay`. Same shape as the 0008 stint's *Psal. LIII* at 0100B.
- **0129A « Memento, Domine, quoniam pulvis sum »** cited *Psal. X* — **no psalm carries these
  words.** The nearest is **Ps 102:14** *recordatus est quoniam pulvis sumus*, third person and
  plural; Ps 10 carries neither the words nor the sense. Gregory's adaptation, cited to a psalm that
  is not its source. `[var:]` has no received reading to name; declined and recorded, with the
  citation logged.
- **0130C « Percusseruntque caecitate. »** — **Gn 19:11** *percusserunt caecitate*. An enclitic
  *-que*. Declined.
- **0132B « Nemo ponens manum in aratro, et respiciens retro, aptus est regno Dei. »** cited
  *Luc. IX* — **Lc 9:62** *Nemo **mittens** manum **suam ad aratrum***. Two words, and the citation
  is correct. **Declined: no sense change** — "putting his hand on the plough" and "putting his hand
  to the plough" assert the same thing, and the gloss is entirely about the looking back. Rendered
  *in aratro* as "on the plough", not conformed to the familiar "to the plough".
- **0132B « Mementote uxoris Lot, »** cited *Luc. XVII* — **Lc 17:32** ***Memores estote** uxoris
  Lot.* A synthetic imperative for the periphrasis; identical sense, correct citation. Declined.
- **0132C « Recordatus est Abrahae. »** — **Gn 19:29** *recordatus Abrahae* (participle). Migne
  makes it finite. Declined.
- **0132D « et nescivit quod dormissent cum eo; »** — **no Vulgate equivalent**: Gn 19:33 reads *at
  ille non sensit, nec quando accubuit filia, nec quando surrexit* and 19:35 *et ne tunc quidem
  sensit*. Migne's clause is the LXX/Old-Latin form. ⚑ **Declined because the sentence around it is
  ITSELF a note on the reading's textual status** — *appungunt enim desuper Hebraei obelo, quasi
  superfluum* — so the divergence is the passage's own subject and a `[var:]` would tell the reader
  twice. Same instinct as §4.3.
- **0133B/0133C the Ammon etymologies** — *filius generis mei*, *benammi*, *filius populi mei*,
  *populus meus*, *de patre* — are Jerome's Hebrew glosses, not quotations. **Gn 19:38** does print
  *id est, Filius populi mei*, which agrees. No marker.

#### 4.3 A divergence Migne LABELS as a rival version — no `[var:]` by construction

- **0131A « Egressus est Lot, et locutus est ad sponsos qui accepturi erant filias ejus: »**,
  introduced ***Sed Hebraica veritas habet.*** Gn 19:14 reads *Egressus **itaque** Lot, locutus est
  ad **generos** suos qui accepturi erant filias ejus*. **The divergence is the sentence's whole
  argument** — *sponsi* against *generos*, which is what decides whether the daughters were married
  — and Migne announces the witness in his own voice. Convention (b), settled by the 0008 stint:
  the marker would restate what the text already says. **Declined by construction, and it is the
  only instance of the class in this range** — which is worth recording, since the 0095–0106 range
  carried twelve.

#### 4.4 Lemmata collated and found to AGREE with the Clementine — recorded, per 7a″

Gn 15:1 (« His itaque transactis, » · « Noli timere. ») · 15:5 (« Suspice coelum, » — §4.0 ·
« Sic erit semen tuum, ») · 15:9 (« Sume, inquit, mihi, » · « Vaccam triennem, et capram trimam, »
— §4.0) · 15:11 (« Descenderuntque volucres, ») · 15:13 (« Scito praenoscens, » ×2) ·
15:16 (« Generatione autem, ») · 16:1 (« Igitur Sarai uxor Abram, ») · 16:2 (« Ingredere ad
ancillam, ») · 16:12 (« Hic erit ferus homo. ») · 16:13 (« Profecto hic vidi posteriora videntis
me. ») · 16:14 (« Propterea appellavit puteum illum, ») · 17:2 (« Ponamque foedus, ») ·
17:5 (« Nec ultra vocabitur nomen tuum Abram. ») · 17:8 (« In possessionem aeternam. ») ·
17:11 (« Carnem praeputii. ») · 17:14 (« Masculus cujus praeputii caro, ») · 17:15 (« Sarai uxorem
tuam, ») · 17:19 (« Nomen ejus Isaac. » · « Constituam pactum meum, ») · 17:20 (« Super Ismael, »)
· 17:21 (« In anno altero. ») · 17:23 (« Tulit autem Abraham, ») · 18:1 (« Apparuit autem ei
Dominus in convalle Mambre. ») · 18:2 (« Tres viri. » · « Quos cum vidisset. ») · 18:4 (« Sed
afferam. ») · 18:6 (« Tria sata. » ×3 · « Subcinericios. ») · 18:7 (« Vitulum tenerrimum. ») ·
18:8 (« Butyrum et lac ») · 18:9 (« Ecce in tabernaculo est, ») · 18:10 (« VERS. 10.--Et habebit
filium, » · « Quo audito, ») · 18:11 (« Erant autem, ») · 18:12 (« Voluptati operam dabo? » —
**including Migne's question mark, which is the Vulgate's own**) · 18:15 (« Non risi, ») ·
18:20 (« Clamor Sodomorum et Gomorrhae, ») · 18:21 (« Descendam et videbo, ») · 18:24 (« Si
fuerint quinquaginta justi, ») · 18:27 (« Loquar ad Dominum, » clipped · « Loquar ad Dominum meum,
cum sim pulvis, » clipped · « Loquar ad Dominum meum cum sim pulvis et cinis, » **verbatim**) ·
18:28 (« Quinque fuerint. ») · 18:32 (« Quid si inventi, » · « Decem. » · « Dixit. ») ·
19:1 (« Veneruntque duo angeli, » · « vespere, » · « Qui cum vidisset, ») · 19:2 (« Lavate. ») ·
19:3 (« Compulit illos. ») · 19:8 (« Habeo duas filias. ») · 19:10 (« Et introduxerunt ad se
Lot. ») · 19:14 (« Egressus, ») · 19:15 (« Cumque esset mane, ») · 19:17 (« In monte. ») ·
19:19 (« Nec possum in monte: ») · 19:20 (« Est civitas, » · « Est civitas haec juxta, » ·
« Juxta » · « Ad quam possum, ») · 19:21 (« Ecce etiam in hoc suscepi preces tuas, ») ·
19:24 (« Igitur Dominus pluit super Sodomam, ») · 19:25 (« Universos habitatores. ») ·
19:26 (« Respiciensque uxor ejus. ») · 19:29 (« Cum enim subverteret, ») · 19:30 (« Ascenditque, »
· « Ascenditque Lot de Segor, ») · 19:31 (« Dixitque major ad minorem, ») · 19:32 (« Veni,
inebriemus, ») · 19:33 (« Dederunt, ») · 19:36 (« Conceperunt ergo, ») · 19:37 (« Vocavit nomen
ejus Moab, ») · Rom 2:28 (« Non enim qui in manifesto Judaeus est… » — **verbatim, including the
comma placement**) · Lc 8:8 (« Qui habet aures audiendi, audiat; ») · Mt 5:8 (« Beati mundo
corde ») · Act 15:9 (« Fide purificans corda eorum. ») · 1 Cor 7:5 (« Nolite fraudare invicem, »).

⚠ **One near-agreement recorded as such: 1 Cor 7:2 « Propter fornicationem unusquisque uxorem
habeat. » (0131B)** drops *autem* and *suam*. Neither is sense-bearing and the citation is correct;
listed here rather than in §4.2 because the omission is of two function words.
⚠ **`coelum` for *caelum*, `Chanaan`/`Sodomam`/`Gomorrhae` capitalization, and `Samsom` for
*Samson* (0124C) are orthography, not divergence.** The name is rendered by its established English
form; the plate's spelling stands in the facing Latin.

---

### §5 · THE DECLINED LIST — suspect readings, what settles each, and why NO `[sic:]` fired

**Zero `[sic:]` in 5,245 words, and on this book that is now four stints and 22,000+ words.** The
reason is stated once and holds for every entry: a `[sic:]` accuses Migne's type, its content must
be verbatim in our twin, and **every plate defect this range actually contains is one our twin has
already tidied away** — so the marker is owed after the patch, not withheld now. The mirror case is
equally firm: every defect our twin carries is OURS, and a `[sic:]` on one would blame a clean page.
On 9004, translating agents' "probably our-file" calls were right 5 times and wrong 9; here the
plate decided all nine, and it went both ways.

#### 5.1 Non-words in the twin — ALL THREE ARE OURS, settled at the plate

| col | twin | plate (600 dpi) | settled on | rendering |
|---|---|---|---|---|
| 0130D | *virginet* | **virgines** | p. 70, lower right | "virgins" |
| 0131C | *uque ad* | **usque ad** | p. 71, col 131 band C | the formula, "*as far as*" |
| 0131B | *agno scebat* (split run) | **agno-scebat**, an ordinary hyphenated line break | p. 71 | "recognized" |

⚑ **The split run is the dangerous shape** (7a⁗-b): quarantining *agno scebat* under Pattern 10
would have taken the clause's only finite verb out of *quem in angelis agnoscebat*. It was not
quarantined, because it is not Migne's. A fourth, *supplicio-ignis* at 0131A, is a spurious hyphen
in the twin (plate: a space) and is likewise ours.

#### 5.2 Non-words on the PLATE — three, all normalized away by our twin, none markable

`eic.` for *etc.* (0129B) · `Sodomorm.` for *Sodomorum* (0129C) · `susperstites` for *superstites*
(0133A). All three read at 600 dpi. **These are Migne's, and they are exactly the class brief §4
warns cannot be seen from the Latin alone** — our file prints three perfectly good words. Each
becomes a live `[sic:]` after the patch lands; none is one now, because the guard would reject it
and rightly.

#### 5.3 ⭐ A SUSPICION WITHDRAWN AT THE PLATE — 0123B `(RAB. STRAR.)`

Raised at 150 dpi as an obvious `STRAB.` mis-transcribed. **Read at 600 dpi, the plate sets
`STRAR.`** — Migne's own broken small-cap sort, and our twin is faithful. No patch, no marker.
⚠ Migne's `( sic )` rule applies in spirit: this is inside an `[n:]`, whose contents ride verbatim
and untranslated, so nothing of ours goes near it. **Recorded because it is the exact shape of the
8955 @0629D *ulit*-for-*Tulit* finding and went the other way**, and because a checked negative is
worth having beside §5.2's three positives.

#### 5.4 Real words that read oddly — rendered as printed, no marker (Addendum A)

- **0123D *pueri circumcisi*** — **this one took a `[cj:]`, see §6.** The plate reads *circumcisi*,
  so it is Migne's and there is nothing to `[sic:]`.
- **0124D *Annus alter … tempora sunt regenerationis*** — a singular subject with a plural
  predicate nominative. Rendered as printed, "The other year … is the times of regeneration".
  English carries the disagreement, so Pattern 12's second test (a defect with no English exponent)
  is not triggered and no marker is needed. Logged.
- **0132A *ne posset adverti impiissimum facinus Sodomitarum*** — Alcuin on why the infants were
  burned. *adverti* will not construe comfortably in any of its senses ("be turned aside", "be
  attended to"); the sense the argument wants is that the crime should be left without trace.
  **Rendered literally — "lest the most impious deed of the Sodomites could be turned aside" — and
  the conjecture is here and not in the text.** Candidates weighed: *animadverti* ("be punished",
  the likeliest, and a haplography of *anim-* is a plausible compositor's slip) and *averti*.
  ⛔ **No `[cj:]`**: the printed word does not make the sentence assert something Alcuin is arguing
  *against* — it makes it assert nothing very clearly, and Pattern 18's own boundary is that a
  sentence too broken to assert is not the marker's business. Plate read (p. 71): Migne's type is
  `adverti`.
- **0127B *mirum est: nisi homines prius arbitratus est, sed in quibus Deum loqui intelligeret*** —
  the roughest sentence in the stint; the *mirum est* has no complement and the *nisi* clause hangs.
  Rendered clause by clause as printed. Plate (p. 69) agrees with the twin word for word. No marker.
- **0130A *ut sciamus Deo benefacere, jucundum et placitum Deo proprie esse ulcisci vero Deo
  ingratum esse*** — the *Glossa Graeca*'s Latin, with no punctuation between *esse* and *ulcisci*.
  Rendered on the reading that *proprie esse* governs *benefacere* ("that to do good is proper to
  God") and that *ulcisci … ingratum esse* is the answering member. Plate agrees with the twin. No
  marker; the alternative construal (*Deo benefacere* = "to do good **to** God") is recorded here.
- **0122A *et omnibus bonis contrarius*** — *bonis* is masculine or neuter and the plate does not
  disambiguate. Rendered **"contrary to all good things"**; "to all good men" construes equally and
  is what the sentence's own subject (the persecuting people) suggests. Nothing in the passage
  decides it. Logged rather than chosen silently.

#### 5.5 Unexpressed subjects supplied, with what decided each

- **0122B *Recte nomen ejus ita vocavit*** — supplied **"she" = Agar**, from the lemma directly
  above (« Vocavit autem Agar. »), and *ejus* = the Lord's, from Gn 16:13's *nomen Domini qui
  loquebatur ad eam*. The alternative (an impersonal "one called") would detach the naming from the
  woman the whole gloss is about.
- **0122D *Propterea appellavit puteum illum*** — the Vulgate leaves the subject unexpressed at Gn
  16:14 too. Rendered **"she called"**, continuous with the lemma two paragraphs above, and noted.
- **0129A *Quosdam per tumorem sensus non elevat*** (chunk 0022's opening, mid-sentence from the
  previous chunk) — **the Latin prints no subject at all**, and the chunk boundary cuts off what
  would have supplied it. Rendered with a bare **"it"**, which is as open as the Latin: candidates
  are *abundantia*/wealth (from the *terrenis abundare* two clauses on) and God. ⛔ **Not chosen** —
  this is the 11613 class, and naming the subject here would be a guess wearing Gregory's voice.
- **0127B *illius risus admirationis fuit, hujus dubitationis*** — ⚠ **the one place two readings
  both construe and the choice matters.** The argument requires **Abraham's** laughter to be of
  wonder and **Sara's** of doubt: Sara alone is reproved, she alone denies it, and *Abraham vero
  Deum intelligebat* follows. But the classical pointer runs the other way — the nouns stand in the
  order *Sara … Abraham*, so *illius* (the former) is Sara and *hujus* (the latter) is Abraham.
  **Rendered so as to keep the ambiguity the Latin has: "because the laughter of the one was of
  wonder, that of the other of doubt."** Nothing is decided in the text; the argument for
  Abraham=wonder is recorded here. Augustine's own *Quaest. in Hept.* I.36 has *admirantis* /
  *dubitantis* in that order.
- **0128A *duo illi promittuntur*** — read as dative, "two things are promised **him**". *duo illi*
  as "those two" also construes; the colon that follows lists the two, so the numeral is doing the
  work either way. Logged.

#### 5.6 What was checked and found NOT to be a defect

- **0125C the missing colon after *mundabantur*.** The plate prints `mundabantur : unde :`; our twin
  prints `mundabantur unde:`. **The English follows the twin and therefore reads "as before
  circumcision holy men were cleansed whence: « … »"** — abrupt, and deliberately so. A mark, so
  convention (ii) governs. Recorded prominently because a blind reader will meet it and read it as
  ours.
- **0125C the opening guillemet before « Fide purificans corda eorum. »** is **not on the plate** —
  our twin supplied it. The English carries it, because guillemet parity against the twin is a hard
  `verify-english` check. ⭐ **This is the inverse of the 0008 stint's 0106A**, where the twin
  *dropped* an opening mark. Two directions, one class, and only the plate separates them: the
  corollary the 0008 stint drew — never adopt a policy about unpaired marks without reading the
  column — is confirmed from the other side.
- **0128A « in quo sunt omnes thesauri sapientiae et scientiae absconditi »** cited *(II Cor. II)*
  in the twin and **`(II Cor)`** on the plate. The note rides verbatim either way; the patch file
  carries it.
- **0126C `[ *Al.,* rancore]`** — Migne's own bracketed variant, reproduced verbatim and
  untranslated per the register. The word it varies, *angore*, is rendered ("anguish").
- **0129C the paragraph that ends without a period** (*ad exaggerationem iniquitatis Sodomorum*) and
  **0123A** (*in anteriora extenditur*) and **0131A** (*supplicio-ignis aeterni*) — three paragraphs
  the twin leaves unstopped. **Mirrored unstopped** (Pattern 8, never supply). The plate does print
  a period at 0129C; a mark, so the twin governs.
- **0127D « Num celare potero … gessurus sum. » closes with a PERIOD, not a question mark.**
  Rendered as an interrogative sentence closing on Migne's period: *« Can I hide from Abraham what
  « I am about to do. »* ⛔ **The mark is not supplied and not deleted.** Pattern 8b does not apply
  — this is a *direct* question that English can carry; only the terminal mark is odd, and recording
  his oddity is the point (the 11537 1063D–1064A precedent, in the other direction).

#### 5.7 The three licensed Pattern 8b colons, and the band scan that found them

A band-by-band comparison (colons, semicolons, question marks, guillemets, per column anchor,
apparatus stripped) returned **exactly three mismatched bands in five chunks**, all `:` +1, all the
same class, and **zero elsewhere**:

| column | Migne | English |
|---|---|---|
| 0123D | *Quaeritur quomodo pueri circumcisi … perire debeant?* | It is asked**:** how ought circumcised … boys … to perish? |
| 0125C | *Quaeri solet quomodo feminae salvabantur, quae non circumcidebantur?* | It is wont to be asked**:** how were women saved, who were not circumcised? |
| 0130B | *Utrum admittenda sit compensatio … an perturbationi Lot, non sit consilio tribuendum, merito quaeritur?* | It is deservedly asked**:** is a balancing … to be admitted … or is it to be attributed to Lot's disturbance, and not to his counsel? |

Migne's `?` is kept in all three; English cannot end an indirect construction with it.
⚑ **The scan also found four unlicensed marks that had crept into the draft and were repaired**: a
supplied semicolon at 0125B (*ne mala faciant, pedes* — his comma), one at 0126A (*solis
necessariis intenta, nesciat* — his comma), one at 0131D (*Sulphur, fetor carnis, ignis* — his
comma), and a semicolon standing where Migne prints a **colon** at 0130B (*ne fiant graviora:*).
Totals had not cancelled here, but the sites were invisible until the bands were compared.
⛔ **No comma→semicolon sweep was made.** Migne prints 48 semicolons in these five chunks; Tobit's
narrow exception rests on his printing zero and does not apply.

---

### §6 · THE ONE `[cj:]` — 0123D *pueri circumcisi*

    [n: (ISID.)] Quaeritur quomodo pueri circumcisi (qui pactum Dei irritum non fecerunt,
    sed qui eos circumcidere neglexerunt) perire debeant?

**Fired: `circumcised [cj: *circumcisi*; read *incircumcisi*, "uncircumcised"] boys`.**

The printed word is a real Latin form, so Pattern 7 renders it and Pattern 12 has nothing to wrap —
and the English then asserts what Isidore is arguing against. That is Pattern 18's founding shape.

**Why the conjecture, from the sentence's own structure and not from what reads well:**
1. **The parenthesis assigns the guilt away from the boys** — *qui pactum Dei irritum **non**
   fecerunt, **sed qui eos circumcidere neglexerunt***. The boys did not void the covenant; their
   parents did, by neglecting to circumcise them. A **circumcised** boy has no parents who neglected
   anything, and the parenthesis has nothing to distinguish.
2. **The lemma is Gn 17:14** — *Masculus cujus praeputii caro **circumcisa non fuerit**, delebitur
   anima illa* — whose whole subject is the **un**circumcised male. The question is asked of the
   verse's own class.
3. **Isidore's answer is about those not freed**: *Ideo pereunt omnes qui per regenerationem **non**
   liberantur.* The perishing class is defined by the absence of the sign, not its presence.

**Why the marker and not a silent repair or a bare crux.** Pattern 7 forbids the repair; and a crux
alone puts the reading where the reader does not meet it, which is 11081 @0030B's exact failure.
The gloss is **additive** — Migne's word keeps its English and the conjecture stands beside it — and
the verbatim-in-the-Latin-twin guard is satisfied by *circumcisi*, so nothing is smuggled in.
**The class is 18a's admitted one: a lost negation** (here the privative *in-*), which is the defect
class the whole 7a⁗ apparatus exists for and which has nowhere else to live when no type is broken.
The 7561 @0648 precedent is exact — the gloss opens on the word Migne *did* print and supplies what
fell out.

⭐ **Plate-read (p. 67, 600 dpi, corner numbers checked first): Migne's type reads `circumcisi`,
with no prefix.** So the reading is his and not the digitization's — which is what makes this a
`[cj:]` and not a patch. Had the plate read *incircumcisi*, the entry would have moved to the patch
file and no marker would stand.

---

### §7 · SECTIONS READ CLEAN (Test 4 — does the English ASSERT what he asserts?)

Run last, with counts, bands and anchors already known clean, paragraph by paragraph against the
Latin.

- **0121A–0121D** — the Rabanus stars/sand antithesis and the two Augustine *quaestiones*. The
  densest negation in the stint sits at 0121D (*Non sic accipiendum est, tanquam … quadringentos
  annos populus Dei fuerit*), where the whole point is that the four hundred years are not the
  years of the servitude. Checked twice.
- **0122C** — the Ex 33 face/hinder-parts passage, six negations in five lines
  (*non apparebit · Non enim … et vivet · nemo potest videre et vivere*), each traced to its host.
- **0123B–0124B** — Strabo's three causes and Jerome's Hebrew letters. The letter-names and the
  three empty `( )` were checked span by span against the brief's inventory.
- **0125A–0125C** — the circumcision-of-the-senses catalogue. ⚑ **The site test 2a exists for:**
  *non solum se ab illicitis temperat, sed etiam a concessis* — the negative is on *solum*, not on
  *temperat*, and the `sed etiam` correlative proves it. The English puts "not only" on "from things
  unlawful". Same check run on *Qui autem **non** obscoenis desideriis … moechatur, **sed** fidei
  puritatem … custodit*.
- **0127C** — the physicians' passage, five negations turning on *senior*/*senex*/*juvencula*.
  ⚑ *Emortuum enim corpus **non omnino** ad generationem erat* is the trigger shape (a quantifier
  beside a verb): the negative belongs on *omnino*, because the next clause has Abraham begetting of
  Cethura. English reads "was not altogether dead for generation".
- **0128B–0128D** — Augustine on God's anger and Hilary on God's not-knowing, the heaviest double
  negation in the range (*Habemus nescientem Deum, quod tamen non nesciat*; *non ea tunc scire, quia
  prius nesciat*). ⚑ *non est ignorantiae diminutio* was drafted as "a diminution of knowledge" and
  **corrected to "a diminution of ignorance"** — the genitive is *ignorantiae* and reversing it
  would have made Hilary say the opposite about what is being diminished.
- **0130C–0131B** — Gregory on the blinded Sodomites and Strabo on Segor, and the *avidentia*
  passage, whose four negations (*non videri, non omnia, sed quod non est opus … ut nihil viderent*)
  were traced individually.
- **0132A–0133C** — Alcuin on the infants, Isidore on Lot's wife and on the law, Jerome's Ammon
  etymologies. *Est etiam qualecunque beneficium, non reum esse, qui gloriosus non est* was
  re-ordered in English so that each negative sits on its own host.

**Candidates rejected, with reasons, so a blind reader knows they were looked at:** §5.1–5.6 above,
plus — *Samsom* at 0124C (Migne's spelling of Samson, rendered by the established English name,
logged, no marker) · *frater Abraham* at 0131A of Lot, who is Abraham's nephew (the Latin idiom, and
the Vulgate uses it; rendered "brother") · *Marci XIX* at 0131A (a book with sixteen chapters; the
citation rides as printed and the `[var:]` names Mt 19:21) · the four-dot ellipsis runs at 0122D
(`. . . . . .`) and 0123A (`. . . .`), reproduced with Migne's own spacing · `[n: ( Glossa Graeca. )]`
at 0124D and 0130A, reproduced with his internal spaces · the double blank line the twin prints at
0123B before `VERS. 10.`, mirrored.


---

## STINT 6 — chunks 0024–0030 (cols 0133C–0147C)

*Filed as `cruces-0024.md`; merged verbatim, headings demoted one level. Nothing in it was rewritten — where a later stint corrected it, the correction stands in that stint's section.*


Stint 6 of 8950. Seven chunks, 5,994 Latin body words → 8,245 English (1.38×).
`verify-english.mjs` reports **no error on 0024–0030**: column anchors, `[n:]` notes,
guillemets, italics and question marks all 1:1 with the Latin twins. (Its `VERIFY FAILED` is
the unwritten chunks of peer ranges, nothing in mine.)

**Apparatus fired: 16 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
**Every one of the sixteen stands on a column I read at the plate myself** (pp. 72–79, cols
0133–0148, corner numbers read first on all eight). The reads are recorded in
`data/briefs/8950-PLATE-READS-0024.json` for the orchestrator to merge into
`data/plate-reads.json` — **until that merge lands `plate-gate.mjs` reports fifteen of them as
standing on unread columns, which they do not** (0133D already passes on the 0019–0023 stint's
read of p. 72).

Counts, chunk by chunk (Latin = English in every case, body only):
guillemets `«`/`»` — 0024: 18/18 · 0025: 25/25 · 0026: 34/34 · 0027: 6/6 · **0028: 38/37** ·
0029: 2/2 · 0030: 37/37.
`[n:]` notes — 5 / 15 / 17 / 4 / 21 / 1 / 21. Question marks — 0 / 2 / 1 / 0 / 1 / 0 / 2.
Column anchors — 4 / 12 / 9 / 2 / 15 / 1 / 13.

---

### §0 · SPAN COUNT AGAINST THE BRIEF — **219 / 1 open-ended, EXACT, and checked span-for-span**

**My Latin carries 218 paired spans plus 1 open-ended = 219; the brief's header says
`219 spans, of which 1 OPEN-ENDED`.** Counted **paragraph-bounded**, per the launch instruction,
with `«[^«»]*»|\*[^*\n]+\*` run inside each paragraph and the unmatched-`«` residue counted
separately, so an unmatched delimiter cannot run forward across a paragraph break.

Per chunk (paired + italic / open-ended): 0024 **22**/0 · 0025 **35**/0 · 0026 **45**/0 ·
0027 **10**/0 · 0028 **49**/**1** · 0029 **4**/0 · 0030 **53**/0.

⛔ **The totals were not trusted on their own** — the 0004–0007 stint's false 215/215 is the
reason. I diffed my 219 against the brief's 219 **span for span**, normalized, and the two lists
are identical with no residue on either side. The only apparent differences were my own
extractor not stripping the `VERS. n-m.--` prefixes the brief prints, i.e. presentational.

⭐ **The open-ended span is MIGNE'S, confirmed at the plate.** 0141D
`« Si vobis spiritualia seminavimus, magnum est si nos carnalia vestra metamus.` — p. 76,
600 dpi: **the plate carries no closing `»` either.** It stays unclosed in the English
(Pattern 5 corollary). The brief's warning that the shown text may be SHORT of what Migne quotes
does not bite here: I read it at the line and the quotation ends exactly where the paragraph does.

⚠ **One inventory line describes a span Migne did not set.** At 0143C the brief lists a single
enormous span, `« Inclinata, etc. Quia passionum exercitia … sacrificium vespertinum. »`. **The
plate prints TWO spans there** — `« Inclinata, »` closes, and a fresh `»`-marked quotation opens
before *Elevatio manuum* — and our twin has lost both marks. The English mirrors the twin (marks
follow the twin, §1c), and the plate reading is filed as a pending patch. **This does not change
the count**, because the twin's run is closed; it does mean one of the 219 is a TEI artifact.

---

### §1 · CONVENTIONS — inherited unchanged, and the one this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not** re-opened, nor were the four earlier
stints of this work (`cruces-0000.md`, `-0004.md`, `-0008.md`, `-0012.md`), all of which I read
before drafting: `VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary lemma
is rendered as the phrase it stands for; sigla ride as ordinary `[n: …]` notes with Migne's own
internal spacing, contents unanglicized; the guillemets are the plate's, 1:1, and their contents
are Englished; `*usque ad*` → ***as far as***, with **no verb and no object ever supplied**; the
`*Historice / Allegorice / Mystice*` tags are translated inside their italic span; **no `[var:]`
on a quotation Migne labels himself** as a rival version; **words follow the plate, punctuation
follows the twin**; a Latin gloss giving the MEANING of a name is Englished inside its span, a
Latin word MENTIONED as a word is not; `usque ad` is decided per occurrence by the `etc.` splice
test.

#### (a) ⭐ NEW — how a plate/twin WORD divergence is rendered, stated as a rule

Twelve sites in this range have the plate and the twin printing different words, which is far more
than any earlier stint of this work met at once. The English was set by one rule, uniformly, and it
is set out with every site in **`data/briefs/8950-PENDING-TEI-PATCHES-0024.md` §"The convention
this stint applied"**. In brief:

1. **Twin defective, plate clean → render the PLATE** (the locked rule's founding case). Five
   sites: *probare* (0137C), *haesitavit* (0138D), *praedicator* (0141C–D), *animale* (0145A),
   *quam* (0136C, no English exponent).
2. **Plate defective and its type CANNOT render in place** — a non-word, a form with no
   grammatical slot, a dropped word → **render the sense the type is defective for** (Pattern 7 as
   amended 2026-09-05), **with no marker**, because the `[sic:]` guard requires the twin to carry
   the type verbatim and the twin has been tidied. Eight sites: *sonorem* (0133C), *par quem*
   (0136D), *accdperat* (0137C), *incanationem* (0139C), *est.* for *etc.* (0140A), the dropped
   *sub* (0140C), *electorem* (0141A), *caanem* (0141C). **Precedent: the 0008–0011 stint's "four
   non-words whose SENSE the English renders."**
3. **Plate defective but its type DOES render in place** — a real word in a real slot → Pattern 7's
   main rule is untouched and the English renders **the plate's word**. **One site: `« plenius. »`
   at 0145A**, where the English reads *« more fully. »* against an argument that requires the bare
   *plenus*. That oddity on the page is the disclosure, and it is deliberate.
4. **Negation is the exception to (2).** Pattern 7a is unconditional, so at 0141B the plate's
   `non` is carried into the English even though our twin lacks it. §5.1.
5. **A form CARRIED untranslated follows the TWIN**, not the plate (`*seyr,*` at 0146C), because
   the English there *is* the Latin and a divergence would be indistinguishable from our own typo.
   A form that is TRANSLATED follows the plate.

⚑ **Why no marker fires at any of the twelve**, stated once: a `[sic:]` may only wrap type our
Latin twin carries, and in every case here the twin has been tidied; a `[cj:]` may only open on a
word Migne prints AND that our twin carries, and its form (`*printed*; read *conjectured*`) cannot
express a deletion. **Each of the eight sites in (2) is a `[sic:]` OWED**, markable the moment the
TEI patch lands. This is the 0008–0011 stint's finding reproduced exactly: *every plate defect in
this range is one our twin had already tidied away.*

#### (b) `usque ad` — 21 formulas, 11 ordinary, 1 the verse's own words

**Formula (italic `*usque ad*`, immediately after an `etc.`), 21×**, all → `*as far as*`, no verb,
no object and no antecedent supplied anywhere: 0024 @0133D · 0025 @0136A, 0136D, 0137A ·
0026 @0139D ×3 · 0027 @0140A ×4 · 0028 @0140D, 0141A, 0142C ×2, 0143A, 0143C ·
0030 @0144C ×2, 0146A.

⛔ **Eleven ORDINARY, non-formula `usque ad`, none italic, none after an `etc.`, each rendered by
sense** (brief addendum D):

| col | Latin | English |
|---|---|---|
| 0138B | *de Geraris **usque ad** montem Moria* | "from Gerara as far as mount Moria" |
| 0138B | *ab Abraham **usque ad** Mosen* | "from Abraham to Moses" |
| 0138B | *a Mose **usque ad** Joannem* | "from Moses to John" |
| 0138B | *inde **usque ad** Dominum* | "thence to the Lord" |
| 0142A | *si non **usque ad** opera* | "if not so far as works" |
| 0142A | *tamen **usque ad** fidem suscipiendam* | "yet so far as the receiving of the faith" |
| 0143C | *passionem **usque ad** mortem* | "his passion … even unto death" |
| 0144A | *__usque ad__ thorum contemplationis perducitur* | "is brought to the couch of contemplation" |
| 0145B | *ab Euphrate **usque ad** mare Rubrum* | "from the Euphrates to the Red Sea" |
| 0145D | *extendens desertum **usque ad** mare Rubrum* | "stretching the desert as far as the Red Sea" |
| 0146C | *quod diu fuerunt **usque ad** regem Joram* | "which they were for a long time, until king Joram" |

⭐ **And one that is the LEMMA'S OWN WORDS, the 8967 col 0953C shape that must not be swept:**
0145C `« Habitavit autem ab Hevila **usque** Sur, quae respicit Aegyptum, »` — Gn 25:18 verbatim,
bare `usque` without `ad`, rendered **"from Hevila as far as Sur"**. It sits four lines from an
ordinary *usque ad* and eleven from a formula. **Said here explicitly, with the Latin that forced
it**, per the series brief's requirement.

#### (c) The vocabulary axes — every instance, with the instrument checked before reporting

- **`gentes` / `gentilis` / `gentilitas` — 9 occurrences, and the instrument was checked first.**
  A raw `gent-` grep in this range also returns *gentem magnam* (0136C) and nothing spurious; there
  is no *indigentia*/*ducentorum* noise here, but the check was run.
  **Gentiles** where the *Judaei*/*gentes* opposition is live: 0134C *de **gentili** conversatione*
  ("out of Gentile converse", the `gentilis` rule added on 9000); 0138C *« plenitudo **gentium**
  intraret »* and *« ubi plenitudo **gentium** intraverit »* (Rom 11:25, set against *Israel* in the
  same sentence); 0138C *sacrificium crucis per **gentes** fuerit praedicatum*; 0147B *« dabitur
  **gentibus** »* (the whole gloss opposes *Judaicum populum*).
  **the Gentile world**: 0144A *Ecclesia ex **gentilitate** veniens*.
  **nation(s)** where the sense is plainly generic: 0136C *futurum in **gentem** magnam*;
  0146B *« Duae **gentes** »* and *__gentem__ quam propagavit Esau*; 0146D *« Duae **gentes** et duo
  populi »*.
  ⚠ **0146B–D reads as an inconsistency and is not one:** Gn 25:23's *Duae gentes* is the axis's
  generic exemplar shape (two peoples in one womb, expounded of Israel/Edom and then of
  vices/virtues) → **nations**; the *gentibus* of Mt 21:43 at 0147B is the typological opposition
  → **Gentiles**.
- **`natio` — ZERO in this range.** ⚑ Instrument checked before reporting: a raw `natio` grep
  returns **six** hits and every one is *incarnationem* (0139C ×2), *cognatione* (0140D, 0144A) or
  *praedestinatione* (0140D, 0144A). There is no `natio` here at all.
- **`turba` — ZERO.** No `turb-` of any kind, and no verb *turbare*, in the seven chunks.
  **`multitudo` ×1 → multitude** (0139A *in multitudine prophetarum*).
- **`daemonium` — ZERO. `diabolus` / `satanas` — ZERO.** ⚑ Checked with the pattern that does
  **not** miss *daemones/daemonum/daemone*; nothing.
- **`sacramentum` ×1 → sacraments** (0138A *quae portabat omnia **sacramenta*** — of the ass that
  bore them and knew them not). **`mysterium` ×3 → mystery** (0135C *prophetiae **mysterio**
  compulsa* and *Significabatur ergo hoc **mysterio***; 0143D *quanto Christi **mysteria**
  penetrat*). The two words stand five columns apart and were kept 1:1; **neither was ever
  rendered by the other's English.**
- **The commentator's own voice is not archaised**: *dicit / ait / aiunt / inquit* → "says / say",
  never *saith*. `-eth` forms appear **only** inside quoted scripture (Jo 7:37 *sitit* →
  "thirsteth"; Eph 5:29's *habuit* is a perfect and takes "hated"; Rom 12:3's *oportet* →
  "behoveth" inside the woven Pauline clause at 0141B) and in second-person singular address.
- **Pattern 17.** Singular → *thou*: 0133D Chrysostom to Abimelech (*Scias autem quod illius preces
  **tibi** vitam praebebunt* → "know **thou** … grant **thee** life"); 0135A *Unde cresce, et
  manducabis me* → "grow, and **thou** shalt eat me"; 0141A *voluntatem **tuam** persuasioni meae
  inclinem* and *Humilia saecularem facundiam* → "Humble **thy** worldly eloquence";
  0143D *Quem enim fructum habuisti tunc in illis in quibus nunc erubescis?* → "hadst **thou** …
  **thou** art now ashamed"; 0146A *Ne putes* → "Think not **thou**" (rendered "Think not").
  Plural → *you*: 0133D Mt 23:9 *« unus est enim Pater **vester** »*; 0137D Dt 13:3
  *« Tentat **vos** Deus **vester** »*; 0141C Rom 13:14 *« Carnis curam ne **feceritis** »*;
  0142A 2Cor 6:12 *« Non **angustiamini** in nobis, sed in visceribus **vestris** »*;
  0143C Lc 21:19 *« In patientia **vestra** possidebitis animas **vestras** »*;
  0147B Mt 21:43 *« Auferetur a **vobis** regnum Dei »*.

#### (d) Heads — numerals mirror the plate

`CAPUT XX.` → `CHAPTER XX.` · `CAPUT XXI.` → `CHAPTER XXI.` · `CAPUT XXII.` → `CHAPTER XXII.` ·
`CAPUT XXIII.` → `CHAPTER XXIII.` · `CAPUT XXIV.` → `CHAPTER XXIV.` ·
`CAPUT XXIV. (cont.)` → `CHAPTER XXIV. (cont.)` · `CAPUT XXV.` → `CHAPTER XXV.` — numerals
throughout, per the corpus measurement (26 works `CHAPTER XIII.`, zero spelled forms above ONE).
All seven carry their terminal period on both sides.

#### (e) Frontmatter copied VERBATIM from each Latin chunk, field order included

Every field in the Latin twin's own order, including the `words:` figures, which count the Latin.
Chunk 0029's `colFirst`/`colLast` are both `0144B` and chunks 0024/0028/0030's `colContext` runs
one band behind `colFirst`; both are the chunker's and are copied unaltered.

#### (f) Two mentioned-word sites, decided by the 0012 test (translation, or subject?)

- **0137C** *sed usualiter, **tentare**, pro eo quod est **probare**, dicimus.* Neither word is in
  an italic span in the twin, so italics were unavailable (span parity), and the 0000 stint's
  straight-quote device applies: rendered **`we say "to tempt" for that which is "to prove"`**.
  These are the SUBJECT of the sentence in one sense — but the sentence is about the two verbs'
  *usage*, not about their letters, and leaving them Latin would tell an English reader nothing.
  Recorded because it is the borderline case of the 0012 rule.
- **0143D** `« teristrum, »` is left **untranslated inside its guillemets** — the one place a
  guillemet span is not Englished in this range. The clause exists to explain what a *teristrum*
  is (*quod etiam nunc genus est Arabici vestimenti*), so the word is mentioned, not used; this is
  0012 §1a's *sidera* class carried into a guillemet span. Same footing as *Bersabee*, *sabee*,
  *sabaa*, *Alon*, *debir*, *Beka*, *Schekel*, *siclus*, *alma*, *seyr*, *Edom*, all left as
  printed.
- ⚑ Their opposites, Englished inside their spans per the meaning rule: *fons judicii* → *the
  fountain of judgment* · *angustia* → *narrowness* · *illuminans* / *lucens* → *illuminating* /
  *shining* · *veprem* / *spinetum* → *a briar* / *a thorn-brake* · *negotiatores* → *merchants* ·
  *copulata* → *joined* · *risus* / *patientia* → *laughter* / *patience* · *medius* / *fluvius* →
  *middle* / *a river* · *Rubeum* / *fulvum* → *Red* / *tawny* · *juramentum* → *an oath* ·
  *quercus* → *an oak* (inside `( *Alon* Hebraice Latine *quercus* )`, rendered
  `( *Alon* in Hebrew, in Latin *an oak* )`).

---

### §2 · PLATE READS — EIGHT PAGES, ALL EIGHT NEW, CORNERS FIRST

⭐ **My range was entirely unread when the stint opened.** `data/plate-reads.json` covered
cols 0067–0070, 0081–0082, 0093–0106 and (from a peer's merge) 0121–0133; **cols 0134–0147 had no
read at all.** All eight pages were rendered and read: **PDF pp. 72–79 = cols 0133/0134, 135/136,
137/138, 139/140, 141/142, 143/144, 145/146, 147/148.**

⛔ **The printed corner numbers were read FIRST on every one of the eight pages, before anything
else on the page**, and each confirmed the map `PDF page = (column + 11) / 2`. 200 dpi for the full
page, 500–900 dpi crops at 22 contested sites.

#### The foot apparatus: **CHECKED ZERO on all eight pages** — a real result

No foot rule and no notes of either layer on any of the eight — not numbered, not asterisk-keyed,
and **not letter-keyed**, which is the layer this book is known to carry (cols 0068 and 0094).
p. 74's foot carries only `PATROL. CXIII.` and the signature `5`; the rest simply end.
**Recorded as a checked zero, not a skip.** With the earlier stints' pages this puts PL 113's
"no conjecture apparatus in these columns" finding on 33 pages across five books — and it is still
a sample, not a licence to claim the volume has none.

#### What the plates found: 21 twin/plate divergences, filed in full

`data/briefs/8950-PENDING-TEI-PATCHES-0024.md` carries every one with its column, both readings,
the dpi it was settled at, and which marker it will take once the patch lands. The headline
numbers: **13 are MIGNE'S defect tidied by Corpus Corporum · 4 are OUR corruption of a clean plate
· 4 are mark-, address- or Hebrew-level.** Two deserve naming here:

- ⭐⭐⭐ **0141B — our twin has DROPPED a printed `non`.** §5.1 below.
- ⭐ **0145A — the plate prints the ADDRESS `VERS 13.`** (no period after `VERS`, a clear 3 at
  900 dpi) where our twin prints `VERS. 12.--`, and the next address on the plate is `VERS. 13-15.`
  So Migne's page repeats the number and **CC silently corrected the first to 12**. This is the
  most substantive normalization I found and **it is invisible from the Latin alone** — brief §4's
  class, at the level of a structural address rather than a word. The English carries the twin's
  `VERS. 12.--`, because the address is copied verbatim rather than translated and a divergence
  there would misalign the two columns' addresses; the patch is the right instrument.

---

### §3 · ⚠⚠ 7a″ — THE VULGATE COLLATION. **This is the deliverable.**

Every one of the 219 marked spans was collated against `sources/vulgate/clementine-flat.txt`, by
book chapter:verse, never from memory. The `✓` addresses in the brief were **read**, not taken as
clearance: three of the fires below are spans the brief ticked against a *different* verse.

#### 3a. FIRED — 16 `[var:]`, every one on a column I read at the plate

| col | chunk | Migne's lemma | Clementine | why it is material |
|---|---|---|---|---|
| 0133D | 0024 | *Et peperci tibi ne peccares in me* | Gn 20:6 *custodivi te ne peccares in me* | a different verb: God **spared** vs God **kept**; the gloss then argues about *in Deum peccatur* |
| 0134C | 0025 | *Visitavit autem **Deus** Saram* | Gn 21:1 *Dominus* | divine name in the verse lemma; the same swap the 0008 and 0011 stints fired at 0102B and 0104D |
| 0136A | 0025 | *__Sumpsit__ panem et utrem aquae* | Gn 21:14 *tollens panem et utrem aquae* | a finite verb for a participle — and **Migne's own lemma two lines above prints *Tollens*** |
| 0136C | 0025 | *projecit puerum subter unam **abietem**, et abiens sedit contra longe quasi **jactus sagittae*** | Gn 21:15–16 *abjecit puerum subter unam **arborum*** … *seditque e regione procul quantum potest **arcus jacere*** | a fir tree for "one of the trees", and a bowshot as a noun |
| 0136D | 0025 | *__Angelus Domini__* | Gn 21:17 *angelus **Dei*** | ⭐ **the gloss's whole argument** — *prius angelum, postea **Dominum** Scriptura pronuntiat* — rests on the word Migne has here and the Vulgate has not. The brief ticked this span against 1Par/2Rg/3Rg, i.e. it matched *elsewhere* |
| 0136D | 0025 | *__Qui__ sitit, veniat ad me et bibat* | Jo 7:37 *__Si quis__ sitit* | a relative for a conditional |
| 0136D | 0025 | *Ecce ego mittam vobis Eliam, qui convertat **corda patrum in filios*** | Mal 4:5 *Eliam **prophetam**, antequam veniat dies Domini* + 4:6 *convertet **cor** patrum **ad** filios* | two verses joined, *prophetam* dropped |
| 0137D | 0026 | *Tentat vos Deus vester, **ut sciat si diligatis eum*** | Dt 13:3 *tentat vos **Dominus** Deus vester, **ut palam fiat utrum diligatis eum an non*** | *Dominus* dropped and the purpose clause rewritten — and the gloss's own tail (*id est, vos scire faciat*) is answering **Migne's** wording |
| 0138A | 0026 | *__Coeperunt__ aedificare **templum** mense secundo, **secunda die mensis**, in monte Moria* | 2Par 3:1–2 *coepit **Salomon** aedificare **domum Domini*** … *mense secundo, **anno quarto regni sui*** | a day of the month for a regnal year |
| 0138C | 0026 | *__adversatrix__ Israel, et **praevaricatrix Juda*** | Jr 3:11 *__aversatrix__ Israel, comparatione **praevaricatricis Judae*** | *aversatrix* (backslider) → *adversatrix* (adversary) is a different word; and the genitive comparison becomes a second nominative |
| 0138D | 0026 | *Fide Abraham **non haesitavit**, cum unicum offerret, in quo acceperat repromissionem* | Hbr 11:17 *Fide **obtulit** Abraham Isaac, **cum tentaretur**, et unigenitum offerebat, qui susceperat repromissiones* | ⭐ the opening words **are not in Hebrews at all** — they echo Rom 4:20 — yet the gloss cites Hebr. XI and builds *Laudandus in constantia offerendi et in fide suscitandi* on them |
| 0142A | 0028 | *Non angustiamini in nobis, **sed** in visceribus vestris* | 2Cor 6:12 *Non angustiamini in nobis : **angustiamini autem** in visceribus vestris* | ⭐ **a polarity reversal**: the Vulgate says they ARE straitened in their own bowels; Migne's *sed* carries the negative across. The gloss (*locum mentis dilatate, ad cogitanda carnalia coarctate*) follows Migne |
| 0145B | 0030 | *Primogenitus Ismaelis Nabajoth, deinde Cedar, et **Abel*** | Gn 25:13 *et **Adbeel*** | a name |
| 0145C | 0030 | *__Ponatur__ coram fratribus meis, et fratribus tuis, et **dijudicent inter nos*** | Gn 31:37 *__pone hic__ coram fratribus meis, et fratribus tuis, et **judicent inter me et te*** | passive for imperative, and the parties generalized |
| 0146A | 0030 | *Qui exaudivit **eam*** | Gn 25:21 *qui exaudivit **eum*** | ⭐⭐ **an agency reversal** (7a mechanism 5): the Vulgate has God hearing **Isaac, who prayed**; Migne's *eam* makes it Rebecca — and Chrysostom's gloss immediately below is about **Isaac's** twenty years of prayer and **Isaac's** age. Read at 900 dpi; *eam* is unambiguous |
| 0147B | 0030 | *Auferetur a vobis regnum Dei et dabitur **gentibus*** | Mt 21:43 *dabitur **genti facienti fructus ejus*** | plural "the Gentiles" for a singular nation bearing fruit — the substitution the gloss's whole Judaei/gentes argument needs |

#### 3b. DIVERGENT AND DECLINED ON THE MERITS — Migne labels the version himself

Per the 0008–0011 stint's §1(b), settled and not re-opened: where Migne announces the version, its
divergence from the Clementine **is the sentence's own subject**, and a `[var:]` restates what the
text already says. **Eight sites, and this range is dense with them:**

- **0134A** `« soror mea est, filia patris mei, **sed** non filia matris meae, »` — Gn 20:12 reads
  *et non filia*. Introduced *in Hebraeo habetur vegam … id est, etiam vere*. Labelled.
- **0134A** `« a patre, et non ex matre; »` — introduced *Alia translatio, apertius*. Labelled.
- **0136C** `« Non videbo mortem pueri mei. »` — Gn 21:16 reads *Non videbo morientem puerum*.
  Introduced *In Hebraeo enim prius hoc scriptum est*. Labelled.
- **0143B** `« Egressus est Isaac, ut loqueretur in agrum, inclinata jam vespera; »` — Gn 24:63
  reads *egressus fuerat ad meditandum in agro, inclinata jam die*. Introduced *In Hebraeo
  legitur*. Labelled.
- **0143D** `« teristrum, »` — introduced *Alia editio*. Labelled.
- **0144D** `« Deficiens mortuus est Abraham, »` — introduced *male in LXX additum est*. Labelled,
  and Migne is condemning the reading in the same breath.
- **0145A** `« in senectute bona senex »`, `« plenus dierum; »`, `« plenus. »` — Jerome comparing
  the Greek codices with his own. Labelled.
- **0145B** `« contra faciem omnium fratrum suorum habitabat, »` (*juxta LXX legimus*) and
  `« coram omnibus fratribus suis occubuit, »` (*verius est quod posuimus*) — Gn 25:18 reads
  *coram cunctis fratribus suis obiit*. Both labelled, and the sentence exists to prefer the second.
- **0145D** `« ludebant »` · `« recalcitrabant: »` (LXX) · `« confligebant filii in utero ejus. »`
  (Aquila) · `« in similitudine navis in superficie ferebantur. »` (Symmachus) — four announced
  versions in one sentence. Labelled.
- **0146C** `« pilosum »` — *Ubi nos « pilosum » posuimus*, Jerome's own rendering against the
  Hebrew *seyr*; Gn 25:25 reads *hispidus*. Labelled.

⚠ **Worked pair inside this range**, which is why the rule earns its keep: at **0136C** the same
paragraph carries **both** classes. *Quod sequitur: « Et projecit puerum subter unam abietem … »* is
offered as **the text** and took the marker; *« Non videbo mortem pueri mei. »* is introduced
*In Hebraeo* and did not. What Jerome is comparing there is the **order** of the clauses; the word
divergences (*abietem*, *jactus sagittae*) are not the sentence's subject and are not disclosed by it.

#### 3c. DIVERGENT AND DECLINED AS IMMATERIAL — the bar is "changes the sense"

Recorded because a findings list alone cannot be told from a report by an agent that never looked.

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 0133D | *Nolite vocare patrem super terram* | Mt 23:9 *Et patrem nolite vocare **vobis** super terram* | word order and a dropped *vobis*; the sense is unchanged |
| 0134A | *Quicunque fecerit … ipse frater meus … et mater.* | Mt 12:50 *Quicumque **enim** … ipse **meus frater** … et mater **est**.* | a dropped connective and an inverted possessive |
| 0135D | *Non filii carnis, sed filii promissionis **aestimabuntur** in semine* | Rom 9:8 *non **qui** filii carnis, **hi filii Dei** : sed **qui** filii **sunt** promissionis, **aestimantur** in semine* | a compressed citation; the future for the present is one letter-cluster and the argument (*qui non filius carnis, sed promissionis*) turns on the nouns, not the tense |
| 0138C | *Caecitas ex parte **contingit** in Israel* | Rom 11:25 *contigit* | present for perfect, **one letter**, and `sources/vulgate/README.md` warns against a call that turns on one letter in this copy |
| 0138C | *et sic omnis Israel salvus **fiet*** | Rom 11:26 *fieret* | the indicative is the ordinary citation form of this verse; not a sense change |
| 0139B | *« Non peperceris, »* | Gn 22:12 *non pepercisti* | a lemma stump; the person and reference are unchanged |
| 0139C | *__Et vocavit__ angelus Domini* | Gn 22:15 *Vocavit **autem*** | a connective |
| 0139C | *Pluit Dominus a Domino* | Gn 19:24 *Dominus pluit … a Domino* | word order inside a three-word fragment quoted to make a grammatical point about *Dominus … a Domino*, which survives |
| 0141D | *Si vobis spiritualia seminavimus* | 1Cor 9:11 *Si **nos** vobis spiritualia seminavimus … metamus **?*** | a dropped pronoun; the closing `?` is Migne's own truncation, and the quotation is unclosed. ⚑ **The 0000–0003 stint DID fire on this verse at 0081A**, where Migne's wording differs much further (*Seminavimus spiritualia vobis*); flagged for the merge so the two are not read as inconsistent |
| 0143A | *Eo tempore Isaac* | Gn 24:62 *Eo **autem** tempore **deambulabat Isaac*** | a lemma stump |
| 0144C | *Lathusim … Laomim … Henoc* | Gn 25:3–4 *Latusim … Loomin … Henoch*, and *et Eldaa* follows | orthographic variants of transliterated names; the truncation is the lemma's own cut |
| 0145C | *anni vitae **Ismael*** | Gn 25:17 *Ismaelis* | declension of a name |
| 0145D | *sed collidebantur in utero parvuli* | Gn 25:22 *Sed collidebantur in utero **ejus** parvuli* | a dropped pronoun in a lemma printed with an ellipsis |
| 0146D | *« Duae gentes et duo populi »* | Gn 25:23 *Duae gentes **sunt in utero tuo**, et duo populi **ex ventre tuo dividentur*** | Bede quotes a clipped pair as one unit; the elision is visible on the page |
| 0139B | *« Spinis peccatorum suorum circumdedit me populus hic »* [n: (Jer. XXXVIII.)] | **the sequence is nowhere in the Clementine**, and Jer 38 does not contain it | an Old Latin or patristic reading with no received text to name — a `[var:]` must give the received reading and I could not locate one. Logged, not marked |

#### 3d. COLLATED AND FOUND TO AGREE — recorded, per 7a″

Exact, or a clean whole-word fragment of, the Clementine: **0133C** *Profectus inde* (Gn 20:1) ·
*Dixitque de Sara* (20:2) · **0133D** *Orabit pro te* (20:7) · *Alias autem* (20:12) ·
**0134A** *Filia patris* (20:12) · *Postquam autem eduxit me Deus de domo patris mei, dixi ad eam*
(20:13, **exact**) · **0134B** *Tulit igitur* (20:14) · *Ubicunque tibi* (20:15, *ubicumque*
orthographic) · *Mille argenteos* (20:16) · *Mirabilis Deus in sanctis suis* (Ps 67:36, **exact**) ·
**0134C** *Orante autem* (20:17) · **0135A** *Circumcidit* (21:4) · *Crevit igitur puer* (21:8) ·
**0135B** *Lac vobis potum dedi, non escam* (1Cor 3:2, **exact**) · *Cumque vidisset Sara* (21:9) ·
*Sedit populus manducare et bibere, et surrexerunt ludere* (Ex 32:6, **exact**) ·
*Ejice ancillam hanc* (21:10) · **0135C** *Dure accepit* (21:11) · **0135D** *Quia semen tuum*
(21:13) · *Tollens panem* (21:14) · **0136B** *Imposuit scapulae ejus* (21:14) · *Abjecit puerum*
(21:15) · **0136D** *Exaudivit autem* (21:17) · **0137A** *Eodem tempore* (21:22) · *Jura ergo*
(21:23) · *Idcirco vocatus est* (21:31) · **0137B** *Abraham vero* (21:33) · **0137C**
*Ne forte tentaverit vos is qui tentat* (1Th 3:5, **exact**) · **0137D** *Tolle filium* (22:2) ·
*Quem diligis* (22:2) · **0138A** *In Isaac vocabitur tibi semen* (21:12, **exact**) ·
*Vade in terram* (22:2) · *Asinum suum ducens* (22:3) · **0138B** *Die autem tertio* (22:4) ·
*Exspectate hic* (22:5) · **0138C** *cum asino* · *plenitudo gentium intraret* (Rom 11:25) ·
*postquam adoraverimus* (22:5) · *Ego et puer* (22:5) · **0138D** *Erunt duo in carne una*
(Gn 2:24, **exact**) · **0139A** *Cumque alligasset* (22:9) · **0139B** *Cornua in manibus ejus*
(Hab 3:4, **exact**) · **0139C** *Dominus dixit ad me* (Ps 2:7, **exact**) · *Dixit Dominus Domino
meo* (Ps 109:1, **exact**) · **0139D** *Arietem inter vepres* (22:13) · *Appellavitque nomen*
(22:14) · **0140A** *Vixit autem Sara* (23:1) · *Et mortua est in civitate Arbee* (23:2) ·
*Surrexit Abraham* (23:7) · *Quod cum audisset* (23:16) · *Confirmatusque est ager* (23:17) ·
**0140C** *Erat autem Abraham senex … Dixitque ad servum seniorem: Pone manum* (24:1–2, with
Migne's own ellipsis) · *Ut non accipias* (24:3) · **0140D** *Posuit ergo* (24:9) ·
*Ex omnibus bonis ejus* (24:10) · **0141A** *Juxta puteum* (24:11) · *Igitur puella* (24:14) ·
*Inclina hydriam tuam* (24:14) · **0141B** *Occurritque ei servus, et ait: Pauxillum* (24:17) ·
**0141C** *Sapientibus et insipientibus debitor sum* (Rom 1:14, **exact**) · *Carnis curam ne
feceritis in desideriis* (Rom 13:14, **exact**) · *Nemo enim unquam carnem suam odio habuit*
(Eph 5:29, **exact**; *unquam*/*umquam* orthographic) · *Protulit vir* (24:22) · **0141D**
*Palearum quoque* (24:25) · *Locus spatiosus* (24:25) · **0142A** *Habebat / Habebat autem*
(24:29) · **0142B** *Non comedam* (24:33) · *Et adjuravit* (24:37) · **0142C** *Veni ergo hodie*
(24:42) · *Prolatisque* (24:53) · *Dedit ea Rebeccae* (24:53) · **0142D** *Et nutricem illius*
(24:59) · *Igitur Rebecca* (24:61) · **0143A** *Qui festinus* (24:61) · *Habitabat* (24:62) ·
**0143B** *Et egressus fuerat* (24:63) · *Egressus es in salutem populi tui* (Hab 3:13, **exact**) ·
**0143C** *In patientia vestra possidebitis animas vestras* (Lc 21:19, **exact**) · *Elevatio
manuum mearum sacrificium vespertinum* (Ps 140:2, **exact**) · *Descendit de camelo* (24:64) ·
**0143D** *Quis est ille homo* (24:65) · *At illa* (24:65) · **0144A** *Qui introduxit eam* (24:67) ·
*Et intantum dilexit eam* (24:67; *intantum*/*in tantum* orthographic) · **0144B** *Spe gaudentes,
in tribulatione patientes* (Rom 12:12, **exact**) · *Abraham vero aliam duxit uxorem* (25:1) ·
**0144C** *Una est columba mea* (Ct 6:8, **exact**) · **0144D** *Deditque Abraham* (25:5) ·
*Et deficiens mortuus est in senectute bona, provectaeque aetatis, et plenus dierum, congregatusque
est ad populum suum. Et sepelierunt eum* (25:8–9, **exact but for one comma**) · **0145A**
*Hae sunt generationes* (25:12, *autem* dropped) · **0145C** *Duodecim principes tribuum suarum*
(25:16) · *Habitavit autem ab Hevila usque Sur, quae respicit Aegyptum* (25:18, **exact**) ·
**0145D** *De Mesopotamia sororem Laban* (25:20) · **0146A** *Perrexitque* (25:22) ·
*Sexagenarius, inquit, erat quando nati sunt parvuli* (25:26, Chrysostom's *inquit* inserted) ·
**0146B** *Qui respondens ait: Duae gentes* (25:23, **exact**) · **0146C** *Jam tempus* (25:24) ·
*Protinus alter* (25:25) · **0146D** *et major serviet minori* (25:23, **exact**) ·
*Factus est Esau* (25:27) · **0147A** *Simplex* (25:27) · *Coxit autem Jacob* (25:29) ·
*Cui dixit Jacob* (25:31) · **0147B** *Juravit Esau* (25:33).

#### 3e. TWO CITATION SIGLA THAT POINT ELSEWHERE — reproduced verbatim, uncorrected

- **0137C** `Unde I Thess. I:` — the words are **1 Thess 3:5**. Migne's chapter number.
- **0139C** `Quod autem dictum est ibidem, c. 9:` introducing *« Dixit Dominus Domino meo »* — the
  verse is **Ps 109:1**, not psalm 9. Migne's own back-reference.
- **0147B** `dicitur Matth. XII:` introducing *Auferetur a vobis regnum Dei* — the verse is
  **Matt 21:43**. Migne's book-and-chapter.
- **0139B** `[n: (Jer. XXXVIII.)]` on a sequence that is in no chapter of Jeremias.

All four ride as printed. Passing a siglum through is not endorsing it (series brief, convention 4),
and this recension's citations are known to be unreliable.

---

### §4 · THE DECLINED LIST — suspect readings, what settles each, and the page it was settled on

**Zero `[sic:]` fired, and the reason is structural, not timid:** every plate defect in this range
is one our twin has already tidied away, so a `[sic:]` would have failed the verbatim-substring
guard and would have accused Migne of the digitization's work. That is the 0008–0011 finding
reproduced. Each candidate below names the page that settled it.

| # | col | the suspicion | settled on | verdict |
|---|---|---|---|---|
| 4.1 | 0133C | `dixit sororem` reads correctly — is the plate tidier than it should be? | **p. 72, 500 dpi** | ⛔ **MIGNE PRINTS `sonorem`.** Suspicion inverted: the tidy word was ours. `[sic:]` owed after the patch |
| 4.2 | 0137C | `pro eo quod est **pro are**` — a split non-word, the Pattern 10 shape | **p. 74, 600 dpi** | ⛔ **OURS.** The plate prints `probare` across a normal line wrap. No marker; a `[sic:]` here would have accused a clean page |
| 4.3 | 0138D | `non **hae sitavit**` — the same split shape, and in a scripture quotation | **p. 74, 900 dpi at the line end** | ⛔ **OURS.** The plate prints `non hæ-` **with the hyphen**. No marker |
| 4.4 | 0141C–D | `Quia **praedicato:**` — a colon where a word should be, and the sentence has no subject | **p. 76, 600 dpi** | ⛔ **OURS.** The plate prints `praedi-cator` across the column break; CC lost the `r` and set a colon. No marker, and the English gains the subject |
| 4.5 | 0145A | `quod **animae** est, deinde quod spirituale` — 1Cor 15:46 has *animale* | **p. 78, 600 dpi** | ⛔ **OURS.** The plate prints `animale`. No marker |
| 4.6 | 0139D | *Aries qui pro Isaac immolatus est, **non putavimus**, sed verus est* — the clause has no object | **p. 75, 200 dpi; twin and plate agree** | **MIGNE'S**, and the abridgment's. Rendered as closely as the words allow, with the supplied English pronoun bracketed: "we have not imagined [it], but it is true." No marker: the type is sound, and 7a⁗ has nothing to quarantine. Logged |
| 4.7 | 0136C | *dixit angelus ad Agar: **Nullum moveat.*** — will not construe | **p. 73, 200 dpi; twin and plate agree** | **MIGNE'S.** Rendered literally, "Let nothing move." Conjecture (*nihil te moveat*) recorded here and **not** in the text. No marker: real words, and Pattern 18's bar is not met — the clause asserts nothing false, it asserts nothing at all |
| 4.8 | 0146A | `Qui exaudivit **eam**` — is the *eam* ours? | **p. 78, 900 dpi** | **MIGNE'S.** `[var:]` fired (§3a) |
| 4.9 | 0145A | `« plenus. »` — the argument wants the bare word, but the plate? | **p. 78, 600 dpi** | ⛔ **MIGNE PRINTS `plenius`.** English renders the plate (§1a rule 3); the crux carries the conjecture that it is an eye-skip from the *plenius* eight words above. `[sic:]` NOT owed — the type is a real word in a real slot |
| 4.10 | 0141A | `electorum Ecclesia` — Gregory's phrase, and it construes | **p. 76, 600 dpi** | ⛔ **MIGNE PRINTS `electorem`.** `[sic:]` owed after the patch |
| 4.11 | 0146C | `[n: (IV Reg. VIII)]` — Edom revolts at IV Reg 8:20, so VIII is right; is it Migne's? | **p. 78, 600 dpi** | ⛔ **MIGNE PRINTS `VII`.** CC corrected him. `[n:]` contents are verbatim from the twin, so the English carries VIII; filed as a patch |
| 4.12 | 0147B | `qua induti` — feminine, agreeing with *vestis* | **p. 79, 600 dpi** | ⛔ **MIGNE PRINTS `quo`.** Pattern 9: gender has no English exponent. No marker, no edit, filed as a patch |
| 4.13 | — | Migne's foot-of-page apparatus for cols 0133–0148 | **pp. 72–79, foot of every page** | **CHECKED ZERO**, all three key shapes. Recorded as a result |

⛔ **Three suspicions I raised and the plate refuted** (4.2, 4.3, 4.4) — all three aimed at
non-words, all three came back **ours**, exactly as addendum A predicts. **And two came back the
other way** (4.1, 4.9): a *real, well-formed word* that reads perfectly was the defective one, and
only the plate could say so. Addendum A's rule holds in both directions here, and it is the reason
nothing was marked on argument alone.

---

### §5 · NEGATION — the hosts, named (tests 2 and 2a)

#### 5.1 ⭐⭐⭐ 0141B — **THE HEADLINE. Our twin has dropped a printed `non`, and the English carries it.**

> **plate (p. 76, 600 dpi):** *Vel aquam praebuit, quia **non** in eo quod credidit, vacua non remansit.*
> **our twin:** *Vel aquam praebuit, quia in eo quod credidit, vacua non remansit.*

Rendered: **"Or she supplied water, because it was not in that which she believed that she did not
remain empty."**

Hosts, named: the first `non` stands on the prepositional phrase *in eo quod credidit* (constituent
negation, fronted before it); the second on *remansit*. Both sit on those hosts in the English.
The result is a self-contradiction against the next sentence (*Mox enim praedicavit quod audivit*),
and **that is the point** — Pattern 7a is unconditional and a printed negation is carried "including
when carrying it makes the sentence contradict itself."

⛔ **This is the one place in the stint where the English asserts something its own Latin column
does not, with no marker able to say so.** A `[cj:]` was weighed and rejected: its fixed form
(`*printed*; read *conjectured*`) cannot express a **deletion**, and the verbatim-in-the-twin guard
would be satisfied only by the *other* `non` in the same sentence, which is gaming it.
**The TEI patch must land before this work ships**, or a reader will meet an English negative with
no Latin exponent and read it as ours. Filed in the patch file, Part D.

#### 5.2 Test 2a fired and checked — negatives on a verb with a quantifier, correlative or pivot near

Six sites in the range meet the trigger. Each host was proved from the sentence's own structure,
not from what reads well:

- **0140C** *Verumtamen **non** super femur, sed sub femore manum ponere jubet.* The `non` stands
  before the verb-adjacent *super femur*, and the **`sed sub femore` correlative proves the host is
  the prepositional phrase, not *jubet***. Rendered "he bids him put his hand **not upon** the thigh
  **but under** the thigh." (This is the 8960 @0740B model case.)
- **0140D** *quia Christo **nullae** reproborum animae conjunguntur.* Quantifier host: *nullae* is
  on *animae*, not on the verb. "no souls of the reprobate are joined."
- **0141C** *Studet enim **non plus** sapere quam oportet sapere.* The comparative *quam* fixes the
  host on *plus sapere*. "studies not to be more wise than it behoveth to be wise."
- **0141C** *quia verbum vitae **non solum** prudentibus, sed etiam stultis praedicatur.*
  `non solum … sed etiam`; host *prudentibus*. Carried as "not only … but also."
- **0142C** *quod in aliquibus verbis **non omnino** conveniunt.* ⚠ The 8960 @0734B shape exactly —
  *omnino* with a negation, where English word order can reverse the scope. *non omnino* is
  "not altogether", i.e. partial disagreement, and English "do not altogether agree" holds the same
  scope. Checked, correct.
- **0147B** *__non solum__ primatus sui honorem amisit, sed et coelestis regni praemium … adipisci
  **non** meruit.* Two negations, two hosts (*amisit* under *non solum*; *meruit*). Both carried.
- **0143A** *quos **non** corporis frigus, **sed** fervor charitatis tenuit.* The `sed` pivot proves
  the host is *corporis frigus*. "whom **not** the cold of the body **but** the fervour of charity
  held."

#### 5.3 Four relocations found and undone in my own pass

Recorded because they are the class that passes every count-based check:

- **0133D** *quae putant homines vel **non esse** peccata* — first drafted "either to be **no** sins",
  which moves the negative onto *peccata*. Restored to "either **not to be** sins."
- **0140D** *jam extraneam **non habebat*** — first drafted "already held **for no** stranger",
  the same relocation. Restored to "**did not** already hold as a stranger."
- **0142B** *si … fructum **non inveniunt*** — first drafted "find **no** fruit". Restored to
  "**do not find** fruit."
- **0142C** *cum veritas narrationis **non** exigit, **nisi** ut …* — first drafted "requires
  **nothing but** that", which merges the `non` and the `nisi` into one word. Restored to
  "**does not require** anything **except** that."

---

### §6 · UNEXPRESSED SUBJECTS SUPPLIED — every one named, with what decided it

The dominant defect class, and in a gloss the antecedent is usually in the lemma above or in the
verse the lemma comes from.

- **0133C–D** *Tacuit uxorem, dixit sororem … certus quod a Deo inviolata servaretur* → **Abraham**
  throughout, from the lemma *« Dixitque de Sara »* and Gn 20:2. *inviolata* is feminine and fixes
  **Sara** as the one kept.
- **0134C** *Orante Filio Patrem, sanatur infecunditas* → "When **the Son** prays the Father"; both
  are printed, nothing supplied.
- **0135C** *Quod **non facit** zelo accensa* → **Sara**, from *zelo accensa* (feminine) and from
  the lemma she speaks.
- **0135D** *per Saram nescientem prophetizatum est cum muliebri animo **mota est*** → **Sara**,
  named in the same clause.
- **0136A** *sed subaudiendum est, **dedit** puerum suum* → **Abraham**. Decided from Gn 21:14
  (*tradiditque puerum*), which is the verse the whole paragraph is arguing about, and from the
  fact that Agar is the one being loaded, not the loader. ⚠ Both readings construe in the Latin;
  named here rather than chosen silently. Rendered "he gave over her boy."
- **0136C** *__Dixit__ enim: Non videbo mortem parvuli mei, et **sedit** contra eum* → **Agar**.
  Decided by the paragraph's own closing sentence — *Mater enim non suam mortem, sed filii deplorat*
  — and by Gn 21:16, where the speaker is Agar. Rendered "**she** said … **she** sat."
  Likewise *Quod sequitur: « Et **projecit** puerum … et **abiens sedit** »* → "**she** cast … going
  away sat." (*abiens* is common gender and decides nothing on its own.)
- **0136D** *__illa__ fontem aspicit* → **Agar**, printed.
- **0139C** *Erat enim in angelo Deus, et ex ejus persona **loquebatur*** → **God**, from the
  preceding clause; the gloss's argument is that the speaker is the Son.
- **0139D** *__non putavimus__, sed verus est* → **first person plural, the commentator**, printed.
- **0142B** *sed **illi** nisi prius obtineant aeterna, **recipere nolunt*** → **the teachers**
  (*doctores*), from *doctores ex temporalibus stipendiis retinere parati sunt* — ⚠ **not** the
  people who are ready to retain them. Decided by *pedes non lavant*, which is the teachers' act
  (Gn 24:32).
- **0143D** *Quae se mox pallio **cooperuit*** → **Rebecca**, from Gn 24:65 and from *Rebecca viso
  Isaac* two clauses above.
- **0146A** *Quaeritur quo **ierit*** → **Rebecca**. Decided from the lemma *« Perrexitque »*
  (Gn 25:22, *perrexitque ut consuleret Dominum*, of Rebecca) and from the paragraph's own close,
  *Rebecca tamen secundum Scripturam Dominum interrogavit*. Rendered "whither did **she** go".
  ⚠ *cum orando allegassent … dormiebant* in the same paragraph is **plural** and is rendered
  "they", which is Migne's own shift and not ours.
- **0146A** *Ne putes … nam viginti annis **mansit** orans* → **Isaac**, named four words later
  (*quot annorum fuerit Isaac*). ⭐ This is the site where Migne's own lemma (*exaudivit **eam***)
  points the other way; the gloss decides it, and the divergence took the `[var:]` at §3a.
- **0146D** *__Praecedit__ Esau … deinde **exit** Jacob* → both printed.

---

### §7 · PUNCTUATION — compared BAND BY BAND, and the only added marks are three Pattern 8b colons

Test 3 run mechanically over all seven chunks: colons, semicolons, question marks, `«`, `»` and `!`
counted per column-anchored band (markers stripped), Latin against English. **Four mismatched bands
in 63, all accounted for, and none of them a supplied or destroyed mark of any other class:**

| band | Migne | English | class |
|---|---|---|---|
| 0135B | *Quaeritur cur antea Sara voluit … aut cur cum matre eum nunc jubet expelli?* | It is asked**:** why did Sara before wish … or why does she now bid him be cast out with his mother**?** | **8b** — the `?` is kept; English cannot end an indirect construction with it |
| 0136A | *Quaeritur quomodo imposuit in humeris puerum tam grandem?* | It is asked**:** how did he lay upon her shoulders a boy so great**?** | **8b** |
| 0146A | *Quaeritur quo ierit, cum nondum essent prophetae … Domini?* | It is asked**:** whither did she go, since there were as yet no prophets …**?** | **8b** |
| 0141C | *(GREG.) Quia praedicato**:** [0141D] auditum Ecclesiae* | Because the preacher adorns the hearing of the Church | ⛔ **one colon FEWER**, and deliberately: the plate prints `praedi-cator` and the twin's colon is Corpus Corporum's (§4.4). The English has no exponent for a colon that is not on the plate |

⚑ **The scan that found these also found six unlicensed marks I had introduced and repaired**: a
supplied colon at 0135A (*Unde cresce* — Migne prints a comma), a colon for Migne's full stop at
0136C (*et statim jungitur.*), a supplied semicolon at 0136D (after *fontem aspicit*), a supplied
colon at 0138B (*tres aetates significat, ante legem*), a supplied semicolon at 0138C (*non errore
impietatis,*) and a supplied semicolon at 0138D (*Deus autem non senescit,*). **Test 3 earning its
place again** — none of them showed in any total.

⛔ **The second `?` of chunk 0030 is Migne's own and is preserved as a direct question**:
*an per aliquem sacerdotem?* → "was it through some priest?" It is not recast, because it needs no
recasting; only the indirect ones take the 8b colon.

⛔ **Not one comma→semicolon sweep was made.** Migne prints semicolons freely in this range (55 in
the seven chunks), so Tobit's narrow exception does not apply and was not invoked.

**Em-dashes: two, both inside `[var: …]` markers** (our own apparatus voice), none in the running
prose. The verifier's corpus note reports 0.3/chunk for the work against a median of 5.3.

---

### §8 · TEST 4 — sections read back against the Latin asking only *does it assert what he asserts?*

Run last, with the counts already clean. Read clean, paragraph by paragraph:

- **0024 entire** (0133C–0134C). The Abimelech chapter. The Sara/Church allegory at 0134B and the
  thousand-pieces-of-silver arithmetic at 0134C both assert what Migne asserts.
- **0025 @0134C–0135A**, the circumcision-and-eighth-day paragraph — the longest single sentence in
  the stint, with four subordinate chains; every clause is rendered and the *octavo die / octava
  aetas* figure survives intact.
- **0025 @0135C**, the Agar/Sara allegory, where three negations run in series
  (*non manere … nec esse … nec … possidere*). Read twice; all three are on their own verbs.
- **0026 @0138B–C**, the Isidore passage of nested quotations. ⚠ **This is the hardest paragraph in
  the range**: seven guillemet spans alternating scripture and gloss with *hoc est* between them,
  and it is easy to render as though the gloss were the quotation. Checked span for span against
  the twin; the alternation is preserved and no span moved.
- **0026 @0139A**, the Abraham/God-the-Father typology. The *Abraham senex … Deus autem non senescit*
  antithesis is carried, including the concessive *sed promissio … quodammodo senuerat*.
- **0027 @0140B**, the *Spelunca* paragraph — one 90-word Gregorian period with a *non aliter …
  nisi* frame. Rendered as one sentence with both negatives in place.
- **0028 @0141B–C**, the Rebecca-as-Church allegory. ⚠ Contains §5.1's site; read three times.
- **0028 @0142C**, Augustine on the evangelists' verbal disagreement — the paragraph whose whole
  subject is *whether words differ*, so a smoothed rendering would be self-refuting. The *non
  omnino conveniunt* and the *non exigit, nisi ut* frames are both literal.
- **0030 @0146A–B**, Augustine's chain of *Forsitan … an … vel … Vel forte* conjectures. Every one
  of the five is a conjecture in the English too; none was hardened into a statement.
- **0030 @0146D**, Bede on the two peoples within us. The *iste minor, ille major* / *plures … mali
  quam boni* inversions are carried without smoothing.

⚑ **Two paragraphs that read more smoothly in English than the Latin does, flagged as suspects and
then cleared:** 0136A's Augustinian arithmetic of Ismael's age (the Latin's *Sed ut … accipiamus*
concessive is genuinely elliptical; the English keeps the ellipsis) and 0139D's
*non putavimus, sed verus est* (§4.6 — **not** cleared, and rendered with a bracketed pronoun
rather than made to read well).

---

### §9 · WHAT THIS STINT OWES DOWNSTREAM

1. **Merge `data/briefs/8950-PLATE-READS-0024.json`** into `data/plate-reads.json` (append, do not
   substitute). Until then `plate-gate.mjs` fails on fifteen of my sixteen `[var:]`.
2. **Apply `data/briefs/8950-PENDING-TEI-PATCHES-0024.md`, Part D first.** 0141B is the one site
   where the English outruns its Latin.
3. **At the merge, reconcile with the 0000–0003 stint on 1Cor 9:11** — it fired at 0081A, I declined
   at 0141D, and the two Migne printings genuinely differ (§3c). The two calls are consistent; they
   should not be swept into agreement.
4. **`[sic:]` markers owed** once the patches land, at eight columns: 0133C (*sonorem*),
   0136D (*par quem*), 0137C (*accdperat*), 0139C (*incanationem*), 0140A (*est.*), 0140C (the
   dropped *sub*), 0141A (*electorem*), 0141C (*caanem*).


---

## STINT 7 — chunks 0031–0035 (cols 0147C–0160A)

*Filed as `cruces-0031.md`; merged verbatim, headings demoted one level. Nothing in it was rewritten — where a later stint corrected it, the correction stands in that stint's section.*


Translated 2026-09-05, one stint, 5 chunks (5,320 Latin words by the frontmatter; **5,151 body words**
with anchors, notes and markers stripped → **7,527 English, 1.46×**).
Bands: **0147C–0160A** — CAPUT XXVI, XXVII, XXVII (cont.), XXVIII, XXIX, XXX, XXXI, XXXII.
`verify-english.mjs 8950` reports **no error on 0031–0035** (the only failures in the work are
`MISSING English chunk` for ranges other stints hold).

**SPAN COUNT — 222, of which 1 OPEN-ENDED.** Counted **paragraph-bounded** in my own five Latin
chunks: **155 closed `« … »` spans + 66 `*…*` spans + 1 unclosed `«` = 222**, matching the brief's
header (`222 spans, of which 1 OPEN-ENDED`) exactly. Per chunk: 0031 27+13+0 · 0032 37+9+0 ·
0033 35+17+1 · 0034 15+10+0 · 0035 41+17+0.

⚠ **And the agreement is NOT the false kind the brief warns of — the three raw-mark asymmetries are
accounted for individually, not netted.** Body marks run **157 `«` / 156 `»`**, and the gap resolves
as: **(a)** an orphan **closing** `»` at 0148D, Migne's (§3); **(b)** a nested line-head `«` inside a
closed span at 0152A, which pairs into its host and is counted once; **(c)** the one genuinely
unclosed `«` at 0154A, Migne's (§3). Chunk by chunk the raw marks are 27/28 · 38/37 · 36/35 · 15/15 ·
41/41 — three chunks unbalanced in two different directions, and each direction has its own cause.
⚑ A DOTALL `«.*?»` over a chunk body runs the 0154A quotation forward across two paragraph breaks and
swallows two spans; counting paragraph-bounded is what keeps that from cancelling against (a).

**Apparatus fired: 6 `[var:]` · 1 `[sic:]` · 1 `[ed:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[nt:]`.**
Columns: `[var:]` 0147D · 0150C · 0152A · 0152B · 0152D · 0160A · `[sic:]` 0152A · `[ed:]` 0148C.
⚑ The Num. 6:27 `[var:]` resolves to band **0152D** in `plate-gate.mjs` because Migne's `[0152D]`
anchor falls inside the quotation it marks; the lemma opens at 0152C. Both columns are on the same
read (p. 81).
**Every one stands on a column read at the plate this session** (`data/briefs/8950-PLATE-READS-0031.json`).

Per-chunk parity (English / Latin), all exact: column anchors 7/14/10/8/11 · `[n:]` notes
14/13/10/14/10 · `«` 27/38/36/15/41 · `»` 28/37/35/15/41 · question marks 0/2/2/3/1 · italic spans
13/9/17/10/17. **Band-by-band punctuation scan (`:` `;` `?` `«` `»` `!` per column anchor, apparatus
stripped): three mismatched bands in five chunks, all `:` +1, all Pattern 8b, and zero elsewhere**
(§7). **Zero em-dashes supplied in 5,151 words** — the one `—` in the files is inside a `[var:]`.

⭐ **THE WHOLE RANGE WAS READ AT THE PLATE**: archive.org `patrologiaecurs04migngoog` on disk,
**PDF page = (column + 11) / 2**, **corner numbers read first on every page** — pp. 79 (147/148),
80 (149/150), 81 (151/152), 82 (153/154), 83 (155/156), 84 (157/158), 85 (159/160). Reads at 200 dpi
full-page with 600 dpi crops at twenty sites and one 1200 dpi crop (§6).
**Foot-of-page apparatus: CHECKED ZERO on all seven pages, all three key shapes** — no numbered
`Forte` notes, no asterisk layer, and no letter-keyed `(a)` notes of the kind found at cols 0068 and
0094. There is no foot rule on any of the seven pages; the columns simply end. A `[cn:]`-anchor grep
over my five Latin chunks (raised letters, per Pattern 19's note that this book's TEI keeps the key
while dropping the note) returns **zero**, which agrees.

Twin/plate divergences are in **`data/briefs/8950-PENDING-TEI-PATCHES-0031.md`**.

---

### §1 · CONVENTIONS — inherited unchanged, and what this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not re-opened**, nor were the earlier stints of
this same work (`cruces-0000.md`, `-0004.md`, `-0008.md`, `-0012.md`, `-0019.md`), which I read before
drafting: `VERS. n.--` passes through verbatim; **the lemma is Englished**; a fragmentary lemma is
rendered as the phrase it stands for; sigla ride as ordinary `[n: …]` notes with Migne's own internal
spacing, contents unanglicized; **the guillemets are the plate's, 1:1**, and their contents are
Englished; `*usque ad*` → ***as far as***, with **no verb and no object ever supplied**; the
`*Historice / Allegorice / Mystice*` tags are translated inside their italic span.

The four conventions the earlier 8950 stints settled were **adopted, not re-derived**:
**(i)** no `[var:]` on a quotation Migne himself labels a rival version — nine instances here, §4.3;
**(ii)** **words follow the plate, punctuation follows the twin** — heavily exercised, patch file
Parts A and C; **(iii)** a Latin gloss giving the **meaning** of a name is Englished inside its span,
a Latin word **mentioned as a word** stays Latin — six of each, §1(b);
**(iv)** unpaired guillemets are mirrored, never tidied, and run both ways — two here, both Migne's, §3.

#### (a) The sense tags, and one the twin has DE-ITALICIZED

`*Moraliter.*` → ***Morally.*** (0148A, 0154B) · `*Mystice.*` → ***Mystically.*** (0149B, 0150C,
0151A, 0159A, 0159D) · `*Allegorice.*` → ***Allegorically.*** (0150B, 0155C) · `*Historice.*` →
***Historically.*** (0150C, 0157A, 0158B). A note inside the tag's italic span stays inside it
(`*[n: (HIPP. mart., …)] Mystice.*` at 0149B, `*[n: (GREG. hom. 14, …)] Mystice.*` at 0159D).

⛔ **0154D is the exception, and it is our source's doing, not Migne's.** The twin prints
`etc. Mystice designat mandatum divinitatis` with **no italics**, where the plate italicizes it like
every other sense-tag in the book (read at 200 dpi, p. 82). Italic-span parity against the twin is a
hard `verify-english` check, so **the English renders it roman** — making 0154D the one place in this
work where a sense-tag is not set off. Filed as a patch; **flagged here because a blind reader will
read it as our inconsistency and it is not.**

#### (b) Which italic Latin is Englished, and which is not — convention (iii) applied to twelve spans

**Englished, because the span gives the MEANING of a name or of a foreign word:**
- `*contrarium*` → ***contrary*** (0148C) — the meaning of *Satana*, and the sentence is
  *unde patet Satanam contrarium interpretari*.
- `*latitudines.*` → ***breadths.*** (0148C) — the meaning of *Rehobot*; and the lemma
  `« Latitudo. »` is Englished « Breadth. » for the same reason, the gloss being about nothing else.
- `*supplantator*` → ***a supplanter*** (0152D) — the meaning of Jacob, and *Supplantavit enim me*
  stands four words above it.
- `*unctus*` → ***anointed*** (0154A) — *χρίστος enim Graece, unctus Latine*, and the argument runs
  *quem Jacob **unxit**, ut Christus signaretur*. Leaving it Latin would break the chain
  *unxit → unctus → Christus*, which is the whole gloss.
- `*domum Dei,*` → ***the house of God,*** · `*nux*` → ***a nut*** · `*amygdalum.*` →
  ***an almond.*** · `*prius.*` / `*prius*` → ***before.*** / ***before*** · `*ante vestibulum,*` →
  ***before the porch,*** · `*superliminare,*` → ***a lintel,*** · `*postes,*` → ***doorposts,***
  (all 0155B) — Jerome's Latin equivalents of Bethel, Luza and *ulam*.
- `*dealbatio.*` → ***a whitening.*** (0158A) — the meaning of Laban, and the next sentence turns on
  it (*Diabolus vero, **cum tenebrosus sit***, transfigurat se in angelum lucis).
- `*ovis,*` → ***a sheep,*** (0158B) — the meaning of Rachel.

**Kept Latin, because the span is a word MENTIONED as a word:**
- `*valle, torrentem*` (0148B) — *Pro **valle, torrentem** habent in Hebraeo*. The 0012 stint's own
  worked shape at 0118B (*mare* pro *occidente* ponitur), and it is Latin-for-Latin: the sentence is
  about which word stands where, not about what either means. ⚑ **The reader loses nothing**, because
  Migne's very next sentence uses both words unitalicised and the English translates them there —
  *habitare potuit in valle, sed in torrente* → "could dwell in a valley, but in a torrent".
- `*pronubo,*` (0149A) — *Pro « Ochozath, » **pronubo,** in Hebraeo habetur « collegium amicorum
  ejus, »*. The identical frame ("for X, Y, the Hebrew has Z"), so it takes the identical treatment;
  it is a rival rendering being named, not a gloss.
- `*castra*` (0159B) — *Ubi **castra** posita sunt, in Hebraeo **mahanaim***. Same frame again. ⚑ Note
  that Gn 32:2 itself glosses *Mahanaim, id est, Castra*, so the Latin word here is the object of the
  remark, not its content.
- **Hebrew and Greek stay untouched**: `*Rehobot*`, `*rabooth,*` (0148C) · `*ulam,*` / `*ulam*` /
  `*olam*` (0155B, four spans) · `*monim*` (0157C) · `*theraphim*` ×2 (0158A) · `*mahanaim*` (0159B) ·
  `*Phanuel*` (0160A) · `χρίστος` (0154A). The guilleted `« Satana; »` (0148C) is likewise the Hebrew
  word and is carried in **roman inside the guillemets**, because italicizing it would add an italic
  span the twin does not have.

⚠ **`*olam,*` at 0155B is the PLATE'S reading; our twin prints `*ulam,*`.** See §2 and the patch file.
Jerome's sentence is *Unde ridicule quidam verbum Hebraicum **olam**, nomen urbis esse putant: cum
**ulam** interpretetur prius* — two forms of one word, which the next sentence explicitly pairs
(*verbo ulam vel olam plenae sunt*). The plate's reading is the harder one and it construes.

#### (c) `usque ad` — 23 formulas, 5 ordinary, decided per occurrence by the `etc.` splice test

**Formula (italic, immediately following an `etc.`), 23×**, all → ***as far as***, with **no verb, no
object and no antecedent supplied anywhere**: 0147C · 0147D · 0148A · 0148D · 0149A ×2 · 0150C ·
0151B · 0151C · 0154A · 0156C ×3 · 0156D ×3 · 0157A · 0157B · 0159A · 0159D ×2 · 0160A.

**Ordinary Latin (5×), none italic, none after an `etc.`, each rendered by sense:**

| col | Latin | English |
|---|---|---|
| 0147C | *A tempore Christi **usque ad** Constantini tempora* | "**until** the times of Constantine" |
| 0154C | *a terra **usque ad** coelum, a carne **usque ad** spiritum* | "from earth **to** heaven, from flesh **to** spirit" (two in one clause) |
| 0156B | *obediens Patri **usque ad** mortem* (Phil 2:8's words) | "obedient to the Father **unto** death" |
| 0157C | *sic **usque ad** decem vices mutata est conditio* | "**up to** ten times" |

⚑ **0156B is addendum D's trap and it was not swept**: the words are Philippians' own, four lines
below a formula at 0156C, in a paragraph otherwise thick with the abridgment.
⚠ Also present and NOT this word: 0151B *eum **usque in finem** bonis operibus placare* → "unto the
end", and 0148C *et **quousque** verae intelligentiae aqua redeat* → "until", which is the plate's
reading against the twin's non-word *quosque* (§2).

⛔ **0156D's formula prints as `*usque ab*` ON THE PLATE**; our twin reads `*usque ad*`. Read at
600 dpi, p. 83. The tail is unmistakably the formula — it follows `etc.,`, it is italic, and it names
the resumption (*ad unum ergo tendendum*). **Rendered as the formula, "*as far as*"**, with the plate
reading in the patch file. ⛔ **No `[sic:]`**: the marker's content must be verbatim in the twin, and
the twin prints the good word. This is the mirror of the 0019–0023 stint's `uque ad` at 0131C, where
the twin was defective and the plate clean — the same class, running the other way.

#### (d) The vocabulary axes — every instance, with the instrument checked before reporting

- **`gentes` family — 20 real occurrences, split by the axis.** **Gentiles** where the
  *Judaei*/*gentes* opposition is live and usually explicit in the same clause: 0149D *populus
  **gentilium*** and *Jacob **gentilem** populum significat* (against *populum Hebraicum*); 0150A
  *electi de **gentibus*** and *praesciens populum **gentium** multo meliorem* (against *populum
  Judaeorum*); 0150B *mater gratia **gentiles** fidem avide suscipientes* (against *Judaei*) and
  *confessionem peccatorum **gentilis** populi*; 0150C *Per unum peccatorem populum **gentium**, per
  nonaginta novem justos, **Judaeos*** ; 0151A *id est **gentiles** conversi*; 0152A *cum intraverit
  plenitudo **gentium**, tunc omnis Israel* and 0153A the same in the Rom 11 quotation; 0153A
  *relicta **Judaea**, transirent ad **gentes***; 0153D *relictis parentibus … id est **Judaeis** …
  abiit in **gentes***; 0158B *Ecclesiam ex **gentibus** conjunxit*; 0159A *tam **Judaeos** quam
  **gentiles***; 0159C *paries de **gentibus**, ei qui ex **Judaeis***.
  **Nations** where the sense is plainly generic — the axis's own named exception: 0148D
  *baptizantes omnes **gentes** in nomine Patris* (Mt 28:19, the axis's own exemplar); 0155A Ps 2:8
  *dabo tibi **gentes** haereditatem tuam*; 0156B *Christus diversarum **gentium** varietatem sibi
  congregavit*.
  **Singular `gens` of a people → nation**: 0148C *apud alienigenam **gentem**  puteos fodit* → "among
  a foreign nation".
  ⚑ **Instrument checked before reporting**, per the series brief: a raw `gent` grep returns 22 hits
  and **two are false** — *intelli**gent**iae* (0148C) and *in**gent**i crimine* (0156C).
- **`natio` — ZERO in this range.** ⚑ A raw `natio` grep returns **six** hits and every one is
  *peregri**natio**ne* (0148C), *ve**natio**ne* ×2 (0150A, 0150B), *alie**natio*** (0152B),
  *machi**natio**nem* / *machi**natio**ne* (0153B, 0153C). There is no `natio` here at all.
- **`turba` — ONE, and it is a real one**: 0149A *amicorum **turbam*** → **"the crowd of friends"**,
  per the axis. ⚑ Instrument checked: it is the only `turb-` in 5,151 words, and there is no
  *turbare* / *perturbatio* in the range — the reverse of the 0019 stint's finding, where nine
  `turb-` hits were *every one* the verb. **So this range exercises the `turba` side and the 0019
  range exercised neither.**
- **`multitudo` ×4 → multitude** in all four (0151A ×2, 0151D, 0159A). The `turba`/`multitudo` pair
  is genuinely exercised here, in one work and one book, and was kept 1:1.
- **`daemonium` — zero; `daemonum` ×1 → demons** (0148A). **`diabolus` ×5 → devil** (0154C, 0158A ×2,
  0158B, 0158B). **`Satanas` → Satan** (0148C the Hebrew word and its accusative, 0159B *post
  Satanam*). ⚠ **0149B prints `zabuli`**, a late form of *diabolus*; rendered **"of the devil"** per
  the axis, no italics and no crux-worthy defect (Pattern 9 — an attested medieval spelling).
  **`ethnicus`, `gentilitas` — zero.**
- **`mysterium` ×1 → mystery** (0151C *prophetiae **mysteria*** → "the mysteries of prophecy");
  **`sacramentum` ×9 → sacrament** (0147C, 0147D, 0148B, 0151A ×2, 0152A, 0152C, 0155D, 0159D). The
  1:1 pair is not exercised in a single phrase here, but both words occur and neither was varied.
- **The commentator's own voice is not archaised** (`dicit` / `ait` / `dicat` → "says", never
  *saith*); `-est` / `-eth` forms appear **only** inside quoted scripture and in second-person
  singular address.
- **Pattern 17.** Singular → *thou*: 0150A *« Sume arma [tua], »* → "Take thy arms"; 0150D
  *« tam cito invenire potuisti, fili mi? »* → "couldst thou find it so quickly, my son?"; 0151D
  *« Det tibi Deus de rore coeli, »* → "God give thee"; 0152A *erit benedictio **tua***; 0152B
  *« Vives in gladio »*, *« Et servies fratri tuo minori »*, *« cum excutias et solvas jugum ejus de
  cervicibus **tuis** »* and the gloss's *deposueris · non servies · vocaberis*; 0152D *« Et fratri
  tuo servies »*; 0153C *Si diligis vitam meam, mitte eum*; 0155A Ps 2:8 *« dabo **tibi** … possessionem
  **tuam** »*; 0158B *« Obliviscere populum **tuum** »*; 0158D *« Timui ne violenter auferres filias
  **tuas** … furti me arguis »* and *non **tibi** manifestavi, ne … superares*; 0159D
  *« appellabitur nomen **tuum** »*.
  Plural → *you*: 0150A *« Si custodieritis mandata mea, dabo **vobis** pluvias »*; 0150C
  *« Ut quid justificatis **vos** coram hominibus »*; 0154C *« In quacunque die comederitis,
  aperientur oculi **vestri** »*; 0153B *poterit esse quod ambo **eritis** interfecti*.
  ⚑ **0153B is worth naming because it mixes them inside one sentence, as the Latin does**:
  *Si invadat **te**, poterit esse quod ambo **eritis** interfecti* → "If he assail **thee**, it may be
  that **you** shall both be slain." Rebecca turns from Jacob to the two brothers mid-clause, and
  Pattern 17 is what makes that visible.
  ⚑ Three plural imperatives are rendered as bare English imperatives, which mark no number, per the
  0019 stint's ruling that Pattern 17 gives *you* and never *ye*: 0148A « Declinate a me, maligni, »
  → « Depart from me, O malignant ones, »; 0152C « Ponite nomen meum super filios Israel. » → « Put my
  name upon the children of Israel. »; 0158C « Surgite postquam sederitis. » → « Rise up after you
  have sat. » *Depart ye* / *Put ye* / *Rise ye* were drafted and withdrawn.

#### (e) Heads and frontmatter

`CAPUT XXVI.` → `CHAPTER XXVI.` · `CAPUT XXVII.` → `CHAPTER XXVII.` · `CAPUT XXVII. (cont.)` →
`CHAPTER XXVII. (cont.)` · `CAPUT XXVIII.` → `CHAPTER XXVIII.` · `CAPUT XXIX.` → `CHAPTER XXIX.` ·
`CAPUT XXX.` → `CHAPTER XXX.` · `CAPUT XXXI.` → `CHAPTER XXXI.` · `CAPUT XXXII.` → `CHAPTER XXXII.`
**Numerals mirror the plate**, per the corpus measurement, and all eight heads carry their terminal
period on the plate as in the twin (read at 200 dpi; `CAPUT XXXI.` re-checked at 600 dpi).
**Frontmatter copied VERBATIM from each Latin chunk, field order included**, `words:` figures (which
count the Latin) unaltered. Chunks 0034 and 0035 open with a **bare column anchor on its own line**
(`[0155C]`, `[0157C]`) between the head and the first paragraph; mirrored as its own line.

---

### §2 · ⭐⭐ THE HEADLINE FINDING — our twin has silently NORMALIZED FOUR VERSE ADDRESSES

**This is the largest thing in the stint, it is a class rather than four accidents, and nobody could
have flagged any of it from the Latin alone.**

| col | twin prints | plate prints | the lemma's own verse |
|---|---|---|---|
| 0150B | `VERS. 6-13.` | **`VERS. 5-13.`** | Gn 27:6, *Dixit filio suo Jacob* |
| 0150C | `VERS. 15-19.` | **`VERS. 16-19.`** | Gn 27:15, *Et vestibus Esau* |
| 0150D | `VERS. 20-24.` | **`VERS. 19-24.`** | Gn 27:20, *Quomodo, inquit, tam cito* |
| 0155D | `VERS. 11-16.` | **`VERS. 11-19.`** | Gn 29:11, *Osculatus est eam* |

All four read at 600 dpi with the page's corner numbers checked first (pp. 80 and 83). The digits are
not marginal: on p. 80 the `5` of `5-13` and the `9` of `19-24` are unambiguous against the adjacent
`3-5` and `16-19` set in the same fount on the same page.

⭐ **The direction is uniform, and that is what makes the class credible rather than four misreadings.
In every one of the four, Migne's range OVERLAPS its neighbour or skips a verse, and the twin's is
the tidy, non-overlapping one.** On p. 80 the plate's sequence runs `1,2 · 2 · 3-5 · 5-13 · 14 ·
16-19 · 19-24 · 25,26`; our twin's runs `1,2 · 2 · 3-5 · 6-13 · 14 · 15-19 · 20-24 · 25,26`. On p. 83
the plate runs `11-19 · 16-19`; the twin runs `11-16 · 16-19`. And in three of the four the twin's
number is also the *righter* one against the lemma it heads — which is exactly what an editorial tidy
looks like from the inside.

**The English renders the plate in all four**, on the 0019–0023 stint's ruling at `VERS. 27-19`
(cruces-0019 §2), and for its three reasons unchanged: the locked "plate where read" rule; a verse
address is **content**, not a mark, so the punctuation-follows-the-twin carve-out does not reach it;
and Migne's own printing is not ours to tidy — the series brief's rule for a verse number out of
sequence (Jude printing VERS. 23 before VERS. 21) is this case exactly.

⛔ **No `[sic:]` was available on any of them** — the marker's content must appear verbatim in the
Latin twin, and the twin prints the other numeral. The patch is what makes the two columns agree.

⚑ **What a later stint should carry forward: the cheap detector is an OVERLAPPING or verse-skipping
range in the plate's own sequence.** Our twin never leaves one. Where the twin's addresses partition
the chapter neatly and Migne's neighbours in this book do not, suspect a tidy and read the leaf.
⚠ **Nine other addresses in my range were checked against the plate and AGREE** — 0147C `1-7`,
`8-11`, `12,13`; 0148A `14-16`; 0148B `17`, `18,19`; 0148C `20,21`, `22-25`; 0148D `26-31`; 0149A
`32-35`; 0149B `1,2`; 0149D `2`; 0150A `3-5`; 0150C `14`; 0152A `33-35`; 0152D `36-39`, `40`; 0153A
`41`; 0153B `42`; 0153C `1-9`; 0153D `10`; 0154A `11`, `12`; 0154D `13-15`; 0155A `16,17`, `18`,
`19-21`; 0155B `22`; 0155C `1-10`; 0155D `16-19`; 0156A `20-35`; 0156D `26`, `14-31`; 0157B `32-43`;
0157C `1-11`; 0157D `12`, `13-31`; 0158A `32-39`; 0158D `40-45`, `46-52`; 0159A `53,54`, `55`; 0159B
`2-6`, `7-9`; 0159C `10`, `11-19`, `20-27`; 0159D `28,29`; 0160A `30-32`. **Forty-six checked, four
divergent** — the negatives are what size the finding.

---

### §3 · THE TWO UNPAIRED GUILLEMETS — both MIGNE'S, both plate-read, neither tidied

The brief warns that an open-ended span "may be SHORT of what Migne quotes — read it at the line."
Both were collated at the line, not from the brief.

| col | our twin | the plate | verdict |
|---|---|---|---|
| **0148D** | an orphan **CLOSING** `»`: *…baptizantes omnes gentes in nomine Patris, et Filii et Spiritus sancti [n: (Matth. XVIII)]. » Puteos Abraham,* | the same: `Spiritus sancti (Matth. xviii). » Puteos Abraham,` — **no opening mark anywhere before *baptizantes*** | **MIGNE'S.** Reproduced unopened (Pattern 5's corollary). Read at 600 dpi, p. 79. |
| **0154A** | an unclosed **OPENING** `«`: *« Caput enim viri Christus, caput Christi Deus [n: (I Cor. XI.)]* running to the paragraph's end | the same, and the paragraph ends there: `« Caput enim viri Christus, caput Chrisri Deus (I Cor. xi.)` | **MIGNE'S.** Reproduced unclosed. Read at 600 dpi, p. 82. |

⭐ **0154A is the stint's one open-ended span, and the brief's warning does NOT apply to it: the plate
stops exactly where the twin stops.** The paragraph ends on the siglum, mid-quotation; the next
paragraph opens `VERS. 12.--`. So the brief's rendering of the span is complete, not short. **The
`[n: (I Cor. XI.)]` sits inside the unclosed quotation and is reproduced there.**

⚠ **Both directions occur in one stint, which is the corollary the 0008 and 0019 stints drew from
opposite ends and it is now confirmed a third time**: 0148D is a close without an open, 0154A an open
without a close, and **only the plate separates "Migne's" from "our twin's".** Six further sites in
this range are the other kind — marks our twin **supplies** or **drops** — and every one of those is
OURS (patch file, Part C1/C2). ⛔ **Nothing was repaired**; guillemet parity is checked against the
twin, so the English mirrors the twin at all eight sites.

⚑ **Migne's repeated line-head `«` is dense here — thirteen sites across the five chunks, and our
twin drops every one** (patch file C2). The class the 0000 stint identified; it is not two accidents
in this book, it is his normal practice at a turned line.

---

### §4 · ⚠⚠ 7a″ — THE VULGATE COLLATION. **This is the deliverable.**

Every marked span in these five chunks was collated against `sources/vulgate/clementine-flat.txt` by
grepping the verse, cited **book chapter:verse** — never from memory and never from the brief's
pre-scan. **The spans that AGREE are listed in §4.4**, because a list of divergences alone cannot be
told apart from a report by an agent that only chased the ⚠ marks.

#### 4.0 ⛔ THE COMPARAND WAS CHECKED FIRST — the errata class, and what it did and did not touch here

`sources/vulgate/README.md` records that our 2005 *Quasimodo* copy carries typos which **manufacture
divergences shaped exactly like real ones**, and that two were found in a single column of this very
work. **Every one of my six `[var:]` was tested against that class before it was fired**, by the
README's own cheap control — grep the *phrase*, not the word, and look for a correctly-spelled twin
elsewhere in the file:

| marker | could our copy have manufactured it? | control run |
|---|---|---|
| 0147D *Seminavit* / **Sevit** | **No.** Not a single-letter shape — two different verb stems. | *sevit* occurs once (this verse), *seminavit* three times elsewhere; the frequency is the *trienem* shape, **but a slip cannot turn *seminavit* into *sevit***, and the Douay's "sowed" confirms a *serere* form is the Clementine's text. |
| 0150C *Ut quid justificatis* / **Vos estis qui justificatis** | **No.** Three words for two. | `justificatis vos` occurs exactly once in the whole file, at Lc 16:15, in the form quoted. |
| 0152A *et benedictus est* / **et erit benedictus** | **No.** A whole clause. | `erit benedictus` occurs once, at Gn 27:33, well-formed; and **Migne prints the Vulgate's own form himself at 0152D**, eleven lines below. |
| 0152B *Et servies fratri tuo minori* / **et fratri tuo servies** | **No.** Word order plus an added word. | **Migne prints the Vulgate's form himself at 0152D.** |
| 0152C *Ponite* / **Invocabuntque** | **No.** A whole clause. | the formula *invocatum sit / est nomen meum super* recurs twice elsewhere in the file, so the verb family is not a transcription artifact. |
| 0160A *Vidi Dominum* / **Vidi Deum** | **No.** A lexical substitution, not a letter. | `facie ad faciem` occurs **six** times in the file; Gn 32:30 reads *Deum*, and — ⚑ **the `⚑ MATCHES ONLY ELSEWHERE` shape in miniature** — Jdc 6:22 reads *vidi angelum **Domini** facie ad faciem*, which is where Migne's word does live in the Clementine, in another book. |

⭐ **Two of the six carry their control INSIDE MIGNE'S OWN COLUMN** (0152A and 0152B, where he prints
the Vulgate form of the same verse at 0152D), which is stronger evidence than any grep: the
divergence is demonstrably a fact about his two settings of one verse, not about our comparand.

#### 4.1 The six `[var:]` fired — all on columns read at the plate this session

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| **0147D** | « **Seminavit** autem Isaac in terra illa, » | **Gn 26:12** ***Sevit** autem Isaac in terra illa* | ⭐⭐ **7a″'s own case: the exposition uses the lemma's word and not the Vulgate's.** Jerome's very next clause is *Licet in aliena terra **seminaverit** Isaac* — the gloss is built on Migne's verb. Plate-confirmed (p. 79). |
| **0150C** | « **Ut quid** justificatis vos coram hominibus, » cited *Luc. XVI* | **Lc 16:15** ***Vos estis qui** justificatis vos coram hominibus* | a whole clause replaced, and it changes the sentence type: Christ's identification of the Pharisees becomes a reproach put as a question. The citation is correct. Plate-confirmed (p. 80). |
| **0152A** | « **Et benedixi eum, et benedictus est.** » | **Gn 27:33** ***benedixique ei, et erit benedictus*** | construction and **tense**: the perfect for the future, in the sentence the gloss calls *confirmabat benedictionem*. ⭐ **And Migne prints the Vulgate's future himself at 0152D** — *ait, « Benedixi, et **erit benedictus**. »* — in the very paragraph that reads the blessing as prophecy (*per spiritum prophetiae*). Two settings of one verse, eleven lines apart, and the argument turns on the futurity. |
| **0152B** | « Et servies fratri tuo **minori**, » | **Gn 27:40** *et **fratri tuo servies*** (no *minori*) | ⭐ **the added word is the allegory.** Migne glosses it *id est, populo Christiano*, and *minori populo Christianorum* stands nine lines above. And he prints the bare Vulgate form at 0152D. |
| **0152C–D** | « **Ponite** nomen meum super filios Israel. **Ego Dominus** benedicam **eos**. » | **Nm 6:27** ***Invocabuntque** nomen meum super filios Israel, **et ego** benedicam **eis*** | ⭐ **the gloss rests on the imperative.** Migne introduces it *in Numeris **ad Mosen et Aaron sacerdotes** dicitur*, and draws from it *Sacerdotis est benedicere, Dei effectum tribuere* — a command to the priests, which the Vulgate's future indicative about the priests is not. |
| **0160A** | « Vidi **Dominum** facie ad faciem? » | **Gn 32:30** *Vidi **Deum** facie ad faciem* | ⭐ **it sits at the pivot of the *quaestio*.** Gregory's question is built on the clash with *« Deum nemo vidit unquam »* two clauses earlier — which Migne quotes with **Deum** — so his own paragraph sets the two words side by side and the verbal clash the argument needs is blunted by the lemma. |

#### 4.2 DIVERGENT and DECLINED ON THE MERITS — every one on a read column, so the marker was available

**These are the ones a blind reader will find, so each says why it was refused.**

- **0148A « Ob haec invidentes, »** — **Gn 26:14** *Ob **hoc** invidentes ei Palaestini*. One
  demonstrative, neuter plural for neuter singular; no English exponent worth the name ("for these
  things" / "for this") and nothing in Isidore's Christ-and-the-wells allegory rests on it. Declined.
- **0148A « Puteos et obstruxerunt, »** — **Gn 26:15** *omnes **puteos**, quos foderant servi patris
  illius Abraham, illo tempore **obstruxerunt***. A clipped lemma with the two ends spliced by *et*;
  convention 3's own shape. Declined, and the English renders the splice as printed.
- **0148A « Declinate a me, maligni, et scrutabor mandata Domini. »** cited *psal. CXVIII* —
  **Ps 118:115** *…et scrutabor mandata **Dei mei***. A divine name for a divine name, and the
  possessive dropped. **Refused on the merits**: Gregory adduces the verse for the *turning away of
  the malignant*, and neither *Domini* nor *Dei mei* does any work in the sentence. Firing here would
  spend the marker on noise. ⚠ The nearest of this stint's declines to the line **in the fired
  direction** — a real, two-word difference in a directly adduced proof-text — and it is recorded at
  length for that reason.
- **0148C « Ipse aedificavit Niniven »** — **Gn 10:11** *…egressus est **Assur**, et aedificavit
  Niniven, **et plateas civitatis***. Migne's *Ipse* stands for *Assur*. **Declined because it is not
  offered as the text**: he introduces it *Unde probatur illud quod **supra cap. X dictum est***, so
  it is the gloss's own back-reference to its own earlier exposition, not a proof-text. The stint 1
  precedent at 0081A, exactly.
- **0149C « Vade ad gregem et affer mihi duos haedos optimos; »** — **Gn 27:9** *et ***pergens** ad
  gregem*, affer mihi duos haedos optimos*. An imperative for a participle. Identical sense, and
  Hippolytus's point is only that Rebecca commands. Declined.
- **0149D–0150A « Si custodieritis mandata mea, dabo vobis pluvias temporibus suis, »** —
  **Lv 26:3–4** *Si **in praeceptis meis ambulaveritis, et** mandata mea custodieritis, **et feceritis
  ea**, dabo vobis pluvias temporibus suis*. Two clauses cut out of the protasis. **Declined**: Migne
  introduces it with a bare *sed:* and no citation at all, closes it with *etc.*, and the omitted
  clauses are not what he adduces it for (*quae pertinent ad carnis delicias*). A signalled
  abridgment.
- **0150A « Jacob simplex habitabat in tabernaculis, »** — **Gn 25:27** *Jacob **autem vir** simplex
  habitabat in tabernaculis*. A connective and a noun. Nothing rests on either. Declined.
- **0151D–0152A « Convertentur ad vesperam … et **circumibunt** civitatem. »** cited *psal. LVIII* —
  **Ps 58:7 and 58:15** (the Clementine prints the verse twice, identically) *…et **circuibunt**
  civitatem*. **Two attested forms of one verb** (*circumeo*), not a divergence; recorded as
  orthography, like *coelum* for *caelum*.
- **0152A « Aperuerunt ora sua, sicut comedens in abscondito. »** introduced *Et alibi:* — ⛔ **no
  Vulgate verse carries these words.** The nearest are **Ps 21:14** *Aperuerunt super me os suum,
  sicut leo rapiens et rugiens* and **Hab 3:14** *sicut ejus qui devorat pauperem in abscondito*; the
  sentence is a conflation of the two. **`[var:]` has no single received reading to name**, and Migne
  gives no citation. Declined and recorded — the 0019 stint's *Psal. X* precedent.
- **0152C « magnum sacramentum in Christo et in Ecclesia. »** — **Eph 5:32** *Sacramentum hoc magnum
  est, ego autem dico in Christo et in Ecclesia*. The verse's own words re-jointed into Migne's own
  clause (*quod est …*), not a quotation offered as the text. Declined.
- **0153A « plenitudo gentium intraverit, omnis Israel salvus fiet »** cited *Rom. XI* —
  **Rom 11:25–26** *donec plenitudo gentium **intraret**, et sic omnis Israel salvus **fieret***. The
  moods are re-jointed into the host *ut cum* construction. Declined; the same words appear
  unquoted at 0152A in a third form (*intraverit … salvus erit*), which is Migne paraphrasing himself.
- **0153A « dixit Esau in corde suo, »** — **Gn 27:41** *dixit**que** in corde suo* (the subject is
  implicit). Migne's second lemma supplies *Esau* and drops the enclitic. **Declined as a clipped
  lemma with the subject supplied for the address** — the 0019 stint's *« Vocavit autem Agar. »*
  shape; and Diodorus's gloss is entirely about the *heart*, not about who. Recorded.
- **0153C « Dixit quoque Rebecca, »** — **Gn 27:46** ***Dixitque** Rebecca ad Isaac*. A connective and
  a dropped prepositional phrase. Declined.
- **0153D « Profectus vero. »** — ⛔ **no Vulgate verse.** Gn 28:5, which the lemma heads, reads
  *Cumque dimisisset eum Isaac*; the nearest words are **Gn 29:1** *Profectus **ergo** Jacob*, which
  is the next chapter's opening and this same stint's own lemma at 0155C. Migne uses it as a
  catchword. `[var:]` has no received reading to name. Declined and recorded.
- **0154A « Caput enim viri Christus, caput Christi Deus »** cited *I Cor. XI* — **1 Cor 11:3**
  ***omnis** viri caput, Christus **est** : **caput autem mulieris, vir** : caput vero Christi, Deus*.
  Migne drops *omnis* and *est*, reorders the first limb, and cuts the *mulieris* clause out of the
  middle. **Declined**: the omission is an abridgment of a clause Isidore has no use for — his
  argument needs only *caput Christi Deus*, which stands verbatim — and *enim* shows the quotation
  has been jointed into his own sentence. ⚠ **This is the open-ended span (§3)**, so the reader meets
  it unclosed; recorded prominently for that reason.
- **0154C « In quacunque die comederitis, aperientur oculi vestri »** cited *Gen. III* — **Gn 3:5**
  *quod in **quocumque** die comederitis **ex eo**, aperientur oculi vestri*. *dies* is common gender,
  so *quacunque* is not an error; *-cunque* for *-cumque* is Migne's orthography throughout; and the
  dropped *ex eo* is what the *etc.*-less clip cuts. Declined on all three counts.
- **0154C « Vidit in somnis, »** — **Gn 28:12** *Vidit**que** in somnis*. An enclitic, in a second
  lemma picking up the verse lemma four paragraphs above (which carries it). Declined — the 0019
  stint's *Percusseruntque* shape, running the other way.
- **0155A « lapidem quem capiti supposuerat »** — **Gn 28:18** *tulit lapidem quem **supposuerat
  capiti suo***. Word order and a dropped possessive. Declined; Augustine's *quaestio* is about the
  anointing, not about whose head.
- **0155B « quam terribilis est locus iste, »** — **Gn 28:17** *Quam terribilis est, **inquit**, locus
  iste!* A parenthetic speech-tag dropped, and Migne quotes it under *Ab eo quod dictum est* — i.e.
  expressly as a report of what was said, where a speech-tag is redundant. Declined.
- **0155B « Et lapis iste, vocabitur domus Dei, »** — **Gn 28:22** *et lapis iste, **quem erexi in
  titulum**, vocabitur Domus Dei*. An inner clause cut with no ellipsis printed. **Declined**: the
  cut clause is the one Migne has just expounded at length at 0155A (*Quod « erexit » Jacob,
  « lapidem quem capiti supposuerat » in titulum*), so nothing is concealed and nothing rests on it.
- **0156D « Zelabat Rachel sororem suam. »** cited *infra XXX* — **Gn 30:1** *Cernens autem Rachel
  quod infecunda esset, **invidit sorori suae***. A different verb and a different construction
  (accusative for dative); probably the Old Latin. ⚠ **The nearest of the declines to the line in this
  chunk, and it is refused on the 0019 stint's own bar: the sense is identical** — *zelare* and
  *invidere* both give "was jealous of / envied her sister" — and the argument that would rest on it
  is inside the abridgment's cut, so it cannot be shown to rest on it. Recorded.
- **0158C « Juxta consuetudinem feminarum accidit mihi. »** — **Gn 31:35** *quia juxta consuetudinem
  feminarum **nunc** accidit mihi*. One adverb. Declined.
- **0158D « Ut oscularer filios meos ac filias. »** — **Gn 31:28** *ut oscularer filios meos **et**
  filias*. A connective. Declined.
- **0158D « Dixitque Jacob fratribus suis: Afferte lapides. »** — **Gn 31:46** *dixit**que** fratribus
  suis : Afferte lapides* (the subject is implicit). Migne supplies *Jacob*, and does so **in a
  sentence whose whole point is that Scripture calls kinsmen brethren** — so the supplied name is
  serving his argument, not replacing the text's. Declined and recorded.
- **0158D « Die noctuque aestu urebar, et gelu. Fugiebat somnus ab oculis meis. »** — **Gn 31:40**
  *die noctuque aestu urebar, et gelu, **fugiebatque** somnus ab oculis meis*. An enclitic, and a full
  stop where the Vulgate has a comma. Both declined (the mark is Migne's and rides as printed).
- **0159A « Juravit Jacob, »** — **Gn 31:53** *Juravit **ergo** Jacob*. A connective. Declined.
- **0160A « et benedixit eum, vocavitque Jacob nomen loci illius Phanuel, dicens, »** —
  **Gn 32:29–30** *et benedixit **ei in eodem loco**. Vocavitque Jacob nomen loci illius Phanuel,
  dicens*. Migne joins the two verses, cuts *in eodem loco*, and puts *eum* for *ei*. **Declined**:
  he introduces it *Illud quoque quod sequitur*, i.e. expressly as a continuation being summarized,
  and the gloss is entirely about the name *Phanuel*, which is verbatim.
- **0160A « Nemo videbit faciem meam; »** attributed only to *Veritas* — **Ex 33:20** reads *Non
  poteris videre faciem meam : non enim videbit me homo et vivet*. Migne's clause is a conflation of
  that verse's two limbs. **Declined**: he prints no citation at all, so a `[var:]` would have to name
  a verse he does not cite — the 0019 stint's *Psal. X* precedent again. ⚠ **Recorded at length
  because the clause is the pivot of Gregory's *quaestio***, and because the neighbouring lemma in the
  same sentence DID take a marker (§4.1, 0160A): the two were weighed together and separated on
  whether Migne names the source.
- **0160A « Tunc cognoscam sicut et cognitus sum. »** cited *I Cor. XIII* — **1 Cor 13:12** *tunc
  **autem** cognoscam sicut et cognitus sum*. One function word, and the citation is correct.
  Declined.

#### 4.3 Divergences Migne LABELS as a rival version — no `[var:]` by construction

Convention (i), settled by the 0008 stint. **Nine instances in this range**, which is the second
heaviest concentration in the work after the 0095–0106 block's twelve:

- **0147D « Invenit in illo anno centuplum aestimatum. »** — *quod habetur in Hebraeo, et **quod
  Aquila transtulit***. (Gn 26:12 has *invenit in **ipso** anno centuplum*, without *aestimatum*.)
- **0148C « adversum et contrarium, »** — ***Aquila et Symmachus … transtulerunt***.
- **0148C « Satana; »** — ***sed in Hebraeo habetur***.
- **0149A « collegium amicorum ejus, »** — ***in Hebraeo habetur***.
- **0149A–B « et venerunt pueri Isaac … Non invenimus aquam. Et vocavit nomen ejus Juramentum. »** —
  ***Nescio quomodo in LXX***. ⭐ **The divergence IS the sentence's subject**: the Vulgate has
  *Invenimus aquam* and *appellavit eum Abundantiam*, and Jerome's whole complaint is that the LXX's
  negative will not yield the etymology (*non congruit ut Isaac aquam non inveniret*). A `[var:]`
  would tell the reader what the paragraph already argues.
- **0153D « Vade in Mesopotamiam in domum Bathuel, »** — ***Quod habent Latini codices***.
- **0153D « Fuge in Mesopotamiam, »** — ***Graeci habent***. (Gn 28:2 reads *sed vade, et proficiscere
  in Mesopotamiam Syriae, ad domum Bathuel patris matris tuae*, so both of Migne's forms diverge; he
  is comparing the two witnesses and both are announced.)
- **0157C « decem annis: »** — ***Septuaginta posuerunt***.
- **0158A « figuras, » / « imagines »** — ***quod Aquila … interpretatur***.

⚑ **And one that is not scripture at all: 0157D « Bis gravidae pecudes. »** is **Virgil**,
*Georgics* II.150, and Migne says so in the same breath (*sed lege Virgilium, in quo dicitur*). No
Vulgate comparand exists and none was sought.

#### 4.4 Lemmata collated and found to AGREE with the Clementine — recorded, per 7a″

**Gn 26**: 26:1 (« Orta autem fame super terram, ») · 26:8 (« Cumque pertransissent, » ·
« Vidit eum jocantem, ») · 26:17 (« Et ille discedens, ») · 26:18 (« Fodit **alios** puteos, » —
the **plate's** reading agrees verbatim; the twin's *alio* is our corruption, §6) · 26:20
(« Adversus pastores, ») · 26:22 (« Latitudo. » · « Nunc dilatavit, ») · 26:26 (« Ad quem locum, » ·
« Ochozath, » · « Abimelech, et Ochozath, ») · 26:32 (« Ecce autem venerunt. »).
**Gn 27**: 27:1 (« Senuit autem Isaac, » · « Vocavitque Esau. ») · 27:3 (« Sume arma, ») · 27:6
(« Dixit filio suo Jacob: Audivi patrem tuum loquentem, ») · 27:14 (« Paravit illa cibos, ») · 27:15
(« Et vestibus Esau, ») · 27:20 (« Quomodo, inquit, tam cito invenire potuisti, fili mi? » —
**verbatim, including Migne's question mark, which is the Vulgate's own**) · 27:25 (« Quos cum
oblatos comedisset, ») · 27:27 (« Benedicens, ait, » clipped of *illi* · « Ecce odor filii mei sicut
odor agri pleni. ») · 27:28 (« Det tibi Deus de rore coeli, » · « Abundantiam frumenti, ») · 27:30
(« Venit Esau, ») · 27:33 (« Expavit Isaac. » ×2 · « Benedixique ei, » · « Benedixi, et erit
benedictus. ») · 27:39–40 (« In pinguedine terrae, et in rore coeli desuper erit benedictio tua. » —
**exact, and it spans the verse division** · « et in rore coeli, ») · 27:40 (« Vives in gladio: » ·
« Tempusque veniet, cum excutias et solvas jugum ejus de cervicibus tuis; » **verbatim** · « Et fratri
tuo servies, » **verbatim** · « Tempusque veniet, cum excutias et solvas jugum ejus. » ·
« Tempusque veniet, ») · 27:36 (« Juste vocatum est nomen ejus Jacob: Supplantavit enim me, ») ·
27:41 (« Dixitque in corde suo. » · « Venient dies luctus, ») · 27:42 (« Nuntiata sunt haec
Rebeccae, » · « Nuntiata sunt haec. » · « Quae mittens et vocans Jacob, ») · 27:45 (« Cur utroque
orbabor filio? » — **including the Vulgate's own question mark**) · 27:46 (« Taedet me, » · « Si
acceperit Jacob uxorem, »).
**Gn 28**: 28:1 (« Vocavit itaque Isaac, ») · 28:10 (« Igitur egressus Jacob, ») · 28:11 (« Tulit de
lapidibus, ») · 28:12 (« Viditque in somnis, ») · 28:13 (« Ego sum Dominus Deus Abraham, ») · 28:16
(« Cumque evigilasset, ») · 28:18 (« Surgens ergo, » · « erexit ») · 28:19 (« Appellavitque nomen
urbis Bethel, » — the twin's extra period is ours, §6).
**Gn 29**: 29:1 (« Profectus ergo Jacob, ») · 29:2 (« Vidit puteum in agro, » · « Lapidem. ») ·
29:11 (« Osculatus est eam. ») · 29:16 (« Nomen majoris Lia, ») · 29:20 (« Servivit ergo Jacob pro
Rachel septem annis. » **verbatim** · « Et videbantur illi pauci dies, ») · 29:26 (« Non est in loco
nostro consuetudinis, »).
**Gn 30**: 30:14 (« Egressus autem Ruben, » ×2, the second with Migne's *etc.* inside the guillemets) ·
30:32 (« Gyra omnes greges tuos, »).
**Gn 31**: 31:1 (« Postquam autem audivit, ») · 31:7 (« Mutavit mercedem, » · « mutavit mercedem meam
decem vicibus, » **verbatim**) · 31:12 (« Vidi enim omnia, ») · 31:13 (« Nunc ergo surge. ») · 31:19,
31:32 (« idola ») · 31:21 (« Contra montem Galaad, ») · 31:23 (« Qui, assumptis fratribus suis,
persecutus, ») · 31:31 + 31:32 (« Timui ne violenter auferres filias tuas, quod autem furti me
arguis, » — **both halves verbatim; the join across the verse division is Migne's**) · 31:32
(« Ignorabat quod Rachel furata esset idola. » **verbatim**) · 31:42 (« Et timor, ») · 31:46
(« Afferte lapides, ») · 31:55 (« Laban vero de nocte, etc. »).
**Gn 32**: 32:2 (« Castra Dei sunt haec. » **verbatim**) · 32:7 (« Timuit Jacob, ») · 32:9 (« Deus
patris mei Abraham, ») · 32:10 (« Transivi Jordanem, ») · 32:11 (« Erue me de manu, ») · 32:20
(« Placabo illum, ») · 32:24 (« Et ecce vir, ») · 32:28 (« Nequaquam, inquit Jacob, appellabitur
nomen tuum, sed, » — ⭐ **the WORDS agree with Gn 32:28 exactly; only Migne's commas differ**, see
§5.3) · 32:30 (« Vocavitque Jacob, » · « Phanuel, »).
**New Testament and Psalms**: Gn 2:24 (« duo in carne una, » · « Erunt duo in carne una, ») ·
Gn 25:23 (« major serviet minori: ») · Ps 109:7 (« De torrente in via bibet. ») · Ps 18:5 (« in omnem
terram exivit sonus eorum, » **exact**) · Mt 2:5 (« In Bethlehem. » clipped of *Judae*) · Lc 15:7
(« Gaudium erit in coelo super uno peccatore poenitentiam agente, » clipped of *Dico vobis quod
ita*) · Rom 9:25 (« Vocabo non plebem meam, » **exact as far as it runs**) · Ps 33:9 (« quoniam
suavis est Dominus. ») · Gal 4:4 (« factum ex muliere, factum sub lege, » **exact**) · Jo 14:6
(« Ego sum via, ») · Ps 2:8 (« Postula a me, et dabo tibi gentes haereditatem tuam, et possessionem
tuam terminos terrae. » **exact**) · Mt 20:28 (« filius hominis non venit ministrari, sed
ministrare » clipped of *Sicut*) · Jo 10:11 (« Ego sum pastor bonus. » **exact**) · Act 8:33
(« generationem ejus quis enarrabit? » **exact, with the mark**) · 2 Cor 11:14 (« transfigurat se in
angelum lucis. ») · Ps 44:11 (« Obliviscere populum tuum, ») · Ps 126:2 (« Surgite postquam
sederitis. » **exact**) · Ps 31:1 (« Beati quorum remissae sunt iniquitates, et quorum tecta sunt
peccata. » **exact**) · Jo 1:18 (« Deum nemo vidit unquam, » — *unquam* for *umquam* is orthography).

⚠ **`coelum` for *caelum* is orthography, not divergence**, throughout, and is not listed as one; so
are *Hierosolyma*, *Mesopotamia*, *Idumaei*, *Chanaan* and the `-cunque` / `-cumque` alternation.

#### 4.5 Three citation sigla that point elsewhere — reproduced verbatim, uncorrected

Pattern 14 marks the **text**, not the citation; `refDisplay` keeps what Migne prints. Recorded here
so the index's `unparsed` bucket has an account of them:

- **0148D `[n: (Matth. XVIII)]`** on *baptizantes omnes gentes in nomine Patris, et Filii et Spiritus
  sancti* — the words are **Mt 28:19**. Matthew XVIII carries nothing of the kind.
- **0153D *secundum illud Oseae II*** on « Vocabo non plebem meam, » — the wording is **Rom 9:25**'s
  verbatim (Paul quoting Hosea); **Os 2:24** reads *Et dicam Non populo meo : Populus meus es tu*, and
  Os 1:9 *Voca nomen ejus, Non populus meus*. Migne cites the ultimate source and quotes the
  proximate one.
- **0158C *Unde psal. XIII*** on « Beati quorum remissae sunt iniquitates » — the verse is **Ps 31:1**
  (also Rom 4:7). Ps 13 carries neither the words nor the sense.

Same treatment as the 0008 stint's *Joan. V* for Job 5:3 at 0103B and the 0019 stint's *Marci XIX*
at 0131A. **No marker**; the note rides verbatim.

---

### §5 · THE DECLINED LIST — suspect readings, what settles each, and the page that settles it

**Twenty-six suspect readings. One fired; twenty-five declined.** The rule this stint worked to, stated once: a
`[sic:]` accuses Migne's type, its content must be verbatim in our twin, and **our Latin is not the
printed page.** On 9004 translating agents' "probably our-file" calls were right 5 times and wrong 9;
here **the plate decided every one, and it went both ways — nine ours, seven his, one shared, three
neither.** No call in this section rests on a corpus-frequency argument.

#### 5.1 Non-words in the TWIN — all NINE are OURS, settled at the plate

| col | twin reads | plate reads (600 dpi) | settling page | English |
|---|---|---|---|---|
| 0148B | *Fodit **alio** puteos* | **`alios`** | p. 79 | "other wells" |
| 0148C | *et **quosque** verae intelligentiae* | **`quousque`** | p. 79 | "until" |
| 0155A | *nihil fecit **idolol triae** simile* | **`idololatriae`** | p. 83 | "like to idolatry" |
| 0151A | *benedic**i**tur* | **`benedicetur`** | p. 81 | "shall be blessed" |
| 0151B | *benedic**i**tur* | **`benedicetur`** | p. 81 | "shall be blessed" |
| 0151B | *Alter **ad** venandum mittitur* | **`Alter venandum mittitur`** | p. 81 | "The one is sent to hunt" |
| 0154A | *Gr**e**ce* | **`Graece`** | p. 82 | "in Greek" |
| 0155B | *verbum Hebraicum **ulam,*** | **`olam,`** | p. 83 | the span reads ***olam,*** |
| 0158C | *remiss**ae*** | **`remisse`** | p. 84 | "are forgiven" |

⚑ **`idolol triae` is 7a⁗-b's dangerous shape and it very nearly cost the sentence its subject.**
Quarantining it under Pattern 10 would have taken the whole lexeme out of *nihil fecit **idololatriae**
simile* and left the English asserting that Jacob did nothing like to nothing — a page with a hole
exactly the size of the thing Augustine is denying. **It was not quarantined, because it is not
Migne's**, and the plate settles that in one look.

⚑ **`benedicitur` twice for `benedicetur` is the tidiest instance of brief §4 in the range**: a present
indicative standing where the plate has a future, twice in one column band, in a passage where the
neighbouring *dicitur* makes the present read perfectly. **No corpus check could have raised it and
none did** — it was found by reading the plate for a different word four lines away, which is
addendum C exactly.

⚑ **`Alter ad venandum` is the other direction of the same class**: our twin has **supplied** a
preposition Migne does not print. Nothing about the English changes; the Latin column does.

#### 5.2 Non-words on the PLATE — SEVEN, all normalized away by our twin, none markable

`pertradsissent` for *pertransissent* (0147C) · `phi-`/`sophi` for *philosophi* (0148D) ·
`mediatabatur` for *meditabatur* (0149C) · `Chrisri` for *Christi* (0154A) · `menbra` and `illus` for
*membra illius* (0154B) · `*usque ab*` for the formula (0156D) · `apperuit` for *aperuit* (0148D,
arguably an attested medieval doubling rather than a defect — Pattern 9).

All read at 600 dpi on pp. 79, 80, 82 and 83. **These are Migne's, and they are exactly the class
brief §4 warns cannot be seen from the Latin alone** — our file prints seven perfectly good words.
**Each becomes a live `[sic:]` after the patch lands; none is one now**, because the
verbatim-substring guard would reject it and rightly.

#### 5.3 What was checked and found NOT to be a defect

- **0156A *cooperata*** — *quia lex per Mosen data **cooperata** est et signata*, of Lia's blear eyes.
  A real word (from *cooperari*) that will not construe with *signata*; the sense the argument wants
  is plainly *cooperta*, "covered", which pairs with "sealed" and with "blear-eyed". **Read at 600 dpi
  on p. 83: the plate reads `cooperata`, agreeing with the twin.** Addendum A's rule is that a real
  word that reads oddly is Migne's until a plate says otherwise, and here the plate says it IS his.
  **Rendered as printed — "was wrought together and sealed" — and the conjecture is here, not in the
  text.** ⛔ **No `[cj:]`**: Pattern 18's bar is that the printed word make the sentence assert
  something the author is arguing *against*, and this one makes it assert very little; 18a's own
  boundary (a sentence too vague to assert is not the marker's business) governs.
- **0154A *Caput autem Christus Deus.*** — both nominatives, where the quotation two lines later has
  the genitive *caput Christi Deus*. **Rendered "But the head is Christ God"**, which is what the
  words say and what the argument needs (the stone is the humanity; the head is Christ as God; hence
  *humanitatem Christi conjunctam Deo assumenti*). Plate agrees with the twin. Logged because the
  parallel invites a silent slide into "the head of Christ is God", which would be a different claim.
- **0149B *Teneri scilicet et humani, docibiles scilicet et innocentis animae.*** — a verbless
  apposition in which *docibiles* is nominative or accusative plural among three genitive singulars.
  **Rendered as printed**, "That is, of a tender and human, that is, of a teachable and innocent
  soul." English adjectives carry no case, so Pattern 9 governs and there is nothing to mark. Plate
  agrees.
- **0149B *Sermo Dei, repromissionis benedictio, et spes regni futuri, in quo cum Christo sunt
  regnaturi, et verum sabbatum celebraturi.*** — a sentence with no main verb. Rendered as the
  verbless apposition it is; the abridgment, not a defect. Plate agrees.
- **0158C *quae avaritiae immunditia **non** viriliter currentes impedit, sed effeminate gradientes …
  resolvuntur*** — a singular active verb answered by a plural passive across the *sed*. **Rendered
  as printed**, anacoluthon intact. Plate agrees with the twin.
- **0159D–0160A the *Nequaquam, inquit Jacob* commas.** ⚠ **The one place in the stint where Migne's
  pointing and Migne's words pull in opposite directions.** Gn 32:28 makes *Jacob* the predicate —
  "thy name shall not be called **Jacob**, but Israel" — and Migne's **words agree with the Vulgate
  exactly**. But his commas enclose *inquit Jacob*, which reads "**says Jacob**", making Jacob the
  speaker of a sentence the angel speaks. **The English renders the words on the verse's construal —
  « By no means, he says, shall thy name be called Jacob, but, »** — and keeps four commas against
  his four, in the same slots. ⛔ **No `[var:]`**: Pattern 14 marks the text, and the text is not in
  dispute. ⛔ **No emendation either**: nothing is added, moved or dropped, and Latin word order does
  not bind *Jacob* to *inquit* — only the 19th-century pointing suggests it. **The rival construal is
  named here, and it loses because the verse, the speaker and the following gloss (Jerome on why the
  ANGEL named him Israel) all decide against it.**
- **0155B « Appellavitque nomen urbis Bethel., »** — our twin prints a **spurious extra period**
  before the comma; the plate prints `Bethel,`. A **mark**, so convention (ii) governs and the
  English follows the twin: « And he called the name of the city **Bethel.,** ». ⚠ **Recorded
  prominently because a blind reader will meet it and read it as ours.** It is ours, but the English
  is right to carry it. Patch filed.
- **0159B *in Hebraeo `*mahanaim*` ;*** — the floating space before the semicolon is where Corpus
  Corporum has dropped Migne's Hebrew (§7). Mirrored.
- **0152B — a bracket-shaped sort on the plate before *de cervicibus tuis***, one of five such marks
  across pp. 81–84 (also 0157C, 0157D, 0158C ×2). **Not carried by our twin and not carried by us.**
  Almost certainly broken furniture in this printing rather than intended brackets; recorded as a
  class in the patch file so a later reader is not surprised by them.
- **0157A *fecunditatem. pariat*** on the plate (a period mid-clause) and **0159C *facienda !sunt***
  (a stray exclamation). Marks; the twin carries neither; the English follows the twin.

#### 5.4 Unexpressed subjects supplied — every one named, with what decided it

- **0148D *et aqua omnibus ostenderunt*** — *ostenderunt* has no object. **Rendered "and by water
  showed [it] to all"**, with the supplied word in brackets (corpus practice). The candidates were
  *aquam* (an accusative lost, giving "showed the water to all") and taking the participial clause as
  the object. ⛔ **Neither was chosen silently**: the bracket marks the supply, and *aqua* is rendered
  as the ablative Migne prints. Plate agrees with the twin.
- **0148D *Puteos Abraham, quos aperuit, sic vocavit sicut pater ejus*** — supplied **"he" = Isaac**,
  from Gn 26:18's own subject and from the paragraph's *Dilatatus est **Isaac***. The alternative
  ("Abraham") is excluded by *sicut pater ejus*.
- **0150A *Rebecca diligebat Jacob, Isaac Deum;*** — supplied **"[signifies]"**, in brackets, not a
  pronoun: *Isaac Deum* is verbless and must be read as the allegorical equation, because the
  paragraph's own scheme two columns earlier is *Isaac vero **Deum** [significat], qui utrumque
  populum … sibi filios fecit* (0149D). Reading it as "Isaac loved God" would break the parallel with
  *Rebecca autem praescientiam Dei figurat* in the next clause.
- **0150C *peccata praeterita ante oculos mentis saepe producit*** — the resumption tail of an
  abridgment whose subject is inside the cut. **Rendered with a bare "it"**, which is as open as the
  Latin. ⛔ **Not named** — the 11613 class, and naming it would be a guess wearing Isidore's voice.
- **0151A *virtutem resurrectionis et regni aperte pronuntiat*** — supplied **"he" = Isaac**, from
  *Quia post esum sequitur benedictio, et **ejus** odore perfruitur* and from *Quaerit **Isaac** a
  Jacob* four lines above. The rival (Christ) is excluded because the enjoying of the odour is
  Isaac's act in Gn 27:27.
- **0151D *per quosdam in contemplationem surgit, per quosdam in activae vitae opera pinguescit*** —
  again a resumption tail. **Bare "it"**; the likeliest antecedent is the Church, but Gregory's
  sentence is inside the cut. Not chosen.
- **0152D *allusit ad nomen*** — supplied **"he" = Esau**, who speaks Gn 27:36 (*Juste vocatum est
  nomen ejus Jacob: Supplantavit enim me*), and whose grievance the whole sentence explains.
- **0155A *nihil fecit idololatriae simile*** — supplied **"he" = Jacob**, named as the subject of
  *erexit* in the same sentence.
- **0158D *More Scripturae filios ac filias Jacob suos appellat*** — supplied **"he" = Laban**, from
  the lemma directly above (« Ut oscularer filios meos ac filias. », Laban's own speech at Gn 31:28).
  The rival subject, *Scriptura*, is excluded because *quae … appellat* immediately follows with
  Scripture as its own subject — Migne distinguishes the two in one sentence.
- **0159B *et pulchre ad fratrem inimicum iturus … excipitur*** — **"he" = Jacob**, from the lemma.
- **0159C *et tunc post illam afflictionem adesset, et quem promisit, impleret*** — ⚠ **the one place
  two readings both construe.** The subject of *adesset* and *impleret* could be God (who would be
  present after the affliction and fulfil his promise) or Jacob. **Rendered "he" throughout, so the
  ambiguity the Latin has is the ambiguity the English has**; the argument for God is that *quem
  promisit* takes up *promissis Dei* from the sentence before, and it is recorded here rather than
  decided in the text.
- **0159A *quem commendavit supra, dicens, « Et timor, »*** — **"he" = Jacob**, from Gn 31:42, where
  Jacob is the speaker of *et timor Isaac*.

#### 5.5 Negation — the hosts, named (tests 2 and 2a)

Every printed negative was traced to the single Latin word it attaches to. **The trigger population
for 2a — a negative resting on a verb with a quantifier, correlative or predicate nearby — fired
eight times, and every one was proved from the sentence's own structure, never from what reads well:**

- **0149D *ipse enim in corpore suo, **non** sua, **sed** aliena peccata portabat*** — the negative is
  on *sua*, and the `sed` correlative proves it. English: "bore **not his own**, but others' sins."
- **0152A *Sed **nec** major filius **omnino** despectus*** — the trigger shape exactly (a negative
  beside *omnino*). The negative belongs on *omnino*, **not** on *despectus*: the whole clause exists
  to say that the elder son is not *altogether* rejected, and its own *quia* proves it (*cum
  intraverit plenitudo gentium, tunc omnis Israel salvus erit*). English: "neither is the elder son
  **altogether** despised."
- **0152C *quid est quod Isaac **non** Esau quem voluit, **sed** Jacob quem noluit, benedixit?*** — the
  negative is on *Esau*, not on *benedixit*; the `sed` names the one he did bless. English: "blessed
  **not Esau** whom he wished, but Jacob whom he wished not."
- **0152C *ut **non** hominis ostenderet esse benedictionem, **sed** Dei*** — on *hominis*, by the
  same correlative. English: "to be **not of man**, but of God."
- **0153B *Esau mortem fratris **non** subita ira, **sed** perfecto mentis consensu exoptasse*** — on
  *subita ira*, not on *exoptasse*: Diodorus's point is that Esau *did* long for it, and deliberately.
- **0154B *qui **non solum** caput Ecclesiae … **sed** ad membra illius miserando descendunt*** — on
  *solum*, per the axis's own worked shape.
- **0154D *quia **non** possunt eis loqui quasi spiritualibus, **sed** quasi carnalibus*** — the
  negative is on the manner (*quasi spiritualibus*), not on the ability to speak at all.
- **0157A *perscrutatus sum, **non** aliqua a communi sensu remotiore scientia … **sed** quantum
  renuntiat visus, olfactus et gustus*** — on *aliqua … scientia*, and the `sed` names the means he
  did use. English: "**not by any knowledge** further removed from the common sense … but so far as
  sight, smell and taste report."
- **0157D *Jacob **nullo** malo dolo fecit, **sed** divina dispositione*** — on *dolo*.

**The remaining printed negatives, each on its own host and each carried**: 0147C *nec dari posse,
nec prosperari debere, **nisi** ab uno Deo* (three) · 0148C *non torpescat* · 0149B *neglectum* ·
0149D *cui non est dictum* · 0148B *Nunquam enim Isaac … habitare potuit* ·
0149B/0151B–C the Isaac-and-the-Jews passage's eight (*nesciens · nescivit · ignorabant · ignorantia ·
nesciebat · caecos · non vidit · non valuit*) · 0152B *jam tunc **non** servies minori, **sed** per
fidem frater vocaberis* · 0153A *ne essent sub Juda* · 0153A *Nolebat … ne incurreret* · 0153B *non
sic celavit … **quin** appareret* · 0153C *non poterat … sine scitu* · 0153C *non autem dixit … ne …
affligeretur* · 0155A *nihil fecit … **non** vel tunc vel postea* · 0156C *crimen non erat … quia mos
non est … **nisi** concupiscentiae flagrantia* · 0156C *vult parere, et **non** potest* · 0156C *hoc
**non** potest in terra morientium* · 0156D *non quia numen* · 0157A *quod ego **non** arbitror, **nec**
sic tunc concepisset* · 0157A *nihil est quod … **in nulla** femina experti sumus* · 0157A *nescio,
**nisi** forte* · 0157C *virgas in canalibus **non** ponebat* · 0158A *nec reperit* · 0158B *idolum
**non** reperit … vestigia concupiscentiae **non** reperit … quae Jacob **non** habuit* · 0158B *Non
quod eo tempore mons Galaad diceretur, **sed** per anticipationem* · 0158D *non tibi manifestavi, ne
… superares* · 0159C *non deest timor* · 0159D *Non est enim prudentis* · 0159D *ne ultra jam generare
possit* · 0160A *Nemo videbit · Deum nemo vidit* · 0157B *non arguitur … nec credendum est … sine
spirituali revelatione*.

⛔ **None was relocated and none was dropped.** The stint's densest sites — 0151B–C (eight negatives
in nine lines, on the Jews' foreknowledge and later ignorance) and 0157A (Augustine on the mandrake,
seven) — were each checked twice.

---

### §6 · THE ONE `[sic:]` — 0152A `pinguedidine`, and it is the FIRST on this work

    « In pinguedine terrae, et in rore coeli desuper erit benedictio tua. « In pinguedidine
    terrae, » id est, in fecunditate rerum, et potentia regni…

**Fired: `In the fatness [sic: *pinguedidine*] of the earth`.**

**Why it is markable when nothing else in 5,151 words was.** Zero `[sic:]` had stood on this book
across five stints and ~28,000 words, and the reason each of those stints gave was structural, not
timid: **every plate defect they met was one our twin had already tidied away** (so the
verbatim-substring guard would reject the marker) **and every twin defect was ours** (so the marker
would accuse a clean page). ⭐ **0152A is the third case, and it is the one the class allows: the
plate is defective AND our twin carries the defect verbatim.**

**Read at 1200 dpi, p. 81, corner numbers 151/152 checked first.** Migne breaks the line
`« In pinguedi-` / `dine terrae, »`, and the join is a doubled syllable. It cannot be read any other
way: the hyphen is at the line end and `dine` opens the next line, so the word on the page is
`pinguedidine`.

**Three things make it safe:**
1. **It is a non-word** — addendum A's decisive class, right ten times out of ten, and specifically a
   *doubled syllable*, which the addendum names.
2. ⭐ **The internal control is on the same plate, eleven words earlier**, where Migne sets
   `« In pinguedine terrae, et in rore coeli desuper erit benedictio tua.` correctly. The same phrase,
   the same column, one setting right and one wrong — a compositor's doubling, not a word.
3. **The guard is satisfied**: `pinguedidine` appears verbatim in `src/latin/8950/0032.md`.

**The English renders the sense with Migne's type inside the marker**, per Pattern 7's 2026-09-05
amendment — not the older untranslated carry, because the marker now does the disclosing. Running the
7a⁗ test with the marker's contents deleted, the clause reads "In the fatness of the earth", which
has its noun, its preposition and its sense; **nothing is quarantined but the type.**

⚑ **No `[d:]`.** Pattern 11 governs a repeated *run*, and what is doubled here is a syllable inside
one word — there is no second copy to mark and no eye-skip source in a neighbouring phrase.
⛔ **And no patch is owed**, which is what distinguishes this site from all seven in §5.2: the two
columns already agree.

---

### §7 · THE ONE `[ed:]` — 0148C, and the four Hebrew losses that did NOT take one

Corpus Corporum drops Migne's Hebrew square script throughout this book; the 0012–0018 stint measured
eight words lost across cols 0104–0118, and **five more are lost in my range**, all present on the
plate:

| col | plate | twin | scar visible in our own Latin? |
|---|---|---|---|
| **0148C** | `*Rehobot* (רחבות), *latitudines.*` | `*Rehobot* **( )**, *latitudines.*` | **YES — an EMPTY pair of parentheses** |
| 0155B | `verbo *ulam* vel *olam* ולאם plenae sunt` | the Hebrew simply gone | no — the sentence construes |
| 0157C | `verbum Hebraicum *monim* מנים numerum` | gone | no |
| 0158A | `in Hebraeo *theraphim* תרפים scriptum est` | gone | no |
| 0159B | `in Hebraeo *mahanaim* מהנים ; ut sciamus` | gone, leaving a space before the `;` | marginal |

**Only 0148C is marked, and the line is Pattern 13a's own, drawn by the 0012 stint at these very two
shapes.** Clause 2 gives the marker to a loss that would otherwise be **invisible as an absence**;
clause 1 leaves an ordinary mid-sentence loss to a silent patch and a crux. An empty `( )` in a
reading page is a hole a reader will read as ours — it is the 0115C case exactly, and before that the
11055 case that forced Pattern 13 into existence. The other four leave sentences that are sound and
say nothing false.

    In the Hebrew *Rehobot* ( ) [ed: Migne prints a Hebrew word within these parentheses; our
    digitized source has lost it and left them empty. Recovery requires the plate.], *breadths.*

⛔ **The marker supplies nothing.** Pattern 13's rule holds: the recovered Hebrew is in this file and
in the patch file, never in the running English. ⛔ **And it is not a `[sic:]` or a `[var:]`** — the
plate is perfectly legible and it is our transcription that has the hole.

**Twelve Hebrew words are now known lost across cols 0104–0159**, in four stints' ranges. This is a
standing behaviour of the source on this book, not a local accident.

---

### §8 · PUNCTUATION — compared BAND BY BAND, and the only added marks are three Pattern 8b colons

A band-by-band comparison (colons, semicolons, question marks, guillemets and exclamations per column
anchor, apparatus stripped) returned **exactly three mismatched bands in five chunks, all `:` +1, all
the same class**, and **zero elsewhere**:

| column | Migne | English |
|---|---|---|
| 0155D | *Sed quaeri potest quomodo illa ab ignoto osculum acceperit, si postea indicavit Jacob propinquitatem?* | But it may be asked**:** how did she receive a kiss from one unknown, if Jacob afterwards declared the kinship? |
| 0156B | *Quomodo hoc dictum sit quaerendum est, cum et breve tempus longum videatur amantibus?* | It is to be asked**:** how was this said, since even a short time seems long to them that love? |
| 0160A | *Quaeritur, cum Veritas dicat: « Nemo videbit faciem meam; » … quomodo testatur Jacob: « Vidi Dominum facie ad faciem? »* | It is asked**:** since Truth says: « … » … how does Jacob testify: « … ? » |

**Migne's `?` is kept in all three**, and English cannot end an indirect construction with it (8b).
⚠ **0160A is the least obvious of the three and is recorded as such**: the `?` there sits *inside* the
guillemets, so no mark was stranded — but *Quaeritur … quomodo testatur Jacob: «…?»* is still an
indirect frame that English cannot carry, and the alternative ("It is asked, since Truth says …, how
Jacob testifies: «…?»") is the un-English form 8b exists to forbid.

⚑ **The scan also found four unlicensed marks that had crept into the draft and were repaired**: a
supplied semicolon at 0149D (*Esau venator, et agricola Jacob vero simplex* — his comma), one at
0151A (*veraciter dicitur, sed a Judaeis alius* — his comma), one at 0151D (*Ros desuper et subtiliter
cadit, et toties* — his comma), and one at 0157A (*ut hoc acciperet, quod ego non arbitror* — his
comma). **Totals had not cancelled here**, but three of the four sat in bands whose other marks
matched, so they were invisible until the bands were compared. **A dropped column anchor at 0149C was
caught by the same pass** (`anchors 13 against 14`) — the 2b class, since a present-but-displaced
anchor would have passed `verify-english` silently.

⛔ **No comma→semicolon sweep was made.** Migne prints **42 semicolons** in these five chunks, so
Tobit's narrow exception (which rests on his printing zero in that book) does not apply and was not
invoked.

⚠ **Three paragraphs the twin leaves unstopped are mirrored unstopped** (Pattern 8, never supply):
0150A (*Per tabernacula, diversas per orbem Ecclesias vel diversos ordines intelligimus*), and
Migne's own odd stops are carried as printed — the mid-construction period at 0151B (*Post cibum et
potum. Jacob benedicetur*), and the `» , etc.` with a space before the comma at 0152D.

---

### §9 · SECTIONS READ CLEAN (Test 4 — does the English ASSERT what he asserts?)

Run last, with counts, bands and anchors already known clean, paragraph by paragraph against the
Latin, asking one question only.

- **0147C–0149B** — the whole of CAPUT XXVI. Gregory on the wells and the Allophyli, and Jerome on
  the torrent and the LXX's etymology of *Juramentum*. ⚑ The closing paragraph carries three negatives
  in eleven words (*Non invenimus aquam … non congruit … non inveniret*) and the argument only works
  if all three stand; checked twice.
- **0149B–0149D** — Hippolytus's *Mystice*, the densest allegory in the stint and the one most exposed
  to smoothing: eleven equations in a row, several verbless. Every one rendered as the apposition it
  is; nothing supplied but the bracketed "[signifies]" at 0150A, which is named in §5.4.
- **0150A–0150C** — Isidore on Esau the husbandman and hunter, and the two-peoples allegory. The
  *gentes* axis is exercised six times in two columns and the split is recorded in §1(d).
- **0151B–0151D** — Gregory on Isaac's darkened eyes. **The heaviest negation in the range** and the
  passage where a slip would be least visible: the Jews *knew* the coming of Christ and *did not know*
  him present, and the sentence turns on which verb takes which negative. Both limbs traced
  individually, twice.
- **0152A–0152D** — the two blessings, the `[sic:]`, three of the six `[var:]`, and Alcuin's
  *quaestio*. ⚑ The 2a trigger fires three times in this column band alone (*nec … omnino despectus* ·
  *non Esau … sed Jacob* · *non hominis … sed Dei*) and each was proved from its correlative.
- **0153A–0153C** — Rebecca's counsel. Six negatives, four of them purpose clauses with *ne*.
- **0154A–0154D** — Isidore and Gregory on the ladder. The *ascendentes / descendentes* structure is
  mirrored clause for clause, including the final chiasmus (*per illum se erigunt … et humiliant*),
  which was drafted flat and re-ordered so each limb keeps its own verb.
- **0155C–0156B** — Victorinus on Lia and Rachel, and the seven years' service. Clean.
- **0156C–0157B** — Augustine on the four wives and on the mandrake. ⚑ **The mandrake paragraph is the
  most negation-dense prose in the stint** (seven negatives in nine lines, including *quale in nulla
  femina experti sumus* and the *non aliqua … sed quantum* correlative) and it is also the one whose
  smooth English would most easily hide a slip. Checked twice.
- **0157C–0159B** — Jerome on the ten changes of wage, and Gregory on Laban as the devil. Clean.
- **0159B–0160A** — the whole of CAPUT XXXII to the chunk's end. Augustine on Jacob's fear, Jerome on
  Phanuel, Gregory's *quaestio* on seeing God. ⚑ The last paragraph sets *Deum nemo vidit* against
  *Vidi Dominum* four words apart; the `[var:]` at §4.1 is placed where a reader meets both.

**Candidates rejected, with reasons, so a blind reader knows they were looked at:** §5.1–5.5 above,
plus — *zabuli* for *diaboli* at 0149B (an attested late form; Pattern 9, translated normally, no
crux-worthy defect) · *Allophyli* at 0148A and 0148C (Migne's name for the Philistines, kept as he
prints it and capitalized, not Englished) · `« Latitudo. »` at 0148C Englished « Breadth. » while the
place-name *Bethel* at 0155B is kept — the difference is that Migne glosses the first and only names
the second · the four- and five-dot ellipsis runs at 0157C and 0158A, reproduced with Migne's own
spacing (the twin sets four dots at 0158A where the plate sets five; a mark, twin followed) · the
`» , etc.` with its space at 0152D, mirrored · `« Ochozath, »` and `« Satana; »` kept unEnglished
inside their guillemets as the Hebrew and proper names they are · the twin's `VERS. 33-35.` and
`VERS. 5-13.` printing no `--` where every other address in the range prints one (the plate agrees;
reproduced bare).


---

## STINT 8 — chunks 0036–0041 (cols 0160B–0173C)

*Filed as `cruces-0036.md`; merged verbatim, headings demoted one level. Nothing in it was rewritten — where a later stint corrected it, the correction stands in that stint's section.*


Translated 2026-09-05, one stint, 6 chunks (5,480 Latin words by the frontmatter; 5,193 body
words with anchors and notes stripped → 7,638 English, **1.47×**).
Bands: **0160B–0173C** — CAPUT XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXVIII, XXXIX, XL, XLI,
XLII, XLIII, CAP. XLIV.
`verify-english.mjs 8950` reports **no error on 0036–0041** (the only failures in the work are
`MISSING English chunk` for ranges other stints hold).

**SPAN COUNT — 235, of which 1 OPEN-ENDED, and the check was a span-for-span DIFF, not a
comparison of totals.** Counted **paragraph-bounded** in my own six Latin chunks: **141 closed
`« … »` spans + 93 `*…*` spans + 1 unclosed `«` = 235**, matching the brief's header exactly.
Per chunk: 0036 14+13+0 · 0037 29+23+1 · 0038 21+14+0 · 0039 26+24+0 · 0040 31+14+0 ·
0041 20+5+0. ⭐ **The two lists were then diffed line for line against the brief's inventory and
they are identical, with no residue** — the only difference the diff returns is my own
`OPENENDED:` label on the one span the brief itself flags. Nothing in my Latin is absent from the
brief and nothing in the brief is absent from my Latin.
⚠ The raw body marks are **143 `«` / 143 `»`**, and the four-mark gap between that and the 141
closed spans is real and accounted for: **one unclosed `«`** (0163A), **one nested line-head `«`
inside a closed span** (0168B), and **two orphan `»` with no opener** (0168B, 0169A). All four are
plate-confirmed as **Migne's**, on two witnesses (§3). A bare `«`/`»` total is not a checkable
number on this book.
⚑ The counting method matters: a DOTALL `«.*?»` over a whole chunk body runs the 0163A unclosed
quotation forward across a paragraph break and swallows the next span. Counting paragraph-bounded
is what keeps two such errors from cancelling.

**Apparatus fired: 11 `[var:]` · 1 `[sic:]` · 3 `[ed:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[nt:]`.**
Every one stands on a column read at the plate this session, on **two witnesses**.

Per-chunk parity (English / Latin), all exact: column anchors 7/11/9/10/9/8 · `[n:]` notes
10/22/13/15/17/13 · `«` 14/30/21/27/31/20 · `»` 14/29/21/28/31/20 · italic spans
13/23/14/24/14/5 · question marks 2/5/7/1/0/3 · `## ` heads 2/2/1/2/2/3.
**Zero em-dashes supplied in 5,480 words.**

⭐ **THE WHOLE RANGE WAS READ AT THE PLATE BEFORE THE ENGLISH WAS WRITTEN, ON TWO WITNESSES**:
archive.org `patrologiaecurs04migngoog` (on disk), **PDF page = (column + 11) / 2**, pp. **85–92**;
and Gallica `ark:/12148/bpt6k5505319w`, **f = (column + 1) / 2**, ff. **80–87**. **Corner numbers
read first on every page of both copies**, and all sixteen confirmed the map. **Foot-of-page
apparatus: CHECKED ZERO on all eight pages, both witnesses, both layers** (numbered and
letter-keyed); the foot of p. 90 carries only `PATROL. CXIII.` and the gathering signature `6`.
⚑ Note that **p. 89 (cols 0167/0168) had been sampled foot-only by an earlier pass; its running
text is now read.** Reads are recorded in `data/briefs/8950-PLATE-READS-0036.json`; twin/plate
divergences in `data/briefs/8950-PENDING-TEI-PATCHES-0036.md`.

---

### §1 · CONVENTIONS — inherited, and what this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not re-opened**, nor were the five earlier
stints of this same work (`cruces-0000.md`, `-0004.md`, `-0008.md`, `-0012.md`, `-0019.md`), all
of which I read before drafting: `VERS. n.--` passes through verbatim; the lemma is Englished; a
fragmentary lemma is rendered as the phrase it stands for; sigla ride as ordinary `[n: …]` notes
with Migne's own internal spacing (`(AUG. in Q. super Genesin. )`, `(HIER., ibid. )`,
`(AUG., ubi supra. )`, `(HIER. in Quaest. Hebr. )`); the guillemets are the plate's, **1:1 with the
twin**, and their contents are Englished; `*usque ad*` → ***as far as***, with **no verb and no
object ever supplied**.

The four conventions the earlier 8950 stints settled were adopted, not re-derived:
**(i)** no `[var:]` on a quotation Migne himself labels a rival version — **eight** instances
here, §4.3; **(ii)** words follow the plate, punctuation follows the twin — eleven instances,
patch file Parts A and B; **(iii)** a Latin gloss giving the MEANING of a name is Englished inside
its span, a word MENTIONED as a word stays Latin — §1(b); **(iv)** unpaired guillemets are
mirrored, never tidied, and are usually Migne's — four here, all his, §3.

#### (a) The sense tags are translated in their italic span
`*Historice.*` → ***Historically.*** (0164C) · `*Moraliter.*` → ***Morally.*** (0162B) ·
`*Allegorice.*` → ***Allegorically.*** (0163B, 0166A, 0167B, 0169A, 0170C, 0171C) ·
`*Mystice.*` → ***Mystically.*** (0165D). No tag is abbreviated in this range, so 0019's
`*Moral.*` question does not recur.

#### (b) The italic Latin words — MEANING Englished, MENTION kept
This range is thick with name-etymologies, and every one is a **meaning** and is therefore
Englished inside its span, per the 0012–0018 stint's rule:
`*tabernacula*` → *tabernacles* · `*consummatam* … *perfectam:*` → *finished … perfect:* ·
`*pacificam.*` → *peaceful.* · `*curati* … *perfecti*` → *the healed … the perfected* ·
`*pacificos,*` → *peaceable,* · `*consummatos, atque perfectos*` → *finished, and perfect* ·
`*amygdalum,*` → *an almond,* · `*frugifera*` / `*domus panis,*` → *fruitful* / *the house of
bread,* · `*filium doloris mei?*` → *the son of my sorrow?* · `*filium dierum*` → *son of days* ·
`*campum*` → *a plain* · `*liberi*` ×2 → *free men* · `*tunica varia*` → *a parti-coloured
tunic* · `*talarem,*` → *reaching to the ankles,* · `*manicatam,*` → *sleeved,* ·
`*Defectionem.*` → *A falling away.* · `*visio filii*` → *the vision of the son* ·
`*coquus,*` / `*occidere:*` → *a cook,* / *to kill:* · `*videns Deum:*` → *seeing God:* ·
`*testimonium in aqua,*` → *testimony in water,* · `*humilis professionis,*` → *of humble
profession,* · `*pelliceus*` → *made of skin* · `*moeror eorum,*` → *their sorrow,* ·
`*amaritudo,*` → *bitterness,* · `*commutans*` → *changing* · `*Confessio*` → *Confession* ·
`*fons:*` → *a fountain:* · `*oculos.*` → *eyes.* · `*maceria*` / `*divisionem*` / `*divisionis*`
/ `*divisi*` → *a wall* / *a division* / *of division* / *divided* · `*oriens.*` → *the rising.* ·
`*pincernam,*` → *a butler,* · `*augmentatio*` / `*ampliatio:*` → *increase* / *enlargement:*
⛔ **Kept as printed, because they are the words being talked about, not translations:**
`*Socoth*` · `*Selemim.*` · `*Arbee*` · `*Bennoni.*` · `*Benjamin.*` · `*iamin,*` · `*n;*` ·
`*iamim,*` · `*m.*` · `*Phares.*` · `*masqueh*` · `*Sarigim*` — and the Greek ἀστραγάλον,
μάγειρος, μαγειρειύεν, χ.
⚠ **One span mixes the two classes and could not be split**, exactly as 0118C did for the earlier
stint: `*Bennoni. Filius vero dextrae,*` → ***Bennoni. But son of the right hand,*** — *Bennoni*
is the Hebrew name under discussion and *Filius vero dextrae* is its Latin meaning, and both sit
in ONE italic span whose boundaries cannot move without breaking span parity.
⚑ **`*dimidiavit,*` (0160B) is Englished** → ***he divided them in half,*** — it is Aquila's
rendering being reported, i.e. a meaning, on the same footing as *consummatos atque perfectos*
two columns later. Recorded because it is the range's first italic span and sets the pattern.

#### (c) Four fragmentary lemmata expanded per convention 3, and what fixed each
| col | Migne prints | English | the phrase it stands for |
|---|---|---|---|
| 0161C | `« Arreptis, »` | « Having taken up their swords, » | Gn 34:25 *arreptis … gladiis* |
| 0161C | `« Nunquid ut scorto, »` | « Ought they to have abused our sister as a harlot, » | Gn 34:31 *Numquid ut scorto abuti debuere sorore nostra?* |
| 0165B | `« Num ego, »` | « Shall I, » | Gn 37:10 *num ego et mater tua … adorabimus te* |
| 0168C | `« Quare divisa, »` | « Why is the wall divided, » | Gn 38:29 *Quare divisa est propter te maceria?*, and *maceria* is glossed in the next line |
⚑ Each keeps Migne's own closing comma. ⛔ **A complete one-word lemma is NOT expanded** —
`« Socoth. »`, `« Pacifici. »`, `« Ruben. »`, `« Extrahentes. »`, `« Vendiderunt. »`,
`« Husan. »`, `« Judas, »`, `« Fuitque, »`, `« Apertoque, »` are rendered as they stand. The two
classes are different and contrasting them manufactures an inconsistency that is not there.

#### (d) `usque ad` — 29 formulas, 3 ORDINARY, decided per occurrence by the `etc.` splice test
**Formula (italic, following an `etc.`), 29×**, all → `*as far as*`, no verb, no object and no
antecedent supplied anywhere: 0160B · 0161C · 0162A · 0163A · 0163B · 0164B · 0164C · 0164C ·
0165B · 0165C · 0166A · 0166D · 0167B ×2 · 0168D · 0169A ×2 · 0169B · 0169C · 0169D ×2 ·
0171A · 0171B ×2 · 0172A ×2 · 0172C · 0173C ×2.

⭐ **0165C's `*usque*` is a VARIANT OF THE FORMULA and is listed above although it lacks *ad*, and
the Latin that forced the call is this**:

> `VERS. 12-22.-- « Cumque fratres illius, » etc., « in pascendis gregibus, » *usque* « Renuntia
> mihi, » etc.`

It follows an `etc.`, it names the point at which the quotation resumes, and both the point of
departure and the point of resumption are guillemet lemmata. **This is the splice applied to the
LEMMA itself rather than to a father's sentence** — the only such instance in the range.
Rendered ***as far as***, no verb supplied. Precedent: the 0012–0018 stint ruled 0115D's
`*usque,*` the formula on the same grounds. **Said explicitly, per the series brief's requirement
that an exception name the Latin that forced it.**

⛔ **Three ORDINARY, non-formula occurrences, none italic, none after an `etc.`, each rendered by
sense** (brief addendum D) — **all three in chunk 0038, and two of them inside one paragraph**:

| col | Latin | English |
|---|---|---|
| 0165A | *sive quod ad talos **usque** descenderet* | "came down **as far as** the ankles" |
| 0165A | *Joseph inter fratres **usque ad** finem vitae justus perseverasse* | "**to** the end of his life" |
| 0165A | *bona actio … **usque ad** terminos vitae nos regit* | "**to** the bounds of life" |

⚠ The two *usque ad* at 0165A stand **eleven lines below a formula at 0164C and eight above one at
0165B**, which is the 8967 col 0953C shape and the reason the test is run per occurrence. They
were deliberately **not** given the formula's "as far as", so that the abridgment mark stays
distinguishable on a page where both appear.
⚠ Also present and NOT this word: *usque hodie* ×3 (0160C, 0169C, 0169B) → "to this day".

#### (e) The vocabulary axes, with the instrument checked first
- **`gentes` — 9 occurrences, split by the axis 5 / 3 / 1, and the split is recorded because two
  of them stand within eight lines of each other.**
  **Gentiles** where the *Judaei*/*gentes* typology is explicit: **0167D** *Ecclesiam de
  **gentibus** vocatam*, against *ut sit de Synagoga Ecclesia* in the same paragraph; **0168C**
  *populus vero **gentium** postea prorumperet*, set in one sentence against *Israel in opere
  legis*; **0169B** *conspicuum se **gentibus** praebuit*, set against *Synagoga* in the same
  sentence.
  **Nations** where the sense is plainly generic, which is the axis's own named exception:
  **0164A** *regionibus et **gentibus** Idumaeorum*; **0166A** *ab omnibus **gentibus** fidei
  commercio comparatur*; **0167C** *in omnibus **gentibus** Ecclesia constituta*; **0167C**
  *praedicari … per omnes **gentes*** (Lc 24:47's own formula, the axis's exemplar shape).
  ⚠ **The one place the split shows on a single page: 0167C–0167D.** *in omnibus gentibus Ecclesia
  constituta* and *per omnes gentes* read "among all **nations**" four lines above *Ecclesiam de
  **gentibus** vocatam*, which reads "out of the **Gentiles**". Both are the axis as written — the
  first two are universal and cover the Jews, the third is the typological opposition and does
  not. **Flagged here rather than decided silently.**
  - Singular **`gens`** of a people → **nation**: 0164C *patrem **gentis** Edom* → "the father of
    the nation of Edom".
  - **`gentilis`** → **Gentile**: 0170A *gentilis populus* → "the Gentile people" (the rule added
    on 9000).
- ⚑ **Instrument checked before reporting, and it changed one answer.** A raw `gent` grep returns
  **21** hits in this range and **twelve are noise** — *argentum* ×5, *argenteis* ×2, *Argentum*,
  *lugentem*, *intelligentiae*, *indigentiam*, *diligentius*, *diligenti*. A raw `natio` grep
  returns **four** and three are *expugnationi*, *comminationibus*, *cognatione* — **but the
  fourth is real**: 0173A *quasi exteris **natione*** → "as for men foreign **by nation**", the
  only `natio` in the range, and a grep that had been trusted to return zero would have missed it.
- **`turba` — ZERO.** `turb-` fires twice and **both are *perturbati*** (0160B, 0160B). So the
  *turba*/*multitudo* pair is not exercised on either side: **`multitudo` is also ZERO.**
- **`daemonium` ×2 → demons** (0165B *daemoniorum*, *daemonia* — Beelzebub *principe
  daemoniorum*, so both words stand in one clause and both are "demons"). **`diabolus` ×1 →
  devil** (0161A). **No `satanas`, no `ethnicus`, no `gentilitas`.**
- **`mysterium` ×1 → mystery** (0163B). **`sacramentum` — ZERO**, so the 1:1 pair is not exercised
  in this range.
- **The commentator's own voice is not archaised**: *dicit / ait / loquitur / aiunt* → "says",
  never *saith*. `-eth` forms appear **only** inside quoted scripture (Ps 17:45 *servivit* →
  "hath served"; Ps 18:5 *exivit* → "hath gone forth"; Ps 64:10 *Visitasti … inebriasti* → "Thou
  hast visited … hast made drunk"; 2 Cor 3:6's *litteram occidentem … spiritum vivificantem* →
  "the letter that killeth … the spirit that quickeneth", woven unguilleted into the gloss at
  0172A) and in second-person singular address.
- **Pattern 17.** Singular → *thou / thee / thy*: 0162A–B *« Non vocaberis ultra Jacob, »* → "Thou
  shalt no more be called Jacob"; 0171A *« Ecce constitui **te** super universam terram
  Aegypti, »* → "I have set **thee**"; 0172B *« si non reduxero illum **tibi**, »* → "if I bring
  him not back to **thee**"; 0173A Ps 64:10 *« **Visitasti** terram et **inebriasti** eam, »* →
  "**Thou hast** visited … and **hast** made it drunk".
  Plural → *you / your*: 0171D *« Mititte ex **vobis** unum … exploratores **estis**. »* → "Send one
  of **you** … **you** are spies"; 0172B *« **Deducetis** canos meos, »* → "**You** shall bring
  down my grey hairs"; 0172C *« Deus **vester** et Deus patris **vestri** dedit **vobis**
  thesauros, »*; 0173B *« Scyphus quem furati **estis**, »* and 0173C *« An **ignoratis** … »*.
  ⚑ Three imperatives are rendered as bare English imperatives, which mark no number:
  0162B *« Cresce et multiplicare. »* → « Increase and multiply. » (singular),
  0165C *« Renuntia mihi, »* → « Bring me word, » (singular),
  0170D–0171A *« Parate viam Domini. »* → « Prepare the way of the Lord. » (plural).
  *Prepare ye* was drafted and withdrawn: Pattern 17 gives the plural **you**, not *ye*, and an
  English imperative supplies no pronoun at all — the 0019–0023 stint's ruling, followed here.
  0168A's vocative *« genimina viperarum, »* → « brood of vipers, » for the same reason.

#### (f) Heads — numerals mirror the plate, and `CAP.` keeps its abbreviation
`CAPUT XXXIII.` → `CHAPTER XXXIII.` and so through `CAPUT XLIII.` → `CHAPTER XLIII.` — numerals
throughout, per the corpus measurement (zero spelled-out forms above ONE).
⭐ **Chunk 0041's last head is `## CAP. XLIV.`, abbreviated on both plates**, where every other
head in the range spells *CAPUT*. Rendered **`## CHAP. XLIV.`**, keeping the abbreviation.
**This is corpus practice, not a fresh decision**: the shipped English carries **81** `## CHAP.`
heads against 157 Latin `## CAP.` heads, and 11085/0006 is the worked pair (`## CAP. IV.` →
`## CHAP. IV.`). ⛔ It is therefore **not** the Pattern 9 normalization the 0019–0023 stint applied
to an abbreviated `*Moral.*` tag — a head has an English exponent for the abbreviation and a
sense-tag does not.

#### (g) Frontmatter copied VERBATIM from each Latin chunk, field order included
Every field, in the Latin twin's own order, including `words:` figures that count the Latin and
`heads:` fields carrying the chunker's own forms. Chunk 0036's `colContext: "0160A"` against
`colFirst: "0160B"` is the chunker's, and is copied.

#### (h) Two addresses Migne prints irregularly, both reproduced as printed
- **`VERS. 18-20. « Transivitque in Salem, »` at 0160D** — no `--` after the period, where every
  other address in the range prints one. Reproduced bare; confirmed on both plates.
- **`VERS. 27-34. « Apertoque, »` at 0172A** — the same, and **`VERS. 26.--Qui agnitis, »` at
  0168B** prints no space after the `--`. All reproduced.

---

### §2 · ⛔⛔ THE FINDING THAT GOVERNS EVERY OTHER — OUR ARCHIVE COPY MANUFACTURES DIVERGENCES

**Twelve letter-level divergences were read off the archive.org copy of pp. 85–88, at 300 and 600
dpi, with the words plainly legible. Gallica refuted ALL TWELVE, agreeing with our twin in every
case.** They are listed in full in §5.0 and the withdrawal is unqualified.

The archive.org copy of this gathering is **heavily over-inked**. Thin strokes fill and close, so:
`sed`→`seu` (the *d*'s ascender fills), `cur`→`cum` (the *r* closes into an *m*), `expugnationi`→
`expurgationi`, `Sanguis`→`Sanguinis`, italic `F`→`P`, `talarem`→`tularem`, `colobiis`→`colcbiis`,
`id est`→`in est`, a leading `t` swallowed by the space before it (`tunica`→`unica`), a preposition
lost into the word before it (`a parente`→`parente`), and **a `9` blotted into a `6`** in a verse
address (`VERS. 4-9.` read as `VERS. 4-6.`).

⭐ **Every one of those readings looked decisive at 600 dpi.** This is `reference_plate-read-triage`'s
rule met from the other side: frequency and internal corroboration prove an error exists, never
whose it is — and here the *plate itself* proved an error that was not there. CLAUDE.md already
records that "unreadable is a fact about YOUR copy"; **this range says the same of
legible-but-wrong**, which is the more dangerous half, because nothing prompts a second look.

⚑ **What follows for the work.** The 0008, 0012, 0019, 0024 and 0031 stints built their patch
files from the archive copy alone. That does **not** show their findings are wrong — different
gatherings are inked differently, and their most striking finds (a dropped `non`, a normalized
verse address) are of classes an ink blot cannot produce. But the class is now measured, and on
PL 113 **a single-witness letter call is worth one Gallica request before it is applied.** A
Gallica region fetch costs one HTTP request and no download.

⚠ **And the converse holds, which is why the second witness was not simply substituted for the
first: at 0171D the two copies genuinely disagree** (§5.1). Neither is the plate; both are.

---

### §3 · THE FOUR UNPAIRED GUILLEMET MARKS — all four MIGNE'S, all plate-read on two witnesses

| col | our twin | the plate (both witnesses) | verdict |
|---|---|---|---|
| 0163A | unclosed `«` — `« Sanguis ejus super nos, et super filios nostros [n: (Matth. XXVII)].` | the same; Migne closes it nowhere, and the paragraph ends there | **MIGNE'S** — reproduced unclosed, Pattern 5's corollary |
| 0168B | orphan `»` — `VERS. 26.--Qui agnitis, » etc.` | the same, with no opener | **MIGNE'S** — reproduced unopened |
| 0168B | nested `«` inside a closed span — `« Cognovit autem Judas, etc. In Hebraeo habetur: « justificata est ex me; »` | the same | **MIGNE'S** — a genuine inner quotation, counted once with its host |
| 0169A | orphan `»` — `Qui relicto, » etc.` | the same, with no opener | **MIGNE'S** — reproduced unopened |

⭐ **The 0163A span is the brief's one open-ended span, and the brief's warning that it "may be
SHORT" does not apply here — I read it at the line.** Migne prints
`« Sanguis ejus super nos, et super filios nostros (Matth. xxvii.)` and then **starts a new
paragraph** with `« Et factum est cum dimitteret animam. »`. The span the brief shows is the whole
span there is.

⛔ **Six sites where Migne repeats `«` at the head of a continued line and our TEI drops it**:
0161D, 0162C, 0164C, 0169A ×2, 0169B, 0171C, 0172D. **Guillemet parity is checked against the
twin, so every dropped one is invisible to `verify-english`** — this is the class stint 1 named at
0067C/0069C and it is still running. Nothing was repaired; the English mirrors the twin and the
corrections are in the patch file.

---

### §4 · ⚠⚠ 7a″ — THE VULGATE COLLATION. **This is the deliverable.**

All 141 guillemet spans and every scriptural italic span were collated **against
`sources/vulgate/clementine-flat.txt`, line by line, cited by book chapter:verse** — never from
memory and never from the brief's pre-scan, whose `✓` addresses were read and checked. **The spans
that AGREE are listed too (§4.4): a list of divergences alone cannot be told apart from a report
by an agent that only chased the ⚠ marks.**

⚑ **The ERRATA of our own comparand were read first and they touched this range twice.** At
**Gn 35:18** our copy prints ***Benomi*** where the Clementine reads *Benoni* — so the `[var:]`
at 0163A is deliberately argued from *vocavit nomen filii sui* / *appellavit eum*, the substantive
differences, and **not** from the spelling of the name, and its content cites *Benoni*. At
**Gn 36:34** our copy reads *Husam*; the internal control (`Husam` ×3, `Husan` ×0) makes that the
Clementine's own reading rather than a defect, so the 0164C decline (§4.2) rests on a checked file.

#### 4.1 The eleven `[var:]` fired — every one on a column read at the plate on TWO witnesses

| col | Migne prints | Clementine | marker |
|---|---|---|---|
| 0161A | `« Tristemque **blanditus delinivit**. »` | Gn 34:3 *tristemque **delinivit blanditiis*** | `[var: Vulg. Gen. 34:3 *tristemque delinivit blanditiis*, "and he soothed her, being sad, with flatteries"]` |
| 0162A | `« Venit igitur Jacob **Suzam**, »` | Gn 35:6 *Venit igitur Jacob **Luzam*** | `[var: Vulg. Gen. 35:6 *Luzam*]` |
| 0162C | `« Reges**que** de lumbis **ejus** egredientur, »` | Gn 35:11 *reges de lumbis **tuis** egredientur* | `[var: … *reges de lumbis tuis egredientur*, "from thy loins"]` |
| 0163A | `« Et factum est cum dimitteret animam. »` | Gn 35:18 *Egrediente autem anima prae dolore* | `[var: … *Egrediente autem anima prae dolore*, "and her soul departing for pain"]` |
| 0163A | `« vocavit **nomen ejus**, filius doloris mei: pater vero ejus **vocavit nomen ejus** Benjamin. »` | Gn 35:18 *vocavit **nomen filii sui Benoni, id est,** Filius doloris mei : pater vero **appellavit eum** Benjamin* | `[var: …]` |
| 0163B | `« Abraham duos filios habuit, unum de ancilla, et **alterum** de libera, »` (cited *Gal. IV*) | Gal 4:22 *unum de ancilla, et **unum** de libera* | `[var: …]` |
| 0165C | `« **Misit** Deus Filium suum in similitudinem carnis peccati. »` (cited *Galat. capite quarto*) | Rom 8:3 *Deus Filium suum **mittens** in similitudinem carnis peccati*; Gal 4:4 *Misit Deus Filium suum, **factum ex muliere*** | `[var: …]` |
| 0165C | `« **Non veni** nisi ad oves quae **perierant** domus Israel. »` (cited *Matthaei decimo quinto*) | Mt 15:24 *Non **sum missus** nisi ad oves, quae **perierunt** domus Israel* | `[var: …]` |
| 0170C | `« Non permanebit Spiritus meus in **hominibus istis**, »` | Gn 6:3 *Non permanebit spiritus meus in **homine in aeternum, quia caro est*** | `[var: …]` |
| 0170D | `« **Dedit ei** nomen quod est super omne nomen, »` (cited *Phil. II*) | Phlp 2:9 *et **donavit illi** nomen, quod est super omne nomen* | `[var: …]` |
| 0172B | `« **Reus ero peccati in patrem** omni tempore, »` | Gn 43:9 *ero **peccati reus in te** omni tempore* | `[var: …]` |

**Notes on four of them.**
**0161A** is the marker the whole paragraph turns on: Gregory is expounding how the corrupter
*calls up an empty hope and security* before the penitent mind, and Migne's *blanditus* makes
flattery the corrupter's **act** where the Vulgate's *blanditiis* makes it his instrument.
**0165C (Gal./Rom.)** — the marker states both readings and does not say why they differ, per
Pattern 14. What is on the page is that Migne cites *Galatians four* for words that stand at
Rom 8:3, and that Gal 4:4 does open *Misit Deus Filium suum*. The reader is given both and the
crux argues nothing further.
**0170C (Gn 6:3)** — *in homine in aeternum, quia caro est* → *in hominibus istis* narrows a
universal sentence about man to a particular judgment on the men of that generation. That is a
change of sense, and it fires; **the neighbouring quotation in the same sentence does not** (below).
**0172B** — *in patrem* for *in te* moves Judas's guilt from the man he is speaking to onto his
father, in a gloss whose whole point is what Judas undertook and Ruben did not.

#### 4.2 DIVERGENT and DECLINED ON THE MERITS — every one on a read column, so the marker was available

- **0161C `« Nunquid ut scorto, »`** — Clementine Gn 34:31 *Numquid*. **Orthography, not
  divergence**, of the same class as Migne's *coelum* against the Clementine's *caelum*; not
  counted as a divergence anywhere in this file.
- **0161C `« Assensi, »`** — Clementine Gn 34:24 *Assens**ique*** *sunt omnes*. A dropped enclitic
  in a bare one-word lemma cut with `etc.` Nothing rests on it.
- **0163D `« Isti filii Seir, »`** — Clementine Gn 36:20 *Isti **sunt** filii Seir Horraei*. The
  copula is omitted; the lemma is cut with `etc.`, no step of the gloss depends on it, and the
  gloss's own subject is the Horrites' name, which the lemma does not reach.
- **0164C `« Husan. »`** — Clementine Gn 36:34 ***Husam***, and the internal control is decisive:
  `Husam` occurs **three times** in the whole file and `Husan` **none**. So the divergence is real
  and is Migne's (confirmed on both plates). **Refused** because it is one letter of a proper name
  and the gloss's argument — that this man may be Job — is untouched by it. Same standing as stint
  1's decline of the supplied *Deus* at 0079D.
- **0165C `« In Dothaim. »`** — Clementine Gn 37:17 ***Dothain*** ×4 (and *Dothan* ×1 elsewhere);
  `Dothaim` occurs **nowhere** in the file. **Refused for the same reason**, and with the added
  control that the etymology the gloss builds on it (*Defectionem*, "a falling away") is
  unaffected by the final consonant.
- **0165D `« Viderunt viatores Ismaelitas. »`** — Clementine Gn 37:25 *viderunt **Ismaelitas
  viatores***. Word order only. The gloss's question is *quare Ismaelitas Scriptura [nominat]* —
  about the name, not its position. **Refused**; firing here would spend the marker on noise.
- ⭐ **0170C `« Qui Spiritus Dei plenus sit, »`** — Clementine Gn 41:38 *qui **spiritu** Dei plenus
  sit*. This looks exactly like the 0170C Gn 6:3 site four words away, **and it is not the same
  thing.** *plenus* governs the genitive as readily as the ablative, and *Spiritus* is the genitive
  singular of a fourth-declension noun; so Migne's clause **says precisely what the Vulgate's
  says**, in another construction, and Pattern 14's test — "differs in a way that changes the
  sense" — is not met. **Weighed and refused.** Recorded at length because the two sites sit in one
  paragraph and a reader who saw one marked and the other not will want the reason.

#### 4.3 Divergences Migne LABELS as rival versions — no `[var:]` by construction (eight)

The convention is the 0008–0011 stint's and was not re-opened: where Migne announces the version,
its divergence from the Clementine **is the sentence's own subject**, and a marker restates what
the page already says. This range is unusually thick with them — **eight, against eleven fired**,
which is why the rule matters here.

| col | the span | Migne's own label |
|---|---|---|
| 0166A | `« argenteis. »` | *Hebraica veritas habet* |
| 0168A | `« Et sedit ad portam Enaiim, quae est in transitu Thamna. »` | *Sermo Hebraicus, Enaiim, transfertur in oculos*, in the next clause |
| 0168B | `« justificata est ex me; »` | *In Hebraeo habetur* |
| 0169B | `« principem vinariorum »` | *Ubi nos posuimus* |
| 0169C | `« Et ecce vitis in conspectu meo, et in vite tres fundi, et ipsa germinans tres fundos. »` | *Hebraeus sermo significat*, in the next clause |
| 0169C | `« tria canistra farinae »` | *Ubi in Latinis codicibus … scriptum est* — and it agrees with the Clementine anyway |
| 0171A | `« et clamavit ante eum praeco, et constituit eum super omnem terram Aegypti. »` | set at once against *Pro quo Aquila transtulit* |
| 0171A | `« Et clamavit in conspectu ejus ad geniculationem. »` | *Aquila transtulit* |
⚑ Two of the eight (0168A, 0169C) carry the label in the **following** clause rather than before
the quotation. They are declined on the same ground, and the difference is recorded rather than
smoothed: a reader checking the rule will find these two do not have the prefix shape.

#### 4.4 COLLATED AND AGREEING — checked, exact or a clean whole-word fragment

**Gn 33:** 33:1 `« Elevans autem Jacob oculos. . . . divisitque filios Liae et Rachel, »` (both
limbs exact across Migne's own ellipsis) · 33:10 `« Sic enim vidi, »` · 33:14 `« Et ego sequar, »` ·
33:17 `« Socoth. »` · 33:18 `« Transivitque in Salem, »`.
**Gn 34:** 34:1 `« Egressa est autem Dina, »` · 34:2 `« Quam cum vidisset Sichem. . . . et dormivit
cum illa, »` (both limbs exact) · 34:21 `« Pacifici. »` · 34:25 `« Arreptis, »` · 34:30 `« Nos pauci
sumus, »`.
**Gn 35:** 35:4 `« Dederunt ergo ei, »` · `« Et inaures, »` · 35:10 `« Non vocaberis ultra, »` and
`« Non vocaberis ultra Jacob, »` ×2 · 35:11 `« Cresce et multiplicare. »` · 35:14 `« Ille vero
erexit titulum lapideum in loco quo locutus fuerat, »` · 35:16 `« Ephratam. »` · 35:18
`« Egrediente autem, »` · 35:21 `« Egressus inde, »` · 35:22 `« Abiit Ruben, »` and `« Erant
autem, »` · 35:27 `« Civitatem Arbee. »` ×2.
**Gn 36:** 36:6 `« Abiit in alteram regionem. »` · 36:20/21 `« Filii Seir, »` · 36:22 `« Erat autem
soror, »` · 36:24 `« Iste est Ana. »` ×2 · 36:30 `« Isti duces. »` (the address is *VERS. 29, 30*
and the words are v. 30's) · 36:31 `« Reges autem. »` ×2.
**Gn 37:** 37:2 `« Joseph cum sedecim esset annorum, »` · `« Et erat cum filiis Balae, »` · `« Et
erat cum, »` · 37:3 `« eo quod in senectute genuisset eum. »` · `« Fecitque ei tunicam
polymitam. »` · 37:4 `« Videntes autem fratres ejus, »` · 37:10 `« Num ego, »` · 37:12 `« Cumque
fratres illius, »` and `« in pascendis gregibus, »` · 37:14 `« Renuntia mihi, »` · 37:21f
`« Ruben. »` · 37:23 `« Nudaverunt eum, »` · 37:28 `« Extrahentes. »`, `« Vendiderunt. »`,
`« argenteis. »` · 37:34 `« Scissisque vestibus, »` · 37:35 `« Descendam ad filium meum. »`.
**Gn 38:** 38:1 `« Eodem tempore, »` · 38:3 `« Quae concepit, »` · 38:5 `« Tertium quoque
peperit, »` · 38:13 `« Ad tondendas oves. »` · 38:14 `« Quae depositis viduitatis vestibus, »` and
`« Sedit in bivio. »` / `« Sedit in bivio, »` · 38:20 `« Misit autem Judas. »` · 38:25 `« Quae cum
duceretur, etc. »` · 38:26 `Qui agnitis, »` · 38:27 `« Instante autem, »` · 38:29 `« Quare
divisa, »`.
**Gn 39–44:** 39:1 `« Igitur Joseph ductus est in Aegyptum, »` · 39:2 `« Fuitque, »` · 39:7 `« Post
multos itaque dies injecit domina, »` and `« Injecit domina sua, »` · 39:12 `« Qui, relicto in manu
ejus pallio, »` · 40:1 `« His ita gestis, accidit ut peccarent duo eunuchi, »` and `« Pincerna regis
Aegypti, et pistor, domino suo, »` · 40:9 `« Videbam coram me vitem, »` · 40:16 `« Tria
canistra. »` · 40:20 `« Natalitius Pharaonis. »` · 41:1 `« Post duos annos vidit Pharao somnium.
Putabat se stare, »` · 41:2 `« De quo ascendebant septem boves, »` · 41:9 `« Tunc demum reminiscens
pincernarum magister, »` · 41:17 `« Putabam me stare, »` · 41:33 `« Nunc ergo, »` · 41:34 `« Et
quintam partem fructuum, »` · 41:41 `« Dixitque rursus Pharao, »` and `« Ecce constitui te super
universam terram Aegypti, »` · 41:43 `« Clamante praecone, »` · 41:45 `« Et vocavit, »` and
`« Deditque illi uxorem, »` · 41:50 `« Nati sunt autem Joseph filii duo, »` · 41:56 `« Aperuitque
Joseph universa horrea, »` · 42:1 `« Audiens autem Jacob quod alimenta venderentur in Aegypto, »` ·
42:16 `« Mititte ex vobis unum . . . . . alioquin per salutem Pharaonis exploratores estis. »`
(**both limbs exact**; the *Mititte* form is a typographic matter, §5.1, not a Vulgate divergence) ·
42:23 `« Nesciebant autem, »` · 42:27 `« Apertoque, »` · 42:35 `« Singuli repererunt, »` · 42:37
`« Cui respondit Ruben, »` and `« Duos filios meos interfice, si non reduxero illum tibi, »`
(**exact**) · 42:38 `« Deducetis canos meos, »` · 43:11 `« Modicum resinae et mellis et
storacis, »` · 43:23 `« Deus vester et Deus patris vestri dedit vobis thesauros, »` · 43:29
`« Attollens autem Joseph oculos vidit Benjamin, »` · 43:32 `« Quibus appositis, »` · 43:34
`« Biberuntque et inebriati sunt, »` · 44:5 `« Scyphus quem furati estis, »` · 44:15 `« An ignoratis
quod non sit similis mei in augurandi scientia? »` (**exact, including Migne's `?`**) · 44:16
`« Cui Judas, »`.
**Outside Genesis:** Mt 27:25 `« Sanguis ejus super nos, et super filios nostros »` (**exact**) ·
Jo 1:29 `« Ecce Agnus Dei, »` · Ct 4:2 `« Dentes tui sicut greges tonsarum. »` · Ps 17:45
`« Populus, quem non cognovi, servivit mihi. »` (**exact**) · Rom 8:30 `« Quos autem praedestinavit,
hos et vocavit; et quos vocavit, hos et justificavit »` (**exact but for Migne's `;` where the
Clementine sets `:`**) · Mt 3:7 / Lc 3:7 `« genimina viperarum, »` · Mt 19:30 `« primi novissimi, et
novissimi primi. »` · **Gn 1:2** `« Spiritus Dei ferebatur super aquas, »` — ⭐ **exact, and it is
exact only because the plate was read**: our twin has dropped *Dei*, and the restored lemma agrees
with the Vulgate word for word, so **no marker.** Had the twin been translated as it stands, this
would have looked like a divergence Migne never made · Ps 67:18 `« Currus Dei decem millibus
multiplex; »` (**exact**) · Phlp 2:9–10 `« nomen quod est super omne nomen, ut in nomine Jesu omne
genu flectatur »` (**exact, joined across the verse break**) · Mt 3:3 `« Parate viam Domini. »` ·
Ps 18:5 `« In omnem terram exivit sonus eorum »` (**exact**) · Os 11:1 `« Ex Aegypto vocavi Filium
meum. »` (**exact**; Migne's capital *F* is his) · Ps 11:7 `« Eloquia Domini eloquia casta, argentum
igne examinatum, probatum terrae, purgatum septuplum, »` (**exact but for the Clementine's `;`
after *casta***) · Ps 64:10 `« Visitasti terram et inebriasti eam, »` (**exact**).

⚠ **One quotation is NOT scripture quoted as scripture and was not collated as such:** 0161D
`« Paratique sint ulcisci omnem inobedientiam, »`, which echoes 2 Cor 10:6 (*et in promptu habentes
ulcisci omnem inobedientiam*). Migne recasts it into the jussive of his own surrounding sentence,
gives it no `[n:]`, and prints the same words **unguilleted** eight lines earlier at 0161C
(*parati ulcisci omnem inobedientiam*). Pattern 14 is for scripture quoted as scripture.
**Declined, and recorded so a blind reader knows it was looked at.**

---

### §5 · THE DECLINED LIST — every suspect reading, what settles it, and the page

#### 5.0 ⛔⛔ TWELVE ARCHIVE-COPY READINGS, ALL WITHDRAWN — the settling witness is Gallica

Each was read at 300 dpi and re-read at 600 dpi on `patrologiaecurs04migngoog`, and each was then
refuted by the Gallica copy, which agrees with our twin. **All twelve are withdrawn. No marker was
fired on any of them, and the English follows the twin at every one.**

| col | what our archive copy appeared to read | Gallica (= our twin) | archive p. / Gallica f |
|---|---|---|---|
| 0160D | `nominantur` | `nominatur` | 85 / 80 |
| 0160D | `Melchisedech.` (full stop) | `Melchisedech,` | 85 / 80 |
| 0161C | `expurgationi` | `expugnationi` | 86 / 81 |
| 0162A | `seu sensu` | `sed sensu` | 86 / 81 |
| 0162A | `Christi primum est,` (no stop) | `Christi. Primum est,` | 86 / 81 |
| 0162B | `cum legatur` | `cur legatur` | 86 / 81 |
| 0163A | `Sanguinis ejus super nos` | `Sanguis ejus super nos` | 87 / 82 |
| 0163A | `Pilius vero dextrae` | `Filius vero dextrae` | 87 / 82 |
| 0163D | `parente recesserit` | `a parente recesserit` | 87 / 82 |
| 0164D | `Pro unica varia` | `Pro tunica varia` | 87 / 82 |
| 0165A | `tularem` · `colcbiis` · `in est` | `talarem` · `colobiis` · `id est` | 88 / 83 |
| 0165A | `VERS. 4-6.` | `VERS. 4-9.` | 88 / 83 |

⭐ **Four of these were the strongest candidates in the whole stint.** *expurgationi* and
*cum legatur* both construed and both would have changed what the page says; *Sanguinis* is a
genitive with nothing to govern it, which is Pattern 12's own test for a real word with no
grammatical slot; and `VERS. 4-6.` had the shape of the 0019–0023 stint's genuine `VERS. 27-19.`
find. **Not one of them survived a second photograph.**

#### 5.1 ⛔⛔ 0171D `Mititte` — THE TWO WITNESSES DISAGREE, so no marker can stand

> `VERS. 16-22.-- « Mititte ex vobis unum . . . . . alioquin per salutem Pharaonis exploratores
> estis. »`

**Gallica f86 prints `Mititte`. The archive.org copy prints `Mittite`.** Both are crisp — the
archive reading at 600 dpi, the Gallica reading blown up to 1600 px — and the difference is a
letter **order**, `t-i-t-t-e` against `t-t-i-t-e`, which no inking artifact produces in either
direction. Our twin follows the Gallica reading.

**Verdict: two printings, not two photographs.** That is a fact about PL 113 the second-witness
protocol in CLAUDE.md does not yet record, and it has a direct consequence: **"the plate" is not
a single object for this volume.**

⛔ **No `[sic:]`.** A `[sic:]` is a public claim that Migne's type is defective, and one witness
shows sound type. **No patch either**: there is nothing to correct our twin *to*. The English
renders the sense ("Send one of you") and this crux is the whole record.

#### 5.2 ⭐ THE ONE `[sic:]` — 0169B `trangressionis`, confirmed on BOTH witnesses

> `Invenit Joseph duos eunuchos in carcere, etc., *usque ad* **trangressionis** ligno suspenditur.`

*trangressionis* is no Latin word (the *s* of *transgressionis* is missing). **Both plates print
it and our twin carries it**, so the verbatim-substring guard is satisfied and the defect is
demonstrably Migne's and not the digitization's. Fired as
`upon the wood of transgression [sic: *trangressionis*]` — the sense rendered **beside** the
marker, per Pattern 7's 2026-09-05 amendment, so that stripping the marker still leaves a
readable clause.

⭐ **This is the first `[sic:]` in this work**, against ~34,000 words and 40+ `[var:]` standing.
It is fired only because the two-witness read makes the attribution certain; the six other
non-words met in this range all went the other way (§5.3).

#### 5.3 Non-words in our twin — SIX, and all six are OURS. No `[sic:]`, patches instead

| col | our twin | the plate (both witnesses) |
|---|---|---|
| 0166A | `exspolitus` | `exspoliatus` |
| 0166C | `sb;αρχιμαγείρους` | `ἀρχιμαγείρους` |
| 0170A | `veritalis` | `veritatis` |
| 0173A | `scorsum` | `seorsum` |
| 0173C | `sedjoco` | archive: `sed joco` (a clear space); Gallica: letters touching |
| 0169B / 0169C / 0160C / 0167D | four **holes** where Migne sets Hebrew | סכות · עינים · משקה · שריגים |

⛔ **None of these is markable.** A `[sic:]` on any of them would publicly accuse Migne of the
digitization's error, and the verbatim guard would in any case reject it for the four Hebrew sites.
Per the locked "plate where read" rule the English renders the plate at each, and the patch file
carries the repairs.
⚑ **`sedjoco` is the one I would not swear to.** The archive copy shows an unambiguous space; the
Gallica copy shows the letters touching, which is a spacing question and therefore far weaker
evidence than the *Mititte* letter-order case. I have called it **our lost space** — the class stint
1 recorded at 0078D (`possunt,ita`) — and fired nothing. If a third witness ever settles it the
other way, the site becomes a Pattern 10 split-type `[sic: *sedjoco*]`.

#### 5.4 ⭐ THREE `[ed:]`, and the fourth Hebrew site takes none — Pattern 13a's own line

Migne sets Hebrew square script wherever Jerome is quoted on a name, and **our transform has lost
every occurrence in my range**, exactly as it did for stints 3 and 4 in theirs. Pattern 13a
clause 2 gives the marker to a loss that would otherwise be **invisible as an absence**; clause 1
leaves an ordinary mid-sentence loss to a patch and a crux.

| col | our TEI reads | the plate reads | the scar our text carries | marked? |
|---|---|---|---|---|
| 0160C | `legitur *Socoth* Est autem` | `legitur *Socoth* סכות. Est autem` | **two sentences run together with no stop** | **YES** |
| 0169B | `habetur *masqueh* , illud` | `habetur *masqueh* משקה, illud` | **a comma floating after a space** | **YES** |
| 0169C | `vocantur *Sarigim* .` | `vocantur *Sarigim* שריגים.` | **a full stop floating after a space** | **YES** |
| 0167D | `ad portam Enaiim [0167D], quod` | `ad portam Enaiim עינים, quod` | **none — the sentence is sound** | **no** |

⛔ **None is a `[sic:]` or a `[var:]`**: the plate is perfectly legible and it is our transcription
that has the hole. Pattern 13's rule that an `[ed:]` **never supplies the lost text** is kept — the
recovered Hebrew is in this file and in the patch file, not in the running English.
⚑ **The count for the work is now TWELVE Hebrew words known lost** (two at 0104C, four across
0113C–0118C, four here). It is systematic, not accidental, and the patch file names the cheap
work-wide detector.

#### 5.5 Real words that read oddly — rendered as printed, no marker (Addendum A)

- ⭐ **0164B `filii Ismael`** — *Sciendum quod non omnes reges commemorat qui fuerunt antequam
  haberent reges **filii Ismael**, quorum primus Saul.* Gn 36:31 has *filii **Israel***, and Saul
  is Israel's first king, not Ishmael's — so the sentence as printed is false. **Confirmed on both
  witnesses as MIGNE'S.** Rendered as printed ("the children of Ismael"). ⛔ **`[cj:]` declined**:
  this is a proper-name slip, and 18a scopes the pattern to negations, correlatives and the named
  ✅ list. It is also gloss prose, not a quoted lemma, so Pattern 14 does not reach it either.
  **The most interesting thing on these eight pages, and the apparatus has no marker for it** —
  which is exactly what a crux is for.
- ⭐ **0166D–0167A `qui descendit ab baptismum Joannis`** — *ab* governing an accusative, in a
  sentence whose next clause reads *Joannes videns Christum venientem **ad** baptismum*. Read at
  native resolution on Gallica: **the plate prints *ab***. Rendered literally, "who went down
  **from** the baptism of John", because Pattern 7a forbids translating a word as anything other
  than what it means in order to rescue a sentence. ⛔ **`[cj:]` declined, and the control is
  exact: 11535 @1360C is *ab* for *ad subdiaconatum*, direction reversed, and 18a records it as
  DECLINED with visible reluctance and rules against re-adjudicating it.** The conjecture (*ad*)
  is here and not in the text by that ruling, not by my judgment.
- **0166A `Ismaelitis venditis venditur`** — *Joseph de cisterna levatus Ismaelitis venditis
  venditur.* Confirmed on the Gallica native crop. The only grammatical reading is a dative plural
  *Ismaelitis venditis*, "to Ismaelites that had been sold", which is odd but construes. Rendered
  so; **no marker on a corpus argument, however good** (addendum A).
- **0165D `polimyta`** for the lemma's *polymitam* — an orthographic variant on the plate, not a
  defect. Rendered "of divers colours" in both places.
- **0166D `Hiras`** for Gn 38:1 *Hiram* — gloss prose, not a lemma; one letter of a proper name;
  the etymology (*videns Deum*) is unaffected. Rendered as printed.
- **0170B `Notandum Aegyptii quod quintam partem`** — the word order is Migne's on both witnesses.
  Rendered "It is to be noted that the Egyptians gather…"; the displaced nominative is not
  reproducible in English and there is nothing to mark.
- **0164A `quibus expulsis. Idumaei habitaverunt pro illis.`** — the full stop after an ablative
  absolute is Migne's on both plates. Reproduced.

#### 5.6 Unexpressed subjects supplied — every one named, with what decided it

1. **0161A** *ut tunc bona nulla percipiat … et tunc plenius absorbeatur suppliciis, quae nunc
   gaudet in deliciis.* Subject of *percipiat* / *absorbeatur*, and antecedent of *quam* and
   *quae*, is **mens** — the only feminine singular in the sentence, and the thing whose penance
   is being put off. Rendered "it whom evils now make sad" / "it which now rejoices in delights",
   keeping the relative rather than repeating the noun.
2. **0161A** *modo misericordem Deum loquitur, et tempus ad poenitentiam pollicetur.* Subject is
   **corruptor**, named two clauses earlier, **not** *mens* — *mens* is what is being deceived
   (*decepta mens ducitur*), so the flattery cannot be hers.
3. **0161D** *ne violenter corporali delicto, aut fornicatione spirituali succumbant.* Subject is
   **animae … sibi commissae**, not the pastors: the clause *ne* depends on is *curam habere
   animarum sibi commissarum*, and it is the souls that would succumb to a bodily offence or to
   spiritual fornication. Rendered "lest they be violently overcome".
4. **0163C** *« Civitatem Arbee, » etc. Angelorum vel sanctarum animarum, quibus est appositus.*
   Masculine singular subject is **Isaac**, supplied from the lemma's own verse (Gn 35:29,
   *appositus est populo suo*); the gloss contains no other masculine antecedent. Rendered "to
   whom he was gathered".
5. **0167D** *Illo non cognoscente fecundatur.* *Illo* is **Judas**, the man of the verse.
   Rendered "she is made fruitful, he not knowing it", which supplies no noun and keeps the
   negative on the participle.
6. **0168D** *ejusque pondera leviat, quae volens portat.* The subject of *leviat* — Gregory's
   *Deus* — **was cut away by the abridgment.** Nothing was supplied; the English keeps the bare
   third person the Latin's own verb carries.
7. **0173C** *sed qui noverat eum scire … narrationi inserebat.* *inserebat* has **no expressed
   object in the Latin either**; none was supplied.

#### 5.7 Negation — every host named (tests 2 and 2a)

The 2a trigger — a negative resting on a verb with a quantifier, correlative or predicate nearby —
fires **ten times** in this range. Each host was proved from the sentence's own structure, never
from what reads well:

- **0161C** *non quod multo minus haberet **quam possent** expugnationi civitatis sufficere.* The
  *non* governs the whole *quod*-clause; the comparative *minus … quam* sits **inside** it. → "not
  because he had far fewer than would suffice".
- **0162A** *comprobatur Bethel **non** Ulam … **sed** Luzan.* → host **Ulam**, by the correlative,
  not the verb.
- ⭐ **0168A** *In hoc facto Judae **non** justitiae cernitur sinceritas, **sed** promissionis
  fidelitas.* The 2a shape exactly: the *non* stands immediately before the verb *cernitur*, and
  the *sed* limb proves it governs **justitiae sinceritas**. Rendered as an English cleft — "it is
  **not the sincerity of justice** that is discerned, but the faithfulness of his promise" — which
  is the only construction that keeps the negative on the noun.
- **0168B** *non quod justa fuerit, sed quod … minus male fecerit* → host *justa fuerit*; and
  *non vaga turpitudine, sed requirendo filios* → host **vaga turpitudine**.
- **0168B** *dicunt **non** hunc esse populum Christi, **nec** Abrahae semen, **sed** …* → hosts
  *hunc populum Christi* and *Abrahae semen*; all three particles carried.
- ⭐ **0172A** *quia **non** pecunia emitur Christus, **sed** gratia.* Host is **pecunia**, by the
  *sed*. Rendered as a cleft — "it is **not with money** that Christ is bought, but with grace" —
  for the same reason as 0168A. A flat "Christ is not bought with money" would have put the
  negative on the verb.
- **0172B** *noster Joseph **non** quaerit nostra, **sed** nos.* → host **nostra**.
- ⭐ **0173B** *nam ita inebriari ut inebriantur ebriosi, **nec ipsi terrae** utile est.* The
  negative carries the intensifier *ipsi*: → "is not useful **even to the earth itself**".
  Dropping the *ipsi* would have made the sentence a flat denial instead of an a-fortiori.
- **0173B** *qui **non** satietate se replet, **sed** mergit diluvio.* → host **satietate**.
- **0171C** *in illo Joseph ampliationem **non** habuit **nisi sola** Aegyptus.* *non … nisi* with
  the quantifier *sola*; both carried → "none had the enlargement **save Egypt alone**".

⚑ Every other printed negative in the range (`non` ×24, `nec` ×5, `neque` ×2, `nisi` ×7, `nondum`
×3, `nullus`, `nulla`, `ne` ×4, `nunquam` 0) was read against its English word by word. **None was
dropped and none was supplied.**

#### 5.8 The seven licensed Pattern 8b colons, and the band scan that found everything else

The band-by-band comparison (Test 3 — `:` `;` `?` `«` `»` `!` per column anchor, markers stripped)
was run on all six chunks. It returned **fourteen** mismatched band/mark pairs on the first pass.
**Six were my own errors and were repaired**; the remaining eight are accounted for below.

⛔ **The six repaired**, which is Test 3 earning its place a fourth time on this work: a **destroyed
colon** at 0161A (*admissum flere conatur:*) and another at 0161A (*quam nunc mala contristant:*,
softened to a semicolon **and** wrapped in two supplied em-dashes); **supplied semicolons** at
0161B, 0164B and 0172A where Migne prints commas; and a **colon moved inside an italic span**
(`*son of days:*` for `*filium dierum*` + `:`). The 0161A pair is the dangerous shape — one mark
destroyed and one supplied within four lines, which very nearly cancelled in the totals.

✅ **Seven supplied colons remain, and every one is Pattern 8b** — Migne closes an indirect question
with `?`, English cannot end that construction with the mark, so the question goes direct behind a
colon. Nothing is deleted and nothing invented:

| col | Migne | English |
|---|---|---|
| 0162A | *Quaeritur quale inaures, quae ornamenta erant … non pertinentia?* | It is asked**:** of what sort were the earrings … ? |
| 0162B | *Quaeritur cum semel dictum sit … cur legatur postea Jacob vocatus?* | It is asked**:** since it was once said … why is he afterwards read to have been called Jacob? |
| 0163C | *Quaeri potest cur Esau … in Seir dicatur habitasse?* | It may be asked**:** why is Esau said … ? |
| 0166B | *Quaeritur quomodo hoc intelligatur, utrum mali tantum … descendant?* | It is asked**:** is this to be understood of the wicked only … ? |
| 0166C | *Ubi quaeritur quomodo postea uxorem habere dicatur?* | Whereupon it is asked**:** how is he afterwards said to have a wife? |
| 0166D | *Quaeritur quomodo ista fieri potuerunt?* | It is asked**:** how could these things have come to pass? |
| 0172B | *Quaeritur utrum ideo ad infernum … haec loquatur?* | It is asked**:** does he speak thus … ? |

⭐ **And one band differs by design, in the other direction.** At **0166C** the twin carries **two**
semicolons and the English **one** — because the twin's second semicolon is inside `sb;`, the
mangled entity prefix that is our transform's artifact and not Migne's punctuation (§5.3). This is
the only mark in the range where the English does not follow the twin, and it is recorded here so
that a later band scan does not read it as a defect.

⛔ **Not one comma→semicolon sweep was made.** Migne prints semicolons freely in this range (38 in
six chunks), so Tobit's narrow exception does not apply and was not invoked.

#### 5.9 One bracketed English exponent supplied, and it is the only supply in the stint

**0165D–0166A** — *Quaeritur quare Ismaelitas Scriptura, etc., usque ad …*. The abridgment's `etc.`
has cut out the governing verb (Augustine's *appellet*), leaving an accusative and a nominative
with nothing between them. Rendered **"It is asked why Scripture [names them] Ismaelites, etc."**,
with the supplied word in square brackets, which is corpus practice for supplied English and the
0008–0011 stint's exact precedent (*"but it can **[be]** begotten in exile"* at 0098A).
⛔ **This is not the formula being completed.** All 29 `*usque ad*` resumptions were left exactly
where they land, three of them mid-clause and one (0172A) ending without a full stop because Migne
prints none: *… erit Deus, for he shall not be, but shall be accounted*. **No verb and no object
was supplied to any of the twenty-nine.**

---

### §6 · SECTIONS READ CLEAN (Test 4 — does the English ASSERT what he asserts?)

Read paragraph by paragraph against the Latin **after** the counts were known clean, asking that
one question only:

- **0160B–0160D** — Aquila on the division of the companies, and Jerome's double Salem. The two
  etymologies (*consummatam atque perfectam* / *pacificam*) and their re-use six lines later
  (*curati atque perfecti*) are the paragraph's whole argument and were checked against each other.
- **0161A** — Gregory on Dina, the densest passage in the stint: five clauses whose subject
  alternates between *mens* and *corruptor* with neither named (§5.6). Checked twice.
- **0162A–0163A** — the *Non vocaberis ultra* question, the Bennoni/Benjamin etymology and its
  Hebrew letter-argument (*iamin* in *n*, *iamim* in *m*), where the whole point is which letter
  ends which word. Clean.
- **0164C–0166D** — Joseph as the type of Christ; Isidore's *Mystice*, the *tunica polymita*, and
  Jerome on the ἀρχιμαγείρους. Clean, with the one supplied bracket at 0166A recorded above.
- **0167A–0168D** — Thamar and the Church of the Gentiles, the longest continuous allegory in the
  range and the passage where the *gentes* axis is exercised on both sides within eight lines
  (§1e). Clean.
- **0169C–0171C** — Joseph's exaltation, the three intimations of the Spirit, and the granaries.
  Clean; and reading this stretch **against the plate rather than the twin** is what recovered
  *sancti* and *Dei*, neither of which is detectable from the Latin alone.
- **0171D–0173C** — the brethren in Egypt, the cup in Benjamin's sack, and Augustine on drunkenness
  (whose *nec ipsi terrae* a-fortiori is the sharpest negation in the stint). Clean.

**Candidates rejected, with reasons, so a blind reader knows they were looked at:** §5.0's twelve
withdrawn archive readings · §5.1's `Mititte` · §5.2's fired `trangressionis` and §5.3's six
declined non-words · §4.2's seven declined divergences and §4.3's eight declined by construction ·
§5.5's seven odd-but-real words, including the two — *filii Ismael* and *ab baptismum* — that came
closest to a `[cj:]` and were declined on named precedent · the `. . . .` and `. . . . .` ellipsis
runs after `VERS. 1-9.`, `VERS. 2-32.` and `VERS. 16-22.` (Migne's, reproduced with his own
spacing) · and the sigla whose internal spacing our TEI alters (`(AUG. in Q. super Genesin. )`,
`(HIER., ibid. )`, `(AUG., ubi supra. )`), reproduced from the twin and logged in the patch file.


---

## STINT 9 — chunks 0042–0046 (cols 0173D–0182D)

*Filed as `cruces-0042.md`; merged verbatim, headings demoted one level. Nothing in it was rewritten — where a later stint corrected it, the correction stands in that stint's section.*


**Stint 9 of 8950, and the range that ENDS THE WORK.** Five chunks, 3,890 Latin body words →
5,607 English (1.44×, markers stripped). `verify-english.mjs` clean on the whole work: column
anchors, `[n:]` notes, guillemets, italic spans, question marks and paragraph structure all 1:1
with the Latin twins; frontmatter copied verbatim, field order included.

**Apparatus fired: 23 `[var:]` · 1 `[ed:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[nt:]`.**
Every `[var:]` stands on a column this stint read at the plate (§2). ⚑ **`plate-gate.mjs`
currently rejects 21 of the 23** because `data/plate-reads.json` carries only p. 92 of my range;
the other four pages are in **`data/briefs/8950-PLATE-READS-0042.json`** and the gate passes as
soon as the orchestrator merges it. Nothing was marked on a column I had not opened.

⛔⛔ **READ §2.1 BEFORE ANYTHING ELSE.** Every column here was read on the archive copy AND at
Gallica, and **thirteen of fifteen single-witness archive calls were refuted, with our TEI twin
right every time.** Six sites in the English had been set from the archive plate and are now
reverted. The patch file is Part-C-first for that reason.

Counts, chunk by chunk (Latin = English in every case):
guillemets `«`/`»` — 0042: 15/15 · 0043: 24/24 · 0044: 10/**9** · 0045: 43/43 · 0046: 17/**15**
(frontmatter included; the unpaired openers are Migne's, §3).
`[n:]` notes — 6 / 6 / 8 / 21 / 8. Column anchors — 6 / 8 / 4 / 11 / 8.
Italic spans — 9 / 5 / 6 / 15 / 2, matched span for span.
Question marks — 1 / 1 / 4 / 3 / 0, exact.

---

### §0 · SPAN COUNT AGAINST THE BRIEF — 140 against 140, and the lists are IDENTICAL

**My Latin carries 140 marked spans, counted PARAGRAPH-BOUNDED; the brief prints 140, of which
0 open-ended.** Both numbers agree. But a bare total is not a checkable number on a guillemet
book, so the lists were **diffed span for span** (the 0024–0030 stint's method):

- Counted with `«[^«»]*»|\*[^*\n]+\*` applied **within each paragraph**, never DOTALL over a
  chunk body — the bug the launch brief names.
- The two lists are **identical in 139 of 140 entries, in order**, with **no residue on either
  side**.
- The single presentational difference is at **0181A**, and it is the unmatched-`«` shape
  itself: Migne opens `« Adhuc quadraginta dies, et Ninive subvertetur …` and never closes it,
  so the brief's harvester ran the span forward through four sentences to the closing mark of
  the inner `« Triduum, et Ninive subvertetur: »`, while my paragraph-bounded regex isolates the
  inner span alone. **One site, counted once either way**, and the underlying fact — an
  unclosed opener — is confirmed at the plate (§3.1).
- **One paragraph in my range is unbalanced**, 0046's second (`5 «` / `4 »`). It is the site
  just named, and the plate shows the imbalance is **Migne's**, not the digitization's.

---

### §1 · CONVENTIONS — inherited unchanged, one RETRACTION, and two this stint settled

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not** re-opened, nor were the six earlier
stints of this work (`cruces-0000.md`, `-0004.md`, `-0008.md`, `-0012.md`, `-0019.md`,
`-0024.md`), all of which I read before drafting. Adopted without re-derivation:
`VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary lemma is rendered as
the phrase it stands for; sigla ride as ordinary `[n: …]` notes with Migne's own internal
spacing, contents unanglicized; **the guillemets are the twin's, 1:1**, and their contents are
Englished; `*usque ad*` → ***as far as***, with **no verb and no object ever supplied**; the
`*Historice / Allegorice / Mystice*` tags are translated inside their italic span; **no `[var:]`
on a quotation Migne labels himself** as a rival version; **words follow the plate, punctuation
follows the twin**; a Latin gloss giving the MEANING of a name is Englished inside its span, a
Latin word MENTIONED as a word is not; `usque ad` is decided per occurrence by the `etc.` splice
test.

#### (a) ⛔⛔ NEW, AND IT IS A RETRACTION — a finding this stint made, wrote up, and then killed

**Drafted:** "our twin prints an `etc.` the plate does not carry, twice (0175A, 0176D), so the
`etc.` splice test's own diagnostic token is sometimes the digitization's." Read at 400 dpi with
the whole line in view, on both sites, and written into the patch file as a new class.

**Retracted.** `data/briefs/8950-PATCH-GATE-READ-FIRST.md` landed mid-stint; every letter- and
mark-level call in this range was then re-checked at **Gallica ark `bpt6k5505319w`, `f = (column
+ 1) / 2`**, and **Gallica prints both `etc.` exactly where our twin has them.** The archive
copy's ink had swallowed them. The English has been corrected to carry both.

⚑ **The reason this belongs in the conventions section and not merely in the errata:** the false
finding was *about an instrument this series depends on*, it construed, it survived a careful
self-audit, and it was written up as a warning to future stints. **It died on one HTTP fetch.**
The `etc.` splice test is undamaged and no stint should be told otherwise.

#### (b) ⭐ NEW — the ONE place the English follows the PLATE on a MARK, and why

Convention (ii) — punctuation follows the twin — rests on its own stated reason: an English that
follows the plate on a mark "manufactures a mismatch in exactly the instrument that exists to find
real ones, **for a difference no reader can act on**." **One site in this range is a difference a
reader can act on**, and its mark is not in the verifier's checked set (guillemets, colons,
semicolons, question marks):

**0178D — `rex alienigena fuit Herodes`.** Our twin prints `fuit. Herodes,`, which cuts one
sentence into a claim ("the first foreign king in the nation of the Jews existed") plus a verbless
fragment. Both plates print no period, and the sentence reads "the first foreign king in the nation
of the Jews was **Herod**, when Christ was already born" — which is the whole point of the
paragraph, since the argument is that the sceptre had passed from Juda by the Nativity.
**Confirmed on both witnesses** (archive p. 94, Gallica f89), at the line end with clean white
after the `t`. **The English follows the plate.**

⛔ **A second such site was drafted and withdrawn.** The archive copy shows `VERS. — « Non
auferetur sceptrum de Juda, »` with no verse number at all, and the English was set with a bare
`VERS.--`. **Gallica prints `VERS. 10.`** The archive's ink had swallowed the whole numeral — the
0036–0041 stint's "9 blotted into a 6 inside a verse address", one step worse. Restored.

⛔ Everywhere else the English follows the twin, and the band-by-band comparison is clean (§1e).

#### (c) The gloss-word calls, decided by the 0012 test (is the italic word a TRANSLATION, or the SUBJECT?)

**Englished inside their spans, because each is the meaning of something else:**
*imbrem* → ***rain*** (0174A — Jerome's point is that Hebrew *Gessem* means rain, and the
previous clause's *complutam*, "rained upon", is the argument for it) · *confessio,* →
***confession,*** and *confessio* / *laus* → ***confession*** / ***praise*** (0174C, 0178B, the
interpretation of *Juda*) · *lectulum* → ***a bed***, *virgam* → ***a rod*** (0177B — the LXX's
two renderings of one Hebrew word, and the whole sentence is about their disagreement) ·
*venatio:* → ***hunting:*** (0179B, the meaning of *Sidon*, and the *venatores* of Jer. XVI two
lines later turn on it) · *requies* → ***rest*** (0181D, the meaning of *sabbatum*) ·
*Allegorice.* → ***Allegorically.*** ×2 (0175B, 0180A) · *vel* → ***or*** (0176D, an ordinary
connective inside a quoted variant, used and not mentioned).

**Kept as printed:** *mittha* (0177B) — the Hebrew word itself, the subject of the sentence;
*m* (0174A) — a single letter discussed as a letter (*per extremum m scribitur Gessem*).

⚑ **Not italic in the twin and therefore not italicised by me, though the corpus often sets them
so:** `Mystice autem significat` (0175D) and `Allegorice emptio Joseph` (0176B) are **roman** on
both plate and twin, and ride as roman prose. The tag class is italic only where Migne sets it
as a standing label; here he folds it into the sentence.

#### (d) The vocabulary axes, with the instrument checked before reporting

- **`gentes` / `gentilis` / `gentilitas` — 11 occurrences, and the instrument was checked
  first**: a raw `gent-` grep also returns *argentei* (0174A), *indigentia* (0174A) and
  *intelligentia* (0174B), none of them the axis.
  **Gentiles** where the *Judaei*/*gentes* opposition is live: 0174A *gentilis populi* ("the
  Gentile people", set against *conversione Judaeorum* in the same clause) and *Ecclesiae
  gentium* ("the Church of the Gentiles", against *Israeliticus populus*); 0174B *gentiles,
  inutiles et laboriosi*; 0174C *plenitudo gentium* (Rom 11:25, against *Israel*); 0178A
  *possessurus gentes … diis patrum suorum renuntiantes*; 0178D *Gentes quas sibi subjunxit*
  (of the colt tied to the vine); 0179A *usque ad gentes pervenit* (Zabulon's border reaching
  Sidon, expounded of the Church's reach).
  **the Gentile world**: 0179C *simplex gentilitas ad robur operis se erexit*.
  **nations**, the axis's generic exception: 0179D *ipse erit exspectatio gentium* — Gn 49:10's
  own closing words, inside an abridgment tail, with no opposition stated.
  **nation**, singular *gens* of the Jewish people: 0178D *in gente Judaeorum* ×2.
- **`natio` — ONE occurrence, and only one.** ⚑ Instrument checked: a raw `natio` grep returns
  four hits, of which *peregrinationis* ×2 (0175A, 0175B) and *venatio* (0179B) are noise. The
  one real hit is **0180A `dans nationi pulchritudinem`** → "giving beauty to **the nation**".
- **`ethnicus` ×1 → heathen** (0181C *Ethnici novem diebus mortuos suos flebant*), the axis's
  fourth word, kept distinct from *gentes*.
- **`turba` — ZERO**, and there is no *turbare* either: the `turb-` pattern returns nothing at
  all in 3,890 words, so the *turba*/*multitudo* pair is not exercised on the *turba* side.
  **`multitudo` ×2 → multitude** (0180C *sed populus multitudo est*, 0182B *multitudo filiorum
  Israel murmurans*).
- **`daemonium` — ZERO** (checked with the pattern that does not miss *daemones/daemonum/
  daemone*). **`diabolus` ×1 → devil** (0176A *propter avaritiam se subjicit diabolo*);
  **`satanas` ×1 → Satan** (0176A *Satanae tradit*). The two stand nine words apart and were
  kept distinct.
- **`sacramentum` ×1 → sacrament** (0177D *Latet ergo hic propheticum sacramentum*).
  **`mysterium` — ZERO.** The 1:1 pair is **not exercised** in this range; the single word was
  rendered by its own English and never by the other's.
- **The commentator's own voice is not archaised**: *dicit / ait / aiunt* → "says / say", never
  *saith*. `-eth` forms appear **only** inside quoted scripture (Ezech. XVIII *dicit Dominus* →
  "saith the Lord"; 2 Cor 3:6 *occidit / vivificat* → "killeth / quickeneth"; Joan. X *tollit* →
  "taketh").
- **Pattern 17.** Singular → *thou*: 0176A Ex 20:2 *« qui eduxi te de Aegypto »*; 0176D
  *« Adoravit super caput virgae suae »* is third person and untouched; 0177C Gn 48:22
  *« Ego dedi tibi Sichimam »*; 0178B Gn 49:3 *« tu fortitudo mea »*; 0178C Gn 49:9
  *« ad praedam, fili mi, ascendisti … accubuisti »*; 0179D Gn 49:18 *« Salvatorem tuum
  exspectabo »*; 0182A Gn 50:5 *« ibi me sepelies »*; 0182D Ps 15 *« Adimplebis me laetitia cum
  vultu tuo »*. Plural → *you*: 0173D *« Misit enim me Deus ante vos … reliquias vestras »*;
  0174B 1 Cor 2:2 *« inter vos »*; 0175C Gn 47:16 *« Adducite pecora vestra, et dabo vobis »*
  and Gn 47:4 *« puerorum tuorum »* (singular, addressed to Pharao, inside a plural-speaking
  paragraph — the distinction Pattern 17 exists to keep); 0176A Rom 6:12 *« in vestro mortali
  corpore »* and Rom 6:16 *« Servi estis ejus cui obedistis »*; 0176B Gn 47:23 *« Accipite
  semina … possitis »*; 0179B Jer. XVI *« venabuntur vos »*; 0180D Hebr. XII *« Accessistis »*.

#### (e) Punctuation — Test 3 run band by band, and it caught six of my own marks

Colons, semicolons, guillemets, question marks and exclamation marks were compared **per column
band**, markers stripped, across all five chunks. The first pass returned **six mismatched
bands, every one an unlicensed mark of mine**: supplied semicolons at 0174A, 0177D, 0179B and
0182A, and — the two that remain — the licensed Pattern 8b colons. All four semicolons were
reverted to the commas Migne prints. **Second pass: zero mismatches apart from the two 8b
colons.** ⚑ Worth recording that the four were spread across four chunks and would each have
read perfectly well; nothing but the band comparison would have found them.

⭐ **The two supplied colons are Pattern 8b and are the ONLY punctuation added in the range:**

| column | Migne | English |
|---|---|---|
| 0180B–C | *Quaeritur cur Jacob omnes … aequali honore filios et haeredes constituerit?* | It is asked**:** why did Jacob appoint … with equal honour? |
| 0180C | *Quaerendum de quo populo dicatur?* | It must be asked**:** of what people is this said? |

⚠ **The first of these lands in a different band from the `?` it licenses** — the colon falls in
band 0180B and the question mark in band 0180C, because Migne's anchor cuts the sentence. That
is why band 0180B reports `:` 4 vs 5 and band 0180C reports 3 vs 4; both are the same single
licensed recast. Recorded so a blind reader does not read two defects where there is one device.

⛔ **No comma→semicolon sweep was made.** Migne prints 15 semicolons himself in these five
chunks, so Tobit's narrow exception does not apply and was not invoked.

#### (f) Heads — numerals mirror the plate

`CAPUT XLV.` → `CHAPTER XLV.` · `CAPUT XLVI.` → `CHAPTER XLVI.` · `CAPUT XLVII.` →
`CHAPTER XLVII.` · `CAPUT XLVIII.` → `CHAPTER XLVIII.` · `CAPUT XLIX.` → `CHAPTER XLIX.` ·
`CAPUT L.` → `CHAPTER L.` — numerals throughout, per the corpus measurement (26 works print
`CHAPTER XIII.`, none spells a numeral above ONE). All six carry their terminal period on both
sides, and all six were checked against the plate.

#### (g) Frontmatter copied VERBATIM from each Latin chunk, field order included

Every field in the Latin twin's own order, including the `words:` figures, which count the
Latin. Chunks 0042's and 0046's `colContext` runs one band behind `colFirst`; that is the
chunker's and is copied unaltered. Chunk 0044's `incipit` breaks mid-ellipsis
(`« His ita transactis . .`) and chunk 0046's likewise; both are copied exactly.

---

### §2 · PLATE READS — FIVE PAGES ON TWO WITNESSES, AND THE SECOND ONE KILLED THIRTEEN CALLS

Method: the on-disk archive copy, `raw/scans/pl113/patrologiaecurs04migngoog.pdf`, **PDF page =
(column + 11) / 2**, both columns at 400 dpi read line against line with the twin, 1200 dpi crops
at contested words. **The printed corner numbers were read FIRST on every one of the five pages**
and confirm the map: p. 92 = 173/174, p. 93 = 175/176, p. 94 = 177/178, p. 95 = 179/180,
p. 96 = 181/182. Verso pages carry *GLOSSA ORDINARIA. — LIB. GEN.*, recto *WALAFRIDI STRABI FULD.
MON. OPP. PARS I. — THEOLOGICA.*

⭐ **Then, because `data/briefs/8950-PATCH-GATE-READ-FIRST.md` landed mid-stint, every letter- and
mark-level call was re-checked at the second witness** — **Gallica ark `bpt6k5505319w`,
`f = (column + 1) / 2`**, leaves 87–91, corner numbers read on f87 and f91.

#### 1. ⛔⛔ THE RESULT: fifteen single-witness calls, TWO survived, THIRTEEN were the photograph

**In every one of the thirteen, our TEI twin was right and the archive plate was wrong.** Full
table in `data/briefs/8950-PENDING-TEI-PATCHES-0042.md` Part C. The refuted set:

`Corinth. I.` → `Corinth. II` · `exicrunt` → `exierunt` · `iuvaluisset` → `invaluisset` ·
`capnt` → `caput` · `Dei deditus` → `Deo deditus` · `allis` → `aliis` · `quia traditus` →
`qui traditus` · `Pater maus` → `Pater meus` · `Tanto ergo luctus` → `Tanto ergo luctu` ·
a `VERS.` with no number → **`VERS. 10.`** · two `usque ad` standing without their `etc.` → both
`etc.` present · a `»` read for a `«` · an unclosed quotation that is closed.

⚑ **Nine of the thirteen construed**, and four of them had been written up as *findings about the
digitization* — that the twin supplies an `etc.` Migne does not print (twice), that it supplies a
verse number, and that it corrects `quia` to `qui`. **That is a false discovery with a thesis, and
it survived my own audit.** Six sites in the English had been set from the archive plate and are
now reverted to the twin: the chapter numeral at 0174B, both `etc.`, `Deo deditus` at 0176D, the
verse address at 0178D, and `qui traditus est` at 0181B.

⛔ **The over-inking is NOT confined to the archive copy's pp. 85–88 gathering** that the 0036–0041
stint identified. My refuted sites are spread across **all five** of my pages, pp. 92–96, ending on
the last page of the work. **Any single-witness archive call anywhere in PL 113 should now be
treated as unconfirmed.** And the cost is one HTTP fetch: it took five.

⚑ **What survived, on both witnesses:**
- **0175C `Quaeritur, cum Joseph frumenta colligeret`** — here **our twin** is the corrupt one
  (`eum`, a `c`→`e`), and the English renders the plate: "since Joseph was gathering the corn."
- **0178D `rex alienigena fuit Herodes`**, no period — §1(b).
- **0173D the Hebrew after *Gosen*** is on both plates and gone from our twin (Gallica reads three
  pointed consonants). The `[ed:]` stands. Hebrew is structural; ink cannot make or unmake it.

#### 2. Foot-of-page apparatus: **CHECKED ZERO on all five pages** — tier 3, coverage `full`

No foot rule and no notes of either layer — neither the numbered nor the **letter-keyed** layer this
book uses at cols 0068 and 0094 — on pp. 92, 93, 94 or 95: the columns simply end and the lower
third of each page is blank.

⚑ **p. 96 is the last page of the work, and this is what stands at its foot.** The text closes at
0182D with `« Adimplebis me laetitia cum vultu tuo. »`. Below it, after a blank of about two lines,
stands **one short centred rule**, roughly a third of a column wide, set under the gutter between
the two columns. **Below that rule there is nothing at all**: no numbered note, no letter-keyed
note, no catchword, no signature, no *FINIS*, no colophon, and no head of a following work. The
remaining lower third of the page is blank. **Write this down as a checked zero.** The book ends
without a conjecture apparatus.

#### 3. ⭐ Cols 0179–0180 are clean

A full page read line by line with no word divergence at all — the only such page in the range, and
the only one on which Gallica had nothing to adjudicate. Worth recording as a negative: the
digitization's error rate in this book is not uniform, and neither is the archive photograph's.

---

### §3 · THE UNPAIRED GUILLEMETS — one is Migne's and confirmed; the others were the photograph

Pattern 5's corollary: where Migne opens `«` and never closes it, the English mirrors the plate and
supplies nothing. **Our twin has exactly one unpaired opener in this range, at 0181A, and the plate
confirms it is Migne's.**

| col | chunk | opens | never closes — runs on into |
|---|---|---|---|
| 0181A | 0046 | `« Adhuc quadraginta dies, et Ninive subvertetur [n: (Jon. III)], ut per tot dies …` | ⭐ **the twin is FAITHFUL here.** Archive p. 96 at 400 dpi: the plate leaves it open, and so does our Latin; the run continues through four sentences to the inner `« Triduum, et Ninive subvertetur : »`, whose closer is the one a counter pairs with the first opener. **The English mirrors it unclosed**, which is why chunk 0046's counts are 17/15 and not 17/17. |

⛔ **Two further "Migne leaves it unclosed" readings were drafted and are WITHDRAWN.** The archive
copy appeared to show the Sichem quotation at 0177C–D unclosed and then re-opened, and the CAPUT L
lemma at 0180D unclosed; the parallel case at 0176C–D was checked at Gallica and **is closed
there**, exactly as our twin has it. After thirteen refutations (§2.1) neither drafted reading is
evidence of anything, and neither was ever going to change the English, since guillemet parity is a
hard check and the English follows the twin.

⚑ **So the launch brief's warning survives with its sign reversed for this range.** It said a
balanced pair in our Latin is no evidence Migne's was balanced. That remains true in principle —
but here the only *confirmed* finding is the opposite one: **an unbalanced pair in our Latin turned
out to be Migne's own**, and every apparent imbalance in the plate turned out to be ink. **Neither
direction can be settled from one photograph.**

⚑ Separately, the archive copy appears to repeat the opening `«` line-initially at six sites
(0174D, 0175C, 0177A, 0177C, 0178C, 0180D) — a compositor's convention for a quotation crossing a
line, not a second quotation. Our twin drops every one and so does the English, so nothing turns on
it; not re-checked at Gallica.

---

### §4 · 7a″ — THE DIVERGENCE LIST. Every lemma collated against `sources/vulgate/`

⛔ Collated span by span against `sources/vulgate/clementine-flat.txt`, never from memory, and
**the ERRATA section of `sources/vulgate/README.md` was read before a single letter was cited.**
Book abbreviations were checked and one of them bit: **Joel is `Joel`, not `Jl`** — my first
lookup of Joel 2:28 returned an empty line and would have read as "not in the Clementine" if
taken at face value. The empty line is the *versification* of our copy (`Jl` is not a key at
all), not an absence, and the verse is there under `Joel 2:28`. Same class as the `Suscipe
cælum` trap, different mechanism: **an empty result is evidence about the query first.**

#### The criterion actually applied, stated so it can be checked

**A `[var:]` fires where a CONTENT WORD differs, is absent, or is added.** It does **not** fire
where the only difference is a connective particle (*enim*, *ergo*, *autem*, *-que*), word order,
or an abridgment the `etc.` already announces. Twenty-three fired; fourteen divergences were
found and left unmarked under this rule and are listed at §5. No marker rests on the brief's
pre-scan; every one names its verse and quotes the Clementine.

#### 4.1 · The twenty-three markers

| col | chunk | Migne prints | the Clementine reads | why it is material |
|---|---|---|---|---|
| 0174C | 0042 | *Quia caecitas ex parte **in Israel facta est*** | Rom 11:25 *quia caecitas ex parte **contigit** in Israel* | a different verb, and the word order with it |
| 0174D | 0042 | *« **exierunt de femoribus ejus**, »* | Gn 46:26 *et **egressae sunt de femore illius*** | three words, and Augustine's whole *quaestio* is what "part" the phrase names |
| 0175B | 0043 | *« Hi sunt fratres mei, qui faciunt voluntatem Patris mei, »* | Mt 12:50 *Quicumque enim fecerit voluntatem Patris mei, qui in caelis est, ipse meus frater…* | the sentence is rebuilt; ⚠ Migne's siglum *Matth. II* is also wrong for it and rides as printed |
| 0175C | 0043 | *« Non sunt **pascua pecoribus puerorum** tuorum, »* | Gn 47:4 *non est **herba gregibus servorum** tuorum* | three content words |
| 0176A | 0043 | *« qui eduxi te **de Aegypto**, »* | Ex 20:2 *qui eduxi te **de terra Aegypti*** | a content word absent |
| 0176A | 0043 | *« Servi estis ejus cui **obedistis**, sive peccati **in** mortem »* | Rom 6:16 *servi estis ejus, cui **obeditis**, sive peccati **ad** mortem* | perfect for present |
| 0177C | 0044 | *« Ego **dedi** tibi Sichimam praecipuam **super** fratres tuos, quam **accepi de manibus Amorrhaeorum** in gladio meo et **sagitta**. »* | Gn 48:22 *Do tibi partem unam **extra** fratres tuos, quam **tuli de manu Amorrhaei** in gladio et **arcu** meo* | five content words; Jerome's rendering, and given under a bare siglum (§5.1) |
| 0178B | 0045 | *et principium **filiorum** meorum* | Gn 49:3 *et principium **doloris** mei* | the word the blessing turns on |
| 0178C | 0045 | *« Potestatem habeo ponendi **animam meam**, et nemo tollit eam a me, sed ego pono eam »* | Jo 10:18 *Nemo tollit eam a me : sed ego pono eam **a meipso**, et potestatem habeo ponendi eam* | words added and dropped, and the order reversed |
| 0178C | 0045 | *« et ut **catulus leonis**, »* | Gn 49:9 *et quasi **leaena*** | ⭐ the gloss's next clause is *quia die tertia resurrexit*, expounding the whelp; on the Vulgate's word the argument has nothing to expound |
| 0178D | 0045 | *« Vivo ego, dicit Dominus, **nisi hos homines induam sicut vestimentum**. »*, cited *Ezech. XVIII* | Is 49:18 *Vivo ego, dicit Dominus, **quia omnibus his velut ornamento vestieris***; Ez 18:3 has nothing of the kind | the words are Isaiah's, not Ezechiel's, and they are not Isaiah's words either |
| 0179B | 0045 | *« Terra Zabulon, et terra Nephthali, via maris trans Jordanem, »* under *Isa. IX* | Is 9:1 *Primo tempore alleviata est terra Zabulon…* | the wording Migne prints is **Mt 4:15's** |
| 0179B | 0045 | *« Mittam venatores multos, et venabuntur **vos** in omni monte. »* | Jr 16:16 *mittam **eis** multos venatores, et venabuntur **eos** de omni monte* | second person for third — the gloss applies it to the reader |
| 0179D | 0045 | *« … sicut **unum de sceptris** Israel … **regulus** in semita … **et** cadat ascensor ejus **retrorsum**. **Salvatorem** tuum exspectabo, Domine. »* | Gn 49:16-18 *sicut **et alia tribus** in Israel … **cerastes** in semita … **ut** cadat … **Salutare** tuum expectabo* | four divergences in three verses, the last of them christological |
| 0179D | 0045 | *Latrunculus latrocinabitur ante eum* | Gn 49:19 *Gad, accinctus praeliabatur ante eum* | a different sentence; bare siglum (§5.1) |
| 0180A | 0045 | *Virgultum dissolutum, dans nationi pulchritudinem* | Gn 49:21 *Nephthali, cervus emissus, et dans eloquia pulchritudinis* | a different sentence; bare siglum (§5.1) |
| 0180A | 0045 | *« Filius accrescens **super fontem**, »* | Gn 49:22 *filius accrescens **et decorus aspectu*** | a different predicate |
| 0180B | 0045 | *« Mane **comedet** praedam et **ad vesperam** dividet **escam**. »* | Gn 49:27 *mane **comedat** praedam, et **vespere** dividet **spolia*** | ⭐ the gloss expounds *escam* twice (*tunc dividet escam, intelligens a spiritu litteram esse dividendam*); on *spolia* it expounds nothing |
| 0180C | 0045 | *« Non est enim ibi discretio an Judaeus sit an **Graecus**, Barbarus an Scytha, servus an liber: quia per omnia et in omnibus »* | Col 3:11 *ubi non est gentilis et Judaeus, **circumcisio et praeputium**, Barbarus et Scytha, servus et liber : **sed** omnia, et in omnibus Christus* | a pair dropped, a word added, the connective changed |
| 0180C | 0045 | *« Effundam **de spiritu meo** super omnem carnem. »* under *Joel. II* | Joel 2:28 *effundam **spiritum meum** super omnem carnem* | the wording is **Act 2:17's**, under a Joel siglum |
| 0180D | 0045 | *« Accessistis ad montem Sion, et ad Hierusalem coelestem, et ad frequentiam angelorum, »* | Hbr 12:22 *accessistis ad Sion montem, et **civitatem Dei viventis**, Jerusalem caelestem, et **multorum millium** angelorum frequentiam* | two phrases dropped |
| 0181C | 0046 | *« Luctus mortui septem dies: **luctus autem fatui omne tempus vitae ejus**. »* | Sir 22:13 *Luctus mortui septem dies : **fatui autem et impii omnes dies vitae illorum*** | rebuilt, and singular for plural |
| 0182A | 0046 | *« Pater meus adjuravit me dicens: In **monumento** quod ego **feci** mihi in terra Chanaan, ibi me sepelies; »* | Gn 50:5 *eo quod pater meus adjuraverit me dicens : En morior : in **sepulchro meo**, quod **fodi** mihi in terra Chanaan, sepelies me* | ⭐⭐ see 4.2 |

#### 4.2 · ⭐⭐ The best site in the range: 0182A, where the gloss argues from a word its own lemma does not print

Migne's lemma has Joseph report that Jacob said *In **monumento** quod ego **feci** mihi* — "in
the monument which I **made** for myself". Four sentences later the same gloss says
***Fodisse** autem sibi Jacob sepulcrum nusquam superius legitur, sed certe, nisi **fodisset**,
non modo diceretur* — "that Jacob **dug** himself a sepulchre is nowhere read above; yet
assuredly, unless he had **dug** it, it would not now be said."

**The argument is entirely about the verb *fodere*, and *fodere* is not in the lemma it is
arguing from.** Gn 50:5 reads *in sepulchro meo, quod **fodi** mihi*; Augustine's *quaestio*
takes its force from that word. The English renders Migne — "made" in the lemma, "dug" in the
argument — and the `[var:]` puts the Clementine's *fodi* on the page where a reader meets the
seam. **This is 7a″'s own shape**: had the lemma been quietly conformed to the familiar verse,
the seam would have closed and the paragraph would have read as a smooth piece of exegesis
instead of a visible one.

#### 4.3 · The lemmata collated and found to AGREE with the Clementine exactly

Named because a list of findings alone cannot be told apart from a report by an agent that never
looked. All verbatim, allowing for the fragment the `etc.` marks:

Gn 45:10 *« Habitabis in terra Gessen »* · Gn 45:16 *« Et gavisus est Pharao »* · Gn 45:22
*« Benjamin vero dedit »* · Gn 46:26 *« Cunctae animae quae ingressae sunt cum Jacob in
Aegyptum »* · Gn 46:27 *« Filii autem Joseph »* and *Omnes animae domus Jacob* · Gn 46:28
*« Misit autem Judam »* · Gn 46:32 *« Et sunt viri pastores »* · Gn 47:9 *« Dies
peregrinationis »* · Gn 47:12 *« Praebens cibaria, singulis »* · Gn 47:16 *« Adducite pecora
vestra, et dabo vobis »* · Gn 47:20 *« Emit igitur »* · Gn 47:22 *« Praeter terram
sacerdotum »* · Gn 47:25 *« Salus nostra in manu tua est »* · Gn 47:29 *« Cumque appropinquare
cerneret diem mortis suae »* · Gn 47:31 *« Quo jurante »* · Gn 48:1 *« His ita transactis …
assumptis duobus filiis Manasse et Ephraim »* · Gn 48:2 *« Qui confortatus »* · Gn 48:12
*« Cumque tulisset eos Joseph de gremio patris »* · Gn 48:16 *« Invocetur super eos nomen
meum »* · Gn 48:22 *« Do tibi partem unam »* · Gn 25:23 *« Major serviet minori »* · Gn 49:5
*« Simeon et Levi »* · Gn 49:6 *« in consilium eorum non veniat anima mea »* · Gn 49:8
*« Juda, te laudabunt »* · Gn 49:9 *« Catulus leonis Juda: ad praedam, fili mi, ascendisti:
requiescens accubuisti ut leo »* and *« Quis suscitabit eum? »* · Gn 49:10 *« Non auferetur
sceptrum de Juda »* · Gn 49:11 *« Ligans ad vineam pullum suum »* · Gn 49:12 *« Pulchriores
oculi »*, *« Lacte »*, *« candidiores »*, *« candidiores lacte »* · Gn 49:13 *« Zabulon in
littore »* · Gn 49:14 *« Issachar »* and *« Accubans inter terminos »* · Gn 49:16 *« Dan
judicabit populum suum »* · Gn 49:19 *« Gad »* · Gn 49:21 *« Nephthali »* and *« Nephthali
cervus emissus »* · Gn 49:22 *« Filius accrescens Joseph »* · Gn 49:27 *« Benjamin lupus
rapax »* ×2 · Gn 49:28 *« Omnes hi in tribubus »* · Gn 49:32 *« Appositusque »* ·
Gn 50:3 *« Septuaginta diebus »* · Gn 50:4 *« Et expleto planctus tempore »* · Gn 50:10
*« Veneruntque ad aream Atad »* · Gn 50:22 *« Vixitque centum decem annis »* · Gn 50:24
*« Asportate ossa »* · Gn 50:25 *« Conditus aromatibus »* · Ps 26:13 *« Credo videre bona
Domini in terra viventium »* · Ps 15:10 *« Adimplebis me laetitia cum vultu tuo »* ·
Gn 47:23-24 *« Accipite semina, et serite agros ut fruges habere possitis »* (⚑ Migne runs the
end of v. 23 into the head of v. 24; the words are the Clementine's on both sides of the seam) ·
Dt 33:20-21 *« Benedictus in latitudine Gad, quasi leo requievit: cepitque brachium et verticem,
et vidit principatum suum »* (same shape, a verse boundary crossed, every word the Clementine's).

⚠ **Gn 45:5 / 45:7 — checked, and it is not a divergence.** The address is `VERS. 7-9.` and the
lemma *« Misit me Deus, »* matches **Gn 45:5** (*misit me Deus ante vos*), not Gn 45:7
(*Praemisitque me Deus*). The brief's `✓ Gn 45:5` is telling the truth. But no marker fires:
Augustine's whole *quaestio* here is the difference between the copies (*Quid est quod juxta
alia exemplaria ita legitur*), the rival wording is announced as such, and the settled convention
withholds a `[var:]` from a version Migne labels himself.

---

### §5 · THE DECLINED LIST — what was raised, weighed and NOT marked, with the settling page

#### 5.1 · Three bare-siglum Jerome renderings that DID take a marker, and the argument that lost

At 0177C, 0179D and 0180A, Migne prints Jerome's own rendering of a Genesis verse — *Ego dedi
tibi Sichimam*, *Latrunculus latrocinabitur*, *Virgultum dissolutum* — under a bare
`(HIERON.)`/`(HIERON. in Gen.)` siglum, with no *alia translatio*, no *in Hebraeo*, no announced
version. **A serious argument says these should be declined**: each is the incipit of Jerome's
*comment*, cut short by the abridgment, and in each case Migne prints the Vulgate-shaped form of
the very same verse in the adjacent paragraph (`« Gad accinctus praeliabitur »` beside
*Latrunculus*, `« Nephthali cervus emissus »* beside *Virgultum*), so the juxtaposition is itself
a kind of label.

**That argument was rejected and the markers stand.** The settled convention withholds a
`[var:]` for an **explicit** label — *Alia translatio*, *quidam codices*, *secundum Hebraeum*, an
announced LXX/Aquila/Symmachus/Theodotion reading — and the 0008–0011 stint's worked pair is
exactly this case decided the other way: Jerome's first quotation there, "given bare, under a
naked `(HIERON.)`, **took** the marker"; his second, introduced *Melius in Hebraeo habetur*, did
not. A juxtaposition is not a label, and reading one as a label would let any commentator's
second thought silently disable the apparatus. **Said here with the Latin that forced it, and
with the rival named, per the series brief.**

⛔ **By the same rule, three quotations in this range took NO marker because Migne DOES label
them**: the *alia exemplaria* version of Gn 45:5-7 at 0173D; the `LXX:` reading of Gn 49:5 at
0178B; and the whole *Adoravit super caput virgae* apparatus at 0176C-D, where Migne sets out
*Quod habent Latini codices … nonnulli emendatius habent … vel … vel …* and Jerome's *cum in
Hebraeo multo aliter legatur*. Four rival readings on one column, all announced, none marked.

#### 5.2 · Fourteen real divergences left unmarked, each with its reason

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 0174B | *Non judicavi me aliquid scire … nisi Christum Jesum* | 1 Cor 2:2 *Non **enim** judicavi me **scire aliquid** … nisi **Jesum Christum*** | a dropped *enim* and two transpositions; no content word differs |
| 0174B | *Omnes domestici ejus vestiti duplicibus* | Pr 31:21 *omnes **enim** domestici ejus vestiti **sunt** duplicibus* | particle and copula only |
| 0175B | *« … Ramesse. »* | Gn 47:11 *Ramesses* | one letter, and Migne's own gloss two words later spells *Ramesses* correctly; the errata note in `sources/vulgate/README.md` is squarely about calls of this size |
| 0176A | *Non regnet peccatum in vestro mortali corpore* | Rom 6:12 *Non **ergo** regnet…* | particle; the rest is cut by Migne's own *etc.* |
| 0177B | *« Duo **igitur** filii qui nati »* | Gn 48:5 *Duo **ergo** filii **tui**, qui nati **sunt tibi*** | *igitur*/*ergo* is a particle; the absent words fall inside the fragment the *etc.* announces |
| 0177B | *« Mihi enim quando veniebam de Mesopotamia, mortua est Rachel et sepelivi eam »* | Gn 48:7, which has *in terra Chanaan in ipso itinere… et sepelivi eam juxta viam Ephratae* between them | an abridged citation, not a divergent reading — Migne joins the head and the tail of one verse |
| 0178B | *super montem posita* | Mt 5:14 *supra montem posita* | a preposition, and the pair is interchangeable in this Latin |
| 0179A | *Perfectorum est solidus cibus* | Hbr 5:14 *Perfectorum **autem** est solidus cibus* | particle |
| 0179D | *« Gad accinctus **praeliabitur** ante eum. »* | Gn 49:19 *Gad, accinctus **praeliabatur** ante eum* | ⚑ **one letter**, and the frequency check was run: *praeliabitur* stands twice elsewhere in the Clementine and *praeliabatur* once, so both forms are attested and our copy's reading is not suspect — but a marker resting on a single letter of a 2005 transcription is exactly what the errata note forbids. The gloss does build on the future (*Christus ante et retro praeliabitur*), which is why it was raised at all |
| 0180B | *littera occidit, spiritus autem vivificat* | 2 Cor 3:6 *littera **enim** occidit, Spiritus autem vivificat* | particle |
| 0181A | *« Adhuc quadraginta dies, et Ninive subvertetur »* | Jon 3:4, verbatim | no divergence at all — checked and clean |
| 0181B | *« qui traditus est propter delicta nostra »* | Rom 4:25, **verbatim** | ⛔ **WITHDRAWN, and it is the sharpest cautionary tale in the range.** The archive plate reads `quia`, which turns Paul's relative clause into a causal one; I wrote it up as a real divergence, rendered it "because he was delivered up", and recorded the `[var:]` as *owed but blocked* by the verifier's mirror test. **Gallica f91 reads `qui`, agreeing with our twin and with the Clementine — there is no divergence here at all.** The English is corrected. Settling leaf: **Gallica f91** |
| 0181D | *« Flevit eum Aegyptus septuaginta diebus »* | Gn 50:3 *flevit**que** eum Aegyptus…* | an enclitic |
| 0182B | *aream Atad* … *area Arad* | Gn 50:10 *Aream Atad* | Migne spells the place two ways nine lines apart; both stand as printed. Not a Vulgate divergence but Migne's own inconsistency, and it is not ours to tidy |

#### 5.3 · Three plate readings raised as candidates and NOT given a marker

- **0176A `Aegyptii autem violenter in servitutem redacti sunt, Hebraei vero violenter in
  servitium.`** The sentence draws a contrast and then uses the same adverb for both halves, so
  it draws nothing; the very next sentence (*Vendiderunt autem Aegyptii semetipsos*, "the
  Egyptians sold their own selves") shows the **first** *violenter* is the suspect one, since
  selling oneself is not violence. **Read on the archive plate (p. 93, 400 dpi): both
  words are there, well formed and normally spaced** — though after §2.1 an archive-only reading
  proves less than it did, and here it does not need to prove anything, since our twin carries both
  *violenter* too and the English simply renders what both have. Rendered literally, "by violence" twice.
  **No `[cj:]`**: Pattern 18 requires naming the right reading, and two candidates are open
  (*voluntarie* for the first, or a different noun in the second) with nothing on the page to
  choose between them. Crux only.
- **0182C `Nos quosque moraliter instruit`.** *quosque* is a real form (acc. pl. of *quisque*)
  and will just bear its slot beside *nos*, so Pattern 7's main rule governs and the English
  reads "He instructs us each morally also." **Read on the archive plate (p. 96), where it agrees with our twin — and this is one
  of the very few defective-looking forms in this book that our twin did NOT tidy**, which is
  itself worth recording. Migne's evident intention is *quoque*. No marker; brief addendum A's
  rule that a real, well-formed word is Migne's until a plate says otherwise is satisfied here in
  the strongest way, because the plate says it IS Migne's.
- **0182B `Si dicit aliquis quia bella timebant, sicut filii Israel circumducti…`** — a
  protasis with no apodosis; the sentence simply stops and the next begins *Sed majoris
  significantiae causa factum est hoc*. **Read on the archive plate (p. 96), agreeing with our twin.** Rendered as printed,
  anacoluthon and all. No marker: nothing is missing from our text that Migne prints.

#### 5.4 · Sections read clean

Chunk 0044's four question marks (0177D–0178A) were compared one by one against the plate and
all four are Migne's, on four consecutive direct questions; none was supplied and none dropped.
The negation walk (Test 2, hosts named individually) was run over all 53 printed negatives in the
range — ⚑ instrument checked first: a `\bnihil\b` pattern returns **zero** here and misses the
one real occurrence, 0179C's *nihil**que** de mundanis quaerere*, exactly as `\bdaemoni` misses
*daemones*; the walk used the unbounded forms — and returned **one defect, mine**: at 0174C I had rendered *qui ante non putavit esse
credendum* as "who before thought there was **nothing** to be believed", moving the negative off
*putavit* and onto the gerundive. Repaired to "who before did **not think** that it was to be
believed." ⚑ It had read perfectly well, which is the point of the test.

---

### §6 · FOR THE MERGE ACROSS NINE STINTS — this range ends the work

1. ⛔⛔ **THE HEADLINE, and it is not about my range.** This stint read its five columns on TWO
   witnesses and **thirteen of its fifteen single-witness archive calls were refuted, our TEI twin
   being right every time** (§2.1). Nine of the thirteen construed; four had been written up as
   findings about the digitization's behaviour. **The archive copy's over-inking is therefore not
   confined to its pp. 85–88 gathering** — it reaches p. 96, the last page of the work. Every
   letter- and mark-level claim in the five single-witness patch files (`-0008`, `-0012`, `-0019`,
   `-0024`, `-0031`) should be assumed to have this failure rate until each is fetched from
   Gallica. **At one HTTP request per page, confirming all of them is cheap; applying any of them
   is not.**
2. **The `[sic:]` count for the whole book should still be ZERO, but for a smaller reason than I
   first wrote.** Zero `[sic:]` fired here. My draft owed seven of them to a later patch pass;
   **six of those seven are now withdrawn** (`exicrunt`, `iuvaluisset`, `capnt`, `allis`, `maus`,
   `luctus` are all the photograph), and the seventh — `Corinth. I.` — with them. What survives
   from this range is **one patch in the opposite direction** (0175C, where OUR twin reads `eum`
   for the plates' `cum`), one mark (0178D's absent period), and two dropped Hebrew words. ⚑ The
   earlier stints' finding that "every plate defect is one CC had already tidied away" may be
   partly an artifact of the same over-inking, and their `[sic:]`-owed lists need the same
   treatment before anyone reads the corpus-wide zero either as timidity or as measurement.
3. **The `usque ad` tally for this range: 22 formula, 3 ordinary, 0 the verse's own words.**
   All 22 italic `*usque ad*` follow an `etc.` — on the plate as well as in the twin, once the two
   apparent exceptions at 0175A and 0176D were checked at Gallica and refuted (§1a) — and are
   rendered `*as far as*` with no verb, object or antecedent supplied anywhere:
   0173D · 0175A ×3 · 0175B · 0176C · 0176D · 0177B · 0177C · 0177D · 0178B ×3 · 0179B · 0179C ·
   0179D ×2 · 0180A ×2 · 0180B ×2 · 0182C. ⛔ The **three ordinary** ones, none italic and none
   after an `etc.`, each rendered by sense: 0179A *Pertingit autem **usque ad** Sidonem* →
   "reaches as far as Sidon"; 0179A *id est, **usque ad** gentes pervenit* → "comes as far as the
   Gentiles"; 0177D *Mausoleum ejus ibi **usque** hodie cernitur* → "to this day" (bare *usque*,
   the 0024 stint's Gn 25:18 shape). Not one of the three sits inside an italic span.
   ⚑ Instrument checked: a raw `usque` grep also returns **`non usquequaque consonat`** at 0173D,
   which is neither — and it stands four words in front of a real formula on the same line.
4. **Two renderings a merge may want to reconcile across stints, flagged rather than decided:**
   *Ecclesia gentium* is **the Church of the Gentiles** here (0174A) on the strength of the
   *Judaeorum* in the same clause; a stint that met it in a generic context may reasonably have
   written "of the nations". And *exspectatio gentium* at 0179D is **"the expectation of the
   nations"** because it is Gn 49:10's own closing formula inside an abridgment tail — a stint
   expounding the same verse typologically would write "Gentiles". Both are the axis as written;
   both read as inconsistencies and are not.
5. **The unexpressed subject at 0179B is a live ambiguity and was not resolved silently.**
   *Contra omnes terminos saeculi **solidata** exspectat naufragium Judaeorum* — the participle is
   **feminine**, so the subject is not Zabulon (masculine) but the *Ecclesia* the whole gloss is
   about, or possibly *terra*. The English reads "Made firm against all the ends of the world,
   **she** awaits the shipwreck of the Jews", which follows the morphology. A reader who takes the
   tribe as subject will find the pronoun odd; the Latin, not the sense, decided it.
6. **The work ends at 0182D with nothing after it but a short centred rule** (§2.2). Anyone
   assembling the work page can state, on a read plate, that Migne prints no colophon, no *FINIS*
   and no closing apparatus to the *Liber Genesis*.
