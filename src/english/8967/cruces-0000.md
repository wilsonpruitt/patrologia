# 8967 *Glossa ordinaria*, Liber Psalmorum — cruces, chunks 0000–0004 (Band A, stint 1)

Range: `src/latin/8967/0000.md`–`0004.md`, cols **0841A–0850A**.
Content: the `PROLOGUS BEATI HIERONYMI`, the `PROTHEMATA IN PSALTERIUM`, and Psalms I–IV.
Lemma brief: `data/briefs/8967-lemmata-0000.txt`.

⚠ **This file is one stint's range. It must be merged into `src/english/8967/cruces.md`.**

---

## §0 · SPAN COUNT RECONCILIATION (the required check)

My brief's header states **6 spans** for chunks 0000–0004. Counting `*…*` in my own Latin:

| chunk | italic spans |
|---|---|
| 0000 | 0 |
| 0001 | 6 |
| 0002 | 0 |
| 0003 | 0 |
| 0004 | 0 |
| **total** | **6** |

**The totals AGREE (6 = 6), and the six spans are the same six, in the same order.** No
head-of-range shortfall, no tail spill. This range's brief was split correctly.

⚑ **One discrepancy, and it is in the brief's column labels, not its membership.** The brief
files all six spans under `[0841A]`/`[0842B]`/`[0842D]`. In the Latin, `*nebel*` and
`*organum.*` stand **after the `[0841B]` anchor**, not `[0841A]`. Membership is unaffected and
nothing downstream reads those labels, but a later stint reconciling by band rather than by
chunk would be misled. Reported rather than worked around.

⚑ Front matter carries few lemmata by nature — six spans across 3,921 Latin words — exactly as
the launch message predicted. Four of the six are single words used **as words** (*nebel*,
*organum.*, *visio,*, *videns.*) and two are the name-etymologies *forti manu* / *pacificus,*.
**None of the six is a `VERS.`-addressed verse lemma**; the verse lemmata in Psalms I–IV are
set in guillemets, not italics.

### The six spans, checked in place

| col | span | verdict |
|---|---|---|
| 0841B | `*nebel*` (נבל) | The Hebrew name of the instrument. **Recovered from the plate and confirmed by me at p. 426**; CC drops all Hebrew from this work. Kept exactly as it stands, unromanized, per the launch brief. |
| 0841B | `*organum.*` | The **Latin** name, cited *as a Latin word* in a sentence naming the word in three languages (Heb./Gk./Lat.). Englishing it to "organ" would destroy the sentence's point, so it stays. Not a Vulgate lemma; nothing to collate. |
| 0842B | `*visio,*` | Englished to `*a vision,*` (convention 2). Not a quotation: it is the gloss's own equation *prophetia = visio*. Punctuation kept inside the span as Migne sets it. |
| 0842B | `*videns.*` | Englished to `*one that sees.*` — see §3.1 for why not "a seer". |
| 0842D | `*forti manu*` | The etymology of *David*. Brief marks `✓ Jdc 4:24`: that match is **irrelevant** — the phrase there is Israel's hand prevailing over Jabin, and this gloss is naming what the name David means. Not a scripture lemma. Englished `*strong of hand*`. |
| 0842D | `*pacificus,*` | The etymology of *Solomon*. Englished `*peaceable,*`. ⚑ Migne sets *forti manu* in the **ablative** and *pacificus* in the **nominative** in one apposition (`si David est et Salomon, id est, forti manu et pacificus`). Plate-confirmed at p. 426. Rendered as printed; not tidied to a common case. |

---

## §1 · MARKERS FIRED — three `[var:]`, no `[sic:]`, no `[cj:]`, no `[d:]`, no `[ed:]`

**All three stand on columns I read at Migne's plate this session** (see §2); `plate-gate.mjs 8967`
returns ✓ for all three.

1. **`[var:]` @ 0844D (chunk 0002)** — Gn 3:12. Migne prints
   `« Mulier quam dedisti mihi me seduxit. »` The Clementine reads *Mulier, quam dedisti mihi
   sociam, dedit mihi de ligno, et comedi.* **Sense-changing:** Adam's excuse in the Vulgate is
   that the woman *gave him of the tree*; Migne's makes her **seduce** him — importing the verb
   the Vulgate assigns to the serpent one verse later (Gn 3:13, *serpens decepit me*). The
   gloss is building the *abiit / stetit / sedit* triad on exactly this clause (*sedit, dum se
   excusavit*), so the wording is load-bearing. **Plate-confirmed at 600 dpi, p. 427, mid-line,
   right-hand (clean) column.** Rendered as printed; the marker sits beside the rendering.

2. **`[var:]` @ 0848B (chunk 0003)** — 1 Pt 3:19. Migne prints
   `« Quando iis qui erant in carcere, spiritibus profectas praedicavit… »` The Clementine reads
   *In quo et his, qui in carcere erant, spiritibus **veniens** praedicavit.* **Plate-confirmed
   at 600 dpi, p. 429, right-hand (clean) column: the plate genuinely reads *profectas*.**
   ⚑ *profectas* is a real word-form (fem. acc. pl. of *profectus, -a, -um*) with nothing in the
   clause to agree with; the sense the sentence needs is the masculine nominative *profectus*,
   "having gone forth" — parallel to the Vulgate's *veniens*. I rendered it for that sense
   ("having gone forth") and put the divergence and the conjecture in the marker rather than
   quarantining the word, per 7a⁗: quarantining it would have taken the participle that carries
   Christ's descent, which is the whole point of the citation. **I did not fire a `[sic:]`
   beside it** — see §4.2.

3. **`[var:]` @ 0848D (chunk 0004)** — Rm 5:3. Migne prints `« Gaudemus in tribulationibus
   scientes quod tribulatio, etc. »`; the Clementine reads *gloriamur in tribulationibus*.
   **Plate-confirmed at 600 dpi, p. 429, right-hand (clean) column.** Rejoicing for glorying —
   a lexical substitution in a proof-text adduced for consolation. Fired because the column is
   clean, read, and mid-line; the divergence is one word and I say so in the marker rather than
   arguing sense from it.

---

## §2 · PLATE READS DONE THIS STINT — three new pages, recorded

`data/plate-reads.json` had 0841A–0842D and 0849A–0850D for this work. **My range also covers
0843A–0848D, which was unread, and half my `[var:]` candidates fell there.** I rendered and read
**pp. 427, 428 and 429** of `raw/scans/pl113/patrologiaecurs04migngoog.pdf` (map `PDF page =
(column + 11) / 2`, corner numbers checked first on every page) and recorded all three reads.
**Cols 0841A–0850D of this work are now fully read.**

- **Zero foot-of-page conjecture apparatus on all three pages**, of either the numbered or the
  asterisk layer. That is consistent with the five pages read at chunking; coverage stays `spot`.
- **The mod-4 clipping rule held 6 of 6**: 843 clean, 845 clipped, 847 clean.

### ⭐ 2a. A CORPUS CORPORUM DEPARTURE FROM THE PLATE — 0847A, needs a TEI patch, NOT a marker

**The plate reads `sordescet`; our TEI reads `sordescat`** (Apoc 22:11, in the Ps 2:9 gloss).
Confirmed at 600 dpi. This is the class CLAUDE.md test 4 names: **CC silently normalizing Migne
toward a familiar text** — Migne's future indicative pulled into the Clementine's present
subjunctive, and it is invisible from the Latin alone.

⛔ **No marker is owed and I fired none.** A `[sic:]` may wrap only words carried verbatim from
the plate, and our Latin column does not carry this one; a `[var:]` would assert that *our*
printed Latin diverges from the Vulgate, which — as CC prints it — it does not. **The correct
repair is a `data/tei-patches/8967.json` entry restoring `sordescet`, after which the divergence
becomes a real (small) `[var:]` candidate.** My English renders our Latin twin (`sordescat`,
"may be defiled still") and flags it here. **Escalated: this needs an editor's decision, not a
translator's.**

### 2b. Two further CC-vs-plate departures, both cosmetic, both logged for the same patch pass

- **0845A** — the plate sets **one** note, `(AUG. CASS.)`. CC splits it into a bare running-text
  `AUG.` plus a separate `[n: (CASS.)]`. My English reproduces CC's shape exactly (an
  unanglicized bare `AUG.` in the running text) because marker parity is checked against the
  twin. Reported, not repaired.
- **0848D** — the plate sets `duxisti, v. «` (comma, **lowercase** *v.*); CC gives `duxisti. V. «`.
  I reproduce CC's. ⚑ I could not settle what Migne's `v.` abbreviates — *vide*? *versus*? — and
  I did **not** guess: it passes through as printed.
- **0849D** — the plate closes `« In corde. »`; **CC drops the closing guillemet**, which is why
  chunk 0004's guillemets run 29 « against 28 ». I reproduce CC's (sacred 1:1 against the twin).
  Same for chunk 0002 (25/24) and chunk 0003 (56/57); I did not "balance" any of them.

### 2c. What the clipped column cost me — one candidate withdrawn for want of a second copy

**0845B, Jo 7:38.** CC reads `« Qui crediderit in me… »` against the Clementine's *Qui credit in
me* — a future perfect for a present, and a real candidate. **On the plate the word breaks across
the line exactly at the clipped inner margin** (`Qui cre-` / `[3–5 chars lost]…in me`), and 845 is
a left-hand column ≡ 1 (mod 4). **Per §3 of the launch brief this does not ship on this copy.**
Marker withheld. **Settleable in one Gallica IIIF request** (`ark:/12148/bpt6k5505319w`,
`f = (column + 1) / 2` → f423); left for whoever runs the second-witness pass.

---

## §3 · THE DIVERGENCE LIST — every scripture quotation in the range, including the clean ones

7a″ says the list is the deliverable. **Every guillemeted quotation and every `VERS.` lemma in
cols 0841A–0850A was collated against `sources/vulgate/clementine-flat.txt`.** Findings first,
then the checked-clean.

### 3.1 Divergences found, marker DECLINED, with the reason

| col | Migne prints | Clementine | why no marker |
|---|---|---|---|
| 0842B | *Directus est Spiritus Domini in David* | 1Rg 16:13 *et directus est spiritus Domini **a die illa** in David, et deinceps* | Straight abridgment of a longer verse; no word altered. Plate-confirmed p. 426. |
| 0842C | *Si David in spiritu vocat eum Dominum, quomodo filius ejus est?* | **Two verses spliced**: Mt 22:43 *Quomodo ergo David in spiritu vocat eum Dominum* + Mt 22:45 *Si ergo David vocat eum Dominum, quomodo filius ejus est?* | A **conflation**, not a divergence in wording: every word is Matthew's and the sense is unchanged. Migne's own `(Matth. XXII.)` covers both verses. Plate-confirmed. Named here because a conflation is exactly what a later reader would want flagged. |
| 0842C | *Non voluntate humana allata est… locuti sunt **sancti homines Dei*** | 2Pt 1:21 *Non **enim** voluntate humana… **sancti Dei homines*** | Dropped connective + word order. Sense identical. Plate-confirmed. |
| 0843B | *Unde mihi hoc, ut veniat mater Domini? etc.* | Lc 1:43 *Et unde **hoc mihi**, ut veniat mater Domini **mei ad me**?* | Word order and an abridgment Migne himself marks with *etc.* Sense identical. ⚑ Note the transposed *Unde mihi hoc* is the order at Rt 2:10 — a memory-quotation cadence, not an argument. |
| 0843A | citation *(Lev. XIII)* for the leper's oil | the rite is **Lv 14:15–18**; Lv 13 is the diagnosis of leprosy | A **citation**, not a quotation: `refDisplay` keeps what Migne printed and `refKey` resolves it at indexing. Plate-confirmed *Lev XIII*. Not `[var:]` territory. |
| 0844A | *Da **partes** septem, necnon et octo* | Ecl 11:2 *Da **partem** septem necnon et octo* | Plural for singular; **plate-confirmed**. Declined because the gloss argues from the **numbers** seven and eight, not from the noun, so the sense does not turn on it. |
| 0844B | ***Sicut** scriptum est in libro Psalmorum* | Act 1:20 *Scriptum est **enim** in libro Psalmorum* | Plate-confirmed. The gloss's argument is that *liber* is **singular**, which both readings give identically. |
| 0845B | *ut **Job**: « Aquae multae populi multi »* | The phrase is in **no** book of Job. Nearest sense: Apc 17:15 *Aquae… populi sunt*; the words *populi multi* recur at Is 2:3, Ez 38:9, Zach 8:22 | A **mis-attribution by the gloss**, not a wording divergence, so `[var:]` is the wrong instrument. ⚑ And `ut Job` stands at a **line opening in the clipped column 845** — I could not verify it at the plate at all, so I make no claim about whose it is. |
| 0847A | *Ecce **hic positus est** in ruinam* | Lc 2:34 *Ecce **positus est hic** in ruinam* | Word order only. Plate-confirmed p. 429. |
| 0847A | *qui justus est, justificetur adhuc: et qui in sordibus est, sordescat adhuc* | Apc 22:11 sets **the filth clause first and the justice clause last**, after *Qui nocet, noceat adhuc* | Clause **reordering** of a four-member series that Migne quotes only in part. Sense of each member unchanged. ⚑ See §2a — the same site carries a real CC/plate departure on *sordescet*. |
| 0848B | *illuminabit **tibi** Christus* | Eph 5:14 *illuminabit **te** Christus* | Plate-confirmed. Dative for accusative; in English both are "shall enlighten thee". Not sense-changing. |
| 0848C | *benedictio tua **sit** super populum tuum* | Ps 3:9 *et super populum tuum benedictio tua* | Migne supplies *sit* and reorders inside his own gloss, which is quoting to address God (*et o Domine*). Rendered as printed. |
| 0849A | *V. « Gaudemus…* — the leading `v.` | — | Not a scripture question. See §2b: unresolved abbreviation, passed through. |

### 3.2 Quotations collated and found to AGREE with the Clementine — the checked negatives

Recorded because a findings list alone cannot be told from a stint that never looked.

- **0842B** *Nolite tangere christos meos* = Ps 104:15 **verbatim** (also 1Par 16:22).
- **0842D–0843A** *Haec dicit Dominus christo meo Cyro* = Is 45:1 **verbatim**.
- **0843B** *In principio, creavit Deus coelum et terram* = Gn 1:1 (Migne's comma after *principio*
  is his pointing; the Clementine spells *caelum* where CC prints *coelum* — an orthographic
  normalization of the flat file, per `sources/vulgate/README.md`, not a divergence).
- **0843B** *Ecce Virgo concipiet* = Is 7:14 verbatim (twice).
- **0843C** *Quadraginta dies, et Ninive subvertetur* = Jon 3:4 verbatim (Migne drops only the
  verse's opening *Adhuc*).
- **0844A** *Miserere mei Deus* = Ps 50:3; *Misericordiam et judicium cantabo tibi* = Ps 100:1;
  *Omnis spiritus laudet Dominum* = Ps 150:6 — **all three verbatim, and all three the correct
  hinge-verses of the three fifties the gloss is counting.**
- **0844B** *Domine, quid multiplicati* = Ps 3:2 verbatim.
- **0844C** *Tecum principium* = Ps 109:3; *Ego dormivi* = Ps 3:6; *Longe a salute mea* = Ps 21:2 —
  all verbatim incipits.
- **0847A** *qui in sordibus est, sordescat adhuc* = Apc 22:11 **verbatim as our Latin prints it**
  (see §2a for the plate).
- **0847D** *Quod facis, fac citius* = Jo 13:27 verbatim.
- **0849B** *Sol non occidat super iracundiam vestram* = Eph 4:26 **verbatim**.
- **Every `VERS. n.--` lemma of Psalms I, II, III and IV** was checked against Ps 1–4 in the
  Clementine and **every one matches its own verse, verbatim, at the printed number** — see §3.3.

### 3.3 ⭐ THE VERSE NUMBERING IS RIGHT, AND I CHECKED IT RATHER THAN ASSUMING IT

Per §1 of the launch brief. All 30 `VERS.` addresses in my range resolve to the **Vulgate** verse
of that number in their own psalm, with **zero** offset:

- **Ps I** — VERS. 1 *Beatus vir qui non abiit* (1:1) · 2 *Sed in lege* (1:2) · 3 *Et erit* (1:3) ·
  4 *Non sic impii* (1:4) · 5 *Ideo non resurgent* (1:5) · 6 *Quoniam novit Dominus* (1:6). ✓
- **Ps II** — 1 *Quare fremuerunt gentes* · 2 *Reges* · 3 *Dirumpamus* · 4 *Irridebit* ·
  5 *Loquetur ad eos* · 6 *Ego autem* · 7 *Dominus dixit* · 8 *Postula* · 9 *Reges eos* ·
  10 *Et nunc, reges, intelligite* · 12 *Nequando irascatur* · 13 *Cum exarserit*. ✓
- **Ps III** — 1 *Psalmus* (the titulus) through 8 *Quoniam tu percussisti*. ✓
- **Ps IV** — 1 *In finem* through 9 *In pace in idipsum*. ✓

⚑ **`VERS. 11` is missing from Psalm II, and it is a GAP, not a defect.** Migne runs 10 → 12 → 13.
**Plate-confirmed, p. 429.** Ps 2:11 is *Servite Domino in timore, et exsultate ei cum tremore*,
and the recension simply carries no gloss on it: 12 and 13 sit on their own correct verses either
side, so nothing has slipped. **This is not the Jude-style out-of-sequence numbering the brief
warns about and must not be "restored"** — reproduced exactly as printed.

---

## §4 · CANDIDATES REJECTED, AND WHY — the measured instrument

### 4.1 `modo etiam apposuit` @ 0841C — declined, and the copy cannot settle it

Migne prints `Nam David composuit omnes psalmos: modo etiam apposuit, in quo multos auxiliatores
habuit`. **`apposuit` has no object and `modo` is a bare ablative**; the sentence wants something
like *modos etiam apposuit* ("he supplied the melodies as well"), which is what the following
*in quo multos auxiliatores habuit* is about. **I did NOT emend.** I rendered it "he moreover
appended them, wherein he had many helpers", taking *modo etiam* adverbially, which keeps every
printed word and invents no noun.

⛔ **And the plate cannot arbitrate: the verb stands at a LINE OPENING in column 841, which is
clipped** (the read at chunking recorded exactly this). Our copy shows `…uit,`. **Needs Gallica
f421.** Logged, no marker.

### 4.2 No `[sic:]` on *profectas* @ 0848B — deliberate

The obvious move is to stack a `[sic:]` on the `[var:]`. **I declined, and the reason is the
class prior, not a hunch:** *profectas* is a **real, well-formed Latin word** — Pattern 12 marks
type the plate got wrong, and nothing here shows the plate got anything wrong. It reads exactly as
a father's loose participle would if his copy had *profectus* and a compositor set the wrong
ending — but **that is a guess about whose error it is, and 9004 measured translating agents'
attribution guesses at 5 right against 9 wrong.** The `[var:]` states both readings without
claiming a culprit, which is what Pattern 14 is for. ⚑ On that same work **8 of 27 `[sic:]` fell
at the plate and every fall was a single word**; *profectas* is a single word.

### 4.3 Candidates raised and rejected on inspection

- **`quem novit Deus` @ 0849B** — masculine relative for the neuter antecedent *corde*. **A
  solecism, not a defect**, and Pattern 9 territory; medieval Latin does this constantly.
  Rendered "which God knows". No marker.
- **`Non retropendet` @ 0848C** — *retropendere* is not a classical verb and reads oddly. **But
  it is transparently formed** (*retro* + *pendere*, "to weigh back"), it is plate-confirmed
  p. 429, and it stands in a clean column with normal spacing. Rendered literally, "He does not
  weigh back". Pattern 7, no marker. ⚑ Flagged so a blind reader does not think it was missed.
- **`in latitudine gaudii duxisti` @ 0848D** — ablative where the sense wants the accusative of
  motion (*in latitudinem*). Plate-confirmed. Rendered "into the breadth of joy" for the sense the
  verb *duxisti* forces, which is what the printed words allow. No marker; a case ending is not a
  Pattern 10 non-word.
- **`vel etiam diabolis et angelis ejus` @ 0847D** — a **plural** *diabolis* with a **singular**
  *ejus* hanging off it. Plate-confirmed p. 429. Rendered "by devils and his angels", carrying
  the mismatch. Per axis 3 the word is **devil(s)**, never "demon". No marker.
- **`ut sitis aqua` @ 0845B** — *sitis* is the noun "thirst" (nominative), not the verb "you may
  be": *qua reficitur interior homo, ut sitis aqua* = the inner man is restored by wisdom "as
  thirst by water". ⚑ **This is a live mis-parse trap of exactly the Judith *ferias* shape** (a
  noun readable as a subjunctive) and I name it so no later pass silently "fixes" it.
- **`nomine, non numine` @ 0844C** — a *nomen/numen* jingle English cannot keep. Rendered "in
  name, not in the divine power", losing the sound and keeping the sense. Not a defect; recorded
  because the loss is real.
- **PSAMUS CXXIV** — outside my range and already settled at the plate; no action, per §3 of the
  launch brief.

---

## §5 · RENDERING CALLS AND CONVENTIONS APPLIED

- **`In finem` → "Unto the end."** (launch brief §2.1) at 0848D, and the gloss immediately under
  it argues from *finis* meaning END (*quando aliquid deficit, vel quando perficitur*), which is
  the axis's own justification standing in my range. Rendered "The end is said in two ways, when
  something fails, or when it is completed."
- **`Diapsalma` → *diapsalma*, unanglicized** (brief §2.2), four occurrences at 0849A–0849C.
  ⚑ **Migne sets it in ROMAN here, not italic** — so my English sets it roman too. The brief says
  "italic as Migne sets it"; in this book, at these four sites, he does not. Italicizing it would
  also have broken span parity against the twin. Never "Selah", never "pause".
- **`gentes` → nations** throughout Psalm II (0846A *Quare fremuerunt gentes*, 0846C *in omnibus
  gentibus*, 0847A *do tibi gentes haereditatem*). Axis 4: this psalm sets *gentes* against
  *populi*, not against *Judaei*, and the gloss expounds it of Herod, Pilate and the spread of
  Christ's name through the world — **plainly generic**, so "nations". Stated here because the
  Douay gives "the Gentiles" at Ps 2:1 and Acts 4:25 and the familiar cadence pulls hard.
- **`mysterium` → mystery** (0842A *plus mysteriorum*, 0843C *altioris mysterii*, 0848D *in magno
  mysterio*). No *sacramentum* occurs in this range, so the 1:1 axis is untested here.
- **`usque ad`** — **does not occur** in my range, in either the formula or the temporal sense.
- **Commentator's voice not archaised** (axis 1): *dicit*/*ait* → "says", throughout. The only
  `-eth` forms in my English are inside guillemeted scripture (*casteth*, *dwelleth*, *knoweth*,
  *showeth*), which is where axis 1 permits them.
- **`(ID.)` and `(Ibid.)` never expanded** — 23 of them in this range, all passed through verbatim.
- **`AUG.` at 0845A** passes through as a bare unanglicized siglum in the running text, because
  that is what our Latin twin has. See §2b.
- **Second person (Pattern 17):** plural *vos/vestris/dominemini* → **you/your** (0847B, 0849A–B);
  singular *cognosceris* addressed to God at 0849D → **thou**. No reverence-thou anywhere.
- **`PSALMUS PRIMUS.` → `PSALM ONE.` but `PSALMUS II./III./IV.` → `PSALM II./III./IV.`** —
  numerals mirror the plate, per the shared brief's measured rule.
- **`PROTHEMATA IN PSALTERIUM.` → `PROTHEMATA ON THE PSALTER.`** ⚑ *Prothemata* is kept: it is a
  technical name for a class of prefatory material, it is current in English medieval studies, and
  "Preliminary Themes" would read as a description rather than a title. **First use of this head
  in the corpus — flagged for the merge so the other seven stints and Bands B/C match it.**
- **`PROLOGUS BEATI HIERONYMI IN LIBRUM PSALMORUM.` → `THE PROLOGUE OF BLESSED JEROME ON THE BOOK
  OF PSALMS.`** — the shipped corpus form (8946 Ecclesiastes, 8948 Esther).

---

## §6 · THE THREE CONTAINMENT TESTS, PLUS THE FOURTH

1. **`[sic:]` swallowing** — n/a: I fired none. Both `[var:]` markers sit **beside** a complete
   rendering; stripping every marker from my English leaves four readable sentences with no
   stranded article, preposition or doubled mark.
2. **Negation attachment, host named** — all 34 printed negatives in the range walked, host word
   named, host located in the English. Two were on the 2a trigger population and are recorded:
   - **0847D** *qui gloriam majestatis **non putant** ad humilia posse descendere* — the *non* is
     on **putant**, not on *posse*. Written "who **do not think** that the glory of majesty can
     descend", never "who think it cannot".
   - **0848C** *saeviunt illi, sed **non** dormirem, **nisi** vellem* — *non* on *dormirem*,
     *nisi* on *vellem*, and the `sed` correlative confirms the scope. "they rage, but I would
     not sleep, unless I willed it."
   - Also carried without softening: *nisi sequantur laudanda* (0845A), *nec otiosa* (0845A),
     *alii nec judicabunt, nec judicabuntur* (0845D), *ne mundus post eum abiret* (0846B),
     *qui nolunt jugum Christi sibi imponi* (0846B), *ut non temere dominemini* (0847B),
     *nihil patientiae* (0847C), *Aliter non sperarent* (0848A), *quae non Deus* / *quae non
     faciunt quod promittunt* (0849A), *non ei consentiat ratio* (0849B), *quae non ducitur ad
     effectum* (0849C), *non in multiplicitate saeculi* (0850A).
3. **Punctuation band by band** — colons, semicolons, question marks, guillemets and exclamations
   compared inside every one of the 37 column bands in my range. **All bands match 1:1 except one,
   and that one is licensed:** `[0842A]` carries **one extra colon** in the English, from Pattern
   8b — Migne closes the indirect question *Solet quaeri cur… legantur?* with a mark English
   cannot carry, so it is recast direct behind a colon: "It is commonly asked: why are the psalms
   read in the Church before other Scriptures?" **The `?` is preserved, not dropped.** All three
   of the Latin's question marks are present in the English. ⚑ In the first pass this comparison
   returned **16** mismatched bands — every one a comma I had promoted to a semicolon or colon out
   of habit. Fifteen were reverted to the printed mark. The test earns its place.
4. **"Does it ASSERT what he asserts?"** — every paragraph read back against the Latin with the
   counts already clean. Two things this caught that nothing else would have:
   - **0846C** — I had first written "they wish to subjugate us **to themselves**" with the
     unexpressed subject taken as the kings. **It is the Lord and his Christ**: the whole speech
     is the kings quoting *their* bonds (*Dirumpamus… quibus nos sibi astringere volunt*), and
     *sibi* points back through the lemma to *adversus Dominum et adversus christum ejus*. The
     antecedent is in the **lemma above**, exactly as the brief warns.
   - **0846B** — *Prior qui infantes occidit Herodes, posterior qui Pilato consensit*: the
     *posterior* is **also a Herod** (Antipas), which the next sentence proves (*Solus enim rex
     Herodes et princeps Pilatus*). I did **not** supply the name, because Migne does not; the
     English keeps his bare "the latter, he who consented with Pilate".

---

## §7 · SECTIONS READ CLEAN

Cols **0841A–0844C** (the *prothemata* entire), **0844D–0846A** (Psalm I), **0846A–0848C**
(Psalms II–III) and **0848D–0850A** (Psalm IV) were each read line by line against the Latin
twin, and against the plate for 0841A–0850D. Apart from the sites named above, **no polarity
defect, no dropped clause, no supplied or destroyed punctuation mark, and no unexpressed-subject
ambiguity remained unresolved.** `verify-english.mjs 8967` is silent on chunks 0000–0004;
`plate-gate.mjs 8967` returns ✓ on all three of my markers.

---

## §8 · HANDOFF — what the merge and the editor must act on

1. **`sordescat` → `sordescet` needs a `data/tei-patches/8967.json` entry** (§2a). Editor's call.
2. **Two Gallica second-witness reads are owed and each costs one HTTP request** (§2c, §4.1):
   `f423` for *crediderit* @ 0845B, `f421` for *apposuit* @ 0841C.
3. **`PROTHEMATA ON THE PSALTER.` and `PSALM ONE.` / `PSALM II.`** are first uses; the other seven
   Band A stints and Bands B and C must match them.
4. **The lemma brief's column labels are off for chunks 0000–0004** (§0). Membership is correct;
   only the printed band label is wrong. Worth checking whether the same generator mislabels the
   other 21 ranges.
5. **My three new plate reads are in `data/plate-reads.json`**; cols 0841A–0850D of this work are
   now fully read and the mod-4 clipping rule stands at 6 of 6.
