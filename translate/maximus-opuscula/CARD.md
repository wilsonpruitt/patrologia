# TRANSLATOR CARD — one chunk of Maximus the Confessor, *Opuscula theologica et polemica* (PG 91.9–286)

Adapted from `translate/maximus-epistulae/CARD.md` (2026-11-06, Opus coordinator; same volume, same editor, same
register as the dogmatic letters). **The Greek you are given is a machine reading** of Migne's plate (Kraken, a
fine-tuned polytonic OCR model), passed once through a rule script that fixes the commonest accent, breathing and
elision slips (`scripts/kt-rules.py`). Nobody has checked it against the page. So you have two jobs, equally weighted:
**translate**, and **report every place the Greek you were given is not what the plate must say.**
Your reports are what we check against the page images; they replace a separate reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary, the style anchor and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/maximus-opuscula/<id>.en.md` in **one** Write
   (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work — twenty-seven theological and polemical pieces

Migne prints Combefis's collection (1675) of Maximus's **Opuscula** — the short treatises, letters, definitions and
florilegia of the monenergist and monothelite controversy (c. 640–655), with Combefis's facing Latin and his notes.
They are not in order of composition and several are fragments. What they share is the argument: Christ, one
hypostasis in two natures, has two natural operations and two natural wills, and the human will in him, being
natural, is not opposed to the divine. Several are to Marinus, a presbyter of Cyprus; others to Theodore, to the
monks and laity of Sicily, to Stephen of Dora, to Peter the *illustris*; some are collections of definitions
(of will, of nature, of hypostasis, of the differences) or chains of patristic testimony.

| opusc. | starts (pdf page:line) | Greek col | Greek words | piece, as printed (Combefis) | chunks |
|---|---|---|---|---|---|
| 1 | 0011:2 | 9 | 4865 | To Marinus the presbyter (on the definitions of will, choice, inclination …) | mo-001–003 |
| 2 | 0026:3 | 40 | 1084 | To the same Marinus: from the treatise on operations and wills, ch. 50 | mo-004 |
| 3 | 0029:22 | 45 | 1735 | From the same treatise, ch. 51: the Fathers' two wills are natural laws, not inclinations | mo-005 |
| 4 | 0034:46 | 56 | 1088 | To George, presbyter and abbot, on the mystery of Christ | mo-006 |
| 5 | 0040:2 | 64 | 357 | Against those who say one operation of Christ "by prevailing" | mo-006 |
| 6 | 0041:8 | 65 | 728 | On "Father, if it be possible, let this cup pass" | mo-006 |
| 7 | 0043:17 | 69 | 3851 | Dogmatic tome sent to Cyprus, to Marinus the deacon | mo-007–008 |
| 8 | 0057:34 | 89 | 4057 | Copy of a letter to Nicander the bishop, on the two operations in Christ | mo-009–011 |
| 9 | 0072:34 | 112 | 3740 | To the holy fathers, abbots, monks and orthodox laity of Sicily | mo-012–013 |
| 10 | 0083:2 | 133 | 956 | Copy of a letter to the lord Marinus, presbyter of Cyprus | mo-014 |
| 11 | 0085:39 | 137 | 252 | From the letter written in Rome | mo-014 |
| 12 | 0087:1 | 141 | — (Latin only) | From the letter to Peter the illustris (LATIN ONLY, via Anastasius) | mo-015 |
| 13 | 0089:1 | 145 | 725 | On the two natures of Christ | mo-016 |
| 14 | 0091:20 | 149 | 713 | Various definitions | mo-016 |
| 15 | 0093:23 | 153 | 5749 | Spiritual and dogmatic tome against the Ekthesis of Heraclius | mo-017–019 |
| 16 | 0110:39 | 184 | 5272 | On the two wills of the one Christ our God | mo-020–022 |
| 17 | 0124:25 | 212 | 350 | On the definitions of the demarcations | mo-023 |
| 18 | 0126:7 | 216 | 1371 | The difficulties of Theodore of Byzantium, deacon, and their first solution (to Marinus) | mo-023 |
| 19 | 0130:17 | 224 | 775 | Solution of the second absurdity | mo-024 |
| 20 | 0132:12 | 228 | 3466 | Dogmatic tome to Marinus the presbyter | mo-025–026 |
| 21 | 0141:45 | 245 | 2003 | On quality, idiom and difference, to Theodore presbyter in Mazarium | mo-027 |
| 22 | 0147:8 | 257 | 716 | "And again the divine Maximus" (excerpt) | mo-028 |
| 23 | 0148:49 | 260 | 1082 | Chapters on essence and nature, hypostasis and person (+ Eulogius, seven chapters) | mo-028 |
| 24 | 0152:7 | 268 | 783 | That one cannot say one will in Christ | mo-029 |
| 25 | 0153:50 | 269 | 773 | Ten chapters on the two wills, written to the orthodox | mo-029 |
| 26 | 0156:3 | 276 | 669 | From the questions put to him by Theodore the monk (+ florilegium) | mo-029 |
| 27 | 0158:16 | 280 | 1164 | Various definitions of the holy Fathers on the two operations (florilegium) | mo-030 |

The numbering is the modern one (PG order, as in CPG 7697 and the scholarship): **number by this table**. Two titles are damaged in the Kraken text and must be read from the Latin: Opusc. 8 (the Greek heading ἼΣΟΝ ἐπιστολῆς … πρὸς … Νίκανδρον was read as the Latin EXEMPLUM; the Greek begins at p-0057:35), and Opusc. 22, which has no title of its own: it opens *Καὶ πάλιν ὁ θεῖος Μάξιμος* ("And again the divine Maximus"), an excerpt joined by a compiler; render that line in italics as its heading. Opusc. 23 includes, as printed, the seven chapters of Eulogius of Alexandria (p-0150:37); Opusc. 26 and 27 close with chains of patristic testimonies (Τοῦ ἁγίου Εἰρηναίου …, Τοῦ ἁγίου Ἀλεξάνδρου …): each testimony's lemma is a heading line in italics, the quotation inside « », an S note per testimony.


**Numbering.** Migne/Combefis number nothing inside the heading line: the pieces are known by Combefis's order, the
table above. Open each piece's first chunk with its number and short title in capitals (`OPUSCULUM 7 — DOGMATIC
TOME TO MARINUS`), then the printed heading as printed, in italics, on the next line (`*Of the same, to the same
Marinus …*`). A chunk that continues a piece starts without either. Inside a piece, numbered chapters, definitions
or syllogisms (α΄ β΄ …, or Combefis's κεφ.) are rendered as arabic numerals with a period, each its own paragraph;
the Kraken garbles numerals: number by sequence with the Latin as witness, and report each bad one once as `heading`.
**Scholia** (ΣΧΟΛΙΑ, printed after some pieces) are Maximus's or a later hand's: translate them under the heading
`SCHOLIA`, numbered as printed.

## One voice, the dogmatic register

The Opuscula are the register of the dogmatic letters (Letters 12–15, 19): **the logic rendered as logic**. Every
term by its glossary word (the first table, inherited from Sophronius, is binding: essence, nature, hypostasis,
person, operation, will/volition, idiom, union, the four Chalcedonian adverbs; § VI holds the will-chain of Opusc. 1),
every step of the syllogism in its order, no smoothing; dilemmas (ἤτοι … ἤ …) and reductios (εἰ δὲ … πῶς …) keep their
edge. A definition stays a definition ("Volition is …"). The opponents' formulas (one composite nature, one operation,
one will, the theandric operation as Severus or Cyrus reads it) are rendered as they say them, in the same words
every time, so that a reader sees the formula Maximus is answering. Where Maximus quotes a Father, the quotation is
inside « » and gets an S note; where he quotes his opponents (Sergius, Pyrrhus, Themistius, the Ekthesis), likewise,
with the name in a P note on first appearance. The few paraenetic or epistolary passages (openings and closings to
Marinus, to the Sicilians) follow the Epistulae's paraenetic register.

**House rules (as in the Epistulae; do not open `translation-style.md`):**
- **Second person is a number marker**: *thou/thee/thy* for a singular addressee, *you* for a plural. Marinus and
  Theodore are singular (*thou*); the Sicilians, the monks, "you who" a community are *you*. Never mix.
- **Terms are fixed**: never vary a glossary word for elegance; a doublet is two words, never one word and a synonym.
- **Scripture**: translate the Greek as printed, with an S note (book chapter:verse; LXX numbering for Psalms).
- **Ranks and offices keep their Latin or Greek form** (presbyter, deacon, *illustris*, abba, patrician).
- Particles by weight: γάρ "for", οὖν "then / so", ἄρα "therefore", μέν … δέ by antithesis, τοίνυν "then".
- **The Latin column is a witness, never a source.** Combefis expands and paraphrases. Translate the Greek; where the
  Latin differs in substance, a T note.

## The scaffold

Each page block gives the Greek column's lines, tagged `pNNNN.LL` (page file + line in the Kraken text), then the
facing **Latin column** of the same page (archive.org OCR of Combefis's Latin, noisy). The Latin's whole page is shown, so it can
start earlier or run later than your Greek lines. **Take the Greek column number from the scaffold's page header
every time** (the Greek stands right on even pdf pages, left on odd). A word broken across a line end is hyphenated
(`πο-` / `θεῖ`); join it in your head, and never report a correct hyphenation.

**Open doubts.** On the *ad Marinum* pieces the scaffold lists, under each page, the words where a second digital
witness (the myriobiblos text, monotonic, itself 1–2 defects per 100 words) reads other letters than the Kraken
("myriobiblos reads X"). **Read every one.** The witness is a pointer, never an authority: it eye-skips and
modernizes. Where the choice changes the English, decide from the sense and the Latin, use your
choice, and log it as a row of kind `doubt` (printed = the kept form, reading = the form you used, why = "plate doubt:
…"); where it changes nothing in the English (a breathing, an accent, κ/χ where both construe), ignore it — do not log.

**Combefis's note calls** are printed inside the Greek as `(a)`, `(b)` … and `(1)`, `(2)` …, sometimes read as
superscript digits (¹⁹): **do not reproduce them**; the foot-of-page apparatus is read separately. A leftover is kind
`stray`. **Running heads** (`S. MAXIMI CONFESSORIS`, `OPUSCULA THEOLOGICA ET POLEMICA`), column numbers and Latin lines leaked into the Greek
are kind `stray`. **Band letters** (Migne's A/B/C/D in the gutter) were not read with this text and are not yours to
place: the build adds them. Do not write `[b: X]`.

## Your English file, exactly this shape

    title: Opusculum 7, to Marinus, 2
    ---
    [468] … the composite hypostasis …[^1] …

    ## Notes
    [^1]: …
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0253.07 | ψύχος | ψόγος | high | ocr | beside ἔπαινος |

- **`title:`** = `Opusculum N, <short title>` and, where a piece spans chunks, the chunk's number within it
  (`Opusculum 7, to Marinus, 2`); a chunk holding several pieces: `Opuscula 4–6`.
- **Column anchors:** `[364]` (the Greek column number from the scaffold's page header) at the start of the chunk,
  and at the point where each new page's Greek begins.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds:
  T (textual: what you read and why, incl. where the Latin differs; a glossary term on its first use in a piece
  where the reader needs it), S (source: a scriptural or patristic passage located — Maximus quotes Gregory
  Nazianzen, Dionysius, Cyril, the Cappadocians; name the work where you can, "cf." where you cannot), P (person,
  place or event, one line, only where a reader would be lost: the addressee on first appearance, Severus, Pyrrhus,
  Sergius, Honorius, Cyrus of Alexandria, Themistius, the Ekthesis and the Typos). Keep them short. No note for an ordinary OCR fix you logged in the table.
- **Direct speech and quotations** inside « » where Migne prints them; the English keeps « ».
- Paragraphs follow the Greek's sense units (Migne prints few breaks; a new paragraph at each turn of the argument).
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
  - `heading` a mangled, misplaced or missing piece title, numeral or section mark;
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

Per chunk: Greek words, English words, OCR rows (by kind), the pieces covered, the three spots you are least sure
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
