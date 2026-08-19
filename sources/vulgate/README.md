# Clementine Vulgate — on disk, for lemma collation

**Why this is here.** Every lemma collation in this edition compares Migne's printed lemma against
the Vulgate. Until 2026-08-19 there was no Vulgate in the repo, and agents were collating **from
memory**. That produced four declined or hedged calls in a single batch (8960 ×2, 8948 ×1, plus
8987's) and two settlements that rested on an agent's recollection rather than a witness. This closes
that gap.

## What it is

**The Clementine Vulgate (Sixto-Clementine, 1592/1598)** — the text Migne's own lemmata are measured
against, and the only correct comparand for this project. **NOT** the Stuttgart / Weber-Gryson
critical edition, which is in copyright and must never be used here.

Source: **Michael Tweedale's Clementine text project** (the VulSearch project,
`vulsearch.sourceforge.net`), release **"Quasimodo", dated 2005-04-03** — the archive's own
`restore.txt` states the version. Downloaded from SourceForge as `clemtext/source/Quasimodo.zip`.

**Rights: the project released this text into the PUBLIC DOMAIN.** The maintainers *request* — but do
not license-enforce — that users acknowledge the source, report typographical errors upstream, and
make clear any modifications. This file is that acknowledgement, and the normalizations below are that
disclosure. Nothing here is a Zelzer-rule problem: the text is PD and may be committed and quoted.

⚠ The upstream project published later correction diffs (`clemtext/source/*.diff`, dated after 2005).
**They are not applied here.** For collating whether Migne's lemma diverges from the Clementine, a
handful of typographic corrections is immaterial; if a call ever turns on a single letter, say so
rather than trusting this copy to that precision.

## The two forms, and which to use

**1. `clementine/<Book>.lat` — FAITHFUL.** Converted from the source's CP1252 to UTF-8 and CRLF to LF,
and otherwise untouched. Ligatures intact (`quæ`, `Israël`, `cœlum`), and the source's own layout
markup intact: `/` marks a poetic line break, `[` `]` enclose a poetic or quoted body, `\` marks a
stanza break. **Cite from these.**

**2. `clementine-flat.txt` — SEARCHABLE. Use this to grep.** One verse per line, `Book C:V<TAB>text`,
35,811 verses across all 73 books of the Clementine canon. Two normalizations, both deliberate:

- **Ligatures expanded** — `æ`→`ae`, `œ`→`oe`, `ë`→`e`, and so on. ⚑ This is not tidying: **Corpus
  Corporum's transcription of Migne, which is what `src/latin/` holds, expands them the same way.**
  Without this, grepping our own `quae` against the Vulgate's `quæ` returns nothing, and a nil result
  reads as absence — the documented failure mode this project has already been bitten by once.
- **Layout markup stripped** (`/`, `[`, `]`, `\`), whitespace collapsed. **12,635 of 35,811 verses
  carried it**, so a phrase spanning a poetic line break would otherwise fail to match for a reason
  that has nothing to do with the text.

## Book abbreviations

The source's own, kept as-is. The ones this project meets most: `Tob` Tobit · `Jdt` Judith ·
`Est` Esther · `Sap` Wisdom · `Sir` Ecclesiasticus · `Ecl` Ecclesiastes · `Pr` Proverbs · `Ct` Canticles ·
`Jr` Jeremiah · `Lam` Lamentations · `Ez` Ezekiel · `Jo` John · `Jud` Jude · `Jac` James · `Apc` Apocalypse ·
`Phlp` Philippians · `Phlm` Philemon · `Hbr` Hebrews · `Rg`/`Par`/`Esr` the historical books.
⚠ `Jo` is **John**, `Jud` is **Jude**, `Jdc` is **Judges**, `Jdt` is **Judith** — four easily confused.

## How this was validated

Checked against twelve claims this project had already shipped. **All twelve confirmed**, including
every `[var:]` fired in the 2026-08-18 batches: `Sap 7:30` *sapientiam autem non vincit malitia* ·
`Job 10:17` *testes **tuos*** · `1Thes 2:17` *aspectu, non corde* (no *ore*) · `2Thes 2:3` *discessio* ·
`2Tim 4:2` *increpa in omni **patientia*** · `2Ptr 1:16` *doctas fabulas* · `Phlp 4:1` *gaudium meum,
et **corona mea*** · `Apc 18:23` *lucebit **in te** amplius* · `Col 1:21` *inimici **sensu***.

⭐ It also settled two open calls at once, in opposite directions:
- **8960 @0737D** — `Sir 25:12` reads *Beatus qui invenit amicum verum, et qui enarrat justitiam auri
  audienti*. Migne's *Beatus qui causam suam loquitur in aure audientis* **is** a divergence. The
  reading agent's recollection was right, and the cruces entry recorded as *unverified* can be upgraded.
- **8960 @0734D** — `Jdt 7:7` reads ***Erant tamen** non longe a muris fontes*. **Migne agrees with the
  Vulgate exactly; there is no divergence.** The reading agent had leaned *autem* and **declined to log
  it**, saying plainly that this was a stylistic inference and not a recollection. ⭐ **The lean was
  wrong and the decline was right** — which is the strongest argument in this repo for the rule that a
  `[var:]` is a public claim about another text and must never be written from memory.
