# TRANSLATOR CARD — one chunk of Maximus the Confessor, *Capita alia* (PG 90.1401–1462)

Adapted 2026-11-21 from `translate/maximus-theopemptus/CARD.md` (Ps 59 → Mystagogia lineage) (Opus coordinator; same author, same method, PG 90 instead of 91).
**The Greek you are given is a machine reading** of Migne's plate (Kraken, a fine-tuned polytonic OCR model), passed once through
a rule script that fixes the commonest accent, breathing and elision slips (`scripts/kt-rules.py`). Nobody has checked it against
the page. So you have two jobs, equally weighted: **translate**, and **report every place the Greek you were given is not what the
plate must say.** Your reports are what we check against the page images; they replace a separate reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary, the style anchor and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/maximus-capita-alia/<id>.en.md` in **one** Write (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work — *Capita alia* ("Other Chapters"), 243 short chapters, from a Vatican codex

Migne's heading: «ΕΤΕΡΑ ΚΕΦΑΛΑΙΑ ΤΟΥ ΟΣΙΟΥ ΠΑΤΡΟΣ ΗΜΩΝ ΜΑΞΙΜΟΥ» (Latin «CAPITA ALIA SANCTI PATRIS NOSTRI MAXIMI»; running head «ALIA EX VATIC.
CAPITA»). First a heading «ΣΤΙΧΟΙ» and **three iambic lines** (a scribe's or compiler's dedication: «Πηγὴν νάουσαν ἠθικῶν δρόσον λόγων, / Ἐνταῦθ᾿ ἐφεύρεις …,
/ Ὁμολογητοῦ Μαξίμου πόνους, φίλε.»); then **243 numbered chapters** (αʹ … σμγʹ), each a short ascetic, moral or contemplative saying: practice and
contemplation, the passions and the virtues, temptations voluntary and involuntary, the soul and the mind, Scripture read anagogically (many chapters
take a scriptural image — a lamp, a sword, a vineyard, a woman, a fire — and read it of the soul). The last chapter ends with «Ἀμήν» (col. 1461).
Several chapters are known elsewhere (the collection overlaps Maximus's other centuries and later florilegia): **not your concern; translate what
Migne prints.** No addressee except the «friend» of the verses (*thou*); a «thou» inside a chapter (a general second person) is *thou* by the
house number rule.

**What is NOT the work.** p-0744 after «Ἀμήν» (line 11) begins another piece («ΤΟΥ ΑΓΙΟΥ ΜΑΞΙΜΟΥ / Ἐκ τῶν ξγʹ ἀπόρων …»): not yours.
Migne prints **Greek scholia at the foot of some pages** (short Greek glosses keyed to a word: «Νεκροὶ ἐκ ζώντων», «Μετὰ τοῦ πνεύματος ἡγεμονικοῦ»,
«Εἴσω τῶν ὁρωμένων», «Ὁ φιλοκάλῳ πάθει» …): they are apparatus, read separately; if a scholion line has leaked into your Greek, it is kind `stray`
(and say so in `why`: «foot scholion»).

## Headings and chapters — the house shape
- `OTHER CHAPTERS` on its own line, *Of our holy father Maximus.* in italics above it; the Latin heading lines are not yours.
- Then the line `VERSES` and the three iambic lines, **lineated one for one** (translation-style.md "Greek verse" V1–V5: one English line per Greek
  line, no metre, no rhyme, each line capitalised; read V1–V5 in the style file only if your brief does not quote them: the rules above are the gist).
  «φίλε» = *friend*, singular: *thou*. T note on the verses: they are the collection's dedicatory lines, not a chapter.
- **Each chapter is its own paragraph, beginning with its number in arabic figures and a full stop**: `57. The soul …`. Take the number from the Greek
  numeral; where Kraken has mangled or lost a numeral, number by the sequence and log the numeral as kind `heading`. **Report any break in the
  sequence** (a skipped or repeated number on the plate is Migne's, and it matters): kind `heading`, `why` = "sequence: …".
- Scripture quoted verbatim: italics + S note; an allusion: S note «cf. …». Many chapters quote; give the locator every time (LXX numbering for the
  Psalms, with the Hebrew in brackets).

## Terms (read `GLOSSARY.md`; these bind first)
- **πρακτική / πρακτικόν** practice / the practical (part); **θεωρία / θεωρητικόν** contemplation / the contemplative (part); **γνῶσις** knowledge;
  **ἀρετή** virtue; **κακία** vice (wickedness where it is a person's); **πάθος** passion; **ἀπάθεια** passionlessness; **ἡδονή** pleasure;
  **ὀδύνη** pain; **πειρασμός** temptation (the voluntary/involuntary pair: ἑκούσιος voluntary, ἀκούσιος involuntary, kept every time);
  **κακοπάθεια** hardship; **ἐγκράτεια** self-control; **σωφροσύνη** temperance; **ἀνδρεία** courage; **φρόνησις** prudence; **δικαιοσύνη** justice.
- **νοῦς** mind; **λόγος** reason / word / principle by sense (T note on a non-obvious choice); **Λόγος** the Word; **λογισμός** thought (the ascetic
  sense: the passionate or vain thought); **ἔννοια** notion; **νόημα** concept; **διάνοια** understanding; **ψυχή** soul; **θυμός** anger
  (incensive power where it is the faculty: T note once); **ἐπιθυμία** desire; **ἔφεσις** longing (kept apart from ἐπιθυμία); **γνώμη** inclination;
  **προαίρεσις** choice; **φρόνημα τῆς σαρκός** the mind of the flesh.
- **νοητός** intelligible, **αἰσθητός** sensible, **νοερός** noetic; **θέωσις** deification; **χάρις** grace; **ἀγάπη** love.

## Migne's inline apparatus (new in this work; read carefully)
The Greek may carry the editor's own bracketed readings inside the text (`[…]`, `[Fr. …]`, `[erat …]`, as in Ps 59). **These are the edition's apparatus, not OCR damage and not the author.** Keep them
out of the English running text: translate the main reading, and put the bracket in a **T note** ("Migne prints [Fr. X] after Y: …"). In the OCR table report them only if Kraken has garbled the bracket itself. Do NOT name the editor (the facing Latin's author and
the sigla are not yet identified; say "Migne prints", "the edition marked Fr.", "the facing Latin").

**Note calls** are printed inside the Greek as `(a)`, `(b)` … and `(1)`, `(2)` …, sometimes read as superscript digits: **do not
reproduce them**; the foot-of-page apparatus is read separately. A leftover is kind `stray`. **Running heads** (`S. MAXIMI CONFESSORIS`,
`ALIA EX VATIC. CAPITA`, often garbled into Greek letters like «ΑΙΙΑ ΕΧ ΝΑΤΙΣ. ΣΑΡΙΤΑ»), column numbers and Latin lines leaked into the
Greek are kind `stray`. **Band letters** (Migne's A/B/C/D in the gutter, e.g. a lone `Β` at a line start) are not yours: kind `stray`,
the build places them. Do not write `[b: X]`.

## The scaffold
Each page block gives the Greek column's lines, tagged `pNNNN.LL` (page file + line in the Kraken text), then the facing **Latin
column** of the same page (archive.org OCR of the facing Latin, noisy). The Latin's whole page is shown, so it can start earlier or run
later than your Greek lines. **Take the Greek column number from the scaffold's page header every time** (in this stretch of the volume the Greek
stands LEFT on even pdf pages, RIGHT on odd: trust the header, not a rule). A word broken across a line end is hyphenated
(`πο-` / `θεῖ`); join it in your head, and never report a correct hyphenation.

**Open doubts.** (No second digital witness exists for this work: your OCR table is the only check before the plate. Read every line, accents included.) Where a scaffold lists words where a second digital witness (the myriobiblos text, monotonic,
itself 1–2 defects per 100 words) reads other letters than the Kraken ("myriobiblos reads X"). **Read every one.** The witness is a
pointer, never an authority: it eye-skips and modernizes. Where the choice changes the English, decide from the sense and the Latin,
use your choice, and log it as a row of kind `doubt` (printed = the kept form, reading = the form you used, why = "plate doubt: …");
where it changes nothing in the English (a breathing, an accent, κ/χ where both construe), ignore it — do not log. (But a plain
Kraken misread that the witness happens to expose IS an `ocr` row: the table is the list of what the plate must say.)

## Your English file, exactly this shape

    title: Other Chapters, 1
    ---
    [1401] *Of our holy father Maximus.*

    OTHER CHAPTERS

    VERSES

    A spring flowing with the dew of ethical words
    …

    1. Whoever is a Christian …[^1]

    2. …

    ## Notes
    [^1]: S. …
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|

- **`title:`** = `Other Chapters, N`, N = the chunk's number (ca-003 → `Other Chapters, 3`). Only ca-001 carries the heading and the verses.
- **A chunk starts and ends at page ends, so it may begin or end in the middle of a chapter.** Start with the column anchor and the continuation (no
  number); end mid-sentence if the Greek does. The next brief picks it up.
- **Column anchors:** `[856]` (the Greek column number from the scaffold's page header) at the start of the chunk, and at the point
  where each new page's Greek begins.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds: T (textual: what you read
  and why, incl. where the Latin differs, and Migne's inline brackets), S (Scripture or a Father located; "cf." where you cannot be
  sure), P (person, place or event, one line, only where a reader would be lost: a biblical figure read allegorically, a Father named; each on first appearance in the chunk: the coordinator dedupes). Start each note with its kind letter: `T.` `S.` `P.` Keep them short. No note for an ordinary
  OCR fix you logged in the table.
- Every clause rendered; nothing summarized; no sentence of
  the Greek made two by preference; a doublet never collapsed to one word. Keep the long periodic sentences and the participial chains.

## The OCR table (the half of the job that replaces a second plate read)
One row per corrupt spot, in text order: `| tag | printed | reading | sure | kind | why |`
- **printed** = the token(s) exactly as in your scaffold; **reading** = what the plate must have; **sure** = `high` / `medium` / `low`.
- **kind**: `ocr` (a wrong letter, accent, breathing, iota subscript or punctuation, where you judge the machine misread a correctly
  printed page) · `space` (words wrongly joined or split) · `heading` (a mangled title or section mark) · `print` (Migne's own misprint,
  or a reading the plate really has though it is wrong: the English follows your correction with a T note) · `stray` (a note call,
  running head, column number, band letter or Latin line leaked into the text) · `doubt` (an open doubt you settled because the English
  depends on it, or something wrong you cannot name — then the English has `[?]` plus a T note).
- ⚠ **`ocr` or `print`?** A non-word, a Latin letter inside a Greek word, a lost space is `ocr`; **a real Greek word that is simply the
  wrong word, where the facing Latin read the same wrong word, is `print` or `doubt`, not `ocr`.**
- **Report accent and breathing errors too.** The Greek is displayed beside the English. Kraken's known residue after the rule pass:
  breathings (ἣ/ἢ, οὗ/οὐ, on capitals), acute/grave/circumflex, a missing iota subscript, κ/χ, ε/ο, ν/υ, ρ/ς at a line end, β/δ
  (Δαβίδ read Λαβίδ), a dropped short word, a whole line lost (report `doubt`: "a line seems lost"). `why` = "accent" / "breathing" /
  "subscript" where that is the class.
- ⛔ **Not a misread:** Maximus's compounds and coinages, Scripture's own words in a quotation, Attic forms, Migne's comma before a quotation,
  Migne's inline brackets, and anything you merely find inelegant. Do not correct the author's grammar, logic or theology.
- **Use the Latin as your best detector.** Where the Greek and the Latin disagree on a word, a name, a number or a negative, look hard at
  the Greek. Where the Latin agrees with a surprising Greek reading, the reading is probably real (and if it is wrong, it is `print`).
- Expect roughly **15–40 rows per 1,000 Greek words** (the *Mystagogia* ran ≈25). If you find far fewer, read the Greek again, line by
  line, accents included.

## Report (your final message, short)
Per chunk: Greek words, English words, notes, OCR rows (by kind), the columns covered and the chapter numbers covered (first, last, any break in the sequence), the three spots you are
least sure of, any term you had to decide (Greek → English, one line each), and every negative (οὐ/μή) whose construal you had to think about.

---

# STYLE ANCHOR — Letter 15 (to Cosmas), opening, as shipped at migne.app/pg/91/epistulae/ (approved by Wilson 2026-11-06)

Match this register: one word per term, the Father's words inside « », the definition kept a definition.

    [544] LETTER 15

    *Of the same, on common and proper, that is, essence and hypostasis, to Cosmas, the most God-beloved deacon of Alexandria.*

    [545] The common and universal, then, that is the generic, according to the Fathers, is the essence and the nature;
    for they say that these are the same as each other. The proper and particular is the hypostasis and the person;
    for according to them these are the same as each other. And the great Basil shows this, writing as follows to
    Terentius:[^2] «But if we too must say briefly what seems right to us, we shall say this: that the ratio which the
    common has to the proper, this the essence has to the hypostasis. For each of us both partakes of being by the
    common principle of the essence, and by the idioms about him is such a one or such a one.» And again the same,
    going through such matters with Amphilochius, says this:[^3] «Essence and hypostasis have this difference, which
    the common has toward what is particular to each. For example, as the living being has toward such a man.»
