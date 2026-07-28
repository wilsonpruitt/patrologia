# Cruces — 10083, Peter Damian, *De dignitate sacerdotii* (PL 145)

Garbled or doubtful type in Migne's plate, rendered literally and logged here.

- **col. 0492B (chunk 0001)** — `honestatis ac piae conversationis veste` … the
  clause `ne, quod absit, hanc perversi cujuslibet operis interpretatione
  disrumpat` has no clear antecedent for *hanc* other than *veste* (abl.).
  Rendered per the sense ("tear it apart"); no emendation made.

- **col. 0492D–0493A (chunk 0001)** — `ut Ecclesia, Christi in sua vigere
  munditia valeat`. The word order as printed is disordered (for *ut Ecclesia
  Christi in sua munditia vigere valeat*), and Migne's comma after *Ecclesia*
  makes it worse. Rendered from the evident sense, "that the Church of Christ
  may be strong to flourish in her own cleanness"; the printed order stands in
  the Latin.

- **col. 0493D (chunk 0001)** — `et requiescere faciam regnum domum Israel`.
  The Vulgate reads *quiescere faciam regnum domus Israhel*; Migne prints the
  accusative **domum**, which cannot construe with *regnum*. Rendered literally
  as an apposition ("the kingdom, the house of Israel"); not emended.

- **col. 0493D (chunk 0001)** — `*(Ibid)*` appears **inside** the guillemets, as
  an inline italic locator, in a work that otherwise cites through `[n: …]`
  notes. It refers back to Osee I. Passed through verbatim and **not** wrapped in
  an `[f: …]` tag: the referent is a scripture locus (the `[n:]` pool), not a
  fons, and tagging it would inject it into the fontes index wrongly. Flagged
  for a human decision if inline scripture locators are later given a marker of
  their own.

- **col. 0494B (chunk 0001)** — `per morum spritiualium honestatem`.
  **Printed:** *spritiualium*. This is not a Latin word — a transposition of
  *spiritualium*, which is the near-certain intended reading (the same treatise
  prints *spiritualis* correctly at 0491C and 0492B). Per Pattern 7 the non-word
  is carried into the English untranslated and in italics: "by the
  honorableness of *spritiualium* character." Not emended in either twin.

- **col. 0497D–0498A (chunk 0003)** — `merito jam, e in alios adhibita manus
  impositione transfundit`. The bare **e** between two commas is broken type;
  the intended reading is almost certainly *et* (or the *e* is a dropped
  catchword). Rendered literally: the stray letter is carried into the English
  as *e* rather than silently repaired.

- **col. 0497D (chunk 0003)** — `omne, quod cogitat, Deo sacrarium offerre non
  cessat`. *sacrarium* (a shrine) in the accusative beside *omne quod cogitat*
  is unconstruable; the expected word is *sacrificium*. Rendered literally
  ("to offer to God, as a sacred shrine, everything that it thinks"); not
  emended.

- **col. 0497D (chunk 0003)** — `cum Sanctum Domini equis freno superponitur`.
  *equis* (dat./abl. pl.) for the *equi* (gen. sg.) of the Zacharias lemma
  quoted two sentences earlier. Rendered literally, "upon the bridle for
  horses."

## Not cruces — flagged for a human

These are Migne's citation numerals, passed through **verbatim untranslated**
per the marker rule. None were corrected in the text.

- **col. 0494D (chunk 0002)** — `[n: (Levit. II)]` for the blood of the ram
  touched to the high priest's right ear, hand, and foot. The locus is
  **Levit. VIII, 23–24** (cf. Exod. XXIX, 20); Leviticus II is the cereal
  offering and contains nothing of the kind.

- **col. 0495B (chunk 0002)** — `[n: (Deut. XX)]` for *Si audieris vocem Domini
  Dei tui … faciet te Dominus Deus tuus excelsiorem cunctis gentibus*. The locus
  is **Deut. XXVIII, 1**; Deuteronomy XX is the law of war.

- **col. 0494A (chunk 0001)** — `[n: (Matth. VI)]` for *Non potest arbor mala
  fructus bonos facere*. The locus is **Matth. VII, 18**.

- **col. 0494D (chunk 0002)** — the quotation tagged `[n: (Coloss. I)]` runs
  *… et transtulit in regnum filii dilectionis suae, servitutemque peccati
  illius a nobis cruor abstersit.* Only the first half is Col. I, 13; the
  *servitutemque … abstersit* clause is Damian's own continuation carried inside
  the guillemets. Left inside the quotation, since the guillemets are Migne's.

- **col. 0496D (chunk 0003)** — `[n: (Num. XI.)]` on *sedebamus super ollas
  carnium*. The phrase is **Exod. XVI, 3**; Num. XI is the source of the melons,
  onions, and garlic in the immediately preceding sentence, so the note has
  probably slipped one clause. Note the anomalous internal period in the numeral
  (`XI.`), also preserved.

- **cols. 0497A → 0498A (chunk 0003)** — the column sequence jumps from 0497A
  straight to 0498A; there are no 0497B/C/D anchors in the TEI. Reproduced as
  transmitted.

- **chunk 0000** — the head `DE DIGNITATE SACERDOTII.` stands at the very end of
  the chunk with **no body**: the *Argumentum* and the dedicatory letter precede
  it, and the treatise proper opens with `CAPUT PRIMUM` at the head of chunk
  0001. The empty head is reproduced 1:1. A human should confirm this is Migne's
  layout (a running title set as a head) and not a chunker artifact.

- **attribution** — the addressee is given only as `Domno A. Venerabili
  archiepiscopo`. The initial is not expanded here.
