# Polarity read — 7914, ps.-Cassiodorus, *Expositio in Cantica canticorum*

Launched 2026-07-30 (Opus, 4 units, one round). 23 chunks / 27,638 Latin words.
`--gate` is RED on 7914 alone until this lands. Record with
`node scripts/polarity-record.mjs --import data/sweeps/polarity-7914 …`.

## Units — boundaries deliberately STRADDLE the translation batches

Translation ran 0000–0006 / 0007–0012 / 0013–0017 / 0018–0022. The polarity units
below cut across those seams on purpose, so no reader is auditing exactly one
translator's self-contained batch and every batch boundary falls inside some unit.

| unit | chunks | n | output |
|---|---|---|---|
| u1 | 0000–0005 | 6 | `7914-u1.json` |
| u2 | 0006–0011 | 6 | `7914-u2.json` |
| u3 | 0012–0017 | 6 | `7914-u3.json` |
| u4 | 0018–0022 | 5 | `7914-u4.json` |

## Controls

The translation pass logged defects it carried literally; all are in `cruces.md`,
which the polarity agents may not open until findings are formed. So each is a live
recall test.

- **u3 @1082D** (*in occupato et libero corde*) — **PLANTED, the only declared control.**
- **u2 @1069B** — blind. The missing first *nec* that makes the Church of the Gentiles
  cleansed by circumcision, against the work's own argument. The sharpest site in the
  work and deliberately unannounced.
- **u4 @1097A** — blind. Singular *statura* with plural *assimilantur*.
- Carried type scattered through every unit (`disperi` 1058C, `il est` 1066A,
  `unversi` 1069D, `esset` 1072B, `pulmae` 1096D, `hinauli` 1106B …).

⚠ Schema examples use a PLACEHOLDER column, never a real one — the 2026-07-29 leak.

## Expected yield: HIGH for the genre

Lemma-and-gloss is the richest class in the corpus sweep's own data (11064 gave 41
sites in 80 chunks): the author quotes his lemma and then expounds the very words
quoted, so the plate supplies its own contradicting neighbour. This work quotes every
verse of the Song and expounds it twice over (letter, then allegory).

## Not for this read

Our PL is an OCR-derived 2019 Corpus Corporum transcription, so `side: "migne"` means
"not ours / present in the source", **never** "Migne's compositor did this".
