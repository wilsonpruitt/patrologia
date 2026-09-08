# 8949 *Liber Exodus* — pending TEI patches, stint 0035–0039 (bands 0276B–0288B)

Sites where this stint opened the column at the plate and Migne's type or structure differs from
our Corpus Corporum twin. Per the locked rule, **the English already renders the plate**; this
file records the divergence so the Latin converges on it when the patch pass lands.

Plates: Gallica `bpt6k5505319w`, leaves **f138–f144**, printed corner numbers read first on all
seven. Full reads in `data/briefs/8949-PLATE-READS-0035.json`.

⭐ **The headline of this file is how SHORT it is.** Seven leaves were collated and our twin
proved faithful at every letter-level site, **including the three where it looks wrong and the
archive copy looks right** — see the withdrawn list below. This range produced no letter patch.

Format: one entry per site. `find` must match exactly once in the source XML.

---

## 0287D — `VERS. 25.--` in our twin, `VERS. 25 --` on the plate (no period after the number)

- **Opened by:** stint 0035–0039, 2026-09-08
- **Plate:** Gallica `bpt6k5505319w`, leaf **f144**, printed corner numbers **287 / 288**,
  LEFT column, at the very foot. Native crop, gutter not crossed.
- **Our twin prints:** `VERS. 25.-- <hi>Spoliaverat enim eum Aaron in ignominiam`
- **The plate prints:** `VERS. 25 — *Spoliaverat enim eum Aaron in igno-*` — the small-cap
  `VERS.` keeps its period, the numeral **25** does not, and the dash follows directly.
- **Evidence:** every other `VERS. n.` in these seven leaves prints a period after the numeral
  (`VERS. 24.`, three lines above on the same column, does), so this is a dropped sort rather
  than a house style, and it is the mirror image of the `VERS 1.` at 0276B, where Migne drops
  the period after `VERS` and our twin faithfully keeps it dropped. **Ours is the deviation
  here, his at 0276B.** Same class as `Vers. 9.` @0202D in the 0005–0009 stint's report.
- **English as shipped** (`src/english/8949/0039.md`): unaffected — a structural label, and
  Pattern 9 normalizes it in English regardless. This patch is for the Latin column only.
- **Proposed patch:** `find` `VERS. 25.-- <hi>Spoliaverat enim eum Aaron in ignominiam` →
  `replace` `VERS. 25-- <hi>Spoliaverat enim eum Aaron in ignominiam`
  (unique in the file: `Spoliaverat` occurs once; line 6884)
- **Note:** punctuation only, in a structural label. No word of Migne moves; `noteCount`, chunk
  boundaries and every marker count are unaffected.

---

## STRUCTURAL, not type — three of Migne's citations are not marked as notes

Same class as the peer's `*(AUG., quaest, [0262B] 86 in Exod.)*` at 0262A. In three places our
TEI wraps one of Migne's parenthetical citations in `<hi>` (an italic span) rather than `<note>`,
so it arrives in the chunk as body italics and not as an `[n: …]`. All three are plate-confirmed
as ordinary citations, set exactly like their neighbours which our twin *does* mark.

| col | line | our twin | should be |
|---|---|---|---|
| 0283B–C | 6576 | `<hi>(BEDA, ubi <pb n="0283C"/> snpra, cap. 11.)</hi>` | `<note>` |
| 0285A–B | 6695 | `<hi>(AUG., quaest 135 in <pb n="0285B"/> Exod.)</hi>` | `<note>` |
| 0286D–0287A | 6819 | `<hi>(AUG., quaest. 141 <pb n="0287A"/> in Exod.)</hi>` | `<note>` |

⛔ **Do not fix these blind.** Each carries a `<pb/>` **inside** the citation, which is very
likely why the transform failed on exactly these three, and moving the markup will move the
column anchor if it is done carelessly. The anchors are sacred (hard rule 1) and they are
currently correct.

⚑ **The English renders all three verbatim, untranslated, with the anchor in place**, following
the 0262A precedent — translating them would have made our page assert a note structure the
Latin twin does not have. If they are promoted to `<note>`, the English needs no change beyond
the `[n: …]` wrapper, but `noteCount` moves for chunks 0038 and 0039 and those chunks must be
re-verified.

⚠ **`snpra` inside the first of them is MIGNE'S OWN and must survive the patch** (see below).

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

⭐ **The first three are the ones that matter.** In each, our twin looks defective and the
archive copy `patrologiaecurs04migngoog` "corrects" it. **The plate is with our twin every
time.** This is the jbig2 symbol-substitution mechanism of `PL113-WITNESS-ENCODING.md` running
in the *repair* direction, three times in thirteen columns, and it is the exact inverse of the
0005–0009 stint's finding that four apparent defects of Migne's were Corpus Corporum's. **Both
directions are live in this book; neither twin may be trusted without the photograph.**

- **0277A `Sicuttibi`** (line 6143) — the plate fuses *Sicut tibi* into one word, unambiguously,
  at normal letter spacing. Our twin is faithful. The archive prints them apart. **No patch**;
  the English carries `[sic: Sicuttibi]`.
- **0283C `snpra`** (line 6578) — the plate prints `snpra`, the `n` unmistakable beside the `u`
  of `ubi` on the same line. Our twin is faithful. The archive prints `supra`. **No patch.**
- **0284B `uque ad`** (line 6631) — the plate prints `uque ad`, with the marginal band letter
  `B` beside it; the `s` of *usque* is simply absent. Our twin is faithful. The archive prints
  `usque ad`. **No patch**; the English carries `[sic: *uque ad*]`.
- **0279A `justitae`** (line 6287) — a `[sic:]` candidate raised from the twin alone and
  **withdrawn at the plate**: Migne sets the **æ ligature**, `justitæ`, his own contracted form
  of *justitiae*. Pattern 9 exempts it, and it is the `maechaberis` class of ADJUDICATIONS §3 —
  a divergence that exists only in our transliteration of a ligature. **No patch, no marker.**
- **0276B `VERS 1.`** — the plate drops the period after `VERS`, and the archive copy prints it
  the same way. **Migne's, on two witnesses. Never patch it** (the `VERS 20.` @0201C rule).
- **0276C `VLRS. 3.`** — a broken small-cap `E` in a structural label on the plate; our twin
  reads `VERS. 3.`. Not a patch: normalizing a section label is the one place normalization is
  right (Pattern 9), and the deviation is a worn sort, not a reading.
- **0285C `videant`** — the plate prints the active `videant` where the sense wants `videantur`.
  Our twin is faithful. It is a real Latin form in a real slot, so nothing is defective to patch
  and nothing is carried; the English renders the active and the crux carries the conjecture.
- **0285C `VERS. 35.` and `lib. I Moral.`** — archive-OCR false alarms (`Vers. 25`, `lib. X`),
  both refuted at the plate. **Our twin is right in both. No patch.**
- **0286B `VERS. VI.`** — Migne's own Roman numeral, set in small caps, the only one in this
  range. Our twin's capitals are the correct rendering of his small caps. **No patch.**
- **0287D–0288A `in ignominiam` split across the column break** — the plate breaks *igno-|miniam*
  at the column, and our twin's `<pb n="0288A"/>` sits inside the word. That is the faithful
  encoding of the break, not a Pattern 10 split run and not a `[d:]`. **No patch.**
