# PL 122 — John Scottus Eriugena: the English gap map, and a queue

**Written 2026-09-07.** Scoping only — nothing here has been chunked, translated, or written
into `data/works.json`. The badge rulings in CLAUDE.md §8 are untouched: no `workStatus` was
set by this pass, so nothing in PL 122 can currently claim **First English translation**.

## What we hold

`data/works.json` carries **14 texts in PL 122, 414,552 words**, all 14 TEI files on disk
(`sources/pl/tei/`). Twelve are Eriugena's (387,545 words); two are the tome's own furniture —
a *Testimonia* compilation (Auctores varii) and Adrian II's *Epistola et decreta* in the
appendix.

Author-level triage has Eriugena as **`mostly`, unverified** (`data/triage/authors-status.json`,
batch result-3). That verdict is correct at the author level and useless at the work level: it
is driven almost entirely by the *Periphyseon*, which is 55% of the tome by words and is the one
thing everybody has translated. **Under it sit ~69,000 words of Eriugena that have never been
put into English at all.**

## The four classes

### A — NO ENGLISH ANYWHERE (Eriugena's own; 6 texts, 69,474 words)

| idno | cols | words | work | English situation |
|---|---|---|---|---|
| 9180 | 0125C–0266B | 43,626 | *Expositiones in Ierarchiam caelestem S. Dionysii* | Rorem (PIMS *Studies and Texts* 150, 2005) is a **study**; the publisher's own description says "translations of major sections … are appended." No complete English. |
| 9176 | 0297A–0348B | 20,121 | *Commentarius in Evangelium secundum Joannem* | Jeauneau's SC 180 (1972/1999) gives **French**. No English; nothing found 2015–2026. |
| 21405 | 0267D–0284A | 4,840 | *Expositiones in Mysticam theologiam* | **Spurious** — not Eriugena's, transmitted under his name in PL. Untranslated, and nobody is going to translate a pseudepigraphon. |
| 9181 | 0265D–0268A | 450 | *Expositiones super Ierarchiam ecclesiasticam* (fragment) | none |
| 9178 | 1023A–1024B | 262 | *De egressu et regressu animae ad Deum* (fragment) | none |
| 9175 | 1243–1244B | 175 | *Commentarii in Evangelium secundum Joannem* (fragment) | none |

### B — IN THE TOME, NOT ERIUGENA, ALSO UNENGLISHED (2 texts, 27,007 words)

| idno | cols | words | work | note |
|---|---|---|---|---|
| 9174 | 0089D–0100D | 4,053 | *Testimonia aliquot veterum de Joanne Scoto Erigena* | Already `workStatus: none` — **but see the defect below.** |
| 9173 | 1259A–1320D | 22,954 | Adrian II, *Epistola et decreta* | Status **unchecked**. |

### C — ERIUGENA'S LATIN VERSIONS OF GREEK (2 texts, 66,275 words)

| idno | cols | words | work |
|---|---|---|---|
| 9184 | 1025–1194C | 55,995 | *Versio operum S. Dionysii* |
| 9183 | 1193–1222B | 10,280 | *Versio Ambiguorum S. Maximi* |

⚑ **This is an editorial question, not a gap.** The *Greek* behind both is thoroughly Englished
(Luibhéid for Dionysius, Constas for the *Ambigua*). What has never been Englished is
**Eriugena's Latin** — which is the text the entire Latin West actually read for four hundred
years. Translating it is a reception-history argument, and a good one, but it is not the same
argument as "nobody has done this."

### D — ENGLISH EXISTS AND IS OBTAINABLE (4 texts, 251,796 words)

| idno | words | work | English |
|---|---|---|---|
| 9177 | 213,674 | *De divisione naturae* (*Periphyseon*) | Sheldon-Williams rev. O'Meara, Dumbarton Oaks 1987, **back in print**; Uhlfelder 1976 (~half). |
| 9179 | 28,936 | *De praedestinatione* | Mary Brennan, *Treatise on Divine Predestination*, Notre Dame 1998, in print. |
| 9182 | 5,343 | *Homilia in prologum Ev. Joannis* | Bamford, *The Voice of the Eagle*, Lindisfarne 1990/2000 — cheap and in print; also O'Meara 1988. |
| 9185 | 3,843 | *Versus* / *Carmina* | Herren, SLH 12, DIAS 1993, facing English — **scarce, and the barrier is real, but it exists.** |

## On the $200 barrier

Worth being precise, because the argument is strongest where it is true. **The Latin is behind
Brepols** — CCCM 161–165 (*Periphyseon*, 5 vols), CCCM 31 (*Exp. Ier. cael.*, Barbet), CCCM 50
(*De praed.*, Madec) — and that is exactly the barrier this project exists to remove, but our
answer to it is Migne, which is public domain and already on disk.

The **English** picture is different and better than the author-level `mostly` suggests it is
worse: what has been translated is largely obtainable (Brennan, Bamford, the DO *Periphyseon*).
The barrier that actually bites is **absence, not price** — classes A, B and C above, 162,756
words, have no English at any price. So the pitch for PL 122 is not "we undercut Brepols." It is
**"three-eighths of Migne's Eriugena has never been read in English, and one of the missing
pieces is his major commentary on Dionysius."**

## Recommended queue order

Smallest-first, and every step produces a shippable public work (the funding lever, CLAUDE.md).

1. **The three fragments together — 9175 (175) + 9178 (262) + 9181 (450) = 887 words.** One
   session, three works on the board. **Checked 2026-09-07 — all three are real prose**, not
   heads or rubrics: 9175 is a patristic florilegium on the four kinds of prayer (Ambrose,
   Augustine); 9178 is Maximian *theoria* on life as God's play; 9181 is the prologue to the
   second book of the Dionysian commentary. Two snags at chunking:
   **9181 opens with Floss's manuscript sigla list** (*Cod. ms. bibl. Univers. Lipsien. 188 …*) —
   editorial front matter that belongs in a head, not the translated body; and **9178's text
   opens with a run of leader dots**, either Migne's dotted leaders or a lacuna. Settle both at
   the plate.
2. **21405 — *Expositiones in Mysticam theologiam*, 4,840.** Small, untranslated, and safely
   untranslatable-by-anyone-else because it is spurious. Byline must read **Ps.-Eriugena**
   (attribution is not the badge, but a wrong byline is its own defect — CLAUDE.md §8).
3. **9174 — *Testimonia*, 4,053.** Tiny, already triaged `none`, and it is the tome's own dossier
   on Eriugena, so it feeds `/authors` directly. **Re-verify first — see defect 1.**
4. **9176 — *Commentarius in Evangelium Joannis*, 20,121.** ⭐ The flagship. A famous text by a
   famous author, read in French for fifty years and never in English. This is the work that
   makes the volume worth announcing.
5. **9180 — *Expositiones in Ierarchiam caelestem*, 43,626.** The largest genuine gap in the
   tome. Rorem's appendices are the only English that has ever existed for it.

Items 1–5 = **73,315 words**, roughly two and a half Glossa books. That is the whole of
"Eriugena that has never been Englished," achievable inside the existing cadence.

**Then, if wanted:** 9183 (10,280), 9173 (22,954), 9184 (55,995) — class C and the Adrian II
appendix, each needing its own ruling first.

⛔ **Do not queue 9177 *Periphyseon* (213,674).** It is well translated, the translation is in
print, and it is half the tome by words. The flexible-queue rule permits it; editorial judgment
says the same effort buys the five works above plus change.

## Defects and prep flags found by this pass

1. ⛔ **9174's triage note describes a different work.** It reads *"Testimonia de P. Optatiano
   Porphyrio et al. (vol. 19-186)"* — the PL 19/186 Optatian compilation, not the PL 122
   Eriugena testimonia. The `none` verdict may be right, but it is right by accident; the
   evidence attached to it is about another book. **Re-verify before this work is badged.**
2. ⛔⛔ **PL 122 has ONE archive.org witness and NO Gallica copy.** `data/volumes.json` t122
   lists `patrologiaecurs113unkngoog` plus eight Google Books items; a Gallica SRU search returns
   no PL 122. **The cheap one-request second-witness check that settled PL 113 and PL 114 is not
   available here.** Given the PL 113 finding (a jbig2 single-witness reading smears toward
   *plausibility*), this needs a ruling before any PL 122 work fires a `[sic:]`: either calibrate
   a Google Books copy as the second witness, or accept that PL 122 apparatus is single-copy and
   say so.
3. ⬜ **The PL 122 column→page map is uncalibrated.** One page render against the printed corner
   numbers, before any plate read. Never carry a map in from another tome.
4. ⬜ **Plate spot check owed per work at chunking** (CLAUDE.md), and no sibling's zero may be
   inherited.
5. ⚑ **Our Latin for 9180 is Floss's**, superseded by Barbet (CCCM 31). That is fine and normal —
   we translate Migne — but the work page should say so, as with every other superseded plate.
6. ⚑ **Column ranges overlap at four seams** (9180/9181 at 0265–0266, 9181/21405 at 0267–0268,
   9184/9183 at 1193–1194, 9183/9185 at 1221–1222). Expected page-pair behaviour, but watch the
   chunker's continuity validator at those boundaries.

## One scope caveat on the word "exhaustive"

**PL 122 is not the whole Eriugena.** Migne printed what was known in 1853; the
*Annotationes in Marcianum* (Lutz 1939), the *Glossae divinae historiae* (Contreni–Ó Néill 1997),
the *In Priscianum* commentary and the fuller *Carmina* are all later recoveries and are **not in
the tome**. Finishing PL 122 finishes *Migne's* Eriugena, which is this project's stated scope —
but it should not be announced as the complete Eriugena, because it is not.

## Sources consulted

- <https://www.ontology.co/biblio/eriugena-editions.htm> — editions and translations register
- <https://plato.stanford.edu/entries/scottus-eriugena/> — SEP, works and authenticity
- <https://pims.ca/publication/isbn-978-0-88844-150-8/> — Rorem 2005, publisher's scope statement
- <https://www.doaks.org/resources/publications/books/periphyseon> — *Periphyseon* back in print
