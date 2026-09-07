# Cruces — 8961 *Liber Leviticus*, chunks 0005–0009 (cols 0309A–0323D)

Stint file; the orchestrator merges it with the peers'. Every column in the range was read at
the plate before these entries were written — Gallica `ark:/12148/bpt6k5505319w` f155–f162,
`f = (column + 1) / 2`, calibrated against the printed corners on f155 and f162; the archive
copy `patrologiaecurs04migngoog` (PDF page `= (column + 11) / 2`, calibrated on p.164) was
brought in as second witness at cols 0315–0318. Reads recorded in
`data/briefs/8961-PLATE-READS-0005.json`.

---

## Plate vs. our TEI

**0315C — `Sacrificium salutare`, a word our TEI drops.** The plate reads *Sacrificium
**salutare** jubetur fieri in oleo* on **both printings**. The English renders the plate; patch
filed in `data/briefs/8961-PENDING-TEI-PATCHES-0005.md`.

**0320A — ὑπωρίς, not ὑπωμίς.** The plate sets ὑπωρίς (rho, full descender, read at 3× on a
native crop); our TEI gives ὑπωμίς. Neither is a Greek word — the sense wants ἐπωμίς, the
shoulder-piece — but only one of the two is Migne's. English carries the plate's form; patch
filed. No `[sic:]` fired, because the marker's content must be verbatim in the twin and the twin
does not yet carry it.

**0317D — *conten nat* / *contemnat*: the two printings differ, and NO marker is fired.**
Gallica sets *et gulam conten nat* with an unmistakable word space; the archive copy sets
*contemnat* clean; our TEI has *contemnat*. A split run is exactly Pattern 10's shape, but the
reliable prior here is the class split, not the shape: a single word seen defective on only one
printing does not license a public accusation against Migne's type. Logged as a press variant,
English reads "and despise gluttony", nothing marked, nothing patched. (Same class as 8950's
*Mititte*/*Mittite* and PL 114 @0073A *Bethehem*/*Bethlehem*.)

**0318D — *habeba*, and the `[sic:]` IS fired.** Gallica sets *habeba* (a non-word); the archive
sets *habebat*; our TEI has *habeba*, i.e. it follows the exemplar printing. Unlike 0317D the
defect stands on the printing our text descends from and the twin carries it verbatim, so
`[sic: *habeba*]` is checkable and true of the page we edit. The sense is rendered beside the
marker per the 2026-09-05 amendment: "he had [sic: *habeba*] therefore two tunics" — the clause
keeps its verb, and *Convenienter ergo habebat duas tunicas* four lines later is Migne's own
control. ⚑ A later gate should know the archive printing refutes it; that is recorded here on
purpose rather than left for someone to rediscover.

**0311A — two candidates REFUTED at the plate, and both were artefacts of my own crop.** A first
column crop clipped the left margin and appeared to read *vicearius* and *Aegyto*. Re-cropped
with the margin included, the plate reads *vice-narius* and *Aegy-pto*, exactly as our TEI has
them. Recorded because the failure shape is general: on this tome a narrow left crop
manufactures a dropped letter at every line beginning.

**0315C — two archive-only candidates refuted by Gallica.** The archive copy reads *quas debens
offerre* and *proxima, sunt, necessario offerenti. sacerdotis sunt*; Gallica reads *debent* and
*offerentis*, as our TEI does. jbig2 symbol substitution, and the standing rule that the archive
is never the sole witness for a letter held.

---

## Readings that will not construe (rendered as printed, per Pattern 7)

**0315B — *Non bonum scilicet aut ovium*.** Printed thus on **both** printings. The sense the
context wants is *boum* — "not of oxen, namely, or of sheep" — and *bonum* leaves the abridged
lemma with no construction at all. Declined for `[cj:]` under 18a: this is not a negation, not a
correlative, and the clause is an *usque ad* fragment that asserts nothing false; it merely fails
to construe. Rendered literally, "Not good, namely, or of sheep."

**0312B — *ablatis reliquis iterum renovati, quo ardeant alia quae imponuntur*.** *renovati*
(nom. pl. participle) has no subject in the sentence; *renovetur* would construe with *ignem*.
Plate-confirmed as printed. Rendered as closely as the words allow ("the remains being taken
away, it be again renewed"), the participle carried as the passive it is; no marker — a real
word in a slot English can absorb is Pattern 7's business, not Pattern 12's.

**0319D — *magaritae* for *margaritae*.** Plate-confirmed. Left unmarked and translated
normally ("pearls") under Pattern 9: the metathesised form is attested in medieval orthography,
and italicising it would bury the real defects of this range in noise.

**0312B — *Quem nutriet sacer.*** Migne abbreviates the Lv 6:12 lemma mid-word with a period.
Under L5 (contraction ≠ truncation) the sentence's grammar contains the whole word — *sacerdos*
is the subject of *nutriet* — so it is rendered whole: "Which the priest shall feed."

---

## Scripture as Migne prints it — the divergence list

⛔ Every entry below was read word by word against the plate and then against
`sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. Six entries carry a
`[var:]` in the English; the rest are recorded here because the divergence is real but does not
change what the passage asserts, which is the Pattern 14 bar.

### Marked `[var:]`

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0312C | *Ignis in altari semper ardeat et nunquam deficiat* | Lv 6:12–13 *ignis autem in altari semper **ardebit*** … *qui **numquam deficiet*** | a promise in the future indicative is quoted back as a jussive precept, and the gloss adduces it precisely as a standing command (*permiscens eis assiduitatem*) |
| 0314A | *Qui semetipsum **totum** exinanivit, formam servi accipiens et obediens **patri** usque ad mortem crucis* | Phil 2:7–8, no *totum*, no *patri*, and *factus obediens usque ad mortem, mortem autem crucis* | the lemma being glossed **is** *Qui patri* — the added dative is the word the whole gloss turns on, and it is not in the received text |
| 0317B | *ne glorieris adversus **fractos** ramos, ne tu excidaris, et illi, si non permanserint in incredulitate, **inserantur*** | Rom 11:18 *noli gloriari adversus ramos*; 11:23 *inserentur* | a conflation of two verses with *fractos* imported and the future turned subjunctive |
| 0318B | *Beatus vir qui **sustinet** tentationem, **quia**, cum probatus fuerit* | Jas 1:12 *qui **suffert** tentationem: **quoniam*** | a different verb, in the proof-text for the whole *rubus* etymology |
| 0321B–C | *ut notum fieret **principibus** et potestatibus per ecclesiam* | Eph 3:10 *ut innotescat **principatibus** et potestatibus **in caelestibus*** | *principes* and *principatus* are different orders in the angelic hierarchy this gloss is about, and the heavenly places drop out |
| 0322D | *Panis ejus **dabitur*** | Is 33:16 *panis ei **datus est*** | a future promise where the prophet has a perfect, in a proof-text adduced for what the prophets *have* said |

### Recorded, not marked

- **0309A, Lv 5:2.** Migne's lemma is *Anima **qui** tetigerit* where the Clementine — and
  Migne himself, nine words earlier on the same column — has *Anima **quae** tetigerit aliquid
  immundum.* A relative-pronoun gender has no English exponent (Pattern 9); the English uses
  "who" for *qui* and "that" for *quae* so the two lemmata do not collapse into one sentence,
  and nothing is emended.
- **0310A, Lv 5:11.** *Non mittet in **eum*** for *in eam* (the oblation, fem.). Same class.
- **0310B, Mt 18:22.** *Non dico tibi septies, sed usque septuagies septies* — the Clementine's
  first *usque* is absent. Cited *(Matth. XXVIII)*; the verse is Mt 18:22. `refDisplay` keeps
  what he printed.
- **0310B, Jonah 3:9.** *Quis scit si convertatur et ignoscat Deus, et relinquat post se
  benedictionem* — cited *(Joan. III)* for *Jonas III*, and conflated with Joel 2:14.
- **0312A, 2 Cor 1:12** quoted and cited *(Eph. ult.)*.
- **0312A–B, 1 Cor 2:6 and 2:2.** *Sapientiam loquimur* without *autem*; *nihil judicavi me
  scire inter vos* for *non enim judicavi me scire **aliquid** inter vos*. Both cited *(II Cor.
  I)*.
- **0313B, 1 Tim 4:5.** *Sanctificatur **autem*** for *enim*.
- **0314C, Is 9:5.** *erit in combustione* for *in combustionem*.
- **0314D, Heb 12:29** quoted verbatim (*Deus enim noster ignis consumens est*) but cited
  *(Deut. IV)*, where Dt 4:24 has *Dominus Deus tuus*.
- **0315B, Lk 5:32 / Mt 9:13.** *Non veni vocare justos, sed peccatores*, cited *(Matth. IX)*;
  the wording is Luke's, without Matthew's *enim*.
- **0315C, Job 2:4.** *et **omnia** quae habet homo* for *cuncta*. Plate-confirmed on both
  printings; a synonym, so no marker.
- **0315D, Lv 7:12.** *Si pro gratiarum actione **fuerit oblatio*** for *oblatio fuerit*.
- **0316A, Rom 9:16.** *Non enim volentis neque currentis, sed Dei miserentis est* for *Igitur
  non volentis, neque currentis, sed miserentis est Dei*. The same verse is quoted again at
  0317D in a third order (*Non est volentis…* ) — the variance is Migne's, per occurrence.
- **0316B, Mt 13:52.** *Sint, inquit, nova et vetera* — an *inquit* inside the quotation;
  guillemets are not printed here and none are supplied.
- **0318C, Sir 45:9 / 2 Sm 13:18.** *Vestivit eum tunicam talarem*, cited *(Eccli. XLV)*, and
  *interiorem*, cited *(II Reg. XV)*. Neither is verbatim in the Clementine at the address given.
- **0319A, Gal 5:2.** *Si **circumcidimini*** for the subjunctive *circumcidamini*, and *nihil
  vobis* for *vobis nihil*.
- **0319D, Mt 7:6.** *ne sanctum detur canibus et magaritae ponantur ante porcos*, cited
  *(Marc. VII)*.
- **0320B, Mt 5:19.** *sed qui fecerit et docuerit hic magnus vocabitur*, cited *(I Tim. III;
  Matth. V)*; the received text adds *in regno caelorum*.
- **0321A, Ps 4:7.** *Signatum est super nos lumen vultus, Domine* — Clementine *lumen vultus
  **tui***.
- **0321B, Is 61:1.** *eo quod unxerit me* — Clementine *eo quod unxerit **Dominus** me*.
- **0321C, Ps 44:8** quoted a second time (*Unxit te, Deus Deus tuus*) and cited *(Psal. LIV.)*,
  where the first quotation at 0321B is correctly cited *(Psal. XLIV)*.
- **0322C, Mk 14:23–24.** *Et **sumens**, gratias agens dedit eis, et biberunt ex **eo** omnes,
  et **dixit** eis* for *Et accepto calice … ex illo … Et ait illis*. The cup drops out of the
  narrative clause; the gloss's argument rests on the pouring, not the cup, so no marker.
- **0322D, Ex 16:15.** *Hic est panis quem **dedit vobis Dominus*** for *quem Dominus dedit
  vobis ad vescendum*, cited *(Exod. XXVI)*.
- **0322D, 1 Cor 12:28.** *primum apostolos, **deinde** prophetas* for *secundo prophetas*, and
  without *Et quosdam quidem*.
- **0323A, Jn 17:19.** *Pro eis ego sanctifico meipsum* — the Clementine opens *Et pro eis*.
- **0310C, Ex 30:38.** *Quicunque talem compositionem fecerit, peribit de populis suis* — the
  tail is verbatim Clementine; the head paraphrases *quicumque fecerit simile*.

---

## Typography and structure preserved

- **0314C, Pattern 8.** *…mundatur ab originali* ends with **no terminal stop** on the plate;
  the English ends unstopped too. Nothing supplied.
- **0323A.** Migne sets **`VERS 39.`** with no period after *VERS*, alone in this range; kept.
- **0311D–0312A.** Numbering runs VERS. 8, 10, 11, 12, 14, 16 — Migne addresses the verses he
  glosses, and the gaps are his.
- **0318B.** *VERS. 28.* stands between *VERS. 37.* and *CAPUT VIII* and glosses Lv 7:38
  (*In monte Sinai*). The number is Migne's; not corrected.
- **0317B–C.** *(HIERON., epist. ad Fabiolam, tom. I.)* is set as running italic, not as a
  bracketed note, and carries the column anchor `[0317C]` inside it. Kept verbatim Latin in the
  English, on the same footing as an `[n:]` citation.
- **0313A.** Migne prints *à masculorum dignitate* with a grave accent; not reproduced and not
  marked — a compositor's accent on a Latin preposition carries no reading.
- **No guillemets anywhere in this range**, in Latin or English: this book marks its lemmata
  with italics only, and every quotation mark the English shows is a supplied `" "` (Pattern 6).
