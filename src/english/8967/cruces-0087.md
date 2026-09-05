# Cruces — 8967 *Glossa ordinaria*, **Liber Psalmorum**, chunks 0087–0091
### Band C, stint 3 · cols 1039B–1050B · Psalms CXVII–CXXX · 4,683 Latin words

---

## §0 · SPAN COUNT RECONCILIATION — the brief is CORRECT, and I counted it myself

| chunk | italic spans in my Latin |
|---|---|
| 0087 | 64 |
| 0088 | 68 |
| 0089 | 55 |
| 0090 | 59 |
| 0091 | 31 |
| **total** | **277** |

**Brief total: 277. Mine: 277. They agree exactly.** I also checked the ends: the brief's first
entry for my range is `[1039B] *Alleluia.*` and my Latin's first span is `*Alleluia.*`; its last is
`[1050B] VERS. 3.-- *Speret Israel.*` and my last span is `*Speret Israel.*`. **The split is sound.**

English span counts run 67 / 68 / 57 / 60 / 33 — the excess over the Latin is exactly the italic
inside the six `[var:]` and one `[cj:]` markers (3 / 0 / 2 / 1 / 2), which are English-only and are
stripped from the ratio count. Anchors: 10 / 11 / 9 / 10 / 4, verbatim and in order. Notes:
35 / 40 / 41 / 40 / 15 in both twins. (`noteCount` in the frontmatter is one lower in every chunk —
the known false positive, not reported.)

---

## §1 · ⭐⭐ WHAT THE PLATE SHOWS AT THE PSALM CXVIII EDITORIAL SENTENCE

**Read at col 1041D, PDF p. 526, at 200 dpi full-page and 600 dpi crops.** ⚑ **Col 1041 is CLIPPED at
the inner margin** — roughly four to six characters per line — and it is **not on the known-clipped
list**, so this stint adds it. The sentence therefore reaches us with the first word of each line
lost. Here is the leaf, transcribed exactly as it stands, `[ ]` marking what the margin has taken:

> **PSALMUS CXVIII.**
> *[Exp]ositionem hujus psalmi, ut valde prolixam,*
> *[omitti]mus. Vide Ambrosii, Cassiodori, Augustini Enar-*
> *[ration]es in psalmos, **et** quibus ad verbum expressa est*
> *[glossa] ordinaria in hunc locum.*

**What the plate settles, point by point, because these were the questions:**

1. **Migne sets the head `PSALMUS CXVIII.` in roman capitals, exactly as every other head**, and the
   sentence beneath it in **ITALIC, the whole paragraph, with no roman word in it.** Our TEI has the
   italic right.
2. **Nothing stands before it and nothing stands after it.** The line above is the last line of the
   Ps CXVII gloss (`d, quod delectet, quam laus Dei.`); the line below is `PSALMUS CXIX.` There is
   no rule, no bracket, no signature, no editorial siglum — and **no** exposition of any part of the
   psalm anywhere on the leaf. **Our transcription has dropped nothing.**
3. ⛔ **ONE WORD DIVERGES, and it is the hinge of the sentence.** The plate reads **`et quibus`**;
   our TEI reads `e quibus`. The words sit **mid-line, well clear of the clipped margin**, and the
   glyph carries a plain crossed `t` with `est` at the end of the same line as control. ⭐ **And it
   is confirmed by a second, independent witness**: `patrologiaecurs04migngoog_djvu.txt`, the OCR
   layer of this same scan, reads `et  quibus` — a reading nobody could have got from our TEI.
   CC has quietly repaired Migne's `et` into the construing `e`. Filed as Class 3.
4. The three clipped openings are recoverable by the visible-structure rule (13a) and by sense:
   `Expositionem`, `omittimus`, `Enarrationes`, `glossa`. **No marker is owed for a clipped opening
   whose word the line-structure fixes.**

**The English renders the plate**, and therefore renders `et`:

> *The exposition of this psalm, as being exceedingly long, we omit. See the Enarrationes on the
> psalms of Ambrose, Cassiodorus, Augustine, and from these the Glossa ordinaria on this place has
> been expressed word for word.*

⛔ **Nothing is supplied, summarised or glossed.** The English says what Migne says and stops. The
longest psalm in the Psalter passes under a single sentence in the editor's own voice, and that is
the edition's evidence.

---

## §2 · THE PLATE READS I DID — twelve columns, six pages, all recorded

`data/plate-reads.json` held **1043–1048** for my range and nothing else. **I opened all twelve**,
corner numbers first, at 200 dpi full-page with 600–900 dpi crops on every disputed glyph.

| page | cols | corner read | clipped? | depth |
|---|---|---|---|---|
| 525 | 1039 / 1040 | 1039, 1040 | **no** | full |
| 526 | 1041 / 1042 | 1042 (1041's own corner is inside the clip) | ⚑ **1041 CLIPPED** | full |
| 527 | 1043 / 1044 | 1043, 1044 | no | full |
| 528 | 1045 / 1046 | 1046 | **1045 CLIPPED** (as the list has it) | full |
| 529 | 1047 / 1048 | 1047, 1048 | no | full |
| 530 | 1049 / 1050 | 1049, 1050 | no | full |

⚑ **Col 1041 is a NEW clipped column** and it is 1041 ≡ 1 (mod 4) — which proves nothing, and I am
recording it *because* the mod-4 rule has been refuted twice. Its neighbours 1039, 1043, 1047 and
1049 are all ≡ 3 or 1 (mod 4) in the same gathering and all clean; **1049 is ≡ 1 (mod 4) and is
CLEAN.** Two clipped columns out of twelve, adjacent-ish and unpredictable. **Open every column.**

### 2a. ⭐ What the gradual-psalm tituli look like at Migne's own plate — the ruling was untested and
### it holds

Nobody had read a `Canticum graduum` at the plate before this stint. **Every titulus in my range is
now read.** What the leaf shows:

- **`Canticum graduum` is set in ITALIC at every one of the eleven tituli** in cols 1041D–1050A
  (Pss CXIX, CXX, CXXI, CXXII, CXXV, CXXVII, CXXVIII, CXXIX, CXXX, plus the second and third
  occurrences inside the Ps CXIX gloss). Our TEI has the italic right everywhere.
- ⭐ **At Ps CXXVI (1046D) Migne prints `Canticum graduum Salomonis.`** — read at 600 dpi, italic,
  and the gloss immediately expounds the added word (`Hic additur *Salomonis,* quia is aedificavit
  templum`). Rendered "*A canticle of degrees of Solomon.*"
- ⭐⭐ **At Ps CXXIV (1045B) Migne prints `Canticum.` ALONE — not `Canticum graduum`.** This is the
  one titulus in the band that breaks the series, and it is Migne's, not our TEI's: the plate is
  clipped at that column but the word `Canticum.` and the `(CASS.)` after it stand clear of the
  margin. **The stump is rendered as printed — "*A canticle.*" — and NOT completed to "of degrees"**
  from the eleven neighbours. That is the §F8 supplied-completion failure in its purest available
  form, and refusing it here is the point.
- **The numbered series is Migne's own and it is unbroken across my range**: `Sextus gradus`
  (1045B) · `Septimus gradus` (1046A) · `Octavus, gradus` (1046D, with the stray comma) ·
  `Nonus gradus` (1048A) · `Decimus gradus` (1048C) · `Undecimus gradus` (1049B) ·
  `Duodecimus gradus` (1049D) — plus `Primus gradus` and `Secundus gradus` at 1042A/1042D. **Any
  rendering of `gradus` but "degree" breaks a series the gloss is counting out loud.** 14
  `Canticum graduum` + 12 `gradus` + 2 `gradibus` in my Latin; all rendered "degree(s)".

---

## §3 · MARKERS FIRED — seven, every one on a column I opened today

`plate-gate` OK; `verify-english` clean.

| col | chunk | marker | why |
|---|---|---|---|
| 1039D | 0087 | `[cj: *revelando*; read *relevando*, "by raising up"]` | see 3a |
| 1040C | 0087 | `[var: Vulg. *per me si quis introierit, salvabitur*]` | Jn 10:9; Migne prints *per quod … salvus erit* |
| 1044D | 0089 | `[var: Vulg. *occide*, "kill"]` | Acts 10:13; Migne prints *Macta* |
| 1046B | 0089 | `[var: Vulg. Mc 7:15 …; Migne's wording is that of Mt 15:11]` | see 3b |
| 1047C | 0090 | `[var: Vulg. *Fuerunt mihi lacrimae meae panes*]` | Ps 41:4; Migne prints *Factae sunt* |
| 1049C | 0091 | `[var: Vulg. Prov. 18:3 *impius … peccatorum*]` | Migne prints *Peccator … vitiorum* |
| 1050A | 0091 | `[var: Vulg. Sir. 3:20 *Quanto magnus es*]` | Migne prints *Quanto major es* |

**Every marker sits on the word it accuses** — checked one by one against §F8's misplaced-`[sic:]`
finding. There is **no `[sic:]` and no `[d:]` in this stint**, and that is not a claim about Migne:
see §4.

### 3a. ⭐ The one `[cj:]`, and why it is fireable when six of its siblings are not
At **1039D** the plate and our twin BOTH read `vel, a casu revelando`. Ten lines below, at **1040A**,
Migne writes the same clause again — `ostendit etiam quod liberat a casu **relevando**` — and prints
it correctly. **Both are on page 525 and I read both at 600 dpi.** *Revelando* is a real word, and
"by revealing from the fall" is a faithful English that misleads; that is Pattern 18 exactly. The
marker fires because **the twin carries the printed word**, which is the whole difference between
this site and the six unlockable ones in §4.

### 3b. The Mark 7 `[var:]` is doing two jobs, and says so
Migne prints `Quod procedit de ore, inquinat` under `(Marc. VII)`. It agrees with **neither** Mark
7:15 (*quae de homine procedunt, illa communicant hominem*) nor, verbatim, Matthew 15:11 — but the
wording is Matthew's, not Mark's. The marker names both facts because **the gloss's very next
sentence turns on the printed noun**: *Non de ore carnis, sed cordis.* Substituting Mark's *de
homine* would delete the word the exposition exists to qualify.

---

## §4 · ⛔ WHY THERE IS NO `[sic:]` IN THIS STINT — and it is not because Migne is clean

**Migne is not clean in these columns. He is defective at seven sites I can prove**, and **not one
of the seven is fireable**, because a `[sic:]` may wrap only type our twin carries and CC has
already repaired every one of them. This is §F2's lesson recurring in a fresh band, so I am stating
the count rather than letting the marker table imply a clean plate:

| col | plate prints | our twin | marker unlocked by the patch |
|---|---|---|---|
| 1039C | `ete.,` | `etc.,` | `[sic: *ete.*]` |
| 1039C | `et et ad veram vitam` | `et ad` | `[d: et, et]` |
| 1040A | `spinis pecatorum` | `peccatorum` | `[sic: *pecatorum*]` |
| 1043C | `et eum Domino judicabunt` | `cum` | `[cj: *eum*; read *cum*]` |
| 1043C | `in quibus Deum sedet` | `Deus` | `[cj: *Deum*; read *Deus*]` |
| 1044A | `in hoc hoc quod te diligo` | `in hoc quod` | `[d: hoc, hoc]` |
| 1044B | `Dat similttudinem` | `similitudinem` | `[sic: *similttudinem*]` |
| 1047C | `Quasi dieeret :` | `diceret` | `[sic: *dieeret*]` |
| 1048B | `sancti veniens` | `venient` | `[cj: *veniens*; read *venient*]` |

**Nine, not seven** — and the marker count for my range is therefore `[var:] 6 · [cj:] 1` **before**
the patch pass and `[var:] 6 · [sic:] 4 · [d:] 2 · [cj:] 4` **after** it. ⛔ **Do not quote the first
pair as a fact about this Psalter.**

⚑ **Each of the four unlockable `[cj:]` sites carries an English obligation, and I have written it
into the patch file rather than trusting the merge to notice.** The English at 1043C, 1043C, 1048B
currently renders the TWIN's reading ("shall judge **with** the Lord", "in whom **God** sits", "the
saints **shall come**"). When the Latin is restored, an English left as it stands **silently repairs
a broken column** — §F8's defect number 4, verbatim. The marker and the rendering are one decision.

---

## §5 · THE DEFECT CANDIDATES I DECLINED — the instrument, not the leftovers

**Sixteen candidates raised; nine survived (§4), seven declined.** Every one below read as a
confident finding before the leaf was opened.

1. ⛔ **`Aventus Domini` @1046C — the most important rejection in the stint.** Our TEI carries the
   non-word `Aventus`, sitting at the head of a gloss, with `Adventus` obvious. I had it written
   down as `[sic: *Aventus*]`. **The plate prints `Adventus`, cleanly, at 600 dpi.** CC manufactured
   the defect. Firing it would have been a false public accusation at a word Migne set correctly —
   §F8's `[sic: *Eccesiam*]` failure in a new costume.
2. ⛔ **`PSAMUS CXXIV.` @1045B** — our TEI's head is a non-word, and the temptation to mark it is
   strong because it is so visible. **The plate prints `PSALMUS CXXIV.`** It is CC's. And even had
   it been Migne's, **Pattern 9 forbids the marker**: a section label is normalized in English
   *because* the facing Latin preserves the misprint (the `PSLMUS` precedent, declined in Band B).
   English reads `PSALM CXXIV.`; the head field in the frontmatter is copied verbatim, misprint and
   all, because frontmatter is copied and not corrected.
3. ⛔ **`VESS. 4.` @1043A** — the mirror case, and it went the other way: **Migne really does print
   `VESS.`** for `VERS.`, and our TEI has silently corrected him. Still **no marker**: same Pattern 9
   ruling, same reason. Patch, no `[sic:]`. ⚑ Recording both directions together is the point —
   *neither "trust the text" nor "suspect the transcriber" is a rule.*
4. ⛔ **The unmatched `(` at 1050A.** Our TEI reads `Nutritus in lacte (quod est Verbum caro factum`
   with no closing parenthesis anywhere in the sentence — a textbook "Migne lost a bracket". **The
   plate has no parenthesis at all.** CC inserted it, exactly as it inserted one at 0936D. The
   English is written without one.
5. ⛔ **`quorum uterque in tabernaculis legitur habitasse` @1042D** — `uterque` after a sentence
   naming Ismael, Agar and Sara looked like a numeral defect. It is not: the antecedent is the pair
   Agar/Sara that the preceding clause contrasts. Read as printed, no marker.
6. ⛔ **`Non gentes, quia non omnes credunt` @1046B** — flagged as a possibly dropped word (`Non
   [omnes] gentes`). Migne prints exactly this, and the following clause *supplies* the sense he
   left implicit. **Supplying it in the English would pre-empt his own next words.** Rendered
   "Not the Gentiles, because not all believe."
7. ⛔ **`(Matth. XVIII)` @1047D for *Excutite pulverem de pedibus vestris*, which is Mt 10:14.**
   Migne's citation is wrong. **No `[var:]`**: Pattern 14 marks divergent *scripture text*, and the
   quoted words agree with Mt 10:14 verbatim. A wrong locus is Migne's, is left standing, and — per
   the 0971A precedent — would need a `citation-corrections.json` entry, not a marker, if it were
   ever repaired. Same ruling for `(Isa. XXI)` at 1045C, which points at Is 2:2.

### 5a. ⛔ WITHHELD, NOT DECLINED — two real divergences the clipped column will not let me fire
At **1045C** Migne quotes Isaias twice, and both quotations diverge from the Vulgate:
`Et erit in ea murus, et antemurale` against Is 26:1 *salvator ponetur in ea murus et antemurale*,
and `Erit in novissimis diebus mons in vertice` against Is 2:2 *praeparatus mons domus Domini in
vertice montium*. **Both open on a clipped line** — the plate line begins `ea murus, et antemurale`
and `vertice (Isa. XXI), etc.` — so `Et erit in` and `mons in`, the exact words that carry the
divergence, are in the lost margin. **The markers are withheld and logged for a second copy
(Gallica, f528), not fired and not quietly dropped.** A withheld marker leaves no artifact unless
somebody writes it down; this is the writing down.

---

## §6 · THE DIVERGENCE LIST — every scripture quotation in the range, the clean ones included

### 6a. Divergent, marker FIRED (6) — listed in §3.

### 6b. Divergent, marker DECLINED, with the reason
- **`Qui dederit calicem aquae frigidae, non perdet mercedem` @1046D** (Mt 10:42 *quicumque potum
  dederit uni ex minimis istis calicem aquae frigidae … non perdet mercedem suam*). Declined:
  it stands **inside an `usque ad` splice**, so the shortening is Migne's own abridgment formula
  doing its work, not a divergent text.
- **`quia superbis resistit, humilibus dat gratiam` @1050B** (Jas 4:6 / 1 Pt 5:5, *Deus superbis
  resistit, humilibus autem dat gratiam*). Declined: subject and `autem` dropped by abridgment,
  inside a splice; the sense is untouched.
- **`Quaesivi bona tibi propter domum Domini Dei nostri` @1044A** (Ps 121:9, same words in the other
  order). Declined: Migne inverts the clause **in order to exhibit it as the exposition of the
  preceding verse**, which is precisely what the surrounding gloss says he is doing.
- **`Quid tibi detur, aut quid apponatur?` @1042B** (Ps 119:3 *Quid detur tibi, aut quid apponatur
  tibi*). Declined: Migne re-quotes his own lemma with the pronoun fronted, four words after
  printing it in the Vulgate order as the lemma proper. The gloss's point is the two verbs.
- **`longe a me fecerunt injustitiam suam` @1048D.** Not a divergence at all: **Migne labels it
  `Alias`**, his own variant-reading siglum.
- **`A Domino factum est ei` @1040D.** Same: labelled `secundum aliam litteram`.
- **`Ingressus confitebor` @1040B** (Ps 117:19 *ingressus in eas confitebor Domino*). Declined: it is
  a **stump**, not a divergence — and rendered as a stump, "*Having entered I will confess.*"

### 6c. Collated and found to AGREE with the Clementine — the checked negatives
`Nemo venit ad Patrem, nisi per me` (Jn 14:6) · `postula a me, et dabo tibi gentes haereditatem
tuam` (Ps 2:8) · `Excutite pulverem de pedibus vestris` (Mt 10:14, the *text* clean, the *locus*
wrong) · `Beati qui lugent` (Mt 5:5) · `extrema gaudii luctus occupat` (Prov 14:13) · `Benedictio
Domini super vos. Benediximus vobis in nomine` (Ps 128:8) · `Fiant sicut fenum tectorum` (Ps 128:6)
· `Et ipse redimet Israel ex omnibus iniquitatibus ejus` (Ps 129:8) · `Quia apud te propitiatio est`
(Ps 129:4) · `Domine, libera animam meam a labiis iniquis` (Ps 119:2, abridged, no divergence) ·
`Aquam intolerabilem` (Ps 123:5) · `cum exsultatione portantes manipulos suos` (Ps 125:6) ·
`Beati omnes qui timent Dominum` (Ps 127:1) · `Ecce dimidium` (Lk 19:8) · `Speret Israel in Domino`
(Ps 129:6) · `Sicut ablactatus est` (Ps 130:2) · `Neque ambulavi` (Ps 130:1) · `Ecce sicut oculi`
(Ps 122:2) · `Montes in circuitu` (Ps 124:2) · `Pax super Israel` (Ps 124:5).

### 6d. The verse numbering was checked, not assumed
Every `VERS. n.--` in my range was resolved against the Clementine's own versification for the psalm
named in the head. **All agree; no psalm number in my range needs converting, and none was.** Migne
skips verses he does not gloss (Ps CXVII runs 14 → 17 → 18; Ps CXXIV runs 3 → 4 → 5 with no 6) —
**that is non-glossing, not misnumbering**, the same pattern the 0847A read found in Psalm II.

---

## §7 · THE RULED AXES — what my range actually did with each

| axis | my range |
|---|---|
| **`Canticum graduum` → "A canticle of degrees"** | **14 occurrences, 14 so rendered, zero rivals.** Plus one bare `Canticum.` @1045B rendered as the stump. |
| **`gradus`/`gradibus` → "degree"** | **14 occurrences, 14 so rendered.** The ordinal series *Sextus … Duodecimus* is unbroken in the English. |
| **`usque ad`** | **50 occurrences. 48 formula, 2 not** — and the two are the same phrase, `usque ad fines terrae`, twice at 1047D, neither preceded by an `etc.`; both rendered by sense, "unto the ends of the earth". The §A7 test decided every one of the 50 mechanically; italic membership would have mis-called both non-formula cases, since both sit **outside** the italic. |
| `gentes` family | **10 occurrences**: `gentes` 5, `gentium` 4, adjectival `gentile` 1. Rendered **Gentiles 7 · Gentile (adj., `mancipium gentile` @1042A) 1 · nations 2**. The two "nations" are the sites where the word is not opposed to the Jews but simply means the peoples of the earth — Ps 117:10 `Omnes gentes` and the Mt 25:32 judgment scene @1045D; everywhere else the Jews are the named other half (`de duobus parietibus Judaeorum et gentium`) and "Gentiles" is the only rendering that keeps the antithesis. Decided per site, as the axis intends. **No singular `gens` in a non-ethnic metaphor occurs in my range**, so §A5's named exception is not engaged. |
| `mysterium`/`sacramentum` | **mystery 0 · sacrament 1** (`sacramentum corporis et sanguinis` @1041B). No bleed. |
| `daemonium`/`diabolus` | **demon 0 · devil 4** (`diabolus` ×4, no `daemonium` in the range). |
| `turba`/`multitudo` | **zero occurrences of either.** The instrument was checked, not assumed: these are gradual psalms, and the Gospel crowds are simply absent — as they were in Bands A and B. |
| `Diapsalma` | **zero occurrences.** Not engaged. |
| `In finem` | **zero occurrences** — the gradual psalms carry `Canticum graduum` in that slot. Not engaged. |
| `Psalmus David` / `Psalmus ipsi David` | **zero occurrences.** Not engaged. |
| `Dominus virtutum` | **zero occurrences.** Not engaged. |
| **`sedes` → "seat"** | **one occurrence**, the lemma `*Sedes.*` @1043C (Ps 121:5), rendered "*Seats.*" — plural, because the Vulgate's `sederunt sedes in judicio` is plural and the gloss expounds it as `justi`. **Not "thrones"**, per §A5. |
| **archaism** | Both memberships checked, not italics alone. 12 `-eth` forms, **all inside italic lemmata** (`keepeth` ×4, `cometh`, `contemneth`, `proceedeth`, `defileth`, `resisteth`, `giveth`, `soweth`, `taketh`); **zero in gloss voice.** ⚑ **The check earned its keep**: a thirteenth, "he that **cometh** in his own name" @1041A, stood in Migne's ROMAN type — an echo of Jn 5:43 that the plate does not mark as quotation — and was changed to "comes". No `« »` guillemets occur anywhere in my range, so the second membership is not engaged. |
| **em-dashes** | **zero across all five chunks.** |

---

## §8 · CRUCES — passages rendered literally, with the difficulty named

1. ⭐ **`Nesciente Judae rem omnium fecerunt` @1039D–1040A.** Our twin reads `Nescientes Judaei`, a
   clean plural subject for `fecerunt`. **The plate reads `Nesciente Judae`** — two letters changed
   in two words, unambiguous at 900 dpi. It is an ablative absolute leaving `fecerunt` with an
   implicit subject, which is harder Latin but not impossible Latin. Rendered from the plate:
   "**Judah not knowing, they made God, by his passion, the concern of all**". ⚑ I record this
   because the twin's reading is the *easier* one and the temptation to prefer it is exactly what
   §A6 exists to forbid.
2. **`unde non: Quod procedit de ore, inquinat` @1046B.** The `non` governs a quotation that follows
   it and is not itself negated — Augustine is denying that the *mouth of the flesh* is meant, and
   his next words say so (`Non de ore carnis, sed cordis`). **The negative is carried in the English
   at the place Migne prints it** ("whence not:"), not smoothed into the quotation and not dropped.
   This is the one negation in my range that a fluent English would silently lose.
3. **`Heu mihi` @1042C and `Hei mihi` @1042B, 1042C.** Migne prints both spellings of one
   interjection, one as the lemma and two in the gloss. **Both are rendered "Woe is me."** Forcing a
   distinction in English would *invent* one: the spellings are orthographic and the gloss treats
   them as the same cry. Recorded rather than marked.
4. **`Labores manuum.` @1048A against `Labores manuum tuarum.` @1048A.** ⭐ Migne prints the head
   lemma SHORT and the second lemma FULL, and **the gloss between them exists to point at exactly
   that difference** (*a pluribus coepit … sed quia omnes unum sunt in Christo singulariter,
   sequitur*). Rendered "*The labours of the hands*" and "*The labours of thy hands*" respectively.
   **Completing the first from the Vulgate would have deleted the observation it introduces** — the
   0965B `Oculi mei` case, recurring.
5. **`Domine, non est.` @1050A** (Ps 130:1, *Domine, non est exaltatum cor meum*). Rendered as the
   stump, "*Lord, it is not.*" — awkward English, and deliberately so.
6. **`sed quia et labore cum gaudio sumuntur propter spem` @1048A.** The plate's `labore` (ablative
   singular) leaves `sumuntur` without an expressed subject, which must be carried over from the
   lemma `Labores`. Rendered "they are taken up with joy even in the labour"; our twin's `labores`
   would give the smoother "the labours too are taken up with joy". **The plate governs and the
   strain is recorded** rather than repaired.
7. **`sic revelabit Deus quod aliter sapit` @1050B.** Phil 3:15 is behind it (*si quid aliter
   sapitis, et hoc vobis Deus revelabit*), but Migne prints no `vobis` and no `hoc`. Rendered
   "so shall God reveal that wherein he is otherwise minded" — third person, as printed.
8. **`Speret vigilia matutina, qui non aliud a Deo quam immortalitatem speret` @1049D.** `vigilia
   matutina` is read as ablative of time with the masculine `qui` as subject: "Let him hope in the
   morning watch, who hopes for nothing else from God than immortality." A nominative reading ("let
   the morning watch hope") is grammatically open and would **reassign the subject**, which is the
   §F8 class with no grep signature; the ablative is preferred because `A custodia matutina` is the
   lemma two lines below and is unambiguously a time phrase. Both readings recorded.
9. **`ne quis tamen putet iniquitatem juxta justitiam` @1048D.** Rendered "lest any suppose iniquity
   to stand beside justice." `juxta` is spatial here and the whole gloss is about distance
   (`longe est a me`); "according to" would collapse the figure.

---

## §9 · SECTIONS READ CLEAN, and what I checked in them

⚑ **A logged column is not a checked column**, so this names the check, not the looking.

- **1042A–1042D (Ps CXIX, the first gradual psalm).** Collated word by word against the plate:
  agrees at every word. Checked specifically: the `Deut. XII` citation (Migne's; Dt 21:12 is the
  locus, left standing), the `Cedar`/`Agar`/`Sara` genealogy for a reassigned antecedent, and the
  Mt 13:26 quotation for 7a″ conformation.
- **1043A–1043B (Ps CXX).** Checked for dropped negation: `Neque dormitet` · `Ecce non dormitabit` ·
  `sol non uret te, neque luna` · `nihil nocebit` — **five negatives, five carried.**
- **1049A–1049B (Ps CXXVIII, close).** Checked the four `Et non dixerunt` lemmata against each other
  and against Ps 128:8: all four identical in Latin, all four rendered identically in English, and
  none completed from the Vulgate's `benedictio Domini super vos`.
- **1050A–1050B (Ps CXXX, my last column).** Checked every subject in the `Exaltavi, ut haeretici`
  sentence, a chain of five verbs with the subject carried across a relative and a `cum` clause;
  the antecedent stays "the heretics" throughout in the English.

---

## §10 · HANDOFF

1. ⛔ **Nine markers stand unlocked behind the patch pass** (§4), and **four of them carry an English
   edit that must land in the same commit**. Both are itemised, site by site, in
   `data/briefs/8967-PENDING-TEI-PATCHES.md` under `BAND C — stint 0087–0091`.
2. ⚑ **Col 1041 is a newly found clipped column** and belongs on the known-clipped list beside
   841, 849, 893, 897, 1045. **1049 is ≡ 1 (mod 4) and is clean** — a thirteenth counter-example.
3. **Two Gallica sites added, both on one leaf (f528, col 1045C)**: the Is 26:1 and Is 2:2
   quotations, whose divergent opening words are in the clipped margin. That brings the work-wide
   open list to seven.
4. **The Psalm CXVIII sentence needs one editorial decision that is not mine**: whether the
   `[glossa]`, `[Exp]`, `[omitti]`, `[ration]` recovered from the clipped margin should carry an
   `[ed:]` in the English. I have not marked them — the line-structure fixes each word beyond doubt
   (13a) — but this is the single most quotable line in the work and Wilson may want the margin's
   condition visible. **Flagged, not decided.**
5. ⚑ **`et quibus` @1041D will look like a defect to the next reader** and should not be "fixed"
   twice: it is Migne's, confirmed by the plate and independently by the scan's own OCR layer, and
   the English already renders it.
