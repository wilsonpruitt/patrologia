# 8949 *Liber Exodus* — cruces, chunks 0035–0039 (cols 0276B–0288B)

Stint 0035–0039, 2026-09-08. CAPUT XXVII–XXXII: the court of the tabernacle, the priestly
vestments, the consecration, the altar of incense, and the golden calf. Every column on which a
marker stands was opened at the plate (Gallica `bpt6k5505319w`, leaves **f138–f144**, printed
corner numbers read first on all seven, both columns of every leaf). Plate reads are recorded in
`data/briefs/8949-PLATE-READS-0035.json`; structural divergences in
`data/briefs/8949-PENDING-TEI-PATCHES-0035.md`.

**Span count.** The brief declares **266** marked spans for this range. My own Latin counts
**266** italic spans, and **266 again counted paragraph-bounded**, with **zero guillemets** in all
five chunks — consistent with the brief's statement that Exodus's single `«` stands at 0192A,
outside my range. Per-chunk: 56 / 81 / 23 / 64 / 42. The totals agree, and the paragraph-bounded
recount found no unmatched delimiter anywhere, so they agree for the right reason.

**Marker parity.** Column anchors 8 / 16 / 4 / 10 / 9 and notes 30 / 47 / 16 / 31 / 19, each
identical to the Latin twin in count *and in order*, and each matching the chunk's own
`noteCount`. Paragraph counts 32 / 51 / 15 / 41 / 26, matching the Latin 1:1. Question marks
exact against the twin in all five (0 / 0 / 0 / 1 / 3, marker content excluded). **Zero
em-dashes** in all five chunks.

---

## 1. ⭐ THE HEADLINE — THE ARCHIVE COPY REPAIRED MIGNE THREE TIMES IN THIRTEEN COLUMNS

The 0005–0009 stint's finding was that four apparent defects of Migne's were **ours** — Corpus
Corporum's digitization, not the plate — and it fired zero `[sic:]` on that ground. **This range
ran the same experiment and it came out backwards.**

| col | our twin | archive copy | THE PLATE | verdict |
|---|---|---|---|---|
| 0277A | `Sicuttibi` | `Sicut tibi` | **`Sicuttibi`** | Migne's. `[sic:]` fired |
| 0283C | `snpra` | `supra` | **`snpra`** | Migne's. Carried, no marker (§4) |
| 0284B | `uque ad` | `usque ad` | **`uque ad`** | Migne's. `[sic:]` fired |

Three times, our twin was faithful and the *archive* was the corrupt witness — and corrupt in the
direction that looks like a correction. That is precisely the jbig2 symbol-substitution mechanism
`PL113-WITNESS-ENCODING.md` describes, running in the repair direction: a 1-bit
symbol-substituting codec replaces a rare, broken shape with the frequent well-formed word its
symbol dictionary already holds. 8957 @0825A recorded one such repair; this is three in one stint.

⛔ **The operational consequence, and it is the one thing from this stint worth carrying
forward.** I consulted the archive's OCR text layer across the whole range **before** fetching a
single Gallica leaf, because the common brief calls it "nearly free." It is free, and on this
range it was **wrong at every letter-level site that mattered** — and it also manufactured two
false alarms of its own (`Vers. 25` for VERS. 35, `lib. X Moral.` for lib. I Moral., both at
0285C) that cost a plate check each to refute. Had I treated its agreement as corroboration I
would have withdrawn three genuine defects of Migne's as digitization noise; had I treated its
disagreement as evidence I would have filed two false patches against a faithful twin. **On this
book it is a search index, not a witness.** Both directions of the twin-vs-plate error are now
attested in this work, one stint apart, which settles the general rule negatively: **neither our
twin nor the archive may be trusted at a letter without the photograph.**

---

## 2. `[sic: …]` — two markers, both plate-confirmed, both non-words

### 2a. 0277A — `Sicuttibi` for *Sicut tibi*

Migne prints `VERS. 8. — *Sicuttibi in monte.* (BEDA, ibid.)`. The fusion is unambiguous on the
plate at 4× — normal letter spacing throughout the fused run, clear word space either side — and
the Clementine reads *sicut tibi in monte monstratum est* (Ex 27:8), so this is broken type, not
a variant reading. Pattern 10 governs: the run is carried whole.

Rendered `*As to thee [sic: Sicuttibi] in the mount.*` The marker takes **no second italic
marker**, because it sits inside an already-italic lemma and nested italics are not expressible
(Pattern 10). The English renders the sense the fused form is defective for, per the 2026-09-05
amendment to Pattern 7 — a lemma fragment, so no verb, negation or conjunction is quarantined
and 7a⁗ has nothing to catch.

### 2b. 0284B — `uque ad` for *usque ad*

Migne prints `(ID.) Possumus haec altaria interpretari, etc., | uque ad potest accipi.` with the
marginal band letter `B` standing beside the line. The `s` of *usque* is simply absent; the rest
of the word is clean and the surrounding spacing normal.

Rendered `*as far as* [sic: *uque ad*] it can be taken.` — the sense first, Migne's type inside
the marker, again per the amendment. ⚑ This one is worth noting as a class: *usque ad* is the
abridgment formula that runs **102 times** through my five chunks alone, so the defective
instance is invisible by eye in a page of identical formulas and is found only by reading the
plate against the twin word for word. **A frequency argument would have buried it, not found it.**

---

## 3. `[var: …]` — eight markers, ranked by what the gloss rests on

Every one stands on a column I read myself. Each is cited from
`sources/vulgate/clementine-flat.txt` by book chapter:verse, not from recollection.

### ⭐ 3a. 0286A — Migne's citation names Psalm LXII for words that are Psalm XXVI, and HIS OWN NEXT CITATION PROVES IT

**The best finding of the range, because the control is on the same column.** Migne prints:

> VERS. 2.-- *Beseleel,* etc., qui interpretatur *in umbra Dei.* q. d. *Dominus illuminatio mea
> et salus mea quem (Psal. LXII).*

The words are **Ps 26:1** — *Dominus illuminatio mea et salus mea : quem timebo?* — and the
lemma breaks off at *quem*, exactly where the citation intrudes. Eleven lines below, at 0286B,
Migne quotes **the second half of that same verse** — *Dominus protector vitae meae; a quo
trepidabo* — and cites it correctly as **(Psal. XXVI)**.

So one verse is cited twice on one column, once right and once wrong, and the reader who trusts
the printed reference is sent to a psalm that does not contain the words. This is the
✓-against-the-wrong-address class the 0015–0019 stint opened (0227D *Amos IX* for Jdt 16:3,
0230B *Isa. LXV* for Rom 10:21), and it is the strongest instance yet because **no external
witness is needed to see it**: Migne refutes himself in the same paragraph.

⚑ **Plate-confirmed, and it had to be.** Our twin reads `LXII`; the archive's OCR reads `liii`.
Neither is XXVI, so the citation was wrong on any reading — but *which* wrong number Migne
printed is a fact about the plate, and the plate settles it: **LXII**, in small caps, unambiguous
at 5×. Marker fired on the plate's reading.

### ⭐ 3b. 0283A — 1 Tim 3:6 without its *ne*, and the purpose clause loses its conjunction

Migne prints *Non neophytum in superbiam elatus, in judicium incidat diaboli (I Tim. III)*
against the Clementine's *Non neophytum : **ne** in superbiam elatus, in judicium incidat
diaboli*. The dropped word is not a negation — it is the **conjunction that governs the mood of
everything after it**, 7a⁗ question 3 exactly. Without it, *incidat* is a subjunctive with
nothing to subordinate it, and the sentence as printed reads as an assertion that the neophyte,
lifted up in pride, *does* fall into the devil's judgment — the opposite of Paul's warning, and
the opposite of what Bede is arguing (that the newly baptized must *not* be ordained at once).

Rendered as printed — *"Not a neophyte, lifted up into pride, he fall into the judgment of the
devil"* — which does not construe smoothly in English either, and that is correct: the marker
carries the Clementine's reading and the gloss's argument survives beside it. **No repair was
made inside the translation.**

### ⭐ 3c. 0283A — the words are John 14, the citation says John IV

Migne prints *Ego in patre et pater in me est: et qui videt me, videt et patrem (Joan. IV)* — a
conflation of **Jn 14:10–11** (*ego in Patre, et Pater in me est*) with **Jn 14:9** (*qui videt
me, videt et Patrem*), cited as the fourth chapter. Plate-confirmed, citation included. Same
class as 3a; ranked below it only because Migne supplies no internal control here.

### 3d. 0288B — Rom 11:33 *inscrutabilia* for *incomprehensibilia*, with an added *enim*

Migne prints *Quam inscrutabilia enim sunt judicia ejus:* against the Clementine's *quam
incomprehensibilia sunt judicia ejus*. A lexeme substitution in the verse that **closes the whole
chapter of the golden calf**, adduced by Augustine as the answer to why God punished a people
Aaron had led astray. Both the substituted word and the intrusive *enim* are plate-confirmed.

### 3e. 0287A — Ex 32:6 *comedere* for *manducare*

The verse lemma of the gloss that follows it (*Esus potusque ad lusum impulit*). Lexeme
substitution in a verse lemma, plate-confirmed.

### 3f. 0287A — Sirach 19:1 in the present where the Clementine has the future

Migne prints *Qui modica spernit, paulatim decidit* against *qui spernit modica paulatim
**decidet***. The maxim is adduced to prove that small negligences grow into great ones, and the
gloss's own next sentence is a present-tense generalization (*Si enim curare parva negligimus…
etiam majora audenter perpetramus*), so Migne's present is doing work — but it is not the
received text, and the tense is the whole force of a sentence about consequences. Marker records
the future. Word order also reversed in the first two words.

### 3g. 0287D–0288A — Ex 32:25 *in ignominiam* for *propter ignominiam*

Migne prints *Spoliaverat enim eum Aaron in ignominiam sordis et inter hostes, etc.* against
*spoliaverat enim eum Aaron propter ignominiam sordis, et inter hostes nudum constituerat*. The
preposition changes the relation from cause (*by reason of* the ignominy) to end (*unto* the
ignominy) — which is not nothing in a gloss whose entire subject is **how much of the guilt is
Aaron's**. Plate-confirmed across the column break; see §6 on the break itself.

### 3h. 0286D — Mt 22:40 *tota lex* for *universa lex*

Migne prints *in quibus scilicet tota lex pendet et prophetae*, woven into Augustine's sentence.
Lexeme substitution; the least consequential of the eight, and marked because it is a verse
quoted as a proof-text and the collation is the deliverable.

---

## 4. ⚠ `snpra` at 0283C — Migne's defect, carried, and DELIBERATELY not marked

**The judgment call of this stint, and the merge should feel free to overturn it.**

Migne prints `(BEDA, ubi snpra, cap. 11.)` at 0283B–C. Plate-confirmed at 5×: the `n` is
unmistakable, and the `u` of `ubi` on the same line gives the control. It is a genuine non-word
and genuinely his — the third of the three sites where the archive silently repairs him.

**Why no `[sic:]`.** The run sits inside one of Migne's own bibliographic citations, and our TEI
happens to wrap that citation in `<hi>` rather than `<note>` (see the patches file, §"STRUCTURAL"),
so it reaches the English as body italics. Following the peer's 0262A precedent I carried the
whole citation **verbatim and untranslated, with the column anchor inside it**, exactly as an
`[n: …]` would be carried. And `[n: …]` contents are never marked: they are Migne's apparatus,
and Pattern 12 was written for type *carried through under Pattern 7 or Pattern 10* — that is,
for the author's text, not for a locator.

**Why it is arguable.** The word appears on the English page and a reader cannot tell it from our
own error, which is the exact failure Pattern 12 exists to close. The counter-argument is that
`uque ad` in §2b got a marker eleven columns later, and the only principled difference is that
*usque ad* is body text the English translates while *ubi supra* is apparatus the English does
not. I think that difference is real and load-bearing, but it is thin enough that I am flagging
it rather than burying it.

▶ **If the merge promotes those three citations to `<note>` (patches file), this question closes
by itself** — the run becomes `[n:]` content and is unmarkable by rule.

---

## 5. Candidates raised and REJECTED, with the reason

A report that lists only findings cannot be told from a report by a stint that never looked.

- **0279A `justitae`** — raised from our twin as a non-word (*justitiae*), **withdrawn at the
  plate**: Migne sets the **æ ligature**, `justitæ`. The divergence existed only in our
  transliteration of a ligature, which is the `maechaberis` class of ADJUDICATIONS §3 exactly.
  Pattern 9. No marker, no patch.
- **0276D `Craticulumque`** for the Clementine's `Craticulamque` (Ex 27:4) — plate-confirmed, and
  a real divergence, but the difference is **grammatical gender** and English has no exponent for
  it: "gridiron" is the same word either way, and Migne himself prints the feminine
  *craticulam* / *craticula* at 0283D, seven columns later, in the same book. Pattern 9's
  gender clause governs; a `[var:]` whose content read "Vulg. *Craticulamque*, feminine" would be
  apparatus noise on a point no reader can see. **Declined, recorded.**
- **0279B `catenulas auri purissimi`** for `catenulas ex auro purissimo` (Ex 28:14) —
  plate-confirmed. A genitive for a prepositional phrase; the English is "little chains of purest
  gold" on either reading and no gloss rests on it. **Declined, recorded.**
- **0282A–B `tunicas parabis lineas`** for `tunicas lineas parabis` (Ex 28:40) — plate-confirmed,
  and it recurs three times in the inventory (0282B twice, again at 0282B in chunk 0037), so it
  is Migne's settled habit rather than a slip. **Transposition only. Declined, recorded.**
- **0278D `Ipsa quoque textura … ac purpura`** — the brief flagged this span as not found in the
  Clementine. It is found: **Ex 28:8 reads `Ipsa quoque textura`**, word for word, and the sole
  difference is `ac purpura` for `et purpura`. The mechanical search failed on the conjunction.
  **Declined; flag explained rather than left open.**
- **0283B `Superexaltat misericordia judicium`** without the Clementine's `autem` (Jas 2:13) —
  plate-confirmed. A dropped connective inside a proof-text quoted as a tag. **Declined.**
- **0277C `Columnasque habebit`** for `columnas habebit` (Ex 27:16) — an added enclitic.
  **Declined.**
- **0286C `exisse`** for `exiisse` (Lc 8:46) — attested syncopation, Pattern 9. **Declined.**
- **0285B `Onychen`** for `onycha` (Ex 30:34) — a Greek accusative in a different declension
  pattern, not a different word. **Declined.**
- **0276C `VLRS. 3.`** — a worn small-cap `E` on the plate in a structural label. Section labels
  normalize in English (Pattern 9) and the Latin column preserves what our twin has. **Declined,
  no patch.**
- **0276B `VERS 1.` without the period after VERS** — Migne's, on **two** witnesses (plate and
  archive agree). The 0201C rule. **Never patch, never mark.**
- **0286B `VERS. VI.`** — Migne's own Roman numeral in small caps, the only one in the range, and
  our twin's capitals are the right rendering of small caps. **Declined.**
- **0285C `VERS. 35.` and `(GREG., lib. I Moral., …)`** — two false alarms raised by the archive's
  OCR (`Vers. 25`, `lib. X`) and **refuted at the plate; our twin is right in both.** Recorded
  because they are the cost side of §1's ledger.

---

## 6. Cruces that changed nothing on the page but are worth the record

- **0285C `videant`.** Migne prints *quamvis quatuor elementa haec quatuor **videant**
  significare* — an active where the sense plainly wants the passive *videantur* ("although these
  four seem to signify the four elements"), which is how every reader will take it and how the
  following clause-by-clause mapping of spice to element requires it to be taken. `videant` is a
  real Latin form in a real grammatical slot, so Pattern 12 has nothing to wrap and Pattern 18's
  test is not met either — the faithful English is *hard*, not *misleading*. **Rendered actively
  as printed** ("although these four may see the four elements to signify"), conjecture here.
  ⚑ My first draft read "seem to signify," which is a silent repair of exactly the kind 7a names,
  and I caught it only on the reread against the Latin — recorded because the rendering that
  produced it is the one that feels most obviously correct.
- **0286C `de quo dicitur.`** A **full stop** where a colon is wanted, immediately before the
  quotation *Et virtus Altissimi obumbrabit tibi.* Plate-confirmed, and the archive prints it the
  same way. Preserved as printed (Pattern 8, never delete).
- **0284C `imponitur`** and **0285C `incensum sit`** both end their paragraphs with **no terminal
  full stop**. Migne's, plate-confirmed. Pattern 8 forbids supplying one; the English stops where
  he stops.
- **0282A `Proh dolor! autem`** — the exclamation mark falls *before* the postpositive *autem*.
  Preserved; the English carries the mark ("But, alas for the grief!") without re-punctuating.
- **0287B `Hi sunt dii tui`** in Augustine's gloss against the lemma's **`Isti sunt dii tui`**
  three lines above (Ex 32:8 has *Isti*). Both render "These are" and English has no exponent for
  the distinction. **No marker**; recorded so a later sweep does not read the English as a
  conformation.
- **0287D–0288A.** The plate breaks *igno-|miniam* across the column, and our twin's `[0288A]`
  anchor sits **inside the word**. That is the faithful encoding of a column break, not a Pattern
  10 split run and not a `[d:]` — the 8956 hyphen class, checked and cleared at the plate.
- **0288B `VERS. 31.`** — Migne's verse number for *Aut dimitte eis* is **correct**; the
  Clementine also numbers *aut dimitte eis hanc noxam* as Ex 32:31. An off-by-one I expected to
  find and did not.

---

## 7. Conventions this stint fixed, and why

Inherited from `cruces-0025.md` and followed without exception: **`praeceptum` = "precept",
`mandatum` = "commandment"** (ADJUDICATIONS §1; my range uses *praeceptum* only, at 0278A and
0286D, and both are rendered "precept"); *doctores* = "teachers" and *rector* = "ruler", matching
chunks 0013–0028; Pattern 17 throughout.

⭐ **`cruces-0030.md` did not exist for most of this stint, and landed just before I closed.**
My launch brief told me to follow its list; for the whole translation I could not, so every term
below was fixed independently. **I reconciled against its §6 table before closing, and the
agreement is close to total** — which is itself a useful datum, since two agents who could not see
each other converged on *tabernaculum* = tabernacle, *basis* = base (both of us for the
*fundamentum* etymology), *byssus* = fine linen, *hyacinthus* = hyacinth, *coccus bis tinctus* =
scarlet twice dyed, *purpura* = purple, *lignum setim* = setim wood, *vectis* = bar, *lamina* =
plate, *corona* = crown, *tentorium* = hanging, *velum* = veil, and ⭐ ***caput* = head**, which we
each chose over the idiomatic "capital" for the same reason: the gloss reads the pillar-head as the
mind that governs (0275C there, 0277B here).

⚑ **One real conflict, found and fixed.** Its table fixes ***tabula* of the Law = "tablet"**
(reserving "board" for the tabernacle's *tabulae*). I had used "tables" at four sites in 0039
(0286D ×3, 0287C ×1). **Swept to "tablet" before closing.** Had cruces-0030 not landed in time,
this range would have shipped the Decalogue's *tabulae* under a different English from CAPUT XXV's
— the 11551 split exactly, one chapter apart.

⚑ **One apparent conflict that is not one.** Its table fixes *calamus* = "branch" (of the
candlestick, Ex 25:31ff). At 0285A my *calami* is Ex 30:23's **spice** — *Calami. Cinnamomi est
virgultum* — a different object under the same noun, rendered "cane". Two senses, two Englishes;
do not sweep one onto the other.

- ⭐ **`superhumerale` = "superhumeral", NOT "ephod."** The launch brief's rule decided this:
  prefer the rendering that keeps a gloss's own argument intact. Bede's exposition at 0278C opens
  ***Quia in humeris onera portamus*** — "because on the **shoulders** we bear burdens" — and the
  whole gloss is an etymology of *super-humerale* from *humerus*. "Ephod" is the idiomatic English
  and the Douay's word, and it shares no root with "shoulder," so under it the gloss explains
  nothing. This is the 11551 *stylus*/*epistylium* case exactly. "Superhumeral" is attested
  English in vestment literature, and it keeps the argument visible.
- **`rationale` = "rational"** (Douay's term, and the corpus already uses "rational" for *ratio*
  in chunks 0002, 0007, 0011, 0026, so the tie to reason is live in this book's English).
  "Breastplate" was considered and rejected for the same reason as "ephod": Bede at 0279C glosses
  it by what the priest must **think** (*congruant studiose cogitare*).
- ⭐ **`capita` of pillars = "heads", not "capitals"** (0277B). Bede's gloss turns on the pun:
  *Capita non argentata, sed tota argentea … **Sicut enim membra sine capite vivere nequeunt***.
  "Capitals" is the correct architectural English and it silently kills the argument, since
  "capitals" and "head" share no visible root for a reader. Douay uses "heads" at Ex 38:17.
  ⚑ My first draft had "capitals"; caught on the reread.
- **`hyacinthus` = "hyacinth" throughout**, for both the colour (0280B, 0281C) and the gem
  (0279B). Douay's "violet" is better English for the colour, but Migne uses one word for both and
  the 0281C gloss (*spe coelestium praemiorum, quam hyacinthus significat*) depends on the colour
  and the stone being the same thing.
- **`thymiama` = "incense", `incensum` = "incense"** — Migne equates them himself at 0284A
  (*Incensum vel thymiama*), and that one site is rendered "Incense, or *thymiama*," keeping the
  Greek-derived word in italic **only there**, because that clause exists to equate two words and
  collapsing it would leave "Incense, or incense." Elsewhere both are "incense" and *altare
  thymiamatis* / *altare incensi* are both "the altar of incense," which is what they are.
- **`balteus` = "belt", `cingulum` = "girdle"** — they stand five lines apart at 0282B–C and need
  to stay distinct.
- **`vitta` = "fillet"** (0279B, 0281C); **`ora` = "border"**; **`capitium` = "head-opening"**
  (0280C), chosen over Douay's "hole for the head" because the gloss immediately reads the
  *capitium* as the **neck** (*Talis ora collum sacerdotis per gyrum vestit*) and "head-opening"
  keeps that anatomy.
- **`tiara` / `cidaris` / `mitra` = "tiara" / "cidaris" / "mitre"**, all three kept distinct at
  0282A, where the gloss exists to equate them (*Tiara quae cidaris et mitra vocatur*).
- **`tentoria` = "hangings"** (Douay); **`columnae` = "pillars"**; **`bases` = "bases"** rather
  than Douay's "sockets", because Bede closes 0278A on *timore Dei velut **aenea basi***
  stabilierit — a base to stand on, not a socket to sit in.
- **`opus polymitum` = "embroidered work", `polymitarius` = "embroiderer"** — paired at 0286A,
  where David's title is derived from Beseleel's craft (*polymitarii nomen, quia Beseleel opere
  polymito tabernaculum construxit*).
- **`receptacula ignium` = "receptacles of fire"** (0276C), not the technical "firepans," because
  the gloss's turn is that the teachers themselves *receptacula ignium fiunt*.
- **`usque ad` = "*as far as*"**, in italic, following chunks 0025–0029 exactly. It occurs **102
  times** in my five chunks and is never varied.
