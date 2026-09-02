# Cruces — 9004 (Walafrid Strabo, *Expositio in quatuor Evangelia*), chunks 0010–0013

Range: PL 114, cols 0892C–0904D — the close of `IN EVANGELIUM MARCI` (0010) and the
opening two-thirds of `IN EVANGELIUM LUCAE`, whose head falls at col 0893 (0011–0013).

⛔ **Every `[sic: …]` and `[var: …]` below stands on a column NOBODY HAS READ AT THE
PLATE.** Our Latin is Corpus Corporum's transcription, not Migne's page. Each entry
carries an explicit attribution guess — **our-file** (probable CC digitization damage:
a single broken word, a c→e / n→u / m→in confusion, a split or fused run) or **plate**
(a whole quoted clause, well-formed Latin, that diverges as a unit).
`node scripts/plate-gate.mjs 9004` must be satisfied before this work ships.

---

## 1. Register and structural notes (no marker)

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

## 2. Defect markers fired — `[sic: …]`

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

## 3. Vulgate divergences — the collation, lemma by lemma

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

## 4. Dittography — `[d: …]` ×2, both in chunk 0011

| col | printed | marked copy | why |
|---|---|---|---|
| 0896A | *cornu nec caro est nec ossus: sic et Christus **nec caro nec caro** est* | the **second** | The two copies are identical, so Pattern 11's position rule applies unchanged: wrap the second. The parallel clause immediately before (*nec caro est nec ossus*) shows what the second member should have been, but nothing is supplied — the crux carries the observation and the page carries the doubling. **Class: uncertain.** An eye-skip is as easy for a compositor as for a transcriber. |
| 0896C | *pastores loquebantur, **aptum fuit ut pastores loquebantur,** aptum fuit ut pastores testimonium darent* | the **FIRST** | ⭐ **Pattern 11a case: the copies differ, so position decides nothing.** The first copy's tail (*pastores loquebantur*) duplicates the lemma **immediately before it**, which is the eye-skip's source; the second copy (*aptum fuit ut pastores testimonium darent*) is the gloss the passage is actually making, and it is completed by *de vero agno*. Marking "the repeated occurrence" mechanically would have quarantined the real gloss and left the page saying it was fitting that the shepherds spoke, twice, and testified never. **Class: uncertain**, same as above. |

---

## 5. Open, and what would settle it

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
