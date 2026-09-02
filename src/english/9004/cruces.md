# Cruces — 9004, Walafrid Strabo (attrib.), *Expositio in quatuor Evangelia* (PL 114, cols 0861A–0916B)

Merged from the four translation stints' files (`cruces-0000`, `-0005`, `-0010`, `-0014`)
after **the whole apparatus had been read at Migne's plate**. The stints' own sections are
preserved below, verbatim and unabridged, because their reasoning is the record of how each
reading was reached. **Where a stint's attribution CLASS disagrees with the plate, the plate
governs, and §0 says so site by site.** Nothing below §0 has been silently altered.

Martianay's own *Admonitio* (chunk 0000) warns that the text is "teeming with barbarisms and
solecisms" and that he handed it to the printers "with almost all its faults" and deliberately
did **not** correct it. Everything here is read against that declaration: an ungrammatical
construction in this work is the *expected* state of the text, not by itself a plate defect.

---

## §0. THE PLATE READ — what it settled, and what it overturned

**Source.** On-disk PL 114 scan `raw/scans/pl114/patrologiaecurs06saingoog.pdf`, 200 dpi full
page width (one 400 dpi crop at 0897C where a word division was at stake). Page map
**PDF page = (column + 11) / 2**, calibrated against the printed corner numbers at p.436
(861/862) *before* the first read and re-confirmed on every page. **25 pages / 36 columns**,
recorded in `data/plate-reads.json`.

### The result: 73 markers read, 65 confirmed, 8 withdrawn

| class | fired | confirmed as Migne's | withdrawn as ours |
|---|---|---|---|
| `[var: …]` — a quoted clause | 46 | **46** | **0** |
| `[sic: …]` — a single word | 27 | 19 | **8** |

**The split is entirely by marker class, and every withdrawal is a single broken WORD.
Not one quoted clause was ours.** This is the 11535/11550 asymmetry reproduced on a third
work and at full strength: *suspicion of a word is suspicion of our file; suspicion of a
clause is evidence about Migne.*

### ⭐⭐⭐ AND THE HARD FINDING: THE STINTS' OWN ATTRIBUTION GUESSES WERE WRONG TWO TIMES IN THREE

Stints 3 and 4 classed fourteen readings as probably **our-file**. The plate agreed with
**five** and refuted **nine**:

| the stint's guess was RIGHT (withdrawn — ours) | the stint's guess was WRONG (confirmed — Migne's) |
|---|---|
| 0899C *malta* · 0903C *an fora* · 0906B *ine* · 0908C *Abranam* · 0912A *mimicos* | 0893A *Fretus alabastrum* · 0897C *prava indirecta* · 0898B *caudes* · 0901D *Aprima* · 0903B *arbae* · 0907B *divitatem* · 0912D *primum* · 0913A *istis* · 0913D *fagulis* |

⛔ **And the three withdrawals in stint 2's range — 0879D *synanoga*, 0885B *Eccelsiae*,
0889C *Judaeroum* — were fired by the one stint that made no attribution claim at all.**
So across the work the guesses and the truth are close to uncorrelated.

⚑ **What failed is identifiable, and it is the corpus-as-control argument.** Every wrong
guess rested on internal evidence of exactly the kind that reads as decisive: *"the correct
form prints eleven words later in the same sentence"* (0899C — which happened to be right),
*"a non-word, and the sentence is an etymology of the very word"* (0898B), *"a contracted or
truncated* arbores*"* (0903B), *"a stray initial capital fused to the adjective"* (0901D),
*"a fusion at a line break"* (0897C). These are the same moves `reference_plate-read-triage`
already rules out — **frequency and internal corroboration prove that an error EXISTS, never
whose it is** — and this work puts a number on the cost of forgetting it: **9 of 14.**

⚑ **A fused word is NOT automatically our artifact.** 0897C is the worked case: Luke 3:5
prints *et erunt prava indirecta*, and the stint classed the fusion as ours on the strength of
its being a fusion. Read again at 400 dpi, **the plate genuinely sets it fused**, with normal
word spacing either side (compare *aspera in vias planas* two lines below). The marker was
right; only the class was wrong.

### Corrections applied to the text as a result

- **8 `[sic: …]` withdrawn**, the Latin repaired in `data/tei-patches/9004.json`, and the
  English re-rendered with the plain word: 0879D *synanoga*→*synagoga* · 0885B
  *Eccelsiae*→*Ecclesiae* · 0889C *Judaeroum*→*Judaeorum* · 0899C *malta*→*multa* · 0903C
  *an fora*→*anfora* · 0906B *ine*→*me* · 0908C *Abranam*→*Abraham* · 0912A
  *mimicos*→*inimicos*. The work was re-chunked with the patches and **no chunk boundary
  moved**.
- ⚑ **Two of those eight are the same letter-pair in OPPOSITE directions inside one work** —
  0906B (*m* read as `in`) and 0912A (`in` fused to *m*). That mirror is itself evidence the
  shape belongs to the transcription and not to the compositor, and it is the same argument
  the 11550 *eum/cum* pair made.
- **2 `[var: …]` ADDED**, both divergences a stint had logged unmarked precisely because it
  wanted the plate first, and both confirmed as Migne's: **0879B *lignum fumigans*** for the
  Vulgate's *linum* ("smoking flax") and **0885A *spe circumdedit*** for *sepem* — where, as
  the stint predicted, the gloss "the guard of angels" fits a hedge and not a hope.

### Two things the plate confirmed that were NOT defects of ours

- **0891B, the Pattern 7a site.** The plate really does print *ut ait Propheta frater non
  redemit, id est Moyses per legem redemit* — the gloss denying what its own lemma asserts,
  in a passage arguing that no one before Christ could redeem. Carried as printed; the
  conjecture (a dropped *non*) stays in the apparatus and out of the translation.
- **0890B, the printed lacuna.** Migne himself sets *in pristino.. . . . .* with the dots.
  Correctly left unmarked: nothing was lost by the digitization, so no `[ed: …]`.

### ⚠ And one thing the plate ADDED to what we know about Migne's apparatus

**0865A prints an inline bracketed conjecture — *[ Forte, priusquam]* — and our TEI carries
it.** The standing finding (CLAUDE.md) is that Corpus Corporum contains none of Migne's
foot-of-page *Forte* notes, measured at zero across all 5,276 files. That remains true of the
**foot-of-page layer**; it is not true of a conjecture Migne sets **inline in the running
text**. A `Forte` grep over the TEI is therefore not a guaranteed zero, and this work is the
counter-example.

---

## §00. WORK-WIDE CONVENTIONS — reconciled at the merge

Four stints translated this work and **diverged on three load-bearing words**. The drift was
measured across all 18 chunks and reconciled in the direction recorded here. A later sweep
should not churn these.

| | stint 0000–0004 | stint 0005–0009 | stint 0010–0013 | stint 0014–0017 | **settled as** |
|---|---|---|---|---|---|
| *gentes* | Gentiles 5 / nations 4 | gentiles 53 | Gentiles 29 | nations 21 | **gentiles** |
| *ostendit* | shows | shows | shows | **showeth** | **shows** |
| *significat* | signifies | signifies | signifies | **signifieth** | **signifies** |

**1. *gentes* → "the gentiles", lowercase, in the commentator's voice.** This work's whole
argument is the *Judaei* / *gentes* typology, so three different English words for one Latin
word would show a reader three categories where Migne has one — the 11551 *epistylium* failure
in a milder form. **The corpus offered no convention to inherit** (8945 leans *nations*, 8996
and 9003 lean *Gentiles*), so it is settled here for this work. ⚑ **Checked first: there is no
*natio* anywhere in this work** — every "nations" was rendering *gentes* — so the flattening
erases no distinction. **112 gloss-side sites normalized; the one lemma-side site kept its
traditional wording** (*In thy seed shall all nations be blessed*, Gen 22:18 at 0863B), under
the scripture-echo licence, which covers quoted words and stops where the quotation stops.

**2. The commentary's METALANGUAGE takes the plain present, not the *-eth* form.** Stint 4
archaized the commentator's own voice throughout (168 gloss-side *-eth* forms against 4 inside
lemmata), which `translation-style.md` forbids: the echo licence "never licenses archaism in
the author's own voice." **88 sites normalized — *showeth*→shows (80), *signifieth*→signifies
(6), *figureth*→figures (2)** — these three being the verbs by which Walafrid speaks *about*
the text (*ostendit* 87×, *significat* 8×, *figurat* 8× in that stint's Latin), and never
scripture. ⚑ **The other *-eth* forms were deliberately LEFT**: they sit in scripture Walafrid
quotes inside the gloss without italicising it (*he that cleaveth to the Lord*, 1 Cor 6:17 at
0905D), where the echo licence does apply. The test applied was italic membership, because it
is checkable against the committed Latin twin rather than a matter of taste.

**3. Register, agreed by all four stints and kept.** Walafrid's gloss is telegraphic —
`X: id est Y`, chained with colons, frequently without a finite verb. The colon-chains,
the asyndeton, and *id est* → "that is" are preserved rather than smoothed into flowing
English prose. The terseness is the text.

---

## §0000. STINT chunks 0000–0004 (cols 0861A–0877A), Matthew opens

*Preserved verbatim from `cruces-0000.md`. Attribution classes below are the stint's own judgement at the time of translation; where §0 records a plate verdict, the plate governs.*


Walafrid Strabo (attrib.), *Expositio in quatuor Evangelia*, PL 114. Martianay's own
Admonitio (chunk 0000) warns that the text is "teeming with barbarisms and solecisms"
and that he handed it to the printers "with almost all its faults" and deliberately did
NOT correct it. Everything below is read against that declaration: an ungrammatical
construction here is the *expected* state of the text, not a plate defect.

### Standing policy for this batch — attribution of broken readings

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

### Marker tally

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

### Vulgate divergences MARKED `[var: …]`

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

### Vulgate divergences LOGGED, not marked (truncation, order, orthography, conflation)

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

### Broken or unconstruable readings

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

### Register notes

- The telegraphic *X: id est Y* chains, the colon-strung asyndeton and the absent finite
  verbs are preserved rather than smoothed, per the work's own Admonitio.
- *id est* is rendered "that is" throughout; *vel*/*sive* opening an alternative construal,
  "or"; *item*, "likewise"; *et reliqua*, "and the rest" — fixed within the work.
- Pattern 17: the work addresses a singular reader (*erue eum et projice abs te*,
  *unge caput tuum*), so **thou** throughout, including inside the lemmata; the plural
  *ut sitis filii patris vestri*, *vos estis sal terrae* takes **you**.
- One em-dash was written and removed on review; the batch now carries none.

## §0005. STINT chunks 0005–0009 (cols 0877B–0892B), Matthew closes, Mark opens

*Preserved verbatim from `cruces-0005.md`. Attribution classes below are the stint's own judgement at the time of translation; where §0 records a plate verdict, the plate governs.*


PL 114, cols 0877B–0892B. Chunks 0005–0007 close the Matthew section, 0008 is the
242-word tail of Matthew, 0009 opens `IN EVANGELIUM MARCI`.

⚠ **General caution for this work.** Martianay's *Admonitio* warns that the Latin is
full of barbarisms and solecisms deliberately left uncorrected. Case, number and
gender routinely fail to agree (*messes multa*, *hoc sunt prophetas*, *clamidem
coccineo*, *doctrinam paternarum*, *duobus tunicis*). These are rendered as printed
and are **not** logged individually below except where the sense is at stake — under
Pattern 9 they carry no English exponent and are not defects to mark.

⚠ **Marker-attribution classes.** Per CLAUDE.md 8a, our Latin is Corpus Corporum, not
Migne's plate. Every `[sic:]` and `[var:]` below carries a class judgment:
**(A)** likely Migne's own type/text; **(B)** likely a Corpus Corporum digitization
artifact (letter swap, metathesis, split/fused run). **No column in this range has
been plate-read**; `plate-gate.mjs` must clear all of them before the work ships.

---

### `[sic: …]` markers fired — carried non-word type

| col | reading | conjecture | class | note |
|---|---|---|---|---|
| 0879D | *synanoga* | *synagoga* | **B** | single n/g swap in a word the work prints correctly a dozen times elsewhere. Classic OCR class. Carried because the run is not a word and cannot be rendered. |
| 0881A | *anteguis* (in *non cum pecuniis anteguis*) | *antiquis*, "with ancient moneys" | **B** | q→g is a common CC substitution. The negation *non* is outside the marker and stands in the English. |
| 0883A | *cornemium* (in *ostendit cornemium*) | *Cornelium* — Cornelius, the first gentile convert, which is exactly the sense the fish "which first ascends" requires | **A/B, undecided** | too far from any single-letter slip to be a confident B; the word is the object of *ostendit*, and the verb is retained outside the marker per 7a⁗. |
| 0884D | *sustitutionem* | *superstitionem*, "the superstition of the Jews" — the parallel *doctrinam paternarum* beside it supports it | **A/B, undecided** | a syllable is missing, not a letter. |
| 0885A | *es me Barth* | *est Zacharias filius Barachiae* — the prophet stoned (Matt 23:35); *Barth* looks like a remnant of *Barachiae*, and *Stephanus* follows as the alternative | **A** | a **whole broken run**, not one word, and Pattern 10 requires it carried entire. 7a⁗ applies: the run swallowed the clause's only copula, so **"is" is supplied in plain words beside the marker**. |
| 0885B | *Eccelsiae* | *Ecclesiae* | **B** | pure metathesis of a word printed correctly throughout the work. |
| 0889C | *Judaeroum* | *Judaeorum* | **B** | pure metathesis; same class as *Eccelsiae*. |
| 0890A | *simulares* | *simulatores*, "dissemblers/hypocrites" | **A/B** | *simulares* is a formally possible verb (2 sg. impf. subj.) but has **no grammatical slot** in a nominative-plural position governed by *qui … quaerunt* — Pattern 12's test (1). |
| 0890A | *transierum* (in *vetera transierum et ecce facta sunt nova*, 2 Cor 5:17) | *transierunt* | **B** | dropped *nt*. 7a⁗: the run was the clause's only verb, so **"passed" is supplied beside the marker**. Note Migne also prints *et* where the Vulgate has asyndeton; that addition is left unmarked. |
| 0890D | *restitus* (in *restitus est*) | *restitutus est*, "he was restored" | **B** | haplography of *tu*. 7a⁗: predicate quarantined, so **"restored" is supplied beside the marker**. |

### `[d: …]` — dittography

**0888A–B.** Migne prints the gloss on the scarlet cloak twice, with variation:

> *induit* [0888B] *clamidem coccineo, id est Christum indutum fide gentium.*
> **Induitur** *clamidem coccineo, id est Christum indutum fide gentium* **aliter** *per
> coccineum clamidem, ostendit effusionem sanguinis…*

**The SECOND copy is marked** — and per Pattern 11a the reason has to be stated,
because the two copies differ (*induit* / *Induitur*):

1. The first copy's *induit* is **active**, matching the active *exuerunt Christum*
   that governs the whole sequence; the second's *Induitur* is passive and agrees with
   nothing before it.
2. Deleting the second copy leaves *…induit clamidem coccineo, id est Christum indutum
   fide gentium. Aliter per coccineum clamidem, ostendit…* — a first gloss closed by a
   full stop and an *aliter* introducing the alternative, which is this work's standard
   shape. Deleting the first would strand the column anchor [0888B] inside the deleted
   run.

Class: **A/B undecided.** An eye-skip at a column break is as plausible in a
compositor as in a transcriber; the [0888B] anchor falling inside the doubled run is
weak evidence for the plate.

---

### Vulgate divergences

### Marked `[var: …]` (whole-clause or whole-word divergence, sense at stake)

| col | Migne prints | Vulgate | why marked |
|---|---|---|---|
| 0877A/B | *Attendite vobis* (Matt 7:15) | *Attendite a falsis prophetis* | the gloss immediately supplies *a falsis doctoribus cavete* — the sense of the Vulgate wording that is **not** on the page. A whole-phrase substitution (possibly conformed to Luke 17:3 / 21:34), not a letter. Class **A**. |
| 0879A | *cantavimus vobis et non saltastis tibias* (Matt 11:17) | *Cecinimus vobis et non saltastis* | two independent divergences: *cantavimus* for *cecinimus*, and an added *tibias*. Both answer to the Greek ηὐλήσαμεν, so this is very likely a **genuine Old Latin reading**, not damage. Class **A**. |
| 0879A | *Confitebor tibi, Domine* (Matt 11:25) | *Confiteor tibi Pater Domine caeli et terrae* | future for present, and *Domine* alone where the Vulgate has *Pater Domine caeli et terrae* — the psalm incipit (Ps. 9:2) has evidently attracted the lemma. The gloss then enumerates four kinds of *confessio*, so the word is load-bearing. Class **A**. |
| 0881C | *tradidi hujusmodi hominem in interitum Satanae* (1 Cor 5:5) | *tradere huiusmodi Satanae in interitum carnis* | *carnis* is gone and *Satanae* has moved into its slot, so the printed text delivers the man to **Satan's** destruction rather than the flesh's. Multi-word transposition. Class **A**. |
| 0885C | *fides sine caritate mortua est* (Jas. 2:26, cited as the Apostle's) | *fides sine operibus mortua est* | **this work itself prints *sine operibus* at col. 0882A** — the two readings stand three columns apart. The gloss on the wedding garment turns on *caritas*, so the substitution is doing argumentative work. Class **A**, and the internal parallel is the strongest evidence in this range that a divergence is Migne's rather than ours. |
| 0886A | *Expandit alas suas et adsumpsit eos super scapulas suas* (Deut. 32:11) | *expandit alas suas et adsumpsit eum atque portavit in umeris suis* | plural *eos* for *eum*, *super scapulas* for *in umeris*, and *portavit* dropped. A whole-clause divergence. Class **A**. |
| 0889D | *quid vultis virga veniam ad vos, an in spiritu mansuetudinis et consolationis* (1 Cor 4:21) | *quid vultis in virga veniam ad vos an in caritate et spiritu mansuetudinis* | *caritate* → *consolationis* and the word moved to the end; the preceding gloss glosses the rod as *consolationem sive disciplinam*, so the divergent word is the one the gloss uses. Class **A**. |

### Logged only — divergence real but single-word, so probably OUR file, not Migne's

Per the standing rule (single broken word ⇒ suspect the digitization; whole clause ⇒
evidence about Migne), none of these got a marker. Each still needs the plate.

- **0877C** *Et omnis qui audit verba mea et non faciet ea* (Matt 7:26) — Vulg. *verba
  mea haec et non facit ea*: future for present, *haec* absent. Rendered "will not do".
- **0877D** *tantum dic verbum, et sanabitur* (Matt 8:8) — Vulg. *tantum dic verbo et
  sanabitur puer meus*.
- **0878B** *reversus in domum suam* (Matt 9:7) — Vulg. *abiit in domum suam*.
- **0878D** *Nihil opertum quod non reveletur* (Matt 10:26) — Vulg. *Nihil enim est
  opertum quod non revelabitur*: subjunctive for future indicative.
- **0879B** *lignum fumigans* (Matt 12:20) — **Vulg. *linum fumigans*, "smoking flax."**
  Rendered "smoking wood". This is the most consequential single-word divergence in the
  range: the printed *lignum* makes the gloss ("the hearts of the gentiles made ready
  for the faith") read against a famous image the plate may or may not carry. *lin* →
  *lign* is one inserted letter and therefore the class the rule says is usually ours.
  ⭐ **Priority plate read.**
- **0880A** *videntes non videant* (Matt 13:13) — Vulg. *non vident*.
- **0880B** *Et facit fructum* (Matt 13:23) — Vulg. *et fructum adfert*.
- **0881C** *tu solus discipulus ejus es?* (John 9:28, of the blind man) — Vulg. *Tu
  discipulus eius sis*; *solus* may be attracted from Luke 24:18.
- **0883D** *difficile dives intravit* (Matt 19:23) — Vulg. *dives difficile intrabit*.
- **0885A** *spe circumdedit* (Matt 21:33) — **Vulg. *sepem circumdedit*, "he set a hedge
  about it."** Rendered "he surrounded it with hope"; the gloss (*id est custodia
  angelorum*, "the guard of angels") fits a hedge, not a hope, so the printed reading is
  probably damaged. One letter; plate needed.
- **0885C** *Nemo militans Deo implicans se* (2 Tim. 2:4) — Vulg. *implicat se*.
- **0886A** *ecce relinquetur domus vestras desertas* (Matt 23:38) — Vulg. *relinquetur
  vobis domus vestra deserta*; number disagreement, no English exponent for the verb.
- **0887A** the five-senses proof texts are all heavily compressed rather than divergent
  (Ps. 118:37; Ecclus. 28:28; 2 Cor. 2:15; Rom. 12:14; Eph. 4:28) — compression is not a
  variant and none is marked.
- **0892A** *consepulti enim sumus cum Christo per baptismum: in morte enim ipsius
  baptizati sumus* — a conflation of Rom. 6:4 and 6:3 (*cum illo*), not a divergence in
  a single text; left unmarked.

---

### Other cruces (no marker)

- **0877D** *vel vidissent quod natus esset a lepra* — "that he had been born from
  leprosy." *natus* will not construe with *a lepra*; *mundatus* or *sanatus* is what the
  sense wants (the healed leper shows himself to the priest). Rendered literally.
- **0878C** *pulvis tribus modis impendit, gressus obligat, oculus obscurat, vestimenta
  inquinat* — *oculus* is **nominative** in a run of accusative objects (*gressus*,
  *vestimenta*). Rendered "the eye darkens", which keeps the printed case; *oculos* is
  the obvious conjecture but supplying it would be a silent repair.
- **0878D** *seu Christus Barabias* — the name printed thus; carried as printed, not
  normalized to *Barabbas*.
- **0880D** *Thetrarcha, id est inita pars regni* — "an entered part of the kingdom."
  A tetrarch rules a **fourth** part; *quarta* is what the etymology requires and *inita*
  is a real word occupying its slot, so Pattern 7 governs and no marker is fired.
- **0884A** *prima hora, id est infantia secunda; hora adolescentia, sexta juventus* —
  Migne's punctuation splits *secunda hora* across a semicolon. Reproduced exactly under
  Pattern 8; the English is correspondingly broken.
- **0884C** *qui baptismum vel quacumque sacrationem* — the verb is elided. The English
  supplies **[sell]** in the corpus's existing supplied-word brackets rather than
  smoothing.
- **0884C** *relectis illis abiit foras* — *relectis* ("re-read") where the sequence wants
  *relictis* ("left behind"), which the very next clause prints (*ostendit relictos
  Judaeos*). A real word in its slot, so rendered literally ("those having been read over
  again") under Pattern 7; the conjecture lives here.
- **0884D** *Mens id est Christus, tollite hinc* — *Mens* ("the mind") where Matt 21:21
  requires *Mons* ("the mountain… be thou taken up and cast into the sea"); the following
  *jactate in mare* proves the mountain is meant. Real word, rendered as printed.
- **0885D** *Mulier* **.** — the plate sets a space before the stop. Reproduced.
- **0886A** *in spiris pinnis, id est sublevatis alis* — "in coiled feathers"; the gloss
  says the wings are **raised**, so *spiris* is doing no work the gloss recognizes.
  Rendered literally.
- **0888C** *consolationem recorrectionis* — "the consolation of re-correction."
  *resurrectionis* is the sense the paragraph (the empty tomb, the first day of the week)
  wants. *recorrectio* is a formable Latin word, so it is rendered, not carried.
- **0889A** *temperantia est omni irae, imponere motum* — "to lay upon all anger, a
  motion." *modum* ("a limit") is plainly intended, and *motum* inverts the definition.
  A real word in its slot: rendered as printed, comma and all, per Patterns 7 and 8.
- **0890B** *invenit eam in pristino.. . . . . corporis sui* — **Migne prints a lacuna
  here**, as a run of spaced points. Reproduced verbatim in the English rather than filled
  or normalized; no `[ed:]`, because nothing has been lost by the digitization — the hole
  is in the text as printed. Plate read wanted to confirm the exact number of points.
- **0891B** ⭐ *ut ait Propheta frater non redemit, id est Moyses per legem redemit.* —
  **The gloss contradicts its own lemma.** Ps. 48:8 (*fratrem non redimit homo*) is quoted
  with its negative, and the exposition then says Moses **did** redeem through the law,
  where the whole surrounding argument is that neither Prophets nor Patriarchs could heal
  the human race *nisi veniens Christus*. The negation is carried in the lemma and **not**
  supplied in the gloss: the printed page contradicts itself and the English says so. A
  dropped *non* in the gloss is the near-certain conjecture. This is the one Pattern 7a
  site in the range where the temptation to repair is strong.
- **0891C** *humiliare se in sacculo per poenitentiam* — "in a sackcloth"; *saeculo* ("in
  the world") is the likelier reading, since the lemma is *mergere in mare* and the gloss
  chain runs through worldly things. Real word in its slot, rendered as printed.
- **0891A** *revocavit illum ad pristinam mundanae naturae* — *pristinam* has no noun.
  Rendered "to the former of his worldly nature", keeping the hole visible.

## §0010. STINT chunks 0010–0013 (cols 0892C–0904D), Mark closes, Luke

*Preserved verbatim from `cruces-0010.md`. Attribution classes below are the stint's own judgement at the time of translation; where §0 records a plate verdict, the plate governs.*


Range: PL 114, cols 0892C–0904D — the close of `IN EVANGELIUM MARCI` (0010) and the
opening two-thirds of `IN EVANGELIUM LUCAE`, whose head falls at col 0893 (0011–0013).

⛔ **Every `[sic: …]` and `[var: …]` below stands on a column NOBODY HAS READ AT THE
PLATE.** Our Latin is Corpus Corporum's transcription, not Migne's page. Each entry
carries an explicit attribution guess — **our-file** (probable CC digitization damage:
a single broken word, a c→e / n→u / m→in confusion, a split or fused run) or **plate**
(a whole quoted clause, well-formed Latin, that diverges as a unit).
`node scripts/plate-gate.mjs 9004` must be satisfied before this work ships.

---

### 1. Register and structural notes (no marker)

- **Heads.** `IN EVANGELIUM MARCI. (cont.)` / `IN EVANGELIUM LUCAE.` /
  `IN EVANGELIUM LUCAE. (cont.)` render as ON THE GOSPEL OF MARK / OF LUKE, with
  `(cont.)` carried untranslated (it is our chunk marker, merged at assembly).
- **0011 opens biographically, not with a gloss.** Cols 0893D–0895A give Luke's
  origin (a Syrian of Antioch), his profession, his death at 83 in Bithynia, his
  burial at Constantinople, and the four Evangelists' four audiences. Rendered as
  the prologue it is; the head structure is exactly the Latin's.
- **The chunk-0011 anchor run `[0893]` then `[0893D]`** is the plate's own
  (the Luke division head carries a bare column number before the lettered band).
  `[0893D]` is set flush against *Lucas* with no space; reproduced the same way.
  Not a defect — known false-positive class 1.
- **The work's Latin is barbarous by its own editor's admission** (Martianay's
  *Admonitio* leaves the solecisms uncorrected), and this range is thick with them.
  Rendered as they stand, not itemized individually, none marked:
  accusative for ablative after *in* (*Agnum immolatum in Aegyptum* 0893B,
  *in monte orare* 0898B, *in praedicationem audire* 0904C); loss of final -m
  (*in pala* for *in palam*, 0901B; *in civitate* 0895C); b/v interchange
  (*acerva* for *acerba* 0894A, *portabit* for *portavit* 0897A); d/t finals
  (*reliquid* ×2, 0894A); ch→c (*caus* for *chaos*, 0902A); gender/case mismatch
  with no English exponent (*sterilis … maledictus* 0895A, *majore gaudium* 0902A,
  *Barrabam filius* 0904A, *duas leges* after *id sunt* 0903C, *novem servis*
  0903A); *y*/*i* and *ph* spellings (*sabbatho*, *simphonias*, *Nichodimus*,
  *Bithinia*, *hiericho*, *Mathaeo*, *sylva*, *syndone*/*sindone* in one sentence).
- **Aphesis is this text's habit, not a defect** (Pattern 9): *nagoga* for
  *synagoga* (0898A) and *postolos* for *apostolos* (0901D) are the same
  vulgar-Latin loss of an unstressed initial syllable. Translated normally as
  "the synagogue" and "the apostles". ⚠ If the plate reads *synagoga* / *apostolos*
  in either place, these are CC losses and belong in a patch file, not here.
- **Printed punctuation carried where it breaks the sense** (Pattern 8, never
  supply, never delete): the full stop inside *aptum fuit ut in tempore officii.
  Patris Domini ceptus esse* (0895A); the missing stop at *praedica baptismum
  Vallis implebitur* (0897C) and at *regnante cum patre justificata est sapientia*
  (0899A), both carried unpunctuated; the colon splitting *homo qui divitias: et
  paupertatem non sustinet* (0898A), rendered "the man who riches: and poverty does
  not bear" so the mark keeps its place; the spaced ellipsis *si gentiles . . . ut
  equus molens* (0902B), carried verbatim; and the chunk-0013 ending, which stops
  after *dimisit* with no terminal mark and does so in the English too.
- **Direct questions keep their marks** (0896A *cur non dixit Johannis erit?*,
  0899A *quis est qui peccata dimittit?*, 0904C *nunc eos congregat in unam pacem?
  quare non uno loco surrexit et ascendit?*). None is an indirect question, so 8b
  does not fire anywhere in this range.
- **Fixed equivalences within this range** (merge-time reconciliation): *theorica*
  and *contemplativa* both = "contemplative"; *actualis* and *activa* both =
  "active"; *doctores* = "teachers"; *stabularius* = "innkeeper"; *mna* = "mina".
  ⚑ The Latin carries *two* synonym pairs for the contemplative/active distinction
  (theorica/actualis at 0898B, 0899B, 0904C; contemplativa/activa at 0900B); English
  has one exponent for each side and the doublet is recorded here rather than
  invented in the prose.
- **Etymological glosses keep the Latin word visible** where the gloss *is* the
  etymology: *quadrans* (0892C, "which is a *quadrans*, through which he
  understands the man who squares"), and *sylva missus dicitur* (0900D), which is
  the Siloam etymology of Jn 9:7 (*Siloe, quod interpretatur Missus*) attached to
  Lk 13:4's tower — *sylva* is a real word carrying a name, so it is kept as a
  mention rather than rendered "a wood".

---

### 2. Defect markers fired — `[sic: …]`

Seven, all on runs that cannot be rendered at all: either non-words, or a real word
with no grammatical slot (Pattern 12's test 1). Every one of them is a *single broken
word* or a *split of one word*, which is the class the standing warning says is
usually **our file** — the attributions below say so, and none of them is offered as
a finding about Migne until the plate is read.

| col | printed | rendering | probable reading | class |
|---|---|---|---|---|
| 0893A | *Fretus alabastrum* | `[sic: *Fretus alabastrum*]:` opening the lemma | *Fracto alabastro* (Mk 14:3) | **uncertain, leaning our-file.** *Fretus* is a real adjective, but nominative masculine against accusative neuter *alabastrum* with no verb: no slot, so it cannot be rendered in place. The whole run is carried per Pattern 10 because the defect is the pair, not either word. 7a⁗ check: the gloss that follows (*significat corpus Christi vulneratum in cruce*) supplies the sense, and no verb, negation or conjunction is inside the quarantine. |
| 0898B | *caudes* | "the four cardinal virtues are contained in them: [sic: *caudes*], in Latin it is said, of the heart" | a Greek or Latin heart-word answering *cordis* — *cardis* / *cardines* | **our-file**, probable. Non-word; the sentence is an etymology of *cardinales* and the printed run is the very word being etymologized. |
| 0899C | *malta* | "the Son of man must suffer [sic: *malta*], that is, to die" | *multa* | **our-file**, near-certain: a→u, and *multa pati* prints correctly **eleven words later in the same sentence** (*excessus ejus multa pati sequenti die*). ⚠ Frequency proves an error exists here, never whose it is — the plate still decides. 7a⁗ check: the clause keeps its verb ("must suffer") and its modal; only the quantifier is quarantined. |
| 0901D | *Aprima* | "the robe [sic: *Aprima*], the faith which Adam lost" | *prima* (Lk 15:22 *stolam primam*) | **our-file**, probable: a stray initial capital fused to the adjective. |
| 0903B | *arbae* | "the fig tree and [sic: *arbae*], that is, the synagogue and men" | *arbores* (Lk 21:29 *ficulneam et omnes arbores*) | **our-file**, probable: a contracted or truncated *arbores*. |
| 0903C | *an fora* | "*A man [sic: an fora] of water bearing,*" | *amphoram* (Lk 22:10 *homo amphoram aquae portans*) | **our-file**, probable: a word split at a line break into two real words. Carried whole per Pattern 10 (*an* stays inside the run); no second italic marker, since the run sits inside an italic lemma. ⚑ The parallel lemma at Mk 14:13 in chunk 0010 prints *languenam* (for *lagoenam*) unbroken, so the two Gospels' versions of the same verse diverge in our file at exactly this word. |
| 0904A | *densi seduna* | "Leviathan [sic: *densi seduna*] Barabbas is called the son of the devil" | undetermined; *seduna* is not a word and *densi* has no construction | **uncertain.** The likeliest guess is a mangled Hebrew-name gloss on *Leviathan*, but nothing in our file supports a specific reading, so none is offered. ⚠ Highest-priority plate read in this range. |

**Declined `[sic:]` — non-words and fusions I judged to be our file and rendered
rather than marked** (each is a *silent* treatment only in the sense that Pattern 9
covers it; they are all listed here so a plate reader can overturn them):

- **0898C *praeceditmortem*** — a fused *praecedit mortem*. Rendered "precedes
  death". Word fusion at a line break is the named CC class; marking it would put a
  plate accusation on the likeliest digitization artifact in the range.
- **0892B *non sciebat vas transferre per templum*** — Mk 11:16 has *non sinebat ut
  quisquam vas transferret*. *sciebat*/*sinebat* is a c/n confusion, the other named
  CC class. Rendered literally, "did not know how to carry a vessel through the
  temple", which is what the printed words say and is visibly odd.
- **0898C *tangitur locus a Deo*** — Lk 7:14 *tetigit loculum*. Rendered "the place
  is touched by God", not "the bier": reading *loculum* here would be exactly the
  silent repair 7a forbids, and *locus* renders in place.
- **0904B *aucurrebat*** — beside *cucurrisset* in the same clause; taken as a
  spelling of *accurrebat* and rendered "ran".
- **0896B *adsuerunt*** — rendered "had become accustomed" (*adsueverunt*).
- **0896B *a tabernaculo meritoria*** — the Roman *taberna meritoria* whose fountain
  of oil is the standard Nativity portent. Rendered "from the hired lodging"; the
  gender mismatch has no English exponent (Pattern 9).
- **0893B *amplectitudo*** — not classical, but a transparent formation on
  *amplector*. Rendered "the embracing-breadth", keeping the printed active
  *ostendit* ("shows", not "is shown") against the passive *ostenditur* one clause
  earlier.
- **0898B *lenes*** — *istae quatuor lenes*. A real adjective with no noun; rendered
  literally "these four gentle ones". No conjecture is offered because none is
  supported.

---

### 3. Vulgate divergences — the collation, lemma by lemma

Every italicised Gospel lemma in the four chunks was listed and collated word by word
against the Vulgate before translating. **Five divergences were judged material and
took a `[var: …]`; the rest are recorded here and took none.** Migne's wording is
rendered in every case.

### Marked (5)

| col | Migne prints | Vulgate | why it fired |
|---|---|---|---|
| 0892C | *Vidua misit **duos nummos**, quod est quadrans* | Mk 12:42 *misit **duo minuta** quod est quadrans* | A different lexeme, not a letter: "two coins" for "two mites". Both readings keep *quadrans*, on which the gloss turns, so nothing is at stake for the argument — but the substitution is a whole word in a well-formed clause. **Class: plate**, most likely a loose lemma rather than damage. |
| 0893C | ***Videbunt** filium hominis sedentem a dextris virtutis* | Mk 14:62 ***videbitis*** | ⭐ **The load-bearing one.** Migne's third-person plural is what the gloss expounds: *ostendit quia vidit illum Stephanus: vidit et Saulus … viderunt et alii plures*. The Vulgate's second person would make the whole gloss a non sequitur. Conforming this lemma to the familiar verse is precisely the 7a″ failure. **Class: plate**, near-certain — the gloss is the internal witness. |
| 0893D | *spinae et tribuli **germinentur** tibi* | Gen 3:18 *spinas et tribulos **germinabit** tibi* | Nominative subject with a passive/deponent subjunctive against the Vulgate's accusative object with an active future: a whole-clause reconstruction, not a letter, introduced by a citation formula (*unde dictum est Adae*). **Class: plate** (a whole quoted clause diverging as a unit). |
| 0897C | *et erunt prava **indirecta*** | Lk 3:5 *et erunt prava **in directa*** | The fusion inverts the verse: "the crooked shall be **indirect**" instead of "the crooked **into straight**" — and Migne's own gloss on the next words (*id est qui fuit luxuriosus, sit castus*) requires the straightening. Rendered as printed; the `[var:]` carries the received reading. Pattern 18 was considered and declined: the divergence sits **inside quoted scripture**, which 18a routes to Pattern 14. **Class: our-file**, probable (a fusion), but the marker states a reading, not an accusation of the type. |
| 0898A | ***tota die** laborantes nihil coepimus* | Lk 5:5 *per totam **noctem** laborantes nihil cepimus* | Day for night, in a lemma whose whole point in Luke is the fruitless night. Two words changed, well-formed. **Class: plate.** |

### Collated and NOT marked (the full list)

*Lemma abbreviation is this commentator's normal practice, so a dropped connective or
a truncated opening is not a divergence in the Pattern 14 sense; those are listed
anyway so the collation is complete rather than selective.*

- **0892B Mk 11:13** *Non erat tempus ficorum* — Vulg. *non **enim** erat*. Dropped
  connective.
- **0892D Mk 13:32** *De die et hora nemo scit* — Vulg. *De die **autem illo vel**
  hora*. Lemma compression.
- **0893A Mk 13:34** *Homo peregre profectus est* — Vulg. *Sicut homo **qui** peregre
  profectus*. Lemma compression.
- **0893B Mk 14:13** *Homo **languenam** aquae bajulans* — Vulg. *lagoenam*.
  Orthographic; the gloss (*languena baptismum Trinitatis significat*) uses the same
  form, so it is the text's own spelling. Pattern 9.
- **0894B Mk 15:46 / Mt 27:60** *Monumentum **scissum*** — Vulg. *monumento quod erat
  **excisum** de petra*. One prefix; single-word suspicion, declined.
- **0894C Mk 16:9** *Maria, de qua ejecerat septem daemonia* — Vulg. *Mariae
  **Magdalenae***. Case + abbreviation; the name is supplied in the 0899A gloss.
- **0894D Mk 16:17–18** *linguis novis loquentur* (Vulg. *linguis loquentur novis*,
  order); *si mortiferum biberint* (Vulg. *si mortiferum **quid** biberint*); *super
  **aegros** manus* (Vulg. *aegrotos*). All minor.
- **0894A Mk 15:34** *eli eli lemasabactani, quod est Deus Deus meus quare me
  dereliquisti* — Vulg. Mk *Heloi Heloi lama sabacthani … Deus meus Deus meus ut quid
  dereliquisti me*. Migne's transliteration is Matthew's (*Heli*) with the Aramaic
  fused into one token, and the rendering follows an Old Latin *quare*. Not marked:
  the transliterated form is a name-shape, and the gloss turns on none of it.
- **0895A Lk 1:5** *Fuit in diebus Herodis* — matches.
- **0895A Lk 1:11** *ad dextris altaris* and **0903C Lk 22:69** *sedens **ad**
  dextris virtutis* — Vulg. *a dextris* both times, and Lk 22:69 also has *Dei*.
  *ad* + ablative is this text's habit (twice, in two Gospels), so Pattern 9.
- **0895B Lk 1:7** *Non erat illis filius* — matches. But the following gloss prints
  *ambo **perseverant** in diebus suis* against Vulg. *ambo processissent*; rendered
  "persevere", present tense as printed.
- **0895B Lk 1:13** *exaudita est **oratio** tua* — Vulg. *deprecatio*.
- **0895C Lk 1:25** ***Auferte** obprobrium meum* — Vulg. *ut **auferret** obprobrium
  meum inter homines*. An imperative plural for a purpose clause; the gloss keeps
  *inter homines*, so the lemma is Luke's. Single-word inflection, declined, but this
  is the nearest miss in the range — **if the plate reads *Aufer* or *auferret*, this
  is a CC corruption and should be recorded as one.**
- **0895D Lk 1:35** *Spiritus sanctus **venit** in te* (Vulg. *superveniet*) and
  *Virtus altissimi **obumbravit** tibi* (Vulg. *obumbrabit*). Both past for future,
  and the glosses exploit the past (*abscondit te in Aegypto fugiendo*), so the
  English follows Migne. Declined as single-word inflections; **worth a plate read**,
  since two tense shifts in one verse could be one compositor.
- **0895D Lk 1:39** *Abiit in **montem*** — Vulg. *in montana*.
- **0896A Lk 1:41** *in utero **matris** ejus* — Vulg. *in utero eius*.
- **0896A Lk 1:68** *benedictus Dominus **noster*** — Vulg. *Dominus Deus Israhel*.
- **0897A Lk 11:27** *beatus **ille** venter qui te **portabit*** — Vulg. *beatus
  venter qui te portavit*. *portabit* is the b/v spelling; *ille* is an addition.
- **0897A Lk 2:35** *pertranseat gladius* — Vulg. *pertransiet*.
- **0897B Lk 2:51** *et erat illis subditus* — matches (italic in Migne, kept italic).
- **0897C Lk 3:2** *factum est verbum **Domini** super Johannem* — Vulg. *verbum Dei*.
- **0897C Lk 3:5** *Montes et colles humiliabuntur* — Vulg. *omnis mons et collis
  humiliabitur*; number. Same verse as the marked *prava indirecta*.
- **0897D Lk 4:18** *et captivis **redemptionem*** — Vulg. *remissionem*; and
  *dimitte confractos* for the Vulgate's infinitive *dimittere*.
- **0897D Lk 4:21** *hodie impleta est scriptura* — Vulg. *haec scriptura*.
- **0898A Lk 5:7** *Impleverunt ambas **naves*** — Vulg. *naviculas*.
- **0898A Lk 5:8** *exi a me, Domine, quia peccator sum* — Vulg. *exi a me quia homo
  peccator sum Domine*; order, and *homo* dropped.
- **0898C Lk 7:11** *civitatem quod dicitur **Naum*** — Vulg. *quae vocatur Naim*.
- **0898B Lk 6:23** *mercis vestra multa est **in gloria*** — Vulg. *merces vestra
  multa est **in caelo***; and *faciebant patres eorum **Prophetas*** for Vulg.
  *faciebant **prophetis** patres eorum*.
- **0898C Lk 6:26** *Vae vobis cum benedixerint homines* — Vulg. *vae cum bene vobis
  dixerint omnes homines*.
- **0899C Lk 8:44** ***Tangit** fimbriam* — Vulg. *tetigit*; tense.
- **0899C Lk 9:13** *Vos date illis manducare* — Vulg. *date illis vos manducare*;
  order.
- **0900C Lk 11:41** *date eleemosynam et omnia munda sunt* — Vulg. *quod superest
  date elemosynam et ecce omnia munda sunt vobis*. The clause that follows in Migne
  (*et si non dederitis immunda sunt omnia quae habetis*) is **not scripture at all**
  but the commentator's own contrary, so no `[var:]` attaches to it.
- **0900C Lk 12:32** ***Noli** timere pusillus grex* — Vulg. *Nolite timere*. A
  singular imperative for a plural. Rendered "Fear not", where English shows no
  number; declined as a single-word inflection, and Pattern 17 is not engaged because
  an English imperative carries no second-person pronoun.
- **0900B Lk 10:35** *quodcumque **super erogaveris*** — Vulg. *supererogaveris*. A
  split that happens to render exactly ("whatsoever thou shalt have spent over and
  above"), so no marker and no loss.
- **0901A Ps 79:9** *vinea de Aegypto transtulisti* — Vulg. *vineam de Aegypto
  transtulisti*; final -m.
- **0902A Lk 16:26** *caus magnum* — Vulg. *chaos magnum*; treated as the ch→c
  spelling, rendered "a great chaos".
- **0903B Lk 21:18** *Capillus de capite non peribit* — Vulg. *de capite **vestro***.
  Rendered without a possessive, since none is printed.
- **0904D Mt 5:44** *orate pro persequentibus* — Vulg. *orate pro persequentibus
  **et calumniantibus vos***. The chunk ends mid-clause at *dimisit*; nothing is
  supplied.
- **0892C Mk 11:24 / Mt 21:22** *quaecumque petieritis, credentes in oratione, fiet
  vobis* — a conflation of the two Gospels' forms; **0892D Rom 8:26** *nescimus quid
  petamus, nisi Christum qui interpellat pro nobis* — paraphrase with the
  commentator's own *nisi Christum* inside it; **0893C Heb 9:13** *sanguis hircorum
  et taurorum* — order reversed. Inline, loose, none marked.

---

### 4. Dittography — `[d: …]` ×2, both in chunk 0011

| col | printed | marked copy | why |
|---|---|---|---|
| 0896A | *cornu nec caro est nec ossus: sic et Christus **nec caro nec caro** est* | the **second** | The two copies are identical, so Pattern 11's position rule applies unchanged: wrap the second. The parallel clause immediately before (*nec caro est nec ossus*) shows what the second member should have been, but nothing is supplied — the crux carries the observation and the page carries the doubling. **Class: uncertain.** An eye-skip is as easy for a compositor as for a transcriber. |
| 0896C | *pastores loquebantur, **aptum fuit ut pastores loquebantur,** aptum fuit ut pastores testimonium darent* | the **FIRST** | ⭐ **Pattern 11a case: the copies differ, so position decides nothing.** The first copy's tail (*pastores loquebantur*) duplicates the lemma **immediately before it**, which is the eye-skip's source; the second copy (*aptum fuit ut pastores testimonium darent*) is the gloss the passage is actually making, and it is completed by *de vero agno*. Marking "the repeated occurrence" mechanically would have quarantined the real gloss and left the page saying it was fitting that the shepherds spoke, twice, and testified never. **Class: uncertain**, same as above. |

---

### 5. Open, and what would settle it

1. **Plate read, cols 0892C–0904D**, for all seven `[sic:]` and all five `[var:]`.
   Priority order: 0904A *densi seduna* (no conjecture at all), 0893A *Fretus
   alabastrum*, 0893C *Videbunt* (the one whose divergence the gloss depends on, so
   confirming it at the plate converts the range's most valuable finding from
   probable to certain), 0898B *caudes*, 0897C *prava indirecta*.
2. **Migne's foot-of-page apparatus.** Per `data/plate-notes/coverage.json` this work
   owes at least a spot check; PL 114's verified map is **PDF page = (column + 11) /
   2** for `patrologiaecurs06saingoog`, recalibrated 2026-08-19. Several declines
   above (*caudes*, *densi seduna*, *lenes*) are exactly the shape Migne answers with
   a *Forte* note, and we cannot see that layer.
3. **The 0895D tense pair** (*venit*/*obumbravit* for *superveniet*/*obumbrabit* in
   one verse of Lk 1:35) is the one declined divergence I would most expect a plate
   read to promote to a `[var:]`.

## §0014. STINT chunks 0014–0017 (cols 0903–0916B), John and the Capitulatio

*Preserved verbatim from `cruces-0014.md`. Attribution classes below are the stint's own judgement at the time of translation; where §0 records a plate verdict, the plate governs.*


Range: PL 114, cols 0903–0916B — the John section (`IN EVANGELIUM JOANNIS`) and the
closing `INCIPIT CAPITULATIO` to the end of the work.

⛔ **Every `[sic: …]` and `[var: …]` below stands on a column NOBODY HAS READ AT THE
PLATE.** Our Latin is Corpus Corporum's transcription, not Migne's page. Each entry
below carries an explicit attribution guess — **our-file** (probable CC digitization
damage: a single broken word, a c→e / n→u / m→in confusion, a split or fused run) or
**plate** (a whole quoted clause, well-formed Latin, that diverges as a unit).
`scripts/plate-gate.mjs 9004` must be satisfied before this work ships.

---

### 1. Register and structural notes (no marker)

- **Head, cols 0911D and 0915B — `INCIPIT CAPITULATIO.`** Rendered "HERE BEGINS THE
  CAPITULATIO." *Capitulatio* is kept as the printed technical label: nothing in the
  matter that follows is a chapter list — it is continuous lemma-and-gloss on John
  13–21 — so translating it "chapter-list" or "table of chapters" would make a claim
  about the section's function that the page does not support. Structural label,
  Pattern 9 family.
- **Col 0912A/B — *Explicit Passio.*** Migne sets this as a centred italic line inside
  the John section, before the Farewell-Discourse glosses resume. Reproduced in place
  and in the same structure as "*Here endeth the Passion.*" It is Migne's rubric, not
  a defect, and takes no marker.
- **Col 0911A — the printed ellipsis.** Migne prints *sic et Christus . . .
  multiplicavit Ecclesiam suam*, spaced periods and all. Carried through verbatim
  (Pattern 8: never supply, never delete). Nothing is missing from our source here
  that we can demonstrate, so no `[ed:]`.
- **Cols 0908D, 0914C — printed question marks on non-questions.** *apertos oculos
  tenuit ad malum et clausit ad bonum?* and *duo discipuli currentes?* Both marks
  ride as printed (Pattern 8).
- **The work's Latin is barbarous by its editor's own admission** (Martianay's
  *Admonitio*), and this range is the densest stretch of it: nominatives for
  accusatives (*alienus sequuntur*, *majorem omnibus*), indicative for subjunctive
  (*est qui quaerit et judicet*), singular verbs with plural subjects, *ad* +
  infinitive (*ad clarificare*, 0913C). These are rendered as they stand and are not
  itemized individually below; none is marked.

---

### 2. Defect markers fired — `[sic: …]`

| col | printed | rendering | probable reading | class |
|---|---|---|---|---|
| 0906B | *ine* | "he must increase, but [sic: *ine*] to be diminished" | *me* (Jn 3:30 *me autem minui*) | **our-file**, near-certain: `m` read as `in` is the classic CC letter-split. |
| 0907A | *ordiatium* | "by the [sic: *ordiatium*] is understood the harshness of the letter of the law" | *hordeaceum* / *ordeacium*, "of barley" (Jn 6:9 *hordeaceos*) | **uncertain.** The gloss requires the barley-loaf word; whether the plate sets an unattested medieval form or CC has mangled it cannot be told from our file. |
| 0907B | *divitatem* | "they show it according to the [sic: *divitatem*]" | *divinitatem* — the phrase *secundum divinitatem* occurs seven times elsewhere in this range | **our-file**, near-certain: a dropped `n`. |
| 0908A | *te* | "he raised [sic: *te*] himself up" | nothing; the run is intrusive in *erexit te se* | **uncertain.** `te` is a real word with no grammatical slot here (Pattern 12's test 1). Could equally be Migne's foul case or a CC insertion. ⚠ **If the plate reads *erexit se*, withdraw this marker.** |
| 0908C | *Abranam* | "before [sic: *Abranam*] I am" | *Abraham* | **our-file**, near-certain: `h` read as `n`. |
| 0912A | *mimicos* | "love your [sic: *mimicos*]" | *inimicos* (Matt 5:44) | **our-file**, near-certain: `in` fused to `m` — the exact inverse of the 0906B *ine* case, in the same work. That the two shapes both occur is itself evidence they are the transcription's, not the compositor's. |
| 0912A | *loc* | "I go to prepare for you a [sic: *loc*]" | *locum* (Jn 14:2) | **uncertain**, leaning plate: a truncated word at what may be a line end. |
| 0913A | *istis* | "from the beginning ye have been [sic: *istis*] with me" | *estis* (Jn 15:27 *ab initio mecum estis*) | **our-file**, likely: `e`→`i`. ⚑ 7a⁗ applied — the marked run was the clause's only verb, so the English supplies "have been" in plain words beside the marker. |
| 0913D | *fagulis* | "they came with lanterns and [sic: *fagulis*]" | *faculis* (Jn 18:3 *cum laternis et facibus*) | **our-file**, likely: `c`→`g`. |

**Declined, deliberately** — real words rendered as printed under Pattern 7, with the
conjecture recorded here and nowhere else:

- **0906A, *in libano crucis*** — "on the Lebanon of the cross," where the sense wants
  *in ligno crucis*, "on the wood of the cross." *libano* is a perfectly good word, so
  Pattern 12 has nothing to wrap; and the English, though opaque, does not **assert**
  anything false, so it fails the Pattern 18 `[cj:]` bar (18a). Rendered as printed.
- **0908C, *Scripturae Scriptura divina vocati nominati*** — the same lexeme in two
  forms, adjacent. It looks like an eye-skip, but Pattern 11's `[d:]` is a claim that
  Migne's plate sets a run twice, and one word of our transcription is not evidence for
  that (see the header). Rendered as printed: "of the Scriptures, by divine Scripture
  called, named."
- **0908C, *abscondit Jesus … a cordibus eorum se, exivit de templo*** — a stray *se*.
  Same reasoning; rendered as printed ("himself he went out of the temple").
- **0916B, *insita arbor, in alter facit fructum arboris*** — *in alter* does not
  construe. Rendered as closely as the printed words allow ("a grafted tree, in another
  it maketh the fruit of the tree"); no marker, because the whole sentence is of a piece
  with the work's admitted solecisms.
- **0914C, *viderunt in quem pupunxerunt*** — *pupunxerunt* for the classical
  *pupugerunt*, and *viderunt* for Jn 19:37's *videbunt*. Both parse; rendered as
  printed. See §3.
- **0907C, *vos ascenditis ad diem festum*** — indicative for Jn 7:8's imperative
  *ascendite*. The indicative occupies its slot and renders in place ("ye go up"), so
  Pattern 12 does not apply.

---

### 3. Vulgate collation — every italicised lemma, word by word

⚑ **This is the deliverable the 7a″ clause exists for**, and it was done as the first
step of each chunk. Divergences that are **material and well-formed** carry a
`[var: …]`; the rest are logged here only. Lemma truncation (Migne cutting a verse
short, or dropping an opening *autem* / *enim* / *ergo* to start the lemma) is a
citation habit, not a divergence, and is not listed.

### Marked with `[var: …]` — 19 in all

| col | Migne prints | Vulgate | why it fires |
|---|---|---|---|
| 0905C | *sanguis ejus verus potus est* (Jn 6:56, quoted *ut ipse ait*) | *sanguis meus vere est potus* | Introduced as Christ's own words yet printed in the third person; a whole clause recast. **plate.** |
| 0905C | *flagellum de resticulis* (Jn 2:15) | *de funiculis* | A different lexeme, well formed. **plate.** |
| 0905D/0906A | *qui enim adhaeret Christo unus spiritus est* (1 Cor 6:17) | *Qui autem adhaeret Domino* | *Domino* → *Christo* in a clause attributed to the Apostle. **plate.** |
| 0906A | *Vocem meam audis* (Jn 3:8) | *vocem eius audis* | Possessive reversed; the gloss ("the ear of the heart") turns on being addressed. **plate.** |
| 0906C | *et hunc quidem habes est tuus* (Jn 4:18) | *et nunc quem habes non est tuus vir* | ⛔ **The printed lemma has lost the Vulgate's negation.** Rendered without it, per the negation rule; the divergence is exactly what the edition exists to show, and the allegory that follows (the sixth husband = the book of Joshua) may even depend on it. **plate.** |
| 0907A | *neque vocem ejus audiunt unquam* (Jn 5:37) | *neque vocem eius umquam audistis* | Third plural present for second plural perfect: a different assertion. **plate.** |
| 0907D | *quia Jesus nondum erat honorificatus* (Jn 7:39) | *nondum erat glorificatus* | ⭐ **The gloss is built on the printed word** — *ostendit honorificationem passionis*. Conforming the lemma would have left the gloss explaining a word that is not there (the 7a″ mechanism exactly). **plate.** |
| 0909B | *Qui non intrant per januam* (Jn 10:1) | *Qui non intrat per ostium in ovile ovium* | Number and lexeme both. **plate.** |
| 0909B | *alienus sequuntur* (Jn 10:5) | *alienum autem non sequuntur* | ⛔ **A second lost negation**, and it inverts the verse: the sheep now *follow* the stranger. Rendered as printed. **plate.** |
| 0909C | *fur non venit nisi ut occidet et perdet* (Jn 10:10) | *nisi ut furetur, et mactet, et perdat* | A member of the triplet gone and the moods changed. **plate.** |
| 0909C | *sit unus grex et unus pastor* (Jn 10:16) | *fiet unum ovile et unus pastor* | The old *grex*/*ovile* crux (Gk μία ποίμνη). Notable, and the gloss glosses *grex*. **plate.** |
| 0910C | *ut Filius Dei qui divisi erant congregaret in unum* (Jn 11:52) | *ut filios Dei, qui erant dispersi, congregaret in unum* | The children of God become the Son of God; subject and object exchanged. **plate.** |
| 0910D | *noli timere perditionem tuam, quia Salvator tuus venit filia Sion* (Jn 12:15) | *Noli timere, filia Sion: ecce rex tuus venit* | *rex* → *Salvator* (an Isa 62:11 contamination) and *perditionem tuam* added. **plate.** |
| 0911A | *Clarificabo et iterum clarificabo* (Jn 12:28) | *Et clarificavi, et iterum clarificabo* | Future for perfect; the Father's past glorifying is lost, and the gloss then supplies two *imperatives* (*clarifica … clarifica*) that match neither. **plate.** |
| 0911D/0912A | *Et per bucellam introivit in eum Satanas* (Jn 13:27) | *Et post bucellam* | ⭐ *per* for *post* turns a sequence into an instrument, and **the gloss depends on it**: the morsel becomes the means, glossed at once with 1 Cor 11:29 on unworthy reception. **plate.** |
| 0912A | *diliges amicum et odio habebis inimicum* (Matt 5:43) | *Diliges proximum tuum, et odio habebis inimicum tuum* | *proximum* → *amicum*, in the verse the whole new-commandment gloss is built against. **plate.** |
| 0912B | *Amodo nostis eum et vidistis eum* (Jn 14:7) | *et amodo cognoscetis eum, et vidistis eum* | Future → perfect; the gloss ("whom they knew with the eyes of the body") follows the printed perfect. **plate.** |
| 0912D/0913A | *ut fructum primum afferatis* (Jn 15:8) | *ut fructum plurimum afferatis* | *primum* for *plurimum*. ⚠ **Attribution genuinely open:** the loss of *lu* is a plausible CC shape, so this one may be **our-file**. It is marked because the divergence is material either way and the marker is what gets it read at the plate. |
| 0913A | *talis est mulier adultera, quae cum comederit tetigit os suum, dicit, non sum operata malum* (Prov 30:20) | *Talis est et via mulieris adulterae, quae comedit, et tergens os suum dicit: Non sum operata malum* | *via* dropped, *tergens* → *tetigit* (wiping becomes touching) in a gloss that turns on the Church *wiping herself clean*. **plate.** |

### Logged, not marked — divergence real but immaterial, or plainly the commentator's own compression

- **0903D** *quod est, in eo vita erat* (Jn 1:3–4 *quod factum est, in ipso vita erat*)
  — the famous punctuation crux; *factum* dropped, *ipso* → *eo*.
- **0904D** *in mundum venit, mundum non cognovit* (Jn 1:10 *in mundo erat … et mundus
  eum non cognovit*) — the accusative *mundum* leaves the subject of *cognovit* the
  Jews, not the world; rendered as printed ("the world he knew not").
- **0905A** *Veteri Testamenti gratia novi Testamenti* — *Veteri* for *Veteris*;
  rendered as an asyndetic pair, "the grace of the Old Testament, the grace of the New
  Testament," rather than supplying the *pro* that "gratiam pro gratia" invites.
- **0905A** *confessus est, Johannis non esse Christum* — *Johannis* for *Joannem*;
  medieval nominative spelling, Pattern 9.
- **0905B** *coelos apertos* (Jn 1:51 *caelum apertum*) — number.
- **0905B** *die tertio* (Jn 2:1 *die tertia*) — gender, no English exponent (Pattern 9).
- **0906A** *testimoniorum nostrorum non accipitis* (Jn 3:11 *testimonium nostrum non
  accipitis*) — genitive plural; rendered partitively, "ye receive not of our
  testimonies."
- **0906C** *fons aquae salientis ad vitam aeternam* (Jn 4:14 *in vitam*); **0909A**
  *lava ad natatoria Siloe* (Jn 9:7 *in natatoria*); **0906A** *Nemo ascendit ad coelum*
  (Jn 3:13 *in caelum*) — a consistent *ad*-for-*in* habit across the section, which is
  why none of the three is marked: it is this copy's preposition usage, not three
  separate textual events.
- **0906D/0907A** *sed qui misit me Patris* (Jn 5:30 *sed voluntatem eius qui misit me*)
  — rendered "but of the Father who sent me," supplying nothing.
- **0907A** *lauda te alienus non os tuum* (Prov 27:2 *Laudet te alienus, et non os
  tuum*) — imperative for subjunctive; the clause will not construe with a nominative
  *alienus*, and is rendered as closely as the printed words allow.
- **0907B** *Jesum ambulantem super mare* (Jn 6:19 *supra mare*).
- **0907C** *Ascendit Jesus Jerosolymam* set against *die festo mediante* — Jn 7:14
  reads *ascendit Jesus in templum*; Migne's clause is Jn 2:13 / 5:1 verbatim. A
  conflation of two real Vulgate readings, so **no `[var:]`**: the printed words agree
  with Scripture, just not with the verse in view.
- **0907D** *Adhuc modicum vobiscum sum* (Jn 7:33 *Adhuc modicum tempus vobiscum sum*).
- **0908C** *ante Abranam ego sum* (Jn 8:58 *antequam Abraham fieret, ego sum*) — a
  divergence sitting on top of a broken word; the `[sic:]` above covers the type, and
  the syntax is logged here.
- **0909A** *Lutum fecit, linivit oculos meos* — conflates Jn 9:6 (*linivit lutum*)
  with 9:11 (*lutum fecit et unxit oculos meos*). Both words are Johannine; no marker.
- **0909A** *in judicio ego veni* (Jn 9:39 *In iudicium ego … veni*) — ablative for
  accusative: "for judgment" rather than "unto judgment."
- **0909C** *quotquot venerunt fures fuerunt* (Jn 10:8 *fures sunt*).
- **0910A** *mansit ibi duos dies* (Jn 11:6 *in eodem loco duobus diebus*).
- **0910B** *qui credit in me et mortuus fuerit vivit* (Jn 11:25 *etiam si mortuus
  fuerit, vivet*) — the concessive lost; rendered "and shall have died, liveth."
- **0910C** *expedit unum hominem mori quam tota gens pereat* (Jn 11:50) — heavily
  compressed, and the *non* of *non tota gens pereat* is absorbed into the comparative
  *quam*, so the sense survives; introduced as reported speech (*princeps causas
  dixit*), which is why this is the commentator's compression rather than a variant.
- **0910D** *invenit asinum* (Jn 12:14 *asellum*); *domus repleta est* (Jn 12:3
  *impleta*); *granum tritici … multa grana adfert* (Jn 12:24 *granum frumenti … multum
  fructum affert*).
- **0911A** *princeps mundi mittitur foras* (Jn 12:31 *eicietur foras*).
- **0912C** *pacem meam do vobis … pacem meam relinquo vobis* (Jn 14:27 reverses the
  order and has *pacem relinquo*, not *pacem meam*); *venit princeps mundi ad me, et
  nihil in me invenit* (Jn 14:30 *in me non habet quidquam*).
- **0913A** *majorem caritatem nemo habet* (Jn 15:13 *Maiorem hac dilectionem*) —
  *caritas* for *dilectio*. Left unmarked: the two are interchangeable in this author's
  own vocabulary and nothing in the gloss turns on either.
- **0913B** *sed palam de Patre manifestabo vobis* (Jn 16:25 *annuntiabo*);
  **0913B/C** *Pater diligit vos, quia diligitis me* (Jn 16:27 *amat … amastis*).
- **0913D/0914A** *venerunt cum laternis et fagulis* — Jn 18:3 also has *et armis*,
  dropped here; the type defect is marked above.
- **0914B** *sortiamus de illa cujus erat* (Jn 19:24 *sortiamur … cuius sit*) — active
  for deponent, a period form (Pattern 9).
- **0914C** *lancea latus ejus punxerunt* (Jn 19:34 *aperuit*) and *viderunt in quem
  pupunxerunt* (Jn 19:37 *Videbunt in quem transfixerunt*) — the commentator has
  assimilated 19:37 to 19:34's piercing; tense and lexeme both diverge.
- **0914D** *sudarium … separatim in unum locum involutum* (Jn 20:7 *separatim
  involutum in unum locum*) — word order only.
- **0915A** *tibi non ascendi per divinitatem* (Jn 20:17 *nondum enim ascendi ad Patrem
  meum*) — rendered as printed, "I have not ascended for thee through the divinity."
  The printed *non* is carried; the Vulgate's *nondum* is not substituted.
- **0915A/B** *mittite in dexteram partem* (Jn 21:6 *in dexteram navigii rete*);
  *viderunt prunas, et piscem et panem positum* (Jn 21:9 *vident prunas positas, et
  piscem superpositum, et panem*).
- **0915B** *indivisum rete et non scissum* (Jn 21:11 *non est scissum rete*) — both
  negations carried.
- **0916A** *Discipulus quem amabat Jesus* — Jn 21:20 has *diligebat*, but *quem amabat
  Iesus* is the Vulgate's own wording at Jn 20:2, so no marker.

---

### 4. Left unresolved

1. **Nothing in this range has been read at the plate.** Nine `[sic:]` and nineteen
   `[var:]` stand on cols 0903–0916B. Five of the nine `[sic:]` are attributed above to
   our transcription rather than to Migne, and if the plate confirms that they should be
   withdrawn rather than kept — in particular **0908A *te***, which is the weakest of
   the nine.
2. **0907A *ordiatium*** — worth a lexicon check as much as a plate check: if
   *ordeacium*/*ordiacium* is attested medieval orthography for *hordeaceum*, the marker
   comes off under Pattern 9 rather than under a plate read.
3. **0912D/0913A *primum* for *plurimum*** — the one `[var:]` in this range whose
   attribution I would not defend without the plate.
4. **No foot-of-page apparatus is recoverable from our source for this work.** Several
   entries above are exactly the class Migne's numbered *Forte* notes settle (0906A
   *libano*, 0912A *loc*, 0916B *in alter*). PL 114's spot check is recorded as a
   sample, not as coverage; if this work's own spot check has not been done, these three
   columns are where it would pay.
