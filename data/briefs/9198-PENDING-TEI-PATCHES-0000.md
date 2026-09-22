# 9198 Usuardus, *Martyrologium* (PL 123) — pending TEI patches, stint A (chunks 0000–0003)

Sites where stint A opened the column at the plate (archive.org `patrologiaecurs29goog`,
leaf = (col + 29)/2, corner numbers read first on every page) and Migne's type differs from our
Corpus Corporum twin. Per the locked rule, **the English already renders the plate**; this file
records each divergence so the Latin converges on it when the patch pass lands.

Format: one entry per site. `find` is given against `sources/pl/tei/9198.xml` as it stands
(newlines in the XML shown as `\n`); each was checked to match exactly once. Single witness
throughout: PL 123 has no calibrated second copy to hand.

⚑ **Two entries carry a DEFERRED MARKER** (P2, P22): the plate prints a non-word or a form
with no grammatical slot, which under Patterns 7/12 takes a `[sic:]` — but `verify-english`
requires a `[sic:]`'s content verbatim in the Latin twin, and the twin does not yet carry the
plate's form. The English therefore renders the sense now, with the crux; **when the patch lands,
add the marker named in the entry** (`plate-gate` will be satisfied: the column is read).

---

## P1 · 0600C — missing full stop (Augustine prologue)
- **Leaf:** n314, corners 599 / 600, right column.
- **Twin:** `quo adjuvante possimus Colimus ergo` · **Plate:** `quo adjuvante possimus. Colimus ergo`
- **Find** `adjuvante possimus Colimus` → **replace** `adjuvante possimus. Colimus`
- **English as shipped** (0000): "…toward him by whose help we may be able. We honour the martyrs…"

## P2 · 0601 (Kal. Jan.) — *idorum* for *idolorum* ⚑ DEFERRED `[sic:]`
- **Leaf:** n315, corners 601 / 602, Usuardus band line 2.
- **Twin:** `cessate a superstitionibus idolorum` · **Plate:** `cessate a superstitionibus idorum`
- **Find** `superstitionibus idolorum` → **replace** `superstitionibus idorum`
- **English as shipped:** "cease from the superstitions of idols" (sense). **After patch:**
  "cease from the superstitions of idols [sic: *idorum*]". A dropped syllable, cleanly set, not a
  single letter; still single-witness. Same line prints `cnm diceret` (see "not patched" below).

## P3 · 0669 — *gladio*, not *gradio*
- **Leaf:** n349, corners 669 / 670. The *g* is slightly broken but the word is *gladio*.
- **Find** `gradio percussus` → **replace** `gladio percussus`
- **English:** "he was at length struck with the sword." (The twin's *gradio* is a digitization
  error, so no marker is owed to Migne.)

## P4 · 0669 — comma, not a dash
- **Leaf:** n349. **Plate:** `meruit confortari, post quae plumbo`
- **Find** `confortari - post quae` → **replace** `confortari, post quae`

## P5 · 0713 — *colliserunt*
- **Leaf:** n371, corners 713 / 714. **Plate:** `omne corpus ejus fustibus colliserunt ;`
- **Find** `coliiserunt` → **replace** `colliserunt`
- **English:** "they bruised his whole body with cudgels".

## P6 · 0687 — day head: the plate prints *Die 23.*
- **Leaf:** n358, corners 687 / 688; zoomed. A flat-topped italic 3 with no stem, against the
  stemmed 5 of *Die 25.* two pages on (n360).
- **Twin:** `IX <hi>Kal. Die</hi> 24.` · **Plate:** `IX Kal. … Die 23.`
- **Find** `24. </head>\n\n<pb n="0687"/>` → **replace** `23. </head>\n\n<pb n="0687"/>`
- **English (M1):** "## The ninth day before the Kalends · 23 January" (modern date from *Die n*,
  Roman date as printed), with a crux: IX Kal. Feb. is 24 January and X Kal. (n356) is also *Die 23*.
  Migne's own slip; a head carries no marker.

## P7 · 0729 — day head: the plate prints *H Non.*
- **Leaf:** n379, corners 729 / 730. A roman capital H, then italic *Non.*
- **Twin:** `Id <hi>Non. Die</hi> 4.` · **Plate:** `H Non. … Die 4.`
- **Find** `<head>Id <hi>Non.` → **replace** `<head>H <hi>Non.`
- ⚑ Neither form is the numeral II that *Die 4* requires; the patch only makes the twin say what
  the plate says. English head normalizes under Pattern 9 (section label): "The day before the
  Nones · 4 February". Crux logged.

## P8 · 0739 — comma before *Hic*
- **Leaf:** n384, corners 739 / 740. **Plate:** `sancti Moysetis episcopi, Hic primum`
- **Find** `Moysetis episcopi. Hic` → **replace** `Moysetis episcopi, Hic`

## P9 · 0739 (VI Id. Feb. band, on n385) — Bouillart's name, as printed in his bracket
- **Leaf:** n385, corners 741 / 742. **Plate:** `[Brouillart. : ª In provincia Lusitania`
- **Find** `Bouillart.:</hi> In provincia` → **replace** `Brouillart.:</hi> In provincia`
- English: "[Brouillart: In the province of Lusitania…". The raised ª (Bouillart's keyed note)
  is NOT added; reported separately.

## P10 · same bracket — *Salominis*
- **Plate:** `civitate Corduba, sancti Salominis martyris.` (the main text two lines on prints
  *Salomonis*, and the twin is right there).
- **Find** `Corduba, sancti Salomonis martyris. <hi>Et` → **replace** `Corduba, sancti Salominis martyris. <hi>Et`
- English: "of Saint Salominis, martyr" inside the bracket; no marker (M2: a Bouillart reading is a
  witness, not a defect).

## P11 · 0745 — *incensuros*
- **Leaf:** n387, corners 745 / 746. **Plate:** `vivam se eam incensuros, nisi`
- **Find** `incensures` → **replace** `incensuros`

## P12 · 0745 — the plate has no *intra*
- **Plate:** `illa paululum quid semetipsam deliberans` (line begins `lulum quid semetipsam`).
  Solier's VL on the same page quotes other codices *paululum quid ageret, intra semetipsam*.
- **Find** `paululum quid intra semetipsam` → **replace** `paululum quid semetipsam`
- English: "she, deliberating herself a little something," — rendered without the preposition the
  plate lacks. Crux logged.

## P13 · 0753 — full stop after *Africa*
- **Leaf:** n391, corners 753 / 754. **Plate:** `In Africa. sanctorum martyrum Saturnini` (same
  glyph as the full stop after *Barcinona* on the same line).
- **Find** `In Africa, sanctorum martyrum Saturnini` → **replace** `In Africa. sanctorum martyrum Saturnini`

## P14 · 0759 — full stop after *mancipatus*
- **Leaf:** n394, corners 759 / 760; line end, next line opens lower-case *cum*.
- **Find** `custodiae mancipatus,\ncum superari` → **replace** `custodiae mancipatus.\ncum superari`
- English: "was consigned to custody. when he could not be overcome, …"

## P15 · 0767 — *Paulus*, not *Pauli*
- **Leaf:** n398, corners 767 / 768. **Plate:** `de quo sanctus Paulus scribit Philemoni`
- **Find** `sanctus Pauli scribit` → **replace** `sanctus Paulus scribit`
- (Was an OCR candidate; archive's OCR read *paulus* and was right.)

## P16 · 0769 — comma, and *caelum*
- **Leaf:** n399, corners 769 / 770. **Plate:** `Donati, Secundiani, Romuli cum aliis` and
  `oculos ad caelum elevans`.
- **Find** `Secundiani. Romuli` → **replace** `Secundiani, Romuli`
- **Find** `ad coelum elevans` → **replace** `ad caelum elevans` (orthographic; English unchanged)

## P17 · 0769 — Bouillart's bracket reads *Ipso die*, not *In pago Tarvenensi*
- **Plate:** `[Apud Bouillart. : ... magnae virtutis viri. Ipso die, sancti Silvini Tolosanae civitatis episcopi.]`
- **Find** `In pago Tarvenensi sancti Silvini` → **replace** `Ipso die, sancti Silvini`
- English follows the plate: "[In Bouillart: . . . a man of great virtue. On this same day, of
  Saint Silvinus, bishop of the city of Toulouse.]". ⚠ A whole phrase, not a letter: our twin's
  reading is not on this plate at all. No marker: a Bouillart reading is a witness (M2).

## P18 · 0785 — *Polycarpi*
- **Leaf:** n407, corners 785 / 786. **Plate:** `Polycarpi autem condiscipulus et sodalis fuit.`
- **Find** `Policarpi autem` → **replace** `Polycarpi autem`
- English: "companion of Polycarpus" (the 26 Jan. and 23 Feb. entries print *Policarpi*, rendered
  Policarpus: Migne's spelling is the text).

## P19 · 0785 — *discipulis*
- **Plate:** `duobus Christi discipulis.` · **Find** `dicipulis` → **replace** `discipulis`

## P20 · 0785 — comma before the Bouillart bracket
- **Plate:** `conspicuus ministravit, [Apud Bouillart.`
- **Find** `conspicuus ministravit.\n[` → **replace** `conspicuus ministravit,\n[`
- English: "ministered the priesthood thirteen years, [In Bouillart, …]"

## P21 · 0791 — comma before *praedicavit*
- **Leaf:** n410, corners 791 / 792. **Plate:** `apud Judaeam Christi Evangelium, praedicavit.`
- **Find** `Evangelium praedicavit` → **replace** `Evangelium, praedicavit`
- English: "at Judaea the Gospel of Christ, preached."

## P22 · 0793 — *incensi. Serapionis* ⚑ DEFERRED `[sic:]`
- **Leaf:** n411, corners 793 / 794. **Plate:** `flammis incensi. Serapionis et Papias gladio caesi sunt.`
- **Find** `flammis incensi, Serapion\net Papias` → **replace** `flammis incensi. Serapionis\net Papias`
- English now: "burned with flames. Serapion and Papias were slain with the sword." **After patch:**
  "Serapion [sic: *Serapionis*] and Papias…": a genitive with no grammatical slot (Pattern 12 test 1),
  set beside the nominative *Papias*. Two letters, single witness.

## P23 · 0799 — full stop after *conversa est*
- **Leaf:** n414, corners 799 / 800. **Plate:** `ab Ariana impietate conversa est.` (line end)
- **Find** `impietate conversa est\nLugduni` → **replace** `impietate conversa est.\nLugduni`

---

## Examined at the plate and NOT patched (recorded so they are not re-opened)

- **0601 `cnm diceret`** (twin *cum*), n315: a turned *u*, one letter, one copy. Single-witness; no
  patch proposed, no marker; English "when he said".
- **0613 `compleverumt`** (twin *compleverunt*), n321: one letter, one copy; Solier's VL on the same
  page quotes the band as *compleverunt*. Single-witness; no patch, no marker.
- **0649 `edictus sit`** (twin *eductus*), n339: one letter, one copy, and a real word ("proclaimed").
  Solier's VL on the same page: *Eductus sit legit Beda, legunt puriores omnes codices*. Single-witness;
  English "led out" (the twin); crux logged. Orchestrator's call whether a single copy licenses a patch.
- **0627 `Eodem dic`** (OCR candidate): *e* and *c* are indistinguishable throughout that band
  (*ipsc*, *Eugcniani*). Twin right.
- **0645 `[addit Bouillart., …`**: plate lower-case *addit* vs twin *Addit.*; trivial, not patched.
  The bracket is unclosed ON THE PLATE too: Migne's own, never patch.
- **0763 `Civitatem Interamnis`** (accusative): printed so; Migne's type, never patch.
- **0599 `obtare`**: printed so (medieval spelling).
- **0713 `superat`**: printed so.
