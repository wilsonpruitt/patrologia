# Antiochus, *Epistula ad Eustathium* (PG 89, 1422–1427) — cruces

Greek source: `src/pg-greek-ocr/antiochus-epistula-ad-eustathium/` (our OCR of
the plate — **this work has no Calfa text**; see `ANTIOCHUS-START.md`).
Twin: `src/pg-latin/…` (Migne cols 1422, 1423, 1426, 1427 + the recovered
catch-up block). Third witness: `src/pg-greek-scan/…`.

## `[lat:]` markers — TWO fired, both plate-verified

1. **The number of chapters — 130 (Greek) vs 150 (Latin), and it is in the TITLE
   as well as the body.** Greek: `ΚΕΦΑΛΑΙΑ ΡΛʹ` in the title block and
   `εἰς ἑκατὸν τριάκοντα κεφάλαια` in the body (spelled out in **words**, so not
   an OCR-fragile letter-numeral, and corroborated by the third witness).
   Latin: *capitula 150* in the title, *centum quinquaginta … capita* in the
   body — consistently 150 in both places. **The Greek is almost certainly
   right**: the *Pandectes* is transmitted in 130 chapters. English follows the
   printed Greek (rule 4); the marker records the Latin. Cols 1422 (title) and
   1423.
2. **The Fathers' age — "fifty and sixty" (Greek) vs "a hundred … and fifty-six"
   (Latin).** Greek: `ὑπερβεβηκότες ἀπὸ πεντήκοντα καὶ ἑξήκοντα ἐτῶν`.
   Latin col 1423: *nonnulli ipsorum **centum excesserunt annos et quinquaginta
   sex***. **Plate-verified by eye at 400 dpi** (`raw/pg089/lat1423-check.png`)
   — this is not OCR noise; it is printed. A material divergence about the same
   fact, and neither column is obviously corrupt.

Both fired only after the Pattern 16 numeral discipline: spelled-out Greek
numerals, third-witness corroboration, and a plate look at the Latin.

## `[var:]` — one

- **Acts 14:22.** The text reads `εἰσελθεῖν εἰς τὴν βασιλείαν **τῶν οὐρανῶν**`;
  the received text has `τοῦ Θεοῦ`. Migne footnotes it "Act. XIV, 21" (older
  versification). Rendered as printed per the scripture rule — **not** conformed
  to "the kingdom of God".

## Plate readings kept, not emended

- **`ὑπερμεμενηκέναι`** (1421) where one expects *ὑπο-*. Our reading and the
  third witness both show `-περ-`, so the plate prints it. Rendered "endured".
- **`Παλαστίνῃ`** (1425) for *Παλαιστίνῃ*. Both readings agree; Migne's spelling.
  Rendered "Palestine".
- **`ἐστείλας` / `ἔστειλα`** (1421) — accentuation differs between our reading
  and the witness at both occurrences. Sense is unaffected; noted for the
  read-through.

## Renderings that a reader may query

- **`τὸ ἅγιον κρανίον`** → "the holy Skull". Literal; it denotes the Golgotha
  shrine (the Place of the Skull). Left literal per Tier-2 rather than glossed
  to "Calvary", which would import a Latin name the Greek does not use.
- **`ἡ μήτηρ τῶν ἐκκλησιῶν`** → "the mother of the churches", i.e. Hagia Sion.
  Not glossed inline.
- **`Ἰσμαηλῖται` (1424) and `Σαρακηνοί` (1425) are kept distinct** — "Ishmaelites"
  and "Saracens". The letter uses both, and harmonizing them would erase a
  datum about how the author names the attackers.
- **`τὰ σκηνώματα`** → "the tabernacles", of the martyrs' bodies. Literal.

## Genre note

**Epistolary narrative is a NEW genre for the register rulebook** — neither
chronicle, dialogue, homily, nor lemma-and-gloss. EN/Greek came out at **1.416×**
(1,178 → 1,668), between chronicle 1.25× and homily 1.49×, which fits: plain
narrative with two elevated passages (the catalogue of the Fathers' virtues, and
the closing doxology). Per Q4 an anchor is mandatory for a new genre — chunk
`0000` should be registered as the epistolary anchor if more letters follow.
