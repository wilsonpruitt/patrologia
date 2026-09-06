# 8963 *Liber Numeri* — cruces

*Glossa ordinaria* on Numbers, Anselm of Laon and his school. PL 113 cols 0379B–0446D, 26 chunks,
translated in six stints, 2026-09-06. **Merged from six stint files. The concatenation is the easy
half; what follows is the reconciliation, which is the required step.**

---

## Work-wide conventions — what was reconciled at the merge, and what was left alone

### ⛔ `mansio` — ONE real drift, and it split the book's own catalogue in two

Numbers' spine is the itinerary: Migne's CAPUT XXXIII enumerates the *mansiones* from Rameses to
the Jordan, and the PRAEFATIO summarizes the same list. **Ten chunks rendered `mansio` "station";
two rendered it "encampment"** — chunk 0000 (the praefatio, 13 sites) and chunk 0013 (3 sites).

That is not a synonym choice, it is a broken cross-reference. The praefatio numbers *the first,
the second, the third, the fourth, the sixth, the seventh encampment*; CAPUT XXXIII numbers *the
thirty-third, the thirty-fifth, the thirty-seventh station*. **A reader cannot see that these are
one series.** Swept to **"station"** at all 16 sites. `castra` is a separate word and keeps
"camp"/"camps" (20 Latin forms, 23 English), so nothing collided.

⚑ **One `mansio` is deliberately NOT "station" and must stay as it is:** @0434A–B (chunk 0021; **NOT 0433D** — the stint report gave that column and it is wrong, which matters because the next reader will grep 0433D and find nothing)
*mansionis ei meritum deputabitur* is the Johannine sense — a dwelling-place, not a stage of a
journey — and is rendered **"the merit of his dwelling."** Different word, different sense; the
sweep was checked against the Latin at every site rather than run blind.

### ✅ Checked for drift and found CONSISTENT — recorded so nobody re-sweeps them

- **The exposition tags.** A standalone tag (`Mystice.` @0407, `Allegorice`, `Moraliter`) is
  rendered capitalized and standalone; the same word with a connective particle (`Mystice autem`
  @0420, `Tropologice vero` @0446C) is a mid-sentence adverb and is rendered lowercase, run into
  the sentence. Every stint made that distinction the same way, unprompted. **This is the
  `ALLEGORICALLY.`/`ALLEGORICAL.` split of 11063 NOT happening**, and the reason it did not is
  that the distinction is in the Latin, not in the translator's taste.
- ⚠ **A raw count of the tags LOOKS like drift and is not**: `Aliter` appears three times in the
  Latin and "Otherwise" twice in the English, because two of the three (`Aliter enim non erit
  votum acceptabile`, `aliter sapientes, aliter insipientes`) are ordinary adverbs in running
  prose and not section tags at all. **Count the construction, never the word.**
- **`usque ad`** — the abridgment formula, rendered *as far as* throughout. 67 occurrences were
  tested one by one with the `etc.` splice test in the 0014–0018 range alone, all 67 the formula.
  The one genuine look-alike is @0428C, where the formula and **Mt 5:26's own** *usque ad
  novissimum quadrantem* stand four words apart — and our TEI does not italicize the second while
  the plate does, so an italic test would have mis-sorted it too.
- **Axis instruments were run before anything was reported**: a raw `natio` grep in the
  0019–0022 range returns one hit and it is `indignationis`; a raw `gentes` grep returns one and
  it is `legentes`. `turba` absent; `sacramentum` a checked zero in 0014–0018. `daemonium` →
  *demon* throughout, including Ps 95:5 where the Douay pulls toward "devils".

### Apparatus totals as merged

**60 markers: 55 `[var:]` · 2 `[sic:]` · 2 `[ed:]` · 1 `[cj:]`.** Plate gate OK — every one stands
on a column read at the plate on **both** printings. 4 supplied em-dashes in the whole work
(0.2/chunk against a corpus median of 5.3).

- The single **`[cj:]`** @0407C is Pattern 18 the right way round, and was checked on disk rather
  than taken from the report: the running English carries **Migne's** word ("the light") and the
  bracket carries the conjecture, `[cj: *lux*; read *lex*, "the law"]`.
- The two **`[ed:]`** @0427B and @0437C are Pattern 13a **clause 3** — lost non-Latin type that is
  *not recoverable*, marking the hole and supplying nothing. The lost Hebrew at @0418B is
  clause 1 by contrast (plate certain, transliteration standing beside it): restored by TEI patch,
  no marker. **Two clauses, two evidential situations — not a convention drift.**
  ⛔ Neither witness resolves the letters at 0427B/0437C and **no higher-resolution capture
  exists**: the archive copy is 600 ppi *bitonal* JBIG2 and Gallica is ~300 ppi. See
  `data/briefs/PL113-WITNESS-ENCODING.md`.

### ⛔ How to read every "the plate reads X" claim in the sections below

**The archive copy is 1-bit JBIG2 — a lossy SYMBOL-SUBSTITUTION codec**, not a photograph of
heavier ink. Its failure mode is replacing a character with a different, visually similar,
*well-formed* one, so its errors **construe**. Across this work **105 archive-only candidates were
raised and 99 refuted at Gallica; of the 6 that stood, not one was Migne's.** Where a section
below calls an archive/Gallica disagreement a "press variant", read it as *the copies disagree and
our TEI follows Gallica* unless the evidence is of a class substitution cannot produce.

### The book's own conventions, for a later reader

Lemmata are **italic**; this book has **zero guillemets** (1,172 spans). Every chapter head spells
`CAPUT` in full. Verse addresses print as `VERS. n.--`, also as ranges and lists. Migne sets
chapter numerals in lowercase small caps (`Rom. x`, `Joan. iv`) and the digitization uppercases
them — **declared on `/method`, not retrofitted, not a defect.**

⭐ The book opens with a display line Corpus Corporum drops in all five Glossa Pentateuch books:
`Hebraice VAIEDABBER (וידבר), id est : ET LOCUTUS EST.` Restored by TEI patch as
`<head type="book-title">` per Wilson's ruling of 2026-09-06.

---

# ══ Stint 0000–0004 · cols 0379B–0391B ══

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

---

# ══ Stint 0005–0009 · cols 0391C–0404A ══

# Cruces — 8963 *Liber Numeri*, chunks 0005–0009 (cols 0391B–0404A)

Anselm of Laon and his school, *Glossa ordinaria* on Numbers, PL 113. Chunks 0005–0009 cover
CAPUT VI–XIV, 4,979 Latin words, 246 marked spans.

## 0. What was checked, and how

- **Span count.** My lemma brief (`data/briefs/8963-lemmata-0005.txt`) states **246 spans** for
  chunks 0005–0009. Counted **paragraph-bounded** in my own Latin: 0005 = 49, 0006 = 36,
  0007 = 54, 0008 = 53, 0009 = 54, **total 246, and 0 guillemets** (this book has none). Every
  paragraph's asterisk count is even, so no unmatched delimiter is masking a mis-pairing in either
  direction. **The totals agree.**
- **`⚑ MATCHES ONLY ELSEWHERE`:** **none** in this range. The work carries 13; none falls in
  chunks 0005–0009.
- **Plates.** All seven pages of the range read at the plate, **on two witnesses**, corner numbers
  read first on every one: archive.org `patrologiaecurs04migngoog` pp. **201, 202, 203, 204, 205,
  206, 207** (= cols 391–404, map confirmed at p.201) and Gallica `bpt6k5505319w` ff. **196–202**
  (map confirmed at f196). **No foot-of-page apparatus on any page — seven checked zeroes.**
  Full ledger: `data/briefs/8963-PLATE-READS-0005.json`.
- **Markers fired:** 15 `[var:]`, and nothing else. **Zero `[sic:]`, zero `[cj:]`, zero `[ed:]`,
  zero `[d:]`** — see §3 for why each candidate was declined.

## 1. ⭐ The finding that governed every other call: our TEI's exemplar is the GALLICA printing

Thirteen sites in cols 0391–0404 divide the two copies. **In twelve of them our TEI sides with
Gallica against the archive copy — including in four places where Gallica carries a non-word and
the archive copy prints the sound Latin.** The thirteenth (0401D) runs the other way, which is
what makes this a fact about two *printings* rather than about one bad photograph.

| col | our TEI = | archive copy | sound reading |
|---|---|---|---|
| 0394B | Gallica `digne operantur` | `digni operantur` | either |
| 0394A | Gallica `seminant` | `seminent` | TEI |
| 0396A | Gallica `nos erudit` | `non erudit` | TEI |
| 0397C | Gallica `si agenda` | `sit agenda` | **archive** |
| 0400A | Gallica `exnortantis` | `exhortantis` | **archive** |
| 0401A | Gallica `praecepit` | `praecipit` | **neither** |
| 0402B | Gallica `sputum` | `spiritum` | TEI |
| 0402C | Gallica `profectus` | `perfectus` | TEI |
| 0403C | Gallica `commmatio` | `comminatio` | **archive** |
| 0403D | Gallica `vermanseris` | `permanseris` | **archive** |
| 0396 head | Gallica `CAPUT VIII` | `CAPUT VIII.` | press variant |
| 0399A | Gallica `VERS. 15.` | `VERS. 13.` | TEI (Nm 9:15) |
| 0401D | **archive** `eum glorificemus` | *Gallica* `cum` | TEI + archive |

**What follows, and it decided four calls below:** a non-word our TEI shares with Gallica is
**Migne's own type in the exemplar Corpus Corporum transcribed.** It is not our corruption (so it
takes no TEI patch) and it is not on both printings (so it may take no `[sic:]`, which would
accuse a plate that in one copy is clean). Each is rendered by sense and logged here, with both
witnesses named. **Addendum A's "a non-word is our corruption" heuristic would have produced four
false findings in this range.**

⚑ The single most dangerous archive-only reading was **0396A `non erudit` for `nos erudit`** —
over-inking that manufactures a *negation* in the sentence "or because through both Testaments
with a harmonious voice he instructs us unto the faith of the truth." Read at 1800 dpi on Gallica
f198: `nos`. Had it stood, the English would have said the two Testaments do *not* instruct us.

## 2. The `[var:]` markers — 15, all against the Clementine, all on read columns

Fired where **Migne's printed words differ inside the quotation**. A quotation merely *clipped*
(stopping short, or opening mid-verse) takes **no** marker — otherwise nearly every lemma in an
abridgment would carry one. That line is stated here so a later reader can see it was a rule and
not a mood.

1. **0391B Mt 10:22** — `Qui autem perseveraverit, salvus erit` · Vulg. *qui autem perseveraverit
   usque in finem, hic salvus erit.* An internal omission, and of exactly the words the gloss has
   just supplied for itself (*Sed innocentiam teneat usque ad finem vitae*).
2. **0391C 2 Tim 2** — `Non enim qui inchoat, sed qui consummat, coronabitur` · Vulg. 2 Tim 2:5
   *Nam et qui certat in agone, non coronatur nisi legitime certaverit.* No word in common but
   *coronat-*; printed as scripture with a chapter citation, so a reader will look for it.
3. **0391C Eph 4:30** — `Nolite contristare Spiritum sanctum, in quo signati estis omnes` · Vulg.
   *Spiritum Sanctum **Dei** … in quo signati estis **in diem redemptionis**.* Both witnesses print
   `omnes`.
4. **0392A Ez 18:24** — `Cum conversus fuerit justus a justitia sua et fecerit iniquitatem, omnes
   justitiae ejus oblivioni tradentur` · Vulg. *Si autem averterit se justus … Omnes justitiae ejus
   quas fecerat, non recordabuntur.*
5. **0392B Jo 1:29** — `peccata mundi` · Vulg. *peccatum mundi*. Plural on **both** printings.
6. **0393A Phil 2:13** — `Ipse enim est qui operatur in **nobis** et velle et perficere` · Vulg.
   *Deus est enim, qui operatur in **vobis** et velle, et perficere pro bona voluntate.* A pronoun
   change, which is the class this project treats as load-bearing.
7. **0393D–0394A Jo 10:18** — `Nemo tollit animam meam a me, sed ego pono eam, et iterum sumo eam`
   · Vulg. *Nemo tollit **eam** a me: sed ego pono eam **a meipso**, et potestatem habeo ponendi
   eam, et potestatem habeo iterum sumendi eam.* Migne supplies *animam meam* out of v. 17 and
   drops both *potestatem habeo* clauses.
8. **0394A 1 Cor 9:11** — `Si enim seminant spiritualia, **non est magnum** si metunt temporalia`
   · Vulg. *Si nos vobis spiritualia seminavimus, **magnum est** si nos **carnalia** vestra
   metamus?* Migne turns an affirmative rhetorical question into a negated statement and changes
   *carnalia* to *temporalia* — and the gloss is arguing precisely that temporal support is no
   great return. Rendered as Migne prints it, negation and all.
9. **0396B Is 11:2** — `super quem **requievit** spiritus sapientiae et intellectus` · Vulg. *Et
   **requiescet** super eum **spiritus Domini**: spiritus sapientiae…* Future to perfect, and
   *spiritus Domini* dropped; the tense is the whole christological point of the gloss.
10. **0396C Nm 8:6** — lemma `Tolle Levitas **de me**` · Vulg. *Tolle Levitas **de medio filiorum
    Israel**.* ⚑ Both printings read `de me.`, with a stop. It is very likely the abridger's
    clipping of *de me[dio]*, but *de me* is complete Latin and I will not conform a lemma to a
    guess: rendered "Take the Levites from me," with the Vulgate in the marker.
11. **0396D–0397A 1 Pet 3:18** — `ut nos offerret Deo **Mortificatos** quidem carne,
    **vivificatos** autem spiritu` · Vulg. *mortificatus … vivificatus*, of Christ. Accusative
    plural for nominative singular moves the dying and quickening from Christ to us. Rendered as
    printed.
12. **0397A 1 Cor 6:11** — `Sed abluti estis, sed sanctificati estis in nomine Domini Jesu` ·
    Vulg. adds a third member, *sed justificati estis*, and reads *Domini nostri Jesu Christi*.
    The omission is load-bearing: the gloss's own sentence argues that the one passion obtained
    **two** things, *expiationem … et sanctificationem*.
13. **0398A Mc 13:37** — `Quod **uni** dico, omnibus dico` · Vulg. *Quod autem **vobis** dico,
    omnibus dico: Vigilate.* The one/all contrast is the point of the abridged sentence.
14. **0399C Mt 10:5–6** — `In viam gentium ne abieritis, sed ite ad oves…` · Vulg. inserts *et in
    civitates Samaritanorum ne intraveritis* and reads *sed **potius** ite*.
15. **0401B Jer 8:4** — `Nunquid qui cadit **non adjiciat ut resurgat**?` · Vulg. *Numquid qui
    cadit non resurget?* An Old-Latin-flavoured form; the double negative is carried into the
    English ("Shall he that falleth not add that he should rise again?").

## 2a. Lemmata and quotations collated and found to AGREE with the Clementine

Recorded because a list of findings alone cannot be told from a list by someone who never looked.
Checked against `sources/vulgate/clementine-flat.txt`, verse by verse: **Nm 6:3, 6:5, 6:6, 6:7
(×2), 6:9 (×2), 6:11, 6:12 (×3), 6:13, 6:14, 6:15 (×2), 6:16, 6:17, 6:19 (×2), 6:24, 7:2, 7:3
(×2), 7:10 (×2), 7:11, 7:13, 7:14, 7:84/86, 7:89, 8:2, 8:7, 8:9, 8:10, 8:12, 8:24, 9:6, 9:8, 9:10,
9:12, 9:14, 9:23, 10:2, 10:4, 10:8, 10:33, 10:34, 10:35, 11:1, 11:5, 11:16, 11:17 (×2), 11:21,
11:24, 11:25, 11:29, 12:1, 12:10 (×2), 12:14, 12:15, 13:3, 13:24 (×2), 13:26, 13:27, 14:12 (×2),
14:34**; and **Ps 35:9, Ps 126:1, Rom 8:26, Jo 1:14, Jo 15:5, Gal 4:19, Mal 1:10, 2 Tim 4:2,
Apc 21:5, 2 Cor 6:2** — all verbatim.

## 2b. Divergences collated and deliberately given NO marker, with the reason

- **0392A 1 Jo 2:1** `Advocatus noster apud Patrem` · Vulg. *advocatum habemus apud Patrem*. A
  recasting into a nominal phrase; nothing is asserted that the Vulgate does not assert.
- **0393C Ps 43:24** `Quare avertis faciem tuam, et oblivisceris inopiae nostrae?` · Vulg. *Quare
  faciem tuam avertis? oblivisceris inopiae nostrae et tribulationis nostrae?* Word order, one
  sentence for two, and a terminal clipping.
- **0393C Ps 118** `Respice in me et miserere mei`. ⚑ Worth a reader's eye: those exact words are
  **Ps 24:16** (and Ps 85:16); at Migne's own address, **Ps 118:132**, the Clementine reads
  *Aspice in me*. Migne's citation rides as printed — citations are `refDisplay`, not ours to
  resolve in the text.
- **0393C Ps 79:4** `Ostende faciem tuam, et salvi erimus`, cited *Psal. LXXVII*. Verbatim from
  Ps 79:4, clipped of its opening *Deus, converte nos*.
- **0394B 1 Tim 5:18 / Dt 25:4** `Non alligabis os bovis triturantis` · Vulg. 1 Tim 5:18 *os
  **bovi trituranti*** (dative). Case only.
- **0395A Act 4:32** `**Quia** multitudinis credentium erat cor unum` · Vulg. *Multitudinis
  **autem** credentium*. A connective adapted to the host sentence, which is quotation grammar,
  not a divergence.
- **0396A Gal 3:19** `Lex ordinata per angelos in manu mediatoris`. Verbatim from the verse's
  second half; *Lex* is lifted from its own opening *Quid igitur lex?*
- **0399C Mt 28:19** `Euntes docete omnes gentes`, cited *(Matth. XVIII)*. The wording drops only
  *ergo*. **The citation number is Migne's own error** (the verse is Mt 28:19) and prints
  `xviii` on **both** copies. Left exactly as printed.
- **0400A 2 Tim 4:2** `Praedica verbum, insta opportune importune`, cited *(I Tim. IV)*. Verbatim;
  the book number is Migne's, on both copies.
- **0401A/B Phil 3:20** `Nostra autem conversatio in coelis est`, cited *(II Cor. X)*. Verbatim;
  the citation is Migne's, on both copies.
- **0400D, 0402A** — three quotations Migne himself labels *Alia littera* (`Et requievit super eos
  spiritus…`, `Et respexit Aaron ad Mariam…`, `Et proclamavit Moyses…`). A reading the plate
  declares to be another reading is not a divergence; it is the apparatus doing its job.
- **0402B Is 40:15** `Omnes gentes sicut gutta situlae, et sicut sputum reputatae sunt`, and Migne
  prints its own witness — *(Isa. XL, **secundum LXX**)*. Same reason. The Clementine has *quasi
  stilla situlae … quasi momentum staterae*.
- **0391C Nm 6:8** lemma `Omnes dies separationis` · Vulg. *Omnibus diebus separationis suae*.
  Case and number of the same words; no assertion moves.
- **0401A Nm 11:26** lemma `Remanserant` (plural) · Vulg. *Remanserat* (singular, with a plural
  subject — the Vulgate's own oddity). No English exponent for the difference either way.
- **0403C Nm 14:9** lemma `quia sicut panem ita possumus` · Vulg. *…ita **eos** possumus
  **devorare***. A terminal clipping; the lemma simply stops.
- **0403A Nm 13:18** lemma `Ascendite **ad** meridianam plagam` · Vulg. *Ascendite **per***.
- **0402A Nm 12:13** lemma runs on into v. 14's opening (*Cui respondit Dominus*). Migne's span,
  not a divergence.

## 3. Candidates raised at the plate and DECLINED, with the reason for each

**Every one of these is a non-word or a broken construction that a corpus-frequency argument would
have convicted.** All were carried to the second witness first.

1. **0397C `si agenda` for `sit agenda`** (`ut sive poenitentia si agenda, sive studia virtutum
   exercenda, efficaciter perficiant`). Gallica f199 and our TEI print `si`; the archive copy
   prints `sit`, which construes. **Divided witness → no `[sic:]`** (it would accuse a plate that
   is clean in one copy) and **no TEI patch** (our file agrees with a printing). Rendered by the
   sense the archive's `sit` gives: "whether penance is to be done, or the pursuits of the virtues
   to be exercised."
2. **0400A `exnortantis` for `exhortantis`** (`inde se verbis exnortantis inclinaret`). Gallica
   f200 + TEI `exnortantis`, archive `exhortantis`. Same treatment; rendered "by the words of one
   exhorting him."
3. **0403C `commmatio` for `comminatio`** (`Fit commmatio haec a Domino`). Gallica f202 + TEI
   carry the three-`m` form; the archive prints `comminatio`, and **`Comminatio` prints correctly
   six lines above on both copies** — which is exactly the internal corroboration that has been
   measured to be worthless about *whose* an error is. Same treatment; rendered "This threat is
   made by the Lord."
4. **0403D `vermanseris` for `permanseris`** (`usque ad si vermanseris in bonitate`). Gallica f202
   + TEI `vermanseris` (a clean italic `v`, no descender); archive `permanseris`. Same treatment;
   rendered "if thou shalt remain in goodness." (Pattern 17: singular addressee, so *thou*.)
5. **0401A `praecepit` / `praecipit` for `praecepti`** — `Non negligentia praecepit Domini, sed
   devotione humilitatis indignos se judicantes perceptione tanti muneris.` **Both printings set a
   finite verb** (Gallica + TEI *praecepit*, archive *praecipit*), and neither construes: the
   participle *judicantes* is left with no main verb and *Domini* with no head noun. The sense
   plainly wants the genitive **`praecepti Domini`** — "not from negligence *of the Lord's
   precept*, but from the devotion of humility" — and the `non … sed devotione` correlative fixes
   the negation on the ablative of cause, not on the verb, so the English carries it there.
   **`[cj:]` declined** on two grounds: 18a scopes out anomalies that merely fail to construe, and
   printing our conjecture in the running text would invert the marker (the pattern-18 failure
   measured on 8967). Rendered literally, with the stranded verb visible: "Not by negligence did
   the Lord command, but by the devotion of humility…"
6. **0401C `non solum Judaei haeretici`** — *Mystice, non solum Judaei haeretici, qui non recipiunt
   legem et prophetas, detrahunt Moysi.* The `non solum` has **no answering `sed etiam`** on either
   copy. Rendered literally ("Mystically, not only Jews, heretics, who do not receive the law and
   the prophets, detract from Moses"), which keeps the negation on *solum* where the correlative
   puts it and leaves the missing member visible. `[cj:]` declined: 11535's admitted class is a
   correlative whose *answering* member is printed and whose own is not, and this is the inverse.
7. **0394B `digne` / `digni` operantur** and **0394A `seminant` / `seminent`** — press variants,
   both construing; our TEI = Gallica. No marker, no patch, per the standing rule that a press
   variant is not a defect.
8. **0396 head `CAPUT VIII` (Gallica, TEI) / `CAPUT VIII.` (archive)** — press variant. The
   English head mirrors the Latin twin and prints **`CHAPTER VIII`** with no period, against
   `CHAPTER IX.` etc. That asymmetry is Migne's, not ours.
9. **0399A `VERS. 15.` (Gallica, TEI) / `VERS. 13.` (archive)** — a verse digit, which is the one
   thing over-inking alters most readily and the one thing with no internal control. Nm 9:15 is
   *Nubes operuit tabernaculum*, so the TEI is right; **left alone regardless**, per the withdrawn
   verse-address rule.
10. **0398B/0404 various commas and periods** differing between the copies — recorded in the plate
    ledger, not adjudicated. Migne's punctuation is his editors' and the two printings differ
    freely.

## 4. Migne's own printing, reproduced and not tidied

- **0402A: a `VERS.` with no number.** Migne prints `VERS.-- Clamavitque Moyses ad Dominum
  dicens…` on **both** copies, between VERS. 10 and VERS. 14. Reproduced as printed.
- **0403A/B: `VERS. 24.` twice in succession**, the second glossing *De malis quoque granatis*
  (Nm 13:24 is a long verse). On both copies. Order and numbering reproduced.
- **0397D–0398A: the chapter's verse addresses run 12, then 6, 8, 10, 11, 12, 13, 14, 15, 23.**
  CAPUT IX opens on VERS. 12 and then goes back to VERS. 6. That is Migne's ordering; not
  reordered.
- **0402D: `usque ad usque ad tricesimam secundam`** — the abridgment formula immediately followed
  by an ordinary temporal *usque ad*. Both are on both copies. Rendered "*as far as* these things
  are contained up to the thirty-second."

## 5. `usque ad` — the `etc.` splice test, applied per occurrence

The formula (`etc., *usque ad* …`) occurs **70** times in these five chunks and is rendered "as
far as" throughout. **Seven occurrences are ordinary Latin** and are rendered by sense; they are
named here because a silent departure from the axis is indistinguishable from drift:

- 0391B `Sed innocentiam teneat **usque ad** finem vitae` → "unto the end of life".
- 0391D `et **usque ad** consensum descenderit` → "and shall have gone down as far as consent"
  (spatial-metaphorical, not the splice).
- 0397B `et **usque ad** finem perseveraverint` → "and have persevered unto the end".
- 0398A `testes esse **usque ad** ultimum terrae` (Act 1:8) → "unto the uttermost part of the
  earth" — inside a resumption tail, but the words are the verse's own.
- 0402D `**usque ad** finem septimanae mundi, id est **usque ad** resurrectionem` → "until the end
  of the week of the world, that is, until the resurrection" (two occurrences).
- 0402D the second half of `usque ad usque ad tricesimam secundam` → "up to the thirty-second".

## 6. Unexpressed subjects supplied, and what decided each

- **0392D `praesentans … perducit`** ("he brings him to the entrance of the heavenly life"). The
  subject is **the priest**, from the lemma's own verse: Nm 6:16 *Quae offeret **sacerdos** coram
  Domino*. Both readings construe grammatically; only the verse decides.
- **0392A `Et deprecabitur` … `faciet nos deprecari`** — the subject through the paragraph is
  **Christ**, named two sentences earlier (*offerat vero sacerdoti, id est, Christo*), and confirmed
  by the two proof-texts (1 Jo 2:1, Rom 8:26).
- **0393A `facit summus sacerdos sanctum suum offerre`** — subject printed; no supply needed.
- **0401A `judicantes … judicavit`** — the subject of *judicantes* is the **two men who remained
  in the camp** (Eldad and Medad, Nm 11:26), from the lemma; the subject of *judicavit* is printed
  (*judex cordium Deus*).
- **0402D `transiit, et venit ad eum quem Verbum carnem factum ante non credidit`** — the subject
  is the **people** of the preceding clause (*erga illum populum*), and *eum quem … non credidit*
  is Christ. Rendered "then he passed over, and came to him who had not before believed the Word
  made flesh," which keeps the printed order and the printed negation.
- **0396C `quomodo rite provehatur ad dignitatem sacerdotii`** — impersonal passive; rendered "how
  one is duly advanced", not "how he is advanced", because no antecedent is printed.

## 7. Vocabulary axes as applied here

- **`gentes`.** *Gentiles* in the typological opposition — 0399C Mt 10:5 (*In viam gentium*),
  0399D (*post de cunctis orbis nationibus gentes ad fidem convocari*, where `nationibus` = nations
  and `gentes` = Gentiles in one sentence), 0402B Rom 11:25 (*plenitudo gentium*), 0398C
  `Gentiles` = "the Gentiles". *Nations* where generic — 0399C Mt 28:19 (*omnes gentes*, the axis's
  own named case), 0402B Is 40:15 (*Omnes gentes sicut gutta situlae*) and the *caeterae gentes*
  four words later, which the quotation governs.
- **`multitudo` → multitude** (0395A *multitudinis credentium*; 0401A *Coturnicum multitudinem*).
  **`turba` → crowd** (0398B *relictis turbis*). Both occur; neither borrows the other's word.
- **`daemonibus` → demons** (0398C). No *diabolus*/*satanas* in this range.
- **`mysterium` → mystery** (0394D *legis mysteria*; 0397A *talibus mysteriis*; 0399A
  *ecclesiasticis mysteriis*) against **`sacramentum` → sacrament** (0397A *Sacramentum passionis*;
  0399A *Christi quoque sacramentum*). 1:1 throughout.
- **`natio` → nation** (0399D *nationibus*; 0401C *locorum et gentium nomina*, rendered "of places
  and of nations").
- **Pattern 17.** Three second-person singulars, all rendered *thou*: 0393C *Benedictionem quam
  **percepisti*** ("which thou hast received"); 0402B *Si enim **consideres**…* ("if thou shouldst
  consider"); 0403D *si **vermanseris** in bonitate* ("if thou shalt remain"). One plural, rendered
  *you*: 0402A Gal 4:19 *donec formetur Christus **in vobis***; and Eph 4:30 *in quo signati estis
  omnes* likewise plural.

## 8. Mechanical checks run on the finished files

- **Column anchors** 1:1, verbatim, in order, and each checked against **the word it stands
  beside** in the Latin (test 2b), not merely for presence. 0005 = 10, 0006 = 10, 0007 = 12,
  0008 = 8, 0009 = 11.
- **`[n: …]` notes** 1:1 and byte-identical to the Latin twin's, in order: 29 / 23 / 32 / 27 / 34.
  None was converted to `[nt:]`: every one is a citation or a siglum, none is editorial prose.
- **Italic spans** 1:1 with the Latin twin after marker-stripping: 49 / 36 / 54 / 53 / 54.
- **Question marks** at parity: 2 / 0 / 0 / 2 / 3.
- **Colons and semicolons compared BAND BY BAND, not by total** (test 3). Twelve mismatches were
  found this way and all twelve repaired. **One deliberate excess remains and is declared here:**
  0400D carries one English colon more than the Latin, because Pattern 8b requires it —
  *Quaeritur utrum hoc Moses diffidendo dixerit an quaerendo?* is recast as "It is asked: did Moses
  say this out of distrust or out of inquiry?" so the printed `?` survives in a sentence English
  can hold.
- **Em-dashes: zero.** Four were written and all four were replaced by the comma, colon or full
  stop the Latin prints at that point.
- **Word ratio** 1.51 / 1.49 / 1.51 / 1.50 / 1.38.
- **Marker-strip read-back** (test 1): every `[var:]` deleted, and each host sentence read aloud.
  No stranded article, preposition or doubled mark; no marker stands in place of a rendering,
  because `[var:]` never wraps Migne's words in the first place.
- **Negation attachment** (tests 2 and 2a): each printed `non`/`nec`/`neque`/`nisi`/`nunquam`/
  `nullus`/`nihil` was traced to the single Latin word it attaches to and checked on that word in
  the English. Two sites are the reason the test exists here — 0401A (`non negligentia … sed
  devotione`, §3.5) and 0401C (`non solum` with no answering member, §3.6) — and both have a
  quantifier or correlative beside a grammatically plausible verb, which is the named trigger
  condition.

---

# ══ Stint 0010–0013 · cols 0404B–0414D ══

# 8963 *Liber Numeri* — cruces, stint 0010–0013 (cols 0404B–0414D)

Chunks 0010, 0011, 0012, 0013. Heads: CAPUT XV · XVI · XVII · XVIII · XIX · XIX (cont.) · XX.

**Span count.** My lemma file (`data/briefs/8963-lemmata-0010.txt`) states **190 spans**. Counted
in my own Latin: **190**, flat, and **190** again counted paragraph-bounded, with **zero** paragraphs
carrying an odd number of `*`. This book has no guillemets and my four chunks contain none. The
totals agree.

**Plates.** Every column in this range was read at the plate, on **both** witnesses, corner numbers
first. Six archive pages (207–212), six Gallica leaves (f202–f207). Reads, including the checked
zeroes, in `data/briefs/8963-PLATE-READS-0010.json`; TEI divergences in
`data/briefs/8963-PENDING-TEI-PATCHES-0010.md`. **No foot-of-page apparatus of either layer was
found on any of the six pages** — six checked zeroes, which extends the work's sample from three
pages to nine.

---

## 1. The three `⚑ MATCHES ONLY ELSEWHERE` spans in my range — all adjudicated

**@0407A `VERS. 8.-- *Locutus est Dominus,*`** — Clementine Nm 18:8 opens *Locutusque est Dominus ad
Aaron*. Migne prints the lemma without the enclitic `-que`, which is why it matches only the
`Locutus est Dominus` of 1 Rg 3:17 etc. **Read on both witnesses; it is Migne's, and it is the
ordinary clipping of a citation's opening word.** No marker; the same author writes
*Locutusque est Dominus* at 0409D for Nm 19:1, so his practice is not uniform. Rendered "The Lord
spoke".

**@0413A `VERS. 8.-- *Usque ad vesperam.*`** — the Clementine reads *usque ad **vesperum*** at Nm
19:7, 8, 10, 19, 21 and 22, without exception in this chapter. Migne prints *vesperam*, the
feminine form, and his own gloss beneath it expounds *Ad vesperam sacerdos intrat*. **Confirmed on
both witnesses.** No `[var:]`: the two forms are the same noun in two declensions and no sense turns
on it (Pattern 14 requires a divergence "in a way that changes the sense"). Rendered "Until the
evening", and the gloss's own *usque ad vesperam* rendered "until the evening" to match.

**@0413D `VERS. 11.-- *Qui tetigerit ea.*`** — Clementine Nm 19:11 reads *Qui tetigerit **cadaver
hominis***; Migne's words match Ex 30:29 exactly and nothing in Numbers. **Confirmed on the plate**,
and the *Alia littera* Migne prints in the very next breath is a third reading again
(*Qui tetigerit morticinum*, cf. Nm 19:13). This one **did** take a `[var:]`: the object is
different, so what the reader is told the man touched is different. Rendered "He that toucheth
these things", with the Clementine's *cadaver hominis* in the marker.

## 2. Markers fired, with the column

Two `[var:]` in chunk 0010, one `[var:]` in 0011, one `[cj:]` in 0011, four `[var:]` in 0012, one
`[var:]` in 0013. **No `[sic:]`, no `[d:]`, no `[ed:]` anywhere in the range.**

| col | marker | why |
|---|---|---|
| 0405D | `[var: Vulg. Ps 140:2 *Dirigatur*…]` | Migne's *Intret oratio mea, sicut incensum in conspectu tuo* cited to (Psal. LXXXVII) is a **conflation**: Ps 87:3 supplies *Intret … oratio mea* (in another word order) and Ps 140:2 supplies *sicut incensum in conspectu tuo*, where the verb is *Dirigatur*. Rendered as printed. |
| 0406A | `[var: Vulg. 2 Cor 4:7 *Habemus autem thesaurum istum*…]` | Migne prints the participle *Habentes* for the Vulgate's finite *Habemus autem*. |
| 0409C | `[var: Vulg. Rom 8:7 *sapientia carnis*…]` | ⭐ The proof-text *Sapientia enim **hujus mundi** inimica est Deo* is cited to (Rom. VIII), and Rom 8:7 reads *sapientia **carnis***. Material: the paragraph is arguing about *sapientia … non saecularem sed apostolicam*, so "the wisdom of **this world**" is doing the work the printed citation gives it and the Vulgate's "of the **flesh**" would not. |
| 0409D | `[var: Vulg. 2 Cor 13:4 *etsi crucifixus est*…]` | Migne prints *Mortuus est enim Christus ex infirmitate*; the Vulgate reads *Nam etsi crucifixus est ex infirmitate*, with no *Christus*. Rendered "died", not "was crucified". |
| 0410B | `[var: Vulg. Nm 19:3 *eductam*…]` | Migne's lemma *Qui **ejectam** extra castra* ("cast out") against the Clementine's *eductam* ("led out"), and the gloss beneath it turns on the ejection (*Sic ejectus est Dominus*). |
| 0410D | `[var: Vulg. 1 Pt 2:21 *vobis relinquens … sequamini*…]` | Migne prints *Passus est enim **nobis** relinquens exemplum, ut **sequamur** vestigia ejus* — first person plural for the Vulgate's second, and *nobis* for *pro nobis, vobis*. The gloss above it is first-person throughout (*nostra opera consecrari … imitemur*), so the change is load-bearing. |
| 0411C | `[var: Vulg. Phil 3:8 *arbitror*…]` | *Omnia **arbitratur** ut stercora* for the Vulgate's first-person *arbitror*. Confirmed on both witnesses. |
| 0412A | `[var: Vulg. Ps 50:9 *Asperges me hyssopo*…]` | Migne prints a vocative the Vulgate does not have: *Asperges me, **Domine**, hyssopo et mundabor*. Confirmed on both witnesses. |
| 0413D | `[var: Vulg. Nm 19:11 *Qui tetigerit cadaver hominis*…]` | §1 above. |

**The one `[cj:]`, and which word is where — @0407C.** Migne prints
*Non enim mandatum, sed **lux** umbram habere futurorum dicitur bonorum*. **The running text of my
English prints MIGNE'S word — "the light" — and the conjecture *lex* is inside the bracket**, per
Pattern 18 as amended: `the light [cj: *lux*; read *lex*, "the law"]`. *lux* is a real, well-formed
Latin word, so there is nothing for a `[sic:]` to wrap; and the faithful English misleads, which is
exactly the gap Pattern 18 was ruled for. The evidence that *lex* is meant is threefold and all of
it is on the same plate: the sentence's own antithesis is *mandatum* against *lex* (Origen's whole
distinction), Heb 10:1 which is being quoted reads *umbram habens futurorum bonorum* **of the law**,
and the very next paragraph opens *Notandum vero quod **lex** dupliciter dicitur*. **Both witnesses
print *lux*.** The rival conjecture I weighed and rejected was that *lux* is sound and means the
Gospel's light standing in for *mandatum*'s opposite — rejected because *umbram habere futurorum
bonorum* is predicated of the shadow-bearing thing, and light does not bear the shadow of what is
to come; the law does.

⚑ **The trap next door.** Twenty lines earlier, at 0407B, the archive copy also appears to print
*sacerdotibus **lux** mandat offerri* — and **Gallica prints *lex*, as our twin does.** The same
substitution, false in one column and real in the next. Nothing but the second witness separates
them, and I raised both.

## 3. 7a″ — the lemma collation. What I checked, including what agreed.

I walked all 190 spans. The 60 `*usque ad*` formula spans are not verse lemmata and are treated in
§4. Of the remainder:

**Divergent from the Clementine, marked** — the nine `[var:]` of §2.

**Divergent from the Clementine, NOT marked, and why.** Every one of these is rendered as Migne
prints it, and every one is logged here rather than smoothed:

- @0404C `*Vitulum offeret.*` — Nm 15:24 reads *offeret vitulum de armento*. Migne inverts. English
  word order is fixed by grammar so the inversion has no English exponent (Pattern 9's logic);
  Migne's own gloss beneath restores the Vulgate order (*vitulum de armento offerunt*).
- @0404D `*usque ad* justi **fulgeant** sicut sol* — Mt 13:43 reads *fulgebunt*. This sits inside an
  abridgment tail (Augustine's sentence, not a lemma), and the subjunctive may be Augustine's
  syntax; rendered "may shine". No marker: a `[var:]` on a spliced tail would accuse the wrong text.
- @0407C `*Non veni solvere **legem**, sed adimplere*` — Mt 5:17 reads *non veni solvere, sed
  adimplere*, with *legem* in the preceding clause. Migne conflates. Not material; the gloss's whole
  point is *legem*.
- @0407D `*Plenitudo legis est dilectio*` — Rom 13:10 reads *Plenitudo **ergo** legis*. A dropped
  connective in a citation.
- @0407D `*Haec autem sunt allegorica*` cited to (Gal. IV) — Gal 4:24 reads *Quae sunt per
  allegoriam dicta*. Migne quotes loosely; rendered as printed ("But these things are an allegory").
- @0409A `*Gratis accepistis, gratis date. Nolite possidere aurum **neque** argentum, **neque**
  pecuniam*` — Mt 10:8-9 reads *neque argentum, neque pecuniam* after *Nolite possidere aurum*, so
  this agrees; the join of 10:8 to 10:9 across a full stop is Migne's abridgment, not a variant.
- @0409C `*Sapientiam loquimur inter perfectos, sapientiam non hujus saeculi*` — 1 Cor 2:6 reads
  *Sapientiam **autem** loquimur … sapientiam **vero** non hujus saeculi*. Two dropped connectives.
- @0412D `*Vos autem **estis** genus electum, regale sacerdotium*` — 1 Pt 2:9 has no *estis*. A
  supplied copula; no sense turns on it.
- @0414A `*In tribus et quatuor iniquitatibus non adversabor*`, ascribed only to "the prophet" —
  this is Amos 1:3 etc. in an Old-Latin form; the Clementine reads *Super tribus sceleribus … et
  super quatuor non convertam eum*. **No `[var:]` fired because Migne names no address**, and a
  `[var:]` must cite one. Rendered as printed.

**Checked and found to AGREE with the Clementine exactly** (this list is the half of 7a″ that is
easy to omit): Nm 15:8 *Quando vero de bobus feceris holocaustum* @0404B · Nm 15:18 *Cum veneritis
in terram* @0404B · Nm 15:22 *Quod si per* @0404C · Nm 15:30 *Anima vero* @0404C · Nm 16:12
*Vocaret Dathan* @0404D · Nm 16:26 *Recedite a tabernaculis* @0404D · Nm 16:37 *Praecipe Eleazaro*
and *Tollat thuribula* @0405A · Nm 16:40 *Sicut passus est* @0405B · Nm 16:43 *Moyses et Aaron* and
*Operuit nubes* @0405C · Nm 16:48 *Et stans inter* and *Et plaga cessavit* @0405C-D · Nm 17:2
*A cunctis principibus* @0406A · Nm 17:5 *Germinabit virga* @0406B · Nm 17:8 *Invenit germinasse
virgam* and *Turgentibus* @0406B-C · Nm 18:2/7 *Tu et Filii*, *Tu autem et filii (tui)* @0406C-D ·
Nm 18:7 *Si quis externus* @0406D · Nm 18:9 *Omnis oblatio* @0407D · Nm 18:11 *Jure perpetuo*
@0408B · Nm 18:12 *Omnem medullam* @0408C · Nm 18:15 *Quidquid primum* @0409A · Nm 18:19 *Pactum
salis* @0409B · Lv 2:13 *Quidquid obtuleris sacrificii sale condies* @0409B · Nm 19:2 *Nulla sit
macula* and *Nec portaverit* @0410A · Lv 4:12 *In locum mundum* @0410C · Nm 19:4 *Et tingens digitum
in sanguine ejus*, *Asperget contra fores tabernaculi*, *Septem vicibus* @0410C-0411B · Nm 19:5
*Comburetque eam cunctis videntibus*, *Tam pelle et carnibus ejus* @0411B-D · Nm 19:6 *Lignum quoque
cedrinum, et hyssopum, coccumque bis tinctum* @0412A · Nm 19:7 *Et tunc demum lotis vestibus (et
corpore suo)* @0412D · Nm 19:9 *Colliget autem*, *Effundet eos*, *ut sint multitudini filiorum
Israel in custodiam*, *Multitudini filiorum* @0413A-C · Nm 19:10 *Habebunt hoc* @0413D · Nm 19:12
*Si die tertio* @0414A · Nm 19:13 *Polluet tabernaculum* @0414A · Nm 19:15 *Vas quod* @0414A ·
Nm 19:16 *Si quis in agro* @0414B · Nm 19:19 *Lavabit et se* @0414B · Nm 20:1 *Veneruntque filii*
@0414B · Nm 20:11 *Percutiens virga* @0414C · Nm 20:12 *Quia non credidistis* @0414C · Nm 20:22
*In montem Hor, qui est in finibus* @0414C · Nm 20:30 *Omnis autem multitudo* @0414D · Ct 5:10
*Dilectus meus candidus et rubicundus* @0409D · Ps 115:16-17 *Dirupisti vincula mea, tibi
sacrificabo hostiam laudis* @0410B · Mt 5:13 *Vos estis sal terrae* @0409C · Mt 5:22 *Qui irascitur
fratri suo, reus erit judicio* @0408A · Dt 6:5 *Diliges Dominum Deum tuum ex toto corde tuo…*
@0409B · 2 Cor 4:18 *Quae enim videntur temporalia sunt* @0408B · Lc 2:34 *In signum cui
contradicetur* @0414C · 1 Th 5:19 *Spiritum nolite exstinguere* @0414A.

**Fragmentary lemmata expanded under convention 3, with the verse that decided each.** Named here
because expansion is a judgment and a blind reader will look: `*Quod si per.*` → "But if through
ignorance" (Nm 15:22 *per ignorantiam praeterieritis*) · `*Turgentibus,*` → "The buds swelling"
(Nm 17:8 *turgentibus gemmis*) · `*Quidquid primum.*` → "Whatsoever first cometh forth" (Nm 18:15
*erumpit e vulva*) · `*Eo quod.*` → "Forasmuch as" (Nm 16:38) · `*Qui ejectam extra castra.*` →
"Who, when she is cast out without the camp" (Nm 19:3). **Complete one-word lemmata were NOT
expanded** and are rendered as they stand — *Sacerdos.* · *Fimbrias.* · *Tulit.* · *Recedite.* ·
*Descenderuntque.* · *Immolabit.* · *Asperget.* · *Primitiarum.* · *Purissimo.* · *Omne.* ·
*Hyssopum* — because they elide nothing (the addendum on naming the control's class).

## 4. `usque ad` — the `etc.` splice test, applied per occurrence

`usque ad` / `usque in` occurs **70 times** in my four chunks. **66 are the abridgment formula and
are rendered "as far as"; four are ordinary Latin and are rendered by sense.** Each of the four is
named here with the Latin that forced it, because a silent departure from the axis is drift:

- @0406B `sed nostra adhuc corpora **usque in finem mundi** differunt a gloria resurrectionis` —
  the resumption *tail* of a spliced sentence, standing four words after a real formula in the same
  line → "until the end of the world".
- @0411A `plebs Judaea … humilitatem Domini **usque ad passionem** persecuta est` — no `etc.`
  precedes it, and *passionem* is the term of the persecution, not a resumption point → "even unto
  the passion".
- @0413A `qui **usque ad vesperam**, id est, finem mundi, extra mandata vitae … positus est` — the
  gloss expounding its own lemma *Usque ad vesperam*, temporally → "until the evening".
- @0414B `*usque ad* immunda erit **usque ad vesperam**` — the two uses stand five words apart in
  one sentence: the first follows `etc.` and is the formula, the second is Nm 19:19's own words →
  "as far as she shall be unclean until the evening".

⚑ **One formula does NOT follow an `etc.`** and would be missed by a mechanical splice test:
@0412B `Mittatur in flammam, *usque ad* ut in ipsa discat opera recta quae faciat`. Migne sets it
italic and it names a resumption point, so it is the formula; it is counted among the 66. This is
why the test was applied per occurrence and not by a grep in either direction.

## 5. Migne's own printing, reproduced and not tidied

- **Verse addresses out of sequence @0405B–C: VERS. 43, then VERS. 41, then VERS. 48.** Confirmed on
  both witnesses. Reproduced in that order. (VERS. 41's lemma *Recedite* is in fact Nm 16:45's word;
  no address was altered — nothing machine-readable consumes a `VERS.` number.)
- **`VERS. II.--` @0408B**, a Roman numeral for verse 11 among Arabic ones, and **`VERS 7.--`
  @0412D**, missing the period after `VERS`, and **`VERS. 12--`** and **`VERS. 37--`** without a
  terminal period. All confirmed on the plate (the first three) or in our twin against a Gallica
  read (the last two). Carried verbatim.
- **`CAPUT XX.` opens at `VERS. 20.--` over the matter of Nm 20:1.** His numbering; reproduced.
- **Two sentences that simply stop, with no terminal mark**: @0407C *…futurorum dicitur bonorum*,
  @0411A *…humilitatis ejus imitata*, @0412B *…opera recta quae faciat*, and @0413C
  *…in mentis munitionem vertuntur*. Our twin carries no mark at any of the four. Two of them
  (@0411A, @0413C) were the ones where the archive copy appeared to show a terminal period, and
  **Gallica refutes both**; the other two were not separately re-checked at Gallica because our twin
  and the archive agree. Pattern 8 forbids supplying a mark, and the English carries none.
- **Sigla with Migne's own internal spacing** — `[n: (RAB., in Num. )]`, `[n: (AUG., ubi supra. )]`,
  `[n: (ISID., in Num. )]` — reproduced verbatim.
- **Citations that name the wrong place** are reproduced as printed and not corrected:
  `(Hebr. V)` on Heb 9:12 @0404C · `(I Cor. V)` on 2 Cor 4:18 @0408B · `(Rom. II)` on 1 Cor 5:8's
  *azyma sinceritatis et veritatis* @0408C · `(II Cor. IV)` on Rom 2:28-29 @0408C · `(Psal. LXXXVII)`
  on the Ps 87/140 conflation @0405D. Each is Migne's, on the plate.

## 6. Passages read clean, and candidates rejected

**Read clean and not marked.** The whole of CAPUT XVII (0406A–0406C), the angel-firstfruits sequence
of Origen at 0408C–0409A, Gregory's *Septem vicibus* exposition at 0411B, the cedar/hyssop/scarlet
triad at 0412A–0412C, and the whole of CAPUT XX at 0414B–0414D collate word for word against both
witnesses with nothing to report beyond §5.

**Candidates rejected, with reasons.** Sixteen letter-level candidates were raised off the archive
copy; **fourteen were refuted by Gallica and two stood** (the two TEI patches). The full list is in
`data/briefs/8963-PENDING-TEI-PATCHES-0010.md` Part C. Two are worth naming here because the
argument for them was good:

- **@0409B `cognito` for `cognitio`** — the archive's letterform is clean, and *creaturae et
  creatoris cognito comprehenditur* can be read as an ablative absolute. Gallica prints *cognitio*.
- **@0411C `supensione` for `suspensione`** — a **non-word**, which the addendum says is the class
  worth raising; and Augustine's etymology of *cremare* really does depend on hanging. Gallica
  prints *suspensione*. ⚑ This is the corrected addendum A working as written: the non-word was a
  reason to fetch the second witness, not a substitute for it.

**Declined calls, said plainly.**

- @0413C–D `per hoc nobis **immunditiam** providemus` reads oddly — the sense wants cleanness, not
  uncleanness. **Both our twin and the archive plate carry *immunditiam*, and it construes**:
  *providere* + accusative can mean to provide against a thing. Rendered "we provide against
  uncleanness for ourselves". A real, well-formed word reading oddly is Migne's until a plate says
  otherwise, and here the plate says it is his. No marker.
- @0406A `reconditus **sit** thesaurus` is a subjunctive in a clause parallel to the indicative
  *largitur*. Rendered as an indicative statement ("there lies hidden") because English has no
  natural exponent for the shift and no sense turns on it. Logged rather than smoothed silently.
- @0405D `occurrit **quassationi**` — Isidore's word for the plague. Rendered "ran to meet the
  shattering", literally; "the plague" would have been the smoother and less honest choice.

## 7. Vocabulary axes, as applied — with the instrument checked

Counts below are from a **case-insensitive** pass over my own Latin, with the compound noise
stripped by hand; the raw greps the brief warns about all fired here and all were false.

- **`turba` → crowd.** One occurrence, @0406D (*Caetera autem turba meditetur*). A raw `\bturba`
  grep also returns nothing else in range, but the neighbouring *perturb-* family does not occur, so
  the count is clean.
- **`multitudo` → multitude.** Three occurrences: *multitudini* @0413B and *Multitudini* @0413C
  (both inside lemmata of Nm 19:9), *multitudo* @0414D. ⚑ A case-sensitive grep returns two and
  misses the capitalised one at the head of a lemma.
- **`natio` → nation. ZERO real occurrences.** A raw `natio` grep returns **three** hits in this
  range and **every one is a false positive** — *incarnationis*, *praedicationem*, *contemplationis*
  class endings. Reported as a checked zero rather than as three renderings.
- **The `gentes` family.** *gentibus* ×2, *gentium* ×2, *Gentilis* ×2, *Gentilium* ×1,
  *gentilium* ×1, *gentilitate* ×1, *Gentilitas* ×2 — all of them in the tight block at
  0413B–0413C where Rabanus and Gregory are working the *Judaeus* / *Gentilis* opposition
  explicitly (*infirmitatem Domini **Judaeus** mactavit, subtilia ejus mysteria **Gentilis**
  intelligit*). So: `gentes`/`gentibus`/`gentium` → **Gentiles** (never "nations" — the typology is
  express here, not generic), `gentilis` → **Gentile**, `gentilitas` / `gentilitate` → **the Gentile
  world**. ⚑ The raw `gent` grep also returns *diligenter*, *intelligentiae* and *argentum*; those
  were discarded.
- **`mysterium` → mystery, `sacramentum` → sacrament, 1:1.** Six *mysteri-* and four *sacrament-*.
  Tested where the two families stand a column apart on the same argument: *sanguinis Dominici
  **sacramentum*** @0412C against *subtilia ejus **mysteria*** @0413B, and *secreta Dominicae
  incarnationis* / *subtiliora **sacramenta*** @0413C–D.
- **`daemonium`, `diabolus`, `satanas`, `ethnicus` — zero occurrences.** Checked, not assumed.

**Register.** The commentator's own voice is not archaised: *dicit* / *ait* / *inquit* → "says".
Archaic second-person forms appear only where the Latin is second-person **singular**, per
Pattern 17 — inside quoted scripture (*Diliges Dominum Deum tuum* @0409B, *Quidquid obtuleris*
@0409B, *Non occides* @0407C) and in Origen's singular addresses to his reader (*sumpseris* @0407A,
*invenies* @0407C, *adjunxeris* @0409B). Where the Latin is plural the English is "you"
(*Cum veneritis in terram* @0404B, *Quid vultis … ad vos* @0406A, *Gratis accepistis, gratis date*
@0409A, *Vos estis sal terrae* @0409C, *Tradetisque* @0410B).

## 8. Supplied subjects — every "he/she/it/they" the Latin does not print

Named here per the brief's dominant-defect rule. In a gloss the antecedent is usually in the lemma
above or in the Vulgate verse the lemma comes from, not in the sentence.

- **@0405C `*Operuit nubes.*`** → "The cloud covered." The subject is *nubes*, and it is nominative
  in Migne's own lemma; the gloss beneath confirms it (*obtexerit **nubes** tabernaculum*).
- **@0408C `videtur … oblatus`** @0408C → "he seems to be offered". The antecedent is the man whose
  firstfruits are being offered in Origen's tail, not the angel; *per angelum* is the instrument.
  Both readings construe; I took the one the ablative *per angelum* forces and say so here.
- **@0411A `In electis vero operationem humilitatis ejus imitata`** → "But in the elect **it**
  imitated the working of his humility." The subject is **`plebs Judaea`** from the previous clause,
  which the participle *imitata* agrees with in gender and number; *ejus* is Christ. The clause has
  no expressed verb (*imitata est*) and no terminal mark, and both are reproduced.
- **@0411A `*Asperget,* id est, resistenti plebi … exempla monstrabit`** → "he shall show". The
  subject is **`quisquis passionis ejus vias imitatur`**, from the preceding paragraph's own gloss on
  the same lemma; it is not the priest and not Eleazar.
- **@0412D `Potest iste sacerdos … significare`** → "This priest … can signify". *iste sacerdos* is
  expressed; noted only because the antecedent shifts here from Christ (the priest of the paragraph
  above, *Omnes qui in Christo credimus sacerdotes sumus*) to the **Jewish** priest, which is the
  point of the sentence and is easy to carry over wrongly.
- **@0413B `Quia Gentilis sacramenta quae agnovit, praedicare non cessat`** → "the Gentile ceases
  not". Subject expressed; flagged because the sentence before it makes *vir mundus* the actor and a
  reader may bind *Effundet eos* to him.
- **@0414C `Hic Moyses Dominum offendit`** and **@0414D `Aaron plangitur, Jesus non plangitur`** —
  all subjects expressed; no supply anywhere in CAPUT XX.

---

# ══ Stint 0014–0018 · cols 0415A–0427B ══

# 8963 *Liber Numeri* — cruces, chunks 0014–0018 (cols 0415A–0427B)

Glossa ordinaria on Numbers 21–24. Heads: CAPUT XXI., CAPUT XXI. (cont.), CAPUT XXII.,
CAPUT XXIII., CAPUT XXIV.

## 0. Span count against the brief — DONE, and it agrees

`data/briefs/8963-lemmata-0014.txt` states **258 spans** for chunks 0014–0018.
Counted in my own Latin, body only (frontmatter excluded), **paragraph-bounded**:

    0014 = 56 · 0015 = 24 · 0016 = 39 · 0017 = 59 · 0018 = 80   →  258

Every body line in all five chunks carries an **even** number of asterisks, so no span runs across
a paragraph and the total is not the product of two cancelling errors. Guillemets: **zero** in all
five chunks, as the launch brief says for this book. **258 = 258.**

⚑ **No span in my range carries `⚑ MATCHES ONLY ELSEWHERE`.** The thirteen in this work fall
outside cols 0415A–0427B. Two spans carry a ✓ at an address that is *not* the one Migne's head
names, and both are read below (§2.1, §2.2).

## 1. Markers fired — FOUR, all `[var:]`, no others

No `[sic:]`, no `[cj:]`, no `[d:]`, no `[ed:]`, no `[nt:]` in 5,237 Latin words.

| col | marker | Migne prints | Clementine |
|---|---|---|---|
| 0419C | `[var:]` | *Non erit auguratio in Jacob, neque divinatio in Israel.* | Nm 23:23 *Non est augurium in Jacob, nec divinatio in Israel* |
| 0420B | `[var:]` | *Secuti viam Balaam filii Beor, qui mercedem iniquitatis dilexit.* | 2 Pt 2:15 *secuti viam Balaam ex Bosor, qui mercedem iniquitatis amavit* |
| 0421B | `[var:]` | *Et quomodo cecidit Lucifer qui mane oriebatur?* | Isa 14:12 *Quomodo cecidisti de caelo, Lucifer, qui mane oriebaris?* |
| 0423B | `[var:]` | *In tempore dicetur Jacob, et Israeli quod perficiet Deus* | Nm 23:23 *temporibus suis dicetur Jacob et Israeli quid operatus sit Deus* |

All four columns were read at the plate on **both** witnesses (pp. 215, 216, 217 of the archive PDF;
Gallica f210, f211, f212). None is an archive-only reading.

Why each cleared the Pattern 14 bar (the divergence changes what the sentence asserts):

- **0419C** — present indicative *est* becomes future *erit*, and *augurium* becomes *auguratio*.
  Migne's own text prints the Clementine's *Non est augurium in Jacob* four columns later at
  **0423A**, as the lemma of VERS. 23 — so the two forms stand in the same work, in the same book,
  and the difference is the printing's, not our reading of it. That internal control is what
  decided this one.
- **0420B** — *filii Beor* for *ex Bosor* imports the Numbers patronymic into the Petrine citation,
  in a commentary on Numbers, where a reader will take the agreement as the Apostle's.
- **0421B** — second person becomes third and *de caelo* is dropped: Isaiah's apostrophe to Lucifer
  becomes a report about him, and the gloss builds on the report (*illuminatus ab illo Lucifero*).
- **0423B** — perfect *quid operatus sit* becomes future *quod perficiet*, and Migne's gloss expounds
  exactly the future (*id est cum oportet, cum expedit*).

## 2. The 7a″ collation — every lemma walked, agreements included

### 2.1 Verse addresses that do not match the words

- **0417D `VERS. 20.-- *In Bamoth.*`** — *in Bamoth* stands at **Nm 21:19** (*de Nahaliel in Bamoth*);
  Nm 21:20 begins *De Bamoth, vallis est*. Migne's head is one verse ahead of his own lemma. ⛔ **Not
  altered.** A verse address may not be touched on any evidence short of an external control, and
  nothing machine-readable consumes it. Recorded, not repaired.
- **0416D `VERS. 16.-- *Foderunt illum principes et excuderunt reges.*`** — printed **after** VERS. 17,
  out of sequence, on both witnesses; and its words are **Nm 21:18**, not 21:16. Both preserved as
  printed.

### 2.2 The lemma the whole of CAPUT XXI turns on, and why it took NO marker

**0416D–0417B, *Foderunt illum principes et excuderunt reges.*** The Clementine (Nm 21:18) reads
*quem foderunt principes et **paraverunt duces multitudinis***. Migne's *excuderunt reges* is a
different verb and a different subject, and it is not incidental: three quarters of the column is
an etymology of *excudere* (*quod ab excudendo, non excidendo dictum est*), and the kings-versus-
princes contrast that follows exists only because of it.

**I declined a `[var:]` here, and the reason is that Migne prints the Vulgate reading himself.**
Eight lines below, at **0417C**, he sets *Et paraverunt duces.* as its own lemma with its own gloss.
A reader meets both readings on the same page in Migne's own voice; a `[var:]` would tell him a
third time and would imply we had found something the edition had not. This is the same test
Pattern 18a applies to a conjecture the edition already glosses, and it decides this the same way.
**The rival was weighed and lost on that ground alone** — had Migne not printed *paraverunt duces*,
the marker would have fired.

### 2.3 Divergences from the Clementine, collated and NOT marked

Each was checked against `sources/vulgate/clementine-flat.txt` and rendered as Migne prints it.

- **0415B Nm 21:12** *ad torrentem **Zareth*** for *Zared* — a name-form, no sense at stake.
- **0415D Sap 8:2** *Hanc quaesivi mihi **ducere uxorem*** for *quaesivi **sponsam** mihi eam
  **assumere***. ⚑ Rendered "to take to me for a wife", **not** "for a spouse": the gloss around it
  is built on *uxor* (*sanctorum uxores*, *in conjugium sumere*, *hujusmodi conjugem*), so the
  familiar word would have cut the argument from its proof-text. Declined a marker only because the
  Migne form is itself a well-attested Old-Latin shape and the sense is unchanged.
- **0416A Nm 21:16** *Congrega populum et dabo ei aquam **de puteo*** — the verse ends at *aquam*;
  *de puteo* is Migne's addition, and it is the word the whole gloss is about. Recorded.
- **0416D–0417A 1 Cor 2:10** *etiam **alta** Dei* for *etiam **profunda** Dei*. Rendered "**the deep
  things of God**" — *altum* bears "deep" and the immediate context is a well and *abyssi venas*,
  so the English is faithful to Migne's word and the divergence is lexical only. No marker: nothing
  the reader would take differently.
- **0417A Mt 28:19** *docentes* for *docete*, absorbed into the gloss's own participial sentence
  (*Impleverunt enim mandatum Dei, docentes...*). Not a divergence in the quotation but a
  construction.
- **0417B Mt 5:19** *Qui fecerit et docuerit **sic homines**, magnus vocabitur* — a **conflation**:
  *sic homines* belongs to the verse's first limb, which ends *minimus vocabitur*, while *magnus
  vocabitur* is the second. Migne's sentence nevertheless asserts what the second limb asserts, so
  no marker; recorded because a reader collating will see the seam.
- **0417D** *Munera mea data mea* cited to (Levit. II) — **in no Clementine verse** in that form.
  Rendered literally ("My gifts, my givings"). No marker: nothing to compare it to.
- **0418A Jn 12:31** *Ecce ... **mittetur** foras* for *Nunc ... **ejicietur** foras*.
- **0418A 1 Jn 5:19** *Quia **omnis** mundus in maligno positus es* for *mundus **totus** ... positus
  est*, and cited to **(Joan. V)**. See §3.2 for the *es*/*est* split between the printings.
- **0418B Rom 6:4** *Consepulti ... **illi** per baptismum **in morte*** for *cum illo ... in mortem*.
- **0420B Jn 7:52** *quia **propheta a Galilaea** non surgit* — Migne's word order for *a Galilaea
  propheta*.
- **0420C Ex 32:34** *Angelus meus **ibit** tecum* — Ex 32:34 has *praecedet te*; *ibit angelus meus*
  is Ex 23:23's shape. Migne's siglum names XXXII. Recorded, not altered.
- **0421B 1 Cor 1:27** *Quia stulta mundi elegit Deus, ut **confunderet** sapientes* for *quae stulta
  sunt mundi ... ut **confundat***.
- **0421B Nm 22:38** *Ecce adsum* for *En adsum*, with *aliud loqui* transposed.
- **0422B Gen 3:14** *Maledictus tu **ab omnibus bestiis terrae*** for *maledictus es **inter omnia
  animantia et bestias terrae***.
- **0422C Mt 5:14** *non potest abscondi civitas supra montem posita* — Migne's word order.
- **0423A Nm 23:22** *Deus eduxit **eum*** for *illum*.
- **0424B Os 11:1** *Ex Aegypto vocavi Filium* — *meum* dropped.
- **0425B Nm 24:13** the lemma stops mid-clause at *ut vel boni*; rendered as the phrase it stands
  for (convention 3), "to utter either good".
- **0425C Nm 24:14** *Dabo tibi consilium* — *tibi* is Migne's addition to *dabo consilium*.
- **0426C 1 Reg 15:6** *Discede de medio Amalec et non percutiam te, quia fecisti misericordiam
  Israel* — 1 Sam 15:6 reads *Recedite ... ne forte involvam te cum eo : tu enim fecisti
  misericordiam cum omnibus filiis Israel*. Far apart, and Migne's is a paraphrase rather than a
  quotation; recorded, no marker.
- **0426D Sir 24:31** *elucidant me, vitam aeternam habebunt* — a mid-verse fragment of *Qui
  elucidant me*; nothing diverges.

**Checked and found to agree with the Clementine EXACTLY** (recorded because a findings-only list is
indistinguishable from no list): Ps 30:20 *Quam magna multitudo dulcedinis tuae* @0417C ·
Ps 71:2 *Deus, judicium tuum regi da* @0418B · Jn 14:6 *Ego sum via, veritas et vita* @0418B ·
Jn 14:30 *Venit princeps mundi hujus, et in me non habet quidquam* @0418A · Jn 19:7 *Nos legem
habemus, et secundum legem debet mori, quia Filium Dei se fecit* @0420B · Ps 73:19 *Ne tradas
bestiis animas confitentes tibi* @0419A · Nm 23:19 *Non est Deus quasi homo, ut mentiatur* @0422D ·
Nm 23:21 *Non est idolum in Jacob* @0422D · Nm 24:9 *Accubans dormivit ut leo* @0424D · Nm 24:11
*Dominus privavit te honore disposito* @0425B · Nm 24:16 *Qui cadens apertos habet oculos* @0425D ·
Nm 24:17 *Videbo eum, sed non modo* and *Orietur stella ex Jacob* @0425D–0426A · Nm 21:8 *Fac
serpentem* @0415A · Nm 21:10 *Profectique filii Israel castrametati* @0415B · Nm 21:22 *Via regia*
@0418A · Nm 22:5 *Misit ergo nuntios ad Balaam filium Beor* @0419B · Nm 22:16 *Sic dicit Balac
filius Sephor* @0420A · Nm 22:22 *Stetitque angelus Domini* @0420C · Nm 22:23 *Cernens asina
angelum stantem* @0420C · Nm 23:8 *Quomodo maledicam* @0421C · Nm 23:13 *Videre non possis* @0422C ·
Nm 23:15 *Sta hic juxta* @0422C · Nm 24:5 *Quam pulchra* @0424A · Nm 24:6 *Ut valles nemorosae*
@0424A · Nm 24:18 *Israel vero fortiter aget* @0426B · Nm 24:21 *Vidit quoque* @0426C · Gal 4:4
*ubi venit plenitudo temporis misit Deus Filium suum* @0426A · Gal 5:6 *sed fides quae per
dilectionem operatur* @0422A · 2 Tim 2:11 *cui si commorimur, etiam convivemus* @0426B · Rom 12:14
*Benedicite et nolite maledicere* @0421C · 1 Reg 1:18 *Vultus ejus non sunt amplius in diversa
mutati* @0422A (only *Vultus ejus* for *vultusque illius*).

## 3. What the plates settled — 7 pages, 2 witnesses, 18 candidates, 1 stood

Full record in `data/briefs/8963-PLATE-READS-0014.json`. **No foot-of-page apparatus of either
layer on any of the seven pages** — seven checked zeroes.

### 3.0 ⭐ THE ONE FINDING THAT STOOD: a lost Hebrew word @0418B

Our twin reads *In Jasa, Hebraice **iahtsah** quod interpretatur Mandati impletio.* **Both
witnesses print a pointed Hebrew word after the transliteration** — יַהְצָה — read at 600 dpi on
the archive (p. 214) and at 1800 px on Gallica (f209). Corpus Corporum has dropped it.

This is the one structural class 8950's two-witness audit left standing: **a whole non-Latin word,
which ink neither adds nor removes**, and which both copies carry. Filed as a **TEI patch**
(`data/briefs/8963-PENDING-TEI-PATCHES-0014.md`), **not** as a marker: the loss leaves the sentence
sound and Migne's own transliteration stands beside it, so Pattern 13a clause 1 governs and an
`[ed:]` would put our voice on the page for a word an English reader could not read anyway. Same
treatment as 8950 @0167D (*ad portam Enaiim* עינים).

⚑ **Our Latin for cols 0415A–0427B contains no Hebrew or Greek character at all**, so any non-Latin
type on these plates is by definition a loss. Both columns of all seven pages were checked and this
is the only occurrence in my range.

### 3.1 Every archive-only candidate fell

Seventeen readings in which the archive copy differs from our TEI were raised and taken to Gallica;
**all seventeen were refuted, our twin agreeing with Gallica every time.** (The Hebrew of §3.0 is
the eighteenth candidate and the only one that stood — and it is the only one where the two copies
AGREE against our twin, which is exactly why it stands.) The table is in
`data/briefs/8963-PENDING-TEI-PATCHES-0014.md`. Four of them construe as sound Latin
(*praecationis*, *Populus totus*, *Balaam* for *Balam*, *regni*/*regui* aside), and *Populus totus
habitabit* @0421D would have looked like a real find: it reads well, and only Nm 23:9's *solus*
and the second witness say otherwise.

⚠ **One candidate was raised against GALLICA and withdrawn by re-reading Gallica.** At **0423D**
Gallica at 1400 px appears to print *super **illam***; at 1800 px it prints *super **illum***, with
the archive and our twin. Same trap the launch brief records for Gallica's digits, in a letter.
**Never settle a Gallica letter at the page-width fetch.**

### 3.2 FOUR sites where our exemplar (Gallica) carries the defect and the archive is clean

This is the class the mid-flight correction named, and this range has four of it. **None takes a
patch, a `[sic:]` or a `[cj:]`**: the two printings disagree, so the bar for a public claim about
Migne's type is not met in either direction.

- **0417A** — Gallica and our twin print the non-word ***putenm***; the archive prints a clean
  *puteum*. Rendered "this well". ⛔ Under the pre-correction non-word heuristic this would have
  been filed as our corruption and patched, and it would have been **wrong**.
- **0418A** — Gallica and our twin print *in maligno positus **es***; the archive prints *est*.
  Rendered by sense, "the whole world is set in wickedness". A `[sic:]` was considered under
  Pattern 12's "no grammatical slot" test — a second-person *es* with *mundus* as subject has none —
  and **declined**, because the archive prints the sound form and a marker would accuse a type the
  other printing does not carry.
- **0419A** — Gallica and our twin print a **full stop** inside the phrase, *ut de eorum.
  correctione et profectu*; the archive prints a comma. **Preserved in the English** under Pattern 8
  (never delete a mark the plate prints); the English reads "that from their. correction and
  progress", which is exactly as odd as the page.
- **0425D** — Gallica and our twin open the head with an **unclosed parenthesis**, *(VERS. 16.--
  Qui cadens apertos habet oculos.*, which is never closed; the archive prints no parenthesis.
  Preserved.

### 3.3 Migne's own punctuation, confirmed on both witnesses and carried through

- **0416C** *quod est esca et nutrimentum ignis Si gustaveris* — **no full stop after *ignis***, on
  both copies. Carried; the English runs on in the same place.
- **0422B** *quam praedixerat Balaam in Israel orituram* — **no terminal stop**, on Gallica and in our
  twin (the archive has one). The paragraph ends without a mark and so does the English.
- **0422D** *usque ad haec vero a perfectioribus secretius advertenda sunt?* — a **question mark
  closing an abridgment tail**, on both copies. Kept, rendered as a direct question ("but are these
  things to be observed more secretly by the more perfect?"), no 8b recasting needed.
- **0425A** — the siglum **(Joan. 9)** with an **arabic** numeral among roman ones, on both copies.
  Passed through verbatim.
- **0426B** — **(Id.)** in lowercase where every neighbour is **(ID.)**, on both copies. Verbatim.
- **0420B / 0425C** — **Balam** (not *Balaam*) at both sites, on both copies at 0425C. Rendered
  "Balam".

## 4. Construals declined, and the reasoning a later reader cannot reconstruct

- **0419C — *nec daemones scit benedicere Isaac, et Jacob, et omnes sancti***. Two parses.
  (a) *ars* (from *Ars enim magica nescit benedicere*) remains the subject of the singular *scit*,
  and *daemones, Isaac, Jacob, omnes sancti* are all objects: "nor does it know how to bless demons,
  and Isaac, and Jacob, and all the saints." (b) *daemones* is the subject, with the verb attracted
  to the singular, and the saints are an elliptical nominative ("Isaac and Jacob and all the saints
  [knew how]"). **I took (a)**, because it is the only one that accounts for the singular *scit*
  without supplying a verb the page does not print, and because it needs nothing added. (b) is the
  likelier sense of Origen's argument and is recorded here for that reason. Both witnesses print
  *scit*.
- **0423B — *sed verbum quod DEUM posuit in ore ejus***. The parallel two columns earlier
  (0421C, *dicit verbum Dei positum in ore ejus*) and the following sentence (*Nisi enim verbum a
  Deo esset*) both want ***Deus*** as the subject. **Both witnesses print *Deum***, a real word in
  a real slot. Rendered literally, "the word which set God in his mouth". **No `[cj:]`**: Pattern
  18's bar is a printed word that makes the sentence assert what the author is arguing against, and
  18a scopes the extension to negations and correlatives. A case-slip is neither, and the sentence
  is odd rather than false.
- **0423C — *Erigendum dicit populum futurum, de eo enim quae videbat, dixisset, erectus est.***
  Does not construe as printed (*quae* against *eo*, *dixisset* with no protasis). Both witnesses
  agree with our twin, letter for letter. Rendered as closely as the words allow and left; no
  conjecture is defensible here and none is offered.

### 4.1 Unexpressed subjects supplied, and what fixed each

Every "he/she/it/they/none" the English supplies that the Latin does not print, with its warrant:

- **0415A** *inivit praelium, et captivum duxit Israel* → "**he** joined battle" — the Canaanite,
  named as the subject of *Audivit* in the sentence before, and the subject of Nm 21:1.
- **0417B** *quem non possunt fodere vel excudere, nisi reges et principes* → "which **none** can
  dig or hammer out but kings and princes." The Latin's *possunt* has an indefinite subject which
  the *nisi* clause then restricts; "none … but" carries the *non* and the *nisi* together without
  adding a third negative. The alternative ("which they cannot dig … save kings and princes") leaves
  *they* pointing at the princes of the lemma, who are precisely the men who **can**.
- **0421A** *sed ista angelum vidit … et vidit, et detulit, et locuta est* → "**she** saw … she saw,
  and reported, and spoke." *ista* is the ass (*asina*), feminine, and the sentence's whole point is
  the contrast with *homo* (*quem homo videre non potuit*) in the same clause.
- **0424B** *eduxit illum Pater ad semetipsum* → "the **Father** brought **him** out" — both printed.
- **0426B** *Perdet liberatum de civitate* → "**He** will destroy the man delivered out of the
  city" — the subject is the *Israel* of VERS. 18's lemma, two lines above, not Edom.

## 5. Vocabulary — the axes, and the two calls the axes did not rule on

- `gentes` — **"nations"** where the word is the quoted verse's own or its immediate re-quotation
  (Nm 23:9 @0421D, Nm 24:8 @0424C, Mt 28:19 @0417A); **"Gentiles"** in the gloss's own voice where
  it stands opposed to the people of God (*ex gentibus credentes* @0420C, *quae sacrificant gentes*
  @0423C, *initium gentium* @0426B–C). ⚑ **The one place the rule is uncomfortable is 0417A**, where
  *reges gentium* and *gentes congregaverunt* sit three words from Mt 28:19's *omnes gentes*; the
  axis rules that verse "nations", so all three read "nations" there rather than break the sentence
  across two English words. Flagged rather than decided silently.
- `gentilis` → **Gentile**, `gentilitas` → **the Gentile world** (*bruta Gentilitas* @0421A,
  *gentilem plebem* @0421A, *fierent gentiles* @0426C, *gentilis efficitur Amalec* @0426C) — the
  2026-09-04 addition, applied as written.
- `daemonium`/`daemones` → **demon(s)**; `diabolus` → **devil**; `satanas` does not occur in my range.
  Checked with the brief's own warning in view: `\bdaemoni` misses *daemones*, *daemonum*,
  *daemone*, all of which occur here.
- `turba` and `multitudo` — *turba* **does not occur** in cols 0415A–0427B; *multitudo* occurs twice
  (@0417C, @0422B) and reads "multitude" both times. The axis is not exercised in this range.
- `natio` — **does not occur.** (The brief's warning about *damnatio-*/*inclinatio-* is why this is
  stated as a checked zero rather than left out.)
- `mysterium` → **mystery**, `sacramentum` → **sacrament**: *sacramentum* does not occur here;
  *mysteria*/*mysticum* read "mysteries"/"mystical" throughout.
- **`usque ad`: 67 occurrences in my five chunks, and all 67 are the abridgment formula** — every
  one follows an `etc.,` (or *Alia littera,*) and names the point at which the father's sentence
  resumes, so every one reads **"as far as"**. There is not one ordinary-Latin use in this range,
  temporal or otherwise. Counted per chunk: 12 · 8 · 8 · 18 · 21.
- The commentator's own voice is **not archaised**: *dicit*/*ait* → "says". `thou`/`thee` appear
  only where the Latin is grammatically singular — the second-person address of the Origen homilies
  (*Si ergo intellexisti* @0415D, *Si autem veneris* @0416C, *convocat te lex* @0416A, *Si
  intellexisti ... noli dissimulare* @0424D) — and `you` where it is plural (*Nisi occulte
  audieritis, plorabit anima vestra* @0417C, *Date initium cordi vestro* @0416B, *Incedite in lumine
  ignis vestri* @0416D).

## 6. Structure and the mechanical checks

- **Column anchors 1:1 and in position**, checked against the word each stands beside in the Latin,
  not merely for presence (test 2b): 14 · 3 · 9 · 9 · 15. Two are deliberately mid-construction
  because Migne's are — *rationalem [0421B] naturam* and *nuper geniti infantes rationabiles [0423C]
  sine dolo lac accipiunt*.
- **Notes 1:1 and in order**, contents untranslated, including the sigla that sit *inside* an italic
  lemma span (@0415A, @0415C, @0418D, @0420A, @0422A, @0423D, @0427B). No `[n:]` in my range is
  editorial prose, so **no `[nt:]` was created**; every one is a citation or an attribution siglum.
- **Question marks by column band, not by total**: 0014 = 1 (@0416C) · 0015 = 0 · 0016 = 1 (@0421B) ·
  0017 = 3 (@0422B, @0422D, @0423A) · 0018 = 2 (@0425A, @0424D). Latin and English agree band by
  band, not merely in sum.
- **`## ` heads 1:1.** `CAPUT XXI. (cont.)` → `CHAPTER XXI. (cont.)` — the `(cont.)` is our chunk
  division and is left exactly as it stands, untranslated and unexplained, for the builder to merge.
  Numerals mirror the plate (`CHAPTER XXI.`, not "CHAPTER TWENTY-ONE").
- **Paragraph structure 1:1** with the Latin twin in all five chunks (27 · 14 · 27 · 37 · 49 lines).
- **Em-dashes: 3** in 5,237 Latin words (corpus median 5.3 per chunk; this is 0.6 per chunk) —
  0014 @0416D, 0016 @0420B and @0421A. Each carries an appositive the Latin marks with its own
  break; none was introduced for rhythm, and none was removed from a faithful sentence to avoid one.
- **The marker-strip test** (strip every marker, read what is left) was run on all five chunks: no
  stranded article or preposition, no doubled mark, every clause keeps its verb, its negation, its
  conjunction **and its object**. This is trivially clean here because nothing is quarantined —
  the four `[var:]` are notes beside a complete rendering, never in place of one.

## 7. Read clean

Cols **0415A–0427B** were read line by line against the Latin twin with the plate open. Beyond what
is recorded above — the four `[var:]`, the Hebrew loss of §3.0, and the four Gallica-side defects of
§3.2 — I found nothing to raise: no dittography, no split or fused type in our twin, no
lost Hebrew or Greek (the range prints one Hebrew word, *iahtsah* @0418B, transliterated by Migne
himself and carried through), no empty markup, no place where the digitization has visibly tidied a
rough passage. The two paragraphs I looked at hardest and left alone are §4's *nec daemones scit*
and *Erigendum dicit populum futurum* — both are Migne's on two witnesses and both are odd.

---

# ══ Stint 0019–0022 · cols 0427C–0438D ══

# 8963 *Liber Numeri* — cruces, stint 0019–0022 (cols 0427C–0438D)

Chunks 0019, 0020, 0021, 0022. Heads: CAPUT XXV · XXVI · XXVII · XXVIII · XXIX · XXX · XXXI ·
XXXII · XXXIII.

**Span count.** My lemma file (`data/briefs/8963-lemmata-0019.txt`) states **184 spans**. Counted
in my own Latin: **184**, flat, and **184** again counted paragraph-bounded, with **zero**
paragraphs carrying an odd number of `*`. This book has no guillemets and my four chunks contain
none (`«` count = 0). The totals agree.

**`⚑ MATCHES ONLY ELSEWHERE`: my file carries none.** Zero spans in my range are so marked, so
none was owed an adjudication under that head. What my file does carry in quantity is the bare
`✓` with an address, and §1 below reads those addresses.

**Plates.** Every column in this range was read at the plate, on **both** witnesses, corner
numbers first. Six archive pages (219–224), six Gallica leaves (f214–f219). Reads, including the
checked zeroes, in `data/briefs/8963-PLATE-READS-0019.json`; TEI divergences in
`data/briefs/8963-PENDING-TEI-PATCHES-0019.md`. **No foot-of-page apparatus of either layer was
found on any of the six pages** — six checked zeroes, which extends the work's sample by six
pages.

**The ratio the launch brief predicted, measured again on my range: 27 archive-only readings
raised, 27 refuted at Gallica, 0 stood.** The two findings that stood are of the other class
entirely — whole Hebrew words present on **both** printings and lost by our TEI.

---

## 1. The lemmata — 7a″, every span walked

### 1a. The lemmata that agree with the Clementine **exactly**, checked and recorded

These are recorded because a list of findings alone cannot be told from a report by an agent who
never looked. Checked word by word against `sources/vulgate/clementine-flat.txt`:

Nm 25:2 *Et adoraverunt deos earum* · Nm 25:7 *Quod cum* and *Arrepto pugione* · Nm 25:9 *Occisi
sunt viginti quatuor millia* (Migne clips the Clementine's closing *hominum*) · Nm 26:1 *Postquam
noxiorum* · 26:2 *Numerate omnem* · 26:53 *Istis dividetur terra* · 26:65 *Nisi Caleb filius
Jephone, et Josue filius Nun* · Nm 27:8 *Homo cum mortuus fuerit absque filio* · 27:12 *Ascende in
montem* · 27:14 *Quia offendistis* · 27:16 *Provideat Dominus Deus* · 27:20 *Et dabis*, *Et partem
gloriae*, *Ut audiat* · 27:21 *Pro hoc* · Nm 28:3 *Haec sunt sacrificia* · 28:9 *Die autem
Sabbati* and *Et duas decimas similae oleo conspersae* · 28:11 *Vitulos de armento*, *Arietem
unum*, *Agnos anniculos septem* · 28:12 *Et tres decimas similae*, *Et duas decimas* · 28:13 *Et
decimam decimae*, *per agnos singulos* · 28:17 *Quintadecima die* · 28:26 *Dies etiam primitivorum
quando offeretis novas fruges* · Nm 29:1 *Mensis etiam septimi* · Nm 30:3 *Si quis* · 30:4 *Mulier
si*, *Et juramentum* · 30:6 *Nec obnoxia tenebitur* · 30:7 *Si maritum* · 30:11 *Uxor in domo* ·
Nm 31:2 *Ulciscere prius* · 31:4 *Mille viri de singulis* · 31:8 *Et reges eorum*, *Balaam quoque*
· 31:15 *Cur feminas* · 31:16 *Ad suggestionem* · 31:21 *Eleazar* · 31:22 *Aurum* · 31:24 *Et
lavabitis* · 31:27 *Qui pugnaverunt* · 31:50 *Depreceris* · 31:51 *Susceperuntque* · Nm 32:1
*Filii autem Ruben* · 32:4 *Terra quam percussit Dominus*, *Jumenta plurima* · 32:29 *Si
transierint filii Gad et filii Ruben* · Nm 33:1 *Hae sunt mansiones*, *Per turmas suas*, *In manu
Moysi et Aaron quas descripsit* · 33:2 *Moyses juxta castrorum loca, quae Domini jussione* · 33:3
*Profecti igitur*, *Manu excelsa* · 33:5 *In Soccoth* · 33:6 *De Soccoth*, *In Etham* · 33:8 *In
Mara* · 33:9 *In Elim ubi erant* · 33:10 *Sed et inde egressi*, *super mare Rubrum* · 33:11 *In
deserto Sin* · 33:12 *In Daphca* · 33:15 *In deserto Sinai* · 33:17 *In Haseroth*.

And, among the inline quotations: **Ps 109:4** *Tu es sacerdos in aeternum secundum ordinem
Melchisedech* — exact · **Mt 20:16** *Multi enim sunt vocati, pauci vero electi* — exact, and the
printed address `(Matth. XX)` is the right one of its two homes · **1 Cor 13:10** *Cum autem
venerit quod perfectum est, evacuabitur quod ex parte est* — exact · **Lv 16:29** *Affligetis
animas vestras* — exact · **Ps 104:37** *non erat in tribubus eorum infirmus* — exact · **Ps
95:5** *Omnes dii gentium daemonia* — exact (Migne clips the opening *Quoniam*) · **Jos 5:13**
*Noster es, an adversariorum?* — exact · **1 Cor 15:7** *Deinde apostolis omnibus* — exact · **Ps
127:2** *Labores manuum tuarum quia manducabis, beatus es et bene tibi erit* — exact but for
Migne's comma where the Clementine sets a colon.

### 1b. Divergences that took a `[var:]` — twelve, with the column

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0427B | *Orabatur,* etc., *in Setim.* | Nm 25:1 *Morabatur autem eo tempore Israel in Settim* | a lost initial `M` leaves a **real Latin word** ("he was entreated") in the slot of "he was abiding". See §2. |
| 0429A | *Per unum sapientem habitabitur civitas, tribus autem iniquorum desolabitur; et unus justus pro toto mundo…* | Sir 16:5 *Ab uno sensato inhabitabitur patria: tribus impiorum deseretur* | different lexemes throughout, and the two clauses after the semicolon answer to nothing in the received text at all. |
| 0429A | *Respice coelum si potes dinumerare stellas, ita erit semen tuum* | Gn 15:5 *Suspice caelum, et numera stellas, si potes … Sic erit semen tuum* | *Respice*/*Suspice* and *dinumerare*/*numera*. |
| 0429C | *super duodecim thronos* | Mt 19:28 *super sedes duodecim* | a different noun. |
| 0432D | *Servet virginem suam, et det virginem suam* | 1 Cor 7:37–38 *servare virginem suam* … *qui matrimonio jungit virginem suam* | Augustine's own quotation; the received text has neither verb in this form, and the whole *quaestio* turns on the father's keeping and giving. |
| 0433A | *Volo autem omnes vos uni viro virginem castam exhibere Christo* | 2 Cor 11:2 *Despondi enim vos uni viro, virginem castam exhibere Christo* | a different verb, and a different claim ("I will" for "I have espoused"). |
| 0435C | *Anima, habes multa bona: manduca, bibe et laetare* | Lc 12:19 *…posita in annos plurimos: requiesce, comede, bibe, epulare* | two verbs replaced, one dropped, and the "laid up for many years" gone. |
| 0435C | *Stulte, auferetur a te hac nocte anima tua* | Lc 12:20 *Stulte, hac nocte animam tuam repetunt a te* | ⭐ the gloss immediately expounds the word order — *Non dixit in hac nocte, nec in hac die, sed hac nocte* — so the wording is the argument. |
| 0435D | *Ex parte scimus, et ex parte prophetamus* | 1 Cor 13:9 *Ex parte enim cognoscimus, et ex parte prophetamus* | a different verb of knowing. |
| 0435D | *nemo nos judicet in parte diei festi, aut neomeniae, aut sabbati?* | Col 2:16 *Nemo ergo vos judicet in cibo, aut in potu, … aut sabbatorum* | **nos for vos** — the person of the pronoun is changed, and Origen's point is that *we* keep the feast in part. |
| 0437C | *qui sanat omnes languores tuos* | Ps 102:3 *qui sanat omnes infirmitates tuas* | ⭐ the 7a″ shape exactly: the next sentence is *Multi sunt **languores** animae*. Conforming the quotation to the Vulgate would have taken the keyword out of its own proof-text. |
| 0437D | *Panem angelorum manducabit homo* | Ps 77:25 *manducavit* | future for perfect; rendered "shall eat". |
| 0438A | *Mense tertio egressionis filiorum Israel de Aegypto, in hac die transierunt in solitudinem Sinai* | Ex 19:1 *…egressionis Israel de terra Aegypti, in die hac venerunt…* | *transierunt* for *venerunt*, and three smaller differences named in the marker. |

(Thirteen rows; the count in the marker tally below is by marker, and 0435D carries two.)

### 1c. Divergences examined and **declined** — named, with the reason

- **@0427D `Initiatus est Israel`** for Nm 25:3 *Initiatusque est Israel Beelphegor*. The dropped
  enclitic `-que` is the ordinary clipping of a citation's opening word, adjudicated for this work
  at 0407A by the 0010 stint. No marker. The second lemma four lines down, **`Et initiatus est
  Beelphegor`**, adds *Et* and drops *Israel*: same class, and it is Origen's own re-quotation.
- **@0429D `Da eis` … `Dabis ei possessionem`** (Nm 27:6). The second is the *alia littera*
  Origen expounds, standing inside his own siglum. Migne does not label it, but the surrounding
  paragraph is Origen's lemma and nothing in the gloss turns on *da eis* against *dabis ei*.
  Declined; recorded here instead.
- **@0429C `Volo, Pater, ut ubi ego sum, illic et isti mecum sint`** (Jo 17:24) and
  **`Sicut tu in me, Pater, et ego in te, ita et isti in nobis unum sint`** (Jo 17:21). Word order
  and *isti*/*ipsi*; the claim is unchanged in both. Declined under Pattern 14's "in a way that
  changes the sense".
- **@0435A `Qui enim descendit, ipse est qui ascendit`** (Eph 4:10) — an added *enim*, a dropped
  *et*. Declined. **`Tecum descendam in Aegyptum`** (Gn 46:4, *Ego descendam tecum illuc*) — Migne
  names Egypt where the Vulgate is deictic, but Gn 46:3 has already named it. Declined.
- **@0435A `qui est Dei virtus et Dei potentia`** — 1 Cor 1:24 reads *Dei virtutem et Dei
  sapientiam*. Migne does **not** italicize or cite it, so it is an allusion in the commentator's
  own voice and not a scripture citation; Pattern 14 does not reach it. Rendered "the power of God
  and the might of God".
- **@0432D `Mundabit eum sacerdos, et mundatione non mundabis reum (Levit. XIII)`.** No such
  sentence stands at Lv 13. But the whole paragraph is Augustine expounding the **LXX** (its two
  preceding readings are printed under an express `LXX:`), so the comparand is not the Clementine.
  Declined; the divergence is recorded and the English renders what is printed.
- **The four expressly-labelled alternative readings take no marker, because Migne labels them
  himself:** `LXX: Et definitiones quas definivit adversus animam suam` @0432C · `LXX: Dominus
  mundabit eam, quia abnuit pater ejus` @0432D · `Alia littera: Et accepit Moyses et Eleazar
  sacerdos aurum…` @0434C · `Septuaginta sic: Cum virtute sua` @0435A. Also **`Et sic colligeris.
  Novissime inquit: Apponeris ad populum tuum`** @0433B, where the second half is a second reading
  introduced by *Novissime inquit*.
- **Spellings that are the same word:** `In Kalendis` for the Clementine's *In calendis* @0431C ·
  `in Setim` for *in Settim* @0427B (inside the `[var:]` above, and not separately marked) ·
  `sepulcra` for *sepulchra* @0438B. No sense turns on any of them.
- **@0436D** the gloss's own prose paraphrases its lemma as *ubi **sunt** duodecim fontes aquarum,
  et **septuaginta palmae erant*** — present tense, and the order of fountains and palms reversed
  against Nm 33:9. It is not an italic span and it is not offered as a quotation, so no marker;
  rendered as printed, tense shift and all.

### 1d. Two spans the pre-scan marked `⚠ NOT in Clementine verbatim` for a mechanical reason

- **@0436A `Et in diis eorum. Omnes dii gentium daemonia.`** — one italic span carrying **two**
  quotations, Nm 33:4 and Ps 95:5. Each is exact on its own; only the concatenation is unfindable.
- **@0428C `(ORIG., hom. 21 in Num)` and @0433B `(ORIG., hom. 25 in Num.)`** — sigla that our TEI
  carries as *italic spans* rather than as `[n:]` notes. The plate sets both as ordinary
  parenthetical sigla, exactly like their neighbours. They are reproduced verbatim and
  untranslated in the English, italics and enclosed column anchor and all; the inconsistency is
  our TEI's markup, not Migne's page, and it is small enough not to be worth a patch.

## 2. Markers fired, with the column

**Twelve `[var:]`** — @0427B, @0429A (×2), @0429C, @0432D, @0433A, @0435C (×2), @0435D (×2),
@0437C, @0437D, @0438A. Distribution: 4 in chunk 0019, **0 in chunk 0020**, 2 in 0021, 7 in 0022.

**Two `[ed:]`** — @0427B and @0437C, both for a Hebrew word Migne prints and our TEI has lost.

**Zero `[sic:]`, zero `[cj:]`, zero `[d:]`, zero `[nt:]`, zero `[cn:]` in the whole range.**

### 2a. Why zero `[sic:]`, when 27 candidates were raised

Every candidate this range produced was an **archive-copy reading refuted at Gallica**, and a
`[sic:]` on any of them would have accused Migne of the photograph's defect. The two findings that
survived both witnesses are losses in **our** file, which is a patch and an `[ed:]`, never a
`[sic:]`. Of the readings confirmed on both copies, none is broken type: `Orabatur` and `cultu`
are real Latin words in real cases (Pattern 12's boundary: a real word merely wrong is rendered,
not marked), and the two unconstruable places at 0434B and 0434D are Migne's syntax, not his
sorts.

### 2b. Why the one `[var:]` on a non-scripture-looking word is nevertheless a `[var:]`, not a `[cj:]`

@0427B `Orabatur`. It has the Pattern 18 shape — a real word whose faithful English says something
false — and it would have been tempting to fire `[cj: *Orabatur*; read *Morabatur*…]`. **It is not
a `[cj:]`, because of Pattern 18's own boundary: a divergence inside a QUOTED SCRIPTURE is Pattern
14's, and this is the verse lemma of Nm 25:1.** So Migne's word is rendered in the running text
("He was entreated") and the Clementine's reading stands in a `[var:]` beside it. **Which word is
where:** *Orabatur* is Englished in the text; *Morabatur* is inside the bracket, named as the
Vulgate's. Nothing in this range fired a `[cj:]`, so Pattern 18's inversion hazard does not arise.

## 3. Migne's own printing, reproduced and not tidied

- **@0434B** the plate — **both plates** — prints *Probantur tamen haec omnia, alia per ignem,
  alia per aquam uniuscujusque opus quale sit ignis probabit*, with **no punctuation whatever**
  between *aquam* and *uniuscujusque*. Two clauses are run together. Pattern 8 forbids supplying a
  mark, so the English runs them together too: "…some by fire, some by water the fire shall try of
  what sort each man's work is." It reads as an error and it is faithfully his.
- **@0434D** *usque ad qui est terra promissionis intrare* — on both copies, and it does not
  construe (a nominative *terra* with *intrare*). Rendered as closely as the printed words allow:
  "*as far as* who is the land of promise to enter." Neither *qui est terrae promissionis
  intrare* nor *ut terram promissionis intraret* is offered in the text; the crux is the whole
  answer.
- **@0431A `cultu Dei`**, ablative, where the sense wants the accusative *cultum*. Both copies.
  Rendered as an ablative of respect — "and **in the worship of God** has carried men over from
  things visible to things invisible" — with the object of *transtulit* supplied as "men", which
  is named in §5 below. No marker: Pattern 9 (a case that English cannot expone) and Pattern 12's
  real-word boundary both point the same way.
- **@0433C** `Cur feminas.` is printed with a **full stop**, though Nm 31:15 is a question
  (*Cur feminas reservastis?*). The English keeps the full stop. Pattern 8: never supply a mark
  he does not print. Question-mark parity for chunk 0021 is 0 against 0.
- **Chapter head `CAPUT XXXI`, no full stop.** Our twin has none; **Gallica has none**; the
  archive prints one. Two printings, not two photographs — a press variant, which takes neither a
  patch nor a marker. The English head is `CHAPTER XXXI`, mirroring our twin, and it is the only
  head in the range without a stop.
- **Numerals mirror the plate throughout:** `CAPUT XXV.` → `CHAPTER XXV.`, and so on to
  `CHAPTER XXXIII.` No head is spelled out.

## 4. The `usque ad` occurrences, decided one by one

The `etc.` splice test was run on every occurrence. **All but one are the abridgment formula** and
are rendered *as far as*, matching the shipped chunks of this work.

⭐ **The exception is @0428C, and both are in one sentence:** *…etc.,* ***usque ad*** *ubi
cruciatur die ac nocte usque ad novissimum quadrantem.* The first follows an `etc.` and names
where Rabanus's sentence resumes — formula, "*as far as*". The second is **Mt 5:26's own words**
inside the resumed tail and is rendered by sense, "even to the last farthing". This is precisely
addendum D's trap, and note that our TEI does **not** italicize the second while the plate does —
so an italic test would have got it wrong in this instance as well.

One near-miss worth recording: @0431B `*usque ad* qui sacerdos est in aeternum secundum ordinem
Melchisedech [n: (Hebr. V)]` — the formula, whose resumption tail happens to be a quotation of
Heb 5:6. Rendered as the formula plus the tail; the tail is not an italic span and takes no
`[var:]`.

## 5. Unexpressed subjects and objects supplied, each one named

Per the brief's dominant-defect rule, every pronoun or subject I supplied that the Latin does not
print, with what fixed it:

- **@0427C `deos earum`** → "their gods", feminine. The antecedent is **`filiabus Moab`** in
  Nm 25:1, the verse the lemma comes from — not the Madianites, who enter only at 25:6.
- **@0427D `Consecratus est`** → "He was consecrated". The subject is **Israel**, from the lemma
  immediately above (*Initiatus est Israel*), not the individual Israelite of 25:8.
- **@0429B `video ipsummet Moysen`** … **`puto`** → "I see" / "I think". First person, expressed;
  the speaker is **Origen**, whose siglum governs the paragraph, and the English keeps "my Lord"
  at *Christus Dominus meus* rather than neutralizing it.
- **@0430A `dicit Dominus`** … **`non sanctificaverunt eum`** → "they did not sanctify **him**".
  *eum* is **God**, not Moses: Nm 27:14 reads *nec sanctificare me voluistis*. Both readings
  construe in Latin; the verse decides.
- **@0430C `non elegit filios, non nepotes, nec rogat`** → the subject is **Moses**, from
  *Provideat Dominus Deus* in the verse he is quoted as speaking. Note the English carries all
  three negatives, on the three words the Latin puts them on (`non elegit`, `non` [elegit]
  `nepotes`, `nec rogat`); I repeated "he did not choose" rather than let one *non* cover two
  objects, because English elision there would have moved the second negative onto the verb.
- **@0431A `transtulit`** has no expressed object → "has carried **men** over". The object is the
  worshippers implied by *cultu Dei*; the alternative is to make *cultu* the object (i.e. read
  *cultum*), which is the conjecture named in §3 and is not taken in the text.
- **@0432D `noceant animae suae`** → "**they** harm their own soul". The subject is the **women**
  of the lemma (*Mulier si…*), carried over from *talibus votis*; it is not the vows.
- **@0433C `redit ad viros vel parentes`** and **`hic velut auctor sceleris interficitur`** → "he
  is killed": **Balaam**, named in the sentence before.
- **@0434A `Spectat nos angelorum chorus`** → expressed. But **`quis plus afferat auri`** and
  **`quis lapides pretiosos curiose intuetur`** are indefinite *quis* — "who brings back", "who
  looks" — and take no supplied subject.
- **@0435B `praeparemus nos … consumamus … expleamus … deficiamus`** → first person plural
  throughout, expressed in the verbs; the "we" is the **readers** (*legentes*), which is why the
  English says "so that we, reading…".
- **@0436A `Facit et nunc`** → "**He** does so even now": the subject is **the Lord**, from
  *faciet Dominus vindictam* in the sentence before, not the demons.
- **@0437A `haec gratia suscipiat tentationem`** — see §6.
- **@0438A `Una de pluribus, sed major omnibus, non separatur in ordine`** → "**it** is not
  separated in order". The feminine subject is **`mansio`** (the twelfth station, Sinai), from
  *Sinai duodecima mansio* in the line above — not *Scriptura* and not the apostles' number.
- **@0438C `lepra perfunditur`** → "the people of the Jews is overspread": expressed
  (*populus Judaeorum*). **`in typum murmurantis`** is a genitive singular participle with no
  noun; I rendered it "as a type of one murmuring against the Church", not "of the people
  murmuring", because *populus Judaeorum* is the main clause's own subject and making it the
  genitive too would collapse the type into the thing typified.
- **@0438D `venies … venies`** → second person singular, expressed, addressed to the *viator*.
  Pattern 17: **thou** throughout that paragraph, and throughout @0436D–0437A, because every
  verb and pronoun there is singular (*Vides*, *te*, *venisses*, *pertulisses*, *superasses*,
  *suscipiat te*, *discernas*, *Intuere*, *sepelieris*, *mortificaveris*). There is no plural
  address anywhere in my four chunks.

## 6. Passages where two readings construe, and I say which I took

- **@0437A `Haec te amoenitas post amaritudinem, haec requies post laborem, haec gratia suscipiat
  tentationem.`** Two construals. (a) *te* is the object of *suscipiat* and *tentationem* is a
  second object without a conjunction; (b) *te* belongs with the first two subjects and
  *tentationem* is the object of the third, the sentence eliding the verb. **I took (b)** — "May
  this pleasantness after bitterness receive thee, this rest after labour, this grace the
  temptation" — because it is the only reading on which every printed word has a slot, and because
  Origen's argument is that grace takes up the temptation that the refreshment interrupts. The
  likeliest emendation, *haec gratia post tentationem*, is **not** taken into the text: it is a
  conjecture, it is not on either plate, and the printed accusative is intelligible without it.
- **@0436B `ipsius poenitentiae lacrymis uritur daemon`** → "the demon is burned by the tears of
  **that very** penitence". *ipsius* could be possessive of the fornicator ("of his own
  penitence"); I took the intensive with *poenitentiae* because the sentence's whole point is the
  penitence, not the penitent.
- **@0429C `optima quaeque virtutum merito percipiunt`** → "receive by merit whatsoever things of
  the several kinds are best". *virtutum* could be "of the virtues" (the reward being virtues) or
  partitive with *optima quaeque*; I took the partitive, because the sentence is about dividing
  spoils and *merito* already carries the virtue.
- **@0434D `pensanda sunt … ex persona dicentis`** → "from the person of the speaker". *persona*
  is not the theological *persona* here and is not capitalized.

## 7. Vocabulary axes — checked, with the instrument checked first

- **`daemonium` → demon, `diabolus` → devil.** ⭐ The pressure point is @0436A, where Migne quotes
  Ps 95:5 *Omnes dii gentium **daemonia*** and the Douay reads "devils". **Rendered "demons"**,
  per axis 3, and the same word is kept eight lines later at *uritur **daemon***. `diabolus`
  occurs twice (@0433B *diabolica castra*, @0438B *tentabatur a **diabolo***) and is "devil" in
  both. There is no `satanas` in the range.
- **`gentes` family.** `gentium` @0436A is Ps 95:5's *dii gentium* → **"of the Gentiles"**, the
  standing English of that verse and the typological sense here (idolaters against the God of
  Israel). @0438C *Ecclesiam de **gentibus** congregatam* and *plenitudinis **gentium*** are
  squarely the *Judaei*/*gentes* opposition — "the Church gathered out of the **Gentiles**", "the
  fulness of the **Gentiles**". ⚑ **Instrument checked, and it fired exactly as the brief warns:** a raw `natio` grep
  returns **one** hit in my four chunks and it is **`indignationis`** @0430C — no *natio* stands
  anywhere in my range, so no "nation" appears in my English and none should. A bare `gentes`
  grep likewise returns one hit, **`legentes`** @0435B; the real `gent-` population is
  `gentium` @0436A and @0438C, and `gentibus` @0438C.
- **`turba`/`multitudo`:** `turba` does **not** occur in my range at all (and `\bturba` returns
  nothing here, not even a *turbare* form). `multitudo` occurs **once**, @0429A *Est ergo
  **multitudo** laudabilis* → "There is therefore a praiseworthy **multitude**". Axis 2 holds
  trivially, since only one of the pair is present.
- **`mysterium`/`sacramentum`:** both occur and are kept 1:1. *mysteriis idoli* @0427D → "the
  mysteries of the idol"; *mysteria coelestia* @0428C → "the heavenly mysteries"; *sacramenta
  consecrationis* @0430C → "the sacraments of consecration"; *sacramenta pulsare* @0437C → "to
  knock at the sacraments".
- **Commentator's voice not archaised.** *dicit / ait / inquit* → "says", never "saith";
  `-eth` forms appear only inside quoted scripture (*healeth*, *hath*), where the italic span and
  the `[n:]` citation both mark the quotation.
- **`mansio` → station.** Fixed against the work's own usage for the numbered stations: the
  formula "the *n*th station" already stands **12** times in the shipped chunks (0005 ×1, 0008 ×5,
  0009 ×2, 0014 ×3, 0015 ×1) and **14** more times in 0023 and 0024, the chunks that continue this
  very catalogue. "Encampment" is used **16** times, but only in the ARGUMENTUM (0000, 13) and at
  0013 (3), where it renders the journey's stages in summary rather than a numbered station. My
  range carries ten, including
  Nm 33:1's lemma *Hae sunt **mansiones*** → "These are the **stations**". ⚑ **The one place this
  costs something is @0435A `sed per multas mansiones`**, which echoes Joan. 14:2's *mansiones
  multae*; "mansions" would have caught the echo and broken the chapter's own word. Within a work,
  one voice: "through many stations", and the echo is recorded here.
- **`profectus`/`profectio`.** *profectiones et mansiones* @0435B → "goings forth and stations";
  *ordo profectuum* @0437C, @0438D → "the order of the goings forward". Kept distinct from
  *proficisci* → "set forward", which is the catalogue's own verb.

## 8. The three tests, and the fourth

1. **Marker-strip read-back.** Every `[var:]` and both `[ed:]` deleted, and each host sentence read
   aloud. Nothing is stranded: `[var:]` never wraps Migne's words, and neither `[ed:]` stands in
   for a rendering — the sentence at 0427B reads "By the interpretation of the Hebrew names, we
   find that Sittim is said in our tongue to be answer or refutation" with the marker gone, and
   the sentence at 0437C reads "In Hebrew *Daphquah,* that is, a knocking." Both are complete
   clauses with their verbs, their objects and their conjunctions.
2. **Negation attachment, host by host.** The dense sites are @0430C (*non elegit … non … nec
   rogat*, three hosts, three negatives, handled in §5), @0430D (*non enim res hujusmodi quasi
   partiliter divisae **minuuntur*** — the *non* is on the verb, and the correlative *sed totae
   sunt* proves it), @0433A (*ut **non nisi** rationi motio illa consentiat* — both words carried,
   "consent to nothing but reason"), @0433B (*qui negant … **nec** fidem … recipiunt* — carried as
   "nor receive"), @0435B (*nec segniter … **nec** spatium viae expleamus* — carried), @0436B
   (*Non enim **sine ipsis** consummatur peccatum* — the negative governs the prepositional
   phrase, not the verb, and the English keeps it there: "For sin is not accomplished **without
   them**"), and @0435C (*Non dixit **in** hac nocte, nec **in** hac die, sed hac nocte* — the
   whole point is the preposition, and the negatives sit on it). ⚑ Test 2a's trigger
   (a negative on a verb with a quantifier or correlative nearby) fires at @0428A *non solum
   idololatriam, **sed et** omnem carnis affectum* — the *non* governs *solum*, and the English
   reads "not only idolatry, but also every affection", with the *sed et* pivot intact.
3. **Punctuation by column band, not by total.** Question marks: 1/1 in 0019 (@0427C), 1/1 in 0020
   (@0430D), 0/0 in 0021, 5/5 in 0022 (@0435D ×3 counting the Coloss. quotation, @0436B, @0437C) —
   band for band, no mismatch. Column anchors 10/10, 10/10, 10/10, 16/16, verbatim and in order,
   and each checked against **the word it stands beside**, not merely for presence (test 2b): the
   two that fall mid-construction are `*there was not among [0435B] their tribes one that was
   feeble*` (Latin: `in [0435B] tribubus`) and `he keeps a woman for spoil [0433D]` (Latin:
   `in praedam [0433D] de bello`). `[n:]` notes 20/20, 21/21, 21/21, 27/27. Paragraph counts
   26/26, 35/35, 34/34, 33/33.
4. **Does it ASSERT what he asserts?** Read back paragraph by paragraph with the counts already
   clean. Three places where the smooth English was the suspect and was changed back: the
   0434B run-on (§3), where an inserted colon read better and was removed; @0437A, where "let this
   grace receive thee after temptation" read beautifully and silently supplied a *post* (§6); and
   @0436D *promptior reddatur ad **aliquos** labores*, where "readier for **further** labours" is
   the obvious sense and the Latin says *some* — kept as "some labours", because Origen's next
   station is Alus, *labores*, and *aliquos* is doing work.

**Zero em-dashes** in all four chunks.

## 9. Sections read clean, and candidates rejected

- **Chunk 0020 is the clean one: zero markers of any kind in 1,000 Latin words**, cols
  0430A–0432B. It was read twice for that reason. Its lemmata are Nm 27–29's sacrificial calendar
  and every one of them matches the Clementine exactly (§1a); its two dense paragraphs (the
  Augustinian *quaest.* 53 at 0430A–C and Origen at 0430D–0431A) carry the range's other
  unexpressed-subject sites, both named in §5.
- **Candidates rejected:** the twenty-seven archive readings in
  `data/briefs/8963-PENDING-TEI-PATCHES-0019.md` Part B, each refuted at Gallica and each named
  there with both readings. Also rejected, with reasons, at §1c (eight declined divergences), §2b
  (a `[cj:]`), and §3 (a patch on `CAPUT XXXI`, which is a press variant).
- **Not rejected, escalated instead:** the two Hebrew words. They are Migne's, they are lost from
  our Latin, and **the codepoints are not transcribed by me** — the glyph count at 0427B is three
  where *Shittim* would want four, and reading non-Latin type by eye is exactly what
  `reference_paleography-gt-ingest` forbids. The `[ed:]` says a word is missing and supplies
  nothing; the pending-patches file records the two leaves and asks for a 1200 dpi render.

---

# ══ Stint 0023–0025 · cols 0439A–0446D ══

# 8963 *Liber Numeri* — cruces, chunks 0023–0025 (cols 0439A–0446D)

Anselm of Laon and his school, *Glossa ordinaria* on Numbers. This stint closes the book:
chunk 0025 ends at 0446D, where `LIBER DEUTERONOMII` begins on the same plate.

## 0. Span count against the lemma brief

`data/briefs/8963-lemmata-0023.txt` states **102 spans** for chunks 0023–0025.
Counted **paragraph-bounded** in my own Latin: **0023 = 50 · 0024 = 38 · 0025 = 14 = 102.**
No unmatched `*` delimiter in any paragraph of any of the three files. **Guillemets: 0** in my
range, as the launch brief says for this book. **The totals agree.**

**`⚑ MATCHES ONLY ELSEWHERE`: zero spans in my range.** The string occurs in my brief only in
the legend that explains the mark; no inventory line carries it. Nothing to adjudicate.

## 1. Plates read — pp. 225, 226, 227 (unread before this stint) and p. 228 (re-read)

Corner numbers read FIRST on every page, before anything else on it:

    p.225 → 439 / 440      p.226 → 441 / 442      p.227 → 443 / 444      p.228 → 445 / 446

confirming `page = (column + 11) / 2` for `patrologiaecurs04migngoog.pdf`. Gallica calibrated the
same way: f220 corners 439/440, so `f = (column + 1) / 2` holds. Both maps verified, not assumed.

⛔ **FOOT-OF-PAGE APPARATUS: NONE, ON ALL FOUR PAGES, BOTH COLUMNS.** Checked zeroes, recorded in
`data/briefs/8963-PLATE-READS-0023.json`. ⭐ p.228 is the page where **the work division falls
mid-page** — the shape CLAUDE.md warns sets notes mid-page — and there is no note there either:
the rule under the last line of Numbers is followed directly by the `LIBER DEUTERONOMII` head.

## 2. ⭐ Second-witness tally — 15 archive-only candidates, 14 refuted at Gallica

Every letter- and word-level candidate the archive copy produced was taken to Gallica
`ark:/12148/bpt6k5505319w`, leaves f220–f223. **Fourteen fell. One stood, and it was ours.**

| col | archive prints | Gallica prints | our TEI | verdict |
|---|---|---|---|---|
| 0439B | `discretio˙ fit crescente` | `discretio fit  crescente` | `discretio fit, crescente` | archive's raised dot is dirt; **neither witness prints the comma our TEI has** — §5 below |
| 0439C | `vere lucis` | `verae lucis` | `verae` | REFUTED — archive ink |
| 0440A | `frutres` | `fratres,` | `fratres` | REFUTED — archive ink (a→u) |
| 0440B | `Thabath` (lemma) | `Thahath` | `Thahath` | REFUTED — archive ink |
| **0440C** | **`Thabath`** | **`Thabath`** | `Thahath` | **STANDS — both witnesses print `Thabath`; ours is the odd one** |
| 0441C | `victos` | `vinctos` | `vinctos` | REFUTED |
| 0441C | `collo` | `colla` | `colla` | REFUTED |
| 0442A | `confandar` | `confundar` | `confundar` | REFUTED |
| 0442B | `praeteribunt` | `praeteribant` | `praeteribant` | REFUTED |
| 0442C | `antem` | `autem` | `autem` | REFUTED |
| 0442D | `alius campis` | `alius in campis` | `in campis` | REFUTED — ink swallowed a two-letter word |
| 0443C | `nou` | `non` | `non` | REFUTED — and this one is a NEGATION |
| 0443D | `(Luc. XV)` | `(Luc. XVI)` | `XVI` | REFUTED — ink filled the final `i` |
| 0444A | `et ne carne` | `et in carne` | `in carne` | REFUTED |
| **0444B** | **`post montana enim tam ad`** | `post montana enim ad` | `enim ad` | **press variant — the archive printing carries a word the Gallica printing does not** |
| 0445B | `id est Hena` | `id est atrio Hena` | `atrio Hena` | REFUTED — ink swallowed a five-letter word |
| 0446D | `solomnitatem` | `solemnitatem` | `solemnitatem` | REFUTED |

⭐ **This range corroborates the run's governing finding from the other side.** Our TEI agrees with
Gallica at every one of the fourteen refuted sites — and at 0444B, where the two printings really
differ, **our TEI again follows Gallica.** The one site where our TEI stands alone (0440C) is the
one where **the two printings agree with each other**.

⛔ **And it reproduces the "never let one adjudication settle the next" warning exactly.** `Thabath`
for `Thahath` was raised at 0440B and 0440C on the same column, from the same archive page, on the
same evidence. **The first is ink and the second is real.** Had I settled 0440C from the 0440B
refutation I would have silently kept a reading neither plate carries.

⚑ Three of the fourteen refutations were words the archive **lost**, not letters it changed
(`in` @0442D, `atrio` @0445B, and the `i` of `XVI`). That is the direction the withdrawn
"direction rule" once called safe on one witness; here it was wrong three times out of three.

## 3. The one divergence I judge to be OURS — 0440C `Thahath` for `Thabath`

Filed in `data/briefs/8963-PENDING-TEI-PATCHES-0023.md`.

Migne sets the VERS. 26 lemma **`Thahath`** (both witnesses; = Vulg. Nm 33:26) and then, eleven
lines below in the Origen gloss, **`Thabath`** (both witnesses). Our TEI prints `Thahath` in both
places — the digitization tidied Migne's second form into agreement with his first and with the
Vulgate. This is brief §4's normalization class, caught only because the plate was open.

**Under `translation-style.md` "THE PLATE WHERE READ", the English renders `Thabath` at 0440C** —
so the English chunk deliberately reads *Thahath* at the lemma and *Thabath* in the gloss, exactly
as Migne prints. No `[sic:]`: the type is not defective (it is a variant transliteration of a
Hebrew name), and a `[sic:]` would in any case fail the verbatim-substring guard, since the word it
would accuse is not in our Latin.

## 4. Markers fired — eight, all `[var:]`, all on read columns

⛔ **No `[sic:]`, no `[cj:]`, no `[ed:]`, no `[d:]` in this stint.** Fourteen of my fifteen
candidates were the archive copy's ink; the fifteenth is our file's and takes a patch, not a marker.
Zero `[sic:]` in 3,109 Latin words is what this class looks like when it is measured.

Each `[var:]` stands beside a faithful rendering of what Migne prints; none replaces one.
Columns: **0439B · 0441B · 0441D · 0442A · 0442B · 0444A · 0444C · 0444C** — all four pages read.

1. **@0439B** *si fuerint peccata vestra sicut Phoenicium, ut nivem dealbabo* (Is 1:18). Clementine:
   *Si fuerint peccata vestra ut coccinum, quasi nix dealbabuntur.* Migne prints an **Old Latin**
   form: *Phoenicium* (Phoenician purple, not "scarlet") and an **active** *dealbabo*, "I will
   whiten", against the Vulgate's passive. ⚠ This is the exact site of one of Ruth's four measured
   silent repairs (*Phoenicium* rendered "as scarlet"); it is deliberately **not** conformed here.
2. **@0441B** *Si spiritus potestatem habenti ascenderit super te, locum tuum ne dimittas.*
   Clementine Ecl 10:4: *potestatem **habentis** … locum tuum ne **demiseris**.* Migne's `habenti`
   is a real Latin form (dative participle) with no construction in the sentence, so Pattern 7
   governs and it is rendered flat — "for him that hath power" — not silently repaired to the
   genitive the Vulgate has. **Both witnesses print `habenti`.** Migne's own siglum reads
   `(Eccli. X)` (Ecclesiasticus) for a verse of **Ecclesiastes**; that is his, and rides as printed.
3. **@0441D** *Maledictus qui facit opus Dei negligenter et prohibet gladium suum a sanguine*
   (Jer 48:10). Clementine: *opus **Domini fraudulenter**, et maledictus qui prohibet…* Two
   substantive changes (**Dei** for *Domini*, **negligenter** for *fraudulenter*) plus the loss of
   the second *maledictus qui*. `negligenter` is the material one and is what the marker names.
   Both witnesses.
4. **@0442A** *Pastor enim, bonus ponit animam suam pro ovibus suis* (Jo 10:11). Clementine:
   *Bonus pastor animam suam **dat** pro ovibus suis.* `ponit` for `dat`. ⚑ Migne's comma after
   *enim* is his and is carried into the English ("a shepherd, a good one, layeth down…"); it looks
   like a compositor's slip and both witnesses print it.
5. **@0442A–B** *Transiens, videbo visionem hanc magnam* (Ex 3:3). Clementine: ***Vadam, et**
   videbo…* — and the divergence is **load-bearing**: the gloss is expounding *transitus* and calls
   the speaker *verus Hebraeus, id est transitor*. Conforming this lemma would have destroyed the
   argument it is quoted for. Both witnesses.
6. **@0444A** *Venerunt ad **montem** Abarim contra Nabo* (Nm 33:47). Clementine: ***montes**
   Abarim.* Migne's singular sits against his own gloss two lines down (*vertitur in **montes**
   transeuntium*, *mansio transeuntium in **montibus** sita est*). Both witnesses print the singular.
7. **@0444C** *Versatus sum in miseria, dum mihi configitur spina* (Ps 31:4). Clementine:
   *conversus sum in **aerumna mea**, dum configitur spina* — an Old Latin / Roman-Psalter shape,
   with *mihi* added. Both witnesses.
8. **@0444C** *Beatus qui tenebit et allidet parvulos **suos** ad petram* (Ps 136:9). Clementine:
   *parvulos **tuos**.* Material: the gloss has just made the little ones belong to the malignant
   spirits, which is what *suos* gives and *tuos* does not. Both witnesses print `suos`.

## 5. 7a″ — every marked span collated, INCLUDING the ones that agree

⭐ The list below is the deliverable, not the markers. Spans that agree with the Clementine
verbatim are recorded as such; a list of findings alone cannot be told apart from a report by an
agent that never looked.

**Agreeing exactly with the Clementine** (checked, no marker, no crux owed):
*Nive dealbabuntur in Selmon* (Ps 67:15) · *Domine, quis habitabit in tabernaculo tuo?* (Ps 14:1) ·
*Idoneos nos fecit ministros Novi Testamenti* (2Cor 3:6) · *Mihi mundus crucifixus est* (Gal 6:14) ·
*Virga tua et baculus tuus, ipsa me consolata sunt* (Ps 22:4) · *Quam dulcia faucibus meis eloquia
tua* (Ps 118:103) · *Dirupisti vincula mea* (Ps 115) · *Nolite locum dare diabolo* (Eph 4:27) ·
*Afferte Domino filios arietum* (Ps 28:1) · *In matutino interficiebam omnes peccatores terrae*
(Ps 100:8) · *Et non dixerunt qui praeteribant, Benedictio Domini super vos* (Ps 128:8) ·
*Quando autem factus sum vir, evacuavi quae erant parvuli* (1Cor 13:11) · *Commovebit Dominus
desertum Cades* (Ps 28:8) · *Qui parce seminat, parce et metet…* (2Cor 9:6) · *Ne polluatis terram
habitationis vestrae* (Nm 35:33) · *Attendite ne justitiam vestram faciatis coram hominibus*
(Mt 6:1) · *Cui vult nubat, tantum in Domino* (1Cor 7:39) · *Praeterit enim figura hujus mundi*
(1Cor 7:31) · the Numbers station lemmata *In Rethma · In Remmomphares · In Lebna · In Ressa · In
monte Sepher · In Arada · In Maceloth · In Thahath · Castrametati sunt in Thare · In Salmona ·
Transieritis Jordanem · Disperdite cunctos · Pluribus dabitis latiorem · Ibuntque confinia · Haec
erit terra · Decernite quae urbes · Postquam autem ille obierit · Accesserunt autem et principes.*

**Diverging, but NOT materially — crux only, no `[var:]`** (a `[var:]` is a public claim and
Pattern 14 reserves it for divergence that changes the sense):

- **@0439A** *Multitudinis credentium erat cor unum et anima una* — Act 4:32 has *Multitudinis
  **autem** credentium.* A dropped connective.
- **@0440A** *Ecce quam bonum et quam jucundum, habitare, fratres, in unum* — Ps 132:1 has
  *habitare fratres in unum*, i.e. only commas differ, and our TEI does not carry them at all
  (Gallica prints *fratres,* with the comma, the archive without: press variant, §2).
- **@0440B** *Noli altum sapere, sed sapere ad sobrietatem [Rom. XII]* — a **conflation**, not a
  variant: *Noli altum sapere* is Rom 11:20 (which continues *sed time*) and *sapere ad sobrietatem*
  is Rom 12:3. Migne's own siglum says Rom. XII. There is no single received verse to set against
  it, so no `[var:]` is possible; the note is the whole record. ⚑ The brackets round `[Rom. XII]`
  are Migne's own, printed in the running line, and pass through as printed.
- **@0440C** *Ego enim ostendam ei quanta oporteat eum pati pro nomine meo* — Act 9:16 has *ostendam
  **illi** quanta oporteat eum **pro nomine meo pati**.* Pronoun and word order; sense unmoved.
- **@0441A** *Sinistra ejus sub capite meo et dextera ejus amplexabitur me* — Ct 2:6 has ***Laeva**
  ejus … dextera **illius***. `Sinistra` for `Laeva` is a genuine Old Latin lexical divergence, but
  both words are "left hand" and nothing in the gloss turns on it. Both witnesses print it.
- **@0442A** *Domine, in te speravi non confundar in aeternum* — Ps 30:2 has *In te, Domine,
  speravi; non confundar…* Word order only.
- **@0442C** *Aqua alta consilium in corde viri* — Pr 20:5 has *Sicut aqua **profunda**, **sic**
  consilium in corde viri.* `alta` for `profunda` is the same sense; the correlative is abridged.
- **@0443B** *Corde creditur ad justitiam* — Rom 10:10 has *Corde **enim** creditur.*
- **@0443D** *Inter nos et vos magnum chaos firmatum est* — Lc 16:26 has *inter nos et vos **chaos
  magnum** firmatum est.* Word order.
- **@0445C–D** *Si quis scandalizaverit unum ex pusillis istis qui in me credunt* — Mt 18:6 has
  ***qui autem** scandalizaverit unum **de** pusillis istis.*
- **@0445D** *Omnis qui oderit fratrem suum, homicida est, nec habet vitam aeternam* — 1Jo 3:15 has
  *omnis qui **odit** fratrem suum, homicida est. **Et scitis quoniam omnis homicida non habet vitam
  aeternam in semetipso manentem.*** The second clause is the recension's own abridgment, not a
  variant reading; `oderit` for `odit` has no English exponent (Pattern 9's class).
- **@0446C** *Omnes enim fratres sumus.* ⚠ **Declined deliberately, and here is why.** The nearest
  received text is Mt 23:8 *omnes autem vos fratres estis* — second person, not first — but Migne
  cites **three** places at once (*Joan. X; Matth. XXIII; II Cor. XI*), and *sumus* stands in none
  of them. A `[var:]` would have to assert which verse is being diverged from, and I cannot show
  that. Addendum B: the crux is always available and always safe. The first person is the clincher
  of Rabanus' argument about schism and is rendered as printed.

**Non-scriptural spans checked in place** (the 19 italic `*usque ad*`, `*Montem.* · *Habitatores.* ·
*Jetebathae.* · *Reus,* · *Nubant.* · *Audivitque.* · *Locutus est ergo Dominus ad Moysen* ·
*omnis qui procedit in virtute Israel* · *contra fontem*): none is a scripture quotation to collate.
**All 19 italic `*usque ad*` in my range follow an `etc.`** and are the abridgment formula,
rendered "*as far as*" without exception — the `etc.` splice test returns 19 for 19, and no
look-alike hides inside an italic span. The instrument was checked before this was reported: a raw
`usque` grep over the three files returns **29**, of which only 19 are the formula. The other ten
are *ad septimum usque pervenias* @0441B (postposed *usque*, "as far as the seventh"),
*pervenientes usque ad montem altissimum* @0445A and *tendunt fines usque ad Sephama* @0445B —
three ordinary, unitalicised uses rendered by sense — plus *eousque* @0440B, *usquequo* @0441C and
@0442B, *usque eo* @0441D, and *Hucusque* @0442B and @0443C, which are different words and must not
be swept in with the formula.

## 6. Renderings, subjects supplied, and things a blind reader will stop at

- **The station lemmata.** *In X* is rendered **"At X"** throughout (At Rethma, At Remmomphares, At
  Lebna, At Ressa, At mount Sepher, At Arada, At Salmona, At Dibongad, At Asiongaber), *In finibus*
  as "In the borders" and *In desertum* as "Into the desert". ⚑ **Flagged for the merge:** chunks
  0022 (another stint) carries the same construction from VERS. 5 onward and may have chosen
  differently; this note exists so the merge can normalize rather than guess.
- **@0441B `habenti`.** Rendered "for him that hath power" — a flat dative, which does not construe
  and is not meant to. The Vulgate genitive is in the `[var:]` and nowhere in the running text.
- **@0442A `*Jetebathae.*`** Migne prints the lemma in a genitive/dative form where the station is
  *Jetebatha* (Nm 33:33) and his own gloss two words later reads *Jetebatha interpretatur bona*.
  A proper name's case ending has no English exponent (Pattern 9's class), so it is rendered
  "*Jetebatha.*" and logged here rather than marked.
- **@0441A `Seman`.** The lemma is *Hesmona* (VERS. 29) and the Origen gloss beneath it says
  *Inde ad **Seman** venitur*. Migne's; rendered as printed, no reconciliation attempted.
- **@0440D `Methcha`** against the Vulgate's *Methca* (Nm 33:28); Migne's spelling, both witnesses,
  rendered as printed.
- **@0442B `decimas octavas continet mansiones`.** Rendered literally, "contains the eighteenth
  stations". It does not read well; *decimas octavas* is an ordinal where the sense wants eighteen,
  and "contains eighteen stations" would be a silent repair of Migne's own Latin. Both witnesses.
- **@0442D–0443A `Alius enim in valle, alius in campis, alius moritur in monte…`.** The verb
  *moritur* stands only in the third member and governs all four. English cannot open a series with
  no verb, so "dies" is placed in the first member and the printed position is recorded here.
- **@0443A `Aaron, plangitur,`.** Migne prints a comma between subject and verb. An English comma
  in that slot is simply an error rather than a preserved oddity, so it is not carried; the printed
  comma is recorded here instead. Every sentence-level mark in the range is carried 1:1 (colons
  33/33, semicolons 13/13, question marks 2/2, exclamation 1/1 on chunk 0023; 12/12, 8/8 on 0024;
  4/4, 3/3 on 0025 — counted with markers stripped).
- **@0446A `VERS. 28.` printed BEFORE `VERS. 26.`** — verified on the plate, both columns of p.228.
  Migne's ordering, reproduced as printed and not reordered (and `VERS. 26.` in fact addresses
  Nm 35:33). Nothing machine-readable consumes a `VERS.` number.
- **@0446A** *quia humanum genus peccando sibi mortem intulit post mortem veri sacerdotis … accepit*
  — two finite verbs with no connective and no mark between them (plate confirms: no comma after
  *intulit*). The English carries the asyndeton rather than supplying a semicolon.
- **@0445D — a full stop our TEI lacks.** The archive plate prints `… nec habet vitam aeternam
  (I Joan. III). Hic secundum Exodum …`; our TEI runs the two sentences together with no mark. The
  English carries the stop, because English prose cannot run them together, and the divergence is
  filed in the pending-patch file — ⚠ marked there as resting on **one** witness, since I did not
  fetch Gallica for a full stop and a period is exactly the mark ink adds and removes most readily.
- **@0446D `complacet; sibi solemnitatem agit`.** Migne's semicolon between the two halves of one
  clause; carried, per Pattern 8, though it reads oddly.
- **Subjects supplied.** *venitur* / *applicatur* impersonal passives are rendered "one comes",
  never "he comes", except where Migne himself has a personal subject (*venit in Gadgad* @0441D,
  *applicuerunt* @0442B). At 0444A–B the subject of *transit … abscedit … non invenitur* is
  **anima** from the *Ubi enim … anima transierit* clause above, so the English carries "it", not
  "he" — the same slot that produced Ruth's worst site.
- **Vocabulary axes.** *turba* → **crowd** and *multitudo* → **multitude**, and they stand four
  words apart at 0439A (*omnem turbam credentium* … *Multitudinis credentium*), which is exactly the
  pair the axis exists for. *gentes* → **nations** at 0442B (*multitudinem gentium*, generic, no
  Judaei/gentes opposition in view) but → **Gentiles** at 0446C, where Rabanus sets *credentium
  Judaeorum* against *doctori de gentibus* in one sentence; *gentilis* → **Gentile** @0446B per the
  axis. *mysterium* → mystery (0441C, 0443B) and *sacramentum* → sacrament (0445D), 1:1.
  No *natio*, no *daemonium*, no *ethnicus* in the range. ⚑ Instrument checked before reporting:
  a raw `\bturba` grep in my range also catches nothing spurious, and `natio` matches only
  *interpretatur*-type strings, i.e. none.
- **Register.** The commentator's own verbs are not archaised (*dicit* → "says", *ait* → "says");
  `-eth` forms appear only inside quoted scripture (*layeth*, *hateth*, *soweth*, *doth*).
  *thou/thee/thy* renders singular address throughout (0439C *Vides*, 0440B–D *Venisti · ascendisti
  · confiteris*, 0441B *super te · locum tuum*, 0441C *fueris eruditus · scieris*, 0441D–0442A
  *transieris · applicabis*, 0442B *venias · te*); *you* renders the plurals at 0444C
  (*Transieritis · dabitis*), 0446A (*Ne polluatis*) and 0446B (*Attendite … faciatis*).

## 7. Negations — named host by host (test 2 / 2a)

Every printed negative in the range, with the single Latin word it attaches to:

`non superbiat` @0440B → *superbiat* ("may not be proud") · `nec … vidit, nec … audivit` @0439D →
the two verbs · `nec ab isto unquam recedit` @0440A → *recedit*, and **both** negatives are carried
("nor does he ever depart"), not collapsed into one English "never" · `non debemus esse otiosi`
@0440D–0441A → *esse otiosi* · `ne … se ingerat` @0440C → *ingerat* · `nec minimum quidem …
praetereat` and `nec unum iota, aut unus apex … otiosus` @0441C → *praetereat* and *habeatur* ·
`Non enim possumus … nisi … interfecerimus, nec parcat manus nostra` @0441C–D → *possumus*, then
*parcat* · `nec decorae esse nec plenae` @0441D → the two predicates, **not** the verb ·
`non nisi post tentationum experimenta venitur` @0442A → *venitur* · `non confundar` @0442A →
*confundar* · `Et non dixerunt` @0442B → *dixerunt* · `non ponuntur` @0442B → *ponuntur* ·
`nec aliter expedit` @0442C → *expedit* · `non desperemus salutem, sed iterum pugnemus` @0443A →
*desperemus*, and the `sed` correlative confirms the host · `quae non licet homini loqui` @0443B →
*licet* · `ne audiamus` @0443C → *audiamus* · `quamvis non invenerimus … non dubitamus` @0443C →
*invenerimus*, then *dubitamus* (⚠ the archive plate prints `nou` for the first of these; refuted
at Gallica, §2 — had it been believed, the English would have lost a negative in a concessive
clause where nothing downstream would have caught it) · `nisi contempta fuerint … non possumus`
@0444A → *contempta fuerint*, then *possumus* · `qui non inveniebatur` and `non invenitur in ullo
saeculari actu` @0444A–B → *inveniebatur*, *invenitur* · `non invenitur ejus memoria` @0444B →
*invenitur* · `sine fine perseverat` @0444B → *perseverat* · `Nihil enim tam periculosum` @0444B →
*periculosum* · `ne … pervadantur` @0446B → *pervadantur* · `ne … perdatur` @0446B → *perdatur* ·
`ne … detrimentum patiatur` @0446C → *patiatur* · `Non debet esse schisma` @0446C → *esse schisma* ·
`nec habet vitam aeternam` and `nec revocatur … nisi` @0445D–0446A → *habet*, *revocatur* ·
`Et nisi … occidantur … nullo modo mundabitur, nec … habitabit` @0446A–B → *occidantur*,
*mundabitur*, *habitabit*.

⚑ **Test 2a trigger population** (a negative on a verb with a quantifier or correlative adjacent)
fires at three sites in the range, and all three were proved from the structure, not from what read
well: `nec decorae esse nec plenae` @0441D (the correlative `nec … nec` puts both negatives on the
**predicates**, not on *videantur*); `nec minimum quidem mandatum praetereat` @0441C (the negative
is on the verb, and `quidem` intensifies *minimum* — "not even the least"); `non nisi post
tentationum experimenta venitur` @0442A (the `non nisi` is a unit governing the whole temporal
phrase, not the impersonal verb alone, hence "not save after").

## 8. Test 4 — does the English ASSERT what he asserts?

Read back paragraph by paragraph with the counts already clean. Two places where a smooth English
sentence would have said something Migne does not, both left rough on purpose:

- @0441B the Ecclesiastes citation (§4.2): the smooth reading is the Vulgate's genitive, and the
  smooth reading is the one that is not on the page.
- @0442B *decimas octavas … mansiones* (§6): "eighteen stations" is the smooth reading and is a
  repair of Migne's ordinal.

And one place where the printed text is odd and is **not** a defect: @0442D *alius in monte, alius
in monte montis* — "on the mountain of the mountain" is Origen's own figure for a further ascent,
not broken type; both witnesses, no marker.

## 9. What I did NOT do

- No `[sic:]` anywhere. Fourteen of fifteen candidates were the archive copy's ink and the
  fifteenth is our own file's; neither class licenses a public claim against Migne's type.
- No conjecture (`[cj:]`). No site in the range meets Pattern 18's bar: nowhere does a real printed
  word give faithful English that asserts something the author did not. `habenti` @0441B comes
  closest and is handled by `[var:]`, because the rival reading is a **received text**, not a
  conjecture of ours.
- No `[ed:]`. Nothing in my range is text the digitization lost that the plate carries, apart from
  the two punctuation sites in the pending-patch file, which are patch questions, not holes.

---

