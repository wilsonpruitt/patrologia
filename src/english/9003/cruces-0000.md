# 9003 · *Expositio in XX primos Psalmos* — cruces, chunks 0000–0004 (cols 0751C–0762A)

Translator's range: chunks **0000–0004**, PL 114 cols **0751C–0762A**, 4,154 Latin words.
Apparatus fired: **1 `[sic:]` · 11 `[var:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` · 0 `[n:]`**
— ⚠ **revised 2026-08-28**, was 10 `[var:]`: the plate collation added one @0758C (Ps 3:9
*Domine* for *Domini*), which the digitization had erased. See **PLATE COLLATION — markers
withdrawn** at the foot of this file.
(the work carries `noteCount: 0` throughout, as the launch brief states, and none was invented).
`verify-english.mjs` clean for these five chunks; column anchors, `?`, `«»`, `:` and `;` all at
band-by-band parity with the Latin twins (see §5); italic spans 1:1 in every chunk.

---

## §0 · ⛔ THE HEADLINE FINDING: OUR LATIN TWIN DIVERGES FROM MIGNE'S PLATE AT ~ONE SITE PER COLUMN

**This is the most important thing in this file and it is not a translation question.**

I read the plate for my whole column range (archive.org `patrologiaecurs06saingoog`, PDF page =
(column + 11) / 2 — re-verified against the printed corner numbers on p. 384, which reads **757**
in the left corner, and on p. 386, which reads **761**; renders at 300 dpi). I read pp. 381, 382,
383, 384, 385, 386. **Thirteen places where our chunked Latin does not say what Migne printed.**
They run in *both* directions — some are corruptions introduced by the digitization, more are
silent *normalizations* of Migne's own defective type — which is brief §4's class, at a density
nobody has yet reported for a Glossa book.

| col | Migne's plate prints | our Latin twin reads | direction |
|---|---|---|---|
| 0753B | *quod **si** consilium impiorum* | *quod **sit*** | normalized (plate does not construe) |
| 0753B | ***Cathera** autem pestilentiae* | ***Cathedra*** | normalized (plate is a non-word) |
| 0755D | *Quare **fremueruut** gentes* | *fremuerunt* | normalized (broken sort) |
| 0755D | *et **populii** meditati sunt* | *populi* | normalized (doubled sort) |
| 0755C | *In concilio populi mei non erunt, **ut** in scriptura…* | *…, **et** in scriptura…* | normalized **toward the Vulgate**, which reads *et* |
| 0756D→0757A | *…ne idipsum **ver-** \| **geret** in effusionem…* (word split across the column break) | *vergeret [0757A] geret* — **both halves, plus the join** | duplication artifact |
| 0758B | *Non **inconvenienter** animadverti potest* | *incovenienter* | **corrupted** by the digitization |
| 0758C | *et quasi **incorpora-\|litur** male viventibus* | *incorporatur* | normalized (plate is a non-word) |
| 0758C | VERS. 8.-- ***Domine** est salus* | *Domini est salus* | normalized toward Vulg. Ps 3:9 |
| 0759C | *Aut: **Agite** poenitentiam* | *Agile* | **corrupted** by the digitization |
| 0760C | VERS. 2.-- *Verba mea **oribus** percipe* | *auribus* | normalized toward Vulg. Ps 5:2 |
| 0760D | *qui **mundo** conspicitur* | *qui **mundo corde** conspicitur* | **word supplied** (from Mt 5:8) |
| 0761A | *Virum sanguinum **operantur** iniquitatem* | *operantem* | normalized (plate does not construe) |

⚑ **What follows from it, and it binds any later reader of this work:**

1. **No `[sic:]` or `[cj:]` may be fired anywhere in 9003 on the strength of the Latin twin alone.**
   The twin has already been cleaned of most of the plate's defects; a marker keyed to it would
   either miss the real defect or, worse, blame Migne for a reading he does not carry. My single
   `[sic:]` (§1) is safe **only** because I read its plate line.
2. **The fix is a `data/tei-patches/9003.json` + re-chunk**, on the 8968 *significaRuth* precedent.
   That is outside a translating agent's remit and it must not be done mid-batch (re-chunking
   rewrites the Latin from TEI and can move chunk boundaries). **I am escalating it, not doing it.**
3. **Until it is done, my English follows the TWIN, not the plate**, everywhere except the one site
   where the twin is nonsense (0757A, below). I made that call deliberately and I record the
   reasoning so it can be overruled: our English sits in a parallel column beside *the twin*, every
   marker's safety check is a substring test against *the twin*, and an English column that
   contradicts its facing Latin misleads the reader worse than one that matches it. Pattern 7's
   "render the plate" is satisfied instead by this table, which names every place the two part.
4. **A second witness is available and was not needed here** — the on-disk PDF is legible at 300 dpi
   at every one of the thirteen sites. Nothing in my range is recorded as illegible.
5. ⚠ **The rate should not be assumed to stop at col 0762A.** I read six pages; thirteen sites is
   ~2.2 per page. Chunks 0005–0017 have not been collated and **must not be assumed clean.**

### The one site where the English departs from the twin: 0756D→0757A, *vergeret geret*

The twin reads `…ne idipsum vergeret [0757A] geret in effusionem temeritatis…`. **The plate settles
it: col. 756 ends `…ne idipsum ver-` and col. 757 opens `geret in effusionem temeritatis` (p. 384,
left column, first line — read at 300 dpi and again magnified).** So Migne prints ONE word,
*vergeret*, split across the column break, and our source has transcribed the fragment twice and
joined it once.

- It takes **no `[d:]`**: that marker's tooltip says "Repeated in Migne's plate," and Migne repeats
  nothing. Firing it would be one of the seven false-`[sic:]` class the brief's Addendum B records.
- It takes **no `[sic:]`**: *geret* is not in Migne's text at all.
- English: *"lest that same thing should incline [0757A] into an outpouring of rashness"* — one verb,
  and the anchor placed exactly where Migne's column break falls, i.e. before *in effusionem*.
  This is Pattern 13a clause 1 (source damage, plate certain → restore silently, log the crux),
  applied to an *added* word rather than a lost one.

---

## §1 · THE ONE `[sic:]` — 0751D *partiorem*, and it is Migne's own

Migne prints, in Pez's preface: *qui me aliunde in propinandis theologicis non nihil **partiorem**
esse cupiunt*. **Plate-verified (p. 381, left column): the plate reads *partiorem*, and our twin
agrees** — this is one of the few places in my range where twin and plate do not part.

*partiorem* is no Latin form: there is no positive *partis* to give a comparative *partior*, and the
deponent verb *partior* has no such accusative. It occupies a predicative comparative slot
(*me … partiorem esse*) that only an adjective can fill, so Pattern 12's first test applies — **it
has no grammatical slot** — and it is carried type, not a real word merely misused.

- Marker: `not inconsiderably more sparing [sic: *partiorem*] in the serving up of theological matters`.
- **7a⁗ satisfied: the sense is in plain words OUTSIDE the marker.** Strip the bracket and the
  sentence still reads and still asserts what Pez asserts. This was checked mechanically (§5).
- **The conjecture is *parciorem*, "more sparing," and it lives here, not in the text.** The argument
  fixes it: the very next clause is *gravior essem, decrevi non nisi primorum viginti psalmorum
  expositionem … inserere* — he cuts the edition down because these men want *less* theology from
  him, not more. The rival reading, taking *partiorem* from *partior* ("more given to sharing"),
  would make them ask for **more**, which the sentence's own purpose clause refutes. **That rival is
  named and rejected on that ground; the marker takes neither reading into the text.**

---

## §2 · 7a″ — THE VULGATE COLLATION. Every lemma in cols 0751C–0762A, checked.

Collated against `sources/vulgate/clementine-flat.txt`, cited from the Clementine by book chapter:verse.
**226 italic spans were listed for the work; 221 of them fall in my columns and every one was walked.**
Ten took a `[var:]`. The rest are recorded below as checked — including the ones that came back clean,
because a findings-only list cannot be told from a list nobody made.

### 2a · The ten `[var:]` markers, with the Clementine reading each rests on

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0753B | *Dixerunt **impii** apud se non recte cogitantes* | Sap 2:1 *Dixerunt enim cogitantes apud se non recte* | ⭐ Migne **inserts *impii***, and *impii* is the word the whole paragraph is glossing (*consilium impiorum*). The proof-text has been made to contain the term it is adduced to prove. |
| 0753B | *Spatiosa via est quae ducit ad **mortem*** | Mt 7:13 *…quae ducit ad **perditionem*** | a different noun, and "death" against "perdition" is a change a reader would take away. |
| 0757B | *Non possunt filii sponsi **jejunare*** | Mt 9:15 *Numquid possunt filii sponsi **lugere*** | ⭐ Matthew's clause with **Mark's verb** (Mc 2:19 *jejunare*), and Migne's statement where the Vulgate has a question. Plate-verified p. 384. |
| 0757C | *Filius primogenitus **inter** Israel* | Ex 4:22 *Filius **meus** primogenitus Israel* | ⭐ *meus* dropped, *inter* inserted: "a firstborn son **among** Israel" instead of "Israel is **my** firstborn son." A different assertion. Plate-verified p. 384. |
| 0757C | *Pater, **ignosce** illis* | Lc 23:34 *Pater, **dimitte** illis* | a different verb in the most familiar sentence in the passage — exactly where 7a″ says the remembered English arrives first. |
| 0758B | *…et **continget** te Christus* | Eph 5:14 *…et **illuminabit** te Christus* | ⭐ "Christ shall **touch** thee" for "shall **enlighten** thee." Plate-verified p. 384: the plate reads *continget*. |
| 0758D | ***Gaudemus** in tribulationibus* | Rom 5:3 *…**gloriamur** in tribulationibus* | a different verb; the twin's *scientes quoniam* for *scientes quod* is not marked (conjunction only). |
| 0759C | *… longe est a me. **Cubicula** autem ipsa sunt corda* | Ps 4:5 *…in **cubilibus** vestris compungimini* | ⭐ Migne glosses **chambers** where the psalm has **couches**, and builds Mt 6:6's *cubiculum* on it (*ut intus oremus clausis ostiis*). The gloss depends on the divergent word. |
| 0760A | *…erat **anima et cor unum*** | Act 4:32 *…erat **cor unum et anima una*** | order reversed and the pair collapsed to one adjective. Plate-verified p. 385. The *cinis et pulvis* class from 7a″. |
| 0760B | VERS. 1.-- *In finem pro ea quae **veritatem** consequitur* | Ps 5:1 *pro ea quae **haereditatem** consequitur* | ⭐⭐ **The most consequential divergence in my range.** Migne's psalm title says "she that obtaineth **the truth**"; the Vulgate says "**the inheritance**". And Migne's own gloss on that same verse is entirely about *haereditas* (*accipit haereditatem in vitam aeternam … ut ipsa fiat haereditas Dei*), and at 0761A he **re-quotes his own title correctly**: *Hic autem psalmus pro ea est quae **haereditatem** consequitur.* So the plate contradicts itself one column later. Plate-verified p. 385 (both occurrences). |

⚠ **Why the 0760B site took a `[var:]` and not a `[cj:]`.** Pattern 18's decline list is explicit:
*a divergence inside a QUOTED SCRIPTURE is Pattern 14, not this* (the 7561 @0664 *modio/medio*
ruling). A psalm title is quoted scripture. The `[cj:]` shape was weighed — the internal
contradiction at 0761A is exactly the kind of evidence 18 wants — and **rejected on where the
divergence sits, not on how strong the argument is.**

### 2b · Lemmata checked and found to AGREE with the Clementine (no marker, and that is the finding)

Ps 1: *Beatus vir qui non abiit…* (1:1–2, verbatim, including the *sed in lege Domini* tail) ·
*Et erit tanquam* (1:3) · *in tempore suo* · *et folium ejus non defluet* · *Non sic impii* ·
*Sed tanquam pulvis* · *Ideo non resurgent* · *in judicio* · *in concilio justorum* ·
*Quoniam novit Dominus* · *iter peribit*.
Ps 2: *Quare fremuerunt gentes…* · *Astiterunt reges* · *Dirumpamus vincula* · *dirumpamus vincula
eorum* · *Qui habitat in coelis* (both) · *Tunc loquetur* · *ira Dei* · *Ego autem constitutus* ·
*Dominus dixit ad me* · *Postula a me* · *Reges eos in virga* · *In virga ferrea* · *Et nunc, reges* ·
*Servite Domino* · *cum tremore* · *Apprehendite disciplinam* · *de via justa* · *Cum exarserit in
brevi* · *in brevi*.
Ps 3: *Domine, quid multiplicati sunt* (both) · *Multi dicunt* · *Non est salus ipsi in Deo ejus* ·
*Tu autem, Domine, susceptor* · *Voce mea ad Dominum* · *De monte* · *Ego dormivi* · *Ego dormivi et
soporatus sum* · *Non timebo millia* · *Quoniam tu percussisti omnes* · *dentes peccatorum*.
Ps 4: *Cum invocarem exaudivit me* · *Deus justitiae meae* · *Miserere mei et exaudi* · *Filii
hominum* · *gravi corde* · *Et scitote quoniam* · *Irascimini et nolite* · *quae dicitis in cordibus
vestris* · *Sacrificate sacrificium* · *sacrificium justitiae* (both) · *Signatum est super nos* ·
*A fructu frumenti* · *frumentum et vinum et oleum* · *In pace in idipsum* · *Quoniam tu, Domine,
singulariter* · *Quis ostendit nobis bona?*
Ps 5: *Verba mea auribus percipe* (the twin's reading; the plate's *oribus* is §0) · *Intende voci* ·
*rex meus* · *Deus meus* · *Quoniam ad te orabo, Domine* · *Mane astabo* · *exaudies vocem meam* ·
*Neque habitabit* · *Odisti omnes qui operantur* · *Virum sanguinum et dolosum* · *Virum sanguinum* ·
*quae haereditatem consequitur* · *Introibo in domum* · *Introibo in domum tuam* · *in templo* ·
*ad templum* · *in timore tuo* · *Domine, deduc me* · *In conspectu tuo* · *viam meam* ·
*Quoniam non est in ore* · *Judica illos, Deus* · *Et laetentur* · *Et gloriabuntur* ·
*Domine, ut scuto bonae voluntatis*.
Inline scripture, agreeing verbatim: Jo 12:26 · Lc 23:31 · Apc 2:7 · Jo 7:38 · Jo 7:39 (truncated) ·
Mt 1:20 · Lc 24:44 · Lc 24:45 · Is 12:3 · Pr 18:4 · Lc 24:19 · Gal 4:4–5 (opening *At* dropped) ·
Pr 1:10–11 · Pr 9:13–14 (stopped at *sellam*, which is the word glossed) · Pr 9:17 · Job 21:14 ·
Jac 1:21 (*Propter quod* dropped) · Ez 13:9 (but see §0 for *ut/et*) · Pr 31:31 · Mt 7:22 · Mt 25:12 ·
Mt 7:23 (*nunquam*/*numquam* orthography only) · Mt 25:41 · Is 65:25 · Ps 48:14 · Ps 35:7 · Ps 50:19 ·
Ps 15:5 · Jo 12:36 · 1Cor 3:17 · Jo 2:19 · Mt 6:9 · Rom 8:33 · Jo 10:17–18 (see 2c).

### 2c · Divergences found, WEIGHED, and deliberately left unmarked — with the reason for each

A `[var:]` is a public claim, so the ones I declined are itemized rather than dropped:

- **0752D · 1 Jo 3:2 *scimus **quia*** for Vulg *scimus **quoniam***.** A conjunction; no reader takes
  anything different away. (Also *Charissimi*/*Carissimi*, orthography.)
- **0752D · *tanquam lignum plantatum secus decursus aquarum*** against Ps 1:3 *tamquam lignum **quod**
  plantatum **est** secus decursus aquarum*. A relative clause compressed to a participle inside the
  gloss's own sentence — grammar, not a different text.
- **0753A · Jos 1:8**, recast into indirect discourse by its own frame (*Dominus praecepit ut … non
  deserat, sed meditetur*), so *ut dirigat viam suam, et intelligat cuncta quae ait* against
  *tunc diriges viam tuam, et intelliges eam*. Person and mood follow the frame. ⚠ *cuncta quae ait*
  for *eam* is a real difference and I record it here rather than marking it, because the clause is
  visibly the gloss's own paraphrase, not a citation offered as verbatim.
- **0753B · Sap 2:6** drops *ergo*; **Sap 2:10** silently omits *et non parcamus viduae* mid-verse.
  Ellipsis inside a quotation, of the kind Migne marks elsewhere with *etc.* Recorded, not marked.
- **0753D · Jac 4:7–8: *appropiate **Domino***** for Vulg *Appropinquate **Deo***, with the Old-Latin
  *appropiate/appropiabit* forms and *Subditi ergo estote Deo* dropped. *Domino* for *Deo* changes no
  assertion in a sentence that has just named the devil as the other term. Declined, recorded.
- **0754A · Rom 6:4: *resurrexit Christus*** for *Christus surrexit*, and **Migne drops *vitae***
  (*in novitate ambulemus*, "walk in newness," not "in newness of life"). Weighed as the closest
  decline in my range. Left unmarked because *surgere*/*resurgere* is a synonym pair and the missing
  genitive removes a word without reversing anything; **but it is the site a later reader should
  re-open first if the bar is ever restated.**
- **0755A · Mt 24:35 *non **transibunt**** for Vulg *non **praeteribunt***, plate-verified (p. 383).
  A synonym: both are "shall pass away," and the gloss turns on the firmness, which survives either.
- **0755A · Is 65:22** *Secundum dies **enim**…* — particle position only.
- **0755B · Eph 2:2 *in filii**s** diffidentiae*** for Vulg *in filio**s***. Ablative for accusative;
  no English exponent worth a public claim, and Pattern 9's spirit covers it.
- **0755B · *Aquilo ventus durus*, cited *sicut scriptum est*, IS NOT IN THE CLEMENTINE AT ALL.**
  Searched the whole flat file for *aquilo*/*ventus durus*: no such verse (Sir 43:21's *frigidus
  ventus aquilo* is the nearest, and it is not this). Plate-verified as Migne's own (p. 383), so it is
  not our corruption. **A `[var:]` needs a received reading to name and there is none**, so the
  finding is recorded here instead: the gloss adduces as Scripture a sentence the Clementine does not
  contain. Recording a checked negative, per brief §4's instruction to keep them.
- **0755B · Jo 3:18 *Qui non credit **in Filium***** — the Vulgate has a bare *qui autem non credit*
  and supplies the object only in the following clause. Migne pulls it forward; nothing is asserted
  that the verse does not assert.
- **0757A/0757B · Ps 2:13 *confidunt in **Domino**** for Vulg *confidunt in **eo***. Same referent,
  named instead of pronominalized.
- **0757B · Ps 3:1 *a facie **filii sui Absalom**** for Vulg *a facie **Absalom filii sui***. Word
  order inside a title; plate-verified (p. 384) as Migne's.
- **0758B · Jo 10:17–18** is a conflation: *nemo **tollet** eam a **meipso*** welds 10:18's *Nemo
  tollit eam a me* to its own *ego pono eam a meipso*, and *quoniam*/*et iterum sumam* replace
  *quia*/*ut iterum sumam*. A conflation has no single "received reading" for a marker to name.
  Plate-verified (p. 384) as Migne's, and recorded here instead.
- **0758B · Is 2:2** word order (*Erit mons domus Domini praeparatus*) — reordered, nothing added.
- **0759C · Mt 15:8 *Labiis me honora**nt**** for *Populus hic labiis me honora**t***: the subject is
  dropped and the verb follows it into the plural. Grammar following an ellipsis.
- **0759D · *Quis novit si vera sunt, aut quis venit ab inferis, ut ista nuntiaret?*** is introduced
  *qui saepe dicunt* — the gloss putting words in the mouth of the foolish, echoing Sap 2:1's *non est
  qui agnitus sit reversus ab inferis* without quoting it. **Not a citation, so Pattern 14 does not
  reach it**; recorded so a later reader does not mistake the echo for a divergence.
- **0760C · Jo 14:6 *Per me itur ad Patrem*** for *Nemo venit ad Patrem, nisi per me*. An impersonal
  compression introduced by *secundum illud quod dictum est*; it asserts what the verse asserts, from
  the other side of the negative. Recorded, declined.
- **0761A · Ps 5:7 *Perdes **eos**, qui loquuntur mendacium*** for Vulg *perdes **omnes** qui…*.
  ⚠ This is the 2a trigger shape (a quantifier swapped out), so it was checked against the sense
  rather than the sound: the gloss's next clause is *quia recedentes ab eo quod est … declinant*,
  which is about the class, not about how many. Same referent. Declined, recorded.
- **0762A · Rom 5:10** as Migne prints it — *Si enim cum **adhuc** inimici essemus, Christus pro nobis
  mortuus est, multo magis reconciliati salvi erimus **ab ira per ipsum*** — is three verses woven
  into one: *adhuc* and *Christus pro nobis mortuus est* from 5:8–9, *ab ira per ipsum* from 5:9, the
  frame from 5:10 (whose own tail is *in vita ipsius*). **A `[var:]` must name one received reading
  and there is no one verse to name**, so it is recorded here. It is not our corruption: the weave is
  coherent and reads as a quotation from memory.

---

## §3 · MIGNE'S OWN PRINTING, NOT TIDIED

- **0755C · The gloss contradicts the verse it glosses, and that stands.** The lemma is Ps 1:5
  *Ideo **non** resurgent* (impii in judicio), and the gloss then says *Qui **resurgent** quidem in
  judicio, sed non in concilio justorum.* Rendered as printed — "Who indeed *shall rise in judgment,*
  but not *in the council of the just*" — with both negatives where the Latin puts them. The
  exposition is reading the psalm's *non* as governing only the second member; that is the author's
  argument, not a defect, and smoothing it either way would destroy it.
- **0762A · The chunk ends on a verbless sentence.** *Hoc invictissimum scutum, quo pellitur inimicus,
  desperationem salutis suggerens multitudine tribulationum et tentationum.* There is no finite verb
  in either language. Rendered as printed and stopped where Migne stops (Pattern 8: never supply).
- **0755B · Two construals, and I chose neither silently.** *projiciuntur a soliditate et stabilitate
  terrae in ventum praesentis, scilicet Ecclesiae et futurae* (plate-verified p. 383, punctuation and
  all). Either (i) *praesentis … et futurae* depend on *ventum* — "into the wind of the present, that
  is, of the Church, and of that which is to come" — or (ii) they depend on the distant *terrae*,
  giving "cast out from the solidity of the earth, present (that is, the Church) and to come, into the
  wind," which yields the better theology. **I rendered (i), because it keeps Migne's word order and
  therefore keeps both readings visible to a reader with the Latin beside him**; (ii) is recorded here
  and is the reading I would take if forced to choose.
- **0752C/0756B · *hominis Jesu Christi* in Pez's quotation of the incipit, *hominis Christi Jesu* in
  the body at 0752C.** Migne's own inconsistency between the preface and the text it prefaces;
  plate-verified in the preface (p. 381). Both rendered as printed.
- **Orthography left alone throughout** (Pattern 9): *tanquam*, *coelum*, *Charissimi*, *nunquam*,
  *sepulcrum*, *quanquam*, *spiritales*, *aenigmata*. None is a defect and none is marked.
- **Migne prints no `( sic )` anywhere in my range**, so nothing is stacked on one.
- **Band-letter arithmetic**: 0751D is followed by 0752C (the work's drop-title occupies 752A–B);
  0755D by 0756A; 0758D by 0759A. All normal per runbook false positive 1. **Not reported as gaps.**
- **Pattern 4 `[f:]` was NOT used.** This is a lemma-and-gloss commentary, not a florilegium
  (runbook false positive 4). No inline citation tails exist here in any case.

---

## §4 · CHUNK 0000 — PEZ'S LITOTES, AND WHAT EACH RENDERING DECIDED

The brief flags this preface as unusually dense in double negatives for 263 words. Negation fidelity
(7a) requires every printed negative in the English; the construal decisions are these, and each one
carries **both** printed negatives rather than collapsing to a bare positive:

| printed | rendered | rejected, and why |
|---|---|---|
| *nullam **non** operam … dedi* | "I left **no** effort **un**spent" | "I made every effort" — a bare positive, and it prints neither negative. |
| ***non nihil** … commodaretur* | "something **not inconsiderable** would be of service" | "some benefit would accrue" (drops both); "no small measure" (carries one negative and turns *nihil* into "small," which is not what it means). |
| ***Nec** … **unquam** … mutassem, **nisi*** | "**Nor** would I **ever** have changed my mind, had I **not**…" | all three carried; the *unquam* is inside the negative's scope, as in the Latin. |
| ***non nihil** partiorem* | "**not inconsiderably** more sparing" | see §1 for *partiorem* itself. |
| *decrevi **non nisi** primorum viginti* | "I determined to insert … **nothing but** the … first twenty" | "only the first twenty" — smooth, and it prints neither word. |
| *ne … **omnino** depereat* | "should **not utterly** perish" | — |

Two further calls in this chunk:

- **The guillemets are 1:1**, one open and one close, exactly where Migne sets them (plate-verified,
  p. 381). The Mabillon quotation ends at *tomus alter amissus videtur*, and *Huc usque Joannes
  Mabillonius* is outside it, as on the plate.
- **The Mabillon incipit is not a scripture citation and took no `[var:]`.** *Omnis Scriptura
  divinitus inspirata Veteris ac Novi Testamenti…* opens on 2 Tim 3:16's words and then becomes
  Walafrid's own sentence; the Vulgate's continuation (*utilis est ad docendum*) is not what is
  being quoted. **The whole span was rendered and stopped at Migne's *etc.***, supplying no verb to
  complete it (the *usque ad* discipline, applied to a truncated incipit).
- **Titles are NOT italicized in the English**, because Migne sets *Analectorum*, *Thesauro* and
  *Glossa ordinaria* in roman. Pattern 2's title-casing governs attribution headnotes, not running
  prose, and italic-span parity is 1:1 in this chunk as a result.

---

## §5 · THE TESTS, RUN, AND WHAT EACH RETURNED

- **Test 1 (strip every marker and read).** Run mechanically over all ten markers: each surrounding
  sentence reads aloud without its bracket, with no stranded article or preposition. The site that
  could have failed is §1's `[sic: *partiorem*]`, where the sense word "sparing" is deliberately
  **outside** the marker. ⚑ And the fourth question — *does the clause still have its object?* —
  asked at that site: yes, *me … esse* is the object clause and it is intact.
- **Test 2 / 2a (name the host of every negative).** Walked every printed negative in all five
  chunks. Three sites fall in 2a's declared trigger population — a negative on a verb with a
  correlative or quantifier next to it — and each was proved from the sentence's structure, not from
  what read well:
  - **0757A · *non solum eos non attinget … sed etiam*** — two negatives, two hosts: the first on
    *solum*, the second on *attinget*. Rendered "shall **not only not** touch." The `sed etiam`
    clause proves the split.
  - **0756A · *Astiterunt autem **non praesentiam** significat, sed voluntatem*** — the *sed* pivot
    puts the negative on *praesentiam*, not on *significat*. Rendered "signifies **not presence**,
    but will," never "does not signify presence."
  - **0760A · *Non ergo **foris** quaerenda est laetitia, sed intus*** — the same shape, and the
    same answer: the negative belongs on *foris*. Rendered "it is **not without** that gladness is to
    be sought, but within." This is the 8990 @0614B *solus* class exactly, and it was the site I
    most expected to get wrong.
  - Also checked and found NOT to be of that class: *non perturbationem … sed vim* (0756B, negative
    correctly on the predicate noun), *non optat ut eveniat, sed cernit* (0761D, correctly on the
    verb), *non quidem ubique, sed ubi* (0758C).
- **Test 2b (anchor position, not mere presence).** Every anchor in all five chunks was checked
  against the WORD it stands beside in the Latin, not merely that it was present and in order.
  **Six had drifted and were moved**: 0753C (belongs before *peccatores*, had migrated past it),
  0755D (before *dicit*), 0760A (before *foris*), 0760B (between *sperandum* and *est*), 0760D
  (before *tenebris*), 0761D (between *se* and *recipiunt*). All six now stand beside their Latin
  word. 0757A is a deliberate mid-construction split, per §0.
- **Test 3 (punctuation BY BAND, never by total).** Column anchors partition both twins identically,
  so `:`, `;`, `?`, `!`, `«`, `»` were counted band by band across all 42 bands of the five chunks.
  **The first pass returned 30 mismatched bands and they did not cancel — they were 21 colons
  softened to full stops or commas and 9 semicolons supplied.** Every one was restored to Migne's
  mark (including the odd-looking *…retribueret: Legimus enim:* at 0758B, and the full stop Migne
  prints before *Amen dico vobis* at 0755D where an English ear wants a colon). **Final: zero
  mismatched bands, on all six marks.** ⚑ This test earned its place in my range: nothing else I ran
  would have found a single one of those thirty.
- **Test 4 (§4 normalization / suspiciously tidy forms).** This is what produced §0. The trigger was
  brief §4's own instruction — a form that reads *too* well in a rough passage — fired at 0758B's
  *incovenienter* (a non-word, so Addendum A said raise it) and answered by the plate in the
  *opposite* direction: the plate is clean and **our file** is corrupt. That one page read then
  yielded four more sites within four inches of it, exactly as Addendum C predicts.
- **Test 5 (does it ASSERT what he asserts?).** Read each finished paragraph back against the Latin
  with the counts already clean. Three sites were re-worked on this pass and none of them was
  findable by any count: the Ps 1:5 contradiction (§3) where the first draft had softened *resurgent*
  toward the Vulgate's *non resurgent*; *Solent vero abominati dici exhaeredati* at 0761A, where the
  case endings and not the sense decide which noun is subject; and the verbless close at 0762A, which
  a smooth English would have quietly completed.

---

## §6 · WHAT I DID NOT DO, SO THE NEXT READER KNOWS

- **I did not patch the Latin.** §0's thirteen sites are escalated, not fixed. Re-chunking is the
  merge step's call and would rewrite chunk boundaries mid-fleet.
- **I did not collate cols 0762A–0794D.** Chunks 0005–0017 belong to other agents; §0's rate applies
  to my six pages only and **must not be inherited as either a clean or a dirty verdict** there.
- **I read the plate for every page in my range** (pp. 381–386) but not every *column inch* of pages
  382, 383 and 386 — on 382 and 383 I read the full left column and the lemmata I was firing on;
  on 386 the full left column (col. 761) and not col. 762, of which my range holds only five lines.
  A complete collation of this work is a separate, cheap job (six page renders) and I recommend it
  before ship.
- **No `[cj:]` anywhere.** Two candidates were weighed and both declined: *partiorem* (already inside
  a `[sic:]`, which Pattern 18 excludes explicitly) and 0760B's *veritatem* (quoted scripture, so
  Pattern 14's territory, not 18's — §2a).
- **No `[nt:]`, `[n:]`, `[ed:]` or `[d:]`.** The work has `noteCount: 0` in all eighteen chunks and I
  wrote none; `data/plate-notes/coverage.json` records 9003 as `spot`, checked zero, and my own six
  pages saw no foot rule, no numbered *Forte* apparatus and no raised-asterisk layer — **which is a
  sixth and seventh page of evidence for that zero, recorded here because a checked negative is worth
  having.**

---

## PLATE COLLATION — markers withdrawn

**2026-08-28.** All 22 pages of the work were read at Migne's plate and 61 TEI patches applied,
so the Latin twins for these chunks now say what Migne printed rather than what Corpus Corporum
transcribed. **No marker was withdrawn in chunks 0000–0004** — the withdrawals fall in
`cruces-0005` (one `[var:]`) and `cruces-0014` (three `[sic:]`, one `[cj:]`). What changed here:

**Fired — one new `[var:]` the digitization had erased.**

- **0758C · Ps 3:9 · `[var:]` FIRED.** Migne prints ***Domine** est salus* (vocative); the
  Clementine (`sources/vulgate/clementine/Ps.lat`) has *Domini est salus*, "salvation is the
  Lord's". Corpus Corporum had silently moved the lemma to the Clementine's genitive, and the
  English had duly rendered "*Salvation is the Lord's*". Both readings construe — *Domine, est
  salus* is good Latin ("O Lord, there **is** salvation"), and it answers v. 3 in the same
  chunk, *Non est salus ipsi in Deo ejus*. **Migne is now rendered** — "*O Lord, there is
  salvation,* etc." — with `[var: Vulg. Ps 3:9 *Domini est salus*, "salvation is the Lord's"]`
  beside it. ⚑ Note that Migne's own gloss two words later goes the other way (*quoniam
  **Domini** est salvos facere*), which is precisely the tension a `[var:]` exists to make
  visible rather than to smooth away.

**Declined, and why — a `[var:]` is a public claim about the Clementine and must not be spent
on broken type.** The rule I applied, stated so it can be checked: *fire where the printed
reading construes in place and yields a DIFFERENT SENSE; decline where it yields NO sense,
because that is Pattern 12's business (type the plate got wrong), not Pattern 14's.*

- **0755C · Ez 13:9 — DECLINED.** Migne prints *…non erunt, **ut** in scriptura domus Israel non
  scribentur*; Clem. *et in scriptura*. But *ut* + future indicative construes as nothing at
  all: it is not a purpose clause and not a comparison. This is a broken sort (the same class as
  this work's *fremueruut* and *populii* at 0755D), not a divergent citation. English keeps
  "and", unmarked, per the standing ruling that the work's restored typographic defects are out
  of scope.
- **0760C · Ps 5:2 — DECLINED.** Migne prints *Verba mea **oribus** percipe*; Clem. *auribus*.
  *oribus* is a form (*os, oris*, "mouths") but "receive my words with mouths" is not a sense,
  it is a dropped sort. English keeps "Give ear to my words." Same class as above.
- **0760D · Mt 5:8 — DECLINED as a `[var:]`, but the ENGLISH WAS CORRECTED.** Migne prints
  *Deum videre, qui **mundo** conspicitur* — unitalicized, in the glossator's own prose, an echo
  of *Beati mundo corde* and not a lemma; Pattern 14 governs citations, so no marker. ⚠ **What
  did have to change is that Corpus Corporum had SUPPLIED *corde*, and our English had
  translated the supplied word** ("who is beheld with a clean heart"). The plate carries no
  *corde*. The English now reads **"who is beheld by the pure"** — Pattern 8, never supply what
  the plate does not print.

---

## PLATE COLLATION · REGISTER OF RESTORED TYPE, cols 0751C–0762A

**Wilson's ruling, 2026-08-28.** Pattern 12 read literally would put a `[sic:]` on every one of
the ~31 typographic defects the plate collation restored to this work, and would bury the two or
three sites that matter under a crowd of notes about broken type. **The ruling is: mark only
where the reading is in doubt; record the rest here and disclose the count in the work-level page
note.** The operative test, applied site by site: *mark it where the plate's reading does not
construe, or where a reader could not recover Migne's intended word with confidence, or where the
defect could be mistaken for a real variant; do not mark a plainly battered, turned, dropped or
wrong sort whose intended word is not in doubt.*

**MARKED in this range — two.**

- **0753B · *quod si* for *quod sit* — `[cj: *quod si*; read *quod sit*, "what the counsel is"]`.**
  Migne prints *Si autem apertius quis requirit **quod si** consilium impiorum, multipliciter
  Scriptura loquitur*. The indirect question needs *sit*; CC had supplied the *t*. This is the
  dangerous shape: **the dropped sort leaves behind a perfectly idiomatic Latin phrase**
  (*quod si*, "but if"), so nothing on the Latin page tells the reader anything is wrong, and
  our English had silently rendered the conjecture ("what the *counsel of the ungodly* is").
  Marker placed after the rendering; the rendering stands.
- **0761A · *operantur* for *operantem* — `[cj: *operantur*; read *operantem*, "him that
  worketh"]`.** Migne prints ***Virum sanguinum** operantur iniquitatem, **dolosum** autem
  diligentem mendacium intellige* — a third-person plural finite verb where the clause, governed
  by *intellige*, requires an accusative participle in parallel with *diligentem*. It has no
  grammatical slot, it is not a one-sort slip, and the English ("as him that worketh iniquity")
  was rendering CC's repair.

**Already marked, and standing:** 0758C `[var: Vulg. Ps 3:9 *Domini est salus*, …]`, argued above.

**CRUCES ONLY — recorded here, unmarked in the text.** Migne's printed form → intended word.

| Col | Migne prints | Intended | Why the reading is not in doubt |
|---|---|---|---|
| 0753B | *Cathera* | *Cathedra* | Dropped *d* in a non-word; the same lemma (*sedere in cathedra pestilentiae*) is set correctly at 0753A, five lines above. |
| 0755D | *fremueruut* | *fremuerunt* | Turned sort, *n* set as *u*, in the opening lemma of Ps 2. A non-word. |
| 0755D | *populii* | *populi* | Doubled *i* in the same lemma. A non-word. |
| 0755C | *ut in scriptura* | *et in scriptura* | Ez 13:9. *ut* + future indicative is neither purpose nor comparison, and the clause stands third in a series of plain futures (*non erunt … non scribentur … non ingredientur*). Wrong sort; see the DECLINED note above. |
| 0758C | *incorporalitur* | *incorporatur* | Intruded *li* across the line turn (*incorpora-\|litur*); a non-word, and the passive parallel with *praeciditur* plus the dative *male viventibus* fixes the verb. |
| 0760C | *oribus percipe* | *auribus percipe* | Ps 5:2. *oribus* is a form of *os*, but "receive my words with mouths" is not a sense; the psalm's opening formula is not in doubt. See the DECLINED note above. |

**Not a defect, recorded for completeness:** 0760D, where Corpus Corporum had **supplied** *corde*
from Mt 5:8. The plate prints *qui **mundo** conspicitur* alone; the interpolation is gone and the
English reads "who is beheld by the pure" (see the note above). Nothing of Migne's is wrong here.
