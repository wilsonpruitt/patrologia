# Cruces — 11065, Hugh of St Victor, *Homiliae in Ecclesiasten* (PL 175, 113C–256C)

Merged 2026-07-30 from six agent batches (0000–0008 · 0009–0018 · 0019–0027 ·
0028–0036 · 0037–0044 · 0045–0052). 53 chunks, 62,318 Latin words — the largest
single work in the corpus. `verify-english` OK on all 53.

## Work-wide conventions (reconciled at merge)

**Pre-set before launch** (the six agents could not see each other, so these were
fixed in every prompt, and all six honoured them): *vanitas* → "vanity" ·
*Ecclesiastes* kept as the name, never "the Preacher" · *occupatio pessima* → "the
worst occupation" · *distendi* → "distended" · *sententia* → "sentiment" ·
*narratio* → "narrative" · *littera* → "letter" · the sense-vocabulary
(literal/moral/mystical/tropology/allegory) · *contemplatio* → "contemplation".

**Reconciled AT MERGE — two genuine drifts, both fixed:**

1. **`Stultus in tenebris ambulat` → "The fool walketh in darkness"**, unified
   across all ten occurrences. Five chunks had "walketh" (0000's argument list,
   0023–0026's Homily X head) and six had "walks" (0026 body, 0030–0034, the
   Homily XII head and its exposition). The Latin is the same three words at every
   site. "walketh" chosen: it is the traditional English of Eccl. 2:14, which the
   register rules permit echoing where the printed Latin matches, and it was
   reached independently by two of the three agents who met the lemma.
   **This one mattered more than a verb ending normally would:** the argument list
   at 0000 forward-references Homily XII, and Homily XII is *built* on setting this
   reading against *Oculi stultorum in finibus terrae*. The table of contents was
   promising the reader one wording and the homily delivering another.
2. **`arguere` → "reprove"; `convincere` → "convict"** — two different Latin verbs,
   two English words, kept distinct. Four sites had *arguere* rendered "convict"
   (0019 *arguat*, 0021 *arguat*, 0035 *arguens*, 0039 *arguit/arguendam*) and were
   changed. **Checked per instance against the Latin, never swept**: chunks 0006,
   0045 and 0051 render genuine *convincere* as "convict" and were left alone, as
   was the *convinceris/convinci* rhetorical chain at 0021 ("having denied, thou
   art convicted; convicted, thou art condemned").

**Examined and deliberately NOT changed — these look like drift and are not:**

- **« » guillemets appear on this lemma in some chunks and not others, and that is
  FAITHFUL.** Migne prints `« Stultus in tenebris ambulat. »` in the argument list
  (0000) and the Homily X head (0023–0026), but sets it bare in the Homily XII head
  (0031): *ubi nostra habet: Stultus in tenebris ambulat*. Pattern 6 — « » is
  Migne's, " " is ours. **Normalizing would invent punctuation he did not set.**
- ***universa vanitas* → "universal vanity" vs *omnia vanitas* → "all is vanity."**
  Not drift: chunk 0003 alone prints *omnia vanitas* ×8 and *universa vanitas* ×2,
  and the two Englishes track them exactly. Hugh's gloss *Universa quippe vanitas
  homo est* collapses if the second is read as "all things are vanity."
- **Migne's own repeated lemmata printed differently are preserved, never
  harmonized:** Eccl. 1:13 *sapienter* everywhere but **prudenter** at the Homily V
  head (0154B) · Eccl. 1:8 *non saturatur* but **non satiatur** at 0144A ("sated"
  vs "satisfied") · Eccl. 3:6 *congregandi* at 0212C but *acquirendi* at
  0214B/0222D/0231C ("gather" vs "acquire") · the tail of Eccl. 3:19 printed three
  ways — *aeque* / *aequa* / *similis utriusque conditio* — all three rendered
  distinctly, and the third is the one Hugh's gloss leans on.
- **Sense-vocabulary, thou/you, Wisdom feminine** — the 0019–0027 and 0028–0036
  agents reached the same `Sapientia`/`sapientia` capitalization and feminine-pronoun
  rule independently; `thou` is reserved for scripture and apostrophe (the sustained
  Adam-apostrophe of Homilies VIII–IX), `you` for reader address.
- *sapere* → "savor" (forced by the *sapere/sapor/sapientia* pun at 0195B–C) ·
  *caduca* → "falling" · *reprobare* → "reject" · *consumo*/*consummo* and
  *fornax*/*caminus* kept lexically distinct · *disputatio*/*concertatio*,
  *calumnia*/*oppressio*, *laetari*/*gaudere* distinct.

## ⚠ The version hazard — what this work is, and what it is not

Hugh repeatedly quotes a verse in one Latin version, then a second, and builds the
exposition on the difference (`aliam translationem` ×11, `nostra habet` ×11,
`aliam interpretationem` ×5, `Hebraeus` ×12, `LXX` ×3). Homily XII is the head-on
case. Every such passage keeps the two wordings verbally distinct.

**Two traps recorded so a later sweep does not misread them:**
- **`per aliam interpretationem` in the Homily XV head is NOT a competing version.**
  It is Hugh re-expounding the *same* Eccl. 3 lemmata under a different sense
  (XIII–XIV literal, XV moral, XVI spiritual).
- **`Hebraeus` at 0174A–B is an ETYMOLOGY, not a version-siglum.** A merge or sweep
  counting occurrences must not treat it as a collation point.

## Per-batch logs

The six batch logs follow verbatim, in chunk order.

# Cruces — Hugh of St Victor, *Homiliae in Ecclesiasten* (PL 175), chunks 0000–0008

Batch: Preface + Homily I (cols 0113C–0133B) + Homily II, part 1 (cols 0133C–0138D).
Prepared per `translation-style.md` (Patterns 7, 7a, 7a′, 8, 9, 10, 12, 15).

## Work-wide conventions adopted in this batch (for merge reconciliation)

Beyond the pre-set vocabulary (*vanitas* → "vanity"; Ecclesiastes never "the Preacher";
*occupatio pessima* → "the worst occupation"; *distendi* → "to be distended";
*sententia* → "sentiment"; *narratio* → "narrative"; *littera* → "letter"; etc.):

| Latin | Rendering | Note |
|---|---|---|
| *universa vanitas* (Ps 38:6, and Hugh's gloss on it) | **"universal vanity"** | Recurs at 0123B, 0123D, 0125C, 0130C. *universa* is the adjective agreeing with *vanitas*, and Hugh's exegesis ("Universa quippe vanitas homo est") turns on reading it so. Do NOT render "all things are vanity" — that collapses the adjective into a subject and breaks the gloss. |
| *vanitatis universitas* | "the universality of vanity" | 0124C, distinguished from *universa vanitas* above. |
| *concionator* | "*concionator*, an assembly-speaker" | 0116A. Hugh glosses *Coeleth* → Gr. *Ecclesiastes* → Lat. *concionator*; the Latin term is kept and glossed because the whole point is the chain of equivalents. Thereafter *concio* → "assembly". |
| *cogitatio / meditatio / speculatio / contemplatio* | cogitation / meditation / speculation / contemplation | 0116D–0118B. The four are a technical series Hugh distinguishes explicitly; all four kept as cognates so the distinctions survive. |
| *curiositas* | "curiosity" | never "inquisitiveness"; it is one of the three named vanities. |
| *caduca* | "falling" (things that fall) | paired throughout with *transitoria* "transitory"; kept literal rather than "perishable" so the pairing stays visible. |
| *inculcatio* | "the driving home" | 0124A, 0133B — Hugh's term for Solomon's rhetorical repetition. |
| *arguere* (of vanity) | "to reprove" | consistently; not "to prove" or "to accuse". |
| *sub sole* | "under the sun" | and Hugh's expansion *sub tempore* → "under time". |
| Homily heads | `HOMILIA PRIMA` → "HOMILY THE FIRST"; `HOMILIA II` → "HOMILY II" | per prompt: spelled-out ordinal spelled out, abbreviated forms kept abbreviated. Argument-list locators (`Hom. II.`, `Homil. V.`, `In hom. XIX`) kept in their printed abbreviated shapes. |
| Scripture | rendered from Migne's printed Latin throughout | Familiar-verse echo permitted where the printed Latin matches the received text (Eccl. 1:2–4, Ps 103, Gen. 8:22). |

---

## Version-divergence watch (the work's defining hazard)

No `aliam translationem` / `nostra habet` / `Hebraeus` / `LXX` passage falls inside
chunks 0000–0008. Two forward references appear in the **argument list at 0000**, and
both are rendered so that the two readings differ in English exactly as they differ in
Latin — later translators of Homilies X and XII must match these:

- `« Stultus in tenebris ambulat. »` → **« The fool walketh in darkness. »** (Hom. X and
  Hom. XII arguments — the *nostra habet* reading, i.e. the Vulgate.)
- `« Oculi stultorum in finibus terrae, »` → **« The eyes of fools are in the ends of the
  earth, »** (Hom. XII argument — the *alia translatio*.)
- `ubi nostra habet:` → **"where our copy has:"** — literal, as instructed; this is the
  phrase that flags a Vulgate reading set against another version.

Guillemets: 3 in the Latin of 0000, 3 in the English, 1:1 (Pattern 6). No other chunk in
this batch carries guillemets.

---

## Carried type — `[sic: …]` (Patterns 7, 10, 12)

Six runs. Each is carried untranslated, in italics (except where inside an already-italic
scripture lemma, per Pattern 10), and each is verified as a verbatim substring of the
Latin twin.

1. **0121C (chunk 0002)** — *copiosa **disputat one** extendit*. Split type for
   *disputatione* (Pattern 10, split-apart class). Carried whole, spacing included:
   `he extends by copious [sic: *disputat one*]`. Conjecture: *disputatione*, certain
   from *copiosa* (abl. sg. fem.) and the sense.
2. **0125A (chunk 0003)** — *omnium mutabilium rerum … **inconstantinam** et
   fluctuationem intuens*. Non-word for *inconstantiam*. Carried:
   `beholding the [sic: *inconstantinam*] and the fluctuation`. Conjecture:
   *inconstantiam*, near-certain (coordinate with *fluctuationem*, acc. sg.).
3. **0128A (chunk 0005)** — Ps 103:23 printed *Exibit homo **od** opus suum, et ad
   operationem suam*. `od` is not a Latin word; conjecture *ad*, certain from the
   parallel *et ad operationem*. Because the run sits inside an italic scripture lemma it
   takes no second italic marker (Pattern 10): `[sic: od]`.
4. **0128C (chunk 0005)** — *aliquid **in nuere** voluit*. Split type for *innuere*.
   Carried: `willed to [sic: *in nuere*] something to us`.
5. **0135C (chunk 0007)** — *secundum convexitatem **circum actionis** suae*. Split type
   for *circumactionis*. Carried:
   `according to the convexity of its [sic: *circum actionis*]`. Conjecture
   *circumactionis*, "of its wheeling round" — certain from the astronomical context.
6. **0136C (chunk 0008)** — *spiritum nunc non **incovenienter** accipere possumus*.
   Non-word for *inconvenienter* (dropped *n*). Not an attested medieval orthography, so
   Pattern 9's exemption does not apply; carried:
   `we can now not [sic: *incovenienter*] take the spirit`.

---

## Negation and polarity (Patterns 7a, 7a′) — every printed negative carried

**⚠ 0132C (chunk 0006) — the one that matters.** Migne prints:

> *extra terminos naturae suae transire non habet de eo quod est in id, quod non est: et
> idcirco, **terra in aeternum stat in eo quod non est**.*

Hugh's whole argument in this paragraph is that the earth *does* stand for ever **in what
it is** — the immediately preceding clauses say *Perseverat in eo quod facta est; servat
naturam suam … nunquam aliud est quam quod est*, and the sentence's own first half denies
that earth can pass *in id, quod non est*. The printed `non` in the final clause therefore
makes the conclusion assert the opposite of its own premises.

**Rendered as printed:** "and for that reason, the earth standeth for ever in that which
it is not." Conjecture: *in eo quod est* (drop the `non`), near-certain. **The negative was
NOT silently dropped**, and no `[sic:]` was used to quarantine it — the run is ordinary
Latin words, and hiding the contradiction inside a marker while translating the clause
affirmatively is precisely the 7a′ failure. The plate's self-contradiction is the evidence.

Other negation-bearing constructions checked and carried intact (no repairs, no
smoothing): 0113C *non tam … quam*, *Neque hoc tamen nego*; 0117D *nec … nec*; 0119A
*non solum sed etiam*; 0120C *nec vera mala, nec vera bona*; 0123A *non est vanitas, sed
veritas*; 0123D *Non omnis homo vita, sed omnis homo vivens*; 0124A *non per vanitatem sed
per veritatem*; 0129D *Non ergo tam laborem quam laborantem*; 0130A *non laborat sub sole,
sed supra solem*; 0133A *nihil dixisse, quod dicendum non erat*; 0138C *nunquam indigentia
accipiendi posse carere*; 0138D *mare non redundat*.

---

## Real words that are wrong — rendered literally, no marker (Pattern 12 boundary)

These can be rendered, so the English word on the page is ours and takes no `[sic:]`.
Each is a conjecture recorded, not an emendation made.

| Col | Printed | Rendered | Conjecture / note |
|---|---|---|---|
| 0115A (0000) | *multa huic narrationi mystica **incerta*** | "many **uncertain** mystical things belong to this narrative" | *inserta*, "inserted into this narrative", fits the argument (he goes on to say they need their own explanation). Rendered as printed. |
| 0115A (0000) | *non tam **motibus** instruendis* | "not so much at **movements** to be instructed" | *moribus*, "morals" — near-certain; Hugh's subject throughout is *mores*. Rendered as printed. |
| 0115B (0000) | *requirant **.** praecipue in consequentibus* | full stop retained; new sentence begins "Especially in what follows" | Migne prints a space-separated full stop mid-construction. Pattern 8: preserved, not deleted. The space itself is a typographic artifact and is not reproducible in running English. |
| 0116A (0001) | *manifeste **regnum** pandit historia* | "the history plainly discloses the kingdom" | *Regum … historia*, "the history of Kings" (III Kings 11), is what the argument wants. Rendered as printed. |
| 0117D (0001) | *deinde ignis cum flamma **sive** fumo* | "then fire with flame **or** smoke" | *sine fumo*, "without smoke", is required by the three-stage figure (flame+smoke → flame without smoke → pure fire). **Not repaired**: the middle term is left saying "or smoke" exactly as printed, which visibly breaks the progression. This is the batch's second-most consequential defect after 0132C. |
| 0118B (0001) | *summa tranquillitate et felicitate suaviter **repulsatur*** | "he is sweetly **beaten back**" | *repausatur*, "rests again", would suit the sense (the passage's theme is rest). *Repulsare* is a real word and is rendered literally. |
| 0119C (0001/0002) | *et in **nascituris**, sed non morituris* | "among things to be born, but not to die" | Rendered as printed; construction is loose but construes. |
| 0123B (0003) | *caro ex anima totum habet quod vivit**?*** | question mark retained | Pattern 8: Migne prints `?` closing a statement. Preserved, not converted to a stop. Same at 0123D (*et utinam vivat?*) and 0131C (Gen. 3:19 lemma closed with `?`). |
| 0126A (0004) | *Illic vero **malo**, quod boni inesse videtur, vanum est* | "But there, for the evil man, what of good seems to be present is vain" | Construes with *malo* as dative; the parallel *horum malum* suggests *illorum* was intended. Rendered as closely as the printed words allow. |
| 0128B (0005) | *cuncta ordinantis Dei **gratias*** | "the **graces** of God who bestows and orders all things" | *gratia* (nom. sg.) is required as subject of *permiserit*. English carries no case, so the defect has no English exponent (cf. Pattern 9) — logged, not marked. |
| 0127D (0005) | *Hanc admirabilem divinae dispensationis **ordinem*** | "This wondrous order of the divine dispensation" | Gender mismatch (*hanc* … *ordinem*). Pattern 9: no English exponent; logged so a later sweep does not churn it. |
| 0131B (0006) | ***quis** quotidie cernis praeterire quod es* | "thou who daily seest" | *qui* expected. No English exponent. |
| 0131D (0006) | *Stabilis ipsa est **quae portet*** | "Stable is she who bears" | Subjunctive *portet* for indicative *portat*; rendered as an ordinary relative, the mood having no English exponent here. |
| 0135D (0007) | *non de **diuturno**, sed de annuo cursu solis* | "not of the **long-continued** but of the yearly course of the sun" | *diurno*, "daily", is certain — the whole preceding paragraph expounded the daily course and this sentence introduces the yearly alternative. **Not repaired**: rendering "daily" here would be a textbook silent repair (Pattern 7a mechanism 1). The English reads oddly; that is the intended cost. |
| 0136A (0008) | *Sane quemadmodum soli**?** ita quoque aeri* | "Indeed, just as to the sun? so also to the air" | Pattern 8: `?` printed mid-sentence, preserved. |
| 0136B (0008) | *quasi in se factae**;** et paulatim … quiescant* | semicolon retained mid-construction | Pattern 8. |
| 0136C (0008) | *Unde et veteres naturam esse dixerunt**.** Ignem artificem procedentem…* | rendered as two sentences: "…said that nature is. A craftsman fire, going forward…" | Migne's full stop severs the accusative-and-infinitive from its predicate (*ignem artificem* is the complement of *naturam esse*). Pattern 8: the stop is preserved, the fragment rendered as it stands. |
| 0136D (0008) | *ad **invisibilem** tandem producit substantiam* | "brings them at length to an **invisible** substance" | *visibilem* is what the argument requires (an invisible power feeding things *invisibili nutrimento* into visible being). Rendered as printed. |
| 0137A (0008) | *quia universa, **qui** oriuntur in tempore* | "all things which rise in time" | *quae* expected; relative-pronoun gender has no English exponent (Pattern 9). |
| 0136D (0008) | *quasi **anima** constans ex anima et corpore* | "as it were a soul consisting of soul and body" | *animal* is the standard form of the world-soul doxography Hugh is reporting. Rendered as printed; the tautology stands. |
| 0137C (0008) | *quod in ordine rerum, tertium post ignem ponitur in procreatione secundum sociatur* | "which in the order of things is placed third after fire, in procreation is associated as second" | Asyndetic and rough, but construes; rendered as closely as the printed words allow. |
| 0138B (0008) | *ut semper **accidentia** repleant et recedentia evacuent* | "replenish the things that **befall** and empty out the things that recede" | *accedentia*, "the things approaching", is the expected antonym of *recedentia*. Rendered as printed. |

---

## Prose notes converted to `[nt: …]` (Pattern 15)

Two notes in this batch are editorial **prose** (a supplied gloss on the elliptical
question of Eccl. 1:3), not citations, and are therefore translated:

- **0126C (chunk 0004)** — `[n: (Subauditur praeter vanitatem.)]` → `[nt: It is
  understood: apart from vanity.]`
- **0129C (chunk 0005)** — `[n: (subauditur praeter vanitatem.)]` → `[nt: it is
  understood: apart from vanity.]`

The plate's own capitalization difference between the two occurrences is reproduced. All
other `[n: …]` in the batch are locators (Scripture references plus *Aeneid.* VI, 688) and
stay verbatim Latin.

---

## Other notes

- **0136D–0137A (chunk 0008), the Virgil quotation.** Migne sets *Aeneid* VI. 724–727 as
  four italic verse lines with the `[n: (Aeneid. VI, 688.)]` locator following the block.
  The four-line structure and the locator's position are reproduced 1:1; the note content
  (including Migne's line number, which does not match the modern numbering of the
  passage) is untranslated and unaltered, per the verbatim rule.
- **0136A (chunk 0008)** — the column anchor is printed hard against the opening word
  (`[0136A]Lustrans`) with no intervening space, and the lemma is *not* italicized here
  though it is italicized when first quoted at 0134B. Both features reproduced as printed.
- **Column-band sequence.** 0113C → 0114C → 0115A skips the intervening bands; 0122B
  closes chunk 0002 and 0122C opens chunk 0003. Per the standing ruling these are
  positional quarter-guides, not a four-per-column grid: no defect, no patch, no plate
  check.
- **`(cont.)` heads** on chunks 0002–0006 and 0008 reproduce our own chunk division and
  are left untranslated in the marker itself; the head text is translated.
# Cruces — Hugh of St Victor, *Homiliae in Ecclesiasten* (PL 175), chunks 0009–0018

Batch: Homily II, parts 2–5 (cols 0139A–0149D) + Homilies III–VII (cols 0150A–0162D).
Prepared per `translation-style.md` (Patterns 7, 7a, 7a′, 8, 9, 10, 11, 12).

## Work-wide conventions adopted in this batch (for merge reconciliation)

Pre-set vocabulary followed throughout (*vanitas* → "vanity"; Ecclesiastes never "the
Preacher"; *occupatio pessima* → "the worst occupation"; *distendi/distendantur* → "to be
distended"; *sententia* → "sentiment"; *contemplatio* → "contemplation"). Conventions set
in `cruces-0000.md` (chunks 0000–0008) were checked and adopted where they recur in this
range: *sub sole* → "under the sun", *sub tempore* → "under time"; *curiositas* →
"curiosity"; *caduca* → "falling"; *arguere* → "to reprove"; homily heads keep their
printed abbreviation (`HOMILIA II` → "HOMILY II", `HOMILIA VII` → "HOMILY VII").

New decisions made in this batch:

| Latin | Rendering | Note |
|---|---|---|
| *reprobare* | "to reject" | 0018 @0160B (*reprobavi vanitatem*). Distinguished from *arguere*, which is already fixed as "to reprove"; using "reprove" for both would erase the pair. |
| *saturatur / satiatur oculus* | "the eye is **sated**" / "the eye is **satisfied**" | The lemma of Eccl. 1:8 is printed *non saturatur* at 0139D, 0142A–0143B, 0144A(2nd), and once as *non satiatur* at 0144A(1st). The two printed verbs are rendered by two English verbs so the divergence in Migne's own repetitions of the lemma stays visible. Not an emendation either way. |
| *sapienter* / *prudenter* in the Eccl. 1:13 lemma | "wisely" / "prudently" | Migne prints *sapienter* at 0150A, 0154B–0155B, 0160A, but **prudenter** at 0154B in the lemma head of Homily V (see version-divergence note below). Rendered distinctly. |
| *jucunditas* | "delightfulness" | kept distinct from *delectatio* "delight" and *dulcedo* "sweetness" — Hugh runs all three in the sense-theory passage at 0140D–0141D. |
| *defectus* | "failure" / "failing" | 0139C's paradox *sit defectus sine defectu* requires one English word throughout ("a failing without failure"). |
| *effectus rerum* | "the effect of things" | 0147B–D, against *providentia*; not "outcome", which is reserved for *eventus* (0144C). |
| *distractio* (of the mind) | "distraction" | 0152D, 0157B. The pre-set "distended" is reserved for *distendi* only; *distrahi/distractio* is a different verb and is not given the physical rendering. |
| *conditor* | "Founder" | 0140C, 0142D — kept distinct from *Creator* "Creator", both of which Hugh uses in the same paragraph. |

## Version-divergence watch (the work's defining hazard)

No `aliam translationem`, `aliam interpretationem`, `nostra habet`, `Hebraeus` or `LXX`
passage falls inside chunks 0009–0018. Homily XII (the *Oculi stultorum in finibus terrae*
/ *nostra habet: Stultus in tenebris ambulat* homily) lies **beyond** this range.

Two internal divergences in Migne's own repeated lemmata were nevertheless found and are
preserved rather than harmonized:

- **0150A vs 0154B — Eccl. 1:13, *sapienter* vs *prudenter*.** The Homily III lemma
  (0150A) and every later quotation print *quaerere et investigare **sapienter***; the
  Homily V lemma at 0154B prints *quaerere, et investigare **prudenter***, then reverts to
  *sapienter* three lines later. Rendered "wisely" and "prudently" respectively. Hugh's
  whole dialogue at 0154C–0155A turns on the adverb ("Tolle, ait, sapienter"), so
  flattening the one *prudenter* would hide a real variation in the printed lemma.
- **0155D — Eccl. 1:13, the bracketed doublet.** Migne prints
  *ut [distendantur] occuparentur in ea*. The bracketed word is the reading Hugh expounds
  for the next two whole homilies (VI is titled with it), the unbracketed one is the
  Vulgate's. Rendered "*that [they may be distended] they might be occupied therein*" —
  the brackets kept in place, both readings Englished, because the bracket is not an
  apparatus siglum here but a second reading of the lemma that the exposition depends on.
  This is the one place in the batch where matter inside Migne's own square brackets is
  translated rather than passed through; flagged for the merge.
- **0159C — Isa. 5:20** is printed with the members inverted relative to the Vulgate
  (*ponentes tenebras lucem, et lucem tenebras*, i.e. "putting darkness light, and light
  darkness", against Vulg. *lucem tenebras et tenebras lucem*). Rendered as printed, in
  the printed order; the scattered italic runs of the plate are reproduced 1:1.
- **0143C — Jer. 2:13** prints *Duo peccata fecit populus meus* where the Vulgate has
  *duo enim mala fecit populus meus*. Rendered "two sins", as printed.
- **0147A — John 1:3–4** prints *omnia in ipso vita erant, et vita erat lux hominum*
  (Vulg. *quod factum est in ipso vita erat*). Rendered as printed, plural verb included.
- **0158A** cites *Quid enim prodest homini si universum mundum lucretur…* under the note
  `(Matth. VI.)`; the verse is Matt. 16:26. The printed reference stands (refDisplay rule);
  no correction proposed.

## Text-critical cruces

**0139B — Sap. V, *Ibunt directe emissiones*.** Migne prints the clause without
*fulgurum*, so *emissiones* is left without its genitive. Rendered literally, "*They shall
go,* he says, *straight, the things sent forth*", rather than supplying "of lightnings".

**0142B — dittography, `[d: …]`.** The plate sets *sic oculus instrumentum est ad
percipiendum verbum hominis, sic oculus instrumentum est ad percipiendum verbum
Creatoris.* The run *sic oculus … verbum* is printed twice, the first time closing with
*hominis* (repeated from the preceding *auris … verbum hominis*), the second correctly
with *Creatoris* — a compositor's eye-skip, then a reset. Both occurrences are rendered
per Pattern 11 and the second is wrapped `[d: …]` (the marker takes the repeated run only;
*of the Creator* falls outside it). No word supplied, none dropped.

**0143B — carried type, `[sic: *cultatem*]`.** Across the column break the plate prints
*rerum difficultatem | cultatem sermone explicare non potest*: the tail of *difficultatem*
is set a second time as a catch-fragment. *cultatem* is not a word, so it is carried
untranslated in italics inside a `[sic: …]` marker at its printed position, immediately
after the column anchor, and *difficultatem* itself is translated normally.

**0144A — *vel vivendo vel audiendo*.** The argument requires *videndo* (the whole
paragraph opposes eye to ear: *non satiatur oculus visu, nec auris impletur auditu*).
Migne prints *vivendo*, a real word, so it is rendered as ordinary English — "whether by
living or by hearing" — per Pattern 12's boundary. Conjecture: *videndo*, near-certain.
No marker; the crux carries the conjecture.

**0144C — *quam producet supervenerint in futuris*.** Unconstruable as printed:
*supervenerint* (future perfect / perfect subjunctive, 3 pl.) sits inside a relative
clause whose verb is already *producet*. Almost certainly displaced from the parallel
sentence eleven lines above (*ex futurorum comparatione **cum supervenerint***, 0147D).
Rendered as closely as the printed words allow — "…the same likeness which it will bring
forth they shall have come upon in things to come" — with no word supplied, deleted, or
re-cased. The English is as broken as the Latin, deliberately.

**0145A — *fuit quando nullum tempus fuit*.** Impersonal *fuit quando*; "there was **[a
time]** when there was no time", with the supplied noun in square brackets per the
corpus's supplied-word convention. The bracketed word is ours, not Migne's.

**0149C — *Et non est jam vel quod factum est*.** The *vel* answers nothing: the parallel
sentence just above has *quod fuit … et quod factum est*, so a first member (*vel quod
fuit*) appears to have dropped. Rendered with the *vel* carried — "And there is not now
even that which hath been done" — and no member supplied.

**0150A — *ecce ille qui dedit Deus sapientiam et intelligentiam*.** *qui* cannot be
nominative here; the sense demands *cui* ("he to whom God gave"). Per Pattern 7a mechanism
5 (reference mis-bound) the printed pronoun is not silently re-bound: rendered "behold, he
who God gave wisdom and understanding to lay it open", which reproduces the printed case.
Conjecture: *cui*.

**0150A — *Ergo non meditabimur … et requiescere poterit cor nostrum donec inveniat
illam*.** The printed sentence says the opposite of Hugh's argument twice over: the
context is an exhortation to meditate and to be restless until wisdom is found. Both
printed readings are carried — the *non* of *non meditabimur*, and the **affirmative**
*requiescere poterit* — so the English reads "Therefore we shall not meditate on his
commandments, nor shall we search out her paths, and our heart will be able to rest until
it find her." Conjecture: the clause was *nec requiescere poterit*, and the opening was a
question. **No negation supplied and none removed** (Pattern 7a). This is the sharpest
polarity crux in the batch; a later reader should not "fix" it without the plate.

**0150B — *si inventam non possumus, tamen quaesitam doceamus*.** The verb of the first
member is not printed; supplied in brackets as ours — "if we cannot **[teach]** her as
found".

**0152A — *Et quod vult aut non esse quod est, aut esse quod non est: hoc utroque pejus
est*.** The preceding sentence has just said the mind *nec … velle possit* either of these
two things; the printed *vult* therefore asserts what the argument has just denied.
Rendered as printed ("And that it wills either that what is should not be, or that what is
not should be"), no negation supplied. Conjecture: *non vult*.

**0153A — *novissimae ad appetitum voluptatis inflammatur*.** *novissimae* for the adverb
*novissime*. A Latin case-ending has no English exponent (Pattern 9), so the adverb is
rendered "lastly" and the printed form is recorded here rather than carried into the text.

**0154B — *ibi deficiendo veraciter directionem mei agnovi*.** *directionem* ("the
straightening / direction") stands where the sense wants *dejectionem* ("my own casting
down") — the clause is the antithesis of *supra me tumui*. Real word; rendered literally,
"there by failing I truly recognized the direction of myself." Conjecture: *dejectionem*.

**0155D — *omnes non attentos et exspectantes jam fecerat*.** The grand promise is said to
have made everyone *not* attentive, in a sentence whose next line asks who could have
expected so little from so great a promise. The printed *non* is carried: "had already
made all men not attentive and expectant." Conjecture: the *non* is intrusive. Pattern 7a,
mechanism 2 — recorded rather than repaired.

**0156C — *quasi per rivulos quosdam visibilium … saltem fugere conatur*.** The image is of
drawing water through channels, so *sugere* ("to suck") is expected; *fugere* is printed.
This is the exact class Pattern 12 names as *not* taking a marker (a real word merely
wrong), so it is rendered as ordinary English — "it attempts at least to flee, with parched
inward parts" — and the conjecture lives here.

**0157C — *quoniam si poenam habent a beatitudine alienam, culpam non habet…*.** Number
disagreement between *habent* and *habet* within one sentence, both governing the same
subject (*haec occupatio*). No English exponent for the Latin ending on the second verb;
rendered as printed ("if they have a punishment … it has not a fault"), left alone per
Pattern 9.

**0158B — *Preposui, ait, in animo meo…*.** Every other occurrence of this lemma in the
work prints *Proposui*. *Preposui* (= *praeposui*, "I set before") is a real word, so it is
rendered literally — "*I set before,* he says, *in my mind…*" — rather than read as the
expected *Proposui*. Conjecture: *Proposui*, near-certain.

**0159B — *in omnibus quae fiunt sole*.** The preposition *sub* is absent, in a phrase the
same sentence prints correctly twice. *sole* alone cannot be rendered in the slot, so the
bare printed word is carried untranslated in italics inside `[sic: *sole*]`; the rest of
the clause is translated. Conjecture: *sub sole*.

**0160A — *Nunc ergo perversi et stultitam sunt ad correctionem perversitate difficiles,
quam multitudine contra veritatem audaces*.** *stultitam* is a non-word run: it conflates
*stulti* with the correlative *tam* that *quam* later answers. Carried whole and
untranslated inside `[sic: *stultitam*]` per Patterns 10 and 12. **Per Pattern 7a′, the
correlative force quarantined inside the marker is still carried by the translated text**:
the English reads "are **as** hard to correction by their perversity **as** they are bold
against truth by their multitude." The *stulti* inside the marked run is deliberately not
translated. Conjecture: *stulti tam*.

**0160A (same sentence, punctuation)** — the plate prints *…infinita est stultorum
multitudo Nunc ergo…* with no stop. Per Pattern 8 no stop is supplied; the English runs on
identically.

## Non-defects checked and deliberately left alone

- **0157D, 0159C** — column anchors printed inline mid-sentence and inside an italic
  citation run (*(Job [0159C] XXX)*). Reproduced in place; not moved to a paragraph break.
- **Inline citations in italic parentheses** (*(Job XXX)* at 0159C) are Migne's running
  references, not Pattern 4 `[f: …]` tails: this is homiletic exposition, not a florilegium.
  Left as printed, untranslated, untagged.
- **0149D — *Vanitas vanitatum, vanitas vanitatum, et omnia vanitas*.** The doubling is
  Eccl. 1:2's own, not a compositor's; no `[d: …]`.
- **0143B — *persemetipsum* set as one word**; attested medieval agglutination (Pattern 9),
  translated normally.
- **0152A — *adversionem mentis*** for *aversionem*; attested spelling, translated
  normally, no marker.
- **0160C — *involumentum***; a formed word, translated "entanglement", no marker.
- Column-band sequences in this range (0139A–0139D, 0150A–0150D, a D-band followed by an
  A-band at 0151C→0151D, 0157C→0157D) are positional quarter-guides and are transcribed
  where they fall. No text breaks mid-word or mid-construction across any anchor in the
  batch.
# Cruces — 11065 (Hugh of St Victor, *Homiliae in Ecclesiasten*), chunks 0019–0027

Columns 0163A–0186A. Homilies VII (cont.), VIII, IX, X, XI.

---

## Work-wide conventions adopted in this batch

Recorded so the merge can reconcile with the other five agents' batches. Only
decisions **not** pre-set in the batch prompt are listed.

1. **`transire ad contemplandam sapientiam` → "to pass over to contemplate
   wisdom"**, uniformly, including the Eccl. 2:12 lemma `Transivi ad
   contemplandam sapientiam` → "I passed over to contemplate wisdom." The whole
   of Homily X turns on the etymology Hugh gives at 0174A (`Hebraeus transiens
   interpretatur`), so *transire* must read as the same verb in the lemma, in the
   etymology, and in the twenty-odd prose repetitions. "Cross over," "go over,"
   and "migrate" are used nowhere for *transire*; `migrat` @0179C is rendered
   "removes," which keeps it distinct.
2. **`Sapientia` / `sapientia` → "Wisdom" / "wisdom", following Migne's
   capitalization 1:1**, and feminine ("she / her") throughout — agreed with the
   0028–0036 batch, reached independently. Hugh's Moses/Shunamite figure at
   0175B–0176C depends on wisdom being a woman set against the Ethiopian wife.
3. **`thou` vs `you`.** `thou` is used for (a) scripture as quoted, and (b) the
   sustained apostrophe to a *named figure* — Adam and the *cor humanum* through
   almost the whole of Homily VIII (0166A–0169D) and Homily IX (0170A–0172B),
   where Hugh is re-staging Gen. 3:9 and the second person is dramatic, not
   didactic. Generic second-person address to the *reader* is `you`
   (`Si habueris oculos` @0182A; `Si ipse praecedit, et ut sequeris` @0180B;
   `Nam secundum aliquid omnia hoc tibi esse incipiunt` @0173D). This extends the
   0028–0036 batch's rule rather than contradicting it: that batch reserved `thou`
   for apostrophe to God or Wisdom and did not meet an Adam-apostrophe.
4. **`species` → "appearance"** (never "species," "form," or "beauty"), because
   Homily IX @0171C–D turns `species rerum visibilium` against `veritas`, and
   Homily X @0173A repeats `vidit speciem, non praevidit corruptionem`.
   `pulchritudo` → "beauty," `decor` → "comeliness," kept lexically distinct in
   0185A–D where Migne pairs them.
5. **`folia` → "leaves", `umbra` → "shadow" (or "shade" where the sense is the
   cast shelter rather than the dark image).** Homily IX's whole figure is the
   fig-leaves of Gen. 3:7 read as the *species rerum visibilium*.
6. **`elatio` → "elation"** (not "pride"), kept distinct from `superbia` →
   "pride" and `tumor` → "swelling"; all three occur in one sentence at 0163B.
7. **`occupatio` → "occupation"** (pre-set for *occupatio pessima*) is used for
   the bare noun too — `curiosus occupationem invenit` @0164A, `ad occupationem
   vanam converteris` @0169D — so the Eccl. 1:13 lemma stays audible.
8. **`finis` → "end"** throughout Homily XI, never "limit" or "boundary," since
   0183B–0184B is an extended play on *finis* as both terminus and *caput*.
   `terminus` @0183A, where it stands beside *finis*, is "limit."
9. **`accidiatus` @0164C → "seized with accidie."** The medieval technical term
   is kept rather than flattened to "listless"; *acedia* is a named vice and Hugh
   is naming it.
10. **Migne's own bracketed matter is reproduced verbatim, untranslated** —
    `[urceos]` @0171A, on the same footing as `[ *al.,* …]`.
11. **Printed parentheses are reproduced** — `(esse coeperat)` @0167B.

---

## Version divergence — Hugh's competing Latin Ecclesiastes texts

This batch contains **no** `aliam translationem` / `nostra habet` / `Hebraeus` +
`LXX` version-collation. The one place a second witness is invoked is @0182C–D:

- **0182C–D, `Aliam itaque Scripturam interrogemus`.** Hugh has just quoted
  Eccl. 2:14 as `Sapientis oculi in capite ejus; stultus in tenebris ambulat`
  (his lemma, @0182B). He then cites, as *another Scripture*, `Oculi sapientis in
  capite ejus; oculi autem stultorum in finibus terrae` — Prov. 17:24. The two
  are rendered with their printed differences intact, including the word order
  (`Sapientis oculi` in the lemma, `Oculi sapientis` in the Proverbs citation),
  because Hugh's whole argument is that the second text supplies what the first
  leaves unsaid: *where* the fool's darkness is. Neither was normalized toward
  the other or toward a conventional English. Migne prints no `[n: …]` for the
  Proverbs text.
- The `Hebraeus` of 0174A–B is **not** a version-siglum. It is the etymological
  gloss `Hebraeus transiens interpretatur` (Jerome's *Liber interpretationis*),
  and it is rendered as a proper name plus its interpretation, not as a witness.
  A merge scan counting `Hebraeus` occurrences must not treat these as collation
  points.

---

## Text-critical notes, by column

### 0164C — `accidiatus`
Migne prints `attritus et accidiatus`. *Accidiatus* is a well-attested medieval
formation from *acedia* and is **not** a defect (Pattern 9); no marker. Rendered
"seized with accidie."

### 0167A — `Quaeris ut tuam ignorantiam arguat; ambulat ut instabilitatem tuam ostendat.`
Printed `Quaeris` (2nd sing.) with a 3rd-sing. purpose clause whose subject must
be *veritas*, exactly as in the parallel clause `ambulat ut … ostendat`. The
argument requires *Quaerit* ("she seeks thee, that she may convict thy
ignorance"), and the preceding sentence has just made truth the subject
(`clamat tibi, et dicit`). **Rendered as printed** — "Thou seekest, that she may
convict thy ignorance" — under Pattern 7. Conjecture: *Quaerit*.

### 0167B — `neque abiit indirectum elongans`
Printed `indirectum` as one word, where the same page prints `in directum non
vadens` as two, sixteen lines earlier, in the same sense. This is a run-together
of Pattern 10 shape, but *indirectum* is also a real Latin word, so under the
Pattern 12 boundary it is rendered as ordinary English rather than carried:
"nor did it go off straight on, drawing far away." Conjecture: *in directum*.
No `[sic: …]`. Flagged so a later sweep does not read this as a considered
choice about *in-directum* ("crookedly"), which would reverse the sense.

### 0168C — missing terminal stop after `effundit`
Migne prints `… ad avaritiam se effundit Etenim prius fructum ad esum expetit`,
with no point and a capital *E*. **Preserved** under Pattern 8: the English runs
"…pours himself out toward avarice For indeed he first sought after the fruit…"
No stop was supplied.

### 0171B — `Cave ne in umbra filiorum decipiaris`
Printed `filiorum` ("of the sons") where the argument, and the identical phrase
five lines later (`Hanc ergo umbram foliorum suspectam habe`) and again at 0171C,
0171D, 0172A and 0172B, all read `foliorum` ("of the leaves"). The clause is
about Adam hiding under fig-leaves. **Rendered as printed** — "in the shadow of
the sons" — under Pattern 7. Conjecture: *foliorum*, near-certain (single-letter
minim confusion). This is the single most likely candidate in the batch for a
silent repair, and it was deliberately not made.

### 0170C — `Intra avaritia sub obtentu parcimoniae`
Printed `Intra` where the sentence has no other finite verb and *avaritia* is
nominative. Rendered as an adverbial "Within, avarice under the cover of thrift;
and while it persuades the mind…", which is as close as the printed words allow.
Conjecture: *Intrat avaritia*, "avarice enters." Logged rather than emended.

### 0172A — `stulti, et imprudentes fiunt tibi`
Printed `tibi` (2nd sing. dat.) in a sentence whose subjects are the third-person
*filii hujus saeculi*; *sibi* is what the sense requires ("they become foolish
**to themselves**"). **Rendered as printed** — "they become foolish and imprudent
to thee." Conjecture: *sibi*.

### 0171D — `et vasa pretiosa divitiae et pompae, et gloria`
No comma after `pretiosa` in a list that is otherwise fully pointed. Preserved
(Pattern 8): "and precious vessels riches and pomps, and glory."

### 0169C — `Quocunque perrexerit, fraudaberis`
3rd-sing. subjunctive/future-perfect `perrexerit` governing a 2nd-sing. main verb
`fraudaberis`, in a passage otherwise addressed to Adam in the second person.
Rendered as printed: "Wherever he shall have gone, thou wilt be defrauded."
Conjecture: *perrexeris*. No English exponent is lost either way, but the
person-shift is real and is not ours.

### 0169C — `non ibi requiem invenire poteris, ubi es? quia veritas ibi non est`
Migne sets a question mark inside the sentence, after `ubi es`, and continues
with a lowercase `quia`. **Preserved** (Pattern 8): "…thou wilt not be able to
find rest there, where art thou? because the truth is not there where thou art."

### 0175C — `Hujus non enim Sunamitis, id est sapientiae, amorem significabat ignis ille`
**The polarity crux of this batch.** Migne prints `non`. The sentence is the hinge
of the Moses figure: the burning bush that burns without being consumed has just
been set against the Ethiopian wife, and the very next clause is `et ideo Moyses,
postquam transivit ad videndam visionem … non amplius teneri potuit Aethiopissae
uxoris amore` — an inference that only follows if the fire *did* signify the love
of the Shunamite, i.e. of wisdom. The `non` makes Hugh's own *et ideo* a
non sequitur.

**The negation is carried** (Pattern 7a): "For that fire, by which the bush was
burning and was not burned up, did not signify the love of this Shunamite, that
is, of wisdom; and therefore Moses…" Conjecture: the `non` is a plate defect —
either intrusive, or displaced from a lost `nonne` (`Hujus enim Sunamitis … amorem
nonne significabat ignis ille?`, which would give the interrogative Hugh uses
constantly in this homily). No repair was made in the text, and no `[sic: …]`,
because `non` is a real word correctly set: only the reading is wrong.

### 0176B — `Illa propter se appetenda est, ista propter se fugienda propter nos sustinenda.`
`illa` = *sapientia*, `ista` = *vita carnis*, on the medieval remote/nobler vs
near/baser use of *ille* / *iste*, not on the classical former/latter rule (which
would invert the sense). Rendered "That one is to be sought after for her own
sake; this one is to be fled for its own sake to be endured for our sake." The
missing comma before `propter nos` is preserved. **Not** a defect; recorded so a
sweep does not reverse the demonstratives.

### 0179B — `Quid est sapientia? cognocere et amare bonum.`
`cognocere` is not a word. **Carried into the English untranslated, in italics,
inside `[sic: *cognocere*]`** per Patterns 7 and 12. Conjecture: *cognoscere*,
certain — the same verb is spelled correctly three times in the surrounding
fifteen lines (`cognoscere et odisse`, `cognovisse malum`, `cognoscere et amare
bonum`). This is the only carried type in the batch.

### 0179C — `cum sapientia videtur et quo ipsa est ut diligatur`
Printed `quo` where the parallel clause four words later has `quod ipsa non est`.
Rendered "and what she is, that it may be loved," i.e. as though *quod*.
Conjecture: *quod*. Flagged because the rendering silently regularizes a
one-letter form that has no English exponent; nothing else in the clause was
touched.

### 0180D — `Quod longe enim putas homo est a Deo`
Printed `Quod` for the expected `Quam`. Rendered "For how far dost thou think man
is from God" — the interrogative adverb is the only construal the rest of the
sentence permits. Conjecture: *Quam longe*.

### 0178D — `Et sit stultus nihil videt, ergo stultitia excaecat.`
Printed `sit`. The preceding sentence is the exact structural twin — `Si enim
sapiens oculos illuminatos habet, ergo sapientia illuminat` — so the protasis
marker must be *si*. As printed the clause will not construe at all: `sit` is a
subjunctive with no place in the sentence, and there is nothing to render.
**Carried untranslated inside `[sic: *sit*]`** (Pattern 7's "if you cannot make
the printed reading say anything at all"): "And [sic: *sit*] the fool sees
nothing, then folly blinds." Conjecture: *si*.

### 0182A / 0182B — `Si habueris oculos quo illa attingit;`
A protasis with no apodosis; Migne closes it with a semicolon and starts a new
conditional. Preserved as a fragment — "If you have eyes where she reaches; but
if you have eyes where the light is not…" — rather than joined to the preceding
sentence. Pattern 8.

### 0185D — `quando magis priora faciendo`
Printed `quando` in the second limb of a `tanto … quanto` correlative
(`tanto minus semper posterioribus … contulit, quando magis priora faciendo …
consumpsit`). Rendered as the correlative requires ("so much the less … as she
the more"). Conjecture: *quanto*. Recorded because the correlative is what
carries the argument's comparative force, which Pattern 7a mechanism 4 warns is
the easiest thing to reverse.

### 0185D–0186A — the "wearied Wisdom" passage
`Fortassis fatigata erat priora illa faciendo …` and what follows attribute
exhaustion and diminishing power to Wisdom herself. This is Hugh stating a
position he will demolish (the refutation begins in the next chunk, 0186A ff.),
not his own doctrine. **Rendered straight, with no softening and no editorial
signal**, since Migne prints none. Flagged only so that a reader of this chunk in
isolation — or a later sweep hunting doctrinal anomalies — does not read it as a
defect.

### Column bands
`[0180A]` is followed later in the same chunk by `[0181A]`, and the standalone
anchors `[0172C]` and `[0183A]` sit on their own line after a `## ` head. Both are
normal transcription behavior (known false positive 1); no text is broken across
any anchor in this batch. Anchor sequences were checked 1:1 against the Latin
twins for all nine chunks.
# Cruces — 11065 (Hugh of St Victor, *Homiliae in Ecclesiasten*), chunks 0028–0036

Columns 0186B–0209D. Homilies XI (cont.), XII, XIII.

---

## Work-wide conventions adopted in this batch

Recorded here so the merge can reconcile with the other five agents' batches. Only
decisions **not** pre-set in the batch prompt are listed.

1. **`Sapientia` / `sapientia` → "Wisdom" / "wisdom".** Migne's capitalization is
   followed 1:1: capitalized where the plate capitalizes, lowercase where it does
   not. Hugh alternates within a single sentence (0188A–B) and the alternation is
   data, not noise. Wisdom is feminine throughout ("she / her"), following the
   Latin gender, which Hugh's imagery (right hand, left hand, bride) relies on.
2. **`thou` vs `you`.** `thou` is reserved for (a) scripture as quoted, and
   (b) direct apostrophe to God or to Wisdom (`O Sapientia, quam late
   diffunderis` @0186C; `Quid gloriaris in malitia` @0202C and the sentences
   Hugh builds around it). Second-person address to the *reader* — far commoner
   — is `you` (`Si enim ascendis in coelum justitiae` @0187B; `Vis scire quod
   Christus caput est` @0194D; `Quare ergo tu hujus mundi… metuas` @0206A).
3. **`sapere` → "savor", not "mind" or "be wise."** Forced at 0195B–C, where the
   Colossians 3 lemma (`quae sursum sunt sapite`) is immediately glossed
   `Quid est sapere? … Amor enim ipse sapor est` — the whole gloss is a pun on
   *sapere / sapor / sapientia*. "Mind the things above" (the usual English)
   destroys it. Applied to every occurrence of *sapere* in this batch, including
   `qui terrena sapiunt` @0195D ("who savor earthly things").
4. **`sententia` → "sentiment"** throughout (pre-set), including the many places
   where Hugh means the printed clause of Ecclesiastes he is about to expound
   (`Et nota quomodo se consequitur sententia veritatis` @0196D). Rendered
   "sentence" nowhere in this batch.
5. **`distendi` family → "distend"** (pre-set), extended to the noun:
   `distensio laboris` @0200C → "the distension of labor"; `distendit se ac
   replet` @0201B → "distends himself and fills himself".
6. **`consumo` vs `consummo` kept lexically distinct** — "consume" vs
   "consummate". Migne sets them adjacently and antithetically at 0192C–D
   (`morte consumuntur … damnatione consummatur`), so levelling them would
   destroy the argument.
7. **`fornax` / `caminus` kept distinct** ("kiln" / "furnace") in the Eccli. XXVII
   citation @0202D, because Migne's line pairs them.
8. **Inline citation parentheses that are NOT `[n: …]` markers** (`(Psal. XXVI)`
   @0202C, `(Eccle. VII)` @0192D–0193A) are kept verbatim Latin, on the same
   footing as `[n: …]` contents. Both happen to have a column anchor set inside
   them; the anchor is reproduced in place.
9. **The `[qua]` bracket** @0199B is Migne's own bracketed variant and is
   reproduced verbatim, untranslated, like `[ *al.,* …]`. Same for `[pessundatus]`
   @0202B.

---

## The two-version hazard in this batch

Homilies XII and XIII sit squarely on the competing-version problem, and the two
Latins are kept verbally distinct in the English wherever Hugh sets them side by
side:

- **Head of Homily XII** (0190C, repeated as `(cont.)` on 0031/0032/0033/0034):
  `secundum aliam translationem: Oculi stultorum in finibus terrae; ubi nostra
  habet: Stultus in tenebris ambulat`. Rendered "according to another
  translation: **The eyes of fools are in the ends of the earth**; where our copy
  has: **The fool walks in darkness**." The whole of chunk 0032's opening
  (0196B–0196C) is an argument that the two are not contradictory — "both seem to
  be affirmed, that they see and that they do not see" — so the two wordings must
  never be levelled toward a single conventional English. They are not.
- **Eccl. 2:14 quoted a third way** @0197A, from the Vulgate as Hugh's running
  text: `Sapientis oculi in capite ejus stultus autem in tenebris ambulat` → "The
  eyes of a wise man are in his head, but the fool walks in darkness." This third
  form is the *nostra habet* wording, and is rendered identically to the head's
  *nostra habet* half — deliberately, since it is the same version.
- **Eccl. 7:5 (Eccle. VII) is quoted twice in this batch, in two different
  Latins**, and the two Englishes differ exactly as the Latins do:
  - @0192D–0193A: `Cor stultorum ubi laetitia est et cor sapientium ubi
    tristitia` → "The heart of fools is where mirth is, and the heart of the wise
    where sadness is."
  - @0203C: `Cor stulterum ubi laetitia, et cor sapientium ubi tristitia est` →
    "The heart of [sic: stulterum] is where mirth is, and the heart of the wise
    where sadness is." (`stulterum` is broken type; and note `est` has moved
    clauses between the two quotations.)
  Both invert the Vulgate's clause order (`Cor sapientium ubi tristitia est, et
  cor stultorum ubi laetitia`). Rendered as printed in both places, and the
  inversion is not corrected.
- **Eccl. 2:24–26** is quoted twice in chunk 0034 with a spelling divergence
  Migne himself does not flag: `curam surperfluam` @0202C (broken) and `curam
  superfluam` @0203D (correct), and `Ut addat et congreget` @0204A against the
  first quotation's `ut laboret, ut distendatur, et congreget`. Both forms stand.

---

## Chunk 0028 — cols 0186B–0188C

- **@0186A–B `quia summa esset pulchritudo in singulis quaelibet excellens illa
  foret, et caeteris omnibus eminentior, non esset omnis pulchritudo in
  universis.`** Unconstruable as printed: the protasis has no `si` and the
  apodosis has no connective. Rendered as closely as the printed words allow
  ("because the highest beauty would be in individual things — whatever one there
  were would be surpassing that one, and more eminent than all the rest — not
  every beauty would be in all things together"). Conjecture: `quia si summa
  esset pulchritudo in singulis, quaelibet excellens illa foret …; non esset …`.
  Not emended; the printed `non` is carried.
- **@0186C `singula quaeque ad terminum suum promonens`.** `promonens` is not a
  word. Carried untranslated per Patterns 7/12: `[sic: *promonens*]`. Conjecture:
  `promovens` ("advancing"), near-certain from `ad terminum suum`.
- **@0187A `et anima eorum in malis tabescat`** (Psal. CVI [107]:26). Vulgate has
  `tabescebat` (imperfect indicative); Migne prints the present subjunctive, and
  the italics stop before it, so it is grammatically Hugh's clause rather than the
  quotation's. Rendered "wastes away." No `[var:]` — the divergence is of mood and
  tense only and does not turn the sense.
- **@0187B `et descendunt usque ab abyssos`.** The same verse is quoted twice in
  four lines; the first time Migne prints `usque ad abyssos`, the second `usque ab
  abyssos` — a preposition that cannot govern the accusative that follows it.
  Rendered literally as printed ("they descend even from the depths"), which
  contradicts the first quotation four lines above. **The contradiction is the
  plate's and is left standing.** Conjecture: `ad`, certain from the first
  quotation and from the Vulgate.
- **@0188A `quia non esset ubi esse posset malitiam`.** `malitiam` accusative
  where the construction wants a nominative subject of `esse posset`. Rendered
  "because there would be nowhere that malice could be." Gender/case has no
  English exponent here (Pattern 9); no marker, no emendation.

## Chunk 0029 — cols 0188D–0190B

- **@0188C–D `Non enim malitia Sapientiam praecedere potest, ut vel ante illius
  exortum prior inveniatur, vel post illius defectum, posterior quia et prius
  corruptione invenitur …`** The comma after `posterior` and the absent
  punctuation before `quia` leave the sentence hanging. Rendered with the printed
  word order and the printed `Non`; no punctuation supplied (Pattern 8).
- **@0189C `Sed et si quando exterius violentiam pravis voluntatibus adhibendis,
  sive plectendis adhibet`.** `adhibendis` and `adhibet` in one clause: the
  gerundive duplicates the finite verb, and the sentence does not construe as it
  stands. Rendered as closely as the words allow ("applies violence to crooked
  wills to be applied to, or to be chastised"). Possible intended reading:
  `coercendis sive plectendis` — but the plate gives no warrant for choosing one
  conjecture, so none is adopted.
- **@0189D `Restat nunc maximus ille et supremus Sapientiae excursus, a fine usque
  ad finem: qui nullum habent finem.`** `qui … habent` — masculine singular
  relative with a plural verb, and the antecedent is the two `fines`. Rendered
  "which ends have no end." Log only; Pattern 9 (no English exponent for the
  Latin agreement).
- **@0189D `sive promovende, sive deserendo`.** `promovende` is not a form.
  Carried: `[sic: *promovende*]`. Conjecture: `promovendo`, certain from the
  parallel `deserendo`.
- **@0189D `ut per justitiam eatur ab beatitudinem`.** `ab` + accusative: does not
  construe, and rendering the preposition literally ("from blessedness") would
  assert the opposite of the clause's evident direction while looking like a
  considered reading — the exact trap Pattern 7a′ describes. The run is therefore
  carried whole and untranslated, `[sic: *ab beatitudinem*]`, so the reader sees
  Migne's type and nothing is silently supplied. Conjecture: `ad beatitudinem`,
  certain from the balancing `perveniatur ad damnationem` in the same sentence.
  **Nothing translated in this sentence depends on the marked run for its
  polarity** — the antithesis justice/iniquity is carried in the surrounding
  words, which are rendered in full.
- **@0190B `et ab omnipotenti bona mala esse permissa sunt`.** Construes as
  `bona … permissa sunt esse mala ab omnipotenti` — "good things have been
  permitted by the Omnipotent to be evils" — and is so rendered. `omnipotenti`
  stands alone as a substantive ablative. No emendation.
- **@0190B `non ut mala dona fiant`.** `dona` where the argument wants `bona`
  ("not that evils may become goods"). Rendered as printed: "not that evils may
  become gifts." Conjecture `bona`, likely but not certain — `dona` is a real
  word and the sentence, though odd, is not unconstruable, so Pattern 12 keeps it
  as ordinary English with no marker.
- **@0190B `Ergo aliqui faciunt mala propter quod esse permissa sunt: et bonum
  faciunt ipsa et mala et non ipsa mala faciunt bonum`.** Two problems in one
  sentence, both left standing. (i) `aliqui` (masc. nom. pl., "some men") where
  the neuter `ipsa` two clauses later, and the whole preceding argument (`si nihil
  facerent … omnino mala non essent`), require `aliquid` — "evils do *something*."
  (ii) The result, rendered literally, is a flat self-contradiction: "both they
  themselves and evils do good, **and** evils themselves do not make good." Both
  the affirmative and the printed `non` are carried. Conjecture for (i):
  `aliquid`, near-certain.

## Chunk 0030 — cols 0190C–0193B

- **@0190C `quia invenimus finem, et finem de quibus Scriptura locuta est`.**
  Singular `finem` twice with plural `de quibus`. Rendered "we have found an end,
  and an end, concerning which Scripture spoke" — the doubling is the point (the
  two ends of Wisd. 8:1), so the repetition is preserved rather than collapsed.
  Not marked `[d:]`: this is not a compositor's doubling but Hugh's own figure.
- **@0191A `Et si dicimus de terra ista, quod in finibus ejus oculi stultorum
  sunt quomodo hoc stare non poterit.`** Printed with a full stop, not a question
  mark, although the clause is interrogative; and `non` makes the sense the
  reverse of what the following sentence argues. Both the stop and the `non` are
  carried (Patterns 7a, 8): "how this will not be able to stand."
- **@0191B `qui a terrena bona tota, mentis intentione semper ambiunt`.** `a` +
  accusative; does not construe, and *ambiunt* is already transitive, so the
  preposition is intrusive. The run is carried whole, `[sic: *a terrena bona*]`,
  rather than rendered with an invented preposition or silently dropped.
  Conjecture: `ad terrena bona`, or simply `terrena bona` with `a` deleted.
- **@0191D `et invisibilia supra coelum nostrum, invisibilia sub terra nostra.`**
  The second `invisibilia` should be `visibilia`: the whole paragraph is built on
  the antithesis (`Invisibilia intus sunt, visibilia foris sunt. Ergo invisibilia
  supra sunt, visibilia subtus`), and the immediately preceding clause states it
  correctly. Migne's repetition makes the sentence contradict its own premise.
  **Rendered as printed** — "and invisible things are above our heaven, invisible
  things beneath our earth" — because this is precisely the class of defect the
  edition exists to expose. Conjecture: `visibilia sub terra nostra`, certain.
- **@0193A `In omnibus operibus tuis omnis diebus vitae tuae`** (Eccli. VII, 40).
  `omnis diebus` does not construe; carried as broken type inside the italic lemma
  (`[sic: omnis diebus]`, no nested italic marker, per Pattern 10). Conjecture:
  `omnibus diebus`. Note that the Vulgate of Eccli. 7:40 has no "days" clause at
  all (`In omnibus operibus tuis memorare novissima tua`), so the phrase is either
  Hugh's expansion or a conflation; that question is not adjudicated here.
- **@0193A `et in aeternum non peccabis`** — the printed `non` is carried
  ("and for ever thou shalt not sin").

## Chunk 0031 — cols 0193C–0196A

- **@0193C `*Omne* enim *datum optimum, et omne donum perfectum desursum est
  descendens a patre luminum*`** (Jac. I, 17). Migne breaks the quotation into two
  italic runs around `enim`. English word order cannot put "for" between "every"
  and "best giving," so the two runs are kept adjacent and `For` is moved to the
  head of the sentence. The run boundary is preserved; no words are moved across
  it.
- **@0194C `sed in tentationem suam deorsum curvantes`.** `tentationem` where the
  antithesis with `intentione` (three lines later, `mentis intentione ac
  desiderio`) suggests `intentionem`. Rendered as printed ("bending downward into
  their own temptation") — a real word, sense intact, no marker (Pattern 12).
- **@0194D `quae in canticorum dilectum suum commendans`.** A bare genitive
  `canticorum` with no governing noun (`in Canticis canticorum` expected).
  Rendered "in Canticles," treating the genitive as the book's title; no word
  supplied in brackets.
- **@0195A–B `et caput Christi Deus et unum caput Christus, et caput Christi Deus;
  sicut unum principium Christus, et caput Christi Deus`.** `et caput Christi
  Deus` is set three times in two lines. **Not** marked `[d:]`: Pattern 11 covers
  an adjacent doubling of one run, and these are separated by other clauses, so
  the repetition may be Hugh's own incantatory figure rather than a compositor's.
  All three are rendered.
- **@0195B `*Ego,* inquit, [0195B] *principium, qui et loquor vobis*`** (Joan.
  VIII, 25). Note that the column anchor falls *between* `inquit,` and the second
  italic run; it is reproduced at exactly that position. `inquit` stays inside the
  quotation per Pattern 5 (there are no guillemets here, but the run boundaries do
  the same work).
- **@0195B `quae sursum sunt sapite … quae sursum sunt quaerite`** (Coloss. III,
  1–3). Migne reverses the Vulgate's order of the two imperatives (Vulg.:
  `quaerite` first, then `sapite`). Rendered in Migne's order. No `[var:]`: no
  fact changes, and Hugh's gloss immediately following depends on `sapite`
  standing where Migne puts it.
- **@0195C `Et quia quod per concupiscentiam diligitur, deorsum quoque trahat
  necesse est ipsa concupiscentia.`** The `quia` clause has no predicate — the
  parallel sentence immediately before supplies it (`quod per sapientiam
  diligitur, **sursum est**; idcirco …`). Rendered as printed, with the gap left
  open. Conjecture: `deorsum est; idcirco deorsum …`, i.e. haplography of
  `deorsum`.
- **@0196A `ut nec cogitare valcant`.** `valcant` is not a form. Carried:
  `[sic: *valcant*]`. Conjecture: `valeant`, certain. **Both** the `nec` and the
  following `neque` are carried in the English, and the negative force governs the
  two translated infinitives ("to think… to look forward"), per Pattern 7a′ — the
  marker quarantines only the broken verb, not the negation.
- **@0196A `nisi quia stultitia excaecavit oculos eorum: quam in finibus terrae
  illos defixerunt`.** `quam` (fem. acc. sing., = `stultitiam`) with `illos`
  (masc. acc. pl., = `oculos`) as the apparent object of `defixerunt`; the two
  cannot both be the object. Rendered following the printed cases ("which they
  have fixed in the ends of the earth"); log only, no emendation.

## Chunk 0032 — cols 0196B–0199D

- **@0196C `et illececebra voluptatum`.** Not a word. Carried:
  `[sic: *illececebra*]`. Conjecture: `illecebra`, certain (the correct form
  appears at 0201B, `voluptatum illecebris`).
- **@0196D–0197A `Vides tamen quod corda … tenebrescunt, quasi definitivam boni
  malique sententiam dedit`.** Second-person `Vides` with third-person `dedit` in
  the same period. Rendered as printed ("Yet you see that hearts … — he gave, as
  it were, a definitive sentiment"), with an em-dash standing where the plate has
  a comma. Conjecture: `Videns`, which construes perfectly and matches the
  neighbouring participles (`considerans`, `Attendens`).
- **@0196D `Deinde considerans quod vera sapientia hominis alia non est … qui nos
  idcirco praecessit`.** The `considerans` clause has no main verb; the sentence
  simply stops and the next begins `Attendens quoque`. Anacoluthon rendered as
  printed, no verb supplied.
- **@0197B `pro interna luce quaerenda labore vanum existimat`.** `labore`
  (ablative) where the object of `existimat` must be accusative `laborem`.
  Rendered as ordinary English with `labor` as the object ("counts vain the labor
  for the inner light to be sought") — a real word merely in the wrong case, so no
  `[sic:]` (Pattern 12).
- **@0197B `Nam quia pari sorte similique conditione sapientes patitur et stultos,
  ab hac luce visibili cernit post mortem carnis subtrahi`.** `patitur` (3 sg.)
  sits inside an accusative-and-infinitive governed by `cernit`, and its subject
  is unrecoverable. Rendered by taking `patitur … subtrahi` as "suffer to be
  withdrawn," with `sapientes et stultos` as its subject; the plate's word order
  is otherwise kept. Flagged as uncertain.
- **@0197C `cujus fructus an perpetuus esse possit, nondum adhuc ei ratio ulla
  indubitata manifestat`.** `manifestat` transitive with no object. Rendered "no
  undoubted reason as yet makes anything manifest to it," with "anything" as the
  minimum English requires; the alternative (leaving the verb objectless) is not
  English. Flagged.
- **@0198C `Sicut enim hic eos dispar vivendi conversatio dividit, ita illic
  quoque cum in memoriam venerint ut ad judicium adducatur`.** Plural `venerint`
  with singular `adducatur`. Rendered as printed ("when they shall have come into
  remembrance so that he may be brought to judgment"). No emendation.
- **@0198C `Propterea sapientis memoria non in perpetuum non erit similiter ut
  stulti`.** **Two negatives where the argument requires one.** Hugh is here
  restating the lemma `Non enim erit memoria sapientis similiter, ut stulti in
  perpetuum` (0198B) *affirmatively of his own thesis*, and the clause that
  follows it in the same sentence (`et futura tempora non operient cuncta
  oblivione`) carries a single negative. The doubled `non` therefore makes the
  restatement assert the opposite of the lemma it restates. **Both negatives are
  carried** — "shall not for ever not be in like manner as that of the fool" —
  per Pattern 7a; the English is self-contradictory because the plate is.
  Conjecture: one `non` is a compositor's doubling. **Not** marked `[d:]`: the two
  are not adjacent (`non in perpetuum non erit`), so Pattern 11 does not reach it,
  and marking one of them as the repeat would be asserting which one is spurious.
- **@0198D `quia dignum est ut homo quod transitorium videt etiam prius quam
  finiatur despiciat? et pro eo adipiscendo … non affligat.`** A question mark set
  in the middle of a declarative sentence, before `et`. Reproduced exactly
  (Pattern 8); the English keeps the interior `?` and continues the sentence in
  lower case, as Migne does.
- **@0199A `quae mala videntur hujus vita`.** Nominative `vita` for genitive
  `vitae`. No English exponent for the case; rendered "of this life," logged, no
  marker (Pattern 9).
- **@0199B `Et quae [qua] sub sole studiosissime laboravi.`** Migne's own bracketed
  variant `[qua]` reproduced verbatim and untranslated. `Subauditur detestatus
  sum` following is rendered with straight quotes round the supplied English
  lemma ("I detested"), per Pattern 6 — those marks are ours, and Migne prints
  none.
- **@0199C `Si enim vana essent haec omnia … quid erunt ad stultorum voluptatem
  transmissa?`** Imperfect subjunctive protasis with future indicative apodosis.
  Rendered as printed.

## Chunk 0033 — cols 0200A–0202C

- **@0199D `Reliquit enim stultitiam generis sui filium Roboam`.** Two accusatives
  (`stultitiam`, `filium`) with one verb and no apposition marker. Rendered "he
  left the folly of his own stock, his son Rehoboam," reading the second as
  appositive. Flagged; `stultitiam` may be a displaced gloss.
- **@0200D `Multo enim melius si dictum fuisset, et ubique verum constaret.`**
  Elliptical (`esset` unexpressed). Rendered "For it would have been much better if
  it had been said thus, and it would have stood true everywhere," with "thus"
  supplied by the colon that follows in Migne's sense but not in his type. Flagged
  as the one place in this batch where a connective word has no exact printed
  warrant.
- **@0200D `Vena sollicitudo reprehenditur`.** `Vena` ("vein") is a real word but
  cannot function as an adjective agreeing with `sollicitudo`, so the run is not
  renderable as printed. Carried: `[sic: *Vena*]`. Conjecture: `Vana`, certain
  from the whole surrounding argument about *vanitas*.
- **@0201C `Quis est qui obhorreat`.** `obhorreat` for `abhorreat`. Treated as an
  attested late/medieval assimilation (Pattern 9), rendered normally ("shudders"),
  no marker. Logged so a later sweep does not churn it.
- **@0202A–B `Unde tam cito pessimatus [pessundatus] est sensus iste putatis?`**
  `pessimatus` (from late Lat. *pessimare*, "to make worst") is attested medieval
  Latin, and **Migne has already flagged it himself** by printing the bracketed
  correction `[pessundatus]`. Per Pattern 12 no `[sic:]` is stacked on an
  editor's own note: the verb is rendered ordinarily ("made worst") and Migne's
  bracket is reproduced verbatim, untranslated, with the column anchor `[0202B]`
  in its printed position between them.
- **@0202C `Si nemo potest quod tu potes, magnum est si bonum potest.`** Second
  person `potes` then third person `potest` in the apodosis. Rendered as printed
  ("If no one can do what thou canst do, it is a great thing if he is able for
  good"). Conjecture: `potes` for the second verb also.
## Chunk 0034 — cols 0202D–0204D

- **@0202C `curam surperfluam`** (Eccl. 2:26, first quotation). Broken type;
  carried inside the italic lemma as `[sic: surperfluam]`, no nested italic
  marker. Conjecture: `superfluam`, certain — Migne prints it correctly when he
  requotes the same verse at 0203D.
- **@0203C `Cor stulterum ubi laetitia`** (Eccle. VII). Broken type; carried as
  `[sic: stulterum]`. Conjecture: `stultorum`, certain from the parallel `cor
  sapientium` and from the same verse quoted correctly at 0192D.
- **@0203C** the `[n: (Eccle. VII)]` marker is followed in the plate by a comma
  and then a capital (`, Verum quidem hoc est`). Punctuation reproduced exactly.
- **@0203D `Pones eos deorsum, in reliquiis tuis praeparabis vultum eorum`**
  (Psal. XX, 13). The Vulgate reads `Quoniam pones eos **dorsum**` — "thou shalt
  make them turn their back." Migne's `deorsum` ("downward") changes what the
  verse says, and Hugh's argument here (the gladness of the wicked is *not* in
  God's sight) leans on the downward direction. Rendered as Migne prints it, with
  `[var: Vulg. dorsum, "the back"]` beside it (Pattern 14). No conjecture as to
  which witness Migne's copy-text followed.
- **@0203D `ad malitiam descendendo in occupationem pessimam`.** Rendered "into
  the worst occupation," the pre-set rendering of the Eccl. 1:13 lemma *occupatio
  pessima*, which Hugh is deliberately recalling here from Homily VI.
- **@0204C `sed semper a se alterum et sibi adversum atque extra se peregrinum`.**
  Three predicates in the neuter agreeing with `cor`; rendered as printed.
- **@0204C `Et videmus nunc … et mirabamur quomodo tam cito pessumdetur sensus
  mortalium`.** Present `videmus` with imperfect `mirabamur` in one sentence.
  Rendered as printed ("we now see … and we were wondering"). No emendation.
  Note that `pessumdetur` here is spelled correctly, which strengthens the case
  that `pessimatus` at 0202A–B is the anomaly Migne bracketed.
- **@0204C `ire patiatur in aliena turpitudinis`.** `aliena` (neut. pl.) governing
  a genitive; unusual but construable. Rendered "suffers itself to go into the
  alien things of baseness." No emendation.

## Chunk 0035 — cols 0205A–0207B

- **@0205B–C `et fit miro quodam modo, ut qui semper in desiderio futurum
  fallitur, vix aliquando in experientia praesentium omnino decipiatur.`** Reads
  against the argument as it stands — the surrounding paragraph says the mind *is*
  undeceived by experience and *is* deceived by desire, which is what the printed
  words say when `vix … omnino decipiatur` is taken as "is scarcely ever wholly
  deceived." Rendered so, literally. No emendation; flagged only because the
  double qualification (`vix … omnino`) is easy to flatten in either direction and
  must not be.
- **@0206C `facilitatem tamen conferre non possunt`.** `facilitatem` ("ease,
  facility") where the argument, and the whole homily's vocabulary
  (`veram felicitatem conferre` eleven lines earlier at 0205D), require
  `felicitatem` ("happiness"). **Rendered as printed** — "cannot nevertheless
  confer ease" — under Pattern 7: `facilitas` is a real word and the sentence
  construes, so it is not carried type and takes no marker. Conjecture:
  `felicitatem`, near-certain. This is exactly the class of one-letter defect that
  a smooth English would conceal.
- **@0206D `sed habet suum tempus unumquodque, quando ut sit bonum es et tempus
  quando bonum est`.** `es` for `est`. Carried: `[sic: *es*]`. Conjecture: `est`,
  certain from the balancing clause four words later.
- **@0207A `etiamsi bonum non est illud quod bonum est ut sit … etiamsi bonum est,
  quod bonum est ut non sit.`** A deliberate chiastic paradox with three
  negatives across the period; every one is carried, and the sentence is *meant*
  to look self-cancelling. Logged so that no later sweep "repairs" it — this one
  is Hugh's, not Migne's.
- **@0207B `Nunc benedic Deum, et morere`** (Job II, 9). Vulgate: `Benedic Deo et
  morere` — dative `Deo`, and no `Nunc`. Rendered as Migne prints it ("Now bless
  God, and die"). No `[var:]`: the added adverb and the case change do not alter
  what the verse asserts, and English has no exponent for the dative/accusative
  difference here.
- **@0207A `pignora interfecit`** rendered "he slew the pledges of his house" —
  *pignora* in the standard medieval sense of children, kept literal rather than
  glossed to "children," since Hugh is quoting the Job narrative in its own
  register.

## Chunk 0036 — cols 0207C–0209D

- **@0207C `Quid causaris sub tempore omnes de legibus temporum?`** Second-person
  singular `causaris` with `omnes` (nom./acc. pl.). Rendered "Why do you plead,
  all of you under time, about the laws of times?" — taking `omnes` as a vocative
  plural apposition, which is the only reading the printed cases allow. Flagged;
  `omnes causamini` would construe but is not what is printed.
- **@0207C `et non erit ibi tunc, omnia tempus habent`.** Migne sets the quoted
  lemma with a bare comma and no marking; rendered with our own straight quotes
  round it (Pattern 6, marks supplied by us because Migne marks the quotation not
  at all): `there will not then be there, "all things have their time"`.
- **@0208A–B `et sunt alia, quae vere non sunt, et ea quae vere sunt: quodammodo
  aemulantur`.** The colon falls where the sense wants a full stop, and `ea quae
  vere sunt` is the object of `aemulantur` across it. Punctuation reproduced
  exactly (Pattern 8); the English keeps the colon and lets the sentence run on.
- **@0208D `et quod isti tempus fuit, quia non semper fuit; fuit illi aeternitas,
  quia semper fuit.`** The semicolon inside the correlative pair is Migne's;
  reproduced. The whole `fuit` chain (0208D, fourteen occurrences in one period)
  is rendered word for word rather than smoothed — the repetition is the argument.
- **@0209B–C `Tunc longa spatia temporum non placebunt impiis transacta felicitate
  temporum; et permanentibus culpis quae per tempora contraxerunt`.** Two
  ablative absolutes joined to a clause that never receives its second verb.
  Rendered as printed, the sentence left grammatically open.
- **@0209D `nusquam sola mala, vel sola bona. hoc enim tempore vitae hujus`.**
  Migne sets a lower-case `hoc` after a full stop. The English capitalizes
  ("For at this time of this life") — a capital is not a mark that can be
  "preserved" or "supplied" in the Pattern 8 sense, and the facing Latin column
  shows the plate's form. Logged for completeness.
- **@0209D `non est habere bona sine malis, nec mala sine bonis`** — both
  negatives carried.
# Cruces — Hugh of St Victor, *Homiliae in Ecclesiasten* (PL 175), chunks 0037–0044

Batch: Homily XIII part 2 (cols 0210A–0215A), Homily XIV (0215B–0219D),
Homily XV (0220A–0225D), Homily XVI part 1 (0226A–0233A).
Prepared per `translation-style.md` (Patterns 7, 7a, 7a′, 8, 9, 10, 12, 14).

## Work-wide conventions adopted in this batch (for merge reconciliation)

Beyond the pre-set vocabulary (*vanitas* → "vanity"; Ecclesiastes never "the Preacher";
*sententia* → "sentiment"; *narratio* → "narrative"; *littera* → "letter"; etc.), and
consistent with the conventions already recorded in `cruces-0000.md`:

| Latin | Rendering | Note |
|---|---|---|
| The Eccl. 3 lemma series | infinitive throughout: *nascendi* "to be born", *moriendi* "to die", *plantandi* "to plant", *evellendi* "to pluck up", *occidendi* "to kill", *sanandi* "to heal", *destruendi* "to destroy", *aedificandi* "to build", *flendi* "to weep", *ridendi* "to laugh", *lugendi* "to mourn", *plangendi* "to wail", *saltandi* "to dance", *spargendi* "to scatter", *colligendi* "to gather", *amplexandi* "to embrace", *longe fieri ab amplexibus* "to be far from embraces", *scindendi* "to rend", *consuendi* "to sew", *tacendi* "to be silent", *loquendi* "to speak", *custodiendi* "to keep", *abjiciendi* "to cast away" | Hugh re-quotes these dozens of times and argues from their exact pairing and order; a single fixed English form per lemma is required or the argument-by-order (0227B: "seven … and again seven … then eight … and six") stops being checkable. **NB the two distinct verbs for the sixth pair:** *congregandi* → "to gather" (0212C, the Eccl. 3:6 lemma as Hugh first prints it) but *acquirendi* → "to acquire" (0214B, 0222D, 0231C — the form Hugh actually expounds), with *perdendi* → "to lose" throughout. The Latin distinguishes them; the English must too. |
| *tempus belli / pacis / dilectionis / odii* | "a time **of** war / of peace / of love / of hatred" | genitive nouns, not infinitives — kept distinct from the gerund lemmata above because Hugh's numbering at 0227B counts them as members of the same series. |
| *mutabilitas / fluctuatio / vicissitudo* | mutability / fluctuation / vicissitude | cognates kept; the three are distinguished (0215B, 0227A). |
| *opifex* / *artifex* | "worker" / "craftsman" | 0216A–0216D: Hugh's three *opifices* are God, nature, and the *artifex imitans naturam*. Kept distinct. |
| *spatia* (of times) | "spans" | *suis spatiis transeunt universa* → "all things pass away in their own spans", fixed across all its recurrences (0210B, 0215A, 0215B, 0228A, 0228D). |
| *dispositio* / *ordinatio* / *institutio* | disposition / ordinance / institution | 0211C, 0215D, 0218C. |
| *reprobi* / *electi* | "the reprobate" / "the elect" | 0226D, 0230D–0231B. |
| *vasa misericordiae / irae* | "vessels of mercy / of wrath" | 0226B, Rom. 9 echo permitted; *in sustentatione* rendered "in forbearance". |
| Homily heads | `HOMILIA XIII/XIV/XV/XVI` → "HOMILY XIII/XIV/XV/XVI" | abbreviated numeral form kept, per the standing convention. **Head of Hom. XVI aligned to the wording already used by the chunk-0045 translator** ("*On the spiritual understanding of those things which have been said concerning time.*") so the homily does not split into two TOC entries at assembly. |
| Scripture | rendered from Migne's printed Latin throughout | familiar-verse echo permitted only where the printed Latin matches the received text. |

---

## Version-divergence watch (the work's defining hazard)

**No `aliam translationem` / `nostra habet` / `Hebraeus` / `LXX` passage falls inside
chunks 0037–0044.** The head of Homily XV (0220A) prints *per aliam interpretationem*,
but this is **not** a competing Latin version of Ecclesiastes: the homily re-expounds the
*same* Eccl. 3 lemmata (Hom. XIII–XIV had given them literally; XV gives them morally,
XVI spiritually). Rendered "according to another interpretation" and flagged here
precisely so that a merge does not mistake it for a version note. Hugh's own signal for a
version, *nostra habet*, is absent throughout this batch.

The Eccl. 3 lemmata as Migne prints them here differ from the Vulgate in one place worth
recording: at **0212C** Hugh prints *Tempus congregandi et tempus perdendi* where the
Vulgate (Eccl. 3:6) has *tempus adquirendi et tempus perdendi* — and Hugh himself quotes
*tempus acquirendi* everywhere afterwards (0214B, 0222D, 0231C). Rendered as printed in
each place ("to gather" at 0212C, "to acquire" elsewhere); no `[var:]`, because Hugh's
own later usage supplies the received form and no argument turns on it. Flagged for the
merge so nobody normalizes the one occurrence away.

---

## Scripture rendered as Migne prints it

- **0210A — I Cor. XV.** Migne: *non prius quod spirituale est, sed quod carnale est,
  prius est.* The Vulgate (1 Cor. 15:46) has *animale*, not *carnale*, and *deinde quod
  spiritale*. Rendered from Migne ("not first that which is spiritual, but that which is
  carnal, is first"). No `[var:]`: Hugh's whole argument here is the carnal/spiritual pair
  of lives, so *carnale* is doing the work he needs and the substitution is legible in the
  English without a note. Migne's italic run also closes irregularly (*…sed quod* carnale
  est) — the asterisks are reproduced exactly where the plate sets them.
- **0210B — Psal. XXIV (23:10).** *Universae viae Domini misericordia et veritas.* Printed
  a second time nine lines later **without the conjunction** — *Universae viae Domini
  misericordia, veritas* — and rendered both ways as printed ("mercy and truth" / "mercy,
  truth"). Not a dittography (Pattern 11): the second is Hugh's own resumption, not a
  doubled run of type.
- **0219B — I Petr. IV (4:17).** Migne: *Tempus est, ut incipiat judicium **a** domo Dei.*
  Vulg. *quoniam tempus ut incipiat iudicium **de** domo Dei.* Rendered as printed; no
  `[var:]`, since *a*/*de* does not change the sense.
- **0219C — Thren. IV (Lam. 4:1).** Agrees with the Vulgate; rendered with traditional
  wording.
- **0219C — Isa. LIV. `[var:]` PLACED.** Migne prints *Ponam omnes **muros** tuos in
  lapides **sculptos**, omnes filios tuos doctos a Domino.* The Vulgate (Isa. 54:12–13)
  has *omnes terminos tuos in lapides desiderabiles … universos filios tuos doctos a
  Domino.* This is material and not cosmetic: Hugh cites the verse **as proof that
  *lapides* signify the just**, and the divergence puts the stones in the *walls* rather
  than the *borders*, which is exactly the figure his argument needs two sentences later
  ("this refers more properly to the defenses of walls," 0219B). Rendered from Migne, with
  `[var: Vulg. *omnes terminos tuos in lapides desiderabiles*, "all thy borders of
  desirable stones"]`. Per Pattern 14 no explanation of the cause is offered here.
- **0220A — *Maledicta saeviens in necem suam.*** Introduced as *sententiam auctoris* but
  unidentified; it is not scripture in any received form. Rendered literally as printed —
  "*Accursed, raging unto its own slaughter*" — with *maledicta* taken as the feminine
  nominative it prints (agreeing with the life given over to death). Left unresolved
  deliberately; do not supply a source.
- **0231B — Cant. I.** *et non erat dilectus inter ubera* — an unmarked allusion to
  Cant. 1:12 (*fasciculus myrrhae dilectus meus mihi, inter ubera mea commorabitur*),
  printed without a `[n:]`. Rendered literally ("and the beloved was not between the
  breasts"); the printed negation is carried (see below).

---

## Carried type — `[sic: …]` (Patterns 7, 10, 12)

Thirteen runs. Each is carried untranslated, in italics, and each is verified as a
verbatim substring of its Latin twin.

1. **0210B (chunk 0037)** — *Nam utraque **gustaro** oportet.* Non-word; no such Latin
   form exists. Carried: `For it behooves him to [sic: *gustaro*] both`. Conjecture:
   *gustare* (or *gustari*), near-certain from *utraque* and the preceding *utra prius
   accipiat*.
2. **0211A (chunk 0037)** — *Tempus nascendi et tempus moriendi, hoc est **devita
   humana**.* Run-together type for *de vita humana* (Pattern 10). The whole run is
   carried, including *humana*, which is a correct word: the merge is *de*+*vita*, but
   *humana* agrees with the swallowed *vita* and cannot be rendered alone without
   inventing a noun for it. Carried: `this is [sic: *devita humana*]`. Conjecture: *de
   vita humana*, "from human life" — certain from the parallel clause four lines later,
   *hoc est de iis quae pertinent ad vitam humanam*.
3. **0216A (chunk 0039)** — *ut majus sit quod minus **crat***. Non-word for *erat*.
   Carried: `so that greater be that which less [sic: *crat*]`. The English preserves the
   Latin word order rather than supplying "was", because supplying it would translate the
   very type that is being carried. **Note also that the paragraph ends here with no
   terminal stop in Migne** — none is supplied (Pattern 8).
4. **0217A (chunk 0039)** — *vel fingit artifex **imitant** naturam*. The sentence has an
   exact parallel eight lines earlier and four lines later (*artifex imitans naturam*,
   twice), so *imitant* is a defect and not a variant; but with it the clause does not
   construe (a plural verb form against a singular subject). Carried:
   `or the craftsman [sic: *imitant*] nature fashions`. Conjecture: *imitans*, certain.
   *Judged as carried type rather than as a merely-wrong real word (the Pattern 12
   boundary) because rendering it as a finite plural verb would produce English that reads
   as our own error rather than the plate's.*
5. **0220D (chunk 0041)** — *tempus flendi, et tempus ridendi: **templus** plangendi, et
   tempus saltandi.* Non-word for *tempus*; the same phrase is printed correctly three
   lines above and eight lines below. Carried: `[sic: *templus*] to wail`. Conjecture:
   *tempus*, certain.
6. **0222C (chunk 0041)** — *quoniam idcirco tempora **augustiae** data sunt*. Non-word;
   *augustia* is not a Latin noun. Carried: `the times of [sic: *augustiae*] have been
   given`. Conjecture: *angustiae*, "of straitness / distress" — near-certain from the
   following *ut caro afflicta … se temperet* and from the parallel with the scattering
   of stones.
7. **0227B (chunk 0043)** — *et tota bonorum de malo in bonum **cuntium***. Non-word for
   *euntium*. Carried: `and the whole life of the good from evil into good, of those
   [sic: *cuntium*]`. Conjecture: *euntium*, "going" (gen. pl., agreeing with *bonorum*)
   — near-certain.
8. **0228B (chunk 0043)** — *quando multa desideria **introicrunt** in illud*. Non-word
   for *introierunt*. Carried: `when many desires [sic: *introicrunt*] into it`.
   Conjecture: *introierunt*, certain.
9. **0228C (chunk 0043)** — *et marcent **genimima** bona in siccitate*. Non-word.
   Carried: `and the good [sic: *genimima*] wither in the drought`. Conjecture: *germina*
   (the word Hugh uses six lines earlier, *surgunt quippe germina virtutum*) — near-
   certain; *genimina* ("offspring, produce") is a possible but less likely alternative,
   and neither is the form printed.
10. **0229D (chunk 0044)** — *ac deinde bona, vel **sanctur** infirma, vel mortua
    vivificetur.* Non-word for *sanetur*. Carried: `and then the good, either infirm, be
    [sic: *sanctur*], or dead, be made alive`. Conjecture: *sanetur*, certain from the
    next sentence, *quod male infirmum est, bene sanatur*.
11. **0230C (chunk 0044)** — *ad tactum internae **dulcedidinis** admittatur*. Non-word
    (dittographic syllable) for *dulcedinis*. Carried: `admitted to the touch of inward
    [sic: *dulcedidinis*]`. Conjecture: *dulcedinis*, certain. **Not** marked `[d:]`:
    Pattern 11 covers a repeated *run* the plate sets twice, not a doubled syllable inside
    a single word, which is broken type and belongs to Patterns 7/12.
12. **0232B (chunk 0044)** — *in cognitione veritatis **peccata** dilectione requiescit.*
    See the separate entry below; this one is a judged exception to the Pattern 12
    boundary.
13. **0232D (chunk 0044)** — *ut eos postmodum in **judicie** tanto gravius abjiciat*.
    Non-word for *judicio*. Carried: `that afterwards in [sic: *judicie*] he may cast them
    away`. Conjecture: *judicio*, certain.

### The one judged exception — 0232B *peccata*

Migne prints: *altera vero, id est contemplativa, in cognitione veritatis **peccata**
dilectione requiescit.* *peccata* is a **real word** ("sins", or a feminine perfect
participle "having sinned"), which under the Pattern 12 boundary would ordinarily be
rendered as ordinary English rather than carried. It is carried anyway, and the departure
is recorded here rather than hidden:

- Rendering it "sins" produces a noun with no verb to govern it and no case that fits
  (*requiescit* is intransitive), i.e. English that a reader would take for **our** error.
- Rendering it "having sinned" would assert of the *contemplative life* that it has
  sinned — a theological claim Hugh nowhere makes, in a sentence whose whole point is the
  contemplative life's repose. That is a silent repair of the worst kind: it construes,
  and it is wrong.
- The conjecture is ***pacata dilectione***, "in a love that is at peace" (or *pacata*
  agreeing with *altera*), which restores both grammar and sense and is a single-letter
  class of error the plate commits repeatedly in this batch (items 3, 5, 10, 13 above).

So: `in the knowledge of truth [sic: *peccata*] rests by love`, and the conjecture lives
here. **Flagged for the merge** as the one place in this batch where the Pattern 12
boundary was crossed deliberately.

---

## Real words that are wrong — rendered literally, no marker (Pattern 12 boundary)

- **0213C (chunk 0038)** — *ut nihil maneat sub sole, laetitia quae de nativitate vel
  plantatione suboritur … temperetur.* The connective between the two *ut*-clauses is
  simply absent in the plate. **No conjunction supplied** (Pattern 8): the English keeps
  the asyndeton exactly ("so that nothing may remain under the sun, the gladness which
  springs up … be tempered"). Conjecture: *et* before *laetitia*.
- **0215D–0216A (chunk 0039)** — *Propterea ergo **permaneant** opera Dei, quia stabile
  est …* Subjunctive where the argument requires the indicative: the whole paragraph is a
  demonstration *that* God's works abide, not an exhortation that they should. Rendered
  literally as a jussive ("Therefore then let the works of God abide"), per Pattern 7.
  Conjecture: *permanent*.
- **0216C (chunk 0039)** — *Quando ergo naturam operatur Deus, et quando supra naturam
  operatur natura, Deo non cooperatur.* As printed, *natura* is the subject of the second
  *operatur* and also of *cooperatur*, which makes nature work above nature. Rendered as
  printed with the subject taken from the printed word order ("When therefore God works
  nature, and when he works above nature, nature does not work together with God"); the
  printed *non* is carried. Conjecture: *natura* belongs only with *cooperatur*, i.e. a
  displaced word rather than a wrong one. Flagged because the agency here is exactly the
  fifth mechanism of Pattern 7a (reference or agency mis-bound) and a later reader should
  check the plate.
- **0225C (chunk 0042)** — *donec veniant ut vel sub judicio cadenti in perpetuum adversa
  sint omnia, vel feliciter **consummatio**, subjecta sint universa.* *consummatio* is a
  real word in the wrong case (nominative where the construction wants an ablative
  absolute or a preposition). Rendered as printed, in place, without repair: "or, happily,
  consummation, all things be made subject." Conjecture: *feliciter consummatione*, "by a
  happy consummation". No marker (Pattern 12: the word can be rendered).
- **0227B (chunk 0043)** — *quaedam sunt in quibus commemorantur bona et mala **-
  quaenam** in quibus mala et bona.* Two things at once: Migne prints a bare hyphen with
  spaces where the sentence needs a conjunction, and *quaenam* ("which indeed?", an
  interrogative) where the parallel demands *quaedam* ("certain"). Both are reproduced —
  the hyphen exactly as spaced, and *quaenam* rendered "which indeed" — so the reader sees
  a clause that does not construe, which is what the plate has. Conjecture: *quaedam*,
  near-certain from the parallel *quaedam sunt* immediately before and from *Septem enim
  sunt … et iterum septem* immediately after.
- **0221B (chunk 0041)** — *et causantur saepe Deum quando bene cum eis agitur.* Rendered
  literally ("and often lay the blame upon God when it is dealt well with them"). The
  argument wants men to blame God when it goes *badly*; the plate says *bene*. **No
  emendation, and no softening of the connective** — this is precisely the class Pattern
  7a mechanism 3 warns about. Conjecture: *male*, or an ironic *bene* ("when he is in fact
  dealing well with them"), which is defensible from the surrounding sentence about God's
  chastening and would need no emendation at all. Both left in the crux; the English
  states what is printed.

---

## Negation and polarity (Patterns 7a, 7a′) — every printed negative carried

Checked clause by clause. Every `non / nec / neque / nisi / nunquam / nullus / nihil` the
Latin prints appears in the English, and none appears that the Latin does not print.
Three places where carrying it makes the sentence fight its own argument, and where the
temptation to repair was live:

1. **0222D (chunk 0041)** — *Propter haec omnia tempus est amplexandi, et tempus longe
   fieri ab amplexibus: **ut in tempore non quaerat homo quod aeternum est**, et qui
   hominis viventis societatem diligit, cogitet semper morituri separationem.* Carried:
   "so that in time man may **not** seek what is eternal". This states the opposite of the
   homily's argument — the entire passage exists to explain that embraces are loosed
   *lest the heart of man rest in man* and so that he may seek the eternal. Conjectures,
   in order of plausibility: (a) *quod aeternum non est* (the negative displaced, "may not
   seek in time what is not eternal"); (b) *in tempore* to be read "in a temporal way", so
   that *non* attaches to the manner and the sentence stands as printed. **Neither is
   adopted.** The printed *non* stands where it is printed, and this entry exists so the
   defect is attributable to Migne rather than to us.
2. **0231B (chunk 0044)** — *et **non** erat dilectus inter ubera ut fortiter astringeretur.*
   Carried ("and the beloved was **not** between the breasts"). The negation is the point —
   the gentile philosophers embraced from afar — and it inverts the Cant. 1:12 allusion it
   depends on. Sound as printed; recorded only because a Song-of-Songs echo is exactly the
   kind of place a familiar-verse reflex would supply the affirmative.
3. **0211D (chunk 0037)** — *quia pro culpa patienti **non** ponitur quod **non** ipsius
   circa se voluntas, sed dispositio desuper justa moderatur.* Double negative, both
   carried, with *non ipsius … sed dispositio* rendered as the correlative it is ("not his
   own will … but a just disposition from above"). Construes as printed; no crux beyond
   the record that both were checked.

Also checked and sound as printed, no repair made: *nec grave omnino illud est* (0212C);
*Nam sine Deo ab homine ut aliquid fiat, ita tempus nullum est, sicut justum nihil fieri
sine Deo ab homine potest* (0211D — two negatives in a comparative frame, both carried);
*nec sunt bona peccata, tametsi bonum est ut sint ipsa peccata* (0214A — the paradox is
Hugh's own and is rendered as it stands); *non fit tempus ut fiant quia non bene fiunt*
(0214B); *sed non cuncta exire volunt* (0223D); *nec potuit charitate extranea retineri*
(0231B).

---

## Other notes

- **Column-band sequence** in this batch runs continuously 0210A→0233A with no text broken
  mid-word or mid-construction across any anchor. Anchors verified 1:1 against the Latin
  twins, in order, for all eight chunks. Per the standing rule no band arithmetic is
  reported.
- **No `[n:]` in chunks 0038, 0039, 0041, 0042, 0043, 0044**; 5 in 0037 and 3 in 0040, all
  reproduced verbatim, contents untranslated. **No `[nt:]` conversions** — every note in
  this batch is a bare scripture locator, not editorial prose (Pattern 15).
- **No guillemets** anywhere in chunks 0037–0044, in either language; parity holds
  trivially (Pattern 6). No `" "` supplied either — Migne's italic lemmata already carry
  the quotation function throughout these homilies.
- **No `[d:]`, no `[ed:]`** in this batch. Nothing in the digitization is missing against
  the plate so far as the twins show, and no run is set twice.
- **0230A (chunk 0044)** — the paragraph ends *…sui consolatione laetificetur* with **no
  terminal stop**; none supplied (Pattern 8). Same at 0216A, item 3 above.
- **0217D (chunk 0039)** — *Interim autem post nativitatem ante mortem dum in hac vita
  mortali vivit, quae sustentamento indiget, et alimentis nutritur, ut subsistat.* A
  subordinate clause with no main verb; printed as a complete sentence. Rendered as
  printed, incomplete. No conjecture offered — the missing apodosis could be anywhere.
# Cruces — 11065 (Hugh of St Victor, *Homiliae in Ecclesiasten*), chunks 0045–0052

Cols 0233B–0256C. Homilies XVI (concl.), XVII, XVIII, XIX (concl. of the work).

## Work-wide conventions adopted in this batch (for the merge)

Pre-set vocabulary from the brief (*vanitas* → "vanity"; *Ecclesiastes* kept, never
"the Preacher"; *distendi* → "be distended"; *sententia* → "sentiment"/"sentence";
*narratio* → "narrative"; *littera*/*litteralis*/*moralis*/*mysticus*/*tropologia*/
*allegoria*; *contemplatio*; *occulta* → "hidden things") is followed throughout.
Decisions **not** pre-set, made here and recorded so peers can reconcile:

- **Homily heads** (full `HOMILIA` form throughout this batch, no abbreviations):
  - XVI *De spirituali intelligentia eorum quae de tempore dicta sunt.* → *On the
    spiritual understanding of those things which have been said concerning time.*
  - XVII *De animorum confusione ex temporum transitu.* → *On the confusion of minds
    arising from the passing of times.* (*animorum* = "minds", not "souls" — Hugh's
    subject through the homily is *judicia mentium humanarum*.)
  - XVIII *De perversis hominum moribus: et quid ex eis censuerit Ecclesiastes.* →
    *On the perverse morals of men: and what Ecclesiastes judged concerning them.*
  - XIX *De innocentium oppressione, et derelictione: et vario ac stulto impiorum de
    hac vita judicio.* → *On the oppression and abandonment of the innocent: and on
    the various and foolish judgment of the impious concerning this life.*
  - `(cont.)` markers left untranslated and in place (chunk-division artifact).
- **Ecclesiastes lemmata**: *tempus scindendi / consuendi* → "a time of rending / of
  sewing" (Hugh's whole exposition is needle-and-thread; "rend/sew" carries it).
  *tempus tacendi* → "a time of keeping silence".
- **disputatio / concertatio / rixari** → "disputation" / "struggle" / "to quarrel",
  kept distinct and constant; they are the spine of Homily XVII.
- **calumnia** → "calumny" (Eccl. 4:1 lemma at 0252D–0253A), kept distinct from
  *oppressio* → "oppression", which Hugh prints alongside it in the gloss.
- **laetari** → "to be glad", **gaudere** → "to rejoice", kept apart wherever the pair
  occurs together (0245A, 0243A).
- ***irriguum superius / inferius*** (Jos. 15:19) → "upper watering / lower watering".
- **non esse** → "not-being" (hyphenated), the substantive of Homily XIX's argument.
- *(Josue, XV)* at 0233D is an **inline parenthetical citation set in italics in the
  body**, not an `[n:]` note. Reproduced verbatim, untranslated. Likewise
  *(Eccles, IV)* inside the lemma at 0253A (note the comma, not a period, after
  *Eccles* — printed thus). Not tagged `[f:]` — homiletic exposition is not a
  florilegium (standing false-positive rule 4).

## Cruces

### 0239D — *ut non invenirit homo omne opus*
`invenirit` is not a Latin form (*inveniat* / *invenerit* expected). Non-word type,
carried untranslated under Pattern 7/12: "that man might not [sic: *invenirit*] every
work…". Note per **Pattern 7a′**: the printed `non` governs translated text and is
carried in the English even though the verb it negates is inside the marker; the
sentence is deliberately left as a negative with an untranslatable verb rather than
smoothed into "might not find".

### 0239D — *et concortationibus muniunt errores suos*
`concortationibus` for *concertationibus* ("struggles"), the word Hugh uses correctly
five times elsewhere in this homily. Non-word; carried, `[sic: *concortationibus*]`.

### 0240C — *et rigas coacitantes horrendas*
Whole run unconstruable. `coacitantes` is not a word (*concitantes* conjectured);
`rigas` cannot be a 2nd-sg. present here, and `horrendas` (acc. fem. pl.) demands a
feminine accusative plural noun — *rixas concitantes horrendas*, "stirring up
horrendous quarrels", is the near-certain reading. Because the defect is the run and
not either token, the run is carried whole per Pattern 10: "and horrendous
[sic: *rigas coacitantes*]". `horrendas` is translated, since it is sound type.

### 0241B — *cum fit quod male ipse non vult, dicit male fieri*
Printed `non` retained: "when that comes to pass which he himself does not evilly
will, he says that it is ill done." The clause is awkward but construes as printed and
was **not** repaired; the following *cum bene fiat, et ipse male velit* is rendered as
the concessive it is.

### 0241B–C — *putat secum bene agi. cum potius hoc fiat in malum ejus*
Migne prints a full stop followed by lowercase *cum*. Preserved (Pattern 8): "…he
thinks that it goes well with him. when rather this comes to pass unto his harm".
Not merged into one sentence.

### 0241B — *ab initio ejusque ad finem illius*
`ejusque` where the sense requires *ejus usque* (so the parallel *ab initio suo usque
ad finem suum* three lines later). Real words, wrongly divided; rendered as printed —
"from his beginning **and** unto the end of him" — rather than emended. No `[sic:]`,
because the English on the page is ours (Pattern 12's operational test).

### 0240A–B — *consumant in argumenta alterutrum adversum de se copia*
Does not construe: `alterutrum` and `adversum` cannot both be governed, and `copia`
(abl.) hangs loose. Rendered as closely as the printed words allow — "and consume them
into arguments one against the other about themselves out of its plenty" — with no
word supplied and none suppressed. Flagged as unconstruable rather than adjudicated.

### 0243D — *fluctuant eorda hominum*
`eorda` for *corda*. Non-word; carried, `[sic: *eorda*]`.

### 0245B — *qui neque amare vel approhare potest*
`approhare` for *approbare*. Non-word; carried, `[sic: *approhare*]`. The printed
`neque … vel` is rendered "neither … nor"; the negation is on our page, not inside the
marker.

### 0245B — *cum ea quae operatur Deus homo mullatenus possit immutare*
`mullatenus` for *nullatenus*. This is the **Pattern 7a′** case in this batch: the
broken token is the sentence's only negation, and it governs text that is translated.
Marking it alone would have left the English asserting that man *can* change what God
works — the exact opposite of the sentence and of the whole homily. So the negative
force is rendered AND the type is marked: "since man can by no means
[sic: *mullatenus*] change the things which God works." Supplying the negative here is
not an emendation; it renders the *nullatenus* Migne's type is a one-letter corruption
of, which would otherwise be silently dropped.

### 0246B — *licet intermissa ad templum videretur*
`templum` where the argument requires *tempus* ("although it seemed to have been
interrupted **for a time**") — Hugh is explaining that God's ancient judicial truth
only *appears* suspended while he tolerates the wicked; a temple has no place in the
sentence. `templum` is a real word and can be rendered, so it is rendered as printed
("although it seemed to have been interrupted unto the temple") and NOT marked
`[sic:]` (Pattern 12: only carried, untranslated type takes the marker). Conjecture:
*ad tempus*.

### 0248C — *Nam, si cognoverit se ex eo homo magnum est*
`homo magnum est` does not agree; either *magnum est* is impersonal ("it is a great
thing") with *homo* the subject of *cognoverit*, or a word has dropped. Rendered on
the first reading, which needs nothing supplied: "For, if a man shall have known
himself out of that, it is a great thing…". Logged because a reader may wish to weigh
*magnus est* (of the man).

### 0249A / 0249D / 0250A / 0250C — **the three printed forms of Eccl. 3:19**
Hugh quotes the verse-tail four times and Migne prints it three different ways. All
three are rendered as printed and are **not** harmonized:
- 0249A `et aeque utriusque conditio` → "and **equally** the condition of both"
  (adverb);
- 0249D and 0250C `et aequa utriusque conditio` → "and the condition of both
  **equal**" (adjective);
- 0250A `et similis utriusque conditio` → "and the condition of both **alike**".
The third is a different word, not a different case, and it is the one Hugh's gloss
leans on (*et sic homo moritur sicut illa moriuntur*). A conventional English
Ecclesiastes collapses all three.

### 0250A — *et consummatio finis eadem moriuntur similis*
Unconstruable as printed: `moriuntur` (3rd pl.) has no expressed subject inside the
clause and `similis` (nom./gen. sg.) agrees with nothing. Probable *consummatio finis
eadem; moriuntur similiter*. Rendered with nothing supplied and nothing suppressed —
"and the consummation of the end the same, they die similar, and they return to the
earth of which they were first taken" — so the defect stays visible. `similis` is a
real word and therefore takes no `[sic:]`.

### 0250C, 0251C, 0252B, 0254A — *quod habet homo jumento amplius*
Hugh's running lemma (Eccl. 3:19/3:21) is rendered uniformly "what man has more than
the beast", including where Migne prints the negative form
*nihil habet homo jumento amplius* (0250A, 0250C) — "man has nothing more than the
beast". Every printed `nihil` / `non` / `nec` in the sequence is carried.

### 0252B — *quod non, sic vita ista est, ut requies in ea esse possit*
Migne prints a comma after `non`. English word order cannot host it there; the clause
is rendered "that this life is not so, that rest can be in it", keeping one comma
inside the clause. No mark supplied, none deleted; only the position is unavoidably
different.

### 0252D — *Haec enim omnia, quae videbuntur tunc, alibi doceat esse verum bonum*
`doceat` (subj.) with a plural subject `omnia`. Number mismatch has no clean English
exponent; rendered "may teach", leaving the hortatory force printed. Pattern 9 class —
no marker, no churn.

### 0254A — *quod homo ipse caligat ad vivendum se*
`caligat ad vivendum se` is idiomatically opaque ("grows dark toward living himself").
Rendered close to the printed words — "that man himself grows dark as to his own
living" — rather than paraphrased into "man is blind to how to live".

### 0254C — *vidit quod industriae bonorum, proximorum invidiae patuit*
`industriae` (nom. pl.) with `patuit` (3rd sg.), and Migne's comma after `bonorum`
falls between the genitive and the noun it depends on. Both preserved: "he saw that
the industries of the good lay open to the envy of neighbors." Number mismatch left
unrepaired (Pattern 9 / Pattern 7).

### 0254C — paragraph ends *ut ea in proximis carpant* with no terminal stop
Migne prints none. None supplied (Pattern 8). Same at **0236B**, where the sentence
*Propter hoc tempus belli est, et tempus pacis* ends the paragraph unstopped.

### 0255B — *et otiocitas sua impinguat eum*
`otiocitas` for *otiositas* — and Migne prints *otiositate* correctly nine lines
earlier (0255A, *quasi pactum faciens cum otiositate*), so this is this plate's own
slip and not a period orthography. Non-word; carried, `[sic: *otiocitas*]`.

### 0255B — *quantum in utili vacatione pascitur*
Reads as printed "in useful leisure", which contradicts the sentence's own point (the
flesh is wasted by the famine that follows) and the surrounding attack on idleness;
*inutili* ("useless"), split by a compositor's space, is the near-certain reading and
would be a Pattern 10 case. But both fragments are real Latin words forming a
grammatical phrase, so the split is not demonstrable from the type alone; rendered
literally — "as much as it is fed in profitable leisure" — with the conjecture here.
No `[sic:]`, since what the reader sees is our English.

### 0247D–0248A — *Vidi sub sole impietatem in loco judicii*
Hugh's re-quotation inverts the word order of the lemma he printed at 0244A / 0246C
(*in loco judicii impietatem*). Both orders rendered as printed; no normalization.

### 0239C — *stultam fecit Deus sapientiam mundi [n: (I Cor. V)]*
Migne's note points to I Cor. V; the quotation is 1 Cor. 1:20. Note reproduced
verbatim per the verbatim rule — not corrected, not commented on in the text.

---

# Blind polarity read (step 4a) — 2026-07-30

Six Opus units, blind, 53/53 chunks, no sampling. **20 sites: 13 source-side, 7 ours.**
Unit JSONs in `data/sweeps/polarity-11065/`.

**Recall was measured, not assumed.** Every defect the translation pass had logged sat
in a range whose polarity agent was forbidden to read this file, so each was a live
recall test. Only u3's @0175C was named in its prompt; the rest were blind and were
found anyway (u1 @0117D + @0132C, u2 all four of its range, u4 four of five). The
clean chunks can therefore be trusted.

**Every genuinely NEW finding was on our side, and all seven are the same failure:** a
negation or a word rendered as its opposite, reading smoothly, passing `verify-english`,
leaving no trace. Three sat in columns this file had ALREADY logged for something else —
the "a logged column is not a checked column" shape that `translation-style.md` 7a′ was
written for this same morning.

## Fixed in the English (ours — Wilson's standing policy: our errors are fixed in place)

- **@0136C — `non incovenienter` is a LITOTES.** Was "we can now **not** [sic:
  *incovenienter*] take the spirit…", a flat denial of what Hugh immediately goes on to
  argue (*Hic ergo spiritus… omnia lustrat*). The negative prefix had been quarantined
  inside the marker while `non` survived outside it. Now "not incongruously [sic:
  *incovenienter*]", matching his same idiom rendered correctly at 0127B. **Textbook 7a′.**
- **@0171C — `Nec possis … clare discernere`.** Was "And lest thou be able… to discern
  clearly" — warning the reader against seeing clearly. Hugh warns of LOSING sight
  (*incipias pati caliginem*), and the causal clause he attaches (*quia imago quae
  apparet umbra, sola est, non veritas*) is a reason one CANNOT discern. Migne prints a
  full stop before *Nec*. Now "Nor canst thou, set in the shadow, discern clearly".
- **@0200D — `male secura mens`.** Was "a mind **ill at ease**" — anxious, the opposite.
  *secura* = free from care; the passage is vain anxiety swapped for complacent idleness
  (*vanitas mutata est, non dimissa*), and the mind then *per torporem, et otium… ad
  turpitudinem relaxetur*. Now "a mind harmfully free of care".
- **@0211C — negation scope.** Was "many… do not die **by will**". The negation falls on
  *quando tempus est*, not on *voluntate*. Decisive: *Etiam ii, qui ante tempus nascuntur,
  nascuntur quando tempus est* — EVERY birth is timely, so the parallel is timeliness,
  and *tempus moriendi aliquando eligit prava voluntas* says deaths ARE willed. Now "by
  will die not when the time is".
- **@0241B — scope of `male`.** Was "which he himself does not **evilly will**", i.e. his
  willing was not evil. *male* modifies the not-willing: he wickedly does not want it.
  The next clause prints *et ipse male velit*. Now "which he himself evilly does not will".
  **This column was logged and the entry DEFENDED the rendering** — but it defended
  retaining `non`, which was never the question.
- **@0253A — `minus` distributes over three verbs.** *et minus gemant, et suspirent, et
  desiderent ejus consolationem.* Was "and groan less, and sigh, and desire his
  consolation", leaving the last two standing under *ne* — so the page had God leaving
  them helpless LEST they desire his consolation, against *quia illis alibi reservat
  consolationes suas*. Now "and less groan, and sigh, and desire…".

## Logged, NOT changed

- **@0249D — `exire ab eo qui perverse inhaeserat`** (u6, low confidence). Our English
  renders the *cui* sense ("from that to which he had perversely clung"); Migne prints
  *qui*, which inverts who clings to whom. Flagged as a silent normalization of the named
  `qui`/`cui` mechanism. Left pending a reading, but it should not stay silent: either
  render the printed *qui* or say plainly why not.

## @0150A — the crux STANDS, and here is the evidence that settles it

Two agents pressed the flat declarative *Ergo non meditabimur… et requiescere poterit cor
nostrum* as an under-rendering, since the next three sentences all exhort to seek. The
remedy proposed was to read it as a rhetorical question. **Rejected, on measurement:
Migne uses 403 question marks in this work and points rhetorical questions reliably —
every `Nunquid…?` carries one.** So the period here is his considered pointing, not
carelessness, and re-mooding the English would emend his punctuation (Pattern 8). The
contradiction is real and is the SOURCE's — most likely a dropped `nec` before
*requiescere*. Rendered as printed, logged, not repaired.

**Keep this finding: Migne's question marks in this work are reliable evidence.** Where
his pointing is declarative, that is a positive signal, not a shrug — do not re-litigate.
