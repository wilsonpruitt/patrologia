# 8961 — pending TEI patches, chunks 0020–0024 (cols 0348D–0362B)

Filed by the 0020–0024 translation stint, 2026-09-07. Each entry is a place where **both
printings of PL 113 agree on a reading our TEI does not have**, so it is a digitization loss,
not a defect of Migne's — no `[sic:]` was fired at any of them. The English already renders the
plate (except where noted); the Latin should converge on it at the patch pass.

Witnesses: Gallica `ark:/12148/bpt6k5505319w` (leaf f = (col+1)/2) and the archive copy
`patrologiaecurs04migngoog` (PDF page = (col+11)/2). Both maps calibrated against printed
corners before reading; see `data/briefs/8961-PLATE-READS-0020.json`.

---

## 1. 0352A — `edehat` → **`edebat`**

Chunk 0020. Our TEI: *sed nondum **edehat** Judaeus, quia non conversus.*
Plate (Gallica f176, read at 4×; archive p.181): **edebat**. A non-word in our file only.
English renders "did not yet eat".

## 2. 0352D — `tornicantur` → **`fornicantur`**

Chunk 0021. Our TEI: *Haec recedendo a Deo **tornicantur** cum daemonibus.*
Plate (Gallica f176; archive p.181): **fornicantur**. A non-word in our file only.
English renders "commit fornication".

## 3. 0352D — note `(I Cor. XL.)` → **`(I Cor. XI.)`**

Chunk 0021. Our TEI: `[n: (I Cor. XL.)]` on *Inter vos multi infirmi et imbecilles*.
Plate (Gallica f176, read at 4×; archive p.181): **(I Cor. xi.)** — which is the correct locus
(1 Cor 11:30). ⚠ The English chunk carries `[n: (I Cor. XL.)]` **unchanged**, because
`verify-english` content-checks `[n: …]` against the Latin twin; the two sides must be patched
together.

## 4. 0354A — note `(Psal. XXXVIII)` → **`(Psal. XXXIII.)`**

Chunk 0022. Our TEI: `[n: (Psal. XXXVIII)]` on *Vultus autem Domini super facientes mala*.
Plate (Gallica f177, read at 4×; archive p.182): **(Psal. xxxiii.)** — Migne's citation of
Ps 33:17 is right and ours is the corruption. ⚠ Same caveat as #3: the English keeps the twin's
form until both sides are patched. **Do not log this as a misfired citation of Migne's.**

## 5. 0356A — `nommetur` → **`nominetur`**

Chunk 0022. Our TEI: *ne **nommetur** homo qui imaginem Dei et seipsum ignorando Creatorem a se
alienavit.* Plate: **nominetur** — the i is undotted on Gallica f178 but unambiguous on archive
p.183. English renders "lest he be named a man".

---

## NOT patches — recorded here so they are not re-raised

- **0354C `tan git`** and **0358D `dis cernimus`**: Gallica breaks the word across a line with
  no hyphen; the archive prints `tan-` and `dis-`. **The two printings differ**, so this is a
  press variant with nobody to accuse: no marker, no patch, English renders the sense
  (*touches*, *we distinguish*). See the cruces file.
- **0352D terminal stop** after *sanctorum vindicans injuriam*: Gallica prints none, our TEI
  supplies one, the archive appears to carry one. One printing only — left alone.
- **0356B note `(AUG., quaest. 76. in Lev.)`**: our TEI has a stop after *76* that the plate does
  not print. Too slight to be worth a patch; recorded only.
