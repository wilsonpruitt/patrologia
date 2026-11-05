# TRANSLATOR CARD — one chunk of Sophronius of Jerusalem, *Synodical Letter* + *Orationes* (PG 87.3, 3147–3364)

Adapted from `translate/procopius-rhetorica/CARD.md` (2026-11-05, Fable; same volume, same scan). **The Greek you
are given is a machine reading** of Migne's plate (Kraken, a fine-tuned polytonic OCR model), passed once through
a rule script that fixes the commonest accent, breathing and elision-glyph slips (`scripts/kt-rules.py`). Nobody
has checked it against the page. So you have two jobs, equally weighted:
**translate**, and **report every place the Greek you were given is not what the plate must say.**
Your reports are what we check against the page images; they replace a separate reading pass.

## Work lean (each tool call re-sends your whole context)

1. One Read of your brief (it carries this card, the glossary, the style anchors and your scaffolds).
2. Write each finished chunk's English file `~/patrologia/translate/sophronius-orationes/<id>.en.md` in **one**
   Write (shape below).
3. No image reading, no other files, no web. The coordinator does the page-image checks.

## The work — five pieces under one name

Migne prints, from Mai's and Ballerini's editions, the Greek of **Sophronius** (c. 560–638), monk of Palestine,
companion of John Moschus, patriarch of Jerusalem from 634, the first bishop to write against the
one-operation / one-will teaching. A facing Latin column throughout.

1. **Synodical Letter to Sergius of Constantinople** (cols 3147–3200; chunks so-001 – so-006), 634, the letter
   a new patriarch sends his fellow patriarchs on accession, which by custom carries his confession of faith.
   Its shape: the address and a lament on leaving monastic quiet for the throne (Job); the custom of the
   synodical confession; the Trinity (one essence, three hypostases); then the Incarnation at length — one
   Christ in two natures, the "King's highway" between confusion and division, **two natural operations** and
   the one who operates, the theandric operation, the sufferings and the miracles each to its nature; then a
   catalogue of heresies from Simon to the Monophysites, each anathematized by name, and the five synods
   received; then the closing request for communion and prayers, and the salutation. **An English version exists
   (Allen, 2009); do not consult or imitate it. Translate the Greek.**
2. **On the Annunciation of the most holy Theotokos** (Or. II; cols 3217–3288; so-007 – so-012), fifty sections
   Αʹ … Νʹ: the triple "good tidings" and the Trinity; the economy; then the long dialogue of Gabriel and the
   Virgin on Luke 1:26–38, speech by speech, with the preacher's exposition between; a festal close. Ballerini's
   Latin *Monitum* precedes it in Migne and is not yours.
3. **On the Exaltation of the precious Cross and the holy Resurrection** (Or. IV; cols 3301–3309) **and On the
   Feast of the Cross** (Or. V; cols 3309–3316), both in **so-013**. No section marks in either. ⚠ **CORRECTED 2026-11-05 (the so-013 translator, confirmed by the
   coordinator):** p-0269:1–15 (`Ἅπερ ἐκ φωνῆς …`) is the END of Or. IV (it closes with Or. IV's doxology and Ἀμήν at
   p-0269:15); **Or. V opens with its own full heading at p-0269:17** (Σωφρονίου τοῦ ἐν μοναχοῖς ἁγιωτάτου … ὁμιλία …).
   Migne's running head changes at col. 3309 because Or. V begins on that page. Or. V is not a fragment.
4. **Encomium of Saint John the Forerunner** (Or. VII; cols 3321–3354; so-014 – so-017), sections αʹ … κʹ in
   lower case: the Forerunner's conception, birth, naming, the desert, the baptism, the martyrdom.
5. **On Saints Peter and Paul** (Or. VIII; cols 3355–3364; so-018), "on the day of their birth", sections αʹ …;
   it ends (p-0296) with two excerpts introduced by *Καὶ μεθ᾿ ἕτερα* and *Καὶ μετὰ βραχέα* ("And after other
   matter", "And a little after"): render those introductions in italics on their own line and translate the
   excerpts as they stand. The last two lines of the scaffold were restored from the plate (`RESTORED-LINES.tsv`).

**Not yours:** Or. I (Christmas), Or. III (Hypapante) and Or. VI (on the Angels) are printed in Latin only; *De
peccatorum confessione* (col. 3365 on) runs past our OCR.

## Two registers, one voice

**(i) The dogmatic letter (so-001 – so-006).** Precise technical vocabulary **held constant across all six
chunks** (the glossary's first table is binding — essence, nature, hypostasis, person, operation, will, union,
without confusion / change / division / separation); long periods carried whole, with their μέν … δέ
balances; the anathema catalogue in its own form ("I anathematize X, and Y, and Z, and whoever …"), one verb,
first person, the names in their standard English forms. The opening lament (the anchor) is the Letter's most
figured page; the dogmatic body is plainer and must not be made grander than it is. Sophronius argues by
doublets (ἄτρεπτος καὶ ἀναλλοίωτος, μεριστὴ … ἀμέριστος) — render both members every time; the near-synonym
is the point, not padding.

**(ii) The festal homily (so-007 – so-018).** Rhetorical anaphora (εὐαγγέλια … εὐαγγέλια …, Χαῖρε …, ὅτε …
ὅτε …), triple comparatives (ἀγαθῶν ἁπάντων ἀγαθώτερα), apostrophe to the Virgin, the Cross, the Forerunner,
and the dialogue speeches of Gabriel and the Virgin. **Keep every repetition and every member of a tricolon**;
the figure is the homily. The speeches are direct speech inside Migne's « »; the preacher's "brethren" frames
them.

**House rules from our shipped PG English (repeated here from `translation-style.md` § "Seventh-century dogmatic
letter and festal homily (Sophronius)"; do not open that file):**
- **Second person is a number marker**: *thou/thee/thy* for a singular addressee, *you* for a plural. **The
  Letter addresses Sergius in the honorific plural from its first word to its last** (παμμακάριστοι,
  θεοτίμητοι, μακαριώτατοι, σοφώτατοι, πανιέρους ὑμᾶς, ὑμετέραις; not one singular σύ in the six chunks), so
  Sergius is **you** throughout — plural vocatives stay plural ("all-blessed ones"). Never *thou* to honour
  him. **Gabriel and the Virgin address each other in the singular** (σοι, σύ, χαῖρε): *thou* in every speech.
  God, Christ, the Cross, the Forerunner apostrophized in the singular: *thou*. "Brethren" (ἀδελφοί) and any
  ὑμεῖς: *you*. Scripture quoted keeps the number its Greek has.
- **The Christological table is fixed**: never vary a term for elegance; a doublet is two glossary words, not
  one word and a synonym.
- **Section marks** are rendered as arabic numerals with a period ("1.", "2."), each opening its own paragraph.
  **Or. II**: upper-case Αʹ … Νʹ (1–50), the Latin column's Roman numerals the witness. **Or. VII**: lower-case
  αʹ … κʹ (1–20). **Or. VIII**: lower-case αʹ … . **Or. IV and V: no marks.** **The Synodical Letter has no marks
  in the Greek and no numerals in the Latin**: paragraph by sense (the scaffold's blank-free run is yours to
  divide; a new paragraph at each turn of the argument — address, lament, the custom, Trinity, Incarnation,
  operations, catalogue, synods, close), no numbers invented. The Kraken misreads marks (ΒΘʹ for Θʹ, Γʹ for Ιʹ,
  Πʹ for ΙϚʹ, ΑΖʹ for ΛΖʹ, ΜΟʹ for ΜΘʹ, τηʹ for ιηʹ; a mark can also fall mid-line or drop out of the
  scaffold — ιαʹ in Or. VII, several teens in Or. II): **number by sequence with the Latin's Roman numeral as
  witness**, and report each bad or missing one once as kind `heading`. Numerals in the prose are English
  words.
- **Scripture**: translate the Greek as printed, with an S note giving the reference (book chapter:verse; LXX
  numbering for the Psalms and Job). A familiar verse may echo traditional English where the Greek matches it;
  never substitute a standard version; Sophronius's pastiches of a verse (the anchor's second Job passage) are
  his, not the Bible's — render them as printed and say so once in the S note. Migne's scripture footnote
  letters and numbers inside the Greek are garbled by the Kraken: kind `stray`, never reproduced.
- **Titles**: each piece's first chunk opens with its title in capitals on its own line, then the printed
  heading's attribution clause (Τοῦ ἐν ἁγίοις πατριάρχου … Σωφρονίου λόγος …) in italics on the next line, as
  printed; where the heading is the title alone, no second line. The six titles:
  `SYNODICAL LETTER TO SERGIUS OF CONSTANTINOPLE` · `ON THE ANNUNCIATION OF THE MOST HOLY THEOTOKOS` · `ON THE
  EXALTATION OF THE PRECIOUS CROSS AND THE HOLY RESURRECTION` · `ON THE FEAST OF THE CROSS` · `ENCOMIUM OF SAINT
  JOHN THE FORERUNNER` · `ON SAINTS PETER AND PAUL`.
- **Liturgical formulas keep their received English**: Εὐλόγησον, Πάτερ = "Give the blessing, Father."
- Particles by weight, not by formula: γάρ "for", οὖν "so / then / therefore", μέν … δέ by antithesis, καί …
  καί "both … and"; οὐ μὴν ἀλλὰ καί "nay more". Byzantine καί-chains in a festal passage may keep their "and".
- **The Latin column is a witness, never a source.** Migne's Latin (Mai's for the Letter, Ballerini's for the
  homilies) is competent and smoothing — it expands a doublet, supplies a verb, paraphrases a figure
  (*quinquies victore* for τῷ πεντάθλῳ). Translate the Greek; where the Latin differs in substance, a T note.

## The scaffold

Each page block gives the Greek column's lines, tagged `pNNNN.LL` (page file + line), then the facing **Latin
column** of the same page (archive.org OCR of Migne's Latin version). The Latin's whole page is shown, so it can
start earlier or run later than your Greek lines. ⚠ **The Greek column changes side from page to page** (p-0188:
Greek 3148, Latin 3147; p-0189: Greek 3149, Latin 3150): **take the Greek column number from the scaffold's page
header every time**, never by parity.
A word broken across a line end is hyphenated (`κλύ-` / `δωνι`); join it in your head, and never report a
correct hyphenation.

**Migne's note numbers and letters** are printed inside the Greek and the Kraken garbles or drops them. **Do not
reproduce them**; the foot-of-page apparatus (Mai's, Ballerini's and Allatius's notes, the VARIÆ LECTIONES) is
read separately. A leftover is kind `stray`. **Running heads** (`SOPHRONII`, `EPISTOLA SYNODICA`, `ORATIO II`),
column numbers, Latin headings (`MONITUM`, `NOTÆ`), and title lines leaked into the Greek are kind `stray`;
report a work title once as kind `heading`.

## Your English file, exactly this shape

    title: Synodical Letter to Sergius of Constantinople, 2
    ---
    [3152] … the race of the apostles …[^1] [b: B] …

    ## Notes
    [^1]: …
    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0190.03 | θεσπέσιος, ὁ Θεοῦ φωνῶν | … | high | ocr | … |

- **`title:`** = the piece's English title in title case, then the sections your chunk covers (`On the
  Annunciation of the Most Holy Theotokos, 10–19`); for the Letter and Or. IV/V, which have no marks, the chunk
  number in the piece (`Synodical Letter to Sergius of Constantinople, 2`; `On the Exaltation …, 1`).
- **Column anchors:** `[3152]` (the Greek column number from the scaffold's page header) at the start of the
  chunk, and at the point where each new page's Greek begins.
- **Work titles:** the first chunk of each piece opens with its title in capitals (above); so-013 carries two,
  the second at p-0269:17. A section that runs on from the previous chunk starts without a number.
- **Band letters:** Migne prints A/B/C/D in the gutter. The Kraken often glues the letter to the end (or start) of
  a line as a stray capital Α/Β/Γ/Δ or A/B/C/D (`…τρισσού- Β`, `Αφύσιν`). Put `[b: X]` (Latin letter) in the
  English at the point that line's text falls, and **do not** report the glued letter as a misread.
- **Notes:** numbered `[^n]`, the marker placed in the sentence the note is about, in the same Write. Kinds:
  T (textual: what you read and why, incl. where the Latin differs), S (source: a scriptural or patristic
  passage located — Job 29 for the lament; Dionysius Ep. 4 for the theandric operation; Cyril's letters where
  the Letter quotes him), P (person, place or event, only where a reader would be lost: one line — the
  Acephali, Julian of Halicarnassus, the fifth synod). Keep them short. No note for an ordinary OCR fix you
  logged in the table: the table is the record.
- **Direct speech** (Gabriel, the Virgin, Zacharias, Scripture) inside « » as Migne prints it; the English
  keeps « ».
- Paragraphs follow the Greek's sense units (section numbers start new ones). Every clause rendered; nothing
  summarized; no sentence of the Greek made two by preference; a doublet never collapsed to one word.

## The OCR table (the half of the job that replaces the plate read)

One row per corrupt spot, in text order: `| tag | printed | reading | sure | kind | why |`

- **printed** = the token(s) exactly as in your scaffold; **reading** = what the plate must have; **sure** =
  `high` / `medium` / `low`.
- **kind**:
  - `ocr` a wrong letter, accent, breathing, iota subscript, or punctuation that you can correct, **where you judge
    the machine misread a correctly printed page**;
  - `space` words wrongly joined or split;
  - `heading` a mangled, misplaced or missing section mark or title;
  - `print` Migne's (Mai's, Ballerini's) own misprint, or a reading the plate really has though it is wrong: the
    English follows your correction with a T note;
  - `stray` a running head, column number, note number or heading leaked into the text;
  - `doubt` something is wrong but you cannot say what. The English then has `[?]` plus a T note.
- ⚠ **`ocr` or `print`?** A non-word, a broken letter, a Latin letter inside a Greek word, a lost space is `ocr`;
  **a real Greek word that is simply the wrong word, where the Latin translator read the same wrong word, is
  `print` or `doubt`, not `ocr`.** Mai and Ballerini print manuscript texts with their own corruptions, and the
  VARIÆ LECTIONES at the foot often say so. We check every row on the image either way; the label tells us
  which way to look.
- **Report accent and breathing errors too.** The Greek is displayed beside the English, so a wrong accent is a
  visible error. What the rule pass leaves is mostly: rough vs smooth on real words (ἣ / ἢ, οὗ / οὐ, ᾧ / ὦ, ἑ- /
  ἐ- on augmented verbs), a missing iota subscript on a real form (τῇ, ἐν τῷ, subjunctives -ῃ / -ῃς), circumflex
  vs acute, a diaeresis read as a circumflex (λαῖκῶν for λαϊκῶν), a stray combining mark (ἑ̓ράσμιος), and accents
  on words the rule could not place. `why` = "accent" / "breathing" / "subscript" / "diaeresis".
- Greek confusions to expect: ο/σ/ϲ, ε/ο/θ, η/ν/ῃ, ι/ί/ἰ, υ/ν, κ/χ, β/θ, π/τ, ρ/φ, λ/Λ/Α, σ/τ (σαῦτα for ταῦτα),
  ς at a word's end, ῥῥ read as ῥὁ, Latin letters mixed into Greek words, dropped or doubled letters, a doubled
  hyphen (ἀρε--), two words run together (ὁλύχνος), a dropped letter at a line edge.
- ⛔ **Not a misread:** Attic forms (θάλαττα, γλῶττα, ξυν-), the LXX's own words in a quotation (ηὔγει, ὑλώδης),
  Sophronius's coinages and compounds (χαμαιτρόφος, θεοδόχος, ζωαρχικός), both spellings of Apollinarius,
  Migne's comma before a quotation, and anything you merely find inelegant. Do not correct the author's grammar
  or his theology.
- **Use the Latin as your best detector.** Where the Greek and the Latin disagree on a word, a name, a number or
  a negative, look hard at the Greek: it is usually the OCR. Where the Latin agrees with a surprising Greek
  reading, the reading is probably real (and if it is wrong, it is `print`).
- Expect roughly **5–20 rows per 1,000 Greek words** after the rule pass (the two anchors ran 15 rows on 720
  words and 6 on 390). If you find far fewer, read the Greek again, line by line, accents included.

## Report (your final message, short)

Per chunk: Greek words, English words, OCR rows (by kind), the sections covered (first–last), the three spots you
are least sure of, any glossary term you had to decide (Greek → English, one line each).

## Where so-001 and so-007 now begin

- **so-001** carries the Synodica anchor verbatim and continues at **p-0189:49**.
- **so-007** carries the Or. II anchor verbatim and continues at **p-0224:9** (section **3.**).

---

# STYLE ANCHOR — Synodical Letter, opening (p-0188:3 – p-0189:48), translated by the coordinator (Fable, 2026-11-05)

**so-001 carries this English verbatim** (notes and OCR rows included — renumber nothing, these are the opening
lines) and continues at **p-0189:49** (`Ἐπεὶ δέ τις ἀποστολικὴ καὶ ἀρχαία παράδοσις …`). Every other Synodica
chunk matches it. Greek ≈ 720 words → English ≈ 1,010 (ratio ≈ 1.4 on this figured opening; the dogmatic body
runs leaner).

    title: Synodical Letter to Sergius of Constantinople, 1
    ---
    [3148] SYNODICAL LETTER TO SERGIUS OF CONSTANTINOPLE

    To the master most holy of all,[^1] and most blessed brother and fellow-minister Sergius, archbishop and
    patriarch of Constantinople, Sophronius, unprofitable servant[^2] of the holy city of Christ our God.

    Ah! ah! all-blessed ones, how dear to me now is quiet, and far dearer than before, ever since from an
    untroubled quiet I have come into a turmoil of affairs, and am drenched with waves, as it were, of the dry
    land! Ah! ah! God-honoured ones, how sweet to me now is the least thing, and not a little sweeter than
    before, ever since from a dunghill, and the ground, and unspeakable and great lowliness I have gone up to a
    hierarch's throne. And I see a great storm yoked to it, and danger attending the storm. For the sweetest
    things are not seen so sweetly before the trial and knowledge of the unpleasant as when they come into view
    after the trial and onset of what grieves: so health is thrice-longed-for by those who fall sick after
    health; so calm is a delight to those who are storm-tossed after calm; so wealth is lovely to those who are
    poor after wealth; and all things a man would thus see turning out, being and remaining in themselves what
    they are, in their natural and essential quality, such as they appeared before the trial of their
    contraries, but becoming finer after the knowledge of these, and to those who have received them far more
    precious, nay more, more delightful too and far more desirable. And Job the renowned will cast his vote
    with us on this most brilliantly, having come through the trial of both and setting down his votes aright;
    and he would be a just judge of what we say, coming forward for us and fixing a judgment that leans to no
    side and takes no bribe. What then does that athlete say, the untamed one, who suffered the change of what
    gladdened him and came into a flood of what grieved? «Who would set me month by month in the days of old,
    in which God kept me, as when his lamp shone over my head; when by his light I walked in darkness; when I
    was laden upon my ways; when the Lord was making visitation of my house; when I was exceedingly abounding,
    and round about me were my children; when my ways flowed with butter, and my mountains flowed with milk;
    when I went out early in the city, and in the broad streets my seat was set. [3149] The young men saw me
    and hid themselves, and the aged rose up; the great ceased speaking, laying a finger on their mouth; and
    they that heard blessed me.»[^3] Therefore with good reason I too, most blessed ones, shall cry out with Job
    the pentathlete,[^4] stricken by the memory of the good things that were mine of old. A calm life those
    things were, and a quiet one, and a lowliness that knew no storm.[^5] Who would set me month by month in
    the days of old, in which God kept me unafflicted, as when his lamp shone over my head while I lived a
    peaceful and unbillowed life; when by his light I walked in darkness; when I gathered the clusters of
    quiet; when I was laden with the fruits of calm; when I feasted on the shoots of tranquillity; when I
    exulted in the flowers of freedom from care; when I was crowned with the buds of fearlessness; [b: B] when I
    banqueted on the graces of freedom from business; when I enjoyed earthly poverty; when I ploughed the
    furrows of the dunghill that knows no danger; when I sailed the sea of unbillowed beggary; when I took
    delight in the beauties of a lowly hearth; when I ate the honey-flowing manna of a diet that grows on the
    ground, myself too beheld as another Israel, and luxuriating in a peaceful and heavenly luxury without
    murmuring and without a thankless mind?[^6]

    Since then these things, and things beyond these, most wise ones, have been done to me, thrice-wretched,
    by great necessity and by the force of God-loving clerics, and devout monks, and faithful laymen — all the
    citizens of the holy city of Christ our God — who forced me by their hand and wrought with tyranny, by what
    judgments I neither know nor understand, I ask you, the all-holy, and I exhort you, not only to come to my
    aid with pure prayers to the Lord as I am at sea in the affairs of this life, and then in danger as well,
    and to steady me as I sink at the knees with faintness of heart, but also to guide me with God-inspired
    teachings towards the undertaking of what must be done — the one as fathers and begetters, the other as
    brothers and men of one blood. Grant me then, you, in fatherly and in brotherly wise, my requests, just as
    they are; and I shall follow your guidance, and shall gain, as a merchant gains, a bond with you,[^7]
    which faith binds together for those of one mind, and hope unites for those of right mind, and love knits
    together for those of godly mind; whose threefold cord,[^8] though twined of these three divine virtues,
    neither knows loosing, nor undergoes breaking, nor admits separation; but it is truly unbreakable,
    gathering into one piety those who are rich in its inspired twining.

    ## Notes
    [^1]: T. Δεσπότῃ πάντων ἁγιωτάτῳ: "most holy of all"; the Latin softens to *in omnibus sanctissimo* and
    carries a note number (1) the Greek column does not print. Δεσπότης is "master" throughout the work
    (capital for Christ).
    [^2]: S. Luke 17:10, δοῦλοι ἀχρεῖοί ἐσμεν.
    [^3]: S. Job 29:2–11 (LXX), as printed: ὁδούς for the LXX's ὁδοῖς, ἐπανέστησαν for ἔστησαν; ὑλώδης
    ("abounding", literally "full of matter") is the LXX's own word.
    [^4]: T. Ἰὼβ τῷ πεντάθλῳ, "the pentathlete": victor in all five contests; the Latin paraphrases, *quinquies
    victore*.
    [^5]: T. ταπεινότης, "lowliness"; the Latin reads *pauperies*. Γαληνὸς ταῦτα βίος ἦν: "those things were a
    calm life" (the scaffold's σαῦτα is the machine's).
    [^6]: S. The manna and the murmuring: Exod 16:2–15; Num 11:4–9. The second Job-passage is Sophronius's own
    pastiche of 29:2–4, every clause after "in darkness" his.
    [^7]: T. συμπλοκὴν τὴν πρὸς ὑμᾶς ἐμπορεύσομαι: ἐμπορεύομαι is to acquire by trade; the Latin has *copulam
    ad vos habere merebor*.
    [^8]: S. Eccl 4:12, τὸ σπαρτίον τὸ ἔντριτον.

    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0188.06 | ἀγίας | ἁγίας | high | ocr | breathing |
    | p0188.07 | Βαβαί!βαβαί! | Βαβαί! βαβαί! | high | space | space after ! |
    | p0188.11 | κύμασι!Βαβαί! βαβαί!θεοτίμητοι | κύμασι! Βαβαί! βαβαί! θεοτίμητοι | high | space | spaces after ! |
    | p0188.22 | ἑ̓ράσμιος | ἐράσμιος | high | ocr | stray combining breathing |
    | p0188.36 | ὁ Θεὶς | ὁ Θεὸς | high | ocr | ι for ο; Latin *Deus* |
    | p0189.01 | μενεανίσκοι | με νεανίσκοι | high | space | Job 29:8 |
    | p0189.07 | σαῦτα | ταῦτα | high | ocr | σ for τ; Latin *haec* |
    | p0189.10 | ὁλύχνος | ὁ λύχνος | high | space | |
    | p0189.12 | ἑτρύ- | ἐτρύ- | high | ocr | breathing (ἐτρύγων) |
    | p0189.13 | γεννημα- | γεννήμα- | medium | ocr | accent lost on hyphenated γεννήμασιν |
    | p0189.20 | ἐγαννύμην | ἐγανύμην | low | ocr | γάνυμαι, impf. ἐγανύμην; double ν may be printed — image check |
    | p0189.26 | λαῖ- | λαϊ- | high | ocr | diaeresis read as circumflex (λαϊκῶν) |
    | p0189.33 | ἑπικουρεῖν | ἐπικουρεῖν | high | ocr | breathing |
    | p0189.43 | θεόφρονας, Ὧν | θεόφρονας, ὧν | medium | ocr | capital for lowercase after a comma |
    | p0189.44 | ἀρε-- | ἀρε- | high | ocr | doubled hyphen |

Band letters: the scaffold's p-0188 Greek lines carry no glued letter (the Latin column shows A at the head of
3150); p0189.16 ends in a glued Β, placed above. The Greek column is 3148 on p-0188 (the Latin, 3147, stands
left of it) and 3149 on p-0189: the Greek column changes side from page to page in this volume, so take the
number from the scaffold's page header every time, never by parity.

---

# STYLE ANCHOR — Or. II, title through § 2 (p-0223:1 – p-0224:8), translated by the coordinator (Fable, 2026-11-05)

**so-007 carries this English verbatim** (notes and OCR rows included) and continues at **p-0224:9** (`Γʹ. Τοῦτο
γὰρ καὶ τὸ θαυμαστὸν αὐτῆς ἐστι …`), numbering its first section **3.** Every other Or. II chunk matches it, and
Or. IV, V, VII and VIII take their festal register from it. Greek ≈ 390 words → English ≈ 560 (ratio ≈ 1.45:
the triple comparatives and the technical doublets cost English words; budget by it for the homilies).

    title: On the Annunciation of the Most Holy Theotokos, 1–9
    ---
    [3217] ON THE ANNUNCIATION OF THE MOST HOLY THEOTOKOS
    *An oration of Sophronius, patriarch of Jerusalem, among the saints.*[^1]

    Give the blessing, Father.[^2]

    1. Good tidings, brethren, good tidings, and again I will say,[^3] good tidings! — not because they are
    higher than all good tidings, and more divine and finer, and more excellent by incomparable pre-eminences;
    nor because they show me, their messenger, beautiful, and make and work my feet beautiful[^4] (for they are
    better than all good things, and kinder than all kind things, and more wonderful than all wonders, and more
    compassionate than all compassionate things, and more fearful and more awful than all fearful and awful
    things); but because, being tripled, they also declare the supreme and divine numbering of the blessed and
    sovereign Trinity. For everything that is tripled in sacred and divine doctrines, [b: B] or indeed in
    God-wise proclamations and august announcements, is set down as an honour of the blessed Trinity — of
    Father, I mean, and Son and Holy Spirit; which both is a Trinity and is beheld as a Monad, and is a Monad
    and is found to be a Trinity: the one in the three hypostases, the other in the one and only Godhead, that
    is, essence and nature.

    2. For one is the essence of the superessential and life-originating Trinity proclaimed, as being brought
    up into one and only Godhead. Wherefore also it holds its consubstantiality, and its kinship and sameness of
    stock, unbroken and firm and unscattered, nay more, unmultiplied. For the holy Trinity, which holds sway
    over all things that are and rules them, and royally and divinely has lordship over all created things, is
    numbered in its own hypostases — for it is a Trinity, and is believed to be — but in essence and nature,
    and likewise in Godhead too, it is above all numbering. For it is not carried out to a triadic enumeration
    in respect of essence as well, because it makes the numbering of its own personal hypostases threefold.
    And for this reason it is both shown partible in its hypostases, and remains in respect of nature
    impartible, and is proclaimed divided in its persons. For each of these appears singly,[^5] and [3220]
    [b: A] it is in nature undivided. Whence it possesses the division and the union in a manner truly
    paradoxical and astounding: because neither, on account of the One, which the nature is, is it poured
    together and driven to one and only hypostasis; nor, on account of the Three, which are enhypostatic
    persons, is it cut asunder in alien and total fashion; but it is unbroken and impartible, refusing every
    partition and every conjunction.

    ## Notes
    [^1]: T. The printed heading: Τοῦ ἐν ἁγίοις πατριάρχου Ἱεροσολύμων Σωφρονίου λόγος εἰς τὸν Εὐαγγελισμὸν τῆς
    ὑπεραγίας Θεοτόκου. The fixed English title stands in capitals; the heading's attribution clause follows it
    in italics, as printed.
    [^2]: T. Εὐλόγησον, Πάτερ: the reader's request for the blessing before the homily, a liturgical formula
    rendered by its received English (house rule).
    [^3]: S. Phil 4:4, πάλιν ἐρῶ.
    [^4]: S. Isa 52:7 / Rom 10:15, the beautiful feet of the bringer of good tidings; ἄγγελος here is the
    messenger, and the preacher claims the verse for himself.
    [^5]: T. Ἰδίᾳ γὰρ τούτων ἕκαστον φαίνεται, καὶ τὴν φύσιν ἀδιαίρετος: the Latin expands, *quoad hasce enim
    singulas, distincta, quoad naturam vero indiscreta apparet*. The scaffold's p0223.43 (`νοταΕ.`) sits between
    τὴν and φύσιν; the sense runs on without a lost line (see the OCR row).

    ## OCR
    | tag | printed | reading | sure | kind | why |
    |---|---|---|---|---|---|
    | p0223.01 | Σωφρο- ΑSα Πσίαα Sο̈- | Σωφρο- | high | stray | running-head / facing-column bleed glued to the title line |
    | p0223.04 | Αντον. ΒΑν.η | — | low | stray | an editorial line between the title and Εὐλόγησον that the Latin column lacks (Ballerini's siglum?) — image check |
    | p0223.17 | ἁρί- | ἀρί- | high | ocr | breathing (ἀρίθμησιν) |
    | p0223.43 | νοταΕ. | — | medium | doubt | foot-of-column leak (NOTAE?) rather than a Greek line: the clause τὴν / φύσιν ἀδιαίρετος is continuous across the page break and the Latin has nothing more — image check that no short line stands here |
    | p0224.01 | καὶπαράδοξον | καὶ παράδοξον | high | space | |
    | p0224.06 | ἀῥὁα- | ἀῤῥα- | high | ocr | ῥῥ read as ῥὁ (ἀῤῥαγές) |

Band letters: p0223.18 ends in a glued Β; p0224.01 opens with a glued Α. Neither is reported as a misread.
Section marks Αʹ and Βʹ are clean here; the Latin column's I. and II. witness them.
