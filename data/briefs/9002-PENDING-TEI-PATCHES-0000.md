# 9002 — pending TEI patches, stint 0000–0005 (cols 0063A–0078D)

Sites where the plate was read and **our Corpus Corporum Latin diverges from what Migne printed**.
Per `translation-style.md` §"What the English translates — THE PLATE WHERE READ", the English in
these chunks renders **the plate**; the Latin twin must converge on it when the patch pass lands.

Every entry below was read on **BOTH witnesses** (archive `patrologiaecurs06saingoog.pdf`,
PDF page = (col+11)/2; Gallica `ark:/12148/bpt6k54939667`, f = (col+1)/2), corner numbers first.

⛔ **No `[sic:]` is fireable at any of these**, and that is the point: the marker must quote a word
still present in our Latin, and it would accuse Migne of the digitization's error. Each becomes
fireable — or, more likely, becomes a non-issue — only once the patch lands.

---

## 1. @0068D — a full stop Migne prints and our twin has lost

| | |
|---|---|
| **our TEI** | `alter in principio sequentis Sed mystice secundum Augustinum` |
| **plate** | `alter in principio sequentis. Sed mystice secundum Augustinum` |
| **witnesses** | archive p.39 **and** Gallica f34 — both print the stop, clearly, at normal spacing |
| **class** | Corpus Corporum dropped a sentence-final mark |
| **marker after patch** | none. Nothing is defective on the plate. |

The English carries the full stop, so Pattern 8's "never delete a mark the plate prints" is obeyed
against the plate rather than against the twin. Chunk 0002, first paragraph.

## 2. @0071D — `oerum` for `eorum`, a non-word in our file

| | |
|---|---|
| **our TEI** | `sic prophetia non necessitatem oerum facit quae praedicit` |
| **plate** | `sic prophetia non necessitatem eorum facit quae praedicit` |
| **witnesses** | archive p.41 **and** Gallica f36 |
| **class** | Corpus Corporum corruption (metathesis) |
| **marker after patch** | none |

⚑ Worth recording *why the plate read mattered here*. The same sentence is restated four lines
later under a `HIER.` siglum with `eorum` spelt correctly in our own twin — textbook internal
corroboration, and by `reference_plate-read-triage`'s rule that corroboration proves an error
**exists**, never **whose** it is. The plate is what settles the ownership, and it settles it
against us. Chunk 0002.

## 3. @0076C — `pesecutio` for `persecutio`, a non-word in our file

| | |
|---|---|
| **our TEI** | `incepit in eum pesecutio: quae figuravit persecutionem sanctorum` |
| **plate** | `incepit in eum persecutio: quae figuravit persecutionem sanctorum` |
| **witnesses** | archive p.43 **and** Gallica f38 |
| **class** | Corpus Corporum corruption (dropped `r`) |
| **marker after patch** | none |

Same shape as (2): the correct form stands six words later in our own twin. Chunk 0004.

---

## NOT a patch, and recorded here so nobody files it as one

### @0073A — `Bethehem Judae` is a PRESS VARIANT, not a corruption

Gallica f37 prints the lemma **`Bethehem Judae`** (no `l`). The archive p.42 prints
**`Bethlehem Judae`**. Both are clean, legible and normally spaced, and the next line of *both*
copies sets `Bethlehem` correctly three times. **Our twin follows Gallica's printing and is a
faithful witness to it.**

This is the 8950 @0171D `Mititte`/`Mittite` case: a difference no ink can produce, i.e. **two
printings**. Under the corrected rule ("no claim about Migne's type stands on one witness, in
either direction") it takes **no `[sic:]`** and **no patch** — there is nothing to correct our
twin *to*. The English renders the place-name; the crux carries the finding.

⚑ The general fact behind it, established on the first page of this range and worth carrying to
the other stints: **the two copies of PL 114 are two printings.** Their line breaks diverge from
p.37/f32 onward. So a disagreement between them is evidence about the press, not automatically a
defect in the archive photograph — even though in this range the archive copy is by far the worse
witness (12 archive-only readings refuted by Gallica against 1 confirmed).
