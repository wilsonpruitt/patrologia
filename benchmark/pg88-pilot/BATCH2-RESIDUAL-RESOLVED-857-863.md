# Batch 2 residual — Opus adjudication, leaves 857–863

Adjudicated 2026-08-05 against **native-resolution plates re-extracted from the
source PDF**, not the supplied segment PNGs.

> ⚠ **Method note, and it matters.** `raw/pg088/batch2-pages/segs/*.png` are
> 3399–3404 px wide. The page images inside `raw/pg088/088.pdf` are **4032 ×
> 6214** (JBIG2, 1-bit, 600 dpi). The segs are therefore a ~0.84× downsample of
> the plate, *not* "the scan's native 600 dpi." Every reading below was taken
> from `pdfimages -f <page> -l <page> -png 088.pdf`, cropped with PIL. Several
> calls in this batch were decidable at 4032 px and **not** decidable at 3400 px.
> Re-render the segs at native width before the next batch.

Leaf N ⇒ pdf page N+1. Greek side alternates: 857 R, 858 L, 859 R, 860 L,
861 R, 862 L, 863 R.

---

## Encoding-class items (leaves 857–860): ruled, not plate questions

The governing prompt already settles both classes; neither needs the plate, and
neither should have entered the queue.

- **Elision apostrophe** — `PG-OCR-PROMPT.md` fixes `’` (U+2019) as a
  normalisation: "Never treat an apostrophe difference as a plate question."
  Applies to every `A=x᾽ B=x'` row on leaves 857, 858, 859, 860 (μετ᾽/μετ’,
  ἀλλ᾽/ἀλλ’, ἔσθ᾽/ἔσθ’, δι᾽/δι’, ἀπ᾽/ἀπ’, παρ᾽/παρ’, μεθ᾽/μεθ’). **Rule: write
  `’` U+2019 everywhere.** No FIND/REPLACE listed per instance.
- **Numeral sign** — `A=Γ΄. B=Γʹ.` / `Δ΄./Δʹ.` / `Α΄./Αʹ.` / `Β΄./Βʹ.`. The
  plate prints one short tick after the letter; ΄ (U+0384 GREEK TONOS) and ʹ
  (U+0374 GREEK NUMERAL SIGN) are visually identical in this fount at any
  magnification, so this is a codepoint decision, not a reading. **Rule: use
  `ʹ` U+0374**, which is the character that actually means "numeral." Verified
  on p859 that the printed form is a single tick, not a digraph or a double
  prime — that is the only part of it the plate can answer.

The same reasoning covers leaf863's `ἀββᾷ → ἀββᾷ` row (below): A and B are the
same string, so the row is a normalisation artifact.

---

## leaf857

- item: `✗ REFUSED leaf857  "οὗ" → "ᾗ" — 2 matches in body`
  FIND: `ἕως οὗ ἐν τῇ ὁδῷ`
  REPLACE: `ἕως ᾗ ἐν τῇ ὁδῷ`
  WHERE: seg2 / p858 right column, line 13 — `Ἴσθι / εὐνοῶν τῷ ἀντιδίκῳ σου, ἕως ᾗ ἐν τῇ ὁδῷ μετ’ / αὐτοῦ.` (Do **not** touch the other `οὗ`, four lines down in `ἕως οὗ ἀποδῷς τὸν ἔσχατον κο-`; see next item.)
  WHY: at 4032 px the disputed glyph is **one narrow letter**, not two. Its body matches the `ῇ` of `τῇ ὁδῷ` four glyphs to its right on the same line — same bowl-left/stem-right form, same iota subscript below the baseline. Its overhead mark is ~2× the width of that `ῇ`'s bare perispomeni, i.e. a **combined breathing + circumflex**, matching the merged mark on `ὗ` elsewhere on the page. **CRUX — breathing not separable:** at this ink weight the breathing has flowed into the circumflex and into the stem, so dasia (`ᾗ`) vs psili (`ᾖ`) cannot be read off the plate. Migne's facing Latin (`dum es in via cum illo`, 2nd person) matches **neither** and so does not arbitrate. `ᾗ` is recorded because it was the adjudicated verdict and the mark's bulk is consistent with it; a scholar wanting `ᾖ` has as much plate warrant. Flag it in the apparatus rather than resolving it silently.

- item: `✗ REFUSED leaf857  "οὗ" → "ᾗ"` — disambiguation of the second match
  FIND: `ἕως οὗ ἀποδῷς τὸν ἔσχατον κο-`
  REPLACE: (no change)
  WHERE: seg2/seg3, four lines below the item above, section [B].
  WHY: at native resolution this one is unambiguously **two letters** — a clean omicron followed by upsilon under a circumflex. It is a real `οὗ` and must not be swept up by the replacement above.

- item: **NOT IN THE RESIDUAL LIST — full-width Greek lost on leaf857** (same defect class flagged for leaf861)
  FIND: `καλὸν καὶ εἰς τὸ κακὸν, καὶ δεικνύει ἡμῖν τί ποιῆσαι
καὶ ἐν τῷ μέλλοντι αἰῶνι· διὰ τοῦτο λέγει, Μή ποτέ σε`
  REPLACE: `καλὸν καὶ εἰς τὸ κακὸν, καὶ δεικνύει ἡμῖν τί ποιῆσαι
καὶ τί μὴ ποιῆσαι. Καὶ αὕτη πάλιν κατηγορεῖ ἡμῖν καὶ ἐν τῷ μέλλοντι αἰῶνι· διὰ τοῦτο λέγει, Μή ποτέ σε
παραδῷ τῷ κριτῇ· καὶ τὰ ἑξῆς.`
  WHERE: p858, immediately below the Latin paragraph ending `judici, et quæ sequuntur.` — two lines set **across the whole page**, gutter included, at native y≈2245–2390.
  WHY: leaf857 has the same full-width setting as leaf861 and nobody looked. The surviving right-hand half (`καὶ ἐν τῷ μέλλοντι αἰῶνι· …`) reads as fluent Greek, which is exactly why it passed every check. Two things were lost: the clause `καὶ τί μὴ ποιῆσαι. Καὶ αὕτη πάλιν κατηγορεῖ ἡμῖν` and the entire following line `παραδῷ τῷ κριτῇ· καὶ τὰ ἑξῆς.` Migne's Latin on the same page confirms both — `Nec desinet etiam in futuro nos sæculo accusare. Hinc ait: Ne tradat te judici, et quæ sequuntur.` **Recommend re-scanning every leaf in this batch for full-width setting, not just 861.**

---

## leaf858

- item: `✗ REFUSED leaf858  "αὐτὸν," → "αὐτὸν, οὐδ' ἐνιδήποτε" — 2 matches`
  FIND: `δησιν αὐτοῦ καταπονῆσαι αὐτὸν, οὐδ' ἐνιδήποτε`
  REPLACE: (no change)
  WHERE: seg2 / p859 left column, section [B], `Οἱ δὲ Πατέρες λέγουσιν ὅτι οὐκ ὀφείλει ὁ μοναχὸς ἐᾶσαι ποτὲ τὴν συνείδησιν αὐτοῦ καταπονῆσαι αὐτὸν, οὐδ’ ἐνιδήποτε / πράγματι.`
  WHY: `batch2-final/leaf858.txt` already carries the full string; the splice refused only because the anchor `αὐτὸν,` is not unique. Verified letter-by-letter at 10×: `ἐ-ν-ι-δ-ή-π-ο-τ-ε`, one run-on word, plain iota — **not** `ἐν ᾧ δήποτε`, which is what the sense and Migne's Latin (`ne una quidem re minima`) would want. **CRUX: the misprint stands.** Keep the transcriber's UNCERTAIN note.

- item: `↯ MANUAL leaf858 [NEITHER] - A=ἔσθ' B=ἔσθ᾽` and the ×4 row (`Δ΄./Δʹ.` · `Α΄./Αʹ.` · `δι'` · `ἀλλ',`)
  REPLACE: see **Encoding-class items** above. No plate question.

- item: **correction to leaf858's LATIN-EXCLUDED note** (not a residual row, but the note is wrong)
  WHERE: `leaf858.txt` LATIN-EXCLUDED entry.
  WHY: the note calls it "three lines of Latin sitting directly in the Greek column … Migne's column-balancing Latin bleed (layout rule 4)." On the plate it is the **mirror case, layout rule 3**: the Greek finished early and the *Latin* runs the full width of the page, across the gutter, between the end of Doctrina III and the `ΔΙΔΑΣΚΑΛΙΑ Δʹ.` head. Exclusion was right; the classification was not, and it matters because rule 3 and rule 4 have different downstream consequences.

---

## leaf859 · leaf860

- items: `↯ MANUAL leaf859 [NEITHER] … (encoding) ×4` twice; `↯ MANUAL leaf860 [NEITHER] - A=ἀπ' B=ἀπ᾽ · A=δι' B=δι᾽ (encoding) ×2`
  REPLACE: see **Encoding-class items** above.
  WHY: eight apostrophes and two numeral signs. None is a plate question under the governing prompt. No further work done on these leaves, and none is warranted.

---

## leaf861

All five residual rows on this leaf are fragments of **the two full-width
passages**, plus one splice-contamination bug. Treat them as two whole-line
questions, per the brief. Both passages verified across the gutter on p862.

- item: `↯ MANUAL leaf861 ONLY IN A: ύθως → NEITHER` · `↯ MANUAL leaf861 ONLY IN A: ς → NEITHER` · `✗ REFUSED leaf861 "ς" → "δρομαίως" — 61 matches` — **all three are this one passage**
  FIND: `σικῶς λοιπὸν ἐνεργεῖ τὸ ἀγαθόν, ὁδηγούμενος both printed
⟨?⟩ύθως ἐπιφέρει τὸ, Ζήτησον εἰρήνην καὶ δίωξον αὐ-
⟨?⟩ς καταδίωξον, ἵνα καταλάβῃς αὐτήν.`
  REPLACE: `σικῶς λοιπὸν ἐνεργεῖ τὸ ἀγαθόν, ὁδηγούμενος ὑπὸ
τῶν ἁγίων. Ταῦτα εἰπὼν πάνυ καλῶς καὶ ἀκολούθως ἐπιφέρει τὸ, Ζήτησον εἰρήνην καὶ δίωξον αὐ-
τήν· καὶ οὐκ εἶπεν, ζήτησον, μόνον, ἀλλὰ δρομαίως καταδίωξον, ἵνα καταλάβῃς αὐτήν.`
  WHERE: p862, directly under the Latin paragraph ending `insectare, ut comprehendas eam.` (native y≈1430–1590). Line 1 begins at the far-left page margin with `τῶν ἁγίων.` and runs unbroken to `δίωξον αὐ-` at the right page edge.
  WHY: the column crop cut both lines at the gutter and kept only the right-hand half, so `ἀκολούθως` survived as `ύθως` and `καταδίωξον` lost `δρομαίως` in front of it. `ζήτησον, μόνον,` is set in **italic** (it is the lemma being quoted back); `Ζήτησον εἰρήνην καὶ δίωξον αὐτήν` likewise. Latin on the same page confirms the recovered half: `Nec inquire tantum dixit, sed et acrius insectare, ut comprehendas eam.` Also note the line above: the column's last line ends `ὁδηγούμενος ὑπὸ` — verified at 5×.
  ⚠ **`both printed` in the current line 12 is not Greek and not a reading — it is English prose from an adjudication note that a splice pass wrote into the body text.** Whatever produced it can do so elsewhere; grep the whole corpus for Latin-script runs inside Greek lines before shipping.

- item: `✗ REFUSED leaf861 "οῦ" → "τοῦ" — 49 matches` — the second full-width passage
  FIND: `⟨?⟩μαθεῖν ἄρτι, καὶ τὸ πῶς ἔρχεται ὁ φόβος τοῦ Θεοῦ, θέ-
⟨?⟩οῦ φόβου τοῦ Θεοῦ.`
  REPLACE: `ἔρχεται διὰ τοῦ φόβου τοῦ Θεοῦ. Θέλομεν λοιπὸν μαθεῖν ἄρτι, καὶ τὸ πῶς ἔρχεται ὁ φόβος τοῦ Θεοῦ, θέ-
λομεν εἰπεῖν τί ἐστιν τὰ ἀφορίζοντα ἡμᾶς ἀπὸ τοῦ φόβου τοῦ Θεοῦ.`
  WHERE: p862, two full-width lines immediately above the Latin head `V. Affirmaverunt Patres…` and the Greek head `Εʹ.` (native y≈4400–4530). Line 1 begins at the far-left margin with `ἔρχεται διὰ τοῦ φόβου`.
  WHY: same cut. The `"οῦ" → "τοῦ"` verdict was a fragment of `ἀπὸ τοῦ φόβου τοῦ Θεοῦ` at the start of line 2, and the transcriber's `⟨?⟩` gaps are where the left half was guillotined — the plate is undamaged there. Latin on the same page: `Unde quis fugiat, quove perveniat ob timorem Dei? Restat igitur nunc dicere, quomodo adveniat nobis divinus hic timor, quæque ea sint quæ nos ab hoc timore disterminant.`

- item: `✗ REFUSED leaf861 "τὴν" → "τὸν" — 11 matches`
  FIND: `τὴν τέλειον φόβον ὁ τοιοῦτος γνωρίζει`
  REPLACE: `τὸν τέλειον φόβον ὁ τοιοῦτος γνωρίζει`
  WHERE: p862 right column, section [D] area — `Τότε καὶ / τὸν τέλειον φόβον ὁ τοιοῦτος γνωρίζει, καθὼς πολλά- / κις εἴπομεν.`
  WHERE-uniqueness: the eleven-way ambiguity is resolved by taking the whole phrase through `γνωρίζει`.
  WHY: read at 5×; the second letter is a round bowl with a grave — omicron, not eta. Earlier verdict **confirmed**.

- item: **stray `ς` at head of the `καταλάβῃ` line** (the `ONLY IN A: ς` row, per the residual = "clipped fragment of τελείας, seg3 line 2")
  FIND: `ς καταλάβῃ αὐτήν, ἵνα τελείως κτήσεται αὐτήν, ἵνα`
  REPLACE: `καταλάβῃ αὐτήν, ἵνα τελείως κτήσεται αὐτήν, ἵνα`
  WHERE: p862 right column, section [C]; previous line ends `…καὶ τρέχει καταδιώκων· τελείας`.
  WHY: verified that the printed line starts flush at the column's left margin with `καταλάβῃ` — same left edge as `χαρὰ` two lines up, no indent, nothing dropped. The leading `ς` is a duplicated tail of `τελείας` from the line above, not text. **Delete it.**

---

## leaf862

- item: `↯ MANUAL leaf862 [?] - ONLY IN A: [LATIN, mid-column, excluded] (7 tokens) → A — correct, and materially important`
  REPLACE: (no change) — A's exclusion stands; keep the placeholder line and the LATIN-EXCLUDED note.
  WHERE: p863 (Greek is the **left** column here), between `…τὸν πλησίον βλάπτειν.` and the head `Ζʹ.`
  WHY: verified on the full page. The Latin is **not** a mid-column bleed (layout rule 4) — it is the mirror case, **rule 3**: the Greek ran out first and Migne set the Latin's last sentence across the full page width, gutter included: `…trahit : qua malitia nulla gravior est aut perniciosior, ut scilicet non tibi solum, sed et proximo nocere appetas.` What sits inside the Greek column is the left-hand half of that full-width line, which is why it looked like a bleed. Excluding it was right; the note's rule citation should be corrected to rule 3, and the note should record that the run is full-width so a future pass does not go hunting for the "missing" Greek there.

---

## leaf863

- item: `↯ MANUAL leaf863 [NEITHER] - ONLY IN A: νομίαν → NEITHER — not on the plate`
  FIND: `εἰπὲ τῷ ἐπιστάτῃ αὐτοῦ, ἢ τῷ ἀββᾷ πρὸς τὴν μιν
νομίαν τοῦ σφάλματος, καὶ ἀμερίμνει· ἀλλ', ὡς εἴπο-`
  REPLACE: `εἰπὲ τῷ ἐπιστάτῃ αὐτοῦ, ἢ τῷ ἀββᾷ πρὸς τὴν δύνα-
μιν τοῦ σφάλματος, καὶ ἀμερίμνει· ἀλλ’, ὡς εἴπο-`
  WHERE: p864 right column, section [A], five lines above the [B] marker.
  WHY: verified at 3×: the line ends `πρὸς τὴν δύνα-` and the next begins `μιν τοῦ σφάλματος`. Earlier verdict **confirmed** — A's `οἰκο-/νομίαν` was an invention. Migne's Latin on the facing column: `abbati pro peccati magnitudine`. Note the current text is doubly broken: it dropped `δύνα-` *and* left `μιν` stranded at the end of the wrong line.

- item: `↯ MANUAL leaf863 [NEITHER] - ONLY IN A: διόρ- and θωσιν → the word is on the plate but not hyphenated` **+** `↯ MANUAL leaf863 - A=διὰ B=σιν → READING: διὰ ὄρθω- / σιν` **+** `✗ REFUSED leaf863 "μοι" → "μου" — 2 matches` **+** `✗ REFUSED leaf863 "τις" → "τίς ποτε" — 9 matches` — **all four are these two lines**
  FIND: `ὅτι Ἡ μὲν συνείδησίς μου μαρτυρεῖ μοι ὅτι διὰ διόρ-
⟨?⟩θωσιν θέλω εἰπεῖν, ἀλλ' αἰσθάνομαι ὅτι ἔσωθέν τις`
  REPLACE: `ὅτι Ἡ μὲν συνείδησίς μου μαρτυρεῖ μου ὅτι διὰ ὄρθω-
σιν θέλω εἰπεῖν, ἀλλ’ αἰσθάνομαι ὅτι ἔσωθέν τίς ποτε`
  WHERE: p864 right column, the two lines straddling the [C] marker; next line is `λογισμὸς μεμιγμένος.`
  WHY: four findings on two lines, all verified at 3–14×.
  1. `μαρτυρεῖ **μου**` — plain omicron-upsilon, no iota. The `μοι` in the current text is wrong; earlier verdict **confirmed**.
  2. `διὰ **ὄρθω-**` — glyph compared at 14× against the δ of `διὰ` three glyphs earlier on the same line. The δ is a bowl with an attached stroke sweeping up-and-left into an open loop; the disputed glyph is a **closed ring with a separate blob resting above-left**, bridged by a hairline of ink. It is an omicron with a diacritic, not a delta. So the plate prints `διὰ ὄρθωσιν`, **not** `διόρθωσιν` — earlier verdict **confirmed**, and it is a genuine crux worth an apparatus note, since the sense plainly wants `διόρθωσιν` (and the plate prints exactly that, unhyphenated, eight lines later in `καὶ γενέσθαι διόρθωσιν`). **Sub-crux:** the mark above the omicron has the bulk of a *combined* breathing+accent (it matches the mark on `ὅτι` on the same line), so `ὄ` is recorded; psili vs dasia is not separable at this ink, same limitation as leaf857.
  3. The word is **not hyphenated as `διόρ-/θωσιν`** — the break falls after `ὄρθω-`, so the continuation line begins `σιν`, and the transcriber's `⟨?⟩` seam artifact goes away. Earlier verdict **confirmed**.
  4. `ἔσωθέν **τίς ποτε**` — read at 3×, unmistakably two words with an accented iota. The current `τις` is short by a whole word. Earlier verdict **confirmed**.

- item: `✗ REFUSED leaf863  "ἀββᾷ" → "ἀββᾷ" — 3 matches in body`
  REPLACE: (no change)
  WHERE: all three instances — `ἢ τῷ ἀββᾷ πρὸς τὴν δύνα-` [A], `ὄντως γὰρ αὐτῷ τῷ ἀββᾷ αὐτοῦ·` [B], `ἀναγγεῖλαι τῷ ἀββᾷ μετὰ τα-` [B/C].
  WHY: A and B are byte-identical, so the row is a codepoint-normalisation artifact, not a reading. Checked anyway, because this is precisely where the known 400-dpi failure mode lives (a circumflex misread as an iota subscript): at 12× the alpha in instance 1 carries **both** marks — a clear horizontal circumflex bar above *and* a detached subscript blob below the baseline. `ᾷ` is right. Instances 2 and 3 match. Normalise to precomposed `ᾷ` (U+1FB7).

- item: **NOT IN THE RESIDUAL LIST — dittography in the last line of leaf863**
  FIND: `αὐτοῦ. Ὄντως καλὸν, ἐάν ἐάν τις ποιῇ πρᾶγμα, καὶ`
  REPLACE: `αὐτοῦ. Ὄντως καλὸν, ἐάν τις ποιῇ πρᾶγμα, καὶ`
  WHERE: p864 right column, final line of the leaf.
  WHY: the plate prints one `ἐάν`. The doubled word is ours, not Migne's — a transcription defect, and the one class of error that a "misprint stands" policy will happily preserve forever if nobody looks.

---

## Unresolved

1. **leaf857 `ἕως ᾗ` — breathing.** dasia vs psili on the combined
   breathing+circumflex. *What would settle it:* a grayscale or higher-bit-depth
   scan. The PDF's page images are 1-bit JBIG2, so the ink has already been
   thresholded and the hook has merged into the circumflex — no amount of
   re-cropping this file will recover it. A different copy of PG 88 (a
   non-Google scan, or the Garnier reprint for comparison) would decide it.
2. **leaf863 `διὰ ὄρθω-` — breathing/accent shape**, same cause, same remedy.

Both are recorded in the text with the more likely form and should carry an
apparatus note. Neither blocks the leaf.
