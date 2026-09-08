# 8949 *Liber Exodus* — pending TEI patches, stint 0010–0014 (cols 0205C–0221A)

Sites where this stint opened the column at the plate and Migne's type differs from our Corpus
Corporum twin. Per the locked rule (`translation-style.md`, "What the English translates"), the
English renders the plate; this file records the divergence so the Latin converges on it when the
patch pass lands. Do not edit `sources/pl/tei/8949.xml` or `data/tei-patches/8949.json` from here —
the orchestrator merges.

Format: one entry per site. `find` must match exactly once in the source XML.

Plate: Gallica `bpt6k5505319w`, leaf **f = ceil(column / 2)**, confirmed against the printed corner
numbers on all nine leaves of this range. Full pages fetched at `/full/full/` and cropped locally;
no crop crossed the centre gutter.

---

## 0209D — `maechaberis` in our twin, **`mœchaberis`** on the plate

- **Opened by:** stint 0010–0014, 2026-09-08
- **Plate:** leaf **f105**, printed corner numbers **209 / 210**, left column, band D.
- **Our twin prints:** `Quintum praeceptum est: *Non maechaberis,* etc.`
- **The plate prints:** `Quintum praeceptum est : *Non mœchaberis,* etc.` — the **œ ligature**, not `ae`.
- **Evidence:** the ligature is unambiguous at native resolution, and the same leaf-range supplies
  the control: at **0215D** (f108, left column, band D) Migne prints `quaedam mœchia`, which our twin
  transcribes correctly with `oe`. So the misreading is one sort in one word, not a systematic
  ae/oe policy in the transcription.
- **Why it matters, and it is not cosmetic.** Read from the twin alone, `maechaberis` is a live
  candidate on two separate tracks: a Pattern 9 ae/oe argument, and a Vulgate divergence against
  Ex 20:14's `Non moechaberis`. **Both evaporate at the plate** — Migne agrees with Ex 20:14 exactly,
  so the fifth precept is one of only two in Rabanus's series that does *not* diverge from Exodus.
  Had the column gone unread, this stint would have shipped a `[var:]` that is a false public claim
  about Migne's text.
- **English as shipped** (`src/english/8949/0011.md`): "The fifth precept is: *Thou shalt not commit
  adultery,* etc." — no `[var:]`, no `[sic:]`.
- **Proposed patch:** `find` `Non maechaberis` → `replace` `Non moechaberis`
- **Note:** one word, one letter-pair. `noteCount`, chunk boundaries and every marker count are
  unaffected. Whether the house transform should emit the `œ` ligature or the digraph `oe` is a
  separate question for the patch pass; the twin's neighbouring `moechia` sets the precedent for `oe`.

---

## 0209A–B — the attribution is set ROMAN on the plate, italic-and-unmarked in our twin

- **Opened by:** stint 0010–0014, 2026-09-08
- **Plate:** leaf **f105**, printed corner numbers **209 / 210**, left column, bands A–B.
- **Our twin prints:** `VERS. 32.-- *Et ingravatum est,* etc. *(AUG., quaest. [0209B] 29.)* Cum ablata esset locusta…`
- **The plate prints:** `VERS. 32. — *Et ingravatum est*, etc. (AUG., *quaest.* 29.) Cum ablata esset locusta…`
  — an ordinary **roman** parenthetical with only `quaest.` in italic, formed exactly like every
  other siglum on the same page (`(STRAB.)`, `(GREG., lib. XVIII Moral., c. 28, tom. II.)`,
  `(PROCOP.)`, `(ORIG., hom. 4.)`).
- **Evidence:** the whole page was read in three crops; every other attribution on it is roman and
  is carried by our twin as an `[n: …]` note. This one alone is wrapped in italics and carries no
  note markup at all, which is a markup failure of the transcription, not a change of Migne's type.
  The column anchor `[0209B]` falls inside the parenthetical in our twin and its position matches the
  plate's band letter, which sits beside the line beginning `29.)` — the anchor is correct.
- **What the English does, and why it does NOT render the plate here.** Converting this to `[n: …]`
  in the English alone would put a note in the English that the Latin twin does not have, and
  **note count and order are a sacred marker parity that `verify-english` enforces**. So the English
  keeps the twin's structure — the parenthetical rides as printed italic Latin, untranslated, since
  its content is a citation. This follows the shipped genre anchor, whose `*(Ibid, III)*` at
  8957/0000 is handled the same way. **This is the one site in the stint where the English
  deliberately follows the twin rather than the plate**, and it is recorded here for that reason:
  the patch must convert *both* sides in one pass.
- **English as shipped** (`src/english/8949/0010.md`): `*And it was made heavy,* etc. *(AUG., quaest. [0209B] 29.)* When the locust had been taken away…`
- **Proposed patch:** a markup-only correction that re-marks the run as a `<note>`, so that the
  chunker emits `[n: (AUG., quaest. 29.)]`. **Not one word of Migne changes**; `noteCount` for 0010
  goes 23 → 24, and the English must gain the matching `[n: …]` in the same commit.
- ⚠ **Do not apply this one silently.** It moves a marker count, so the English chunk and the
  frontmatter must be updated together or `verify-english` will fail on parity.

---

## 0219B — the Greek: our twin has `αἰὼνιον`, the plate appears to lack the iota. NEEDS A SECOND WITNESS.

- **Opened by:** stint 0010–0014, 2026-09-08
- **Plate:** leaf **f110**, printed corner numbers **219 / 220**, left column, band B; read at native
  resolution and again at **6× LANCZOS** on a crop containing only that line.
- **Our twin prints:** `quod Graece dicitur αἰὼνιον, non sic accipiendum est`
- **The plate appears to print:** `quod Graece dicitur α ὠνιον, non sic accipiendum est` — an alpha,
  a **visible gap**, then omega carrying a smooth breathing and a grave, with **no iota**.
- **Why this is NOT being patched or marked.** The intended word is certainly *αἰώνιον* — it is the
  word Augustine's *quaestio* 43 is about, and our twin supplies it. But three explanations fit what
  is on the leaf (Migne's setting genuinely lacks the iota; the sort is worn; the photograph has lost
  it), and **one witness cannot separate them.** The standing rule is explicit that the archive copy
  is 1-bit JBIG2, a symbol-substitution codec, and **may never be a sole witness for a letter** — and
  it is equally explicit that "our copy is poor" is a claim about a page, never about a scan, so the
  privilege can run either way here. Firing a `[sic:]` would accuse Migne on one photograph of a
  single Greek letter; patching would silently overwrite the plate with the twin.
- **What is needed:** one page of the archive copy, `patrologiaecurs04migngoog`, **PDF page 115**
  (= (219 + 11) / 2), rendered at 400 dpi, left column, band B. If it agrees with Gallica, this
  becomes a `[sic:]` and a patch is wrong; if it shows the iota, Gallica is the worse witness on this
  page and nothing is owed at all.
- **English as shipped** (`src/english/8949/0014.md`): carries the twin's `αἰὼνιον` verbatim.
- **Proposed patch:** **none yet.** Do not patch on the strength of this entry.

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0214D `[n: (ORIG.)] hom. 4 in Exod.)`** — the unbalanced parenthesis reads exactly like a Corpus
  Corporum failure and **is Migne's own**. The plate (f107, right column, band D) sets
  `(ORIG.) *hom. 4 in Exod.*)` — closed parenthesis, further citation matter, second closing
  parenthesis, no opener. Pattern 8 preserves it. **Never patch this**, and do not let a later reader
  fire a `[sic:]` on it either.
- **0207A `circum venit`** — one word, *circumvenit*, broken across a **line end with no hyphen**
  (f104, left column, band A). Our twin's space is the faithful rendering of that break. **No patch**,
  and the `[sic: *circum venit*]` a reader of the twin alone would fire was withdrawn. Same class as
  8957's `Per eat` / *Pereat*.
- **0208B `Digitus Dei hic est`** — the inverted word order is Migne's (f104, right column, band B),
  against `Digitus Dei est hic` five times elsewhere in this range. His text, not our transcription.
  **No patch, no marker.**
- **0210D `tu qui es`** and **0211A `quis es`** — Migne genuinely prints Rom 9:20 two different ways
  eleven lines apart, and our twin has both correctly. **No patch**; the first carries a `[var:]`.
- **0217B `profondum`** — Migne's own (f109, left column, band B), with `profundo` printed eight lines
  above. **No patch**; it carries the stint's only `[sic:]`.
- **0217D `Nisam`** — Migne's own (f109, left column, band D), with `Nisan` eight lines below.
  A proper name, so **no patch and no marker** on the 8950 `Bethehem`/`Bethlehem` precedent.
- **0215D, terminal full stop** — the last words of chunk 0012 show no stop on the Gallica copy where
  our twin has one (f108, left column, band D). A single point at a column foot that may not have
  inked. **Not patched in either direction**, and the English follows the twin. If a second witness
  is ever pulled for 0219B, this is on the facing leaf and costs nothing to check at the same time.
