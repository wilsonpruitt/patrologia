# Cruces — 8956 *Liber Isaiae prophetae* (Glossa ordinaria), chunks 0020–0024 (cols 1281A–1292A)

Stint file; the orchestrator merges it with the peers'. **Every column in the range was read at the
plate before these entries were written** — Gallica `ark:/12148/bpt6k5505319w` f641–f646,
`f = (column + 1) / 2`, calibrated against the printed corner numbers on all six leaves (f641 =
1281/1282 … f646 = 1291/1292) before any read was recorded; the archive copy
`patrologiaecurs04migngoog` (PDF page `= (column + 11) / 2`, calibrated on p.646 and p.651) was
brought in as second witness at cols 1282, 1283, 1284, 1286, 1287, 1290 and 1291. Reads recorded in
`data/briefs/8956-PLATE-READS-0020.json`.

Span count: **253 marked spans in the Latin of chunks 0020–0024, against the brief's 253** (50 · 57
· 44 · 58 · 44). Counted both whole-file and paragraph-bounded; **no paragraph in the range carries
an odd number of asterisks and the range contains no guillemets at all**, so the two counts cannot
have cancelled. This confirms for cols 1281A–1292A what two peer stints established: this work sets
no guillemets, and every lemma is italic.

---

## Plate vs. our TEI

**1282A — Migne sets HEBREW type that our TEI drops.** The plate reads `Hebraice mesuchan (מסכן)`;
our twin reads `Hebraice mesuchan , quia`, the orphaned space being the scar. Confirmed on both
printings. Patch filed (`data/briefs/8956-PENDING-TEI-PATCHES-0020.md` §1). The Hebrew was **not**
inserted into the English alone.

**1281B — `VERS. 4--` for the plate's `VERS. 4. —`.** A lost point in a verse address. Patch filed
(§2); the English prints `VERS. 4.--`.

**1290A — `(I Cor.. X)` for the plate's `(I Cor. x)`.** A doubled point inside a citation,
confirmed on both printings. Patch filed (§3). The note is reproduced verbatim as our twin has it
until the patch lands.

**1291A — `docem` for `decem`.** Both printings read *decem*: *ten tribes*. Patch filed (§4); the
English renders the plate.

**1291C — `plerosquo` for `plerosque`.** Both printings read *plerosque*, the accusative subject of
*tentari*. Patch filed (§5).

---

## The two printings differ — and no marker is fired

Five sites. In each our TEI agrees with Gallica and the archive copy is clean; a word defective on
one printing only does not license a `[sic:]` against Migne's type (the 8956 @1265A
`potet`/`potest` precedent, 8961 @0317D, 8950's *Mititte*/*Mittite*).

**1283A — `tunduntur.I` / `tunduntur.`** Gallica sets a stray capital-I-shaped sort after the full
stop that closes *quae salsis et amaris fluctibus saeculi tunduntur.*; archive p.647 prints the
stop clean and nothing after it. Read at 4× on Gallica: the mark has serifs top and bottom and sits
on the baseline, so it is a sort, not an ink blot — but it is on one copy only. The English ends
the sentence and carries nothing.

**1284D — `vestustate` / `vetustate`.** Gallica sets *In novitate Spiritus, non in vestustate
litterae*; archive p.647 sets *vetustate*, the Rom 7:6 word. English: "not in the oldness of the
letter."

**1286B — `nonhabet` / `non habet`.** Gallica fuses the run in *rem autem nonhabet*; archive p.648
sets the space. This is the dangerous shape (7a⁗-b): the fused lexeme carries the negation. Since
no marker is fired, nothing quarantines it, and the English says the negation in plain words: "but
does not have the thing itself."

**1290A — `ob oriente` / `ab oriente`.** Gallica sets *et quem Magi ob oriente venientes
adoraverunt*; archive p.650 sets *ab*. English: "and him whom the Magi, coming from the east,
adored."

**1290C — `Curavivimus` / `Curavimus`.** Gallica hyphenates the Jer 51:9 lemma as *Curavi- /
vimus Babylonem*; archive p.650 sets *Curavi- / mus*. Before recording this the archive column's
left margin was measured against the three neighbouring lines (*volenti*, *Babyloni*, *et quasi*),
all flush with *mus*, so the archive really lacks the syllable rather than having it cropped.
English: "We have healed Babylon, and she is not healed."

---

## Carried type — the one `[sic:]` in the range

**1287B — `Super aedificati`, confirmed on both printings.** The Ephesians lemma is set with the
word divided mid-line, *Super aedificati super fundamentum apostolorum et prophetarum*, where Eph
2:20 reads *superaedificati*. Gallica f644 and archive p.649 agree, so the defect is Migne's and
the marker stands. Per Pattern 10 the whole run is carried, including the real word *Super*, and
per the 2026-09-05 amendment the sense is rendered beside it; the marker takes no second italic
marker because it sits inside an already-italic lemma.

---

## Vulgate divergences — the deliverable

Seventeen `[var:]` fired. Collated word by word against `sources/vulgate/clementine-flat.txt`; where
a lemma is quoted twice, both occurrences were collated.

**1281A — Zach. 8:7–8.** Migne: *Ego congregabo populum orientis, et erunt mihi in populum, et ego
ero illis in Deum.* Clementine: *Ecce ego salvabo populum meum de terra orientis* … *et ego ero eis
in Deum.* The verb of the proof-text is changed (*congregabo* for *salvabo*) in a gloss adduced for
the **gathering** of the Gentiles. `[var:]` fired.

**1281A — Gen. 34:3, cited (Gen. XXIV).** Migne: *Locutus est Sichen ad cor ejus, et consolatus est
eam.* The Clementine has no such sentence anywhere; at Gen. 34:3 it reads *tristemque delinivit
blanditiis.* The gloss needs the words *ad cor* because it is expounding *Loquimini ad cor*, so the
quotation is doing real work in a form the Vulgate does not carry. `[var:]` fired. **The citation
(Gen. XXIV) for Gen. 34 is Migne's and is reproduced verbatim** — the third mis-citation class a
peer already recorded for this work.

**1281D — the VERS. 13 lemma is a conflation, and it loses its agent.** Migne prints *Spiritum
Domini super me, eo quod unxerit me ad annuntiandum mansuetis misit me: Et requiescet super eum
Spiritus Domini* under the address for Is 40:13. The first half is Is 61:1 **without *Dominus***
(*eo quod unxerit Dominus me*), the second is Is 11:2. Dropping *Dominus* removes the anointer from
a first-person servant-song verse. `[var:]` fired naming the Vulgate's agent.

**1282B — Amos 3:6.** Migne: *Si est malum in civitate quod non faciat Dominus.* Clementine: *si
erit malum in civitate, quod Dominus non fecerit?* Tense and mood differ and Migne prints a full
stop where the Vulgate has the interrogative; the negation is in the same place in both, and the
sense of the proof (God makes the *malum* that is affliction) is unchanged. **Crux, no marker.**

**1282B — Is 40:25.** Migne: *Cui assimilastis me, adaequastis me, dicit Sanctus.* Clementine: *Et
cui assimilastis me, et adaequastis? dicit Sanctus.* Migne supplies the object to the second verb
and drops both *et*, and closes with a stop where the Vulgate has a question mark. The gloss
answers it as a question anyway (*Quasi diceret: Quare…?*). **Crux, no marker.**

**1282D — Rom. 11:33.** Migne: *Incomprehensibilia judicia ejus, et investigabiles viae ejus.*
Clementine: *quam incomprehensibilia sunt judicia ejus.* An abridgment that turns an exclamation
into a pair of adjectives. **Crux, no marker.**

**1283B — 1 Cor. 15:31.** Migne: *Quotidie morior propter vestram gloriam, fratres.* Clementine:
*Quotidie morior per vestram gloriam.* *propter* makes the Corinthians' glory the cause of Paul's
dying, *per* makes it the ground of his oath; the gloss adduces the verse for the apostles as
*worms* who die daily. `[var:]` fired.

**1283A — Is 41:1.** Migne's lemma *Taceant insulae* drops the Vulgate's *ad me*, so the islands
are silent at large rather than silent **before God**. **Crux, no marker** — the gloss expounds
*insulae*, not the addressee.

**1283B — Ps. 21:7.** Migne quotes *Ego sum vermis et non homo* without *autem*. **Crux.**

**1285A — Is 42:11, the lemma quoted twice, and only the second diverges.** The verse address is
*De vertice montium* (plural, with the Vulgate); the gloss then re-quotes it three words later as
*De vertice montis*, singular, immediately after *Super montem excelsum ascende* (Is 40:9). The
gloss's own argument — the **height** of virtue and contemplation, one summit — runs on the
singular. `[var:]` fired on the second occurrence.

**1284C — Jo. 9:39.** Migne: *In judicium ego veni in hunc mundum.* Clementine: *In judicium ego in
hunc mundum veni.* Word order only. **Crux.**

**1285A — Rom. 11:25.** Migne: *Cum plenitudo gentium intraverit.* Clementine: *donec plenitudo
gentium intraret.* **Crux.**

**1285D — Matt. 8:11.** Migne: *Multi venient ab Oriente et Occidente, et recumbent cum Abraham,
Isaac et Jacob, ab omnibus scilicet mundi partibus.* Clementine: *multi ab oriente et occidente
venient, et recumbent cum Abraham, et Isaac, et Jacob in regno caelorum.* Migne's italic run
**swallows the gloss's own explanatory tail in place of the Vulgate's *in regno caelorum***, so a
reader collating the printed quotation meets a phrase the Gospel does not have. `[var:]` fired.

**1286A — Is 43:14.** Migne's lemma: *Haec dicit Dominus Salvator.* Clementine: *Haec dicit
Dominus, redemptor vester, Sanctus Israel.* The same author prints *Redemptor* correctly at 1287B
for Is 44:24, which is what makes this one visible. `[var:]` fired.

**1286C — Is 5:4.** Migne: *Quid ultra debui facere tibi, et non feci?* Clementine: *Quid est quod
debui ultra facere vineae meae, et non feci ei?* The addressee has changed from the vineyard to a
second-person *thee*, which is precisely what the gloss on *Reduc me* needs. `[var:]` fired.

**1286C — Gen. 15:8.** Migne: *In quo sciam quia possidebo eam?* Clementine: *unde scire possum
quod possessurus sim eam?* An entirely different wording of Abraham's question. `[var:]` fired; no
claim is made about which recension it comes from.

**1288B — Is. 5:6.** Migne: *Mandabo nubibus meis ne pluant super eam imbrem.* Clementine: *et
nubibus mandabo ne pluant super eam imbrem.* Migne adds *meis*, and the gloss's whole point is that
the clouds are **God's own** prophets. `[var:]` fired.

**1288C — Is. 45:9, quoted as a proof of itself.** Migne: *Vae qui contradicit factori suo*;
Clementine: *Vae qui contradicit fictori suo* — *fictor*, the potter who moulds, not *factor*, the
maker at large; the verse continues *testa de samiis terrae* and *Numquid dicet lutum figulo suo*.
`[var:]` fired. **The citation (Psal. XXXV) is Migne's and is reproduced verbatim**: the quotation
is Isaiah, and Ps. 35:6 is the *Veritas tua usque ad nubes* quoted a few lines earlier at 1288B, so
the reference has slid down the column. No correction is proposed.

**1288D — Rom. 5:20.** Migne: *ut ubi abundavit delictum, superabundet et gratia.* Clementine: *Ubi
autem abundavit delictum, superabundavit gratia.* Indicative to subjunctive, plus an intrusive
*et*: Migne's form makes the abundance of grace the **purpose** of the abounding of sin, which is
the sense the gloss on the monks of Egypt is reaching for. `[var:]` fired.

**1289A — Exod. 20:3.** Migne: *Non erunt tibi dii alieni.* Clementine Exod. 20:3: *Non habebis
deos alienos coram me.* `[var:]` fired.

**1289B — Is. 45:21, and the divergence is one of PERSON.** Migne: *Praedixi illud* — first person,
God speaking. Clementine: *ex tunc praedixit illud* — third. The gloss then continues in the first
person (*quando locutus sum Abrahae, vel quando legem dedi*), so Migne's person is what the
exposition rests on. `[var:]` fired.

**1289B — the verse address at *In Domino dicet* is printed VERS. 25 and the words are Is 45:24.**
Migne's numbering; reproduced as printed. **Crux.**

**1290A — 1 Cor. 10:11.** Migne: *Nos sumus in quos fines saeculorum devenerunt.* Clementine:
*scripta sunt autem ad correptionem nostram, in quos fines saeculorum devenerunt.* A recast that
supplies a subject the verse does not have. **Crux.**

**1290D — Matt. 2:1–2.** Migne: *Ab oriente venerunt magi dicentes: Vidimus stellam ejus in
oriente.* Clementine: *ecce Magi ab oriente venerunt Jerosolymam, dicentes: … vidimus enim stellam
ejus in oriente.* A conflation of the two verses with *enim* dropped. **Crux.**

**1291B — Act. 7:51.** Migne: *dura cervice et incircumcisi cordibus.* Clementine: *Dura cervice,
et incircumcisis cordibus et auribus.* Migne's *incircumcisi* is nominative where the Vulgate has
the ablative of respect, and *et auribus* is gone; the gloss is expounding *Nervus ferreus*, the
neck, so the case shift matters to the construction. `[var:]` fired. **The citation (Act. XVII) for
Acts VII is Migne's and is reproduced verbatim.**

**1291C — Is. 48:9.** Migne prints the lemma *longe faciam; feci:* where the Vulgate has *longe
faciam furorem meum*. The gloss then supplies the missing object itself (*scilicet furorem meum*),
which is the tell that something is absent from the printed lemma; *feci* has no counterpart in the
verse. `[var:]` fired.

**1292A — Jo. 19:34.** Migne: *Unus militum lancea latus ejus aperuit, et continuo exivit sanguis
nostrae redemptionis, et aqua baptismi.* Clementine: *et continuo exivit sanguis et aqua.* The
gloss's interpretation has been drawn **inside** the italic quotation, so the page prints as John's
words a sentence that names redemption and baptism. `[var:]` fired.

---

## Migne's own citations, reproduced and not corrected

Beyond the three named above, one more in the range:

**1284B — the (Phil. II) / (Luc. I) pair.** The plate attaches *(Phil. II)* to the quotation
*Spiritus sanctus superveniet in te* (Lc 1:35) and *(Luc. I)* to the sentence about the dove at the
baptism. Read at native resolution on Gallica f642: the plate prints them exactly where our TEI has
them, so the apparent swap is Migne's, not the digitization's. Reproduced verbatim.

---

## Migne's foot-of-page apparatus

**None in this range.** The feet of all twelve columns (f641–f646, both columns of each leaf) were
inspected: no numbered notes, no asterisk conjectures. Col 1289 carries the running signature
`PATROL. CXIII.` and col 1290 the sheet signature `41`; both are press furniture and are neither
translated nor marked.

---

## Register notes

**Second person.** Pattern 17 was applied throughout: *tu*-addresses to Cyrus (1287D–1288A), to
Jacob (1282C, 1286C), to Babylon as a woman (1290C–D) and to Jerusalem's citizen render **thou**;
*vos*-addresses to the apostles (1284D, 1286A), to the Gentiles (1282B) and to the hardened Israel
of ch. XLVIII (1291A–B) render **you**. The range switches between the two inside single chapters,
so this was checked paragraph by paragraph rather than per chapter.

**Agency.** The range is thick with God speaking in the first person, and the readings above were
formed by asking of every clause who acts on whom. Two places where the printed Latin fixes an
agency an English reflex would invert, and where the English follows the Latin: 1290C *Et non
resistet, sicut, Moyses Deo volenti delere filios Israel* — the resister is **Moses**, and God is
the one willing to destroy, so the English reads "as Moses did to God when he willed to blot out
the sons of Israel"; and 1288D *Nec ipse aedificavit civitatem vel templum, sed permisit
aedificari* — Cyrus does **not** build, he permits, and both negations stand.

**Etymological glosses kept in Latin.** *pugillus* / *palmus* (1281D) and *inter partes* for
*interpretes* (1286D) are the words the gloss is defining; an English equivalent would make the
gloss explain nothing, so they stand in italic Latin beside their renderings.
