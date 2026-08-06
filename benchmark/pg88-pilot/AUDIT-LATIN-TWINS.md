# Audit: the Latin twins of every live PG work (2026-08-05)

**Why.** `pg-latin-twin.mjs` reconstructs Migne's Latin column by splitting djvu
word tokens into two columns **by x-coordinate**. Any line that crosses that
split — and PG 88 showed Migne does set lines across the full page, in both
languages — has tokens on both sides. The twin is the *independent witness* we
lean on whenever the Greek cannot settle a reading, so a torn twin is a witness
quietly giving false testimony. All seven live works were checked.

## Result: all seven twins carry Greek text. Six carry it in whole-line blocks.

| work | tokens | Greek | % | longest run | shape |
|---|---|---|---|---|---|
| antiochus-epistula-ad-eustathium | 1,791 | 9 | 0.5% | 2 | scattered |
| joel-chronographia | 12,434 | 229 | 1.8% | 13 | blocks |
| oecumenius-philippians | 15,707 | 284 | 1.8% | 12 | blocks |
| isidore-glabas-sermo-3 | 10,651 | 249 | 2.3% | 12 | blocks |
| isidore-glabas-sermo-1 | 6,439 | 189 | 2.9% | 15 | blocks |
| isidore-glabas-sermo-2 | 6,149 | 227 | 3.7% | 17 | blocks |
| nicetas-maroneia-dialogi | 11,249 | 447 | 4.0% | 24 | blocks |

## But the cause is NOT mainly what I predicted, and that matters

I expected full-width lines to be the dominant cause. Reading the actual blocks
shows **at least three distinct causes**, and full-width setting is the minority:

1. **x-split leakage at the column boundary — the dominant pattern.** In
   `nicetas` and `oecumenius` the blocks are runs of *short function words*
   dropped into the middle of a Latin sentence:
   `non ita pridem, o Grece, te` **`τῆς ἀλλ᾽ Σὺ ἔχεις τὸ Υιὸς ἀμὲ- τοῦ τὸ λοι-
   τὸ πα- καὶ κατὰ τὸ προ: δὲ τὸ γὰρ ὁ αὐτῷ ὅτι εἰ τοῦ`** `etiam ; multa
   ostensurum absurda`. They are overwhelmingly `τὸ / τοῦ / δὲ / καὶ` and
   hyphenated line-end fragments — i.e. **the ends of Greek lines**, whose x
   falls on the Latin side of the split. This is a boundary problem, not a
   layout one.
2. **Full-width lines — real, but the minority.** `joel` shows a coherent Greek
   clause sitting between two Latin sentences: `τως ἐπληρώθη ἡ τοῦ Ἰσαὰκ
   πρόῤῥησις λέγουσα πρὸς … τραχήλου σου, πλημμελήσεις πλημμέλειαν θανάτου.`,
   immediately after the Latin *de collo tuo, peccabis peccatum fortis* — the
   same sentence in both languages, adjacent. That is a page-wide Greek line
   whose tokens landed on the Latin side.
3. **The title block.** `nicetas` 0000 has the whole Greek title
   (`ΜΗΤΡΟΠΟΛΙΤΟΥ ΘΕΣΣΑΛΟΝΙΚΗΣ ΜΑΡΩΝΗΙΑΣ ΔΙΑΛΟΓΟΙ …`) inside the Latin twin.
   Titles span the page by design.

A fourth, separate thing: some "Greek" in the twins is **misOCR'd Latin** —
`baec λα misi pietati, qu: cum acce-` in antiochus is archive.org reading Latin
letters as Greek. That is djvu quality, nothing to do with the split.

## What is NOT established

**Whether Latin is MISSING** — the more dangerous direction, since a gap in the
witness is invisible where contamination is at least visible. Latin/Greek word
ratios are 0.95–1.48 with no outlier low enough to prove a loss, but that test is
far too coarse to detect a line or two. **Untested.** Establishing it needs the
twin compared against the plate, not against itself.

## Consequence, and what it does not touch

The twins are **usable but not clean**. At 2–4% contamination an adjudicator
reading a twin can encounter Greek presented as "what Migne's Latin says" — and
this project has repeatedly used the Latin to decide a Greek letter (`ἔβης` from
*ut quid transgressus es?*, `ἀνάλαβον` from *analabum*, `κερβηκάριον` from
*cervicali*). Those particular decisions were made by reading the plate directly,
so they stand. A decision made from the twin FILE alone would not be safe.

⚠ **This does not touch any published English.** The twin is apparatus, not a
source for the translation.

## Recommended, in order

1. **Strip Greek-script runs from the twins at build time and log every strip.**
   Cheap, mechanical, and it makes the residue auditable rather than mixed in.
2. **Fix the split**: assign a token by which column's text block it falls in,
   not by a single page-wide x threshold, and treat a line that spans both as
   full-width rather than dividing it.
3. **Then test the missing-Latin direction** against the plate on a sample.
