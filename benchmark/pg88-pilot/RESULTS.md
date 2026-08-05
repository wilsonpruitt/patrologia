# Sonnet vs Opus — Greek OCR pilot on PG 88 (Dorotheus), 2026-08-04

Two columns of Migne PG 88 rendered at 400 dpi from copy A, cropped to the Greek
half, transcribed independently by **Opus** (inline, 4 segments per column) and
**Sonnet** (subagent, same instructions, same images, same segmentation rule).

| | col 1621 | col 1709 |
|---|---|---|
| Opus tokens | 414 | 437 |
| Sonnet tokens | 415 | 440 |
| token agreement | **95.9%** | **95.2%** |

Agreement is high. **The disagreements are what matter, and they are not
symmetrical.**

## ⛔ THE HEADLINE: Opus silently conformed the printed text to the expected text

Three substantive disagreements were checked **against the plate at 400 dpi**
(`raw/pg088/disputed.png`). **Sonnet was right on all three. Opus was wrong on
all three, and every error is the same class.**

| plate actually prints | Opus wrote | Sonnet wrote | |
|---|---|---|---|
| `Γρηγορίας` (broken Γ; Migne's own footnote *corrects* it to Γρηγόριος) | `Γρηγόριος` | `Ι ρηγορίας` | **Opus adopted the footnote's correction into the text** |
| `ἔγγυται` | `ἔγκειται` | `ἔγγυται` | **Opus conformed to the LXX form** (Gen 8:21) |
| `ἀποπέση μοι` (twice) | `ἀποπέσοιμι` | `ἀποπέσῃ μοι` | **Opus conformed to the LXX form** (Ps 7:5) |

Also plate-checked: the printed `κακὰ` carries a **grave**; Opus wrote `κακά`.

This is **exactly the failure mode `translation-style.md` Pattern 7 and 7a″ were
written to prevent** — "the familiar English of a known verse arriving before the
printed Latin is read" — except here it happens one layer earlier, in the
*transcription* rather than the translation. **A model that knows the text well
normalises toward what it knows.** Sonnet, knowing it less well, copied what it
saw.

⚑ **This inverts the assumption behind the Antiochus pilot.** There, Opus's
transcription was corroborated at 96.8% against an independent witness and I
reported "no divergent reading on our side." That claim was about *agreement with
another OCR*, which cannot detect conformation-to-expectation — **both a smart OCR
and a scholar's expectation drift the same way.** Antiochus's Greek should be
re-checked for this class specifically before it is treated as settled.

## Where Opus was right

Not a clean sweep for Sonnet:

- `Ἄλλα γάρ εἰσι τὰ πάθη` (Opus) vs `Ἀλλὰ γάρ` (Sonnet) — the passage contrasts
  passions with sins; the neuter plural `Ἄλλα` is required. Sonnet's reading is
  contextually impossible.
- `ὑποχειρίους` (Opus) vs `ὑπόχειρίους` (Sonnet) — Sonnet produced a double
  accent, which is not possible Greek.
- ⚠ **Sonnet ingested Latin into the Greek.** It included the interlineated Latin
  couplet *facis ut qui ligna in ignem congerit…* as body text, and said so in its
  notes. Opus excluded it. **Latin contamination in a Greek source file is worse
  than an accent error** — it is text that does not belong to the work.

## Accent class — unresolved, leaning Sonnet

~12 tokens per column differ only as acute vs grave (`θυμός`/`θυμὸς`,
`ἑαυτόν`/`ἑαυτὸν`, …). The one instance plate-checked (`κακὰ`) went to Sonnet.
This is ~24 tokens across two columns and has **not** been fully adjudicated;
it needs a dedicated pass before either model is trusted on accentuation.

## Reading for the remaining ~138 columns

Neither model is safe alone, and the reasons differ:

- **Opus** transcribes fluently and gets syntax and context right, but **edits
  toward the received text** — the single most damaging error class for this
  project, because it is invisible downstream and destroys the exact scholarly
  payload (variants, plate errors, Migne's own corrections) the corpus exists to
  preserve.
- **Sonnet** copies more literally — which is what OCR should do — but produces
  impossible forms and pulled Latin into the Greek.

**Recommendation: Sonnet transcribes, Opus adjudicates.** Sonnet's literalism is
the right default for the source layer; Opus's contextual judgement is the right
tool for a review pass over the disagreements, which at ~4–5% of tokens is a
small, cheap list. Run both only where the text is decisive (as here); elsewhere
Sonnet + copy B + the disagreement list.

⚑ **And amend the OCR prompt for BOTH models:** an explicit instruction that the
plate's reading stands even when it is wrong, that Migne's footnote corrections
must never be pulled into the text, and that a scriptural quotation is to be
copied as printed and never completed from memory. Opus's three errors would very
likely all have been prevented by that sentence.
