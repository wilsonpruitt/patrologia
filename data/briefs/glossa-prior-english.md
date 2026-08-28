# Glossa ordinaria — prior-English register

**Run this per BOOK, never once for the collection.** Measured 2026-08-18: the generic line
"no English of the Glossa on this book exists" **would have been false on 2 of 5** books in
that batch, because van der Pas's *Epistles of St. John 1-3* covers 2 and 3 John. A per-book
check is cheap; a false priority claim on a live page is the defect this whole apparatus
exists to prevent (CLAUDE.md rule 8).

⚠ Every English below is from the **Rusch 1480/81 or received text**, a *different recension*
from Migne's abridged PL 113–114. That does not make our translation a duplicate — but it does
mean the honest line for those books is "an English of a different recension exists", never
"first English".

## Existing Englishes found

| Glossa on | English | Translator | Publisher / year |
|---|---|---|---|
| Revelation | *The Glossa Ordinaria on Revelation* | Sarah van der Pas + John Litteral | Consolamini, 2015 |
| 1–3 John | *The Glossa Ordinaria — Epistles of St. John 1-3* | Sarah van der Pas | Consolamini, 2015 |
| Jonah | *The Glossa Ordinaria on the Prophet Jonah* | John Litteral | Consolamini, 2015 |
| **Romans** | *The Glossa Ordinaria on Romans* | Michael Scott Woodward | TEAMS / Medieval Institute, 2011 |
| **Song of Songs** | *The Glossa Ordinaria on the Song of Songs* | Mary Dove | TEAMS / Medieval Institute, 2004 |
| Genesis | *Biblia cum Glossa Ordinaria — Genesis* | Samuel J. Klumpenhouwer | Emmaus Academic, 2023 |
| Matthew | *Biblia cum Glossa Ordinaria — Matthew* | Samuel J. Klumpenhouwer | Emmaus Academic, 2025 |
| John | *Biblia cum Glossa Ordinaria — John* | David M. Foley + Zachary Thomas | Emmaus Academic, 2026 |
| Exodus | *Biblia cum Glossa Ordinaria — Exodus* | (not named on the listing) | Emmaus Academic, announced — pre-order |

⛔⛔ **ROMANS IS THE ONE TO REMEMBER.** It is in the deferred large-epistle group (held back
with 1–2 Corinthians and Hebrews for cadence size), and when it runs, **its page must not
claim a first English.** Woodward's is a full scholarly edition with introduction. Checked
2026-08-23, before anyone has looked at that work.

## ⛔⛔ A COMPLETE ENGLISH GLOSSA IS NOW IN PROGRESS — found 2026-08-24, and it changes the standing line

**Emmaus Academic (St. Paul Center) is publishing the whole Glossa in English, in twenty volumes**,
led by **Samuel J. Klumpenhouwer** with a team, the medieval layout preserved. Genesis (2023),
Matthew (2025) and John (2026) are out; **Exodus is announced**. At its stated scope it will
eventually cover **every one of our 58 books**.

⚑ **What it does NOT do: it does not make our work a duplicate, and it does not touch a badge.**
Theirs is the **Rusch 1480/81 received text**; ours is **Migne's abridged PL 113–114 recension**,
a different text with different content, which is why the honest line for an overlapping book is
*"an English of a different recension exists"* and never *"first English"*. The fail-safe is
unaffected: every Glossa work in the queue carries `workStatus: null`, so the builder badges it
**"New English translation"** regardless of anything in this file.

⚑ **What it DOES change: this register can go stale in a way it could not before.** Until now the
prior Englishes were a fixed handful of one-off volumes. Now there is a press shipping roughly one
book a year against a list that ends at our whole queue. **Re-run the check per book at launch —
by the SERIES name (`Biblia cum Glossa Ordinaria`, Emmaus Academic) as well as the translator
names — and never inherit a previous batch's clearance.** Two volumes appeared between the
2026-08-23 register and this one.

⚠ Also newly registered above, and relevant to a book already in the wider queue: **Mary Dove's
*Glossa Ordinaria on the Song of Songs*, TEAMS 2004**, alongside Brepols's 1997 Latin edition.

## Checked and found NONE (2026-08-28) — 9003, and it is NOT the Glossa on Psalms

**9003 *Expositio in XX primos Psalmos*** (PL 114, 0751C–0794D). ⚠ **Check this one on its own
terms:** it is not the Gloss on the Psalter. Migne prints it under Walafrid Strabo's name from
**Pez, *Thes. Anecd. nov.*, tom. IV** (source line read at the plate, p. 381), and Pez's own
*Monitum* says he printed only twenty psalms because the rest was already in the Glossa. So two
searches were needed, and both came back empty:

1. **An English of Walafrid's *Expositio in viginti primos Psalmos*** — none found.
2. **An English of the Glossa on the Psalms** — none found. The Emmaus Academic
   *Biblia cum Glossa Ordinaria* series still lists only Genesis (2023), Matthew (2025),
   John (2026) and the announced Exodus; **no Psalms volume**. Consolamini's list
   (van der Pas, Litteral) and the TEAMS Commentary Series (Woodward, Dove) have no Psalms
   entry either.

`workStatus: null`, so the builder badges it **"New English translation"** and claims no
priority either way. ⚑ Re-run at ship time if the run spans weeks — the Emmaus series moved
twice between the 2026-08-23 and 2026-08-24 registers.

## Checked and found NONE (2026-08-24, this batch)

I Regum (8952) · II Regum (8953) · IV Regum (8955) · I Esdrae (8951).
Checked against the Consolamini catalogue, the TEAMS Commentary Series, and the Emmaus Academic
twenty-volume series (whose published and announced volumes are Genesis, Exodus, Matthew and John —
**no historical-books volume yet**). All four carry `workStatus: null`, so the builder badges them
**"New English translation"** and claims no priority either way.

## Checked and found NONE (2026-08-23, previous batch)

Joshua (8958) · Wisdom (8969) · Galatians (8992) · Baruch (9005).
All four carry `workStatus: null` in `works.json`, so the builder badges them **"New English
translation"** and claims no priority either way — the fail-safe holds regardless of this file.
This register is for the honesty line on the page and in the cruces, not for the badge.

⚑ The search that works: the translator names (van der Pas, Litteral, Woodward, Dove,
Klumpenhouwer) and the series names (Consolamini Commentary Series, TEAMS Commentary Series,
**Biblia cum Glossa Ordinaria** / Emmaus Academic) return the catalogue faster than the book name
does. ⚠ The two publisher sites (`glossaordinaria.com`, `samuelklumpenhouwer.com`) both answer a
plain fetch with **403**; the St. Paul Center listing and the retail catalogues are what actually
return volume data.
