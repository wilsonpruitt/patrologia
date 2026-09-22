# 9215 Usuardus, *Martyrologium* (PL 124), pending TEI patches, stint E (chunks 0008–0011)

Sites where stint E opened the column at the plate and Migne's type differs from our Corpus
Corporum twin. Per the locked rule **the English already renders the plate**; this file records
the divergence so the Latin can converge on it when the patch pass lands.

Format: one entry per site. Each `find` was checked against `sources/pl/tei/9215.xml` and matches
exactly once.

⭐ **Two printings (stint C's finding, confirmed here).** Every site below was read on BOTH copies:
archive.org `patrologiaecurs76unkngoog` (leaf = (col + 9)/2) and Gallica `bpt6k54939860`
(f = (col + 1)/2). **P1–P4 and P6 are ordinary patches**: both printings agree and the twin alone
differs. **P5 and P7 are press/wear-variant patches**: the Gallica printing carries a broken sort
that our twin transcribes as a non-word, and the archive printing is sound. I rendered the sound
reading in the English with no `[sic:]`, because a `[sic:]` would accuse a plate that the other
printing contradicts. **Whether the Latin should be patched to the sound printing is the
orchestrator's call.**

---

## P1 · 0477 — `Lambertii` in our twin, `Lamberti` on both plates

- **Plate:** archive n243, corners **477 / 478**, band of XV Kal. Oct. (17 Sept):
  `Apud Leodium, beati Lamberti episcopi Tungrensis`, clean.
- **Second witness:** Gallica f239 (corners 477/478): `beati Lamberti episcopi`, clean.
- **English as shipped** (`src/english/9215/0008.md`): "At Leodium, of blessed Lambert, bishop *Tungrensis*"
- **Proposed patch:** `find` `beati Lambertii episcopi` → `replace` `beati Lamberti episcopi`

## P2 · 0493 — `Beuuarriam` in our twin, `Beuuariam` on both plates

- **Plate:** archive n251, corners **493 / 494**, band of X Kal. Oct. (22 Sept):
  `Apud Beuuariam, ª sancti Emerammi`, clean (the ª is Bouillart's key; see the cruces).
- **Second witness:** Gallica f247 (corners 493/494): `Apud Beuuariam,`, clean.
- **Corroboration:** Solier's VARIANTES on the same page: *Puto Usuardum scripsisse Beuuariam*.
- **English as shipped** (`0009.md`): "At Beuuaria, of Saint Emerammus"
- **Proposed patch:** `find` `Apud Beuuarriam` → `replace` `Apud Beuuariam`

## P3 · 0547 — no stop in our twin, `consummavit. Eodem` on the plates

- **Plate:** archive n278, corners **547 / 548**, band of Nonis Oct. (7 Oct):
  `quae sub Marciano praeside martyrium consummavit. Eodem die,` with a clear full stop.
- **Second witness:** Gallica f274 (corners 547/548): a faint, worn point in the same place. The
  twin transcribes this weak state as no stop. Both printings carry the mark.
- **English as shipped** (`0009.md`): "who under the governor Marcianus consummated her martyrdom. On the same day,"
- **Proposed patch:** `find` `praeside martyrium consummavit Eodem` → `replace` `praeside martyrium consummavit. Eodem`

## P4 · 0555 — `gratia-directus` in our twin, `gratia directus` on both plates

- **Plate:** archive n282, corners **555 / 556**, band of VII Id. Oct. (9 Oct):
  `in Gallias praedicandi gratia directus, praefa-|tam urbem`, a plain word space, no hyphen, and
  not at a line break.
- **Second witness:** Gallica f278 (corners 555/556): `gratia directus`, no hyphen.
- **English as shipped** (`0009.md`): "directed by the Roman pontiff into the Gauls for the sake of preaching"
- **Proposed patch:** `find` `gratia-directus` → `replace` `gratia directus`

## P5 · 0609 — `iujuriam` in our twin, `injuriam` on the archive plate (press/wear variant)

- **Plate:** archive n309, corners **609 / 610**, band of X Kal. Nov. (23 Oct):
  `squalorem carceris, sitis ac famis injuriam et longissimi itineris laborem`. The page is
  heavily inked, but the word is sound at full resolution.
- **Second witness:** Gallica f305 (corners 609/610) prints `jujuriam`, an n turned to u, cleanly.
  Our twin transcribes that printing as `iujuriam`.
- **English as shipped** (`0010.md`): "the injury of thirst and hunger"
- **Proposed patch (orchestrator's call):** `find` `sitis ac famis iujuriam` → `replace` `sitis ac famis injuriam`
- **Note:** a `[sic: *iujuriam*]` was **not** fired, because the archive printing shows the word whole.

## P6 · 0629 — `multitudinem. Christo` in our twin, no stop on both plates

- **Plate:** archive n319, corners **629 / 630**, band of V Kal. Nov. (28 Oct):
  `cum innumeram gentis ipsius multitudinem Christo subdidissent, martyrium consummaverunt`, with no
  point after *multitudinem*. A stop there would cut a *cum*-clause off from its verb.
- **Second witness:** Gallica f315 (corners 629/630): no point either, only a speck ABOVE the C of
  *Christo*. That speck is likely what the digitization read as a stop.
- **English as shipped** (`0011.md`): "when they had subjected an innumerable multitude of that people to Christ, they consummated their martyrdom"
- **Proposed patch:** `find` `multitudinem. Christo subdidissent` → `replace` `multitudinem Christo subdidissent`

## P7 · 0685A — `Emiliam` in our twin, `Emiliani` on the archive plate (press/wear variant)

- **Plate:** archive n347, right corner **686** (the left margin is clipped on this scan; the
  running head is MENS. NOV.), band of Prid. Id. Nov. (12 Nov):
  `civitate Tirassona, beati Emiliani presbiteri et confessoris`, clean.
- **Second witness:** Gallica f343 (corners 685/686) prints `Emilianı`, the final i broken so that
  *-ni* reads as *-m*. Our twin transcribes that state as `Emiliam`, a real word (acc. of *Emilia*)
  in a genitive slot.
- **Corroboration:** Solier's VARIANTES on the same page discuss *Aemiliani* and the diphthong.
  Braulio's *Vita S. Aemiliani* is the Life the entry cites.
- **English as shipped** (`0011.md`): "of blessed Emilianus, presbyter and confessor"
- **Proposed patch (orchestrator's call):** `find` `beati Emiliam presbiteri` → `replace` `beati Emiliani presbiteri`

---

**Not patched (press variant, both clean):** 0621 `ad confessores, Civitate Narbona`. The twin
and Gallica f311 have a comma (Gallica breaks the line `confesso-|res,`). The archive n315 has
`con-|fessores. Civitate` with a full stop. Crux only; the English keeps the twin's comma.
