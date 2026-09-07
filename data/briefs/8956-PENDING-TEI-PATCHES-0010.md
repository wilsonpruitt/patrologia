# 8956 — pending TEI patches, stint 0010–0014 (cols 1256A–1267A)

Filed under the locked rule *"What the English translates — THE PLATE WHERE READ"*
(`translation-style.md`). All three sites below were read at the plate; the English renders
Migne, and the Latin twin must converge on it when the patch pass runs.

Witnesses: **Gallica `ark:/12148/bpt6k5505319w`**, leaf `f = (column + 1) / 2` (calibrated
against the printed corner numbers on f628 = 1255/1256 and f634 = 1267/1268, and re-checked on
f629, f630, f631, f632 and f633 before any read); **archive.org
`patrologiaecurs04migngoog`**, PDF page `= (column + 11) / 2` (calibrated on p.636 = 1261/1262
and p.638 = 1265/1266).

---

## 1. col 1260C — a mood altered: `destruerat` → `destrueret`

- **Our TEI (`src/latin/8956/0012.md`):** `qui magicam destruerat artem`
- **The plate:** `qui magicam **destrueret** artem`
- **Witness:** Gallica f630, right column, read at native resolution and again on a 4× upscaled
  crop of the line. The final two letters are unambiguous: `-et`, not `-at`. The archive copy was
  not needed and was not consulted for this letter.
- **Why it matters:** the relative clause describes the Son of God whose birth the magi
  understood — *qui magicam destrueret artem*, a subjunctive of characteristic/purpose ("who
  should destroy the magic art"). The indicative pluperfect our TEI carries makes the destruction
  precede the nativity the sentence is about.
- **English as shipped:** "understanding that the Son of God was born, who should destroy the
  magic art".
- **Patch:** `destruerat` → `destrueret`.

## 2. col 1262D — a word altered: `et` → `ei`

- **Our TEI (`src/latin/8956/0013.md`):** `Quid post mensam ingruat et, vel, contemplare`
- **The plate:** `Quid post mensam ingruat **ei**, vel, contemplare`
- **Witnesses:** confirmed on **both printings** — Gallica f631 right column (read at native
  resolution and again at 3×; the letter carries no crossbar and no ascender, where every `t` in
  the same line does) and archive.org p.636 right column, where it prints as a plain dotted `i`.
  This is not a one-copy reading.
- **Why it matters:** *ingruat ei* gives the clause its indirect object — what falls upon
  **Balthasar** after the feast — and the next clause addresses him by name (*contemplare, o
  Balthasar*). Our TEI's `et` leaves the verb with no complement and a stray conjunction.
- **English as shipped:** "What may fall upon him after the table; or, behold, O Balthasar…"
- **Patch:** `ingruat et,` → `ingruat ei,`.

## 3. col 1267A — an intrusive full stop inside a lemma

- **Our TEI (`src/latin/8956/0014.md`):** `*Et erunt negotiationes ejus, et mercedes. ejus.*`
- **The plate:** `*Et erunt negotiationes ejus, et merce-des ejus.*` — the word breaks across the
  line as `merce-` / `des`, and there is **no stop between `mercedes` and `ejus`**.
- **Witness:** Gallica f634, left column, read at native resolution.
- **Why it matters:** the stop splits Is 23:18's `mercedes ejus` into two sentences inside the
  lemma, and a later reader collating the lemma against the Vulgate would meet a divergence that
  is our line-break artifact and not Migne's text.
- **English as shipped:** "*And her trafficking shall be, and her hire.*"
- **Patch:** `et mercedes. ejus.` → `et mercedes ejus.`

---

## NOT a patch — recorded so nobody re-opens it

**col 1265A — `potet` / `potest`: the two printings differ, and NOTHING is marked or patched.**
Gallica f633 sets *sic sphaera in loco declivi et spacioso stare non **potet***, read at 3.6× with
the terminal `-et` unmistakable, and our TEI agrees with it. The archive copy (p.638) sets
*potest*, clean. A single word defective on only one printing does not license a public
accusation against Migne's type — the reliable prior is the class split, not the shape — so no
`[sic:]` was fired, the English reads "cannot stand", and the twin is left alone. Same class as
8961 @0317D *conten nat*/*contemnat*, 8950's *Mititte*/*Mittite* and PL 114 @0073A
*Bethehem*/*Bethlehem*.
