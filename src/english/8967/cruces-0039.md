# 8967 *Glossa ordinaria*, Liber Psalmorum — cruces, chunks 0039–0043 (BAND B, stint 1)

Range: `src/latin/8967/0039.md`–`0043.md`, cols **0918C–0930C**. Psalms L–LVIII.
Lemma brief: `data/briefs/8967-lemmata-0039.txt`.

⚠ **This file is one stint's range. It must be merged into `src/english/8967/cruces.md`.**

---

## §0 · SPAN COUNT RECONCILIATION (the required check)

My brief's header states **384 spans** for chunks 0039–0043. Counting `*…*` runs in my own Latin:

| chunk | italic spans |
|---|---|
| 0039 | 86 |
| 0040 | 29 |
| 0041 | 89 |
| 0042 | 89 |
| 0043 | 91 |
| **total** | **384** |

**The brief's total and my own count agree exactly. The split is sound for this range.** The
English carries 384 spans in the same order and the same places (checked mechanically with the
`[var: …]` markers stripped, since their contents are italic and inflate a naive count).

Anchors: 12 · 4 · 11 · 11 · 10 = **48**, all reproduced verbatim, in order, and each checked
against the *word* it stands beside in the Latin, not merely for presence (test 2b).
Question marks: 1 · 0 · 3 · 1 · 4, matching the Latin band for band.
`noteCount` matches the body in all five once the frontmatter `incipit`'s own `[n:]` is discounted
— the documented off-by-one false positive, not a finding.

---

## §1 · THE PLATE — seven leaves, and what they changed

**Read: PDF pages 464–470 at 200 dpi full page plus 400 dpi crops, `raw/scans/pl113/
patrologiaecurs04migngoog.pdf`. Corner numbers read FIRST on p. 464 (917 / 918), confirming
`PDF page = (column + 11) / 2`, then on every subsequent leaf.** Recorded in `data/plate-reads.json`
as six `full` reads covering **cols 0917A–0928D**; 0929–0930 were already on record.

⭐ **Not one column in cols 0917–0930 is clipped at the inner margin.** 0921 and 0925 are both
1 (mod 4) and both perfectly clean, which is one more counterexample to the withdrawn rule.
**No foot-of-page conjecture apparatus of either layer on any of the seven leaves.**

**18 word-level CC departures from the plate over 13 columns ≈ 1.4 per column** — Band A's measured
rate. Every one is reported in `data/briefs/8967-PENDING-TEI-PATCHES.md` with its column and leaf.
**None of them took a marker**, because a `[sic:]` on any of them would publicly accuse Migne of the
digitization's error, and because `[sic:]` content must appear verbatim in the Latin twin, which by
construction it does not.

### What the plate settled that the Latin alone could not

- **`hiatu` / `biatu` @0924B — and it cut the OPPOSITE way from the standing warning.** The brief
  warns that lowercase `h` images as `b` in this scan family. Here **our Latin** carries `biatu`
  and **the plate** reads `hiatu`. I settled the letter against the `h` of `habitaculis` standing
  on the same printed line, per the same-line control rule, not against the type in isolation. The
  English renders "the gulf of earthly desire".
- **`deservit` / `deserit` @0921A — checked, clean.** `Non deserit malum, qui diligit super
  benignitatem` reads `deserit` on the leaf, and nothing in this range is dative-governed. The
  standing check was run and returns a negative; recording the negative is the point.
- **`Laetctur` @0923B — a candidate I DECLINED after reading it.** The `e` of *Laetetur* images as
  `c`. That is a broken sort on this copy, the `possit`→`rossit` class Band A refused: it is not
  reported for patching and it takes no marker. Our Latin's `Laetetur` is right and stays.
- **The heads.** CC has the terminal periods **backwards** on three of four in this range —
  `PSALMUS L.` / `PSALMUS LI` on the plate against `PSALMUS L` / `PSALMUS LI.` in our Latin, and
  `PSALMUS LIV.` against `PSALMUS LIV`. **My English follows the Latin twin, per §A3** (`PSALM L`,
  `PSALM LI.`, `PSALM LIV`), so three English heads move when the Latin is patched. Flagged so the
  patch pass does not leave the twins disagreeing.
- **`Quoniam qui audivit?` @0929C** — the plate reads `qui`, our Latin `quis`, the Clementine
  (Ps 58:8) `quis`. **Class 1: the divergence was erased before any Vulgate collation could see
  it.** Migne's own gloss quotes the verse back as `*Quis audivit?*` twice nine lines below, so the
  plate carries both readings. **No `[var:]` fired**, because the word our page prints is CC's, not
  Migne's; the marker becomes available the moment the patch lands, and that is said in the patch
  queue.

---

## §2 · THE DIVERGENCE LIST — every lemma word, against the Clementine

⭐ **This section names what I checked, not that I looked.** All 384 spans were walked. Below are
(a) the divergences that took a marker, (b) the divergences I found and DECLINED with reasons, and
(c) the lemmata I checked and found to agree exactly. Sources: `sources/vulgate/clementine-flat.txt`.

### 2a. `[var:]` fired — eleven

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0919D | `exsultant ossa humiliata` | Ps 50:10 `exsultabunt` | present against future, and the gloss's own argument is the present: `et quia **jam** humilis **jam** exsultant`. The tense is what the sentence is for. |
| 0920D | `Abimelech` | Ps 51:2 `Achimelech` | **and the gloss argues from the difference**: Jerome's note reads `Dicit, in Hebraeo Achimelech … ergo Abimelech patris mei regnum`, and Cassiodorus writes `in domum Achimelech` one paragraph above. Migne prints both forms; the divergence is his subject. |
| 0923B | `Laetetur disertum, et floreat tanquam lilium` | Isa 35:1 `Laetabitur deserta et invia, et exsultabit solitudo, et florebit quasi lilium` | jussive for future, twice, and half the verse absent |
| 0923C | `Ego Deus et non homo, et civitatem non ingredior` | Os 11:9 `Deus ego, et non homo; in medio tui sanctus, et non ingrediar civitatem` | **present indicative for future**: "I do not enter the city" against "I will not enter the city", in a gloss distinguishing the city God refuses from the city he inhabits |
| 0925B | `Populus, qui a sanctis longe **fit**` | Ps 55:1 `pro populo qui a sanctis longe **factus est**` | present for perfect — and **Migne's own second quotation, eight lines below at 0925C, reads `longe factus est`.** The control stands on the same leaf. |
| 0926C | `Vota laudationis` | Ps 55:12 `vota tua, quae reddam, laudationes tibi` | the possessive and the dative both vanish; the gloss expounds "vows of praise" as a single thing |
| 0926D | `corrumpas David` | Ps 56:1 `ne disperdas` | a different verb in the titulus, and the gloss is built on it (`ne, tu, Pilate … corrumpas David`). ⚑ Ps 57 and 58, two chunks later, print `ne disperdas` — so the divergence is local to this titulus, not a house spelling. |
| 0927A | `Misit **Verbum** de coelo` | Ps 56:4 `Misit de caelo, et liberavit me` | *Verbum* is not in the verse, and the whole gloss is about the Word sent out of the hidden essence. ⚑ **Migne's own next lemma, three lines down, reads `Misit de coelo` and agrees with the Vulgate exactly** — the divergence and its control are on one leaf. |
| 0929C | `Surge, Petre, macta et manduca` | Act 10:13 `Surge, Petre : occide, et manduca` | *macta* is sacrificial slaying, and the gloss uses *mactare* three times around it (`Ut mactent et manducent` … `quo mactat Petrus`). *occide* would not license the argument. |
| 0929D | `Sustinuit vasa irae apta, et ad interitum, in multa patientia, ut notas faceret divitias suas` | Rom 9:22–23 `sustinuit in multa patientia vasa irae, apta in interitum, ut ostenderet divitias **gloriae** suae` | `gloriae` is gone and the verb is changed |
| 0930B | `Ite, maledicti, in ignem aeternum` | Mt 25:41 `Discedite a me maledicti in ignem aeternum` | `Discedite a me` replaced outright |

All eleven stand on columns recorded in `data/plate-reads.json`; `plate-gate.mjs` passes on all of
them.

### 2b. Divergences found and DECLINED — with the reason, because a blind reader will look here

Pattern 14's bar is a divergence **that changes the sense**. These do not clear it, and firing them
would bury the eleven above in noise:

- **`In ore stultorum est cor eorum` @0920D** vs Sir 21:29 `In ore fatuorum cor illorum`. Three
  differences, and the sense is unchanged. ⛔ **But the decisive reason is other**: the plate reads
  `stulorsorum`, a non-word, so the word our page prints is **CC's repair, not Migne's**. A `[var:]`
  here would compare the Clementine against a reading Migne never set. Declined, and reported for
  patching instead.
- **`Non potest abscondi civitas supra montem posita` @0923C** vs Mt 5:14 `Non potest civitas
  abscondi supra montem posita`. **Word order only.** No sense turns on it.
- **`Nuntiabo` @0924B** vs Ps 54:18 `annuntiabo`. The prefix only, and Migne himself writes
  `annuntia` at 0924D. Not a sense change.
- **`a tempestate` @0923B** vs Ps 54:9 `et tempestate`. The Vulgate's noun is governed by the same
  `a`; the preposition repeated changes nothing.
- **`Pro nihil` @0925D** vs Ps 55:8 `pro nihilo`. A real word, and the gloss reads it adverbially
  either way (`quasi nihil inde tibi sit`).
- **`Deus meus es, tu` @0926B** vs Ps 55:10 `Deus meus es`. An appended emphatic pronoun.
- **`In tituli inscriptione ipsi David cum tenerent eum` @0925B** vs Ps 55:1 `David in tituli
  inscriptionem, cum tenuerunt eum`. Case and mood, no sense change. **`ipsi David` is deliberately
  kept distinct per §A1.4** and is not the divergence.
- **`Et coepit Jesus taedere et pavere` @0927B** vs Mc 14:33 `coepit pavere et taedere`. **Migne
  reverses the two verbs and supplies `Jesus`.** No sense turns on the order — but note that this
  is the *cinis et pulvis* shape from 7a″, so: **my English keeps Migne's order and does not
  restore the Vulgate's.**
- **`In hoc natus sum, ut testimonium perhibeam veritati` @0924C** vs Jo 18:37, which reads `Ego in
  hoc natus sum, et ad hoc veni in mundum, ut …`. A compression, not a divergence.
- **`Nonne duodecim horae sunt diei?` @0925D** vs Jo 11:9 `Nonne duodecim sunt horae diei?`. Word
  order.
- **`sperantes in divitiis praevaluerunt in vanitate sua` @0929B** vs Ps 51:9 `speravit in
  multitudine divitiarum suarum, et praevaluit in vanitate sua`. **Deliberately pluralized** by the
  gloss to apply the verse to the *fortes* of Ps 58:4. An adaptation the gloss makes on purpose is
  not the class Pattern 14 marks.
- **`Recte` @0928A** vs Ps 57:2 `recta judicate`. Adverb for neuter plural; the gloss argues from
  neither.
- **`Circumibunt` @0929C** vs Ps 58:7 `circuibunt`. Orthography.
- **`Fortitudinem meam … susceptor meus es, Deus.` @0929D** — the trailing `Deus` is the head of
  Ps 58:11 pulled into the lemma. Not a variant reading.

### 2c. Checked and found to agree with the Clementine exactly

Every remaining lemma in the range. Named so that this list cannot be mistaken for the work of an
agent who only reported findings:

- **Ps 50** (0918C–0920C): `Miserere mei, Deus` · `Secundum magnam misericordiam tuam` · `Magnam
  misericordiam` · `Miserationum` · `Amplius lava me` · `Munda me` · `Quoniam iniquitatem (meam)` ·
  `Contra me` · `Tibi soli peccavi` · `Coram te` · `Ut justificeris` · `Vincas cum judicaris` · `In
  iniquitatibus` · `Ecce enim` · `Veritatem` · `Incerta et occulta` · `Occulta` · `Asperges me` ·
  `Hyssopo` · `Super nivem` · `Auditui meo` · `Averte` · `In visceribus meis` · `Ne projicias me a
  facie tua` · `Spiritu principali` · `spiritum rectum` · `Spiritum sanctum` · `Docebo` · `De
  sanguinibus` · `Justitiam tuam` · `Laudem tuam` · `Sacrificium Deo` · `Contribulatus` · `Cor
  contritum` · `Benigne fac` · `Muri` · `Tunc acceptabis sacrificium` · `oblationes` · `holocausta`
  · `Tunc imponent` · `vitulos` · `Altare`.
  ⚑ `*spiritum principalem*` @0920A is **not** a divergence: it is the gloss inflecting its own
  lemma into the accusative after `per`. The lemma proper at VERS. 14 is `Spiritu principali`, which
  is Ps 50:14 verbatim.
- **Ps 51** (0920C–0921C): `Doeg` · `Quid gloriaris in malitia` · `Cogitavit` · `Sicut novacula` ·
  `Dilexisti malitiam` · `Lingua dolosa` · `Propterea Deus` · `Et radicem tuam de terra viventium` ·
  `Videbunt justi` (both) · `Ego autem` · `Oliva fructifera` · `In aeternum et in saeculum saeculi`
  · `Fecisti, et exspectabo nomen`.
- **Ps 52** (0921C–0922A): `Dixit insipiens` · `Insipiens` · `Deus de` · `Si est` · `Omnes
  declinaverunt` · `Nonne scient` · `Deum non invocaverunt` · **`Ossa eorum qui hominibus placent`
  — Ps 52:6 verbatim** (the plate's `qni` is a turned sort, reported for patching) · `Confusi sunt`
  · `Quis dabit ex`.
- **Ps 53** (0922A–0922C): `Ziphaei` · `Deus, in nomine` · `Deus, exaudi` · `Percipe` · `Alieni` ·
  `Ecce enim` · `Adjuvat` · `Averte mala inimicis` · `In veritate` · `Voluntarie sacrificabo`.
  ⚑ `*In virtute*` is **not** a divergence: Migne labels it himself, `secundum aliam litteram`.
  ⚠ `*Mihi autem,*` @0922C I could **not** place in Ps 53. It reads as a lemma pickup and the
  nearest Clementine home is Ps 138:17. **No marker; logged as unplaced** rather than guessed.
- **Ps 54** (0922C–0925B): `In finem in carminibus` · `Intellectus` · `Exaudi, Deus, orationem
  meam` · `Ne despexeris deprecationem` · `In exercitatione` · `Conturbatus sum a voce inimici`
  (spans the 54:3/54:4 verse break, which is Migne's clipping, not a variant) · `Cor meum
  conturbatum` · `Timor et tremor` · `Contexerunt me tenebrae` · `Sicut columbae` · `Ecce elongavi`
  · `Et mansi in solitudine` · `Exspectabam eum` · `Praecipita` · `Divide` · `In civitate` · `Et
  labor in medio ejus` · `Usura` · `Quoniam si inimicus` · `Abscondissem me forsitan ab eo` · `Tu
  vero, homo` · `Unanimis` · `Notus` · `Dux` · `Notus meus. Qui simul` · `Cibos` · `Veniat` ·
  `Veniat mors` · `Descendant in infernum viventes` · `Viventes` · `In habitaculis` · `in medio` ·
  `Ego autem` · `Vespere et mane` · `mane` · `meridie` · `Narrabo` · `Appropinquant mihi` ·
  `Quoniam inter multos erant mecum` · `Exaudiet Deus` · `Humiliabit illos qui est ante saecula` ·
  `Non enim est illis commutatio …` · `Contaminaverunt` · `Ira` · `Cor` · `Molliti sunt sermones` ·
  `jacula` · `Ipsi sermones` · `Curam tuam` · `Fluctuationem` · `Contristatus sum in exercitatione`
  · `Tu vero` · `Dies suos, ego autem` · `Laetare, sterilis, quae non paris` (Gal 4:27 verbatim).
- **Ps 55** (0925B–0926D): `Allophyli` · `Geth` · `Miserere mei, Deus` · `Impugnans tribulavit me` ·
  `Ab altitudine` · `Altitudo diei` · `sperabo` · `Tota die` · `Inhabitabunt` · `In ira populos
  confringes` (both) · `Deus, vitam meam annuntiavi tibi` · `Posuisti lacrymas` · `In quacunque
  die` · `In Deo laudabo verbum` · `In Domino` · `Laudabo sermonem` · `In me sunt` · `Quoniam
  eripuisti` · `Ut placeam`.
- **Ps 56** (0926D–0928A): `In finem` · `Miserere mei` · `Et in umbra` · `Misit de coelo` ·
  `Liberavit` · `dedit` · `in opprobrium conculcantes me` · `Misit Deus` · `Misericordiam` ·
  `Veritatem` · `Misericordiam suam` · `Dormivi` · `Conturbatus` · `Filii hominum` · `Lingua` ·
  `Tristis est anima mea` (Mt 26:38) · `Exaltare` · `Laqueum paraverunt` · `Pedibus` ·
  `Incurvaverunt` · `Ante faciem meam foveam` · `Paratum` · `cantabo` · `Exsurge, gloria mea` ·
  `exsurgam diluculo` · `Exsurge, psalterium et cithara` · `Ad coelos`.
- **Ps 57** (0928A–0929A): `In finem ne disperdas David in tituli` · `Si vere utique justitiam
  loquimini` · `Manus vestrae` · `Concinnant` · `Alienati sunt peccatores a vulva` · `Furor illis` ·
  `Surdae et obturantis` · `Terra` · `cauda` · `Venefici incantantis` · `Deus conteret` · `Molae
  fractae` · `Dentes` · `In ore` · `Molas leonum confringet Dominus. Ad nihilum devenient` ·
  `Confringet` · `Ad nihilum` · `Tanquam aqua` · `Intendit arcum` · `Priusquam spinae` · `Rhamnum`
  (both) · `Sicut viventes, sic` · `Sic in ira absorbet eos` · `Laetabitur justus cum viderit
  vindictam` · `Et dicet homo` · `Deus judicans eos`.
  ⚑ `*Medicamenti medicati a sapiente*` is Migne's own labelled `alia littera`, not a divergence.
- **Ps 58** (0929A–0930C): `In finem ne` · `Ne disperdas` · `Quod scripsi, scripsi` (Jo 19:22) ·
  `Eripe` · `De inimicis` · `Eripe me` · `Fortes` · `Iniquitas` · `peccatum` · `Exsurge` · `In
  occursum` · `Vide` · `Convertentur` · `Ad vesperam` · `Circumibunt` · `Et gladius` · `Gladius` ·
  `Deridebis eos ad nihilum` · `Quis audivit` · `Ostendit` · `Ne occidas` · `insertis` · `Ne quando
  obliviscantur` · `In virtute tua` · `Depone` · `Delictum oris eorum` · `delictum` · `Et
  comprehendantur` · `In superbia` · `Et de exsecratione` · `Annuntiabuntur in consummatione` · `In
  ira consummationis` · `consummationis` · `consumptionis` · `Et scient` · `Convertentur ad
  vesperam` · `Murmurabunt` · `Ego autem` · `Et exaltabo` · `Misericordiam` · **`Ad vesperum
  demorabitur fletus, et ad matutinum laetitia`, Ps 29:6 verbatim**.

---

## §3 · NEGATION — every printed negative, and the word it is on

I named the host word for each `non`/`nec`/`neque`/`nisi`/`nunquam`/`nullus`/`nihil`/`ne` in the
range and checked the negative sits on that host in the English, not merely that it is present
(test 2, and test 2a's hole). The sites where the check bit:

- **@0918C `non cadendi, sed, etsi cecideris, resurgendi ne desperes`** — two negatives, on
  *cadendi* and on *desperes*, and English apposition would happily drop the second. Rendered "not
  of falling, but of rising again if thou hast fallen, **that thou despair not**."
- **@0920A `robur solum petit non auferri`** — ⚑ **the exact 2a trigger**: a negative on an
  infinitive with the quantifier `solum` beside it. `solum` modifies **`robur`**, not the asking:
  he asks that *the strength alone* not be taken. Rendered "he asks that **its strength alone** be
  not taken away" — the negative on `auferri`, the quantifier on `robur`.
- **@0925C `non ait: Non timebo, sed, sperabo in te`** — two negatives, one of them inside a quoted
  refusal. Both carried; the `sed` correlative is what fixes the scope.
- **@0928B `Non solum non faciunt, sed nec audire volunt`** — three negatives, and the first
  belongs to `solum`, not to `faciunt`. Rendered "**Not only** do they **not** do, but they will
  **not even** hear."
- **@0930A `Non eos, sed delictum occide`** — ⚑ **the sharpest one in the range, and the §4 class
  exactly.** The `non` is on **`eos`**, not on `occide`: the command is to kill, and to kill the
  sin instead of the men. "Slay not them, but the sin" reads the negative onto the verb and inverts
  Augustine. Rendered **"It is not them, but *the sin,* that thou art to slay"**, which puts the
  scope where the Latin puts it.
- **@0925B `Vae! qui peccant et non poenitent`** — the apposition trap from §4. Both the `!` (kept
  where Migne sets it, after *Vae*, not moved to the end of the sentence) and the `non` carried.
- **@0922B `qui non nisi temporalia noverunt`** — `non` and `nisi` both printed, both rendered:
  "who know **nothing except** things temporal."
- **@0921A `Non deserit malum, qui diligit super benignitatem`** · **@0919A `Cujus verba non
  transeunt`** · **@0919B `Christo nullum habenti peccatum`** · **@0919C `ut nec peccata sint
  impunita`** · **@0921B `quae non fructum parit` / `nihil habebunt cum sanctis`** ·
  **@0926A `nullus inde tibi labor` / `quasi nihil inde tibi sit` / `pro nullis eorum meritis`** ·
  **@0926C `Vota … quae a nobis nunquam recedunt`** · **@0928D `non vera, sed falsa … videntur
  vivere, nec vivunt` / `non est ira comparatione futurae`** · **@0930A `non ipsi` / `non surgeret
  Paulus, nisi prius caderet Saulus`** · **@0930A `nec fieri potest ut superbus non invideat`** —
  all checked host by host, all carried, none supplied.

**No negative in the range was translated as its opposite, and none was relocated to a neighbouring
verb to make a clause run.** Nothing in these five chunks was smoothed.

---

## §4 · UNEXPRESSED SUBJECTS — the pronouns I supplied, and who they are

Per the brief's dominant-defect rule, each supplied "he/she/it/they" named:

- **@0925B–0926D, Psalm LV throughout: the subject is the CHURCH, feminine.** `Orat Ecclesia …
  dicit se non timere`, `dicit se a superbis conculcari`, `laudem Dei cantaturam se dicit`. The
  gloss names her once and then runs on subjectless for a column. Rendered "she" throughout, with
  `Ecclesia` as the antecedent — **not** the psalmist, and not Christ, who enters only at Ps LVI.
- **@0924B `Alienae sunt, non naturales`** — feminine plural, and the antecedent is **`nequitiae`**
  from Ps 54:16 (`nequitiae in habitaculis eorum`), which is in the verse and not in the sentence.
  Rendered "They are alien" of the wickednesses, not of the dwellings (`habitacula`, neuter) and
  not of the men.
- **@0927D `dum eis compatiens sterilis reddebatur ab eis`** — the subject is **Christ**, carried
  from `Domini` two clauses up; the `eis` twice are the persecutors.
- **@0928C `horum Molae fractae`** — `horum` are the asps and lions of the preceding clause, i.e.
  the Jews, named there.
- **@0921B `qui cum eo nihil habebunt cum sanctis`** — `qui` are the *ministri*, the immediately
  preceding word, not Antichrist.

---

## §5 · CRUCES — passages where the Latin will not simply construe

Rendered as closely as the printed words allow, per Pattern 7. **None was repaired inside the
translation.**

1. **@0919C `Hyssopus herba humilis, etc., usque ad in quibus est inflatio, sic humilitas
   superbiam.`** The abridgment tail has no verb: `humilitas superbiam [purgat]`. Rendered with the
   ellipsis visible — "so humility, pride" — rather than supplying *purgat*. The formula removes
   words; it does not license me to put one back.
2. **@0920D `Quae dum promittit innovationem, incidit ita ille dolosus, Antichristus scilicet,
   beatitudinem, et occidit.`** Two readings construe: `incidit` shared by both subjects (the razor
   cuts; so Antichrist cuts blessedness), or a second verb elided after `dolosus` (Antichrist
   *promises* blessedness and slays). **I took the first**, because `incidit` is the only finite
   verb before `beatitudinem` and `et occidit` pairs with it; the rival is named here because the
   apparatus does not record it. Rendered "so does that deceitful one, namely Antichrist, cut
   blessedness, and slay."
3. **@0924A `Corporales, qui solis iniquo poterant esse dulces.`** `solis` (nom./gen. of *sol*, or
   dat./abl. pl. of *solus*) against a dative singular `iniquo` does not agree. **Confirmed on the
   leaf: Migne sets it thus.** It is a real word, so per the addendum's rule it stays Migne's and
   takes no marker. Rendered by the evident sense, "sweet to the wicked alone", and logged.
4. **@0925A `sed jacta in Dominum, non alium qui portus est, vel saxum navi, non portus fluctuati
   in saeculo.`** Two readings: `qui portus est` describes the **Lord** (and the rest describes the
   *alius*), or it describes the *alius* throughout. Both construe; the second gives a sharper
   contrast. **I rendered the printed order without choosing**, keeping both negatives on their own
   nouns, and name the ambiguity here rather than resolving it silently in the text.
5. **@0926A `Deus, vitam. Confringes, et ego ad institutionem eorum vitam meam ante, quae semper
   mala.`** Verbless: the lemma's own `annuntiavi` has to carry over. **I supplied "declare" and I
   am saying so**, because an English clause cannot stand without a verb; the word supplied is the
   lemma's own, printed four words earlier, and nothing else is added.
6. **@0926C `Vel ita, ut Trinitas naturae personaliter per tria verba, quae ponit.`** Same shape,
   no verb. Rendered "stands personally in the three words which he sets down"; the copula is
   supplied and named here.
7. **@0922D `Quis dabit mihi pennas sicut?`** Migne prints the lemma clipped **after** `sicut`,
   with his own question mark. Rendered with the dangling comparative kept — "Who will give me
   wings as?" — rather than completed to *sicut columbae*, which he supplies himself two sentences
   later as a separate lemma. Convention 3 expands a fragment; it does not license completing a
   clipped comparative that the plate deliberately leaves hanging with a mark on it.
8. **@0925C `Diei Dies, Christus est`** — the lemma word `diei` and its gloss `Dies` stand inside
   one italic run. Rendered "*Of the day. The Day,* is Christ", keeping the run as one span.
9. **@0929A `Malivolentia: peccatum, operis.`** Two elliptical genitives, no verb: "Iniquity [is a
   matter] of ill-will; sin, of the deed." Rendered without supplying the copula. **The plate reads
   `Malivolenti`**, a dative, which is a further departure reported for patching.
10. **@0929C `et oraturo Judaeorum salus`** — a future participle in the dative with no obvious
    governor. Rendered "and, for him who is yet to pray, the salvation of the Jews", and confirmed
    on the leaf as printed.
11. **@0930B `ostenditur eis, quod non sine Christo, qui dominatur Jacob`** — verbless again.
    Rendered "that this is not so without Christ", keeping `non` on the predicate and supplying only
    the copula.

---

## §6 · CONVENTIONS — inherited, applied, and one axis decided per site

- **`In finem` → "Unto the end."** **8 body occurrences** in this range (0918C `In finem psalmus`,
  0920C `In finem pro`, 0921C `In finem pro`, 0922C `In finem in carminibus`, 0925B `In finem`,
  0926D `In finem`, 0928A `In finem ne disperdas David in tituli`, 0929A the clipped `In finem ne`),
  and **8 "Unto the end" in the English. Zero rivals.** §A1.1 holds. ⚑ A raw grep returns 13 in the
  Latin: five of those are the frontmatter `incipit` of each chunk, which is copied verbatim and
  untranslated. **The instrument was checked before the number was reported.**
- **`usque ad` → "as far as".** **57 occurrences** in this range (17 · 5 · 10 · 11 · 14), against
  **57 "as far as" in the English**, **all inside italic spans, all the abridgment formula, zero
  rivals.** ⚑ I checked for the unitalicized look-alike class the addendum
  names and **found none in these five chunks** — a checked negative, worth recording.
- **`Diapsalmus` — ROMAN, unitalicized, unanglicized.** 6 occurrences (0922B, 0923B, 0927A, 0927D,
  0929B, 0930B). Our Latin sets all six roman, the plate sets all six roman, and my English follows.
  §A1.2 holds and needed no override.
- **`sedes` → "seat"** @0928A (`ubi sedes angelorum` → "where is the seat of the angels"), per §A5.
- **Heads.** `PSALMUS L` → `PSALM L`, `PSALMUS LI.` → `PSALM LI.`, `PSALMUS LIV` → `PSALM LIV`, and
  the rest with their periods. **Roman numerals stay Roman and the twin's punctuation is followed,
  including where the plate disagrees with the twin** (see §1).
- **`Psalmus ipsi David`** @0925B kept distinct from `Psalmus David`, per §A1.4.
- **Archaism.** `thou`/`thee`/`thy` used for the grammatically singular addressee only (God, the
  soul, the reader), `you` for the plural (`et dicitis, quis audivit?` @0929C → "and **you** say").
  No `-eth`/`saith` was used anywhere in the range, in either voice. **There are no « guillemets »
  in these five chunks**, so the two-membership test reduces to the italic one here.
- **`gentes` — decided per site, and the sites named:**
  | col | Latin | rendering | why |
  |---|---|---|---|
  | 0921B | `insertus est oleaster de gentibus` | **Gentiles** | Rom 11, against `Judaei` in the same clause |
  | 0923A | `avolavit ad gentes` | **Gentiles** | against `corda Judaeorum` in the same sentence |
  | 0923B | `mansi in solitudine, gentium` | **Gentiles** | the solitude opposed to the synagogue |
  | 0924D | `ut tollat locum et gentem` | **nation** | singular ethnic `gens`, Jo 11:48 |
  | 0929A | `famam habere in omnibus gentibus` | **nations** | plainly generic, the `in omnes gentes` shape |
  | 0929A | `orat etiam pro salute gentium` | **Gentiles** | paired with `Judaeorum salus` at 0929B |
  | 0929B | `Orata salus gentium … et Judaeorum salus` | **Gentiles** | the opposition is explicit |
  | 0929C | `convertere omnes gentes … omnes gentes Christianae futurae sunt` | **Gentiles** | the Gentile mission set against the unbelieving Jews of the same gloss |
  | 0930B | `sciunt se pares gentibus` | **Gentiles** | explicit `Judaei` subject |
- ⛔ **`gens tenebrarum` does not occur in this range.** I checked: the only `gens `-initial match in
  the five chunks is inside `tangens` @0925B. Nothing to flag, and nothing decided.
- **Em-dashes: zero in all five English chunks.**

---

## §7 · CANDIDATES I RAISED AND REJECTED

Named with reasons, because a blind reader will look at each of them:

- **`biatu` @0924B** — looked like a Migne non-word worth a `[sic:]`. **The plate refutes it**: the
  word is CC's corruption of `hiatu`. Marker withdrawn before it was written; site reported.
- **`stultorum` @0920D** — looked like a clean `[var:]` against Sir 21:29. **The plate refutes the
  premise**: Migne prints `stulorsorum`. Declined; see §2b.
- **`quis audivit` @0929C** — looked like a clean lemma agreeing with Ps 58:8. **The plate shows
  Migne prints `qui`**, so the agreement is CC's, not his. No marker; site reported, and the marker
  is flagged as unlocked by the patch.
- **`Laetctur` @0923B** — a candidate `[sic:]` on the leaf that our Latin does not carry. **Refused
  as ink damage**, per the `rossit` rule.
- **`liberabit` @0927A** — the twin's reading construes and the plate's `liberavit` does not. No
  marker either way: our page prints CC's repair, so there is nothing of Migne's to mark.
- **`Recte` · `Pro nihil` · `Malivolentia`** — all real words that read oddly. Per the addendum's
  10-for-10 finding, a real word that reads oddly is Migne's until a plate says otherwise. Two of
  the three were opened at the plate anyway; only `Malivolenti` turned out to be a CC change, and
  it is reported, not marked.

**No `[sic:]`, `[d:]`, `[cj:]` or `[ed:]` was fired anywhere in this range.** Eleven `[var:]`,
all plate-gated. That asymmetry is the report: the defects in these thirteen columns are almost
entirely **CC's**, and the marker for a CC defect is a patch, not an apparatus entry.
