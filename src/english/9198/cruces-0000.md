# 9198 Usuardus, *Martyrologium* (PL 123) — cruces, stint A (chunks 0000–0003, cols 0599A–0809)

Plate: archive.org `patrologiaecurs29goog`, leaf = (col + 29)/2, held without drift from n314
(599/600) to n419 (809/810). 34 pages opened; corners and verdicts in
`data/briefs/9198-PLATE-READS-0000.json`; plate-vs-twin divergences in
`data/briefs/9198-PENDING-TEI-PATCHES-0000.md` (P1–P23). Single witness throughout.

## §0 · Work-wide decisions made by this stint (stints B–F: follow these)

- **Book-title banner** (0000): *INCIPIT USUARDI MARTYROLOGIUM PER ANNI CIRCULUM.* →
  `HERE BEGINS THE MARTYROLOGY OF USUARDUS THROUGH THE CYCLE OF THE YEAR.` Plain line, caps.
- **⭐ *natalis* — the one-time crux (0601, first instance, *Romae, natalis sancti Almachii*).**
  Rendered "the birthday of Saint X" everywhere, per §8 of the brief. In a martyrology *natalis*
  (*dies natalis*) is the day of the saint's DEATH: his birth into heaven, the day his feast is
  kept. It is not his earthly birthday, and the English word should not be read so. *Natale*
  (6 February, Dorothea, in the unanchored stretch after [0729]) takes the same rendering. Nobody glosses it again.
- **⭐ The `[cj:]` on the second prologue's head (0599C).** The plate (n314) prints *EX LIBRIS
  BEATI AUGUSTI* (read at prep and again here); Corpus Corporum's raw TEI says *AUGUSTINI* and was
  patched to the plate at prep. *Augusti* is a real word (gen. of *Augustus*), so there is nothing
  for a `[sic:]` to wrap, and the faithful English "from the books of blessed Augustus" attributes
  the prologue to the wrong man. The text that follows is Augustine's, cited by Migne himself in the
  same paragraph as `(AUG, l. XX, contr. Faust., c. 21)`. That is Pattern 18's test (the English
  asserts something false), so the head carries
  `FROM THE BOOKS OF BLESSED AUGUSTUS [cj: *AUGUSTI*; read *AUGUSTINI*, "of Augustine"]`.
  Whether *AUGUSTI* is a compositor's truncation or an abbreviation read as a word is not decidable
  from one copy and does not change the marker.
- **Bouillart's two keyed prologue notes** (`[cn: a | …]` in the Latin) are translated as `[nt: …]`
  at the same point in each head, signature "Bouillart." kept. *V. C.* is rendered "the most
  distinguished man (V. C.)", *Pithaei* "Pithou", *D. Jacobo du Breul* "Dom Jacques du Breul",
  *bibliotheca Pratensi* "the library of the Prés".
- **Heads.** Month heads: `JANUARY HAS 31 DAYS.` etc. Day heads per M1, plain (the Latin italics are
  typographic, not carried): `On the Kalends · 1 January`, `The fourth day before the Nones ·
  2 January`, `The day before the Ides` for *Pridie*/*Prid.*, `On the Ides` for *Idus.*/*Idibus.*
  (both forms print), no month added after *Kal.*

## Formulas (beyond the brief's §8 table)

| Latin | English |
|---|---|
| bare genitive commemoration: *sancti X episcopi* | of Saint X, bishop (the implied *natalis* is not supplied) |
| *sanctorum X et Y* / *sanctorum martyrum X* | of the saints X and Y / of the holy martyrs X |
| *B.* / *S.* (abbreviated) | blessed / Saint |
| *quorum gesta habentur* / *cujus gesta … habentur* | whose acts are extant |
| *martyrium consummavit* / *martyrio consummatus est* | completed his martyrdom / was consummated by martyrdom |
| *martyrium est passus* | suffered martyrdom |
| *passi sunt* | suffered |
| *capite puniri* / *capite punita est* | to be punished by beheading / was punished by beheading |
| *capite truncatur* / *capitis decollatione* | is beheaded / by the beheading of (her) head |
| *gladio percussus* / *gladio caesus* / *gladio puniti* | struck with the sword / slain with the sword / punished with the sword |
| *igni traditus* / *igni combusti* | given over to the fire / burned with fire |
| *fustibus caesus* | beaten with cudgels |
| *equuleo suspensus* / *equuleo tortus* | hung upon the rack / tortured on the rack |
| *in carcere maceratus* | wasted in prison |
| *squalor carceris* | the filth of prison |
| *vita … virtutibus (et miraculis) refulsit / claruit* | whose life shone (forth) with virtues (and miracles) |
| *viri Dei* | a man of God |
| *cum aliis N* / *cum aliis numero N* | with N others / with others to the number of N |
| *jubente X* | at the command of X |
| *principis* (of an emperor) | the emperor (*tempore Claudii principis* = in the time of the emperor Claudius) |
| *via Appia / Salaria / Lavicana / Numentana / Cornelia / Latina* | the Appian / Salarian / Lavican / Numentan / Cornelian / Latin Way (printed spelling kept) |
| *Apud Africam* | At Africa (the §8 *Apud* formula, kept even here, distinct from *In Africa*) |
| *In Hispaniis* / *In Galliis* / *In Britanniis* | In the Spains / In the Gauls / In the Britains |
| *recolitur* (of a feast) | is kept |
| adjectival place-names with no conventional English (*Bobacensis*, *Beomensis*, *Tricastrinum*, *Nantonense*, *Vasionensis*, *Taruanensis*, *Adartenses*, *Trajectenses*) | kept as italic Latin, nominative: "the monastery *Bobacensis*", "bishop *Taruanensis*" |
| well-known sees as adjectives (*Lugdunensi*, *Remensi*, *Andegavensi*, *Trecassino*, *Rothomagensi*, *Parisiacensi*, *Autisiodorensi*) | "of Lyon / Reims / Angers / Troyes / Rouen / Paris / Auxerre" |
| Bouillart brackets (M2) | *Bouillart., X* → [Bouillart: *X*] · *add.*/*Addit* → [Bouillart adds: …] · *Interserit* → [Bouillart inserts: …] · *Apud Bouillart.:* → [In Bouillart: …] · *legit* → [Bouillart reads: …] · *om.* → [Bouillart omits: …] · *in margine* → [Bouillart in the margin: …] · *ad oram paginae* → "at the edge of the page" · *cursivo charactere* → "in cursive type". Two-word additions that say something (*et prunas*, *et in qua*) are translated; single variant words stay italic Latin in the printed case. |

## Names

Conventional English used for: Peter, Paul, John (incl. Chrysostom), Basil, Isidore, Lucian,
Julian (every *Julianus*), Fabian (pope, and the martyr-husband of Dafrosa), Sebastian, Agnes,
Vincent, Anthony (*Antonius* the monk only), Hilary, Remigius, Felix, Marcellus, Timothy, Titus,
Ignatius, Agatha, Cyril, Paula, Jerome, Bede, Augustine, Cyprian, Barnabas, Prudentius, Ephrem,
Brigid, Valentine, Matthias, Simeon, James, Joseph, Cornelius, Apollonia, Eulalia, Gall, Leander,
Alexander, Nestor, Mark, Luke, Arius, Benedict, Maurice, Medard, Margaret, Catherine, Genevieve,
Germanus (of Auxerre, and of Paris), Habakkuk, Micah (*Abbacuc et Micheae prophetarum* only; the
son of Martha *Abacuc* stays Abacuc), Charles (the Bald).
Emperors: Diocletian, Maximian, Maximinus, Licinius, Decius, Gallienus, Valerian, Aurelian,
Justinian, Arcadius, Trajan, Claudius, Antoninus, Marcus Antoninus, Lucius Aurelius, Numerian,
Marcian (*Martiani*), Alexander, Julian. King: Clovis (*Clodoveus*). Bouillart's *Lizinio* (0695)
kept as **Lizinius** and his *Ducii* (0725) as **Ducius**: they are his readings.

Latin nominative of the printed form for everyone else, including: Almachius, Martina,
Concordius, Fulgentius, Eugendus, Eufrosina, Argeus, Marcellinus, Macharius, Antheros, Calixtus
(0609) / Calistus (0673, printed so), Cyricus, Primus, Theogenes, Aquilinus, Geminus, Martianus,
Quintus, Theodotus, Triphon, Priscus, Priscillianus, Benedicta, Dafrosa, Hermes, Aggeus, Gaius,
Thelesphorus, Macra, Rictiovarus, Melanius, Clerus, Januarius, Severinus, Victorinus, Maxianus,
Eugenianus, Basilissa, Antoninus, Anastasius, Celsus, Martiana, Vitalis, Revocatus, Fortunatus,
Revolutus, Firminus, Nichanor, Salvius, Leucius, Satyrus, Archadius, Viventius, Eufrasius, Bonitus,
Maurus, Honoratus, Titianus, Furseus, Speusippus, Elasippus, Melasippus, Leonilla, Jonilla, Neon,
Sulpitius, Prisca, Moseus, Ammonius, Germanicus, Pontianus, Launomarus, Marius, Martha, Audifax,
Publius, Dionysius (the Areopagite), Symphronius, Fructuosus, Augurius, Eulogius, Patroclus,
Dacianus / Datianus (both printed), Orontius, Victor, Parmenas, Emerentiana, Severianus, Aquila,
Babilas, Urbanus, Prilidanus, Epolonus, Mardonius, Muso, Eugenius, Metellus, Ananias, Praejectus,
Amarinus; **Policarpus** (0693, 0787, printed *Policarpi*) but **Polycarpus** (0785, plate
*Polycarpi*, P18); Theogenes, Marius, Dynamius, Calinicus, Thyrsus, Papias, Laudicius, Valerius,
Sabinianus, Ypolitus (*Ypoliti*), Novatus, Flavianus, Aldegundis, Baltildis, Metranus, Saturninus,
Vigilius, Pionius, Apronianus, Sisinnius, Felicianus, Firmus, Candidus, Fuscolus, Celerinus,
Laurentinus, Celerina, Blasius (Bouillart's bracket) against **Blavius** (0763 band, *Blavii*,
plate-confirmed, Solier: *Scripsi Blavii*), Deodatus, Tigris, Remedius, Fileas, Filoromus, Gelasius,
Magnus, Donatus, Aventinus, Quintianus, Avitus, Dorothea, Theophilus, Antholianus, Vedastus, Amandus,
Augulus, Moyses (*Moysetis*, 0739; *Moyseos*, 0759), Dionisius (printed so), Emilianus, Cointa,
Salomon (main text) and **Salominis** (Bouillart's bracket, P10: nominative uncertain, printed form
kept), Ammon (*Ammonis*), Ansbertus, Zoticus, Hireneus, Jacinctus, Amantius, Sotheris, Scolastica,
Austreberta, Desiderius, Eufrasia, Dativus, Apelius, Anolinus, Modestus, Agabus, Polioctus,
Lizinius (0755 bishop), Felicula, Zeno, Bassus, Antonius (0759 martyr, not Anthony), Protolicus,
Cyrion, Bassianus, Agatho, Agricolanus, Craton, Faustinus, Jovia, Quinidus, Honesimus, Juliana,
Polochronius, Secundianus, Romulus, Fintanus, Silvinus, Cleophas, Maximus, Claudius, Prepedigna,
Gabinius, Tyrannio, Silvanus, Peleus, Linus, Zenobius, Potamius, Nemesius, Verolus, **secundinus**
(lower-case on the plate's twin; kept), Servulus, Lupus, Egidius, Columba, Aristion, Abilius,
Eustachius, Sinerus, Victorinus, Nicoforus, Claudianus, Dioscorus, Serapion, Eunus, Recharedus,
Romanus, Rufinus, Ursacius, Albanus (Bouillart: *Albini*), Adrianus, Jovinus, Basileus, Sergius.
Bouillart: the plate at n385 prints his name **Brouillart** once (P9); the English follows the plate
there and nowhere else.

**Printed form kept, nominative uncertain (crux, not normalized):** *Eugenti* (0613; gen. of
Eugentus or contracted Eugentius, Solier: *pro Eugenti ponunt Eugenii*), *Thomis* (0605; Tomis),
*Verziaco* (0645), *Dorcasino* (0669), *Asclae* (0683; Ascla or Asclas), *Salominis* (0741),
*Suevo* (0745), *Agapis* (0763; Agape or Agapis), *Baldomeris* (0799).

Places: Rome, Antioch, Alexandria, Carthage, Jerusalem (*Hierosolimis*, *Hierosolimorum*),
Nicomedia, Caesarea, Cappadocia, Africa (*Affrica* in a bracket too), Egypt, Asia, Spoleto, Lyon,
Paris (*Parisius*), Auxerre, Reims, Rennes (*Redonis*), Naples (*Neapoli*), Beauvais (*Beluacus*),
Poitiers, Nola, Angers (*Andegavis*), Arles, Langres (*Lingonis*), Bourges (*Bituricas*), Troyes
(*Trecas*), Valencia, Tarragona, Trier, Trent, Orléans (*Aurelianis*), Vienne, Cordoba, Verdun
(*Viriduno*), Rouen, Barcelona (*Barcinona*), Seville (*Hispali*), Marseille (*Massilia*),
Philippi, Smyrna (*Smirna*), Ephesus, Damascus, Bethlehem, Edessa, Sebaste, Tyre, Babylon, Ostia,
Cumae, Perge (*Pergen*), Pamphylia, Nicaea, Hierapolis, Sicily, Cyprus, Pontus, Phrygia, Bithynia,
Helenopolis, the Thebaid, the Hellespont, Achaia, Armenia, Lusitania, Persia (*Persida*) and Persis
(*Perside*, printed so). Latin kept: Aulana, Bononia, Heraclea, Ruspe, Interamna, Arverni
(*Arvernis*), Gavali, Cneocaesarea, Antinoum, Axus, Odobergia, Parrona, Malbodium, Cinomanni,
Latiniacum, Vapingum, Thmuis, Forum Simpronii, Apollonia, Militana, Brixa, Syrmium, Adrumetum,
Alemannia, Scotia, Mauritania, Castrum Cassinum, Agaunum, Fontenella, Ebredunum, Concordia.

## Scripture checked (7a″)

- **0602A Apoc. 19:10**, *Conservus tuus sum et fratrum tuorum, Deum adora*: Vulgate *conservus
  tuus sum, et fratrum tuorum habentium testimonium Jesu. Deum adora.* An abridged quotation
  (Augustine's), no word changed: no `[var:]`.
- **0602A Act. 14 (Migne's XIV, 14; Clementine 14:13)**, *Conscissis enim vestimentis suis*: a
  paraphrase (Vulg. *conscissis tunicis suis*), not quoted as a quotation: no `[var:]`.
- **0721 Matt. 25:34**, *Venite … benedicti Patris mei*: ✓ Vulgate verbatim.
- 0683 *traditus gratiae Dei a fratribus* (Acts 14:25 / 15:40 idiom) and 0763 *mortem in conspectu
  Domini pretiosam* (Ps. 115:15) are allusions, not quotations: not marked.

## Markers fired

- **`[cj:]` ×1**: 0599C head, *AUGUSTI* (§0). Plate read at n314.
- `[sic:]` 0 · `[var:]` 0 · `[ed:]` 0 · `[d:]` 0.
- **Two `[sic:]` DEFERRED** until their patches land (the twin does not yet carry the plate's form,
  so `verify-english` would reject them now): 0601 *idorum* (P2), 0793 *Serapionis* (P22).

## Text cruces

- **0601 Kal. Jan., *superstitionibus idorum*** (plate, n315) for *idolorum* (our twin). English
  "idols"; deferred `[sic: *idorum*]`, P2. Same line: plate *cnm diceret* for *cum*, a turned letter,
  single witness, English "when he said", no patch, no marker.
- **0613 *compleverumt*** (plate, n321) for *compleverunt*: single letter, single witness; Solier's
  VL on the same page quotes *compleverunt*. English "completed"; nothing marked.
- **0649 *edictus sit*** (plate, n339) for our twin's *eductus sit*: a real word ("proclaimed"), one
  letter, one copy. Solier's VL on the same page argues *Eductus sit legit Beda … eductus est*, i.e.
  the band is meant as *eductus*. English "led out" (the twin). Not patched, not marked: a single
  copy's single letter (brief §9). Orchestrator's call.
- **0657 *Roma via Salaria*** (nominative where the formula has the locative *Romae*): rendered
  "Rome, on the Salarian Way," keeping the missing locative. Column not read at the plate (leaf 343
  not on the candidate list); a case slip of Pattern 9's kind, not marked.
- **0669 *gradio*** (twin) is *gladio* on the plate (n349): English "sword"; P3. Also *confortari,
  post quae* for the twin's dash, P4.
- **0673 *Martha in nympha necata*** — *nympha* (printed) is late Latin for water; Solier on n351
  reports Greven and Molanus *in lympha* and prefers *nympha*. Rendered "put to death in a pool".
- **0687 day head *IX Kal. … Die 23.*** (plate, n358, zoomed) against our twin's *Die 24*. IX Kal.
  Feb. is 24 January, and the X Kal. head before it (n356) is also *Die 23*. Per M1 the English
  prints the Roman date as printed and takes the modern date from *Die n*: "The ninth day before
  the Kalends · 23 January". So two consecutive heads read 23 January; that is Migne's page. P6.
- **0713 *coliiserunt*** (twin) is *colliserunt* on the plate (n371): P5. *qui in eo superat*
  (for *supererat*) is printed so and construes (*superare* "to remain over"): "which still remained".
- **0729 day head** — the plate (n379) prints **H** *Non.*, our twin *Id Non.*; *Die 4* requires II
  (*pridie Nonas*). Rendered "The day before the Nones · 4 February" under Pattern 9 (a section
  label normalizes, the defect stays visible in the facing Latin once P7 lands).
- **0741 Bouillart bracket** — plate *Brouillart* and *Salominis* (P9, P10); followed.
- **0745 Apollonia** — plate *incensuros* (P11) and **no *intra*** in *paululum quid semetipsam
  deliberans* (P12). Rendered "deliberating herself a little something", without the preposition
  the plate lacks. Solier's VL (same page) knows the fuller form *quid ageret, intra semetipsam*.
- **0753 *In Africa. sanctorum*** and **0759 *mancipatus. cum*** — full stops the twin turned into
  commas (P13, P14); carried, including the lower-case word after each.
- **0763 *Civitatem Interamnis*** (accusative, plate-confirmed n396): the formula's ablative is not
  printed. Rendered "The city of Interamna, of Saint Agapis" without a preposition; one letter, one
  copy, not marked.
- **0767 *sanctus Paulus*** — plate (n398) against our *Pauli*; P15.
- **0769** — plate (n399) *Secundiani, Romuli* (P16) and a Bouillart bracket that reads
  *Ipso die, sancti Silvini Tolosanae civitatis episcopi*, not our twin's *In pago Tarvenensi*
  (P17). Followed.
- **0785** — plate (n407) *Polycarpi* (P18), *discipulis* (P19), *ministravit, [* (P20).
- **0791** — plate (n410) *Christi Evangelium, praedicavit* (P21): the comma between object and verb
  is carried ("at Judaea the Gospel of Christ, preached.").
- **0793** — plate (n411) *flammis incensi. Serapionis et Papias gladio caesi sunt* (P22): a genitive
  in a nominative slot; English "Serapion", deferred `[sic: *Serapionis*]`.
- **0799** — plate (n414) *conversa est. Lugduni* (P23).
- **0605 *caesus ad mortem*** then *diu in carcere maceratus* — "beaten to death" and then "long
  wasted in prison": the sequence is the text's, rendered as printed.
- **0641 *cum exsufflasset illud … statim corruit*** — the subject of *corruit* is the idol;
  rendered "it at once fell down", keeping the Latin's unmarked change of subject.
- **0663 *geminorum Speusippi, Elasippi et Melasippi*** — three "twins", as printed.

## Keyed notes seen INSIDE the band (not added; reported per brief §9)

Besides stint A's two prologue notes, Bouillart's raised-letter layer continues through the band,
each with its note set mid-page under the entry, signed BOUILLART unless stated:
n330 (0631, ª before *In Affrica … Revoluti*); n337 (0645, ª before *In monte Verziaco*); n339
(0649, ª after *[Bouillart., episcopi]*); n355 (0681, ª after *[Bouillart. legit. :*); n371 (0713,
*martyris* ª inside the *om.* bracket); n379 (0729, *confessoris* ª, Aventinus); n384 (0739,
*magnifice* ª *innotuerat*); n385 (0741, ª after *[Brouillart. :*); n388 (0747, ª before *Apud
Castrum Cassinum* and ᵇ before *In pago Rothomagensi*: note b, *Haec apud Boullartium ad oram
paginae leguntur manu scripta: Haec non sunt Usuardi…*, is unsigned); n399 (0769, note ª *Scripsit
Sollerio Castellanus istud Tolosanae civitatis episcopi…*, key not located in my crop). ⚑ **This is a
recoverable `[cn: a | …]` layer across the whole work** — at least 11 notes in my 105 leaves, 3 of
the 11 inside Bouillart brackets. Not added, per the brief; flagged for the orchestrator.

## Rejected candidates (OCR list) and why

All 36 of my OCR candidates (chunks 0000–0003) were settled by a band crop on their leaves
(n314 ×3, n315 ×3, n321, n328, n330, n332, n337, n339, n347, n349, n351, n355, n356, n358, n360,
n375 ×3, n379 ×2, n384→n385, n388, n390, n391, n394 ×2, n398, n399, n407, n410, n411, n419).
**33 are TEI right**: OCR noise (*qua*/*quae*, *rom*/*roma*/*Romae*, *eum*/*cum*, *dic*/*die* where
*e* and *c* are indistinct in that band, *eliam*, *colum*, *eximi*, *beat*, *grati*, *reliqui*,
*custodis*, *magna*, *paris*, *corum*, *tanta*, *quadam*, *cappadocis*, *cappadociam*, *martha*)
or misalignment into Solier's commentary (*ammonis* for *Juliani* 0631, *confessoris* for *Kal.*
0681, *natalis* for *sancti* 0691, *udalrici* for *Aventini* 0729, *eorumdem* for *ejus* 0753,
*quas* for *quod* 0739, whose entry is actually on n385, not n384). **3 were real plate
divergences** and became patches: *Pauli* → *Paulus* (0767, P15), *Policarpi* → *Polycarpi* (0785,
P18), *Serapion* → *Serapionis* (0793, P22). The other twenty patches were found by reading the
band around the candidates.
