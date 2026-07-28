# Cruces — 11556, Richard of St Victor, *Sermo de missione Spiritus Sancti* (PL 196, 1017D–1032A)

Garbled or irregular printed readings in Migne's plate, logged here, plus
citation and column-anchor anomalies passed through verbatim under the marker
rule. The English renders **what the plate prints**, per `translation-style.md`
**Pattern 7**: a printed reading that is construable is rendered literally even
where it is odd or says the opposite of what the argument requires, and type that
is not a word at all is carried into the English untranslated, in italics and
marked `[sic: …]` (Pattern 12). Conjectured readings are recorded here and only
here; they are never applied to the running text.

## Chunk 0000

- ~~**Col 1018D — column anchor out of band.**~~ **DO NOT FIX — false alarm,
  documented do-not-reopen class.** The sequence `1017D → 1018D → 1019A` is
  normal. Migne's A–D marks are *positional quarter-guides transcribed where they
  appear in the plate*, not four marks per column; the band letter says where in
  a column the mark falls, and the column number is what increments. So a `D`
  mark in col. 1017 followed by a `D` mark in col. 1018 followed by an `A` mark in
  col. 1019 describes three different columns and implies nothing missing.
  Arithmetic over the band letters manufactures phantom gaps — this was settled
  corpus-wide on 2026-07-18 (49 such "gaps" examined, all same-letter, zero real).
  No tei-patch. The only real signal is text broken mid-word or mid-construction
  across an anchor, and there is none here.
- **Col 1017D** — `Ubique est, omnia potest, et omnino cum nihil latere potest.`
  As printed, *cum* leaves the clause without a subject for *latere* to escape.
  Rendered literally, *cum* standing where the plate puts it: "and altogether,
  since nothing can lie hidden." The intended reading is near-certainly *eum*
  ("and nothing at all can lie hidden **from him**"), which the tricolon
  (present everywhere / all-powerful / all-knowing) and the whole following
  argument require. *cum* is a real word, so it is rendered rather than carried —
  no `[sic: …]` (Pattern 12's boundary).
- **Col 1019B** — `Argumentum itaque est a toto quia omnia possit, quod sine ipso
  nihil subsistit, nihil subsistere possit.` The *nihil subsist-* clause is set
  twice, once indicative and once subjunctive. **Not treated as dittography**
  (Pattern 11) — the two runs are not identical, so this looks like a variant
  that the compositor set alongside the reading it was meant to replace rather
  than a doubled run. Both are rendered.
- **Col 1019C** — `Quod multa putamus saepe cognoscimus, quorum tamen vocabula
  non novimus vel obliti sumus.` The opening *Quod* has no antecedent and no
  governing verb. Rendered as printed ("Because we often come to know many things
  which we think of…"). *Multa etenim* or *Multa enim* would give the sense the
  argument needs.
- **Col 1020B** — `*Spiritus Domini replevit orbem terrarum … [n: (Gen. II)]*`.
  The note attached to the peroration's repetition of the sermon's theme verse
  cites **Gen. II**, but the verse is **Wisdom 1:7** — cited correctly as
  `(Sap. I)` at the sermon's opening (1017D) and again twice in chunk 0004. The
  note is reproduced verbatim per the marker rule; the misattribution is Migne's,
  and `refDisplay` should keep it while `refKey` resolves to Wisdom.

## Chunk 0001

- **Col 1021D — spurious italic run and capital.** `Cum enim istae multiformis
  gratiae Spiritus unam *Aliquam gratiam homini ex prius* habitis subtrahit`.
  Two defects at once: an italic run opened mid-clause around words that are not
  a quotation (the sermon italicizes scripture only), and *Aliquam* capitalized
  inside a sentence. Read straight through, the words are ordinary Latin —
  *unam aliquam gratiam homini ex prius habitis subtrahit*, "withdraws from a man
  some one grace out of those he previously had" — so the defect is typographic,
  not verbal. Rendered literally with the italic span kept over the same words:
  "withdraws one *Some grace from a man out of* those previously had." The
  English is deliberately awkward because the plate is. **Worth a human's eye** —
  this is the strongest candidate in the work for a TEI patch, if the plate turns
  out to print no italics here.
- **Col 1021D — `istae` for `iste`.** Feminine plural agreeing with masculine
  singular *Spiritus*. Pattern 9: Latin grammatical gender has no English
  exponent, so there is nothing to render either way. Logged so a later sweep
  does not churn it.
- **Col 1021B** — `ut nunquam omnino sicut nunquam abesse potest`. The
  *sicut*-clause has no second member; as printed it compares "never" to
  "never." Rendered as closely as the words allow: "so that never at all, just as
  never, can he be absent." Something like *ut nunquam adesse desinat sicut
  nunquam abesse potest* would complete the figure.
- **Col 1021B — comma displaced.** `Secundum hunc itaque, modum nusquam habet
  recedere`. The comma stands between *itaque* and *modum*, splitting the
  prepositional phrase. Pattern 8 preserves the mark; it is kept, placed after
  the corresponding English adverb ("In this manner therefore, he has nowhere to
  withdraw"), since a comma's position is bound to word order and the English
  does not follow the Latin's.
- **Col 1022B — `fundator` for `fundatur`, and `?` closing a statement.**
  `supra quae orbis ille terrarum, Domino operante, fundator, de quo et dicit?`
  *fundator* is a real word (the noun "founder") standing where the passive verb
  *fundatur* ("is founded") is required by *supra quae*; and the sentence, which
  introduces the Psalm quotation that follows, closes with a question mark where
  a colon belongs. Both rendered as printed: "above which that whole world, by
  the Lord's working, is founder, of which he also says?" Ps. 23:2 (*ipse super
  maria fundavit eum*), quoted in the next breath, confirms *fundatur*.
- **Col 1022C — `;` for `.`** `Qui enim Spiritum Christi non habet; hic non est
  ejus.` The semicolon breaks Rom. 8:9 where the plate's own sense wants nothing
  or a comma. Preserved (Pattern 8).
- **Col 1023B** — `qui vocat ad ea quae non sunt tanquam ea quae sunt`. Migne
  prints *vocat **ad** ea*; the Vulgate (Rom. 4:17) has *vocat ea quae non sunt*.
  Rendered with the printed preposition ("who calleth **unto** those things that
  are not"). Scripture policy: translate what Migne prints.
- **Col 1022D vs 1029A — `jam tertia` / `vix tertia`.** The Acts 2:15 allusion is
  quoted twice in this work with different adverbs (here *cum esset hora diei jam
  tertia*, at 1029A *vix tertia*). Both rendered as printed ("already" / "scarcely"),
  neither harmonized to the other.

## Chunk 0002

- **Col 1023C — `disceretur` for `diceretur`.** `Nunc scio quod timeas Deum pro
  eo quod disceretur scire feci.` Richard's point is a gloss on Gen. 22:12: God's
  *scio* is to be read as *scire feci*, "I made [thee] to know" — i.e. **for that
  which would be SAID** (*diceretur*), read this. *disceretur* ("would be
  learned") is a real word and is rendered as such ("in that what would be
  learned I have made known"), but it inverts the gloss, which is about the
  wording of the verse, not about learning. Note also *quod timeas* (subjunctive)
  where the Vulgate has *quod times*; English has no clean exponent after "I know
  that," so the indicative stands.
- **Col 1023C** — `*Nonne ecce omnes isti, … qui loquuntur Galilaei sunt.*` The
  quotation of Acts 2:7 closes with a full stop where the interrogative *Nonne*
  requires a question mark. Preserved (Pattern 8).
- **Col 1024B — `(Psal. CXVIII)` for Ps. 84:9.** The note on *Audiam quid loquatur
  in me Dominus Deus* cites Psalm 118; the verse is **Psalm 84:9**. Reproduced
  verbatim.
- **Col 1024B — comma splice preserved.** `…docet hominem scientiam, hanc
  internae aspirationis vocem propheta ambiebat…` The plate joins two independent
  sentences with a comma. Kept, rather than promoted to a period or semicolon,
  since either would be a supplied mark (Pattern 8). Reads as a splice in English
  because it is one in the Latin.
- **Col 1024C — `(Psal. XCIII)` for Ps. 118:103.** The note on *Quam dulcia
  faucibus meis eloquia tua* cites Psalm 93; the verse is **Psalm 118:103** — the
  psalm Migne had wrongly attached to the *previous* quotation a few lines above.
  The two citations appear to have been transposed. Reproduced verbatim; **worth a
  human's eye** at index time, since the pair is a clean transposition rather than
  two independent slips.
- **Col 1024C** — `Domine, quis similis erit tibi` (Ps. 82:2). Migne prints
  *Domine* where the Vulgate has *Deus*, and closes the clause with a semicolon.
  Both rendered/preserved as printed; note that the same verse's second vocative
  (*Deus*) is printed correctly at the end.
- **Col 1025D** — `Ex hac ergo homo accipit ut prosit, ex illis ut proficiat.`
  The two verbs appear to be the wrong way round: the immediately preceding
  antithesis is *infusio ad aedificationem sui, effusio ad aedificationem
  proximi*, so the singular (*hac*) should give profit to **oneself**
  (*proficiat*) and the plural the profit of **others** (*prosit*). Rendered as
  printed. Logged as a possible transposition, not emended.
- **Col 1026D — `in occasione gladii` for `in occisione gladii`.** Heb. 11:37
  reads *in occisione gladii mortui sunt*, "they were put to death by the
  slaying of the sword." *occasione* is a real word ("occasion, opportunity") and
  is rendered as such — "died in the occasion of the sword" — under Pattern 7 and
  its Pattern 12 boundary. The surrounding catalogue of martyrdoms leaves no doubt
  about the intended reading.
- **Col 1026D — `(Matth. XXI; Luc. IX)`.** The note on *Qui vult venire post me…*
  cites Matthew 21; the verse is **Matt. 16:24**. The Luke reference (9:23) is
  correct. Reproduced verbatim.

## Chunk 0003

- **Col 1028B — `quiae` (non-word), carried.** `…parva quaedam buccella esse
  videtur quiae in illud interioris hominis os injecta penitus implere non
  valet…` *quiae* is not a Latin word; it is *quae* with an intrusive *i*.
  Carried into the English untranslated, in italics, marked `[sic: *quiae*]`
  (Patterns 7 and 12). The whole broken form is one token, so nothing else is
  swept into the marker.
- **Col 1027D — `super me dulcis` for `super mel dulcis`.** Ecclus. 24:27 reads
  *spiritus meus super mel dulcis*, "my spirit is sweet above honey." Migne
  prints *me*, which is a real word and is therefore rendered ("above me is
  sweet") rather than carried. **The plate refutes itself six lines later**, at
  the same column, where Richard writes *quam sit suavis Spiritus ille super mel
  dulcis* — and the intervening honey imagery (*O cor felix, quod hoc melle
  repleris! … mel invenisti, comede quod satis est*) depends on *mel* throughout.
  This is the clearest case in the work of a defect that makes the English read
  strangely at exactly the point where the argument is plainest.
- **Col 1027A — `.` closing a question.** `Sed nunquid tolerantiam tribulationum
  … Deus ab homine exigeret si homo non peccasset.` *nunquid* opens a direct
  question and the next sentence answers it (*Omnino non exigeret*), but the plate
  closes with a full stop. Preserved (Pattern 8).

## Chunk 0004

- ~~**Cols 1031A → 1032A — column band skipped.**~~ **DO NOT FIX — false alarm,
  same do-not-reopen class as the 1018D entry above.** Bands 1031B–D are not
  "absent": Migne's A–D marks are positional quarter-guides transcribed where they
  appear, not four per column, so `1031A → 1032A` is simply the next mark in the
  next column. Nothing is missing and nothing is mislabelled. The reasoning
  recorded here was right about the *conclusion* — the text runs continuously
  mid-sentence across the join (*et hoc, [1032A] quod continet omnia*), no `[ed:]`
  is warranted, `colLast` is correctly 1032A — but the premise was the phantom-gap
  arithmetic. No plate check needed.
- **Col 1029C — `finxit` for `fixit`.** `Haec enim sola animum in intimis finxit,
  et per aliena desideria currere, et evagari non sinit.` *finxit* ("fashioned")
  is a real word and is rendered as such; but the whole surrounding argument is
  about *fixing* the mind — *in illius expertae suavitatis desiderio **figit***
  three lines later, *fixa permaneat* two lines above, *ita fuerit infixa* at
  1031A. *fixit* is near-certain.
- **Col 1031A — number disagreement.** `cujus omnia ex intimo praecordia … ita
  fuerit infixa` — neuter plural subject with singular verb and participle.
  Pattern 9: no English exponent for the mismatch. Logged so a later sweep does
  not churn it.
- **Col 1031A — `;` for `:` before a quotation.** `…profiteri audeat; quia
  Spiritus Domini est hoc quod continet omnia.` Preserved (Pattern 8).
- **Col 1029A** — `*Cibavit illos ex adipe frumenti, et de petra melle saturavit
  eos. [n: (Psal. LXXX)]*.` The plate sets a full stop **inside** the italic run
  before the note and another **after** the closing asterisk. Both preserved; the
  doubled stop is Migne's, not ours.
- **Col 1029A** — `Nescit omnino, nescit quae sit vera et plena refectio: quem
  non satiat…` Two colons in one sentence, and *quae*/*quem* shift referent
  mid-clause. Rendered as printed, colons kept.

## Conventions applied throughout

- **`orbis terrarum` → "the whole world."** The sermon's theme verse (Wisd. 1:7)
  recurs some fifteen times, and the argument at 1022B–C turns on identifying the
  *orbis terrarum* of Ps. 23:1 with the *orbis terrarum* of the theme verse, so
  the phrase is rendered identically in both places.
- **`vox` → "voice," `sermo` → "speech."** The whole central argument (1020A) is
  that Scripture says *scientiam vocis*, not *scientiam sermonis*, and that *vox*
  is the wider term — so the two are never allowed to collapse into "word."
- **`dulcedo` → "sweetness," `suavitas` → "pleasantness."** Richard pairs them
  contrastively (*cujus suavitas omnem suavitatem vincit, cujus dulcedo omnem
  dulcedinem excedit*, 1027C), so they are kept distinct.
- **Quotation marks.** Migne prints **no guillemets anywhere in this work** —
  scripture is marked by italics and everything else by nothing at all. Verified
  against the Latin twins: 0 « » in the Latin, 0 in the English. Every quotation
  mark in the English is therefore a straight `" "` we supply, per Pattern 6, and
  only where a bare unmarked quotation would be unreadable in English (the theme
  verse when embedded mid-sentence at 1019C, 1020C–D; *Dominus Jesus* at 1025A;
  *vox* / *Propheta* / *Apostolus* named as words at 1030C).
