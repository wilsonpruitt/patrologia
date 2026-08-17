# 11535 — cruces, chunks 0015–0019 (cols 1263D–1273B)

Richard of St Victor, *De eruditione hominis interioris*, PL 196. Range: CAPUT XX–XXIV.
Format: column · printed reading · what was done · why.

---

## A. Markers fired

### 1. `[sic: *exaeguabo*]` — 1267C (0017), Lam. 2:13

Migne prints *cui **exaeguabo** te, et consolabor te, virgo filia Sion?* for *exaequabo*
(`g` for `q`). **Control run:** `exaeguabo` occurs in exactly one file in the whole PL TEI
(`11535.xml`, this site); `exaequabo` occurs in 7 files. A form that occurs once in 87M words,
here, is the plate's defect. Carried untranslated under Patterns 7/10, marked `[sic:]`.

⚠ **7a⁗ check.** The quarantined run is the clause's **only verb** (*cui … te*). Following the
`[sic: *eccidit*]` precedent, the sense is supplied in plain words beside the marker: *to whom
shall I make thee equal [sic: *exaeguabo*], and comfort thee*. Deleting the marker's contents
still leaves a predicate and the clause's interrogative force intact.

### 2. `[sic: *commatationem*]` — 1270B (0018)

*O mirabilem (imo detestabilem) **commatationem** de charitate ad iniquitatem!* — for
*commutationem*. **Control:** `commatation` occurs in 1 file corpus-wide (this one);
`commutationem` in 264. Plate defect. Carried, marked.

⚠ **7a⁗ check.** The marker swallows the exclamation's head noun, so the English supplies it in
plain words: *O the wonderful (nay, the detestable) change [sic: *commatationem*] from charity to
iniquity!* Nothing but the broken type is inside the marker.

### 3. `[sic: meus]` — the CHAPTER XXIII head (0018)

The head prints *Quod de magno saepe virtutum culmine soleat **meus** humana gradatim in ima
corruere.* — *meus* (masc. possessive) where the feminine *humana* requires *mens*. This is
Pattern 12 test 1: a real word with **no grammatical slot** (it can be carried by no English at
all, and the clause loses its subject). The chapter's own body is about *mens/animus humanus*
falling by steps, and chunk 0019's head prints *animus humanus* in the identical frame.

⚠ **7a⁗ check.** The quarantine removes the subject, so the English supplies it beside the
marker: *That from a great summit of virtues the human mind [sic: meus] is often wont to fall by
degrees into the depths.* **No asterisks inside the marker** — the head summary is already
italic and nested italics are not expressible (Pattern 10's closing clause).

⚑ **Head-wording flag for the merge pass:** heads are an indexed field. This head is the only one
in the range that carries a marker; if a peer's convention differs, this is the site to reconcile.

---

## B. `[var: …]` — Migne's scripture against the received text (Pattern 14)

Nine markers fired. Every italic span named in the launch message was worked through; the
divergences that did **not** earn a marker are in §C, and the pulls resisted are in §D.

| chunk | col | verse | Migne prints | Vulgate | why marked |
|---|---|---|---|---|---|
| 0015 | 1264B | Ps 49:23 | *et illic iter quo **ostendam** salutare Dei* | *ostendam **illi** salutare Dei* | the indirect object is gone; Migne's line promises the way absolutely, the Vulgate promises it *to him* |
| 0016 | 1265B | Dan 2:34 | *donec abscisus est lapis **sine manibus*** | *abscissus est lapis **de monte** sine manibus* | ⭐ **the most consequential divergence in the range.** The stone's origin *from a mountain* is dropped from the lemma the whole work expounds — and Richard's exposition four columns later turns the stone INTO the mountain (*Hic est ille mons qui post statuae dejectionem … crescit*, 1266C). A reader of Migne's lemma cannot see that the mountain was there from the first |
| 0016 | 1265D | Abd. 4 | *inter sidera **coeli** posueris nidum tuum* | *inter sidera posueris* | Migne adds *coeli*. ⚠ **The same verse is re-quoted at 1272B (chunk 0019) WITHOUT *coeli*, agreeing with the Vulgate** — so the plate prints Obadiah 4 two ways inside one work. That difference is evidence about the plate and is why both occurrences are logged even though only the first takes a marker |
| 0016 | 1266C | Ps 124:1 | *Qui **confidit** in Domino* | *Qui **confidunt** in Domino* | singular for plural. Not cosmetic here: Richard is addressing one man (*si mihi credis, aedificabis tibi*), and a singularized proof-text is exactly the kind of accommodation that must be visible rather than smoothed |
| 0017 | 1267C | Lam 2:13 | *Magna velut mare contritio tua.* | *magna **est enim** velut mare contritio tua* | the causal *enim* is dropped, and with it the logical link to the preceding questions. 7a mechanism 3 (connective smoothed) is the class this guards |
| 0017 | 1267C | Rom 8:30 | *illos et **magnificavit*** | *illos et **glorificavit*** | ⭐ material, and the argument turns on it: the passage is adduced under *gratiam **glorificantem***, three sentences later. Migne's proof-text no longer contains the word it is cited for |
| 0018 | 1269C | 1 Cor 10:12 | ***Qui stat**, videat ne cadat* | *qui **se existimat stare**, videat ne cadat* | Paul warns the man who *thinks* he stands; Migne's line warns the man who *does* stand. The chapter is about self-estimation, so the loss is at the argument's centre |
| 0018 | 1270B | Matt 24:12 | ***Abundabit** iniquitas, **et** refrigescet* | *et **quoniam abundavit** iniquitas, refrigescet* | perfect→future and the causal conjunction dropped; Migne's line is a prophecy where the Vulgate's is a stated cause |
| 0018 | 1270D | Apoc 2:19 | *et **charitatem, et fidem*** | *et **fidem, et caritatem tuam*** | order reversed. Marked because Richard is expounding a **sequence** of metals and the first-named virtue is the gold |
| 0019 | 1271B | John 3:21 | ***Omnis** qui facit veritatem … quoniam **bona sunt*** | *Qui **autem** facit veritatem … quia **in Deo sunt facta*** | ⭐ two divergences in one verse, the second material: "because they are good" for "because they are done in God". Richard adduces it for the *goodness* of the silver work, which is the reading Migne prints and not the Vulgate's |
| 0019 | 1272C | Jer 2:21 | *conversa es **in amaritudinem** vitis aliena?* | *conversa es **mihi in pravum**, vitis aliena?* | ⭐ the exposition hangs on the divergent word: the surrounding paragraph is *quorum os maledictione et **amaritudine** plenum est* … *zelum **amarum** habetis*. Conforming this lemma to the Vulgate would have deleted the hook the gloss hangs on |

---

## C. Divergences examined and left UNMARKED (with the reason)

Every one of these was read word by word against the received text; none changes the sense, so
Pattern 14's threshold is not met. They are logged because a later reader must not take the
absence of a marker as evidence of agreement.

- **1265B, Dan 2:33** — *quaedam fictilis* for Vulg. *quaedam **autem** fictilis*: a dropped
  connective inside a list already asyndetic in Migne's setting.
- **1265B, Dan 2:34** — *lapis autem qui **percussit** statuam* for Vulg. *percusserat*: perfect
  for pluperfect, no change of fact.
- **1267D, Ps 48:13** — *Homo cum in honore esset* for Vulg. *Et homo*: dropped initial
  connective at the head of a quotation.
- **1268A, Ps 102:12** — *Nam quantum distat* for Vulg. *Quantum distat*: *Nam* is Richard's own
  hinge into the quotation, not a variant of it.
- **1268A, Rom 8:14** — *hi filii sunt Dei* for Vulg. *ii sunt filii Dei*: orthography and word
  order only.
- **1270C, Ezech 18:24** — *Si averterit justus justitia sua* for Vulg. *Si autem averterit **se**
  justus **a** justitia sua*. Looks like two losses, and is one: *justitia* stands as a bare
  ablative of separation, which is good Latin, so "turn away from his justice" **is** the literal
  rendering of the printed words. No repair was made and none was needed.
- **1272A, Isa 3:12** — *qui beatum te dicunt* for Vulg. *qui te beatum dicunt*: word order.
- **1272B, Abd 4** — *Sed si exaltatus fueris … et inter sidera posueris*: *Sed* is Richard's
  connective; the omitted second *si* is the Vulgate's, not a sense change. See §B for the
  *coeli* half of this pair.
- **1272B, Isa 47:2–3** — *Et tunc revelabitur ignominia tua* for Vulg. *Revelabitur ignominia
  tua*: an added temporal connective binding the two verses Migne has run together.
- **1271C, Apoc 2:4** — *quod charitatem tuam primam **dereliquisti*** for Vulg. *reliquisti*.
  Intensified compound, same sense. ⚑ Worth a note anyway: **Richard's own gloss in the very next
  sentence prints the Vulgate's simple verb** (*quod charitatem primam **reliquit***), so the
  plate carries both forms four words apart. Evidence about the setting, not about the sense.
- **1273A, Eccli 2:16** — *Vae **illis*** for *Vae his*, and *diverterunt in **pravas*** for *in
  vias pravas*. Ellipsis of the repeated noun; no sense at stake.
- **Citation labels.** Four `[n: …]` locators in the range point at the wrong book or chapter —
  0017's *(Rom. XIV)* on Rom. 8:14–17; 0018's *(Apoc. VIII.)* and 0019's *(Apoc. VIII)* on
  Apoc. 2; 0019's *(Luc. IX)* on Apoc. 2:2; 0016's *(Abd. IV)* on a one-chapter book. Note
  contents are Migne's citations and pass through **verbatim and untranslated** — nothing was
  corrected. Flagged for the indexer, not for the text.

---

## D. Lemma pulls RESISTED (positive evidence — the brief asks for these by name)

1. ⭐ **1265B — the doubled *statua* is NOT dittography, and no `[d: …]` was fired.** Migne prints
   *ecce quasi statua una grandis statua illa magna, et statura sublimis stabat contra te*, and
   the obvious reading is Pattern 11. **Two controls say otherwise.** (a) The Vulgate prints the
   same words at Dan 2:31 — *quasi statua una grandis: statua illa magna* — separated by a colon;
   what Migne has lost is the punctuation, not doubled the noun. (b) **The work is its own
   control:** chunk 0017 re-quotes the passage in two pieces and treats the two as consecutive
   phrases, glossing *statua una grandis* first and *statua illa magna, et statura sublimis*
   second. A `[d: …]` here would have told the reader the plate repeated itself when it did not.
   The English carries the run-on exactly as printed, with no supplied colon (Pattern 8).
2. **1264C — Rom 11:33 agrees with the Vulgate here and was left alone.** Migne prints *O
   altitudo, **divitiarum**, sapientiae, et scientiae Dei, quam incomprehensibilia **sunt**
   judicia ejus…* ⚑ **Chunk 0009 (col. 1252D) prints the same verse WITHOUT *divitiarum* and
   without *sunt*, and closes it with `!` where 1264C closes with `.`** So the divergent printing
   is 0009's, not this range's, and the pull to "regularize" the two occurrences to each other was
   resisted in both directions. **This is evidence about the plate and belongs to whoever holds
   0009.**
3. **1264C — no `!` supplied.** Rom 11:33 is exclamatory and the Vulgate prints `!`; Migne prints
   a period here. Carried as printed (Pattern 8).
4. **1270D — Apoc 2:19 keeps its question mark.** Migne closes a sentence that is not a question
   in the received text with `?`. Carried exactly, per Pattern 8 and the launch brief. It is in
   fact defensible on the page — Richard's frame is *Nonne operari tibi videtur in auro, cui
   dictum est a Domino: …?* — but it was carried because it is printed, not because it construes.
5. **1272A and 1273A — two further printed periods on sentences that are questions**
   (*Nunquidnam tibi non tale videtur opus illorum…* and *Quid autem est, quod hujusmodi homines
   … famae.*). Both carried with the printed period; no `?` supplied.
6. **1268A, Ps 102:11 — *secundum altitudinem coeli terra*.** The Vulgate has *coeli **a**
   terra*, and the missing preposition looks like a defect. It is not: *terra* is a well-formed
   ablative, and an ablative of separation without preposition construes. Rendered "according to
   the height of heaven from the earth"; no marker, no crux-level conjecture.
7. **1264B, Ps 41:5 and 1266A, Job 30:19 and 1266A/B, Job 7:16 & 13:15 and 1267D, Jer 2:20 and
   1268B, Rom 1:28–29 and 1268D, Ps 49:21 and 1270D, 1 Cor 13:4–7 and 1272B, Apoc 3:1 —
   all verbatim against the Vulgate.** Read word by word; nothing to mark. Listed so the negative
   result is on the record.
8. ⭐ **The familiar-cadence pull, twice refused.** Dan 2:35's *favillam aestivae areae* wants to
   become "the **chaff** of a summer threshingfloor" (Douay) and Ps 102:12's *ortus* wants to
   become "the **east**." Both were kept literal — "cinders", "the rising" — because 0017's
   exposition of *favilla* depends on it being the light ash that flies apart at a breath
   (*ad quemlibet, vel tenuem flatum dissilire*), which "chaff" would silently replace with a
   different image.

---

## E. Conjectures DECLINED (census candidates, named as the brief requires)

None of these clears the `[cj: …]` bar of 2026-08-15 (negation or correlative only). All are
rendered as printed.

1. ⭐ **1269D (0018) — *simultas* in the metal-vice list.** *In auro intelligitur charitas, in
   argento veritas, in aere **simultas**, in ferro crudelitas, in testa fictili fragilitas.*
   **Control:** *simultas* occurs in 66 PL files and means *enmity, rivalry* (checked in context
   at 11771: *ut nulla se ingerat simultas in opere*). It is a real word in a real slot, so
   Pattern 12 has nothing to wrap and Pattern 7 governs: rendered **"enmity."**
   ⚠ **But the plate itself glosses it as something else.** The very next paragraph expounds the
   bronze as *simulatio* (*Sic **simulatio** suavem adulationis tinnitum habet in sermone*), and
   chunk 0019's closing summary prints *in aereis **simulatio***. So the work's own two other
   statements of this slot say "dissimulation," and only this one says "enmity." **This is the
   strongest Pattern 18 candidate in the range and it is declined only because the bar is scoped
   to negations and correlatives.** If that bar is ever widened, this site should be revisited
   first. The English reads "enmity" in the list and "dissimulation" in the gloss — the mismatch
   is the plate's and is deliberately visible.
2. **1268D (0017) — *servire* for *saevire*.** *contra semetipsum per increpationem **servire**
   videtur* — "seems to serve against itself by rebuke." *saevire* ("to rage against itself")
   would construe far better with *increpationem*. Declined: a real word, a filled slot, no
   negation or correlative involved. Rendered as printed.
3. **1265C (0016) — *modus dilectionis est sine modo*.** *quia modus dilectionis est sine modo,
   sine mensura est aestimationis suae magnitudo.* The clause wants a correlative frame (*quia
   **ubi** modus … sine modo est, sine mensura est …*). ⚑ **This one is arguably inside the
   `[cj:]` bar, since the word that went wrong is a correlative** — but the bar's own wording is
   that the printed word must make the sentence *say something the author is arguing against*,
   and here it merely fails to construe as a period. **Declined and named as a census candidate**;
   rendered literally, the two clauses standing in bare parataxis as printed.
4. **1266B (0016) — *mittere in mari*.** *dicere huic monti tollere, et mittere in mari* — ablative
   where the Vulgate's *in mare* (accusative of motion) belongs. Attested medieval usage
   (Pattern 9); no marker, no conjecture. Rendered "be cast into the sea."
5. **1273A (0019) — *quae super et in prosperis per concupiscentiam resolvitur*.** *super* stands
   without an object and may be a setting of *supra* or a survival of *semper*. Declined; rendered
   "which both above and in prosperous things is dissolved."
6. **1269B (0017) — the verbless *talem***. *ne forte oporteat velis nolis, quandoque interius vel
   exterius **talem** forte* — *esse* is not printed. The infinitive is supplied as **plain text
   with no brackets** ("to be such"), per the brief's rule that a grammatical ellipsis supply
   takes no marker at all.
7. **1264D (0015) — *seipsam* for *seipsum***, of *animus*. Gender mismatch with no English
   exponent: Pattern 9, no marker, no edit, and flagged here so a later sweep does not churn it.

---

## F. Vocabulary — calls made, and the ones wanted RATIFIED for the whole work

⭐ **The three starred calls below govern the lemma the entire work expounds and are re-quoted in
0017 and 0021 by other agents. They need ratification, not silent inheritance.**

1. ⭐ **`fictilis` = "earthenware"; `testa` = "clay" (the brief's fixed term).** The 1265B lemma
   prints BOTH words, and the exposition later turns on which one Migne prints where —
   0019's *fictiles plantas* against 0017's *testeos pedes*, and 0018's *vasa testea*. Giving
   *fictilis* its own English word keeps the pair tellable apart on the page. Compound sites read
   accordingly: *in **testa fictili** fragilitas* (1269D) = "in the earthenware clay, fragility."
2. ⭐ **`favilla` = "cinder(s)"; `cinis` = "ashes".** Kept distinct because 0017 expounds *favilla*
   specifically (*omni turbini cedere … ad quemlibet, vel tenuem flatum dissilire*) and Job 30:19
   prints the pair *favillae et cineri*. Douay's "chaff" at Dan 2:35 was refused (§D.8).
3. ⭐ **`lutum` = "mire".** Forced by the brief's *testa* = "clay": the two words are contrasted in
   the same sentences (*inchoatur ex auro, et consummatur in **luto***, 1265C; *velut vile lutum*,
   1265D) and cannot share an English word. Job 30:19 accordingly reads "I am compared to mire."
4. **`contritio` / `conterere` = "crushing" / "to crush"** throughout, including Dan 2:35
   (*contrita sunt pariter ferrum, testa, aes…*), Lam 2:13 (*Magna velut mare **contritio** tua*)
   and its gloss at 1273A (*Contritio propter testae corruptibilitatem*). One English root, so the
   lemma and the gloss stay visibly the same word.
5. **`intuitus` = "look"; `aspectus` = "aspect".** They collide across a single paragraph in 0017
   (*intuitus ejus erat terribilis* … *O statuae nostrae **aspectum** vere terribilem*), so the
   distinction is load-bearing there.
6. **`sustinentia` = "endurance"** (Eccli 2:16), kept off *patientia* = "patience", which stands
   four lines away in the same chunk.
7. **`simulatio` = "dissimulation"** — and see §E.1 for *simultas*, which is NOT given the same
   English.

### Fixed-table entries followed against my own judgment (logged per the brief)

- **`virtus` = "virtue"** even at *de Domini **virtute** praesumere* (1266C) and *de propria
  virtute et fortitudine* (1269B), where "power"/"strength" reads far better in English. Followed
  the table; the tension is real and recurs in 0017's *Omnem virtutem, omnem fortitudinem, omnem
  industriam tuam* where *virtus* and *fortitudo* stand side by side.
- **`animus` = "spirit", `mens` = "mind", `anima` = "soul"** held apart everywhere. The range's
  tightest site is 1268D (0017), where *animus*, *anima* and *conscientia* occur in two
  consecutive sentences (*tactus **animus** conscientiae propriae accusatione confunditur. Et …
  praevaricatrix **anima** statuitur*). Neither of the two flagged *animus*/*spiritus* collision
  chunks (0005, 0034) is in this range.
- **`pietas` = "mercy"** (1266A *de Domini pietate desperare*, 1266B *in sola Domini pietate*),
  after the 9741 anchor's *bonitatis et pietatis Dei* → "the goodness and mercy of God".
  *misericordia* does not occur in the same chunk, so nothing collides; flagged in case a peer
  needs both words in one sentence elsewhere.
- **`detrimentum` = "decline"** at 1265B (*per multiplicia detrimenta decurrens*), per the table.
- **`gradus` = "step"** at 1269C (*quanto gradus altior, tanto casus deterior*) and in 0019's head.

---

## G. Punctuation and structure carried as printed (Pattern 8)

Question-mark and exclamation parity is exact across all five pairs (0015 1/1 · 0016 4/4 ·
0017 11/11 · 0018 4/4 · 0019 14/14 `?`; exclamations 0/0 · 4/4 · 5/5 · 4/4 · 0/0). Specific
carries worth naming:

- **1266B (0016) — lowercase `o` after `!`**: *O quanta mentis altitudo! **o** quanta fortitudo*.
  Preserved lowercase.
- **1267C (0017)** — Migne's semicolon after *filia Hierusalem* where the Vulgate prints `?`.
  Carried as a semicolon; no question mark supplied.
- Three questions printed with periods and one statement printed with a question mark: §D.4–5.

Paragraphing follows the Latin twin 1:1 (one body paragraph per chunk, as printed). No verse
lineation anywhere in the range. No guillemets in either twin; the few word-as-word quotations in
0017 (*"great," … "lofty"*) use straight quotes, which are ours, per Pattern 6.

---

## H. Within-work drift found against peer chunks — for the merge pass (runbook step 4)

Checked after writing, against the English peers already on disk. Two conflicts, both on the
starred calls in §F, and both are *within* one work, so the "let each stand" ruling does not apply:

1. ⚠ **`fictilis` — chunk 0021 renders it "clay", the same word it gives *testa*.** Its 1276B
   re-quotation reads "its feet of iron and of clay", and its gloss then runs "the iron and the
   clay are crushed". **That collapses the very pair the launch brief asked to be kept distinct**,
   and 0021 is re-quoting the same Dan. 2:34 lemma my 0016 carries. Recommend 0021 move to
   "earthenware" for *fictilis* and keep "clay" for *testa*, per §F.1. (0026's *lutum* = "mire"
   already agrees with §F.3 — no action there.)
2. **`favilla` — chunk 0022 renders it "ash", where 0015–0019 render "cinder(s)".** 0022 is the
   chunk that expounds *favilla* at length (nine occurrences), so it is the natural place to
   settle it; but note its "chaff" is for *palea*, not *favilla*, so there is no three-way
   collision, only a two-way one. Whichever word wins, the Dan. 2:35 lemma at 1265B and the
   exposition at 1269A must use it.

---

## I. Left unresolved

- **§E.1 (*simultas*, 1269D)** is the one site in the range where the shipped English will look
  wrong to a reader who reads the next paragraph. It is deliberate and it is the largest open
  judgment here.
- **§D.2 (Rom 11:33 at 0009 vs 1264C)** needs whoever holds chunk 0009 to see this note; the
  divergent printing is on their column, not mine.
- **§A.3 (`[sic: meus]` in a `## ` head)** is the only head-borne marker in the range and should
  be confirmed at the merge pass, since heads index as identity.
