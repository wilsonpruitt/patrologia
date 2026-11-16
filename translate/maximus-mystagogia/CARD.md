# TRANSLATOR CARD — one chunk of Maximus the Confessor, *Mystagogia* (PG 91.657–717)

Adapted from `translate/maximus-opuscula/CARD.md` (Sonnet coordinator; same volume, same editor, same
author; the Disputatio shipped on it). **The Greek you are given is a machine reading** of Migne's plate (Kraken, a
fine-tuned polytonic OCR model), passed once through a rule script that fixes the commonest accent, breathing and
elision slips (`scripts/kt-rules.py`). Nobody has checked it against the page. So you have two jobs, equally weighted:
**translate**, and **report every place the Greek you were given is not what the plate must say.**
Your reports are what we check against the page images; they replace a separate reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary, the style anchor and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/maximus-mystagogia/<id>.en.md` in **one** Write
   (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.


## The work — the *Mystagogia* ("Mystagogy"), c. 628–630

Migne prints Combefis's edition (1675), with Combefis's Latin facing, of Maximus's **mystical interpretation of the church building and
the Divine Liturgy** (the Byzantine *synaxis*): title «Of St. Maximus: *Mystagogia*, on what the symbols of the things done in the holy
Church at the synaxis signify». It opens with a short **Proem** (a friend, "most honoured of all", asks him to write down what
an old holy elder once told them; Maximus consents and asks for prayers) and then the numbered chapters (Combefis's ΚΕΦ. numerals and titles; the Greek is not read for you in advance: take the
division from the text). Its subject, in the order of the text: the church as image of God, of the cosmos (sensible and intelligible), of man
(body, soul, mind), then the liturgy in sequence (the entrance, the readings, the gospel, the dismissal of the catechumens, the great
entrance, the kiss of peace, the Creed, the Sanctus, the Lord's Prayer, communion), and a close in prayer. The doxology ends the work (col. 717). *Variae lectiones* (Combefis's MS
variants, Fr. = Combefis's own readings) stand at the foot of the page: not yours; a separate step reads them.

**The Greek you hold is one author, one voice, throughout**: contemplative exegesis in the dogmatic register: the logic is
still logic (each correspondence is argued: A is to B as C is to D), but the reader is a monk or a friend, not an opponent. Keep the
long periodic sentences, the participial chains and the doublets (νοερός/λογικός, αἰσθητός/νοητός, πρακτικός/θεωρητικός). **Do not break a sentence
Migne prints as one**; do not tidy the symmetries (ἀρχή/τέλος, ἕνωσις/διαίρεσις, ἐπιστήμη/γνῶσις each in its own word).

**Second person:** the Proem and the close address ONE friend: *thou/thee/thy*. Everything between is general prose, no address.

**Voices and quotations.** Maximus's elder («the holy elder») appears only in the Proem, as reported speech: no quotation marks.
Scripture and Dionysius are quoted or alluded to often and not marked: where the Greek is a verbatim quotation Migne sets it off
(`«…»`), where it is an allusion do not add marks: give it an S note ("cf. Ps. 118:xx"; "Dionysius, *Ecclesiastical Hierarchy* III.x").
The Latin Scripture locators printed in the margin are a pointer for your S notes (the build mirrors them).

## Terms (read `GLOSSARY.md`; the five that carry the work, fixed)
- **ἐκκλησία** the church (the building and the people, one word: say which in a T note only if the sense turns); **σύναξις** the synaxis
  (the assembly / the liturgical gathering): kept as *synaxis* because the title and the Latin keep it; **μυσταγωγία** mystagogy;
  **σύμβολον** symbol (the Latin *symbolum* = the Creed is a different word, ἡ πίστις / τὸ σύμβολον τῆς πίστεως: "the Creed" there).
- **ἱεράρχης/ἀρχιερεύς** hierarch / high priest ("the bishop" only where the Greek says ἐπίσκοπος); **λαός** people; **κατηχούμενοι** catechumens.
- **νοῦς** mind (intellect never; *intelligible* for νοητός, *sensible* for αἰσθητός, *rational* for λογικός, *noetic* for νοερός);
  **ψυχή** soul; **πρακτική** the active life / practice; **θεωρία** contemplation; **γνῶσις** knowledge; **ἐπιστήμη** science (kept apart from γνῶσις).
- **ἀρετή** virtue; **πάθος** passion; **ἀπάθεια** passionlessness; **ἕξις** habit; **ἐνέργεια** activity (the dyothelite *operation* where
  Maximus uses it as a technical term of the Epistulae: say in the T note); **λόγος** (a) word, (b) principle/ratio, (c) account: choose by sense, T note on a non-obvious (b).
- **θέωσις** deification; **ἕνωσις** union; **διάκρισις** distinction; **ἀναγωγή** ascent / being led up; **ἀναγωγικῶς** anagogically (kept).
- Where Maximus uses a technical word of the Christological terms (φύσις, ὑπόστασις, πρόσωπον), the Epistulae glossary binds.

## The Proem's date and the two titles
The Migne title ("Of St. Maximus: *Mystagogia*, on what the symbols … signify") and the Latin title are printed twice (Greek, Latin);
translate the Greek title once, as the heading `THE MYSTAGOGIA`, then (italics) the sub-title; the Latin title is not yours. The tail of
**col. 657 above the title** is the end of the PRECEDING piece (an epistle's closing «Ἔρρωσθε ἐν Χριστῷ Σωτῆρι» and a Venetian
printer's date): chunk my-001 starts at the title; do not translate what comes before.

## Chapter numbers
Combefis numbers the chapters (ΚΕΦ. α΄, β΄ …) in the text, sometimes as running heads in the Kraken, sometimes lost: report a missing or mangled
heading as kind `heading`, and keep the number in the English as `CHAPTER 3` (a line on its own) with the chapter title in italics under it.

## The scaffold

Each page block gives the Greek column's lines, tagged `pNNNN.LL` (page file + line in the Kraken text), then the
facing **Latin column** of the same page (archive.org OCR of Combefis's Latin, noisy). The Latin's whole page is shown, so it can
start earlier or run later than your Greek lines. **Take the Greek column number from the scaffold's page header
every time** (the Greek stands right on even pdf pages, left on odd). A word broken across a line end is hyphenated
(`πο-` / `θεῖ`); join it in your head, and never report a correct hyphenation.

**Open doubts.** On every page the scaffold lists, the words where a second digital
witness (the myriobiblos text, monotonic, itself 1–2 defects per 100 words) reads other letters than the Kraken
("myriobiblos reads X"). **Read every one.** The witness is a pointer, never an authority: it eye-skips and
modernizes. Where the choice changes the English, decide from the sense and the Latin, use your
choice, and log it as a row of kind `doubt` (printed = the kept form, reading = the form you used, why = "plate doubt:
…"); where it changes nothing in the English (a breathing, an accent, κ/χ where both construe), ignore it — do not log.

**Combefis's note calls** are printed inside the Greek as `(a)`, `(b)` … and `(1)`, `(2)` …, sometimes read as
superscript digits (¹⁹): **do not reproduce them**; the foot-of-page apparatus is read separately. A leftover is kind
`stray`. **Running heads** (`S. MAXIMI CONFESSORIS`, `MYSTAGOGIA`), column numbers and Latin lines leaked into the Greek
are kind `stray`. **Band letters** (Migne's A/B/C/D in the gutter) were not read with this text and are not yours to
place: the build adds them. Do not write `[b: X]`.

## Your English file, exactly this shape

    title: Mystagogia, 3
    ---
    [659] The holy church of God is an image of God …[^1] …

    MAXIMUS. …

    ## Notes
    [^1]: …
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0253.07 | ψύχος | ψόγος | high | ocr | beside ἔπαινος |

- **`title:`** = `Mystagogia, N`, N = the chunk's number in the work (my-003 → `Mystagogia, 3`).
- **Column anchors:** `[364]` (the Greek column number from the scaffold's page header) at the start of the chunk,
  and at the point where each new page's Greek begins.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds:
  T (textual: what you read and why, incl. where the Latin differs; a glossary term on its first use in the work
  where the reader needs it), S (source: a scriptural or patristic passage located — Maximus quotes Gregory
  Nazianzen, Dionysius, Cyril, the Cappadocians; name the work where you can, "cf." where you cannot), P (person,
  place or event, one line, only where a reader would be lost: Dionysius, a Father or a heretic named, a rite or an
  office a reader would not know, each on first appearance in the WORK; the
  coordinator dedupes across chunks, so give the one line anyway). Keep them short. No note for an ordinary OCR fix you logged in the table.
- **Direct speech and quotations** inside « » where Migne prints them; the English keeps « ».
- Paragraphs follow the Greek's sense units (Migne prints few breaks; a new paragraph at each new topic of the exposition).
  Every clause rendered; nothing summarized; no sentence of the Greek made two by preference; a doublet never
  collapsed to one word.

## The OCR table (the half of the job that replaces a second plate read)

One row per corrupt spot, in text order: `| tag | printed | reading | sure | kind | why |`

- **printed** = the token(s) exactly as in your scaffold; **reading** = what the plate must have; **sure** =
  `high` / `medium` / `low`.
- **kind**:
  - `ocr` a wrong letter, accent, breathing, iota subscript or punctuation that you can correct, **where you judge
    the machine misread a correctly printed page**;
  - `space` words wrongly joined or split;
  - `heading` a mangled, misplaced or missing chapter number (ΚΕΦ.), chapter title, work title or section mark;
  - `print` Combefis's/Migne's own misprint, or a reading the plate really has though it is wrong: the English
    follows your correction with a T note;
  - `stray` a note call, running head, column number or Latin line leaked into the text;
  - `doubt` an open doubt you settled because the English depends on it (above), or something wrong you cannot
    name — then the English has `[?]` plus a T note.
- ⚠ **`ocr` or `print`?** A non-word, a Latin letter inside a Greek word, a lost space is `ocr`; **a real Greek
  word that is simply the wrong word, where Combefis's Latin read the same wrong word, is `print` or `doubt`, not
  `ocr`.** We check every row on the image either way; the label tells us which way to look.
- **Report accent and breathing errors too.** The Greek is displayed beside the English. Kraken's known residue after
  the rule pass: breathings (ἣ/ἢ, οὗ/οὐ, on capitals), acute/grave/circumflex, a missing iota subscript, κ/χ, ε/ο, ν/υ,
  ρ/ς at a line end, a dropped short word, and a whole line lost (report `doubt`: "a line seems lost"). `why` = "accent" / "breathing" / "subscript".
- ⛔ **Not a misread:** Maximus's compounds and coinages (θεωτικός, συνέκδημος, ἀντιλύπησις, συνεπικινουμένην), the
  Attic forms, the LXX's own words in a quotation, Migne's comma before a quotation, and anything you merely find
  inelegant. Do not correct the author's grammar, his logic or his theology.
- **Use the Latin as your best detector.** Where the Greek and the Latin disagree on a word, a name, a number or a
  negative, look hard at the Greek. Where the Latin agrees with a surprising Greek reading, the reading is probably
  real (and if it is wrong, it is `print`).
- Expect roughly **15–40 rows per 1,000 Greek words**: this is raw Kraken, not a checked read (Sophronius ran ≈30). If you find far fewer, read the Greek
  again, line by line, accents included.

## Report (your final message, short)

Per chunk: Greek words, English words, OCR rows (by kind), the columns covered and the topic of the passage, the three spots you are least sure
of, any glossary term you had to decide (Greek → English, one line each).


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
