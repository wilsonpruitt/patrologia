# 8382 Egbert, *Poenitentiale*: blind read, reader R2 (2026-09-19)

**Chunks read:** 0004, 0005, 0006, 0007 (cols 0415A–0428B). I read every sentence of the Latin and the English side by side, head formulas included. I read `translation-style.md` Patterns 7/7a (main rule and the 2026-09-05 amendment), 11/11a, 12, 13, 15, 18 and 19 before starting. I opened no cruces file and no other 8382 brief until the findings below were written. The cruces check was done afterwards, with a grep of `cruces*.md`.

## Findings

### F1: a head formula misparses *spoliare* + ablative (class 3)

- **Chunk:** 0004 · **Column band:** 0417D (head of Liber II, CAPUT XII)
- **Latin (exact):** `CAPUT XII. *De eo, si aliqua uxor desponsata sit, quod non permissum sit alteri unquam viro rebus suis eam spoliare.*`
- **English as it stands (exact):** `## CHAPTER XII. *On this: if any wife has been betrothed, that it is not permitted to any other man ever to despoil her with his things.*`
- **Proposed English (exact):** `## CHAPTER XII. *On this: if any wife has been betrothed, that it is not permitted to any other man ever to despoil her of her things.*`
- **Why:** *spoliare aliquem aliqua re* means "to strip someone of something", so *rebus suis* is an ablative of separation and not of means. "Despoil her with his things" makes it instrumental and gives the head a sense no reading of the Latin supports. *suis* refers loosely to her goods, the only sense that construes with *spoliare*. The polarity is intact. The body of the canon ("that any other man despoil her") is correct and unaffected. ⚠ The heads are also stored in the chunk's front-matter `heads:` array, so the orchestrator should check whether an English-side heads list needs the same change.
- **Confidence:** probable. The ablative-of-separation construction is certain. Whether *suis* should come out as "her" or be left neutral ("of their things") is the only judgment call.
- **Already in the cruces?** No. `cruces-0004.md` has no entry for this head.

That is the only finding. None of the four chunks has a polarity defect (class 1), a tariff or number defect (class 2), missing or added text (class 4), or received scripture overriding the Latin (class 5).

## Chunks read and found clean

- **0005** (cols 0418D–0422B: Book II caps XVIII–XXX, Book III caps I–VIII): clean.
- **0006** (cols 0422C–0424C: Book III caps IX–XVI): clean.
- **0007** (cols 0423D–0428B: Book IV, the undivided tariff list): clean.
- **0004** is clean except for F1.

### What was checked, so the clean verdict can be audited

**Numbers.** Every tariff in all four chunks was checked numeral by numeral against the Latin. That covers:

- Book II cap I: the whole 7/3/4, 5, 3/1/2, 3/1/2, subdeacon 5 / deacon 7 / presbyter 10 / bishop 12, and 5/3/2 ladder.
- Book II: II 10/3/7; III 2; IV 7 and 3; VI 15; VII 7 plus three days a week; X 7/3/4.
- Book II: XXII 3 years and 1 year; XXIII 40 days and 3 Lents; XXIV 4, *quinquennium* = 5, then 6/7/10/12 and 3/1/2; XXV 5/6/7/10/12, a year, 3 years; XXIX 1 year plus 3 Lents; XXX the three-year fast split 1/2.
- Book III cap I: 7.
- Book IV: all 12/7/5, 10/5/5, 7/4/3, 6/3/3 and 5/3/2 homicide lines; the fornication ladder 12/10/7/6/5; the nun canon 12/7/5 and 10; 1 year; 3 Lents (midsummer, equinox, Nativity); 40 days and nights; 1 year; 15/7/7 with 3 Lents; *triennium* with 3 Lents; 7/4/3; 3/2 and 7; half a year, 1 year with 2 days a week, 5/1/4; 3/1/2; 7/3; 1 Lent; 2 Lents; 7; 3 weeks; 7 weeks and 28 weeks; 12 weeks; 4, 4 and 4 weeks; 12 months / 2 / 3 / 7; 30 days, then 40 ×3; 20 days; 100 and 50 psalms; 3 Lents; 50 psalms; 40, 40 days; 7 days or two psalters; 100 psalms; 100 and 40 days; 40 and 20 days; 3 Lents or one year; 30 days; 7 days; 7 and 30 psalms.

Every figure matches.

**Negatives.** Every negative in the four chunks is carried in the English:

- *non / nec / neque / nullus / nihil / nisi / absque / nolit / nequit / nesciat*.
- Specifically: 0415B *nihil aliud … nisi*; 0415C *absque culpa*, *nequit*; 0416C *absque … testimonio*, *nullum testimonium … nisi*; 0416D *non est permissum*; 0417A *non praesumat*; 0417A/B *non tradat … nec ullum … non sepeliatur … nisi*; 0417B *non tradat … nec aliquod … nisi*, *et non legitimam*; 0417D *non possumus … nisi*; 0419A *absque uxore*; 0419B *non diffidant*, *absque eucharistia*; 0419C–D *nullam hostiam*; 0419D *non est permissum*, *Non fiat … nisi*; 0420A *si nesciat*, *si non sit ordinatus*; 0420B *si non habeat*; 0420B *non est ei permissum*; 0420C *nulli … licitum*, *non est acceptum*; 0420D *ad nullum … nolit*; *non esse rediturum*; 0421A *ut non offerat*; 0421B *non debet*; 0421D *nolunt nec possunt*; *nullius uxoris*, *neque … neque*, *ne forte*.
- Also: 0422B *non recordetur*, *ad nullum*, *non est dignus*; 0422B *Nulli … nec … nisi*; 0422C *non decet … absque*; 0422C *non decet*; 0422D *non esse justum … nec … nec*; 0423C *non fuit*, *non est … deneganda, nec*, *non adsit*; 0424A *non est ei permissum*; 0424A–B *nullius … nec … non praedicet*; 0424B *ne … dicatur*; the Ezekiel quotation's five *non/neque* and its *non habent*.
- And in Book IV: *nollet/nolit* ×3; *excepta carne* (several); *non cogatur*; *non habeat*, *nequeat*, *si facultates non habeat*; *ex necessitate non faciat*; *non tangat* ×2; *non est ulli permissum*; *non adeat, nec … nec … nec*; *si nesciat*; *non consecrata*; *non habet formam*; *si hoc nesciret*; *non inveniat*; *alter nolit*.

**Scripture.** Checked: the Jas 5 paraphrase (0416A–B), the Matt 5:23–24 paraphrase with its roman gloss (0420C), Lev 19:2 *Estote sancti … Deus et Dominus vester* (0421C), the Ps 14 paraphrase (0422B) and the Ezek 34 paraphrase (0424B–C). All render Migne's wording, and none reverts to the Vulgate or the familiar English.

**Missing or added text.** Sentence counts agree paragraph by paragraph in all four chunks.

## Candidates considered and rejected

1. **0420D `ut ad nullum jus mundi et pacem redire nolit`**: "unwilling to return to no law of the world and peace". The double negative reads oddly, but it is the Latin's own. Both negatives are carried, as Pattern 7 requires. *(Checked afterwards: already logged in `cruces-0004.md`.)*
2. **0421A `ut non offerat plus reddere quam antea mutuo acceperat`**: framed on the borrower rather than the lender. The *non* is carried. The Latin forces it. *(Logged.)*
3. **0419B `et absque eucharistia, sumatur`**: this contradicts itself. *absque* is carried as "without", and there is no silent repair. *(Logged.)*
4. **0424B `ita ut non praedicet omnibus hominibus`**: the result clause inverts the intended sense. The *non* is carried literally, which is correct under Pattern 7. *(Logged.)*
5. **0423A `praeparare illum ad Dei judicium, et ad animae suae commodum`**, English "for the profit of their soul". Strictly, the reflexive *suae* in an infinitive clause points to the infinitive's subject, the priest ("his own soul"). I rejected it for two reasons. This early-modern Latin uses *suus* loosely throughout; see F1 itself, and *possessionibus suis* at 0418B. And the people are the ones being prepared, so "their" is a defensible reading. It is not certain enough to report. *(Not logged; I offer it only as a note.)*
6. **0426A `jejunet tres annos, unum in pane et aqua, et duobus diebus Mercurii et Veneris in pane et aqua`**, English "and on two days, Wednesday and Friday". The tariff pattern (three years, one on bread and water, then the other two) invites "and two [years] on Wednesdays and Fridays". But the Latin puts *duobus* next to *diebus* with no *annis*, and the English follows the plain construal. Supplying "years" would be a repair. I rejected it. The orchestrator may want a crux line. *(Not logged.)*
7. **0425C `quindecim annos, septem … et septem`**: the parts do not add up to the total. It is printed so and rendered so. *(Logged.)*
8. **0420A** gives a layman four years but a man *communis conditionis* five. This is the Latin, and it is not normalized. *(Logged.)*
9. **0417A `suspendendi sunt`** is rendered "suspended", which is fixed vocabulary and not reportable.
10. **0425A `reliquo cibo suo utatur`**, English "let him use his other food". It is a slightly free rendering of *reliquo*, but it is not misleading. The neighbouring lines use "on the rest … his own food" for *reliquis*, which is the plural and a different form, so the difference is justified.
11. **0427B `si per fraudem alium inebrietur`**: a passive form with an accusative object, rendered by the sense "gets another drunk". It has no English exponent. *(Logged.)*
12. **0415A `(illis)`, 0416C `(hominem)`, 0417B `(separata)`, 0420B `(inventus)`, 0425A `(annis)`, 0426B `(eum)`, 0426C/0427B `(cibus)`, `(vomens)`**: Migne's parenthetical supplements are all carried in parentheses in the English, and none is dropped.
13. **Heads.** All heads were read against the Latin. The only defect is F1. The printed *Do eo* at 0416C is rendered "On", a one-letter slip. *(Logged; single-witness.)*
