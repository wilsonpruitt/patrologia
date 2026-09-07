# Cruces — 8956 *Liber Isaiae prophetae*, chunks 0015–0019 (cols 1267B–1280D)

Stint-scoped. The orchestrator merges these into the work's `cruces.md`.

All seven leaves in this range (Gallica `ark:/12148/bpt6k5505319w` f634–f640, `f = (column + 1) / 2`,
calibrated against the printed corner numbers before any reading) were read at the plate and the
running text collated word by word against our Latin. **The foot of every column in the range is
blank** — this book sets neither the numbered nor the asterisk conjecture layer here. Three
digitization losses were found and are filed in `data/briefs/8956-PENDING-TEI-PATCHES-0015.md`.

The work sets **no guillemets at all** in these five chunks (0 `«`, 0 `»`), as the peer stint
reported for its own range: every lemma is italic. Span count reconciles exactly — 327 marked spans
in the Latin against the brief's 327, paragraph-bounded (52 + 76 + 67 + 74 + 58).

---

## Plate defects marked in the English

**1280B — `velmors`, a fused run.** The plate sets *Non infernus velmors.* as a single token with no
word space, verified at native resolution; our TEI has it fused too, so the defect is Migne's and
not ours. Marked `[sic: *velmors*]` under Patterns 10 and 12 (the whole run is carried, including
the real word `vel`). Per 7a⁗ the marker does not swallow what the run governs: the disjunction and
the noun are both said in plain words beside it — "Not hell nor death [sic: *velmors*]" — since the
clause has no other predicate and the gloss is glossing *Vivens vivens* against *infernus* and
*mors* together. Conjecture: *vel mors*.

## Migne's own citations, left as printed

`refDisplay` keeps what he prints; none of these is corrected, and none takes a marker.

- **1267C** — the Lazarus parable is cited **(Luc. XIX)**; it is Lc 16.
- **1268D** — Mt 25:46 is cited **(Matth. XIII)**; the verse is Mt 25.
- **1269C** — *Omnis qui se exaltat humiliabitur* is cited **(Luc. I)**; it is Lc 14:11 and 18:14.
- **1274B** — *Quia justi fulgebunt sicut sol* is cited **(Matth. XIII)**; correct, Mt 13:43, but the
  opening word is Migne's (see below).
- **1276C** — *Habitabis in loco isto amodo et usque in sempiternum* is cited **(Zach. XI)**; the
  words stand nowhere in Zacharias, and the nearest scriptural home is Jer 7:7.
- **1277C** — *Erit Saron sicut desertum* is cited **(Isa. XXXII)**; it is Is 33:9.

## Vulgate divergences too small to fire `[var:]`

Every one collated against `sources/vulgate/clementine-flat.txt` and confirmed on the plate.

- **1267B** — Is 24:1 quoted as *Ecce Dominus nudabit*; the Clementine reads *Ecce Dominus dissipabit
  terram : et nudabit eam*. An abridged incipit, not a variant reading.
- **1268A** — Is 24:16 printed *A finibus terrae, laudes audivimus*; the Clementine has no comma after
  *terrae*. Punctuation only, kept as printed (Pattern 8).
- **1268D** — Mt 13:30 quoted *Alligate ea per fasciculos ad comburendum*; Clementine *in fasciculos*.
- **1268D** — Eph 6:12 quoted as *Rectores tenebrarum, contra spiritualia nequitiae in coelestibus*,
  abridged from *adversus mundi rectores tenebrarum harum*.
- **1269D** — Gal 5:17 quoted without *enim* (*Caro concupiscit adversus spiritum*).
- **1271C** — 1 Cor 3:2 quoted *Lac dedi vobis potum, non escam*; Clementine *lac vobis potum dedi*.
  Word order only.
- **1271D** — Ps 117:22 quoted *Lapidem quem aedificantes reprobaverunt*; Clementine *quem
  reprobaverunt aedificantes*. Word order only; the verse is set inside the Is 28:16 lemma with no
  citation of its own, which is worth noting as a conflation even though the words are otherwise
  exact.
- **1272B** — Is 29:3 printed *in circumitu tuo* for *in circuitu tuo*. Our TEI and the plate agree;
  an attested spelling, exempt under Pattern 9.
- **1273D** — Is 30:21 printed *verbum monentis post tergum*; Clementine *verbum post tergum
  monentis*. Word order only, and the gloss turns on *post tergum*, which both have.
- **1274A** — Is 30:24 printed *Commixtum migma*; Clementine *commistum migma*. Spelling.
- **1274B** — Mt 13:43 quoted *Quia justi fulgebunt sicut sol*; Clementine *Tunc justi fulgebunt*.
  The connective has been adapted to the host sentence.
- **1274C** — Ex 15:1 quoted *Cantemus Domino, gloriose enim,* and cut there, as the plate cuts it.
- **1275A** — *Ora pro nobis Dominum quid agere debeamus?* is set in italic as though quoted, but the
  words are a paraphrase of Jer 42:2–3 and stand nowhere verbatim. Rendered as printed.
- **1275C** — Is 32:10 quoted *Post dies et annum*, dropping the Clementine's *enim*.
- **1279B** — Is 38:1 printed *audivisset* for the Clementine's syncopated *audisset*; and the plate
  really does set the comma inside *Et factum, est cum audivisset*. Both kept (Patterns 7 and 8).
- **1280D** — Mt 19:12 quoted *qui se castraverunt*; Clementine *qui seipsos castraverunt*.
- **1280D** — Ex 32:32 quoted *Dimitte eis hanc noxam, aut dele me de libro quem scripsisti*, dropping
  *tuo* and the conditional *aut si non facis*.

## Forms rendered as printed, no marker

- **1270B** — *distingunt* for *distinguunt* (Migne, *Alii distingunt sic*). A real form that occupies
  its slot and renders in place: "Others punctuate thus." Pattern 9 / the `fuges`–`munde` boundary.
- **1270B** — the catchword *Spiritum: salute,* repeats the lemma *peperimus spiritum, salutem non
  fecimus* two lines above, but with the ablative *salute* for the accusative *salutem*. A bare
  catchword has no syntax to violate and Latin case has no English exponent, so the English reads
  "*Spirit: salvation,*" with no marker; the divergence is recorded here. Both readings are on the
  plate.
- **1275D** — *sicut In Pentecoste*, with a capital `I` mid-sentence. The plate sets the capital; kept.
- **1274A** — the italic run is split by Migne himself as *usque* et *ad*, two spans with a roman *et*
  between them. Not our markup and not a defect: the plate sets exactly that, and the English mirrors
  it as "*as far* and *as*".
- **1274D** — the chapter head prints **CAPUT XXXI** with no full stop, unlike every other head in the
  range. Confirmed on the plate; the frontmatter's `heads` array already carries it unstopped.
- **1278D** — the paragraph on VERS. 33 ends *quanta de imminentibus cura* with **no terminal stop**.
  Confirmed on the plate. The English ends unstopped (Pattern 8: never supply).

## Column-band and structural notes

Nothing in this range breaks mid-word or mid-construction across an anchor. The band sequence in
chunk 0018 runs 1275A → 1276D → 1277A → 1278A with the usual positional irregularity, which is not a
gap (known false positive 1).
