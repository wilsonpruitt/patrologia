# Cruces — 7020, Auctor incertus, *Exhortatio ad monachos*

Garbled or irregular printed readings in Migne (PL 18), rendered literally in
the English per the register rules, and logged here.

This work carries an unusually high rate of faulty scripture references — a
dozen of its 31 notes point to the wrong book, chapter, or verse. Every one is
reproduced verbatim per the marker rule; they are collected here so the
scripture index is not silently keyed to Migne's errors. **A human read-through
should decide, as a batch, whether these get `citation-corrections.json`
entries** rather than being resolved one at a time.

## Wrong references (chunk 0)

| Column | Printed note | Quotation actually is |
|---|---|---|
| 0071B | `[n: (Rom. VII, 6)]` | 1 Tim. 2:4 (*omnes velit salvos fieri*) — not Romans at all |
| 0071C | `[n: (Genes. XXI; Galat. IV)]` | The sentence is Rom. 9:6; the note points instead to the Ishmael/Isaac material the parenthesis goes on to use. Placement mid-sentence is also irregular. |
| 0072B | `[n: (I Cor. VII, 37)]` | 1 Cor. 7:38, and the wording (*Bonum est nubere, melius est non nubere*) is a compressed recast, not the Vulgate text |
| 0073A | `[n: (Matth. VII, 18)]` | Col. 4:2 (*Orationibus instate, vigilantes in illis*) |
| 0073A | `[n: (Matth. VI, 19)]` | Matt. 7:7 (*Quaerite, et invenietis*) |
| 0073B | `[n: (I Petr. III, 16)]` | 1 Pet. 3:15 |
| 0073B | `[n: (Coloss. V, 16)]` | Col. 3:16 — **Colossians has only four chapters**, so chapter V cannot exist |

The two Matthew notes at 0073A look like a transposition in the plate: the
Colossians quotation got a Matthew number and the Matthew quotation got a
displaced one. Reproduced as printed.

## Wrong references (chunk 2)

| Column | Printed note | Quotation actually is |
|---|---|---|
| 0076C | `[n: (Matth. XIX, 20)]` | Matt. 6:19–20 (*Nolite thesaurizare*) |
| 0076D | `[n: (Matth. X, 27)]` | Matt. 10:37 |

## 0076D (chunk 2) — garbled quotation, not merely a bad reference

- **Printed:** *Quicunque plus me fecerit domum, aut uxorem, aut filios, non est me dignus*
- **Note:** Corrupt. Matt. 10:37 reads *qui amat patrem aut matrem plus quam me
  non est me dignus*; the printed text has lost the verb of loving and left
  *fecerit* ("has made") governing *domum, uxorem, filios* — house and wife
  for father and mother. Rendered literally as printed ("Whoever has made more
  of house, or wife, or children than of me"), which is the intended sense of
  the corrupt line, per the register rule that corrupt Latin is rendered, not
  emended. Do not conform this to Matt. 10:37 in the English.

## 0074D (chunk 1) — citation printed inline, not as a note

- **Printed:** *Nolo judicetis, ne judicemini (Luc. [0074D] VI, 37)*
- **Note:** Two irregularities in one place. (1) This scripture reference is
  printed as a bare parenthesis **inside the italic quotation run**, not as an
  `[n: …]` note — the only such case in the work, and the reason chunk 1's
  `noteCount: 15` does not count it. Reproduced verbatim and untranslated,
  parenthesis and all. (2) The column anchor `[0074D]` falls **inside** the
  citation, splitting "Luc." from "VI, 37"; reproduced in place exactly.
  This citation will be invisible to a `[n: …]`-only indexer — flagged against
  CLAUDE.md rule 9 so the Luke reference is not lost. The quotation itself is
  also loose (*Nolo judicetis* for the Vulgate's *Nolite judicare*).

## 0074C (chunk 1) — bare *Ibid.*

- **Printed:** `[n: (Ibid., 11)]`
- **Note:** Antecedent is `[n: (I Cor. XII, 26)]` at 0074B, so this resolves to
  1 Cor. 12:11. Per `translation-style.md` pattern 4 rule 2 and CLAUDE.md rule
  9, left as printed in the text; resolution is the indexer's job. Note also
  that the quotation it tags actually spans 1 Cor. 12:11–13, not verse 11 alone.

## 0076A (chunk 1) — scripture quoted without italics or note

- **Printed:** *scientes scriptum: Si enim voluntas prompta est, secundum id
  quod habet acceptum est, non secundum id quod non habet.*
- **Note:** 2 Cor. 8:12, introduced by *scientes scriptum* exactly as the
  neighboring quotations are, but set in roman with no `[n: …]` marker where
  every other quotation in the passage has both italics and a note. The
  English reproduces the plain roman as printed rather than adding italics.
  A second uncited quotation follows immediately (the widow's two coins,
  Mark 12:41–44 / Luke 21:1–4, paraphrased rather than quoted).

## 0072B (chunk 0) — sense difficulty

- **Printed:** *quam sic eos, qui ad summa nituntur, vel cupio, vel mando colere*
- **Note:** The comparative *quam* has no clean antecedent clause and the
  sentence is hard to construe as printed. Rendered literally ("rather than
  that I should either desire or command those who strive toward the highest
  things so to cultivate them…"), preserving the awkwardness. Worth a
  read-through; the passage may be corrupt.

## 0072A (chunk 0) — sense difficulty

- **Printed:** *vel contenti puteo aquae vivae, nos in holocaustum nostri,
  hostiam voluntariae oblationis aptemus*
- **Note:** *vel contenti puteo aquae vivae* hangs loose from the syntax of the
  long preceding parenthesis. Rendered literally without supplying a
  connective.

## Anchor-sequence irregularities — verified against the Latin, not errors

- Chunk 0 runs 0071A, 0071B, 0071C, 0072A, 0072B, 0072C, 0073A, 0073B, 0073C —
  continuous.
- Chunk 1 has no 0074B–0074C gap but jumps 0076A at the end; continuous.
- **Chunk 2 ends 0076D, 0077A, then [0078A]** — columns 0077B–0077D are absent
  from the text stream, and the closing scripture quotation is split across
  that gap. Reproduced as printed; no anchor invented. Since this is the last
  chunk of the work, the gap is worth checking against the TEI (CLAUDE.md hard
  rule 1) in case a column of text was dropped rather than being apparatus.

## Attribution

The work is transmitted in PL 18 among Sulpicius Severus material and is given
to *Auctor incertus*; the frontmatter is copied verbatim and no authorial
claim is made or implied in the English.

<!-- corpus-polarity-sweep 2026-07-28 -->
## Corpus polarity sweep — 2026-07-28

Blind Opus read of the Latin/English pair for sense-reversing defects (one word or
one letter asserting the opposite of what the context requires). 1 site(s).
Migne's defects are recorded here and rendered literally in the English; our own
errors were fixed in place. Full context: `data/sweeps/corpus-polarity/REPORT.md`.

### 0075A — added-negative (migne, low confidence)

Printed: *sed ut ex abundanti sic omne quod fingi potest, tanquam possit et credi caveamus, ne [0075B] in nullo famae nostrae vulnere serpat nata ab occasione suspicio.*

Conjecture: **ne in ullo famae nostrae vulnere serpat — Migne's nullo for ullo; the English silently repairs it to "any" (translation-style.md 7a).**

Taken literally, ne ... in nullo ... serpat says the suspicion is to creep into NO wound, i.e. it may creep into some — the reverse of what the whole sentence and its immediate neighbour demand. The very next sentence is "Ipsa famae semina, priusquam linguis nutriantur, intereant" ("Let the very seeds of rumor perish before they are nourished by tongues"), and the clause it depends on is "omne quod fingi potest ... caveamus" ("let us guard against everything that can be feigned"). The same author writes the correct form a few lines later at 0075D-0076A: "ultra supradictos victus ab ullo quippiam praesumatis".

