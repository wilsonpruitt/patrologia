# Cruces — 11638 Philip of Harvengt, *Moralitates in Cantica canticorum*, chunks 0012–0017 (cols 0518C–0537B)

Agent 3 of six. Range 0012–0017 straddles the work's **quotation-typography seam**;
see §1, which is the section the merge must read first.

---

## 0. Terminology decisions (for the required cross-agent merge)

Set at first occurrence in this range and held throughout it. Where another
agent's range fixed a different English for the same Latin, the merge (runbook
step 4) must pick one — *within* a work there is one voice.

| Latin | English used here | note |
|---|---|---|
| *Sponsus* / *Sponsa* | Bridegroom / Bride | capitalized throughout |
| *thronus* · *sedes* · *sedile* | throne · seat · seat | *sedes*/*sedile* both "seat"; the pun in 0012 (*Anima justi sedes est sapientiae*) needs it |
| *ebur, eburneus* | ivory, of ivory / ivory | |
| *moralitas*, *moraliter* | the moral sense, morally | head *AD MORALITEM* (see §3) rendered "to the moral sense" |
| *RECAPITULATIO A SUPERIORIBUS* | RECAPITULATION FROM WHAT IS ABOVE | fixed head formula, 0012/0013/0015/0016/0017 |
| *mores* | morals | never "manners"; *bene morigeratus* = "well-mannered" |
| *amor* / *dilectio*; *amare* / *diligere* | love / esteem; to love / to esteem | 0012 needs the pair kept distinct (four lions) |
| *misericordia* / *misericors* | mercy / merciful | left in Latin italics where the *eleos* etymology is the gloss (0015, 0016) |
| *oleum splendoris* | the oil of splendour | see the Zech. IV divergence, §4 — the whole argument of 0015–0016 rests on a word the Vulgate does not print |
| *cornu* | horn | |
| *vinea* · *labruscae* · *torcular* | vineyard · wild grapes · winepress | |
| *Synagoga* | the Synagogue | feminine ("she"), following the Latin's *Sponsa expulsa* |
| *Dei Genitrix* | Mother of God | |
| *adolescentulae* | maidens | fixed across the *Oleum effusum* lemma, which recurs ~10× in 0014/0017 |
| *gallus gallinaceus* | a cock | Isa. XXII; kept as the Vulgate's own odd phrase |
| *paterfamilias* | householder | |
| *conversio*, *conversi* | conversion, converts | monastic sense; not "conversion" glossed |

**Second person (Pattern 17).** The whole range is singular except inside
plural quotations, and is rendered *thou/thee/thy* accordingly: the reader
addressed in 0012 and 0016 (*Quicunque … legis vel audis*, *Recordari debes,
qui haec audis*), the Virgin in 0013 (*Domina mea*), the Bridegroom in 0014 and
0015, Sobna and Pilate in 0016. Plural *vos* takes *you* even mid-page:
*Estote misericordes … Pater vester* (0015), *Ergo vos elegi de mundo … fructus
vester* (0015), *Dei agricultura estis* (0015), *Vos qui secuti estis me*
(0015), *Nescitis … ?* (0015), *Si semen Abrahae estis … vultis me interficere*
(0016), *Vos autem virum homicidam … petiistis* (0016), *filii vestri in quo
ejiciunt* (0016), *Non regnet peccatum in vestro mortali corpore … exhibuistis
membra vestra* (0017). Note 0016's Pilate quotation: *Si hunc dimittis, non es
amicus Caesaris* is **singular** ("If thou release this man, thou art no friend
of Caesar") sitting two lines from the plural *Crucifige eum* crowd — the
number distinction is visible with no apparatus, which is the point of the rule.

---

## 1. ⚠ THE TYPOGRAPHY SEAM — where this work changes how it marks quotations

**The seam falls between chunk 0013 and chunk 0014, i.e. at the end of the
second book and the opening of the third: col. 0523 (the *Explicit secundus
tomus*) / col. 0523B (the *INCIPIT TERTIUS TOMUS*).**

Measured on the Latin twins in this range (body only):

| chunk | cols | italic quotations | « » pairs |
|---|---|---|---|
| 0012 | 0518C–0519B | 3 | 0 |
| 0013 | 0519C–0523 | 15 | 1 |
| **0014** | **0523B–0524D** | 3 | **6** |
| 0015 | 0525A–0528D | 6 | 29 |
| 0016 | 0529A–0532D | 3 | 21 open / 20 close |
| 0017 | 0533A–0537B | 1 | 26 |

Two further facts the merge needs:

- **The changeover is a BOOK boundary, not a column boundary.** Books I–II
  (chunks 0000–0013) mark scripture with italics; Book III (0014 on) marks it
  with guillemets. The single « » in 0013 is not a precursor: it is the
  *Sub tuam protectionem* antiphon at col. 0520B — a **liturgical** text, not
  scripture, which is exactly the class Migne guillemets even in the italic
  books. The single italic run left in 0017 is likewise not scripture but a
  printed locator, *(Exod. [0533D] XXVII)*.
- **After the seam the two systems coexist by FUNCTION, not by drift.**
  Guillemets carry the quotation; italics inside the range now carry (a) Greek
  and Latin words discussed *as words* — *Eleos*, *Oleos*, *misericordia*,
  *misericors* — and (b) Migne's marginal page numbers *303*–*313*, and (c) one
  scripture lemma nested *inside* a guillemet quotation (0016, Sap. III inside
  the Augustine extract). Nothing in this range was normalized in either
  direction; guillemet parity against the Latin twin is 1:1 in all six chunks
  (`verify-english.mjs` clean).

**Do not harmonize across the seam at merge time.** Chunks 0000–0013 must keep
their italics and 0014–0034 their guillemets; the difference is Migne's plate,
and Pattern 6 makes it the reader's only cue to what the plate prints.

### 1a. Unclosed guillemet — 0016, col. 0532C–0532D

The Augustine extract *« Sciamus pro certo, quia post ascensionem Domini…* opens
at 0532C and **is never closed**; the chunk (and, in the Latin, the paragraph)
ends mid-quotation at *ad poenam aeternam.* Per Pattern 5's corollary the
English mirrors the plate: **no `»` supplied**. Latin twin: 21 open / 20 close;
English: 21 / 20. This is the work's own defect and must not be "fixed" at merge.

### 1b. Guillemets that swallow the author's own prose — 0015, 0016

Three times in this range Migne opens « on a scripture lemma and closes it many
lines later, after Philip's own commentary has run on inside the quotation:

- **0015 @0525A–0525B** — the Jer. XXXI lemma opens the quote, and *De hac
  nimirum ineffabili charitate Christi… Joannes apostolus dicit:* plus the whole
  I Joan. IV citation are inside it before the » falls.
- **0016 @0530A** — *« Vinea, inquit Isaias, facta est dilecto meo, in cornu
  filio olei.* then four sentences of Philip's own argument (*Quoniam quidem de
  vinea aliquantulum… restat nunc ut…*) and the whole Luc. IX voice-from-heaven
  quotation, all before the ».
- **0015 @0527B** — the bracketed lemma **[Et plantavit illam electam]** is
  Migne's own square brackets, not ours; see §3.

All three reproduced 1:1. They are Pattern 5 cases, and any "quotation count
differs" warning downstream is this, not an omission.

### 1c. `[n:]` inside the guillemets

In 0015–0017 the note marker almost always falls **inside** the closing » (e.g.
`… misericors est [n: (Luc. VI)]. »`). Reproduced where it stands, every time.

---

## 2. ⛔ VULGATE DIVERGENCES — the deliverable list

Every printed quotation in the range was read word by word against the Vulgate.
**34 `[var: …]` markers fired** (0013 ×5, 0014 ×1, 0015 ×10, 0016 ×11, 0017 ×7).
Below: first the ones that carry the argument, then the marked remainder, then
the divergences judged immaterial and left unmarked (logged so a later sweep is
not re-doing the work).

### 2a. Load-bearing — the exposition rests on the divergent word

1. **0015 @0525C and again @0528B, and the whole of 0015's closing argument —
   Zech. IV, 14.** Migne prints *« Isti sunt duo filii olei **splendoris**, qui
   assistunt dominatori universae terrae »*. The Vulgate has *duo filii olei*
   with **no *splendoris***. This is the single most consequential divergence in
   the range: at 0528B–0528D Philip builds an explicit argument on it —
   *Sciendum praeterea quod in Zacharia propheta amplius aliquid dicitur quam in
   Isaia… in Zacharia vero **cum additamento**, splendoris oleum nominatur* — and
   from that "addition" he derives the Father as the oil, the Son as the
   splendour of the oil, and a Trinitarian *splendor unus*. **The whole
   peroration of chunk 0015 is exegesis of a word the received text does not
   print.** Marked at the first occurrence only (0015 @0525C); the later
   occurrences are the same lemma re-quoted and are unmarked by design.
2. **0013 @0520A — Ps. XLIV, 7.** Migne: *« Thronus tuus, Deus, in saeculum
   saeculi »*; Vulg. *Sedes tua*. The entire chapter is an allegory of Solomon's
   **throne** applied to the Virgin, and it is introduced as *Tu es ille thronus
   de quo Psalmista dicit* — the proof-text supplies the word only because the
   plate reads *Thronus*. Conforming it to *Sedes* would have voided the proof.
3. **0013 @0519C — III Reg. X, 18.** Migne: *auro **clarissimo** nimis*; Vulg.
   *auro **fulvo** nimis*. The gold is glossed as the divinity, and the Virgin is
   then called *omni claritate et splendore solis clarior* — *clarissimo* is
   picked up, *fulvo* is not.
4. **0015 @0527C — Prov. XVIII, 10.** Migne: *ad eam **confugiet** justus, et
   **salvabitur***; Vulg. *ad ipsum **currit** justus et **exaltabitur***. The
   gloss that follows is *Homines namque ideo ad turrim **confugiunt**… in qua
   homines **salvantur*** — both of Philip's verbs come from Migne's reading, and
   neither from the Vulgate's.
5. **0017 @0536B — Ezech. XV, 2.** Migne: *quod **pretiosum** est prae caeteris
   lignis silvarum*; Vulg. *ex omnibus lignis nemorum quae sunt inter ligna
   silvarum*, with no *pretiosum*. The vine-simile turns on the comparative
   *quanto prius exstitit charior, **pretiosior**…* two lines earlier.
6. **0016 @0532B — Prov. XXXI, 23.** Migne: *Nobilis in portis vir **sanctae
   Ecclesiae**, cum sederit cum senatoribus **populi sui***; Vulg. *vir **ejus**,
   quando sederit cum senatoribus **terrae***. The ecclesial reading is written
   *into the lemma itself*, and Philip then observes that Solomon "names them the
   senators of the people" — a claim true only of this text.
7. **0015 @0526B — Luc. I, 69.** Migne: *Erexit cornu salutis in domo David*;
   Vulg. *erexit cornu salutis **nobis** in domo David*. Philip's own next
   sentence reads *hoc est cornu salutis quod erectum est **nobis*** — he knows
   the fuller text; the plate's lemma has lost it.

### 2b. Marked, material but not load-bearing

- **0013 @0521A, Deut. XXI, 23** — *Maledictus … qui in ligno pendebit* vs Vulg.
  *maledictus a Deo est qui pendet in ligno* (future for present; *a Deo* absent).
- **0013 @0521B, Prov. XXV, 11** — *verbum prolatum in tempore suo* vs Vulg. *qui
  loquitur verbum in tempore suo*. NB Migne prints *prolatum* **outside** the
  italic run; the three-run italic structure is reproduced exactly, and the gloss
  *Malum quippe **prolatum*** depends on it.
- **0013 @0522C, Luc. I, 30** — *apud **Dominum*** vs Vulg. *apud **Deum***
  (and *enim* dropped).
- **0014 @0523D, Isa. LIII** — *« Vulnera nostra sanavit »* is not Vulgate
  wording at all; Vulg. 53:5 *livore ejus sanati sumus*.
- **0015 @0525B, I Joan. IV** — *non quia nos dilexerimus **eum*** vs Vulg. 4:10
  *non quasi nos dilexerimus **Deum***, conflated with 4:12 *caritas ejus in
  nobis perfecta est*.
- **0015 @0526A, Luc. I, 68** — *Benedictus **Dominus** Deus Israel* vs Vulg.
  *Benedictus Deus Israel*; also *plebis suae* for *plebi suae*.
- **0015 @0526D, "Col. III"** — the text quoted is **Ephes. V, 25**, and diverges
  from it: *uxores **vestras***, ***sanctam** Ecclesiam*, *tradidit semetipsum
  **propter illam*** vs Vulg. *sicut et Christus dilexit ecclesiam et se ipsum
  tradidit **pro ea***. Marked for the wording only. **The misattribution to Col.
  III is NOT corrected** — printed references stand (and a following *Ibid.* chain
  must never be disturbed).
- **0015 @0526D, Cant. I, 14** — *Quam pulchra es … quam pulchra es* vs Vulg.
  *ecce tu pulchra es … ecce tu pulchra*. Philip's gloss (*repetendo duplicat*)
  survives either reading, so this is marked but not listed in 2a.
- **0015 @0527B, Joan. XV** — *Ergo vos elegi **de mundo** ut eatis* conflates
  15:16 with 15:19.
- **0015 @0527C, Act. IV, 12** — Migne adds a closing clause the Vulgate lacks:
  *nisi in nomine Domini nostri Jesu Christi*; and *in quo oporteat salvari* for
  *in quo oporteat nos salvos fieri*. The `nisi` is carried as "save" (Pattern 7a).
- **0015 @0527D, Isa. V, 3** — order reversed (*viri Juda et habitatores
  Jerusalem*) and the second *inter* dropped; the gloss *id est de vinea mea* is
  Philip's own and sits **inside** the guillemets.
- **0016 @0529A, "Luc. XX"** — the parable is quoted largely in **Matthew's**
  words (*Homo quidam **paterfamilias**… locavit eam **agricolis***) against a
  note reading Luc. XX; and the conspiracy speech (*Ecce hic est haeres: Iste
  igitur occidatur, et sic ad nos haereditas transferetur*) matches neither
  evangelist verbatim. Two markers.
- **0016 @0530A, Luc. IX, 35** — *Filius meus **dilectus** in quo mihi
  complacuit* vs Vulg. Luke's *Filius meus **electus***.
- **0016 @0530A, Cant. II, 16** — *qui pascitur **in liliis*** vs Vulg. *inter
  lilia*.
- **0016 @0530D, Isa. XXII** — 17 and 19 conflated into one sentence (expulsion
  *de statione tua* belongs to v. 19).
- **0016 @0530D–0531A, Jer. XXII, 24** — *Jeconias rex Juda sicut annulus
  **aureus** in manu **mea*** vs Vulg. *Jechonias filius Joachim rex Juda anulus
  in manu **dextera** mea*; and *evellam eum **et projiciam***, an added verb.
- **0016 @0531C, Joan. VIII** — *Si **semen** Abrahae estis* (from v. 37) welded
  to v. 39, and *utquid **vultis** me interficere* for *nunc autem quaeritis me
  interficere*.
- **0016 @0532A, Act. III, 15** — *auctorem vitae **morti tradidistis*** vs Vulg.
  *interfecistis*.
- **0016 @0532A, Matth. XII, 27** — *in **principe daemoniorum*** for *in
  Beelzebub*, plus *ut dicitis* imported from the Lucan parallel.
- **0016 @0532B, Isa. III, 14** — *cum **senioribus** populi sui* for *cum
  senibus populi sui et principibus ejus*; matters because the next sentence
  aligns *seniores* with Solomon's *senatores*.
- **0016 @0532C, Joan. XII, 26** — *Pater volo ut ubi ego sum, illic **sit** et
  minister meus* fuses Joan. XVII, 24's *Pater, volo ut* onto XII, 26's *ubi sum
  ego, illic et minister meus **erit***.
- **0017 @0534A, "Luc. VI"** — the sentence quoted is **Matth. VII, 18**'s (*Non
  potest arbor bona fructus malos facere*); Luke 6:43 reads *non est arbor bona
  quae facit fructus malos*.
- **0017 @0534A, Matth. XXV, 1** — *Simile **est*** for Vulg. *simile **erit***.
- **0017 @0534B, Isa. IX, 5** — *erit in combustionem ignis*, Vulg. *erit in
  combustionem **et cibus** ignis*.
- **0017 @0534B, Rom. VI, 19** — Migne prints the **infinitive** *ita nunc
  **exhibere** membra vestra* where the Vulgate has the imperative *exhibete*.
  Rendered as an infinitive ("so now to present your members"), which leaves the
  sentence without a main verb; that is the plate's state and is not repaired.
- **0017 @0535A, II Petr. I, 14** — *Scio, **fratres**, quod velox sit… **dignatus
  est revelare** mihi* vs Vulg. *certus quod velox est… **significavit** mihi*.
- **0017 @0535B, Rom. V, 5** — *per **inhabitantem Spiritum*** vs Vulg. *per
  Spiritum Sanctum*.

### 2c. Divergences examined and left UNMARKED (immaterial, or not scripture)

Recorded so that a later pass does not have to re-derive them.

- 0012 @0519A **Sap. VII** — *Anima justi sedes est sapientiae* **is not in the
  Vulgate at all**, at Wis. VII or elsewhere; it is a proverbial tag. No `[var:]`
  fired, because Pattern 14 compares *wordings of a cited verse* and there is no
  verse here to compare with; and Migne's reference is not ours to correct.
  Flagged for the indexer: this `[n:]` will not resolve to a real locus.
- 0013 @0519D *Exaltata es super choros angelorum ad coelestia regna* — introduced
  as *sicut scriptum est* but it is the Assumption **antiphon**, not scripture.
  Same treatment as above: translated, unmarked.
- 0013 @0520B *Sub tuam protectionem confugimus…* — the *Sub tuum praesidium*
  antiphon in an expanded form. Not scripture; the only « » in 0013 (see §1).
- 0013 @0521A *maledictus, sive maledicta quae non reliquerit semen in Israel* —
  no such Vulgate verse; Philip's own summary of the Mosaic law. The masculine /
  feminine doublet **has no English exponent** (Pattern 9) and is rendered
  "cursed is he, or cursed is she" so that both printed forms survive.
- 0013 @0521A **Eccli. XXIV, 12** — *Creator omnium* is fronted out of the earlier
  clause of the same verse; compression, not divergence.
- 0013 @0521B **Psal. XVIII, 6** — *procedens* dropped, but the host sentence
  supplies *processit*. Immaterial.
- 0013 @0521B **Cant. I, 12** — *Cum* for Vulg. *Dum esset rex*.
- 0014 @0523C **Philip. II, 9** — *Dedit Deus ei nomen* for *donavit illi nomen*;
  sense unchanged.
- 0014 @0523C **Rom. IX, 5** — first citation truncated (*est super omnia
  benedictus*, no *Deus*); the second, at 0524B, prints the full *qui est super
  omnia Deus benedictus*. Both rendered as printed.
- 0015 @0525B **Exod. XXVII, 20–21** — verbatim but for word order (*ardeat semper
  lucerna*).
- 0015 @0525C **Isa. V, 1–2** — verbatim, including the Vulgate's own difficult
  *in cornu filio olei*, which is rendered literally ("on a horn, the son of oil")
  because Philip's entire allegory parses it word by word.
- 0015 @0525D **Luc. VI, 36** — *ergo* dropped.
- 0015 @0527B **Cant. II, 15** — *vineas **nostras*** picks up *vinea nostra* from
  the following clause of the same verse.
- 0015 @0528A **Sap. III, 8** — *Judicabunt **sancti** nationes*, subject supplied
  from the context of the sentence introducing it.
- 0015 @0528C **Hebr. I, 3** — *gloriae* dropped from *splendor gloriae*.
- 0016 @0529A **Isa. V, 7** — *viri Juda* plural for Vulg. *vir Juda*.
- 0016 @0530D **Isa. V, 2** — *Elegit **Dominus** lapides ex illa*, subject supplied
  and the order changed.
- 0016 @0532A **Joan. XIX, 6** — *Crucifige eum* for the doubled *crucifige
  crucifige eum*.
- 0017 @0533D *Isti sunt viri misericordiae, quorum justitiae oblivionem ante Deum
  non acceperunt* — attributed to *beatus Paulus*, but it is **Eccli. XLIV, 10**
  (*viri misericordiae sunt quorum pietates non defuerunt*), and even then not
  verbatim. Migne prints **no quotation mark of any kind** here, so per Pattern 6
  the English supplies " " — ours, not his. Attribution left as printed.
- 0017 @0535A **Marc. VI** noted against *lucerna corporis tui… est oculus tuus*,
  which is Matth. VI, 22 / Luc. XI, 34. Reference untouched.
- 0017 @0536D **Deut. XXXII, 32/35** — both clauses verbatim; the connective
  *usque ad illum locum, ubi ex persona Dei ait* and the closing *subauditur, in
  die judicii quod merentur* are Philip's own and sit **inside** the guillemets.
- 0017 @0537A **Osee. VII** — vv. 11 and 9 conflated; both verbatim in themselves.
- 0017 @0537B **Psal. LIII, 5** — *quidem* added. **Prov. V, 9** — verbatim, in
  two pieces (*Ne des alienis honorem tuum* … *et annos tuos crudeli*), the second
  quoted separately with its own guillemets and its own *Ibid.* note; both
  reproduced as two quotations, not merged. **Joan. VIII, 44** — *Quia ipse* for
  *ille*.

---

## 3. Carried type, `[sic: …]` — five instances

Wrapped per Pattern 12; each is verbatim in the Latin twin (verifier check 9).

| chunk | col | printed | conjecture |
|---|---|---|---|
| 0013 | 0521A | *Flius* (in *in te moratus est Flius Dei*) | *Filius*; near-certain |
| 0016 | 0532A | *subseqnentibus* | *subsequentibus*; near-certain |
| 0016 | 0532C | *Domiuus* (in *Unde Domiuus ipse in Evangelio*) | *Dominus*; near-certain |
| 0017 | 0534A | *cuibus* (in *membra, cuibus nostra anima induitur*) | *quibus*; near-certain |
| 0017 | 0534C | *Potera* (in *Potera namque idem propheta … dicere*) | *Poterat*; near-certain. Carrying it leaves the English without a finite verb, which is the plate's own state |

**Deliberately NOT marked** (Pattern 12's boundary — a real word merely wrong is
rendered, not carried):

- **0016 @0530C — *Oleos* for *Eleos*.** At 0525D the plate prints *Eleos*
  siquidem Graece; at 0530C the same etymology is reintroduced as *Oleos enim
  Graece, misericordia Latine dicitur*. **This is the most interesting reading in
  the range and it is not a `[sic:]`:** the transliterated Greek is already
  carried in italics untranslated on both occasions, so a marker on one and not
  the other would blame the plate for what is, in form, the same operation — and
  *Oleos* is precisely the contamination the argument invites, since Philip is
  punning *oleum* against ἔλεος across four columns. Rendered as printed, both
  times, and logged here. **A reviewer who "fixes" 0530C to *Eleos* has destroyed
  the evidence.**
- **0015 @0528B — *qui **assistant** Dominatori***, subjunctive, against
  *assistunt* in the same lemma at 0525C. A mood difference with **no English
  exponent** in a relative clause (Pattern 9); rendered "who stand before" and
  logged, not marked, not emended.
- **0013 @0523A — *liber Regnum*** for *liber Regnorum*. A real (if wrong) form;
  rendered "the book of Kings."
- **0017 @0534D — *offeret*** (future) where *offert* is expected; rendered as a
  future ("which it will offer").
- **0013 @0519D — *omnia esse mea possent loqui***. *esse* is almost certainly
  for *essent*/*entia*; rendered "all that is mine could speak", logged.

---

## 4. Punctuation and capitalization carried from the plate (Pattern 8)

Migne's stops are reproduced, including where they break a sentence. **Where the
plate prints a full stop followed by a lower-case word, the English keeps the
lower case**, because that is what makes the misplaced stop visible on our page;
this is a per-range convention and the merge should extend or reverse it work-wide,
not leave it split.

- **0012 @0519A–0519B** — the twelve sacraments are listed with two internal full
  stops (*…catholicae fidei. susceptio sacri baptismi, communicatio corporis et
  sanguinis Christi. confessio…*). Kept.
- **0013 @0519D** — *quia sicut scriptum est.* followed by the antiphon. Kept.
- **0013 @0520D–0521A** — *Sicut enim Filius ejus maledictum legis … incurrit.
  Maledictus nempe, ait Moyses…* The stop severs the *sicut … sic* correlation;
  kept, and the English reads as the plate does.
- **0014 @0523D** — *Adhibitum igni sedentibus in tenebris lumen donat. et
  Christus…* Kept, lower-case *and*.
- **0015 @0526D–0527A** — *sanctam Ecclesiam sepivit? vinea nempe vocatur…* Kept.
- **0015 @0528A** — inside the Matth. XIX quotation: *sedebitis super sedes
  duodecim. judicantes duodecim tribus Israel*. Kept, lower-case "judging".
- **0016 @0529A** — *ejecisti gentes, et plantasti, eam*: the stray comma before
  *eam* kept.
- **0017 @0533A** — *Enim vero si tandiu volumus exspectare loqui de bono, donec
  simus boni; vel si tandiu de perfectione tacemus donec perfecti simus.* A
  protasis with **no apodosis**; the sentence simply stops. Rendered as printed,
  nothing supplied.

**Migne's own square brackets** at 0015 @0527B — *[Et plantavit illam electam]* —
are his, not ours. Reproduced as brackets; the content is **translated** (unlike
`[ *al.,* …]` variant readings, which stay Latin), because it is a scripture lemma
the next clause expounds, not apparatus. Flagged for the merge in case another
agent met the same construction.

**Marginal page numbers** *303* (0012), *304* *305* (0013), *306* (0014), *307*
*308* (0015), *309* *310* (0016), *311* *312* *313* (0017) are printed in italics
mid-sentence and are reproduced verbatim in position, untranslated. They are the
reason a naive italic-extraction of this work over-counts italic quotations.

---

## 5. Passages that do not construe — rendered literally, conjecture here only

1. **0012 @0518D–0519A.** *Et quoniam thronus rotundus dicitur fuisse, manifeste
   indicat quia thronus Dei desiderat esse, omni perfectioni studeat, mentem et
   linguam corpusque ab omni peccato custodiat.* There is no subject for
   *desiderat* and no connective before the two jussives: something like *quisquis
   thronus Dei desiderat esse* has dropped out. Rendered as printed ("it plainly
   shows that he desires to be the throne of God, let him strive…"). **No word was
   supplied to make it construe.**
2. **0014 @0523C–0523D — a lost clause, and the most likely real hole in the
   range.** *…sicut Petrus dicit: « Qui peccatum non fecit [n: (I Petr. II)] »
   homines reficit, et Christus nos sanguine et carne sua potat et satiat.* The
   passage is running through the seven natures of oil, one per sentence; *homines
   reficit* is the predicate of a **new** nature ("oil refreshes men") whose
   subject *oleum* is missing, so the Petrine quotation and the refreshing clause
   have been welded together. Rendered exactly as printed. **No `[ed: …]` was
   fired**: Pattern 13 requires demonstrated loss in *our digitization*, and this
   cannot be distinguished from a defect in Migne's own plate without the leaf.
   If a plate check is ever done in this work, this is the column to look at.
3. **0013 @0522C.** *Modestiam ipsius, id est religionem quibus praeconiis possumus,
   ut dignum est attollere, quam scimus…* — an anacoluthon (no *quibus praeconiis
   … attollere possumus* main clause, and it closes with a full stop, not a
   question mark, unlike the parallel sentence that follows it). Rendered close
   and left declarative, per Pattern 8.
4. **0017 @0537A.** *Nonnullos enim magnae religionis et satis ardui propositi novi
   viros, quos utinam non novissem, qui, quandiu licet eis…* — the accusative
   *nonnullos … viros* never receives its verb; the sentence runs on into a
   *tandiu* clause. Rendered as one long sentence with the anacoluthon intact.

---

## 6. Negation audit (Pattern 7a)

Every printed *non / nec / neque / nisi / nullus / nullatenus / nunquam / nihil /
minime / haud* in the six chunks appears in the English, and none was added. Two
places where carrying it makes the sentence read oddly, and where it was carried
anyway:

- **0017 @0533A** — *nusquam Deum laudabimus, quoniam sicut necesse est,
  **nullatenus** in hac vita **unquam** boni et perfecti … erimus digni.* Both the
  *nullatenus* and the *unquam* are rendered ("we shall in no wise ever in this
  life be…"), producing the flat pessimism the sentence actually states.
- **0015 @0527C** — Act. IV's *Non enim est aliud nomen … **nisi** in nomine
  Domini nostri Jesu Christi*: the *nisi*-clause is Migne's addition to the verse
  (§2b) and is rendered "save in the name of…", keeping both the negation and the
  exception.

No silent repair was made anywhere in this range; where a sentence would not
construe it is listed in §5 with the conjecture kept out of the text.

---

## 7. Notes

All 101 `[n: …]` markers in the range (0012 ×2, 0013 ×12, 0014 ×8, 0015 ×30,
0016 ×22, 0017 ×27) are **citations** and stay verbatim Latin. **No `[nt: …]`
fired** — Pattern 15's prose-note class does not occur in this range; every note
is a book/chapter locator, several of them bare *(ibid.)* whose antecedents were
left untouched.

---

## 8. Verification state

`node scripts/verify-english.mjs 11638` → OK. For this range specifically:
column anchors 1:1 and in order in all six chunks (including 0013's plate-order
oddity `[0523A] … [0524A] … [0523]`, which is reproduced as printed and is not a
defect); note counts 2 / 12 / 8 / 30 / 22 / 27 matching; guillemets 0-0 / 1-1 /
6-6 / 29-29 / 21-20 / 26-26 matching; one `## ` head per chunk.
