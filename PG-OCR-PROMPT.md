# Canonical PG Greek OCR prompt (non-Calfa volumes)

Established 2026-08-04 from the Sonnet-vs-Opus pilot (`benchmark/pg88-pilot/`).
**Model policy: SONNET transcribes; OPUS adjudicates the disagreement list.**
Do not use Opus as the primary transcriber — the pilot showed it silently
conforms the printed text to the expected text.

---

You are performing OCR of ancient Greek from scanned page images. Transcribe as
accurately as you can. Do not consult any outside source.

**⛔ THE RULE THAT OVERRIDES EVERY OTHER INSTINCT: transcribe what is ON THE
PLATE, not what the text ought to say.**

- **The plate's reading stands even when it is wrong.** Migne misprints. Type
  breaks. If the page prints a form that is ungrammatical, misspelled, or not the
  form you expect, **copy it exactly**. A faithful transcription of an error is
  correct output; a silent correction is a defect, and it is invisible to every
  check downstream.
- **Never pull a footnote's correction into the text.** Migne often prints a
  damaged or erroneous word and corrects it in a footnote. The body text keeps
  the error; the footnote is separate. (Worked example: the plate prints
  `Γρηγορίας` with a broken Γ and footnotes the correction `Γρηγόριος`. The
  transcription must read `Γρηγορίας`.)
- **Scripture is copied as printed and NEVER completed from memory.** These
  authors quote loosely, from memory, and from Old Greek versions. Where the
  plate prints `ἔγγυται`, do not write `ἔγκειται` because Genesis has it. Where
  it prints `ἀποπέση μοι`, do not write `ἀποπέσοιμι` because the Psalm has it.
  **The divergence IS the scholarly payload.** If a quotation looks wrong, that
  is the most important thing on the page to get right.
- **Accents: copy the accent that is printed**, acute vs grave included. Do not
  apply the grave-before-following-word rule from your own knowledge of Greek —
  read the mark. ⚑ **Migne prints a GRAVE immediately before a comma**, contrary
  to strict modern practice, which keeps the acute there. Plate-verified in two
  volumes (`μοι κακὰ, ἀποπέση` in PG 88, `τὸν Θεὸν, ᾧ πρέπει` in PG 89). It is a
  convention of the edition, it is common, and correcting it to an acute is a
  defect — Batch 1's whole ~24-item accent disagreement class turned out to be
  this one thing.

**Layout rules**

1. Preserve line breaks as printed, and end-of-line hyphens exactly
   (`ἀποτα-` stays `ἀποτα-`).
2. SKIP the running head (column number + DOCTRINA …). Start at the first line
   of body text.
3. SKIP the footnote block at the foot of the column, and say that you did.
4. ⚠ **Migne's Latin sometimes bleeds into the Greek column** where he balances
   unequal column lengths — a line or two of Latin sitting mid-column, not in the
   footnote block. **Do NOT transcribe it. Exclude it and report where it
   occurred.** Latin inside a Greek source file is a serious defect.
5. Marginal capitals A/B/C/D are subdivision markers — record inline as `[A]`
   etc. at the point they occur. They sit in the GUTTER, between the columns,
   never in the outer margin, so they can be a little way off the text edge.
   ⚑ **A clipped one is a lost citation address and nothing downstream can
   detect it** — if a letter is cut by the edge of the crop, say so rather than
   guessing which it was. (Crops from `scripts/pg-leaf-crops.py` already run past
   the gutter floor to take them; check its contact sheet if one looks cut.)
6. Genuinely illegible → `⟨?⟩`. Never invent. Accuracy beats coverage.
7. Split each tall column image into 3–4 horizontal segments and read them
   separately. Reading a 4000 px image whole loses detail and mis-transcribes
   silently.

**κ vs χ is decidable by the baseline — decode it, do not infer it**

In this face **κ is a clean X sitting ON the baseline; χ is larger and its
lower-left arm DESCENDS below it.** Adjudication found both passes guessing this
pair from the expected word rather than reading it, and the baseline test
reversed the adjudicator's own eye twice (`κεχορεσμένου`, a real χ-for-κ
misprint, and `εὔκνιστοι`). Compare the disputed glyph against a known κ and a
known χ on the SAME line before deciding.

**Migne's own editorial marks are text — never tidy them away**

- **Square brackets in the Greek are his**: the plate prints `προ[σ]καλέσασθαι`
  and `μετὰ [τὸ] πληρῶσαι`. Reproduce them exactly where they occur. One pass
  stripped them, another moved them; both losses are invisible downstream.
- **Footnote references are sometimes ARABIC superscripts** (`11-12`, `13`, `14`),
  not Greek numerals. Copy the numeral system printed. One pass silently
  "restored" all three to Greek numerals — that is a conjecture about the
  edition, not a transcription of it.

**Two glyph pairs this fount confuses, and one codepoint rule**

- ⚑ **Word-final sigma `ς` can look like a semicolon, and a circumflex can look
  like an iota subscript.** Both misreadings produce well-formed Greek — Batch 2
  yielded `οὕτω` for `οὕτως` and `τῇ;` for `τῆς` — so nothing downstream catches
  them. Crops are now rendered at the scan's native **600 dpi** for this reason.
  Judge any word-final glyph at full magnification; zoom rather than guess.
- **Elision apostrophe: use `’` (U+2019).** `᾽` (U+1FBD), `’` and ASCII `'` are
  indistinguishable on the plate, so this is a normalisation, not a reading. It
  is fixed here only so it stops consuming adjudication — it was 18% of Batch 2's
  queue. Never treat an apostrophe difference as a plate question.

**Flag, don't fix.** If a reading looks wrong to you, transcribe it as printed
and add it to an `UNCERTAIN:` list at the end with the line and what you'd have
expected. That list is the Opus adjudication queue — it is the point of the
exercise, not an admission of failure.
