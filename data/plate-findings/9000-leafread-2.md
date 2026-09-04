# Plate read — 9000 Luke, assignment 2 (leaves n135, n139, n140, n145, n148)

Scan: `raw/scans/pl114/patrologiaecurs06saingoog.pdf`. Map **PDF page = (column + 11) / 2**.
**Calibration:** p.135 corner numbers read **259 (left) / 260 (right)** — map confirmed.
Corner numbers re-read on every page: p.139 = 267/268, p.140 = 269/270, p.145 = 279/280,
p.148 = 285/286. All four agreed. No second witness was needed: no word under judgment fell
in a clipped margin on any of these five leaves.

---

## `[var:]` markers — 6 of 6 settled

### 1. 0259C (chunk 0006) — Col 3:9 + Eph 4:24 conflation

Claim: the quotation joins words from Col 3:9 and Eph 4:24.

**Plate prints (400 dpi, p.135 left col., below the C guide):**
> Apostolus : *Exuite veterem hominem cum actibus suis, et induite novum* (*Ephes.* IV).

Our file is word-for-word identical, including the dropped *hominem* after *novum*.

**CONFIRMED.**

### 2. 0267D (chunk 0010) — Lc 6:49 *Concidit* for *cecidit*

Claim: Vulg. reads *et continuo cecidit: et facta est ruina domus illius magna*.

**Plate prints (400 dpi, p.139 left col., below the D guide):**
> …quasi in puteo quo concidit fundum quo figatur non invenit. *Concidit et facta est ruina,* etc.

The italic lemma is set exactly as our file has it; *Concidit* is Migne's, and the running
prose two words earlier (*quo concidit fundum*) is his too.

**CONFIRMED.**

### 3. 0269A (chunk 0011) — Mt 8:13 *sanatus sit puer* (subjunctive)

Claim: Vulg. reads *Et sanatus est puer in illa hora*; the printed reading has the subjunctive.

**Plate prints (400 dpi, p.140 left col., between the A and B guides):**
> Matthæus planius explicat, quod dicente Domino : *Sicut credidisti fiat tibi, sanatus sit puer* (*Matth.* VIII).

*sit* is unambiguous at 400 dpi — no broken sort, no ink bridge; the *i* dot and the *t*
crossbar are both clean, and *est* prints twice in the surrounding lines for comparison.

**CONFIRMED.**

### 4. 0270A (chunk 0011) — Lc 7:22, *quae audistis et* dropped

Claim: Vulg. reads *quae audistis et vidistis*.

**Plate prints (400 dpi, p.140 right col., at the head of the A band):**
> VERS. 22. — *Et respondens dixit illis : Euntes renuntiate Joanni quæ vidistis*, etc.

No *audistis et* on the plate; the line is unbroken (no column or line turn inside the clause),
so no hyphen-rejoin could have eaten it.

**CONFIRMED.**

### 5. 0280C (chunk 0015) — 1 Jo 3:2, clause replaced

Claim: Vulg. reads *Scimus quoniam cum apparuerit, similes ei erimus: quoniam videbimus eum
sicuti est*.

**Plate prints (400 dpi, p.145 right col., in the C band):**
> …sed Domino montem ascendente fulget, quia *nondum apparuit quid erimus, sed tandem similes
> ei erimus, quando videbimus eum sicuti est.*

*sed tandem* and *quando* are Migne's; the received *Scimus quoniam cum apparuerit* is simply
not on the page.

**CONFIRMED.**

### 6. 0285B (chunk 0017) — Lc 12:48 + Sap 6:7 joined under one citation

Claim: Vulg. Lc 12:48 has *cui multum datum est, multum quaeretur ab eo* (future); the second
clause is Sap 6:7, and the two are joined here under one citation.

**Plate prints (400 dpi, p.148 left col., at the A/B turn — the line break falls at *tor-/menta*,
with the B guide beside the third line):**
> Et ideo *cui multum donatum est, multum ab eo quæritur, et potentes potenter tormenta
> patientur* (*Sap.* VI).

*donatum* and *quaeritur* are both plainly set; the note reads *(Sap. VI)* alone.

**CONFIRMED.**

---

## Declined oddities settled (from `src/english/9000/cruces.md`)

### ⭐ 0259A — *jejumare* → **WITHDRAWN (our file). Correct reading: `jejunare`.**

Stint 0006 logged *nec jejumare possumus* as a non-word, declined to mark it, and named it its
top oddity.

**Plate prints (400 dpi, p.135 left col., A band):**
> Quandiu sponsus nobiscum est et in lætitia sumus, nec jeju-
> nare possumus, etc., *usque ad* tunc filii sponsi je-
> junabunt…

**This is the hyphen-rejoin class.** Migne breaks the word across a line as `jeju-` / `nare`;
Corpus Corporum rejoined the two halves and mis-read the initial *n* of the second half as *m*.
Migne's type is clean — the *n* of `nare` at the line head has two full minims and no third.
(The very next line does the same thing again with `je-` / `junabunt`, rejoined correctly.)

**Latin patch: `jejumare` → `jejunare` at 0259A** (chunk 0006, `VERS. 34.-- *Nunquid enim
potestis.*`). The English carries the non-word in italics per Pattern 7 and will need the same
repair.

### 0267C — lemma *Supra terram* — **Migne's. No patch.**
Plate p.139 left col., C/D area: `VERS. 49. — *Supra terram*, etc.` set in italic exactly as our
file has it. *supra* (not Lc 6:49's *super*) is the printed reading. Settled at 200 dpi, checked
at 400.

### 0267B — *quando Ecclesia utraque est consummata* — **Migne's. No patch.**
Plate p.139 left col.: *Ecclesia utraque est consummata*, both words clean. The conjecture
*utrimque* has no support on the plate.

### 0269C — *Filius unicus matri suae* — **Migne's. No patch.**
Plate p.140 left col., C/D area (400 dpi): `*Filius unicus matri suæ.* (AMBR.)` — the dative
*matri* is Migne's, not our file's. The rendering "the only son **to** his mother" stands, and a
`[var:]` here would now be defensible; the stint's decision to decline is not disturbed by me.

### 0270D — *ad virtutem subeundae virtutis* — **Migne's. No patch.**
Plate p.140 right col., D band (400 dpi): *Prophetico ergo exemplo ad virtutem subeundæ virtutis
hortatur.* The repeated *virtutem/virtutis* is on the plate.

### 0270D — *Ecce quae in veste pretiosa* — **Migne's. No patch.**
Same crop: *tur. Ecce quæ in veste pretiosa.* The feminine *quæ* (against Lc 7:25 *qui*) is
Migne's, and it is unitalicised on the plate as our file has it.

### 0270D — *exteros coelestis regni* — **Migne's. No patch.**
Same crop: *exteros cœlestis regni, sub jure dæmonum…* The dangling accusative is printed.

### 0270D — *Mollibus vestimentis indutum* — **Migne's. No patch.**
Same crop: `VERS. 25. — *Mollibus vestimentis indutum.*` (declined against Lc 7:25 *vestibus*).

### 0279A — *paternae positionis arcana* — **Migne's. No patch.**
Plate p.145 left col., line 2 (400 dpi, magnified): *…sed in-* / *comprehensibilia paternæ
positionis arcana solus penetrat*. **The word is mid-line, with clear spaces either side — no
hyphen, no line turn**, so the "lost prefix / hyphen-rejoin shape" the crux suspected is ruled
out. *dispositionis* is not what Migne set.

### 0280A — *visuros dilationem Ecclesiae* — **Migne's. No patch.**
Plate p.145 right col., first line of the A band (400 dpi): *promittit aliquos de discipulis
visuros dilationem Ecclesiæ antequam per mortem recedant de mundo*. *dilationem*, not
*dilatationem*. The reading rendered stands.

### 0280B — *Et factus est* — **Migne's. No patch.**
Plate p.145 right col. (400 dpi): `VERS. 29. — *Et factus est.*` The masculine is Migne's; our
file did not manufacture it.

### 0280C — *jam divinarum sensus albescit lectionem* — **Migne's. No patch.**
Plate p.145 right col., end of the C band (400 dpi): *ita et oculis mentis tuæ jam divinarum
sensus albescit lectionem.* Both non-construing words print as we have them; *lectionum* is a
conjecture with no plate support.

### 0285B — *sunt pejores gentilibus, naturale solummodo jus dissipantibus* — **Migne's. No patch.**
Plate p.148 left col. (400 dpi): *et sunt pejores gentilibus, naturale solum-* / *modo jus
dissipantibus*.

### 0285B — *cum illae civitates praedictae … Tyrus et Sidon olim fuerunt amicae* (cum-clause with no apodosis) — **Migne's. No patch.**
Plate p.148 left col. (400 dpi): *Impleta videmus verba Salvatoris, quia* / *cum illæ civitates
prædictæ, Domino præsente cre-* / *dere noluerunt, Tyrus et Sidon olim fuerunt amicæ* / *David
et Salomoni…* — the splice is Migne's.

### 0286A — *ut unde illi ceciderunt sublevati, isti ascendant humiliati* — **Migne's. No patch.**
Plate p.148 right col., first line of the A band (400 dpi), verbatim.

### 0286B — *Cum audis omnia, agnoscis omnipotentem, non decolorem, non degenerem Patris* — **Migne's. No patch.**
Plate p.148 right col. (400 dpi), verbatim.

### 0286D — *ejusdem gentis* — **Migne's. No patch.**
Plate p.148 right col., D band (400 dpi): *…proximior fuit quam sacerdos vel Levita ejusdem
gentis.*

---

## ⚠ Unmarked divergence found while the page was open

### 0280C — our `in altera specie apparuit` vs plate **`in altera species apparuit`**

Chunk 0015: *Quia sicut illis apostolis in altera **specie** apparuit ipse et vestis ejus
refulsit…*

**Plate prints (400 dpi, p.145 right col., C band, magnified 2×):**
> Quia sicut illis / apostolis in altera **species** apparuit ipse et vestis ejus

The final *s* is unambiguous and followed by a normal word space. Migne sets the (ungrammatical)
nominative *species*; our file carries the tidy ablative *specie*. **This is a Corpus Corporum
silent normalisation and the Latin should be patched to `species`.** No marker stands on it — I
raise it because it is exactly the class the plate exists to catch, and because it changes
nothing in the English ("in another form/appearance") whichever way it is set. If it is patched,
it becomes a candidate for a `[sic:]`; that is an editorial call above my station.

*(Minor and not worth a patch: at 0280B the plate sets `multi vocati pauci electi` without the
comma our file prints between *vocati* and *pauci*. Punctuation only.)*

---

## Columns read

**Read at the plate, corner numbers checked first:** 0259 (A–D), 0260 (A–D), 0267 (A–D),
0268 (A–D), 0269 (A–D), 0270 (A–D), 0279 (A–D), 0280 (A–D), 0285 (A–D), 0286 (A–D).

**Read and found nothing:** 0260, 0268, 0279 (apart from the *positionis* oddity, settled as
Migne's), 0285C–D, 0286C. No marker of mine stood on 0260, 0268 or 0286, and the targeted
collation of our Latin against those columns turned up no divergence.

⚠ **Scope note.** The collation behind the "found nothing" line is *targeted*, not exhaustive:
every marker, every crux entry falling in range, and a full read of each page at 200 dpi with
400 dpi crops at each site under judgment. A word-by-word collation of all ten columns was not
performed, and the *specie/species* find above is a reminder that such a pass would likely turn
up more of its class.

---

**Counts: 6 `[var:]` markers — 6 CONFIRMED, 0 WITHDRAWN, 0 UNRESOLVED.
16 declined oddities settled — 1 WITHDRAWN (0259A *jejumare* → *jejunare*, hyphen-rejoin),
15 confirmed as Migne's. 1 unmarked divergence found (0280C *specie* → *species*).**
