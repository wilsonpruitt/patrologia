# 8956 — pending TEI patches, stint 0015–0019 (cols 1267B–1280D)

Filed under the locked rule *"What the English translates — THE PLATE WHERE READ"*
(`translation-style.md`). All three sites below were read at the plate; where the English can
carry the plate's reading it does, and the Latin twin must converge on it when the patch pass
runs.

Witness: **Gallica `ark:/12148/bpt6k5505319w`**, leaf `f = (column + 1) / 2`, calibrated in this
stint against the printed top-corner numbers on all seven leaves f634–f640 (f634 = 1267/1268 …
f640 = 1279/1280). The archive.org copy (`patrologiaecurs04migngoog`) was not needed and was not
consulted: none of the three turns on a letter Gallica leaves ambiguous.

---

## 1. col 1273B — a dropped letter in a proper name: `Thapnis` → `Thaphnis`

- **Our TEI (`src/latin/8956/0017.md`):** `Thapnis civitas in qua magi contra Moysen signa fecerunt`
- **The plate:** `Thaphnis civitas in qua magi contra Moysen signa fecerunt`
- **Witness:** Gallica f637, left column, read at 1400px and again on a native crop of that single
  line. The `h` is unambiguous.
- **Why it matters, and why it is ours rather than Migne's:** the same paragraph spells the name
  `Thaphnis` three other times — in the lemma *Erant enim in Thaphnis*, in *usque in Thaphnis et
  Anes*, and in *non ausi sunt in Thaphnis manere* — and our TEI carries the `h` in all three. The
  plate carries it in all four. So this is a transcription slip, not a compositor's variant, and it
  is the sort a `[sic:]` would have wrongly pinned on Migne.
- **English as shipped:** "Thaphnis is a city in which the magicians wrought signs against Moses."
- **Patch:** `Thapnis civitas` → `Thaphnis civitas` (one occurrence).

## 2. col 1280A — markup escaping carried into the text: `VERS. 15.--&gt;`

- **Our TEI (`src/latin/8956/0019.md`):** `VERS. 15.--&gt; *Respondebit mihi.*`
- **The plate:** `VERS. 15. — Respondebit mihi.`
- **Witness:** Gallica f640, right column. The verse address is set exactly as the other 57 in this
  chunk are; there is no character after the dash.
- **Why it matters:** `&gt;` is an escaped `>`. It is not type, it is not punctuation Migne prints,
  and it is the only one of its kind in the work — a stray angle bracket that survived the TEI
  transform. Left in place it renders as a literal `>` on the Latin side of the parallel page and
  reads as a defect of Migne's.
- **English as shipped:** `VERS. 15.-- *He shall answer me.*`
- **Patch:** `VERS. 15.--&gt;` → `VERS. 15.--`.

## 3. col 1280C — Hebrew type dropped entirely: `Sehin (שחין)`

- **Our TEI (`src/latin/8956/0019.md`):** `Aiunt Hebraei [1280C] Sehin ulcus sonare, non vulnus`
- **The plate:** `Aiunt Hebraei Sehin (שחין) ulcus sonare, non vulnus`
- **Witness:** Gallica f640, right column, read on a native crop of that line. The four letters,
  right to left, are shin · heth · yod · final nun — שחין, the word of Is 38:21 (Migne's
  transliteration `Sehin`). Both the parentheses and the word are absent from our TEI.
- **Why it matters:** this is the class a peer met at 1248D of this same book, where `(דבר)` was
  lost. The gloss is *about the Hebrew word* — its whole point is that the Hebrew says *ulcer* and
  not *wound* — so the dropped parenthesis takes the evidence out of an argument built on it. It
  also means any future marker on `Sehin` would be firing against a text Migne did not set.
- **English as shipped:** the Hebrew is **not** carried into the English. Inserting it on our side
  alone would break marker and content parity with a Latin twin that lacks it; it goes in with this
  patch, and the English is revisited then if the twin comes to carry it.
- **Patch:** `Sehin ulcus sonare` → `Sehin (שחין) ulcus sonare`.
