# Antiochus, *Epistula ad Eustathium* — Greek source complete (step 3)

**PG 89, cols 1422–1427** (Greek in cols 1421, 1424, 1425, 1428-top).
**1,178 Greek tokens** — against the §8a.E estimate of ~1,200. The
words-per-column calibration held.

## Corroboration against the third witness

Every column was transcribed by Opus vision from 400 dpi renders of
`raw/pg089/089.pdf`, then checked token-by-token against Google's OCR of a
**different physical copy** (`patrologicursus105migngoog_djvu.xml`).

| col | tokens | exact | line-span | dist ≤2 | unresolved | corroborated |
|---|---|---|---|---|---|---|
| 1421 | 229 | 83% | 7 | 29 | 4 | **98.3%** |
| 1424 | 374 | 79% | 5 | 57 | 16 | **95.7%** |
| 1425 | 406 | 83% | 7 | 47 | 13 | **96.8%** |
| 1428 | 169 | 84% | 2 | 20 | 5 | **97.0%** |
| **all** | **1,178** | | | | **38** | **96.8%** |

**All 38 residuals were inspected by hand.** Every one is either a hyphenated
word whose witness halves are themselves damaged, or a word the witness clipped
or mangled. **None is a divergent reading on our side.**

⚠ **This is corroboration, not a CER measurement.** The witness is demonstrably
noisier than we are — it has systematic **κ→χ** and **β→δ** substitution — so it
cannot serve as ground truth and no CER for Opus-on-Greek may be quoted from it.
The benchmark's scored Sonnet figure (3.64% on PG 89) remains the only real
number.

## Cruces logged — for the hand-check, not silently resolved

1. **`ὑπερμεμενηκέναι`** (1421) where one expects *ὑπο-*. Both readings show
   `-περ-`: the plate prints it. Not emended.
2. **`Παλαστίνῃ`** (1425) for *Παλαιστίνῃ*. Both readings agree. Migne's spelling.
3. **`ἐστείλας` / `ἔστειλα`** (1421) — accentuation differs between readings.
4. **Acts citation** (1425): the text reads *εἰσελθεῖν εἰς τὴν βασιλείαν **τῶν
   οὐρανῶν***, but Acts 14:22 has *τοῦ Θεοῦ*. Migne's footnote cites "Act. XIV,
   21" (older versification). A real variant — flag at translation, do not
   conform to the familiar text (scripture policy).

## What the letter contains — confirmed by reading, not inference

- Eustathius has been driven place to place *φόβῳ τοῦ ἐπικρατοῦντος **Χαλδαϊκοῦ
  χειμῶνος*** and asked Antiochus to confirm reports about the Laura's fathers,
  *περί τε τῆς πολιτείας καὶ τῆς **ἀναιρέσεως** αὐτῶν*.
- **The raid is dated internally:** *ἐπελθόντων τῶν **Ἰσμαηλιτῶν**… **πρὸ μιᾶς
  ἑβδομάδος τοῦ παραληφθῆναι τὴν ἁγίαν πόλιν*** — one week before the fall of
  Jerusalem.
- The monks who refused to leave are tortured for days for money "among those
  who had nothing of this age," then cut down *μεληδόν*, limb by limb.
- **ἀββᾶς Νικομήδης** comes from Arabia, nearly dies of grief; **Μόδεστος** —
  the future locum tenens of Jerusalem — gathers, washes and entombs the bodies,
  reading Isa 57 and Wisd 3 over them.
- The survivors flee to the monastery of **abba Anastasius**, twenty stadia from
  the city, then return at Modestus's urging, some delayed *φόβῳ τῶν
  γειτνιώντων ἡμῖν **Σαρακηνῶν***.
- **The count: *ὀνομάτων τεσσαράκοντα τεσσάρων*** — forty-four by name,
  *μνήμη… μηνὶ Μαΐῳ πεντεκαιδεκάτῃ*, commemorated 15 May.
- It closes on **Modestus as the new Bezalel or Zerubbabel**, raising the burned
  sanctuaries by name: **τὸ ἅγιον κρανίον** (Golgotha), **ἡ ἁγία ἀνάστασις**,
  **ὁ οἶκος τοῦ τιμίου σταυροῦ**, **ἡ μήτηρ τῶν ἐκκλησιῶν** (Sion), **ἡ ἁγία
  ἀνάληψις**. An eyewitness-generation list of what 614 destroyed and what was
  rebuilt.

## Next

4. Latin twin from the same leaves (`src/pg-latin/`) + third witness
   (`src/pg-greek-scan/`) — the djvu.xml is already local, so both are cheap.
   ⚠ Per `ANTIOCHUS-START.md`, Migne's editor in this volume admits to
   *divinando Latine reddidimus*; the ladder amendment must be written before
   the Latin is treated as independent.
5. Sanity gate + whole-text hand-check against the plate.
6. Translation launch — its own hard stop (chunks + burn + which model).
