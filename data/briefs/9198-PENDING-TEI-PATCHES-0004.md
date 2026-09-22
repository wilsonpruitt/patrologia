# 9198 Usuardus, *Martyrologium* (PL 123) — pending TEI patches, stint B (chunks 0004–0006)

Sites where stint B opened the column at the plate (archive.org `patrologiaecurs29goog`,
leaf = (col + 29)/2, corner numbers read first on every page, no drift from n420 = 811/812 to
n508 = 987/988) and Migne's type differs from our Corpus Corporum twin. Per the locked rule,
**the English already renders the plate**; this file records each divergence so the Latin
converges on it when the patch pass lands.

Format as stint A's file: one entry per site; `find` is given against `sources/pl/tei/9198.xml`
as it stands (newlines in the XML shown as `\n`); each was checked to match exactly once. Single
witness throughout: PL 123 has no calibrated second copy to hand. Numbering is this stint's own
(B1…); stint A's run is P1–P23.

⚑ **Two entries carry a DEFERRED MARKER** (B14, B16): the plate prints a non-word, which under
Patterns 7/10/12 takes a `[sic:]`, but `verify-english` requires a `[sic:]`'s content verbatim in
the Latin twin, and the twin does not yet carry the plate's form. The English renders the sense
now, with the crux; **when the patch lands, add the marker named in the entry** (the column is
read, so `plate-gate` is satisfied). B16 is flagged for the orchestrator: it is a transposed pair
on a single copy, and whether that clears the brief's single-witness bar is a judgment call.

---

## B1 · 0827 — no comma after *civitatem*
- **Leaf:** n428, corners 827 / 828, band line 1.
- **Plate:** `Apud Nisenam civitatem depositio sancti Gregorii`
- **Find** `Nisenam civitatem, depositio` → **replace** `Nisenam civitatem depositio`
- **English (0004):** "At the city of Nisena the deposition of Saint Gregory…"

## B2 · 0827 — no comma after *Caesariensis*
- **Leaf:** n428. **Plate:** `fratris beati Basilli Cæsariensis tam vita` (for *Basilli* see "not patched").
- **Find** `Basilii Caesariensis, tam` → **replace** `Basilii Caesariensis tam`
- **English:** "brother of blessed Basil of Caesarea as most illustrious in life as in eloquence."

## B3 · 0827 — no comma after *episcopi*
- **Leaf:** n428. **Plate:** `sancti Patiani episcopi qui tempore Theodosii principis,`
- **Find** `Patiani episcopi, qui` → **replace** `Patiani episcopi qui`
- **English:** "of Saint Patianus, bishop who, in the time of the emperor Theodosius, …"

## B4 · 0829 — no full stop before *In Perside*
- **Leaf:** n429, corners 829 / 830; line end zoomed to the page edge: *sunt* ends the line bare.
- **Plate:** `glorioso martyrio coronati sunt` / `In Perside, sanctorum martyrum`
- **Find** `glorioso martyrio coronati sunt.\nIn Perside` → **replace** `glorioso martyrio coronati sunt\nIn Perside`
- **English:** "…were crowned with a glorious martyrdom In Persis, of the holy martyrs…" (the capital is kept, as printed).

## B5 · 0829 — no comma after *abbatis*
- **Leaf:** n429. **Plate:** `depositio sancti Droctovei abbatis` / `discipuli beati Germani episcopi.`
- **Find** `Droctovei abbatis,\ndiscipuli` → **replace** `Droctovei abbatis\ndiscipuli`
- **English:** "the deposition of Saint Droctoveus, abbot disciple of blessed Germanus, bishop."

## B6 · 0855D — *constructo* printed ONCE (the twin's doubling is the digitization's)
- **Leaf:** n442, corners 855 / 856, band line 2: `Penarensem urbem constructo monasterio,`
- Solier's VARIANTES on n443 (857/858) quote the phrase with one participle (*…apud Pennarensem
  urbem construxit monasterium…* as a codex reading).
- **Find** `constructo constructo monasterio` → **replace** `constructo monasterio`
- **English:** "having built a monastery at the city *Penarensis*". **No `[d:]`**: the plate does not
  double the word, so there is no dittography of Migne's to mark.

## B7 · 0869 — no comma after *Romuli*
- **Leaf:** n449, corners 869 / 870. **Plate:** `Romuli et Secundoli fratrum,`
- **Find** `Romuli, et Secundoli` → **replace** `Romuli et Secundoli`

## B8 · 0869 — *nati*, not *passi* (OCR candidate, confirmed)
- **Leaf:** n449, band line 3, zoomed; clean type. **Plate:** `qui pro Christo nati sunt.`
- **Find** `pro Christo passi sunt` → **replace** `pro Christo nati sunt`
- **English:** "who were born for Christ." A real word that construes (the martyrology's own idiom of
  the *dies natalis*); rendered literally, crux logged. The Auctaria on n450 quote other codices
  with *passi*: evidence for the tradition, not for this plate.

## B9 · 0871 — full stop after *martyris*
- **Leaf:** n450, corners 871 / 872. **Plate:** `sancti Cyrini martyris. qui a rege Claudio,`
- **Find** `Cyrini martyris, qui` → **replace** `Cyrini martyris. qui`
- **English:** "At Rome, of Saint Cyrinus, martyr. who, after the loss of his property, …" (lower case carried, as stint A did at P13/P14).

## B10 · 0871 — no comma after *insula*
- **Leaf:** n450, line end zoomed to the page edge. **Plate:** `In Antro insula` / `sancti Hermelandi abbatis`
- **Find** `In Antro insula,` → **replace** `In Antro insula`
- **English:** "In the island of Antrum of Saint Hermelandus, abbot, …"

## B11 · 0901 — day head: the plate prints *III Non.*
- **Leaf:** n465, corners 901 / 902. Roman III, italic *Non.*, *Die. 3* at right.
- **Twin:** `II <hi>Non. Die</hi> 3.` (so the twin had two consecutive *II Non.* heads, 3 and 4 April)
- **Find** `<head>II <hi>Non. Die</hi> 3.` → **replace** `<head>III <hi>Non. Die</hi> 3.`
- **English (M1):** "## The third day before the Nones · 3 April". The next head (*II Non. Die 4*) is
  right as it stands (pridie Nonas = 4 April) and is rendered "The day before the Nones".

## B12 · 0919 — *Appolonii*
- **Leaf:** n474, corners 919 / 920; zoomed, clean type. **Plate:** `sancti Appolonii presby-` / `teri`
- **Find** `sancti Apollonii presbyteri` → **replace** `sancti Appolonii presbyteri`
- **English:** "of Saint Appolonius, presbyter". A sound medieval spelling (Solier's VARIANTES on the
  same page discuss the name's forms in the codices), so no marker.

## B13 · 0929 — full stop after *episcopi*
- **Leaf:** n479, corners 929 / 930. **Plate:** `natalis sanctorum Carpi episcopi. Papirii diaconis et Agathonicæ,`
- **Find** `Carpi episcopi, Papirii` → **replace** `Carpi episcopi. Papirii`
- **English:** "the birthday of the saints Carpus, bishop. Papirius, deacon, and Agathonica, …"

## B14 · 0929 — *ter-|terreno* ⚑ DEFERRED `[sic:]`
- **Leaf:** n479; both halves zoomed. The line ends `regnum cœleste pro ter-` and the next begins
  `terreno, rex et martyr intravit.` The compositor set the syllable twice across his own hyphen.
- **Find** `coeleste pro terreno` → **replace** `coeleste pro terterreno`
- **English as shipped:** "entered the heavenly kingdom in place of the earthly" (sense). **After patch:**
  "in place of the earthly [sic: *terterreno*]". Not a digitization artefact of ours: the doubling
  is on the plate, and the twin silently repaired it.

## B15 · 0933 — *in gladio*, not *et gladio*
- **Leaf:** n481, corners 933 / 934; zoomed, clean. **Plate:** `quorum primi fustibus cæsi in gladio percussi,`
- **Find** `caesi et gladio percussi` → **replace** `caesi in gladio percussi`
- **English:** "of whom the first were beaten with cudgels, struck with the sword" (instrumental *in*;
  no "and", because the plate prints none).

## B16 · 0951 — *pratem*, and a comma after *maritimarum* ⚑ DEFERRED `[sic:]`, flagged
- **Leaf:** n490, corners 951 / 952; zoomed, clean type. **Plate:** `maximam pratem Alpium maritimarum, verbo et signis admirandis,`
- **Find** `maximam partem Alpium maritimarum verbo` → **replace** `maximam pratem Alpium maritimarum, verbo`
- **English as shipped:** "the greatest part of the Maritime Alps, by the word …" (sense). **After patch:**
  "the greatest part [sic: *pratem*] of the Maritime Alps". ⚑ A transposed *a*/*r* on one copy:
  orchestrator's call whether it meets the single-witness bar for a `[sic:]`. The comma is independent
  of that call and should land either way.

## B17 · 0969 — no full stop before Bouillart's bracket
- **Leaf:** n499, corners 969 / 970. **Plate:** `sanctorum Evodii et Hermogenis [Bouillart., ad oram paginæ :`
- **Find** `et Hermogenis. [ <hi>Bouillart., ad oram` → **replace** `et Hermogenis [ <hi>Bouillart., ad oram`
- **English:** "of the saints Evodius and Hermogenes [Bouillart, at the edge of the page: …]"

---

## Examined at the plate and NOT patched (recorded so they are not re-opened)

The rule applied, taken from stint A's practice: where the **plate** is the defective or
irregular one by a **single letter** on a single copy, no patch and no marker. The English follows
the twin, and the reading is logged here and in the cruces.

- **0815 `Gæciliam`** (twin *Caeciliam*), n422: a clear G with its spur, zoomed. English "Cecilia".
- **0827 `Basilli`** (twin *Basilii*), n428: at native resolution a dotted *i*, then two ascenders,
  then *i*. English "Basil".
- **0829 `Apaniam`** (twin *Apamiam*), n429: a clean *n*. English "Apamia".
- **0855D `virtudibus`** (twin *virtutibus*), n442. English "virtues".
- **0911 `actum`** (twin *actuum*), n470: a clean, sound syncopated genitive plural of *actus*. The
  English is the same either way ("of ecclesiastical deeds"). Orchestrator's call whether a
  one-letter form that construes should be patched.
- **0921 `magis`** (twin *magnis*), n475: *qui magis virtutibus et optimis studiis praeditus fuit*,
  clean and zoomed. A real word, one letter, one copy: the same class as stint A's 0649 *edictus*.
  English follows the twin ("endowed with great virtues"); crux logged. Orchestrator's call.
- **0921 `extiti`** (twin *extitit*), n475: a first-person form with no slot. English "there was".
- **0935 `posmodum`** (twin *postmodum*), n482: an attested medieval spelling (Pattern 9).
- **0983 `Tertulia`** (twin *Tertulla*), n506: the second *l* reads at native resolution as a short
  dotted stroke, a broken *l* or an *i*. English "Tertulla".
- **0969 `discipulis`** (= twin), n499: printed so; see the cruces (no marker, single letter).
- **0987 `dixerit`** (= twin), n508: printed so; `[sic: *dixerit*]` fired (the twin carries it).
- **0847 `reliquata`** (= twin), n438: printed so; Solier's VARIANTES: *Reliquata passim scribunt codices*.
- **0829 bracket label** `[Bouillart addit:` (twin `Bouillart. addit:`): a stop inside Bouillart's
  italic label; trivial, not patched.
- **0811 `Die. 3`**, **0901 `Die. 3`** and similar: the stop after *Die* in heads. Typographic, not patched.
