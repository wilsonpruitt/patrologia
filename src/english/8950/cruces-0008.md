# *Glossa ordinaria*, **Liber Genesis** — cruces, chunks 0008–0011 (cols 0095A–0106D)

Translated 2026-09-05, one translator, 4 chunks (5,041 Latin words). `verify-english.mjs`:
**zero errors on 0008–0011** (column anchors, `[n:]` notes, guillemets and question marks all
1:1 with the Latin twins; 0007's two errors are a neighbouring stint's and are untouched here).

**Apparatus fired: 5 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
Per-chunk parity (English / Latin): anchors 12/12 · 14/14 · 11/11 · 10/10 · notes 23/23 ·
23/23 · 13/13 · 14/14 · `«` 29/29 · 46/46 · 29/29 · 25/25 · `»` 28/28 · 44/44 · 29/29 ·
25/25 · `?` 3/3 · 1/1 · 0/0 · 0/0.

**SPAN COUNT — the brief's 183, confirmed.** Counted in my own four Latin chunks: **123
closed `« … »` spans + 60 `*…*` spans = 183**, matching the brief's header exactly.
⚠ The count reconciles only because the harvester pairs guillemets: the raw marks are **125
`«` and 124 `»`**, and the three unpaired ones (§3 below) appear in no inventory line. They
are Migne's, not ours — the plate was read for all three.

⭐ **THE WHOLE RANGE WAS READ AT THE PLATE**, before the English was written, not after:
archive.org `patrologiaecurs04migngoog`, **PDF page = (column + 11) / 2**, corner numbers read
first on each page — pp. 53 (095/096), 54 (097/098), 55 (099/100), 56 (101/102),
57 (103/104), 58 (105/106). Nineteen twin/plate divergences were confirmed at 600–1200 dpi
and are filed in `data/briefs/8950-PENDING-TEI-PATCHES-0008.md`; thirteen more were seen only
at 300 dpi and are listed there as **not acted on**. **Foot-of-page apparatus: checked zero on
all six pages, both layers.**

---

## §1 · CONVENTIONS — decisions this stint made, stated for the merge

Ruth (8968 §1) and Tobit (8970 §1) govern and were not re-opened: `VERS. n.--` passes through
verbatim; the lemma is Englished; a fragmentary lemma is rendered as the phrase it stands for;
sigla ride as ordinary `[n:]` notes with Migne's own internal spacing; `*usque ad*` →
***as far as***, with **no verb ever supplied**. What follows is what this range had to settle.

### (a) The `*Historice / Allegorice / Mystice*` tags are TRANSLATED, in their italic span
`*Mystice.*` → ***Mystically.*** (0096A), `*Allegorice.*` → ***Allegorically.*** (0098B,
0101D). Corpus precedent, not invention: the shipped English carries 14 `*Mystically.*` and
2 `*Historically.*` and no untranslated tag. **A note inside the tag's italic span stays
inside it** — 0096A prints `*Mystice. [n: (AUG., …)]*` and the English does the same.

### (b) ⭐ NO `[var:]` on a quotation Migne HIMSELF labels as a rival version
This range is dense with them — LXX (×7), Aquila, Symmachus, Theodotion, *in Hebraeo*,
*alia translatio*. Where Migne announces the version, its divergence from the Clementine **is
the sentence's own subject**, and a `[var:]` restates what the text already says. Marking them
would have put ~12 markers in four chunks and buried the four that carry information.
**The rule taken: `[var:]` fires where the words are offered AS the text and diverge.**
Worked pair at 0095B, which is exactly why the rule was needed: Jerome's first quotation is
given bare, under a naked `(HIERON.)`, so it **took the marker**; his second is introduced
*Melius in Hebraeo habetur*, so it **did not**.

### (c) ⛔ WORDS follow the plate; PUNCTUATION follows the TWIN
Nineteen twin/plate divergences were confirmed in this range (patch file, Part A), and they
split into two classes that must be handled differently:

- **A divergent WORD** — the English renders what Migne printed, per the locked "plate where
  read" rule. Five sites: *Deos* (0097A), *potest* (0098A), *interpretatur* (0100A),
  *intellectu* (0102C), plus the four non-words whose SENSE the English renders.
- **A divergent MARK** — ⛔ **the English follows the TWIN, not the plate.** Three sites were
  first set from the plate and then reverted: `« septempliciter: »` at 0100A (twin `;`), the
  semicolon after *positio* and the absent one after *dedicatio* at 0103C, and the dropped
  opening `«` at 0106A. **The reason is mechanical and not a softening of Pattern 8:**
  `verify-english` compares guillemets against the twin as a hard check, and the band-by-band
  colon/semicolon comparison (the test that caught 8989 and Tobit) partitions on the twin's
  anchors — so an English that follows the plate on a mark manufactures a mismatch in exactly
  the instrument that exists to find real ones, for a difference no reader can act on. The
  plate readings are in the patch file; when the patch lands, both columns move together.
  ⚑ **Band comparison run and clean:** colons, semicolons, question marks and guillemets match
  the Latin twin in **every band of all four chunks**, zero mismatches.

### (d) The *gentes* axis in this range
`gentes` of the peoples subdued by Rome, and of "all nations" out of which the Church gathers
(0100B, 0106A) → **nations**, generic. `sub gentibus sive sub Christianis regibus` (0100B) →
**Gentiles**, the *Judaei*/*gentes* opposition, with *gens Judaea* → **the Jewish nation** in
the same sentence. `Dispersus in gentibus` of the scattered Jews (0099C) → **nations**.
`diversitas gentium` (0106B) → **nations**. `daemonibus` (0104C) → **demons**, per the axis.
⚠ Instrument check run: `natio` appears **nowhere** in this range (every hit is
*damnatio-/condemnatio-/generatio-/interpretatio-*); `turba`/`multitudo` — one *multitudine*
(0099C) and one *multitudinem* (0106A), both **multitude**, no *turba* at all.

### (e) `usque ad` — 20 formulas, 6 ordinary. Decided per occurrence, per the `etc.` splice test
**Formula (italic, after an `etc.`, 20×):** 0095B, 0095C, 0095D, 0096A, 0096B, 0096C ×2,
0098A, 0098B, 0098D, 0100B ×2, 0100C, 0101B, 0103D, 0104B, 0104D, 0105D ×2, 0106B.
**Ordinary Latin, unitalicised (6×), and each takes its own English:** 0097A *usque ad ultimum
judicium* → "until the last judgment"; 0099D and 0100A *usque ad septimam generationem* /
*usque ad tempus illud* → "until"; 0102A *ab Adam usque ad Christum* → "from Adam to Christ";
0103B *per denarium usque ad Noe* → "up to Noah"; 0102D *usque ad diluvium* → "up to the
flood". Not one of the six sits inside an italic span, and not one follows an `etc.`

### (f) The abridgment's tails are parsed as strictly as prose, and none was completed
Three resumption tails land mid-clause and stay there: 0095C *sed prius reluctatum est cum
dolore consuetudini malae*; 0096C *quae falsum verum esse putavit*; **0098A**, where the plate
reads *sed **potest** in exsilio generata* and the complementary infinitive has been cut out by
the splice. Only there is a word supplied, in brackets — "but it can **[be]** begotten in
exile" — because *potest* demands a complement that the abridgment removed. **This is not the
formula being completed** (Tobit §1(b)); it is a bracketed English exponent inside a
resumption. Recorded because it is the one place in the stint where anything was supplied.

---

## §2 · THE FLAGGED SITE — 0104D, and it is a REAL divergence. `[var:]` FIRED.

    VERS. 5.-- « Videns autem Dominus, » etc.

**Verdict: Migne prints *Dominus*; the Clementine's Gn 6:5 reads *Deus*. The `⚑ MATCHES ONLY
ELSEWHERE` mark was right, and the marker stands.**

Evidence, in order:

1. **The file.** `sources/vulgate/clementine-flat.txt`, **Gn 6:5**: *Videns autem **Deus** quod
   multa malitia hominum esset in terra…* The gloss is on Genesis 6 — its head is `CAPUT VI.`,
   its neighbours are `VERS. 3, 4.` (Gn 6:3, *Non permanebit spiritus meus*) and `VERS. 6-8.`
   (Gn 6:6, *Poenituit eum*), and the lemma is addressed `VERS. 5.` So the verse is fixed
   independently of the words, and it is Gn 6:5.
2. **The brief's other address, checked and rejected as the source.** **Gn 29:31** does read
   *Videns autem Dominus quod despiceret Liam* — but that is Jacob and Lia, four books' worth
   of narrative away, in a chapter this commentary has not reached and does not cite. It
   explains why a mechanical phrase search matched; it is not a candidate reading here.
3. ⭐ **The plate, read at 1200 dpi (p. 57, col 104, band D, corner numbers checked first):**
   `VERS. 5. — « Videns autem Dominus, » etc. Non in Deum poenitentia cadit…`
   **Migne's type reads *Dominus*.** So this is not the digitization manufacturing a divergence
   — the class `plate-reads.json` exists to catch, and the class that would have made a
   collation "find" a defect nobody printed. The claim is against the plate and the plate
   supports it.
4. **Not the gloss's own word.** The comment immediately below reads *Non in **Deum**
   poenitentia cadit* and *ira **Dei***, i.e. the expositor says *Deus* while the lemma says
   *Dominus* — so the divergence is in the quotation alone, which is exactly Pattern 14's case.

Marker as fired: `[var: Vulg. Gn 6:5 reads *Deus*, "God"]`.

⚑ **And the same divergence recurs 25 columns earlier**, unflagged by the brief because the
phrase matches Gn 4:25 well enough for the pre-scan: **0102B `« Posuit mihi Dominus semen
aliud, »`** against Clementine Gn 4:25 *Posuit mihi **Deus** semen aliud pro Abel*. Plate read
at p. 56 (corners 101/102) — Migne prints *Dominus*. `[var:]` fired there too. **The check
that fired once found a pair; a `⚑` mark is a place to start, not the extent of the class.**

---

## §3 · THE THREE UNPAIRED GUILLEMETS — all three are MIGNE'S, plate-read

- **0100C, unclosed `«`** — `LXX: « Habitavit in terra Ναΐδ Naid, … dum huc atque illuc
  profugus aberrat.` Plate (p. 55): the quotation opens and is never closed. Mirrored
  unclosed, per Pattern 5's corollary.
- **0101C, unclosed `«`** — `VERS. 22.-- . . . « Tubalcain. [n: (RAB.)] Qui secundum
  Josephum…` Plate (p. 56): likewise open. Mirrored.
- **0106A, orphan `»`** — `Ostium autem arcae, » etc.` ⛔ **This one is NOT Migne's.** The
  plate (p. 58) prints **`« Ostium autem arcae, » etc.`**, balanced. **Corpus Corporum has
  dropped the opening mark.** The English nevertheless mirrors the twin and prints the orphan
  `»`, because guillemet parity against the twin is a hard `verify-english` check and the
  English cannot carry a mark the Latin column does not show. Patch filed; when it lands, the
  English takes the `«` too. **Recorded prominently because a blind reader will meet this and
  read it as our defect — it is our SOURCE's, and the plate is clean.**
- ⚠ The corollary that matters for the merge: **two of three unpaired marks were Migne's and
  one was the digitization's, and no test but the plate separates them.** Do not adopt a
  policy of mirroring unpaired guillemets as "his" without reading the column.

---

## §4 · THE VULGATE DIVERGENCE LIST — every lemma collated, agreements included

Collated against `sources/vulgate/clementine-flat.txt`, never from memory. **Agreements are
listed because a list of findings alone cannot be told from a report by an agent that never
looked.**

### Fired — 5 `[var:]`

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0095B | `« Ipsa servabit calcaneum tuum, et tu conteres ejus calcaneum. »` | Gn 3:15 *ipsa conteret caput tuum, et tu **insidiaberis calcaneo ejus*** | given bare under `(HIERON.)`, as the verse; both halves differ, and the second reverses who does what — Migne's has the serpent crushing, the Vulgate has him lying in wait |
| 0099C | `« Mortuus est enim propter delicta nostra, et resurrexit propter justificationem nostram: »` | Rom 4:25 ***qui traditus est** propter delicta nostra…* | "he died" for "who was delivered up"; the gloss builds on the death (*crucifigendo sunt operati*), so the substituted verb is load-bearing |
| 0102B | `« Posuit mihi Dominus semen aliud, »` | Gn 4:25 *Posuit mihi **Deus** semen aliud pro Abel* | *Dominus* for *Deus*; plate-confirmed, see §2 |
| 0103B | `« Vidit stultum firma radice, et maledixit pulchritudini ejus statim. »` | Job 5:3 ***Ego vidi** stultum firma radice, et **maledixi** pulchritudini ejus statim* | first person turned to third — Eliphaz's testimony becomes an anonymous report. **And Migne cites it `Joan. V`: the words are Job's, and there is no such verse in John.** Plate read at 1200 dpi (p. 57): the type is `Joan. v`, so the misattribution is his, not the digitization's. Reproduced uncorrected per the sigla rule; the marker names the real source. |
| 0104D | `« Videns autem Dominus, »` | Gn 6:5 *Videns autem **Deus*** | the flagged site; plate-confirmed. Full argument at §2. |

### Checked and DECLINED, with the reason — these are not defects

- **0095B `« Ipsa conteret caput tuum, et tu conteres calcaneum ejus, »`** — diverges from
  Gn 3:15 in the second half, and is introduced *Melius in Hebraeo habetur*. §1(b): announced.
- **0097B, three spans** (`« Et ejecit, et habitare fecit contra paradisum… »`, `« et ejecit
  Dominus, »`, `« et habitare fecit ante paradisum… »`) — all against Gn 3:24, all explicitly
  LXX or *in Hebraeo*. Announced.
- **0098C `« Et inflammavit Dominus super Abel… non inflammavit? »`** — announced as
  Theodotion's. Not in the Clementine at all, and could not be.
- **0099C `« gemens et tremens. »`**, **0100A `« Omnis qui occiderit Cain septem vindictas
  exsolvet, »` / `« Septem vindictas exsolvet. »`**, **`« septempliciter »` / `« septulum »` /
  `« per hebdomadem »`** — announced LXX, Aquila, Symmachus, Theodotion. Announced.
- **0104B `« filios deorum »` / `« Videntes filii potentum filias hominum. »`**, **0104C
  `« Non judicabit spiritus meus homines in sempiternum, quoniam caro sunt. »`** — announced
  Aquila, Symmachus, and the Hebrew against Gn 6:3's *Non permanebit spiritus meus in homine
  in aeternum, quia caro est.* Announced.
- **0105C, 0106A `« Bicamerata et tricamerata… »`** — announced LXX against Gn 6:16.
- **0096A `« Et vocavit Adam nomen uxoris suae Eva, »`** — Gn 3:20 spells **Heva**. Spelling
  only; no sense turns on it. Same for **0100D `« Porro Enoch, »`** against Gn 4:18 *Porro
  **Henoch***, and note that our own gloss spells it *Henoch* nine lines later at 0100C.
- **0101D `« Non dico tibi septies, sed usque septuagies septies, »`** — Mt 18:22 reads *Non
  dico tibi **usque** septies*. A dropped *usque* in the first member; the sense and the
  arithmetic the gloss builds on are untouched. Declined.
- **0102A `« Non enim judicabit Deus bis in idipsum, »`** — **not a Vulgate verse.** The nearest
  is Nah 1:9 *non consurget duplex tribulatio*, which shares no wording. Jerome's own maxim, not
  a quotation. No received reading exists to name, so `[var:]` has nothing to compare against.
  Declined and recorded, because its absence from the list would otherwise look like an oversight.
- **0100B `« Disperge illos in virtute tua [n: (Psal. LIII)]. »`** — **the text agrees exactly**
  with Ps 58:12; it is **Migne's citation** that is wrong by five psalms. The note rides
  verbatim (`refDisplay` keeps what he prints); no `[var:]`, since Pattern 14 marks the text.
- **0106A `« Qui non colligit mecum, dispergit. »`** cited *Matth. XI* — the wording is
  **Lc 11:23 exactly**; Mt 12:30 reads *qui non congregat mihi, spargit*. So Migne quotes Luke
  under Matthew's name. Text agrees with its real source, so no `[var:]`; citation logged here.
  ⚠ The *previous* `Matth. XI` in the same chunk (0105A, *Discite a me quia mitis sum et humilis
  corde*) is **correct** — Mt 11:29. The two are not one error.
- **0104A `« Et fuerunt omnes dies Mathusalae quos vixit anni nongenti sexaginta novem… »`** —
  Gn 5:27 reads *Et **facti sunt** omnes dies Mathusala nongenti sexaginta novem anni.* Jerome
  is quoting his own version inside a discussion of the codices' arithmetic, and Migne prints
  the Vulgate form as the lemma four words earlier (`« Et facti sunt omnes dies, »`), so the
  contrast is deliberate. Sense identical. Declined.
- **0100C `« Habitavit in terra ad orientalem plagam Eden. »`** — Gn 4:16 reads *habitavit**que
  profugus** in terra ad orientalem plagam Eden.* A clipped lemma, not a divergence.

### Checked and found to AGREE with the Clementine exactly

Gn 3:15 (`Inimicitias ponam… Ipsa conteret caput tuum`, with Migne's own ellipsis) · 3:16
(`Mulieri quoque`, `Multiplicabo aerumnas`, `Multiplicabo aerumnas tuas`) · 3:17 (`Maledicta
terra`, `Maledicta terra in opere tuo` ×2, `In laboribus`) · 3:19 (`Pulvis es`) · 3:21 (`Fecit
quoque`) · 3:22 (`Et ait: Ecce Adam quasi unus ex nobis`, and all five re-quotations of `quasi
unus ex nobis`) · 3:23 (`Et emisit eum`) · 3:24 (`Ejecitque Adam`, `Et collocavit` ×2,
`Collocavit`, `flammeum gladium`) · 4:1 (`Adam vero`, `Concepit et peperit`) · 4:2 (`Fuit autem
Abel`, `agricola`, `pastor ovium`) · 4:4 (`Abel quoque obtulit`, `Et respexit Dominus ad Abel`)
· 4:7 (`In foribus`) · 4:8 (`Dixitque Cain`) · 4:9 (`Et ait Dominus ad Cain`) · 4:10 (`Vox
sanguinis`) · 4:11 (`Nunc igitur maledictus eris` ×2, `Maledictus eris super terram`) · 4:12
(`Cum operatus`, `Vagus et profugus`) · 4:13 (`Major est iniquitas mea` ×2) · 4:14 (`Omnis
igitur qui invenerit me`) · 4:15 (`Nequaquam ita fiet`, `Omnis qui occiderit Cain`, `Qui
occiderit Cain`, `Sed omnis qui occiderit Cain`, `septuplum punietur`, `Posuitque Dominus Cain
signum`) · 4:17 (`Cognovit autem Cain uxorem suam`, `Et aedificavit civitatem`) · 4:19 (`Qui
accepit duas uxores`) · 4:20 (`Genuitque Ada Jabel`) · 4:21 (`Et nomen fratris ejus Jubal`) ·
4:23 (`Dixitque Lamech`, `Occidi virum in vulnus meum`, `Occidi virum`, `in vulnus meum`, `et
adolescentulum in livorem meum`) · 4:24 (`Septuplum ultio dabitur`) · 4:25 (`Cognovit quoque
adhuc`) · 4:26 (`Quem vocavit Enos` ×2, `coepit invocare nomen Domini` ×2) · 5:1 (`Hic est
liber generationis Adam`, `In die qua creavit Deus hominem`, `Ad similitudinem Dei`) · 5:3
(`Vixit autem Adam`, `Et genuit`) · 5:24 (`Ambulavitque cum Deo`) · 5:25 (`Vixit quoque
Mathusala`) · 5:32 (`Noe vero cum quingentorum esset annorum`) · 6:1 (`Cumque coepissent
homines multiplicari super terram`) · 6:2 (`Videntes filii Dei`) · 6:3 (`Dixitque Deus: Non
permanebit Spiritus meus`, `Eruntque dies illius`) · 6:9 (`Noe vir justus`, `In generationibus
suis`) · 6:13 (`Disperdam eos cum`) · 6:14 (`Fac tibi arcam de lignis`, `Mansiunculas`) · 6:15
(`Trecentorum cubitorum`) · 6:16 (`In cubito consummabis summitatem ejus`, `Coenacula et
tristega`) · 6:19 (`Et ex cunctis`) · 6:21 (`Tolles igitur`) · Ps 62:6 (`Sicut adipe et
pinguedine repleatur anima mea`) · Mt 11:29 (`Discite a me quia mitis sum et humilis corde`).

⚠ **One address anomaly, Migne's, reproduced and not reordered:** the lemma at `VERS. 31.`
(`« Et facti sunt omnes dies, »`, 0104A) glosses Mathusala, i.e. **Gn 5:27**, and the lemma
under the same address at 0104B (`« Noe vero cum quingentorum esset annorum, »`) is **Gn 5:32**.
The recension's verse numbering is its own; Ruth's §1 rule (never reorder, log it) applies.

---

## §5 · THE DECLINED LIST — suspect words, what would settle them, and why NO `[sic:]` fired

**Zero `[sic:]` and zero `[cj:]` in 5,041 words, and this is a finding, not a gap.** Every
plate defect this range actually contains is one our twin has already tidied away, so a
`[sic:]` on it would fail the verbatim-substring guard — the guard is right and the marker is
owed, not withheld. All nineteen confirmed divergences are in
`data/briefs/8950-PENDING-TEI-PATCHES-0008.md`; the ones that will take a marker after the
patch are named there. Below is what a reader should know from the English side.

**`[sic:]` OWED, after the patch — plate defect, twin corrected (all read at 600–1200 dpi):**

1. **0097A `Deos enim et aeternus est`** (twin: *Deus*). A real word with **no grammatical
   slot** — accusative plural as subject of a singular *est* — which is Pattern 12's own test
   (1). English renders the sense, "For God is both eternal and happy"; nothing in the English
   discloses it until the marker can be fired.
2. **0098C `» et. Quia justus`** (twin: *etc.*). Migne's broken abbreviation.
3. **0100A `« septulum; »`** (twin: *septuplum*). Non-word.
   ⚠ And a second thing is lost here even when it is patched: *septempliciter* (Aquila,
   adverbial) and *septuplum* (Symmachus, accusative) **both render "sevenfold" in English**,
   which flattens a distinction Migne is drawing between two Greek translators. There is no
   English exponent for it; Pattern 9's reasoning applies, and this note is the only record.
4. **0101C `id est vulnera quod infixi`** (twin: *vulnere*). Neuter plural against a singular
   relative — no slot. English renders "by the wound which I inflicted".
5. **0104D `contesimo anno`** (twin: *centesimo*). Non-word. English: "the hundredth year".
6. **0105D `Potet in trecentis cubitis`** (twin: *Potest*). Non-word — and *trecentis* prints
   correctly in the very same clause, so it is a broken sort, not an orthography.
7. **0105D `Arca quae treeentis cubitis`** (twin: *trecentis*). Non-word, two lines below (6),
   and the two together are the compositor having trouble with one word on one page.

**Suspicions raised and REFUTED at the plate — recorded because a checked negative is worth
having (brief §4 asks for exactly these):**

- **0099C `dilicta`** — our twin's reading, a non-word, and the natural suspicion is Migne's
  type. **The plate reads `delicta`.** This one is **ours**, and a `[sic:]` here would have
  been a public accusation against a clean page. It is also the shape brief §A calls decisive:
  the suspicion aimed at a non-word was right that an error existed and **wrong about whose it
  was** — which is the whole of `plate-read-triage`'s rule with an instance attached.
- **0097D `Remotus est`** — read oddly against *gladius*; the plate has **`Remotum est`**, an
  impersonal. **English has no exponent** ("it was removed" serves both), so nothing changes in
  the text and no marker is possible either way.
- **0102C `intellecta diligeret`** — reads smoothly as *intelligendo → intellecta → dilecta*,
  a three-term chain, and that smoothness is exactly what brief §4 warns about. **The plate
  reads `intellectu`.** The English follows the plate — "might love with understanding" — and
  the rival (*intellecta*, "might love the things it understood") **loses because the plate
  decides it**, not because it reads worse; it reads better, which is the point.
- **0098A `sed post in exsilio generata`** — construes cleanly ("but afterwards begotten in
  exile"). **The plate reads `sed potest`**, read at 1200 dpi. The tidy twin reading was the
  suspect and the rough plate reading won. See §1(f) for the bracketed supply.
- **0100A `interpretantur`** — plural, distributing over Aquila, Symmachus and Theodotion.
  **The plate reads `interpretatur`**, singular, so the verb belongs to Theodotion alone and
  the first two clauses are elliptical. English follows the plate.

**Raised, unresolved, and deliberately NOT acted on** — thirteen punctuation and orthography
divergences seen only in the 300-dpi full-page render (Part B of the patch file). A mark is
precisely the class a 300-dpi glance gets wrong, so the rule this stint applied is: **act on
the plate only where the line was re-cropped at 600 dpi or better; otherwise log and leave the
twin alone.** Two are worth naming here because they touch structure rather than a comma:
`VERS. 23.--` at 0097B may be set **`VERS. — 23.`** on the plate (the dash before the number,
against every other address in the range), and `CAPUT IV.` may lack its period.

---

## §6 · UNEXPRESSED SUBJECTS — every supplied pronoun, named

- **0095B, *et Dominus conteret Satan sub pedibus ejus*** → "under **her** feet". *ejus* is
  genitive singular and common in gender, so the Latin does not decide it. The antecedent
  taken is the **`ipsa`/`mulier` of the lemma directly above**, which the whole paragraph is
  expounding (*Ipsa conteret caput tuum*) — the head-crushing member of the verse, of which
  this clause is the gloss. ⚠ **The rival is real and is named here rather than buried:**
  Rom 16:20 has *sub pedibus **vestris***, and a translator reaching for the remembered verse
  gets "your feet" or "his feet". Neither is what Migne prints, and *ejus* cannot be plural.
- **0095A, *qui cum ab initio deprehenditur, percutere calcaneo molitur*** → "when **he** is
  caught": the serpent, from *serpentis* two clauses earlier; the same subject carries through
  *non percutit* and *decipere tendit*.
- **0096D–0097B, the whole Rupert paragraph** → "**he**" is Adam throughout (*tam miser factus
  Adam*), and "**let us**" is the divine plural of *quasi unus ex nobis* which the passage is
  glossing. The one place the referent shifts is *ob hoc veracem se esse rideat oculus nequam
  diaboli* — subject *oculus*, not Adam.
- **0100D, *Figurate progenies impiorum … civitatem exstruxit quam vocavit Henoch*** → "**he**
  called", singular, agreeing with *progenies*; the plurals that follow (*dedicant, plantant,
  floreant, arescant*) are Migne's own shift to the collective and are carried as plurals.
  Both numbers are in the printed Latin; neither was harmonised.
- **0103A, *Quasi et iste portavit imaginem terreni qui pro Abel justo repositus est*** →
  "**he** who was put in the place of the just Abel" = **Seth**, named nowhere in the sentence
  but fixed by *pro Abel* and by *ante Seth nullum legitur genuisse* four lines below.
- **0106D, *qui etiam ut sine cibo viverent divina facultate donaret*** → "**they**" are the
  animals of the preceding sentence, not Noe and his household; *viverent* is plural and the
  paragraph's subject throughout is *animalia*.

## §7 · NEGATION — the hosts, named (test 2 / 2a)

Fired on the trigger population (a negative on a verb with a quantifier or correlative near):

- **0095D *Terrae maledixit, non aquis*** — `non` is on **`aquis`**, not on the verb; the
  `non … quia … non de aquis bibit` chain confirms it. English keeps it on "the waters".
- **0096A *sed non ut laborem homini inferrent*** — on the **purpose clause**, not on *erant*:
  the thorns did exist. English: "Thorns were there before, but not so as to bring labor".
  ⚠ This is the 8987 shape exactly (a `sed non ut` beside a verb that would take the negative
  plausibly), and the plate was checked: Migne prints *erant sed non ut*.
- **0099B *qui noluit esse sub gratia, sed sub lege*** — the `sed` correlative fixes the
  negative on **`sub gratia`**, not on *esse*; rendered "who would not be under grace, but
  under the law".
- **0099D *tanquam aut omnia non possit, aut invideat saluti*** — `non` on **`possit`** inside
  the first arm of `aut … aut`; the second arm is affirmative and must stay so.
- **0103B *justorum enim est omnia viriliter agere, nihil femineum, nihil fragile usurpare*** —
  two `nihil`, both on **`usurpare`**, both carried.
- **0104C *Non est incredibile ab hominibus, non ab angelis*** — the second `non` is on
  **`ab angelis`**, and the whole point is that the giants were begotten **by men**. Rendering
  it onto the verb would reverse the claim. English: "by men, not by angels".
- **0105A *nihil fecerit quod poenitendo resipiscat*** — `nihil` is the **object** of *fecerit*;
  7a⁗'s fourth question (does the clause still have the thing it acts on) answered explicitly.
- **0106B *nec impulsu ventorum, nec impetu fluctuum, nec inquietudine animalium … inclinari
  posset aut mergi*** — three `nec`, all on the ablatives, all carried; the *aut* is inside the
  scope of the negation and English keeps it there ("neither tilted nor sunk").
- **0106C *nihil est quod Deus suave et salubre facere non possit*** — a double negative Migne
  prints and the English prints: "there is nothing which God cannot make sweet and wholesome".

## §8 · READ CLEAN — sections examined and found without defect

0095A–0095D (Gregory on crushing the serpent's head; the Augustine splices on Gn 3:16–18) ·
0096B–0096C (the *perizomata* / tunics gloss; the two Augustine splices on *quasi unus ex
nobis*) · 0096D–0097B (Rupert entire — the longest continuous passage in the range, and the
one place where the printed Latin's antitheses could most easily have been smoothed; the
*aeterna felicitas, felix aeternitas* chiasmus is Migne's and is carried in his order both
times) · 0098B–0098D (Isidore on the two peoples; Theodotion on the sacrifice) · 0099A–0099B ·
0100A–0100B (the seven vengeances, all four versions) · 0101A–0101B · 0102A–0102B · 0102C–0103A
· 0103C–0103D (the name-interpretation catalogue) · 0104A–0104B · 0105A–0105C (the ark's
chambers, Strabo and Augustine; the two accounts genuinely disagree in Migne and are left
disagreeing) · 0106A–0106D.

⚠ **One passage that reads oddly and was checked rather than repaired:** 0106C prints *habens
in se **longitudinem**, id est, Trinitatis fidem ac **longitudinem** vitae et immortalitatis;
latitudinem in charitate … altitudinem in spe*. The word repeats where the triad
length/breadth/height would lead a reader to expect something else, and the shape invites a
`[d:]`. **It is not a dittography:** the two occurrences govern different phrases (*Trinitatis
fidem* and *vitae et immortalitatis*) and neither is an eye-skip with no grammatical slot,
which is Pattern 11a's test. Plate read at p. 58: both are printed. Rendered as printed.
