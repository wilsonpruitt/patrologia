# 8950 *Liber Genesis* — pending TEI patches, stint 0019–0023 (cols 0120D–0133C)

Found by reading **PDF pages 66–72** of `raw/scans/pl113/patrologiaecurs04migngoog.pdf`
(page = (column + 11) / 2; corner numbers read first on every page) against the Corpus Corporum
twin in `src/latin/8950/0019.md`–`0023.md`. **None of these is repairable from the English side.**
Each needs a `data/tei-patches/8950.json` entry so that the Latin column converges on the plate.

⛔ **Nothing here fired a `[sic:]`.** Every plate defect this range carries is one our twin has
already tidied away, so a `[sic:]` would fail the verbatim-substring guard; and every twin defect
is OURS, so a `[sic:]` would publicly accuse a clean page. That is the same result the 0008–0011
stint reported, on a different set of columns.

---

## Part A — confirmed at 600 dpi. WORDS.

### A1. Defects that are OURS (the twin is wrong; the plate is clean)

| col | twin reads | plate reads | class | English |
|---|---|---|---|---|
| 0130D | `virginet` | **`virgines`** | non-word; s→t at a line end | renders "virgins" |
| 0131C | `*uque ad*` | **`*usque ad*`** | non-word; dropped s | renders the abridgment formula, "*as far as*" |
| 0131B | `agno scebat` | **`agno-scebat`** (hyphenated line break) | split run (Pattern 10 shape) — our failure to rejoin | renders "recognized" |
| 0131A | `supplicio-ignis aeterni` | **`supplicio ignis aeterni`** (space) | spurious hyphen | renders "the punishment of eternal fire" |
| 0125C | `unde: « Fide purificans corda eorum. »` | **`mundabantur : unde : Fide purificans corda eorum. »`** | our TEI **supplied** an opening `«` the plate has none of, and **dropped** the colon after *mundabantur* | mirrors the twin (see A3) |
| 0127D | `VERS. 17-19.--` | **`VERS. 27-19.`** | our TEI **normalized** Migne's defective address | see A2 |
| 0128A | `[n: (II Cor. II)]` | **`(II Cor)`** | our TEI added a period and a chapter numeral Migne does not print | note rides verbatim; no English effect |
| 0125B | `[n: (Matth. V)]` | **`(Math. v)`** | our TEI normalized *Math.* → *Matth.* | note rides verbatim; no English effect |

### A2. Defects that are MIGNE'S, which our twin has silently tidied away
**This is brief §4's class — "the digitization alters Migne's spelling, in both directions" — and it
is the reason a `[sic:]` cannot be fired here: the marker's content must be verbatim in the twin.**
After these patches land, each of the first three becomes a live `[sic:]` candidate.

| col | plate reads | twin reads | note |
|---|---|---|---|
| 0129B | **`eic.`** | `etc.` | broken sort for *etc.* |
| 0129C | **`Sodomorm.`** | `Sodomorum` | dropped *u*; the twin also drops the terminal period the plate prints |
| 0133A | **`susperstites`** | `superstites` | intruded *s* |
| 0127D | **`VERS. 27-19.`** | `VERS. 17-19.--` | ⭐ **the largest of them.** A verse address, not a word — and Migne's own printing is not ours to tidy (series brief, "a verse number out of sequence is his"). **The English renders the plate: `VERS. 27-19.--`.** The `--` is the twin's own form for the dashes and is kept, so the two columns differ in the numeral alone. |

⚠ 0123B `(RAB. STRAR.)` was suspected and **withdrawn at 600 dpi**: the plate sets `STRAR.` (a broken
small-cap sort for STRAB.) and our twin is faithful. **No patch.** Recorded because a checked negative
is worth having.

### A3. MARKS — recorded, NOT acted on
Per the 0008–0011 stint's ruling (cruces-0008 §1c), **words follow the plate and punctuation follows
the twin**, because guillemet parity and the band-by-band mark comparison both partition on the twin
and an English that follows the plate on a mark manufactures a mismatch in the very instrument that
finds real ones. All of these are patch material only.

- **0125C** — plate has no opening `«` before *Fide purificans*; the twin supplies one. ⭐ **The exact
  inverse of the 0008 stint's 0106A**, where Corpus Corporum *dropped* an opening mark the plate
  carries. So the class runs in both directions and no policy about unpaired marks is safe without
  the column.
- **0121A** — plate sets a **closing `»`** before *Ego vado sine liberis*; the twin sets `«`.
- **0127A** — plate sets `« VERS. 10. — «|Et habebit filium, »` with a repeated line-head `«`; twin
  keeps one. Same at **0131D** (`super Sodo- « nam.`).
- **0124A** — plate closes `« Sarai uxorem tuam, etc. »` after *etc.*; twin closes before it.
- **0121A** — plate prints `VERS. 2, —` (comma) where the twin prints `VERS. 2.--`.
- **0129C** — plate prints a terminal period after *Sodomorm.*; the twin's paragraph ends bare.
- **0124B** — plate prints a comma after *zadich*; twin has none.
- **0130D** — plate prints `(AUG. ubi supra)` with no terminal period; twin has one.
- **0127B** — plate prints `(AUG. Quæst. in Gen.)`; twin prints `(AUG. Quaest in Gen. )`, dropping the
  period after *Quaest*.

## Part B — the Hebrew the digitization drops

`( )` stands empty at **0122D** (*berith*), **0124A/0124B** (three times, the Hebrew of *Sarai*,
*Sara* and *sarai*) and **0133B** (*Moab*, *benammi*). The plate carries pointed Hebrew at every one.
The English mirrors the twin's empty parentheses. ⚠ **No `[ed: …]` was fired**: the loss is visible as
a loss on both sides (the parentheses are there, empty), the surrounding prose names the letters
being discussed, and Pattern 13 is for holes that read as ours. The recovery belongs in the patch,
not in an editorial note on every page.
