# Cruces — 8996 *Epistola ad Romanos* (Glossa ordinaria), chunks 0010–0014

Agent stint: chunks 0010–0014 (cols 0494A–0506A). Filename per the split-batch
convention; the merge step reconciles this with the other agents' halves.

⚠ **PLATE READ OWED.** `data/plate-reads.json` records no read for any column of this
work, and `data/plate-notes/8996.tsv` carries a single asterisk note at col 0470 only.
Four `[sic:]` markers and one `[cj:]` below stand on unread columns (0495A, 0497B,
0497D, 0500C, 0501C, 0504C, 0504D). Under CLAUDE.md hard rule 8a `plate-gate.mjs` will
name every one of them; **cols 495, 497, 500, 501 and 504 must be read at the plate
before this work ships**, because a `[sic:]` accuses Migne's type and our Latin is
Corpus Corporum, not the plate.

---

## Markers fired

### `[sic: *Ambuans*]` — 0495A (chunk 0011, VERS. 5)

Printed *Ambuans secundum carnem non est justus*. *Ambuans* is not a Latin word;
*Ambulans* ("walking") is certain from the sentence and from the lemma it glosses
(Rom 8:5 *qui secundum carnem sunt*). Carried untranslated in italics per Pattern 7's
non-word class, with the sense supplied in plain words beside the marker per 7a⁗
("He that walketh"), since the quarantined run is the clause's subject participle.

### `[sic: *revela*]` — 0497B (chunk 0011, VERS. 21)

Printed *Liberabitur. Revelabitur, exspectat revela; subjecit liberabitur.* *revela*
is an imperative stranded as the object of *exspectat* — Pattern 12's test 1, a real
form with no grammatical slot. The gloss is pointing back to Rom 8:19
*revelationem filiorum Dei exspectat*, so *revelationem* is the near-certain reading
and the run is very likely a truncation. Because our Latin is not the plate, this is
also the shape a digitization loss takes; the plate read must decide between
`[sic:]` (Migne's type) and a `data/tei-patches/8996.json` entry (Corpus Corporum's).
Marked `[sic:]` provisionally. The clause keeps its verb and subject, so nothing of
the force is inside the quarantine.

### `[sic: *meriritum*]` — 0497D (chunk 0011, VERS. 24)

Printed *ut majus meriritum spei videatur*. *meriritum* is a dittographic syllable in
*meritum*; not a word. Carried, with "the merit" supplied beside it per 7a⁗ (the run
is the subject of *videatur*).

### `[sic: *eligutur*]` — 0500C (chunk 0013, VERS. 10)

Printed *propter nullum meritum suum vel parentum aliquis eligutur*. *eligutur* for
*eligitur*; not a word. It is the clause's only predicate, so the sense ("is chosen")
is supplied in plain words beside the marker per 7a⁗ question 1. The negation
*nullum* is carried in full ("on account of no merit").

### `[sic: *lans*]` — 0504C (chunk 0014, VERS. 9)

Printed *Ecce lans fidei et merces. Laus fidei est, si credideris…* — *lans* for
*laus*, with the correct *Laus* printing cleanly in the very next sentence, which is
the internal control. Carried, sense supplied ("the praise").

### `[sic: *qoud*]` — 0504D (chunk 0014, VERS. 14)

Printed *Probato, qoud de utroque assumitur populo*. *qoud* for *quod*; not a word.
It is the sentence's subordinating conjunction, so 7a⁗ question 3 applies and "that"
is supplied in plain words beside the marker — a swallowed conjunction would leave
the *probato* ablative absolute governing nothing.

### `[cj: *volentem*; read *nolentem*, "him that willeth not"]` — 0501C (chunk 0013, VERS. 16)

**The one substantive finding of this stint.** Migne prints:

> *volentem praevenit ut velit, volentem subsequitur ne frustra velit.*

The formula is Augustine's (*De natura et gratia*; *Enchiridion* 32): **nolentem**
*praeveniat ut velit,* **volentem** *subsequatur ne frustra velit* — grace goes before
the man who does NOT will, so that he may will, and follows the man who does will, so
that he may not will in vain. The whole gloss is arguing exactly that (*qui hominis
voluntatem bonam, et praeparat ad juvandam, et adjuvat praeparatam*): the two clauses
are a contrasted pair, and with *volentem* printed twice the first clause says grace
goes before the willing man that he may will, which is vacuous and destroys the
antithesis the sentence is built on.

The type is not broken — *volentem* is a perfectly good form — so `[sic:]` has nothing
to wrap and Pattern 7 renders it. That is precisely Pattern 18's founding shape, and
the word that went wrong is a **negation** (the *no-* of *nolentem*), which is the
class 18a explicitly admits even where the result is incoherent rather than false.
The gloss is additive: Migne's word keeps its English and the conjecture stands beside
it. `verify-english`'s guard is satisfied — *volentem* appears verbatim in the Latin
twin.

⚠ Alternative considered and rejected: Pattern 11/11a dittography (the compositor's
eye slipping from the second *volentem* back to the first). Rejected because a `[d:]`
would have to quarantine one of two clauses that are NOT the same run — they differ in
verb, in conjunction and in sense — and because what is wanted is not the deletion of a
duplicate but the restoration of a lost prefix. `[cj:]` says exactly that and says it
in the right voice.

## Markers considered and DECLINED

- **0498A *Quommodo*** (chunk 0011, VERS. 26). *Quommodo enim enarraretur…* Geminated
  *m*. Declined under Pattern 9: consonant gemination is an orthographic variant of a
  transparently identical word, the same class as *aquiescas* for *acquiescas*, and
  marking it would bury the real defects in noise. Rendered "how".
- **0494A "mens non consentit peccato, mors contendit, mens non consentit"**
  (chunk 0010, VERS. 23). Considered for `[d:]`. Declined: the two runs are separated
  by an intervening clause and read as deliberate rhetorical repetition (A, B, A), not
  as a compositor's eye-skip; Pattern 11 is written for an adjacent doubled run.
  Rendered twice, unmarked. ⚠ *mors contendit* is itself odd where *caro contendit*
  would be expected from Rom 7:23's *lex membrorum*; rendered literally ("death
  contends"), no marker, because the English asserts nothing the author is arguing
  against (Pattern 18 bar not met).
- **0496B *Filius Israel non dicitur irae, quibus aqua divisa profuit***
  (chunk 0011, VERS. 15). Nominative singular *Filius* against plural *quibus*, where
  the parallel clause (*Spiritus irae Aegyptiis dicitur, quibus…*) wants the dative
  plural *Filiis*. Case has no English exponent (Pattern 9) but **number does**, so the
  singular is carried into the English as printed: "The son of Israel is not called
  [a spirit] of wrath, to whom the divided water was of profit." No marker: the
  sentence still asserts what the passage argues (Israel did *not* receive the spirit
  of wrath), so the Pattern 18 bar is not met. `[a spirit]` is a supplied-word bracket,
  the head noun carried over from the preceding clause.
- **0496B *Unus ergo spiritus qui duos timores facit. Qui et duo genera servorum
  faciunt.*** Singular *facit* then plural *faciunt* across two sentences. Rendered as
  printed ("which makes… Which also make…"); a number disagreement across a sentence
  boundary with a plausible plural antecedent (*duos timores*) is not a defect that
  needs quarantining.
- **0499D *ejectione mortis*** (chunk 0012, VERS. 39). *dejectione* would construe more
  naturally ("the casting down of death"). *ejectio* is a real word and renders in
  place ("the casting out of death"); rendered as printed, no marker.
- **0502A *aliquis eligutur*** — see the `[sic:]` above; listed here only to note that
  the neighbouring *Judeorum* for *Judaeorum* (0502C) is an attested medieval spelling
  and takes nothing (Pattern 9).

## Vulgate divergences — THE DELIVERABLE LIST

Lemmata checked word by word against the Vulgate before the English was trusted, per
7a″. **Every divergence below is rendered as Migne prints it.** No `[var:]` was fired:
each divergence is either a lemma truncation, a synonym, or a word-order change that
does not turn the gloss, and firing `[var:]` on an unread column is barred by 8a. They
are recorded here so a later pass can fire markers once the plate is read.

| col | Migne prints | Vulgate | note |
|---|---|---|---|
| 0494B | Rom 7:23 *Captivum* | *captivantem* | Old Latin *captivum me ducentem* is attested; the gloss (*Ex carne, ex parte*) does not turn on the form. |
| 0494B | 1 Cor 15:53 *cum mortale hoc induet immortalitatem* | *mortale hoc induere inmortalitatem* | finite verb for the infinitive, the citation woven into the sentence. Same weave again at 0495D. |
| 0494C | Rom 8:1 *Nihil **igitur** nunc* | *Nihil **ergo** nunc* | synonym; recurs as the lemma catchword. |
| 0495B | Rom 8:6–7 gloss quotes ***affectus** carnis mors* / ***affectus** carnis inimicitia est ad Deum* | *prudentia carnis mors est* / *sapientia carnis inimica est Deo* | ⚠ **the most interesting one in the stint.** The printed LEMMATA at VERS. 6 and 7 read *prudentia* and *sapientia* (Vulgate), but the gloss re-quotes the same two clauses with *affectus* — the Ambrosiaster/Old Latin wording — and *inimicitia … ad Deum* for *inimica … Deo*. Migne's page therefore carries two versions of one verse, lemma and gloss disagreeing. Both rendered as printed ("the prudence of the flesh" in the lemma, "the affection of the flesh" in the gloss); do NOT harmonize them at merge. |
| 0495C | Ezek 18:4 *Anima quae **peccavit*** | *anima quae **peccaverit*** | perfect for future perfect. |
| 0495D | Isa 53:8 *generationem **Filii** quis enarrabit* | *generationem **eius** quis enarrabit* | the noun for the pronoun; inside an Augustine excerpt. |
| 0496B | Mal 1:6 *Si Dominus sum, ubi est timor meus? Si pater, ubi est honor meus?* | *si ego pater sum ubi est honor meus et si Dominus ego sum ubi est timor meus* | **clauses reversed** and abbreviated. The reversal is functional, not a slip: it tracks the gloss's own order two lines above, *qui timet Dominum et honorat patrem*. Rendered in Migne's order. |
| 0497A | John 14:27 *Pacem **meam** do vobis, pacem meam relinquo vobis* | *pacem relinquo vobis pacem **meam** do vobis* | **clauses reversed**, and *meam* added to the *relinquo* member which the Vulgate leaves bare. |
| 0498C | John 14:9 *Qui videt me, videt et Patrem* | same | agrees. |
| 0498D | *Qui fecit quae futura sunt* cited as **Isa. XLIV** | no Vulgate verse reads thus | closest is Isa 45:11 (*ventura interrogate me*); the wording is the Old Latin/LXX shape *ὁ ποιήσας τὰ ἐπερχόμενα*. Reference kept exactly as Migne prints it (`refDisplay` rule) — **do not "correct" the chapter number.** |
| 0499A | Eph 5:2 *Christus dilexit nos, et tradidit semetipsum pro nobis* | same | agrees. |
| 0499C | Prov 30:8–9 *Divitias et paupertates ne dederis mihi: ne repletus mendax fiam, vel pauper rapiam, et perjurem nomen Dei* | *mendicitatem et divitias ne dederis mihi … ne forte saturatus inliciar ad negandum et dicam quis est Dominus aut egestate conpulsus furer et periurem nomen Dei mei* | **the widest divergence in the stint.** The two nouns are in the reverse order, *paupertates* stands for *mendicitatem*, *repletus mendax fiam* compresses *saturatus inliciar ad negandum*, *rapiam* stands for *furer*, and *Dei* drops *mei*. Sense is preserved (both are the prayer against wealth and want), which is why no `[var:]` fired; the gloss that follows (*Multi peccant altitudine, multi necessitate*) turns on the pair, not on the wording. |
| 0499C | Rom 8:38 *Neque angeli, neque **principes**, neque **virtutes*** | *neque angeli neque **principatus** neque **virtutes*** (Clementine); *fortitudines* in some witnesses | ⚠ **load-bearing.** The gloss reads these as angelic ORDERS (*Hi ordines accipiuntur de malis angelis*), and *principes*/*virtutes* are precisely the order-names. Rendered "princes… virtues". |
| 0500A | 1 Tim 2:5 *Mediator Dei et hominum, homo Christus Jesus* | same | agrees. |
| 0501B | Rom 9:15 *Miserebor cui misertus* | *miserebor cuius misereor* | lemma catchword, truncated and with the perfect for the present. |
| 0502D | Rom 9:28 *Et **abbrevians** in aequitate* | *et **brevians** in aequitate* | compound for simplex; the gloss glosses the compound (*omnia legalia in uno Christo abbreviat*), so the divergence is the one the exposition rests on. |
| 0503B | Rom 9:31 *Sectando justitiam* | *sectans legem iustitiae* | participle changed to a gerund and *legem* dropped — a lemma catchword, not a text. |
| 0503B | Rom 9:32 *quia non ex fide* | *quia non ex fide sed quasi ex operibus* | truncation. |
| 0503C | Isa 8:14 / Rom 9:33 *pono in Sion lapidem offensionis et petram scandali* | same | agrees. |
| 0504A | John 6:66 *Nemo **venit** ad me, nisi **cui datum fuerit** a Patre meo*, cited **Joan. IV** | *nemo **potest venire** ad me nisi **fuerit ei datum** a Patre meo* (John 6:66) | modal dropped, relative for the dative pronoun. ⚠ **The chapter number is Migne's and stands** — the verse is John 6, but `refDisplay` keeps what he prints and `refKey` resolves it later; this is exactly the class the standing rule forbids correcting. |
| 0504A | Acts 3:17 *Scio **quod** per ignorantiam **hoc egistis*** | *scio **quia** per ignorantiam **fecistis*** | conjunction and verb both changed, *hoc* supplied. |
| 0504A | Lev 18:5 *Qui fecerit ea, vivet in illis* | *quae faciens homo vivet in eis* (Lev 18:5); *qui fecerit homo vivet in ea* (Rom 10:5) | Migne's gloss says the wording is that of **Numbers and Leviticus**, and the form he prints (*ea … illis*, plural) is the Leviticus shape rather than Paul's singular *ea*. Rendered as printed. |
| 0504B | John 15:3 ***Nam** vos mundi estis propter **verbum quod** locutus sum vobis* | ***iam** vos mundi estis propter **sermonem quem** locutus sum vobis* | ⚠ **the divergence that carries an argument.** The lemma under exposition is Rom 10:8 *Hoc est **verbum** fidei*, and Augustine's proof-text is adduced for the word *verbum* — which the Vulgate's *sermonem* does not contain. Conforming this quotation to the Vulgate would have silently removed the keyword the whole note is built on: 7a″'s failure mode exactly. Rendered *verbum* → "the word", and *Nam* → "For" (not "Now"). A `[var: Vulg. *sermonem*]` is defensible here and should be reconsidered once col. 0504 is read at the plate. |
| 0505C | Rom 10:18 / Ps 18:5 *In omnem terram **exivit** sonus eorum* | *in omnem terram **exiit** sonus eorum* | perfect stem variant, no sense change. |
| 0505C | Acts 1:8 *Testes mihi eritis usque ad ultimum terrae* | *eritis mihi testes … usque ad ultimum terrae* | word order. |
| 0498C | 1 Cor 15:49 *Ut portemus imaginem coelestis, sicut portavimus imaginem terreni* | *sicut portavimus imaginem terreni portemus et imaginem caelestis* | clauses reversed; the gloss puts the exhortation first. |
| 0498C | Matt 22:14 *Multi sunt vocati, pauci vero electi* | *multi sunt **enim** vocati pauci vero electi* | *enim* dropped. |

## Notes on rendering decisions

- **`VERS. n.--` is kept verbatim in the English**, per the shipped convention of the
  sibling Glossa works (8976, 8982, 8985). `CAPUT` heads translate to `CHAPTER`; the
  `(cont.)` on a repeated head is our chunk division and is carried unchanged.
- **`etc., *usque ad* …` renders `etc., *as far as* …`** with the tail translated —
  the corpus formula inherited from 8965/8970 and used throughout 8976.
- **Rom 8:14 *aguntur* is rendered "are driven", not "are led"**, and held to that
  through the whole gloss. The gloss is an argument about the difference between *agi*
  and *regi* (*Plus est enim agi quam regi… quasi vix aliquid agentem*), so an English
  pair that does not preserve the gradation would make the exposition explain nothing —
  the *stylus*/*epistylium* case in the Song ruling. ⚠ **Merge note: whichever agent
  holds a later occurrence of Rom 8:14 must match this.**
- **0505C *Vel equidem*** is a mention of a variant Latin reading, not a use; kept in
  italic Latin as printed and glossed ("that is, assuredly"), not silently Englished.
- **Second person (Pattern 17):** *eras natus … commisisti* at 0494C is grammatically
  singular and takes *thou/thy*; *accepistis … debetis* at 0496A–B is plural and takes
  *you*. Both as the Latin marks them.
