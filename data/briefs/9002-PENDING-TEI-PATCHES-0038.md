# 9002 — pending TEI patches, stint 0038–0041 (cols 0167A–0178D)

Sites where the plate was read and **our Latin has departed from Migne**. All three are Corpus
Corporum's, none is Migne's, and none is a `[sic:]` candidate — a `[sic:]` accuses Migne's type and
must quote a word still standing in our Latin, so at these sites the marker cannot even be written
until the patch lands.

Witness key: **A** = archive.org `patrologiaecurs06saingoog` (PDF page = (col + 11) / 2);
**G** = Gallica `ark:/12148/bpt6k54939667` (f = (col + 1) / 2). Corner numbers checked first on
every page.

---

## 1. @0175A — `Pro quam` → `Pro qua` ⭐ the one that changes the English

- **file**: `src/latin/9002/0040.md`, `VERS. 37.-- *Causam.*`
- **our Latin**: `Pro quam eum Judaei Pilato [0175A] tradiderunt.`
- **the plate**: `Pro qua eum Judaei Pilato tradiderunt.`
- **witnesses**: **both** — A p.92 col. B foot, G f87 col. B foot. Read letter by letter on each.
- **why it matters**: `qua` is the correct ablative after `pro` and the reading both printings
  carry; `quam` is not Latin here. Under `translation-style.md` §"What the English translates" the
  English already renders the plate ("For which the Jews handed him over to Pilate"), so **the
  English currently outruns its own Latin at this site until the patch lands** — which is precisely
  the drift that rule exists to make visible.
- **marker after the patch**: none is owed. With `qua` restored there is no defect to mark.

## 2. @0171B — a comma our twin supplies after `perdiderunt`

- **file**: `src/latin/9002/0039.md`, `VERS. 53.-- *An putas quia,* etc.`
- **our Latin**: `cum Tito et Vespasiano perdiderunt, homicidas illos, et civitatem illorum
  succenderunt.`
- **the plate**: `… cum Tito et Vespasiano perdi-|derunt homicidas illos, et civitatem illorum
  succenderunt.` — **no comma after `perdiderunt`**, which is hyphenated across a line break on
  both copies, so the mark could not have stood there.
- **witnesses**: **both** — A p.91 col. A, G f86 col. A.
- **why it matters**: the supplied comma detaches `homicidas illos` from its own verb and makes it
  read as an apposition. English punctuation cannot show the difference, so the English is
  unaffected and no marker is owed; the patch is for the Latin column's fidelity.

## 3. @0178A — a full stop our twin drops inside `[n: (Joan XX)]`

- **file**: `src/latin/9002/0041.md`, `VERS. 9.-- *Et ecce Jesus,* etc.`
- **our Latin**: `[n: (Joan XX)]`
- **the plate**: `(Joan. XX)` — with a period after `Joan`, exactly as the same work's other note
  sigla print it (`(Psal. CIX)`, `(Psal. CXIX)`, `(Luc. XXII)`, `(Joan. VIII)`, `(Act. I)`, all of
  which our twin has correctly).
- **witnesses**: **both** — A p.94 col. B, G f89 col. B.
- **why it matters**: small, but it is the only note siglum in the range our twin abbreviates
  differently from Migne, and `[n:]` contents are content-checked against the Latin twin, so the
  English carries the same defective form. Patch the Latin and the English follows.

---

## What is NOT here, and why

- **@0172A `rerurrectionis`** (`src/latin/9002/0039.md`, VERS. 69) is **not** a patch. Gallica f86
  prints `rerurrectionis`; the archive p.91 prints `resurrectionis`. **Two printings, not two
  photographs** — the same class as @0073A `Bethehem`/`Bethlehem` and 8950 @0171D
  `Mititte`/`Mittite`. Our twin faithfully reproduces the copy it was made from; changing it would
  substitute one printing's reading for the other's on no authority. Crux only, in
  `src/english/9002/cruces-0038.md` §(d).
- **@0172D `VERS. 4.` without the dash** is **not** a patch, for the same reason: the archive prints
  the dash, Gallica does not, our twin follows Gallica. A verse address may not be altered on one
  witness, the two witnesses disagree only about a dash and not about a digit, and nothing
  machine-readable consumes a `VERS.` number. Left exactly as it stands.
- **Nineteen further readings** raised from the archive copy are not here because **all nineteen
  were refuted at Gallica** and our twin is right at every one. They are listed in
  `src/english/9002/cruces-0038.md` §(e) so that the negative result is on the record rather than
  invisible.
