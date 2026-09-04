# 8967 · *Glossa ordinaria*, **Liber Psalmorum** — cruces, chunks 0044–0048
### Band B, stint 2 · cols 0930D–0940C · Psalms LIX–LXVI

---

## §0 · SPAN COUNT RECONCILIATION — the required check, and it AGREES

`data/briefs/8967-lemmata-0044.txt` declares **294** italic spans. Counted in my own Latin, with
frontmatter stripped:

| chunk | spans |
|---|---|
| 0044 | 66 |
| 0045 | 83 |
| 0046 | 25 |
| 0047 | 52 |
| 0048 | 68 |
| **total** | **294** |

**294 = 294.** The brief is cut by chunk membership and is complete for my range; its first entry
(`[0930D] VERS. 1.-- *In finem pro his.*`) is the first span of 0044 and its last
(`[0940C] *Et metuant eum.*`) is the last span of 0048. Nothing slid in from a neighbouring stint.
English parity, markers stripped: 66 / 83 / 25 / 52 / 68 — 1:1 in every chunk.

Other structural counts, Latin against English, all 1:1 and in order: column anchors 7 / 11 / 4 /
8 / 10 · `[n: …]` notes 28 / 38 / 19 / 28 / 40 (each matching frontmatter `noteCount`) · `## `
heads 2 / 2 / 1 / 1 / 2 · question marks 1 / 2 / 3 / 2 / 0. Word ratio 1.51–1.55.

---

## §1 · PLATE READS — SIX LEAVES, ELEVEN COLUMNS, ALL OF MY OWN RANGE

`0 of the work's 46 prior reads` fell in cols 0918–1011, so nothing here rested on somebody else's
eye. Recorded in `data/plate-reads.json`.

| PDF | corners | columns | depth |
|---|---|---|---|
| 470 | 930 | 0929A–0930D | read (only 0930D is mine) |
| 471 | 931 / 932 | 0931A–0932D | full |
| 472 | 933 / 934 | 0933A–0934D | full |
| 473 | 935 / 936 | 0935A–0936D | full |
| 474 | 937 / 938 | 0937A–0938D | full |
| 475 | 939 / 940 | 0939A–0940D | full |

**Calibration:** PDF 471 carries `931` and `932` in its corners, which is `(col + 11) / 2` exactly.
`PATROL. CXIII.` stands at the foot of PDF 474 — the volume re-confirmed from the plate, not from
the archive id.

**Clipping: none.** Every one of cols 930–940 is clean at the inner margin. ⚑ This is another
nail in the withdrawn mod-4 rule: **933 and 937 are 1 (mod 4) and both are clean**, as are 929 and
941's neighbours here. I inferred nothing; I opened all eleven.

**Conjecture apparatus: none**, in either layer, on any of the six leaves.

**Marginal condition:** col 0932's OUTER (right) edge is over-inked and smears the last two or
three characters of many lines. That cost me one call (§5.1). Nothing else on these leaves is
obscured.

---

## §2 · MARKERS FIRED — eleven `[var:]`, and nothing else

No `[sic:]`, no `[d:]`, no `[cj:]`, no `[ed:]`. Every marker stands on a column I read today;
`plate-gate.mjs` returns OK.

| col | chunk | Migne prints | the Clementine | why it is material |
|---|---|---|---|---|
| 0930D | 0044 | *Pro iis qui mutabuntur. Doctrinam.* | Ps 59:1 *pro his qui immutabuntur … in doctrinam* | the titulus Migne re-cites in his own voice, and the gloss argues from the unprefixed stem: *Mutantur in doctrinam* stands two words later |
| 0931A | 0044 | *Et turbasti* | Ps 59:4 *conturbasti* | the gloss pairs it with *commovisti*, as the Vulgate pairs *Commovisti … conturbasti* |
| 0931B | 0044 | *Et liberentur* | Ps 59:6 *ut liberentur* | a purpose clause turned into a coordinate one |
| 0932B | 0044 | *usque ad: quis requiret ei?* | Ps 60:8 *misericordiam et veritatem **ejus** quis requiret* | dative for genitive: "who shall seek them FOR HIM" against "who shall seek HIS mercy and truth" |
| 0933A | 0045 | *impulsae* | Ps 61:4 *depulsae* | the gloss names the word — `addit *impulsae*` — so the argument rests on it |
| 0933A | 0045 | *Subjecta est anima mea* | Ps 61:6 *Verumtamen Deo subjecta **esto**, anima mea* | ⭐ **indicative for imperative, and Migne's own gloss contradicts his own lemma**: it says he *hortatur* and calls the clause a *petitio*. Both need the imperative |
| 0933B | 0045 | *Punge oculum, et producit lacrymam; punge cor, et producit **scientiam*** | Sir 22:24 *Pungens oculum deducit lacrimas, et qui pungit cor profert **sensum*** | ⭐ the largest divergence in the range: imperative for participle, singular for plural, and **knowledge for understanding** — adduced precisely where the gloss is arguing that tears produce knowledge |
| 0934B | 0045 | *Ut **fieret** in **eis** fons aquae salientis* | Jo 4:14 *fiet in eo fons aquae salientis* | subjunctive and plural for future and singular. The gloss needs the plural: the fountain is made **in the preachers** (*implens praedicatores*) |
| 0936B | 0047 | *Cum inciperet* | Ps 64:1 *cum incipe**rent** exire* | singular for plural, and the gloss expounds it singular: *Incipit exire, qui incipit amare* |
| 0937A | 0047 | *Exaudi nos, **qui es Salvator*** | Ps 64:6 *Exaudi nos, **Deus, salutaris noster*** | a relative clause for a vocative — a different phrase, not a variant spelling |
| 0939D | 0048 | *Clamavi et exaltavi **in corde*** | Ps 65:17 *et exaltavi **sub lingua mea*** | ⭐ the whole gloss turns on it: *Quod in ore, hoc et **in corde** habeo*, against *ore meo clamavi*. With the Vulgate's phrase the antithesis the gloss builds has no second term |

---

## §3 · THE DIVERGENCE LIST — every lemma walked, including the clean ones

⛔ **This section is the deliverable.** 7a″ measures the difference between a range whose prompt
named the words and one told merely to be careful. Below is every span in the 294 that touches
scripture, sorted into: marked · real but declined · collated and clean.

### 3.1 Divergences that are REAL and were DECLINED, with the reason

- **0932C `*ab ipso salutare meum*`** — Clem Ps 61:2 *ab ipso **enim** salutare meum*. Migne drops
  the particle only. Excluded by §C1's settled rule against letter-and-particle `[var:]`.
- **0932D `*Et quasi maceria*`** — Clem Ps 61:4 reads *tam**quam** parieti inclinato et maceriae*.
  Migne's *quasi* for *tamquam* is a synonym substitution in a phrase he is paraphrasing, not
  quoting; the marker went on *impulsae*, which the gloss actually names.
- **0933A `*Gloriosa dicta sunt de te, civitas.*`** — Clem Ps 86:3 *civitas **Dei***. Truncation at
  the point the gloss needed, not a divergence.
- **0933B `*Corda,*`** — Clem Ps 61:9 *effundite coram illo **corda vestra***. Truncation.
- **0933B "mendaces in **statera**"** (gloss prose, unitalicised) against the lemma
  `*Mendaces in stateris*` (plural) eight words later, and Clem Ps 61:10 *in stateris*. Migne is
  inconsistent with himself inside one paragraph. **Both rendered as printed** — singular "in the
  balance", then plural "in the balances" — and neither marked: the first is gloss prose, not a
  quotation.
- **0934B `*Quia super vitas.*`** — Clem Ps 62:4 *Quo**niam** melior est misericordia tua super
  vitas*. Migne is re-cutting his own lemma (`Vel sic,`), and *Quia*/*Quoniam* is the commonest
  interchange in the Psalter.
- **0934C "Levantes puras manus **in oratione**, sine ira et disceptatione"** (unitalicised, cited
  as *unde Apostolus*) — Clem 1 Tim 2:8 *Volo ergo viros **orare in omni loco**, levantes puras
  manus sine ira et disceptatione*. Migne's *in oratione* is not in the verse at that point;
  it supplies from the verse's own first clause. **Rendered as printed** ("Lifting up pure hands in
  prayer") — declined because the insertion is explicative and changes nothing the gloss argues.
- **0934D `*de luce vigilo ad te*`** — Clem Ps 62:2 and Migne's own lemma at 0933D both read
  **ad te de luce**. The gloss cites *ut supra* and reverses its own word order. ⚑ **The English
  keeps the printed order** ("from the light I watch unto thee"). Declined as a self-citation with
  no sense at stake — but it is exactly the shape 7a″ warns about, so it is logged rather than
  smoothed.
- **0934D `*Ipsi vero in vanum quaesierunt animam.*`** — Clem Ps 62:10 *animam **meam***. Truncation.
- **0935A `*Ego in Patre, et Pater in me.*`** — Clem Jo 14:10 *… et Pater in me **est***. Truncation.
- **0935B `*Expedit ut unus moriatur.*`** — Clem Jo 11:50 *expedit **vobis** ut unus moriatur
  **homo pro populo***. Truncation at both ends.
- **0935A `*et eripe,*`** — Clem Ps 63:2 has *a timore inimici **eripe** animam meam* with no *et*.
  The *et* is the gloss's connective inside a clipped lemma, not a reading.
- **0936A `*Nostra conversatio in coelis est.*`** — Clem Phlp 3:20 *Nostra **autem** conversatio in
  caelis est*. Particle only.
- **0936B `*De populo transmigrationis.*`** — Clem Ps 64:1 *populo transmigrationis* with no *De*.
  A lemma addressed as a heading.
- **0936D `*Non vos me elegistis, sed ego vos*`** — Clem Jo 15:16 *sed ego **elegi** vos*. ⭐ Migne
  drops the main verb. **Declined**: the ellipsis is recoverable from the first clause and the
  sense is unchanged, and §C1 excludes this size. **The English is elliptical too** — "but I you",
  not the familiar "but I have chosen you" — so nothing is conformed either way.
- **0937D `*Desertum:*`** — Clem Ps 64:13 *speciosa **deserti***. The gloss re-inflects its own
  lemma to nominative; that is what a gloss does.
- **0939A "Non **dedisti** in commotionem"** (unitalicised) — Clem Ps 65:9 *et non **dedit** in
  commotionem pedes meos*. Migne turns the third person into the second, consistently, across the
  whole paragraph (*probasti … dedisti … examinasti*). **Rendered in the second person** as printed.
  Declined: the shift is the gloss's own address to God, not a corrupt quotation.
- **0940A "in gentibus Christus"** — Clem Ps 66:3 *in omnibus gentibus salutare tuum*. Paraphrase.

### 3.2 Verse addresses that do not line up with the Clementine's numbering — checked, not defects

Migne's `VERS. n.--` addresses a **block**, and twice the block opens on a phrase the Clementine
numbers one verse earlier. **0938B `VERS. 3.-- *Date gloriam*`** is Clem Ps 65:**2**, and the same
block then glosses *Quam terribilia* = Clem 65:3. **0939A `VERS. 12.-- *Laqueum*`** is Clem
Ps 65:**11**, the block continuing into *Transivimus* = Clem 65:12. Both are Migne's own division
of the psalm, both were checked against the flat Clementine rather than assumed, and neither is
touched. Every other address in the range lands on its Clementine verse.

### 3.3 Collated and AGREEING with the Clementine — the checked negatives

Ps 59: *In finem pro his* · *Deus, repulisti nos* · *Et destruxisti* · *iratus es* · *misertus* ·
*Ostendisti* · *Dura* · *Vino* (both) · *Arcus* · *Dextera tua* · *Deus locutus est* · *Laetabor* ·
*Sichimam* · *Convallem tabernaculorum* · *Manasses* · *fortitudo capitis* · *Moab olla spei meae*
(both) · *Civitatem munitam* · *In Idumaeam* · *Non egredieris*.
Ps 60: *Clamavi dum anxiaretur* · *Exaltasti me* · *In petra* · *Deduxisti me* · *Inhabitabo* ·
*In saecula* · *Protegar in velamento (alarum)* · *Quoniam tu, Deus meus, exaudisti orationem* ·
*Dedisti* · *Dies super dies* · *Misericordiam et veritatem* (both).
Ps 61: *In finem pro Idithun* · *Nonne* · *non veniat mihi pes superbiae* and *et manus peccatoris
non moveat me* (**Ps 35:12, verbatim**) · *Non movebor amplius* · *Deo subjecta* · *Quousque
irruitis* · *super hominem* · *Universi vos* · *In hominem* · *Pretium* · *Cogitaverunt* ·
*Cucurri in siti* · *Ore suo* · *Verumtamen Deo* · *In Deo, salutare meum* · *Sperate* ·
*Effundite* · *Verumtamen vani* · *In stateris* · *In idipsum* · *Nolite sperare in* · *Rapinas* ·
*Affluant* · *Nolite cor (apponere)* · *Semel locutus est* · *potestas* · *Potestas Dei est*.
Ps 62: *Psalmus David* · *Deus, Deus meus, ad te de luce* · *Deus meus* · *De luce* (both) ·
*Vigilo* · *Sitivit in te anima mea* · *Deserta* · *Invia* · *Inaquosa* · *Sic in sancto apparui
tibi ut viderem* · *Super vitas* · *Labia mea* · *Laudabunt* · *Sic benedicam* (both) · *In nomine
tuo levabo manus meas* · *Levabo manus* · *Adipe* · *Si memor fui* · *In matutinis* · *me suscepit*
· *dextera tua* · *In inferiora terrae* · *Partes vulpium erunt* · *In Deo* · *Jurant*.
Ps 63: *Exaudi, Deus, orationem* · *A timore inimici* · *Protexisti me* · *Quia exacuerunt ut
gladium linguas* · *Arcum* · *Amaram* · *Subito sagittabunt* · *Non timebunt* · *Firmaverunt* ·
*Sibi* · *Reus est mortis* (**Mt 26:66, verbatim**) · *Sanguis ejus super nos et super filios
nostros* (**Mt 27:25, verbatim**) · *Ut absconderent* · *Scrutati* · *Accedet homo* · *Ad cor
altum* · *Sagittae parvulorum factae* · *Conturbati* · *faciemus, viri fratres* (**Act 2:37,
verbatim**) · *Et timuit omnis* · *Et facta ejus intellexerunt* · *Laetabitur justus in Domino* ·
*Omnes*.
Ps 64: *In finem* · *Jeremiae* · *Ezechiel* · *Te decet* · *reddetur votum* · *Sion* · *Exaudi
orationem meam* · *Omnis caro* · *Verba iniquorum* (both) · *ad te omnis caro veniet* ·
*Praevaluerunt* · *Propitiaberis* · *Beatus quem elegisti* · *In bonis* · *Templum* · *Mirabile* ·
*In aequitate* · *Spes omnium* · *Et in mari longe* · *Praeparans montes* · *In virtute tua* ·
*Accinctus* · *Qui conturbas profundum maris* · *Sonum* · *Matutini et vespere* · *Delectabis* ·
*Visitasti terram et inebriasti eam* · *Flumen* · *Flumen Dei* · *Rivos ejus* (both) · *Inebria* ·
*Multiplica* · *Coronae anni* (both) · *Parasti* · *Benignitatis tuae* · *Campi tui replebuntur* ·
*Colles* · *Pinguescent speciosa deserti* · *Valles* · *Clamabunt*.
Ps 65: *In finem* · *Jubilate Deo, omnis terra* · *Date gloriam* · *Quam terribilia* · *Opera tua,
Domine* · *In multitudine virtutis tuae* · *Mentientur* (both) · *omnis terra adoret* · *Venite* ·
*Qui convertit (mare)* · *In flumine* (both) · *Ibi laetabimur* · *In ipso* · *Non exaltentur* ·
*Omnes enim peccaverunt* (**Rom 3:23, verbatim**) · *Benedicite* · *Auditam facite* · *Vocem laudis
ejus* · *Hic est Filius meus* · *Qui posuit animam* · *Quoniam probasti nos* · *Laqueum* ·
*Transivimus* · *Introibo* · *In holocaustis* · *Distinxerunt* · *Et locutum est os meum* ·
*Holocausta medullata (offeram)* · *Incenso arietum* · *incenso* · *arietibus* · *Cum incenso* ·
*cum hircis* · *Offeram tibi boves* · *Venite, audite* · *venite* · *Ad ipsum ore meo clamavi* ·
*Ad ipsum* · *Meo* · *Orationem meam*.
Ps 66: *In finem* · *Deus misereatur nostri et benedicat* (all three) · *Confiteantur* ·
*Benedicat nobis* · *Confiteantur tibi populi, Deus* (both) · *Laetentur et exsultent* ·
*laetentur* · *Terra dedit fructum suum* · *Benedicat* · *nos. Deus, Deus noster* · *eum* ·
*Et metuant eum*.

### 3.4 A non-scripture italic span, for completeness
**0936A `*(XXV, XXIX)*`** — Migne italicises the Jeremiah chapter numbers. Passed through verbatim
as printed; it is a locator, not text.

---

## §4 · CRUCES — passages rendered literally with the difficulty named

**4.1 `sequitur clamoris exaudito in petra Christo` @0931D.** Will not construe: *sequitur* has no
nominative subject and *clamoris* is a stranded genitive. **Read at the plate at 500 dpi and it is
MIGNE'S, not CC's** — the plate prints `exaudito`. Conjecture: **`exauditio`**, giving "the hearing
of the cry follows, on the rock Christ", which is the sense the surrounding gloss demands (`In
anxietate … in petra Christo`). Rendered "there follows, of the cry heard, on the rock Christ" —
deliberately ungainly, because the plate is. ⛔ **No `[cj:]` fired**: Pattern 18's bar is that the
faithful English *asserts something false*, and this English asserts nothing at all; it is broken,
not misleading. The crux is the right home.

**4.2 `Misericordia est` / `Misericordiam est` @0932B.** See §5.1. Rendered from our TEI.

**4.3 `Communis *Deus meus* quodam modo specialiori` @0934A.** Verbless and elliptical; *Communis*
has no expressed noun. Rendered "Common, *my God* in a somewhat more particular way", supplying
nothing.

**4.4 `Profundi ad recipiendum repletum est aquis` @0937C.** *Profundi* agrees with nothing:
*repletum* is neuter, answering to *Flumen*. Rendered word for word, "Of the deep, for the
receiving, it is filled with waters." Not marked — every word is a real Latin word in a real form.

**4.5 `quia sic puritas orationis, auditur` @0939D.** Elliptical; the plate has no stop between
`auditur` and the following lemma (CC supplies one — see the patch queue). Rendered "because thus
is the purity of prayer, it is heard."

**4.6 `Mariae Christum` @0940C.** Dative or genitive; either way the sentence has no verb. The
following clause (`Sed non illa sola hoc debet`) makes *illa* = Mary, which fits both "the earth
gave Christ TO Mary" and "Mary's earth gave Christ." Rendered "To Mary, Christ" as the dative the
form most naturally gives, **with the rival named here rather than chosen silently**.

**4.7 `ne quod datum est humili auferatur superbo` @0938B.** *aufero* + dative normally means "take
from", which gives "lest what was given to the humble be taken away from the proud" — and nobody
gave it to the proud. The sense wanted is "be taken from thee, now proud". **Rendered as the words
stand**, contradiction included, per 7a.

**4.8 `Boves; cervicositatem` @0939C.** The verb is elided and supplied only at the end of the run
(`haec in me mactando vitia`). No verb supplied: "Oxen; stiffness of neck; *with he-goats,*
wantonness; these vices being slain in me."

**4.9 `Erat ei` @0935C.** "There was to him" — the subject is *cor altum* from the lemma
immediately above. Rendered "He had one."

**4.10 `Et exaltatum deduxisti` @0931D.** The object is unexpressed; it is *me* from the lemma
`*Exaltasti me*` two clauses earlier. Rendered "And thou hast led me exalted."

**4.11 `commovisti ab errore` @0931A.** Object unexpressed; *nos* from `*Deus, repulisti nos*`.
Rendered "thou hast moved us out of error."

**4.12 `quia sic videtur non pro temporali vita pugnare` @0931D.** The subject of *videtur* is the
man who *intus operaberis*, not God (who is the subject of *deducet* in the same sentence). Named
here because both construe; rendered "he is seen to fight not for the temporal life."

**4.13 `se eo egere, non illum se` @0939B.** ⚑ The §4-of-the-launch-brief class exactly: two
identical-looking pronouns whose morphology fixes who needs whom. *se … eo* = the man needs God;
*non illum se* = not God the man. `Deum omnia` stands two words earlier and fixes the antecedent.
**The antecedent is named in the English** — "that he himself has need of God, not God of him" —
rather than left to two bare "him"s that could be read either way.

**4.14 `quem non delectat ille qui pro eo voluit pati` @0937C.** *quem* is the object, *ille* the
subject. Rendered "whom he does not delight who was willing to suffer for him." Checked precisely
because a careless English would reverse it.

**4.15 `sed se quod charius est substraxit` @0939B.** *se* is the object of *substraxit* and *quod
charius est* is in apposition to it. Rendered "but he withdrew that which is dearer, himself."

**4.16 `quia Deus susceptor non movebor` @0932D.** The plate reads `quis`, not `quia` — see the
patch queue. Our TEI's `quia` construes and is what the English renders; the marker this unlocks
belongs to the patch pass, not to me.

---

## §5 · DECLINED — candidates I checked and did NOT mark

**5.1 `Misericordia est` @0932B — a read that could not settle the word.** Our TEI has
`*Misericordia* est`, and the plate looks like `Misericordiam est`, but the word sits in col 0932's
over-inked right margin and its terminal is a blot at 500 dpi under autocontrast. `Misericordia
est` construes ("it is *mercy*, because he forgives …") and `Misericordiam est` does not — **but
that is an argument, not a read**, and 8988's `aurursus` precedent says an unreadable word is not a
read word. Queued for Gallica. No marker.

**5.2 Three italic `e`s that image as `c` — declined as copy condition, not compositor error.**
`*Ostcndisti*` 0931A · `*omncs*` 0932D · `*Vallcs*` 0938A. Each reads as a confident wrong sort
from its own crop, and CC has the good letter in all three, so each looked like a class-2 patch
candidate. **Control:** italic `e` images correctly in dozens of places on the same six leaves
(`*Propitiaberis*` 0936D, `*Beatus quem elegisti*` 0936D, `*me suscepit*` 0934D, `*Pretium*`
0933A). Broken or under-inked type on this copy falls under the `possit`→`rossit` ruling and is
**not restored**. ⚑ **The finding for the next stint: the launch brief's `h`/`b` warning
generalises — in this scan family italic `e` can image as `c` too.** I would have reported three
false patch candidates if I had not looked for a control letter.
⚑ And the boundary matters: the turned-`n` pair `*Viuo*` 0931A and `*Clamabuut*` 0938A **is** in
the patch queue, because an `n` cannot become a clean bottom-arched `u` by failing to ink.

**5.3 `propitatio` @0934D — a non-word in our Latin, and NO `[sic:]` is owed.** The mirror of 5.2
and of Band A's `deeidam`. Every internal signal said fire: a form that is no Latin word, sitting
at the end of a clause. **The plate reads `propitiatio`.** The defect is Corpus Corporum's. The
English renders "propitiation" and the site is in the patch queue.

**5.4 `Scrutina` @0935C.** Not classical, and Clem Ps 63:7 has *scrutinio*. Declined under Pattern
9 — an attested medieval form, and the gloss treats it as a plural (`id est, acerba et occulta
consilia`). Rendered "Searchings", no italics, no marker.

**5.5 `Aggoeus` @0936A.** Migne's spelling for Aggaeus, confirmed on the leaf (with the `œ`
ligature). Kept as printed; not normalised, not marked.

**5.6 `Rex vero` @0934D set in roman where it is plainly a lemma.** Confirmed roman on the plate.
Not our TEI's doing, and not a defect to mark; rendered as ordinary text, as Migne sets it.

**5.7 `quia Deus erigit humiles *Desertum:*` @0937D — no stop before the lemma.** Confirmed on the
leaf. Pattern 8 forbids supplying one, so the English carries the run-on: "because God raises up
the humble *The desert:* all the Gentiles". It reads oddly. It is what he printed.

**5.8 `(CAS.)` against `(CASS.)`.** 0937D's `(CAS., AUG.)` **is** a CC change (the plate has
`CASS.`) and is queued per-site. ⛔ **It was NOT swept**: Migne's own `(CAS.)` stands three times on
the same page — 0937A, 0937C, 0938B — and each was checked on the leaf. The Band A warning against
sweeping this siglum holds here exactly.

**5.9 Column-band arithmetic.** Nothing raised. 0932B→0932C→0932D→0933A runs normally, and
0937D→0938A breaks at a paragraph, not mid-word. Runbook false positive 1.

**5.10 `noteCount`.** Frontmatter and body agree in all five chunks (28 / 38 / 19 / 28 / 40).
Nothing to report.

---

## §6 · CONVENTIONS APPLIED, AND THE AXES MEASURED IN MY OWN RANGE

**Inherited from §A without re-deriving:** `In finem` → **"Unto the end"** (5 occurrences: 0930D,
0932C, 0936A, 0938A, 0939D) · `Diapsalma`/`Diapsalmus` **roman, unanglicised, never "Selah"**
(7 occurrences, and **7 more plate confirmations** at 0931B, 0932A, 0933A, 0933B, 0938C, 0938D,
0939C) · `Psalmus David` kept distinct from `Psalmus ipsi David` (0933D is the plain form) ·
Vulgate numbering, nothing converted · heads follow Migne's numerals — every head in my range is
`PSALMUS LIX.`–`PSALMUS LXVI.` in numerals, so `PSALM LIX.` … `PSALM LXVI.`, none spelled out ·
`VERS. n.--` passes through verbatim.

**`usque ad` — 40 occurrences, and the instrument was checked.** 38 are the italic abridgment
formula and take **"as far as"**. **Two are unitalicised look-alikes** and are rendered by sense:
**0931D `id est, usque ad terrenos`** → "even to earthly men" (extension), and **0932A `quae usque
ad finem mundi accolit`** → "until the end of the world" (temporal). Both were decided from what
stands on either side, per the brief's §D addendum.

**The `gentes` axis — 10 occurrences, decided per site, with the reason.**
- **Gentiles** (7), every one inside an explicit *Judaei*/*gentes* opposition: 0937D *omnes gentes,
  quibus nullus propheta missus* (Israel had prophets, these had none) · 0938A *pro fide gentium*,
  in a sentence opening *Judaei ex legis justitia* · 0938B *invident gentibus gratiam*, against
  *Non ut Judaei* · 0938B *exclusis mendacibus Judaeis, adhibentur gentes* · 0938C *pertinere ad
  gentes, repressis Judaeis* · 0938D *Monet gentes benedicere Deum* and 0939C *o vos gentes* and
  0939C *cum gentes ad idola*, all three continuing that same argument through Ps 65.
- **nations** (2), where the sense is plainly generic: **0936B `deos gentium`** ("the gods of the
  nations", the Ps 95:5 formula, no Jew/Gentile pivot in sight) and **0940A `cognoscitur in
  gentibus Christus`**, which glosses Ps 66:3 *in omnibus gentibus salutare tuum* — the universal
  formula the axis names.
- **No singular `gens` in the range**, so ⚑ **`gens tenebrarum` does not occur here** and I had
  nothing to flag. The open ruling stands untouched.
- `natio` → **nation**: one real occurrence, **0933D `in medio pravae nationis`** (Phlp 2:15).
  ⚠ The instrument lies: a raw `natio` grep returns four hits in my Latin and three are
  *incarnationis*, *geminationem*, *Obstinatione*.

**`turba`/`multitudo`.** ⚠ A raw `turba` grep returns six hits **and not one is the noun** —
*turbati*, *turbasti*, *Conturbati*, *conturbata*, *conturbas*, *conturbans*, all *turbare*.
`multitudo` occurs once, **0938B `In multitudine virtutis tuae`** → "In the multitude of thy
strength". No bleed either way, and no drift to report.

**`daemonium`/`diabolus`.** Three occurrences, all *diabolus* (0933C ×1, 0937D ×1, and *diaboli*
0936C) → **devil**. No *daemonium*, no *satanas*.

**`mysterium`/`sacramentum`.** One occurrence, **0938B `mysteria incarnationis`** → "mysteries".
No *sacramentum*.

**Not present in my range**, and checked rather than assumed: `Dominus virtutum` (0 — the only
`virtut-` are *virtute/virtutis/virtutum*-free forms belonging to *In virtute tua* and *In
multitudine virtutis tuae*) · `sedes` (0) · `gentilis`/`gentilitas` (0) · `ethnicus` (0) ·
guillemets « » (0 in all five chunks) · `Canticum graduum` (0 — Band C's, as the brief says).

**Archaism, with BOTH memberships tested.** ⚑ **The test caught two of my own.** No guillemets
occur in this range, so italic membership is the only handle, and a sweep of `-eth` / `saith` /
`doth` / `hath` returned **eight** forms. Six are licensed, standing inside italic lemmata:
*Who turneth* and *Who turneth the sea* @0938C · *Power belongeth to God* @0933D · *A hymn becometh
thee* @0936B · *God hath spoken* @0931B · *He hath spoken once* @0933C (plus *My soul hath
thirsted*, *it hath upheld me*, *And my mouth hath spoken*, *Who hath set my soul*, *The earth hath
given her fruit*). **Two were GLOSS VOICE and were repaired**: "the Lord hath strengthened me"
@0936A (the etymology of *Ezechiel*, unitalicised) → "the Lord strengthened me", and "he for whom
the Lord hath suffered" @0937C → "he for whom the Lord suffered". A third, "is shewn" @0936A for
*ostenditur*, was normalised to "is shown" — an archaic spelling in the commentator's own voice.
⚠ A fourth sat inside a `[var:]` marker, whose content is OURS and is required to be plain: the
Sir 22:24 gloss read "he that pricketh … bringeth forth" and now reads "he who pricks … brings
forth". Second person
follows Pattern 17 strictly: **thou/thee/thy** wherever the Latin is singular (the psalmist to God,
0931A *repulisti*, *destruxisti*, *misertus*; the gloss to its reader, 0932D *putas*, 0933A
*putes*, 0933C *tenes*, *invenis*, *perdis*, 0934A *vigilares*, *te excitaret*, 0938B *gaudes*,
*insultes*, *time*) and **ye/you** wherever it is plural (0932C–0933A *irruitis*, *apponitis*,
*interficitis*, *Universi vos*, *vobis data est*, *putatis*; 0933C *Nolite*, *speretis*,
*cupiatis*). No number is invented and none is lost.

---

## §7 · THE THREE CONTAINMENT TESTS, AND THE FOURTH

**Test 1 — a marker must not swallow the word it marks.** Vacuous by construction here: no
`[sic:]`, `[d:]` or `[cj:]` was fired, and `[var:]` is additive by definition. I ran the mechanical
form anyway — stripped every marker from all five English chunks and read what was left. No
stranded article, no doubled punctuation, no clause missing its object. Each of the eleven marked
lemmata carries its own full English **outside** the bracket.

**Test 2 / 2a — name the host, then find it.** I walked all **125** printed negatives
(`non` 84 · `ne` 14 · `nec` 8 · `nisi` 7 · `nolite` 6 · `nihil`/`nil` 3 · `nullus` 2 · `nunquam` 1)
and named the single Latin word each attaches to before checking the English. Every one is present
and on its host. The trigger population 2a defines — a negative on a verb with a quantifier or
correlative nearby — fired **nine** times and each was resolved from the sentence's own structure,
never from what read well:

- **0932D `non *omnes* unum, sed Ecclesiam`** — host is *unum*, proved by the `sed Ecclesiam`
  pivot, not by *omnes* standing next to the *non*. English keeps Migne's own word order.
- **0936C `non solum anima, sed etiam malus homo`** — host is *solum anima*; "not the soul only,
  but the evil man also".
- **0936A `Ne putes de solis Apostolicis dici`** — the negative is on *putes*, and *solis* is
  **affirmed** inside it. The 8990 trap runs the other way here and the English keeps "alone"
  positive: "Do not think that it is said of the apostolic men alone."
- **0940C `Sed non illa sola hoc debet`** — host is *illa sola*, the exact 8990 shape. "But not she
  alone owes this", **not** "she alone does not owe this".
- **0940A `in utroque nos crescimus, non ipse`** — host is *ipse*: "it is we that grow, not he."
- **0931D `non pro temporali vita pugnare, sed pro futura`** · **0935A `non per eum … sed in eo`** ·
  **0937B `fides non a nobis, sed ab eo`** · **0939C `ipsi non per se, sed potius adjuncti bobus`**
  — in all four the `sed` correlative is a phrase, so the negative is on the phrase and not on the
  adjacent verb.

⚑ **And the apposition rule from §4 of the launch brief, applied twice.** **0932B `et post sibi
vivat, non illi`** — the negative belongs on the second dative, and English apposition will not
inherit it, so it is marked twice: "live to himself, **not** to him." **0935B `Non Domino, sed
sibi`** — "**Not** for the Lord, but for themselves." Neither was allowed to sit behind a comma.

**Test 3 — punctuation compared BY COLUMN BAND, never by total.** Anchors are verified 1:1 and in
order, so they partition both twins identically. I compared colons, semicolons and question marks
band by band across all 45 bands (40 anchored bands plus the five chunk heads). **The first run
failed in 19 of them** and the failures were real:
I had supplied a colon at `In saecula, non unus homo` @0932A, another at `Vel sic, propitiaberis`
@0936D, another at `Quae bona sunt` @0936D; and at **0935C** a supplied colon and a destroyed
semicolon **cancelled in the total** (`Mos malorum; qui dolum parat` had become "The way of the
wicked: he who prepares") — exactly the cancellation the by-band form exists to catch. All 21 sites
across those 19 bands were repaired against the Latin. **Final state: 45 of 45 bands match on all three marks.**
⛔ No comma→semicolon sweep was run: Migne prints plenty of semicolons in this range himself.

**Test 4 — does the English ASSERT what he asserts?** Read back paragraph by paragraph against the
Latin with the counts already clean. What it caught, in order of how well each read before the
check: **4.13** (`non illum se` — two bare "him"s that parsed either way; the morphology and
`Deum omnia` settle it) · **4.14** (`quem non delectat ille` — the smooth English reverses subject
and object) · **4.12** (whose *videtur* it is) · **4.10** and **4.11** (objects lifted from lemmata
two clauses back, not from the sentence) · and the one that reads best of all and is still wrong on
its own terms, **4.7**, where the printed sentence takes a gift from the proud that nobody gave
them and the English keeps the contradiction.

---

## §8 · SECTIONS READ CLEAN

Ps LIX in full (0930D–0931D) apart from the three sites marked · Ps LX (0931D–0932B) apart from
0932B's two · **Ps LXIII entire (0935A–0936A) — 25 spans, 19 notes, no marker, no patch site, and
the only crux in it is `Scrutina`, declined under Pattern 9** · Ps LXVI (0939D–0940C) apart from
`Mariae Christum`.

---

## §9 · FOR THE MERGE, AND FOR WILSON

1. **Nothing in §A broke on these psalms.** No inherited convention needed an exception; the one
   open question (`gens tenebrarum`) does not occur in cols 0930–0940, so it is still owed.
2. **A new plate-reading hazard, and it is the same shape as the brief's `h`/`b` warning:**
   ⚠ **in this scan family italic `e` can image as `c`.** Three sites in eleven columns
   (`Ostcndisti`, `omncs`, `Vallcs`). All three declined as copy condition, on a control letter
   from the same leaf. **Bands B and C should carry this next to the `h`/`b` note**, because each
   of the three reads as an obvious compositor error from its own crop and would have gone into the
   patch queue as a class-2 candidate.
3. **17 TEI-patch sites reported**, appended to `data/briefs/8967-PENDING-TEI-PATCHES.md` — 5 where
   CC has words the plate lacks (including a **suppressed dittography** at 0934C and a **supplied
   verse number** at 0939A), 11 where CC repairs a Migne defect, plus the mirror case
   (`propitatio`) where CC *creates* one. **One of them touches sense** and should be read first:
   **0936C `Christum` for `Christus`.**
4. **One site this copy cannot answer**, for the Gallica list alongside Band A's f443/f449/f453:
   **0932B `Misericordia`/`Misericordiam`**, in col 0932's over-inked outer margin.
5. **11 `[var:]`, 0 `[sic:]`, 0 `[cj:]`, 0 `[d:]`, 0 `[ed:]`.** All eleven on columns read today;
   `plate-gate.mjs` OK. The three I would put in front of an editor first are **0933A `Subjecta est`
   for `subjecta esto`** (Migne's own gloss argues for the imperative he did not print), **0933B
   Sir 22:24** (three divergences in one citation, the operative word among them), and **0939D `in
   corde` for `sub lingua mea`** (the gloss's whole antithesis is built on the divergent phrase).
