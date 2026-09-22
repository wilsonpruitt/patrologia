# 9215 Usuardus, *Martyrologium* (PL 124), chunks 0004–0007: pending TEI patches

Stint D, 2026-09-21. Sites where the plate was opened and Migne's type differs from our Corpus
Corporum twin. **The English in `src/english/9215/0004.md`–`0007.md` already renders the plate**;
this file is how the Latin catches up. Every `find` below was checked to match exactly once in
`sources/pl/tei/9215.xml`.

Witnesses: archive.org `patrologiaecurs76unkngoog`, leaf = (col + 9)/2 (held through the whole
range: n114 = 219/220, n218 = 427/428); Gallica `ark:/12148/bpt6k54939860`, f = (col + 1)/2
(held: f117 = 233/234, f214 = 427/428). Corners were read first on every page.

⚠ **PL 124 is two printings** (stint C's finding, relayed by the orchestrator). Our TEI follows the
Gallica printing. Entries are therefore in two classes:
- **A. Both copies agree against our TEI.** An ordinary transcription error: patch.
- **B. Press variant.** Gallica (and so our TEI) prints a non-word where the archive printing is
  sound. The English gives the sound reading with no `[sic:]`. The patch is filed **for the
  orchestrator's call**, since it would move the Latin from one printing of Migne to the other.

---

## Class A: both printings agree, our TEI is wrong

### 0233: *Badillart* → *Bouillart*
- **Plate:** n121 (233/234), band, last line; Gallica f117 (233/234), same line. Both: *[Addit Bouillart., ex margine cod. Prat.:*
- **Proposed patch:** `find` `Addit Badillart., ex margine` → `replace` `Addit Bouillart., ex margine`
- **English:** "[Bouillart adds, from the margin of the *Pratensis* codex: …]"

### 0261: missing full stop after *damnarunt*
- **Plate:** n135 (261/262) and Gallica f131 (261/262): *Omousii oppositione damnarunt. Romae in portu* (a full stop on both; on the archive it sits at line end).
- **Our twin:** `oppositione damnarunt` + newline + `Romae in portu`, no mark, which runs the Nisibis entry into the next commemoration.
- **Proposed patch:** `find` `oppositione damnarunt` → `replace` `oppositione damnarunt.`
- **English:** "…by the opposition of the *Omousion*. At Rome, at the Port, …"

### 0291: *Vicentii* → *Vincentii*
- **Plate:** n150 (291/292) prints *Vincen tii* (a wide space inside the word, not a division: one word); Gallica f146 (291/292) prints *Vincentii* clean.
- **Proposed patch:** `find` `sancti Vicentii.` → `replace` `sancti Vincentii.`
- **English:** "the birthday of Saint Vincent."

### 0337: *tenere* → *teneri*
- **Plate:** n173 (337/338), band line 2, and Gallica f169 (337/338): *Et mox a Daciano teneri jussi* on both.
- **Proposed patch:** `find` `Daciano tenere jussi` → `replace` `Daciano teneri jussi`
- **English:** "ordered by Dacianus to be seized" (the passive the plate prints; the twin's active infinitive has no subject).

### 0401: *logione* → *legione*
- **Plate:** n205 (401/402), band line 4: *legione Thebeorum*, clean; Gallica f201 (401/402), native-resolution crop: *legione*, the first *e* worn to a *c*-shape, the same shape every *e* on that line takes (*Thebeorum*). No *o*.
- **Proposed patch:** `find` `logione Thebeorum` → `replace` `legione Thebeorum`
- **English:** "from the legion of the Thebeans".

### 0405: *cadem* → *eadem*
- **Plate:** n207 (405/406), band line 5, and Gallica f203 (405/406): *cum reliquis ex eadem urbe* on both.
- **Proposed patch:** `find` `ex cadem urbe` → `replace` `ex eadem urbe`
- **English:** "sprung of noble stock from that same city".

### 0407: *In Africa.* → *In Africa,*
- **Plate:** n208 (407/408) and Gallica f204 (407/408): *condemnatus est. In Africa,* a comma on both (the archive sets *est.In* with no space).
- **Proposed patch:** `find` `condemnatus est. In Africa.` → `replace` `condemnatus est. In Africa,`
- **English:** "In Africa, the deposition of Saint Augustine".

### 0427: *promerunt* → *promeruit*
- **Plate:** n218 (427/428), band line 3: *lucro promeruit.*; Gallica f214 (427/428): *lucro promeruit.* (worn but *-uit*; no *n*).
- **Proposed patch:** `find` `lucro promerunt.` → `replace` `lucro promeruit.`
- **English:** "merited by a blessed gain to ascend to the kingdom of the heavens" (singular, Justus the subject).

---

## Class B: press variants, Gallica = our TEI is a non-word, archive sound (orchestrator's call)

### 0277: *sanctae garitae* → *sanctae Margaritae*
- **Archive** n143 (277/278), inside Bouillart's bracket: *Et in margine : Eodem die sanctae Margaritae virginis et martyris.]*, clean.
- **Gallica** f139 (277/278): *Eodem die sanctae* | *garitae virginis et martyris.]* The line break falls after *sanctae* and the next line opens *garitae*: the syllable *Mar-* is lost in that printing. Our TEI has the Gallica reading.
- Solier's own note on the same page (key ª, see cruces `## Keyed notes`) names her *Margaritam*, twice.
- **Proposed patch (press variant, orchestrator's call):** `find` `sanctae garitae` → `replace` `sanctae Margaritae`
- **English:** "of Saint Margaret, virgin and martyr." No `[sic:]`.

### 0365: *frivorum* → *frivolum*
- **Archive** n187 (365/366), band line 4: *quam aliquid frivolum et apocriphum*, clean.
- **Gallica** f183 (365/366): *frivorum*. Our TEI has the Gallica reading.
- **Proposed patch (press variant, orchestrator's call):** `find` `aliquid frivorum et` → `replace` `aliquid frivolum et`
- **English:** "than to teach anything frivolous and apocryphal". No `[sic:]`.

### 0389: *sanctornm* → *sanctorum*
- **Archive** n199 (389/390), band line 3: *civitate Egea, sanctorum Claudii*, clean.
- **Gallica** f195 (389/390): *sanctornm*, a turned *u*. Our TEI has the Gallica reading.
- **Proposed patch (press variant, orchestrator's call):** `find` `sanctornm Claudii` → `replace` `sanctorum Claudii`
- **English:** "of Saints Claudius, Asterius and Neon". No `[sic:]`.

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0253 *Cartaginensis*** (OCR lead *carthaginensis*): Gallica f127 prints *Cartaginensis* = our TEI;
  the archive n131 prints *Carthaginensis*. Both are real spellings: a press variant between two
  sound printings. Crux only. The English ("bishop of Carthage") is the same either way.
- **0379 *igni tradita sunt*** (no final stop): Gallica f190 prints no stop = our TEI; the archive
  n194 prints *sunt.* Press variant between sound printings; crux only, and the English carries no
  stop (Pattern 8: never supply).
- **0415 *quidam*** (OCR lead *quidem*): Gallica f208 prints *quidam* = our TEI; the archive n212
  prints *quidem*. Both real words: press variant, crux only. English "a certain Christian".
- **0339 *martyrizati*** (no final stop): no stop on either copy (n174, f170). TEI right.
- **0355 *die in*:** the archive n182 sets *diein* with no space; the twin's two words are right.
  No patch.
- **0291 *beati*** (OCR lead *beat*): the archive n150 wears the final *i* at the line end; Gallica
  f146 prints *beati*. TEI right.
- **0393 *Filium*:** the archive n201 prints lower-case *filium*. Capitalization only; no word moves,
  the English is unaffected. Not patched.
- **0277 Bouillart's leader dots** (*: . . . . .* in the twin, *:.....* on the archive): whitespace
  only, not a mark. No patch.
