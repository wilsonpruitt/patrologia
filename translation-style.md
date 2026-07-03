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
