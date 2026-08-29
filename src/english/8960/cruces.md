# *Glossa ordinaria*, **Liber Judith** (PL 113, 0731D–0740B) — cruces

Translated 2026-08-18, one translator, 3 chunks (2,959 Latin words), on Opus.
`verify-english.mjs` clean: columns, notes and sections aligned, no duplicate paragraphs.

**Apparatus: 9 `[var:]` · 7 `[sic:]` · 3 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
35 `[n:]`** (9 / 9 / 17, exact parity with the Latin twins).
Structure: PROLOGUS + PRAEFATIO + CAPUT PRIMUM → CAPUT XVI, eighteen `## ` heads,
1:1 with the Latin.
**Guillemets: 91 `«` / 89 `»`, 1:1 with the Latin. Two quotations are UNCLOSED in
Migne and one closing mark is ORPHANED (no opener); all three stay as printed** (§3).
**Italics: 6 spans in chunk 0 (four `*usque ad*` + the two italic lemmata of CAPUT IV),
1 in chunk 1, 0 in chunk 2 — 1:1.**
**Question marks: ZERO in the Latin, zero in the English.** Column anchors: 12 / 9 / 9,
verbatim and in order.

Tobit (8970) §1 governs this book unchanged and was **not re-opened**: guillemet lemmata
are Englished inside marks that are the plate's; `*usque ad*` → `*as far as*` with **no
verb ever supplied**; notes and column anchors sit inside guillemet spans where Migne
puts them; sigla keep his internal spacing. What Tobit did **not** cover is in §7.

---

## §1 · PLATE STATUS — READ, AND A CHECKED ZERO

**Foot-of-page apparatus for cols 0731–0740: a CHECKED ZERO.** Read by the orchestrator
during this session, not by the translator, and merged here. Method: archive.org
`patrologiaecurs04migngoog` (on disk at `raw/scans/pl113/`), **PDF page = (column + 11) / 2**,
verified against the running head (p. 372 = cols 733/734, head `GLOSSA ORDINARIA. — LIB.
JUDITH.`). Pages **371, 372, 373, 374 and 375** read at full page width across the whole foot.
**No foot rule, no numbered notes — the columns simply end.**

⚑ **Both of this work's boundaries fall MID-PAGE and both were read there** — p. 371, where
Tobit ends and `LIBER JUDITH.` begins below the rule, and p. 375, where Judith ends and
`LIBER ESTHER.` begins below the rule. That is the case that lost three notes on PL 202.

Tier 3, coverage `full`, `notes_recovered: 0`. **Third sampling of PL 113**, so the volume's
"no conjecture apparatus" finding now rests on fourteen pages across three books.
**Consequence for this file: the three `[cj:]` below are MINE, not conjectures Migne had
already answered.**

Corroborations supplied from the plate (not a substitute for the collation below, and each
was independently checked against the twin): cols 733/734 confirm *« et vermis eorum non
morietur, et ignis non exstinguetur. »* and VERS. 12 *« Tunc ad Oziam congregati. »*;
cols 737/738 confirm *« Confidit in ea cor viri sui, et spoliis non indigebit »* and VERS. 14
*« Porro autem. »*; cols 739/740 confirm CAPUT XVI's VERS. 15 *« Juvenibus. » Quia tunc neque
nubent neque nubentur*, **the doubled *neque … neque* standing**, and the closing VERS. 21
*« In carnes eorum.* running into the column where Esther begins.

---

## §2 · THE DIGITIZATION'S OWN DEFECTS — logged, not silently repaired

### 2.1 ⚠ The column anchors jump 0731D → 0732D. Reproduced as given; NOT renumbered.

Chunk 0's anchor sequence is `[0731D] [0732D] [0733A] …`. **Columns 0732A, 0732B and 0732C
carry no anchor in our TEI**, although the running text passes straight through them. This
is either Migne's own setting or (far more likely) a loss in Corpus Corporum's transform.
**Nothing was supplied and nothing renumbered** — hard rule 1, and the brief's "Migne's own
printing is not yours to tidy". Flagged for the tei-patch queue rather than fixed here,
because supplying an anchor invents a citation address (`migne.app/pl/113/732a`) that
nothing on the plate warrants. ⚑ **This is the one thing in the work I most want a plate
reader to settle**, because it is an address, not a word.

### 2.2 `## CAPUT VII` prints with NO closing period — in the body AND the frontmatter

Every other head in the book carries one (`CAPUT PRIMUM.`, `CAPUT II.` … `CAPUT XVI.`).
Both the `heads:` field and the `## ` line lack it, so the two sides agree and there is no
internal evidence of loss. **The English head therefore reads `## CHAPTER VII` without a
period**, and the frontmatter is copied verbatim as always.

⚠ **This is the same shape as Tobit's `CAPUT XIV`**, where the plate turned out to print the
period and our TEI had dropped it. I could not read the plate myself and **declined to
assume the same answer**: importing Tobit's finding into this book is exactly the
"a rendering found in another BOOK is a hint, never an authority" failure. **One glance at
p. 373 closes it**; if the plate prints `CAPUT VII.`, this becomes a two-entry tei-patch
(head + frontmatter) and the English head takes the period.

### 2.3 `VERS. 19.--Et ecce, » etc.` at 0738A — a missing space AND a missing opener

Chunk 2 prints `VERS. 19.--Et ecce, » etc.` where every other address in the work prints
`VERS. n.-- « …`. Two defects at once: **no space after the `--`**, and **no opening
guillemet** for a span that is duly closed. Reproduced exactly, `VERS. 19.--And behold, »
etc.` — the orphan `»` is why the counts are 91/89 rather than 91/90 (§3). Same class as
Ruth's `VERS.9` missing-space patch.

---

## §3 · UNCLOSED AND ORPHANED GUILLEMETS — Migne's, and they stay

Pattern 5's corollary. **Three sites, and they are why the marks do not balance.**

| col | what the plate does | the English does the same |
|---|---|---|
| 0733B | `« Tunc Holofernes. [n: (RAB., in lib. Judith, tom. III.)]` opens and never closes; the gloss and its whole `*usque ad*` run on inside it | unclosed |
| 0737C | `« Sobrii estote et vigilate [n: (I Petr. V)].` opens and never closes; the next `VERS. 13.--` address begins inside it | unclosed |
| 0740A | `« Centum quinque, etc.` opens and never closes | unclosed |
| 0738A | `VERS. 19.--Et ecce, » etc.` — a closing mark with **no opener at all** | orphan `»` kept |

⚑ **The 0733B case is the one a span-extractor gets wrong**, and it did: the lemma-list file
supplied for this work carries 86 spans against 91 opens, and *Tunc Holofernes.* is one of
the five it could not see. The lemma is *Tunc Holofernes.* (Jdt 2:7); everything after the
siglum is gloss. Same for *Centum quinque, etc.* (Jdt 16:28) at 0740A and for the
*Ascendam in coelum* quotation at 0733A–B, both of which are in §4 below **although the
supplied list does not name them.**

⚠ **The 0737C site is the worst-behaved**, because the unclosed `«` runs across a `VERS.`
address, and the same verse (1 Pet 5:8) is quoted **again** eleven lines later at 0738A —
that second time properly closed. Both are rendered; neither was balanced against the other.

---

## §4 · THE LEMMA LIST — ALL 91 SPANS, CHECKED AGAINST THE VULGATE

**Every guillemet and italic span in the work, with what the check found, including the ones
that agree exactly.** Judith's Latin is as unstable as Tobit's and this is where the value
is. Divergences are grouped first; the clean ones are named, not summarized.

### 4a · THE DIVERGENCES — nine `[var:]` fired

| col | Migne prints | Vulgate | why it took a marker |
|---|---|---|---|
| **0733A–B** | *Ascendam in coelum, et ponam sedem meam in Aquilonem, et similis milis ero Altissimo* (Isa. 14) | *In caelum conscendam, super astra Dei exaltabo solium meum… sedebo in monte testamenti, in lateribus aquilonis… similis ero Altissimo* | Migne compresses four boasts into two and turns *in lateribus aquilonis* (in the SIDES of the north, a place) into *in Aquilonem* (INTO the north, a direction). The gloss adduces it for the devil's arrogated *imperium totius orbis*, so the directionality is load-bearing. **`[sic: *milis*]` sits beside it** — see §5.1. |
| **0733D** | *Qui vult esse amicus hujus saeculi, inimicus Dei constituitur* (Jas 4:4) | *quicumque ergo voluerit amicus esse saeculi hujus, inimicus Dei constituitur* | present indicative *vult* for the future perfect *voluerit*: the Vulgate's "whosoever shall have wished" becomes a standing description, which is what the gloss needs (*Potentes saeculi et voluptatum amatores*). Marked. |
| **0737C** | *Meus cibus est ut faciam voluntatem ejus qui misit me **Patris*** (Joan. IV) | John 4:34 has no *Patris*, and continues *ut perficiam opus ejus* | **a word added to the Lord's own saying.** The gloss is arguing that the Church is fed by obedience, and *Patris* supplies the Father as the sender — theologically weighty, and not in the verse. The strongest divergence in the book. |
| **0737D** | *Qui habet aures audiendi audiat, quid Spiritus dicat ecclesiis* (Apoc. I) | Apoc. 2:7 *Qui habet aurem, audiat quid Spiritus dicat ecclesiis* | a **composite**: the Apocalypse's formula with the Synoptic *aures audiendi* (Matt 11:15) welded onto it. Singular ear → plural ears. Marked; the citation is separately wrong (§4d). |
| **0738A** | *Dabo vobis potestatem calcandi super serpentes… et super omnes virtutes inimici* (Luc. X) | Luke 10:19 *Ecce dedi vobis potestatem calcandi supra serpentes… et super **omnem virtutem** inimici* | **future for perfect** — *Dabo*, "I will give", for *dedi*, "I have given" — plus singular → plural on the enemy's power. The tense is the whole point of the verse and Migne reverses it. |
| **0738A** | *Timeo ne sicut serpens seduxit Evam astutia sua, ita et sensus **nostri** corrumpantur* (II Cor. II) | 2 Cor 11:3 *…ita corrumpantur sensus **vestri*** | **first person for second.** Paul's warning to the Corinthians becomes the glossator's fear for himself and his hearers. A one-word person shift, and it is the kind Ruth gave up four of. |
| **0738A** | *…et induite vos **arma** Dei* (Ephes. VI) | Eph 6:11 *Induite vos **armaturam** Dei* | *armatura* (the whole panoply) → *arma* (weapons). The gloss is about being armed against the enemy, so the sense survives, but the noun is Paul's chosen word and it is gone. |
| **0738C** | *Non est enim prudentia, non est sapientia nec consilium contra **Deum*** | Prov 21:30 *Non est sapientia, non est prudentia, non est consilium contra **Dominum*** | prudentia/sapientia transposed, the third *non est* reduced to *nec*, and **Dominum → Deum**. Three negatives printed, three carried. ⚑ **This span carries NO citation of its own** — it is the only unattributed scripture quotation in the work. |
| **0738C** | *Non fugiet velox et non salvabitur fortis* (Hier. XLVI) | Jer 46:6 *Non fugiat velox, nec salvari se putet fortis* | **jussive subjunctive → future indicative**, twice: a prohibition ("let not the swift flee") becomes a prediction ("the swift shall not flee"). Both negatives on their own verbs in both texts; the mood is what moves. |

### 4b · DIVERGENCES FOUND, MARKER DECLINED — with the reason, because a blind reader will look

- **0733A · *« Omnes uno animo contradixerunt, etc. »*** — Jdt 1:12 has ***Sed** omnes*. A
  dropped opening connective inside an *usque ad* resumption. No marker.
- **0733D and 0740A · *vermis eorum non morietur, et ignis non exstinguetur*** (Isa 66:24).
  The Vulgate has *et ignis **eorum** non extinguetur*. **Migne drops the second possessive at
  both sites, identically** — so it is his text, not a slip, and the assertion is unchanged.
  No marker at either. ⚑ Recorded because the consistency across two columns is the evidence.
- **0734A · *Instauras testes contra me*** (Job 10:17). The Vulgate has *Instauras testes
  **tuos** contra me*. **The English therefore reads "Thou renewest witnesses against me",
  not "thy witnesses"** — deliberately. This is the 7a″ trap in its purest form: the familiar
  possessive arrives before the printed Latin is read. No marker, because dropping *tuos*
  does not change what Job asserts; logged so the absent possessive is visibly a decision.
- **0734B · *« Porro filii Israel descendentes de Bethulia venerunt. »*** — Jdt 6:10 reads
  *de Bethulia **descendentes***. Word order only. No marker.
- **0734D · *« Erant tamen non longe a muris fontes. »*** — I believe the Vulgate has *autem*
  where Migne prints *tamen*, but I have **no Vulgate text on disk** and would not fire a
  `[var:]` from memory on a connective. **Declined on a half-check**, exactly as Tobit
  declined *Exsurgens*. ⚑ **The blind reader also declined it, explicitly**, as a stylistic
  inference it would not stand behind. **Not a live defect either way** — the English renders the
  printed *tamen* as "Yet", which is the right treatment of whatever Migne prints. **Recorded as
  OPEN, for whoever has a Vulgate.**
- **0735A · *« Domine, Domine, cor autem eorum longe est a me »*** (Matth. VII, XV). A
  **deliberate composite**, and the note says so by printing both chapters: *Domine, Domine*
  is Matt 7:21, *cor autem eorum longe est a me* is Matt 15:8, quoted **exactly**. Not a
  divergence at all — the citation is doing its job. ⚑ Note the speaker shifts mid-quotation
  (the carnal men speak, then Christ); rendered as printed, nothing harmonized.
- **0735C · *« Ecce nunc benedicite Domino. »*** (Ps 133:1). The Vulgate has ***Dominum***,
  accusative. **A case change with no English exponent** — "bless ye the Lord" renders both —
  so this falls under Pattern 9's reasoning for gender mismatches: there is no emendation to
  make in English and a `[var:]` would announce a difference the reader cannot see. Declined
  and logged. ⚠ It is a real difference on the Latin side and a Latin-column reader will meet it.
- **0735C · *« Ubi venit fides, jam non sumus sub paedagogo… »*** (Gal. III). Migne drops the
  Vulgate's opening *At* and elides *quae est* from *fidem, quae est in Christo Jesu*. Neither
  changes the assertion. No marker.
- **0735C · *« Mortificati estis legi per corpus Christi **Jesu**… »*** (Rom. VII). Rom 7:4
  reads *per corpus Christi* and opens *et vos*. An added *Jesu*; no marker.
- **0735D · *« Caput enim Christi Deus »*** (cited II Cor. II). 1 Cor 11:3 has *caput **autem**
  Christi Deus*. A connective adapted to the new sentence frame — the citing author's, not a
  textual variant, and Tobit set that precedent at 0727A. No marker. **The citation itself is
  wrong** (§4d).
- **0737D · *« Impius cum in profundum peccatorum venerit, contemnit »*** (Prov. XVIII). Prov
  18:3 has *cum in profundum **venerit peccatorum***. Word order inside a genitive. No marker.
- **0738B · *« Venient ad te curvi filii eorum qui te humiliaverunt… »*** (Isa. LX). Isa 60:14
  has *qui **humiliaverunt te*** and opens *Et venient*. Word order and a dropped opening
  connective; everything else word for word. No marker.
- **0740B · *« Flevimus, dum recordaremur Sion »*** (Psal. CXXXVI). Ps 136:1 has ***cum**
  recordaremur*. *dum* for *cum* with the same sense. No marker.

### 4c · CHECKED AND AGREEING — named, not summarized

**Judith lemmata, chunk 0:** `Arphaxat.` (1:1) · `Quam appellavit.` (1:2) · `In gloria.` ·
`In campo magno.` (1:6) · `Tunc exaltatum est.` · `Et misit ad omnes.` (1:11) ·
`Tunc indignatus Nabuchodonosor.` (1:12) · `Tunc Holofernes.` (2:7, **the unclosed span the
extractor missed**) · `Cumque pertransisset.` (2:12) · `Praedavitque omnes.` ·
`Descendit in campos.` (2:17) · `Tunc mise unt,` (3:1 — **type defect, §5.2, not a variant**) ·
*Memores estote.* (4:13, **italic**) · `Tunc Achior dux,` (5:5) · `Et fecit ei coenam magnam.`
(6:19) · `Tunc ad Oziam congregati.` (7:12, plate-confirmed) · `Et hos quinque dies,` (7:23).

**Non-Judith scripture inside chunk 0's glosses** — read word by word, since this is where
the reach for a familiar English happens: `Haec omnia tibi dabo, si cadens adoraveris me`
(Matt 4:9 — **exact, word for word**) · `Hi in curribus et hi in equis` (Ps 19:8, **unguilleted
in the plate and left unquoted in the English**) · *Instauras testes contra me,* (Job 10:17,
§4b, **italic**).

**Judith lemmata, chunk 1:** `Et factum est cum,` (8:1) · `Filia Merari.` (8:1) ·
`Et vir ejus fuit Manasses,` (8:2) · `Cui vir suus reliquerat divitias multas.` (8:7) ·
`Non est iste sermo.` (8:12) · `Et dixerunt.` (8:28) · `Et dixit illis Judith.` (8:30) ·
`Quibus abscedentibus.` (9:1) · `Domine Deus.` (9:2) · `Respice castra.` (9:9) ·
`Abstulit a se cilicium, et exuit se vestimentis viduitatis suae,` (10:2) ·
`Ut incomparabili decore.` (10:4) · `Et panes et caseum.` (10:5) · `Dixeruntque,` ·
`Et dixit illi Judith: Sume verba,` (11:4) · `Missa sum.` (11:17) · `Et accepit.` (12:19).

**Non-Judith scripture inside chunk 1's glosses:** `Facis teipsum Deum` (John 10:33 —
**exact**) · `Quia Filium Dei se fecit` (John 19:7 — **exact**) · `Astitit regina a dextris
tuis in vestitu deaurato, circumdata varietate` (Ps 44:10 — **exact, word for word**) ·
`Fili Dei, fili Dei, sicut scis, et sicut vis, miserere mei` (**not scripture at all** — the
gloss says *quidam patrum in oratione sua dixisse legitur*; see §4d on its note) ·
`Cum oraveris, intra in cubiculum tuum` (Matt 6:6, **unguilleted**, and *tu autem* dropped).

**Judith lemmata, chunk 2:** `In lecto.` (13:4) · `Caput Holofernis.` (13:11) ·
`Custodibus murorum.` (13:13) · `Aperite portas.` (13:13) · `Illa autem ascendens.` (13:16) ·
`Et interfecit.` (13:18) · `Et ecce,` (13:19, **the orphan-`»` span, §2.3**) ·
`Quia hodie nomen tuum,` (13:25) · `Videns autem Achior.` (13:29) · `Tunc ingressus.` (14:13) ·
`Videntes itaque,` (15:3) · `Omnis itaque.` · `Per dies autem.` (15:13) · `Porro autem.`
(15:14, plate-confirmed) · `Juvenibus.` (15:15, plate-confirmed) · `Horruerunt.` (16:12) ·
`Adonai Domine.` (16:16) · `In carnes eorum.` (16:21, plate-confirmed) · `Et factum est.`
(16:22) · `Centum quinque, etc.` (16:28, **the unclosed span the extractor missed**) ·
`Abram suam.` (16:28) · `Luxitque illam omnis populus diebus septem.` (16:30).

**Non-Judith scripture inside chunk 2's glosses:** `Sobrii estote et vigilate` (1 Pet 5:8 —
**exact**, twice) · `Super muros tuos Jerusalem constitui custodes` (Isa 62:6 — **exact**;
the citation is wrong, §4d) · `Beatus qui causam suam loquitur in aure audientis` (Eccli. 25 —
**declined, §6**) · `Nemo ascendit in coelum nisi qui descendit de coelo` (John 3:13 — **exact**,
truncated before *Filius hominis*) · `Ipsa conteret caput, etc.` (Gen 3:15 — **exact**, and the
feminine *ipsa* is the Vulgate's own reading, not Migne's; the citation is wrong, §4d) ·
`Confidit in ea cor viri sui, et spoliis non indigebit` (Prov 31:11 — **exact**,
plate-confirmed) · `Ecce isti de longe venient, et ecce illi ab Aquilone et mari` (Isa 49:12 —
**exact**; the capital *Aquilone* for the Vulgate's lower case is orthography, Pattern 9) ·
`Vermis eorum non morietur, et ignis non exstinguetur` (Isa 66:24, §4b) ·
`Flevimus, dum recordaremur Sion` (Ps 136:1, §4b).

⛔ **`« Abram suam. »` at 0740A is a conformation trap and was checked twice.** *Abram* is the
accusative of ***Abra***, Judith's maidservant (Jdt 16:28, *Abram suam liberam dimisit*) — **not
Abram/Abraham**, whom this book never mentions. Rendered « Her Abra. », and the gloss's *Abram
carnalium conversationem* likewise. A translator reading fast turns this into the patriarch and
the whole paragraph with it.

### 4d · SIX CITATIONS ARE WRONG AS PRINTED — reported, NOT corrected

Runbook false positive 2 and the brief's rule: an `ID., ibid.` chain resolves against the
**printed** sequence, so a corrected locator misdirects every note that follows. This book runs
`(RAB., ubi supra. )` twice, `(RAB., ibid.)`, `(ID., ibid.)` and `(Ibid. XIX)`. **Nothing was
corrected.**

- **0734A · `(Cap. XII)`** on *Instauras testes contra me* — Job **X**:17, not XII.
- **0735D · `(II Cor. II)`** on *Caput enim Christi Deus* — **I** Cor. **XI**:3.
- **0737D · `(Apoc. I)`** on *Qui habet aures audiendi* — Apoc. **II** (the formula recurs
  through II–III); Apoc. I has no such clause.
- **0737D · `(Isa. LXI)`** on *Super muros tuos Jerusalem constitui custodes* — Isa. **LXII**:6.
- **0738A · `(Gen. II)`** on *Ipsa conteret caput* — Gen. **III**:15.
- **0738A · `(II Cor. II)`** on *Timeo ne sicut serpens* — II Cor. **XI**:3.

⭐ **A seventh is NOT an error and is the most interesting note in the book: `(Matth. VI)` at
0736A is MISPLACED, not wrong.** It is attached to *Fili Dei, fili Dei… miserere mei*, which is
not scripture at all. But the very next sentence is *Regnum tantum Dei quaerere debemus, et omnia
adjicientur* — **Matt 6:33**. So Migne's reference is correct for a clause it stands two lines
above. **Left exactly where he sets it.** Correcting *or* moving it would destroy the evidence
that the note travelled.

⚑ `(Ibid. XIX)` at 0735D **is right**: *Ibid.* resolves to John (from the preceding `(Joan. X)`),
and John 19:7 is the verse. The one *Ibid.* in the work is sound, which is precisely why the six
wrong locators around it must not be touched.

---

## §5 · THE BOOK'S OWN CRUCES

### 5.1 ⭐ 0733B · *et similis milis ero Altissimo* — a catchword doubled across the column break

> *…et ponam sedem meam in Aquilonem, et similis* **[0733B] milis** *ero Altissimo.*

The word *similis* is broken by the column break and its second half is **re-set at the head of
the next column**: `simi-lis` / `-milis`. The plate therefore prints an intrusive `milis` that is
not a word and has no slot. Carried under Pattern 10 as a whole run and marked:

`and I will be like [0733B] [sic: *milis*] the Most High.`

**7a⁗ and test 1 both run explicitly.** With the marker stripped the clause reads *"and I will be
like the Most High"* — complete: verb (*will be*), predicate (*like the Most High*), no negation
or conjunction swallowed, **and the object/complement present**, which is the fourth question
Tobit's 0728C failure proves 7a⁗ does not ask. **The rendering is beside the marker, not inside
it.** The anchor stands between the two fragments exactly as Migne sets it.

⚠ **Why `[sic:]` and not `[d:]`.** Pattern 11 is for a run set twice; here only a **syllable** is
repeated, and *milis* is not a copy of any neighbouring word — it is half of *similis*. Pattern
11a's test ("mark the intrusive copy") has no purchase on a fragment that is not a copy. Logged
because the two markers are genuinely close here and a later agent will meet the same shape.

### 5.2 Five split-type runs — `[sic:]` marked **and** rendered

Pattern 10 carries the whole broken run; 7a⁗ requires the sense to be said in plain words beside
it. **All five do both**, and test 1 was run on each by deleting the bracket and reading aloud.

| col | printed | conjecture | the English beside the marker |
|---|---|---|---|
| 0731D | *subju averit* | *subjugaverit* | "and **subdued** him to his own empire" |
| 0733C | *mise unt* | *miserunt* | "« Then **they sent** [sic], » etc." |
| 0733D | *solli itudo* | *sollicitudo* | "the **care** of this world" |
| 0734A | *qui ibet* | *quilibet* | "**anyone** given over to idolatry" |
| 0734B | *corre ti* | *correcti* | "being **corrected** they are saved" |

Each conjecture is near-certain from the immediate context: *subjugaverit* is the verb the
*imperio* requires; *miserunt* is Jdt 3:1 word for word; *sollicitudo… divitiarum suffocat verbum*
is Matt 13:22 verbatim; *quilibet… deditus* is the only reading that agrees with *deditus*;
*correcti… salvantur* is answered by *Achior… consociatus populo Dei* in the same sentence.

### 5.3 0733D · *fallaci divitiarum* — a REAL word with no slot. `[sic:]`, and the boundary is close.

Migne prints *In his enim solli itudo hujus saeculi, et **fallaci** divitiarum suffocat verbum*.
Matt 13:22 reads *sollicitudo saeculi istius et **fallacia** divitiarum suffocat verbum*.

*fallaci* is a real form — dative or ablative singular of *fallax* — and Pattern 12's closing
paragraph says a **real word that is merely wrong** takes no `[sic:]`. **I marked it anyway, and
here is the reasoning, because it is a genuinely near call.** The test I applied is Pattern 12's
test 1, the one Tobit used on *astutius* at 0729A: the form has **no grammatical slot**. It cannot
govern *divitiarum*, it agrees with nothing in the clause, and it stands as the second of two
coordinated subjects of *suffocat* — a position only a nominative can hold. A dative/ablative
adjective floating as a subject is not "a real word that is wrong"; it is a word with a letter
missing. **Marked AND rendered**: "the **deceitfulness** [sic: *fallaci*] of riches".

⚠ **The reading I rejected**, recorded because it construes if you squint: taking *fallaci* as an
ablative of means with *suffocat* ("chokes the word by the deceit of riches") — rejected because
*et* has then nothing to coordinate and *sollicitudo* is left as the sole subject of a verb the
Gospel gives two.

### 5.4 ⭐ 0738D · *ad malitiam Domini veniunt* — the faithful English asserts something false. `[cj:]` FIRED.

> *Ad praedicationem verbi Dei ex singulis gentibus et provinciis probatae personae et viribus
> accinctae **ad malitiam Domini** veniunt.*

Rendered literally: **"persons approved and girded with strength come unto the MALICE of the
Lord."** The Lord has no malice, the sentence is praising the preachers, and the whole paragraph
is a military figure — *viribus accinctae*, "girded with strength", and the preceding gloss on
Gedeon's trumpets, *pugnant praedicationis voce*. **The printed English asserts something the
author did not**, which is Pattern 18's bar exactly, and 18a's clarification that the test is
falsity and not merely a better word available.

The conjecture is ***militiam*** — one letter — giving "unto the **warfare** of the Lord", the
standard phrase, and the one the girding and the fighting both demand. Marked additively so both
readings stand:

`unto the malice [cj: *malitiam*; read *militiam*, "unto the warfare"] of the Lord`

⚠ **This is the site I most want a blind reader to open**, and I fired rather than declined
because Tobit's *notionum* taught the cost of the other choice: a declined marker leaves a reader
meeting "the malice of the Lord" with **nothing at all** telling him the page is broken, which is
worse than either available answer.

### 5.5 0735A · *corporale vitium solatium* — `[cj:]` FIRED, and the marker does not swallow the word

> *…qui **corporale vitium solatium** auditoribus indiscrete promittit…*

*corporale* and *solatium* agree (neuter singular); *vitium* stands between them agreeing with
neither and governed by nothing. **And the same paragraph answers it four lines later**: *si enim
praesentis **vitae** negatur **solatium**, subditos deserunt* — the identical noun pair, with
*vitae* where this clause has *vitium*. So the conjecture is *vitae*, "the bodily solace **of
life**", and the intruded *vitium* is a compositor reading a familiar word for an unfamiliar one.

⭐ **CONFIRMED at the blind read on exactly this evidence, and it is decisive: the conjectured
phrase *corporale vitae solatium* is reproduced VERBATIM four lines later in the same paragraph.**
The conjecture does not have to be imagined — Migne prints it himself, a few words on.

Rendered so that **both** the printed word and the conjecture are on the page:

`promises his hearers a bodily vice [cj: *vitium*; read *vitae*, "the bodily solace of life"] for a solace`

⚑ **Test 1 run:** strip the bracket and the clause reads "promises his hearers a bodily vice for a
solace" — odd, which is the point, but complete, with **both** its objects present. The failure
mode Tobit measured (the marker standing *instead of* a content word) does not occur here because
*vitium* is rendered as "a bodily vice" and *solatium* as "for a solace" in separate breath.

### 5.6 ⛔ 0735B · *quindecim generatione progenita* — `[cj:]` FIRED, then **OVERTURNED at the blind read**. The rival I named was right.

*quindecim* is indeclinable and cannot agree with an ablative singular *generatione*; the phrase
does not construe. The gloss's own arithmetic settles the intent: *per hebdoadem legis et ogdoadem
evangelii* — **seven plus eight is fifteen**, and Jdt 8:1 gives Judith fifteen forebears.

**The marker now in the text:**
`brought forth by fifteen generation [cj: *quindecim*; read *quindecima*, "in the fifteenth generation"]`

**What I filed first, and why it was wrong.** My first marker glossed the *other* word —
`[cj: *generatione*; read *generationibus*, "by fifteen generations"]` — reading the phrase as
descent **through** a count of generations. I called it the weakest of the three markers and named
*quindecima* as the rival. **The rival is the reading.** Three arguments converge on it and none
of them is mine:

- **Palaeography.** `QUINDECIMA GENERATIONE → QUINDECIM GENERATIONE` is textbook **haplography of
  the final -A** before *GENERATIONE*. It explains the printed ablative singular exactly, **and it
  leaves the printed word untouched.** My version required emending the word that is *not* corrupt
  while preserving the one that is — which is the diagnostic that a conjecture is aimed wrong.
- **Idiom.** *progenitus* + ordinal + ablative of time is the standard phrase. *quindecim
  generationibus progenita* would want *post quindecim generationes*.
- **Sense.** Seven plus eight is **the fifteenth**, not fifteen separate things; the gradual psalms
  the gloss reaches for immediately after are fifteen in number and the topos is **the fifteenth
  step**. My own cited evidence pointed at the reading I did not take.

⭐ **The lesson, and it is not "I was unsure and should have declined."** I identified the correct
conjecture, wrote it into the file by name, ranked my own marker weakest — and still fired the
other one. **Naming a rival in the cruces is not the same as adjudicating between them**, and the
apparatus records only what the marker says. Where a crux names two conjectures, the file must say
which one the marker took and *why the other lost*, in those words; anything softer is an
undecided site wearing a decision's clothes.

⚑ **Body English is unchanged and stays literal on the printed text** — "brought forth by fifteen
generation" — per Pattern 18's additive rule. Only the bracket moved.

### 5.7 THE UNEXPRESSED SUBJECT — every supplied pronoun, and what decided it

This book runs Judith = the Church, Holofernes and Nabuchodonosor = the devil, Achior = the
heretics, and the referent moves between the literal figure and the allegory **mid-sentence**.
**Six sites needed a decision. Five took a bracketed supply rather than a bare pronoun**, on
Ruth's 0538C lesson that a bare "she" binds silently to the nearest noun rather than to the right
one.

**(i) 0733C · *resistentes occidit in ore gladii*.** Rendered **"he [the devil] slays them that
resist with the edge of the sword."** The lemma is *Praedavitque omnes* — **Holofernes** plundering
— but the **immediately preceding paragraph** names its subject outright: *ex quibus **diabolus**
vindicat sibi aliquam partem, nec pugnae formidat difficultatem*. The whole run from 0733A
(*Cum **diabolus** perditorum multitudinem…*) has the devil as its grammatical subject and never
changes it. The literal Holofernes is present only as the figure being read. **Devil, supplied.**

**(ii) 0734A · *Per exempla sanctorum corroborat*.** Rendered **"By the examples of the saints
[Eliachim] strengthens them."** The lemma is *Memores estote* — Jdt 4:12, where **Eliachim the high
priest** writes to all Israel and says exactly those words. So the subject is the speaker of the
lemma, which is the brief's own rule that the antecedent is very often in the verse the lemma
comes from rather than in the sentence.
⚠ **The rival reading, recorded**: *corroborat* of **Scripture** or of the sacred writer, which
would make the supply wrong but the sense nearly identical. I supplied the named person because
the verse names one; a reader who prefers the impersonal has the argument here.

**(iii) 0737A · *Sub dominatione saecularium principum libere manere permiserunt*.** Rendered
**"Under the dominion of secular princes they permitted [the Church] to remain free."**

The substance was right first time and the **bracketing was backwards**; repaired at the blind
read. The verb is plural and the sentence prints **neither subject nor object**. The two clauses
that follow supply the subject and are the whole evidence: Trajan tempering his edict, Hadrian
writing to the proconsul of Asia — **emperors**, granting toleration; and *saecularium principum*
in this very sentence names the class.

⚠ **What was wrong with my first version — "[the rulers of this world] permitted them to remain
free."** Two faults, and they compound:
- **The bracket restated *saecularium principum*, four words earlier in the same sentence**, so the
  page read as though two different bodies were in play — the secular princes, and some further
  "rulers of this world" acting under them.
- **"them" was the genuinely supplied word and it carried no bracket at all.** The nearest plural
  noun in the English was "secular princes", so a reader parses *the rulers permitted the princes
  to remain free* — the permitters and the permitted collapsed into one.

**The rule this yields: bracket what the Latin does not print, and only that.** A subject
recoverable from the sentence's own words is carried over with a bare pronoun; the object, which
is nowhere on the page, is the thing that needs the bracket. Here that is **[the Church]** — she
is what remains free under pagan dominion, and she is the subject of the entire surrounding gloss.

**(iv) 0737B · *Non inquinatur cibis gentilium aut superstitione*.** Rendered **"[Judith] is not
defiled by the foods of the Gentiles or by superstition."** The lemma is *Et accepit* (Jdt 12:19,
Judith eating in Holofernes' tent), so the literal figure is the subject; **the very next sentence
then switches to the allegory and names it** — *Ecclesia enim inter gentes habitans, idololatria
non polluitur*. Supplying "the Church" in the first sentence would erase the switch Migne makes.
**Judith in the first, Church in the second, as printed.**

**(v) 0737D · *Recordationem confecti belli sollicite jubet memorari*.** Rendered **"[Judith]
carefully bids the remembrance of the finished war be called to mind."** The lemma is *Caput
Holofernis* (Jdt 13:11), where Judith shows the head over the wall and speaks. No other candidate
in the sentence is singular and animate.

**(vi) ⭐ 0740A · *Abram… perducit*.** Rendered **"[The Church], by leading and by exhorting, brings
Abra, the manner of life of carnal men, which is always subject to fear, through into the liberty
of grace."**

⚑ **This is the book's worst exposure and it took the longest.** *Abram* is **accusative** — the
object, not the subject — and so is *carnalium conversationem*, in apposition to it. The verb
*perducit* is third singular with **no expressed subject at all**. The candidates:

- **The Church.** The lemma is Jdt 16:28, *Abram suam liberam dimisit* — **Judith freeing her
  maid** — and this work has stated the equation twice in so many words: *Hanc conventionem
  **nostra Judith, id est Ecclesia**, respuit* (0735B) and *Judith, **id est Ecclesia**, commendat
  praesbyteris portam* (0736B). Judith frees Abra; the Church brings carnal life into the liberty
  of grace. The abstract nouns *ducendo et exhortando* are the Church's own offices throughout
  this book (*doctores Ecclesiae*, *magistri Ecclesiae*, *praedicationis obsequium*).
- **Abra herself as subject**, i.e. reading *Abram* as a nominative slip. **Rejected**: *suam* in
  the lemma and the apposition with *conversationem* (unambiguously accusative) both fix the case,
  and the clause already has an object without it.

**Church, supplied in brackets.** The final clause *ut non timore, sed amore serviat* is left with
its own singular subject unsupplied, because there it is **Abra / the carnal manner of life** — the
thing brought into liberty — and that referent is two words away rather than absent.

⛔ **A flagged passage is not a checked passage**, so: this one is decided, not offered. If a blind
reader disagrees, the disagreement is with "the Church", not with an undecided site.

### 5.8 The one two-sided call I could NOT close

**0735B · *subditos deserunt, ut cedentes persecutionibus, corporale devitent supplicium*.**
Rendered **"they forsake their subjects, that, yielding to persecutions, they may avoid bodily
punishment."**

**Who yields and who escapes?** Two readings, both construe:
- **The teachers** (subject continuity with *deserunt*, which is the reading in the text): the
  sluggish teachers abandon their flock so as to escape persecution themselves. This suits the
  paragraph, which is an indictment of *doctor iners*.
- **The subjects** (*subditos*, the nearest accusative): the teachers abandon them so that they,
  the flock, may yield and escape torment — a bleaker but coherent reading.

I took subject continuity and left the English's "they" ambiguous **in exactly the way the Latin
is ambiguous**, rather than forcing a bracketed supply onto a site where the plate genuinely does
not decide. ⚠ **This is the one place in the work where I have left a pronoun unresolved on
purpose**, and it is named here so it does not read as an oversight.

⚑ **A number shift runs through the same paragraph and is preserved**: *doctor iners expetit* —
**singular** — then *subditos deserunt* — **plural**. Migne makes the shift; smoothing it would
erase it.

### 5.9 Sentences left broken, and punctuation the plate prints

- **0733A · *unde sequitur.*** A paragraph ending "whence follows." with a full stop and nothing
  following. **Reproduced; nothing supplied.** (Compare 0735A, *unde sequitur:* — with a colon,
  and something does follow. Migne distinguishes them and so does the English.)
- **0735C · *Et vir Manasses, Christus Ecclesiae sponsus.*** No verb. Rendered verbless: "And the
  husband Manasses, Christ the spouse of the Church."
- **0735C · *cui Judith conjugio copulata quasi decalogo legis… obnoxia*.** No verb. Rendered with
  the copula ellipsis English cannot avoid; ellipsis of *est* is ordinary Latin, not a defect.
- **0738B · *et sequaces suos errorem relinquere et fide liberi sese sociare hortantur*.** ***sese
  sociare* has no dative** — one joins oneself *to* something, and the something is not printed.
  The sense wants *Ecclesiae* from the clause before. **`[cj:]` DECLINED**, on Tobit 0730C's
  reasoning: the marker's form requires a printed WORD to gloss, and what is missing here is a
  complement, not a wrong word — there is nothing to put in the italics. Rendered as printed:
  "to join themselves", with no object supplied.
- **0738D · *sed contra spiritualia nequitiae in coelestibus, etc,*** — Migne closes the
  abbreviation with a **comma**, not a period. Reproduced as `etc,`.
- **0733D · Migne's comma inside *mortis periculum et voluptatis, detrimentum evadere possint*.**
  The comma falls between *voluptatis* and the noun it depends on. English has no exponent for a
  comma inside a genitive phrase, so the construction the Latin bears is rendered — "the peril of
  death and the loss of pleasure" — and the comma count of the clause is unchanged. Tobit's
  *Nolite, pueri* reasoning (its §5.10), applied.
- **0739B · *ubicunque bis ponitur, Dominus: primum nomen…*** — a colon after a bare quoted word.
  Kept where he sets it.
- **0735D · *cum mitteret apostolos suos… : venit aestus persecutionis*** — a colon between a
  *cum*-clause and its main verb. Kept.

### 5.10 Candidates considered and DECLINED — with reasons

- **0732D · *per vastum tumoris et elationis agitur*.** *fastum* ("pride") is one letter from
  *vastum* and would suit *tumoris et elationis* well. **Declined**: *vastum* as a noun ("waste,
  vast expanse") construes as printed, "through the vastness of swelling and of elation" asserts
  nothing false, and 18a's bar is falsity, not improvement.
- **0736C · *Simonis*** in *Bene in oratione actum **Simonis** commemorat*. Jdt 9:2 names
  ***Simeon***, and the deed described (with Levi, avenging their sister on strangers, Gen 34) is
  Simeon's. **Rendered "Simon" as printed, no marker** — *Simon/Simeon* is one Greek name in two
  Latin spellings, both attested, which is Pattern 9 territory. ⚑ Logged because a translator
  "fixing" it to Simeon would be conforming the plate to the verse, which is the 7a″ mechanism.
- **0736C · *purae ascensionis incensum*.** *orationis* would give "the incense of pure prayer",
  which is what Ps 140:2 and the Matt 6:6 quotation in the same sentence would license.
  **Declined**: *ascensio* is the word this book has just built on (*ad coelestem gratiam
  ascensura*, *futurae ad coelos ascensionis figurativus*, 0735B–C), so the printed reading is the
  one the argument has prepared.
- **0737A · *Munitium Fundanum*.** The proconsul is *Minucius Fundanus*. **Rendered as printed**,
  no marker: a proper name misspelt is not a word with no slot, and Pattern 12's boundary puts a
  real-but-wrong form under Pattern 7. Same treatment as *Carmin* for Charmi at 0734C.
- **0734C · *Carmin*.** Jdt 6:11 has *Charmi*. Rendered "Carmin" as printed. See above.
- **0740A · *Centum quinque*** with the gloss *centenarius numerus a laeva transit in dextram*.
  The gloss counts only the hundred and drops the five. **Not a defect** — the finger-reckoning
  figure (a hundred passes from the left hand to the right) is about the hundred. No marker.

### 5.11 Negation — 43 particles, every one carried, every one on its own word

Test 2 run as the brief specifies: for each printed negative I named the single Latin word it
attaches to, then found that word in the English and checked the negative was on it. **None was
dropped, none was added, and none was relocated.**

⚑ **Two sites are the 2 Thessalonians shape exactly and are the ones to check first:**

- **0734D · *non solum divinam, sed et humanam Christianis interdicunt philosophiam*.** The *non*
  attaches to ***solum***, not to *interdicunt*. **Julian and the pagan princes DO forbid; what
  they do not do is stop at divine philosophy.** Rendered "forbid Christians **not only** divine
  but also human philosophy" — the verb affirmative, the negative on "only". Pressing that *non*
  into the verb, which is what 8987 @0624B did with *velint*, would have produced smoother English
  saying the opposite.
- **0740B · *in dolore et gemitu **non** affliguntur ex desperatione, sed futurae vitae
  recordatione*.** The *non* attaches to ***ex desperatione*** through the *non… sed* correlative.
  **The elect ARE afflicted** — that is the sentence's whole claim — but not *out of despair*.
  Rendered "are afflicted in grief and groaning **not out of despair**, but out of the remembrance
  of the life to come." "Are not afflicted… but" would be the relocation, and it reads better.

**Three more where the negative sits on an OBJECT and not on the verb**, and English can easily
move it:

- **0734C · *nec persecutorum rabiem, nec mortem pertimescere docent*** — "teach their catechumens
  **to dread neither** the rage of persecutors nor death." **Not** "do not teach them to dread."
- **0736A · *nec tempus, nec modum praescribere Domino debemus*** — "we ought to prescribe to the
  Lord **neither** the time nor the manner." **Not** "we ought not to prescribe."
- **0738C · *non hastam, non clypeum, sed tubas et lampades tulit*** — "**took not** a spear, not a
  shield, **but** trumpets and lamps." The verb is affirmative for the third member.

The remainder, checked one by one: *nisi forte* (0731D) · *non divinae permissioni* (0733A) ·
*nec pugnae formidat* (0733B) · *fructum non facit* (0733D) · *non morietur* / *non exstinguetur*
(0733D, and again 0740A) · *perfecte non didicerit* (0734A) · *renatus non sit* (0734A) ·
*viam veritatis non teneant* (0734A) · ***omnino non** celant* (0734A — **scope repaired at the blind
read, §9.5**) · *latere non possent* (0734B) ·
*ne… timeatur* (0734B) · *quos flectere… **nequit*** (0733C) · *ne faciant* (0734D) ·
*non longe a muris* (0734D) · *non meretur* (0734C) · *jam non sumus* (0735C) ·
*nec erroribus… dignatur* (0735D) · *non novit* + *non subito fiat* (0737A) ·
*ut **nemini** liceret* + ***sine** criminis objectione* (0737A) · *idololatria non polluitur*
(0737B) · *Non inquinatur* (0737B) · ***Nemo** ascendit… **nisi*** (0737D) · *Timeo **ne***
(0738A) · *non recedet* (0738B) · *Non est… non est… **nec** consilium* (0738C) ·
*Non fugiet… non salvabitur* (0738C) · *non est colluctatio* (0738C) · ***neque** nubent **neque**
nubentur* (0739A, plate-confirmed) · *spoliis non indigebit* (0738D) · *non resistit* (0740A) ·
*ut **non** timore, sed amore serviat* (0740B).

### 5.12 Read clean, and named so

**CAPUT IX (0736C), CAPUT X (0736D–0737A), CAPUT XI (0737B), CAPUT XII (0737B–C), CAPUT XIV
(0738C) and CAPUT XVI's VERS. 16 and VERS. 22 (0739A–0740A)** carry no defect marker of any kind:
lemmata checked, guillemets balanced, negations carried, no supplied subject needed. **Chunk 1's
only apparatus is one `[cj:]` and one `[var:]`; chunk 2's is seven `[var:]` and one `[cj:]` and no
`[sic:]` at all.** All five split-type runs and the doubled catchword are in **chunk 0**, which is
where the plate is worst.

**Verse numbering ascends within every chapter — no out-of-sequence address anywhere in this
book.** Checked, and recorded as checked. CAPUT VII opens at VERS. 7 and CAPUT XVI at VERS. 12;
those are Migne's starting points, not gaps, and nothing was supplied.

### 5.13 ⭐⭐ 0737B · *sed sopor tibi quem ferias praeparavit* — a SUBJUNCTIVE VERB demoted to a noun. Repaired at the blind read.

> *[n: (AUG., serm. 229 de temp.)] Species custodit quae blanditur, etc., usque ad sed sopor tibi
> quem ferias praeparavit.*

**Now reads: "The beauty which allures keeps guard, etc., *as far as* but slumber hath prepared
for thee [him] whom thou mayest strike."**

**What I filed first: "Beauty guards that which flatters, etc., *as far as* but the slumber which
he prepared for thee for holidays."** Both halves were wrong, and they are one clause-pair.

**(a) *ferias* is *ferio*, not *feriae*.** It is the **second person singular present subjunctive**
of *ferio*, "that thou mayest strike" — not the accusative plural of *feriae*, "holidays". The
construction is *sopor* (nominative, subject) *praeparavit tibi [eum] quem ferias*: **slumber has
prepared for thee the man thou art to strike.** That is the point of an Augustine sermon on
Judith 13 — the drunken sleep delivers up the man she is to behead. My version made *quem* the
object of *praeparavit*, invented an unexpressed "he" for a sentence that has a perfectly good
subject in *sopor*, and **left *ferias* doing no grammatical work at all.**

**(b) *quae* is nominative, agreeing with *species*.** "The beauty **which** allures keeps guard" —
Judith's adornment is itself her protection, which is precisely why this excerpt is drawn in here,
two paragraphs after CAPUT X's *ut incomparabili decore videretur* gloss. My "that which flatters"
took *quae* as the object of *custodit* and left the verb with nothing stated to guard.

⚑⚑ **This is the one site in the work where a real defect hid behind SMOOTH-LOOKING ENGLISH, and
that is the whole lesson.** "for thee for holidays" reads as an odd but harmless Latinism — the
sort of thing a reader forgives in a nineteenth-century gloss — so nothing in it *looks* broken.
No automated check can see a subjunctive demoted to a noun: the word count is right, the italics
are right, the marker parity is right, the negation count is right, and the punctuation bands
agree. **Only a parse catches it.**

⚠ **And note what it is NOT.** It is not the `*usque ad*` formula leaving a tail unfinished. **All
the printed words construe**, and nothing is to be supplied beyond the antecedent of *quem*,
which is bracketed. I had the abridgment rule loudly in mind from Tobit §1(b) and it made an
unparsed clause look expected. **The rule "leave *usque ad* tails unfinished" is about supplying
words the plate lacks; it is not a licence to leave a printed clause unparsed.**

---

## §6 · WHAT A BLIND READER SHOULD OPEN FIRST

1. ⭐ **0738D, *ad malitiam Domini* (§5.4)** — the one `[cj:]` I am confident in and the one that
   changes what the page asserts. If *militiam* is wrong, the English currently accuses the Lord
   of malice with a marker beside it; if it is right, this is the book's best find.
2. ⭐ **0740A, the subject of *perducit* (§5.7 vi)** — decided as "the Church", with the reasoning
   laid out. This is the site with the doctrinal weight, and it is the shape of Ruth's 0538C.
3. **0735B, *quindecim generatione* (§5.6)** — the weakest of the three `[cj:]`, with a named
   rival conjecture. I would drop this one first.
4. **0733D, *fallaci* (§5.3)** — a `[sic:]` on a real word, on the "no grammatical slot" test.
   Pattern 12's own closing paragraph pushes the other way and the call is close.
5. **0735B, *subditos deserunt… devitent* (§5.8)** — left deliberately ambiguous. A reader who
   thinks the Latin does decide should say which way.
6. ✅ **0737D, *Beatus qui causam suam loquitur in aure audientis* (Eccl. XXV) — CLOSED, and the
   answer is that the English is right and NO marker belongs there.** The blind reader settled it
   from its own memory of Sirach 25, with no text on disk: **Migne's wording is not the Vulgate's,
   and my English gives Migne's words exactly, with no conformation.** ⛔ **A `[var:]` was
   nonetheless refused, deliberately, and the reasoning is the important part: a `[var:]` is a
   public claim about ANOTHER text, and we cannot check this one. One agent's recollection is not
   a witness.** So the divergence is recorded here as prose and nowhere else: *Migne's wording
   appears to diverge from the Vulgate at this verse; no Vulgate text is on disk in this repo; the
   claim is therefore **UNVERIFIED** and is left for whoever has the text.* That is honest, and it
   is a different act from marking the page.
7. **§2.1, the missing 0732A–C anchors** — an address question, not a translation question, and
   the only item here a plate reader can settle outright.

---

## §7 · WHAT TOBIT'S CONVENTIONS DID **NOT** COVER — for Esther and the remaining OT books

Tobit §1 settled the guillemet lemma, `*usque ad*`, the sigla spacing and Tyconius, and none of
that needed re-deciding. **Five things came up here that it does not answer**, recorded because
Esther (8948) and the rest of the guillemet books inherit from this file too.

### 7.1 ⭐ *usque ad* is NOT always the abridgment formula — and the italics tell you which

Tobit met seventeen of them and every one was Migne's abridgment marker, set in italics. **This
book prints the phrase twice in ordinary running prose, unitalicized, meaning simply "as far as"
or "until"**, and it is not a formula at all:

- **0735A · *Sunt enim in sagena Domini et boni et mali pisces, **usque ad** littus futuri
  judicii*** — "even to the shore of the judgement to come."
- **0735D · *jejunio, et orationi operam dat, **usque ad** consummationem saeculi*** — "even unto
  the consummation of the age."

Both take a plain accusative object and complete their own sentences. **The four formulaic ones in
this work are all italic in the plate and all follow *etc.,*** — that pair of cues is the test.
⛔ **Italicizing these two, or rendering them as `*as far as*`, would invent an abridgment Migne
did not make and would leave two complete sentences looking broken.** A later agent working from
Tobit's §1(b) alone would very plausibly do it.

### 7.2 A lemma may be ITALIC in a guillemet book — CAPUT IV prints both markers, on one page

Every lemma in this work is guilleted **except the two in CAPUT IV at 0734A**: *Memores estote.*
and *Instauras testes contra me,* are set in **italics**, like Ruth's and the PL 114 epistles'.
The chapter has one gloss and it uses the other convention throughout. **Reproduced as printed —
italic lemmata in italics, guillemet lemmata in guillemets, in the same file.** The books are not
cleanly divided into "italic books" and "guillemet books"; the *page* decides.

### 7.3 A guillemet span may be CLOSED WITHOUT BEING OPENED

Tobit had four unclosed opens. **This book has two unclosed opens and, at 0738A, a closing `»`
with no opener at all** (§2.3). The rule is the same in both directions — reproduce the plate —
but the *consequence* differs: an orphan close makes the running counts go **negative** inside a
band, which will look like a translator's error to any tool that walks the marks in sequence
rather than counting them. **Counting `«` and `»` separately, as this file does, is the check that
survives it.**

### 7.4 A note may be MISPLACED rather than wrong, and the two are treated differently

Tobit's three wrong locators were all wrong *about the passage they sit on*. **0736A here is a
different animal**: `(Matth. VI)` is a **correct** reference sitting two lines above the clause it
belongs to (§4d). It is not a candidate for correction *or* for a "wrong citation" report — moving
it would be as destructive as changing it, and calling it wrong would be false. **Report the
displacement, leave the note.**

### 7.5 An unattributed scripture quotation

`« Non est enim prudentia, non est sapientia nec consilium contra Deum; »` at 0738C is quoted
**with no `[n:]` at all**, unlike every other proof-text in the work. Identified as Prov 21:30 for
the `[var:]` and for the index; **no note was supplied**, because supplying one would put a
citation on the page that Migne does not print. ⚑ Worth knowing for the scripture index: a
divergent quotation can be present with nothing to key it by except its own words.

### 7.6 The `*usque ad*` rule governs what is SUPPLIED, not what is PARSED

⚑ Added from this book's one hidden defect (§5.13). Tobit §1(b) is emphatic that an abridged
sentence is left unfinished and **no verb is ever supplied** to complete it — correct, and it held
for all six formula sites here. **But the rule created a blind spot**: a resumption tail that
looked ungainly read as *expected* ungainliness, so *sed sopor tibi quem ferias praeparavit* was
rendered without ever being parsed, and a subjunctive verb (*ferias*, "thou mayest strike") was
demoted to a noun ("for holidays").

**The distinction to carry into Esther and the rest: the abridgment removes WORDS, it does not
suspend GRAMMAR.** Parse every resumption tail as strictly as ordinary prose; only when the parse
shows a genuine hole does the "supply nothing" rule come into play. **A tail that reads oddly is
not evidence the abridgment made it odd.**

---

## §8 · THE THREE TESTS, RUN ON MY OWN FILES

**Test 1 — strip every marker and read what is left.** Run mechanically on all three chunks: all
seven `[sic:]`, all three `[cj:]` and all nine `[var:]` removed, and the residue read aloud
looking for a stranded article or preposition sitting on punctuation. **All ten defect markers
have their rendering beside them**, itemized in §5.1–5.6. The `[var:]` markers all follow a
completed sentence and take nothing with them. ⚑ The fourth question — *does the clause still have
its OBJECT?* — was asked explicitly at 0733B (*the Most High*), 0735A (*a bodily vice… for a
solace*) and 0733D (*the care… the deceitfulness… the word*), which is where Tobit's four failures
would have landed.

**Test 2 — name the word each negative attaches to.** §5.11. **43 particles, all carried, all on
their own word.** Two `non… sed` correlatives and three object-negations are named individually
because they are the shapes that relocate.

**Test 3 — punctuation compared BY COLUMN BAND, never by total.** Built over the 30 verified
anchor bands (13 + 10 + 10, including a HEAD band before the first anchor), stripping all
`[x: …]` markers from both sides so the marker colons do not pollute the count. Colons, semicolons,
question marks, `«` and `»` compared band by band. **Result: all 30 bands agree on all five marks.**

⚑ **This test earned its keep.** The first pass found **six bands where I had supplied a semicolon
Migne does not print** — 0733A, 0733D, 0734A, 0734C, 0735A (three of them) and 0736B — every one a
comma or a full stop in the plate that I had "improved" into a semicolon while joining clauses.
**The totals would have hidden none of them here, but the site-by-site fix is only possible band
by band.** All eight are now commas, as printed.

⚠ **The comma→semicolon sweep was NOT invoked**, and the brief's warning is why: this book's plate
prints **14 semicolons of its own** (3 + 4 + 7), so Tobit's narrow zero-semicolon exception does
not apply. What was fixed here is the opposite defect — marks I *supplied* — which Pattern 8
forbids outright and which has nothing to do with the closed rate question.

**Question marks: the Latin prints zero and the English prints zero**, verified per band. ⚑ Two
constructions invited one and were refused: *Quaeritur quo tempore quibusve regibus historia
Judith fuerit* at 0731D and *Notare debet lector, utrum opinio vera sit* at 0739A are both indirect
questions, and **Migne closes neither with a mark**, so Pattern 8b's colon recast does **not**
apply — it is bounded to the case where his own mark falls on an indirect question. Recast without
a mark, as printed.

---

## §9 · THE BLIND POLARITY READ (2026-08-18) — five repairs, one conjecture overturned

A blind reader that **never saw this file** read all three chunks against the Latin. Recorded in
full, wins and losses together, because the shape of what it caught is worth more than the score.

### What held — the classes this book was most exposed to

- ⭐ **No silent scripture conformation anywhere.** Every quoted verse was checked, and the two
  sites the brief warned would go were both named as *correct*: **0734A Job 10:17**, where Migne
  prints *Instauras testes contra me* against the Vulgate's *testes **tuos*** and the English does
  **not** restore the possessive; and **0733D / 0740A Isa 66:24**, where Migne's missing second
  *eorum* is kept at both occurrences. This was Ruth's failure class — four silent repairs — and
  it is clean here.
- ⭐ **All seven `[sic:]` pass the swallow test**, with complete English standing beside each.
  This was Tobit's failure class — four for four — and it is clean here.
- ⭐ **0740B (VERS. 29) called the sharpest negation-relocation test in the work.**
  *non affliguntur ex desperatione, sed…* — the *non* stands **before the verb** and governs
  ***ex desperatione***. The English puts it on the phrase. **Floating it onto *affliguntur* would
  have inverted the sentence and read perfectly well** — which is 8987's *velint* exactly.

### Confirmed, on evidence the file did not cite — do not churn

- **0738D `[cj: *malitiam*; read *militiam*]`** — confirmed. The added evidence: *militia
  Christi / Dei* is the settled phrase, *malitia Domini* is theologically impossible, **a/i
  confusion is among the commonest in Migne's setting**, and the military saturation runs further
  back than I traced (Gedeon's battle and Eph 6's armour in the *preceding* paragraph, not merely
  *viribus accinctae* in this one). Literal body + bracketed conjecture confirmed as the correct
  house treatment.
- **0740A, subject of *perducit* supplied [The Church]** — confirmed and it holds. Added support:
  the literal verse is Jdt 16:28, where **Judith frees her maid**, so the agent is the mistress.
  **Christ was the rival worth weighing** and rejecting him was right: *ut… serviat* has *Abra* for
  its subject and the manumission is Judith's act.
- **0735A `[cj: *vitium*; read *vitae*]`** — confirmed, on the internal parallel now written into
  §5.5: *corporale vitae solatium* is reproduced **verbatim** four lines later.
- Also confirmed and **not to be re-raised**: the anchor jumps (§2.1); the three unpaired
  guillemets (§3); `## CAPUT VII` without its period (§2.2); the six wrong or displaced locators
  (§4d); and **both plain-prose *usque ad* instances correctly distinguished** from the six
  formula ones (§7.1).

### The five repairs, all applied

| # | col | what was wrong | now reads |
|---|---|---|---|
| 1 | **0737B** | *ferias* parsed as *feriae*, "holidays" — a **subjunctive verb demoted to a noun** (§5.13) | "but slumber hath prepared for thee [him] whom thou mayest strike" |
| 2 | **0735B** | the `[cj:]` emended the **uncorrupt** word (§5.6) | `[cj: *quindecim*; read *quindecima*, "in the fifteenth generation"]` |
| 3 | **0737B** | *quae* taken as object, leaving *custodit* with nothing to guard (§5.13) | "The beauty which allures keeps guard" |
| 4 | **0737A** | bracket on a **restated** subject, supplied object left **unbracketed** (§5.7 iii) | "they permitted **[the Church]** to remain free" |
| 5 | **0734B** | *omnino non* scope inverted (below) | "they do not conceal the truth **at all**" |

**Repair 5 in full, because it is a pure English fault with no Latin error behind it.**
*veritatem **omnino non** celant.* I wrote "they conceal not the truth altogether." *omnino non* is
a **fixed intensifier** — "not at all, by no means" — but that English word order reads in modern
usage as the **opposite scope**: *they do not wholly conceal it*, i.e. they conceal it in part. The
context demands the strong reading: beaten in argument, the heretics do not hide the truth **at
all**. ⚑ **Nothing was added or dropped — the negative was present and on the right verb — so test
2 passed it, and so did the band counts.** The defect is scope, and only a reader asking *what does
this English actually say* finds it.

### ⚑ The project gap, recorded as a gap and not as a task

**Two calls in this work were declined for want of a Vulgate text on disk** (§4b 0734D, §6 item 6),
and the orchestrator notes these are now **the third and fourth such decline in two batches.** It is
recorded here as a **project-level gap**, not as work for anyone to route around: a Vulgate on disk
would have closed both in minutes and would have made §4 stronger throughout.

### What the blind read teaches that the three tests do not

**Three of the five repairs were invisible to every check this edition runs**, and they failed in
the same way rather than in three ways:

1. **§5.13 (*ferias*, *quae*)** — a mis-parse that produced *plausible* English. Word count,
   italics, markers, negations and punctuation bands were all correct.
2. **§5.6 (*quindecim*)** — a conjecture aimed at the wrong word, where **I had already written the
   right answer into the file as a rival** and fired anyway.
3. **Repair 5 (*omnino non*)** — correct negation, correct attachment, **inverted scope**.

⭐ **The common thread: every one of them is a question about what the English SAYS, and every test
in §8 is a question about what the English CONTAINS.** Parity, counts, attachment and bands are
containment checks; they cannot see a right word in a wrong scope, a right conjecture on a wrong
lemma, or a right vocabulary in a wrong parse. **A fourth test belongs beside them, and it has no
mechanical form: read each finished paragraph back against the Latin asking only "does this assert
what he asserts", with the counts already known to be clean.**


---

## ⛔ PLATE SWEEP, 2026-08-29 — every `[sic:]` in this work read at Migne's plate

This work's `[sic:]` markers stood on columns nobody had read. All were read this session from the on-disk PL 113 scan at 300 dpi (500 dpi where a single letter decided it), full page width, with the volume's page map re-calibrated against the printed corner numbers **before** the read.

**A `[sic:]` asserts a defect in MIGNE'S TYPE, and our Latin is not the printed page — it is Corpus Corporum's transcription of it.** Where the plate disagrees with our file, the fault is ours and the accusation is withdrawn.

### Withdrawn — Corpus Corporum's error, not Migne's

| col | we printed | THE PLATE PRINTS |
|---|---|---|
| 0731D | *subju averit* | **subjugaverit** |
| 0733B | *milis* | **(delete)** |
| 0733C | *mise unt* | **miserunt** |
| 0733D | *solli itudo* | **sollicitudo** |
| 0733D | *fallaci* | **fallacia** |
| 0734A | *qui ibet* | **quilibet** |
| 0734B | *corre ti* | **correcti** |

The Latin is corrected in `data/tei-patches/8960.json` and each marker is removed from the English.

Full ledger for all 23 works swept: `data/plate-sweep/2026-08-29-sic-sweep.tsv`.
