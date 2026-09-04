# Cruces — 8967 *Glossa ordinaria*, Liber Psalmorum, chunks 0020–0024 (cols 0883A–0892C)

Band A, stint covering **Psalms XXIX–XXXIII (Vulgate numbering)**. Latin `src/latin/8967/0020.md`–`0024.md`.

---

## §0. Span reconciliation — the count agrees

`data/briefs/8967-lemmata-0020.txt` declares **267 spans**. Counting `*…*` runs in the body of my
own five Latin chunks (frontmatter excluded):

| chunk | spans |
|---|---|
| 0020 | 29 |
| 0021 | 74 |
| 0022 | 44 |
| 0023 | 63 |
| 0024 | 57 |
| **total** | **267** |

**267 = 267. The brief is not mis-split at this range.** Head and tail also agree by inspection:
the brief's first line is `[0883A] VERS. 1.-- *Psalmus cantici in dedic.*`, which is the first span
of 0020; its last is `[0892B]`-band, matching the tail of 0024.

Mechanical parity, all five chunks, Latin ↔ English: column anchors 5/10/6/9/8 present, verbatim and
in order; `[n: …]` notes 22/42/22/31/24, contents identical and in order; italic spans 29/74/44/63/57
after stripping `[var: …]`; question marks 1/1/1/4/3. Punctuation compared **band by band** (Test 3),
`? ; :` — **zero mismatched bands** across all 38 bands.

---

## §1. THE PLATE WAS READ — five pages, cols 0883–0892, all recorded

⛔ **Nobody had read any column in my range.** Under the corrected §3 of the launch brief (the mod-4
clipping rule is withdrawn — the plate is the arbiter, a rule about the plate is not) I opened all
five leaves before firing anything: **PDF pages 447–451** of
`raw/scans/pl113/patrologiaecurs04migngoog.pdf`, at 200 dpi full-page with 450–500 dpi crops,
corner numbers read first on every page. Map `PDF page = (column + 11) / 2` **verified** — p. 447
carries 883/884 in the corners. All five reads are recorded in `data/plate-reads.json`.

**Clipping, observed rather than predicted:**

| page | cols | left col | state |
|---|---|---|---|
| 447 | 883 / 884 | 883 | **clean** |
| 448 | 885 / 886 | 885 | **CLIPPED** — `VERS.` lost entirely at line openings (prints as a bare `9, 10.`), interior lines lose 3–6 chars |
| 449 | 887 / 888 | 887 | **clean** |
| 450 | 889 / 890 | 889 | **clean** ⭐ |
| 451 | 891 / 892 | 891 | **clean** |

⭐ **Col 889 is 1 (mod 4) and is perfectly clean — a further counterexample to the withdrawn rule,
alongside 853, 857 and 901.** Had I decided by the rule rather than by the plate I would have
withheld nothing here (no marker of mine falls in 889), but I *would* have withheld the `[d:]` at
**0890A** on the belief that its neighbourhood was unreliable, and that marker turns out to be
licensed. The failure mode is exactly the one the correction names.

⚑ **Zero foot-of-page conjecture apparatus of either layer** on all five pages — no numbered
`Forte` notes, no asterisk layer. Recorded as five more `spot` reads; it does not license the claim
that the work has none.

## §1a. Markers fired — six

Five `[var: …]` and one `[d: …]`. Every `[var:]` rests on `sources/vulgate/clementine-flat.txt`,
cited book chapter:verse, and **every one now also rests on the plate**: I confirmed that Migne
prints what our TEI says he prints before making a public claim about his text. **No `[sic:]` and no
`[ed:]` anywhere in the range** — see §3.

⚑ `node scripts/plate-gate.mjs 8967` **exits 0**: every marker in this range stands on a column that
was read.

| col | Migne prints | Clementine | why licensed |
|---|---|---|---|
| **0883D** | *Non morte morieris* (Gn 3:4, the serpent) | Gn 3:4 *Nequaquam morte moriemini* | Number changes (2 sg. vs 2 pl.) **and** the negative word changes. The gloss puts the words in the devil's mouth addressing Adam alone, so the singular is doing work; the reader must not be left thinking Migne prints the received plural. |
| **0886B** | *Unguentum effusum est nomen tuum* | Ct 1:2 *Oleum effusum nomen tuum* | Different noun (ointment/oil) and a supplied *est*. The noun is the whole point of the citation, adduced for the Spirit's outpouring. |
| **0886D** | titulus *Intellectus David.* (Ps 31) | Ps 31:1 *Ipsi David intellectus* | Launch brief §2.4 makes the *David* / *ipsi David* distinction load-bearing. Migne drops *ipsi* and inverts. |
| **0888B/C** | titulus *In finem.* (Ps 32) | Ps 32:1 *Psalmus David* | **The Clementine has no *In finem* over Psalm 32 at all.** This is the largest titulus divergence in my range; it is not an abbreviation of the received heading but a different heading. |
| **0890C** | titulus *Psalmus David.* (Ps 33) | Ps 33:1 *Davidi, cum immutavit…* | Dative *Davidi* against Migne's *Psalmus David*; brief §2.4 again. The pre-scan's `⚑ MATCHES ONLY ELSEWHERE — Ps 3:1, Ps 4:1…` is explained by exactly this: Migne's form is the heading of *other* psalms, not of this one. |
| **0890A** | `In sua **in** virtute nullus salvatur` — a **doubled preposition** | — (not a scripture claim) | ⭐ **`[d: in]`, and the plate is what licensed it.** I had declined this under the Ship Test while the column was unread, because a doubled short word is the classic Corpus Corporum artifact and Pattern 11's marker asserts *"Repeated in Migne's plate."* **Read at 500 dpi, the plate sets `In sua in virtute` with normal spacing either side — the doubling is Migne's own.** Per 11a the two runs differ, so the marker goes on the **intrusion**, which is the second `in`: removing it leaves `In sua virtute`, the reading the whole verse-group argues (*Non salvatur rex … in abundantia virtutis suae non salvabitur*). |
| **0891A** | *Immittet Angelum* (Ps 33:8) | Ps 33:8 *Immittet angelus Domini in circuitu timentium eum* | **Accusative object against a nominative subject** — Migne's psalter has God sending an angel; the Clementine has the angel encamping. The gloss then discusses two further readings, which proves the lemma is under textual pressure at this very word. This is the most material divergence in the range and the one a 7a″ conformation would have destroyed: the familiar English ("the angel of the Lord shall encamp round about") is *not* what Migne prints. |

⚑ On the three tituli (0886D, 0888B/C, 0890C): brief §2.4 names Migne-vs-Clementine titulus
divergence as "a real finding, not a checker fault," and **the band is already doing this** — the
0019 stint fired `[var:]` on the tituli of Ps 26 and Ps 27 (0880A, 0881C) and the 0026/0027 stint on
Ps 35 and Ps 36. Mine are consistent with that practice, and all three are plate-confirmed.

---

## §2. In-force conventions — where each bit in my range

- **`In finem` → "Unto the end."** Two occurrences: 0884C (Ps 30 titulus, *In finem psalmus.* →
  "Unto the end, a psalm.") and 0888B/C (Ps 32 titulus). ⭐ **The range supplies fresh evidence for the
  ruling**: at **0884B**, glossing *Non compungar*, Migne writes `Non moriar jam in finem` — *in finem*
  in the commentator's own prose, plainly temporal, "unto the end." A "for the choirmaster" reading of
  the titulus would make the same two words mean two unrelated things four lines apart.
- **`Diapsalma`** — four occurrences, all in-range: 0887C, 0887C, 0887D (`Diapsalma`) and 0891D
  (**`Diapsalmus`**, masculine). All four are carried unanglicized. ⚠ **Not italicized**, because
  Migne does not italicize them — ✅ **checked at the plate on all four, pp. 449 and 451: they are
  set in roman**, and none of the four is inside a `*…*` span, so adding italics would also create
  English spans with no Latin twin and break the 267-span parity. ✅ **`Diapsalmus` at 0891D is
  confirmed masculine at the plate**, so the form beside the work's 37 `Diapsalma` is Migne's. The launch message's
  "unanglicized and italic" is followed on the first half and yielded to the plate on the second, per
  the shared brief's rule that every italic span in the Latin is an italic span in the English *in the
  same place*. Flagging for the merge in case the band wants it otherwise.
- **`Psalmus David` / `Psalmus ipsi David`** — one occurrence, 0890C, rendered "A psalm of David"
  (see §1).
- **Sigla** — 141 notes across the five chunks, all passed through verbatim. **No `(ID.)` or `(Ibid.)`
  expanded**; 0883A carries a compound `(AUG., CASS.)`, likewise verbatim.
- **Vulgate numbering** — untouched. Heads printed PSALM XXIX–XXXIII; every first-lemma probe I made
  against the Clementine resolved to the same-numbered psalm (Ps 29:1, 30:1, 31:1, 32:1, 33:1). **No
  offset anywhere in this range**, consistent with the brief's 138/0/3 measurement.

---

## §3. The three type-defect candidates — ALL THREE SETTLED AT THE PLATE

⭐ **Every one of these was declined while the columns were unread, and the plate then settled all
three — two against my instinct and one for it.** That is the measured lesson of 9004 with a case
attached: *frequency and internal corroboration prove an error EXISTS, never whose it is.*

### 3a. **0884B — `in aeter num laudabo te`** → **CC's. No marker owed.**
Our Latin prints `in aeter num laudabo te`. **The plate reads `in æter-num laudabo te`, hyphenated
across a line break** (450 dpi crop, right column, band B). Corpus Corporum dropped the hyphen and
left the space. **Our corruption, exactly the class the coordinator's `de-cidam`→`deeidam` names.**
- **Rendered** "For ever I will praise thee." **No `[sic:]`**, and none is owed: firing one would
  have accused Migne of CC's defect.
- ➜ **TEI-patch candidate: PL 113 col. 0884B, PDF p. 447 right column.** `aeter num` → `aeternum`.

### 3b. **0890A — `In sua in virtute nullus salvatur`** → **MIGNE'S. `[d: in]` FIRED.**
⛔ **This is the one I got wrong while the column was unread.** I had reasoned that a doubled short
word is the classic CC artifact and declined the marker under Ship Test B. **The plate sets
`In sua in virtute` plainly, at 500 dpi, with normal spacing on both sides** — Migne's own
dittography, and col. 890 is clean, so nothing about the copy explains it away.
- **Marker now fired**, per Pattern 11a on the intrusive copy: `In his own [d: in] strength no one
  is saved`. Both occurrences are rendered, as Pattern 11 requires.
- ⚑ The general point, and it is the reason this crux is worth its length: **my confidence pointed
  the wrong way, and the only thing that corrected it was opening the page.** The withdrawn mod-4
  rule would have reinforced the error rather than caught it.

### 3c. **0886B — `--VERS. 21.`** → **CC's. No marker owed.**
Our Latin reads `[0886B]--VERS. 21. *A conturbatione.*`, the only such form in 2,035 verse addresses
in this work. **The plate reads the ordinary `VERS. 21. — A conturbatione`** (p. 448, right column,
band B). CC transposed the dashes to the wrong side of the address across the column break.
- **Reproduced verbatim** in the English, since the address passes through untranslated. **No marker.**
- ➜ **TEI-patch candidate: PL 113 col. 0886B, PDF p. 448 right column.**

## §3a. ⭐ FIVE MORE CORPUS CORPORUM DEPARTURES, found by reading the whole line

These are the addendum-C class — **every one was found while reading the plate for a different word
a few words away**, and **not one is detectable from our files**, because in each case CC's reading
is the *tidier* one. They are TEI-patch candidates per the coordinator's ruling, **not markers**: a
`[sic:]`/`[d:]` must wrap text that is verbatim in the Latin twin, and in each case the defective
text is precisely what our twin does *not* contain.

| col | Migne prints | our TEI reads | class | leaf |
|---|---|---|---|---|
| **0883D** | `Non movebor **ad** hoc bono` | `ab hoc bono` | **normalization to a form that construes** — *movebor ad* + ablative does not construe and *ab* does | p. 447 L, band D |
| **0887B** | `Dum clamarem tota die, **etsi. Etsi** non sit sibi conscius quis` | `etc. Etsi non sit…` | ⭐ **a plain dittography in Migne's plate, silently tidied away by CC.** Read at 450 dpi; unmistakable | p. 449 L, band B |
| **0887C** | `(ID.) Diapsalma **poenitudinem** commendans` — **no period** after *Diapsalma* | `Diapsalma. poenitudinem` | **punctuation inserted.** ⚑ This retro-explains an oddity I had already logged from the file alone: our TEI's lowercase *poenitudinem* after a full stop. It is lowercase because in Migne there is no full stop | p. 449 L, band C |
| **0887C** | `omnibus sanctis **dici.**` (with a period) | `dicit communem` | **normalization to a form that construes** | p. 449 L, band C |
| **0891A** | `Circumdat Angelus Domini **gyro** timentes eum` | `in gyro` | **a preposition SUPPLIED by CC** — same shape as 8969 @1168B's supplied *est* | p. 451 L, band A |

⚑ **The consequence for the English, stated plainly:** my translation renders the Latin twin **as
shipped**, so it currently reads "moved *from* this good," "*etc.*", and "*in* a ring." If these
five patches land, three of my sentences must change with them — the *etsi* one materially, since
Migne's doubled word wants a `[d: etsi]`. Flagging it here rather than pre-empting a patch that has
not been made.

### 3d. Real words that read oddly — logged, no marker, per addendum A
### 3d. Real words that read oddly — logged, no marker, per addendum A
Addendum A of the shared brief: *a real, well-formed word that reads oddly is Migne's until a plate
says otherwise.* Four sites, none marked:
1. **0883C — `quod morte solvistis`** (2 pl.). "the first sin, which by death you have loosed." The
   surrounding discourse is 3 sg. (*vindicavit in nos*). ✅ **Plate-confirmed as Migne's.** Rendered
   as printed; the address to a plural "you" may be Augustine turning to his hearers, or may be for
   *solvisti*. No marker.
2. **0883D — `Vespere facit.`** Rendered "He acts at evening." Two words, no object, standing between
   the *ad vesperum / ad matutinum* gloss and Adam's speech. Reads like an abridgment stub. ✅
   **Plate-confirmed as Migne's**, so nothing is missing from our side. Rendered literally.
3. **0887C — `sicut supra de rectione inveteratio`** (Ps 31:5). Rendered "as above the growing old
   from governance." ⚑ *rectione* makes no sense here; the conjecture is **`tectione`**, "from the
   covering," which restores the chain Migne himself builds two columns earlier — Ps 31:1
   *tecta sunt peccata* and 0887A's `Tegit, ne in judicio reveletur`. ✅ **Read at the plate: Migne
   prints `de rectione inveteratio`.** So this is a conjecture about *Migne's* text, not about
   CC's, and it stays a conjecture: rendered as printed (Pattern 7), no `[sic:]` (a real Latin
   word), no `[cj:]` (the crux is where the conjecture lives).
4. **0891A — `et si in primis in jucundum accedite`**. Rendered "and if among the first, come ye into
   what is pleasant." The doubled `in … in` construction here is grammatical (unlike 3b) but the
   clause is obscure. Rendered as printed.

---

## §4. The negation and scope work — 7a, 7a″, Tests 2 and 2a

### 4a. ⭐ The site that would have been silently repaired: **0885B**
`ira per zelum turbat: quia et haec, concussa mente, contemplationem dissipat, **quae non est nisi
inquieta mente**; sed inde post paululum plus proficit ad videndum.`

Read straight, the printed words say contemplation *does not exist except with an unquiet mind* —
the opposite of what the sentence is arguing, since the whole point is that a shaken mind scatters
contemplation. The obvious repair (*quieta mente*, or moving the *non*) is exactly the silent repair
7a forbids.
- **Rendered as printed:** "…scatters contemplation, which is not except with an unquiet mind; but
  thereafter, after a little, it profits the more toward seeing."
- **Two parses both construe**, and I am naming both rather than choosing silently:
  (i) *est* is existential — "which does not exist save with an unquiet mind," which contradicts the
  argument and points at a plate defect;
  (ii) *est* carries an ellipsis of *dissipata* from the preceding clause — "which is not [scattered]
  save by an unquiet mind," which construes and agrees with the argument.
  **The English takes neither exclusively**: "which is not except with an unquiet mind" leaves the
  ellipsis open exactly as the Latin does.
- ⛔ **Read at the plate and NOT settled — this is the one place in my range the copy fails.** Col.
  885 is clipped, badly, and the plate's lines run
  `contemplatione dissipat, quæ non est nisi` / `[…]mente ; sed inde post paululum plus proficit`.
  **The word our TEI gives as *inquieta* falls exactly at a clipped line opening**, so this copy
  cannot confirm that Migne prints it, nor rule out that he prints *quieta* — which is the reading
  that would dissolve the whole crux. ➜ **Needs the second witness: Gallica
  `ark:/12148/bpt6k5505319w`, `f = (column + 1) / 2` = f443.** One IIIF request settles it. Recorded
  as an open plate read, and no marker fired in the meantime.

### 4b. ⭐ Test 2a fired, host proved from structure: **0886D**
`si nulli hoc faceret, non videretur vigilare divina providentia, **si omnibus non servaretur divina
patientia**.`
- **Rival reading:** "if the divine patience were not kept for all" — i.e. *omnibus* inside the negated
  clause. **Rejected**, because it makes the second limb a non-sequitur and destroys the
  `si nulli … si omnibus` parallel that the sentence is built on.
- **Taken:** *si omnibus* is elliptical for *si omnibus hoc faceret*, and the *non* stays on
  *servaretur* — "if he did this to none, the divine providence would not seem to be watchful; if to
  all, the divine patience would not be preserved." The negative did not move; only the parallel
  identifies where the *scope* of the condition ends. This is the Colossians/Esther hole exactly.
  Migne prints commas throughout and the English keeps them (band parity holds).

### 4c. ⭐ Test 2a examined and NOT repaired: **0890D**
`Mansueti, non de sua intelligentia superbientes; **non jugum Dei, indomitorum more, ferentes.**`
- **Taken:** the surface scope, *non* on *ferentes* — "not bearing the yoke of God after the manner of
  the untamed." This is what the parallel member forces: the first limb puts *non* on the participle
  (*non … superbientes*), so the second does too.
- **Rival:** *non* scoping the manner-phrase *indomitorum more* — "bearing the yoke of God, but not
  after the manner of the untamed" — which is theologically far smoother and is why it must be named
  and refused: reading well is what the wrong host gives you.
- The English wording preserves the same order the Latin has and so preserves the same ambiguity.

### 4d. ⛔ A question mark Migne does NOT print: **0891C**
`Pascebat Dominus contemnentem se, **et deseret timentem.** Promittit autem non superflua, sed
necessaria.`
The *a fortiori* sense obviously wants a question — *he fed the man who despised him, and will he
forsake the man who fears him?* — and every English translation of Augustine here supplies one.
**Pattern 8 forbids it: a `?` Migne does not print is never supplied.** ✅ **Read at the plate
(p. 451, left column, band C): Migne prints a full stop.** The statement form is his, not our
source's, so the decision is now evidence-backed rather than merely rule-backed. Rendered as he
prints it: "The Lord was feeding him that despised him, and he will forsake him that fears him."
The next sentence (*Promittit autem non superflua*) contradicts it, which is the tell 7a always gives
and is precisely what this edition exists to show. **No marker; logged.**

### 4e. Negatives checked clean, host named (Test 2 run on each)
`non tantum … sed etiam` 0883A (host *tantum*) · `non terreat` 0883A · `non sinit` 0884A ·
`nemini … nullum` 0884A · `nunquam sine ea` 0884A · `non viderent` 0884B · `Non compungar` /
`Non moriar` 0884B · `non differas` 0884D · `nec parcitur` 0885B (host *parcitur*, with the
*et parcitur morti* pivot proving it) · `nec … nec … ulla` 0885B · `ne … videatur` 0886A ·
`nullam … non turbantur` 0886B · `Ne … turbaret` 0886B (host *turbaret*, `tantum` on *promissio*) ·
`ne noceantur` 0886B · `non sum confusus` 0886C · `non amant … neque` 0886C · `non diligere` 0886C ·
`Non in quibus non invenit` 0887A (host of the first *non* is the whole `in quibus` phrase, proved by
the `sed quibus remitit` correlative) · `non sit` 0887A · `ne … reveletur` / `non imputabitur` /
`Non est dolus` 0887A · `non vult confiteri` 0887B · `non imputavit` / `non imputat` /
`non justos se praedicant` 0887B (host *justos*, proved by `sed se agnoscentes`) ·
`Etsi non sit sibi conscius … non tamen justus` 0887B · `non appropiant` 0887D · `ne putetur` 0887D ·
`Nolite fieri` / `non approximant` / `non recedunt` 0888A · `nisi … non possumus` 0888B ·
`non sufficit, nisi abundet` 0888C · `Ne quis putet` / `non nisi` 0888D · `non cognoscens` /
`quis non dabit` 0888D · `non indigent` 0889A · `Non terroribus … non nisi a Deo` 0889B ·
`Ne habeant effectum` 0889C · `non peccata` 0889D (**host is the object *peccata*, not *vidit*** —
the `sed vidit omnes filios` correlative proves it) · `non ex Adam` 0889D ·
`Non salvatur … nec facti … Non modo … sed et … Nemo … nisi … nec … nec` 0889D–0890A (host of
`Non modo` is *modo*, proved by `sed et exteriora`) · `non vult sola facere` 0891A (host examined:
*non* on *vult* with *sola* predicative; `unde vocat alios` shows the force lands on *sola*, and the
English "does not wish to do alone" carries both) · `Non possunt … non aliud quam` 0891A ·
`Non confundantur` / `non erubescit` / `non accessit` 0891A · `nec erubescet` 0891B ·
`Nullus … non securitatem praesumat` 0891C · `non superflua, sed necessaria` 0891C ·
`Non est inopia` 0891C · `fidem non habent` / `non satiantur` / `Deum non habent` 0891C ·
`ne nomen timoris horreatur` 0891D · `non capietur` 0892A · `Nec … diffidas` 0892A ·
`ut nec mentio` 0892A · `Non corporaliter, sed` 0892B · `ut nec patientia pereat` 0892B ·
`Non modo mala … tamen pessima` 0892B (host *modo*, proved by the `tamen` pivot) ·
`Non omnium … sed eorum` 0892B (host *omnium*, proved by `sed eorum`) · `non reconciliatur` 0892C.
**Every printed negative is in the English, on the word the Latin attaches it to, and none is
supplied.**

---

## §5. 7a″ — the lemma inventory walked. Divergences found and NOT marked

The declined list is the deliverable. Each of these was collated against
`sources/vulgate/clementine-flat.txt`; each is a real difference from the received text; **none rose
to Pattern 14's "changes the sense" threshold**, and each is recorded so a later reader need not
re-derive it.

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 0884B | *Dum mihi molesti essent* (Ps 34:13) | *cum mihi molesti essent* | ✅ plate-confirmed. *dum* and *cum* are synonymous here; the sense is identical. Migne also drops the opening *Ego autem*, which a citation naturally clips. |
| 0886A | *Discerne causam meam* cited `(Psal. XLI)` | the words are **Ps 42:1** | ✅ plate-confirmed: Migne sets `(Psal. XLI)`. The **text** matches the Clementine exactly; only his locator is off by one. Notes pass through verbatim (convention 4); correcting a locator would be an editorial act. Logged, not marked. |
| 0883D | *Tristis est anima mea usque ad mortem* cited `(Matth. XVI.)` | the words are **Mt 26:38**, verbatim | ✅ plate-confirmed: Migne sets `(Matth. xvi.)`. Same class — text exact, locator wrong (XVI for XXVI). Note carried verbatim. ⚑ Also an **addendum-D look-alike**: the `usque ad` here is the verse's own words ("even unto death"), **not** the abridgment formula, and is rendered as such. |
| 0888D | *Fides tua te salvum fecit* cited `(Matth. X)` | exact at **Lc 17:19 / Lc 18:42**; Matthew's parallel (9:22) reads *salvam* | ✅ plate-confirmed: Migne sets `(Matth. x)`. Text matches a Clementine verse verbatim; the locator points at the wrong gospel. Note verbatim. |
| 0887B | *Est justus qui perit in justitia sua* | Ecl 7:16 *justus perit in justitia sua* | ✅ plate-confirmed. Migne recasts with *Est … qui*. The assertion is identical; this is a syntactic frame for the `Unde:` introduction, not a textual variant. |
| 0887B | *Nihil mihi conscius sum* | 1Cor 4:4 *Nihil **enim** mihi conscius sum* | ✅ plate-confirmed. A dropped connective *enim* at the head of a quotation. No sense change. |
| 0887C | *usque ad: in manibus temulenti* | Pr 26:9 *in manu temulenti* | ✅ plate-confirmed. Singular→plural. This is the **resumption tail of an abridgment splice**, i.e. Augustine's words at the point the recension resumes, not a lemma quoted as scripture. |
| 0890C | *Et dabit illi Dominus sedem David* | Lc 1:32 *et dabit illi Dominus **Deus** sedem David patris ejus* | ✅ plate-confirmed. One dropped word (*Deus*); *Dominus* remains the subject and the clause asserts the same thing. The tail clip (*patris ejus*) is ordinary quotation. |
| **0891A** | *Non confundantur* | Ps 33:6 *facies vestrae non **confundentur*** | ⚑ **Declined deliberately, and the plate does not rescue it.** Migne prints `Non confundantur` (confirmed p. 451). The difference from the Clementine is mood/tense and **turns on a single letter**, and `sources/vulgate/README.md` warns that a call resting on one letter should say so rather than trust this copy to that precision. The gloss (*Quidquid hic fiat justo, non erubescit*) reads with either. Named here so it is not lost. |
| 0889B | *Timeat omnis terra* | Ps 32:8 *Timeat **Dominum** omnis terra* | ✅ plate-confirmed. A medial word missing from the lemma — but **the gloss restores it three words later**, `sed Dominum timeat terra`. The glossator's own text plainly had *Dominum*; the lemma is clipped, not divergent. |
| 0886B | *Ego dixi in excessu* | Ps 30:23 *Ego **autem** dixi in excessu mentis meae* | ⚑ **This is the pre-scan's `⚑ MATCHES ONLY ELSEWHERE — Ps 115:2` and it is fully explained.** Dropping *autem* makes the fragment coincide letter-for-letter with the opening of Ps 115:2. **The lemma's true home is Ps 30:23**, its own psalm — the gloss expounds fear and the *excessus mentis* of Ps 30, and the very next span quotes Ps 30:23's own tail (*Ideo exaudisti vocem orationis meae*). Taken seriously per launch brief §1 and resolved: **not** one of the nine legitimate elsewhere-matches at 0859B–0860D, and **not** a divergence — a medial clip of a connective, the same class as the 1Cor 4:4 case above. |
| **0884B** | *Domine Deus, in aeternum confitebor tibi* | Ps 29:13 *Domine Deus **meus**, in aeternum confitebor tibi* | ✅ plate-confirmed as Migne's. A dropped possessive in a lemma the gloss then re-quotes twice without it. The assertion is unchanged and the gloss turns on *in aeternum*, not on *meus*. Named because it is a real divergence and would otherwise be invisible. |
| 0883A | *Psalmus cantici in dedic.* | Ps 29:1 *Psalmus cantici, in dedicatione domus David* | ✅ plate-confirmed (`in dedic.`). Migne **abbreviates**. Rendered with the abbreviation preserved — "A psalm of a canticle, at the dedic." — because the truncation is his, and *Domus David* is picked up as the next lemma, showing the rest of the titulus is present in his text. |
| 0884C | *In finem psalmus.* | Ps 30:1 *In finem. Psalmus David, pro extasi* | Clipped titulus. The gloss opens by expounding *Exstasis*, so *pro extasi* was in his text. Abbreviation, not divergence. |
| 0885C | *Oblivioni datus sum tanquam mortuus a corde* | Ps 30:13 *…**tamquam** mortuus a corde* | ⭐ **A checked negative worth recording**: the brief's `⚠ NOT in Clementine verbatim` fired on nothing but the *tanquam*/*tamquam* orthographic variant. Text otherwise exact. |
| 0891A | *Circumdat Angelus Domini in gyro timentes eum* | — | **No marker, and deliberately.** The Glossa itself introduces it as `Alii interpretes sic transtulerunt` — it is telling the reader it is another version. A `[var:]` here would annotate what the text already says. ⚑ And see §3a: **the plate has no *in*** — the preposition is CC's. |
| 0891A | *Immittet Angelum Dominus* | — | Same: `Mendosi codices habent`. The Glossa is doing its own textual criticism and naming the reading as faulty. Marking it would duplicate the author's own apparatus. ⚑ Migne prints a **full stop** after *habent* where a colon is expected; reproduced as printed ("Faulty codices have it."), with the object supplied in English because *habent* is transitive and English cannot elide it. |

### Lemmata collated and found to agree with the Clementine exactly
So the list above cannot be mistaken for a report by an agent who only checked the flagged ones.
Ps 29: 29:3, 29:4 (*in lacum*), 29:6 (*Quoniam ira*, *ad vesperum*, *et ad matutinum laetitia*,
*fletus*), 29:7 (*Ego autem*), 29:8 (*voluntate tua praestitisti decori meo virtutem*,
*avertisti faciem tuam*), 29:9 (*Ad te, Domine, clamabo*), 29:10 (*Quae utilitas in sanguine meo*,
*dum descendo in corruptionem*), 29:11, 29:12, 29:13 (*non compungar*). Ps 30: 30:2, 30:3 (*accelera*,
*esto mihi*), 30:5 (*educes*, *de laqueo … absconderunt*), 30:6 (*in manus*), 30:8 (*exsultabo et
laetabor*, *humilitatem meam*, *necessitatibus*), 30:9 (*in loco spatioso*, *statuisti in loco
spatioso*), 30:10 (*miserere mei Domine*, *tribulor*, *conturbatus*, *in ira oculus*), 30:11
(*paupertate*), 30:12 (*super omnes inimicos meos*, *vicinis*, *notis*), 30:13 (*qui videbant me
foras*, *vas perditum*), 30:14 (*vituperationem multorum*, *in circuitu*, *in eo dum convenirent
simul*), 30:16 (*sortes meae*, *eripe*), 30:17 (*illustra*, *salvum me fac in misericordia*), 30:18,
30:19 (all three), 30:20, 30:21 (*a conturbatione*, *proteges*), 30:22 (*benedictus*, *mirificavit*),
30:23 (*in excessu mentis*, *a facie oculorum tuorum*, *ideo exaudisti…*), 30:24 (all four), 30:25.
Ps 31: 31:1 (*beati quorum remissae sunt*, *iniquitates*, *peccatum*), 31:2 (*beatus vir*), 31:3
(*tacui*, *quoniam tacui*, *dum clamarem tota die*), 31:4 (*configitur spina*, *spina*, *aerumna*),
31:5 (*delictum meum*, *dixi*), 31:6 (*pro hac orabit*, *tempore*, *verumtamen in diluvio*), 31:7
(*tu es refugium*, *erue*), 31:8 (*intellectum tibi dabo*, ×3), 31:9 (all six), 31:10.
Ps 32: 32:1 (*exsultate*), 32:2 (*cithara*, *in psalterio*), 32:3 (*cantate ei*, *canticum novum*),
32:4 (*quia rectum est*, *et omnia opera*, *in fide*), 32:5 (*terra*), 32:6 (*verbo*, *coeli*,
*omnis virtus eorum*), 32:7 (*sicut in utre*, *abyssos*), 32:8 (*ab eo*, *commoveantur*), 32:9,
32:10 (all four), 32:11 (all three), 32:12 (*beata gens*), 32:13 (*de coelo*), 32:15 (*finxit*,
*sigillatim* ×2), 32:16 (*non salvatur rex*, *gigas*), 32:17 (*fallax equus*, *equus*), 32:18
(*ecce oculi*, *oculi*, *metuentes eum*), 32:19, 32:20, 32:21 (*quia in eo*, *speravimus* ×2), 32:22
(*fiat misericordia tua*, *in te*). Ps 33: 33:2, 33:3 (*in Domino laudabitur anima mea*, *mansueti*),
33:4 (*magnificate Dominum*, *magnificate* ×2), 33:5 (*exquisivi Dominum*, *ex omnibus*), 33:6
(*accedite* ×3), 33:7 (*pauper*, *iste*), 33:9 (*gustate et videte*, *gustate*, *suavis est Dominus*),
33:10 (*omnes sancti ejus*, *quoniam*, *non est inopia*), 33:11 (*divites eguerunt et esurierunt*,
*esurierunt*), 33:12 (*venite filii audite me*, *docebo vos*), 33:13 (*dies videre bonos*), 33:14
(*prohibe* ×2), 33:15 (*diverte a malo*), 33:16 (*oculi Domini* ×3, *in preces*), 33:17 (*memoriam*),
33:19 (*juxta est Dominus*, *juxta est*), 33:20 (*multae tribulationes justorum*, *multae*,
*liberabit*), 33:21 (*ossa*, *et unum*), 33:22 (*pessima*, *qui oderunt*), 33:23 (*redimet animas*).

⚑ One conflation, logged and not marked: **0892B** `Sicut et in Novo Testamento, *juxta est, et
salvabit,*`. Both words stand in **Ps 33:19** but not adjacent (*Juxta est Dominus iis qui tribulato
sunt corde, et humiles spiritu **salvabit***). The Glossa is compressing its own psalm's verse while
saying "as also in the New Testament," which is itself odd. Rendered as printed; no received text to
collate a conflation against.

---

## §6. Vocabulary axes — every call in the range

- **Axis 1, the commentator's voice is not archaised.** `ait` 0886D → "says"; `inquit` 0888B → "says";
  `dicit` throughout → "says"/"means". `-eth` forms appear **only inside italic scripture spans**
  (*In the Lord shall my soul be praised*, *Standeth for ever*, *That hate*, *The rich have wanted*),
  never in gloss prose. Checked by the italic-membership test.
- **Axis 2, `turba`/`multitudo`.** ⚑ **Instrument checked first**, per the brief. Neither word occurs
  in my 267 spans or in the gloss prose of chunks 0020–0024. Nothing to report — and nothing to
  mis-report, since a raw `\bturba` grep here returns *turbatus*, *conturbatus*, *turbantur*,
  *perturbati*, *turbat* and *perturbationis*, all of them *turbare*, none of them *turba*.
- **Axis 3, `daemonium`/`diabolus`.** `daemonum` 0889C → "of demons". `diabolus` 0883D, 0884D →
  "the devil"; `a diabolo` 0889B, 0892B → "by the devil". The two are never merged. ⚑ Note the
  brief's warning holds here: `\bdaemoni` misses `daemonum`, which is the only occurrence in the range.
- **Axis 4, the *gentes* family — three calls, all stated:**
  - **0889C `Gentium.` → "Of the Gentiles."** This is the Judaei/gentes typology at its plainest:
    Migne glosses `*Gentium.* Dum idololatriam destruxit` and immediately opposite `*Populorum.*
    **Judaeorum**`. The gloss itself supplies the opposition.
  - **0889C `in quibus gentes conversae` → "in which the Gentiles are converted."** Same paragraph
    group, same opposition, Christian times against the Jews of v. 10.
  - **0889C `Beata gens.` → "Blessed is the nation."** Singular *gens*, and the axis's `nations`
    branch: the lemma is the Vulgate's own generic "blessed is the nation whose God is the Lord."
    ⚑ The two calls sit five lines apart and are deliberately different — *gens* the blessed people
    in the lemma, *gentes* the converted Gentiles in the gloss. Naming it here so the merge does not
    read it as drift.
  - **0888A `gentilis indomitus` → "the untamed Gentile."** The 2026-09-04 addition, applied; and the
    context is the sharpest possible warrant, since the very next clause reads `*mulus,* Judaeus
    piger ad credendum`.
  - **0884C `persecutione omnium gentium` → "the persecution of all the nations."** Plainly generic
    (`omnium gentium`, the axis's own cited pattern), the whole world persecuting the Church, no
    Jew/Gentile opposition in view. Stated because it is the one *gentes* in the range rendered
    "nations".
  - ⭐ **A word the axis does not rule on: `gens tenebrarum` (0887D, the Manichaean "race of
    darkness").** Rendered **"the nation of darkness"** — i.e. held to the axis's `nation` rather than
    invented as a sixth word. **Flagging rather than deciding silently**, which is the behaviour the
    axis section rewards. If the series wants "race" here, this is the only site in my range.
  - `natio` does not occur. ⚑ Instrument checked: a raw `natio` grep in my chunks returns
    *dedicatione*, *incarnatione*, *tribulatione*, *desperatione*, *damnatio*-shaped forms — **zero**
    real *natio*.
- **Axis 5, `mysterium`/`sacramentum`.** `mysterium` does not occur. `sacramento` 0891B →
  "sacrament"; `sacramentis` 0891D → "sacraments". 1:1.
- **Axis 6, `usque ad` → "as far as".** ⚑ **Decided per occurrence** (addendum D). **44 occurrences
  in the range.** 43 are the abridgment formula and take "as far as". **One is not**: **0883D**,
  inside the italic span *Tristis est anima mea usque ad mortem* — Mt 26:38's own words, rendered
  **"even unto death."** Taking the formula reading there would have swallowed a lemma's words, which
  is the trap the addendum names.
- **Additional in-range chains held 1:1**, stated because the gloss argues from them:
  `confiteor` → **confess** everywhere (0883B *Confitemini* "Confess ye", 0884A *confiteamur peccata*
  / *confiteamur laudem*, *Confessio gemina est*, 0884B *confitebor tibi*). The gloss at 0884A builds
  its whole point on the word being **one** word — a "give thanks" for the lemma and a "confess" for
  the exposition would break it. `exsulto` → **exult**, `laetor` → **be glad**, `gaudeo` → **rejoice**,
  forced by 0885A's own definition (*Exsultare est … gaudere: laetari, temperata affectione*).
  `fingo` → **fashion** against `formo` → **form**, forced by 0889D (*Finxit. Manu gratiae formavit*).

---

## §7. Anchors, subjects, and the sections read clean

**Anchor positions** (2b — presence and order are verified mechanically; *position* is not):
every one of the 38 anchors was checked against the word it stands beside in the Latin, not merely
that it is present. Four sit mid-construction and were deliberately split to match Migne:
- 0883C at `quod morte [0883C] solvistis` → "which by death you have [0883C] loosed."
- 0884B at `tempore [0884B] tristitiae` → "in a time of [0884B] sadness".
- 0886C at `vocem orationis [0886C] meae` → "the voice of my [0886C] prayer." ⚑ **The one case where
  the split point could not be kept identical**: Latin splits *orationis* | *meae*, English inverts to
  *my* | *prayer*. The anchor stays inside the same two-word unit, which is the closest available
  position; 8995's precedent at 0605B is the model.
- 0888D at `id est, [0888D] remunerat` → "that is, [0888D] rewards".

**Supplied subjects and elisions** (the dominant defect class — every one named):
- 0883C `Demorabitur` → "It shall abide", subject = **fletus**, the immediately preceding lemma
  *Fletus.*, not the *laetitia* of the following clause.
- 0883D `Deus a Christo faciem` → "God turned away his face from Christ." **The verb is elided and
  lifted from the lemma directly above** (*Avertisti*). English cannot leave a clause verbless; the
  verb is Migne's own, one span away, not a conjecture.
- 0889B `sed quod a Deo utiliter, ideo *ab eo*` → "but what is moved by God is moved profitably" —
  *commovetur* supplied twice from the clause immediately preceding, where Migne prints it.
- 0885C `*Foras,* Christum` → "*Without,* Christ" — the verb (*videbant*) is in the lemma above; the
  ellipsis is carried into the English rather than filled out.
- 0886C `si omnibus` → "if to all" — see §4b for the proof.
- 0885B `quot et quanta ea perturbant` → "how many and how great are the things that disturb": *ea*
  is nominative plural neuter and the verb has no expressed object. Rendered without supplying one.
- 0885B `*Statuisti in loco spatioso,*` **expanded** to "Thou hast set my feet in a spacious place"
  (convention 3; the lemma carries `etc.` and Ps 30:9 supplies *pedes meos*). **This is expansion of a
  fragment, not conformation** — the printed words are not altered, and Migne's text agrees with the
  Clementine here.
- 0887A `*Beati quorum remissae sunt,*` **expanded** to "Blessed are they whose iniquities are
  forgiven" — same class, and the gloss's very next lemma is *Iniquitates.*, which names the supplied
  word.
- ⚑ By contrast **0885B `*In ira oculus.*` was NOT expanded** → "In anger the eye." Migne is glossing
  the two words as a pair and immediately treats *in ira* on its own (`In ira persecutorum`), so an
  expansion to "my eye is troubled with anger" would import a verb the gloss does not use.
  **The two treatments are different classes** (fragment-with-*etc.* vs. a two-word gloss target),
  named here so a later reader does not manufacture an inconsistency between them.

**Read clean, no findings:** 0884A (Ps 29:10–11, the twofold-confession passage), 0884D–0885A
(Ps 30:3–8), 0888C (Ps 32:2–3, harp and psaltery), 0889A (Ps 32:6, the Apostles as heavens),
0891D–0892A (Ps 33:12–16). These were read line by line against the Latin under Test 5 — *does the
English assert what he asserts* — and produced nothing.

**Em-dashes:** two in the range, both carrying real parenthesis (0890C `*Cum immutavit vultum*
— Christ, that is, the sacrifice — *coram*`; 0890B `Because in him — lest anyone murmur about
patience — he adds the gift`). Not a defect class; not marked; noted only so the count is on record.
