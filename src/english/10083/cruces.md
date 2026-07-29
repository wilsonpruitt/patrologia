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

<!-- corpus-polarity-sweep 2026-07-28 -->
## Corpus polarity sweep — 2026-07-28

Blind Opus read of the Latin/English pair for sense-reversing defects (one word or
one letter asserting the opposite of what the context requires). 1 site(s).
Migne's defects are recorded here and rendered literally in the English; our own
errors were fixed in place. Full context: `data/sweeps/corpus-polarity/REPORT.md`.

### 0493D — sense-reversing-letter (ours, medium confidence)

Printed: *Quoniam adhuc modicum, [0493D] et visitabo sanguinem Jezrahel super domum Jehu, et requiescere faciam regnum domum Israel, et in illa die conteram arcum Israel, in valle Jezrahel*

Conjecture: **Hosea 1:4 reads 'et quiescere faciam regnum domus Israel' — 'I will cause the kingdom of the house of Israel to CEASE' (Douay). Migne's plate prints 'requiescere' (extra re-, plus 'domum' for 'domus'), and the English has followed the printed form lexically as 'make ... to rest', turning a sentence of destruction into a promise of repose. Render 'and I will bring the kingdom of the house of Israel to an end'.**

Damian cites this verse for one purpose only, stated in the sentence immediately before it: 'Quod utique nomen, quamvis prosperum significare videatur ... hic tamen vindictam Dei et furorem sonat' — 'although it seems to signify something prosperous ... here nevertheless it sounds the vengeance of God and fury.' A clause promising Israel's kingdom rest is the opposite of vindicta and furor, and it also contradicts the clauses flanking it inside the same quotation ('I will visit the blood of Jezrahel upon the house of Jehu', 'I will break the bow of Israel'). The paragraph after it repeats the point: 'Quod autem hic per Jezrahel, non salus, sive prosperitas, sed Dei potius ira signatur.'


### 0493D — sense-reversing letter (Migne's plate; resolved 2026-07-29)
Printed: *et **requiescere** faciam regnum **domum** Israel* (Hosea 1:4).

Conjecture: **quiescere faciam regnum domus Israel** — "I will cause the kingdom
of the house of Israel **to cease**" (Vulg./Douay).

Damian adduces the verse to prove that *Jezrahel* here sounds *vindictam Dei et
furorem*, introducing it with *cum protinus subinfertur*. As printed, the oracle
promises **rest**, so the proof-text contradicts the reading it is cited for.

**Ruling (Wilson, 2026-07-29): render literally, mark inline.** The scripture policy
is locked — translate what Migne prints, never substitute a conventional version —
so "to rest" stands, and the page now carries `[sic: *requiescere*]` so the reader
meets the defect there rather than only here.

**The Vulgate gloss did NOT go on the page, and that is a limitation, not a choice.**
Pattern 12 forbids it: a `[sic: …]` may only wrap type carried verbatim from the
plate, and `verify-english` enforces it — my first attempt bundled *"Vulg.*
quiescere*, 'cause to cease'"* inside the marker and was correctly rejected.
Pattern 13's `[ed: …]` is scoped to text our *source* has lost, which this is not.
**So there is currently no marker for "the plate's reading diverges from the
received text of a scripture citation" — the divergence lives only in this file.**
Worth a decision if it recurs; with 5,000+ works of scripture-quoting commentary
ahead, it will.
