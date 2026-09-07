# 8956 *Liber Isaiae prophetae* — cruces

*Glossa ordinaria* on Isaiah, Anselm of Laon and his school. PL 113 cols 1231B–1316C, 35 chunks,
32,307 Latin words, translated in **seven Opus stints on 2026-09-07**. **Merged from seven stint
files. The concatenation is the easy half; what follows is the reconciliation, which is the
required step.**

Apparatus as shipped: **103 `[var:]` · 6 `[sic:]` · 3 `[cj:]` · 1 `[d:]` · 0 `[ed:]`.** Every
marker stands on a column read at Migne's plate (`plate-gate.mjs 8956` green). **The whole book was
read at the plate — 53 leaves, f616–f658, printed corner numbers checked FIRST on every one** — and
the second printing was consulted wherever a letter was at stake. 36 TEI patches were filed and
applied; all are digitization losses or a corrupted anchor, none is Migne's defect, so none carries
a marker.

⭐ **The foot of every column in this book is a CHECKED ZERO, on both printings.** No numbered
*Forte* conjecture layer, no asterisk cross-reference layer, anywhere in cols 1231–1316. That is a
measurement of this book, not an inheritance from a sibling.

---

## Work-wide conventions — what was reconciled at the merge, and what was left alone

### ⛔ 1. `conversatio` — swept, and swept to match the book shipping beside it

Four sites, all in the final stint, all rendered **"conversation"**. Swept to **"manner of life"**
at every one.

Two considerations, and they point the same way. First, the reader: *conversatio* is manner of
life, and "conversation" is a false friend a general reader takes as talk — the 11551 *epistylium*
class. Second, and decisive here: **8961 Leviticus made exactly this sweep at its own merge (29 of
30 sites) and ships in the same deploy as this book.** Two volumes of one commentary, going out
together, must not render one recurring term two ways. 8961 now carries 38 "manner of life"; 8956
carries none of the false friend.

⚑ Two of the four are *conversatio in coelis*, where "our conversation is in heaven" is the
familiar Douay/AV wording of Phil 3:20. That is precisely the hazard the 11632 findings named —
**Douay wording arriving over the plate** — and it is why the familiar phrase loses here: we
translate what Migne prints, for a reader who does not already know the verse.

### ✅ 2. `usque ad` — no drift, checked rather than assumed

The abridgment formula is rendered **"as far as"** in all 33 chunks that carry it. Not one stint
diverged. ("down to" occurs in five chunks and is ordinary prose in every one — checked
individually, not counted.)

### ✅ 3. The lemma layer — a fact all seven stints established independently

**This work sets no guillemets at all** (0 `«`, 0 `»`): every lemma is italic, the Luke-9000 shape
rather than the Genesis-8950 shape. Each stint counted its own spans against its brief and matched
exactly — 293 · 303 · 278 · 327 · 253 · 352 · 248 = **2,054**, the master inventory's own total.

### ✅ 4. Non-Latin type — one convention, settled mid-run rather than at the merge

Full detail in `data/briefs/8956-CONVENTIONS.md`. Two stints handled dropped Hebrew two defensible
ways; the ruling was to **file the patch and not insert into the English alone**, because
`hebrew-recovery.md` patches both twins in one operation. **The pair is now converged UPWARD:**
צדק and (סגים) at 1235D, (דבר) at 1248D, (שחין) at 1280C, (מסכן) at 1282A stand in both twins.
⚑ The orphaned double and triple spaces our file carried at each site are the scars the loss left,
and they are what made the recovery checkable.

### ⚑ 5. What the run established about the WITNESSES, and it cuts against the standing note

`PL113-WITNESS-ENCODING.md` says the archive copy is 1-bit JBIG2 and may never be a **sole** witness
for a letter. That has been read as *Gallica is the good copy*. **This book says otherwise, twice
over.** In cols 1291–1305 Gallica is the WORSE witness — five worn sorts in fourteen columns
(`tribuatus`, `lauaem`, `funiculu`, `Matih.`, `irruguus`), each a real non-word on Gallica **and**
in our TEI, each clean on the archive. Earlier, at 1265A, the traffic ran the other way
(`potet`/`potest`). **Neither copy is privileged. Nothing stands on one witness, in either
direction.**

⭐⭐ **Seven `[sic:]` candidates were withdrawn at the second printing in this book alone** — four in
cols 1291–1305, three more in the last stint (`Chrito`, `fatres`, and a `meridia nam` the archive
prints hyphenated). Seven false public accusations against Migne's type, stopped by one HTTP
request each. **Open the other copy BEFORE firing, not after.**

### ⚑ 6. A defect class that is ours and wears Migne's face

Five sites, one mechanism: **a hyphen at a line or column break.** `cruceis, crucis` is *cru-|cis*,
ONE word — and from our file alone it satisfies Pattern 11a exactly, so it would have carried a
`[d:]` on a doubling **Migne never set**. Also `exallabitur` (*exal-|tabitur*, across the very
column break our own anchor marks), `supereum`, `me moriter` (= *memoriter*), `sub coelo 1304est`.
All five are patched. **When a candidate defect sits at or near a break, the break is the first
hypothesis, not the last.**

### ⚑ 7. Left open on purpose — two 7a sites, and neither was repaired

**1311D** prints *In conturbatione, in dolore mentis, sed in gaudio et laetitia* — **no negation
where its own `sed` demands one**, confirmed on both printings. **1314D**'s *Quae secundum
apostolorum non solum hominum* has no governed noun at all. Both are rendered as printed and the
conjecture lives in the crux. A repair hidden inside the translation leaves no trace and passes
every automated check.

### ⚑ 8. The comparand is not clean either

`sources/vulgate/clementine-flat.txt` prints the non-word `cornonabit` at Is 22:18 (upstream in
Tweedale 2005; the post-2005 correction diffs are unapplied). A stint met it, could not collate,
and **declined to fire rather than reporting Migne as divergent** — which is right: a `[var:]`
fired against a corrupt Clementine is a false public claim about Migne's text. Now recorded in
`sources/vulgate/README.md` and printed into every lemma brief.

### ⚑ 9. One patch candidate deliberately NOT applied

**1302D**, where the lemma's italics swallow the `(HIER)` attribution. Promoting it to a note
changes `noteCount` on the Latin side alone and breaks twin parity; it wants a paired edit, not a
patch. Recorded here so it is not lost and not re-proposed as new.

---

# The stint files, merged in order



---

## Stint 0000

Stint file; the orchestrator merges it with the peers'. **Every column in the range was read at
the plate before these entries were written** — Gallica `ark:/12148/bpt6k5505319w`, leaves
**f616–f621**, `f = (column + 1) / 2`, calibrated against the **printed corner numbers on all six
leaves** (f616 = 1231/1232, f617 = 1233/1234, f618 = 1235/1236, f619 = 1237/1238,
f620 = 1239/1240, f621 = 1241/1242) before any collation was attempted. Reads recorded in
`data/briefs/8956-PLATE-READS-0000.json`; the archive.org jbig2 copy was not consulted, and the
plate-reads file says why it was not needed at any site.

Span count reconciled: **293 marked spans in the Latin of chunks 0000–0004** (293 italic
`*…*`, counted paragraph-bounded; **0 guillemet spans — this work sets no `« »` at all**, like
Luke 9000 and unlike Genesis 8950), against the brief's 293. Exact agreement.

---

## Plate vs. our TEI — four sites, all patched forward

**1234A — `Affectu`, not `Affecta`.** The plate reads *Affectu piissimi patris*, broken
`Affect-`/`u` at the right edge of the line; our TEI has *Affecta*, which agrees with nothing and
leaves the phrase without a construction. Read at native resolution and again at 900px: the final
glyph has two stems joined at the foot. Corroborated by the work's own *Affectu pii patris* at
1236B. English renders the plate; patch filed.

**1234D — a colon our TEI drops.** The plate prints `…legem esse servandam **:** audiant hoc
eorum socii…`; our twin has no mark, so the two parallel imperatives run together. Two dots,
vertically ranged, confirmed at 900px. English carries the colon (Pattern 8); patch filed.

**1235D — Hebrew type our TEI drops, twice.** The plate prints *in Hebraeo* **sedek צדק** and
*Hebraice* **siggim (סגים)**; our twin has the transliterations alone. Migne's own
transliteration stands beside each Hebrew word, which is what licenses the reading. Restored
silently in the English under Pattern 13a clause 1 (words lost mid-sentence, plate certain);
patches filed. Note the second one leaves a visible scar in our twin — the stranded space in
`*siggim* : quod` is where the parenthesis was.

**Refuted at the plate, and worth recording as refuted.** 1233C looked like *clarem scientiae*
at column-half scale; the line-broken run `cla-` + `vem` at native resolution is **clavem**, as
our TEI has it. 1235D looked like *Ooliban*; it is **Oolibam**. Both were candidate findings that
a wider crop killed.

---

## Migne's readings — markers fired

**1237A — `constabunt` for the Vulgate's `conflabunt` (Is 2:4). `[var:]` fired; `[sic:]`
deliberately NOT fired.** The plate prints *Et constabunt gladios suos*, confirmed on a dedicated
crop (s-t, not f-l), and our twin agrees. *Consto* is intransitive and cannot govern *gladios*,
so the printed clause does not construe, and the English is correspondingly awkward: "And they
shall stand fast their swords." The gloss that follows — *Omne studium bellandi vertetur in
pacem* — is the swords-into-ploughshares argument, so the Vulgate's verb is certainly the sense.
**I decline the `[sic:]` on the class question, not the reading question:** a `[sic:]` asserts
that the *type* is defective, and this could as easily be Migne's copy-text as his compositor.
`[var:]` states both readings and claims neither class. Recorded so a later reader can overturn
it with evidence rather than with confidence.

**1238A — `allii` for `alii`. `[sic:]` fired.** The plate prints *alii impiorum montes, allii
colles*, with **alii set correctly six words earlier on the same sentence** — so the plate itself
supplies the norm. *Allii* is a real word (genitive of *allium*, garlic) with no slot in the
clause, which is Pattern 12's test (1); the sense is rendered beside the marker per the
2026-09-05 amendment. Confirmed on a dedicated crop.

**1240A — `malitiam` for `militiam`. `[cj:]` fired.** The plate prints *Quibus signamur ad
malitiam Christi*, read across the line break on two separate crops (`mali-` + `tiam Christi`);
it is Migne's, not our transcription. The word is a perfectly good Latin form, so Pattern 12 has
nothing to wrap — and the faithful English then says that the ring seals us *unto the malice of
Christ*, which is not merely odd but the opposite of what the gloss is arguing. *Militia Christi*
is the stock phrase, the sentence continues *quem Pater signavit* (Jn 6:27, the seal of
enlistment), and the prodigal's ring follows in the next clause. That is Pattern 18's bar as
Wilson set it: the printed word makes the sentence say something the author is arguing against.

**1241C — `Vox sanguis` for `Vox sanguinis` (Gn 4:10). `[sic:]` fired on `sanguis` alone.** The
plate prints *Vox sanguis fratris tui Abel clamat ad me de terra*. A nominative in apposition to
*vox* has no slot, and English cannot show a case error, so under Pattern 12's test (2) rendering
it silently would be a repair; the marker carries the type and the sense stands beside it. **The
marker sits inside an already-italic lemma and therefore takes no second italic pair**, per
Pattern 10. The plate also adds **Abel**, which the Clementine does not have; that takes no
marker — the referent is unambiguous and no sense turns on it.

---

## The Greek

**1235A — `Ανθρωποσπαθῶς`.** Our twin reproduces the plate exactly, sigma-pi and all. The form is
not a Greek word: the adverb wanted is ἀνθρωποπαθῶς, "after the manner of human feeling," which is
precisely what the next clause glosses (*Non quod animam habeat, sed nostro loquitur more*). It is
**Migne's setting, not our source's loss**, so no patch. Carried verbatim and untranslated, per
the Greek rule, and **no `[sic:]` fired** — the following Latin supplies the sense in the author's
own voice, so nothing is quarantined and nothing is hidden. Note also that Migne prints it without
the rough breathing.

**1237C — the Greek `φ`.** Present on the plate and in our twin, in *pro ea φ Graeco utitur*.
Reproduced. No issue; recorded because it is the only other Greek in the range.

---

## Vulgate collation — every divergence found, marked and unmarked

Collated word by word against `sources/vulgate/clementine-flat.txt`. **Marked** (see above and
the report): Lc 17:10 @1232D · Dt 22:10 @1233B · Is 1:26–27 @1236C · Is 2:4 @1237A · Sir 7:6
@1239B · Jo 4:34 @1240D. **Found and deliberately left unmarked**, with the reason in each case:

- **1232D, Lc 17:10 — `Servus inutilis sum; quod debui facere, feci`** against the Clementine
  plural *Servi inutiles sumus… fecimus*. **`[var:]` FIRED.** The singular is the whole point of
  the gloss (it is Isaiah's own humility being expounded), and a reader who knows the verse would
  otherwise never learn that Migne's text differs.
- **1233B, Dt 22:10 — `in vitulo` for `in bove`. `[var:]` FIRED**, and this is the most
  load-bearing of the six: the lemma under exposition is Is 1:3 *Cognovit **bos** possessorem
  suum*, and the Deuteronomy text is adduced **for the ox**. Migne's *calf* takes the proof-text's
  own keyword out from under the argument — exactly the 7a″ shape, running the other way.
- **1236C, Is 1:26–27 — the verse division. `[var:]` FIRED.** The plate runs *Civitas justi, urbs
  fidelis Sion, in judicio redimetur* as one sentence, making *Sion* an appositive of *urbs*; the
  Clementine closes v. 26 at *urbs fidelis* and opens v. 27 with *Sion in judicio redimetur*, where
  Sion is the subject. Punctuation, but it changes what the sentence asserts about Sion, so it is
  Pattern 14 and not Pattern 8 alone.
- **1237A, Is 2:4 — `constabunt` for `conflabunt`. `[var:]` FIRED.** See above.
- **1239B, Sir 7:6 — `Ne quaeras judex fieri, ne forte non possis offerre iniquitates`** against
  the Clementine *Noli quaerere fieri judex, nisi valeas virtute irrumpere iniquitates*.
  **`[var:]` FIRED.** *Offerre* will not carry the Vulgate's sense at all (one does not "offer"
  iniquities), and the English renders it literally rather than borrowing *irrumpere*'s meaning.
  Declined as a `[cj:]` under 18a: it is a divergence inside a quoted scripture, which is Pattern
  14's business and not Pattern 18's, and it fails to construe rather than asserting a falsehood.
- **1240D, Jo 4:34 — `voluntatem Patris mei` for `voluntatem ejus qui misit me`. `[var:]`
  FIRED**, because the gloss's argument is built on the word: *mulierum panis **Pater** est, sicut
  et Christi, qui ait: Meus cibus est ut faciam voluntatem **Patris** mei*. The Vulgate at that
  verse does not contain *Patris* at all.
- **1233B, Mt 11:28** — *Venite ad me, qui laboratis* drops the Vulgate's *omnes*. Truncation of a
  cited verse, no sense change. Unmarked.
- **1233C, Zach 5:7–8** — *Iniquitas sedet super talentum plumbi* compresses two verses into a
  clause that stands in neither. A compression, not a variant reading. Unmarked.
- **1233C, Ps 37:5** — *Quasi onus grave* for the Clementine *sicut onus grave*. Synonym.
  Unmarked.
- **1233D, Mt 13:55** — *Nonne hic est Filius fabri?* for *Nonne hic est fabri filius?* Word order
  only. Unmarked.
- **1233D, Phil 3:13** — *Ad priora se extendens, posteriorum oblitus* is a participial compression
  of *quae quidem retro sunt obliviscens, ad ea vero quae sunt priora extendens meipsum*. The
  author's own paraphrase, introduced as *unde Apostolus*, with no word for a `[var:]` to name.
  Unmarked.
- **1234A, Jer 51:9** — *Curavimus Babylonem et non est **curata*** for the Clementine *sanata*.
  Unmarked because the words are synonyms — but recorded, because **the divergence is what makes
  the gloss work**: the lemma being expounded is Is 1:6 *nec **curata** medicamine*, and Migne's
  verb is the one that echoes it.
- **1234A, Jn 14 (cited)** — *Omnes enim natura filii Dei sumus* is not in John 14 or anywhere in
  the Clementine. A reference problem, not a text problem; not this stint's to correct.
- **1234B, Ps 49:12** — *Mea enim est terra et plenitudo ejus* for *meus est enim orbis terrae et
  plenitudo ejus*, with the person shifted to first for the speaker. Sense unchanged. Unmarked.
- **1234D, Ps 80:4** — *Buccinate **Domino** in neomenia tuba* adds *Domino*, which the Clementine
  lacks. Unmarked.
- **1235B, Mt 28:19** — *Ite, docete omnes gentes* for *Euntes ergo docete omnes gentes*.
  Unmarked.
- **1235A, Is 1:15** — the lemma prints *plenae sunt sanguine* where the Clementine has *sanguine
  plenae sunt*. Word order. Unmarked.
- **1235D, Is 1:22 (Symmachus)** — *mixtum* for the Clementine's *mistum*. Orthography. Unmarked.
- **1236B, Is 1:24** — the lemma *Heu ego* is in no Vulgate text; the Clementine reads *Heu!
  consolabor*. A two-word lemma tag on which no sense turns, and the LXX rendering Migne quotes
  immediately before it (*Vae fortes Israel*) is correctly labelled LXX. Unmarked, recorded.
- **1236D, Ps 124:2** — *Montes in **circumitu** ejus* for *circuitu*. *Circumitus* is the regular
  formation from *circum + eo* and is attested; Pattern 9. Unmarked.
- **1237B, Is 2:5** — the gloss quotes its own lemma back as *ambulemus in **luce** Domini* where
  both the Clementine and Migne's own lemma four lines above read *in **lumine** Domini*. Recorded
  because it is a self-inconsistency on one column; sense unchanged, so unmarked.
- **1237B, Jn 3:20** — *Qui male agit, odit lucem* drops *Omnis enim*. Truncation. Unmarked.
- **1237D, Mt 24:30** — *veniet cum potestate magna et majestate* against *venientem in nubibus
  caeli cum virtute multa et majestate*. Paraphrase. Unmarked.
- **1238A, Is 2:11** — *Exaltabitur autem solus Dominus* for *exaltabitur autem Dominus solus*.
  Word order. Unmarked.
- **1238B, Ps 106:23** — *Qui descendunt mare in **navi*** for *in navibus*, in a gloss that is
  about *naves bonae*, plural. Recorded; the number clash is visible but no argument rests on it.
  Unmarked.
- **1238D, Ps 86:5** — *Et ipse fundavit eam Altissimus* is quoted exactly, but cited *(Psal.
  CXII, LXXXIX)* where the second reference should be LXXXVI. A reference, not a reading.
- **1239C, Wis 2:12 / Is 3:10** — *Alligemus justum, quoniam inutilis est nobis*, cited *(Sap. I)*.
  Migne labels the whole quotation **LXX**, and it is the LXX of Isaiah rather than the Vulgate of
  Wisdom, so there is nothing for `[var:]` to correct. Unmarked.
- **1239D, Is 5:7** — *Vinea Domini **Sabaoth** domus Israel est* for *Domini **exercituum***.
  A Hebraism for the same title. Unmarked.
- **1239C, Jn 14:6** — *Ego sum via, veritas, et vita* drops the first *et*. Unmarked.
- **1241A, Is 6:4** — *Domus **impleta** est fumo* for *repleta*, and cited *(Exod. XIII)*.
  Synonym plus a reference problem. Unmarked.
- **1241A, Is 5:2** — the lemma *Vineam electam* supplies *vineam*, which the Clementine's
  *plantavit eam electam* does not have (the exact phrase stands at Jer 2:21, which is what the
  brief's ⚑ was seeing). The gloss immediately names the *alia editio* reading *vineam Sorec*, so
  Migne is knowingly working across editions here. Unmarked.
- **1242A, Is 5:20 printed as VERS. 19** — Migne's verse number is one short of the Clementine's
  for *Vae qui dicitis*. His numbering, reproduced.

---

## Readings rendered literally, no marker, conjecture recorded here only

**1237A — *Propheta* for *Prophetam*.** *Dominus quoque in templo docuit quod non oportuit
**Propheta** mori extra Jerusalem*: a nominative as the subject of an infinitive. Declined as a
marker under Pattern 9 — a nominative subject after *quod*/*oportet* is ordinary in twelfth-century
school Latin, and English shows no case on "a Prophet" either way, so the marker would buy nothing
and cost noise. (Also open, and left open: *quod* here can be read "because" or "that". The English
takes "because," which fits the argument for why the law goes out from Sion.)

**1238C — *Aedificavit Salomon **rem** in Jerusalem*.** A real word in a real slot, so it renders
in place — "Solomon built a thing in Jerusalem" — and takes no marker under Pattern 7. *Fanum* or
*aram* is the obvious conjecture (3 Kings 11:7 *aedificavit Salomon fanum Chamos*), recorded here
and not in the text. Declined as `[cj:]` because a vague word is not a false assertion.

**1237C — *cum caeteris delata est turpitudo haec*.** *Delata* (from *defero*) construes and is
rendered "was carried away together with the rest"; *deleta* ("was destroyed") would be smoother
and is what the sentence seems to want. The plate reads *delata*. Recorded, not emended.

**1240C — *Metonomicos*.** A transliterated Greek adverb (μετωνυμικῶς) set with an *o* for the
*y*. Rendered "Metonymically" — it occupies its slot as an adverb and renders in place, so under
Pattern 12's operational test the word on the page is ours and English, and takes no marker. The
spelling is recorded here.

**1234B — *sic Omnipotens, Filius Omnipotentis est*.** Migne's comma falls between the predicate
and its subject, which English cannot hold without a resumptive. Rendered "so the Almighty, [he] is
the Son of the Almighty," with the supplied pronoun bracketed in the corpus's usual way, so that
the printed mark survives (Pattern 8) and no word of Migne's is altered.

**1238D — *Hebraeum tamen excelsum significat, non excelsus.*** The distinction is between two
**Latin** forms and has no English exponent at all, so both are kept in italic Latin and the
author's own next sentence carries the sense ("For he is height itself, not merely high"). Not a
defect; recorded so that a later reader does not try to translate the pair.


---

## Stint 0005

Stint file; the orchestrator merges it with the peers'. **Every column in the range was read at
the plate before these entries were written** — Gallica `ark:/12148/bpt6k5505319w`, leaves
**f622–f628**, `f = (column + 1) / 2`, calibrated against the printed top corners of f622
(1243 / 1244) before any collation was done. The archive.org copy
(`patrologiaecurs04migngoog`) was not consulted: every leaf was legible at native resolution
and no candidate turned on a letter Gallica left open. Reads recorded in
`data/briefs/8956-PLATE-READS-0005.json`; the foot of every column in the range is blank, so
this work carries no numbered and no asterisk conjecture layer in cols 1243–1255.

---

## Plate vs. our TEI

**1245D — `auctoritatatem`, an extra syllable in our file.** The plate reads *tanquam
**auctoritatem** habens*; our TEI prints *auctoritatatem*, which is not a word. The English
renders the plate ("as having authority"); patch filed in
`data/briefs/8956-PENDING-TEI-PATCHES-0005.md`. No `[sic:]` — the defect is not Migne's.

**1248D — Hebrew type our source dropped.** The plate sets *Verbum Hebraicum **(דבר)** Dabar*;
our TEI carries the transliteration only. Unpointed, read at 4×; the classic Corpus Corporum
scar of `hebrew-recovery.md`. Not inserted into the English on its own, because that recipe
patches both twins in one commit and a translating stint cannot edit the Latin; patch filed.

## Migne's own type — markers fired

**1250C — `apotolos`.** The plate prints *reprehendentes apo-/tolos*, broken over a line, with
no `s`; our TEI has the same. A non-word, and the plate licenses the accusation, so
`[sic: *apotolos*]` stands and the sense is rendered beside it ("them that reproved the
apostles"), per Pattern 7's 2026-09-05 amendment. Conjecture: *apostolos*, which the same
sentence's argument requires.

**1254A — `quas` for `quasi`.** The plate prints *impii quasi plumbum merguntur in aquis
vehementibus, et descendunt in profundum **quas** lapis* — read on a tight native crop, with a
clear word space before *lapis* on the following line. *Quas* is a real Latin word (accusative
feminine plural relative) but has no grammatical slot in its clause, which is Pattern 12's
first test, so it takes `[sic: quas]` and the sense is supplied beside it ("as a stone").
Inside an italic lemma, so the marked run takes no second italic marker (Pattern 10). The
conjecture *quasi* is what *merguntur quasi plumbum*, nine words earlier in the same sentence,
already prints — which proves an error exists, not whose it is; the plate settles that.

## Migne's own type — marker DECLINED

**1252B — `Et requiscere`.** Migne prints the lemma *Et requiscere*, confirmed on a tight crop,
and our TEI agrees. The shape invites `[sic:]` — the ordinary form is *requiescere*, and
*quiescere faciet arrogantiam daemonum* prints eleven lines later at 1252C. **No marker was
fired**, and the reason is a witness outside this plate: our own Clementine flat file prints
*et **quiscere** faciam superbiam infidelium* at Is 13:11, the very verse this lemma quotes. A
syncopated `-quiscere` stem therefore has a life beyond this compositor, and Pattern 9 (attested
spellings are not Pattern 7 defects) governs. The English renders it plainly, "And to rest".
Recorded here so a later reader meets the argument and not just the silence.

## Vulgate divergences — the collation

Every lemma in the range was walked word by word against `sources/vulgate/clementine-flat.txt`.
Divergences in **wording** took a `[var:]`; divergences that are only Migne's abridgment of a
verse, or that English cannot show, are recorded here without a marker.

**Marked `[var:]` (eleven lemmata, twelve markers):**

| col | Migne prints | Clementine | marked |
|---|---|---|---|
| 1244C | Ps 119:3 *quid **adjiciatur** tibi* | *quid **apponatur** tibi* | ✓ |
| 1246A | Lc 2:52 ***Puer autem** proficiebat **aetate et sapientia*** | *Et **Jesus** proficiebat **sapientia, et aetate, et gratia*** | ✓ |
| 1247A | Is 8:6 *abjecit **populus** aquas **Siole*** | *abjecit **populus iste** aquas **Siloe*** | ✓ |
| 1247B | Is 8:18 ***Pueri mei, ex Deo nati*** | *Ecce ego et pueri mei **quos dedit mihi Dominus*** | ✓ |
| 1247C | Is 8:20 *Non **eris** eis* | *non **erit** eis matutina lux* | ✓ |
| 1248B | Is 9:6 ***Puer** natus est nobis* | ***Parvulus enim** natus est nobis* | ✓ |
| 1250A | Is 10:26 *virgam suam **in** mare* | *virgam suam **super** mare* | ✓ |
| 1250D | Mt 3:2 *appropinqua**b**it* · Mt 3:10 *facit **fructus bonos eradicetur*** | *appropinqua**v**it* · *facit **fructum bonum, excidetur*** | ✓ (two markers) |
| 1252B | 2 Cor 3:18 ***Nos autem** revelata facie gloriam Domini **contemplantes*** | ***Nos vero omnes**, revelata facie gloriam Domini **speculantes*** | ✓ |
| 1253B | Mt 25:41 ***Ite** in ignem aeternum* | ***Discedite a me maledicti** in ignem aeternum* | ✓ |
| 1253C | Ps 28:5 ***Conteret** Dominus cedros Libani* | *et **confringet** Dominus cedros Libani* | ✓ |

The two that matter most to the argument on the page are **1248B** and **1247B**. *Puer natus
est nobis* is the christological lemma of the chapter, quoted once as the address and once
inside the exposition, and the gloss builds on *nobis* ("Non Judaeis, nobis"), not on the noun
— so the substitution of *Puer* for *Parvulus* passes unnoticed by every check but this one.
At 1247B *ex Deo nati* replaces the Vulgate's whole relative clause with a phrase out of
John 1:13; the gloss that follows ("The other Prophets and their disciples") is indifferent to
either reading, which is exactly why it survives.

**Not marked — abridgment, not divergence.** Migne routinely quotes a verse short, and an
omission is not a variant reading:

- **1248C** Is 7:11 *Pete tibi signum **a Deo*** for *a Domino Deo tuo*.
- **1252A** Ps 67:27 *Benedicite **Domino** de fontibus Israel* for *benedicite **Deo Domino***.
- **1253B** Mt 6:12 *Dimitte nobis debita* for *debita **nostra***, cited *(Matth. V)* for Mt 6.
- **1251B** Is 11:10 *Qui stat in signum* for *in signum **populorum***; **1255C** Is 14:31 *Ab
  aquilone enim fumus* for *fumus **veniet***.

**Not marked — no English exponent.** A one-letter mood or spelling variant that renders
identically in English is recorded, not marked, because a `[var:]` a reader cannot see in the
text beside it is noise:

- **1255B** Is 14:29 *Ne **laeteris*** against Clementine *Ne **laetaris*** (subjunctive for
  indicative; both "Rejoice not").
- **1255C** Is 14:31 *qui **effugiat*** against *qui **effugiet***.

**Not marked — conflation, wording exact.** **1244A–B** quotes *Et regem Dominum exercituum
vidi oculis meis: et volavit ad me unus* as one lemma. That is the tail of Is 6:5 followed
immediately by the head of Is 6:6, each verbatim; the join is Migne's, the words are the
Vulgate's. **1250D** *Ego lux et vita*, ascribed to Christ, is likewise a fusion — of Jn 8:12
*Ego sum lux mundi* and Jn 11:25 / 14:6 *ego sum ... vita* — and belongs to no single verse to
be collated against.

## Readings carried through under Pattern 7

**1254C — the double negative `nisi ... non`.** Migne prints *quod adhuc mansisset, **nisi**
superbia tua **non** fuisset*, which says the opposite of the sentence's own argument (the
kingdom fell *because* of the pride). Both particles are carried: "which would still have
remained, unless thy pride had not been." Confirmed on the plate; conjecture, *nisi superbia
tua fuisset*, is not in the text by design.

**1254B — `Invitus Christus; descendit voluntarius`.** The plate's semicolon falls after
*Christus*, so the printed sentence reads "Christ unwilling; he came down willing," which
attributes the unwillingness to Christ in a gloss whose whole point is the contrast with
Lucifer, who is drawn down against his will. Punctuation follows the plate (Pattern 8); the
English keeps the printed break. Conjecture: *Invitus; Christus descendit voluntarius* —
"[thou art drawn down] unwilling; Christ came down willing."

**1253D — an infinitive with no expressed subject.** *Nos pro imbecillitate sensuum putabamus
non posse resistere potentiae Dei, et te solum in altitudine tua permanere.* The second
accusative-and-infinitive has *te*; the first has no subject at all, and supplying one decides
who could not resist whom. The English keeps it impersonal — "thought that it was not possible
to resist the power of God" — rather than choosing.

**1251B — the seized asp.** *Id est, divinam potentiam in comprehensum exinde aspidem vel
regulum, id est, diabolum, tradet captivum.* The *in* + accusative will not attach to
*tradet*, and *divinam potentiam* is left without a governing verb. Rendered as closely as the
words allow, with the agency the Latin does fix: the subject that delivers up is God, and what
is delivered up captive is the asp. No word supplied.

**1246D — `nullius est enim`.** *Ad Spiritum sanctum ... quae Graece neutri generis pneuma,
Hebraice feminini Ruach, Latine masculini generis est, et ideo diversis positionibus sortitur,
nullius est enim.* The last clause is elliptical past construing — the sense wanted is that the
Spirit belongs to no one gender — and *sortitur* has no object. Rendered literally.

**1244D–1245A — `Et pro, id est, adhuc`.** *Et adhuc. Et pro, id est, adhuc ex ea gente
decimatio.* *Pro* stands with no complement; the gloss is telling the reader what the lemma's
*Et* stands in place of. Rendered "And in place of, that is, still out of that nation a
tithing," which keeps the ellipsis visible.

## Not defects — recorded so a later reader does not report them

**Migne's `3` glyph.** Throughout this range the VERS. numeral 3 prints in a shape that reads
as a 5 at native resolution (VERS. 3 *Et clamabant* at 1243C, VERS. 3 *Derelictus est* at
1245A, VERS. 3 *Ad prophetissam* at 1246D). The verse numbers in our TEI are correct against
Isaias throughout; nothing here is a divergence.

**`Genezareth` / `Genesareth`.** Both spellings stand within four lines at 1247C–D, and the
plate prints them exactly so. Not normalized.

**`Siole` at 1247A.** Migne's own spelling of Siloe, confirmed on a top-strip crop of the
column. Covered by the `[var:]` on that lemma; no `[sic:]` — a metathesized proper name is not
the same claim as broken type.

**δορκὰς at 1252C.** Read at native resolution and again at 3×: grave accent over the alpha,
exactly as our TEI has it. Reproduced verbatim, untranslated.

## Span count

The brief `data/briefs/8956-lemmata-0005.txt` declares **303** marked spans for chunks
0005–0009. Counted paragraph-bounded in my own Latin: **47 + 55 + 57 + 72 + 72 = 303**, and the
unbounded count is the same number, because this work sets no guillemets at all (0 `«` and 0
`»` across all five chunks) and therefore has no unmatched-delimiter failure mode in either
direction. The two counts agree for a reason, not by cancellation.


---

## Stint 0010

Stint file; the orchestrator merges it with the peers'. **Every column in the range was read at
the plate before these entries were written** — Gallica `ark:/12148/bpt6k5505319w` f628–f634,
`f = (column + 1) / 2`, calibrated against the printed corner numbers on all seven leaves; the
archive copy `patrologiaecurs04migngoog` (PDF page `= (column + 11) / 2`, calibrated on p.636 and
p.638) was brought in as second witness at cols 1258, 1262 and 1265. Reads recorded in
`data/briefs/8956-PLATE-READS-0010.json`.

Span count: **278 marked spans in the Latin of chunks 0010–0014, against the brief's 278.**
Counted both whole-file and paragraph-bounded; zero paragraphs carry an odd number of asterisks
and the range contains **no guillemets at all**, so the two counts cannot have cancelled.

---

## Plate vs. our TEI

**1260C — `destrueret`, not `destruerat`.** Patch filed
(`data/briefs/8956-PENDING-TEI-PATCHES-0010.md` §1). The English renders the plate's subjunctive.

**1262D — `ingruat ei`, not `ingruat et`.** Confirmed on both printings. Patch filed (§2). The
English gives the verb its indirect object: "what may fall upon him after the table."

**1267A — an intrusive full stop, `mercedes. ejus`.** The plate breaks the word across the line
(`merce-` / `des`) and prints no stop. Patch filed (§3).

**1265A — `potet` / `potest`: the two printings differ, and NO marker is fired.** Gallica sets
*stare non potet* (read at 3.6×, terminal `-et` unmistakable) and our TEI agrees; the archive copy
sets *potest* clean. A word defective on one printing only does not license a `[sic:]` against
Migne's type, so the English reads "cannot stand" and nothing is patched. Logged as a press
variant, same class as 8961 @0317D and 8950's *Mititte*/*Mittite*.

**1262A — `expugnat` / `expugnant`.** The archive copy sets *expugnant*; Gallica and our TEI set
*expugnat*. Press variant or jbig2 artifact on the lossy copy; nothing marked, nothing patched.

---

## Migne's foot-of-page apparatus

**None in this range.** The feet of all fourteen columns (f628–f634, both columns of each leaf)
were rendered to the bottom edge of the leaf and are blank of any numbered, asterisked or lettered
note. Col 1258 carries the signature `40` and nothing else. This is a checked zero for cols
1255A–1268D on the Gallica copy; it is **not** a claim about the rest of the work.

---

## Scripture: Migne against the Clementine

The whole divergence list for the range, in column order. `[var:]` was fired where the divergence
bears on the sense or on the gloss built upon it; the rest are recorded here only.

### Fired `[var:]`

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 1257A | *Coge consilium* (Is 16:3) | *coge concilium* | *counsel* vs *assembly* — and the gloss glosses it as **making a Church** out of the wandering, which is the *concilium* sense. |
| 1257B | *Et praeparabit* (Is 16:5) | *Et praeparabitur* | active for passive: Migne's text has someone prepare the throne where the Vulgate has it prepared. An agency divergence, not a spelling one. |
| 1257C | *Omnes qui venerunt ad te ante me fures fuerunt et latrones* (Jo 10:8) | *Omnes quotquot venerunt, fures sunt, et latrones* | address (*ad te*), the *ante me* clause and a perfect for a present, in a proof-text adduced against detractors of the prophets. |
| 1259B | *Omnis plantatio quam non plantavit Pater meus eradicabitur* (Mt 15:13) | adds *caelestis* | the Vulgate's *my heavenly Father*; Migne's quotation drops the epithet. |
| 1259D | *Vae terrae cymbalae alarum* (Is 18:1) | *cymbalo alarum* | ablative made genitive; the lemma is the chapter's title-phrase. |
| 1260C | *veni enim separare hominem a patre suo* (Mt 10:35) | *adversus patrem suum* | *from* for *against* — the gloss is adduced for division, and *a patre suo* is separation, not opposition. Migne also prints *in terram* in v. 34's second clause, where the Vulgate has it only in the first. |
| 1261C | *Lingua Chananaea* (Is 19:18) | *lingua Chanaan* | the gloss immediately asks *why not the Hebrew tongue*, so the form of the name is the thing under discussion. |
| 1262B | *Haeccine erat* (Is 20:6) | *Ecce haec erat* | a demonstrative turned into a question. |
| 1262D | *Mane, Tethel, Phares* (Dn 5:25) | *Mane, Thecel, Phares* | the writing on the wall, quoted as the words themselves. Confirmed on both printings. |
| 1263B | *Si me quaeritis, studiosius quaerite* (Is 21:12) | *si quaeritis, quaerite* | two words added into a four-word verse, and cited to (Joan. IX). |
| 1263C | *in semitis Dodanim* (Is 21:13) | *in semitis Dedanim* | a people identified by name, and the gloss identifies them with the Saracens by way of the etymology. |
| 1264B | *Quare nos errare fecisti a via tua?* (Is 63:17) | *Quare errare nos fecisti, Domine, de viis tuis* | the vocative dropped and the plural *ways* made singular, in a verse quoted as the heretics' complaint. |
| 1264B | *ut sagittet in obscuro rectos corde* (Ps 10:3) | *ut sagittent* | singular for plural — and the singular is what binds the shooting to *Elam*, the pride of the heretics, which is the gloss's whole point. |
| 1265B | *Et suspendam super* (Is 22:24) | *Et suspendent super eum* | first person singular for third plural: Migne's lemma makes God the one who hangs. |
| 1265B | *Omnis populus pendebat ex eo* (Lc 19:48) | *omnis populus suspensus erat, audiens illum* | a different verb, and the gloss turns on it (*ad verbum sapientiae ejus pendent*). |
| 1267A | *Sume tibi citharam* (Is 23:16) | *Sume citharam* | *tibi* added. |
| 1267A | *Bene cane, frequenter* (Is 23:16) | *bene cane, frequenta canticum* | an adverb for an imperative + object: "sing often" for "repeat the song". The gloss reads *semper cantare*, which follows Migne. |

### Recorded, no marker

- **1256C — *Aqua Dibon*** (Is 15:9) for Clementine *aquae Dibon*: singular for plural, and the
  gloss glosses the city name, not the water.
- **1258A — *Auferetur laetitia et exsultatio de Carmelo*** (Is 16:10) for *Et auferetur…*: only
  the connective dropped. But the citation is **(III Reg. XVIII)**, which is Elijah on Carmel and
  not the verse quoted; reproduced verbatim per the `refDisplay` rule.
- **1258C — *Mercenari.*** (Is 16:14, *quasi anni mercenarii*). The clipped form stands on **both
  printings**, so it is Migne's own type and not a digitization loss. Read as an abbreviated lemma
  — this commentary clips lemmata constantly (*Ecce iste venit vir*, *Cingulum ultra tibi*,
  *Transite, ululate, qui habitatis*) — and rendered "*Of a hireling.*" **No `[sic:]`:** the
  reading is Migne's abbreviation, not broken type, and the Latin twin keeps the clip visible.
- **1258D — *Emarcescet*** (Is 17:4) for *marcescet*: prefixed. The gloss's own closing verb is
  *marcescet*, unprefixed.
- **1259A — *Messis quidem multa operarii, autem pauci*** (Mt 9:37): the same words as the
  Clementine, differently pointed (*multa, operarii autem pauci*). Punctuation follows the plate.
- **1259A — *duarum aut trium*** (Is 17:6) for *duarum vel trium*.
- **1260A — *super eum hyemabunt*** (Is 18:6) for *super illum hiemabunt*.
- **1261A — *Principes Thaneos*** (Is 19:11) for *principes Taneos*: an aspirated form of Tanis.
  Recorded because this range is dense in proper names and Migne's spellings of them are exactly
  where a divergence hides; the sense is untouched, so no marker.
- **1263A — *Ecce iste venit vir*** (Is 21:9): Migne clips *ascensor* out of *Ecce iste venit
  ascensor vir bigae equitum*. An abridged lemma; the gloss then expounds *super bigam sedentem*.
- **1263C — *Occurentes*** (Is 21:14) for *Occurrentes*: one `r`. Attested as a spelling; no
  marker (Pattern 9).
- **1264A — *Quidnam tibi quoque*** (Is 22:1) for *Quidnam quoque tibi est*: word order and the
  copula dropped.
- **1264B — *Elam*** (Is 22:6) for *Aelam*, twice, where the same chapter's LXX gloss at 1262C
  spells it *Aelam*.
- **1264D — *Comedamus et bibamus, cras enim moriemur*** is the Clementine's Is 22:13 word for
  word, but is cited **(Jerem. XXXIV)**. Reproduced verbatim.
- **1265A — *Coronans coronabit te*** (Is 22:18). **No claim is made in either direction:** our own
  `sources/vulgate/clementine-flat.txt` reads *Coronas cornonabit te* at that verse, which is not
  Latin, so the file is corrupt at exactly the place a collation would want it. The English renders
  Migne; a later pass with a sound Clementine should revisit this line.
- **1266A — *Transite, ululate, qui habitatis*** (Is 23:6): Migne clips *maria* and *in insula*.
- **1266A — *Nunquid non haec vestra est*** (Is 23:7) for *Numquid non vestra haec est*: order.
- **1266B — *Contaminatione contaminabit eum*** — a Hebraism quoted from the leprosy law; no single
  Clementine verse carries the phrase, so no received reading can be named.
- **1266B — *dum recordaremur Sion*** (Ps 136:1) for *cum recordaremur*.
- **1266B — *Cingulum ultra tibi*** (Is 23:10): the lemma clips the Vulgate's *non est*. An
  abridgment, not a dropped negation — the gloss expounds the girdle, not its absence.

---

## Readings and constructions worth recording

- **1256B — *Expediti Moab ululabunt*, glossed *Ab uxoribus*.** The gloss reads the Vulgate's
  *expediti* ("the ready men") as *free of wives*, and then proves it from Abraham's *vernaculos…
  expeditos*. Rendered "Free of wives, brave warriors" so that the gloss's own inference stands;
  the ablative is one of separation, not of agent.
- **1257D — *Domini ergo gentium apostoli et apostolici viri vineae Sabama exciderunt flagella*.**
  *Domini gentium* is the nominative plural subject lifted straight out of Is 16:8 (*vineam Sabama
  domini gentium exciderunt*), in apposition with *apostoli*: **the lords of the nations, that is
  the apostles, cut off the shoots.** Not a genitive depending on *apostoli*.
- **1258B — *et Jacobus, cui una deest, desunt omnes*.** James 2:10 compressed: the dative *cui*
  governs both clauses, so "to whom one is lacking, to him all are lacking." Rendered with the
  dative carried through rather than smoothed into a nominative.
- **1258B — *Ad sanctam, scilicet Ecclesiae, quae conabitur sua facere, non praevalebit*.** The
  construction does not resolve cleanly: *ad sanctam* is left hanging, and the subject of
  *praevalebit* is Moab (feminine) while *quae* has *sanctam* nearest. Rendered as literally as the
  printed words allow, negation intact; both printings agree, nothing is emended.
- **1259C — *Non recipiens Patrem, quia non recipis Filium; qui enim credit in Patrem, credit in
  Filium*.** The plate moves from participle to second person singular within the clause
  (*recipiens* … *recipis*). Both printings agree. Rendered as printed, with **thou** for the
  singular address (Pattern 17).
- **1264D — *unde ei Dominus haec mala minatur***: the chunk's last sentence carries **no terminal
  stop** on the plate. The English leaves it unstopped (Pattern 8).
- **1265B — *id est crucem possumus intelligere*.** Migne italicizes only *crucem possumus*, which
  cuts across the clause; the italic boundary is reproduced where he sets it rather than tidied to
  the phrase.


---

## Stint 0015

Stint-scoped. The orchestrator merges these into the work's `cruces.md`.

All seven leaves in this range (Gallica `ark:/12148/bpt6k5505319w` f634–f640, `f = (column + 1) / 2`,
calibrated against the printed corner numbers before any reading) were read at the plate and the
running text collated word by word against our Latin. **The foot of every column in the range is
blank** — this book sets neither the numbered nor the asterisk conjecture layer here. Three
digitization losses were found and are filed in `data/briefs/8956-PENDING-TEI-PATCHES-0015.md`.

The work sets **no guillemets at all** in these five chunks (0 `«`, 0 `»`), as the peer stint
reported for its own range: every lemma is italic. Span count reconciles exactly — 327 marked spans
in the Latin against the brief's 327, paragraph-bounded (52 + 76 + 67 + 74 + 58).

---

## Plate defects marked in the English

**1280B — `velmors`, a fused run.** The plate sets *Non infernus velmors.* as a single token with no
word space, verified at native resolution; our TEI has it fused too, so the defect is Migne's and
not ours. Marked `[sic: *velmors*]` under Patterns 10 and 12 (the whole run is carried, including
the real word `vel`). Per 7a⁗ the marker does not swallow what the run governs: the disjunction and
the noun are both said in plain words beside it — "Not hell nor death [sic: *velmors*]" — since the
clause has no other predicate and the gloss is glossing *Vivens vivens* against *infernus* and
*mors* together. Conjecture: *vel mors*.

## Migne's own citations, left as printed

`refDisplay` keeps what he prints; none of these is corrected, and none takes a marker.

- **1267C** — the Lazarus parable is cited **(Luc. XIX)**; it is Lc 16.
- **1268D** — Mt 25:46 is cited **(Matth. XIII)**; the verse is Mt 25.
- **1269C** — *Omnis qui se exaltat humiliabitur* is cited **(Luc. I)**; it is Lc 14:11 and 18:14.
- **1274B** — *Quia justi fulgebunt sicut sol* is cited **(Matth. XIII)**; correct, Mt 13:43, but the
  opening word is Migne's (see below).
- **1276C** — *Habitabis in loco isto amodo et usque in sempiternum* is cited **(Zach. XI)**; the
  words stand nowhere in Zacharias, and the nearest scriptural home is Jer 7:7.
- **1277C** — *Erit Saron sicut desertum* is cited **(Isa. XXXII)**; it is Is 33:9.

## Vulgate divergences too small to fire `[var:]`

Every one collated against `sources/vulgate/clementine-flat.txt` and confirmed on the plate.

- **1267B** — Is 24:1 quoted as *Ecce Dominus nudabit*; the Clementine reads *Ecce Dominus dissipabit
  terram : et nudabit eam*. An abridged incipit, not a variant reading.
- **1268A** — Is 24:16 printed *A finibus terrae, laudes audivimus*; the Clementine has no comma after
  *terrae*. Punctuation only, kept as printed (Pattern 8).
- **1268D** — Mt 13:30 quoted *Alligate ea per fasciculos ad comburendum*; Clementine *in fasciculos*.
- **1268D** — Eph 6:12 quoted as *Rectores tenebrarum, contra spiritualia nequitiae in coelestibus*,
  abridged from *adversus mundi rectores tenebrarum harum*.
- **1269D** — Gal 5:17 quoted without *enim* (*Caro concupiscit adversus spiritum*).
- **1271C** — 1 Cor 3:2 quoted *Lac dedi vobis potum, non escam*; Clementine *lac vobis potum dedi*.
  Word order only.
- **1271D** — Ps 117:22 quoted *Lapidem quem aedificantes reprobaverunt*; Clementine *quem
  reprobaverunt aedificantes*. Word order only; the verse is set inside the Is 28:16 lemma with no
  citation of its own, which is worth noting as a conflation even though the words are otherwise
  exact.
- **1272B** — Is 29:3 printed *in circumitu tuo* for *in circuitu tuo*. Our TEI and the plate agree;
  an attested spelling, exempt under Pattern 9.
- **1273D** — Is 30:21 printed *verbum monentis post tergum*; Clementine *verbum post tergum
  monentis*. Word order only, and the gloss turns on *post tergum*, which both have.
- **1274A** — Is 30:24 printed *Commixtum migma*; Clementine *commistum migma*. Spelling.
- **1274B** — Mt 13:43 quoted *Quia justi fulgebunt sicut sol*; Clementine *Tunc justi fulgebunt*.
  The connective has been adapted to the host sentence.
- **1274C** — Ex 15:1 quoted *Cantemus Domino, gloriose enim,* and cut there, as the plate cuts it.
- **1275A** — *Ora pro nobis Dominum quid agere debeamus?* is set in italic as though quoted, but the
  words are a paraphrase of Jer 42:2–3 and stand nowhere verbatim. Rendered as printed.
- **1275C** — Is 32:10 quoted *Post dies et annum*, dropping the Clementine's *enim*.
- **1279B** — Is 38:1 printed *audivisset* for the Clementine's syncopated *audisset*; and the plate
  really does set the comma inside *Et factum, est cum audivisset*. Both kept (Patterns 7 and 8).
- **1280D** — Mt 19:12 quoted *qui se castraverunt*; Clementine *qui seipsos castraverunt*.
- **1280D** — Ex 32:32 quoted *Dimitte eis hanc noxam, aut dele me de libro quem scripsisti*, dropping
  *tuo* and the conditional *aut si non facis*.

## Forms rendered as printed, no marker

- **1270B** — *distingunt* for *distinguunt* (Migne, *Alii distingunt sic*). A real form that occupies
  its slot and renders in place: "Others punctuate thus." Pattern 9 / the `fuges`–`munde` boundary.
- **1270B** — the catchword *Spiritum: salute,* repeats the lemma *peperimus spiritum, salutem non
  fecimus* two lines above, but with the ablative *salute* for the accusative *salutem*. A bare
  catchword has no syntax to violate and Latin case has no English exponent, so the English reads
  "*Spirit: salvation,*" with no marker; the divergence is recorded here. Both readings are on the
  plate.
- **1275D** — *sicut In Pentecoste*, with a capital `I` mid-sentence. The plate sets the capital; kept.
- **1274A** — the italic run is split by Migne himself as *usque* et *ad*, two spans with a roman *et*
  between them. Not our markup and not a defect: the plate sets exactly that, and the English mirrors
  it as "*as far* and *as*".
- **1274D** — the chapter head prints **CAPUT XXXI** with no full stop, unlike every other head in the
  range. Confirmed on the plate; the frontmatter's `heads` array already carries it unstopped.
- **1278D** — the paragraph on VERS. 33 ends *quanta de imminentibus cura* with **no terminal stop**.
  Confirmed on the plate. The English ends unstopped (Pattern 8: never supply).

## Column-band and structural notes

Nothing in this range breaks mid-word or mid-construction across an anchor. The band sequence in
chunk 0018 runs 1275A → 1276D → 1277A → 1278A with the usual positional irregularity, which is not a
gap (known false positive 1).


---

## Stint 0020

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


---

## Stint 0025

Stint file; the orchestrator merges it with the peers'. **Every column in the range was read at the
plate before these entries were written** — Gallica `ark:/12148/bpt6k5505319w`, leaves
**f646–f653**, `f = (column + 1) / 2`, calibrated against the **printed corner numbers on all eight
leaves** (f646 = 1291/1292, f647 = 1293/1294, f648 = 1295/1296, f649 = 1297/1298, f650 = 1299/1300,
f651 = 1301/1302, f652 = 1303/1304, f653 = 1305/1306) before any collation was attempted. Reads are
recorded in `data/briefs/8956-PLATE-READS-0025.json`. The band letters print in the **centre gutter
and mark the RIGHT column** on every leaf in this range, as the peers report.

The **archive.org second printing** (`patrologiaecurs04migngoog`, PDF page = (column + 11) / 2) was
consulted at five sites, on pp. 652, 653, 654, 656 and 658. It is the **better** witness in this
range, and it withdrew four defect claims against Migne — see "Four `[sic:]` withdrawn" below.

Span count reconciled: **352 marked spans in the Latin of chunks 0025–0029**, counted
paragraph-bounded (0025 = 87, 0026 = 61, 0027 = 69, 0028 = 59, 0029 = 76), against the brief's
**352**. Exact agreement. ⚑ **0 guillemet spans: this work sets no `«` or `»` at all**, in this
range as in the peers' — Luke-9000 shape, not Genesis-8950 shape. Confirmed by counting, not
assumed.

**Markers fired: 16 `[var:]`, and nothing else.** No `[sic:]`, no `[d:]`, no `[ed:]`, no `[cj:]`.

---

## ⭐ The finding of the stint: our own line-break fusions read as Migne's defects

Five sites in this range are our digitization mishandling a hyphen at a line or column break, and
**three of them presented as textbook plate defects**. They are itemized in
`data/briefs/8956-PENDING-TEI-PATCHES-0025.md`; the point worth carrying forward is what they looked
like from our file alone:

| col | our TEI | the plate | what our file alone said |
|---|---|---|---|
| 1295D | *cruceis, crucis* | *cru-* / *cis* = **crucis** | a Pattern 11a dittography with variation — mark the intrusive copy |
| 1295D–1296A | *exallabitur* | *exal-* / *tabitur* = **exaltabitur** | a non-word in a servant-song lemma: `[sic:]` |
| 1302C | *supereum* | *super-* / *eum* | a fused run, Pattern 10: `[sic:]` |
| 1302C | *me moriter* | *me-* / *moriter* = **memoriter** | a split run with a stranded pronoun: `[sic:]` |
| 1303A | *sub coelo 1304est* | *sub coelo* **est** | an anchor corruption of some kind |

The 1295D doubling is the dangerous one. Read from the twin it satisfies Pattern 11a exactly — two
copies of a run, differing in one word, the first ending in the neighbouring phrase's shape — and
11a instructs marking the intrusion. **There is nothing internal to our file that could have told
that from Migne's own eye-skip.** Only the hyphen on the plate could, and it says Migne set the word
once.

## Four `[sic:]` candidates withdrawn at the second printing

Each was a real non-word in the Gallica copy AND in our TEI, which is exactly the corroboration
`reference_plate-read-triage` warns proves an error exists and never whose it is. Each was clean on
the archive printing, so no marker stands.

- **1297B — *tribuatus*.** Gallica f649 breaks *tribu-* / *atus*; archive p.654 breaks
  *tribu-* / *latus*. The English reads "lest the just man, being afflicted, fail."
- **1305B — *lauaem*.** Gallica f653 prints the Is 61:11 lemma *Et lauaem*, an italic **a** where the
  **d** belongs — and *laudis* prints cleanly two lines below on the same page, which is precisely
  the shape that licenses a broken-sort claim (the 8955 @0629D *ulit*/*Tulit* precedent). Archive
  p.658 prints *Et laudem*.
- **1296D–1297A — *funiculu*.** Archive p.653 prints *funiculus*; the Gallica final **s** is worn to
  a dot at 3×.
- **1293B — *Matih.***. The Mt 16:19 note prints `(Matih. XVI)` on Gallica, `(Matth. XVI)` on
  archive. Our twin has *Matth.* and is right; a note's content rides verbatim in any case.

⚑ Together with **1301A *irruguus*/*irriguus***, that is **five** places in fourteen columns where
the Gallica copy carries a worn or broken sort the archive copy does not. **This inverts the PL 114
finding**, where the archive copy was the worse witness by twelve to one in Matthew's opening range.
It is a fact about these two *copies of PL 113 in this range*, not a general ranking, and it is the
reason no `[sic:]` in this stint could stand on Gallica alone.

## The column anchor `[1240D]` at 1294D

Our twin prints `[1240D]` where the sequence runs 1294C → 1295A. **The plate settles it as a digit
corruption and not a misplacement**: the D band on f647 stands in the centre gutter beside `VERS. 9.
— *Consurge*` in the right-hand (1294) column, exactly where our twin sets the anchor. So the
position is right and only the digits are wrong (9 → 4). **The English reproduces `[1240D]`
verbatim** — anchors are sacred and `verify-english` checks them 1:1 — and the patch must move both
twins in one operation.

⚠ Deliberately **not** reported as defects, per the standing false-positive list: the `[1296D]` that
stands before `[1296A]` at the head of CAPUT LIII (a recurring column number and a D-band followed
by an A-band are both normal), and the *Ibid.*-style `[n: (ID.)]` chains throughout.

## Migne's own mis-citations — reproduced verbatim, six of them

All confirmed on the plate; none corrected, per the standing rule.

- **1295C** `[n: (Psal. XCVII)]` on *In brachio meo gentes sperabunt*, which is Is 51:5.
- **1295C** `[n: (Matth. XVIII)]` on *Ite, docete omnes gentes*, which is Mt 28:19.
- **1293D** `[n: (Joan. VIII)]` on *Qui sitit, veniat et bibat*, which is Jo 7:37.
- **1294B** `[n: (Ezech. XVIII)]` on *nolo enim mortem peccatoris*, which is nearest Ez 33:11.
- **1299C** `[n: (Isa. XL)]` on *Non sicut viae meae sunt viae vestrae*, which is Is 55:8. ⭐ This one
  is doubly interesting: the quotation itself diverges (fired `[var:]`), and the chapter number is
  wrong, in a work whose *own book* is Isaiah.
- **1301B** `[n: (Psal. LXXXVI)]` on *Fundamenta ejus in montibus sanctis* — correct, but the note
  numbers the Psalm by the Vulgate reckoning while the neighbouring `[n: (Psal. XCVIII)]` at 1293A
  does likewise; recorded so a later index pass does not read the pair as inconsistent.

## Vulgate divergences — the 16 fired

All collated word by word against `sources/vulgate/clementine-flat.txt`, and every Clementine
reading quoted below was checked to be sound Latin before the marker went in.

**Chunk 0025 (6).**
1. **1293A, Ps 98:5** — *Adorabunt scabellum pedum ejus* for Clementine *adorate scabellum pedum
   ejus*. ⭐ **The richest shape on this book, and here it is exact:** the lemma under exposition is
   Is 49:23 *Adorabunt*, and the proof-text adduced to gloss it has been conformed to it, imperative
   into future. The argument's keyword has been written into its own proof-text.
2. **1293B, Mt 10:14** — *Excutite pulverem pedum vestrorum* for *excutite pulverem de pedibus
   vestris*. **The same shape again, on the same page**: the lemma is *Pulverem pedum tuorum* (Is
   49:23), and the proof-text now shares its exact genitive construction.
3. **1293C, Rom 6:12** — *Non regnet peccatum in corpore vestro* for *Non ergo regnet peccatum in
   vestro mortali corpore*. *mortali* is dropped.
4. **1293D, Jo 7:37** — *Qui sitit, veniat et bibat* for *Si quis sitit, veniat ad me et bibat*.
   *ad me* is dropped, which takes Christ out of a sentence quoted to show that he calls.
5. **1294B, Ez 33:11 / 18:32** — *nolo enim mortem peccatoris, sed magis ut convertatur et vivat*.
   The Clementine has *nolo mortem impii, sed ut convertatur impius a via sua, et vivat* (33:11) and
   *nolo mortem morientis* (18:32); **Migne's *peccatoris* is in neither**, and the note cites XVIII.
   This is the liturgical form of the verse, not the Vulgate's.
6. **1294B, Mt 25:41** — *Ite, maledicti, in ignem aeternum* for *Discedite a me maledicti in ignem
   aeternum*.

**Chunk 0026 (5).**
7. **1295D, Is 52:13** — *Elevabitur et exaltabitur* for *exaltabitur et elevabitur*. The two verbs
   are transposed in the hinge verse of the servant song, and this is Migne's own book. ⚑ Fired on
   the plate reading; our twin's *exallabitur* is our defect, patched separately.
8. **1296B, Jo 1:29** — *qui tollit peccata mundi* for *qui tollit peccatum mundi*. Singular into
   plural, in the sentence that names the Lamb.
9. **1296C, Lc 8:5** — *Exiit qui seminavit semen suum* for *Exiit qui seminat, seminare semen
   suum*. Present participle into perfect, and the infinitive of purpose dropped. The gloss is
   arguing that the Gospel word *does not grow old*, so the tense is not idle.
10. **1296C, 1 Pet 2:24** — *Peccata enim nostra portavit in corpore suo* for *qui peccata nostra
    ipse pertulit in corpore suo super lignum*. A different verb, *ipse* dropped, and **the tree
    dropped** — in a chapter on Is 53.
11. **1296C, 1 Cor 9:22** — *Omnibus omnia factus sum, ut omnes lucrificarem* for *ut omnes facerem
    salvos*. *lucrifacerem* is the verb of 9:19 and 9:22a; the two halves of Paul's sentence have
    been spliced.

**Chunk 0027 (3).**
12. **1297D, Eccl 11:1** — *Mitte panem tuum super aquas, quia in multitudine dierum invenies eum*
    for *super transeuntes aquas, quia post tempora multa invenies illum*. Two divergences in one
    verse; the gloss then expounds *panem doctrinae tuae*.
13. **1298C, Rom 12:1** — *Exhibeatis corpora vestra hostiam Deo viventem* for *hostiam viventem,
    sanctam, Deo placentem*. ⭐ The gloss immediately distinguishes the holocaust (offered **whole**
    to God) from the victim (part given to the priests), so *Deo viventem* — "a living victim **to
    God**" — is precisely the phrase the argument turns on, and it is not the Vulgate's.
14. **1299C, Is 55:8** — *Non sicut viae meae sunt viae vestrae* for *Non enim cogitationes meae
    cogitationes vestrae, neque viae vestrae viae meae*. Migne recasts the verse into the shape his
    gloss needs (many ways of worldly men against one way of truth) and cites the wrong chapter.

**Chunk 0028 (2).**
15. **1301A, Is 58:11** — *Et erit quasi hortus irriguus* for *et eris quasi hortus irriguus*. ⭐ The
    **person** changes, and the gloss's own next words are a vocative (*o fidelis vel Ecclesia*) that
    only the second person answers; two lines later *Assimilaberis Christo* is second singular again.
    Migne's third person stands in the English, with the marker beside it.
16. **1302C, Is 11:2** — *Requiescit super eum Spiritus Domini* for *Et requiescet super eum spiritus
    Domini*. Future into present, adduced to prove that the Spirit rests on Christ **now**.

### Divergences examined and DECLINED as immaterial

Recorded so a later reader can see they were weighed, not missed.

- **1298B, Jo 15:19** — *Si de mundo essetis* for *fuissetis*; and *idcirco odit vos mundus* for
  *propterea*. Mood and synonym; the sense is untouched.
- **1298B, Rom 10:12** — *Sed non est distinctio* for *Non enim est distinctio*. Connective only.
- **1299C, Jo 14:6** — *Ego sum via, veritas et vita* for *Ego sum via, et veritas, et vita*.
- **1301B, 1 Cor 3:11** — *Fundamentum aliud nemo potest ponere* drops *enim*.
- **1301A, Jo 12:26** — *Ubi ego sum* for *ubi sum ego*. Word order.
- **1303A, Jo 4:35** — *quia jam albae sunt ad messem* for *quia albae sunt jam*. Word order.
- **1303A, Eph 2:13** — *Vos qui eratis longe* drops *aliquando*.
- **1303C, Rom 10:10** — *Corde creditur* drops *enim*.
- **1304D, Lc 21:20** — *cum videritis ab exercitu circumdari Jerusalem* for *Cum autem videritis
  circumdari ab exercitu Jerusalem*. Word order and connective.
- **1293C, Jo 8:34** — *servus peccati est* for *servus est peccati*. Word order.

## Pattern 8 — three sentences that stop without a stop, and one that keeps a question

Confirmed at the plate in each case; the English carries the plate's punctuation exactly and
supplies nothing.

- **1297D** — the column ends *quia in novissimo praemia recipies* with **no terminal stop** on
  Gallica f649. The English ends "thou shalt receive rewards", unstopped.
- **1300A** — *opere complevi*, unstopped on f650. So in the English.
- **1302B** — *audita praedicatione apostolorum*, unstopped on f651.
- **1295B** — *ut etiam in terra sua opprimat illum, et calumnietur ei?* Migne closes an *usque ad*
  abridgment tail with a question mark, and the English keeps it as a direct question, which the
  tail already is (Pattern 8b is not needed here).
- **1302C** — chunk 0029's Latin ends mid-sentence on a comma (*Spiritus meus, qui est in te,*).
  That is our chunk boundary, not the plate's; the English ends on the same comma.

## Odd readings rendered as printed, with no marker

- **1298B — *Ne sit, scilicet de sex diebus quibus factus est mundus.*** The gloss on *Custodiens
  sabbatum* is elliptical past construing; *Ne sit* has no expressed subject and the *de* phrase
  hangs. Rendered literally ("Let it not be, that is, of the six days in which the world was made")
  and confirmed word for word on f649. Nothing is defective — it is simply compressed — so no
  `[cj:]`; the bar is that the English asserts something false, and an ellipsis asserts nothing.
- **1297A — *victis perditionis, victoribus causa est praemii.*** Two datives against one predicate
  nominative; the plate reads exactly so on f649. Rendered "the cause of perdition to the conquered,
  of reward to the conquerors."
- **1300C — *cui charitatem Deo invidebat.*** Two datives again, and the sense turns on which is the
  person grudged. Rendered "to whom he grudged charity towards God" — Cain is the actor, his brother
  the person, the charity the thing. Recorded because this is exactly the agency seam that a smooth
  English can silently re-assign.
- **1304C — *Cum miserit Filius hominis angelos, et colligent…*** A *cum* clause answered by *et* +
  future indicative rather than a main clause. Rendered as printed, conjunction kept.
- **1302B — *Et salvavit sibi. Pater, scilicet per Filium gentes.*** The gloss supplies subject,
  agent and object as three bare appositions. Rendered in that order without recasting: "The Father,
  namely, through the Son, the Gentiles."

## Second person — Pattern 17 as applied here

The range moves between a singular and a plural addressee repeatedly, and the English marks it.
Singular → *thou*: the Church at 1302D–1303A (*Quos in fide genuisti*, *nata es*), the soul at
1301A–1301B (*Assimilaberis Christo, capiti tuo*; *carnem tuam*; *domesticos seminis tui ne
despexeris*), Jacob at 1293A (*fortitudinem Jacob luctandi*), the idolater at 1299B (*idola
adorasti*). Plural → *you*: the Jews addressed throughout CAPUT LV (*Quare appenditis argentum*,
*Qui solam speciem litterae custoditis*, *Ne putetis*), and CAPUT LIX's *Sed iniquitates vestrae*.
No instance in the range required a judgment call: the morphology decided every one.


---

## Stint 0030

The last stint of the work: Isa. LXII–LXVI, to the end of the book. Stint-scoped; the
orchestrator merges this into `cruces.md`.

**Span count:** the brief lists **248** spans for chunks 0030–0034; my own Latin gives **248**
whole-file and **248** paragraph-bounded, with **0 `«` and 0 `»`** — so the two counts agree for
the reason `8956-CONVENTIONS.md` §2 gives (this work sets no guillemets at all), not by two
errors cancelling.

**Plates:** all six leaves read, printed corner numbers checked first on every one — Gallica
f653 (1305/1306), f654 (1307/1308), f655 (1309/1310), f656 (1311/1312), f657 (1313/1314), f658
(1315/1316). Second witness archive.org pp. 658, 659, 661, 662, 663. Details in
`data/briefs/8956-PLATE-READS-0030.json`; our-side losses in
`data/briefs/8956-PENDING-TEI-PATCHES-0030.md`.

---

## 1. Vulgate divergences — the collation, in column order

Every lemma and every quoted proof-text in the range was collated word by word against
`sources/vulgate/clementine-flat.txt`. **Twenty-six `[var:]` markers fired, over twenty-four distinct sites** (Lc 12:49 fires at both of its occurrences, and Is 66:1 is noted at 1307D against its clean occurrence at 1312A). The Clementine was sound
Latin at every site touched here; the `cornonabit` defect at Is 22:18 does not fall in this
range.

### Fired as `[var:]`

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 1305C, 1308B | Lc 12:49 *…nisi ut **ardeat**?* | *nisi ut **accendatur**?* | ⭐ **the proof-text loses the lemma's own word.** The lemma under exposition is Is 62:1 *Lampas **accendatur***, and the Vulgate's Luke would have repeated *accendatur* exactly. Migne's *ardeat* breaks the catchword the gloss was built on. **Quoted twice in the range and divergent in both places** (1305C bare, 1308B with `[n: (Luc. XII.)]`) — collated separately, identical. |
| 1305D | Eph 5:32 *Sacramentum hoc magnum est **in Christo et in Ecclesia*** | *…est, **ego autem dico** in Christo et in Ecclesia* | Paul says "but *I* speak in Christ and in the Church"; Migne's form makes the great sacrament flatly *be* in Christ and the Church, which is what the gloss on Is 62:5 wants of it. |
| 1305D | Hbr 1:14 ***Omnes** administratorii spiritus **sunt**, propter eos missi, qui haereditatem **capiunt** salutis* | ***Nonne** omnes **sunt** administratorii spiritus, **in ministerium** missi propter eos, qui haereditatem **capient** salutis?* | three at once: a rhetorical question flattened to an assertion, *in ministerium* dropped, future *capient* → present *capiunt*. The gloss needs the assertion: angels *are* the guards of the Church's walls. |
| 1306C | Is 62:12 *Et vocabunt **eum*** | *Et vocabunt **eos*** | singular for plural. Migne knows it is a variant and says so in the next words (*Sic enim quidam codices habent*), but the reading still differs from the Clementine and the whole second-person expansion (*Vos estis populus sanctus, vos estis redempti*) hangs on it. |
| 1307A | Job 19 ***Omnes amici mei dereliquerunt me**, et noti mei quasi alieni recesserunt a me* | 19:13 ***Fratres meos longe fecit a me**, et noti mei…* | the second half is Job 19:13 verbatim; the first half is not in the Clementine at all and answers rather to 19:14 *Dereliquerunt me propinqui mei*. Two verses welded, cited as one. |
| 1307B | Dn 10:21 *nemo est adjutor nisi Michael princeps vester, **qui astat pro filiis populi mei*** | 10:21 *nemo est adjutor **meus in omnibus his**, nisi Michael princeps vester* | ⭐ **two verses conflated inside one span, uncited.** The closing clause is **Dn 12:1** (*qui stat pro filiis populi **tui***) — and the possessive has flipped from *tui* to *mei*, so the speaker changes. |
| 1307B | Ps 105:16 ***Exacerbaverunt** Moysen in castris, **et** Aaron sanctum Domini* | *Et **irritaverunt** Moysen in castris; Aaron, sanctum Domini* | *exacerbaverunt* echoes the lemma Is 63:10 *ad iracundiam provocaverunt*, which *irritaverunt* would not. |
| 1307C | Zach 2:8 *Qui vos tangit, **quasi qui** tangit pupillam oculi mei* | *qui enim tetigerit vos, **tangit** pupillam oculi mei* | Migne's *quasi* turns an identity into a comparison — he *is as one who* touches, rather than *does* touch. |
| 1307D | *Et praecedet te angelus meus* cited **(Exod. XIV)** | Ex 23:20 *Ecce ego mittam angelum meum, qui praecedat te*; Ex 32:34 *angelus meus praecedet te*; **Ex 14:19** *angelus Dei, qui praecedebat castra Israel* | the wording belongs to Ex 32:34, the chapter cited has different wording. |
| 1307D | Jr 23:24 *Coelum et terram ego impleo* | ***Numquid non** caelum et terram ego impleo?* | a question with a double negative flattened to a bare assertion. |
| 1307D | Is 66:1 quoted as ***Coelum mihi sedes*** | Is 66:1 *Caelum **sedes mea*** (the Act 7:49 form is *Caelum mihi sedes est*) | ⭐⭐ **the same verse quoted twice in this range, divergent in one place only.** At 1307D it is cited to Isaiah but quoted in the wording of **Acts 7:49**; at **1312A** the same verse is quoted in its Isaian form, *Caelum sedes mea, terra autem scabellum pedum meorum*, exact — and it is the 1312A occurrence that the commentary on CAPUT LXVI then expounds. |
| 1308B | Mt 12:24 ***In principe daemoniorum Beelzebub ejicit daemones*** | *Hic **non** ejicit daemones **nisi** in Beelzebub principe daemoniorum* | the Vulgate's *non… nisi* frame is gone and the sentence is a flat affirmative. Migne's is what the gloss needs (the Jews *will* blaspheme thus); the English carries no negation here because the Latin prints none. |
| 1308C | Jo 17:3 *ut cognoscant te **verum Deum*** | *ut cognoscant te, **solum Deum verum*** | *solum* is dropped in a gloss whose declared subject is *cognitionem sanctae Trinitatis*. |
| 1309C | Is 42:14 ***Tacui, semper silui**, patiens fui* | ***Tacui semper, silui**, patiens fui* | the comma has moved one word, so the adverb changes verbs: "I have been silent, I have *always* held my peace" for "I have *always* been silent, I have held my peace." Rendered as pointed (Pattern 8). |
| 1310A | Is 65:9 *Montes **sanctos** meos* | *possidentem **montes meos*** | *sanctos* is not in the verse — and the gloss's whole move is the number of the mountains (*Septuaginta: Montem meum, scilicet Christum, qui est mons montium*). |
| 1310B | Ps 28:9 ***Dominus** revelabit condensa **silvarum*** cited **(Psal. XVIII)** | *Vox Domini praeparantis cervos: et revelabit condensa* | *silvarum* is the word the gloss needs (robbers lurking in woods) and the Clementine does not have it; the subject has also changed from *vox Domini* to *Dominus*. Cited to Ps 18. |
| 1311D | 1Thes 2:19 ***Quod** enim **est gaudium nostrum** aut corona gloriae, nonne vos* cited **(II Thes. II)** | ***Quae** est enim **nostra spes aut gaudium**, aut corona gloriae? nonne vos* | *spes* is dropped and the gender of the interrogative changes with it. |
| 1312C | Dt 23:18 *Non offeres **in domo Dei tui** mercedem **meretricis**, neque pretium canis* | *Non offeres mercedem **prostibuli**, nec pretium canis **in domo Domini Dei tui*** | ⭐ **the gloss turns on Migne's divergent word.** The next sentence is *Et bene canis et **meretrix** copulantur, quia similiter libidinantur* — the argument's keyword is in Migne's quotation and not in the Vulgate's. *Domini* is also dropped from *in domo Domini Dei tui*. |
| 1313D | Rm 12:1 *ut exhibeatis **corda** vestra* | *ut exhibeatis **corpora** vestra hostiam viventem* | hearts for bodies, in a paragraph about nursing and sustaining. |
| 1314B | Am 9:10 ***Gladio Dei peribunt** omnes peccatores* | ***In gladio morientur** omnes peccatores **populi mei*** | the sword is made God's own, which is the gloss (*Gladio. Sententia*); *populi mei* is dropped. |
| 1314D | Is 34:5 *Inebriatus est in coelo gladius meus, ***et usque ad terram descendit*** | *Quoniam inebriatus est in caelo gladius meus; **ecce super Idumaeam descendet**…* | Isaiah quoted against Isaiah, and the second half is replaced outright. |
| 1315B | 1Cor 3:16 *Templum Dei estis et **Spiritus sanctus** habitat in vobis* cited **(II Cor. VI)** | 1Cor 3:16 *…et **Spiritus Dei** habitat in vobis*; 2Cor 6:16 *vos enim estis templum Dei **vivi*** | the wording is First Corinthians with *Spiritus sanctus* for *Spiritus Dei*, under a Second Corinthians citation. |
| 1315B | Gal 6:2 ***Invicem** onera vestra portate* | ***Alter alterius** onera portate* | a different Latin idiom for the same sense; the whole lemma *In carrucis* is being read as mutual bearing. |
| 1316B | Pr 25:20 *Sicut tinea **comedit vestimentum**, et vermis **corrodit lignum**, **et ignis devorat ligna**, sic **moeror et tristitia excruciat cor viri*** | *Sicut tinea **vestimento**, et vermis **ligno**, ita **tristitia viri nocet cordi*** | ⭐⭐ **the largest divergence in the range, and it lands on the book's last verse.** The Vulgate's verbless comparison acquires three verbs, and an entire third member — *et ignis devorat ligna* — that the Clementine does not have. That added member is exactly the second half of the lemma, Is 66:24 *ignis eorum non extinguetur*: the proof-text has been made to carry both the worm and the fire. |
| 1316C | Apc 6:10 *Usquequo, Domine, non vindicas sanguinem nostrum* | *Usquequo Domine **(sanctus et verus), non judicas, et** non vindicas sanguinem nostrum **de iis qui habitant in terra***? | compressed; one of the two *non* clauses is gone. |

### Collated, divergent, and NOT marked — crux only

- **1305D Eph 5:31** *Propter hoc relinquet homo patrem et matrem*, cited **(Gen. II; Matth. XIX)**.
  The wording is **Ephesians** 5:31 exactly (minus *suam*); Gen 2:24 has *relinquet* but not
  *Propter hoc*, Mt 19:5 has *Propter hoc* but *dimittet*. Migne's citation stands verbatim.
- **1306B Jo 6:56** *Caro mea vere est cibus* for *Caro **enim** mea…* — a dropped particle.
- **1310A Rom 9:29** *quasi Sodoma* for *sicut Sodoma*.
- **1310B Rom 8:15** *spiritum adoptionis filiorum **Dei***, cited **(Rom. IX)** for Rom 8.
- **1311A Jo 14:6** *Ego sum via, veritas et vita* for *via, **et** veritas, **et** vita*.
- **1311C Pr 3:18** *qui **apprehenderunt** eam* for *apprehenderint*.
- **1311C Ps 125:6** *quia venient cum exsultatione* for *Venientes autem venient*.
- **1312C Jo 9:22** *conspiraverant* (pluperfect) for *conspiraverunt*, and *confiteretur Christum*
  for *eum confiteretur esse Christum*.
- **1312C / 1314C 1Cor 5:7** quoted **twice**: at 1312C without *Etenim*, at 1314C with it,
  matching the Clementine. Only the first occurrence diverges, and nothing in either gloss turns
  on the particle.
- **1313A Ps 64:6** *Spes omnium finium terrae et in mari longe* — verbatim, cited **(Psal. LXXIV)**.
- **1313A Rom 8:35** *Quis nos separabit* for *Quis **ergo** nos separabit*.
- **1314D Mt 28:19** *Ite, docete omnes gentes* for *euntes **ergo** docete*.
- **1315B 1Cor 3:17** *Templum Dei sanctum est* for *Templum **enim** Dei sanctum est*.
- **1311B / 1311B Is 65:20** quoted twice, the second time truncated by Gregory
  (*Puer centum annorum. Et peccator centum annorum.*) with the verbs left off; not a divergence.
- **Migne's mis-citations reproduced verbatim, per the standing rule** — six in this range:
  (Gen. II; Matth. XIX) for Eph 5, (Exod. XIV) for Ex 32:34, (Psal. XVIII) for Ps 28,
  (Rom. IX) for Rom 8:15, (Psal. LXXIV) for Ps 64, (II Thes. II) for 1Thes 2, (II Cor. VI) for
  1Cor 3:16. None corrected.

---

## 2. Plate findings

### 2.1 Three `[sic:]` candidates opened on the archive BEFORE firing, and all three withdrawn

The brief's instruction paid for itself three times over. Each of these is a well-formed defect
on the Gallica exemplar with our TEI agreeing — the exact shape that fires a marker — and each is
clean on the second printing.

- **1312C** Gallica `a **Chrito** Christiani dicti`; archive (p.661, 300 dpi) `a **Christo**`.
- **1313D** Gallica `Obsecro vos, **fatres**`; archive (p.662, 300 dpi) `**fratres**`.
- **1315A** Gallica breaks `meridia` / `nam` with **no hyphen**, which reads as Pattern 10 split
  type; archive (p.663, 300 dpi) prints `meridia-` **with** the hyphen. Ordinary line break.

**No marker fired at any of the three.** The English renders the sense at all three sites, and
the pending-patches file records them so a later pass does not re-open them.

### 2.2 Readings confirmed as Migne's on both printings, and kept

- **1306C `Videtur tamen AUGUSTUS dicere super Genesim`.** Not *Augustinus*, on Gallica f653
  **and** archive p.658. A perfectly good Latin name, so nothing is broken and `[sic:]` has
  nothing to wrap — but the English then says that the emperor Augustus wrote on Genesis, while
  the sentence is contrasting him with *Hieronymus* two lines below and pointing at *De Genesi ad
  litteram*. Pattern 18: the printed word is rendered and
  `[cj: *Augustus*; read *Augustinus*, "Augustine"]` stands beside it.
- **1309C `Omnis haereticus Deum ad iracundiam PROCAT`.** The lemma it glosses (Is 65:3) reads
  *provocat*. The plate hyphenates `pro-` / `cat` across a line, so no letters are hidden: the
  form really is *procat*, a real verb ("solicits, demands"). Rendered "solicits" with
  `[cj: *procat*; read *provocat*, "provokes"]`.
- **1310B–C `Ubi ACHOR filius Charmi de spoliis Jericho furatus… periit`.** Jos 7 names the man
  **Achan** and the valley **Achor**; Migne gives the man the valley's name, twice, and then
  derives the place-name from him. On the plate. Rendered "Achor" — **not** normalised.
- **1313A the dittography** — see §2.3.
- **Punctuation, four sites, each checked rather than assumed:** 1312C
  `…praeponentes Pars autem populi` has **no stop** before the capital; 1314A `scripsere naturis`
  and `per quem omnia operatur` each end with **no terminal stop**; 1309B `Allegorice.` carries
  its stop. All four are on the plate and all four ride into the English unaltered (Pattern 8).

### 2.3 1313A — a doubling that varies, marked on the FIRST copy (Pattern 11a)

The plate prints, in italic, `*reddentis reddentes retributionem inimicis suis*` — confirmed on
**both** printings, with no punctuation between the two words (the speck above the second is
dirt, checked at 1900 px).

Position tells nothing here, so 11a governs: **the intrusive copy is the one whose removal leaves
the passage saying what the author is arguing.** The frame is *Vox etiam Domini audita est in
Romanis exsultantibus, **qui** etiam nutu Dei **venerunt**, … scilicet Judaeis, per Romanos* — a
nominative plural subject, which *reddentes* agrees with and *reddentis* cannot. *reddentis* is
the genitive singular of the Vulgate lemma itself (Is 66:6 *vox Domini **reddentis**
retributionem inimicis suis*), i.e. the compositor's eye has gone back to the verse. **So the
marker sits on the first copy**, and the English reads `[d: rendering] rendering the recompense
to his enemies`.

### 2.4 Candidates refuted at the plate, no marker, no patch

- **1305C `impe dio`** on Gallica reads **`impendio`** on archive p.658, as our TEI has it.
- **1312D `in praesen i.`** on Gallica reads **`in praesenti`** on archive p.661.
- **1314C `my-` / `teria`** is an ordinary line break: the next line begins `steria veritatis`,
  so the word is **`mysteria`**, as our TEI has it.
- **1307D `(Jer. XXIII)`** — the archive prints `(Jer. XVIII)`; **Gallica is right** and our TEI
  follows it. A jbig2 digit substitution, exactly the class `PL113-WITNESS-ENCODING.md` predicts.
- **Band letters.** Cols 1315 and 1316 carry **A, B, C and no D**, because the work stops two
  thirds down the page. Not a gap (known false positive 1).

### 2.5 The last page — what it carries, and what it does not

The work ends at **1316C**, *agentes gratias visa impiorum ineffabili poena.* Checked for
everything a last page can carry:

- **No colophon, no subscription, no EXPLICIT, no editor's closing note** for the Glossa.
- Below a full-measure rule the leaf carries **the tome's own table of contents**, `ORDO RERUM
  QUAE IN HOC TOMO CONTINENTUR` — which is also the running head already printed at the *top* of
  this leaf, so the head has changed over before the work has ended. It closes `FINIS TOMI
  CENTESIMI DECIMI TERTII.`
- ⭐ **The two printings diverge inside that table.** Gallica prints `0000` against *Liber
  Ecclesiastes*, *Canticum canticorum* and *Liber Ecclesiastici*, and `0090` against *Liber
  Sapientiae* — unset placeholders. The archive prints `1115`, `1125`, `1183` and `1167`. Both
  print `1231` against *Prophetia Isaiae*, which is this work's true opening column. So the
  Gallica copy is from a state of the sheet in which four references had not yet been set, and
  the archive from the corrected state. (Recorded as a fact about the tome, not about our text.)
- The archive alone carries a printer's imprint below the FINIS line, *Imprimerie générale de
  Châtillon-sur-Seine. — Jeanne Robert.*; the Gallica copy's foot below FINIS is blank.
- **Foot of both columns blank on both printings** — no numbered *Forte* layer, no asterisk
  cross-reference layer. A checked zero on the final page as on the other five, consistent with
  `8956-CONVENTIONS.md` §2.

---

## 3. Sense and construction cruces

- **1311D, Is 65:24, `In conturbatione, in dolore mentis, sed in gaudio et laetitia`.** ⭐ **The
  page contradicts itself and the English says so.** The lemma being glossed is Is 65:23 *neque
  generabunt **in conturbatione***, and the *sed* demands that the first two members be denied —
  but **Migne prints no negation**, on the plate, and it is the same on the archive. Rendered as
  printed ("In trouble, in grief of mind, but in joy and gladness"). Pattern 7a: the missing *non*
  is the evidence, and supplying it would destroy it. The conjecture is recorded here and is not
  in the text.
- **1309C, `et in quadrum exstruere, et secti in latere pulveris roborare lineis`.** The tail of an
  *usque ad* abridgment of Jerome and it will not construe cleanly. Rendered as closely as the
  printed words allow ("to build four-square, and to strengthen with lines the dust cut upon the
  brick"), taking *latere* as the ablative of *later*, brick, which the lemma Is 65:3 *sacrificant
  super lateres* supports.
- **1314D, `Quae secundum apostolorum non solum hominum, etc.`** The noun governed by
  *apostolorum* is simply absent; the sense wanted is 1Cor 13:1 *linguis hominum… et angelorum*.
  Rendered with the gap left open ("Which according to the apostles', not only of men, etc.")
  rather than filled. No marker: nothing is broken type, and there is no single word to conjecture.
- **1314A, `multitudinem viventium ad fidem`.** *venientium* ("coming to the faith") is the obvious
  sense and *viventium* is a real participle that just about carries "living unto the faith".
  Rendered as printed; the conjecture is declined under 18a's bar, since the English asserts
  nothing false.
- **1309C `sed per verba nostra; Dei intelligimus affectum erga nos`** — Migne's semicolon falls
  inside what English wants as one clause. Kept where he puts it (Pattern 8).
- **1313B `creabo mihi… Ecclesiam unam quae aedificatur de vivis lapidibus:`** ends on a colon with
  nothing after it; the colon rides into the English.
- **1313B `Ego qui omnes creavi homines in nihilo`** — *in nihilo* for *ex nihilo* is ordinary
  medieval usage (Pattern 9); translated normally, no marker.
- **1308D and 1316A — the same etymology, two different languages.** At 1308D Migne writes *Mene
  **Hebraice**, Luna Latine*; at 1316A, of the same word, *Mene **Graece**, Latine luna*. Both are
  on the plate. Neither is emended and neither is harmonised to the other; the English keeps
  *Mene* and *luna* in Latin at both sites so the gloss still explains something.
- **1310B–C `vallis effundens sanguinem` / `vallis fundens sanguinem`** — Migne gives the
  interpretation of *Saronas* twice, with and without the prefix. Both on the plate, both rendered
  ("pouring out" / "shedding").
- **1312A `Caelum sedes mea`** — our file's one *Caelum* in a work that otherwise spells *Coelum*;
  the plate has *Coelum*. English unaffected; patch filed.
- **Agency read back, per the 8961 warning.** Six passives and ablative absolutes in the range were
  re-read for who acts: 1312B *quod humana manus construxit* (a human hand builds, not God);
  1312D *Romanis urbem irrumpentibus* (the Romans burst in); 1314B *quo purgabitur quid in bonis
  erit purgandum* (the fire purges, the good are purged); 1315A *Domino qui per illos figuratur*
  (the Lord is figured by David and Solomon, not they by him); 1316A *a sole… lumen recipit* (the
  moon receives from the sun); 1316C *boni videbunt eos… separatos* (the good see, the wicked are
  separated). All six construe as rendered.

## 4. Chunks read and found clean

Reported so this file can be told from one written by a reader who did not read.

- **0030** (1305C–1308A) — 66 spans, 11 anchors, 28 notes. Every word collated against Gallica
  f653 and f654 and against archive pp. 658–659. Clean apart from the sites above.
- **0031** (1308B–1309B) — 32 spans, 5 anchors, 14 notes. Collated against f654 and f655 and
  against archive p.659. **No plate/TEI divergence anywhere in the chunk**; its only findings are
  the three Vulgate `[var:]` at 1308B and 1308C.
- **0032** (1309C–1312A) — 68 spans, 10 anchors, 24 notes. Collated against f655 and f656.
  **Col 1309 and col 1310 are entirely clean at the plate** — every word of both columns agrees
  with our TEI, including the three readings that most invited a marker (*procat*, *Achor*, the
  *effundens*/*fundens* doublet), all three of which are Migne's.
- **0033** (1312B–1316B) — 76 spans, 16 anchors, 29 notes. Collated against f656, f657, f658 and
  against archive pp. 661–663. Carries the two withdrawn `[sic:]` candidates, the dittography, and
  four of the seven our-side patches.
- **0034** (1316C) — 6 spans, 1 anchor, 3 notes. Collated against f658 and archive p.663; the
  Latin agrees with both printings word for word. Two `[var:]`, no defects.

`verify-english 8956` passes over all 35 chunks: columns, notes and sections aligned, no
duplicate paragraphs. English/Latin word ratios: 1.46 · 1.52 · 1.46 · 1.50 · 1.45 (marker
contents excluded), against the register's ~1.5× expectation.
