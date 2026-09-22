# Usuardus blind read — R3 (9215, chunks 0001–0004)

Reader R3. Scope: `src/latin/9215/0001–0004.md` against `src/english/9215/0001–0004.md`, every
sentence of both columns, Bouillart notes included (15 May – 19 July, cols 0055–0275).
Findings were formed blind; the cruces were consulted only afterwards (last line of each finding).

## Findings

### F1. 9215 / 0004 / col 0239 (9 July, Cyrillus) — class 3
- **Latin:** `rursus pro instanti et alacri praedicatione facta de Christo, ab eodem capite plexus est.`
- **English as it stands:** `was beheaded a second time by the same man, for the urgent and eager preaching he had made of Christ.`
- **Proposed English:** `was again, for the urgent and eager preaching he had made of Christ, beheaded by the same man.`
- **Why:** *rursus* marks the renewed proceedings after his release (he was freed after surviving the flames); it does not qualify *capite plexus est*. "Beheaded a second time" asserts a first beheading the entry never records.
- **Confidence:** certain.
- **In the cruces:** not logged. `cruces-0004.md` mentions 0239 only for *Gutta* and the Zeno count.

### F2. 9215 / 0001 / col 0099 (29 May, Conon and his son) — class 3
- **Latin:** `qui primum ignito ferro superpositi, deinde craticulam prunis suppositis, et oleo super infuso constanter superaverunt.`
- **English as it stands:** `who, first placed upon red-hot iron, then upon a gridiron with live coals set beneath and oil poured over, constantly overcame.`
- **Proposed English:** `who, first placed upon red-hot iron, then, with live coals set beneath and oil poured over, constantly overcame the gridiron.`
- **Why:** *craticulam* is accusative, the object of *superaverunt*. It is not a second place governed by *superpositi*. The English leaves "overcame" with no object and turns the gridiron into a place they were put on.
- **Confidence:** probable.
- **In the cruces:** not logged. C17 at 0099 treats only *ignis penuriam*.

### F3. 9215 / 0001 / col 0073 (21 May, Secundinus note) — class 3 (note)
- **Latin:** `Quis olim aut quae ejus loco fuit?`
- **English as it stands:** `Who, or what, once stood in his place?`
- **Proposed English:** `What saint, man or woman, once stood in his place?`
- **Why:** *quis … aut quae* is masculine or feminine. Bouillart is asking whether a male or a female saint was erased; *quae* is not the neuter "what". The English loses that alternative.
- **Confidence:** probable.
- **In the cruces:** not logged.

### F4. 9215 / 0003 / col 0189–0191 (25 June, Eligius note) — class 3 (note)
- **Latin:** `quanquam Pratensi consentiunt septem ex codicibus quos vidit, et undecim quos ipse.`
- **English as it stands:** `although seven of the codices which he saw agree with the Pratensis, and eleven of those which I myself saw.`
- **Proposed English:** `although seven of the codices which he saw agree with the Pratensis, and eleven of those which he himself [saw].`
- **Why:** the elided verb repeats *vidit*, so *ipse* is third person. "I myself" puts a first person into the note that the Latin does not print, and it makes Bouillart claim a collation of his own. If the plate prints *vidi* or *ego ipse*, the English stands; that is worth one look at the plate.
- **Confidence:** probable. The ellipsis is genuinely awkward, but the English should not settle it by adding a person.
- **In the cruces:** not logged. Post-check: `data/plate-notes/9215.tsv` line 12, the plate transcription, prints `quos vidit, et undecim quos ipse. BOUILLART.`, with no *vidi*. So the first person is ours, which strengthens this finding.

### F5. 9215 / 0004 / col 0253 (13 July) — class 5 (name)
- **Latin:** `Apud Macedoniam, natalis beati Sileae apostoli;`
- **English as it stands:** `the birthday of blessed Sileae the apostle;`
- **Proposed English:** `the birthday of blessed Silas the apostle;`
- **Why:** *Sileae* is a genitive (nominative *Sileas*, the Vulgate's Silas of Acts 15). The English prints a case ending as a name, for a well-known saint who takes the conventional English form under the brief's name rule.
- **Same class, lower confidence** (the nominative is less certain, so the brief's "keep the printed form" rule may cover them): 0003 col 0181 `depositio sancti Niceae` → "Saint Niceae" (Nicetas of Remesiana); 0004 col 0257 `sancti Heracleae antistitis` → "Saint Heracleae" (Heraclas of Alexandria).
- **Confidence:** probable (Silas); possible (the other two).
- **In the cruces:** ALREADY LOGGED as a deliberate choice. `cruces-0004.md` l.228 (*Sileae*, *Heracleae*) and `cruces-0000.md` C27 (*Niceae*) record "printed form kept, nominative uncertain". It stands as a policy question for Silas only: the nominative is uncertain, but the saint is not.

### F6. 9215 / 0002 / col 0119 (4 June, Bouillart note on the substituted leaf) — class 2, flag for `[cj:]`, not a translation error
- **Latin:** `Forte Castellani oculis fucum fecit membrana æque exstrita, atramentum æque decolor, forma litterarum haud multum assimilis, ut fere coævam et eamdem nullo discrimine manum habuerit.`
- **English as it stands:** `a form of letters not much alike, so that he took the hand for nearly coeval and the same, with no difference.`
- **Proposed English:** `a form of letters not much alike [cj: *assimilis*; read *dissimilis*, "not much unlike"], so that he took the hand for nearly coeval and the same, with no difference.`
- **Why:** the English faithfully carries *haud … assimilis*. But the sentence lists what deceived Castellanus into taking the hand as the same, so it needs "not much UNlike". As printed, the polarity turns the clause round. The plate should be checked to see whether our TEI dropped a *dis-*. If it did not, this is a Pattern 18 gloss.
- **Confidence:** probable that the printed sense is inverted; which of the two applies depends on the plate.
- **In the cruces:** not logged as a crux (the phrase appears only in the note transcript). Post-check: `data/plate-notes/9215.tsv` line 5 also reads `haud multum assimilis`, so it is not a dropped *dis-* in our TEI. It is the plate's reading, and a Pattern 18 `[cj:]` is the fitting form.

## Chunks read and found clean
Every commemoration was counted on both sides for every day in all four chunks, and the counts match. So do every number checked: *cum aliis duobus*, *viginti duorum*, *tribus libris*, *decem*, *quadraginta*, *viginti et septem*, *viginti*, *trium*, *CCLXII*, *undecim annis*, *septem filiis*, *cum aliis tribus*, *triginta*, *decem millium ducentorum trium*, *per decem dies*, *tertio*, *diebus quatuor*, *quingenti*, *tertio confessores*, *quater*, the twelve Scillitans, the seven sons of Felicitas, *anno secundo Neronis*, *III Kal. Maias*, *annis quinque*, and all the Roman dates inside Bouillart's notes. No chunk is entirely clean: 0001 carries F2 and F3, 0002 carries F6, 0003 carries F4 and F5 (Niceae), and 0004 carries F1 and F5. Outside those sites, every sentence and every note of 0001–0004 was read and found faithful.

## Candidates considered and rejected
- **0003, 26 June note, `die xviii Maii Marci et Marcelliani` and `Nazarii … die xiii`.** In this martyrology Mark and Marcellianus fall on 18 JUNE and Nazarius on the 12th. The English ("18 May", "the 13th") faithfully renders Bouillart's printed dates, so it is not an English defect. It may deserve a crux or `[cj:]` as Bouillart's or Migne's slip.
- **0002, 2 June `sancti diaconi` → "Sanctus, deacon".** The lower-case *sancti* is read as the name of the deacon Sanctus of Lyon. That is correct: the list is a list of names, and "holy deacon" would leave a gap in it.
- **0002, 1 June, `seu a quadringentis annis exarati` → "within these four hundred years".** An acceptable rendering of *a … annis*.
- **0002, 15 June, `causam non dico, quin super inductam esse judicent`.** "I plead no case against their judging it written in over the erasure": the polarity is right.
- **0002, 10 June note, `nec semel`, `nemo unquam inficiatus est`, `non recensere`, `non mitius`.** All the negations are carried.
- **0003, 26 June note, `Nullam fere … diem vidi, qua … non afferatur, et qua … non recesseris`.** The double negation is carried correctly. The *non vi sed vii Kal.* is also correct.
- **0003, 25 June, `per ipsius filiam` → "through his daughter".** "His" follows "him" (Constantine) in the English, so it keeps the Latin's reference. Acceptable.
- **0003, 25 June, `Christi martyrem fecit` → "made a martyr of Christ".** A literal rendering the Latin forces.
- **0004, 8 July note, `quod nunquam non animadverti, ubi litura non videtur`.** "I have never failed to observe that there no erasure is seen" keeps both negations.
- **0004, 11 July note, `Non idcirco tamen ausim affirmare … Martianam intrusam fuisse`.** The negation is carried.
- **0001, 25 May, `Passecratis. Valentionis` → "Passecratis. Valentio".** One name is carried in the printed form and the other nominativized. The brief's name rule allows both, and the printed full stop is preserved.
- **0002, 8 June, `Senonis` → "at Senones"** (not "Sens"). This is the Latin form, which the name rule permits.
- **0001, 29 May note, `ignis penuriam` → "the want of fire".** A literal rendering of the printed words. The same applies at 0002, 13 June, `famis inopiam` → "the want of hunger".
- **0003, 17 June note, `Mediolensem` → "Milan".** The next sentence (*Mediolanenses*) confirms Milan.
- **0003, 1 July note, `presbtieri`.** A garbled word inside a Bouillart note, rendered in its evident sense. Allowed by the brief.
- **Missing `BOUILLART.` signatures** (0003 at 21 and 30 June; 0004 at 2 July). They are absent on both sides, so the two columns match.
