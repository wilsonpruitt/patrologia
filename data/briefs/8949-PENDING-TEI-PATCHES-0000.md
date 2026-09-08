# 8949 *Liber Exodus* — pending TEI patches (stint 0000–0004, bands 0183A–0193C)

Sites where this translator opened the column at the plate and Migne's type differs from our
Corpus Corporum twin. Per the locked rule (`translation-style.md`, "What the English translates"),
**the English already renders the plate**; this file records the divergence so the Latin converges
on it when the patch pass lands. Do not edit `sources/pl/tei/8949.xml` or
`data/tei-patches/8949.json` from here — the orchestrator merges.

Every `find` below was checked and matches **exactly once** in `sources/pl/tei/8949.xml`.

Opened by: stint 0000–0004, 2026-09-08. Gallica `bpt6k5505319w`, leaves f92–f97, printed
corner numbers read FIRST on every leaf (f92=183/184, f93=185/186, f94=187/188, f95=189/190,
f96=191/192, f97=193/194 — the `f = ceil(column/2)` map held on all six).

Second witness where cited: `raw/scans/pl113/patrologiaecurs04migngoog_djvu.txt`, the OCR text
layer of the archive.org copy. ⚠ That copy is 1-bit JBIG2 (symbol substitution), so it is never
a sole witness below; it is used only to corroborate a Gallica reading, except at 0186D where
its role is stated explicitly.

---

## 0183D — our twin reads `et`, the plate reads `te`

- **Our twin prints:** `et terra et multiplicat in operibus bonis`
- **The plate prints:** `et terra te multiplicat in operibus bonis`
- **Plate:** Gallica leaf **f92**, printed corners **183 / 184**, LEFT column, foot.
  Native-resolution crop of the column's last lines, then a 6× LANCZOS crop of the single line.
  No crop crossed the centre gutter.
- **Evidence:** the word is cleanly inked and unambiguous at 6× — `te`, with the `t` ascender and
  crossbar plainly separate from the `e`. Compare `et` twice in the same line (`gentur, et terra`)
  for the contrasting form.
- **Second witness:** archive OCR line 14205 reads `geniur, et terra te multiplicat in operibus bonis,`
  — independently `te`.
- **Why it matters:** the twin's `et terra et multiplicat` has no subject-verb agreement and no
  object; the plate's `terra te multiplicat` ("the earth multiplies **thee**") is the sense Origen's
  whole paragraph is building (`multiplicantur in te filii Israel`).
- **English as shipped** (`src/english/8949/0001.md`): "and the earth multiplies thee in good works".
- **Proposed patch:** `find` `et terra et multiplicat in operibus bonis`
  → `replace` `et terra te multiplicat in operibus bonis`

---

## 0189C — our twin reads `collecemus`, the plate reads `collocemus`

- **Our twin prints:** `regalia collecemus`
- **The plate prints:** `regalia colloce-` / `mus` (broken across a line, with hyphen)
- **Plate:** Gallica leaf **f95**, printed corners **189 / 190**, LEFT column, band C. Native-resolution
  crop at 3.8×; type is clean and fully inked.
- **Evidence:** the second vowel is an unambiguous `o`, closed and round, in a line that also sets
  `cordis`, `tecta` and `regalia` crisply. There is no doubt at this resolution.
- **Second witness:** archive OCR line 14593 reads `intra cordis tecta regalia coUoce-` — the `oc`
  agrees.
- **English as shipped** (`src/english/8949/0003.md`): "let us store them within the royal roofs of
  the heart."
- **Proposed patch:** `find` `regalia collecemus` → `replace` `regalia collocemus`

---

## 0191D — our twin reads `sacertodes`, the plate reads `sacerdotes`

- **Our twin prints:** `qua ratione sacertodes in tabernaculo Dei ministrent`
- **The plate prints:** `qua ratione sacerdotes in tabernaculo Dei ministrent`
- **Plate:** Gallica leaf **f96**, printed corners **191 / 192**, LEFT column, band D. Native-resolution
  crop at 3.8×.
- **Evidence:** `sacerdotes` is fully legible, and the next line but one prints `sacerdo-` / `tale`
  (for *sacerdotale*) with the same `-erdo-` sequence, giving a same-column control for the letters.
  The twin's `sacertodes` is a `d`/`t` metathesis introduced in transcription.
- **Second witness:** archive OCR line 14766 reads `qua ratione sacerdoles in taberna-` — `sacerdo-`
  agrees (its final `les` for `tes` is that copy's own noise).
- **English as shipped** (`src/english/8949/0004.md`): "by what reason the priests should minister in
  the tabernacle of God".
- **Proposed patch:** `find` `ratione sacertodes in tabernaculo`
  → `replace` `ratione sacerdotes in tabernaculo`

---

## 0186D — our twin reads `divirorum`; PROVISIONAL, the plate is under-inked at the letter

⚠ **This one is weaker than the three above and is flagged so a merge reviewer can decline it.**

- **Our twin prints:** `ad divirorum intelligentiam`
- **Proposed reading:** `ad divinorum intelligentiam`
- **Plate:** Gallica leaf **f93**, printed corners **185 / 186**, RIGHT column, band D.
  Read at 4.2×, then again at 13× with autocontrast on the single word.
- **What the plate actually shows:** the word is **under-inked at exactly the disputed letter**.
  `divi` and `orum` are clean; the glyph between them shows a left vertical with a failed right
  arch, which is compatible with a starved `n` and also with `r`. **I could not decide it by eye,
  and I am not claiming that I did.**
- **Second witness:** archive OCR line 14402 reads `has eruditiones ad divinorum intelligentiam
  paratior` — `divinorum`.
- **Reasoning for the English:** `divirorum` is not a word in any lexicon; `divinorum` is required
  by the sense (`divina sectari … ad divinorum intelligentiam`). Visible under-inking on the better
  witness explains how a transcriber read `n` as `r`. Crucially, the asymmetry is one-way:
  rendering `divinorum` makes **no public claim that Migne's plate is defective**, whereas the
  alternative (a `[sic: *divirorum*]`) would accuse the plate on the strength of an illegible letter
  that the second witness reads against. That is the 8967 `ominus`/`eminus` failure mode, and I
  declined it.
- **English as shipped** (`src/english/8949/0002.md`): "to the understanding of things divine" —
  rendered as sense, **with no marker of any kind**.
- **Proposed patch (PROVISIONAL — needs one confirming read):** `find` `ad divirorum intelligentiam`
  → `replace` `ad divinorum intelligentiam`
- **How to settle it:** a higher-resolution witness of f93 right column band D, or the Google-books
  page image rather than its OCR. If no better witness turns up, leaving the twin unpatched is
  acceptable; the English does not depend on the patch landing.

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0183A `corporalis noster exitus de Aegypto spirituali`** — the plate really prints `corporalis`.
  Twin correct, **no patch**. The English carries a `[cj:]`; see `cruces-0000.md` §3.
- **0183A `et Hebraeorum liberationum`** — the plate really prints the genitive plural `liberationum`
  in a run of accusatives. Migne's own reading. Twin correct, **no patch**.
- **0184B `et divictis eis [devicto eo]`** — plate-confirmed **verbatim**, square brackets included.
  ⚠ The archive OCR prints *parentheses* here (`(devicto eo)`); that is the JBIG2 copy's own noise,
  and Gallica is decisive. **Never patch this bracket**, and do not add a `[sic:]` to `divictis`
  (see cruces §4).
- **0185A `concientiam`** — plate-confirmed, hyphenated `con-` / `cientiam` across a line. Migne's
  own orthography. Twin correct, **no patch**.
- **0190D `etc Postquam`** — the plate prints `etc` with **no** full stop, at a line end. Twin
  correct. Pattern 8 forbids supplying the mark. **No patch**, and the English prints `etc` bare.
- **0192A the lone `«`** — settled before this stint and re-confirmed in passing; Migne's own
  unclosed quotation. **Never patch a guillemet in this book.**
- **0192B `tanto delectabiliter … quanto`** — plate-confirmed, positive degree where Gregory's text
  has `delectabilius`. Migne's reading. Twin correct, **no patch**.
- **0192D `In terram bonam et spatiosam, in terra quae fluit lacte`** — plate-confirmed: the plate
  really does shift from accusative `in terram` to ablative `in terra`. Migne's own. Twin correct,
  **no patch**; the divergence is carried by a `[var:]` instead.
- **0193B `et praedabimini eos`** — plate-confirmed verbatim, including the italics. Twin correct,
  **no patch**; carried by a `[var:]`.
