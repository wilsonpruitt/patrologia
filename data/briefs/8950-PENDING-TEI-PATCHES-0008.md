# 8950 — pending TEI patches, stint 0008–0011 (cols 0095A–0106D)

**Stint-scoped file.** Merge into a work-level `8950-PENDING-TEI-PATCHES.md` at assembly;
written separately because peer stints were translating concurrently and a shared file would
have raced.

Filed under `translation-style.md` § "What the English translates — THE PLATE WHERE READ"
(locked, Wilson 2026-09-04). **The plate was read for every column in this range** —
archive.org `patrologiaecurs04migngoog`, PDF page = (column + 11) / 2, corner numbers read
first on every page: pp. 53 (095/096), 54 (097/098), 55 (099/100), 56 (101/102),
57 (103/104), 58 (105/106). Every entry in Part A was re-cropped at 600–1200 dpi.

⚠ **Nothing here is a `[sic:]` or a `[var:]` against Migne.** Each is a divergence between
Corpus Corporum's transcription and Migne's type. Where the plate carries a defect our twin
has tidied away, the English renders the sense (Pattern 7 as amended 2026-09-05) and **the
`[sic:]` is OWED but cannot be fired until the patch lands**, because `verify-english`
requires the marker's content to be a verbatim substring of the Latin twin.

---

## Part A — CONFIRMED at 600–1200 dpi. Patch these.

| col | our TEI reads | Migne's plate reads | class | English treatment |
|---|---|---|---|---|
| 0097A | `Deus enim et aeternus est` | **`Deos enim et aeternus est`** | alteration (plate form has no grammatical slot) | rendered "God"; `[sic: *Deos*]` OWED after patch |
| 0097D | `Remotus est enim Enoch` | **`Remotum est`** | alteration | no English exponent — "it was removed" either way |
| 0098A | `usque ad* sed **post** in exsilio generata` | **`sed potest in exsilio generata`** | alteration | English follows the plate: "but it can [be] begotten in exile" |
| 0098C | `« Abel quoque obtulit, » **etc.** Quia justus` | **`» et. Quia justus`** | normalization (plate's broken *etc.*) | "etc." either way; `[sic: *et.*]` OWED after patch |
| 0099C | `propter **dilicta** nostra` | **`propter delicta nostra`** | **OUR corruption** (twin has the non-word) | rendered normally; no marker ever |
| 0100A | `Aquila, « septempliciter**;** »` | **`« septempliciter: »`** | punctuation | ⛔ English follows the TWIN — see cruces §1(c) |
| 0100A | `Symmachus, « **septuplum**; »` | **`« septulum; »`** | normalization | rendered "sevenfold"; `[sic: *septulum*]` OWED after patch |
| 0100A | `« per hebdomadem » **interpretantur**` | **`interpretatur`** | alteration (sg. → pl.) | English follows the plate: "Theodotion renders it" |
| 0101C | `id est **vulnere** quod infixi` | **`id est vulnera quod infixi`** | normalization (plate form has no slot) | rendered "by the wound which I inflicted"; `[sic: *vulnera*]` OWED |
| 0102C | `**intellecta** diligeret` | **`intellectu diligeret`** | alteration | English follows the plate: "might love with understanding" |
| 0103B | `Joan. **V**:` | **`Joan. v :`** | case + spacing | English prints "John V" (see cruces §4 — the words are Job 5:3) |
| 0103C | `Seth, *positio* vel *resurrectio;*` | **`Seth, *positio* ; vel *resurrectio*;`** | deleted semicolon | ⛔ English follows the TWIN — see cruces §1(c) |
| 0103C | `Enoch, *dedicatio**;*** Mathusalam` | **`Enoch, *dedicatio* Mathusalam`** | **supplied** semicolon | ⛔ English follows the TWIN — see cruces §1(c) |
| 0104B | Hebrew word absent before `( *Elohim* )` | **`Hebraicum אלהים (Elohim)`** | dropped Hebrew | see `hebrew-recovery.md`; no English effect |
| 0104C | `[n: (HIER., **ibid.**)]` | **`(HIER., Hebr. ibid.)`** | dropped word in a siglum | note passes verbatim from the twin (parity) |
| 0104C | Hebrew word absent before `( *loiadon* )` | **`Hebr. לאידון (loiadon)`** | dropped Hebrew | no English effect |
| 0104D | `**centesimo** anno deleti sunt` | **`contesimo anno deleti sunt`** | normalization (non-word on the plate) | rendered "the hundredth year"; `[sic: *contesimo*]` OWED |
| 0105D | `**Potest** in trecentis cubitis` | **`Potet in trecentis cubitis`** | normalization (non-word) | rendered "can"; `[sic: *Potet*]` OWED |
| 0105D | `Arca quae **trecentis** cubitis fieri` | **`Arca quae treeentis cubitis`** | normalization (non-word; *trecentis* prints correctly two lines above, so it is the compositor's slip, not a spelling) | rendered "three hundred"; `[sic: *treeentis*]` OWED |
| 0106A | `Ostium autem arcae, » etc.` | **`« Ostium autem arcae, » etc.`** | **dropped opening guillemet** | ⛔ the English MIRRORS THE TWIN here, not the plate — guillemet parity is a hard `verify-english` check (7). Once patched, the English gains the opening `«` too. |

## Part B — seen at 300 dpi only. NOT acted on, NOT patched. Re-read before touching.

Each of these is an impression from the full-page render, not a cropped read. Recorded so a
later collation pass has the list; a punctuation mark is exactly the class a 300-dpi glance
gets wrong.

- 0096A `Spinae antea erant**,** sed non` — plate appears to print no comma.
- 0097B `VERS. 23.--` — plate appears to set **`VERS. — 23.`**, the dash before the number.
- 0098A head `CAPUT IV.` — plate may print `CAPUT IV` without the period.
- 0097D `versatiles sunt**,** quoniam` — plate appears to print no comma.
- 0099D `grave putat**,** sed timet` — plate appears to print no comma.
- 0099D, 0100A `quicunque` ×2 — plate appears to print `quicumque`.
- 0100C `instabilis et fluctuans, et incertae sedis. Non est` — plate appears to read
  `fluctuans. et incertae sedis Non est`.
- 0101A `Lamech namque septimus est**,** cui` — plate appears to print no comma.
- 0101A `resistit spiritui**.** Unde Noema` — plate appears to print no stop.
- 0101D `nec per legem**,** vel per` — plate appears to print no comma.
- 0103D `possidetur regnum coelorum**.**` — plate appears to end the sentence with a comma.
- 0105B `LXX**:** «` — plate appears to print `LXX. «`.
- 0105B `VERS. 13.-- **«** Disperdam` — plate's opening mark may be `»`.

## Foot-of-page apparatus: CHECKED ZERO, six pages

pp. 53–58 (cols 0095–0106) carry **no foot rule and no numbered or asterisked notes** of
either layer. The foot of p. 58 carries only the signature line `PATROL. CXIII.` and `4`.
Record as coverage for this range in `data/plate-notes/coverage.json`.
