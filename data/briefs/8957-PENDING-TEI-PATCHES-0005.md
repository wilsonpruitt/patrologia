# 8957 — pending TEI patches, stint 0005–0009 (cols 0762C–0772A)

**Stint-scoped file.** Merge into a work-level `8957-PENDING-TEI-PATCHES.md` at assembly;
written separately because peer stints were translating concurrently and a shared file would
have raced.

Filed under `translation-style.md` § "What the English translates — THE PLATE WHERE READ"
(locked, Wilson 2026-09-04). **The plate was read for every column in this range** — Gallica
`ark:/12148/bpt6k5505319w`, `f = (column + 1) / 2`, printed corner numbers read FIRST on every
leaf: f381 (761/762), f382 (763/764), f383 (765/766), f384 (767/768), f385 (769/770),
f386 (771/772). Each entry below was re-cropped at native resolution, one column at a time
(no crop crosses the gutter).

⚠ **Neither entry is a `[sic:]` or a `[var:]` against Migne.** Both are divergences between
Corpus Corporum's transcription and Migne's type.

---

## Part A — CONFIRMED at native resolution. Patch these.

| col | our TEI reads | Migne's plate reads | class | English treatment |
|---|---|---|---|---|
| 0764A | `dicentes eos vel prava dicere, vel **bel** bona quae dicunt non tenere` | **`dicentes eos vel prava dicere, vel bona quae dicunt non tenere`** | **OUR corruption** — the twin carries an intrusive non-word `bel` that the plate does not set | English renders the plate: "saying that they either speak depraved things, or do not hold the good things which they speak." **No marker, ever** — a `[d:]` or `[sic:]` here would accuse Migne of a doubling he never printed. Native crop: f382 region `990,760,890,220`. |
| 0770D | `Vastitas **es** gehenna quae foris` | **`Vastitas e s gehenna quae foris`** (a space between *e* and *s*, mid-line; the line breaks after *s*, before *gehenna*) | word division — the plate's own broken/spaced setting for *est*; our twin has fused it | English fires `[sic: *es*]` (the twin's form, which is what `verify-english` can check) and renders the sense: "The wasting is [sic: *es*] the gehenna which is without". **After this patch lands the marker should become `[sic: *e s*]`**, the whole broken run per Pattern 10. Native crop: f385 region `1550,2755,340,70` at 1360px. |

## Part B — checked and NOT patched

- **0767A `VERS. 20.--De mane usque ad vesperam. »`** — no opening `«`. The plate agrees with the
  twin exactly (f384, left column). This is the book's known unbalanced-guillemet class,
  plate-confirmed at three sites already; two further sites in this range (0766A, 0771D) were
  read at the plate and also agree. **Not a defect, not a patch.**
- **0766C `Imago coram oculis me.`** — the plate prints `me`, clean type, no broken sort
  (f383, right column, native crop `980,1560,890,130`). Migne's own divergence from the
  Vulgate's *meis*; handled in the English with a `[var:]`, not a patch.
- **0771A `ecclesiae moribus et linguas distantes`** — the plate prints `linguas` (f386, left
  column, native crop `150,630,760,70`). Migne's own reading; crux only.
