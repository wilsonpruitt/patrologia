# 9002 — cruces, stint 0000–0005 (cols 0063A–0078D)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0000–0005: `PROLOGUS.`
through `CAPUT II. (cont.)`, 5,831 Latin words, the opening of the work.

Companion files from this stint: `data/briefs/9002-PLATE-READS-0000.json` (every page opened, both
witnesses) and `data/briefs/9002-PENDING-TEI-PATCHES-0000.md` (three sites where our Latin has
departed from Migne).

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Markers.** Zero `[sic:]`, zero `[cj:]`, zero `[d:]`, six `[var:]`.

**2. When a `[var:]` fires.** Migne's quoted scripture takes a `[var:]` where his words **assert
something different** from the received text — a *substitution*. It does **not** fire where he
merely **shortens** a verse (an ellipsis, which is what an abridged recension does constantly and
which asserts nothing new), nor where **Migne's own gloss already discusses the divergence**.

That second decline class is Pattern 18a's ❌ *"anything the EDITION already glosses"* carried
across to Pattern 14, and it does real work here: this book twice tells the reader in as many
words that it is not quoting the Vulgate (@0072A, @0078D). A marker there would tell him twice and
blur whose observation it was — exactly the argument Pattern 12 makes about Migne's own `( sic )`.
I would rather be argued out of this than have applied it silently, so both sites are itemized
below with what they would have said.

I have **not** applied the ellipsis decline to the *reverse* case: where Migne shortens a verse and
the abbreviation itself is what the gloss argues from, that is a substitution in effect and it
fires (@0075B *Puer* for *Parvulus*).

**3. When a single-word `[var:]` fires.** Launch brief §2 requires a witness of its own, because a
one-word divergence has two possible owners. Two of my six are single words (@0069A *invocavit*,
@0069B *adjuvit*), and **for both, the second owner is eliminated: I read the word on both
witnesses.** Ownership is settled by the plate, not by the argument, which is the whole point of
reading inline. Both also satisfy the other limb — the gloss leans on the form.

**4. Proper-name orthography is not a divergence.** Migne's *Esrom / Josaphat / Eliachim / Sadoch /
Nazareus* against the Clementine's *Esron / Josophat / Eliacim / Sadoc / Nazaraeus* are spellings
of transliterated Hebrew names, not different readings, and none changes what any sentence says.
All five are listed below as checked and declined. **Firing on these would bury the four real
divergences in noise**, which is Pattern 9's argument, and it would also misrepresent the class:
these are not the Douay-conformation defect 7a″ exists to catch, since nothing in the gloss turns
on the letter.

**5. Every claim about the type rests on two witnesses.** I read all eight pages of my range on the
archive PDF **and** all eight leaves on Gallica, corner numbers first on each. **This changed the
answer twelve times** — see §(e). Nothing in this file rests on one copy.

**6. Where the plate and our twin disagree, the English renders the plate** and the site is filed
as a pending TEI patch. Three sites, all of them Corpus Corporum's error, none of them Migne's.

**7. The vocabulary axes bind, including where they read oddly.** `sacramentum` → sacrament even
where the sense is "sacred sign" (see §(d) 1); `gentes` → Gentiles in the *Judaei/gentes* typology
and *nations* in a generic quoted verse; singular `gens` → nation. The gloss's own voice is not
archaised (`dicit`/`ait` → *says*); `thou` is singular and `you` plural throughout.

---

## (b) SPAN COUNT — 204 against 204, and the count is paragraph-bounded

`data/briefs/9002-lemmata-0000.txt` declares **204 spans** for chunks 0000–0005.

Counting my own Latin **paragraph by paragraph** (per the file's own warning that a bare total can
agree falsely when two errors cancel):

| chunk | italic `*…*` | guillemet `« … »` |
|---|---|---|
| 0000 | 1 | 0 |
| 0001 | 69 | 0 |
| 0002 | 57 | 0 |
| 0003 | 10 | 0 |
| 0004 | 45 | 0 |
| 0005 | 22 | 0 |
| **total** | **204** | **0** |

**204 = 204, exact.** No paragraph in my range carries an odd number of asterisks and no paragraph
carries an unmatched guillemet, so the two failure modes that make a bare total lie are both
excluded. Matthew is an **italic-lemma** book, like Luke and Mark and unlike Genesis: there is not
one guillemet in 5,831 words.

⚑ One note on the file's own header, which says "bands 0065A–0078D" while my range is 0063A–0078D.
That is not a mis-split: the Prologus (0063A–0065A) carries exactly one marked span, the rubric
*Incipit Evangelium secundum Matthaeum.*, and it is listed, at 0065A, which is where it stands.
The inventory is complete for my range.

---

## (c) THE LEMMA DIVERGENCE LIST — all 204 spans, collated against `sources/vulgate/clementine-flat.txt`

Migne's citation sigla (`(Ose. XI)` for what is Mt 12:18, `(Psal. CXXI)` forms, `(Ibid. …)`) pass
through verbatim under convention 4 and are **not** treated as divergences; a wrong siglum is
Migne's attribution practice, and `refDisplay` keeps it while `refKey` resolves it.

### C1. The six that FIRED — substitutions the gloss builds on

| col | Migne prints | received text | why it fired |
|---|---|---|---|
| **0067D** | *Dabo ipsi Roboam **tribum Judam**, ut remaneat lucerna David cunctis diebus **in Israel*** | 3 Rg 11:36 *filio autem ejus dabo **tribum unam**, ut remaneat lucerna David servo meo cunctis diebus coram me **in Jerusalem*** | Two substitutions, and **the gloss argues from the second one**: *"nec Israel cunctis diebus exstitit, nec de David post Christum dux aliquis **in Israel** fuit … Christus lucerna est aeterna in coelesti **Israel**."* The whole refutation of the literal sense turns on a word the Vulgate does not have there. |
| **0068C** | *Fidelis Dominus in omnibus **viis** suis, qui convocat filios, ut gallina pullos suos* | Ps 144:13 *Fidelis Dominus in omnibus **verbis** suis* | A substitution with a clean witness of its own: *in omnibus viis suis* is **Ps 144:17**'s clause (*Justus Dominus in omnibus viis suis*), four verses down the same psalm, so this is a conflation and nameable as one. The hen-clause is in no psalm at all (cf. Mt 23:37); the marker says so. |
| **0069A** | *Ipse **invocavit** me: pater meus es tu* | Ps 88:27 *Ipse **invocabit** me* | Future → perfect in a messianic proof-text. One letter, so §2's bar applies — and it is met on the harder limb: **read on both witnesses** (archive p.40, Gallica f35), so the second possible owner (our transcription) is eliminated. |
| **0069B** | *Ecce Deus **adjuvit** me, Dominus susceptor est animae meae* | Ps 53:6 *Ecce enim Deus **adjuvat** me, et Dominus…* | Present → perfect. **Read on both witnesses.** And the gloss leans on the aspect: the lemma is *Azor. **Adjutus.*** — "Helped", a perfect participle, which Migne's perfect answers and the Vulgate's present does not. |
| **0074B** | *Rex* injustus *omnes ministros impios habet* | Pr 29:12 ***Princeps qui libenter audit verba mendacii**, omnes ministros **habet impios*** | *Rex* stands where the received text has *Princeps*, and the subject-clause is replaced outright. ⚑ Migne sets *injustus* in **roman between his own italics** — i.e. he is himself flagging that word as supplied, which is why the marker names *Rex*, not *injustus*, as the divergence. |
| **0075B** | *Puer natus est nobis.* | Is 9:6 ***Parvulus** enim natus est nobis* | The purest case in the range. **The gloss expounds the substituted word itself**: *"Saepe **puer** nominatur, ut eum agnoscant, de quo dictum est: Puer natus est nobis."* Conforming this to "a little one" would delete the argument. |

### C2. DECLINED — Migne shortens the verse (ellipsis), asserting nothing new

Each was collated word by word; the words Migne *does* print agree with the received text.

- **0067B** *quia nihil ad perfectum adduxit lex* — Hbr 7:19 has *nihil **enim***. *quia* is the
  splice into his own sentence; both are causal and the clause is unchanged.
- **0067B** *Egredietur virga de radice Jesse* — Is 11:1 opens *Et egredietur*.
- **0068B** *Non videbo Dominum Deum,* … *non aspiciam hominem ultra,* etc. — Is 38:11 continues
  *in terra viventium*; Migne's own `etc.` marks the cut.
- **0068C** *Omnium iniquitatum ejus non recordabor* — Ez 18:22 has *quas operatus est* between.
- **0068C** *Dirigatur oratio mea sicut incensum*, etc. — Ps 140:2 continues *in conspectu tuo*.
- **0069A** *Pater sancte, serva eos quos dedisti mihi* — Jo 17:11 has *in nomine tuo* after *eos*.
- **0069B** *Justus Dominus et justitias dilexit* — Ps 10:8 opens *Quoniam justus*.
- **0069B** *Omnis qui videt Filium … habebit vitam aeternam, et ego resuscitabo eum*, etc. —
  Jo 6:40 has the purpose-clause *ut … **habeat*** and continues *in novissimo die*. With Migne's
  *ut* gone, the indicative *habebit* is what the free-standing sentence requires; that is quoting
  practice, not a reading.
- **0069C** *Sic Deus dilexit mundum, ut Filium suum daret* — Jo 3:16 has *Sic **enim*** and
  ***unigenitum*** before *daret*. ⚠ **The nearest thing in this range to a decline I could be
  argued out of**, since *unigenitum* is a substantive word to lose from a famous verse. It stays
  declined because the clause Migne prints says what it says: the gloss adduces it for *daret*
  (*Mathan. Donans vel donatus … qui dedit bona hominibus*), and nothing in the argument touches
  the only-begottenness.
- **0069B** *Deus meus ut quid dereliquisti me* — Mt 27:46 doubles *Deus meus*. **The single
  occurrence is deliberate**: the lemma being glossed is *Eliud, id est, Deus meus*, so one is the
  point. Declined on the sense, not merely on the ellipsis.
- **0070B** *Unxit te Deus tuus.* — Ps 44:8 / Hbr 1:9 read *unxit te Deus, **Deus** tuus*. A
  contraction, introduced only as *de quo propheta*, and the argument is on *unxit*.
- **0072C** *Donec ponam inimicos tuos scabellum pedum tuorum* — Ps 109:1 verbatim. No divergence.
- **0075C** *Ego sum via, veritas, et vita.* — Jo 14:6 has *via, **et** veritas, et vita*.
- **0076B** *ingredieturque Aegyptum* — Is 19:1 has *et ingredietur*; a `-que` for an `et-`.
- **0077D** *Vos plorabitis,* etc. — Jo 16:20 has *quia plorabitis, et flebitis **vos***; the
  pronoun is fronted, the person is unchanged.
- **0074D** *si Moysen et prophetas non audiunt: neque si quis ex mortuis,* etc. — Lc 16:31
  verbatim as far as Migne's `etc.`
- **0076A** *In Aegyptum, et erat ibi,* — the lemma splices across the Mt 2:14/2:15 verse break
  (*secessit in Aegyptum : et erat ibi*). That is why the pre-scan marked it ⚠; it is not a
  divergence.
- **0068A** *Ego ero illi in Patrem, quia tanquam Dominus omnia quaecunque voluit fecit* — a
  **conflation**, not a divergence: the first half is 2 Rg 7:14 (*Ego ero **ei** in patrem*), the
  second Ps 113:11 (*omnia quaecumque voluit fecit*), with *quia tanquam Dominus* Migne's own
  splice. **Declined because a `[var:]` names one received reading and there is no single verse
  here to name**; the crux is the right home. Recorded so a later reader does not read the ⚠ in the
  pre-scan as an unexamined site.

### C3. DECLINED — Migne's own text already glosses the divergence

- **0072A** *Ecce virgo in utero habebit* `[n: (Isa. VII)]`. The words are Mt 1:23's; Is 7:14 reads
  *Ecce virgo **concipiet***. **A `[var:]` would have said exactly what Migne says three lines
  later in his own voice:** *"Sensum Isaiae sequitur, non verba. Pro concipiet, ponit: In utero
  habebit: et vocabunt, pro vocabis, vel vocabitur."* He names the divergence, both halves of it,
  and gives his reason. Declined.
- **0078D** *Nazaraeus de radice ejus ascendet* `[n: (Isa. XI)]`. Is 11:1 reads ***flos** de radice
  ejus ascendet*. This is the sharpest single divergence in the range and it is declined for the
  same reason: **Migne introduces it as *"eisdem verbis in Isaia juxta Hebraicam veritatem"***, i.e.
  he tells the reader in advance that he is quoting the Hebrew and not the Vulgate. ⚑ Note the
  gloss twelve lines above expounds *flos campi* and *unde flos interpretatur*, so an English reader
  meets *flower* and *Nazarene* in the same column with Migne's own explanation between them.

### C4. CHECKED AND AGREEING WITH THE CLEMENTINE EXACTLY

Verse lemmata, verbatim: **Mt 1:1** *Liber generationis* · *Filii David* · *Filii David filii
Abraham* (Migne prints no comma where the Vulgate has one; punctuation, carried as printed) ·
**1:2** *Abraham genuit Isaac: Isaac autem genuit Jacob* (Migne's colon for the Vulgate's stop) ·
*Judam et fratres* · **1:3** *Judas autem* · **1:4** *Aram autem* · **1:5** *Salmon autem genuit
Booz* · *Booz autem* · *Ex Ruth* · *Jesse autem* · *Regem* · **1:6** *David autem rex* · *Uriae* ·
**1:7** *Salomon autem* · *Roboam* · *Abias* · **1:8** *Josaphat* · *Joram autem genuit* · **1:9**
*Ozias autem* · *Ezechias* · **1:10** *Manasses* · *Amon* · **1:11** *Josias* · **1:12**
*Jechonias* · *Salathiel* · **1:13** *Zorobabel autem genuit Abiud* · *Abiud* · *Eliachim* ·
**1:14** *Azor* · *Sadoch* · *Achim* · *Eliud* · **1:15** *Eleazar* · *Mathan* · **1:16** *Joseph* ·
*Virum Mariae* · **1:17** *Omnes itaque* · **1:18** *Christi autem generatio* · *Sic erat* · *Cum
esset desponsata* · *Antequam convenirent* · *Inventa est in utero habens* · **1:19** *Justus* ·
*Et nollet eam* · **1:20** *Haec autem eo cogitante* · *Ecce angelus Domini* · *Fili David* · *Noli
timere* · *Conjugem* · *In ea natum est* · *De Spiritu sancto est* · **1:21** *Pariet* (×2) · *Et
vocabis nomen ejus Jesum* · *Ipse enim* · **1:22** *Hoc autem* · *Ut adimpleretur* · **1:23** *Ecce
virgo* (×2) · *In utero habebit* · *Emmanuel* · **1:24** *Exsurgens autem Joseph* · *Fecit sicut
praecepit* · *Angelus Domini* · *Et accepit conjugem* · **1:25** *Donec peperit* ·
*Primogenitum* · **2:1** *Cum ergo natus* · *Cum ergo* · *In diebus* · *Venerunt* · **2:2** *Ubi
est, qui natus est rex* · *Vidimus enim stellam* · **2:3** *Audiens autem Herodes* (×2) · *Turbatus
est* · *Cum illo* · **2:4** *Et congregans omnes principes sacerdotum* · *Ubi Christus nasceretur* ·
**2:5** *In Bethlehem Judae* · **2:6** *Et tu, Bethlehem* · **2:7** *Clam vocatis Magis* · **2:8**
*Adorem eum* · **2:9** *Et ecce stella quam viderant* · **2:10** *Gavisi sunt gaudio magno* ·
**2:11** *Et intrantes domum* · *Puerum cum Maria matre ejus* · *Adoraverunt eum* · *Et apertis* ·
**2:12** *Et responso accepto* · *Per aliam viam* · **2:13** *Accipe puerum* · **2:14** *Qui
consurgens* (×2, at 0075D and 0078A) · *Nocte* · **2:15** *Ex Aegypto vocavi* · **2:16** *Tunc
Herodes videns* · *Occidit omnes pueros* · *Et in omnibus finibus ejus* · *A bimatu* · **2:17**
*Tunc adimpletum est* · **2:18** *Vox in Rama* (×2) · *Audita* · **2:19** *Defuncto autem Herode,
ecce* · **2:20** *In terram* · *Defuncti* · **2:22** *Timuit illo ire* · *Secessit in partes* ·
**2:23** *Nazareth* · *Per prophetas*.

Inline scripture, verbatim: *et benedicentur in semine tuo omnes gentes terrae* (Gn 22:18) ·
*Ego hodie genui te* (Ps 2:7) · *Ecce puer meus quem elegi* (Mt 12:18, under Migne's `(Ose. XI)`) ·
*Excelsus super omnes gentes Dominus* (Ps 112:4) · *Voluntarie sacrificabo tibi* (Ps 53:8) ·
*in novissima tuba* (1 Cor 15:52) · *Ecce Dominus Deus in fortitudine veniet* (Is 40:10) · *Emitte
agnum, Domine, dominatorem terrae* (Is 16:1) · *Ecce odor filii mei sicut odor agri pleni*
(Gn 27:27) · *Dominus fortis et potens* (Ps 23:8) · *Speciosus forma prae filiis hominum*
(Ps 44:3) · *Similis ero Altissimo* (Is 14:14) · *Nemo ascendit in coelum…* (Jo 3:13) · *Dispone
domui tuae, quia morieris tu et non vives* (Is 38:1) · *resurrectio et vita* (Jo 11:25) ·
*Nuntiabo nomen tuum fratribus meis* (Hbr 2:12 verbatim, under Migne's Psalm siglum — the wording
is Hebrews', not Ps 21:23's *Narrabo*; his citation, his practice, carried) · *Deus meus sperabo in
eum* (Ps 90:2) · *Ecce Dominus ascendet super nubem levem* (Is 19:1) · *Tristitia vestra vertetur
in gaudium* (Jo 16:20).

⚑ **Two ✓ in the pre-scan that a careless reader would have taken as clearance**, checked and
sound: *Ecce puer meus quem elegi* scores off **Mt 12:18** inside a commentary on Mt 1:4 — it is
Migne's proof-text, correctly quoted, under a wrong siglum; and *in novissima tuba* scores off
**1 Cor 15:52**, which is right, in a gloss on Rahab. Neither is a harmony parallel answering for
the wrong evangelist, which is the failure the brief warns of.

### C5. NOT SCRIPTURE — name-etymologies and technical tags, not collatable

The single-word spans the pre-scan could not search are, with two exceptions, **Jerome's
onomastic glosses**, not quotations, and no Vulgate collation applies to them: *Genuit* · *genuit* ·
*Qui fuit* (Luke's genealogical formula) · *Christus electus* · *excelsus* · *sensibilis* · *fames* ·
*beatitudo* · *impetus* · *videns* · *festinans* · *lux mea Deus* · *pacificus* · *Judicans* ·
*judicium Dei* · *fidelis* · *nutritius* · *salus Domini* · *incensum* · *resurrectio Domini* ·
*praeparatio Domini* · *pater meus* · *frater meus iste* · *Deus meus adjutor* · *germen novellum* ·
*flos campi* · *flos*. The two exceptions are `*Incipit Evangelium secundum Matthaeum.*` (0065A), a
rubric, and `*usque ad*` ×8 (below).

⚠ `*Deus meus adjutor.*` scores ✓ Ps 17:3 in the pre-scan. **It is not a quotation of Ps 17:3** —
it is the etymology of *Eleazar*, and Migne quotes Ps 90:2 immediately after it as the proof-text.
Recorded because the ✓ invites the opposite reading.

### C6. `usque ad` — the `etc.` splice test, run per occurrence

**12 occurrences. 8 are the formula, 4 are ordinary Latin.** Every one of the eight formula
occurrences is preceded, immediately, by `etc.,` and stands inside an italic span; all eight are
rendered **"as far as"**:

@0065A (*ut liber Genesis, etc.,*) · @0070C (*et ut per Joseph, etc.,*) · @0072D (*locus et tempus,
etc.,*) · @0073A (*videatur impletum, etc.,*) · @0073A (*praevalet namque, etc.,*) · @0074A (*ad
agnitionem veritatis, etc.,*) · @0075B (*munera aperta, etc.,*) · @0075D (*Dominum majestatis,
etc.,*).

The four ordinary uses carry no `etc.` and stand outside every italic span; each is rendered by
sense and **is named here because the brief requires a departure from the axis to name its Latin**:

- **@0065D** *A baptismo enim incipiens **usque ad Deum** ascendit* — Luke's genealogy ascending;
  rendered "ascends **as far as** God". ⚑ The English words coincide with the formula's, by
  accident of sense and not by application of the axis.
- **@0068D** *Omnes qui a David **usque ad transmigrationem** Babylonis numerantur* — "from David
  **to** the transmigration".
- **@0076D** *a filio unius noctis **usque ad** filium duorum annorum* — temporal, "from a son of
  one night **to** a son of two years".
- **@0077A** *gementis **usque ad** solium superni ascendit judicis* — spatial, "ascends **to** the
  throne".

A fifth, **@0077B** *auditus est **usque** Rama*, is bare *usque* and is rendered "as far as Rama".

---

## (d) CRUCES OF THIS RANGE, BY COLUMN

### 1. @0063B, @0064A, @0064B, @0065A, @0066A, @0076A — `sacramentum` under the axis, and it reads oddly

The `mysterium`/`sacramentum` 1:1 axis is settled and I applied it without exception. **It is
worth saying plainly what that costs in this work**, because the next Matthew stint will meet the
same thing and should not silently re-open it. Matthew's Prologus and CAPUT I use *sacramentum* in
its patristic sense of a **sacred sign or hidden significance**, not of a rite:

- @0064A *propter virtutem **sacramenti*** → "on account of the power of the sacrament" (why the
  gospels are four and not more);
- @0066A *ne ultra numerum **sacramenti*** → "beyond the number of the sacrament" (the twelve);
- @0064B *scribens **sacramenta** Divinitatis* / @0065A *exprimitur Divinitatis **sacramentum***;
- @0065D *formam **sacramenti** aperit* (Luke's ascending genealogy);
- @0076A *Quod fugit, **sacramenti** fuit non timoris* → "was a matter of sacrament, not of fear".

Set beside them, @0064A *jucundi **mysterii** sibi consciae* and @0074A *tantae visionis
**mysterium*** take "mystery". The distinction the axis preserves is real and visible in the Latin
column; I record the awkwardness rather than smooth it, and I have not invented a third word.

### 2. @0064A — the unexpressed subject of `nolebant`, and it has no antecedent in the sentence

*unde et aliorum evangelia deciderunt, nec recepta sunt: quia **nolebant** praefinitum numerum
cessari.* Rendered "**they** were unwilling". Naming the "they", as the brief requires: it cannot be
the gospels (neuter plural, and they are the object of the unwillingness), and it cannot be the
authors of the other gospels, which would make the sentence say the apocryphists enforced the canon.
It must be **those who fixed the canon** — the Fathers, the Church. **There is no antecedent
anywhere in the paragraph**, so this is supplied from the argument alone, and I say so here rather
than let a bare "they" pass as though the Latin had named someone.

### 3. @0065B, @0065C, @0067B, @0070B, @0072B — the evangelist as the unexpressed subject

Repeatedly a third-singular verb has no subject and the subject is **Matthew**, carried from the
head of the chapter: *aperiret* (0065B), *Amplectitur* (0065C), *ponit*/*reservat* (0070B),
*astruit* (0072B), *ponit* (0074C). Each is secure — the paragraphs around them name Matthew
explicitly (*Matthaeus generationem incipit*, *Matthaeus ponit genuit*) — and I record the class
rather than each instance.

⚠ **One in the class is NOT secure and I have not hidden it.** @0067B *Hic autem ideo dicitur
Jesse: **ut sciret** eum venisse.* Rendered "that **he** might know". Two readings construe: the
Jewish reader/hearer (the argument two paragraphs above is about disclosing Christ *Judaeis*), or
Isaac in the following sentence. I took the first, on the run of the argument; the second cannot be
excluded from the words.

### 4. @0065D — `genuit` against `generavit`, a distinction English has no exponent for

*Matthaeus ponit **genuit**, et non **generavit***. Both are "begot". Rendering both would delete
the sentence's whole point. Migne sets **neither** in italics here (though *genuit* is italic two
clauses earlier), so italicising them in the English would break span parity and put markup on the
page that the plate does not have. **I used our own double quotes** (Pattern 6: `" "` is ours, `« »`
is his) and kept the Latin forms: `Matthew sets down "genuit," and not "generavit,"`. The same
device carries @0072A's *concipiet / vocabunt / vocabis / vocabitur* — there rendered in English
inside our quotes, because Migne's point at that place is about **sense**, not about the Latin
forms as forms.

### 5. @0067B — a `quae` clause with no verb, and a bracketed supply

*Ruth significat Ecclesiam quae est de Moab … **quae ex patre diabolo et petra deserti** propter
idololatriam de qua Deus suscitavit filios Abrahae.* The second *quae* clause has no predicate.
Read on both witnesses; Migne prints it so. I rendered "which **[was]** of her father the devil",
bracketing the supplied verb, which is the corpus's convention for our own supplied words. The
supply is licensed by Migne's own parallel eleven words earlier: *ex patre diabolo **erat***. No
marker: nothing here is defective type, and an anacoluthon is not a false assertion.

### 6. @0067C — the negation sits on `solus`, not on the verb (test 2a)

*Non quod **solus** in hac genealogia rex, **sed** quia primus rex de Juda.* The trigger condition
is exactly the launch brief's: a negative, a verb-shaped clause, and a quantifier beside it. **The
`sed` clause proves the host**: David *is* king in this genealogy; what is denied is that he is the
*only* one. Rendered "**Not that he alone is king** in this genealogy, but because he is the first
king of Judah." Recorded as handled, not as a defect — this is the 8990 @0614B class caught rather
than missed.

The same test was run on, and passed by: @0066A *non feminas, sed mares interimebat* (host
*feminas*); @0068B *flevit **non propter longiorem vitam** … sed quia dubitabat* (host is the
cause-phrase — he *did* weep, which is the 8960 @0740B model); @0069D *non Elimelech … sed Obeth
vocavit* (host *Elimelech*); @0070A *non per Mariam, sed per Joseph*; @0071B *non concubitu, sed
affectu*; @0074C *non ex ignorantia, sed ex cordis duritia*; @0076A *sacramenti fuit non timoris*
(host *timoris*); @0076D *non in Judaea tantum, sed ubique*; @0077C *non tam morte translatos, quam
supplicio peremptos*.

### 7. @0068B — `dubitabat ne` is an indirect question, not a negation

*sed quia **dubitabat ne** promissio Dei impleretur.* Read as a purpose clause this says Hezekiah
feared the promise **would** be fulfilled, which is the reverse of the argument (he is childless and
fears it will fail). **No negative is at stake and none was dropped**: `dubito ne` is the ordinary
"doubt whether" construction, and I rendered "**because he was in doubt whether** the promise of
God would be fulfilled". Recorded explicitly because a negation-counting check will see a `ne` here
and a reader may wonder where it went. It is in "whether".

### 8. @0068D — `in fide praecedentis` where the parallel wants `in fine`

*unus et idem est **in fide** praecedentis et in principio sequentis*, three lines after *unus …
pater sit **in fine** praecedentis, alter in principio sequentis*. **Read on both witnesses: both
print *fide*.** So it is Migne's, not ours, and Pattern 7 renders it: "one and the same is **in the
faith** of the preceding and at the beginning of the following."

⛔ **A `[cj:]` was weighed and declined, and here is why the rival lost.** *fine* is near-certain on
the parallelism, and the site has the shape Pattern 18 was written for — a real word whose faithful
English is wrong. But 18a's bar is that the English must **assert something false**, and 18a's
explicit ❌ is "a merely awkward or elliptical sentence." "In the faith of the preceding" asserts
nothing the author is arguing against; it is opaque, not false. The ✅ extension for negations and
correlatives does not reach it either: *in principio* is not a correlative whose answering member is
*in fine* in the way 11535 @1231B's *quam* demanded a comparative. **The conjecture lives here, and
in the text stands the printed word.**

### 9. @0068D — the full stop our twin lost (patch, not marker)

Both witnesses print *sequentis**.** Sed mystice*; our TEI runs the two sentences together. The
English carries the stop, under the plate-where-read rule. Filed as patch 1. Nothing here is
Migne's defect, so no `[sic:]` — and none could be written, since the marker must quote a word that
is in our Latin and the defect is an absence.

### 10. @0069C — `Heriles` and `libri Dierum`

*viri studiosi ex Judaeis dicti **Heriles**.* Read on both witnesses. A real, well-formed word, and
by the launch brief's own prior a real word that reads oddly is Migne's until a plate says
otherwise — the plate says it is his. (The people usually called *Desposyni*.) Rendered as printed;
no marker. Likewise *ex libris **Dierum*** rendered "from the books of Days", the Hebrew title of
Chronicles, not silently modernised.

### 11. @0069D — `qui per Mathan descendit de David`

Mathat is said to descend from David *per Mathan*, four words after Mathan has been said to descend
*per Salomonem*; the genealogy wants *per Nathan*. **Both witnesses print *Mathan*.** A real name,
rendered as printed. No `[cj:]`: the sentence is a tangle either way and the reader has the two
lines of descent in front of him.

⚑ The archive copy alone reads *"Mathan, qui per **Solomonen** descendit"* here — a non-word,
refuted by Gallica, and a good illustration of why a one-witness read of this volume is worthless.

### 12. @0069B — a question Migne closes with a full stop

*Quis alius quam ille qui homo fieri voluit … de quibus **diceret**: Nuntiabo nomen tuum fratribus
meis***.*** Migne prints a **stop**, not a question mark, on a clause that opens *Quis alius quam*.
Pattern 8: **never supply a mark the plate lacks.** The English ends with a stop. Read on both
witnesses. This is the mirror of the class Pattern 8 protects and it costs nothing to obey.

### 13. @0070C — `Non quod postea convenerint` printed twice, and it is NOT a dittography

> *Non quod postea convenerint: ut si diceremus antequam poenituerit, morte praeventus est. **Non
> quod postea convenerint;** sed ostendit proximum tempus nuptiarum…*

Read on both witnesses; both print both copies. **No `[d: …]` fired**, and the reason matters
because Pattern 11a asks which copy is the intrusion. **Neither is.** The two runs are punctuated
differently and each carries **its own distinct continuation** — the first an analogy (*ut si
diceremus…*), the second the positive explanation (*sed ostendit…*). An eye-skip duplicates a run
*and its tail*; this is the abridgment splicing two glosses on one lemma, which is what the
recension does everywhere. Marking one would quarantine a clause Migne meant.

### 14. @0071D — `oerum` for `eorum` (patch, not marker), and why the plate decided it

Our twin's *oerum* is a non-word; the same sentence is restated four lines later under a `HIER.`
siglum with *eorum* spelt correctly **in our own twin**. That internal corroboration is textbook,
and by `reference_plate-read-triage` it proves an error exists and says nothing about whose. **Both
witnesses print *eorum*.** Ours. Filed as patch 2, English renders *eorum*, no `[sic:]`.

### 15. @0074D — an anchor that falls inside a word, and where I put it

Migne's column break at 0074D falls **inside** *promittit* (*Herodes devotionem pro | mittit*).
Splitting an English word is not readable, so the anchor stands one word later: "Herod promises
[0074D] devotion." Recorded because `verify-english` checks anchor presence and order but **not
position** (2b), so a displaced anchor passes silently and only a note like this one makes it
visible. The displacement is one word.

### 16. @0073A — `Bethehem Judae` is a press variant, and the two copies are two printings

Gallica f37 prints the lemma **`Bethehem`**; the archive p.42 prints **`Bethlehem`**. Both clean,
both normally spaced, and the very next line of **both** copies sets *Bethlehem* correctly three
times. Our twin follows Gallica.

**No `[sic:]`.** A `[sic:]` needs two witnesses and the second witness refutes it. This is 8950
@0171D's *Mititte*/*Mittite* exactly — a difference no ink produces, i.e. **two printings**, which
this volume turns out to have: the line breaks of the two copies diverge from the first page of my
range onward. The English renders the place-name; the fact is here and in the plate-reads file.

### 17. @0075B — `quem actum esse hominem intelligunt`

Read on both witnesses; both print *actum*. A real word, so Pattern 7 renders it and Pattern 12 has
nothing to wrap: "whom they understand to have been **brought to be** man". The evident reading is
*factum*, and I record the conjecture here rather than in the text. **A `[cj:]` was weighed and
declined**: the rendering is opaque, not false — nobody reads "brought to be man" as a claim the
author is arguing against — and 18a's ❌ covers it. Had I written "made man" I would have made the
repair invisible, which is the 7a class this edition exists to expose.

### 18. @0076A — two elliptical clauses where I supplied an object

- *nocte ignorantiae his a quibus ipse recessit reliquit incredulis* — *reliquit* has no expressed
  object. Rendered "he left **them** to those unbelieving ones from whom he himself withdrew."
- *Omnigenum Deum monstrat venerantem* — *monstrat* has no expressed object. Rendered "He shows
  **[Egypt]** venerating a God of every kind", bracketing the supply. Egypt is the subject of the
  whole paragraph (*Fugit in Aegyptum*), and the point is Egypt's idolatry against Israel's refusal.
  An alternative parse taking *Deum* as the object and *omnigenum … venerantem* predicatively yields
  nothing the argument uses. Both witnesses print the clause as we have it.

### 19. @0077D — `Josephus` for Joseph

*ideo **Josephus** intellexit Judaeam.* Both witnesses print *Josephus*, in a paragraph that names
*Joseph* twice in the preceding sentence. A real, well-formed name; rendered as printed; no marker.

### 20. @0077D — the Pattern 17 payoff, visible without apparatus

*unde dicitur: **Vos** plorabitis, etc., sed additur consolatio: **Tristitia vestra** vertetur in
gaudium.* Both are **plural** (Jo 16:20). Apart from the plural imperative *Nolite timere* at
@0068B, addressed to the apostles, these are the only second-person plurals in 5,831 words —
*vos* once and *vestra* once, both inside this one quotation. Everything else in this range that addresses one person takes **thou** — the angel to Joseph
(*Recognosce … de qua **tu** es*, *Noli timere*, *Et vocabis nomen ejus Jesum*, *eris necessarius*),
the commentator to his reader (*ut eum **cognosceres***, *ut eum **intelligas***, *subaudis*),
Isaiah to Hezekiah (*morieris **tu** et non vives*). So a reader can see, with no apparatus, that
the Church's weeping is addressed to a body and everything else here to an individual.

### 21. @0075C — `pius` taken two ways, disclosed

*isti **pio** affectu interrogabant* → "with **devout** affection". But at @0070D–0071A *sed et
**pius** dum nollet propalare … ex conscientia castitatis justus, ex timore **pius***, and *nec
**pietas** sine justitia, nec sine **pietate** justitia*, I rendered *pius/pietas* **merciful /
mercy**, because there the word is half of the technical *justitia/pietas* pair on which Joseph's
whole characterisation turns. One Latin word, two English words, in one stint. It is not on any
settled axis; I record the split rather than let it pass, since that is how the axes got made.

### 22. @0066C — `sensibilis` rendered "perceiving"

*Christus est Salmon, id est, **sensibilis**, quia omnia sentit.* "Sensible" is the traditional
English of the etymology but is now ambiguous in exactly the wrong direction. I rendered
**"perceiving"**, which is what Migne's own *quia omnia sentit* says the name means.

### 23. Punctuation, band by band — the mechanical test, and what it leaves

Column anchors are verified 1:1, so they partition both twins identically. Comparing marks band by
band across all 66 bands of my six chunks (60 column anchors plus each chunk's head band):

- **question marks: zero mismatched bands** (7 in the Latin, 7 in the English, each in its own band);
- **guillemets: zero, in both** — this book prints none;
- **colons: zero mismatched bands** after I removed four I had supplied (@0065A, @0069C, @0072A, and
  the head band of chunk 0004);
- **semicolons: 10 bands where the English has one more than the Latin, and none where it has
  fewer.** Every one is a comma in Migne that English cannot hold as a comma without splicing.
  **Nothing Migne prints was destroyed anywhere in the range**, which is the direction the test
  exists to catch; and the brief's standing ruling is that comma→semicolon is a rate question, not
  an absence. I have not swept the other way either.

### 24. Sentence-type marks Migne prints, all carried

Seven question marks, all his, none supplied and none deleted: @0068D (*Sed quare praetermissus est
Joachim…?*), @0069B (*Deus meus ut quid dereliquisti me?*), @0070A (*Quid ad Christum generatio …
cum Christus non ex semine Joseph?*), @0072A (*Sed quomodo tunc est signum?*), @0075B (*Cur non et
Joseph cum Maria inventus est a Magis?*), @0078B (*cur non et Galilaeam…?*), @0078B (*Quaeritur:
quare non timuit Joseph ire in Galilaeam…?*).

⚑ **Pattern 8b was not needed once.** The one *Quaeritur* in the range is already set by Migne
himself as a colon followed by a direct question, so the mark rides as printed with no recasting.

### 25. Verse addresses — one irregularity, carried

@0075A prints **`VERS. 11.`** with no `.--`, where every other address in the range prints
`VERS. n.--`. Our twin has it so. The archive copy prints a dash there and Gallica does not; a
`.--` is precisely what fading removes, so by the brief's own rule **a verse address may not be
altered on one witness** — and here the witnesses disagree, which is weaker still. Left exactly as
our twin has it. Convention 1 makes the address pass through verbatim in any case, and nothing
machine-readable consumes it.

### 26. The `⚑ MATCHES ONLY ELSEWHERE` candidates — none in this range

The launch brief lists eight, the first at @0080B. **My range is clean of them**, as the brief
says. I confirm it rather than assume it: no span in cols 0063A–0078D carries that flag in
`9002-lemmata-0000.txt`.

---

## (e) DECLINED-ODDITY LIST — every suspect word I did NOT mark, with its column

**Fourteen of the sixteen entries below are archive-only readings that Gallica refutes.** They are
listed in full because the count is the finding: had I read one witness, this file would carry a
dozen confident claims about Migne's type and **twelve of them would be false**.

| col | the suspicion | why declined |
|---|---|---|
| 0063A | archive prints *ad **memorian** reliquit* (non-word) | **Gallica prints *memoriam***; our twin agrees. Archive ink/press. |
| 0065A | archive prints *Divinitatis **sa cramentum*** (split type) | **Gallica prints *sacramentum***; our twin agrees. |
| 0066C | archive prints *Ipse est **Aminabad*** | **Gallica prints *Aminadab***; our twin agrees, and the correct form stands twice on the same page. |
| 0066C | archive prints *omnes gentes **Domini*** | **Gallica prints *Dominus***, as does Ps 112:4 and our twin. |
| 0065C | archive prints *incipit **ad** exordio promissionis* | **Gallica prints *ab exordio***; our twin agrees. |
| 0066D | archive prints *id est **Eclesiam** de gentibus* (non-word) | **Gallica prints *Ecclesiam***; our twin agrees. |
| 0066D | archive prints *omnes muri corruant, **ei** novissima mors* | **Gallica prints *et***; our twin agrees. |
| 0067A | archive prints *…peccatoribus generandus**.*** with a terminal stop | **Gallica prints none**, nor does our twin. Pattern 8: never supply. The English also stops without a mark. |
| 0068D | Gallica appears to print *tesserat**l**ecadis* | **The archive prints *tesseradecadis***, as our twin does. Ink on the Gallica side this time — the traffic runs both ways. |
| 0069B | archive prints *Dominus **ressuscitans*** | **Gallica prints *resuscitans***; our twin agrees. |
| 0069D | archive prints *qui per **Solomonen** descendit* (non-word) | **Gallica prints *Salomonem***; our twin agrees. |
| 0070D | archive prints *surreperet suspicio **lector.*** | **Gallica prints *lectori***; our twin agrees. |
| 0076B | archive prints *Ex Aegypto**,** vocavi* | **Gallica prints no comma**, nor does our twin. |
| 0077B | archive prints *jam flere **dicat ur*** (split type) | **Gallica prints *dicatur***; our twin agrees. |
| 0077D | archive prints *et Helia et **Henoch*** | **Gallica prints *Enoch***; our twin agrees. |
| 0075A | archive prints `VERS. 11. --`, Gallica prints `VERS. 11.` | Witnesses disagree on a dash; a verse address may not be altered on one witness (§(d) 25). |

### And the suspicions that were NOT about the archive's ink

| col | the suspicion | why declined |
|---|---|---|
| 0066B | *Phares autem genuit **Esrom*** where Mt 1:3 reads *Esron* | Orthography of a transliterated name (Gk Ἐσρώμ). Nothing in the gloss turns on the letter; the etymology it gives (*sagitta vel atrium*) is of the name, not of the ending. Policy 4. |
| 0068A | *Josaphat* where Mt 1:8 reads *Josophat* | Same class; Migne's is in fact the ordinary form. |
| 0069B | *Eliachim* where Mt 1:13 reads *Eliacim*; *Sadoch* where Mt 1:14 reads *Sadoc* | Same class. |
| 0078B | *quia **Nazareus** vocabitur* where Mt 2:23 reads *Nazaraeus* — and Migne prints *Nazaraeus* himself at 0078C and 0078D | Same class, with the added point that the variation is **within Migne's own column**, i.e. his spelling practice, and both witnesses carry it. |
| 0073A | *Bethehem Judae* — the only real candidate in the range | Press variant, refuted as a plate defect by the archive. §(d) 16, and the pending-patches file. |
| 0068D | *in fide praecedentis* for *in fine* | Real word, both witnesses, `[cj:]` weighed and declined under 18a. §(d) 8. |
| 0069C | *dicti **Heriles*** | Real word, both witnesses, Migne's. §(d) 10. |
| 0069D | *qui per **Mathan** descendit de David* (wants *Nathan*) | Real name, both witnesses, Migne's. §(d) 11. |
| 0075B | *quem **actum** esse hominem intelligunt* (wants *factum*) | Real word, both witnesses; `[cj:]` weighed and declined. §(d) 17. |
| 0077D | *ideo **Josephus** intellexit Judaeam* | Real name, both witnesses. §(d) 19. |
| 0073A | *ut irrationabiles **pastos**, faciat socios angelorum* | Reads roughly, but *pastos* (fed) construes and both witnesses carry it. Rendered "that having fed the irrational he may make them fellows of the angels". |
| 0077D | *cessante persecutione **Ecclesiae** ad coelestia invitatur* | *Ecclesiae* leaves *invitatur* without an expressed subject. Both witnesses. Rendered with "she" supplied from *Ecclesiae* and the class recorded under §(d) 3's rule. |

### Suspiciously TIDY forms — brief §4's other direction, and a checked negative

The class that leaves nothing to notice is the one where the digitization has **corrected** Migne.
I looked for it deliberately at the places where our Latin reads smoothly in rough surroundings,
and I read whole lines rather than target words. **In this range the answer is: three found, and
all three run the other way** — patches 1–3 are the digitization *corrupting*, not tidying.

⭐ **The negative worth recording** (brief §4 asks for these explicitly): the passage most likely to
have been tidied is @0067B's verbless *quae ex patre diabolo et petra deserti* clause, which is
exactly the shape a transcriber "fixes" — and **both witnesses print it defective, as our twin
has it.** Our transcription is faithful there. Likewise @0068D's *in fide*, @0069D's *per Mathan*
and @0075B's *actum*: four places where our Latin is rough, four places where the plate is rough in
the same way. This volume's digitization drops letters; in my range it did not add any.
