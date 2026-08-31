# Cruces — 8945 *Liber Deuteronomii* (Glossa ordinaria), chunks 0010–0014

Stint covering `src/latin/8945/0010.md`–`0014.md`, cols **0470D–0481D**
(CAPUT XVIII – CAPUT XXV), translated 2026-08-31.

**All five chunks were read line by line against the Latin twin.** Chunks **0010,
0011, 0012 and 0014 carry substantive entries below. Chunk 0013 was read and is
clean** — it carries no carried type, no dropped or intruded negation, and no
lemma conformed to a familiar English version; its only notes are the two
punctuation/format observations in §F, which are not defects.

Marker parity, reconciled per chunk (Latin body ‖ English body):

| chunk | notes | col. anchors | `## ` heads | La words | En words | ratio |
|---|---|---|---|---|---|---|
| 0010 | 23 ‖ 23 | 10 ‖ 10, verbatim & in order | 3 ‖ 3 | 1013 | 1481 | 1.46× |
| 0011 | 16 ‖ 16 (15 `[n:]` + 1 `[nt:]`) | 9 ‖ 9 | 1 ‖ 1 | 878 | 1302 | 1.48× |
| 0012 | 10 ‖ 10 | 7 ‖ 7 | 1 ‖ 1 | 716 | 1103 | 1.54× |
| 0013 | 17 ‖ 17 | 9 ‖ 9 | 1 ‖ 1 | 885 | 1384 | 1.56× |
| 0014 | 24 ‖ 24 | 10 ‖ 10 | 2 ‖ 2 | 957 | 1479 | 1.55× |

**Apparatus fired in this stint: 4 `[sic:]` · 1 `[cj:]` · 1 `[nt:]` · 0 `[d:]` ·
0 `[var:]` · 0 `[ed:]` · 0 `[f:]` · 0 `[cn:]`.** Zero guillemets in the Latin,
zero in the English.

---

## ⛔ PLATE READ OWED — every `[sic:]` below is provisional

`data/plate-reads.json` records **nothing for 8945**, and
`data/plate-notes/coverage.json` has **no entry for this work at all** (its sister
book 8947 is recorded, 8945 is not) — so the CLAUDE.md 2026-08-19 spot check is
also owed. Every judgment below about *Migne's type* rests on Corpus Corporum's
transcription, **not on the plate**. The four `[sic:]` markers stand on cols
**0471C, 0476C, 0481A and 0481C** and must be plate-verified before this work is
marked `ours`; `node scripts/plate-gate.mjs 8945` will name them.

PL 113's on-disk archive.org copy (`patrologiaecurs04migngoog`, PDF page =
(column + 11) / 2) **clips the left margin on some pages**, and the second witness
is Gallica `ark:/12148/bpt6k5505319w` at **f = (column + 1) / 2** — calibrate
against the printed corner numbers before either read.

⚠ **In-work marker policy is NOT uniform across the five parallel stints, and the
merge must settle it.** Stints 0015/0016/0020 fired `[sic:]` on carried type with
the same "plate read owed" caveat (this stint follows them, as the majority
convention). The 0005–0009 stint fired **none**, on the ground that rule 8a
forbids a claim against Migne's type without a plate read, and logged its
candidates instead. Both are defensible; they cannot both ship.

---

## 1. Carried type — the four `[sic:]`

Each is a non-word or a form with no grammatical slot, carried whole per Patterns
7/10 and marked per Pattern 12. **7a⁗ was checked on all four**: none of them
swallowed a verb, a negation, an interrogative or a conjunction, except where
noted.

- **@0471C — *coversans* for *conversans*.** *Sicque religiose coversans in mundo.*
  Not a Latin word. Carried: `And thus [sic: *coversans*] religiously in the
  world…`. 7a⁗ check: the clause's finite verb is *exspectat* ("he looks for"),
  which is outside the marker, so the sentence still predicates. The conjecture
  is *conversans*, "conducting himself / living," near-certain from *religiose*
  + *in mundo* and from the parallel *conversationem* usage elsewhere in the work.
- **@0476C — *magnificam* for *magnificant*.** Migne prints, inside a quotation of
  Matt. 23:5, *Dilatant phylacteria sua et magnificam fimbrias.* *magnificam* is a
  real form (acc. fem. sing. of *magnificus*) but has **no grammatical slot**: the
  clause needs a finite verb governing *fimbrias*, and an adjective in the
  accusative cannot supply one — Pattern 12's first "real word that still fails the
  test" case. ⚠ **7a⁗ question 1 applies**: the marked run was the second clause's
  only predicate, so the sense is supplied in plain words beside the marker —
  `and they magnify [sic: magnificam] their fringes`. Bare inside the italic run,
  per Pattern 10 (no nested italics). Conjecture: *magnificant*, the Vulgate's
  reading, which the gloss's own *dilatabant fimbrias* two lines above supports.
- **@0481A — *Catceati* for *Calceati*.** In the quotation *Catceati pedes in
  praeparatione Evangelii pacis*. Not a word; a broken *l*. Carried bare inside the
  italic lemma. **The lemma-and-gloss coherence is the evidence**: the gloss
  immediately following reads *Doctorum enim pedes calceati sunt*, with *calceati*
  set correctly, and the whole passage turns on being **shod** — so the defect is
  one sort, not the author's word.
- **@0481C — *pusillium* for *pusillum*, and *quo que* for *quoque*.** Two defects
  on one column. (a) *Pondus magnum et pusillium* — *pusillium* is not a word;
  carried bare inside the italic quotation, conjecture *pusillum*, "small," which
  the answering *pondus magnum* requires. The clause keeps its verb (*sunt* →
  "are"). (b) *Spiritualiter quo que studendum est* — a **split run** under Pattern
  10, carried whole *with its spacing*: `Spiritually [sic: *quo que*] we must take
  care…`. The run is *quoque*, "also"; it is an adverb, not a verb, negation or
  conjunction, so 7a⁗ does not require the force to be supplied beside the marker,
  and it is recorded here instead.

## 2. The one `[cj:]` — @0475A, *infructuosam*

Migne prints: *Non est de die in diem differenda poenitentia, sed statim agenda,
**ut per poenitentiam infructuosam ab oculis Dei abscondantur delicta**.*

*infructuosam* is a perfectly good word, so Pattern 12 has nothing to wrap — and
the faithful English then says that **unfruitful** penance hides offences from
God's eyes, in a sentence whose whole point is that penance must be done at once
*so that* it works. **The contradicting neighbour is on the same plate and in the
same chunk**: eight lines above, at 0472B, the gloss says *Qui fraternum odium
retinet in corde, **non potest fructuosam poenitentiam agere***. The privative
prefix is the word that went wrong, which puts it inside Pattern 18's negation
class (18a's ✅ extension, ruled 2026-08-15).

Rendered additively, nothing removed:
`through unfruitful [cj: *infructuosam*; read *fructuosam*, "fruitful"] penance`.
The printed word is verbatim in the Latin twin, satisfying the guard.

## 3. The one `[nt:]` — @0475A, a note that is prose

Migne's note *(Adam namque in ligno praevaricationis corruit: ideo sibi et posteris
suis maledictionem meruit, de qua dicit: Maledictus omnis qui pendet in ligno.)*
is a **statement, not a locator** — a four-clause explanation with a scripture
quotation inside it. Converted to `[nt:]` and translated in place, at the same
marker index, per Pattern 15. Its parentheses are kept as printed. Every other
note in all five chunks is a citation and stays `[n:]`, verbatim and unanglicized,
including the ones whose reference is wrong (§5).

## 4. Declined conjectures — rendered as printed, logged only

Each of these is a real word occupying its slot; under Pattern 7 the English is
ours and correct, and under Pattern 18's bar (as narrowed by 18a) none of them is
a negation or a correlative, so none was glossed. **Do not read this list as a
to-do.**

- **@0471A — *in successum projici*** for *in secessum* (Matt. 15:17's word, "the
  draught"). Rendered "is cast forth into the outcome." *successus* is a real noun
  in the accusative and construes; the sense the gloss needs ("passes out of the
  body") is the conjecture, not the reading.
- **@0471A — *prodigorum*** for *prodigiorum*. The Augustine excerpt ends *sic illae
  inspectiones prodigorum a significationibus miraculorum discernendae sunt*, and
  its own lemma four words earlier is *portentorum inspectores* — so the sense is
  "of portents." *prodigorum* (gen. pl. of *prodigus*, "of the wasteful") is a real
  genitive with a real governor; rendered "of the prodigal."
- **@0472D — *ut ea, scilicet. sunt ei utilia aut nociva*.** The stray full stop
  after *scilicet* is Migne's and is **preserved** under Pattern 8 ("never
  delete"); the indicative *sunt* where an *ut* clause wants *sint* is rendered as
  printed. The English is correspondingly broken: "Working: that those things,
  namely. are useful or hurtful to him which he perverts in another." Conjecture:
  *ut ea scilicet sint*. Nothing supplied.
- **@0476B — *et profectionibus diversi generis*** for *professionibus*. Rendered
  "and with departures of divers kinds." A real ablative plural; the following
  examples (*sanctimonialis* / *uxor* / *virgo*) are professions, which is the
  evidence for the conjecture and not for an emendation.
- **@0479B — *non praecipitandum … incurras judicium*.** The gerundive stands
  unattached beside a second-person subjunctive. Rendered as closely as the printed
  words allow, with the *non* left where it governs *incurras*: "and mayest not, by
  that which must be hurried, incur the judgment of the reaped harvest."
  Conjecture: *non praecipitando*, "not by hurrying." **No negation was moved,
  added or dropped.**
- **@0479A — *Et pecunia, quae ad usuram dari prohibetur, quia…*** has no main
  verb; the answering *Altera est quam ad usuram dare debemus* two clauses later
  shows a *Una est…* has fallen out or was never set. Rendered with the anacoluthon
  intact ("And money, which is forbidden to be given for usury, because…").
- **@0478D — VERS. 37 in a chapter of 25 verses.** The head *VERS. 37.-- Non erit
  meretrix* stands between VERS. 15 and VERS. 19 and glosses Deut. 23:17. The
  numeral is Migne's and is reproduced; **17** is the obvious reading (a turned
  digit), but a verse number is not a word that asserts anything false about the
  argument, so it takes no marker.
- **@0481A — VERS. 5 printed twice** (*Quando* and *Mortuus fuerit*), consecutively.
  Reproduced as printed; the second gloss does belong to Deut. 25:5.

## 5. Migne's citations that point at the wrong place — verbatim, per the `[n:]` rule

Reproduced exactly as printed. `refDisplay` keeps what Migne prints; resolution is
the indexer's business, not the translator's. Listed so a later pass need not
re-derive them:

- @0470C `[n: (I Cor. IX.)]` on *Dignus est enim operarius cibo suo* — Matt. 10:10.
- @0470C `[n: (Num. XVIII)]` on *Qui altario serviunt cum altario participant* —
  1 Cor. 9:13.
- @0472D `[n: (Gen. XXIX)]` on *Dentes ejus lacte … candidiores* — Gen. 49:12.
- @0474A `[n: (I Cor. XV)]` is right for *Corrumpunt bonos mores colloquia mala*
  (15:33); @0475A `[n: (II Tim. V)]` on *Peccantes coram omnibus argue* is
  1 Tim. 5:20.
- @0475D `[n: (I Cor. XIII)]` on the woman not permitted to teach — 1 Tim. 2:12.
- @0478C `[n: (Job. II)]` on *Balteum regum dissolvit* — Job 12:18.
- @0479A `[n: (Proverb. X)]` on *Ruina est homini post vota tractare* — Prov. 20:25.
- @0481A `[n: (Ezech. VI)]` on *Calceati pedes in praeparatione Evangelii pacis* —
  Eph. 6:15.
- @0477A, @0480C `[n: (Psal. CIII)]` on *Non nobis, Domine* (Ps. 113B:1) and on
  *vinum quod laetificat cor hominis* (Ps. 103:15) — the second is right, the first
  is not.

## 6. Scripture divergences noticed and NOT marked

Per Pattern 14 the `[var:]` bar is a divergence **that changes the sense**, and all
of these are rendered as Migne prints them. None was material enough to fire, and
⛔ none could honestly fire in any case while the plate is unread (rule 8a: a
`[var:]` asserts that MIGNE'S text diverges, and our Latin is not the plate — the
9003 collation found Corpus Corporum manufacturing exactly this class of
divergence). Recorded for a later plate pass:

- @0470C Gal. 6:6 *in omni opere bono* for the Vulgate's *in omnibus bonis*.
- @0474D Luke 3:7 *quis docebit vos fugere* for *quis ostendit vobis fugere*.
- @0473A Ps. 34:25 *devorabimus eum* (future) for *devoravimus eum*.
- @0471A 1 Cor. 6:13 *et hunc et hanc* (singular) for *et hunc et has*. Rendered
  "both the one and the other"; **Latin grammatical gender has no English exponent**
  (Pattern 9), so there is nothing here to mark either way.
- @0478C Job 12:18 *praecinxit* (perfect) for *praecingit*.
- @0481C Prov. 20:10 as printed, *Pondus magnum et pusillium, et mensurae duplices,
  immundae sunt apud Deum*, is a long way from the Vulgate's *Pondus et pondus,
  mensura et mensura* — but that is a loose quotation, not a defect, and the
  *pusillium* inside it is handled at §1.
- @0477C Deut. 23:4: the gloss says the nations met Israel *cum pane tantum* ("with
  bread only"), where Deuteronomy says they did **not** meet them with bread and
  water. This is the author's own paraphrase and it is rendered as printed. **No
  negation was added to rescue it** — the *noluerunt* of his own lemma four words
  earlier stands untouched.

## 7. Format and vocabulary held across the stint — for the merge

- ***usque ad*** → ***as far as***, italic, matching 8947/8976. Every truncated
  patristic excerpt keeps its *etc.* and stops exactly where Migne stops.
- ***doctor*** → **teacher** (never "doctors"), inherited from **8976 §V** via
  8947. ⚠ **This stint was drafted with "doctor" and converted; the parallel stints
  are not yet uniform and the merge must sweep the whole work.** 8 occurrences
  converted here (0010 ×1, 0011 ×2, 0012 ×6 — counting *doctus*/*indoctus* glosses
  separately — 0014 ×1).
- **`VERS. N.-- ` kept unanglicized** and `## CAPUT N.` → `## CHAPTER N.`, final
  stop preserved because this work's heads carry one (8947's CAPUT XXIV does not;
  the plate decides, per work).
- **`LXX` kept as printed**, never expanded to "the Septuagint" in the text.
- **Etymological glosses keep their Latin**, because the gloss *is* the etymology
  and an English word sharing no root would explain nothing (the *stylus* /
  *murenulae* precedent): @0471B *avigeria* / *avigaria*, with *gerantur* and
  *garritus* carried in parentheses beside the English; @0481D *Amalec lingens
  sanguinem* rendered as the name-gloss it is. *Mamzer* (@0477B) likewise stands.
- **Hebrew place- and tribe-names as Migne spells them** (@0472A: Cades, Nephtali,
  Sichem, Ephraim, Cariatharbe, Hebron, Juda, Bosor, Ruben, Ramoth in Galaad, Gad,
  Gaulon in Basan, Manasse). Not normalized to their familiar English shapes.
- **`*(Josue XX)*` at 0472A is an inline italic locator**, not an `[n:]` note, and
  it is the **only** one in these five chunks. It is reproduced verbatim and
  **untagged**. Pattern 4's typographic test would admit an `[f:]` here, but a
  single occurrence in a work that otherwise cites through `[n:]` is not the
  inline-tail genre the pattern was written for, and tagging it in one stint of
  five would put an unmatched `[f:]` into the index. ⬜ **Flagged for merge-time
  reconciliation**: tag it in all stints or none.

## 8. Punctuation preserved that will look like our error

All Pattern 8 — the marks are Migne's and none was supplied, deleted or moved.

- **@0470D** *Quid ergo deesse potest illi qui omnia habentem habet.* — a question
  closed with a full stop. The stop stands; **8b's colon recast does not apply**,
  because this is a direct question in Latin and English can hold the mark it was
  given, however odd.
- **@0476D** *…prius in Deum, postea in virum, vir tantum in Deum* — the sentence
  simply **stops, with no terminal mark at all.** The English stops the same way.
- **@0480C** *Praeterea cum haec populo praecipiuntur; qui non indigent, admonentur*
  — a semicolon breaking the subordinate clause from its main clause. Kept.
- **@0472D** the stray stop after *scilicet* — see §4.
- **@0472D** the italic run of *Dentes ejus lacte … candidiores* is **interrupted by
  Migne's own roman gloss** (*id est lege*) and by the column anchor. The English
  preserves both italic runs and the interruption in place rather than reflowing
  the verse into one quotation: *His teeth than milk,* that is, [0472D] than the
  law, *are whiter*.
