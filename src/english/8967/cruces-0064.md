# Cruces — 8967 *Glossa ordinaria*, **Liber Psalmorum**, chunks 0064–0068 (cols 0981A–0991D, Psalms LXXXI–LXXXVII) · BAND B

---

## §0 · SPAN COUNT RECONCILIATION — the required check, and the brief is CORRECT

`data/briefs/8967-lemmata-0064.txt` declares **272** and lists **272** addressed entries. Counting
`*…*` runs in my own five Latin chunks:

| chunk | spans |
|---|---|
| 0064 | 34 |
| 0065 | 68 |
| 0066 | 34 |
| 0067 | 53 |
| 0068 | 83 |
| **total** | **272** |

**272 = 272. No mis-split.** The head of my file opens at `[0981A] VERS. 1.-- *Psalmus Asaph.*`,
which is the first span of chunk 0064, and the tail closes at `[0991D] *Proximum et notos,*`, the
last span of 0068 — so the cut is by chunk membership, not by column band.

⚑ **The English span totals match 1:1 in every chunk when the contents of `[var: …]` markers are
stripped** (my `[var:]` notes quote Latin in italics, which inflates a raw count by exactly the
number of markers in that chunk: 0064 +2, 0065 +3, 0067 +3, 0068 +3).

Other parities, all checked mechanically against the Latin twin: **column anchors 6 / 11 / 7 / 8 / 11
verbatim and in place** (each one checked against the *word* it stands beside, not merely present —
Pattern 2b); **notes 11 / 27 / 18 / 32 / 40**; **`## ` heads 1 / 1 / 1 / 2 / 2**; **question marks
5 / 10 / 2 / 0 / 4, band by band, zero mismatched bands.** `verify-english` clean; `plate-gate` ✓ on
all eleven markers.

---

## §1 · PLATE — I READ MY WHOLE RANGE, SIX PAGES, AND NOBODY HAD OPENED ONE OF THEM

PDF 496–501 of `raw/scans/pl113/patrologiaecurs04migngoog.pdf`, 300 dpi full width plus 600 dpi
crops, **corner numbers read first on every page** (982 · 983/984 · 985/986 · 987/988 · 989/990 ·
991/992) — the map `PDF page = (column + 11) / 2` holds. Recorded in `data/plate-reads.json` at
depth `full`.

**Clipping, measured not inferred:** col **0981 IS clipped** at the inner margin, 3–6 characters.
**0983, 0985, 0987, 0989, 0991 are all clean.** ⚑ **985 ≡ 1 (mod 4) and is clean** — one more
counterexample to the withdrawn mod-4 rule, which would have silently withheld two markers here.

**What the plate changed:**
- It **created** one marker I would not have dared from the Latin alone (0984A `vel` for Rom 2:9's
  `et` reads like a transcription slip until you see Migne set it).
- It **withheld** one: `filiis Excelsi omnes` @0981C falls in 0981's clipped margin and cannot be
  settled on this copy. No `[var:]` fired. See §4.
- It **refused four `[sic:]` candidates outright** — `omncm`, `opcrantis`, `Zcb`, `Eccc` — every one
  the italic-`e`-images-as-`c` hazard. I checked each against a known instance of the same letter on
  the same printed line before believing anything, exactly as the brief requires, and all four came
  back as our TEI already had them. **Without that control I would have invented the class I was
  hunting.**
- It **found seventeen departures of our Latin from Migne** across ~11 columns (§3).

---

## §2 · MARKERS FIRED — eleven `[var:]`, no `[sic:]`, no `[d:]`, no `[cj:]`, no `[ed:]`

Every one stands on a column read at depth `full` today.

| col | chunk | the divergence | why it is material |
|---|---|---|---|
| 0981B | 0064 | Migne's lemma reads `*Ecce deos dijudicat*` for Ps 81:1 `in medio autem deos dijudicat` | ⭐ **The gloss argues from the words Migne's lemma has replaced**: three lines below, `Hoc autem facit stans **in medio**, unde: *Medius vestrum stetit*`. A reader who meets only `Ecce` cannot see where "in the midst" came from |
| 0981D | 0064 | `*pauperem et humilem justificate*` against Ps 81:3 `humilem et pauperem justificate` | A transposition, and the visible half (`pauperem et` at the line end, outside the clip) settles it without needing the clipped word |
| 0984A | 0065 | Rom 2:9 quoted `*Tribulatio **vel** angustia*` for `Tribulatio **et** angustia` | ⭐ **The proof-text has been assimilated to the gloss's own `vel`**: the sentence it proves is `Tyrus. Hebraice sor, tribulatio **vel** angustia`. Paul's `et` is the whole reason the verse is adduced |
| 0984A | 0065 | Eph 6:12 quoted `adversus **principatus** et potestates` for `adversus **principes** et potestates` | ⭐ **The gloss depends on it.** The subject is the apostate angels going into the devil's retinue: *principatus* names an angelic ORDER, *principes* merely princes |
| 0984C | 0065 | Ps 82:15 lemma `*Ignis et flamma comburens montes*` for `Sicut ignis qui comburit **silvam**, et sicut flamma comburens montes` | ⭐ **The gloss expounds the word the lemma has dropped**: `quando et densae **silvae** peccatorum, et montes superbiae cremabuntur` |
| 0987B | 0067 | Gn 3:17+19 conflated as `Maledicta terra in opere tuo, et **in labore et sudore** vultus tui vesceris pane tuo` | The reader meets a Genesis quotation that stands in no Bible; the note names both verses |
| 0988A | 0067 | Ps 85 titulus `*Oratio David.*` for `Oratio **ipsi** David` | **Band A §A1.4 settled this class**: `Psalmus David` ≠ `Psalmus ipsi David`, and three Band A stints fired `[var:]` on such tituli. Inherited, not re-derived |
| 0988C | 0067 | Prv 14:28 quoted `*In lata gente gloria regis, in diminutione populi principis contritio*` | **Not the Vulgate at all** — an Old-Latin/LXX form (`ἐν πολλῷ ἔθνει δόξα βασιλέως`). The Clementine's `In multitudine populi dignitas regis` shares not one word of the second member |
| 0989C | 0068 | Mt 21:31 quoted `in regnum **coelorum**` for `in regnum **Dei**` | A word substitution inside a proof-text |
| 0990C | 0068 | Ps 87:6 quoted `quorum non es memor **adhuc**` for `quorum non es memor **amplius**` | ⭐⭐ **The highest-value one in the range.** The gloss reads `quorum licet non meminerit Deus *adhuc*, **ut resurgant**` — *adhuc* ("as yet") is what licenses a future resurrection. *Amplius* ("no more") destroys the exposition built on it. The marker says so |
| 0991C | 0068 | Dt 32:39 quoted `Percutiam et sanabo: occidam et vivere faciam` — **the two members reversed** against `ego occidam, et ego vivere faciam : percutiam, et ego sanabo` | The transposition does work: the gloss adduces the verse for `Flagellat enim filios quos recipit`, and putting *percutiam et sanabo* first is what makes striking read as corrective |

⛔ **No `[sic:]` is owed anywhere in this range, and that is a finding, not an absence.** Six real
Migne defects stand on these leaves (§3) and **our Latin carries none of them** — CC repaired every
one. A `[sic:]` may wrap only type the Latin twin actually carries, so each is a patch first and a
marker afterwards. §3 says which marker each unlocks.

---

## §3 · OUR LATIN IS NOT MIGNE'S — seventeen sites, filed to `8967-PENDING-TEI-PATCHES.md`

Full table appended there. The headline count: **8 sites where CC repaired a real Migne defect · 4
where CC altered Migne to a different real word · 2 where our Latin has lost what the plate prints ·
plus punctuation.** That is ~1.5 per column, exactly the Band A rate.

**The three that matter most:**

1. ⭐⭐ **0987B `Prophetice **dixi** futura` → our `dixit`.** The person is load-bearing: the same
   sentence runs `quasi dicat, **dixi** quasi facta. Et quia **video** futura … **oro** ut fiant` —
   first person throughout, and CC's `dixit` drops a third person into the middle of it. **My English
   reads "He said prophetically" because Pattern 7 governs the Latin I was given, not the Latin I
   read at the plate.** When the patch lands the English becomes "I said prophetically", and this
   crux is the record of why.
2. ⭐⭐ **0991C, a compositor EYE-SKIP Migne never caught.** The plate prints `unde amici **et
   videantur, et** more deserunt` where the line *above* ends `circumfluere **videantur, et**`. The
   compositor re-set that line-ending, losing `noti ti-` and stranding the orphan `more`. Our TEI
   reads `unde amici et noti timore deserunt`. Under 11a the intrusive copy is the **second**, and
   marking "the repeated occurrence" mechanically would quarantine the true text.
3. ⭐ **0986D `eum **ventibus** respici` → our `gentibus`.** A non-word, and the Band-B addendum's
   rule held: *every* suspicion aimed at a non-word has been confirmed at the plate, and this one is
   Migne's own. `[sic: *ventibus*]` is owed once patched.

The other five class-2 sites (`vallit` @0983C · `psalmi` @0985A · `damnado` @0991B · `Percutium`
@0991C · the doubled `, :` and stranded `torquebuntur.` @0982C) each likewise unlock a marker.

⚑ **Direction matters and both directions are here.** CC also *creates* readings Migne does not
print (`omnino` for `animo` @0985A, `eum` for `cum` @0982A, `vero` for `vera` @0985D) — **so no
`[sic:]` is owed on any of those**, and a later collation that meets them must not blame Migne.

---

## §4 · CRUCES — where I chose, what decided it, and what I could not settle

### 4a. `filiis Excelsi omnes` @0981C — UNSETTLEABLE ON THIS COPY, and no marker fired
Our Latin prints `*Ego dixi: dii estis, et filiis Excelsi omnes.*` where the Clementine (Ps 81:6)
has `filii Excelsi omnes`. The dative does not construe. **But the word opens a line inside col
0981's clipped inner margin**, and the plate cannot say whether Migne set `filiis` or `filii`.
Rendered literally — "and [0981C] all of you to the sons of the Most High" — with **no `[var:]`**
(the claim needs the plate) and **no `[cj:]`** (18a: a form that merely fails to construe, and is
neither a negation nor a correlative, stays declined). Logged the way Band A logged `f443` / `f449`
/ `f453`. **Needs Gallica.**

### 4b. `ut sint filii et Dei` @0982B — Migne's, and the rival named
The plate confirms `filii et Dei` at 600 dpi; it is not CC's. Rendered literally, "that they may be
sons, and of God." **The rival is `filii et dii`** — "sons and gods" — which answers the psalm's own
`dii estis … et filii Excelsi omnes` that the gloss has just quoted twice, and which the sentence is
plainly reaching for. ⛔ **It lost, and here is why:** Migne sets a capital `D`, the conjecture rests
on nothing but the argument's shape, and Pattern 18's bar is not met — the printed reading asserts
nothing false, it merely reads oddly. Recorded, not marked.

### 4c. `idem corpus sanat, et lavat caput` @0984D — two parses, and which won
The word order splits `idem … caput` around `corpus sanat, et lavat`. **Taken: "the same head heals
and washes the body"** (*caput* nominative, *corpus* accusative). **The rival, "the same body heals
and washes the head", lost** because it makes the body heal its own head, which reverses the frame
the whole gloss is built on (Christ the head healing his body piecemeal now, universally at the
end). A third parse — *idem* alone as "the same one", both nouns accusative — was weighed and
declined for want of any masculine antecedent in the sentence.

### 4d. `Mater Sion dicet, homo.` @0989C — Migne's comma, and it fights his own gloss
Migne labels this `Secundum aliam litteram` and prints the comma after `dicet`, which makes *Sion*
the speaker. **His gloss immediately says the opposite**: `Est quidam **homo**, id est, Christus, qui
dicit *mater Sion*` — the man is the speaker. Rendered as printed, "*Mother Sion shall say, a man.*"
**No marker:** Pattern 8 forbids moving his mark, and Pattern 18 opens on a *word*, not on
punctuation. This is the crux; the apparatus has nowhere else to put it.

### 4e. `Deus quis similis?` @0982C — a convention-3 EXCEPTION, forced by the gloss
Convention 3 renders a fragmentary lemma as the phrase it stands for. **Here it must not**, and the
gloss says why in its own voice: `Ideo non ait: *Quis similis **est** tibi?* … sed dicit, *Quis
similis **erit** tibi?*` — the whole paragraph turns on which verb the verse carries. Expanding the
bare lemma would decide, silently, the question the commentary exists to argue. Rendered as the
stump, "*O God, who is like?*", all three times. The plate confirms Migne really does clip it.

### 4f. Bare `Nunquid` lemmata @0987B, @0990D
`*Nunquid in aeternum.*` and `*Nunquid mortuis.*` are interrogative particles with the verb elided,
and Migne prints **no question mark** on either. Rendered "*Is it for ever.*" and "*Is it for the
dead.*" — the frame carried, no mark supplied (Pattern 8), no verb invented. Same treatment both
times, deliberately.

### 4g. `Etenim benedictionem dabit.` @0986C
Ps 83:8 reads `Etenim benedictionem dabit **legislator**`. Migne's lemma cuts before the subject.
Rendered "*For he shall give a blessing.*" — the pronoun is the minimum English needs and does not
import *legislator*, which the gloss never uses.

### 4h. `commendat Sion spirituali` @0989D
The head of an `usque ad` abridgment, so whatever noun *spirituali* modified was cut. Taken as an
ablative of manner, "he commends Sion spiritually", **because that supplies nothing**; the rivals
("commends Sion to the spiritual man", "commends spiritual Sion") each require a word the plate does
not print.

### 4i. `exuuntur in tegumentis … quasi vinaciis exuuntur veteri homine` @0985C
The verb is set twice with different constructions (`in` + ablative, then a bare ablative of
separation). Rendered both, as printed: "they are stripped in the coverings of carnal desires, as in
husks; they are stripped of the old man". No smoothing, no marker.

### 4j. `quia cui faciunt ibi quippiam, ubi nulli indigent` @0986B
A direct question that Migne closes with a **semicolon, not a mark**. Rendered without a question
mark (Pattern 8: never supply). `nulli` read as nominative plural, "where none are in need" — not as
a dative with *indigent*, which takes genitive or ablative.

### 4k. `quod ira Dei periisset` @0990C — a subject-level trap, checked
`ira Dei` is **ablative of cause** and the subject of `periisset` is Christ: "they thought that **he
had perished by the anger of God**". Reading *ira* as nominative gives "the anger of God had
perished", which is not Latin the sentence can use. Named here because §4 of the launch brief is
explicit that the blind read's worst finds were subjects, not negatives, and this is exactly that
shape.

### 4l. Pronouns supplied where the Latin leaves the subject or object unexpressed
Named here, per the unexpressed-subject rule, with what decided each:
- @0981D `Ostendit, nec illos immunes qui permiserunt … et possent illos … liberare` — **the subject
  is the multitude, `illos` are the princes.** Decided by `se a consensu liberare`: a crowd cannot
  free *itself* from consent unless it is the consenting party.
- @0987B `Ira Dei est omnis poena quam patitur` — "which **one** suffers"; the sufferer is man
  generally, and no antecedent stands in the sentence, so the English takes the indefinite rather
  than binding it.
- @0982D `iste videt intra` — "**this one** sees within", i.e. the Psalmist, not Christ, who is the
  object (`Christum … quem mali viderunt extra`).
- @0991D `Peccata undique copiosa inundatione concludunt` — `concludunt` has **no expressed object**;
  the English supplies "him", lifted from the lemma `*Circumdederunt me*` and from the gloss's own
  third-person voice two lines above (`Quae in suis sustinet`). It is the one supplied word in the
  chunk that a reader could not reconstruct, so it is recorded.
- @0989C `Quare hoc dixisti?` — second person **singular**, addressed to God, so "thou" (Pattern 17),
  not the plural of the surrounding psalm quotation.

---

## §5 · NEGATION — every printed negative, and where its host is

Carried and checked one by one: **0064** 12 · **0065** 21 · **0066** 14 · **0067** 12 · **0068** 20.
Nothing dropped, nothing invented. The four that needed thought:

1. ⚑⚑ **`nullus est qui non miretur, vel convertatur` @0982A — the apposition rule, and it fired.**
   One Latin `non` governs *both* `miretur` and `convertatur`. English cannot inherit a negative
   across a comma, so it is **marked twice**: "there is none who does not wonder, **or is not
   converted**." This is the precise shape the Band A blind read caught at `nec … compuncti sunt, id
   est, poenituerunt`.
2. **`non ad divinitatem hoc refertur, cui nullum hominem comparandum cogitavit` @0982D** — two
   negatives, two hosts (`refertur`, `hominem`), both kept on their own word.
3. **The `non solum … sed` family** (@0981C, @0982B, @0989A, @0990B, @0990C): every one is the test-2a
   trigger population — a negative next to a verb with a quantifier beside it. In all five the
   negative belongs on `solum`/`tantum`, proved from the `sed` correlative and not from what read
   well, and the English marks it on "only".
4. **`nec illos immunes` @0981D** — `nec` on `illos`, not on the participle: "**not even those** are
   guiltless". The subjects were named before the English was written: the ones permitting are the
   multitude, `illos` are the princes, and `possent … se a consensu liberare` proves it (a crowd
   cannot free *itself* from consent if it is not the consenting party).

---

## §6 · THE VULGATE COLLATION — every span, including the clean ones

I walked all 272 spans against `sources/vulgate/clementine-flat.txt`. Eleven fired (§2). Below is
**everything else I checked**, because a list of findings alone cannot be told apart from a report by
an agent that never looked.

### Agreeing with the Clementine word for word
Ps 81:2 `usquequo judicatis iniquitatem et facies peccatorum sumitis` · Ps 81:4 `Eripite pauperem` ·
Ps 81:5 `Nescierunt neque intellexerunt`, `movebuntur omnia fundamenta terrae` · Ps 81:6 `Ego dixi:
dii estis` · Ps 81:7 `Vos autem sicut homines moriemini`, `sicut unus` · Ps 81:8 `Surge Deus` ·
Is 1:2 `filios enutrivi et exaltavi, ipsi autem spreverunt me` · Mt 27:54 `Vere Filius Dei erat
iste` · Ps 82:2 `Quis similis erit tibi` · Ps 82:3 `Quoniam ecce`, `Qui oderunt` · Ps 82:4 `Super
populum tuum` · Ps 82:5 `Dixerunt venite`, `De gente` · Ps 2:1 `meditati sunt inania` · Ps 82:6
`Testamentum disposuerunt` · Ps 82:7 `Tabernacula Idumaeorum` · Ps 82:8 `Gebal`, `Ammon`, `Amalec`,
`Alienigenae` · Ps 82:9 `Assur` · Ps 82:10 `Fac illis sicut Madian, et Sisarae, sicut Jabin in
torrente`, `Sicut Madian` · Ps 82:11 `Endor` · Ps 82:12 `Pone principes eorum sicut`, `Oreb`, `Zeb`,
`Zebee`, `Salmana` · Ps 82:13 `Haereditate possideamus sanctuarium Dei` · Ps 82:14 `Ut rotam, et
sicut stipulam ante faciem venti` · Ps 82:17 `Imple facies` · Ps 82:18 `Erubescant et conturbentur`,
`in saeculum saeculi` · Ps 103:20 `Posuisti tenebras et facta est nox` · **Sir 2:1 `Fili, accedens ad
servitutem Dei, sta in justitia et timore, et praepara animam tuam ad tentationem` — exact, all
sixteen words** · Ps 83:1 `In finem`, `Pro torcularibus` · Ps 83:2 `Quam dilecta` · Ps 83:4 `Etenim
passer`, `Altaria tua, Domine` · **Ps 83:5 `Beati qui habitant in domo tua, Domine; in saecula
saeculorum laudabunt te` — exact** · **Ps 83:6 `Beatus vir cujus est auxilium abs te: ascensiones in
corde suo disposuit` — exact** · Ps 83:7–8 `In loco quem posuit. Etenim benedictionem dabit` ·
Ps 83:9 `Domine Deus virtutum`, `Deus Jacob` · Ps 83:10 `Respice in faciem` · Ps 83:11 `Dies una`,
`Super millia`, `elegi`, `abjectus`, `in domo` · Ps 83:12 `Quia misericordiam` · Ps 83:13 `Domine
virtutum, beatus homo qui sperat` · Ps 84:2–14 `Benedixisti Domine`, `Remisisti`, `Mitigasti`,
`Converte nos`, `Irasceris`, `A generatione`, `Deus tu conversus`, `Vivificabis nos`, `Plebs tua
laetabitur in te`, `Ostende nobis Domine`, `Salutare tuum da nobis`, `Audiam quid loquatur in me
Dominus`, `Prope timentes eum`, `Misericordia`, `Veritas de terra orta est`, `Justitia ante eum`,
`Ambulabit` · **Mt 5:8 `Beati mundo corde, quoniam ipsi Deum videbunt` — exact** · Ps 85:2 `Quoniam
sanctus sum` · Ps 85:5 `Mitis` · Ps 85:6 `Auribus percipe` · Ps 85:7 `Tribulationis` · Ps 85:8 `quia
non est similis tui in diis, Domine` · Ps 85:9 `Et glorificabunt nomen` · Ps 85:10 `Tu es Deus
solus` · Ps 85:11 `Deduc me, Domine, in via tua`, `Laetetur cor meum` · Ps 85:13 `Ex inferno
inferiori` · Ps 85:14 `Deus, iniqui insurrexerunt super me, et Synagoga potentium` · Ps 85:16 `Da
imperium tuum` · Ps 86:1 `Fundamenta ejus` · Ps 86:3 `Dicta` · Ps 86:4 `Memor ero`, `Ecce
alienigenae`, `Tyrus` · Ps 86:7 `Sicut laetantium` · Ps 87:2 `Domine Deus` · Ps 87:3 `Intret in
conspectu` · Ps 87:4 `Quia repleta est` · Ps 87:5 `Aestimatus` · Ps 87:6 `Sicut vulnerati
dormientes`, `Et ipsi de manu tua repulsi sunt` · Ps 87:7 `posuerunt me`, `In lacu inferiori`,
`umbra mortis` · Ps 87:8 `Super me confirmatus est` · Ps 87:9 `Longe fecisti`, `Notos` · Ps 87:10
`Tota die`, `tota` · Ps 87:11 `Aut medici suscitabunt` · Ps 87:12 `Sepulcro`, `Misericordiam et
veritatem` · Ps 87:13 `In tenebris` · Ps 87:14 `Ego ad te, Domine, clamavi` · Ps 87:15 `Ut quid`,
`Ut quid, Domine` · Ps 87:16 `Exaltatus`, `Humiliatus`, `Conturbatus` · Ps 87:17 `Transierunt`,
`Terrores tui`, `Conturbaverunt me` · Ps 87:18 `Circumdederunt me` · Ps 87:19 `Proximum et notos` ·
**Jo 3:36 `Ira Dei manet super eum` — exact** · **2Tim 4:16 `Omnes me dereliquerunt` — exact** ·
1Cor 1:20 `Ubi sapiens? ubi scriba?`

### Divergent, CHECKED, and DECLINED — with the reason, because a decline is a finding too
- **Rom 8:31 @0983A** — the Clementine reads `si Deus pro nobis, **qui** contra nos?`; Migne prints
  `**quis** contra nos?`. **Declined**: a single-letter difference between two interrogatives with
  the same force, and the gloss does not argue from the word. This is the class Band A's §C1
  explicitly excludes.
- **Jn 1:26 @0981B** `Medius vestrum stetit, quem vos nescitis` for `medius autem vestrum stetit…` —
  the dropped `autem` is the fragment's own opening. Declined.
- **Jn 3:29 @0981B** `amicus sponsi stat et audit, et gaudio gaudet` for `amicus autem sponsi, qui
  stat et audit eum, gaudio gaudet propter vocem sponsi` — an abridged quotation. The gloss argues
  from *stat*, which is present and correct. Declined.
- **`filios Excelsi` @0981B** — accusative because *dicit* governs it in the gloss's own sentence,
  not a divergence at all.
- **Ps 70:19 @0982D** `O Deus, quis similis tibi?` — Migne supplies the vocative `O`. Declined.
- **2Cor 13:3 @0986C** `An experimentum **ejus quaeritis**` for `An experimentum **quaeritis
  ejus**` — word order only. Declined. ⚑ The `!` that closes it is **Migne's** and rides as printed.
- **Mt 10:40 @0986C** `Qui **vos recipit**` for `Qui **recipit vos**` — word order only. Declined.
- **1Cor 15:22 @0987B** `**Quia** sicut in Adam` for `**Et** sicut in Adam` — the connective adapted
  to the gloss's sentence. Declined.
- **Jn 14:6 @0988D** `Ego sum via, veritas, et vita` — one `et` dropped. Declined.
- **1Cor 1:27 @0989D** `Elegit enim Deus infirma mundi ut **confunderet** fortia` for `infirma mundi
  elegit Deus, ut **confundat** fortia` — word order and tense of the purpose clause. Declined; the
  sense is untouched.
- **Sap 3:1 @0990C** `Justorum animae in manu Dei sunt` — `autem` dropped. Declined. ⚑ Recorded
  because of the 8960 precedent, where an *autem* was leaned on from stylistic inference and the
  file proved there was no divergence at all. Here the file is the authority and the word really is
  absent, and it still does not earn a marker.
- **Jn 6:44 @0991A** `Nemo potest venire ad me, nisi Pater traxerit eum` — `qui misit me` dropped;
  it is the tail of an `usque ad` abridgment, which is what abridgments do.
- **Mt 23:27 @0991A** `quae **foris apparent**` for `quae **a foris parent**`, and `plena` for
  `pleni`. Declined: the first is a prefix, the second a gender that English has no exponent for
  (Pattern 9).
- **Apc 3:19 @0991C** `**Quos ego** amo` for `**Ego quos** amo` — word order only. Declined.
- **Mch 4:10 @0984C** `Et tu, filia Sion, usque ad Babylonem venies, ibique liberaberis` against
  `…et venies usque ad Babylonem : ibi liberaberis` — a compression with the address moved forward.
  Declined: the argument (`Melius est ruere ut poeniteat`) turns on going down and being freed
  there, and both readings give it.
- **Orthography, all Pattern 9, all declined:** `Ismaelitae` for `Ismahelitae` · `Cison` for
  `Cisson` · `lacrymarum` for `lacrimarum` · `Nunquid` for `Numquid` (×3) · `Quascunque` for
  `Quascumque` · `Raab` for `Rahab` · `Mahalath` for `Maheleth` · `sepulcro` for `sepulchro` ·
  `Synagoga` capitalised at Ps 85:14 where the Clementine has `synagoga`.
- **Declared variants take NO marker.** Migne writes `Secundum aliam litteram` @0989C and
  `(secundum aliam litteram)` @0989D before `Mater Sion dicet, homo` and `qui facti sunt`. **He has
  already told the reader these are another text**; a `[var:]` on top would be ours saying what he
  said. Same principle as not stacking a `[sic:]` on his own `( sic )`.
- **Gloss-voice italics that are not quotations at all**, checked and passed over: `Moabitae`,
  `Tyrus` (nominative for the psalm's *Tyrum*), `Deus convertens` @0987B, `filii ancillae` @0989A
  (the psalm has *filium ancillae tuae*), `extensas manus` @0990D (the psalm has *expandi ad te
  manus meas*), `Ecce quam dulce, fasce torcularis premi` @0986D — which is in no Bible and is the
  glossator's own exclamation.

---

## §7 · THE AXES AND THE INHERITED CONVENTIONS — every decision in the range

| axis / convention | what my range did |
|---|---|
| **`In finem` → "Unto the end"** | 1 occurrence (0985B), rendered so. No rival. |
| **`Diapsalma` → roman, unanglicized** | 4 occurrences (0981D, 0987A, 0989B, 0989D), all roman, never italic. **All four confirmed ROMAN on the plate.** |
| **`usque ad` → "as far as"** | **21 occurrences of the abridgment formula**, all italic, all "as far as". ⚑ **Two look-alikes decided per occurrence and NOT swallowed by the formula:** (1) `Num usque ad adventum misi Prophetas` @0981C is unitalicized gloss prose and temporal, rendered "**until** the coming" — the *non-formula* class §A4 names; (2) `usque ad Babylonem venies` @0984C is **Micah's own words inside a scripture quotation**, and takes "as far as Babylon" because that is what the verse says, not because the formula says it. |
| **`gentes` family** | **Gentiles 5** — every one inside an explicit *Judaei*/*gentes* opposition: `plenitudo gentium intrabit` @0982A (Rom 11:25, on Israel's blindness), `gentium fide … transgressio Judaeorum` @0985A, `non solus est Judaeus, sed omnes gentes` @0989C, `Ecclesia gentium` @0989C, `gentes quae vagantur per vitia` @0989C. **nations 5** where the sense is plainly generic: `una gens`/`unam gentem` @0983B (all Christians, a non-ethnic singular), `eum gentibus respici` @0986D, `Omnes gentes adorantes` @0988B, `si est gens quam non fecit Deus` @0988C, `In lata gente` @0988C. **No `gens tenebrarum` in this range** — the open ruling is untouched. |
| **`daemonium`/`diabolus`** | demon 1 (`daemonia colebantur` @0987D) · devil 3 (`diabolus`/`diabolicam` @0982A–B, `diaboli` @0984A). No bleed. |
| **`mysterium`/`sacramentum`** | sacrament 1 (`sacramentorum Ecclesiae` @0985D). No `mysterium` in the range. |
| **`turba`/`multitudo`** | crowd 1 (`Turba quae cecidit` @0982B) · multitude 1 (`prae multitudine` @0981D). **Both stand in my range and they are kept distinct**, which is the first time in this work the pair has been available to check together. |
| **`Dominus virtutum` → "Lord of hosts"** | 2 (`Domine Deus virtutum` @0986C, `Domine virtutum` @0987A). Inherited from §A5. |
| **`sedes` → "seat"** | not present. |
| **`gradus` → "degree"** | 1 (`per gradus veniatur` @0986C) → "by degrees". The gradual-psalm series is Band C; the word itself is ruled and I applied it. |
| **Heads** | `PSALMUS LXXXI.` → `PSALM LXXXI.` etc., seven heads, **numerals kept as numerals**. Migne spells out only the first psalm of the book, which is in Band A. |
| **Archaism (both memberships)** | `-eth`/`-est` forms appear **only** inside italic lemmata or quoted scripture (`filleth`, `standeth`, `heareth`, `receiveth`, `abideth`, `hopeth`, `speaketh`). The commentator's own voice is never archaised: `dicit`/`ait` → "says". Checked against **both** markers, italic and guillemet — **there are no guillemets in this range at all**, so the italic test is sufficient here and I say so rather than leaving it implied. |
| **Pattern 17 (thou = singular)** | `thou`/`thee`/`thy` used **only** where the Latin is second-person **singular** (`deputaris`, `judicabis`, `tacuisti`, `haereditabis`, `dixisti`, `eleveris`, `meministi`, `facis`, `a te`, `ad te`, `animam tuam`). `you`/`your` used **only** for the plural (`vos`, `estis`, `judicatis`, `sumitis`, `nescitis`, `sitis morituri`, `corrigimini`, `extollimini`, `cadetis`). The two stand three lines apart at 0982A–B and are kept apart. |

---

## §8 · WHAT I READ CLEAN, AND WHERE A BLIND READER SHOULD GO FIRST

**Read clean** (Latin and English re-read against each other at the assertion level, §5's fourth
test, not merely counted): 0064 VERS. 5–8 · 0065 VERS. 6, 12, 13, 14 · 0066 VERS. 5, 6, 9, 11, 12,
13 · **the whole of 0067's Ps 85 section**, which is almost entirely `usque ad` tails and is the
lowest-risk stretch in the range · 0068 VERS. 3, 9, 12, 13, 18, 19.

⛔ **Where to look first, and why — these are the passages I am least confident about:**
1. **@0984D `idem corpus sanat, et lavat caput`** (§4c). Two parses, I took one, and the losing one
   is grammatically available.
2. **@0989C `Mater Sion dicet, homo.`** (§4d). My English follows Migne's comma and therefore says
   what his own next sentence denies. That is intended, and it should still be re-read.
3. **@0989C "that is, the Gentiles *Tyre,*"**. The seam is **CC's dropped `: et`**, not mine (§3);
   before flagging it as a translation defect, read the patch queue.
4. **@0987B "He said prophetically"**. Correct against our Latin, wrong against the plate (§3.1).
5. **@0981C "all of you to the sons of the Most High"** (§4a). Deliberately odd, deliberately
   unmarked.
6. **@0989D `*God chose* indeed *the weak things of the world…*`**. Two italic spans with one roman
   word between them, matching Migne's `*Elegit* enim *Deus…*`; "indeed" renders the postpositive
   `enim` and exists to keep the span structure 1:1. It is the only place in the range where span
   parity shaped a word choice, and I would rather a reader knew that than guessed it.

---

## §9 · FOR THE MERGE

1. **Seventeen TEI-patch sites appended to `data/briefs/8967-PENDING-TEI-PATCHES.md`**, including
   **six that each unlock a `[sic:]` we are entitled to fire** (`vallit` · `psalmi` · `ventibus` ·
   `damnado` · `Percutium` · the 0991C eye-skip) and **one whose patch changes the English**
   (0987B `dixi`, third person → first).
2. **Six pages of plate reads recorded at depth `full`** — the first reads anywhere in cols
   0981–0992.
3. **Band A §D.4 item CLOSED:** the `In Hebraeo` clause at 0991A prints **no Hebrew type at all**,
   like 0868A. Three of Band A's four are now settled.
4. **One site this copy cannot answer**, for the Gallica list beside Band A's f443/f449/f453:
   **`filiis`/`filii Excelsi omnes` @0981C**, lost in col 0981's clipped inner margin.
5. **One observation escalated rather than patched:** a stray `?` after `Sisara,` @0984A, standing
   flush at the right margin. If a second copy confirms it, chunk 0065's question-mark parity moves
   by one.
6. **`gens tenebrarum` does not occur in this range.** The open ruling is untouched, not resolved.
7. **A convention-3 exception is on the record** (§4e, `Deus quis similis?`) with the Latin that
   forced it, per the launch brief's instruction to take the exception and say so.
