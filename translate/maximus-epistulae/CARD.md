# TRANSLATOR CARD — one chunk of Maximus the Confessor, *Epistulae* (PG 91.364–649)

Adapted from `translate/sophronius-orationes/CARD.md` (2026-11-06, Fable). **The Greek you are given is a machine
reading of Migne's plate** — not Kraken this time but a vision read by the API, line for line, afterwards checked once
against the page image (every line of every page; 552 corrections; the 298 readings the checker could not settle
travel with the text as the "open doubts" listed under each page). It is better than a raw OCR and worse than a
transcription: expect real-but-wrong Greek words (ψύχος for ψόγος), a dropped particle, a breathing on a capital, κ/χ,
and Combefis's note calls read as text. So you have two jobs, equally weighted:
**translate**, and **report every place the Greek you were given is not what the plate must say.**
Your reports are what we check against the page images; they replace a second reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary, the style anchor and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/maximus-epistulae/<id>.en.md` in **one** Write
   (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work — forty-five letters

Migne prints Combefis's edition (1675) of the **letters of Maximus the Confessor** (c. 580–662), monk, the
theologian of the two wills, with Combefis's facing Latin: forty-five pieces, numbered Α΄ … ΜΕ΄, to lay officials,
monks, nuns, presbyters and bishops, written mostly from Africa in the 630s and 640s. Three kinds, often inside one
letter: **paraenetic** (Letters 1–11, 20–45: the ascetic life, love, grief, the soul, the duties of office, consolation
and commendation — Maximus's dense abstract prose on γνώμη, ἕξις, διάθεσις, κίνησις and the passions); **dogmatic**
(Letters 12–15 and 19: against Severus and the "one composite nature", on essence and hypostasis, common and proper,
number and difference — syllogistic, with Porphyry's genus/species/individual and the whole Chalcedonian table); and
a few **business** letters (16–18, 28–31, 44–45: a nun who left her monastery, a bishop's transfer, a recommendation).
Combefis's heading gives each letter its number and addressee (Τοῦ αὐτοῦ πρὸς …); several are to the same man (John
the Cubicularius, Thalassius the presbyter, abba Polychronius, Peter the *illustris*).

| letter | pdf pages (first:line) | addressee, as printed | chunks |
|---|---|---|---|
| 1 | 200:1 | hortatory discourse to George, prefect of Africa | me-001–003 |
| 2 | 214:46 | John the Cubicularius, on love | me-004–005 |
| 3, 4 | 222:33, 225:1 | the same | me-006 |
| 5, 6 | 228:30, 230:30 | Constantine; the most holy archbishop (John), on the soul | me-007 |
| 7, 8 | 235:3, 238:28 | John the presbyter; the same | me-008 |
| 9, 10, 11 | 241:28, 243:7, 245:11 | Thalassius the presbyter; John the Cubicularius; an abbess | me-009 |
| 12 | 248:1 | John the Cubicularius, on the right doctrines, against Severus | me-010–014 |
| 13 | 279:21 | Peter the *illustris* | me-015–017 |
| 14 | 291:13 | the same, a dogmatic letter | me-018 |
| 15 | 296:39 | on common and proper, that is essence and hypostasis (to Cosmas) | me-019–021 |
| 16, 17 | 312:46, 314:29 | the same; Julian the Scholasticus | me-022 |
| 18, 19 | 316:45, 325:30 | in the name of George the prefect; Pyrrhus | me-023 |
| 20–23 | 333:15, 336:19, 337:20, 337:41 | Marinus the monk; a bishop; Auxentius; Stephen the presbyter | me-024 |
| 24–27 | 338:23, 341:6, 342:1, 343:21 | Constantine the Sacellarius; Conon; Thalassius; John the Cubicularius | me-025 |
| 28–36 | 344:39 … 349:29 | Cyrisicius the bishop ×2; John the bishop ×2; abba Polychronius ×5 | me-026 |
| 37–43 | 350:8 … 353:19 | "the same" ×6 (Thalassius from 40); John the Cubicularius | me-027 |
| 44, 45 | 355:40, 358:41 | John the Cubicularius; the same | me-028 |

**Numbering.** The machine garbles some numerals (Γ΄ for Ϛ΄ and for Ι΄, ΙΑ΄ for ΜΔ΄, the ΙΒ΄ of Letter 12 dropped):
**number by this table**, and report each bad or missing numeral once as kind `heading`. Inside a few letters Maximus
numbers his points (α΄ … ζ΄ at the end of Letter 1; α΄–γ΄ at the end of 2 and in 6; a list in 15): render these as
arabic numerals with a period ("1.", "2."), each opening its own paragraph; nowhere else are there section marks.

## One voice, two registers

**(i) The paraenetic letters.** Maximus writes in long periods built of abstract nouns, nominalized adjectives (τὸ
ὡσαύτως ἔχειν, τὸ εὐέμπτωτον, τὸ βάσιμον, τὸ ἥμερον) and participial chains; the anchor shows the English these need:
**"the holding ever the same", "the firm footing", "the gentleness of thy manner" — a noun for his noun, never a
paraphrase into a verb.** His argument runs by explicit inference (γάρ … ἄρα … εἰ γάρ … πῶς;): keep every "for",
"then", "if", "how?". The anaphoras (μὴ χρόνος … μὴ ἀπειλή … μὴ λόγος … ; μὴ νόσος, μὴ ὑγεία, μὴ πλοῦτος …) keep every
member at full count. The ascetic vocabulary is the glossary's second table, one word each.

**(ii) The dogmatic letters (12–15, 19).** The Christological vocabulary is **the glossary's first table, inherited
from the Sophronius Synodical Letter and binding**: essence, nature, hypostasis, person, operation, will/volition,
property/idiom, union, difference, composite, identity/otherness, the four Chalcedonian adverbs. Maximus argues by
dilemma (ἤτοι … ἤ …: either generic or singular), by reductio (εἰ δὲ … πῶς …), and by the logic of genus, species,
individual, subject, number: **render the logic as logic**, every term by its glossary word, the syllogism's steps in
their order, no smoothing. A sentence that is a definition stays a definition ("Hypostasis is …"). Severus's own
phrases ("one composite nature", "from two natures") are rendered as he says them; Maximus's refutation keeps its
edge (Σευήρου … μανία = "Severus's madness"; the Latin is often milder).

**House rules from our shipped PG English (`translation-style.md` § "Seventh-century ascetic and dogmatic letter
(Maximus)"; do not open that file):**
- **Second person is a number marker**: *thou/thee/thy* for a singular addressee, *you* for a plural. Most letters
  address one person in the singular (σε, σου, δέσποτά μου: *thou*); where Maximus turns to the plural (καθ᾿ ὑμᾶς
  εὐλογημένοις, the anchor; the nuns of Letter 18; "you" to a community) it is *you*. **Never** *thou* for a Greek
  plural, never *you* for a Greek singular. Maximus's own "we the lowly" (ἡμεῖς οἱ ταπεινοί) stays plural.
- **Terms are fixed**: never vary a glossary word for elegance; a doublet (τρεπτὸς … καὶ ἀλλοιωτός, εὐέμπτωτον καὶ
  εὐσκέδαστον) is two words, never one word and a synonym.
- **γνώμη = inclination**, always (not "opinion", "mind", "judgement"); κρίσις = judgement; διάθεσις = disposition;
  ἕξις = habit; σχέσις = relation; λόγος/τρόπος = principle/mode in the technical pair, by sense elsewhere (see the
  glossary); μοναδικός = singular, never "monadic".
- **Scripture**: translate the Greek as printed, with an S note giving the reference (book chapter:verse; LXX
  numbering for Psalms). Maximus quotes freely and weaves verses into his own sentence: render what is printed, mark
  the reference, never substitute a standard version.
- **Titles**: each letter's first line in capitals: `LETTER 2` (Letter 1 adds Combefis's title: `LETTER 1 — HORTATORY
  DISCOURSE IN THE FORM OF A LETTER`); then the printed heading's address clause in italics on the next line, as
  printed (`*Of the same, to John the Cubicularius, on love.*`). A chunk that continues a letter starts without
  either. **Ranks and offices keep their Latin or Greek form** (cubicularius, *illustris*, sacellarius, scholasticus,
  prefect, abba, presbyter): the glossary's third table.
- Particles by weight, not by formula: γάρ "for", οὖν "then / so", ἄρα "therefore / then", μέν … δέ by antithesis,
  τοίνυν "then", ἀμέλει "of course", μέν τοι "to be sure".
- **The Latin column is a witness, never a source.** Combefis's Latin is learned and paraphrastic (it expands, supplies
  verbs, turns Maximus's nouns into clauses: *mentis proposito ac voluntate* for κατὰ γνώμην). Translate the Greek;
  where the Latin differs in substance, a T note.

## The scaffold

Each page block gives the Greek column's lines, tagged `pNNNN.LL` (page file + line), then the facing **Latin
column** of the same page (archive.org OCR of Combefis's Latin, noisy). The Latin's whole page is shown, so it can
start earlier or run later than your Greek lines. **Take the Greek column number from the scaffold's page header
every time** (the Greek stands right on even pdf pages, left on odd). A word broken across a line end is hyphenated
(`πο-` / `θεῖ`); join it in your head, and never report a correct hyphenation.

**Open doubts.** Under each page the scaffold lists the readings the plate check could not settle ("kept X (blind
read Y): note") and, for pages Migne's scanner photographed twice, the words where the second read of the same leaf
differs. **Read every one.** Where the choice changes the English, decide from the sense and the Latin, use your
choice, and log it as a row of kind `doubt` (printed = the kept form, reading = the form you used, why = "plate doubt:
…"); where it changes nothing in the English (a breathing, an accent, κ/χ where both construe), ignore it — do not log.

**Combefis's note calls** are printed inside the Greek as `(a)`, `(b)` … and `(1)`, `(2)` …, sometimes read as
superscript digits (¹⁹): **do not reproduce them**; the foot-of-page apparatus is read separately. A leftover is kind
`stray`. **Running heads** (`S. MAXIMI CONFESSORIS`, `EPISTOLÆ`), column numbers and Latin lines leaked into the Greek
are kind `stray`. **Band letters** (Migne's A/B/C/D in the gutter) were not read with this text and are not yours to
place: the build adds them. Do not write `[b: X]`.

## Your English file, exactly this shape

    title: Letter 12, to John the Cubicularius, 2
    ---
    [468] … the composite hypostasis …[^1] …

    ## Notes
    [^1]: …
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0253.07 | ψύχος | ψόγος | high | ocr | beside ἔπαινος |

- **`title:`** = `Letter N, to <addressee>` and, where a letter spans chunks, the chunk's number within the letter
  (`Letter 1, to George, prefect of Africa, 2`); a chunk holding several letters: `Letters 9–11`.
- **Column anchors:** `[364]` (the Greek column number from the scaffold's page header) at the start of the chunk,
  and at the point where each new page's Greek begins.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds:
  T (textual: what you read and why, incl. where the Latin differs; a glossary term on its first use in a letter
  where the reader needs it), S (source: a scriptural or patristic passage located — Maximus quotes Gregory
  Nazianzen, Dionysius, Cyril, the Cappadocians; name the work where you can, "cf." where you cannot), P (person,
  place or event, one line, only where a reader would be lost: the addressee on first appearance, Severus, Pyrrhus,
  the Arab invasion behind Letter 14). Keep them short. No note for an ordinary OCR fix you logged in the table.
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
  - `heading` a mangled, misplaced or missing letter numeral or section mark;
  - `print` Combefis's/Migne's own misprint, or a reading the plate really has though it is wrong: the English
    follows your correction with a T note;
  - `stray` a note call, running head, column number or Latin line leaked into the text;
  - `doubt` an open doubt you settled because the English depends on it (above), or something wrong you cannot
    name — then the English has `[?]` plus a T note.
- ⚠ **`ocr` or `print`?** A non-word, a Latin letter inside a Greek word, a lost space is `ocr`; **a real Greek
  word that is simply the wrong word, where Combefis's Latin read the same wrong word, is `print` or `doubt`, not
  `ocr`.** We check every row on the image either way; the label tells us which way to look.
- **Report accent and breathing errors too.** The Greek is displayed beside the English. This read's known residue:
  breathings on capitals (Ἓν/ἓν), rough vs smooth on real words (ἣ/ἢ, οὗ/οὐ), a missing iota subscript on a real form,
  κ/χ (οὐκ/οὐχ), a doubled or dropped letter at a line edge. `why` = "accent" / "breathing" / "subscript".
- ⛔ **Not a misread:** Maximus's compounds and coinages (θεωτικός, συνέκδημος, ἀντιλύπησις, συνεπικινουμένην), the
  Attic forms, the LXX's own words in a quotation, Migne's comma before a quotation, and anything you merely find
  inelegant. Do not correct the author's grammar, his logic or his theology.
- **Use the Latin as your best detector.** Where the Greek and the Latin disagree on a word, a name, a number or a
  negative, look hard at the Greek. Where the Latin agrees with a surprising Greek reading, the reading is probably
  real (and if it is wrong, it is `print`).
- Expect roughly **3–10 rows per 1,000 Greek words** (the anchor ran 6 on 590). If you find far fewer, read the Greek
  again, line by line, accents included.

## Report (your final message, short)

Per chunk: Greek words, English words, OCR rows (by kind), the letters covered, the three spots you are least sure
of, any glossary term you had to decide (Greek → English, one line each).

## Where me-001 begins

- **me-001** carries the Letter 1 anchor verbatim and continues at **p-0201:45** (`Τοῦτο δὲ γενήσεται, πῶς;`).
---

# STYLE ANCHOR — Letter 1, opening (p-0200:1 – p-0201:44), translated by the coordinator (Fable, 2026-11-06)

**me-001 carries this English verbatim** (notes and OCR rows included — renumber nothing, these are the opening
lines) and continues at **p-0201:45** (`Τοῦτο δὲ γενήσεται, πῶς; Εἰ πάντα πιστεύσοιμεν τῷ Θεῷ …`). Every other chunk
matches it. Greek ≈ 590 words → English ≈ 820 (ratio ≈ 1.4 on this paraenetic opening; the dogmatic letters run leaner,
≈ 1.25, because their vocabulary is one word to one word).

    title: Letter 1, to George, prefect of Africa, 1
    ---
    [364] LETTER 1 — HORTATORY DISCOURSE IN THE FORM OF A LETTER

    *To the servant of God, the lord George, the all-praised prefect of Africa.*[^1]

    No one of those deprived of light in whatever way, as I think, so longs to enjoy the sun's ray, as all we lowly ones,
    who have been richly filled with thy nobleness, long to behold thee present again and to enjoy thy beauty — thee,
    stamped, to be sure, with the divine ways of thy companion virtues, in which also, when thou wast formerly resident
    among us, we know thee to have shone forth with greatness of nature; through which we have been the more clearly
    taught that virtue is a matter of inclination,[^2] and not of rank, and that the imitation of God is a matter of
    disposition, and not of dignity. For they in whom — blessed ones such as you — the power of love toward God has
    been genuinely rooted in the depth of the soul, to these the holding ever the same with regard to the good has
    without doubt accrued; just as, of course, to those agog with the love of material things, the proneness to fall into
    a multitude of passions, and to be easily scattered. And with very good reason. For he who, by inclination,
    according to his aspiration, holds fast to the Divine — which is one and alone and impassible, and has nothing at
    all, from eternity, contemplated together with it or contemplated in addition to it as different in essence; for none
    of the things that are from it attains to it — he too is one and alone and impassible, having become, by his
    unrestrained inclining toward the One, one and alone and unchangeable. For if what is longed for by him is one and
    alone, and this is properly unchangeable, as being in essence unmoved because of its natural infinity — for the
    unmoved infinite has nowhere to be moved to — then he too, as being a lover of the One, has in all likelihood become
    one and alone and [365] unchangeable, as having made his inclination altogether unmoved from the One. But he who,
    in ignorance of the better, by his own inclination has bound the soul's yearning to material things, which are by
    nature changeable and alterable, and able nowhere at all to stand still, is of necessity changeable and passible and
    easily altered, having the soul's disposition moved along with, and suffering with, the things that are by nature
    moved and suffer.

    Let none, then, of the things that are, my blessed master, be able to put thee out of this thy good and deifying
    habit, which keeps thy inclination a fellow-traveller toward God; let not time, changing along with itself in
    disorder the drift of material affairs, alter the firm footing of thy inclination; let not the threat of men,
    holding out fear, shift the stability of thy good disposition; let not the speech of flattering men, sweetening the
    soul's hearing with its utterance, slacken its good tension; let not an appetite for retaliation, from being able,
    perchance, against someone, wholly corrupt the gentleness of thy manner; let not a longing for the glory that
    attends ruling diminish the aspiration of love toward the Divine. For not to rule over men is by no means a lack of
    glory, either with God or with men, but rather an increase of glory, inasmuch as the soul is set free from every
    kind of outward turmoil and care — so my account has it, and everyone who piously sees together what is fitting
    will, as I think, agree. For every man truly virtuous and God-loving is sufficient to himself for all happiness,
    needing no provision of outward things to procure it. For he who has made the reflections of the divine idioms[^3]
    his own distinguishing marks throughout his life has the fullness of all good things entire; through which the
    exact assimilation to God naturally comes to be in men — with which nothing of the things after God, when compared,
    is in any way to be set beside. And, to speak simply, let not sickness, not health, not wealth that is dragged
    below, not poverty in things that perish, not blame, not praise, not death, not life, not the present, not the
    future, nor at all any other of the things that are or come to be, be able to adulterate this philosophy,[^4] which
    has nurtured thee and brought thee forward to such renown both with God and with men.

    ## Notes
    [^1]: P. George, prefect (ἔπαρχος, *praefectus praetorio*) of Africa in the late 630s, the civil governor to whom
    Maximus, then in the African monasteries, writes Letters 1, 18 (in George's name) and 44–45. Migne's heading
    (Combefis's) gives the piece both titles: *Λόγος παραινετικός*, "hortatory discourse", and "in the form of a letter";
    the Latin runs *Sermo hortatorius epistolari forma*.
    [^2]: T. γνώμη, here and throughout the letters = *inclination*; γνωμικῶς = *by inclination* (the scholarship's
    "gnomic will"). Maximus opposes it to τάξις (rank) and, two lines on, pairs it with διάθεσις (disposition): the three
    are kept apart in the English as in the Greek. See the glossary.
    [^3]: T. τῶν θείων ἰδιωμάτων … τὰς ἐμφάσεις: the "idioms" are the characteristic marks proper to God (the glossary's
    ἰδίωμα, distinct from ἰδιότης = property), their "reflections" (ἐμφάσεις) the appearances of them in a life.
    [^4]: T. φιλοσοφία: the ascetic life itself, as in the monastic writers; not an argument but a way of living, which
    is why it can "nurture" a man.

    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0200.14 | διαθέσεως. ἀλλ᾿ | διαθέσεως, ἀλλ᾿ | high | ocr | punctuation: the clause runs on (καὶ διαθέσεως, ἀλλ᾿ οὐκ ἀξίας) |
    | p0200.16 | εὐλογημένοις. γνησίως | εὐλογημένοις, γνησίως | high | ocr | punctuation: a stop inside the relative clause |
    | p0201.16 | ἀπειλὴ (b) φόβον | ἀπειλὴ φόβον | high | stray | Combefis's note call (b) |
    | p0201.18 | προφορᾷ | προφορᾷ | medium | doubt | plate doubt προσφορᾷ / προφορᾷ (p0201.18): the sense wants "utterance" (καταγλυκαίνων τὴν ἀκοήν); kept προφορᾷ |
    | p0201.23 | Ἔλλειψις | ἔλλειψις | medium | print | capital mid-sentence after Οὐ γὰρ; Migne's type, no sense change |
    | p0201.24 | ἀνθρώπων (1)· | ἀνθρώπων· | high | stray | Combefis's note call (1) |
