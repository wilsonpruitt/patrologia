# TRANSLATOR CARD — one chunk of Procopius, *Rhetorica* (PG 87.3, 2793–2842)

Adapted from `translate/moschus-pratum/CARD.md` (2026-11-05, Fable). **The Greek you are given is a machine reading**
of Migne's plate (Kraken, a fine-tuned polytonic OCR model), passed once through a rule script that fixes the
commonest accent, breathing and elision-glyph slips (`scripts/kt-rules.py`). Nobody has checked it against the
page. So you have two jobs, equally weighted:
**translate**, and **report every place the Greek you were given is not what the plate must say.**
Your reports are what we check against the page images; they replace a separate reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary, the style anchor and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/procopius-rhetorica/<id>.en.md` in **one**
   Write (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work — three pieces under one name

Migne prints three rhetorical pieces under **Procopius of Gaza** (c. 465–c. 528), head of the Gaza school of
rhetoric, teacher of Choricius:

1. **Panegyric on the Emperor Anastasius** (cols 2793–2825; chunks pr-001 – pr-003), c. 502–515, delivered at
   Gaza on the arrival of the emperor's image. Genuine. Edited by Villoison from cod. Marc. gr. 428, with his own
   Latin version in the facing column and his numbered notes at the foot. Thirty sections (Αʹ … Λʹ): proem;
   Epidamnus (Dyrrachium), Anastasius's birthplace; his character and rise; the Isaurian and Arab wars; justice;
   the abolition of the chrysargyron; the suppression of the pantomimes and beast-shows; benefactions to
   cities (Hierapolis's aqueduct, Caesarea's harbour, the Pharos at Alexandria, the Long Wall from the Euxine
   to the Propontis); comparison with Cyrus, Agesilaus, Alexander and Philip; peroration.
2. **On Hagia Sophia** (cols 2827–2837; chunk pr-004). ⚠ **This is not Procopius of Gaza: it is Procopius of
   CAESAREA, *Buildings* I.1**, the description of Justinian's church, which Combefis excerpted (his *Monitum
   ad Procopii rhetoris locum de Sancta Sophia* precedes it) and Migne printed here under the Gaza name.
   Translate what Migne prints; the attribution is handled in the site's about-text, not in your English.
   Historian's prose, not epideictic: the Nika riot, the burning, the plan, Anthemius and Isidore, the dome,
   the arches and piers, the first collapse and the repairs.
3. **Monody on Hagia Sophia, fallen by earthquake** (cols 2839–2842; chunk pr-005), from cod. Matrit. (Iriarte
   p. 264), a lament on the collapse of the dome — if that is the 558 collapse, it cannot be Gaza's, who was dead
   by then; the attribution is contested. Translate it as the plate gives it.

**Register:** this is **classicizing Attic rhetoric of the Gaza school** — long balanced periods, μέν … δέ
antithesis, figures (the meadow, the hand held out to the sea, the lover rising to the sight), classical
allusion on every page (Thucydides on Epidamnus, the Phaeacians, Eumolpus, Cyrus, Agesilaus), and almost no
Scripture. **Keep the English formal, periodic and clear.** The period is the unit: carry Procopius's sentence
whole wherever English can bear it; split only where the Greek already has a colon (·) or a full stop. Never
flatten a figure into plain statement — the image is the argument. No archaism beyond the house rule on *thou*.
The rules of `translation-style.md` § "Late-antique panegyric and ekphrasis" are repeated in short below (do not
open that file); read **the style anchor at the foot of this card: match its sentence length, its handling of μέν/δέ and γάρ,
and its vocabulary.**

House rules from our shipped PG English:
- **Second person is a number marker**: *thou/thee/thy* for a singular addressee, *you* for a plural. The
  Panegyric addresses the emperor in the singular throughout, so it is *thou* from the first line to the last;
  the orator's own "we" (τολμήσομεν) stays "we". Never *thou* for reverence alone, never *you* to soften.
- **βασιλεύς = "emperor"** for Anastasius and Justinian, **"king"** for Cyrus, Agesilaus, Philip, Alexander and
  the kings of myth; βασιλεία = "empire" (the office/realm) or "reign" (the time); ἡγεμονία = "rule"; ἀρχή =
  "rule" or "empire" by sense. τὸ Κρεῖττον = "the Higher Power"; Θεός = "God".
- **Greek divine and heroic names stay Greek** (Zeus, Ares, Heracles, Pythian Apollo), even where Villoison's
  Latin has Jupiter and Hercules. Place names in their established English forms (Epidamnus, Hierapolis,
  Caesarea, Alexandria, the Euxine, the Propontis, Byzantium); peoples likewise (Isaurians, Arabs, Phaeacians).
- **Section letter-numerals** (Αʹ, Βʹ, … Λʹ) are section MARKS: render as an arabic numeral with a period
  ("1.", "2."), opening its own paragraph. Numerals **in the prose** are English words. The Kraken misreads the
  marks (Πʹ for Ηʹ, Αʹ for Ιʹ or Λʹ, and the stigma Ϛʹ in 6, 16, 26 is usually lost): **number by sequence, with
  the Latin column's Roman numeral as the witness**, and report each bad one once as kind `heading`.
- **Scripture, where it occurs** (Monody): translate the Greek as printed; a familiar verse may echo traditional
  English where the Greek matches it. Never substitute a standard version.
- Particles by weight, not by formula: γάρ "for", οὖν "so / then", μέν … δέ by antithesis ("while … ", "on the
  one hand" only where the balance is the point), καί … καί "both … and".

## The scaffold

Each page block gives the Greek column's lines, tagged `pNNNN.LL` (page file + line), then the facing **Latin
column** of the same page (archive.org OCR of Migne's Latin version — Villoison's for the Panegyric, Combefis's
for the other two). The Latin is a **witness to the sense, never a source**: Villoison is a careful translator
and often smooths a hard Greek phrase; where he does, translate the Greek and give the Latin in a T note. Its
whole page is shown, so it can start earlier or run later than your Greek lines.
A word broken across a line end is hyphenated (`ἁμιλ-` / `λωμένης`); join it in your head, and never report a
correct hyphenation.

**Villoison's note numbers** `(1)` … `(72)` are printed inside the Greek and the Kraken garbles or drops them
(`δωρεῶν(,` for `δωρεῶν (1),`). **Do not reproduce them**; they are read separately. A leftover is kind `stray`.
**Running heads** (`PROCOPII GAZÆI`, `PANEGYRICUS IN IMP. ANASTASIUM`), column numbers, Latin headings
(`MONITUM`, `NOTÆ`, `ARGUMENTUM`) and title lines leaked into the Greek are kind `stray`; report a work title
once as kind `heading`.

## Your English file, exactly this shape

    title: Panegyric on the Emperor Anastasius, 1–7
    ---
    [2793] PANEGYRIC ON THE EMPEROR ANASTASIUS

    1. [b: A] Already, most mighty emperor, every city, proud in thee … [b: A] … [2795] …[^1]

    2. For to thee fortune, …
    …
    ## Notes
    [^1]: …
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0012.01 | Ανατῶν δωρεῶν(,ἀμοβῆς | ναι τῶν δωρεῶν (1), ἀμοιβῆς | high | ocr | band A glued; note number; ι lost |

- **Column anchors:** `[2793]` (the Greek column number from the scaffold's page header) at the start of the
  chunk, and at the point where each new page's Greek begins.
- **Work titles:** the first chunk of each piece opens with its title in capitals on its own line (`PANEGYRIC ON
  THE EMPEROR ANASTASIUS` · `ON HAGIA SOPHIA` · `MONODY ON HAGIA SOPHIA, FALLEN BY EARTHQUAKE`). A section that
  runs on from the previous chunk starts without a number.
- **Band letters:** Migne prints A/B/C/D in the gutter. The Kraken often glues the letter to the end (or start) of
  a line as a stray capital Α/Β/Γ/Δ or A/B/C/D (`…ἐπὶ Α`, `Αναι τῶν`). Put `[b: X]` (Latin letter) in the English at
  the point that line's text falls, and **do not** report the glued letter as a misread.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds:
  T (textual: what you read and why, incl. where the Latin smooths the Greek), S (source: a classical or
  scriptural passage located — Thucydides I.24 for Epidamnus, Homer for the Phaeacians), P (person, place or
  event, only where a reader would be lost: one line — Eumolpus, the chrysargyron, the Nika riot). Keep them
  short. No note for an ordinary OCR fix you logged in the table: the table is the record.
- Paragraphs follow the Greek's sense units (section numbers start new ones). Every clause rendered; nothing
  summarized; no sentence of the Greek made two by preference.

## The OCR table (the half of the job that replaces the plate read)

One row per corrupt spot, in text order: `| tag | printed | reading | sure | kind | why |`

- **printed** = the token(s) exactly as in your scaffold; **reading** = what the plate must have; **sure** =
  `high` / `medium` / `low`.
- **kind**:
  - `ocr` a wrong letter, accent, breathing, iota subscript, or punctuation that you can correct, **where you judge
    the machine misread a correctly printed page**;
  - `space` words wrongly joined or split;
  - `heading` a mangled section mark or title;
  - `print` Migne's (Villoison's) own misprint, or a reading the plate really has though it is wrong: the English
    follows your correction with a T note;
  - `stray` a running head, column number, note number or heading leaked into the text;
  - `doubt` something is wrong but you cannot say what. The English then has `[?]` plus a T note.
- ⚠ **`ocr` or `print`?** A non-word, a broken letter, a Latin letter inside a Greek word, a lost space is `ocr`;
  **a real Greek word that is simply the wrong word, where the Latin translator read the same wrong word, is
  `print` or `doubt`, not `ocr`.** Villoison prints a manuscript text with its own corruptions (a μέν without its
  δέ, an unmetrical name); those are `print`, and his notes often say so. We check every row on the image either
  way; the label tells us which way to look.
- **Report accent and breathing errors too.** The Greek is displayed beside the English, so a wrong accent is a
  visible error. What the rule pass leaves is mostly: rough vs smooth on real words (ἣ / ἢ, οὗ / οὐ, ᾧ / ὦ), a
  missing iota subscript on a real form (τῇ, ἐν τῷ, subjunctives -ῃ / -ῃς), circumflex vs acute (καλὼς for
  καλῶς), and accents on words the rule could not place. `why` = "accent" / "breathing" / "subscript".
- Greek confusions to expect: ο/σ/ϲ, ε/ο/θ, η/ν/ῃ, ι/ί/ἰ, υ/ν, κ/χ, β/θ, π/τ, ρ/φ, λ/Λ/Α, ς at a word's end, Latin
  letters mixed into Greek words, dropped or doubled letters (τοῖςς), two words run together, a dropped letter at
  a line edge.
- ⛔ **Not a misread:** Attic forms (θάλαττα, γλῶττα, θᾶττον, ξυν-), Procopius of Caesarea's Ionicisms (ξυνενηνέχθη,
  ἐς), classical spellings of names as printed, Migne's comma before a quotation, and anything you merely find
  inelegant. Do not correct the author's grammar or his history.
- **Use the Latin as your best detector.** Where the Greek and the Latin disagree on a word, a name, a number or
  a negative, look hard at the Greek: it is usually the OCR. Where the Latin agrees with a surprising Greek
  reading, the reading is probably real (and if it is wrong, it is `print`).
- Expect roughly **5–20 rows per 1,000 Greek words** after the rule pass (this volume's type is cleaner than
  Moschus's). If you find far fewer, read the Greek again, line by line, accents included.

## Report (your final message, short)

Per chunk: Greek words, English words, OCR rows (by kind), the sections covered (first–last), the three spots you
are least sure of, any glossary term you had to decide (Greek → English, one line each).

---

# STYLE ANCHOR — Panegyric §§ 1–2 (p-0011:6 – p-0013:22), translated by the coordinator (Fable, 2026-11-05; column anchor corrected 2795→2796 and band letters added by the pr-001 translator — p-0012's GREEK column is 2796)

**pr-001 carries this English verbatim** (notes and OCR rows included; renumber the notes if yours come first —
they will not, these are the opening sections) and continues from section 3 at p0013.23. Every other chunk
matches it.

    title: Panegyric on the Emperor Anastasius, 1–7
    ---
    [2793] PANEGYRIC ON THE EMPEROR ANASTASIUS

    1. [b: A] Already, most mighty emperor, every city, proud in thee and glorying in thy trophies, and having learned
    by experience what happiness truly is, contriving by every means not to be seen lagging behind thy gifts,
    [2796] [b: A] is at a loss for a requital to contend with thy deeds;[^1] and hence admires its benefactor the more,
    since by the good he does he outstrips the requitals of those he has done good to. For this is an adornment
    that befits an emperor: to conquer, together with his enemies, his subjects too — the one by arms, the other
    by the abundance of the goods at his command, and both by his virtues. But our city, having received through
    his image the benefactor himself,[^2] like some passionate lover rises up to the sight and rouses every age:
    father stands beside child, old man comes with young, and points, and together they leap for joy at the
    sight. Now perhaps I shall seem, alone among the rest, to be venturing upon so vast a mass of deeds, and to
    have such boldness that I have stood up in the middle of the theatre and dare to say something, and will not
    stop though someone threaten. But it is not so: the whole city is moved to a just requital for the good it
    receives; and judging the time not enough for each man to speak in turn, all by common vote content
    themselves with the orator's voice; for he who is put forward to speak on the city's behalf gives utterance,
    with one tongue, to the minds of all. And from this it comes about, against all reason, that I am at once
    confident and afraid. That the matter, drawing in nothing low, lifts the speech to a height and sets the
    speaker in abundance — this is a great and splendid piece of good fortune for me; but I fear lest, struck
    dumb by the sheer excess and multitude of what is there, and not knowing what use to make of what lies
    before me, I turn the wealth into speechlessness, and stand there at a loss. As in a pleasant meadow that
    offers a varied sight, all is beautiful to look upon; but the viewer, since all alike delight him, not knowing
    what to prefer and pluck, stands holding off from all alike. Nevertheless, though this is how things stand,
    words, which dare everything, now too grow bold just the same, and leap about in disorder, and come forward
    as if revelling in delight, trusting to fortune rather than judgment, and reckoning nothing of what is to
    come. So we shall dare something even beyond our power, holding out our eagerness as plea enough for pardon.

    2. For to thee fortune, as though divining the future well, furnished everything that befits the rule of the
    Romans; and first, as was right, she bestows a native city that surpasses the happiness of the others. For
    Epidamnus the historians sing,[^3] and report cries out along with them: a city thrust out from the mainland
    [2797] [b: A] into the sea, as though inhabiting each of the two elements, and having the advantage in all that
    land and sea know how to bear; for there one may both live on an island, in part, and be mainlanders, and
    keep clear of what is troublesome in both, enjoying either one purely.[^4] For it lies out ahead as though
    holding out a hand to those coming from the open sea, and meeting them kindly; and a man sailing out over
    the Ionian leans out from the ship and turns toward it, and feasts his gaze with the pleasure of what he
    sees. Epidamnus, earth-born, came forth from here and bestows his name upon the city; and later moves
    Pythian Apollo too to love of it, and he adorned it with a colony of Greeks, as a seer, surely, who knew the
    future well: that the common benefactor of all land and sea must appear from here. So then, if thou hast
    marvelled to hear that the Athenians are earth-born, thou mayest take pride along with them; if thou admirest the
    Phaeacians' kindness to strangers, the city is from them.[^5] It has, besides, the stock of the Corinthians
    and the ambition of Sparta, and Heracles for an ancestor, and through him Zeus.

    ## Notes
    [^1]: T. ἀμοιβῆς ἀπορεῖ τοῖς ἔργοις ἁμιλλωμένης: the city lacks a requital that could compete with the
    emperor's deeds. Villoison: *quaerit quomodo beneficia repenset gratia referenda*.
    [^2]: P. The occasion is the arrival at Gaza of the emperor's image (εἰκών), set up and greeted by the city.
    [^3]: S. Thucydides I.24 opens his account of the Corcyraean affair with Epidamnus, "a city on the right as
    one sails into the Ionian gulf"; Epidamnus (Dyrrachium, Durrës) was Anastasius's birthplace.
    [^4]: T. τῷ μὲν θατέρου ψιλῶς ἀπολαύειν: a μέν with no answering δέ, and θατέρου ("of the other") hangs; the
    sense wanted is "enjoying the good of each unmixed." Villoison smooths it: *quae bona, iis plane frui*.
    Rendered as printed.
    [^5]: P. Epidamnus was a colony of Corcyra (identified with Homer's Phaeacia) with a Corinthian founder;
    Corinth's kings traced themselves to Heracles. The orator stacks every pedigree the city can claim.

    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0011.06 | Αʹ.Ἤδη | Αʹ. Ἤδη | high | space | section mark spacing |
    | p0012.01 | Ανατῶν δωρεῶν(,ἀμοβῆς | ναι τῶν δωρεῶν (1), ἀμοιβῆς | high | ocr | band A glued to ναι; note number (1) garbled; ι lost in ἀμοιβῆς — plate read at the running head |
    | p0012.42 | καλὼς | καλῶς | high | ocr | accent |
    | p0013.30 | τοῖςς | τοῖς | high | ocr | doubled ς |
