# Cruces — 11031, Petrus diaconus, *Epistolae* (PL 173)

Garbled or doubtful type in Migne's plate, logged here. **Governed by
`translation-style.md` Pattern 7:** the English renders what the plate PRINTS,
never the conjectured reading; type that is not a word at all is carried into the
English untranslated, in italics. Four entries below previously claimed to have
applied their conjecture to the running text (the withdrawn 10103 precedent);
the English has been restored to the printed readings and the entries now record
the conjectures instead.

## Epistle I (chunk 0000)

- **col. 1137D** — `quorum fere omnes sani per diversas curas transierunt`.
  *sani* is grammatically possible as a predicative nominative and is so rendered
  ("who have passed almost all of them sound through various trials"). But the
  Senecan model behind this passage makes *anni* ("whose years have almost all
  passed through various cares") the likelier original; a human read-through
  should decide whether to note the variant in the apparatus.

- **col. 1138C** — `nec autem summam rupit, sed pectus, fateor, et viscera ipsa
  divisit`. The noun governed by *summam* has dropped out; the source phrase
  (Seneca, *Ad Polybium*) reads *summam cutem*, "the outermost skin," which is
  near-certainly what the plate has lost. As printed, *summam* is still
  construable as a substantive ("the sum, the whole"), so it is **rendered
  literally** — "it did not break the sum" — and the conjecture *summam [cutem]*
  is recorded here. (Earlier the English read "it did not break the surface,"
  i.e. the conjecture applied silently.)

- **col. 1138C** — `quemadmodum tirones leviter sauciati, tamen vociferantur, ut
  veterani quamvis confossi patienter ... curari se patiuntur`. Printed *ut*
  where the antithesis requires *at* ("whereas"); as printed the sentence has no
  main clause, since both limbs become subordinate comparatives. *ut* is a Latin
  word and construable with the indicative *patiuntur*, so it is **rendered as
  printed** — "but just as raw recruits … cry out, as veterans … suffer
  themselves to be treated patiently" — and the resulting suspended syntax is
  Migne's, not ours. Evidence for *at*: the Senecan source antithesis
  (*tirones … at veteres*) and the sense, which needs the veterans opposed to the
  recruits, not likened to them. (Earlier the English read "but whereas raw
  recruits … veterans … suffer," i.e. *at* silently substituted.)

- **col. 1138D** — the 1 Thess. 4:14 quotation (*Si enim credimus quod Jesus
  mortuus est et resurrexit…*) is set in italics but carries **no** `[n: …]`
  note; likewise the unmarked allusions to Matt. 11:28, 3 Kings 19:4, Eccli. 38:17,
  and 2 Kings 12:20–23 in Epistle II. Migne notes only the head-dates in this
  work (`noteCount: 1` per chunk), so scripture here will not reach the index by
  the `[n:]` route. Flagged for the indexer, not repaired in the text.

## Epistle II (chunk 0001)

- **col. 1141A** — `Posquam` for *Postquam* (dropped **t**), in the first of the
  five parallel *postquam* clauses; the remaining four are spelled correctly.
  *Posquam* is not a Latin word, so per Pattern 7's non-word ruling it is
  **carried through untranslated in italics** — "For *Posquam* he had made our
  littleness a disciple of Bertulf the chancellor; after he had rewarded me…" The
  intended reading is *postquam*, certain from the four parallel clauses that
  follow. (Earlier the English read "For after he had made…")

## Epistle III (chunk 0002)

- **head, col. 1141C** — `Ad Conradum imperatorem II.` Migne's rubric numbers the
  addressee **Conrad II**, but the letter congratulates the successor of Lothar
  III on a *recens electio*, which is **Conrad III**, elected king of the Romans
  in March 1138 (Conrad II died 1039, a century earlier). The rubric is Migne's,
  not the letter's; the head is translated as printed and the misnumbering left
  standing. A human read-through should decide whether this warrants a
  `citation-corrections.json` entry.

- **col. 1142B–C** — `ut Romana ecclesia maxime, per quam accepistis Romani
  imperii sedem, sentiant se et sentientes gaudeant`. The singular subject
  *Romana ecclesia* governs plural verbs (*sentiant … gaudeant*); either the
  subject has been corrupted from a plural (e.g. *Romani*) or a second subject
  has dropped out. Rendered literally, keeping the printed subject and letting
  the plural verbs stand as "may perceive … may rejoice."

- **col. 1142C** — `Nunquam tantum vobis opos alicujus placeant`. *opos* is not
  Latin, so there is nothing to render; **carried through untranslated in
  italics** — "Let no man's *opos* ever so please you." The intended reading is
  *opes* ("wealth, resources"): the plural verb *placeant* demands a plural
  subject, and the following clause opposes wealth to justice. (Earlier the
  English read "Let no man's wealth ever so please you.")

- **col. 1142D** — `omnipontentis`, not a Latin word; **carried through
  untranslated in italics** — "the grace of *omnipontentis* God." The intended
  reading is *omnipotentis*, certain: the same phrase is spelled correctly
  elsewhere in this letter. (Earlier the English read "of almighty God.")

- **cols. 1143A → 1144A** — the column sequence skips from 1143A straight to
  1144A; there are no 1143B–D anchors in the TEI, and the sentence runs across
  the jump without a break in sense. Reproduced as printed. (Migne's cols.
  1143B–D carry an interposed editorial block, not text of the letter.)

<!-- corpus-polarity-sweep 2026-07-28 -->
## Corpus polarity sweep — 2026-07-28

Blind Opus read of the Latin/English pair for sense-reversing defects (one word or
one letter asserting the opposite of what the context requires). 2 site(s).
Migne's defects are recorded here and rendered literally in the English; our own
errors were fixed in place. Full context: `data/sweeps/corpus-polarity/REPORT.md`.

### 1141D — sense-reversing-letter (migne, low confidence)

Printed: *Per vos Romani imperii dignitas reparatur, sublimatur, et in antiquum consulum Pompeii, Scipionis, Julii, Octaviani atque [1142A] Trajani dominationis vix attollitur statum.*

Conjecture: ***vix* is intrusive or corrupt for an affirmative (e.g. *jam* / *denuo*, or simply *attollitur statum* without it)**

The two verbs immediately preceding in the same clause chain are unqualified praise — *dignitas reparatur, sublimatur* ("is repaired, is lifted up") — and the whole paragraph is panegyric on Conrad's election (*de recenti vestra electione vetera Romano imperio renovat gaudia*; *Per vos quippe aeternae urbis decus honorque ad solis ortum usque protenditur, dilatatur*). To say in the third member that the empire is *scarcely* raised to its ancient state retracts the two members before it. Flagged low because *vix* can bear a "only just / at last" force that is not fatal to the sentence.

### 1144A — sense-reversing-letter (migne, medium confidence)

Printed: *utriusque substantiae hostibus separatis, cum palma certaminis ad se revertentibus, coelestis vitae vobis januas aperiat*

Conjecture: **read *superatis* for *separatis* — "the enemies of both substances having been overcome"**

The clause it governs is a victory clause: *cum palma certaminis ad se revertentibus* ("as you return to him with the palm of the contest") — a palm is awarded for conquering an enemy, not for being parted from one. The letter's own salutation states the same wish in unambiguous terms: *ejus victrici dextera de spiritualibus ac corporalibus hostibus perpetuo triumphare* ("may triumph perpetually by his conquering right hand over enemies both spiritual and bodily"), which is exactly *utriusque substantiae hostibus* (spiritual + bodily = both substances). Migne's *separatis* substitutes mere separation for the conquest the sentence and its frame both require; our English reproduces the defect faithfully rather than repairing it.

