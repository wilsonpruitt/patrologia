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

**⚑ FULL-PAGE IMAGES (from 2026-08-05). You see the WHOLE page, both columns.**

Harvesting no longer crops to the Greek column. You are given the entire leaf,
so **you** must do what the crop used to attempt — and do it better, because the
crop failed at it three times in one batch and every failure was invisible:

1. **Follow the Greek column.** One side of the page is Greek, the other Migne's
   Latin translation. Transcribe the Greek side only, top to bottom.
2. **A line that escapes the column is still Greek — read it whole.** Migne sets
   some lines wider than the column measure, and where a paragraph's Greek
   outruns its Latin he ends the Latin and runs the Greek **across the entire
   page**. Read such a line from its true first letter to its last, straight
   across the gutter. Do not stop at the column edge, and do not treat the far
   part as a separate line.
   Lines of this kind were repeatedly cut by column crops, and the surviving half
   still read as fluent Greek — which is exactly why no check downstream caught it.

   ⛔ **Do NOT quote a recovered reading into this prompt as a "worked example."**
   An earlier version of it did, naming three lines verbatim; the transcriber then
   reported those lines back and cited the match as confirming its reading. That
   is circular — the prompt supplied the answer — and it is 7a″ wearing the
   costume of a helpful illustration. Describe the SHAPE of the defect, never its
   text. If an example is unavoidable, take it from a different work.
3. **The mirror happens too:** where the Greek finishes early, the **Latin** runs
   full width. That is not Greek; exclude it and report it, as with any Latin.
4. **Segments overlap deliberately**, so a line is never cut in half between two
   images. The same line may appear at the bottom of one and the top of the next
   — transcribe it once, and say if you think you have seen it twice.

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

## Adjudication: the two witnesses fail in OPPOSITE directions (2026-08-06)

Measured on Batch 2's nine crop-vs-full-page disagreements
(`benchmark/pg88-pilot/BATCH2-CROSSCHECK.md`): full-page won 3, the crop
adjudication won 4, one unsettled. **Do not assume the full-page read wins.**

- **A full-page read NORMALIZES.** All four of its losses were smoothings — a
  form conformed to the same phrase eight lines above, a proper name conformed to
  its LXX spelling, a verb conformed to the one it is paired with, a footnote
  LETTER read as a digit. A transcriber following the text across a whole page is
  reading for sense, and sense is what smooths a variant away. This is the same
  failure the pilot measured when it ruled Opus out as primary transcriber, and
  **rendering the whole page does not cure it — continuity causes it.**
- **A crop read INVENTS AT EDGES and mis-sees isolated glyphs**, because it
  cannot compare a doubtful letter against the same letter elsewhere on the page.

So: full-page is the better instrument for RECOVERING LOST TEXT (it recovered 149
words Batch 2's crops had lost) and the worse one for SETTLING A CONTESTED GLYPH.
Different jobs. When a reading is contested, go back to the page and compare the
doubtful letter against the same letter elsewhere in the same fount, at zoom.

**⛔ REQUIRED, not optional: consult the facing LATIN on every contested reading.**
It decided three of Batch 2's four hardest calls — *permittimus* (ἀφοῦμεν, not
ἀροῦμεν), *spernatur* (ἀτιμασθῇ, not ἀτιμηθῇ), *Habacuc* (Ἀββακοὺκ, not
Ἀββακούμ) — where the Greek glyph alone was arguable every time. This does NOT
license reading the Latin as Migne's Greek; the standing rule holds. It licenses
using the Latin to CHOOSE BETWEEN two readings both of which are on the plate.

⚠ **A reconstruction is not a transcription.** Where a letter failed to print,
the transcript keeps what the plate shows (`κα-`) and the reconstruction
(`κρα-`) goes in the apparatus. Batch 2 recorded one as though it were the
reading.

⚠ **Footnote markers in PG 88 are LETTERS, not digits** (leaf846's series runs
`i j k l m n`). A superscript read as `8` is a misread `a`.

## Two artifact classes that reach the GREEK file and look like text (2026-08-06)

Both found auditing Batch 2's band coverage; both would have survived to chunking.

1. **The band letter absorbed into the text.** Migne's marginal A/B/C/D sits in
   the gutter, and a Latin capital `A` in this fount is a Greek capital `Λ`.
   Batch 2's leaf849 opens `Λ μου, ἐξελοῦ με` — that `Λ` is the band letter, read
   as a letter of the text. **A line opening with a bare capital + space is the
   tell.** Three more leaves (847, 850, 852) dropped their `A` entirely; all four
   print it on the plate.
2. **The source edition's pagination, which Migne sets in BOLD inside the LATIN
   column.** Batch 2's leaf847 was transcribed `[381] ρις τοῦ Θεοῦ`; the plate
   reads Latin *…est,* · bold **381** · gutter band letter **A** · Greek *ρις τοῦ
   Θε…*. The number belongs to the Latin. Worse, written in brackets it **parses
   as a column anchor** — and PG 88's columns run 1611–1844, so a stray `[381]`
   would corrupt the anchor stream silently. Same series seen as a bold `386`
   opening the Latin on leaf853, and as `1022`/`1023` on PG 89.

⛔ **Grep every finished leaf for `^[A-DΑΒΓΔΛ] ` and for `\[[0-9]{3,5}\]` before
it is called done.** Both are one-line checks and both classes read as ordinary
text otherwise.

## ⛔ Count the leaves you got against the leaves you asked for

Batch 1 was recorded as "**8 columns, leaves 836–844**". That range is **NINE**
leaves. The count and the range contradicted each other, and the contradiction is
exactly where a dropped leaf hid: **leaf838 was cropped** (`batch1/
leaf838_p839_left.png` exists) **and then never segmented and never transcribed** —
it is the only leaf in the batch with no `_seg*.png` files and no `.txt`. Col 1617
of Dorotheus has never been read. Nobody noticed for the life of the batch.

This is the warning already in this repo — *"a scan that skips a leaf looks
exactly like a clean one"* — realised a second time, and it got through because
the batch's own summary line carried the wrong number and was trusted. **Assert
the count against the range, in the file, every batch.**
