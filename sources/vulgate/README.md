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

## Known errata in THIS copy — check here before citing a single letter

The caveat above ("if a call ever turns on a single letter, say so rather than trusting this copy
to that precision") stopped being hypothetical on 2026-09-03. Each entry is a defect in the 2005
*Quasimodo* release we hold, **not** in the Clementine, and it is present in the faithful
`clementine/<Book>.lat` as well as in `clementine-flat.txt`. **Nothing is edited** — both files
stay faithful to the release, which is what makes them a witness. This list is the disclosure the
upstream project asks for, and the place to look before a marker rests on one letter.

- **`1Thes 5:3` prints *repentius*.** The Clementine reads ***repentinus*** (*tunc repentinus eis
  superveniet interitus*), and *repentius* is not a Latin word. ⚑ **The proof is inside this same
  file**: `Pr 29:1` carries the identical phrase — *repentinus ei superveniet interitus* — spelled
  correctly, and `Pr 12:19` has *repentinus* again. So a marker citing 1Thes 5:3 against a Migne
  lemma reading *repentinus* would have accused Migne of a divergence from the Vulgate **using our
  own typo as the standard**. Found by the 9000 stint that was translating cols 0325C–0340C; it
  refused to cite the verse and said why, which is the behaviour this note exists to reward.

- **`Mt 5:15` prints *neque **accedunt** lucernam*.** The Clementine reads ***accendunt***
  (*neque accendunt lucernam, et ponunt eam sub modio*). *Accedere* is intransitive and cannot
  take *lucernam* — the phrase does not construe at all, which is the tell. ⚑ **The internal
  control is the synoptic parallel, in this same file**: `Lc 11:33` has *Nemo lucernam **accendit***
  and `Lc 8:16` *lucernam **accendens***, both spelled correctly, and the whole point of the verse
  is a lamp being LIT. ⛔ Found 2026-09-05 by the 9002 stint translating cols 0079A–0096B, which
  noticed that **Migne and our own Latin twin agree on the standard reading** and the comparand is
  the odd one out. That is the shape to watch for: where the plate, the twin and sense all agree
  against `clementine-flat.txt`, suspect the comparand before you suspect Migne — a `[var:]` there
  would have accused him of a divergence from the Vulgate using our own typo as the standard, which
  is the identical failure the 1Thes 5:3 entry above records.

- **`Gn 15:5` prints *Suscipe cælum*.** The Clementine reads ***Suspice*** (*Suspice cælum, et
  numera stellas*). ⚑ **The internal control is in this same file and one book away**: `Job 35:5`
  carries *Suspice cælum, et intuere* spelled correctly, and every other *Suscipe* here governs an
  accusative of RECEIVING (*Suscipe ex ore illius legem*, `Job 22:22`; *Suscipe me secundum
  eloquium tuum*, `Ps 118:116`) — the sense at Gn 15:5 is *look up at*, which is *suspicere*.
  ⛔ **This one manufactured a `⚑ MATCHES ONLY ELSEWHERE` flag in a lemma brief.** 8950 @0121A
  prints Migne's *« Suspice coelum, »* — which IS Gn 15:5, under `CAPUT XV`, addressed `VERS. 5-8.`,
  flanked by Gn 15:2 and 15:9, with the same paragraph's next lemma quoting Gn 15:5's own closing
  words verbatim. Because our copy reads *Suscipe*, the phrase search found nothing in Genesis and
  fell through to Job 35:5, and the ownership test reported the lemma as matching "only elsewhere".
  Found and disproved by the 0019–0023 stint, which walked it at the line instead of trusting the
  flag.
- **`Gn 15:9` prints *vaccam trienem*.** The Clementine reads ***triennem*** (three-year-old, beside
  *capram trimam* and *arietem annorum trium* in the same verse). ⚑ **Frequency settles it without
  leaving the file**: *trienem* occurs exactly ONCE in the whole Clementine and *triennem* zero
  times — a form attested once and never again, in a verse whose two neighbouring phrases both say
  "three years old". It produced a false `⚠ NOT in Clementine verbatim` on the same column as the
  entry above, **nine lines below it**.

⛔⛔ **THE CLASS, AND WHY IT IS THE ONE NO PLATE READ CAN CATCH.** Both entries above were found in
ONE COLUMN of one work. A defect in this copy does not merely fail to clear a good lemma — it
**manufactures a divergence that looks exactly like a real one**, and the instrument that would
normally settle it is useless here: reading Migne's plate confirms what Migne printed, which is
already not in doubt. It is the Vulgate-side twin of 9003's `judicabit`→`judicavit`, where the
digitization created the divergence a collation then dutifully "found". ⚑ **So a `⚠` or a `⚑` on a
lemma that IS demonstrably its own verse by address, chapter head and neighbours is evidence about
THIS FILE first, and the correct response is to check the comparand before writing anything about
Migne.**

⚑ **How to check one yourself, and why the internal control is the cheap move:** the Clementine
repeats its own formulae across books, so a suspect reading usually has a correctly-spelled twin
somewhere in this file. Grep the phrase, not the word. Where no twin exists, say the call rests on
a single letter of a 2005 transcription and leave the marker unfired.
