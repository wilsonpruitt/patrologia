# Cruces — 11535, chunks 0000–0004 (PL 196, 1229D–1241B)

Richard of St Victor, *De eruditione hominis interioris*, Book I, chapters I–VI.
Opening range: Daniel 2:1–11 quoted in running order, with fragments re-quoted and glossed.

---

## Conventions set here for the whole work (peer agents follow these)

**Heads.** `## LIBER PRIMUS.` → `## BOOK ONE.` · `## CAPUT PRIMUM.` → `## CHAPTER ONE.` ·
every numbered head keeps the plate's own numeral (`## CAPUT II.` → `## CHAPTER II.`, never
renumbered, never normalized to a word). The italic summary is translated and stays italic; the
plate's terminal period is kept where it prints one. The three blank lines the plate leaves between
`LIBER PRIMUS.` and `CAPUT PRIMUM.` in 0000 are mirrored 1:1 (Pattern 8a).

**The name.** ***Nabuchodonosor*, not "Nebuchadnezzar", throughout.** Chapter I turns on two
etymologies of the name — *prophetans istiusmodi signum* (1231D) and *sessio in agnitione
angustiae* (1232A, 1233A) — and an English form leaves both glosses explaining nothing, which is
exactly the case the brief's etymology rule and Pattern-7 §2 (*stylus*/*epistylium*) cover. The
corpus is split (4 shipped works print *Nabuchodonosor*, 7 print *Nebuchadnezzar*), so this is a
per-work call and it is **submitted for ratification**. Other names take their received English
(Daniel, Chaldeans, Jerome, Gregory, David, Uriah, Babylon, Syria).

**Vocabulary added to the fixed table** (proposed for the whole work):
*angustia* = **anguish** — the hook the etymology hangs on (*sessio in agnitione angustiae* ·
*quam sine angustia nosse non poterat* · *cum dolore et animi angustia*) ·
*conjectura* = **conjecture**, kept distinct from *interpretatio* = **interpretation** (Migne prints
both in the Daniel lemma and Richard glosses only the second) ·
*publicare* = **to make public**, never "confiscate" (Douay), because Richard's gloss is built on it:
*Quid autem est sapientium domos publicare, et ad communem omnium usum redigere?* ·
*conatus* = **endeavour** · *instantia* = **urgency** · *pudentia* = **modesty** (see crux 28).

---

## Markers fired (7 sites)

### `[var: …]` — Pattern 14, scripture divergence (3)

**1. 1233A · Rom. 13:1 · `[var:]` FIRED**
Printed: *Quae autem a Deo sunt,* teste Apostolo, *ordinata sunt [n: (Rom. XIII)]*.
Vulgate: *quae autem sunt, a Deo ordinatae sunt.*
Migne draws the agent *a Deo* into the relative clause and prints the neuter *ordinata* for the
feminine *ordinatae*. **Material**: the Vulgate says the existing powers are ordained *by God*;
Migne's line says the things that are *from* God are ordered — and that is precisely the load
Richard puts on it, the unjust king's *voluntas inordinata* against his *potestas ordinata*. The
preceding *Non est enim potestas nisi a Deo* is printed roman, unmarked, and agrees with the
Vulgate. Rendered as printed; the received reading is in the marker.

**2. 1234A · Dan. 2:2 · `[var:]` FIRED**
Printed: *Qui cum venissent, statuerunt coram rege.* Vulgate: *steterunt.*
*statuerunt* is transitive and leaves the clause with no object, so the faithful English ("set up
before the king") states something the received text does not.
**Control run:** `statuerunt coram rege` occurs **once** in the whole PL TEI (this file); `steterunt
coram rege` also once. But *statuerunt* itself is a common word — **1,005 occurrences** — so this is
a real word wrongly printed, not broken type: Pattern 12 has nothing to wrap. Pattern 18 is excluded
by its own rule that a divergence inside a quoted scripture belongs to Pattern 14.

**3. 1240A · Luke 17:21 · `[var:]` FIRED**
Printed: *Regnum caelorum,* inquit, *intra vos est [n: (Luc. XVII)]*. Vulgate: *regnum Dei intra
vos est.* Migne's own note cites Luc. XVII, so the substitution is on the plate, not in the
reference. **Material**: Richard is arguing that the interior kingdom is a *kingdom*, and
*caelorum* pulls the verse into the orbit of the Matt. 5:3 beatitude he quotes four lines later —
which prints the other spelling, *coelorum*, in the same chunk (crux 39).

### `[sic: …]` — Pattern 12, carried type (3)

**4. 1229D · *eficiat* for *efficiat* · `[sic: *eficiat*]`**
**Control run:** word-boundary grep of `sources/pl/tei/` returns **1 occurrence in 87M words —
this file, this site** — against 674 files carrying *efficiat*. Not a word; carried untranslated.
⚠ **7a⁗ q1 applies**: it is the only verb of the *si* clause, so the sense stands in plain words
beside the marker — "should effect [sic: *eficiat*]" — on the `which slays [sic: *eccidit*]`
model. Conjecture: *efficiat*, near-certain.

**5. 1234A · *sommia* for *somnia* · `[sic: sommia]`** (inside Dan. 2:2)
**Control run:** *sommia* returns **4 occurrences across 4 different works** in the whole PL TEI
against **863** of *somnia* — 0.5%, which reads as sporadic broken type (n → m), not as an
orthographic convention, so Pattern 9 does not cover it. ⚠ **Marked without asterisks**: it sits
inside an already-italic scripture lemma and nested italics are not expressible (Pattern 10's
closing clause). ⚠ **7a⁗ q1**: the marker takes the clause's object, so "his dreams" stands in plain
words beside it.
**Honest weakening:** 4 occurrences is thinner evidence than a hapax. If a later census reads the
class as Migne's habitual mis-set rather than damage, this marker should come off.

**6. 1238C · *conanimis* for *conaminis* · `[sic: *conanimis*]`**
**Control run:** **hapax — 1 occurrence in 87M words, this file, this site.**
Carried on the *bonorem* precedent: the noun-head is carried untranslated and the conjecture
(*conaminis*, genitive of *conamen*, "effort") stays here rather than in the text. 7a⁗ q1–3 all
pass — the clause keeps its verb (*docere*), carries no negation, and no conjunction is swallowed.

### `[cj: …]` — Pattern 18, real word, faithful English misleads (2)

**7. 1231B · *quam* stranded without its comparative · `[cj: *quam*; read *facilius quam*, "more easily than"]`**
Printed: *contemplativae vitae gratia **quam** activae elabitur, sed multo difficilius reparatur.*
As printed the sentence has a *quam* with nothing to compare — it does not construe at all.
**Richard supplies the missing word himself, twice, within eight lines:** *somnii visionem quam tam
**facile** amisit* (1231B) and *a contemplativa **facilius** decidimus* (1231C).
⚠ **Bar note, flagged for ratification.** Wilson's 2026-08-15 bar admits a wrongly-printed
**negation or correlative**, and a stranded comparative correlative is the second class; the 7561
@0648 precedent (*solum* for *non solum*) establishes that a **dropped** word is glossable, because
the gloss opens on the word Migne *did* print. I have not widened the bar beyond that. If the
ruling is read narrower than I have read it, this is the one marker in my range to withdraw.

**8. 1239A · *volebant* for *nolebant* · `[cj: *volebant*; read *nolebant*, "were unwilling"]`**
Printed: *Ignorantiam suam dissimulabant, et aperte fateri **volebant**, et in hoc tempus
redimebant.* The printed reading contradicts its own sentence twice: they *dissembled* their
ignorance, and they were *buying up the time* — which is what one does precisely in order **not**
to confess. Richard's whole chapter is *quam multis modis animus seipsum decipit*. This is the
11547 @0260D defect (*nolebant* for *volebant*) with the polarity reversed, and the word that went
wrong is the negation itself — squarely inside the ratified bar.

---

## Conjectures DECLINED — named as census candidates

**9. 1233A · *angüstiae* for *angustiae*** — the etymology *sessio in agnitione angustiae* is
printed twice in chunk 0000, and **the second printing carries a diaeresis on the u**.
**Control run:** the string `angü` is a **hapax across the entire PL TEI — one occurrence in 87M
words, this file**, and it is the only umlauted vowel anywhere in 11535.
**Declined a `[sic:]`** on three grounds, and the call is genuinely marginal: (a) the word renders
in place perfectly, so what a reader would meet is our English, not Migne's type — the Pattern 12
operational test; (b) English has no exponent for a diacritic, so a marker would put Latin on the
page for a mark that means nothing in either language; (c) **I cannot check the plate**, and a
stray diaeresis is at least as likely to be a Corpus Corporum OCR artifact as Migne's own type,
which would make it a `data/tei-patches/` question rather than a Pattern 12 one. Both printings
render identically ("a sitting in the acknowledgement of anguish").
⭐ **Named for the census**: a single plate read of col. 1233A settles it either way.

**10. 1232D · *quae, qualia sint, possunt*** — singular relative *quae* (antecedent *rei*) against
plural *qualia sint / possunt*. Number anomaly with no English exponent; declined per the bar
(not a negation or a correlative). Rendered as closely as the printed words allow, with a
parenthetic dash marking the break.

**11. 1233D · *cognitionumque disciplinam*** where the parallel eleven lines above
(*affectionibus … cogitationibus*) leads one to expect ***cogitationum***. A real word in its slot;
declined. Rendered "the discipline of his knowings".

**12. 1236C · *hanc nobis sollicitudinem primo ingenerant*** — indicative among the surrounding
subjunctives (*satagant … studeamus*). Mood anomaly; declined per the bar.

**13. 1239A · *quomodo illud potuissent **quo** majus erat?*** — *quo* for *quod*, breaking the
parallel with *quod minus erat* four words earlier. Case anomaly; declined. Rendered "that whereby
it was the greater".

**14. 1239B · *Ad tertiam autem, **lucem** jam palam profitentur.*** The object should be their
ignorance (cf. *ignorantiam suam magis minuunt quam loquuntur* in the preceding sentence); *lucem*
is a real word in a real slot and yields fluent nonsense. **The strongest of the declined sites**
and the closest to Pattern 18's bar — but it is neither a negation nor a correlative, so it stays
here. Rendered "they now openly profess the light".

**15. 1239D · *secundum malum quod in seipso invenit, alios **adjicit**.*** The antithesis
(*alios omnino non praedicat* … *alios adjicit*) wants ***judicat***. Real word; declined.
Rendered "adds others".

---

## Passages that would not construe — rendered as printed, no marker

**16. 1233C · the dangling *tertium*.** *Primum studium … ut possit dominari affectionibus;
secundum ut possit imperare cogitationibus; **tertium ergo animus spiritalia quaeque … incipit
habere**.* The third member of the series has no predicate of its own and *tertium* is left
hanging. Rendered as printed. ⚠ **Both co-subjects preserved** against the singular verb — *animus*
("the spirit") **and** *anima* ("the soul that is victor over its own vices") — per the brief's
warning that 11550 lost four co-subjects to one.

**17. 1236B · a sentence break the plate does not print.** *Quidquid peragas, illi, non tibi
ascribas **hoc** utique regi illi … dicendum erat.* No stop between *ascribas* and *hoc*. Pattern 8
forbids supplying one; the English runs the two clauses together and reads roughly as the Latin
reads.

---

## Pattern 8 — punctuation carried, not repaired

**18.** Questions printed with a **period** and left that way (no `?` supplied): 1231A *Quid enim
est quod Nabuchodonosor … agnovit.* and *Quid, inquam, … reparatur.* · 1232A *quo, quaeso, in
loco … non possit videri.* · 1238C *Quam multa divinorum judiciorum cognoscimus … penetramus.* and
*O quam difficile humana impudentia … reprimitur.* · 1238D *Quam multa saepe simulamus, quam multa
dissimulamus.* · 1241B *nihil in ea nisi rectum sonare videtur ubi dicitur.*

**19. 1236C** — *O infinita hominis stultitia, [1236C] et recte quidem dicis … sine gratia?*
Migne prints a **comma** after the exclamation and a `?` at the end of the run. Both carried
exactly; **no `!` supplied**, though English wants one there.

**20. 1236A** — the chunk's one `!` is Migne's, closing a statement
(*… interioris hominis vitam recte intelligimus gratiam divinam!*). Carried.

**21. 1236A** — *Gratia, Dei,* inquit, apostolus (1 Cor. 15:10): Migne prints a **comma between the
noun and its genitive**. Carried — "By the grace, of God," — per Pattern 8's never-delete clause.
He also drops the Vulgate's *autem*; no `[var:]`, no sense change.

**Question-mark parity across all five chunks: 9/9, 5/5, 19/19, 6/6, 7/7. Exclamation parity 0/0,
0/0, 1/1, 0/0, 0/0. Column anchors identical in order and value; note counts 1/1, 1/1, 4/4, 1/1,
5/5.**

---

## ⭐ The internal disagreements — the same verse printed twice, differently, on one plate

These are the evidence the brief asked for, and none of them earned a marker: each is a
transposition or a spelling, and Pattern 14 fires only on **material** divergence. All four are
named as census candidates, and where possible the English registers the difference so it survives
translation.

**22. 1237A vs 1237D · Dan. 2:6 · WORD ORDER, and it is the Vulgate that adjudicates.**
- 1237A (italic): *praemia, et dona, et honorem multum **a me accipietis***
- 1237D (italic): *praemia et dona, et honorem multum **accipietis a me***
- 1238A (roman re-quote): *praemia, inquit, et dona, et honorem multum **accipietis a me***
- 1238B (roman, broken off): *et praemia, et dona; et honorem multum accipietis.*

The Vulgate reads *accipietis a me*, so **the second, third and fourth printings agree with the
received text and the first does not.** The English registers it: "you shall receive from me
rewards…" at 1237A against "you shall receive rewards … from me" at 1237D. The second printing
also drops the comma after *praemia* that the first has — same site, same class.

**23. 1240A vs 1240B · Dan. 2:10 · SPELLING.** The italic lemma prints *verbum **hujusmodi***; the
roman re-quote eleven lines later prints *verbum **hujuscemodi***, which is the Vulgate's form.
Registered in the English as "such a word" against "a word of this kind".

**24. 1240A vs 1240B · *caelorum* beside *coelorum*.** The Luke 17:21 lemma prints *Regnum
caelorum*; the Matt. 5:3 lemma four lines later prints *regnum coelorum*. Pattern 9 orthography;
both rendered "heaven". (The Luke lemma's *separate* and material defect is crux 3.)

**25. 1232A vs 1233A · *angustiae* beside *angüstiae*** — crux 9 above.

---

## ⭐ Lemma pulls RESISTED — where Migne agrees and my instinct wanted to improve him

**26. 1236A — the most dangerous one in my range, and it is not a defect.**
*… ut in aeternum vivamus, quod tunc quidem fiet, si **nihil nisi bonum, et sine bona intentione**
agamus.* Read at speed the second member says "and [if we act] **without** a good intention", which
reverses Richard's entire chapter, and the reflex is to supply a negative or to gloss a dropped
*nec*. **It needs neither.** *nihil* is shared across both members: *nihil nisi bonum* / *nihil …
sine bona intentione*. Rendered "if we do nothing but what is good, **and nothing** without a good
intention" — the second "nothing" is a grammatical ellipsis supply, **plain text, no brackets**.
No `[cj:]`, no repair, no marker.

**27. Dan. 2:1 (1233B), 2:3 (1234C), 2:4 (1234D), 2:5 (1236D–1237A), 2:6b (1238B), 2:8 (1238C),
2:9 (1238C–D)** — all agree with the Vulgate word for word. Nothing was "improved", nothing
familiar was allowed to arrive ahead of the printed Latin. In particular *Sermo recessit a me* is
rendered "The word has departed from me", not Douay's "The thing is gone out of my mind", because
Richard re-quotes *recesserit a me sermo* and glosses it.

**28. 1234D — the italic boundary in Dan. 2:4.** Migne closes the italics after *in sempiternum
vive.* and prints *Dic somnium servis tuis, et interpretationem ejus indicabimus* **roman**. English
habit wanted one continuous quotation. The boundary is reproduced exactly. Same at 1240B, where
*Beati* enim *pauperes spiritu…* splits the Matthew lemma around Richard's own *enim*: the English
reads "for *Blessed* are *the poor in spirit…*", not one lifted quotation.

**29. Immaterial Daniel divergences, all declined, none marked:**
*arioli* for *harioli* (2:2 — and many Vulgate printings carry the unaspirated form; Pattern 9) ·
*Si **igitur*** for *Si ergo* (2:9) · *Responderunt ergo … et dixerunt* for *Respondentes ergo …
dixerunt* (2:10) · *Rex somnium **servis suis dicat*** for *Rex somnium dicat servis suis*, and
***ejus*** for *illius* (2:7) · *quem tu, **rex**, quaeris* for *quem tu quaeris, rex* (2:11).

**30. Non-Daniel scripture, all resisted:**
Matt. 6:23 (1235D) prints *Quia, si oculus tuus fuerit nequam* for the Vulgate's *Si autem oculus
tuus* — connective substitution only, declined · Matt. 5:3 (1240B) agrees exactly · Ps. 2:6 (1240B)
and Ps. 81:6 (1240D) agree and are simply **truncated** (*super Sion montem sanctum ejus* and
*omnes* dropped), which is quotation practice, not divergence · John 15:5 (1236A) agrees ·
1 Cor. 10:11 (1231D), Phil. 3:20 (1241A) and Luke 18:27 (1240D) are printed **roman, unitalicized
and unnoted**, so they are not set as proof-texts; their trivial divergences (dropped *autem*;
*apud Deum possibilia sunt* transposed) take no marker.

**31. 1238D — *non nihil profecit*** carried as the double negative Migne prints ("profited not
nothing"), not smoothed to "profited somewhat". Pattern 7a, mechanism 3.

---

## Vocabulary tensions — followed the table against my own judgment

**32. 1233D · *humanam virtutem*.** The table fixes *virtus* = **virtue**, and here the sense is
plainly "human strength/power": *quam sit supra humanam virtutem divinis beneficiis respondere*.
Rendered "above human virtue" per the table. **If the table is to admit an exception, this is the
site.** Note the same chunk's 1240C *nihil de propria virtute praesumunt* takes "virtue" naturally.

**33. 1236D · *pudentia* / *impudentia*.** *pudentia* is not classical but is formed regularly from
*pudens* and is attested in medieval Latin — Pattern 9, no marker. The table fixes *impudentia* =
**shamelessness**, so *pudentia* is rendered **modesty**: "A common modesty; a general
shamelessness." **The tension:** Migne's antithesis is a single root negated (*pudentia* /
*impudentia*), and modesty/shamelessness does not preserve it as a pair. "Shamefastness /
shamelessness" would, at the cost of an obscure word. Following the table; flagged.

**34. *mens* / *animus* / *anima* / *spiritus* held visibly distinct throughout** (mind / spirit /
soul / spirit), including where two collide in one clause — 1233C *animus … et vitiorum suorum
victrix anima*, 1234D *mens humana … animus*, 1235A *sensus ejus usque ad animum non ingreditur*.
**Neither of the two flagged *animus*/*spiritus* collision sentences (0005, 0034) falls in my
range**; the only *spiritus* here is Dan. 2:1's *conterritus est spiritus ejus* and Matt. 5:3's
*pauperes spiritu*, and neither has an *animus* in the same sentence.

**35. Pattern 17 throughout.** *thou* wherever the Latin is singular (*ut vides* 1231A · *tibi
videtur* 1232B–C · *quidquid disponas … peragas* 1236B · *dicis … gloriaris* 1236C · *te … tibi
ostendimus* 1234C, 1235B · *sermonem tuum, rex* 1239A) and *you* wherever it is plural
(*Sine me nihil potestis facere* · *dii estis* · *peribitis vos … domus vestrae* · *intra vos est* ·
*narraveritis … accipietis*). ⚠ **The Daniel dialogue switches inside single sentences** — the
Chaldeans address the king as *tu* while he addresses them as *vos* — and every switch is
preserved: "Tell the dream to **thy** servants" (1234D) against "Unless **you** declare to me the
dream … **your** houses" (1236D).

---

## Ratios and em-dashes

Word ratios EN:LA — 0000 1.60 · 0001 1.62 · 0002 1.50 · 0003 1.49 · 0004 1.44. The two high
chunks are driven by Richard's *quanto … tanto* / *ejusmodi … istiusmodi* correlatives, which
English can only unpack ("by how much the lower, by so much is it always found worse than itself"),
not by padding. Three em-dashes in five chunks, each carrying a break the plate's own syntax makes:
1232D's number mismatch, 1233C's dangling *tertium*, 1235A's *Syriace* parenthesis.
