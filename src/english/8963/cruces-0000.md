# 8963 *Liber Numeri* — cruces, chunks 0000–0004 (cols 0379B–0391B)

Stint 0000–0004. Six plates read inline on both witnesses (archive pp. 196–201, Gallica
f191–f195); the reads, including the checked zeroes, are in
`data/briefs/8963-PLATE-READS-0000.json`, and the seven divergences judged to be our own file's
are in `data/briefs/8963-PENDING-TEI-PATCHES-0000.md`.

---

## 0. The head of the book — a display line the plate carries and our source does not

At the head of chunk 0000, between the end of Leviticus at 0379A and the `<pb n="0379B"/>` mark,
**Migne prints a display line under the `LIBER NUMERI.` banner giving the book's Hebrew name:**

    LIBER NUMERI.
    Hebraice VAIEDABBER (וידבר), id est : ET LOCUTUS EST.

**Corpus Corporum drops the whole line**, so our TEI body opens straight at
`<head>PRAEFATIO.</head>`. It is two-witness confirmed and written up in
`data/briefs/8963-PENDING-TEI-PATCHES-HEAD.md`; the reading is settled and the **encoding** is an
open ruling that reaches four sibling books, so the patch is not applied and was not applied here.

**What this stint did about it: nothing, deliberately.** The English of chunk 0000 opens at
`## PREFACE.` exactly as the Latin opens at `## PRAEFATIO.`, and no head was invented for the
banner. A reader of our page therefore meets this book one line short of Migne's own plate, and
that is a known, filed, deliberate state and not an oversight of this stint.

---

## 1. The span count — 192 against 192, and both numbers reported

`data/briefs/8963-lemmata-0000.txt` states **192 spans, of which 0 open-ended**, for chunks
0000–0004.

Counted independently in my own Latin, **paragraph-bounded** (asterisks counted per line, so that
an unmatched delimiter would show as an unbalanced paragraph rather than silently swallow a
neighbour):

    chunk 0000   21 italic spans   0 guillemets   0 unbalanced paragraphs
    chunk 0001   76               0              0
    chunk 0002   14               0              0
    chunk 0003   39               0              0
    chunk 0004   42               0              0
    ------------------------------------------------------------------
    TOTAL       192 italic spans   0 guillemets   0 unbalanced paragraphs

**Whole-file total: 192. Paragraph-bounded total: 192. They agree with each other and with the
brief.** The two numbers being equal is the check that matters — a single unbalanced `*` would
have made them differ. This book confirms the launch brief's statement that it has **zero**
guillemets: not one `«` in 4,682 words.

---

## 2. ⚑ MATCHES ONLY ELSEWHERE — all ten in this range, one shared cause

The lemma file flags **ten** spans in my range (the eleventh grep hit is its own header). They are
`VERS. 5–15` of Numbers 1, and they are all of one form:

    VERS.  5  *De tribu Ruben.*        VERS. 11  *De tribu Benjamin.*
    VERS.  6  *De tribu Simeon.*       VERS. 12  *De tribu Dan.*
    VERS.  7  *De tribu Juda.*         VERS. 13  *De tribu Aser.*
    VERS.  8  *De tribu Issachar.*     VERS. 14  *De tribu Gad.*
    VERS.  9  *De tribu Zabulon.*      VERS. 15  *De tribu Nephthali.*

**Adjudicated, and it is one finding, not ten.** The Clementine at Nm 1:5–15 reads
`de Ruben, Elisur filius Sedeur ; de Simeon, Salamiel filius Surisaddai ; de Juda, Nahasson…` —
i.e. **`de X` with no `tribu`**. Every one of the ten failed the phrase search for the same
reason, and the addresses each one *did* match (`1Par 6:62–80`, `Jos 21:28`, `Dt 4:43`, `Ex 31:2`)
are the Levitical-cities and craftsman lists, where `de tribu X` is the standard formula. **The
"elsewhere" is an artefact of a formula that occurs all over the Vulgate, not of a harmony
answering for the wrong book.**

**No `[var:]` on any of the ten**, and I want the reason on the record because ten identical
declines look like one habit rather than ten judgments. Three reasons, all needed:

1. **These are section rubrics, not quotations.** The Glossa's `VERS. n.-- *De tribu X.*` is the
   running label under which the gloss on that verse sits. Migne prints them in a series; the
   gloss beneath each expounds the *name*, never the word *tribu*.
2. **Nothing turns on it.** `de Ruben` and `de tribu Ruben` assert the same thing, and Pattern 14's
   bar is a divergence "in a way that changes the sense".
3. **It is uniform across all ten.** A compositor's or a recension's convention repeated ten times
   in eleven verses is a house style, and marking each instance would put ten maroquin notes on
   one page to report a supplied noun.

Rendered uniformly as **"Of the tribe of X."** throughout.

---

## 3. 7a″ — the lemma collation, DIVERGENCES NAMED

### 3a. Divergences material enough to take a `[var:]` — six, all fired

| col | Migne prints | the received text | why it is material |
|---|---|---|---|
| 0383D | *Factus est obediens **Patri** usque ad mortem* | Php 2:8 `Humiliavit semetipsum factus obediens usque ad mortem` | Migne's lemma **names an object the Vulgate does not have**. The gloss adduces it for *Elisama … Christum significat*, and "obedient to the Father" is a different assertion from "obedient". |
| 0383D | *quam **retribuet** Deus diligentibus se* | Jas 1:12 `quam **repromisit** Deus diligentibus se` | "will repay" for "hath promised" — a different verb, a different tense, and a different theological claim about the crown. |
| 0385B | *Nemo enim **debet** sibi sumere honorem, **nisi** qui vocatur a Deo* | Hbr 5:4 `**Nec quisquam sumit** sibi honorem, **sed** qui vocatur a Deo` | Migne supplies a modal (`debet`) the Apostle does not, and turns an adversative `sed` into an exceptive `nisi`. The gloss is about *praesumptio*, so the deontic force is the point. |
| 0386C | *Medius vestrum **stat**, quem vos nescitis* | Jo 1:26 `medius **autem** vestrum **stetit**` | ⭐ **The load-bearing one.** Migne's PRESENT tense is what the next sentence expounds: *Et quia **semper stat**, medius stare dicitur.* Giving Douay's "hath stood" here would have destroyed the gloss under the argument — the pure 7a″ mechanism. |
| 0387B | *Sed **sunt** sicut angeli Dei in coelo* | Mt 22:30 `sed **erunt** sicut angeli Dei in caelo` | Present for future, and again the gloss depends on it: the order of doctors *coetibus angelorum **unitur*** — is united, now. |
| 0391B | *Sermo quem locutus sum **vobis**, ille **vos** judicabit* | Jo 12:48 `Sermo quem locutus sum, ille judicabit **eum**` | Migne changes **who is judged**, from "him" to "you", and adds an indirect object. The gloss applies it to the drinker of the bitter water. |

### 3b. Divergences checked and DECLINED, with the reason

- **0379C** *quia omnia in figura contingebant illis* — 1Cor 10:11 has `Haec autem omnia in figura
  contingebant illis`. Migne drops the connective only; the quoted clause is verbatim. No marker.
- **0383B** *Sicut exaltavit Moyses serpentem in deserto, **sic** exaltari oportet filium hominis* —
  Jo 3:14 has `Et sicut Moyses exaltavit serpentem in deserto, **ita**…`. Word order and `sic` for
  `ita`; identical sense. No marker.
- **0384A** *cum **plenitudo gentium intraverit**, omnis Israel salvus **fiet*** — Rom 11:25–26 has
  `donec plenitudo gentium **intraret** … et sic omnis Israel salvus **fieret**`. The recension has
  re-pointed a `donec` + subjunctive as a `cum` + future perfect so that the sentence can stand on
  its own. Tense follows syntax, not sense. No marker.
- **0384C** *Jam non dicam vos servos, sed amieos* — Jo 15:15 has `Jam non dicam vos servos … Vos
  autem dixi amicos`. Migne compresses two clauses into one, as this recension does constantly.
  The compression is not a variant reading. (For `amieos` itself see §5.) No marker.
- **0386C** *Nemo enim mundus a sorde, nec si unius diei fuerit vita ejus* [n: (Job XV)] — **not in
  the Clementine at all**; it is the Old-Latin form of Job 14:4–5. Pattern 14 requires the received
  reading to be *named*, and here there is no single clean comparand to name. Declined, and I note
  that Migne's own locator (Job XV) is off by a chapter.
- **0386C** *qui peccatum non fecit, nec inventus est dolus in ore ejus* [n: (Isa. LIII)] — the
  words are **1Pt 2:22 verbatim**, and Migne's locator points at Isaiah 53:9, which is Peter's own
  source. His locator, his business; the quotation itself agrees exactly. No marker.
- **0386C** *In medio populi mei **ego** habito* — 4Rg 4:13 has `In medio populi mei habito`. An
  added pronoun, no case change, no sense change. No marker.
- **0387B** *Ego vos elegi de mundo* — Jo 15:19 has `sed ego elegi vos de mundo`. Word order. No
  marker.
- **0387C** *Oportet episcopum irreprehensibilem esse* — 1Tim 3:2 has `Oportet **ergo** episcopum`.
  A dropped connective at the head of a clipped citation. No marker.
- **0387D** *Mihi autem absit gloriari nisi in cruce Domini nostri Jesus Christi* — Gal 6:14
  verbatim but for the nominative `Jesus` for `Jesu`, which is a **press variant** (§5), not a
  divergence from the Vulgate.
- **0388B** *Cor ejus indurabitur **quasi** lapis* — Job 41:15 has `**tamquam** lapis`. Synonyms.
  No marker. (Migne's locators here, `Isa. XIV; Job XXI`, are again off; not ours to correct.)
- **0391B** *Nihil enim occultum, quod non reveletur* — Mt 10:26 has `Nihil enim est **opertum**,
  quod non **revelabitur**`. `occultum` is the word Lk 8:17 uses of the same saying, and the
  subjunctive follows the *Nihil enim* frame. Two synonyms and a mood; the assertion is identical.
  Declined **on the sense bar, not because I did not see it** — a later reader who thinks this one
  should have been marked will find the two readings here.

### 3c. Lemmata collated and found to AGREE with the Clementine exactly

Recorded because a list of findings alone cannot be told apart from a report by an agent that
never looked. Each of these was read word by word against `sources/vulgate/clementine-flat.txt`:

    0379C  Miserere mei, Deus                              Ps 50:3
    0380D  Benedicetis filiis Israel et dicetis            Nm 6:23
    0383A  Ad te levavi oculos meos, qui habitas in coelis Ps 122:1
    0383A  Castigo corpus meum et in servitutem redigo     1Cor 9:27
    0383C  Nathanael filius Suar                           Nm 1:8
    0383D  Amen dico vobis, non inveni tantam fidem…       Mt 8:10
    0383D  Quae audivi ab eo haec loquor in mundo          Jo 8:26
    0384A  reddidit mihi Deus                              Jdc 1:7
    0384A  filius doloris / 0384B filius dextrae           Gn 35:18
    0384B  Sanguis ejus super nos et super filios nostros  Mt 27:25
    0384C  Gallus succinctus lumbos et aries, nec est rex qui resistat ei   Pr 30:31
    0385A  Quisquis externorum                             Nm 1:51
    0385B  Unusquisque per turmas                          Nm 1:52
    0385C  Per gyrum tabernaculi                           Nm 1:50, 1:53
    0385C  Universi qui in castris Judae                   Nm 2:9
    0385C  Meridianam plagam erit princeps                 Nm 2:10
    0385D  Levabitur autem tabernaculum testimonii         Nm 2:17
    0385D  Ad occidentalem plagam erunt                    Nm 2:18
    0386A  Ad aquilonis partem castrametati sunt filii Dan Nm 2:25
    0386A  Sacerdotum qui uncti sunt                       Nm 3:3
    0386A  Applica tribum                                  Nm 3:6
    0386B  Ego tuli Levitas                                Nm 3:12
    0386D  Alienati sunt peccatores a vulva, erraverunt…   Ps 57:4
    0387A  Numera filios Levi                              Nm 3:15
    0387B  Levi per nomina sua / Gerson et Caath et Merari Nm 3:17
    0387C  Hi post tabernaculum metabuntur                 Nm 3:23
    0388A  Ad meridianam                                   Nm 3:29
    0388A  Nisi Dominus aedificaverit domum…               Ps 126:1
    0388B  Ad orientalem plagam                            Nm 3:38
    0388C  Quinque siclos                                  Nm 3:47
    0388D  Tolle summam                                    Nm 4:2
    0389A  Et operient                                     Nm 4:6
    0389C  Tunc intrabunt filii Caath / 0389C Nolite perdere  Nm 4:15, 4:18
    0389D  Alii nulla / A triginta                         Nm 4:20, 4:23
    0390A  Ad annum quinquagesimum / Omnem leprosum        Nm 4:35, 5:2
    0390C  Reddent ipsum / Excepto ariete                  Nm 5:7, 5:8
    0390D  Tu es sacerdos in aeternum secundum ordinem Melchisedech  Ps 109:4
    0390D  Nolite ante tempus judicare quoadusque veniat Dominus     1Cor 4:5
    0390D  Non fundet / 0390D Aquam sanctam                Nm 5:15, 5:17
    0391A  Scribetque sacerdos in libello / Dabit ei bibere Nm 5:23, 5:24

### 3d. Lemmata Migne himself frames as ANOTHER reading — collated, and correctly unmarked

Six spans in this range are explicitly introduced as the Septuagint, an *alia littera*, or a
father's own citation. A `[var:]` on any of them would report as a divergence from the Vulgate
something Migne has already told the reader is not the Vulgate:

    0382D  Alias LXX: Omnis qui procedit in virtute Israel        (against Nm 1:3)
    0385A  [AUG.] Alienigena qui accesserit, moriatur             (Nm 1:51: quisquis externorum … occidetur)
    0386B  [AUG.] Alienigena qui tetigerit, morietur              (Nm 3:10: externus qui ad ministrandum accesserit)
    0386B  [ORIG.] Ego assumpsi Levitas de medio filiorum Israel  (Nm 3:12: Ego tuli Levitas a filiis Israel)
    0389A  [AUG.] Et panes qui semper super eam erunt             (Nm 4:7: et panes semper in ea erunt)
    0389B  Alia littera: et super altare aureum adoperient…       (Nm 4:11)
    0389C  [ORIG.] Nolite exterminare plebem Caath                (Nm 4:18: Nolite perdere populum Caath)

⭐ The 0389A one is the case that proves the rule: **the entire gloss under it is Augustine
arguing about the wording** (*Ideo dixit, qui semper super eam erunt, id est, quia semper panes,
non quia illi semper*). Marking it as a divergence would annotate the very thing the paragraph
exists to discuss.

---

## 4. The one `[sic:]`, and why it is printed as two markers

**0381B.** After *deinde praecepit* Migne sets, in italic, an abbreviated run that does not
construe and cannot be rendered:

    deinde praecepit *ne temporis re. p. t.* Caute omnia provisa.

**Two witnesses, identical**: archive p.196 and Gallica f191 both print `ne temporis re. p. t.`
with the same points and the same italic. So the defect is **Migne's**, the two-witness bar for
accusing his type is met, and the marker is fired.

⚑ **It is printed as `[sic: *ne*] [0381B] [sic: *temporis re. p. t.*]` — two markers for one
defect — and that is deliberate.** The column anchor falls *inside* the run in Migne, between `ne`
and `temporis`, and the verifier checks a `[sic:]`'s content as a verbatim substring of the Latin
twin with only asterisks and whitespace normalized; an anchor inside the marker would fail that
check, and moving the anchor outside it would displace the citation-resolving unit. Splitting a
marker mid-construction to match Migne is the 8995 @0605B precedent (`non [0605B] recedentes`).

⚑ **7a⁗ check, run explicitly.** With both markers deleted the clause reads *"then he commanded
… All things were cautiously provided for."* — (1) it keeps its verb, *praecepit*; (2) the only
negation in the run is `ne`, the negative-purpose particle, and **everything it governs is inside
the corrupt run**, so there is no translated text left for it to negate and nothing has been
parked in the bracket; (3) there is no interrogative and no conjunction outside it; and (4) —
the fourth question the brief says 7a⁗ does not ask — *praecepit* has lost its object, and that
loss is Migne's, not the marker's: the object is precisely what his type has destroyed. The
English therefore supplies nothing.

⭐ **The one candidate on this page that was NOT fired**, and the reason is the whole method:
the archive copy prints `Cauta omnia provisa` four words later, against our twin's `Caute`.
On one witness that is a clean, sound Latin word and would have made a confident `[var:]` or
`[sic:]`. **Gallica prints `Caute` and our twin is right.** Same page, same line, one refuted and
one confirmed.

---

## 5. Press variants — five, no marker, no patch, and one of them costs the reader

The two copies of PL 113 are two printings in this range, not two photographs. Five sites differ
in a way ink cannot produce, and **our twin follows the Gallica printing at every one**:

    col      Gallica (= our TEI)        archive copy    note
    0384C    lumbos                     lumbo           Pr 30:31 reads lumbos
    0384C    amieos                     amicos          Jo 15:15
    0384D    dexteram                   dextram
    0386A    Applica tribum  (LEMMA)    Accipe tribum   Nm 3:6 reads Applica tribum
    0387D    Jesus Christi              Jesu Christi    Gal 6:14

⛔ **0384C `amieos` is the one to argue about, so here is the argument.** Our Latin prints a
non-word inside a scripture lemma — *Jam non dicam vos servos, sed **amieos*** — and a `[sic:]`
is the obvious move. **It is refused.** The archive copy prints a clean `c`; the two witnesses
disagree; and 8950's measured bar is that a claim about Migne's type needs two witnesses agreeing.
What is true is only that *one printing* of Migne carries a broken sort here, which is not a
sentence our apparatus has a marker for. The English renders the sense, **friends**, per the
2026-09-05 amendment to Pattern 7 — except that with no marker standing there is nothing to
disclose the defect to a reader, so **this crux is the only disclosure**, which is exactly why it
is written out at this length.

⛔ **0386A is a whole WORD, not a letter, and it is the trap of the set.** The archive's lemma
reads `Accipe tribum` where Gallica, our twin and Nm 3:6 read `Applica tribum`. The archive's
reading is *sound Latin and locally plausible* — Augustine's own citation four words later begins
`Accipe tribum Levi` — so a single-witness read would have found a divergence, argued it well from
the immediate context, and been wrong. Recorded here as the largest press variant yet seen on this
volume.

⛔ **0387D `Jesus Christi`** stands in the English as *"our Lord Jesus Christ"*. The nominative
where the genitive is wanted is Migne's (Gallica's printing, which our twin follows), and **a
Latin case ending has no English exponent** — Pattern 9. There is no emendation to make and none
to undo; the facing Latin column shows the form.

---

## 6. Refuted archive-only candidates — nine, our twin right at every one

Recorded as findings, because a page of refutations is what a second witness is for. Every one of
these read as a defect on the archive copy alone and every one was overturned by a single Gallica
fetch:

    0381B  Cauta      → Caute        (twin right)
    0382B  Licer      → Liber        (twin right)
    0382B  poctores   → doctores     (twin right)
    0382C  ctc.       → etc.         (twin right)
    0385B  Quid       → Qui          (twin right)
    0385A  de illis Israel → de illis filiis Israel   (twin right; a whole word)
    0388A  ub Eleazaro, Sid est → Sub Eleazaro, id est (twin right)
    0388C  adjiciatur → abjiciatur   (twin right)
    0386A  Accipe tribum → Applica tribum  (press variant, not ink — see §5)

⚑ **`ub Eleazaro, Sid est` at 0388A is the one worth remembering.** A displaced capital S is
exactly the shape of 8955 @0629D's `ulit` for `Tulit`, which is a `[sic:]` that STANDS. Same
shape, opposite verdict, and only the second copy separates them.

⚑ **Score for this range: 9 archive-only readings raised, 9 refuted, 0 confirmed.** The archive
copy of PL 113 is the worse witness here by nine to nothing.

---

## 7. Unexpressed subjects and supplied words — every one named

The dominant defect class, so each supplied pronoun or noun is listed with what licensed it.

- **0382D** *usque ad per fidem evangelicam et apostolicam traditur* → "**it** is handed down".
  A resumption tail with no expressed subject. The nearest candidate in the printed words is
  *qui procedit*, but "he is handed down" is not what the tail can mean. **"It" is mine and
  nothing in the printed words fixes it** — flagged rather than chosen silently.
- **0383A** *Simeon generaliter omnes obedientes* → "Simeon generally **[signifies]** all the
  obedient". The verb is elided by the abridgment; *significat* stands in the exactly parallel
  sentence eleven words above (*Princeps tribus Ruben eos generaliter **significat***). Bracketed.
- **0383D** *Ephraim minor … gentilem populum praelatum* → "**[signifies]** the Gentile people".
  Same elision, verb carried from *Christum **significat*** in the same sentence. Bracketed.
- **0384A** *cum Christus … in regno suo gentem obliviosam invenit* — the subject is expressed
  (*Christus*); noted only because the long parenthesis makes it easy to lose.
- **0386D** *nec pecudis caput, scilicet, stultitiae sequaris imaginem* → "nor follow the head of
  a beast, that is, the image of folly". Second person singular throughout this paragraph, as
  *Et **tu** ergo* fixes.
- **0389D** *Alii nulla, etc.* → "***Others with no curiosity,*** etc." ⭐ **The negation here is
  the trap.** `nulla` is feminine ablative and attaches to the elided **`curiositate`** of
  Nm 4:20 (*Alii nulla curiositate videant quae sunt in sanctuario*), **not to `alii`**. Rendering
  it "Let no others…" would have moved the negative onto the quantifier and made the verse forbid
  a class of persons rather than a manner of looking — Test 2a's exact failure. The noun is
  supplied per convention 3 (a fragment is rendered as the phrase it stands for).
- **0390D** *ne forte judicet rem incertam* → "lest perchance **he** judge an uncertain matter".
  The subject is the one *reserving all things to Christ's judgment*, i.e. the minister of the
  preceding clause. Named here because the sentence has three possible antecedents.
- **0390D** *damnanda aut liberanda reservatur* → "**she** is reserved either to be condemned or
  to be set free". The gerundives are **feminine**, and the subject is the suspected wife of the
  Nm 5 ordeal, who is the referent of the whole chapter. The morphology decides it, not the
  context.
- **0382B** *ut ducibus … perveniamus* → "that with **[such]** leaders we may come". A truncated
  Isidore tail; the demonstrative is supplied and bracketed because English cannot leave a bare
  instrumental ablative standing.

---

## 8. `usque ad` — the `etc.` splice test, run per occurrence

`usque ad` stands **61 times** in this range. **56 are the abridgment formula** — every one of
them an italic `*usque ad*` standing immediately after an `etc.,` and naming where the recension
resumes — and all 56 are rendered **"as far as"** (56 in the Latin, 56 in the English). **The
remaining 5 are ordinary Latin and are rendered by sense:**

- **0379D, 0380B** *mansiones a Ramesse **usque ad** Jordanem* — spatial, "as far as the Jordan".
  Unitalicised, and no `etc.` precedes it.
- **0382A** *omnium mansionum ab Aegypto **usque ad** terram promissionis* — spatial, "as far as
  the land of promise".
- **0383D** *Factus est obediens Patri **usque ad** mortem* — ⭐ **inside a scripture lemma**
  (Php 2:8), rendered "**even unto death**". This is precisely addendum D's trap: the words are
  the verse's own, they sit inside an italic span, and no italic test could separate them from the
  formula. The `etc.` test does: no `etc.` precedes it, and what follows is not a resumption point
  but the rest of the verse.
- **0386A** *multitudinem gentium **usque ad** Christum frigore infidelitatis torpentem* —
  temporal, "**until** Christ". Unitalicised, mid-clause.

⚑ Two further look-alikes checked and correctly left alone: **0390D** *quoadusque veniat Dominus*
(1Cor 4:5, a different word) and **0388D** *ad domum summi sacerdotis* (no *usque*).

---

## 9. Vocabulary axes — the calls made, including the ones the axes did not rule on

- **`gentes` family.** `gentilium spurcitia` (0379D), `gentilem populum` (0383D, 0384B),
  `plenitudo gentium` (0384A), `multitudinem gentium` (0386A) → **Gentiles** in every case: all
  five sit in an explicit *Judaei / gentes* opposition (*vel crudelitate Judaica*; *gentilem
  populum Judaico praelatum*; *omnis Israel salvus fiet*; *repulsis Judaeis*). `doctores gentium`
  (0382C), Isidore's mansion tail, also → **Gentiles**, the Pauline title.
- ⚑ **`gentem obliviosam` (0384A) → "a forgetful NATION."** Singular `gens` of the Jewish people,
  which axis 4 rules is **nation**, not Gentile — and here the axis is doing real work, because
  the sentence's other people-word (`populum Judaicum`) is four words away and the two must not
  collapse. `natio` itself does not occur in this range.
- **`multitudo` → multitude** (0386A). ⚑ `turba` **does not occur** in this range, so the
  turba/multitudo pair is not exercised; checked, not assumed. (The `\bturba` grep is the one the
  brief warns manufactures hits off *turbare*; it returned nothing here either way.)
- **`mysterium` → mystery / `sacramentum` → sacrament**, kept 1:1 and they stand in adjacent
  sentences at 0382A (*multiplici **mysteriorum** obscuritate* … *secundum convenientiam
  **sacramentorum***), which is where a single English word would have shown.
- **`diabolus` → devil** (0383B *destruxit diabolum*, 0384B *diabolus inique tentavit*).
  `daemonium` does not occur.
- **The commentator's voice is not archaised**: `ait` and `dicitur` → "says", "it is said"
  (0383D, 0384B, 0391B). `-eth` forms appear **only inside italic scripture** (*who dwellest*,
  *there standeth one*, *thou art a priest*, *there is no king that resisteth him*).
- **Thou / you (Pattern 17).** Singular *tu/tibi* → **thou** at 0381B–0381C (*Vide ergo quanta
  **tibi** transeunda*), 0386D (*Et **tu** ergo si*), 0387A (*invenies*), 0390D (*Tu es sacerdos*).
  Plural *vos/vobis* → **you** at 0380D (*Benedicetis*), 0383D (*Amen dico **vobis***), 0384C
  (*non dicam **vos** servos*), 0386C (*quem **vos** nescitis*), 0387B (*Ego **vos** elegi*),
  0391B (*locutus sum **vobis**, ille **vos** judicabit*). The morphology decides each one.

---

## 10. Migne's own printing, left alone

- **0382A** *Numerorum **libri** multiplici mysteriorum obscuritate involutum Patres ostendunt.*
  Both plates print the **genitive** `libri` where the syntax of `involutum … ostendunt` wants an
  accusative `librum`. Rendered "The Fathers show **the book of Numbers** wrapped in a manifold
  obscurity of mysteries" — **a Latin case ending has no English exponent** (Pattern 9), so there
  is nothing to emend and nothing to mark. Recorded so a later sweep does not churn it.
- **0386A** *Quatuor **fili** Aaron* — `fili` for `filii`, on both plates. The `-ii > -i`
  contraction is standard medieval orthography and standard in nineteenth-century printing of it:
  Pattern 9, attested spelling, no marker, no italics.
- **0389B** *Nec non et altare* — rendered "**And likewise** the altar". ⚑ Flagged explicitly
  because the negation rule is strict and this looks like two dropped negatives: `nec non` is a
  **fixed affirmative idiom** in Vulgate and medieval Latin ("and moreover"), and Nm 4:11 itself
  reads *Nec non et altare aureum involvent hyacinthino vestimento*. Rendering it with two English
  negatives would be the mistranslation, not the fidelity.
- **0390C** *VERS. 9. **Ad sacerdotem.*** — Migne prints this one address with a bare full stop
  where every other in the range prints `.--`. Reproduced exactly as printed; not normalized.
- **0388D** *qui est **oboli 20*** — Migne sets an arabic numeral in a text that elsewhere uses
  Roman. Reproduced as **"which is 20 oboli"**.
- **Chapter heads.** `CAPUT PRIMUM.` → **CHAPTER ONE.** (spelled, as Migne spells it);
  `CAPUT II.`, `CAPUT III.`, `CAPUT IV.`, `CAPUT V.` → **CHAPTER II./III./IV./V.** (numerals, as
  Migne sets them). The numerals mirror the plate, per the measured corpus rule.

---

## 11. Sections read clean

- **Punctuation, band by band.** Question marks: **0 / 0 / 1 / 3 / 0** across chunks 0000–0004,
  matching the Latin exactly. The one in 0002 (*quanto magis reliqui homines propria signa …
  gerunt?*) and the three in 0003 (*de quo ergo medio assumuntur Levitae?*; *Quomodo enim quis
  errare potuit …?*; *Aut quomodo potuit falsa loqui …?*) are all **direct** questions, so
  Pattern 8b's colon recast was not needed anywhere. ⚑ Two indirect questions in this range
  (*Merito quaeritur quare* 0384D, *Quaeritur quomodo in Exodo legitur* 0390C) carry **no** mark
  on the plate and none was supplied.
- **Column anchors**: 13 / 11 / 3 / 11 / 10, verbatim, in order, and each checked against the
  **word** it stands beside in the Latin rather than merely for presence (test 2b). Two are split
  mid-construction to match Migne: `[0381B]` inside the corrupt run at §4, and `[0389C]` inside
  *ut ipsum [0389C] vestimentum hyacinthinum*.
- **Notes**: 24 / 30 / 6 / 19 / 23, verbatim and untranslated. ⚑ Chunk 0001's frontmatter declares
  `noteCount: 29` against **30** `[n:]` in its own body; the frontmatter is copied verbatim as
  required, and the discrepancy is the chunker's, not the English's.
- **No `[ed:]`, no `[d:]`, no `[nt:]`, no `[cj:]`, no `[cn:]`** in this range. Nothing in the
  digitization is *missing* here (the seven defects are all substitutions, and all of them are
  filed as patches); Migne sets nothing twice; every `[n:]` in the range is a bare citation or
  siglum, none is editorial prose; and no printed word is a *sound* Latin form whose faithful
  English misleads.
- **Em-dashes**: zero supplied in all five chunks.
- **Paragraphing** follows the Latin twin line for line in all five chunks.

## 12. Candidates raised and rejected, with reasons

- **0389B** *Posset ista locutio videri, quam velut absurdam …* looked at first like a sentence
  with its predicate missing — and it is not. `videri` takes its complement from the
  **`tanquam debuerit dici`** clause five lines down; the long relative and the quoted *alia
  littera* stand between them. Rendered without supplying a word. ⚑ Raised here because the first
  reading of it produced an English "might seem so" with an invented "so", which was withdrawn.
- **0390C** *reconciliat *(Job XV)** — the italic parenthetical citation sits in the middle of the
  clause and Migne's locator is plainly wrong for the sentence it annotates. It is his, it is a
  citation, and it rides as printed inside its italic span.
- **0382C** *Sexta est mansio* — the archive's `poctores gentium` argued briefly for a defect in
  Isidore's list; refuted at Gallica (§6). The reason it is recorded is that a corpus-frequency
  argument was available and would have pointed the right way here **for the wrong reason**, which
  is the 9002 `nomo` lesson.
- **0384D** *VERS. 39* — a verse-address change is the class most recently *withdrawn* as a
  scanning artefact, so it was nearly declined on principle. It is made because it has an external
  control the withdrawn class never had (Numbers 1 has 54 verses; there is no v. 59; Nm 1:39 is
  Dan's 62,700, and the lemma is *Septingenti*). The reasoning is set out in
  `data/briefs/8963-PENDING-TEI-PATCHES-0000.md`.
