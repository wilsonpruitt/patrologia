# 8949 *Liber Exodus* — pending TEI patches, chunks 0015–0019 (bands 0221B–0234D)

Sites where this stint opened the column at the plate and Migne's type differs from our Corpus
Corporum twin. Per the locked rule (`translation-style.md`, "What the English translates — THE
PLATE WHERE READ"), **the English already renders the plate**; this file records the divergence so
the Latin converges on it when the patch pass lands.

Do not edit `sources/pl/tei/8949.xml` or `data/tei-patches/8949.json` from here — the orchestrator
merges. Format: one entry per site; `find` must match exactly once in the source XML.

⭐ **Four sites, and all four are OURS.** The stint fired exactly one `[sic:]` against Migne
(0225A `ververba`, and it is a doubling both witnesses show), while four readings that looked like
his broken type were the digitization's. That is the 0005–0009 result repeating, and it is why the
plate was read before any marker was fired.

---

## 0225D — `id est.` in our twin, **`id est,`** on the plate

- **Opened by:** stint 0015–0019, 2026-09-08
- **Plate:** Gallica `bpt6k5505319w`, leaf **f113**, printed corner numbers **225 / 226**, left
  column, last text line of band D. Read at native resolution, cropped locally (gutter not crossed).
  Corroborated by the archive copy's text layer, `patrologiaecurs04migngoog_djvu.txt` l. 17364.
- **Our twin prints:** `percute et tu obluctantes undas virga, id est. verbo`
- **The plate prints:** `percute et tu obluctantes undas virga, id est, verbo`
- **Evidence:** both witnesses set a comma. A full stop there breaks the appositional phrase
  (`virga, id est, verbo legis et vigilantia Scripturarum`) mid-clause, and the sentence continues
  with no capital. The point class is the one already documented on this book at 0195A.
- **English as shipped** (`src/english/8949/0016.md`): "…strike the struggling waves with the rod,
  that is, with the word of the law and with the vigilance of the Scriptures…"
- **Proposed patch:** `find` `undas virga, id est. verbo` → `replace` `undas virga, id est, verbo`
- **Note:** one mark; no marker counts, chunk boundaries, anchors or `noteCount` affected.

---

## 0228C — `miqui` in our twin, **`iniqui`** on the plate

- **Opened by:** stint 0015–0019, 2026-09-08
- **Plate:** Gallica `bpt6k5505319w`, leaf **f114**, printed corner numbers **227 / 228**, right
  column, band C. Read at native resolution and again at 12× on the word itself.
  Corroborated by the archive copy, `patrologiaecurs04migngoog_djvu.txt` ll. 17502–17503.
- **Our twin prints:** `inde miqui merguntur in profundum quasi plumbum`
- **The plate prints:** `inde ini-` / `qui merguntur in profundum quasi plumbum` — the word broken
  at the line end, with a hyphen.
- **Evidence:** `miqui` is not a Latin word. At 12× the plate shows three strokes with the dot on the
  third (`ini`), not the two-arch `m`; the archive copy hyphenates the same way and reads `ini-`.
  The sentence needs the antithesis (`inde iniqui merguntur … sancti vero ambulant super aquas`),
  and `iniquitas` stands two words earlier in the same clause.
- **English as shipped** (`src/english/8949/0017.md`): "…hence the wicked are drowned in the deep like
  lead, but the saints walk upon the waters…"
- **Proposed patch:** `find` `inde miqui merguntur` → `replace` `inde iniqui merguntur`
- **Note:** a candidate `[sic:]` against Migne, withdrawn at the plate.

---

## 0230C — `scili cet` in our twin, **`scilicet`** on the plate

- **Opened by:** stint 0015–0019, 2026-09-08
- **Plate:** Gallica `bpt6k5505319w`, leaf **f115**, printed corner numbers **229 / 230**, right
  column, band C. Read at native resolution and again at 12× on the line end.
  Second witness: the archive copy, `patrologiaecurs04migngoog_djvu.txt` ll. 17643–17644.
- **Our twin prints:** `sed tempus statuit et mensuram dominationis, scili cet donec pertranseat`
- **The plate prints:** the word broken at the line end — `… dominationis, scili` / `cet donec
  pertranseat populus tuus.`
- **Evidence:** ⚠ **the two copies differ on the hyphen.** The archive copy prints `scili-` with a
  clear hyphen; the Gallica impression ends the line at `scili` with clean white space and no visible
  ink damage. Either way the word is `scilicet` broken at a line end, which is the class CLAUDE.md
  names as *ours and wearing Migne's face* — a line-break division is not a textual reading, and our
  twin has turned it into a space. **No `[sic:]` was fired**, on purpose: a missing hyphen on one
  impression is not evidence of a defect in Migne's type.
- **English as shipped** (`src/english/8949/0018.md`): "…but he appointed a time and a measure of the
  domination, namely, *until thy people pass over.*"
- **Proposed patch:** `find` `mensuram dominationis, scili cet donec` → `replace` `mensuram
  dominationis, scilicet donec`
- **Note:** the Gallica/archive disagreement is recorded in `cruces-0015.md` §6 so it is not
  re-opened from either image alone.

---

## 0226C — `homil. 6 n Exod.` in our twin's `[n:]`, **`homil. 6 in Exod.`** on the plate

- **Opened by:** stint 0015–0019, 2026-09-08
- **Plate:** Gallica `bpt6k5505319w`, leaf **f113**, printed corner numbers **225 / 226**, right
  column, band C — the siglum opening CAPUT XV.
- **Our twin prints:** `[n: (ORIG., homil. 6 n Exod.)]`
- **The plate prints:** `(ORIG., homil. 6 in Exod.)`
- **Evidence:** the plate sets a clean `in`, and the same work cites `hom. 6 in Exod.` at 0233A and
  `hom. 7 in Exod.` at 0233D and 0234A, all with the preposition intact. `n Exod.` is not a form
  Migne uses anywhere in this book.
- **English as shipped** (`src/english/8949/0017.md`): the note rides **verbatim** as
  `[n: (ORIG., homil. 6 n Exod.)]`, because `[n:]` contents are content-checked against the Latin twin
  and must match it exactly. The English will pick the corrected form up automatically once this patch
  lands; **it must not be "fixed" in the English first**, or `verify-english` fails.
- **Proposed patch:** `find` `ORIG., homil. 6 n Exod.` → `replace` `ORIG., homil. 6 in Exod.`
- **Note:** affects a `[n:]` content string only; `noteCount` unchanged. Also feeds `fontes[]` at
  index time, so the corrected form is worth having before `index-work.mjs` runs on this work.
