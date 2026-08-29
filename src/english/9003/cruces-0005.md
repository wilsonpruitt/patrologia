# *Glossa ordinaria*, **Expositio in XX primos Psalmos** (PL 114) — cruces, chunks 0005–0009

Cols **0762B–0774A** (Ps VI, VII, VIII, and Ps IX to v. 39), 5 chunks, ~4,930 Latin words.
One translator, 2026-08-28.

`verify-english.mjs`: my five chunks pass (the run's only failures are chunks 0011–0013 and
0017, not yet filed by other agents). Frontmatter copied verbatim from each Latin twin and
diffed. Column anchors: **48 across the five chunks, verbatim, in order, and each placed
against the same word it stands beside in the Latin** (test 2b — checked one by one, not
merely for presence). `[n: …]` in my English: **0**, matching `noteCount: 0` in all five
twins, as the launch brief requires. Guillemets: **zero in either language.**
Question marks: 2 · 1 · 1 · 7 · 2 — exact parity with the Latin twins, band by band.
Em-dashes: **0** (three were written and all three removed; Migne prints none).

Punctuation was compared **band by band, not by total** (test 3), using the column anchors as
the partition: colons, semicolons, question marks, exclamation marks, guillemets and italic
asterisks, in all 53 bands of the five chunks. All bands now match. Six real mismatches were
caught this way and repaired — five softened or supplied colons and two comma↔semicolon
swaps — plus **three merged italic spans** (§6 below), which nothing else would have found.

**Apparatus fired: 11 `[var:]` · 3 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
(⚠ `[cj:]` count corrected 2026-08-28 from 1 to 3; the three stand at 0766A, 0767B and 0771B.
The blind polarity read added none in this range — see its section at the foot of this file.)
⚠ **Revised 2026-08-28**, was 10 `[var:]`: the plate collation **withdrew** the one @0770A (it
was an artefact of the transcription, §2f) and **added two** the digitization had erased, @0764B
and @0771C. See **PLATE COLLATION — markers withdrawn** at the foot of this file.

---

## §0 · THE NUMBERING IS MIGNE'S AND I HAVE NOT TOUCHED IT

Migne numbers by the Vulgate/Septuagint reckoning and counts the title as verse 1, so his
`VERS. 2.--` on Psalm VI addresses what a modern English Bible prints as 6:1. The Clementine
uses the same reckoning and agrees with him throughout. **Nothing here is renumbered and the
offset is not reported as a divergence.** Three places where his own count runs off the
Clementine's *within* that reckoning are recorded as his ordering, not corrected:

- **Ps VI** — he prints `VERS. 9.-- *Discedite a me,*` and then takes *Exaudivit Dominus*
  (Clem. 6:10) as a **second lemma inside the same address**, so his `VERS. 10.--
  *Erubescant,*` sits on Clem. 6:11. From v. 10 on, his count is one behind.
- **Ps VIII** — his `VERS. 7.-- *Omnia subjecisti*` is Clem. 8:8 (Clem. 8:7, *et constituisti
  eum*, is not glossed); his `VERS. 8.-- *Volucres coeli*` is Clem. 8:9; there is no VERS. 9,
  and `VERS. 10.-- *Domine, Dominus noster*` lands back on Clem. 8:10.
- **Ps IX** — *Narrabo omnia mirabilia tua* (Clem. 9:2) is glossed under his `VERS. 3.--`.

## §0a · `VERS 28.--` at 0772B — the period after VERS is missing, and it rides as printed

Chunk 0009 opens `VERS 28.--` where every other one of the 72 verse marks in my range prints
`VERS. n.--`. It is in the Latin twin's `incipit` field as well. Under the settled Glossa
convention the address passes through **verbatim, untranslated**, so the English prints
`VERS 28.--` too. ⚑ This is the exact class of Ruth's `VERS.9` at 0537D, which turned out to
be a **Corpus Corporum** slip and was fixed by `data/tei-patches/8968.json`, not by a marker.
**Plate candidate**, p. (0772+11)/2 ≈ 391 of the PL 114 scan: if Migne prints `VERS. 28.--`,
this is a tei-patch for 9003 and the English should follow the patch. I have fired nothing.

---

## §1 · THE LEMMA COLLATION — every italic span in cols 0762B–0774A

Collated against `sources/vulgate/clementine-flat.txt`; readings cited from
`sources/vulgate/clementine/Ps.lat`, `Mt.lat`, `Jo.lat`, `Gn.lat`, `Apc.lat`, `1Cor.lat`,
`Rom.lat`, `2Cor.lat`, `Jac.lat`, `Gal.lat`, `1Ptr.lat`, `Zach.lat`, `Phlp.lat`, `2Thes.lat`.
**A lemma named here with no comment agrees with the Clementine at its own verse, verbatim, or
is a clean clip of it** — that is why they are named. The psalter here is the Gallican, which
is what the Clementine prints, so the clean run is expected and a genuine divergence is
correspondingly *more* significant.

### Psalm VI (0762A–0763D) — chunk 0005

*In finem in carminibus pro octava psalmus David.* (6:1 — Clem. punctuates and orders as
*In finem, in carminibus. Psalmus David. Pro octava.*; Migne runs it as one clause and moves
*pro octava* forward. Order and punctuation only, no word gained or lost) · *Domine, ne in
furore tuo,* (6:2) · *arguuntur,* · *Corripiuntur* (both 6:2, the gloss's own third-person
forms of *arguas*/*corripias*) · ***Miserere mei, Deus,*** (6:3 — **Clem. *Miserere mei,
Domine*. `[var:]` FIRED**, §2a) · *ossa* (6:3) · *Et anima mea,* (6:4) · *Convertere,
Domine,* (6:5) · *Convertimini ad me, et convertar ad vos, dicit Dominus.* (Zach 1:3 — Clem.
*Convertimini ad me, ait Dominus exercituum, et convertar ad vos, dicit Dominus exercituum*;
Migne drops both *exercituum* and the interposed *ait Dominus exercituum*. **Omission only**,
nothing substituted, and the argument turns on the reciprocity, not on the title of hosts.
No marker; see §5a) · *Quoniam non est,* (6:6) · *mortem* · *infernum* (6:6) · *Laboravi,* ·
*Lectus* · *lacrymis lavat,* (6:7 — the gloss's own third-person recasting of *lacrimis meis
stratum meum rigabo* / *lavabo … lectum meum*; not a fresh citation) · *mente servio legi
Dei,* · *carne autem legi peccati,* (Rom 7:25, verbatim) · *mane adstabo tibi.* (Ps 5:5 —
Clem. *Mane astabo tibi*; *adstabo*/*astabo* is orthography, no marker) · *stratum,* ·
*rigabo* · *lavabo:* (6:7) · *Turbatus est,* (6:8) · *oculum* · *turbatum.* (6:8) ·
*inveteravi inter omnes inimicos meos,* (6:8, **verbatim**) · ***inveteravi. In omnibus*** ·
*inimicis meis,* (see §3a — the re-quotation does not match the lemma Migne has just printed)
· *prope est Dominus obtritis corde,* (Ps 33:19 — **Clem. *Juxta est Dominus iis qui tribulato
sunt corde*. Candidate weighed and DECLINED**, §5b) · *Discedite a me,* (6:9) · *Discessuri
enim sunt,* (not scripture — the gloss's own prophetic paraphrase of *Discedite*) · *Exaudivit
Dominus,* (6:10) · *Erubescant,* (6:11, printed under his VERS. 10) · *valde velociter,*
(6:11, verbatim).

### Psalm VII (0763D–0766C) — chunk 0006

*Chusi* · *filius Jemini,* (7:1) · *Domine Deus meus, in te speravi,* (7:2) · *Ne quando
rapiat,* · *ne quando rapiat ut leo animam meam.* · *ne quando rapiant;* (7:3 — Clem. sets
*nequando* as one word throughout; word-division only, and the third is the gloss's own
counterfactual plural, expressly marked as such by *Non enim ait*) · *Adversarius vester
diabolus tanquam leo rugiens circuit, quaerens quem devoret.* (1Ptr 5:8 — Clem. *tamquam*;
orthography only, the rest verbatim) · *salvum me fac ex omnibus persequentibus me,* (7:2) ·
*dum non est qui redimat,* (7:3) · *Domine Deus meus,* · *si feci istud,* · *si est iniquitas
in manibus meis.* (7:4) · *Si reddidi,* · *si reddidi facientibus,* (the gloss's own
counterfactual, again marked *Non ait*) · *retribuentibus mihi mala.* · *decidam merito ab
inimicis meis inanis.* · *inanis* (7:5) · *Persequatur inimicus,* · *Inimicum* · *leonem* ·
*terram* (7:6) · ***terram manducabis.*** (Gn 3:14 — **Clem. *terram comedes*. `[var:]`
FIRED**, §2d) · *in pulverem deducit,* (7:6 — Clem. *in pulverem deducat*, subjunctive; here
indicative because the gloss has taken the phrase into its own sentence. No marker) ·
*Exsurge, Domine,* · *iram* · *fines,* · *exaltari* · *Exsurge, Domine Deus meus,* (7:7) ·
*Synagoga* · *populorum,* · *circumdedit,* (7:8 — Clem. *circumdabit te*, future; Migne's
perfect. **Candidate weighed and DECLINED**, §5c) · *Caecitas ex parte contigit in Israel,
donec plenitudo gentium intraret.* (Rom 11:25, verbatim) · *Et propter hanc,* (7:8) ·
*Dominus judicat populos,* · *Judica me, Domine,* · *secundum innocentiam* · *super me,*
(7:9) · *si reddidi retribuentibus mihi mala.* (7:5, verbatim re-quotation) ·
***Consummetur nequitia,*** and ***Consummetur,*** (7:10 — **Clem. *Consumetur nequitia
peccatorum*. `[var:]` FIRED; the single most consequential divergence in my range**, §2b) ·
*sordescat* (Apc 22:11, verbatim) · ***justus justior fiat,*** (Apc 22:11 — **Clem. *qui
justus est, justificetur adhuc*. `[var:]` FIRED**, §2c) · *diriges justum, scrutans corda et
renes Deus.* (7:10, verbatim but for a comma before *Deus*) · *dirigitur* · *cordis* ·
*renium* · *Scrutans* · *cor* · *dirigit justum* (7:10, the gloss's own indicative for
*diriges*) · *Justum adjutorium,* (7:11) · *Justum auxilium* ×2 (§3b — Migne re-quotes his own
lemma with a synonym; kept distinct in the English as **help** / **aid**) · *quoniam, si cum
adhuc peccatores essemus, Christus pro nobis mortuus est, quanto magis nunc justificati salvi
erimus ab ira per ipsum.* (Rom 5:8–9 — **candidate weighed and DECLINED**, §5d) · *Deus judex
justus,* · *Justus,* · *fortis,* · *patiens,* · *irascitur per singulos dies,* (7:12 — Clem.
*numquid irascitur per singulos dies?*; Migne turns the rhetorical question into a flat
negation by putting a roman *Non* in front of the italic. That is his gloss doing the work,
not a variant text: the italic span itself is verbatim. No marker) · *Nisi conversi,* · *Et in
eo paravit,* (7:13–14) · *Judex justus* · *Arcum* · *sagittae* · *ardentibus effecit,* (7:14)
· *Vasa* · ***mortis vel*** (§6a — the italic span runs one word past the verse) · *Vel* ·
*aliis* · *odor vitae in vitam, aliis odor mortis in mortem.* (2Cor 2:16 — Clem. prints the
two clauses in the **reverse order**, *aliis quidem odor mortis in mortem: aliis autem odor
vitae in vitam*, and has *quidem*/*autem*. **Candidate weighed and DECLINED**, §5e) ·
*Ecce parturiit,* · *concepit dolorem,* (7:15) · *parturit injustitiam,* · *parit
iniquitatem;* (7:15 — the gloss's own present tenses for *parturiit*/*peperit*, expounding
generically; no marker) · *peccatum, cum consummatum fuerit, generat mortem.* (Jac 1:15 —
Clem. *peccatum vero cum consummatum fuerit*; the dropped *vero* is a clip) · *Lacum
aperuit,* (7:16) · *in operibus manuum suarum comprehensus est peccator.* (Ps 9:17, verbatim)
· *Convertetur dolor,* (7:17) · *iniquitates meae supergressae sunt caput meum; sicut onus
grave, gravatae sunt super me.* (Ps 37:5 — Clem. *caput meum, et sicut onus grave*; the
dropped *et* and Migne's semicolon, nothing more) · *Confitebor Domino,* (7:18).

### Psalm VIII (0766C–0768C) — chunk 0007

*Torcularia* · *torcularia* (8:1, *pro torcularibus*) · *Domine, Dominus noster,* · *Domine,*
· *Dominus noster,* (8:2) · *Ex ore infantium,* · *infantes* · *lactentes* (8:3) · *Tanquam
parvulis in Christo, lac vobis potum dedi, non escam.* (1Cor 3:1–2 — Clem. *tamquam*;
orthography only, the rest verbatim across the two verses) · *Inimicos* · *ultor* (8:3) ·
*Quoniam videbo coelos,* · *Videbo,* (8:4) · *coelos opera digitorum tuorum:* (8:4 — Clem.
*videbo caelos tuos, opera digitorum tuorum*; Migne drops *tuos* and the comma. Clip, no
marker) · *Luna* · *stellae* · *stellarum* (8:4) · *Quid est homo,* (8:5) · *homines et filium
hominis* (the gloss's own accusative pairing, not a citation) · *aut filius hominis,* (8:5,
verbatim) · *Homo* · *memor* · *Filium* · *hominis,* · *visitat* (8:5) · *Minuisti eum,*
(8:6) · *Minues eum paulo minus a Deo:* (**not the Vulgate and not offered as such** — Migne
says *in Hebraico legitur*, i.e. Jerome *iuxta Hebraeos*. Not collated as a Vulgate lemma;
see §5f) · *Omnia subjecisti,* · *omnia.* (8:8) · *Excepto eo qui ei subjecit omnia.*
(1Cor 15:27 — Clem. *sine dubio praeter eum qui subjecit ei omnia*. **Candidate weighed and
DECLINED**, §5g) · *Oves et boves,* · *oves et boves* (8:8) · *nonaginta novem oves in
montibus,* (Mt 18:12 — Clem. *nonne relinquit nonaginta novem in montibus*; Migne's *oves* is
an addition, but the whole is inside the gloss's own indirect statement, *Dominus dicit
reliquisse se*. No marker) · *bubus* · *boves* · *Pecora* · *campi* · *Campus* (8:8) ·
*Volucres coeli,* · *volucres coeli* (8:9) · *posuerunt in coelum os suum:* (Ps 72:9 — Clem.
*caelum*, orthography) · *Linguam nostram magnificabimus, labia nostra a nobis sunt, quis
noster Dominus est?* (Ps 11:5, verbatim; Clem.'s lower-case *dominus* only) · *pisces maris* ·
*qui perambulant semitas maris,* · *Perambulant* (8:9) · *Domine, Dominus noster,* (8:10).

### Psalm IX to v. 39 (0768C–0774A) — chunks 0008 and 0009

*De occultis filii* (§6b — the italic span swallows the gloss's own *De*) · *Si vos Filius
liberaverit, vere liberi eritis.* (Jo 8:36 — Clem. *Si ergo vos filius liberaverit*; the
dropped *ergo* is a clip) · *occulta filii,* ×2 (the gloss's own nominative/accusative) ·
*Victori super morte filii.* · *victori pro morte filii,* (**not the Vulgate and not offered
as such** — *ex Hebraeo translata editio*, §5f) · *in finem pro occultis filii,* (9:1,
verbatim) · *Confidite, ego vici mundum,* (Jo 16:33, verbatim) · *finis,* · *Non veni solvere
legem, sed adimplere.* (Mt 5:17 — Clem. *Nolite putare quoniam veni solvere legem aut
prophetas: non veni solvere, sed adimplere*; Migne conflates the two halves, carrying *legem*
down into the second. A conflation of the verse's own words, adding nothing. No marker) ·
*Confitebor tibi, Domine,* (9:2) · *Non in toto corde confitetur* · *Narrat* · *omnia
mirabilia* (9:2, the gloss's own negated and third-person forms) · *Laetabor et exsultabo,* ·
*in te,* (9:3) · *Narrabo* · *omnia mirabilia tua,* (9:2, verbatim) · *Omnia quaecunque audivi
a Patre meo nota feci vobis:* (Jo 15:15 — Clem. *quaecumque*, orthography; verbatim otherwise)
· *In convertendo,* · *Inimicum meum,* (9:4) · *Redi retro, Satanas.* (Mt 16:23 — **Clem.
*Vade post me Satana*. Candidate weighed and DECLINED**, §5h) · *quae retro sunt obliviscens,
et se ad ea quae ante sunt extendens.* (Phlp 3:13 — Clem. *quae quidem retro sunt obliviscens,
ad ea vero quae sunt priora, extendens meipsum*. **Candidate weighed and DECLINED**, §5i) ·
*Canam nomini tuo, Altissime,* · *Cum ceciderint inimici mei retrorsum, et corruerint, et
perierint a facie tua.* (**not the Vulgate and not offered as such** — *sicut Hebraica docet
editio*, §5f) · *Quoniam fecisti judicium,* · *meum* · *causam* · *meam* (9:5) · *Increpasti
gentes,* (9:6) · *increpavit gentes, et periit impius,* · *periit impius,* · *Deletumque* ·
*nomen* (9:6, the gloss's own third-person and passive recastings) · *Inimici defecerunt,* ·
*frameae defecerunt,* (9:7 — Clem. *Inimici defecerunt frameae in finem*; Migne's second span
reorders the verse's own two words. No marker) · *In finem* (9:7) · *civitates ejus
destruxit,* (9:7 — Clem. *civitates eorum destruxisti*; the gloss recasts to third singular
with *ejus* because it has made Christ the subject. Recasting, not a variant text. No marker)
· ***Princeps hujus saeculi misus est foras.*** (Jo 12:31 — **Clem. *nunc princeps hujus mundi
ejicietur foras*. `[var:]` FIRED**, §2e; and *misus* is a plate candidate, §4a) · *Periit
memoria,* (9:7) · *Paravit in judicio thronum,* (9:8) · *judicio sedem suam.* (9:8 — Clem.
*thronum suum*; Migne's re-quotation substitutes *sedem* for the *thronum* he has just
printed. **Candidate weighed and DECLINED**, §5j) · ***Et ipse … judicavit orbem terrae in
aequitate.*** (9:9 — ⛔ **`[var:]` WITHDRAWN 2026-08-28**; Migne prints *judicabit* with the
Clementine, the twin was corrupt, §2f) · *Et factus est Dominus
refugium pauperi,* · *adjutor in opportunitatibus,* · *in tribulatione.* (9:10) · *Et sperent
in te,* (9:11) · *cognitio nominis* ×2 (the gloss's own noun for *qui noverunt nomen tuum*) ·
*Psallite Domino,* · *habitat in Sion,* · *speculatio,* (9:12; the last an etymology, not a
citation) · ***Templum Domini sanctum est, quod estis vos.*** (1Cor 3:17 — **Clem. *Templum
enim Dei sanctum est*. `[var:]` FIRED**, §2g) · *Quoniam requirens,* (9:13) · *Domine, quis
credidit auditui nostro?* (Rom 10:16, verbatim — Is 53:1 has no *Domine*, so Migne is quoting
Paul, not Isaiah) · *Propter te mortificamur tota die.* (Ps 43:22, verbatim) · *quoniam
requirens sanguinem eorum recordatus est.* (9:13, verbatim) · *Miserere mei, Domine,* (9:14) ·
*Non est oblitus clamorem pauperum.* (9:13, verbatim) · *Qui exaltas me,* · *Exaltatur* ·
*portae mortis,* (9:15) · *portae filiae Sion* ×2 (9:15, Clem. *in portis filiae Sion*; the
gloss's nominative) · *Exsultabo in salutari tuo,* ×2 · *salutari tuo,* (9:16 — Clem.
*exultabo*, orthography) · *In laqueo isto,* · *Laqueus* · *pes* · *comprehensus est pes
eorum,* (9:16) · *Cognoscetur Dominus,* · *judicia* (9:17) · *Convertantur peccatores,* (9:18)
· *Quoniam non in finem oblivio,* · *Pauperes* · *patientia* · *non peribit,* (9:19) ·
*Exsurge, Domine, non confortetur,* · *in conspectu tuo,* (9:20) · *Constitue, Domine,* ·
*quoniam homines sunt.* (9:21) · *Cum revelabitur homo peccati,* (2Thes 2:3 — Clem. *et
revelatus fuerit homo peccati*. **Candidate weighed and DECLINED**, §5k) · *Utquid, Domine,
recessisti,* (9:22 — Clem. sets *Ut quid* as two words; word-division only) · *Dum superbit
impius,* · *Comprehenduntur* · *in consiliis,* (9:23) · *Quoniam laudatur peccator,* (9:24) ·
*Exacerbavit Dominum,* (9:25) · *Non est Deus in conspectu ejus,* · *in omni tempore,* ·
*Auferuntur judicia tua,* · *Omnium inimicorum suorum dominabitur,* (9:26, all verbatim) ·
*in templo Dei sedebit; extollens se super omne quod colitur et quod dicitur Deus.* (2Thes 2:4
— **candidate weighed and DECLINED**, §5k) · *Dixit enim in corde suo,* (9:27) · *Loquitur in
corde suo: Non movebor: in generatione et generatione ero sine malo.* (**not the Vulgate and
not offered as such** — *Hebraica translatio*, §5f) · *Cujus maledictione os plenum est,* ·
*maledictione os* · *plenum est.* (9:28) · *Cum amaritudine et dolo,* (9:28 — Clem. *et
amaritudine, et dolo*. **Candidate weighed and DECLINED**, §5l) · *Sub lingua ejus labor et
dolor,* · *sub lingua ejus,* (9:28, verbatim) · *Non movebor,* (9:27) · *Sedet in insidiis,* ·
*in insidiis* · *sedere* · *In occultis* · *Innocentem* · *interficere* (9:29) · *Oculi ejus
in pauperem respiciunt,* (9:30) · *Beati pauperes spiritu.* (Mt 5:3, verbatim — note the span
runs on into *Leonem*, §6c) · *Leonem* · *in spelunca* · *Leo:* · *in spelunca sua.* ·
*Insidiatur ut rapiat,* · *insidiae* · *rapere* (9:30) · ***In laqueo suo humiliavit,***
(9:31 — **Clem. *In laqueo suo humiliabit eum*. `[var:]` FIRED**, §2h) · *Laqueus* ·
*inclinabit et cadet,* (9:31 — Clem. *inclinabit se, et cadet*; the dropped *se* is a clip) ·
*Dixit enim in corde suo,* (9:32) · *Exsurge, Domine Deus, exaltetur,* (9:33) · *Propter quid
irritavit impius Deum,* (9:34) · *Vides quoniam tu laborem,* (9:35) · *non requiret Deus,*
(9:34 — Clem. *Non requiret.* stops there; Migne supplies the subject *Deus* inside the
italic. **Candidate weighed and DECLINED**, §5m) · ***ut tradat eos in manus suas,*** (9:35 —
**Clem. *ut tradas eos in manus tuas*. `[var:]` FIRED**, §2i) · *Tibi derelictus est,* ·
*Orphanum* (9:35) · *Mihi mundus crucifixus est, et ego mundo.* (Gal 6:14, verbatim clip) ·
***Ne dicatis vobis patrem in terris.*** (Mt 23:9 — **Clem. *Et patrem nolite vocare vobis
super terram*. `[var:]` FIRED**, §2j) · *Contere brachium peccatoris,* (9:36) · *omnium
inimicorum suorum dominabitur.* (9:26, verbatim re-quotation) · *Brachium* · *Quaeretur* ·
*peccatum ejus,* (9:36 — Clem. *quaeretur peccatum illius*; *ejus*/*illius* is a pronoun
synonym, no marker) · *nec invenietur,* (9:36 — Clem. *et non invenietur*; *nec* for *et non*
is the same negation in one word. **Explicitly checked as a negation-fidelity site**: the
English carries the negative, §3c) · *Dominus regnabit in aeternum,* · *Gentes* (9:37) ·
*Desiderium pauperum,* (9:38) · *Praeparatio* · *cordis* (9:38, the gloss's nominative for
*praeparationem*) · *Paratum cor meum, Deus, paratum cor meum:* (Ps 56:8, verbatim) · *si
autem, quod non videmus, speramus, per patientiam exspectamus.* (Rom 8:25, verbatim) · *aurem
Dei* (9:38, the gloss's own for *auris tua*) · *Judicare pupillo et humili,* (9:39, verbatim) ·
*judicare pupillum,* · *judicare pupillo.* · *Judicat pupillum* · *judicat* · *pupillo,*
(the gloss's own constructed contrast) · *Homines* · *homo* (9:39) · *Constitue, Domine,
legislatorem super eos, ut sciant gentes, quoniam homines sunt;* (9:21, verbatim) · *ut non
apponat ultra magnificare se homo super terram,* (9:39, verbatim).

---

## §2 · THE TEN `[var:]` MARKERS — each one a claim resting on the file, not on memory

Every one below was read off `clementine-flat.txt` and confirmed in the per-book `.lat`.
**In every case Migne's reading is what the English prints**; the marker stands beside the
faithful rendering and never in place of it (Pattern 14).

### 2a · 0762B/C · Ps 6:3 — *Miserere mei, **Deus***, where the Clementine has *Domine*

`Ps 6:3  Miserere mei, Domine, quoniam infirmus sum ; sana me, Domine, quoniam conturbata sunt
ossa mea.` Migne prints `VERS. 3.-- *Miserere mei, Deus,* etc.` **A different divine name in
the psalm's own opening address.** English: "*Have mercy on me, O God,*"
`[var: Vulg. Ps 6:3 *Miserere mei, Domine*, "Have mercy on me, O Lord"]`.

### 2b · 0765A/B · Ps 7:10 — ***Consummetur*** for *Consumetur*, and **the whole gloss turns on it**

`Ps 7:10  Consumetur nequitia peccatorum, et diriges justum, scrutans corda et renes, Deus.`
*Consumetur* is from *consumo*: the wickedness of sinners **shall be consumed**. Migne prints
*Consummetur* (from *consummo*, to complete) **and then expounds precisely that**:
*Consummetur, inquit, perficiatur, id est perveniat ad summam nequitiam, ut possit istud jam
venire judicium* — "let it be completed … let it come through to the *height* of wickedness,
that this judgment may now be able to come." ⚑ **This is the highest-value site in my range**,
because the exposition is unintelligible on the Clementine's word and exact on Migne's: a
translator who reached for the familiar "shall be consumed" would leave the next sentence
arguing from a word no longer on the page (7a″). Migne also drops *peccatorum*.
English: "*Let wickedness be consummated,*" `[var: Vulg. Ps 7:10 *Consumetur nequitia
peccatorum*, "the wickedness of sinners shall be consumed"]`, and *Consummetur* is rendered
"consummated / brought to completion" wherever it recurs.

### 2c · 0765A/B · Apc 22:11 — ***justus justior fiat*** for *qui justus est, justificetur adhuc*

`Apc 22:11  Qui nocet, noceat adhuc : et qui in sordibus est, sordescat adhuc : et qui justus
est, justificetur adhuc : et sanctus, sanctificetur adhuc.` ⚑ **The two halves of Migne's own
sentence behave differently, which is what makes this decisive rather than a stylistic
impression**: *sordescat adhuc* is the Clementine verbatim, and the very next clause,
introduced by his *sed etiam*, is not — a different verb (*fiat* for *justificetur*) and a
comparative (*justior*) the Vulgate does not have. English: "*let the just become more just,*"
`[var: Vulg. Apc 22:11 *qui justus est, justificetur adhuc*, "he that is just, let him be
justified still"]`.

### 2d · 0764B/C · Gn 3:14 — ***terram manducabis*** for *terram comedes*

`Gn 3:14  … super pectus tuum gradieris, et terram comedes cunctis diebus vitae tuae.`
A different verb, not a form of the same one. English: "*thou shalt eat earth,*"
`[var: Vulg. Gn 3:14 *terram comedes*, "thou shalt eat earth"]` — the note gives the received
reading; the sense of the two is the same, which is why the marker states the words and
argues nothing (Pattern 14's "never speculate about why they differ").

### 2e · 0769D · Jo 12:31 — ***Princeps hujus saeculi misus est foras***

`Jo 12:31  Nunc judicium est mundi : nunc princeps hujus mundi ejicietur foras.` **Two
divergences at once**: *saeculi* for *mundi*, and a **perfect** for the Clementine's future
*ejicietur*. The gloss needs the perfect — Christ *exclusit inde principem*, already. English:
"*The prince of this world was sent forth.*"
`[var: Vulg. Jo 12:31 *princeps hujus mundi ejicietur foras*, "the prince of this world shall
be cast out"]`. On *misus* itself see §4a.

### 2f · 0770A · Ps 9:9 — ⛔ **WITHDRAWN 2026-08-28. THE DIVERGENCE NEVER EXISTED.**

**Not corrected — withdrawn.** The plate collation of 2026-08-28 read col. 0770A and Migne
prints ***judicabit***, exactly the Clementine's own reading at Ps 9:9. Corpus Corporum had
changed it to *judicavit*, and this collation, run against a twin that had already been moved
off the plate, "found" a divergence that is not on the page. The `[var: Vulg. Ps 9:9
*judicabit*, "shall judge"]` has been removed from `0008.md`, **and the English tense corrected
with it**: "*hath judged the world in equity*" → "***shall judge** the world in equity*".

⚠ The reasoning printed above — the perfect against v. 8's *in occulto* — was constructed to
explain a reading Migne never printed. No lemma collation could have caught it; only the plate
could. Recorded, not deleted, because the failure mode is the finding: **a `[var:]` fired off a
transcription is a public claim about Migne resting on Corpus Corporum.**

### 2g · 0770B · 1Cor 3:17 — ***Templum Domini*** for *Templum enim Dei*

`1Cor 3:17  Si quis autem templum Dei violaverit, disperdet illum Deus. Templum enim Dei
sanctum est, quod estis vos.` *Domini* for *Dei*, in a proof-text adduced for the Church as
God's dwelling. English: "*The temple of the Lord is holy, which you are,*"
`[var: Vulg. 1Cor 3:17 *Templum enim Dei sanctum est*, "for the temple of God is holy"]`.

### 2h · 0772D/0773A · Ps 9:31 — ***humiliavit*** for *humiliabit eum*

`Ps 9:31  In laqueo suo humiliabit eum ; inclinabit se, et cadet cum dominatus fuerit
pauperum.` Perfect for future, and the object *eum* dropped, in the verse address itself.
English: "*In his net he hath humbled,* etc."
`[var: Vulg. Ps 9:31 *In laqueo suo humiliabit eum*, "in his net he shall humble him"]`.

### 2i · 0773B · Ps 9:35 — ***ut tradat eos in manus suas*** for *ut tradas eos in manus tuas*

`Ps 9:35  Vides, quoniam tu laborem et dolorem consideras, ut tradas eos in manus tuas.` The
Clementine is **second person addressed to God**; Migne prints **third person with a
reflexive**, and the gloss reads it that way throughout (*quasi laborare et dolere timeat, et
propterea illis parcat*). Two words changed consistently, which is what makes it a text and
not a slip. English: "*that he may deliver them into his own hands,*"
`[var: Vulg. Ps 9:35 *ut tradas eos in manus tuas*, "that thou mayest deliver them into thy
hands"]`.

### 2j · 0773C · Mt 23:9 — ***Ne dicatis vobis patrem in terris***

`Mt 23:9  Et patrem nolite vocare vobis super terram : unus est enim pater vester qui in caelis
est.` A different verb (*dicatis* for *vocare*), a different negation construction (*ne* +
subjunctive for *nolite*), and *in terris* for *super terram*. English: "*Call not to
yourselves a father upon earth,*"
`[var: Vulg. Mt 23:9 *Et patrem nolite vocare vobis super terram*, "and call none your father
upon earth"]`.

---

## §3 · SITES INSIDE THE GLOSS PROSE — where the lemma list does not reach

The brief is explicit that a named-lemma list does not cover the sentences between the
lemmata (test 2's own worked case, 8987 @0624B). These are the ones I stopped on.

### 3a · 0763B · Migne re-quotes his own lemma in a form he did not print

The verse address prints `*inveteravi inter omnes inimicos meos,*` — the Clementine verbatim.
Four lines later the gloss picks the phrase up again as `*In omnibus* autem *inimicis meis,*`
— **a different preposition and a different case**, *in omnibus* for *inter omnes*. Nothing
in the plate is broken and both are good Latin. ⚑ **The danger here is 7a″ in its purest
form**: the natural move is to render the second occurrence with the same English as the
first ("among all my enemies") and let the divergence vanish. **The English keeps them
apart** — "I have grown old **among all my enemies**" for the lemma, "by **in all my
enemies** he means…" for the re-quotation — so the reader can see that Migne's gloss is
expounding a wording his own lemma does not carry. No marker: this is Migne against Migne,
not Migne against the Vulgate, and Pattern 14 is for the latter.

### 3b · 0765C · *Justum adjutorium* glossed by *Justum auxilium*

The verse address prints `VERS. 11.-- *Justum adjutorium,*` (Ps 7:11, verbatim). The gloss
then expounds it twice as `*Justum auxilium*` / `*justum auxilium*` — a synonym, italicised
as though it were the lemma. **Kept distinct in the English (help / aid)** for the same reason
as §3a. No marker.

### 3c · Negation fidelity — the sites I named a host for (test 2 and 2a)

Every printed negative was traced to **the single Latin word it attaches to**, and the English
checked to carry it on that word — not merely to contain a negative. The sites where a
quantifier, correlative or predicate sat next to a plausible verb, which is 2a's trigger
population, were:

- **0762B** *ut **non solum** mortem non timeat, sed nec urentis … manus sustineat* — the
  first *non* is on *solum*, the second on *timeat*, the third (*nec*) on *sustineat*. Three
  negatives, three hosts. English: "may **not only not** fear death, but may **not even** have
  to bear the hand…".
- **0763C** *usque adeo **non** erubescunt impii, ut nobis insultare **non** desinant* — on
  *erubescunt* and on *desinant*. English keeps both ("so far from being ashamed … do not
  cease").
- **0764A** *tanquam cui **non** resistat jam perfecto **nisi** invidus diabolus* — on
  *resistat*, restricted by *nisi*. English: "none resists but the envious devil".
- **0765A** *quoniam **non solum** dictum est sordibus … **sed etiam*** — on *solum*, and the
  `sed etiam` is the structural proof of it (§2c).
- **0765C** *in renibus **nullas** inferiores delectationes* — on *delectationes*, a
  quantifier, not on the participle *prospiciens*. English: "in the reins **no** lower
  delights".
- **0766B** *ut **non** tua, **sed** sua malitia puniantur* — ⚑ **the sharpest 2a site in my
  range.** The negative stands before nothing but the possessive *tua*, and the `sed sua`
  correlative proves the host from structure: the claim is not that sinners go unpunished by
  God, but that the malice that punishes them is theirs and not his. English: "punished **not
  by thy** malice, **but by their own**", with the negative on the possessive.
- **0767D** *quamvis **non omnis** homo Filius hominis possit intelligi* — on *omnis*, not on
  *possit*. English: "although **not every** man can be understood as the Son of man". Putting
  it on the verb would make the sentence deny what the next line affirms of Christ.
- **0768B** *ipsi homines **non** ob aliud *boves* dicti sunt, **nisi** quod…* — on *ob
  aliud*. English: "for **no other** reason **than** that".
- **0768C** *non hominum **tantum**, sed etiam angelorum* — on *tantum*.
- **0770B** *Non enim convertitur anima … **nisi** cum* / *Nec opportunus … avertitur, **nisi***
  — on the two verbs, each restricted by *nisi*.
- **0770C** ⚑ ***non** sine magno fructu aeternitatis morituros … Christianos* — a litotes,
  and the host is the prepositional phrase *sine magno fructu*, **not** the participle
  *morituros*. English: "Christians will die **not without** a great fruit of eternity",
  which keeps the negative on the phrase; "will not die … with a great fruit" would invert it.
- **0771C** *in quibus **non solum non** metuitur reprehensor, sed etiam laudator auditur* —
  two negatives, on *solum* and on *metuitur*, with `sed etiam` fixing the scope.
- **0774A** *Homines autem sunt **non solum** de quibus … **sed etiam** ille* — on *solum*.

### 3d · The unexpressed subject — every supplied pronoun, and what fixed it

The brief names this the dominant defect class, and a psalm gloss changes speaker constantly.
The ones that were genuinely open:

- **0762D–0763A** — *deprecatur … molitur … contexit … conatur … cogitur*. The subject is
  **anima**, printed at *tutam se praeberi **anima** deprecatur*, so the English says "she"
  from there to the end of the verse, and switches to "he" at *quem lacrymis lavat, **qui**
  se ab illo conatur extrahere* where Migne prints a masculine relative. **The switch is
  Migne's, not mine.**
- **0763D** — *quia gementem et tam saepe diuque flentem Deus exaudivit, intelligatur
  liberata … orare*. Both participles and *liberata* are **feminine**, so the subject is the
  *anima pia* of 0763B and not the *impii* who are the nearest plural. English: "**she** is
  understood, being set free from her sins, to pray even for her enemies".
- **0763D/0764A** — *qui licet vitio suo **ceciderint** … tamen in natura sua boni a Deo
  creati sunt*. The relative before it is **singular** (*Qui etiam filius Jemini … scribitur*)
  and the verbs here are **plural**. Migne's own number shift, carried: "Who is also written
  *son of Jemini* … who, although **they** fell by their own fault". Rendered as printed and
  not smoothed in either direction.
- **0764D** — *quibus poena est, cum aufertur ab eis ista possessio, in qua dominari
  desiderant*. The datives and *desiderant* are the **devil and his angels**, not the sinners
  who are the possession: it is the possessors who want to lord it. English names them by
  keeping "to whom" attached to *diabolum et angelos ejus*.
- **0765D** — *qui ipsos, qui persecuti sunt, **non statim post resurrectionem** ad supplicium
  rapuit*. Subject = God the *judex patiens*; object = the persecutors. English holds both.
- **0771D** — ⚑ *Multum **irascitur**, dum non exquirit, dum quasi obliviscitur…*. The subject
  is **God**, and the sentence is Augustine's paradox: God's anger *consists in* not
  punishing. Read with the Antichrist as subject it becomes nonsense, and it construes either
  way at a glance. The closing clause *Sed quanta ista **ira Dei** sit docent sequentia* names
  the subject explicitly and settles it.
- **0773A** — *dum animus humanus … parci sibi putat, cum excaecatur*. Subject = *animus
  humanus*, printed. English: "the human mind … thinks itself spared, when it is blinded".

---

## §4 · PLATE CANDIDATES — logged, and NOT marked

⛔ **Zero `[sic:]` in these five chunks, and that is a decision.** Brief addendum A measured
the split 10 for 10: a suspicion aimed at a **non-word** came back as *our digitization's*
corruption, not Migne's, every time — which is the class that made seven false `[sic:]`
withdrawable in the 2026-08-23 batch, each publicly blaming Migne for Corpus Corporum's error.
The two sibling Glossa OT books settled the practice for this series (8951 §, 8952 §2): **render
the evident word, log the crux, fire nothing**, exactly as Ruth's *significaRuth* was handled
by a tei-patch and never by a marker. I have followed that. All three below are worth the
read; none is asserted on the page.

### 4a · 0769D · ***misus*** for *missus* — one dropped letter inside a scripture lemma

*Princeps hujus saeculi **misus** est foras.* *misus* is no Latin word. The reading *missus
est foras* is the form Augustine quotes throughout, and it is what the gloss needs
(*exclusit inde principem*). ⚑ **Doubly worth the read because it sits inside a lemma that is
independently divergent** (§2e): if the plate reads *missus*, the `[var:]` stands unchanged
and the defect is ours; if the plate reads *misus*, this is a `[sic:]` site and the `[var:]`
should say so. Rendered "was sent forth", which keeps *missus* visibly distinct from the
Clementine's *ejicietur* that the marker quotes.

### 4b · 0763D · ***potet*** for *potest* — a real form with no grammatical slot

*quod sine confusione et conturbatione fieri non **potet***. *potet* is a real word — third
singular present subjunctive of *poto*, "let him drink" — which is exactly why it is
dangerous: nothing looks broken. But *poto* cannot govern the infinitive *fieri*, so the form
**has no slot in its own clause** (Pattern 12's first test), and the clause's only possible
verb is *potest*. Rendered "cannot be done", crux logged, nothing fired. ⭐ Recorded here
rather than passed over precisely because addendum A's finding runs the other way for real
words: a real word that reads oddly is Migne's until a plate says otherwise. This one does not
read oddly — it does not *read* — which is what separates it from the refuted cases.

### 4c · 0762B · ***justorum*** in *septem dierum justorum repetitione* — suspiciously placed

*Et quoniam omnia tempora septem dierum **justorum** repetitione volvuntur.* The sentence says
all times revolve by the repetition of seven days; *justorum* has no work to do there and no
antecedent in the clause (the just have been named in the previous sentence, *animae
justorum*, which is how an eye-skip of exactly this shape happens). Rendered as printed —
"the repetition of the seven days of the just" — under Pattern 7. **Real word, so no marker
and no conjecture in the text**, per addendum A. Worth one line of a plate read while the
column is open.

### 4d · Three roughnesses rendered literally, no candidate raised

- **0764B** *qui acceptis beneficiis reddidit mala **pro nobis*** — the antithesis wants *pro
  bonis* ("evil for good"), and *pro nobis* is odd in a clause about a private injury.
  **Real words, and the sentence construes**, so it is rendered as printed ("rendered evils
  for us") and nothing is fired. Raised here so a blind reader does not think it unseen.
- **0766B** *Verus justus es, Domine* where *Vere justus es* is the expected idiom. *Verus* is
  a real word and the phrase construes as "Thou art the true just one", which is what the
  English prints. No marker.
- **0768C** *quo **tritus** idem sermo referendus est.* Rendered "the same discourse, now
  threshed out" — which is not merely tolerable but apt, since the whole chunk has been
  expounding threshing-floor and winepress. No candidate.
- **0770B** *Nec **opportunus** ab hoc saeculo avertitur* — a nominative adjective where an
  adverb (*opportune*, which Migne uses four lines earlier) would be expected. Rendered "Nor
  is one seasonably turned away". Gender/case oddity with no clean English exponent; no
  marker, and Pattern 9's reasoning applies.
- **0769A** *Siquidem et victoriam feret de mundo, finis est futurorum bonorum.* The two
  clauses do not join cleanly. Rendered literally, unsmoothed.

---

## §5 · CANDIDATES WEIGHED AND REJECTED — with the reason each lost

⛔ Brief §5's rule: naming a rival is not adjudicating between them. Each of these was a real
divergence from the Clementine that I considered marking and did not.

- **5a · Zach 1:3 @0762C.** Migne drops *exercituum* twice and the whole interposed *ait
  Dominus exercituum*. **Rejected: omission, not substitution.** Nothing is said that the
  Clementine does not say, and the gloss adduces the verse for the reciprocity of turning,
  which both texts carry identically. A `[var:]` here would report an ellipsis as a variant.
- **5b · Ps 33:19 @0763B, *prope est Dominus obtritis corde*.** The Clementine reads *Juxta est
  Dominus iis qui tribulato sunt corde* — **wholly different wording**, and this was the
  strongest rejected candidate. It lost because it is **not the psalm under exposition**: it
  is adduced in passing to license the claim that the prayer was heard, and the sense of the
  two forms is the same ("the Lord is near to the broken-hearted"). ⚑ The reading Migne
  prints is the Roman/Old-Latin form of the verse, and **Pattern 14 forbids speculating about
  why two texts differ**, so a marker here would either say nothing useful or say more than I
  can support. Recorded in full instead, which is where the finding belongs.
- **5c · Ps 7:8 @0764D, *circumdedit* for *circumdabit te*.** Perfect for future. **Rejected:
  the word has been absorbed into the gloss's own syntax** — *ita eum circumdedit, ut
  verissime diceretur* — where a future indicative could not stand. Contrast §2f and §2h,
  where the tense change sits in a lemma quoted as the verse, not in a clause of the gloss's
  own making. **That is the line I drew between the fired and the rejected tense cases**, and
  it is the same line as §3a's: Migne recasting his own citation is not Migne's text
  diverging.
- **5d · Rom 5:8–9 @0765C.** Migne adds *si*, drops *secundum tempus* and *in sanguine
  ipsius*, and reads *quanto magis* for *multo igitur magis*. **Rejected: the divergences are
  a clip and a connective**, and the *a fortiori* the gloss is arguing from survives all of
  them untouched. The dropped *in sanguine ipsius* is the one I hesitated over; it is a real
  loss, but nothing in the gloss touches the blood, and Pattern 14 asks for a divergence that
  changes the sense of *this* argument.
- **5e · 2Cor 2:16 @0766A.** Migne prints *aliis sunt odor vitae in vitam, aliis odor mortis
  in mortem*; the Clementine has death **first**. **Rejected: order only, both members
  present.** ⚠ Order reversal *is* a real class (7914 @1079B's *cinis et pulvis*), and it was
  weighed on that ground; it lost because that case turned on a gloss that expounded ashes,
  and here the gloss expounds neither member — it uses the pair whole, to explain how one bow
  shoots both apostles and heretics. The English keeps Migne's order.
- **5f · The *ex Hebraeo* citations @0767D, 0768C–D, 0769B, 0772A.** *Minues eum paulo minus a
  Deo* · *Victori super morte filii* · *victori pro morte filii* · *Canam nomini tuo,
  Altissime* · *Cum ceciderint inimici mei retrorsum…* · *Loquitur in corde suo: Non
  movebor…* — **not collated as Vulgate lemmata at all, and no `[var:]` is possible on any of
  them.** Migne labels every one (*in Hebraico legitur*, *ex Hebraeo translata editio*, *sicut
  Hebraica docet editio*, *Hebraica translatio*): they are Jerome *iuxta Hebraeos*, adduced
  precisely **because** they differ from the Gallican he is expounding. ⚑ Firing a Vulgate
  variant on a reading the author has just told you is not the Vulgate would be the marker
  asserting as a divergence what the page already prints as one.
- **5g · 1Cor 15:27 @0768A, *Excepto eo qui ei subjecit omnia*** for *praeter eum qui subjecit
  ei omnia*. **Rejected: a synonymous prepositional phrase and a word-order swap.** The
  exception clause is the whole point and it is identically made.
- **5h · Mt 16:23 @0769B, *Redi retro, Satanas*** for *Vade post me Satana*. A different verb
  and a different adverbial. **Rejected because the gloss's argument is about the *retro*, and
  the *retro* is Migne's own word here** — *retrorsum conversus est*, *retro factus est*,
  *retro esse facit*, three times in four lines. A `[var:]` would be true, but the reading it
  reports is not the reading the argument uses, and the Clementine's *Vade post me* is itself
  a "behind me". Logged rather than marked; ⚠ I record it as the closest call of the four
  rejected NT citations, and a later reader may reasonably reopen it.
- **5i · Phlp 3:13 @0769B.** Migne has *et se ad ea quae **ante** sunt extendens* for the
  Clementine's *ad ea vero quae sunt **priora**, extendens **meipsum***. **Rejected: this is a
  quotation woven into the gloss's own third-person sentence** (*qui … portaverit imaginem
  coelestis, ea scilicet, quae retro sunt obliviscens*), so *se* for *meipsum* is required by
  the syntax the gloss has built, and *ante* for *priora* follows it.
- **5j · Ps 9:8 @0770A, *judicio sedem suam*** where the address four words earlier prints
  *thronum*. Same class as §3a and §3b — Migne re-quoting himself with a synonym. **Kept
  visible in the English ("throne" / "seat"), not marked.**
- **5k · 2Thes 2:3 and 2:4 @0770D, 0772A.** *Cum revelabitur homo peccati* for *et revelatus
  fuerit homo peccati*; and *in templo Dei sedebit; extollens se super omne quod colitur et
  quod dicitur Deus* for *qui adversatur, et extollitur supra omne, quod dicitur Deus, aut
  quod colitur, ita ut in templo Dei sedeat ostendens se tamquam sit Deus*. The second is a
  substantial reworking. **Both rejected: Migne flags them as paraphrase himself** — *de quo
  Apostolus dicit*, *etiam secundum Apostolum* — and the second reorders and compresses rather
  than reading a different text. Recorded in full so a reader can see how far it travels.
- **5l · Ps 9:28 @0772B, *Cum amaritudine et dolo*** for the Clementine's *et amaritudine, et
  dolo*. **Rejected: this is the gloss picking the phrase up as a phrase**, and *cum* + the
  ablative is how it must be picked up once detached from *plenum est*. The verse address
  three lines above prints *Cujus maledictione os plenum est,* which is verbatim.
- **5m · Ps 9:34 @0773B, *non requiret Deus*** for the Clementine's bare *Non requiret.*
  **Rejected: Migne supplies the subject inside the italic**, which is an expansion for
  clarity in a sentence that has been about God for a page, not a variant reading.
- **5n · Ps 9:36 @0773C, *nec invenietur*** for *et non invenietur*, and *peccatum **ejus***
  for *peccatum illius*. **Rejected: one negation written as one word instead of two, and a
  pronoun synonym.** Both flagged only because the brief asks for the negation sites to be
  named; the English carries the negative either way.

⭐ **Two negatives worth recording as negatives** (addendum §4's point that a checked negative
is worth having): I looked for the normalization class — a form suspiciously *tidy* in a rough
passage — and found no candidate in these five chunks; and I ran addendum D on `usque ad`, which occurs
**five times** in cols 0762B–0774A and is **the abridgment formula in none of them**: two are
*usque adeo* ("so far", 0763C *usque adeo non erubescunt* and 0771D *usque adeo beatus
videbitur*), and three are ordinary prepositional uses with a real object — 0763A *fletum
usque ad cordis intima*, 0767A *ut sonus usque ad aures valeat*, 0767C *Scripturae praedicatae
usque ad infantium tarditatem*. Each was decided from what stands on either side of it, per
occurrence, and none was allowed to swallow a lemma's own words. Both checks were run and both
came back negative.

---

## §6 · ITALIC-SPAN BOUNDARIES — three spans in the digitization do not fall where the verse does

All three are reproduced **in the same place** in the English, per the brief's rule that every
italic span in the Latin is an italic span in the English. None is patched, none is marked.
They are logged because the resulting English reads oddly and a reader is entitled to know the
oddity is in the file and not in the translation.

- **6a · 0766A · *Vasa* vero *mortis vel* haeretici intelliguntur.** The span runs one word
  past the verse: *vel* is not part of Ps 7:14 but the first limb of the gloss's own
  **vel … vel** ("either heretics … *Vel* the same apostles"). English: "But by *vessels*
  *of death, either* heretics are understood … *Or* the same apostles". ⚑ Reading *vel* as
  part of the lemma instead of as the correlative would break the sentence's structure, and
  the second *Vel*, italicised alone four lines later, is what proves the pairing.
- **6b · 0768C · *De occultis filii* quaeri potest.** The span opens with the gloss's own
  preposition *De*; the psalm title (9:1) reads *in finem **pro** occultis filii*, and Migne
  prints exactly that, unitalicised *pro* and all, ten lines later. English: "*Concerning the
  hidden things of the son* it can be asked."
- **6c · 0772C · *Beati pauperes spiritu. Leonem* autem *in spelunca*.** One span runs across
  a full stop, joining the end of a Matthew quotation to the first word of the next sentence.
  Reproduced as one span. The same shape recurs at **0773C**, *omnium inimicorum suorum
  dominabitur. Brachium* ergo ejus dixit potentiam ejus, and at **0774A**, *judicare pupillo.
  Judicat [0774A] pupillum*. **Three instances of one class**, which is what makes it a
  markup artifact rather than three accidents.
- **6d · Two spans were split by English word order and one merged**, all recorded because
  band-level asterisk parity is how they were found: *secundum innocentiam* **suam** (0765A)
  is rendered "*according to the innocence* that is his own" so that the roman *suam* stays
  outside the span; *Filium* autem *hominis* (0767D) keeps its two spans as "*the Son* of
  *man*"; and *maledictione os* / *plenum est* (0772B) is rendered "*cursing* … *mouth is
  full*", which moves *os* from the first span into the second because English cannot put
  "mouth" anywhere else. **That last one is the only span whose contents I redistributed**,
  and it is stated here rather than left to be discovered.

---

## §7 · PUNCTUATION CARRIED AS PRINTED

- **0765C** · *prospiciens, non nos acquiescere carni et sanguini**,** sed delectari in
  Domino* — ⚠ **CORRECTED 2026-08-28 at the plate: Migne prints a COMMA here, not a full
  stop.** The full stop was Corpus Corporum's. The note printed here in the original crux —
  "a full stop in the middle of a *non … sed* correlative" — was therefore an observation
  about the transcription, not about the page, and the English had duly broken the sentence in
  two ("…flesh and blood. but are delighted…"). The English now runs on: "…that we do not
  acquiesce in flesh and blood, [0765C] but are delighted in the Lord". The column anchor still
  falls at the same point, now inside a comma-joined clause. **Pattern 8 cuts both ways: never
  supply a mark Migne does not print.**
- **0763C** · *quia etiamsi pariter atque iisdem conventiculis continentur**;** tamen* — a
  semicolon where a comma would be expected; carried.
- **0766B** · *sed justitiae Dei**,** ita loquimur:* — a comma splice; carried as a comma.
- **0765B** · *quod anima justa est**:** Et inquam* — a capital after a colon; carried.
- **0770C** · *cum infidelitas gentium saevitura sit**?** convenienter sequitur* — a question
  mark closing an indirect question, with a lower-case word after it. ⚑ **Pattern 8b was
  considered and is NOT needed here**: the question the mark falls on (*quomodo
  annuntiabitur…?*) is already **direct**, standing behind the colon of *quaereret dicens:*,
  so English can take the mark exactly where Migne puts it. The 8b recasting is for a mark
  that English grammar refuses, and this one it does not refuse. No colon was inserted and
  nothing was moved.
- Question-mark counts per chunk (2 · 1 · 1 · 7 · 2) match the Latin twins band for band. The
  seven in chunk 0008 include the two one-word interrogatives *Quare?* (0769C) and *Sed
  quare?* (0771C), both carried as printed.

---

## §8 · TEST 5 — does the English assert what he asserts

Run last, with the counts already clean, paragraph by paragraph against the Latin. Three
readings were changed as a result, all of them cases where my first draft read more smoothly
than the Latin does:

1. **0765C** — *Scrutans ergo cor nostrum, et **prospiciens**, non nos acquiescere carni…*
   My draft read "and looking upon **it**", supplying an object for *prospiciens* that the
   Latin does not have; *prospiciens* governs the accusative-and-infinitive that follows.
   Changed to "and looking forward, that we do not acquiesce…". **Nothing was missing in the
   draft** — that is the point of the test.
2. **0762D** — *In qua morte, hoc est, esse immemorem Dei … **ut** infernum dixerit* is an
   anacoluthon: the *ut* clause has no main verb to depend on. My draft had quietly supplied
   one by turning the parenthesis into a dash-bounded aside. Rewritten with commas, and the
   broken join left broken.
3. **0771D** — *Multum irascitur, dum non exquirit…* was drafted with the Antichrist as
   subject, which construes perfectly and inverts the paragraph. Repaired from the sentence's
   own closing clause (*quanta ista **ira Dei** sit*). See §3d.

The remaining paragraphs were read back and assert what Migne asserts. **The two places where
I would send a reader first if I am wrong** are §4a (*misus*, inside a lemma that already
carries a `[var:]`) and §5b (Ps 33:19, the largest divergence in my range on which I fired
nothing).

---

## PLATE COLLATION — markers withdrawn

**2026-08-28.** All 22 pages read at Migne's plate; 61 TEI patches applied; the Latin twins for
these chunks now say what Migne printed. Chunk boundaries did not move.

**Withdrawn — one, and it is the worst class of error this collation found.**

- **0770A · Ps 9:9 · `[var: Vulg. Ps 9:9 *judicabit*, "shall judge"]` — WITHDRAWN.** ⛔ **The
  divergence never existed.** The plate prints ***judicabit***, exactly the Clementine's reading;
  Corpus Corporum had written *judicavit*, and the collation of §2f, run against that twin,
  reported a departure from the Vulgate that is not on Migne's page. Marker removed from
  `0008.md` **and the English tense corrected with it**: "*hath judged the world in equity*" →
  "*shall judge the world in equity*". §2f above is rewritten in place, not deleted, because the
  failure mode is the lesson: **a `[var:]` fired off a transcription is a public claim about
  Migne resting on Corpus Corporum, and no amount of lemma collation can catch it — only the
  plate can.**

**Punctuation corrected — §7's first bullet.**

- **0765C.** Migne prints a **comma** after *carni et sanguini*, not a full stop; the sentence
  runs on into *sed delectari in Domino*. The full stop was the digitization's. The English had
  faithfully carried a mark Migne does not print, breaking one *non … sed* correlative into two
  sentences ("…flesh and blood. but are delighted…"). It now runs on: "…that we do not acquiesce
  in flesh and blood, [0765C] but are delighted in the Lord." The anchor sits at the same point.
  ⚑ **Pattern 8 has two halves and only one of them was being enforced here.**

**Sense changed by the corrected Latin.**

- **0764D.** Migne prints *ut desinat possidere **quod** possidet* (CC: *quos*). The English said
  "that he may cease to possess **those whom** he possesses"; it now reads "**what** he
  possesses" — which is also what the surrounding gloss requires, since the thing possessed is
  the *possessio* / *fines* of the next clause, not the sinners as persons.

**Recovered Vulgate divergences weighed in this range.** Rule applied: *fire where the printed
reading construes in place and yields a different sense; decline where it yields no sense at
all, because that is Pattern 12's business, not Pattern 14's.*

- **0764B · Ps 7:4 · `[var:]` FIRED.** Migne prints *si **fecit** istud* against the Clementine's
  *si feci istud* — a whole change of person, in a psalm spoken throughout in the first person,
  and Migne's own next clause is *si est iniquitas in **manibus meis***. CC had normalized it to
  *feci*. **Migne is rendered**: "What he says: *if he hath done this,*" with
  `[var: Vulg. Ps 7:4 *si feci*, "if I have done"]`. The strain between the third person of the
  lemma and the first person of its explanation is Migne's, and is now visible.
- **0771C · Ps 9:23 · `[var:]` FIRED.** Migne sets ***Comprehendantur*** in italic — subjunctive
  — where Clem. Ps 9:23 has the indicative *comprehenduntur*. CC had supplied the indicative.
  The word is italicized as the psalm's, so it is a citation and Pattern 14 reaches it; the mood
  is construable and changes what is asserted (a wish, not a fact). English:
  "*Let them be caught,* however, the impious, *in the counsels,*
  `[var: Vulg. Ps 9:23 *comprehenduntur*, "they are caught"]` because their thoughts become bonds
  to them." ⚠ Italic parity with the twin is preserved: two spans, *autem impii* outside them,
  as Migne sets it.
- **0764A · Ps 7:3 — DECLINED.** Migne prints *ne quando rapiat **at** leo animam meam*; Clem.
  *ut leo*. *at* is a real word but produces no clause here, and Migne prints the same lemma
  correctly (*Ne quando rapiat,* etc.) three lines above. Broken type, not a variant reading;
  English keeps "as a lion", unmarked, per the standing out-of-scope ruling on this work's
  restored typographic defects.

---

## PLATE COLLATION · REGISTER OF RESTORED TYPE, cols 0762B–0774A

Wilson's ruling of 2026-08-28 governs (stated in full at the head of the matching section in
`cruces-0000.md`): **mark only where the reading is in doubt; record the rest here and disclose
the count in the work-level page note.**

**MARKED in this range — two.**

- **0766A · *Providentia* for *Providentiae* — `[cj: *Providentia*; read *Providentiae*, "to the
  Providence"]`.** Migne prints *et ob hoc divinae **Providentia** etiam ista disposito tribuenda
  est*. *tribuenda est* takes a dative, and *divinae* is already dative and left stranded by a
  nominative. The dropped *e* leaves a clean, ordinary Latin nominative behind, so the Latin page
  gives the reader no signal; the English ("must be ascribed to the divine Providence") was
  rendering CC's repair. Marker placed after the sentence, before *Or the same apostles*.
- **0771A · *Filium homines* for *Filium hominis* — `[cj: *Filium homines*; read *Filium
  hominis*, "the Son of man"]`.** Migne prints *qui nolunt liberari a Filio Dei, et pertinere ad
  **Filium homines**, et esse filii hominum*. A nominative/accusative plural where the genitive
  singular is required; it does not construe, and *homines* is a real word standing in a real
  position (the same sentence ends *quoniam homines sunt*), so nothing marks it as broken.

**Already marked, and standing:** 0764B `[var: Vulg. Ps 7:4 *si feci*, …]` and 0771C
`[var: Vulg. Ps 9:23 *comprehenduntur*, …]`, both argued above.

**CRUCES ONLY — recorded here, unmarked in the text.**

| Col | Migne prints | Intended | Why the reading is not in doubt |
|---|---|---|---|
| 0763A | *flectum* | *fletum* | Intruded *c*; a non-word, and *rigatio … ad interiora* fixes "weeping". |
| 0763C | *Cebra* | *Crebra* | Dropped *r* at the head of a sentence; a non-word. |
| 0764A | *rapiat at leo* | *rapiat ut leo* | Ps 7:3. *at* produces no clause, and Migne sets the same lemma correctly three lines above. Wrong sort; see the DECLINED note above. |
| 0765C | *proscipiens* | *prospiciens* | Metathesis; a non-word, and Migne sets *prospicit* correctly in the next line of the same sentence. |
| 0766A | *disposito* | *dispositio* | Dropped *i*; a non-word, and *ista … tribuenda est* requires the feminine noun. |
| 0766C | *ouia* | *quia* | Broken/wrong sort for the *q*; a non-word opening a causal clause. |
| 0768D | *adimptere* | *adimplere* | *t* for *l*, split across the column break (*adim-\|ptere*); a non-word inside Mt 5:17, whose text is not in doubt. |
| 0770B | *momen* | *nomen* | *m* for *n*; a non-word, and *cognitio nominis* stands twice in the same sentence. |
| 0770C | *porte filiae Sion* | *portae filiae Sion* | Dropped *ae*; the same phrase is set correctly two lines above and two below. |
| 0772B | *Non novebor* | *Non movebor* | *n* for *m*; a non-word, and the first occurrence of the same lemma at 0772A/B is set correctly. |

**Orthography, not defective type — no marker and no conjecture.** 0771A ***Inploratur*** is
Migne's unassimilated spelling of *imploratur*: correct Latin for its period, Pattern 9 exempt,
and recorded here only so that a reader collating the twin is not left to wonder.

**Punctuation** in this range is dealt with above (0765C, the comma Migne prints where the
digitization had a full stop).

---

## THE BLIND POLARITY READ

Fenced reader on chunks **0005–0009** (Pss VI–IX, cols 0762B–0774A), reading Latin against
English in full with no crux file and no collation report open. Adjudicated 2026-08-28 under
Wilson's marker ruling of the same session (stated in full in `cruces-0000.md`). Whole-work
figures are in that file.

**Result for this range: 1 site, ours; 0 markers placed.**

### Repaired

- **0774A, VERS. 39 — *extulit patrem* is a burial, not an exaltation.** Migne: *qui exuit
  veterem hominem, atque hoc modo tanquam **extulit patrem***. Our English read "as it were
  **exalted** the father". *Efferre* here is the funeral idiom (*funus efferre*, *patrem
  efferre*) — **carried his father out to burial** — and the control is two paragraphs back in
  the same run at 0773C, where the expositor defines the *pupillus*: *Orphanum autem dixit,
  **cui moritur pater hic mundus**, per quem carnaliter genitus est*, and *Talibus enim orphanis
  pater fit Deus*. The clause is supplying the reason this man qualifies as the orphan the Son
  of man judges for. *Tanquam* is the tell: there is a metaphor to flag in burying a father one
  never literally had, none at all in exalting one — and the old reading made *exuit veterem
  hominem* a stripping-off and an elevation at once. Now: "and in this way as it were **carried
  his father out to burial**." 7a mechanism 1; no lexical trace, and `verify-english` cannot
  see it.

### Adjudicated and DECLINED

- **0769C *Princeps hujus saeculi missus est foras* → "was sent forth".** Momentarily ambiguous
  in English (it can read as commissioning), but the governing clause immediately before —
  *cum exclusit inde principem*, "when he shut out thence the prince" — fixes the direction for
  the reader before he reaches it. A clarity question, not a polarity one.
- **0770A *paravit in occulto judicio sedem suam*.** Our distribution ("prepared **in secret**
  his seat **in judgment**") and the reader's ("his seat **in the hidden judgment**") assert the
  same thing, which is the sentence's own contrast with *palam manifesteque venturus est*.
- **0764B *reddidit mala **pro nobis***** — almost certainly Migne's slip for *pro bonis*, the
  reading the maxim needs. Our English renders what is printed and does not repair it, which is
  7a-correct. **No marker:** the intended word is not in doubt (*mala pro bonis* is the maxim's
  own shape and *acceptis beneficiis* stands three words earlier), so it falls on the
  cruces-only side of Wilson's ruling.

### Positive results worth recording

- ⭐ **The 7a″ profile is ABSENT from this range.** Every quoted verse in five chunks was read
  word by word against the plate, and **no lemma was found conformed to the familiar English**.
  Where Migne diverges, the English diverges too and the divergence is already marked:
  *Miserere mei, **Deus*** (0762C), *si **fecit** istud* (0764B), *terram **manducabis***
  (0764D), *Consu**mm**etur nequitia* and *justus justior fiat* (0765B), *Templum **Domini***
  (0770B), *Comprehend**antur*** (0771C), *humili**avit*** (0773A), *ut tradat eos in manus
  **suas*** (0773B), *Ne dicatis vobis patrem in terris* (0773C). For a scripture commentary —
  the genre whose predicted dominant failure mode 7a″ **is** — that is the notable finding of
  the read, not an absence of one.
- **Every printed negation in the five chunks is carried**, including where carrying it leaves
  the sentence odd: *usque adeo non erubescunt … ut … non desinant* keeps the idiom's double
  negation rather than smoothing it. No negation appears in the English that the Latin does not
  print.
- **0769C *Convenientius hoc Domino Jesu Christo **dici**, quam **ipsum dicere*** — passive to
  the Lord, active by him — is rendered in the right direction ("said **to** the Lord … than
  said **by** him"). This is the exact 7a mechanism-5 shape, verified rather than assumed.
