# Verification of result-1.jsonl, pages p-0054 to p-0058

Fresh independent read from 600 dpi crops (thumbnails to locate, own crops of every variants line, every marker in the running text, and every note block). Fresh rows: `verify-54-58.jsonl` (38 rows = 34 comparable + 4 new rows for bracketed Latin numerals). `result-1.jsonl` was not edited.

Result: the apparatus text, anchors and columns of the old rows are essentially sound. Substantive text errors are confined to p-0054 q and r and p-0055 t; the rest are marker-confidence downgrades and four unrecorded marks.

## A. Text / anchor disagreements (plate-supported reading in bold)

| Page | Marker | Old | Fresh (plate) | Plate supports |
|---|---|---|---|---|
| p-0054 | q | "...Serum illum Caiphæ, qui in Domini Christi faciem colaphum impegerat" | left column ends "qui in Domini", right column begins "cam Christi faciem colaphum impegerat" | **Fresh**: the syllable "cam" is printed (old dropped it; probably a Migne misprint, or a broken "Dominicam", but it is on the plate) |
| p-0054 | r | "Εἰς Μόψου κρήνας πόλιν τιμίαν ἧς ἀπὸ Ταρσοῦ Κιλικίας" | "Εἰς Μόψου κρήνας πο-" (line end, hyphen) / "τιμον ᾗ ἀπὸ Ταρσοῦ Κιλικίας" | **Fresh**: plate has "τιμον", no ιν/ιαν; old's "πόλιν τιμίαν ἧς" is a normalised guess. The middle letters of the broken word "πο-…τιμον" are not recoverable (the plate is smudged); the exact Greek stays uncertain |
| p-0054 | 65 (variant) | "al. Κομητοῦ." | "al. Κομητῦ̃." (single υ-form with a circumflex-like mark after τ; no separate ο seen) | **Fresh, weakly**; unresolved. The glyph is blotted |
| p-0055 | t | "Ἔστρωννυε δὲ τοῖς ἀρρώστοις" | "Ἐστρών-|νυε δὲ τοῖς ἀῤῥώστοις" (accent on ώ, no Ἔ; the ρρ is blotted, a rough-breathing ῥ is likely) | **Fresh** for Ἐστρώννυε. ἀρρώστοις/ἀῤῥώστοις: blotted, do not rely on either |
| p-0055 | t | "βρεγγάριος vel βεργγάριος" | "βρεγγά-|ριος vel βρεγχάριος" (the plate's κ-glyph, so most likely βρεγκάριος) | **Fresh**: old's second form has transposed letters (βεργγ-). The fresh row writes βρεγκάριος |
| p-0057 | v (continuation) | text field "Ineptè" (its own comment says the plate reads "Inepte") | "Inepte" (no accent) | **Fresh** (old row is self-contradictory) |

Everything else in the note texts agrees with the plate: p-0054 q (other than "cam"), r (Latin); p-0055 s and t (apart from the two Greek words above); p-0056 u, v; p-0057 v continuation; p-0058 x; and all variants texts (62 to 67, 67*, 68, 69 to 72, 73 to 81, 82 to 86). The old p-0058 note-x text is exactly what the plate shows, including the break-off at "Latinum".

## B. Marker reading-state disagreements (digits are heavy blobs in this scan; 3/8, 5/6/8 are not separable)

I applied the brief's rule strictly: a marker is "read" only when the second digit has a distinguishable shape (2, 4, 7, 9, 0, 1 here); filled-counter blobs are "illegible", with my best candidate recorded in a `candidate` field, not in `marker`.

| Page | Position (anchor) | Old | Fresh | Note |
|---|---|---|---|---|
| p-0054 | σήμερον | 63 read | illegible (cand. 63) | blob in both places; the text-mark looks like 68 as well as 63 |
| p-0054 | ἠνεγινώσκετο | 66 read | illegible (cand. 66) | 6 vs 8 not separable |
| p-0055 | πύργου | 68 read | illegible (cand. 68) | blob; the old row's own "unreadable" field said only that it was not cropped |
| p-0058 | ἐργατείας | 83 read | illegible (cand. 83) | blob in the variants line and in the text |
| p-0054 / p-0057 | 64, 65 / 73, 75 | illegible | illegible | agree (also 85 on p-0058) |

Agreed as read: 62, 67 (p-0054); 67* (p-0055); 69 to 72 (p-0056); 74, 76 to 81 (p-0057); 82, 84, 86 (p-0058). On p-0057 the old 78 and on p-0058 the old 82/84 are agreed as read, though 78 is borderline (clearly a closed 8, but small).

Impact: for the pages concerned, every candidate agrees with the old marker number, so no anchor or text mapping changes. Only the downgrade in confidence, which matters if "never complete from the sequence" is enforced.

## C. Marks the old rows did not record

Bracketed numerals in the Latin column with no matching foot note on the same page: (5) in the p-0054 chapter-32 heading ("Babylæ (5)"), (6) in the p-0056 chapter-35 heading ("Vita Eliæ (6)"), (7) in the p-0057 running text ("Accendamus ignem (7), domine patriarcha") and (8) in the p-0058 chapter-38 heading ("Mors Anastasii (8)"). They are a separate consecutive series (5, 6, 7, 8), which suggests endnote or cross-reference keys not belonging to the foot-of-page layer. Recorded in the fresh file as rows with `orphanMark: true`, `text: null`. Whether they belong in the apparatus is for the caller to rule.

## D. Minor (not counted as disagreements)

- p-0056 (v) anchorLine: old gives "τῶν Σευήρου ἀκοινωνήτων (v) καὶ Ἀκεφάλων ⁷²" as one line; on the plate the word is broken, "ἀκοινωνή-|των (v)", with 72 on the next line. Anchor word identical.
- p-0054 q: old prints "Χριστόν :" where the plate has a raised point before "Servum". Punctuation only.
- p-0054 mishap: the retyped p-0054 rows are textually fine apart from section A items (q "cam", r word) and the two marker downgrades in section B.
- English renderings (`en`) were not compared line by line; old q/r/s/u/v/x `en` fields are acceptable apart from reflecting the old readings in q ("Domini Christi") and r.
