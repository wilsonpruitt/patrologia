# 11512 blind read — R10 (chunks 0063–0069)

Reader: R10 (Opus). Date: 2026-09-26. Brief: `11512-BLIND-READ-BRIEF.md`.
Method: every sentence of both columns, Latin against English, paragraph by paragraph. Findings appended as formed; cruces checked only after all findings written.

## Findings

### F1 — 0063, col. 1220C — class 2/3 (subject mis-bound: genitive read as subject)
- **Latin:** *hoc est, si fidelium Ecclesiae recte vivendi sive docendi studium inchoassent, et usque ad mortem in ejus dilectione perseverare contenderent*
- **English as it stands:** "that is, whether the faithful of the Church had begun the pursuit of living or teaching rightly"
- **Proposed English:** "that is, whether the Churches of the faithful had begun the pursuit of living or teaching rightly"
- **Why:** *fidelium* is genitive plural and cannot be the subject of *inchoassent*; the subject is nominative plural *Ecclesiae*, answering the plural lemma *vineae* (cf. 1219D, *multae nunc dicantur Ecclesiae*). The English makes the faithful the agents and the Church their possessor — the binding reversed.
- **Confidence:** probable (near certain on grammar; *Ecclesiae* could only be gen. sg. if *fidelium* were substantival subject, which it cannot be).
- **Already in the cruces?** No. cruces-0060 logs 1220C only for *qnoque*→*quoque* and the *floruissent* scan reading; nothing on the *fidelium Ecclesiae* binding.

### F2 — 0064, col. 1223A — class 1 (word rendered as another word so the sentence reads smoothly; Pattern 7a / 18)
- **Latin:** *quae utraeque ad duos respicientes quadrigas, Christum videlicet et diabolum, alteri eorum subjiciantur*
- **English as it stands:** "which both, looking to two charioteers, namely Christ and the devil, are made subject to one of them"
- **Proposed English:** "which both, looking to two chariots [cj: *quadrigas*; read *aurigas*, "charioteers"], namely Christ and the devil, are made subject to one of them"
- **Why:** Migne prints *quadrigas* ("chariots"), a real word, where the sense (masc. *duos*, apposition *Christum … et diabolum*) needs *aurigas*. The English silently prints the repaired word. Under Pattern 7/18 the printed word is rendered and the repair goes in a `[cj:]`.
- **Confidence:** certain. The English departs from the printed word. `data/tei-patches/11512.json` has no 1223A patch, so the Latin twin is what we hold. This is a silent repair, not a declined conjecture, so the closed Pattern 18 census (18a) does not reach it.
- **Already in the cruces?** No. cruces-0060 at 1223A logs only the *duobus servire dominis* word order, and its convention note gives *quadriga* as "chariot".

### F3 — 0064, col. 1222A — class 2 (person shifted)
- **Latin:** *Ecce, inquit, occurrit sibi vox quadrigae meae*
- **English as it stands:** "Behold, he says, there runs to meet thee the voice of my chariot"
- **Proposed English:** "Behold, he says, there runs to meet it the voice of my chariot"
- **Why:** *sibi* is third person (medieval *sibi* = *ei*, picking up *ei occurrens* at the end of 0063: the Father running to meet the people). The English turns it into second person "thee", conforming it to the address that follows. Render the third person (or, if *sibi* is thought a slip for *tibi*, carry that as `[cj:]`).
- **Confidence:** probable.
- **Already in the cruces?** No. There is no 1222A entry on *sibi*.

### F4 — 0064, col. 1222B — class 3 (participle on the wrong antecedent)
- **Latin:** *Sed nunc revertere ad me per vocem quadrigae meae, per quatuor Evangelia, quasi per quatuor rotas ad te clamantis et te ad poenitentiam quater adhortantis*
- **English as it stands:** "through the four Gospels, as through four wheels crying out to thee and four times exhorting thee to penitence"
- **Proposed English:** "through the four Gospels, of my chariot crying out to thee as through four wheels and four times exhorting thee to penitence" — or, keeping the order: "through the voice of my chariot, crying out to thee as through four wheels and four times exhorting thee to penitence, through the four Gospels"
- **Why:** *clamantis … adhortantis* are genitive singular, agreeing with *quadrigae meae* (the chariot cries through its four wheels); they cannot go with accusative plural *rotas*. The English makes the wheels the ones crying.
- **Confidence:** probable (low stakes; the sense is close either way).
- **Already in the cruces?** No. cruces-0060 at 1222B logs only the fourfold *revertere* and Jac 2.


## Clean chunks
- **0065** (1226A–1226C), **0066** (1226D–1230C), **0067** (1230D–1234C), **0068** (1234C–1238B), **0069** (1238B–1241B): every sentence of both columns read. No polarity, agency, grammar, omission or Scripture defect found.
- **0063**: one finding (F1). **0064**: three findings (F2–F4).

## Candidates considered and rejected
- **0063 1219C** *fructum fidei et injustitiae*: `[cj:]` already present, and the English still renders the printed *injustitiae* ("of injustice"). Correct.
- **0063 1220D / 1221B** *conturbavit* vs *turbavit*, both rendered "troubled": logged in cruces-0060, same sense. Not material.
- **0063 1221C–D** *Aminabad* against the lemma's *Aminadab*: carried as printed, not reported (literal rendering of the printed form).
- **0063 1218D–1219A** Rom 11:12 *deliciae mundi*: `[var:]` present and the English renders "delight". Correct.
- **0063 1219A** *cujus tamen eadem laus*: "whose praise however" drops *eadem* ("that same"). This is a nuance, not sense, so it is not reported.
- **0063 1219D** *si aliquo initio boni operis fidei se applicuissent*: "applied themselves to the faith by some beginning of good work". *fidei* could also be genitive, giving "to some beginning of the good work of faith". Both parses are defensible.
- **0064 1223D** *labens flegma* rendered "slipping phlegm": literal to the printed word (possibly *habens*). Not reported.
- **0064 1224D** *tantum plus vel minus … quantum plus minusve*: correlative kept in the English.
- **0064 1225C** *delectatione carnis consensu spiritus* (no comma): the English keeps the missing mark. Correct under Pattern 8.
- **0065 1226B** *Sunamiti* → "the Sunamite", against *Sunamitis* kept in Latin elsewhere: logged in cruces-0065 as intended.
- **0065** *consuetudinem* "habit" against 0064's *consuetudo* "custom": a small within-work term drift, not a sense error. Worth a merge-time reconciliation glance only.
- **0066 1226D** *meliore parte semper inferior erat* → "ever inferior in her better part": ablative of respect. Defensible.
- **0066 1227C** lemma *Junctura feminum tuarum*: `[var:]` present, and 1228C preserves the *femorum*/*feminum* distinction. Correct.
- **0066 1229A** *finis praecepti charitas ad justitiam omni credenti* (a conflation of 1 Tim 1:5 and Rom 10:4): rendered as printed. Scripture as Migne prints it.
- **0067 1233D** VERS. 5 *juncta canalibus*: `[var:]` present. Correct.
- **0067 1231C** *ex una parte poenitentiae, ex altera dilectionis cingitur moerore*: rendered correctly.
- **0068 1236A** *per signi praevaricationem* rendered "of the sign": literal. Logged in cruces-0065 as a declined conjecture (*ligni*), and the Pattern 18 census is closed. Not re-raised.
- **0068 1235A** *bone* `[sic:]` with the sense "well" rendered. Correct under Pattern 7 as amended.
- **0068 1238A** *Quandoquidem, inquit* → "she says": the speaker is the bride by context (VERS. 10). Correct.
- **0069 1239B** *suae sapientiae charitate irradiare* → "with the charity of his wisdom": literal (possibly *claritate*). Not reported.
- **0069 1239C** *beatudinis* `[sic:]` and *praecepta ( sic )* carried. Correct.
- **0069 1238D** *quorum patres ex quibus Christus* → "whose are the fathers, from whom Christ": the supplied "are" is English idiom. Acceptable.
- **0069 1239D** VERS. 12 (the second one, for Ct 7:13): the doubled verse number is Migne's label. Fixed by ruling.
