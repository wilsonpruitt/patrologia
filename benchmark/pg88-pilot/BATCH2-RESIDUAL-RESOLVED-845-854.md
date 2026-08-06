# Batch 2 residual — resolved against the 600 dpi plate, leaves 845–854

Read from `raw/pg088/batch2-pages/segs/leafNNN_pMMM_seg{1..8}.png` (whole pages,
native bitonal scan — the PNGs carry only 0/255, so 600 dpi is the ceiling; no
further thresholding is possible). FIND strings quote `raw/pg088/batch2-final/leafNNN.txt`
exactly as it currently stands, including its ASCII/U+1FBD apostrophes.

**Totals: 25 residual rows answered · 24 resolved · 1 UNRESOLVED · 3 earlier verdicts
corrected · 5 defects found that were on NO queue (marked ⊕).**

---

## Global: the "UNRESOLVED (convention)" apostrophe class is now decidable

`PG-OCR-PROMPT.md` already fixes the elision apostrophe as **`’` U+2019** and says
explicitly that it is a normalisation, never a plate question. Every residual row
marked *UNRESOLVED (convention)* is therefore **resolved by rule, not by the plate**:
replace the character, do not re-adjudicate it.

The corpus is currently in three states and **no leaf yet uses U+2019**:

| file | apostrophes present |
|---|---|
| leaf845, 846, 847, 853, 854 | ASCII `'` (U+0027) only |
| leaf849, 850 | `᾽` (U+1FBD) only |
| leaf851, 852 | mixed `᾽` and `'` |

**Action: one mechanical sweep `['᾽ʼ] → ’` over all of `batch2-final/`,
then stop diffing the class.** The per-leaf rows below record it for completeness only.

---

## leaf845  (p846, right col = 1632)

The four REFUSED rows are one defect: Migne sets four lines **across the full page**
here, and the narrow crop kept only their right-hand tails. I read all four straight
across the gutter.

- item: `✗ REFUSED leaf845 "ς" → "οὕτως" — 57 matches in body`
  FIND: `⟨?⟩ς ποιεῖν· ἀλλ' ὥσπερ ἀπεταξάμεθα τῷ κόσμῳ καὶ τοῖς`
  REPLACE: `τὴν προσπάθειαν ἡμῶν. Οὐκ ὀφείλομεν δὲ οὕτως ποιεῖν · ἀλλ' ὥσπερ ἀπεταξάμεθα τῷ κόσμῳ καὶ τοῖς`
  WHERE: seg4, first of four full-width lines; the line above (col measure) ends `εὐτελῶν πραγμάτων, καὶ μηδαμηνῶν, πληροῦμεν`.
  WHY: at 5× the mark after `οὕτω` is the fount's final sigma — a single connected curl with a tail, not the two separated dots of a semicolon. Migne spaces the raised point (`ποιεῖν ·`).
  ⚠ **`ἀπεταξάμεθα` stands.** BATCH2-VERDICTS-845-854 quoted this line with `ἀποταξάμεθα`; at 9× the letter after `ἀπ` is over-inked but retains **no round counter**, while every ο on the line (`κόσμῳ`, `ὥσπερ`, and `ἀποτάξασθαι` on the next line) keeps an open oval one. It is an ε with both counters filled. The transcription was already right; the verdict file's quotation was the slip.

- item: `✗ REFUSED leaf845 "ῇ" → "τῇ" — 3 matches in body`
  FIND: `⟨?⟩ῇ προσπαθείᾳ τῇ περὶ τὰς ὕλας ἀποτάξασθαι, καὶ`
  REPLACE: `πράγμασιν αὐτοῦ, οὕτως ὀφείλομεν καὶ αὐτῇ τῇ προσπαθείᾳ τῇ περὶ τὰς ὕλας ἀποτάξασθαι, καὶ`
  WHERE: seg4, second full-width line, immediately under the line above.
  WHY: read whole across the gutter. The surviving `ῇ` is the tail of `αὐτῇ τ|ῇ`; both circumflex-plus-subscript are clean at this size.

- item: `✗ REFUSED leaf845 "," → "ἑαυτοὺς," — 54 matches in body`
  FIND: `⟨?⟩, καὶ ἀγωνίζεσθαι κατὰ τοὺς πατέρας ἡμῶν.`
  REPLACE: `λαμβάνομεν, καὶ πρὸς αὐτὸν καταρτίζειν ἑαυτοὺς, καὶ ἀγωνίζεσθαι κατὰ τοὺς πατέρας ἡμῶν.`
  WHERE: seg4, fourth (last) full-width line, ending the paragraph before `ΙΒ'`.
  WHY: the accent on -ού- slopes down-right — **grave before the comma**, the edition's convention. Also note `πατέρας` set in full on this very line, which is what makes `Πάτρες` at 1632.1 a real crux and not a broken sort.

- item: `✗ REFUSED leaf845 "τος" → "τοςᵃ" — 4 matches in body`
  FIND: `τος ⟨?⟩ ἡμῶν. Διὰ τί φοροῦμεν κολόβιον`
  REPLACE: `τος ᵃ ἡμῶν. Διὰ τί φοροῦμεν κολόβιον`
  WHERE: seg5 line 3, continuing `τὰ σύμβολα τοῦ σώμα-` from seg4's last line.
  WHY: at 16× the superscript is a small italic **a** (bowl counter low-left, stem right), space-set on both sides. **Corroborated by the note itself**, which the transcriber reported as absent: it sits at the foot of the **Latin (left) column** of seg8 and reads `ᵃ Leg. σχήματος.` (above it, `ʰ Apoc. xiv, 16.`). Per rule 5 the body keeps `σώματος`; the correction lives in the apparatus only.
  ⊕ **Correction to leaf845's own FOOTNOTES-SKIPPED note** — it states no footnote block was visible on this leaf. There is one; it is under the *Latin* column, which is where the lettered *variae lectiones* for this opening sit.

- ⊕ item: **not on any queue** — a fifth full-width line, lost identically by BOTH passes, so the diff could never see it.
  FIND: `⟨?⟩ήλθομεν εἰς τὸ μοναστήριον, καὶ τί ἐστι τὸ σχῆμα ὃ`
  REPLACE: `εἰδέναι τί ἐστιν αὕτη ἡ ἀποταγή, καὶ διὰ τί ἤλθομεν εἰς τὸ μοναστήριον, καὶ τί ἐστι τὸ σχῆμα ὃ`
  WHERE: seg4, third full-width line, between the two above.
  WHY: read across the gutter. `αὕτη` carries a single composite mark over the υ (breathing + acute run together in this fount); I read it rough, and that is the one glyph on this line I would not stake much on — the letters are not in doubt.

---

## leaf846  (p847, left col = 1633)

- item: `↯ MANUAL leaf846 [NEITHER] - ONLY IN A: ἴδιον. + A=ρᾶν B=ιον.`
  FIND: `ρᾶν ἴδιον. Πρῶτον μὲν ὡς βασιλεύς·`
  REPLACE: `ροῦν ἱμάτιον. Πρῶτον μὲν ὡς βασιλεύς·`
  WHERE: seg1, first body line under the running head `1633 DOCTRINA…`; continues `ἐφόρεσε τὸ πορφυ-` from the foot of 1632.
  WHY: `ροῦν` is clean. The next word is printed from type inked almost to nothing — at 7× only the initial ἱ with its breathing dot, two specks at the feet of μ, the ά, the crossbar of τ, a speck for ι, and `ον.` survive; seven letter-positions, correctly spaced for `ἱμάτιον`. The facing Latin at the foot of p846's left column reads *purpuream vestem portavit. Primum quidem uti rex*. `CRUX:` col 1633.1, under-inked type; letters positionally present, reading fixed by *vestem*.

---

## leaf847  (p848, right col = 1636)

- item: `↯ MANUAL leaf847 [NEITHER] - A=κ- B=α- → NEITHER: κρα-`
  FIND: `χρόνου τὸ κ-`
  REPLACE: `χρόνου τὸ κρα-`
  WHERE: seg8, `ποῖα μέτρα ἤνεγκεν αὐτὸν δι' ὀλίγου χρόνου τὸ κρα-` / `τῆσαι αὐτὸν τὴν ὑπακοήν`.
  WHY: at 7× the plate shows `τὸ`, then a κ that sits squarely **on** the baseline (X-form, no descending arm — not χ), then a one-letter gap holding a single ink speck **below the baseline**, then `α-`. That speck is the descender of a ρ that dropped out of the forme. Continuation `τῆσαι` and Migne's *dum obedientiam amplectitur* give κρατῆσαι. `CRUX:` col 1636, ρ supplied from its own surviving descender — flag it, do not present it as clean type.

---

## leaf849  (p850, right col = 1640/1642)

This leaf is the worst of the range: four full-width lines, and the two passes agreed
in mutilating three of them.

- item: `↯ MANUAL leaf849 [NEITHER] - A=ρον, B=μοι, → NEITHER: μου,`
  FIND: `[A] ρον, ἐξελοῦ με, ἀλλ᾽,`
  REPLACE: `[A] μου, ἐξελοῦ με, ἀλλ’,`
  WHERE: seg1, first body line under running head `…ΠΕΙ ABBATIS 1640`; the same formula is set two lines below in clean roman (`Πατρός μου ἐξελοῦ με.`).
  WHY: italic scripture, badly inked. At 13× the first glyph is the italic μ's **left descender plus a speck where its arch failed**; then a clean ο; then two strokes that meet at the foot — italic υ, not ν. Pass A read the μ-descender as ρ and the υ as ν.

- item: `↯ MANUAL leaf849 [NEITHER] - ONLY IN A: ὡς → NEITHER: Ὡς`
  FIND: `θλίψιν. Ὡς οὖν ἐδήλωσα τῷ γέροντι, δηλοῖ μοι οὕτως·`
  REPLACE: `βασιλείαν τῶν οὐρανῶν, ἐφοβούμην ὅτι οὐκ εἶχον θλῖψιν. Ὡς οὖν ἐδήλωσα τῷ γέροντι, δηλοῖ μοι οὕτως ·`
  WHERE: seg7, second of four full-width lines.
  WHY: capital Ω with rough breathing, unambiguous at 3×. The verdict `Ὡς` is right; what nobody caught is that the **line's whole head was missing** — the splice would have placed a correct capital into a truncated line. Note `θλῖψιν` (circumflex) here against `θλίψεων` on the line above.

- item: `↯ MANUAL leaf849 [NEITHER] - A=κληρωθῆναι, B=πληρῶσαι, → NEITHER: πληρώσω,`
  FIND: `καὶ πρὶν κληρωθῆναι,`
  REPLACE: `καὶ πρὶν πληρώσω,`
  WHERE: seg7, right column, `πρὸ τοῦ με ὑπηρετῆσαι αὐτῷ, καὶ πρὶν πληρώσω,` / `γράφων ᾐσθανόμην ὠφελείας καὶ κουφισμοῦ·`
  WHY: the word is over-inked into a single mass and its letters cannot be counted. **The accent decides it.** On this same line `τοῦ` and `ὑπηρετῆσαι` carry circumflexes, and in this fount a circumflex is a broad flat bar; the mark over this word is a compact slanted oval — an acute. That excludes `πληρῶσαι`, which requires the bar. `πληρώσω` (πρίν + subjunctive) stands, but log it as read-from-accent, not read-from-letters. Migne's Latin here compresses (*idque per litteras sciscitabar*) and does not arbitrate.

- item: `↯ MANUAL leaf849 [UNRESOLVED] - A=μετ᾽ B=μετ' (convention)`
  FIND: `βάνει αὐτὸν μετ᾽ αὐτοῦ·`
  REPLACE: `βάνει αὐτὸν μετ’ αὐτοῦ·`
  WHERE: seg3 (col-measure), `καὶ χειροτονεῖ αὐτόν, καὶ λαμ-` / `βάνει αὐτὸν μετ’ αὐτοῦ·`
  WHY: normalisation per PG-OCR-PROMPT, **not** a plate reading. One stroke is printed; U+1FBD and U+2019 are indistinguishable on paper.

- ⊕ item: **not on any queue** — the head of the third full-width line. The earlier verdict flagged this loss in prose (`A=οὕτως· B=ἕκαστος`, "a real hole neither the diff nor either pass reports") but no placeable instruction was ever written.
  FIND: `⟨?⟩ὡς βάλλων ἑαυτὸν εἰς ὑπακοὴν Πατέρων, ταύτην τὴν`
  REPLACE: `« Μηδὲν θλιβῇς· σὺ οὐκ ἔχεις πρᾶγμα· ἀλλ’ ἕκαστος βάλλων ἑαυτὸν εἰς ὑπακοὴν Πατέρων, ταύτην τὴν`
  WHERE: seg7, third full-width line.
  WHY: read straight across at 3×; the clause is fully legible.

- ⊕ item: **not on any queue, and the more serious one — an entire printed line is absent from the transcription.**
  FIND: `⟨?⟩ὡς βάλλων ἑαυτὸν εἰς ὑπακοὴν Πατέρων, ταύτην τὴν` *(insert a new line immediately AFTER the line replaced above, before the blank line preceding `ΔΙΔΑΣΚΑΛΙΑ Β΄.`)*
  REPLACE: add the line `ἀμεριμνίαν καὶ τὴν ἀνάπαυσιν ἔχει. »`
  WHERE: seg7, fourth full-width line — the last line of the paragraph, closing the γέρων's speech before the new Doctrina head.
  WHY: it is plainly on the plate and is in neither pass. Both passes lost it, so the diff was blind to it, and the leaf currently ends the chapter mid-sentence.

- ⊕ item: also not on any queue — the first full-width line's head.
  FIND: `ὅτι διὰ πολλῶν θλίψεων δεῖ ἡμᾶς εἰσελθεῖν εἰς τὴν`
  REPLACE: `μὴ εἰδὼς τὴν δύναμιν τῆς ἀρετῆς, καὶ ἀκούων ὅτι διὰ πολλῶν θλίψεων δεῖ ἡμᾶς εἰσελθεῖν εἰς τὴν`
  WHERE: seg7, first full-width line. (Removes the need for the transcription's bracketed `⟨ὅ⟩τι` guess, which was a conjecture about the crop, not about ink.)
  WHY: read across the gutter at 3×.

---

## leaf850  (p851, left col = 1643)

- item: `↯ MANUAL leaf850 [UNRESOLVED] - A=δι᾽ B=dι' ×4 (convention)`
  FIND: `δι᾽` ×4 — `κακῶν ἐνθυμήσεων, δι᾽ αἰχμαλωσίας` · `διὰ φιλαργυ-`/`ρίας, δι᾽ ὀκνηρίας` · `ἐμποδίζει δι᾽ ὀκνηρίας, διὰ ῥαθυμίας` · `τῶν ἁγίων δι᾽ αὐτῆς τῆς ταπεινοφροσύνης`
  REPLACE: `δι’` in all four
  WHERE: seg3-range lines 36, 38, 39, 45 of `leaf850.txt`.
  WHY: normalisation per prompt. All four verified present and correctly placed; the plate cannot arbitrate between two codepoints for one stroke.

- ⊕ item: **not on any queue** — the leaf's full-width line is spliced in a mutilated state. The verdict file recorded the right reading in prose (and noted "the comma after ταπεινοφροσύνης, which B also drops") but the splice placed the bare word and left the rest of the line missing.
  FIND: `ἀκούομεν, λέγειν, «Συγχώρησον»· διὰ γὰρ τῆς ταπεινοφροσύνης`
  REPLACE: `ἀκούομεν, λέγειν, « Συγχώρησον » · διὰ γὰρ τῆς ταπεινοφροσύνης, πάντα τοῦ ἐχθροῦ καὶ ἀντικειμένου`
  WHERE: seg4, the full-width line whose continuation `διαφθείρεται.` is already the next line of the file.
  WHY: read whole at 1.9×. Note **`πάντα τοῦ ἐχθροῦ`** — no `τὰ`, unlike the col-measure repetition of the same clause 17 lines below (`πάντα τὰ τοῦ ἐχθροῦ`). Migne's facing Latin *Per humilitatem enim omnia hostis et adversarii tela franguntur* confirms the sense. Resolves this leaf's UNCERTAIN note (a), which suspected a dropped crop.

---

## leaf851  (p852, right col = 1644)

- item: `↯ MANUAL leaf851 [NEITHER] - A=τό, B=Τό, → NEITHER: τὸ,`
  **and** `✗ REFUSED leaf851 "οὐδὲ" → "οὔτε" — 5 matches` — one line answers both.
  FIND: `έθηκε; τό, «Καὶ οὐδὲ ἅπτονται αὐτῆς.» Βλέπεις`
  REPLACE: `έθηκε; τὸ, «Καὶ οὔτε ἅπτονται αὐτῆς.» Βλέπεις`
  WHERE: seg4, the line continuing `Καὶ ποῖον ἄλλο θαυμαστὸν προσ-`.
  WHY: (i) lowercase tau, small, on the x-line — not the capital's full height; (ii) the accent over the omicron descends left-to-right, i.e. a **grave before the comma**, the same convention both passes normalised away; (iii) at 8× the second word is unmistakably τ + ε after οὔ, not δ + ὲ. `έθηκε;` (no initial ἔ) is correct as it stands — the word is hyphenated `προσ-`/`έθηκε;` on the plate.

- item: `↯ MANUAL leaf851 [UNRESOLVED] - ἀπ᾽ · δ᾽ · καθ᾽ · κατ᾽ · μετ᾽ (convention) ×5`
  FIND: the five `᾽` occurrences in `leaf851.txt` (`ἀπ᾽ αὐτῆς δῆθεν`, `Εἴ τι δ᾽ ἂν`, `χωρεῖ καθ᾽`/`ἑαυτοῦ`, `κατ᾽`, `μετ᾽`)
  REPLACE: `’` for each
  WHERE: throughout; all five verified in place.
  WHY: normalisation per prompt. ⚠ This file is **mixed** — it also holds 2 ASCII `'`; the sweep must catch both.

---

## leaf852  (p853, left col = 1645)

- item: `↯ MANUAL leaf852 [NEITHER] - ONLY IN A: α → NEITHER (artifact)`
  and `↯ MANUAL leaf852 [NEITHER] - A=δευτέρ- B=ἐστὶ → NEITHER`
  and `↯ MANUAL leaf852 [NEITHER] - ONLY IN A: ΣΤ΄. → NEITHER: Ϛ΄.`
  — three rows, one two-line repair. The `α` is not a token; it is the tail of `δευτέρα` where the crop cut the full-width line, and the invented hyphen `δευτέρ-` must go with it.
  FIND: `τίς ἐστιν ἡ πρώτη ὑπερηφανία, καὶ τίς ἐστιν ἡ δευτέρ-`
  REPLACE: `τίς ἐστιν ἡ πρώτη ὑπερηφανία, καὶ τίς ἐστιν ἡ δευτέρα, ὁμοίως εἴπωμεν τίς ἐστιν ἡ κοσμικὴ, καὶ τίς`
  FIND: `α ἐστι μοναχικὴ ὑπερηφανία. Μάθωμεν λοιπὸν ποῖαί Ϛ΄.`
  REPLACE: `ἐστι μοναχικὴ ὑπερηφανία. Μάθωμεν λοιπὸν ποῖαί εἰσι καὶ αἱ δύο ταπεινώσεις.`
  WHERE: seg5, the two full-width lines directly above the section head.
  WHY: read whole at 2.5×. `κοσμικὴ,` — grave before comma again. The stray `Ϛ΄.` currently glued to the end of the second line is a mis-placement by the splice: the numeral belongs to the head below, not here. This also disposes of the leaf's UNCERTAIN note about a "doubled ἐστι / dittography" — there is no dittography; the two `ἐστι` sit in different clauses of a line the crop had cut in half.

- item: `↯ MANUAL leaf852 [NEITHER] - ONLY IN A: ΣΤ΄. → NEITHER: Ϛ΄.` (the head itself)
  FIND: `ΣΤ΄. Ἡ πρώτη ταπείνωσίς ἐστι, τὸ ἔχειν τινὰ τὸν`
  REPLACE: `Ϛ΄. Ἡ πρώτη ταπείνωσίς ἐστι, τὸ ἔχειν τινὰ τὸν`
  WHERE: seg5, section head under the two full-width lines.
  WHY: at 9× the glyph is a single sort — a C-curve with a descending tail, i.e. **stigma**, followed by keraia and point. It is not a Σ+Τ digraph; pass A expanded it silently. Migne's facing Latin numbers the section **VI.**

- item: `↯ MANUAL leaf852 [UNRESOLVED] - A=μετ᾽ B=μετ' (convention)`
  FIND: `ὅτι μετ᾽ ὀλίγον καιρὸν` → REPLACE: `ὅτι μετ’ ὀλίγον καιρὸν`
- item: `↯ MANUAL leaf852 [UNRESOLVED] - A=κατ᾽ B=κατ' (convention)`
  FIND: `κατ᾽ αὐτοῦ τοῦ Θεοῦ ὑπερηφανεύθη` → REPLACE: `κατ’ αὐτοῦ τοῦ Θεοῦ ὑπερηφανεύθη`
- item: `↯ MANUAL leaf852 [UNRESOLVED] - A=ἐφ᾽ B=ἐφ' (convention)`
  FIND: `καὶ ἐφ᾽ ὅσον μὲν ἀν-` → REPLACE: `καὶ ἐφ’ ὅσον μὲν ἀν-`
  WHY (all three): normalisation per prompt. This file is also **mixed** (3 × `᾽`, 3 × ASCII `'`).

---

## leaf853  (p854, right col = 1648)

- item: `✗ REFUSED leaf853 "Λέγει" → "Λέγω" — 4 matches in body`
  FIND: `μαθεῖν τὸν λόγον. Λέγει`
  REPLACE: `μαθεῖν τὸν λόγον. Λέγω`
  WHERE: seg1 line 2 (the FIND is unique; the other three `Λέγει` are `Λέγει ἐκεῖνος`, `Λέγει μοι ἐκεῖνος·` ×2).
  WHY: decided by direct comparison on the same page. The final glyph is a wide two-humped form identical to the ω of `Λέγω αὐτῷ` four lines below, and unlike the ε+ι of `Λέγει ἐκεῖνος` two lines below, where ε shows its mid-bar and ι its separate upright.

- item: `↯ MANUAL leaf853 [NEITHER] - A=«Κύριε B=«Κύρι → NEITHER: « Κῦρι`
  FIND: `αὐτῷ· «Κύριε ὁ πρωτεύων, εἰπέ μοι,`
  REPLACE: `αὐτῷ· « Κῦρι ὁ πρωτεύων, εἰπέ μοι,`
  WHERE: seg1 line 3.
  WHY: at 13× the mark over the υ is a **broad flat bar — a circumflex**, not the compact oval of an acute (compare the true acute on `εἰπέ` on the same line). Four letters only, Κ-ῦ-ρ-ι, then a space and `ὁ`; there is no final ε. A supplied a letter that is not there, B got the letters and missed the accent.

- item: `↯ MANUAL leaf853 [NEITHER] - A=Ἀββακούκ, B=Ἀββακούμ, → NEITHER: Ἀββακοὺκ,`
  FIND: `καὶ ἀπῆλθεν Ἀββακούκ,`
  REPLACE: `καὶ ἀπῆλθεν Ἀββακοὺκ.`
  WHERE: seg3, `κον μετὰ τῶν λεόντων, καὶ ἀπῆλθεν Ἀββακοὺκ.` / `ἔχων τὸν ἄρτον, λέγων αὐτῷ·`
  WHY: **overturns the earlier verdict on its punctuation.** The letters are as adjudicated — final glyph is an X sitting flat on the baseline (κ; a χ on this page drops its lower-left arm well below), accent on -ού- descends left-to-right so it is a **grave**, corroborated by the facing Latin *Habacuc*. But the terminal mark is a **period, not a comma**: at 8× it is a compact tailless diamond at baseline, identical to the point after `εἰμι ἐγώ.` two lines above, and unlike the comma after `λεόντων,` earlier on the same line, which carries a clear descending tail. `CRUX:` col 1648 points the sentence with a full stop where the syntax runs on into `ἔχων τὸν ἄρτον`. It is Migne's pointing; do not soften it to a comma.

---

## leaf854  (p855, left col = 1649)

- item: `↯ MANUAL leaf854 [NEITHER] - A=ὠρμάτωσεν B=ἠθέλησεν → NEITHER: ὠμμάτωσεν`
  FIND: `Ἰδοὺ ὠρμάτωσεν ἡμᾶς εἰς τὸ νοῆσαι`
  REPLACE: `Ἰδοὺ ὠμμάτωσεν ἡμᾶς εἰς τὸ νοῆσαι`
  WHERE: seg4 last line / seg5, following `καὶ ἄλλο τὸ τῶν ἀνθρώπων. »`.
  WHY: at 7× two full mus with their descenders stand between ω and ά — ὀμματόω, "gave us eyes to see it". Verdict confirmed. Worth keeping on the record that pass B here did not misread a letter; it substituted a different fluent verb (`ἠθέλησεν`), the same failure mode the prompt calls 7a″. Resolves this leaf's UNCERTAIN note.

- item: `↯ MANUAL leaf854 [NEITHER] - A=τῇ B=τῇ; → NEITHER: τῆς`
  FIND: `δὲ ὁδὸς τῇ ταπεινώσεώς ἐστιν οἱ κόποι οἱ σωματικοὶ`
  REPLACE: `δὲ ὁδὸς τῆς ταπεινώσεώς ἐστιν οἱ κόποι οἱ σωματικοὶ`
  WHERE: seg6, three lines below `Ἡ ταπείνωσις μέγα ἔργον ἐστὶ καὶ θεϊκόν·`.
  WHY: settled by putting it beside the clean instance **two lines further down** in the same column — `ἐστὶν ἡ ὁδὸς τῆς ταπεινώσεως.` — at 11×. The two are the same three sorts. What reads as an iota subscript is the **descending right stem of η under a circumflex bar**, and what reads as a semicolon is this fount's **final sigma, which at this size prints as an upper hook over a separate lower bowl** — the clean `τῆς` shows exactly the same two-part mark. Resolves this leaf's UNCERTAIN note, which had flagged the dative-before-genitive as a possible misprint: there is no misprint.

---

## Notes for the pipeline

1. **The full-width setting, not the readings, is what is breaking this batch.** Of the
   25 rows here, 11 exist only because a page-wide line was cut by a column crop; and
   the crops' damage was *shared by both passes* five times, which makes it structurally
   invisible to the A/B diff. On leaf849 that cost an entire printed line
   (`ἀμεριμνίαν καὶ τὴν ἀνάπαυσιν ἔχει. »`) and nothing downstream would ever have
   shown it. Detect full-width lines at crop time; a diff can never be the safety net
   for a defect the crop inflicts on both inputs.
2. **A written verdict is not a placed verdict.** Three rows here were adjudicated
   correctly in BATCH2-VERDICTS-845-854 and then spliced into text that was still
   mutilated — leaf850's `ταπεινοφροσύνης` went into a half-line, leaf852's `Ϛ΄.`
   landed in the wrong line, leaf849's `Ὡς` would have gone into a headless line. The
   splice needs the whole line as its unit wherever the row came from a full-width line.
3. **Normalise the apostrophe once, mechanically, and delete the class.** It is 13 rows
   across the batch and 0 of them are plate questions. No leaf currently holds the
   correct codepoint; two hold a mixture.
4. **Apparatus additions from this pass:** `ἱμάτιον` 1633.1 (under-inked, fixed by
   *vestem*); `κρα-` 1636 (ρ dropped from the forme, supplied from its own descender);
   `σώματος ᵃ` 1632 with Migne's own note `Leg. σχήματος.`; `Ἀββακοὺκ.` 1648 (full stop
   mid-sentence); `Πάτρες` now confirmed a **fourth** time (1632, 1636, 1649, 1650)
   against `πατέρας` set in full on 1632's own full-width line.
5. **Verify the accent, not the letters, when the sort is over-inked.** Both close calls
   here — `πληρώσω` and `Κῦρι` — were decided by circumflex-bar vs acute-oval when the
   letters themselves had merged or were disputed. That test is reliable in this fount
   at 600 dpi and should be tried before anything is called UNRESOLVED.
