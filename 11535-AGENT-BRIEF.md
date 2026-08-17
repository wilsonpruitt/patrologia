# 11535 — translation agent brief (Richard of St Victor, *De eruditione hominis interioris*)

PL 196, 1229D–1366A · **58 chunks (0000–0057)** · 54,433 Latin words · 336 notes · 540 column
marks · **three books** (LIBER PRIMUS / SECUNDUS / TERTIUS), each restarting its chapter
numbering at `CAPUT PRIMUM`.
Latin: `src/latin/11535/NNNN.md` → English: `src/english/11535/NNNN.md` (same filenames).

**Read this whole file before you write anything. Your range and its named lemma words come
in the launch message, not here.**

## What this work is

Richard's tropological exposition of **Nebuchadnezzar's dream** (Daniel 2, then the second
dream): the statue of gold, silver, bronze, iron and clay read as the stages by which a man of
virtues declines, and the kingdom that is not destroyed read as his restoration by grace. It is
**not** a Song of Songs commentary and inherits none of that tier's rulings — but it *is* a
lemma-and-gloss scripture commentary, so **7a″ governs everything** (below). Daniel is quoted
at length and in running order, and the exposition re-quotes fragments of the lemma in italics
and glosses them.

## Context you must read first

1. **`translation-style.md`** — the frozen register rulebook. Follow it exactly. Sections that
   will actually decide calls here: **7** (render the printed Latin literally), **7a + 7a″**
   (negation fidelity; the lemma quietly conformed), **8** (sentence-type punctuation — never
   supply a `?` or `!` Migne does not print, never delete one he does), **9** (what is NOT a
   defect), **10** (split type), **12** (`[sic:]`), **14** (`[var:]`), **15** (`[nt:]`),
   **17** (thou = singular, you = plural), **18** (`[cj:]`).
2. **`src/latin/9741/0000.md` + `src/english/9741/0000.md`** — the style anchor pair: exact file
   format, marker handling, register.
3. **`translation-runbook.md` § "Known false positives — do NOT report these"** (items 1–7).
   Read it. Column-band arithmetic and `noteCount` off-by-one are the two you are most likely to
   trip over; neither is a finding.
4. Your own chunks' frontmatter. **Copy each Latin chunk's frontmatter VERBATIM into the English
   chunk** — do not invent, reorder, or drop fields.

## Sacred markers (violating any = the work fails verification)

- **Column anchors** `[1231B]`: reproduce VERBATIM, in order, in place. Your frontmatter's
  `colContext`/`colFirst`/`colLast` tell you what to expect. **Count your anchors before you
  write each file.**
- **Notes `[n: ...]`**: reproduce verbatim, contents untranslated — they are Migne's citations.
  Same count, same order; `noteCount` is your check (count `[n:]` in the body only).
  **Exception, Pattern 15:** a note whose content is editorial PROSE rather than a citation is
  translated and re-marked `[nt: ...]` at the same position. Judge by content, not length.
- **`## ` heads**: translate the head text, keep the `## ` line structure 1:1.
  - `## LIBER SECUNDUS.` → `## BOOK TWO.`
  - `## CAPUT PRIMUM. *summary*` → `## CHAPTER ONE. *summary*` — **translate the italic summary
    too** (11064 precedent). Every other chapter prints a numeral: `## CAPUT XV.` →
    `## CHAPTER XV.` **Follow the plate's own numeral form; never renumber, never normalize.**
  - ⚠ **Chapter numbers restart in each book**, so `CAPUT PRIMUM` occurs three times in the work
    and identical numerals recur across books. That is the plate, not a defect. Heads are an
    indexed field — **a head you word differently from a peer agent indexes as a different
    chapter**, so follow the head conventions exactly.
  - ⚠ **Pattern 8 applies to heads**: if a head prints without its closing period, preserve that.
    Never supply one.
- **Italics `*...*`**: preserve structure. In this work the italics carry the quotation texture —
  Daniel lemmata, re-quoted fragments, and Richard's **name-etymologies**
  (*Nabuchodonosor … interpretatur* ***sessio in agnitione angustiae***). An etymology gloss is
  not scripture; translate it, and keep the Latin name it explains visible so the gloss still
  explains something.
- **Defect markers, English-only** (patterns 10–13): `[d: ...]` dittography Migne prints twice ·
  `[sic: ...]` carried type that is the plate's own defect · `[ed: ...]` our own voice, sparingly,
  only where the DIGITIZATION has lost text the plate carries. Read those patterns first.
- ⛔ **There are exactly TEN declared marker forms and `scan-raw-markers.mjs` knows only those.**
  An *undeclared* bracket — `[think]`, `[men]`, `[is occupied]` — passes every check and reaches
  the reader as literal brackets on the page. **A grammatical ellipsis supply is plain text, with
  no brackets at all.** If a supply is genuinely editorial, it takes `[ed: ]`. (11550 shipped
  eight of these and they were caught by eye, not by a script.)

## ⚠⚠ 7a″ — THE dominant failure mode in this genre, and your most valuable deliverable

**"The lemma quietly conformed."** The Latin printed here is *Migne's*, not the Vulgate, and not
what a remembered English Bible says.

- **Translate the lemma from the printed Latin in front of you**, word by word. Never harmonize
  it with the Vulgate, with Douay, or with a remembered rendering.
- Your launch message **names the italic spans in your range, verbatim, chunk by chunk**. Work
  through them one at a time against the received text. Where Migne's printed Latin diverges from
  the Vulgate, mark it `[var: ...]` per Pattern 14 — which has **no formatting precondition**: it
  fires on a continuous quotation functioning as proof-text or as the thing glossed, italics or
  `[n:]` or not.
- **Treat the list of divergences as the most valuable thing you produce.** Measured on 8930: the
  range whose prompt named its lemma words returned 11 `[var:]` and a later blind read found ZERO
  defects in it; the range told merely to "read every lemma carefully" returned 1 and the blind
  read found SEVEN. Naming the words is what works. On 11550 the same protocol produced **no
  conformed lemma anywhere in the work** — including four recorded pulls it resisted.
- **Record the pulls you resisted**, not only the divergences you marked. A lemma where Migne
  agrees with the received text but your instinct wanted to "improve" it is positive evidence and
  belongs in your cruces file.
- Where the gloss depends on the exact word, the English word must keep the hook the gloss hangs
  on. If it cannot, keep the Latin in italic and log the crux.

## The corpus is its own control — use it before you ask anywhere else

Before marking a `[sic:]` or proposing a conjecture, **grep the rest of the PL TEI and the rest of
this work** for the form. That single move settled seven markers on 11550: `Fons nortorum` against
61 files printing *Fons hortorum*; bare `pigmen` against 861 `pigment-`. A form that occurs once
in 87M words, in this file, at this site, is the plate's defect; a form that occurs across the
corpus is Pattern 9's territory and takes no marker. Say in your cruces entry which control you
ran and what it returned — and if a marker is honestly weaker than that, say so in the entry.

## Fixed vocabulary for this work — one voice within the work

Set now so twelve agents do not diverge (11551's *stylus*/"epistyle" drift is the warning). If a
passage genuinely resists one of these, follow it anyway and **log the tension in your cruces
file** rather than deciding for the whole work by yourself.

### The psychology — the load-bearing seam of this work

| Latin | English | note |
|---|---|---|
| ***mens*** (228×) | **mind** | |
| ***animus*** (148×) | **spirit** | ⚠ *mens* and *animus* **collide inside single clauses here** — chunk 0030's own head is *Quod quidquid **animum** per cogitationem pulsat, **mentis** devotionem excitare debeat*. 11536 flattened both to "mind"; **that is not available in this work.** Keep them visibly distinct everywhere. |
| ***anima*** (56×) | **soul** | |
| ***spiritus*** (73×) | **spirit** | *animus* and *spiritus* land on the same English word, and they collide in only **two** sentences in the whole work: **0005** (*ex animi impetu* beside *ex spiritus sui impetu*) and **0034** (*animum humanum Deo conjungit, et cum eo quasi unum spiritum efficit* — 1 Cor. 6:17, where the collision is the theological point). If you hold one of those chunks, handle it consciously and **log what you did**. |
| *cor* (105×) | heart | |
| *conscientia* | conscience · *ratio* reason · *intellectus* understanding · *sensus* sense | |

### The dream and the statue

| Latin | English |
|---|---|
| *somnium* | dream (*visio* = vision; keep them apart — Richard argues from the difference) |
| *statua* | statue |
| *aurum / argentum / aes / ferrum / testa* | gold / silver / **bronze** / iron / **clay** |
| *detrimentum* | decline (of morals, of merits, of kingdoms — the work's spine word) |
| *gradus* | step |
| *regnum* | kingdom |

### The moral vocabulary

| Latin | English |
|---|---|
| ***eruditio*** (title word) | **instruction** — *erudire* "to instruct", *eruditus* "instructed". The chastening sense (*ex ipso suo casu erudita et humiliata*) is carried by the sentence, not by a second English word. |
| *homo interior* | the inner man |
| *gratia* | grace · *devotio* devotion · *compunctio* compunction · *discretio* discretion |
| *virtus* | virtue (*vir virtutum* = "a man of virtues") · *vitium* vice |
| *affectus* | affection · *desiderium* desire · *voluntas* will |
| *industria* | effort (*ex humana industria* = "by human effort") · *studium* zeal |
| *impudentia* | shamelessness · *obdurare* to harden · *obduratio* hardening |
| *superbia* | pride · *humilitas* humility · *desperatio* despair · *torpor* torpor |
| *praesumptio* | presumption · *praesumere* to presume |
| *vita activa / contemplativa* | the active / contemplative life |
| *liberum arbitrium* | free will |

## Scripture and garbled type

- **Translate what Migne prints, never substitute a conventional version.**
- Garbled type: **render literally**, then log it in your cruces file (column + printed reading +
  your note). Split type takes the whole broken run per Pattern 10 — a printed `hos a tendit` is
  *attendit* split across a space, and quarantining only part of it can swallow a prefix that
  carries the sense.
- ⛔ **A `[sic:]` quarantine must never swallow a clause's verb, a negation, or half an
  antithesis.** Two of 11550's eight blind-read defects were exactly that: the marker was
  correct, its *extent* was not, and the English silently lost a clause. Quarantine the defective
  type and nothing else.

## Negation fidelity — read `translation-style.md` 7a before you start

Every `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil` the Latin prints appears
in your English, and none appears that the Latin does not print — **including when carrying it
makes the sentence contradict itself.** That contradiction is usually a defect in Migne's plate
and is exactly what this edition exists to show. **Never translate a word as its opposite, or as
anything other than what it means, to rescue a sentence that will not construe.** If it will not
construe, render it as closely as the printed words allow and log the crux. A repair hidden inside
the translation leaves no trace, passes every automated check, and is the one error class nobody
downstream can find.

Related and just as invisible: **do not silently switch person, number or subject** to make a run
read smoothly. 11550 lost four co-subjects to one, and a mid-run person switch, that way.

## Punctuation: Pattern 8, and it is checked mechanically

Migne's `?` and `!` are data. **Never supply one he does not print** (a rhetorical question in
Latin often prints with a comma or a period — carry that), and **never delete one he does.** The
question-mark parity check across the pair is run after you finish and it has caught real defects
twice, including a vanished 46-word sentence.

## Em-dashes: keep them rare

Migne prints none in the entire Latin corpus. Prefer a comma, colon, or full stop; use a dash only
where it genuinely carries the sense. This is a tendency to resist, **not** a defect class — never
mark one, never report one, never restructure a faithful sentence to avoid one.

## Your cruces file

Write `src/english/11535/cruces-NNNN.md` where NNNN is **your first chunk**. Do not write
`cruces.md` — the merge across agents is a required pipeline step and it needs your file separate.
Head it with your range. For each entry: **column · printed reading · what you did · why.**
Include (a) every `[sic:]`/`[d:]`/`[ed:]`/`[var:]`/`[cj:]` you marked, (b) every passage that would
not construe, (c) any place you followed the fixed vocabulary table against your own judgment,
(d) the lemma pulls you resisted, and (e) any conjecture you **declined** — declined sites are
census candidates and are wanted by name, with the reason.

`[cj:]` bar (Wilson, 2026-08-15): a conjecture is glossed only where the wrongly-printed real word
is a **negation or a correlative**. Mood, voice, number and person anomalies that merely fail to
construe stay declined and go in the cruces. **Do not widen the bar yourself.**

## Do not stop early

Your batch is 3–5 chunks. Peer agents complete 5-chunk batches at full fidelity routinely. If you
find yourself writing "context budget" at chunk 2, you are repeating a documented failure pattern —
push through your full batch. Write each chunk's file as you finish it, so nothing is lost if you
are interrupted.

## What to return

A short report, not the translation: chunks written · anchor and note counts per chunk (expected
vs. actual) · **the Vulgate-divergence list** · the pulls you resisted · cruces count and the two
or three that matter most · any vocabulary call you want ratified for the whole work · anything
you left unresolved.
