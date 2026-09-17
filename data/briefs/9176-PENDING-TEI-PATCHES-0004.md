# 9176 Eriugena, *Commentarius in Evangelium secundum Joannem* — pending TEI patches (stint 0004–0006, bands 0309D–0320C)

Sites where this translator opened the column at the plate and Floss/Migne's type differs from our
Corpus Corporum twin. Per the locked rule (`translation-style.md`, "What the English translates —
THE PLATE WHERE READ"), **the English already renders the plate**; this file records each divergence
so the Latin converges on it when the patch pass lands. Do not edit `sources/pl/tei/9176.xml` or
`data/tei-patches/9176.json` from here; the orchestrator merges.

Every `find` below was checked with Python against `sources/pl/tei/9176.xml` and matches **exactly
once** (`\n` = a literal newline in the XML).

Plate: archive.org `patrologiaecurs113unkngoog`, leaves n191–n196, printed corner numbers read FIRST
on every leaf (n191 = 309/310, n192 = 311/312, n193 = 313/314, n194 = 315/316, n195 = 317/318,
n196 = 319/320; the `leaf = (col + 73) / 2` map held on all six). ⚠ On n192, n194 and n196 the
archive image **clips the right-hand ~20% of the right column** (cols 312, 316, 320); those columns
were read in full on the second witness, Google Books Princeton `YkVOAAAAYAAJ` (`pg=PA<odd col>`,
575 px, word-level only per `PL122-WITNESSES.md`), and on the archive for the unclipped part.

Opened by: stint 0004–0006, 2026-09-16.

---

## 0309D — missing full stop after the lemma

- **Twin:** `alia die videt Joannes Jesum venientem ad se</hi> \nAlia, inquit`
- **Plate (n191, left col, foot):** `alia die videt Joannes Jesum venientem ad se. Alia, inquit` — the stop is printed.
- **English:** "…coming to him. On another day, he says,"
- **Proposed patch:** find `venientem ad se</hi> \nAlia, inquit` → replace `venientem ad se.</hi> \nAlia, inquit`

## 0310B — `;` for `,`

- **Twin:** `immolatus est; ideoque sequitur`
- **Plate (n191, right col):** `immolatus est, ideoque sequitur`
- **English:** "sacrificed for the whole world, and therefore there follows:"
- **Proposed patch:** find `immolatus est; ideoque sequitur` → replace `immolatus est, ideoque sequitur`

## 0310D — `vivificatur` for `vivificantur` (word-level; 1 Cor 15:22)

- **Twin:** `ita in Christo omnes vivificatur » ,` (a singular verb against *omnes*)
- **Plate (n191, right col, lower third):** `ita in Christo omnes vivificantur » ,` — clean, the *n* plainly set.
- **English:** "so in Christ all are made alive" (unchanged either way; no marker was ever warranted on our side).
- **Proposed patch:** find `ita in Christo omnes vivificatur` → replace `ita in Christo omnes vivificantur`

## 0314D — the twin adds a full stop the plate does not print

- **Twin:** `nisi fuerit Deus cum eo » .</p>`
- **Plate (n193, right col, above the apparatus rule):** `nisi fuerit Deus cum eo »` with **no stop**. Confirmed on the second witness (Princeton PA313, same line, no stop).
- **English:** the quotation closes with no terminal stop (Pattern 8).
- **Proposed patch:** find `nisi fuerit Deus cum eo » .</p>` → replace `nisi fuerit Deus cum eo »</p>`

## 0316B — `nis` for `nisi` (word-level)

- **Twin:** `Amen, amen dico tibi, nis quis\nnatus fuerit ex aqua et spiritu`
- **Plate:** the archive image clips the line end on n194; **Princeton PA315 prints `nisi quis` cleanly** (right col, line 1 of the lemma, `dico tibi, nisi quis`). One witness because the archive copy is physically clipped, but the divergence is a whole word-form at the resolution the witness brief licenses.
- **English:** "unless a man be born" (the English renders *nisi*; no `[sic:]` could have been fired on the twin's *nis* under the PL 122 single-letter rule in any case).
- **Proposed patch:** find `dico tibi, nis quis` → replace `dico tibi, nisi quis`

## 0318B — missing full stop

- **Twin:** `in qua redolent divina mysteria\nAc per hoc reprehenditur`
- **Plate (n195, right col):** `in qua redolent divina myste-|ria. Ac per hoc reprehenditur`
- **English:** "…breathe their fragrance. And through this…"
- **Proposed patch:** find `redolent divina mysteria\nAc per hoc` → replace `redolent divina mysteria.\nAc per hoc`

## 0318D — `erga` for `ergo` (word-level)

- **Twin:** `Inspice\nerga vim verborum`
- **Plate (n195, right col):** `In-|spice ergo vim verborum` — clean.
- **English:** "Consider therefore the force of the words"
- **Proposed patch:** find `Inspice\nerga vim verborum` → replace `Inspice\nergo vim verborum`

## ⛔ WITHDRAWN (E11, re-adjudicated 2026-09-16) — 0318D — lemma punctuation, John 3:12

The twin's comma after *creditis* is the reading that construes (*and you believe not: how, if…*);
the plate without it does not. Under E11 no patch goes toward the printing that doesn't construe, and the
English now follows the twin.


- **Twin:** `<hi>dicebam\nvobis, et non creditis, quomodo, si dicam vobis caeles…`
- **Plate (n195, right col, foot):** `dicebam, vobis, et non creditis quomodo, si dicam vobis cae-|lestia, credetis?` — **no comma after *creditis***. A mark after *dicebam* is also visible but faint and may be a speck; it is **not** proposed.
- **English:** "*I was telling you, and you believe not how, if I shall tell you heavenly things, will you believe?*" (crux filed).
- **Proposed patch:** find `et non creditis, quomodo, si dicam` → replace `et non creditis quomodo, si dicam`

---

## Checked and NOT patched

- **0316A `[re] nasci`** — the plate prints `[re]nasci` (no space) with Floss's *variae lectiones* key ¹ after it, and the note reads *Corr., co?. nasci*: the brackets are Floss's own supplement, printed. The twin's space is a spacing artifact only; no word changes. Optional cosmetic patch `[re] nasci` → `[re]nasci`, not proposed.
- **0314D `Hierosolomis`** — printed so on the plate (n193). Floss's text; not ours.
- **0319D `quonium`** — printed so on the plate (n196, left col; archive). Single letter: no `[sic:]` in this tome; crux only.
- **0318D opening guillemet before *Sermo, quem locutus sum*** — the plate sets an inverted sort (`»` in the opening position). The twin normalizes to `«`. Recorded as a typographic fact in the cruces; not patched (a mark of the same count, and the page builder expects `«` to open).
