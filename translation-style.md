# Translation style — register rules and recurring patterns

The scalable half of Wilson's read-throughs. A read-through flag on one sentence
is an instance; what gets recorded here is the **construction class** it belongs
to, so every future agent renders the class right and nothing needs a
retroactive polish pass. (There are a million *quoniam*s in 85M words — fix the
pattern, not the sentence.)

**Every translation-agent prompt points here** alongside the style anchor
(`src/english/9741/0000.md`). When a new pattern is added: (1) number it below,
(2) grep the existing English for other instances of the class and fix them,
(3) note the sweep in the commit message.

## Register (Tier-2, locked)

Literal, not paraphrase — every clause rendered, nothing summarized, corrupt
printed Latin rendered literally rather than emended (log it as a crux).
Dignified but readable English; literal means faithful to the *content and
weight*, not to Latin word order (see the patterns below). Expect ~1.5× the
Latin word count (Abbo pilot actual). Scripture is translated from the Vulgate
Latin as printed; a familiar verse may echo traditional wording where the Latin
matches it. Technical institution-words without a clean English equivalent stay
in italic Latin (*precaria*, *emphyteusis*, *archisterium*); working
equivalents stay English (coloni → tenants, usufruct, prescription).

Markers are sacred and pass through verbatim: `[0473A]` column anchors,
`[n: …]` citations (Latin abbreviations unanglicized), `[ *al.,* …]` variants
untranslated, « » guillemets kept, *italics* kept. Heads keep their Roman
numeral and `.-- ` punctuation.

## Scripture (locked, Wilson 2026-07-03)

**Translate the scripture Migne prints — never substitute a conventional
English version.** Authors quote the Vulgate loosely, from memory, from Old
Latin versions, or adapt wording deliberately, then build the argument on the
wording quoted; a conventional translation silently corrects the quote out
from under the argument (Abbo's Joel 1:4 runs *eruca → locusta → bruchus*,
not the KJV's palmerworm → locust → cankerworm). Where the quoted Latin
matches the standard text, the rendering may echo traditional wording ("Thou
art Peter, and upon this rock I will build my Church"). Douay-Rheims-as-base
was considered and rejected — the divergences are the scholarly payload. The
reader-facing rationale (with what Migne himself did editorially) lives in
`content/editorial-method.md`.

## Register (PG / Greek) — pilot-era, calibrating

Codified 2026-07-30 from the Joel pilot (chronicle prose, the only shipped PG
work); the paired-pilot `0000` anchors (dialogue, homily, lemma-and-gloss —
see `pg-paired-pilot.md`) extend it. Everything in the Latin register that is
not Latin-specific carries over: Tier-2 literalism, every clause rendered,
markers sacred, corrupt print rendered literally and logged.

- **Translate the Greek; the Latin column is a verifier, never a source**
  (PLAN.md rule 4). Allatius's phrasing must not leak into the English — he is
  a witness to the sense, not a model for the sentence. Consulting him leaves a
  trace: a crux line quoting the Latin with its column.
- **Expect EN ≈ 1.25× the Greek words** (chronicle actual; per-genre ratios are
  a pilot output — do not quote 1.25× for a homily).
- **Names:** established English forms where they exist (Cyrus, Nebuchadnezzar,
  Alexander); otherwise transliterate what the Greek prints, keeping Byzantine
  forms as printed (Azoura, Thyrras, Tharra — never normalized to their
  biblical/classical shapes; the deviation is data). Greek divine names stay
  Greek (Kronos, Zeus, Ares — not Saturn, Jupiter, Mars), even where the Latin
  column latinizes them.
- **Greek letter-numerals** (λβʹ) render as English words ("thirty-two") — Joel
  precedent. They are the most OCR-fragile class in Calfa AND the commonest
  real Greek-vs-Latin divergence class: never smooth a numeral in either
  direction; a suspected divergence needs the Greek plate-verified before a
  `[lat: …]` (Pattern 16).
- **Scripture: translate what Migne's Greek prints** — LXX and NT quotations as
  printed, however loose, conflated, or non-standard (Joel's Isaiah 45
  conflation ships as printed). Familiar-verse echo allowed where the Greek
  matches the traditional text. Never substitute a conventional English
  version; the LXX's own forms and names stand as printed.
- **Particles** (μὲν…δέ, καί-paratax, γάρ, οὖν): render by English connective
  weight, not by formula — no mechanical "on the one hand." Byzantine paratax
  may keep its "And…" chains where the genre is annalistic (Joel precedent).
- **Calfa OCR damage** is far denser than PL transcription damage and is
  handled differently: a certain correction (from context, the Latin twin, or
  a scriptural parallel) is made **silently in the English and logged in
  `cruces.md`** — itemized inline it would drown the text. Pattern 12
  `[sic: …]` is reserved for plate-verified carried type only; **a defect in
  our files is never attributed to Migne's plate** (the standing PG rule — see
  the attribution ladder, `pg-paired-pilot.md` §4).
- **Inline edition apparatus** the plate prints — Paris-edition page markers
  (`[P. 150]`), marginal years — kept verbatim in the English (Joel precedent).

### Dialogue (from the Nicetas anchor, 2026-07-31 — Fable)

Extends the section above for the dialogue/polemic genre; calibrated on
`nicetas-maroneia-dialogi` 0000 (the anchor pair — read it with these rules).

- **Speaker sigla as printed:** ΓΡ. → GR., ΛΑΤ. → LAT.; every turn is its own
  paragraph, however short (stichomythia stays stichomythia).
- **Section letter-numerals** used as section MARKS (αʹ, βʹ before a speaker
  tag) render as arabic numerals with a period ("1.", "2."), matching the
  plate's own Latin column. In-prose letter-numerals remain English words
  (Joel rule, unchanged).
- **Fixed technical equivalences, never varied within a work:** οὐσία =
  essence · φύσις = nature · ὑπόστασις = hypostasis · πρόσωπον = person ·
  ἐκπόρευσις = procession. In a doctrinal dialogue the argument IS these
  distinctions; elegant variation is a doctrinal error, the dialogue analogue
  of 7a″'s lemma-conformation.
- **Dionysian ὑπερ- compounds take "super-"** (super-divine, super-existence),
  after the traditional English "superessential."
- **Mention vs use:** where the text discusses a particle or word AS a word
  (τῆς ἐξ προθέσεως… καὶ τῆς διά), keep it in Greek script as printed; a quoted
  credal CLAUSE is translated inside quotation marks ("from the Son"). Never
  silently English a mentioned particle into "from"/"through" — the dispute is
  about the particles.
- **A heading the plate carries but Calfa drops** is restored as an inline
  `[ed: …]` quoting the plate (ΛΟΓΟΣ ΠΡΩΤΟΣ case, col 0173) — never as a
  `## ` head the Greek chunk lacks (marker parity).
- **The plate's own apparatus can settle a would-be `[lat:]`.** Where the Latin
  column diverges but a Migne note on that column corrects Allatius (note (c)
  at 0171: *concordassent*), the divergence is already adjudicated on the page:
  log the crux, fire no marker. (Pilot §8 Q3 calibration datum.)

### High rhetorical homily (from the Glabas anchor, 2026-07-31 — Fable)

Calibrated on `isidore-glabas-sermo-1` 0000 (the anchor pair). The ornate pole
of the Byzantine register — the opposite of chronicle paratax.

- **Epithet fidelity is this genre's lemma rule.** A panegyric builds on the
  DIFFERENCES between near-synonymous epithets; fix one English equivalent per
  Greek epithet at first occurrence and never interchange them (the anchor's
  cruces file carries the work's Marian table: πάναγνος = all-pure ·
  Πανάχραντος = All-immaculate · Πάντιμος = All-honored, etc.). Same for the
  maker-words: Κτίστης = Creator · Δημιουργός = Maker · πλάστης = Fashioner.
  Collapsing two epithets into one English word is the homily analogue of
  7a″'s lemma-conformation.
- **Bold coinages render boldly.** Late-Byzantine homilists coin compounds
  (ταφόζωος, βρεφουργέω, ἔξαλμα); render them as the coinages they are
  (tomb-bound, wrought as babes, outleaping), never normalized to plain prose.
  **Allatius flattens these routinely — his paraphrase is not a license.**
- **Rhetorical structure is content:** doublets/triplets 1:1, exclamations
  kept, rhetorical questions stay questions, the long periodic sentence stays
  one sentence where English can bear it (em-dashes are the pressure valve).
- **ΛΟΓΟΣ as division-head** renders by the work's established English term
  (here "Sermon," after the registry and the plate's SERMO), fixed per work.
- **Liturgical formulas** render by their received English (Εὐλόγησον, Πάτερ =
  "Give the blessing, Father").
- **Scripture arrives woven, not quoted:** the homilist adapts LXX word order
  and case to his sentence (Ἀόρατος ἦν ἡ γῆ… ἐν ἀρχῇ); translate the weave as
  printed (Joel scripture rule, unchanged) — the familiar English verse is
  exactly the pressure to resist.
- **Expect EN high:** the anchor ran 1.49× (vs chronicle 1.25×, dialogue
  1.37×) — genre ratios are a pilot output, per-genre.

### Greek lemma-and-gloss / catena (from the Oecumenius anchor, 2026-07-31 — Fable)

Calibrated on `oecumenius-philippians` 0000 (the anchor pair). The majority
genre of the eventual PG queue (Theophylact, Oecumenius, Cyril).

- **Catena attribution sigla are sacred structure.** The plate opens each
  attributed scholion with **— [ΦΩΤ.]**, **— [ΧΡΥΣ.]** etc. (em-dash +
  bracketed source). Reproduce verbatim, untranslated, in place — the [n:]
  principle; no colon, so no collision with our marker namespace. Calfa
  mangles them; restore from the plate/scan form, verify each NEW siglum
  against the scan before fixing its form, log every restoration.
- **7a″ applies at double strength** and the divergence list is a deliverable:
  the block lemma AND every «short lemma» re-quoted in the gloss must follow
  Migne's printed Greek against both the received Greek text and familiar
  English (anchor's worked cases: 2 Cor 2:4 without πολλῆς; Phil 1:9 single
  μᾶλλον).
- **The Latin column quotes scripture from the Vulgate — convention, not
  divergence.** Never fire a `[lat:]` on a scripture quotation the Latin has
  conformed to the Vulgate; log if notable.
- **Pronoun itacism pairs (ἡμεῖς/ὑμεῖς) are the prose analogue of the numeral
  class** — the commonest real Greek-vs-Latin divergence in prose, and
  Calfa's most confusable letters. Like numerals: plate-verify the Greek
  before firing a `[lat:]` (the anchor's τὰ καθ᾽ ἡμᾶς vs *apud vos*, leaf
  ~647, is the worked case — first live [lat:] of the paired pilots).
- **Greek question marks:** Calfa prints · or nothing where the plate's ;
  belongs; restore the question from sense + the Latin column, silently,
  logged as a class.
- **Guillemets as printed:** «short lemmata» keep Migne's guillemets
  (Pattern 6); block lemmata are unguilleted in Calfa and stay so.
- **Gloss formulas fixed within the work:** ἤγουν = "that is" · τουτέστι =
  "that is" (interchangeable in Greek, keep one English form) · Ἢ opening an
  alternative construal = "Or:" · ἀντὶ τοῦ = "stands for".
- **Cross-column bleed is a Calfa artifact class:** the Latin running title
  misread in Greek lookalike glyphs (ΡΑΙΙΙ ΑΡΟΘΤΟΙΙ…) — not the Greek
  column's text; translate the Greek column's own head (scan-verified) and
  log the bleed.
- **Ratio:** the anchor ran 1.35× (chronicle 1.25 · lemma-gloss 1.35 ·
  dialogue 1.37 · homily 1.49).

## The Song of Songs — each commentary stands on its own (locked, Wilson 2026-07-30)

Sixteen PL commentaries expound the same book, quoting the same lemmata. When two
of them print the *same* Latin and neither glosses the word, do the two Englishes
have to agree?

**No. Each commentary stands on its own. Do NOT harmonize a lemma across works.**

Wilson's reason, and the whole of it: harmonizing would be **"editorializing Migne
too much."** Sixteen commentaries are sixteen separate acts of transmission, and
one English imposed across them is our editorial hand pretending they are one
edition. The divergence a reader meets is real — it is what the corpus actually
contains — and a smoothed corpus would be telling him something untrue about it.

This is not a new principle. It is the same one Pattern 9 already applies inside a
volume: **each work is faithful to its own plate.** 11057 keeps adverbial sense
labels (ALLEGORICALLY.) because *its* plate prints adverbs, while 11063 uses the
adjective, and the two shipped that way deliberately.

The complete rule, three cases:
1. **Printed Latin DIFFERS** → the Englishes must differ. Scripture policy, locked:
   translate what Migne prints, never substitute.
2. **A gloss depends on the word** → the Latin stands in italic, divergence noted.
   The *stylus*/*epistylium* precedent (11551) and *murenulae*/*ferculum* (10804):
   where the gloss IS the etymology, an English word sharing no root makes the
   gloss explain nothing.
3. **Printed Latin identical, no gloss depends on it** → **each stands.** No
   cross-work harmonization, no sweep, no reconciliation pass between commentaries.

**⚠ THE BOUNDARY — this ruling is about ACROSS works, never WITHIN one.**
Merge-time reconciliation inside a single work remains a **required** pipeline step
(runbook step 4), not a tidy-up. A work split across agents that renders one term
two ways is incoherent on its own page — that is drift, and it has needed fixing in
every multi-agent work so far (11551's *stylus*, 11063's sense labels, 10804's
*amica mea*, 11536's *turba*). Do not read "let each stand" as licence to skip it.
Within a work: one voice. Across works: as many voices as Migne printed.

**Worked instance, and it needs no action:** 10804 keeps *murenulae* in italic
Latin; 10379 (Robert of Tombelaine, live since earlier) renders the same lemma
"chains of gold". **Both are correct as they stand.** Neither is swept.

## Patterns

### 1. Partitive genitive fronted — never "of Xs some"

- **Latin:** `X-orum alia … alia … alia …` (also *quorum alii*, *horum pars*)
- **Wrong reflex:** mirroring the word order — "Since of testaments some are
  made under the name of dowry…"
- **Right:** promote the partitive to subject — "Since some testaments are made
  under the name of dowry, others by donation of inheritance, and others…"
- **Worked instance:** Abbo *Canones* ch. VII (9741/0002, col 480C), flagged by
  Wilson 2026-07-03; corpus swept, no other instances.

### 2. Attribution headnotes are citations, not prose

Canon collections and florilegia open extracts with an attribution line
(*Augustinus, de verbis Domini, homilia 19:* — there will be tens of thousands
of these). Render them as citations:

- **Work titles** italic and title-cased, in English — *On the Words of the
  Lord*, not "on the words of the Lord" run into the sentence.
- **Genre word + number** capitalized — Homily 19, Epistle 12, Book II —
  wherever it functions as a locator, in headnotes or in prose references to a
  numbered unit (*Gregorius in homilia 37 Evangeliorum* → "Gregory, in Homily
  37 on the Gospels").
- Descriptive prose stays lowercase — "in another epistle, after some other
  matters" (*in alia epistola*) is narrative, not a locator.
- `[n: …]` markers are unaffected (verbatim rule).

**Worked instances:** Abbo *Canones* ch. XLIX and L (9741/0010, cols 505D,
506A), flagged by Wilson 2026-07-03; corpus swept, one descriptive-prose case
(9741/0003, col 485D) correctly left lowercase.

### 3. "Holy Scripture" — capitalize both words (the Bible as a whole)

The standing English name for the Bible as a body is **Holy Scripture** (also
**the Scriptures**, **Holy Writ**) — both words capitalized — wherever the
Latin is *sacra / sancta Scriptura*, *Scriptura sancta*, *divina Scriptura*, or
*Scripturae* meaning the canon. Capital *S* alone is not enough: it is *Holy
Scripture*, not "holy Scripture."

- This is a fixed proper name, **not** the general pattern "*holy* + noun." So
  *sancta Ecclesia* stays "holy Church," *sancta praedicatio* stays "holy
  preaching," *sancta anima* "holy soul" — only *Scriptura* as the canon is
  promoted.
- **Worked instance:** Robert of Tombelaine *Commentaria in Cantica* (10379/0001
  col 1366C; 10379/0002 col 1370A, *Murenulae aureae, sacra Scriptura*), flagged
  by Wilson 2026-07-04. Corpus swept: 4 instances in Robert corrected; Abbo and
  Joel had none.

### 4. Inline citation tails (florilegia) — locators tagged `[f: …]`, comments translated

**Trigger:** the work cites its sources as inline italic tails *following* each
sentence or extract, instead of `[n: …]` notes. Florilegia and *sententiae* /
*flores* / *excerpta* collections are the usual carriers, but the typography is
the test, not the genre label: if source citations survive into the chunk body
as running text, this pattern applies. Distinguish from Pattern 2 by position
and function — an attribution that *opens* an extract is prose (Pattern 2:
translated, title-cased); a citation that *follows* its unit is apparatus
(this pattern: verbatim Latin).

Each tail splits into at most two parts:

- **Locator** — the pointer into the source corpus (*De convers. ad cler.,
  num.* 37; IV, *De consid., c.* 3; *Ibid.,* 33). Kept verbatim Latin,
  unanglicized (same footing as `[n: …]` contents — expanding *De consid.* into
  an English title would invent text Migne does not print), and wrapped in an
  **`[f: …]` marker** in the English chunk: `[f: *De convers. ad cler., num.* 37]`.
  Tag content is exactly what Migne prints: internal italics asterisks kept,
  book numerals inside or outside the italics as printed, addressees kept
  (*Epist. 27 ad Ardut.*), the locator's own terminal punctuation included.
  One source cited eight ways in one work is evidence of Migne's citing
  practice — preserve the variance per occurrence; the controlled source-name
  vocabulary is derived later from the accumulated raws (CLAUDE.md rule 9),
  never normalized in the prose, never expanded from memory.
- **Editorial comment** — Migne's prose in the same tail (*Nam vitia identidem
  repullulant*; *Nempe amorem comparis*; cross-references like *Vid. notas,
  ibid.* or *nunc tomo V*). Translated, italic structure kept, left OUTSIDE
  the `[f: …]` marker. When locator and comment share one italic run, close
  the tag after the locator and rebalance the asterisks:
  `[f: *Epist. 126:*] *For it turns to violent means.*`

Rules:

1. **`[f: …]` goes in the English chunks only** — the Latin chunks stay the
   faithful TEI transform, untouched. Renderers strip the wrapper and render
   the content as ordinary markdown, so the page shows exactly what Migne
   prints. The indexer harvests every tag and validates its content (asterisks
   stripped, whitespace normalized) as a verbatim substring of the Latin twin
   chunk — a mismatch is an error, not a warning.
2. **`Ibid.` is a locator.** Tag it as printed (`[f: *Ibid.*]`,
   `[f: *Ibid.,* 33]`); never expand it in the text. The indexer resolves the
   chain (CLAUDE.md rule 9) — resolution is mandatory at index time, because
   it is deterministic there and impossible later from the display string
   alone.
3. **Segmentation guard.** A tag may contain only locator matter: work-title
   abbreviations, *lib./cap./c./num./n./serm./epist./ep./tract./tr./hom.*
   tokens, numerals, *Ibid.*, *ad* + addressee. An italic run containing a
   finite verb, or more than ~8 words, is not all locator — split it: locator
   into the tag; the remainder is either editorial comment (translate) or a
   sentence of real content Migne's italic run has swallowed (translate — it
   is text, not apparatus; 11208 at 1197B traps *Hinc consuetudo consuetudine
   vincitur* after *De consid., c. 3*). Keep the printed italics either way;
   log the comment-vs-content judgment in `cruces.md` when uncertain.
4. **The gate:** these locators MUST land in the index as fontes. A
   florilegium whose index reports 0 fontes is a pipeline failure, not a
   verbatim-policy outcome.

**Worked instance:** 11208 *Flores seu sententiae ex S. Bernardo* (PL 183),
translated 2026-07-18, convention set by the 2026-07-18 Fable session,
sweep EXECUTED 2026-07-19: both chunks tagged, the 1197B swallowed sentence
fixed, `index-work.mjs` extended per rule 9. **Indexed result: 167 inline
locators, 48 resolved *Ibid.*** — an earlier draft of this file estimated
~207, which was an over-count (the work has 171 sentence paragraphs, four of
them sharing a citation). 167 is the verified figure; do not re-derive it.

### 5. *Inquit* interruptions stay INSIDE the guillemets

**Trigger:** Migne prints a quotation whose attribution verb (*inquit*, *inquam*,
*ait*, *dicit*) sits *inside* the quotation marks, interrupting the quoted words:
`« Ego sum, inquit, via et veritas. »` English convention would break the quote
around the speech tag (`"I am," he says, "the way…"`). **Do not re-punctuate.**

Rule: **guillemets open and close exactly where Migne opens and closes them,
1:1.** The interrupting verb is translated in place and stays within the quote:
`« I am, he says, the way and the truth. »` Never split one printed quotation
into two, never insert a closing-then-reopening pair the plate does not have.
The quotation is a typographic fact of the page, on the same footing as a column
anchor; English comma habits do not outrank it.

Corollary — **unclosed quotations stay unclosed.** Migne sometimes opens `«`
and never closes it. Mirror the plate: do not supply the missing `»`. Log it as
a crux (column + reading) so the defect is attributed to Migne, not to us.

Mechanical consequence: the indexer's quotation-count parity check (la vs en)
only holds if this rule holds — "quotation count differs" warnings are almost
always this pattern, not a real omission.

**Worked instance:** found by post-hoc sweep 2026-07-24 — five English
quotations had been broken around "he says": 10103 (Peter Damian, *De picturis
principum apostolorum*) ×3 and 11436 (*Vita et passio S. Thomae Cantuariensis*)
×2. All rejoined 1:1, which also cleared both index parity warnings. 10103's
Romans quotation at 0594B–C is **unclosed in Migne**; the supplied `»` was
removed so the English mirrors the plate, and it is logged as a crux there.

### 6. Which quotation mark: « » is Migne's, " " is ours

Wilson's ruling, 2026-07-28: *consistency is the requirement.* The corpus already
had two quotation marks in play; this fixes which does what, and the division is
**provenance**, not taste:

- **« »** — reproduces a quotation mark **Migne prints**. Placed 1:1 with the
  Latin twin, per Pattern 5. Never supplied where the plate has none, never
  omitted where it has one.
- **" "** — a quotation mark **we supply** because English needs one and Migne
  marks the quotation some other way (italics, a bare *inquit*, or nothing at
  all). Legitimate and common: 219 chunks carry these.

The payoff is that a reader can tell the plate from the edition by eye, with no
apparatus — the same instinct as `refDisplay` keeping what Migne prints while
`refKey` resolves the truth. It also makes the rule mechanically checkable:
**guillemet counts must equal the Latin twin's** (`verify-english.mjs` check 7),
while straight quotes are free.

Corollary for lemma-and-gloss commentary (the hard case): where the commentator
quotes a lemma and then glosses it, only the lemma marks Migne actually prints
become « ». A gloss-internal quotation the translator adds for readability takes
" ". Do not "tidy" a commentary into uniform guillemets — that erases the
distinction the rule exists to preserve.

**State at adoption (2026-07-28):** 42 chunks drifted from the Latin twin, 65
instances in all once each mismatch is localized to its column-anchored segment
(column anchors are verified 1:1 between the twins, so they partition both texts
identically — that localization is what makes this checkable at all).

15 of the 65 were mechanical and were fixed the same day by script, behind a gate
asserting that nothing but quotation characters changed: 2 where the English had
supplied marks Migne prints nowhere (demoted to " "), and 13 Pattern 5 breaks
where an isolated *inquit* interruption had been lifted out of the quotation.

**50 instances remain, in 29 chunks of 3 works** — 11064 Hugh of St Victor *In
hierarchiam coelestem* (22 chunks), 9076 Haimo (6), 21413 Alcuin (1). They split
34 "English carries marks Migne does not" and 16 "English is missing marks Migne
prints," and each needs its Latin segment read, so they are judgment, not script
work. Tracked in `next-session-resume.md`.

*Correction of record:* an earlier draft of this paragraph said 94 chunks. That
figure came from a scan comparing the Latin's whole FILE against the English
BODY — and Latin frontmatter carries guillemets in its `incipit:` field, which
inflated every Latin count. Compare body to body.

### 7. Render the printed Latin literally — the hardest rule

**Wilson, 2026-07-28: "render Latin literally. that is the hardest rule of all."**
This **supersedes** the precedent set in `src/english/10103/cruces.md` and followed
by several later works, which rendered "the intended reading" wherever a printed
form looked like a slip. That precedent is withdrawn.

The rule: **the English renders what Migne's plate prints, not what it ought to
have printed.** This holds even when the printed reading is odd, ungrammatical,
or says the opposite of what the argument requires. Conjecture belongs in
`cruces.md`, never in the running text.

Why it is the hardest rule and not merely a strict one: the corruptions are
frequently the most interesting thing on the page, and every silent correction
destroys evidence a later scholar cannot recover from our English. A dropped
negative that makes Richard of St Victor assert the opposite of his own argument
(11534 col. 1054A; 11537 col. 1069D) is exactly the kind of thing an edition
exists to expose. Emending it produces smooth prose and a worthless witness. The
same logic already governs scripture (translate Migne's quoted wording, never a
conventional version) and citations (`refDisplay` keeps the printed reference
while `refKey` resolves the true one) — this pattern simply says the principle
has no exception for the body text.

What to do instead, always:
1. Render the printed reading as literally as it can be put into English.
2. Log the crux: column, printed form, the reading you believe was intended, and
   the evidence for it.
3. Never silently smooth. If a sentence is unconstruable, say so in the crux and
   render it as closely as the printed words allow.

**The non-word class — RULED (Wilson, 2026-07-28): carry it through.** Type that
is not a word at all (`bonorem` for *honorem*, `clastibus` for *classibus*, `vul`
for *vult*, `Canetenim` for *canet enim*) cannot be rendered literally, because
there is nothing to render. It is **carried into the English untranslated, in
italics, with a crux** — "that great *bonorem*" — exactly as untranslatable
technical Latin is already handled. Reading the typo was considered and rejected:
it is the same silent correction this pattern exists to forbid, merely applied to
a smaller class, and it leaves the reader no way to know the plate is defective.

The page will occasionally look strange. That is the intended cost: a reader who
meets *bonorem* in italics learns something true about Migne's plate, and the
conjecture (*honorem*, near-certain) is one click away in the crux. Pattern 7 has
no exceptions.

#### 7a″. The lemma quietly conformed — the dominant failure in SCRIPTURE COMMENTARY

Measured, 2026-07-30. The blind polarity read of 7914 (ps.-Cassiodorus on the Song
of Songs, a verse-by-verse commentary) returned **seven defects on our side, and not
one was a dropped negation**: five were lemmata conformed to familiar English and two
were mis-bound references. The same day's read of 11065, a homily collection, produced
the opposite profile — negations and scope errors, no conformations. **The genre
predicts the failure mode, and prompts should say so.**

The mechanism: a commentary quotes a verse and then expounds *the words it quoted*.
The translator meets a verse he knows, and the remembered English arrives before the
printed Latin is read. Nothing looks wrong afterwards — the sentence is smooth, the
citation is right, `verify-english` passes — but **the exposition now rests on a word
that is no longer on the page.**

Worked cases, all found blind and all fixed:
- **7914 @1079C** — Migne prints Heb 12:14 as *et **castimoniam**, sine qua nemo
  videbit Deum*; our English gave the Vulgate's "holiness" (*sanctimoniam*). Nine
  words earlier our own English rendered *castimonia* correctly as "chastity", and
  the proof-text is adduced **precisely for chastity of the flesh**. The argument's
  keyword had vanished from its own proof-text.
- **7914 @1094A** — Heb 11:10 printed *Exspectabat enim **manentem** civitatem*; our
  English gave "a city that hath **foundations**" (*fundamenta habentem*), importing
  a word the printed text does not contain at all.
- **7914 @1103A** — Matt 7:25 printed *fuit enim **aedificata** supra petram*; our
  English gave "**founded**" (*fundata*), six words after correctly rendering
  *aedificavit* as "built".
- **7914 @1071D** *Vidimus* → "We see" (Vulgate present restored over Migne's
  perfect) · **@1079B** *cinis et pulvis* → "dust and ashes", reversing the printed
  order in a gloss that turns on ashes (*cinericeum colorem*).

**How to catch it.** For every scripture lemma, read the printed Latin word by word
against the English *before* trusting either. The tell is a familiar cadence: if the
English sounds like the verse you already know, that is the moment to check the plate,
not the moment to relax. Where Migne's wording diverges, the English must diverge too,
and the divergence gets a `[var: …]` (Pattern 14) when it is material.

**Never conform a lemma to make it recognizable.** Recognizability is precisely the
loss: the reader who spots the familiar verse learns nothing, while the reader who
meets *castimoniam* learns what this author was actually arguing from.

#### 7a′. A crux that DESCRIBES a repair does not make the repair honest

Worked case, found 2026-07-30 by a blind polarity read — the subtlest instance of
7a so far, and the one an audit is least likely to catch. 11058 @0270C prints
*Quomodo obtexit, texitne superiora, hoc est coelestia videre posset.* The run
*texitne* is garbled, but `ne` + subjunctive *posset* is a **negative purpose
clause**. The English put *texitne* inside a `[sic:]` marker and then translated
everything it governs **affirmatively**: "…the higher things, that is, the
heavenly, it might be able to see." Hugh's own preceding clause says the light of
reason was *darkened by sin, not taken away*, and the frame leaves man *in the
darkness of ignorance*. The page stated the opposite of his argument.

**The column was already logged as a crux**, and the crux even conjectured the
right reading — then justified the affirmative English on the ground that "the
negative is visibly present in the carried Latin." It was not: only two letters
were inside the marker, and a reader meets the translated clause, not the marked
fragment.

Two rules follow, both general:
1. **Quarantining a fragment does not quarantine what it governs.** If a marked
   run carries a negation, particle, or conjunction that governs translated text,
   the translated text must carry its force. Otherwise the marker becomes a place
   to hide a repair.
2. **A logged column is not a checked column.** A crux file records what a
   translator noticed, not that the rendering is right — so a defect-hunt must
   form findings blind and reconcile after (the rule already in the runbook's
   step 4a), and an entry defending an unusual rendering deserves *more* scrutiny
   than an unlogged passage, not less.

Supplying the negative here is not an emendation. It renders the `ne` Migne
prints, which was being dropped.

#### 7a. The silent repair — the failure mode this rule actually has

Pattern 7 is broken far more often by **quiet repair than by open emendation**,
and quiet repair is the more dangerous of the two because nothing on the page
looks wrong afterward. An open emendation at least announces itself; a repair
made *inside the translation* leaves a smooth English sentence, a clean
`verify-english` run, and no trace that the plate was ever defective.

**The worked case (found by the PL 196 polarity sweep, 2026-07-28):** at
11547 col. 0260D Migne prints

> *Utrobique **nolebat** eos **azyma** habere, utrobique sine corruptione esse.*

His own preceding sentence supplies the right verb — *eos fieri **volebat**
conspersionem absque fermento* — so `nolebat` is a plate defect. Faced with a
sentence that now said the Apostle did not want them to have *unleavened bread*,
the translator rendered *azyma* as "**leaven**": the opposite word, chosen so the
English would make sense. The defect was not corrected, it was **concealed**, and
it survived a verifier pass and a corpus-wide emendation sweep because that sweep
read `cruces.md` files and this repair had never been logged as a crux.

**The rule that follows:**
- **A word may not be translated as its opposite, or as anything other than what
  it means, in order to rescue a sentence.** If the printed sentence is
  self-contradictory, the English is self-contradictory, and the crux explains
  why.
- **Every negation the Latin prints appears in the English, and no negation
  appears that the Latin does not print.** `non`, `nec`, `neque`, `nisi`, `haud`,
  `nunquam`, `nullus`, `nihil` — carry each one, including when carrying it makes
  the sentence contradict itself. (At 11536 col. 1085D a printed `haud` was simply
  dropped, so our English asserted that the Dead Sea *is* worthily so called, in a
  sentence whose next clause denies it.)
- **A repair is not made honest by a crux that describes it.** Several cruces have
  correctly identified a defect and then under-rendered it anyway. The crux
  records; the text reproduces. Both, or the entry is incomplete.
- **If you cannot make the printed reading say anything at all**, render it as
  closely as the words allow and say so in the crux — never substitute a word that
  works.

**The corpus sweep of 2026-07-28 confirmed this is a CLASS, not a lapse — and that
it has five mechanisms, only two of which the rule above described.** 68 works,
454 chunks, 178 sites; 26 were our own. The purest specimen is **8625 col. 0940B**:
Migne prints *ibi homo Adae de peccato **fuscatur*** — "is darkened" — and our
English read "**is cleansed**." The exact opposite verb, chosen because baptism is
the subject and *ex baptismo remissio peccatorum largitur* follows a few lines
later. Different volume, different century, different translator's stint from the
11547 case above. It now reads "is darkened from sin," with the crux carrying the
conjecture.

**Watch for all five. Only the first two leave a word you could search for:**
1. **Opposite word substituted** to rescue a broken sentence (8625, 11547).
2. **Printed negation dropped** (11536 @1085D).
3. **Connective smoothed** — 8777 @0191B, where a dropped negative was papered over
   by rendering the second `sed` as "yet". *No lexical trace at all.* Nothing to
   grep, nothing that looks wrong in the English.
4. **Comparative reversed** — 11083 @0855A; 11088 @0896C turned *minus egere*
   ("to need less") into "to lack more", flipping the one word the maxim turns on.
5. **Reference or agency mis-bound** — the Latin's morphology fixes who does what
   to whom and English word order has to reconstruct it. `qui`/`cui` (8708 @0659D,
   reversing who is salvation to whom); a pronoun binding a negation to the wrong
   subject (11086 @1016A); an ablative agent inverted so that we are covered by the
   Noahs instead of they by us (11208 @1199B). These are not negation errors at
   all, and no negation-aware check will ever see them.

**Undoing a silent repair is a fix, not a regression.** When a sweep finds one, the
English goes back to the printed reading and the crux carries the conjecture. The
plate's contradiction is the edition's evidence; concealing it is the only way to
actually lose it.

**Two boundaries the same sweep drew, both worth keeping:**
- **Already-literal is not an error.** At 10083 @0493D Migne prints *requiescere
  faciam* where Hosea 1:4 has *quiescere*. Our "make to rest" is the faithful
  rendering of what is printed; changing it to "cause to cease" would be a silent
  emendation — the very thing this rule forbids. Crux, no edit.
- **When the plate is corrupt past construing**, neither our reading nor the
  conjecture is defensible (9604 @1347D). Do not quietly pick one. Mark it and
  escalate.

**Why no mechanical check catches this.** Counting negation particles across the
Latin/English pair was tried and fails in both directions: it flags faithful
paragraphs (Latin `nisi` → English "save"; `non moritur` → "dies no more") and it
missed the confirmed 11536 case outright, because other negations in the paragraph
balanced the count. There is no substitute for reading the pair. That is why the
polarity check is a pipeline step (`translation-runbook.md` step 4a) and not a
verifier rule.

### 8. Punctuation follows the plate too — preserve, never supply, never delete

**Wilson, 2026-07-28.** Pattern 7's worked examples are all word-level, which left
punctuation as a second silent-correction channel. It is closed: **the printed
marks are carried through exactly as the printed words are.**

- **Preserve** what Migne prints, however wrong: a `!` closing a question (11537
  col. 1060C), a `?` closing a statement (11537 1063D–1064A), a full stop breaking
  a conditional in the middle of a scripture quotation (11534 1050D).
- **Never supply** a mark the plate lacks — including a terminal stop. A sentence
  that simply stops (11542 col. 1036D) stops in the English too.
- **Never delete** a mark the plate prints. This was the live defect: 11542
  col. 1041D (`juxta superiorem modum. quaeritur cur…`) and 11436 col. 0349A had
  been silently merged into single sentences.

Migne's punctuation is his 19th-century editors' work, not the medieval author's —
that is an argument for recording it faithfully, not for feeling free to improve
it. Where a printed mark makes the English genuinely unreadable, render it as
printed and log a crux; do not adjudicate in the text.

### 9. What is NOT a Pattern 7 defect

Two classes look like corruptions and are not. Both were being "fixed" by agents.

**Attested medieval spellings are correct Latin** (Wilson, 2026-07-28). The test is
whether the form is attested in medieval Latin lexica, not whether it is classical.
*aquiescas* for *acquiescas* (8195 col. 1248C) and 7508's Merovingian orthography
are conventions of their period: translate them normally, no italics, no crux.
Carrying every non-classical spelling through would italicize a large share of the
corpus and bury the real defects in noise. Reserve carry-through for forms unique
to this plate.

**Latin grammatical gender has no English exponent.** A gender mismatch (9436 col.
0899A *vocati*/*sacri*; 8715 col. 1170B *manum meum*; 11436 col. 0351B *futurus*)
cannot be rendered either way in English — participles, adjectives and possessives
carry no gender. There is no emendation to undo and none to make. Log it as a
crux, leave the English alone, and mark the entry so a later sweep does not churn
it.

**Section labels normalize in English** (Wilson, 2026-07-28). 11066 prints its
label four ways (`QUAESTIP`, `QUESTIO`, `QAEESTIO`, `QUAESTIO.`); the English head
reads QUESTION throughout. The English head translates a structural label and
there is no English exponent for a Latin typo — and the Latin side of the parallel
page preserves the misprint verbatim, so nothing is concealed from the reader.
This is the one place normalization is right, and it is right *because* the defect
stays visible in the facing column.

### 10. Split type is non-word type — carry the whole broken run

Migne's word-division defects run both ways, and both are the same defect:

- **Run together** — `Canetenim` for *canet enim*, `sedet` for *sed et*,
  `vitulaeaspersus`, `diligitamicum`, `quidemcarnis`.
- **Split apart** — `ur sam` for *ursam*, `Ad dam` for *ad damam*,
  `supernatur alis` for *supernaturalis*, `ves ere` for *vespere*,
  `provincio lae`, `Xis tus`, `I otetur`.

Both are carried through untranslated in italics under Pattern 7, **spacing
included**: `*ur sam*`, `*supernatur alis*`. An earlier draft in 11064's cruces
justified rendering the split cases by sense on the ground that "the source
spacing is not otherwise reproducible in running prose." That is not true — it
reproduces exactly.

**Carry the WHOLE broken run, even when one fragment is a real word.** `Ad dam`
keeps `Ad` inside the carried run: the defect is the division, not either
fragment, and rendering half of it ("But to *dam*") would misrepresent the plate
while looking like a considered reading. This is the one place the Pattern 7
boundary between real words and non-words does NOT apply — the unit is the run.

Where a broken run sits inside an already-italic scripture lemma it takes no
second italic marker (nested italics are not expressible), same as every other
carried non-word. Say so in the crux.

### 11. Dittography — print it twice, mark it `[d: …]`

**Wilson, 2026-07-28.** Migne's plate sometimes sets the same run twice
(*puro pura* at 11064 col. 0941D; `potentiores` twice at 11542 col. 1042B;
*juxta … juxta* at 11534 col. 1051B). Pattern 7 governs: **both occurrences are
rendered.** But an unmarked repetition in the English reads as OUR error, not
Migne's — "by pure by pure and naked revelation" looks like a build defect on a
reading page, and invites a correction we would have to decline.

So the repetition is **printed and marked**:

`by pure [d: by pure] and naked revelation`

- The marker wraps **the repeated occurrence only**, not the original.
- It renders as ordinary text with a dotted underline and the tooltip "Repeated
  in Migne's plate" (`.dittog`). The words are **not** dimmed, shrunk, bracketed
  or set as apparatus — they are the author's text, printed twice because the
  plate prints them twice. Only their *provenance* is annotated.
- Like `[f: …]`, the marker is **English-only**. The Latin chunk stays the
  faithful TEI transform and carries the repetition unmarked; a `[d: …]` in a
  Latin chunk is a hard verifier error (check 8).
- Log the crux as always: column, the repeated run, and whether it looks like a
  compositor's doubling or a genuine textual doubling.

**Why not brackets.** Square brackets were the obvious candidate and are already
overloaded in this corpus: they carry BOTH Migne's own bracketed matter
(`[ *al.,* hujus]`, `[securitas]`, `[charta]` — his, untranslated) AND our
supplied English words (`[it]`, `[them]`, `[and]` — ~95 instances). A third
meaning would have made an ambiguous convention worse. The `[x: …]` marker family
is unambiguously ours and already understood by the pipeline.

*(Open, related: the bracket overload above is itself worth resolving — a reader
cannot currently tell Migne's brackets from our supplied words. Not urgent, but
it is the same "reader must tell plate from edition" principle that Patterns 6
and 7 exist to serve.)*

### 12. Carried type is marked `[sic: …]` — the defect is not ours, say so

**Wilson, 2026-07-28: "put notes for defects that aren't ours, like sic."**

Pattern 7 settled *what* to do with broken type: carry it through untranslated,
in italics. It did not settle how the reader is meant to know. And italic Latin
in the English already means something else entirely — a technical term with no
clean English equivalent, deliberately left in Latin (*precaria*, *emphyteusis*,
*archisterium*, register section above). So the page gives one signal for two
opposite situations:

- *precaria* — correct Latin, our editorial choice, nothing wrong with it;
- *bonorem* — Migne's broken type, carried because there is nothing to render.

A reader meeting either one sees the same italics and cannot tell an editorial
decision from a printer's error. That is the exact failure Pattern 6 was written
to prevent for quotation marks and Pattern 11 for dittography; this closes it for
carried type.

**The rule:** type carried through under Pattern 7 or Pattern 10 is wrapped in a
`[sic: …]` marker.

`that great [sic: *bonorem*]` · `the [sic: *ur sam*] which came` · `[sic: *Ad dam*]`

- The marker wraps **only** the carried run — the whole broken run per Pattern 10,
  including a fragment that is a real word (`Ad` stays inside `Ad dam`).
- It renders as the words themselves under a wavy gilt rule, with the tooltip
  *"Printed thus in the source text — see the notes on this work"* (`.sic`). The words
  are **not** dimmed, bracketed, shrunk, or set as apparatus. Only their
  **provenance** is annotated — the same principle as `.dittog`, and distinguished
  from it by rule shape so a doubled run and broken type are tellable apart
  without hovering.
- **English-only**, like `[f: …]`, `[d: …]` and `[nt: …]`. The Latin chunk stays
  the faithful TEI transform and carries the defect unmarked; a `[sic: …]` in a
  Latin chunk is a hard verifier error.
- **Content must be verbatim in the Latin twin** — checked as a substring
  (asterisks stripped, whitespace normalized), exactly as `[f: …]` is. This is
  what makes the convention safe rather than merely tidy: a `[sic: …]` can never
  be wrapped round *English* words, which would silently blame the source for our
  prose. A mismatch is an error, not a warning.
- The crux is still required, and is still where the conjecture lives. The marker
  says *this is not ours*; the crux says *and here is what it was probably
  meant to be.* Neither replaces the other.

**What does NOT take a `[sic: …]`:** everything Pattern 9 exempts. Attested
medieval spellings are correct Latin for their period (*aquiescas*), gender
mismatches have no English exponent, and normalized section labels are already
handled by the facing Latin column. Marking those would bury the real defects in
noise — which is the same argument Pattern 9 makes for not italicizing them.

Nor does it apply to a **real word that is merely wrong** (`fuges` for `sugas`,
`munde` for `mundo`): those are rendered as ordinary English under Pattern 7,
because they *can* be rendered, and the English word on the page is ours even
though the reading is Migne's. Only carried, untranslated type is marked. (This
boundary is worth watching — 11081 col. 0030B, where the literal rendering is
actively misleading, is the case that would reopen it.)

**The test is "does it render IN PLACE?", not "is it a Latin word?"** (ruled
2026-08-09 on 11632, where a marker audit proposed stripping four `[sic:]` for
sitting on real words and the answer was that all four keep it). Two ways a real
word fails the test:

1. **It has no grammatical slot.** A form in the wrong person or mood cannot be
   carried by any English: 11632 prints *Pecte* for *Recte* @0202C — an imperative
   "comb!" stranded in a declarative clause governed by *dicit* — *ama* for
   *amat* @0350A, an imperative among third-person finite verbs, and *sternis*
   for *sterilis* @0369A, "thou strewest" where the clause needs a predicate
   nominative. `fuges`/`munde` are not like these: they occupy their slot and
   merely mean the wrong thing.
2. ⭐ **It renders only by HIDING the defect.** 11632 @0304A prints *ut **signa**
   prius ardeat* — a plural noun against singular *ardeat*. "That signs may burn"
   is perfectly good English, and that is the problem: English *may burn* is
   number-neutral, so the rendering silently repairs the disagreement and leaves
   the reader nothing to see. **Where the English has no exponent for the defect,
   rendering it is a silent repair, and the marker is the only honest treatment.**

⚑ Note that (2) runs *opposite* to Pattern 9, which normalizes precisely where
English has no exponent. The difference is what the defect is evidence OF:
Pattern 9's cases (grammatical gender, section labels) are systemic features of
Latin that carry no information about this plate, while a number disagreement in
one clause is a fact about this printing. Normalize the language; mark the page.

**Where Migne prints his own *sic*, do not add ours.** 10517 col. 1099B prints
*De hoc loco acenti ( sic )* — the nineteenth-century editor had already caught
it and said so. His `( sic )` is reproduced verbatim like any other printed
matter, and it does the job our marker would do; adding `[sic: …]` on top would
tell the reader twice and blur whose observation it was. Ours marks defects
Migne passed over, not defects he flagged.

**The operational test, found during the sweep and worth stating plainly:** read
the crux's own verb. A crux that says the reading was *"rendered as printed"* or
*"rendered literally"* means the word on the page is **English, and ours** — no
marker. A crux that says the run was *"carried into the English untranslated, in
italics"* means the word on the page is **Latin, and Migne's** — marker. The
question is never how wrong the Latin looks; it is whether what the reader sees
is our translation or his type.

**Scope at adoption (2026-07-28):** ~73 instances across 30 works, swept from
each work's `cruces.md` rather than by pattern-matching the prose — per the
method warning of 2026-07-28, a phrase-matching sweep reports itself complete
while leaving half the instances in place.

### 13. `[ed: …]` — the edition's own voice, for holes in the digitization

Pattern 12 marks a defect the plate *has*. This marks text the plate has and our
**source** has lost — a different thing, and it cannot wear the same mark,
because there is nothing there to call *sic*.

The case that forced it: **11055** at cols 0104B–0105A, Hugh's catalogue of
David's mighty men. Corpus Corporum's TEI transcribed the tally column and
dropped every name, as literal empty `<item/>` elements (entries 27–31 survive
only because they happened to be marked up as a `<table>` rather than a `<list>`
— which is itself the evidence that this is a markup artifact, not Migne).
Rendered faithfully, the page shows a numbered list with no names: a hole that
reads as *our* bug to anyone who does not open the notes. Silence was the wrong
answer to that, and so was inventing the names.

**The rule:** where the digitized source has demonstrably lost text the plate
carries, say so on the page, in our own voice, in a `[ed: …]` marker.

- Content is **ours** — English, plain, factual. Name what is missing, whose
  loss it is, and what recovery would require. Never speculate about the content
  of the lost text and never supply it from elsewhere.
- Renders set apart from the text (`.ednote` — smaller, gilt, letter-spaced), so
  that it cannot be mistaken for something Migne printed. This is the **only**
  thing on a reading page that is neither the author's words nor Migne's.
- **English-only**, and the verifier enforces the mirror of the `[sic: …]` test:
  an `[ed: …]` whose content appears verbatim in the Latin twin is a hard error,
  because that would mean Migne's words had been dressed as ours.
- Stripped from the word-ratio count — our note is not the author's word count.
- Use it **sparingly**. It is for demonstrated source loss, not for uncertainty,
  not for commentary, and not for anything a crux can carry. A page thick with
  editorial asides has stopped being an edition of Migne. When in doubt, the
  crux is the right home.

Where the loss is later recovered from the plate, the fix belongs in
`data/tei-patches/<idno>.json` with provenance (the 11085 precedent, below), and
the `[ed: …]` marker is removed in the same commit — the note exists only for as
long as the hole does.

#### 13a. When the loss IS recoverable — the visible-structure rule (Wilson, 2026-08-01)

The rule above was written for a hole that stays a hole. The PG paired pilot hit
the other case constantly: **our source has lost text, and the plate carries it,
and we can put it back.** Three agents on three works answered three different
ways — silently, with `[ed:]`, and by marking the break without restoring — each
defensible, because Pattern 13 and the attribution ladder's row 1 (certain Calfa
damage is corrected *silently and logged*) both applied. Wilson ruled:

1. **Words lost mid-sentence, plate certain → restore SILENTLY, log the crux.**
   Ordinary source damage. PG damage is dense enough that marking each one would
   put our voice on nearly every paragraph — which is the "drown the text"
   failure the ladder's silent-correction rule already anticipates.
2. **A reader-visible structural unit lost — a heading, a speaker turn, a
   subscription, a division mark → restore WITH `[ed: …]`.** Its absence would
   otherwise be invisible *as an absence*: nobody can miss what they cannot see
   was ever there. This is the same argument that forced the pattern in 11055.
3. **Text lost and NOT recoverable (plate absent or illegible) → `[ed: …]`
   marking the hole, supplying nothing.** Unchanged from the rule above.

**The principle, stated once:** the marker's job is to make an absence visible
when it would otherwise be invisible as an absence. It is not a receipt for
every keystroke of repair — that is the cruces file's job, and the cruces file
is where an auditor looks.

Worked cases from the pilot: Nicetas's five ΛΟΓΟΣ division headings and a whole
lost speech of the Latin → clause 2, `[ed:]` (and note Calfa strips all five, so
without the marker the work reads as one undifferentiated fragment where the
plate prints five discourses). Oecumenius's nine words lost at the 1325 column
break → clause 1, silent. Oecumenius's truncated final subscription → clause 2,
`[ed:]`. Two Oecumenius sigla whose letters are lost → clause 3.


### 14. `[var: …]` — Migne's scripture citation diverges from the received text

Pattern 12 marks type the plate got **wrong**. Pattern 13 marks text our **source**
lost. This marks a third thing that is neither: the plate is perfectly legible,
nothing is missing, and the quotation simply **does not agree with the Vulgate**.

The case that forced it: **10083** at col. 0493D. Peter Damian argues that
*Jezrahel* here sounds *vindictam Dei et furorem*, and introduces Hosea 1:4 as
proof — but Migne prints *et **requiescere** faciam regnum **domum** Israel* where
the Vulgate has *quiescere faciam regnum domus Israel*, "I will cause the kingdom of
the house of Israel **to cease**." Rendered faithfully — and the scripture policy
requires it to be rendered faithfully — the proof-text promises **rest** in a
passage arguing for vengeance, and Damian appears to argue badly.

Neither existing marker could carry it. A `[sic: …]` may only wrap words carried
**verbatim from the plate**, so the comparison could not go inside it (the verifier
correctly rejected the attempt); and `[ed: …]` is reserved for what the digitization
has lost. The divergence therefore had nowhere to live but `cruces.md`, which no
reader opens.

**The rule:** where Migne's printed scripture differs from the received text in a way
that changes the sense, render Migne — always — and note the received reading in a
`[var: …]` marker.

- **Render what Migne prints. This pattern never licenses substitution.** The
  scripture policy is unchanged and unconditional; `[var: …]` is a note *beside* the
  faithful rendering, never a replacement for it.
- Content is **ours**: English, plain, factual. **Open by naming the witness** —
  `Vulg.` · `LXX` · `Gk` · `Heb.` · `Douay` · `Vet. Lat.` — then give the received
  reading and, if the sense turns on it, a two-or-three-word gloss.
  `[var: Vulg. *quiescere*, "cause to cease"]`
- **Never speculate about why they differ.** A divergence may be Migne's compositor,
  his copy-text, an Old Latin reading, or the author quoting from memory — and
  telling those apart is a research question, not a translation one. State the two
  readings; let the crux argue.
- **English-only, never empty**, and the verifier enforces the `[ed: …]` mirror test:
  the content may not appear verbatim in the Latin twin, because that would mean our
  own note had been filled with Migne's words. Stripped from the ratio count.
- Renders as `.varnote` — small, roman, in the maroquin rather than the gilt, so it
  cannot be mistaken for `[ed: …]`. One annotates the text; the other confesses a
  hole in it.
- **It may sit beside a `[sic: …]`** when the plate is both divergent *and* broken.
  They answer different questions and neither subsumes the other.

**Not retroactive.** Introduced 2026-07-29 and applied to 10083 only. The corpus has
not been swept for this class, and the polarity sweep did not hunt it — scripture
divergence was on that sweep's do-not-report list. Assume unmarked divergences remain
in the 86 shipped works; mark them as they are found, and do not read the absence of a
`[var: …]` as evidence that a citation agrees with the Vulgate.

### 15. `[nt: …]` — a note that is PROSE, not a citation, and is translated

`[n: …]` contents stay verbatim Latin because they are Migne's *citations* —
`(Gen. II)`, *De consid.* l. 3, c. 3. That rule was written for locators, and
applied to a note that is an argument it does something it was never meant to
do: it leaves an English reader a Latin paragraph in the middle of the page.
Pattern 4 already drew exactly this line for `[f:]` tails (locator verbatim,
editorial comment translated); it holds for notes too.

- **`[n: …]` = citation.** Verbatim Latin, unanglicized, content-checked against
  the Latin twin. Unchanged.
- **`[nt: …]` = editorial prose.** A note whose content is a *statement* —
  explanation, scholion, editorial comment — is **translated**, and appears in
  the English chunk only.
- **Decide by content, not by length.** A 23-item citation list is still a
  citation (11064's stays `[n:]`); a 64-word explanation of how Roman numeral
  subtraction works is prose (8407). Length is only a hint: in the whole chunked
  corpus **just six notes exceed 20 words**, so the class is small and each case
  can be judged on its own.
- The Latin twin keeps `[n: …]` where Migne prints the note. **`[nt: …]` in a
  Latin chunk is a hard verifier error** — the marker exists to say "this one was
  turned into English," which is only ever true on our side. Marker positions are
  matched positionally across the pair, so an `[n:]` may become an `[nt:]` at the
  same index but may not move.
- Renders as `.notecite.prose` — a note, visibly, but readable.
- **Prose notes are NOT sources.** `index-work.mjs` keeps them out of `fontes[]`
  in a separate `proseNotes[]` bucket. This mattered: 8407 and 9519 had each been
  indexing a scholion as though it were a cited work.

**Worked instances (Wilson, 2026-07-28):** 8407 (numeral subtraction), 9519
(scholion on epilepsy), 11436 (the *quadrilogus* note) converted and re-verified;
11064's citation list correctly stays `[n:]`.

### 16. `[lat: …]` — Migne's Latin column diverges from his Greek text (PG only)

PG prints two parallel witnesses of every work: the Greek text and a Latin
translation (Allatius, etc.). Where they **assert different facts**, PLAN.md
rule 6 calls the divergence "scholarly gold" — it is evidence about the
transmission that neither column carries alone. The English follows the printed
Greek (rule 4); the marker records what the Latin column says instead.

- **Form:** `[lat: …]` in the English only, at the point of divergence, quoting
  the Latin verbatim (italic) with a literal gloss —
  `reigned two years [lat: the Latin gives *duodecim*, twelve]`.
- **Fires on MATERIAL divergence only:** a different number, name, negation or
  polarity, an added or missing clause, a different fact — the test is whether
  a reader of the Latin column would take away something a reader of the Greek
  would not. **Allatius translates freely; looseness, compression, and
  paraphrase are his norm and are NOT divergences.** A marker that fired on
  free rendering would be spam on every page.
- **Numerals need the plate first.** Greek letter-numerals are Calfa's most
  mangled class, so a numeral "divergence" is a Calfa artifact until the Greek
  is verified against a leaf render. Both worked cases are numerals found
  against the scan in the 2026-07-03 pilot: Joram βʹ vs *duodecim* (PG 139) and
  Michael VII ζʹ vs *sex*.
- **Not a defect marker.** `[sic:]`/`[d:]` say the plate is damaged; `[lat:]`
  says the two columns disagree — often neither is "wrong," they descend from
  different exemplars. Where the Greek is *also* suspect, that is the
  attribution ladder's business (`pg-paired-pilot.md` §4), not this marker's.
- Every `[lat:]` gets a `cruces.md` line citing the Latin column number, so the
  claim is checkable against the committed twin (`src/pg-latin/<workKey>/`).
- Renders like `[var:]`: a visible note whose tooltip reads "Migne's parallel
  Latin column diverges from his Greek text."
- **NOT retroactive.** Applied from the paired pilots forward. ✅ **Joel's
  backfill is DONE (2026-08-01)** — its twin was harvested and the retroactive
  pass placed **three** markers, not the two anticipated here: 0240 Joram
  (`βʹ` ‖ *annos duodecim*), 0288 Michael VII (`ζʹ` ‖ *annos sex*), and 0269
  Justinian II (`ἔτη ιʹ` ‖ *annum unum*, where the LATIN is the outlier —
  a divergence is material whichever column is the odd one out).
- **A truncated Latin crop can manufacture a divergence that is not there.**
  The twin and the third-witness Greek crop lose *different* words at the
  column boundary (`pg-paired-pilot.md` §4a). Joel 0236 nearly took a marker
  for Greek `ογʹ` (73) against a Latin reading *anno septuagesimo* (70) — the
  Latin crop had dropped *tertio*, and the **Greek** crop was holding it.
  **Before firing on a numeral, grep the other crop.** The dangerous truncation
  is the one that still parses as a complete, plausible number.

### 17. Second person: **thou is the SINGULAR, you is the PLURAL** — a number marker, not a reverence marker

**Ruled 2026-08-08.** The corpus had drifted into two habits and never chose
between them. This chooses, and ratifies the majority — but for a reason the
majority did not have.

**The rule:** archaic second person (*thou · thee · thy · thine*, with `-est`
/ `-st` verbs) renders a **grammatically singular** addressee. Modern *you ·
your* renders a **plural** one. Nothing else decides it — not who is being
addressed, not how exalted they are, not whether the sentence is a prayer.

- God addressed as `σύ` / *tu* takes **thou**.
- A brother, a monk, a reader, a patron addressed as `σύ` / *tu* takes
  **thou** — the same word, because the source uses the same word.
- A congregation, "brethren", a plural `ὑμεῖς` / *vos* takes **you**, even in
  the middle of a letter written to one man.

**Why it is a number marker and not a reverence marker.** Greek and Latin have
no reverential second person. `σύ` to God is the same `σύ` as to a novice.
Using *thou* for God and *you* for a brother — which is what an English ear
reaches for, and what this translator did before the ruling — **invents a
distinction the source does not make**, and is the same fault as latinizing a
Greek divine name or harmonizing a lemma across works. The archaism has to
earn its place, and this is what it earns: **it recovers a distinction every
source text in this corpus marks and modern English cannot.**

That distinction is already treated as load-bearing elsewhere in this file —
`ἡμεῖς/ὑμεῖς` is a named hazard class with its own plate-verification rule
(the lemma-and-gloss section, Pattern 16). A translation policy that protects
the number of a pronoun with a *marker convention* while erasing it in the
running prose is incoherent. This closes that.

**The worked case, and it is the whole argument in one sentence.** Dorotheus's
Epistles are eight letters to individual brothers, singular throughout — and
Ep. IV quotes Phil 4:7, `φρουρήσει τὴν καρδίαν **ὑμῶν**`, which is plural. Under
this rule the English reads *thou* for nine paragraphs and then "shall guard
**your** heart" inside the quotation, and a reader can see, with no apparatus,
that Dorotheus has just moved from the man in front of him to the church. Under
a flat "you" that is invisible; under a flat "thou" it is falsified.

**Boundaries.**
- The scripture-echo licence (Register, above) is unaffected and is *separate*:
  a familiar verse may echo traditional wording where the printed source matches
  it. That licence covers the **quoted words**; it stops where the quotation
  stops, and it never licenses archaism in the author's own voice.
- Liturgical formulas keep their received English (Εὐλόγησον, Πάτερ = "Give the
  blessing, Father"), archaic or not — an existing rule, unchanged.
- A third-person doxology ("to whom be glory…") has no second person and is
  untouched.
- **An indefinite or generalizing singular is still singular** (Dorotheus VII's
  `τὸ μὴ μεριμνῆσαί τινας` is indefinite *plural* — "that men are not to be
  anxious" — and correctly takes neither).

**Checkability.** This is the point of ruling it this way: under Pattern 17 the
error is *"you" addressed to a singular*, and **the Greek/Latin morphology
decides it, not taste** — so it is adjudicable against the committed twin, like
guillemet parity under Pattern 6. Under the alternative rule ("you" everywhere)
nothing is checkable and 52 shipped works are wrong.

**Sweep — the state of it, measured 2026-08-08, and it is NOT done.**
- 5,811 archaic tokens across **72 of 99** works; 2,964 sentences carry one.
- 61% sit in a sentence with a quotation cue (« », " ", `[n:]`, italics); the
  remaining **1,167 sentences in 52 works carry no cue**. Sampling those shows
  they are overwhelmingly *correct under this rule* — unmarked scripture, or the
  author addressing one monk (`Thou seest then, poor little man` — 11063;
  `Dost thou see…` — 11321). **They are not the sweep's target.**
- ⛔ **The sweep's target is the opposite: "you" used for a SINGULAR.** Two works
  are known out of conformity, both PG monastic prose, both recent:
  **`dorotheus-epistolae-ad-diversos`** — converted 2026-08-08, this ruling's
  worked case — and **`antiochus-epistula-ad-eustathium`**, 21 tokens, every one
  a singular address to Eustathius rendered "you". **Antiochus is SHIPPED AND
  LIVE and has not been converted.** Do it before its next deploy, or rule
  explicitly that it stays.
- No other work has been checked in that direction. **Absence of a fix is not
  evidence of conformity**; assume unconverted instances remain and convert them
  as they are found, per the Pattern 14 precedent.

## Source patches — `data/tei-patches/<idno>.json`

Our Latin is Corpus Corporum's TEI, not the plate. Where the *transcription* is
demonstrably wrong about what Migne prints — not where Migne is wrong, which is
Pattern 7's business — the fix is a patch file applied to the XML by
`chunk-work.mjs` **before** the transform, so that a re-harvest reproduces it
instead of silently reverting. This is the PL analogue of `data/calfa-patches/`
on the Greek side.

- **A patch corrects the markup, never the words.** The 11085 precedent: Corpus
  Corporum had wrapped ~60 words of Hugh's running argument inside a `<note>`
  element. It is not a note Migne prints — the host sentence does not construe
  without it (the verb of the `ut` clause, *demonstremus*, sits inside the
  marker) and the parentheses do not balance. The patch drops the spurious
  element. **Not one word of Migne changed**; `noteCount` went 7→6 and the sixty
  words became translatable.
- **Prove it before patching.** Grammar that does not construe, unbalanced
  punctuation, or empty elements where the plate has text (11055). A reading you
  merely dislike is not a defect, and a defect in *Migne* is rendered literally
  under Pattern 7 — never patched.
- **Patches fail loudly.** A find string matching anything other than exactly
  once is a hard error, not a silent no-op.
- Re-chunk after patching and confirm chunk boundaries are unchanged; record the
  reasoning in the work's `cruces.md`.
- Where the plate's text is lost and *not* recoverable from our source, do not
  patch — mark it `[ed: …]` (Pattern 13) and say what recovery would require.
