# *Glossa ordinaria*, **Epistola ad Hebraeos** (PL 114) — cruces, chunks 0000–0004 (cols 0643A–0651D)

Agent 1 of three. Chunks `0000`–`0004`, ARGUMENTUM + CAPUT PRIMUM–IV, Heb 1:1–4:16.
**This file is one third of the work's apparatus and must be merged with `cruces-0005.md`
and `cruces-0010.md` (or whatever the peer ranges are named) before the work ships.**

`verify-english.mjs` clean on all five chunks (the only failures it reports are peer chunks
not yet written). Mechanical state of my five:

| check | result |
|---|---|
| column anchors | 36 total, verbatim, in order, **and position-checked against the Latin word each stands beside** (test 2b) |
| `[n: …]` notes | 8 total (4 in 0001, 4 in 0002), verbatim, same order, same index |
| italic spans | 154 total, 1:1 with the Latin twin in every chunk |
| `?` parity | 0 / 1 / 1 / 1 / 1 — matches the Latin exactly |
| `:` `;` `?` `«` `»` `!` **band by band** | **zero mismatched bands in all five chunks** (test 3) |
| guillemets | zero in either language |

⚑ The band-by-band pass was not cosmetic: it returned **fourteen** sites where my first draft
had softened or supplied a mark, every one of them invisible to a total-count check. Two were
in the same band and would have cancelled. The list is at §5.

**Apparatus fired: 3 `[cj:]` · 5 `[var:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**

---

## §1 · THE LEMMA WALK (7a″) — every span in cols 0643B–0651D, checked in place

Collated against `sources/vulgate/clementine-flat.txt`. **The launch pre-scan flagged 21 spans
in my range; 5 of those fall in chunk 0005 or later and are the next agent's.** Of the 16 in my
files, **none was a substantive divergence** — every one is an artefact of how this glossator
cuts and reassembles his lemmata (§1.2). The five real divergences I found were mostly in spans
the pre-scan marked **✓**, which is the pre-scan working exactly as its own header says it does.

### 1.1 · The five divergences that took a `[var:]`

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0644A | *Paulo minus **minoratus est** ab angelis* [n: (Psal. VIII)] | Ps 8:6 *Minuisti eum paulominus ab angelis* | **Conflation.** The passive *minoratus est* is not in Ps 8:6 at all; it is Heb 2:9's *modico quam angeli minoratus est*, grafted onto Ps 8:6's frame. And the argument turns on it: the whole point of the sentence is that Christ *was made* less than the angels, against *Tanto melior*. Pre-scan mark: ⚠. |
| 0645C | *Ibunt hi in **ignem** aeternum, **et illi** in vitam aeternam* [n: (Matth. XXV)] | Mt 25:46 *Et ibunt hi in **supplicium** aeternum : **justi autem** in vitam aeternam* | Two substitutions in one verse: *ignem* for *supplicium*, and *et illi* for *justi autem*. Everlasting **fire** is not everlasting **punishment**, and dropping *justi* removes the antithesis the verse is quoted for. Pre-scan mark: ⚠. |
| 0646A | *Justam mercedem.* | Heb 2:2 *justam **mercedis retributionem*** | **The gloss's own body refutes its head.** Two sentences later Migne glosses *retributionem* and then *mercedis* as separate words of the verse — so the commentary knows the verse reads *mercedis retributionem*, and only the lemma head reads *mercedem*. Pre-scan mark: ⚠. |
| 0647D | *non **erubescit** fratres vocare,* | Heb 2:11 *non **confunditur** fratres **eos** vocare* | Verb substitution in a proof-text — the founding shape of Pattern 14 (10083's *requiescere*/*quiescere*). Pre-scan mark: ⚠. |
| 0649B | VERS. 10.-- *Offensus.* | Heb 3:10 ***infensus*** | Migne's lemma head is *Offensus*; two words later he glosses ***Infensus*** as a second lemma with *Vel*. So the page shows two readings and never says which is the Vulgate's. The `[var:]` says which. ⚠ **This span was NOT on the pre-scan list** — single words are not searchable that way, and this is the one place in my range where that gap mattered. |

⚠ On the last one I considered and rejected the "Migne's own *( sic )*" analogy (runbook false
positive 5). It does not apply: that rule covers a defect Migne has **flagged as a defect**.
Here he flags nothing — he prints two readings side by side as alternatives, which is a
different act, and a reader still cannot tell from the page which one the Vulgate carries.

### 1.2 · The class that produced most of the ⚠ marks — **non-contiguous reassembly**

⭐ **Name it before it convicts anything** (the brief's closing rule). This glossator routinely
prints as one lemma two or more words of the verse that the Vulgate separates, because he is
citing *the words he means to gloss*, not quoting a continuous run. That is a citing practice,
not a textual variant, and it is why so many spans failed a mechanical phrase search:

| col | lemma as printed | the Vulgate's own wording |
|---|---|---|
| 0644A | *Differentius nomen.* | Heb 1:4 *quanto **differentius** prae illis **nomen** haereditavit* — and Migne then glosses *prae illis* separately, in the same paragraph, which proves he has the whole clause in view |
| 0645A | *Cum introducit.* | Heb 1:6 *Et cum **iterum** introducit* — and he has already glossed *Iterum introducit* as the verse lemma four lines above |
| 0645D | *Ad quem angelorum.* | Heb 1:13 *Ad quem **autem** angelorum* |
| 0647A | *Omnia subjecisti: In eo autem quod* … *subjecit,* … *omnia, nihil dimisit,* | Heb 2:8 — the lemma words are interleaved with the gloss word by word, which is the same practice carried to its limit |
| 0650C | *loqueretur de alia die,* | Heb 4:8 *numquam **de alia** loqueretur, posthac, **die*** |
| 0650C | *In idipsum exemplum.* | Heb 4:11 *ut ne **in idipsum** quis incidat incredulitatis **exemplum*** |

**No marker on any of them, and the reason is Pattern 14's own gate:** nothing is added, nothing
is substituted, and no sense changes — only the order and the intervening words are the
glossator's. Marking these would fire six `[var:]` that assert a divergence Migne never made.

### 1.3 · Real divergences I checked and **declined** to mark, with the reason for each

These are genuine differences from the Clementine. All are logged; none fired, and the ground in
every case is Pattern 14's materiality gate ("in a way that changes the sense"), not doubt about
the fact.

- **0643B *Multifarie.*** — Clementine Heb 1:1 has ***Multifariam***; *multifarie* occurs
  **zero** times in the whole Clementine (checked). It is nonetheless a well-attested Late-Latin
  form of the same adverb, in the same slot, with the same meaning; the gloss (*multotiens*)
  turns on the sense, which is unchanged. Rendered "In divers manners". **Crux, no marker.**
- **0643C *Qui videt me, videt et Patrem **meum***** — Jo 14:9 has *videt et Patrem*, without
  *meum*. An added possessive; the gloss's point (*aequalis, quia non dissimilis*) does not touch
  it. **Crux, no marker.**
- **0646A *Nonne sunt omnes,*** — Heb 1:14 has *Nonne **omnes sunt***. Word order only.
  ⚠ I weighed the 7914 @1079B precedent (*cinis et pulvis* → "dust and ashes", where the gloss
  turned on the order) and it does not transfer: nothing here is expounded from the order.
  **Crux, no marker.**
- **0646A *Et Spiritus distributionibus.*** — Heb 2:4 has *et Spiritus **Sancti**
  distributionibus*. An internal elision, not a terminal cut, so it is not the innocent
  "fragment" class; but the gloss expounds *affluentiam gratiarum* and no argument rests on
  *Sancti*. **Crux, no marker.**
- **0647A *In eo autem.*** — Heb 2:8 has *In eo **enim***. ⭐ The control that decided it is
  inside the work: Migne's own lemma at **0648B is *In eo enim*** (Heb 2:18), so this book prints
  both connectives and neither is expounded. **Crux, no marker.**
- **0649C *si initium substantiae,*** — Heb 3:14 has *si **tamen** initium substantiae **ejus***.
  ⭐ *tamen* is not lost: it stands in Migne's own gloss frame three words earlier, *hac **tamen**
  conditione*. This is lemma-splicing, not omission. **Crux, no marker.**
- **0649D *ex his quae audierunt.*** — Heb 4:2 has *ex **iis** quae audierunt*. Orthographic
  variant of the same pronoun. **Crux, no marker.**
- **0650A *Et requievit die septima.*** — Heb 4:4 has *Et requievit **Deus** die septima ab
  omnibus operibus suis*. The subject is elided; it governs the unexpressed subject of the gloss
  that follows (§3). **Crux, no marker.**
- **0647D *quando ei omnia subjicientur, et erit omnia in omnibus*** — this one **did** fire, but
  not as a straight variant: see §1.1's neighbour below. Migne's span opens with his own
  *quando*, so it is a paraphrase frame, not a quotation; but it drops the **subject** *Deus*
  that the Clementine supplies at I Cor 15:28, and *ei* two words earlier is Christ. The
  `[var:]` records the received reading precisely because the unexpressed subject is now
  ambiguous where the Vulgate's is not. **Marker fired.**

### 1.4 · Spans checked and found to agree with the Clementine exactly

Recorded because a list of findings alone cannot be told from a report by an agent that never
looked. Every one of these was read word by word against the flat file:

**Heb 1 (0643B–0646A):** *Olim* · *Deus* · *Loquens* / *loquens* · *Patribus* · *In prophetis* ·
*Multisque modis* · *In Filio* · *Constituit* · *Haeredem universorum* · *Qui cum sit splendor
gloriae* · *Figura substantiae* · *Portansque omnia* · *Purgationem* · *Sedet* · *In excelsis* ·
*Tanto melior* · *effectus* · *prae illis* · *Hodie* / *hodie* · *Ego ero illi* · *Iterum
introducit* · *Et adorent* (both) · *Angelos* · *Ad Filium* · *In saeculum* · *Unxit te* · *Deus*
· *Et tu* · *In principio* · *Manuum* · *Peribunt* · *Tu autem permanebis* · *Veterascent* · *Et
velut amictum* · *Mutabis eos* · *Tu autem* · *Sede* · *Pedum*.
Also **Apc 21:1** at 0645D: *Vidi coelum novum et terram novam* agrees but for the dropped
opening *Et* and the *coelum*/*caelum* orthography our source normalizes throughout. **No marker.**

**Heb 2 (0646A–0648C):** *Propterea* · *Abundantius* · *Pereffluamus* · *Et omnis praevaricatio*
· *omnis* · *retributionem* · *mercedis* · *Quid est homo* · *Visitas eum* · *Gloria* · *honore*
· *Super opera manuum* · *subjecit* · *omnia, nihil dimisit* · *Eum autem* · *Propter passionem*
· *Auctorem* · *Salutis eorum* · *Multos* · *filios* · *auctorem salutis eorum* · *Per passionem*
· *Consummare* · *Qui enim* · *Ex uno omnes* · *Quia ergo* · *et ipse* · *Participavit eisdem* ·
*eisdem* · *Per mortem* · *Nusquam* · *Apprehendit* / *apprehendit* · *Per omnia* · *In eo enim*
· *Qui tentantur*. Also **Jo 14:28** at 0647B: *Pater major me est* — exact.
⚑ *assumpsit* at 0648B is italic but is **not** a lemma: Migne prints it as the word the Apostle
did **not** use (*non autem assumpsit*). Rendered as such.

**Heb 3 (0648C–0649D):** *Unde fratres* · *Qui fidelis* · *Amplioris* · *Omnis namque domus* ·
*Qui autem omnia creavit* · *Deus est* · *Et Moyses* · *Quapropter* · *Hodie* · *Nolite obdurare
corda vestra* · *Probaverunt* · *Infensus* · *proximus* · *In ira mea* · *Si introibunt in
requiem meam* · *Cor malum incredulitatis* · *Donec hodie* · *Fallacia peccati* · *Participes
enim Christi* · *usque ad finem, firmum retineamus* · *Quidam enim audientes*.

**Heb 4 (0649D–0651D):** *Non profuit* · *Quae audierunt* · *fidei* · *Et quidem* · *Operibus* ·
*hodie* (×3) · *quidem* · *Perfectis* · *Et in isto* · *Diem quemdam hodie* · *Post tantum
temporis* · *Eis* · *requiem praestitisset nunquam* · *posthac* · *Sabbatismus* · *exemplum* ·
*Sermo Dei* · *Vivus* · *Pertingens* · *Divisionem animae* · *Ac spiritus* · *Compagum quoque* ·
*Medullarum* · *Habentes ergo* · *Non enim habemus* · *Qui non possit* · *In auxilio opportuno*.

⚑ **0650C *requiem praestitisset nunquam* is a false ⚠.** The pre-scan missed it only on the
*nunquam*/*numquam* spelling and the Vulgate's comma: Heb 4:8 reads *si eis Jesus requiem
praestitisset, numquam de alia loqueretur*, so Migne's three words **are** contiguous. See §4 for
the scope question that sits on top of it, which is a real one.

### 1.5 · Two `usque ad` occurrences, decided **per occurrence** (addendum D)

- **0647D** *Probat, quod pro nostra liberatione Christum pati decuerit, etc., **usque ad** cum et
  utramque naturam per se constat scivisse.* — **the abridgment formula.** Rendered "as far as",
  and **no verb is supplied** to complete the resumption tail. The `etc.` before it is the tell.
- **0649C** *…**usque ad finem, firmum retineamus.*** — **the verse's own words** (Heb 3:14), and
  inside the italic lemma. Rendered as text: "we keep firm unto the end".
- ⚑ A third, at **0645A** *cum ostendit *intro,* **usque ad** corda hominum* — the ordinary
  preposition, "even unto the hearts of men". This is the look-alike addendum D warns about, and
  it sits in the middle of an etymological gloss (*intro* + *ducendum* prised out of
  *introducit*), which is exactly where a formula-reading would have swallowed the argument.

---

## §2 · THE THREE `[cj:]` — and the second-best reading in each case

### 2.1 · `Confessus` / `confessus` for **`consessus`** — 0644B and 0646A, TWICE

> 0644B *Sic et per dexteram, non Deum deformavit, sed similitudinem honoris demonstravit.
> **Confessus** enim nihil demonstrat aliud nisi honoris aequalitatem.*
> 0646A *VERS. 13.-- …* ***Sede.*** *Victori Filio **confessus** offertur a Patre.*

Both sentences are about Christ's **session at the Father's right hand** — the first follows
*per dexteram* in the same breath, the second glosses the lemma ***Sede***. Both slots demand a
fourth-declension noun as subject (*offertur*; *demonstrat*), and ***confessus*** supplies none:
it is a deponent perfect participle, so what the page says is "he that hath confessed", which is
not what either sentence is arguing. ***Consessus, -us*** ("a sitting together, a session") fills
both slots and both arguments exactly.

**Fired `[cj:]`, and Pattern 18's form kept: Migne's word first, in italics, then the conjecture.**
The English rendering stands beside the marker in both places and is not swallowed by it (test 1).

⚑ **Why `[cj:]` and not `[sic:]` or a bare crux.** Addendum A is the governing rule and it cuts
both ways here: *confessus* is a **real, well-formed word**, so a corpus-frequency argument
cannot convict it and a `[sic:]` would be a public claim about a plate I have not read. A
`[cj:]` claims nothing about the plate — it says Migne prints *confessus* and proposes a reading
beside it, additively. That is the marker built for exactly this case (11081's *munde*/*mundo*),
and the bar it must clear is Pattern 18's: **does the faithful English assert something the
author did not?** It does. "He that hath confessed shows nothing else but equality of honour" is
a claim about confession where the argument is about the session.

⭐ **The rival reading, and why it lost.** The alternative is that *confessus* is Migne's and
means what it says — *confessio* is genuinely a Hebrews keyword (Heb 3:1 *pontificem
**confessionis** nostrae*; Heb 4:14 *teneamus **confessionem***), and this glossator is reading
Hebrews. That is not nothing, and it is why I record it. **It loses on the syntax, not the
theme:** at 0646A the word is the nominative subject of *offertur*, and no participle of
*confiteor* can be the thing "offered by the Father to the victorious Son". A thematic argument
cannot rescue a slot a noun has to fill.
⚠ **Wanted on plate:** both columns, 0644B and 0646A. Two occurrences of the same substitution
in one book is either a compositor's habit or our digitization's, and only the plate separates
those (brief §4 — the normalization class runs in both directions).

### 2.2 · `ligna` for **`signa`** — 0646D

> *…neque tanta **signa**, neque tam diversa prodigia [0646D] per quod ostendit, quia non
> simpliciter est eis creditum, sed per **ligna** et prodigia.*

***Signa*** stands nine words earlier in the same sentence, paired with the same *prodigia*, and
Heb 2:4's own *signis et portentis* is what the whole gloss is expounding. *Ligna* ("logs,
timbers") is a real word and is rendered — "through logs" — with the conjecture beside it.
**The English asserts something false without the marker**, which is Pattern 18's bar.
⭐ **The rival I rejected:** a `[sic:]`. It fails on the ship test — *ligna* is a real,
well-formed word, addendum A is 4-for-4 that a corpus argument against such a word is refuted by
the plate, and a false `[sic:]` publicly blames Migne for what may be Corpus Corporum's error.
The `[cj:]` says the same thing without the accusation.

---

## §3 · UNEXPRESSED SUBJECTS — every "he/she/it/they" I supplied, and what fixed it

The dominant defect class (12 of 25 sites on 11613). Named here so a blind reader can check my
identifications rather than my prose:

- **0643C** *Non enim jam portio Domini est Jacob* — no supplied pronoun; *Jacob* is the subject.
- **0644A** *Supra dictum est, quia per ipsum fecit omnia* — "**he** made all things" = the
  **Father**, *per ipsum* = the Son. Fixed by Heb 1:2 *per quem fecit et saecula*, the verse under
  gloss two lemmata above.
- **0644A** *Postquam ostendit **ejus** excellentiam **quo** cuncta creavit et gubernat* — subject
  of *creavit/gubernat* = the **Father**; *quo* = the Son ("of him **by whom**"). ⚠ *quo* is
  masculine/neuter and *excellentiam* is feminine, so *quo* cannot refer to the excellence; the
  antecedent has to be *ejus*, the Son. **This is a Pattern 9 gender item, not a defect** — no
  English exponent, no marker, and the reading it forces is the one I took.
- **0645A** *ubi jubetur adorari* — the **Son** is commanded to be adored (Heb 1:6 *Et adorent
  eum omnes angeli Dei*).
- **0645D** *Significat mutationem coeli* — subject = the lemma *Et velut amictum*, i.e. the
  verse. Rendered "It signifies".
- **0646D** *quia non simpliciter est **eis** creditum* — *eis* = **the preachers**, not the
  ancients. Fixed by the very next sentence, *cum credimus, non illis, sed Deo nos credere
  declaratur*, where *illis* is unmistakably the preachers.
- **0647A** *Et ideo **illius** est memor* — subject = **God** (from *Cujus fuit memor Deus* five
  lines above); *illius* = the earthly man.
- **0647D** *et erit omnia in omnibus* — subject unexpressed. *ei* two words earlier is **Christ**,
  so the page says Christ; the Clementine's I Cor 15:28 says ***Deus***. I rendered "he shall be
  all in all" (Migne's, undecided) and put the Vulgate's subject in the `[var:]` rather than
  choosing silently.
- **0650A** *Sex diebus fecit omnia* — **God**, from the lemma *Et requievit die septima* (Heb 4:4,
  where the Clementine prints *requievit **Deus***). ⭐ This is a case where the elided subject
  noted at §1.3 does real work: the antecedent I am relying on is a word Migne's lemma does not
  print, and the Clementine's does.
- **0649D** *qui mala retulerunt, non crediderunt* — subject of *crediderunt* = **the people**,
  not the spies; the spies are the relative clause. Fixed by Num 13–14 and by *Exploratoribus*
  standing as the dative the belief is withheld from.
- **0650C** *quo deberet dari* / *nunquam post loqueretur* — subject = **David**, carried from
  *non loqueretur de alia David* at 0650B.

⚠ **One I could not settle and did not force:** 0647D *communicaverant carni … **quae** per
sanguinem accipitur*. The feminine *quae* can look back to *carni* (flesh, the member of the
pair that "blood" stands for) or to *anima* in the intervening *ex anima et corpore*. Both
construe. I rendered it flat — "which is taken by the blood" — supplying no antecedent, so the
English is exactly as undecided as the Latin. **Naming it rather than choosing.**

---

## §4 · THE SCOPE QUESTION AT 0650C — where *nunquam* attaches, and why I left it open

Trigger condition for test 2a fires here (a negative with a quantifier/correlative adjacent):

> *…**requiem praestitisset nunquam,** id est nullo tempore; **posthac,** id est in sequenti
> tempore; **loqueretur de alia die,** id est tempore gratiae, quo deberet dari. **Vel, nunquam
> post loqueretur de alia,** scilicet requie, praeter terram promissionis.*

In the Clementine (Heb 4:8) *numquam* governs the **apodosis** — *numquam de alia loqueretur*,
"he would never speak of another". Migne's serial gloss cuts it onto *praestitisset* and glosses
it *nullo tempore*, which reads it with the **protasis**; then his own *Vel* clause puts it back
on *loqueretur*. **Migne prints both scopes and adjudicates neither.**

**So neither do I.** I rendered the serial as a serial — "*had given rest, never,* that is, at no
time; *thereafter,* … *would he speak of another day,* …" — with the comma before "never" holding
it loose, and then rendered the *Vel* clause with the negative squarely on "speak". Supplying a
scope in the first half would have been the 2a defect exactly: a negative correctly *present*,
landing in the wrong place in English, passing every count.
⭐ Test 2a's own warning applies: it validates the mapping I propose, not the one the Latin makes.
Here the sentence's structure (*Vel*) is what proves there are two mappings, so the honest English
is the one that carries both.

---

## §5 · THE FOURTEEN PUNCTUATION SITES THE BAND PASS RETURNED

Every one of these was a mark I had supplied or softened in draft; none is a Migne defect and
none is reportable. Listed because test 3 exists to be run and its yield is the evidence it was:

**Supplied by me, removed** — a colon at 0643C *personaliter, ut figura*; a semicolon at 0644A
*omni creaturae, quae virtus*; a colon at 0644C *a nomine angelorum, hoc est nomen*; a semicolon
at 0645A *in mundo erat, quae assumptio*; a colon at 0646A *funguntur officio, hoc est opus
angelicum*; two semicolons at 0646B in the *fluimus / effluimus / pereffluimus* chain (Migne
sets it entirely with commas, and the chain is the argument); a semicolon at 0647A *Claritate
immortalitatis **honore*** where Migne sets **no mark at all**; a semicolon at 0647B *aggravat
ipsum animum, sed hoc non in Christo*; two semicolons at 0647D *pueris, vel eisdem … carne et
sanguine, et hoc similiter*; a semicolon at 0648D *Fabricavit dico, per se enim*; a semicolon at
0651C *per meliorem legem suam, et quomodo*.

**Deleted by me, restored** — the colon of *Dicit: loquens* at 0643B; the colon of *Quod vero
ait: mercedis* at 0646C; the colon of *Apostolus dixit: apprehendit* at 0648B.

⚠ **0646B and 0647D would each have cancelled against a total count** — two supplied semicolons
in one band, in a book that prints 31 semicolons of its own across my five chunks. Migne's own
practice here is nowhere near zero, so **Tobit's zero-semicolon exception is not available in
this book and was not invoked** (test 3's own caveat). No comma→semicolon sweep was run in
either direction.

---

## §6 · MIGNE'S OWN PRINTING — read as printed, logged, not tidied

### 6.1 · ⭐ 0649D — the repeated clause, and **the one thing in my range I want a plate on**

> *…ne quis putet satis esse audire de requie, quia [0649D] et illi omnes audierunt, **sed non
> omnes audierunt, sed non omnes pervenerunt.***

The sentence contradicts itself: *omnes audierunt* … *sed non omnes audierunt*. Heb 3:16's own
sense (*Quidam enim audientes exacerbaverunt : sed non universi*) and the gloss's purpose — that
hearing is not enough — both want the middle clause to say something other than *audierunt*.
The likeliest shape is an eye-skip that has copied *audierunt* into a slot wanting a different
verb (*crediderunt*, *obedierunt*), the second *sed non omnes* being the trigger.

**Rendered exactly as printed** — "they also all heard, but not all heard, but not all arrived" —
because Pattern 7 has no exception and the self-contradiction is the evidence.
**No marker, and the reason matters:**
- Not `[d: …]`: Pattern 11 wants the **same run** set twice. What repeats here is *sed non omnes*
  (correctly, in parallel clauses) plus the verb; the run is not doubled, so a `[d:]` would
  misdescribe the shape.
- Not `[sic: …]`: every word is a real word in a real slot, so there is nothing to carry
  untranslated, and the ship test forbids a plate claim I cannot stand behind. **Our Latin is
  Corpus Corporum's transcription, not the plate**, and dittography is precisely the class a
  transcription generates on its own.
- Not `[cj: …]`: I have two candidate verbs and no way to choose between them from the file.
  Pattern 18 needs a conjecture, not a shortlist.

⚑ **Plate read requested: PL 114 col. 0649D.** This is the highest-value single read in my range —
it decides whether Migne printed a contradiction or our source manufactured one, and the answer
changes which apparatus (if any) the site takes.

### 6.2 · Other printed oddities, read as printed with no marker

- **0644C *et non pro illis, addit prae illis*** — *pro illis* against *prae illis* two words
  later, in a sentence whose whole business is *prae*. Rendered "and not for them". **Declined a
  `[cj:]`**, and the rival is named: reading *prae* is attractive and probably right, but the
  clause is **elliptical rather than assertive** ("because he could have this, and not …"), so
  the faithful English does not *assert* anything false — it merely goes opaque, and Pattern
  18's bar (18a: "the test is whether the English asserts something false, not whether it is
  odd") is not met. Elision is not a false claim.
- **0647A *Qui autem portavit imaginem Christi **dicuntur** filii hominum*** — singular verb in
  the relative, plural in the main clause. English **does** have an exponent for this, so
  rendering it as "he that hath borne … these are rather called" keeps the disagreement visible
  and no marker is needed. ⚑ This is the boundary of Pattern 12's second test: the marker is
  the only honest treatment **where English has no exponent** (11632's *signa … ardeat*). Here
  it has one.
- **0648D *Fabricavit dico*** against Heb 3:4's passive *fabricatur*. Real word, real slot,
  construable as "[someone] built it, I mean". Rendered as printed. Crux, no marker.
- **0648A *Mors erat arma*** — singular subject, plural predicate. Rendered "Death was the arms",
  which carries it; *arma* is in any case a plurale tantum and this may be no defect at all.
- **0651D *Est enim tempus quod non congruit.*** The work's last sentence in my range, and it
  simply stops, with no connection to the sentence before it — which is about there being no
  cause for despair **now**. Rendered "For there is a time which is not fitting", negation
  carried. Very likely the head of a thought the abridgment cut. **Crux; nothing to mark.**
- **0644B *non Deum deformavit*** — *deformare* here in its literal sense, "to give a shape to",
  not "to disfigure". Rendered "did not give God a shape". Not a defect; recorded because the
  familiar English sense would invert the clause.

### 6.3 · Verse-number order

**In sequence throughout my five chunks.** Heb 1:1–14, 2:1–18, 3:1–16, 4:2–16, with gaps where
Migne glosses nothing (Heb 2:3, 2:5, 2:11–13, 2:15, 3:6, 3:15, 4:1, 4:6, 4:10, 4:13). Gaps are
not disorder; **no reordering was needed and none was done.**

---

## §7 · REGISTER CALLS

- **Thou / you (Pattern 17), decided by number, never by dignity.** Singular *thou* at 0645C
  (*Unxit **te***, *O tu Deus Fili*), 0645C (*Et tu*), 0645D (*Manuum* → "of thy hands"), 0646A
  (*Sede* → "Sit thou"; *Pedum* → "of thy feet"), 0647A (*Visitas eum*, *Super opera manuum*),
  and through the whole Augustinian address at 0647B (*tibi videtur* … *non recte **cogitas**,
  nec **attendis***) — a singular reader, so *thou*, exactly as a singular brother would take it.
  Plural *you* at 0649A (*modo **estote** molles*), 0649B (*corda **vestra***), 0649C (*ut
  **putetis***, *Debetis hortari*) — the Hebrews addressed as a body. ⭐ The switch at 0649A is
  visible on the page and is the source's, not mine.
- **`[nt:]` considered and not used.** All 8 notes in my range are bare citations — *(Joan. XIV)*,
  *(Psal. VIII)*, *(Matth. XXV)*, *(Apoc. XXI)*, *(I Cor. XV)*, *(AUG.)*. Pattern 15 decides by
  content, and none is prose. They stay `[n:]`, verbatim, unanglicized.
- **Pattern 4 `[f:]` not applicable** — runbook false positive 4: this is a lemma-and-gloss
  commentary, not a florilegium, however much inline scripture it carries. **No tags.**
- **Column-band arithmetic** — runbook false positive 1: the bands run 0643A→0651D with the
  normal irregularities and **nothing breaks mid-word or mid-construction across an anchor**.
  Not reported, and no `[ed:]`.
- ***anthropopathos*** (0649B) kept as a plain transliterated technical term rather than italic
  Latin, **because Migne prints it un-italicized** and every italic span must be 1:1 with the
  twin. The register rule for untranslatable technical terms yields to the marker rule.
- **Lemma expansion (convention 3), and the line I drew.** *Amplioris* (0648C) is expanded to
  "Of ampler glory" because the bare stump is not English standing alone; *Propter passionem*
  (0647B), *Differentius nomen*, *Ad quem angelorum*, *Manuum*, *Pedum*, *Nusquam*, *Eis* are
  left as they stand because each is readable English as printed. ⚑ Per the brief's closing
  ruling I record the **class** rather than the instances: a clipped lemma is expanded only where
  the stump will not carry itself, and the defect the ruling names — **conformation** — is not in
  play in either direction here.
- **Em-dashes: zero in all five chunks.** Not sought and not avoided; comma, colon and full stop carried every construction. No faithful sentence was restructured to reach that.

---

## §8 · SECTIONS READ CLEAN

Read against the Latin under test 5 ("does it ASSERT what he asserts?") with the counts already
known clean, and returning nothing:

- **0000** entire (ARGUMENTUM, 0643A–B). The one thing worth recording is that
  `verify-english.mjs` warns its ratio is 1.61, above the 1.5 expectation. Confirmed by
  re-reading: the Latin is a chain of compressed ablative absolutes and gerundives
  (*sciens … demonstrans*, *in hac epistola scribenda*, *cujus sensum et ordinem retinens*)
  which English cannot carry without finite clauses. **Unpacking, not padding.**
- **0645A–0645C** (the *Angelos* gloss on nature and office, and the Augustinian
  vocative/nominative note). Dense with negation — *Nihil enim visibiliter fit, quod non … aut
  jubeatur, aut permittatur* — and every negative was traced to its own host word under test 2:
  *non* attaches to the *jubeatur/permittatur* pair, not to *fit*.
- **0651A–0651C** (the long *Divisionem animae* / *Compagum* / *Medullarum* exposition, ~450
  words). No divergence, no defect, no marker. The passage's difficulty is philosophical, not
  textual.
- **All ten *non solum … sed* / *non … tantum* / *sicut … ita* correlatives in my range**, which
  is test 2a's named trigger population, each with the host proven from the sentence's own
  structure rather than from what read well: 0644C *non solum Patre, sed etiam angelis* ·
  0646C *non enim solum omnis praevaricator* · 0646D *non simpliciter … sed per signa* ·
  0646D *non illis, sed Deo* · 0647B *sed hoc non in Christo* · 0647B *non carni suae solum, sed
  etiam menti* · 0647C *non pro potentia tantum … sed pro dilectione* · 0647D *non ei naturae …
  sed misericordiae* · 0648B *non angelicae, sed humanae naturae* · 0651D *non solum per hoc quod
  Deus … sed per hoc quod homo*. **All ten sit on the correct host; none floated onto its
  adjacent verb.**
- ***deservit* / *deserit*: zero occurrences** in chunks 0000–0004. Grepped, not assumed.

---

## §9 · FOR THE MERGE AGENT

1. This file covers **0000–0004 only**. §1.1's table and §1.3's declines are the deliverable;
   fold them into the merged §1 without renumbering the columns.
2. **0651D is a shared band.** My chunk 0004 ends inside it; the lemmata *Omnis namque pontifex*,
   *Quoniam et ipse*, *Nec quisquam*, *Non seipsum clarificavit* and the Mt 3 / Ps 2 citations at
   0651D–0652B are **not mine** and are not walked here.
3. **One plate read requested: col. 0649D** (§6.1), plus a lower-priority pair at **0644B and
   0646A** for *confessus* (§2.1). Both `[cj:]` sites and all five `[var:]` sites should be gated
   against the plate before the work ships, per the standing rule.
4. Migne's *Offensus*/*Infensus* doublet at 0649B is worth a line on the work page: it is the one
   place in these four chapters where the recension visibly carries two readings of its own.
