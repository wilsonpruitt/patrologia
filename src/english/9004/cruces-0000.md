# Cruces — 9004, chunks 0000–0004 (cols 0861A–0877A)

Walafrid Strabo (attrib.), *Expositio in quatuor Evangelia*, PL 114. Martianay's own
Admonitio (chunk 0000) warns that the text is "teeming with barbarisms and solecisms"
and that he handed it to the printers "with almost all its faults" and deliberately did
NOT correct it. Everything below is read against that declaration: an ungrammatical
construction here is the *expected* state of the text, not a plate defect.

## Standing policy for this batch — attribution of broken readings

⛔ **Our Latin is Corpus Corporum's TEI, not Migne's plate.** Per CLAUDE.md 8a and the
measured false-rates on 8945 (6 of 9) and 8996 (7 of 8), a suspicion about a single
broken WORD is normally a suspicion about our file. So in this batch:

- **`[sic: …]` fires only where nothing at all can be rendered in place** — one site
  (0877A *palasticas*).
- **A one-letter slip or a word-division defect whose target is unambiguous is rendered
  by its evident word and logged here, classed as probable digitization damage.** Those
  entries are marked **[cc?]** below. They are candidates for the plate read, not claims
  against Migne.
- **`[var: …]` fires on scripture divergences from the Vulgate that change the sense.**
  Truncation ("et reliqua" is this work's normal citation habit), word order, and
  medieval orthography (*coelum*, *elymosyna*, *thezaurisare*, *baptizeretur*) do not
  fire it.

## Marker tally

| chunk | anchors | `[n:]` | `[var:]` | `[sic:]` | other |
|---|---|---|---|---|---|
| 0000 | 6 | 1 | 1 | 0 | — |
| 0001 | 15 | 0 | 3 | 0 | — |
| 0002 | 13 | 0 | 6 | 0 | — |
| 0003 | 14 | 0 | 2 | 0 | — |
| 0004 | 14 | 0 | 3 | 1 | — |

Anchors, guillemets (2/2 in 0001), `?` and `!` counts, `## ` heads and paragraph
structure all verified 1:1 against the Latin twins.

---

## Vulgate divergences MARKED `[var: …]`

**0861A (0000)** — Luke 24:32. Migne: *Nonne cor **jam** ardens erat in nobis*; Vulg.
*Nonne cor **nostrum** ardens erat in nobis*. A word substitution, not a truncation:
"the heart already burning" for "our heart burning". Rendered as printed.

**0863B (0001)** — Ps 131:11. Migne: *De fructu ventris tui ponam super sedem **meam***;
Vulg. *super sedem **tuam***. The proof-text is adduced to show that David is Christ's
father; "upon **my** throne" reverses whose throne is in view. Rendered as printed.

**0865A–B (0001)** — Gen 49:10. Migne: *non deficiat **princeps** de Juda; nec dux de
femoribus ejus donec veniat **cui repromissum est***; Vulg. *Non auferetur **sceptrum**
de Iuda et dux de femoribus eius donec veniat **qui mittendus est***. Two substantive
substitutions (prince/sceptre; "to whom it has been promised"/"who is to be sent"), and
Migne supplies a *nec* the Vulgate does not print. All three carried.

**0864D (0001)** — Isa 7:14 / Matt 1:23. Migne: *ecce virgo in utero habebit, et
**vocavit** nomen ejus Emmanuel*; Vulg. Matt *vocabunt nomen eius*. A perfect singular
for a future plural: "he called" for "they shall call." Rendered as printed. (The
omission of *et pariet filium* is truncation and is not marked.)

**0867A (0002)** — Matt 2:16, and this is the best find in the batch. Migne prints
*Tunc Herodes videns, quod **inclusus** sit a magis* ("shut in"); Vulg. *videns quoniam
**inlusus** esset a magis* ("mocked"). ⭐ **The gloss itself depends on the Vulgate word**:
the very next clause quotes Ps 103:26 *draco … ad **inludendum** eis* and then says
*hic plus **inluditur***. So the exposition is built on *illusus* while the lemma prints
*inclusus*. Rendered as printed, marked. Prime candidate for the plate read
(*n*/*c* confusion is also within the digitization's range).

**0867D and 0871B (0002, 0003)** — Matt 3:2 / 4:17. Migne prints the future
*Appropinquabit enim regnum coelorum* both times; Vulg. the perfect *adpropinquavit*.
"Shall draw near" for "has drawn near" is a change in what is asserted; marked at both
occurrences, since the chunks are read separately.

**0868A (0002)** — Matt 3:5. Migne: *Tunc **exiebant** ad eum Jerosolyma*; Vulg.
*exiebat* (singular, agreeing with *Hierosolyma*). ⚑ Note the gloss immediately
explains it: *pro habitatoribus dicitur* — "it is said for the inhabitants", which is
exactly what licenses a plural verb. This is the reverse of the 7a″ hazard: the
commentator is glossing his own text's number.

**0868B (0002)** — Matt 3:6. Migne: *Et **baptizabant** in Jordanem* (active, accusative);
Vulg. *baptizabantur ab eo in Iordane* (passive, ablative). "They were baptizing" for
"they were being baptized by him" changes the agent. Rendered as printed.

**0868D (0002)** — Matt 3:11. Migne: *Ipse vos **baptizat** igne*; Vulg. *ipse vos
**baptizabit in Spiritu Sancto et** igni*. Present for future, and the Spirit dropped
from the lemma — though the gloss then supplies it (*vel in Spiritu sancto et igne*),
which is why the divergence is visible at all. Rendered as printed.

**0868D–0869A (0002)** — Matt 3:13. Migne: *Tunc venit Jesus **ad** Galilaeam ut
baptizeretur*; Vulg. *venit Iesus **a** Galilaea in Iordanen*. The direction of travel is
reversed. Rendered as printed. ⚠ Classed as **plausibly digitization** as well — a
one-letter *a*→*ad* is within CC's range — but the reading is coherent Latin either way,
so it takes `[var:]` and not `[sic:]`.

**0870C–D (0003)** — Matt 4:10. Migne: *Dominum tuum adorabis*; Vulg. *Dominum **Deum**
tuum adorabis*. The full form is printed correctly at 0866A in chunk 0001, twelve columns
earlier, which is the evidence that the shorter one here is a defect rather than the
work's habit.

**0873C–D (0004)** — Matt 5:17, and the most consequential divergence in the batch.
Migne prints *Nolite putare, quia **non** veni solvere legem*; the Vulgate reads *Nolite
putare **quoniam veni** solvere legem aut prophetas* — that is, Migne's text inserts a
negation into the clause governed by *nolite putare*, so the printed sentence says "do
not think that I have NOT come to destroy the law." ⛔ Per §7a the *non* is carried into
the English, contradiction and all, and marked. The gloss immediately below prints the
sentence again *without* the negation (*ecce non veni solvere legem, sed augere*) — i.e.
the correct sense — which makes the lemma's *non* an isolated intrusion. Rendered as
printed.

**0875A (0004)** — Matt 5:34. Migne: *neque per coelum quia **sedis** est Dei*; Vulg.
*quia **thronus** Dei est*. A word substitution ("seat"/"throne"), plus a nominative
*sedis* for *sedes*. Rendered as printed.

**0875B (0004)** — Matt 5:41. Migne: *vade cum illo **alia mille***; Vulg. *vade cum illo
**alia duo***. The number of the second mile is changed. Rendered as printed.

## Vulgate divergences LOGGED, not marked (truncation, order, orthography, conflation)

- **0863B (0001)** Matt 1:1 *filii Abrahae* for *filii Abraham* — declension of the name.
- **0863B (0001)** Gen 22:18/26:4 *In semine tuo benedicentur omnes gentes* — Vulgate
  order reversed and *terrae* dropped. No gloss turns on either.
- **0864C (0001)** Matt 1:20 *Angelus Domini in somnis **dixit*** for *apparuit ei dicens*
  — compression. The gloss turns on *in somnis*, which is intact.
- **0864D (0001)** Isa 7:14 lemma omits *et pariet filium*.
- **0866A (0001)** Matt 2:5 *in Bethleem **Judae*** for *Iudaeae*.
- **0867B (0002)** Matt 2:16 *et mittit et occidit* for the Vulgate participle *mittens
  occidit*.
- **0867B (0002)** Ps 103:26 *ad inludendum **eis*** for *ei*.
- **0867C (0002)** Matt 2:23 *Venit in civitatem Nazareth* compresses *veniens habitavit
  in civitate quae vocatur Nazareth*.
- **0868C (0002)** Matt 3:9 *Potest Deus **et** lapidibus istis* for *potens est Deus **de**
  lapidibus istis*.
- **0868C (0002)** Matt 3:10 *Omnis arbor **qui** non facit … **excidetur*** for *quae … 
  exciditur* — gender (Pattern 9, no English exponent) and tense.
- **0870A (0003)** Matt 4:4 *Non in **solo pane*** for *in pane solo*; *vivit* for *vivet*.
- **0870C (0003)** Matt 4:10 *vade retro* — Matt has *vade Satanas*; *vade retro* is Mark
  8:33. A conflation, and the gloss expounds *retro*, so it is the author's text.
- **0871C (0003)** Matt 4:20 + 4:22 conflated: *relictis retibus **et patre*** joins the
  nets of the first pair to the father of the second. The gloss then distinguishes the two
  pairs, so the conflation is in the lemma only.
- **0872A (0003)** Matt 4:24 *Obtulerunt ei paralyticos* compresses two clauses.
- **0872B (0003)** Matt 5:1 *Videns autem **Jesus** turbas* — *Jesus* supplied; likewise
  at 0870D Matt 4:12.
- **0872C (0003)** Matt 5:5 *Beati qui lugent **nunc*** — *nunc* from Luke 6:21.
- **0873A (0003)** Matt 11:29 *discate a me* for *discite*. **[cc?]**
- **0873B (0003)** John 4:34 *ut faciam voluntatem **patris mei*** for *eius qui misit me*.
- **0873B (0003)** Matt 8:20 *non **habuit** ubi caput reclinet* for *habet*.
- **0874A (0004)** Matt 5:19 *Qui **enim** solverit* for *Qui ergo*.
- **0874C (0004)** Matt 5:24 *vade reconciliari* drops *prius*.
- **0874C (0004)** Matt 5:25 *ne forte **adversarius tradat te judici*** — Vulgate order
  *ne forte tradat te adversarius iudici*.
- **0874D (0004)** Matt 5:28 *ad **concupiscendam** eam* for *concupiscendum*.
- **0875A (0004)** Matt 5:37 *quod amplius est* for *quod autem his abundantius est*.
- **0875B (0004)** Matt 5:39 *si quis percusserit te **in dexteram maxillam*** — order and
  case against *si quis te percusserit in dextera maxilla tua*.
- **0875C (0004)** Matt 5:45 *et pluit super justos* drops *et iniustos* — ⚑ note the gloss
  requires both (*quia in utroque totus mundus continetur*), so the truncation is in the
  lemma while the exposition still has the full verse in view.
- **0875C (0004)** Matt 5:43 *diligis* for *diliges*; *antiquis* supplied.
- **0875D (0004)** Matt 6:2 *Cum ergo **facis*** for *facies*.
- **0876A (0004)** Matt 6:8–9 *scit enim pater* drops *vester*; *quod vobis opus est* for
  *quid opus sit vobis*; *sic ergo orate* for *sic ergo vos orabitis*.
- **0876A (0004)** Matt 6:10 *Veniat regnum tuum* for *Adveniat*. ⚑ **The same work prints
  *adveniat regnum tuum* correctly at 0876C**, in the summary of the seven petitions —
  an internal inconsistency worth the plate reader's eye.
- **0876B (0004)** Matt 6:11 *Panem nostrum **quotidianum*** where Vulg. Matt has
  *supersubstantialem* (Luke 11:3 has *cotidianum*). The liturgical form; the gloss
  expounds *quotidianum* (*omni die usque ad caput anni*), so it is the author's text.
- **0876C (0004)** Matt 6:16 *Cum autem **jejunaverit*** for *ieiunatis*.
- **0876C (0004)** Matt 6:19 *noli thezaurisare* (singular) for *Nolite thesaurizare vobis
  thesauros*.
- **0876D (0004)** Matt 6:24 and 6:21 conflated in one lemma.

## Broken or unconstruable readings

**0862B (0000)** — *artis, dosis, anatholis, mesimbrio.* The four Greek cardinal points
(ἀνατολή, δύσις, ἄρκτος, μεσημβρία) behind the ADAM acrostic, in a corrupt medieval
transliteration with *artis*/*anatholis* apparently transposed from *arctos*/*anatole*.
Carried in Migne's italics, untranslated, as foreign proper names. **No `[sic:]`**: this
form of the acrostic is a widely attested medieval corruption, not evidence about this
plate (Pattern 9).

**0861A (0000)** — *insufflictio* for *insufflatio* (gloss on Phison). Rendered
"insufflation". **[cc?]**

**0861C (0000)** — *Ex aere flatus: Igne sanguis, **aqua flamma**, terra corpus.* The
four-element scheme assigns flame to water, which contradicts the scheme it is stating.
Rendered as printed; no marker, because *flamma* is a real word in its slot. Candidate
for the plate.

**0862B (0000)** — Gen 6:15 paraphrased, not quoted: *longitudo trecentorum cubitorum et
latitudo **unius**, altitudo triginta et uno cubito*. The Vulgate has breadth fifty,
height thirty. ⚑ **Not marked `[var:]`** — the sentence is *legitur* paraphrase, not a
scripture lemma, and the allegory is built on the one cubit (*unum cubitum unum Dominum
colere*), so the number is load-bearing for this author rather than a slip.

**0864A–B (0001)** — *(deletum est verbum [0864B] unum forte vero,)* — the editor's own
parenthetical note about a deletion in his copy, printed inside the body text and with a
column anchor falling inside it. Translated as prose in place (it is a sentence that says
something; a Latin-only rendering would strand an English reader), parentheses kept,
the conjectured word *vero* kept in italic Latin, anchor kept in position.

**0864B (0001)** — *factus ex Spiritu **Spirius** ( sic )*. Migne prints his own `( sic )`;
per Pattern 12 it is reproduced verbatim and **no `[sic: …]` is stacked on it**. *Spirius*
carried untranslated in italics.

**0864B (0001)** — *antequam fuissent **in qua habitatione***. Does not construe;
*in qua* stands where *in una* is required. Rendered as closely as the words allow
("before they had been in whatever dwelling"); no emendation in the text.

**0865A (0001)** — *donec **pronum quam** [ *Forte,* priusquam] dicitur primogenitus.*
Migne's own bracketed conjecture stands beside his broken run. Per Pattern 19 and Pattern
12, his conjecture is reproduced verbatim untranslated and **ours is not added**; the run
*pronum quam* is carried in italics without a `[sic:]`, because the reader already meets
Migne's answer to it on the same line.

**0865B (0001)** — *Non habemus regem nisi **Cae sarem***. A word split across what would
be a line break. **[cc?]** — this is the named Corpus Corporum corruption shape, so the
English renders "Caesar" and the split is logged rather than marked. If the plate carries
the split, this becomes a Pattern 10 `[sic: *Cae sarem*]`.

**0865B (0001)** — *Item stellam ei, et non coeli et terrae, **necnon** eorum fuit, sed
Filii Dei*, and again at 0865C *sive timuerunt omnes, **nec non** illis bene esse*. In
both places *necnon* ("and also") stands where the sense requires a plain *nec*. Per
negation fidelity the negative is carried in the English ("nor was it theirs", "nor was it
well with them") rather than being turned into an affirmative to make the sentence run.

**0865A (0001)** — *mysterium Dei non potest **cognosere** semel.* For *cognoscere*.
Rendered "known". **[cc?]** The *non* is carried.

**0866A (0001)** — *ut **cissent** in quo tempore.* For *scissent*/*scirent*. Rendered
"might know". **[cc?]**

**0866A (0001)** — *cum enim salvatorem in altum duceret, renuit, ipse **non** renuit.*
The plate asserts and denies the same refusal in one clause. Both carried per §7a; no
repair, no marker.

**0867A (0002)** — *Noctem hic, ostendit quod secessit **litterae tenebrae legis***. Three
stacked genitive/nominative forms that do not agree. Rendered "he withdrew, the darkness
of the letter of the law." Martianay's solecism class.

**0867A (0002)** — *primis Moysen et Aaron provocant Christum.* Unconstruable as printed
(*primis* for *primum*; two accusative objects for one verb). Rendered as closely as the
words allow.

**0867B (0002)** — *infantiae nomen **amorum** duorum* for *annorum*. Rendered "years".
**[cc?]**

**0868A (0002)** — *Vestitum Joannis de **camelolis***. For *camelis*, or a late diminutive
*camelulus*. Rendered "of camels". **[cc?]**

**0868A (0002)** — *qui litteram legis uti locustae **flos***. Nominative *flos* where an
accusative object is required. Rendered literally ("as locusts the flower").

**0868B (0002)** — *mel **Sylvestrae*** for *silvestre* — gender/declension, Pattern 9,
no English exponent. Rendered "wild honey".

**0868B (0002)** — *matrem suam **synagogem*** for *synagogam*. Rendered "the synagogue".

**0869A (0002)** — *ad te pervenit omnem justitiam et reliqua* (Matt 3:15, *sic decet nos
implere omnem iustitiam*). Case and verb both wrong for the construction. Rendered as
closely as the words allow ("there comes to thee all justice"); no emendation.

**0869D (0002)** — *ut diabolus falleret ejus nativitate.* Active *falleret* where the
sense needs a passive. Rendered "that the devil might be deceived as to his nativity" —
⚠ this is the closest English the printed words allow, and it is flagged here because it
is the shape §7a warns about; if a reader judges it a repair, the literal alternative is
"that the devil might deceive by his nativity", which asserts the opposite.

**0870A (0003)** — *super pinnam templi, id est super murum **archae maceriae***. A chain
of unagreeing genitives. Rendered "the wall of the ark's enclosure."

**0871D (0003)** — *si cut Gedeon* for *sicut*. **[cc?]** Rendered "as".

**0873A (0003)** — *inter hominem et **proximuminter**, hominem et amicum suum.* A fused
run: *proximum inter*. **[cc?]** — a word-fusion at a line break is the named digitization
shape, so the English renders the sense ("between man and neighbour, between man and his
own friend") and Migne's comma is kept where he prints it. If the plate carries the
fusion, this becomes a Pattern 10 `[sic: *proximuminter*]`.

**0873C (0003)** — *id est apostolos et doctores **.** non ponunt sub modio*. A full stop
mid-clause with spaces either side. Preserved exactly (Pattern 8, never delete).

**0875A (0004)** — *manus, id est, **opos** malum abscide* for *opus*. Rendered "work".
**[cc?]**

**0875D (0004)** — *hypocrita dicitur fictus **perciperunt** mercedem suam* (Matt 6:2,
*receperunt*). *Perciperunt* is not a form of *percipio* (*perceperunt*). Rendered "they
have received". **[cc?]**

**0875C (0004)** — *illi qui nos **oper** persequitur* for *opere*. Rendered "by work".
**[cc?]**

**0875C (0004)** — *in pluvia, humida et **grigida*** for *frigida*. Rendered "cold".
**[cc?]**

**0876D (0004)** — *qui divitiis servit, diabolos **eruit***. "He who serves riches draws
out devils" — a real verb in its slot, but it makes the servant of riches the one who
expels demons, which reverses the moral of the sentence. Rendered as printed (Pattern 7);
**declined for a `[cj:]`** because the defect is not a negation or a correlative
(Pattern 18a), and no candidate reading is clearly right (*eruitur*? *servit*?).
Flagged for the plate.

**0877A (0004)** — ⛔ *nisi deponant portam **fides palasticas II**.* The one site in this
batch where nothing can be rendered in place: *palasticas* is not a Latin word and the
surrounding case-forms will not resolve into a construction. `[sic: *palasticas*]` fired;
the rest of the run is rendered word for word ("the gate, faith … II"), and per §7a⁗ the
clause keeps its verb (*deponant*) and both its negatives (*non capent*, *nisi*).
**Class: uncertain.** *palasticas* is a lexical non-word rather than a division defect,
which is why it takes the marker where the [cc?] entries above do not — but it could
still be a CC misreading of, e.g., *plasticas*. The plate read decides it.

## Register notes

- The telegraphic *X: id est Y* chains, the colon-strung asyndeton and the absent finite
  verbs are preserved rather than smoothed, per the work's own Admonitio.
- *id est* is rendered "that is" throughout; *vel*/*sive* opening an alternative construal,
  "or"; *item*, "likewise"; *et reliqua*, "and the rest" — fixed within the work.
- Pattern 17: the work addresses a singular reader (*erue eum et projice abs te*,
  *unge caput tuum*), so **thou** throughout, including inside the lemmata; the plural
  *ut sitis filii patris vestri*, *vos estis sal terrae* takes **you**.
- One em-dash was written and removed on review; the batch now carries none.
