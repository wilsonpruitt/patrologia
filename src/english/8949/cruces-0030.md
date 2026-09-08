# 8949 *Liber Exodus* — cruces, chunks 0030–0034 (bands 0262B–0276B)

Stint: CAPUT XXIII (from VERS. 3) through CAPUT XXVI — the close of the covenant code, the
ascent of Sinai, and the tabernacle: the ark, the propitiatory and cherubim, the table and its
loaves, the candlestick, the curtains, the tent-cloths, the boards and their bases, the veil and
the hanging.

**All eight leaves of the range were read at the plate on BOTH witnesses, both columns, printed
corner numbers first, before anything below was written** — Gallica `bpt6k5505319w` f131–f138
(261/262 … 275/276) and the archive copy `patrologiaecurs04migngoog` pp. 136–143 (same columns,
corners likewise read first). Only 0265A–0266D had been read during prep; every other column here
was unread. Detail per leaf: `data/briefs/8949-PLATE-READS-0030.json`.

## §1 · Span count against the brief — 266 against 266, EXACT

`data/briefs/8949-lemmata-0030.txt` declares **266** marked spans for chunks 0030–0034 — "the
densest range in the book". Counted in my own Latin: **266 line-bounded, 266 paragraph-bounded.**
The agreement is not the false kind the brief warns of: this range contains **0 `«` and 0 `»`**
(consistent with the book's single guillemet standing alone at 0192A), so there is no unmatched
delimiter that could let two counting errors cancel. Per chunk: 0030 = 27 · 0031 = 36 · 0032 = 93 ·
0033 = 68 · 0034 = 42.

## §2 · Marker tally

| marker | count | columns |
|---|---|---|
| `[var:]` | **10** | 0262D · 0265A · 0267D · 0268A ×2 · 0269A · 0269B · 0270B · 0273B · 0274D |
| `[sic:]` | **0** | — (one candidate fired and withdrawn at the plate, 0262D) |
| `[cj:]` | 0 | — (two candidates declined, 0263A and 0272C) |
| `[d:]` | 0 | — (one candidate declined, 0270D) |
| `[ed:]` | 0 | — |

Every column carrying a `[var:]` was read at the plate on both copies.

⭐ **Five pending TEI patches, and all five are OURS**
(`data/briefs/8949-PENDING-TEI-PATCHES-0030.md`): `a mos` → `annos` at 0262D, `Tabarnac.` →
`Tabernac.` at 0265D, and **three Hebrew words Migne prints that our source drops** — תשרי at
0263B, כרוב and כרובים at 0267D.

---

## §3 · ⭐⭐ THE HEBREW LAYER OF THIS BOOK IS NOT COMPLETE — three more words, one of them load-bearing

The lemma brief states as settled that Corpus Corporum "drops every piece of Hebrew Migne sets
inline" and that "all of it was read at the plate on 2026-09-08 and restored before chunking":
**the book-title banner plus six words at 0183B, 0193A, 0219A, 0266A (two) and 0296A.** That
inventory is short by at least three.

- **0263B** — `quem Hebraei Chaldaico vocabulo thisri, תשרי Macedones ὑπερβεραῖον vocant.`
- **0267D** — `Numero singulari cherub, כרוב plurali autem cherubim כרובים dicitur.`

All three are on **both** copies. The two at 0267D are unpointed, exactly as the brief describes
Migne's practice in this book; תשרי appears to carry at least one sub-letter point on both copies
and **neither resolves it at maximum available resolution**, so the consonantal form is what is
carried and the vocalisation is flagged open in the patches file rather than guessed. Migne's own
transliterations — *thisri*, *cherub*, *cherubim* — stand beside each and are the on-plate control;
all three agree with the Masoretic forms.

⭐ **The 0267D pair is not decoration, it is the gloss's evidence.** Bede's whole point there is
the singular and plural *forms of the Hebrew word*: `Numero singulari cherub, כרוב plurali autem
cherubim כרובים dicitur.` With the Hebrew dropped, the sentence tells an English reader only that
one Latin form is singular and the other plural — which he could already see — and the observation
becomes trivial. This is the same shape as a `[sic:]` swallowing the force of what it quarantines
(7a⁗), arriving by a different road.

⚑ **And the class is cheaply greppable, which is the finding that generalises.** Corpus Corporum
drops the Hebrew but **leaves the whitespace**: all three sites show in the XML as a run of two or
three spaces immediately after the Latin transliteration (`thisri,   Macedones`,
`cherub,</hi>   plurali`, `cherubim</hi>   dicitur`). A whitespace-run scan over the whole of 8949
should be run before this work ships; I found these by reading, and reading will not find the ones
outside my eight leaves.

---

## §4 · ⛔ ZERO `[sic:]` — and the reason is that the ARCHIVE COPY IS THE WORSE WITNESS ON THIS QUIRE

The standing guidance (`PL113-WITNESS-ENCODING.md`) is that the archive copy is 1-bit JBIG2, a
symbol-substitution codec, and may never be a **sole** witness for a letter, digit or point.
Measured here, over eleven sites where the two copies disagreed with each other or with our twin:

| column | archive copy | Gallica **and** our twin | what firing on the archive would have produced |
|---|---|---|---|
| 0263B | `seculo curantes` | `sedulo curantes` | a `[sic:]` on a phrase that does not construe |
| 0263B | `amplus tuba canunt` | `amplius tuba canunt` | a `[sic:]` |
| 0263C | `Ecce ergo mittam angelum` | `Ecce ego mittam angelum` | **a false `[var:]` against Ex 23:20** |
| 0263D | `invidita` | `invidia` | a `[sic:]` on a non-word |
| 0268A | `labium , etc.` | `labium., etc.` | a patch deleting pointing Migne prints |
| 0269D | `Omnes opus candelabri` | `Omne opus candelabri` | a `[sic:]` on a number disagreement |
| 0271B | `Fecit et quinquaginta circulos` | `Facies et quinquaginta circulos` | **a false `[var:]` against Ex 26:6** |
| 0272A | `VERS. 6.` | `VERS. 9.` | a false claim about Migne's own numbering |
| 0274B | `(Marc. XLVI)` | `(Marc. XVI)` | a `[sic:]` on an impossible chapter number |
| 0262D | `annos` (clean) | Gallica: `a nnos` (loose sort) | — archive **right**, our twin wrong |
| 0272C | `ad altera` | `ad altera` | — the two copies **agree**; Migne's |

**Nine to two against the archive copy.** Every one of its nine errors is a well-formed word or
number that construes — `Ecce ergo mittam angelum` reads perfectly, and it is not what Migne set.
This is why nothing on this quire may stand on that copy alone, in either direction, and it is
also the reason the range ships **zero `[sic:]`**: every candidate that survived our twin died at
Gallica.

⚑ **The reciprocal, and it matters:** at 0262D the archive copy is the **better** witness. Our twin
prints `Tribus vicibus per singulos a mos`; the archive prints `annos` cleanly; Gallica shows the
same five letters (four distinct strokes after the gap, read at 18×, `nn` and not `m`) with an
abnormally wide space after the initial `a` — a loose sort in that impression. The letters agree
across both copies, so **Migne's text is *annos***, our twin is wrong about the space *and* the
letters, and the `[sic:]` was withdrawn. Migne's own correct `annos` prints six lines below in the
second lemma of the same verse. "Our copy is poor" is a claim about a page, never about a scan.

---

## §5 · The `[var:]` list — ranked by how much of the gloss stands on it

Ten markers. The first four are the ones the exposition is **built on**; the rest are wording.

### ⭐ 1. 0267D — Hab 3:2 · *In medio duorum animalium innotesces*

Migne prints, and both copies confirm: `unde Habacuc ait: In medio duorum animalium innotesces
(Habac. III)`. The Vulgate reads *in medio annorum notum facies*, "in the midst of the **years**
thou shalt make it known". The Old Latin's *two living creatures* is the entire reason the verse
is here: Bede is expounding the two cherubim standing over the propitiatory, and the proof-text
works only in the form Migne prints. With the Vulgate wording the citation is a non sequitur.
`[var: Vulg. Hab 3:2 *in medio annorum notum facies*…]` — **the most valuable divergence in the
range.**

### ⭐ 2. 0270B — Ex 26:1 · *Tabernaculum vero ita et fiet*

The opening lemma of CAPUT XXVI, plate-confirmed. The Vulgate has *Tabernaculum vero ita facies*,
"the tabernacle thou shalt **make** thus" — God's second-person command to Moses. Migne's
impersonal passive turns the command into a description of how the tabernacle will come to be, at
the head of the chapter whose whole burden is what Moses was ordered to build.

### ⭐ 3. 0269B — Ct 6:10 · *Descendit in hortum nucum*

Vulgate: *Descendi in hortum nucum*, "**I** went down into the garden of nuts", spoken by the
Bride. Migne's third person moves the words out of her mouth into a narrator's. The gloss that
follows reads the nut as the Church whose sweetness is hidden under a shell — an identification
that in the Vulgate the Church herself makes about herself.

### ⭐ 4. 0265A — Nm 11:16 · *Assume tibi septuaginta viros*

Plate-confirmed. Vulgate: *Congrega mihi septuaginta viros de senibus Israel*, "**Gather unto me**
seventy men of the ancients of Israel". Migne's *Assume tibi* — "take unto **thee**" — is a
different verb and a different beneficiary, in the one place the gloss appeals to the literal sense
(*Vel ad litteram*) against its own numerological reading of the seventy.

### 5. 0273B — the citation names Matth. XXI and the words are Mt 26:56

The wrong-verse class the common brief names, and the second instance found in this book. Migne
prints `Hoc autem totum factum est, ut adimplerentur scripturae prophetarum` and keys it
`(Matth. XXI)`. Those words are **Mt 26:56**; Mt 21:4 reads *Hoc autem totum factum est, ut
adimpleretur quod dictum est per prophetam dicentem* — near enough to be the source of the
confusion, and different in exactly the word (*scripturae prophetarum*) the gloss is using to
prove that the prophets are the bases of the apostolic boards. Both copies print `XXI`.

### 6. 0268A — Ct 2:4 · *Introduxit me rex in cellam vinariam, et ordinavit in me charitatem*

Plate-confirmed on both copies. The Vulgate has neither *rex* nor the connecting *et*:
*Introduxit me in cellam vinariam; ordinavit in me caritatem*. The added *rex* is not idle in a
gloss on the table of the tabernacle read as Christ's banquet.

### 7. 0268A — `VERS. 23.` printed twice, the second over Ex 25:24

Migne sets `VERS. 23.-- In altitudine cubitum` (correctly Ex 25:23) and then, three lines later,
`VERS. 23.-- Faciesque illi labium.,` — which is **Ex 25:24** — after which `VERS. 24.` stands over
Ex 25:25. His numbering lags by one for two entries and then rejoins. **Both copies print `23`
twice**, so it is his, not a digitization slip, and it is left exactly as printed with the
divergence noted beside it.

### 8. 0269A — 2Cor 13:13 · *sit semper cum omnibus vobis*

Migne adds *semper*, which the Vulgate has not (*sit cum omnibus vobis. Amen.*). Plate-confirmed.
Minor, but it is a benediction quoted as a benediction.

### 9. 0262D — 2Cor 9:6 · *in benedictionibus, in benedictionibus et metet*

Migne repeats the preposition of the first member where the Vulgate turns it: *qui seminat in
benedictionibus, **de** benedictionibus et metet*. Plate-confirmed on Gallica at 3.2×.

### 10. 0274D — Ex 26:24 · *Eruntque sibi conjunctae*

Vulgate: *Eruntque conjunctae a deorsum usque sursum*. Migne's *sibi* makes the joining mutual —
which is precisely what the gloss then argues (the boards' framing would *recede ab invicem* if one
prophet denied what another said), so the divergence and the exposition move together.

### Checked and DECLINED — divergences that do not change the sense

- **0266A** *non venit legem solvere, sed adimplere* (Mt 5:17). Migne adds *legem* and puts the verb
  in the third person, but the clause is woven into the author's own sentence (*quia Christus…*),
  and *legem* is supplied from Mt 5:17's own first half. Not a divergence, an adaptation.
- **0266A** *Si crederetis Moysi, forsitan crederetis et mihi* (Jn 5:46) — word order of *forsitan*
  only.
- **0270A** *Si circumcidimini* for Gal 5:2's *circumcidamini*; indicative for subjunctive, sense
  unchanged.
- **0269D** *dextera ejus* for Ct 2:6's *dextera illius*.
- **0263C** *Initium omnis peccati superbia* — Sir 10:15 has *est* between; ellipsis, not divergence.
- **0273A** Ex 26:16 *in latitudine cubitum ac semissem* against the Vulgate's *singulos ac
  semissem*; different words, identical measure, and the gloss (which counts the ten cubits of
  length) does not touch it.
- **0264B** *Alia littera: Benedicam panem et vinum tuum* and **0264C** *Alia littera. Emittam
  vespas ante te, et ejiciet Amorrhaeos* — ⚑ **Migne labels both divergences himself.** No marker is
  stacked on his own mark (the standing rule from stint 0005–0009).
- **0272D** *De ianthinis pellibus* for the Vulgate's *janthinis* — orthography, Pattern 9.
- **0266C** Ex 25:3 *quae accipere debetis* for *debeatis* — indicative for subjunctive.

---

## §6 · ⚑ THE TABERNACLE VOCABULARY — fixed here, and chunks 0035–0039 should follow it

Ex 25–26 is dense in technical terms for the structure and its furniture, and the 11551 precedent
(one agent anglicising a column's members to "epistyle"/"shaft" while the other half of the work
kept *stylus*/*epistylium*, breaking the author's own etymological argument) is the failure this
table exists to prevent. **Where a gloss's argument runs through a word, the rendering that keeps
the argument intact beat the more idiomatic one.** Every term below is fixed once and used the same
way in all five chunks.

| Latin | English | why this one |
|---|---|---|
| *tabernaculum* | tabernacle | |
| *arca* | ark | |
| ⭐ *propitiatorium* | **propitiatory** | 0267C is an etymology: *sic dicta quia ibi Deus… propitiabatur populo*. "Mercy seat" is the idiomatic English and it **destroys the gloss**, which explains the name from *propitiari*. Non-negotiable. |
| ⭐ *cherub* / *cherubim* | **cherub / cherubim** | 0267D is a gloss on the singular and plural *forms*; both must stay recognisably the same word, and Migne's own Hebrew (now recovered) stands beside them. |
| *mensa* | table | |
| ⭐ *panes propositionis* | **loaves of proposition** | 0268D turns on it: *bene panes propositionis vocantur, quia semper debet patere sermo salutis… quod Dominus… mundo **proponens***. "Shewbread" severs the link to *proponere*; "loaves of proposition"/"proposing" keeps it. |
| *labium* (of the table) | lip | literal; kept distinct from *corona*, which stands beside it in Ex 25:24–25 |
| *corona* | crown | |
| *circulus* | ring | |
| *vectis* | bar | |
| *lamina* | plate | |
| *acetabulum* | dish | |
| ⭐ *phiala* / *cyathus* | **bowl / cup** | 0268B–C is Gregory's contrast between the teacher who *quasi phialam porrigit* and the one who *per cyathum gustum praebet*: the whole point is that one vessel is large and one small. Two distinct English words are required, and "bowl" must be the bigger. |
| ⭐ *scyphus* | **goblet** | Douay renders *scyphi* "bowls", which in this chunk would collide head-on with *phiala*. "Goblet" keeps the candlestick's cups apart from the table's vessels three paragraphs away. |
| *sphaerula* | little sphere | literal (a diminutive of *sphaera*); "bowl" and "knop" both collide with vessels already spoken for |
| *calamus* | branch | |
| *hastile* | shaft | 0269A: *praedicatores de hastili procedentes* — the branches come out of the shaft, so the two words must stay distinct |
| *lilium* | lily | |
| *candelabrum* / *lucerna* | candlestick / lamp | Ex 25:37 sets the seven *lucernae* **upon** the *candelabrum*; collapsing either into "lampstand"/"light" loses the relation |
| ⭐ *emunctorium* | **snuffers** | 0270A: *Emunctorium, et vasa, ubi quae **emuncta** sunt exstinguuntur* — the noun and the participle must share a root, so "snuffers"/"snuffed off" |
| *cortina* | curtain | |
| ⭐ *sagum* | **tent-cloth** | the hard one. Douay renders both *cortina* and *sagum* "curtain", which erases a distinction CAPUT XXVI spends two columns on (ten *cortinae* of fine linen under eleven *saga* of goats' hair). *Sagum* had to be a distinct English noun that is not *covering* (*operimentum*), *veil* (*velum*) or *hanging* (*tentorium*), all four of which stand within six lines of one another at 0272C. |
| *cilicium* / *cilicinus* | haircloth | 0271C reads *Cilicium poenitentium est*; the *saga cilicina* are then "the tent-cloths of haircloth" |
| *velum* | veil | |
| *operimentum* | covering | |
| *tentorium* | hanging | Ex 26:36, the screen at the entrance |
| *tabula* (of the tabernacle) | board | |
| *tabula* (of the Law; of the propitiatory) | tablet; board | 0265C's *tabulis lapideis* are tablets; 0267C's *tabula aurea* is a board, because it is the same measure as the ark and belongs to the structure. No gloss connects the two senses. |
| ⭐ *basis* | **base** | 0274B is an etymology: *Basis est fundamentum a Graeco βασεία, id est fundo*, and the argument continues *quasi bases a fundamento surrexerunt*. "Base"/"foundation" keeps it; "socket" (Douay) breaks it. |
| *ansa* / *ansula* | loop | |
| *fibula* | buckle | 0272B: *fibulae sunt aeneae, de vocali… metallo* |
| *columna* / *caput* | pillar / head | 0275C ties *capita aurea* to *mentem qua reguntur*; "capital" would hide it |
| *byssus* | fine linen | |
| ⭐ *hyacinthus* / *ianthinus* | **hyacinth / violet** | 0272D glosses *Hyacinthus coelestis est coloris*, and 0271C has *nec hyacinthus caeruleo colore decoratur* — the colour is argued about, so the stone-name is kept; *ianthinus*, a different word for a neighbouring colour, gets a different English |
| *coccus bis tinctus* / *purpura* | scarlet twice dyed / purple | |
| ⭐ *lignum setim* | **setim wood** | 0273A says outright *nec translatum est nomen Hebraeum, quia vix apud alios invenitur hoc lignum* — the gloss's point is that the name was **not** translated, so translating it would contradict the sentence it stands in |
| *incastratura* / *incastrare* | mortise | |
| *compago* | framing | 0274D: *Recederet enim ab invicem compago tabularum* |

Two further conventions carried from the peers, unchanged: *usque ad* → "*as far as*" (italic
preserved), and Migne's italic parenthetical citations (`*(BED., lib. I de Tabernac.…)*`,
`*[ID., quaest. 98.]*`) are carried verbatim and untranslated on the same footing as `[n: …]`.

---

## §7 · Readings examined and DECLINED, with the reason

- **0272C — *nec ad altera declinabant*, `[cj:]` DECLINED.** The same sentence prints *ad latera*
  twice within four lines (*ut ad latera descenderent*; *saga autem tectum et latera operiebant*),
  and *latera* is plainly what the argument wants: the skins covered the roof only and did **not**
  come down to the *sides*. But *altera* is a real word occupying its slot, and the English it
  yields — "nor did they slope down to the other parts" — is **vague, not false**. Pattern 18a's bar
  is that the printed word must make the sentence *say something the author is arguing against*, and
  the 2026-08-18 census explicitly declined the mood/number/word-slip class this belongs to. **Both
  copies print *altera*,** so it is Migne's; conjecture recorded here, nothing in the text.
- **0263A — *Solemnitatem vero mensis primitivorum*, `[cj:]`/`[var:]` DECLINED.** The Vulgate
  (Ex 23:16) has *solemnitatem **messis** primitivorum*, "the feast of the **harvest** of the
  firstfruits". Both copies print *mensis*. Declined on two grounds: it stands in Rabanus's own
  prose and not inside a quoted lemma, so Pattern 14 does not reach it; and *mensis primitivorum*
  construes and is coherent — the sentence three lines above has *Pascha… celebramus **mense**
  novorum*, which is very likely what drew the compositor's eye, and which also makes "the month of
  firstfruits" a phrase this author could have written.
- **0270D — *omnes in ordine numeros pleno ordine numeraveris*, `[d:]` DECLINED.** *in ordine…
  pleno ordine* reads as a dittography in our twin. **Both copies print it exactly so.** Pattern 11
  wants a plate doubling and this is one, but it is not an eye-skip: *in ordine* and *pleno ordine*
  do different work ("number them all in order, by a full order"), there is no neighbouring phrase
  for either to have been copied from, and nothing is intrusive. Rendered as printed.
- **0264B — *unde justo, judicio Dei expulsi sunt*.** The comma after *justo* is on the plate, on
  both copies. Pattern 8: never delete a mark Migne prints. Carried into the English ("whence by
  the just, judgment of God they were driven out"), which reads oddly and is meant to.
- **0272D — *ne inter pressuras deficiant, muniunt*** and **0274D — *alius negaret*.** Both end
  **without a terminal stop**, on both copies. Pattern 8: never supply. The English stops where the
  plate stops, in both places. (The archive copy appears to set a stop at 0274D; Gallica does not,
  and that is a tenth archive substitution rather than a reading.)
- **0268A — *Faciesque illi labium.,***. The period **and** the comma are both on the Gallica plate;
  the archive drops the period. Migne's pointing, carried into the English lemma as printed. **A
  patch removing it would have been wrong**, and the archive copy alone would have produced one.
- **0265A — *Heldad et Meldad*** for the Vulgate's *Eldad et Medad* (Nm 11:26). Both copies print
  Migne's forms; proper-name orthography, Pattern 9. No marker.
- **0271C — *ne interiora tenera clara qualibet adversitate turbentur*.** The asyndetic pair
  *tenera clara* is on both copies and in our twin. Rendered literally ("lest the inner things,
  tender and bright, be troubled"); no emendation attempted.
- **0264D — *Non ejiciam eos a facie*** and **0263D — *Praecedetque te angelus*.** Both truncate the
  Vulgate's following words (*a facie tua anno uno*; *angelus meus*). Lemma truncation is this
  book's normal practice and is not a divergence.
- **0266C — a raised mark before *nec nisi Domino donante laxanda*.** A small superscript-height
  mark stands there on the archive copy. It is not resolvable as either an ink speck or a
  foot-of-page key at the resolution available, and **the foot of that page carries no note it
  could key to** (checked zero, both layers, both columns). Recorded as unresolved. Nothing marked,
  nothing patched, no `[cn:]` proposed — a wrong key entered in Migne's own voice is worse than none.

## §8 · Checked zeroes worth recording

- **Foot-of-page apparatus: CHECKED ZERO on all eight leaves, both columns, both layers** (numbered
  *Forte* conjectures and the asterisk/letter cross-reference layer alike). This includes **f138 /
  p143, where CAPUT XXVII begins mid-page** — the position the chunking rule names as exactly where
  Migne sets notes mid-page. Nothing there either. The work's coverage stays `"spot"`; this is a
  fuller sample, not a `"full"` claim.
- **Guillemets: 0 `«` and 0 `»` in all five chunks**, consistent with the lemma brief's statement
  that the whole work contains one opening guillemet, at 0192A, outside this range.
- **`(cont.)` on the CAPUT XXVI head of chunk 0034** is our chunk boundary and is left untranslated
  in the English head, per the runbook's known-false-positive 7.
