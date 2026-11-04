# TRANSLATOR CARD — one chunk of John Moschus, *Pratum spirituale* (PG 87.3)

Adapted from `translate/dorotheus-doctrinae/CARD.md` (2026-11-04). **The Greek you are given is a machine reading**
of Migne's plate (Kraken, a fine-tuned polytonic OCR model), passed once through a rule script that fixes the
commonest accent, breathing and elision-glyph slips (`scripts/kt-rules.py`). Nobody has checked it against the
page. So you have two jobs, equally weighted:
**translate**, and **report every place the Greek you were given is not what the plate must say.**
Your reports are what we check against the page images; they replace a separate reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/moschus-pratum/<id>.en.md` in **one** Write
   (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work

John Moschus (d. 619 or 634), monk of the monastery of St Theodosius and of the New Laura in Palestine, travelled
with his disciple Sophronius (later patriarch of Jerusalem) through Palestine, Sinai, Egypt, Syria, Cyprus and on to
Rome, gathering stories of monks. The *Spiritual Meadow* (Λειμών) is some 219 short chapters: edifying anecdotes,
miracles, sayings, encounters with heretics, Saracens, soldiers, sailors and townspeople. Most open with an
informant: Διηγήσατο ἡμῖν ὁ ἀββᾶς … λέγων, ὅτι … ("Abba … told us …"). The chunk opening the work is the
dedication, addressed to Sophronius, which in Migne's heading is under the name John Eviratus.

**Register:** this is plain, colloquial, late Greek narrative, close to speech: paratactic (καί … καί …), with
direct speech, vernacular forms (ἦλθαν, εἶπαν, ἴδον, ἦλθέν μοι), Latin loanwords (κελλίον, φοσσάτον, νόμισμα) and
the everyday words of monks. **Keep the English plain and spoken, a storyteller's voice.** Never ornamental, never
archaising beyond the house rule below. Keep the repetitions; they are the style.

House rules from our shipped PG English (Dorotheus, same register):
- **Second person is a number marker**: *thou/thee/thy* for a singular addressee (σύ), *you* for a plural one
  (ὑμεῖς). Never *thou* for reverence alone. In narrative dialogue this matters on every page.
- **ἀββᾶς = "abba"** (lower case before a name: "abba Leontius"); **γέρων = "the elder"**; τέκνον = "child";
  ἀδελφέ = "brother"; ἀδελφοί = "brethren".
- **Scripture: translate the Greek as printed**, however loose. A familiar verse may echo traditional English
  where the Greek matches it. Never substitute a standard version.
- Names: established English forms for well-known people and places (Jerusalem, Alexandria, Antioch, Jordan,
  Sinai, Gregory, Cyril). Monastic names and small places as printed, Latinised in the ordinary way (Leontius,
  Polychronius, Theodosius, the Laura of the Towers = τῶν Πυργίων).
- Particles by weight, not by formula: γάρ "for", οὖν "so / then", ὅτι before direct speech is a quotation mark,
  not "that".

## The scaffold

Each page block gives the Greek column's lines, tagged `pNNNN.LL` (page file + line), then the facing **Latin
column** of the same page (archive.org OCR of Migne's Latin version). The Latin is a **witness to the sense, never
a source**: the translator paraphrases, and his OCR is noisy. Its whole page is shown, so it can start earlier or run
later than your Greek lines.
A word broken across a line end is hyphenated (`κοινο-` / `βίου`); join it in your head, and never report a correct
hyphenation.

**Chapter heads are LATIN, printed inside the Greek column**: `CAPUT IV.` The Kraken reads them as Greek garbage
(`CλΡΤΙν.`, `ΣΑΡΥΤ v.`, `σαΡυΤ xLi.`), and sometimes drops them. **Take each chapter's number from the Latin
column's CAPUT heading** (the Latin OCR reads Roman numerals well), checked against the sequence. Report a mangled
head once, as kind `heading`; do not report it letter by letter. Running heads (`ΙΟΑΝΝΙS ΜΟSCΗΙ`, `PRATUM
SPIRITUALE`) and column numbers that leak into the Greek are kind `stray`. Latin note headings (`NOTÆ`, `Νοταε.`)
inside the Greek column are kind `stray` too: Migne's notes are read separately.

## Your English file, exactly this shape

    title: The Spiritual Meadow, chapters 4–9
    ---
    [2855] CHAPTER 4

    Abba Leontius, of the coenobium of our holy father Theodosius, told us: "After the new laurites were
    driven out of the New Laura, I went and settled in that same laura. [b: C] One Sunday I went down …"[^1]
    …
    ## Notes
    [^1]: …
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0042.23 | CλΡΤΙν. | CAPUT IV. | high | heading | Latin head |

- **Column anchors:** `[2855]` (the Greek column number from the page header) at the start of the chunk, and at the
  point where each new page's Greek begins.
- **Chapters:** each starts its own paragraph block with a line `CHAPTER N` (arabic). The dedication has no number:
  head it `DEDICATION`. A chapter that runs on from the previous chunk starts without a heading.
- **Band letters:** Migne prints A/B/C/D in the gutter. The Kraken often glues the letter to the end (or start) of a
  line as a stray capital Α/Β/Γ/Δ or A/B/C/D (`…ἄνθρωπον, Β`, `Αθος`). Put `[b: X]` (Latin letter) in the English at
  the point that line's text falls, and **do not** report the glued letter as a misread.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds:
  T (textual: what you read and why), S (source: Scripture or saying located), P (person or place, only where a
  reader would be lost: one line). Keep them short. No note for an ordinary OCR fix you logged in the table: the
  table is the record.
- Paragraphs follow the Greek's sense units. Every clause rendered; nothing summarized.

## The OCR table (the half of the job that replaces the plate read)

One row per corrupt spot, in text order: `| tag | printed | reading | sure | kind | why |`

- **printed** = the token(s) exactly as in your scaffold; **reading** = what the plate must have; **sure** =
  `high` / `medium` / `low`.
- **kind**:
  - `ocr` a wrong letter, accent, breathing, iota subscript, or punctuation that you can correct, **where you judge
    the machine misread a correctly printed page**;
  - `space` words wrongly joined or split (`ἐν τῇ Ἐκκλη-σίᾳμεταλαβεῖν` → `σίᾳ μεταλαβεῖν`);
  - `heading` a mangled chapter head or title;
  - `print` Migne's own misprint, or a reading the plate really has though it is wrong: the English follows your
    correction with a T note;
  - `stray` a running head, column number or note heading leaked into the text;
  - `doubt` something is wrong but you cannot say what. The English then has `[?]` plus a T note.
- ⚠ **`ocr` or `print`? The pilot on Dorotheus found the translator labelled every one of Migne's own misprints
  `ocr`** (a Scripture word set wrong, a word repeated, a case ending the grammar does not want). Rule of thumb: a
  non-word, a broken letter, a Latin letter inside a Greek word, a lost space is `ocr`; **a real Greek word that is
  simply the wrong word, where the Latin translator read the same wrong word, is `print` or `doubt`, not `ocr`.**
  We check every row on the image either way; the label tells us which way to look.
- **Report accent and breathing errors too.** The Greek is displayed beside the English, so a wrong accent is a
  visible error. The rule pass already set grave/acute by position and fixed breathings on non-words, so what is
  left is mostly: rough vs smooth on real words (ἣ / ἢ, οὗ / οὐ, ᾧ / ὦ), missing iota subscript on a real form
  (τῇ, ἐν τῷ, subjunctives -ῃ / -ῃς), circumflex vs acute, and accents on words the rule could not place. Mark
  these with `why` = "accent" / "breathing" / "subscript".
- Greek confusions to expect from any OCR: ο/σ/ϲ, ε/ο/θ, η/ν/ῃ, ι/ί/ἰ, υ/ν, κ/χ, β/θ, π/τ, ρ/φ, λ/Λ/Α, ς at the
  end of a word, Latin letters mixed into Greek words, dropped or doubled letters, two words run together
  (`Ἐξότουἡγιάσθη`), a dropped letter at a line edge.
- ⛔ **Not a misread:** Byzantine and vernacular forms that are real (ἦλθαν, εἶπαν, ἴδον, ἤμην, ἐκαθέσθη, movable ν
  before a consonant: ἦλθέν μοι), Moschus's spellings of names and places, Migne's comma before a quotation, and
  anything you merely find inelegant. Do not correct Moschus's grammar or his Scripture.
- **Use the Latin as your best detector.** Where the Greek and the Latin disagree on a word, a name, a number or a
  negative, look hard at the Greek: it is usually the OCR. Where the Latin agrees with a surprising Greek reading,
  the reading is probably real (and if it is wrong, it is `print`).
- Expect roughly **10–30 rows per 1,000 Greek words** after the rule pass. If you find far fewer, read the Greek
  again, line by line, accents included.

## Report (your final message, short)

Per chunk: Greek words, English words, OCR rows (by kind), the chapters covered (first–last), the three spots you
are least sure of, any glossary term you had to decide (Greek → English, one line each).
