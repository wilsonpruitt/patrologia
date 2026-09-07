# Cruces — 8957 *Liber Job*, chunks 0020–0024 (cols 0796D–0811A)

Stint-scoped; the orchestrator merges. **All nine leaves in this range were read at the plate
while translating** (Gallica `bpt6k5505319w`, `f = (col + 1) / 2`, **corner numbers read first on
every page**): f398–f406 = cols 795–812. **Foot-of-page apparatus: checked ZERO on all nine,
both layers** (numbered `Forte` conjectures and the asterisk/letter-keyed layer). Five sites were
additionally checked on the second witness, the archive.org copy `patrologiaecurs04migngoog`
(page = (col + 11) / 2), and one of them reversed a Gallica reading. Reads are filed in
`data/briefs/8957-PLATE-READS-0020.json`; the one proposed patch in
`data/briefs/8957-PENDING-TEI-PATCHES-0020.md`.

## Span count against the brief

| | |
|---|---|
| brief's stated total for chunks 0020–0024 | **260** (1 flagged OPEN-ENDED) |
| counted in my own Latin, **paragraph-bounded** | **261** (214 guillemet + 47 italic) |
| delta | **+1** |

**The delta is explained and it is one unit of one ragged class.** Counting the two classes
separately, as instructed:

- **Unclosed openings (`«` with no `»`): 1** — 0798B `VERS. 21.-- « Sonitus terroris semper.
  [n: (Ibid.)] Prava mens semper…`. The brief *does* carry this one, flagged `⚠ UNCLOSED «`, so
  it costs nothing in the total.
- **Unopened closings (`»` with no `«`): 1** — 0798D `VERS. 28.--Habitavit in civitatibus. »`
  (and note there is no space after the `--` either). **This lemma appears nowhere in the
  inventory.** It is the shape the brief warns is invisible to the harvester, and it is the whole
  of the +1.

Per-chunk: 0020 = 65 (53 guillemet + 12 italic, and both ragged sites are here) · 0021 = 51
(41 + 10) · 0022 = 41 (34 + 7) · 0023 = 45 (36 + 9) · 0024 = 59 (50 + 9).

⚠ **The raw open/close totals balance in every one of my five chunks (52/52, 41/41, 34/34,
36/36, 50/50)** — exactly the false agreement a peer warned of, because chunk 0020's two ragged
sites cancel each other. Only the paragraph-bounded walk sees them.

⭐ **Both ragged sites were read at the plate (f399) and both print exactly as our TEI has
them**, with normally delimited lemmata immediately above and below on the same page. No
`[sic:]`, no `[cj:]`, no patch — the class stands where four earlier stints left it, now at five
leaves and eleven confirmed sites.

## Load-bearing vocabulary fixed for this stint

Recorded because the merge reconciles convention drift. Where a peer had already fixed a term I
follow them and say so.

| Latin | English | note |
|---|---|---|
| `*usque ad*` | ***as far as*** | the abridgment formula; peer convention (0005, 0010), unchanged. 41 of the 47 italic spans in my range are this formula; the other six are `*quasi,*` (0800B), `*tenet*` (0801B), `*Lucem*` (0805B), `*brachia*` and `*Mortem*` (0806B–C) and `*commovisti me adversus eum frustra*` (0808A). |
| `elatio` / `superbia` / `tumor` | **elation** / **pride** / **swelling** | never interchanged: ch. XV turns on *elatio* as the specific vice Eliphaz imputes, and *superbia* is named separately as *initium omnis peccati* at 0806C. |
| `ardor` / `aestus` | **burning** / **heat** | 0799C–0799D sets them side by side (*ardor laudis*, *aestus avaritiae*) and the tabernacle gloss needs both. |
| `attenuare` / `crassescere` | **make thin** / **grow thick** | 0803A's whole antithesis (*attenuatur spiritus electorum … spiritus iniquorum crassescit*); "waste"/"be wasted" would lose it. |
| `maxilla` | **jaw** | one word throughout 0801A, because the gloss puns across three senses (the Church's jaw, Peter who *mactat et manducat*, Samson's *maxilla asini*). "Jawbone" for Samson and "cheek" for the lemma would make the pun explain nothing. |
| `pedica` / `decipula` / `laqueus` / `rete` / `macula` | **snare** / **trap** / **noose** / **net** / **mesh** | all five stand in the same paragraph at 0805D–0806A. |
| `inedia` / `fames` | **starvation** / **hunger** | both in 0806B (*inedia invadat costas* … *fames interna*). |
| `colonus` / `viator` | **husbandman** / **wayfarer** | 0809A–0809B: the gloss argues *non possessor agri, sed colonus*, so the English word must be a tenure word, not "stranger". |
| `falsiloquus` / `falsiloquium` | **false-speaker** / **false speech** | 0800C–0800D, one root, because the gloss moves between them. |
| `praedicatores` / `praecones` | **preachers** / **heralds** | kept apart; both in 0801A. |
| `homo` / `humus` | kept **Latin, italic** at 0797C | the gloss IS the etymology (*Ab humo enim appellatus est*), so the Song-of-Songs rule's case 2 applies: an English pair sharing no root would make the gloss explain nothing. |
| `propinatrix` / `propinavit` | **pourer-out** / **poured out** | 0797D; same reason, one root either side. |
| 2nd person | **thou** singular, **you** plural (Pattern 17) | Eliphaz addresses Job singular through ch. XV (*Quantum in te est*, *Ostendam tibi*, *Quid te elevat cor tuum*) → thou. Job addresses the friends plural through chs. XVI–XIX (*omnes vos*, *At vos contra me erigimini*, *Quare persequimini me*) → you. ⭐ Ch. XVIII mixes them **on the plate** — *verba jactabitis* plural, then *Intellige … Quid perdis animam tuam* singular — and the English mixes them too; see the `[var:]` at 0805A. |

## Markers fired — 7 `[var: …]`, 0 `[sic:]`, 0 `[cj:]`, 0 `[d:]`, 0 `[ed:]`

Every one stands on a column collated at the plate this session; five are confirmed on both
witnesses. All seven are Pattern 14 (a perfectly legible plate whose scripture does not agree
with the received text); the printed reading is rendered faithfully in every case and the marker
stands *beside* it, never in place of it.

- **0802C** `« Terra es et in terram ibis; »` ‖ Gn 3:19 `pulvis es et in pulverem reverteris`.
  MARKED. Adduced as the sentence passed on sinning man, and the whole paragraph is built on
  *terra* (*quae se terra Redemptoris nostri sanguinem non abscondit … Terra etiam sanguinem ejus
  non operuit*), answering the lemma *Terra ne operias sanguinem meum*. Plate f401. ⚑ A peer
  marked the neighbouring `Cinis es, et in cinerem reverteris` at 0778A against the same verse;
  **this book quotes Gn 3:19 two different non-Vulgate ways within twenty-five columns**, and
  neither is harmonised to the other.
- **0804A** `« caligavit ad indignationem oculus meus. »` ‖ Job 17:7 `Caligavit ab indignatione`.
  MARKED. **Migne's own two settings disagree on facing columns**: the lemma at 0803D prints
  *ab indignatione* and his gloss expounds *Ab indignatione oculus caligat*, and then the
  resumption twelve lines later prints *ad indignationem*. Plate f402 **and** archive p. 407.
- **0804D** `« Putasne saltem sibi erit requies mihi? »` ‖ Job 17:16 `putasne saltem ibi erit
  requies mihi`. MARKED. *sibi* for *ibi* — a real word, but inside a quoted scripture, so
  Pattern 14 governs and not Pattern 18 (the 7561 @0664 rule). It converts a question about
  *where* into a dative with no owner; rendered as literally as the words allow ("that at least
  for himself there will be rest for me"). Mid-line, not at a break. Plate f402 **and** archive
  p. 407.
- **0805A** `« Intellige prius. »` ‖ Job 18:2 `intelligite prius`. MARKED. **Singular for
  plural**, one line after Baldad's own plural *verba jactabitis* — and Migne's gloss follows the
  singular (*qui Job loqui quod non intelligeret, putabat*). This is the rare divergence with a
  clean English exponent under Pattern 17, so the reader sees it without apparatus. Confirmed at
  native resolution, Gallica f403 crop `110,470,780,120`.
- **0805A** `« Quid perdis animam tuam. »` ‖ Job 18:4 `Qui perdis animam tuam in furore tuo`.
  MARKED. *Quid* for *Qui* turns a vocative relative into a question — the sentence type
  changes. Plate f403 **and** archive p. 408.
- **0809B** `« Ore proprio decorabat. »` ‖ Job 19:16 `ore proprio deprecabar illum`. MARKED, and
  it is the strongest site in the range: **Migne's own gloss prints the received reading eight
  words later** (*prophetarum ore mandaveram, ore proprio deprecabar*). *decorabat* is a real
  word in a quoted scripture, so Pattern 14 again. Rendered "With his own mouth he was adorning."
  Plate f405 **and** archive p. 410.
- **0811A** `« Ego ipse, et oculi mei conspecturi sunt, et non aliis. »` ‖ Job 19:27 `et non
  alius`. MARKED. The gloss immediately argues *non enim alius moritur et alius resurgit … sed
  idem ipse* — the contrast the verse exists to make is between *ipse* and *alius*, and the dative
  plural *aliis* dissolves it. Rendered "and not to others." Plate f406 **and** archive p. 411.

## The one defect that was NOT Migne's — withdrawn before it was fired

- **0798B `mala quae in ferat`.** From our file alone this is Pattern 10 exactly: a split run,
  a real word (`in`) fused to a fragment, in a work that has already yielded four `[sic:]`. It
  would have carried `[sic: *in ferat*]`. **The plate sets `mala quæ in-` at the line end with a
  hyphen and `ferat,` on the next line: ONE word, *inferat*.** Confirmed at native resolution on
  Gallica f399 *and* on the archive copy p. 404 — the hyphen-at-a-break class named in CLAUDE.md,
  which wears Migne's face and is invisible without a plate. No marker; the English renders
  *inferat*; TEI patch filed. ⚑ This is the second time in this book that the candidate a stint
  was surest of turned out to be ours.

## Vulgate divergences — the 7a″ deliverable

All 261 spans walked against `sources/vulgate/clementine-flat.txt`, cited book chapter:verse.
The comparand is sound Latin at every verse quoted here — no new defect found in Tweedale's
file — so nothing on this list is a defect on our side. **MARKED** = a `[var:]` stands in the
English (the seven above); **logged** = recorded, no marker.

| col | Migne prints | Clementine | verdict |
|---|---|---|---|
| 0798B | *Et numerus annorum tyrannidis ejus* | Job 15:20 *et numerus annorum **incertus est** tyrannidis ejus* | logged, **and it is the closest call in the range.** Not an end-truncation but a **medial excision** of the clause's only predicate, leaving a bare noun phrase inside closed guillemets. Declined for a marker because Migne's own gloss recovers the dropped word on the same line (*usque ad cujus vita sub **incertitudine** tenetur?*), so the reader is not misled, and rule 9's abridgment class covers a work that cuts lemmata on every page. Recorded here so the call is visible rather than invisible. |
| 0797C | *Hujusmodi sermones* | Job 15:13 *hujuscemodi sermones* | logged — a real lexical divergence, plate-confirmed f399; sense unchanged. |
| 0798D / 0799A | *Nec mittet in terram* / *in terram non mittet* | Job 15:29 *nec mittet **in terra** radicem suam* | logged. Accusative for ablative, **twice**, and Migne's gloss follows his own accusative (*ad aeternae vitae desiderium cordis sui cogitationem plantat* — planting *into*). English has an exponent ("into the earth" vs "in the earth") but the larger divergence is the dropped *radicem suam*, an end-truncation; declined. Plate f399. |
| 0810C | *Et **de** carnibus meis saturamini* | Job 19:22 *et carnibus meis saturamini* | logged — an added preposition; the gloss (*saturari alienis carnibus quaerit*) does not lean on it. Plate f405. |
| 0801C | *Et posuit me quasi in signum* | Job 16:13 *et posuit me **sibi** quasi in signum* | logged — dropped *sibi*. |
| 0803B | *Et solum mihi superest sepulcrum* | Job 17:1 *dies mei breviabuntur : et solum mihi superest sepulchrum* | logged — medial excision of a whole colon, plus *sepulcrum*/*sepulchrum* orthography. The gloss glosses only the grave. |
| 0804B | *Et non in vobis* | Job 17:10 *et non **inveniam** in vobis ullum sapientem* | logged — the verb falls inside the cut; the gloss restores it (*ne ullum sapientem in eis inveniat*). |
| 0804B | *Cogitationes cor torquentes* | Job 17:11 *cogitationes meae **dissipatae sunt**, torquentes cor meum* | logged — compression; the gloss restores *dissipantur* two lines down. |
| 0806D | *Memoria pereat* | Job 18:17 *Memoria **illius** pereat de terra* | logged — medial excision of the pronoun. |
| 0806B | *Devoret pulchritudinem cutis ejus **et** consumat brachia illius* | Job 18:13 *Devoret pulchritudinem cutis ejus **;** consumat brachia illius primogenita mors* | logged — a semicolon read as a conjunction, and the cut falls exactly where Migne makes *Primogenita mors* the next verse's lemma. |
| 0807D | *Nempe et si ignoravi* | Job 19:4 *Nempe **etsi** ignoravi* | logged — word division only, Pattern 9. |
| 0808D | *Plaga inimici percussi te, castigatione crudeli* [n: (Jerem. XXX)] | Jr 30:14 *plaga **enim** inimici percussi te castigatione crudeli* | logged — dropped connective. ✓ Migne's citation is correct. |
| 0810B | *Mitte manum tuam, et tange os ejus* | Job 2:5 *mitte manum tuam, et tange os ejus **et carnem*** | logged — end-truncation. |
| 0807B | *Ita ut in errorem inducantur, si fieri potest, etiam electi* [n: (Matth. XXIV)] | Mt 24:24 *ita ut in errorem inducantur **(**si fieri potest**)** etiam electi* | logged — Migne commas where the Clementine parenthesises. |
| 0796D–0805B | *Nunquid* ×5 (15:2, 15:7, 15:11, 16:3, 18:4) · *exstinguetur* ×2 (18:5, 18:6) · *coeli* (15:15) · *Judeae* (0810D) | *Numquid* · *extinguetur* · *caeli* | logged as one orthographic class, no marker (Pattern 9). |
| all remaining guillemet lemmata, by column | Job 15–19 as abridged by the Gloss | — | ✓ **agree so far as they run.** Verified column by column against the Clementine; the per-column span tallies are 0796D ×4 · 0797A ×4 · 0797B ×5 · 0797C ×2 · 0797D ×5 · 0798A ×4 · 0798B ×4 · 0798C ×6 · 0798D ×4 · 0799A ×5 · 0799B ×5 · 0799C ×3 · 0799D ×2 · 0800A ×4 · 0800B ×5 · 0800C ×1 · 0800D ×2 · 0801A ×2 · 0801B ×4 · 0801C ×3 · 0801D ×3 · 0802A ×4 · 0802B ×4 · 0802C ×3 · 0802D ×5 · 0803A ×3 · 0803B ×5 · 0803C ×6 · 0803D ×3 · 0804A ×4 · 0804B ×5 · 0804C ×5 · 0804D ×4 · 0805A ×4 · 0805B ×3 · 0805C ×5 · 0805D ×4 · 0806A ×2 · 0806B ×3 · 0806C ×4 · 0806D ×4 · 0807A ×2 · 0807B ×7 · 0807D ×3 · 0808A ×4 · 0808B ×3 · 0808C ×3 · 0808D ×4 · 0809A ×4 · 0809B ×5 · 0809C ×4 · 0809D ×3 · 0810A ×4 · 0810B ×3 · 0810C ×4 · 0810D ×2 · 0811A ×2 = **214**, plus 47 italic spans. |
| 0801C | *Ipsi enim scitis, quod in hoc positi sumus* [n: (I Thess. III)] | 1Thes 3:3 | ✓ agrees. |
| 0802D | *Et qui misit me Pater, ipse testimonium perhibuit de me* | Jo 5:37 | ✓ agrees. |
| 0808A | *commovisti me adversus eum frustra* | Job 2:3 | ✓ agrees (Migne's italic parenthesis, translated in place). |
| 0809A | *Quasi colonus futurus es in terra, et quasi viator declinans ad manendum* [n: (Jer. XIV)] | Jr 14:8 | ✓ agrees. |

**The lemma the pre-scan never saw.** 0798D `Habitavit in civitatibus. »` was collated by hand
against Job 15:28 (`Habitavit in civitatibus desolatis, et in domibus desertis, quae in tumulos
sunt redactae`) — **an ordinary end-truncation at a word boundary, no divergence.** It is
recorded because it was the one span in my range that the mechanical Vulgate pass could not
reach, and it turned out clean; a checked zero is a result.

## Cruces proper

- **0802A/0802B — Migne prints `VERS. 16.` twice, on consecutive paragraphs.** *Saccum consui
  super cutem* is Clem 16:16 and *Facies mea intumuit* is Clem 16:17, and both carry the address
  `VERS. 16.` Plate-confirmed f401. **Reproduced exactly, no marker**: a verse number is a
  structural label, it stands identically in the facing Latin column, and Pattern 9's argument
  for normalised labels is precisely that the defect stays visible there. Note also that Migne's
  own numbering in ch. XVI runs one behind the Clementine from v. 5 (`VERS. 5.-- Atque utinam` =
  Clem 16:4) and is realigned by this doubling.
- **0807B — `unde scriptum est.:` keeps BOTH marks.** The plate sets a full stop and then a
  colon, with a space between (Gallica f404 native crop `120,1350,760,90`). Our TEI has both.
  Pattern 8: nothing supplied, nothing deleted. ⚑ The archive copy at 150 dpi appears to show
  only the colon; the period is real and the low-resolution render is losing it — a reminder that
  a punctuation claim needs native resolution, not a page render.
- **0806C — a paragraph that simply stops.** *Potuit enim et in hac vita gloriosus existere, si
  superbus minime fuisset* closes with **no terminal mark** on the plate (f403). The English stops
  where the plate stops.
- **0808D — the same, again.** *usque ad omne corpus ejus ulceribus attriverunt* — no terminal
  mark (f404). Nothing supplied.
- **0806C — `supplantat.Potuit`, set with no space.** Plate-confirmed f403. A typographic fact of
  the page with no English exponent; the English sentence break stands. No marker, recorded so a
  later sweep does not churn it.
- **0803C — `Ad caput` followed by a small raised mark.** Examined at native resolution (Gallica
  f402 crop `150,1690,880,130`) because a raised key would be **Migne's own asterisk apparatus**
  (Pattern 19) and would demand a `[cn: * | …]` and an `[nt:]`. It is a speck at the line end, and
  there is **no note at the foot of that page**. Our TEI carries nothing. No action.
- **0807D — the Gallica copy clips the left margin and manufactured a candidate.** The last line
  of col. 0807D's left column reads `]os contra ex me percusso contra vos deberetis` on Gallica
  (native crop `40,2830,420,80`) — the `v` is cut off by the page edge. **The archive copy
  (p. 409, corners 807/808 read) sets `vos` plainly.** Our TEI is right, no marker, no patch. This
  is the CLAUDE.md rule working in the direction it is least expected to: on this page the
  1-bit archive scan is the better witness.
- **0798A — an anacoluthon carried, not smoothed.** *Culpa ergo quia ab injusto homine sine ulla
  retractatione perpetratur, quasi aqua iniquitas bibitur* — the nominative *culpa* is left
  hanging and a new subject *iniquitas* takes the verb. Rendered as printed ("Fault therefore,
  because it is perpetrated by an unjust man without any drawing back, iniquity is drunk as it
  were water"). Plate f399. No marker: the type is sound and every word construes on its own.
- **0800B — `similia vestri`.** *Poteram et ego similia vestri loqui* takes a genitive of the
  pronoun where the Vulgate has the same; rendered "like to you". Plate f400. Recorded only so it
  is not re-raised.
- **0801B — `Qui non spiritui, sed manibus inimicorum traditur`.** The relative has no clean
  antecedent (the subject is *populus*, then *caro*). Rendered as printed ("Which is delivered not
  to the spirit but to the hands of the enemies"); the *non* is carried. Plate f401. No marker;
  the clause construes, and 18a keeps a mere concord slip outside Pattern 18.
- **0804B — a run-on Migne does not punctuate.** *tanto subtilius a judice rationes de ipsis
  cogitant exquiri hae cogitationes cum ipsa terrena felicitate dissipantur* — two clauses fused
  with no mark between them (plate f402). Rendered with no mark supplied; the fusion stays
  visible.
- **0810B — three negations in one sentence, all carried.** *Vel, quasi non infirmi, qui non
  deberent increpare cum Deus percutit, ne addant dolorem dolori, sed consolari.* The sentence has
  no finite main verb and ends on a bare infinitive. Rendered as closely as the printed words
  allow; nothing supplied.
- **0808C — `et quia … non evadit` opens a subordinate clause that never closes.** *et quia
  aliquando qui poenis territus justitiam relinquit, poenas tamen non evadit.* Rendered as
  printed, the *quia* left dangling. Plate f404. Pattern 7; no conjecture is defensible.
- **0797C — `Ab humo enim appellatus est`.** The etymology is kept in Latin italics (*homo* /
  *humus*) per the Song-of-Songs rule's case 2; an English "man"/"ground" pair shares no root and
  the gloss would explain nothing.
- **0809A — `« ancillae. »` is quoted mid-sentence and construes with what precedes it.** Migne
  sets *jam per officium in conditione tenebatur « ancillae. »* — the lemma word is pulled into
  the gloss's own syntax as a genitive. Plate f405. Rendered in place, guillemets 1:1, nothing
  re-punctuated (Pattern 5's principle).
- **`(Idem.)` vs `(Ibid.)` at 0806B and 0806C.** Migne uses both anaphors in the same column.
  Both reproduced verbatim inside `[n: …]`; **not normalised**, since a following *Ibid.* chain
  resolves against the printed sequence at index time.
