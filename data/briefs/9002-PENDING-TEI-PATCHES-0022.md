# 9002 — pending TEI patches, stint 0022–0026 (cols 0124A–0137C)

Sites where the plate was read and **our Corpus Corporum Latin diverges from what Migne printed**.
Per `translation-style.md` §"What the English translates — THE PLATE WHERE READ", the English in
these chunks renders **the plate**; the Latin twin must converge on it when the patch pass lands.

All three entries were read on **BOTH witnesses** (archive `patrologiaecurs06saingoog.pdf`,
PDF page = (col+11)/2, pp. 67–74; Gallica `ark:/12148/bpt6k54939667`, f = (col+1)/2, f62–f69),
**corner numbers checked first on every page and every leaf.**

⛔ **No `[sic:]` is fireable at any of the three**, and that is the point: the marker must quote a
word still present in our Latin, and at all three sites it would accuse Migne of the digitization's
error. The two `[sic:]` this stint *does* fire (@0131A `Excaevavit`, @0135B `Constristatus`) are the
opposite class — Migne's own type, confirmed on both copies, still verbatim in our Latin.

**Three patches out of sixteen archive candidates.** Fourteen of the sixteen were archive-copy
over-inking and are listed under "NOT patches" so that nobody files them later; the per-page ledger
is `data/briefs/9002-PLATE-READS-0022.json`.

---

## 1. @0130C — `Scaagesimum` for `Sexagesimum`, a non-word in our file, in a verse lemma

| | |
|---|---|
| **our TEI** | `VERS. 8.-- *Scaagesimum.* Quia in numero senario mundi ornatus expletus est` |
| **plate** | `VERS. 8. — *Sexagesimum.* Quia in numero senario mundi ornatus expletus est` |
| **witnesses** | archive p.70 (clear at 300 dpi) **and** Gallica f65 (blurrier at that line; re-fetched at native resolution, same eleven-glyph shape, no other reading available) |
| **class** | Corpus Corporum corruption of a lemma word |
| **marker after patch** | none. Nothing is defective on the plate. |

Chunk 0024. The English reads **"*Sixtyfold.*"**. ⚑ This is the site that most rewards reading
the plate inline rather than afterwards: `Scaagesimum` is a non-word, so by
`reference_plate-read-triage` it was worth raising — and had the range been translated first and
read later, the translator would have had to carry an untranslatable stump into an English lemma
(or guess). The gloss itself settles the sense (*in numero senario* — the number six), which is the
internal corroboration that proves an error exists and never whose. The plates settled the
ownership, and it is ours.

## 2. @0134A — a comma our file inserts

| | |
|---|---|
| **our TEI** | `quae a fluctibus saeculi ad, coelum trahit.` |
| **plate** | `quae a fluctibus saeculi ad coelum trahit.` |
| **witnesses** | archive p.72 **and** Gallica f67 — both set `ad coelum` closed up, no mark |
| **class** | Corpus Corporum: a spurious comma |
| **marker after patch** | none |

Chunk 0025. The English reads "which draws from the waves of the world to heaven", with no comma.

## 3. @0134D — a semicolon where both plates print a colon

| | |
|---|---|
| **our TEI** | `Quod ergo ait; *Hic est Joannes [n: (Joan. IV)]*.` |
| **plate** | `Quod ergo ait : *Hic est Joannes (Joan. IV).*` |
| **witnesses** | archive p.72 **and** Gallica f67 — both print a colon, with Migne's usual space before it |
| **class** | Corpus Corporum: a mark altered |
| **marker after patch** | none |

Chunk 0026. The English reads "What therefore he says: *This is John…*". **This is the single
deliberate band-level punctuation mismatch in this stint** — the 0134D band shows the English with
one colon more and one semicolon fewer than the Latin twin, and it is the plate-where-read rule
operating, not a supplied mark. It is the same class as the 0006–0011 stint's @0081D.

---

## NOT patches — the fourteen archive-only readings Gallica refutes

Filed here so that a later reader does not raise them again. Every one was read at 300 dpi on the
archive and then checked on the Gallica leaf; in every case **our twin already has the Gallica
reading**, i.e. our transcription is right and the archive copy's ink is wrong.

| col | archive prints | Gallica (and our twin) |
|---|---|---|
| 0124A | `(Ose. iv)` | `(Ose. vi)` |
| 0124B | `omnes saderdotes sumus` | `omnes sacerdotes sumus` |
| 0124D | `trangressor majori subjacet culpae` | `transgressor` |
| 0125C–D | `extinguit` · `extincto` · `extinxit` | `exstinguit` · `exstincto` · `exstinxit` |
| 0126B | `Si autem ego spiritu Dei` (no `in`) | `Si autem ego in spiritu Dei` |
| 0126C | `Unde alibi ;` | `Unde alibi :` |
| 0126D | `Domum illus` | `Domum illius` |
| 0128A | `esse Beelzebud` | `esse Beelzebub` |
| 0130A | `(RAB).` | `(RAB.)` |
| 0130B | `quia mentibus hominum` (no `a`) | `quia a mentibus hominum` |
| 0130C | `probitas a nimi` (split) | `probitas animi` |
| 0131A | `et sic cruxiferunt` | `et sic crucifixerunt` |
| 0131B | `bene regunt.` (terminal stop) | `bene regunt` — **no stop**, as our twin |
| 0133A | `surrexit et accendit in coelum` | `surrexit et ascendit in coelum` |
| 0133D | `carnis testitudine` · `Petrus et Andraeas` | `carnis testudine` · `Petrus et Andreas` |
| 0134A, 0134B | `quiquid` (twice) | `quidquid` |
| 0136D | `duitinae tribulationis` | `diutinae tribulationis` |

⚑ **The most instructive of the fourteen is @0133A.** The archive prints `surrexit et **accendit**
in coelum` — a *real, well-formed Latin word* in a sentence that wants `ascendit`, i.e. exactly the
shape that Pattern 18 exists for and that a translator meets as a genuine crux. Gallica prints
`ascendit`, as our twin does. Read on the archive alone this stint would have logged a conjecture
about Migne's text that has no basis at all.

⚑ **And @0131B runs the other way and is worth as much.** The archive prints a terminal stop after
*bene regunt* where Gallica and our twin print none. A translator reading only the archive would
have *supplied* a full stop the plate does not carry — Pattern 8's "never supply", broken by
trusting one photograph. The English ends that sentence without a mark.

---

## NOT a patch, and not a marker either — the press variant at @0125A

| | |
|---|---|
| **archive p.68** | `Non sit manus tua ad **accipiendum** porrecta` |
| **Gallica f62** | `Non sit manus tua ad **accipendum** porrecta` |
| **our twin** | `accipendum`, following Gallica |

Both settings are clean and normally spaced; neither line is over-inked. This is launch brief §6's
`Bethehem`/`Bethlehem` class and 8950's `Mititte`/`Mittite`: **two printings, not two photographs.**
There is no one to accuse, so there is **no `[sic:]` and no patch** — the crux carries it
(`src/english/9002/cruces-0022.md` §d). The English renders the sense ("to receive"), because the
word is legible in one of the two settings and a marker resting on the other would be a public
claim the second witness refutes.

---

## Checked negatives

- **Foot-of-page apparatus: a checked ZERO** for cols 0123–0138. The bottoms of archive pp. 67–74
  and Gallica f62–f69 carry no numbered `Forte` note, no asterisked cross-reference and no lettered
  note. Nothing in this range is owed a `[cn:]`.
- **The suspiciously-tidy direction (brief §4)** was looked for deliberately, whole lines at a time
  rather than target words. In this range **the digitization did not tidy anything**: all three
  patches run the other way, and at the four places where our Latin reads roughest — @0124C
  *Et vos ostenderet* (wants *ut*), @0129A *opera mea qui polluta mundo*, @0132A *aliam parabolam et
  non alteram*, @0137B *creaturam esse perducat* — **both plates print the rough reading**, so our
  transcription is faithful there.
