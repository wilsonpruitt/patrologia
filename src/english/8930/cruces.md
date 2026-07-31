# Cruces — 8930, Rabanus Maurus, *Commentaria in Cantica* (PL 112, 1089–1166A)

Merged 2026-07-31 from four agent batches, split on canticle boundaries
(0000–0007 · 0008–0014 · 0015–0021 · 0022–0026). 27 chunks, 32,975 Latin words,
205 notes. `verify-english` OK. **First English translation.**

## ⚠ WHAT THIS WORK IS — read before anything else

**It is NOT a commentary on the Song of Songs.** The bare title *Commentaria in
Cantica* says otherwise and the corpus misfiled it until 2026-07-30. It expounds the
**ten canticles sung at Lauds**, written for King Louis from the cell at Ratestorph:
Isaiah 12 · Hezekiah (Isa 38) · Anna (1 Sam 2) · the Song of the Sea (Exod 15) ·
Habakkuk 3 · Deuteronomy 32 · the Three Children (Dan 3) · Benedictus · Magnificat ·
Nunc dimittis. Caught during translation prep when its lemma vocabulary came back with
four *dilectus* and a great deal of Theman and Edom. **The doubled form *Cantica
canticorum* is the reliable signal for the Song; the bare form is not** — watch list
in `data/commentary-overrides.json`.

## ⚠ THE METHOD — Rabanus prints TWO Latin editions on purpose

His preface states it: *utramque editionem simul posui; illam videlicet **juxta quam
Romana psallit Ecclesia**, et hanc **quam ex Hebraica veritate translatam** caeterae
Occidentis ex maxima parte tenent Ecclesiae, **utriusque editionis, ubi inter se
discrepare videbantur, sensum exponens***.

**Expounding where the two editions differ IS THE BOOK'S METHOD**, so levelling the two
Englishes would not lose a nuance — it would delete the reason half these expositions
exist. Fixed formulae: *juxta Romanam* → "according to the Roman [edition]" ·
*ex Hebraica veritate* → "according to the Hebrew verity" · *Alia editio* → "Another
edition" (42×) · *editio LXX interpretum* → "the edition of the LXX interpreters" —
**never "the Septuagint", which is not what the page prints** (one instance swept at
merge). Worked pair: Hab. 3:2 turns on ***auditio* "hearing" vs *auditus* "report"**,
and that single difference is what the whole column argues from.

## Work-wide conventions (reconciled at merge)

- ***canticum*** → "canticle" (28 in the Latin), ***carmen*** → "song" (13). Kept apart;
  "song" is never used for *canticum*, which would collide with the Song of Songs.
- ***feria*** kept, never converted to weekday names: *secunda feria* → "the second
  feria". Rabanus assigns each canticle to its day and **the numbering carries his
  argument**. *Dominica die* → "the Lord's day"; *Sabbato* → "on the Sabbath".
- **Names: *Ezechias* → "Hezekiah"** (established English), but ***Anna* → "Anna", NOT
  "Hannah"** — two expositions turn on *Anna, quae interpretatur gratia*, and the
  English form breaks the gloss. One "Hannah" swept at merge.
- ***christos*** kept as "christs", because the gloss *unctos suos fecit* depends on it.
- Etymologies translated, the name kept as printed: *Theman … interpretatur Auster* ·
  *Edom qui interpretatur terrenus* · *Philisthiim, id est cadentes populo* ·
  *Reseph … reptans ventre interpretatur*.

## Pattern 7a″ — this work is the reason the rule exists, and it fired everywhere

The Benedictus, Magnificat and Nunc dimittis are the most familiar texts in the Latin
liturgy: verses a translator can recite, which is exactly when remembered English
arrives before the printed Latin is read. **Eleven material divergences marked
`[var: …]` in the final batch alone, ~30 immaterial ones logged.** The ones that would
have been lost:
- **Luke 1:50** — *a progenie in progenies*, not the Vulgate's *in progenies et
  progenies*, and neither is the remembered "from generation unto generation".
- **Ps. 86:5** — *homo et homo **factus** in ea* for *natus est*; the gloss then rests
  on *factum* explicitly, so "born" would have gutted the christological argument.
- **Dan. 3:66/69** — ***aestas*** (summer), not *aestus* (heat) — and the heat is the
  gloss nine words later, so levelling collapses it into a tautology.
- **Ps. 38:5** — *ecce **veteres** posuisti dies meos* for *mensurabiles*.
- **Exod. 15:16 @1109C** — *Irruat super eos **fortitudo** et pavor* for *formido*; the
  exposition hanging off it is entirely about fear (*Quid timent daemones?*), so
  Rabanus expounds dread out of a word meaning strength.
- **Isa. 55:10** — *dat semen **ferenti*** for *serenti*; the remembered "him that
  soweth" would remove the sowing from an agricultural figure.
- **Wisd. 5:4** — *aestimabamus **infamiam*** for *insaniam*.
- **The whole Nunc dimittis agrees with the Vulgate word for word** — verified twice,
  precisely because it is the verse most likely to be supplied from memory. Recording
  the negative result is part of the check.

**7a″ extended to APPARATUS, not just lemmata:** at 1139D the two-edition formula itself
is broken — *Alia **edito*** — and was rendered "Another [sic: *edito*]:" rather than
normalized, on the reasoning that a quietly conformed instance of *the book's own
method* is 7a″ transposed. Keep that extension.

## Rendered as printed, NOT repaired

- **@1156D** — *ut omnes renascamur in Christo et **non** aqua baptismatis nostra nobis
  peccata donentur*, in a passage expounding Zech. 13:1 **as** the laver of baptism. The
  page therefore says our sins are not forgiven by the water of baptism, against the
  clause it depends on. Carried, conjecture logged.
- **@1136C — Heb. 12:9, and it needs Wilson.** Migne prints *et reverebamur eos: **non**
  multo magis obtemperabimus patri Spirituum et vivemus* with a colon and **no
  interrogative**. The words are identical to the Vulgate; only the pointing lapsed, and
  Heb. 12:9 is a rhetorical question. Rendered flat per Pattern 8, so the English asserts
  what Paul denies. **Tested empirically, as on 11065: Migne DOES point questions in this
  work** — five of six `Nunquid` clauses carry their mark; the low density (1.36 per
  1,000 words against 11065's 6.11) is genre, not carelessness. So the flat rendering
  stands. **But this is the second instance of the class and it is sharper here**, since
  it is a quoted scripture whose sense is not in doubt. See the open question below.
- **@1092A — *Ecce Deus Salvator mens*** (for *meus*). *mens* is a real word, so Pattern
  12's boundary forces "Behold, God the Saviour, mind." **A third specimen for the
  real-word-typo convention Wilson still owes** (with 11553 @0540B *Ei*/*Et* and 11081
  @0030B *munde*/*mundo*).
- Silent-repair candidates all declined and logged, never quietly fixed: *descendunt* for
  *defendunt* (1125C — "descend from a wound", which reads oddly and should), *in
  fortitudine* for *in formidine*, *infirmorum* for *infimorum*, *manent* for *manant*,
  *ducta* for *dicta*, *abysso* for *ab ipso*.
- Plate irregularities mirrored, not tidied: **nine unclosed or inverted guillemet
  passages** across the work (and one apparent case correctly REJECTED at 1116C–D, where
  the pair balances across a paragraph break), several missing terminal stops, a question
  closed with a full stop, the 1165A → 1166A column jump. One supplied `»` was caught by
  a parity check and removed. **Expect a proofreader to want to "fix" these.**

## ▶ OPEN for Wilson — when the pointing lapses on a scripture citation

At @1136C Migne's **words** match the received text exactly and only his **question
mark** is missing, and the result is English that asserts the opposite of the verse it
quotes. Pattern 8 says punctuation follows the plate, never supplied — which is what
shipped, here and at 11065 @0150A. The alternative is a narrow exception for scripture
citations where the words are identical and only the mark is lost.
Recommendation on file: **keep Pattern 8 unchanged and mark these on the page instead**,
so the reader meets the flat sentence *and* a note that the plate lost the interrogative
— the "we never emend Migne" promise stays intact and nobody is misled. Not acted on.

## For the indexer
Non-resolving `[n: …]` references reproduced as printed and itemized per batch: six in
0000–0007 (e.g. `(Rom. VI)` on a Colossians 3 quotation, `(Isa. V)` on Isa 53), five in
0015–0021 (Matt. 5:19 as XIX; Ezech. 33:11 as Psal. XL; Matt. 18:10 as Matth. XII; Exod.
32:4 as Exod. XII; Matt. 16:27 as Rom. II). Four inline citations set as running text
with a column anchor inside — see `data/inline-citations/BRIEF.md`, and note `(Psal. II)`
at 1121C is **wrong as printed** (it is Ps. 23:2) and is left wrong.

## Per-batch logs

The four batch logs follow verbatim, in chunk order.

# Cruces — 8930 (Rabanus Maurus, *Commentaria in Cantica*), chunks 0000–0007

Range: the dedicatory preface to King Louis; the Canticle of Isaiah (Isa. 12);
the Canticle of Hezekiah (Isa. 38); the Canticle of Anna (1 Reg. 2); and the
Canticle of Exodus (Exod. 15) through 1111D — cols 1089–1111D.
Translated 2026-07-31. First English translation.

---

## Work-wide conventions set in this range

Terminology decisions not already fixed by the prompt. Later agents on 8930 and
merge-time reconciliation should follow these.

- **Title.** The `## Commentaria in Cantica` head of chunk 0000 is rendered
  **"Commentaries on the Canticles."** Not "on the Song of Songs" — the work
  expounds the ten canticles of Lauds, and the plural *Cantica* here is the
  liturgical set, as Rabanus's own preface states (*cantica quae in matutinis
  laudibus sancta psallit Ecclesia*).
- **The two editions.** *illam … juxta quam Romana psallit Ecclesia* → "that one
  … according to which the Roman Church sings"; *quam ex Hebraica veritate
  translatam* → "translated from the Hebrew verity" (prompt). In the canticles
  themselves Rabanus most often signals the second text by **edition** rather
  than by name, and those formulae are kept fixed: *juxta aliam editionem* →
  "according to the other edition" where the pair has just been named and only
  two are in play (1096A), otherwise **"according to another edition"**
  (1104A, 1104C-note, 1105A, 1105D, 1108D–1109A, 1111B); *Alia autem editio
  habet* / *Alia autem editio sic habet* → "But another edition has" / "But
  another edition has it thus"; *Alia editio:* → "Another edition:";
  *Septuaginta … ita posuerunt* → "the Seventy set it down thus"; *pro quo LXX
  posuerunt* → "for which the Seventy set down"; *juxta LXX* → "according to the
  Seventy"; *aliqui interpretum* → "some of the interpreters"; *ut alii
  interpretati sunt* → "as others have translated". **"Roman" and "Hebrew
  verity" are never used as loose synonyms for "another edition"** — Rabanus
  does not label the pair that way inside the expositions, and importing the
  labels would assert an identification he leaves open.
- **Names.** *Ezechias* → **Hezekiah** (established English form). *Anna* →
  **Anna**, NOT "Hannah": the exposition at 1098D turns on the etymology
  (*Anna, quae interpretatur gratia*) and again at 1101B (*cujus nomen
  interpretatur gratia ejus*), and "Anna" is also the Douay form, so the printed
  name stands. *Fenenna* → **Phenenna**; *Simon* at 1099A is kept as printed
  (the plate's form for Simeon, Luke 2); *Manasses* → Manasseh; *Moyses* →
  Moses; *Amalech* → Amalec; *Philisthiim*, *Edom*, *Moab*, *Chanaan*, *Sion*,
  *Ratestorph*, *Rasni*, *Ia*, *PIDIA* all kept exactly as printed.
- ***feria*** kept (prompt): "the second feria" … "the sixth feria"; *Dominica
  die* → "the Lord's day"; *Sabbato* → "on the Sabbath". *matutinis laudibus* →
  "the morning lauds"; *vespertino officio* → "the evening office".
- ***canticum*** → "canticle" throughout (prompt); *carmen* → "song"; *hymnus* →
  "hymn"; *psallitur / canitur / decantatur* → "is sung" (no attempt to
  distinguish; the plate uses them interchangeably of the same act).
- ***confessio* / *confiteri*** → "confession" / "to confess" throughout, never
  "praise" or "thanksgiving", because both canticles gloss the word's ambiguity
  explicitly (1091D *aequivocum nomen est*; 1097B and 1097C *confessio … pro
  laudatione ponitur*). Rendering it by its glossed sense would delete the gloss.
- ***adinventiones*** (Isa. 12:4) → **"devices"**, kept identical in lemma and
  exposition (*Adinventiones enim Domini praecepta sunt divina*).
- ***gratiarum actio*** → "thanksgiving"; *scriptura* as the title of Isa. 38 →
  "writing" (so that the three competing titles — writing / prayer /
  thanksgiving — stay three).
- ***ascensor*** → **"rider"**, *equitatus* → "riding", *quadrigae* →
  "four-horse chariots", *currus* → "chariot". The Exodus exposition runs on the
  horse/rider figure for two columns and the words must not collapse into each
  other.
- ***statores*** (Exod. 15:4 in the second edition, *electos ascensores ternos
  statores*) → **"attendants"**, with *terni*/*trini* both rendered "threefold".
  The gloss depends on the number, not on the office (*triplex est hominibus
  peccandi via*), so an English word was preferred to carrying the Latin; the
  choice is flagged here because *stator* has no settled English equivalent and
  a later agent meeting it again should follow this rendering rather than invent
  a second.
- ***traduces*** (of vine-layering, 1110C) → **"layerings"**, kept for both the
  verb-phrase (*traduces fieri*) and the noun, so Rabanus's viticultural figure
  survives.
- ***sanctuarium* / *sanctimonium*** (1110D–1111A) → "sanctuary" / "holy place",
  kept distinct because the sentence sets them side by side as alternatives
  (*Sanctuarium sive sanctimonium dicitur*) and then builds on *sanctimonium*
  alone for the rest of the paragraph.
- ***conflatorium*** → "smelting-place"; *conflat* → "smelteth" (1107C).
- **Italics.** The Latin of this range carries italic markup only in the two
  canticle sub-titles (*Regis Judae.*, *Matris Samuelis prophetae.*), which are
  kept italic in the English heads. The English adds no other italics except
  inside `[sic: …]` and for *Ia* / *alleluia* at 1095A, where the plate is
  discussing the syllable as a word. Straight quotes " " are used where English
  needs a quotation mark Migne does not print (Pattern 6); guillemet counts are
  1:1 with the Latin twin in all eight chunks.

---

## Defects carried through — `[sic: …]`

- **Head of 0001** — `INCIPIT CANTICUM ISALAE PROPHETAE.` `ISALAE` for *ISAIAE*
  (the same head's own text names Isaiah in the first line). Carried untranslated
  in italics: "HERE BEGINS THE CANTICLE OF [sic: *ISALAE*] THE PROPHET." Pattern
  9's section-label exemption was considered and rejected: this is not a
  structural label with a normalized English exponent (QUAESTIO → QUESTION) but a
  **proper name**, and normalizing it would silently mend a misprint in the one
  place a reader of the English would never think to check.
- **1093C** — *« Confitemini Domino et invocate **nonem** ejus, annuntiate inter
  gentes opera ejus. »* `nonem` is not a word; conjecture *nomen*, which the same
  clause carries correctly nine lines earlier (*invocate nomen ejus*). Carried:
  "call upon his [sic: *nonem*]".
- **1095D** — *Dominus enim poenitens est **uper** malitiis.* `uper` is not a
  word; conjecture *super*. Carried: "For the Lord is one who repents [sic:
  *uper*] evils." The `[sic:]` governs no negation or conjunction (Pattern 7a′
  checked).
- **1099B** — *Distinctione utitur, **non dizit**, nisi Dominus, sed nullus est…*
  `dizit` is not a word; conjecture *dixit*. Carried, and — this is the 7a′ point
  — the printed **`non` stands outside the marker and is rendered**: "he does not
  [sic: *dizit*], 'unless the Lord,' but there is none…". The quarantined
  fragment is two letters; the negative it sits under governs translated text and
  therefore had to survive into the English.
- **1100A** — *Saturati prius pro pane se **rocaverunt** et famelici saturati
  sunt.* (1 Reg. 2:5.) `rocaverunt` is not a word; conjecture *locaverunt*, which
  is the Vulgate's verb (*pro panibus se locaverunt*, "hired themselves out for
  bread"). Carried: "They that were filled before have [sic: *rocaverunt*]
  themselves for bread". The English lemma consequently has no finite verb — that
  is the cost of Pattern 12 here, and it is the right cost: supplying "hired"
  would put the Vulgate's word on the page in place of the plate's.
- **1105A** — *Notandum vero, quod juxta aliam **editiotem** legitur.*
  `editiotem` is not a word; conjecture *editionem*, which this work prints
  correctly a dozen times. Carried: "according to another [sic: *editiotem*]".

## Scripture divergence — `[var: …]`

- **1109C, Exod. 15:16** — Migne prints *Irruat super eos **fortitudo** et pavor
  in magnitudine brachii tui* where the Vulgate has *formido*. Rendered as
  printed, "Let **strength** and dread fall upon them", with a `[var: …]` giving
  the received reading. This one is material rather than merely divergent: the
  exposition attached to the lemma is *entirely* about fear (*Quid timent
  daemones, quid tremunt? … Timor ergo et tremor cadet super eos*), so on the
  printed text Rabanus expounds dread out of a word that means strength. The
  divergence is left standing and marked; no emendation.

---

## Cruces: printed readings rendered literally (Pattern 7), no edit made

Each is a real word or a construable phrase, so it is rendered as ordinary
English (Pattern 12's boundary) and only logged here.

- **1092A, Isa. 12:2** — *« Ecce Deus Salvator **mens**: fiducialiter agam, et
  non timebo. »* Conjecture *meus* ("Behold, God my Saviour"), which is the
  Vulgate and which the following sentence assumes. But *mens* is a real word,
  so under Pattern 12's boundary it is rendered rather than carried: "Behold, God
  the Saviour, mind". **This is the one line in the range where the literal
  rendering is actively strange**, and it is deliberate — a reader who meets
  "mind" and the crux learns that the plate is defective, whereas "my" would have
  concealed it. Flagged for a later sweep as a candidate for the 11081-class
  reopening of the marker boundary.
- **1093B, Isa. 12:5** — *« **Cantate Domini** quoniam magnifice fecit. »*
  Genitive where the sense wants the dative *Domino*. Rendered on the printed
  case, "Sing ye **of** the Lord, for he hath done magnificently." Both the
  parallel at 1093C (*Confitemini Domino*) and the Vulgate have the dative;
  English has a case exponent here, so the printed form can be rendered and is.
- **1094A, Isa. 11:11** — *ita duntaxat, ut adjiciat secundo **manum tuam** ad
  possidendum*. The Vulgate and the sense want *manum suam*; the plate's second
  person is inside a sentence otherwise addressed to Sion, so "thy hand" is not
  impossible. Rendered as printed; the possessive was NOT silently switched to
  "his".
- **1096B, Isa. 38:14** — the lemma prints *Domine, vim patior, **responde** pro
  me*, and Rabanus's paraphrase eight lines later prints *tu **sponde** pro me*.
  Two different verbs, rendered two different ways ("answer thou for me" /
  "be thou surety for me"). Levelling them to the Vulgate's *responde* was the
  obvious 7a″ trap here and was refused; the paraphrase may well be Rabanus
  glossing rather than misquoting.
- **1096B, Isa. 38:15** — *quid respondebit mihi, cum ipse **fecerim***: first
  person where the Vulgate has *fecerit*. Rendered "since I myself have done it";
  the exposition immediately below construes it the other way (*quia fecit ipse
  quod voluit*, "since he himself did what he willed"), which is rendered as
  printed too. The plate contradicts itself across ten lines and the English
  reproduces the contradiction.
- **1095B, Ps. 114:9** — *Placebo Domino in regione **viventium*** — Vulg.
  *vivorum*. Rendered "of the living"; the whole paragraph turns on *terra
  viventium*, so the divergence is doing work and is not marked.
- **1096A** — *atque spatium vitae, quod inopinate foris est: additum sine
  augmento praescientiae fuit intus statutum* — the sentence has no terminal
  punctuation on the plate and its clauses do not resolve. Rendered as closely as
  the words allow ("and the span of life, which unexpectedly is outside: it was
  added without increase of foreknowledge, having been appointed within") and,
  per Pattern 8, **no full stop has been supplied**. The English chunk therefore
  ends that paragraph unpunctuated, as the Latin does.
- **1097D** — *Ab hodie enim filios faciam, qui annuntiabunt justitiam tuam,
  **causalis**, quae conjunctio sequentia cum superioribus copulat*. The bare
  adjective *causalis* stands without its noun (*conjunctio* follows in the
  relative clause). Rendered "a causal [particle], which conjunction couples what
  follows with what goes before", the supplied noun bracketed per the
  supplied-word convention.
- **1099A** — *Quia et in angustiis pressurarum sermo Dei non est alligatus, **nec
  in praeconibus alligatis***. Rendered "nor is it bound in bound heralds" — the
  jingle is the plate's (2 Tim. 2:9), and both negatives are carried.
- **1100D** — *quamvis commodius possit intelligi eosdem vivificare, quos
  mortificaverit, **id enim vel repetivit addendo***. Elliptical and probably
  corrupt (*vel* for *velut*?). Rendered as printed, "for this he either repeated
  by adding."
- **1100C–D** — *Cernimus etiam quae multa in filiis, nunc infirmatam Jerusalem
  terrenam*: no finite verb in the relative clause, and *quae multa in filiis* is
  a formula the chunk uses four times. Rendered "We also behold her who was many
  in sons, the earthly Jerusalem, now made weak."
- **1101B** — *hoc totus habet sermo, cujus nomen interpretatur gratia ejus.*
  *totus … sermo* with *habet* is odd and *gratia ejus* answers no antecedent
  cleanly. Rendered literally, "this the whole discourse holds, whose name is
  interpreted 'his grace.'" The etymology of *Anna* (1098D) is what it points
  back to; not emended.
- **1102A–B, 1 Reg. 2:10** — the *ejus*/*suum* alternation is the whole point of
  the paragraph (*Dominum formidabunt adversarii **ejus** … Potest ex ambiguo
  graeco intelligi et adversarium **suum***) and is kept distinct throughout:
  "his adversary" vs. "his own adversary".
- **1102C** — *« Et dabit imperium regi suo, hoc est, populo christiano: …
  Sequitur: Et sublimabit cornu Christi sui. »* Migne opens the guillemet at
  *Et dabit* and does not close it until after *Christi sui*, so that his own
  exposition and the word *Sequitur:* fall **inside** the quotation. Reproduced
  1:1 (Pattern 5); not re-punctuated.
- **1102C** — *Quomodo **Christus** exaltabit cornu Christi sui?* Sense wants
  *Dominus* (the lemma's subject). Rendered as printed, "How shall Christ exalt
  the horn of his Christ?" — which is not nonsense on Rabanus's own next
  sentence (head and body are one Christ), so no conjecture is pressed.
- **1103B, Isa. 53:2** — *et vultus ejus ignobilis super filios hominum
  **glorificatus est***. The final verb belongs to no clause of the quotation and
  looks like contamination from the *glorificatus/honorificatus* discussion
  running around it. Rendered as printed, "he was glorified", inside the
  quotation where it is printed.
- **1103A–C** — **the three verbs of Exod. 15:1 are three.** Migne prints
  *gloriose enim **magnificatus** est* (1103, the incipit), *gloriose enim
  **honorificatus** est* (twice, 1103A and 1103B), and then argues with
  *glorificatus est* / *gloriose glorificatus est*. Rendered "magnified" /
  "honoured" / "glorified" respectively, and at 1111D *Cantabo Domino, gloriose
  enim honorificatus est* keeps both the first-person *Cantabo* (against
  *Cantemus* at the opening) and *honorificatus*. The whole exposition is built on
  the difference between being glorified and being *gloriously* glorified;
  levelling any of the four would have destroyed it.
- **1103C** — *tunc **non solum** glorificatur. Cum omnes ita honorificant Filium,
  sicut honorificant Patrem.* The *non solum* has no answering *sed etiam*, and
  the following *Cum* clause stands as its own sentence with the plate's full
  stop before it. Rendered as printed, negation and punctuation both ("then he is
  not only glorified. When all so honour the Son as they honour the Father."),
  per Patterns 7a and 8.
- **1103C** — *et post adventum humanitatis **secundum** nobis in gloria ostendit
  adventum*: *secundum* read as the adjective agreeing with *adventum*, "shows to
  us the second coming in glory".
- **1103C, 1104B** — *equum et ascensorem **projecit*** (1103, 1103D) vs. *equum
  et ascensorem **dejecit*** (1103C): the same verse quoted twice with different
  verbs, rendered "cast" and "cast down". Not levelled.
- **1105A** — *plurimos simul plagis **torti** verberibus cogit*. *torti* has no
  head noun. Rendered as closely as the words allow, "many at once he compels
  with strokes and twisted lashes"; conjecture *tortis*, agreeing with
  *verberibus*. Not emended.
- **1107A** — *Demersi sunt, inquit, tanquam plumbum **in aquam** validissimam*
  (accusative), against *in aqua validissima* (ablative) at 1107B and 1107D in
  the same argument. Rendered "in the mightiest water" throughout, since English
  has no exponent for the case difference here; logged so a later sweep knows the
  plate is inconsistent and the English is not.
- **1108A, 1 John 3:2** — *« Filioli, **nondum scimus quid futuri sumus**; »* —
  Vulg. *nondum apparuit quid erimus*. Rendered as printed, "we do not yet know
  what we shall be." Not marked `[var: …]`: the argument that follows is about
  likeness by grace, not about knowing or appearing, so the sense does not turn
  on it.
- **1108B–C, Exod. 15:12** — the lemma is printed *Extendisti **manum** tuam et
  devoravit eos terra*, and Rabanus re-quotes it eight lines later as *Extendisti
  **dexteram** tuam et devoravit eos terra*. Rendered "thy hand" and "thy right
  hand" respectively. This was the sharpest 7a″ trap in the range — the second
  form is the one the argument uses (the Lord's right hand on the cross), and the
  temptation is to make the lemma match it.
- **1109B** — *invenies quia Philisthiim, id est, **cadentes populo***. Jerome's
  etymology is *cadentes poculo* / *ruina bibentes*. Rendered on the printed word,
  "those falling by a people"; the name itself is kept as printed per the
  etymology convention.
- **1109A–B** — the two editions of Exod. 15:14–15 differ at every clause
  (*Ascenderunt populi* / *Audierunt gentes*; *conturbati sunt principes Edom* /
  *festinaverunt duces Edom*; *obriguerunt* / *tabuerunt*), and Rabanus's own
  recapitulation then mixes them (*vel festinasse, ut dicit, vel iratae esse,
  festinasse*, with *festinasse* printed twice). All rendered as printed,
  including the doubled *festinasse*, which is **not** marked `[d: …]`: the two
  occurrences sit in different syntactic slots (the list and its resumption), so
  it is Rabanus's clumsiness rather than a compositor's doubling.
- **1110A** — *Manent ergo lapides nunc, donec transeat populus tuus hic, quem
  **acquisisti***, against *quem **possedisti*** in the lemma (1109D) and *quem
  **acquisivit*** at 1110A. Three verbs for the same clause within one column,
  rendered "hast possessed" / "acquired" / "hast acquired". Not levelled.
- **1111A** — the column anchor falls **inside a word**: *ne tibi ali [1111A]
  quid desit*. This is a page break through *aliquid*, not split type (Pattern
  10), so no `[sic: …]`. The anchor is reproduced in the English at the nearest
  equivalent point in the clause ("that nothing [1111A] be lacking to thee");
  exact intra-word placement is not reproducible across the languages.
- **1111B** — *aliquis sine dubio longior quidem, tamen **potitur** finis*.
  Rendered "some end, longer indeed without doubt, nevertheless takes hold."
  *potitur* normally takes the ablative and has no object here; construed
  intransitively rather than emended.
- **1107C** — the note and the column anchor invert: Migne prints *« Modicae
  fidei, quare dubitasti? » [1107C] [n: (Matth. XIV.)]*. Both are reproduced in
  that order, anchor before note.

---

## Migne's `[n: …]` references that do not resolve

Reproduced verbatim per the verbatim rule; listed only so the indexer's
`unparsed`/mismatch bucket has a reason attached.

- **1089C** `[n: (Matth. VII)]` on *In qua mensura mensi fueritis remetietur
  vobis* — correct (Matt. 7:2).
- **1092A** `[n: (Rom VII)]` — printed without the full stop after *Rom*;
  reproduced as printed.
- **1092B** `[n: (Psal. CXVII)]` on *Dominus mihi adjutor est, et ego videbo
  inimicos meos* — Ps. 117:7, correct.
- **1098D** `[n: (Psal. LXX)]` on *Exaltabuntur cornua justi* — Ps. 74:11.
- **1099C** `[n: (Eccli. III)]` on *Altiora te ne quaesieris* — Ecclus. 3:22,
  correct; the neighbouring `[n: (Eccle. V)]` on *Dominus in coelo et tu super
  terram* is Eccles. 5:1, correct.
- **1100D** `[n: (Rom. VI)]` on *Si mortui estis cum Christo, quae sursum sunt
  quaerite* — Col. 3:1, not Romans. The whole paragraph (through *vita vestra
  abscondita est cum Christo in Deo*) is Colossians 3.
- **1103B** `[n: (Isa. V)]` on *vidimus eum, et non habebat speciem neque
  decorem* — Isa. 53:2.
- **1105D** `[n: (Job XLI)]` on *Aestimabit abyssum quasi senescentem* — Job
  41:23 (Vulg. 41:22), correct; printed without the full stop after *Job*.
- **1108A** `[n: (Joan. X)]` on *Ego dixi: Dii estis* — quoted by John 10:34 from
  Ps. 81:6; the following *Deus stetit in congregatione deorum* (Ps. 81:1) is
  given no note at all.
- **1109C** `[n: (Rom. X)]` on *Tota die expandi manus meas* — Rom. 10:21,
  correct (quoting Isa. 65:2).
- **1110B** `[n: (Psal. LXXIX)]` on *Vineam ex Aegypto transtulisti* — Ps. 79:9–11,
  correct.
- **1111A** `[n: (I Cor. III.)]` — printed with the full stop inside the
  parenthesis; reproduced as printed. Note also that this `[n: …]` falls **inside**
  the closing guillemet in the Latin (*« Dei agricultura, Dei aedificatio estis
  [n: (I Cor. III.)] »*), and is reproduced there.

## Migne's scripture wording, divergent from the Vulgate but rendered as printed

Not marked `[var: …]` because the sense does not turn on the divergence.

- **1092A, Acts 4:12** — *non est aliud nomen **super terram** datum hominibus*
  — Vulg. *sub caelo*. Rendered "upon the earth". Rabanus is paraphrasing in his
  own prose (no guillemets), so no marker.
- **1092A, Eph. 2:5** — *« Gratia enim **sumus** salvati »* — Vulg. *estis
  salvati*. Rendered "we are saved"; the first person is what makes the sentence
  Rabanus's own confession.
- **1093B, Phil. 2:10** — *omne genu **flectitur*** — Vulg. *flectatur*.
  Rendered "is bent" (indicative), not "let every knee bow."
- **1093C, Ps. 104:1** — *Confitemini Domino et invocate [nonem] ejus,
  annuntiate inter gentes opera ejus* — Vulg. *notas facite in populis
  adinventiones ejus*. The plate's own Isaiah lemma four lines earlier carries
  the *adinventiones* wording, so the two are deliberately being compared.
- **1093D, Luke 6:46** — *Quid **enim** vocatis me* — Vulg. *Quid autem*.
- **1094B, Ps. 50:20** — *Benigne fac in bona voluntate tua, Sion* — the
  vocative *Sion* is displaced from the Vulgate's *Benigne fac, Domine, in bona
  voluntate tua, Sion*; *Domine* is simply absent. Rendered as printed.
- **1099A, Luke 2:29–30** — *Nunc dimittis, inquit, Domine, servum tuum in pace*
  — the *inquit* is inside the quotation and stays there (Pattern 5).
- **1104C, Exod. 14:28–29** — *per medium **sicci maris*** — Vulg. *per medium
  sicci maris*; agrees. *quasi pro muro* for Vulg. *quasi pro muro*; agrees.
  Noted only because the surrounding conflation invites suspicion.
- **1104D, 1 Cor. 10:1–2** — *Omnes **quidem** mare transierunt, et omnes
  **quidem** baptizati sunt* — the doubled *quidem* is the plate's; both are
  rendered ("all indeed … all indeed"). Not marked `[d: …]`: they govern two
  different verbs, so this is not a doubled run.
- **1106C, Exod. 15:10** — the chunk quotes the verse twice within four lines, as
  *flavit spiritus tuus et operuit eos mare* and then as *Misisti spiritum tuum
  et cooperuit eos mare*, and the second form is what the fivefold-Spirit argument
  needs. Both rendered as printed ("thy spirit blew" / "Thou didst send thy
  spirit"); *operuit* and *cooperuit* kept apart as "covered" (the plate uses the
  compound only in the second form).
- **1106D** — *Per spiritum irae tuae divisa est aqua* against the lemma's *in
  spiritu furoris tui congregatae sunt aquae* (1106B). Rabanus says he is quoting
  what "he said above"; he is not, and it is left uncorrected.

## Negations checked and carried

Every printed negative in the range appears in the English, and none appears that
is not printed. Those most at risk of smoothing, checked individually:

- **1089B** *non cito reprehendat, sed prius consideret utrum majorum sensui
  concordet et veritati contrarium **non** sit* — the second negative is the one
  the clause turns on and reads oddly in English ("is not contrary to the truth"
  after "accords with"); carried.
- **1090A** *agnoscat hoc **non frustra** factum* — carried.
- **1092B** *non timet adversarium, quia nocere illi non potest, **nisi**
  permissus* — all three carried.
- **1092C** *sed **ne** putaretur sola pericula declinare quem Domini dona
  servabant* — the negative purpose clause is rendered as such ("lest he … should
  be thought"), per Pattern 7a′.
- **1092C–D** *creationem … **non semper** conditionem eorum quae **non** erant
  sed interdum gratiam … intelligamus* — both carried; the sentence is about what
  creation is *not*.
- **1092D** *ne videretur alter esse praeter eum* / **1092D** *nequaquam de aquis
  fluminis Aegypti … neque de aquis fluminis Rasni* — carried, including the
  double *nequaquam … neque*.
- **1095C** *Timet ergo, **ne** … **non** habitet in quiete, **ne non** videat
  Deum … **ne** … dissolvatur, **ne** … praecidatur, et **nequaquam** … oriatur*
  — six negatives in one sentence, including the doubled *ne non*, all carried.
  This is the single densest negation site in the range.
- **1095D–1096A** *nec propheta igitur fallax … nec Dominica statuta convulsa
  sunt* — carried.
- **1096B** *nec se putat prae doloris magnitudine esse ultra victurum* — carried.
- **1097A** *nec patitur quae refert de humano statu* — carried.
- **1097B** *quia **non** infernus confitebitur tibi **neque** mors laudabit te* —
  carried, and the exposition's *infernus enim et mors **non** confitebuntur
  **neque** laudabunt te* likewise.
- **1097C** *et **non est** pulchra laudatio in ore peccatoris. Cumque infernus et
  mors **non** confiteantur, **nec** laudent Deum* — carried.
- **1097D** *quod certe suae **non** erat potestatis, **neque enim** per Prophetam
  illi liberi repromissi sunt … et **non** benedixit, sed maledixit Deo* — all
  carried; the last is the crux of the Manasseh sentence.
- **1099B** *Neque enim est alius extra te, et **non** est fortis sicut Deus
  noster … quia nemo fit, **nisi** abs te … **nullus** tamen eorum naturaliter est
  … *non est*, *non est* (the shadow and smoke) — carried.
- **1099C** *Nolite multiplicare* / *Altiora te **ne** quaesieris* / *Omnis sermo
  malus … ex ore vestro **non** procedat* — carried.
- **1099C–D** *ignorantes Dei justitiam … justitiae Dei **non** sunt subjecti …
  **non** de Dei posse placere* — carried.
- **1100A** *sine Dei dono atque adjutorio* — no printed negative; none supplied.
- **1100A–B** *ne crederent in Salvatorem* / *quibus lex illa **non** erat data* /
  *quia in eis **non** terrena, sed coelestia sapuerunt* — carried.
- **1100B** *In Hebraeo et in Septuaginta translatione **non** plurimi, sed septem
  leguntur* / *Anna autem **non plus quam** quinque filios habuerit* — carried.
- **1100D** *quoniam littera est, et spiritus **non** est* — carried.
- **1101A** *Nam qui proprio filio **non** pepercit* / *Non derelinques animam meam
  in inferno* — carried.
- **1101B** *de **nullo** melius quam de illo intelligo* / *ut caro ejus **non**
  videret corruptionem, **nec** illud ab illo alienabo* — carried.
- **1101C** *nec solum detrimenta, verum etiam stercora* — carried.
- **1102A** *non viribus nostris, quia **non** in virtute propria potens est vir …
  ac per hoc **non** glorietur potens … et **non** glorietur prudens … **nec**
  dives in divitiis suis* — five carried in one period.
- **1102B** *non parva ex parte intelligit* — carried ("In no small part does he
  understand").
- **1102B** *Nam quis ascendit … **nisi** et qui descendit* — carried.
- **1102C** *quoniam **non** judicabuntur, quae in melius, vel in deterius medio
  tempore commutantur* — carried.
- **1103A** *tanquam qui sciant, **non** sua virtute, sed Dei gratia victoriam
  paratam* — carried.
- **1103B** *quasi **non** sufficeret glorificatus est* / ***non tamen** gloriose
  glorificatus est* (twice) / *et **non** habebat speciem neque decorem* /
  *humiliter, **non** gloriose glorificatus est* — all carried; see the
  three-verbs crux above.
- **1104B** *nec est ullus qui possit illi resistere. **Nolo** putes, quia tantum
  visibiles pugnas conterit Dominus … quae nobis sunt **non** adversum carnem et
  sanguinem* / *non est ulla creatura cujus Dominus **non** sit* — carried.
- **1104C** *quod **nec unus quidem** superfuerit ex eis* / *quia mundi illecebris
  **non** permiscetur* — carried.
- **1105A** *etiamsi videntur rogare Jesum, **ne** eos interim mittat in abyssum*
  / ***non** illi satis est uni equo ascendere* — carried.
- **1105D** *quia **non** erant tales lapides, de quibus suscitari possent filii
  Abraham* — carried; the whole comparison depends on it.
- **1106D** *quibus profuit, quod aqua divisa est, **non** fuit ille spiritus irae
  Dei?* — carried as a question, negative intact. Smoothing this to a statement
  would have reversed Rabanus's point about the one Spirit.
- **1107A** *timor incussus est eis qui gratiam **nondum** intelligebant* /
  *conscripta tantummodo jubens **sine** adjutorio gratiae* — carried.
- **1107B** *sancti autem **non** demerguntur … et peccati pondere **non**
  gravantur* / *Ipse enim est, qui vere peccatum **nescit*** / ***non enim** tantus
  erat et talis, qui **nihil omnino** de specie plumbi in se haberet admistum* —
  all carried, including the difficult *nihil omnino* clause, which is rendered
  "as to have nothing at all of the nature of lead mingled in himself" and is
  immediately contradicted by *Habuit, licet parum* — the plate's own tension,
  preserved.
- **1107D–1108A** *non simulacris gentium comparat Deum, **nec** daemonibus* /
  ***nullus** tamen Deo similis invenitur* / *Similitudo tamen haec, **non** ad
  naturam, sed ad gratiam revocatur* / ***nondum** scimus quid futuri sumus* /
  ***Nullus** ergo in diis similis Domino, **nullus** enim invisibilis, **nullus**
  incorporeus, immutabilis, **nullus** sine initio et sine fine, **nullus**
  creator omnium, **nisi** Pater* — the five-fold *nullus* plus *nisi* carried
  entire.
- **1108C** *qui ad coelum **non** respicit, qui futura **non** cogitat, qui
  judicium Dei **non** metuit, **nec** beata ejus promissa desiderat* / *in quo
  animus **nihil** valet* — carried.
- **1108D** *Nec tamen penitus desperandum est* — carried.
- **1109A–B** *nullum ex his gentibus interfuisse mirabilibus … constat* —
  carried.
- **1109C** ***Non** te ergo aliter timebunt, **nec** aliter tremor tuus veniet
  super eos, **nisi** videant in te crucem Christi, **nisi** et tu poteris dicere*
  / *absit gloriari, **nisi** in cruce* — six carried in two sentences.
- **1110A** *Fieri tanquam lapidem, **non** est natura esse lapidem; **non enim**
  fieret, **nisi** quod **non** erat* / *et **non** ex arbitrii libertate in haec
  esse deductos* / ***Non enim** dixit, fiant tanquam lapis, et tacuit* / *Quo
  scilicet post transitum populi **non** sint tanquam lapides* / ***Verum non**
  eatenus ut in lapidis natura permaneat* — carried; the opening argument of 0007
  is nothing but negations and any dropped one inverts it.
- **1110B** *quae sua esse **non** dubium est* — carried.
- **1110B–C** ***Non vult** nos Deus in Aegypto plantare, **nec** in dejectis …
  **non** plantat in vallibus … **non vult** eos iterum in humilibus collocare …
  **non vult** nos per terram repere, **nec ultra vult** vineam suam … **non** in
  quibuscunque humilibus arboribus* — seven carried in one period; **1110D**
  *omnis arbor, quae **non** facit fructum bonum* likewise.
- **1110D** ***non vult** te inducere ad laborem, **non vult** ut ipse tibi facias
  habitaculum* — carried.
- **1110D–1111A** *hoc **non** dicit manu hominis factum, sed manu Dei* / ***ne**
  tibi aliquid desit* / *quod **non** manu hominum factum est* / ***non enim** manu
  hominum factum est, id est, **non** opere humano* / *sine manibus, id est,
  **absque** opere hominum* — carried.
- **1111B** *nullum sensum termini alicujus aut finis reliquit* — carried.
- **1111C–D** *ut in medio peccatorum incedentem te **non** infundat humor peccati
  … **nulla** libidinis unda respergat, **nullus** cupiditatis aestus verberet* /
  ***non** declinat ad dexteram, **neque** ad sinistram* — carried.
# Cruces — 8930 (Rabanus Maurus, *Commentaria in Cantica*), chunks 0008–0014

Range: the Canticle of Habakkuk (Hab. 3), complete — cols 1112A–1132B.
Translated 2026-07-31. First English translation.

---

## Work-wide conventions set in this range

Terminology decisions not already fixed by the prompt. Later agents on 8930 and
merge-time reconciliation should follow these; where a decision only concerns
Hab. 3 it is marked *(local)*.

- **The two editions.** *juxta Hebraicam veritatem* / *ex Hebraica veritate* →
  "according to the Hebrew verity" (fixed by prompt). Distinguished from
  ***juxta Hebraicum*** → "according to the Hebrew" and from ***juxta
  Hebraeos*** → "according to the Hebrews"; the three are kept apart wherever
  Migne prints them apart. *juxta Septuaginta* → "according to the Septuagint";
  *juxta LXX* / bare `LXX:` → "according to the LXX" / `LXX:` (the abbreviation
  is left standing, as Migne prints it). *juxta aliam editionem* → "according to
  another edition"; *Alia editio:* → "Another edition:"; *juxta quaedam
  exemplaria* → "according to certain copies"; *quidam codices habent* →
  "certain codices have"; *juxta nos* → "according to us"; *juxta historiam* →
  "according to the history"; *Solam nostram editionem posuimus* → "we have set
  down our own edition alone."
- ***auditio* vs *auditus*** — the two editions differ at Hab. 3:2 (Hebrew
  *auditionem tuam*, LXX *auditum tuum*) and the exposition then runs on
  *auditus* for a full column. Rendered **"thy hearing"** for *auditio* and
  **"report"** for *auditus* throughout (*auditus* = "report" has Vulgate warrant
  at Isa. 53:1 / Rom. 10:16, *auditui nostro*). Levelling them would have erased
  the version difference the passage is built on.
- ***arcum tendere/intendere/extendere/suscitare*** — four verbs, kept four ways,
  because the two editions differ precisely here: *suscitans suscitabis* →
  "raising up thou wilt raise up"; *intendens* → "bending"; *tendens* →
  "drawing"; *extendes* → "thou wilt stretch forth."
- ***canticum*** → "canticle" throughout (prompt); *carmen* → "song";
  *Canticum canticorum* → "the Canticle of Canticles."
- ***christos*** (lower-case, Hab. 3:13 *ut salvos facias christos tuos*) →
  **"christs"**, not "anointed ones". The gloss depends on the word: *quos …
  christos, id est, unctos suos fecit* is rendered "whom he made christs, that
  is, his anointed ones," and only survives if *christos* keeps a form of its own.
- ***diapsalma***, ***Sela*** — kept in italic Latin with Rabanus's own gloss
  ("always") beside them, as untranslatable liturgical/textual terms.
- ***jumentum*** → "beast of burden" (consistently, incl. Ps. 72 *Jumentum
  factus sum apud te*).
- ***tentoria / tabernacula / pelles*** (Hab. 3:7, where the two editions differ)
  → "tents" / "tabernacles" / "skins", each kept distinct.
- ***prae laboribus*** → "by reason of the labours" (both in the lemma and in the
  exposition, so the echo holds).
- ***commatice per capitula*** → "clause by clause, section by section" *(local)*.
- Etymological glosses keep the printed name and translate only the gloss:
  *Theman … Auster* → "Theman … the South"; *Pharan os videntis* → "Pharan
  … the mouth of one seeing"; *Reseph reptans ventre* → "Reseph … creeping on
  the belly"; *Madian … ex judicio* → "Madian … from judgment"; *Jesus …
  Salvator* → "Jesus … Saviour."
- **Italics.** The Latin of this range carries no italic markup at all; the
  English therefore adds none for repeated lemmata (Rabanus re-quotes his lemma
  constantly), reserving `*…*` for carried type inside `[sic: …]` and for Latin
  words deliberately left in Latin (*diapsalma*, *Sela*). Straight quotes " "
  are used where English needs a quotation mark Migne does not print (Pattern 6).

---

## Defects carried through — `[sic: …]`

- **1124A** — *receperunt lumen suum et **pristmum** habuere fulgorem.* `pristmum`
  is not a word; the conjecture is *pristinum* ("their former brightness"), which
  the sentence requires and which differs by one letter-group. Carried
  untranslated in italics per Patterns 7/12: "had their [sic: *pristmum*]
  brightness."
- **1125D** — *et inferendo **fororem** condemnabis eos in perpetuum.* `fororem`
  is not a word; conjecture *furorem*, which the lemma four lines above supplies
  (*In comminatione tua minorabis terram et in furore tuo*). Carried: "and by
  bringing in [sic: *fororem*] thou wilt condemn them for ever."
- **1128D** — *« Et introivit tremor in ossa mea. » **Sicu** carnis nomine
  aliquoties Scriptura…* `Sicu` is not a word; conjecture *Sicut*, required by the
  answering *ita* in the same sentence. Carried at the head of the clause, so the
  English sentence opens "[sic: *Sicu*] by the name of flesh Scripture sometimes
  designates…" — the correlative "so" is left standing because *ita* is printed.

## Scripture divergence — `[var: …]`

- **1131C, Hab. 3:19** — Migne prints *deducet me **victori** in Psalmis
  canentem* where the Vulgate has the nominative *victor*. Rendered as printed,
  "he will lead me, singing in the Psalms, to the victor," with a `[var: …]`
  giving the received reading. The dative changes who is doing what: on Migne's
  text the prophet is led *to* a victor; on the Vulgate's he is himself the
  conqueror. Rabanus's own exposition a few lines later (*Canam autem victoriam
  ejus et triumphum*) sits comfortably with either, so no conjecture is offered.

---

## Cruces: printed readings rendered literally (Pattern 7), no edit made

Each of these is a real word or a construable phrase, so it is rendered as
ordinary English (Pattern 12's boundary) and only logged here.

- **1122B** — *mentem a coelestibus desideriis in appetitum demergunt
  **infirmorum***: rendered "into the appetite of infirm things." Sense wants
  *infimorum*, "of the lowest things," which is the standard antithesis to
  *coelestibus* and which this same work uses at 1129B–C (*relicto infimorum
  appetitu*, *in infimis deprimitur*). One letter apart; not emended.
- **1122C** — *ad ejus quae sursum est Jerusalem, quae est mater omnium nostrum
  **videnda regna** ducuntur*: the accusative plural has no governing preposition
  and no clear head. Rendered as closely as the words allow, "are led through the
  apostles to the kingdoms that are to be beheld of that Jerusalem which is
  above." Unconstruable as printed; no conjecture proposed.
- **1123A** — *quae terrae concussione rumpantur et **manent** flumina*: the
  indicative *manent* after subjunctive *rumpantur* looks like *manant*, "flow."
  But "remain as rivers" construes and fits the geological anecdote (hidden
  waters burst out and *stay* as rivers), so it is rendered "and remain as
  rivers." Not marked.
- **1125C** — *jaculis quippe bellantes adversarios feriunt, armis muniendo sese
  a vulnere **descendunt***: rendered literally, "with arms, by fortifying
  themselves, they descend from a wound." The near-certain reading is *defendunt*
  ("they defend themselves from a wound"), which is what the following sentence's
  contrast (darts wound the enemy, arms protect the bearer) requires. Rendering
  "defend" would be exactly the silent repair Pattern 7a forbids: *descendo* is a
  real word and can be rendered, so it is.
- **1120C** — *quod metu judicii aeternarumque poenarum semper **in fortitudine**
  sint, et cruciatus, quos se sciunt quotidiano pavore sustinere*: rendered "they
  are always in strength, and the torments which they know themselves to endure
  with daily dread." The context is dread, not strength; conjecture *in
  formidine*. The second limb (*et cruciatus*) has no verb of its own on the
  printed text and is carried as an appended accusative.
- **1130C** — *ductaque prophetae veracia falso ore resonaret dicens*: rendered
  "and re-echoed with a false mouth the truthful things drawn from the prophet."
  *ducta* is a real neuter plural participle and construes with *veracia*, so it
  is rendered; the expected reading is *dictaque*, "the truthful sayings of the
  prophet," which the quotation that follows (Ps. 51) supports.
- **1130A** — *eo quidem pereunte electus sum populo*: rendered "while that one
  indeed perishes I have been chosen for the people." The dative *populo* after
  *electus sum* is unusual and the sentence is elliptical; rendered as printed.
- **1123C, Hab. 3:13** — Migne prints the bare participle *egressus in salutem
  populi tui* where the Vulgate has *egressus es*. Rendered "having gone forth
  for the salvation of thy people," not "thou wentest forth": supplying the
  finite verb would import a word the plate does not carry, and the same verse
  reappears at **1125D** in the finite form Migne does print there (*Existi in
  salutem populi tui*), which the English keeps distinct.
- **1119B** — *Stant autem **in pedes** et movetur terra*: accusative after
  *stare*; rendered "But they stand upon feet and the earth is moved." Cf. the
  lemma it glosses, *Pedes ejus steterunt et mota est terra*.
- **1119C** — *Denique Saulus et Matthaeus montes erant, **hic** de sapientia
  litterae carnalis, **ille** de mammona iniquitatis elatus*: on the ordinary
  force of *hic*/*ille* the nearer term (Matthew) takes the wisdom of the carnal
  letter and the further (Saul) the mammon of iniquity, which reverses the
  historical fit. Rendered with the same ambiguity — "this one … that one" — so
  the English neither repairs nor resolves the printed order.
- **1128C** — *Ventrem suum **more prophetis consueto** animum suum dicit*: the
  dative *prophetis* with *more … consueto*; rendered "after the manner customary
  to the prophets."
- **1128D** — *omne quod **agitis**, cujus sincera intentio est Domino placendi*:
  a second-person plural in a third-person sentence; rendered as printed,
  "everything that you do."
- **1129A** — *et quo altior efficitur lumine contemplationis, **eo se
  imperfectionem** conspicit*: *se* stands without an obvious construction beside
  the accusative *imperfectionem*; rendered "the more does he behold his own
  imperfection."
- **1131A** — *sed quia pabulum coelestis intellectus in his non sapiunt, qui
  suave jugum Evangelii bajulent **absunt***: rendered "those who would bear the
  sweet yoke of the Gospel are wanting," taking *absunt* with the relative clause
  as its subject.
- **1131C** — *ut calcem super aspidem et **basilicum***: *basilicum* for
  *basiliscum* (Ps. 90:13). Rendered "the basilisk" and **not** marked `[sic:]`:
  *basilicus* for the basilisk is attested in medieval Latin, so this falls under
  Pattern 9 (attested spelling), not Pattern 12. Logged because the printed form
  is also a distinct word (*basilicum*, basil) and a later sweep may want to
  revisit the call.
- **1131C** — *extraham serpentem **Judam** de colubro*: rendered as printed,
  "draw out the serpent Judas from the snake." No conjecture; the phrase has no
  obvious biblical antecedent and *Judam* may be a proper name Rabanus intends.
  *mittam in foramen* has no object; "[my hand]" is supplied in brackets per the
  supplied-word convention.
- **1115D** — *cum **duodenis** in medio doctorum residens*: read as *duodennis*,
  "at twelve years old" (Luke 2:42–46, which the sentence is narrating). A single
  *n* for a double is orthographic, not a defect: Pattern 9, rendered normally.
- **1114D** — *credo quod **otius** misericordiam … consequar*: *otius* for
  *ocius*; attested spelling, rendered "the sooner," Pattern 9, no marker.
- **1130C** — *oleo **adolationis** impinguaret capita*: attested spelling of
  *adulationis*; rendered "of flattery," Pattern 9, no marker.
- **1117D** — *ut nec ipsa **cornu** eorum, regum videlicet insolentium potentia
  posset infringi*: *cornu* read as ablative (4th decl.), with *ipsa* picking up
  *charitas*: "so that it could not be broken even by their horn, namely by the
  power of insolent kings." Reading *cornu* as nominative subject would make the
  sentence say the horn could not be broken, which contradicts the argument.
  Rendered on the ablative reading; noted because it is a construal, not a
  certainty.

---

## Quotation marks — unclosed « in Migne (Pattern 5 corollary)

Three quotations are opened and never closed on the plate. The English mirrors
the plate exactly; no `»` has been supplied. These are the reason the guillemet
counts are 28/27, 22/21 and 16/15 in those chunks — they are not omissions.

- **1121D** — *Unde et Moyses loquitur ad Deum: « Ego autem sum irrationabilis;
  et David: « Jumentum factus sum apud te…, »* — two `«` and one `»`. The Moses
  quotation is never closed and the David quotation opens inside it.
- **1125A** — the 2 Cor. 6:11–13 quotation (*« Os nostrum patet ad vos, o
  Corinthii …dilatamini et vos.*) runs straight into Rabanus's own sentence
  *Unde autem vel quo ordine provenerit…* with no closing mark.
- **1130D** — the Ps. 51 quotation (*« Ego autem sicut oliva fructifera…*) runs
  into *Propter quod tempore ultimae retributionis…* with no closing mark.

A fourth case is **not** a defect and should not be "fixed": at **1116C–D** the
Luke 2 quotation *« Gloria in excelsis Deo…* is left open at the end of one
paragraph and its `»` falls at the end of the Hab. 3:4 lemma in the next
(*…Ibi abscondita est fortitudo ejus. »*). The pair is balanced across the
paragraph break, and the English reproduces it in the same two places. The
column anchor `[1116D]` is set hard against the following word in the Latin
(`[1116D]Splendor`) and is reproduced hard against it in the English.

---

## Migne's inline citations printed as italic parentheses, not as notes

At **1121C** and **1121D** two scripture references are set in the running text
as italic parentheses with a column anchor inside them, instead of as `[n: …]`
notes: `*(Psal. [1121C] II)*` and `*(Cant. [1121D] I)*`. Both are reproduced
**verbatim**, italics, anchor and all. No `[f: …]` tag was applied: this work's
citing practice is `[n: …]` (nine notes in this chunk alone), and two stray
instances are not a practice (Pattern 4's trigger). Worth flagging to the
indexer, since neither will be harvested as a note.

Both references are also wrong as printed, and are left wrong (Pattern 7 /
`refDisplay` principle): *(Psal. II)* heads *Ipse super maria fundavit eam*,
which is Ps. 23:2; *(Cant. I)* is correct for Cant. 1:8.

## Migne's `[n: …]` references that do not resolve

Reproduced verbatim, unaltered, per the verbatim rule; listed here only so the
indexer's `unparsed`/mismatch bucket has a reason attached.

- **1114A** `[n: (Matth. III)]` on *Hic est Filius meus dilectus … ipsum audite* —
  the *ipsum audite* clause is the Transfiguration (Matt. 17:5), not Matt. 3:17.
  At **1118A** the same words without *ipsum audite* are cited `[n: (Matth. III)]`
  correctly.
- **1126C** `[n: (Act. V)]` on Stephen's *Dura cervice et incircumcisi* — Acts 7:51.
- **1129B** `[n: (Rom. X)]` on *Spe gaudentes, in tribulatione patientes* — Rom. 12:12.
- **1131C** `[n: (Psal. XXVIII)]` on *Qui perfecit pedes meos quasi cervi* — Ps. 17:34.
- **1112B** `[n: (Habac. I)]`, **1112B** `[n: (Ibid.)]` — Hab. 1:2 and 1:13; the
  book-level citation is correct and is left as printed.

## Migne's scripture wording, divergent from the Vulgate but rendered as printed

Not marked `[var: …]` because the sense does not turn on the divergence; logged
so that a later sweep is not surprised by them.

- **1112B** *respicere ad iniquitatem non **potes*** (Hab. 1:13) — Vulg.
  *poteris*.
- **1113A** *apparebit **in fine*** vs **1114C** *apparebit **in finem*** — the
  same verse (Hab. 2:3) quoted twice by Migne with different case. Both rendered
  as printed ("at the end" / "unto the end"). The divergence is internal to the
  plate and is exactly the kind of thing this edition exists to show.
- **1112A** *Oratio Habacuc prophetae pro **ignorationibus*** — Vulg.
  *ignorantiis*. Rendered "for ignorances" wherever it recurs (the phrase is the
  canticle's title and returns at 1128D), so the title reads identically in both
  places.
- **1121B** *fluent de ventre ejus flumina aquae salientis in vitam aeternam*
  `[n: (Joan. VII)]` — a conflation of John 4:14 with John 7:38, rendered as
  printed and cited as printed.
- **1130C** *in loco pascuae ibi me collocavit* (Ps. 22:2) — Vulg. *in loco
  pascuae ibi me collocavit* agrees; the preceding *Dominus regit me et nihil
  mihi deerit* agrees also. No divergence; noted only because the verse is
  quoted in a stretch dense with divergent quotation and reads as if it might be.

## Negations checked and carried

Every printed negative in the range appears in the English. The ones most at risk
of being smoothed away, checked individually:

- **1115A** *revelatur ut terreat, et territis **non** inferatur* — the closing
  clause of 0008 turns entirely on this second negative.
- **1115A** *qui autem irascitur, interdum **non** percutit* — rendered
  "sometimes does not strike," not "does not always strike": the negation
  governs *percutit*, and *interdum* is not part of it.
- **1119C** *nequaquam homini praedicanti, sed illustranti est gratiae tribuenda*.
- **1122B** *ut in talibus ira, quam merentur, **nunquam** solvenda perseveret*.
- **1126D** *haud dubium quin impii* — the *haud* is carried ("there is no doubt
  but that they are the impious one's").
- **1130A** *Et **nisi** Dominus reliquisset nobis semen* (Rom. 9:29).
- **1131C** *nullam etiam aliam, **nisi** in Christo, habebo virtutem* — both
  *nullam* and *nisi* carried.
- **1128C** *ne forte corde peccarem, **neve** aliis praedicans, ipse reprobus
  efficerer*.
- **1129B** *qui sine peccato intraret in mundum, **non** sine poena peccati
  exiturum* — the second negative is what the whole paragraph is for.
# Cruces — 8930 (Rabanus Maurus, *Commentaria in Cantica*), chunks 0015–0021

The Canticle of Deuteronomy (Deut. 32), complete, cols 1132C–1151D.

## Work-wide conventions established here

Terminology decisions taken in this batch, beyond the pre-set vocabulary. A later
agent working other chunks of 8930 should follow these or record a reason not to.

- **The two editions.** *Alia editio* → **"Another edition"**, invariably, and always
  introducing the *second* of the pair (Rabanus prints the Roman lemma first, then
  the other). *juxta Hebraicam veritatem* / *ex Hebraica veritate* → **"according to
  the Hebrew verity"** (1137A, 1150C, 1151A); *editio LXX interpretum* / *illa quae
  ex LXX interpretibus* → **"the edition of the LXX interpreters"** (1150C, 1151A) —
  never "the Septuagint," which is not what the page prints. *septuaginta interpretes*
  spelled out at 1134C → "the seventy interpreters," as printed.
  **The two Englishes are never levelled**: where the Latins differ the renderings
  differ, word for word, even in formulaic verses (see the checklist below).
- ***carmen* → "song"; *canticum* → "canticle."** Both appear in 1132C–1132D
  (*verba carminis hujus*, *principium hujus carminis*) against the head's
  *CANTICUM*. The distinction is Rabanus's and is kept throughout.
- ***theoria* stays Latin/Greek** — *ad illam coelestem theoriam* (1132D) is glossed
  by Rabanus himself (*hoc est, ad inspectionem secretarum rerum*), so an English
  substitute would make the gloss explain nothing.
- **Etymologies keep the name as printed:** *Basan pinguedo interpretatur* (1140D) →
  "Basan is interpreted *fatness*."
- **Sense-labels:** *secundum litteram* → "according to the letter"; *secundum
  historiam* / *juxta historiam* → "according to the history"; *mystice* →
  "mystically"; *allegorice* → "allegorically"; *tropologia* → "tropology" (all
  adverbs where the plate prints adverbs, per Pattern 9).
- **Verbs of the two-edition method:** *subjungitur* → "it is subjoined";
  *Sequitur:* → "There follows:" — note 1151B prints **`Sequitur.`** with a full
  stop where every other instance has a colon; kept as printed (Pattern 8).

## Pattern 12 — carried type (`[sic: …]`)

| Col | Printed | Conjecture | Note |
|---|---|---|---|
| 1133A | *metonymic ω s* | Greek μετωνυμικῶς, "metonymically" | The Greek adverb has broken up in the plate into Latin letters + a bare omega + a spaced sigma. Not a word in either language; carried whole per Pattern 10 (the unit is the run, spacing included). Rabanus uses the same term in Latin at 1148B (*metonymice dictum est*), which is sound and is translated normally there. |
| 1139A | *cruat* | *eruat*, "may rescue" | *e-* lost. The clause (*quos per praedam salutiferam cruat*) is left with no verb; rendered "those whom he may [sic: *cruat*] by the saving prey." |
| 1139B | *tandit* | *tundit*, "beats/blunts" — cf. *obtundit rostrum in petra durissima*, 1138C, the same act eleven lines earlier | Not a Latin form. |
| 1139C | *alicnus* | *alienus*, "strange" — the other edition prints *alienus* in the very next line | Minim confusion, *e*→*c*. **Note that the negation is unaffected:** *non erat cum eo Deus alicnus* is rendered "there was not with him a [sic: *alicnus*] god," so the printed *non* still governs the translated words (Pattern 7a′). |
| 1139D | *edito* | *editio* | The one place in the batch where the two-edition formula itself is broken. Rendered "Another [sic: *edito*]:" rather than silently normalized — the formula is the book's method, and a conformed instance is exactly the class Pattern 7a″ warns about, transposed from lemma to apparatus. |
| 1140D | *undo* | *unde* | Consecutive *unde … possint proferre*; the conjunction is quarantined but its consecutive force is carried by the surrounding English ("…, [sic: *undo*] they may be able to bring forth"). |
| 1141B | *ministrasit* | *ministravit* (or syncopated *ministrasset*) | Not a Latin form. |
| 1151B | *confirmenteum* | *confirment eum* — printed correctly as two words twelve lines earlier at 1150D | Pattern 10 run-together; the whole run carried, including the real word *confirment*. |

## Pattern 14 — scripture divergence (`[var: …]`)

- **1133C, Isa. 55:10.** Migne prints *et dat semen **ferenti** et panem comedenti*;
  the Vulgate has *det semen **serenti***. "Him that beareth" vs "him that soweth" —
  material, because the whole comparison is agricultural and the sowing is the point
  of the figure. Rendered as printed, marked `[var: Vulg. *serenti*…]`.
- **1151C, Wisd. 5:4.** Migne prints *nos insensati vitam illorum aestimabamus
  **infamiam***; the Vulgate has *aestimabamus **insaniam***. "A disgrace" vs
  "madness." Marked. This is a 7a″ near-miss: the familiar English ("we esteemed
  their life madness") arrives before the printed word is read.

## Divergences logged but not marked

Citations that differ from the received text without changing the argument, and
misattributed `[n: …]` locators. The notes pass through verbatim per the sacred-marker
rule; nothing is corrected in the text.

- **1132D, `[n: (Matth. XIX)]`** — the quotation (*Qui solverit unum de mandatis
  istis minimis…*) is **Matt. 5:19**, not 19. Locator kept as printed.
- **1133D, Gen. 2:1–2** — printed *complevitque Deus die septimo opus suum*; the
  Vulgate has *complevitque Deus die septimo opus suum quod fecerat*, which the plate
  also gives. No divergence; noted only because the sabbath argument turns on it.
- **1134A, Ps. 18:8** — printed *Lex Domini **irreprehensibilis***, Vulg.
  *immaculata*. Rendered "blameless." Not marked: the exposition (*quia omnia mandata
  ejus vera*) rests on the following clause, not on this adjective.
- **1134A, Ps. 18:10** — printed *Judicia **Dei** vera*, Vulg. *iudicia Domini*.
  Divine name only.
- **1134B–C, Joan. 8:44** — printed *ille homicida fuit ab initio **et latro***.
  The Vulgate has *et in veritate non stetit*; *latro* has no counterpart in the
  received text at all. Rendered "and a robber." Not marked because Rabanus builds
  nothing on the word, but it is the most substantial free citation in the batch.
- **1134D, Jer. 14:7–8** — printed *Tibi peccavimus **patientia** Israel, Domine*,
  conflating Jer. 14:7 (*peccavimus tibi*) with 14:8 (*expectatio Israhel*).
  Rendered literally, "O patience of Israel." Rabanus's argument is about the dative
  *tibi*, which is intact.
- **1135A, `[n: (Psal. XL)]` on *Nec vult mortem peccatoris*** — the sentence is
  **Ezech. 33:11**, not a psalm; and the same locator was used two lines earlier for
  a genuine Ps. 40 quotation. Kept as printed (a mis-bound locator, not our repair).
- **1135B, Ps. 77:39** — printed *Quoniam caro sunt et Spiritus ambulans et non
  revertens*; Vulg. *spiritus vadens et non rediens*. Synonym-level.
- **1135B, Matt. 12:39** — printed *Generatio **prava et perversa** signum quaerit*;
  the Vulgate has *mala et adultera*. The substitution is almost certainly deliberate
  — Rabanus is adducing the verse precisely because it echoes Deut. 32:5's *generatio
  prava atque perversa*, the lemma under exposition. Rendered as printed; not marked,
  because here the divergence IS the argument rather than a threat to it.
- **1137B, `[n: (Matth. XII)]` on *Angeli eorum in coelis…*** — the verse is
  **Matt. 18:10**.
- **1136A, `[n: (Exod. XII)]` on *Hi sunt dii tui, Israel*** — **Exod. 32:4**.
- **1150A, `[n: (Rom. II)]` on *Filius enim hominis venturus est…*** — the verse is
  **Matt. 16:27**; Rom. 2:6 carries only the closing clause (*reddet unicuique
  secundum opera sua*), which is presumably how the locator arose.
- **1148A, *Et in servis **tuis** miserebitur*** — Rabanus re-quotes his own lemma,
  which read *in servis **suis***, with a second-person possessive. Rendered "on thy
  servants," against the "his servants" eleven lines above. Not levelled: the shift is
  on the plate and the two readings sit in plain sight of each other.

## Pattern 5 / 6 — quotation marks reproduced as printed

Three passages where Migne's guillemets are defective. All mirrored 1:1; none supplied,
none removed.

- **1133A, unopened close.** The Isaiah frame opens `«` at *Audi, coelum* and does not
  close until *…verba oris mei, »* — nine lines later, after an intervening block of
  Rabanus's own prose and a second (unmarked) quotation of Deut. 32:1 in the singular
  (*Attende, coelum*). One `«`, one `»`, spanning both. Reproduced as one span.
- **1134D, unclosed quotation.** *« Si in Deum peccaverit, quis orabit pro eo
  [n: (I Reg. II)].* never closes. The `»` is **not** supplied (Pattern 5 corollary);
  this is the single guillemet-count mismatch in chunk 0015 and it is Migne's.
- **1142B, doubled and inverted marks.** The plate prints
  *« Ne projicias me a facie tua [n: (Psal. L)]. « Et item: » Ne avertas, inquit,
  faciem tuam a me. »* — an opening `«` where a close belongs, and a closing `»`
  before the quotation it should follow. Reproduced exactly, marks and all.
- **1143D, stray close inside a citation.** *…quae qui agunt, » ut Paulus testatur, »
  « regnum Dei non consequentur…* — two `»` in five words. Reproduced.
- **1151C, unclosed quotation.** The Wisd. 5 block opens `«` at *Gementes enim* and
  the chunk ends with the note and no `»`.
- **1149B**: the plate prints `« Alia editio: Ego occidam…` — the guillemet opens
  **before** the edition formula, enclosing it inside the quotation. Kept.

## Pattern 8 — punctuation and sentence boundaries as printed

- **1132D**: *Ideo ipse Dominus in Evangelio ait **- «*** — a spaced hyphen where the
  plate everywhere else has a colon. Kept.
- **1137C**: *« Funes ceciderunt mihi, in praeclaris **-** etenim haereditas mea…* —
  the same spaced hyphen inside a psalm quotation. Kept.
- **1139C**: the paragraph on the unity of God ends *…quot erroribus, tot idolis
  obnoxii sunt* with **no terminal stop**. None supplied; the English stops where the
  Latin stops.
- **1143A–B**: *…et id quod alias scriptum est. Jesus populum de terra Aegypti
  salvans…* — a full stop breaking what is grammatically one sentence (the second
  object of *non attendunt*). Kept, and the `et` rendered "and," not "nor": smoothing
  the connective under a governing negative is Pattern 7a mechanism 3.

## Cruces of construction

- **1136C, Hebr. 12:9.** Migne prints *…et reverebamur eos: **non** multo magis
  obtemperabimus patri Spirituum et vivemus…* — with a colon, no interrogative mark.
  The Vulgate's clause is a rhetorical question (*shall we not much more be in
  subjection…?*), which is how the *non* earns its sense. Rendered flat and negative
  as printed: "we shall not much more obey the Father of spirits, and we shall live."
  **No `?` supplied** (Pattern 8) and **the `non` carried** (Pattern 7a), with the
  consequence that the English asserts what Paul denies. That is the printed reading;
  the conjecture is that Migne's colon stands for a lost question mark.
- **1141C, *ex beneficiis largissimus pejores facti*.** *largissimus* is nominative
  singular where the ablative plural *largissimis* is required by *ex beneficiis*.
  Pattern 9: a case mismatch has no English exponent — "made worse out of most
  bountiful benefits" is the only available rendering either way. No emendation to
  make or undo.
- **1145A, *pro peccato Israel indignantem et **eas** disperdere volentem*.** *eas*
  (feminine plural) for a masculine collective. Pattern 9 again — no exponent in
  English; rendered "them."
- **1143A, *duplici confusione contere eos*.** Jer. 17:18 reads *duplici
  **contritione** contere eos*. *confusione* is a real word wrongly set, not carried
  type, so it is rendered as ordinary English ("with a double confusion crush them")
  per Pattern 12's boundary. The sentence is also syntactically broken — an imperative
  quotation spliced into the objects of *non attendunt* — and is rendered as closely
  as the printed words allow.
- **1143C, *a foris sine filiis privabit eos gladius*.** Double construction:
  *privabit eos* wants an ablative of the thing removed, and *sine filiis* supplies a
  preposition instead. Rendered "the sword shall deprive them, leaving them without
  sons"; the Roman column's *foris vastabit eos gladius* is untouched by it.
- **1146A, *quod etiam non solum nostri, verum etiam nostrorum approbant adversarii*.**
  Compressed to the point of ambiguity: *nostri* (our own men) against *nostrorum
  adversarii* (the adversaries of our own). Rendered as the words stand.
- **1147A, *Qui non est Deus noster, sicut dii illorum*.** The other edition's rendering
  of Deut. 32:31 opens with a relative where the Roman column has *Non est enim Deus
  noster ut Deus eorum*. Rendered literally ("Who is not our God, as their gods are")
  rather than conformed to the Roman reading beside it — the whole point of the
  parallel is that they differ.
- **1151C, *quando **viderunt** gloriosam apparere…*** — perfect indicative under a
  future main verb (*Laudabunt omnes gentes*), where *viderint* is expected. Rendered
  "when they have seen," which is available for the printed perfect; no emendation.

## Negation checklist

Every printed negative in the batch was checked into the English individually. The
dense sites, all carried: 1134B *peccantibus **et non** poenitentibus*; 1134C
*fidem ejus recipere **nolentibus***; 1134C *quem prophetarum **non** sunt persecuti
… et **non** custodistis*; 1134D *qui peccat, **non** Deo peccat, id est, **non** Deo
nocet*; 1134D *ne peccares in me*; 1135A *condignam poenitentiam … **non** agunt*;
1135A ***Nec** vult mortem peccatoris*; 1135B ***nec** poenitentiam agere vellent*;
1135C ***nec** ei pro hoc condignas laudes … rependebat*; 1136B *patres **non**
quilibet hebetes*; 1136C ***non** multo magis obtemperabimus* (see above); 1136D
*numerositas … comprehendi **non** possit*; 1136D ***non** quia cunctas gentes numero
vincebatis*; 1137A *ultra **non** differat*; 1137D *ubi **non** erat aqua*; 1138A
*mandata Dei servaverunt … **nulla** mentio Dei*; 1139C ***non** idola falsa … **non**
alius, quam idem Deus*; 1139D *quia **non** sterilis*; 1140A ***nusquam** … **nusquam**
… **nusquam*** (three, all rendered "nowhere"); 1140D ***nec** sufficiebant haec dona,
**nisi** adderentur*; 1141A ***non** enim satis est … **nisi** poenitentiam agant*;
1141D *nequaquam fecerunt*; 1142B *ejus misericordiam **non** merentur*; 1142B ***non**
conturbato animo*; 1142C *qui **non** erat Dominus … qui **non** est populus … in quibus
**non** est fides … **et non** in Deo … **et non** in gentem*; 1142D *si pro malis suis
**non** poenituerint*; 1143A *Percussisti eos, **nec** doluerunt … renuerunt accipere
disciplinam*; 1143A ***Non** vindicat Deus bis in idipsum*; 1143A ***non** attendunt*;
1143A *quamlibet culpam bis ferire **non** posse*; 1143D *regnum Dei **non**
consequentur*; 1144A *sine **ulla** miseratione*; 1144B *Vermis eorum **non** morietur,
et ignis **non** exstinguetur*; 1144B ***nulli** aetati … esse parcendum*; 1144B
*a peccatis **non** cohibet*; 1144C *memoria eorum … **non** numeretur*; 1144D
***ne** forte superbirent … **et non** Deus fecit haec omnia* (both editions); 1145A
***Ne**, quaeso, Domine, dicant Aegyptii*; 1145A ***ne** faceret malum*; 1145A *nolens
perire quemquam*; 1145B *Ignorans quoniam*; 1145B *impoenitens cor*; 1145C *sibi
providere **nesciunt***; 1145C *disciplinam **non** sapuerunt*; 1145C ***non**
exaudiam … **non** invenient me … timorem Domini **non** susceperint*; 1145D ***non**
ex infirmitate potentiae … **nullo** modo fieri posset … **nisi** Dominus eos
tradidisset*; 1146A ***Non** est enim Deus noster … Qui **non** est Deus noster*;
1146C *recipere **noluerunt***; 1146D ***nisi** se inde liberaverit*; 1146D *ostendit
**non** sanae esse mentis*; 1147A *ubi praeteritum et futurum **non** est*; 1147A
***nec** oblivioni tradentur*; 1147B *si se a peccatis **non** correxerint*; 1147C
***nec** diuturnum esse potest*; 1147C ***nunquam** perfecte destiterunt*; 1148B
***nec unquam** in tristitiae moerorem commutatur*; 1148D *ultra **non** praevalebunt
… **non** habebunt ulterius potestatem*; 1148D ***nec** opus, **nec** ratio, **nec**
sapientia, **nec** scientia*; 1148D ***nullum** adjutorium … **sed nec** mundi
amatores*; 1149A ***nihil** secum conferunt*; 1149A ***non** sit alius Deus praeter
me* / ***non** est praeter me*; 1149B ***non** est, qui possit de manu mea eruere* /
***non** est qui eripiat de manibus meis*; 1149C ***nullo** Dei amore sauciantur …
aerumnam **non** sentiunt … **nec** quolibet minimo affectu*; 1149D *regnum ejus, quod
**non** corrumpetur*; 1150C *quae in Hebraica veritate **non** inveniuntur*; 1151C
*gloriam sanctorum … quam **non** speraverunt*.

No negation was added where the plate prints none.
# Cruces — 8930 (Rabanus Maurus, *Commentaria in Cantica*), chunks 0022–0026

Range: PL 112, cols 1152A–1166A. Four canticles: the Hymn of the Three Children
(Dan. 3), the Canticle of Zechariah (Benedictus), the Canticle of Mary
(Magnificat), the Blessing of Simeon (Nunc dimittis).

---

## Work-wide conventions set in this range

Terminology decisions not already fixed by the batch prompt. Later agents on this
work should follow these or record a reasoned departure.

- **`in saecula`** → **"unto the ages"**; **`in saecula saeculorum`** → **"unto the
  ages of ages"**; **`in saeculum`** → **"unto the age"**. Not "for ever" /
  "world without end" — the refrain is the load-bearing phrase of the Dan. 3
  hymn and Rabanus glosses it (`ut ipse super omnia exaltatus in saecula regnans
  praedicetur`, 1153B), so it is kept lexically transparent.
- **`superexaltate / superexaltatus / superexaltemus`** → **"exalt … above all" /
  "exalted above all"**. "Superexalt" is not English; "exalt above all" keeps the
  intensive force and matches the gloss at 1153B (`super omnia exaltatus`).
  The full refrain `Laudate et superexaltate eum in saecula` therefore renders
  **"Praise and exalt him above all unto the ages"** throughout.
- **`Benedicite, X, Dominum`** → **"Bless ye the Lord, O X."** See the accusative
  note below.
- **`canticum`** → "canticle" (prompt-fixed); **`hymnus`** → "hymn";
  **`carmen`** (1162C) → "song" — Rabanus distinguishes them and *carmen* there
  points back to the Magnificat as a composed piece.
- **`Vetus Instrumentum`** (1159D) → **"the Old Instrument"**, not "Old
  Testament". Rabanus uses *Testamentum* separately (1164D, `Novi … Veteris
  Testamenti`) and the two must stay distinguishable.
- **`oriens`** (Luke 1:78; Zach. 6:12) → **"the Orient"**, capitalized, since the
  gloss turns on it as a title (`recte oriens vocatur`).
- **`prelati … subditi`** → "prelates … subjects" (1157C, 1158A).
- **`plebs / populus / gens`** → "people / people / nation" respectively;
  `omnis Israel` → "all Israel".
- **`ἅγιον`** (1162D) kept in Greek, verbatim, unaccented-normalization not
  applied.
- Etymologies: the name is kept as printed and the etymon set in italic Latin —
  `Aevae … vae` → "the name of Eve (*Aeva*) — that is, of *vae*, woe";
  `Idithun, hoc est, transiliator` → "Idithun, that is, the overleaper".

---

## ⚠ THE HEADLINE ITEM — printed lemma vs. Vulgate wording

This is the list the batch prompt asked for, and it is the most valuable output of
the range. **Every scripture lemma in cols 1152A–1166A was read word by word
against the printed Latin before and after translating.** Divergences are grouped
by whether they were material enough to earn a `[var: …]` (Pattern 14).

### A. Divergences MARKED with `[var: …]` in the English

| Col | Migne prints | Vulgate | Why material |
|---|---|---|---|
| 1154D | Ps. 150:6 `Omnis **spiritu** laudet Dominum` | `omnis **spiritus** laudet Dominum` | Ablative for nominative. The whole gloss expounds *spiritus* as the **subject** ("non utique caro et sanguis … sed illud quod est in natura sublimius, hoc laudet Dominum"). Rendered as printed, "Let everyone praise the Lord **in spirit**"; the exposition then rests on a subject the printed lemma no longer supplies. Conjecture: *spiritus*, a one-letter drop. |
| 1155A | Dan. 3:66 / 3:69 `ignis et **aestas**` · `frigus et **aestas**` | `ignis et **aestus**` · `frigus et **aestus**` | *aestas* = summer, *aestus* = heat. Not cosmetic: Rabanus's own gloss uses **both** words nine words apart — "sic et **aestas** aliquando ardorem dilectionis … aliquando **aestum** persecutionis exprimit" — so he is glossing *summer* by *heat*, and levelling the lemma to "heat" would collapse the gloss into a tautology. Rendered "summer" in the lemma and "heat" in the gloss, as printed. Note that at 1152D Rabanus's own prose summary of the hymn lists *ignem et **aestatem***, then *frigus et **aestum*** — the same split, in his own voice. |
| 1155D | Ps. 17:15 `Fulgura **multiplicabis** et **conturbabis** eos` | `fulgora **multiplicavit** et **conturbavit** eos` | 2nd-person future for 3rd-person perfect — a different speaker-situation (address to God vs. narrative of God). The gloss is 3rd-person (`Dominus fulgurat`). |
| 1155D | Dan. 3:74 `benedicat terra Dominum, **lauda et superexalta** eum` | `**laudet et superexaltet** eum` | 2nd-sg. imperative for 3rd-sg. jussive; the gloss immediately reverts to 3rd person (`Haec ergo terra semper **laudat** … et **superexaltat**`). |
| 1156C | John 4:14 `fiet in eo fons aquae **vivae** salientis` | `fiet in eo fons aquae salientis` | *vivae* is added. Rabanus's fountain-catalogue turns on the water's quality, so an added "living" is argument-bearing, not ornament. |
| 1158D | Dan. 3:56 `Benedictus **est** in firmamento coeli` | `Benedictus **es**` | Third person for second — the verse ceases to be an address. Rendered "Blessed **is he** in the firmament of heaven." |
| 1161A | Ps. 86:5 `**Mater** Sion dicet: homo et homo **factus** in ea` | `**Numquid** Sion dicet: homo et homo **natus est** in ea` | Two changes, both material: an interrogative particle becomes a noun ("**The mother** Sion shall say"), and *natus est* ("is born") becomes *factus* ("is made"). The gloss then explicitly rests on the second — `eum **factum** qui fundavit` — so *factus* is doing the christological work here and must not be conformed to "born". Cited as Psal. LXXXVI; Gallican numbering, = Ps. 87 Heb. |
| 1162D | Ps. 33:4 `exaltemus nomen ejus **in invicem**` | `in id ipsum` | "one with another" vs. "unto the same". The context is exhortation *ad consortes*, so the reciprocal reading is doing work. |
| 1163A | Luke 1:50 `misericordia ejus **a progenie in progenies**` | `misericordia eius **in progenies et progenies**` | **The single highest-risk lemma in the range** — the remembered English "from generation unto generation" is a *third* form, matching neither. Migne prints *a progenie in progenies*, singular→plural, which is what the English carries: "from generation unto generations". Checked twice against the plate. |
| 1164D | Ps. 38:5 `ecce **veteres** posuisti dies meos` | `ecce **mensurabiles** posuisti dies meos` | "old" for "measurable". The whole Idithun excursus is about a man *worn out with the world's evils* longing for the end, so *veteres* is precisely the word the argument wants; substituting "measurable" would have removed it. Migne also prints `Notum fac, Domine` for `notum fac **mihi** Domine` and `**qui** est` for `**quis** est`. |
| 1166A | Ps. 97:3 `Memor fuit misericordiae suae **Jacob** et veritatis suae domui Israel` | `recordatus est misericordiae suae et veritatis suae domui Israhel` | *Jacob* is added, producing the Jacob/Israel pairing the sentence is adduced for. |

### B. Divergences LOGGED but NOT marked — no material change of sense

Recorded here so a later reader is never told by silence that a lemma agrees
with the Vulgate (Pattern 14's standing caution).

- **The whole Dan. 3 refrain is accusative, not dative.** Migne prints
  `Benedicite … **Dominum**` at every one of the ~30 occurrences in 0022–0023,
  and `Benedicite Dominum omnia opera ejus` in the Ps. 102:22 citation at 1153A,
  where the Vulgate has **`Domino`**. This is systematic, not sporadic — it is
  the text-form Rabanus is expounding. **It has no English exponent** ("bless the
  Lord" either way), so it is logged as a Pattern 9-type case and left unmarked.
  A later agent must not "fix" a chunk to the dative or think it a defect.
- 1152C Dan. 3:51 `benedicebant **Dominum** in fornace` — Vulg. `Deum`.
- 1153A Ps. 102:22 `**Benedicite Dominum** omnia opera ejus` — see above.
- 1153D Gen. 1:7 `**Divisitque** aquas quae erant super firmamentum` — Migne
  quotes only the second half of the verse; not a variant, an ellipsis.
- 1154A Ps. 102:21 `omnes virtutes ejus **et** ministri ejus` — Vulg. has no *et*.
- 1154B Ps. 148:3 — agrees with the Vulgate exactly, including `et lumen`.
- 1155B 2 Cor. 4:17 `in **sublimitatem**` for `in sublimitate`; `Id, **inquit**,`
  for `id **enim**` (the *inquit* is an interruption, kept inside the guillemets
  per Pattern 5).
- 1155C Eccli. 3:17 `Sicut in sereno glacies, **ita** solventur peccata tua` —
  *ita* added.
- 1156A Ps. 23:1 `qui habitant in **ea**` — Vulg. `in eo`. No English exponent
  (both render "in it"/"in her" ambiguously); left unmarked.
- 1157A Gen. 1:10 `**Congregationes** aquarum` for `congregationesque`;
  Eccle. 1:7 `intrant **in** mare` for `intrant mare`.
- 1157A 2 Cor. 5:10 `unusquisque propria corporis **recipiat**` for `referat`,
  and `**quatenus**` for `ut`. Rendered "receive"; the sense is unchanged.
- 1157B Dan. 3:79 `**ceti**` for `cete` (spelling); 1152D Rabanus's own prose has
  `**coetos**` — both rendered "whales", both attested variants (Pattern 9).
- 1157C Dan. 3:81 `**omnes** bestiae et pecora` for `bestiae et **universa**
  pecora`.
- 1158B Matt. 11:29 — agrees exactly.
- 1158C Dan. 3:88 `Anania, Azaria **et** Misael` — *et* added.
- 1159B Luke 1:68 `Benedictus **Dominus** Deus Israel … redemptionem **plebis**
  suae` — Vulg. `Benedictus Deus Israhel … plebi suae`. The added *Dominus* is
  the liturgical form and is what Rabanus expounds; the genitive for the dative
  changes nothing in English ("the redemption of his people").
- 1160B Luke 1:74 `de **manibus** inimicorum nostrorum` — Vulg. `de manu`.
- 1160C Gen. 12:3 `**atque in te** benedicentur` for `et benedicentur in te`.
- 1160C 1 Par. 17:11–13 — agrees exactly, including `stabiliam regnum ejus`.
- 1161C Eph. 5:8 `**Fuistis** aliquando tenebrae` for `eratis enim`.
- 1161D Ps. 33:15 `Inquire … pacem et **sequere** eam` for `**persequere** eam`.
- 1162A Eccli. 3:20 — agrees exactly.
- 1162C Ps. 34:9 `et **delectabitur** super **salutare ejus**` for `delectabitur
  super **salutari suo**` — a case-and-pronoun shift with no English exponent.
- 1163A 1 Pet. 1:16 `Sancti **estote**, quia **et** ego sanctus sum` — Vulg.
  1 Pet. 1:16 `sancti eritis quia ego sanctus sum` (after Lev. 11:44).
- 1163C Matt. 23:12 `**quia omnis qui** se exaltat, humiliabitur` — Vulg. `qui
  autem se **exaltaverit**`; present for future-perfect, *omnis* added.
- 1163C Luke 1:52–53, 1163D Ose. 11:1, 1164A Gal. 3:29 — all agree exactly.
- 1163D Ps. 53:6 `**et** Dominus susceptor **est** animae meae` — two words added.
- 1163D Matt. 18:4 `Quicunque **autem**` for `quicumque **ergo**`; `hic est
  **major**` for `maior`.
- 1163D Luke 1:54 `memorari misericordiae **suae**` — *suae* added.
- 1164B–1166A: **the entire Nunc dimittis (Luke 2:29–32) agrees with the Vulgate
  word for word.** Verified twice, precisely because it is the verse in this
  range a translator is likeliest to supply from memory. `Nunc dimittis servum
  tuum, Domine, secundum verbum tuum in pace` is printed exactly so.
- 1166A Ps. 97:2 `**ante conspectum** gentium` for `**in conspectu** gentium`.

---

## Pattern 7 — printed readings rendered literally, with conjectures

None of these was repaired in the text. Each is rendered as closely as the
printed words allow (Pattern 7 / 7a), and the conjecture lives only here.

1. **1156D — a printed `non` that inverts Rabanus's own argument.** Migne prints
   `ut omnes renascamur in Christo et **non** aqua baptismatis nostra nobis
   peccata donentur`. The sentence is expounding the fountain of Zach. 13:1 as
   *baptismi lavacrum*; the negation makes it say that our sins are **not**
   forgiven by the water of baptism, which contradicts the clause it depends on.
   **Carried** (Pattern 7a: every printed negation appears in the English, "and
   that our sins be **not** forgiven us by the water of baptism"). Conjecture:
   the *non* is intrusive, the intended reading being `et aqua baptismatis nostra
   nobis peccata donentur`. This is the one place in the range where fidelity
   makes the page argue against itself; it is left standing deliberately.
2. **1156A — `abysso` for `ab ipso`.** `Nam licet omnia **abysso** sint condita`.
   *abyssus* is a real word, so no `[sic:]` (Pattern 12 boundary); rendered
   literally, "though all things have been founded **by the abyss**". The
   sentence wants "by him" (`ab ipso`) — the contrast is with `quod eum
   veneratur auctorem` in the next clause. Near-certain word-division defect.
3. **1152C — `Deus ergo nostrorum`.** A bare genitive plural with no head noun;
   the lemma two lines above is `Deus **patrum** nostrorum`, so *patrum* has
   dropped out. Rendered literally, "the God of our own"; conjecture `Deus ergo
   patrum nostrorum`.
4. **1153A — `benedictionis atque laudabilis`.** An adjective where a genitive
   noun is wanted. Rendered "this order of blessing stands historical and
   praiseworthy"; conjecture `benedictionis atque **laudationis**` ("of blessing
   and of praise"), which is what the parallel with `ad benedicendum et ad
   laudandum` two lines earlier requires.
5. **1159D — `de enim ille scripsit`** (John 5:46). The object of *de* has
   dropped; the Vulgate is `de **me** enim ille scripsit`. Rendered as closely as
   the printed words allow — "for of, he wrote" — rather than silently restoring
   *me*, since restoring it would make the proof-text supply a word the plate
   does not print. Conjecture: `de me enim ille scripsit`.
6. **1162B — `cujus me caro temporali conceptione laetatur`.** *laetatur* is
   deponent-intransitive and cannot govern the accusative *me*. Rendered
   literally, "whose flesh **rejoices me** by a temporal conception". Conjecture:
   `laetificat` ("gladdens me"), the reading the parallel *spiritus meus …
   laetatur* in the same sentence makes necessary.
7. **1164B — `ut facerent secundum legis pro eo`** (Luke 2:27). A genitive with
   no head; the Vulgate has `secundum **consuetudinem** legis`. The English
   supplies the head in square brackets per the corpus's supplied-word convention
   — "according to the [custom] of the law" — so that the reader can see the
   supply is ours. Conjecture: `secundum consuetudinem legis`.
8. **1152C — `hortatur angelos et coelos, aquas atque, virtutes`.** The
   comma after *atque* is printed and is carried into the English ("the waters
   and, the powers") per Pattern 8. It is almost certainly a compositor's stop;
   it is not deleted.

## Pattern 10 / 12 — carried type, marked `[sic: …]`

| Col | Run | Rendered | Conjecture |
|---|---|---|---|
| 1155C | `verbus` (Ps. 148:8, `qui faciunt **verbus** ejus`) | `which do his [sic: *verbus*]` | *verbum*. Rabanus's own next sentence prints it correctly — `Quomodo isti faciunt **verbum** ejus` — which is the evidence. Migne also prints `**qui** faciunt` for Vulg. `quae`; that is a gender mismatch with no English exponent (Pattern 9), left alone. |
| 1158B | `hymmum` (Dan. 3:88, `**hymmum** dicite`) | `sing ye a [sic: *hymmum*]` | *hymnum*. Compositor's `m` for `n`. |
| 1160D | `homnibus` (`coram **homnibus** tantum`) | `before [sic: *homnibus*] only` | *hominibus*. The antithesis with `coram Domino` in the same clause fixes it. |
| 1164C | `defussum` (`quasi senio jam et longaeva aetate **defussum**`) | `as it were now [sic: *defussum*] with old age and length of years` | *defessum*, "worn out". |
| 1164D | `cupidita tum` (`transiliator **cupidita tum** saecularium`) | `the overleaper of worldly [sic: *cupidita tum*]` | *cupiditatum*. **Split type, Pattern 10** — the whole broken run is carried, spacing included, even though *tum* is a real word on its own. |

## Pattern 8 — punctuation carried as printed

- **1158B, `sed toto corde inclinemur`** — the paragraph ends with **no terminal
  stop**; the next line begins a new lemma. The English ends without a period
  ("but that we be bowed down with the whole heart"). Not supplied.
- **1164D, `habituros esse perpetuam Denique et Idithun`** — a sentence boundary
  with no stop before a capitalized *Denique*. Carried: "…perpetual rest in the
  bosom of Abraham Finally Idithun also…". Not supplied.
- **1164C, `quis enim nesciat opera per manus et brachia solere figurari.`** — a
  question closed with a full stop. Carried as a full stop.
- **1161A, `Verum quaeritur quomodo octo dierum alloquatur infantem? sed qua
  ratione … audivit?`** — both question marks printed and kept, including the
  lower-case `sed` opening after the first.

## Pattern 5 / 6 — guillemets mirrored 1:1, including the plate's failures

Verified mechanically against the Latin twin: opening and closing counts are
identical in every chunk of the range. Three of Migne's own irregularities were
mirrored rather than tidied:

1. **1155C (0022)** — `Benedicite, glacies et nives, Dominum. **«** In gelu et
   frigore…` : an **opening** guillemet where a closing one belongs. Reproduced
   as an opening guillemet. The run then closes 90 words later after the Eccli. 3
   citation, so the chunk is left with 24 `«` and 23 `»` — matching the plate.
2. **1156C–D (0023)** — the Zach. 13:1 quotation **opens and never closes**; the
   commentary runs straight on out of the quotation. No `»` supplied. (An earlier
   draft of this file's English did supply one; it was removed, and the guillemet
   parity check is what caught it.)
3. **1162A (0025)** — the Eccli. 3:20 quotation `« Quanto magnus es, humilia te
   in omnibus` opens and never closes; the narrative continues inside it.
   Mirrored.
4. **1163A (0025)** — `dicente Domino: **»** Sancti estote` : a **closing**
   guillemet where an opening belongs, and it is never balanced. Reproduced as
   printed.

Interrupting `inquit` kept inside the quotation at every occurrence (1155B, 1160A,
1161C, 1161D, 1162B, 1163A, 1164D, 1165A) per Pattern 5.

## Citations

- **1156C `[n: (Zach. XII)]`** is Zech. **13**:1, not 12. The note is reproduced
  verbatim (`refDisplay` keeps what Migne prints); no correction in the text.
- **1153A** — `juxta finem centesimi et secundi Psalmi` is Ps. 102 (Gallican), and
  the two verses quoted are 102:22 and 102:21, in that reversed order across
  1153A and 1154A. Rendered as printed.
- **1162C** — the Ps. 34:9 citation is printed **inline, in italic parentheses**
  (`*(Psal. [1162C] XXXIV)*`) rather than as an `[n: …]` note, and a column anchor
  falls **inside** it. This is a single stray instance, not a citing practice, so
  Pattern 4 `[f: …]` does **not** fire (known false-positive 4). Reproduced
  verbatim, anchor in place.
- **1155A** `Unde Apostolus exhortatur: « ut in omnibus glorificetur Deus per
  Jesum Christum »` is 1 Pet. 4:11 — Peter, not Paul. Migne prints no note;
  nothing added.
- **1157C** `qui fecit coelum et terram, maria et omnia quae in eis sunt` (Ps.
  145:6) and **1158D** `Coelum plicabitur, sicut liber involutus` (Isa. 34:4) and
  `firmamentum est Dominus timentibus eum` (Ps. 24:14) are quoted **without
  guillemets and without notes**. Left unquoted and unnoted, as printed.

## Structure

- **Heads.** `INCIPIT HYMNUS TRIUM PUERORUM.` → `HERE BEGINS THE HYMN OF THE
  THREE CHILDREN.`; the `(cont.)` on 0023's repeated head is kept (known
  false-positive 7). `INCIPIT CANTICUM ZACHARIAE *Patris B. Joannis Baptistae.*`
  → `HERE BEGINS THE CANTICLE OF ZECHARIAH *Father of the Blessed John the
  Baptist.*` — the abbreviation `B.` is expanded to "Blessed" because it is a
  title inside a translated subtitle, not a locator; flagging it here in case a
  merge-time pass prefers `*Father of B. John the Baptist.*`.
  `INCIPIT BENEDICTIO SIMEONIS PROPHETAE.` → `HERE BEGINS THE BLESSING OF SIMEON
  THE PROPHET.`
- **Column anchors.** All reproduced verbatim, in order, in place; counts checked
  against the Latin twin before and after writing (15 / 14 / 11 / 9 / 5).
  0026 runs **1165A → 1166A** with no 1165B–D; that is the plate, not a loss.
  0026 also opens `[1164B]Narrat` with **no space** after the anchor; the English
  mirrors the spacing.
- **Notes.** `[n: …]` counts and order identical to the twin (8 / 10 / 6 / 7 / 2).
  No note in this range is editorial prose, so no `[nt: …]` conversion (Pattern 15).
- **No `[ed: …]`** — nothing in this range is lost from the digitization.
- Word ratio EN:LA ≈ 1.49 / 1.52 / 1.59 / 1.55 / 1.63, within the expected ~1.5×.

---

# Blind polarity read (step 4a) — 2026-07-31

Four Opus units, blind, 27/27 chunks. **11 sites: 4 source-side, 7 ours.** Units in
`data/sweeps/polarity-8930/`. Boundaries straddled the canticle batches.

## ⚑ THE PROMPT-DESIGN FINDING — all 7 ours-side defects fell in ONE unit

| translation range | 7a″ instruction it was given | `[var:]` produced | defects the blind read then found |
|---|---|---|---|
| 0022–0026 (Benedictus, Magnificat, Nunc dimittis) | `⚠⚠⚠` **naming the specific words** to check, and "**treat the divergence list as the most valuable thing you produce**" | **11** | **0** |
| 0000–0007 (Isaiah, Hezekiah, Anna, Exodus) | strong but generic: "read every lemma word by word" | 1 | **7** |

Same rule, same model, same work, comparable familiarity of text. **Naming the words and
making the divergence list an explicit deliverable is what moved 7 → 0.** A general
instruction to be careful did not. Fold the stronger form into the runbook's prompt
template for every commentary range, not only the ones that look risky.

## Fixed (ours)

- **@1098B — two printed readings levelled into one.** Migne prints the verse TWICE:
  *« Laetata sum in salutari **meo** »* and, further down, *« Quia laetata sum in
  salutari **tuo** »*. Our English gave "**thy**" both times. The passage is Rabanus
  sorting which words of the canticle are actually *prayer* — the first-person *salutari
  meo* against the second-person *quia non est Deus praeter **te*** — so the English
  pre-supplied the very person the argument is testing for and the distinction collapsed.
  Now "in **my** salvation" / "in **thy** salvation".
- **@1100C — Prov. 9:1 conformed.** Migne prints *et **suffulsit** columnas septem*
  ("propped up"); we gave the Douay's "hath **hewn out**" (*excidit*), a word not on the
  plate, in the proof-text adduced for the septenary. Now "hath propped up".
- **@1106D — the English construction inverted the expected answer.** Printed *filiis
  vero Israel, quibus profuit… **non** fuit ille spiritus irae Dei?* was rendered "**was
  that not** the spirit of God's wrath?" — which in English idiomatically expects *yes*,
  asserting the spirit WAS wrath toward Israel. Rabanus's next clause (*spiritum Dei
  **dissimiliter** appellari, cum sit unus atque idem*) requires the opposite: wrath to
  the Egyptians, not-wrath to Israel, which is what makes the naming dissimilar. Now
  "— that was not the spirit of God's wrath?", which keeps Migne's question mark
  (Pattern 8) and the negation without supplying the wrong expectation.
  ⚠ **This column had a crux that actively DEFENDED the old rendering** ("carried as a
  question, negative intact"). Presence of the negative was never the issue; the English
  *construction* was. Third instance of "a defended entry deserves more scrutiny".

## Recorded, NOT fixed — flagged for a reading

- **@1101B** *Suscitat a terra pauperem / de stercore erigit inopem* — our lemma reverses
  the pairing against the plate. Rabanus himself then says *the poor man is the same as
  the needy*, so no sense is reversed and the fix is fidelity, not meaning. Left pending.
- **@1094B** Ps. 50:20 rendered "Deal kindly, **O Sion**" — *Sion* is accusative and the
  continuation *ut acceptabile fiat **in ea*** treats her as the place acted on. **The
  crux logs this column but only notes the dropped *Domine* and says "rendered as
  printed" — it is not.** Another logged-but-unaudited column.
- **@1100C** the Hebrew/LXX variant *multa in filiis infirmata est* rendered with the
  Vulgate lemma's "had many children", levelling the columns; our own English renders
  *multa in filiis* correctly in three other places.
- **@1101D** lemma prints *non in fortitudine roborabitur vir* with no *sua*; English adds
  "by **his own** strength", so Rabanus's gloss *hoc est, non in fortitudine **propria***
  explains a word he is in fact supplying.

## Source-side, new
- **@1117C** — *quod Deus Pater idcirco **aperuit** caelos* recapping a lemma printed a
  column earlier as ***Operuit** coelos virtus ejus*. **Antonyms.** Every other element of
  the verse survives in order; only the verb flips. Rendered literally, correct — the
  column needed a crux and now has one.
- **@1120C** — ***in fortitudine*** where the subject is *metu judicii* and the
  continuation *quotidiano **pavore** sustinere*; conjecture *in formidine*. **This is the
  SAME substitution as the already-marked @1109C** (*fortitudo* for *formido*, Exod.
  15:16). Twice in one work looks like a habit of the setting, not a slip.

## Controls
@1109C was planted in the WRONG UNIT (it lies in chunk 0006 = u1, not u2). The u2 agent
reported `controlFound: false` **honestly** and said why, then found the identical
substitution mechanism at @1120C in its own range unprompted — better evidence than the
control would have given. @1136C, @1156D and @1092A were blind and all were confirmed.

## Also worth a house-style ruling
**@1160D** *coram **homnibus** tantum, et non etiam coram Domino* → the `[sic: *homnibus*]`
marker passes 7a′ (the negation keeps its force) but **"men" disappears entirely**,
leaving "before ___ only, and not also before the Lord." A marked word whose own meaning
is load-bearing is quarantined out of existence — a different problem from 7a′, and a
fourth specimen for the real-word-typo convention Wilson owes (with 11553 @0540B, 11081
@0030B, and 8930 @1092A).
