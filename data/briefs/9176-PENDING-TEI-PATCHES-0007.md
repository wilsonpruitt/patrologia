# 9176 Eriugena, *Commentarius in Evangelium secundum Joannem*: pending TEI patches (stint 0007–0009, cols 0320C–0329B)

Sites where this translator read the column at the plate and the type differs from our Corpus
Corporum twin. Per the locked rule (`translation-style.md`, "What the English translates"), **the
English already renders the plate** at the sites proposed below; this file records the divergence
so the Latin converges on it when the patch pass lands. Do not edit `sources/pl/tei/9176.xml` or
`data/tei-patches/9176.json` from here; the orchestrator merges.

Every `find` below was checked and matches **exactly once** in `sources/pl/tei/9176.xml`.

Opened by: stint 0007–0009, 2026-09-16. Working plate: archive.org
`patrologiaecurs113unkngoog/page/n<leaf>.jpg` (4309×6684), leaves n196–n201, printed corners read
FIRST on every leaf (n196=319/[320 clipped], n197=321/322, n198=323/[324 clipped], n199=325/326,
n200=327/[328 clipped], n201=329/330). Map `leaf = (odd column + 73)/2` held on all six.
Second witness: Google Books Princeton `YkVOAAAAYAAJ`, PA319/PA321/PA323/PA325/PA327 at zoom=3
(575 px), corners read on PA319 (319/320), PA321 (321/322), PA327 (327/328).

⚠ **The archive copy CLIPS THE RIGHT COLUMN on n196, n198 and n200** (the page image ends ~3–8
characters short of the right margin of cols 320, 324, 328). Those columns' line-ends were
collated on the Princeton copy instead; see the plate-reads JSON.

⚑ **Re-adjudicated under E11, 2026-09-16:** all three proposals STAND, since the plate is the reading that construes
at each. The three noted sites fit E11 as already handled: the English follows the TEI's *ei* (0326A)
and *desursum* (0327C; TEI checked, it prints *desursum*), and 0326D *cum* has no construing reading
printed at that site, so it stays literal.

---

## 0322C: our twin reads `demorabatur`, the plate reads `demoratur` — PROPOSED

- **Our twin prints:** `ibique demorabatur et purgat illud ab omnibus delictis`
- **The plate prints:** `ibique demoratur et purgat illud ab omnibus delictis`
- **Plate:** archive leaf **n197**, corners **321 / 322**, RIGHT column, band C, line 2 above
  *Et hoc est quod sequitur*. 0.8× crop of the line; the word is cleanly set, `demora-tur`, with no
  room for `ba`. (A stray raised mark stands before `et` on the plate; it is not a letter.)
- **Second witness:** Princeton `YkVOAAAAYAAJ` PA321, same line: `ibique demoratur [mark]et purgat`.
  Word-level divergence, two copies agree.
- **Why it matters:** the plate's present `demoratur` agrees with the present `purgat` beside it
  and with the moral sense (Christ *tarries* in any heart that confesses). The twin's imperfect
  has been pulled in from the lemma that follows (*Et illic demorabatur cum eis*).
- **English as written** (`src/english/9176/0007.md`): "and there he tarries and purges it from all
  offences."
- **Proposed patch:** `find` `ibique demorabatur et purgat` → `replace` `ibique demoratur et purgat`

## 0326D: our twin reads `gaudi,`, the plate reads `gaudio` — PROPOSED (one copy, letter-level)

- **Our twin prints:** `qui stat et audit cum, gaudi, [pb 0327A] gaudet propter vocem sponsi`
- **The plate prints:** `qui stat et audit cum, gaudio` | (col. 327 opens) `gaudet propter vocem sponsi`
- **Plate:** archive leaf **n199**, corners **325 / 326**, RIGHT column, last line above the
  *VARIAE LECTIONES* rule; 0.8× crop. `audio` clean, the `g` damaged but present; no comma after
  it. Col. 327's first line on n200 confirms `gaudet propter vocem sponsi`.
- **Second witness:** Princeton PA325 at the same line is too faint at 575 px to settle a letter.
  Not relied on.
- **Why it matters:** `gaudi,` is a non-word with a comma the plate does not print; the plate's
  `gaudio gaudet` is the lemma as quoted six lines earlier.
- **English as written** (`0009.md`): "rejoiceth with joy".
- **Proposed patch:** `find` `audit cum, gaudi,` → `replace` `audit cum, gaudio`
  ⚠ Single-letter-plus-punctuation site on one copy: under `PL122-WITNESSES.md` this cannot carry a
  `[sic:]` (none was fired), but it is a transcription question, not an accusation against the
  plate, so it is filed.

## 0329A: our twin reads `Filius Dei`, the plate reads `Filii Dei` — PROPOSED (one copy)

- **Our twin prints:** `quia non credit in nomine unigeniti Filius Dei »`
- **The plate prints:** `quia non credit in nomine unigeniti Filii Dei »`
- **Plate:** archive leaf **n201**, corners **329 / 330**, LEFT column, band A, line 4. Clean at
  0.5×: `Filii Dei ».`
- **Second witness:** not fetched (PA329); the reading is clean and grammatical, and it is the
  Vulgate's own form, so nothing turns on it in the English.
- **English as written** (`0009.md`): "the only-begotten Son of God" (identical under either reading).
- **Proposed patch:** `find` `unigeniti Filius Dei` → `replace` `unigeniti Filii Dei`

---

## Noted, NOT proposed (the plate shows something, but it is not safe to patch)

### 0326D `audit cum` — c/e undecidable on this copy

Our twin prints `qui stat et audit cum, gaudi,` (col. 326D). The archive plate shows `cum`, **but
the same copy renders `e` as `c` elsewhere**: at 0329A it prints `Qui credit in cum` where our twin
(correctly) has `eum`. Princeton PA325 is too small to decide. Floss's own text quotes the same
lemma as *Qui stat et audit eum* eleven lines earlier (0326D). No patch proposed on this evidence;
a higher-resolution witness (HathiTrust, per `PL122-WITNESSES.md`) would settle it. The English
renders the twin literally ("heareth with") and the crux asks for a human look.

### 0325A/0326A `nisi fuerit e` for `ei`

At the head of col. 326 the plate sets the lemma *Non potest homo accipere quicquam, nisi fuerit e*
with no visible `i`, on BOTH the archive copy (n199) and Princeton PA325. Our twin reads `ei`.
A single letter; possibly a dropped sort at the line end. Not proposed (patching the twin to a
non-word would record a probable defect as the text); crux only. English: "unless it be given him".

### 0327C `Qui de ursum venit` for `Qui desursum venit`

The lemma at 0327C (n200, left column, 1.3× crop) prints `Qui de ursum venit` with a gap where
the second `s` belongs. The gloss prints `desursum` cleanly two lines later. Single letter on one
copy (Princeton PA327's left column was not enlarged at this line). Not proposed; crux only.
English: "He that cometh from above".
