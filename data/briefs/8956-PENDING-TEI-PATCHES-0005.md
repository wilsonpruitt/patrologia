# 8956 — pending TEI patches, stint 0005–0009 (cols 1243A–1255D)

Filed under the locked rule *"What the English translates — THE PLATE WHERE READ"*
(`translation-style.md`). Both sites below were read at the plate; the Latin twin must
converge on Migne when the patch pass runs.

Witness: **Gallica `ark:/12148/bpt6k5505319w`**, leaf `f = (column + 1) / 2`, calibrated on
f622 against its printed top corners (1243 / 1244) before any collation was done. The
archive.org copy (`patrologiaecurs04migngoog`) was not needed: neither site turns on an
ambiguous letter.

---

## 1. col 1245D — an extra syllable in our file: `auctoritatatem` → `auctoritatem`

- **Our TEI (`src/latin/8956/0006.md`):** `sed Achaz ita respondit, tanquam auctoritatatem habens`
- **The plate (Gallica f623, left column):** `sed Achaz ita respondit, tanquam auctoritatem habens`
- **Class:** ours, and the plate settles it — `auctoritatatem` is not a word, and the plate
  prints the ordinary accusative cleanly, with normal spacing either side.
- **English as shipped:** "but Achaz answered thus, as having authority".
- **Patch:** `auctoritatatem` → `auctoritatem`.

## 2. col 1248D — Hebrew type the plate carries and our source dropped: `(דבר)`

- **Our TEI (`src/latin/8956/0007.md`):** `Verbum Hebraicum *Dabar,* etc.`
- **The plate (Gallica f624, right column):** `Verbum Hebraicum (דבר) *Dabar*, etc.`
- **Reading:** three letters, **unpointed** — dalet, bet, resh — read on a 4× native crop of
  the parenthesis. Migne's own transliteration *Dabar* and the Masoretic דָּבָר both agree, so
  the consonants are not in doubt; the absence of points is a fact about this printing and is
  recorded as such.
- **Class:** ours. This is the standard Corpus Corporum scar described in `hebrew-recovery.md`
  — the transliteration survives, the Hebrew type does not.
- **English as shipped:** the Hebrew is **not** inserted into the English chunk. The recipe in
  `hebrew-recovery.md` step 6 patches *both* twins in one commit, so that the two sides stay
  identical and `verify-english` parity holds; a translating stint cannot edit the Latin, and
  inserting the glyphs on one side only would break that. The English therefore mirrors the
  twin as it stands, and this entry is the record.
- **Patch:** insert `(דבר)` between `Hebraicum` and `*Dabar,*` in the Latin chunk, and the same
  string at the same point in `src/english/8956/0007.md`, in one commit. Provenance belongs in
  `data/hebrew-patches/8956.json`: column 1248D, Is 9:8, folio Gallica f624, unpointed, MT-verified.
