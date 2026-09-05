# 8950 *Liber Genesis* — SECOND-WITNESS VERDICTS on `8950-PENDING-TEI-PATCHES-0019.md`

**Cols 0121–0133 · Part A (A1 + A2), all 12 rows checked · 2026-09-05**

Second witness: **Gallica ark:/12148/bpt6k5505319w**, `.../f<N>/full/full/0/native.jpg`,
**leaf = (column + 1) / 2**. Leaves opened: **f63, f64, f65, f66, f67**.

⛔ **Printed corner numbers were read first on every leaf, before any word was read:**

| leaf | printed corners | cols |
|---|---|---|
| f63 | **125 / 126** | 0125, 0126 |
| f64 | **127 / 128** | 0127, 0128 |
| f65 | **129 / 130** | 0129, 0130 |
| f66 | **131 / 132** | 0131, 0132 |
| f67 | **133 / 134** | 0133, 0134 |

The leaf map is confirmed correct on all five. Native scans ~1880 × 3110 at 300 dpi; every
letter-level call below was made on a PIL crop at **4.5×–7×** of the native pixels.

## Verdict split — **11 REFUTED · 1 CONFIRMED (on corrected evidence) · 0 structural · 0 two-printings · 0 unsettled**

### A1 — rows filed as "the twin is wrong, the plate is clean"

| col | our TEI twin | archive claim | **Gallica** | verdict | leaf · crop |
|---|---|---|---|---|---|
| 0130D | `virginet` | `virgines` | **`virginet`** | **REFUTED** | f65 R·D · 7.0× |
| 0131C | `*uque ad*` | `*usque ad*` | **`uque ad`** | **REFUTED** | f66 L·C · 6.0× |
| 0131B | `agno scebat` | `agno-scebat` (hyphenated) | **`agno` / `scebat` — line break, NO hyphen** | ⭐ **CONFIRMED, evidence corrected** | f66 L·B · 7.0× |
| 0131A | `supplicio-ignis aeterni` | `supplicio ignis` (space) | **`supplicio-ignis`** — the hyphen is inked | **REFUTED** | f66 L·A · 6.0× |
| 0125C | `mundabantur unde: « Fide purificans` | no `«`; colon after *mundabantur* | **`mundabantur ·  unde :  « Fide purificans`** — the `«` IS on the plate | **REFUTED** | f63 L·C · 4.5× |
| 0127D | `VERS. 17-19.--` | `VERS. 27-19.` | **`VERS. 17-19. —`** | **REFUTED** | f64 L·D · 6.0× |
| 0128A | `[n: (II Cor. II)]` | `(II Cor)` | **`(II Cor. II).`** | **REFUTED** | f64 R·A · 6.0× |
| 0125B | `[n: (Matth. V)]` | `(Math. v)` | **`(Matth. v)`** | **REFUTED as filed** — see note | f63 L·B · 6.0× |

### A2 — rows filed as "Migne's own defect, our twin tidied it away"

| col | archive claim (plate) | our TEI twin | **Gallica** | verdict | leaf · crop |
|---|---|---|---|---|---|
| 0129B | `eic.` | `etc.` | **`etc.`** | **REFUTED** | f65 L·B · 5.5× |
| 0129C | `Sodomorm.` + terminal period | `Sodomorum`, bare | **`Sodomorum`, no period** | **REFUTED** | f65 L·C · 5.0× |
| 0133A | `susperstites` | `superstites` | **`superstites`** | **REFUTED** | f67 L·A · 6.0× |
| 0127D | `VERS. 27-19.` (the file's ⭐ finding) | `VERS. 17-19.--` | **`VERS. 17-19. —`** | **REFUTED** | f64 L·D · 6.0× |

## What this means

**Eleven of twelve.** Both directions of the file's thesis collapse: the twin was not corrupt at
`virginet`, `uque ad`, `supplicio-ignis`, `(Matth. …)`, `(II Cor. II)` or the 0125C guillemet, and
Migne did not print `eic.`, `Sodomorm.`, `susperstites` or a broken verse address.

⭐⭐ **0127D was the largest claim in the file and it is false.** `VERS. 17-19.` is what Gallica
prints, at 6× and unmistakably — the archive copy's `2` is ink filling the counter of a `1`, which is
precisely the failure mode the gate names ("a 9 blotted into a 6 inside a VERSE ADDRESS"). The
English had been set to the plate on this ruling and has been reverted (below).

⚠ **`uque ad` and `virginet` are Migne's own**, on both copies. They are not defects in our twin and
take no patch; they are live `[sic:]` candidates for the crux pass, which is the reverse of how they
were filed. Same for `dilicta` at 0099C in the 0008 range.

⚠ **0125B, narrowed residue — NOT patched here.** The claim as filed (`Math.` for `Matth.`) is
refuted at 6×; the plate reads `Matth.` exactly as our twin does. But the same crop shows the
chapter numeral set **lowercase**, `(Matth. v)`, where our twin has `(Matth. V)` — the identical
normalization confirmed and patched at **0103B** in the 0008 range. It is deliberately left out of
`8950-PATCH-JSON-0019.json` because the row's verdict is REFUTED and the residue is a different
claim from the one filed. **The assembly pass should decide it together with 0103B, and with
`(II Cor. ii)` at 0128A, `(Jer. v)` at 0129C and `Marci xix` at 0131A, all of which print lowercase
on the plate.** It is one convention, not five patches, and it deserves one ruling.

## 0125C, for the record

Gallica sets `viri sancti mundabantur ·  unde :  « Fide purificans corda eorum. »` There is a
single small mark after *mundabantur* where our twin has nothing — a raised dot, **not** the colon
the archive claimed (compare the unmistakable two-dot colon after *unde* on the same line). Under
the standing ruling that punctuation follows the twin, no patch and no `[sic:]`. Recorded only.

## English revert made (see report)

- `src/english/8950/0021.md` — 0127D, `VERS. 27-19.--` → `VERS. 17-19.--`

⛔ **Prose write-ups still carry the refuted ruling** and are NOT mine to edit under this stint's
no-shared-file rule: `src/english/8950/cruces-0019.md` §1 and §2, and the merged
`src/english/8950/cruces.md` §2 (≈ line 2481), both argue at length that `VERS. 27-19.` is the
plate's own reading. Worse, **`cruces-0031.md` and `cruces-0036.md` cite that ruling as precedent**
for rendering four further verse addresses from the plate. All of it rests on one over-inked digit
and needs retraction by whoever owns those files.

## Part B (dropped Hebrew) — not in scope, not checked

The empty `( )` at 0122D, 0124A/B and 0133B were not opened. On the evidence of 0104B and 0104C in
the 0008 range — where the plate carried the Hebrew both times and the TEI left a multi-space scar —
**they are very likely genuine and structural**, and are the highest-value remaining work in this
range. One leaf each: f62 (0123/0124), f61 (0121/0122), f67 (0133/0134, already fetched).
