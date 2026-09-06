# 9002 — pending TEI patches, stint 0032–0037 (cols 0150B–0166D)

Sites where the plate was read and **our Corpus Corporum Latin diverges from what Migne printed**.
Per `translation-style.md` §"What the English translates — THE PLATE WHERE READ", the English in
these chunks renders **the plate**; the Latin twin must converge on it when the patch pass lands.

Both entries were read on **BOTH witnesses** (archive `patrologiaecurs06saingoog.pdf`,
PDF page = (col+11)/2 → pp. 80–88; Gallica `ark:/12148/bpt6k54939667`, f = (col+1)/2 → f75–f83),
corner numbers read first on every page.

⛔ **No `[sic:]` is fireable at either.** Patch 1 accuses a non-word that is **ours**, not Migne's,
and the marker could not quote a word that is still in our Latin once the patch lands. Patch 2 is
a **supplied** mark, which no `[sic:]` can quote at all.

⚑ **Both are Corpus Corporum's. Neither is Migne's.** That is the same result the 0000–0005 and
0016–0021 stints reported on their ranges.

---

## 1. @0153B — `oriminis` for `criminis`, a non-word in our file

| | |
|---|---|
| **our TEI** | `Et habet unius oriminis reos vendentes et ementes ecclesiastica officia.` |
| **plate** | `Et habet unius criminis reos vendentes et ementes ecclesiastica officia.` |
| **witnesses** | archive **p.82** and Gallica **f77**, both clean at normal letter spacing, corner numbers 153/154 confirmed on both |
| **class** | Corpus Corporum corruption (c → o) |
| **marker after patch** | none. Nothing is defective on the plate. |

The English renders *criminis*: *"And he holds guilty of one and the same crime both those who
sell and those who buy ecclesiastical offices."* Chunk 0033.

⚑ This is `GLOSSA-NT-AGENT-BRIEF.md` addendum A's non-word class, and the **CORRECTION TO
ADDENDUM A** applied as written: the non-word was the reason to fetch the second witness, not a
substitute for it. Both copies print `criminis`, so ownership is settled and it is ours.

## 2. @0153C — a full stop our twin SUPPLIES that neither copy prints

| | |
|---|---|
| **our TEI** | `*Infantium et lac.* Testes miraculorum. Christi infantes dicuntur, non aetate, sed simplicitate.` |
| **plate** | `*Infantium et lac.* Testes miraculorum Christi infantes dicuntur, non aetate, sed simplicitate.` |
| **witnesses** | archive **p.82** (`Testes mi-raculorum Christi infantes dicuntur`) **and** Gallica **f77** (`Testes miraculo-rum Christi infantes dicuntur`). The two copies break the word at different points — they are two printings — and **neither prints a stop after it.** |
| **class** | Corpus Corporum **supplied** a sentence-internal mark (the tidying direction of launch-brief §1) |
| **marker after patch** | none |

⛔ **This one changes what the English says, which is why it is worth the patch.** With the stop,
*Testes miraculorum* is a verbless predicate standing alone and *Christi infantes* is the subject
of the next sentence — "Witnesses of the miracles. They are called Christ's infants…". Without it,
*testes miraculorum Christi* is one phrase and *infantes* is the predicate of *dicuntur*. The
English follows the plate: *"Witnesses of the miracles of Christ, they are called infants, not by
age, but by simplicity."* Chunk 0033.

⚑ **A supplied mark is the class §1 says leaves nothing to notice**, and it was found only because
the line was read at the plate for a different word (`oriminis`) four lines above — addendum C's
"read the whole line" rule, met in the wild.

---

## Not patched, and why — the two sites a reader might expect here

- **@0155D `restitum` / `vestitum`.** Gallica f78 prints *Non restitum veste nuptiali*; archive
  p.83 prints *Non **vestitum** veste nuptiali*. **Both are clean**; the letters are an
  unambiguous italic `r` and an unambiguous italic `v` at 400 dpi. This is launch-brief §6's press
  variant (`Bethehem`/`Bethlehem`, 8950's `Mititte`/`Mittite`) and there is **no one to accuse**:
  no `[sic:]` (one witness), no patch (our twin faithfully follows one of the two printings).
  Crux only — `cruces-0032.md` §(d) 3.
- **@0158D `in est` for *id est*.** Confirmed on **both** copies, so it is **Migne's** and our twin
  is right. No patch; a `[sic: *in est*]` is fired in the English instead.
