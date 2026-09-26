# 11512 blind read — R12 (chunks 0076–0080)

Reader: R12 · date 2026-09-26 · brief: `11512-BLIND-READ-BRIEF.md`
Scope: src/latin/11512/0076–0080.md against src/english/11512/0076–0080.md, every sentence both columns.
Cruces not opened before findings were formed.

## Findings

### F1 — 0076, col. 1266C — class 5 (numbers) / Pattern 18
- **Latin:** `ut bis duo quatuor, et tertia novem`
- **English as it stands:** `as twice two four, and the third, nine`
- **Proposed:** `as twice two four, and the third [cj: *tertia*; read *ter tria*, "thrice three"], nine`
- **Why:** the sentence is Wolbero's arithmetic of self-multiplication (*in semetipsos ducti*); the parallel to *bis duo quatuor* requires *ter tria novem*. *tertia* is a real word, so the literal "the third, nine" asserts a non-sequitur in the one illustration the argument rests on. Fused/elided type (*ter tria* → *tertia*); plate should be checked before choosing `[cj:]` vs `[sic:]`.
- **Confidence:** probable (the reading is certain; the marker class depends on the plate).
- **Already in the cruces?** (see end)

### F2 — 0076, col. 1264A — class 1 (word rendered as printed, but polarity reads wrong) — FOR ADJUDICATION
- **Latin:** `sed non recte divisit, quia quod erat melius Deo recte negavit, quod vilius dedit`
- **English as it stands:** `because what was better he rightly denied to God, what was viler he gave`
- **Proposed:** no confident conjecture; at minimum a crux. If a reading is adopted, e.g. `he rightly [cj: *recte*; read *non recte*? / *tecte*, "covertly"] denied` — I do not propose one.
- **Why:** the clause is the explanation of *non recte divisit*; "rightly denied" praises Cain in the sentence that condemns him. The English faithfully renders the print, so this is a Pattern 7 site, not our error — but it is exactly the "word rendered so a broken sentence reads smoothly" class and should be in the cruces. (It may be a deliberate echo of the preceding *recte … obtulit*, i.e. irony, which is why I do not propose a reading.)
- **Confidence:** probable that it needs a crux; no confidence in any emendation.
- **Already in the cruces?** (see end)

### F3 — 0077, col. 1268A — class 2/3 (who does what; truncated participle read as a finite verb)
- **Latin:** `idem dilectus, tanquam erudit jam, et ex consortio sermonis ejus ad plenum edoctae proclamat`
- **English as it stands:** `as though he now instructs, and proclaims to her fully taught out of the fellowship of his discourse`
- **Proposed:** `as though to one now instructed [cj: *erudit*; read *eruditae*, "to one instructed"], and to one fully taught out of the fellowship of his discourse, proclaims`
- **Why:** *erudit … et … edoctae* is a pair; *edoctae* (dat. fem.) demands *eruditae* as its twin, so both describe the Bride, the addressee. The English turns the Bride's state into the Bridegroom's act ("he now instructs"), and then has to bolt "to her" onto *proclamat*. A dropped ending (compositor), real-word result, so Pattern 18. Plate check wanted (could be *erudit[ae]* broken at a line end → `[sic:]`).
- **Confidence:** probable.
- **Already in the cruces?** (see end)

### F4 — 0079, col. 1273C — class 1 (a real word the argument contradicts) / Pattern 18
- **Latin:** `hujusmodi nempe praecentore qui dixit: *Discite a me quia mitis sum et humilis corde et invenietis requiem animabus vestris [n: (Matth. XI)]*, monemur novum utilitatis cantare canticum.`
- **English as it stands:** `we are admonished to sing the new canticle of usefulness.`
- **Proposed:** `we are admonished to sing the new canticle of usefulness [cj: *utilitatis*; read *humilitatis*, "of humility"].`
- **Why:** the paragraph answers the old canticle's triad *superbia, inobedientia, excusatio* (1273B) with a new triad — humility (proof-text *humilis corde*), obedience (*factus est obediens*), penitence (*Poenitentiam agite*) — and 1274C closes it in so many words: *a spiritu humilitatis et obedientiae inchoans*, answering *a spiritu superbiae et inobedientiae* at 1274B. "Usefulness" breaks the triad and leaves the proof-text *humilis corde* proving nothing. *utilitatis/humilitatis* is a one-sort-family misreading (*h*→*u*, *m*→*t*); real word, so `[cj:]`, not `[sic:]`.
- **Confidence:** probable (reading near-certain from the argument; the defect is Migne's or the TEI's — plate not checked by me).
- **Already in the cruces?** (see end)

### F5 — 0080, col. 1276D — class 5 (numbers) / Pattern 18
- **Latin:** `videlicet humilitas, mansuetudo, luctus, sive tria secundum Dominum, pax, misericordia, munditia, justitiae appetitus, patientia.`
- **English as it stands:** `namely humility, meekness, mourning, or three according to the Lord, peace, mercy, cleanness, the desire of justice, patience.`
- **Proposed:** `namely humility, meekness, mourning, or three [cj: *tria*; read *tristitia*, "sorrow"] according to the Lord, peace, mercy, cleanness, the desire of justice, patience.`
- **Why:** the sentence announces *octo modorum species* and lists exactly eight beatitudes without *tria*; "or three according to the Lord" injects a number into the count and means nothing. *luctus, sive tristitia secundum Deum/Dominum* is the stock gloss of the mourning beatitude (II Cor. VII, *quae secundum Deum tristitia est*). *tria* is a real word (truncated *tristitia*), so `[cj:]`; if the plate shows a broken sort or line-end, `[sic:]`.
- **Confidence:** probable.
- **Already in the cruces?** (see end)

## Cruces check (done AFTER all findings above were written)

Checked `src/english/11512/cruces-0075.md` (covers these chunks) and grepped all `cruces*.md`.

- **F1 (1266C *tertia*)** — LOGGED (cruces-0075 l.70): plate p. 639 = TEI; `[cj:]` drafted and withdrawn as below the bar. Our reading agrees (*ter tria*). I would still raise it: "the third, nine" is a false arithmetic claim in the illustration the argument turns on. For the adjudicator; I don't dispute the plate reading.
- **F2 (1264A *recte negavit*)** — LOGGED (l.59), crux only. Agrees with my view. No action.
- **F3 (1268A *erudit*)** — LOGGED (l.75), `[cj:]` drafted and withdrawn. Our reading agrees (*eruditae*). I would still raise it, because the English has the Bridegroom doing the instructing, where the Latin makes the Bride the one instructed. That falls under class 2 (who does what), not just an odd word. For the adjudicator.
- **F4 (1273C *utilitatis*)** — **NOT LOGGED.** Nowhere in any cruces file (the 1273C entries cover only Mt 4:17, Phil 2:8, Ps 140:4). **This is the new finding of this read.**
- **F5 (1276D *sive tria*)** — PARTLY LOGGED (l.117): marked "obscure and rendered as printed", **with no reading proposed.** The *tristitia* reading and the eight-count argument are new.

## Chunks found clean
- **0078** (1270A–1272C): clean. Every sentence checked. Rom 11:33–36, II Cor 2:15 (`[var:]` present), Ps 83, Ps 30:20, Mt 8:8 and 1 Cor 13 all match the printed Latin. *vix* is rendered "scarcely", *non omnino relinquens* is rendered "not wholly abandoning", *non … sed* is kept in 1271B, and every *non posse* clause is intact.
- 0076, 0077, 0079 and 0080 have no defects beyond F1–F5.

## Candidates considered and rejected
- **0076 1266B/0077 1266D *Fodi eam mihi* → "I bought her to me".** The Douay rendering of the Vulgate's own *fodi*. No gloss depends on the verb, and it is consistent across both occurrences. The cruces list it as a re-quoted lemma. Rejected.
- **0076 1265C *quae ab illo concessa sunt, homini … deferri*.** The English attaches *homini* to *concessa* ("granted by him to man"), not to *deferri* as agent. Both construals are possible, and the sense is unchanged. Rejected.
- **0076 1265D *vitam aeternam quae per dilectionem operatur*.** "Eternal life, which works through love" is literal. The antecedent is odd (Gal 5:6 *fides quae per dilectionem operatur*) but printed. Not ours. Rejected.
- **0076 1263C *nec aliter nisi vir sit, offerre possit*** → "could not offer unless he were a man". Polarity is kept. Rejected.
- **0077 1267A *pacem illam consequitur, quae sentit bella vitiorum*.** Possible dropped *non* ("which does not feel")? The argument contrasts this-life peace, which still has vices at war, with the perpetual peace *ubi … nihil … quod ei adversari possit*, so the printed text construes. English "which feels" is faithful. Rejected.
- **0077 1268D *neque dicas te nec scire, nec posse*** → "not say that thou neither knowest nor art able". Polarity is correct. Rejected.
- **0077 1269D "they, the ones (that is, the angels) having attained …"** The English restructures the Latin, but every member is there: *angeli adepti sunt*, *homines … se adepturos non dubitant*, *te quoque quae nondum adepta es*. Rejected.
- **0078 1270B *fuge enim … dilecti hujus fuga est*.** Rendered with our quotation marks. Logged (l.87) with plate confirmation. Rejected.
- **0079 1273B *contemptor culpae suae poenam … transfudit*.** The English "a despiser of his fault, … transmitted its punishment" is a legitimate construal. Rejected.
- **0079 1273C *appropinquabit*** → "will draw near". Printed tense, logged. Rejected.
- **0079 1273D *monemur non declinare cor nostrum*.** The *non* is kept ("not to incline"). Rejected.
- **0079 1274D *ineptas … stultas*** → "foolish … foolish". A slight lexical flattening (*ineptas* = silly/inept), not a defect. Rejected, though "silly voices" would be crisper.
- **0079 1275C the seven trees of Is 41:19.** All seven (cedar, thorn, myrtle, olive, fir, elm, box) are present in both columns and in the gloss. *alios tamen bene viventes* ("others who live well") is one legitimate construal, since *viventes* could also be nominative. Rejected.
- **0079 1276B *Quod est aqua de situla ejus, hoc est multitudo aquarum*** is literal. Rejected.
- **0080 1276C *Hoc, inquam, gratia ejus bibendo experti sumus*** → "by drinking of his grace". *gratia* is ablative ("by his grace … by drinking"), so the English makes grace the thing drunk. That is a slight shift with no change of doctrine. Rejected, but noted as a possible minor tidy: "This, I say, we have experienced by his grace, by drinking."
- **0080 1276D the seven gifts.** All seven are present in both columns. Rejected.
- **0080 1277A the six virtues of the sisters' song.** All six are present. Rejected.
- Sentence counts per paragraph matched in all five chunks. No missing clause, lemma or citation found in either direction.
