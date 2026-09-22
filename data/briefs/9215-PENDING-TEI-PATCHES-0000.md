# 9215 Usuardus, *Martyrologium* (PL 124), pending TEI patches, stint C (chunks 0000–0003)

Sites where stint C opened the column at the plate and Migne's type differs from our Corpus
Corporum twin. Per the locked rule **the English already renders the plate**; this file records
the divergence so the Latin can converge on it when the patch pass lands.

Format: one entry per site. `find` must match exactly once in the source XML.

⭐ **Read this first: PL 124 exists in two printings, and our TEI follows the Gallica one.** At
0113, 0119 and 0183 the Gallica copy (`bpt6k54939860`) and our TEI carry the same defective form,
while the archive.org copy (`patrologiaecurs76unkngoog`) prints the sound word. At 0119 the two
copies break their lines at different words, so this is a different setting, not a different
photograph. P2–P4 are therefore **press-variant patches**: the sound reading is on a real Migne
plate, and the defective one is also on a real Migne plate. I have rendered the sound reading
in the English with no `[sic:]`, because a `[sic:]` would accuse a plate that another printing
of the same page contradicts. **Whether the Latin should be patched to the sound printing is the
orchestrator's call.** P1 is an ordinary patch: both copies agree there and the twin alone differs.

---

## P1 · 0093 — `civiate` in our twin, `civitate` on the plate

- **Opened by:** stint C, 2026-09-21
- **Plate:** archive.org `patrologiaecurs76unkngoog` leaf **n51**, printed corners **93 / 94**,
  full-width band, first line of VI Kal. (27 May).
- **Our twin prints:** `Apud Mesiam civiate Dorostorensi, natalis beati Julii`
- **The plate prints:** `Apud Mesiam civitate Dorostorensi, natalis beati Julii`
- **Evidence:** clean, well-inked type, *civitate* with both t's. The same formula prints
  correctly as *civitate Dorostoro* at 0085 and 0155.
- **English as shipped** (`src/english/9215/0001.md`): "At Mesia, in the city *Dorostorensis*, the
  birthday of blessed Julius"
- **Proposed patch:** `find` `Mesiam civiate Dorostorensi` → `replace` `Mesiam civitate Dorostorensi`

## P2 · 0113 — `mu tos` in our twin, `multos` on the archive plate (press/wear variant)

- **Plate:** archive n61, corners **113 / 114**: `qui multos in carcere ad fidem erudientes`, clean.
- **Second witness:** Gallica f57 (corners 113/114) prints `mu·tos`: the l is broken, leaving a
  gap with a speck. Our twin transcribes that state.
- **English as shipped** (`0002.md`): "who, instructing many in prison unto the faith"
- **Proposed patch (orchestrator's call):** `find` `qui mu tos in carcere` → `replace` `qui multos in carcere`
- **Note:** a hole in a broken sort. A `[sic: *mu tos*]` was **not** fired: the archive printing
  shows the word whole.

## P3 · 0119 — `praecipatus` in our twin, `praecipitatus` on the archive plate (press variant)

- **Plate:** archive n64, corners **119 / 120**: `in flumen præcipitatus, et cum circumstantibus`, clean.
- **Second witness:** Gallica f60 prints `in flumen præcipatus, et cum circumstantibus`, cleanly,
  with different line breaks (`ne | ejus terrentur` against the archive's `ne ejus ter-|rentur`).
  So these are two settings of the page, and in one of them the word is a non-word.
- **English as shipped** (`0002.md`): "was cast headlong into a river"
- **Proposed patch (orchestrator's call):** `find` `in flumen praecipatus` → `replace` `in flumen praecipitatus`

## P4 · 0183 — `santae` in our twin, `sanctae` on the archive plate (press variant)

- **Plate:** archive n96, corners **183 / 184**: `In Britannia, natalis sanctæ Ediltrudis virginis`, clean.
- **Second witness:** Gallica f92 prints `natalis santæ Ediltrudis`, cleanly.
- **English as shipped** (`0003.md`): "the birthday of Saint Ediltrudis, virgin"
- **Proposed patch (orchestrator's call):** `find` `natalis santae Ediltrudis` → `replace` `natalis sanctae Ediltrudis`

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0081 day head `Die 24.`** The archive n45 prints `Die 14.`, while Gallica f41 prints `Die 24.`
  cleanly, and 24 is the only number that fits between *Die 23* and *Die 25*. TEI right; the
  archive copy's first digit is a worn or foul sort. **No patch.** English: 24 May.
- **0085 `Passecratis. Valentionis`.** The archive n47 prints a comma; Gallica f43 prints the full
  stop our twin has. Both are clean, so this is a press variant with no one to accuse. **No patch**,
  and the English keeps the full stop.
- **0109 `ad caput vero` (Bouillart bracket).** The archive n59 prints `ab caput`; Gallica f55 prints
  `ad caput`. TEI right. **No patch.**
- **0113 `Hi omnes`.** The archive n61 prints `Illi omnes`; our twin and Gallica f57 print `Hi omnes`.
  Both are clean: a press variant (this is the OCR candidate `Hi`/`illi`). **No patch.**
- **0055 `quieverunt. Apud`.** On the archive n32, a heavily worn page, no point is visible, but the
  spacing gap is. The page is too worn to call. **No patch.**
- **0109 unclosed `[ *Addit Bouill.:*` bracket.** The plate never closes it either. Carried unclosed
  in both columns. **Never patch.**
- **0043 `confessori`, 0015 `ungula`, 0019 `in metalla Fanensi`, 0035 `depositio beati confessoris`,
  0081 `tetrachae`, 0213 `primis illic`.** All plate-confirmed as printed (and at 0019 and 0081
  Solier's apparatus confirms the codex reading). Migne's text, so Pattern 7 or Pattern 9 applies.
  **Must not be patched.**
