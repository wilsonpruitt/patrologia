# Cruces — 8956 *Liber Isaiae prophetae*, chunks 0030–0034 (cols 1305C–1316C)

The last stint of the work: Isa. LXII–LXVI, to the end of the book. Stint-scoped; the
orchestrator merges this into `cruces.md`.

**Span count:** the brief lists **248** spans for chunks 0030–0034; my own Latin gives **248**
whole-file and **248** paragraph-bounded, with **0 `«` and 0 `»`** — so the two counts agree for
the reason `8956-CONVENTIONS.md` §2 gives (this work sets no guillemets at all), not by two
errors cancelling.

**Plates:** all six leaves read, printed corner numbers checked first on every one — Gallica
f653 (1305/1306), f654 (1307/1308), f655 (1309/1310), f656 (1311/1312), f657 (1313/1314), f658
(1315/1316). Second witness archive.org pp. 658, 659, 661, 662, 663. Details in
`data/briefs/8956-PLATE-READS-0030.json`; our-side losses in
`data/briefs/8956-PENDING-TEI-PATCHES-0030.md`.

---

## 1. Vulgate divergences — the collation, in column order

Every lemma and every quoted proof-text in the range was collated word by word against
`sources/vulgate/clementine-flat.txt`. **Twenty-six `[var:]` markers fired, over twenty-four distinct sites** (Lc 12:49 fires at both of its occurrences, and Is 66:1 is noted at 1307D against its clean occurrence at 1312A). The Clementine was sound
Latin at every site touched here; the `cornonabit` defect at Is 22:18 does not fall in this
range.

### Fired as `[var:]`

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 1305C, 1308B | Lc 12:49 *…nisi ut **ardeat**?* | *nisi ut **accendatur**?* | ⭐ **the proof-text loses the lemma's own word.** The lemma under exposition is Is 62:1 *Lampas **accendatur***, and the Vulgate's Luke would have repeated *accendatur* exactly. Migne's *ardeat* breaks the catchword the gloss was built on. **Quoted twice in the range and divergent in both places** (1305C bare, 1308B with `[n: (Luc. XII.)]`) — collated separately, identical. |
| 1305D | Eph 5:32 *Sacramentum hoc magnum est **in Christo et in Ecclesia*** | *…est, **ego autem dico** in Christo et in Ecclesia* | Paul says "but *I* speak in Christ and in the Church"; Migne's form makes the great sacrament flatly *be* in Christ and the Church, which is what the gloss on Is 62:5 wants of it. |
| 1305D | Hbr 1:14 ***Omnes** administratorii spiritus **sunt**, propter eos missi, qui haereditatem **capiunt** salutis* | ***Nonne** omnes **sunt** administratorii spiritus, **in ministerium** missi propter eos, qui haereditatem **capient** salutis?* | three at once: a rhetorical question flattened to an assertion, *in ministerium* dropped, future *capient* → present *capiunt*. The gloss needs the assertion: angels *are* the guards of the Church's walls. |
| 1306C | Is 62:12 *Et vocabunt **eum*** | *Et vocabunt **eos*** | singular for plural. Migne knows it is a variant and says so in the next words (*Sic enim quidam codices habent*), but the reading still differs from the Clementine and the whole second-person expansion (*Vos estis populus sanctus, vos estis redempti*) hangs on it. |
| 1307A | Job 19 ***Omnes amici mei dereliquerunt me**, et noti mei quasi alieni recesserunt a me* | 19:13 ***Fratres meos longe fecit a me**, et noti mei…* | the second half is Job 19:13 verbatim; the first half is not in the Clementine at all and answers rather to 19:14 *Dereliquerunt me propinqui mei*. Two verses welded, cited as one. |
| 1307B | Dn 10:21 *nemo est adjutor nisi Michael princeps vester, **qui astat pro filiis populi mei*** | 10:21 *nemo est adjutor **meus in omnibus his**, nisi Michael princeps vester* | ⭐ **two verses conflated inside one span, uncited.** The closing clause is **Dn 12:1** (*qui stat pro filiis populi **tui***) — and the possessive has flipped from *tui* to *mei*, so the speaker changes. |
| 1307B | Ps 105:16 ***Exacerbaverunt** Moysen in castris, **et** Aaron sanctum Domini* | *Et **irritaverunt** Moysen in castris; Aaron, sanctum Domini* | *exacerbaverunt* echoes the lemma Is 63:10 *ad iracundiam provocaverunt*, which *irritaverunt* would not. |
| 1307C | Zach 2:8 *Qui vos tangit, **quasi qui** tangit pupillam oculi mei* | *qui enim tetigerit vos, **tangit** pupillam oculi mei* | Migne's *quasi* turns an identity into a comparison — he *is as one who* touches, rather than *does* touch. |
| 1307D | *Et praecedet te angelus meus* cited **(Exod. XIV)** | Ex 23:20 *Ecce ego mittam angelum meum, qui praecedat te*; Ex 32:34 *angelus meus praecedet te*; **Ex 14:19** *angelus Dei, qui praecedebat castra Israel* | the wording belongs to Ex 32:34, the chapter cited has different wording. |
| 1307D | Jr 23:24 *Coelum et terram ego impleo* | ***Numquid non** caelum et terram ego impleo?* | a question with a double negative flattened to a bare assertion. |
| 1307D | Is 66:1 quoted as ***Coelum mihi sedes*** | Is 66:1 *Caelum **sedes mea*** (the Act 7:49 form is *Caelum mihi sedes est*) | ⭐⭐ **the same verse quoted twice in this range, divergent in one place only.** At 1307D it is cited to Isaiah but quoted in the wording of **Acts 7:49**; at **1312A** the same verse is quoted in its Isaian form, *Caelum sedes mea, terra autem scabellum pedum meorum*, exact — and it is the 1312A occurrence that the commentary on CAPUT LXVI then expounds. |
| 1308B | Mt 12:24 ***In principe daemoniorum Beelzebub ejicit daemones*** | *Hic **non** ejicit daemones **nisi** in Beelzebub principe daemoniorum* | the Vulgate's *non… nisi* frame is gone and the sentence is a flat affirmative. Migne's is what the gloss needs (the Jews *will* blaspheme thus); the English carries no negation here because the Latin prints none. |
| 1308C | Jo 17:3 *ut cognoscant te **verum Deum*** | *ut cognoscant te, **solum Deum verum*** | *solum* is dropped in a gloss whose declared subject is *cognitionem sanctae Trinitatis*. |
| 1309C | Is 42:14 ***Tacui, semper silui**, patiens fui* | ***Tacui semper, silui**, patiens fui* | the comma has moved one word, so the adverb changes verbs: "I have been silent, I have *always* held my peace" for "I have *always* been silent, I have held my peace." Rendered as pointed (Pattern 8). |
| 1310A | Is 65:9 *Montes **sanctos** meos* | *possidentem **montes meos*** | *sanctos* is not in the verse — and the gloss's whole move is the number of the mountains (*Septuaginta: Montem meum, scilicet Christum, qui est mons montium*). |
| 1310B | Ps 28:9 ***Dominus** revelabit condensa **silvarum*** cited **(Psal. XVIII)** | *Vox Domini praeparantis cervos: et revelabit condensa* | *silvarum* is the word the gloss needs (robbers lurking in woods) and the Clementine does not have it; the subject has also changed from *vox Domini* to *Dominus*. Cited to Ps 18. |
| 1311D | 1Thes 2:19 ***Quod** enim **est gaudium nostrum** aut corona gloriae, nonne vos* cited **(II Thes. II)** | ***Quae** est enim **nostra spes aut gaudium**, aut corona gloriae? nonne vos* | *spes* is dropped and the gender of the interrogative changes with it. |
| 1312C | Dt 23:18 *Non offeres **in domo Dei tui** mercedem **meretricis**, neque pretium canis* | *Non offeres mercedem **prostibuli**, nec pretium canis **in domo Domini Dei tui*** | ⭐ **the gloss turns on Migne's divergent word.** The next sentence is *Et bene canis et **meretrix** copulantur, quia similiter libidinantur* — the argument's keyword is in Migne's quotation and not in the Vulgate's. *Domini* is also dropped from *in domo Domini Dei tui*. |
| 1313D | Rm 12:1 *ut exhibeatis **corda** vestra* | *ut exhibeatis **corpora** vestra hostiam viventem* | hearts for bodies, in a paragraph about nursing and sustaining. |
| 1314B | Am 9:10 ***Gladio Dei peribunt** omnes peccatores* | ***In gladio morientur** omnes peccatores **populi mei*** | the sword is made God's own, which is the gloss (*Gladio. Sententia*); *populi mei* is dropped. |
| 1314D | Is 34:5 *Inebriatus est in coelo gladius meus, ***et usque ad terram descendit*** | *Quoniam inebriatus est in caelo gladius meus; **ecce super Idumaeam descendet**…* | Isaiah quoted against Isaiah, and the second half is replaced outright. |
| 1315B | 1Cor 3:16 *Templum Dei estis et **Spiritus sanctus** habitat in vobis* cited **(II Cor. VI)** | 1Cor 3:16 *…et **Spiritus Dei** habitat in vobis*; 2Cor 6:16 *vos enim estis templum Dei **vivi*** | the wording is First Corinthians with *Spiritus sanctus* for *Spiritus Dei*, under a Second Corinthians citation. |
| 1315B | Gal 6:2 ***Invicem** onera vestra portate* | ***Alter alterius** onera portate* | a different Latin idiom for the same sense; the whole lemma *In carrucis* is being read as mutual bearing. |
| 1316B | Pr 25:20 *Sicut tinea **comedit vestimentum**, et vermis **corrodit lignum**, **et ignis devorat ligna**, sic **moeror et tristitia excruciat cor viri*** | *Sicut tinea **vestimento**, et vermis **ligno**, ita **tristitia viri nocet cordi*** | ⭐⭐ **the largest divergence in the range, and it lands on the book's last verse.** The Vulgate's verbless comparison acquires three verbs, and an entire third member — *et ignis devorat ligna* — that the Clementine does not have. That added member is exactly the second half of the lemma, Is 66:24 *ignis eorum non extinguetur*: the proof-text has been made to carry both the worm and the fire. |
| 1316C | Apc 6:10 *Usquequo, Domine, non vindicas sanguinem nostrum* | *Usquequo Domine **(sanctus et verus), non judicas, et** non vindicas sanguinem nostrum **de iis qui habitant in terra***? | compressed; one of the two *non* clauses is gone. |

### Collated, divergent, and NOT marked — crux only

- **1305D Eph 5:31** *Propter hoc relinquet homo patrem et matrem*, cited **(Gen. II; Matth. XIX)**.
  The wording is **Ephesians** 5:31 exactly (minus *suam*); Gen 2:24 has *relinquet* but not
  *Propter hoc*, Mt 19:5 has *Propter hoc* but *dimittet*. Migne's citation stands verbatim.
- **1306B Jo 6:56** *Caro mea vere est cibus* for *Caro **enim** mea…* — a dropped particle.
- **1310A Rom 9:29** *quasi Sodoma* for *sicut Sodoma*.
- **1310B Rom 8:15** *spiritum adoptionis filiorum **Dei***, cited **(Rom. IX)** for Rom 8.
- **1311A Jo 14:6** *Ego sum via, veritas et vita* for *via, **et** veritas, **et** vita*.
- **1311C Pr 3:18** *qui **apprehenderunt** eam* for *apprehenderint*.
- **1311C Ps 125:6** *quia venient cum exsultatione* for *Venientes autem venient*.
- **1312C Jo 9:22** *conspiraverant* (pluperfect) for *conspiraverunt*, and *confiteretur Christum*
  for *eum confiteretur esse Christum*.
- **1312C / 1314C 1Cor 5:7** quoted **twice**: at 1312C without *Etenim*, at 1314C with it,
  matching the Clementine. Only the first occurrence diverges, and nothing in either gloss turns
  on the particle.
- **1313A Ps 64:6** *Spes omnium finium terrae et in mari longe* — verbatim, cited **(Psal. LXXIV)**.
- **1313A Rom 8:35** *Quis nos separabit* for *Quis **ergo** nos separabit*.
- **1314D Mt 28:19** *Ite, docete omnes gentes* for *euntes **ergo** docete*.
- **1315B 1Cor 3:17** *Templum Dei sanctum est* for *Templum **enim** Dei sanctum est*.
- **1311B / 1311B Is 65:20** quoted twice, the second time truncated by Gregory
  (*Puer centum annorum. Et peccator centum annorum.*) with the verbs left off; not a divergence.
- **Migne's mis-citations reproduced verbatim, per the standing rule** — six in this range:
  (Gen. II; Matth. XIX) for Eph 5, (Exod. XIV) for Ex 32:34, (Psal. XVIII) for Ps 28,
  (Rom. IX) for Rom 8:15, (Psal. LXXIV) for Ps 64, (II Thes. II) for 1Thes 2, (II Cor. VI) for
  1Cor 3:16. None corrected.

---

## 2. Plate findings

### 2.1 Three `[sic:]` candidates opened on the archive BEFORE firing, and all three withdrawn

The brief's instruction paid for itself three times over. Each of these is a well-formed defect
on the Gallica exemplar with our TEI agreeing — the exact shape that fires a marker — and each is
clean on the second printing.

- **1312C** Gallica `a **Chrito** Christiani dicti`; archive (p.661, 300 dpi) `a **Christo**`.
- **1313D** Gallica `Obsecro vos, **fatres**`; archive (p.662, 300 dpi) `**fratres**`.
- **1315A** Gallica breaks `meridia` / `nam` with **no hyphen**, which reads as Pattern 10 split
  type; archive (p.663, 300 dpi) prints `meridia-` **with** the hyphen. Ordinary line break.

**No marker fired at any of the three.** The English renders the sense at all three sites, and
the pending-patches file records them so a later pass does not re-open them.

### 2.2 Readings confirmed as Migne's on both printings, and kept

- **1306C `Videtur tamen AUGUSTUS dicere super Genesim`.** Not *Augustinus*, on Gallica f653
  **and** archive p.658. A perfectly good Latin name, so nothing is broken and `[sic:]` has
  nothing to wrap — but the English then says that the emperor Augustus wrote on Genesis, while
  the sentence is contrasting him with *Hieronymus* two lines below and pointing at *De Genesi ad
  litteram*. Pattern 18: the printed word is rendered and
  `[cj: *Augustus*; read *Augustinus*, "Augustine"]` stands beside it.
- **1309C `Omnis haereticus Deum ad iracundiam PROCAT`.** The lemma it glosses (Is 65:3) reads
  *provocat*. The plate hyphenates `pro-` / `cat` across a line, so no letters are hidden: the
  form really is *procat*, a real verb ("solicits, demands"). Rendered "solicits" with
  `[cj: *procat*; read *provocat*, "provokes"]`.
- **1310B–C `Ubi ACHOR filius Charmi de spoliis Jericho furatus… periit`.** Jos 7 names the man
  **Achan** and the valley **Achor**; Migne gives the man the valley's name, twice, and then
  derives the place-name from him. On the plate. Rendered "Achor" — **not** normalised.
- **1313A the dittography** — see §2.3.
- **Punctuation, four sites, each checked rather than assumed:** 1312C
  `…praeponentes Pars autem populi` has **no stop** before the capital; 1314A `scripsere naturis`
  and `per quem omnia operatur` each end with **no terminal stop**; 1309B `Allegorice.` carries
  its stop. All four are on the plate and all four ride into the English unaltered (Pattern 8).

### 2.3 1313A — a doubling that varies, marked on the FIRST copy (Pattern 11a)

The plate prints, in italic, `*reddentis reddentes retributionem inimicis suis*` — confirmed on
**both** printings, with no punctuation between the two words (the speck above the second is
dirt, checked at 1900 px).

Position tells nothing here, so 11a governs: **the intrusive copy is the one whose removal leaves
the passage saying what the author is arguing.** The frame is *Vox etiam Domini audita est in
Romanis exsultantibus, **qui** etiam nutu Dei **venerunt**, … scilicet Judaeis, per Romanos* — a
nominative plural subject, which *reddentes* agrees with and *reddentis* cannot. *reddentis* is
the genitive singular of the Vulgate lemma itself (Is 66:6 *vox Domini **reddentis**
retributionem inimicis suis*), i.e. the compositor's eye has gone back to the verse. **So the
marker sits on the first copy**, and the English reads `[d: rendering] rendering the recompense
to his enemies`.

### 2.4 Candidates refuted at the plate, no marker, no patch

- **1305C `impe dio`** on Gallica reads **`impendio`** on archive p.658, as our TEI has it.
- **1312D `in praesen i.`** on Gallica reads **`in praesenti`** on archive p.661.
- **1314C `my-` / `teria`** is an ordinary line break: the next line begins `steria veritatis`,
  so the word is **`mysteria`**, as our TEI has it.
- **1307D `(Jer. XXIII)`** — the archive prints `(Jer. XVIII)`; **Gallica is right** and our TEI
  follows it. A jbig2 digit substitution, exactly the class `PL113-WITNESS-ENCODING.md` predicts.
- **Band letters.** Cols 1315 and 1316 carry **A, B, C and no D**, because the work stops two
  thirds down the page. Not a gap (known false positive 1).

### 2.5 The last page — what it carries, and what it does not

The work ends at **1316C**, *agentes gratias visa impiorum ineffabili poena.* Checked for
everything a last page can carry:

- **No colophon, no subscription, no EXPLICIT, no editor's closing note** for the Glossa.
- Below a full-measure rule the leaf carries **the tome's own table of contents**, `ORDO RERUM
  QUAE IN HOC TOMO CONTINENTUR` — which is also the running head already printed at the *top* of
  this leaf, so the head has changed over before the work has ended. It closes `FINIS TOMI
  CENTESIMI DECIMI TERTII.`
- ⭐ **The two printings diverge inside that table.** Gallica prints `0000` against *Liber
  Ecclesiastes*, *Canticum canticorum* and *Liber Ecclesiastici*, and `0090` against *Liber
  Sapientiae* — unset placeholders. The archive prints `1115`, `1125`, `1183` and `1167`. Both
  print `1231` against *Prophetia Isaiae*, which is this work's true opening column. So the
  Gallica copy is from a state of the sheet in which four references had not yet been set, and
  the archive from the corrected state. (Recorded as a fact about the tome, not about our text.)
- The archive alone carries a printer's imprint below the FINIS line, *Imprimerie générale de
  Châtillon-sur-Seine. — Jeanne Robert.*; the Gallica copy's foot below FINIS is blank.
- **Foot of both columns blank on both printings** — no numbered *Forte* layer, no asterisk
  cross-reference layer. A checked zero on the final page as on the other five, consistent with
  `8956-CONVENTIONS.md` §2.

---

## 3. Sense and construction cruces

- **1311D, Is 65:24, `In conturbatione, in dolore mentis, sed in gaudio et laetitia`.** ⭐ **The
  page contradicts itself and the English says so.** The lemma being glossed is Is 65:23 *neque
  generabunt **in conturbatione***, and the *sed* demands that the first two members be denied —
  but **Migne prints no negation**, on the plate, and it is the same on the archive. Rendered as
  printed ("In trouble, in grief of mind, but in joy and gladness"). Pattern 7a: the missing *non*
  is the evidence, and supplying it would destroy it. The conjecture is recorded here and is not
  in the text.
- **1309C, `et in quadrum exstruere, et secti in latere pulveris roborare lineis`.** The tail of an
  *usque ad* abridgment of Jerome and it will not construe cleanly. Rendered as closely as the
  printed words allow ("to build four-square, and to strengthen with lines the dust cut upon the
  brick"), taking *latere* as the ablative of *later*, brick, which the lemma Is 65:3 *sacrificant
  super lateres* supports.
- **1314D, `Quae secundum apostolorum non solum hominum, etc.`** The noun governed by
  *apostolorum* is simply absent; the sense wanted is 1Cor 13:1 *linguis hominum… et angelorum*.
  Rendered with the gap left open ("Which according to the apostles', not only of men, etc.")
  rather than filled. No marker: nothing is broken type, and there is no single word to conjecture.
- **1314A, `multitudinem viventium ad fidem`.** *venientium* ("coming to the faith") is the obvious
  sense and *viventium* is a real participle that just about carries "living unto the faith".
  Rendered as printed; the conjecture is declined under 18a's bar, since the English asserts
  nothing false.
- **1309C `sed per verba nostra; Dei intelligimus affectum erga nos`** — Migne's semicolon falls
  inside what English wants as one clause. Kept where he puts it (Pattern 8).
- **1313B `creabo mihi… Ecclesiam unam quae aedificatur de vivis lapidibus:`** ends on a colon with
  nothing after it; the colon rides into the English.
- **1313B `Ego qui omnes creavi homines in nihilo`** — *in nihilo* for *ex nihilo* is ordinary
  medieval usage (Pattern 9); translated normally, no marker.
- **1308D and 1316A — the same etymology, two different languages.** At 1308D Migne writes *Mene
  **Hebraice**, Luna Latine*; at 1316A, of the same word, *Mene **Graece**, Latine luna*. Both are
  on the plate. Neither is emended and neither is harmonised to the other; the English keeps
  *Mene* and *luna* in Latin at both sites so the gloss still explains something.
- **1310B–C `vallis effundens sanguinem` / `vallis fundens sanguinem`** — Migne gives the
  interpretation of *Saronas* twice, with and without the prefix. Both on the plate, both rendered
  ("pouring out" / "shedding").
- **1312A `Caelum sedes mea`** — our file's one *Caelum* in a work that otherwise spells *Coelum*;
  the plate has *Coelum*. English unaffected; patch filed.
- **Agency read back, per the 8961 warning.** Six passives and ablative absolutes in the range were
  re-read for who acts: 1312B *quod humana manus construxit* (a human hand builds, not God);
  1312D *Romanis urbem irrumpentibus* (the Romans burst in); 1314B *quo purgabitur quid in bonis
  erit purgandum* (the fire purges, the good are purged); 1315A *Domino qui per illos figuratur*
  (the Lord is figured by David and Solomon, not they by him); 1316A *a sole… lumen recipit* (the
  moon receives from the sun); 1316C *boni videbunt eos… separatos* (the good see, the wicked are
  separated). All six construe as rendered.

## 4. Chunks read and found clean

Reported so this file can be told from one written by a reader who did not read.

- **0030** (1305C–1308A) — 66 spans, 11 anchors, 28 notes. Every word collated against Gallica
  f653 and f654 and against archive pp. 658–659. Clean apart from the sites above.
- **0031** (1308B–1309B) — 32 spans, 5 anchors, 14 notes. Collated against f654 and f655 and
  against archive p.659. **No plate/TEI divergence anywhere in the chunk**; its only findings are
  the three Vulgate `[var:]` at 1308B and 1308C.
- **0032** (1309C–1312A) — 68 spans, 10 anchors, 24 notes. Collated against f655 and f656.
  **Col 1309 and col 1310 are entirely clean at the plate** — every word of both columns agrees
  with our TEI, including the three readings that most invited a marker (*procat*, *Achor*, the
  *effundens*/*fundens* doublet), all three of which are Migne's.
- **0033** (1312B–1316B) — 76 spans, 16 anchors, 29 notes. Collated against f656, f657, f658 and
  against archive pp. 661–663. Carries the two withdrawn `[sic:]` candidates, the dittography, and
  four of the seven our-side patches.
- **0034** (1316C) — 6 spans, 1 anchor, 3 notes. Collated against f658 and archive p.663; the
  Latin agrees with both printings word for word. Two `[var:]`, no defects.

`verify-english 8956` passes over all 35 chunks: columns, notes and sections aligned, no
duplicate paragraphs. English/Latin word ratios: 1.46 · 1.52 · 1.46 · 1.50 · 1.45 (marker
contents excluded), against the register's ~1.5× expectation.
