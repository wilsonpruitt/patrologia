# 8382 Egbert, *Poenitentiale* — pending TEI patches, stint C (chunks 0008–0010)

Sites where a translator opened the column at the plate and Migne's type differs from our
Corpus Corporum twin. **The English already renders the plate**; this file records the divergence
so the Latin converges on it when the patch pass lands.

Scan: archive.org `patrologiaecurs74unkngoog` (on disk, `raw/scans/pl089/`), PDF page =
(odd column + 13) / 2, corner numbers read first on every page. Single witness.

Format: one entry per site. `find` must match exactly once in the source XML.

---

## 0434B — full stop in our twin, COMMA on the plate (known from prep)

- **Opened by:** stint C (0008–0010), 2026-09-19
- **Plate:** PDF p. **223**, printed corners **433 / 434**, right column, cap. XXXII, line 2.
- **Our twin prints:** `adversus eum qui ad orationem illum excitavit. [cn: c | …] excommunicari debet`
- **The plate prints:** `adversus eum qui ad orationem illum excitavit,` line end; next line opens
  `ᶜ excommunicari debet, et non manducare quoad-|usque …`. The mark is a clear comma (descender
  below the baseline), and the note key *c* is set at the start of the following line, after it.
- **Why it matters:** with the full stop, *excommunicari debet* begins a new sentence with no
  subject and a lower-case initial; with the comma the canon is one conditional sentence
  (*Si quis … irascitur …, excommunicari debet*). The English renders the comma.
- **English as written** (`src/english/8382/0010.md`): "…against him who roused him to prayer,
  [nt: …] ought to be excommunicated…"
- **Proposed patch:** `find` `ad orationem illum excitavit.` → `replace` `ad orationem illum excitavit,`
- Punctuation only; no word moves; the `[cn: c]` injection point is unaffected.

## 0434D — *otiosa* in our twin, *otioso* on the plate

- **Opened by:** stint C, 2026-09-19
- **Plate:** PDF p. **223**, corners **433 / 434**, right column, cap. XXXIV, in the italic
  quotation: `Scriptum est enim : *De omni verbo otioso* | *quod locuti fuerunt homines, …*`
- **Our twin prints:** `*De omni verbo otiosa quod locuti fuerunt homines`
- **The plate prints:** `De omni verbo otioso` — final *o* clean and closed at 300 dpi, identical in
  form to the *o* of *verbo* beside it. The type is sound; the plate agrees with *verbo* and the
  twin's *otiosa* is a transcription slip.
- **English:** unaffected ("every idle word"); gender has no English exponent. No marker.
- **Proposed patch:** `find` `De omni verbo otiosa quod` → `replace` `De omni verbo otioso quod`

---

## ⚑ NOT a TEI patch — a seventh foot note, for the plate-notes file (report, not added)

- **PDF p. 222, corners 431 / 432.** Right column, first line (col **0432A**): *…quoniam mater
  illorum conti-|git ea, quae haec opponit ª.* Keyed at the foot of the UPPER section of the
  page (above the rule that opens *EX EJUSDEM EGBERTI…*), running full width:
  **`ª Mallem legere : *quoniam illorum matri convenit huic se opponere.* WILKINS.`**
- It is not one of the six recovered at prep. Our Latin chunk 0009 carries no `[cn:]` there, so
  per the brief it was **not** added to either twin (an English `[nt:]` without a Latin `[cn:]`
  would break the positional pairing). It belongs in `data/plate-notes/8382.tsv` as a letter key
  `a` at *opponit*, followed by a re-chunk. Its English twin, once injected, would read:
  `[nt: I would rather read: *because it befits their mother to set herself against this*. Wilkins.]`
- Note that the same page carries a SECOND note keyed `ª` (the Mansi note under *SUB TITULO*):
  the letters restart per section, so two `a` keys on one page is Migne's setting, not a clash.

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0431C cap. IV `a Domino exposcat`** — plate (p. 222, left col.) shows `Domiuo` at 300 and
  400 dpi: a turned or worn *n*. Single witness, worn sort; our twin's *Domino* is the word. **No
  patch, no marker.**
- **0431D cap. VI `stipendio`** — plate shows the *p* with a broken bowl (`stiοendio`). Worn sort.
  **No patch.**
- **0432C cap. VII `subjacebit`** — plate `subjaccbit`-looking, the *e* filled/worn. Worn sort.
  **No patch.**
- **0433B cap. XVIII `cum lacrymis`** — plate reads `com lacrymis` at 400 dpi (worn *u*). Single
  witness. **No patch.**
- **0433B cap. XVIII `in aliquo gradu in ecclesiastico praefixus`** — the plate line begins with an
  ink blot in the clipped left margin, then `…clesiastico`, then an unusually wide space before
  `praefixus`. Whether the second *in* stands at the line start cannot be read on this copy.
  **Indeterminate; no patch;** the English follows the twin.
- **0434B cap. XXXII `stultitiam suam, et ita`** — the plate shows a comma plus a speck (`suam,.`).
  Read as a speck, not a mark. **No patch.**
- **0434D `(Matth. I)`** — the plate really prints a single numeral stroke; the verse is Matt 12:36.
  Migne's citation, not the transcription's. **Must not be patched.**
- **0432A `contigit ea, quae haec opponit`** — plate agrees with the twin word for word (*conti-|git*
  across the column break). The sentence does not construe; Wilkins's note above is Migne's own
  answer. **No patch.**
