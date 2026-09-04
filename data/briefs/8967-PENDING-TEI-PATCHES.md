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
