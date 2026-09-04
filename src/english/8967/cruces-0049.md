# 8967 *Glossa ordinaria*, Liber Psalmorum — cruces, chunks 0049–0053 (Band B, stint 3)

Range: `src/latin/8967/0049.md`–`0053.md`, cols **0940D–0953D**. Psalms LXVII–LXX.
Lemma brief: `data/briefs/8967-lemmata-0049.txt`.

⚠ **This file is one stint's range. It must be merged into `src/english/8967/cruces.md`.**

---

## §0 · SPAN COUNT RECONCILIATION (the required check)

My brief's header states **373 spans** for chunks 0049–0053. Counting `*…*` in my own Latin:

| chunk | italic spans |
|---|---|
| 0049 | 115 |
| 0050 | 46 |
| 0051 | 97 |
| 0052 | 53 |
| 0053 | 62 |
| **total** | **373** |

**The brief agrees exactly. No mis-split.**

---

## §1 · THE PLATE — eight leaves, ~14 columns collated word by word

Pages **475–482** of `raw/scans/pl113/patrologiaecurs04migngoog.pdf`, read at 200–260 dpi full
page with 500 dpi crops on every disputed word. Page map `(column+11)/2` **calibrated on p. 475**,
whose printed corners read 939 / 940. Recorded in `data/plate-reads.json` as eight `full` reads;
`plate-gate.mjs` passes.

⛔ **Clipping: NONE of cols 0939–0954 is clipped at the inner margin.** That includes 0941, 0945,
0949 and 0953, all ≡ 1 (mod 4) — four more counter-examples to the withdrawn mod-4 rule, and they
were read, not inferred.

⚠ **The h/b imaging trap fired once and was defeated by the leaf, not by taste.** At 0943D our TEI
reads `manibus honorum operum`; the plate reads **`bonorum`**. The temptation was to call it the
documented `h`→`b` artifact and leave our TEI alone. Checked against the `b` of `manibus` on the
same line and the `h` of `habeo` two lines up: the glyphs differ, and the plate's is a `b`.
**Here CC is wrong and Migne is right — the reverse of this class's usual direction.**

⚠ **`deservit`/`deserit` does not occur in this range.** Checked; the standing pair is clean here.

### What the plate withdrew or refused
- **`vinetos` @0941C** looked like a Migne defect worth a `[sic:]`. The same word `vinctos` is set
  correctly twice within four lines and the `c` here is a filled bowl. **Ink, not a sort. Declined,
  and reported only as copy condition.**
- **`|Christum` @0953A · `j..dicii` @0953C** — same class, same refusal.
- **`Dilecti, dilecti` @0942B** looked like a `[d:]`. It is not: **Migne's own next sentence glosses
  the doubling** (`Repetitio *dilecti* ad commendationem; sed non est haec repetitio in omnibus
  libris`). Marking it would have annotated the commentary's own subject matter as a printer's slip.
- **`spiritoali` @0945D** is reported as *lower confidence*, not asserted. A wrong sort is
  restorable; a filled `u` is not, and one copy cannot settle it.

**20 TEI-patch sites** appended to `data/briefs/8967-PENDING-TEI-PATCHES.md` (~1.4 per collated
column). Two carry an English edit that must land **with** the patch and not before:
`0049.md` "honourable works" → "good works" (0943D), and `0051.md` drop "thee" from "So may it
befall thee" (0947C).

⛔ **The worst patch site in this range is 0942A, and it is worth naming here.** Our TEI reads
`Vel, *mons Sina a facie Dei Israel,*`; the plate has **no `Sina`**. Migne's very next gloss is
`Quidam libri non habent *mons,* sed *a facie Dei Sina Israel;*` — the whole point is that `Sina`
stands in the *variant* and not in the lemma. CC's insertion makes Migne argue against a text he
did not print. **The English twin renders our Latin as it stands and will need re-reading with the
patch.**

---

## §2 · MARKERS FIRED — 16 `[var:]`, and nothing else

**0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[cj:]` · 0 `[nt:]`.** Every defect I found in this range
is *Corpus Corporum's*, not Migne's, and therefore a patch and never a marker.

| chunk | col | marker | why it is material |
|---|---|---|---|
| 0049 | 0941C | `[var: Vulg. Ps 67:8 *cum pertransires in deserto*]` | Migne prints `*Transiit in desertum,*` — **third person for second**, and the gloss runs on the third (`cum ad gentes venit`) |
| 0049 | 0941D | `[var: Vulg. Ps 67:10 *tu vero perfecisti eam*]` | Migne prints `*Perfecit.*` — again 3sg for 2sg, and the gloss supplies `Deus` as the subject |
| 0049 | 0942D | `[var: Vulg. Ps 67:17 … without *eum*]` | Migne prints `habitabit **eum** in finem`; **the gloss then construes the verb transitively** (`habitabit illos montes`), which the Vulgate's intransitive reading cannot bear |
| 0049 | 0943D | `[var: Vulg. Lev. 5:8 *retorquebit caput ejus ad pennulas*]` | Migne prints `Os turturis retorquetur ad ascellas` — **`Os`, the mouth**, and the argument two clauses earlier is precisely mouth (`quod ore praedicant`) against hands. The Vulgate's `caput` would destroy it |
| 0050 | 0944C | `[var: Vulg. Ps 67:28 *in mentis excessu*]` | `excelsu` for `excessu`; height for ecstasy, and the gloss stops to discuss the Greek word |
| 0050 | 0945C | `[var: Vulg. Ps 67:34 *ad orientem*]` | Migne prints `*Et ascendit ab oriente*` and then, as a separate lemma, `*Ad orientem.*` — **a directional reversal that Migne himself glosses twice** |
| 0051 | 0946D | `[var: Vulg. Ps 68:7 *Domine virtutum*]` | Migne prints `*Deus virtutum,*`. ⚑ Band A settled `Dominus virtutum` → "Lord of hosts"; **this is not that phrase**, and the divergence is the reason |
| 0051 | 0947A | `[var: Vulg. Ps 68:8 *opprobrium*, singular]` | Migne's lemma is plural `opprobria` and the gloss beneath it is singular `opprobrium`; the plural is load-bearing — `Congregat in unum multa quae pertulit` |
| 0051 | 0947C | `[var: Vulg. Lc 8:10 *mysterium regni Dei*]` | Migne prints `mysterium **Verbi** Dei`. Word for kingdom, in a gloss about teaching in parables |
| 0051 | 0948A | `[var: Vulg. Ps 24:10 *universae viae Domini*]` | Migne drops `Domini`, so the maxim asserts that *all* ways are mercy and truth |
| 0052 | 0950C | `[var: Vulg. Ps 68:33 *quaerite Deum*]` | Migne's lemma is `quaerite **Dominum**` and **his own gloss two lines below reverts to `quaerite Deum`** |
| 0052 | 0950D | `[var: Vulg. Ps 68:35 *et omnia reptilia in eis*]` | Migne prints `*Omnia quae in eis sunt:*` — and then prints `*Et omnia reptilia in eis.*` as a further lemma, so both stand |
| 0052 | 0951C | `[var: Vulg. Ps 69:5 *Magnificetur Dominus*]` | `Deus` for `Dominus`, and the gloss's `quod non Deus, sed nos` turns on the word |
| 0053 | 0951D | `[var: Vulg. Ps 70:1 has no *In finem*]` | ⚑ **flagged by the lemma brief as MATCHES-ONLY-ELSEWHERE and it is real.** Migne opens the Ps 70 titulus with `In finem`; the Clementine title is `Psalmus David, filiorum Jonadab, et priorum captivorum` |
| 0053 | 0952D | `[var: Vulg. Job 2:9 *Benedic Deo, et morere*]` | Migne prints `Dic aliquid in Deum et morere`. **The Vulgate's euphemism is gone**, and the gloss uses the taunt to show provocation against God |
| 0053 | 0952D | `[var: Vulg. Tob 2:22 *Manifeste vana facta est spes tua*]` | Migne prints `Ubi sunt justitiae tuae?` — not the Vulgate at all. (Migne's own locator, `Tob. IV, 2.`, is also wrong; it is left verbatim in the note) |

---

## §3 · 7a″ — THE FULL LEMMA WALK, INCLUDING WHAT I DECLINED

Every lemma word in `data/briefs/8967-lemmata-0049.txt` was read against
`sources/vulgate/clementine-flat.txt`. **The 16 above fired. These diverge and did NOT fire, each
for a stated reason** — recorded so the merge can overrule me rather than re-derive me.

**Single-word inflection, excluded by the settled `[var:]` rule (Band A §C1):**
- `*Viduae,*` @0941B — Vulg Ps 67:6 `judicis **viduarum**`. Rendered "Widows," because the gloss's
  own relative is plural (`quibus error maritus moritur`).
- `*Etenim Dominus habitavit.*` @0942D — Vulg `habitabit`. `b`/`v` is exactly the letter-level
  corruption the rule excludes, and the site already carries a `[var:]` on the sister lemma.
- `*In rememoratione.*` @0951A — Vulg Ps 69:1 `in rememoration**em**`.
- `*Quoniam dixerunt inimici mei.*` @0952C — Vulg Ps 70:10 `**Quia** dixerunt`.
- `*Nunquid **potest** Deus parare mensam*` @0947B — Vulg Ps 77:19 `poterit`.
- `*Isti* sunt dii tui, Israel` @0947B — Vulg Ex 32:4 `**Hi** sunt`.

**Abridgment tails after `usque ad` — the known false positive, Pattern 4:**
- `*usque ad: Quod uni ex minimis fecistis, mihi fecistis.*` @0943B — Mt 25:40 reads
  `quamdiu fecistis uni ex his fratribus meis minimis`.
- `*usque ad: et cum eos vincerem, aspersa sunt vestimenta mea.*` @0943D — a paraphrase of Isa 63:3
  inside a Basil excerpt, not a direct citation.
- `*Vobiscum sum usque ad consummationem saeculi,*` @0953C — Mt 28:20 minus `omnibus diebus`.
- `*Vae vobis! Scribae et Pharisaei,*` @0946B — Mt 23:13 minus `autem` and `hypocritae`.

**Divergence without a change of sense:**
- `*Vidimus eum non habentem speciem neque decorem,*` @0946A — Isa 53:2 has
  `non est species ei, neque decor`. Syntax, not sense. ⚑ The negations are carried either way.
- `*Sperabamus quod redempturus esset Israel*` @0946B — Lc 24:21 `quia ipse esset redempturus`.
- `*Tu solus peregrinus es in Jerusalem, et ignoras,*` @0947D — Lc 24:18 `et non cognovisti`.
  ⚑ Note that `ignoras` **lexicalises** a negation the Vulgate spells out; the English "knowest not"
  carries it, so nothing is lost.
- `*Peccator cum venerit in profundum peccatorum, contemnit*` @0948B — Prov 18:3 `Impius, cum in
  profundum venerit peccatorum`.
- `*Exaudi me, Domine, quia benigna misericordia,*` @0948C — Ps 68:17 `quoniam benigna **est**
  misericordia **tua**`.
- `*Reges terrae.*` @0944D — Ps 67:30 has only `reges`; the gloss does not argue from `terrae`.
- `*Caelum, terra, mare.*` @0950D — Ps 68:35 `caeli et terra; mare`; a re-ordered stump.
- `*Os meum annuntiabit justitiam.*` @0953A — Ps 70:15 `justitiam **tuam**`.
- `*Mirabilis in sanctis.*` @0945D — Ps 68:36 `Mirabilis **Deus** in sanctis **suis**`.

**Not a Vulgate collation at all, and correctly not marked:**
- `*Dominus autem inhabitare facit monachos in domo,*` @0941B — Migne's own frame is
  **`In Hebraeo habetur`**. It is Jerome *iuxta Hebraeos* (which reads `solitarios`), not the
  Gallican Psalter, so a `[var:]` against the Clementine would be a category error. **Rendered
  "monks", the word Migne prints; not softened to "solitaries".**
- `*mons Sina a facie Dei Israel*` / `*a facie Dei Sina Israel*` @0942A — Migne is himself running
  a variant apparatus here (`Quidam libri non habent…`). Our marker would duplicate his. **And the
  first form is a CC corruption anyway — see §1.**
- `*Deo regna.*` @0945A — the lemma brief scores it ⚠ NOT-IN-CLEMENTINE, and it is a false positive:
  Migne is deliberately juxtaposing the last word of Ps 67:32 with the first of 67:33, because
  **that juxtaposition is the gloss's entire question** (`Ut *Deo* sit in principio sequentis
  versus. Vel magis in fine praecedentis versus`).
- `*habitu inventus est ut homo*` @0953B — Phlp 2:7 lacks `est`, but the run is not italic in our
  Latin, so it is the gloss's own prose.

---

## §4 · INHERITED CONVENTIONS — one exception taken, with the Latin that forced it

⚑ **`usque ad` inside a scripture lemma is NOT the abridgment formula, and I did not render it
"as far as" in two places.** The Latin that forced it:

- **@0946A `*Aquae usque ad animam meam.*`** — Ps 68:2, `intraverunt aquae usque ad animam meam`.
  Rendered **"Waters even unto my soul."**
- **@0953C `*Vobiscum sum usque ad consummationem saeculi,*`** — Mt 28:20. Rendered
  **"I am with you even unto the consummation of the world."**

Both are whole italic spans that are *quotations*, so the italic-membership test — which was
written to separate the formula from unitalicised look-alikes — cannot decide them: they are italic
because they are scripture, not because they are the abridgment. Band A's measured axis already
licenses non-formula readings ("four *down to* are the non-formula temporal look-alikes"). **The
chunk-level guarantee is intact:** 0051 carries 6 formula "as far as" beside the one exception, and
0053 carries 11 beside its one. **Flagged, not settled — the merge may overrule.**

Unitalicised look-alikes, rendered by sense and correctly not formula (three in 0049, one in 0053):
`usque ad terminum majestatis suae` @0942D ("even to the term"), `praedicando usque ad sanguinem …
usque ad mortem` @0943D ("even unto blood … even unto death"), `a principio mundi usque ad finem`
@0952A ("from the beginning of the world unto its end").

Formula counts reconcile exactly: Latin `usque ad` 18/2/7/6/13 against English "as far as"
15/2/6/6/11, the differences being precisely the seven sites named above.

### Applied without incident
- **`In finem` → "Unto the end."** Four occurrences (0940D, 0942D ×2, 0943B, 0945D, 0951D).
- **`Diapsalma` / `Diapsalmus` ROMAN, never italic, never "Selah."** Six occurrences, and **five
  more plate confirmations** (0941C, 0942C, 0943B, 0944B, 0945B).
- **`sedes` → "seat"** — does not occur in this range.
- **`(ID.)` and `(Ibid.)` never expanded.** Note density here is heavy (223 notes over 5 chunks).
- **`PSALMUS LXVII.` → `PSALM LXVII.`**, numerals kept Roman; `(cont.)` carried on the two repeated
  heads exactly as Migne's chunking gives them.
- **`gens tenebrarum` does not occur in this range.** Checked by grep, not by memory.
- **`Dominus virtutum` does not occur either** — what occurs is `*Deus virtutum,*` @0946D, which is
  a different phrase and a `[var:]`. See §2.
- **`gentes` axis:** Gentiles 7 · nations 5 · nation 1 · heathen 0, each decided per site.
  `gentes tuae, dum credunt` @0941D–0942A → "thy nations" (the psalm's own possessive); `annuntiatur
  in gentibus` @0944A and `dum gentes in supplementum admisit` @0941D → "Gentiles" (the Church's
  in-gathering). `Gentilitas` @0945A → "the Gentile world".
- **Archaism:** none used. No `-eth`/`saith`/`doth` anywhere in these five chunks, so the
  double-membership test (italic lemmata **and** « guillemets ») had nothing to adjudicate.

---

## §5 · CRUCES — what does not construe, carried unrepaired

**None of these was smoothed, and none has a marker.** Where a marker was considered, the reason
for declining is given.

1. **@0950B `Notitia Dei, quae praedestinavit ac vitam, quos praescivit conformes fieri imagini
   Filii sui.`** ⚑ **Read at the plate: the ungrammatical `ac` is MIGNE'S, not CC's.** The source is
   Rom 8:29 (`quos praescivit, et praedestinavit conformes fieri imaginis Filii sui`) and the
   obvious conjecture is **`ad vitam`** — "which predestined unto life those whom he foreknew". Our
   English carries the break: *"which predestined and life, those whom he foreknew…"*
   ⛔ **A `[cj: *ac*; read *ad*]` was drafted and declined.** Pattern 18a's actual bar is whether the
   English **asserts something false**; this English asserts nothing — it is incoherent, which is
   what the page is. The census of 2026-08-18 promoted a handful out of ninety on exactly that
   distinction. **If the merge disagrees, the marker is ready and the site is plate-verified.**
2. **@0944A `In hoc etiam, patiendo vel credendo, *praevenerunt* eos principes, vel praevenerunt ad
   te laudem.`** The second clause has no construable object relation — `praevenire laudem ad te`
   is not Latin I can bind. Rendered flatly: *"or they went before unto praise of thee."* Not
   repaired, not marked.
3. **@0944D `Nam stabiles, fortes, et graves non habent seducere.`** The passage wants a passive
   ("cannot be led astray") and the printed Latin is active ("have not [wherewith] to seduce").
   ⛔ **Rendering it passive would be exactly the 7a silent repair** — the smooth English with no
   trace. Rendered active: *"have not wherewith to seduce."*
4. **@0952D `*ne elongeris,* ut gravioribus exponat.`** `ut` after a prohibition wants to be `ne`,
   and rendering it "lest" would be the same repair. Rendered *"that he may expose [them] to graver
   things."* The `[them]` is a supplied English pronoun, bracketed.
5. **@0951B `*Revereantur,* ne proles a justitia poena sequatur.`** `proles` and `poena` cannot both
   be nominative subjects of `sequatur`. Rendered as apposition, *"lest punishment, an offspring
   from justice, follow them,"* which is the least violent reading of the printed words.
6. **@0946D `Quod mei ignari Dei, hi sunt qui commutantur in sapientes et justos.`** Elliptical;
   `mei … Dei` read as "of me, who am God". Rendered without supplying a verb.
7. **@0948D `Hoc ad apertam, ut caro resurgat…`** `apertam` is feminine accusative with no noun.
   `liberationem` is supplied in English as *"unto the open deliverance"* — an English gloss, not a
   Latin emendation.
8. **@0943B `Cursum vitae, quae vere prosperum.`** Gender mismatch (`quae` fem., `prosperum` neut.),
   Pattern 9 territory. Carried: *"which is truly prosperous."*

### The §4 defect classes, checked as SUBJECTS and not only as negatives
Band A's blind read found four defects that no negation check could see. I re-read for that shape
specifically, and record what I checked rather than that I looked:
- **@0941B `Viduae, quibus error maritus moritur`** — the husband who dies is **error**, and the
  widows are the ones for whom he dies. Not "widows who die".
- **@0943C `et Domini, qui sine peccato fuit, exitus non alius, quam mortis`** — the genitive is
  **`Domini`** governing `exitus`, not a vocative. "even of the Lord … the issue was none other".
- **@0944A `ut *canes* ejus sint cujus erant inimici`** — the two relatives point in opposite
  directions: *his* dogs, *whose* enemies they had been. Not "whose dogs they were".
- **@0946B `quibus factum est extra quod erat intra`** — what was **within** came to be **without**,
  not the reverse; the next clause (`caecitas quae in corde facta est et in oculis`) fixes it.
- **@0950C `sic qui non contradicit, sed tamen terrenum abjecte sapit`** — the man who does **not**
  contradict is nevertheless the one to be stirred with hoofs. The negative survives the `sed`.
- **@0951C `quod non Deus, sed nos laudando proficimus`** — **we** make progress, not God. The
  apposition is marked twice in English ("it is not God, but we").
- **@0949A `cum deberent cum eo contristari de caeteris, qui medicum occidebant`** — `qui` is the
  slayers, not the disciples; the disciples are the ones who *ought* to have grieved.
- **@0942B `Filii, id est, pater`** — the genitive `dilecti` is glossed as *of the Son*, and the
  king is *the Father*. Rendered so that neither collapses into the other.

---

## §6 · OBSERVATIONS, NOT FINDINGS

- **Migne skips VERS. 16 of Ps 67 entirely** (0942C runs `VERS. 15.` → `VERS. 17.`), and his
  `VERS. 17.` covers Clementine Ps 67:16 *and* 67:17. His `VERS. 7.` in Ps 70 (0952B) is Clementine
  70:6. **His versification, reproduced; no marker, no patch.**
- **Four impossible locators inside `[n: …]`, all set thus by Migne and all left verbatim:**
  `(Luc. LXXXIV)` @0947D for Lc 24:18 · `(Job. VII)` @0952D for Job 2:9 · `(Tob. IV, 2.)` @0952D for
  Tob 2:22 · `(Matth. XXI)` @0953C for Mt 28:20.
- **`noteCount` is 52 in the 0049 frontmatter against 53 `[n: …]` in the body** — the documented
  off-by-one false positive. Frontmatter copied verbatim regardless.
- **Column anchors land mid-word in our TEI at 0949A (`Invidiam ex [0949A] citat`)** because Migne's
  own line break falls there. Not the chunk-boundary signal; the English places the anchor at the
  nearest clause seam.
- **`(CAS).` at 0945D stands outside a `[n: …]` marker** in our TEI — a bare siglum in the running
  text. Left untranslated and unmoved.
- **A stray `)` after `etc.` at 0950A** is reproduced in the English so the twins match; it is on
  the patch queue and should leave both files together.
