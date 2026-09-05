# 8950 — pending TEI patches, stint 0024–0030 (cols 0133C–0147C)

**Stint-scoped file.** Merge into a work-level `8950-PENDING-TEI-PATCHES.md` at assembly;
written separately because peer stints were translating concurrently and a shared file would
have raced.

Filed under `translation-style.md` § "What the English translates — THE PLATE WHERE READ"
(locked, Wilson 2026-09-04). **The plate was read for every column in this range** —
archive.org `patrologiaecurs04migngoog`, PDF page = (column + 11) / 2, corner numbers read
first on every page: pp. 72 (133/134), 73 (135/136), 74 (137/138), 75 (139/140),
76 (141/142), 77 (143/144), 78 (145/146), 79 (147/148). Every entry below was re-cropped at
500–900 dpi.

⚠ **Nothing here is a `[sic:]` or a `[var:]` against Migne.** Each is a divergence between
Corpus Corporum's transcription and Migne's type. Where the plate carries a defect our twin
has tidied away, the English renders the sense (Pattern 7 as amended 2026-09-05) and **the
`[sic:]` is OWED but cannot be fired until the patch lands**, because `verify-english`
requires the marker's content to be a verbatim substring of the Latin twin.

⭐ **21 divergences, and they split three ways.** 13 are MIGNE'S defect tidied by CC (the
`[sic:]`-owed class); 4 are OUR corruption of a clean plate; 4 are mark-, address- or
Hebrew-level. This matches the 0008–0011 stint's finding exactly: **every plate defect in this
range is one our twin had already tidied away**, so not one `[sic:]` could be fired.

---

## Part A — MIGNE'S TYPE IS DEFECTIVE AND OUR TWIN HAS TIDIED IT (a `[sic:]` is owed)

| col | chunk | our twin | THE PLATE | note |
|---|---|---|---|---|
| 0133C | 0024 | `dixit sororem` | **`dixit sonorem`** | 500 dpi. *sonorem* is a real word but masculine and cannot be the predicate naming Sarah; the antithesis *Tacuit uxorem, dixit …* fixes the sense. English renders "said she was his sister". |
| 0136D | 0025 | `per quem` | **`par quem`** (wide space) | 600 dpi. English renders "through whom". |
| 0137C | 0026 | `acceperat` | **`accdperat`** | 600 dpi, a `d` for `e`. English renders "had received". |
| 0139C | 0026 | `incarnationem` | **`incana-tionem`** | 600 dpi, wrapped with a hyphen; the plate's own letters are *incana-*. English renders "incarnation". |
| 0140A | 0027 | `« Et mortua est in civitate Arbee, » etc.` | **`… » est.`** | 600 dpi. The parallel lemma four words earlier prints `etc.` correctly. English prints the cue. |
| 0140C | 0028 | `sed sub femore manum ponere jubet` | **`sed femore manum ponere jubet`** | 600 dpi, no `sub`, normal spacing either side. The same gloss's opening sentence prints *Manum sub femore jubet ponere*, and Gn 24:2 reads *subter femur meum*. English renders "under the thigh". |
| 0141A | 0028 | `electorum Ecclesia` | **`electorem Ecclesia`** | 600 dpi. A real word with no slot (accusative where the genitive plural is required). English renders "the Church of the elect". |
| 0141B | 0028 | `quia in eo quod credidit` | **`quia NON in eo quod credidit`** | ⭐⭐⭐ 600 dpi, the word well-formed and normally spaced. **Our twin has dropped a printed negation.** See Part D. |
| 0141C | 0028 | `carnem suam odio habuit` | **`caanem suam odio habuit`** | 600 dpi, in the Eph 5:29 quotation. English renders "his own flesh". |
| 0145A | 0030 | `« plenus. »` | **`« plenius. »`** | 600 dpi. An eye-skip from the *plenius* eight words above; the argument requires the bare *plenus*. **English renders the plate — "« more fully. »"** — because the word is real, occupies a real slot, and is inside a translated guillemet span. |
| 0146A | 0030 | `quot annorum fuerit Isaac` | **`quod annorum`** | 600 dpi. No English exponent. |
| 0146C | 0030 | `[n: (IV Reg. VIII)]` | **`(IV Reg. VII)`** | 600 dpi. Edom revolts under Joram at IV Reg 8:20, so VIII is right and Migne's page is wrong. `[n:]` contents are verbatim from the twin, so the English carries VIII. |
| 0146C | 0030 | `*seyr,*` (2nd occurrence) | **`segr`** | 600 dpi. The first occurrence prints *seyr* on both sides. A CARRIED form, so the English follows the twin (see §Convention below). |
| 0147B | 0030 | `qua induti` | **`quo induti`** | 600 dpi. A gender slip against feminine *vestis*; Pattern 9, no English exponent. |

## Part B — OUR TRANSCRIPTION IS DEFECTIVE AND THE PLATE IS CLEAN (no marker was ever available)

| col | chunk | our twin | THE PLATE | note |
|---|---|---|---|---|
| 0136C | 0025 | `quem pollicitus erat` | **`quam pollicitus erat`** | 600 dpi. CC normalized the plate's *quam* (which does not agree with *puerum*) to *quem*. No English exponent. |
| 0137C | 0026 | `pro eo quod est pro are` | **`… quod est probare`** | ⭐ 600 dpi, wrapped as `pro eo /` `probare` with no hyphen needed. **A split non-word that is ours, not Migne's** — exactly the class the series brief warns is indistinguishable from a Pattern 10 defect. English renders "for that which is 'to prove'". |
| 0138D | 0026 | `non hae sitavit` | **`non hæ-` / `sitavit`** | ⭐ 900 dpi at the line end: **the plate prints the hyphen.** A normal line wrap that our TEI turned into a split run. English renders "hesitated not". |
| 0141C–D | 0028 | `Quia praedicato:` | **`Quia praedi-` / `cator`** | ⭐ 600 dpi. CC lost the `r` at the column break and set a colon. English renders "Because the preacher …". |
| 0145A | 0030 | `quod animae est` | **`quod animale est`** | 600 dpi. The plate's *animale* is 1Cor 15:46's own word and the sentence's argument. English renders "that which is animal". |

## Part C — MARKS, ADDRESSES AND DROPPED HEBREW (the English follows the TWIN)

Per the 0008–0011 stint's ruling, §1(c): **words follow the plate, punctuation follows the twin.**
Following the plate on a mark manufactures a mismatch in the guillemet-parity and band-comparison
instruments that exist to find real ones.

- **Guillemets our twin SUPPLIES that the plate does not print:** the opening `«` before
  `Visitavit autem Deus Saram` (0134C); the closing `»` after `« Dure accepit,` (0135C); the
  opening `«` before `Non filii carnis` (0135D); the opening `«` before `Non peperceris` (0139C);
  the openings before `Surrexit Abraham` and `Quod cum audisset` (0140A, where the plate prints
  `»` in both places); the opening before `Non comedam` (0142B); the closing after
  `« Et intantum dilexit eam,` (0144A); the closing after `« Perrexitque` (0146A).
- **Guillemets our twin DROPS that the plate prints:** the second `«` before
  `Dixitque ad servum seniorem` (0140C); Migne's line-continuation `«` in
  `« Abraham vero aliam duxit uxo- « rem, »` (0144B); ⭐ **and, at 0143C, BOTH the `»` after
  `« Inclinata,` and the `»` before `Elevatio manuum`** — the plate prints two spans there and
  our twin has run them into one very long one. The English mirrors the twin's single span.
  ⚑ This is the shape the series brief names: an unmatched delimiter defeats a span counter in
  both directions. It did not here, because the twin's run is closed; but the inventory line for
  0143C is describing a span Migne did not set.
- **Other marks:** a semicolon after `Unde Habac. III` where the twin has a colon (0139B); the
  plate's `..` where the twin has `. . .` (0145D); no period after `Judaea pro nihilo habetur`
  (0144A–B); `« Simplex. «` (0147A) and `« teristrum, «` (0143D) where the twin closes.
- ⭐ **AN ADDRESS: 0145A.** The plate prints **`VERS 13.`** — no period after `VERS`, and the
  numeral a clear 3 at 900 dpi — where our twin prints `VERS. 12.--`. The next address is
  `VERS. 13-15.`, so Migne's page repeats the number and **Corpus Corporum has silently corrected
  the first to 12** (Gn 25:12 is the right verse for *Hae sunt generationes*). The English carries
  the twin's `VERS. 12.--`, because a `VERS. n.--` address is copied verbatim rather than
  translated and a divergence there would misalign the two columns' addresses. **This is the
  single most substantive normalization found in the range** and it is not detectable from the
  Latin alone.
- **Hebrew the plate prints and our TEI drops** (surviving as `( )` or as nothing): after *vegam*
  (0134A), after *sabaa* and after *Alon* (0137B), after *debir* (0138A), after *Beka* and
  *Schekel* (0141C), after *seyr* (0146C).

## Part D — ⭐⭐⭐ THE ONE THAT CHANGES WHAT THE PAGE ASSERTS: 0141B

> **plate:** *Vel aquam praebuit, quia **non** in eo quod credidit, vacua non remansit.*
> **twin:** *Vel aquam praebuit, quia in eo quod credidit, vacua non remansit.*

**Our twin has dropped a negation Migne prints.** Read at 600 dpi; the word is well-formed,
normally spaced, and unmistakable.

**The English carries it**, per Pattern 7a — *every* `non` the printed Latin has appears in the
English, "including when carrying it makes the sentence contradict itself" — and per the locked
plate-where-read rule. It reads:

> "Or she supplied water, because it was not in that which she believed that she did not remain
> empty."

The two hosts, named per test 2: the first `non` stands on the prepositional phrase *in eo quod
credidit* (constituent negation, fronted); the second on *remansit*. Both are on those hosts in
the English.

⛔ **This is the one place in the stint where the English asserts something its own Latin column
does not, and there is no marker able to say so.** A `[cj:]` was weighed and rejected: its form
(`*printed*; read *conjectured*`) cannot express a **deletion**, and the verbatim-in-the-twin
guard would be satisfied only by the other `non` in the same sentence, which is gaming it.
**Apply this patch before the work ships.** Until it lands, a reader of the parallel page will
see an English negative with no Latin exponent, which reads as our invention — and it is Migne's.

⚑ For the record, the conjecture: the plate's first *non* is very likely intrusive. Gregory's own
sense, and the next sentence (*Mox enim praedicavit quod audivit, et dicendo multos ex se
praedicatores protulit*), require that her faith was **not** empty. Nothing in the crux is
repaired in the text.

---

## The convention this stint applied, stated once so the merge can check it

Twelve sites in this range have a plate/twin word divergence. The English was set by one rule,
uniformly:

1. **Where the TWIN is the defective side** (Part B), the English renders the **plate** — the
   locked rule's own founding case.
2. **Where the PLATE is the defective side** (Part A) and its type **cannot render in place** —
   a non-word, a form with no grammatical slot, or a dropped word — the English renders the
   **sense the type is defective for** (Pattern 7 as amended 2026-09-05), with **no marker**,
   because the `[sic:]` guard requires the twin to carry the type and the twin has been tidied.
   Precedent: the 0008–0011 stint's "four non-words whose SENSE the English renders."
3. **Where the PLATE is the defective side but its type DOES render in place** — a real word in a
   real slot — Pattern 7's main rule is untouched and the English renders the **plate's word**.
   One site: `« plenius. »` at 0145A. Two more would fall here but have no English exponent at
   all (*quam*, *quod annorum*, *quo induti* — Pattern 9).
4. **Negation is the exception to (2).** Pattern 7a is unconditional, so at 0141B the plate's
   `non` is carried even though the twin lacks it.
5. **A form that is CARRIED untranslated follows the TWIN**, not the plate (`*seyr,*` at 0146C),
   because the English there *is* the Latin and a divergence would be indistinguishable from our
   own typo. A form that is TRANSLATED follows the plate.
