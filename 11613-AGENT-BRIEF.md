# 11613 — translation agent brief (Gilbert Foliot, *Expositio in Cantica canticorum*)

PL 202, 1147A–1300B · **53 chunks (0000–0052)** · 66,297 Latin words · 413 notes · 86 numbered
Song lemmata.
Latin: `src/latin/11613/NNNN.md` → English: `src/english/11613/NNNN.md` (same filenames).

**Read this whole file before you write anything. Your range and its named lemma words come in
the launch message, not here.**

## What this work is

Gilbert Foliot (d. 1187, bishop of Hereford then London — Becket's most formidable opponent)
expounds the **Song of Songs** verse by verse: the Bride is the Church, or any perfected soul;
the Bridegroom is Christ. It opens with an `EPISTOLA NUNCUPATORIA` and `GILBERTI PRAEFATIO`
before the exposition proper, which runs through `CAPUT PRIMUM` to `CAPUT VII`.

It is a **lemma-and-gloss scripture commentary**, so **7a″ governs everything**. The shape on
the page is fixed and you will see it in every chunk:

    6. *Laeva ejus sub capite meo, et dextera ejus amplexabitur me.*

    [1221C]Suos allocuta amicos haec Sponsa … dicens: « Laeva ejus sub capite meo … »

**A numbered italic line is a Song lemma.** The gloss beneath it re-quotes the same words —
sometimes inside « » guillemets, sometimes bare, sometimes a fragment — and expounds them.
**Every re-quotation must match your own rendering of the lemma above it, word for word.** This
is the single highest-value thing you do here, and it is where the last four commentaries lost
most of their defects.

## Context you must read first

1. **`translation-style.md`** — the frozen register rulebook. Follow it exactly. The sections
   that will actually decide calls here: **7** (render the printed Latin literally), **7a +
   7a″** (negation fidelity; the lemma quietly conformed to a familiar English), **8 + 8b**
   (sentence-type punctuation: never supply a `?` or `!` Migne does not print, **never delete
   one he does**, and an indirect question keeps its mark by going direct behind a colon),
   **9** (what is NOT a defect), **10** (split type), **12** (`[sic:]`), **14** (`[var:]`),
   **15** (`[nt:]`), **17** (thou = singular, you = plural), **18** (`[cj:]`).
2. **`src/latin/9741/0000.md` + `src/english/9741/0000.md`** — the style anchor pair: exact file
   format, marker handling, register.
3. **`translation-runbook.md` § "Known false positives — do NOT report these"** (items 1–7).
   Column-band arithmetic and `noteCount` off-by-one are the two you are most likely to trip
   over; neither is a finding. **Item 4 applies to you directly: this is a lemma-and-gloss
   commentary, so Pattern 4 `[f:]` inline citation tails do NOT apply. Do not tag them.**
4. Your own chunks' frontmatter. **Copy each Latin chunk's frontmatter VERBATIM into the English
   chunk** — do not invent, reorder, or drop fields.

## Sacred markers (violating any = the work fails verification)

- **Column anchors** `[1221C]`: reproduce VERBATIM, in order, in place. Count them before you
  write each file and again after.
- **Notes** `[n: (Prov. III, 16)]`: reproduce verbatim, contents untranslated — they are
  Migne's own citations. Same count, same order. **Pattern 15 exception:** a note whose content
  is editorial PROSE rather than a citation is translated and re-marked `[nt: …]` in place.
- **Guillemets « »**: sacred, 1:1. Migne opens and closes his quotations exactly where he does;
  your English opens and closes in the same places. Parity is checked against the Latin twin.
- `## ` heads: translate the head text, keep the `## ` structure 1:1. **`(cont.)` on a repeated
  head is OUR chunk division, not a defect — never translate the marker, never remark on it.**
- Italics `*…*` and list `- ` lines: preserve structure.
- Defect markers are ENGLISH-ONLY and are governed by patterns 11–13: `[d: …]`, `[sic: …]`,
  `[ed: …]`. Read those patterns before using any of them.

## ⚠ 7a″ — NAME THE WORDS. The deliverable is the divergence list.

Measured on 8930: the agent range whose prompt **named the specific lemma words** returned 11
`[var:]` markers and the blind read found **zero** defects in it; the range told simply to
"read every lemma word by word" returned 1 marker and the blind read found **seven**. Same
rule, same model, same work. **A general instruction to be careful does not work.**

Your launch message names the Song lemmata in your range. For each one:

1. Render **what Migne prints**, not what the Vulgate or any English Bible prints. Where his
   lemma diverges from the Vulgate, that divergence is data: mark it `[var: …]` per Pattern 14.
2. Then hold your rendering fixed and check **every re-quotation of it in the gloss below.**
3. **Treat the list of divergences as the most valuable thing you produce.** Put it in
   `cruces-<firstChunk>.md` even where you took no marker.

## ⚠ The author's own antithesis words — 11535's lesson, applied here in advance

On 11535 every scripture lemma chain came through clean and **all the damage was in the
author's own rhetorical pairs**, where no prompt had pointed. So they are named here. Hold each
pair rigid **only where the two members actually meet in the same passage** — a fixed-vocabulary
ruling earns its rigidity at the collision, not across the whole work:

- **`sponsa` / `sponsus`** (118 / 68) — Bride and Bridegroom. **`amica` (26) is a THIRD word**
  and is not "bride"; it is the Song's *amica mea*, and Foliot distinguishes them.
- **`dilectus` (63)** — the Beloved, and also the ordinary participle "beloved/loved." Watch
  which is which; capitalized *Dilectus* in Migne is the Bridegroom.
- **`laeva` / `dextera`** and **`sinistra` / `dextra`** — Foliot builds a whole argument on the
  left hand and the right (the *Longitudo vitae in dextera ejus* gloss). Keep them fixed.
- **`nigra` / `formosa`** — *Nigra sum, sed formosa*. The pair is the point of that chapter.
- **`flores` / `mala`** — *Fulcite me floribus, stipate me malis*: flowers are the saints'
  words, fruits their works. The whole gloss depends on the two staying distinct.
- **`caro` / `spiritus`**, **`Ecclesia` / `anima`**, **`umbra` / `lumen`**.

### ⛔ The homograph that will bite: *mala*

**`mala` is TWO WORDS in this work.** The Song's *mala* are **apples** (*stipate me malis*,
*mala punica*, *malorum granatorum*, *sicut malus inter ligna sylvarum*), and Foliot also uses
*malus, -a, -um* constantly for **evil** (*malus angelus*, *equi mali*, *mali homines*, *quae
debentur malis supplicia*). Both appear within a few lines of each other. **Decide from the
syntax every single time — an apple rendered "evil" or an evil rendered "apple" produces fluent
English that passes every automated check.** Same care for *malus* the apple-tree.

## Scripture policy

Translate **what Migne prints**, never substitute a conventional version. This work quotes far
beyond the Song — Proverbs, Matthew, 1 John, Exodus, the Psalms — and every one of those is
governed by the same rule. Garbled type: render literally and log the crux.

## Negation fidelity — read `translation-style.md` 7a before you start

Every `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil` the Latin prints
appears in your English, and none appears that the Latin does not print — **including when
carrying it makes the sentence contradict itself.** That contradiction is usually a defect in
Migne's plate and is exactly what this edition exists to show. **Never translate a word as its
opposite, or as anything other than what it means, to rescue a sentence that will not
construe.** Render as closely as the printed words allow and log the crux. A repair hidden
inside the translation leaves no trace, passes every check, and is the one error class nobody
downstream can find.

## Punctuation — Pattern 8, and it has cost us twice

Migne's marks ride as printed. **A `?` he prints on what reads as a statement is preserved**; a
`?` he does not print is never supplied. `verify-english.mjs` checks question-mark parity
against your Latin twin, and that check has now caught a vanished 46-word sentence (11632) and
two supplied marks (11550). If your count differs from the Latin's, you have almost certainly
dropped or invented a clause — go and find it before you file the chunk.

**8b, new 2026-08-17:** where Migne closes an **indirect** question with `?` (*Quaeritur quid
sit gratia Dei?*), English cannot end that construction with a mark, so recast it into direct
form behind a colon — "It is asked: what is the grace of God?" Never drop the mark, and never
write the un-English "It is asked what the grace of God is?"

## Em-dashes

Migne prints **none** in the entire Latin corpus; our English carries thousands, most of them
the translator's convenience. Prefer a comma, a colon, or a full stop. Use a dash only where it
genuinely carries the sense. This is a tendency to resist, **not** a defect class — never mark
one, never report one, never restructure a faithful sentence to avoid one.

## The corpus is its own control

Before you invent a rendering for a hard word, **grep the other chunks of this work.** That
move settled every hard call on 11632 with no appeal outside the work. `src/latin/11613/` is
53 files; the answer is usually in one of them. Note also that **11550 (Richard's *Explicatio
in Cantica canticorum*) is already englished** and quotes many of the same Song verses — it is
a useful sanity check on a lemma, **but it is a different work with a different plate: never
copy its rendering, and never let it override what Migne prints here.**

## Cruces

Log to `src/english/11613/cruces-<firstChunk>.md`: column + printed reading + your note.
Garbled type rendered literally and noted. **A flagged passage is not a checked passage** — if
you decline a call, say why, because the blind read will look there. Twice now the translating
agent has SEEN the work's worst defect, named it, and left it.

## Do not stop early

Your batch is N chunks; peer agents complete 5-chunk batches at full fidelity routinely. If you
find yourself writing "context budget" at chunk 2, you are repeating a documented failure
pattern — push through your full batch.
