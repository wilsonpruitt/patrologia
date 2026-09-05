# *Glossa ordinaria*, **Liber Genesis** (PL 113) — cruces, chunks 0000–0003 (cols 0067B–0082A)

Stint 1 of 8950. Four chunks, 6,252 Latin body words → 9,183 English (1.47×).
`verify-english.mjs` reports **no error on 0000–0003**: column anchors, `[n:]` notes,
guillemets, italics and question marks all 1:1 with the Latin twins.

**Apparatus fired: 5 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
Every `[var:]` stands on a column recorded as read at the plate (0067, 0069, 0070, 0081) **and**
is corroborated by the archive.org scan's own OCR (§2). Nothing was marked on an unread column.

Counts, chunk by chunk (Latin = English in every case):
guillemets `«`/`»` — 0000: 42/40 · 0001: 36/36 · 0002: 23/26 · 0003: 37/35 (frontmatter included).
`[n:]` notes — 19 / 26 / 23 / 29. Question marks — 3 / 6 / 0 / 1.

---

## §0 · SPAN COUNT AGAINST THE BRIEF — ONE SPAN IS MISSING FROM `8950-lemmata-0000.txt`

**My Latin carries 168 marked spans; the brief prints 167.** Counted mechanically over the four
chunk bodies with `«[^«»]*»|\*[^*\n]+\*`, then diffed span-for-span against the brief's inventory
lines. The lists agree everywhere except:

- ⛔ **`« Mente servio legi Dei, »` — 0075B, chunk 0002 — is NOT in the brief.** Collated here
  independently: Rom 7:25 Clementine reads *Igitur ego ipse **mente servio legi Dei** : carne
  autem, legi peccati.* Migne's span is an exact whole-word fragment of the Clementine. **No
  divergence.** (Its twin at 0082C, chunk 0004, sets the same words with the `[n:]` inside the
  guillemets — a different stint's range.)
- One presentational difference, not a count difference: at 0079C the brief prints the span as
  `« Dixit quoque Deus: Producat « terra, »` (outer `«` paired with the closing `»`) where my
  regex isolates the inner `« terra, »`. Same single site, counted once either way.

**So: 167 + 1 = 168, and the brief's omission is at the head of chunk 0002, not at a range
boundary** — i.e. it is not the 9001 mis-split shape. It looks like a single dropped line rather
than a bad cut. A later stint should still run its own count.

---

## §1 · CONVENTIONS — inherited unchanged, plus four this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were not re-opened: `VERS. n.--` passes verbatim;
the lemma is Englished; a fragmentary lemma is rendered as the phrase it stands for; sigla ride as
`[n: …]` with Migne's own internal spacing (`(BEDA, in Hexaem. )`, `(ISID., in Gen.? )`,
`(BED., ibid.)`); `*usque ad*` → ***as far as*** with **no verb ever supplied** — all 31
occurrences in these chunks follow an `etc.` and are the abridgment formula.

⚠ **The `usque ad` LOOK-ALIKES in this range, all ordinary Latin, all rendered by sense** (brief
addendum D; none italicised in the Latin, and none follows an `etc.`):
0000 @0070D *ab Adam **usque ad** Noe* → "from Adam to Noah" · 0001 @0073D *omnes partes terrae
**usque ad** coelum texerant* → "covered all parts of the earth up to the heaven" · 0002 @0075B
*divina mandata praeteribant **usque ad** Saulis malitiam* → "until the wickedness of Saul"
(inside an abridgment tail — the formula and a temporal use in one sentence) · 0002 @0077D *quasi
carcer sit **usque ad** tempus judicii* → "until the time of judgment". Four of thirty-five.

### (a) NEW — a citation siglum that arrives as an ITALIC span, not as an `[n:]` note

0002 @0077B–C sets Migne's source-siglum in italics rather than as a note:
`*(AUG., lib. II de Gen. ad litt., ex c. 1, 2, 3, 4, [0077C] 5 et 6, tom. III.)*` — and the column
anchor falls **inside** it. Every one of its twenty-two siblings in the same chunk is an `[n:]`.

**Ruling taken: treat it exactly as an `[n:]` would be treated — Latin verbatim, unanglicized,
italics preserved 1:1, anchor kept in place.** Convention 4 of the series brief says sigla need no
new convention because the locked register already governs them ("markers pass through verbatim,
Latin abbreviations unanglicized"); the register does not depend on which wrapper Corpus Corporum
gave it. Englishing it because it happens to be italic would make one siglum in this book read
differently from the other ninety-seven in the same four chunks.
⚑ This is very likely a TEI defect (a `<note>` transcribed as `<hi rend="italic">`), not Migne
printing this one differently. **Not marked** — a `[sic:]`/`[ed:]` would assert something about
the plate that nothing here supports. Filed for the plate in §4.

### (b) NEW — a gloss that DISTINGUISHES LATIN LEXEMES, with one English word for all of them

0002 @0075A–B: *Sementis, frugum et arborum; semen, hominum, et animalium. Seminium vel sementum,
cujusque rei exordium.* English has "seed" for all four. Italics cannot be used — every italic
span must be 1:1 with the Latin twin, and the twin has none here.

**Ruling: keep the four Latin words in roman inside our own straight quotes** —
`"Sementis" is of crops and of trees; "semen," of men and of animals. "Seminium" or "sementum,"
the beginning of anything whatever.` Pattern 6 makes `" "` ours and free (guillemet parity is
untouched), and the words being *mentioned rather than used* is the same call the PG register
already makes for a mentioned particle. Rendering them all "seed" would have turned a lexical
note into a tautology.

### (c) The three supplied colons are Pattern 8b, and they are the ONLY punctuation added

A band-by-band comparison (Test 3 — colons, semicolons, `?`, `«`, `»`, `!`, per column anchor,
markers stripped) returned **exactly three mismatched bands in the four chunks, all the same
class**, and zero elsewhere:

| column | Migne | English |
|---|---|---|
| 0071A | *Si autem quaeritur, ubi est facta … tegeret? patet quod* | But if it be asked**:** where was it made … ? it is plain that |
| 0073A | *Quaeritur etiam si stet an moveatur coelum?* | It is also asked**:** does the heaven stand still, or is it moved? |
| 0081C | *Quaeritur, cum singillatim caetera bona dicantur, cur homo … dicatur?* | It is asked**:** since the rest are severally called good, why is man … ? |

Migne's `?` is kept in all three; English cannot end an indirect construction with it (8b).
⚑ The scan pass that found these also found **thirteen unlicensed marks that had crept in** — four
supplied colons of apposition at 0069A (*Coelum, creatura spiritualis* etc.), one each at 0068C,
0069B, 0070C, 0075A, 0076D, four supplied semicolons (0077B, 0078D, 0081A, 0081C) and **one
DESTROYED colon at 0078A** (*per haec autem erudimus: Cum igitur*) and **one at 0075C**
(*infimae parti mundi:*). All repaired. **The totals had very nearly cancelled** — this is Test 3
earning its place a third time.

⛔ **Not one comma→semicolon sweep was made.** Migne prints semicolons freely in this book (47 in
these four chunks), so Tobit's narrow exception does not apply here and was not invoked.

### (d) `CAPUT PRIMUM.` → `CHAPTER ONE.`, and `(cont.)` rides as the chunker set it

`## CAPUT PRIMUM. (cont.)` → `## CHAPTER ONE. (cont.)`. Spelled, per the corpus rule (61 works
`CHAPTER ONE.`, zero spelled forms above ONE).

---

## §2 · ⭐ THE ARCHIVE SCAN'S OWN OCR IS ON DISK, AND IT IS A SECOND WITNESS — USE IT

`raw/scans/pl113/patrologiaecurs04migngoog_djvu.txt` is Google's OCR **of the plate scan**, not of
Corpus Corporum. It is independent of our TEI, it is free, and it settled or strengthened nine
calls in this stint. It is noisy (`coelnm`, `Qai`, `seternum`) and it is **not a plate read** —
it cannot license a marker on its own — but where our twin prints a non-word and the OCR prints a
word, the OCR is telling you the non-word is ours.

⚠ Two mechanics, or it returns nothing: the file is hard-wrapped and double-spaced, so
**join lines and squeeze spaces first** (`tr '\n' ' ' | tr -s ' '`); and the two columns of a page
**interleave in the OCR stream**, so a passage can be cut in half by a line from the facing column
(this happened at 0069B, §3.2).

**Every check run against it, with the result** — a list of findings alone cannot be told from a
report by an agent that never looked:

| site | our TEI | OCR of the plate | verdict |
|---|---|---|---|
| 0069B | *se **recerunt** deformes* | `fecerunt deformes` | **ours** — §3.1 |
| 0067C | *In principio **fecit** Deus* | `« In principio fecit Deus c ccelum et terram, »` | Migne's; and he prints a **repeated `«`** our TEI drops |
| 0069A | *de materia informi* | `« Qai fecisti mundum de materia informi (Sap. xi). »` | Migne's — `[var:]` licensed |
| 0069C | *astra matutina … filii Dei?* | `« Ubi eras cum me laudarent astra matutina, et « jobilareot omnes filii Dei ? »` | Migne's; **second repeated `«` our TEI drops** |
| 0070A/B/C | *Spiritus **Domini*** | `« Et Spiritus Domini ferebatur super aquas^ »` ×2 | Migne's — `[var:]` licensed |
| 0070C | *Emitte, ait, Spiritum tuum* | `Psal. ciii : « Emitte, ait, Spir…` | Migne's — `[var:]` licensed |
| 0071C | *primo **invisibilibus** credit* | `primo invisi-bilibus credit … Dominus apparere` | **Migne's** — §3.4, a checked negative |
| 0073C | *« Congregentur aquae? »* | `c Congregentor aqnee?` | Migne's `?` — preserved |
| 0075A | *Quod tibi non vis fieri* | `« Quod tibi non vis iieri, alii non feceris (ro6. iv). »` | Migne's — §5 |
| 0075A | *et vos **eadem** illis facite* | `et vos cadem illis facite (Matth vii)` | Migne's — §5 |
| 0075A | `Sementem. »` (orphan close) | `Sementem. » (Strab., Rab.)` | Migne's — reproduced unopened |
| 0075D | `Et dividant diem. »` (orphan close) | `Et dividant diem. » (Beda, in Hexaem.)` | Migne's — reproduced unopened |
| 0078D | *possunt,ita plurimae* | `vivere possunt, ita plurimse aves` | **ours** — a lost space, §4 |
| 0081A | *Seminavimus spiritualia vobis* | `« Seminavimus spiritualia vobis, magnom est si car-nalia vestra metamus (1 Cor. iz). »` | Migne's — `[var:]` licensed |

---

## §3 · THE DECLINED LIST — suspect readings that took NO marker

The rule this stint worked to: **a `[sic:]` accuses Migne's type and a `[var:]` asserts Migne's
text; our Latin is not the printed page.** Where the file could not settle whose the defect was, or
where the column has not been read, the crux is the answer and the marker is not.

### 3.1 ⛔ 0069B *se **recerunt** deformes* — a NON-WORD, and it is OURS, so no `[sic:]`

*« Et terram, » id est eos qui postea superbiendo, terram, id est terreni hominis imaginem,
portantes, se **recerunt** deformes.* `recerunt` is no Latin word. The plate's OCR reads
**`fecerunt deformes. « Terra autem erat inanis, » quia`** — the identical sentence, with the
following lemma attached, so it is certainly this site and not a homonym elsewhere in the volume.
An f→r substitution is a classic digitization artifact and its direction here is decided by the
witness, not by the sense.

**Rendered "made themselves deformed", with NO marker.** Both alternatives were live and both are
refused for the same reason Tobit refused them at *Nephtlali* (8970 §2): a `[sic: *recerunt*]`
would publicly accuse Migne of a defect the scan of his own page does not carry, and a
`[var:]` is about scripture, not type. The remaining option — carrying `*recerunt*` untranslated
under Pattern 7 without a marker — is forbidden by Pattern 12 and would print a hole for a defect
that is ours.

⚑ **Still owed: an eyes-on read of PDF p. 40 (cols 0069/0070) confirming `fecerunt`, and then a
`data/tei-patches/8950.json` entry**, so the Latin column converges on the English. Until that
patch lands the two columns disagree at this word, and §4 records it as a pending patch.

### 3.2 0069B Eccli 18:1 *Qui **vivit** in aeternum* — Clementine has *vivet*. DECLINED.

Sir/Eccli 18:1 reads `Qui **vivet** in aeternum creavit omnia simul.` Migne prints *vivit*
(present). **One letter**, and `sources/vulgate/README.md` warns that this copy carries no later
upstream corrections, so a call turning on a single letter should say so rather than trust it.
A second, unrelated occurrence of the verse elsewhere in this volume also OCRs as `vivit`, which
makes it Migne's usage rather than a slip — but that is an argument about frequency, and frequency
proves an error exists, never whose it is. **Logged, not marked.** Rendered "Who lives for ever".

⚠ **The quotation is UNCLOSED in our twin and stays unclosed in the English** (Pattern 5
corollary): `« Qui vivit in [0069B] « aeternum, creavit omnia simul [n: (Eccli. XVIII)], secundum
originem tamen…`. Two opens, no close. The second `«` is Migne's line-continuation mark, which he
uses throughout this book; the OCR shows him closing the verse with `simul. »` at his other
printing of it, so **our twin has probably lost the `»`**, not Migne. Not repairable from here —
guillemets must be 1:1 with the twin. Filed in §4.

### 3.3 0067B *ad se **imperfectionem** creaturae revocare* — OCR says *perfectionem*. DECLINED.

The OCR of p. 39 reads `ad se perfectionem creaturce re- vocare`. Our twin has *imperfectionem*.
The sense supports *imperfectionem* (God recalls the creature's **imperfection** to himself, the
whole clause being about *imperfectio* not imitating the Word's form), Augustine's *De Gen. ad
litt.* I.4 has *imperfectionem*, and a two-letter loss at a line start is exactly what this scan
does elsewhere (CLAUDE.md records this copy clipping the left margin on some pages). **So the OCR
is the likelier error here — but that is a judgment, not a reading.** Rendered *imperfectionem*
("the imperfection of the creature"); **no marker either way**; PDF p. 39, left column, is the
leaf that settles it.

### 3.4 ⭐ 0071C *primo **invisibilibus** credit* — CHECKED, and it is MIGNE'S. A negative result.

Migne prints the same Isidore excerpt twice, four columns apart, and **the two copies differ**:

- 0071C (mine): *primo die, lucem fidei, quoniam primo **invisibilibus** credit propter quam fidem
  Dominus apparere dignatus est.*
- 0082C (chunk 0004, another stint): *primo die lucem fidei, quando primum **visibilibus** credit,
  propter quam fidem Dominus **visibiliter** apparere dignatus est.*

The 0082C form is the coherent one — faith in *visible* things, for which faith the Lord deigned to
appear *visibly* — and it is very tempting to call 0071C our corruption. **The OCR of p. 41 reads
`quoniam primo invisi- bilibus credit propter qoam fidem Dominus apparere dignatus est`, and the
OCR of p. 46 reads `quando primum visibilibos credit, pro- pter quam fidem Dominus visibiiiter`.
Both variants are on the plate.** Migne set the excerpt twice from different copy. Rendered as
printed on each side; no marker; **logged as a checked negative**, which is worth having precisely
because §3.1 came back the other way.

### 3.5 Real words that read oddly, rendered as printed, no marker (brief addendum A)

- **0073A** *propter binarium **principem alternitatis*** — "the binary number, the chief of
  alternation". *alternitas* is attested medieval Latin; Jerome's *Adv. Iovin.* I.16 argues from
  the binary as the number that first departs from unity, which is what stands here. Rendered.
- **0070A** *quibus alia duo inserta sunt, aqua, scilicet, et terra, quibus insunt ignis et aer*
  — the apposition *aqua … et terra* sits after *inserta sunt* but must belong to the FIRST pair,
  since *quibus insunt ignis et aer* makes water and earth the containers. **Rendered in Migne's
  order, ambiguity intact** ("into which two others were inserted, water, namely, and earth, in
  which are fire and air"). Reordering to disambiguate would be a silent repair of his syntax.
- **0075B** the doubled ablative absolute — *separata labe, ac fluctibus carnalium tentationum,
  tanquam aridam habet terram **tentationibus separatis*** — says the separating twice, in
  different words. Not a `[d:]` (the runs are not the same run), and the 0082C twin phrases it
  once (*tanquam aridam habet mentem a perturbationibus maris*). **Both rendered.**
- **0080D** *quia spiritualis quisque **effectus**, et Deo similis, omnia judicat* — *effectus* as
  a participle ("made spiritual"), echoing 1 Cor 2:15. Ordinary. Rendered.

### 3.6 Unexpressed subjects supplied, with what decided each

- **0072A** *quia si culpam rectitudo eliminat, cogitationis nostrae foribus assidens … pulsat.*
  Supplied **"guilt"** as the subject of *assidens … pulsat*. Decided by the sentence's own
  argument, not by proximity: Gregory's point is that sin is never so driven out that one rests
  unshaken — what returns to knock is *culpa*, the thing *rectitudo* has just expelled.
  *Rectitudo* is the nearer nominative and would reverse the moral.
- **0076C** *hinc esse aiunt quod multo longinquior a terris atque altior **quam luna** incedit.*
  Supplied **"it" = the sun**. Decided by *quam luna*: the term compared to the moon cannot be the
  moon.
- **0079C** *ut inter similia … distinguerentur a caeteris* — left with "they", the kinds, as the
  Latin leaves it; both readings (kinds / individuals) yield the same claim here, so nothing is at
  stake and nothing was chosen.

---

## §4 · PENDING TEI PATCHES / PLATE DEBTS — the Latin column disagrees with the plate here

None of these is repairable from the English side; each needs an eyes-on read and a
`data/tei-patches/8950.json` entry. **The English mirrors the TWIN in every case except §3.1**,
which is called out there.

1. **0069B `recerunt` → `fecerunt`** (§3.1). English already renders *fecerunt*; the Latin does
   not yet. This is the one live divergence between our two columns in this stint.
2. **0078D `possunt,ita` → `possunt, ita`** — a lost space; the OCR has the space. Invisible in the
   English, but it is a defect in the Latin column.
3. **0067C — Migne prints a REPEATED `«` our TEI drops**: `« In principio fecit Deus « coelum et
   terram, »`. The OCR's stray `c ccelum` is that guillemet.
4. **0069C — same class, second instance**: `« Ubi eras cum me laudarent astra matutina, et
   « jubilarent omnes filii Dei? »`.
   ⚑ **This is a CLASS, not two accidents.** Migne repeats `«` at the head of a continued line
   throughout this book; our TEI keeps it at 0069B and 0079A and drops it at 0067C and 0069C. Since
   guillemet parity is checked against the twin and not against the plate, **every dropped one is
   invisible to `verify-english`** — a later stint should expect more, and the count of `«` against
   `»` per chunk is the cheap detector (0000 and 0003 run two opens long, 0002 two closes long).
5. **0069B — the Eccli 18:1 quotation is unclosed in our twin** (§3.2); the OCR closes it at
   Migne's other printing. Possibly the same class as 3–4, in the other direction.
6. **0077B–C — the AUG. siglum is an italic span, not an `[n:]` note** (§1a). Very likely a TEI
   markup defect. Note parity is unaffected (both sides have 23 `[n:]`), so nothing downstream can
   see it, and this book's `fontes` index will silently lose one citation.

**Plate coverage for this range:** columns 0067–0070 and 0081–0082 are on the read list
(PDF pp. 39, 40, 46; page = (column + 11) / 2). **Columns 0071–0080 — pp. 41–45 — are UNREAD**, and
that is why §5's divergences at 0072D, 0073B, 0074D, 0075A, 0076A, 0078C and 0080B carry no marker.

---

## §5 · 7a″ — THE VULGATE COLLATION, ALL 168 SPANS

Collated against `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. **The spans
that AGREE are listed too** — a list of divergences alone cannot be told from a report by an agent
who only chased the ⚠ marks.

### 5a. MARKED — five `[var:]`, every one on a read column and OCR-corroborated

| col | Migne prints | Clementine | marker |
|---|---|---|---|
| 0067C | `« In principio **fecit** Deus coelum et terram, »` | Gn 1:1 *In principio **creavit** Deus caelum et terram* | `[var: Vulg. Gen. 1:1 *creavit*, "created"]` |
| 0069A | `« Qui fecisti mundum de materia informi »` (*Sap. XI*) | Sap 11:18 *quae **creavit orbem terrarum ex materia invisa*** | `[var: …]` |
| 0070A | `« Et Spiritus **Domini** ferebatur super aquas. »` | Gn 1:2 *spiritus **Dei** ferebatur super aquas* | `[var: Vulg. Gen. 1:2 *Spiritus Dei*]` |
| 0070C | `« **Emitte**, ait, Spiritum tuum et creabuntur. »` | Ps 103:30 ***Emittes** spiritum tuum, et creabuntur* | `[var: Vulg. Ps. 103:30 *Emittes*]` |
| 0081A | `« **Seminavimus** spiritualia vobis, magnum est si carnalia vestra metamus »` | 1 Cor 9:11 ***Si nos vobis spiritualia seminavimus**, magnum est si **nos** carnalia vestra metamus **?*** | `[var: … a conditional …, closing as a question]` |

Notes on two of them. **0067C:** Migne prints *creavit* three times in the same paragraph and
*fecit* once, in the sentence whose whole point is that *principium* = the Son — so the divergence
sits inside the argument, not beside it; marked once, at the divergent occurrence only.
**0070A:** *Domini* is printed **four times** in this range (0070A, 0070B ×2, 0070C), and Migne's
own Trinitarian gloss two lines later parses the phrase as *Spiritus Dei, Spiritus sanctus* —
i.e. the exposition uses the Vulgate's word and the lemma does not. **Marked once, at the first
full occurrence**, per Pattern 14's practice of noting rather than repeating.

### 5b. DIVERGENT, and DECLINED FOR THE SHIP TEST — columns 0071–0080 are unread

Each of these is a real difference from the Clementine and would carry a `[var:]` on a read column.
**All are rendered as Migne prints them.** The leaf that settles each is PDF p. (column + 11)/2.

| col | Migne | Clementine | note |
|---|---|---|---|
| 0072D | `« Fiat firmamentum et factum est ita, »` | Gn 1:6 has **no** *et factum est ita*; it closes 1:7 | **This is the whole point of Augustine's *quaeritur*** — why, after *fiat* and *factum est ita*, does he add *et fecit Deus*? Migne's copy-text carries the Old-Latin/LXX plus. p. 42. |
| 0073B | `« Coelum sicut liber plicabitur. »` (*Isa. XXXIV*) | Is 34:4 *et **complicabuntur** sicut liber **caeli*** | Different verb, number and subject. p. 42. |
| 0074D | `« pariet tibi, »` | Gn 3:18 *Spinas et tribulos **germinabit** tibi* | p. 43. |
| 0075A | `« Quod tibi non vis fieri, alii non feceris »` (*Tob. IV*) | Tob 4:16 *Quod ab alio oderis fieri tibi, vide ne tu aliquando alteri facias* | The proverbial form, not the Vulgate's. Introduced as *quidam sapiens ait*, which may be why. OCR-confirmed as Migne's. p. 43. |
| 0075A | `« Quaecunque vultis … et vos **eadem** illis facite »` (*Matth. VII*) | Mt 7:12 ***Omnia ergo** quaecumque vultis … et vos facite illis* | *eadem* added, *Omnia ergo* dropped. OCR-confirmed. p. 43. |
| 0076A | `« Fecit Deus duo luminaria. »` | Gn 1:16 ***Fecitque** Deus duo luminaria **magna*** | *magna* is dropped from the lemma and then argued about in the very next sentence (*Luminaria magna possumus accipere*). p. 43. |
| 0078C | `« Benedixitque **illis**, »` at **VERS. 22** | Gn 1:22 *Benedixitque **eis**, dicens*; *illis* is Gn **1:28** | ⚑ The `⚑ MATCHES ONLY ELSEWHERE` shape. And **this work prints the other form for the same verse at 0079D** — *« Benedixitque **eis** Deus dicens: Crescite et multiplicamini, »* — so Migne is inconsistent with himself two columns apart. p. 44. |
| 0080B | `« Et **fecit** Deus hominem ad imaginem **Dei**, »` (×3 in the paragraph) | Gn 1:27 *Et **creavit** Deus hominem ad imaginem **suam*** | Augustine's text, and the argument turns on it (*non Pater ad imaginem tantum Filii*). p. 45. |

### 5c. DIVERGENT and DECLINED ON THE MERITS — the marker was weighed and refused

- **0069C Job 38:7** — Migne: `« Ubi eras cum me laudarent astra matutina, et jubilarent omnes
  filii Dei? »`; Clementine 38:7 *cum me laudarent **simul** astra matutina…*, and *Ubi eras* is
  **38:4**. Read column, OCR-confirmed as Migne's, so a marker was available. **Refused:** the
  omission of *simul* changes nothing the gloss argues (it argues that the *astra matutina* are the
  angels), and the join of 38:4 to 38:7 stays inside the chapter Migne actually cites, *Job XXXVIII*
  — a citation practice, not a text divergence. Firing here would spend the marker on noise.
  ⚠ The same lemma is clipped to its first half at 0068C, which agrees.
- **0079D Gn 1:22** — Migne: `« Benedixitque eis **Deus** dicens: Crescite et multiplicamini, »`;
  Clementine has no *Deus*. One supplied noun, no argument on it, unread column. Declined.
- **0081A** — `« fecit Deus hominem ad imaginem et similitudinem suam, »` conflates Gn 1:26
  (*ad imaginem et similitudinem **nostram***) with 1:27 (***creavit** … ad imaginem **suam***).
  **Read column, so a marker was available, and refused:** this is the gloss's own back-reference
  ("Post haec…"), a recall rather than a proof-text, and no step of the argument rests on the
  wording. Contrast 0081A's Paul quotation eight words later, which IS adduced as proof and IS
  marked.
- **0077D** — `« Secus firmamentum coeli, »` for Gn 1:20 *sub firmamento caeli*. **No marker by
  construction:** Migne labels it *Alia translatio*, so the divergence is already stated on the
  page in his own voice, and ours would tell the reader twice. (Same instinct as Pattern 12's rule
  about Migne's own *( sic )*.)

### 5d. COLLATED AND AGREEING — checked, exact, no divergence

Gn 1:1 `« In principio creavit, »` (0067B, 0068B, 0068C) · `« In principio creavit Deus coelum et
terram. »` (0073D) · `« In principio creavit Deus coelum. »` + `« Et terram, »` (0069B, the
*Mystice* split) · Gn 1:2 `« Terra autem erat inanis, »` · `« Et vacua, »` · `« Inanis et vacua. »`
· `« Et tenebrae erant, »` / `« Tenebrae erant, »` · `« super faciem abyssi, »` · Gn 1:3
`« Dixitque Deus: Fiat lux. »` · `« Fiat lux, »` · `« Et facta est lux, »` / `« Facta est lux; »` ·
Gn 1:4 `« Et vidit Deus lucem, »` · Gn 1:5 `« Factumque est vespere. »` and its repeats · Gn 1:6
`« Fiat firmamentum, »` · `« Fiat firmamentum in medio. »` · Gn 1:7 `« Et fecit Deus firmamentum, »`
· `« Divisitque aquas quae erant, »` · `« et factum est ita »` in all six of its printings ·
Gn 1:8 `« Et factum est vespere, »` · Gn 1:9 `« Dixit vero Deus, »` · `« Congregentur aquae, »` and
`« Congregentur aquae? »` · Gn 1:10 `« Et vocavit Deus aridam terram. »` ·
`« Congregationesque aquarum appellavit maria. »` · Gn 1:11 `« Et ait: Germinet terra, »` ·
`« Germinet terra herbam, »` · `« Facientem semen. »` · `« lignum pomiferum. »` · Gn 1:12
`« Et protulit terra herbam, »` · `« Lignumque. »` · `Sementem. »` · Gn 1:13
`« Et factum est vespere et mane. »` · Gn 1:14 `« Dixit autem Deus: Fiant luminaria, »` ·
`Et dividant diem. »` · `« Et sint in signa, »` / `« in signa, »` · Gn 1:15 `« Ut luceant, »` ·
Gn 1:16 `« Luminare majus, »` · `« Et luminare minus, »` · Gn 1:17 `« Ut lucerent, »` · Gn 1:18
`« ut praeessent diei, »` · `« et nocti, »` · `« dividerent lucem ac tenebras, »` · Gn 1:20
`« Dixit etiam Deus, »` · `« Dixit etiam Deus: Producant aquae reptile, »` · `« Animae viventis. »`
· `« Sub firmamento » ,` · Gn 1:21 `« Creavitque Deus cete grandia, »` · `« Et omnem animam, »` ·
Gn 1:22 `« Crescite. »` · `« Crescite et multiplicamini, »` · Gn 1:24
`« Dixit quoque Deus: Producat « terra, »` · `« Producat terra, »` · `« In genere suo. »` · Gn 1:25
`« Et fecit Deus bestias terrae, »` · Gn 1:26 `« Faciamus hominem. »` · `« ad imaginem nostram, »` ·
`« Et praesit, »` · `« Et praesit piscibus maris et volatilibus coeli. »` · Gn 1:27
`« Et creavit Deus hominem ad imaginem, »` · `« Et creavit Deus, »` · `« ad imaginem suam. »` ·
`« ad imaginem Dei, »` · `« Masculum et feminam creavit eos, »` · Gn 1:28
`« Et dominamini piscibus, »` · `« Et dominamini piscibus maris. »` · Gn 1:29
`« Dixitque Deus: Ecce dedi, »` · Gn 1:30 `« Et factum est ita. »` · Gn 1:31 `« Viditque Deus, »` ·
`« Et factum est vespere et mane, »` · Ps 101:26 `« Initio tu, Domine, terram fundasti, »`
(**exact, including the vocative commas**) · Dn 3:72 `« Benedicite, lux et tenebrae, Domino, »`
(**exact**) · Rom 7:25 `« Mente servio legi Dei, »` (**exact — the span the brief omits, §0**) ·
1 Cor 4:16 `« Imitatores mei estote, »` (**exact**).

⚠ **`coelum` for *caelum* is orthography, not divergence**, and is not listed as one. Migne sets
*coelum* throughout; the Clementine sets *caelum*. Same for `Terram`/`Maria` capitalized as proper
names in the Clementine and lowercase in Migne's lemmata at 0073D–0074A.

---

## §6 · SECTIONS READ CLEAN

Read paragraph by paragraph against the Latin, asking only whether the English asserts what Migne
asserts (Test 4), after the counts were known clean:

- **0067B–0068C** — the *In principio* / *Dixit Deus, Fiat* argument, the densest and most negation-
  heavy passage in the stint (*Non enim habet vitam informem Verbum Dei, cui est idem esse quod
  vivere* against *Creatura vero spiritualis habet informem vitam, cui non est hoc esse quod
  vivere*). The two limbs are deliberately mirrored and the negatives are the only difference
  between them; both checked twice.
- **0072A–0073B** — Gregory on evening, Augustine on the firmament, Jerome on the binary. Clean.
- **0075C–0077B** — Isidore's day-by-day allegory and Bede on the luminaries. Clean.
- **0078A–0078B** — Theodoret on the beasts, the longest continuous narrative here. Clean.
- **0079C–0081D** — Augustine on *secundum genus suum*, the image of God, and the sixth day. Clean.

**Candidates rejected, with reasons, so a blind reader knows they were looked at:** §3.1–3.5 above,
plus — *nautarum* at 0071B (a real word, and divers are what is described; not *urinatorum*, and no
marker on a corpus argument, addendum A) · *Septem sunt coeli* at 0069B listing seven names for
what are then re-ordered by Jerome to three (Migne's source, not a defect) · `VERS. 17, 18-- ` at
0076C printing no period before the dashes where every other address in the range prints one
(reproduced verbatim; a spacing artifact of the kind §4.2 records, not worth a patch entry on its
own) · the five `. . . .` ellipsis runs after `VERS. n.--` (Migne's, reproduced with his own
spacing).
