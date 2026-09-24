# 7090 cruces — stint T1 (chunks 0000–0005, cols 0463D–0488A, PDF pp. 237–249 + p. 250 for notes only)

Every page in range was opened at the plate once (`raw/scans/pl020/pl020.pdf`, 300 dpi, corner numbers
checked first), text collated and every foot note read in the same visit. The English renders what the
plate prints. Notes placed or corrected by hand in the Latin are listed under "Notes" so that
`data/plate-notes/7090.tsv` can be brought into line before any re-chunk (a re-chunk from the TSV as it
stands would erase them).

## Standing decisions

- *MONITUM IN EPISTOLAM SEQUENTEM* → "NOTICE ON THE FOLLOWING LETTER." (corpus precedent: MONITUM → NOTICE).
- Coustant's letter notes: Latin `[cn: a | …]` (Latin only; the verifier forbids `[cn:]` in the English), English
  `[nt: …]` at the same point. The brief's wording ("keep each verbatim in the English … AND add an [nt:] twin")
  conflicts with `verify-english.mjs` check 9a and with Pattern 19; the corpus precedent (8950, 9198) and the
  verifier were followed: the English carries the `[nt:]` only.
- Mentioned words (the consular formula *Honorio aug. VI et Aristeneto conss.*, *post consulatum*, *P. C.*,
  *misi*, *conss.*) stay Latin italic: Coustant's argument turns on their exact form.
- Addressee singular (Anysius, Victricius) → thou/thee (Pattern 17); plural addressees (the Toledo bishops) → you.

## Notes (placement and correction by hand)

- **p. 237, col 0463, note (a)** on the head *EPISTOLA I*: recovered by the sweep but filed among the
  out-of-scope Prolegomena notes. It is keyed (ª) to the head of Epistle I itself, so it belongs to this work.
  Placed in the Latin head of 0000 before *EPISTOLA I*. Plate reads *colligamus* (TSV had *colligimus*) and
  *Holstenius* (second letter damaged on the plate; the TSV's *Helstenius* is a misreading; Lucas Holstenius
  is meant).

- **p. 240 (cols 469–470), notes a–k, sequence complete.** Placed by hand in 0002: (a) at *X.* of the
  Dionysian title list (unplaced), (b) at *XI* (unplaced), (k) before *usura poenarum* (unplaced).
  **Corrected:** (c) the Latin `[cn: c]` carried the ANCHOR words (*clericus factus fuerit, (c) uxorem non
  ducat*) instead of the note; replaced with the plate's note *Ita purum Dionysii exemplar Regium. Alia vero
  subinde aucta, quibus Isid. et Hisp. coll. concinunt, propositum suum servare debeat.* **Moved to the printed
  key:** (d) after *virginibus* (was before it), (g) after *normam* (was before it), (j) after *namque* (was
  before it). **Completed:** (f) the note runs over into the right column: *…Etsi tibi nota sunt omnia docendi ac
  vivendi praecepta, quae regula ecclesiastica continentur.* Note (a) prints *cleritatus* (for *clericatus*) and
  *convocare* (the decree reads *convolare*); both Coustant's type, carried in the note, no marker.
- **p. 241 (cols 471–472), notes a–i, sequence complete.** Placed by hand: (d) after *dicente Domino*, (e) after
  *nullus audeat ordinare*, (i) before *cui in omnibus causis* (all unplaced). **Corrected:** the Latin `[cn: h]`
  (the long note on *vel inter laicos*) stood at the key of note (i), after *Romanae Ecclesiae,*; the plate keys
  (h) after *inter clericos* and (i) before *cui in omnibus*. (h) moved, (i) placed. **Moved to the printed key:**
  (b) before *disciplinam deificam*, (c) before *Exstiterunt*. **Completed:** (e) from the plate (*…hoc item Gallis
  injungat.*); (i) runs over to p. 242, completed from there (*…agendum sibi negotium in urbe Roma.*). In (i) the
  plate prints *quamvis id Oxoniensi Codicis … exemplari non deessent* (read at 400 dpi): *id* is stray (for
  *in*?); the dative construes without it and the English follows the dative ("not wanting to the Oxford exemplar").
- **p. 242 (cols 473–474), notes a–g, sequence complete.** Placed by hand: (a) after *ad sedem apostolicam,* in
  §6 (the unplaced list gave the anchor as *regionibus propriis ecclesiis praesident, regularum hunc librum*, which
  is col 470A; the note is plainly on *beata consuetudo exigit* and the plate keys it at *apostolicam, ª sicut
  synodus statuit*); (b) after *Ut* in §7; (e) after *Unius uxoris virum* in §9 (anchor occurs 6×; the plate key is
  §9's); (g) after *satis errat a regula,*. (a) completed from the plate (the list truncated it at *Ant*); (g) runs
  over to p. 243, completed from there (*…ac Leo, epist. 45.*). In (a) and (i) the MS number is read *3368*
  (p. 241 clearly; p. 242's digit is ambiguous 3/5; the unplaced list had *5368*). Ambrose's letter to Vercelli is
  printed *epist. 63* in (g) (p. 243) and in p. 243 (h); the 3/5 digit is not decidable at 400 dpi in this face,
  and the section numbers (*n. 63* in g, *n. 62* in h) likewise. Recorded as read.
- **p. 243 (cols 475–476), notes a–h, sequence complete.** Placed by hand in 0003: (e) after *cum uxoribus suis*
  in §12 (anchor occurs 2×; the plate key is §12's, not the title list's), (g) after *exaudiri* (anchor 2×), (h)
  after *Unius uxoris virum:* in §12 (anchor not found by the injector: the phrase occurs in 0002 and 0003).
  **Moved to the printed key:** (f) after *praeter* (was before it).

- **p. 244 (cols 477–478), notes a–g, sequence complete.** All at printed keys. (e) plate prints *licitorum....
  gloriam* (an elision in Paulinus's quotation), restored in the Latin. (g) is truncated at the page foot
  (*cum et an-*); the Latin carried a placeholder note of ours inside the `[cn:]` ("(illeg. — note is cut off …)")
  and a stray opening quote: both removed, and the note completed from the top of p. 245's foot area, where it
  continues: *…cum et antea puellis virginitatis propositum licuerit suscipere.* So this "truncated" note is NOT
  truncated: it runs over.
- **p. 245 (cols 479–480; left corner misprinted 379), notes a–h, sequence complete.** All at printed keys.
- **p. 246 (cols 481–482), notes a–b**, both at printed keys. **p. 247 (cols 483–484): no notes** (checked zero).
- **p. 248 (cols 485–486), notes a–e**, all at printed keys. In (b) the plate reads *sit ?equendum* (first letter
  damaged; *sequendum* is Patruinus's word); left as the TSV has it (*aequendum*).
- **p. 249 (cols 487–488), notes a–e.** (c) our Latin ended in a placeholder *(continues past assigned crop, held
  on the plate)*; completed from the right foot column (… *statuimus communioni nostrae esse reddendum.*). (d)
  corrected *suppressi* → *supprimi* (plate). **(e) keys §3 *Num quod non aliquid* at 0488A, which is in chunk
  0006 (T2's): not placed here.** T2 should place it: *Sirm. cum mss. Corc. et Colb., Numquidnum aliquid. Codex
  Bonaevallis, Num quod non aliquid. Ex duobus primis revocato num, et ex postremo quod non, integra et perspicua
  jam habetur lectio. …* (full text in the TSV, p. 249 e).
- **Digits.** This face sets 3 and 5 nearly alike. Years in the notes are left as the TSV reads them where the plate
  is not decisive: p. 244 (g) *Anno 581* (plate looks like 381; the Saragossa council is 380), *anno 397*; p. 249 (c)
  *anno 580* (plate looks like 380); MS *not. 3368* (p. 241 clear, p. 242 ambiguous); Ambrose *epist. 63* (p. 243).
  The English follows the Latin as it stands. A reader with a second witness should settle them.

## Text cruces

- **0466B** *Roma asbcessurus*: the plate prints *asbcessurus* (p. 238, right col., band B), a non-word for
  *abscessurus* "about to depart". Migne's type, read at the plate. `[sic: *asbcessurus*]`, sense rendered beside it.
- **0465A** *par fuit recognoscere* with Migne's inline *(f. te cognoscere)*: rendered as printed ("it was
  fitting to recognize me ordained"); Migne's own conjecture stays in his `[n:]`.
- **0468B** *juxta legem dudum latam tradant curiae facultates*: the plate (p. 239, right col.) prints
  **tradant**; our TEI has *tradunt*. The English follows the plate ("or … to hand over their means"). Patch filed.
- **0474A (§9)** *Unius uxoris virum. Et iterum*: the plate (p. 242, right col.) prints a full stop after *virum*
  (the key ᵉ stands before it); our TEI has none. The English follows the plate. Patch filed.
- **0470B** II Thess. II, 14 printed *quas tradidi vobis sive per verbum, sive per epistolam*; Vulgate *quas
  didicistis, sive per sermonem, sive per epistolam nostram*. Innocent's point is tradition handed down, and
  *tradidi* carries it; `[var:]` fired (col read at the plate, p. 240). Coustant's note (j) records *tradidimus*
  in the old editions.
- **0475A** Prov. XIX, 14 printed *A Deo praeparabitur viro uxor* (LXX-type); Vulgate *a Domino autem proprie uxor
  prudens*. Sense not changed for the argument; no marker.
- **0474A** *Sacerdotes mei semel nubant* / *Sacerdotes mei non nubent amplius*, the second cited by Migne as
  *(Tit. I, 6)*: neither is Vulgate text; Coustant's note (e) traces both to Tertullian's "Leviticus". Rendered as
  printed; the reference is Migne's.
- **0470C** Luke XII, 48 is quoted loosely (*Cui multum enim creditur, plus ab eo exigitur*); Ps. XLIX, 18
  *Videbas furem et currebas cum eo* lacks the Vulgate's *Si*. Not material; no marker.
- **0477A** Rom. VIII, 8–9 *Vos autem jam nom estis in carne*: the plate prints **nom** (p. 244, left col., 400
  dpi). A non-word for *non*; `[sic: nom]` with the negation rendered beside it ("now not [sic: nom] in the flesh",
  7a⁗ q. 2). The marker is unitalicized because it sits inside an italic scripture run.
- **0476A** Lev. XI, 14 cited for *Sancti estote, quoniam et ego sanctus sum Dominus Deus vester* (the text is Lev.
  XI, 44 / XIX, 2): Migne's reference, kept verbatim in its `[n:]`. **0477A** Rom. VIII, 8 is cited for 8–9.
- **0486B** *a pace omnium discederunt*: plate prints *discederunt* (p. 248), which Coustant's note (e) says is the
  manuscripts' reading (*Ita mss. Corb. et Colb.*) and would emend to *discesserunt*. A Coustant reading, not a
  type defect: no marker (P0). Rendered "have withdrawn".
- **0485B** *indulgetiam* (TEI) is *indulgen-|tiam* on the plate, a line-end hyphen our TEI lost a letter at;
  rendered "indulgence". Patch filed. **0486A** *haectenus* (TEI) is *hactenus* on the plate; patch filed.
  **0481B** *hauc* (TEI) is *hanc*; patch filed.
- **0485A** *adeo que* / *necue*: plate glyphs damaged; rendered "and thus" / "or not"; no patch.
- **0481B** *Jac. Sermondus*: the plate prints *Sermondus* (Sirmond meant); carried as printed.
- **0483C** *Incipit regula fidei … et cum praecepto papae urbis Romae Leonis ad Balconium episcopum Galliciae
  transmiserunt*: rendered as printed.
- **0486B** *Nam fratres nostri coepiscopus Hilarius, et Elpidius presbyter*: plural *fratres* with singular
  appositives; rendered "our brethren, our fellow bishop Hilarius and the presbyter Elpidius".
- **0487B** *( Seu discordant et in simultates abeunt)*: Migne's own bracketed variant, translated in place
  ("*Or* disagree and go off into enmities"), parentheses kept.

## Totals (T1)
- Pages read: 237–249 in full (13), 250 for note run-over only.
- Letter notes now in the Latin (each with an English `[nt:]`): 0000: 2, 0001: 0, 0002: 28, 0003: 24, 0004: 0, 0005: 9 = 63. Of these, 14 were placed by hand (1 from the out-of-scope list, all 13 of the unplaced list in this range), 7 moved to the printed key, 1 replaced (0002 c), 7 completed from the plate. One note owed to T2 (p. 249 e).
- `[sic:]` 2 (0466B *asbcessurus*, 0477A *nom*); `[var:]` 1 (0470B); `[cj:]` 0.
