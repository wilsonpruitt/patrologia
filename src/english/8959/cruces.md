# *Glossa ordinaria*, **Liber Judicum** (PL 113, 0521A–0532C) — cruces, lemma collation, apparatus

Translated 2026-08-19, one translator, 6 chunks (4,698 Latin words), on Opus.
`verify-english.mjs` clean: columns, notes and sections aligned, no duplicate paragraphs.
Apparatus: **23 `[var:]` · 2 `[cj:]` · 3 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
116 `[n:]`** (exact parity with the Latin twins, 18/26/25/11/28/8).
Structure: PRAEFATIO, CAPUT PRIMUM–CAPUT XXI (21 chapter heads across six chunks).
Zero guillemets in either language; zero em-dashes introduced.

Conventions are **inherited from Liber Ruth (8968) §1 and were not re-derived**: `VERS. n.--`
passes through verbatim, the lemma is Englished, a fragmentary lemma is rendered as the phrase
it stands for, attribution sigla ride as ordinary `[n:]` notes, `*usque ad*` → `*as far as*`
(the shipped Glossa/OT rendering, 18 instances in 8968/8970).

---

## §1 · PLATE STATUS — A CHECKED ZERO, AND WHERE IT DOES NOT REACH

Two pages of this work were read at 300 dpi before translation (p. 266, cols 521/522; p. 268,
cols 525/526, full width): **no foot-of-page apparatus.** Consistent with Ruth's five pages and
five further pages across two other runs of PL 113. So there is no `[cn:]` to expect in this
book, and **no conjecture of Migne's is available to settle any crux below.**

⚠ That is a sample, not a proof, and three sites below would be settled instantly by a plate
read that has not happened: **0522B `seniorunt`**, **0525B `periculam`**, **0530A `In icat`**
(§3). All three are corpus-wide hapaxes; all three are handled as `[sic:]` on 8960's precedent
(`subju averit`, `mise unt`, `solli itudo`, `qui ibet`, `corre ti`, `fallaci` — same volume, same
batch, same shape) and each is flagged here as **a candidate for a plate read, not a finding.**
Two further sites want the plate for a different reason: **0532B `CAPUT XVIII`** and
**0532C `CAPUT XX`**, the only two of twenty-one chapter heads printed without a final period
(§4.3).

---

## §2 · THE VULGATE COLLATION — the deliverable

Collated against `sources/vulgate/clementine-flat.txt` (`Jdc` = Judges). **Every italic span in
the launch list was looked up.** Divergences are marked `[var:]` in the English *and* named here;
**agreements are named here too, individually**, because a list of findings alone cannot be told
from a list by someone who did not check.

### 2.1 · Divergences marked `[var:]` (23)

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0521C | *Quicunque percusserit civitatem litterarum et ceperit eam, dabo ei filiam meam in uxorem* | Jdc 1:12 *Dixitque Caleb: Qui percusserit Cariath Sepher, et vastaverit eam, dabo ei Axam filiam meam uxorem* | Augustine's LXX-based text throughout: *civitatem litterarum* = Kiriath-sepher construed as "city of letters"; Caleb and Axa both absent. The gloss's whole point is that Scripture records the daughter-as-prize **twice**. |
| 0521D | *Ne magnitudinem revelationum extollat* | 2 Cor 12:7 *ne magnitudo revelationum extollat me* | accusative for nominative, and *me* gone: Migne's clause has **no expressed subject and a different object** (see §5.1). |
| 0522A | *Et contribulavit Amorrhaeos filios Dan in monte, quoniam non permisit eos descendere* | Jdc 1:34 *Arctavitque Amorrhaeus filios Dan in monte, nec dedit eis locum ut ad planiora descenderent* | different verb, different clause type — and *Amorrhaeos* for *Amorrhaeus* reverses who confines whom (§3.1). |
| 0522C | *Et servierunt Baal et Astartibus* | Jdc 2:13 *dimittentes eum, et servientes Baal et Astaroth* | load-bearing: the gloss exists to explain a **plural** Astarte (*Junonem pluraliter memorari voluisse*), which only Migne's *Astartibus* gives. |
| 0523A | *Ne multiplicentur in te bestiae ferae* | Ex 23:29 *ne terra in solitudinem redigatur, et crescant contra te bestiae* | different verb, and *ferae* added; the gloss then reads *bestiae ferae* allegorically as *bestiales cupiditates*. |
| 0523B | *Discedite a me, operarii iniquitatis, nescio vos: ite in ignem aeternum* + `[n: (Luc. XIII)]` | Lc 13:27 *Nescio vos unde sitis: discedite a me omnes operarii iniquitatis* | order inverted, *omnes* and *unde sitis* gone, and **the last clause is in no Lucan verse at all** (cf. Mt 25:41). |
| 0524A | *Advena ego sum, in terra apud te, et peregrinus, sicut omnes patres mei* | Ps 38:13 *advena ego sum apud te, et peregrinus sicut omnes patres mei* | *in terra* added — and the gloss turns on being a stranger *in hoc mundo*. |
| 0524C | *Quam dulcia faucibus meis eloquia tua super mel et favum ori meo!* | Ps 118:103 *Quam dulcia faucibus meis eloquia tua! super mel ori meo* | *et favum* added, and the `!` moved to the end. The honeycomb is the point (Debbora = *apis*). |
| 0524C | *Judicia Domini … pretiosa esse super aurum et lapidem pretiosum nimis, et dulciora super mel et favum* | Ps 18:10–11 *judicia Domini vera, justificata in semetipsa, desiderabilia super aurum et lapidem pretiosum multum* | *pretiosa* for *desiderabilia*, *nimis* for *multum*, and the whole recast as indirect statement after *dicit propheta*. |
| 0525C | *Omnia quae in mundo sunt reputo ut stercora, ut Christum lucrifaciam* | Phlp 3:8 *arbitror ut stercora, ut Christum lucrifaciam* | *omnia quae in mundo sunt* has no counterpart in the Vulgate clause. |
| 0525B | *qui sponte obtulistis animas vestras ad periculam* | Jdc 5:2 *Qui sponte obtulistis de Israel animas vestras ad periculum* | *de Israel* dropped; and *periculam* is not a Latin form (§3.2). Adduced under VERS. 10, i.e. on Jdc 5:9, whose Vulgate wording (*obtulistis vos discrimini*) the lemma above already carries. |
| 0525B | *Potentes populi, benedicite Dominum, quia ascenditis super jumenta* | Jdc 5:10 *Qui ascenditis super nitentes asinos, et sedetis in judicio, et ambulatis in via, loquimini* | a wholly different form of the verse, unlabelled by Migne; the *jumentum* = body allegory depends on it. |
| 0526B | *Qui misit ad eos prophetam, locutus est: Haec dicit* | Jdc 6:8 *Qui misit ad eos virum prophetam, et locutus est* | ⚠ **the omission is exactly what the gloss argues about** — *cur non possit angelus propheta dici?* The Vulgate's *virum* would foreclose the question. |
| 0527D | *Et factus est numerus eorum qui lambuerunt manu sua, lingua sua, trecenti viri* | Jdc 7:6 *Fuit itaque numerus eorum qui manu ad os projiciente lambuerunt aquas, trecenti viri* | Augustine's LXX text; the following sentence weighs *manu sua* against *lingua sua* as variants, which only this form supports. Number **300 agrees** in both. |
| 0528B | *Et factum est cum mortuus esset Gedeon … posuerunt ipsi sibi Baalberith testamentum ut esset eis in Deum* | Jdc 8:33 *Postquam autem mortuus est Gedeon … Percusseruntque cum Baal foedus, ut esset eis in deum* | *Baalberith* as the covenant-object rather than *Baal*; the gloss then insists **both** are idols. |
| 0529A | *et exiet ignis de rhamno* | Jdc 9:15 *egrediatur ignis de rhamno* | jussive → future indicative: the bramble's threat becomes a prophecy of Antichrist. |
| 0529A | *Et misit Deus Spiritum malignum inter Abimelech et viros Sichimorum* | Jdc 9:23 *Misitque Dominus spiritum pessimum inter Abimelech et habitatores Sichem* | *Deus* for *Dominus*, *malignum* for *pessimum*, *viros Sichimorum* for *habitatores Sichem* — and the gloss is **about this very verb** (*etiam* immisit *interpretati sunt*). |
| 0529A | *Et nunc surge nocte tu et populus tuus tecum, et insidiare* | Jdc 9:32 *Surge itaque nocte cum populo qui tecum est, et latita in agro* | different throughout; the gloss then reports a further Latin variant *maturabis*. |
| 0529C | *Nonne quaecunque haereditavit tibi Chamos?* | Jdc 11:24 *nonne ea quae possidet Chamos deus tuus, tibi jure debentur?* | Migne glosses his own lemma (*Nonne ea quae possidet*) with a **different** version of the same verse. |
| 0530A | *a specula Galaad transeundi et transiens ad filios Ammon* | Jdc 11:29 *Maspha quoque Galaad, et inde transiens ad filios Ammon* | Maspha read as *specula*, "watch-tower" — an etymology, not a place-name; see §4.1 for the gerund. |
| 0530A | *heu me! filia mi impedisti me* | Jdc 11:35 *Heu me, filia mea! decepisti me, et ipsa decepta es* | ⚠ **the most load-bearing divergence in the book.** Augustine's entire argument is built on *impeditum* — that Jephthah shows himself **hindered**. On the Vulgate's *decepisti* ("deceived") the argument does not run at all. |
| 0530B | *Filia, fides tua te salvam fecit, vade in pace* + `[n: (Luc. VII)]` | Lc 7:50 *Fides tua te salvam fecit: vade in pace* (no *Filia*); Lc 8:48 *Filia, fides tua salvam te fecit* | *Filia* is the one word the gloss needs (the Church as virgin daughter) and it is not in the cited chapter. |
| 0531C | *Gaudete quia ego vici mundum* | Jo 16:33 *sed confidite, ego vici mundum* | *Gaudete quia* for *confidite*: exhortation to joy replaces exhortation to confidence. |

### 2.2 · Divergences CHECKED and deliberately NOT marked, with the reason

- **0523C** *Ego sum via, veritas et vita* ‖ Jo 14:6 *Ego sum via, et veritas, et vita*. One
  conjunction. No sense turns on it; `[var:]` fires on sense (Pattern 14), not on orthography.
- **0529D** *ubi erit fletus et stridor dentium* ‖ Mt 8:12 *ibi erit*. *ubi* for *ibi* is
  **syntactic accommodation** to the host sentence (*aut omnes gehennae praedestinati: ubi
  erit…*), not a claim about a different text.
- **0530D** *Exinde mos increvit* ‖ Jdc 11:39 *Exinde mos increbruit*. Cognate verbs, same sense
  ("grew" / "grew prevalent"). Named here so a blind reader knows it was seen.
- **0531A** *Orietur vobis sol justitiae, et sanitas in pennis ejus* ‖ Mal 4:2 *Et orietur vobis
  timentibus nomen meum sol justitiae…*. This is **clipping**, not divergent wording; every word
  Migne prints stands in the Vulgate in that order.
- **0526C** *si noster es, an adversariorum?* ‖ Jos 5:13 *Noster es, an adversariorum?* The *si*
  is Migne's own subordination under *inquirit*; the question mark he prints is kept by taking
  the question direct behind the colon (Pattern 8b).
- **0523A** *Fuit in eo Spiritus Domini* ‖ Jdc 3:10 *Fuitque in eo spiritus Domini*. The dropped
  *-que* is recovered in Migne's **own second lemma on the same verse** (*Fuitque in.*, 0523B).
  Both lemmata are rendered as the phrase they stand for; the difference is visible in the facing
  Latin column and nowhere lost.
- **0523B** *Servieruntque Israel* ‖ Jdc 3:14 *Servieruntque filii Israel*. Clipping.
- **0527C** *Qui manu et lingua* ‖ Jdc 7:5 *Qui lingua lambuerint aquas*. Migne's lemma anticipates
  the LXX form he is about to discuss; the discussion is explicit, so no marker is needed for the
  reader to see it.
- **0525B** *Auribus percipite, omnes satrapae* ‖ Jdc 5:3 *auribus percipite, principes*. Gloss
  prose, not a lemma, and Migne's next sentence glosses *satrapae* as such. Recorded, not marked.

### 2.3 · Lemmata collated and found to AGREE with the Clementine — named individually

Chunk 0000: *Dixitque Dominus: Judas ascendet* (1:2) · *Dixitque* (1:12) · *Nec potuit* (1:19) ·
*Jebusaeum* (1:21) · *Manasses* (1:27) · *Arctavitque* (1:34) · *Ascenditque angelus* (2:1) ·
*Quamobrem nolui delere* (2:3, Vulg. *Quam ob rem*, word-division only) · *Dimisit ergo Josue*
(2:6) · *Mortuus est* (2:8) · *Iratusque Dominus* (2:14).

Chunk 0001: *In medio* (3:5) · *Et tradidit eos Dominus* (3:8) · *Salvatorem* (3:15) ·
*Qui utraque manu pro dextera utebatur* (3:15, **verbatim**) · *Ingressus est Aod* (3:20) ·
*Pinguissimo* (3:22) · *Erat autem Eglon crassus nimis* (3:17, **verbatim**) · *Tulerunt* (3:25) ·
*Post hunc* (3:31, twice) · *Qui percussit* (3:31) · *Euge, serve bone* (Mt 25:21) ·
*Mihi autem absit gloriari* (Gal 6:14, **verbatim**) · *Addideruntque filii* (4:1) ·
*In manus Jabin regis Chanaan* (4:2) · *Erat* (4:4) · *Et sedebat sub palma* (4:5) ·
*Si venis* (4:8) · *Non ascendam, nisi tu ascenderis mecum* (4:8 LXX-side, Vulg. *si nolueris
venire mecum, non pergam* — Migne's is the positive form of the same refusal; recorded, not
marked, because the two are the same speech act) · *Egressa igitur* (4:18) · *Quae aperuit*
(4:19) · *Egressaque* (4:22) · *Debbora* (name).

Chunk 0002: *Cecineruntque Debbora et Barac* (5:1) · *Audite* (5:3) ·
*Montes fluxerunt a facie Domini* (5:5, **verbatim**) · *In* (5:6) · *Cor meum diligit* (5:9) ·
*Qui propria voluntate* (5:9) · *Qui ascenditis super nitentes asinos* (5:10, **verbatim**) ·
*Collisi sunt* (5:11) · *Ibi narrentur* (5:11) · *Surge, surge* (5:12) · *Diviso* (5:15) ·
*Quare habitas inter duos terminos?* (5:16, **verbatim, question mark included**) ·
*Traxit cadavera eorum* (5:21) · *Cumque sevisset* (6:3) · *Da mihi signum* (6:17) ·
*Portans* (6:18) · *Ingressus* (6:19) · *Igitur* (6:33) · *In valle Jezrael* (6:33) ·
*Si salvum facis* (6:36) · *In area* (6:37) · *Si ros in solo vellere* (6:37) · *Oro* (6:39) ·
*Qui formidolosus* (7:3) · *Adhuc populus* (7:4) · *Fuit itaque numerus eorum* (7:6) ·
*Percussit illud atque subvertit* (7:13) · *Divisitque* (7:16) ·
*Et hydrias confregissent* (7:20).

Chunk 0003: *Fecitque ex eo Gedeon ephod* (8:27, **verbatim**) · *Postquam* (8:33) ·
*Remansitque Joatham* (9:5) · *Dixeruntque* (9:10 and 9:14) · *Ego sum vitis vera* (Jo 15:1,
**verbatim**) · *Misitque* (9:23) · *Surge* (9:32) · *Post Abimelech* (10:1).

Chunk 0004: *Habitavit in terra Tob* (11:3) · *In illis diebus* (11:4, **verbatim**) ·
*Dixeruntque principes* (11:8) · *Et pugnes* (11:8) · *Ego ero vester* (11:9) ·
*Nonne ea quae possidet* (11:24) · *Et circumiens Galaad* (11:29, Vulg. *circuiens*, a spelling
variant of the period, Pattern 9) · *Si tradideris filios Ammon* (11:30) · *Et plangam* (11:37) ·
*Et fecit ei* (11:39) · *Exinde mos increvit* (11:39) · *Judicavit itaque Jephte* (12:7) ·
*Sicut juravit Domino, votum vovit Deo Jacob* (Ps 131:2, **verbatim**) · *Sed concipies* (13:3) ·
*Nec immundum* (13:4) · *Tulit itaque* (13:19) · *Quod* (13:20) ·
*Descendit itaque Samson* (14:5) · *Percussitque eos* (15:8) · *Jurate* (15:12) ·
*In maxilla* (15:16).

Chunk 0005: *Abiit quoque* (16:1) · *Vocavitque tonsorem* (16:19) · *Multoque* (16:30) ·
*Et fecit ephod et theraphim* (17:5, **verbatim**; the gloss's *teraphim* is the same word
unaspirated, Pattern 9) · *Venerunt Lais* (18:7) ·
*Eduxit ad eos concubinam suam* (19:25, **verbatim**) · *Consuluerunt* (20:18) ·
*Juraverunt quoque filii Israel in Maspha* (21:1, **verbatim**).

---

## §3 · THE THREE HAPAXES — carried, marked, and offered for a plate read

All three are **corpus-wide hapaxes in `src/latin/`** and none is a Latin form. The corpus
frequency check is the evidence, and it is given so a later reader can weigh it.

### 3.1 · 0522A · *Amorrhaeos* — a real word, and the faithful English says the opposite. `[cj:]`

Migne: *Et contribulavit **Amorrhaeos** filios Dan in monte, quoniam non permisit eos descendere.*
Rendered as printed: "And he crushed the Amorrhites, the sons of Dan, in the mountain" — which
makes **Dan's sons Amorites** and leaves *contribulavit* with two accusatives in apposition.
The Vulgate lemma standing three words above it (*Arctavitque*) has *Amorrhaeus*, nominative,
and the Amorite is the one doing the confining throughout Jdc 1:34 and Jos 19:47.

Nothing is broken type here, so `[sic:]` cannot reach it and Pattern 7 must render it;
the English then asserts what Augustine did not. That is precisely Pattern 18's bar, so:
`[cj: *Amorrhaeos*; read *Amorrhaeus*, "the Amorite crushed the sons of Dan"]`.
⛔ **The rival was to leave it unmarked with a `[var:]` alone.** It lost because the `[var:]`
records a divergence from the Vulgate and says nothing about the sentence being unconstruable
as printed; a reader would take "the Amorrhite sons of Dan" as the gloss's own claim.
Both markers therefore stand, and they answer different questions.

### 3.2 · 0525B · *periculam* — broken type inside a scripture quotation. `[sic: periculam]`

*qui sponte obtulistis animas vestras ad **periculam***, for *periculum* (Jdc 5:2, and
*periculum* stands 81 times elsewhere in `src/latin/`; *periculam* once, here). Rendered
**and** marked: "your souls to peril [sic: periculam]". The `[sic:]` sits inside the italic span
with its content unitalicized, per the corpus's handling of a carried run inside an italic
lemma (nested italics are not expressible; cf. `[sic: interra]`).

### 3.3 · 0530A · *In icat* — split type. `[sic: *In icat*]`

*In icat enim se impeditum, ne illud quod cogitaverat impleret*, for *Indicat*: a dropped *d*
shown as a space. This is 8960's exact shape (`subju averit`, `mise unt`, `solli itudo`,
`qui ibet`, `corre ti`) and takes the same treatment. **Rendered and marked**: "For he shows
[sic: *In icat*] himself to have been hindered" — the clause keeps its verb, its subject, its
object and its negation. ⚠ Whether the defect is Migne's plate or Corpus Corporum's
transcription cannot be told from the Latin; **8960's whole class was handled as `[sic:]` and
this follows it**, but if the plate is ever read at p. 270 this is the first word to check.

### 3.4 · 0522B · *seniorunt* — the lemma word itself is not a word. `[sic: seniorunt]`

*Et **seniorunt**.*, for *seniorum* (Jdc 2:7 *et seniorum, qui longo post eum vixerunt tempore*):
u/n confusion, the commonest of all. *seniorum* stands six times elsewhere in `src/latin/`;
*seniorunt* once. The gloss's own closing words settle the sense beyond doubt — *dies vero
**seniorum** sanctorum longaevi sunt*. Rendered and marked: *And of the elders [sic: seniorunt].*
⚠ Same plate/transcription ambiguity as §3.3, and the same request: p. 266, col. 522B.

---

## §4 · MIGNE'S OWN, RENDERED LITERALLY, NOT TIDIED

### 4.1 · 0530A · *a specula Galaad transeundi et transiens* — a genitive gerund governing nothing

Rendered "from the watch-tower of Galaad of passing over and passing over to the children of
Ammon". *transeundi* has nothing to govern it and no *ad* to hang on; the participle *transiens*
beside it is what the Vulgate has. **No conjecture is offered**: this is Ruth's *effoetandi*
class (8968 §2, 0533D), the fault is legible, it is Migne's, and Pattern 7 governs. A reader
who wants the difficulty has the Latin opposite.

### 4.2 · 0530B · *ut omnino evitetur, sed tantum ut differatur, laborat* — a truncation tail
### that has evidently lost a *non*, AND NO *non* IS SUPPLIED

The sense the *sed tantum* demands is "he labours **not** that it should be altogether avoided,
but only that it should be deferred." **Migne prints no negative.** The `usque ad` formula
removes words; it does not license us to put one back. Rendered as printed: "that it may be
altogether avoided, but only that it may be deferred, he labours." ⚠ This is the single site in
the book where a supplied negative would have read better than the true text, and it is exactly
the class the brief names (*omnino* + a correlative + a plausible verb). Logged, not repaired.

### 4.3 · 0532B, 0532C · `CAPUT XVIII` and `CAPUT XX` print without a final period

The other nineteen chapter heads in the work carry one. This is 8970's `CAPUT XIV` class (a
digitization drop) or Migne's own inconsistency, and **the two cannot be told apart without the
plate**, which has not been read at p. 271. Reproduced **as printed** — `## CHAPTER XVIII`,
`## CHAPTER XX` — following 8960, whose shipped English carries `## CHAPTER VII` for the same
reason. Pattern 9's label-normalization was considered and **rejected**: it licenses normalizing
a Latin *typo in the label word*, which has no English exponent; a full stop has an exact
English exponent, and supplying one would be Pattern 8's forbidden supply. If the plate is read,
this is a `data/tei-patches/8959.json` entry and the English follows the Latin.

### 4.4 · 0521A · `[n: (ATHANAS., in (Synopsi. )]` — an unbalanced parenthesis in the note

Migne's note as our TEI carries it opens two parentheses and closes one, with a stray space.
Notes pass through **verbatim, contents untranslated**, so it rides exactly as printed.
Recorded so a later reader knows it was seen and let alone.

### 4.5 · 0524A · `verudata [ *MSS.,* veruclata]` — Migne's own variant bracket

*sicut ea quae verudata [ *MSS.,* veruclata] dicuntur.* The bracketed variant is **Migne's
apparatus, not ours**, and passes through untranslated per the locked register. *verudata* is
kept in italic Latin as a technical term with no clean English equivalent (Augustine is
describing a bolt-fastening). It takes **no `[sic:]`**: Migne has annotated it himself, and
stacking our marker on his is forbidden (runbook false positive 5).

### 4.6 · 0526D · *Quem pater **dolis** deputavit* — a conjecture WEIGHED AND DECLINED

Isidore on Jdc 6:25. The sense wants *idolis*: the bull his father had dedicated **to the
idols**. Rendered as printed: "Him whom the father had appointed for deceits". ⛔ **The `[cj:]`
was declined, and the reason is the bar, not timidity:** *dolis* is a real word attested six
times elsewhere in `src/latin/`, it construes as a dative, and the resulting English is odd but
**not false** — idolatry is deceit on this author's own account two sentences later. Pattern 18
fires where the English *asserts something the author did not*; here it asserts something he
would grant. **The conjecture *idolis* loses in the text and is recorded here instead.**
(Contrast §3.1, where the printed word makes the English assert a falsehood, and the marker
stands.)

### 4.7 · 0527D · Gregory puts the trumpet in the LEFT hand — against Jdc 7:20

*in sinistra tubam, in dextera tenet lagenam*, where Jdc 7:20 has *sinistris manibus lampades,
et dextris sonantes tubas*. Rendered as printed. This is inside an `usque ad` tail of Gregory's
*Moralia* and is his, not a lemma; **no marker**, because `[var:]` marks Migne's **scripture
citation** diverging, and this is his source's exposition, not a quotation.

### 4.8 · 0531C · *Laisan* for *Lais* at 0532C, and other proper-name spellings

Judges carries names in bulk and **spelling variation is not a defect** (Pattern 9): *Jesus
Nave*, *Josue*, *Aod*, *Semgar*/*Samgar* (both, in the same book), *Debbora*, *Eglon*,
*Chamos*, *Sichimorum*, *theraphim*/*teraphim*, *Laisan*/*Lais*, *Adamantius* as `ADAM.` and
`ADAMAN.`. All are kept as Migne prints them, each in its own place, and none is normalized to
another. ⚠ **`Sichimorum` is a corpus hapax and was checked**: it is Augustine's own form for
the men of Sichem (the Vulgate has *habitatores Sichem*), it is a well-formed Latin genitive
plural, and it is already covered by the `[var:]` at 0529A. **Not a candidate for a plate read.**

### 4.9 · Migne's citation misprints — left standing

- **0524C** `[n: (Ibid. X.)]` on a quotation of **Ps 18:10–11**, following `[n: (Psal. CXVIII.)]`.
  The *Ibid.* therefore resolves to Psalm 118, which is not the psalm quoted.
- **0530B** `[n: (Luc. VII)]` on wording that is **Lc 8:48**'s.
- **0532C** `[n: (AUG. de Civ., cap. 34.)]` with no book number.

None is corrected in the running text. Citation repair belongs to
`data/citation-corrections.json` at index time, and ⛔ **an *Ibid.* must never be corrected
upstream of its antecedent** (runbook false positive 2). The 0524C case is exactly that shape.

### 4.10 · 0531A · a bare lemma with no gloss closes the work

`CAPUT XXI` carries *Juraverunt quoque filii Israel in Maspha,* etc. and **nothing else** — no
`VERS.` address, no comment. Reproduced as printed. Migne's abridgment simply stops there.

---

## §5 · THE SUPPLIED-SUBJECT REGISTER — every "he / she / it / they" the Latin does not print

Ruth's worst site was this class and it parsed perfectly either way; each supply below names its
evidence.

| col | Latin | supplied | evidence |
|---|---|---|---|
| 0521D | *Ne magnitudinem revelationum extollat* | "Lest **it** exalt…" | Migne's clipped text has **no** expressed subject and *magnitudinem* is accusative, so a subject must be supplied. It is deliberately left as a bare "it" rather than named: the Vulgate's subject (*magnitudo*) is precisely the word Migne has moved into the object slot, so naming one would import the reading the `[var:]` exists to distinguish. |
| 0522A | *quoniam non permisit eos descendere* | "since **he** did not permit" | the Amorite, from Jdc 1:34 (*nec dedit eis locum*) and from the lemma *Arctavitque* directly above. Not God: the verse's whole point is the Amorite's confinement of Dan. |
| 0521D | *Superius legitur eadem civitas* | rendered impersonally, "Above the same city is read of" | *civitas* is nominative; no subject supplied at all. Recorded because the English looks like it might have one. |
| 0525B | *non audebant … ascendere* | "**they** did not dare" | not the *semitae*, which cannot dare: the people who would have gone up, from Jdc 5:6 *qui ingrediebantur per eas*. The paths are the grammatical subject of *quievisse* only. |
| 0525B | *a quibus non scribitur Samgar plene liberasse* | "to have fully delivered **them**" | object supplied, = the people, same verse. |
| 0527D | *Percussit illud atque subvertit* | "**It** struck it" | the barley loaf of Jdc 7:13 (*subcinericius panis … percussit illud, atque subvertit*), where *illud* is the tent. Named here rather than in the text because the lemma is a fragment and the loaf is two clauses upstream in the Vulgate. |
| 0528D | *qui veritati … credere noluit* | "**which** would not believe" | *populus*, not *Antichristo*: the same subject as *ut credat mendacio* in the clause before, and it is the people who are *in reprobum sensum datur*. |
| 0531C | *diabolum vicit qui ait: Gaudete quia ego vici mundum* | "overcame the devil, **he** who says" | Christ, though *qui* stands next to *diabolum*. The quotation is Jo 16:33, spoken by Christ; the devil cannot say *ego vici mundum*. Word order alone would give the wrong antecedent, and this is the one site in the book where it would have. |
| 0532B | *foris in circuitum laboris mittunt* | "**they** send **[him]** outside" | subject = the Allophyli, from the same sentence (*ab Allophylis ad molam deputatur*); the object is supplied in square brackets, as the corpus supplies English words. |
| 0532C | *per teraphim fecisse monstratur* | "he is shown to have done **it**" | object lost in the `usque ad` truncation; supplied as a bare "it" and named here. |
| 0532C | *sed contra se rigida, bonis vero omnibus sit submissa* | "let **it** be rigid against itself" | ⛔ **DECLINED, and here is why.** The subject is feminine singular and it is **not in the surviving text**: the tail resumes inside a sentence whose subject (*mens*? *humilitas*? *disciplina*?) the abridgment removed. Naming one would be a guess, so a bare "it" is used and the gap is stated. |
| 0530A | *An conjugem cogitavit… ut hoc non relinqueret impunitum* | "that **he** should not leave" | Jephthah is the only possible referent (*Quem autem potuit cogitare*), but note that God is the subject of *noluit* immediately before; the two subjects change inside one sentence in Augustine's own text. |

---

## §6 · PUNCTUATION AND QUESTION MARKS — band by band, not by total

The six chunks' column anchors partition both twins identically (9 / 9 / 12 / 5 / 10 / 2, verified
1:1). **Colons, semicolons, question marks, exclamation marks and guillemets were compared band
by band, and every band now matches.** ⚠ The first pass did **not**: seven bands were off, all in
the same direction — six supplied colons and semicolons of mine, in six different places, with
nothing destroyed anywhere. Compared by total they would have looked close to parity. They are
listed so the method is checkable: 0000 band 6 (`;` and `:`), 0001 band 3 (`;`), 0002 bands 1, 3
and 8 (`:`), 0003 band 2 (`;`). All six were reverted to Migne's comma.

Question marks: **12 in the Latin, 12 in the English**, 4 / 4 / 4 / 0 / 4 / 0 by chunk, each in
its own band.

- **0524D** *usque ad:* id est, facit mecum prospera per angelum? — Migne's `?` on a truncation
  tail. Kept, rendered direct.
- **0526C** *cur non possit angelus propheta dici?* and *si noster es, an adversariorum?* — both
  indirect in Latin, both taken direct behind Migne's own colon (Pattern 8b). **Neither mark
  supplied nor deleted.**
- **0530A** *Ex utroque ergo prophetia adaptata est?* — reads as a statement and keeps its mark,
  because it is his (Pattern 8).
- **0531B** *Quid est quod ad visionem angeli vir est timidus… sed tamen spes praesumit.* — an
  interrogative opening that Migne closes with a **full stop**. ⚠ The parallel sentences at
  0523D, 0531C, 0532A open identically; two of those also end in a full stop and one does not.
  **No mark was supplied here.** This is the shape most likely to attract a "correction" and it
  is Migne's.
- `!` — one, at 0524C (*…ori meo!*), inside the Ps 118 quotation, in the same band in both.

---

## §7 · NUMBERS AND TALLIES — checked against their own neighbours

Judges is dense with counts and this book keeps them consistent everywhere but once.

**Verified consistent:** thirteen judges and 411 years (0521A, and 13 judges is the count the
chapter heads yield); eight years then eighteen years of servitude (0523B–0523C, matching Jdc 3:8
and 3:14, and the gloss *supra octo annis: hic decem et octo dicit* checks itself); six hundred
men slain by Semgar (0524B ‖ Jdc 3:31); three hundred who lapped (0527D ‖ Jdc 7:6); the bull of
seven years and the sevenfold Spirit (0526D); four days of lamentation, four parts of the world
(0530D ‖ Jdc 11:40); forty years of Philistine servitude (0531B ‖ Jdc 13:1); six years of
Jephthah's judging (0531A ‖ Jdc 12:7); six times seven = forty-two (0531A, arithmetic correct).

### 7.1 · 0531A · *propter septuaginta dies* — a number that contradicts its own sentence. `[cj:]`

*Sicut illi duo menses propter **septuaginta** dies **senarium** numerum **sex** aetatum
significant…* Two months are **sixty** days, and only sixty yields the senary number; seventy
yields the septenary. The sentence names *senarium* and *sex aetatum* in its own clause and
closes *sexies enim septem quadraginta duo sunt* — the arithmetic is otherwise exact throughout.
Rendered as printed and glossed additively:
`[cj: *septuaginta*; read *sexaginta*, "sixty"]`.
⛔ **The rival reading was to leave it and log it**, on the ground that a number is a number and
Pattern 7 renders it. It lost because the English then states a false arithmetical claim in the
author's voice, with no signal to the reader that anything is wrong — which is exactly the gap
Pattern 18 was written to close. The printed *septuaginta* keeps its English ("seventy") and
nothing is replaced.

---

## §8 · THE FOURTH TEST — read back for what the English SAYS

Run last, with counts, bands, parity and attachment already clean. Every paragraph was read back
against the Latin asking only *does it assert what he asserts*. What it changed:

- **0523A** *non enim Deus homines exterminare poterat, et bestias non poterat.* First draft:
  "for God could not exterminate men, and could not exterminate beasts" — which asserts that God
  can do neither, the opposite of Augustine's *a fortiori*. **The first *non* scopes over the
  whole coordination**, so the English now reads "for it **was not that** God could exterminate
  men and could not exterminate beasts." Both negatives stay on their own *poterat*; nothing is
  added or removed; the scope is carried by the frame. Proved from structure (the *et … non*
  correlative), not from what reads well.
- **0529D** *Quae enim magis terra optima quam terrenum corpus…* rendered "For what land is more
  the best than the earthly body…", keeping *optima* audible against *optimum* / Tob two lines
  above, which is the whole etymological move. A smoother "more excellent" was rejected for
  breaking that chain.
- **0526B** the `and` in "*Who sent to them a prophet, and spoke*" is English glue for Migne's
  asyndeton, **not** the Vulgate's *et*; the `[var:]` beside it names what is actually missing
  (*virum*), which is the word the gloss argues about.

**Read clean, and named so a blind reader knows where I looked:** the whole of chunk 0005 (the
six-chapter abridged tail — every `usque ad` resumption parsed as strict prose, and §4.10 and
§5's last three rows are what that produced); the Gedeon fleece paragraph at 0527A–B, whose
*habentem non in vellere … sed in aperto* is the correct-handling model the brief names; the
`non solum … sed etiam` at 0529B; the `non habent … sed tantum` at 0527D; the `non … sed ipsum
sacrificium futurum` at 0531C; the double negative *inulta non remansit* at 0530B, kept as
printed rather than resolved to a positive.

**Candidates raised and rejected, with reasons:** *dolis* (§4.6, declined); *Sichimorum* (§4.8,
a hapax that is Augustine's own form, not a defect); *increvit* for *increbruit* (§2.2, cognate);
*ubi* for *ibi* (§2.2, syntactic); the missing period on two CAPUT heads (§4.3, reproduced, not
normalized); Gregory's left-handed trumpet (§4.7, his exposition, not a citation).

---

## §Adjudication — blind polarity read + plate (2026-08-19)

Blind reader, fenced from this file, all six chunks read: **2 sites, both repaired.** It also verified the
whole arithmetic chain independently (13 judges / 411 years · 8 vs 18 years · 300 men · *sexies septem
quadraginta duo* = 42 · 40 years · 4 days for 4 parts of the world) and found **no number contradicting
its clause** beyond the *septuaginta* already carrying a `[cj:]`; and it confirmed all three `[sic:]`
render their word and all twelve chunk-0005 lemma expansions are convention-3 expansions of Migne's own
continuations, **none conformed to a Clementine wording**.

1. **REPAIRED · 0528D · *qui veritati … credere noluit*** — the relative clause had been left sitting
   immediately after "Antichrist", where English reads it as a description of Antichrist. **It cannot be:
   *qui* is nominative and *Antichristo* is dative.** Its subject is *populus*, and the sentence is built
   on 2 Thess. 2:11–12 (*ut credant mendacio … qui non crediderunt veritati*). As it stood, our English
   made **Antichrist** the one who refused to believe Christ. Re-hosted with dashes so the clause reaches
   its subject.
2. **REPAIRED, AND THE PLATE SETTLED THE OTHER HALF · 0526D · *Quem pater dolis deputavit, hunc Gedeon
   occidit*.**
   - **The referent was wrong and the gloss proves it:** *Ipse enim est vitulus septennis* two clauses
     later. The object is the **bull**, not a man; our "**Him** whom … Gedeon slew" made Gideon kill a
     person. Now "**That which** the father had appointed … this Gedeon slew, and offered another, of
     seven years, to God."
   - **`dolis` IS MIGNE'S — verified at the plate**, p. 268 (cols 525/526) read at 400 dpi: five letters,
     one dot, standing over the fourth; **mid-line, no hyphenation**, and the preceding *pater* ends in an
     undamaged *r* that could not have absorbed an *i*; the inter-word gap is ordinary, so no sort fell
     out. **No tei-patch.** The reading is defective in Migne himself and now carries
     `[cj: *dolis*; read *idolis*]` — the conjecture recorded beside the printed word, never substituted
     for it.
   ⭐ **The translator declined *idolis* for want of a witness and was right to.** The blind reader
   proposed it from Jdc. 6:25 and was also right — but neither could settle it, and the plate could. This
   is the shape the register wants: raise it, refuse it, then go and look.
   ⚠ **And note the contrast with 8979 the same day**, where eleven suspected plate defects turned out to
   be ours. Here the suspicion ran the other way and the plate said Migne. **The profile of a defect
   never decides it.**

⚑ Plate: cols 521/522, 525/526 (and now the 400 dpi re-read of 268) carry **no foot-of-page apparatus** —
no numbered *Forte* note, no asterisk-keyed EDIT. note. `coverage: "spot"`.


---

## ⛔ PLATE SWEEP, 2026-08-29 — every `[sic:]` in this work read at Migne's plate

This work's `[sic:]` markers stood on columns nobody had read. All were read this session from the on-disk PL 113 scan at 300 dpi (500 dpi where a single letter decided it), full page width, with the volume's page map re-calibrated against the printed corner numbers **before** the read.

**A `[sic:]` asserts a defect in MIGNE'S TYPE, and our Latin is not the printed page — it is Corpus Corporum's transcription of it.** Where the plate disagrees with our file, the fault is ours and the accusation is withdrawn.

### Withdrawn — Corpus Corporum's error, not Migne's

| col | we printed | THE PLATE PRINTS |
|---|---|---|
| 0522B | *seniorunt* | **seniorum** |
| 0525C | *periculam* | **periculum** |
| 0530A | *In icat* | **Indicat** |

The Latin is corrected in `data/tei-patches/8959.json` and each marker is removed from the English.

Full ledger for all 23 works swept: `data/plate-sweep/2026-08-29-sic-sweep.tsv`.
