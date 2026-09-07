# 8961 *Liber Leviticus* — cruces

*Glossa ordinaria* on Leviticus, Anselm of Laon and his school. PL 113 cols 0295D–0380A, 30 chunks,
32,212 Latin words, translated in six stints on 2026-09-07. **Merged from six stint files. The
concatenation is the easy half; what follows is the reconciliation, which is the required step.**

Apparatus as shipped: **90 `[var:]` · 3 `[sic:]` · 1 `[cj:]` · 0 `[ed:]` · 0 `[d:]`.** Every marker
stands on a column read at Migne's plate (`plate-gate.mjs 8961` green); the whole book was collated
on **both** PL 113 printings, corners read first on every leaf. 22 TEI patches were filed and
applied — all of them digitization losses, none of them Migne's defect, so none carries a marker.

---

## Work-wide conventions — what was reconciled at the merge, and what was left alone

### ⛔ `conversatio` — ONE real drift, and it went THREE ways

Six agents who could not see each other produced three renderings of one recurring term:

    manner of life   20 sites   stints 0000, 0005, 0020, 0025
    conversation      6 sites   stint 0010 (5) + stint 0020 (1)
    converse          4 sites   stint 0015

Every site was checked against the Latin before anything moved: all thirty render *conversatio* or
its verb, and none is a different word. **Swept to "manner of life" at 29 of the 30 sites.** The
majority reading is also the right one for a reader: *conversatio* is manner of life, and both
"conversation" and "converse" are false friends that a general reader will take as talk. This is
the 11551 *epistylium* class — a term the book uses as a technical one, split across stints so that
a reader cannot see two passages using one word.

⭐ **The last stint had already called it.** Its own vocabulary table (§ chunks 0025–0029, table 1)
reads *conversatio* | manner of life | *"~20 occurrences; never 'conduct' or 'converse'"* — written
before it could see that two peers had done exactly that. A stint that fixes its vocabulary and says
so in writing is what makes a merge decidable; without that line this would have been three defensible
renderings and no way to choose.

⚑ **One site is deliberately NOT "manner of life" and must stay as it is:** @0329C (chunk 0012),
*qui cum peccatoribus **conversantur**, ad **conversationem**, non ad consensum vel imitationem.*
Migne repeats the root, and the sense is association, not manner of life. Rendered **"who associate
with sinners, for association, not for consent or imitation"** — the figure kept, the sense right.
Sweeping this one would have produced "who associate with sinners, for the manner of life", which
does not construe.

### ✅ Checked for drift and found CONSISTENT — recorded so nobody re-sweeps them

- **`mundus` / `purus` do not collide, and Leviticus is the book where they would.** *mundus* is
  **clean** (150 sites, all six stints), *purus* is **pure / purely / purity** (10 sites). The
  positive control is @0366A, where Migne sets both in one clause — *purissimum oleum, id est
  mundam vitam* — and the English keeps them apart.
- **`usque ad`**, the abridgment formula, is **"as far as"** at all 244 sites. ⚠ A raw count turns
  up six "up to" / "down to" and they look exactly like drift: every one is an ordinary preposition
  (*comes down to the legs*, *bent down to the earth*, *stirred him up to repent*). **Count the
  construction, never the word.**
- **The exposition tags.** `Mystice`, `Allegorice`, `Moraliter`, `Tropologice` are capitalized where
  they open a sentence and lowercase where the English sentence puts something before them. ⚠ This
  also *looks* like drift — stint 0005 has one "Mystically" and one "mystically" — and it is not:
  @0310D the translator moved *autem* forward ("**But** mystically…") and @0315C left *quoque* in
  place ("**Mystically** too…"). Both are ordinary sentence casing, and this is the
  `ALLEGORICALLY.`/`ALLEGORICAL.` split of 11063 **not** happening.
- **`praeputium` is rendered two ways on purpose.** @0345B *qui in praeputio adhaerent Deo* is the
  Pauline state and is **uncircumcision**; @0374D *vitiorum polluti praeputio* is the concrete
  metaphor and is **foreskin**. Two senses, correctly distinguished, not a drift.
- **`oblatio` / *offering*, `hostia` / *victim*, `concupiscentia` / *concupiscence*,
  `desiderium` / *desire*, `libido`+`luxuria` / *lust*** — all consistent across the six ranges.
  ⚠ "offering" outnumbers Latin *oblatio* in every stint alike, because it also renders *munus* and
  the bare sacrificial nouns; that is a shared convention, not a divergence.
- **The leprosy vocabulary of Lv 13–14** was fixed by the stint that owned both chapters and is
  tabulated below (§ chunks 0010–0014, table 1): *volatilis* = **flying**, not "spreading";
  *effloruerit* = **flower forth**, because the gloss @0333D–0334A is built on the flower;
  *morticinum* = carrion against *cadaver* = carcass. Nothing outside that range competes with it.
- **The feast, jubilee and valuation vocabulary of Lv 23–27** was fixed the same way by the last
  stint (§ chunks 0025–0029, table 1) and follows the earlier stints' *sicles* / *obols*. One
  deliberate exception is recorded there: *magisterium* takes two English words, because Migne
  has two senses (mastership @0371B, teaching @0380A).

### ⚑ What the two printings did to this book — the finding that outlives the stints

**Neither copy of PL 113 may be trusted alone, and this run caught both lying, in opposite
directions, inside one book.**

- **Gallica** — our TEI's exemplar, and the better witness for non-Latin type — **drops letters the
  archive carries** at eight sites: *ingessae* @0301C, *occuli* @0301D, *conten nat* @0317D,
  *tranferente* @0324C, *ministare* @0327D, *tan git* @0354C, *dis cernimus* @0358D, and three
  word-initials in a single paragraph @0367D (*egem* / *imeres* / *prin-eps*). **A Gallica-only run
  would have fired at least seven false `[sic:]` against Migne.**
- **The archive** is jbig2, a lossy symbol-substitution codec, so its errors are *well-formed* and
  they **construe**. Twenty archive-only readings were refused in the last range alone (§ chunks
  0025–0029, table 3); three of them would have inverted a sense (*adjectis* for *abjectis*,
  *ad non Deus* for *ad nos Deus*, *nomini* for *nemini*). ⭐ Caught in the act @0346D: Gallica
  prints *conjunctionem* broken across a line with **no hyphen**, and the archive has lost the *j*
  **and supplied a hyphen**, giving `con-`/`unctionem`.
- ⛔ **The numeral 3 in this fount reads as 5 at scan resolution.** *Vers. 5* @0360A is Migne's
  Vers. 3; the same glyph explains Vers. 15 = 13 and Vers. 25 = 23. **A `[var:]` or `[sic:]` fired
  on a verse number is the exposed class** — read every digit at 3× or better, on both copies.
- ⛔ **A narrow or left-clipped crop manufactures a dropped letter at every line beginning on this
  tome.** Two candidates (*vicearius*, *Aegyto* @0311A) evaporated when re-cropped with the margin
  in. Always crop the full column width.

### ⚑ Three "misfired citations of Migne's" were ours

@0352D *(I Cor. XL.)*, @0354A *(Psal. XXXVIII)* and @0374A *VERS. 23.* on *Gladium* are all
corruptions in our transcription; both plates print *(I Cor. xi.)*, *(Psal. xxxiii.)* and *VERS. 25*,
and Migne is right at all three. **Read in our file alone each looks exactly like the nine citation
misfires in this book that genuinely ARE his** (listed in the stint sections below). The Psalm one
carries its own control: our file cites the same verse correctly at 0345C. All three were patched
in **both** twins, because `verify-english` content-checks `[n: …]`.

---



---

## The blind polarity read — six readers, 2026-09-07

Step 4a of the runbook, run **blind**: no reader saw this file until its findings were formed, because
a reader given it first returns "all already logged" (measured, 2026-07-28). All thirty chunks were
read against the Latin twin, paragraph by paragraph.

**Result: 7 sites, 6 of them OURS.** Every one survived `verify-english`, the two-printing plate
collation, the 90-marker Vulgate check and the cruces merge — because **not one of them is a missing
negation.** Five are mis-bound grammar and two are words supplied or altered where the plate does
not print them. `translation-style.md` 7a is written around dropped negations; this run says the
richer seam in a lemma-and-gloss commentary is **agency**.

### Corrected — ours

| col | Migne prints | the English had | corrected to |
|---|---|---|---|
| 0310B | *nec confidendum est **ei** in orationibus* | "neither is **he to be trusted** in his prayers" | "neither ought **he to have confidence** in his prayers" |
| 0326B | a bare lemma *Capita,*, then *Capita vestra,* eight lines later | "*Your heads,*" for **both** | "*Heads,*" / "*Your heads,*" |
| 0346D | *sicut gentes … Israel, **qui** adeo **dissolutus** et **deditus*** | "**a people** so dissolute" (= the nations) | "— **Israel** being so dissolute" |
| 0347A | ***Non** … videatur prohibere* | "**That it may not seem** to forbid" (construing *Ne*) | "**Let it not seem** to forbid" |
| 0361A | *et **quicunque** Deo **consecrat*** (masc. sg.) | "**whatsoever things anyone** consecrates" | "**whosoever** consecrates" |
| 0377D | *ille tamen offeret eum **qui ad poenitendum excitavit*** | "he shall offer **him who stirred him up**" | "**he who stirred him up** to repentance shall offer him" |

⭐ **0310B and 0377D are one class, and it is the class to hunt next time.** A gerundive with dative
of agent, and a postponed relative bound to the object instead of the subject. Both leave every
negation in place, so nothing mechanical can see them. **0377D has three controls on its own plate** —
the lemma it expounds (*dabit ille **qui voverat eum***), the clause after it (*huic enim obediet*),
and the identical construction three sentences earlier at 0377C (*Ille enim … novit, **qui correxit***)
which the same translator rendered correctly. That inconsistency inside one paragraph is what proves
it a slip rather than a reading.

⚑ 0360D was corrected in the same pass: *sed ubi **et ipsi** fideles persistamus* is "where **they
too** were faithful", not "let **us ourselves also** persist".

### Migne's — rendered as printed, logged, no marker

- **0340C** — *Superius **fluxum sanguinis** patientem … et hic quoque eum qui patitur **fluxum
  sanguinis***. The first must be *seminis*: the same chunk sets out the scheme four paragraphs
  earlier (*fluxum **seminis** patientem, obscena et corrumpentia docentem diximus* … *restant qui
  Gentilium doctrinam spargunt, quae opportune **fluxus sanguinis** dicitur*), so as printed the
  sentence reads "above, blood-flux … and here likewise, blood-flux" and destroys the *et hic quoque*
  it is built on. ⚑ **No `[sic:]`:** it is a single word, and on 9004 eight of twenty-seven `[sic:]`
  fell at the plate, every fall a single word. Whose it is has not been established.
- **0315A** — *delictum cum **non** facimus quod debemus: peccatum vero cum **non** facimus quod
  **non** debemus*. The second `non` makes sin a second kind of omission and cancels the distinction
  the sentence exists to draw. Migne's own page refutes it two paragraphs down: *Peccatum est
  perpetratio mali, delictum desertio boni.* Rendered literally.
- **0337A** — *Et dimittet passerem. Quia **quodammodo tenetur** sub contemplatione humani
  intellectus.* The lemma releases the bird and the gloss gives its being *held* as the reason. A
  dropped negation is likely; *quodammodo* may be doing that work. **Flagged, not asserted.**
- **0372A** — the gloss *Et dabo, **et** superfluum est* discusses an *et* its own lemma
  (*Dabo vobis pluvias*) does not print. Settled by one look at whether Migne's lemma reads *Et dabo*.
  Unresolved; no English consequence.

### ⛔ Raised and REFUTED — 0344A *ad **fortem** Domini destinantur*

A reader called this its highest-priority finding: an unmarked silent emendation of *fortem* to
*sortem*, invisible to every gate. **It is not an error.** *fortem* is the accusative of ***fors***,
"lot" — and the proof is one column earlier in the same exposition of the two goats of Lv 16:8,
where Migne prints *super quem cadit **fors** diaboli*. The reader's own corroboration ("the work
uses the right word twice nearby") pointed the opposite way: *fors diaboli* is the **same** word.

⭐ This is CLAUDE.md 8a with another data point: **internal corroboration proves an error exists,
never whose it is — and here it did not even prove that much.** Acting on it would have put a
`[sic:]` on type Migne sets correctly.

### What the readers checked and found clean

Four of six ranges came back genuine negatives, each naming the sentences where the class would have
shown and did not: the Lv 11–13 clean/unclean and leprosy diagnostics (including the paradoxical
*toto corpore leprosum Gentilem … **non** expellit; sed eum **mundum** judicat*, rendered as printed);
the Lv 18 prohibition chain, checked one by one rather than as a rhythm; the Lv 22 eat/not-eat pairs;
and the Lv 26 blessing/curse hinge, whose confirmed Migne negation at **0372D** (*quia caro **non**
concupiscet adversus spiritum*) is carried with its `[var:]` and not smoothed.

⚑ **Every reader ran a negation-particle count as a cross-check and every one reported it useless** —
English exceeds Latin in all thirty chunks (periphrasis, *un-* compounds, marker text), and in the one
chunk containing a real Migne defect the count ran four in the wrong direction. It is not a detector.

## Stint 0000 — `cruces-0000.md`

*As filed by the stint, unchanged.*

*Glossa ordinaria* on Leviticus, Anselm of Laon and his school. PL 113. Stint file — the
orchestrator merges this with the peers' files.

**Plate reads:** every column in this range was collated word for word against Gallica
ark:/12148/bpt6k5505319w, leaves **f148–f154**, page map calibrated on the printed corner
numbers of f148 (295/296), f150 (299), f151 (301), f152 (303), f154 (307/308). Two columns
(0299–0300, 0301–0302) were additionally corroborated on the on-disk archive.org PDF, pp.
155–156, whose corners read 299/300. Recorded in `data/briefs/8961-PLATE-READS-0000.json`.

**Lemma count:** 179 marked spans in the Latin of chunks 0000–0004 (all italic; this book uses
**no guillemets** in this range), paragraph-bounded count identical to the raw count, and equal to
the brief's 179. No mis-split.

---

### Press variants — two printings differ, both clean, NO marker fired

Both are the same shape and both were found by putting the two witnesses side by side. In each the
Gallica printing (our TEI's exemplar) carries a defective form and the archive.org printing carries
the correct one. **There is nobody to accuse**, so no `[sic:]`; the English renders the sense, which
is the same under either reading, and the fact is recorded here.

- **0301C** — Gen 46:26 lemma. Gallica prints ***ingessae*** (*Cunctae animae quae ingessae sunt cum
  Jacob in Aegyptum*); the archive prints **ingressae**, which is also the Clementine. Verified at 3×
  on Gallica and 3× on the archive; the Gallica form shows no r-stroke at all. Rendered "that went in."
  ⚑ Note against the jbig2 caution: jbig2 SUBSTITUTES a symbol, it does not INSERT one, so a
  well-formed *r* on the archive where Gallica has none is unlikely to be a codec artifact.
- **0301D** — Gallica prints ***occuli*** (*sanantur occuli ex infirmitate lacrymantes*); the archive
  prints **oculi**. The same sentence's next clause prints *oculos* correctly on both. Rendered "eyes."

### `[sic:]` — one, confirmed on BOTH printings

- **0300A** — ***trangressus*** for *transgressus* (*Si enim promissionem suam trangressus fuerit*).
  A non-word. Read on Gallica f150 and on archive p.155; both print it. Marked
  `transgressed [sic: *trangressus*]`, the sense rendered beside the marker per the 2026-09-05
  amendment to Pattern 7.

### `[var: …]` — Migne's scripture against the Clementine (15 fired)

Every one rests on a collated column, cited book chapter:verse against
`sources/vulgate/clementine-flat.txt`.

| col | lemma as Migne prints it | Clementine | why it is material |
|---|---|---|---|
| 0297C | *Quae sunt **secundum** allegoriam dicta* | Gal 4:24 *per allegoriam* | the preceding clause is *quae **secundum** historiam sunt*; the substitution is the argument's own hinge word |
| 0297D | *Dedi eis **mandata** non bona … in quibus non **vivant*** | Ez 20:25 *praecepta non bona … non **vivent*** | v.11 two lines earlier prints *praecepta mea*; Migne's *mandata* breaks the verbal contrast the gloss is built on, and the gloss then expounds *vivant* / *non vivant* as printed |
| 0297D | ***Scio** quod populus iste durae cervicis sit* | Ex 32:9 *Cerno* | lexical substitution in a proof-text |
| 0300B | *Qui enim **mundus** est, non indiget nisi ut pedes lavet* | Jn 13:10 *Qui **lotus** est* | the verse turns on *washed*; Migne's *mundus* pre-empts the second half of the same sentence (*sed est mundus totus*) |
| 0300C | *ecce qui tollit **peccata** mundi* | Jn 1:29 *peccatum* (sing.) | number, and the singular is the doctrinally weighted form |
| 0301A | *Super quem videris Spiritum descendentem sicut columbam, **hic est Filius meus*** | Jn 1:33 *et manentem super eum, hic est qui baptizat in Spiritu Sancto* | the clause is swapped for the baptismal voice of Mt 3:17; the gloss adduces it to prove *Columba Spiritum sanctum significat* |
| 0301D | *Orationes tuae et eleemosynae tuae ascenderunt **ad Dominum*** | Acts 10:4 *ascenderunt in memoriam in conspectu Dei* | a whole clause replaced |
| 0302B | *Credere enim oportet accedentem ad Deum, **et quod non est ex fide, peccatum est*** | Heb 11:6 continues *quia est*; the second clause is Rom 14:23 | two verses spliced, and Heb 11:6 is cut mid-sentence |
| 0303D–0304A | *Sicut **vester poeta dixit**: **hujus** et genus sumus* | Acts 17:28 *sicut et quidam vestrum poetarum dixerunt: **ipsius** enim et genus sumus* | singular poet for plural poets; *hujus* for *ipsius* |
| 0305D | *Qui **nescibat** peccatum, pro nobis peccatum **factus est*** | 2 Cor 5:21 *eum qui **non noverat** peccatum pro nobis peccatum **fecit*** | Migne's passive changes the subject: Christ *was made* sin, rather than God *made* him sin |
| 0306B | ***Mundus** ego sum a sanguine justi hujus* | Mt 27:24 *Innocens ego sum* | lexical substitution — and *mundus* is the same word Migne substituted at 0300B, in a different quotation |
| 0307C | *Nobis autem **unus est Deus Jesus Christus** per quem omnia* | 1 Cor 8:6 *unus Deus Pater ex quo omnia … et unus Dominus Iesus Christus per quem omnia* | the Vulgate's two clauses are collapsed into one; the gloss is arguing precisely against dividing Christ, so the collapsed form is load-bearing |
| 0308A | *Pater, **ignosce** illis **quia nesciunt** quid faciunt* | Lk 23:34 *dimitte illis, non enim sciunt* | two substitutions in the most familiar sentence in the range — the class 7a″ exists for |
| 0308A–B | *Si vero sal **infatuatum fuerit**, ad nihilum valet nisi **projiciatur** foras* | Mt 5:13 *quod si sal evanuerit in quo sallietur, ad nihilum valet ultra nisi ut mittatur foras* | Migne drops the Vulgate's own question (*in quo sallietur*) and substitutes two verbs |
| 0308C | *Poenitentiam agite, **appropinquat** enim regnum coelorum* | Mt 3:2 *adpropinquavit* | present for perfect; the perfect is the whole force of the proclamation |

### Divergences DELIBERATELY not marked — synonym, word order, or truncation only

Listed so that a later reader can see they were checked rather than missed. In each the sense the
gloss builds on is unaffected, and marking them would bury the fifteen above in noise.

- **0297C** Gal 4:22 *Scriptum est quoniam Abraham **habuit duos filios*** — Vulg. *duos filios habuit*,
  and Migne drops *enim*. Word order only.
- **0297D** Hos 10:11 — Migne drops *et ego* before *transivi*.
- **0299A** Ex 1:1 — Migne stops at *Aegyptum*, dropping *cum Jacob*. Truncation.
- **0301C** Acts 27:37 *Eramus **autem omnes** animae* — Vulg. *vero universae*. Two synonyms.
- **0302A** Rom 12:3 — Migne drops the second *sapere* and adds *sed*.
- **0302B** 1 Cor 13:10 *Cum **enim** venerit* — Vulg. *autem*.
- **0302C** Lev 2:4 *Cum obtuleris* — Vulg. *Cum autem obtuleris*.
- **0303D** Prov 5:3 *Favus **distillans*** — Vulg. *stillans*, and *enim* dropped.
- **0304D** Heb 5:14 *Perfectorum autem est **cibus solidus*** — Vulg. *solidus cibus*. Word order.
- **0305B** Mt 10:16 *Estote simplices sicut columbae* — Migne quotes only the second half.
- **0305C** Jas 1:14 ***Quisque enim*** *tentatur* — Vulg. *unusquisque vero*.
- **0306B** 1 Pet 1:2 — Migne drops *Jesu* before *Christi*.
- **0306C** Heb 10:20 — Migne drops *quam* and *novam et viventem*. Compression.
- **0306C** Isa 6:6 *quem forcipe **tulit*** — Vulg. *tulerat*, and the opening *et* dropped.
- **0306D** Jas 3:17 — Migne drops *est*; the span is a fragment anyway.
- **0307A** Heb 13:10 — word order (*de quo non habent potestatem edere* / *de quo edere non habent
  potestatem*).
- **0308D** Lev 4:32 *Si autem de pecoribus* — Vulg. *Sin autem*.

### Migne's own defects reproduced as printed (Pattern 8 / Pattern 7)

- **0301A** — the plate opens a parenthesis it never closes: *( Isich.* in Levit. *Admirabilis
  verborum subtilitas, etc.,* … *ubi Christus est in dextera Dei sedens.* Reproduced unclosed;
  no mark supplied. Confirmed on Gallica f151.
- **0305D–0306A** — the same defect again: *(ORIG. Observandum est quod in peccato pontificis
  legislator non addit …*, never closed. Confirmed on Gallica f153.
- **0302C** — *omnes tamen scientias superans et ad perfectionem exaltans* ends with **no terminal
  stop** before `VERS. 4.`. Confirmed at the plate; not supplied in the English.
- **0302D** — *De hac re siquidem locutionem ab apostolis et a prophetis suscipimus, **V**erba
  apostolorum sunt panes* — a comma followed by a capital where a full stop is wanted. Plate
  confirms; reproduced.
- **0305D** — ***Ideo aut** omnino additur: ut et proximis parcamus et nobis.* *aut* is a real word
  occupying its slot, so Pattern 7 renders it literally ("Therefore either it is added
  altogether"). The conjecture is ***autem*** ("Therefore, however, it is added altogether"), which
  the following *ut* clause wants. No `[sic:]` (the type is a real word) and no `[cj:]`: the literal
  English is odd, not false, which is the Pattern 18 bar. Confirmed on Gallica f153.

### Not defects — checked and left alone (Pattern 9)

- **0297B** *prescrutari* for *perscrutari*; **0305B** *epatis* for *hepatis*; **0300D** *spiritalium*;
  **0305D** ***nescibat*** for *nesciebat* (an attested late/syncopated imperfect on the pattern of
  *scibat*, not broken type). All confirmed at the plate, all translated normally.
- **0301B** and elsewhere, `(ID)` / `(ISICH).` / `(ISICH.` *in Levit.* appear as running text rather
  than as `[n: …]` in the TEI. Kept verbatim Latin in the English, on the same footing as note
  contents — they are Migne's citation abbreviations, not prose.

### Constructions rendered literally, logged because they will look wrong

- **0297B** — *agricolam seminantem semen bonum, **justos*** in the list of Matthew 13's equations.
  Matthew makes the sower the Son of Man and the good seed the sons of the kingdom; Hesychius's
  compressed list equates the sower-of-good-seed with *the just*. Rendered as printed. Not a lemma
  (no italics), so no `[var:]`.
- **0299C** — *et Spiritus sancti semen virtutum fruge ditavit*: *semen* is accusative where the
  construction wants an ablative (*semine*). Rendered literally, "enriched the seed of the Holy
  Spirit with the fruit of the virtues." Gender/case with no clean English exponent; no marker.
- **0302A** — the italic run *Non plus sapere quam oportet, sed sapere ad sobrietatem. **Quorum
  unus,*** puts Rom 12:3 and the resumed Leviticus 2:2 lemma (*quorum unus tollet pugillum*) inside
  one span, with the `(Rom. XII)` note after both. Reproduced as one span; the reader should know
  the last two words are Leviticus, not Romans.
- **0305B** — *Reticulum jecoris: Id est, **epatis*** glosses the Latin word by the Greek-derived one,
  and English has one word for both. *epar* is kept in italic Latin so the gloss does not collapse
  into a tautology.

---


## Stint 0005 — `cruces-0005.md`

*As filed by the stint, unchanged.*

Stint file; the orchestrator merges it with the peers'. Every column in the range was read at
the plate before these entries were written — Gallica `ark:/12148/bpt6k5505319w` f155–f162,
`f = (column + 1) / 2`, calibrated against the printed corners on f155 and f162; the archive
copy `patrologiaecurs04migngoog` (PDF page `= (column + 11) / 2`, calibrated on p.164) was
brought in as second witness at cols 0315–0318. Reads recorded in
`data/briefs/8961-PLATE-READS-0005.json`.

---

### Plate vs. our TEI

**0315C — `Sacrificium salutare`, a word our TEI drops.** The plate reads *Sacrificium
**salutare** jubetur fieri in oleo* on **both printings**. The English renders the plate; patch
filed in `data/briefs/8961-PENDING-TEI-PATCHES-0005.md`.

**0320A — ὑπωρίς, not ὑπωμίς.** The plate sets ὑπωρίς (rho, full descender, read at 3× on a
native crop); our TEI gives ὑπωμίς. Neither is a Greek word — the sense wants ἐπωμίς, the
shoulder-piece — but only one of the two is Migne's. English carries the plate's form; patch
filed. No `[sic:]` fired, because the marker's content must be verbatim in the twin and the twin
does not yet carry it.

**0317D — *conten nat* / *contemnat*: the two printings differ, and NO marker is fired.**
Gallica sets *et gulam conten nat* with an unmistakable word space; the archive copy sets
*contemnat* clean; our TEI has *contemnat*. A split run is exactly Pattern 10's shape, but the
reliable prior here is the class split, not the shape: a single word seen defective on only one
printing does not license a public accusation against Migne's type. Logged as a press variant,
English reads "and despise gluttony", nothing marked, nothing patched. (Same class as 8950's
*Mititte*/*Mittite* and PL 114 @0073A *Bethehem*/*Bethlehem*.)

**0318D — *habeba*, and the `[sic:]` IS fired.** Gallica sets *habeba* (a non-word); the archive
sets *habebat*; our TEI has *habeba*, i.e. it follows the exemplar printing. Unlike 0317D the
defect stands on the printing our text descends from and the twin carries it verbatim, so
`[sic: *habeba*]` is checkable and true of the page we edit. The sense is rendered beside the
marker per the 2026-09-05 amendment: "he had [sic: *habeba*] therefore two tunics" — the clause
keeps its verb, and *Convenienter ergo habebat duas tunicas* four lines later is Migne's own
control. ⚑ A later gate should know the archive printing refutes it; that is recorded here on
purpose rather than left for someone to rediscover.

**0311A — two candidates REFUTED at the plate, and both were artefacts of my own crop.** A first
column crop clipped the left margin and appeared to read *vicearius* and *Aegyto*. Re-cropped
with the margin included, the plate reads *vice-narius* and *Aegy-pto*, exactly as our TEI has
them. Recorded because the failure shape is general: on this tome a narrow left crop
manufactures a dropped letter at every line beginning.

**0315C — two archive-only candidates refuted by Gallica.** The archive copy reads *quas debens
offerre* and *proxima, sunt, necessario offerenti. sacerdotis sunt*; Gallica reads *debent* and
*offerentis*, as our TEI does. jbig2 symbol substitution, and the standing rule that the archive
is never the sole witness for a letter held.

---

### Readings that will not construe (rendered as printed, per Pattern 7)

**0315B — *Non bonum scilicet aut ovium*.** Printed thus on **both** printings. The sense the
context wants is *boum* — "not of oxen, namely, or of sheep" — and *bonum* leaves the abridged
lemma with no construction at all. Declined for `[cj:]` under 18a: this is not a negation, not a
correlative, and the clause is an *usque ad* fragment that asserts nothing false; it merely fails
to construe. Rendered literally, "Not good, namely, or of sheep."

**0312B — *ablatis reliquis iterum renovati, quo ardeant alia quae imponuntur*.** *renovati*
(nom. pl. participle) has no subject in the sentence; *renovetur* would construe with *ignem*.
Plate-confirmed as printed. Rendered as closely as the words allow ("the remains being taken
away, it be again renewed"), the participle carried as the passive it is; no marker — a real
word in a slot English can absorb is Pattern 7's business, not Pattern 12's.

**0319D — *magaritae* for *margaritae*.** Plate-confirmed. Left unmarked and translated
normally ("pearls") under Pattern 9: the metathesised form is attested in medieval orthography,
and italicising it would bury the real defects of this range in noise.

**0312B — *Quem nutriet sacer.*** Migne abbreviates the Lv 6:12 lemma mid-word with a period.
Under L5 (contraction ≠ truncation) the sentence's grammar contains the whole word — *sacerdos*
is the subject of *nutriet* — so it is rendered whole: "Which the priest shall feed."

---

### Scripture as Migne prints it — the divergence list

⛔ Every entry below was read word by word against the plate and then against
`sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. Six entries carry a
`[var:]` in the English; the rest are recorded here because the divergence is real but does not
change what the passage asserts, which is the Pattern 14 bar.

#### Marked `[var:]`

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0312C | *Ignis in altari semper ardeat et nunquam deficiat* | Lv 6:12–13 *ignis autem in altari semper **ardebit*** … *qui **numquam deficiet*** | a promise in the future indicative is quoted back as a jussive precept, and the gloss adduces it precisely as a standing command (*permiscens eis assiduitatem*) |
| 0314A | *Qui semetipsum **totum** exinanivit, formam servi accipiens et obediens **patri** usque ad mortem crucis* | Phil 2:7–8, no *totum*, no *patri*, and *factus obediens usque ad mortem, mortem autem crucis* | the lemma being glossed **is** *Qui patri* — the added dative is the word the whole gloss turns on, and it is not in the received text |
| 0317B | *ne glorieris adversus **fractos** ramos, ne tu excidaris, et illi, si non permanserint in incredulitate, **inserantur*** | Rom 11:18 *noli gloriari adversus ramos*; 11:23 *inserentur* | a conflation of two verses with *fractos* imported and the future turned subjunctive |
| 0318B | *Beatus vir qui **sustinet** tentationem, **quia**, cum probatus fuerit* | Jas 1:12 *qui **suffert** tentationem: **quoniam*** | a different verb, in the proof-text for the whole *rubus* etymology |
| 0321B–C | *ut notum fieret **principibus** et potestatibus per ecclesiam* | Eph 3:10 *ut innotescat **principatibus** et potestatibus **in caelestibus*** | *principes* and *principatus* are different orders in the angelic hierarchy this gloss is about, and the heavenly places drop out |
| 0322D | *Panis ejus **dabitur*** | Is 33:16 *panis ei **datus est*** | a future promise where the prophet has a perfect, in a proof-text adduced for what the prophets *have* said |

#### Recorded, not marked

- **0309A, Lv 5:2.** Migne's lemma is *Anima **qui** tetigerit* where the Clementine — and
  Migne himself, nine words earlier on the same column — has *Anima **quae** tetigerit aliquid
  immundum.* A relative-pronoun gender has no English exponent (Pattern 9); the English uses
  "who" for *qui* and "that" for *quae* so the two lemmata do not collapse into one sentence,
  and nothing is emended.
- **0310A, Lv 5:11.** *Non mittet in **eum*** for *in eam* (the oblation, fem.). Same class.
- **0310B, Mt 18:22.** *Non dico tibi septies, sed usque septuagies septies* — the Clementine's
  first *usque* is absent. Cited *(Matth. XXVIII)*; the verse is Mt 18:22. `refDisplay` keeps
  what he printed.
- **0310B, Jonah 3:9.** *Quis scit si convertatur et ignoscat Deus, et relinquat post se
  benedictionem* — cited *(Joan. III)* for *Jonas III*, and conflated with Joel 2:14.
- **0312A, 2 Cor 1:12** quoted and cited *(Eph. ult.)*.
- **0312A–B, 1 Cor 2:6 and 2:2.** *Sapientiam loquimur* without *autem*; *nihil judicavi me
  scire inter vos* for *non enim judicavi me scire **aliquid** inter vos*. Both cited *(II Cor.
  I)*.
- **0313B, 1 Tim 4:5.** *Sanctificatur **autem*** for *enim*.
- **0314C, Is 9:5.** *erit in combustione* for *in combustionem*.
- **0314D, Heb 12:29** quoted verbatim (*Deus enim noster ignis consumens est*) but cited
  *(Deut. IV)*, where Dt 4:24 has *Dominus Deus tuus*.
- **0315B, Lk 5:32 / Mt 9:13.** *Non veni vocare justos, sed peccatores*, cited *(Matth. IX)*;
  the wording is Luke's, without Matthew's *enim*.
- **0315C, Job 2:4.** *et **omnia** quae habet homo* for *cuncta*. Plate-confirmed on both
  printings; a synonym, so no marker.
- **0315D, Lv 7:12.** *Si pro gratiarum actione **fuerit oblatio*** for *oblatio fuerit*.
- **0316A, Rom 9:16.** *Non enim volentis neque currentis, sed Dei miserentis est* for *Igitur
  non volentis, neque currentis, sed miserentis est Dei*. The same verse is quoted again at
  0317D in a third order (*Non est volentis…* ) — the variance is Migne's, per occurrence.
- **0316B, Mt 13:52.** *Sint, inquit, nova et vetera* — an *inquit* inside the quotation;
  guillemets are not printed here and none are supplied.
- **0318C, Sir 45:9 / 2 Sm 13:18.** *Vestivit eum tunicam talarem*, cited *(Eccli. XLV)*, and
  *interiorem*, cited *(II Reg. XV)*. Neither is verbatim in the Clementine at the address given.
- **0319A, Gal 5:2.** *Si **circumcidimini*** for the subjunctive *circumcidamini*, and *nihil
  vobis* for *vobis nihil*.
- **0319D, Mt 7:6.** *ne sanctum detur canibus et magaritae ponantur ante porcos*, cited
  *(Marc. VII)*.
- **0320B, Mt 5:19.** *sed qui fecerit et docuerit hic magnus vocabitur*, cited *(I Tim. III;
  Matth. V)*; the received text adds *in regno caelorum*.
- **0321A, Ps 4:7.** *Signatum est super nos lumen vultus, Domine* — Clementine *lumen vultus
  **tui***.
- **0321B, Is 61:1.** *eo quod unxerit me* — Clementine *eo quod unxerit **Dominus** me*.
- **0321C, Ps 44:8** quoted a second time (*Unxit te, Deus Deus tuus*) and cited *(Psal. LIV.)*,
  where the first quotation at 0321B is correctly cited *(Psal. XLIV)*.
- **0322C, Mk 14:23–24.** *Et **sumens**, gratias agens dedit eis, et biberunt ex **eo** omnes,
  et **dixit** eis* for *Et accepto calice … ex illo … Et ait illis*. The cup drops out of the
  narrative clause; the gloss's argument rests on the pouring, not the cup, so no marker.
- **0322D, Ex 16:15.** *Hic est panis quem **dedit vobis Dominus*** for *quem Dominus dedit
  vobis ad vescendum*, cited *(Exod. XXVI)*.
- **0322D, 1 Cor 12:28.** *primum apostolos, **deinde** prophetas* for *secundo prophetas*, and
  without *Et quosdam quidem*.
- **0323A, Jn 17:19.** *Pro eis ego sanctifico meipsum* — the Clementine opens *Et pro eis*.
- **0310C, Ex 30:38.** *Quicunque talem compositionem fecerit, peribit de populis suis* — the
  tail is verbatim Clementine; the head paraphrases *quicumque fecerit simile*.

---

### Typography and structure preserved

- **0314C, Pattern 8.** *…mundatur ab originali* ends with **no terminal stop** on the plate;
  the English ends unstopped too. Nothing supplied.
- **0323A.** Migne sets **`VERS 39.`** with no period after *VERS*, alone in this range; kept.
- **0311D–0312A.** Numbering runs VERS. 8, 10, 11, 12, 14, 16 — Migne addresses the verses he
  glosses, and the gaps are his.
- **0318B.** *VERS. 28.* stands between *VERS. 37.* and *CAPUT VIII* and glosses Lv 7:38
  (*In monte Sinai*). The number is Migne's; not corrected.
- **0317B–C.** *(HIERON., epist. ad Fabiolam, tom. I.)* is set as running italic, not as a
  bracketed note, and carries the column anchor `[0317C]` inside it. Kept verbatim Latin in the
  English, on the same footing as an `[n:]` citation.
- **0313A.** Migne prints *à masculorum dignitate* with a grave accent; not reproduced and not
  marked — a compositor's accent on a Latin preposition carries no reading.
- **No guillemets anywhere in this range**, in Latin or English: this book marks its lemmata
  with italics only, and every quotation mark the English shows is a supplied `" "` (Pattern 6).

---


## Stint 0010 — `cruces-0010.md`

*As filed by the stint, unchanged.*

Glossa ordinaria on Leviticus 9–13, Anselm of Laon and his school, PL 113.
**Every column in this range was read at the plate** (Gallica IIIF `ark:/12148/bpt6k5505319w`,
f = (column + 1) / 2, f162–f168; corner numbers read first on every leaf), and three sites were
checked on the on-disk archive.org copy as well. The read record is
`data/briefs/8961-PLATE-READS-0010.json`; TEI divergences are in
`data/briefs/8961-PENDING-TEI-PATCHES-0010.md`.

**Lemma-span count:** 205 marked spans in the Latin of chunks 0010–0014, counted both as a
whole-file total and paragraph-bounded, with no unmatched delimiter in either direction. The
brief's figure is 205. **They agree, and the two counting methods agree with each other.** This
work sets its lemmata in italic and carries **no guillemets at all** in this range.

---

### 1. Fixed English equivalents for the leprosy vocabulary (Lv 13, chunk 0014)

Held to one equivalent per Latin word across the whole range, because the same word carries a
literal and an allegorical sense in adjacent sentences and elegant variation would hide that.
**A peer stint owns the neighbouring range and cannot see these.**

| Latin | English | note |
|---|---|---|
| *lepra* | leprosy | never "leprosy/leprous sore" by turns |
| *leprosus* | leper (n.) / leprous (adj.) | |
| *plaga* | plague | *plaga leprae* = "the plague of leprosy"; also *plaga major* = "a greater plague" @0334C, deliberately the same word |
| *macula* / *maculatus* | spot / spotted | *maculae* of avarice and lust @0334A; *Quicunque maculatus* @0335B |
| *cicatrix* | scar | *in cicatrice exustionis* = "in the scar of a burning" |
| *ulcus* | ulcer | |
| *scabies* | scab | |
| *alba* | white | |
| *subrufa* | somewhat reddish | |
| *volatilis* (*lepra volatilis*) | flying | **not** "spreading"; Gregory's homily is about a vice that flits from one place to another, and the metaphor is the whole point |
| *effloruerit* / *efflorentem* / *florens* | flower forth / flowering | ⭐ the gloss at 0333D–0334A is built on the flower (*quasi florente et alba*, *quae ad modicum floret*); rendering *effloruerit* as "break out" would leave the exposition explaining nothing |
| *exustio* / *exurere* | burning / burn up | |
| *recludere* | shut up | |
| *mundus* / *immundus* / *mundare* | clean / unclean / cleanse | |
| *pili*, *capilli* | hairs, hairs of the head | @0333B the gloss needs both in one sentence |
| *pinnula* | fin | Lv 11; kept plain "fins" for the fish and for the *pinnulae virtutum* alike, since the allegory is the identity |
| *squama* | scale | |
| *morticinum* | carrion | one noun, so the gloss *id est participanti mortem inferens* can hang on it |
| *cadaver* | carcass | kept distinct from *morticinum* |
| *gastrimargia* | gluttony | |
| *ingluvies* | voracity | kept distinct from *gastrimargia*, which stands eight columns away |
| *cenodoxia* | vainglory | *vana gloria*, in the very next sentence @0335D, is "vain glory" — two English forms because Migne has two words |

*vitiligo*, *tinea* and *livida* do not occur in this range.

### 2. ⚑ Press variants — two printings, and Gallica drops letters the archive carries

**Both sites were checked on both copies and both copies are clean at both sites.** There is
nobody to accuse, so **no `[sic:]` was fired**, and each is recorded here instead.

- **0324C** — Gallica (our TEI's exemplar, and our TEI) prints ***tranferente***; the
  archive.org copy prints *transferente*. Rendered "transferring", which is the sister
  printing's own reading and not our conjecture.
- **0327D** — Gallica and our TEI print ***ministare***; the archive.org copy prints
  *ministrare*. Rendered "to minister", same reasoning.

⛔ A stint working PL 113 from Gallica alone will read both of these as Migne's defects and
mark them. They are not. Conversely, two archive-only readings in this range (*condendum* for
*comedendum* @0324C, *Moyes* for *Moyses* @0327C) are jbig2 artefacts and are **not**
reportable: the codec substitutes a visually similar, well-formed character, so its errors
construe.

### 3. The one `[sic:]`

- **0327B** — ***sacricium*** for *sacrificium*, in *Debet autem comedi hoc sacricium in loco
  sancto*. **Confirmed on BOTH printings** and present in our twin, so the defect is Migne's.
  The English renders the sense with the type inside the marker, per Pattern 7 as amended
  2026-09-05: "But this sacrifice [sic: *sacricium*] ought to be eaten in the holy place."

### 4. Scripture divergences — the `[var:]` markers, twelve in all

Each was collated word for word against `sources/vulgate/clementine-flat.txt` **and confirmed
on the Gallica plate** before firing.

1. **0324B** *Convertimini et agite poenitentiam*, put in Peter's mouth at Pentecost. The words
   are Ez 18:30 verbatim; Acts 2:38 reads *Poenitentiam agite*, Acts 3:19 *Poenitemini igitur
   et convertimini*.
2. **0324C** *Hic est panis quem dedit vobis Dominus ad comedendum, hic est sermo quem
   constituit Dominus* (Exod. XVI). Vulg. Ex 16:15 *Iste est panis quem Dominus dedit vobis ad
   vescendum*, Ex 16:16 *hic est sermo quem praecepit Dominus*. Four separate departures in one
   quotation, and the gloss turns on *sermo* being the thing appointed.
3. **0325C** *Dominus Deus noster ignis consumens est* (Deut. IV). Vulg. Dt 4:24 has *tuus*;
   the form with *noster* is Heb 12:29. Fired because the gloss makes the fire the Spirit given
   to *us*.
4. **0326A** *Deus meus et Dominus meus* (Joan. XX). Vulg. Jo 20:28 *Dominus meus, et Deus
   meus* — **the order reversed**, in a gloss whose whole point is the two things Thomas
   touched and saw, *carnem et divinitatem*, in that order.
5. **0330A** *Crura eorum recta, et pennati pedes eorum* (Ezech. I). ⭐ The strongest of the
   twelve: **no received verse reads *crura eorum recta*.** Vulg. Ez 1:7 is *et pedes eorum,
   pedes recti, et planta pedis eorum quasi planta pedis vituli*, and the whole gloss is built
   on the contrast of *crura* with *pedes* (*Habere nos oportet crura sublimiora pedibus*).
6. **0330B** *ut in ore duorum testium stet omne verbum* (Matth. XVIII). Vulg. Mt 18:16 reads
   *duorum, vel trium testium*. Material: the gloss immediately draws the two witnesses as the
   two laws (*et in utraque lege laudes Deum*), which three witnesses would spoil.
7. **0332D** *ipse loquetur ad populum, et erit os tuum, tu autem eris in his quae ad Deum
   pertinent* (Exod. IV). Vulg. Ex 4:16 has *pro te* after *loquetur* and *ei* after *eris*;
   both are dropped, and the passage is precisely about who stands to whom.
8. **0333B** *capilli capitis vestri omnes numerati sunt*, cited as **(Matth. X)**. Mt 10:30
   reads *Vestri autem capilli capitis omnes numerati sunt*; **the word order printed here is
   Lc 12:7's.** The pre-scan's bare tick against Luke was the tell.
9. **0334A** *Date eleemosynam et omnia munda erunt vobis*. Vulg. Lc 11:41 *et ecce omnia munda
   **sunt** vobis* — future for present, in a sentence promising that avarice *can be* cut away.
10. **0334C** *Ignis adversarios consumet* (**Isa. LXXIV**). No verse reads thus. Is 26:11 has
    *ignis adversarios tuos devoret*; Heb 10:27 *ignis aemulatio, quae consumptura est
    adversarios*. **Isaiah has sixty-six chapters**, so the address is impossible as well.
    Confirmed on the plate, chapter number and all.
11. **0335A** *Qui peccat in Spiritum sanctum, non remittetur ei*. Vulg. Mt 12:32 *qui autem
    dixerit contra Spiritum sanctum, non remittetur ei* — sinning against, for speaking against.
12. **0335C** *Qui hanc doctrinam non affert, non recipiatis eum in domum, et ave ei non
    dixeritis* (II Joan. 10). Vulg. *Si quis venit ad vos, et hanc doctrinam non affert, nolite
    recipere eum in domum, nec ave ei dixeritis*. ⭐ **Migne quotes this same verse at 0326B in
    a third form** (*Si quis venit ad vos … nolite eum recipere in domum*), and both forms are
    on the plate. The 0326B form differs from the Vulgate only in word order and took no marker.

### 5. Divergences examined and DECLINED, with the reason

- **0326B** *nolite eum recipere in domum* (2 Jn 10) — word order only against the Vulgate's
  *nolite recipere eum*; no sense at stake. Recorded at §4.12 as the companion of a marker that
  did fire.
- **0325C** *Et egressus est ignis a Domino* (Lv 9:24). Vulg. *Et ecce egressus ignis a Domino,
  devoravit holocaustum*. An added *est*, a dropped *ecce* and an abridgment; the Pentecost
  parallel the gloss draws is untouched.
- **0328B** *Vidit Deus cuncta quae fecerat* (Gn 1:31). Vulg. *Viditque*. One enclitic.
- **0327C** *Voluntarie enim peccantibus non relinquitur hostia pro peccato* (Heb 10:26). A
  heavy abridgment of *Voluntarie enim peccantibus nobis post acceptam notitiam veritatis, jam
  non relinquitur pro peccatis hostia*, with the sense entire. Both negations carried.
- **0327C** *quia Spiritus sanctus disciplinae effugiet fictum* (Sap 1:5). Migne's *quia* stands
  where the Vulgate has *enim*; that is the commentator's connective, not a variant reading.
- **0331A** *Scripsi vobis non commisceri fornicariis*, cited **(I Cor. III)** — the words are
  1 Cor 5:9–10 and the reference is wrong by two chapters, but the reference is inside an `[n:]`
  and passes verbatim; the wording turns the Vulgate's *Ne commisceamini* into an infinitive
  without touching the sense.
- **0331A** *Moab olla spei meae*, cited **(Rom. II)** — the words are Ps 59:10 **verbatim**.
  Nothing diverges but the address, which is Migne's and rides in the note.
- **0332A** *In loco sancto edent ea*. Nearest are Lv 6:16 *comedetque illam in loco sancto* and
  Lv 10:13 *Comedetis autem eam in loco sancto*; the point being made is only that a court can
  be called a holy place.
- **0333C** **(Joan. XI)** for the Lord asking Peter a third time — the scene is Jo 21:15–17.
  Migne's, on the plate, inside a note, so it passes verbatim.
- **0335C/0335D** *Qui praedicas non furandum, furaris; peccatori autem dixit Deus: Quare tu
  enarras justitias meas?* under one **(Rom. II.)** — a conflation of Rom 2:21 with Ps 49:16,
  but **both halves are quoted accurately**. Only the single address is short.
- **0335D** *Sicut olera herbarum cito decident* (Ps 36:2, which has *quemadmodum*). One
  connective.

### 6. Printed readings rendered as they stand (Pattern 7), with the conjecture here

- **0330C** *Si naturaliter essent immunda, immundus esset viventia etiam qui tangeret.* The
  clause will not construe: *viventia* is an accusative with nothing to govern it. Rendered as
  closely as the words allow — "he would be unclean who touched them even living" — and the
  hole is left visible. Confirmed on the plate.
- **0335C** *quae cum tentationis fuso in **filiorum** tenuitatem torquetur* — "into the
  fineness of sons", in a sentence about a spindle twisting the warp. *filorum*, "of threads",
  is what the image needs and is one letter away. ⛔ **`[cj:]` DECLINED**: Pattern 18's bar is
  whether the English *asserts something false*, and "the fineness of sons" is baffling rather
  than false — it does not put a claim in the author's mouth. Recorded here per 18a. Confirmed
  on the plate.
- **0335B** *Calvus ac mundus est.* **Simplex, non stultis** — "Simple, not to the foolish".
  The dative has no obvious governor. Rendered literally. Confirmed on the plate.
- **0333B** *sanctas autem deponere sanctum, damnum est* — *sanctum* read as the dative-less
  masculine ("a loss to a holy man"); it may equally be a neuter predicate ("to lay aside holy
  ones, holy though it be, is a loss"). Rendered on the first construal; the second is here.
- **0328C** *quicunque enim pisces pinnati sunt et squamosi.* — a sentence with no main verb of
  its own. Rendered as it stands.
- **0328C** *qui autem tales non sunt, cum his nec cibum sumere.* — bare infinitive, no
  governing verb. Rendered as it stands, with both negations.
- **0332D** *Corinthiani* for *Corinthii*. An attested-enough formation and no English exponent
  distinguishes them; Pattern 9, no marker.
- **0330D** Migne prints **VERS. 34 twice**, the second time for what is Lv 11:38. His, on the
  plate, carried.
- **0335C** **VERS. 48** is printed with **no period after the numeral**, alone in the range.
  His, carried.
- **0326A** Migne glosses Elisaphan twice and with two different words — ***Dei speculum***
  ("the mirror of God") at 0325D–0326A, then ***specula Dei mei*** ("the watchtower of my God")
  at 0326A. Both are on the plate and both are rendered as they stand rather than harmonized;
  the following clause's *speculari* leans on the second.

### 7. Notes on the digitization, filed as patches rather than marked

- **0325D** — Migne prints **מישאל** before *Misael* and **אלצפן** before *Elisaphan*; our TEI
  has lost both. MT-verified against Ex 6:22. The loss leaves the sentence sound, so **no
  `[ed:]`** (Pattern 13a clause 1); filed in `8961-PENDING-TEI-PATCHES-0010.md` for a
  `data/hebrew-patches/8961.json` entry.
- **0330B** — the plate reads *Falsa dicendo testimonia**,** dignum dicendo indignum*; our TEI
  prints a full stop before the lowercase *dignum*. **The English follows the plate.**

### 8. Truncated lemmata — stop where Migne stops

**0328D** *Quidquid pinnulas,* etc. (Lv 11:10) — the printed lemma breaks off before the
negation, so the English breaks off with it: "*Whatsoever fins,* etc." An earlier draft read
"Whatsoever hath not fins", which supplies a *non* the plate does not print at that point and
is exactly the 7a failure the rule names. The full verse is *Quidquid autem pinnulas et squamas
non habet*, and the gloss that follows carries the negation for itself.

---


## Stint 0015 — `cruces-0015.md`

*As filed by the stint, unchanged.*

*Glossa ordinaria* on Leviticus, Anselm of Laon and his school. PL 113. Stint file — the
orchestrator merges this with the peers' files.

**Plate reads:** every column in this range was collated word for word against Gallica
ark:/12148/bpt6k5505319w, leaves **f168–f174**. The page map (`f = (col + 1) / 2`) was
re-calibrated in this stint on the printed corner numbers of **all seven leaves**: f168 = 335/336,
f169 = 337/338, f170 = 339/340, f171 = 341/342, f172 = 343/344, f173 = 345/346, f174 = 347/348.
Two sites were additionally corroborated on the on-disk archive.org PDF (page = (col + 11) / 2),
pp. 178 and 179, whose printed corners read 345/346 and 347/348. Recorded in
`data/briefs/8961-PLATE-READS-0015.json`.

**Lemma count:** 230 marked spans in the Latin of chunks 0015–0019 (all italic; this book uses
**no guillemets** in this range), paragraph-bounded count identical to the raw count, and equal to
the brief's 230. No mis-split.

---

### Our TEI diverges from the plate — English renders the PLATE, patches pending

Filed in `data/briefs/8961-PENDING-TEI-PATCHES-0015.md`. None of these takes a `[sic:]`: the plate
is clean at each, so a marker would publicly accuse Migne of the digitization's defect.

- **0343D** — our twin prints the non-word ***vetrorsum*** (*Ego autem non contradico, vetrorsum non
  abii*); **Gallica f172 prints *retrorsum***, which is also Isa 50:5. Read at native resolution and
  again at 3×: the initial is an italic *r*, not a *v*. English reads "I went not backward."
- **0346D** — our twin prints ***con junctionem*** with a space (*Talium con junctionem turpitudinem
  appellat*). **Gallica f173 breaks the word across a line with NO hyphen** — the line ends *Talium
  con* and the next begins *junctionem* — so Migne's word is *conjunctionem*, entire. English reads
  "the conjunction of such persons."
  ⚑ **The archive is the defective witness here, and instructively so:** archive p.178 prints
  *con-* / *unctionem*, i.e. it has lost the *j* and supplied a hyphen. A stint working from the
  archive alone would have marked a `[sic: *conunctionem*]` on a word Migne sets correctly. This is
  the jbig2 caution in its exact predicted form — a substitution that construes.
- **0339C** — our twin's Greek reads *έπισαγμα ὅνον* (tonos-for-smooth-breathing, rough breathing on
  *ὄνον*); the plate reads **ἐπίσαγμα ὄνον**. English carries the plate's accents.
- **0347A** — our twin supplies a terminal stop after *…confessione deletum vel detectum.* **Neither
  printing has one**: Gallica f174 and archive p.179 both end the paragraph bare. Under Pattern 8
  ("never supply a mark the plate lacks") the English stops there without a period.

### Migne's own defects, reproduced without a marker

- **0344B** — Migne opens `(ORIG., *ubi supra.*` at VERS. 29 and **never closes the parenthesis**;
  the paragraph runs to *id est abjectus et refutatus.* with no `)`. Confirmed on the plate.
  Reproduced unclosed, per the Pattern 5 corollary.
- **0345B** — the same shape: `(secundum illud: *Qui devorant plebem meam sicut escam panis*
  [n: (Psal. XIII)] obfirmat faciem suam Deus…` — the parenthesis opened before *secundum* is never
  closed. Confirmed on the plate. Reproduced unclosed.
- **0338D** — the verse address reads **VERS. 20** where the lemma (*Ponet super extremum auriculae
  dextrae illius qui*) is Lv 14:25, and it stands *after* VERS. 21 in the printed sequence.
  Confirmed on the plate; Migne's own numbering, reproduced.
- **0342C** — Migne's note on *Ecce vir, oriens* reads `(Psal. XV.)`, repeating the citation attached
  to *Non dabis sanctum tuum* four lines earlier; the phrase is Zech 6:12. His citation, verbatim,
  unaltered. Compare the note two clauses later, `(Zachar. VI)`, attached to *visitavit nos oriens*,
  which is Lk 1:78. The pair is his, not ours.
- **0338C** — the note `(Psal. XIV.)` covers *Factae sunt lacrymae meae panes* (Ps 41:4) and *Lavabo
  per singulas noctes lectum meum* (Ps 6:7); neither is Ps 14. Verbatim.
- **0345D** — the note `(Psal. XLIII)` is attached to *Captabant in animam justi*, which is Ps 93:21.
  Verbatim.
- **0348B** — the note `(Prov. XIII.)` is attached to *Mulierem fortem quis inveniet*, Prov 31:10.
  Verbatim.

### Sentences that do not construe, rendered as printed

- **0336D** — *Quomodo enim rasis pilis succedunt novi, si novae cogitationes ad meliora pullulant
  veteribus abrasis.* The *Quomodo … si …* frame has no apodosis and the sentence closes on a full
  stop. Confirmed on Gallica f168 exactly as our twin has it. Rendered word for word ("For just as,
  when the hairs are shaved, new ones follow, if new thoughts sprout up toward better things when
  the old have been shaved away"); no repair, no marker.
- **0342C** — *…et non morietur immoderatis, scilicet quaestionibus.* The ablative *immoderatis* is
  stranded before its noun by the interposed *scilicet*. Printed thus; rendered thus ("and he shall
  not die of immoderate questionings, that is").

### Readings checked and deliberately NOT marked

- **0339D** *ffuxum* (VERS. 29, col 0340C) is the *fl*-ligature, not a doubled *f*: the same word
  prints cleanly as *fluxum* twice in the neighbouring lines of the same paragraph. No `[sic:]`.
- **0337D** *Ut auditum muniat* — the *n* of *muniat* is ink-damaged on Gallica and reads at first
  glance as a *k*. It is *muniat*, the reading of our twin. Damage, not type.
- **0344C** *loco non circonscripsit* — an attested medieval spelling of *circumscripsit*
  (Pattern 9). No marker.
- **ZERO `[sic:]` fired in this range.** No candidate survived collation on both printings; the one
  that looked strongest (*con junctionem*) proved to be our file's, and the archive's own version of
  it proved to be the archive's.

### `[var: …]` — Migne's scripture against the Clementine (18 fired)

Every one rests on a collated column, cited book chapter:verse against
`sources/vulgate/clementine-flat.txt`.

| col | lemma as Migne prints it | Clementine | why it is material |
|---|---|---|---|
| 0336B | *nisi manducaverimus carnem Filii hominis, non habebimus vitam in nobis* | Jn 6:54 *nisi manducaveritis … et biberitis ejus sanguinem, non habebitis vitam in vobis* | second person becomes first ("unless **we** have eaten"), and the cup drops out of a proof-text adduced for the sacrament |
| 0336B | *Asperges me, **Domine**, hyssopo* | Ps 50:9 *Asperges me hyssopo* | a vocative inserted into the most familiar verse in the range — the class 7a″ exists for |
| 0338C | ***Factae sunt** lacrymae meae panes die ac nocte* | Ps 41:4 *Fuerunt mihi lacrimae meae panes* | lexical substitution in a proof-text listing the works penance exacts |
| 0338D | *Lapides **vivi volvuntur** super terram* | Zech 9:16 *lapides **sancti elevabuntur** super terram ejus* | two substitutions; the gloss glosses *lapides* as *dogmata veritatis*, so "living" and "rolled" are the words it is reading |
| 0339A | *Quicunque **aedificaverit** super fundamentum **aurum et argentum*** | 1 Cor 3:12 *Si quis autem superaedificat super fundamentum **hoc**, aurum, argentum, lapides pretiosos* | the Vulgate's demonstrative and third material drop out; the verb changes voice and tense |
| 0339B | *Vir aut mulier **in quo fuerit plaga leprae et eat*** | Lv 13:29 *Vir, sive mulier, in cujus capite vel barba germinaverit lepra* | the lemma is quoted as the proof that laymen are included (*ideo additum est*), and only *mulier* survives from the verse |
| 0340C–D | *Verbum caro factum est, et **habitabit** in nobis* | Jn 1:14 *et **habitavit** in nobis* | future for past, in a gloss whose whole point is that the tabernacle **is** the inward man |
| 0341B | *Nemo enim novit Patrem nisi Filius et cui voluerit revelare* | Mt 11:27 *neque Patrem quis novit, nisi Filius, et cui voluerit **Filius** revelare* (after *nemo novit Filium, nisi Pater*) | the reciprocal first half is gone and the subject of *voluerit* is left unexpressed |
| 0341C | *Mortificati estis per corpus Christi* | Rom 7:4 *mortificati estis **legi** per corpus Christi* | the dative that says what we died TO is dropped, and the gloss is expounding release from the law |
| 0341C | *Non erunt tibi alieni* | Ex 20:3 *Non habebis deos alienos coram me* | the noun *deos* is absent, so the commandment quoted has no object |
| 0342A | *qui factus est ex muliere, ut eos qui sub lege erant, redimeret* | Gal 4:4-5 *factum ex muliere, ***factum sub lege***, ut eos qui sub lege erant, redimeret* | **load-bearing:** the gloss concludes *recte ergo dicitur vitulus, quasi mandatis legis subjugatus*, and the clause Migne drops is the only one that proves it |
| 0343A | *Sicut portavimus imaginem **terrae*** | 1 Cor 15:49 *imaginem **terreni*** | "of the earth" for "of the earthly man," in a sentence contrasting *coelestis est homo noster* |
| 0343B | *ipsa autem coelestia **majoribus** hostiis **expiantur*** | Heb 9:23 *ipsa autem caelestia **melioribus** hostiis quam istis* | "greater" for "better," and a verb supplied that the Vulgate does not have — the gloss's *quam istis* still hangs off Migne's added verb |
| 0344D | *Non facies tibi **idolum** nec omnem similitudinem eorum quae in coelo sunt **sursum** … et quaecunque **subtus terram*** | Ex 20:4 *Non facies tibi **sculptile** … quae est in caelo **desuper** … nec eorum quae sunt **in aquis** sub terra* | three substitutions, and the gloss's next words are *conflatilem vitulum fecerunt* — it is reading *idolum* |
| 0345B | *Qui enim videt **Filium**, videt et Patrem* | Jn 14:9 *qui videt **me**, videt et Patrem* | the first person of the printed Gospel becomes a title, which is precisely what the gloss needs (*Christum, scilicet qui est imago Patris*) |
| 0345D | ***Captabant** in animam justi, et sanguinem innocentem **condemnabant*** | Ps 93:21 ***Captabunt** … **condemnabunt*** | future becomes imperfect: a prophecy becomes a report |
| 0347B | *Concupiscentia enim parit peccatum, peccatum mortem* | Jas 1:15 *concupiscentia **cum conceperit**, parit peccatum: peccatum vero **cum consummatum fuerit, generat** mortem* | both temporal clauses are cut, which is what lets the gloss set the three terms out as a bare series (mother, daughter, granddaughter) |
| 0347C | *In pace nos vocavit Deus, pacem cum omnibus habeamus* [n: (Rom. XII)] | 1 Cor 7:15 *in pace autem vocavit nos Deus* + Rom 12:18 *cum omnibus hominibus pacem habentes* | two verses spliced under one citation, and the citation names only the second |

### Divergences from the Clementine noted and deliberately NOT marked

Each was collated and judged immaterial: an abridgment the *etc.* already announces, a spelling, or
a word order that leaves the gloss's argument untouched.

- **0336B** *Quicunque in Christo baptizati sumus* — Rom 6:3 *quicumque baptizati sumus in Christo
  Iesu*; word order, and *Iesu* dropped.
- **0336D** *cum hujusmodi nec cibum sumere* — 1 Cor 5:11 *cum ejusmodi*.
- **0341D** *In terra deserta invia et inaquosa* — Ps 62:3 *in terra deserta, et invia, et inaquosa*.
- **0342A** *Non veni **legem** solvere, sed adimplere* — Mt 5:17 *non veni solvere, sed adimplere*;
  the object is carried down from the verse's own first clause.
- **0342C** *Non dabis sanctum tuum* — Ps 15:10 *nec dabis*.
- **0343C** *Malitia ejus ascendit coram me* — Jon 1:2 *ascendit malitia ejus coram me*; word order only.
- **0344A** *Sciens **Jesus** quia omnia dedit ei Pater* — Jn 13:3 *sciens quia…*.
- **0346A** *Si invicem comeditis* — Gal 5:15 *quod si invicem **mordetis, et** comeditis*.
- **0346C** *quia qui videt Filium, et credit in eum, **habet** vitam aeternam* — Jn 6:40 *ut omnis
  qui videt Filium et credit in eum, **habeat** vitam aeternam*.
- **0347D** *Si **circumcidimini*** — Gal 5:2 *si circumcidamini*.
- **0348A** *Quis enim consensus templo Dei cum idolis?* — 2 Cor 6:16 *quis autem consensus templo
  Dei cum idolis*; unmarked in Migne (no italics, no note), so it is the gloss's own voice.

---


## Stint 0020 — `cruces-0020.md`

*As filed by the stint, unchanged.*

Stint file; the orchestrator merges it with the peers'. **Every column in the range was read at
the plate before these entries were written** — Gallica `ark:/12148/bpt6k5505319w` f174–f181,
`f = (column + 1) / 2`, calibrated against the printed corners on f174 (347 / 348) before any
reading; the archive copy `patrologiaecurs04migngoog` (PDF page `= (column + 11) / 2`) was
brought in as second witness at cols 0351–0358, calibrated on pp. 181–184 (351/352 … 357/358).
Reads recorded in `data/briefs/8961-PLATE-READS-0020.json`; TEI patches in
`data/briefs/8961-PENDING-TEI-PATCHES-0020.md`.

---

### Plate vs. our TEI — five digitization losses, no `[sic:]` fired

All five have **both printings agreeing against our file**, which is the class the standing rule
assigns to the digitization and not to Migne. Detail in the patches file; in brief:

| col | our TEI | the plate | English renders |
|---|---|---|---|
| 0352A | *edehat* | **edebat** | "did not yet eat" |
| 0352D | *tornicantur* | **fornicantur** | "commit fornication" |
| 0352D | `(I Cor. XL.)` | **(I Cor. xi.)** | note kept verbatim (verifier) |
| 0354A | `(Psal. XXXVIII)` | **(Psal. xxxiii.)** | note kept verbatim (verifier) |
| 0356A | *nommetur* | **nominetur** | "lest he be named" |

⚠ **0354A is the one that would have produced a false public finding.** Read only in our file,
`(Psal. XXXVIII)` on *Vultus autem Domini super facientes mala* looks like one of Migne's
misfired citations (Ps 33:17 is the verse). The plate reads **xxxiii** on both printings: the
misfire is ours. Nobody should log it against Migne.

### Press variants — the two printings differ, so no marker and no patch

**0354C — *tan git* / *tan-git*.** Gallica breaks the word across the line with **no hyphen**
(hence our TEI's *tan git*); the archive (p.182, 400 dpi) prints **tan-** cleanly. A word-division
defect is exactly Pattern 10's shape, but a defect on one printing only does not license a public
accusation against Migne's type. English reads "openly touches him who does the same as his
neighbour"; nothing marked, nothing patched. Re-cropped with the full right margin in before the
call, per the standing crop caution.

**0358D — *dis cernimus* / *dis-cernimus*.** Identical mechanism, identical disposition: Gallica
sets *dis* at the line end with no hyphen, the archive sets *dis-*. English reads "by the nose we
distinguish odours and stenches".

**0352D — the terminal stop after *sanctorum vindicans injuriam*.** Gallica prints none; our TEI
supplies one; the archive appears to carry one. One printing only, so nothing is asserted: the
English keeps the stop.

### Migne's own misfired citations — reproduced verbatim, plate-confirmed

Each of these was checked at the plate to make sure the misfire is HIS and not our file's:

- **0348D** *Omne opus servile non facietis in eo* `[n: (Exod. XXXI)]` — the wording is Lv 23:7 (and
  parallels), not Exodus 31. Confirmed on f174.
- **0351A** *Ponite filium meum Salomonem in mulam meam* `[n: (Eccli. XIX)]` — the verse is
  3 Rg 1:33, and Migne himself attributes it correctly to David in the same sentence. Confirmed
  on f176 and archive p.181. A `[var:]` stands beside it for the wording.
- **0352A** *in paralytico grabatum portante glorificabant Deum* `[n: (Matth. VIII)]` — the
  crowd glorifying God for the paralytic is Mt 9:8. Confirmed on f176.
- **0358A** *Anima quae peccaverit ipsa morietur* `[n: (Ezech. XVIII; Isa. LIII)]` — Ezech. XVIII
  is right; the second member does not answer to Isa 53 in any wording. Confirmed on f179.
  (The archive's digits here read *xliii*; jbig2 is never a sole witness for a numeral, and
  Gallica and our TEI agree on LIII.)
- **0359C** *Non superbum, non iracundum, non vinolentum* `[n: (I Tim. II.)]` — the catalogue is
  Tit 1:7; Migne's own next clause, *Est enim Dei dispensator*, is the continuation of that same
  Titus verse. Confirmed on f180.

### Readings rendered as printed, per Pattern 7

**0359A — the sentence that simply stops.** *Qui viam Dei pergere non potest, et boni operis
exsors est, non ut claudus, qui saltem cum infirmitate tenebat* — and there the gloss breaks off,
with no object, no terminal stop, and VERS. 20 beginning on the next line. **This is Migne's own
truncation, read at the plate (f180): it is not a digitization loss**, so no `[ed:]` is licensed,
and Pattern 8 forbids supplying the stop. The English breaks off in the same place: "not like the
lame man, who at least with his weakness was holding".

**0359D — *Inordinate agendo populum scandalizent*.** A jussive subjunctive with no governing
clause, in a gloss on *Et contaminare non debet*. Rendered as printed ("By acting disorderly let
them scandalize the people"); the sense the passage wants is a *ne* clause. No marker: the type
is sound and nothing is defective, so neither `[sic:]` nor `[cj:]` reaches it (18a).

**0350B — *ne aliena delicta diluere non valeat*.** Both negatives are Migne's and both are in the
English ("lest he be unable to wash away others' offences"). Recorded because a negation stacked
on *ne* is exactly the shape 7a says not to tidy.

### Vulgate divergences — what was fired, and what was checked and cleared

**244 marked spans in the brief; 245 in my Latin.** The single extra is not a lemma: at 0352A our
TEI wraps a bare citation in italics, `*[n: (Matth. VIII)],*`, and the brief's generator (rightly)
skips a span with no word content. Every other span matched the brief in order. Paragraph-bounded
count: 65 / 22 / 49 / 62 / 47 = 245, no unmatched delimiter, and this book carries **zero
guillemets**, as the peers found.

#### Fired — 15 `[var: …]`

| col | verse | Migne prints | Vulgate |
|---|---|---|---|
| 0349A | Ex 16:25 | *Sabbata hodie Domino, non invenietis illud in agro* | *sabbatum est Domini: non invenietur hodie in agro* |
| 0349B | Jac 4:13 | *Hodie et crastino ibimus in civitatem* | *hodie aut crastino ibimus in illam civitatem* |
| 0351A | Lv 19:19 | *Jumenta tua* | *Jumentum tuum* |
| 0351A | 3 Rg 1:33 | *Ponite filium meum Salomonem in mulam meam* | *imponite Salomonem filium meum super mulam meam* |
| 0351A | Pr 31:13 | *inveniet lanam et linum, et operata est utile manibus suis* | *Quaesivit lanam et linum, et operata est consilia manuum suarum* |
| 0351B | Rom 7:4 | *Mortui estis legi* | *mortificati estis legi* |
| 0353A | Job 12:12 | *In senibus est sapientia* | *In antiquis est sapientia* |
| 0353C | Mt 7:2 | *judicaverimus … judicabitur et de nobis … mensi fuerimus, remetietur nobis* | second person throughout |
| 0355A | Rom 8:13 | *Si enim facta carnis spiritu mortificaverimus, vivemus* | *si autem spiritu facta carnis mortificaveritis, vivetis* |
| 0356C | Mt 6:31 | *Ne cogitetis dicentes: Quid comedemus* | *Nolite ergo solliciti esse, dicentes: Quid manducabimus* |
| 0357B | Mal 1:12 | *Mensa Domini deserta est* | *Mensa Domini contaminata est* |
| 0358C | Col 3:1–2 | *Si consurreximus cum Christo, quae sursum sunt sapiamus* | *si consurrexistis … quae sursum sunt sapite* |
| 0361C | Is 56:10 | *Videte quoniam omnes nesciverunt, universi canes muti* | *Speculatores ejus caeci omnes; nescierunt universi: canes muti* |
| 0362A | Ps 41:10 | *Utquid tristis incedo, dum affligit me inimicus* | *quare contristatus incedo, dum affligit me inimicus* |
| 0362B | Dt 16:2 | *Immolabis pascha Domino Deo tuo; oves* | *Immolabisque Phase Domino Deo tuo de ovibus, et de bobus* |

⭐ **The two that carry their own gloss on their backs.** At **0349A** the whole gloss is built on
the plural: *Nota quia non ait, sabbatum, sed sabbata* — and the Vulgate's Ex 16:25 has the
**singular** *sabbatum*, with a passive *non invenietur* where Migne has an active second-person
*non invenietis*. Conform the lemma and the gloss beneath it stops being about anything. At
**0362B** the argument is *Legale pascha significat*, and Migne's *Immolabis **pascha*** is
precisely what the Vulgate does not print there (*Phase*).

Two more worth naming: **0353A** *In senibus* (for *In antiquis*) sits under the lemma *Coram cano
capite* and supplies the very word — old men — the gloss is expounding; and **0353C / 0355A /
0358C** are one recurring habit, the glossator turning a second-person scripture into a
first-person plural (*judicaverimus*, *mortificaverimus*, *consurreximus*) so that the precept
falls on "us". That is a pattern, not three accidents, and it is why each was marked rather than
smoothed.

#### Checked against the Clementine and deliberately NOT marked

Every ⚠ and ⚑ in the brief was walked word by word. These came back divergent-but-immaterial —
abridgment, an *etc.* cut, a particle, or a word order — and take no marker:

- **0349B** 1 Tim 2:4 *qui vult omnes homines salvos fieri* (Vulg. *qui omnes homines vult salvos
  fieri*) — word order only.
- **0350D** Lv 19:16 lemma *Non ambulabis in domo* and **0350A** *Non levabitis*, **0351B**
  *custodita homini*, **0351C** *Visitatio erit eis*, **0355C** *In conspectu filiorum generis
  sui*, **0356B** *Sine filiis morietur*, **0360B** *Omnem immunditiam animae*, **0361C**
  *linguam incisam*, **0361D** *Non offerent haec Domino*, **0360D** *Super ipsum*: **all
  explicitly labelled LXX by Migne.** A divergence Migne himself attributes to another version is
  not a `[var:]`.
- **0350B** *Non nocebis proximo* and *Non rapies* — Augustine's own summary formulae inside a
  quotation of Augustine, not lemmata of Leviticus.
- **0350C** Jac 2:10 *Qui enim in uno offenderit, omnium reus est* — a compression of *Quicumque
  autem totam legem servaverit, offendat autem in uno, factus est omnium reus*; unitalicised in
  Migne, i.e. not offered as a quotation.
- **0353A** Lv 19:31 lemma *Neque ab ariolis* (Vulg. *nec ab ariolis*) — a particle.
- **0353B** Act 15:10 *super cervices discipulorum* (Vulg. *cervicem*) — number of a noun with no
  weight in the gloss.
- **0353C** Mt 15:3 *Quare transgredimini … propter traditiones vestras* — drops *et vos*, plural
  *traditiones*; the gloss turns on neither.
- **0354A** Lv 20:3 *Ego ponam faciem meam* (Vulg. *et ponam*) — a particle.
- **0357D** Is 1:8 *Relinquetur filia Sion sicut umbraculum vineae* (Vulg. *derelinquetur … ut
  umbraculum in vinea*) and Os 2:5 *Fornicata est mater eorum* (drops *enim*) — worn quotation
  formulae; the gloss reads the same either way. ⚠ Borderline; recorded so a later reader can
  disagree cheaply.
- **0358B** 2 Cor 11:2, **0359C** 1 Tim 6:10, **0360C** 1 Cor 11:29, **0361B** 1 Cor 15:41
  (*Stella enim differt a stella*, word order), **0361D** 1 Cor 6:18 (*enim* for *autem*),
  **0359D** Heb 13:10 (*comedere* for *edere*) and Heb 10:19–20 (*carnem ejus* for *carnem
  suam*): checked, immaterial.
- **0360D** Pr 23:1 *Cum sederis … quae posita sunt ante te* (Vulg. *Quando sederis … quae
  apposita sunt ante faciem tuam*) and **0362A** Sir 11:30 *Ante mortem non laudes hominem*
  (Vulg. *ne laudes hominem quemquam*) — abridged proverbs quoted for their drift.
- **0354B** Lv 18:7 *Non revelabis turpitudinem patris tui* — the glossator's back-reference to
  his own earlier lemma, not a fresh citation.
- **0358A** Lv 21:12 lemma *De sanctis non exibit* (Vulg. *Nec egredietur de sanctis*) — Augustine's
  lemma form, and Migne says so with `(ID., quaest. 82.)`.
- **0352D** Ps 21:21 *Erue a framea, Deus, animam meam, et de manu canis Unicam meam* — agrees
  with the Clementine exactly, capital *U* and all; the capital is Migne's and is reproduced.

### Pattern 9 items declined

- *Moses* beside *Moyses* in the same work (0359C vs 0348D) — both attested; no marker.
- *grossescunt* (0359A), *refricant* (0355B), *cicinnos* (0352C), *tornicantur*-corrected
  *fornicantur*: only the last is a defect at all, and it is ours (above).
- *pascha* for *Phase* at 0362B is a real-word variant of the received text, so it took a
  `[var:]`, not a `[sic:]`.

### Marker tally

`[var:]` 15 · `[sic:]` 0 · `[ed:]` 0 · `[d:]` 0 · `[cj:]` 0.

Zero `[sic:]` is the honest number for this range: the five candidates that looked like Migne's
broken type (*edehat*, *tornicantur*, *nommetur*, *tan git*, *dis cernimus*) all dissolved at the
plate — three into digitization losses and two into press variants. The prior held: on a collated
lemma be generous with `[var:]`, on a single word be stingy with `[sic:]`.

---


## Stint 0025 — `cruces-0025.md`

*As filed by the stint, unchanged.*

Glossa ordinaria on Leviticus 23–27, Anselm of Laon and his school, PL 113. This range carries
the book to its end: the feasts, the jubilee, vows and valuations, and the closing *Haec sunt
praecepta* at 0380A.

**Every column in this range was read at the plate, on BOTH printings, word by word.** Gallica
IIIF `ark:/12148/bpt6k5505319w`, leaves **f181–f190**; the on-disk archive.org copy
`patrologiaecurs04migngoog`, PDF pages **186–195**. Both page maps were re-calibrated against
printed corner numbers before any collation (Gallica f181 = 361/362; archive p.186 = 361/362;
archive p.195 = 379/380). The read record is `data/briefs/8961-PLATE-READS-0025.json`; the eight
TEI divergences are in `data/briefs/8961-PENDING-TEI-PATCHES-0025.md`.

**Lemma-span count:** 359 marked spans in the Latin of chunks 0025–0029, counted both as a
whole-file total and paragraph-bounded, with no unmatched delimiter in either direction (all 718
asterisks pair inside their own line). The brief's figure is 359. **They agree, and the two
counting methods agree with each other.** This work sets its lemmata in italic and carries **no
guillemets at all** in this range, as the peers found for cols 0295–0336.

**No `[sic:]` was fired anywhere in this range**, and no `[d:]`. Nothing in these nineteen
columns was found defective on *both* printings. Markers fired: **24 `[var:]`** and **one
`[cj:]`**.

---

### 1. Fixed English equivalents — the feast, jubilee and valuation vocabulary

Held to one equivalent per Latin word across the whole range. Where the peers' table
(`cruces-0010.md` §1) already fixed a word, that choice is followed — in particular **sicle**
for *siclus* and **obols** for *oboli*, both already in the shipped 0000–0014 English.

| Latin | English | note |
|---|---|---|
| *feriae* | feasts | *Hae sunt feriae Domini* = "These are the feasts of the Lord", at 0362B and again at 0365D |
| *festivitas* | festival | |
| *solemnitas* | solemnity | three words, three English words, because Migne uses all three within nine columns |
| *phase* | Phase | kept as printed, following the peers |
| *azyma / azymus* | the unleavened bread / unleavened | |
| *manipulus* | sheaf | |
| *liba / libamentum / libatio* | cakes / drink offering / drink offering | *liba* is the baked thing, *libamentum* and *libatio* the poured one; kept distinct because 0363B sets bread against wine |
| *sabbatismus* | sabbath-rest | Heb 4:9 at 0368A; not "sabbath", which is *sabbatum* in the same sentence |
| *sabbatum sabbatorum* | a sabbath of sabbaths | 0365C |
| *jubilaeus / jubilaeum* | jubilee | |
| *aestimatio* | valuation | never "estimation"; the noun is the subject of the whole of ch. XXVII |
| *aestimare* | to value | *quantum ille aestimaverit* = "as much as he shall have valued" |
| *definitio* | determination | kept distinct from *aestimatio*, which stands beside it at 0377D |
| *pretium* | price | |
| *siclus* | sicle | peers' choice, followed |
| *didrachma / drachma / obolus* | didrachma / drachma / obol | |
| *decimae* (*duae decimae*) | tenth parts | the measure of Lv 23:13, not a tithe; *decima* in the tithe sense does not occur in this range |
| *votum / vovere* | vow / to vow | |
| *anathematizare* | to anathematize | 0378C |
| *consecrare* | to consecrate | |
| *sanctificare / sanctus* | to sanctify / holy | the whole paragraph at 0376C–D turns on holding these apart |
| *conversatio* | manner of life | ~20 occurrences; never "conduct" or "converse" |
| *poenitentia* | penance | *poenitere* = to repent |
| *redimere / redemptio* | to redeem / redemption | |
| *primogenita* | the firstborn | |
| *pondus / ponderare* | weight / to weigh | 0377D–0378A |
| *sensus* | senses (pl.), sense (sg.) | 0375D–0376A plays on the five senses and on *sensibiliter / intelligibiliter* |
| *magisterium* | teaching / mastership | ⚠ two English words for one Latin, because Migne has two senses eight columns apart: the office one *subit* (0371B, "mastership") and the instruction disciples no longer need (0380A, "teaching"). Recorded here rather than forced. |

### 2. ⭐ The one that matters most — a printed negation reversing the Apostle

- **0372D** — Migne prints *securi erimus in terra nostra, **quia caro non concupiscet adversus
  spiritum** [n: (Galat. IV)]*. The Vulgate at Gal 5:17 reads *caro enim concupiscit adversus
  spiritum* — the flesh **does** lust against the spirit; it is the premise of Paul's whole
  argument. **Confirmed word for word on both printings** (Gallica f186 at 3×; archive p.191).
  The negation is carried into the English exactly as printed, per 7a, and a `[var:]` stands
  beside it. Migne's own address, *Galat. IV*, is also wrong: the verse is in ch. V.
  ⚠ Note that the gloss is *built* on the negative — the promise of Lv 26:5-6 is security
  *because* the flesh will not fight — so this is not a slip whose sense the context refutes.
  It is a divergence the exposition depends on, which is exactly why it must be shown and not
  smoothed.

### 3. ⛔ Twenty archive-only readings — NOT reportable, listed so nobody re-raises them

The archive.org copy is jbig2, a symbol-substitution codec, so its errors are visually similar,
well-formed, and **construe**. Every one of these was clean on Gallica and agreed with our TEI.
**None is a press variant and none is Migne's.** Recorded because two of them would have been
damaging if believed.

| col | archive prints | Gallica + our TEI |
|---|---|---|
| 0362C | VERS. **56.** | VERS. 5. |
| 0362D | holoc**au**tomata | holoc**aus**tomata |
| 0364C | agni mandator**em** | mandator**um** |
| 0364C | Non seca**bis** | Non seca**bitis** |
| 0364C | Par**th**i | Parti |
| 0366D | int**ur** videtur retineri | int**us** |
| 0368D | s**iu**e qua | s**in**e qua |
| 0370C | et **ad**jectis peccatoribus | **ab**jectis ⭐ |
| 0371A | repara**tis** | repara**stis** |
| 0371A | hist**ro**num | hist**rio**num |
| 0372B | non det escam**.** | (no stop) |
| 0372C | Ea ver**a** | Ea ver**o** |
| 0372D | **Quasi** pax erit | **Quia** pax erit |
| 0373B | Si quod **et** aliud | **est** aliud |
| 0373B | Venit ad **non** Deus | ad **nos** Deus ⭐ |
| 0374A | **nomini** servivimus | **nemini** servivimus ⭐ |
| 0374B | **(** Non solum legislator | (no paren) |
| 0376C | (Matth. **xxxv**) | (Matth. **xxv**) |
| 0377A | (Joan. **xvi**) | (Joan. **xiv**) |
| 0377C | fuerat**.** | (no stop) |

⭐ marks the three that construe and would have inverted a sense: *adjectis* ("the sinners being
**added**") for *abjectis* ("cast out"); *ad non Deus* — the same s→n substitution as the
11064 *apud non* case; and *nomini* for *nemini*, which would have swallowed the negation of
Jn 8:33 and left "we have served a name."

### 4. ⚑ Press variants — the two printings differ, so there is nobody to accuse

No `[sic:]` fired at any of these, and no TEI patch. Rendered by sense, logged here.

#### 4a. ⭐ THE GALLICA COPY DROPS THREE WORD-INITIAL LETTERS IN ONE PARAGRAPH — 0367D

Migne's *Et eduxerunt* gloss. Gallica f184 prints, on three consecutive lines:

> Experimento ipso **egem** confirmatam ostendit, ut et tu blasphemare **imeres**, et peccatum
> fugeres, quod non solum prin-/**eps**, sed tota multitudo vindicat.

The archive (p.189) prints *legem*, *timeres*, *princeps*. **Our TEI, which follows the Gallica
exemplar, carries *egem* and *imeres*** (it silently joined the *prin-/ceps* hyphenation).
Verified with the full left margin in frame at 3×, from x = 0 of the leaf: the affected lines
begin at the same left margin as their neighbours, so this is the copy's own left-edge inking
failure and not a crop artefact. **A stint working from Gallica alone would have fired two false
`[sic:]` against Migne here** — the exact hazard the runbook names. English renders "the law",
"mightest fear", "the prince".

#### 4b. 0366D — *interdura* / *interdum*, the reverse direction

Gallica and our TEI print the non-word ***interdura***; the archive prints ***interdum***.
Gallica's type at that line-end is smudged, so it may be a damaged *interdum* rather than a
distinct setting. Either way one printing is clean and the other is not: rendered "sometimes",
no marker.

#### 4c. 0376D — *ntelligibilem*, archive defective

The archive drops the word-initial *i* of *intelligibilem* (*cognationem tam sensibilem quam
ntelligibilem*). Re-cropped with the whole column margin in frame to be sure. Gallica and our
TEI are whole. This is the mirror of 4a and worth pairing with it: **neither printing is the
correct one, and the direction of the defect changes from leaf to leaf.**

#### 4d. 0368A — an unresolved verse number, *VERS. 4* / *VERS. 3*

At the *Seres agrum* lemma the archive prints **VERS. 4** — the correct locus, Lv 25:4 *seres
agrum tuum* — while Gallica and our TEI print **VERS. 3**, repeating the number that stands over
the preceding *Sex annis* gloss. Both digits are well-formed at 4× on their own copy, so this is
not obviously a jbig2 substitution; a substitution that happened to *correct* Migne would be a
remarkable coincidence, which argues for two genuine press states. **The English follows the
twin (VERS. 3)** rather than silently supplying a number the reader's Latin column does not
show. Flagged for the orchestrator: if the patch pass reads a third copy, this is the site.

#### 4e. Two terminal stops the archive carries and Gallica does not

**0372B** *non det escam* and **0377C** *neque ipsius emptoris fuerat*. Both sentences end
without a stop in Gallica and in our TEI, and with one in the archive. The English carries the
stop, on the press-variant rule (one printing is clean); both are recorded here so that a reader
meeting our full stop can see it is one printing's and not our invention.

### 5. Migne's own misfired citations — his, confirmed on both printings, not ours

Reproduced verbatim in the `[n: …]` markers, as the rule requires. Where the quoted text also
diverges, the point is folded into the `[var:]`; where only the address is wrong, it is recorded
here alone.

- **0364A** *(Matth. IX)* on *Vade et vende omnia quae habes* — Matthew has it at ch. XIX.
  Folded into the `[var:]`.
- **0364C** *(Joan. X)* on *Cumque elevaverit eos sacerdos cum panibus primitiarum* — the words
  are Lv 23:20 verbatim, a Leviticus lemma with a John address. Text clean; no `[var:]`.
- **0364D** *(Matth. VIII)* on *Sunt enim quae nunc non possunt nobis revelari* — the allusion is
  to Jn 16:12. Not a quotation, so no `[var:]`.
- **0367A** ⭐ *(Joan. XXXI)* — **John has twenty-one chapters.** The sister of the peers' *Isa.
  LXXIV* find at 0334C. Folded into the `[var:]` on Jn 3:18/3:36.
- **0367C** *(Psal. LIX)* on *Filii hominum, dentes eorum arma et sagittae* — the verse is
  Ps 56:5. Text clean against the Clementine; no `[var:]`.
- **0369C** *(Matth. VI)* placed on *Dabo benedictionem meam*, which is Lv 25:21; the Matthew
  address belongs to the *solliciti quid comederent* allusion three words earlier.
- **0370D** *(Matth. XVII)* for Mt 7:2. Folded into the `[var:]`.
- **0372D** *(Galat. IV)* for Gal 5:17. Folded into the `[var:]` of §2.
- **0373A** *(Matth. XVII)* on *Hoc genus non ejicitur* — Mt 17:20, correct.
- **0374A** *(Joan. III)* on *Semen Abrahae sumus* — the verse is Jn 8:33, quoted verbatim.
  Address wrong, text clean; no `[var:]`.
- **0375A** ⭐ *(I Tim. II)* on *Caecitas ex parte contingit in Israel* — the passage is Rom 11:25,
  and I Timothy has nothing resembling it. Folded into the `[var:]`.
- **0377A** *(Joan. XIV)* on *cujus vitis Christus, Pater agricola* — Jn 15:1. Confirmed on both
  printings (the archive's *xvi* is a jbig2 reading, §3).

### 6. The `[var:]` markers — 24, each collated word for word and plate-confirmed

Against `sources/vulgate/clementine-flat.txt`, then confirmed on the plate before firing.

**Chunk 0025** — 0364A Mt 19:21 (*omnia* imported from Lc 18:22, cited Matth. IX) · 0364B
2 Cor 2:14 *scientiae* for *notitiae*, the word the gloss then expounds · 0364D Rom 11:33 without
*divitiarum* · 0364D–0365A Heb 4:10 *in illam requiem* for *in requiem eius*, in a gloss whose
whole point is that God's rest signifies ours.

**Chunk 0026** — 0366A Eccl 9:8 *non deficiet* (future indicative) for jussive *non deficiat*,
which turns the precept into the promise of abiding mercy the gloss reads out of it · 0366C
Prv 3:28 + 27:1 recast, with *nescitis* pluralizing the second clause · 0366C the *peccatum non
fecit* proof-text cited *(Isa. LIII)* but worded as 1 Pt 2:22 · 0367A Jn 3:18 with *in Filium*
imported from 3:36, plus the impossible *Joan. XXXI*.

**Chunk 0027** — 0368C 1 Th 4:15 plural *descendent* and *incorrupti* (from 1 Cor 15:52) for
*primi* · 0369A "1 Cor 3:22" printed as *Omnia vestra sumus sicut et vos nostra*, which is the
shape of 2 Cor 1:14 · 0369C ⭐ Mt 6:34 as *Nolite cogitare de crastino* where the Vulgate has
*Nolite solliciti esse* — **the gloss's own next clause is *lex jubet ne COGITENT de tribus
annis*, so the contrast the sentence is built on lives in the divergent word** · 0370D Mt 7:2
*in quo judicas* for *in quo iudicio iudicaveritis* · 0371C 1 Tim 5:8 *Qui enim* for *Si quis
autem*, turning a condition into a maxim, with *abnegavit* for *negavit*.

**Chunk 0028** — 0372D ⭐ Gal 5:17 with the printed *non* (§2) · 0373B Mt 25:40 heavily
recast · 0373B "Col. III" *Venit ad nos Deus et habitat in nobis*, which is in no Vulgate
verse · 0373C Bar 3:36,38 *reputabitur ... ad eum* for *aestimabitur ... adversus eum*, and
*in terra* for *in terris*, in the gloss on *Ambulabo* that makes the point of the incarnation ·
0375A ⭐ Rom 11:25 *contingit*/*subintraret* cited as I Tim. II · 0375B Mal 3:1 *Subito* for
*statim*.

**Chunk 0029** — 0375C Mt 5:48 without *caelestis* · 0375D ⭐ 1 Pt 2:2 *infantes rationabiles*,
moving *rationabile* from the milk to the infants — **and the gloss is precisely about the
one-month-old newly begotten in the faith**, so the transfer is load-bearing · 0377D ⭐ Lv 27:25
*Omnis aestimatio siclo sanctuarii pondera* for *ponderabitur*: Migne's lemma has lost its verb,
and the gloss then supplies one of its own (*ut omnis definitio sanctis fiat ponderibus*) ·
0378B 1 Cor 4:17 *filius meus dilectus* for *carissimus et fidelis*, and *ipse* for *qui* ·
0379A 2 Tim 4:11 *Assumens Marcum, deduc tecum* for *Marcum assume, et adduc tecum*.

### 7. The one `[cj:]` — 0368B, *Dominum* for *Dominus*

Migne prints *Non prohibet **Dominum** vesci eis quae sponte sunt, sed reponere in usum
proprium.* The accusative is a real Latin form in a real slot (subject of the infinitive after
*prohibet*), so nothing is broken and Pattern 12 has nothing to wrap — but the faithful English
then says that **the Lord** is the one forbidden to eat, when the sentence is plainly about what
the lawgiver forbids the people. That is the agency-inversion class of 7a's fifth mechanism, and
Pattern 18 is where it lives. Rendered as printed with the gloss beside it:
`He does not forbid the Lord [cj: *Dominum*; read *Dominus*, "the Lord does not forbid"] to feed
upon the things that grow of themselves`. Confirmed on both printings.

### 8. Divergences checked and CLEARED, with reasons

Itemized because a report that lists only findings cannot be told from one by a reader who never
read. All were collated against the Clementine and, where the wording was at issue, against the
plate.

- **0362C** *ut in omnem terram exeat sonus eorum* (Ps 18:5 *exivit*) — the subjunctive is the
  gloss weaving the verse into its own purpose clause, not a divergent copy-text. No marker.
- **0363B** Mt 26:28 without *enim* and *novi testamenti* — an abridgment in a sentence about the
  *libatio*; nothing in the gloss turns on the dropped words.
- **0363D** Mt 5:21-22 without *quia* — same class.
- **0364A** Jn 1:29 *peccata mundi* for *peccatum mundi* — a number difference with no exponent
  in the gloss, which is about the seven gifts. Declined.
- **0365B** Rom 6:19 abridged mid-verse; **0365C** Mt 18:4 with *se humiliaverit* transposed;
  **0365C** 2 Cor 5:1 compressed inside an *usque ad* tail — all three are abridgment, not
  divergence.
- **0366B** Ps 109:7 verbatim ✓. **0366C** Jn 1:9 truncated at *venientem* ✓ (no *in hunc
  mundum*, but the sentence stops there).
- **0366B** Lv 24:3 *Usque in mane* for *usque mane* (the brief's one ⚑ in this range, matching
  only Ex 16:23) — a preposition, no sense change. Declined.
- **0367D** Mt 5:39 close enough to the Clementine to be an ordinary memoriter quotation.
- **0368B** Ps 127:2 verbatim ✓. **0368D** Heb 12:14 verbatim ✓ — worth naming, since this is
  the verse the 7914 read found silently conformed (*castimoniam* → "holiness"); **here Migne
  agrees with the Vulgate and there is nothing to mark.**
- **0369D** Ps 127(128):8 verbatim ✓. **0370B** Mt 13:44 verbatim ✓. **0371C** Lc 19:9 with
  *huic domui* transposed — word order only.
- **0372B** Prv 3:18 *apprehenderunt* for *apprehenderint* — tense inside an *usque ad* tail.
- **0372C** Ps 103:15 recast as *Panis enim cor hominis confirmat, vinum laetificat* — I fired
  no `[var:]` here **and want the reason on record, because it was close**: the division of
  labour the gloss builds on (bread strengthens, wine gladdens) is the Vulgate's own; what
  Migne changes is the order and the mood, not the assignment.
- **0372C** Phil 3:13 abridged. **0373A** Mt 17:20 *cum oratione* for *per orationem* — a
  preposition. **0373B** Rom 13:9 *restauratur* for *instauratur* — near-synonym, confirmed on
  both printings.
- **0373D** Jn 6:61 without *et*. **0374A** Jn 8:33 verbatim ✓ (address wrong, §5). **0374D**
  Rom 2:28 abridged. **0375B** Ps 83:8 and Ps 49:2-3 verbatim ✓. **0375A** Lv 26:44 *Attamen*
  for *Et tamen*.
- **0378A** Lc 2:23 verbatim ✓ — note this citation is printed *inside* the italic run as
  `(Lucae II)`, not as a `[n: …]`, and is reproduced in place.
- **0364C** *Non complebitis missionem vestram* — not a Vulgate reading at all, and deliberately
  so: the gloss's whole point is *differentiam innuit ipsa mutatio verborum*, Migne setting two
  forms of Lv 19:9 / 23:22 against each other. Marking one of them as divergent would be marking
  the thing the sentence is about. No marker.
- The LXX renderings (*holocaustomata* 0362D, *χίδρα νέα* 0363B, *pauperi et proselyto* 0364D,
  *egressus* 0365D, *Homo homo* 0367B, *Contritionem pro contritione* 0367C, *Ad agrum terrae
  aestimabuntur* 0370B, *Ligna campi* 0372B, *In conspectu vestro morte vestra* 0372D, *Et
  apponam castigare vos septies* 0373D, *Peccata sua placita habebunt* 0374D, *honorem animae
  suae* 0375B) and the Aquila/Symmachus/Theodotion readings at 0375B and 0376B are announced as
  such by Migne and are not measured against the Clementine.

### 9. Migne's own reproduced oddities, carried and not marked

- **0365A, 0372C** — Migne's own square-bracketed alternatives, *Quasi **[sicut]** non est opus*
  and *cum obscura **[occulta]** explanantur*. Confirmed on both printings. They are his
  editorial brackets, so they pass through the English untranslated, on the same footing as an
  `[ *al.,* …]` variant. Neither is ours.
- **0372A** *Si in praeceptis* with no stop before *Quid fieri* — both printings, both columns of
  the lemma. Carried.
- **0369D, 0373A** *Et centum*, *Usque ad annum* — lemmata with no closing stop before the gloss
  begins. Both printings. Carried.
- **0374B** the elliptical *Gladium, spiritus, quod est verbum Dei, ... ne Vetus Testamentum
  habere cum Evangelio contradicant* — the final clause will not construe cleanly (an infinitive
  governed by nothing). Rendered as closely as the printed words allow, "lest they gainsay the
  having of the Old Testament together with the Gospel," and logged rather than smoothed.
- **0380A** *frustra **conatis** hunc subducere, illum inducere* — a dative/ablative participle
  with no head noun, an anacoluthon. Rendered "in vain for those who strive to withdraw this
  one," not converted into a second-person "in vain do you strive," which would have been a
  silent repair. Confirmed on both printings.
- **0365C** *verum enim et sabbatum sabbatorum annuntiavit* — *verum* stands with an elided
  *sabbatum*. Rendered "for he proclaimed a true sabbath too, and a sabbath of sabbaths."
- **0378B** our TEI's *meditatur,nec* (no space after the comma) is a whitespace artefact of the
  digitization; both plates space it normally. Not a defect of Migne's, too trivial for the
  patch file.

### 10. Not defects (Pattern 9 and the known false positives) — declined, and why

- **The 0379A → 0380A anchor jump in chunk 0029** looks like three missing bands. It is not:
  f190 / archive p.195 shows Leviticus occupying only band A of col. 0379, the LIBER NUMERI title
  block and Praefatio filling the rest of the leaf, and the Leviticus text resuming at band A of
  col. 0380. **Read at the plate rather than assumed**, because this is the seam where the book
  ends.
- The recurring *VERS. 3* at 0368A (§4d) is a press variant, not a band-arithmetic gap.
- *Judaeis* / *Judaeos*, *Moses* / *Moyses* alternating within a column: attested variation in
  Migne's own spelling, not carried type.
- *deculpantur* (0373A) — an unusual verb, but a well-formed one in its slot; translated
  normally ("are cleared of blame"), no marker.
- The three misfired citations whose text is clean (§5) take no `[var:]`, because Pattern 14
  marks a divergent *quotation*, and an `Ibid.`-style address is adjudicated at index time.

---
