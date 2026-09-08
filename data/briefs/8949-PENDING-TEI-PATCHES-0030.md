# 8949 *Liber Exodus* — pending TEI patches, chunks 0030–0034 (bands 0262B–0276B)

Sites where this stint opened the column at the plate and Migne's type differs from our Corpus
Corporum twin. Per the locked rule (`translation-style.md`, "What the English translates — THE
PLATE WHERE READ"), **the English already renders the plate**; this file records the divergence so
the Latin converges on it when the patch pass lands.

Do not edit `sources/pl/tei/8949.xml` or `data/tei-patches/8949.json` from here — the orchestrator
merges. Format: one entry per site; `find` must match exactly once in the source XML (each was
checked with a literal search: all five match once).

⭐ **Five sites, and all five are OURS. This stint fired ZERO `[sic:]`.** Two are broken type our
twin invented and the plate does not carry; **three are HEBREW WORDS MIGNE PRINTS THAT THE HEBREW
RECOVERY PASS MISSED.** That third class is the important one: the lemma brief states that "six
words at 0183B, 0193A, 0219A, 0266A (two) and 0296A" were read at the plate and restored before
chunking. **The Hebrew layer of this book is not complete** — there are at least three more, and
in one case the missing word is the whole point of the gloss it stands in.

⚑ **How they were found, and it generalises:** Corpus Corporum drops the Hebrew but **leaves the
whitespace behind**. Every one of the three sites below shows as a run of two or three spaces in
the XML immediately after the Latin transliteration (`thisri,   Macedones`, `cherub,</hi>   plurali`,
`cherubim</hi>   dicitur`). That is a cheap greppable signature and it should be run over the whole
book before this work ships.

---

## 0262D — `singulos a mos` in our twin, **`singulos annos`** on the plate

- **Opened by:** stint 0030–0034, 2026-09-08
- **Plate:** archive `patrologiaecurs04migngoog` **p. 136** (printed corners 261/262, read first) and
  Gallica `bpt6k5505319w` leaf **f131** (same corners). Read at 3.2×, then at 9× and 18× on the word.
- **Our twin prints:** `<hi>Tribus vicibus per singulos a mos,</hi>`
- **The plate prints:** `Tribus vicibus per singulos annos,`
- **Evidence:** the archive copy sets `annos` with normal spacing and no break. The Gallica copy
  shows the **same five letters** — at 18× the run after the gap is four distinct strokes, `n n`,
  not an `m` — with an abnormally wide space after the initial `a`, i.e. a loose sort in that
  impression. So the two copies agree on Migne's letters and differ only on one copy's spacing;
  our twin is wrong about **both** the space and the letters. Migne's own correct `annos` prints
  six lines below in the second lemma of the same verse.
- ⛔ **This was the range's one `[sic:]` candidate and it was WITHDRAWN at the plate.** Firing it
  would have accused Migne of a word-division defect that only one photograph shows and that our
  twin misread anyway. Same shape as the four withdrawals of stint 0005–0009.
- **English as shipped** (`src/english/8949/0030.md`): "*Three times in every year,* etc."
- **Proposed patch:** `find` `<hi>Tribus vicibus per singulos a mos,</hi>` →
  `replace` `<hi>Tribus vicibus per singulos annos,</hi>`
- **Note:** no marker counts, anchors, chunk boundaries or `noteCount` affected. ⚠ The lemma
  inventory `data/briefs/8949-lemmata-0030.txt` lists this span twice — once as
  `⚠ NOT in Clementine verbatim` and once, correctly, as `✓ Ex 23:14`. After the patch the two
  entries become the same span; the total of 266 is unchanged.

---

## 0265D — `Tabarnac.` in our twin, **`Tabernac.`** on the plate

- **Opened by:** stint 0030–0034, 2026-09-08
- **Plate:** archive **p. 138** (printed corners 265/266, read first) and Gallica leaf **f133**
  (same corners). Read at 4×.
- **Our twin prints:** `<hi>(BED., lib. I de` … `Tabarnac., cap. 11, tom. II.)</hi>`
- **The plate prints:** `(BED., lib. I de Tabernac., cap. 11, tom. II.)`
- **Evidence:** both copies print `Tabernac.` cleanly. `Tabarnac.` is not a word, and the same
  citation is spelled `Tabernac.` correctly at 0266A, 0271D and 0275A in our own twin. This is the
  digitization's, not Migne's — no `[sic:]`.
- **English as shipped** (`src/english/8949/0031.md`): the citation is carried verbatim as the
  plate prints it, `*(BED., lib. I de [0265D] Tabernac., cap. 11, tom. II.)*`.
- **Proposed patch:** `find` `Tabarnac., cap. 11, tom. II.` → `replace` `Tabernac., cap. 11, tom. II.`
- **Note:** the `<pb n="0265D"/>` anchor falls inside this citation, between `de` and `Tabernac.`;
  the patch string is entirely after the anchor, so nothing moves.

---

## 0263B — **HEBREW DROPPED: `תשרי`** after `vocabulo thisri,`

- **Opened by:** stint 0030–0034, 2026-09-08
- **Plate:** archive **p. 137** and Gallica leaf **f132**, printed
  corners **263 / 264** read FIRST on both. Read at 5–6× on the archive and at 12–14× on Gallica.
- **Our twin prints:** `vocabulo\nthisri,   Macedones <foreign xml:lang="greek">ὑπερβεραῖον</foreign> vocant.`
- **The plate prints:** `vocabulo thisri, תשרי Macedones ὑπερβεραῖον vocant.`
- **Evidence:** both copies carry four Hebrew letters between the Latin transliteration and
  `Macedones`, and our twin has left the gap where they stood. Read right to left: **tav – shin –
  resh – yod**, ת-ש-ר-י, which is Tishri, the month Rabanus is naming; **Migne's own printed
  transliteration `thisri` is the on-plate control and agrees**, as does the Masoretic תִּשְׁרֵי.
- ⚠ **VOCALISATION LEFT OPEN, DELIBERATELY.** Unlike the two `cherub` words below, this word appears
  to carry at least one sub-letter point on **both** copies, and neither resolves at the maximum
  resolution either offers. Per the standing rule ("never guess — an illegible reading is recorded
  as illegible") the **consonantal** form is what is carried into the English and proposed here,
  and the vocalisation is flagged for whoever owns `data/hebrew-patches/8949.json`. This is the
  same open question the book-title patch records for its shin-dot; **do not close it from this
  entry.**
- **English as shipped** (`src/english/8949/0030.md`): "…which the Hebrews call by the Chaldee
  word thisri, תשרי, and the Macedonians ὑπερβεραῖον."
- **Proposed patch:** `find` `thisri,   Macedones` →
  `replace` `thisri, <foreign xml:lang="hebrew">תשרי</foreign> Macedones`
- **Note:** adds one `<foreign>` element; no marker counts, anchors or `noteCount` affected.

---

## 0267D — **HEBREW DROPPED: `כרוב`** after `cherub,`

- **Opened by:** stint 0030–0034, 2026-09-08
- **Plate:** archive **p. 139** and Gallica leaf **f134**, printed corners **267 / 268** read FIRST
  on both. Read at 5× on the archive and 3.4× on Gallica; both legible without further zoom.
- **Our twin prints:** `Numero singulari <hi>cherub,</hi>   plurali`
- **The plate prints:** `Numero singulari cherub, כרוב plurali`
- **Evidence:** both copies print it, **unpointed**, exactly as the brief says Migne sets his
  Hebrew in this book. Letters right to left: kaf – resh – vav – bet, matching MT כְּרוּב. Migne's
  own italic `cherub` beside it is the on-plate control.
- ⭐ **This loss is not cosmetic.** Bede's gloss here IS about the singular and the plural forms of
  the word; with the Hebrew dropped, the sentence says only that one form is singular and the other
  plural, which is the one thing an English reader could already see. The evidence had been removed
  from the argument it exists to support.
- **English as shipped** (`src/english/8949/0032.md`): "In the singular number it is called
  *cherub,* כרוב but in the plural *cherubim,* כרובים etc."
- **Proposed patch:** `find` `<hi>cherub,</hi>   plurali` →
  `replace` `<hi>cherub,</hi> <foreign xml:lang="hebrew">כרוב</foreign> plurali`

---

## 0267D — **HEBREW DROPPED: `כרובים`** after `cherubim`

- **Opened by:** stint 0030–0034, 2026-09-08
- **Plate:** as the entry above — archive **p. 139**, Gallica leaf **f134**, corners 267/268.
- **Our twin prints:** `autem <hi>cherubim</hi>   dicitur, etc.,`
- **The plate prints:** `autem cherubim כרובים dicitur, etc.,`
- **Evidence:** both copies print it, unpointed. Letters right to left: kaf – resh – vav – bet –
  yod – final mem, matching MT כְּרוּבִים; the plural ending is the whole point Bede is making, and
  it is visible in the type.
- **Proposed patch:** `find` `<hi>cherubim</hi>   dicitur, etc.,` →
  `replace` `<hi>cherubim</hi> <foreign xml:lang="hebrew">כרובים</foreign> dicitur, etc.,`
- **Note:** the two `cherub` patches must be applied as a pair; each `find` matches once.

---

## Checked and NOT patched — our twin is right, the ARCHIVE COPY is wrong

Recorded because the same nine sites will look like defects to the next reader who opens the
archive copy alone. Each was refuted by Gallica at the sites named in
`data/briefs/8949-PLATE-READS-0030.json`:

| column | archive copy prints | Gallica + our twin | would have been |
|---|---|---|---|
| 0263B | `seculo curantes` | `sedulo curantes` | a `[sic:]` on a non-construing phrase |
| 0263B | `amplus tuba canunt` | `amplius tuba canunt` | a `[sic:]` |
| 0263C | `Ecce ergo mittam angelum` | `Ecce ego mittam angelum` | **a false `[var:]` against Ex 23:20** |
| 0263D | `invidita` | `invidia` | a `[sic:]` on a non-word |
| 0268A | `labium , etc.` | `labium., etc.` | a patch removing pointing Migne prints |
| 0269D | `Omnes opus candelabri` | `Omne opus candelabri` | a `[sic:]` on a number disagreement |
| 0271B | `Fecit et quinquaginta circulos` | `Facies et quinquaginta circulos` | **a false `[var:]` against Ex 26:6** |
| 0272A | `VERS. 6.` | `VERS. 9.` | a false claim about Migne's numbering |
| 0274B | `(Marc. XLVI)` | `(Marc. XVI)` | a `[sic:]` on an impossible chapter number |

⛔ **The measured ratio on this quire is nine to two against the archive copy** (it confirmed
Gallica at only two of the eleven sites tested). `PL113-WITNESS-ENCODING.md`'s rule that the
archive may never be a sole witness for a letter, digit or point holds here with unusual force,
and its jbig2 substitutions here are all well-formed words that construe.
