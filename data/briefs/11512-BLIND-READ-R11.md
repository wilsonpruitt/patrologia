# 11512 blind read — R11 (chunks 0070–0075)

Reader: R11 (Opus 5.5 blind reader), 2026-09-26. Brief: `11512-BLIND-READ-BRIEF.md`.
Scope: `src/latin/11512/0070–0075.md` against `src/english/11512/0070–0075.md`, every sentence both columns.
Cruces NOT opened before findings were formed.

## Findings

### F1. 0072, col. 1251C–D — class 4 (text not carried: Migne's bracketed supplement left in Latin)
- **Latin:** `quae tantam vim doloris [1251D] ex desiderio supernae [felicitatis] importat`
- **English as it stands:** `from the desire of the supernal [felicitatis], as hell brings`
- **Proposed English:** `from the desire of the supernal [felicity], as hell brings`
- **Why:** the bracketed word is Migne's own supplement (same form as 1117C *exprimi [potest]*, which this work renders "[can] be expressed", brackets kept, word translated). Here the supplement is left as untranslated Latin, so the English reader gets a bare adjective "the supernal" and a Latin word that reads like a stray marker. Keep the brackets (Migne's), translate the word.
- **Confidence:** probable (certain that it is untranslated; the fix is the work's own precedent at 1117C).
- **Already in the cruces?** Yes, logged at `cruces-0070.md` 1251D: "the square brackets are Migne's (plate p. 632); kept untranslated inside the brackets." So it was a deliberate choice. But it disagrees with this work's own 1117C ruling (`cruces-0030.md`: Migne's *[potest]* carried as "[can]"). The finding stands as a within-work inconsistency for merge-time reconciliation (Song-of-Songs rule: within a work, one voice).

### F2. 0073, col. 1253A — class 2 (active read as passive)
- **Latin:** `Cum soror nostra adhuc parvula sit, atque ideo alloqui non possit, crescat tamen quotidie`
- **English as it stands:** `and therefore cannot be spoken to, yet let her grow daily`
- **Proposed English:** `and therefore cannot address [others], yet let her grow daily`
- **Why:** *alloqui* is the deponent infinitive, active in sense: "cannot address / speak to". The English turns it passive so it matches the lemma's gerundive (*alloquenda est*, "is to be spoken to"). The exposition around it is about her not yet being fit to teach and preach (*sine qua nec docendi, nec praedicandi virtus*; *officium docendi et praedicandi*), which is what the active sense says. A passive reading of a deponent infinitive is possible in medieval Latin, so this is not certain, but the printed form's default is active and the English should not choose the passive silently. If the passive is kept, it needs a crux.
- **Confidence:** probable.
- **Already in the cruces?** No. `cruces-0070.md` logs 1253A only for the Ct 2:10/2:14 join and the VERSE 9 `[var:]`.

### F3. 0074, col. 1257D — class 4 (a non-word silently repaired, no marker)
- **Latin:** `universalem Ecclesiam ex Judaeis et pentibus congregatam`
- **English as it stands:** `the universal Church gathered from Jews and Gentiles, yet in the second`
- **Proposed English:** `the universal Church gathered from Jews and Gentiles [sic: *pentibus*], yet in the second` (only after the plate is read; until then, a crux entry)
- **Why:** *pentibus* is not a word. The English quietly reads *gentibus* with no marker, while every other non-word in these six chunks carries one (*inexusabilis*, *corruvta*, *anidmavertis*, *di ciplinas*, *concapivit*, *tui*, *dieitur*, *obrumbratio*). Under Pattern 7 (amended 2026-09-05), the sense may be rendered but the type has to be disclosed. Rule 8a applies: no `[sic:]` without a plate read, because the defect could be ours (a p/g confusion in the digitization) as easily as Migne's.
- **Confidence:** certain that the Latin is a non-word and that the English carries no marker. Whose error it is: unknown until the plate is read.
- **Already in the cruces?** Yes, and adjudicated. `cruces-0070.md` 1257D: the plate prints *gentibus* with a worn *g*, the draft's `[sic:]` was withdrawn, and a TEI patch was proposed. `cruces.md`: "The same broken sort on both copies; it leans *g* … Unchanged." **F3 is WITHDRAWN.** The unmarked "Gentiles" is the plate-read outcome. The residual issue: if the TEI patch is not applied, the Latin column still shows *pentibus* and the English shows no marker, with nothing on the page to reconcile the two. That is a patch-status question, not a translation defect.

### F4. 0074, col. 1259B — class 2 (reference mis-bound: *illorum* vs *isti*)
- **Latin:** `quia cum praelati infirmitate et negligentia plerumque peccent, isti ex superbia et temeritate delinquunt, et illorum contemptus et irreverentia, Dei est contemptus sive irreverentia.`
- **English as it stands:** `these offend from pride and rashness, and their contempt and irreverence is the contempt or irreverence of God.`
- **Proposed English:** `these offend from pride and rashness, and the contempt and irreverence of those is the contempt or irreverence of God.`
- **Why:** *isti* are the subjects and *illorum* are "those", the prelates. So the sentence says that contempt *of the prelates* is contempt *of God* (objective genitive, parallel with *Dei est contemptus*), and the next sentence proves it with *qui vos spernit me spernit*. The English "their", straight after "these offend", binds the contempt to the subjects and flattens the *illi/isti* contrast the argument turns on.
- **Confidence:** probable.
- **Already in the cruces?** No. Nothing logged at 1259B.

### F5. 0075, col. 1261B — class 1 (printed negation dropped)
- **Latin:** `sic in isto fructu, cum aliud non sit potentia, aliud sapientia, atque aliud bonitas, unus tamen et idem est fructus`
- **English as it stands:** `so in this fruit, though power is one thing, wisdom another, and goodness another, yet the fruit is one and the same`
- **Proposed English:** `so in this fruit, though power is not one thing, wisdom another, and goodness another, yet the fruit is one and the same`
- **Why:** Migne prints *non*, and the English drops it, which is Pattern 7a mechanism 2. The affirmative reads more smoothly with *tamen* and with the colour simile before it (three colours, one substance). That smoothness is why it has to be checked: the printed sentence denies that the three are different things. Whatever the intended reading, the negation has to appear, with a crux if the sentence then strains against *tamen*.
- **Confidence:** certain (the *non* is printed and absent from the English).
- **Already in the cruces?** No. `cruces-0075.md` logs 1261B only for *efficiunt*/*officiunt*.

## Summary of findings

| # | chunk | col | class | status |
|---|---|---|---|---|
| F1 | 0072 | 1251D | 4 | stands (within-work inconsistency with 1117C; logged as deliberate) |
| F2 | 0073 | 1253A | 2 | new, probable |
| F3 | 0074 | 1257D | 4 | withdrawn (already adjudicated at the plate) |
| F4 | 0074 | 1259B | 2 | new, probable |
| F5 | 0075 | 1261B | 1 | **new, certain: dropped *non*** |

## Chunks clean

- **0070**: clean. Every sentence of both columns read, and all 16 negation sites carried.
- **0071**: clean. All 23 negation sites carried.
- **0072**: clean except F1 (bracketed Latin left untranslated). All 19 negation sites carried.
- **0073**: F2 only.
- **0074**: F4 only (F3 withdrawn).
- **0075**: F5, plus the crux candidate *deficiens* below.

I checked sentence counts per paragraph on both sides in all six chunks and found no missing or added clause, lemma or citation. The Scripture lemmata (Ct 8:1–11, and the chained citations) were read word by word against the English. Every departure from the Vulgate either carries a `[var:]` or is rendered as Migne prints it.

## Candidates considered and rejected

- **0075 @1260B** *et qui hos deficiens, comparare hunc fructum possit … sed absolute vir dici et esse debeat*, rendered "he who, lacking these, could purchase this fruit". The English gives the literal sense of the printed word. It reads oddly (buying the fruit while lacking the thousand pieces of silver), and *deferens* ("bringing") would fit *vir affert*. But *deficere* + acc. ("forsaking, parting with these") also construes. It is a real word, so there is no defect I can prove. Not in the cruces: **I recommend a crux entry**, but no English change.
- **0070 @1243A** *sola ad meam utilitatem tenere nolim*, rendered "I would not hold thee alone for my own profit". *sola* is feminine and agrees with the speaker ("I alone"), not with *te*, so the English could be taken to mean "thee alone". The sense is nearly the same, so I did not report it. A tidier rendering would be "I would not, alone, hold thee for my own profit".
- **0070 @1242A** *ut dictum es.*, rendered "as has been said" with no marker. The cruces record this as withdrawn at the plate. Fine.
- **0070 @1243C** *ut non sit inexusabilis*, rendered "so that he may not be inexcusable". Rom 1:20 has the opposite sense (*ut sint inexcusabiles*), but the *non* is printed and carried. Faithful.
- **0070 @1244B** *hanc habete discretionem, ut sciat*, rendered "hold this discretion". The imperative is as printed (possibly *habet*). Literal, so no report.
- **0071 @1245D** *in quibus cum benedicitis quando …*, which leaves a broken construction. Carried literally. Fine.
- **0071 @1246B**, **0074 @1257D**: `[sic: corruvta]` and `[sic: obrumbratio]` are written without the italic asterisks that every other `[sic:]` in these chunks uses. The obrumbratio crux explains the choice (no nested italics inside an italic lemma). This is formatting, not a translation defect.
- **0073 @1253D** *Conpingamus*: an orthographic variant, correctly left unmarked.
- **0074 @1258D** *sicut ipse propheta loquitur*, rendered "as he himself speaks by the prophet". This is ambiguous: *propheta* can be ablative, and God is the speaker of the Ezekiel quotation, so the English is defensible.
- **0074 @1258D** *Vos ergo, hoc est praelatos* (accusative *praelatos* after *Vos*), rendered "you, that is, the prelates". Literal. Fine.
- **0074 @1259A** *mentuali*: logged in the cruces. Fine.
- **0073 @1254C** *ei intimam adipisci securitatem*, rendered "for him". Literal rendering of a probable *et*. Faithful.
- Bride/Bridegroom capitalisation: *sponsus/sponsa* are lowercase in Migne throughout these chunks, and the English matches ("bridegroom", "bride"). *coelestis sponsi* at 1246B is "heavenly bridegroom", lowercase. Correct.
