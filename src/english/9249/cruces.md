# Cruces — 9249, *Quae exsequi debeat episcopus* (Hincmar of Reims)

## Typographical corruption

- **col 1087D** — printed *Sed anto gravius est pondus sacerdotum quam regum,
  quanto…* — *anto* is a misprint for *tanto*, required by the answering *quanto*.
  Rendered "by so much … as."
- **col 1091C** — printed *Si quis vero regum, sacerdotum, et judicium, atque
  saecularium personarum* — *judicium* for the genitive plural *judicum*
  ("of judges"), which the surrounding genitives require. Rendered "of judges."
- **col 1092A** — printed *magna parvare persona* — corrupt; intended
  *magna parvave persona*, "a great or a small person." Rendered so.

## Migne's citations reproduced verbatim despite misattribution

- **col 1092C** — *Qui perseveraverit usque in finem hic salvus erit* is tagged
  `[n: (Matth. XVIII, 22)]`. The verse is Matt. 10:22 / 24:13; XVIII, 22 is the
  seventy-times-seven logion. Note reproduced verbatim per the marker rule — the
  error is Migne's (or Hincmar's), not introduced here.
- **col 1091D** — `[n: (Nicolaus Odon. episc. )]` carries a stray space before the
  closing paren. Reproduced byte-for-byte.

## Structural / editorial notes for a human read-through

- **cols 1088B–1088C** — the quotation attributed to Urban (`[n: (Urban. epist. 1)]`)
  opens with « and then, without closing, absorbs the Charles-and-Louis capitulary
  (`[n: (cap. 83)]`) before finally closing at *…patiatur. »*. The guillemets are
  therefore mismatched in Migne: one opening mark serves two distinct documents.
  Reproduced exactly as printed. A human should decide whether a closing » belongs
  after *in die Domini* and a fresh « before *Quia, inquiunt*.
- **cols 1088B and 1089A** — the same Urban passage (*Res et facultates
  ecclesiasticae oblationes appellantur…*) is printed twice, first embedded in the
  passage above and then again under its own attribution *Item sanctus Urbanus
  papa et martyr.* Both are rendered in full; the duplication is Hincmar's
  florilegium method, not a transcription slip.
- **cols 1088C and 1091A** — likewise the capitulary *Quia juxta sanctorum Patrum
  traditionem novimus…* is printed twice, with one substantive variant:
  *de non dividendis rebus **Ecclesiae*** at 1088C against *de non dividendis rebus
  **illius*** at 1091A. Both rendered as printed ("the Church's goods" / "its
  goods").
- **col 1090D** — Hincmar says the two chapters stand in Ansegisus' first book as
  *septuagesimo septimo et septuagesimo octavo* (77 and 78), but the notes attached
  to the text itself read `[n: (lib. I, c. 83)]` and `[n: (cap. 84.)]`. The
  discrepancy between the prose numbering and the marginal numbering is in Migne;
  both reproduced as printed.
- **cols 1093A → 1094A** — the column sequence jumps from 1093A straight to 1094A,
  with no 1093B–D. Reproduced as printed; this reflects Migne's plate, not a
  dropped passage.

## Vocabulary decisions (not cruces, recorded for consistency)

- *parochia* rendered "diocese" of the bishop's own see (*populo suae parochiae*,
  *in sua parochia*), but "parish" in *ecclesiarum rusticanarum parochiarum*
  ("the churches of the country parishes") — Hincmar uses the word in both senses
  within two sentences.
- *tractoria*, *sartatecta*, *matricularii* kept as italic Latin per the
  institution-word rule; no clean English equivalent.
- *consignatio* / *consignati in frontibus* rendered "confirming" / "signed on
  their foreheads" — the sacrament of confirmation, but the physical sense is
  load-bearing in the sentence about the bishop's circuit.
- *chorepiscopi* rendered "chorbishops."

<!-- corpus-polarity-sweep 2026-07-28 -->
## Corpus polarity sweep — 2026-07-28

Blind Opus read of the Latin/English pair for sense-reversing defects (one word or
one letter asserting the opposite of what the context requires). 1 site(s).
Migne's defects are recorded here and rendered literally in the English; our own
errors were fixed in place. Full context: `data/sweeps/corpus-polarity/REPORT.md`.

### 1088C — added-negative (migne, medium confidence)

Printed: *Tamen ut ab ecclesiasticis de non dividendis rebus Ecclesiae suspicionem dudum conceptam penitus amoveremus, statuimus ut neque nostris, neque filiorum et Deo dispensante successorum nostrorum temporibus, qui nostram vel progenitorum nostrorum voluntatem, vel exemplum imitari voluerint, ullam penitus divisionem aut jacturam patiatur.*

Conjecture: **de dividendis rebus Ecclesiae suspicionem dudum conceptam — the suspicion the clergy had conceived was of the DIVISION of church property; the intrusive 'non' (assimilated from the chapter rubric 'de non dividendis rebus ecclesiasticis', printed twice at 1090D) makes the emperors say the clergy suspected them of NOT dividing it.**

The remedy decreed in the same sentence is precisely non-division: 'statuimus ut ... ullam penitus divisionem aut jacturam patiatur' ('we have decreed that ... shall it suffer any division or loss whatsoever'), and the preceding clause promises increase, not loss: 'cuique non solum habita conservare, verum etiam multa, Deo opitulante, conferre optamus'. A guarantee of non-division can only REMOVE a suspicion of division; as printed, the decree confirms the very suspicion it claims to dispel. The same clause recurs at 1091A ('de non dividendis rebus illius'), where the English again reproduces the printed negative ('concerning the non-division of its goods') rather than repairing it.

