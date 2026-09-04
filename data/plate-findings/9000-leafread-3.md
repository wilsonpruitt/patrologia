# Plate read 3 — 9000 Luke (Glossa ordinaria), leaves n150, n151, n153, n154

Scan: `raw/scans/pl114/patrologiaecurs06saingoog.pdf`, PDF page = (column + 11) / 2.
Second witness where the on-disk scan clips: archive.org `patrologiaecursu0114mign`, leaf n = (column + 11) / 2.

## Calibration

| PDF page | printed corners | verdict |
|---|---|---|
| 150 | **289** (left) / **290** (right) | formula holds |
| 151 | **291** (left) / right corner **clipped away**; second witness n151 reads **292** | formula holds |
| 152 (out of assignment, read for two oddities) | **293** / **294** | formula holds |
| 153 | left corner prints **"9 5"** — the medial digit is a broken/dropped sort; right corner **296** | formula holds; leaf is 295/296 |
| 154 | **297** / **298** | formula holds |

⚠ **New corner-number defect to record beside the known n215 case:** on **leaf n153 the left corner
number is set as `9 5`** — the middle *9* of *295* is missing (a broken sort or a failed impression;
there is no stray digit and no white-space plug). The number is *incomplete*, not *wrong*, and the
facing corner reads 296, so the leaf identity is not in doubt. Recorded so a later reader who renders
n153 alone does not read it as a mis-numbering.

⚠ **Leaf n151 clips its right margin badly** — 2–6 characters are eaten at the end of every line of
column 292 (the corner number 292 is gone entirely). The 0292D marker could not be settled on the
on-disk copy and was settled on the second witness, which is clean.

---

## The seven `[var:]` markers

### 1. 0289C (chunk 0018) — claim: Vulg. 1 Cor 1:22 *et Judaei signa petunt, et Graeci sapientiam quaerunt*

Plate (leaf n150, left column, band C), **400 dpi**:

> unde Paulus : *Judæi signa petunt, gentes sapientiam (I Cor. I). Ipse autem ut vidit.*

Migne prints **gentes** where the Vulgate has *Graeci*, and there is no *quaerunt*. Our file matches
the type word for word.

**Verdict: CONFIRMED.**

### 2. 0290D (chunk 0018) — claim: Eph 4:8 finite verb; Eph 4:11 missing the prophets

Plate (leaf n150, right column, band D), **400 dpi**, the whole quoted clause:

> quia *captivam ducens captivitatem, dedit dona hominibus, quosdam quidem apostolos, alios evangelistas (Ephes. IV)*, etc.

The participle **ducens** is Migne's (Eph 4:8 has *duxit*); **quosdam autem prophetas** and the *vero*
of Eph 4:11 are genuinely absent from the type. The conflation is printed on the page, not produced
by our transcription.

**Verdict: CONFIRMED.**

⚑ **But the citation inside it is ours, not Migne's — see declined oddity 14 below.** The plate sets
`(Ephes. IV)` with a **full stop**; our Latin has `(Ephes, IV)` with a comma.

### 3. 0292D (chunk 0019) — claim: Mt 12:50 / Mc 3:35 conflated

The on-disk copy clips this line's tail (the word `hic` sits in the eaten margin), so this was settled
on the **second witness, leaf n151**, native resolution 2215×3603:

> sibi respondit : *Qui facit voluntatem Patris mei, hic frater meus et soror et mater est*, postea intravit ad convivium Pharisæi.

Matthew's *Patris mei* inside Mark's *hic frater meus* frame, with the present *facit*, is what the
type carries. Nothing is dropped or imported by us.

**Verdict: CONFIRMED.**

### 4. 0296A (chunk 0020) — claim: Deut 8:3 *in omni verbo quod egreditur de ore Dei*

Plate (leaf n153, right column, band A), **400 dpi**:

> *Non in abundantia. Non in solo pane vivit homo, sed in verbo Dei (Deut. VIII)*, nec temporalis vita multitudine divitiarum protenditur.

The whole prepositional clause *in omni verbo quod egreditur de ore* is absent **from the type**, and
Migne prints *vivit* for the Vulgate's *vivat*.

**Verdict: CONFIRMED.**

### 5. 0297B (chunk 0020) — claim: Gen 30:33 *Respondebitque mihi cras justitia mea*

Plate (leaf n154, left column, band B), **400 dpi**:

> VERS. 28. — *Cras in clibanum.* Cras in Scripturis pro futuro ponitur, dicente Jacob : *Exaudiet me cras justitia mea (Gen. XXX).*

**Exaudiet me** is set on the plate.

**Verdict: CONFIRMED.**

### 6. 0297C (chunk 0020) — claim: Rom 8:28 *diligentibus Deum omnia cooperantur in bonum*

Plate (leaf n154, left column, band C), **400 dpi**:

> … quibus si hæc subtrahuntur, ad probationem est, si dantur ad gratiarum actionem, quia *omnia cooperantur in bonum bonis.*

**bonis** stands on the plate where the Vulgate has *diligentibus Deum*.

**Verdict: CONFIRMED.**

### 7. 0298C (chunk 0021) — claim: Lc 12:36 *ut, cum venerit et pulsaverit, confestim aperiant ei*

Plate (leaf n154, right column, band C), **400 dpi**:

> Unde et bene de exspectantibus subdit : *Ut cum venerit, confestim aperiant ei.* Non vult aperire judici pulsanti, qui timens videre iratum quem contempsit, de corpore exire metuit.

**et pulsaverit** is absent from the lemma as printed, and *pulsanti* stands three words later in the
exposition — both on the same plate. The mismatch is Migne's.

**Verdict: CONFIRMED.**

**Marker counts: 7 CONFIRMED, 0 WITHDRAWN, 0 UNRESOLVED.**

---

## Declined oddities settled (cruces `src/english/9000/cruces-0017.md` §(e))

### On my leaves

| # | col | our file | plate (dpi) | verdict |
|---|---|---|---|---|
| 1 | **0290B** | *in **Aegyto*** | n150, right col, **400 dpi**: "confessi sunt in **Ægypto**. *Profecto pervenit*, etc." | ⛔ **WITHDRAWN — ours.** Corpus Corporum dropped the *p*. **Patch to `Aegypto`.** |
| 14 | **0290D** | *(Ephes**,** IV)* | n150, right col, **400 dpi**: `(Ephes. IV), etc.` — an unambiguous full stop, on the baseline, matching the abbreviation points elsewhere on the page | ⛔ **WITHDRAWN — ours.** **Patch to `(Ephes. IV)`.** The cruces note that it should be "reproduced verbatim" was reproducing our transcription, not the type. |
| 12 | 0289C | *domus supra domum **cadet** … vel **opprimuntur** vel **puniuntur*** | n150, left col, **400 dpi**: "domus supra domum cadet cum habitatoribus unius domus ab alterius domus familia vel opprimuntur vel puniuntur" | **Migne's.** The number mismatch is on the plate. Our file faithful; no marker owed. |
| 17 | 0290A | *quod Satanas **Satan** expellat* | n150, right col, **400 dpi**: "visum, ut vos dicitis, quod Satanas Satan expellat" | **Migne's.** Confirmed as printed. |
| 13 | 0291C | *Qui scilicet tales **spiritus**, nequiores, diabolo dicuntur* | n151, left col, **400 dpi**: "Qui scilicet tales spiritus, *ne-quiores*, diabolo dicuntur" | **Migne's.** Broken agreement is on the plate. |
| 18 | 0292A | *in regina austri **studium** percipiendae sapientiae* | second witness n151 (the on-disk copy clips this column), native res: "in regina austri studium percipiendæ **sapi-** / **pientiæ** ( quæ peccatum cavet ) de totis finibus orbis congregatur" | **Migne's** for the bare nominative *studium* — confirmed as printed. ⚑ **But see the new finding below: the plate does NOT print *sapientiae*.** |
| 9 | 0295A | *vel **mansuros** in denuntiatione supplicii* | n153, left col, **400 dpi**: "præmii, vel mansuros in denuntiatione supplicii instruit." | **Migne's.** The un-construing future participle is on the plate. A `[cj:]` is now licensed by a plate read if the adjudicator wants one; I offer no conjecture. |
| 15 | 0295B | *[n: (I Cor. IX**.**)]* | n153, left col, **400 dpi** magnified ×3: "*Nunquid de bobus cura est Deo ? (I Cor.* / IX**.**) Sed aliud est cura" | **Migne's.** The stray full stop is set on the plate. Our `[n:]` is faithful. |
| 4 ⭐ | 0295C | *verbum **in Filio** hominis* | n153, left col, **400 dpi**: "subdit : *Et omnis qui dicit verbum in Filio hominis remittetur.*" | **Migne's.** The starred entry resolves against our suspicion: the plate sets **in Filio**, ablative, where Lc 12:10 has *in Filium*. Our Latin is faithful and the English ("in the Son") renders the type. A `[var:]` here is now evidentially available. |
| 5 | 0297A | *Vestiebat sicut unum* | n154, left col, **400 dpi**: "*Vestiebat sicut unum.* Quæ purpura regum, quæ pictura textricum potest floribus comparari?" | **Migne's.** The active is on the plate. Our file faithful; the withdrawal of the drafted `[var:]` was on the wrong ground but reached the right text. |

### ⭐ New finding, not on the declined list — 0292A

**The plate does not print *sapientiae*.** Second witness n151, native resolution, magnified ×3:

> in regina austri studium percipiendæ **sapi-**
> **pientiæ** ( quæ peccatum cavet ) de totis finibus orbis

Migne's compositor set **`sapipientiæ`** — the syllable *pi* repeated across the line break, so that
the hyphenated word does not reassemble into a Latin word. The on-disk copy shows the same two
line-ends independently. **Our Latin reads `sapientiae`.**

⚑ This is an instance of the second mechanism class the cruces note said its list could not reach
(*"Corpus Corporum silently repairing Migne's broken type leaves no trace in our file by
construction"*). It leaves a trace here only because a plate happened to be read for another reason.
It is a decision for the adjudicator, not a patch I will make: restoring `sapipientiae` with a
`[sic:]` reports the page truthfully; leaving `sapientiae` keeps a silent repair. **I record only
what the type says.**

### Out of assignment — leaf n152 (cols 293/294), read because the brief named 0293B as mine

⚠ **0293B is PDF page 152, which is not one of my four leaves** (n150, n151, n153, n154). The brief
asserted it was; the formula puts it on the leaf between n151 and n153. I read it anyway, at
**400 dpi**, corners verified **293 / 294**. **If leaf n152 is assigned to another reader, these four
lines are a duplicate check, not a claim on their range.**

| # | col | our file | plate (400 dpi) | verdict |
|---|---|---|---|---|
| 2 | **0293B** | ***Repondens** autem* | "VERS. 45.— *Respondens autem.* Audito verbo Dei Pharisæus…" — the medial *s* is fully formed and normally spaced | ⛔ **WITHDRAWN — ours.** **Patch to `Respondens`.** |
| 3 | 0293B | *Qui estis ut monumenta* | "VERS. 44.— *Qui estis ut monumenta.* Hic superstitionem ipsorum doctorum redarguit" | **Migne's.** The withdrawal of the drafted `[var:]` was correct. |
| 10 | 0294B | *nec ipsi **lege et prophetis** intelligunt* | "Hanc legisperiti, nec ipsi lege et prophetis intelligunt, nec ab aliis intelligi volunt." | **Migne's.** No *in* on the plate. |
| 11 | 0294B | ***Intrare clavem*** | "Intrare clavem , est non esse contentum superficie litteræ" | **Migne's.** The accusative is on the plate. |

⚑ Bonus, same column, unlisted: the plate prints **"intelligit se dammandum"** — *dammandum* for
*damnandum*, a genuine Migne non-word, and **our file already carries it**. Recorded so a later sweep
does not "fix" it.

---

## Columns read and found clean

Columns **0289, 0290, 0291, 0292, 0295, 0296, 0297, 0298** were each put on screen with the printed
corner numbers checked first, and (out of assignment) **0293, 0294**. Beyond the items settled above,
nothing further was found on **0291** and **0298** — every marker and every declined oddity standing
on those two columns is accounted for in the tables.

⛔ **Nothing was left unresolved.** No word on these leaves defeated the plate: where the on-disk scan
clipped (0292), the second witness settled it at one HTTP request.

## Patches owed to the Latin (for central consolidation — I edited no file under `src/`)

1. `src/latin/9000/0018.md` @0290B — `in Aegyto` → **`in Aegypto`**
2. `src/latin/9000/0018.md` @0290D — `(Ephes, IV)` → **`(Ephes. IV)`**
3. `src/latin/9000/0019.md` @0293B — `Repondens autem` → **`Respondens autem`** *(leaf n152; defer to that leaf's reader if it is assigned)*
4. ⚑ **Adjudicator's call, not a patch:** `src/latin/9000/0019.md` @0292A — our `sapientiae` against the plate's `sapi-/pientiæ`.
