# Cruces — 8956 *Liber Isaiae prophetae*, chunks 0025–0029 (cols 1292B–1305B)

Stint file; the orchestrator merges it with the peers'. **Every column in the range was read at the
plate before these entries were written** — Gallica `ark:/12148/bpt6k5505319w`, leaves
**f646–f653**, `f = (column + 1) / 2`, calibrated against the **printed corner numbers on all eight
leaves** (f646 = 1291/1292, f647 = 1293/1294, f648 = 1295/1296, f649 = 1297/1298, f650 = 1299/1300,
f651 = 1301/1302, f652 = 1303/1304, f653 = 1305/1306) before any collation was attempted. Reads are
recorded in `data/briefs/8956-PLATE-READS-0025.json`. The band letters print in the **centre gutter
and mark the RIGHT column** on every leaf in this range, as the peers report.

The **archive.org second printing** (`patrologiaecurs04migngoog`, PDF page = (column + 11) / 2) was
consulted at five sites, on pp. 652, 653, 654, 656 and 658. It is the **better** witness in this
range, and it withdrew four defect claims against Migne — see "Four `[sic:]` withdrawn" below.

Span count reconciled: **352 marked spans in the Latin of chunks 0025–0029**, counted
paragraph-bounded (0025 = 87, 0026 = 61, 0027 = 69, 0028 = 59, 0029 = 76), against the brief's
**352**. Exact agreement. ⚑ **0 guillemet spans: this work sets no `«` or `»` at all**, in this
range as in the peers' — Luke-9000 shape, not Genesis-8950 shape. Confirmed by counting, not
assumed.

**Markers fired: 16 `[var:]`, and nothing else.** No `[sic:]`, no `[d:]`, no `[ed:]`, no `[cj:]`.

---

## ⭐ The finding of the stint: our own line-break fusions read as Migne's defects

Five sites in this range are our digitization mishandling a hyphen at a line or column break, and
**three of them presented as textbook plate defects**. They are itemized in
`data/briefs/8956-PENDING-TEI-PATCHES-0025.md`; the point worth carrying forward is what they looked
like from our file alone:

| col | our TEI | the plate | what our file alone said |
|---|---|---|---|
| 1295D | *cruceis, crucis* | *cru-* / *cis* = **crucis** | a Pattern 11a dittography with variation — mark the intrusive copy |
| 1295D–1296A | *exallabitur* | *exal-* / *tabitur* = **exaltabitur** | a non-word in a servant-song lemma: `[sic:]` |
| 1302C | *supereum* | *super-* / *eum* | a fused run, Pattern 10: `[sic:]` |
| 1302C | *me moriter* | *me-* / *moriter* = **memoriter** | a split run with a stranded pronoun: `[sic:]` |
| 1303A | *sub coelo 1304est* | *sub coelo* **est** | an anchor corruption of some kind |

The 1295D doubling is the dangerous one. Read from the twin it satisfies Pattern 11a exactly — two
copies of a run, differing in one word, the first ending in the neighbouring phrase's shape — and
11a instructs marking the intrusion. **There is nothing internal to our file that could have told
that from Migne's own eye-skip.** Only the hyphen on the plate could, and it says Migne set the word
once.

## Four `[sic:]` candidates withdrawn at the second printing

Each was a real non-word in the Gallica copy AND in our TEI, which is exactly the corroboration
`reference_plate-read-triage` warns proves an error exists and never whose it is. Each was clean on
the archive printing, so no marker stands.

- **1297B — *tribuatus*.** Gallica f649 breaks *tribu-* / *atus*; archive p.654 breaks
  *tribu-* / *latus*. The English reads "lest the just man, being afflicted, fail."
- **1305B — *lauaem*.** Gallica f653 prints the Is 61:11 lemma *Et lauaem*, an italic **a** where the
  **d** belongs — and *laudis* prints cleanly two lines below on the same page, which is precisely
  the shape that licenses a broken-sort claim (the 8955 @0629D *ulit*/*Tulit* precedent). Archive
  p.658 prints *Et laudem*.
- **1296D–1297A — *funiculu*.** Archive p.653 prints *funiculus*; the Gallica final **s** is worn to
  a dot at 3×.
- **1293B — *Matih.***. The Mt 16:19 note prints `(Matih. XVI)` on Gallica, `(Matth. XVI)` on
  archive. Our twin has *Matth.* and is right; a note's content rides verbatim in any case.

⚑ Together with **1301A *irruguus*/*irriguus***, that is **five** places in fourteen columns where
the Gallica copy carries a worn or broken sort the archive copy does not. **This inverts the PL 114
finding**, where the archive copy was the worse witness by twelve to one in Matthew's opening range.
It is a fact about these two *copies of PL 113 in this range*, not a general ranking, and it is the
reason no `[sic:]` in this stint could stand on Gallica alone.

## The column anchor `[1240D]` at 1294D

Our twin prints `[1240D]` where the sequence runs 1294C → 1295A. **The plate settles it as a digit
corruption and not a misplacement**: the D band on f647 stands in the centre gutter beside `VERS. 9.
— *Consurge*` in the right-hand (1294) column, exactly where our twin sets the anchor. So the
position is right and only the digits are wrong (9 → 4). **The English reproduces `[1240D]`
verbatim** — anchors are sacred and `verify-english` checks them 1:1 — and the patch must move both
twins in one operation.

⚠ Deliberately **not** reported as defects, per the standing false-positive list: the `[1296D]` that
stands before `[1296A]` at the head of CAPUT LIII (a recurring column number and a D-band followed
by an A-band are both normal), and the *Ibid.*-style `[n: (ID.)]` chains throughout.

## Migne's own mis-citations — reproduced verbatim, six of them

All confirmed on the plate; none corrected, per the standing rule.

- **1295C** `[n: (Psal. XCVII)]` on *In brachio meo gentes sperabunt*, which is Is 51:5.
- **1295C** `[n: (Matth. XVIII)]` on *Ite, docete omnes gentes*, which is Mt 28:19.
- **1293D** `[n: (Joan. VIII)]` on *Qui sitit, veniat et bibat*, which is Jo 7:37.
- **1294B** `[n: (Ezech. XVIII)]` on *nolo enim mortem peccatoris*, which is nearest Ez 33:11.
- **1299C** `[n: (Isa. XL)]` on *Non sicut viae meae sunt viae vestrae*, which is Is 55:8. ⭐ This one
  is doubly interesting: the quotation itself diverges (fired `[var:]`), and the chapter number is
  wrong, in a work whose *own book* is Isaiah.
- **1301B** `[n: (Psal. LXXXVI)]` on *Fundamenta ejus in montibus sanctis* — correct, but the note
  numbers the Psalm by the Vulgate reckoning while the neighbouring `[n: (Psal. XCVIII)]` at 1293A
  does likewise; recorded so a later index pass does not read the pair as inconsistent.

## Vulgate divergences — the 16 fired

All collated word by word against `sources/vulgate/clementine-flat.txt`, and every Clementine
reading quoted below was checked to be sound Latin before the marker went in.

**Chunk 0025 (6).**
1. **1293A, Ps 98:5** — *Adorabunt scabellum pedum ejus* for Clementine *adorate scabellum pedum
   ejus*. ⭐ **The richest shape on this book, and here it is exact:** the lemma under exposition is
   Is 49:23 *Adorabunt*, and the proof-text adduced to gloss it has been conformed to it, imperative
   into future. The argument's keyword has been written into its own proof-text.
2. **1293B, Mt 10:14** — *Excutite pulverem pedum vestrorum* for *excutite pulverem de pedibus
   vestris*. **The same shape again, on the same page**: the lemma is *Pulverem pedum tuorum* (Is
   49:23), and the proof-text now shares its exact genitive construction.
3. **1293C, Rom 6:12** — *Non regnet peccatum in corpore vestro* for *Non ergo regnet peccatum in
   vestro mortali corpore*. *mortali* is dropped.
4. **1293D, Jo 7:37** — *Qui sitit, veniat et bibat* for *Si quis sitit, veniat ad me et bibat*.
   *ad me* is dropped, which takes Christ out of a sentence quoted to show that he calls.
5. **1294B, Ez 33:11 / 18:32** — *nolo enim mortem peccatoris, sed magis ut convertatur et vivat*.
   The Clementine has *nolo mortem impii, sed ut convertatur impius a via sua, et vivat* (33:11) and
   *nolo mortem morientis* (18:32); **Migne's *peccatoris* is in neither**, and the note cites XVIII.
   This is the liturgical form of the verse, not the Vulgate's.
6. **1294B, Mt 25:41** — *Ite, maledicti, in ignem aeternum* for *Discedite a me maledicti in ignem
   aeternum*.

**Chunk 0026 (5).**
7. **1295D, Is 52:13** — *Elevabitur et exaltabitur* for *exaltabitur et elevabitur*. The two verbs
   are transposed in the hinge verse of the servant song, and this is Migne's own book. ⚑ Fired on
   the plate reading; our twin's *exallabitur* is our defect, patched separately.
8. **1296B, Jo 1:29** — *qui tollit peccata mundi* for *qui tollit peccatum mundi*. Singular into
   plural, in the sentence that names the Lamb.
9. **1296C, Lc 8:5** — *Exiit qui seminavit semen suum* for *Exiit qui seminat, seminare semen
   suum*. Present participle into perfect, and the infinitive of purpose dropped. The gloss is
   arguing that the Gospel word *does not grow old*, so the tense is not idle.
10. **1296C, 1 Pet 2:24** — *Peccata enim nostra portavit in corpore suo* for *qui peccata nostra
    ipse pertulit in corpore suo super lignum*. A different verb, *ipse* dropped, and **the tree
    dropped** — in a chapter on Is 53.
11. **1296C, 1 Cor 9:22** — *Omnibus omnia factus sum, ut omnes lucrificarem* for *ut omnes facerem
    salvos*. *lucrifacerem* is the verb of 9:19 and 9:22a; the two halves of Paul's sentence have
    been spliced.

**Chunk 0027 (3).**
12. **1297D, Eccl 11:1** — *Mitte panem tuum super aquas, quia in multitudine dierum invenies eum*
    for *super transeuntes aquas, quia post tempora multa invenies illum*. Two divergences in one
    verse; the gloss then expounds *panem doctrinae tuae*.
13. **1298C, Rom 12:1** — *Exhibeatis corpora vestra hostiam Deo viventem* for *hostiam viventem,
    sanctam, Deo placentem*. ⭐ The gloss immediately distinguishes the holocaust (offered **whole**
    to God) from the victim (part given to the priests), so *Deo viventem* — "a living victim **to
    God**" — is precisely the phrase the argument turns on, and it is not the Vulgate's.
14. **1299C, Is 55:8** — *Non sicut viae meae sunt viae vestrae* for *Non enim cogitationes meae
    cogitationes vestrae, neque viae vestrae viae meae*. Migne recasts the verse into the shape his
    gloss needs (many ways of worldly men against one way of truth) and cites the wrong chapter.

**Chunk 0028 (2).**
15. **1301A, Is 58:11** — *Et erit quasi hortus irriguus* for *et eris quasi hortus irriguus*. ⭐ The
    **person** changes, and the gloss's own next words are a vocative (*o fidelis vel Ecclesia*) that
    only the second person answers; two lines later *Assimilaberis Christo* is second singular again.
    Migne's third person stands in the English, with the marker beside it.
16. **1302C, Is 11:2** — *Requiescit super eum Spiritus Domini* for *Et requiescet super eum spiritus
    Domini*. Future into present, adduced to prove that the Spirit rests on Christ **now**.

### Divergences examined and DECLINED as immaterial

Recorded so a later reader can see they were weighed, not missed.

- **1298B, Jo 15:19** — *Si de mundo essetis* for *fuissetis*; and *idcirco odit vos mundus* for
  *propterea*. Mood and synonym; the sense is untouched.
- **1298B, Rom 10:12** — *Sed non est distinctio* for *Non enim est distinctio*. Connective only.
- **1299C, Jo 14:6** — *Ego sum via, veritas et vita* for *Ego sum via, et veritas, et vita*.
- **1301B, 1 Cor 3:11** — *Fundamentum aliud nemo potest ponere* drops *enim*.
- **1301A, Jo 12:26** — *Ubi ego sum* for *ubi sum ego*. Word order.
- **1303A, Jo 4:35** — *quia jam albae sunt ad messem* for *quia albae sunt jam*. Word order.
- **1303A, Eph 2:13** — *Vos qui eratis longe* drops *aliquando*.
- **1303C, Rom 10:10** — *Corde creditur* drops *enim*.
- **1304D, Lc 21:20** — *cum videritis ab exercitu circumdari Jerusalem* for *Cum autem videritis
  circumdari ab exercitu Jerusalem*. Word order and connective.
- **1293C, Jo 8:34** — *servus peccati est* for *servus est peccati*. Word order.

## Pattern 8 — three sentences that stop without a stop, and one that keeps a question

Confirmed at the plate in each case; the English carries the plate's punctuation exactly and
supplies nothing.

- **1297D** — the column ends *quia in novissimo praemia recipies* with **no terminal stop** on
  Gallica f649. The English ends "thou shalt receive rewards", unstopped.
- **1300A** — *opere complevi*, unstopped on f650. So in the English.
- **1302B** — *audita praedicatione apostolorum*, unstopped on f651.
- **1295B** — *ut etiam in terra sua opprimat illum, et calumnietur ei?* Migne closes an *usque ad*
  abridgment tail with a question mark, and the English keeps it as a direct question, which the
  tail already is (Pattern 8b is not needed here).
- **1302C** — chunk 0029's Latin ends mid-sentence on a comma (*Spiritus meus, qui est in te,*).
  That is our chunk boundary, not the plate's; the English ends on the same comma.

## Odd readings rendered as printed, with no marker

- **1298B — *Ne sit, scilicet de sex diebus quibus factus est mundus.*** The gloss on *Custodiens
  sabbatum* is elliptical past construing; *Ne sit* has no expressed subject and the *de* phrase
  hangs. Rendered literally ("Let it not be, that is, of the six days in which the world was made")
  and confirmed word for word on f649. Nothing is defective — it is simply compressed — so no
  `[cj:]`; the bar is that the English asserts something false, and an ellipsis asserts nothing.
- **1297A — *victis perditionis, victoribus causa est praemii.*** Two datives against one predicate
  nominative; the plate reads exactly so on f649. Rendered "the cause of perdition to the conquered,
  of reward to the conquerors."
- **1300C — *cui charitatem Deo invidebat.*** Two datives again, and the sense turns on which is the
  person grudged. Rendered "to whom he grudged charity towards God" — Cain is the actor, his brother
  the person, the charity the thing. Recorded because this is exactly the agency seam that a smooth
  English can silently re-assign.
- **1304C — *Cum miserit Filius hominis angelos, et colligent…*** A *cum* clause answered by *et* +
  future indicative rather than a main clause. Rendered as printed, conjunction kept.
- **1302B — *Et salvavit sibi. Pater, scilicet per Filium gentes.*** The gloss supplies subject,
  agent and object as three bare appositions. Rendered in that order without recasting: "The Father,
  namely, through the Son, the Gentiles."

## Second person — Pattern 17 as applied here

The range moves between a singular and a plural addressee repeatedly, and the English marks it.
Singular → *thou*: the Church at 1302D–1303A (*Quos in fide genuisti*, *nata es*), the soul at
1301A–1301B (*Assimilaberis Christo, capiti tuo*; *carnem tuam*; *domesticos seminis tui ne
despexeris*), Jacob at 1293A (*fortitudinem Jacob luctandi*), the idolater at 1299B (*idola
adorasti*). Plural → *you*: the Jews addressed throughout CAPUT LV (*Quare appenditis argentum*,
*Qui solam speciem litterae custoditis*, *Ne putetis*), and CAPUT LIX's *Sed iniquitates vestrae*.
No instance in the range required a judgment call: the morphology decided every one.
