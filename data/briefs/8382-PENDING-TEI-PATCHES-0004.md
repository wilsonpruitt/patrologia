# 8382 Egbert, *Poenitentiale* — pending TEI patches, stint B (chunks 0004–0007)

Sites where the translator opened the column at the plate and Migne's type differs from our
Corpus Corporum twin. Per the locked rule, **the English already renders the plate**; this file
records the divergence so the Latin converges on it when the patch pass lands.

Witness: archive PDF `raw/scans/pl089/patrologiaecurs74unkngoog.pdf`, single witness. Every entry
below is a case where **the plate is sound and our transcription is not** (four of them are
non-words in the TEI). None accuses Migne of anything; none carries a marker.

Format: one entry per site. Each `find` was checked to match exactly once in
`sources/pl/tei/8382.xml` on 2026-09-19.

---

## 0416A — spurious full stop

- **Plate:** p. 214, corners **415 / 416**, right column, CAPUT XV, lines 2–3. 300 dpi crop (rows 700–1400, right of the gutter).
- **Our twin prints:** `sacerdotem suum, et alios.` / `Dei ministros` (line break in the XML)
- **The plate prints:** `sacerdotem suum, et alios` / `Dei ministros` — no mark after *alios*.
- **Why:** a full stop there cuts *alios Dei ministros* ("other ministers of God") in two. Clean ink, nothing at the line end.
- **English as written** (`src/english/8382/0004.md`): "his priest, and other ministers of God, that they may admonish him".
- **Proposed patch:** `find` `sacerdotem suum, et alios.` → `replace` `sacerdotem suum, et alios`

## 0415D — *infra* for *intra*

- **Plate:** p. 214, corners **415 / 416**, left column, CAPUT II, first line of the canon. 300 dpi crop (rows 2600–3150).
- **Our twin prints:** `infantem infra se occidat`
- **The plate prints:** `infantem intra se occidat`
- **Why:** plain *t*, crossbar visible, same sort as in *infantem* beside it.
- **English as written:** "kills her infant within her".
- **Proposed patch:** `find` `infantem infra se` → `replace` `infantem intra se`

## 0415D — *volit* for *velit*

- **Plate:** p. 214, left column, CAPUT II, last line of the canon (same crop).
- **Our twin prints:** `praescribere volit` (a non-word)
- **The plate prints:** `praescribere velit`
- **English as written:** "as her confessor shall mercifully wish to prescribe to her".
- **Proposed patch:** `find` `praescribere volit` → `replace` `praescribere velit`

## 0418D — *lit* for *fit*

- **Plate:** p. 215, corners **417 / 418**, right column, CAPUT XVIII, line 5. 300 dpi crop (rows 2750–3100).
- **Our twin prints:** `uti non lit` (a non-word)
- **The plate prints:** `uti non fit` — the *fi* ligature, the same sort as the *fi* of *fidelium* two lines above.
- **English as written** (`0005.md`): "And if this happens anywhere, as it does not happen, …"
- **Proposed patch:** `find` `uti non lit` → `replace` `uti non fit`

## 0419A — *contrabant* for *contrahant*

- **Plate:** p. 216, corners **419 / 420**, left column, CAPUT XIX, line 2. 400 dpi strip.
- **Our twin prints:** `contrabant` (a non-word)
- **The plate prints:** `contrahant`. This copy's *h* is worn to look like *li*, and it looks exactly like the *h* of *Christianis* in the line above. A *b* would show a closed bowl, and there is none.
- **English as written:** "that they contract marriage more than twice".
- **Proposed patch:** `find` `contrabant` → `replace` `contrahant`

## 0420A — *confesarius* for *confessarius*

- **Plate:** p. 216, right column, CAPUT XXIV, second-to-last line. 300 dpi crop (rows 800–1050).
- **Our twin prints:** `confesarius`
- **The plate prints:** `confessarius`
- **English:** unaffected ("his confessor").
- **Proposed patch:** `find` `confesarius` → `replace` `confessarius`

## 0422D — *pronti* for *prouti*

- **Plate:** p. 217, corners **421 / 422**, right column, CAPUT XI, penultimate line. 400 dpi strip.
- **Our twin prints:** `pronti episcopus provinciae` (a non-word)
- **The plate prints:** `prouti episcopus provinciae`
- **English as written** (`0006.md`): "as the bishop of the province shall have prescribed to them".
- **Proposed patch:** `find` `pronti episcopus` → `replace` `prouti episcopus`

## 0427C — *incoepit* for *incepit*

- **Plate:** p. 220, corners **427 / 428**, left column, line 2 of *Si quis aliquid vendat*. 300 dpi crop (rows 1680–1860).
- **Our twin prints:** `edere incoepit`
- **The plate prints:** `edere incepit`
- **English:** unaffected ("has begun to eat"). Spelling only.
- **Proposed patch:** `find` `edere incoepit` → `replace` `edere incepit`

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0417C `confes arius`**: the plate shows a wide gap in *confessarius* at CAPUT XI. That is spacing or a worn sort in this copy, and our twin's unbroken word is right. **No patch.**
- **0422D `emendent . quandiu`**: a dot stands well to the right of *emendent* at a line end, and the next line opens lower-case. It is a speck, not a stop, so our twin's comma stands. **No patch.**
- **0425C, 0425D `in pane, et aqua`** (two sites): the plate has a comma-width gap with no ink after *pane*. At 0426D the same phrase prints its comma. An uninked comma is not evidence that there was no comma. **No patch**, and the English keeps the comma.
- **0424A `o,us`** (for *opus*), **0424B `.populi`**, **0427D `projiciat‚,`**: these are wear and specks on this copy. Our twin is right each time. **No patch.**
- **0416C head `Do eo quod mulier`**: the plate really prints *Do*. That is Migne's type, not the transcription's, so it must **not** be patched (Pattern 7 territory; single-witness crux in `src/english/8382/cruces-0004.md`).
- **0421C `Dominus Deus et Dominus vester`**: the plate prints this. It is Migne's, **not** a transcription doubling. **No patch.**
