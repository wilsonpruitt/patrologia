# TRANSLATOR CARD — one chunk of Maximus the Confessor, *Ad Theopemptum scholasticum* (PG 90.1393–1400)

Adapted 2026-11-21 from `translate/maximus-ps59/CARD.md` (itself from the Mystagogia's) (Opus coordinator; same author, same method, PG 90 instead of 91).
**The Greek you are given is a machine reading** of Migne's plate (Kraken, a fine-tuned polytonic OCR model), passed once through
a rule script that fixes the commonest accent, breathing and elision slips (`scripts/kt-rules.py`). Nobody has checked it against
the page. So you have two jobs, equally weighted: **translate**, and **report every place the Greek you were given is not what the
plate must say.** Your reports are what we check against the page images; they replace a separate reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary, the style anchor and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/maximus-theopemptus/<id>.en.md` in **one** Write (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work — *To Theopemptus the Scholasticus* (CPG 7696), a letter answering three questions

A short letter (Migne's heading: «ΜΑΞΙΜΟΥ ΜΟΝΑΧΟΥ ΠΡΟΣ ΘΕΟΠΕΜΠΤΟΝ ΣΧΟΛΑΣΤΙΚΟΝ», then an italic line: «Ἐρωτήσαντα περὶ τοῦ κριτοῦ τῆς
ἀδικίας· καὶ τοῦ, Ἐάν τίς σε ῥαπίσῃ ἐπὶ τὴν δεξιὰν σιαγόνα· καὶ τοῦ, Μή μου ἅπτου, οὔπω γὰρ ἀναβέβηκα πρὸς τὸν Πατέρα»). Theopemptus, a
scholasticus (a lawyer), asked about three Gospel sayings: **the judge of unrighteousness** (Luke 18:1–8), **«if anyone strikes thee on the
right cheek»** (Matt 5:39), and **«Touch me not, for I have not yet ascended to the Father»** (John 20:17). A dense opening on knowledge, practice
and deification addressed to him, then the three answers in order, each a contemplative (anagogical) reading. One addressee throughout.

**Second person is a number marker** (the Epistulae rule): *thou/thee/thy* for the singular addressee (σε, σου, θεοφύλακτε δέσποτα); *you* only
for a Greek plural. Forms of address: **δέσποτα master** («God-guarded master» for θεοφύλακτε δέσποτα); Δεσπότης (capital) of Christ = the Master.

**What is NOT the work.** p-0710's lines above the title are the end of the preceding piece (if any: the scaffold starts at the title); p-0713
ends the letter (somewhere in col. 1400): anything after its last sentence (a «Τέλος», the *Capita alia* title) is not yours.

## Headings — the house shape
- The heading: `TO THEOPEMPTUS THE SCHOLASTICUS` on its own line, *Of Maximus the monk.* in italics above it (the Greek's ΜΑΞΙΜΟΥ ΜΟΝΑΧΟΥ),
  then the italic question line as printed, translated (*He had asked about the judge of unrighteousness; and about «If anyone …»; and about
  «Touch me not …».*). The Latin title is not yours.
- Scripture quoted verbatim: italics (the question line's sayings keep Migne's «» if printed, else italics), with an S note on first quotation;
  an allusion: no italics, S note «cf. …». Where Maximus quotes a Father, «…» and an S note naming the work if you can.
- Paragraphs: the Greek's sense units; a new paragraph at each of the three answers.

## Terms (read `GLOSSARY.md`; these bind first)
- **κριτὴς τῆς ἀδικίας** the judge of unrighteousness (Luke 18:6 LXX-Gospel wording: keep «unrighteousness» for ἀδικία every time);
  **ῥαπίζω** strike; **σιαγών** cheek; **ἅπτομαι** touch.
- **λόγος** reason / word / principle by sense (T note on a non-obvious choice); **Λόγος** the Word; **πρᾶξις** practice, **θεωρία**
  contemplation, **γνῶσις** knowledge, **πεῖρα** experience; **οἰκείωσις** kinship (Mystagogia ruling), **ἐκθέωσις / θέωσις** deification;
  **ἔφεσις** desire, **κίνησις / στάσις** motion / rest (the Maximian pair: keep both words), **γνώμη** inclination, **ἀτρεψία** unchangeability;
  **ἀρετή** virtue; **πάθος** passion; **ἀπάθεια** passionlessness; **χάρις** grace; **ἀγαθότης** goodness; **ἀπειρία** infinity.
- **νοῦς** mind; **νοητός** intelligible, **αἰσθητός** sensible, **νοερός** noetic.

## Migne's inline apparatus (new in this work; read carefully)
The Greek may carry the editor's own bracketed readings inside the text (`[…]`, `[Fr. …]`, `[erat …]`, as in Ps 59). **These are the edition's apparatus, not OCR damage and not the author.** Keep them
out of the English running text: translate the main reading, and put the bracket in a **T note** ("Migne prints [Fr. X] after Y: …"). In the OCR table report them only if Kraken has garbled the bracket itself. Do NOT name the editor (the facing Latin's author and
the sigla are not yet identified; say "Migne prints", "the edition marked Fr.", "the facing Latin").

**Note calls** are printed inside the Greek as `(a)`, `(b)` … and `(1)`, `(2)` …, sometimes read as superscript digits: **do not
reproduce them**; the foot-of-page apparatus is read separately. A leftover is kind `stray`. **Running heads** (`S. MAXIMI CONFESSORIS`,
`QUÆSTIONES AD THEOPEMPTUM`, often garbled into Greek letters), column numbers and Latin lines leaked into the
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

    title: To Theopemptus the Scholasticus
    ---
    [1393] *Of Maximus the monk.*

    TO THEOPEMPTUS THE SCHOLASTICUS

    *He had asked about the judge of unrighteousness; …*[^1]

    To those for whom the Word is what is worshipped, …[^2]

    ## Notes
    [^1]: S. Luke 18:6; Matt 5:39; John 20:17.
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|

- **`title:`** = `To Theopemptus the Scholasticus` (one chunk).
- **Column anchors:** `[856]` (the Greek column number from the scaffold's page header) at the start of the chunk, and at the point
  where each new page's Greek begins.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds: T (textual: what you read
  and why, incl. where the Latin differs, and Migne's inline brackets), S (Scripture or a Father located; "cf." where you cannot be
  sure), P (person, place or event, one line, only where a reader would be lost: Theopemptus, a Father or heretic named; each on first appearance). Start each note with its kind letter: `T.` `S.` `P.` Keep them short. No note for an ordinary
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
- ⛔ **Not a misread:** Maximus's compounds and coinages, the Gospel's own words in a quotation, Attic forms, Migne's comma before a quotation,
  Migne's inline brackets, and anything you merely find inelegant. Do not correct the author's grammar, logic or theology.
- **Use the Latin as your best detector.** Where the Greek and the Latin disagree on a word, a name, a number or a negative, look hard at
  the Greek. Where the Latin agrees with a surprising Greek reading, the reading is probably real (and if it is wrong, it is `print`).
- Expect roughly **15–40 rows per 1,000 Greek words** (the *Mystagogia* ran ≈25). If you find far fewer, read the Greek again, line by
  line, accents included.

## Report (your final message, short)
Per chunk: Greek words, English words, notes, OCR rows (by kind), the columns covered and where each of the three answers begins, the three spots you are
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
