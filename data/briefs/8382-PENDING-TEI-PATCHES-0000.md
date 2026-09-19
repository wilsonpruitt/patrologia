# 8382 Egbert, *Poenitentiale* — pending TEI patches, stint A (chunks 0000–0003)

Sites where the translator opened the column at the plate and Migne's type differs from our
Corpus Corporum twin. Per the locked rule, **the English already renders the plate**; this file
records the divergence so the Latin converges on it when the patch pass lands.

Witness: archive PDF `raw/scans/pl089/patrologiaecurs74unkngoog.pdf`, single witness, rendered at
300 dpi (400 dpi for p. 211), crops inside one column. Every entry below is a case where **the
plate is sound and our transcription is not**. None accuses Migne of anything; none carries a
marker.

Each `find` was checked on 2026-09-19 to match exactly once in `sources/pl/tei/8382.xml`
(the XML breaks lines inside some runs, so the finds are kept to single tokens or intra-line runs).

---

## 0402A — *quovit* for *quovis*

- **Plate:** p. 207, corners **401 / 402**, right column, line 4 of the column (preface).
- **Our twin prints:** `qui quovit anno occurrunt`
- **The plate prints:** `qui quovis anno occurrunt` — clean final *s*, zoomed 2.5×.
- **English as written** (`0000.md`): "which occur in every year".
- **Proposed patch:** `find` `quovit` → `replace` `quovis`

## 0402C — *uratur* for *utatur*

- **Plate:** p. 207, corners **401 / 402**, right column, CAPUT II, ~line 15 of the lower block.
- **Our twin prints:** `et uratur omnibus aliis cibis`
- **The plate prints:** `et utatur omnibus aliis cibis` — the third letter is a *t* with a broken
  stem (no *r* ear), zoomed 3×. The same canon prints *et utatur iis quae habet* nine lines lower.
- **Caveat:** the *t* is damaged; a Gallica check of PL 89 would settle it beyond doubt. *uratur*
  ("let him be burned") has no sense here.
- **English as written** (`0000.md`): "let him use all the other foods".
- **Proposed patch:** `find` `et uratur omnibus` → `replace` `et utatur omnibus`

## 0407C — *conjungat* for *conjungant*

- **Plate:** p. 210, corners **407 / 408**, left column, CAPUT XXV, line 3 of the canon.
- **Our twin prints:** `Si servus et serva mutua voluntate se conjungat, et si deinceps`
- **The plate prints:** `… se conjungant, et si dein-|ceps` — the *n* before *t* is clear at 2.2×.
- **English as written** (`0001.md`): "If a slave and a bondwoman join themselves" (English is number-neutral here).
- **Proposed patch:** `find` `se conjungat,` → `replace` `se conjungant,`

## 0406B — *commitere* for *committere*

- **Plate:** p. 209, corners **405 / 406**, right column, CAPUT XIX, line 8.
- **Our twin prints:** `si uxor flagitia sua commitere velit`
- **The plate prints:** `… committere ve-|lit` — two *t*, zoomed 2.2×.
- Orthographic only; English unaffected.
- **Proposed patch:** `find` `commitere velit` → `replace` `committere velit`

## 0409B — *immo' et* for *immolet,*

- **Plate:** p. 211, corners **409 / 410**, left column, CAPUT XXXII, line 2 of the canon; read at
  300 and 400 dpi.
- **Our twin prints:** `saltem diabolis` / `immo' et jejunet per annum` (line break in the XML)
- **The plate prints:** `saltem diabolis` / `immolet, jejunet per annum` — one word, *immolet*,
  followed by a comma; no apostrophe, no *et*.
- **English as written** (`0002.md`): "If anyone sacrifices some great reward at least to devils, let him fast for a year".
- **Proposed patch:** `find` `immo' et jejunet` → `replace` `immolet, jejunet`

## 0410C — *gratiae* for *gratia*

- **Plate:** p. 211, corners **409 / 410**, right column, CAPUT XXXV, last lines; 400 dpi crop.
- **Our twin prints:** `ad presbyterum eucharistiae gratiae accedere`
- **The plate prints:** `ad presbyterum eucharistiae gratia acce-|dere` — no final *e*.
- **English as written** (`0002.md`): "No one ought to approach the presbyter for the sake of the Eucharist".
- **Proposed patch:** `find` `eucharistiae gratiae` → `replace` `eucharistiae gratia`

## 0411C — comma for full stop

- **Plate:** p. 212, corners **411 / 412**, left column, CAPUT XXXIX, line 11.
- **Our twin prints:** `Theodorius dicebat quod nihil ei doleat, Si in parvam`
- **The plate prints:** `… nihil ei doleat. Si in parvam` — a full stop; the capital *Si* agrees.
- **English as written** (`0003.md`): "…that it should grieve him nothing. If a mouse or a weasel…"
- **Proposed patch:** `find` `nihil ei doleat,` → `replace` `nihil ei doleat.`

## 0413A — *cucharistiam* for *eucharistiam*

- **Plate:** p. 213, corners **413 / 414**, left column, first line.
- **Our twin prints:** `saltem cucharistiam non deneget`
- **The plate prints:** `saltem eucharistiam non deneget`.
- **English as written** (`0003.md`): "and at least not deny him the Eucharist".
- **Proposed patch:** `find` `cucharistiam` → `replace` `eucharistiam`

## 0413A — *duditant* for *dubitant*

- **Plate:** p. 213, corners **413 / 414**, left column, CAPUT IV, line 2.
- **Our twin prints:** `ast` / `duditant deinde`
- **The plate prints:** `ast` / `dubitant deinde`.
- **English as written** (`0003.md`): "but they then doubt".
- **Proposed patch:** `find` `duditant` → `replace` `dubitant`

## 0414B (head of CAPUT X) — *Deo eo* for *De eo*

- **Plate:** p. 213, corners **413 / 414**, right column, head of CAPUT X.
- **Our twin prints:** `Deo eo qui sacramentum desiderat`
- **The plate prints:** `De eo qui sacramentum desiderat`.
- **Note:** this is inside a `<head>`, so the patch also changes chunk 0003's frontmatter `heads[]`
  on re-chunk; the English frontmatter must be re-copied then. The English head already reads "On him who…".
- **Proposed patch:** `find` `Deo eo qui sacramentum` → `replace` `De eo qui sacramentum`

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0409C *frumentum*** (p. 211 left, the prep candidate): the plate sets *fre-|mentum* across a
  line break. At 400 dpi and 8× the third glyph is ink-filled with no open eye, and it carries a
  foot at lower right, which is a *u* feature rather than an *e*. The head of the same chapter
  sets *fru-|mentum*. **Indeterminate on this copy; our TEI's *frumentum* stands. No patch,
  no marker** (crux, single-witness).
- **0404A *volunt*** (p. 208 right, *nonnulli volunt annum*): the word is blotted solid on this copy. Cannot be read; TEI stands.
- **0412B *sciat*** (p. 212 right, *et postea sciat*): the glyph looks like *e*, but *cantet* in the
  same line looks like *cantot*. The a/e/o shapes on this 1-bit copy cannot be trusted. TEI stands.
- **0401B *mihi*** (p. 207, reads like *mibi*) and **0403D *Dei*** (p. 208, reads like *Doi*): worn
  sorts on this copy. TEI stands.
- **0408–0414 *Furi*, *devocet*, *Theodorius*, *nequeunt*, *emi*, *suffiatur*, *nisi excipe*,
  *in extis*, *masculi*, *inimicis*, *Brunonis***: all plate-confirmed as printed. They are cruces
  (see `src/english/8382/cruces-0000.md`), not transcription errors. **Never patch them.**
- **0410A *deindè*** (plate has a grave accent; TEI *deinde*): accent only. Not worth a patch.
