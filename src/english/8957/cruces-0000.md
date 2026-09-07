# 8957 *Liber Job* — cruces, stint 0000–0004 (cols 0747D–0762C)

Bands 0748D–0762C, chunks 0000–0004. Every column in the range was read at the plate
(Gallica `bpt6k5505319w`, leaves f374–f381), so every claim below rests on the printed page,
not on the TEI twin alone.

## §0 · SPAN COUNT AGAINST THE BRIEF — 205 against 205, EXACT

Counted paragraph-bounded, both classes, as the brief requires:

| chunk | « … » spans | *…* spans |
|---|---|---|
| 0000 | 10 | 9 |
| 0001 | 43 | 8 |
| 0002 | 24 | 7 |
| 0003 | 39 | 7 |
| 0004 | 45 | 13 |
| **total** | **161** | **44** |

161 + 44 = **205**, exactly the brief's stated total, and its "of which 2 OPEN-ENDED" is also
matched: the raw delimiter counts run 3 opens long in 0001 and 1 open long in 0004, and every
one of those four surplus `«` is accounted for below (§2) as Migne's own setting, plate-verified.
No slid head-of-range span; no mis-split.

## §1 · WORK CONVENTIONS THIS STINT FIXED (for the merge)

- **`*usque ad*` → `*as far as*`** (following 8950, the sibling Glossa volume). Italics kept.
- **`pueri` = "boys", never "servants."** Job 1:15–17's *pueros* is conventionally "servants,"
  but this commentary's gloss turns on immaturity — *pueros, id est incipientes, nondum virilis
  constantiae* (0754C), *custodes pueri occiduntur* (0755A), *Puer sanus redit* (0754D). Rendering
  "servants" would make the gloss explain nothing. Fixed for the work.
- **`## CAPUT PRIMUM.` → `## CHAPTER ONE.`**, `CAPUT II./III.` → `CHAPTER II./III.`, following 9000.
  `(cont.)` carried untranslated.
- **`## PROTHEMATA IN JOB.` → `## PROTHEMATA ON JOB.`**, following 8967's `PROTHEMATA ON THE PSALTER.`
- **`## B. HIERONYMI PROLOGUS DUPLEX…` → `## THE TWOFOLD PROLOGUE OF BLESSED JEROME ON THE BOOK OF JOB.`**,
  following 8967's `THE PROLOGUE OF BLESSED JEROME ON THE BOOK OF PSALMS.`
- **Attribution sigla (`GREG.`, `ID.`, `GREC.`) stand as printed**, in the body as in `[n: …]`.
- **Pattern 17:** every second person in the range is singular (Satan to God, God to Satan, the
  wife to Job, Eve) and takes *thou*, except the two plurals — *Attendite, popule meus* (0749B),
  *Non est vestrum nosse* (0751A), *In viam gentium ne abieritis* (0754B) — which take *you* or an
  English imperative that shows no number.

## §2 · THE UNBALANCED GUILLEMETS — two more sites, both plate-confirmed as Migne's

The brief records three plate-confirmed sites (0767B, 0781A, 0819C) outside my range. My range
adds **two more of the same class, and I read both**:

- **0753A** (f377, left col) — `« unde venis? vias ejus est quasi incognitas reprobare. « Circumivi
  terram. »` and `« In circumitu impii ambulant [n: (Psal. XI)], id est …` running unclosed to the
  end of the paragraph. **The plate prints exactly this**, both of them, with normally delimited
  lemmata above and below on the same column.
- **0762B** (f381, right col) — `VERS. 19.--Parvus et magnus ibi sunt. »` with **no opening `«` on
  the plate**, directly matching the 0767B / 0819C shape.
- **0754B** (f377, right col) — `« Cum autem quadam die filii et « filiae, etc. »`. The interior `«`
  is **Migne's line-start continuation mark**: on the plate the quotation breaks across a line and
  the new line opens with `«`, his standing habit in this volume (the same mark appears at
  0751B `« Qui in uno offendit, multa « bona perdet`, where our TEI drops it).

**No `[sic:]`, no `[cj:]`, no TEI patch fired on any of these.** The class now stands at five
plate-confirmed sites in one book.

## §3 · THE PLATE OVERTURNED A CANDIDATE — `Per eat` at 0748D is ONE word

Our TEI prints `« Per eat dies in qua natus sum *(Ibid, III)*, »`, which reads as a Pattern 10
split run and would ordinarily take `[sic: *Per eat*]`.

**It does not.** Native-resolution crop of f374, right column (x 1000, y 2480, w 880, h 230):
Migne sets `« Per` at the end of one line and `« eat dies in qua natus sum (Ibid, III), » etc.` at
the start of the next. **The word is *Pereat*, broken at a line end with no hyphen** — two lines
above, *suspen-|dium* is hyphenated normally, so the missing hyphen is a compositor's omission of
a rule, not a word division. The corpus confirms it: at **0759C** the same lemma prints
`« Pereat dies in qua natus sum. »` as one word, and Job 3:3 Clementine reads *Pereat*.

Rendered "Let the day perish on which I was born," unmarked. **An agent who had not opened the
leaf would have fired a public `[sic:]` accusing Migne of setting two words where he set one.**

## §4 · A TEI-vs-PLATE DIVERGENCE — 0758A, and the English follows the plate

Our twin prints `…insipientiam conjugis arguendo docens: et sic victus ardentius hostis instigatur`.
**The plate prints a full stop, not a colon**: `docens . et sic victus` (f379, right col, native crop
x 980, y 350, w 880, h 120 — a single low dot with spacing either side, unmistakably not a colon).

Under the locked plate rule the English renders what Migne printed, so it reads
"…teaching by reproof the folly of his wife . And so the enemy, being conquered, is the more hotly
goaded". Filed as a pending TEI patch (`data/briefs/8957-PENDING-TEI-PATCHES-0000.md`).

## §5 · PATTERN 7 SITES — printed readings carried, conjectures kept out of the text

- **0760C — `sed jam idolis reprobatis, nox est laude digna`.** ⚠ **The gloss contradicts its own
  lemma.** The lemma two clauses earlier is `« Nec laude digna. »` ("nor worthy of praise," Job 3:7),
  and the gloss closes by asserting that the night **is** worthy of praise. Plate-verified on f380,
  right column: Migne prints *est*, with no *non*. A dropped negative is the obvious conjecture and
  it is **not** made: the English reads "but now that the idols have been rejected, the night is
  worthy of praise." This is the polarity contradiction the edition exists to expose.
- **0750D–0751A — `Post omnia mala, ob duplicia recepit`.** *ob* + accusative leaves *recepit*
  without an object, so the clause will not construe as it stands. Plate-verified on f375, right
  column. Rendered as closely as the words allow: "he received on account of double things."
  Conjecture: the phrase intended is *duplicia recepit* (Job 42:10), *ob* intruding or standing for
  something lost. Not emended.
- **0751A — `Afflicto Job dicitur`.** *Afflicto* is a real form (dative/ablative), so Pattern 12 has
  nothing to wrap; but "To Job afflicted it is said" asserts an address to Job that the passage does
  not make — the sentence's own second half (*sed quanto tempore fuerit, tacetur*) and its parallel
  (*Ecclesia affligenda scitur, sed quandiu ignoratur*) both require "Job is said to be afflicted."
  **This is Pattern 18's shape exactly, and it takes a `[cj: *Afflicto*; read *Afflictus*, …]`.**
  Plate-verified on f376, left column.
- **0757C — `Sed haec passi sunt illi forma rectitudinis`.** *forma rectitudinis* has no governing
  construction. Plate-verified on f379, left column. Rendered "But those men suffered these things,
  a form of uprightness," reading *illi* as nominative plural with the following third-plural verbs
  (*sustinent, docent, repellunt, protegunt*).
- **0757C — `excidens (aeterna despice)`.** The parenthesis is **Migne's own**, plate-verified on
  f379, left column; it is not our supply and not a TEI artifact. Carried as printed.
- **0756A — `Consolatio ex conditione rerum … tempus quo necdum ista habuit praevidet qualis
  exiturus`.** *praevidet* governs a past time, which will not construe. Plate-verified on f378,
  right column. Rendered literally: "the time in which he did not yet have these things he foresees,
  in what state he is to depart."
- **0756B — `Judaea dum venturum credidit, abstulit`.** *abstulit* has no expressed object; the verb
  *dedit* has to be carried from the lemma. Rendered "took [him] away," the object supplied in
  brackets per the corpus convention. Plate-verified on f378, right column.
- **0754D — `quia vera dixisse prophetiam claruit zelus apprehendit populum ineruditum`.**
  ⚠ **Migne prints NO mark between *claruit* and *zelus*** — verified by native crop of f377, right
  column (x 1000, y 2690, w 880, h 110). Two finite clauses stand juxtaposed. The English supplies a
  comma, because English cannot juxtapose two finite clauses with nothing at all; this is recorded
  here rather than hidden, and it is the only mark this stint supplied anywhere.
- **0753C — `Queritur quod numerus fidelium … augetur`.** Read as *queritur* (from *queror*), "he
  complains" — the subject is Satan and the object is the growth of the Church, which he begrudges
  (*talia invidendo cogitare, et de his tabescendo dolere*). Not *quaeritur*, "it is asked."
  Pattern 9 spelling, no marker.
- **0753A — `[n: (GREC.)]`.** The plate reads **GREC.**, not GREG. — confirmed on a native crop of
  f377 (x 140, y 300, w 850, h 200); the terminal letter is an open C with no spur. Note contents
  ride verbatim and untranslated on both sides, so nothing changes in the English and no marker
  fires. Recorded because it is a genuine defect in Migne's type that our apparatus preserves.
- **0749C — `fluvius planus et altus`.** *planus* rendered "shallow" (of water, level and therefore
  fordable), which the image requires — *in quo agnus ambulet*. Recorded as a lexical choice.

## §6 · CANDIDATES CONSIDERED AND REJECTED

- **`non quod nesciat` at 0753A** looked like `bon quod nesciat` in the 1400-wide page render and
  was a live `[sic:]` candidate. The native crop shows **`non`**: it is a line-initial *non* after
  *dici-|tur,*, and the apparent `b` was a render artifact of the low-resolution scale. Rejected —
  a **checked zero**, and the exact failure the inline-plate rule exists to prevent.
- **`» , id est` at 0756D.** Our twin prints a space between the closing guillemet and the comma.
  Native crop of f378 (x 1000, y 2410, w 880, h 120) shows `(Jer. xi), », id est` — **two commas on
  the plate, as in our twin**, differing only in whitespace, which is a transform artifact and not a
  mark. Rejected; no patch, no marker.
- **`detectus` broken across the 0755D→0756A column break.** The plate breaks the word *dete-|ctus*
  across the column gutter while our twin sets the whole word before the `[0756A]` anchor. Anchor
  placement, not text: known false positive 1. Rejected.
- **`Circumivi` / `In circumitu` (0752C, 0753A) for Clementine *Circuivi* / *In circuitu*.** The same
  variant twice, in two different books (Job 1:7, Ps 11:9) — a consistent orthography of the
  *circumeo*/*circueo* pair, not a compositor's slip. Pattern 9. No marker.
- **`Nunquid` for `Numquid`, `coelo` for `caelo`, `Exspectet` for `expectet`.** Orthographic
  throughout. No markers.
- **`(Psal. XXXVIII)` at 0762A.** The quoted text is Ps **83**:3 verbatim (*Concupiscit, et deficit
  anima mea in atria Domini*); the printed citation is wrong, plausibly *LXXXIII* with the L lost.
  Plate-verified on f381, right column. **No correction proposed** — `refDisplay` keeps what Migne
  prints, the indexer resolves the truth, and known false positive 2 forbids touching a reference an
  `(Ibid.)` chain may hang on. This book leans hard on `(Ibid.)`.

## §7 · VULGATE DIVERGENCES — the full list for the range (7a″ deliverable)

Every marked span was walked against `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse.
Two fired a `[var: …]`; the rest are recorded and did not.

**Fired:**

1. **0749C · Ps 41:9** — Migne *In die mandavit Dominus misericordiam suam, et nocte **declaravit
   eam***; Clementine *…et nocte **canticum ejus***. **Material, and the gloss turns on it**: the
   next sentence reads *nocte adversitatis **manifestari** dicitur*, which expounds *declaravit* and
   has nothing to expound in *canticum ejus*. `[var: Vulg. *et nocte canticum ejus*, "and in the
   night his song"]`.
2. **0752D · Job 1:12** — Migne *Ecce universa **substantia quam** habet in manu tua **est***;
   Clementine *Ecce universa **quae** habet in manu tua **sunt***. Migne imports *substantia* (from
   Job 1:10's *universamque substantiam*) and shifts to the singular. **The control is internal**:
   seven columns later, at **0754A**, Migne prints the Clementine form *Ecce universa quae habet in
   manu tua sunt* — the same verse set two ways in one work. `[var: …]` fired at 0752D only; the
   marker content is worded so that it is not a verbatim run of the twin, since 0754A carries the
   Clementine wording inside the same chunk.

**Recorded, no marker (each stated with its reason):**

| col | Migne | Clementine | why no marker |
|---|---|---|---|
| 0751A | *In terra sua **possidebunt duplicia*** | Is 61:7 *in terra sua **duplicia possidebunt*** | word order only |
| 0751A | *quae Pater **in sua posuit potestate*** | Act 1:7 *quae Pater **posuit in sua potestate*** | word order only |
| 0751B | *Qui in uno **offendit*** | Ecl 9:18 *qui in uno **peccaverit*** | near-synonym; gloss turns on the clean-animal figure, not the verb |
| 0749A | *« Erubesce, Sidon, » … « ait mare: »* | Is 23:4 *ait **enim** mare* | *enim* dropped when the fragment is re-quoted as a separate lemma |
| 0753B | *Nunquid **frustra Job timet** Deum* | Job 1:9 *Numquid **Job frustra timet** Deum* | word order only |
| 0753B | *Possessio **illius** crevit* | Job 1:10 *possessio **ejus** crevit in terra* | pronoun swap, sense identical |
| 0753D | *Ecce **omnia** quae habet* | Job 1:12 *Ecce **universa** quae habet* | third form of the verse already marked at 0752D; one marker per verse |
| 0755C | *Proximi mei a longe steterunt* | Ps 37:12 *qui juxta me erant, **de** longe steterunt* | compression; *proximi mei* stands in the same verse |
| 0757C | *Benedic **Domino** et morere* | Job 2:9 *Benedic **Deo**, et morere* | both name God; the gloss expounds *transcendendo praeceptum* |
| 0759D | *Dies **illa*** | Job 3:4 *Dies **ille*** | *dies* is common gender; **no English exponent** — Pattern 9 |
| 0760A | *Est enim confusio adducens gloriam* | Sir 4:25 *est enim confusio adducens **peccatum**, et est confusio adducens gloriam **et gratiam*** | abridgment, and it is the half the gloss needs |
| 0760B | *Non computetur in **die** anni* | Job 3:6 *non computetur in **diebus** anni* | singular for plural; the gloss turns on *annus*, not on the day |
| 0761A | ***Et** egressus ex utero* | Job 3:11 *egressus ex utero* | *Et* prefixed to a lemma cut mid-verse |
| 0761B | *Requiescerem cum regibus* | Job 3:13 *somno meo **requiescerem*** + 3:14 ***cum regibus** et consulibus terrae* | the commentary's own stitched lemma, not a variant |
| 0758D | *Diebus et noctibus* | Job 2:13 ***septem** diebus et **septem** noctibus* | abridged lemma |
| 0754D | *Captivus ductus est populus meus* | Is 5:13 ***Propterea** captivus ductus est…* | truncated at the head |

**The comparand was checked and is sound at every one of these verses** — no `cornonabit`-class
defect turned up on the Clementine side in this range, so none of the calls above is being made
against a broken witness.
