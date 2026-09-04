# 8967 — pending TEI patches, reported by stints, NOT yet applied

⛔ **Why these are queued rather than applied.** A TEI patch re-chunks the work, and re-chunking
rewrites the Latin **under English that is already filed**. Eight stints wrote Band A
concurrently; applying a patch mid-run would silently change a twin somebody had already
translated. **Apply this queue in ONE pass when Band A's translation is complete, then re-run
`verify-english` and fix the English twins named below.**

Every entry is **a departure of Corpus Corporum's TEI from Migne's plate**, i.e. our source
mis-transcribing the page — **not** a defect in Migne. None of them is a `[sic:]` candidate:
firing one would accuse Migne of his transcriber's error. That distinction is the whole reason
this file exists.

## ✅ Already applied (for the record)
- **0841B** — `nebel (נבל)`: CC dropped the Hebrew entirely. Recovered from the plate.
- **0841B, 0855C** — empty `<hi></hi>` + `([Ref] \n)` note → `[n: (Ref)]`.
- **0847A** — `sordescat` → **`sordescet`**. CC had conformed Migne to the Clementine.
  ⭐ **The twin site at 0869A was NOT patched by analogy, and that refusal was right**: its leaf
  was later read and prints `sordescat`, agreeing with our TEI.

## ⚠ Class 1 — CC CONFORMS MIGNE TO THE VULGATE (the dangerous class)
**No downstream check can see these.** A Vulgate collation is blind to them by construction: the
digitization has already made Migne agree with the Vulgate. Only the plate reaches them.
⛔ **Each needs its own leaf read. Never extend one to a look-alike** — 0869A is the proof.

| col | our TEI | the plate | note |
|---|---|---|---|
| 0899B | `audiebam` | `audiebant` | TEI's form **is the Clementine's own reading** |
| 0895A | `populis` | `populus` | an ungrammatical nominative tidied into a working dative |
| 0866D | `vel adipem` | `adipem` | **⛔ TEI INSERTS `vel` — the only one so far that touches SENSE.** One English edit owed with it: `src/english/8967/0013.md`, drop "or" before "the fat" |

## Class 2 — CC transcription noise (no sense at risk)
`Iniracundia` → `In iracundia` · `spemagna` → `In spe magna` · `inquitatem` → `iniquitatem` ·
`pro rumpit` → `pro-/rumpit` · `hahet` → `habet` · **0853B** `deeidam` → `de-cidam` (hyphenated
across a line break on the plate) · **0867C** `captu+m` → `captum`.

⚑ **`deeidam` is the one to remember**: every internal signal said fire a `[sic:]` — a non-word,
with correct `Decidam` eleven words later. The plate showed a line-break hyphen. The stint
withdrew the marker before firing it.

## Class 3 — sigla and punctuation
- **0845A** — one note `(AUG. CASS.)` on the plate, split in two by CC.
- **0862C** — split siglum. **0863D** — `(CASS)` unencoded, point dropped.
- **0864A** — `(CAS.)` where the plate has `(CASS.)`.
  ⛔⛔ **DO NOT SWEEP `(CAS.)` — Migne's own `(CAS.)` stands at 0863A and 0863C.** A global fix
  would manufacture readings he never printed. Per-site only, each read at the leaf.
- **0849D** — dropped closing guillemet (chunk 0004 runs 29 « against 28 »).
- **0870A** — full stop softened to a comma. **0870C** — comma inserted.

## ⬜ Unsettled — needs one more read
- **0898D** — `enumerantur`, possibly Migne's `emunerantur`; heavy inking. One Gallica IIIF crop
  at f449 closes it.
- Two of the work's three `In Hebraeo` clauses remain unread. **The third is closed**: 0868A
  prints `(quod in Hebraeo)` with no Hebrew type at all — nothing was dropped there.

---

# ⛔⛔ SECOND REPORT (chunks 0015–0019): THE RATE IS ~1 PER COLUMN, NOT A HANDFUL

Six plates read (pp. 441–446), **twelve** sites where our chunked Latin does not say what Migne
printed. **This is the ~3-sites-per-page rate the runbook records from 9003's collation of the
sibling PL 114 Psalter — measured independently here, in a different volume, and it agrees.**
The drift runs overwhelmingly **toward the Vulgate and toward ordinary Latin**: CC tidies.

| plate prints | our TEI has |
|---|---|
| `Anima` | `Animas` |
| `Sapientium` | `Sapientiam` |
| `Desiderabillia` | `Desiderabilia` |
| `mel ; solutus` | twin **supplies** `id est,` |
| `locus` | `ocus` |
| `Seb isti` | `Sed isti` |
| `Impinguisti` | `Impinguasti` |
| `commendando` | `commmendando` |
| `elevumini` | `elevamini` |
| `spiri-\|tus` | `spiriritus` |
| `dilexi` | `lilexi` |
| `genuo` | `genus` |
| `supientis`, `necessitutibus` | **UNSETTLED — recorded as candidates, not findings** |

⭐⭐ **FIVE `[sic:]` CANDIDATES WERE WITHDRAWN BY THE PLATE AND ONE CONFIRMED.** Every withdrawn
one read as a confident Migne defect **from the Latin alone**. This is the measured case for why
`plate-gate` exists: the internal evidence was wrong five times out of six.

⛔ **`Seb isti` @0876B is the sharpest one and NO MARKER CAN REACH IT.** Our twin reads `Sed isti`
and does not construe; the plate reads `Seb isti`; the conjecture is `Sedisti` ("thou hast sat",
Prov 23:1–2), which supplies exactly the verb and person the sentence lacks. `[sic:]` may wrap
only type the twin carries, and `[cj:]` requires the printed word to be in the twin — **so the
apparatus cannot say any of this until the TEI is patched.** The patch is a precondition for the
marker, not a tidy-up after it.

# MERGE ITEMS — real convention drift between stints, for the cruces merge

1. ⚠ **`Diapsalma` — roman or italic?** The 0015–0019 stint kept it **roman**, plate-confirmed
   that Migne sets it roman there. The 0005–0009 stint set it **italic**, deliberately, on the
   register rule, noting Migne does not italicize at its site either. **Both reasoned; they
   disagree.** Settle at the merge against what Migne actually sets at each site, and record the
   ruling in the merged cruces so Bands B and C inherit it rather than re-deciding.
2. **`In finem` → "Unto the end"** is holding across all five returned stints. No drift.
3. **`usque ad` → "as far as"** holding, and three stints independently caught unitalicized
   look-alikes that are NOT the formula. Worth a line in the merged conventions: the italic
   membership test, not the words.

---

# THIRD REPORT (chunks 0020–0024) — five more, and three English sentences ride on them

| col | Migne prints | our TEI has |
|---|---|---|
| 0883D | `ad hoc bono` | `ab` |
| 0887B | a plain dittography `etsi. Etsi` | silently tidied to `etc.` |
| 0887C | no period after `Diapsalma` | period supplied |
| 0887C | `dici.` | `dicit` |
| 0891A | `gyro` | `in gyro` (CC supplies `in`) |

⚑ **0887B is the most revealing: CC did not fix a typo, it fixed a REPETITION** — Migne's own
`etsi. Etsi` became `etc.`. A `[d:]` dittography marker is one of the few defects our apparatus
can state, and the transcriber removed the evidence for it before we ever saw the text.

Also settled as **CC's, not Migne's** (no marker owed): `in aeter num` @0884B is Migne's
`æter-num` hyphenated across a line break; `--VERS. 21.` @0886B is CC transposing the dashes.

⭐⭐ **AND THE HEURISTIC FAILS IN BOTH DIRECTIONS.** The 0015–0019 stint had five `[sic:]`
candidates withdrawn by the plate — internal evidence too eager. The 0020–0024 stint had the
opposite: it **declined** `In sua in virtute` @0890A reasoning that a doubled short word is the
classic CC artifact, and at 500 dpi Migne sets it plainly. A `[d: in]` now stands there. **Neither
"trust the text" nor "suspect the transcriber" is a rule. Only the leaf is.**

## ⬜ Still owed to Gallica (one IIIF request each)
- **0885B** `quae non est nisi [inquieta] mente` — printed words contradict the argument; the word
  falls at a clipped line opening in col 885 (`f443`).
- **0898D** `enumerantur` vs possible `emunerantur`, heavy inking (`f449`).

## MERGE ITEM RESOLVED — `Diapsalma` is ROMAN
Settled 2026-09-04 against three stints' plate reads (0849B, 0870D–0883A, 0887C, 0891D, incl. the
masculine `Diapsalmus`). ⛔ **The drift was my fault, not a stint's**: the launch brief said
"italic as Migne sets it" and Migne sets it roman. Brief corrected; the one italic occurrence
reverted. Bands B and C inherit **roman**.

## OPEN, needs a ruling at the merge
- **`gens tenebrarum`** @0887D → "nation of darkness". The `gentes` axis does not rule on a
  singular `gens` in a non-ethnic metaphor. The stint flagged rather than deciding silently,
  which is the behaviour the axis section exists to reward. Rule it and add it to the axis.

---

# FOURTH REPORT (chunks 0035–0038) — seven more, and six were found sideways

| col | Migne prints | our TEI has |
|---|---|---|
| 0912B | `diluculo` | `diliculo` — **our file holds a non-word** |
| 0914A | `naves Tharsis` | `naves-Tharsis` |
| 0915A | `concludi` | `concludit` |
| 0915D | `non alia re` | `non in alia re` — **CC supplies a word** |
| 0917A | `opere` | `opera` |
| 0917C | `Hic` | `His` |
| 0918C | `aliqui` | `aliquid` — **the most substantive: `aliquid` is what makes the clause construe** |

Lesser: TEI's `VERS, 11.` for `VERS. 11.` · `((AUG.)` for `(AUG.)` · a **silent repair of Migne's
own `doc-/ctus` dittography** (another erased `[d:]`, cf. 0887B).

⭐⭐ **SIX OF THE SEVEN WERE FOUND WHILE READING THE LINE FOR A DIFFERENT WORD.** That is now the
dominant discovery mode across four stints, and it matches the Luke result exactly: twelve of
seventeen corrections there came from a reader's eye falling elsewhere while a page stood open.
**The yield comes from opening the page at all, not from what you opened it to check.**

## The best marker in Band A so far
**0915A `[var:]`** — Migne prints **`Odite haec, omnes gentes`**, "*hate* these things," where the
Vulgate (Ps 48:2) reads `Audite`. His own gloss underneath argues from *Audite* (*Nullum excipio*,
*Nulli sermonem subtraho*). The English renders **"Hate"**, as printed. Conforming it to the
gloss would have been the textbook 7a″ failure — repairing Migne's text out of his commentary.

# ⛔ BLOCKER — plate-gate FAILS, and it is not in the range that found it
`node scripts/plate-gate.mjs 8967` fails on **`0904D`, chunk 0032, `[var: Vulg. Ps 41:1 …]`** —
col 0904 has never been read. Needs PDF **page 458** read and recorded, or the marker withdrawn.
**It cannot ship as it stands.** Chunk 0032 belongs to the 0030–0034 stint, which was still
running when this was reported; if it does not clear the column itself, the gate must be
satisfied here before the band closes.

---

# FIFTH REPORT (chunks 0030–0034) — 28 departures in TEN columns, and the class runs BOTH ways

**⭐⭐⭐ THE SINGLE MOST IMPORTANT FINDING IN BAND A**, stated by the stint that read cols
0903A–0910D line by line:

> Every non-word and unconstruable form in our Latin turned out at the plate to be **Corpus
> Corporum's, not Migne's** — and, conversely, **every defect Migne actually prints here had
> already been tidied away before it reached us.**

That is the whole `[sic:]` apparatus of this work described in one sentence, and it is why
`plate-gate` cannot be relaxed on 8967.

## Direction 1 — CC moves Migne ONTO the Clementine (invisible to every check)
- **0903D** `Dominum conservet` → `Dominus`
- **0902D** `Multiplicati sunt numerum` → `super` supplied

## Direction 2 — CC REPAIRS MIGNE'S REAL DEFECTS, destroying `[sic:]` evidence
- **0910C** the plate prints the non-word **`iniquitetem`** (with `iniquitatem` correct nine words
  earlier) — **CC silently fixed it. That was a legitimate `[sic:]` on Migne's own type, and we
  could never have known.** Third erased marker in the band (cf. 0887B, `doc-/ctus`).
- The head `PSALMUS XL.` carries a period on the plate that our TEI drops.

## ⛔ Direction 3 — the worst: our Latin carries WORDS THE PLATE LACKS
- **0904A** — CC replaces Migne's `quasi,` with **`sed Deus`** and inserts `in`. **The only site in
  the band where our text says something Migne did not.** Flagged for a second eye before patching.
- **0903C** — CC swaps `dicant`/`dicunt` in **opposite directions in adjacent sentences**, which
  rules out a systematic normalization and points to transcription noise.

## Pure CC debris (the English already follows the plate here, and the cruces says so)
- **0902B** `In Hebraeol` → plate reads **`In Hebraeo`**. ✅ **This closes a second of the three
  outstanding `In Hebraeo` candidates — no Hebrew was dropped.** One remains.
- **0902D** `ἀποπομπάιohgr;ι` → plate reads **`ἀποπομπάιῳ`**. An unconverted `&ohgr;` SGML entity
  that survived into our published-facing Latin.

## Unreadable on this copy — Gallica owed
- **0905A** `excrescentibus pilis` — the line break falls exactly at the clip (`f453`).

## One more mod-4 counterexample, and the sharpest one
**Col 909 is 1 (mod 4) and CLEAN, while col 905 — also 1 (mod 4) — is clipped, on adjacent leaves
in a single range.** Applied blind, the withdrawn rule would have withheld the 0910B marker.

---

# BAND A TOTALS — the queue, and what it implies for the work

**~67 sites across the ~46 columns actually read ≈ 1.5 per column.** Band A spans ~78 columns and
the whole work ~240. **If the rate holds, this work carries on the order of 350 CC departures from
Migne, of which we have seen a fifth.** That is consistent with 9003's independent collation of
the sibling PL 114 Psalter (~3 sites per page), and it is now measured twice.

⚑ **This is not an argument for a corpus-wide retrofit** (CLAUDE.md: recover going forward, do not
sweep the done corpus). It is an argument that **on this work the plate is the text and our TEI is
a witness to it** — and that the marker apparatus must never be built from the twin alone.

---

# BAND B — stint 0039–0043 (cols 0918C–0930C), reported 2026-09-04

**Seven PDF pages read at 200 dpi full page + 400 dpi crops: 464–470, corners read 917/918 …
929/930. Page map `PDF page = (column + 11) / 2` calibrated on p. 464. No column in this range is
clipped at the inner margin, and there is no foot-of-page conjecture apparatus of either layer on
any of the seven leaves.** 18 word-level sites over 13 columns ≈ 1.4 per column, which is Band A's
rate to within noise.

## Class 2 — CC REPAIRS a Migne defect (a marker we are entitled to fire is destroyed)

| col | Migne prints | our Latin | note |
|---|---|---|---|
| 0918D | `nisi magna **misericodia** esset` | `misericordia` | non-word, dropped `r` |
| 0919B | `Deus **t antae** justitiae est` | `tantae` | split type, Pattern 10 |
| 0920D | `ad **Eccesiam**` | `Ecclesiam` | non-word, dropped `l` |
| 0920D | `In ore **stulorsorum** est cor eorum` | `stultorum` | non-word, inside an italic scripture lemma (Sir 21:29) |
| 0921C | lemma `Ossa eorum **qni** hominibus placent` | `qui` | turned `u`; a sort SET wrong, not ink |
| 0922A | `**Florente** interpretantur` | `Florentes` | dropped `s`; `Florente` does not construe |
| 0925A | `ita viri **tristia** nocet cordi` | `tristitia` | neut. pl. against a singular verb |
| 0926A | `**Ha** omnes Deo annuntiare debemus` | `Has` | dropped `s` |
| 0926C | `aeternum et **consubtantiale** Patri` | `consubstantiale` | non-word, dropped `s` |
| 0927A | `qui *liberavit,* id est, **liberavit**` | `liberabit` | the parallel `dedit, id est, dabit` two words later shows the future is required |
| 0927C | `Dominus per eum loquitur, qui ei **dicta**` | `dictat` | `dicta` does not construe |
| 0928B | italic `**canda**, praeterita` | `cauda` | turned `u` |
| 0928C | `**Iuclamationes** mortis` | `Inclamationes` | turned `n` |
| 0928D | `in extremo **ignia** vitiorum` | `ignis` | non-word |
| 0929A | `Malivolenti :` | `Malivolentia:` | Migne's is a real word (dative of *malivolens*); flagged as a departure, not as a defect — the patch pass should rule |
| 0930A | `quid irruerunt in me fortes` | `qui irruerunt` | |

## Class 1 — CC moves Migne ONTO the Clementine (invisible to any Vulgate collation)

| col | Migne prints | our Latin | Clementine |
|---|---|---|---|
| 0929C | `*Quoniam **qui** audivit?*` | `quis` | Ps 58:8 `quoniam quis audivit` |

⭐ **This one is worth the patch on its own.** Migne's own gloss nine lines below quotes the verse
back as `*Quis audivit?*` **twice**, so the plate carries both readings and the lemma's `qui` is
exactly the kind of divergence the apparatus exists to show. Restored, a `[var:]` becomes available
on the lemma; unrestored, the divergence has been erased before any instrument could look at it.

## Class 3 — our Latin carries what the plate does not

- **0927C** `*Exaltare, Deus super, coelos,*` — **the comma after `super` is not on the leaf.** It
  sits inside an italic scripture lemma, so it is not cosmetic.
- **0926B** plate `id est, **et** attribuam` — CC's `ei` is a different word, listed above under
  class 2 because `ei` is what construes; recorded here too because the direction is an insertion
  of sense, not a repair of type.

## Heads — CC has the periods BACKWARDS on three of the four in this range

| col | plate | our Latin |
|---|---|---|
| 0918C | `PSALMUS L.` | `PSALMUS L` |
| 0920C | `PSALMUS LI` | `PSALMUS LI.` |
| 0922C | `PSALMUS LIV.` | `PSALMUS LIV` |

`PSALMUS LII.`, `PSALMUS LIII.`, `PSALMUS LV.`, `PSALMUS LVI.`, `PSALMUS LVII.`, `PSALMUS LVIII.`
all agree with the plate. ⚑ Per §A3 the English head follows the Latin twin, so **three English
heads move when these three are patched.**

## Terminal stops CC drops (the plate has them, our Latin does not)

- **0922C** `... animus turbatur in me, non exit a me**.**`
- **0926D** `... ubi latuit Christus incognitus Judaeis**.**`

Both leave an English sentence ending without a stop, which reads as our defect.

## Lesser punctuation and sigla (low priority, listed for completeness)

- **0918D** `*Miserationum*` — the plate sets no comma inside the italic; CC gives `*Miserationum,*`.
- **0920B** siglum `(Au.)` on the leaf; CC normalizes to `(Aug.)`.
- **0920D** plate `Dicit;` — CC `Dicit,`.
- **0923B** plate `Laetctur disertum et floreat` — CC supplies a comma after `disertum`.
- **0925A** plate `*Curam tuam* (Ibid.)` with no period inside the italic; CC gives `*Curam tuam.*`.
- **0922B** plate `*Percipe.*` with a period; CC gives `*Percipe,*`.
- **0925C** plate `Legitur David, etc;` — CC `etc.,`.
- **0925C** plate `*Altitudo diei* mundus` with no comma; CC `*Altitudo diei,*`.
- **0928B** plate `*Venefici incantantis,*` with a comma; CC gives a period.
- **0928D** plate `Genus herbae prius mollis sed quae` with no comma; CC supplies one.

## ⛔ REPORTED AS COPY CONDITION, NOT FOR PATCHING

- **0923B** `*Laetctur disertum*` — the `e` of *Laetetur* images as `c`. **This is a broken sort on
  this physical leaf, the `possit`→`rossit` class Band A refused, and it must not be restored**:
  restoring it would import into the edition a defect that exists nowhere but in this copy's
  inking. Our Latin's `Laetetur` is right and stays. Recorded so that a later reader who opens the
  leaf and sees `Laetctur` does not report it a second time as a missed patch.

⚠ **The `h`/`b` hazard was live in this range and cut the other way from the warning.** At 0924B
the plate reads `hiatu` and **our Latin** carries `biatu`; the `h` was settled against the `h` of
`habitaculis` standing on the same line, not against the type in isolation. The class runs in both
directions and only a same-line control settles it.

---

# BAND B · stint 0054–0058 (cols 0953D–0967C, PDF pp. 482–489) — reported 2026-09-04

All eight leaves read at 150 dpi full page with 600–1200 dpi crops on every site below; corner
numbers read before each page was trusted. **No column in 0953–0968 is clipped at the inner
margin** (so the withdrawn mod-4 rule would have mispredicted 953, 957, 961, 965 as clipped).
**No foot-of-page apparatus of either layer on any of the eight pages.**

## Class 1 — CC conforms Migne to a smoother/received reading
| col | our TEI | the plate | note |
|---|---|---|---|
| 0955C | `saeculo` → we print `seculo` | `saeculo` | our TEI de-diphthongs what the plate sets |
| 0957C | `obviat mihi` | `obvia mihi` | CC supplies the verb ending; `obvia` does not construe with singular `occurrit`, which is why it was "fixed" |
| 0959C | `dicitur` | `dicit` | `Ipsa congregatio, virga haereditatis **dicit**:` |
| 0958C | `quia nescivi nihil esse` | `qui nescivi nihil esse` | |
| 0960A | `solennitatis` | `solemnitatis` | ⚑ the Clementine also reads *solemnitatis*, so with our TEI in hand this looked like a Migne divergence and is not one |
| 0960A | `*Signa,* etc. [n: (AUG.)]` | `*Signa* et (AUG.)` | the plate prints `et`, not `etc.,` |
| 0965D | `Scopebam spiritum meum` | `Scopebam spiritus meum` | real word, wrong case; CC repaired it |

## Class 2 — CC REPAIRS a real Migne defect, destroying a marker we are entitled to fire
Each of these unlocks apparatus only **after** the patch (a `[sic:]` may wrap only type the twin
carries), exactly as Band A's `Seb isti` @0876B did.
| col | our TEI | the plate | marker unlocked by the patch |
|---|---|---|---|
| 0955C | `comparabitur` | **`corparabitur`** | `[sic: *corparabitur*]` — an `r` sort for `m`; `comparatur` prints with a clean `m` eight lines above in the same paragraph, which is the same-line control |
| 0958A | `mox apertis` | **`mo apertis`** | `[sic: *mo*]`; the `x` is simply absent, spacing normal either side |
| 0960C | `quasi dicat:` | **`quasi dica :`** | `[sic: *dica*]` |
| 0960D | `*usque ad*` | **`*uque ad*`** | `[sic: *uque ad*]` — in the VERS. 12 (AUG.) abridgment splice |
| 0962B | `*Narrabimus mirabilia tua,*` | **`*Nafrubimus mirabilia tua,*`** | `[sic:]` on the garbled lemma. Read at 1200 dpi: `Na` + a letter with ascender and crossbar (italic f or t) + `rubimus`. The letters are fully formed and wrongly chosen — compositor, not ink. ⚑ **Re-read the leaf before transcribing the marker's content**: f vs t could not be settled and a marker must not guess a letter |
| 0965C | `contra Deum` | **`contra Dum`** | `[sic: *Dum*]` |

## Class 3 — the defect is OURS; the plate is clean (patch, and NEVER a marker)
| col | our TEI | the plate | note |
|---|---|---|---|
| 0958D | **`temporatia`** | `temporalia` | ⭐ the case the plate gate exists for. A non-word in a psalm gloss, in a paragraph that is otherwise rough — the profile of a Migne defect on every internal test. The leaf says it is ours. **English already renders "temporal things".** |
| 0966B | **`*Caepi.*`** | `*Coepi.*` | æ for œ; **English already renders "I have begun"** |

## Class 4 — Migne's own numbering and sigla, silently normalized by CC
⛔ These are the "Migne's printing is not yours to tidy" class, and CC tidied them before we saw them.
| col | our TEI | the plate | note |
|---|---|---|---|
| 0957D | `VERS. 18.-- *Verumtamen.*` | **`VERS. 17.`** | the *Sanctuarium* paragraph immediately above is also `VERS. 17.`, so Migne prints **17 twice in a row**. Substantively 18 is right (Ps 72:18 *Verumtamen propter dolos*), which is exactly why it got repaired. Restore the plate's 17 |
| 0963A | `VERS. 11.-- *Cornua justi,*` | **`VERS. 1.`** | substantively 11 (Ps 74:11); the plate sets a single 1 |
| 0954D | `[n: (CASS.)]` | `(CAS.)` | before `Inde regula baptismi` |

## Punctuation (low priority)
- **0954D** the plate ends `Paucis verbis magna docet sacramenta.` with a full stop; our TEI has
  none. ⚑ **One English edit is NOT owed** — the twin already carries the stop, taken from the plate.
- **0956D** plate `Ne resipiscant : non amicti` — CC gives a semicolon.
- **0958B** plate closes `ideo perdes eos, quia per eos.` with a full stop; CC gives a comma, so
  our twin runs the dangling clause into the `VERS. 21.` head.

## ⛔ Reported as copy condition, NOT for patching
- **0959D** `ducens eos in finem` — the `s` of `eos` is a half-inked sort and images as a comma-like
  mark. Broken sort on this leaf, the `possit`→`rossit` class. Our TEI's `eos` is right and stays.

## ✅ Checked at the plate and AGREEING with our TEI (recorded so nobody re-opens them)
`commisti` 0954B · `(HIERON., AUG.)` 0954C · `ubi vox:.` 0954D (the colon-then-stop is Migne's) ·
`Defecerunt hymni David filii Jesse` 0955D · `Rectis corde` 0956B · `In securi et ascia polluerunt
tabernaculum nominis tui` 0960A–B (the splice of Ps 73:6 and 73:7 is Migne's own) ·
`perniciosus defendendo se` 0962D (positive, not the comparative the *malum/pejus* series wants) ·
`Diem illustrat sed incommutabilis sapientiae` 0961B · `(Psal. XXVIII)` on Ps 18:3 at 0961B ·
`exspecta tribu Levi` 0963B · `In finem pro Idithum` 0964D · `Vox mea ad eum` 0965A ·
`Mandabo nubibus meis` 0967A · `intrepretatur` 0967C (Migne's, and now marked) ·
`Diapsalma` set ROMAN at 0963C, 0964B, 0965B, 0966D.

---

# BAND B · stint 0049–0053 (cols 0940D–0953D) — reported 2026-09-04

Eight PDF pages read at the plate (475–482, cols 0939–0954); page map `(column+11)/2` calibrated
against the printed corner numbers on p. 475. **No column in 0939–0954 is clipped at the inner
margin.** 20 departures over ~14 collated columns (~1.4/col), consistent with the band estimate.
Every row below was read on the leaf; none is a marker candidate.

## Class 1 — CC conforms Migne to the Vulgate (invisible to any collation)
| col | our TEI | the plate | note |
|---|---|---|---|
| 0948B | `De profundis clamavi ad te` | **`clamavit`** | Ps 129:1. CC's form **is the Clementine's**. Migne's 3sg is what the gloss's `Claudit super illum, qui in profundo contemnit` runs on. English twin `0051.md` may need "he hath cried" with the patch |

## Class 2 — CC repairs Migne's real defects (each destroys a marker we are owed)
| col | our TEI | the plate | note |
|---|---|---|---|
| 0940D | `prophetae de exsultatione` | **`prophetae ne exsultatione`** | `ne` is a wrong sort for `de`; unlocks a `[sic:]` |
| 0941A | `quod laeti sunt quia non est finienda` | **`qui`** | unlocks a `[sic: *qui*]` |
| 0941C | `concussisti ac commovisti` | **`commovistis`** | 2pl for 2sg in an address to God |
| 0943D | `manibus honorum operum` | **`bonorum`** | ⚑ **the reverse direction** — here CC is wrong and Migne is right. Checked against the `b` of `manibus` on the same line, so not the h→b imaging trap. **One English edit owed with the patch: `0049.md`, "the hands of honourable works" → "the hands of good works"** |
| 0944A | `ut canes ejus sint cujus erant inimici` | **no `cujus`** | Migne's clause does not construe; CC supplied the relative. Unlocks a `[cj:]`/`[sic:]` |
| 0944A | `*Viderunt ingressus tuos, Deus.*` | **`Viderunt in gressus tuos`** | word division, the Pattern-10 shape |
| 0944C | `Aposto os indicat` | **`Apostolos indicat`** | ⚑ **the reverse direction** — the break is CC's, the plate is clean. English twin `0050.md` already reads "the Apostles" on the plate's authority; the Latin is what needs fixing |
| 0944C | `fuerunt Apostoli` | **`fuerunt Apo-toli`** | the `s` is simply absent at the line break; compositor, not ink |
| 0945A | `*Ex Aegypto, Aethiopia.*` | **`Ex Aegppto`** | double `p` for `y`; unlocks a `[sic:]` |
| 0945A | `nomine fidem omnium gentium signat` | **`fide`** | |
| 0945D | `Hic ipsos Apostolos intelligit` | **`Aposlos`** | `to` dropped; compositor |
| 0946A | `de causa commutationis` | **`commutationibus`** | |
| 0946A | `ultra quam non habent mali quid eis faciant` | **`qui`** | |
| 0946B | `non inveni in eis quod feci` | **`fecit`** | ⚑ which reading is right is open; the plate says `fecit` |
| 0948B | `dicitur hoc ex infirmitate membrorum` | **`et`** | |
| 0953A | `suscitavit carnem nostram in vitam aeternam` | **`in viam aeternam`** | verified at 500 dpi; `viam` for `vitam`, compositor |

## Class 3 — our Latin carries words the plate lacks
| col | our TEI | the plate | note |
|---|---|---|---|
| 0942A | `Vel, *mons Sina a facie Dei Israel,*` | **`mons a facie Dei Israel`** | ⛔ **the worst one in this range.** CC inserts `Sina` into a lemma whose whole point is that it is absent: Migne's own next gloss reads `Quidam libri non habent *mons,* sed *a facie Dei Sina Israel*`. The insertion makes Migne argue against a text he did not print |
| 0947C | `dicerent: Sic tibi contingat ut crucifixo` | **no `tibi`** | English twin `0051.md` renders "So may it befall thee"; drop "thee" with the patch |

## Class 4 — sigla and markup
| col | our TEI | the plate | note |
|---|---|---|---|
| 0941A | `[n: (CAS., AUG.)]` | **`(CASS., AUG.)`** | same class as 0954D below |
| 0951A | `Omnes modi monstrosi` | **`monstruosi`** | |
| 0950A | `*Appone iniquitatem super iniquitatem,* etc.)` | `etc. (AUG.)` | the note extraction ate the opening paren and left a stray `)`. **Our English twin `0052.md` reproduces the stray `)` faithfully; remove it from both with the patch** |
| 0949D | `mens eorumdem Semper hoc de illis` | `mens eorumdem. Semper` | CC lost Migne's full stop, leaving a capitalised `Semper` mid-sentence |

## ⚠ Lower confidence, flagged rather than asserted
- **0945D** plate images `spiritoali` for `spirituali` (`o` for `u`). A wrong sort would be a
  compositor error and restorable; a filled `u` would be this copy's ink and would not. The bowl
  is fully closed and round at 500 dpi, which argues for a sort, but I would want a second copy.

## ⛔ Reported as copy condition, NOT for patching
- **0941C** `dum [educit vinetos` — the `c` of `vinctos` images as `e`, and the same word is set
  correctly twice within four lines. Broken/filled sort, the `possit`→`rossit` class.
- **0941C, 0940D** a raised bracket-like tick before `Vere educis`, before `educit`, and in
  `verbis'his`. Debris on this leaf; it recurs across the gathering.
- **0953A** `|Christum` (broken sort before the C) · **0953C** `j..dicii` (the `u` knocked out).

## ✅ Checked at the plate and AGREEING with our TEI (so nobody re-opens them)
`Diapsalma`/`Diapsalmus` set **ROMAN** at 0941C, 0942C, 0943B, 0944B, 0945B — five more reads
confirming §A2 · `Dilecti, dilecti` 0942B with Migne's own `Repetitio dilecti ad commendationem`
beneath it, so **not** a `[d:]` of ours · `Etenim Dominus habitabit eum in finem` 0942D (the extra
`eum` is Migne's) · `Os turturis retorquetur ad ascellas` 0943D (`Os`, not `caput`) ·
`In mentis excelsu` 0944C · `Deus virtutum` 0946D · `sustinui opprobria` 0947A (plural in the
lemma, singular in the gloss beneath — both Migne's) · `mysterium Verbi Dei` 0947C ·
`(Luc. LXXXIV)` 0947D, `(Job. VII)` 0952D, `(Tob. IV, 2.)` 0952D, `(Matth. XXI)` 0953C — four
impossible locators, all set thus by Migne · `Notitia Dei, quae praedestinavit ac vitam` 0950B
(the ungrammatical `ac` is Migne's; conjecture `ad vitam`, from Rom 8:29) · `quaerite Dominum`
0950C against `quaerite Deum` two lines below it · `Omnia quae in eis sunt` 0950D ·
`Magnificetur Deus` 0951C · `In finem` opening the Ps 70 titulus at 0951D · **the whole of
col 0952 collated word by word with nothing to report.**

---

# Band B · stint 0044–0048 (cols 0930D–0940C, six leaves read: PDF 470–475)

All six pages were opened at 200 dpi full-width plus 500 dpi crops. Corners read 930 / 931 / 932 /
933 / 934 / 935 / 936 / 937 / 938 / 939 / 940; `PATROL. CXIII.` stands at the foot of PDF 474, so
the volume is confirmed from the plate again. **No conjecture apparatus of either layer on any of
the six leaves. No column in this range is clipped at the inner margin** — the only marginal
trouble is col 0932, whose OUTER (right) edge is over-inked and smears the last two or three
characters of many lines.

## ⚠ Class 1 — CC has words the plate lacks, or lacks words the plate has

| col | our TEI | the plate | note |
|---|---|---|---|
| 0932A | `accolit **in** terra` | `accolit terra` | CC inserts `in`. Migne's bare ablative is the harder reading. |
| 0933A | `non **est** vobis irruendum` | `non vobis irruendum` | CC supplies the copula Migne ellipsed. |
| 0934C | `Deum adorat; unde Apostolus` | `Deum **unde** adorat; unde Apostolus` | ⭐ **CC has ERASED a dittography of Migne's.** The compositor's eye ran ahead to the following `unde`. Per Pattern 11a the intrusive copy is the FIRST (it has no grammatical slot), so the patch unlocks `[d: unde]` in `src/english/8967/0045.md` at "He lifts up his hands who … adores God". |
| 0936D | `perditorum. **(** *Non vos me elegistis…*` | `perditorum. *Non vos me elegistis…*` | The unmatched opening parenthesis is CC debris from the following `(Joan. XV)`. The English twin already omits it. |
| 0939A | `VERS. **10.**-- *Quoniam probasti nos.*` | `VERS. -- *Quoniam probasti nos.*` | ⭐ **Migne prints NO verse number here.** CC supplied `10`. (The number happens to be right against Clem Ps 65:10 — which is exactly why it reads as innocent.) |

## Class 2 — CC repairs a real Migne defect, destroying a marker we are owed

| col | our TEI | the plate | what the patch unlocks |
|---|---|---|---|
| 0931A | `*Vino,* spirituali` | `*Viuo*, spirituali` | turned `n`. A `[sic: *Viuo*]` after the patch; the sense (`Vino`) is already in the English. |
| 0932D | `sed **quia** Deus susceptor non movebor` | `sed **quis** Deus susceptor non movebor` | `quis` does not construe; `quia` does. `[cj: *quis*; read *quia*, "because"]` becomes available. |
| 0934D | `Idumaeae, **etc.**,` | `Idumaeae, **atc.**,` | wrong sort, `a` for `e`. |
| 0935A | `Psalmus **iste** breviter agit` | `Psalmus **isto** breviter agit` | a normalization: Migne's ablative has no slot. |
| 0936C | `quod sacerdos **Christus** obtulit` | `quod sacerdos **Christum** obtulit` | ⭐ **The one on this leaf that touches SENSE.** With `Christum` the victim is Christ and the priest is unnamed; with CC's `Christus` the priest is Christ. The next sentence (`Idem est ergo sacerdos et hostia`) reads either way, which is why nothing flags it. The English twin renders CC's nominative. |
| 0937D | `(**CAS.**, AUG.)` | `(**CASS.**, AUG.)` | ⛔ per-site only. Migne's own `(CAS.)` stands three times on the SAME page (0937A, 0937C, 0938B) and was checked; do not sweep. |
| 0937D | `Apostoli ad **eas** venerunt` | `Apostoli ad **eos** venerunt` | the plate's masculine agrees with the following `per quos`; CC's feminine does not. |
| 0938A | `*Clamabunt.*` | `*Clamabuut*.` | turned `n`. Unlocks `[sic: *Clamabuut*]`. |
| 0938C | `resurrectionem pertinere ad gentes` | `**ressurrectionem** pertinere ad gentes` | a real non-word. Unlocks `[sic: *ressurrectionem*]`. |
| 0938C | `non enim mox **immortalitas**` | `non enim mox **immortalitai**` | a real non-word. Unlocks `[sic: *immortalitai*]`. |
| 0934D | `id est **propitatio**` | `id est **propitiatio**` | ⭐ **the mirror case, and the reason to read the leaf before firing.** Our TEI carries the non-word and Migne does not: `propitatio` is CC's corruption. **NO `[sic:]` is owed** and the English renders "propitiation". |

## Class 3 — punctuation and cosmetic (no sense at risk)
- **0930D** plate `non legitur. etc.,` → CC comma · plate `Doctrinam (AUG.)` with no point inside
  the italic → CC `Doctrinam.` · plate `etc,,` (doubled comma) → CC `etc.,`
- **0933C** plate `facilius decipiunt, *In idipsum*` → CC full stop
- **0933D** plate `in deserto, scilicet sponsa. Deum videre desiderat` → CC comma for the full stop
- **0934A** plate `Non enim vigilares, nisi lux oriretur` → CC semicolon
- **0934D** plate `id est Christi. ad lucis auctorem` → CC comma
- **0935C** plate `putat se fallere,` → CC full stop · **0935D** plate `justi laetati,` → CC full stop
- **0935D** plate `Quid *faciemus viri fratres?*` → CC inserts a comma inside the lemma
- **0936C** plate `eadem est Jerusalem` with NO terminal stop → CC supplies one
- **0937D** plate `*Campi tui replebuntur*,` → CC full stop
- **0939A** plate siglum `(CAS.; AUG.)` with a SEMICOLON → CC comma · plate `Tu haec, omnia` → CC drops the comma
- **0939D** plate runs `orationis, auditur *Clamavi et exaltavi in corde*` with no stop → CC supplies a full stop after `auditur`

## ⛔ Reported as copy condition, NOT for patching — and a class worth naming
**Three italic `e`s on these leaves image as `c`**: `*Ostcndisti*` 0931A · `*omncs*` 0932D ·
`*Vallcs*` 0938A. Every one reads as a confident wrong-sort from the crop alone, and CC has the
good letter in all three. They are **declined** under the `possit`→`rossit` rule: italic `e`
images correctly in dozens of places on the same six leaves (`*Propitiaberis*` 0936D,
`*Beatus quem elegisti*` 0936D, `*me suscepit*` 0934D), so this is broken/under-inked type on this
copy, not a reading of the edition. ⚑ **This is the launch brief's `h`/`b` warning generalising:
in this scan family italic `e` can image as `c` too — check it against a known `e` on the same
leaf before reporting one.** The turned-`n` pair above (`Viuo`, `Clamabuut`) is deliberately NOT
in this class: an `n` cannot become a clean bottom-arched `u` by failing to ink.

## ✅ Checked at the plate and AGREEING with our TEI (so nobody re-opens them)
`Diapsalma`/`Diapsalmus` set **ROMAN** at 0931B, 0932A, 0933A, 0933B, 0938C, 0938D, 0939C — seven
more reads confirming §A1.2 · **0931D `sequitur clamoris exaudito in petra Christo`** — the
unconstruable `exaudito` is MIGNE'S, not CC's; conjecture `exauditio`, no marker fired ·
`*Aggoeus*` 0936A (Migne's own spelling for Aggaeus) · `Scrutina` 0935C · `quia Deus erigit humiles
*Desertum*:` 0937D with no stop between `humiles` and the lemma — Migne's, and the English carries
the run-on · `Rex vero` 0934D set ROMAN where it is plainly a lemma — Migne's · `(CAS.)` at 0937A,
0937C, 0938B and `(CASS.)` at 0932C etc. — Migne alternates the siglum himself · `*In finem pro
his*` 0930D against `*Pro iis qui mutabuntur*` five lines later — Migne prints both `his` and `iis`.

## ⬜ Cannot be settled on this copy
- **0932B** `*Misericordia* est` (our TEI) against what looks like `Misericordiam est` on the
  plate. The word sits in col 0932's over-inked right margin and the terminal is a blot at 500 dpi
  with autocontrast. `Misericordia est` construes and `Misericordiam est` does not, but that is an
  argument, not a read. **Needs Gallica.** No marker fired; the English renders our TEI.

---

# Stint 0073–0076 · cols 1002B–1011B · Psalms XCIII–C · reported 2026-09-04

**Six leaves read at the plate (PDF 506–511, cols 1001–1012), every corner number checked before
the page was trusted. All twelve columns CLEAN at the inner margin — including 1001, 1005 and
1009, which are ≡ 1 (mod 4). That is three more counterexamples to the withdrawn mod-4 rule, and
this stint fired nothing on the strength of it either way.** No foot-of-page conjecture apparatus
on any of the six leaves, in either layer. **Fourteen departures over ten columns ≈ 1.4/column**,
matching the band rate exactly.

## 🅐 CC MOVES MIGNE ONTO THE CLEMENTINE — invisible to any Vulgate collation

- **1004B** plate `*In psalmi jubilemus.*` → our TEI `*In psalmis jubilemus.*`
  (Ps 94:2 Clem. `et in psalmis jubilemus ei`). ⭐ **Patching this back UNLOCKS a marker**: Migne's
  `psalmi` is refuted by his own next words, `Quae dicimus in psalmis` — the gloss expands its
  lemma into the right case. Candidate `[cj: *psalmi*; read *psalmis*, "in psalms"]`. **No English
  change is owed** — "in psalms" renders either.
- **1007B** plate `*Audivi et laetata.*` → our TEI `*Audivit et laetata.*`
  (Ps 96:8 Clem. `Audivit, et laetata est Sion`). ⭐⭐ **The highest-value site in this range.** CC
  erased a **first-person/third-person** divergence *before any instrument looked*, and the gloss
  under it argues in the third plural (`Audierunt apostoli`). Patching it back makes a
  `[var: Vulg. Ps 96:8 *Audivit*, "she hath heard"]` available. English change owed at patch time:
  "*He hath heard and was glad.*" → "*I have heard and she was glad.*" — **flagged, not made.**
- **1007B** plate lemma stub `*Terra... deos.*` → our TEI `*Terram . . . deos.*`
  (Ps 96:9 Clem. `super omnem terram … super omnes deos`). English unaffected (no case in English).
- **1005D** plate `ne quis ergo dicat : *Ecce hic Christus esse illic,*` → our TEI
  `*Ecce hic Christus, ecce illic,*`. CC substituted `ecce` for Migne's `esse`, moving him toward
  Mt 24:23 (`Ecce hic est Christus, aut illic`). ⭐ **English change owed at patch time** — this is
  the one site in my range where the two Latins say different things. Our English currently reads
  "*Lo, here is Christ, lo there,*" which renders **our TEI**, not Migne. After the patch it should
  read "*Lo, here is Christ to be there,*" with the crux carrying the conjecture (`aut` / a second
  `ecce`), and a `[var:]` against Mt 24:23 becomes available. **Flagged, not made** — the ordering
  rule in §3 of the launch brief is exactly what this site is for.

## 🅑 CC REPAIRS MIGNE'S REAL DEFECTS — each patch UNLOCKS a marker we are entitled to fire

- **1010A** the psalm head is printed **`PSLMUS C.`** on the plate → our TEI `PSALMUS C.`
  ⚑ Note this also stands in the chunk-0076 frontmatter `heads[]`. **No English change is owed**:
  Pattern 9 normalizes a section label in English precisely because the facing Latin preserves the
  misprint, so the head must read `PSALM C.` either way — but the Latin column should carry what
  Migne set.
- **1009C** plate **`inicipientibus`** (a non-word) → our TEI `incipientibus`.
  ⭐ Unlocks `[sic: *inicipientibus*]`. English unchanged ("those who are beginning").
- **1010D** plate **`ibi, *in mututinis.*`** (a non-word) → our TEI `*in matutinis.*`
  ⭐ Unlocks `[sic: *mututinis*]`. English unchanged ("*in the mornings*").
- **1006B** plate `atque regnum **adjuraverunt** ei` → our TEI `abjuraverunt`.
  The 8990 `concilio`→`consilio` class: an alteration to a **different verb**, and CC's is the one
  the sense wants (the Jews *renounced on oath* the kingdom to him). ⭐ Unlocks
  `[cj: *adjuraverunt*; read *abjuraverunt*, "renounced on oath"]`. English currently renders our
  TEI ("abjured the kingdom to him") and needs no change under the additive `[cj:]` form.
- **1011B** plate `Jam enumeravit quod **et** non adhaeserunt nisi boni` → our TEI `quod **ei** non
  adhaeserunt`. Same class, same direction: CC's reading is the better Latin. ⭐ Unlocks
  `[cj: *et*; read *ei*, "to him"]`. English currently renders our TEI ("none clave **to him** but
  the good"). ⚑ This one is a **reference-binding** site, the class §4 of the launch brief names as
  invisible to every automated check — worth the patch pass looking at it twice.

## 🅒 CC CREATES NON-WORDS MIGNE DOES NOT PRINT — no `[sic:]` is owed in either state

- **1004A** plate `*Cantus* **hilaritatem** significat.` → our TEI `hilaritarem`.
  Checked against a known `t` and a known `r` on the same printed line before believing it.
  Our English renders the sense ("*Song* signifies gladness"), which is right for the patched Latin
  and is the only thing a non-word can be given.
- **1008D** plate `*Terra scabellum **pedum** ejus*` → our TEI `vedum`.
  Our English renders "the footstool of his **feet**" (Is 66:1), right for the patched Latin.

## 🅓 Punctuation and note-placement departures (low value, listed for completeness)

- **1002C** plate `*Psalmus David.*` **with a full stop inside the italic** → CC drops it
- **1002C** plate `nec optes vindictam : quae si venerit` (colon) → CC semicolon
- **1003A** plate sets the note **outside** the italic and after a full stop —
  `*…ut recipiat unusquisque.* (Rom. XIV), etc.` → CC puts `[n: (Rom. XIV)]` **inside** the span
  and after a comma. ⚑ Worth a look at the patch pass: this changes what the italic span *is*, and
  the span count is the only detector this project has for that class.
- **1005C** plate `prius sit sanctus. quod fit ex eo sanctificante:` (full stop, lowercase `quod`)
  → CC comma
- **1005C** plate `daret honorem Deo nisi hic alienigena` (no comma) → CC inserts one before `nisi`
- **1005D** plate `*Regnavit,* Alia littera:` (comma, inside the italic) → CC `*Regnavit.* Alia`
- **1006C** plate `cum caro ejus resurrexit postquam resurrectionem` (no comma) → CC supplies one
- **1010C** plate `et perfecisti justitiam, Sed duobus modis` (comma + capital `Sed`) → CC full stop
- **1010D** plate `*Non proponebam* Quasi ;` → CC `*Non proponebam.* Quasi:`
- **1011A** plate `vel judicent mecum,` (comma) → CC full stop

## ✅ Checked at the plate and AGREEING with our TEI — so nobody re-opens them
**These are the checked negatives, and they cost as much as the findings.**

- **1004D `non quas eminus, quia sunt, et oves quas non fecimus`** — read at 500 dpi. **The crux is
  MIGNE'S, not CC's**, so no patch is owed and no `[sic:]` may be fired (`eminus` is a real word;
  Pattern 12 excludes real words that are merely wrong). Corpus control: 16 `eminus` against 2
  `emimus` in `src/latin/`, so the form is not itself suspect. Conjecture `emimus` ("which we
  bought"), on the parallel with `quas non fecimus` in the very next clause — carried in the
  cruces, **`[cj:]` declined** under 18a.
- **1006C `postquam resurrectionem`** set as **ONE word** on the plate. Migne's, not CC's. The
  syntax wants `post quam resurrectionem`. No `[sic:]` (Pattern 12 excludes real words), crux only.
- **1010C `si deserit miserum`** — ⚠ **the standing `deservit`/`deserit` check, and it comes back
  CLEAN in both witnesses.** Plate and TEI both read `deserit`, and the sense confirms it: the
  contrast is with `si facit miserum`, not a dative construction.
- **1005C `Non est inventus qui daret honorem Deo`** — the `honorem`-for-`gloriam` divergence from
  Lc 17:18 is **MIGNE'S**, verified on the leaf. A `[var:]` is therefore owed and is fired.
- **1008B** the whole Ps 98 opening, including the wrong citation `(Psal. XLVIII)` for what is
  Ps 84:12 — Migne's, passed through verbatim.
- **1003C** `(Matth. XXVI)` for what is Mt 14:28, and **1010D** `(Matth. VIII)` for what is Mt 5:6 —
  both Migne's, passed through verbatim.
- **1011B** the B band mark stands beside `ubi ostendit / quis finis sit malorum`, which is exactly
  where our anchor `[1011B]` sits — anchor **position** verified, not merely presence (test 2b).
- ⚑ **Cross-reference for the patch pass:** an earlier stint left **0932B `*Misericordia* est`
  vs `Misericordiam est`** in the "cannot be settled on this copy" list. My **1007D** is the same
  word in the same construction and it **could** be read: the plate sets `*Misericordiae* est quo
  promisit` in italic with a clear `-ae` ligature. That does not settle 0932B, but it shows the
  construction Migne uses, which is an oblique case and not the nominative CC gives at either site.

---

# Band B · stint 0069–0072 · cols 0992A–1002B (PDF pp. 501–506) — 2026-09-04

**All six leaves read at 200 dpi full page with 600/900/1200 dpi crops on every candidate; corner
numbers read first on each (991/992 … 1001/1002, foot of p. 506 reads PATROL. CXIII., signature 32).
Six columns collated word by word, twelve column-bands.** **No column in this range is clipped at
the inner margin** — twelve more counterexamples to the withdrawn mod-4 rule. **No foot-of-page
apparatus of either layer on any of the six pages.**

**16 word-level departures over 11 collated columns ≈ 1.5 per column**, matching Band A's rate.

## 🔴 Class 2 — CC REPAIRS Migne's real defect (each one, once patched, UNLOCKS a `[sic:]` we are entitled to fire)

| col | Migne prints | our TEI | control that was actually run |
|---|---|---|---|
| 0993B | `Humilitatus. est perdendo` | `Humiliatus est` | 600 dpi; **and the full stop after the word is Migne's too — CC swallowed both.** No verb *humilitare* is attested; *humiliatus* is the form |
| 0996A | `*Quis est hemo?*` | `homo` | 600 dpi. The italic `o` of `hemo`'s own last letter and the italic `e` of `est` on the same line are the control; **`*Quis est homo?*` prints correctly eleven lines above at 0995D** |
| 0996A | `*de manu iuferiori,*` | `inferiori` | 900 dpi. Turned `n`. Controlled against the italic `u` of `manu` (same line, three words earlier) and the `n` of `animas` (same line): the glyph is the cup, not the arch |
| 0996A | `*Opprobri servorum.*` | `Opprobrii` | 600 dpi; single `i`, and the Vulgate has `opprobrii`, so CC's form is the conformed one |
| 0996C | `Elcce omnis` | `Ecce` | **1200 dpi: five distinct glyphs**, the `l` a full-height vertical with its own serif foot, clearly separated from the `c` that follows |
| 0996D | `et *aani* tui non deficient` | `anni` | 1200 dpi; two closed bowls, then `n`, then dotted `i` |
| 0996D | `qnasi nihil est` | `quasi` | 900 dpi. Turned `u`. Controlled against the `n` of `nihil` on the same line |
| 0998A | `*et delectatio sumus.*` | `delectati` | 600 dpi; `delectatio` in full |
| 0998A | `per iniqui-tales dispersi` | `iniquitates` | 600 dpi, hyphenated across the line; cf. Band A's `iniquitetem` @0910C, same shape |
| 0998C | `quia est jauna per quam` | `janua` | 600 dpi; **`Janua Christus` prints correctly four lines below on the same column** |
| 1000A | `ut jam speram sequi` | `sperem` | 600 dpi |
| 1000D | `quibus uior, vel quae miror` | `utor` | 900 dpi. **The glyph carries an i-dot**, so it is a set sort, not an under-inked `t` — this is why it is reported and the `possit`→`rossit` class is not |

## 🟠 Class 1 — CC moves Migne ONTO the Clementine (invisible to any Vulgate collation)

| col | Migne prints | our TEI | why it matters |
|---|---|---|---|
| 0999D | `oculis tuis considerabit malum` | `considerabis` | Ps 90:8 has `considerabis`, which is exactly what CC supplies. **The plate keeps both forms in one column** — `considerabit` in Augustine's paraphrase and the lemma `*considerabis.*` at 0999D's foot |
| 1000B | lemma `*Et conculcabit.*` | `conculcabis` | ⭐ **The gloss is built on the third person**: its very next words are `Serpentem calcat Ecclesia` — *the Church* treads. A conformed lemma destroys the exposition it carries. Once patched, a `[var: Vulg. *conculcabis*]` is owed here |

## 🟡 Class 3 — our Latin carries what the plate does not

| col | Migne prints | our TEI |
|---|---|---|
| 0992B | `per Spiritum manifestasti` | `manifestati` — CC drops the `s`, leaving a participle governing nothing where the plate has a second-person perfect parallel to `dixisti` |
| 0993C | `per synecdochen` | `synedochen` (CC drops the `c`; a non-word Migne does not print, so **no `[sic:]` is owed**) |
| 0993D | `praecursoris Dominum hospitium praeparantis` | `Domino` |
| 0996D | `trepidatione, qnasi nihil est` | `et quasi nihil est` — CC **inserts an `et`** the plate does not print |
| 0999D | `tribunalis, qui quibus sedebunt` | `in quibus` — CC replaces Migne's `qui` with `in`. Whether the plate's `qui quibus` is a compositor's false start (11a) is for the patch pass, not for me |
| 0999D→1000A | `Ideo-` / `que diligenter adverte`, broken across the column turn | `Ideoque [1000A] que diligenter adverte` — **a dittography CC manufactured at the column break.** No `[d:]` is owed: it is ours, not Migne's. **The English renders `Therefore` once and the anchor stays in place**; the patch pass should not read the English as having dropped a word |

## 🔵 Punctuation-only departures (recorded, not argued — the class is pervasive here)
0992B `Apostolus ; Dico` → our `:` · 0993B `percusso corde. ubi` → our `,` · 0994D `id est Christo. per
sanctitatem` → our `,` · 0995A `vel *sprevisti.* quia` → our `,` · 0995A `reputantur, Sepes` → our `.` ·
0995C `quae nihil nisi per ipsum` → our `nihil,` · 0996B `VERS. 1, —` → our `VERS. 1.--` · 0996D
`Secundo. exponit` → our `,` · 0996D `Non dicit. saltem` → our `,` · 0996D `*Vespere decidat,* In` → our
`.` · 0997A `*Vel mane sicut herba.*` → our `*Vel, mane…*` · 0997C `ut a via, ejus` → our no comma ·
0997D `monet nos,` → our `.` · 0998B `[Describit primo` → our text drops Migne's opening bracket ·
1001B `Ite maledicti` → our `Ite,`. **None of these is argued as a patch; they are here so a later
collation does not re-derive them.**

## ✅ Checked at the plate and AGREEING with our TEI (so nobody re-opens them)
`Diapsalma` set **ROMAN** at 0992D, 0994A, 0994D, 0995C — four more reads confirming §A1.2 ·
`*Quis novi.*` 0997C is **Migne's**, not CC's (900 dpi) — a `[var:]` against Vulg. `novit`, never a
`[sic:]`, because *novi* is a real form · `*Splendor … et operamini.*` 0998B is Migne's · `*Cum exorti
fuerunt.*` 1001A, `*Et ab insurgen-tibus*` 1001B, `*In diem*` 1001D, `*mirabilis ela-tio maris*` 1002B all
Migne's · `ab emenda-tione` 0995B is Migne's (900 dpi) · `et pascua eveniet` 0998C is Migne's (Jn 10:9
has `inveniet`; it stands in the gloss's prose, not in an italic lemma, so no marker) · `(CAS.)` 0992D
against `(CASS.)` elsewhere — Migne alternates · `(HIER.. CASS.)` 0998B and `(CASS )` 1002B — his own
loose pointing of the sigla · **cols 1001A–1002B carry no word-level departure at all**, the cleanest
pair in the range.

---

# Stint 0064–0068 (cols 0981A–0991D, Ps LXXXI–LXXXVII) — six pages read at 300 dpi full width plus 600 dpi crops, PDF 496–501, corners 982 / 983-984 / 985-986 / 987-988 / 989-990 / 991-992

**Clipping:** col **0981 is CLIPPED** at the inner margin (3–6 characters). **0983, 0985, 0987, 0989, 0991 are all CLEAN** — and 985 ≡ 1 (mod 4), one more counterexample to the withdrawn mod-4 rule.

## 🔴 Class 2 — CC REPAIRS a real Migne defect (each one, once patched, unlocks a marker)

| col | Migne prints | our TEI | note |
|---|---|---|---|
| 0983C | `Ge enim **vallit**, Bal, vana` | `vallis` | 600 dpi; clear `-it` with a dotted i. **A non-word here** — Migne's own line two above prints the gloss `Vallis vana.` in roman, which is the true reading. Once patched, `[sic: *vallit*]` is owed |
| 0985A | `Egit autem in praedictis **psalmi** de Domini incarnatione` | `psalmis` | 600 dpi. A real word with no grammatical slot (`in praedictis psalmi` does not construe). Once patched, `[sic: *psalmi*]` is arguable under Pattern 12's test 1 |
| 0986D | `Sed fac praesentia incarnationis eum **ventibus** respici` | `gentibus` | 600 dpi; a clean roman `v`, **no descender**, so not a damaged `g`. **A non-word.** Once patched, `[sic: *ventibus*]` is owed |
| 0991B | `id est, confusus de peccatis ea **damnado**` | `de peccatis, ea damnando.` | 600 dpi. Non-word `damnado`; CC also supplies the comma after `peccatis` **and the terminal full stop, which the plate does not print at all**. Once patched, `[sic: *damnado*]` is owed and Pattern 8 governs the missing stop |
| 0991C | `Et alibi : ***Percutium** et sanabo.* occidam` | `Percutiam et sanabo:` | 600 dpi. Non-word inside a quotation of Dt 32:39; CC also turns Migne's full stop after `sanabo` into a colon. Once patched, `[sic: *Percutium*]` is owed |
| 0991C | `unde amici **et videantur, et** more deserunt` | `unde amici et noti timore deserunt` | ⭐⭐ 600 dpi. **A compositor EYE-SKIP:** the line above ends `circumfluere videantur, et` and the compositor re-set that ending, losing `noti ti-` and leaving the orphan `more`. This is the most consequential site in the range: it is a `[d:]`/`[sic:]` shaped defect, and under 11a the INTRUSIVE copy is the second (`et videantur, et`), the first being the true text |
| 0982C | `coronabuntur**, :** mali vero, qui eos persequuntur**.** torquebuntur.` | `coronabuntur: mali vero, qui eos persequuntur, torquebuntur.` | 600 dpi. TWO defects on one line: a comma and a colon set together, and a full stop that strands `torquebuntur.` as a sentence. CC tidied both |
| 0981C | `sed amicus / [clip] stat et audit, et gaudio gaudet **Deorum.** Quos` | `gaudio gaudet. Deorum.` | 600 dpi. **No full stop before `Deorum`** on the plate; CC inserts one, separating the Jn 3:29 quotation from the Ps 81:1 lemma it runs into |

## 🟠 Class 1 — CC alters Migne to a different real word (invisible to any collation)

| col | Migne prints | our TEI | why it matters |
|---|---|---|---|
| 0987B | `Prophetice **dixi** futura, ut praeterita` | `dixit` | ⭐⭐ 600 dpi. **The person is load-bearing.** The same sentence continues `quasi dicat, dixi quasi facta. Et quia video futura … oro ut fiant` — first person throughout. CC's `dixit` puts the clause in a third person the passage does not have. Our English reads "He said prophetically" because Pattern 7 requires it; the patch will make it "I said" |
| 0985A | `et pereant **animo** irreparabiliter` | `omnino` | 600 dpi. Clear `animo` (controlled against `anima` on the line above). CC's `omnino` is a different word entirely |
| 0985D | `Nidus ad tempus, domus **vera** in aeternum` | `vero` | 600 dpi |
| 0982A | `Vel **cum** contemptis terrenis sectando` | `eum` | 600 dpi. Roman `c`, controlled against the `c` of `contemptis` and the `e` of `terrenis` on the same line |

## 🟡 Class 3 — our Latin has LOST what the plate prints

| col | Migne prints | our TEI |
|---|---|---|
| 0989C | `Ecce alienigenae, id est, gentes **: et** Tyrus,` | `id est, gentes *Tyrus,*` — CC drops both the colon and the `et`, fusing two members of the gloss. **The English currently reads "that is, the Gentiles *Tyre,*" and the seam is CC's, not ours** |
| 0984A | `(Rom. ii.) ***Assur,*** Deprimens` | `*Assur.*` — a comma turned into a full stop inside the italic run |

## 🔵 Punctuation-only departures (recorded, not argued)
0982A `Vel in morte` → our `Vel,` · 0987A lemma `*Benedixisti Domine.*` → our `*Benedixisti, Domine.*`
(**note the direction: CC supplies exactly the comma the Clementine has at Ps 84:2**) · 0987A
`*Mitigasti.*` → our `*Mitigasti*` (stop dropped) · 0986D `ire de virtute in virtutem.` → our no stop ·
0986D `Immutabilis, scilicet, sine ortu` → our no second comma · 0990D `Non quos novit ;` → our `:` ·
0991C `non meo merito (Aug.)` → our `merito.` · 0991C `vivere faciam. (Deut. xxxii).` → our no stop ·
0991D `Amicum. (Cass.).` → our `*Amicum* [n: (CASS.)]` · 0991D `Proximum et notos etc.` → our `notos,` ·
0983C `Gebal. Aug., Hier.)` and 0983D `Assur.(Aug., Hier )` — Migne's own unpaired parentheses, which CC
regularises. **None of these is argued as a patch.**

## ⛔ RAISED, CHECKED AT THE PLATE, AND DECLINED — do not re-open
- **`omncm` / `opcrantis` @0984A, `Zcb` @0984A, `Eccc alienigenae` @0989C** — all four are the
  **documented italic-`e`-images-as-`c` hazard**, not Migne's type. Three false candidates in one
  stint's range, exactly the rate Band B has been measuring. **Our TEI is right in all four.**
- **A bracket-shaped ink mark before `Antichristus` @0983B** and one before `dixi quasi facta` @0987B
  — copy condition (broken/inked sorts), not readings. Not restored: the `possit`→`rossit` rule.
- **A stray `?` after `Sisara,` @0984A**, standing flush at the right margin at the line end. It images
  as a clean sort identical to the `?` of `Ubi sapiens?` on the line below. **Reported as an
  observation, not proposed as a patch**, because a mark at the extreme right margin of this scan is
  where ink bleed lives and one leaf cannot settle it. If a second copy confirms it, our
  question-mark parity for chunk 0065 changes by one.
- **`deserit` @0985D** (`sicut passer deserit silvas`) — the standing *deservit*/*deserit* check. **The
  plate reads `deserit` and our TEI agrees.** A checked negative, recorded so nobody re-runs it.
- **`filiis Excelsi omnes` @0981C** — the Clementine has `filii`. **CANNOT BE SETTLED ON THIS COPY:**
  the word opens a line inside col 0981's clipped inner margin. Logged the way Band A logged f443 /
  f449 / f453; needs Gallica. No `[var:]` fired.

## ✅ Checked at the plate and AGREEING with our TEI
`Diapsalma` set **ROMAN** at 0981D, 0987A, 0989B, 0989D — four more reads confirming §A1.2 ·
`Deus quis similis?` @0982C–D: the plate really does clip the lemma before `erit tibi`, which is why
the gloss can argue `est` against `erit` · `filii et Dei` @0982B is **Migne's**, not CC's (600 dpi) ·
`Mater Sion dicet, homo.` @0989C is Migne's, comma and all · the `!` closing `qui in me loquitur
Christus!` @0986C is Migne's · **no foot-of-page conjecture apparatus of either layer on any of the
six pages** · `In Hebraeo` @0991A — **CLOSED**: the plate prints `In Hebræo non medici, etc.` with **no
Hebrew type at all**, exactly like 0868A. This is the fourth of Band A's §D.4 clauses to be settled.

---

# Stint 0059–0063 (Band B, cols 0967C–0981A, Psalms LXXVII–LXXX) — 2026-09-04

**Eight PDF pages opened (489–496 = cols 0967–0982), corner numbers read on every one.**
**15 departures across 15 columns collated word by word = ~1.0 per column**, against the band's
running ~1.4. Cols **0977 and 0978 came back with ZERO departures** and that negative is recorded in
`data/plate-reads.json` deliberately.

## A. CC REPAIRED A MIGNE DEFECT — patch restores the defect and UNLOCKS a `[sic:]`

1. **0968D · p. 489 · `factus` → `fuctus`.** Plate: *Ephraim **fuctus** est facti columba insipiens.*
   Controlled at 5× against the `a` of *facti*, *columba* and *Ephraim* **on the same printed line**;
   the glyph is an open-topped `u`, the controls are closed-bowl `a`. **Unlocks `[sic: *fuctus*]`.**
   ⚑ Our English already fires `[sic: facti]` on the *other* corrupt word in the same lemma, which
   our TEI does carry; the two are independent.
2. **0969A · p. 490 · `Discite` → `Discit`.** Plate: *…humile mandatum docuit : **Discit** a me, quia
   mitis sum et humilis corde.* A third-person indicative where Mt 11:29 has the imperative and where
   *docuit* requires it. **Unlocks `[sic: *Discit*]`.**
3. **0973D · p. 492 · `propter` → `proptes`.** Plate: *Mores hominum Domino tribuit, **proptes** res
   explanandas.* A non-word. **Unlocks `[sic: *proptes*]`.**
4. **0976D · p. 493 · `Illuminatus` → `Illuminatur`.** Plate: *Asaph. **Illuminatur** agit de adventu
   Christi.* ⭐ **Controlled on the facing column**: at 0977A the parallel gloss prints *Asaph
   **illuminatus** de adventu Christi* correctly, so both forms stand on one opening and the `-tur`
   is not an imaging artefact. Two finite verbs with no slot. **Unlocks `[sic: *Illuminatur*]`.**

## B. CC MOVED MIGNE ONTO THE CLEMENTINE — invisible to any Vulgate collation

5. **0973D · p. 492 · `Virtutem eorum.` → `Virtutum eorum.`** Plate sets the lemma **`Virtutum`**;
   our TEI reads `Virtutem`, which is exactly Ps 77:61 (*tradidit in captivitatem virtutem eorum*).
   ⭐ Migne's genitive plural is the reading the gloss beneath expounds — *virtutes abstulit in malis*.
   **Unlocks a `[var: Vulg. *virtutem*]`.**
   ⚑ **The English as filed renders our TEI's `Virtutem` ("Their strength.").** If this patch lands,
   the English twin must change to "*Of their virtues.*" — flagged here so the patch pass does both.

## C. CC ALTERED OR ADDED WHAT THE PLATE DOES NOT PRINT

6. **0971A · p. 491 · note `(Rom. IX)` → `(Rom. IV)`.** The plate prints **(Rom. iv)** against
   *Reliquiae salvae fient*; Rom 9:27 is the true locus, so **CC corrected Migne's citation.** The
   English carries `[n: (Rom. IX)]` to match the twin as it stands; if patched, both sides change
   together. No marker is owed either way (Pattern 4 / known false positive on citation tails).
7. **0971A · p. 491 · `pepercit` → `perpercit`.** Plate: *Sic et illi genti **perpercit***. A
   normalisation of the 8948 `convivum`→`convivium` class. Corpus: 17 `pepercit`, zero `perpercit`;
   Clementine: zero. **English unaffected** ("he spared"), and **no `[sic:]` is owed** — Pattern 9,
   an attested late/medieval perfect, not broken type.
8. **0971D–0972A · p. 491 · `res alienas auferens` → `res aliena auferens`.** Plate reads **`aliena`**.
   ⚑ Open for the patch pass rather than decided here: restored, `res aliena auferens` is a
   number/case disagreement for which **English has no exponent** ("carrying off the goods of
   another" reads identically), which is the Pattern 12(2) trigger *and* the Pattern 9 exemption
   pulling opposite ways. I report the reading and decline to rule.
9. **0972C · p. 491 · `hominis in sua indignatione` → `hominis sua indignatione`.** Our TEI **inserts
   `in`**; the plate does not print it. English unaffected (ablative either way).
10. **0973B · p. 492 · `ominus` → `eminus`.** ⭐⭐ **THE REVERSED ONE.** Plate: *arcum pravum, qui non
    **eminus** jaculatur, sed in se spicula convertit.* Our TEI's `ominus` is a **non-word CC
    manufactured**, so **NO `[sic:]` is owed** and firing one would have accused Migne of a defect he
    does not have. **The English is written to the plate**: "which does not shoot from afar".
11. **0979A · p. 495 · `Super te fundatam` → `Super et fundatam`.** Plate reads **`et`**. ⚑ Restored,
    the clause does not construe, so a `[sic: *et*]` or a `[cj:]` becomes a live question — but the
    English as filed renders our TEI's `te` ("Founded upon thee"), because rendering `et` would be
    our own conjecture. **If patched, the English needs rewriting.** Flagged, not decided.
12. **0980A · p. 495 · `pene` → `bene`.** ⭐ **CHANGES THE SENSE.** Plate: *Haec est aqua
    contradictionis, quam senserunt antiqui, sed jam **bene** siccata est.* Controlled at 6× against
    the descender-bearing `p` of *populorum* on the next line and the `b` of *turbabantur* on the
    same line — a set `b`, not a damaged `p`, and not the h↔b hazard. **"well dried up" vs "almost
    dried up".** The English as filed renders our TEI's *pene* ("almost dried up"); **if patched, the
    English twin must change with it.**
13. **0980B · p. 495 · missing terminal stop.** Plate: *…ut Judaei contradixerunt titulo crucis.*
    Our TEI ends the paragraph with no point. **The English supplies the stop on the strength of this
    read**, per Pattern 8 (the mark is Migne's; its loss is the digitization's).
14. **0980C · p. 495 · a point CC INVENTED.** Our TEI reads `*In te,* in corde tuo. ubi veritas, non
    falsitas debet esse.` The plate prints **`In te, in corde tuo ubi veritas`** with no point after
    *tuo* — hence the impossible lowercase `ubi` after a full stop. **The English drops it** and
    reads the clause whole.
15. **0975C · p. 493 · `(CASS)` → `(CASS.)`.** Our TEI carries a bare, unmarked-up `(CASS)` outside
    any `[n: …]`; the plate prints `(CASS.)` with its point, set exactly like every other siglum on
    the page. A markup loss as much as a spelling one. The English reproduces `(CASS)` verbatim as
    our twin has it. **Low value; listed for completeness.**

## ✅ Checked at the plate and AGREEING with our TEI — the negatives
- **`hunc panem, id est verbum` @0970A** — raised as a suspected CC insertion at 150 dpi and
  **withdrawn at 400 dpi**: Migne prints *id est verbum*.
- **`immadidos` @0968D**, **`Nunquid poterimus de petra aquam vobis ejicere?` @0970C**,
  **`Cynomia` @0971D**, **`Thanis` @0972B**, **`Grandini` @0972C**, **`Igni. Ignis,` @0972C**,
  **`Manus ejus et de manu tribu;` @0971C** (the truncation is Migne's — `[sic: tribu]` fired),
  **`Et percussit iniquitatem` @0974A**, **`Exsultat Deo` @0979B**, **`ei acquievit` @0968C**
  (the affirmative that contradicts its own lemma is Migne's; rendered as printed, logged as a crux).
- **`deserit` @0973D** (*Sic deserit corpora nostra*) — the standing *deservit*/*deserit* check.
  **Plate reads `deserit` and our TEI agrees**; the accusative *corpora nostra* confirms it, since
  *deservio* governs the dative. Second checked negative for this pair in Band B.
- **`Diapsalma` @0980B set ROMAN** — a sixth plate confirmation of §A1.2.
- **Cols 0977 and 0978 entire: zero departures**, collated word by word.
- **No foot-of-page conjecture apparatus of either layer on any of the eight pages read.**

## ⛔ The clipping question — three more counterexamples
**0981 is clipped** at the inner margin (first 1–3 characters of every line of the left-hand column
cut by the gutter). **0967, 0969, 0971, 0973, 0975, 0977, 0979 are all clean.** Since 0969, 0973 and
0977 are each ≡ 1 (mod 4) and clean while 0981 is ≡ 1 and clipped, this stint adds **three clean
counterexamples from one gathering** to the withdrawn mod-4 rule. No marker of mine rests on a
line-opening word in 0981.

---

# ✅ BAND B PATCH PASS APPLIED 2026-09-04 — 149 patches, and what it left open

**192 patches now stand in `data/tei-patches/8967.json`** (Band A's 43 + Band B's 149). The work was
re-chunked once, after all eight stints had filed, so no patch rewrote Latin under a translation in
progress. **Band A's 39 Latin chunks came back BYTE-IDENTICAL and Band C's 29 did too** — no chunk
boundary moved, so Band A's filed English is untouched and Band C's eight lemma briefs remain valid
and need no regeneration. `verify-english` and `plate-gate` are clean on 0000–0076.

**168 word-level edits landed in the Latin.** 20 English twins were reconciled to them: 3 psalm
heads, 3 `VERS.` numbers, 1 siglum, 5 notes realigned to the twin, and **19 sense-bearing edits** —
including `honourable`→`good works`, the removal of CC's inserted `Sina`, `I have cried`→`he hath
cried`, `Their strength.`→`Of their virtues.`, `almost`→`well dried up`, `He said`→`I said
prophetically`, `He hath heard and was glad.`→`I have heard and she was glad.`, `Lo, here is Christ,
lo there,`→`Lo, here is Christ to be there,`, `thou shalt trample`→`he shall trample`, and
`unto eternal life`→`unto the eternal way`.

## ⬜ OWED TO THE CRUCES MERGE — the markers this pass UNLOCKED

⛔ **This is the whole point of the pass and it is NOT done.** At least **27 `[sic:]`-class markers**
became fireable the moment their Latin was restored, plus `[d: unde]` @0934C, `[cj:]` at 0932D,
0944A, 1006B, 1011B, and `[var:]` at 0929C, 0973D, 1000B, 1007B. **A [sic:] may wrap only type the
twin carries — the twin now carries it.** Until they are fired, the band's marker counts UNDERSTATE
what Migne printed, and the 96-`[var:]`-to-4-`[sic:]` ratio must not be quoted as a fact about this
Psalter.

## ⬜ OWED — English renderings bound up with a marker, deliberately not decided here

- **0991C, the compositor EYE-SKIP.** Latin now reads `unde amici et videantur, et more deserunt`.
  The English still renders CC's reconstruction (`friends and acquaintances forsake through fear`),
  which is no longer a translation of the Latin beside it. Under 11a the intrusive copy is the
  SECOND. The rendering and the marker are one decision and belong to the merge.
- **0979A `Super et fundatam`** — restored, the clause does not construe. The English still renders
  CC's `te` (`Founded upon thee`) because rendering `et` would be our own conjecture.
- **0999C `qui quibus sedebunt`** — whether Migne's `qui quibus` is a compositor's false start
  (11a) is open; the English still reads `in which they shall sit`.
- **0957C `occurrit et obvia mihi`** — `obvia` does not construe with the singular verb, which is
  why CC repaired it. The English still reads `meets and comes against me`.
- **0945A `nomine fide omnium gentium`** — ablative for accusative; the English (`he signifies the
  faith of all nations`) reads for either, so it was left rather than forced.

## ⛔ FIVE REPORTED SITES NOT PATCHED, each because the report itself declined or could not rule

1. **`Nafrubimus` @0962B** — the letter between `Na` and `rubimus` would not settle as `f` or `t`
   even at 1200 dpi. **A patch must not guess a letter any more than a marker may.** One leaf re-read.
2. **`Malivolenti :` @0929A** — Migne's is a real word (dative of *malivolens*), filed as a
   departure needing a ruling, not as a defect.
3. **0926B `ei`/`et`** — the stint's own report contradicts itself about which the plate carries.
4. **`res alienas`/`res aliena` @0971D** — Pattern 12(2) and the Pattern 9 exemption pull opposite
   ways; the stint explicitly declined to rule and so does this pass.
5. **`(Rom. IX)`→`(Rom. IV)` @0971A** — ⭐ the interesting one. **CC CORRECTED Migne's citation**
   (Rom 9:27 is the true locus for *Reliquiae salvae fient*; the plate prints `Rom. iv`). Restoring
   it is right in principle, but it would push a wrong locus into the scripture index, and a
   following `Ibid.` may depend on it — a documented false-positive class. It needs a
   `citation-corrections.json` entry landed WITH the patch, and ⛔ per the standing trap, the column
   must be written WITHOUT its leading zero or the correction matches nothing **and the index still
   reports 0 unparsed.**

## ⬜ Residual punctuation, recorded not applied
The sense-bearing and lemma-internal marks are patched. The prose commas the 0044–0048, 0064–0068
and 0069–0072 stints listed as "recorded, not argued" are **not** all applied, and stay listed above
so a later collation does not re-derive them.

## ⬜ Gallica, now five sites
`f443` · `f449` · `f453` (Band A) · **0932B** `Misericordia`/`Misericordiam`, in col 0932's
over-inked outer margin · **0981C** `filiis`/`filii Excelsi omnes`, in the band's one clipped column.
