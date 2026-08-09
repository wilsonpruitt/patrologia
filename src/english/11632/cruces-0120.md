# Cruces — 11632 chunks 0120–0125 (cols 0474D–0490B)

Philip of Harvengt, *Commentaria in Cantica canticorum*, PL 203. Six chunks,
6,115 Latin words, covering *Caput* XXXIII–L of **Book VI** and **closing the
work**: Cant. 8:1–14 expounded lemma by lemma — *Quis mihi det te fratrem meum*
→ *Apprehendam te, et ducam in domum matris meae* → *Et dabo tibi poculum ex vino
condito* → *Laeva ejus sub capite meo* → *Adjuro vos, filiae Hierusalem* → *Quae
est ista quae ascendit de deserto* → *Sub arbore malo suscitavi te* → *Pone me ut
signaculum* → *Lampades ejus* → *Si dederit homo omnem substantiam* → *Soror
nostra parvula est* → *Si murus est* → *Ego murus* → *Vinea fuit pacifico* →
*Vinea mea coram me est* → *Quae habitas in hortis* → *Fuge, dilecte mi.* Chunk
0125 carries Philip's own peroration and prayer to the Virgin (0489A–0490B) and
then, in italics and with no heading, the **Douai approbation of Joannes
Gallemart, 7 Febr. 1618**. **These are the last six chunks of the work.**

**Marker totals for this range: 4 `[var:]` · 2 `[sic:]` · 0 `[ed:]` · 0 `[d:]` ·
0 `[nt:]` · 0 `[f:]`.**

`node scripts/verify-english.mjs 11632` now reports **`verify OK: 126 chunks,
columns/notes/sections aligned, no duplicate paragraphs`** — with these six the
work is complete and the whole of 11632 passes. Ratios: **1.65 / 1.63 / 1.53 /
1.55 / 1.55 / 1.53**, all inside the 1.35–1.69 band this work has already
shipped. ⚠ **0123 is the shortest English file in the range (1,397 words) because
it is the shortest Latin chunk (863 words against 983–1,152); its ratio is 1.55,
mid-band, its last sentence matches the Latin's (*amore satiabitur jam completo*
→ "shall be satisfied with a love now fulfilled"), and both its `## ` heads and
its terminal anchor `[0484B]` are in place. It is not truncated.**

Column anchors (10/10/11/8/11/11), `[n:]` strings (0/1/1/1/0/2 — each matching
its frontmatter `noteCount`), `## ` head counts (3/4/3/2/4/2) and asterisk counts
were diffed **1:1 against the Latin twins by script, not by eye**: anchors
byte-identical in order and place, `[n:]` contents byte-identical, asterisks
matching 1:1 in all six once our own `[var:]`/`[sic:]` italics are subtracted.
Marginal source-edition numbers *277*–*285* verified in place.

⚑ **GUILLEMETS: zero « and zero » in 6,115 words**, matching the Latin twins
exactly. This is the end of the run described by brief §7c, and it holds to the
last column of the work.

---

## §1 · ⭐⭐ THE FINDINGS THE MERGE SHOULD CARRY

### 1.1 · ⭐⭐⭐ Cant. 8:2 at 0475C — Migne's lemma carries a WHOLE CLAUSE the Vulgate does not have, and it is the LXX/Old Latin reading. Five chapters of exposition stand on it

Migne prints the running lemma of *Caput* XXXIV as:

> *Apprehendam te, et ducam in domum matris meae, **et in cubiculum genitricis
> meae**, ibi me docebis.* (0475C)

Vulg. Cant. 8:2: *Apprehendam te, et ducam in domum matris meae: **ibi me
docebis**, et dabo tibi poculum ex vino condito…* — **no chamber.**

The added clause is verbatim **Cant. 3:4**'s (*donec introducerem illum in domum
matris meae, et in cubiculum genitricis meae*), which this same commentary prints
as its own lemma at **0349D, chunk 0067** — so Philip's Bible has the phrase, and
the question is only whether it belongs at 8:2. **It does, in the Greek and the
Old Latin:** LXX 8:2 reads *εἰς οἶκον μητρός μου **καὶ εἰς ταμιεῖον τῆς
συλλαβούσης με***. So this is not a compositor's eye-skip from 3:4 but an
attested non-Vulgate form of 8:2.

⭐⭐ **And the exposition is built on the added words, at length.** *Caput* XXXIV
turns on the chamber from its second sentence onward:

> *ut in eis deambulet, et ad **cubiculum** gaudeat devenire, ubi cubet, ubi
> pauset, et quietis accubitum valeat invenire. In domum matris suae, et **in
> cubiculum** virgo sollicita sponsum ducit…* (0476A)

and the word then carries the argument through four further chapters, into the
range's most distinctive phrase: *in **cubiculum** meruit jam induci… non se
gaudet de **cubiculo in cubiculum** introduci* (0483B), *in secretiorem thalamum
inducenda* (0483D), and at last ***intra cubiculum cubiculi*** (0484A), "within
the chamber of the chamber," which is unwritable if the lemma has only a house.
It also reaches back: *ab ejusdem cordis **cubiculo** salutem quoque proximam
longe fecit* (0480C).

**`[var:]` FIRED**, immediately after the lemma, naming Vulg. and Vet. Lat./LXX
(Pattern 14). The marker was available here and was **not** at brief §8a's
unmarked cases, because Migne italicises the run: the quotation's boundary is
printed, so the marker asserts nothing the plate does not — the same distinction
cruces-0102 §1.2 drew.

⚠ **This belongs beside brief §6's five, but it has a different profile from all
of them.** Zech. 4:14, Gen. 3:19, Cant. 2:17 *Bethel*, Eccles. 9:1 and Cant. 5:9
are **substitutions, transpositions or an omission**; this is an **addition**,
and an addition with an identifiable versional witness behind it. It is printed
once, so it lacks the recurrence-shape §6 draws its confidence from — **but the
recurrence is supplied by the exposition instead of by a second lemma**, six
times over three columns. The merge should decide whether an addition attested in
LXX/Vet. Lat. and expounded six times counts to the same class.

### 1.2 · ⭐⭐ Cant. 8:12 at 0486C — a DELETION, and it changes who the two hundred are

> *Vinea mea coram me est: mille tui pacifici: et ducenti qui custodiunt fructus
> ejus.* (0486C)

Vulg. Cant. 8:12: *…et ducenti **his** qui custodiunt fructus eius* — "and two
hundred **for them** that keep the fruits thereof" (so Douay).

**One word is gone, and it is the word that carries the syntax.** With *his* the
two hundred are a payment made **to** the keepers; without it the two hundred
**are** the keepers. ⛔ **This is exactly brief §8a's "is a word MISSING?"
discipline, and the answer is only visible if you ask it** — the line reads
perfectly as printed and the familiar English ("and two hundred for them that
keep") arrives before the Latin is counted.

⭐ **Philip's exposition follows the printed reading, not the Vulgate's.** He
takes *ducenti* as a predicate of the givers themselves — *Nec pacifici solum
dici poterunt, **sed ducenti**, id est pacem duplicem conferent largienti*
(0486D) — and closes the chapter by giving the double peace to the keeper
directly: *pacem mereatur duplicem invenire, **quisquis illius fructus amat cura
vigili custodire*** (0486D). The Vulgate's dative would put the two hundred on
the other side of that sentence.

**`[var:]` FIRED**, quoting the dropped word and stating what its loss does. The
English renders what is printed.

### 1.3 · ⭐⭐ Eccles. 9:1 at 0489A — the SEVENTH and LAST printing. The pair is REVERSED, and the wording is unlike the other six

**Asked for explicitly, so recorded explicitly, and with the words named rather
than the verse (brief §8c).** Migne prints, inside Philip's own closing prayer:

> *tuus, tibi serviens, quamvis adhuc nesciens utrum **dignus odio vel amore**
> `[n: (Eccle. IX)]`* (0489A)

Vulg. Eccles. 9:1: *et tamen nescit homo utrum **amore an odio** dignus sit.*

✅ **The pair is REVERSED — *odio* stands before *amore*.** So this printing joins
the six and **the count closes at six reversed to one Vulgate-order**, exactly as
brief §6 predicted. This is the last of the seven and the last column of the
work.

⚠ **But the wording is NOT brief §6's formula, and the merge should have the
difference.** §6 gives the reversed form as *utrum **odio** dignus sit an
**amore***. I grepped all seven sites; there are in fact **three** shapes, not
two:

| chunk | col | printed | order |
|---|---|---|---|
| 0029 | — | (per brief §6, verified there) | reversed |
| 0042 | — | *nescit enim miser homo utrum **odio** dignus sit **an amore*** | reversed |
| 0049 | — | *incerti procul dubio utrum **amore an odio** digni simus* | **Vulgate** |
| 0062 | 0340D | *Nesciens enim utrum **odio** digna sit **an amore*** | reversed |
| 0070 | — | (per brief §6, verified there) | reversed |
| 0074 | 0367A | *timens, quia nesciens, utrum **odio** dignus sit **an amore**?* | reversed |
| **0125** | **0489A** | ***nesciens utrum dignus odio vel amore*** | **reversed** |

**0125 alone drops *sit*, writes *vel* for *an*, and fronts *dignus* before
*odio*.** The other five reversed printings all keep *dignus sit … an*. So the
reversal is stable across all six and the *frame* is not — which is mildly
**better** evidence for a copy-text reading than six identical printings would
be, because six identical strings could be one compositor repeating himself,
whereas a reversal that survives three different re-castings is being carried in
the author's head.

⛔ **NO MARKER, and this is the settled treatment.** The span carries neither
guillemets nor italics — only its `[n:]` — and Philip has dissolved it into his
own sentence (*nescit homo* → *nesciens*, agreeing with *tuus… serviens*), so the
quotation's left edge is not printed and a `[var:]` would assert a boundary the
plate does not have (brief §8a). ✅ **This matches the shipped precedent
exactly**: cruces-0072 §2d treated the 0070 printing as `[n:]`-only, Philip's own
prose, **no marker**, and the four English chunks 0042/0049/0062/0074 all render
the clause inline with the note and carry no `[var:]` on it. **Nothing in the
range is out of step with that.** Siglum `(Eccle. IX)` is **correct**.

⚑ Note the abbreviation: this range and the other six sites print `(Eccle. IX)`,
while chunk 0089 prints `(Eccles. VII)` for Ecclesiastes 7. Both forms are in the
work; neither is corrected.

### 1.4 · ⭐⭐ 0487D — the range's non-scriptural adduced authority is **TERENCE**, italicised, unattributed, and quoted in its MEDIEVAL proverb-form

Brief §8a: *"DO NOT HUNT ONLY FOR BIBLE VERSES."* The 0078 hit was Virgil,
cruces-0102's was the Chalcedonian formula; mine is a Roman comedian. Migne
prints, closing the paragraph after a colon:

> *…nisi forte quod amantes habent iras spe concordiae gratioris, quia, **ut
> quidam praedicat**: *Irae amantium, redintegratio est amoris?** (0487D)

This is **Terence, *Andria* 555**, whose received text reads *amantium irae
amoris **integratio** est*. Two things are worth the merge's time:

1. ⭐ **Migne prints *redintegratio*, not *integratio***, and reverses the
   clause-halves. That is not corruption — it is the **medieval florilegium form**
   of the tag, the shape in which the line circulated in the twelfth century. So
   the divergence is evidence about Philip's source for the proverb, not about
   Migne's compositor. **No marker**: it is not scripture, Pattern 14's witness
   list has no exponent for a comic poet, and §8a governs the boundary.
2. ⭐ **Philip does not name him** — *ut quidam praedicat*, "as a certain man
   declareth" — and Migne supplies **no `[n:]`**. So the citation is invisible to
   every mechanical channel; only the prose pass reaches it.

⚑ **On brief §7b's display rule, this one is worth a second look and I do not
call it a counter-instance.** The quotation is **italicised**, and it is neither
plainly displayed nor plainly run-in: it is introduced by a colon, it is the last
thing in its paragraph, and the paragraph break falls immediately after it. On
§7b's variable that reads as **display**, and the italics are then exactly what
the rule predicts. **Recorded, not reported** — but if the merge wants a test
case for where §7b's "displayed" ends, this is it.

⭐⭐ **And the range has two further classical turns, both entirely bare:**
- **0478D — ASTRAEA.** *quam **Astraea** deservit, urticis, spinis, tribulis
  pleniorem, **et in astra se revehens**, locum illic tenuit gratiorem.* This is
  Ovid, *Met.* i.149–150 (*ultima caelestum terras **Astraea reliquit***), and it
  is doing real work: the chapter's lemma is *Quae est ista **quae ascendit** de
  deserto*, and Philip has set the pagan virgin **leaving** the earth against the
  Virgin **rising** from it, with the constellation Virgo as the hinge. No
  guillemets, no italics, no `[n:]`, no *inquit*, and Ovid is not named.
- **0483C — VENUS and CUPIDO.** *quem usurpat et deturpat **Venus** male suasoria
  vel **cupido***, in Philip's own sentence, unmarked. Not a quotation; recorded
  because it is the second pagan register in three columns and shows the closing
  book is not written in a purely scriptural idiom.

**None of the three takes a marker.**

### 1.5 · ⭐ 0477D — an INTERNAL cross-reference to the work's own books, and it is **CORRECT**

cruces-0102 §2e.1 found the run's first internal self-reference — `[n: (supra l.
I, c. 2)]` at 0437A — and it named the wrong book *and* the wrong chapter, a
third error-shape beyond brief §8b's two. **This range contains the second such
self-reference and it is right**, which per §8b's explicit instruction is worth
logging as loudly as a failure.

Philip writes of the *Adjuro vos* adjuration:

> *Haec autem adjuratio… **in secundo et tertio hujus operis libro** nihilominus
> invenitur.* (0477D)

Checked against the whole work: the book heads stand in chunks 0002 (`LIBER
PRIMUS`), 0025 (II), 0047 (III), 0068 (IV), 0091 (V), 0107 (VI). *Adjuro vos…
**ne suscitetis*** occurs at **0046** (Cant. 2:7 — inside Book II) and **0067**
(Cant. 3:5 — inside Book III). **Both named books are exactly right**, and the
one other *Adjuro vos* in the work, at 0101, is Cant. 5:8, a different adjuration
with a different continuation. Philip's own *in hoc ultimo repetita* is likewise
right: this is Book VI.

⚑ Same paragraph, same shape, also checked and also correct: at 0479B he says the
angels' question *Quae est ista* is *tertio repetitum* and then enumerates the
three — Cant. 3:6 (*instar virgulae… universo pulveri pigmentarii*), Cant. 6:9
(*similis est aurorae… castrorum aciei*) and the present 8:5. **Three, and the
right three.**

**So the internal-self-reference class is now attested wrong once and right
twice.** That is the same "no siglum in this work is systematically wrong"
profile brief §8b reached for *(I Cor. II)* and *(Psal. XCII)*, and it should
keep a merge from generalizing cruces-0102's finding into a rule.

### 1.6 · ⭐ 0481B — a SECOND shape of Migne's own variant bracket, which the brief records as a singleton

Brief §10.6/§10.7 records `[ *alias* caliginoso]` at 0321B and states: *"✅
Checked work-wide 2026-08-08: this is the ONLY instance in all 126 chunks. It is
a singleton, not a class."* That check was for the string *alias*. **Migne's
apparatus takes another form as well**, and it is in this range:

> *vas est commendabile, exinaniri nesciens, copiosum, cor est **incibile
> [ *f.* lucibile]**, cor est lampadi simile, non umbrosum.* (0481B)

`f.` = *fortasse* / *forte*: Migne is conjecturing, not reporting another
reading. The conjecture is right and the context proves it — the clause runs into
*cor est lampadi simile, non umbrosum*, and the whole chapter is the lamp of fire
and flames — so *lucibile*, "capable of light," is what the sentence needs.

**Handled as follows, and the two halves are deliberately different:**
- **The bracket is reproduced verbatim and untranslated**, italics as printed
  (§10.7; register rule on `[ *al.,* …]`).
- ***incibile* is carried into the English untranslated, in italics, inside a
  `[sic: …]`.** It is not a Latin word — there is no *incibilis* — so Pattern 7's
  non-word class applies and there is nothing to render. ⚠ **I considered §10.5
  ("where Migne prints his own *sic*, do not add ours") and judged it does NOT
  apply: `f.` is a conjecture about what the word should have been, not a flag
  that the type is defective, and an unmarked italic run would read as our
  editorial Latin (Pattern 12's whole argument).** The merge may overrule this;
  it is one marker.

**The finding for the merge is not the word, it is that the `[ *alias* …]`
singleton is not a singleton once the apparatus is described by function rather
than by string.** `[ *f.* …]` is greppable and cheap to sweep.

---

## §2 · THE COLLATION — all 42 listed spans, plus those found on the prose pass

Every span in `data/quotations/11632/0120-0125.md` was collated word by word
against the Clementine text. **Spans recorded as AGREES were collated and found
to agree; the absence of a marker on them is a finding, not a silence.**

### 2a · Divergent — `[var:]` fired (4)

| Col | Ref | Migne prints | Vulgate | Note |
|---|---|---|---|---|
| 0474D | Cant. 8:1 | *et jam **nemo me despiciet*** | *et iam **me nemo despiciat*** | §2b.1 below — mood + order |
| 0475C | Cant. 8:2 | + *et in cubiculum genitricis meae* | phrase absent | ⭐⭐⭐ §1.1 |
| 0481C | Cant. 8:7 | *aquae multae non **poterunt** exstinguere* | *non **potuerunt** extinguere* | §2b.9 — future for perfect |
| 0486C | Cant. 8:12 | *et ducenti — qui custodiunt* | *et ducenti **his** qui custodiunt* | ⭐⭐ §1.2 — deletion |

### 2b · The seventeen Song lemmata and re-quotations — collated one by one

Cant. 8:1–14 is expounded lemma by lemma through the range. Each was read against
the Clementine text **before** the English was trusted (Pattern 7a″).

1. **0474D Cant. 8:1** *Quis mihi det te fratrem meum sugentem ubera matris meae,
   ut inveniam te foris, et deosculer te, **et jam nemo me despiciet?*** — Vulg.
   ***et iam me nemo despiciat.*** **DIVERGENT ×2 and `[var:]` FIRED.** The
   pronoun/*nemo* order is trivial; **the mood is not** — a present subjunctive
   ("let no man despise me") has become a future indicative ("no man shall despise
   me"), a wish turned into a prediction. ⭐ **The internal control is Philip's own
   gloss, and it runs futures throughout:** *Cujusmodi honor cum digne filio
   **deferetur**, ipsi quoque Virgini reverentia debita non **tolletur**,
   **eritque** in oculis recte quaerentium non despecta* (0475B). So the plate's
   exposition carries the plate's lemma — the opposite of the 0434D case
   (cruces-0102 §1.2), where the gloss carried the Vulgate and the lemma did not.
   ⚠ **The English says "and now no man SHALL despise me" and is meant to.**
2. **0475B, the *deosculari* gloss — a translation decision, logged because a
   later reader will want the reason.** Philip glosses the lemma's compound
   verb explicitly: *Nec tamen **osculari** Virgo, sed **deosculari** potius vult
   inventum, verbique compositio nihil minus innuit, sed **augmentum***. Under
   the Song ruling's case 2 (a gloss depends on the word) the two verbs must be
   distinguishable in English, so *osculari* = "to kiss" and *deosculari* = "to
   kiss thoroughly", carried consistently through the lemma and all four of the
   chapter's occurrences. Douay's flat "kiss thee" would make the sentence
   *verbique compositio… augmentum* explain nothing.
3. **0475C Cant. 8:2a** — **DIVERGENT, `[var:]` FIRED, §1.1.**
4. **0476A Cant. 8:2 re-quoted** *Ibi, ait, me docebis.* — **agrees word for word.**
5. **0476B Cant. 8:2b** *Et dabo tibi poculum ex vino condito: et mustum malorum
   granatorum meorum.* — **agrees word for word** (the colon is Migne's
   punctuation).
6. **0476C Cant. 8:2b re-quoted** *Et mustum malorum granatorum.* — truncated
   before *meorum*, deliberately: Philip picks the dropped word up as his next
   subject, ***Meorum** vero forte ideo Virgo dicit* (0476D). Not a divergence.
   ⚑ *Meorum* there is **not** italicised on the plate, so the English marks it
   with our own straight quotes ("my own"), Pattern 6.
7. **0477B Cant. 8:3** *Laeva **ejus** sub capite meo, et dextera **ejus**
   amplexabitur me.* — Vulg. *…et dextera **illius** amplexabitur me.* Pronoun
   only; sense untouched, below Pattern 14's threshold. **Logged, no marker.**
   ⭐ **But grep the work and it becomes a real datum:** the same clause is printed
   at Cant. 2:6 in chunks **0045** (lemma + two re-quotations) and **0048** (a
   *guillemeted* proof-text), and **all four of those printings read *dextera
   illius*.** Migne prints *illius* four times and *ejus* twice, and the two
   *ejus* are both here. **A plate singleton, not a copy-text shape** — the
   opposite verdict from §1.1, and recorded so the merge can see the test was
   applied and came back negative. ⚑ The 0048/0121 pair is also another instance
   of §7c's control shape: same clause, **guillemeted** pre-seam, **italic** here.
8. **0477D Cant. 8:4** *Adjuro vos, filiae Hierusalem, ne suscitetis, neque
   evigilare faciatis dilectam, donec ipsa velit.* — **agrees word for word**
   (*Hierusalem* for *Ierusalem* is orthographic, Pattern 9).
9. **0478B Cant. 8:5a** *Quae est ista quae ascendit de deserto deliciis affluens,
   innixa super Dilectum suum?* — **agrees word for word.** The capital on
   *Dilectum* is Migne's and is mirrored.
10. **0479C Cant. 8:5b** *Sub arbore malo suscitavi te: ibi corrupta est mater
    tua, ibi violata est genitrix tua.* — **agrees word for word.**
11. **0480B Cant. 8:5b re-quoted** *Ibi corrupta est mater tua,* — **agrees.**
12. **0480C Cant. 8:6a** *Pone me ut signaculum super cor tuum, ut signaculum
    super brachium tuum, quia fortis est ut mors dilectio, dura sicut **inferus**
    aemulatio.* — Vulg. *dura sicut **infernus** aemulatio.* **Logged, no
    marker**: *inferus* and *infernus* are the same noun in two attested forms
    and the sense is identical, which is below Pattern 14's threshold; and Philip
    glosses with the same form he was given (*sicut **inferus**, cum in quosque
    miseros gaudet durius desaevire*, 0481B), so nothing in the argument moves.
    ⚑ Grepped work-wide: ***inferus* occurs in chunk 0122 only** (twice, lemma and
    gloss), so there is no competing printing anywhere to make it a shape.
13. **0481C Cant. 8:6b–7** *Lampades ejus, lampades ignis, atque flammarum; aquae
    multae **non poterunt** exstinguere charitatem, **neque** flumina obruent
    illam.* — Vulg. *…aquae multae **non potuerunt** extinguere caritatem, **nec**
    flumina obruent illam.* **DIVERGENT ×2, `[var:]` FIRED.** *nec* → *neque* is
    nothing; **the tense is the marker's assertion.** ⛔ **This is the range's
    clearest 7a″ trap and I flag how close it came:** the remembered English of
    this verse is "many waters **cannot** quench charity," which is what Douay
    makes of the perfect, and it fits Philip's present-tense gloss (*non exstinguit
    aquarum multitudo*) perfectly well. **The English reads "shall not be able to
    quench," because that is the tense on the page.**
14. **0482B Cant. 8:7b** *Si dederit homo omnem substantiam domus suae pro
    dilectione, quasi nihil despiciet eam.* — **agrees word for word.**
15. **0482D Cant. 8:7b re-quoted** *domus suae* — **agrees**; italicised as a
    phrase under discussion, with *addit **Scriptura** facere mentionem* (Pattern
    3, and the bare form — see §3c).
16. **0483A Cant. 8:8** *Soror nostra **parvula est**, et ubera non habet. Quid
    faciemus sorori nostrae in die quando alloquenda est?* — Vulg. *Soror nostra
    **parva**, et ubera non habet* (no copula). **Logged, no marker**: *parvula*
    is an attested variant and a diminutive of the same word; sense untouched,
    below Pattern 14. ⚠ **But recorded, because the internal evidence points the
    other way from §1.1's:** Philip's own re-quotation nine lines later reads
    ***Adhuc ergo parva est***, the **Vulgate** word (0483C), while the lemma has
    the diminutive. **That is cruces-0102 §1.2's shape exactly — lemma diverges,
    exposition reverts — occurring here at sub-threshold size.** Two instances of
    that shape now stand in the work; a third would be a class. ⚑ Philip does use
    the diminutive elsewhere in the same chapter (*dum aetas est **parvula***,
    *laborans **parvitate***), so he is not avoiding it.
17. **0484C Cant. 8:9** *Si murus est, aedificemus super eum propugnacula
    argentea. Si ostium est, **conpingamus** illud tabulis cedrinis.* — **agrees
    word for word**; *conpingamus* for *compingamus* is an unassimilated
    orthography, Pattern 9, and ⚑ **Migne prints the assimilated form himself
    eight lines later in the gloss** (*cedrinis illud tabulis **compingamus***,
    0485A), which is why it looks like a defect at first sight and is not one.
18. **0485B Cant. 8:10** *Ego murus, et ubera mea sicut turris, ex quo facta sum
    coram eo, quasi pacem reperiens.* — **agrees word for word.**
19. **0485D Cant. 8:11** *Vinea fuit pacifico, in ea quae habet populos. Tradidit
    eam custodibus, vir affert pro fructu ejus mille argenteos.* — **agrees word
    for word** (Migne's comma after *pacifico* is punctuation only).
20. **0486C Cant. 8:12** — **DIVERGENT, `[var:]` FIRED, §1.2.**
21. **0487A Cant. 8:13** *Quae habitas in hortis, amici auscultant, fac me audire
    vocem tuam.* — **agrees word for word.**
22. **0487C Cant. 8:14** *Fuge, dilecte mi, **assimilare** capreae, hinnuloque
    cervorum super montes aromatum.* — Vulg. *Fuge, dilecte mi, **et** assimilare
    capreae…* **The connective *et* is dropped. Logged, no marker** — a bare
    connective is below Pattern 14's threshold and the imperative construes
    without it. ⛔ **But it is carried into the English, which reads "Flee, my
    beloved, be like to the roe" with no "and" — this is the §8a deletion
    discipline applied to my own prose, and "and be like" is precisely what the
    hand wants to type.** ⚑ No control available: grepped work-wide, *assimilare*
    occurs **only here**; Cant. 2:17's parallel is printed *similis esto dilecte
    mi capreae* at 0062, a different verb.
23. **0487D Cant. 8:14 re-quoted** *Fuge,* ait, ***mi dilecte,*** — the vocative
    is **reversed** against the lemma printed six lines above (*dilecte mi*) and
    against the Vulgate. ⚑ **Migne's own inconsistency inside one chapter**, and
    at sub-threshold size; **logged, no marker.** Recorded because it is the
    cheapest available demonstration that this plate reorders short pairs without
    prompting — which is the mechanism brief §6's Eccles. 9:1 finding depends on,
    observed here in miniature.

### 2c · The four `[n:]`-only spans — **hit rate 0 of 4, and one of the four yields a new siglum shape**

All four ⭐ spans were traced back to their real left edge. **None is a quotation
whose boundary Migne prints; none takes a marker.** Listed so nobody re-opens
them:

1. **0481B, Num. 19:15** `[n: (Num. XIX)]` — *quisquis eo caret signaculo, facile
   violatur, et **vas carens operculo, immundum legis testimonio judicatur***.
   Vulg. Num. 19:15: ***Vas, quod non habuerit operculum** nec ligaturam desuper,
   **immundum erit***. Philip has turned the relative clause into a participle
   (*carens* for *quod non habuerit*), dropped the second condition, and replaced
   the verb with *legis testimonio judicatur*, his own frame. Two nouns survive.
   **Philip's prose.** Siglum **correct** (Num. 19:15).
2. **0483A, Rom. 8:18** `[n: (Rom. VIII)]` — ⭐⭐ **the span as extracted is Philip's
   own prose, but the note is not idle: it points one sentence FORWARD, and the
   quotation it points to is printed BARE.** The extraction's clause ends
   *…homo cordatus dederit, nihil dedisse congruum arbitratur `[n: (Rom. VIII)]`.*
   — that is Philip's sentence about giving the body, with nothing of Romans in
   it. **The very next sentence is the quotation:** *Non sunt enim condignae
   passiones hujus temporis.* Vulg. Rom. 8:18: *Existimo **enim** quod **non sunt
   condignae passiones huius temporis** ad futuram gloriam quae revelabitur in
   nobis.* Six words verbatim, truncated before *ad futuram gloriam*; the *enim*
   is the Vulgate's own, stranded when *Existimo… quod* was dropped. **No
   guillemets, no italics** — and the note, which is the only mark it has, stands
   **before** it, closing the previous sentence.
   ⭐ **This is a new shape for brief §8b's list, and it is a positional error, not
   a naming one.** The siglum is **correct**; what is wrong is where it sits. §8b
   records "off by exactly one chapter" and "note cites one book, the words are
   another book's"; this is **"note is correct and stands one sentence early,"**
   which no chapter-checking pass would ever catch, because nothing about the
   reference is false. **Reproduced verbatim in place (§10.2); no marker on the
   quotation, per §8a — its boundary is unprintable.** ⚑ Cheap to sweep: the shape
   is "a `[n:]` whose host sentence contains no quoted words."
3. **0488B, Apoc. 14:4** `[n: (Apoc. XIV)]` — *Tene ergo manum dexteram meam, et
   me deduc in tua voluntate, **sequar Agnum quocunque ierit** `[n: (Apoc. XIV)]`,
   nulla claudicans tarditate.* Vulg. Apoc. 14:4: *hi **sequuntur Agnum
   quocumque ierit***. **Three words verbatim, the verb recast from third plural
   to first singular** so that the Virgin can say it of herself. Siglum
   **correct**. **Philip's prose, no marker** — but ⭐ **the sentence is a weave of
   two texts and Migne notes only the second.** Its opening clause is **Ps.
   72:23–24**: *tenuisti **manum dexteram meam**, et **in voluntate tua deduxisti
   me***, verbatim but for the tense. **The Psalm carries no note and no marks
   at all** and would have reached nobody without the prose pass. Recorded beside
   cruces-0102 §2e.2's Heb. 1:3 / Wisd. 7:26 case as a second instance of "note
   correct but partial" — **NOT counted as an error**, per §8b's revised warning.
4. **0489A, Eccles. 9:1** `[n: (Eccle. IX)]` — **§1.3.** Philip's prose by the
   same test (*nescit homo* → *nesciens*, agreeing with his own *tuus… serviens*),
   siglum correct, **no marker**, and the reversed pair recorded in full above.

**Reported per brief §8a even though it is a null result. 0/4 here, against 0/5
for 0102–0107, 0/6 for 0084–0089, 1/12 for 0060–0065, 0/20 for 0042–0047, 0/38
for 0048–0053, 0/19 for 0018–0023 and 1/14 for 0024–0029. The class's running
rate across the eight ranges that have reported it is now 2 of 118.** ⚠ **And the
0483A entry is why the null should not be read as "the class is empty": the span
was correctly classed as prose, and the real quotation was sitting one sentence
away from it, unlisted in any class whatever.**

### 2d · Migne's sigla — five checked, five right

Reproduced verbatim, none corrected (§10.2). **No *Ibid.* occurs anywhere in the
range**, so §10.2's anaphora hazard does not arise.

- **`(Luc. III)` @0478B** — Luke 3:6, *Et videbit omnis caro Salutare Dei*,
  **verbatim** (see §2e.1). **Correct.**
- **`(Num. XIX)` @0481B** — Num. 19:15. **Correct.**
- **`(Rom. VIII)` @0483A** — Rom. 8:18. **Correct as to book and chapter; one
  sentence early. §2c.2.**
- **`(Apoc. XIV)` @0488B** — Apoc. 14:4. **Correct** (and partial — §2c.3).
- **`(Eccle. IX)` @0489A** — Eccles. 9:1. **Correct.**

Plus the two **internal** self-references at 0477D and 0479B, both **correct** —
§1.5. **Seven references checked in this range and seven are sound**, which is
worth stating plainly beside cruces-0102's wrong one.

### 2e · Weaves the extractor could NOT list — some three dozen found on the mandatory prose pass

These carry no guillemets, no italics **and no `[n:]`**, so they appear in the
extraction in no class whatever. **None takes a marker** (brief §8a). The first
five are the ones the merge should see; the first three are not Bible verses at
all, or not only.

1. ⭐⭐ **0478D — OVID's Astraea**, and **0483C — Venus and Cupido.** §1.4.
2. ⭐⭐ **0487D — TERENCE**, italic, unattributed, in the medieval proverb-form.
   §1.4.
3. ⭐ **0488B–0488D — the ASSUMPTION argument, where Philip appeals to AUGUSTINE
   by name and Migne supplies no note at all.** *quia etsi hoc Scriptura canonica
   non clamat evidentibus documentis, ad hoc tamen pia fides adducitur
   verisimilibus argumentis, quod… illud tamen dignum credi **noster ille asserit
   Augustinus**.* A Father named as the authority for the bodily assumption,
   nothing quoted, **no `[n:]`**, in the theologically weightiest sentence of the
   work's last chapter. ⚑ Recorded because brief §7b disposed of "Migne declines
   to mark pagans" by producing an unmarked Father; **this is a second unmarked
   Father, and here the appeal is by name and doctrinally load-bearing.**
   **No marker** — nothing is quoted, so there is nothing for one to attach to.
4. ⭐ **0488A — Ps. 72:23–24, inside the noted Apoc. 14:4 sentence.** §2c.3.
5. ⭐ **0477D — Matt. 28:19, three words verbatim, opening the Bridegroom's
   adjuration and printed bare.** *Vos, ait, apostoli, vos doctores ecclesiastici
   **ite, docete omnes gentes***. Vulg. *euntes ergo **docete omnes gentes***;
   Philip has made the participle an imperative to match his own *ite*, and the
   three following words are exact. Unmarked, unnoted, and it is the hinge on
   which the whole chapter's reading of *Adjuro vos* as an address **to the
   apostles** turns. **No marker.**

**The remaining, checked for silent conformation and left as Philip's
own prose** (none marked, none conformed):

**0120** — **Isa. 45:15** (*qui **Deus absconditus** prophetico vaticinio
praedicaris*, 0475A — Vulg. *Vere tu es **Deus absconditus***; two words, recast
into a relative clause) · **1 Cor. 1:23** (*nec **Judaeorum scandalo**, nec
**stultitia gentium** ferietur*, 0475C — Vulg. *Iudaeis quidem **scandalum**,
gentibus autem **stultitiam***; both nouns kept, both cases changed, and it sits
eight words from *mira matris integritas*) · Luke 2:7 / general infancy language
(*parvulorum alimoniam… cibo, potu, veste, somno*, 0475A).
**0121** — ⭐ **Cant. 2:5** (*cum stipari malis virgo postulat, fulciri floribus se
languentem*, 0477B — Vulg. *Fulcite me **floribus**, **stipate me malis**, quia
amore langueo*; **this is the Song quoting itself as a cross-reference**, recast
into indirect discourse, and Philip names it as an earlier exposition rather than
quoting it) · **Cant. 3:6** and **Cant. 6:9**, both recast as the angels' first
and second questions at 0479B–0479C (*instar virgulae… universo pulveri
pigmentarii*; *similis est aurorae… castrorum est comparabilis aciei*) — see
§1.5 · Gen. 3:18 (*urticis, spinis, tribulis pleniorem*, 0478D).
**0122** — **Rom. 8:22** (*languet omnis et **ingemit creatura***, 0479D — Vulg.
*omnis **creatura ingemiscit***) · Gen. 3:6 (*pomum vetitum male continens
appetivit, esuque illicito virum male uxorium irretivit*, 0479D — narrated, no
phrase reproduced) · Isa. 6:2 / 6:6 (*seraphin ardentibus interno se desiderio
configurat*, 0481D) · ⭐ **Rom. 8:35** (*non denique flumina, non majorum
inundatio pressurarum, **non fames, non gladius** obruent*, 0482A — Vulg.
*tribulatio? an angustia?… an **fames**?… an **gladius**?*; the two decisive
nouns kept, the interrogative frame replaced by Philip's *non… non*, and it is
adjacent to the Cant. 8:7 lemma it is adduced to reinforce) · 1 Cor. 13 generally
(*charitati recte quidquam perfunctorium non confertur*, 0482A).
**0123** — ⭐ **2 Cor. 5:2–4** (*cum Paulus quoque optet **supervestiri** potius
quam **nudari***, 0482D — Vulg. *habitationem nostram… **supervestiri**
cupientes… nolumus **expoliari**, sed **supervestiri***; the distinctive verb
survives, *nudari* replaces *expoliari*, and Paul is named) · ⭐ **John 21:15–18**
(*et **Petrum ter amantem** ab ista lege carnis amor penitus non reduxit, sed
Christo praedicente, **quo non vellet, alius illum duxit***, 0482D — Vulg. *alius
te cinget, et **ducet quo tu non vis***; the *ter* is v. 17's threefold
questioning) · **Heb. 1:1** (*superius cum ea, vel de ea, **multifariam
modisque plurimis** est locutus*, 0484A — Vulg. ***Multifariam multisque
modis***; the rare adverb is kept and the second half loosened, in a sentence
about how the Bridegroom has spoken) · Matt. 25:1–13 (*Non sunt aptae nuptiis
virgines*, 0483D — the theme, no phrase) · 1 Cor. 13:12 (*quaerentis facies datur
quaesiti faciem invenire*, 0484B).
**0124** — ⭐ **Eph. 4:5** (***unus Dominus, una fides** copulat et constringit*,
0484C — Vulg. ***Unus Dominus, una fides**, unum baptisma*; **four words
verbatim**, bare and unnoted, carrying the definition of Jerusalem) · **Ps. 18:5
/ Rom. 10:18** (*sed et **in omnem terram sonus exierit**, et audita
**praedicatio** sit eorum*, 0486A — Vulg. *In omnem terram exivit sonus eorum, et
in fines orbis terrae **verba** eorum*; *praedicatio* for *verba* is Philip's) ·
**Ezek. 44:2** (*ipsa **omni clausa viro**, soli Deo fidei clavicula reseratur*,
0485A — Vulg. *Porta haec **clausa erit**… et **vir non transibit per eam***) ·
**Luke 1:35** (*Ex quo enim ad concipiendum **sanctus ei Spiritus obumbravit***,
0485C — Vulg. *Spiritus sanctus superveniet in te… **obumbrabit tibi***) ·
**1 Pet. 2:5** (*congeriem **vivorum lapidum** charitate ligante media*, 0485B) ·
**Isa. 5:7 / Rom. 9:29** (***vinea Domini Sabaoth*** *profectum habuit efficacem*,
0485D — Isaiah's vineyard with the *Sabaoth* of Romans/James, where Isa. 5:7 has
*Domini exercituum*) · **Acts 13:46** (*ad gentes asserit se converti*, 0486A) ·
**Acts 4:35** and **Phil. 3:8** in one clause (***ad pedes apostolicos afferens**,
projicit, et **habet vice stercoris** in contemptu*, 0486B) · **Wisd. 11:21**
(*affert illud **sine pondere, numero vel mensura***, 0486B — Vulg. *in mensura,
et numero, et pondere*, the triad reordered) · **John 8:12** (***non ambulat in
tenebris**, sed est **in lumine** coram ipso*, 0486C) · Matt. 19:29 / 13:8 (*pro
cujus **centenario***, 0486A) · ⚑ *arrectis auribus* (0486C) is **Virgil, *Aen.*
ii.1** in origin but is proverbial by the twelfth century; recorded as a weak
candidate only, and **not** counted with §1.4's three.
**0125** — **Apoc. 14:4** and **Ps. 72:23–24** (0488B — §2c.3) · **Ps. 109:1 /
Heb. 1:3** (*tene sedem in **Patris dextera***… *qui sumptam carnem **ad Patris
dexteram** collocavit*, 0488B, 0488C — and note Philip's own hesitation about the
anthropomorphism, *quidquid illud vere est quod **Scriptura** dexteram
appellavit*) · **Ps. 90:13 / Gen. 3:15** (*vel me prorsus non mordebit, vel morsu
non nocebit **coluber venenatus***, 0490A) · Ps. 44:10 (*in gremio… in coelesti
solio*, 0488D) · 1 Pet. 5:8 (*occursu malignantium*, 0489B).

### 2f · Brief §8c and §6 — what this range does and does not witness

⚠ **Recording what I actually saw, per §8c's warning, not that I "met the verse."**

- ⭐ **Eccles. 9:1 DOES occur, at 0489A, and it is the seventh and last printing:
  *nesciens utrum **dignus odio vel amore***. The pair is REVERSED. Full evidence
  and the three-shape table at §1.3.**
- **Cant. 1:12 does NOT occur in this range**, in either half. **No evidence
  either way on *Cum*/*Dum*.**
- **Cant. 2:17 (*Bethel* / *Bether*) does not occur.** *Montes aromatum* occurs at
  0487C, but as **Cant. 8:14**, a different verse, and it agrees with the Vulgate
  there.
- **Zech. 4:14 does not occur. Gen. 3:19 does not occur. Cant. 5:9 does not
  occur. Cant. 5:7 (*vigiles* / *custodes*) does not occur.** ⚑ *Custodes* is
  printed at 0485D, but as **Cant. 8:11**'s *Tradidit eam custodibus*, which
  agrees with the Vulgate and bears on §6's sixth candidate not at all.
- ⭐ **What the range ADDS to §6's class is §1.1's Cant. 8:2** — an addition, with
  a versional witness, expounded six times over five chapters. It is the only
  member of the class so far whose divergence has a named non-Vulgate source
  rather than only an internal argument.

---

## §3 · TYPOGRAPHY

### 3a · Guillemets — none, and the run holds to the last column

**0 « and 0 » in all six chunks**, matching the Latin twins exactly. Pattern 6's
parity check passes trivially; **every quotation mark on the English pages of
this range is ours (`" "`), and there are only two of those** (0476D's "my own",
0484A's "to speak to", both words-as-words). Every proof-text in the range is
carried by Migne's italics or by nothing at all.

⭐ **This closes brief §7c's measurement at the end of the work.** The last
guillemet in 11632 stands at **0417A** (chunk 0096); from there to **0490B** —
**73 columns, 30 chunks, 88 notes** — there is not one. My six chunks are the
last of that run and they confirm it to the final page, including through the
work's climax (the assumption argument at 0488B–D), its peroration, and the
Terence quotation at 0487D, which is the sort of adduced authority the pre-seam
plate would have guillemeted.

### 3b · §7a mirroring — the drift point — held word by word, and verified by ordered script diff

Migne's mixed case runs through this range and **none of it was regularized.**
Diffed mechanically against the Latin twins after drafting, as an ordered
positional comparison, not by eye. **All six match.**

- **Spouse-words, LA → EN, in order:**
  **0120** `Sponsi` `Sponsum` `sponsum` `Sponso` `Sponsi` → C C l C C ✓ ·
  **0121** twelve lower-case, then `Sponsum` `Sponsum` → l×12 C C ✓
  (*sponsalium* → "espousals", carrying no spouse-word in English) ·
  **0122** `sponsae` `Sponsus` `Sponsum` `sponsae` `Sponsum` `sponsum` →
  l C C l C l ✓ · **0123** C C C l (*sponsalium*) l l ✓ ·
  **0124** `Sponsus` `Sponsum` `sponsum` `Sponsus` → C C l C ✓ ·
  **0125** `sponsam` then six capitals → l C C C C C C ✓.
- ⭐ **0121 is this range's specimen and it is the starkest in the work so far:
  twelve consecutive lower-case spouse-words (0477B–0478D) followed immediately
  by two capitals (`Sponsum` at 0478C and 0479C), with no change of subject** —
  the angels are contemplating the same person throughout. The English mirrors
  all fourteen. ⛔ **This is the paragraph where assimilation would have happened**
  (cruces-0102 §3b′ records that failure mode exactly), and it is the reason the
  diff was run as a script rather than as a reading.
- ⚑ **0122 alternates inside one argument**: *mater **sponsae*** (l) →
  *ubi **Sponsus** Virginem* (C) → *ibi mater **Sponsum** occidi postulans* (C) →
  *fides **sponsae*** (l) → *verum **Sponsum** abnegans* (C) → *audit **sponsum**
  dicentem* (l). Six words, four changes of case, one sentence apart. Mirrored.
- ***Virgo* / *virgo*: 0120** C C C C C C C **l** C **l** (the two lower-case are
  *in cubiculum **virgo** sollicita*, 0476A, and *poculum **virgo** diligit
  propinare*, 0476D) · **0121** l l C C C l l C · **0122** C C C C C C **l** C ·
  **0123** C C C C C C **l** C · **0124** C C C C **l l** C C C C C **l** ·
  **0125** C C **l** C C. **All mirrored 1:1 in order.**
- ⚠ **The one place English orthography would have overridden the plate, and how
  it was handled.** 0483D prints *Non sunt aptae nuptiis **virgines***, lower-case
  mid-sentence. The natural English ("Virgins are not fit for nuptials…") puts the
  word sentence-initial, where English **must** capitalize it and the plate's
  signal is silently lost. The clause was recast to front the predicate — **"Not
  fit for nuptials are virgins, while they are yet in childhood…"** — which keeps
  the *non*, keeps the word lower-case, and keeps the word order's emphasis.
  **Recorded because it is a mirroring hazard with no lexical trace**: nothing in
  the English would have looked wrong, and the ordered diff is what found it.
- ***Spiritus* runs BOTH cases in this range and is mirrored per instance: eight
  occurrences, **three capital and five lower-case.** Capital: ***Spiritus**
  angelici* (0478B), *sanctus ei **Spiritus** obumbravit* (0485C), *Ex quo
  operante **Spiritu*** (0485D). Lower-case: *ferventes **spiritu*** (0476D),
  *fervore **spiritus*** (0477C), *corrupto vigore **spiritus*** (0478D),
  *unanimo **spiritu**  sic addici* (0486A), *non solum **spiritu*** (0488C).
  ⚑ **The division is NOT divine-vs-human**, which is the tidy hypothesis and is
  false here: *ferventes **spiritu*** at 0476D and *unanimo **spiritu*** at 0486A
  are both the Holy Spirit and both lower-case, while *operante **Spiritu*** at
  0485D is the same referent capitalized eleven lines later. **Mirrored per
  instance, per brief §7a; no rule inferred and none applied.**
⚑ **The *Spiritus sanctus* / *sancti Spiritus* order does not arise** —
  Philip writes *sanctus ei Spiritus*, splitting the pair around the pronoun, so
  brief §7a's worked example has no instance here.
- **Heads:** `CAPUT XXXIII.` → `CAPUT L.` **continuously, every one in numerals
  and every one carrying the full stop**, matching cruces-0102's range and
  contrasting cruces-0048's stop-less pair. **No `LIBER` head falls in this
  range** — Book VI opened at 0107/0108 — and **the work ends with no `EXPLICIT`
  and no closing rubric of any kind**: chunk 0125's last chapter simply stops and
  the Gallemart approbation follows. See §3e.

### 3c · Pattern 3 — fires three times, and **all three are the bare form brief §5 flags**

- **0482D** *et ob hoc domus suae addit **Scriptura** facere mentionem* → "and for
  this cause **Scripture** addeth to make mention of his house" — the canon in
  the singular with no adjective.
- **0488C** *quidquid illud vere est quod **Scriptura** dexteram appellavit* →
  "whatsoever that truly is which **Scripture** hath called the right hand" —
  same bare form.
- **0488D** *etsi hoc **Scriptura canonica** non clamat evidentibus documentis* →
  "although **canonical Scripture** crieth not this out with evident proofs".

⚑ **No *divina Scriptura*, no *sacra Scriptura* and no plural *Scripturae* occurs
anywhere in the range**, so every instance here is of the bare type — the exact
form 11638's sweep missed, and the third range in a row to report it. ⚠ **0488D's
*Scriptura canonica* is a fourth shape** (adjective present, but not *divina* or
*sacra*), and it is doing real work: it is the concession on which the whole
assumption argument turns.

### 3d · Pattern 17 — the range gives the merge the work's closing pair, and it is decided by morphology alone

Counted by script against the Latin, after drafting. **Latin second persons ‖
English archaisms:**

| chunk | LA sing. (*tu/te/tuus*) | LA plur. (*vos/vester*) | EN *thou*-family | EN *you*-family |
|---|---|---|---|---|
| 0120 | 24 | 0 | 46 | 0 |
| 0121 | 0 | 6 | 0 | 13 |
| 0122 | 18 | 0 | 40 | 0 |
| 0123 | 0 | 0 | 0 | 0 |
| 0124 | 3 | 0 | 3 | 0 |
| 0125 | 33 | **1** | 58 | **1** |

**Every English second person in the range is decided by the printed morphology
and by nothing else.** The distribution is unusually clean: three chapters of
pure singular address (the Virgin to the Bridegroom, 0120; the Bridegroom to the
Virgin, 0122 and 0125), one of pure plural (0121, the Bridegroom to the apostles
and the *filiae Hierusalem* — *Vos, ait, apostoli, vos doctores ecclesiastici… ne
**vestra** negligentia*), and one with no second person at all (0123, where the
companions speak among themselves in the first person plural).

⭐⭐ **The pair the merge should take is the work's last sentence, and it is a
single word.** Philip's whole peroration addresses the Virgin in the singular —
*quaeso **te**, Virgo sancta… **Tuus** quidem ego sum… **Tu** igitur, Virgo
sancta, de manu mea suscipe parvum munus* — thirty-three singular forms in one
prayer. Then, in the final clause of the work, he turns:

> *…et ut finem ponam libro, mihi tandem a malis libero **vobiscum** in
> coelestibus gloriari.* (0490B)

***vobiscum*, plural** — he has stopped addressing the Virgin and is addressing
the company of heaven, or his readers. **Under Pattern 17 the English shows this
with no apparatus**: fifty-eight *thou*s, and then "to glory **with you** in the
heavens." Under a flat "you" the whole prayer's intimacy is invisible; under a
flat "thou" the last word is falsified and the book ends addressing one woman
instead of opening out. **This is Dorotheus Ep. IV's shape (Pattern 17's own
worked case) occurring at the close of a Latin work, and it cost nothing to
preserve.**

### 3e · ⭐ The work's ending, and how it is printed — recorded because a merge will ask

0125 has **no `EXPLICIT`, no closing rubric, and no colophon in Philip's voice**
beyond his own *ut finem ponam libro*. What Migne prints after it, as the last
line of col. 0490B, in **italics**, with no heading and no `[n:]`:

> *Joannes GALLEMART S. Theol. Doctor, et catecheseos professor in Universitate
> Duacensi, hac 7 Febr. 1618.*

This is the **Douai censor's approbation** of the 1621 Gallemart edition, which
Migne has carried over from his copy-text. **Translated, not carried** — it is
running prose (a title, an office, a place, a date), not a citation, so Pattern
15's `[n:]`/`[nt:]` boundary does not arise and the register rule on
untranslatable technical Latin does not either. The surname keeps Migne's capitals
and the date keeps his abbreviated shape: **"John GALLEMART, Doctor of Sacred
Theology, and professor of catechesis in the University of Douai, this 7 Feb.
1618."** ⚑ **Flagged for the merge as a judgment, not a certainty** — an argument
could be made for carrying it verbatim as apparatus. It is one line and reversible.

### 3f · Marginal source-edition numbers

*277* (0476A) · *278* (0477C) · *279* (0479B) · *280* (0480D) · *281* (0482B) ·
*282* (0483D) · *283* (0485B) · *284* (0486D) · *285* (0488C). **Continuous with
cruces-0102's *250*–*257*** (which ended at 0444B), so chunks 0108–0119 carry
*258*–*276*, and ***285* is the last one in the work.** Each kept italic and
verbatim **at the exact word it interrupts**, with the English clause built around
it rather than moving it: *277* falls between *domum* and *matris*, *278* between
*illorum* and *gloria*, *279* between *mulierum* and *comparetur*, *280* between
*plenitudine* and *contineri*, *281* between *praepollenti* and *fungitur*, *282*
between *differri?* and *Alloquenda*, *283* between *casurus* and *cui*, *284*
between *duplicem* and *invenire*, *285* between *generavit* and *Illic*.
⚠ *280*'s, *281*'s and *284*'s slots forced "wherein my love seemeth in a large
fulness *280* to be contained", "useth a prevailing *281* reason" and "deserve to
find a double *284* peace"; all three are more contorted than I would otherwise
write, and all three are deliberate.

### 3g · ⚑ An anchor observation NOT reported as a defect (brief §10.1)

Chunk 0125 runs *…pressuris durioribus [0490A] intermisi…* — so the column
sequence in that chunk reads 0489A, 0489B, **0490A**, 0490B, with **no 0489C or
0489D**.

**I am recording this and NOT reporting it.** Brief §10.1 names exactly this as
the phantom-gap class (49 examined corpus-wide, none real) and states that **the
only real signal is text broken mid-word or mid-construction across an anchor.**
There is none: *opusque inchoatum multoties pressuris durioribus [0490A] intermisi*
construes perfectly across the mark, with the verb on the far side of it and its
adverb and ablatives on the near side. Two works interleaving by band in PL 203
would produce this shape exactly. **No `[ed:]`, no patch, no plate check.** Noted
only so a later reader can see the check was made rather than skipped.

---

## §4 · PATTERN 7 / 8 / 9 / 10 — two `[sic:]`, and the rest rendered as printed

**Conjectures live here and NOT in the text.**

- ⛔⛔ **0477B, *nilaresco* — `[sic:]` FIRED, and it is the range's clearest
  non-word.** *In illius fructu rei, et in hujus umbra spei jam suaviter
  **delitesco**, multum de praesentibus, de futuris amplius **nilaresco**, quod
  nimirum ideo vobis assistentibus **innotesco**, ut et ipsum diligatis, cujus
  tantis muneribus jam **ditesco**.* There is no Latin verb *nilaresco*. **Read
  *hilaresco*, "I grow glad" — near-certain**, on three grounds: the rhyme is a
  four-member *-esco* chain and *hilaresco* completes it; the degree adverbs
  *multum… amplius* require a verb that admits degree; and the sentence is about
  joy in present and future goods. ⚠ **The tempting alternative is split type
  (Pattern 10), reading *nil aresco*, "I wither not at all"** — and it is wrong,
  because *nil* would contradict *multum* in the same clause and leave *amplius*
  governing nothing. **Carried into the English untranslated, in italics, inside
  `[sic:]`** (Pattern 12's operational test: the word on the page is Migne's, not
  ours), and the English reads "…more largely from things to come, do I
  [sic: *nilaresco*]". It is meant to read strangely.
- ⛔ **0481B, *incibile* — `[sic:]` FIRED; Migne's own conjecture bracket
  reproduced beside it.** §1.6. The judgment that `[ *f.* …]` is a conjecture
  rather than a flag of defective type — and therefore does not trigger §10.5's
  "do not stack ours on his" — is the one call in this range I would most welcome
  a second opinion on.
- ⛔⛔ **0487C, *non arescunt* — NOT emended, and the sentence says the opposite of
  what its own antithesis requires.** Migne prints: *Apud te amor vane
  praetereuntium et timor supervenientium **non arescunt**, sed fides, spes,
  dilectio, tanquam horti rore florido **dilucescunt***. **Read *ardescunt*, "do
  not blaze up" — probable**: the *sed* demands that the first pair be suppressed
  and the second pair flourish, and as printed both halves are affirmations of
  vitality, so the *sed* has nothing to turn on. Philip uses the verb eleven
  lines later in his own voice — *eum quem sic amat, videre citius **inardescit***
  (0487D) — and *ardesco/inardesco* is one of this book's habitual words. ⚠ **But
  *aresco* is a real Latin word**, so Pattern 12's own boundary clause keeps it on
  the English side: **rendered "do not wither," with the *non* carried**, exactly
  as printed. ⛔ **This is the most repairable sentence in the range, and repairing
  it would be a silent repair of the purest kind** — one letter, a smoother
  sentence, and no trace. **Not emended.**
- **0481D, *sed et proximus diligenter perpendentibus appareat non deesse*.**
  Nominative *proximus* where the dative *proximo* is required by *deesse* (whose
  other complement, *sibi*, is correctly dative in the same clause). Read
  ***proximo***, near-certain. ⚠ **A case slip does have an English exponent in
  principle**, but not here: English "to itself… the neighbour also" carries no
  case marking either. **Rendered as closely as the printed words allow** — "that
  it may appear… to be wanting not only to itself, but the neighbour also" — and
  logged rather than repaired.
- **0475B, *et illud deosculari, ut quibusdam visum est, affirmamur*.** Passive
  *affirmamur*, "we are affirmed," where the active *affirmamus* would construe
  cleanly with the accusative-and-infinitive. Read ***affirmamus***, probable. A
  real word in a real form; **rendered literally — "and we are affirmed thoroughly
  to kiss, as it hath seemed to some" — and meant to read flat.** Not emended.
- **0488D, *si humanam carnem vident supra se in matre et Filio **gloriosus**
  honorari*.** Adjective where the comparative adverb *gloriosius* is expected —
  and the parallel clause four words later has the comparative (*illic **felicius**
  nuptias consummari*), which is what makes it visible. **Rendered "gloriously
  honoured"**, at the positive degree Migne prints, not the comparative the
  parallel wants. Pattern 9 / Pattern 7; logged, no marker.
- **0487C, *rejecto carnis pallio **meam dilecti** faciem praesentialiter
  salutare*.** A first-person possessive and a genitive stacked on one noun, in
  the Bridegroom's mouth about his own face. **Rendered as printed** — "to greet
  in presence my face, the face of thy beloved" — with the supplied "the face of"
  doing only what English apposition requires. Logged.
- **0480B, *Si vero sub arbore crucis mater sponsae creditur violata Judaea mater
  ejus recte intelligitur appellata*.** The plate prints **no punctuation** at the
  clause boundary after *violata*, so *violata Judaea* reads for a moment as a
  phrase. **Pattern 8: nothing supplied and nothing deleted** — but English
  requires a comma somewhere in a clause this long and the English comma is
  ours, so this defect has **no English exponent** and is logged only. ⚑ Recorded
  because it is the inverse of the missing/supernumerary full stops cruces-0102
  §4 catalogued at 0435C and 0441A: same class, sub-sentence scale.
- **0475D, *Absit enim ut desim diligentibus, ut despiciam non despecta*.**
  Feminine *despecta* agreeing with the Virgin as speaker, inside a clause whose
  verb is first-person. No English exponent for the gender (Pattern 9); rendered
  "that I, who am not despised, should despise" and logged so a later sweep does
  not churn it.
- **0474D *diluscescit* · 0483C *puerascunt* · 0482B *praepollenti* · 0483A
  *gunfis*.** All attested medieval forms, Pattern 9 exempt: *diluscescit* is a
  double-inchoative beside *dilucescit*; *puerasco* and *praepolleo* are standard
  medieval; ***gunfis*** is *gomphus* / *gumphus* (Gk γόμφος), "bolt, pin," a
  well-attested medieval loan — **rendered "clamps", not carried.** Translated
  normally, no italics, no marker.
- **0478D, *quam Astraea deservit*.** *deservit* is ambiguous between *deserere*
  ("forsook", perfect *deseruit*) and *deservire* ("served"). Ovid's *Astraea
  reliquit* settles it: **rendered "forsook"**, and the following *in astra se
  revehens* confirms the departure. Logged because the form as printed is the one
  that means "serves", and the reading is decided by the source, not the
  morphology.

**Negation audit (brief §9), second pass, against the Latin.** Every printed
*non / nec / neque / nisi / nihil / nil / nullus / nunquam / nondum / necdum /
nequaquam / nullatenus / ne / nesciens* in the six Latin chunks was extracted by
script **after** the prose was drafted and matched one by one against the English.
Latin totals: **0120** 29 · **0121** 27 · **0122** 54 · **0123** 41 · **0124** 28 ·
**0125** 30 — **209 in all**, every one carried.

The dense clusters, all checked word by word:
- **0480D–0481A** — *nulli quidem versutiae, **nulli** subjacet laesioni, quia
  quod ars subtilior, **non** recens excogitat, manus eruditior **non** compingit,
  **non** reserat versutia, violentia **non** confringit* → six negations, six in
  the English ("to no craft, to no hurt… doth not newly devise, nor… fasten
  together, craft doth not unbar, violence doth not break").
- **0481B** — *duram ejus saevitiam **non** labor, **non** miserorum potest gemitus
  emollire… **non** vult a proposito, **nec** prece, **nec** pretio, **nec**
  mollitie revocari* → "neither labour nor the groaning of the wretched can
  soften… willeth not to be called back from her purpose, neither by prayer, nor
  by price, nor by softness."
- **0482A** — *quem… **non** exstinguit aquarum multitudo, **non** minis, **non**
  blanditiis cedit amans… **non** denique flumina, **non** majorum inundatio
  pressurarum, **non** fames, **non** gladius obruent* → **seven printed
  negations, seven English ones**, and the run is deliberately not smoothed into
  "neither… nor… nor" ("quencheth not; …yieldeth not to threats, not to
  blandishments; nor at last shall floods, nor… nor famine, nor the sword").
- **0483C–0483D** — *necdum satis est sufficiens, **nec** adulta… **non**
  perducta… ubera **non** habere… **non** carere… necdum plenam… dicimur **non**
  habere… **nondum** satis praevalent… **Non** sunt aptae… **non** turgescunt…
  **non** differri* → eleven, all carried.
- **0477C** — the double negative ***non** potest de talibus… **non** laetari*,
  rendered "she cannot but rejoice over such things," which carries both.
- **0487B** — *ego adhuc differo, **nec** induci suffero*, rendered "and suffer
  them not to be led on"; the object "them" is supplied and is the only supplied
  word in the clause.
- **0490A** — *vel me prorsus **non** mordebit, vel morsu **non** nocebit coluber
  venenatus* → "either the venomous serpent shall not bite me at all, or by his
  biting he shall not hurt me."

⛔ **And run against my OWN English, per brief §8's warning, which is where the
real risks were.** Four places where the familiar wording had to be actively
declined, all caught on the separate pass and all now correct on disk:
1. **Cant. 8:7 @0481C** — "many waters **cannot** quench charity" (the received
   English) → **"shall not be able to quench,"** rendering Migne's future
   *poterunt*. **The collation had already recorded the tense; the sentence had
   not.** This is the exact failure the brief's Eph. 5:29 case describes.
2. **Cant. 8:14 @0487C** — "**and** be like to the roe" → **"be like to the
   roe,"** because Migne drops the Vulgate's *et*. An added connective, invisible.
3. **Cant. 8:12 @0486C** — "and two hundred **for them** that keep" → **"and two
   hundred they that keep,"** because Migne drops *his*. §1.2.
4. **Cant. 8:1 @0474D** — "and now **let** no man despise me" → **"and now no man
   **shall** despise me,"** because Migne prints the future indicative. §2b.1.

**All four are restorations of Vulgate wording I had already written into the
collation as divergent.** Recording the divergence and carrying it into the
sentence are two separate acts, and in this range they came apart four times.
