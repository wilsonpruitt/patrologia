# TRANSLATOR CARD — one chunk of Dorotheus of Gaza, *Doctrinae* (PG 88), from the PLATE-CHECKED Greek

Adapted from the Doctrina I pilot card (2026-10-27). **The Greek you are given has been read against Migne's plate
line by line** (a blind vision read, then an every-line check, with Kraken OCR as a checklist). It is a faithful
diplomatic transcription: **it keeps Migne's own misprints on purpose.** So your two jobs are:
**translate**, and **report every place the Greek cannot be what Dorotheus meant**: Migne's misprints, a lost
word, a transcription slip the check missed, and the check's open doubts listed under each page.
Your report rows are checked against the page images afterwards; never change the Greek yourself.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/dorotheus-doctrinae/<id>.en.md` in **one** Write
   (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work

Dorotheus of Gaza (6th c.), disciple of Barsanuphius and John at the monastery of Abba Seridos near Gaza, later
abbot of his own community. The *Instructions* (Διδασκαλίαι ψυχωφελεῖς) are talks to his monks: plain, homely,
oral, full of sayings of the Fathers, anecdotes (Dositheus, the elders), and Scripture quoted from memory. Migne's
Latin preface says he chose "humble and pedestrian speech" on purpose: keep the English plain and spoken, never
ornamental. Doctrina I is *On renunciation* (Περὶ ἀποταγῆς).

Our shipped English of his *Letters* (same author, same plate) set these, and they hold here:
- **Second person is a number marker** (house rule): *thou/thee/thy* for a singular addressee (σύ), *you* for a
  plural one (ὑμεῖς: Dorotheus talking to his brethren). Never *thou* for reverence alone.
- **τέκνον = "child"**, ἀδελφοί = "brethren", ἀββᾶς = "abba" (lower case before a name: "abba Poemen").
- **Scripture: translate the Greek as printed**, however loose; a familiar verse may echo traditional English
  where the Greek matches it. Never substitute a standard version.
- Names: established English forms (Abraham, Moses); monastic names as printed (Dositheus, Seridos, Poemen).
- Particles by weight, not by formula: γάρ "for", οὖν "so / therefore", λοιπόν "then / so then" (Dorotheus' tic:
  keep it light, never "for the rest"), μὲν… δέ only where the contrast is real.

## The scaffold

Each page block gives the Greek column's lines (band letters already placed as `[b: X]` at line starts), tagged `pNNNN.LL` (page file + line), then the facing **Latin
column** of the same page (archive.org OCR of Migne's own Latin translation). The Latin is a **witness to the
sense, never a source**: Migne's translator paraphrases, and his OCR is noisy. Its whole page is shown, so it can
start earlier or run later than your Greek lines; at a work division it can include matter with no Greek at all
(Migne marks it *Sequentia non habentur in Graeco*: ignore that).
A word broken across a line end is hyphenated (`κε-` / `κοσμημένον`); join it in your head, and never report a
correct hyphenation.

## Your English file, exactly this shape

    title: Instruction I, On renunciation (part 1)
    ---
    [1617] TEACHING OF OUR HOLY FATHER ABBA DOROTHEUS …

    1. In the beginning, when God made man, [b: B] he set him in paradise …[^1]
    …
    ## Notes
    [^1]: …
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0839.11 | κθὼς | καθὼς | high | ocr | dropped α |

- **Column anchors:** `[1617]` (the Greek column number from the page header) at the start of the chunk, and at the
  point where each new page's Greek begins.
- **Band letters:** a line that begins `[b: X]` stands beside Migne's marginal letter. Put `[b: X]` in the English
  at the point that line's text falls. Every one in your Greek must appear once in your English.
- **Section numbers** (Αʹ, Βʹ … at the head of a paragraph) become arabic `1.`, `2.` … starting a paragraph; each
  Instruction restarts at 1. **Instruction headings** (ΔΙΔΑΣΚΑΛΙΑ Βʹ. Περὶ ταπεινοφροσύνης.) become
  `**Instruction II.** *On humility.*` on their own line. A chunk may open mid-Instruction: then begin with the
  column anchor and the text.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds:
  T (textual: what you read and why), S (source: scripture or saying located). Keep them short. No note for an
  ordinary OCR fix you logged in the table: the table is the record.
- Paragraphs follow the Greek's sense units (section numbers start new ones). Every clause rendered; nothing summarized.

## The OCR table (now a table of readings to verify)

One row per spot, in text order: `| tag | printed | reading | sure | kind | why |`

- **printed** = the token(s) exactly as in your scaffold; **reading** = what you translated (or `?`); **sure** =
  `high` / `medium` / `low`.
- **kind**:
  - `print` you believe Migne's plate really prints this, and it is a misprint (the English follows your
    reading, with a T note giving the printed form);
  - `ocr` you believe the transcription slipped (the plate must read otherwise);
  - `lacuna` a word or phrase is missing (English `[?]` or a supplied word in ⟨ ⟩, plus a T note);
  - `doubt` one of the check's open doubts listed under the page, or anything wrong you cannot classify.
    Settle every listed doubt where the English depends on it; a doubt that changes nothing gets one row with
    why = "no effect on the English".
- **When unsure between `print` and `ocr`, say `print`** and give your reason: the image check sorts them.
- ⛔ Not a row: accents, breathings, punctuation and spellings that do not affect the sense (the check settled
  them, and Byzantine spellings are real). Not a row: a loose Scripture quotation (translate it as printed).
- **Use the Latin as your best detector.** Where Greek and Latin disagree on a word, a name, a number or a
  negative, look hard: Migne's Latin translator often silently corrects a misprint, and his footnotes (in the
  Latin witness) sometimes give the right Greek.
- Expect a few rows per 1,000 Greek words, mostly the listed doubts; there is no target.

## Report (your final message, short)

Per chunk: Greek words, English words, rows (by kind), the three spots you are least sure of, any glossary
term you had to decide (Greek → English, one line each).
