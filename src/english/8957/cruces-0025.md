# Cruces — 8957 *Liber Job*, chunks 0025–0029 (cols 0811A–0820C)

Stint of five chunks. **Every column in the range was read at the plate, inline, while translating**
— Gallica `bpt6k5505319w`, leaves f406–f410, page map `f = (column + 1) / 2`, printed corner
numbers read first on every leaf (811/812, 813/814, 815/816, 817/818, 819/820). Reads are filed in
`data/briefs/8957-PLATE-READS-0025.json`; the four TEI divergences in
`data/briefs/8957-PENDING-TEI-PATCHES-0025.md`.

## §1 · Span count against the brief

| | |
|---|---|
| brief's stated total (chunks 25–29) | **191** |
| counted in my own Latin, paragraph-bounded (italic `*…*` + `« … »`) | **193** |
| delta | **+2** |

**Both units of the delta are ragged spans of the same class, and both are *unopened* lemmata** —
invisible to a harvester that works from the marks, exactly as the brief predicts:

- **0815C `Et superveniet eis inundatio. »`** — closes with `»`, never opens. Absent from the
  inventory; never phrase-searched. **Hand-collated: agrees with Job 21:17.**
- **0819C `VERS. 5.--Ut sciam verba quae, » etc.`** — same shape, already plate-confirmed in the
  brief. Absent from the inventory. **Hand-collated: agrees with Job 23:5 (abridged at a word
  boundary).**

**Ragged classes counted separately: 2 unopened, 0 unclosed, 0 interior continuation marks in this
range.** Guillemet parity against the Latin twin is exact chunk by chunk (0025 4/4, 0026 40/40,
0027 48/49, 0028 37/37, 0029 26/27) — the two ragged lemmata are carried into the English exactly
as printed, per Pattern 5's corollary. No `[sic:]`, no `[cj:]`, no patch fired on a guillemet.

## §2 · Work conventions followed, and the ones this stint fixed

Following the peers (cruces-0000, cruces-0010) with no divergence:

- **`*usque ad*` → `*as far as*`**, italics kept. All the italic spans in this range are that
  formula except the marker contents.
- **`## CAPUT XX.` → `## CHAPTER XX.`**, and `CAPUT XIX (cont.)` → `CHAPTER XIX (cont.)` with
  `(cont.)` untranslated.
- **Attribution sigla stand as printed** (`GREG.`, `BEDA.`, `Ibid.`), in the body as in `[n: …]`.
- **Pattern 17:** Job's friends are `vos` throughout CAPUT XXI–XXII → **you**; God and the
  individual soul are `tu` → **thou** (0818B `revertaris` → "thou return", 0818C–D `elevabis`,
  `reddes`, `Decernes` → "thou shalt…").
- **Holy Scripture** (Pattern 3) at 0818C for *sacrae Scripturae*.

Vocabulary fixed for this stint (recorded because the merge reconciles drift):

| Latin | English | why |
|---|---|---|
| `hypocrita` | **hypocrite** | the whole of CAPUT XX turns on it. |
| `elatus` / `elatio` | **lifted up** / **elation** | kept distinct from *superbia* = pride, which the same columns also use. |
| `districte judicare` | **to judge strictly** | peer convention (cruces-0010), unchanged. |
| `punctum` (Job 20:5, 21:13) | **a point** | never "an instant": the gloss is an image of the stylus set down and lifted, so a temporal word would make it explain nothing. |
| `viator` | **wayfarer** | 0816C; the gloss defines the word, so it must be the same word the lemma is about. |
| `Cocytus` | **Cocytus** | kept, 0816D; it is glossed in place (*luctus infirmantium*). |
| `congeries` | **a heap** | 0816D, glossed as the crowd of the wicked. |
| `mole magnitudinis premitur` | **pressed by the mass of that greatness** | 0819C; *moles* is "mass" at both its occurrences on that column. |
| `arctabitur` | **shall be straitened** | 0813B, with *arctatur* in the gloss rendered the same way. |

## §3 · Markers fired (7 sites), each on a column read at the plate this session

- **0815D `[sic: *exaliqua*]`** — *cum dolorum fluctus exaliqua adversitate patiuntur*. Plate-confirmed
  at native resolution (f408, crop 140,2290,880,120): **fused mid-line, with normal word spacing on
  either side**, so the line-break hypothesis is excluded — and the break that IS on that line
  (*adversi|tate*, hyphenless) our TEI joins correctly. Pattern 10 word-division defect; conjecture
  *ex aliqua*. ⚠ **7a⁗:** the marked run is a preposition and its adjective governing *adversitate*,
  so the sense stands in plain words beside the marker ("from some [sic: *exaliqua*] adversity"),
  not as a hole.
- **Six `[var: …]`** — 0813B, 0816A, 0816C, 0817D, 0818A, 0819D. All Pattern 14, all on columns
  collated at the plate, all listed with their Clementine comparand in §4. The comparand is sound
  Latin at every verse quoted here, so none of them is a defect on our side.

**Nothing was marked on a guillemet, on an abridged lemma, on `Nunquid`/`exsultant`/`sepulcra`
(Pattern 9 orthography), or on any of the four sites where our TEI departs from the plate** — those
last are ours and are filed as patches, not as accusations.

## §4 · Vulgate divergences — the 7a″ deliverable

Every one of the 193 spans was walked against `sources/vulgate/clementine-flat.txt`, cited by book
chapter:verse. **Marked** = a `[var:]` stands in the English; **logged** = recorded, no marker,
because the sense does not turn on it. Abridged lemmata cut at a word boundary are not divergences
(known false positive 9) and are not listed unless something else is going on.

| col | Migne prints | Clementine | verdict |
|---|---|---|---|
| 0813B | `Non remansit de civitate ejus.` | Job 20:21 *Non remansit de **cibo** ejus* | **MARKED.** *civitate* for *cibo*, plate-confirmed at native resolution — and **Migne's own gloss on the next line reads *de cibo ejus***, so the lemma and its exposition disagree on one column. |
| 0816A | `Nunquid Deum quispiam docebit scientiam?` | Job 21:22 *Numquid **Deus** docebit quispiam scientiam* | **MARKED.** The received text has God in the nominative as teacher; Migne's accusative *Deum* reverses who teaches whom, and the gloss (*nobiscum nil injuste agit, qui … juste judicavit*) follows Migne, not the Clementine. |
| 0816C | `Interrogate quemlibet de via.` | Job 21:29 *Interrogate quemlibet de **viatoribus*** | **MARKED.** The gloss immediately expounds *Viator*, a word the lemma as printed no longer contains. ⚠ Weighed as an ordinary abridgment and rejected: this commentary cuts at word boundaries, and *via* for *viatoribus* would be a mid-word cut. |
| 0817D | `Qui sublati sunt ante tempus suum; nisi quod omnes.` | Job 22:16 (no answering clause) | **MARKED.** *nisi quod omnes* stands at no verse of the Clementine, in Job or elsewhere. Plate-confirmed, semicolon and all; rendered as printed. |
| 0818A | `Si reversus fuerit.` | Job 22:23 *Si reversus **fueris** ad Omnipotentem* | **MARKED.** Third person for second, in a lemma whose own gloss is second person twice over (*destructus es*, *si … revertaris … mundaberis*). |
| 0819D | `Et proba me quasi aurum.` | Job 23:10 *et **probavit** me quasi aurum* | **MARKED.** Imperative for indicative — Job asking to be assayed rather than reporting that he has been. **Migne prints both**: `« Et probavit. »` heads the same paragraph eight words earlier. |
| 0813A | `Et cum habuerit quod concupierat.` | Job 20:20 *cum habuerit **quae** concupierat* | logged — neuter singular for plural; the gloss (*hoc tribuitur quod male desideratur*) follows the singular, and nothing turns on the number. |
| 0813C | `Gladius eductus,` | Job 20:25 *Eductus, et egrediens de vagina sua* | logged, **no marker** — *gladius* is supplied, but it is the subject every English version supplies too (Douay "The sword is drawn out"); the gloss's *quasi gladius in vagina* rests on the image, not on a reading. |
| 0814B | `Vos autem attendite me,` | Job 21:5 *Attendite me et obstupescite* | logged — *Vos autem* is the glossator's own connective heading a lemma he re-quotes; the verse's words are intact. |
| 0815B | `Dixit enim insipiens in corde suo: Non est Deus.` | Ps 13:1 / Ps 52:1 (without *enim*) | logged — an inserted connective, not a reading. |
| 0815C | `Consilium eorum longe.` | Job 21:16 *consilium **impiorum** longe sit a me* | logged — *eorum* for *impiorum*, same referent, and the gloss beneath restores *impiorum*. |
| 0816C | `Quis arguet coram eo vias ejus.` | Job 21:31 *viam ejus* | logged — plural for singular; sense unchanged. |
| 0817B | `Nunquid tibi arguet?` | Job 22:4 *Numquid timens arguet **te*** | logged — dative for accusative in a second lemma re-quoted mid-gloss. Rendered literally ("Shall he reprove to thee?"). Declined for a marker under 18a: a case anomaly that merely fails to construe, asserting nothing false. |
| 0819A | `Respondens autem Job dixit:` | Job 23:1 *Respondens autem Job, **ait*** | logged — *dixit* for *ait*; the same formula prints with *dixit* at 0817A for Job 22:1, where the Clementine has *dixit*. |
| 0819B | `Ponam coram Deo judicium.` | Job 23:4 *Ponam coram **eo** judicium* | logged — the noun for the pronoun, same referent, and the gloss repeats Migne's form. |
| 0811A, 0811B, 0812A–0814A | Job 19:27–20:29 lemmata | as printed | ✓ agree, orthography apart (*exstinguetur*, *sepulcra*, *exsultant*, *Nunquid*): Pattern 9, no markers. |
| 0819C–0820C | Job 23:4–17 lemmata | as printed | ✓ agree; the whole of chunk 0029's scripture collates clean. |

## §5 · Cruces proper

- **0820A — a negation that makes the sentence contradict its own argument, and it is Migne's.**
  *Si intus **non** elevatur animus, sed si laus extra quaeritur, tunc sermo Dei in sinu non
  occultatur.* Read on f410 with nothing between plate and TEI anywhere on the leaf. The paragraph
  has just said that we hide God's words in the bosom of the heart; the protasis as printed makes
  the word fail to be hidden **when the mind is *not* lifted up within** — the opposite of the
  condition the argument needs (*si intus elevatur animus*). **Carried exactly as printed**, per
  Pattern 7a; no marker, because the type is not broken and the word is a negation. The
  contradiction is the evidence. (Same shape as the peers' 0773C and 0760C findings.)
- **0812A–B — `non` carried against the drift of the sentence, twice, both plate-confirmed.**
  *neque in hoc saeculo … apparet, neque in aeternitatis requie* and *linguae adulantium hunc ad
  judicium favoribus non sequuntur*. Both stand on f406 as our TEI has them; both are rendered
  negative.
- **0816A — a double negative that construes and is not a defect.** *Non quod in inferno non
  cogitet de cognatis* — "not that in hell he does not think about his kindred". Both negations
  carried; plate-confirmed f408.
- **0815C — `Et superveniet eis inundatio. »` opens no quotation.** Reproduced unopened. See §1.
- **0819C — `VERS. 5.--Ut sciam verba quae, » etc.`** Reproduced unopened, and the address is set
  hard against the text with no space, as our TEI has it and as the plate prints it.
- **0820B — `cum se reddentis rationibus conspicit non esse idoneum`.** *reddentis* is a real word
  and construes only as a genitive participle ("the accounts of one rendering them"), where the
  sense wants the gerundive *reddendis rationibus*, "for rendering accounts". Plate-confirmed f410
  as *reddentis*. Rendered literally; **declined for a `[cj:]`** under 18a — the English is awkward
  but asserts nothing the author did not, which is the pattern's own test.
- **0818B — `Corpus animae accipitur tabernaculum et mens cogitationum`.** The second limb has no
  verb and no second *tabernaculum*; the English repeats "the tabernacle", which the printed
  sentence's own structure supplies. Recorded because it is a supply, however small.
- **0817B — the abridged lemmata that cannot be rendered as English clauses.** `« Nunquid Deo. »`,
  `« Nunquid semitam? »`, `« Nonne succisa. »`, `« Quid enim ad. »`, `« Pro. »`, `« Et qui. »`,
  `« Tunc super. »` are cut mid-clause by design (known false positive 9). Each is rendered as the
  fragment it is ("« Is it to God. »", "« Is it the path? »", "« Is it not cut down. »") rather than
  completed from the Vulgate — completing them is exactly the 7a″ conformation this stint is meant
  to avoid.
- **0814B — `quasi nondum hypocrita`.** Rendered "As if: not yet a hypocrite," with no supplied verb
  of saying; *quasi* introduces Job's imagined speech and the sentence runs straight into the
  first person (*si … agerem, non timerem*).
- **0813A — a sentence that ends with no mark.** *exspoliare per avaritiam non erubescit* — the
  plate prints no terminal stop (f407). None supplied; Pattern 8.
- **0816D — `signantes quod ibi sit luctus iniquus`.** *iniquus* is nominative and agrees with
  *luctus*, so the sense is "an unjust mourning," not "the mourning of the unjust" (*iniquorum*).
  Rendered as printed.

## §6 · Candidates considered and rejected

- **`cetat` (0812C), `comtempsit` (0813C), `sevientibus` (0815B), `er` (0817C)** — four live
  `[sic:]` candidates on non-words, three of them with internal corroboration that reads as
  decisive (*sevientibus* sits eight words from *servire*, and the play is the point of the
  sentence). **All four are OURS**: the plate reads *celat*, *contempsit*, *servientibus*, *ei* at
  native resolution. Withdrawn; patches filed; the English renders the plate. This is the class the
  9004 measurement warned about, and it went four for four against the translator's instinct.
- **The digit 3 printing as 5 on f408** (VERS. 23 and VERS. 33 appearing as 25 and 53 at 1400px) —
  a render artifact of the low-resolution scale, not Migne's type and not our numbering. **Checked
  zero**, and the exact failure the native-crop rule exists to prevent.
- **`quia multi a carnalitate retrahuntur` at 0816D**, where the plate breaks the line after
  *qui* — read as *quia* broken hyphenless across the line, which is this volume's attested habit
  (the *Pereat* class). Our TEI's *quia* is right. No marker.
- **`adversi|tate` at 0815D**, broken across a line with no hyphen; our TEI joins it correctly.
  Rejected as a defect: the break is the first hypothesis and it holds.
- **`(Ibid.)` at 0811B, 0812A, 0812D, 0816B, 0816D, 0819D** resolving back to `(GREG. in Job., l.
  XV.)` and `l. XVI.` across chapter heads — reproduced verbatim, never repaired (known false
  positive 2).
- **`Nunquid`, `exsultant`, `exstinguetur`, `sepulcra`, `coelo`, `foetore`** — orthography
  throughout. Pattern 9. No markers.
- **Migne's `« Gladius eductus »` (0813C)** — considered for a `[var:]` as an added word and
  declined; see §4.
