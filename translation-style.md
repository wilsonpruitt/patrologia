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
