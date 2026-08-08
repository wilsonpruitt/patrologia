# Cruces — 11632 chunks 0024–0029 (cols 0240B–0256B)

Philip of Harvengt, *Commentaria in Cantica canticorum*, PL 203. Range covering
the end of **Book I** (*Caput* XXV–XXVI, on *Indica mihi ubi pascas, ubi cubes in
meridie* and *Ne vagari incipiam post greges sodalium tuorum*), the *Explicit* of
Book I and the head `LIBER SECUNDUS.`, and then **Book II** *Caput* I–V, on
*Si ignoras te, o pulcherrima inter mulieres, egredere, et abi post vestigia
gregum* → *Et pasce haedos tuos juxta tabernacula pastorum* → *Equitatui meo in
curribus Pharaonis assimilavi te, amica mea* (Cant. 1:6–8). Six chunks, 6,853
Latin words.

**Marker totals for this range: 9 `[var:]` · 2 `[sic:]` · 0 `[ed:]` · 0 `[d:]` ·
0 `[nt:]` · 0 `[f:]`.** `verify-english.mjs` clean on all six (no errors); two
ratio warnings, 0026 at 1.66 and 0028 at 1.63, inside the band wave 1 shipped
(0004 1.64, 0005 1.68). Column anchors, `[n:]` contents and guillemet counts were
diffed 1:1 against the Latin twins mechanically, not by eye: anchors identical in
order and place in all six; `[n:]` strings byte-identical and in the same order
(11 / 2 / 2 / 2 / 14 / 13, matching each frontmatter `noteCount`); guillemets
3/3, 2/2, 1/1, 1/1, 16/16, 12/12. **No guillemet asymmetry anywhere in this
range** — every « has its », none stray, none unopened.

---

## §1 · ⭐ THE BOOK BOUNDARY — I CROSS ONE, AND THERE IS NO TYPOGRAPHIC SEAM AT IT

This is the range brief §7 asks for. **Chunk 0025 ends Book I and prints
`## LIBER SECUNDUS.` as its last head (col. 0246C), with an empty body; chunk
0026 opens `## CAPUT PRIMUM.` under it.** Migne even prints the transition in
Philip's own voice — *primo huic tandem libro terminum imponamus … curabo
quiescentem calamum retorquere*.

**Nothing about the marking changes across it.** Guillemets and italics are both
in use on both sides, in the same functional division wave 1 established:

- Book I side (0024–0025): italic lemma (*Indica mihi…*, *Ne vagari incipiam…*),
  italic marginal numbers *136*–*139*, italic printed locator; guillemets on
  Gen. 49:9, Wisd. 9, Matt. 17:4, Cant. 6, Luke 12:32.
- Book II side (0026–0029): italic lemma and its piecemeal re-quotations,
  italic marginal numbers *140*–*145*; guillemets on twenty-nine quotations.

**So the brief's ruling holds at the one place in the work where 11638's
book-boundary model predicted a switch. 11632 has no seam.** A later range that
crosses the Book II/III boundary should test the same thing and say so; on this
evidence the merge can stop looking.

### 1a. ⚑ But the FUNCTIONAL rule needs widening: guillemets are not scripture-only

Wave 1 stated the division as "« » carries scripture, italics carry everything
else," and recorded that every guilleted span in cols 0181–0227 was scripture.
**That is no longer true from col. 0251D onward, and the counter-examples are not
marginal — they are the argument of a whole chapter.** In 0028 Migne guillemets:

- « Scito, inquit, te ipsum, homo. » (0251D) and « Scito, ait, te ipsum, homo. »
  (0252B) — the **Delphic oracle**, twice, attributed by Philip to *unum e septem
  Graeciae sapientibus* or to Apollo. Not scripture, not italic.
- « Dii, si qua est pietas coelo. » (0253A) — **a line of classical verse**
  (Aen. 2.536, *si qua est caelo pietas*), introduced *sicut ille poeta*.

The prologue's Horace and the two poets at 0198A / 0201A were **italic**. So
classical verse takes italics in Book I and guillemets in Book II. The stable
description is therefore not "scripture vs. everything else" but **« » = a
quotation adduced as an external AUTHORITY (whatever its source), italics = the
lemma under exposition, printed locators, marginal numbers, and words displayed
as words** — with 0029's exception below.

### 1b. ⚑ And guillemets can carry a single word displayed AS a word

0254B prints « Meos » dicit … and dicit « tuos » — two bare pronouns, guilleted,
each being discussed as the word of the lemma (*pasce haedos **tuos***, against
John 21's *agnos **meos***). Rendered « my » and « thy ». Under wave 1's rule
these would have been italic. Reproduced as printed; **do not tidy in either
direction**, and note that 0029 therefore has 12 guillemet pairs where a reader
counting quotations would expect 10.

### 1c. A printed locator inside the guillemets, again

0244C prints « Nolite timere, pusillus grex *(Luc. [0244C] XII)*. » — italic
locator **inside** the quotation, **containing the column anchor**, with **no
`[n:]` wrapper**. Third instance of the class (cf. 0203A, 0222B–C). This is why
0025's `noteCount` is 2 and not 3. Reproduced exactly, anchor and italics and
all.

### 1d. Marginal source-edition numbers

*136* (0240D) · *137* (0242D) · *138* (0244B) · *139* (0246B) · *140* (0247D) ·
*141* (0249C) · *142* (0251A) · *143* (0253A) · *144* (0254D) · *145* (0256B).
Continuous with wave 1's *101*–*128*. Each kept italic and verbatim **at the
exact word it interrupts** — *137* falls between *vobiscum* and *et laborat*,
*143* between *tamen* and *virum*, and the English clause was built round it
rather than moving it.

---

## §2 · THE COLLATION — all 70 listed spans, plus the unlisted `[n:]` weaves

Every span in `data/quotations/11632/0024-0029.md` was collated word by word
against the Vulgate. **Spans recorded as AGREES were collated and found to
agree; the absence of a marker on them is a finding, not a silence.** Lemma
re-quotations (*Egredere,* *et abi,* *Si ignoras,* *Equitatui meo,* etc.) are
short repetitions of a head-text collated at its full occurrence; each was
checked against its head-text and none re-quotes it with different words.

### 2a. Divergent — `[var:]` fired (9)

| Col | Ref | Migne prints | Vulgate | Note |
|---|---|---|---|---|
| 0241A | Gen. 49:9 | « Accubuit enim ut leo » | *requiescens **accubuisti** ut leo* | **second person → third.** Philip applies it to Christ in the third person throughout (*Quem profecto… tenere potuit monumentum*). Rendered "he lay down as a lion". |
| 0244C | Cant. 6:4 | « Capilli tui sicut caprarum » | *capilli tui sicut **grex** caprarum* | ⭐⭐ see §3.1 — the dropped word is the one the sentence exists to prove |
| 0249B | John 21:15 | « Si diligis me, inquit, pasce agnos meos » | *Simon Ioannis, diligis me **plus his**? … Pasce agnos meos* | a **question turned into a condition**; and Migne himself prints the interrogative form of the same verse at 0254B, five columns later |
| 0250B | Cant. 1:7 | *Si ignoras te, o **pulchra** inter mulieres* | *o **pulcherrima** inter mulieres* | ⭐ see §3.2 |
| 0251C | Job 2:10 | « Si bona suscepimus de manu **Domini**, quare mala non **sustineamus**? » | *de manu **Dei**, mala quare non **suscipiamus**?* | divine name changed, and "receive" → "endure" |
| 0252D | Luke 17:10 | « Cum **omnia bona** feceritis, dicite, quia servi inutiles sumus » | *cum feceritis **omnia quae praecepta sunt vobis*** | ⭐ see §3.3 |
| 0253C | Acts 1:14 | « Omnes… erant unanimiter perseverantes in oratione cum Maria matre Jesu » | *Hi omnes erant perseverantes unanimiter in oratione **cum mulieribus, et** Maria matre Iesu, **et fratribus eius*** | same verse, same two dropped clauses, as cruces-0012's marker at 0212B — but the **word order differs between Migne's two printings** (*perseverantes erant* there, *erant… perseverantes* here). See §5.2. |
| 0254C | Hos. 12:1 | « **Stultus** Ephraim pascit ventum » | *Ephraim pascit ventum* | *stultus* is not in the received text |
| 0255B | Exod. 15:1 | « Equum et ascensorem **projecit** in mare » | *equum et ascensorem **deiecit** in mare* | ⭐ see §3.4 — the verb of Exod. 15:4, which Migne quotes two lines later |

### 2b. Collated and AGREEING — no marker (recorded so the absence is evidence)

**0024** — Cant. 1:6 *Indica mihi ubi pascas, ubi cubes in meridie* (the lemma;
truncated at the opening, *quem diligit anima mea* having been expounded in the
preceding range at 0022 — truncation, not variant) · Matt. 17:4 « Bonum est nos
hic esse » (opening *Domine* falls outside) · Wisd. 9 « Da mihi… sapientiam ut
mecum sit, et mecum laboret » — **a conflation, not a variant:** *Da mihi…
sapientiam* is 9:4 (dropping *sedium tuarum assistricem*), *ut mecum sit et mecum
laboret* is 9:10, and every word printed is the Vulgate's. Per the cruces-0000
item-12 precedent, a conflated citation takes no `[var:]`.

**0025** — Cant. 1:6 *Ne vagari incipiam post greges sodalium tuorum* — **agrees
word for word.** · Cant. 6:5 « dentes tui sicut grex ovium » — agrees, truncated
before *quae ascenderunt de lavacro* (the first half of the same span is the
`[var:]` above) · Luke 12:32 « Nolite timere, pusillus grex » — **agrees.**

**0026** — Cant. 1:7 *Si ignoras te, o **pulcherrima** inter mulieres, egredere,
et abi post vestigia gregum* — **agrees exactly** (and see §3.2: the same head at
0250B does not) · Luke 1:28 « Benedicta tu, inquit, in mulieribus » — **agrees.**

**0027** — Cant. 1:7 *Et pasce haedos tuos juxta tabernacula pastorum* —
**agrees** (also at 0254A).

**0028** — Gen. 18:27 « Loquar, inquit, ad Dominum meum, cum sim pulvis et
cinis » — **agrees**, opening at *loquar* · Ps. 70:16 « Quoniam non cognovi, ait,
litteraturam, introibo in potentias Domini; Domine, memorabor justitiae tuae
solius » — **agrees word for word** · Dan. 4:27 « Nonne haec est… Babylon magna,
quam aedificavi in robore fortitudinis meae, et in gloria decoris mei? » — drops
*ego* and *in domum regni*; abridgment, no marker · Job 29:13–16, 29:25, 30:1 —
the long « Cor viduae… » run **agrees clause by clause**, abridged across 29:14
(*et diademate iudicio meo*) and 29:17–24, and *cumque sederem* for *cum
sederem*; a stitched citation, not a divergent reading · Ecclus. 11:27 « In die…
malorum ne immemor sis bonorum » — **agrees** · 2 Cor. 12:2–4 « Scio, inquit,
hominem in Christo raptum usque ad tertium coelum… » — every word Pauline;
compressed (drops *ante annos quattuordecim* and one of the two *nescio*, folds
*raptum… usque ad tertium caelum* into v. 2). ⚠ Checked specifically for negation
loss under brief §9: the surviving *nescio* and *non licet* are both carried in
the English. No marker · 2 Cor. 12:5 « Pro hujusmodi gloriabor » — **agrees** ·
John 19:26 « Mulier… ecce filius tuus » and 19:27 « Ecce mater tua » — **both
agree** · Ezek. 34:31 « Vos autem greges mei, dicit Dominus » — agrees for the
words printed; truncated before *greges pascuae meae homines estis*, with *dicit
Dominus* pulled up from the verse's end. No marker.

**0029** — 1 John 1:8 « Si dixerimus… quia peccatum non habemus, nos ipsos
seducimus, et veritas in nobis non est » — *quia* for *quoniam*, *nos ipsos* for
*ipsi nos*; sense untouched, logged, no marker · Jas. 3:2 « In multis… offendimus
omnes » — **agrees** (Vulg. *In multis enim*) · John 21:15 « Simon Joannis,
diligis me? pasce agnos meos » — agrees, dropping *plus his*; **note that this is
the correct interrogative form of the verse Migne printed as a conditional at
0249B** · Exod. 32:7 « Descende, peccavit populus tuus » — agrees, dropping the
preceding *Vade* · Cant. 1:8 *Equitatui meo in curribus Pharaonis assimilavi te,
amica mea* — **agrees word for word** · John 15:14 « Vos amici mei estis, si
feceritis quae praecipio vobis » — agrees, dropping *ego* · Exod. 15:4 « Currus
Pharaonis et exercitum ejus projecit in mare » — **agrees exactly** · Exod. 15:13
« Dux fuisti… in misericordia tua populo quem redemisti » — **agrees** ·
Hab. 3:8 « Qui **ascendis** super equos tuos, et quadrigae tuae salvatio » —
Vulg. *ascendes*, future. **A one-letter tense difference on which nothing in the
exposition turns, and both forms are attested in Vulgate transmission; logged
here, deliberately NOT marked.** Recorded so a later reviewer who fires one says
so rather than treating it as a fresh discovery.

### 2c. The `[n:]`-only class — read against the prose after the listed collation

All fourteen ⭐ spans on the list were traced back to their real left edge.
**Thirteen of the fourteen turn out to be Philip's own prose**, written *with*
scripture rather than quoting it (accusative-and-infinitive frames, third-person
recastings, passive recastings). None takes a marker; a `[var:]` on unmarked
prose would misrepresent it as a lemma. But two are worth the merge's attention:

1. ⭐ **0240B, Luke 9:58 cited, Matt. 8:20 worded.** *Quia ergo vulpes foveas,
   **nidos** coeli volucres habere dignoscuntur* `[n: (Luc. IX)]`. Luke 9:58 reads
   *volucres caeli **tabernacula*** ; *nidos* is Matthew's word. Philip's own
   syntax, so no marker — but the note names the gospel whose wording is *not*
   printed. Same class as cruces-0012's Deut. 32:4-cited / Ps. 91:16-worded case.
2. ⭐⭐ **0245A, Ps. 90:5–6 fused, and Philip then expounds the fusion.** He
   writes *vel **sagitta in tenebris**, vel incursu meridiano* `[n: (Psal. XC)]`.
   The Vulgate has *a **sagitta volante in die**, a negotio perambulante **in
   tenebris**, ab incursu et daemonio meridiano* — the arrow flies **by day**;
   what walks in darkness is the *negotium*. Migne's arrow flies in the dark, and
   the very next sentence glosses the fused form: ***Sagitta volans in tenebris**,
   quae ferit graviter dum nescitur, occulta est suggestio*. The whole
   hidden-suggestion / open-assault antithesis of *Caput* XXVI rests on it.
   **No marker, because Migne marks it as neither quotation nor lemma** — it is
   Philip's prose with a bare note, exactly the class the extractor cannot see —
   but this is the single most consequential textual observation in my range and
   the merge should carry it. If a later range meets Ps. 90:6, expect the arrow
   in darkness.

The remaining twelve, listed so nobody re-opens them: 0240D 1 John 5:19 + Luke
1:35 woven; 0240D John 19:26 recast; 0241C John 13:23 (`[n: (Cap. XIII)]` — a
bare chapter with no book named, reproduced verbatim); 0242A John 20:22;
0242A Acts 2:3; 0244A Ps. 93:20 recast into the passive (*labor fingitur in
praecepto* for *qui fingis laborem in praecepto*; Philip used the active at
0195A, so the recasting is his); 0244A Matt. 13:43 recast to the singular
(*justus… sicut sol lucidus resplendescit* for *iusti fulgebunt sicut sol*);
0247A Hag. 1:6 recast; 0249B Matt. 25:33; 0254A Luke 17:10; 0254B Matt. 25:33
again; 0256A 1 Cor. 1:23 recast.

Further unmarked weaves checked for silent conformation and left as Philip's own
prose: Matt. 23:15 (*duplo filia sit gehennae*, 0244D), Luke 10:18, 2 Cor. 11:14
(0245C), Ps. 68:29 / Apoc. 3:5 (*deleri de libro viventium*, 0248B),
2 Cor. 1:22 (*pignus Spiritus et arrhas*, 0248C), Luke 1:30 (0248C), John 6:27
(0242C), Ps. 127:2 (0242C), Heb. 12:9 (*Pater spirituum*, 0241B), Col. 2:9
(0250A), Ps. 117:15 (0249C), Ezek. 28:13 (0250D), Ovid *Met.* 1.85 (*os homini
sublime*, 0252A), Ps. 31:9 (*equum et mulum*, 0252B), 1 Cor. 13:10 (*evacuato
quod ex parte est*, 0254D), Ps. 83:8 (*de virtute in virtutem*, 0254D),
Matt. 11:30 (*levi jugo et suavi*, 0256A). None was conformed.

### 2d. Listed spans that are NOT scripture

0251D and 0252B « Scito te ipsum, homo » (the Delphic maxim, §1a) · 0253A
« Dii, si qua est pietas coelo » (Virgil, §1a) · 0254B « Meos » and « tuos »
(words displayed as words, §1b) · 0244C *(Luc. XII)* (a printed locator, §1c) ·
all the italic lemma fragments.

---

## §3 · THE FOUR FINDINGS THE MERGE SHOULD CARRY

**⭐⭐ 3.1 · Cant. 6:4 at 0244C — the dropped *grex* is the word the sentence
exists to prove.** Philip's point is that the faithful are called a *grex*
singular and the false a *greges* plural: *sciens quia convenientius nomen justis
attribuitur **singulare***. He then adduces two proof-texts for the singular.
Migne prints the first as « Capilli tui sicut **caprarum** » — with no noun at
all where the Vulgate has *sicut **grex** caprarum*. **The keyword has fallen out
of the proof-text adduced for it**, leaving a bare genitive and only the second
half (*dentes tui sicut **grex** ovium*) carrying the argument. Rendered as
printed, "Thy hair as of goats", with the `[var:]`.

**⭐ 3.2 · The head lemma of Book II *Caput* III prints *pulchra* where *Caput* I
prints the Vulgate's superlative — and Philip's exposition follows the short
form.** At 0245D the lemma is *o **pulcherrima** inter mulieres*, the
Vulgate's superlative. At 0250B, four columns later and heading the same verse's
exposition, it is *o **pulchra** inter mulieres*, positive. And the gloss between
them is unambiguously on the positive: *O **pulchra**, inquit, inter mulieres*
(0247A), *Quamvis quod **pulchra** inter mulieres dicitur* (0247B), then *o
pulchra* four more times at 0253A. **So the divergence is not a one-off
compositor's slip on a head line** (the shape cruces-0006 found for *ubera sua*
at 0196C): six of the seven printings of the phrase in this range read *pulchra*,
and the Vulgate's superlative appears only once, at the head that opens the book.
`[var:]` fired at 0250B only, since 0245D is the one that agrees. ⚑ **Worth a
count across the later ranges: if *pulchra* keeps winning, it is Philip's text
and the 0245D superlative is the outlier, which reverses the usual expectation.**

**⭐ 3.3 · Luke 17:10 at 0252D — *omnia bona*, and the next sentence expounds
it.** Migne prints « Cum **omnia bona** feceritis, dicite, quia servi inutiles
sumus » where the Vulgate has *cum feceritis **omnia quae praecepta sunt
vobis***. Philip's immediately following gloss is built on the substituted
phrase: *non **omnia bona** quivis facere comprobatur, si non istud dicere
**bonis** caeteris apponatur; et **bonorum** congeriem… non colorat*. Conforming
the lemma to "all things commanded you" would leave four sentences arguing about
*good things* from a verse that no longer mentions them — the 7a″ mechanism
exactly. Rendered as printed.

**⭐ 3.4 · Exod. 15:1 at 0255B — contamination from the verse quoted two lines
later.** Migne prints « Equum et ascensorem **projecit** in mare » (Vulg.
*deiecit*), and then, in the same sentence, « Currus Pharaonis et exercitum ejus
**projecit** in mare », which is Exod. 15:4 and where *proiecit* is correct. The
first verse has taken the second's verb. The sense is not changed — both verbs
mean "cast" — and I record explicitly that I fired the `[var:]` on the *word*,
not on a sense-shift, because this is the same evidential class as cruces-0012's
Ps. 15:9 / Ps. 65:17 mutual contamination: two adjacent quotations of the same
song, one having borrowed from the other. ⚑ **If the merge rules that a
sense-neutral lexical swap does not earn a Pattern 14 marker, this is the one to
withdraw** — the finding survives in this file either way.

---

## §4 · PATTERN 7 — printed readings rendered as printed, conjectures kept here

**Two `[sic:]` fired. Neither carried run is ALSO translated in the running
text** (brief §8's named failure).

1. **0241C `[sic: *lehari*]`** — *ne a gloria deprimamur, dum ad formam
   **lehari** stulte invadimus altiora*. Read ***Icari***, near-certain: the
   sentence's own frame is the Daedalus myth (*Inter utrumque ergo non **Dedalus**,
   sed Pater spirituum doceat nos volare*), and the antithesis is exactly
   Daedalus's counsel — too low into mud and dregs on one side, too high after
   Icarus's fashion on the other. *lehari* is not a Latin word, so Pattern 7
   governs: carried untranslated in italics, and the English deliberately does
   **not** also say "Icarus".
2. **0254D–0255A `[sic: *vidilicet*]`** — *ut **vidilicet** sequatur exemplo*.
   Read *videlicet*, certain. ⚠ **This one sits on a boundary and I record the
   choice rather than hide it:** an *e*/*i* interchange in an unstressed syllable
   is the sort of thing Pattern 9 exempts as period orthography, and a case could
   be made for rendering it "namely" and marking nothing. I marked it because
   wave 1 marked exactly this shape — `[sic: *eumdum*]` for *eumdem* at 0191C — and
   a work that carries one and renders the other is incoherent on its own page.
   **If the merge prefers Pattern 9 here, it should also revisit *eumdum*.**

**Rendered as printed, no marker (real words, merely wrong or merely odd):**

- ⛔ **0250B *Nolens Sponsus gradatim ad profectus Virginem promovere, docet eam
  quomodo mereatur proficiendi gratiam obtinere.*** The printed *Nolens*
  contradicts its own sentence: the Bridegroom is said **not** to will to promote
  her, and in the same breath to teach her how to obtain the grace of promotion,
  which the whole of *Caput* III then does. The conjecture is ***Volens***, and
  it is as near certain as the parallel constructions allow. **Under brief §9 the
  negation is CARRIED** — the English reads "The Bridegroom, not willing to
  promote the Virgin by degrees to advances, teaches her how she may deserve to
  obtain the grace of advancing." It is meant to look wrong. ⚠ **This is the
  sentence in my range most likely to be silently repaired by a later reader, and
  the repair would be invisible: dropping one participle's negative gives a
  perfectly smooth chapter opening.**
- **0253A *quod quidem difficile est, sed tamen *143* virum est*.** *virum* is
  accusative and fills the slot of a neuter predicate; the clause does not
  construe. The conjecture is ***verum*** ("but yet it is true"), which is what
  the argument requires — Philip has just said *Si* here is affirmative, not
  dubitative. *virum* **is** a real word, so Pattern 12 keeps it on the English
  side and it is rendered, not carried: "which indeed is difficult, but yet is a
  man". ⚠ Second place most likely to be tidied. Do not.
- **0242D *cum invitat justus secum patientiam ad laborem*.** The proof-text three
  lines above is Wisd. 9's *ut mecum sit, et mecum **laboret***, of ***sapientia***
  — so *patientiam* is almost certainly *sapientiam*. A real word that construes
  in its slot; rendered "invites patience along with himself to labour", no
  marker.
- **0250B *si, quae **tam** obtinuit, apud se… sic reponat*.** *tam* where the
  sense wants *jam*. Rendered "which she has so obtained".
- **0247B *de qua nasci voluit, **sepe** carnis novo genere non abrupta*.**
  *sepe* = *saepe*, ablative of *saepes*, "hedge" — attested medieval
  orthography, Pattern 9, deliberately unmarked. Rendered "the hedge of her flesh
  not being broken".
- **0252C *Et **Adjunxit**: « Pro hujusmodi gloriabor »*.** Migne capitalizes the
  verb mid-sentence. The English supplies the pronoun English requires ("And he
  added"), which relocates the capital and so cannot mirror it; logged here rather
  than forced. Not a Pattern 8 punctuation case and no mark was deleted.

**Negation audit (brief §9), second pass, against the Latin.** Every printed
*non / nec / neque / nisi / nunquam / nullus / nihil* was matched, with
particular attention to the dense clusters at 0242B (*non nisi meridie cubare*),
0243D (*non nisi dies una **non** proficiens **non** deficiens dilucescit, cujus
**non** fuscatur splendor, calor splendidus **non** tepescit*), 0250C (*vel
**non** quati ariete, vel flatu quantumvis modico **non** moveri… **nunquam**
animo consentire*), 0250D (*si **non** de his quae acceperat superbiret… Deo
paria **non** sentiret*), 0252D (*quia **non** omnia bona quivis facere
comprobatur, si **non** istud dicere… apponatur… qui eam vanitatis vitandae
gratia **non** ignorat*), 0255C (*minasque Pharaonis **non** evadunt tali
praesidio… equo aut rota volubili **non** transitur… sicut **non** navigium, sic
**nec** vehiculum*), and 0256A–B (***non** culpam tibi contrahis, **non**
peccatum, **non** frangeris opprobriis, **non** iter deseris… **Nec** solum caput
tuum **non** premit… sed **nec** rivus praeteriens*). **No negation was dropped
and none was supplied.** The one place where carrying it makes the English
contradict itself is 0250B's *Nolens*, above, and that is the point.

---

## §5 · CONVENTIONS SET OR HELD IN THIS RANGE

1. ⚑ **`amica mea` (Cant. 1:8) = "my FRIEND", not "my love", and the gloss
   forces it.** *Caput* V opens by glossing the word — *Amicam dicit, cujus animus
   auditui penitus concordat* — and proves it from John 15:14, « Vos **amici** mei
   estis, si feceritis quae praecipio vobis ». Douay's "my love" would leave the
   chapter arguing from *friends* to a lemma that says *love*, and would also
   collide with *amor* and *dilectio*, both of which are in use in the same
   columns. **This lemma recurs many times later in the Song (2:10, 2:13, 4:1,
   4:7, 5:2, 6:3), and the merge should hold every range to one English form of
   it.** Flagged as the range's one work-wide vocabulary decision.
2. **`LIBER SECUNDUS.` → "BOOK TWO."**, after wave 1's `LIBER PRIMUS.` → "BOOK
   ONE." The head sits at the end of 0025 with an empty body and its *Caput* I
   opens the next chunk; nothing was moved.
3. **Migne's `CAPUT PRIMUM` in words, then `CAPUT II`–`V` in numerals, mirrored
   and not tidied** — and note that Book II restarts the numbering while Book I
   ended at `CAPUT XXVI`. Preserved as printed.
4. ⚑ **Sponsus/sponsus, Virgo/virgo capitalization mirrored word by word** (brief
   §7a). The live case in this range is **0243B–C, where Migne prints lower-case
   *sponsum* — *sponsum tenere sinu, affectu, velut brachio circumplecti* —
   inside a paragraph that has *Sponsus* capitalized four times before and after
   it.** The English reads "bridegroom" there and "Bridegroom" everywhere else.
   Likewise 0252D *quae nondum dat **filius*** (lower case, rendered "the son")
   beside *Sponsus* capitalized in the same sentence. **Mechanically checkable
   against the Latin; do not regularize.**
5. **Pattern 17 does real work here.** *Caput* I–V of Book II is the Bridegroom
   speaking **to the Virgin, singular throughout** — *Tu, ait, quae majorem
   cunctis mulieribus gratiam jam adepta* (0247D), *attende diligentius quid tibi
   jam meo munere sit collatum*, *si… memoriter consideraveris te habere*,
   *assimilavi te*, *te addixi*, *te benedixi*, *tuas… maculas*, *te perduco*,
   *tibi contrahis*, *caput tuum*, *vera mater facta es* — so **thou** without
   exception. Philip's own frame is plural and takes **you**: *sicut nostis*
   (0241C), *cum vobis, fratres* and the whole 0242C–0243A exhortation
   (*castigatis, alligatis, relegatis, laboratis, manducatis, dicitis,
   aestuatis*), *Videtis Paulum* (0252C), *ut… noveritis* (0252D). The one
   mixed-number sentence is 0255B's « Vos amici mei estis, si feceritis quae
   praecipio **vobis** » — plural, inside a chapter otherwise addressed to one
   woman, and the English shows it.
6. **Brief §5 vocabulary held:** *charitas* = charity (0241D *sua erga eos
   charitas*) kept distinct from *amor* / *dilectio* = love (0241C *amoris
   gratia, dilectionis floribus*, where Philip's own doublet forces the repetition
   and it was not varied for elegance); *misericordia* = mercy (0255D *in
   misericordia tua*), *clementia* does not occur; *fusca* = **swarthy** — live at
   **0247B**, *matrem elegerit **fuscam**, luscam*, and at **0243D**, *cujus
   **non fuscatur** splendor*, both rendered "swarthy"/"made swarthy", never
   "black"; *Sponsus* = Bridegroom, *Sponsa* = Bride; *equitatus* = cavalry,
   *quadriga* = four-horse car, kept distinct from *currus* = chariot (0255C–D
   runs all three in two sentences).
7. **Migne's *Si* discussed as a word at 0253A is NOT italicized on the plate**
   (*Quod enim dicit Si, non dubitativa, sed affirmativa conjunctio est*), unlike
   every other word-as-word in this work. The Latin word is kept in the English
   and **no italics were supplied** — adding a run the plate lacks would break
   italic parity to make a point the sentence already makes.

---

## §6 · THINGS DELIBERATELY NOT REPORTED (brief §10, checked once each)

- **0026's anchors open [0245D] and then jump to [0246D]**, and its `colContext`
  is 0246C while its `colFirst` is 0245D — i.e. the chunk begins at a column
  *before* its own context. This is brief §10.1's band-arithmetic class exactly
  (two works interleaving by band). **Checked: no text is broken mid-word or
  mid-construction across any anchor in any of the six chunks.** No `[ed:]`, no
  patch, no plate check. Recorded only so the next reader does not spend a session
  on it.
- `noteCount` matches the body `[n:]` count in all six chunks (11/2/2/2/14/13),
  verified mechanically, not by eye.
- **Migne's references reproduced verbatim, none corrected** (`refDisplay`, brief
  §10.2): `[n: (Luc. IX)]` on Matthew's wording at 0240B; `[n: (Cap. XIII)]` at
  0241C, a chapter number with no book named; `[n: (Job. II.)]` and
  `[n: (Dan. IV.)]` printed with a full stop inside the parenthesis where the
  other notes have none. The two `[n: (ibid.)]` chains (0252C on 2 Cor. 12,
  0253B on John 19, 0255C on Exod. 15) all resolve correctly against their
  printed antecedents and **none was touched.**
- **`[n:]` position varies and is reproduced, not normalized:** it falls *inside*
  the closing guillemet in most cases, but **outside** it at 0251A (Dan. 4) and
  0251C (Job 2) — `…decoris mei? » [n: (Dan. IV.)]`. Mirrored.
- Attested medieval spellings left alone and unmarked (Pattern 9): *tanquam*,
  *coelum/coelestia*, *aethnicum*/*aetheris*, *moerentium*, *sepe*, *spiritaliter*,
  *Aggaeus*, *Nabuchodonosor*, *Hierusalem* (not in this range), *charitas*.
- No `[f:]`. 11632 is lemma-and-gloss, not a florilegium (brief §10.4).
- No `[d:]`, no `[nt:]`: no dittography and no prose note in the range — all 34
  notes are bare citations.

---

## §7 · OPEN — for the merge or a blind read

1. ⛔ **The blind polarity read has not been done and cannot be done by me.**
   Findings must be formed blind and reconciled against this file afterwards
   (runbook 4a). **The three passages most likely to be wrongly "repaired" are, in
   order: *Nolens* at 0250B (§4), *virum est* at 0253A (§4), and the carried
   *lehari* at 0241C.** An entry defending an unusual rendering deserves more
   scrutiny than an unlogged passage, not less.
2. ⚑ **§1a and §1b widen wave 1's typography rule and the merge should adopt or
   reject the widening explicitly**, because "guillemets = scripture" is stated
   as settled in three range files and is false from col. 0251D. The safe form is
   "guillemets = a quotation adduced as an authority; italics = the lemma,
   locators, marginal numbers and words-as-words" — with 0254B's « Meos » /
   « tuos » standing as a genuine exception to the last clause.
3. ⚑ **The *pulchra* / *pulcherrima* count (§3.2) is work-wide and this range
   only sees its first columns.** Cant. 1:7 heads several later *capita*. The
   merge should collect the readings rather than impose one, and should check
   whether any later range silently conformed the 0250B head to the superlative.
4. **Ps. 90:6's arrow in darkness (§2c.2) is unmarked because Migne marks it as
   nothing at all.** If the merge decides that an expounded `[n:]`-only weave
   earns a `[var:]` — the question cruces-0012 opened with Rom. 8:10 and answered
   the other way — **this is the range's candidate**, and the marker would go at
   0245A.
