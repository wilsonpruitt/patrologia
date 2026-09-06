# 8963 — pending TEI patch from the chunking spot check (2026-09-05)

**One patch, two-witness confirmed. NOT APPLIED: the reading is settled, the ENCODING is a
convention question that reaches four sibling books, two of them shipped. See the class note below.**

## The patch

Migne opens every book of the Glossa with a display line under the `LIBER …` banner giving the
book's Hebrew name (and, where he has one, its Greek). Corpus Corporum drops the whole line.
8963's TEI body opens straight at `<head>PRAEFATIO.</head>`.

**The plate, cols 379/380 (archive p.195 · Gallica f190), both witnesses:**

    LIBER NUMERI.
    Hebraice VAIEDABBER (וידבר), id est : ET LOCUTUS EST.

⭐ **The Hebrew was NOT settled on the archive copy.** At 1800 dpi its third letter blots toward a
resh, which would give `וירבר` — a non-word. Gallica at ~8× sets it cleanly: vav-yod-**dalet**-bet-resh,
`וידבר`, which is also what Migne's own printed transliteration VAIEDABBER asserts. The plate carries
its own control for this letter, and it agrees with Gallica. Read letter by letter, not by shape.

**Insertion point:** immediately before `<head>PRAEFATIO.</head>`, i.e. between the end of Leviticus
at 0379A and the `<pb n="0379B"/>` mark, which is where the banner physically sits on the page.

⛔ **The open question is the element, not the words.** The chunker takes the FIRST `<head>` of a
unit as the unit head, so a second `<head>` here would displace `PRAEFATIO.` A `<p>` renders the
line as a paragraph of the praefatio, which it is not. This wants one ruling, applied identically
across all five books, rather than five ad-hoc encodings.

## ⚑ THIS IS A CLASS, NOT A SITE — 5 of 5 Glossa Pentateuch books, and CC drops it in every one

Read at the plate on the archive copy, corners checked first on each page:

| work | plate | the line Migne prints | in our TEI? |
|---|---|---|---|
| 8950 Genesis **(SHIPPED)** | p.39, col 67 | *Hebraice dictus* בראשית, BERESIT, *id est* PRINCIPIO; *Græce* ΓΕΝΕΣΙΣ, *id est* GENERATIO. | no |
| 8949 Exodus | p.97, col 183 | *Hebraice* VEELLE SEMOTH (ואלה שמות), *id est*, HÆC SUNT NOMINA; *Græce* ΕΞΟΔΟΣ, *id est* EXITUS. | no |
| 8961 Leviticus | p.153, col 295 | *Hebraice* VAIICRA (ויקרא). | no |
| 8963 Numbers | p.195, col 379 | *Hebraice* VAIEDABBER (וידבר), *id est* : ET LOCUTUS EST. | no |
| 8945 Deuteronomy **(SHIPPED)** | p.228, col 445 | *Hebraice* ELLEH HADDEBARIM (אלה הדברים), *id est* HÆC SUNT VERBA. | no |

⛔⛔ **Genesis's p.39 was READ during the 8950 session** — it is the page the `(a) Revocantur lector
ad tomos Patrologiae nostrae. EDIT.` foot note was recovered from. The read was scoped to the **foot**
apparatus and walked past a dropped line in the **head**, on the same page, in display type.
**A plate read is scoped to the question it was sent to answer.** The corner-first discipline gets
the reader to the right page; it does not make the reader see the whole page. Genesis and
Deuteronomy are live on migne.app opening one line short of their own plates.

⚑ Only the Hebrew/Greek letters here need the second witness; the Latin frame is unambiguous at
300 dpi on either copy. Gallica leaf map for PL 113: **f = (column + 1) / 2**.

## Also settled at the plate, and NOT a patch

**0379B `quadripertitum` — REFUTED, and it is a press variant.** The archive copy prints
`quadripartitum`; Gallica f190 prints `quadripertitum`; **our TEI reads `quadripertitum` and is
right.** A clean `a` on one copy and a clean `e` on the other is not ink — it is two printings, the
same class as `Mititte`/`Mittite` at 8950 0171D. Had this been applied on the single confident
600 dpi read it would have changed our Latin, permanently and silently, toward a reading one
printing of Migne does not carry. **The gate did exactly what it exists for, on the first candidate
this work produced.**
