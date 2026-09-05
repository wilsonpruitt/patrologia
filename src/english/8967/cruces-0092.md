# Cruces — 8967 *Glossa ordinaria*, **Liber Psalmorum**, chunks 0092–0096
### Band C, stint 4 · cols 1050B–1061C · Psalms CXXXI–CXXXVIII · 4,932 Latin words

---

## §0 · SPAN COUNT RECONCILIATION — the brief is CORRECT, and I counted it myself

| chunk | italic spans in my Latin |
|---|---|
| 0092 | 88 |
| 0093 | 55 |
| 0094 | 72 |
| 0095 | 29 |
| 0096 | 85 |
| **total** | **329** |

**Brief total: 329. Mine: 329. They agree exactly.** The ends were checked too: the brief's first
entry for my range is `[1050B] VERS. 1.-- *Canticum graduum.*` and my Latin's first span is
`*Canticum graduum.*`; its last is `[1061C] *Proba me et scito.*` and my last span is
`*Proba me et scito.*` **The split is sound at both ends.**

English span counts equal the Latin's **exactly**, 88 / 55 / 72 / 29 / 85, once the italic inside the
eleven English-only markers is stripped. Anchors 11 / 7 / 10 / 4 / 10, verbatim and in the same order
(checked by list equality, not by count). Notes 32 / 22 / 38 / 11 / 26 in both twins. Question marks
1 / 0 / 4 / 0 / 7, matching. Ratio 1.50 / 1.49 / 1.48 / 1.45 / 1.48.

⚑ **Two span-membership errors were found by this check and repaired before filing**, which is
exactly what it is for: at 1059D I had split Migne's single span
*Spiritus enim Domini replet omnia. Quo a facie tua fugiam?* into two, and at 1060D I had split
*scientia tua ex me, nec poteram ad eam;* into two. A count alone would not have located them; the
per-paragraph comparison did. **`verify-english` sees neither.**

---

## §1 · MARKERS FIRED — eleven, every one on a column I opened today

`plate-gate` reports every one of them ✓ on a `full` read; `verify-english` is clean on all five
chunks (the only failures in the run are the eight chunks other stints have not yet filed).

| col | chunk | marker | why |
|---|---|---|---|
| 1050C | 0092 | `[var: Vulg. Is 66:2 …]` | Migne prints *Super quem requiescet Spiritus meus, nisi super humilem et quietum* where Is 66:2 reads *ad quem autem respiciam, nisi ad pauperculum, et contritum spiritu*. Only the closing *et trementem sermones meos* agrees. See §5a. |
| 1050D | 0092 | **`[sic: *Sumnum*]`** | Ps 131:4 *somnum*. **Read at 900 dpi: Migne sets `Sumnum` and our twin carries it.** See §2a. |
| 1054B | 0093 | `[var: Vulg. Ps 134:7 *fulgura in pluviam fecit*]` | Migne prints *Fulgura et pluviam*, and **the gloss is built on the `et`**: *Fulgur terrorem, pluvia gaudium facit* treats them as two coordinate gifts, which *in pluviam* would not license. |
| 1055A | 0093 | `[var: Vulg. Ps 134:14 *et in servis suis deprecabitur*]` | Migne prints *consolabitur*, a different verb and a different act, and the gloss expounds it (*cum praemia aeterna restituet*). |
| 1056D | 0094 | `[var: Vulg. Mt 6:26 …]` | Migne prints *quae neque serunt neque congregant* for *quoniam non serunt, neque metunt, neque congregant* — a lost clause and a changed conjunction. |
| 1059B | 0096 | **`[sic: *egestare*]`** | *egestate confectus* is wanted; **the plate prints `egestare` and so does our twin.** See §2a. |
| 1059C | 0096 | `[var: Vulg. Ps 138:4 *quia non est sermo in lingua mea*]` | Migne prints *dolus* for *sermo* — guile for speech, a different claim, and the lemma the gloss then glosses. |
| 1059D | 0096 | `[var: Vulg. Wisd. 1:7 *Spiritus Domini replevit orbem terrarum*]` | Migne prints *Spiritus enim Domini replet omnia*; the proof-text is adduced precisely for *omnia*, which the Clementine's *orbem terrarum* narrows. |
| 1060C | 0096 | `[var: Vulg. Ps 138:11 *et nox illuminatio mea in deliciis meis*]` | Migne prints *nox facta est illuminatio* — the possessive is gone and a passive is added; the gloss's own preceding words are *nox mihi facta est illuminatio*. |
| 1060D | 0096 | `[var: Vulg. Ps 138:14 *anima mea cognoscit nimis*]` | Migne prints the future *cognoscet*, **and the gloss immediately contradicts it** with *Jam cognoscit anima mea valde*. The marker is what makes that visible. |
| 1061C | 0096 | `[var: Vulg. Mt 7:23 …; the opening words are those of Mt 25:12]` | Migne prints *Amen dico vobis, non novi vos, discedite a me* — Mt 25:12's opening welded to Mt 7:23's close, and *non novi* matches neither (*nescio* / *numquam novi*). The marker does two jobs and says so. |

**Every marker sits on the word it accuses** — checked one by one against §F8's misplaced-`[sic:]`
finding, by reading the English clause with the marker deleted.

⛔ **7a⁗ was applied to both `[sic:]`.** `[sic: *Sumnum*]` follows the rendered lemma (*Sleep*
[sic: *Sumnum*]), so the clause keeps its noun; `[sic: *egestare*]` follows "worn out with want", so
the clause keeps its participle and its sense. **Neither marker swallows a verb, a negative or a
conjunction.**

---

## §2 · ⛔ WHY THERE ARE ONLY TWO `[sic:]` — and it is NOT a claim that Migne is clean

**Migne is defective at fourteen further sites in these twelve columns, and not one of them is
fireable**, because a `[sic:]` may wrap only type our twin carries and Corpus Corporum has already
repaired every one. This is §F2's lesson recurring for the third band running, so I state the number
rather than letting the marker table imply a clean plate.

| col | plate prints | our twin | marker unlocked by the patch |
|---|---|---|---|
| 1052C | `cxaltaxit` | `exaltavit` | `[sic: *exaltaxit*]` |
| 1053B | `iu latitudine` | `in` | `[sic: *iu*]` |
| 1055C | `totius orbi` | `orbis` | `[cj: *orbi*; read *orbis*]` |
| 1058C | `ubi dici quomodo` | `dicit` | `[cj: *dici*; read *dicit*]` |
| 1058D | `poena, noc tantum culpa` | `non` | `[sic: *noc*]` |
| 1059A | `In finem psalmus Ddvid.` | `David` | `[sic: *Ddvid*]` |
| 1059B | `Semitam meum,` | `meam` | **none owed** (concord, no English exponent) |
| 1059C | `justificaui` | `justificati` | class undecided — see below |
| 1059C | `pecatum` | `peccatum` | `[sic: *pecatum*]` |
| 1059C | `incomprehensibllis` | `incomprehensibilis` | `[sic: *incomprehensibllis*]` |
| 1059D | `Quo ibo spiritu tuo?` | `a spiritu` | class undecided — see below |
| 1059D | `fungiendum` | `fugiendum` | `[sic: *fungiendum*]` |
| 1060A | `in est efficaciam` | `id est` | `[cj: *in*; read *id*]` |
| 1060B | `Et dixit forsitan` ×2 | `Et dixi,` | class undecided — see below |

**So the honest marker count for my range is `[var:] 9 · [sic:] 2` before the patch pass and
`[var:] 9 · [sic:] 7 · [cj:] 3` after it, plus up to three more.** ⛔ Do not quote the first pair as
a fact about this Psalter.

⚑ **Six of these carry an English obligation, and I have itemised each one, site by site, in
`data/briefs/8967-PENDING-TEI-PATCHES.md`** rather than trusting the merge to notice — the §F8
defect number 4. Two of them are **7a⁗ sites where the negative must be written outside the marker**
(1058D `noc` for *non*, 1059D `fungiendum` for *fugiendum*); one (1058C `dici`) requires the English
clause to be rebuilt, because "where he tells how" is our repair of a broken verb; one (1060B
`dixit`) flips the person of a lemma against the gloss's own next word.

### 2a. The two that DID fire, and why they could

Both are sites where **the plate and our twin agree on the defective type**, which is the whole
difference between them and the fourteen above.

- **`Sumnum` @1050D.** Read at 900 dpi: `S-u-m-n-u-m`, italic, in the VERS. 4 lemma. Ps 131:4 is
  *Si dedero somnum oculis meis*, and the gloss five lines below prints `somnus venit ad oculos`
  correctly **twice** in the B band of col 1051 — **the same-clause control, on the facing column of
  the same opening.** Our twin carries `Sumnum`. Fired.
- **`egestare` @1059B.** *dixerat egestare confectus* wants the ablative *egestate*; `egestare` is a
  non-word. Read at 900 dpi, unambiguous, and our twin carries it. Fired.

---

## §3 · THE PLATE READS I DID — twelve columns, seven pages, all recorded

`data/plate-reads.json` held **nothing at all** for cols 1051–1061 when I began; page 530 had been
read by the 0087–0091 stint and I re-read it for cols 1050B–D. **I opened every column in my range**,
corner numbers first, at 400 dpi in three vertical slices per column, with 900 dpi crops on every
disputed glyph.

| page | cols | corner read | margin | depth |
|---|---|---|---|---|
| 530 | 1049 / **1050** | 1049, 1050 | **clean** | full (re-read for 1050B–D) |
| 531 | **1051 / 1052** | 1051, 1052 | **clean** | full |
| 532 | **1053 / 1054** | 1053, 1054 | **clean** | full |
| 533 | **1055 / 1056** | 1055, 1056 | **clean** | full |
| 534 | **1057 / 1058** | 1057, 1058 | **clean** | full |
| 535 | **1059 / 1060** | 1059, 1060 | **clean** | full |
| 536 | **1061 / 1062** | 1061, 1062 | **clean** | full |

⭐ **All twelve of my columns are CLEAN at the inner margin** — verified by cropping each page from
x = 280 px at 400 dpi (≈ 8 % in) and confirming white margin to the left of every line-opening
character. **No marker in my range rests in a clipped margin, and nothing is owed to Gallica.**
The known-clipped list (841, 849, 893, 897, 1041, 1045) gains nothing from this run; 1053, 1057 and
1061 are all ≡ 1 (mod 4) and all three are clean, which is a fourteenth, fifteenth and sixteenth
counter-example to the withdrawn congruence rule.

⚑ **Page 536 also covers col 1062**, which is not mine; reading it incidentally licensed two markers
in the 0097–0101 stint's chunk 0097, and `plate-gate` now shows them ✓. Its `[sic: *quae dam*]` at
**1063D** is still unread and is the only gate failure in the work.

⚑ **No foot-of-page conjecture apparatus, in either layer, on any of the seven pages.** Full page
width was rendered each time, not a bottom strip.

### 3a. ⭐ The tituli at the plate — the Band C rulings hold, and two are newly evidenced

- **`Canticum graduum` is ITALIC at every one of the five tituli in my range** (1050B, 1052D, 1053A,
  and the two inside the glosses), and the numbered series continues unbroken in Migne's own voice:
  **`In tredecimo gradu` (1050B) · `Quartus decimus gradus` (1052D) · `Quintus decimus gradus`
  (1053B)**, picking up exactly where the 0087–0091 stint's `Duodecimus gradus` @1049D left off.
  **Any rendering of `gradus` but "degree" breaks a series the gloss is counting out loud.** 5
  `Canticum graduum` + 4 `gradus`/`gradu` in my Latin; all rendered "degree(s)".
  ⚑ At **Ps CXXXII (1052D)** Migne prints `Canticum graduum` where the Clementine titulus reads
  *Canticum graduum **David***. **The stump is rendered as printed** — the 1045B `Canticum.`
  precedent, and no completion from the Vulgate.
- ⭐ **`Psalmus David` and `Psalmus ipsi David` both stand in my range, four columns apart, and I
  read both**: `Psalmus David.` at the Ps CXXXVI titulus (1056D) and `Psalmus ipsi David.` at the
  Ps CXXXVII titulus (1058A). **Migne sets both forms**, as 1010A already showed; they are rendered
  "*A psalm of David*" and "*A psalm to David himself*" and are not levelled.
- ⭐ **`In finem` occurs twice in my range and both are at the plate** — the Ps CXXXVIII titulus
  `In finem psalmus Ddvid.` (1059A) and its re-quotation. Rendered **"Unto the end"**, per §A1.1.
  This is the first `In finem` in Band C; the gradual psalms carried `Canticum graduum` in that slot.

---

## §4 · CC-vs-PLATE DEPARTURES — 31 over 12 columns (2.6/col), all filed as patches, none marked

Full itemisation in `data/briefs/8967-PENDING-TEI-PATCHES.md` under **`BAND C — stint 0092–0096`**,
with the column written in the file's own convention. **2.6 per column is above the ~1.5 budget and
above the 1.8 the previous stint measured.** All three directions occur, and the two that matter
most for the reader are these:

- ⭐⭐ **1056B `facit` → `fecit`.** Migne prints the **present**: *quae in Aegypto facit et gente
  Judaeorum sub figura nostri* — what God **does** in Egypt, as a figure of us now. CC's perfect
  turns a live typology into past history, and **no Vulgate collation could ever see it**, because
  the words are the gloss's own.
- ⭐⭐ **1059A `principes` → `princeps`.** Migne prints the **plural**: *in quo principes mundi
  peccatum non invenit*. CC's singular makes it the devil; the plural makes it the rulers who killed
  him, which is what *quare occideret* requires. A number change with no orthographic cover.

Two more are worth naming because they are the *reverse* direction — **a non-word in OUR file that
Migne does not print**:
- **1057C `Ideumaei`** (ours) against **`Idumaei`** (the plate). This is the `Aventus` @1046C case
  exactly, and I had it written down as a `[sic:]` candidate before I opened the leaf.
- **1059B `occurit`** (ours, one `r`) against **`occurrit`** (the plate). Same class, same stint.
- **1051B** our TEI's unmatched `(CASS.` against the plate's closed, one-`s` **`(CAS.)`** — the third
  sighting of CC editing a parenthesis, after 0936D and 1050A.

⛔ **And the strongest Class-4 site in the work so far: at 1055B Migne prints `VERS. —` with NO VERSE
NUMBER.** Our TEI supplies `VERS. 18.--`. The supplement is *correct* (Ps 134:18 is the verse) and
completely silent. Pattern 9 governs, so no marker is owed and the English keeps the address; but a
reader collating our Latin against the plate would find nothing to tell him the number is ours.

---

## §5 · THE DIVERGENCE LIST — every scripture quotation in the range, the clean ones included

### 5a. Divergent, marker FIRED (9) — listed in §1, with the reason each is material.
The Is 66:2 site deserves its own line: Migne's *Super quem requiescet Spiritus meus* imports the
verb and the subject of **Is 11:2** (*requiescet super eum spiritus Domini*) into the frame of
Is 66:2, and the gloss then argues from *requiescet* — the resting — which the Clementine's
*respiciam* does not contain at all.

### 5b. Divergent, marker DECLINED, with the reason
- **`Sicut juravit et votum vovit.` @1050C** (Ps 131:2 *sicut juravit Domino ; votum vovit Deo
  Jacob*). Declined: Migne splices two clauses with `et` and drops both datives — an abridgment of
  the kind the whole recension is made of, not a divergent text. **Rendered as the splice stands.**
- **`Cornu David, paravi lucernam Christo.` @1052C** (Ps 131:17 *Illuc producam cornu David; paravi
  lucernam christo meo*). Declined: same class — a lemma cut at both ends.
- **`Usque in saeculum saeculi,` @1052B** — Migne quotes Ps 131:12's *usque in saeculum* with
  131:14's *in saeculum saeculi*. Declined: the gloss is recapitulating two verses it has already
  quoted separately, and says so (*et hoc*).
- **`Canticum graduum` @1052D** for Ps 132:1's *Canticum graduum David*. Declined: a titulus stump.
- **`Omnia in sapientia fecisti, Deus.` @1055D** (Ps 103:24, without the vocative). Declined: an
  added vocative with no work to do in the argument.
- **`Multiplicabo semen tuum sicut stellas coeli et sicut arenam maris.` @1061A.** Declined, and the
  reason is a rule I applied consistently: **the wording is a conflation of two verbatim-attested
  loci** — Gn 22:17 *multiplicabo semen tuum sicut stellas caeli* and Gn 32:12 *sicut arenam maris*
  — so there is no single locus it diverges *from*. Compare the Mt 7:23/25:12 site, which I DID
  mark, because there *non novi vos* matches neither donor verse.
- **`Proba me, Domine.` @1061C** against Ps 138:23 *Proba me, Deus, et scito cor meum*. Declined:
  the printed words are **Ps 25:2 verbatim**, and Migne's second lemma four words later restores the
  Ps 138 form (*Proba me et scito*). A cross-echo, not a corruption.
- **`Beati qui lugent, vae ridentibus.` @1058D** (Mt 5:5 + Lc 6:25 *Vae vobis, qui ridetis nunc*).
  Declined: a two-clause allusion inside one italic span, abridged by Migne, with no cited locus.
- **`Dum recordaremur,` @1057A** for Ps 136:1's *cum recordaremur*. Declined: a conjunction swap
  with no English exponent and no effect on the gloss.
- **`Sicut tenebrae ejus, ita et lumen,` @1060C** for *ita et lumen **ejus***. Declined: a stump.
- **`nec poteram ad eam;` @1060D** for Ps 138:6's *et non potero ad eam*. ⭐ Declined **deliberately**:
  the gloss has just said *ante erat mira* and goes on *sed modo possum*, so the past tense is the
  gloss's own re-voicing of the verse, not a variant text. This is the site where a `[var:]` would
  have been easiest to fire and most wrong.
- **`Per diem errabunt.` @1061A** and **`Confortata est … invaluit` @1059D** and **`Posuisti …
  Gravasti` @1059C** and **`Et funiculum … limitem` @1059B** — all four are labelled `(Alias)` by
  **Migne's own variant siglum**. No marker; rendered "(Otherwise)".

### 5c. Collated and found to AGREE with the Clementine — the checked negatives
Ps 131: `Memento, Domine, David et omnis` (stump) · `Si introiero in tabernaculum domus meae` ·
`Et palpebris meis dormitationem` · `Et requiem temporibus meis` · `Ecce audivimus` · `eam in
Ephrata` · `in campis sylvae` (*silvae*, orthographic) · `Introibimus` · `Surge` · `Sacerdotes` ·
`Propter David servum` · `Juravit Dominus David` · `Et non frustrabitur` · `De fructu ventris tui` ·
`Si custodierint testamentum` · `Sedebunt super sedem tuam` · `Haec requies mea` · `Viduam` ·
`Panibus` · `Sacerdotes ejus` · `Induam salutari` · `Exsultatione exsultabunt` · `Induam confusione`.
Ps 132: `Ecce quam bonum` · `Habitare in unum` · `Sicut unguentum` · `Barbam` · `Aaron` · `In oram` ·
`Sicut ros` · `Hermon`. Ps 133: `Canticum graduum` · `Ecce` · `servi Domini` · `Statis` ·
`In domo Domini` · `In atriis domus Dei nostri` · `Extollite manus vestras` · `in sancta` ·
`Benedicat te Dominus` · `ex Sion`. Ps 134: `Laudate, servi` · `Laudate Dominum` · `Psallite nomini
ejus` · `Jacob` · `Israel in possessionem` · `Omnia quaecunque` · `Qui producit ventos de thesauris
suis` · `Qui percussit primogenita` · `Ab extremo` · `Ab homine usque ad pecus` · `Reges fortes` ·
`Sehon regem Amorrhaeorum` · `Chanaan` · `Et dedit terram eorum haereditatem` · `Haereditatem
Israel` · `In generationem et generationem` · `Quia judicabit` · `Simulacra` · `Os habent et non
loquentur` · `Similes illis fiant` · `Domus Israel benedicite` · `Domus Aaron benedicite` ·
`Benedictus Dominus`. Ps 135: `Confitemini Domino` · `Confitemini Deo deorum` · `Confitemini Domino
dominorum` · `Qui facit mirabilia` · `Mirabilia magna solus` · `Qui fecit coelos` · `Coelos in
intellectu` · `Terram super aquas` · `super aquas` · `Qui fecit luminaria magna` · `Lunam et stellas
in potestatem noctis` · `Qui percussit Aegyptum` · `Cum primogenitis eorum` · `In manu potenti` ·
`Divisit mare Rubrum in divisiones` · `Et excussit Pharaonem` · `Israel servo suo` · `Dat escam` ·
`Omni carni`. Also `Ego dixi, Dii estis et filii Excelsi` (Ps 81:6) and `in medio autem deos
dijudicat` (Ps 81:1), both exact. Ps 136: `Super flumina` · `In salicibus` · `Quia illic
interrogaverunt nos` · `Verba cantionum` · `Quomodo cantabimus` · `Si oblitus fuero` · `Dextera
mea` · `Adhaereat` · `Lingua mea` · `Memor esto` · `in die` · `Filiorum Edom` · `Filia Babylonis
misera` · `Exinanite` · `Filia` · `Beatus qui tenebit`. Ps 137: `Confitebor tibi, Domine` ·
`In conspectu` · `angelorum` · `Psallam tibi` · `Super misericordia` · `Universae viae Domini
misericordia et veritas` (= **Ps 24:10**, exact, and correctly used to gloss Ps 137:2) · `Super omne
nomen sanctum tuum` · `In anima` · `virtutem` · `Confiteantur tibi, Domine` · `Omnia verba oris
tui` · `audierunt omnia verba` · `Magna est gloria` · `Quoniam excelsus Dominus` · `Humilia
respicit` · `Alta a longe cognoscit` · `Si ambulavero in medio tribulationis` · `Super iram` ·
`Dextera tua` · `Retribuet`. Ps 138: `Domine, probasti me` · `Intellexisti` · `De longe` ·
`Semitam meam` · `Et funiculum` · `Et omnes vias meas` · `Novissima` · `Antiqua` · `Formasti me` ·
`Posuisti` · `Mirabilis` · `Facta est scientia` · `Ex me` · `Confortata est` · `Et non potero` ·
`Quo a facie tua fugiam` · `Si ascendero in coelum, tu illic es` · `Si descendero` · `Ad infernum` ·
`Ades` · `Si sumpsero pennas` · `diluculo` · `Et habitavero in extremis` · `Etenim illuc manus tua` ·
`Conculcaverunt me` · `Non obscurabuntur` · `et nox` · `Sicut dies` · `Quia tenebrae` · `Quia tu
possedisti renes meos` · `Confitebor tibi` · `Non est occultatum os meum a te quod fecisti in
occulto` · `Substantia mea in inferioribus terrae` · `Imperfectum meum viderunt oculi tui, et in
libro tuo omnes` · `Dies formabuntur` · `Adhuc sum tecum` · `Si occideris, Deus, peccatores` ·
`Nonne qui oderunt te, Domine` · `Proba me et scito`. Plus `Surgam et ibo ad patrem meum` (Lc 15:18,
exact) and `Quasi tristes, semper autem gaudentes` (2 Cor 6:10, exact) and `mors ultra non
dominabitur` (Rom 6:9, exact) and `Erat illis cor unum, et anima una` (Act 4:32, exact but for the
supplied `illis`, which is Migne's own resumption of *Multitudinis autem credentium*).

### 5d. The verse numbering was checked, not assumed
Every `VERS. n.--` in my range was resolved against the Clementine's own versification for the psalm
named in the head. **All agree; no psalm number in my range needs converting, and none was.** Migne
skips verses he does not gloss (Ps CXXXI runs 12 → 14; Ps CXXXIV runs 4 → 6 → 7 → 8 → 10 → 11;
Ps CXXXV runs 7 → 9 → 10 → 12 → 13 → 15 → 21; Ps CXXXVII runs 5 → 7 → 8; Ps CXXXVIII runs 1 → 3 and
16 → 18 → 19 → 21) — **that is non-glossing, not misnumbering.** ⚑ The one genuine anomaly is at
1055B, where Migne prints **no verse number at all** (§4); the number in our Latin is CC's.

---

## §6 · THE CANDIDATES I REJECTED — the instrument, not the leftovers

**Twenty-three defect candidates were raised; fourteen survived as unlockable (§2), two fired, and
seven were withdrawn at the leaf.** Every one below read as a confident finding before the plate
was opened at 900 dpi.

1. ⛔ **`Ideumaei` @1057C — the most important rejection in the stint.** A non-word in our TEI,
   sitting in a proper name, with `Idumaei` obvious. I had it written down as `[sic: *Ideumaei*]`.
   **The plate prints `Idumaei`.** CC manufactured it. Firing would have been a false public
   accusation against Migne at a word he set correctly.
2. ⛔ **`occurit` @1059B** — one `r` in our TEI, in *ut filio minori redeunti occurit pater*. **The
   plate prints `occurrit`.** Ours. Declined and patched.
3. ⛔ **The unmatched `(` at 1051B.** Our TEI reads `(CASS. Secunda pars` with no closing bracket
   anywhere in the sentence — a textbook "Migne lost a bracket". **The plate closes it, and prints
   the siglum with one `s`: `(CAS.)`.** CC's, twice over.
4. ⛔ **`uterigat` @1059C.** The plate looks fused (`ut erigat` set as one run), which under Pattern
   10 would be a `[sic:]` swallowing a whole verb. **Declined**: the neighbouring words on the same
   line carry the same narrow inter-word space, so this is the leaf's setting, not a fusion. The
   9004 @0897C rule cuts both ways and here the leaf does not support the claim.
5. ⛔ **`cxaltaxit` @1052C — a split decision, and the split is the point.** The initial glyph is an
   open `c` against a clean crossed `e` in `etc.,` one line above, so the crossbar has not inked —
   **ink damage, this copy's condition, not restorable.** But the seventh glyph is an unmistakable
   `x` where *exaltavit* wants `v`, and **a crossing stroke cannot be produced by ink failing to
   reach the paper.** So the site is reported as `exaltaxit`, with the lost crossbar named, and the
   `c` is not carried into the patch.
6. ⛔ **`amein` @1060A, `id es` @1056A, `Benedietus` @1055C** — a broken `m`, an uninked `t`, a broken
   `c`. All three are the copy's condition. Declined and recorded so a later reader does not file
   them.
7. ⛔ **`justificaui` @1059C — the reading is certain, the correction is not, and I did not guess.**
   The disputed glyph is a bottom-arched `u` against the tall crossed `t` of *gratia* on the same
   line, so `justificaui` is what Migne set. Whether he meant *justificavi* (u for v, which he sets
   nowhere else on these leaves) or a broken *justificati* cannot be decided from the leaf. **The
   reading is patched; the marker class is left to the pass.** *A patch must not guess a letter any
   more than a marker may.*

---

## §7 · THE RULED AXES — what my range actually did with each

| axis | my range |
|---|---|
| **`Canticum graduum` → "A canticle of degrees"** | **5 occurrences, 5 so rendered, zero rivals.** All five read at the plate and all five italic there. |
| **`gradus` → "degree"** | **4 occurrences** (`gradu`, `gradus` ×3), all "degree". The ordinal series *In tredecimo … Quartus decimus … Quintus decimus* is unbroken in the English and continues the 0087–0091 stint's count. |
| **`usque ad`** | **54 occurrences. 52 formula, 2 not**, decided mechanically by the `etc.` splice test. The two non-formula sites are both in 0093 and both **inside italic**, which is the mirror of the previous stint's pair (both of theirs fell outside it) — a second demonstration that italic membership fails in both directions: `quae extenditur usque ad inimicos` @1053B ("extends even to enemies") and the Ps 134:8 lemma `*Ab homine usque ad pecus*` @1054C ("from man even to beast"). Neither is preceded by an `etc.` ⚑ **Three bare `usque` besides**, none of them the formula: `*Si introiero* usque *donec inveniam locum Domino*` @1050D (a splice, but without `ad`; rendered "as far as" because it does the formula's work) · `subditos usque concordiae utilitas pervenit` @1053A (postpositive, "even to them that are subject") · the lemma `*Usque in saeculum saeculi*` @1052B. And three look-alikes that are different words: `quousque` @1059B, `hucusque` @1061A and @1061C. |
| `gentes` family | **8 occurrences**, rendered **Gentiles 3 · nations 3 · nation 2**, decided per site. The three "Gentiles" are the sites where the Jews are the named other half (*propter fidem gentium* @1051C, *a Judaeis … ad gentes* @1052A, *Israel et gentium* @1056D). The three "nations" are generic (*Caeteras gentes sub angelis* @1054A, *gentes Israel* @1054D, *ad omnes gentes missa* @1058C). The two singular `gente` are both *gente Judaeorum* @1055C/1056B → "the nation of the Jews", which is the axis's own settled treatment of a singular `gens` of the Jewish people. **No singular `gens` in a non-ethnic metaphor occurs**, so §A5's named exception is not engaged. |
| `mysterium`/`sacramentum` | **mystery 1 · sacrament 0** (`profunditate mysteriorum` @1059A). No bleed. |
| `daemonium`/`diabolus` | **demon 2 · devil 4 · Satan 0**: `daemones` @1054D → "the demons"; `Diabolum`/`diabolus` ×3 @1056C and `Diabolus` @1057B → "the devil". No `daemonium` in the range; no bleed either way. |
| `turba`/`multitudo` | **zero occurrences of either.** The instrument was checked, not assumed: these are psalms of ascent and of exile, and the Gospel crowds are absent, as they were in Bands A and B and in the previous stint. |
| `Diapsalma` | **zero occurrences.** Not engaged. |
| **`In finem` → "Unto the end"** | **2 occurrences, both at the Ps CXXXVIII titulus** (the head lemma and its re-quotation), both read at the plate, both so rendered. Zero rivals. |
| **`Psalmus David` / `Psalmus ipsi David`** | **Both occur and both are read at the plate**: `Psalmus David.` @1056D → "*A psalm of David*", `Psalmus ipsi David.` @1058A → "*A psalm to David himself*". Kept distinct. |
| `Dominus virtutum` | **zero occurrences.** Not engaged. |
| **`sedes` → "seat"** | **one occurrence**, `*Sedebunt super sedem tuam*` @1052B → "*They shall sit upon thy seat.*" **Not "throne."** (`sedere in domo domini` @1053B and `super puteum sedit` @1056A are the verb and are rendered "sit".) |
| **archaism** | **Both memberships checked, not italics alone.** 11 `-eth`/`doth` forms in the running English, **every one inside an italic lemma** (*trembleth, bringeth, judgeth, doth, endureth, giveth, feedeth, looketh, knoweth, filleth*); **zero in gloss voice.** A twelfth, "my soul knoweth right well", stands inside a `[var:]` marker — it is my English of the Clementine's wording, i.e. quoted scripture inside the apparatus, and is licensed on the same ground. **No `« »` guillemets occur anywhere in my Latin**, so the second membership is not engaged in the other direction. |
| **em-dashes** | **zero across all five chunks.** |

---

## §8 · CRUCES — passages rendered literally, with the difficulty named

1. ⭐ **`Charitas saeculi` @1053B, the fifteenth degree.** The series has just given the fourteenth
   as *Charitas quae facit fratres habitare in unum*, and the very next sentence says this psalm is
   *de charitate Dei*. So "the charity of the world" sits oddly between them. **The plate prints
   `saeculi` at 900 dpi and I have rendered it as printed.** Two readings are open — *saeculi* as
   "of this present age" (charity exercised in the world, over against the cloister of the
   fourteenth degree), or a defect for something like *coeli* — and **neither is a reading I can
   license from this leaf.** Recorded, not repaired.
2. ⭐ **`Non alia gratia sit qua diligitur Deus, et alia qua proximus.` @1053B.** Our twin reads the
   construing `Non **quod** alia gratia sit`; **the plate has no `quod`.** Rendered from the plate as
   a flat statement, "There is not one grace whereby God is loved, and another whereby the
   neighbour", which keeps the negation exactly where Migne prints it. ⚑ This is §A6's licence used
   in the direction it was written for, and the patch is filed.
3. **`Os ab osse, non ab ore` @1060D.** An etymology of the Latin word, and Migne sets it in ROMAN,
   not italic. Translating it destroys it; italicising it would break span parity. **The Latin words
   are carried through as printed, in roman**, exactly as Pattern 7's non-word class prescribes for
   type that cannot be Englished, and the reader has the facing column. *Os* is *bone*, not *mouth*;
   that is the whole gloss, and it cannot be said in English without becoming the translator's.
4. **`Invenit consilium, sed sic potero fugere iratum.` @1060A.** Migne prints no question mark, and
   the sentence wants one: "He found a counsel, but thus shall I be able to flee from him angered."
   **The mark is not supplied** (Pattern 8) and the strain is recorded here. The preceding clauses
   are all first-person deliberation, so the shift to `Invenit` is Migne's too.
5. **`et ubi et precatur qui exaltentur` @1051B.** A doubled `et` with a bare relative. Rendered
   "and where he also prays that they may be exalted"; `qui` is read as the subject of *exaltentur*
   with an unexpressed antecedent, the Jews of the next clause. **A second reading — `qui` for
   `ut` — would be a Pattern 7 repair and is not taken.**
6. **`Hoc in hominibus fecit propter poculum suum.` @1054C.** *poculum* ("his own cup") is confirmed
   at the plate. Rendered literally, "for his own cup's sake." The image is unexplained by anything
   in the surrounding gloss and I have not supplied an explanation.
7. **`et in servis, id est, fidelibus, consolabitur` @1055A.** *consolabitur* is deponent and Migne
   gives it no object. Rendered **"*he will comfort,*"** with no object supplied — "he will comfort
   himself" and "he will be comforted" were both considered and both **supply** something the Latin
   does not print, which is the §F8 class this band keeps meeting. The `[var:]` beside it names the
   Clementine's *deprecabitur* so the reader can see what the substitution cost.
8. **`Nonne qui oderunt te, Domine.` @1061C** (Ps 138:21, *…oderam*). ⛔ **Rendered as the stump —
   "*Have not they that hate thee, O Lord.*"** — and NOT completed with "did I not hate them",
   although the very next line prints the fuller form *Nonne qui oderunt te oderam?* and would make
   the completion look obvious. **That is exactly why it is refused**: Migne prints the head lemma
   short and then expounds it, the 0965B *Oculi mei* case.
9. **`Memento, Domine, David et omnis.` @1050C** (Ps 131:1, *…omnis mansuetudinis ejus*). Same
   ruling: rendered "*Remember, O Lord, David, and all.*" as printed. Likewise `*Ab extremo*`
   @1054B, `*Terram super aquas*` @1056A, `*Dat escam*` @1056D, `*Dextera mea*` @1057B,
   `*Cornu David*` @1052C — **six truncated lemmata rendered short.**
10. **`quia quatenus agnoscit, eatenus ignoscit` @1060C.** The plate's third person is rendered
    "in so far as **he** acknowledges, in so far he pardons" — the sinner acknowledges, God pardons,
    two different unexpressed subjects in one clause. Our twin's `agnoscis` would have given "thou
    acknowledgest", a second-person address with no other second person in the paragraph. **The
    subject was named before it was supplied**, per the unexpressed-subject rule.
11. **`quas Israel excolit conformando sibi` @1054D.** `quas` is feminine plural and its antecedent
    is `gentes` two clauses back, across an intervening `quem pascunt`. Rendered "or which Israel
    cultivates by conforming them to himself" — **the noun is not repeated in the English**, so the
    antecedent stays where Migne left it.

---

## §9 · SECTIONS READ CLEAN, and what I checked in them

⚑ **A logged column is not a checked column**, so this names the check, not the looking.

- **1051A–1051D (Ps CXXXI, verses 4–9).** Collated word by word against the plate: agrees at every
  word except the punctuation listed in the patch file. Checked specifically for negation —
  *non amplius credatur mihi* · *Est qui non dormit* · *somnus non venit ad oculos* · *si sua non
  quaerit* · *ne fiat locus Dei* · *ne Judaei sint penitus alieni* · *non audit Deus ad vitam
  aeternam* · *ut jam non conturberis* · *mors ultra non dominabitur* — **nine negatives, nine
  carried**, and none moved across a comma.
- **1053C–1054A (Ps CXXXIII close and Ps CXXXIV opening).** Checked every unexpressed subject in
  the `Benedicat` gloss, a chain of five verbs (*hortatur … benedicit … sint … sunt … convenit*)
  whose subject changes from the psalmist to the many to the blessing; the English names each once
  and does not carry one over.
- **1057B–1057D (Ps CXXXVI, the Edom gloss).** Checked the *Esau / Jacob / major / minor* chain for
  a reassigned subject — the elder is the carnal man and the younger the spiritual, and the English
  keeps that order against the pull of *prius … postea*. Also checked *dum putant nocere mali,
  coronas dant*: **`mali` is the nominative subject**, not a genitive with *nocere*, so the wicked
  give the crowns; reading it the other way would reverse who does what.
- **1058B–1058D (Ps CXXXVII).** Checked the two `Non sunt aliae viae` clauses for the §F8
  apposition trap: the negative is marked **twice** in the English, once in each limb, because
  English apposition does not inherit it across the comma.
- **1060B–1060C (Ps CXXXVIII, the darkness gloss).** Checked *nox mihi facta est illuminatio* against
  the lemma *nox facta est illuminatio* four lines below: **Migne prints the dative in the gloss and
  not in the lemma**, and the English keeps that difference, which is what the `[var:]` at 1060C
  exists to expose.
- **1061B (the `Adhuc sum tecum` gloss).** Checked the three unexpressed subjects across
  *agnoscunt / agnoverunt / reveletur*: the first two are the Jews, the third is Christ, and the
  English says so without supplying a pronoun that could resolve to the wrong one.

---

## §10 · HANDOFF

1. ⛔ **Fourteen markers stand unlocked behind the patch pass (§2), and six of them carry an English
   edit that must land in the same commit.** Both are itemised site by site in
   `data/briefs/8967-PENDING-TEI-PATCHES.md` under `BAND C — stint 0092–0096`. **Two are 7a⁗ sites**
   where the negative has to be written outside the marker (1058D, 1059D); one (1058C `dici`)
   requires the English clause to be rebuilt because the present rendering is our repair.
2. ⚑ **Three sites need a RULING at the patch pass, not a mechanical application**: 1059C
   `justificaui` (reading certain, correction not), 1059D `Quo ibo spiritu tuo?` (the patch makes
   Migne's lemma contradict his own gloss, which may be right but should be chosen), and 1060B
   `Et dixit` ×2 (third person against the gloss's first-person *Deliberavi*).
3. **All twelve of my columns are CLEAN at the inner margin, and nothing is owed to Gallica from
   this range.** The work-wide open list stands unchanged at seven.
4. ⭐ **1055B is the first place in the work where Migne prints an address with NO VERSE NUMBER and
   our TEI silently supplies one.** No marker is owed (Pattern 9), but a later collator will find
   nothing in our Latin to tell him the `18` is ours until the patch lands.
5. **The CC departure rate in these twelve columns is 2.6 per column**, up from 1.8 in cols
   1039–1050 and ~1.4–1.5 in Bands A and B. If the next stints measure the same, the budget quoted
   in the launch brief is low for Band C specifically and should be restated.
6. ⚑ **Reading page 536 licensed two markers in chunk 0097** (1062B, 1062C) that were not mine.
   `plate-gate` now fails on exactly one marker work-wide: **`[sic: *quae dam*]` @1063D in 0097**,
   which needs page 537.
