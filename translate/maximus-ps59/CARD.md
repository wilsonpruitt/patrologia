# TRANSLATOR CARD — one chunk of Maximus the Confessor, *Expositio in Psalmum LIX* (PG 90.856–872)

Adapted 2026-11-21 from `translate/maximus-mystagogia/CARD.md` (Opus coordinator; same author, same method, PG 90 instead of 91).
**The Greek you are given is a machine reading** of Migne's plate (Kraken, a fine-tuned polytonic OCR model), passed once through
a rule script that fixes the commonest accent, breathing and elision slips (`scripts/kt-rules.py`). Nobody has checked it against
the page. So you have two jobs, equally weighted: **translate**, and **report every place the Greek you were given is not what the
plate must say.** Your reports are what we check against the page images; they replace a separate reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary, the style anchor and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/maximus-ps59/<id>.en.md` in **one** Write (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work — *Exposition of Psalm 59* (LXX; Ps 60 in the Hebrew numbering)

A short commentary on one psalm, Maximus's only work on the Psalms (Migne's *Monitum*, col. 855: «Una haec nobis Maximi in Psalmos
lucubratio exstat»; it reads «sensus mysticos ac allegoricos»). The psalm's title (LXX 59:1–2: «Unto the end, for those who shall be
changed; for an inscription on a pillar, to David; for teaching, when he burned Mesopotamia and Syria Soba, and Joab returned and
struck the valley of salt, twelve thousand») is read first, clause by clause, of Christ («David» = Christ, «the end» = the end of the
ages, «those who shall be changed» = the change from unbelief to faith now and the resurrection at the last); then the psalm verse by
verse (LXX 59:3–14), each **lemma** printed by Migne as a line of psalm text, followed by its exposition. It ends with a doxology
(«Αὐτῷ ἡ δόξα εἰς τοὺς αἰῶνας. Ἀμήν», col. 872). The exposition is in Maximus's anagogical register: the moral and contemplative
reading of the soul's struggle (practice and contemplation, virtue and knowledge, passions and demons), the calling of the nations,
the incarnation and the resurrection. One voice throughout; no addressee is expected. If a second person appears, render it by the
Greek's number (singular *thou*, plural *you*).

**What is NOT the work.** On p-0431 the lines **above** your range are the end of the *Quaestiones et dubia* (ending «…Λείπει», i.e.
"the rest is missing") and Migne's Latin *Monitum*: not yours. On p-0439 the lines **after** «Ἀμήν» (beyond your range) open the
*Expositio orationis dominicae*: not yours.

## Lemmas (the psalm text) — the house shape

- Each lemma is **its own paragraph, in italics**, exactly as Migne divides it; the exposition follows as a new paragraph.
- **Translate the psalm as Maximus reads it**, from the Greek of the lemma (LXX), not from any English Bible: his exposition hangs on
  the LXX's words (ἀλλοιωθησομένοις "those who shall be changed", στηλογραφία "inscription on a pillar", ἀπώσω "thou hast cast off",
  etc.), so the lemma's English must carry the word the exposition then explains, and the same English word must recur when he repeats
  it. God is addressed in the psalm as *thou* (the psalmist's address to God; not the house second person).
- Give each lemma one **S note** with its verse, in this form: `Ps 59:3 LXX (Ps 60:1 Heb.).` When the exposition quotes a lemma phrase
  again, italics, no new note.
- The psalm's title (59:1–2) is one lemma paragraph; the exposition of the title then goes clause by clause.
- Other Scripture quoted verbatim inside the exposition: italics only, with an S note; an allusion: no italics, S note "cf. …".

## Terms (read `GLOSSARY.md`; these bind first)
- **ἀλλοίωσις / ἀλλοιόω** change / be changed (the work's key word: one English word, every time; the LXX title's participle
  τοῖς ἀλλοιωθησομένοις = "for those who shall be changed"); **μεταβολή** transformation (kept apart from ἀλλοίωσις);
  **ἀνανέωσις** renewal.
- **στηλογραφία** inscription on a pillar (στήλη pillar; "stele" never); **εἰς τὸ τέλος** "unto the end".
- **Proper names** in the LXX form, English spelling: Mesopotamia, Syria Soba (Migne's brackets give Σωβάλ: below), Joab, the valley of
  salt (φάραγξ τῶν Ἁλῶν), Sikima (Σίκιμα, Shechem: P note), the valley of tents (κοιλὰς τῶν σκηνῶν), Galaad, Manasses, Ephraim, Judah,
  Moab, Idumea, the allophyles (ἀλλόφυλοι "foreigners": choose one, keep it, name it in your report), the fortified city (πόλις περιοχῆς).
- **νοῦς** mind; **λόγος** reason / word / principle by sense (T note on a non-obvious choice); **πρακτική** practice / the active life;
  **θεωρία** contemplation; **γνῶσις** knowledge; **ἀρετή** virtue; **κακία** vice; **ἀπάθεια** passionlessness; **πάθος** passion;
  **ἕξις** habit; **γνώμη / γνωμικός** inclination / of the inclination; **προαίρεσις / προαιρετικός** choice / of choice (the Maximian pair,
  kept apart: γνωμική τε καὶ προαιρετική μεταβολή = "a transformation of inclination and of choice"); **χάρις** grace; **φύσις / φυσικός**
  nature / natural; **σάρκωσις** incarnation; **ἐπιδημία** sojourn (Christ's coming among us); **ἀνάστασις** resurrection; **ἀφθαρσία**
  incorruption; **φθορά** corruption.
- **νοητός** intelligible (Δαβὶδ ὁ νοητός = "the intelligible David"), **αἰσθητός** sensible, **νοερός** noetic.

## Migne's inline apparatus (new in this work; read carefully)
The Greek carries the editor's own bracketed readings inside the text: `[ἐπιγέγραπται]` (an alternative form), `[erat Σωβάλ]`,
`[Fr. Σωβάλ]` (a reading of the edition marked Fr.). **These are the edition's apparatus, not OCR damage and not the author.** Keep them
out of the English running text: translate the main reading, and put the bracket in a **T note** ("Migne prints [Fr. Σωβάλ] after Σωβᾶ:
…"). In the OCR table report them only if Kraken has garbled the bracket itself. Do NOT name the editor (the facing Latin's author and
the sigla are not yet identified; say "Migne prints", "the edition marked Fr.", "the facing Latin").

**Note calls** are printed inside the Greek as `(a)`, `(b)` … and `(1)`, `(2)` …, sometimes read as superscript digits: **do not
reproduce them**; the foot-of-page apparatus is read separately. A leftover is kind `stray`. **Running heads** (`S. MAXIMI CONFESSORIS`,
`EXPOSITIO IN PSALMUM LIX`, often garbled into Greek letters like «ΕχΡΟΙΤΟ ΙΡυix»), column numbers and Latin lines leaked into the
Greek are kind `stray`. **Band letters** (Migne's A/B/C/D in the gutter, e.g. a lone `Β` at a line start) are not yours: kind `stray`,
the build places them. Do not write `[b: X]`.

## Titles
The Greek title block is «ΤΟΥ ΑΥΤΟΥ / ΕΡΜΗΝΕΙΑ ΕΙΣ ΤΟΝ ΝΘʹ ΨΑΛΜΟΝ» (garbled in places; the Latin «EJUSDEM / EXPOSITIO IN PSALMUM LIX»
beside it is not yours). Render it once as the heading line `EXPOSITION OF PSALM 59`, with *Of the same.* in italics on the line above.
Report the garble as kind `heading`.

## The scaffold
Each page block gives the Greek column's lines, tagged `pNNNN.LL` (page file + line in the Kraken text), then the facing **Latin
column** of the same page (archive.org OCR of the facing Latin, noisy). The Latin's whole page is shown, so it can start earlier or run
later than your Greek lines. **Take the Greek column number from the scaffold's page header every time** (in this volume the Greek
stands RIGHT on odd pdf pages here, LEFT on even: trust the header, not a rule). A word broken across a line end is hyphenated
(`πο-` / `θεῖ`); join it in your head, and never report a correct hyphenation.

**Open doubts.** On every page the scaffold lists the words where a second digital witness (the myriobiblos text, monotonic,
itself 1–2 defects per 100 words) reads other letters than the Kraken ("myriobiblos reads X"). **Read every one.** The witness is a
pointer, never an authority: it eye-skips and modernizes. Where the choice changes the English, decide from the sense and the Latin,
use your choice, and log it as a row of kind `doubt` (printed = the kept form, reading = the form you used, why = "plate doubt: …");
where it changes nothing in the English (a breathing, an accent, κ/χ where both construe), ignore it — do not log. (But a plain
Kraken misread that the witness happens to expose IS an `ocr` row: the table is the list of what the plate must say.)

## Your English file, exactly this shape

    title: Exposition of Psalm 59, 1
    ---
    [856] *Of the same.*

    EXPOSITION OF PSALM 59

    *Unto the end, for those who shall be changed; …*[^1]

    "Unto the end, for those who shall be changed" this psalm is inscribed …[^2]

    ## Notes
    [^1]: S. Ps 59:1–2 LXX (Ps 60 title, Heb.).
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0432.07 | γνῶσιν | γνῶσιν | … | … | … |

- **`title:`** = `Exposition of Psalm 59, N`, N = the chunk's number (ps-002 → `Exposition of Psalm 59, 2`).
- **Column anchors:** `[856]` (the Greek column number from the scaffold's page header) at the start of the chunk, and at the point
  where each new page's Greek begins.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds: T (textual: what you read
  and why, incl. where the Latin differs, and Migne's inline brackets), S (Scripture or a Father located; "cf." where you cannot be
  sure), P (person, place or event, one line, only where a reader would be lost: Joab, Soba, Sikima/Shechem, Galaad, Moab, Idumea;
  each on first appearance in the WORK). Start each note with its kind letter: `T.` `S.` `P.` Keep them short. No note for an ordinary
  OCR fix you logged in the table.
- Paragraphs: one per lemma, one (or more, at a turn of topic) per exposition. Every clause rendered; nothing summarized; no sentence of
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
- ⛔ **Not a misread:** Maximus's compounds and coinages, the LXX's own words in a lemma, Attic forms, Migne's comma before a quotation,
  Migne's inline brackets, and anything you merely find inelegant. Do not correct the author's grammar, logic or theology.
- **Use the Latin as your best detector.** Where the Greek and the Latin disagree on a word, a name, a number or a negative, look hard at
  the Greek. Where the Latin agrees with a surprising Greek reading, the reading is probably real (and if it is wrong, it is `print`).
- Expect roughly **15–40 rows per 1,000 Greek words** (the *Mystagogia* ran ≈25). If you find far fewer, read the Greek again, line by
  line, accents included.

## Report (your final message, short)
Per chunk: Greek words, English words, notes, OCR rows (by kind), the columns covered and the verses covered, the three spots you are
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
