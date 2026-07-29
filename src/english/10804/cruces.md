# Cruces — 10804, Bruno of Segni, *Expositio in Cantica canticorum* (PL 164, 1233–1288B)

Merged from two agent batches (chunks 0000–0008 and 0009–0016), 2026-07-28.
**This is the corpus's FIRST Song of Songs commentary; fifteen more follow it, so
the choices recorded here are precedent for all of them.**

## Work-wide conventions (reconciled at merge)

- ***amica mea* → "my friend"**, NOT "my beloved" (11 instances converted in the
  first half at merge). Decisive evidence: Bruno lists *dilectus meus, sponsus
  meus, amicus meus* in a single phrase, so *amicus/amica* and *dilectus/dilecta*
  cannot share one English word — *dilecta* occurs 13× and owns "beloved". At
  1269C the Song's own word is masculine *amicus* and Bruno glosses it with John
  15:13 (*Vere utique amicus, quoniam propter eam sanguinem fudit*); the peroration
  at 1285C turns on *amicum / amicitiam / amicis*. The verse at 1240-ish
  (*Dulcis amica*) went to "Sweet friend" in the same pass.
- **Two words kept in italic Latin because Bruno glosses them etymologically:**
  ***murenulae*** (named from the fish *murena*) and ***ferculum*** (glossed as a
  banqueting table, not a litter). Same principle as *stylus*/*epistylium* in
  11551: where the gloss IS the etymology, an English word that shares no root
  makes the gloss explain nothing.
- Fixed lemma vocabulary: pulcher=beautiful, formosus=comely, deformis=uncomely,
  speciosus=fair, niger=black, fuscus=swarthy · caprea=roe, capra=goat,
  hircus=he-goat, haedus=kid · guttur=throat, fauces=palate · paries=wall vs
  maceria=enclosure wall · coma=locks, capilli=hair, cincinnus=ringlet ·
  aemulatio=jealousy vs zelus=zeal · charitas=charity, dilectio/amor=love ·
  mala punica = mala granata = pomegranates. Full tables below.

## OPEN — a convention question for the whole Song campaign (Wilson)

***murenulae* is a KNOWING divergence from 10379** (Robert of Tombelaine, already
live), which renders the same lemma "chains of gold". Sixteen commentaries on one
book will keep colliding this way, so the rule is worth settling once:
- Where the printed Latin DIFFERS between commentaries, the English must differ —
  scripture policy is locked (translate what Migne prints, never substitute).
- Where a commentator GLOSSES the word, the Latin stands and the divergence is
  noted — already settled by the *stylus*/*epistylium* precedent.
- **Undecided: where the printed Latin is identical and no gloss depends on it.**
  Harmonizing makes the sixteen read as one edition; not harmonizing makes a
  reader comparing two commentaries on one verse see two different Songs.
Flagged, deliberately NOT harmonized in either direction pending a ruling.

Agent A batch: `src/english/10804/0000.md` … `0008.md` (cols 1233–1262B).
Chunks 0009–0016 were translated concurrently by a second agent; this file covers
only the first nine. Merge with that agent's cruces file afterwards.

**This is the corpus's first Song of Songs commentary translated in full** (Robert
of Tombelaine, 10379, is a partial precedent). The conventions below are stated
explicitly so that the second half of this work — and the fifteen further Song
commentaries that follow — can be held to the same words.

---

## 1. Governing conventions set here

### 1.1 Lemmata
Every lemma of the Song is translated **from the Latin Migne prints**, never
substituted from Douay, KJV, or any other English version (`translation-style.md`,
Scripture section). Where Bruno's gloss turns on a particular word of the lemma,
the English of the lemma carries a word the reader can find again in the gloss —
this is the single hardest constraint in a lemma-and-gloss commentary and it
drove most of the terminology decisions below.

Worked examples of the constraint biting:
- *guttur* (1244D) → **throat**, so that « his fruit was sweet to my **throat** »
  is findable when the verse recurs in the 1246C verses (« Apples sweet to my
  **throat** »).
- *aspiret dies* (1250A, 1257C) → « till the day **breathe** », not "break",
  because the gloss reads *Dies enim tunc aspirabit* — "the day will then
  **breathe**".
- *media charitate* (1254C) → « he paved it with charity **in the midst** »,
  because the gloss lands on *salutem in medio terrae operatus est*.
- *emissiones* (1260B) → « thy **sendings forth** », awkward but necessary: the
  gloss is *quos hic hortus … Domino **mittit**? Mala … **mittit***. "Plants"
  (Douay) or "shoots" would silently kill the pun.
- *media/medium*, *candidatio*, *acervus testimonii*, *fons haedi*, *pacificus*,
  *domus Dei* — Bruno's Hebrew etymologies are kept in italics exactly as Migne
  italicizes them.

### 1.2 Pattern 4 does NOT apply
This is a lemma-and-gloss commentary, not a florilegium. No `[f: …]` tags were
added, per the standing ruling. All source references here are Migne's `[n: …]`
notes and pass through verbatim.

### 1.3 Pattern 14 — no `[nt: …]` in this batch
Every one of the 81 `[n: …]` notes in chunks 0000–0008 is a bare scripture
locator (`(Joan. VII, 10)`, `(Psal. XXII, 5.)`). None is editorial prose. All
stay `[n: …]`.

### 1.4 Column anchors
**This work's first anchor is band-less: `[1233]`.** It is reproduced exactly as
printed; no `A` was added. Every other anchor in this batch carries a band
letter. Anchor sequences were diffed la↔en for all nine chunks: identical, in
order, 1:1. Band arithmetic was not performed and no gap is claimed (known
false-positive class 1).

### 1.5 Verse interludes
Bruno breaks his prose with rhymed Latin verses eight times in this batch
(1239C, 1241A, 1244B, 1246C, 1249C, 1252A, 1252D, 1255B, 1262A). The TEI carries
them as hard line breaks inside a paragraph. **Line structure is mirrored 1:1** —
same number of lines, English clause order bent where necessary to keep each
Latin line's content on its own English line. The rubric word is translated as
Migne punctuates it: `Versus:` → `Verses:`, `Versus.` → `Verses.`,
`Item versus:` → `Likewise verses:`, `Versus Scir Hascirim.` → `Verses of Scir
Hascirim.` (the transliterated Hebrew title is left verbatim).

### 1.6 Speaker rubrics
Migne's rubrics are followed exactly and none is supplied. They are inconsistent
in the plate and were left inconsistent: `Vox Ecclesiae` appears over speeches
that are plainly the Bridegroom's (1242D « Oculi tui columbarum », 1243A), and
`Vox synagogae` / `Vox Synagogae` alternate case (1237A, 1238A). **No speaker
label was added, corrected, or normalized.** Rubric renderings, fixed:
- *Vox X* → **The voice of X** · *Vox Ecclesiae ad Christum* → *The voice of the
  Church to Christ* · *Vox amicorum* → *The voice of the friends* ·
  *Vox adversus haereses* → *The voice against heresies*
- *Apostropha.* → **Apostrophe.** · *Mutatio personae.* → **Change of person.** ·
  *Confirmatio.* / *Confirmatio est.* → **Confirmation.** / **It is a
  confirmation.** · *Metonymia est.* → **It is a metonymy.**
- *Adolescentulae ad sponsam* → *The young maidens to the bride* ·
  *Sponsus ad fideles animas* → *The Bridegroom to faithful souls* ·
  *Ecclesia.* (bare, 1253C) → *The Church.*

### 1.7 Heads
`CAPUT PRIMUM.` → `CHAPTER ONE.`, `CAPUT II./III./IV.` → `CHAPTER II./III./IV.`
(matching existing corpus practice). `(cont.)` is carried untranslated. The work
title head `Expositio in Cantica canticorum` → `Exposition on the Song of Songs`.

---

## 2. Fixed terminology — hold the second half to these

**Persons and roles**
| Latin | English |
|---|---|
| sponsa | bride |
| sponsus | Bridegroom (capitalized when Christ; lower when the human figure of a simile) |
| dilectus / dilecta | beloved |
| amica mea | my beloved |
| adolescentulae | the young maidens |
| filiae Jerusalem / Sion | daughters of Jerusalem / of Sion |
| sodales | companions |
| doctores | doctors |
| praepositi | prelates |
| vigiles | watchmen |
| Ecclesia gentium | the Church of the Gentiles |
| Synagoga | the Synagogue |

**Beauty vocabulary** (the cluster most at risk of drift — Bruno pairs these
against each other constantly)
| Latin | English |
|---|---|
| pulcher / pulchritudo | beautiful / beauty |
| formosus | comely |
| deformis | uncomely |
| speciosus | fair |
| decorus / decor | comely / comeliness |
| niger / nigredo | black / blackness |
| fuscus / decolorare | swarthy / to discolor |
| candidatio / dealbatus | whitening / made white |

**Animals and plants**
| Latin | English |
|---|---|
| caprea | roe |
| capra | goat |
| hircus | he-goat |
| haedus | kid |
| agnus | lamb |
| cervus / hinnulus cervorum | hart / fawn of harts |
| turtur | turtledove |
| columba | dove |
| vulpes | fox |
| malum (tree) / mala (fruit) | apple tree / apples |
| malum punicum | pomegranate |
| grossi | green figs |
| botrus | cluster |
| racemus | cluster |
| lilium / spina / tribulus | lily / thorn / brier |

**Things**
| Latin | English |
|---|---|
| unguentum | ointment |
| aromata | spices |
| pigmenta | perfumes / spices |
| thus | frankincense |
| nardus | nard |
| cyprus (plant, 1260C) | cyprus |
| Cyprus (island, 1242A) | Cyprus |
| uber | breast |
| mamma | breast |
| guttur | throat |
| fauces | palate |
| collum | neck |
| gena | cheek |
| crinis / capillus | hair (crinis = "hair" as strands; capillus = "hair") |
| monile | necklace |
| cellarium / cella vinaria | storeroom / wine cellar |
| lectulus | little bed |
| paries | wall |
| maceria | enclosure wall |
| laquearia | panelled ceilings |
| clypeus | shield |
| propugnacula | bulwarks |
| vitta coccinea | scarlet fillet |
| reclinatorium | resting-place |
| ascensus purpureus | ascent of purple |
| favus | honeycomb |
| sol justitiae | the sun of justice |
| Holy Scripture / the Scriptures | (Pattern 3 — capitalized throughout) |

**Two words deliberately left in italic Latin** (no clean English equivalent, and
Bruno glosses them etymologically):

- ***murenulae*** (1240D–1241A, Song 1:10). Bruno's gloss is *a pisce murena ita
  nuncupatae* — "so named from the fish *murena*." "Chains of gold" (which is what
  10379/0002 used for the same lemma) makes that gloss unintelligible. Kept Latin
  in both lemma and gloss; *murena* likewise. **This is a knowing divergence from
  10379** and should be harmonized deliberately, in one direction, when the Song
  commentaries are swept — not silently.
- ***ferculum*** (1253C–1254A, Song 3:9). Douay reads "litter"; Bruno reads it as
  a banqueting table — *hoc ferculum, hoc refectorium, hanc sacrae epulationis
  domum*, and *in hoc ferculo qui resident*. No single English word carries both
  the litter and the course-of-a-meal sense the gloss depends on.

---

## 3. Carried type — Pattern 7 / 10 / 12 (`[sic: …]`)

Seven runs are non-word type and are carried into the English untranslated, in
italics, marked `[sic: …]`. All seven were checked as verbatim substrings of the
Latin twin.

| Col | Chunk | Printed | Almost certainly | Note |
|---|---|---|---|---|
| 1240A | 0001 | *caparrum* | *caprarum* | *gregumque caparrum, et hircorum vestigia*. Non-word. |
| 1240A | 0001 | *Eeclesia* | *Ecclesia* | *Ei autem Eeclesia assimilatur*. Compositor's `e` for `c`. |
| 1240D | 0001 | *dictinctos* | *distinctos* | *sermones prophetarum prolixos, et dictinctos*. Transposed letters. |
| 1242C | 0002 | *Ecelesia* | *Ecclesia* | *cum et Christus pro Ecelesia*. A **second, differently-broken** spelling of the same word two columns after *Eeclesia* — evidence of type damage in this gathering, not a single slip. |
| 1246A | 0003 | *beatitudiuem* | *beatitudinem* | *Pro dextera autem summam illam beatitudiuem*. `u` for `n`, the classic inverted sort. |
| 1252C | 0005 | *inhujus* | *in hujus* | *Sic inhujus adventu delector*. Run-together, Pattern 10. |
| 1255B | 0006 | *Sio* | *Sic* | *Sio circumdat, ut corona prudentium militum*, in verse. |

Four of the seven (*Eeclesia*, *Ecelesia*, *beatitudiuem*, *Sio*) are the same
mechanical class — a single wrong or inverted sort — and they cluster in cols
1240–1255. Worth a human eye if the plate is ever consulted: this looks like one
damaged case, not seven independent errors.

---

## 4. Rendered literally, NOT marked — Pattern 7, real words wrongly printed

These are real Latin words that can be, and were, put into English. The English
on the page is ours, so no `[sic: …]` (Pattern 12's operational test). The
conjecture lives here.

1. **1238A, chunk 0000 — a dropped negative.** *Mihi, inquit, quietudinis fuit
   facultas, quoniam necessaria parare, et contra hostes pugnare necesse erat.*
   Rendered "There was for me, she says, opportunity of rest, since it was
   necessary to prepare what was needful and to fight against enemies." The
   printed sentence asserts the opposite of what the *quoniam* clause requires;
   *Nulla mihi* or *Non mihi* is near-certain. **Not emended** — this is exactly
   the class Pattern 7 exists to expose. **Worth a human's eye.**

2. **1254A, chunk 0005 — *pennae columnae*.** *Hi sunt illae pennae columnae,
   quae deargentatae esse dicuntur.* The allusion is Ps 67:14, *pennae columbae
   deargentatae* — "the wings of a **dove** covered with silver." Migne prints
   *columnae*, "of the **column**," which is not nonsense here (the sentence is
   about pillars, *columnae argenteae*) and may even be a deliberate pun; but the
   scripture it quotes has *columbae*. Rendered "those feathers of the **pillar**."
   **Worth a human's eye** — it is genuinely ambiguous whether this is Migne's
   typo or Bruno's wordplay.

3. **1260B, chunk 0008 — *lignum vetitum*.** *Habemus et lignum vetitum; id est
   Christum, qui est panis vivus.* "We have also the **forbidden** tree, that is,
   Christ." The argument requires *lignum vitae*, the tree of life — Bruno has
   just named the tree of the knowledge of good and evil and is completing the
   Genesis pair. Rendered as printed. **Worth a human's eye:** a reader will
   assume this is our error.

4. **1257A, chunk 0007 — *confidentes* for *confitentes*.** *qui coram et in
   faciem Christum confidentes pro eo mortui sunt* — "who, **trusting in** Christ
   openly and to his face, died for him." Of martyrs, *confitentes* ("confessing")
   is expected and *coram et in faciem* points hard at it. Rendered as printed.

5. **1251B, chunk 0005 — an unconstruable clause.** *In hoc enim custodum cura
   circumdatur, quae non ipsa eos. verum etiam ipsi eam invenisse dicuntur.* The
   relative *quae* has no antecedent it agrees with, *dicuntur* is plural against
   a singular subject, and **Migne prints a full stop after *eos*** in the middle
   of the *non … verum etiam* correlative. Rendered as closely as the printed
   words allow ("For in this the care of the guardians is set about her, who not
   she them. but they also are said to have found her"), with the stop preserved
   per Pattern 8. **Worth a human's eye — this is the least readable sentence in
   the batch.**

6. **1236A, chunk 0000 — anacoluthon.** *Post se namque Christus eos trahit,
   quicunque eum imitantur, ut qui ipsius imperio super coelos exaltantur:* — the
   *ut qui* clause has no main verb before the colon. Rendered literally; not
   patched.

7. **1242C, chunk 0001 — *Tristis enim dixit morte*** (in the *Scir Hascirim*
   verses). Unconstruable as printed; the line is quoting Matt 26:38, *Tristis est
   anima mea usque ad mortem*, and has evidently lost words. Rendered "For he said
   sorrowful with death." **Not** an `[ed: …]` case: the loss is Migne's or the
   poet's metre, not a demonstrated hole in the digitization.

8. **1251C, chunk 0005 — *inveni quem diligit anima*** (no *mea*). Rendered "I
   found him whom the soul loveth"; the same lemma has *anima mea* four lines
   earlier and again at 1251C.

9. **1258C/1252A — *hinnulli*** for *hinnuli* (1257C). Doubled `l`; treated as a
   Pattern 9 orthographic variant, translated normally ("fawns"), **no marker**.
   Flagged here only so a later sweep does not churn it.

10. **1238B–1247A — number/gender mismatches with no English exponent** (Pattern
    9, no action possible): *His autem fragrant … et novum et vetus testamentum*
    (1235A, plural verb, singular subject); *si tui oblita, tuae nobilitatis
    immemores* (1239C, singular participle then plural adjective of one addressee);
    *quod deformia … concupiscunt* for *quae* (1237B). Left alone.

---

## 5. Quotation marks — Pattern 5 / 6 cruces

Guillemet counts were verified body-to-body against the Latin twin for all nine
chunks and match exactly (0000 30«/32», 0001 30«/28», 0002 9/9, 0003 32/32,
0004 38«/39», 0005 40«/38», 0006 5/5, 0007 40/40, 0008 23/23). The imbalances
are Migne's and are reproduced. Each is itemized:

1. **1237D, chunk 0000 — a lemma bounded by two closers.** Migne prints
   `… subtilius cogitet. » Quia decoloravit me sol. »` The lemma *Quia decoloravit
   me sol* is opened with `»`, not `«`, and the preceding `»` closes nothing. Both
   are reproduced in place. This is the source of chunk 0000's two surplus `»`.

2. **1242A, chunk 0001 — a closer set as an opener.** `« Tristis est anima mea
   usque ad mortem? « [n: (Matth. XXVI, 38.)]` — the closing mark is `«`.
   Reproduced. Note also that the `?` closes what is, in Bruno's sentence, a
   statement inside a question (*Nonne … portabat fasciculum, cum diceret*);
   preserved per Pattern 8.

3. **1254B, chunk 0005 — the same defect.** `« Ascensum purpureum. «` Reproduced.
   Together with (2) these account for chunk 0005's and 0001's surplus openers.

4. **1249C, chunk 0004 — a stray closer plus a mid-phrase opener.** Migne prints
   `… destruunt et dissipant. » Nam vinea « nostra floruit. »` The first `»`
   closes nothing; the `«` opens *between* *vinea* and *nostra*, splitting a
   two-word phrase. **Position note:** English word order cannot put an opening
   mark between "vine" and "our," so the English reads *For the vine « of ours
   hath flourished. »* — the mark stays after the word that renders *vinea*, at
   the cost of a stilted phrase. This is the only place in the batch where a
   guillemet's position is approximate rather than exact. Count is unaffected.

5. **1251D, chunk 0005 — a closer with no terminal stop.** `« Relinquetur vobis
   domus vestra deserta [n: (Matth. XXIII, 38)] »` — no period inside. Preserved.

6. **1253A, chunk 0005 — same.** `« Ipse autem est pax nostra, qui fecit utraque
   unum [n: (Ephes. II, 14)] »`.

7. **Mid-sentence closers that are correct and merely look odd:** 1256C
   `« Et sterilis non est » inter eas`; 1261A `« Cum omnibus primis » et maximis
   « unguentis, »`; 1258B `Ter autem dixit « veni, »`; 1240B `Dixerat enim « ne
   vagari incipiam. »`. All reproduced 1:1. Not defects.

**No straight quotes (`" "`) were supplied anywhere in this batch.** Every
quotation mark on these nine pages is one Migne prints.

---

## 6. Punctuation preserved against the grain — Pattern 8

Reproduced exactly, all of them mid-sentence full stops or missing stops that an
editor would silently mend:

- **1240B (0001)** *… in curribus Pharaonis Ei autem Eeclesia assimilatur* — no
  stop after *Pharaonis*, and *Ei* capitalized. English: "…of Pharao And the
  [sic: *Eeclesia*] is likened to it".
- **1240A (0001)** `» si te, inquit, ignoraveris` — lowercase *si* opening a
  sentence after a closing guillemet. English keeps the lowercase "if".
- **1251A (0005)** *quatenus eum inveniam « Invenerunt me vigiles* — no stop
  before the next lemma.
- **1251B (0005)** the full stop inside *non ipsa eos. verum etiam* — see §4.5.
- **1253C (0005)** *hoc refectorium. hanc sacrae epulationis domum* — stop, then
  lowercase *hanc*.
- **1257D (0007)** `« Et inclinentur umbrae. » fugiatque caligo` — lowercase
  after the closer.
- **1248C (0004), verse 3** *Celat, ut Judaeus dicat. Non est Deus.* — the stop
  after *dicat* breaks the very clause it introduces. English: "Hides, so that
  the Jew may say. He is not God."
- **1249C (0004) and 1255B (0006), verses** — several verse lines carry no
  terminal punctuation at all. None was supplied.

---

## 7. References — deliberately NOT corrected

Per the standing rule, printed references pass through verbatim and nothing here
was "fixed":

- **1234C/1235A (0000)** `[n: (Joan. VII, 10)]` for *Non ego te condemnabo* —
  the verse is John 8:11.
- **1239B (0001)** `[n: (Cor. III, 16.)]` — no book numeral; and
  `[n: (Isa, LVI, 2.)]` with a comma for the stop after *Isa*, and pointing at
  Isa 66:2.
- **1251D (0005)** `[n: (Rom. XV, 25)]` for *Cum autem plenitudo gentium
  introierit* — the verse is Rom 11:25. Note that 1259A quotes the neighbouring
  Rom 11:25 and is cited correctly there, which makes the 1251D form look like a
  numeral slip; **still not corrected.**
- **1249B (0004)** `[n: (Exod. XXXIII, 15)]` attached to the Song lemma *Ostende
  mihi faciem tuam* — a cross-reference, not a mis-citation of the lemma.
- **1241C (0001)** `[n: (Ps. CXL)]` — chapter only, no verse.
- **1247B (0003)** `[n: (Psal. LXXXVIII.)]` — chapter only.

---

## 8. Nothing was patched, and nothing needed `[ed: …]`

No `data/tei-patches/10804.json` entry is proposed. The TEI transform of these
nine chunks shows no empty elements, no swallowed running text inside `<note>`,
and no lost list items. Every defect found is Migne's, and every one is handled
above by Pattern 7/8/10/12. No `[ed: …]` marker appears in this batch.

---

## 9. Verification performed

For each of 0000–0008, body-to-body against the Latin twin:

- frontmatter byte-identical (17 lines, copied verbatim) — **9/9**
- column-anchor sequence identical and in order — **9/9**
- `[n: …]` count identical, order identical, contents untranslated — **9/9**,
  81 notes total, matching every chunk's `noteCount`
- `## ` head count 1:1 — **9/9**
- guillemet counts `«` and `»` identical to the twin — **9/9**
- `[sic: …]` contents verified as verbatim substrings of the Latin twin — **7/7**
- no `[f: …]`, no `[d: …]`, no `[nt: …]`, no `[ed: …]`, no supplied `" "`
- English/Latin word ratio 1.44–1.53× (register target ~1.5×)

Agent B batch: `src/english/10804/0009.md` … `0016.md` (cols 1262C–1288B,
CAPUT V–VIII). Chunks 0000–0008 were translated concurrently by a second agent;
its cruces file is `cruces-0000.md`. **Merge the two.**

`cruces-0000.md` was written while this batch was in progress and was read before
this file was closed. Its §1 conventions and §2 terminology table were adopted
retroactively across all eight chunks here (see §2 below for the sweep that was
run, and §3 for the one deliberate divergence).

---

## 1. Conventions confirmed for this half

All of `cruces-0000.md` §1 holds here and is not restated. Additions and
confirmations specific to CAPUT V–VIII:

### 1.1 Lemmata — the gloss must be findable
Every Song lemma is translated from Migne's Latin, never substituted. Places
where the gloss forced the English word in this batch:

- *guttur* (1269B, 1280B) → **throat**, matching 0000–0008's fixed choice. Bruno
  glosses it twice (« His **throat** is most sweet » → *verba quae ab ejus ore
  prodeunt*; « Thy **throat** is like the best wine ») and the second gloss runs
  on for a paragraph about the *guttur* as a *vas pretiosum*.
- *tornatilis* (1268A *manus tornatiles*, 1277A *crater tornatilis*) → **turned
  on the lathe**, because the gloss is *Quod enim in torno fit* and *optime vasa
  tornare novit*. "Well-turned" or "polished" kills both.
- *comae* (1266D, 1279A) → **locks**, kept distinct from *capilli* (1272A) →
  **hair** and *cincinni* (1263C) → **ringlets**, because 1266D–1267A glosses
  *comae* at length (« His **locks** are the high boughs of palm trees » … *Hi
  autem Christi **comae** dicuntur*) while 1272A glosses *capilli* separately.
  `cruces-0000.md` fixes *crinis*/*capillus* both as "hair" and does not cover
  *coma*; "locks" is the addition, and it does not collide.
- *elatae palmarum* (1266D) → **the high boughs of palms**, repeated verbatim in
  the gloss (*Elatae namque palmarum rami sunt productiores*) and again in the
  verses (*Comae palmae sunt elatae*). Not "branches" — *rami* is the gloss word.
- *foramen* (1264B–C) → **opening** in both lemma (*misit manum suam super
  foramen*) and gloss (*Mittit igitur Dominus manum per foramen*), even though
  the preposition changes from *super* to *per* between them.
- *myrrha prima* (1267C) → **the first myrrh**, left literal. Not "choice."
- *desiderabilis* (1269B) → **desirable**, so that *Totus amicus meus est
  desiderabilis* repeats the lemma word.
- *aemulatio* (1285A) → **jealousy** throughout, because the gloss quotes
  2 Cor 11:2 *Aemulor enim vos Dei aemulatione*. "Zeal" would break the chain,
  and *Zelus domus tuae* sits four lines earlier and takes **zeal**.
- *pacificus* (1286D–1287B) → **the peaceable one**, because the noun is then
  applied to the *mille argentei* (*pacificos hic appellat*) and glossed
  *Quoniam Deo nos conciliant … nobisque pacem praeparant*.

### 1.2 Hebrew-name etymologies
Migne's italic etymologies are **translated**, italics kept exactly where he sets
them. In this batch: *visio pacis* → *vision of peace* (1271B); *acervus
testimonii* → *heap of testimony* (1272B); *spontaneus populi sui* → *the willing
one of his people* (1275C); *captiva* / *despecta* → *captive* / *despised*
(1276A–B); *cingulum moeroris* / *civitas multitudinis* → *girdle of sorrow* /
*city of the multitude* (1278A); *candidatio* → *whitening* (1278C); *cogitatio
circumcisionis* → *the thought of circumcision* (1279A). This matches
`cruces-0000.md`'s *candidatio* → whitening.

**Note the italics are not uniform in the plate.** At 1269B Migne prints
*Denique Libanus candidatio dicitur* with **no italics**, while 1278C prints
*Libanus … qui* candidatio *interpretatur* italicized. Both were reproduced as
printed; the English at 1269B carries "whitening" in roman. Not a defect.

### 1.3 Running head-numbers *619*–*633*
The italic bare numerals Migne sets in the text stream (*621*, *622*, *623*,
*624*, *625*, *626*, *627*, *628*, *629*, *630*, *631*, *632*, *633* in this
batch) are the earlier edition's page numbers and are reproduced **verbatim, in
italics, in place**, untranslated. They are not translated and not annotated.

### 1.4 Verse interludes
Six verse interludes here (1266A, 1270A, 1274A, 1279C, 1283A, 1285C — the last
two both inside CAPUT VIII). Migne's rubric is `Versus:` throughout this half →
**`Verses:`**, matching `cruces-0000.md` §1.5. Line structure mirrored 1:1;
column anchors inside verse lines stay glued to the head of their line exactly as
the Latin sets them (`[1283B]For the must, like wine`). Refrain lines (*Gloria
magna Deo!* ×6 at 1283A–C) are translated identically each time — **Great glory
be to God!**

### 1.5 Speaker rubrics — none supplied, none corrected
The rubrics in this half are as inconsistent as in the first. Reproduced as
printed, including:
- *Christus vel Ecclesia:* (1279D) → **Christ, or the Church:** — Migne himself
  cannot decide who speaks Song 7:8, and the English says so too.
- *Sponsa ad seipsam:* (1264A) → **The bride to herself:**
- *Vox fidelis animae.* (1264A) sits *before* the rubric it seems to belong to,
  with no colon — reproduced in place, unattached.
- *Ecclesia:* (1263B, bare) → **The Church:**
- *Vox consolatoria Ecclesiae* (1276A) → **The consoling voice of the Church** —
  and the speech that follows is Song 6:12, which the *next* rubric assigns to
  the apostles. Left as printed.
- *Apostropha.* → **Apostrophe.**; *Apostropha ad apostolos.* → **Apostrophe to
  the apostles.**; *Confirmatio.* → **Confirmation.**; *Metonymia est.* → **It is
  a metonymy.** — all per `cruces-0000.md` §1.6.
- *subauditur* → **understand:** (1267B *subauditur, existentes* → "understand:
  being there"; 1274A *Subauditur nullus* → "Understand: none"; 1287B).

### 1.6 Archaism
Second-person singular is archaic (**thou / thee / thy**) inside quoted Song
lemmata and quoted scripture, and inside Bruno's direct address to the bride or
to a named person (*Surge tu, Paule*), which is continuous with the lemma. Modern
"you" is used for plural address (*Comedite, amici mei*) and general second-person
plural. This follows the corpus style anchor (« Thou art Peter »).

### 1.7 Pattern 4 and Pattern 14
No `[f: …]` (lemma-and-gloss commentary, standing ruling). All 65 `[n: …]` notes
in this batch are bare scripture locators — no editorial prose — so **no
`[nt: …]`**. No `[ed: …]`: nothing in the TEI of these eight chunks is lost or
empty.

### 1.8 Heads
`CAPUT V./VI./VII./VIII` → `CHAPTER V./VI./VII./VIII`, numeral kept, `(cont.)`
carried untranslated. **`CAPUT VIII` (0015, 0016) has no terminal period in the
plate** and the English head has none either — unlike `CAPUT V.`–`VII.`, which
do. Reproduced, not normalized.

---

## 2. Terminology — adopted from `cruces-0000.md`, plus this half's additions

A retroactive sweep was run across all eight chunks after `cruces-0000.md`
appeared. Changed to conform:

| was | now | count |
|---|---|---|
| teacher(s) | **doctor(s)** (*doctores*, *doctor*) | 23 |
| bridegroom | **Bridegroom** (always Christ in this half) | 9 |
| aromatical spices | **spices** (*aromata*) | 6 |
| "An apostrophe" | **Apostrophe** | 2 |
| briars | **briers** (*tribuli*) | 3 |
| beautiful (*speciosus*) | **fair** | 2 |

Every other term in `cruces-0000.md` §2 that occurs here already agreed:
*sponsa*→bride, *dilectus*→beloved, *adolescentulae*→the young maidens, *filiae
Jerusalem*→daughters of Jerusalem, *Synagoga*→the Synagogue, *Ecclesia
gentium*→the Church of the Gentiles, *vigiles*→watchmen, *caprea*→roe,
*hinnulus cervorum*→fawn of harts, *columba*→dove, *malum*→apple tree /
*mala*→apples, *malum punicum*→pomegranate, *botrus*→cluster, *lilium/spina/
tribulus*→lily/thorn/brier, *uber*→breast, *guttur*→throat, *collum*→neck,
*gena*→cheek, *monile*→necklace, *propugnacula*→bulwarks, *lectulus*→little bed,
*favus*→honeycomb, *clypeus*→shield, *aromata*→spices, *nardus*→nard,
*candidatio*→whitening, *decorus*→comely, *pulcher*→beautiful, Holy Scripture /
the Scriptures capitalized.

**Additions this half needs (none collides with `cruces-0000.md`):**

| Latin | English | why fixed |
|---|---|---|
| coma | **locks** | glossed at 1266D–1267A against *capilli* at 1272A |
| cincinnus | **ringlet** | 1263C, distinct from both |
| tornatilis | **turned on the lathe** | gloss *in torno fit*, 1268A / 1277A |
| foramen | **opening** | *super foramen* / *per foramen*, 1264B–C |
| elatae palmarum | **the high boughs of palms** | *rami* is the gloss word |
| aemulatio | **jealousy** | 2 Cor 11:2 gloss, 1285A |
| zelus | **zeal** | kept apart from *aemulatio*, 1284D |
| charitas / dilectio / amor | **charity / love / love** | 1284C–1285C plays all three off each other; *charitas* is always "charity" |
| pacificus | **the peaceable one** | 1286D–1287B |
| mala granata (1282D) | **pomegranates** | same English as *mala punica*; Migne uses both names for the same fruit, and Bruno glosses them identically (martyrs). Flagged so a sweep does not try to split them. |
| areola | **bed** (garden bed) | 1270C, glossed *quaelibet anima fidelis* |
| acervus tritici | **a heap of wheat** | 1277B |
| umbilicus / venter | **navel / belly** | 1277A–C, and *venter* again at 1268C of Christ |
| crus | **leg** | 1268D |
| hyacinthus | **hyacinth** | 1268A–B, glossed as both stone and flower |
| piscina | **fishpool** | 1278A–B |
| Sulamitis | **Sulamitess** | 1276A, 1276C |
| quadrigae / auriga | **chariots / charioteer** | 1275C–D |
| mandragora | **mandrake** | 1281C |
| signaculum / sigillum | **seal / signet** | 1284B–C |
| villa / rusticus / villanus | **village / country folk / villager** | 1280D–1281A, and the verse at 1283B |
| mustum | **must** | 1282D–1283A, glossed *novum esse vinum* |
| vinum conditum | **spiced wine** | 1282C, glossed *vino pigmentato* |
| reginae / concubinae | **queens / concubines** | 1272C–1273B |
| murus | **wall** | 1286B; distinct from *paries*/*maceria* in the first half |

---

## 3. The one deliberate divergence — *amica mea*

`cruces-0000.md` §2 fixes **amica mea → "my beloved."** This half renders it
**"my friend,"** and the divergence is knowing, not drift. It must be settled at
merge, in one direction, for the whole work.

The evidence, all of it in this half:

1. **1263C** — the lemma *« Amica mea »* is glossed *pro qua mori non dubitavi,
   qua major dilectio nulla est*. That is John 15:13, whose subject is *amici*.
2. **1269C** — Song 5:16 reads *et ipse est **amicus** meus, filiae Jerusalem*,
   masculine, of Christ; Bruno's gloss is *Vere utique **amicus**, quoniam propter
   eam sanguinem fudit, qua major dilectio esse non potest* — the same John 15:13
   argument, now unmistakably about friendship.
3. **1285C** — the peroration on charity turns entirely on the word: *Quaeramus
   igitur illum **amicum** qui nunquam moritur … qui **amicitiam** laudans,
   inquit: « Majorem hac dilectionem nemo habet, quam ut animam suam ponat quis
   pro **amicis** suis. »*
4. **1288A** — *« Quae habitas in hortis, **amici** auscultant »*, glossed *Te mei
   **amici**, videlicet angeli et apostoli, auscultant*.

Rendering *amica mea* as "my beloved" collapses it into *dilecta/dilectus*
(which is "beloved" on both sides of the merge) and severs it from the four
masculine *amicus* passages above, which must be "friend" in any case. The two
words also stand side by side in the same sentence at 1270C (*visitavit me
sponsam et **amicam** suam*) and repeatedly in CAPUT VI.

**Recommendation for the merge:** take "my friend" for *amica mea* throughout and
sweep chunks 0000–0008. If the reconciler prefers "my beloved," it must also
decide what to do with 1269C, where the Song's own word is *amicus*.
**Worth a human's eye.**

---

## 4. Carried type — Pattern 7 / 10 / 12 (`[sic: …]`)

Six non-word runs, carried untranslated in italics and marked. All six were
checked as verbatim substrings of the Latin twin.

| Col | Chunk | Printed | Almost certainly | Note |
|---|---|---|---|---|
| 1262B | 0009 | *pomerum* | *pomorum* | *Comedat, inquit, fructum pomerum.* The lemma two clauses earlier prints *pomorum* correctly, so this is a slip in the paraphrase, not in the quotation. `o` for `o`→`e`. |
| 1281A | 0014 | *jar* | *jam* | *exeat jar qui seminat seminare semen suum.* `r` for `m`. |
| 1281A | 0014 | *Flius* | *Filius* | *Veniens autem Dei Flius in mundum.* Dropped `i`. |
| 1284A | 0015 | *dilectem* | *dilectum* | *« Innixa super dilectem suum. »* The **same lemma** is printed correctly as *innixa super dilectum suum* eleven words earlier in the quotation of Song 8:5 — so the plate has it both ways within one sentence. `e` for `u`. |
| 1285B | 0015 | *augustia* | *angustia* | *nec tribulatio, nec augustia, nec mors* (Rom 8:35). `u` for `n` — the inverted sort that `cruces-0000.md` §3 finds four times in cols 1240–1255. **This is a fifth instance of that class, 30 columns later.** |
| 1285C | 0015 | *supercellit* | *superexcellit* (or *supercellit* = *superat*?) | *Omne namque pretium supercellit.* No such verb. Carrying it leaves the sentence without a finite verb in English, which is the intended cost of Pattern 7. |

The *augustia* find is the one worth reporting upward: with the first half's
*Eeclesia* / *Ecelesia* / *beatitudiuem* / *Sio*, that is **five** single-sort
failures of the same mechanical kind spread across cols 1240–1285. If the plate
is ever consulted, this looks like one damaged case used through the gathering
rather than a scatter of independent compositor errors. **Worth a human's eye.**

---

## 5. Rendered literally, NOT marked — Pattern 7, real words wrongly printed

The English on the page is ours, so no `[sic: …]` (Pattern 12's operational
test). The conjectures live here and nowhere else.

1. **1270C, chunk 0011 — *moreretur*.** *idcirco ubi Deus sit, quo declinaverit,
   et quo in loco **moreretur**, quasi ignorantes inquirunt.* Rendered "and in
   what place he might **die**." *moreretur* is a real form (of *morior*); the
   sense the sentence wants is *moraretur*, "might tarry" — the companions are
   asking where the Bridegroom has *gone*, not where he died. One letter.
   **Worth a human's eye.**

2. **1268A, chunk 0010 — a gloss on a word the lemma does not print.** The lemma
   is *« Manus illius **tornatiles**, plenae hyacinthis »* — no *aureae*. Bruno
   then asks *Cur autem **aureae**, nisi quia ipsius opera omnibus praestantiora
   sunt?* and spends two sentences on gold. Song 5:14 in the Vulgate is *manus
   illius tornatiles **aureae***; Migne's lemma has dropped the word, and the
   gloss is left glossing a word that is not there. Rendered as printed on both
   sides ("« His hands are turned on the lathe, full of hyacinths »" … "But why
   **golden**…"). The verses at 1270A confirm the missing word — *Aureae sunt
   manus ejus*. **This is a lemma defect, not a gloss defect, and it is worth a
   human's eye:** a reader will think we dropped it.

3. **1276D, chunk 0013 — *sanguinem innocentum fundere non dubitavit*.**
   *Patientia namque pedes nostros calceat, quoniam sanguinem innocentum fundere
   non dubitavit, et non modo patitur.* Rendered "For patience shoes our feet,
   since it did not hesitate to shed the blood of the innocent, and does not only
   suffer." As printed, *patientia* is the subject that sheds innocent blood,
   which inverts the argument (the martyrs' patience is what *lets* their blood be
   shed). *suum* or *proprium* for *innocentum*, or a lost *sinere*, would fix it.
   Not emended. **Worth a human's eye.**

4. **1287A, chunk 0016 — *quae fecit utraque unum*.** Eph 2:14, quoted *Ipse autem
   est pax nostra, **quae** fecit utraque unum*, with a feminine relative for
   *ipse*. Rendered "and he is our peace, **which** hath made both one." Note that
   `cruces-0000.md` §5.6 records the **same verse quoted at 1253A with *qui***, the
   correct masculine. Migne prints it both ways in one work; neither was
   normalized.

5. **1285A, chunk 0015 — *Perfecta namque charitas foras mittit timorem
   [n: (Joan. IV, 17)]*.** The verse is 1 John 4:18. Reference reproduced
   verbatim per the standing rule; see §7.

6. **1284A, chunk 0015 — an object-less verb.** *sed ego carnem sumens sub arbore
   mali **resuscitavi***, with no *te*. Rendered "but I, taking flesh, raised up
   again under the apple tree." The *te* is present in the lemma immediately
   above (*Sub arbore malo suscitavi **te***).

7. **1285D, chunk 0015 — the verses lose their grammar.** *Quoniam firmamentum
   fugit / Pone super signaculum / Super cor et brachium* — no stop, no
   conjunction, and *Pone* switches speaker mid-stanza. Two lines later, *Quis non
   exstinguitur, / Charitas non moritur* wants *Quia* or *Quae*, not *Quis*.
   Rendered line-for-line as printed, punctuation and all, per Pattern 8.

8. **1264B, chunk 0009 — capital *Ut* mid-sentence.** *sine quibus vix aliquis
   immunis erit, **Ut** elatio mentis, vana gloria.* Rendered with lowercase "as."
   Capitalization is orthography, not punctuation; Pattern 8 governs marks, and an
   English capital here would read as our error with nothing gained. Logged so the
   decision is visible.

9. **Pattern 9, no action possible.** *Duo ubera sunt duo hinnuli gemelli capreae*
   (1277D) has no possessive where Song 7:3 has *tua*; *Ducenti, inquit, millium
   pacificorum* (1287B) mixes a nominative numeral with a partitive genitive.
   Rendered as closely as the printed words allow. Marked so a later sweep does
   not churn them.

---

## 6. Quotation marks — Pattern 5 / 6

Guillemet counts verified body-to-body for all eight chunks and identical to the
twin: 0009 45/45, 0010 41«/40», 0011 37«/38», 0012 22/22, 0013 25«/24»,
0014 23«/24», 0015 36/36, 0016 22/22. **No straight quotes (`" "`) were supplied
anywhere in this batch** — every quotation mark on these eight pages is one Migne
prints. The four imbalances are his, and each is itemized:

1. **1267D, chunk 0010 — an opener never closed, and a comma for the stop.**
   Migne prints `« Nisi quis renatus fuerit ex aqua et Spiritu sancto, non potest
   videre regnum Dei [n: (ibid., 5)]., Haec enim dum diceret…` — the note is
   followed by `.,` and then the sentence simply runs on into Bruno's prose with
   no `»`. Both the missing closer and the `.,` are reproduced. This is chunk
   0010's surplus opener. **Worth a human's eye** — the English looks broken at
   this point and it is Migne who broke it.

2. **1272B, chunk 0011 — a closer where an opener belongs, splitting a lemma.**
   `… evidenter apparet. » Dentes tui sunt greges « tonsarum ovium, quae
   ascenderunt de lavacro…` The `»` after *apparet* closes nothing (Bruno's own
   prose is not in quotation), and the Song 6:5 lemma *Dentes tui sunt greges
   tonsarum ovium* is broken open between *greges* and *tonsarum* by a `«`. Both
   marks reproduced in place; English word order permits the exact position here.
   This is chunk 0011's surplus closer.

3. **1278D, chunk 0013 — an opener never closed.** `« Caput tuum sicut Carmelus.
   Quid per caput, nisi cor et intellectus?` — the lemma opens and Bruno's gloss
   begins inside it with no `»`. Not supplied. This is chunk 0013's surplus
   opener; the quotation stays open until the next `«` at *Et comae capitis tui*.

4. **1281A, chunk 0014 — a closer with no opener.** `… rex universalis cum lege et
   judicibus in villis moratur. » « Mane surgamus ad vineas. »` The first `»`
   closes nothing — Bruno's own sentence about the universal king is not
   quotation. Reproduced. This is chunk 0014's surplus closer.

**Mid-sentence closers that are correct and merely look odd** (reproduced 1:1,
not defects): 1280B `cum, « oculum pro oculo, dentem pro dente [n: …], »
dicebat` — the attribution verb falls *outside* the quotation, the mirror image
of Pattern 5, and the English keeps it outside; 1272A `« non plus sapere, quam
oportet [n: …], » praecepit`; 1275A `quia « ut castrorum acies ordinata » est`;
1275C `Quoniam « anima mea conturbavit me; » hoc autem « propter quadrigas
Aminadab. »`; 1276B `Quater autem « revertere » dicitur`; 1276C `Dixisti superius,
« lavi pedes. » nunc autem calceata es`.

---

## 7. Dittography — Pattern 11 (`[d: …]`)

One instance in this batch.

- **1286C, chunk 0016** — *Ostium, inquit, pingamus, portas signemus, et
  **variemus, variemus**, ut Dei exercitus… introitum inveniant.* The second
  *variemus* is marked: "let us mark the gates, and let us vary them, **[d: let
  us vary them,]** that…". Reads as a compositor's doubling rather than a
  rhetorical geminatio — Bruno's other doublings in this work (*revertere,
  revertere* at 1276A–B) are quotations of the lemma and are explicitly counted
  by him (*Quater autem « revertere » dicitur*), whereas nothing is made of this
  one.

---

## 8. Punctuation preserved against the grain — Pattern 8

- **1276C (0013)** *arma et Scripturarum sententiae declarantur. **alterque**
  alterum ad Dei servitium excitat* — full stop, then lowercase *alterque*.
  English: "…are declared. and the one rouses the other…".
- **1276C (0013)** *Dixisti superius, « lavi pedes. » **nunc** autem* — lowercase
  after the closer.
- **1279B (0013)** *semper animarum desiderent purgationem* — the paragraph ends
  with **no terminal stop at all**. None supplied.
- **1264C (0009)** *Unde est illud**.** « Tange montes… »* — a full stop where the
  formula takes a colon everywhere else in the work (*Unde est illud:*).
- **1267D (0010)** the `.,` sequence — see §6.1.
- **1273D (0011)** *« Viderunt eam filiae. » id est praedictae adolescentulae.*
  followed by *« et beatissimam praedicaverunt eam »* opening with lowercase *et*.
  Both preserved.
- **1286B (0016)** *nihilque falsitatis in eis reperitur**,** « Si ostium est…* —
  a comma where the sentence ends. Preserved.
- **1286B (0016)** *Quibus verbis, quibusve promissis ejus animum temperabimus.*
  — a question set with a full stop. Preserved.

---

## 9. References — deliberately NOT corrected

Printed references pass through verbatim; nothing here was "fixed," and note the
standing rule that an *Ibid.* downstream resolves against the printed sequence.

- **1268A (0010)** `[n: (Matth. X, 8)]` for *Nolite timere eos qui occidunt
  corpus* — the verse is Matt 10:28.
- **1267D (0010)** `[n: (ibid., 5)]` — a genuine partial *Ibid.* chained to
  `[n: (Joan. III, 7)]` two clauses earlier. **Left exactly as printed** so the
  indexer resolves it; the upstream reference is correct in any case.
- **1284C (0015)** `[n: (Joan. IV, 17)]` for *Perfecta charitas foras mittit
  timorem* — the verse is 1 John 4:18, and the book numeral is missing too.
- **1264C (0009)** `[n: (Psal. 17, 45)]` — arabic numeral for the psalm, where
  every other psalm citation in the work is roman.
- **1265A (0009)** `*(Psal. [1265B] LXIII, 7)*` — a scripture citation set as
  **inline italic text, not as a `[n: …]` note**, and with a column anchor falling
  inside it. Reproduced exactly, anchor and all; it is *not* counted in
  `noteCount` and was *not* converted into a note. This is the only such citation
  in the batch. **Worth a human's eye at index time** — it is a fons the `[n:]`
  harvester will not see.
- **1266D (0010)** `[n: (Psal. LXXXVIII, 7.)]` and **1266C** `[n: (Isa. LXIII,
  1.)]` — stop inside the parenthesis, unlike neighbours. Preserved.
- **1285A (0015)** `[n: (Psal. LXVI, 10)]` for *Zelus domus tuae comedit me* — the
  verse is Ps 68:10.
- **1273A (0011)** `[n: (Psal. XLVIII, 6)]` for *Cur timebo in die mala* — Ps 48:6
  is correct; noted only because the lemma reads *Cur* where the Vulgate has
  *Cur*/*Quare* variously.

---

## 10. Column anchors

Anchor sequences were diffed la↔en for all eight chunks: **identical, in order,
1:1.** No band arithmetic was performed and **no gap is claimed** (known
false-positive class 1). For the record, so that a later reader does not
"discover" them: `1287B → 1288A` (0016) skips C and D; `1279D → 1280A` sits at a
chunk boundary; `1270B → 1270C` opens 0011 at a C band. All normal. No text is
broken mid-word or mid-construction across any anchor in this batch — that being
the only real signal — and each chunk's `colFirst`/`colLast` match its first and
last anchor exactly.

---

## 11. Nothing patched, nothing needed `[ed: …]`

No `data/tei-patches/10804.json` entry is proposed from this half either. No
empty elements, no running text swallowed into a `<note>`, no lost list items.
Every defect found is Migne's and is handled above under Pattern 7/8/10/11/12.

---

## 12. Verification performed

For each of 0009–0016, body-to-body against the Latin twin, by script:

- frontmatter identical to the Latin twin's, line for line (17 lines) — **8/8**
- column-anchor sequence identical **as a string**, in order — **8/8**
- `[n: …]` sequence identical **as a string** — contents untranslated, order
  preserved — **8/8**; 65 notes total, matching every chunk's `noteCount`
- `## ` head count 1:1 — **8/8**
- `«` and `»` counts each identical to the twin — **8/8**
- `[sic: …]` contents verified as verbatim substrings of the Latin twin — **6/6**
- no `[f: …]`, no `[nt: …]`, no `[ed: …]`, no supplied `" "` — **8/8**
- one `[d: …]`, English-only, in 0016 only
- English/Latin word ratio **1.39–1.48×** (register target ~1.5×; the first half
  ran 1.44–1.53×)

---

## 13. Short list for a human

1. **§3 — *amica mea*: "my friend" here vs "my beloved" in 0000–0008.** The one
   terminology conflict between the halves; must be settled in one direction for
   the whole work, and 1269C's masculine *amicus* is the deciding evidence.
2. **§4 — *augustia* (1285B)** is a fifth instance of the inverted-sort class the
   first half found four times; together they suggest one damaged case, not seven
   independent slips.
3. **§5.2 — the lemma at 1268A is missing *aureae*** while the gloss and the
   verses both depend on it. Readers will read this as our omission.
4. **§5.1 — *moreretur* for *moraretur* (1270C)** makes the companions ask where
   Christ *died* rather than where he has gone.
5. **§5.3 — *patientia … sanguinem innocentum fundere non dubitavit* (1276D)**
   inverts Bruno's own argument.
6. **§6.1 — the unclosed quotation and `.,` at 1267D** is the ugliest place on
   these eight pages and it is entirely Migne's.
7. **§9 — the inline italic citation at 1265A–B** is a fons set as running text
   rather than as a `[n: …]` note; the indexer will miss it unless told.

<!-- corpus-polarity-sweep 2026-07-28 -->
## Corpus polarity sweep — 2026-07-28

Blind Opus read of the Latin/English pair for sense-reversing defects (one word or
one letter asserting the opposite of what the context requires). 9 site(s).
Migne's defects are recorded here and rendered literally in the English; our own
errors were fixed in place. Full context: `data/sweeps/corpus-polarity/REPORT.md`.

### 1238A — dropped-non (migne, high confidence)

Printed: *Vox Synagogae: « Filii namque matris meae pugnaverunt contra me. » Mihi, inquit, quietudinis fuit facultas, quoniam necessaria parare, et *607* contra hostes pugnare necesse erat.*

Conjecture: **Mihi, inquit, NULLA quietudinis fuit facultas (or non fuit facultas) — 'I had no opportunity of rest, since I had to prepare necessities and fight against enemies.'**

The causal clause in the same sentence gives the reason for the OPPOSITE of what is asserted: 'quoniam necessaria parare, et contra hostes pugnare necesse erat' — a necessity of provisioning and fighting is a reason for having no leisure, not for having it. The immediately preceding sentences say the same in the bride's own voice: « Non in umbra quievi, non in lecto me otio dedi... In vinea laboravi, agrum excolui, vigilavi, jejunavi » ('I have not rested in the shade, I have not given myself over to idleness upon a bed'), and the next sentence continues 'Foris igitur pugnae, intus timores' ('Without, therefore, were fightings; within, fears'). Our English reproduced the defective plate literally, so the English asserts leisure in a paragraph whose whole burden is unrelieved toil and war.

### 1248A — sense-reversing-letter (migne, medium confidence)

Printed: *Formosa mea super [1248A] nivem dealbata, sine macula et ruga. Surge, inquit, fac quod factura es, et ad me tandem post malitiam, et peracto officio veni.*

Conjecture: **post MILITIAM ('after thy warfare/service'), not post malitiam — paired with 'peracto officio', i.e. come to me when thy campaign is over and thy office discharged.**

The immediately preceding clause describes this same bride as 'Formosa mea super nivem dealbata, sine macula et ruga' ('made whiter than snow, without spot or wrinkle'), and the parallel member of the very sentence is 'peracto officio' — a discharged duty, not a sin. As printed, the summons imputes malice to the spotless bride at the moment she is being called; 'militia' restores the pairing warfare/office that the sentence's own structure demands. Our English carried the defect through literally ('after the malice').

### 1260B — sense-reversing-letter (migne, high confidence)

Printed: *Hic enim est lignum scientiae boni et mali, Novum videlicet et Vetus Testamentum, quae et mala devitare, et bona nos facere docent. Habemus et lignum vetitum; id est Christum, qui est panis vivus, qui de coelo descendit.*

Conjecture: **lignum VITAE ('the tree of life'), not lignum vetitum. The paradise topos pairs the lignum scientiae boni et mali with the lignum vitae; 'vetitum' is a plate corruption of 'vitae' (assisted by the Genesis phrase 'lignum vetitum').**

The apposition in the very same clause identifies this tree as Christ, 'qui est panis vivus, qui de coelo descendit' — the living bread given to be eaten. A tree that is FORBIDDEN is the exact opposite of the bread we are commanded to eat. The frame two sentences earlier makes it worse: 'Vocatur igitur Ecclesia paradisus, quoniam omnium deliciarum copiis repleta est' — the point of the paradise figure is that everything in this garden is available delight; a prohibition has no place in it. Our English rendered the defect literally ('the forbidden tree, that is, Christ'), producing the reverse of Bruno's sacramental point.

### 1270C — sense-reversing-letter (migne, medium confidence)

Printed: *Imperfecti sunt enim qui hic loquuntur: idcirco ubi Deus sit, quo declinaverit, et quo in loco moreretur, quasi ignorantes inquirunt.*

Conjecture: **moraretur (from moror, 'to abide') for moreretur (from morior, 'to die')**

The answer Bruno immediately supplies is about DWELLING, not dying: « mecum est et mecum habitat. Ad Patrem ivit, me non reliquit; coelos ascendit, me non deseruit. » The three indirect questions track the lemma « quo abiit ... quo declinavit » plus 'where he stays'; 'in what place he might die' asserts of the risen Christ the one thing this passage denies of him.

### 1276B — dropped-word (migne, low confidence)

Printed: *Sulamitis autem *captiva* vel *despecta* interpretatur. Ecclesia vero prius despecta, nunc a viro electa est. Quod quidem Rachel significavit.*

Conjecture: **Lia for Rachel — Leah is the wife Scripture calls despised (Gen. XXIX, 31: « videns autem Dominus quod despiceret Liam »)**

The type is fixed by the sentence it is attached to: « prius despecta, nunc a viro electa ». Of the two sisters it is Rachel who was loved from the first and Leah who was the despised one afterwards blessed — so naming Rachel makes the type say the reverse of the gloss it illustrates, and of the interpretation « Sulamitis ... despecta » two lines above.

### 1276D — sense-reversing-letter (migne, medium confidence)

Printed: *nunc autem calceata es, ne inquinentur. Patientia namque pedes nostros calceat, quoniam sanguinem innocentum fundere non dubitavit, et non modo patitur.*

Conjecture: **sanguinem innocentum fundi non dubitavit (passive) — patience did not shrink from having innocent blood POURED OUT, i.e. its own; cf. the same idiom used of Christ at 1275C, « pro nobis sanguinem proprium fundere non dubitavit »**

As printed, the virtue of patience is the AGENT that sheds innocent blood — the opposite of patience, and the opposite of the sentence it explains: the feet are shod « ne inquinentur », lest they be defiled. The following gloss confirms the passive sense: « Possumus et per calceamenta, prophetarum qui mortui sunt exempla intelligere » — the shoes are the prophets who DIED, not who killed.

### 1283A — added-negative (migne, medium confidence)

Printed: *Mustum enim novum esse vinum nemo dubitat; quod quidem ebullire non cessat, donec totum purgatum fuerit. ... Horum autem mustum, horum novum canticum fervere distulit, donec et haereticorum error, et paganorum infidelitas cessavit.*

Conjecture: **fervere non destitit (or: fervere distulit ← non distulit) — the martyrs' must did NOT cease boiling until heresy and paganism ceased**

Bruno has just laid down the simile in his own words two sentences earlier: « quod quidem ebullire non cessat, donec totum purgatum fuerit » — must does not stop fermenting until it is purged. The application must therefore say the martyrs' new song never stopped boiling until error ceased; 'distulit' says it postponed boiling until then, the exact reverse of the figure he built.

### 1284B — sense-reversing-letter (migne, low confidence)

Printed: *Christus enim et signaculum, et clavis, firmumque sigillum est cordis sanctorum. Non possunt sanctorum corpora frangi, non possunt eorum secreta violari, tanto et tam munita sigillo.*

Conjecture: **corda for corpora — 'the HEARTS of the saints cannot be broken'**

The sealed thing has just been named as the heart — « firmumque sigillum est cordis sanctorum » — and is named again three lines later, « Signaculum est in corde, signaculum est in manu ». The saints' BODIES are precisely what this commentary says can be broken: « quatiuntur arbores, occiduntur martyres » (1262C), and at 1269A Christ himself « occidi potuit ». Only 'corda' preserves the seal-of-the-heart argument.

### 1284C — sense-reversing-letter (migne, high confidence)

Printed: *« Quia fortis est ut mors dilectio. » -- « Perfecta namque charitas foras mittit timorem. » Non timet dilectio mortem, non superatur amore. Fortis est mors, fortis est dilectio.*

Conjecture: **non superatur a morte — the plate has run 'a morte' together as 'amore', making love the thing that overcomes love**

The clause as printed says love 'is not overcome by love', which is empty; the whole paragraph is about love versus DEATH — the very next words are « Fortis est mors, fortis est dilectio », and then « Non timent Christi discipuli mortem, quoniam eorum dilectio fortis est ut mors. Cum morte pugnant, morti occurrunt. » The pair 'non timet ... mortem / non superatur a morte' is the required parallel.

