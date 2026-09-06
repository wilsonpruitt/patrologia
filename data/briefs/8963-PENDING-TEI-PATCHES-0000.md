# 8963 — pending TEI patches from the 0000–0004 stint (2026-09-06)

**Seven patches, every one TWO-WITNESS CONFIRMED and every one OUR FILE'S defect, not Migne's.**
Cols 0379B–0391B, chunks 0000–0004. Reads recorded in `data/briefs/8963-PLATE-READS-0000.json`.

⚑ **The English of these five chunks already renders the PLATE**, per `translation-style.md`
§ "What the English translates — THE PLATE WHERE READ". Until these land, the English has
legitimately outrun its Latin at exactly these seven points and nowhere else.

⛔ **None of them may take a `[sic:]`, now or after the patch.** A `[sic:]` accuses Migne's type,
and at all seven sites Migne's type is sound on both copies. After the patch the words will no
longer be in our Latin at all, so the verbatim-substring guard would refuse the marker anyway.

## The patches

| col | chunk | our TEI reads | both plates read | class |
|---|---|---|---|---|
| 0383C | 0001 | `eupiunt` | `cupiunt` | non-word, c→e |
| 0383D | 0001 | `acci piat` | `acci-piat` (line-end break) | **de-hyphenation failure**, split run |
| 0384D | 0001 | `VERS. 59.` | `VERS. 39.` | digit |
| 0386D | 0003 | `Alicnati` | `Alienati` | non-word, e→c |
| 0389A | 0004 | `Invoiventque` | `Involventque` | non-word, l→i |
| 0390A | 0004 | `invonitur` | `invenitur` | non-word, e→o |
| 0390C | 0004 | `Exceptio ariete` | `Excepto ariete` | real word, wrong form |

### Notes on the two that are not simple letter swaps

**0384D `VERS. 59.` → `VERS. 39.`** — this is a verse address, and the withdrawn "digitization
normalizes Migne's verse addresses" class in `GLOSSA-NT-AGENT-BRIEF.md` makes that the single most
dangerous kind of claim to make on a photograph. It is made here anyway, and this is why: the
archive copy prints an unambiguous **39** at 600 dpi (no over-inking anywhere on p.197's right
column), Gallica f192 agrees, and the reading has an **external control the withdrawn class never
had** — the lemma is *Septingenti*, "seven hundred", and Nm 1:39 is Dan's **62,700**, while Nm 1:59
does not exist (Numbers 1 ends at v. 54). Three independent lines, two of them outside the
photographs. ⚑ It also happens to be the direction opposite to the one the withdrawn class
alleged: here it is OUR file whose number is wrong, not Migne's.

**0383D `acci piat` → `accipiat`** — Migne breaks *accipiat* across a line end as `acci-` / `piat`
and our TEI has kept the break as a space while dropping the hyphen. It is therefore **not** a
Pattern 10 split-type defect of Migne's, although it wears exactly that shape, and it must not be
carried into the English as one. This is the class the brief's §4 warns about running the other
way: an artifact of the digitization that looks like the plate's own defect.

## Also settled at the plate, and NOT patches

**FIVE PRESS VARIANTS.** The two copies of PL 113 are two printings in this range, and at five
sites they differ in a way ink cannot produce. **Our twin follows the Gallica printing at every
one.** No patch, no marker, crux only.

    col      Gallica (= our TEI)        archive copy
    0384C    lumbos                     lumbo         (Pr 30:31 reads lumbos)
    0384C    amieos                     amicos        (Jo 15:15)
    0384D    dexteram                   dextram
    0386A    Applica tribum  (LEMMA)    Accipe tribum (Nm 3:6 reads Applica tribum)
    0387D    Jesus Christi              Jesu Christi

⚑ **0384C `amieos` is the one that costs the reader something, and it is deliberately left
alone.** Our twin prints a non-word inside a scripture lemma (*Jam non dicam vos servos, sed
amieos*), and the obvious move is a `[sic:]`. It is refused: the archive copy prints a clean `c`,
so the two witnesses **disagree**, and 8950's measured bar is that a `[sic:]` needs two. The
English renders the sense ("friends") and the crux carries the whole story.

⚑ **0386A is a whole WORD differing between printings, not a letter.** That is a larger press
variant than anything recorded on this volume so far, and it is worth knowing about before the
next stint meets one: the archive's `Accipe tribum` is a perfectly sound reading (it anticipates
Augustine's own *Accipe tribum Levi* four words later), which is exactly what makes it dangerous —
a single-witness read would have "found" a divergence, argued it well, and been wrong.

## Trivia, recorded and deliberately not patched

- **0382A** `[n: (RAB. in Num. )]` — our twin carries a stray space before the closing paren that
  neither plate has.
- **0382D** `ut vocentur χιλίαρχοι. .` — our twin doubles the full stop; both plates print one.

Both are below the threshold at which a patch is worth a commit, and neither reaches the English.
