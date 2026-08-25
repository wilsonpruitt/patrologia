# PART II — chunks 0005–0009, cols 1092A–1107B

*Glossa ordinaria*, **Liber Proverbiorum** (PL 113), CAPUT IX–XXIII. Translated 2026-08-25,
one translator, **5 chunks, 5,713 Latin words** (frontmatter counts: 1,139 + 1,049 + 1,189 +
1,156 + 1,133; body counts 1,146 + 1,058 + 1,200 + 1,167 + 1,142). `verify-english.mjs` reports
no failure over this range — at the time of filing the only failures it reports are the peer's
still-missing 0010–0013. EN/LA ratio **1.56** with `[var:]` content stripped.

**Apparatus fired: 19 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]` · 20 `[n:]`** (5 + 3 + 5 + 1 + 6, exact parity with the Latin twins, contents verbatim
and untranslated, Migne's own internal spacing kept — `[n: (HIER., de morte Fabiolae. )]` and
`[n: (Matth. X.)]`). Zero guillemets in either language. **The plate spot check for this work is a
checked zero**: Migne prints no numbered *Forte* apparatus here, there is no `[cn:]` in the Latin
and none in the English.

**Parity, measured not assumed:** column anchors 12 + 12 + 13 + 13 + 12 = **62, verbatim and in
order**, and each was checked against the WORD it stands beside in the Latin, not merely for
presence (test 2b). Italic spans **410 in the Latin, 410 in the English** once `[var:]` contents
are stripped (87 · 85 · 80 · 75 · 83). `VERS. n.--` addresses pass through verbatim, untranslated.
Paragraph structure 1:1. Punctuation was compared **band by band** (colons, semicolons, question
marks, exclamation marks) across all 62 bands — see §5, which is where this stint's real repairs
came from.

---

## §V · VOCABULARY — INHERITED FROM `cruces-0000.md`, NOT RE-DERIVED

`src/english/8966/cruces-0000.md` was on disk before I filed, and I read it and followed its table
rather than inventing my own. **Where it decided a word, I used its word.** The places where that
changed what I had first written are named, because a merge needs to know a convention was obeyed
on purpose and not by luck:

| Latin | English | how this stint used it |
|---|---|---|
| *doctores* | **teachers**, never "doctors" | 1098A *Ecclesiae doctores* → "the teachers of the Church"; 1102C *perfecti doctoris* → "a perfect teacher"; 1100C *sanctis doctoribus* → "the holy teachers"; 1106A *statuere doctores* → "the teachers established" |
| *praedicatores* · *praedicatio* | preachers · preaching | held apart from *doctores* throughout (1092A, 1099D, 1100C, 1103D) |
| *doctrina* | **doctrine**, never "teaching" | ⭐ **two renderings were changed to obey this**: 1102C *Doctrina viri* had been "the learning of a man" → **"the doctrine of a man"**, and *Doctrina ecclesiastica* had been "ecclesiastical teaching" → **"ecclesiastical doctrine"**. *dogma* is held apart and rendered "teaching(s)" (1095A *pravi dogmatis*, 1095C *nova dogmata*), which is what makes the *doctrina* rule visible rather than ambiguous. |
| *disciplina* | **discipline** | ⭐ **one rendering was changed**: the expanded lemma at 1098A had been "the instruction of his father" → **"the discipline of his father"**. Also 1093D/1094A *ignorantiam disciplinae*, 1103A *per disciplinam ligari*, 1105A *ecclesiastica disciplina* |
| *sapientia* / *scientia* / *prudentia* | wisdom / **knowledge** / prudence | never interchanged. 1093B *Abscondunt scientiam* → "They hide knowledge"; 1100B *sine scientia praedicandi* → "without the knowledge of preaching"; 1093B *Prudentia a providendo* → "Prudence … from providing" |
| *charitas* / *dilectio* | **charity** / **love** | held apart. *charitas*: 1095B (faith, hope, charity), 1098B, 1100B, 1101C. *dilectio*: 1092B, 1093B, 1101A |
| *Ecclesia* / *ecclesia* | **Church** / church — **mirrors the plate word for word** | **every occurrence in this range is capitalized in Migne** (1092A *Ecclesiae* ×2 and *Ecclesias*, 1092C *Ecclesiam*, 1098A/1099D/1101A *Ecclesiae*, 1102C *Ecclesiae*), and every one is "Church"/"Churches" in the English. There is **no lowercase *ecclesia*** in these five chunks; the adjective *ecclesiastica* (1102C, 1105A) is "ecclesiastical" |
| *Scriptura* / *Scripturae* | Scripture / the Scriptures | Pattern 3; 1093B, 1096C, 1097B, 1098A, 1101B, 1102C, 1106C, 1106D |
| *usque ad* as abridgment | ***as far as***, inside its own italic span | **decided per occurrence, never by rule** — see §2 |
| `VERS. n.--` | verbatim, untranslated | Ruth §1.1 |
| *interpretatur* | "is interpreted" | ⚠ **the etymology formula does not occur in this range.** The one occurrence of the verb (1106B, *quae non intelligit in Scripturis, ut libet interpretatur*) is the ordinary transitive verb, "interprets as he pleases", and is not the name-etymology formula the convention governs. Recorded so the merge knows it was looked for. |
| second person | **thou = singular, you = plural** | §4b |

**Head forms:** `CAPUT IX.` → **CHAPTER IX.**, and so on with the Roman numeral kept — Ruth's
shipped form, 8954's, and the form chunk 0000 chose for this book. My heads are CHAPTER IX, X, XI,
XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII. (8965 spells its numerals out and
therefore diverges from the pilot; chunk 0000 flagged that and did not follow it, and neither did I.)

**Words this stint had to fix that chunk 0000's table does not reach**, stated here so the merge can
reconcile them against the peers' English rather than against this table:

- ***derisor* → scorner** (1097A ×2, 1105C), held apart from ***illusor* → mocker**, which chunk 0000
  fixed and which **does not occur in my range**. Also ***illudere*** does not occur here.
- ***dissimulare* → to dissemble** (1095B *Qui autem dissimulat*, 1103A *ligari dissimulat*) and
  ***simulator* → the dissembler** (1094A) — both from the same idea, and Migne uses them of
  different people, so they are kept in one English family. ***versipellis* → the turncoat**
  (1097C), deliberately **not** "the dissembler", because Migne glosses it of the devil who changes
  his skin and the two words stand nine lines apart.
- ***fatuus* → the fool · *stultus* → the fool · *insipiens* → the unwise · *imprudentia* →
  imprudence.** ⚠ *fatuus* and *stultus* both come out "fool" because English has one word where the
  Latin has two, and **1097B prints them in the same sentence** (*Fatuitas stultorum* → "The folly of
  fools"). Flagged rather than solved: inventing a second English word here would be our
  distinction, not his.
- ***pascha*** does not occur; ***typice*** does not occur; ***meretrix* → harlot** (1107A);
  ***parvuli* → little ones** (1092B).
- **Proper names, form for form as Migne prints them:** *Porphyrius* → Porphyry · *Julianus* →
  Julian · *Caiphas* → Caiphas · *Sareptanam* → of Sarepta · *Origenes* → Origen · *Pelagianus* →
  the Pelagian · *Leonidis* → Leonides · *Alexandrum magnum* → Alexander the Great · *Herodes* →
  Herod · *Joannem* → John · *Judaea* → Judea · *Anna* → Anna · *Judae* → Judas. None normalized
  toward a familiar English Bible spelling.

---

## §1 · THE LEMMA COLLATION — every italic span in 1092A–1107B, walked

All **410 italic spans** in my five chunks were walked, in order, against
`sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. **The agreements are listed as
well as the divergences** (§1c), because a list of findings alone cannot be told apart from a report
by a reader who never looked. Of the 410, **118 are the *usque ad* abridgment span** (§2), which is
not a scripture lemma at all, leaving 292 real spans.

### 1a · The nineteen divergences that fired a `[var:]`

Each names the book, chapter and verse explicitly, which is 8965's form and the house form.

| chunk · col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0005 · 1093A | *mors et vita in **manibus** linguae* `[n: (Isa. LXVI)]` | **Prov. 18:21** *Mors et vita in **manu** linguae* | Plural for singular, **and the words are Proverbs, not Isaias** — the note's book is wrong and the note passes through verbatim, so the `[var:]` is the only place a reader learns it. (Migne is quoting his own book two chapters ahead of where he stands.) |
| 0005 · 1093A | *nihil enim **occultum** quod non **reveletur*** `[n: (Matth. X)]` | **Matt. 10:26** *Nihil enim est **opertum**, quod non **revelabitur*** | Two words changed. ⭐ And the form Migne prints is **Luke's** (Lc. 12:2 *Nihil autem opertum est, quod non reveletur*) crossed with Matthew's *occultum*; his own note cites Matthew. The marker states the Vulgate Matthew and speculates about neither. |
| 0005 · 1093B | VERS. 18.-- *Abscondunt **scientiam**,* etc. | **Prov. 10:18** *Abscondunt **odium labia mendacia*** | ⭐⭐ The sharpest in the range. The lemma standing under VERS. 18 is **the wording of Prov. 10:14** (*Sapientes abscondunt scientiam*) — which Migne himself has quoted five lines above as the resumption of VERS. 13. The gloss beneath it expounds **10:18 and nothing else** (*odium neque in abscondito cordis conteges, neque per oris contumeliam proferas*): hatred, the hiding, and the reviling of the mouth. So the gloss rests on a verse the lemma no longer prints. Rendered as printed; the marker carries both verses. |
| 0005 · 1093B | *A nobis **exierunt**, sed ex nobis non erant* `[n: (I Joan. II)]` | **1 Joan. 2:19** *Ex nobis **prodierunt**, sed non erant ex nobis* | Different verb and reordered preposition-phrases. The sense survives; the wording does not, and the gloss is adducing the verse as a proof-text about heretics. |
| 0005 · 1093D | VERS. 29.-- *Fortitudo simplicis via **ejus**, et pavor.* | **Prov. 10:29** *Fortitudo simplicis via **Domini**, et pavor **his qui operantur malum*** | *ejus* for *Domini* changes whose way it is — the simple man's, not the Lord's. Material, and the gloss (*Si obscura Scripturarum … operari contemnunt*) is about men's ways of reading. |
| 0006 · 1095B | *sicut Dominus ait: **Percutiunt** **pueros** et ancillas,* … *Moram facit Dominus meus venire.* | **Luc. 12:45** *Moram facit dominus meus venire: et coeperit **percutere servos**, et ancillas* | *pueros* for *servos*, indicative *Percutiunt* for the infinitive of the Lucan construction, **and the two halves are printed in the reverse order from Luke's** — Migne strikes first and speaks after. The marker names all three. |
| 0006 · 1095C | VERS. 23.-- *Homo **versutus**.* | **Prov. 12:23** *Homo **versatus** celat scientiam* | *versutus* is "crafty", *versatus* "practised" — and Migne's own gloss on it reads *Sapiens et prudens*, which is the sense of *versatus*. The lemma has drifted off the word its own gloss glosses. Rendered "*A crafty man*". |
| 0006 · 1096B | *ipse est enim **lignum vitae amplectentibus se.*** | **Prov. 3:18** *Lignum vitae **est his qui apprehenderint eam***; and Prov. 13:12, the verse under gloss, reads *lignum vitae **desiderium veniens*** | The phrase is in neither verse in this form, and it is applied to Christ (*ipse est enim*). Both readings are named. |
| 0007 · 1098A | VERS. 10.-- *Doctrina mala. Qui solverit … minimus **est** in regno coelorum.* | **Matt. 5:19** *Qui **ergo** solverit … minimus **vocabitur** in regno caelorum* | *est* for *vocabitur* — "is the least" for "shall be called the least" — inside a Matthew quotation that Migne prints **inside the same italic span as the Proverbs lemma**, with no note. The span's structure is reproduced exactly. |
| 0007 · 1098C | *Descendunt in infernum viventes* `[n: (Psal. LIV)]` | **Psal. 54:16** *et **descendant** in infernum viventes* | Indicative for the psalm's imprecatory subjunctive: Migne's page states as fact what the psalm asks for. The citation is right; the mood is not. |
| 0007 · 1098D | VERS. 1.-- *Hominis est **animum** praeparare.* … *et **Dei** gubernare linguam?* | **Prov. 16:1** *Hominis est **animam** praeparare, et **Domini** gubernare linguam* | Two changes, both carried into the gloss's own restatement, so this is Migne's text and not a slip of one line: *animum* (the mind) for *animam* (the soul), *Dei* for *Domini*. |
| 0007 · 1098D | *Nolite cogitare quomodo, aut **quod** loquamini: **datur** enim in illa hora, quid loquamini* `[n: (Matth. X)]` | **Matt. 10:19** *aut **quid** loquamini: **dabitur** enim **vobis** in illa hora, quid loquamini* | Present for future, *vobis* dropped, and *quod* for the first *quid*. |
| 0007 · 1099C | *Multi **reges et prophetae** voluerunt videre, quae vos **vidistis**, et non viderunt.* | **Luc. 10:24** *multi **prophetae et reges** voluerunt videre quae vos **videtis**, et non viderunt* | Order of the two nouns reversed and the tense of *videtis* changed to a perfect. ⭐ Worth marking because the gloss immediately turns on the kings (*Reges enim terrae saepe labia justa detestantur, ut Herodes Joannem*), which is why the noun that Migne fronts matters. |
| 0007 · 1100A | VERS. 27.-- *Vir **insipiens** fodit malum.* | **Prov. 16:27** *Vir **impius** fodit malum* | "Unwise" for "wicked". Material, and the gloss reads it of the heretic. |
| 0008 · 1103C | VERS. 8.-- *Rex qui **sedit** in solio judicii.* | **Prov. 20:8** *Rex qui **sedet** in solio judicii* | ⚠ **A single vowel, and it therefore rests on our transcription as much as on the plate — but it is printed TWICE in the same column** (once as the forward reference *Rex qui sedit.* at the end of VERS. 7, once as the lemma of VERS. 8), which is what took it past the single-letter bar. Rendered "who hath sat"; §3 lists it again as a cheap plate read. |
| 0008 · 1104A | VERS. 23.-- *Abominatio est apud **Deum** pondus et pondus, statera dolosa,* etc. | **Prov. 20:23** *Abominatio est apud **Dominum** pondus et pondus; statera dolosa **non est bona*** | A different divine name in a lemma, and Migne's lemma has also drawn in the *statera dolosa* clause without its *non est bona*. ⚑ Note the negative belongs to a clause the lemma does not print, so nothing was dropped in the English: there is no negative on this page to carry. |
| 0009 · 1106C | VERS. 9.-- *In auribus. **Nolite sanctum dare** canibus, neque **mittas** margaritas ante porcos.* | **Matt. 7:6** *Nolite **dare sanctum** canibus: neque **mittatis** margaritas **vestras** ante porcos* | ⭐ The important one is *mittas*: Migne's second verb is **singular**, where Matthew's is plural — and Pattern 17 makes that visible in the English ("neither cast **thou**"), against the plural *Nolite* four words earlier. Also word order and the dropped *vestras*. |
| 0009 · 1106D | VERS. 20.-- *Noli esse in conviviis **peccatorum**.* | **Prov. 23:20** *Noli esse in conviviis **potatorum*** | "Of sinners" for "of great drinkers" — and the whole of Migne's gloss on it is about **detraction at table**, not about drink, so the lemma he prints is the lemma his gloss needs. |
| 0009 · 1107A | *Cui **suffossio** oculorum?* | **Prov. 23:29** *cui **suffusio** oculorum?* | "The undermining" for "the suffusion (redness)" of the eyes. A real word for a real word, and the gloss goes with what he prints (*ingerit caecitatem*, brings in blindness). |

### 1b · Divergences found, LOGGED, and declined a marker — each with its reason

**None of these fires a `[var:]`**, because Pattern 14's bar is a divergence that CHANGES THE SENSE,
and because a `[var:]` is a public claim. They are listed because a blind reader will find them and
needs to know they were seen and weighed.

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 1092B | *sedet,* (of the foolish woman) | Prov. 9:14 *sedit in foribus domus suae* | One letter, and a present tense suits Migne's own framing verb (*quae est ei contraria, sedet*). Below the single-letter bar. |
| 1092D | *messis multa **est**, operarii **vero** pauci* `[n: (Matth. IX)]` | Matt. 9:37 *Messis **quidem** multa, operarii **autem** pauci* | Two particles and a supplied copula; the assertion is identical. |
| 1093A | *os* illius *iniquitas **operuit*** | Prov. 10:6 *os autem impiorum **operit** iniquitas* | A re-quotation woven into Migne's own relative clause, which needs the perfect. Not a proof-text. |
| 1094D | *nosipsos seducimus, et veritas in nobis non est* | 1 Joan. 1:8 *ipsi **nos** seducimus…* | *nosipsos* for *ipsi nos*: the same two words fused. Sense untouched. ⚑ Both of the sentence's negatives (*non sumus*, *non est*) and its *negamus* are carried. |
| 1095B | *Lingua autem sapientium **est sanitas**,* | Prov. 12:18 *lingua autem sapientium **sanitas est*** | Word order only. |
| 1095D | *cum adjungit, **moeror justi**,* | Prov. 12:25 *Moeror in corde **viri** humiliabit illum* | A forward pointer in Migne's own shorthand to the verse he glosses in the very next paragraph, where he prints the lemma correctly as *Maeror in corde*. A shorthand is not a quotation. |
| 1095D | *Maeror* here, *moeror* five lines above | Prov. 12:25 *Moeror* | *ae*/*oe* orthography, and Migne prints both forms himself on one page. Pattern 9. |
| 1096A | *Vae peccatori terram **duabus viis ingredienti*** | Sir. 2:14 *et peccatori terram **ingredienti duabus viis*** | Word order, plus Migne fronting the *Vae* from earlier in the same verse. He names his source correctly (*Jesus filius Sirach*). |
| 1096C | VERS. 22.-- *Bonus **homo**,* etc. | Prov. 13:22 *Bonus reliquit haeredes…* | One supplied noun in a two-word lemma cut by *etc.* |
| 1098A | *Vultusque **ejus** non sunt amplius in diversa mutati* | 1 Reg. 1:18 *vultusque **illius**…* | *ejus*/*illius*. Migne names Anna correctly. |
| 1098B | inside the abridgment span: *discedite a me operarii iniquitatis* | Luc. 13:27 *discedite a me **omnes** operarii iniquitatis* | A dropped *omnes* inside a resumption tail that the abridgment has already cut at both ends. |
| 1103C | *Beatos post se filios **relinquet*** | Prov. 20:7 *beatos post se filios **derelinquet*** | Simple verb for compound, same sense. |
| 1103C | VERS. 9.-- ***Qui** potest dicere.* | Prov. 20:9 ***Quis** potest dicere* | ⚠ One letter, and **Migne's own gloss two words later prints *quis*** (*Non dicit, quis habet*), so the plate probably reads *Quis* and our transcription has dropped the *s*. **That makes it a candidate against OUR file, not a divergence in his** — firing a `[var:]` would blame Migne for a fault the evidence points at us. Rendered as printed ("*He that can say*"), logged in §3 as a plate read. |
| 1103C | *Amicus stultorum similis **efficitur*** | Prov. 13:20 *amicus stultorum similis **efficietur*** | Present for future; one letter. |
| 1104A | *corona vitae quam **repromittit** Deus diligentibus se* | Jac. 1:12 *coronam vitae, quam **repromisit** Deus diligentibus se* | Present for perfect in a promise that holds in both tenses. |
| 1104C | *Ita cor regis quocunque voluerit* … *inclinat* | Prov. 21:1 *ita cor regis **in manu Domini**: quocumque voluerit, **inclinabit illud*** | Migne has cut *in manu Domini* (which he has already quoted in his own words two lines above) and put the verb outside the italics in his own present tense. Adaptation, not variant. |
| 1104D | *In coetu **gigantium*** | Prov. 21:16 *in coetu **gigantum*** | Third-declension genitive plural in *-ium* for *-um*; ordinary medieval orthography, Pattern 9. |
| 1105A | *Si adhuc hominibus placerem, Christi servus non essem**!*** | Gal. 1:10 (same words) | ✓ agrees word for word. The **`!` is Migne's** and is preserved under Pattern 8; it is listed here only so nobody reads it as ours. |
| 1105C | VERS. 13.-- *Dicet piger,* | Prov. 22:13 *Dicit piger* | One letter, future for present. |
| 1105D | *Fili mi.* opening the VERS. 16 gloss | Prov. 22:17 *Inclina aurem tuam* | Migne uses *Fili mi* as the label of the section that begins at 22:17 (his gloss says so: *Hucusque titulus parabolarum Salomonis qui supra positus*). A section label, not a quotation. |
| 1106B | VERS. 4.-- *Pone modum.* | Prov. 23:4 *sed prudentiae tuae **ponde** modum* | ⭐ **The one place where MIGNE is the tidier witness.** *ponde* is the Clementine's own well-known oddity; Migne prints the ordinary imperative *Pone*. Marking this as a divergence would tell a reader that Migne departs from the received text, when what has actually happened is that the received text is the odd one. Crux only. |
| 1106D | *Quia **vacant** potibus* | Prov. 23:21 *quia **vacantes** potibus et dantes symbola consumentur* | Finite verb for participle, because Migne has cut the verse in half and needs a clause. |
| 1106D | *Cui vae, cujus.* | Prov. 23:29 *Cui vae **?** cujus patri vae ?* | Migne prints a comma where the Clementine prints a question mark, and stops at *cujus*. Punctuation rides as printed (Pattern 8); the four question marks he DOES print at 1107A are all carried. |

### 1c · Checked and found to AGREE with the Clementine exactly

Listed by verse, because this half of the collation is what distinguishes a report from a guess.
Fragments are counted as agreeing when every word Migne prints is the verse's own word in the
verse's own order.

- **Prov. IX** (1092A–1092C): 9:1 *Sapientia aedificavit*, *Columnas septem* · 9:5 *Venite, comedite
  panem meum*, and the gloss's *pane* / *vino* · 9:6 *Relinquite* · 9:7 *Qui erudit* · 9:8 *Noli
  arguere* · 9:12 *Si sapiens*, *sapiens fueris* · 9:13 *Mulier stulta* (×2), *Mulier* · 9:16 *Qui
  est parvulus* · 9:17 *Aquae furtivae* · 9:18 *Et ignoravit quod ibi*.
- **Prov. X** (1092C–1093D): 10:1 *Parabolae Salomonis*, *Filius sapiens* · 10:2 *Nil proderunt* ·
  10:3 *Non affliget Dominus* · 10:4 *Egestatem operata* · 10:5 *Qui congregat* · 10:6 *Os autem
  impiorum*, *os* · 10:7 *Memoria* · 10:8 *Stultus **ceditur** labiis* (see §3 on the *ae*/*e*) ·
  10:9 *Qui ambulat* · 10:13 *Virga in dorso ejus* · 10:14 *Sapientes abscondunt* · 10:15
  *Substantia divitis* · 10:23 *Quasi per risum stultus operatur scelus* · 10:24 *Quod timet impius,
  veniet super* · 10:25 *Quasi tempestas* · 10:26 *Sicut acetum dentibus* · 10:28 *Spes autem*.
  Also **Psal. 118:2** *Domine, libera animam meam a labiis iniquis* (Migne's `[n: (Psal. CXIX)]`
  numbering is the Vulgate's own, and correct).
- **Prov. XI** (1093D–1094D): 11:1 *Statera dolosa* · 11:2 *Ubi fuerit superbia* · 11:7 *Mortuo
  homine impio*, *Exspectatio sollicitorum* · 11:9 *Simulator* · 11:12 *Qui despicit* · 11:14 *Ubi
  non est gubernator, populus corruet, salus autem ubi multa consilia* · 11:15 *Affligetur*, *Qui
  autem cavet laqueos securus erit* · 11:20 *Abominabile Domino cor pravum* · 11:21 *Manus in manu* ·
  11:22 *Circulus aureus in naribus* · 11:27 *Bene consurgit diluculo qui quaerit bona* · 11:28
  *Justi autem quasi* · 11:29 *Qui stultus est* · 11:30 *Qui suscipit* · 11:31 *Si justus*.
- **Prov. XII** (1094D–1096A): 12:2 *Qui bonus est* · 12:4 *Mulier* · 12:5 *Cogitationes* · 12:7
  *Verte impios* · 12:10 *Novit*, *Viscera autem impiorum crudelia* · 12:12 *Desiderium*, *Radix
  autem justorum proficiet* · 12:16 *Fatuus*, *Qui autem dissimulat* · 12:19 *Labium veritatis* ·
  12:23 *Cor insipientium provocat* · 12:24 *Manus fortium*, *Quae autem remissa* · 12:25 *Maeror in
  corde* · 12:26 *Qui negligit damnum* · 12:27 *Non inveniet*.
- **Prov. XIII** (1096A–1096D): 13:1 *Filius sapiens* · 13:4 *Vult et non vult piger*, *Anima autem
  operantium*, *impinguabitur* · 13:7 *Est quasi dives* · 13:11 *Substantia* · 13:12 *Spes quae
  differtur* · 13:13 *Qui detrahit* · 13:14 *Lex sapientis* · 13:16 *Cum consilio* · 13:20 *Qui cum
  sapientibus*, *Amicus stultorum* · 13:23 *Multi cibi* · 13:24 *Qui parcit virgae odit filium suum*.
  Also **Psal. 62:6** *Sicut adipe* (Migne's `[n: (Psal. XXVI)]` does not match those words — §3),
  **Luc. 16:19** *purpura et bysso*, **Gal. 6:1** *Si praeoccupatus fuerit homo in aliquo delicto*.
- **Prov. XIV** (1096D–1097D): 14:1 *Sapiens*, *Destruet* · 14:3 *In ore stulti* · 14:4 *Ubi non* ·
  14:6 *Quaerit derisor sapientiam* · 14:7 *Vade contra* · 14:10 *Extraneus* · 14:16 *Sapiens timet
  et declinat* · 14:17 *Impatiens* · 14:19 *Jacebunt mali ante bonos* · 14:24 *Fatuitas stultorum* ·
  14:25 *Liberat animas testis fidelis*, *Profert mendacia*, *Versipellis* · 14:26 *In timore
  Domini* · 14:27 *Timor Domini* · 14:30 *Vita carnium*, *Putredo ossium invidia*. Also **Psal.
  110:10** *Initium sapientiae timor Domini* (Migne's `[n: (Psal. IX)]` does not match — §3).
  ⚠ *Dominus impiorum* (1097B) is treated separately in §3; it agrees with no verse.
- **Prov. XV** (1097D–1098D): 15:1 *Responsio mollis frangit iram* · 15:2 *Ebullit stultitiam* ·
  15:5 *Stultus irridet* · 15:7 *Cor stultorum dissimile* · 15:10 *Doctrina mala* · 15:15 *Omnes
  dies* · 15:17 *Melius est vocari ad olera* · 15:19 *Pigrorum*, *Via justorum absque offendiculo* ·
  15:23 *Laetatur homo* · 15:24 *De inferno novissimo* · 15:26 *Firmabitur* · 15:30 *Lux oculorum
  laetificat animam*, *Lux oculorum*. ⚠ *Viduae Ecclesiae* (15:25) and *Videns bona oculus delectat
  corda bona* are treated in §3 — the first fuses a gloss word into the lemma's italics, the second
  is announced by Migne himself as *Alia translatio* and is therefore not a Vulgate citation at all.
- **Prov. XVI** (1098D–1100B): 16:2 *Omnes viae* · 16:3 *Revela Domino* · 16:4 *Universa propter
  semetipsum* · 16:5 *Abominatio est* · 16:7 *Cum placuerint Domino* · 16:8 *Melius est parum cum
  justitia* · 16:10 *Divinatio in labiis regis* · 16:11 *Pondus et statera* · 16:13 *Voluntas regum* ·
  16:14 *Nuntii mortis*, *Placabit* · 16:15 *In hilaritate vultus regis vita*, *Et clementia ejus
  quasi imber serotinus* · 16:22 *Fons vitae* · 16:24 *Favus mellis composita verba* · 16:26 *Anima
  laborantis laborat sibi* · 16:29 *Vir iniquus lactat amicum suum* · 16:30 *Qui attonitis oculis
  cogitat* · 16:32 *Melior est patiens viro forti* · 16:33 *Sortes mittuntur in sinum*. Also **Luc.
  3:6** *videbit omnis caro salutare Dei*, **Psal. 9:24** *quoniam laudatur peccator in desideriis
  animae suae, et iniquus benedicitur*, **Jac. 3:6** *inflammat rotam nativitatis nostrae inflammata
  a gehenna*.
- **Prov. XVII** (1100B–1101A): 17:1 *Melior est buccella* · 17:6 *Corona senum* · 17:8 *Gemma
  gratissima* · 17:12 *Expedit magis ursae* · 17:14 *Qui* · 17:16 *Quid prodest* · 17:17 *Omni
  tempore* · 17:22 *Animus gaudens* · 17:24 *In facie prudentis* · 17:26 *Non est bonum damnum
  inferre justo*. Also **Rom. 8:28** *Quoniam diligentibus Deum omnia cooperantur in bonum*,
  **Prov. 26:10** *Qui imponit stulto silentium, iras mitigat*. ⚠ 17:18 *Homo stultus plaudet
  manibus* reverses the Clementine's *Stultus homo* — word order only, and it is listed here rather
  than in §1b only because the two words are the whole lemma.
- **Prov. XVIII** (1101B–1102A): 18:3 *Impius cum in profundum venerit* · 18:4 *Aqua profunda*, *Et
  torrens redundans fons sapientiae* · 18:9 *Qui mollis et dissolutus* · 18:11 *Substantia divitis
  urbs roboris ejus* · 18:13 *Qui prius respondet quam audiat* · 18:14 *Spiritus viri sustentat
  imbecillitatem*, *Spiritum vero ad irascendum* · 18:16 *Donum hominis* · 18:17 *Justus prior* ·
  18:19 *Frater qui adjuvatur* · 18:23 *Cum obsecrationibus loquetur pauper* · 18:24 *Vir amabilis*.
- **Prov. XIX** (1102A–1103B): 19:1 *Melior est pauper* · 19:2 *Ubi non* · 19:3 *Stultitia* · 19:4
  *Divitiae addunt amicos* · 19:5 *Testis falsus* · 19:10 *Non decent stultum* · 19:11 *Doctrina
  viri*, *Et gloria ejus est iniqua praetergredi* · 19:13 *Dolor patris*, *Tecta jugiter* · 19:15
  *Pigredo immittit soporem* (×2), *Et anima dissoluta esuriet* · 19:18 *Erudi filium* · 19:19 *Qui
  impatiens est sustinebit damnum et cum rapuerit* · 19:22 *Melior est pauper* · 19:24 *Abscondit
  piger manum* · 19:28 *Devorat*. Also **Gen. 6:6–7** *tactus dolore cordis intrinsecus: Delebo,
  inquit, hominem quem creavi a facie terrae*.
- **Prov. XX** (1103B–1104B): 20:1 *Luxuriosa res* · 20:4 *Aestate* · 20:10 *Pondus et pondus* ·
  20:11 *Ex studiis suis intelligitur* · 20:12 *Dominus fecit utrumque* · 20:14 *Malum est* · 20:15
  *Est aurum et multitudo* · 20:17 *Suavis est homini panis mendacii* · 20:21 *Haereditas* · 20:25
  *Ruina est homini devorare sanctos, et post vota retractare* · 20:26 *Dissipat impios rex sapiens,
  et incurvat super eos fornicem* · 20:30 *Livor vulneris*. Also **Rom. 8:18** *non sunt condignae
  passiones hujus temporis*.
- **Prov. XXI** (1104C–1105A): 21:1 *Sicut divisiones* · 21:8 *Perversa via* · 21:13 *Qui obturat
  aurem* · 21:15 *Pavor operantibus iniquitatem* · 21:18 *Pro justo datur* · 21:20 *Thesaurus
  desiderabilis* · 21:22 *Civitatem fortium* · 21:28 *Testis mendax* · 21:29 *Vir impius*. Also
  **Psal. 94:4** *in manu ejus sunt omnes fines terrae*, **Matt. 25:41** *Discedite a me, maledicti,
  in ignem aeternum, qui paratus est diabolo et angelis ejus*, **Matt. 10:28** *Nolite timere eos qui
  occidunt corpus*.
- **Prov. XXII** (1105A–1106A): 22:1 *Melius est*, *Nomen bonum*, *Gratia bona* · 22:2 *Dives et
  pauper* · 22:3 *Callidus vidit malum* · 22:4 *Finis modestiae*, *Divitiae et gloria* · 22:6
  *Proverbium est* · 22:8 *Qui seminat iniquitatem*, *Et virga irae suae* · 22:16 *Qui calumniatur* ·
  22:24 *Noli esse amicus*, *Homini iracundo, neque ambules cum viro* · 22:26 *Noli esse cum his, qui
  defigunt manus* · 22:28 *Ne transgrediaris* · 22:29 *Vidisti virum velocem in opere suo? coram*.
  Also **Gal. 1:10** *Si adhuc hominibus placerem, Christi servus non essem*, **Matt. 26:52** *Omnes
  enim qui acceperint gladium, gladio peribunt*.
- **Prov. XXIII** (1106A–1107B): 23:1 *Quando sederis* · 23:3 *Ne desideres* · 22:28 (quoted at
  1106B) *Ne transgrediaris terminos antiquos quos posuerunt patres* · 23:6 *Ne comedas* · 23:7
  *Comede* · 23:8 *Cibos quos comederas* · 23:9 *In auribus* · 23:10 *Ne attingas* · 23:17 *Non
  aemuletur cor tuum peccatores* · 23:21 *Dantes symbola consumentur* · 23:27 *Fovea enim profunda
  est meretrix* · 23:29 *Cui rixae? cui foveae? Rixae*, *Cui sine causa vulnera?* · 23:30 *Nonne
  his* · 23:33 *Oculi tui videbunt* · 23:34 *Et eris sicut dormiens* · 23:35 *Verberaverunt me*.
  Also **Apoc. 2:10** *Esto fidelis usque ad mortem, et dabo tibi coronam vitae*, **Joan. 8:44** *Vos
  ex patre diabolo estis*, **Isa. 5:22** *Vae qui potentes estis ad bibendum vinum, et viri fortes ad
  miscendam ebrietatem*.

### 1d · Clipped lemmata — BOTH classes listed, so the split is not misread later as inconsistency

Ruth's convention 3 renders a fragmentary lemma as the phrase it stands for; the 2026-08-19 addendum
adds that a **complete** one-word lemma has nothing elided and is rendered as it stands. Both classes
occur here and the split is deliberate.

**Expanded** (the governed word is missing and English will not carry the stump): 1092A *Sapientia
aedificavit* → "Wisdom hath built herself a house" · 1092A *Relinquite* → "Forsake childishness" ·
1092A *Noli arguere* → "Rebuke not a scorner" · 1092B *Si sapiens* → "If thou be wise" · 1092C *Et
ignoravit quod ibi* → "And she knew not that there are giants there" · 1092C *Nil proderunt* → "The
treasures of wickedness shall profit nothing" · 1092D *Non affliget Dominus* → "The Lord will not
afflict with famine" · 1092D *Egestatem operata* → "The slack hand hath wrought want" · 1093B
*Quod timet impius, veniet super* → "…shall come upon him" · 1093D *Spes autem* → "But the hope of
the wicked" · 1094A *Affligetur* → "He shall be afflicted with evil" · 1094D *Qui suscipit* → "He
that receiveth souls" · 1094D *Si justus* → "If the just man receive on earth" · 1096C *Qui cum
sapientibus* → "He that walketh with the wise" · 1096D *Sapiens,* etc. → "A wise woman," etc. ·
1097A *Ubi non,* etc. → "Where there are no oxen" (Prov. 14:4) · 1098A *Stultus irridet* → "The fool
laugheth at the discipline of his father" · 1100C *Qui.* → "He that letteth out water" (see §3) ·
1102B *Ubi non,* etc. → "Where there is no knowledge of the soul" (Prov. 19:2) · 1103B *Devorat* →
"Devoureth iniquity" · 1103B *Luxuriosa res* → "Wine is a luxurious thing" · 1102C *Non decent
stultum* → "Delicacies are not seemly for a fool".

⚠ **The two *Ubi non* lemmata are the control for this whole class**: Migne prints the identical
stump at 1097A and at 1102B for two different verses, and each was expanded from **its own verse**
(oxen at Prov. 14:4, the knowledge of the soul at Prov. 19:2). Expanding them alike, or leaving them
alike, would have been the error.

**Left as they stand** (nothing is elided; the lemma is a complete English phrase): *Columnas
septem* · *Mulier stulta* · *Aquae furtivae* · *Memoria* · *Substantia divitis* · *Quasi tempestas* ·
*Statera dolosa* · *Simulator* · *Manus in manu* · *Mulier* · *Cogitationes* · *Desiderium* ·
*Fatuus* · *Substantia* · *Extraneus* · *Impatiens* · *Versipellis* · *Aqua profunda* · *Stultitia* ·
*Haereditas* · *Aestate* · *Thesaurus desiderabilis* · *Nomen bonum* · *Gratia bona* · *Pone modum* ·
*Comede* · *Fili mi*.

---

## §2 · `usque ad` — CENSUSED PER OCCURRENCE, NEVER BY RULE

**126 tokens of *usque* in my five Latin chunks. 118 are the abridgment formula** (25 · 24 · 22 · 23
· 24), each inside its own italic span and each answered by exactly one italic ***as far as*** in the
English — verified 1:1 per chunk, not in total. **Eight are not the formula:**

- **Six sit inside another word** and are invisible to a careless sweep: *Vultusque* (1098A),
  *utriusque* (1101B, 1101C), *ejusque* (1096B, 1105A), *Hucusque* (1105D).
- **1099D — *Serotinus imber in Judaea usque hodie … venire consuevit***: ordinary "even to this
  day". Rendered so.
- ⭐ **1106D — *Esto fidelis **usque ad** mortem, et dabo tibi coronam vitae* `[n: (Apoc. II)]`.**
  **This is the trap in my range and it is a real one**: the words *usque ad* stand in italics,
  inside a quotation, immediately after an abridgment formula three words earlier in the same
  paragraph. They are **Apoc. 2:10's own words** — "faithful **unto** death" — and rendering them as
  the formula would have cut the crown out of the promise. Decided from what stands either side, as
  the brief requires.

Two further spans carry the formula with Migne's own punctuation **inside** the italics and are
reproduced that way rather than normalized: `*usque ad, discedite a me operarii iniquitatis.*`
(1098B, where the resumption is fused into the same italic run) and `*usque ad,*` (1100C).

---

## §3 · THIS RANGE'S CRUCES — including everything declined, with the reason

### ⭐ 3a · 1107B · `VERS. 35.emdash;` — a broken HTML entity in OUR TEI. The English prints `VERS. 35.--`

The Latin chunk reads **`VERS. 35.emdash; *Verberaverunt me.*`**. Every other one of the 201 verse
addresses in this work reads `VERS. n.-- `. `emdash;` is the tail of an undecoded `&emdash;`
character entity, and it occurs **exactly once in the whole of `src/latin/`** — a corpus-wide grep
returns this one line and nothing else. It is not type Migne set; it is our source's decoding
failure.

**What I did, and why:** the English prints `VERS. 35.-- `, which is what Migne prints. This follows
Pattern 9's ruling on section labels — *"the English head translates a structural label and there is
no English exponent for a Latin typo, and the Latin side of the parallel page preserves the misprint
verbatim, so nothing is concealed from the reader."* A verse address is exactly that kind of
structural label.

⚠ **This is the one band where my punctuation comparison does not match, and the mismatch is this and
only this**: the semicolon of `emdash;` counts as a semicolon in band 1107B of the Latin and has no
counterpart in the English. It is not page punctuation.

⛔ **It should be fixed by a `data/tei-patches/8966.json` entry**, not by anything in the English —
find `VERS. 35.emdash;`, replace `VERS. 35.-- `, which corrects the markup and not one word of
Migne. **I have not written the patch**, because a patch requires re-chunking and confirming chunk
boundaries are unchanged, and that is the merge's business, not a translating stint's. It is the
cheapest open item in this range.

### 3b · Plate candidates — raised, never patched, and **NO MARKER FIRED ON ANY OF THEM**

Ship test B: an unread candidate is safe if and only if it fires no marker. **This range asserts
nothing about the plate.** Our archive.org copy of PL 113 (`patrologiaecurs04migngoog`) is known to
clip the left margin on some pages, and `data/volumes.json` lists a second witness for PL 113 —
Gallica `ark:/12148/bpt6k5505319w`, IIIF, one HTTP request per read, map **f = (column + 1) / 2**
(NOT the archive map). Every candidate below is one fetch away.

| col | reading | class | what I did |
|---|---|---|---|
| **1094A** | ***damuante** propria conscientia* | ⭐ **NON-WORD** — no Latin word; *damnante* is certain from the ablative absolute (*conscientia*) and from *damnabitur* three words earlier | The non-word class has been **ours 19 times out of 19** in this series. Rendered by its evident sense ("their own conscience condemning them") and **no `[sic:]`**, exactly as 8965 handled *for es* → "valiant men". This is the strongest plate candidate in my range. Gallica **f548** (cols 1093/1094). |
| **1100B** | *parva bona **eum** charitate facere* | Real word, **no grammatical slot** — *eum* is accusative and cannot govern the ablative *charitate*; *cum* is certain, and c/e is the commonest OCR confusion | Under Pattern 12's own test 1 this would take a marker. **It does not get one**, because my brief's rule is decisive for this series — a real word that reads oddly is Migne's until a plate says otherwise, refuted 5 of 5 — and because the fault shape (single letter, c→e) points at our scan. Rendered "with charity", crux, Gallica **f551**. |
| **1103C** | VERS. 9.-- ***Qui** potest dicere* | Real word; Prov. 20:9 has *Quis*, **and Migne's own next clause prints *quis*** (*Non dicit, quis habet*) | Rendered as printed ("*He that can say*"), `[var:]` **declined** — see §1b. Gallica **f552**. |
| **1097A** | *Destruet male vivendo, et aliquando aperte **regnando*** | Real, well-formed word that reads oddly of the foolish woman of Prov. 14:1 | Rendered as printed ("by reigning openly"). **No conjecture is offered**, because I have none I would stand behind, and naming a rival I cannot adjudicate is worse than naming none. Gallica **f549**. |
| **1103A** | *cupiditatis infimae **famae** sauciatur* | *fame* (ablative of *fames*, hunger) written *famae* — and hunger is exactly what the lemma promises (*anima dissoluta **esuriet***, and Migne's own *esuriens* two lines later) | An *-ae*/*-e* orthographic swap in the direction of hypercorrection: **Pattern 9, an attested medieval spelling, not a defect.** Rendered "by the hunger of lowest covetousness". No marker, no plate read needed. |
| **1093A** | *Stultus **ceditur** labiis* | *caeditur* written *ceditur* | Same class: *ae*→*e* is the corpus's ordinary orthography. Rendered "is beaten", which is *caedo*, because *cedo* ("yield") leaves the ablative *labiis* with nothing to do and the gloss is about a sentence of condemnation. Pattern 9, no marker. |
| **1097B** | *unde subditur: **Dominus** impiorum,* etc. | ⭐ Real word. Prov. 14:11 reads ***Domus** impiorum delebitur*, and *Domus impiorum* is precisely the verse Migne's *subditur* points to | This is Pattern 18's shape exactly — the printed word is real, and the faithful English ("*The Lord of the wicked*") says something the verse does not. **I declined the `[cj:]`.** The brief for this batch is explicit that a real, well-formed word is Migne's until a plate says otherwise and that no marker fires on a corpus argument however good; and 18a's census is closed. The conjecture is here, in the crux, where a reader who is asking the question will meet it. **⭐ If one plate read is bought for this range, buy this one** — Gallica **f549**, right column, band B. |

⭐ **And the negatives, recorded because a checked negative is worth having:** I looked for the
"suspiciously tidy" normalization class (brief §4 / addendum C) in every line I examined closely and
found **no candidate**. The passages here are rough in the ordinary way — ellipsis, anacoluthon,
abridgment tails — and nowhere does a form strike me as tidier than its neighbours.

### 3c · Migne's own irregularities, reproduced and not tidied

- **Citations whose numerals do not match the words they carry — THREE, all identified from the
  QUOTED TEXT and never from the numeral, all left exactly as printed.** They are the *index's*
  business (`data/citation-corrections.json`), not the text's, and I have not touched that file:
  - **1093A · `[n: (Isa. LXVI)]`** on *mors et vita in manibus linguae* — the words are **Prov.
    18:21**. ⚑ Not a random miss: Isa. 66:24 is the source of *ignis eorum non exstinguetur* five
    lines above, so the compositor's eye had Isaiah 66 on the page.
  - **1096B · `[n: (Psal. XXVI)]`** on *Sicut adipe* — the words are **Psal. 62:6** (*Sicut adipe et
    pinguedine repleatur anima mea*). Psalm 26 has no such words.
  - **1097B · `[n: (Psal. IX)]`** on *Initium sapientiae timor Domini* — the words are **Psal.
    110:10** (also Sir. 1:16). Psalm 9 has no such words.
- **Verse numbers that do not match the verse glossed — FOUR, reproduced as printed, never
  renumbered:** 1093B VERS. 18 over a lemma from 10:14 (§1a) · 1100C VERS. 13 over a gloss on 17:14
  (*Aquam dimittere*) · 1101B VERS. 1 over 18:3 · 1103B VERS. 2 over 20:1 (*Luxuriosa res*).
  ⚑ At 1100C the lemma is the bare stump *Qui.*, so the verse number and the gloss disagree about
  which verse it opens. **I expanded it from Migne's own next words** (*Aquam dimittere*), i.e. from
  Prov. 17:14, and not from the printed numeral — the expansion is licensed by his gloss, not by my
  guess. Both readings are on the page for a reader to check.
- **1098C · *Viduae Ecclesiae*** — the italic span takes in *Ecclesiae*, which is **not in Prov.
  15:25** (*firmos faciet terminos viduae*); Migne has drawn his own gloss word inside the lemma's
  italics. Reproduced with the italics where he set them: "*Of the widow the Church,*". **No
  `[var:]`**, because the lemma is not claiming to be the verse.
- **1098D · *Alia translatio: Videns bona oculus delectat corda bona*** — Migne says himself that
  this is another version. Pattern 14 is for scripture quoted as the Vulgate; a labelled alternate
  version is not a divergence, it is a second witness he names. No marker.
- **1105B · *quia opus sunt divinum*** — plural subject, singular predicate, of the rich man and the
  poor man together. Rendered as printed ("because they are a divine work"); English carries the
  disagreement visibly, so there is nothing to mark.
- **1105D–1106A · *praecipue Judaeo, qui … furebant*** — singular antecedent, plural verb. English
  has no exponent (Pattern 9); rendered "who raged", crux, no marker.
- **1095C · *et aliis, quae sequantur, demonstrant*** — **the sentence ends with no terminal stop.**
  Pattern 8: the English stops where he stops, with no full stop supplied. This is deliberate and is
  not a truncation of ours.
- **1106B · *ita haereticus, quae non intelligit in Scripturis, ut libet interpretatur?*** — a
  question mark closing what is plainly a statement. **Preserved** (Pattern 8; this is HIS oddity and
  recording it is the point). It is not the 8b indirect-question case: the English construction takes
  the mark without recasting.
- **1105A · *Christi servus non essem!*** — Migne's exclamation mark on Gal. 1:10. Preserved.
- All four question marks at **1107A** and the one inside the lemma at **1106A** (*Vidisti virum
  velocem in opere suo? coram.*) are Migne's and stand where he sets them, including **inside** the
  italic spans.

### 3d · Passages that will not construe cleanly, rendered as closely as the printed words allow

Named, because a blind reader will stop at each of them and needs to know they were read, not
skated over.

- **1092C, *Nil proderunt* gloss: *usque ad* quod pro vita sunt dati, conferunt.** The abridgment
  has taken the subject. Rendered "because they were given for life, they profit"; the subject
  supplied is the *thesauri* of the lemma. Both the *quod*-clause's force ("because"/"in that") and
  the bare *conferunt* are elliptical in the Latin and are elliptical in the English.
- **1096A, *Filius sapiens*: *ut hic … perveniat: ille, ne, cum arguitur, audiat.*** The second limb
  has no verb of its own; *ne … audiat* hangs on the *ut* of the first. Rendered "the other, that he
  may not hear when he is reproved," which keeps the ellipsis visible.
- **1104D, *Thesaurus desiderabilis*: *Reprobi non tantum virtutes non assequi, etc.*** An
  accusative-and-infinitive with its governing verb cut away by the abridgment. ⚑ **Two negatives,
  and both are carried on their own hosts**: rendered "The reprobate not only do not attain the
  virtues, etc." A finite verb is supplied where Latin has the infinitive, because English cannot
  carry a bare infinitive here; nothing else is added.
- **1106A, *Vidisti virum velocem*: *usque ad* quorum cavit errorem esse ponendum.** Rendered "he
  took heed that their error was to be set down." I can construe the words and I am not confident of
  the sense; the resumption tail is short and the antecedent of *quorum* is inside the elided matter.
- **1099C, *Pondus et statera*: *Lapides justi fortes*.** *justi* is a genitive singular or a
  nominative plural and both construe. Rendered "The stones of the just are strong"; the alternative
  ("Just stones are strong ones") is named here rather than chosen silently.
- **1094C, *Circulus aureus in naribus*: *Si suis naribus circulum auri fixeris*.** *suis* is either
  the reflexive possessive ("in his own nostrils") or the **genitive of *sus*, a swine**. ⭐ I chose
  the swine, and the reason is grammatical rather than traditional: the sentence's only person is the
  second-person *fixeris*, so a reflexive *suis* would have **no antecedent at all**, while Prov.
  11:22's *in naribus suis* is the swine's snout on every reading of the verse. Rendered "in a
  swine's nostrils"; the rival is here.

---

## §4 · SUPPLIED PRONOUNS AND SECOND PERSON

### 4a · Every "he/she/it/they" the Latin does not print, named, with what names it

The 11613 measurement makes this the dominant defect class. Where two readings both construe I say
so rather than choosing silently.

- **1092C, *Et ignoravit quod ibi*** → "**she** knew not". Prov. 9:18's subject is not expressed;
  **Migne's own next words name her** — *Nescit **mulier adultera***. Not my inference.
- **1092D, *Non affliget Dominus* tail** → "**he** turns it back by justly avenging". The Lord, from
  the lemma directly above.
- **1093B, *Quod timet impius*** → "**He** speaks of that wicked man"; **1093C, *Quasi tempestas***
  → "**He** speaks of the persecutors". The subject of *dicit* throughout Migne's Proverbs glosses is
  the writer of the proverb; the same unexpressed subject governs *subdit*, *subditur*, *adjungit*,
  *praemissum est* everywhere in this range, and is rendered "he" uniformly.
- **1093C, *Quasi tempestas*: *Sed illa … collocata*** → "**that house**". *illa* is feminine and the
  only feminine noun in the sentence is *domum fidei*.
- **1094D, *Qui stultus est*: *ille damnatur, iste accipit bravium*** → "the **former** … the
  **latter**". *ille* is the *impius* of the preceding clause (who is condemned), *iste* the *pius*
  (who receives the prize) — fixed by which of them the prize belongs to, not by the demonstratives
  alone.
- **1095D, *Cor insipientium provocat*** → "**they** take away that which they seemed to have". The
  plural of the lemma (*insipientium*), carried through *appetunt · habent · tenent · nequeunt*.
- **1096A, *Filius sapiens*: *hic … ille***→ "the **one** … the **other**", mapped in the printed
  order to *sapientem* and *stultum*. ⚠ Migne uses *hic* of the FIRST-named, which inverts the
  classical habit; **Prov. 13:1's own second half decides it** (*qui autem illusor est non audit cum
  arguitur* — the fool is the one who will not hear), and that is the limb *ille* carries.
- **1096D, *Sapiens,* etc. / *Destruet*** → "**She** shall destroy". Prov. 14:1's subject for
  *destruet* is the *insipiens* woman, against the *Sapiens mulier* of the first half — the lemma
  Migne prints.
- **1098D, *Videns bona oculus*** → "**it** beholds them … **it** is delighted". The eye of the
  lemma, which is the sentence's only available subject for *contemplatur* and *delectatur*.
- **1105C, *Dicet piger* tail: *aut, sicut alios justos, consumat tormentis*** → "or, as **it** did
  other just men, may consume him". The lion of Prov. 22:13 (*Leo est foris*), which is the verse the
  lemma opens.
- **1104C, *Sicut divisiones*** → "**he** inclines", "**he** bestows", "**he** renders" — the *Dominus*
  of the lemma and of *in manu Domini*.

### 4b · Pattern 17 — thou is the singular, you is the plural

Every archaic form in these five chunks answers a **grammatically singular** Latin address, and the
Latin that fixes the number is named:

- 1092A *Quasi interrogares* → "As though **thou** shouldst ask" (2 sg.).
- 1092B *Moneo **te*** … *quod tamen **tibi** prodest* … *Si enim sapiens **fueris*** → "I admonish
  **thee** … profits **thee** … if **thou** be wise".
- 1093B *si … **desideras*** · *conteges* · *proferas* · *tuum cor* · *os* → "if **thou** desirest …
  **thou** shalt neither cover … nor utter … **thy** heart … **thy** mouth".
- 1094A *Ne enim **putares*** → "lest **thou** shouldst think"; 1094C *si … **fixeris*** → "if
  **thou** shouldst fix".
- 1102D–1103A *conspicis · castiga · tuis verbis* → "if **thou** seest … chastise … **thy** words";
  1103A *labaris* → "if **thou** shouldst slip".
- 1106A *quo indutus **videbaris**?* → "wherewith **thou** didst seem to be clothed?"; *Non
  transgrediaris* → "Do not **thou** pass over".
- 1106B–1106C *sederis · desideres · loquaris · comedas · attingas · comederas · didiceras ·
  deseras · sustineas · perdas · putaveras · auscultares · ingeras* → all singular, all *thou*.
- ⭐ 1106C *neque **mittas** margaritas* → "neither cast **thou** pearls" — **and this is where the
  rule earns its keep**: Matthew's verb is the plural *mittatis*, Migne prints the singular, and the
  `[var:]` at that point and the *thou* in the text are saying the same thing from two directions.
  Migne's own *Nolite* four words earlier stays plural ("Give **ye** not"), so the shift is visible
  on the page exactly as he printed it.
- **No plural *vos* is rendered "thou" and no singular *tu* is rendered "you" anywhere in the range.**

---

## §5 · THE TESTS, RUN, AND WHAT THEY RETURNED

**Test 1 — a `[sic:]` must not swallow the word it marks.** ⭐ **Vacuously clean, and for the right
reason: this range fires ZERO `[sic:]`.** Nothing is quarantined, so nothing can be quarantined with
its verb, its negation or its object inside. I also ran the mechanical form — stripped every marker
from the English and read what was left — and found no stranded article, preposition or doubled
mark; every sentence reads aloud without its brackets. The `[var:]` markers are all **beside** a
complete rendering, never in place of one.

**Test 2 and 2a — name the single Latin word each printed negative attaches to.** Proverbs is
aphorism, so this was run on every proverb, not on every paragraph. **The `non solum` / `non tantum`
/ `nisi` / correlative population — 2a's own trigger condition — is nine sites, and each was proved
from the sentence's structure and not from what reads well:**

| col | Latin | host | English |
|---|---|---|---|
| 1092C | *ut **non**, sicut prius, de singulis … **disputet**; sed … describat* | *disputet* | "that he should **not** … dispute … but should describe" |
| 1095D | *Perfecti **non solum** vitiorum bella superant, **sed et** … principantur* | *vitiorum bella superant* | "**not only** overcome the wars of the vices, **but** rule also" |
| 1096C | *Qui stultos, **non quia** homines sunt, **sed** propter stultitiam … **non ut** instruendo **corrigat**, amat, **sed ut** favendo, deteriores efficiat* | *quia homines sunt*; then *ut instruendo corrigat* | "**not because** they are men, **but** for their folly's sake … **not that** he may correct them by instructing, **but that** by favouring them he may make them worse" |
| 1098C | *vere sapiens **non solum** quod **loquitur**, **sed etiam** opportunitatem* | *quod loquitur* | "**not only** what he speaks, **but also** the fitness" |
| 1098C | *quando **non solum** factis, **sed et** verbis omnibus digna praemia reddet* | *factis* | "**not only** to deeds, **but also** to all words" — ⚠ on the DATIVE, not on *reddet*; putting it on the verb would have God rendering no rewards |
| 1099A | *tunc **non solum** opera, **sed** cogitationes dirigit* | *opera* | "he directs **not only** our works, **but** our thoughts" |
| 1099A | *Nulla fuit Domino causa operandi, **nisi sola voluntas*** | *causa*, resolved by *nisi* | "There was **no** cause … **save** his will alone" |
| 1103C | *quibus **non praesens, sed futura** beatitudo promittitur* | *praesens* (an adjective) | "**not** the present **but** the future blessedness" |
| 1104C | *Omnium hominum, **non solum** regis cor, in manu Domini* | ⭐ *regis* | "The heart of all men, **not only** of the king, is in the hand of the Lord" — **the sharpest 2a site in the range.** The negative sits beside a genitive and next to a verbless predicate; attached to the copula it would deny that the king's heart is in God's hand, which is the exact opposite of the proverb the whole gloss is expounding. The `Omnium hominum` fronting is what proves the host. |
| 1105A | *Quod fidelium testimonio laudatur, **non** vulgi imperiti* | *vulgi imperiti* | "praised by the testimony of the faithful, **not** of the unskilled crowd" |
| 1107A | ***Non** vetat bibere vinum ad necessitatem, **sed** morari …* | *bibere vinum ad necessitatem* | "He does **not** forbid the drinking of wine for necessity, **but** the tarrying" |

Every other printed negative — the *non · nec · neque · ne · nisi · nunquam · nullus · nemo · nihil ·
nolite · noli* population, ~90 tokens across the five chunks — was checked the same way, one host at
a time. **No negative was relocated, none was dropped, and none was invented.** Two are worth naming
because they read as contradictions and were carried anyway: **1093A** *et ignis eorum **non**
exstinguetur* inside a gloss on the memory of the just, and **1094D** *etsi enim impii **non** sumus,
certe si peccatores nos esse negamus…*, where three negations stack in one sentence and all three
stand.

**Test 2b — each anchor against the WORD it stands beside.** All 62 were checked at the site, not for
presence. Migne's band breaks fall mid-construction constantly in this book and the English follows
them there: *Denique [1093A] os* → "In fine, [1093A] the *mouth*" · *Stultus [1093C] est igitur* → "A
fool [1093C] therefore is he" · *Hoc Origenes [1094A] nescivit* → "This Origen [1094A] knew not" ·
*Prudens autem [1094B] publice tacet* → "But the prudent man [1094B] keeps silence in public" ·
*glorificatur [1105B] Pater* → "is glorified [1105B] the Father", where the English keeps Migne's
order rather than the natural English one **precisely so that the anchor lands where he puts it**.
⚠ One anchor is approximate and is declared: **1103A**, where Migne breaks inside the noun phrase
*cupiditatis infimae famae | sauciatur*; my English breaks inside the same noun phrase ("the hunger
of lowest [1103A] covetousness") but two words earlier than the Latin, because English word order
puts *sauciatur* at the head of the clause. It is inside the same clause and the same phrase.

**Test 3 — punctuation compared BY COLUMN BAND, never by total.** This is where the repairs came
from, and the peers' warning was exactly right. **First pass: four mismatched bands, and all four
were marks I had supplied, three of them semicolons:**

| band | what I had | what Migne prints | fixed to |
|---|---|---|---|
| 1092B | "by the divinity and the humanity**;** now by the contrary" | comma | comma |
| 1094C | "*But the just as,* etc. As it were**:** they who" | comma (*Quasi, qui spe*) | comma |
| 1097C | "By the flesh, weak things**;** by the bones, firm things" | comma | comma |
| 1102B | "who followed after words only**;** now he refutes" | comma | comma |

**Every one is the documented shape**: an aphorism in two halves invites a semicolon, and the
translator supplies one without noticing. A fifth, in 0008, was a different error the same pass
caught — an `[n: none]` I had typed into a paragraph that carries no note at all, which broke note
parity and would have shipped an empty marker.

**After the repairs: 61 of 62 bands match exactly** — colons, semicolons, question marks and
exclamation marks. **The one that does not is band 1107B and it is `emdash;` and nothing else**
(§3a). Totals were never used; had they been, 1092B's supplied semicolon and 1094C's supplied colon
would have hidden inside a chunk total that happened to come out right.

**The fourth test — does the paragraph ASSERT what he asserts?** Run last, with the counts already
clean, reading each finished paragraph against its Latin and asking that one question. Three
paragraphs were rewritten by it, and none of them was missing anything:

1. **1103D, *Malum est*** — *Qui aeterna praemia … desiderat, **malum est**, quod in praesenti debet
   sustinere*. My first English quietly repaired the anacoluthon into a well-formed sentence. Migne's
   sentence is not well-formed: he begins with a nominative *Qui* and finishes with an impersonal
   *malum est*, **because he is playing on the buyer's cry of Prov. 20:14** (*Malum est, malum est,
   dicit omnis emptor; et cum recesserit, tunc gloriabitur*) — the *recesserit* and the *glorietur*
   are both in his sentence. Restored to the printed shape.
2. **1094D, *Qui stultus est*** — *Impius vivit pio*. First rendered as though the wicked man merely
   lives alongside the godly. The dative is a dative of service and the verse is *qui stultus est
   serviet sapienti*: "The wicked man lives **for** the godly."
3. **1099A, *Omnes viae*** — my first version put "he discerns" at the head of the sentence, which
   read better and moved the anchor. Migne's *discernit* is at the end and the anchor falls after
   *bonorum*; the English now follows him.

⚑ Two habits, applied: a sentence that reads smoothly where the Latin is rough was treated as a
suspect (that is what caught 1 and 3), and the abridgment resumption tails were parsed as strictly as
ordinary prose rather than excused as "abridged" — which is what produced §3d's list instead of a
silent smoothing of five awkward tails.

---

## §6 · WHAT I DECLINED, AND WHAT THE MERGE SHOULD KNOW

- **Four markers that a strict reading of the patterns would allow, all declined**, each named above
  with its reason: the `[cj:]` at 1097B (*Dominus impiorum*), the `[sic:]` at 1094A (*damuante*), the
  `[sic:]` at 1100B (*eum charitate*), and the `[var:]` at 1103C (*Qui potest dicere*). ⚑ The common
  reason is not timidity: in three of the four the evidence points at **our** file rather than at
  Migne's plate, and a marker would publicly blame him for a fault that is probably ours — which is
  precisely why seven false `[sic:]` were withdrawn from an earlier batch. The fourth (1097B) is a
  real-word case the brief rules is Migne's until a plate says otherwise.
- **No tei-patch written**, though §3a argues for one and states the exact find/replace. Patching
  requires re-chunking and a boundary check, which belongs to the merge.
- **No `data/citation-corrections.json` entries written** for the three misprinted citations of §3c,
  for the same reason: the printed forms stand verbatim in the text and the *index* is where they are
  resolved. All three are identified from the quoted text and never from the numeral.
- **`[cn:]`: a checked zero for this range**, consistent with the work's own spot check.
- **For the merge, the two things most likely to need reconciling with the peers' halves:** (1) the
  ***fatuus*/*stultus* collision** — both are "fool" here and 1097B prints them together, so if a
  peer has held them apart with two English words, mine is the half that should move; and (2) the
  **clipped-lemma expansion split** in §1d, which lists **both** classes on purpose, so that a later
  reader does not mistake the deliberate split for drift. Nothing in the peers' chunks was read or
  altered; I read `cruces-0000.md` only, and only for its vocabulary table.
