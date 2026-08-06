# Batch 2 — crop verdicts cross-checked against the full-page reads (2026-08-06)

The Batch 2 adjudication (`BATCH2-VERDICTS-845-854.md`, `-855-864.md`) was made
against the CROP passes A and B. Eight leaves were then re-read whole from
600 dpi full-page renders — 845, 846, 847, 849, 853, 856, 857, 861 — and the
verdicts were never re-applied to them. `next-session-resume.md` recorded the
expectation:

> The full-page read is the better witness and should win.

**That expectation is wrong.** Of the eight real disagreements, the full-page
read wins three and the crop adjudication wins four, with one unsettled. Neither
witness dominates, and they fail in *opposite* directions — which is the finding
that matters for the 87 Dorotheus leaves still to be harvested full-page.

## Method

76 verdicts parsed; 34 fall on the eight full-page leaves. Each verdict's winning
reading was searched for in the assembled leaf text: 19 agree, 6 are unchecked
(the winner is a one-character token with no literal reading to match), 9
disagree. All nine were then re-read at 600 dpi from
`raw/pg088/batch2-pages/segs/`, zoomed to the glyph where the type allowed it,
and checked against the facing Latin.

## Results

| # | leaf | crop verdict | full-page | **winner** | decided by |
|---|---|---|---|---|---|
| 1 | 845 | `Πάτρες` | `Πάτρις` | **full-page** | glyph: narrow vertical, no bowl or bar, against the rounded ε of `εἴπομεν` on the line below |
| 2 | 845 | `ἀροῦμεν` | `ἀφοῦμεν` | **full-page** | Latin *permittimus* = ἀφίημι, "we allow"; ἀροῦμεν would be "we take up" |
| 3 | 845 | `τοςᵃ` | `τος⁸` | **crop, in kind** | leaf846's footnote series runs `i j k l m n` — the markers are LETTERS. The full-page's digit `8` is wrong in kind. The letter itself is over-inked past legibility |
| 4 | 846 | `ἀτιμασθῇ` | `ἀτιμηθῇ` | **crop** | Latin *a quocunque spernatur* (passive) against *honoratus* = `τιμηθῇ` on the next line; two glyphs stand between μ and θ where `τιμηθῇ` has one |
| 5 | 847 | `κρα-` | `κα-` | **neither — not a disagreement** | the crop verdict is an editorial RECONSTRUCTION (ρ dropped from the forme); the full-page is the literal transcription. Both right at their own level — see below |
| 6 | 849 | `πληρώσω,` | `πληρῶσαι,` | **full-page** | two glyphs after σ, not one; and πρίν takes the aorist infinitive |
| 7 | 853 | `« Κῦρι` | `«Κύρι` | **unsettled** | accent only. The mark reads flat rather than slanted, which leans circumflex, but it is one small mark on over-inked type. **Both witnesses agree there is no final ε** — the substantive point is not in dispute |
| 8 | 853 | `σεαυτόν;` | `σαυτόν;` | **crop** | the ε is plainly present; the plate genuinely varies across the dialogue — `σαυτὸν` · `ἑαυτὸν` · `σεαυτόν` · `ἑαυτόν` |
| 9 | 853 | `Ἀββακοὺκ,` | `Ἀββακούμ,` | **crop** | final κ identical to the κ earlier in the same word; grave before the comma; Latin *Habacuc* |

**Applied to `raw/pg088/batch2-assembled/`:** #4 `ἀτιμηθῇ`→`ἀτιμασθῇ`, #8
`σαυτόν;`→`σεαυτόν;`, #9 `Ἀββακούμ,`→`Ἀββακοὺκ,`. #1, #2 and #6 already stood
correct in the assembled text. #3, #5 and #7 are recorded as cruces below.

## ⚑ The two witnesses fail in OPPOSITE directions

This is the transferable finding, and it is worth more than any of the nine.

- **The full-page read NORMALIZES.** Every one of its four losses is a smoothing:
  `σαυτόν` for the plate's `σεαυτόν` (conformed to the same phrase eight lines
  above), `Ἀββακούμ` for the rarer `Ἀββακοὺκ` (conformed to the LXX form),
  `ἀτιμηθῇ` for `ἀτιμασθῇ` (conformed to the `τιμηθῇ` it is paired with), and a
  footnote letter read as a digit. **A transcriber following the text across a
  whole page is reading for SENSE, and sense is exactly what smooths a variant
  away.** This is the same failure the pilot measured when it ruled Opus out as
  primary transcriber — "silently conforms the plate to the expected text" — and
  it is not cured by rendering the whole page. It is *caused* by continuity.
- **The crop read INVENTS AT EDGES and mis-sees isolated glyphs**: `Πάτρες`,
  `ἀροῦμεν`, `πληρώσω`. It cannot compare a doubtful letter against the same
  letter elsewhere on the page, because it cannot see the page.

So the full-page pass is the better instrument for **recovering lost text** —
which is what it was adopted for, and it recovered 149 words — and the WORSE
instrument for **settling a contested glyph**. Those are different jobs.

## ⚑ The facing Latin decided three of the four hardest calls

*permittimus* (#2), *spernatur* (#4), *Habacuc* (#9). In each the Greek glyph
alone was arguable and the Latin was not.

⚠ This does NOT license reading the Latin as Migne's Greek — the standing rule
still holds. It licenses using the Latin to CHOOSE BETWEEN two readings both of
which are on the plate. Consulting it costs nothing, and Batch 2's adjudication
already used it where the crops were doubtful. **Put it in the Dorotheus
adjudication prompt as a required step, not an optional one.**

## Cruces arising

- **col 1631 `Πάτρις`** (leaf845 line 1, `Οἱ Πάτρις ἡμῶν`) — the plate prints
  `Πάτρις` for `Πατέρες`. Not a broken sort: the same shortened form recurs on
  1636 and 1650 while `πατέρας` is set in full on the 1632 full-width line. The
  earlier verdict recorded this crux with the wrong fifth letter (`Πάτρες`);
  **the letter is ι, and the crux stands.** Latin: *majores nostri*.
- **col 1632 footnote marker after `σώμα-/τος`** — a LETTER, not the digit `8`
  the assembled text carries. The plate's own note reads `Leg. σχήματος.`, i.e.
  Migne flags that the printed `σώματος` should be `σχήματος`. Transcribe as
  printed and keep the note; the marker's exact letter is illegible in this scan.
- **col 1636 `κα-`** (leaf847) — the plate shows `τὸ κ`, a letter-width gap
  holding one ink speck, then `α-`. The ρ failed to print. **The transcript keeps
  the literal `κα-`; `κρα-` is the reconstruction and belongs in the apparatus,
  not silently in the text.** Continuation `τῆσαι` and the Latin *dum
  obedientiam amplectitur* give κρατῆσαι.
- **col 1647 `Κ?ρι`** (leaf853) — vocative with no final ε where `Κύριε` is
  expected. Both witnesses agree on the missing ε; the accent (acute or
  circumflex) is unsettled and does not affect the crux.

## Left unchecked

Six verdicts on the eight leaves whose winner is a one-character token (`ς`, `ῇ`,
`,` and the like) have no literal reading to search for. They are spacing and
punctuation calls, all of the leaf848 guillemet class — content-identical either
way — and are not worth a plate read.

The eleven leaves that did NOT come from full-page renders (848, 850, 851, 852,
854, 855, 858, 859, 860, 862, 863, 864) keep their crop-adjudicated verdicts
unchanged; there is no second witness for them and none is owed.
