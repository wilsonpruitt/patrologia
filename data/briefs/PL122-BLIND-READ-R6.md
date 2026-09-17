# PL 122 blind read — R6 (9175, 9178, 9181), 2026-09-16

Read blind: no cruces, PENDING, PLATE-READS or PLATE-NOTES file opened before the findings below were
written. Both columns read clause by clause. Cruces status added afterwards in a separate section.

Mechanical counts (both columns): dot runs 9175 = 7/7; 9178 = 8, 16, 5 / 8, 16, 5; 9181 none.
Question marks: English 0 in all three; Latin marks occur only inside `[vl:]` notes. `[fn:]`/`[nt:]`:
zero in all six files, so there are no pairs to check. `[vl:]`: 5 / 4 / 25 in the Latin, **no English
twin anywhere** (confirmed). Pattern 3: *Scriptura* does not occur in any of the three texts, so there is nothing to check.

## Findings

### F1 · 9175 · 1244B · class 2 · probable
- **Latin:** `Obsecrationi, ut dictum est, subposita est postulatio [vl: 4 | …] a sancto Ambrosio pro absolutione peccatorum.`
- **English now:** `Under supplication, as has been said, request is placed by saint Ambrose, for the absolution of sins.`
- **Proposed:** `Under supplication, as has been said, the request for the absolution of sins is placed by saint Ambrose.`
- **Why:** *postulatio … pro absolutione peccatorum* is one noun phrase, "the petition for absolution of
  sins", and it repeats the earlier *obsecrationi, quando absolutionem a malis*. The English puts in a comma
  the Latin does not print (Pattern 8) and leaves "request" bare. That reads as the technical term
  *postulatio* ("request") being placed under supplication, which contradicts the earlier sentence, where
  *postulationi* gets *pugnam contra omnia adversa*.

### F2 · 9181 · 0265D · class 2 · probable
- **Latin:** `humanae naturae, Salvatoris nostri sanguine redemptae, unitatem denuntiat, ad similitudinem videlicet caelestis sacerdotii, quantum possibile est, mortalibus adhuc ordinatam.`
- **English now:** `announces the unity of human nature, redeemed by the blood of our Saviour, ordered, namely, after the likeness of the heavenly priesthood,`
- **Proposed:** `announces the unity of human nature, redeemed by the blood of our Saviour, a unity ordered, namely, after the likeness of the heavenly priesthood,`
- **Why:** *redemptae* is genitive and goes with *naturae*; *ordinatam* is accusative and goes with *unitatem*.
  In the English, "ordered" sits parallel to "redeemed", so it reads as describing human nature. The next
  sentence's *eam … coadaptavit* shows the unity is the subject. Repeating "a unity" makes the agreement
  visible. (Lower-cost alternative: "the unity, ordered…, of human nature redeemed…", but that reorders the Latin.)

### F3 · 9178 · 1024A · class 2 · probable (low)
- **Latin:** `magis vero nos ipsos utpote repulsos et tenere et teneri non valentium.`
- **English now:** `but rather of those unable both to hold and to be held, us ourselves, as being repulsed.`
- **Proposed:** `but rather of things unable both to hold us ourselves, as being repulsed, and to be held.`
- **Why:** *valentium* is genitive plural and agrees with *materialium rerum … habentium*, so these are
  things, not persons. The English "those" invites a reading as people, and it also cuts *nos ipsos* loose into a dangling
  appositive. In the Latin, *nos ipsos* is accusative and stands where only *tenere* can govern it. The
  sentence does not construe as a whole (E11/Pattern 7 literal carry), so this is offered only as the
  closer literal parse. Confidence is low. If it is rejected, at least "those" → "things".

### F4 · 9175 · 1244B · class 5 (E12) · certain as to rule, crux status unknown
- **Latin:** `interpellatio sive postulatio est quaudo populus benedicitur`
- **English now:** `interpellation or request is when the people is blessed`
- **Proposed:** English unchanged. Under E12 there must be a crux that names the printed form *quaudo* (u for n).
- **Why:** this is a single-letter non-word with one possible reading. The English correctly gives the sense
  ("when"), and E12 then requires the crux. It is reported so the crux gets confirmed. It may also be a
  TEI-only error, and only the plate can tell.

## Chunks read and found clean (apart from the findings above)
- **9175/0000**: all sentences checked. Polarity: none in the Latin, none added. Datives of *subponit*,
  *ut vestri codices* (printed *vestri*, not the codex or Floss's *nostri*: correct under E9), the Augustine quotation,
  the lacuna and *Cetera desunt*: all sound.
- **9178/0000**: every *neque* is kept (*Neque extra consequentiam* → "Nor…"; *neque omnino esse
  aestimabitur* → "will not be reckoned to be at all"; *sicut neque ludibrium* → "just as neither is a
  plaything"). *nullo modo moventur*, *non existentes*: kept. Greek πρωτοτύπων carried in Greek with its gloss rendered
  (E3). The *Si vero …* period has no apodosis in the Latin and is carried that way. Heads *Alia in idipsum theoria* are rendered
  with *theoria* (the whole head is italic on both sides). Leader dots match.
- **9181/0000**: sigla table carried untranslated (by decision). All 20+ sentences and the heads align; no polarity
  loss (*non … servienti*, *non solum … sed et … non cessat*). The *ierarcha … sacerdote* ablatives,
  the *quae* (the consecration) … *symbolis … eucharistiae* construction, the ablative absolute *obsequentibus … concinentibus*,
  and the Seraphim subject of *circumstare … laudare* are all parsed correctly. The restored ending (*Haec insunt* … *Cetera
  desiderantur*) is complete: seven heads, the *Praecumbentium* paragraph and all three sentence members are present.
  Thou for Dionysius in the epigram (singular, E8) is correct.

## Candidates considered and rejected
- 9175 `as *pra . . . . . . . st*` and 9178 `the flower of the *oximori*`: the English italicises Latin
  left untranslated, where the Latin is roman. This is the ordinary convention for an unrendered foreign fragment, it changes no
  sense, and the dot count is exact. Not reported. (If E7's "italics only where Floss sets it" is meant to cover this, it is a trivial fix.)
- 9175 `suspendor virorum ac piorum Patrum judicio` → "the judgment of men and of pious Fathers": this looks as if an adjective
  has dropped out of the Latin (*virorum [doctorum] ac piorum*), but the Latin prints what it prints, and the literal carry is correct.
- 9178 `id est, principalium exemplorum` → "that is, of their principal exemplars": "their" is supplied, but it is
  harmless, and E3 is satisfied.
- 9178 `sapienter provideque et ferunt` punctuation/attachment: the Latin does not construe. The literal carry is acceptable.
- 9181 `cuncta … caelitus operari` → "are worked from heaven": the deponent is rendered as passive. "work from
  heaven" would be closer to the grammar, but the sense (the things done in the sacraments are effected by angelic ministry) is
  the same. Not a defect.
- 9181 `Haec insunt … capitula* VII.`: in the Latin the numeral is roman type outside the italic, but in the English "seven" is inside it.
  This is typographic only.
- 9181 `in miro` → "in the chrism": *mirum* = μύρον, a real word here, so this is not a mis-rendering of *mirus*.
- 9181 `Praecumbentium` → "preceding": a rare word, not a single-letter non-word. The rendering fits the list it follows.
- 9181 `mortalibus adhuc` → "for those still mortal": the dative is acceptable.
- 9181 `secunda theoria ejus` → "then secondly its *theoria*": acceptable.

## Cruces check (done AFTER the findings above were written)
See the appended section below.

### Results (cruces opened only after the findings were written)
- **F1** (9175 *postulatio … pro absolutione peccatorum*): **not in the cruces.** 9175 cruces l.11 records only the
  four-term vocabulary. New.
- **F2** (9181 *ordinatam* agreement): **not in the cruces.** New.
- **F3** (9178 *nos ipsos … non valentium*): **partly logged.** 9178 cruces l.63–65 records that the clause has no
  governing word and was rendered word by word, quoting the current English. The parse point (*valentium* =
  things, *nos ipsos* governed by *tenere*) is not argued there. New as a parse proposal, low confidence.
- **F4** (9175 *quaudo*): **already logged** (9175 cruces §1244B, E12, rendered "when"). Nothing owed.
- Rejected candidates *oximori* and *pra . . . st*: both already have cruces entries.
