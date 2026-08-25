# PART I — chunks 0000–0004, cols 1079C–1091D

*Glossa ordinaria*, **Liber Proverbiorum** (PL 113). Translated 2026-08-25, one translator,
**5 chunks, 4,403 Latin words** (frontmatter counts: 1,063 + 411 + 951 + 898 + 1,080).
`verify-english.mjs` reports no failure over this range (the only failures it reports are the
peers' still-missing 0007–0013).

**Apparatus fired: 4 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]` · 37 `[n:]` (exact parity with the Latin twins).** Zero guillemets in either language.
Marker parity, anchor parity, italic-span parity and paragraph parity are 1:1 in all five chunks;
punctuation was compared **band by band** (colons, semicolons, question marks, exclamation marks),
not by total, and **all 51 bands match with zero mismatched bands** after two repairs made by that
test (see §5).

---

## §V · WORK-WIDE VOCABULARY FIXED IN THIS STINT — for the merge

Stated before comparison, so a later merge can reconcile drift against the English files rather
than against this table.

| Latin | English | note |
|---|---|---|
| *doctores* | **teachers**, never "doctors" | 8965/8954 convention, inherited |
| *praedicatores* · *praedicatio* · *praedicare* | preachers · preaching · to preach | held apart from *doctores* |
| *doctrina* | **doctrine** | never "teaching", which would collide with *doctores* |
| *disciplina* | **discipline** | throughout, incl. the lemmata (Pr 1:2, 3:11, 5:23) |
| *sapientia* / *scientia* / *prudentia* | wisdom / **knowledge** / prudence | three words, three renderings, never interchanged |
| *charitas* / *dilectio* | **charity** / **love** | held apart (8965 convention); *charitas* once, 1080C |
| *Ecclesia* / *ecclesia* | **Church** / **church** — mirrors the plate word for word | 9 capitalized, **1 lowercase** (1088A, the Pr 5:14 lemma *In medio ecclesiae*), rendered lowercase |
| *Scriptura* / *Scripturae* (the canon) | Scripture / **the Scriptures** | Pattern 3; 1087A, 1088B, 1091D |
| *illusor* · *illudere* | **mocker** · to mock | one root in English, because the gloss at 1086A defines the noun from the verb |
| *meretrix* | **harlot** | *fornicaria* = fornicatress, held apart (1087D) |
| *haeresis* · *haereticus* | heresy · heretic | |
| *parvuli* | **little ones** | lemma and gloss alike |
| *simplex* / *rectus* | simple / **upright** (of persons), *right* (of ways) | the Job 1:1 pair at 1083C is the control |
| *typice* | **typically** | 8965 convention (1085A) |
| *usque ad* as the abridgment formula | ***as far as***, inside its own italic span | see §4 — decided per occurrence, not by rule |
| `VERS. n.--` | passes through **verbatim, untranslated** | Ruth §1.1 |
| *interpretatur* | "is interpreted" | **does not occur in this range** — recorded so the merge knows it was looked for |
| second person | **thou = singular, you = plural** (Pattern 17) | see §6 |

**Head forms:** `CAPUT PRIMUM.` → **CHAPTER ONE.**; `CAPUT II.` → **CHAPTER II.**, and so on with
the Roman numeral kept. ⚠ This follows **Ruth (8968), the pilot, and 8954**, and the register rule
that heads keep their Roman numeral. **8965 spells its numerals out** (CHAPTER THREE for *CAPUT
III.*) and therefore diverges from the pilot; I did not follow it, and I flag the divergence rather
than quietly siding with one. The head at 1079C, `B. HIERONYMI EPISTOLA ET PROLOGUS DUPLEX DE
LIBRIS SALOMONIS.`, is rendered **THE LETTER OF BLESSED JEROME AND THE DOUBLE PROLOGUE ON THE BOOKS
OF SOLOMON.**

### ⛔ THE JEROME LETTER AND DOUBLE PROLOGUE ARE NOT IN THE TEXT — the head is a stub

My launch brief warned that chunk 0000 opens with continuous epistolary prose in Jerome's own voice
which must not be forced into the gloss register. **It does not.** Under that head Migne prints
**one thing and nothing else**: the cross-reference note `[n: (Vide inter ejus Opera, tom. I , III
et VIII .)]` — "see among his Works, vols. I, III and VIII." He heads the section, refers the reader
to Jerome's own works for the letter and the two prologues, and goes straight on to `CAPUT PRIMUM.`
So there is no epistolary prose in this work at all, and the warning had nothing to bite on. Recorded
because a later reader meeting that head will otherwise look for the letter and think our text has
lost it: **it is not lost, it was never printed here.**

---

## §1 · THE LEMMA COLLATION — every italic span in cols 1079C–1091D, walked

All **340 italic spans** in my five chunks (67 + 44 + 72 + 71 + 86) were walked against
`sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. **The agreements are listed as
well as the divergences**, because a list of findings alone cannot be told from a report by a reader
who never looked.

### 1a · The four divergences that fired a `[var:]`

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| **1079D–1080C** | *Multiplicabitur ejus imperium, et **regni ejus** non erit finis. Super solium David, et super regnum ejus sedebit* `[n: (Luc. I)]` | **Isa. 9:7** *Multiplicabitur ejus imperium, et **pacis** non erit finis ; super solium David, et super regnum ejus sedebit* | A **conflation**: the frame is Isaiah's, one phrase is Luke's (**Luc. 1:33** *et regni ejus non erit finis*), and Migne's own `[n:]` cites Luke. Material — *pacis* and *regni* are different promises, and the gloss is adducing the verse for the kingdom. Rendered as printed; the marker names both witnesses and speculates about neither. |
| **1082A** | *Quae dico vobis in tenebris, dicite **in lucem**.* | **Matt. 10:27** *Quod dico vobis in tenebris, dicite **in lumine*** | *in lucem* (into the light, accusative of motion) for *in lumine* (in the light), plus *Quae* for *Quod*. Rendered "speak ye **into** the light". |
| **1082A** | VERS. 23.-- *Ad **correctionem**.* | **Pr. 1:23** *convertimini ad **correptionem** meam* | ⭐ The sharpest of the four, because **the gloss itself preserves the Clementine's word and the lemma does not**: Migne's exposition reads *Per apostolos Judaeos **corripit*** — the verb of *correptio*, not of *correctio*. The lemma has drifted off the word its own gloss is built on. Rendered "*To correction*", the gloss's *corripit* rendered "rebukes", and the marker carries the Clementine. |
| **1085D** | VERS. 30.-- *Non contendas adversus hominem.* | **Pr. 3:30** ***Ne** contendas adversus hominem **frustra*** | ⭐⭐ Same shape and worse. The lemma **drops *frustra***, and the gloss's whole argument is *frustra*: *quia hoc **frustra** non fit, quod certa necessitas cogit* — "because that which a sure necessity compels is not done in vain." Without *frustra* in the lemma the gloss answers a question the verse no longer asks. Also *Non* for *Ne*, which English cannot distinguish in a prohibition. Rendered as printed; marker carries the Clementine and says what the gloss turns on. |

### 1b · Divergences found, logged, and DECLINED a marker — with the reason

**None of these fires a `[var:]`, because Pattern 14's bar is a divergence that CHANGES THE SENSE**,
and each of these is a form, an orthography, or a syntactic integration. They are listed because a
blind reader will find them and needs to know they were seen.

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 1082A | *Multa turba sacerdotum **obediret** fidei* | Act. 6:7 *multa **etiam** turba sacerdotum **obediebat** fidei* | Migne has drawn the verse into his own *ita ut* result clause, which takes the subjunctive. A syntactic integration, not a textual variant. |
| 1082C | *Videns civitatem flevit super **eam*** | Lc. 19:41 *videns civitatem flevit super **illam*** | *eam*/*illam*, no sense at stake. |
| 1082C | VERS. 29.-- *Exosam **habuerunt**.* | Pr. 1:29 *exosam **habuerint*** | Indicative for subjunctive; the *eo quod* clause is gone with the abridgment. |
| 1082D | *ad **infernum** descendunt* | Job 21:13 *ad **inferna** descendunt* | Singular for neuter plural of the same noun. |
| 1083B | *Ego ex ore Altissimi **prodii*** | Sir. 24:5 *Ego ex ore Altissimi **prodivi*** | Alternate perfect of the same verb. ⚠ But see §2 for the CITATION here, which is a real error. |
| 1084B | *Thesaurizate vobis thesauros in coelo* | Matt. 6:20 *Thesaurizate **autem** vobis…* | A dropped connective in a quotation cut at both ends. |
| 1085D | *Ipsi non introistis, et eos qui **intrabant**, prohibuistis* | Lc. 11:52 *…eos qui **introibant**…* | Simple verb for compound, same sense. |
| 1086A | *terrena **est**, animalis, diabolica* | Jac. 3:15 *sed **terrena, animalis, diabolica*** | Migne supplies the copula his own sentence needs (*ut Jacobus ait:*). |
| 1086B | *Abscondisti haec sapientibus et prudentibus* | Lc. 10:21 *abscondisti haec **a** sapientibus…* | Dative for *a* + ablative; identical sense. |
| 1088D | *laetare cum **ea, cui ab adolescentia*** | Pr. 5:18 *laetare cum **muliere adolescentiae tuae*** | The glossator has re-cased the lemma so that his own relative clause (*conjunctus es*) can hang on it. Adaptation, not variant. |
| 1088D | VERS. 19.-- *Cerva **charissima**.* | Pr. 5:19 *Cerva **carissima*** | *ch-* orthography, corpus-wide. ⭐ And note that **Migne himself flags the real variant here**: *Vel* ***gratissima,*** *ut quidem codices habent* — the Clementine's *gratissimus* attaches to *hinnulus*. His own apparatus is on the page; ours would be redundant. |
| 1089B | VERS. 11.-- *Egestas, et **paupertas**.* | Pr. 6:11 *egestas, et **pauperies*** | Two nouns of the same root and the same meaning. |
| 1089C | VERS. 20.-- *Conserva, **fili**.* | Pr. 6:20 *Conserva, **fili mi*** | A clipped lemma. Rendered "*Keep, O son*", **not** "my son", precisely so the clipping is not conformed away. |
| 1089C | VERS. 29.-- ***Nunquid*** *potest homo abscondere ignem* / 1091A ***Nunquid non*** *sapientia* | Pr. 6:27 / 8:1 ***Numquid*** | *Nunquid*/*Numquid* is the corpus's ordinary orthography. |
| 1090B | *Et ecce **mulier occurrit ornatu illi meretricio*** | Pr. 7:10 *Et ecce **occurrit illi mulier ornatu meretricio*** | Word order only; every word is present and the sense is untouched. |
| 1090C | *Sed venit hora, ut omnis qui interficit vos* | Jo. 16:2 (same words) | ✓ agrees; listed here only because the span is cut mid-verse. |
| 1091A | *Qui diligit me, diligetur a Patre* | Jo. 14:21 *Qui **autem** diligit me, diligetur a Patre **meo*** | Dropped connective and possessive. |
| 1087B | tail: *quia currens non **habebit** offendiculum* | Pr. 4:12 *et currens non **habebis** offendiculum* | Third person for second, inside an abridgment resumption tail where the subject has been generalized. |
| 1087D | VERS. 10.-- *Ne forte **impleantur** extranei* | Pr. 5:10 *ne forte **implentur** extranei* | Subjunctive for the Clementine's own anomalous indicative. |

### 1c · Checked and found to AGREE with the Clementine EXACTLY

Listed by verse, because this half of the collation is what distinguishes a report from a guess.

- **Prov. I** (1079C–1083A): 1:1 *Parabolae Salomonis* · 1:2 *Ad sciendam sapientiam et disciplinam* ·
  1:3 *Ad intelligenda verba prudentiae* · 1:5 *Audiens sapiens, sapientior* (×2) and *Et intelligens* ·
  1:7 *Timor Domini* · 1:8 *Audi, fili mi, disciplinam* · 1:9 *Addatur gratia* and *Et torques collo
  tuo* · 1:10 *Fili mi* · 1:11 *Insidiemur* and *Insontem frustra* · 1:12 *Deglutiamus eum, sicut
  infernus viventem* · 1:13 *Omnem pretiosam substantiam reperiemus* · 1:14 *Sortem mitte nobiscum* ·
  1:16 *Ad malum currunt* · 1:17 *Frustra* · 1:20 *Sapientia*, *foris*, *In plateis dat vocem suam* ·
  1:21 *In capite turbarum clamitat*, *In foribus portarum urbis* · 1:22 *Usquequo* · 1:23
  *Convertimini* · 1:26 *Ego quoque* · 1:27 *Cum irruerit repentina calamitas*, *Quando venerit super
  vos* · 1:28 *Mane consurgent et non invenient me*, *Invocabunt* · 1:31 *Comedent igitur*, *Suisque
  consiliis saturabuntur* · 1:32 *Aversio*, *Parvulorum* · 1:33 *Qui autem me audierit, absque terrore
  requiescet*.
- **Prov. II** (1083A–1084A): 2:1 *Fili mi* · 2:2 *Audiat sapientiam*, *Inclina cor* · 2:3 *Si enim
  sapientiam invocaveris* (×2) · 2:4 *Et sicut thesauros* · 2:5 *Tunc intelliges* · 2:6 *Quia Dominus
  dat*, *Ex ore* · 2:7 *Custodiet* · 2:12 *A via mala* · 2:13 *Qui relinquunt iter* · 2:14 *Qui
  laetantur* · 2:16 *Ut eruaris a muliere* · 2:17 *Et relinquit ducem* · 2:18 *Pacti Dei sui*,
  *Inclinata est enim* · 2:19 *Ad eam non revertentur* · 2:21 *Qui enim* · 2:22 *Impii*.
- **Prov. III** (1084A–1086C): 3:1 *Fili mi, ne* · 3:2 *Pacem* · 3:3 *Misericordia et veritas*,
  *Circumda eas gutturi tuo* · 3:4 *Et invenies gratiam* · 3:5 *Habe fiduciam in Domino* · 3:7 *Ne sis
  sapiens*, *Time Deum et recede a malo* · 3:8 *Sanitas quippe erit* · 3:9 *Honora Dominum de tua
  substantia*, *Et de primitiis omnium* · 3:10 *Implebuntur horrea tua saturitate*, *Torcularia
  redundabunt* · 3:11 *Disciplinam* · 3:12 *Quem enim diligit Dominus corripit* · 3:13 *Beatus homo*,
  *Et qui affluit prudentia* · 3:14 *Melior est*, *Primi et purissimi* · 3:16 *Longitudo dierum in
  dextera ejus et in sinistra* · 3:17 *Viae ejus* · 3:18 *Lignum vitae* · 3:19 *Dominus sapientia*,
  *stabilivit coelos prudentia* · 3:20 *Sapientia illius eruperunt abyssi* · 3:21 *Fili mi, ne
  effluant* · 3:22 *Et erit vita animae tuae*, *Et gratia faucibus tuis* · 3:23 *Tunc ambulabis
  fiducialiter*, *Et pes tuus non impinget* · 3:24 *Si dormieris, non timebis, quiesces, et suavis* ·
  3:27 *Noli prohibere benefacere eum qui*, *Noli*, *prohibere* · 3:28 *Ne dicas amico tuo…* · 3:32
  *Quia abominatio Domini est omnis illusor*, *illusor*, *Et cum simplicibus sermocinatio ejus* ·
  3:33 *In domo impii* · 3:34 *Illusores*.
- **Prov. IV–V** (1086C–1089A): 4:1 *Audite, filii* · 4:3 *Nam et ego*, *Unigenitus coram matre* ·
  4:4 *Suscipiat* · 4:5 *Posside* · 4:9 *Dabit capiti* · 4:10 *Audi, fili mi* · 4:11 *Per semitas
  aequitatis* · 4:12 *Et currens* · 4:17 *Comedunt panem impietatis* · 4:18 *Justorum autem semita* ·
  4:19 *Via impiorum* · 4:20 *Fili mi, ausculta sermones meos* · 4:23 *Omni custodia serva cor tuum* ·
  4:24 *Remove a te* · 4:25 *Et palpebrae* · 4:26 *Stabilientur* · 4:27 *Ne declines*, *Averte pedem
  tuum* · 5:1 *Fili mi, attende*, *Inclina aurem* · 5:2 *Labia tua* · 5:3 *Favus enim*, *Labia
  meretricis*, *Oleo guttur* · 5:4 *Novissima autem*, *biceps* · 5:6 *Vagi* · 5:8 *Longe fac* ·
  5:9 *Ne des* · 5:11 *Et gemas* · 5:12 *Cur detestatus* · 5:14 *In medio ecclesiae* · 5:15 *Bibe
  aquam* · 5:16 *Deriventur* · 5:17 *Habeto*, *Nec sint alieni*, *Solus* · 5:18 *Sit vena* ·
  5:21 *Respicit Dominus* · 5:22 *Iniquitates* · 5:23 *Ipse morietur*.
- **Prov. VI–VIII** (1089A–1091D): 6:1 *Fili mi* · 6:3 *Suscita* · 6:4 *Ne dederis* · 6:5 *Eruere* ·
  6:6 *Vade ad formicam* · 6:9 *Usquequo, piger, dormies, quando* · 6:11 *veniet tibi quasi viator*,
  *Si vero impiger* · 6:12 *Homo apostata* · 6:16 *Sex sunt*, *Detestatur anima* · 6:17 *Oculos* ·
  6:21 *Liga ea in corde* · 6:22 *Cum ambulaveris*, *Cum dormieris* · 6:25 *Non concupiscat* ·
  6:26 *Pretium enim scorti* · 6:30 *Non grandis est culpa* · 6:34 *Quia zelus et furor viri non* ·
  7:1 *Fili mi* · 7:2 *Et legem meam* · 7:4 *Dic sapientiae, soror* · 7:6 *De fenestra* · 7:8 *Juxta
  angulum*, *prope viam domus illius graditur* · 7:9 *In obscuro advesperascente* · 7:11 *Nec valens
  in domo* · 7:13 *Apprehensumque deosculatur juvenem*, *Et procaci vultu blanditur, dicens* ·
  7:16 *Intexui funibus lectulum* · 7:17 *Aspersi cubile meum* · 7:18 *Veni, inebriemur uberibus* ·
  7:20 *Sacculum pecuniae secum tulit* · 7:26 *Et fortissimi quique interfecti sunt ab ea* ·
  7:27 *Viae inferi domus ejus, penetrantes*, *Interiora mortis* · 8:2 *In summis* · 8:4 *O viri, ad
  vos* · 8:5 *Intelligite, parvuli* · 8:7 *Labia mea* · 8:13 *Arrogantiam* · 8:14 *Meum est
  consilium* · 8:15 *Per me reges* · 8:17 *Ego diligentes*, *Mane*, *vigilant* · 8:18 *Mecum sunt
  divitiae* · 8:22 *Dominus possedit me* · 8:31 *Ludens in orbe* · 8:34 *Ad fores*.
- **Non-Proverbs quotations checked verbatim and agreeing:** Jo. 16:25 *Haec in proverbiis locutus sum
  vobis* (1079C) · Ps. 118:113 *Iniquos odio habui, et legem tuam dilexi* (1082C) · Is. 1:20 *Os
  Domini locutum est* (1083B) · Job 1:1 *simplex et rectus* (1083C) · Pr. 1:11 *Veni nobiscum,
  insidiemur sanguini* (1083C) · Lc. 22:30 *Ut edatis* (1084D) · Apc. 3:19 *Ego quos amo, arguo et
  castigo* (1084D) · Ps. 33:9 *beatus vir qui sperat in eo* (1085B) · Rom. 8:28 *diligentibus Deum
  omnia cooperantur in bonum* (1085C) · Jo. 15:14 *Vos amici mei estis, si feceritis* (1085D) ·
  Jac. 4:6 *Deus superbis resistit, humilibus autem dat gratiam* (1086C) · 1 Cor. 15:58 *Stabiles
  estote et immobiles, abundantes in opere Domini semper* (1087C) · Ps. 138:12 *et nox sicut dies
  illuminabitur* (1088D) · Is. 1:14 *Solemnitates vestras odivit anima mea* (1089C) · 2 Cor. 2:15
  *Christi bonus odor sumus Deo* (1090D) · Mt. 16:18 *Portae inferi non praevalebunt adversus eam*
  (1091A) · Jo. 15:5 *Sine me nihil potestis facere* (1091C) · Eph. 1:3 *Qui benedixit nos in omni
  benedictione spirituali in coelestibus in Christo* (1086B).

---

## §2 · FOUR MISPRINTED CITATIONS — every one identified from the QUOTED WORDS, never the numeral

All four are inside `[n:]` notes, which pass through verbatim; the text keeps exactly what Migne
prints and only the **index** should be corrected, through `data/citation-corrections.json`. **None
was read at the plate**, so each is a candidate and not a claim — but each was identified the settled
way, from the words rather than from the number.

| col | Migne prints | the words are | note |
|---|---|---|---|
| **1079C** | *(Joan. VI)* | **Jo. 16:25** *Haec in proverbiis locutus sum vobis* | verbatim John 16:25. |
| **1083B** | *(Isai. LVIII)* | **Sir. 24:5** *Ego ex ore Altissimi prodii, primogenita ante omnem creaturam* | ⭐ Not a wrong chapter but a **wrong book** — Ecclesiasticus cited as Isaiah, and Isaiah has no 58th verse of the kind. Same class as 8954's *I Cor.* for *III Reg.* at 0592D. |
| **1086B** | *(Matth. XV)* | **Eph. 1:3** + **Matt. 25:34** | The run is a composite: the first clause is Ephesians 1:3 verbatim, the closing *Venite, benedicti* is Matt. 25:34, and the joining words (*qui in remuneratione audient*) are the glossator's own. The numeral is short by ten whichever half it points at. |
| **1085D / 1087D** | *(Matth. XVIII)* @1085D; *(Luc. XII)* @1087D | **Lc. 17:3** *Si peccaverit in te frater tuus, increpa illum*; **Mt. 10:28** *sed potius timete eum, qui potest et animam et corpus perdere in gehennam* | ⭐ The pair is worth seeing together: **the two evangelists have been exchanged.** Mt. 18:15 reads *vade, et corripe eum*, not *increpa illum*; Lc. 12:5 reads *timete eum qui… habet potestatem mittere in gehennam*, not *animam et corpus perdere*. Neither numeral is defensible against its own words, and each points at the other's gospel. |

⚠ **No `Ibid.` in this range depends on any of the four**, so correcting them upstream cannot poison
an anaphora chain (runbook false positive 2 checked, not assumed).

---

## §3 · THREE VERSE NUMBERS THAT DO NOT MATCH THE VERSE GLOSSED — reproduced, never renumbered

| col | Migne | the lemma is actually | |
|---|---|---|---|
| **1080C** | `VERS. 2.-- *Ad intelligenda verba prudentiae.*` | **Pr. 1:3** | consistent with his treating 1:1–2 as one verse: the gloss on VERS. 1 quotes *Ad sciendam sapientiam et disciplinam* (= 1:2) as part of the *titulus*. |
| **1089C** | `VERS. 28.-- *Pretium enim scorti.*` | **Pr. 6:26** | +2 |
| **1089C** | `VERS. 29.-- *Nunquid potest homo abscondere ignem.*` | **Pr. 6:27** | +2 |

⭐ **The 6:26/6:27 pair is the interesting one, because the offset does not persist**: the very next
address, `VERS. 30.-- *Non grandis est culpa*`, is **Pr. 6:30 exactly**, and `VERS. 34.-- *Quia zelus
et furor viri non*` is **Pr. 6:34 exactly**. So this is not a chapter numbered on a different system;
it is two addresses out of register inside an otherwise correct sequence. **All three are Migne's and
all three are reproduced as printed.**

---

## §4 · `usque ad` — CENSUSED PER OCCURRENCE, NOT BY RULE

**98 occurrences of `usque ad` in the body of my five chunks, and every one of them is the
abridgment formula** — 91 bare `*usque ad*`, and **7 that carry their resumption tail inside the same
italic span**: `*usque ad: in platea vocem ejus.*` (1082A) · `*usque ad et bene tibi erit.*` (1082D) ·
`*usque ad: et ipsi sunt jacula.*` (1083D) · `*usque ad: beatus vir qui sperat in eo.*` (1085B) ·
`*usque ad,*` (1088D, the comma inside the italics) · `*usque ad: et nox sicut dies illuminabitur.*`
(1088D) · `*usque ad: gradiantur tecum mandata Dei, ut te instruant.*` (1089C). All render
***as far as***, inside the italic span, with **no verb ever supplied** to complete the formula
(8970 convention), and the seven tails were parsed as strictly as ordinary prose.

**Six look-alikes, decided per occurrence from what stands on either side:**

- **1080C** `VERS. 22.-- *Usquequo. Jam*` — Pr. 1:22's own word, "how long".
- **1089B** `VERS. 9.-- *Usquequo, piger, dormies, quando.*` and, in the gloss, *Usquequo, piger,
  dormies in vitiis* — Pr. 6:9's own word, twice.
- **1081D** *Hucusque persecutiones, quas Christo Judaei intulere* and **1091C** *Hucusque locutus est
  parabolice ad Filium* — "thus far", the glossator's own transition adverb, not a formula.
- **1088C** *juxta uniuscujusque qualitatem* — the letters inside another word.

⚠ **The trap the brief warned of did not fire in this range**: no lemma in cols 1079C–1091D has
*usque ad* among the verse's own words, so the formula never had a chance to swallow one. Recorded
as a checked negative, since 8954's first stint met that trap 14 times in its 94.

⚑ One placement worth naming: at **1087B** the column anchor falls **between the `etc.,` and the
formula** (`Dicit de his, etc., [1087B] *usque ad* quia currens…`), which is the one place a careless
reading would attach the formula to the wrong sentence. The English anchor sits in the same place.

---

## §5 · THE NEGATION CENSUS — every printed negative, with the WORD it attaches to

Proverbs is aphorism, so a lost negative leaves a maxim that reads perfectly and says the opposite.
**Every negative in all five chunks was walked and its host named**; the list below gives the ones
where the host was not the obvious verb, or where a correlative or quantifier stood nearby (the 2a
trigger population). **100 negative tokens** stand in the five chunks (43 *non* · 23 *ne* · 9 *nec* · 7 *nihil* · 4
*nunquam* · 4 *nullus/nulla/nullum/nullo* · 2 *noli* · one each of *nisi*, *nil*, *neque*, *nemo*,
*neminem*, *nequeunt*, *nequeat*, *noluerunt*). The ~88 not tabulated below rest on their own finite
verb with no correlative or quantifier in reach, and were checked one at a time.

**The 2a trigger population, host proved from the sentence's own structure:**

| col | Latin | host | proof |
|---|---|---|---|
| 1079C | *Proverbiorum liber, **non** ut simplices arbitrantur, patentia habet praecepta, **sed** quasi in terra aurum…* | ***patentia habet praecepta*** | the `sed` answers it with the hiddenness images; the *ut simplices arbitrantur* is a parenthesis the negative reaches over. |
| 1080C | *Id est, **non solum** sapientiam… **sed etiam** verba prudentiae* | ***solum*** | textbook `non solum … sed etiam`; the verbs (*amplectantur*, *auscultent*) are both affirmative. |
| 1081D | ***Non solum** quod facturi, **sed** quod pro factis passuri* | ***solum*** | both members verbless; the negative cannot be on a verb that is not printed. |
| 1084C | ***Non solum** de substantia pecuniae* … *usque ad* ***non** sibi, **sed** ei tribuit* | ***solum***; then ***sibi*** | the second is the model case: `non … sed` across two **datives**, so the English must read "not to himself, but to him", never "does not attribute". |
| 1084D | ***Non** metuat de correctione inopiae, **quisquis** opes acquisivit sapientiae* | ***metuat*** | *quisquis* is the subject of the second clause, not a quantifier the negative can reach; the `enim` clause gives the reason for not fearing. |
| 1088D | ***Non** uxorio amori insistere docet; **sed ne** prima vivente aliam ducas* | ***docet*** | ⭐ the one real risk in this range. The rival host is *uxorio amori* ("teaches to persist not in wifely love"). The `sed` clause decides it: what he **does** teach is stated there (*ne… ducas, vel… socieris*), which is only an answer if the first member denied the teaching itself. |
| 1089A | ***Non tantum** ipse bene vivendo vigilare memento, **sed** illum… suscita* | ***tantum*** | the `sed` supplies the second duty; *memento* is affirmative in both members. |
| 1089C | *Soli ei conceditur… qui… ut… **nequeat** ab ea separari* | ***separari*** | *soli* is affirmative here (it is the concession's own limit), and *nequeat* has its own infinitive. |
| 1091B | *plenitudinem virtutum **sola** Dei sapientia possidet* | **no negative** | recorded because *sola* sits four words from the preceding *Non se extollat*: that `Non` is on ***extollat*** in its own clause and does **not** reach across the colon. |
| 1088B | *quia **nec** veterum patrum **nec** novorum dictis et exemplis potuerunt… revocari* | ***veterum patrum*** / ***novorum*** | the two `nec` are on the two ablative phrases, not on *potuerunt*: "neither by the sayings of the ancient fathers nor by those of the new", never "could not be recalled". |

**Contradictions carried, not repaired:** none arose in this range — no printed negative in cols
1079C–1091D makes its own sentence contradict its neighbour, and I looked for the 0639C shape
(a negative Migne supplies that the received text lacks) at every scripture quotation in §1c. **That
is a checked zero, and it is recorded as one**: the one place a supplied negative could hide,
1082C's *Mane consurgent et **non** invenient me*, is Pr. 1:28's own *non*, printed by the
Clementine too.

**Two repairs the band-by-band punctuation test made, both mine:** at **1079C** I had rendered
Migne's colon before *ita in eis* as a semicolon and moved a comma; at **1082A** I had rendered his
comma before *unde* as a semicolon. Both restored. **Totals would have cancelled the first pair
exactly** (one colon lost, one semicolon gained), which is the failure the band test exists for.

---

## §6 · PATTERN 17 — thou/you, with the Latin that fixes the number

The book addresses one hearer (*fili mi*) and takes **thou** throughout. **One passage is plural and
takes "you", and it is plural in Migne's own morphology:**

- **1082A, VERS. 22** — *Christum in carne **vidistis**… quem **sprevistis**… **diligite**… quod
  **peccastis*** — four second-person **plurals**, addressed to the persecuting Jews, inside a
  paragraph whose neighbours are all singular. Rendered "you have seen… you have despised… love…
  you have sinned".
- **1082C, VERS. 27** — the lemma *Quando venerit super **vos***, plural, likewise.
- Everything else — *serva cor tuum*, *ne dederis*, *bibe aquam*, *keep thou thyself*, *thou art
  joined* — is singular and takes **thou**.

---

## §7 · PLATE CANDIDATES — raised, none patched, none marked

**No `[sic:]` and no `[cj:]` was fired in this range, so these five chunks assert nothing whatever
about Migne's plate** (ship test B). Each item below is a crux and a request, not a claim.

### 7a · *palma* for *plasma* @ 1084C — a REAL WORD, so rendered as printed

`VERS. 9.-- *Honora Dominum de tua substantia.* Ut scilicet homines, **qui ejus palma sunt**, qui ad
ejus imaginem facti sunt recreentur.`

*palma* is a perfectly good Latin word, and the sentence with it in reads "men, **who are his palm**".
The word the argument wants is ***plasma*** — "who are his moulding, his handiwork" — which pairs
exactly with the following *qui ad ejus imaginem facti sunt*, is the standard word for the creature
in this register, and differs from *palma* by two letters.

⛔ **No marker.** The addendum's rule is measured and unambiguous: **a real, well-formed word that
reads oddly is Migne's until a plate says otherwise — refuted 5 of 5.** The English therefore reads
"who are his palm", the conjecture lives here, and a plate read at PL 113 col. 1084 band C would
settle it in one request. **Nor does it reach Pattern 18's bar**, which is narrow: *palma* does not
make the sentence assert something the author is arguing against; it makes it fail to construe, and
18a declines exactly that class.

### 7b · *paraemias* @ 1079C — the only near-non-word in the range

`Graece παροιμιας *paraemias,* id est, proverbia dicit`

The standard Latin transliteration of παροιμίας is ***paroemias***; *paraemias* has *ae* for *oe*.
It sits **in italics beside the Greek it transliterates**, which is where a compositor is most likely
to err and least likely to be corrected — but it is a legible form of a real word, not a hole, so it
is rendered as printed (carried in italics, untranslated, as a mentioned Greek word), with **no
`[sic:]`**. ⚠ It is also exactly the shape of brief §4's **normalization class running the other
way**, and I cannot tell from the file whether the *ae* is Migne's or ours.

### 7c · *clàmitat* @ 1082A — a grave accent on a finite verb

`VERS. 21.-- *In capite turbarum **clàmitat**,* etc.`

Migne prints the word with a grave accent. The Clementine has *clamitat*, and at 1091A the same
verb's cognate is printed unaccented. An accent on *à* is ordinary in this corpus **as a
disambiguator on the preposition**; on a third-person verb it is not. **English has no exponent for
a Latin accent** (the Pattern 9 family), so the English reads "crieth out" with nothing marked, and
this is logged so a later reader does not take the accent for our own.

### 7d · The clipped left margin — where it would show in this range, and it does NOT

Our archive.org copy of PL 113 clips the left margin on some pages, and 8965 found its split runs
sitting at left-column heads because of it. **I looked for that shape here and found none**: there is
no split run, no doubled syllable, and no truncated word anywhere in cols 1079C–1091D. ⭐ **Recorded
as a checked negative**, because the same photograph produced positives two books away and a reader
comparing the two needs to know this range was examined and came back clean.

### 7e · A misplaced semicolon @ 1086A — carried, unreadable, and logged

`Illusor est et ille, qui promissa ejus, quasi prava, despicit, ac iram districtionis, quasi
tolerabilem**;** spernit.`

The semicolon falls **between the object and its verb**. Pattern 8 is explicit that a printed mark
rides even where it makes the English unreadable, and that the crux, not the text, adjudicates — so
the English reads "…and the anger of his strictness, as though tolerable; he spurns." The supplied
"he" is the only addition; *spernit*'s subject (*ille*) is four clauses back. ⚠ I cannot tell whether
the semicolon is Migne's or our digitization's, and **that is precisely why nothing was moved**.

---

## §8 · THE UNEXPRESSED SUBJECT — every pronoun I supplied that the Latin does not print

Named individually, because 12 of 25 sites in 11613's blind read were this class and both readings
usually construe.

| col | supplied | who, and what fixes it |
|---|---|---|
| 1079D | "[he signifies]" in *Sicut templi constructione… aedificationem Ecclesiae* | **Solomon**, subject of *significat* two clauses earlier; the clause has no verb at all and the bracket says so. |
| 1082A | "**he** plainly repeated" (*manifeste replicabat*) | **Christ.** The paragraph's own apposition decides it: *Sapientia,* ***id est Christus,*** *loquitur foris*. ⚠ The lemma immediately before keeps **"she"** (*dat vocem **suam***), because *sapientia* is the grammatical subject there; the shift from "she" in the lemma to "he" in the gloss is Migne's own and is not smoothed. |
| 1082A | "**he** called back his own grace" (*gratiam suam revocabat*) | Christ, same referent, same paragraph chain. |
| 1082A | "exhorts **them** to be converted" (*hortatur converti*) | the persecuting Jews of VERS. 20–22, who are the addressees throughout this stretch. |
| 1084B | "**he** may lose the piety" (*amittat*), 1084D | the *qui in prosperis serviunt Domino* of the same sentence, generalized to the singular by the abridgment. |
| 1087D | "he keeps **him** from the wickedness" (*prohibet*) | ***auditorem***, printed in the preceding clause (*castigaverat auditorem*). |
| 1090A | "or **he** presumes to corrupt" (*praesumit*) | ⚠ **Unresolved, and flagged rather than chosen.** The subject sits inside the text the *usque ad* removed; from *sive… quamque fidelem* the referent is some corrupter set against the *Dominus* of the sentence's first half, but nothing on the page names him. A bare "he" is the least the English can do. |
| 1084A (0001) | "they come to **that which** reigns with Christ" (*quae… regnat*) | ⚠ **Also unresolved.** The antecedent is feminine singular and stands inside the elided text; the Church is the obvious candidate and is **not** asserted. Rendered with a neutral "that which" so the English claims no more than the page does. |

---

## §9 · THE FOURTH TEST — read back for what the English ASSERTS

Run last, with counts already clean, on every paragraph. Three passages were re-read and changed;
the rest stand.

1. **1082A** *Ad correctionem* — first drafted with the gloss's *corripit* rendered "corrects", which
   made the lemma and the gloss agree and hid the divergence §1a records. Restored to "rebukes",
   which is what *corripit* says, and the `[var:]` now has something to be read against.
2. **1085D** *Non contendas adversus hominem* — first drafted with "in vain" attached to the wrong
   clause ("this is not done in vain, which a sure necessity compels" reordered so that *frustra*
   floated onto *cogit*). Repaired: the *frustra* is on *fit*, and it must be, or the marker in
   §1a is arguing against our own sentence.
3. **1091D** *ne quis eum cum creaturis et temporibus esse prohiberet* — the smooth reading ("lest
   anyone should deny that he began with the creatures") is the one the argument seems to want and
   **is not what the words say**. Rendered literally, "lest anyone should forbid him to be with the
   creatures and the times", and left rough. ⚠ A sentence that reads smoothly where the Latin is
   rough is a suspect, not a success; this one is logged rather than fixed.

**Sections read clean under this test and needing nothing:** the whole of CAPUT II (1083A–1084A),
CAPUT IV (1086C–1087C), and CAPUT VII (1090A–1091A).

---

## §10 · DECLINED, WITH THE REASON

- **`[cj:]` at 1084C (*palma*)** — declined: real word, no false assertion, and 18a's bar was not
  reopened. See §7a.
- **`[sic:]` anywhere** — declined throughout: there is no non-word, no split run and no doubled run
  in this range. A `[sic:]` is a public claim and seven false ones were withdrawn from an earlier
  batch.
- **A `[var:]` on any of the nineteen divergences in §1b** — declined individually, each with its
  reason in the table. The bar is a divergence that changes the sense; orthography, verb form and
  syntactic integration do not.
- **A `[var:]` on the four misprinted citations in §2** — declined: the **words** agree with their
  true sources, so there is no textual variant to record. The defect is in the numeral, which is
  `[n:]` matter and belongs in `data/citation-corrections.json`, not in the English.
- **Any tei-patch** — declined: nothing in this range fails to construe from a transcription defect.
- **Renumbering the three verse addresses in §3** — declined absolutely; they are Migne's.
- **`[cn:]`** — none, and none was expected: the plate spot check for this work is a checked zero.
