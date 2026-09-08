# 8949 *Liber Exodus* — pending TEI patches, stint 0040–0043 (bands 0288C–0296C)

Sites where I opened the column at the plate and Migne's type differs from our Corpus Corporum
twin. Per the locked rule (`translation-style.md`, "What the English translates"), **the English
already renders the plate**; this file records the divergence so the Latin converges on it when
the patch pass lands. I have not edited `sources/pl/tei/8949.xml` or `data/tei-patches/8949.json`.

Plate range: Gallica `bpt6k5505319w` **f144–f148**, printed corner numbers read first on every
leaf (287/288, 289/290, 291/292, 293/294, 295/296 — no quire drift).

⭐ **Five of the six entries below are of the class stint 0005–0009 measured: a reading that looks
like Migne's broken type from our twin alone, and is our digitization's.** That stint fired zero
`[sic:]` on four such sites. I fired two, and withdrew three, and the difference in every case is
that I looked.

---

## 1. 0289A/B — `aliquam quam partem` in our twin; the plate prints ONE word, hyphenated

- **Opened by:** stint 0040–0043, 2026-09-08.
- **Plate:** Gallica f145, corners **289/290**, **left** column, crop y 0.26–0.40 at 2.6×
  (inside one column; gutter not crossed).
- **Our twin prints:** `Sciendum ergo quod aliquam [0289B] quam partem ingrediebatur, atrium scilicet`
- **The plate prints:** `Sciendum ergo quod ali-` at a line end, `quam partem ingrediebatur, atrium scilicet`
  at the start of the next line. The hyphen is clearly set, exactly as `scriptu-|rarum` and
  `intima scriptu-` are hyphenated four lines below.
- **Second witness:** the archive OCR reads `Sciendum ergo quod ali-` — corroborates.
- **What was withdrawn:** a `[d: ]` dittography marker had been drafted for `aliquam quam`. Migne
  does not double the word; **our transform doubled it while inserting the column anchor at the
  hyphenated break.**
- **English as shipped** (`src/english/8949/0040.md`): "…that he was entering [0289B] some part,
  namely the court…"
- **Proposed patch:** `find` `quod aliquam quam partem ingrediebatur` → `replace`
  `quod aliquam partem ingrediebatur` (with the `[0289B]` anchor retained at the same point).

---

## 2. 0291B — `dueta` in our twin; the plate prints `ducta`

- **Opened by:** stint 0040–0043, 2026-09-08.
- **Plate:** Gallica f146, corners **291/292**, **left** column, crop y 0.26–0.40 at 2.6×.
- **Our twin prints:** `ut decem quater dueta quadragenarium numerum signent`
- **The plate prints:** `ut decem quater ducta quadragenarium nu-|merum signent` — the `c` is
  unambiguous at 2.6×, with its open bowl, and is not the `e` of `quater` two words earlier.
- **Second witness:** the archive OCR reads `ut decem quater ducta quadragenarium` — corroborates.
- **What was withdrawn:** a `[sic: *dueta*]`. `dueta` is a non-word and would have been a public
  accusation against Migne for our own transcription.
- **English as shipped** (`src/english/8949/0041.md`): "…so that ten multiplied four times may
  signify the number of forty."
- **Proposed patch:** `find` `decem quater dueta quadragenarium` → `replace`
  `decem quater ducta quadragenarium`

---

## 3. 0292A/B — a siglum citation left unwrapped, with a column anchor dropped inside it

- **Opened by:** stint 0040–0043, 2026-09-08.
- **Plate:** Gallica f146, corners **291/292**, **right** column, crop y 0.255–0.35 at 3.0×.
- **Our twin prints:** `VERS. 21.-- *Quidquid ad cultum,* etc. (GREG., *ubi [0292B] supra.* ) In ornamento tabernaculi`
- **The plate prints:** `VERS. 21. — *Quidquid ad cultum*, etc. (GREG., *ubi supra*.) In ornamento
  tabernaculi` — set exactly as the twenty-odd other siglum citations on the same two columns,
  every one of which our twin *does* wrap as `[n: …]`.
- **Two separate transform artifacts here, and neither is Migne's:**
  1. the citation is not wrapped as `[n: …]`, so it will not reach `fontes[]` at index time;
  2. the `[0292B]` band anchor has been dropped *inside* the italic run, between `ubi` and `supra`.
     There is no band mark at that point on the plate.
- **English as shipped** (`src/english/8949/0041.md`): the citation is carried verbatim, unanglicized,
  with the anchor reproduced in place — `(GREG., *ubi [0292B] supra.* )` — because reproducing the
  anchor verbatim outranks tidying the markup, and the fix belongs here.
- **Proposed patch:** wrap as `[n: (GREG., ubi supra. )]` and move the `[0292B]` anchor to the
  paragraph boundary before `In ornamento`. ⚠ **This one changes `noteCount` for chunk 0041 from
  41 to 42** and must be re-chunked, not hand-edited; flagging it rather than proposing a `find`/
  `replace` string, because the anchor move needs the orchestrator's eye.

---

## 4. 0295A — `annuns` in our twin; the plate shows an under-inked `annulis`

- **Opened by:** stint 0040–0043, 2026-09-08.
- **Plate:** Gallica f148, corners **295/296**, **left** column, first text line, crop
  `(200,232,380,272)` at **16×**.
- **Our twin prints:** `quarum [0295A] annuns erant infixi vectes de lignis sethim`
- **The plate shows:** `annu` + three strokes + `s`. The first of the three is a short minim, the
  second is taller and reads as an `l` whose ascender is partly lost to under-inking, the third is
  a short minim. It is **not** `annuns`, which would have two minims only.
- **Second witness:** the archive OCR reads `ram anQiilis erant infixi vectes de lignis sethim` —
  a garbled render of **`annulis`**, and it carries the `l`.
- **Sense:** *annulis* (rings) is what the clause requires — the bars are fixed *in the rings* so
  that the boards can be lifted and carried. *annuns* is not a word in any case.
- **Why NO `[sic:]`:** the difference established is between our twin and **both** witnesses, not
  a defect the plate carries. Under-inking on Migne's own copy is a fact about the printing, and
  the residual uncertainty is recorded in `cruces-0040.md` §5 rather than hidden.
- **English as shipped** (`src/english/8949/0043.md`): "…there were boards, in whose [0295A] rings
  were fixed bars of sethim wood…"
- **Proposed patch:** `find` `quarum annuns erant infixi vectes` → `replace`
  `quarum annulis erant infixi vectes`

---

## 5. 0296C — `plagis-Aegypti` in our twin; the plate has a line break and NO hyphen

- **Opened by:** stint 0040–0043, 2026-09-08.
- **Plate:** Gallica f148, corners **295/296**, **right** column, crop y 0.53–0.72 at 2.4×.
- **Our twin prints:** `deinde de plagis-Aegypti, tandem de exitu illorum`
- **The plate prints:** `deinde de plagis` at a line end, `Aegypti, tandem de exitu illorum et de
  transitu ma-` at the start of the next. **There is no hyphen after `plagis`** — and the
  hyphenation on the same line (`ma-|ris Rubri`, `per-|venit`) is plainly set, so its absence here
  is legible, not a matter of inking.
- **English as shipped** (`src/english/8949/0043.md`): "…then of the plagues of Egypt, and at
  length of their going out…"
- **Proposed patch:** `find` `de plagis-Aegypti` → `replace` `de plagis Aegypti`

---

## Sites examined at the plate and NOT patched — recorded so they are not re-opened

- **0290C `iu tertiam`.** Gallica prints `iu` in italic; the archive prints `in iertiam`, moving the
  defect one word along, which is documented jbig2 behaviour. Gallica the photograph **and** our own
  twin agree on `iu`, so this is **Migne's**, not ours. `[sic: iu]` fires in the English. No patch.
- **0291C `Isael`.** Gallica prints `Isael` in italic, clearly, with no under-inking at that letter;
  the archive prints `Israel`, repairing toward the expected word. **Migne's.** `[sic: Isael]` fires
  in the English. No patch. (ADJUDICATIONS §5's rule applied exactly: the archive's disagreement has
  a mechanism, Gallica's reading does not.)
- **0289B `Lucem habitat inaccessibilem`.** Plate-confirmed as `habitat`, where the Vulgate has
  *inhabitat*. Migne's, and English has no exponent for the prefix. No patch, no marker.
- **0291D `Coccumque bis tinctum. (ID. homil. 13 in Exod.)`.** The archive prints an unbalanced
  `( Id.) homa, 13 in Exod, )`. Gallica prints it balanced and clean, matching our twin. The archive
  manufactured it. No patch.
- **0291C `de servitute saeculi liberati libertatem scientiae requiramus`.** The archive reads
  `liberari`. I did **not** open that exact line on Gallica, so I take no position: `liberati` is
  sound, construes with `requiramus`, and the archive may never be a sole witness for a letter.
  Recorded as an open, immaterial disagreement.
- **0293C CAPUT XXXIX.** The plate prints the chapter head and then a single row of spaced points,
  with no gloss at all. Chunk 0042 is faithful; this is Migne's own blank, not lost text, and it
  takes no `[ed: …]`.
- **0296A `sanctus sanctorum`.** Plate-confirmed as printed. A real word in a real slot; rendered
  literally under Pattern 7, crux logged, no marker, no patch.
