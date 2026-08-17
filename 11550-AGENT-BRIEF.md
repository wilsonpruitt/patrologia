# 11550 — translation agent brief (Richard of St Victor, *Explicatio in Cantica canticorum*)

PL 196, 0405A–0524A · 48 chunks (0000–0047) · 50,151 Latin words · 183 notes · 474 column marks.
Latin: `src/latin/11550/NNNN.md` → English: `src/english/11550/NNNN.md` (same filenames).

**Read this whole file before you write anything. Your range and its named lemma words come
in the launch message, not here.**

## Context you must read first

1. **`translation-style.md`** — the frozen register rulebook. Follow it exactly. Sections that
   will actually decide calls in this work: **7** (render the printed Latin literally),
   **7a + 7a″** (negation fidelity; the lemma quietly conformed), **9** (what is NOT a defect),
   **10** (split type), **12** (`[sic:]`), **14** (`[var:]`), **15** (`[nt:]`), **17** (thou =
   singular, you = plural), **18** (`[cj:]`), and **§ The Song of Songs — each commentary
   stands on its own**.
2. **`src/latin/9741/0000.md` + `src/english/9741/0000.md`** — the style anchor pair: exact file
   format, marker handling, register.
3. **`translation-runbook.md` § "Known false positives — do NOT report these"** (items 1–7).
   Read it. Column-band arithmetic and `noteCount` off-by-one are the two you are most likely
   to trip over here; neither is a finding.
4. Your own chunks' frontmatter. **Copy each Latin chunk's frontmatter VERBATIM into the
   English chunk** — do not invent, reorder, or drop fields.

## Sacred markers (violating any = the work fails verification)

- **Column anchors** `[0410C]`: reproduce VERBATIM, in order, in place. Your frontmatter's
  `colContext`/`colFirst`/`colLast` tell you what to expect. **Count your anchors before you
  write each file.**
- **Notes `[n: ...]`**: reproduce verbatim, contents untranslated — they are Migne's citations.
  Same count, same order; `noteCount` is your check (count `[n:]` in the body only).
  **Exception, Pattern 15:** a note whose content is editorial PROSE rather than a citation is
  translated and re-marked `[nt: ...]` at the same position. Judge by content, not length.
- **`## ` heads**: translate the head text, keep the `## ` line structure 1:1. This work's heads
  are `## CAPUT N. *italic summary*` — **translate both the label and the italic summary**
  (11064 precedent): `## CHAPTER ONE. *How God is sought in stillness, and on the greater
  desire for grace.*`
- **Italics `*...*`** and list `- ` lines: preserve structure. In this work the italics ARE the
  quotation texture — lemmata and re-quoted lemma fragments. There are **zero guillemets and
  zero bracketed variants in the whole work**; do not introduce either.
- **Defect markers, English-only** (patterns 10–13): `[d: ...]` dittography Migne prints twice ·
  `[sic: ...]` carried type that is the plate's own defect · `[ed: ...]` our own voice, sparingly,
  only where the DIGITIZATION has lost text the plate carries. Read those patterns first.

## ⚠⚠ 7a″ — THE dominant failure mode in this genre, and your most valuable deliverable

This is a lemma-and-gloss scripture commentary: **"the lemma quietly conformed" is the failure
that hits works like this one.** The Latin printed here is *Migne's*, not the Vulgate, and not
what the five already-shipped Song commentaries print.

- **Translate the lemma from the printed Latin in front of you**, word by word. Never harmonize
  it with the Vulgate, with a remembered English Bible, or with another commentary.
- Your launch message **names the lemma words in your range**. Check each one against the
  received text, and where Migne's printed Latin diverges from the Vulgate, mark it `[var: ...]`
  per Pattern 14.
- **Treat the list of divergences as the most valuable thing you produce.** Measured on 8930:
  the range whose prompt named its lemma words returned 11 `[var:]` markers and a later blind
  read found ZERO defects in it; the range told merely to "read every lemma carefully" returned
  1 marker and the blind read found SEVEN. Naming the words is what works.
- The exposition **re-quotes lemma fragments in italics** and glosses them. Where a gloss depends
  on the exact word, the English word must keep the hook the gloss hangs on (Pattern 14 / §Song
  case 2). If it cannot, keep the Latin in italic and log the crux.

## Fixed vocabulary for this work — one voice within the work

Set now so ten agents do not diverge (11551's *stylus*/"epistyle" drift is the warning). If a
passage genuinely resists one of these, follow it anyway and **log the tension in your cruces
file** rather than deciding for the whole work by yourself.

| Latin | English |
|---|---|
| *sponsa* | the bride |
| *sponsus* | the Bridegroom (capitalized — he is Christ throughout) |
| *dilectus* | the beloved (of the Bridegroom sought by the bride) |
| *amica mea* | my love |
| ***lectulus*** | **"little bed" — the diminutive is LOAD-BEARING** |
| *lectus* | bed |
| *meditatio* | meditation |
| *contemplatio* | contemplation |
| *compunctio* | compunction |
| *mens* | mind |
| *anima* | soul |
| *affectus* | affection · *affectuose* | affectionately |
| *quies* | stillness (of the mind's rest) · *vacare* | to be at leisure/free |

**Why *lectulus* is load-bearing:** chunk 0002 argues *"Et non in lecto, sed in lectulo, quia
quies a talibus habita exigua est"* — the whole exposition turns on the diminutive being small
and narrow. An English that says "bed" for both makes Richard's argument say nothing. Keep the
pair visibly different everywhere in the work, not just where he argues it.

## Scripture and garbled type

- **Translate what Migne prints, never substitute a conventional version.**
- Garbled type: **render literally**, then log it in your cruces file (column + printed reading +
  your note). Split type takes the whole broken run per Pattern 10 — e.g. a printed `hos a tendit`
  is *attendit* split across a space, and quarantining only part of it can swallow a prefix that
  carries the sense (9637's `in offenso` for *inoffenso* would have reversed a prayer).

## Negation fidelity — read `translation-style.md` 7a before you start

Every `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil` the Latin prints appears
in your English, and none appears that the Latin does not print — **including when carrying it
makes the sentence contradict itself.** That contradiction is usually a defect in Migne's plate
and is exactly what this edition exists to show. **Never translate a word as its opposite, or as
anything other than what it means, to rescue a sentence that will not construe.** If it will not
construe, render it as closely as the printed words allow and log the crux. A repair hidden inside
the translation leaves no trace, passes every automated check, and is the one error class nobody
downstream can find.

## Em-dashes: keep them rare

Migne prints none in the entire Latin corpus. Prefer a comma, colon, or full stop; use a dash only
where it genuinely carries the sense. This is a tendency to resist, **not** a defect class — never
mark one, never report one, never restructure a faithful sentence to avoid one.

## Your cruces file

Write `src/english/11550/cruces-NNNN.md` where NNNN is **your first chunk**. Do not write
`cruces.md` — the merge across agents is a required pipeline step and it needs your file separate.
Head it with your range. For each entry: **column · printed reading · what you did · why.**
Include (a) every `[sic:]`/`[d:]`/`[ed:]`/`[var:]`/`[cj:]` you marked, (b) every passage that would
not construe, (c) any place you followed the fixed vocabulary table against your own judgment.

## Do not stop early

Your batch is 3–5 chunks. Peer agents complete 5-chunk batches at full fidelity routinely. If you
find yourself writing "context budget" at chunk 2, you are repeating a documented failure pattern —
push through your full batch. Write each chunk's file as you finish it, so nothing is lost if you
are interrupted.

## What to return

A short report, not the translation: chunks written · anchor and note counts per chunk (expected
vs. actual) · the Vulgate-divergence list · cruces count and the two or three that matter most ·
anything you left unresolved.
