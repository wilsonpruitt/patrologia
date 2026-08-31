# 8981 — *Epistola I ad Corinthios* — cruces for chunks 0005–0009 (cols 0529C–0542D)

Range: **CAPUT VII–CAPUT XII**, chunks `0005`–`0009`. This is the middle stint of a
three-agent split; the merge layer must reconcile this file with `cruces-0000.md` /
the other range files.

**No column in this range has been read at the plate.** Per the ship test (brief §B and
CLAUDE.md hard rule 8a) **no `[sic:]` was fired anywhere in the five chunks** — not one.
Every suspicion about the type is logged below as a **plate request** instead. Three of
the candidates below are real, well-formed Latin words that read oddly, which is exactly
the population the 2026-08-23 batch measured as **Migne's own, 4 times out of 4**; a
corpus-frequency argument was deliberately not used to convict any of them.

`[var:]` markers **were** fired, five of them, each resting on
`sources/vulgate/clementine-flat.txt` and cited by book chapter:verse.

---

## 1. Conventions applied (and one that needed a ruling)

| item | treatment |
|---|---|
| `VERS. n.--` | verbatim, untranslated (brief convention 1) |
| lemma | Englished (convention 2); fragments rendered as the phrase they stand for (convention 3), `etc.`/comma carried |
| `(AMBR.)`, `(BEDA.)`, `(CHRYS.)`, `(ID.)`, `(HIER.)`, `(AUG., …)` | ordinary `[n: …]`, contents untranslated, in place |
| `*usque ad*` | ***as far as***, italic, **no verb ever supplied** (8978 §205 / Tobit precedent) — 5 occurrences, all genuine abridgment formulae |
| second person | *thou* = singular, *you* = plural (Pattern 17). **No "ye" anywhere.** Singular passages: 0530C *sic et tu exspecta*; 0538C *cum transieris*; the whole Augustinian address at 0537A–B (*vox tua … canta … manducas et bibis*) |
| em-dashes | none introduced |

### 1a. ⚠ THE HEAD FORM — a conflict between the launch brief and this work's own shipped English

My launch message gave `CAPUT VII.` → `CHAPTER SEVEN.` **I did not follow it.** This work's
already-shipped `src/english/8981/0001.md` prints **`## CHAPTER II.`** against Latin
`## CAPUT II.`, and Ruth (8968), the pilot named as the format model, does the same. The
consistent rule visible in both is: **a spelled-out Latin ordinal becomes a spelled-out
English one (`CAPUT PRIMUM.` → `CHAPTER ONE.`, which 8981/0000 also prints), a Roman
numeral stays a Roman numeral.** So this range prints `CHAPTER VII.` … `CHAPTER XII.`

✅ **Checked after all three stints landed: the work is consistent.** Chunks 0000–0013 now
print `CHAPTER ONE.` (for `CAPUT PRIMUM.`) and `CHAPTER II.` … `CHAPTER XVI.` for the Roman
forms, including `CHAPTER XV. (cont.)` at a chunk boundary. All three agents converged on the
same rule independently. Nothing for the merge layer to fix here; recorded because the launch
brief's example would have produced a second convention had it been followed literally.

---

## 2. Vulgate collation — THE DELIVERABLE

Every italic span in cols 0529C–0542D was checked in place against
`sources/vulgate/clementine-flat.txt`. Below: first the divergences, then, in §2c, the
**lemmata checked and found to agree**, because a findings-only list cannot be told apart
from a report by an agent that never looked.

### 2a. Divergences that took a `[var:]` (5)

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0534A | *ut plures lucrifacerem **Christo*** | 1Cor 9:19 *ut plures lucrifacerem* | a whole word added to a scripture quotation, naming the beneficiary; the classic `[var:]` shape |
| 0538B | *Natura **nos** docet, **quia** vir si comam nutriat* | 1Cor 11:14 *Nec ipsa natura docet **vos**, **quod** vir quidem si comam nutriat* | three at once: the negative interrogative *Nec* is gone (Paul's rhetorical question becomes a flat assertion), *nos* for *vos*, *quia* for *quod*. **Material**: the gloss's own frame is *jam non ex auctoritate traditionis suadet, sed ex natura*, and it needs the assertion, not the question |
| 0540D | *Ecce **pietas** … est sapientia* | Job 28:28 *Ecce **timor Domini**, ipsa est sapientia* | **the exposition rests on the divergent word.** The gloss immediately glosses *pietas* as *cultus* and says *qui Graece theosebia* — an argument that cannot be made from *timor Domini* at all |
| 0541D→0542B | *Sed **in** idipsum pro invicem* | 1Cor 12:25 *sed idipsum pro invicem* | the gloss expounds *ut tendant **in** idipsum* — the added preposition is the word the exposition turns on |
| 0542C | *Tertio doctores* | 1Cor 12:28 *exinde doctores* | a different word in an enumeration the gloss expounds as an enumeration (*Primum … Secundo … Tertio*). Cause not speculated on, per Pattern 14 |
| 0542C/D | *Domine, in nomine tuo prophetavimus, daemonia ejecimus, virtutes fecimus … Recedite a me, non novi vos, operarii iniquitatis* `[n: (Matth. VII)]` | Mt 7:22 *nonne in nomine tuo prophetavimus, et in nomine tuo daemonia ejecimus, et in nomine tuo virtutes multas fecimus?* · Mt 7:23 *numquam novi vos : discedite a me, qui operamini iniquitatem* | a conflation: Migne's closing words are **Lc 13:27** *discedite a me omnes operarii iniquitatis*, not Matthew's, and the Matthaean question has become a statement. Both witnesses named in the marker; no cause proposed |

(Six rows, five markers — the last two rows are the single Matthew marker plus the 12:28 one.)

### 2b. Divergences found, logged, and deliberately given NO marker

Pattern 14 fires on divergence **that changes the sense**. These do not, and a marker on
each would be spam on every page:

- **0530A `Nam caeteris`** vs Vulg 1Cor 7:12 *Nam ceteris* — `ae`/`e`, orthographic.
- **0531A `Tanquam non habentes sint`** vs 1Cor 7:29 *tamquam* — orthographic; same for `Tanquam Judaeus` (0534A / 9:20), `Nunquid` for *Numquid* (0533A, 0533C ×2 / 9:4, 9:8, 9:9), `Quotiescunque` for *Quotiescumque* (0539B / 11:26), `Si quidem` for *siquidem* (0532C / 8:5).
- **0532A `De his`** vs 1Cor 8:1 *De iis*; **0534A `His qui sub lege`** vs 9:21 *iis qui sub lege* — the *his*/*iis* pair, the same variant twice.
- **0532C `Idolum nihil est in mundo`** vs 8:4 *nihil est idolum in mundo* — word order only.
- **0533B `Sororem mulierem`** vs 9:5 *mulierem sororem* — word order only.
- **0534A `Nam et si`** vs 9:16 *Nam si* — an added *et*, no sense change.
- **0534A `Omnis enim`** vs 9:25 *Omnis autem* — connective only.
- **0531A `Ego sum Pauli, ego Apollo,` etc.** vs 1Cor 1:12 *Ego quidem sum Pauli : ego autem Apollo* — compression of a verse the work already glossed in chunk 0000. Same at 0538B (`Ego sum Pauli`).
- **0538B `Ut exhiberet sibi Ecclesiam gloriosam`** vs Eph 5:27 *ut exhiberet **ipse** sibi **gloriosam Ecclesiam*** — a dropped *ipse* and an inverted adjective; English has no exponent for the order and the sense is untouched.
- **0537B `Si hominibus placerem, servus Christi non essem`** vs Gal 1:10 *si **adhuc** hominibus placerem, **Christi servus** non essem* — a dropped *adhuc* and inverted order. ⚠ **7a″ was live here**: the familiar English is "if I **yet** pleased men". The English on the page says "If I pleased men", because that is what Migne prints.
- **0539C `Qui manducat me, ipse vivet propter me`** vs Jo 6:58 *et qui manducat me, **et** ipse vivet propter me* — dropped connectives.
- **0540A `Non inferetur cadaver tuum in **sepulcro** patrum tuorum`** vs 3Rg 13:22 *in **sepulchrum** patrum tuorum* — accusative in the Clementine, ablative in Migne, plus the *ch*/*c* spelling. ⚠ Logged rather than marked **because the brief warns that a call turning on a single letter should not trust this copy to that precision** (`sources/vulgate/README.md`).
- **0540A `Invicem exspectare`** vs 1Cor 11:33 *invicem **exspectate*** (imperative → infinitive). One letter; same caution; and the gloss (*Ut multorum oblatio simul celebretur*) is indifferent to it.
- **0540A `Quia Deus operatur. Omnia in omnibus.`** vs 1Cor 12:6 *idem vero Deus **qui** operatur omnia in omnibus* — Migne splits one relative clause into two lemmata and recasts *qui* as *Quia Deus*. This is the glossator's own segmentation, not a text divergence.
- **0541B `Ut vult`** vs 1Cor 12:11 *prout vult* — a clipped lemma.
- **0539B `Laudo vos in hoc?`** — **not a divergence at all.** Migne prints *Vel sic distingue*, i.e. he is proposing a re-punctuation of 11:22 (*laudo vos ? in hoc non laudo*). Rendered as the glossator's proposal, both question marks kept.

### 2c. Lemmata CHECKED AND FOUND TO AGREE with the Clementine

Recorded because a checked negative is worth having. All verified in place, not from the
pre-scan's ✓.

- **1Cor 7** (chunk 0005): *De quibus* 7:1 · *Hoc autem* 7:6 · *Unusquisque* 7:7 · *Uri* / *melius* 7:9 · *Quod si discesserit* + *Et vir uxorem* 7:11 · *Si quis frater* 7:12 · *Sanctificatus est* + *Alioquin* 7:14 · *Non enim* + *In pace* 7:15 · *Unde enim* 7:16 · *Divisit Dominus* 7:17 · *Circumcisus aliquis* 7:18 · *Circumcisio nihil est* 7:19 · *Servus* + *Magis utere* 7:21 · *Libertus* 7:22 · *Empti estis* + *Servi hominum* 7:23 · *De virginibus* 7:25 · *Necessitatem* 7:26 · *Hoc itaque dico* + *Tanquam non habentes sint* 7:29 · *Cogitat* + *Ut sit sancta* 7:34 · *Non ut laqueum* 7:35 · *Si quis autem* 7:36 · *Melius facit* 7:38 · *Mulier alligata* + *Quod si dormierit* 7:39 · *Beatior* + *Puto autem* 7:40 · *neque nubent, neque nubentur* = Mt 22:30 / Mc 12:25 **verbatim** · *Si me sciretis, forsitan et Patrem meum sciretis* = Jo 8:19 **verbatim** · *Putas inveniet fidem in terra?* = Lc 18:8 from *putas* on.
- **1Cor 8–9** (chunk 0006): *Scientia inflat* 8:1 · *Si quis autem diligit Deum* 8:3 · *De escis* + *Nisi unus* 8:4 · *Si quidem sunt dii multi* 8:5 · *Deus* / *Ex quo* / *Et unus* 8:6 · *Polluitur* 8:7 · *In Christum* 8:12 · *Non sum liber* 9:1 · *Operandi* 9:6 · *Quis militat* ×2 + *Quis plantat vineam, et de fructu ejus non edit?* + *Quis pascit* + *Et de lacte* 9:7 (the Chrysostom lemma is **verbatim** 9:7) · *Ne quod offendiculum* 9:12 · *Nescitis* 9:13 · *Ego autem* + *Bonum est* + *Gloriam* 9:15 · *non est mihi gloria* + *vae* + *Necessitas* 9:16 · *Si enim volens* + *Si autem invitus* + *Dispensatio mihi* 9:17 · *Ex omnibus* + *Omnium* + *me servum feci* 9:19 · *Omnibus omnia* 9:22 · *Nescitis* + *Bravium* 9:24 · *Non quasi* 9:26 · *Castigo corpus meum* + *Ne forte* 9:27.
- **1Cor 10** (chunk 0007): *Nolo enim* + *Quoniam patres* + *Sub nube* 10:1 · *In Moyse baptizati* + *Baptizati sunt* 10:2 · *Eamdem escam* + *Spiritalem* 10:3 · *Petra erat Christus* / *Consequente eos petra* / *Petra autem* 10:4 · *Neque idololatrae* + *Sedit populus* + *Ludere* 10:7 · *Neque tentemus Christum* 10:9 · *In figura* + *Scripta sunt* + *Fines saeculorum* 10:11 · *Videat ne cadat* 10:12 · *Tentatio vos* + *Possitis sustinere* 10:13 · *Propter quod* 10:14 · *Calix benedictionis* + *Panis quem frangimus* 10:16 · *Quoniam unus* 10:17 · *Videte* + *secundum carnem* 10:18 · *Quid ergo?* + *idolis immolatum sit aliquid* 10:19 · *Socios fieri daemoniorum* 10:20 · *An aemulamur Dominum* + *Omnia mihi licent* 10:22–23 · *Omne quod in macello* 10:25 · *Propter illum* 10:28 · *Ut quid enim* 10:29 · *Sive ergo manducatis* 10:31 · *Ecclesiae Dei* 10:32 · *Omnibus placeo* 10:33. **Plus the non-italic quotation at 0536C**, *Deus deorum Dominus locutus est, et vocavit terram a solis ortu usque ad occasum* = **Ps 49:1 verbatim** (see §4 — this is an *usque ad* look-alike).
- **1Cor 11** (chunk 0008): *Imitatores* 11:1 · *Laudo* 11:2 · *Viri* + *Caput Christus est* 11:3 · *Orans* 11:4 · *Quoniam imago* 11:7 · *Verumtamen* + *In Domino* 11:11 · *Omnia autem* + *omnia ex Deo* 11:12 · *Vos ipsi* 11:13 · *Si comam* 11:14–15 · *Hoc autem praecipio* + *Non laudans* 11:17 · *Oportet et haereses* 11:19 · *Dominicam coenam* 11:20 · *Unusquisque enim* 11:21 · *Ecclesiam* + *Aut Ecclesiam Dei* + *Laudo vos?* 11:22 · *Ego enim accepi* + *In qua nocte* 11:23 · *Fregit* 11:24 · *Quotiescunque* + *Donec veniat* 11:26 · *Indigne* 11:27 · *Judicium sibi manducat* 11:29 · *Ideo inter vos* 11:30 · *Dum judicamur* + *Corripimur* 11:32.
- **1Cor 12** (chunk 0009): *De spiritualibus* 12:1 · *Scitis* 12:2 · *Ideo notum* + *Nemo in spiritu* + *Dicit* + *Nisi in Spiritu sancto* 12:3 · *Divisiones* 12:4 · *Idem vero Deus* 12:6 · *Unicuique* 12:7 · *Sapientiae* 12:8 · *Alteri fides* 12:9 · *Sermonum* 12:10 · *Unus atque idem spiritus* + *Dividens singulis* 12:11 · *Ita et Christus* 12:12 · *Etenim* + *in uno spiritu* 12:13 · *Nam et corpus* 12:14 · *Si totum* 12:17 · *Quod si essent omnia unum* 12:19 (clipped before *membrum*, otherwise verbatim) · *Aut iterum caput pedibus* 12:21 · *Inhonesta sunt* 12:23 · *Honesta autem* + *Sed Deus temperavit* 12:24 · *Et si quid patitur* 12:26 · *De membro* 12:27 · *Et quosdam quidem* + *Primum* + *apostolos* + *Secundo prophetas* + *Genera linguarum* 12:28 · *Excellentiorem viam* 12:31.

---

## 3. PLATE REQUESTS — every suspicion, none of them marked

Nothing here fired a marker. Each names the column, the printed reading, why it is
suspect, and what would settle it. **A `[cj:]` was considered for the first three and
withheld: it too asserts what stands on the plate, and our Latin is Corpus Corporum's
transcription, not the plate.**

1. **0541D — `Memora, unumquodque eorum sicut voluit`** (lemma at VERS. 18, glossing
   1Cor 12:18). The Clementine reads *posuit Deus **membra**, unumquodque eorum in corpore
   sicut voluit*, and the gloss beneath it is about the members of the body (*Ut nihil desit
   illi: ita et in Ecclesia diversas personas*). *Memora* is a real Latin form (imperative of
   *memoro*) and construes with nothing here. **Carried into the English as it stands**,
   inside the already-italic lemma, no second marker (Pattern 10's nested-italics rule).
   *Settled by:* one plate read of col. 0541D. If Migne prints *Membra*, this is a
   transcription corruption and the English should be re-cut to "The members, every one of
   them as he would."
2. **0542A — `qui cum honesti sunt egestate et habitu, aliquando tamen vitae mundioris sunt`.**
   The *tamen* demands a privative in the first limb, and the whole paragraph glosses
   *inhonesta sunt* — the expected reading is *inhonesti*. `honesti` is a perfectly real word,
   so **rendered as printed** ("though they are comely in poverty and in habit, are nevertheless
   sometimes of a cleaner life"), which is the sentence Migne's words make.
   *Settled by:* one plate read of col. 0542A.
3. **0535B — `Solet res, quae significatur nomine rei quam significat nominari`.** The
   Augustinian commonplace runs *solet res quae **significat** … nomine rei quam significat
   nuncupari*; the printed passive *significatur* reverses which term is named after which,
   in a sentence whose next clause (*Petra. Id est Christus, sequebatur*) needs the active.
   **Rendered as printed.** *Settled by:* one plate read of col. 0535B.
4. **0530A — `quia potior quod a falsariis dicitur esse appositum`** (inside the `(AMBR.)`
   note). Verbless: *potior* has no copula and the relative *quod* has no clear antecedent.
   Rendered "because he is the mightier, which is said to have been inserted by falsifiers",
   i.e. **the copula is supplied because English cannot omit it**, and nothing else. Very
   possibly Migne prints *potior est* with a full stop before *Quod*. *Settled by:* col. 0530A.
5. **0542B/C — `Nunquid omnes pro,` etc.** (lemma at VERS. 29). `pro,` is a word cut in the
   middle. Rendered by convention 3 as the phrase the fragment stands for,
   ***Are all prophets,* etc.**, from 1Cor 12:29 *Numquid omnes prophetae?*. It is not at a
   column edge, so the margin-clipping caution does not obviously apply.
   *Settled by:* col. 0542C — is it a compositor's break, Migne's own compendium, or ours?
6. **0531D — `nec eis verecundiam numerositas inferre`.** *numerositas* is nominative and
   cannot be the object of *debeo*; the sentence is an anacoluthon as printed. Rendered
   "nor ought their multiplicity to bring shame upon them", supplying no word.
   *Settled by:* col. 0531D — Migne may print *numerositate* or *numerositatem*.
7. **0538C — `Non deserentis solertia requiratur, sed praecipientis auctoritas attendatur`.**
   *disserentis* ("of one arguing") would give the expected contrast with *praecipientis*.
   *deserentis* is a real word, so **rendered as printed** ("of one who forsakes"), no
   conjecture in the text. *Settled by:* col. 0538C.
8. **0541D — the printed `opus est?.`** — a question mark followed immediately by a full
   stop. **Both marks reproduced** (Pattern 8: never delete). *Settled by:* col. 0541D.
9. **0537C — `quasi. Etsi de aliis culpo, laudo tamen de hoc: ironia.`** A bare *quasi*
   closed by a full stop, mid-sentence in sense. **Reproduced as printed** ("as if. Though I
   blame concerning other things…"). *Settled by:* col. 0537C.
10. **0536A — `Vel. modo loquor infirmis, ut supra prudentibus.`** *Vel* closed by a full stop
    and followed by a lower-case *modo*, where the work's other seventeen *Vel*s take a comma.
    **Reproduced as printed** ("Or. now I speak to the weak…"). *Settled by:* col. 0536A.
11. **0542A — `VERS 23.--`**, with no full stop after `VERS`, unique in this range against
    the 124 other `VERS. n.--` addresses of this range. **Reproduced verbatim.** *Settled by:* col. 0542A.
12. **0535B–0536D — verse addresses out of step with the Clementine's versification.**
    Migne addresses *In figura* as VERS. 10 and *Scripta sunt* as VERS. 11, where the
    Clementine has both inside 10:11 (10:10 being *Neque murmuraveritis*). Likewise VERS. 22
    at 0536D carries *An aemulamur Dominum*, which the Clementine numbers 10:22 together with
    *Omnia mihi licent* — glossed here as VERS. 23. **Order and numbers reproduced exactly**
    (brief: Migne's own printing is not ours to tidy). This is a numbering question, not a
    defect, and needs no plate read.

### Candidates examined and REJECTED, with reasons

- **`caeteris` · `Tanquam` · `Nunquid` · `Quotiescunque` · `coenam` · `charitas` · `Moyse`** —
  Migne's ordinary orthography, Pattern 9. Not defects, not marked, not raised.
- **`spiritalem` (0535A) beside `spiritualibus` (0540A)** — both attested; the *spirital-*/
  *spiritual-* pair is the Vulgate's own at 1Cor 10:3–4. Rejected as a Pattern 9 item.
- **`septemviram` (0531D)** — a rare word, but well formed and exactly right for the
  Sadducees' woman of Mt 22:25–28. Rendered "the woman of seven husbands". No plate request.
- **`theosebia` (0540D)** — a transliterated Greek noun, printed in italics by Migne and kept
  in italics untranslated, glossed by the sentence itself. Not a defect.
- **`propensiorem` (0529D) / `propensiorem poenam` (0535C)** — the same real word twice in the
  range, in two senses; no anomaly.
- **`de pseudo gloriantes` (0535D)** — a bare *pseudo* used substantivally. **Rendered "the
  false ones"**, not expanded to "the false apostles", although *pseudoapostolorum* /
  *pseudoapostolis* stand twice within two columns. Expanding would be a supply, and the
  substantival *pseudo* is attested medieval usage. Raised here so a reader is not surprised;
  **not** a plate request.
- **A comma→semicolon sweep** — explicitly not run (brief, Test 3's caveat): Migne prints
  plenty of semicolons in this range himself.

---

## 4. `usque ad` — decided one occurrence at a time (Addendum D)

Six occurrences in the range. **Five are the abridgment formula** (each has an *etc.,*
before it and a resumption tail after) and were rendered ***as far as*** with **no verb
supplied**: 0533A (Bede, on 9:4) · 0534A (Jerome, on 9:20) · 0536B (Bede, on 10:16) ·
0536B (Augustine, *De doctr. Christ.*, on 10:20) · 0538A (Augustine, *De Trin.*, on 11:7) ·
0539A (Ambrose, on 11:21). That is six formulae.

**The look-alike:** 0536C *vocavit terram a solis ortu **usque ad** occasum* — the words are
**Ps 49:1's own** and mean "unto"; rendered "unto the going down thereof". It sits four lines
from a genuine formula and is exactly the trap Addendum D names.

Each resumption tail was parsed as strict prose. The tails carry their own connectives
unchanged — 0533A's *potestas igitur est, non jussio Domini* keeps both the *igitur* and the
*non*; 0538A's *ut male viventes bene loquendo turpitudinem suam contegant* keeps its purpose
clause.

---

## 5. Supplied pronouns and subjects — every one, named

Sites where English cannot leave the subject or object unexpressed and the Latin does not
print it. Where two readings both construe, both are stated.

1. **0530B, *quo forsan possit fieri fidelis*** — supplied **"she"**. The antecedent is the
   *infidelem* of the preceding clause, and 1Cor 7:12–13, the verse being glossed, makes that
   the unbelieving **wife** (*Si quis frater uxorem habet infidelem*). *fidelis* is common in
   gender, so the Latin does not decide it; the lemma above does. ⚠ **If the plate's *Nam
   caeteris* gloss is read as covering 7:13 as well (the unbelieving husband), "he" would
   construe equally.** Flagged, not hidden.
2. **0530C, *sic et tu exspecta*** — **"thou"**, singular, per Pattern 17. Not a supply, a
   number call: *tu* is printed.
3. **0532A, *nec sufficienter scire dicit*** — rendered "**and says that they do not know
   sufficiently**." The rival is "**nor does he say that they know sufficiently**" (taking
   *nec* on *dicit* rather than on the infinitive). **Both construe.** I took the first
   because the sentence's other limb is *Quos primum arguit* — he is reproving them, which
   is an assertion about them, not a withholding of one. The rival is not obviously worse.
4. **0533C, *Curae quidem sunt; verum non ita, ut de iis legem instituat*** — rendered "They
   are indeed a care; but not so, that he should establish a law concerning them", **with no
   "to God" supplied**, although 1Cor 9:9 prints *cura est **Deo***. The dative is not on the
   page here.
5. **0538A, *Quia in aliis ubi est, potest velare*** — supplied **"he"** = the *vir* of the
   lemma *Orans* (1Cor 11:4 *Omnis vir orans*). Secure.
6. **0541C, *Non illius persona contemnenda vel praeferenda*** — supplied **"his"**.
   *illius* has **no printed antecedent in the sentence**. Two readings construe: the
   individual believer who received a gift (which is what the paragraph is about — *quia unus
   et idem in omnibus operatur*), or the Spirit himself. **I took the first**, because the
   parallel clause forbids giving God's glory *to men*, so the person at issue is a man's.
7. **0541D, *Ut nihil desit illi*** — supplied **"it"** = the body, from *corporis* in the
   VERS. 17 gloss immediately above.
8. **0542B, *ut non minus pro alio quam pro se*** — supplied **"it"** (the member), not "each
   one"; the subject of the whole period is *membra*.
9. **0530A, *quia potior [est]*** — the copula supplied, see plate request 4.
10. **0532D, *Noster vero homines deos facit*** — rendered "**But ours** makes men gods",
    keeping Migne's bare *Noster*; the antecedent is *Deus noster* six words earlier.

---

## 6. Punctuation, and the one deliberate departure

Marks were compared **band by band** against the Latin twin, colons, semicolons and question
marks separately, across all 54 column bands in the five chunks. **Question marks are at exact
parity in every band** (0005: 2 · 0006: 4 · 0007: 4 · 0008: 3 · 0009: 2). Colons and semicolons
are at parity in **53 of 54 bands**.

⚠ **The single deviation is deliberate and is Pattern 8b.** At **0539C** Migne prints
*Quaeritur quomodo hoc, cum Dominus dicat: `*`Qui manducat me, ipse vivet propter me?`*`* —
an indirect question closed with `?`, which English syntax cannot take. Per 8b it was recast
into direct form behind a colon: "**It is asked: how is this, when the Lord says: *He that
eateth me, he himself shall live by me?***" That adds one colon to that band. Nothing was
supplied or deleted; the sentence type and the mark both survive.

Marks preserved against the ear: `opus est?.` (0541D) · `quasi.` (0537C) · `Vel.` (0536A) ·
the space before the paren in *`*`Ego sum Pauli`*` )* (0538C band, VERS. 19; the paren-space is Migne's) · the `.--` after *etc.* at
0529B (*`*`Hoc autem,`*` etc.--Dicet aliquis*).

---

## 7. Column anchors

All 54 anchors present, verbatim, in order, and **checked against the word they stand beside
in the Latin, not merely for presence** (brief 2b). Where English word order made an exact
seat impossible the anchor was kept beside its own Latin word rather than moved to a tidier
place:

- 0533C — Latin *pastores [0533C] erant apostoli*; the English was written **"soldiers, and
  husbandmen, and shepherds [0533C] were the apostles"** rather than the smoother "the
  apostles were … shepherds", precisely so the anchor keeps its seat.
- 0530C — Latin *confirmatur [0530C] conjugium*; English "the marriage is confirmed [0530C]
  through the knowledge of God", the anchor kept immediately after *confirmatur*'s English.
- 0542C — Latin *omnium [0542C] judices*; English "and judges of all [0542C]", the anchor
  seated after *omnium*.
- 0538C — Latin *in revelatione [0538C] Evangelii*; English "in the revelation [0538C] of the
  Gospel".
- 0540A — Latin *qui vivus [0540A] potuit terreri*; English "who while alive [0540A] could be
  terrified".

---

## 8. Read clean — named

So that this report can be told apart from one by an agent that did not look, the following
were read in full against their Latin twins and returned **nothing to raise**:

- **0005** — the whole of CAPUT VII except the four sites in §3 (nos. 4, 6) and §5 (nos. 1–2).
  In particular the long Augustinian marriage argument at 0529C (*Non enim quia incontinentiae
  ibi malum est …*) was read three times for polarity: **five printed negatives, all present,
  each on its printed host**, and the `non propter illud malum` clause was re-cut so the
  negative sits on the phrase and not on the verb, per 2a's trigger condition
  (`non … sed` correlative with a plausible verb adjacent).
- **0006** — CAPUT VIII entire and CAPUT IX to 9:27. The Trinitarian *Ex quo* passage at 0532D
  (*alioquin jam non omnia per Patrem, nec omnia per Filium…*) was checked negative by
  negative and clause by clause: clean. The five sigla all carry through in place.
- **0007** — CAPUT X entire. The *Ps 49:1* quotation and the *usque ad* look-alike beside it
  (§4) were the only things worth recording; the long Augustinian passage on singing and
  eating at 0537A–B is a sustained **singular** address and was rendered *thou* throughout,
  consistently with the rest of the range.
- **0008** — CAPUT XI entire, including the head-covering material at 0537C–0538C and the
  eucharistic material at 0538D–0540A. Read specifically for 7a″ conformation pressure, which
  is at its worst here (*Hoc est corpus meum* is not on this page but its neighbours are);
  no lemma was conformed. **The one real find is the 11:14 `[var:]`**, which is a conformation
  in the *source*, not in us.
- **0009** — CAPUT XII entire. The body-and-members similitude at 0541C–0542B was read for
  supplied subjects (see §5, four of the ten sites are here).
- **Marker hygiene:** `verify-english.mjs 8981` passes; `scan-raw-markers.mjs` reports no
  marker rendering as literal brackets; frontmatter is byte-identical to each Latin twin;
  `[n:]` counts are 1 / 5 / 3 / 3 / 2 as the frontmatter declares, counted before and after
  writing; no `[nt:]` was needed, since all fourteen notes in the range are attribution sigla
  or citations, not editorial prose.
- **What the fourth test asked** (does the English *assert* what he asserts, not merely
  *contain* it): each paragraph was read back against its Latin with the counts already known
  clean. The three paragraphs where a smooth English reading was actively suspicious were
  §3's nos. 2, 3 and 7 — all three read *better* under the conjecture than under the print,
  which is why all three are logged and none is repaired.
