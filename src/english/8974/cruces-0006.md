# 8974 *Additiones ad Postillam* (Paul of Burgos): cruces, chunks 0006–0010 (cols 0050B–0060A)

Stint C6, 2026-09-16. The Franciscan's letter (0006) and Burgos's reply (0007–0010). Every column in
this range was read at the plate (Gallica f25–f30, corner numbers first; archive pp. 30, 31, 34, 35 as
second witness). Plate reads: `data/briefs/PL113L-PLATE-READS-C6.json`. Pending patches:
`data/briefs/PL113L-PENDING-TEI-PATCHES-C6.md`.

## A. Conventions: held from `cruces-0000.md` §A, with these notes for the merge

- All of C0's vocabulary is held: literal / spiritual / mystical sense; *Postill* (italic) / Postillator;
  *Additions*; worthy / more worthy / worth; authority, passage, exposition, doctor, holy doctors;
  effective argument; Rabbi Solomon; the Master, the Philosopher, the Apostle; "tried by the fire of
  charity" (0046C, re-quoted at 0051B and 0058B); "Thus he." for *Haec ille*; "sacred Scripture".
- **Second person:** the letter-writer addresses Burgos as *tu* and Burgos addresses him as *tu*
  throughout: **thou** on both sides (Pattern 17). The Jews addressed in *Scrutamini … putatis vos*
  take **ye**.
- **The article references are C0's structure exactly.** *in sexto articulo responsali* (0052A, 0052B) =
  "the sixth, responsive article", i.e. C0's sixth article (0044D–0047A), the one "answering the
  principal question". *in secundo articulo quaestionis* (0056B) = "the second article of the
  question" (C0 0040B: whether every passage takes the fourfold sense). *in tertio articulo* (0057B,
  0057C) = C0's third (0041C: one literal sense or several). *determinatio* = "determination",
  *decisio* = "decision", *quaestio* = "question".
- **The letter's *primum … sextum decisionis* (0050D) and Burgos's *Circa sextum* (0055D–0056A)** refer
  to parts of the *decision*, not to the seven *arguments*. Rendered "the first of the decision" etc.,
  without supplying a noun.
- **⚑ ONE DIVERGENCE FOR THE MERGE: *utilia* (Isa 48:17).** C0 renders it "profitable things" at 0049D.
  Here (0052A) it is "useful things", because Burgos's reply turns on the word: the letter granted
  *magna … utilitas* ("great usefulness"), and Burgos answers that the prophet promised *utilia*, not
  *subtilia*. With "profitable" the gloss explains nothing (the *stylus*/*epistylium* case, Song of Songs
  ruling case 2). **Recommended reconciliation: change C0's 0049D to "useful things"**, which also
  matches C0's own "usefulness" for *utilitas* at 0049D and 0045D. Not edited here (C0's file).
- **⚑ The `[cn: a | …]` foot note (0050B) — the brief was wrong about the English side.** The launch
  brief said to reproduce `ª [cn: a | …]` verbatim in the English and add an `[nt:]` after it. That
  fails `verify-english` ("[cn: …] marker found in the ENGLISH chunk") and contradicts
  `translation-style.md` Pattern 19: a letter-keyed note is Latin `[cn: a | …]` + English **`[nt: …]`
  alone** at the same point, and "Migne's raised key itself is NOT carried into the English". The English
  therefore carries only `[nt: That is, growing on the same tree as the little branch.]`. Verifier: OK.

## B. Scripture checked (7a″), against `sources/vulgate/clementine-flat.txt`

Every column below was read at the plate.

| col | Migne's wording (abridged) | Migne's address | Vulgate | result |
|---|---|---|---|---|
| 0050B | *Et spiritus vitae erat in rotis* | none | Ez 1:20 *spiritus enim vitae erat in rotis* (1:21 *quia …*) | ✓ (connective only) |
| 0050B, 0054A–D, 0055B–C | *Scrutamini Scripturas* | Joan. V (at 0054A) | Jo 5:39 | ✓ |
| 0054A | *Scrutamini Scripturas, **in quibus** putatis vos vitam aeternam habere* | Joan. V | Jo 5:39 ***quia** vos putatis **in ipsis*** | relative for causal; no argument rests on it; no marker |
| 0055C | *Illae sunt quae testimonium perhibent de me* | none | Jo 5:39 | ✓ |
| 0050D | *Omnia in figura illis contingebant* | none | 1Cor 10:11 ***Haec autem omnia** in figura contingebant illis* | **divergent → `[var:]`**. The letter drops *Haec autem*; Burgos's whole rebuttal at 0056D is that Paul wrote *Haec autem omnia* "to show that he speaks only of those things". The divergence IS the dispute |
| 0056C | *Omnia in **figuris** contingebant illis* | I Cor. X | 1Cor 10:11 | **divergent → `[var:]`**. Burgos's re-quotation of the letter: *Haec autem* still missing, and now *figuris* for *figura* (the letter at 0050D had *figura*) |
| 0056D | *Haec autem omnia contingebant illis in figura* | none | 1Cor 10:11 | word order only; ✓ |
| 0052A | *Ego Dominus docens te utilia* | Isa. XLVIII | Is 48:17 *Ego Dominus **Deus tuus**, docens te utilia* | *Deus tuus* omitted, no sense change; ✓. (C0's 0049D prints the same verse as *Isa. XVIII*; here the address is right) |
| 0053B | *Haec est vita aeterna, ut cognoscant te Deum, et, quem misisti, **Filium tuum*** | Joan. XVII | Jo 17:3 *te, **solum Deum verum**, et quem misisti **Jesum Christum*** | **divergent → `[var:]`**. *solum … verum* gone and *Filium tuum* for *Jesum Christum*. Burgos adduces it for the incarnation of the Word, and the printed form names the Son where John names Jesus Christ |
| 0053B | *Verbum caro factum est* | Joan. I | Jo 1:14 | ✓ |
| 0053B | *Clamans voce magna exspiravit* | Marc. XV | Mc 15:37 *Jesus autem **emissa** voce magna expiravit*; the wording is Lc 23:46 *clamans voce magna … expiravit* | **address finding** (Mark's address, Luke's words); sense unchanged; no marker |
| 0053B, 0056D | *Diliges Dominum Deum tuum ex toto corde (tuo)* | **Matth. XII** | Mt 22:37 | **address finding**: XII for XXII (C0's 0040B–C prints *Matth. XXII*). Plate confirms XII |
| 0053B | *Diliges proximum tuum sicut teipsum* | Ibid. | Mt 22:39 | ✓ |
| 0053C | *Si vis perfectus esse, vade, et vende **omnia** quae habes, et da pauperibus* | **Marc. XIX** | Mt 19:21 *vade, vende quae habes* | **address finding**: Mark has no ch. XIX; the verse is Matthew 19 (C0's 0040D prints *Matthaei XIX*). *omnia* added, as at C0's 0040D; no marker |
| 0053C | *Qui crediderit, et baptizatus fuerit* | Marc. XVI | Mc 16:16 | ✓ |
| 0053D | *Caro mea vere est cibus, et qui manducat meam carnem, et bibit meum sanguinem* | Joan. VI | Jo 6:56 + 6:55/57 (*Caro **enim** mea …*) | conflation of adjacent verses; no marker |
| 0053D | *Confitemini alterutrum peccata vestra* | **Jac. III** | Jac 5:16 (*Confitemini **ergo***) | **address finding**: III for V |
| 0054B | *Lapidem quem reprobaverunt aedificantes, hic factus est in caput anguli* | Psal. CXVII | Ps 117:22 | ✓ |
| 0054C | *Non auferetur sceptrum de Juda* | Gen. penult. | Gn 49:10 | ✓ |
| 0054C | *Et tu Bethlehem?* | Mich. V | Mch 5:2 | ✓ (the `?` is Migne's, kept) |
| 0054C | *Ecce virgo concipiet?* | Isa. VII | Is 7:14 | ✓ (`?` kept) |
| 0054C | *Ecce rex tuus **venit** tibi?* | Zach. IX | Zach 9:9 ***veniet***; Mt 21:5 *venit* | Zechariah's address, Matthew's tense; no sense change; no marker |
| 0054C | *Sicut ovis ad occisionem ducetur* | **Isa. LIV** | Is 53:7 | **address finding**: LIV for LIII |
| 0054D–0055A | *Rectae sunt viae Domini, et justi ambulabunt in eis; praevaricatores autem **corruerunt** in eis* | Ose. XIV | Os 14:10 *praevaricatores vero **corruent*** | **divergent → `[var:]`**. Perfect for future; Burgos's own gloss a few lines later reverts to *corruent*, so the quotation and its exposition disagree on the plate |
| 0055A | *Quis ex vobis qui habet unam ovem, et si ceciderit in sabbatis* | Matth. XII | Mt 12:11 *Quis erit ex vobis homo, qui habeat ovem unam …* | loose; no sense change; no marker |
| 0055B | *Audistis quia dictum est antiquis* | none | Mt 5:21, 5:27 etc. | ✓ |
| 0055B | *Populus hic labiis me honorat* | (per Isaiam) | Mt 15:8 / Mc 7:6 (Is 29:13) | ✓ |
| 0055B | *Caeci sunt, et duces caecorum* | none | Mt 15:14 | ✓ |
| 0055C | *Spiritus Domini super me; propter quod unxit me evangelizare pauperibus* | Isaiae LXI | wording is **Lc 4:18**; Is 61:1 *eo quod unxerit Dominus me; ad annuntiandum mansuetis* | **address finding**: Isaiah's address, Luke's words, and correctly so, since Burgos is narrating Luke 4. No marker |
| 0055D | *Ego et Pater unum sumus* | none | Jo 10:30 | ✓ |
| 0055D | *Pater major me est* | none | Jo 14:28 | ✓ |
| 0056D | *Audi, Israel, Deus tuus unus est* | Deut. VI | Dt 6:4 *Dominus Deus noster, Dominus unus est* | as C0 at 0047D: no marker (the unity of God unchanged) |
| 0057B | *Sapientibus et insipientibus debitor sum* | Rom. I | Rom 1:14 | ✓ (Migne's interior `« sum` guillemet kept) |
| 0058A | *spiritualis homo judicat omnia, etiam profunda Dei* | I Cor. II | 1Cor 2:15 + 2:10 | paraphrase, unguilleted; ✓ |
| 0058C | *Non qui seipsum commendat, ille probatus est* | II Cor. X | 2Cor 10:18 (*Non **enim** qui*) | ✓ |
| 0058C | *Laudet te **os alienum**, non tuum* | Prov. XXVII | Pr 27:2 *Laudet te **alienus**, et non os tuum* | no sense change; no marker |

**Allusions, unguilleted, checked, no marker:** Simeon's *responsum accepisti a Spiritu sancto, non
videre mortem, nisi prius* (Lc 2:26), 0050A; *sacrificium vespertinum* (Ps 140:2), 0050A; *in lumine
tuo … lumen* (Ps 35:10), 0050A; *thesaurizandum patres filiis* (2Cor 12:14), 0050B; *in corpore vel
extra corpus … Deus scit* (2Cor 12:2), 0051B; *ferrum ferro acuitur* (Pr 27:17), 0051D; *alta sapere*
(Rom 11:20, 12:16), 0052A; *abyssus multa* (Ps 35:7), 0057B; *utrum sit dignus amore vel odio* (Ecl 9:1),
0058A; *positum est in signum cui contradicetur* (Lc 2:34), 0058B; *quaestionem magis praestant quam
aedificationem* (1Tim 1:4), 0058C; *qui mollibus vestiuntur, in domibus regum sunt* (Mt 11:8), 0058D;
*meliora charismata … aemulare* (1Cor 12:31), 0060A.

## C. Cruces by column

- **0050A.** *Alme praesul. ut alter Simeon*: twin and archive print a full stop before a lower-case *ut*;
  Gallica a comma. Press variant. The English follows the stop and keeps the lower case: "Gracious
  prelate. like another Simeon".
- **0050B, the foot note.** *ramusculo bonae naturae legis ª* keyed to *(a) Id est in eadem arbore
  nascentem in qua ramusculus.*, confirmed on both copies. Migne's note glosses the participle the
  letter implies with *complantatam*: the rectitude of Burgos's mind is "growing on the same tree" as
  the little branch. Latin carries `[cn: a | …]` (untouched); English carries the translated `[nt:]`
  only (see §A).
- **0050B.** *abundare aliis sacrae Scripturae sensibus*: "abounds over the other senses", i.e. the
  question's *utrum … sit dignior*. *pro cujus parte contra*: "on the part of which, against it" as
  printed; it describes the seven arguments *videtur quod non*.
- **0050B.** *octo rationibus Achilleis*: **eight** Achillean reasons, while C0's structure has **seven**
  arguments (0038A–0039A). Rendered "eight" as printed. The letter may be counting the *Sed contra*
  (0039A) or the *Sed contra*'s second authority; not ours to decide.
- **0050B.** *decisionem assignando sub numero senario*: "under the number six", the six articles.
- **0050B–C.** *attamen non [0050C] ingeniosa subtilitas mentem reficit elevatam, non satiat …*: the *non*
  is rendered on the verb ("ingenious subtlety does not refresh the uplifted mind"), because that is how
  Burgos himself construes it at 0051D–0052A (*quid si non reficiant mentem elevatam?*). The comma splice
  into *non satiat* is kept as printed.
- **0050C.** *Quid arca, nisi littera prospectatur?*: "What is looked upon as the ark, but the letter?"
  The construction is loose; rendered as closely as it allows.
- **0050D.** *sempliciter*: twin and archive; Gallica *simpliciter*. Rendered "simply", no marker (a
  non-word on one copy only cannot license a `[sic:]` against Migne). See patches file.
- **0051A (twin `sed pene`).** Both copies *sed bene*; English "but the mystical is indeed multiplied";
  patch filed.
- **0051A.** *ex oppositis adjectivis*: "from the opposite adjectives", as printed. The sense is
  probably "from the opposite of the qualifications" by which Burgos faulted Lyra (his three
  shortcomings at 0046B–D), and the letter's next three *Commendatur* sentences answer those three
  shortcomings one by one. *adjectis* ("additions") would also construe. Rendered literally.
- **0051B.** *quare sententias doctorum postposuit quasi impertinentes, ut auctorizaret opus suum
  Ecclesiae doctoribus*: rendered literally. Burgos's paraphrase at 0058B–C
  (*sententias sanctorum doctorum propriae sententiae postposuit*) reads it as Lyra setting the doctors
  after his own opinion.
- **0051B–C.** *et tui reverentia esset mihi opus tuum assidua diligentia si occurrisset mihi sua
  praesentia*: syntax does not fully construe; rendered as closely as the words allow.
- **0052A.** *talia enim quae, **ut dicit**, mentem elevatam reficiunt*: third person, though Burgos is
  quoting his correspondent (*tu*). Rendered "as he says", as printed.
- **0052A.** *secundum quarum unam sensus **naturalis** praeeminet*: both copies. Burgos's
  determination (C0 0045B) makes the **literal** sense pre-eminent, and the next two clauses
  (*aequalis dignitatis … minoris dignitatis, quam sensus spiritualis*) have the literal sense as their
  unexpressed subject. Rendered "the natural sense" as printed. **Declined for `[cj:]`**: a wrong noun
  that asserts nothing Burgos argues against, and no negation or correlative (C0's *impassibiles* and
  *potentior* declined on the same bar).
- **0053A.** *Primo **contra** auctoritates sacrarum Scripturarum: utrum fides ita se habeat
  demonstrandum est*, attributed to *De Trinitate* **IV**: both confirmed at the plate. Augustine,
  *De Trin.* I.ii.4, reads *primum **secundum** auctoritatem Scripturarum sanctarum, utrum ita se fides
  habeat, demonstrandum est; deinde … adversus garrulos ratiocinatores*. As printed, the English has
  Augustine demonstrating the faith **against** the authorities of Scripture, in a sentence Burgos
  adduces to prove that the Trinity **is founded on** those authorities. **`[cj: *contra*; read
  *secundum*, "according to"]` fired**: the printed preposition makes the proof-text assert the reverse
  of what it is cited for (Pattern 18, ✅ class of word substitution). ⚑ A judgment call at the bar; the
  merge may decline it. The book number (IV for I) is not corrected.
- **0053B.** *Idem de creatione mundi, aliis articulis fidei*: no conjunction printed; none supplied.
- **0053D.** *secundum sensum litteralem **doctorum** hujusmodi habetur virtus*: "the literal sense of
  doctors of this kind", as printed on the plate. The parallel two lines later, *per sensum litteralem
  hujusmodi **dicti***, points to *dictorum* ("of sayings of this kind"). Rendered literally; declined for
  `[cj:]` (no negation, correlative or reversed claim).
- **0054A.** *per haec tua verba sentio aestimare quod*: no subject for *aestimare*; English supplies
  "[thee]".
- **0054A.** *Quis autem non imprudentissime nitatur … nisi habeat*: both negatives carried ("who would
  not most imprudently strive … unless he also has").
- **0055A.** *licet sit rectus, id est planior; et justi … ambulabunt in eis*: the concessive *licet* has
  no main clause until *praevaricatores tamen … corruent*. Kept as printed.
- **0055C.** *Item attendendum quod quia inter praedictos errores … ; testatur enim Lucas … ; merito
  igitur*: the *quod quia* clause never completes; the sentence restarts at *merito igitur*. Kept.
- **0055D.** *circa verum intellectum litteralem Evangelii praedictus error consistit*: "the aforesaid
  error consists about the true literal understanding", i.e. it is an error concerning it. *circa*
  rendered "about" so that the English does not say the error consists IN the true understanding.
- **0057A.** *quia de quanto aliquid est universalius, tanto est communicabilius*: Burgos's restatement
  of the letter's *quanto … tanto* (0050D) adds *de*. Rendered "by as much as … by so much".
- **0057B (twin `spritualia`).** Plate *spiri-|tualia*; patch filed.
- **0057C.** *quanto magis in Scriptura divina … inveniri possunt …* closes with a full stop, not a
  question mark. Kept.
- **0057C–D.** *sensus litteralis dividitur in tres species secundum Augustinum in libro de Utilitate
  credendi, scilicet in historicam, etymologicam et anagogicam*: Augustine (*De util. cred.* 3.5) names
  four modes, *historia, aetiologia, analogia, allegoria*; *etymologicam* and *anagogicam* look like
  *aetiologicam* and *analogicam*. Both on the plate; Burgos says he expounded them in the third article
  (C0's range). Rendered as printed ("etymological", "anagogical"); for the merge, check C0's rendering
  at the third article for the same pair.
- **0057D.** *Isidorus tradit in libro de summo Bono*: the seven rules are Tyconius's, transmitted by
  Isidore, *Sent.* (*De summo bono*) I.19. Rendered as printed.
- **0057D.** *sed est **rectitudo** experientiae*: Burgos's quotation of the letter, which at 0051A reads
  *certitudo experientiae*. Both copies print *rectitudo* here. A real word ("rightness"), rendered as
  printed; the misquotation may be Burgos's or the compositor's. No marker.
- **0057D.** *Attribuis enim **sensus** spirituali, seu mystico*: nominative/genitive *sensus* where the
  dative *sensui* is required (it agrees with *spirituali … mystico*). Both copies. **`[sic: *sensus*]`
  fired** beside the rendered sense ("to the spiritual, or mystical, sense"), because English has no
  exponent for the case and a plain rendering would hide the defect (Pattern 12, test 2; C0 fired the
  same class at 0045B *sensu*). Column read at the plate on both witnesses.
- **0058A (twin `spritualem`), 0058B (twin `Sripturae`).** Plate sound; patches filed.
- **0058A.** *in gratia gratificante*: "in grace that makes pleasing" (*gratia gratum faciens*), against
  *gratiae gratis datae* "graces freely given".
- **0058C.** *cum huic commendationi non solum sacra Scriptura repugnet; legitur enim …; Hoc etiam
  physica doctrina suadet*: the *non solum* has no printed *sed etiam*; the second member arrives as a
  new sentence with *etiam*. "Not only" kept; nothing supplied.
- **0058C.** *Laudamus seipsos vituperantes*: "We praise ourselves in blaming", as printed; the
  Aristotelian point (*Rhet.* / *NE* IV, self-deprecation as boast) is not glossed.
- **0059A.** *Commendas eum tertio ex hoc quod inter doctores Hebraicos non invenit meliorem theologum
  quam Rabbi Salomonem*: the letter (0051B) said Lyra chose Rashi because he found him *meliorem
  theologum* among all. Burgos's negative paraphrase ("found no better theologian than") is the same
  claim; negation carried.
- **0060A.** *praesertim in Scriptura divina, semper praeponere veritatem*: Gallica prints a stop after
  *divina*, archive and twin a comma. English follows the comma.
- **0060A, end of text.** The reply ends *Vale, frater in Domino: et meliora charismata semper aemulare,
  etc.* at col 60 line 15 (f30). A rule follows, then Doring's *INCIPIT PROLOGUS IN Replicas defensivas
  Postillae …* across both columns: no file we hold, not translated. The band gap between chunk 0009
  (ends 0059A) and 0010 (0060A) is layout: the reply occupies only the top third of cols 59–60.

## D. Candidates considered and rejected

- **`[sic:]` on *sempliciter* (0050D)**: rejected. Clean *simpliciter* on Gallica; a letter never stands on
  the JBIG2 copy alone.
- **`[sic:]` / patch on *Alme praesul.* (0050A) and *divina.* (0060A)**: rejected; press variants.
- **`[sic:]` on *pene*, *spritualia*, *spritualem*, *Sripturae***: rejected. Transcription errors refuted
  on both copies, filed as patches.
- **`[cj:]` on *naturalis* (0052A), *doctorum* (0053D), *adjectivis* (0051A), *rectitudo* (0057D)**:
  rejected under the Pattern 18 bar (see C).
- **`[var:]` on Jo 5:39 *in quibus*, Mc 15:37 / Lc 23:46 *Clamans*, Mt 19:21 *omnia*, Jo 6:56 conflation,
  Zach 9:9 *venit*, Mt 12:11, Dt 6:4, Pr 27:2**: rejected; real divergences that change no sense the
  argument uses.
- **`[d:]`**: no doubled run found.
- **Band arithmetic** (0059A → 0060A; `(cont.)` heads): known false positives; the plate shows the layout.
- **Interior guillemets.** 0057B *« sum* is in the twin and kept 1:1. The plate also sets line-start
  continuation `«` inside many other quotations in this range (e.g. 0053B *« quem misisti*) which the twin
  drops; guillemet parity follows the twin and no patch is filed (8957 precedent: never patch a guillemet).
