# 8945 — *Liber Deuteronomii* (Glossa ordinaria), cruces for chunks 0000–0004

PL 113, cols 0445D–0459C. PRAEFATIO + CAPUT PRIMUM (whole) + CAPUT II, III, IV, V, VI
(through VERS. 16). Attributed by Migne to Walafrid Strabo; in fact
**Anselmus Laudunensis et schola**.

⛔ Do NOT merge this into `cruces.md` by hand — it is one of five range files.

**Chunks read and their state.** 0000, 0001, 0002, 0003, 0004 were each read line by line
against the Latin twin. **0000 and 0004 are clean** — nothing in them is a defect, and the
few notes below on those two record readings that were checked and let alone, not findings.
0001, 0002 and 0003 carry the substantive entries.

Marker tally for this range: **4 markers — 1 `[var:]`, 2 `[sic:]`, 1 `[ed:]`**, against
**55 `[n:]`, 53 column anchors, 8 `## ` heads, 0 guillemets in either language**, every one
of those four counts at exact parity with the Latin twins (verified mechanically, chunk by
chunk, anchors compared in order). 0 `[d:]`, 0 `[cj:]`, 0 `[nt:]`.

---

## §1 · Conventions followed

The Glossa conventions settled in `src/english/8968/cruces.md` §1 are followed unchanged and
were not re-opened: `VERS. n.--` passes through verbatim; the lemma is Englished; a
fragmentary lemma is rendered as the phrase it stands for; Migne's attribution sigla
(`(RAB.)`, `(ISID.)`, `(AUG., quaest. 6.)`, `(GREG., lib. VII Moral., cap. 10.)`) ride as
ordinary `[n: …]`, verbatim and unanglicized. `CAPUT PRIMUM.` → `CHAPTER ONE.`, the corpus
form. `(cont.)` on a repeated head is our chunking and is carried, untranslated.

**Greek rides verbatim, untranslated** (8944's rule): χιλιάρχους, ἐκατοντάρχους,
πεντεκοσιάρχους, δεκάρχους [0451A], δευτερονόμιον [0447B], Μετονυμικῶς [0457B]. The Latin
glosses that stand beside them are translated as ordinary prose.

**A parenthetical citation Migne prints in the running text, not as an `[n:]`**, is kept
verbatim Latin like a note: `(AUG., quaest. [0457B] 4 in Deut.)` at 0004 VERS. 16 — the one
such in the range, and it carries a column anchor inside it, kept in place.

Fixed renderings, held constant across the range (the within-work one-voice rule):

| Latin | English | note |
|---|---|---|
| *mansio* / *mansiones* | station / stations | the 42 halting-places; 30 occurrences in 0001–0002 |
| *usque ad* (abridgment formula) | *as far as* | italic, per §2 below |
| *turpitudo* | baseness | Basan's interpretation, 0003 CAPUT III, 6 occurrences |
| *amaricantes* | the embittering | the Amorrhites, 0002 @0453D and 0003 @0455A — one English for both |
| *exploratores* | scouts | 0001, 0002 |
| *denarius* (the number ten, and the coin) | denary | 0451A; see §4 |
| *doctor* | teacher | 0001 @0450B, @0450C |
| *pilosus* | hairy | Seir, in both books that gloss it (0002 @0453D, 0003 @0454A) |

**`usque ad` censused per occurrence** (addendum §D — decided from what stands on either
side, never by rule). **27 occurrences in the range: 20 are the abridgment formula and 7 are
not.**

**The formula (20), rendered *as far as*:** 19 set in Migne's own italics (`etc., *usque ad*`)
— 0001 ×2 (ID. @0448D, ISID. @0450A) · 0002 ×2 (ISID. @0453A, ISID. @0453C) · 0003 ×2
(GREG. @0456C, RAB. @0456D) · 0004 ×12 (the AUG./ISID./GREG. excerpts, VERS. 16 through
VERS. 13) · 0001 @0449C (ISID., *Quadraginta anni, etc.*) — **plus one printed ROMAN**, 0002
@0452C *etc., usque ad hoc, "Haec est aqua contradictionis"*, rendered "as far as this".

**NOT the formula (7), each an ordinary preposition:** 0001 *ab exitu … usque quo pervenerunt*,
*A Ramesse usque ad montem Sina*, *de Cadesbarne usque ad campestria Moab* · 0002 *ab Aegypto
usque ad Jordanem*, *a squalore vitiorum usque ad damnationem poenarum* · 0003 *usque ad
haereticorum conciliabula* · and ⛔ **0002 @0452B *de Cadesbarne usque ad torrentem Zareth***,
which is **inside an italic scripture run** and is therefore the exact shape of warning D's
trap: an ordinary *usque ad* wearing the formula's italics. Rendered "as far as the torrent
Zareth", the sentence's own words.

---

## §2 · ⛔ THE THREE MARKERS IN THIS RANGE STAND ON UNREAD COLUMNS — plate reads owed

`node scripts/plate-gate.mjs 8945` names all three. **This is the honest state, not an
oversight**: each is recorded here with its attribution explicitly unsettled, because our
Latin is Corpus Corporum's transcription and not Migne's plate, and both marker families make
a public claim about the plate. Before the work ships, cols **0445D, 0452A and 0454C** must be
read (PL 113 `patrologiaecurs04migngoog`, **PDF page = (column + 11) / 2** — pp. 228, 232 and
233; second witness Gallica `ark:/12148/bpt6k5505319w`, **f = (column + 1) / 2**), or the
markers withdrawn. ⚠ Both `[sic:]` sites below are in the **letter-confusion class that OCR
manufactures** (*g* for *q*, *b* for *d*), which is precisely why frequency and context cannot
license them.

### 0452A · *Mitte viros gui considerent terram Chanaan* — `[sic: gui]`

Num 13:2, quoted inside an italic scripture run. *gui* for *qui* is not a word. Carried under
Patterns 7/10 and marked under Pattern 12; **no second italic marker, since it sits inside an
already-italic lemma**, so the marker reads `[sic: gui]`.
⭐ **7a⁗ applied:** the quarantined run is the clause's only relative pronoun, so the English
supplies it in plain words beside the marker — *Send men [sic: gui] who may view the land*.
Deleting the marker's contents still leaves a clause with a relative and a verb. Migne prints
the same clause correctly eight lines later (*Mitte viros qui considerent terram*, @0452A, and
again *qui considerent* in the Deuteronomy quotation), which is the internal control.

### 0454C · *Cabesbarne est locus in deserto* — `[sic: *Cabesbarne*]`

*b* for *d* in the place-name, and the lemma it glosses prints *Cadesbarne* correctly in the
same line (`*De Cadesbarne.*`), as do eleven other occurrences across 0001–0002. A proper name
with a wrong letter cannot be rendered; carried and marked. 7a⁗ check: the run is the
sentence's subject, no verb, negation or conjunction rides inside it, and the lemma immediately
before it tells the reader what the word is.

### 0445D · *Fasciculus myrrhae delectus mihi* — `[var: Vulg. *dilectus meus mihi*, …]`

Cant. 1:12. **Migne prints no *meus***, so his lemma reads "a bundle of myrrh, beloved to me"
rather than the Vulgate's "my beloved is to me a bundle of myrrh" — and **the whole preface is
built on the shorter reading**: the bundle is the book, and the gloss closes *merito est
fasciculus dilectus Christo* @0447C, "deservedly is it a bundle beloved by Christ." Under the
received text the bundle would be Christ himself and the exposition would not stand. The
divergence is therefore material and takes a `[var:]`.

⚠ **The printed *delectus* is NOT marked and NOT treated as a divergence.** *delectus* for
*dilectus* is the ordinary medieval e/i alternation (Pattern 9: attested spellings are correct
Latin for their period), and the gloss's own *dilectus Christo* twelve lines later shows the
same word is meant. Rendered "beloved", no italics, no marker. Marking it would have buried the
real divergence — the missing *meus* — in noise.

---

## §3 · 0001 — CAPUT PRIMUM

### 0449B · *Qui Hebraice Choreb ( )* — a hole in the digitization. `[ed: …]`

Our source prints an **empty parenthesis** in the middle of a Hebrew etymology. This is not a
guess about the plate: **PL 113's plate read of 2026-08-28 found Corpus Corporum had dropped
three Hebrew words Migne sets** in the praefatio of the companion Glossa 8944 (recorded in
`data/plate-reads.json`, recovered as `data/hebrew-patches/8944.json`). The same class, the
same volume, the same recension. Marked `[ed: …]` under Pattern 13a clause 3 — the hole is made
visible and **nothing is supplied** — because unmarked it reads as our build defect, which is
exactly the 11055 case.

⬜ **Open, and cheap: one page render settles it.** Col. 0449 is PDF p. 230 of
`patrologiaecurs04migngoog` (or Gallica f225). If Migne sets a Hebrew word there it belongs in
`data/hebrew-patches/8945.json` and the `[ed:]` is removed in the same commit.
⚑ **A second instance of the same `( )` stands at 0020.md** (col. 0496 region, another agent's
range) — worth recovering on the same page pass; it is the only other one in the work.

### 0449C · *legis Evangelii impletionem* — no *et*, and none was invented

*Quadragenarius … legis Evangelii impletionem significat*, with the two genitives simply
juxtaposed. The next clause proves both are meant (*decem namque ad legem pertinent, quatuor
vero ad Evangelium*). Rendered asyndetically, **"the fulfilment of the law, of the Gospel"** —
supplying "and" would be exactly the invented conjunction that both blind readers caught in
8968 @0533D. Not marked: nothing is broken type, and the English asserts nothing false.

### 0450C · *Moyses non ex suo cognati sui consilio hoc populo suo persuasit* — the missing *sed*

The sentence prints *non ex suo* and then *cognati sui consilio* with no adversative, and the
argument plainly wants *non ex suo, **sed** cognati sui consilio*: the paragraph's whole point
is that the counsel came from Jethro (Exod. XVIII, cited two lines above). Rendered
asyndetically and literally — **"not from his own, from his kinsman's counsel"** — with the
negation carried and no conjunction supplied.
⛔ **A `[cj:]` was considered and declined.** It is close to the 7561 @0648 shape (a dropped
member of a correlative, glossed on the word Migne did print), but the bar is whether the
English *asserts something false*, and an asyndetic rendering asserts nothing; it is merely
compressed. Recorded here, where the conjecture belongs.

### 0449A · `[n: (Matth. XXXI; Luc. XIII)]` — Migne's citation, printed as he printed it

Matt. 23:38 is meant (there is no Matt. 31). **Not corrected in the text**: citation repair
belongs to `data/citation-corrections.json` at index time, never to the running prose.

### 0449C · *scripta ad correctionem nostram* — 1 Cor 10:11, and NOT marked

Migne prints *Omnia enim in figura contingebant illis, scripta ad **correctionem** nostram* for
the Vulgate's *Haec autem omnia … scripta sunt autem ad **correptionem** nostram*. The
quotation is abridged at both ends (an ordinary Glossa habit) and *correctio* / *correptio* are
near-synonyms whose difference the argument does not touch. Rendered "for our correction".
**No `[var:]`**: Pattern 14 fires on a divergence that changes the sense, and this one does not.
Recorded so a later reader knows it was seen.

### 0450C · *Novit qui sunt ejus qui numerat multitudinem stellarum* `[n: (II Tim. II)]`

A conflation: 2 Tim. 2:19 (*Novit Dominus qui sunt eius*) welded to Ps. 146:4 (*qui numerat
multitudinem stellarum*), under the 2 Timothy citation alone, and with *Dominus* dropped.
Rendered exactly as printed. **No `[var:]`** — a conflation of two verses is not a divergent
witness to either, and no reading is lost to a reader who has the citation and the Latin
opposite.

### 0447B/0451A · *illis … illis*, and πεντεκοσιάρχους for the officers of fifty

Two readings that are odd and are Migne's, rendered as printed with no marker:
- **0000 @0447B** — *illis enim promissa sunt … illis quadrata*, the same pronoun for the two
  contrasted sets, where sense wants "to the former … to the latter." English "to those … to
  those" is equally ambiguous and equally faithful, so nothing is concealed.
- **0001 @0451A** — the Greek glossing *quinquagenarios* ("officers of fifty") is
  **πεντεκοσιάρχους**, commanders of *five hundred*. The Greek rides verbatim (§1) and the
  mismatch stands visible between the two words. It is a fact about this printing, not a
  translatable one; **no `[sic:]`**, because the Greek is a well-formed word and the column is
  unread.

### 0448C · *Undecim vero dies Moyses antequam veniret ad Cadesbarne*

Elliptical and hard: the eleven days of Deut. 1:2 are made the span of an oral recapitulation,
and the second half of the sentence (*et de Cadesbarne usque ad campestria Moab, et illo spatio
undecim dierum scripto voluit commendare*) has two locatives and one verb. Rendered as closely
as the printed words allow, keeping both. Nothing supplied.

---

## §4 · 0002 and 0003 — readings kept as printed

### 0452C · *sin autem non est ipsa Cades* — rendered literally, conjecture declined

The passage distinguishes the desert of Sin at Cades (Num. 20:1) from the desert of Sin between
Elim and Sinai (Exod. 16:1), and closes *sed alia prorsus, et aliis apud Hebraeos scripta
litteris* — "written with other letters among the Hebrews", which is the whole point. But what
they passed between Elim and Sinai was **Sin, not Cades**, so the printed *Cades* here is
suspect (*Sin* is the obvious candidate). **Rendered as printed** — "but Sin is not that same
Cades which … they passed through between Elim and Sinai" — and the conjecture left here.
No marker: *Cades* is a real name in its own grammatical slot, and the column is unread.

### 0456A · *Quia omnis persona … traduntur victi in manus sanctorum* — an anacoluthon

The long sentence opening *Quia omnis persona cujuslibet dignitatis … confidens* never gets a
singular verb; it runs through *cum persecutoribus … usque ad haereticorum conciliabula* and
ends in the plural *traduntur victi*. Rendered as it stands, with the subject left singular and
the verb plural, which is what the page does. Not marked (no English exponent would show it any
better than the parallel column does).

### 0456D · *convenienter dux et princeps in terram promissionis introduxit* — no terminal stop

The chunk, and Migne's sentence, simply **stop**. Pattern 8: nothing supplied. The English stops
where he stops.

### 0451A · the *denarius* pun — "denary"

*qui denarii perfectione vineae denarium exspectantes, ejusdem denarii multos praeparant
participes*: one word doing duty for the number ten and for the coin of Matt. 20. Rendered
**"denary"** throughout, the one English word that carries both, so the pun survives; "penny"
would have kept the coin and destroyed the number, which is what the gloss on the *decani* is
built from.

### 0453B · *Nox peccatoris, dies vita justi*

Verbless in the first half. Rendered "Night is the sinner's, day the life of the just" —
the ellipsis kept, nothing filled in.

---

## §5 · Negation audit (Pattern 7a), and the supplied-pronoun list

**Every negation particle in the five Latin chunks was located and matched against the English,
one site at a time** (the count is a census of the sites, not a substitute for reading them).
**125 tokens: *non* 83 · *nec* 19 · *ne* (final) 6 · *nisi* 3 · *nemo/nemini/neminem* 5 ·
*nullus/nullum/nulla/nulli* 6 · *nihil/nihilo* 2 · *neque* 1.** Per chunk: 0000 8 · 0001 20 ·
0002 26 · 0003 32 · 0004 39. **None was dropped and none was added**, and no word was rendered
as its opposite to make a sentence run. The sites where
carrying one made the English stiff, and it was carried anyway: 0001 @0450A (*praeceptum … non
dicitur*, kept as "is not spoken of" rather than smoothed to "no command is recorded"); 0001
@0450C (§3 above); 0003 @0456B (*Honestum etiam esse non potest, quod turpe est* → "Nor,
moreover, can that be honourable which is base"); 0003 @0455C's four-fold *non fieret nisi …
nec resisteret nisi*, kept in full.

**Pattern 17.** The range's only second persons are in quoted scripture and in the Decalogue
exposition at 0004 @0458A–0458C, where the Latin is grammatically singular throughout
(*colas, suscipias, credas, operaberis, sanctifices, honora, non maechaberis*) and the English
is **thou**. The plural *addetis* (0004 @0457A) and *venissetis / dixistis* (0002 @0452A) take
**you**. No addressee's number was altered.

**Supplied pronouns and words**, each one a place where the Latin has none and English requires
one; listed so a later reader can see them without collation:
"it" as subject of the Deuteronomy book, 0000 @0447B–C passim · "he" for the unexpressed
Moses, 0001 @0449B (*incipiens per Seir … venit*) and 0001 @0449D · "them" at 0001 @0449D
(*trahere vel provocare*) · "him" at 0003 @0455B (*persequitur*) · "us" at 0003 @0455C
(*conterit Deus Satan sub pedibus nostris* is explicit; *concidunt* at 0002 @0453D took a
supplied "us") · "it" for the people at 0003 @0454D (*Israel, populum Christianum*, an
elliptical apposition rendered as one).

---

## §6 · What is owed before this work ships

1. **Plate reads on cols 0445D, 0452A, 0454C** (§2) — or the three markers withdrawn.
2. **A page render of col. 0449** to recover the Hebrew word behind `( )` (§3), which would
   retire the `[ed:]` and produce `data/hebrew-patches/8945.json`; **the sibling `( )` in
   0020.md belongs to the same pass.**
3. Nothing else. The remaining entries above are recorded readings, not open questions.
