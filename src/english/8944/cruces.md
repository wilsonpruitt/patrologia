# 8944 · *Glossa ordinaria*, **Canticum canticorum** — cruces

PL 113, cols **1125D–1168A** · 14 chunks · translated 2026-08-28 by three Opus stints
(0000–0004, 0005–0009, 0010–0013), none of which could see the others. Attributed by Migne
to Walafrid Strabo; in fact **Anselmus Laudunensis et schola**.

**This file is the three-way MERGE.** The range files (`cruces-0000.md`, `cruces-0005.md`,
`cruces-0010.md`) are preserved below, unedited, each under its own heading. This head is
the work-wide layer: what was reconciled ACROSS the three ranges, and what a later sweep
must not churn.

## §0a · Apparatus, counted from the English and not summed from three reports

**25 `[var:]` · 0 `[sic:]` · 3 `[cj:]`** — counted fresh from the English (`grep -o` over
chunks 0000–0013, excluding the cruces files themselves), not summed from the stints' own
reports. The count matches what each range reported for its own chunks (0000–0004: 6;
0005–0009: 8 `[var:]` + 2 `[cj:]`; 0010–0013: 10 `[var:]` + 3 `[sic:]`) **except** that the
three `[sic:]` the third stint took (§2 of `cruces-0010.md` — *fi deles*, *arden*,
*spon sus*) were **withdrawn after this session's plate read** and replaced with silent
TEI-patched rejoins (§0b below), so the corpus-wide count that ships is **0 `[sic:]`**, not
3. `[n:]` notes: **53/53**, exact parity with the Latin twins, checked across all fourteen
chunks. `verify-english.mjs 8944` → **OK, 14 chunks.**

## §0b · ✅ THE PLATE READ — PL 113 pp. 568, 570, 583–584, and why it was worth six pages

Page maps calibrated against printed corner numbers first: **PL 113, PDF page =
(column + 11) / 2** (verified on p. 568 = cols 1125/1126 and re-confirmed on p. 570 =
cols 1129/1130).

- **The praefatio's three HEBREW words, dropped by Corpus Corporum, recovered from p. 568.**
  Migne sets מִשְׁלֵי (Prov 1:1), קֹהֶלֶת (Eccl 1:1) and שִׁיר הַשִּׁירִים (Ct 1:1) beside
  his own transliterations (*misle*, *coheleth*, *sir hassirim*); the digitization kept the
  transliterations and left a doubled-space scar where each Hebrew word had stood. Recovered
  as **TEI patches**, not chunk edits, so a re-chunk reproduces them —
  `data/hebrew-patches/8944.json`. The plate also settled which side of the 1126D/1127A
  column break the third word stands on. ⭐ **Found on a page that was being read for
  something else entirely** — the spot check was looking for foot-of-page conjecture notes
  and found none; the Hebrew loss is a class the check was not aimed at.
- **1130D–1131A — *Sicut pedes*, settled p. 570.** Migne's own lemma misprints Ct 1:4's
  *sicut pelles Salomonis* as *Sicut pedes.* — and Migne himself prints *pelles* correctly
  twenty words above the lemma, while the gloss under it expounds *pellis* (the tent-skin
  over the sunburnt), never *pedes*. **The divergence is Migne's own, confirmed at the
  plate, not the digitization's.** `[var: Vulg. Ct 1:4 *sicut pelles Salomonis*, "as the
  skins of Solomon"]`. Ruled `[var:]`, not `[sic:]` — see §0h.
- **1158C *fi-deles* and 1159D *spon-sus* — LINE-BREAK REJOINS, not corruptions, settled
  pp. 583–584.** Corpus Corporum keeps Migne's line turn but fails to rejoin the hyphenated
  word across it; our anchor then lands inside the gap. Mirror of 8977 @0733B
  (*in-/fructuosos*) in the sibling merge and of 8946 *Salomomonis*, where the same
  digitization rejoined a hyphenated word and instead **duplicated** the syllable. **The
  two `[sic:]` markers the third stint took on these are WITHDRAWN**; words made whole, TEI
  patched. **RULE, carried into every future Glossa run: an anchor that appears to fall
  INSIDE a word is a REJOIN candidate before it is a conjecture or corruption candidate —
  check the plate for a hyphen first.** ⚑ 1158D *arden* (for *ardent*) sits between the two
  rejoins and is **not** one — the plate confirms a dropped final *t*, an ordinary
  compositor's slip, not a line-turn split — so its `[sic:]` stands; the class had to be
  read, not assumed from its neighbours.
- **1159A — *unum baptista* for Migne's own *unum baptisma*, found reading the same page for
  the rejoins.** Eph 4:5 (*Unus Dominus, una fides, unum baptisma*): the neuter *unum*
  demands the neuter *baptisma*, and Migne's plate itself prints *baptista* — an alteration
  to a **different real word**, not a digitization defect (the 8990 *concilio*/*consilio*
  class). The stint had already weighed a `[cj:]` here and declined it ("odd, not
  contrary") — **the decline was correct; the plate supplied what the bar would not.** No
  marker fires: a real word, correctly declined by Pattern 18, correctly left unmarked by
  Pattern 9 (gender mismatch has no English exponent). Rendered "one baptist", as printed.

⭐ **The lesson, shared with the 8977 merge: these were indistinguishable from the file.**
Corpus frequency (§ below) argued *baptista*/*baptisma* and the rejoin pairs equally well in
either direction; only the plate separated a real corruption (*Sicut pedes*) from an
apparatus artefact (the two rejoins) from a genuine authorial alteration (*baptista*). A
single-letter or single-syllable question on a real word is a plate question, always, once
the volume's map is calibrated — and six pages answered five open questions plus one this
session did not even know it had (the Hebrew).

## §0c · VOCABULARY RECONCILED ACROSS THE THREE RANGES

The three ranges were diffed for the book's load-bearing vocabulary before merging.

**Held constant across the whole work, no drift:**

| Latin | English | note |
|---|---|---|
| *sponsus* / *sponsa* | Bridegroom / Bride, capitalized | 0000–0004 print `Bridegroom` 43×/`Bride` 23× against a stray lowercase each; 0005–0009 was drafted lowercase and **converted to match at the merge** (§8 of `cruces-0005.md`) |
| *amica* (prose, not lemma) | my love / the beloved one | two stray "friend"s in 0005–0009 converted to match 0000–0004's usage |
| *proxima mea* | my neighbour | Migne's own *alia translatio*, reused at 1136A |
| *adolescentulae* / *juvenculae* | maidens / young maidens | kept distinct; 1154C's *adolescentulae* matches the 13 uses in 0000–0004 |
| *murenulae* | chains | not etymologized as *murena*; see the cross-work note below |
| *theorica* | the theoric | transliterated, kept beside *ethica*/*physica* |
| Hebrew (מִשְׁלֵי, קֹהֶלֶת, שִׁיר הַשִּׁירִים) and Greek (παραβολάς, ἐκκλησιαστὴς, κῶνος) | verbatim, untranslated | Migne's own transliterations beside them stay italic and untranslated too |

**⭐ *lectulus* vs *lectus* — resolved at this merge, and the resolution is now applied to
all five outstanding sites (`next-session-resume.md` ▶ NEXT item 1, done this session).**
*lectulus* (the diminutive) governs Ct 3:1–3:11 as its lemma and renders **"little bed"**
throughout — Ct 1:15's *Lectulus noster floridus* and its two re-quotes (chunks 0000, 0002,
0003) and the whole of chunk 0005–0009's *In lectulo* gloss (which had already used "little
bed" before the merge, per its own §8). Plain *lectus* occurs four times, all in the
0005–0009 range, in the same argument, and stays **"bed"**. The reason is not a preference
for the literal diminutive: Migne's own gloss counts the two as a pair — ***Utrumque
lectum ambiunt fortissimi*** ("both **beds**") — so collapsing *lectulus* to "bed" would
erase a distinction the passage turns on. **`couch` is a separate word and is not evidence
either way**: it renders *accubitus* (Ct 1:11, *alia translatio*) and *reclinatorium*
(Ct 3:10), never *lectulus* or *lectus*.

**Terms fixed once, inside their own range, and not re-used elsewhere (no drift possible):**
*ferculum* = litter · *reclinatorium* = resting-place · *emissiones* = outgoings ·
*fistula* = sweet cane (*casia* kept italic Latin) · *equitatus* = company of horsemen ·
*maceries* = stone wall · *concionator* = preacher to the assembly · *sodales* = companions.

**Cross-work harmonization: not done, deliberately, in any range.** The site carries seven
other expositions of the Song (7871, 10379, 11321, 21413, 10804, 7914, 9033); none was
consulted as an authority on a rendering, only as a **frequency control** on a single word
(the *nepos* check at 1157D — one occurrence here, one in 7914/0016 of an unrelated
*abnepos*, so not a house reading). Worked instance already on record: 10804 keeps
*murenulae* untranslated and 10379 renders it "chains of gold"; this work renders it plain
"chains" because no gloss here depends on the etymology. Each work stands; no sweep.

## §0d · STANDING CHECKS, RECORDED SO THEY COUNT

- ***deservit* / *deserit* — CHECKED ZERO across all fourteen chunks.** Neither spelling nor
  any *deservi-*/*deseru-* form occurs anywhere in 1125D–1168A; verified mechanically, not
  inherited from the stints' own reports. Same checked-zero result as the sibling 8977.
- **Negation fidelity (tests 2/2a).** All three ranges ran the host-not-neighbour proof on
  every printed negative near a quantifier, correlative or `sed` pivot; none reversed. Zero
  polarity defects were found by any of the three stints reading their own range — see §0g
  for what the *blind*, cross-range reads then found on top of that.
- **Punctuation, band by band (test 3).** All three ranges ran the check per paragraph, not
  per chunk, against the marker-stripped Latin twin. Combined repair count across the whole
  work: **~39 mismatched bands found and fixed** (9 in 0000–0004, 6 in 0005–0009, 27 in
  0010–0013 — see each range's own §), overwhelmingly supplied semicolons where Migne
  prints commas, and a handful of his own colons that had been softened. **Final state: zero
  mismatched bands anywhere in the work.** One question mark supplied where Migne prints a
  full stop (1156C) was caught and reverted; every other `?`/`.` was carried as printed,
  including **five interrogatives Migne closes with a full stop** (1160D) and **the reverse
  nowhere** — Pattern 8b was weighed each time and never invoked, since 8b rescues a mark
  English cannot hold and none of these needed rescuing.
- **Em-dashes:** none introduced anywhere in the work.
- **Marker-swallowing test (7a⁗).** Run on all 25 `[var:]`, which sit beside a complete
  rendering by construction: no clause loses a verb, object, negation or conjunction when
  every marker is stripped. Confirmed by reading the stripped text of all fourteen chunks.

## §0e · WHAT A BLIND READER SHOULD GO TO FIRST

Listed here because each range named its own closest calls, and a merged list is what
whoever adjudicates next actually needs. **This section is not for the blind reader** — the
runbook forbids showing the cruces before findings are formed; it is for whoever reviews
after.

1. **1157D–1158A** — the whole *Respondet piis sanctorum desideriis … eum delectari* passage.
   ⭐⭐ This is where the blind read found and corrected a real defect: the entry had assigned
   the answer to the **Bridegroom**; it is the **Bride**. Three independent proofs settle it
   (the work's own VERS. 3 rubric, verified at the plate p. 584; *eum* not *se* in the
   acc.+inf.; Ct 6:1 marked `<Sponsa>` in the Clementine) — see §4 of `cruces-0010.md` for
   the full argument, now corrected in the shipped English.
2. **1139C** — *unde nos prospicere fecit*, the gaze reversed: causative ("he made **us**
   look out"), not reciprocal. The second blind-read correction; the reciprocal gets its own
   clause immediately after, which would be redundant on the wrong reading.
3. **1147A** — *Coccinea … non cessat*, "she" vs "it" (*vitta*). A blind reader put it at 65%
   and declined. Left as it stands; recorded, not churned. See §0f.
4. **1130D–1131A** — *Sicut pedes*, `[var:]`, the plate-confirmed misprint (§0b). Worth a
   first look because it is the shape (real word, corrupt lemma, right word in its own
   gloss) that recurs across the whole corpus.
5. **1165C** — *foedatur* ("she is defiled") against the rival *foederatur* ("is bound in
   covenant"). Declined on Pattern 18's bar (defilement in childbearing is not foreign to
   the tradition, so the printed word does not assert what the author argues against) — see
   §3 item 8 of `cruces-0010.md`. **Plate candidate**, not yet bought (§0f).

## §0f · PLATE-READ CANDIDATES STILL OPEN

Carried as printed, no marker, awaiting a plate that has not yet been bought. PL 113's page
map is calibrated, so each costs one render.

| col | reading | page | why it is worth reading |
|---|---|---|---|
| 1147A | *Coccinea … non cessat* | — | "she"/"it" (*vitta*); blind reader put it at 65% and declined |
| 1155B | *Ude* for *Unde* | 583 | one occurrence in the whole Latin corpus against 2,024 *Unde* |
| 1156C | *desideralibis* for *desiderabilis* | — | one occurrence against 78; a *b*/*l* metathesis, the *Nephthali*/*Nephtlali* shape |
| 1161A | *sapientiam* for a possible *mercedem*/*substantiam* | — | the sentence's own tail argues *reward*, not *wisdom*; real word, no preferred conjecture named |
| 1165C | *foedatur* vs *foederatur* | 588 | see §0e item 5 |
| 1163D–1164A | *ad partum fructum* | — | will not construe as printed; both words real, corrupt member undetermined |

## §0g · THE POLARITY READ

Two fenced blind readers, working from `translation-style.md` alone plus the convention-3
brief (fragment-expansion churn was named explicitly in the brief for these readers, which
removed the noise without giving away the key — a fix made after the sibling 8977 read
absorbed that churn unnamed). Combined depth on record: **~293 printed negations traced to
a named host** and **~126 supplied pronouns checked**, across all fourteen chunks. **Two
defects found, both the speaker-and-referent class the Song concentrates, both fixed** — see
§0e items 1–2 for the sites and the proofs. Zero polarity (negation-direction) defects.

## §0h · CONVENTIONS SETTLED AT THE MERGE

1. **`[sic:]` is for NON-WORDS; a well-formed word gets `[var:]` or nothing** (Wilson,
   2026-08-28). `[sic:]` **diagnoses** a defect; `[var:]` merely **records** that Migne
   prints A and the Clementine prints B, both verifiable, neither speculative. Applied here:
   *Sicut pedes* (§0b) took `[var:]`, not `[sic:]`, keeping the seam straight with the
   sibling 8977's *vivum*/*vinum* and *vide*/*vidi*, both the same shape (corrupt lemma,
   right word in its own gloss). The corollary this book adds: a suspicion that turns out to
   be a **line-break rejoin** is neither — it is an apparatus artefact, corrected silently by
   TEI patch, no marker at all (§0b, *fi-deles*/*spon-sus*).
2. **The second-position connective particle (*enim, vero, autem, igitur*) is citation
   practice, not a variant — decline it.** Added to or dropped from a citation, it is the
   commentator welding the verse into his own sentence, not a divergent reading. The
   boundary is connective vs. **content**: *proxima*/*amica*, *pedes*/*pelles*,
   *lignis*/*ignis* stay markable; a bare *enim* does not. (No site in this work actually
   turned on this rule — recorded because it governs the corpus this book ships beside.)
3. **`lectulus`/`lectus`, expand-not-contract** — see §0c. The Glossa ruling that an
   inconsistent twin is resolved by expanding the fuller reading, never by contracting it
   to match the shorter, applied here exactly as it did for Ruth.

---


# RANGE FILE — chunks 0000–0004 · cols 1125D–1142C

*Preserved unedited from `cruces-0000.md`.*

## 8944 — *Canticum canticorum* (Glossa ordinaria), cruces for chunks 0000–0004

PL 113, cols 1125D–1142C. PRAEFATIO + CAPUT PRIMUM + CAPUT II (through VERS. 17).
Attributed by Migne to Walafrid Strabo; in fact **Anselmus Laudunensis et schola**.

⛔ Do NOT merge this into `cruces.md` by hand — it is one of three range files.

---

### 1. Conventions followed

Settled Glossa conventions per `src/english/8968/cruces.md` §1, unchanged and not re-opened:
`VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary lemma is
rendered as the phrase it stands for (Ct 1:8 *Equitatui.* → "To my horsemen."; Ct 2:1
*Ego flos.* → "I am the flower of the field."; Ct 2:9 *Similis.* → "My beloved is like a
roe."); attribution sigla ride as ordinary `[n: …]`.

Fixed renderings, held constant across this range (within-work one-voice rule):

| Latin | English | note |
|---|---|---|
| *sponsus* / *sponsa* | Bridegroom / Bride | capitalised throughout; *amica* also = "beloved" only where Migne writes *amica* in prose |
| *Amica mea.* | *My love.* | Ct 1:14 lemma |
| *Proxima mea* / *proxima mea* | *My neighbour* | Migne's own *alia translatio*, and its later re-use at 1136A |
| *adolescentulae* / *juvenculae* | maidens / young maidens | the two Latin words kept distinct |
| *sodales* | companions | 1132A, 1131D — the heretics |
| *concionator* | preacher to the assembly | fixed at 1126D, re-used at 1127A |
| *murenulae* | chains | see §4 below |
| *equitatus* | company of horsemen; *eques* = horseman | Ct 1:8 |
| *maceries* | stone wall | 1140D, 1141C ×2 |
| *theorica* | the theoric | 1127A, 1127D — kept as the transliterated term Migne sets beside *ethica*/*physica* |

**Hebrew and Greek.** The three Hebrew words recovered from the plate this session
(`data/hebrew-patches/8944.json`) stand **verbatim, in place, untranslated**: מִשְׁלֵי
[1125D], קֹהֶלֶת [1126D], שִׁיר הַשִּׁירִים [1126D, immediately before the 1127A break, per
the plate]. Migne's own transliterations beside them (*misle,* *coheleth*, *sir hassirim*)
are kept **italic and untranslated**, since they are his transliterations of the Hebrew,
not Latin words. The Greek likewise rides verbatim: παραβολάς [1125D], ἐκκλησιαστὴς
[1126D], παραβολὰς [1127B] (note Migne's own accent difference between the two
occurrences — reproduced, not normalised), κῶνος [1135C]. Where the clause *names* what a
language calls the book, the Latin common noun IS translated (*Latini proverbia nominant*
→ "the Latins proverbs"), because Migne sets it roman, not italic; adding an italic span
there would break italic parity with the twin.

**Migne's own bracket** at 1136B — `[singulariter]`, offered beside *similiter* — is
carried verbatim and untranslated, as his bracketed matter (register rule; not our
`[x: …]` marker family).

---

### 2. Markers taken (3, all `[var:]`; no `[sic:]`, no `[cj:]`, no `[d:]`, no `[ed:]`)

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| **1132C** | *Et salus ejus equitatio* (Hab. III) | Hab 3:8 *Qui ascendes super equos tuos, et quadrigae tuae salvatio* | The gloss adduces the verse **to prove that the Bridegroom is a horseman** (*Eques, sponsus, dicente propheta*). Migne's *equitatio* is the word the argument rests on and the Clementine has *quadrigae … salvatio*, third person and a different noun. Material by any test. |
| **1136D** | *in protectione alarum tuarum* (Psal. XXXV) | Ps 35:8 *in **tegmine** alarum tuarum* | Clean one-word substitution in a proof-text, and the surrounding argument is precisely about *umbra* — shade/covering — so *tegmine* is the word the context would want and *protectione* is what Migne prints. Rendered as printed ("protection"), Vulgate noted. |
| **1137B** | *Diliges Dominum Deum tuum ex toto corde tuo, et ex tota mente tua, et proximum tuum sicut teipsum* (Marc. XII) | Mc 12:30 *ex tota corde tuo, et ex tota anima tua, et ex tota mente tua, et **ex tota virtute tua***; *diliges proximum tuum tamquam teipsum* is **Mc 12:31** | Two members dropped and two verses conflated — and **the very next sentence of the gloss argues from a member the quotation no longer contains**: *Inimicos **non ex tota virtute**, non sicut teipsum, sed simpliciter.* A reader of our page without the note would find the gloss arguing from words that are not in its own proof-text. |
| **1139D** | *prospiciens per fenestras* | Ct 2:9 *respiciens per fenestras, **prospiciens per cancellos*** | Migne pairs *prospiciens* with the windows; the Clementine pairs it with the lattices and gives the windows *respiciens*. The gloss then builds on *prospicit* twice (*per quinque sensus sollicite contuetur*; *ubi enim non prospicit sponsus*), so the verb is load-bearing. |
| **1139D** | *per retia.* | Ct 2:9 *per **cancellos*** | A lemma with no counterpart at all in the Clementine, glossed at length (*Omnia retibus diaboli plena sunt*). ⚑ Almost certainly an Old Latin reading behind LXX διὰ τῶν δικτύων ("through the nets"), but Pattern 14 forbids speculating about *why* in the marker, so the marker states only the two readings. **Not a corruption:** Migne prints *cancellos* correctly four lines later (1140A), which is what shows *retia* to be a second reading rather than broken type. |
| **1140B** | *Tempus **amputationis** advenit.* (inside the GREG. extract) | Ct 2:12 *tempus **putationis** advenit* | Migne prints the correct *Tempus putationis.* as the VERS. 12 lemma at 1140B, and *amputationis* here — and the Gregory gloss then expounds *amputatio* three times (*Nostra amputatio … In amputatione quippe sarmenta*). The divergence is what the whole paragraph turns on. |

(Six rows; three `[var:]` markers sit in 0004, one in 0002, two in 0003. Count by file:
0002 ×1, 0003 ×2, 0004 ×3.)

---

### 3. Lemmata and citations CHECKED AND FOUND CLEAN

Collated against `sources/vulgate/clementine-flat.txt`, verse by verse. Ct 1 and Ct 2
verse numbers **agree with Migne's `VERS. n.--` throughout this range** (his VERS. 1–16 of
cap. I = Ct 1:1–16; his VERS. 1–17 of cap. II = Ct 2:1–17) — checked, because a one-verse
offset is common in this book and is not present here.

**Ct 1 (chunks 0001–0002).** *Osculetur me osculo oris sui* (1:1) · *Meliora sunt* (1:1
frag.) · *Oleum effusum nomen tuum* · *Ideo adolescentulae dilexerunt te* (1:2) · *Trahe
me post te* (1:3 frag., cut across the Clementine's comma at *Trahe me, post te
curremus*) · *In odorem unguentorum* (1:3, *tuorum* clipped) · *Introduxit me rex* ·
*Exsultabimus et laetabimur* · *Memores uberum* · *Recti diligunt te* (1:3) · *Nigra sum*
· *Sicut tabernacula Cedar* · *sicut pelles Salomonis* (1:4) · *Decoloravit me sol* ·
*Filii matris* · *Posuerunt me custodem in vineis* (1:5) · *Indica mihi* · *In meridie* ·
*Ne vagari incipiam* · *Sodalium tuorum* (1:6) · *Si ignoras* · *Haedos tuos* (1:7) ·
*Equitatui meo* · *In curribus Pharaonis* (1:8) · *Pulchrae sunt genae* · *Collum tuum
sicut monilia* (1:9) · *Faciemus* (1:10) · *Dum esset rex* · *nardus … dedit odorem*
(1:11) · *Fasciculus* · *Ubera mea* (1:12) · *Botrus cypri dilectus* · *In vineis Engaddi*
(1:13) · *Ecce tu pulchra* · *Amica mea* · *Oculi tui columbarum* (1:14) · *Ecce tu
pulcher es, dilecte mi et decorus* · *Lectulus noster floridus* (1:15) · *Tigna domorum
nostrarum cedrina* · *Laquearia* · *Cypressina* (1:16). **All agree with the Clementine.**

**Ct 2 (chunks 0003–0004).** *Ego flos* · *lilium convallium* (2:1) · *Sicut lilium* ·
*spinis* · *Sic amica mea* (2:2) · *Sicut malus* · *Sub umbra* · *Sedi et fructus* ·
*Dulcis* (2:3) · *Introduxit me* · *Ordinavit in me charitatem* (2:4; Clementine spells
*caritatem* — orthography only, no divergence) · *Fulcite* · *Langueo* (2:5) · *Laeva ejus
sub capite meo* · *dextera amplexabitur* (2:6, *illius* and *me* clipped) · *Adjuro* ·
*Per capreas* · *Ne suscitetis* (2:7) · *Vox dilecti mei* · *Saliens in montibus* ·
*Transiliens colles* (2:8) · *Similis* · *capreae* · *hinnulo* · *En ipse stat* · *Post
parietem* · *En dilectus meus loquitur mihi* (2:9) · *Surge propera* · *Veni* (2:10) ·
*Imber abiit* (2:11) · *Flores* · *Tempus putationis* · *Vox turturis audita est* (2:12) ·
*Ficus* · *Vineae florentes* (2:13) · *In foraminibus* · *Maceries* · *Ostende mihi faciem
tuam; sonet vox tua in auribus meis* · *Vox enim tua* (2:14) · *Capite nobis* · *Nam vinea
nostra* (2:15) · *Dilectus meus mihi* · *ego illi* · *Qui pascitur inter lilia* · *Donec
aspiret dies* (2:16–17) · *Revertere, similis* (2:17). **All agree with the Clementine.**
Also clean: the two intra-work re-quotations at 1136C, *Indica mihi quem diligit anima
mea: ubi pascas, ubi cubes in meridie* (Ct 1:6, exact) and *Lectulus noster floridus*
(Ct 1:15, exact).

**Non-Canticles citations checked.** Luc. I (Lc 1:35, *Spiritus sanctus superveniet in te,
et virtus Altissimi obumbrabit tibi*) — **exact**. Psal. CXXIII (Ps 123:7, *Anima nostra
sicut passer erepta est de laqueo venantium*) — **exact**. Matth. V (Mt 5:28, *Qui viderit
mulierem ad concupiscendum eam*) — exact as a fragment (Clementine opens *omnis qui
viderit*). Matth. XIV (Mt 14:31, *Modicae fidei*) — exact. Exod. XV (Ex 15:1, *Cantemus
Domino, gloriose enim*) — exact (Clementine punctuates with a colon where Migne sets a
comma; not a divergence).

**Checked and DECLINED — divergences real but not material, no marker taken:**

- **1127A, Psal. XLIV** (Ps 44:3). Migne: *Speciosus forma prae filiis hominum: propterea
  benedixit te Deus in aeternum.* The Clementine has *diffusa est gratia in labiis tuis*
  between the two members. This is an **elision**, not a divergent wording — every word
  Migne prints is the Clementine's, in order — and nothing in the gloss touches the
  omitted clause. Declined.
- **1128B, Deut. XXXI** (the citation is to Dt **32**:1, not 31). Migne's own reference,
  reproduced verbatim inside the `[n:]` per the marker rule. The quoted words *Audite
  coeli quae loquor* are exact. Logged, not corrected.
- **1130D, Matth. X** (Mt 10:22). Migne: *Eritis odio omnibus **hominibus** propter nomen
  meum*; the Clementine has *eritis odio omnibus propter nomen meum* (so too Lc 21:17).
  One added noun that narrows "all" to "all men". The gloss argues only that the just are
  reckoned *hostes omnium*, which either reading supports. Declined as immaterial;
  recorded here so the check is visible.
- **1134B, Ezech. XXIII.** Migne: *In Aegypto fractae sunt mammae tuae.* Nearest Clementine
  is Ez 23:21, *quando subacta sunt in Aegypto ubera tua, et **confractae** sunt mammae
  **pubertatis** tuae* (cf. 23:3). Migne's is a compression of a real verse with a simplex
  for the compound. The gloss's point (harlots' breasts wrinkle) survives either reading.
  Declined.
- **1139D, Jer. IX** (Jr 9:21). Migne: *Ecce mors ascendit per fenestras nostras*;
  Clementine: *quia ascendit mors per fenestras nostras.* An added *Ecce* and a word-order
  change; the gloss turns on *fenestras*, which is identical. Declined.
- **1135B, *Coniferae cypressi.*** Not scripture at all — it is Virgil (*Aen.* III. 680),
  and Pattern 14 is reserved for scripture quoted as scripture. Rendered, no marker.
- **1133B, *Similitudines auri fabrefaciemus tibi…***. Migne labels it *Alia translatio*
  himself, and again at 1134C (*Proxima mea*). Where the edition announces its own
  variant, a `[var:]` on top of it would tell the reader twice. Declined, by the same
  logic as the rule against stacking our `[sic:]` on Migne's own `( sic )`.

---

### 4. ⚑ THE ONE THAT MATTERS — 1130D–1131A, *Sicut pedes.*

**Migne's lemma reads *Sicut pedes.* where Ct 1:4 has *sicut pelles Salomonis* — and where
Migne himself has just printed *pelles* correctly, twenty words above** (*«sicut pelles
Salomonis» hic ponitur pro veritate*). **The gloss under the lemma then expounds
*pellis*, not *pedes*:** *Ideo caro Dominici hominis vocatur **pellis**, quia sicut
tentorium super aliquem tenditur…* So the paragraph is about the tent-skin over the
sunburnt, and its heading, as printed, says "As feet."

✅ **PLATE-READ AND RULED, 2026-08-28 — the marker is `[var:]`, and it is Migne's.**

**PL 113 p. 570 (cols 1129/1130; corner numbers read before the crop, page map
`(column + 11) / 2` calibrated this session on p. 568 = cols 1125/1126) prints *Sicut
pedes.* at the foot of col. 1130 — and prints *sicut pelles Salomonis* correctly four
lines above it.** So the divergence is on Migne's own plate; Corpus Corporum did not
metathesise anything, and reason 2 of the original decline — that a `[var:]` might blame
the wrong party — is answered. Applied: `[var: Vulg. Ct 1:4 *sicut pelles Salomonis*,
"as the skins of Solomon"]`.

⭐ **The decline was CORRECT and is why the answer is trustworthy.** Reason 1 held exactly
as written: a suspicion aimed at a real word is not settleable from the file, however good
the corpus argument. The stint refused to fire, named the page, computed both page maps,
and specified both outcomes — and the plate then chose between them. That is the procedure
working, not a miss.

#### Why `[var:]` and not `[sic:]` — ruled by Wilson, 2026-08-28

The series' own rule decides it: **`[sic:]` is for NON-WORDS; a well-formed word gets
`[var:]` or nothing.** Every `[sic:]` in this batch went on a non-word (*fi deles*,
*arden*, *spon sus*, *intellexeruut*, *baereticorum*), and the 8976 precedent put one on
*Chistus*. *pedes* is a real word.

And the two markers claim different things. **`[sic:]` DIAGNOSES** — it asserts a defect.
**`[var:]` merely RECORDS** — Migne prints A, the Clementine prints B, both verifiable and
neither speculative. For a compositor's slip we cannot prove was a slip, the recording
marker is the honest one.

⚑ It also keeps the seam straight: this batch carries two more of the identical shape — a
corrupt lemma with the right word in its own gloss — and both took `[var:]`. **8977 @0722B
*vivum* for *vinum*** (the gloss reads *vinum* three times) and **8977 @0744C *vide* for
*vidi*** (the gloss reads *vidi* three times, and the plate confirmed *vide* is Migne's).
A `[sic:]` here would have reopened both.

⛔ **What the marker does NOT say:** that anyone ever read Solomon's *feet*. The paragraph
above stands as the disclosure — Migne sets *pelles* correctly twenty words earlier and the
gloss expounds *pellis*, the tent-skin over the sunburnt — so a reader has the whole
situation and is not left inferring a reading with standing.

---

### 5. Other plate-read candidates and rough places (rendered as printed, no markers)

- **1136C — *cum se sole persecutionem fuscatam querebatur.*** *persecutionem* is
  accusative where the genitive *persecutionis* is required by *sole*. **English has no
  exponent for a Latin case slip** (Pattern 9, the gender-mismatch family), so the English
  reads "darkened by the sun of persecution" and nothing is concealed: the Latin column
  carries the form. No marker, no emendation. ⬜ Worth a glance on the plate if one is
  being fetched for §4 anyway — same column band.
- **1138C — *Hac est quam audivi adjurantem filias Jerusalem.*** *Hac* (ablative) cannot be
  the subject of *est*; *Haec* is required. Same treatment and same reason as the previous
  item: rendered "This is the voice which I heard adjuring…", the case slip visible only in
  the Latin column. ⬜ Plate candidate; a single-letter e/a is exactly the class brief §4
  says the digitization alters in both directions.
- **1135C — *hinc et fructus cum conus dicitur.*** *cum* has no ablative to govern and
  *conus* is nominative. Read as temporal *cum* + indicative and rendered "hence also when
  the fruit is called a cone", which is a meaning the printed word actually has; the likely
  intended reading is *ejus* ("hence also its fruit is called a cone"). Conjecture kept
  here, not in the text (Pattern 7). No marker: the word renders in place.
- **1139D — *sponsus subjecit se retibus mundi qui eminenter, et conscindens viam
  faceret.*** Will not construe as printed: *qui eminenter* has no verb of its own and
  *faceret* is subjunctive with no conjunction. Rendered as closely as the words allow
  ("who eminently, and rending them asunder, might make a way"), which is deliberately as
  rough in English as it is in Latin. **Declined to conjecture** — I could not settle
  between *eminentior*, *evinceret*, and a lost clause, and naming three rivals without
  adjudicating between them is not a conjecture (brief §5).
- **1141C–D — *ea, quam in die desponsationis te mihi servire promisisti.*** *quam*
  (accusative, agreeing with *ea* = *vox*) is stranded by the following accusative +
  infinitive *te mihi servire*. Rendered "but that which, on the day of thy espousal, thou
  didst promise, that thou wouldst serve me" — the English is as disjointed as the Latin.
  No marker; the type is not defective, the syntax is.
- **1141D — *quia multae vineae per fidem et charitatem unam.*** No finite verb printed
  and *unam* is accusative; an ellipsis of *faciunt* is ordinary medieval shorthand, so
  this is **not** a defect. Rendered "many vineyards through faith and charity make one",
  and recorded so a later reader knows the verb was read, not found.
- **1129C — *nunc Moysi nomen auditur in gentibus.*** Reads oddly in a paragraph about
  the name of *Christ* being preached, and *ejus* would be the obvious word. But it
  construes, and it says something true and to the point (the Scriptures of Moses reached
  the Gentiles through the Gospel's spread), so it is Migne's until a plate says
  otherwise. Rendered as printed. **Explicitly NOT raised as a `[cj:]`** — the sentence
  asserts nothing the author is arguing against, which is Pattern 18's bar.
- **1133C — *donec surgat cum stigmatibus argenti***, against the *alia translatio*'s own
  *cum distinctionibus argenti* four lines above. Gloss prose, real word, construes.
  Logged, no action.
- **1131A — *obumbratio vitiorum.*** Objective or separative genitive ("a shadowing
  against vices") is what the tent simile requires, but the Latin is a bare genitive.
  Rendered literally, "an overshadowing of vices".

---

### 6. Referents named (the Glossa's dominant defect class)

Every supplied English pronoun in this range, where the Latin prints none, with what
fixed it. Where two readings construe, both are stated rather than one chosen silently.

- **1128D, *illa … ista*** (Synagogue and Church). Rendered "the former … the latter".
  Decided by the predicates, not by the pronouns: *exspectando venturum* can only be the
  Synagogue and *suscipiendo praesentem* only the Church, and *illa*/*ista* fall that way.
- **1127D, *Per illa … per ista.*** Rendered "by those … by these" **without** naming the
  referents, because both readings construe and neither is decisive: *illa* = the other
  two books (Proverbs and Ecclesiastes, the immediately preceding subject) or *illa* = all
  other canticles (the immediately preceding sentence's *omnia alia … cantica*). The
  sense — vices shunned there, virtues gained here — fits either. Left open on the page.
- **1129A, *In mediis precibus exauditur, et videns sponsum … loquitur.*** Subject
  supplied as "she": the *vox praecedentium adventum Christi* of the preceding sentence,
  which the paragraph then names outright (*sic Synagoga … optat reconciliari*). Not the
  Bridegroom — he is the object of *videns*.
- **1129D–1130A, *Illa … haec.*** "The former … the latter" = the voice of those awaiting
  the incarnation and the voice of those who came after it, both named explicitly two
  sentences above (*Hucusque vox exspectantium … hinc subinfertur vox illorum, qui post
  tempora incarnationis*).
- **1131D, *eam quaerere incipiam.*** *eam* rendered "it" = *requiem*, the nearest
  feminine antecedent and the thing being sought (*in quibus requiem et pascua habeat*).
  Not the Bride: she is the speaker.
- **1132D, *Dubitantem benigne increpat.*** "her" = the Church; the whole column is the
  Bridegroom addressing her (*consequenter post comminationem blanditur ei*).
- **1136D, *Non dicit sedeo, sed sedi.*** "She says" = the Bride, whose *praedicabat …
  memorabat … quaerebat* run through the three preceding clauses of the same sentence.
- **1138D–1139A, *quia eum … imitatur.*** Singular subject supplied as "it" = the
  *mons* of the lemma (*Salit in montibus*), i.e. the lofty soul, glossed a few lines
  later as *sanctorum tam majorum quam minorum altitudines*. ⚠ **A second reading
  construes**: the subject could be an unexpressed *quisquis*, "whoever imitates him".
  Nothing in the sentence decides it; "it" was chosen because the lemma above supplies the
  only printed noun, which is where a Glossa antecedent usually lives.
- **1140A, *Cum jam de corruptionis corpore educitur.*** Subject supplied as "the soul" —
  Gregory names *anima* explicitly six lines later in the same extract (*praegustare anima
  coeperit*), and nothing else in the passage is feminine or led out of a body.
- **1141A, *dum in mundo corpore positi.*** Rendered "set in the world in body". ⚠ **The
  rival reads *mundo* as the adjective**, "set in a clean body" — grammatically available
  and not absurd in a clause praising *pudicitiae amatores*. "In the world" was taken
  because the clause it answers is *conversationem habent in coelis*, and the world/heaven
  antithesis is what the sentence is built on. Recorded because the other reading is live.
- **1142A, *mox amica … respondet.*** "the beloved one" = *sponsa*; *amica* is Migne's own
  word here (prose, not lemma) and the answer is hers, since the Bridegroom has just
  spoken (*Tali affatui dilecti*).

---

### 7. Checks run, including the ones that came back empty

- **`deservit` / `deserit`.** ⚑ **CHECKED ZERO.** Neither form occurs anywhere in chunks
  0000–0004. The only near-hits are *deserti* (0000, gen. of *desertum*, "the land of the
  desert") and *deserimus* (0004 @1140B, *corruptionem carnis deserimus* — *desero* with
  its proper accusative, correct as printed). Nothing to confuse.
- **Question marks.** The Latin of all five chunks prints **zero**. The English prints
  zero. No `?` supplied anywhere; no Pattern 8b indirect-question site arises in this
  range (Migne opens no *Quaeritur*).
- **Guillemets.** Zero in the Latin, zero in the English.
- **Column anchors.** 10 / 14 / 13 / 15 / 13 = 65, verbatim, in order, and **each checked
  against the word it stands beside in the Latin**, not merely for presence (2b).
  Deliberate mid-construction splits, matching Migne: 1126D inside *ad intelligendum |
  ingenio legentium*; 1127A between שִׁיר הַשִּׁירִים and *sir hassirim* (the plate fixes
  this side of the break — see the hebrew-patches note); 1129B inside *duo corpora diversa
  | junguntur*; 1130C inside *diligere | credunt*; 1136C inside *spiritum | mulceat*;
  1137B inside *Spiritus | sanctus*; 1141C inside the italic span *in auribus | meis*.
- **Punctuation by column band (test 3).** Colons and semicolons compared position by
  position against the Latin twin, marker content excluded: **all five chunks match
  exactly, in sequence, not merely in total.** Eight supplied semicolons and nine supplied
  colons were found this way during drafting and removed, and three printed marks that had
  been softened to commas were restored (0000 *vana esse et brevia:*, 0001 *dicentes:* and
  the 1131C *est:* before *Posuerunt me custodem in vineis*). Totals had **not** cancelled
  in this case, but they would have in 0001, where the extras and the losses were within
  four of each other.
- **Negation fidelity (tests 2 and 2a).** Every printed `non / nec / neque / nisi /
  nullus / nemo / nunquam / nihil / ne / minus / nolentes / nolunt` carried, with its host
  named. The sites where a quantifier or correlative sits next to the negative, and where
  the host was proved from structure rather than from what reads well:
  - 1126D *conciones **non solum** spiritualiter ad unum … **sed** ad universos* — the
    `sed` member is *ad universos*, so the negative is on *ad unum*, not on *dirigantur*.
  - 1130B *Non de perceptis muneribus **ipsi nos** extollimus, **sed te*** — the `sed`
    member is the object *te*, so the negative is on *nos*, not on the verb: "We extol
    **not ourselves** … but thee."
  - 1130B *ideo **non in nobis, sed in te** exsultabimus* — host is the prepositional
    phrase, same proof.
  - 1130D *Hic sicut ponitur **non pro veritate, sed pro aestimatione*** — host is *pro
    veritate*.
  - 1132B *Quia **non juxta** mandatorum meorum regulam, **sed juxta** tuos errores* —
    host is the first *juxta* phrase; and *non inter oves, sed haedos* likewise.
  - 1133A *nulla pravorum doctorum doctrina vel suggestione corrumpas* — *nulla* is on
    *doctrina/suggestione*, and the English puts it there ("by no doctrine or suggestion
    … dost thou corrupt"), not on the verb.
  - 1137B *Inimicos **non ex tota virtute, non sicut teipsum**, sed simpliciter* — two
    negatives, both on phrases, neither on a verb; see also §2, since the first of them
    quotes a member Migne's own citation has dropped.
  - 1138C *non tantum poenam illius peccati incurrunt, **sed etiam** puniuntur* — host is
    *poenam illius peccati*; the `sed etiam` member is a second verb, so the English keeps
    "not only the penalty … but are also punished" and does not slide the negative onto
    *incurrunt*.
  - 1142A *non solum hortatur, sed etiam adjuvat* — here the host genuinely **is** the
    verb, proved by the `sed etiam` member being a verb too. Recorded because it is the
    control case for the rule above.
  - 1131B *seminarium verbi spargebant latius **nolentes*** — the negative is inside the
    participle and applies to the willing, not to the scattering: "unwilling they were
    scattering … more widely." Reversing that would make the sentence say the opposite of
    the paradox Migne is drawing.
  - 1132A *nec reminisceris quod **nemo** coronatur, **nisi** qui legitime certaverit* —
    three negatives, all carried.
  - 1130B *Nos quoque **non quidem** diligimus, sed diligemus* — carried literally, present
    against future, though it reads oddly in a paragraph praising the maidens. Not
    repaired; that oddity is Migne's.
- **Comparatives (7a mechanism 4).** *minus enim onerati peccatis allevant oneratos*
  (1138C) — "those **less** burdened … lighten the burdened", direction preserved. *Nam
  quod **minus** audire potuit **amplius** videbit* (1140A) — both members carried, neither
  reversed. *major est fructus praedicationis quam quietis* (1136A) and *quanto plus
  atteritur, tanto majorem reddit odorem* (1134A) — checked, unreversed.
- **Marker-swallowing test (7a⁗ / test 1).** All three marker types in this range are
  `[var:]`, which sits **beside** a complete rendering by construction. Strip every
  marker from the five files and no clause loses a verb, an object, a negation or a
  conjunction; no stranded article or preposition on punctuation. Confirmed by reading
  the stripped text.
- **Non-word scan (addendum A).** No non-word, split run, or fused run found in chunks
  0000–0004. **A checked zero**, and worth recording because the four real-word oddities
  in §5 were all raised and all declined on exactly the rule that non-words earn a marker
  and real words do not.
- **Em-dashes.** None used.
- **`verify-english.mjs`.** Passes for 0000–0004 (the reported failures are the
  not-yet-written chunks 0007–0013, another agent's range). One warning: 0001 ratio 1.60.
  Reviewed and accepted — the Latin there is compressed gloss syntax with heavy ellipsis
  (*Alia a sponso, alia a sponsa*; *Recti, omnes qui sunt recti corde*), and English must
  supply articles, auxiliaries and the copula that Latin omits. No clause is padded; the
  other four chunks sit at 1.57–1.59, so 1.60 is the genre's rate, not this chunk's.

---

### 8. False positives NOT reported (runbook items 1–7)

Recorded so a blind reader can tell a skipped check from a considered one.

- **Column-band arithmetic (item 1).** The A–D letters in this range recur and skip
  freely — 1125D → 1126D → 1127A–D → 1128A–D, then 1129A–1132B continuously, then 1132C.
  The jump from 1125D straight to 1126D with no 1126A–C, and the 1127A–1128D run of eight,
  are positional quarter-guides, **not** four bands per column. Nothing reported.
- **Pattern 4 `[f: …]` tails (item 4).** This is a lemma-and-gloss commentary; Migne's
  sources arrive as `[n:]` notes, and there are no inline italic citation tails. **No
  `[f:]` tags anywhere in this range**, correctly.
- **`usque ad` (addendum D).** Does not occur in chunks 0000–0004 at all — checked, since
  the abridgment formula's look-alikes are a known trap. Nothing to decide per occurrence.
- **Attested medieval spellings (Pattern 9).** *charitas / charitatem*, *coelum /
  coelestis*, *Hierosolymis* beside *Jerusalem*, *quanquam*, *Salomonis*, *sarmenta*,
  *praelibavi* — all period-correct, translated normally, no italics, no crux.
- **Cross-work harmonization.** The other Song commentaries on the site (7871, 10379,
  11321, 21413, 10804, 7914, 9033) were **not** consulted as authorities and no lemma here
  was aligned to any of them. Worked instance: 10804 keeps *murenulae* in italic Latin and
  10379 renders it "chains of gold"; **this work renders it "chains"** because no gloss in
  it depends on the etymology (Migne glosses the word as *ornamenta aurium* and as Holy
  Scripture's gold and silver, never as *murena*), which is case 3 of the Song ruling —
  each stands, no sweep.



# RANGE FILE — chunks 0005–0009 · cols 1142D–1157C

*Preserved unedited from `cruces-0005.md`.*

## 8944 · *Glossa ordinaria in Canticum Canticorum* — cruces for chunks **0005–0009** (cols 1142D–1157C)

Range file for the middle agent of three. **Do not merge into `cruces.md` piecemeal** — the merge
is written once at the end from all three range files.

Translated 2026-08-28. Chunks 0005 (1142D–1146A), 0006 (1146B–1149C), 0007 (1149D–1152B),
0008 (1152C–1156A), 0009 (1156B–1157C). `verify-english.mjs` clean for these five files.

**Marker inventory for this range: 8 `[var:]` · 2 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 24 `[n:]` (exact parity with the Latin twins) · 0 guillemets in either language.**

Band check (Brief test 3) run per paragraph, not per chunk: colons, semicolons, question marks,
guillemets and italic-star counts compared paragraph by paragraph against the Latin twin, with
marker contents stripped. **All five chunks return zero mismatched bands.** Six punctuation
repairs were made by that check and are listed in §5 — every one was a mark of Migne's that the
first draft had softened or supplied, i.e. exactly the class the test exists for.

---

### §1 · THE 7a″ DELIVERABLE — every lemma in 1142D–1157C collated against the Clementine

Collated against `sources/vulgate/clementine-flat.txt`, cited from Ct/Mt/Lc/Jo/1Cor/1Thes/Sap/Ps/Apc.
**Lemmata checked and found to agree exactly are listed too**, because a findings-only list cannot
be told apart from a report by an agent that never looked.

#### 1a. Divergences that took a `[var:]` (8)

| col | Migne prints | Clementine | why material |
|---|---|---|---|
| 1146A | *Qui coronavit eum.* | Ct 3:11 *quo coronavit illum* | *Qui* for *quo* changes the relative's case (and, read as a nominative, its referent): the gloss's own answer is *Qua humanitate honestavit eum **mater***, which requires the ablative. Rendered "Who crowned him." as printed. |
| 1148B | *Donec aspiret dies **illa**.* | Ct 4:6 *Donec aspiret dies* | the demonstrative is added, and the gloss builds the last-day reading on it (*nec docendi ultra nec discendi tempus erit*). ⭐ The control is inside this work: at 1142B (chunk 0004) the same work prints *Donec aspiret dies.* for Ct 2:17 with no *illa*. |
| 1152B | *mecum usque ad consummationem saeculi* | Mt 28:20 *ego vobiscum sum omnibus diebus, usque ad consummationem saeculi* | *mecum* for *vobiscum* — the promise is quoted in the first person singular. ⚠ This `usque ad` is the verse's OWN words, not the abridgment formula (Brief §D). |
| 1152B | *non patitur nos tentari supra id quod possumus* | 1Cor 10:13 *non patietur vos tentari supra id quod potestis* | present for future, first person for second, twice over. |
| 1153B | *proxima mea* | Ct 5:2 *amica mea* | the gloss is an etymological chain and turns on the word: *accessu meo, **proxima** mea* — nearness glossing *proxima*. An English conformed to "my friend" would make the gloss explain nothing. |
| 1153B | *perfecta mea* | Ct 5:2 *immaculata mea* | same chain: *de sermone meo quam plenius ex otio didicisti, **perfecta** mea*. |
| 1155B | *inventus alius, neque in coelo, neque in terra qui **acciperet** librum* | Apc 5:3 *nemo poterat neque in caelo, neque in terra … **aperire** librum*; 5:4 *nemo dignus **inventus est aperire** librum* | a conflation of 5:3 and 5:4, and *acciperet* (receive) for *aperire* (open). |
| 1156A | *Oportet in me impleri omnem justitiam* | Mt 3:15 *sic enim decet nos implere omnem justitiam* | wholly different wording under Migne's own *(Matth. III)*; the *in me* is what the gloss argues from (*in se omnem justitiae regulam tenet*). The phrasing is nearer Lc 22:37 *oportet impleri in me*, but that is a research question and the marker states only the two readings. |

#### 1b. Divergences CHECKED and deliberately left unmarked, with the reason

- **1142D *Quaesivi eum, et non inveni.*** — Ct 3:1/3:2 read *quaesivi illum, et non inveni*.
  *eum* for *illum*: same word, same sense. No marker; recorded here.
- **1143B *Quaesivi, et non inveni:*** — the Ct 3:1/3:2 clause with *illum* dropped; the form with
  the pronoun after the verb is Ct 5:6's. Ordinary gloss clipping.
- **1143A *Vici,* / *Plateae,*** — Ct 3:2 has *per vicos et plateas*; the gloss puts them in the
  nominative to expound them. Its own case, not a variant.
- **1144B *myrrham,* … *thus,*** — Ct 3:6 has the genitives *myrrhae, et thuris*; the gloss governs
  them by *ponit*. Its own case.
- **1144D *ambiunt fortissimi*** — Ct 3:7 *sexaginta fortes ambiunt ex fortissimis Israel*; the gloss
  re-shapes the verse into its own sentence (*Utrumque lectum ambiunt fortissimi*). Not a citation.
- **1145C *Media charitate constravit*** — Clementine *caritate*. Orthographic only (`ch-` is this
  repo's Latin throughout). Not a variant.
- **1146D *Gemellis fetibus*** — Clementine *foetibus*. Orthographic only.
- **1146C *me confessus fuerit coram hominibus*** — Lc 12:8 *confessus fuerit **me** coram hominibus*,
  and Migne's *Qui* (outside the italics) for *Omnis quicumque*. Word order and an opening relative;
  no word is at stake. Unmarked.
- **1146D *Consummatus in brevi explevit tempora multa*** — Sap 4:13 **exact**, but for a comma.
- **1147A *Sicut fragmen mali punici, ita genae*** — Ct 4:3 *ita genae **tuae***; clipped.
- **1148A *hinnuli capreae*** — Ct 4:5 *duo hinnuli, capreae gemelli*; the gloss re-orders to name
  the animal. Not a citation.
- **1149B *Vulnerasti cor*** — Ct 4:9 *Vulnerasti cor **meum***; clipped. Rendered "the heart".
- **1150A *Sine intermissione orate*** — 1Thes 5:17 **exact**.
- **1152D *Inebriamini, charissimi*** — Clementine *carissimi*. Orthographic only.
- **1153B *sunt pleni guttis noctium*** — Ct 5:2 prints the clause verbless (*et cincinni mei guttis
  noctium*), the predicate elided from *caput meum **plenum est** rore*. Migne supplies exactly the
  elided words. Not a divergence; recorded because it looks like one.
- **1153B *Exspoliavi me*** — Clementine *Expoliavi*. Orthographic only (`exs-`/`ex-`).
- **1153D *Manus meae distillaverunt*** — Ct 5:5 *stillaverunt*. Compound for simplex, same sense;
  and the same work prints *distillans* at 4:11 where the Clementine does too. Unmarked.
- **1153D *Et digiti mei pleni sunt myrrha*** — Ct 5:5 *digiti mei pleni myrrha **probatissima***.
  Migne supplies the copula and stops before *probatissima*. Supply + clip; unmarked.
- **1154C *Anima mea liquefacta est. Quaesivi et non inveni illum: vocavi,* etc.** — Ct 5:6 has *ut
  locutus est* between the clauses; the gloss has just used those words in its own prose
  (*et postquam locutus est*), so the omission is its own elision. Unmarked.
- **1155B *caput Christi Deus*** — 1Cor 11:3 *caput **vero** Christi, Deus*; a particle dropped.
  ⚠ Migne's own note reads `[n: (Cor. II)]`, which points at no such verse (it is 1 Cor 11).
  Notes pass verbatim; recorded, not corrected.
- **1155D *consite a pigmentariis*** — Ct 5:13 *consitae*. A form question, not a wording one.
- **1156B *Aureae, plenae hiacynthis*** — Ct 5:14 *hyacinthis*. Orthographic only.
- **1156C *speciosus forma prae filiis hominum*** — Ps 44:3 **exact**.
- **1156C *plenitudine ejus omnes accepimus*** — Jo 1:16 *de plenitudine ejus **nos** omnes accepimus*;
  *nos* dropped, no sense at stake. ⚠ Migne's note prints as `[n: (Joan. )]`, with the chapter
  numeral absent. Carried verbatim, space included.
- **1157B *Quo abiit dilectus tuus, o pulcherrima mulierum.*** — Ct 5:17 **exact in wording**, but
  the Clementine closes it with `?` and **Migne prints a full stop**. Pattern 8: the printed mark
  rides. The English ends with a full stop.
- **1155B *Crines ejus abietes*** — takes no `[var:]` and must not: Migne labels it himself,
  *Alia translatio*. It is a rival version, not a divergent quotation of the Vulgate.

#### 1c. Lemmata collated and found to agree with the Clementine exactly

Ct 3: *In lectulo* · *Surgam, et circuibo civitatem* · *Et non inveni* · *Invenerunt me vigiles* ·
*Num quem diligit* · *Cum pertransissem* · *Donec introducam illum* · *Adjuro vos* · *Cervosque* ·
*Quae est ista* / *Quae est ista?* · *Quae ascendit* · *Per desertum* · *Per desertum sicut virgula
fumi* · *Ex aromatibus* · *universi pulveris pigmentarii* · *En lectulum* · *Israel* · *Omnes
tenentes gladios* · *Ad bella doctissimi* · *Propter timores* · *Ferculum* · *Reclinatorium aureum* ·
*Ascensum purpureum* · *Propter filias Jerusalem* · *Egredimini et videte* · *In diademate* ·
*Desponsationis illius*.
Ct 4: *Quam pulchra es* · *Capilli tui* · *Quae ascenderunt* · *Dentes tui sicut greges tonsarum* ·
*De lavacro, omnes* · *Et sterilis non est* · *Sicut vitta* · *Labia tua* · *Eloquium tuum dulce* ·
*Absque eo* · *Sicut turris David* · *cum propugnaculis* · *Collum tuum* · *Mille clypei* · *Omnis
armatura* · *Duo ubera* · *Duo hinnuli* · *Qui pascuntur* · *Vadam ad montem* · *Vadam ad montem
myrrhae et ad collem thuris* · *Tota pulchra es* · *Veni de Libano* · *De capite Amana* · *De
cubilibus leonum* · *Quam pulchrae* · *Pulchriora sunt ubera* · *Super omnia aromata* · *Favus
distillans* · *Mel et lac sub lingua* · *sub lingua* · *Odor vestimentorum* · *Hortus* · *Fons
signatus* · *Emissiones tuae* · *mala punica* · *Cypri* · *Fistula et cinnamomum* · *Cum universis
lignis* · *Primis* · *Fons hortorum* · *Puteus aquarum viventium* · *Aquarum viventium* · *De
Libano* · *Surge* · *Perfla*.
Ct 5: *Veniat dilectus* (clipped of *meus*) · *Veni in hortum* · *Messui* · *Comedi favum* ·
*Comedite, amici* · *Ego dormio* · *Aperi mihi, soror mea* · *soror mea* · *columba mea* · *Caput
meum* · *Cincinni mei* · *Dilectus meus* · *Manum suam* · *Et venter* · *Surrexi, ut aperirem* ·
*Pessulum ostii* · *At ille declinaverat* · *Tulerunt pallium* · *Adjuro vos, filiae Jerusalem, si
inveneritis* · *Qualis est dilectus* · *Dilectus meus candidus et rubicundus* · *Electus ex
millibus* · *Caput ejus aurum optimum* · *Comae ejus* · *Nigrae quasi corvus* · *Oculi ejus sicut
columbae* · *Oculi ejus* · *Quae lacte sunt lotae* · *Genae* · *Sicut areolae* · *Labia ejus lilia
distillantia myrrham* · *Manus illius* · *Tornatiles* · *Venter ejus eburneus* · *Distinctus* ·
*Crura illius columnae* · *Fundatae super bases* (clipped from *quae fundatae sunt super bases
aureas*) · *Species ejus ut Libani* · *Guttur illius suavissimum* · *Totus* · *Talis est dilectus* ·
*Filiae Jerusalem* · *Quo abiit dilectus*.
NT/OT proof-texts: *Tu es Christus, Filius Dei vivi* (Mt 16:16) · *Hic est Filius meus dilectus*
(Mt 3:17) — both exact.

---

### §2 · THE TWO `[cj:]` MARKERS, AND WHY EACH CLEARS THE BAR

#### 2a. 1142D · *donec **delictum** inveniat* — read *dilectum*

> *Quia vero maximo desiderio aestuat, et quidquid tenet, ei non sufficit, donec **delictum** inveniat*

*delictum* is a real word and Pattern 7 renders it, so `[sic:]` cannot reach it. The English then
asserts that the soul is unsatisfied **until she finds sin** — the opposite of the whole paragraph,
whose own third sentence reads *In hoc lecto **dilectum** quaerit*. That is Pattern 18's ✅ word-
substitution class (the 10703 @1126B model). Shipped additively:
`until she find the offence [cj: *delictum*; read *dilectum*, "the beloved"]`.
⚠ The rival reading considered and rejected: taking *delictum* as a genuine authorial point (the
soul must first find her sin before she finds her Lord). It loses because the sentence's own
governing clause is *maximo desiderio aestuat* for the bridegroom, and because *dilectum* stands
nine lines above in the same gloss doing exactly this work.

#### 2b. 1147B · *Turris est **expugnabilis** praedicatorum constantia* — read *inexpugnabilis*

The tower is the preachers' constancy, *built to defend the buildings of the faith and to drive back
the darts of the enemy*. Calling that constancy **stormable** says what the sentence is arguing
against. The word that went wrong is a privative prefix, i.e. a negation, and Pattern 18's
2026-08-15 extension is explicit that incoherence is no defence in that class (the 7561 @0648 model,
where Migne's setting drops the *non* of *non solum*). Shipped:
`The tower is the stormable [cj: *expugnabilis*; read *inexpugnabilis*, "unstormable"] constancy…`
⚑ Corpus control, stated with its limits: `inexpugnabilis` occurs 5× in `src/latin/`, `expugnabilis`
**only here**. Per Brief addendum A that argument is worth **nothing** against a real word, and the
marker does not rest on it — it rests on Pattern 18's bar. The count is recorded because a plate
read of 1147B would settle whether the *in-* is Migne's loss or the digitization's, and that is
worth knowing either way.

---

### §3 · PLATE-READ CANDIDATES — raised, NOT marked

Both are **non-words**, the class Brief addendum A says to raise explicitly and never to patch on a
corpus argument. Per ship test B neither fires a marker: a false `[sic:]` publicly blames Migne for
what has been, every measured time, the digitization's error.

- **1155B · *Ude*** for *Unde*. `Ude` occurs **once in all of `src/latin/`** — here — against
  **2,024** `Unde`. The clause is *Ude hic elate, non Latinum, sed Graecum videtur*, immediately after
  *Abies, Graece ἐλατη vocatur*, so the sense is certainly "Whence". **Carried as printed and
  unitalicized**, because our Latin sets it roman and italicizing it would create an italic span the
  twin does not have. No `[sic:]`. **A plate read of col. 1155B settles it.**
- **1156C · *desideralibis*** for *desiderabilis* (Ct 5:16 *totus desiderabilis*). One occurrence
  corpus-wide, against **78** `desiderabilis`. A `b`/`l` metathesis of exactly the *Nephthali →
  Nephtlali* shape (Brief §4). It already stands inside an italic span in the twin, so it is
  **carried untranslated in place**, no marker. **A plate read of col. 1156C settles it.**
- ⭐ **And read the whole line when either is read** (Brief addendum C): 1155B's neighbours include
  the Greek ἐλατη and the note `[n: (Cor. II)]`; 1156C's include `[n: (Joan. )]` with its missing
  numeral. A normalization four words away is invisible from the Latin alone.

---

### §4 · SENTENCES THAT DO NOT CONSTRUE — rendered as printed, conjecture kept out of the text

None of these took a marker. Each is a **real word in the wrong slot**, which Pattern 18's ruling
leaves declined ("mood, voice, number and person anomalies that merely fail to construe stay
declined"), or a plain gender/case slip, which Pattern 9 says has no English exponent.

- **1144A · *cum a carnalibus desideriis se alienat **Ecclesiae*** .** *alienat* governs *a* +
  ablative and there is nothing for the oblique *Ecclesiae* to hang on; the sentence wants the
  nominative *Ecclesia* as subject of *dormit … alienat … appropiat*. **Rendered with the oblique
  left visible** ("when she estranges herself from carnal desires, of the Church, and by good
  works…") rather than promoted to subject, because promoting it is the silent repair Pattern 7
  forbids. Conjecture: *Ecclesia*.
- **1145D · *et caro fuit causa hujus victoriae nisi Deus carne obumbraretur, diabolus eum non
  aggrederetur.*** Migne prints no stop before *nisi*; the two clauses are simply run together.
  Rendered run together, with his comma where he sets it. Pattern 8, and no mark supplied.
- **1148A · *qui **oculi** dicuntur quia occulta **proficiunt***.** *proficio* is intransitive, so
  *occulta* cannot be its object; rendered as an adverbial accusative, "because they make progress
  in secret". The eye-imagery of the surrounding list makes *prospiciunt* ("see hidden things") the
  obvious conjecture — a real word against a real word, so no marker, and it is logged here instead.
- **1151C · VERS. 15 opens *Fons hortorum.* **Qui** de primitiva Ecclesia processit … doctrina
  coelestis*** — masculine relative on a feminine antecedent. Pattern 9: Latin grammatical gender
  has no English exponent. English left alone; marked here so a later sweep does not churn it.
- **1153D · *ventris nomine cor designatur, **qui** sicut cibi in ventre, ita cogitationes in corde
  excoquuntur.*** *qui* on neuter *cor*, and the relative has no role in the clause that follows.
  Rendered literally ("which, as food in the belly, so thoughts in the heart are cooked"). Pattern 9
  + Pattern 7; the likely reading is *quia*.
- **1154C · *Transi quidem, sed tamen locutus est mihi mandata sua relinquens…*** An imperative
  stranded among indicatives, in a *quidem … sed tamen* frame whose other member is *locutus est*.
  Rendered as the imperative it is ("Pass over indeed, but yet he spoke to me…"). ⚠ **Two
  conjectures were weighed and neither is in the text:** *Transiit* ("he did pass on"), which the
  lemma above supports (*At ille declinaverat*, Ct 5:6 *atque transierat*), and *Transii* ("I passed
  over"), which the surrounding first-person voice supports. *Transiit* is the better of the two
  because the subject of *locutus est* in the same sentence is the bridegroom, not the Church. It is
  logged and not marked because Pattern 18 declines the person/mood class explicitly.
- **1154D · *Vos filiae Jerusalem supernorum spirituum, qui jam cum Deo regnant.*** A verbless
  apposition with an unattached genitive. Rendered as printed ("You daughters of Jerusalem of the
  spirits above, who already reign with God").
- **1157B · *Major vero cognitio, quae in praesenti de Deo haberi potest, et secundum ejus sola
  opera: quia quod altius est, in carne possumus mirificentiam operum Dei subtiliter attendere.***
  The sentence has no main verb before the colon and the *quia* clause does not follow from it.
  ⛔ **A dropped negative was suspected in *in carne possumus*** and **was not supplied**: the
  closing sentence of the same gloss (*qui licet plenam Dei notitiam non habeant, tamen
  mirificentiam operum Dei acutius considerant*) in fact makes the affirmative reading coherent, so
  the suspicion is recorded and refused rather than acted on. Rendered as printed throughout.
- **1153A · *et hic non, videtur mitti ad omnimodos infideles, sed potius ad eos exhortandos…***
  Migne sets a comma **after** *non*. The `non … sed potius` correlative fixes the host as *ad
  omnimodos infideles*, not the verb, so the English reads "she seems to be sent not, to unbelievers
  of every kind, but rather to exhort…" — the comma preserved where he sets it (Pattern 8), the
  negation on the phrase the structure names (Brief test 2a).
- **1153B · *dulcedinem contemplationis (interpolare) interponere.*** Migne's own parenthetical
  alternative for *interponere*. **Carried verbatim, untranslated**, on the bracketed-variant footing
  (register: `[ *al.,* …]` variants untranslated; style L8 for parenthesized editorial queries).

---

### §5 · WHAT THE BAND CHECK CAUGHT (Brief test 3), and it is not decorative

Six sites, all of them Migne's mark softened or a mark supplied that he does not print. Listed
because the totals would have cancelled in three of the five chunks:

- 1144C *Pigmentarius, vel homo … virtutibus**:** vel Deus* — colon flattened to a comma.
- 1144A *inquirunt … recipi**;** non ex invidia* and 1145A *Ne insidiae tentatoris**;** si eos* —
  two semicolons flattened; the second reads roughly in English and was restored anyway.
- 1146C *signantur**:** sic in dentibus*, 1147A *candor virtutum**:** qui augetur*, 1147B *apparent**:**
  majora tamen*, 1151C *cogitationes**:** sic et ligna*, 1152D *comedit, nec satiatur**:** qui epulas*,
  1154C *quos aperuit**:** quae prius erat*, 1151C *subinfertur … instruit**:** et puteus* — colons
  flattened.
- ⛔ **1156C — a question mark SUPPLIED that Migne does not print.** *Quid per singula ipsius
  Redemptoris membra laudo, totum brevi comprehendam:* reads as a question and the first draft closed
  it with `?`. Migne prints a comma. Pattern 8's "never supply" is unconditional and 8b does not
  reach it, because 8b only ever *keeps* a mark the plate has. Restored to the comma.

---

### §6 · REFERENT DECISIONS — every supplied pronoun, and what fixed it

The Song is where a wrong "he" or "she" reassigns a speech, so these are itemized rather than
summarized.

- **1142D–1143B, the whole *In lectulo* gloss.** Subject throughout is *sancta anima* / the seeking
  Church: **she**. Fixed by *sancta anima* at 1142C and by the feminine *inventam … tenet*, *ipsa et
  quaeritur et invenitur*.
- **1143B *[n: (ID.)] eos transit*** — the note interrupts and the subject is unexpressed. It is the
  seeker of the lemma above (*Cum pertransissem*, Ct 3:4, the Bride), so **she**; the *Transit Petrus
  vigiles* that follows is an added example with its own named subject, not the subject of *transit*.
- **1144A *Ulterius agit de Ecclesia*** — the expositor, **he**, not the Bride; the verb governs *de
  Ecclesia* as its object of treatment.
- **1144C *En lectulum. Priori amice miranti respondet **gentilitas***** — the speaker is named in the
  clause. The addressee *priori amicae* is the earlier Bride from the Jews.
- **1145C *unde addit* / *quia … nos accendit*** — the Bridegroom; fixed by *pro nobis passus est*
  two clauses above.
- **1145D–1146A *admonet … ut … vicem mater reddat*** — ⚠ two readings both construe and the choice
  is recorded rather than made silently. Taken: the Church founded on the Jewish firstfruits
  admonishes *illam primam* (the Synagogue, *jam post apostolos tepidam*), and *mater* is that first
  Church repaying her turn. The rival, that *mater* is the admonishing Gentile Church, also parses;
  it loses because *illam primam* is the sentence's own accusative object and *contribulibus eorum a
  quibus praedicata fuit* points back at the Jewish preachers.
- **1147C *quando aperit sensum, ut intelligant Scripturas*** — ⚠ both readings construe. Taken:
  **he**, the Lord, on the strength of the unmistakable Lc 24:45 echo (*aperuit illis sensum ut
  intelligerent Scripturas*). The rival, that the subject is the tower/the preachers' constancy just
  named, is grammatically available and is recorded here.
- **1153B *De sanguine meo, soror mea; accessu meo, proxima mea*** — first person is the Bridegroom's
  throughout this stretch; fixed by *Caput meum … amor mei* and by the lemma Ct 5:2, which the
  Clementine marks `<Sponsus>`.
- **1154C *Transi quidem, sed tamen locutus est mihi*** — the speaker is the Church (*mihi*), the
  subject of *locutus est* the Bridegroom. See §4.
- **1155A *denuo interrogatur*** — the Bride; the questioners are the *filiae Jerusalem* of VERS. 8.
- **1157A *Cum ad patriam coelestem suspirat, filia: cum nihil nisi Deum curat*** — one and the same
  Church under two names, which the gloss states in so many words (*eadem Christi Ecclesia notatur et
  nomine sponsae, et nomine filiarum*). No pronoun was supplied here that the Latin does not fix.

---

### §7 · STANDING CHECKS FOR THIS SERIES

- **⭐ *deservit* / *deserit* — CHECKED ZERO.** `grep -n "deserv\|deserit\|deseru"` over
  `src/latin/8944/0005–0009.md` returns **no occurrences at all**. Neither member of the pair is
  present anywhere in this range, so there is nothing to adjudicate. Recorded as a checked zero
  rather than passed over in silence.
- **Negation fidelity (Brief tests 2 and 2a).** Every printed `non · nec · neque · nisi · nunquam ·
  nullus · nihil · nequaquam` was traced to its host. The sites where a quantifier or correlative sat
  next to a verb, and how the host was proved from structure, not from what read well:
  - 1143D *ut **non minorem** … curam habere … **sed** aequalem … gerere designet* — host is
    *minorem*, proved by the *sed aequalem* answer, not the infinitive.
  - 1144A *non ex invidia, sed quasi admirantes* — host is the phrase; the 8960 @0740B model exactly.
  - 1142D *tenebras mundi a se **perfecte non** excutit* — *perfecte* stands beside the verb. English
    "does not perfectly shake off" leaves the scope exactly where Latin leaves it, and the following
    *quanto gravius patitur* confirms the darkness remains on either reading.
  - 1145C *non sunt dicendi **filii** … **sed** filiae* — host is *filii*, proved by the *sed*.
  - 1145D *nisi Deus carne obumbraretur, diabolus eum **non** aggrederetur* — both carried; see §4.
  - 1147D *non solum evadunt, **sed etiam** acies superant* — *non* on *solum*, not on *evadunt*.
  - 1148C *potest **non incongrue** videri* — host is the adverb.
  - 1149C *hominibus placent, tamen Deo **nunquam*** — host is *Deo*, the *tamen* pivot.
  - 1150B *Nulla sunt quippe membra … quae **non** … sint infusione consecrata* — both carried.
  - 1152A *nequaquam adversariis illius, tentandi **negaretur** accessus, **sed potius**
    monstraretur* — a genuine double negative; carried as a double negative, and the *sed potius*
    shows the result is that access IS granted. Not smoothed.
  - 1152D *comedit, **nec** satiatur … **nec tamen** vitam correxit … bibit, et **non** inebriatur* —
    the whole Gregorian chain carried mark for mark.
  - 1153B *Ecclesia **non inobediens** de injuncto officio, **sed** metuens* — a printed double
    negative rendered as one ("not disobedient"), never collapsed to "obedient".
  - 1154B *cupit jam **non** per angustiam foraminis … **sed** patefacta cordis janua* — host is the
    prepositional phrase, proved by *sed*.
  - 1155C *quae … **non** in coeno more porcorum volvi permittunt, **sed** … reddunt* — host is the
    infinitive phrase, proved by *sed*; and *non stagnis turbulentis* three lines later, host the
    dative.
  - 1156A *non solum ejus sermones, sed etiam mores* · 1156C *non solum secundum divinitatem, sed
    etiam secundum humanitatem* — both on *solum*.
  ⭐ **No polarity defect was found in this range.** That is a result, not an absence of looking:
  Ruth's blind read returned the same zero and four silent repairs of the 7a″ class instead, which is
  why §1 is the long section and this one is short.
- **Em-dashes:** none introduced. Three drafted sentences that reached for one (1144A, 1144D, 1152A)
  were rebuilt on the Latin's own comma or colon.
- **`usque ad` (Brief §D):** five occurrences in this range, and **none of them is the abridgment
  formula** — 1152B *usque ad consummationem saeculi* (Mt 28:20's own words), 1152C *usque ad
  defectum*, 1153A *usque ad finem mundi*, 1154C *usque ad novissimam intrationem*, 1156C *usque ad
  triumphum passionis*. All ordinary prepositional uses; each was decided from what stands on either
  side, per occurrence.

---

### §8 · WITHIN-WORK CONSISTENCY — reconciled where I could see the other agent's files, flagged where I could not

Three agents split this work and the merge owes it one voice (style §"The boundary": across works
let each stand, **within** a work reconcile).

- ✅ **`sponsa` / `sponsus` → Bride / Bridegroom, CAPITALIZED.** Chunks 0000–0004 print `Bride` 23×
  against `bride` 2×, and `Bridegroom` 43× against 1. My five chunks were drafted lowercase and were
  **converted to match** before filing.
- ✅ **`amica` → love, not friend.** 0000–0004 render it "my love" (2×). Two "friend"s at 1144C and
  1143D were converted to "love".
- ✅ **`adolescentulae` → maidens**, matching 0000–0004 (13×). Used at 1154C.
- ⚠ **`lectulus` is NOT yet reconciled and the merge must settle it.** Chunk 0000 renders it "little
  bed" (1128C); chunk 0003 renders *lectuli* / *lectulus noster* as "bed"; chunk 0002's "couch" is a
  different word (*accubitu*, in an *alia translatio*) and is not evidence either way. My range,
  where *lectulus* is the governing lemma of all of Ct 3:1–3:11, uses **"little bed" throughout**,
  after 0000. **Do not resolve this by contracting mine to "bed"** — the diminutive is doing work in
  the gloss (*In lectulo* moralized against *lectulus veri pacifici*, the eternal rest), and the
  Glossa ruling on inconsistent twins is to expand, not to contract.
- Terms fixed inside my own range, once each and never varied: *ferculum* = litter · *reclinatorium*
  = resting-place · *emissiones* = outgoings · *fistula* = sweet cane (with *casia* kept in italic
  Latin) · *cyprus* = cypress · *nardus* = spikenard · *crocus* = saffron · *propugnacula* = bulwarks
  · *areolae* = garden beds · *pigmentarius* = perfumer · *gentilitas* = the Gentile world · *vigiles*
  = watchmen. The plant and spice names carry the whole of VERS. 13–14's exposition, so a synonym
  swapped anywhere in them would break the gloss the way §"The boundary" case 2 describes.

---

### §9 · WHAT WAS READ CLEAN, AND WHAT WAS REJECTED

**Read clean** (Brief test 5, run last, on the finished English against the Latin, asking only
whether it asserts what he asserts): 1146B–1147A (the members allegory), 1148A–1149C (the twin
fawns and the calling of the Synagogue), 1149D–1150B (honeycomb and garments), 1150C–1151D (the
garden, the spices), 1154C–1155A (the maidens and the adjuration), 1155B–1156A (the *candidus et
rubicundus* portrait), 1156B–1157C (hands, legs, throat, and the Gregorian note on place).

**Candidates raised and rejected, with the reason:**
- **1143A *alta via incedunt*** for *lata via* ("the broad way", against *angustam viam* two lines
  above). Rejected: *alta* is a real, well-formed word and Brief addendum A is 10-for-10 that a
  real-word suspicion loses. Rendered "the high road".
- **1145A *Ne insidiae tentatoris; si eos securos inermesque repererint sternant*** — the plural
  *insidiae* with *sternant* looked like an agreement defect. Rejected: *insidiae* is plural in form
  and the verb agrees with it. Nothing wrong.
- **1151B *fistulae duplo praestans*** looked like a case slip. Rejected: *praesto* takes the dative;
  *fistulae* is exactly right.
- **1152A *diffundat … et … satiabit*** — subjunctive followed by future indicative in one purpose
  clause. Rejected as a defect and rendered as printed; late-Latin purpose clauses do this, and
  Pattern 9 exempts attested medieval usage.
- **1149A *non quod diabolus designat*** — reads oddly and no better reading was found. Rendered
  literally, no marker, recorded here so a blind reader knows it was seen.
- **1155B *Nigrae quasi corvus* … *donec sibi, vel matri similari videant*** — *similari* for
  *similes* was considered and rejected; the deponent infinitive construes with *videant*.



# RANGE FILE — chunks 0010–0013 · cols 1157C–1168A

*Preserved unedited from `cruces-0010.md`.*

## 8944 — *Glossa ordinaria* on the Song of Songs — cruces for chunks 0010–0013

Range: **cols 1157C–1168A** (CAPUT VI end · CAPUT VII · CAPUT VII cont. · CAPUT VIII),
the last four chunks of the work. One translator, four chunks (4,039 Latin words →
6,197 English, ratios 1.48–1.55).

Apparatus taken in this range: **10 `[var:]` · 3 `[sic:]` · 0 `[cj:]` · 0 `[d:]` ·
0 `[ed:]` · 0 `[nt:]` · 10 `[n:]`** (`[n:]` at exact parity with the Latin twins:
6 + 1 + 0 + 3). Column anchors 11 + 15 + 1 + 12 = **39**, verbatim, in order, each
checked against the word it stands beside in the Latin. Question marks 0/0/0/**5**,
guillemets 0 throughout. `verify-english.mjs 8944` clean.

⚠ This file is the **range file**, not the merge. `cruces.md` is written once at the end
from all three range files.

---

### §1 · THE 7a″ DIVERGENCE LIST — every italic span in the range, checked against
### `sources/vulgate/clementine-flat.txt`

**Method.** I walked the italics out of my own Latin chunks rather than trusting
`data/briefs/8944-lemmata.txt`, then compared each span with the Clementine
(`grep -P "^Ct [678]:"` and the named books). Span counts agreed with the brief's
inventory in all four chunks (44 · 63 · 6 · 61), so for this range the brief's inventory
was complete — the missing-span problem the Apocalypse peers hit did not recur here.
The brief's placeholder `[1125D]` band on the first spans of chunks 0011, 0012 and 0013
is an artefact of the generator, not a column: those spans stand at 1160B/C, 1164A/B and
1164B/C respectively.

Migne's verse numbering agrees with the Clementine's throughout the range: CAPUT VI
VERS. 1–12 = Ct 6:1–12 (VERS. 5 not separately addressed, its words glossed under VERS. 4),
CAPUT VII VERS. 1–13 = Ct 7:1–13 (VERS. 6 not addressed), CAPUT VIII VERS. 1–14 = Ct 8:1–14.
**No verse is out of sequence and none is misnumbered.** Checked, not assumed.

#### 1a · Divergences MARKED `[var:]` — ten (4 in 0010, 5 in 0011, 1 in 0013)

| col | Migne prints | Clementine | note |
|---|---|---|---|
| 1157D | *Lilia colligit,* | Ct 6:1 *ut pascatur in hortis, et lilia colligat* | indicative for the purpose-subjunctive. The gloss reads it as an indicative present (*dum … educit et … perducit*), so the mood is load-bearing. |
| 1157D | *Ego nepoti meo et nepos meus mihi, qui pascit inter lilia.* | Ct 6:2 *Ego dilecto meo, et dilectus meus mihi, qui pascitur inter lilia.* | the largest divergence in the range: ***nepos* twice for *dilectus*, and active *pascit* for *pascitur*.** Rendered "nephew", not softened to "beloved" or "kinsman". ⚑ The control is inside the gloss: the lemma four words above is printed *Ego dilecto meo* — Migne prints **both** readings on the same line, and the divergent one is his re-quotation, exactly the shape the launch brief names. Corpus control: `nepo-` occurs **once** in this work (here) and once in all seven other Song commentaries on disk (7914/0016, where it is *abnepos* of Aminadab) — so this is not a house reading and not a digitization tic. No `[sic:]`: *nepos* and *pascit* are real, well-formed words (Addendum A). |
| 1158D | *Quod oculus non vidit nec auris audivi,* | 1 Cor 2:9 *Quod oculus non vidit, nec auris audivit* | ***audivi*, first person, where the subject is *auris*.** Rendered with the person visible ("nor ear, I have heard"), which is the anacoluthon the plate prints. See §3 — also logged as a plate-read candidate, since the loss of a final *t* is the shape a digitization makes. The `[var:]` is safe either way: it asserts only what the Clementine reads. ⚠ Migne's own `[n: (Isa. LXIV.)]` attributes the verse to Isaiah; Is 64:4 in the Clementine reads quite differently (*A saeculo non audierunt…*). His citation passes through verbatim per convention 4 and is **not** corrected. |
| 1159B | *quia omne donum optimum desursum descendit* | Jac 1:17 *Omne datum optimum, et omne donum perfectum desursum est, descendens a Patre luminum* | a conflation: *donum* takes *optimum* from *datum*, and *descendit* replaces *est … descendens*. |
| 1162A | *juncta est canalibus,* | Ct 7:5 *comae capitis tui sicut purpura regis vincta canalibus* | *juncta* for *vincta*. Small, and marked because it is presented in italic as the verse's own words and the gloss builds the humility-image on it. |
| 1162A | VERS. 7.-- *Statuta tua.* | Ct 7:7 *Statura tua assimilata est palmae* | ***Statuta* for *Statura*.*** Rendered "Thy statutes" as printed. ⚑ The control is the gloss's own next sentence: *Haec est **rectitudo** bonae operationis, quae ad terrena despicit **incurvari**, totam se ad coelestia **erigit*** — an exposition of upright STATURE, under a lemma that says "statutes". A real word, so no `[sic:]`; also a plate-read candidate (§3). |
| 1162C–D | *ab ubertate domus Dei [1162D] inebriant* | Ps 35:9 *Inebriabuntur ab ubertate domus tuae* | two changes, both in the same direction: *domus Dei* for *domus tuae* and active *inebriant* for passive *Inebriabuntur*. The gloss requires the active (the *magistri* are the subject). |
| 1162D | *sicut botrus* cypri | Ct 7:8 *et erunt ubera tua sicut botri vineae* | singular *botrus* for plural *botri*, and the un-italicized *cypri* imports Ct 1:13 (*Botrus cypri dilectus meus mihi*). The marker names Ct 7:8, the verse under exposition. |
| 1163B | *qui solveret librum,* | Apc 5:2 *Quis est dignus aperire librum, et solvere signacula ejus?* (cf. 5:4 *nemo dignus inventus est aperire librum*) | the Apocalypse looses the **seals** and opens the book; Migne's clause looses the book. Italicized, so presented as a quotation; Pattern 14 rather than Pattern 18. |
| 1165B–C | *Omnia detrimenta arbitror ut stercora, ut Christum lucrifaciam* | Phlp 3:8 *propter quem omnia detrimentum feci, et arbitror ut stercora, ut Christum lucrifaciam* | *omnia detrimenta* (accusative plural noun) for *omnia detrimentum feci*. The tail of the verse is verbatim. |

(Ten rows, ten markers. Three of them — the *nepos*, the Ps 35 and the *sicut botrus* rows —
carry two divergent words inside one marker, because in each case the two changes belong to
one quotation and pull the same way.)

#### 1b · Checked and found to AGREE with the Clementine — no marker

⛔ These are listed because a findings list alone cannot be told apart from a report by an
agent that never looked.

**Chunk 0010 (Ct 6).** *Dilectus meus. Descendit* (6:1; the full stop is Migne's
lemma-splitting punctuation, not a variant) · *Descendit in hortum,* (6:1, cut before
*suum*) · *ad areolam aromatum.* (6:1, verbatim) · *Areola* (the gloss's own nominative of
6:1 *areolam*) · *Ego dilecto meo.* (6:2, verbatim) · *Pulchra es, amica mea.* (6:3) ·
*Terribilis, ut castrorum acies ordinata.* (6:3; Migne's comma after *Terribilis* is
punctuation, not text) · *Averte oculos tuos a me.* (6:4) · *Non enim videbit me homo et
vivet* (**Ex 33:20 verbatim**) · *Quia ipsi me.* + *Avolare fecerunt.* (6:4, the two halves
of *quia ipsi me avolare fecerunt*) · *Magnitudinis ejus non est finis* (**Ps 144:3
verbatim**) · *Capilli tui sicut grex caprarum,* (6:4) · *Omnes gemellis fetibus, et
sterilis non est in eis.* (6:5; *fetibus* / Clementine *foetibus* is orthography, Pattern 9,
no marker) · *Sicut cortex mali punici, sic genae tuae,* (6:6) · *Absque occultis tuis,*
(6:6) · *Sexaginta sunt reginae et octoginta concubinae,* (6:7) · *Una est columba mea,
perfecta mea.* (6:8) · *Viderunt.* / *Praedicaverunt.* (6:8; rendered "They saw." /
"They proclaimed." — ⚠ **NOT** "pronounced her blessed": the Clementine's *beatissimam* is
not inside Migne's span, and importing it would be the 7a″ conformation) · *Quae est ista.*
/ *Quae est ista,* (6:9) · *Quasi aurora consurgens.* (6:9) · *aurora,* ×2, *dies*
(the gloss's own words) · *Pulchra ut luna.* (6:9) · *lunae:* (gloss's own) · *sicut sol*
(**Mt 13:43 verbatim**, *not* Ct 6:9's *electa ut sol* — the gloss has left the lemma) ·
*Terribilis ut castrorum acies ordinata.* (6:9) · *Descendi in hortum nucum,* (6:10) ·
*Nescivi, anima mea.* (6:11) · *Conturbavit me.* (6:11) · *Revertere* ×5 (6:12 prints four;
the gloss's own *quater dicit revertere* accounts for the arithmetic and is correct) ·
*Ut intueamur te,* (6:12).

**Chunk 0011 (Ct 7).** *Quid videbis in Sulamite.* / *Quid videbis.* (7:1) ·
*Quam pulchri sunt gressus.* + *Quam pulchri sunt.* ×2 (7:1) · *Juncturae femorum.* (7:1) ·
*Monilia.* (7:1) · *Quae fabricata sunt.* / *… manu.* (7:1) · *Umbilicus tuus.* /
*Umbilicus.* / *crater,* / *Tornatilis,* (7:2) · *Venter tuus.* ×2 / *acervus* / *tritici,*
/ *Acervus.* / *acervo tritici* / *craterem* (7:2; the case-inflected forms are the gloss's
own syntax, not variants) · *Vallatus liliis.* (7:2) · *Duo ubera.* / *capreae* (7:3) ·
*Collum tuum.* / *turris,* / *ebore* (7:4; *ebore* is the gloss's own noun for the verse's
*eburnea*) · *Oculi tui.* / *in porta* / *Piscinae.* (7:4) · *Hesebon piscinae* (7:4 has
*piscinae in Hesebon*; the order here is the gloss's own sentence, *sicut in civitate
Hesebon piscinae*, not a quotation — no marker) · *filia multitudinis. Nasus.* (7:4 has
genitive *filiae*; the nominative is required by the gloss's own *quae erit filia
multitudinis* — no marker) · *Sicut turris Libani.* / *Contra Damascum.* (7:4) ·
*Caput tuum.* / *Canales,* (7:5) · *Assimilata est palmae.* (7:7) · *Ubera.* (7:7) ·
*Dixi: Ascendam.* / *apprehendam fructus ejus;* / *ubera tua* / *Dixi.* / *Fructus ejus.*
(7:8) · *ascendi in palmam,* (the gloss's own perfect, reporting the lemma's *Ascendam* —
the lemma itself is printed correctly two lines above, which is what shows the shift is
rhetorical and not textual) · *Et odor oris.* (7:8) · *Dignum dilecto meo.* ×2 /
*Ad ruminandum.* (7:9) · *Ego dilecto.* (7:10) · *Veni, dilecte.* / *Veni.* / *agro,* /
*villis,* (7:11) · *vineis,* / *floribus,* / *fructibus,* (7:12, gloss's own ablatives) ·
*Mane surgamus.* / *Videamus.* / *Ibi dabo tibi ubera.* (7:12).
⚠ *cingulo moeroris,* (1162A) is italicized but is **not scripture**: no such phrase in the
Clementine (`grep cingulo`, `grep moeror` — the hits are Is 22:21, Lv 8:8 and a dozen
unrelated *moeror-* verses). It is the gloss's own image and takes no marker.

**Chunk 0012 (Ct 7:13).** *Mandragorae.* ×2 / *dederunt odorem,* / *Servavi tibi.* (7:13,
all verbatim) · *Portae,* (7:13 *in portis nostris*, gloss's own nominative) · *mala,*
(the gloss's own word, picked up from *malis Punicis* below).

**Chunk 0013 (Ct 8).** *Quis mihi.* / *Foris.* / *Deosculer te,* (8:1) ·
*in principio erat Verbum:* (**Jo 1:1 verbatim**) · *Verbum caro factum est* (**Jo 1:14
verbatim**) · *Ibi me docebis.* (8:2) · *Laeva.* / *et dextera:* / *amplexabitur me,* (8:3) ·
*Adjuro vos.* / *Donec ipsa velit.* (8:4) · *Quae est ista?* ×2 / *Sub arbore.* /
*Suscitavi.* (8:5) · *Sanguis ejus super nos, et super filios nostros* (**Mt 27:25
verbatim**) · *Pone me.* / *ut signaculum super cor,* / *Quia fortis est ut mors dilectio.*
/ *Ut mors.* / *Dura sicut infernus,* / *Lampades ejus.* / *ignis:* / *flamma,* (8:6; the
last two are the gloss's own nominatives for the verse's *lampades ignis atque flammarum*) ·
*Aquae multae,* / *Flumina.* / *Si dederit.* / *Si dederit homo.* (8:7) · *Soror nostra,* /
*Soror nostra parva.* / *Quid faciemus sorori,* (8:8) · *Si murus est,* / *Si ostium.* (8:9) ·
*Ego murus.* ×2 / *Ex quo.* / *Quasi pacem reperiens.* (8:10) · *pacifico* /
*Tradidit eam custodibus.* (8:11) · *Mille tui pacifici.* / *mille,* / *argentum,* /
*Mille,* ×2 / *mille* / *centum* / *ducenti,* / *argentei* / *pacifici:* (8:11–12; *centum*
is the gloss's own arithmetic, not a lemma) · *Quae habitas in hortis.* /
*Quae ergo in hortis habitat,* / *vocem suam audire faciat,* / *amici auscultant,* /
*Quae habitas.* / *Amici.* / *Fac me audire.* (8:13; the third-person restatements are the
gloss's own syntax) · *Fuge, dilecte.* ×3 / *Assimilare.* / *montes aromatum,* (8:14).

#### 1c · Fragment handling (convention 3), and the one place it collides

Fragments are rendered as the phrase they stand for, per convention 3 and the
"NAME THE CONTROL'S CLASS" ruling (expand the stump, never contract its twin):
*Quis mihi.* → "Who shall give me." · *Quam pulchri sunt.* → "How beautiful are thy steps."
(expanded, and the fuller *Quam pulchri sunt gressus.* rendered identically, so the work has
one voice) · *Suscitavi.* → "I raised thee up." · *Ibi dabo tibi ubera.* → "There will I give
thee my breasts."

⚠ **One collision, and I record it because it is a real cost.** At 1158A–B Migne splits
Ct 6:4's single clause *quia ipsi me avolare fecerunt* into **two consecutive lemmata** —
*Quia ipsi me.* and *Avolare fecerunt.* — and glosses each separately. The Latin halves are
disjoint; the English halves cannot be, because the verb *fecerunt* lives in the second half
and English cannot leave "Because they themselves me" standing. Rendered
"*Because they themselves have made me.*" and "*They have made me to fly away.*" — the
overlap in "have made me" is forced by English, not by Migne. The alternative (a stump)
was rejected under convention 3; contracting the second lemma to match the first was
rejected under the expand-the-stump ruling.

---

### §2 · MARKERS TAKEN — `[sic:]`, three, all Pattern 10 / Pattern 7 non-word type

Each carries the sense in plain English beside it (7a⁗). **Strip-every-marker test run on
all four files:** every sentence reads aloud complete with the brackets deleted.

| col | printed | English | corpus control |
|---|---|---|---|
| 1158C | *fi deles* | "the faithful [sic: *fi deles*] converted from either people" | split type, Pattern 10 (whole run carried, spacing included). `fi deles` occurs **once in all of `src/latin/`** — this file. |
| 1158D | *arden* | "burn [sic: *arden*] with heavenly desires" | truncation of *ardent*. `arden` as a whole word occurs **once in all of `src/latin/`**; `ardent` is common. The marked run is the clause's only verb, so "burn" stands beside it. |
| 1159D | *spon sus* | "the bridegroom [sic: *spon sus*], or the Church herself, proclaims" | split type. `spon sus` occurs **once in all of `src/latin/`**. The marked run is the sentence's subject, so "the bridegroom" stands beside it. |

⚠⚠ **All three are also plate-read candidates, and the three markers should be WITHDRAWN in
favour of a `data/tei-patches/8944.json` entry if the plate reads *fideles* / *ardent* /
*sponsus*.** Addendum A is explicit that a suspicion aimed at a **non-word** has been
confirmed as *our* corruption every time it has been tested (10 for 10), and a `[sic:]`
that turns out to be the digitization's error publicly blames Migne for something he did not
print — the class in which seven markers were withdrawn in the Joshua/Galatians batch. I have
fired them because Patterns 7, 10 and 12 are unambiguous for carried non-word type and
because leaving them unmarked would mean silently reading the typo; but **a plate read of
PL 113 cols 1158 and 1159 is the cheap resolution and I am asking for it here.**

No `[cj:]`, `[d:]`, `[ed:]` or `[nt:]` was taken. All ten `[n:]` in the range are citations
(`(Exod. XXXIII)`, `(Psal. CXLIV)`, `(RAB.)`, `(GREG.)`, `(Isa. LXIV.)`, `(Jac. I)`,
`(Psal. XXXV)`, `(Joan. I)`, `(Matth. XXVII)`, `(Philip. III)`) — none is editorial prose,
so Pattern 15 does not fire.

---

### §3 · PLATE-READ CANDIDATES — real words, rendered as printed, NO marker

Per Addendum A: a real, well-formed word that reads oddly is **Migne's** until a plate says
otherwise. Each of these is rendered as printed and none carries a marker.

1. **1159A · *unum baptista*** — "Although the persons be many and diverse, yet the faith in
   them is one, **one baptist**, one God, one work." The series is Eph 4:5 (*Unus Dominus,
   una fides, unum baptisma*, checked in the Clementine), and the **neuter *unum* agrees with
   *baptisma*, not with masculine *baptista***. Rendered "one baptist". No `[sic:]` (real
   word), and no `[cj:]` either: I weighed Pattern 18 and declined, because "one baptist"
   is merely odd in a list, not a claim the author is arguing against — Pattern 18's bar is
   Wilson's and this does not reach it. The gender disagreement itself is Pattern 9 (no
   English exponent). **Plate candidate.** Corpus: 2 `baptista` against 17 `baptisma` and
   ~140 other `baptism-` forms in the Glossa books — suggestive, and by Addendum A a
   frequency argument cannot settle a real word.
2. **1162A · *Statuta tua*** for *Statura tua* — see §1a. Marked `[var:]` because it is a
   quoted lemma; also a plate candidate, since *Statuta*/*Statura* is a one-letter
   difference of exactly the class Addendum §4 records in both directions.
3. **1158D · *audivi*** for *audivit* — see §1a. The loss of a final *t* is the digitization's
   characteristic shape. Marked `[var:]` (which asserts only what the Clementine reads) and
   flagged here for the plate.
4. **1161A–B · *ut a Deo remuneratore vel terrenam sapientiam exspectet*** — "that from God
   the rewarder he may look for even earthly **wisdom**". The sentence's own tail is *sed
   terrenam **mercedem** requirit*, and the whole point is a man who does a work of mercy for
   an earthly **reward**. *sapientiam* is a real word and construes; rendered as printed, no
   marker, **plate candidate** (*substantiam*? *mercedem*? — I name no preferred conjecture,
   because none of them is better than the plate).
5. **1160D · *perficit*** in *quia per ministerium praedicantium **perficit** unanimis
   conjunctio credentium populorum* — an active verb with a nominative subject and no
   expressed object. Rendered "brings [it] to perfection", with the supplied object in
   square brackets per the corpus's convention for supplied words; I did **not** silently
   read it as a passive, which is the smoothing Pattern 7a forbids.
6. **1161D · *fluenta doctrinae auditoribus non cessant*** — *cesso* with a direct object and
   no infinitive. Rendered "who cease not the streams of doctrine to their hearers", which is
   as close as the printed words allow. The negation is present and sits on *cessant*, which
   is its only possible host.
7. **1163B · *quod ille prius orans aliis porrexerit*** — *orans* ("praying") where the
   sense-frame is drinking and holding out a cup. Real word, construes, rendered "first
   praying". No marker; noted for the plate only because it sits four words from the
   *potandum* / *ruminandum* pair.
8. **1165C · *foedatur*** in *quando verbo Dei copulata, sancto repleta Spiritu, per
   praedicationis ministerium in filiorum conceptione **foedatur*** — "she is **defiled**"
   in a sentence whose every other term is honourable (*copulata*, *repleta Spiritu*,
   *parturit*, *parit*). ⛔ **This is the range's closest call and I want to say which reading
   I took and why the other lost.** The rival is *foederatur* ("is bound in covenant"), which
   the context invites and which would be a textbook Pattern 18 `[cj:]`. **I declined it and
   rendered the printed *foedatur* ("is defiled") with no marker**, for two reasons:
   (a) *foedatur* is a real word that occupies its slot and construes, so Addendum A puts it
   on Migne's side of the line until a plate says otherwise; (b) the defilement reading is not
   actually foreign to the tradition — the Church contracting a stain in bearing children
   into the world is a commonplace, so the printed word does not clearly assert something the
   author is arguing against, which is Pattern 18's bar. **Plate candidate**; if the plate
   reads *foederatur* this becomes a tei-patch, not a `[cj:]`.
9. **1163A · *fragantiam*** for *fragrantiam* — attested medieval orthography, Pattern 9.
   No marker, no crux beyond this line; recorded so a later sweep does not churn it.
10. **1162A · *plenaria introitione*** — *introitio* is a rare but well-formed noun. Rendered
    "full entering-in". No marker.
11. **1161D · *muniunt alias*** — feminine accusative plural where the antecedent (*illi …
    qui*) is masculine. Pattern 9: gender has no English exponent. Rendered "others".
    No marker, no churn.
12. **1163D–1164A · *si flores ad partum fructum convalescant*** — *ad partum fructum* will
    not construe as it stands (Ct 7:12 has *si flores fructus parturiunt*). Rendered "whether
    the flowers grow strong unto the bringing forth of fruit", which is as close as the
    printed words allow; no marker, because both words are real and I cannot tell which is
    the corrupt one. **Named as a candidate, not adjudicated.**

⭐ **Recorded negatives** (Addendum §4 asks for these, and they are worth having): I looked
for the "suspiciously tidy" normalization class and found nothing to raise. In particular
*deservit* / *deserit* — the standing confusion pair for this series — **does not occur at
all in chunks 0010–0013**: `grep -o "deserv[a-z]*\|deser[a-z]*"` returns **zero hits in all
four files.** That is a checked zero, not a skip. `inservio` at 1158D takes its proper
dative (*doctrinae inserviunt*) and is not a member of the pair.

---

### §4 · REFERENTS — every supplied "he / she / it / they", named

The launch brief is right that this matters unusually much here: *sponsus*, *sponsa*,
*Synagoga*, *Judaea*, *Ecclesia*, *gentilis* and the *amici* trade speeches across these
four chunks, and a wrong pronoun reassigns one.

- **1157D · *Respondet piis sanctorum desideriis … eum delectari*.**
  ⛔ **THIS ENTRY WAS WRONG AND IS CORRECTED — the subject is the BRIDE, not the Bridegroom.**
  Rendered "**She** answers that he is delighted…", with the three preceding verbs in the
  same sentence (*Cum dixisset* … *addit* … *cum dicit*) likewise hers. Found by the blind
  polarity reader on chunks 0007–0013, which proposed the change, met this entry asserting
  the opposite, and **kept the repair** — correctly. Three independent proofs, none of them
  "it reads better":

  1. ⭐ **The work says so itself, four verses on.** VERS. 3 opens *«Pulchra es, amica mea.*
     **Hactenus vox Ecclesiae** Dominum suum laudantis et quaerentis; qui quoniam a suis
     amatoribus non longe est, **sequitur quid quaesitus respondeat**»* — "**thus far** the
     voice of the Church praising and seeking her Lord … **there follows** what the
     sought-one may answer." The commentary declares that everything to this point is the
     Church's voice and that the Bridegroom's reply **begins at VERS. 3.** ⚑ Verified at the
     plate, PL 113 p. 584, col. 1158, not merely from our files.
  2. ***eum*, not *se*.** *Respondet … **eum** delectari* takes a NON-reflexive pronoun in
     the accusative-and-infinitive precisely because the subject of the infinitive is not the
     subject of the governing verb. Had the answerer been the one delighted, Latin required
     *se delectari*. **The original entry's own reasoning collapses here**: it asserted *eum*
     "is the same person" as the subject, which is what *se* would have been for.
  3. **The verse.** Ct 6:1 is marked `<Sponsa>` in the Clementine; the lemma glossed
     (*Descendit in hortum … ad areolam aromatum … lilia colligat*) is the Bride answering
     the daughters' *Quo abiit dilectus tuus* of 5:17.

  ⚑ **And this entry contradicted its own next bullet**, which assigns *apponit* at VERS. 2
  to the Bride — splitting Ct 6:1–2, both `<Sponsa>` and one continuous speech, between two
  persons with no speaker change in the text. **The lesson: a referent call that disagrees
  with the bullet beneath it is already telling you something.**
- **1157D · *apponit*** (VERS. 2): **the bride/Church**, who is the speaker of *Ego dilecto
  meo*. Rendered "She sets this little verse beside it".
- **1157D · *in me potes habere formam ejus, quem quaeritis*.** ⚠ Migne prints a **singular
  *potes* and a plural *quaeritis* in the same clause.** Both are rendered as printed
  ("thou canst have the form of him whom you seek"), per Pattern 17, which makes number a
  marker and not a matter of taste. This is Migne's inconsistency, not ours, and the reader
  can see it. No marker (there is nothing broken to carry).
- **1159D · *Habent tales praelatos … qui … fidem nostram evacuant, et terrorem nobis
  incutiunt*.** ⛔ The "our" and "us" here are **not the Church's**. The sentence is a
  prosopopoeia in the mouth of the *aeris potestates* / heretics against whom the Church is
  *terribilis*, as its own next sentence proves: *eo terribilior est Ecclesia aeris
  potestatibus*. Rendered literally, first person kept, no smoothing. Had I bound *nostram*
  to the Church, the page would have said the Church's prelates destroy the Church's faith.
- **1159D–1160A · *dicantur esse verba Ecclesiae, quae annuit Synagogae se laudanti*.**
  *quae* = the Church; *Synagogae … laudanti* = the Synagogue praising **her**. Rendered
  "the Church, who assents to the Synagogue that praises her".
- **1163C–D · *ab ipso mane resurrectionis laboremus, in inspirando, et ego praedicando*.**
  Migne prints no subject for *in inspirando*; the contrastive *ego* implies the Beloved.
  ⚠ **I did not supply "thou".** Rendered "let us labour from that very morning of the
  resurrection, in inspiring, and I in preaching" — the ellipsis is on the page and stays
  there. Named here because a reader may reasonably want the antecedent, and it is the
  Beloved addressed in *Veni, dilecte* eleven lines above.
- **1162D · *quod tales habet doctores … non est tui meriti*.** Migne shifts from third
  person (*habet*) to second (*tui*) inside one sentence, addressee being the Church.
  Both rendered as printed.
- **1165A · *Quia nullis hostium tentamentis a nostrae salutis cura revocari potuit*.**
  ⚠ **Two readings both construe and I did not choose silently.** The unexpressed subject is
  either **the *dilectio* / *aemulatio* of the lemma above** (*fortis est ut mors dilectio*,
  *dura sicut infernus*) or **the Lord**, whose *affectus* the next sentence names
  (*zelantis nos Domini*). I rendered the neutral **"it"**, which carries the first reading
  and does not exclude the second; "he" would have closed the question in the text, which is
  the thing this edition should not do.
- **1164D–1165A · *Gentilibus admirantibus respondet, ille, qui est pax nostra*.** *ille* is
  **Christ** (Eph 2:14, *qui fecit utraque unum*), not the Synagogue; *ipsa erepta est* and
  *mater tua* below are **Judaea** and **the Synagogue** respectively.
- **1165C–D · *O vos ministri … Quid ergo tibi videtur, o Synagoga*.** Pattern 17 in one
  paragraph and in both directions: plural *vos* → **"you ministers and fellow soldiers"**;
  singular *tibi* to one addressee named in the vocative → **"what then seems to thee, O
  Synagogue"**. The same rule gives *thou* throughout 1166D–1168A (*Exigo a te*, *habites*,
  *facias*, *Quandiu vis*, *abesto*, *differ*, *praeceperis*, *Tu quidem*, *fuge*,
  *appareas*), all singular in the Latin.
- **1167A · *quis enim oportet eum, quem diligit, fugere?*** Read as *oportet* used
  **personally**, with *quis* as its subject and *eum quem diligit* as the object of
  *fugere*: "for who ought to flee him whom he loves?" That construes with every printed
  word in its own force and needs no emendation. The rival — impersonal *oportet* with an
  acc.+inf., which would require *cui* for *quis* — **loses because it needs a word the plate
  does not print.** No marker; recorded because the sentence looks defective at first glance
  and a later reader will stop on it.

---

### §5 · NEGATION — tests 2 and 2a, run on the population they name

Every printed negative in the four chunks is in the English and none is in the English that
is not printed. The sites where a quantifier, correlative or pivot stands near the negative —
the population test 2a says to fire on — were proved from structure, not from what reads
well:

- **1158A · *In Ecclesia nec terror suavitatem, nec suavitas terrorem aufert*.** Chiastic
  double *nec*, each on its own subject. English keeps both and keeps the chiasmus.
- **1158B · *Non a desiderio cognoscendi desistas, sed de cognoscendi facultate ne
  praesumas*.** Two separate prohibitions with a `sed` pivot; the first negative is on
  *desistas*, the **second on *praesumas*** — not one negative doing double duty, which is
  the 8987 defect. Both rendered.
- **1158C · *sed non pigeat nos … quod auctorem non piguit …*** Two *non*, two hosts, both
  kept, including the one that makes the sentence self-referential.
- **1158D · *sed non utraeque diadema regni habent*** (1158D–1159A): the negative is on
  ***utraeque***, not on *habent* — "**not both** have the diadem", not "both do not have".
  This is exactly the 8990 `solus` shape and the structure decides it: queens and concubines
  *pariter accedunt, pariter generant*, and the *sed* marks the one thing that is **not**
  shared.
- **1159A · *non alia ante legem, alia sub lege, alia sub gratia: sed in una pace*.** The
  negative governs the whole distributive series, and the `sed` clause (*in una pace, uno
  timore*) proves it. Rendered "not one before the law, another under the law, another under
  grace: but established in one peace".
- **1160C–D · *habebit tamen membra superioribus non imparia*** — negative on *imparia*
  (a litotes), not on *habebit*. "will nevertheless have members **not unequal** to the
  higher."
- **1160C–D · *quia non in otio futura, sed ad certamen processura*** — negative on
  *in otio*, with the `sed` correlative naming the true host.
- **1161A · *hujus crater non est torno factus, quia opus misericordiae … non causa suae
  fragilitatis erigendae ad Deum fecit, sed terrenam mercedem requirit*.** The second *non*
  sits on ***causa … erigendae***, and the `sed` clause (*sed terrenam mercedem requirit*)
  proves it: he did the work, and did it for the wrong reason. Rendering it on *fecit*
  ("did not do the work of mercy") would contradict *quod fecit* three words earlier.
- **1166B · *Quae pax non unam tantum gentem Judaeorum continet, sed habet multos populos …
  non aliquibus hominum meritis, sed sola pace*.** Two `non … sed` pairs, hosts *unam tantum
  gentem* and *aliquibus meritis* respectively; both proved from their own *sed* clause.
  ⚠ The first is the *tantum* shape test 2a names, and English word order was the hazard:
  "contains **not one nation of the Jews only**, but has many peoples" keeps the *tantum*
  inside the negative's scope.
- **1165A · *sicut infernus nullis miserorum cruciatibus mitigatur, nec a severitate suae
  sententiae mutatur*** — *nullis* on *cruciatibus*, *nec* on *mutatur*, both kept.
- **1167A · *Non optando loquitur*** — negative on *optando*, not on *loquitur*: she does
  speak, and what she does not do is wish. The following *sed memor suae conditionis …
  consentit* proves it.

⚠ **Anchors falling inside a word** (the *in [0733B] fructuosos* hazard): checked all 39.
None splits a word. Two split a **construction** and are reproduced split, which is correct:
*sic genae [1158D] tuae* → "so [1158D] thy cheeks"; *Quasi pacem [1166B] reperiens* →
"*As one [1166B] finding peace*". Two more sit inside an italic span and stay inside it:
*ab ubertate domus Dei [1162D] inebriant* and *vocem suam audire [1166D] faciat*.
⚠ For the last of these, English word order forced the anchor to the end of the short span
rather than immediately before the word rendering *faciat*; the span is six words long and I
judged that within tolerance, but it is recorded because 2b says position is unchecked by
machine.

⚠ **The closed-up anchor form is reproduced as printed**: `[1158A]VERS. 3.--` (chunk 0010)
and `[1167A]VERS. 14.--` (chunk 0013) carry no space, exactly as the Latin sets them.

---

### §6 · PUNCTUATION — the band-by-band test, run and closed

Test 3 (compare marks band by band, never by total) was run mechanically over all four
pairs, partitioning both twins by the verified column anchors and counting `:` `;` `?` `!`
`« »` in each band. **First pass returned 27 mismatched bands across the four chunks**
(almost all of them my own semicolons where Migne prints commas, plus five of his colons
softened or moved). All 27 were repaired against the plate. **Final state: zero mismatched
bands in all four chunks**, question marks 0/0/0/5 exactly as printed, guillemets 0/0.

Marks kept as printed, against the English ear:
- **1160D · *quis enim novit quare Deus usque ad illud tempus Judaeos excaecaverit.*** — an
  interrogative clause that Migne closes with a **full stop**. Preserved as a full stop
  ("for who knows why God blinded the Jews until that time."). Pattern 8b was considered and
  does **not** apply: 8b rescues a `?` that English syntax cannot hold, and here there is no
  `?` to rescue. Supplying one would be the defect.
- **1164D–1165A · *Quae est ista?*** twice, and 1165D's two long `?`-closed indirect
  questions (*coepero?*, *possit capax esse virtutum?*): all five marks kept. The two long
  ones are direct in form behind *Quid ergo tibi videtur* and take the mark without
  recasting, so 8b is not needed there either.
- **1166C · *et idem valet *ducenti,* quam si diceret duo millia*** — the comma after
  *ducenti* falls inside the italic span, and the English was reordered ("and it is the same
  with *two hundred,* as if he had said two thousand") so the mark could stay where he
  prints it rather than migrating out of the span.
- **1166C · *Idem est *argentei* et *pacifici:* quia…*** — same problem, same solution: the
  English was put in Latin order ("The same thing is *pieces of silver* and *peaceable ones:*
  because money…") so the colon stays inside the second span.

Em-dashes: none introduced. None marked, none reported.

---

### §7 · CANDIDATES EXAMINED AND REJECTED

1. **The 1167A → 1168A anchor jump** (no B or C band in that column). **Not reported** —
   runbook false positive 1, column-band arithmetic. The text is continuous across it and
   breaks no word or construction.
2. **Pattern 4 `[f:]` inline citation tails.** Not tagged anywhere: this is a
   lemma-and-gloss commentary, runbook false positive 4.
3. **`usque ad` as the abridgment formula** (Addendum D). It occurs **twice** in my range and
   **neither is the formula**: 1160D *usque ad illud tempus* and 1166A *usque ad novissima
   tempora* are both the ordinary preposition with the verse's or the gloss's own words.
   Decided per occurrence, as the addendum requires. No abridgment span in this range.
4. **Harmonizing a lemma to another Song commentary.** Not done anywhere. The site carries
   seven other expositions of these same verses (7871, 10379, 11321, 21413, 10804, 7914,
   9033); I consulted 7914 and the others only as a corpus **control on a word's frequency**
   (the *nepos* check in §1a), never as an authority on a rendering. Locked rule, three cases,
   and case 3 applies to most of this range: printed Latin identical, no gloss depends on it,
   each stands.
5. **`[cj:]` at 1165C (*foedatur*) and 1159A (*baptista*).** Both weighed against Pattern 18's
   bar and both declined; see §3 items 8 and 1 for which reading won and why the rival lost.
6. **`[sic:]` on *Statuta* (1162A), *audivi* (1158D), *sapientiam* (1161A), *foedatur*
   (1165C).** All declined: every one is a real, well-formed word that occupies its slot,
   and Pattern 12 reserves the marker for carried, untranslated type. Rendered as printed,
   logged above.
7. **Migne's `(Isa. LXIV.)` on a 1 Cor 2:9 quotation** (1158D). His attribution, reproduced
   verbatim; convention 4 and runbook practice put the printed reference beyond our reach.
   Not a defect, not corrected, recorded in §1a so a reader is not left thinking we missed it.
8. **`fetibus` for `foetibus`, `fragantiam` for `fragrantiam`.** Pattern 9 orthography, not
   defects.

