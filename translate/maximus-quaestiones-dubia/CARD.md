# TRANSLATOR CARD — one chunk of Maximus the Confessor, *Quaestiones et dubia* (PG 90.785–856)

Adapted 2026-11-23 from `translate/maximus-quaestiones-dubia/CARD.md` (Capita alia → Theopemptus → Ps 59 → Mystagogia lineage) (Opus coordinator; same author, same method, PG 90 instead of 91).
**The Greek you are given is a machine reading** of Migne's plate (Kraken, a fine-tuned polytonic OCR model), passed once through
a rule script that fixes the commonest accent, breathing and elision slips (`scripts/kt-rules.py`). Nobody has checked it against
the page. So you have two jobs, equally weighted: **translate**, and **report every place the Greek you were given is not what the
plate must say.** Your reports are what we check against the page images; they replace a separate reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary, the style anchor and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/maximus-quaestiones-dubia/<id>.en.md` in **one** Write (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work — *Quaestiones et dubia* ("Questions and Doubts"), 79 questions with their answers

Migne's heading (p-0396, col. 785, below the end of the *Ad Thalassium* scholia, which are NOT yours): «ΤΟΥ ΑΥΤΟΥ / ΠΕΥΣΕΙΣ ΚΑΙ ΑΠΟΚΡΙΣΕΙΣ ΚΑΙ ΕΡΩΤΗΣΕΙΣ ΚΑΙ ΕΚΛΟΓΑΙ /
Διαφόρων κεφαλαίων ἀπορουμένων» ("Of the same: Questions and Answers, and Interrogations, and Selections of various perplexing chapters"). Then **79 questions**, each
headed «ΕΡΩΤΗΣΙΣ Αʹ» (… ΟΘʹ) with the question, then «Ἀπόκρισις.» and the answer. Some questions carry a sub-question or a further «Ἀπόκρισις», or a
«Ἄλλως» ("Otherwise"): keep each as Migne prints it. The subjects: virtues of soul and body, hard sayings of Scripture (Old and New Testament, read literally and
anagogically), the Fathers (Gregory of Nazianzus, Gregory of Nyssa, Dionysius: an S note where one is named or quoted), the passions, prayer, the sacraments. The
last answer breaks off («… συμπλεκόμεναι..... Λείπει.», p0431.28; the facing Latin *Deest finis*): end the sentence with «…», then a line on its own *The rest is wanting.* (= Λείπει) and a T note. Below it on
p-0431 Migne's Latin *Monitum* to the Psalm 59 exposition begins: not yours. A general «thou» inside an answer is *thou* by the house number rule.

**What is NOT the work.** On p-0396 above the title: the last scholia of the *Ad Thalassium* (numbered «ξεʹ», «ξϛʹ» …): not yours (the first brief starts at the title).
Latin heads leak into the Greek («QUAESTIONES ET DUBIA», «S. MAXIMI CONFESSORIS», garbled into Greek letters): kind `stray`. If Greek scholia stand at the foot of a page
(short glosses keyed to a word): apparatus, read separately; leaked into your Greek, kind `stray`, `why` «foot scholion».

## Headings and questions — the house shape
- qd-001 only: *Of the same.* (italic), then `QUESTIONS AND ANSWERS, AND INTERROGATIONS, AND SELECTIONS` and *of various perplexing chapters.* (italic).
- **Each question: a heading line `QUESTION 1` (arabic, as Migne's numeral), then the question as its own paragraph, then the answer as a paragraph beginning `*Answer.*`**
  (Migne's «Ἀπόκρισις»). Further «Ἀπόκρισις» / «Ἄλλως» inside a question: a new paragraph beginning *Answer.* / *Otherwise.*
  Where Kraken has mangled or lost a numeral, number by the sequence and log it as kind `heading`. **Report any break in the sequence** (kind `heading`, `why` "sequence: …").
- Scripture quoted verbatim: italics + S note (LXX numbering for the Psalms: `Ps 79:14 LXX (80:13 Heb.)`); an allusion: S note «cf. …». A question that quotes the
  Scripture it asks about («Τί ἐστι τό, "…"») keeps the quotation in italics inside « ».

## Migne's square brackets (lesson of the *Capita alia*, 2026-11-21: read this)
A bracket in Migne's Greek can be **a word his editor SUPPLIES** (needed for the construal), **a word he would DELETE** (e.g. «[οὐ]» where the sense needs no
negative), or **a variant/conjecture** set after the printed word. You cannot see the editor's foot notes. So: **render what the sentence needs, and log EVERY
bracket as a row of kind `doubt`** (`why` = «bracket: supplement? / deletion? / variant?» with your reasoning and what the Latin does), with a T note saying what
Migne prints and what the English does: a supplied word in the English goes in [square brackets]; a deleted word is left out; a variant stays in the note. **Never
silently drop a bracketed NEGATIVE**: if you leave one out, the T note says so in its first words. The coordinator settles each against the editor's note.

## Terms (read `GLOSSARY.md`; the Capita alia rulings at its head bind)
- **The Christological and Trinitarian vocabulary of the Epistulae glossary binds**: οὐσία essence, φύσις nature, ὑπόστασις hypostasis, πρόσωπον person, ἐνέργεια
  activity (operation only where Christological, T note), θέλημα will / θέλησις volition, ἕνωσις union, θέωσις deification, οἰκονομία economy (the divine plan; «dispensation» never).
- **λόγος**: «principle» for the λόγοι of beings (οἱ λόγοι τῶν ὄντων «the principles of beings»), «reason», «word» by sense; **Λόγος** the Word. **τρόπος** mode (λόγος/τρόπος = principle/mode: the pair kept).
- **πρόνοια** providence; **κρίσις** judgement; **αἰών** age; **αἰώνιος** everlasting; **ἀΐδιος** eternal; **χρόνος** time; **κίνησις/στάσις** motion/rest; **γένεσις** coming-to-be;
  **φθορά** corruption; **ἀφθαρσία** incorruption; **σάρκωσις/ἐνανθρώπησις** incarnation/becoming man.
- **πρακτική, θεωρία, γνῶσις, μυσταγωγία** practice, contemplation, knowledge, mystagogy; **ἀναγωγή** ascent / anagogy; **τύπος** type; **σκιά** shadow; **ἀλήθεια** truth.

## Migne's inline apparatus (new in this work; read carefully)
The Greek may carry the editor's own bracketed readings inside the text (`[…]`, `[Fr. …]`, `[erat …]`, as in Ps 59). **These are the edition's apparatus, not OCR damage and not the author.** Keep them
out of the English running text: translate the main reading, and put the bracket in a **T note** ("Migne prints [Fr. X] after Y: …"). In the OCR table report them only if Kraken has garbled the bracket itself. Do NOT name the editor (the facing Latin's author and
the sigla are not yet identified; say "Migne prints", "the edition marked Fr.", "the facing Latin").

**Note calls** are printed inside the Greek as `(a)`, `(b)` … and `(1)`, `(2)` …, sometimes read as superscript digits: **do not
reproduce them**; the foot-of-page apparatus is read separately. A leftover is kind `stray`. **Running heads** (`S. MAXIMI CONFESSORIS`,
`QUAESTIONES ET DUBIA`, often garbled into Greek letters), column numbers and Latin lines leaked into the
Greek are kind `stray`. **Band letters** (Migne's A/B/C/D in the gutter, e.g. a lone `Β` at a line start) are not yours: kind `stray`,
the build places them. Do not write `[b: X]`.

## The scaffold
Each page block gives the Greek column's lines, tagged `pNNNN.LL` (page file + line in the Kraken text), then the facing **Latin
column** of the same page (archive.org OCR of the facing Latin, noisy). The Latin's whole page is shown, so it can start earlier or run
later than your Greek lines. **Take the Greek column number from the scaffold's page header every time** (in this stretch of the volume the Greek
stands LEFT on even pdf pages, RIGHT on odd: trust the header, not a rule). A word broken across a line end is hyphenated
(`πο-` / `θεῖ`); join it in your head, and never report a correct hyphenation.

**Open doubts.** On every page the scaffold lists the words where a second digital witness (the myriobiblos text, monotonic,
itself 1–2 defects per 100 words) reads other letters than the Kraken ("myriobiblos reads X"). **Read every one.** The witness is a
pointer, never an authority: it eye-skips and modernizes. Where the choice changes the English, decide from the sense and the Latin,
use your choice, and log it as a row of kind `doubt` (printed = the kept form, reading = the form you used, why = "plate doubt: …");
where it changes nothing in the English (a breathing, an accent, κ/χ where both construe), ignore it — do not log. (But a plain
Kraken misread that the witness happens to expose IS an `ocr` row: the table is the list of what the plate must say.)

## Your English file, exactly this shape

    title: Questions and Doubts, 1
    ---
    [785] *Of the same.*

    QUESTIONS AND ANSWERS, AND INTERROGATIONS, AND SELECTIONS

    *of various perplexing chapters.*

    QUESTION 1

    Which are the virtues of the soul, and which of the body?

    *Answer.* The virtues of the soul are these: love, humility …[^1]

    ## Notes
    [^1]: T. …
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|

- **`title:`** = `Questions and Doubts, N`, N = the chunk's number (qd-002 → `Questions and Doubts, 2`). Only qd-001 carries the title block.
- **A chunk starts and ends at page ends, so it may begin or end in the middle of an answer.** Start with the column anchor and the continuation (no
  heading); end mid-sentence if the Greek does. The next brief picks it up.
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
Per chunk: Greek words, English words, notes, OCR rows (by kind), the columns covered and the question numbers covered (first, last, any break in the sequence), and every bracket you met with your reading of it, the three spots you are
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
