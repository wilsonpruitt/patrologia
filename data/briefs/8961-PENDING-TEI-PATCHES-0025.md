# 8961 — pending TEI patches, chunks 0025–0029 (cols 0362C–0380A)

Filed by the 0025–0029 translation stint, 2026-09-07. Each entry is a place where **both
printings of PL 113 agree on a reading our TEI does not have**, so it is a digitization loss,
not a defect of Migne's — **no `[sic:]` was fired anywhere in this range.** The English already
renders the plate except where noted; the Latin should converge on it at the patch pass.

Witnesses: Gallica `ark:/12148/bpt6k5505319w` (leaf f = (col+1)/2, f181–f190) and the archive
copy `patrologiaecurs04migngoog` (PDF page = (col+11)/2, pp. 186–195). Both maps calibrated
against printed corner numbers before reading (Gallica f181 read 361/362; archive p.186 read
361/362). Read record: `data/briefs/8961-PLATE-READS-0025.json`.

⚠ Every single-letter difference where **only the archive** diverges has been EXCLUDED from this
file: the archive copy is jbig2 and its substitutions construe. Twenty such archive-only
readings were met in this range and are listed in `src/english/8961/cruces-0025.md` §3 so that
a later stint does not re-raise them.

---

## 1. 0363D — `habitunt` → **`habitant`**

Chunk 0025. Our TEI: *Beati qui **habitunt** in domo tua, Domine* (Ps 82:5).
Both plates (Gallica f182; archive p.187): **habitant**, which is also the Clementine reading.
A non-word in our file only. English renders "they that dwell".

## 2. 0367C — `sagitae` → **`sagittae`**

Chunk 0026. Our TEI: *Filii hominum, dentes eorum arma et **sagitae***  (Ps 56:5).
Both plates (Gallica f184, read at 3×; archive p.189): **sagittae**. English renders "arrows".

## 3. 0368A — `terrum` → **`terram`**

Chunk 0027. Our TEI: *Spiritus tuus bonus deducet me in **terrum***  (Ps 142:10).
Both plates (Gallica f184; archive p.189): **terram**. A non-word in our file only, and the
accusative the verb requires. English renders "into the land".

## 4. 0374A — `VERS. 23.` → **`VERS. 25.`** on *Gladium*

Chunk 0028. Our TEI: `VERS. 23.-- *Gladium,* spiritus, quod est verbum Dei`.
Both plates (Gallica f187, read at 3×; archive p.192, read at 4×): **VERS. 25.** — which is the
correct locus (Lv 26:25 *inducam super vos gladium ultorem*). ⚠ The English chunk carries
`VERS. 23.--` **unchanged**, because `verify-english` aligns the two sides structurally; the
two must be patched together. **Do not log this as a misfired verse number of Migne's.**

## 5. 0374D — `poliuti` → **`polluti`**

Chunk 0028. Our TEI: *vitiorum **poliuti** praeputio.*
Both plates (Gallica f187; archive p.192): **polluti**. English renders "defiled".

## 6. 0374D — `incircumcisa` → **`Incircumcisa`**

Chunk 0028. Our TEI opens the lemma lower-case: `VERS. 41.-- *incircumcisa mens eorum.*`
Both plates capitalize: **Incircumcisa**. Cosmetic, but it is the only lower-case lemma opening
a `VERS.` address in the whole range. English capitalizes.

## 7. 0375B — `Et alibi-` → **`Et alibi :`**

Chunk 0028. Our TEI: *Et **alibi-** Ex Sion species decoris ejus.*
The archive (p.193) prints a clean colon; Gallica (f188) prints the same mark degraded to a
single mid-height dot. Neither prints a hyphen, and the parallel construction eight words
earlier (`Et alibi:` at 0363D) is a colon in our own file. English renders the colon.

## 8. 0376A — `duplices sensus sensus habeat` → **`duplices sensus habeat`**

Chunk 0029. Our TEI doubles *sensus*. Both plates (Gallica f188, read at 3×; archive p.193)
print it **once**: *ut masculus duplices sensus habeat.*
⛔ This is a digitization dittography, **not** Migne's. A `[d: …]` here would have publicly
accused the plate of a doubling it does not carry; none was fired. English renders once.
