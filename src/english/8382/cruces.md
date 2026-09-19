# Cruces — 8382 (Egbertus Eboracensis, Poenitentiale)

**Governed by `translation-style.md` Pattern 7.** The English renders what Migne prints (PL 89,
cols 401A–436A), which he reprints from Mansi, who took it from Wilkins's *Concilia Magnae
Britanniae*. Migne's first note (restored at the plate, chunk 0000) records that the manuscripts
present these chapters as ones Egbert *transtulit ex Latino in Anglicum*. **The Latin is therefore an
early-modern Latin version of the Old English penitential**, and it carries English idiom in Latin
dress. The English translates that Latin. It does not reconstruct the Old English, and it does not
smooth an Anglicism into classical usage. Parallels in the Theodoran tradition are noted in the
stint files where they explain a hard sentence, and are never used to emend.

## Merge, chunks 0000–0010 (2026-09-19)

This section is a merge layer. The three stints' own records stay beside it, unedited:
`cruces-0000.md` (cols 0401A–0414D), `cruces-0004.md` (0415A–0428B) and `cruces-0008.md`
(0428C–0436A). What follows is only what had to be settled across them.

### Standing decisions for this work

- **Vocabulary held across the three stints** (the table in `data/briefs/8382-STINT-COMMON.md` §8),
  checked at merge by count: *hiems* 36× in the Latin, "winter(s)" 36× in the English, kept apart
  from *annus* "year"; *sacerdos* "priest" and *presbyter* "presbyter" kept apart; *confessarius*
  "confessor"; *quadragesima* "Lent". Heads: "CHAPTER ONE." for *CAPUT PRIMUM*, roman numerals after;
  "BOOK TWO / THREE / FOUR"; the Book Four head is identical in 0007, 0008 and 0009.
- ***suspend-* is "suspended" throughout.** 0405D *suspendantur*, 0410B *suspenditur*, 0417A
  *suspendendi sunt* and 0431A *suspendatur*. Stint B wrote "hanged" at 0417A. It was conformed at
  merge: the Latin verb is the same in all four places, the context never settles whether bodily
  hanging or suspension from communion is meant (at 0417A the adult offender gets fifteen years'
  fast, and hanging the "young and imprudent" for the same act is the less likely sense), and
  "suspended" is the literal word that asserts neither. 0406A *quasi Christum suspenderet* stays
  "as if he were hanging Christ" (crucifying): there the sense is not open.
- ***uxor* is "wife"** everywhere, including places where the sense is plainly "woman" (Old English
  *wīf* covers both). Explained once in `cruces-0004.md`.

### Migne's foot notes — seven, all recovered from the plate

Corpus Corporum carries none of them. All seven are letter-keyed prose, and each stands as
`[cn:]` in the Latin with a translated `[nt:]` twin in the English (`data/plate-notes/8382.tsv`).

- 0401A (the title, Wilkins on the manuscripts' title) · 0409C (*In domo vertendum est*, Wilkins) ·
  0431 (inside the head, Mansi's cross-reference) · 0433A (*andronas*) · 0433D · 0434B, all found at
  prep's foot sweep.
- **0432A, found by stint C, not by prep:** *Mallem legere : quoniam illorum matri convenit huic se
  opponere. WILKINS.* It is Wilkins's answer to the sentence at 0432A that does not construe
  (*quoniam mater illorum contigit ea, quae haec opponit*). It is set full width in the MIDDLE of
  p. 222, under the Book Four section and above the rule that opens *Ex ejusdem Egberti*. Prep's sweep
  cropped each page from 55% of its height down and never saw it. That is the mid-page-at-a-division
  case CLAUDE.md warns about, and the reason stints still watch the foot of every page.
  Confirmed at the plate by the orchestrator and injected.
- The 0409C note prints *vertendum est, WILKINS.* with a comma (stint A). The TSV was corrected.

### TEI patches — 20 from the stints, applied

`data/tei-patches/8382.json` now carries the title banner plus 20 plate-read corrections (A 10,
B 8, C 2), each a place where the plate is sound and our digitization is not. The English already
followed the plate at every site. Re-chunked, 7/7 notes placed, `verify-english` OK. The
*otiosa → otioso* find needed the XML line break (`De omni verbo otiosa\nquod`).

### Markers fired (5), every one on a column read at the plate

- `[cj:]` 0411A: *neque quas accipiter momorderit … non sunt edendae*. The double negative makes
  hawk-bitten animals edible. Both negatives are carried (Pattern 18 shape, cf. 8195 @1250B).
- `[var:]` 0411B Acts 15:29 · 0433B Matt 25:43 · 0433C Matt 18:17 · 0434D Matt 12:36.
- **No `[sic:]` anywhere.** There is one witness on disk, and nothing single-letter stands on one
  witness. Single-witness candidates are logged in the stint files: 0409C *fre-|mentum*, 0416C
  *Do eo*, 0410B *eum … nequeunt*, 0432 *Domiuo* / *stiοendio* / *subjaccbit*, and others.

### Address findings (logged, not corrected)

Words attributed to *Salvator* that are Ezekiel (two sites in Book I part two, `cruces-0000.md`; 0424B–C, stint B) and
Leviticus (0421C, *Estote sancti*); Migne's *(Matth. I)* for Matt 12:36 (0434D). The work quotes
from memory through an Old English intermediary, so most of its "quotations" are paraphrase and
carry no `[var:]`.

### Blind read (three Opus readers, 2026-09-19): 0 polarity sites, 4 grammar fixes applied

Readers worked without the cruces (reports `data/briefs/8382-BLIND-READ-R1..R3.md`). Every tariff,
numeral, list and negative in all eleven chunks was checked against the Latin, and all hold. Applied:

- 0417D, Book II cap. XII head: *rebus suis eam spoliare* is now "despoil her **of her things**"; it was "with his things" (R2; with *spoliare* the ablative is what she is stripped of).
- 0429B: *et ipsi remissionem apud Deum obtinere* is now "and obtain remission **for him** with God"; it was "and themselves obtain remission" (R3; the list is of remissions for the penitent).
- 0434B cap. XXXII: the English now supplies the subject "he ought to be excommunicated", which the Latin carries over from *si quis* (R3).
- 0434D: *pertimescat* governs *assistere*: "let him greatly fear to stand before the tribunal of the strict judge, to render an account for these" (R3).

Logged, not changed:
- **0409B cap. XXXII**, *Si quis praemium aliquod magnum saltem diabolis immolet, jejunet per annum; si aliquid magnum sacrificet, jejunet decem hiemes*. As printed, the two tiers do not contrast: "great" earns one year and "great" earns ten winters. Theodore's parallel (*in minimis* a year, *in magnis* ten) and the *saltem* both point to "small" in the first tier (R1). **No `[cj:]`:** the reading rests on an outside text, not on the printed context alone. Rendered as printed.
- 0406D *haereditatis ejus* is rendered "her inheritance", an ordinary disambiguation (R1). 0423A *animae suae commodum* is rendered "their soul", given this Latin's loose *suus* (R2). 0426A *duobus diebus Mercurii et Veneris* is rendered "two days, Wednesday and Friday"; the tariff pattern hints at "two [years]", but that word is not printed (R2).
