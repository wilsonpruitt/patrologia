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
