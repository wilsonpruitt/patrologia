# Cruces — isidore-glabas-sermo-2, chunks 0000–0002 (batch A)

The **work-wide conventions section of `src/english/isidore-glabas-sermo-1/cruces.md`
is binding here** and is not restated. This file records (a) epithets and coinages
**new in Sermon II** and the English fixed for each, (b) the scripture-divergence list,
(c) the Latin-twin pass per chunk, (d) silent OCR corrections, (e) the one `[sic:]`
and one `[ed:]` fired, and the `[lat:]` candidates rejected with reasons.

**Witnesses.** Greek = `src/greek/isidore-glabas-sermo-2/` (Calfa). Latin twin =
`src/pg-latin/isidore-glabas-sermo-2/`. Third witness = `src/pg-greek-scan/isidore-glabas-sermo-2/`
(the scan's own Greek column, independent of Calfa).

**Frontmatter note.** Each English chunk copies its Greek chunk's frontmatter verbatim,
including `language: "grc"`. The prompt said to adjust `language`, but **all four English
chunks of the Sermon I anchor keep `grc`**, and the anchor is the binding format model;
`verify-english-pg.mjs` passes. Flagged for the merge session — if the field is to be
`en`, it is a one-line sweep across both sermons, not a Sermon II decision.

---

## 0. ⚠ THE LEAF GAP — Greek cols 0044 and 0045 are CALFA-ONLY

`greekPlateAbsentPages = [29, 30]`. On the four-column leaf layout of this work
(Lat 0039 ‖ Gr 0040 · Gr 0041 ‖ Lat 0042 · Lat 0043 ‖ Gr 0044 · Gr 0045 ‖ Lat 0046 ·
Lat 0047 ‖ Gr 0048) the two absent leaves take out **Greek 0044 and 0045 together with
their Latin twins 0043 and 0046**. Both crop files carry explicit `[gap: …]` markers at
exactly those columns, which confirms the mapping.

**Consequence, stated once and relied on throughout:** everything in chunk 0000 from
`νομίζω, διὰ τοῦτ᾽ ἔσχε τὴν πρόσρησιν ταύτην` (§4) to `ἢ δήπουθεν ὑπὲρ τούτους` (end of
§7's long period) has **no third witness and no Latin twin**. Nothing in that stretch is
attributed to Migne's plate; every reading there is logged as Calfa-only. Chunks 0001 and
0002 are fully covered by both verifiers.

One partial rescue: the Latin's col. **0047** opens with the tail of the sentence that
began in the lost col. 0046 (*appareret, et coelestem ejus originem et coelum propriam
ejusdem esse sedem, utpote quae angelica conditione, imo supra angelicam conditionem
creata sit*), and **Ballerini's note (54) on that column quotes the Greek itself** —
`κατ᾽ ἀγγέλους δημιουργηθείσης` and `ἢ δήπουθεν ὑπὲρ τούτους`. That plate-verifies the
last clause of the gap range from Migne's own apparatus. It is the only such rescue.

---

## 1. NEW epithets, maker-words and coinages — English fixed here

Extending (never redefining) the Sermon I table. Every entry below is a word Sermon I did
not use; the anchor's equivalences are carried unchanged (πάναγνος = all-pure ·
πανυπέραγνος = all-surpassingly pure · Πανάχραντος = All-immaculate · πανάμωμος =
All-blameless · ἀμώμητος = unblemished · πανύμνητος = all-hymned · πολυύμνητος =
much-hymned · Θεοτόκος = Theotokos · Δέσποινα = Lady · Δεσπότης = the Master ·
βασιλίς = Queen · παμβασιλίς = all-queen · θεόπαις = God-child · πολύτοκος =
many-bearing · καλλίπαις = fair-childed · Κτίστης = Creator · Δημιουργός = Maker ·
πλάστης = Fashioner · δημιούργημα = created work).

| Greek | English fixed | Where | Note |
|---|---|---|---|
| **παναμώμητος** | **all-unblemished** | 0000 §6 (`τὸ παναμώμητον ἄγγος`) | A **third** member of the ἄμωμος family, standing two words from `τὸ πανάχραντον σκεῦος`. Distinct from πανάμωμος = All-blameless and ἀμώμητος = unblemished (both Sermon I). Three Greek words, three Englishes. |
| **ἄμωμος** | **blameless** | 0001 §13 (`ψυχῶν ἀμώμων`) | the plain form; Latin *animas sine macula*. |
| **ἀκηλίδωτος** | **unspotted** | 0000 §6 | kept apart from the ἄμωμος family. |
| **παναγέστερος** | **all-holier** | 0000 §3 | comparative of πανάγιος; the anchor already fixes the superlative παναγέστατον = all-holiest. |
| **θεαυγέστατος** | **most God-radiant** | 0001 §11 | |
| **θεοπτικώτατος** | **most God-beholding** | 0001 §11 | of the ἔσοπτρον. |
| **θεοειδέστατος** | **most God-formed** | 0001 §11 | of the κάτοπτρον. |
| **θεολαμπής** | **God-shining** | 0001 §11, §13 | |
| **θεοτερπής** | **God-delighting** | 0001 §11 | |
| **θεοπρεπής** | **God-befitting** | 0001 §11 | |
| **θεόνυμφος** | **God-espoused** | 0000 §7; 0001 §11; 0002 §16 | |
| **θεόλεκτος** | **God-chosen** | 0001 §12 (of Joachim and Anna) | |
| **θεοδόχος** | **God-receiving** | 0002 §18 (of Symeon) | |
| **θεουργικός** | **God-working** | 0000 §7; 0002 §17 | the anchor fixes θεουργικώτατος = most God-working; the positive follows it. |
| **διακωδωνέω** | **sound the bell** | 0000 §8 (`τρανότατα διακωδωνοῦντος`) | same root as Sermon I's προδιεκωδώνισε = "sounded the bell beforehand". Allatius drops the metaphor entirely (*evidentissime proclamabat*). |
| **λαμπαδουχέω** | **bear torches** | 0002 §19 | |
| **καινοτομέω** | **wrought newly** | 0001 §12 | cognate of Sermon I's καινοτοκεῖν = new-bearing. |
| **περιπέζιος** | **that which treads the ground** | 0000 §1 | Latin flattens to *terrenis omnibus*. |

**⚑ The seven-member θεο- pile-up at 0001 §11 is this batch's epithet-flattening trap**,
and it is the exact analogue of the anchor's πολυύμνητος/πανύμνητος case. Migne's Greek
runs `θεαυγέστατον … θεοπτικώτατον … θεοειδέστατον … θεολαμπής … θεοτερπής … θεοπρεπής …
θεόνυμφος καὶ θεόπαις`. Allatius renders the middle three with *splendor divinitus
emicans · jubar Deo gratissimum · venustas Deum condecens* — good Latin that keeps three
of them apart, but he **collapses θεοπτικώτατον ἔσοπτρον / θεοειδέστατον κάτοπτρον into
one figure** (*expressissima Dei imago speculum Dei speciem ad vivum referens*), losing
the mirror/looking-glass doublet on which the sentence's rhythm turns. English keeps
seven distinct compounds and both mirrors.

**Register note carried from the anchor** (capitalize a substantivized epithet where
Calfa capitalizes, lower-case where it is adjectival): applied throughout. Hence "the
All-pure one" at 0000 §8 (`τὴν Πάναγνον`) and 0001 §9/§11 (`τῇ Πανάγνῳ`, `τὴν Πάναγνον`),
but "the all-pure one" at 0000 §1 etc. (`ἡ πάναγνος`). Likewise "the all-immaculate one"
(0000 §2, lower-case in Calfa) against the anchor's capitalized "All-immaculate".

---

## 2. Scripture-divergence list — where Migne's printed Greek departs from the received text

**This is the deliverable.** Every place in 0000–0002 where the printed Greek differs from
the received LXX/NT is named here. `[var: …]` fired only where the sense turns on it.

**Marked `[var:]` in the English (5):**

1. **0001 §9 — Heb 10:19–20.** Migne prints `ἣν ἐνεκαίνισεν εἰς τὴν εἴσοδον τῶν Ἁγίων
   **ἐν τῷ ὀνόματι Ἰησοῦ**`; the NT has **ἐν τῷ αἵματι Ἰησοῦ**, "in the blood of Jesus."
   **Two-witness concurrence** — the Latin column reads *initiavit in introitu Sanctorum
   **in nomine Jesu*** (col. 0047 region, twin 0001 §IX frame), and Migne's own note cites
   *Hebr. x, 19, 20*. So the substitution is the plate pair's, not our file's (ladder row
   3). Material: the letter to the Hebrews grounds the new way in the **blood**; Isidore's
   text grounds it in the **name**. Rendered as printed, marker names the NT reading.
2. **0001 §13 — Ps 50:7 (LXX), inverted and with μόνην added.** Migne prints `**Οὐκ** ἐν
   ἀνομίαις συνελήφθην, **οὐκ** ἐν ἁμαρτίαις ἐκίσσησέ με **μόνην** ἡ μήτηρ μου`. LXX is
   affirmative and has no μόνην. **This is a polarity inversion and it is the author's
   own** — he announces it four words earlier (`τὸ προφητικὸν ἐκεῖνο **διαφυγεῖν**`, "to
   escape that prophetic saying"). The Latin concurs exactly (*In iniquitatibus concepta
   non fui; et rursus, Solam non concepit in peccatis me mater mea*), and Ballerini's note
   (61) builds an immaculist argument on it. **Both negatives are carried into the English
   and neither is smoothed.**
3. **0002 §18 — Luke 19:38, refitted to the feminine.** Migne prints `Εὐλογημένη ἡ
   ἐρχομένη **βασιλὶς** ἐν ὀνόματι Κυρίου· **Εἰρήνη ἐν οὐρανῷ** καὶ δόξα ἐν ὑψίστοις`
   for the NT's masculine `εὐλογημένος ὁ ἐρχόμενος ὁ **βασιλεύς**` and the order `**ἐν
   οὐρανῷ εἰρήνη**`. Latin concurs (*Benedicta quae venit regina … Pax in caelo*). The
   refitting IS the homiletic move (the priest greets the Virgin with the Palm-Sunday
   acclamation); the English must not drift back to "Blessed is he that cometh."
4. **0002 §18 — Luke 2:30–32.** Migne prints `**Νῦν** εἶδον οἱ ὀφθαλμοί μου τὸ σωτήριον,
   ὃ **ἡτοίμασται** κατὰ πρόσωπον πάντων τῶν λαῶν … καὶ δόξαν λαοῦ Ἰσραήλ` — **passive**
   where the NT has the second-person active `ἡτοίμασας` ("which **thou** hast prepared"),
   and **without σου** in both `τὸ σωτήριόν σου` and `λαοῦ σου Ἰσραήλ`. Latin concurs on
   the passive (*quod paratum est*) but **restores the Vulgate's possessive** in *plebis
   **tuae** Israel* — a Vulgate conformation in the Latin column, which by standing rule
   is convention, not divergence, and fires nothing. Marker names the NT reading.
5. **0002 §18 — Isa 40:5 (LXX), with an address inserted.** Migne prints `**νῦν** ὄψεται,
   **κόρη**, πᾶσα σὰρξ **διὰ σοῦ** τὸ σωτήριον τοῦ Θεοῦ`. **Migne prints the LXX himself**
   in Ballerini's note (66): *Isa. xl, 5, sec. LXX: Καὶ ὄψεται πᾶσα σὰρξ τὸ σωτήριον τοῦ
   Θεοῦ.* Marked nonetheless, following the anchor's own precedent (its Ps 88:7 case was
   marked although Ballerini's note (9) adjudicated it on the page): the reader of our
   English does not see Migne's Latin apparatus.

**Recorded here only — divergence real, sense does not turn on it (no marker, to avoid
marker spam):**

- **0000 §7 — Ps 48:13/21 (LXX)** `παρασυνεβλήθη τοῖς κτήνεσι τοῖς ἀνοήτοις, καὶ ὡμοιώθη
  αὐτοῖς` is verbally the LXX, woven into the homilist's own clause. No divergence.
- **0002 §16 — Luke 2:22.** `ἀνήγαγον, φησίν, εἰς Ἱεροσόλυμα **παραστῆναι Κυρίῳ**` for
  the received transitive `παραστῆσαι **τῷ** κυρίῳ` ("to present **him** to the Lord").
  The Latin has the transitive (*ut sisterent eum Domino*) — i.e. **the Latin agrees with
  the received text against Migne's Greek**. This is the closest thing in the batch to a
  `[lat:]`, and it is **not fired**: the difference is one of voice, the object is
  supplied by the same sentence, and no reader of either column takes away a different
  fact. Rendered intransitively, "to stand before the Lord." Also note `τὸν **ἐμὸν**
  Ἰησοῦν` for `αὐτόν` — the homilist's own weave, which the Latin keeps (*Jesum meum*).
- **0002 §18 — Ps 44:11–12 (LXX).** `ἐπιλάθου τοῦ οἴκου τοῦ πατρός σου` drops `τοῦ λαοῦ
  σου καί`; and `ὁ βασιλεὺς τοῦ **σοῦ** κάλλους ἐπιθυμήσει` reorders `ἐπιθυμήσει ὁ
  βασιλεὺς τοῦ κάλλους **σου**`. A truncation plus word order, not a variant.
- **0002 §19 — Ps 42:4 + Ps 21:10–11 (LXX), welded.** `Εἰσελεύσομαι … πρὸς τὸν Θεὸν τὸν
  εὐφραίνοντα τὴν νεότητά μου` is Ps 42:4 verbatim; `ὅτι σὺ ἡ ἐλπίς μου ἀπὸ μαστῶν τῆς
  μητρός μου· ἐπὶ σὲ ἐπεῤῥίφην ἐκ μήτρας, **ἀπὸ γαστρὸς** μητρός μου, Θεός μου εἶ σύ`
  welds Ps 21:10b–11 and reads ἀπὸ γαστρός for the LXX's `ἐκ κοιλίας`. Migne cites both
  psalms on the plate, flagging the weld himself. Rendered as the weld stands.
- **0002 §20 — Luke 2:40.** `ηὔξανε … καὶ ἐκραταιοῦτο **πνεύματι**, πληρούμενον
  **σοφίας**, καὶ χάρις Θεοῦ ἦν **ἐπ᾽ αὐτῷ**`. πνεύματι is the Byzantine/TR reading, not a
  divergence. `σοφίας` for the dative `σοφίᾳ`, and `ἐπ᾽ αὐτῷ` for `ἐπ᾽ αὐτό`, are
  case-level. **Worth naming:** the Latin **feminizes** it — *et gratia Dei erat **in
  illa*** — where the Greek keeps the neuter agreeing with `παιδίον`. Not fired: the
  referent is the same person either way. English keeps the neuter, "upon it."
- **0002 §16 — Ps 88:16 (LXX)** `Μακάριος ὁ λαὸς ὁ γινώσκων ἀλαλαγμόν` and **§18 Ps 22:6**
  `κατοικεῖν … ἐν οἴκῳ Κυρίου εἰς μακρότητα ἡμερῶν`: verbally as printed in LXX, woven.
- **0002 §18 — Zeph 3:14 (LXX)** `Χαῖρε σφόδρα, θύγατερ Σιών`: exactly the LXX, and
  **Migne adjudicates it on the page** — note (65): *Sic versio LXX edita ab Aldo: Χαῖρε
  σφόδρα, θύγατερ Σιών. Vulgatus noster: Lauda filia Sion.* No marker.
  **Rendering decision, carried from the anchor:** χαῖρε is englished **Rejoice**, not
  Hail, because the next clause is `δι᾽ ἧς ὁ Κτίστης … **χαίρει** … **χαρήσεται** … τὴν
  **χαράν** σοι … μηνύσει` — a four-fold χαρ- figure that "Hail" would destroy outright.
- **0001 §13 — Luke 1:49.** `ὧν μοι **μεγαλεῖα** ἐποίησεν ὁ δυνατός` for the received
  `ἐποίησέν μοι **μεγάλα**`. Latin *magnalium … magna*. Word-choice, sense unchanged.

---

## 3. The Latin-twin pass, chunk by chunk — including whether each was clean

Method as specified: draft first, then one deliberate pass against the twin hunting
(1) OCR damage in our Greek, (2) different asserted facts, (3) polarity disagreement.

- **Chunk 0000 — NOT clean.** One `[sic:]` (§4 below), one `[ed:]` (§5), ~25 silent OCR
  corrections (§6). **No `[lat:]`.** Polarity collation, every site: `οὐδέποτ᾽ ἄν` /
  *nunquam* · `οὐδ᾽ εἰ μίαν … ἡμέραν` / *neque si unam tantum diem* · `ῥύπου μένειν ἔξω`
  / *sine macula esse* · `οὐδὲν … διοίσει` / *nihil … distare* · `οὐδ᾽ ἂν ἓν … οὐδέν, ὃ
  **μὴ** … ἐντίθησιν` / *nihil omnino sit, quod … **non** ingerat* (the double negative
  carried in both columns and in the English) · `οὐδὲν ἀληθῶς ἕτερον` / *nil aliud* ·
  `χρῆσιν οὐδενὶ παρέχων` / *nullum cuipiam commodum* · `μὴ ὅτι τοῦτ᾽ ἐγεγόνει` / *illum
  **non** reipsa factum fuisse hominem* · `οὐκ ἐνῆν` / *haud par fuisset* · `ἥκιστα ἔπτη`
  / *haudquaquam evolavit*. **No disagreement anywhere.** Numerals: none but section
  marks (§7). Free-rendering, named so a later pass does not re-raise: `οὐκ ἀσθενῆ …
  ἔλεγχον` → *invictum … argumentum* (litotes flattened to a positive — Allatius's norm);
  `τῷ γαληνῷ τοῦ Σωτῆρος` → *affabili Salvatoris benignitate*; `περιπεζίου παντὸς
  ἀνωτέρῳ` → *terrenis omnibus sublimius*.
- **Chunk 0001 — NOT clean.** Two `[var:]`. **No `[lat:]`.** Polarity: `οὐκ ἦν … τυχεῖν`
  / *non expediebat* · `**οὔτ᾽** ἦν ἱκανὸς … **καὶ** εἶχεν ἄλλως` / *in sacris
  penetralibus morari **non** poterat, **et** … interpretari debuit* — **the broken
  correlative (οὔτε … καί for οὔτε … οὔτε) stands in BOTH columns and is carried into the
  English** ("who neither was fit … and was otherwise able"), exactly as the anchor's
  Ῥουβίμ case was · `οὐχ … μόνον, ἀλλὰ καί` / *non modo … sed* · `οὐ τῆς ἴσης …
  θεοπτίας` / *haud pari mensura* · `οὐδ᾽ ὅσον εἰπεῖν ἔνεστιν` / *quantum neque verbis
  eloqui fas est* · `**μήτ᾽** ἐκείνους … **μήτε** τὴν μακαρίαν` / ***non** aliam … **non**
  alios* · `Οὐκ ἐν ἀνομίαις … οὐκ ἐν ἁμαρτίαις` / *non fui … non concepit* · `τῶν **οὐκ**
  εἰκότων` / *incongruum* · `**οὐ** μετεῖχε τραπέζης` / *haud humana alebatur mensa* ·
  `**Οὐδὲ** γὰρ ἦν οἴκοι μένειν τῶν ἀναγκαίων` / *ut domi maneret **nequaquam** necesse
  fuit*. **No disagreement.** Numerals: `τριετία` / *triennium* and `τριετής` /
  *triennis* — agree, no plate check needed.
- **Chunk 0002 — NOT clean.** Three `[var:]`. **No `[lat:]`.** Polarity: `οὐκ ἦν ἂν τῶν
  ἀκολούθων … ὑπερβῆναι` / *haud consentaneum fuisset … praetergrederentur* · `**μὴ**
  διαπεσεῖν εὖ πεποιήκασι` / *recte de promissione implenda curaverunt* (recast, no
  polarity flip) · `**οὐδὲν** ἦν, ὃ τοῦ ἱεροῦ **μὴ** τῇ Παρθένῳ ἀνέῳξε` / ***nulla**
  templi pars fuit, quam Virgini perviam **non** faceret* — double negative carried in
  both and in the English · `ἀγγέλους **ἀγνοεῖν**` / *angelis incompertum* · `**οὐδ᾽** εἰς
  φρονοῦσαν ἡλικίαν τελοῦντες ὑπεριδεῖν ἔχουσι` / *e qua aegre avelli se sinunt vel qui
  jam matura sint aetate* · `**οὐκ** ἂν ἱκανὸς εἰπεῖν εἴη` / *vix effari quispiam poterit*.
  **No disagreement.** Numerals, all agreeing: `τριετίας` / *ad triennium* · `τὸ τοῦ ἔτους
  δίκαιον μέτρον … ἡ τριετία` / *justam temporis mensuram … triennium* · `τρία … ἔτη` /
  *trimula* · `τοῦ ἐνιαυτοῦ ἅπαξ` / *semel tantum in anno*. No numeral `[lat:]`.

**Chunks on which the twin pass found nothing at all: NONE.** All three yielded at least
one marker or divergence, so no chunk in this batch is reportable as clean. The absence of
a clean chunk is itself the honest result of the pass.

**Pronoun-itacism check (ἡμεῖς/ὑμεῖς), the class the paired pilot flagged:** three sites —
`ῥύπος εἰδότες **ἡμεῖς**` (0000, Lat. *quarum conscii **nobis** sumus*), `ὁδὸν **ἡμῖν**
ὑποδείξῃ` (0001, Lat. *viam **nobis** ostenderet*), `τῶν πρὸ **ἡμῶν**` (0001, Lat. *e
majoribus*). **All agree across the columns.** No `[lat:]` in this class.

---

## 4. `[sic:]` — one fired, and why the third witness makes it safe

**0000 §3 — `θαυμαρτουγιῶν` for θαυματουργιῶν.** Calfa reads `καὶ τῶν πάλαι
**θαυμαρτουγιῶν** παραδόξων ἔκθεσίς τε καὶ διασάφησις ἐτελεῖτο`. **The scan's own Greek
column, independent of Calfa, reads the same letters** — `θαυμαρτουγιῶν` — in the same
place. Two independently-transmitted OCRs of the same plate agreeing on a **ρτ/τρ
metathesis** is not an OCR-confusion profile; it is what the plate prints. The Latin gives
the intended sense (*admiranda illa prodigia, quae olim perpetrata fuerant*), so the word
meant is θαυματουργιῶν, "wonder-workings."

Carried into the English untranslated, in italics, inside `[sic: …]` (Patterns 7, 10, 12):
"the setting forth and elucidation of the marvellous [sic: *θαυμαρτουγιῶν*] of old." The
conjecture lives here, not in the text.

**⚑ For the merge session:** this is the **first `[sic:]` of the PG paired pilots**, and
it is fired purely on scan-Greek/Calfa concurrence with no leaf render. If the merge
session judges that bar too low for a public claim about Migne's plate, the fallback is a
silent correction plus this crux — but note that the standing rule forbids attributing a
defect to the plate **from our files alone**, and two independent witnesses of the plate
are precisely what §4a says is no longer "our files alone." Recorded so the decision is
made deliberately.

---

## 5. `[ed:]` — one fired: the lost section head Δʹ

**0000, at the foot of Greek col. 0041.** Calfa runs `… ἡ πάναγνος, φημ, καὶ
φωτοειδεστάτη Θεοῦ νύμφη. [0044] νομίζω, διὰ τοῦτ᾽ ἔσχε τὴν πρόσρησιν ταύτην` — a column
break at which the sentence resumes with a bare `νομίζω` that has no subject and no
section number, in a text whose sections have run Αʹ Βʹ Γʹ.

**The scan settles it.** Its Greek column ends col. 0041 with

> Δ΄. Ἀλλὰ δὴ καὶ τὰ πρώην Ἅγια ἁγίων,

and the Latin twin's col. 0042 ends with **IV. Quinimo priora illa Sancta sanctorum
hanc** — the section number in both witnesses. Restored, the sentence construes
perfectly: *Ἀλλὰ δὴ καὶ τὰ πρώην Ἅγια ἁγίων, νομίζω, διὰ τοῦτ᾽ ἔσχε τὴν πρόσρησιν
ταύτην…*

This is **Pattern 13a clause 2** — a reader-visible structural unit (a division head)
lost from our source and recoverable from the plate — so it is restored **with** an
`[ed:]`, not silently. Without the marker the sermon would read as running from §3 to §5,
and nobody can miss what they cannot see was ever there.

**Recommended follow-up (not done here, since it changes stored Greek):** a
`data/calfa-patches/` entry restoring `Δʹ. Ἀλλὰ δὴ καὶ τὰ πρώην Ἅγια ἁγίων,` at the foot
of col. 0041. The ladder requires a plate check for a patch; the plate check is in hand
and cited above (two witnesses).

---

## 6. Silent OCR corrections — classes first, then per site

**Class 1 — the intrusive Κ, already attested seven times across three works in this
Calfa volume.** **Six more here**, all corrected silently: `Κεἶκε πέδαις` → `εἶκε πέδαις`
✱ (0000 @0048) · `ΚΖʹ` → `Ζʹ` (0000 @0045, §7 — see §7 below) · `καταβεβηΚκότες` →
`καταβεβηκότες` (0001) · `αἰτίαν Κὁμιλίαν` → `αἰτίαν ὁμιλίαν` (0001) · `τὸν Κἐμὸν Ἰησοῦν`
→ `τὸν ἐμὸν Ἰησοῦν` ✱ (0002) · `θεραπείας Κλλης` → `θεραπείας ἄλλης` ✱ (0002). A near
relative in the same class: `Χηρημάτων` → `ληρημάτων` ✱ (0000 @0048). The class now runs
to fourteen attested sites in this volume — worth a corpus note, not worth per-site
marking. (✱ = plate-verified against the scan's Greek column.)

**Class 2 — split and run-together type**, our source's not the plate's, therefore
corrected rather than carried: `τὸ ὕ, ος` → `τὸ ὕψος` ✱ (0000) · `δὲνκαθάπερ` → `δὲ
καθάπερ` (0000) · `ἐκεῖ. α` → `ἐκεῖνα` (0000) · `μεμόνην` → `με μόνην` (0001) ·
`προσιστα μένου` → `προσισταμένου` ✱ (0002) · `ἠλλά- ἔατο` → `ἠλλάξατο` ✱ (0002) ·
`ηΧξαλεκαὶ` → `ηὔξανε καὶ` ✱ (0002).

**Words lost mid-sentence, restored silently from the plate (Pattern 13a clause 1):**
**0000 §3**, `τοῦ θείου μᾶλλον ‹ἐκείνου τεμένους ἁγιαστικὴν ἕξιν ἢ κλῆσιν αὐχοῦν›` —
seven words dropped by Calfa at a line break, present in the scan's Greek column and
confirmed by the Latin (*nil aliud reperire erat quod … sanctificandi vi, aut sancti
appellatione gloriari posset*). Without them the clause has no predicate at all.
**0001 §12 tail**, the terminal full stop after `τῷ δεδωκότι` (the scan prints it; Calfa
runs straight into `ΙΓʹ`), restored.

**Per site, chunk 0000** (✱ = plate-verified): `τῆ παναχράντου` → `τῆς παναχράντου` ✱ ·
`ἐχθύων` → `ἰχθύων` ✱ · `παναμώμω` → `παναμώμῳ` ✱ · `Πν´ ὅτι` → `ἵν᾽ ὅτι` · `οὐδεν,` →
`οὐδέν,` ✱ · `τρόπαιᾳ` → `τρόπαια` ✱ · `ὁ χωρος` → `ὁ χῶρος` ✱ · `ἐκρύβη τα` → `ἐκρύβη
τε` ✱ · `Ἅγκα ἁίων` → `Ἅγια ἁγίων` ✱ · `φημ,` → `φημὶ,` ✱ · `ὰξίας` → `ἀξίας` ·
`οἰκουοήσοντα` → `οἰκήσοντα` · `πρὶν τοῦτα` → `πρὶν ταῦτα` · `τεχνητῳ` → `τεχνητῷ` ·
`τοόπον` → `τρόπον` · `προτέοων` → `προτέρων` · `οἷκητήριον` → `οἰκητήριον` · `τἰσεῖν` →
`εἰπεῖν` · `παρασυνεβᾶήθη` → `παρασυνεβλήθη` · `κτήοεσι` → `κτήνεσι` · `ἀκάγκῃ` →
`ἀνάγκῃ` · `νεών` → `νεὼν` · `τοὺς ἀθλους` → `τοὺς ἀΰλους` (the same ἀ-ΰ class as Sermon
I's `ἀθλου δημιουργίας` → `ἀΰλου`) · `προδεδέόμηται` → `προδεδόμηται` · `ἐνἀοτάτοις` →
`ἐνδοτάτοις` · `εἶκεν ἄν` → `εἶχεν ἄν` · `ὁ σώςων` → `ὁ σῴζων` · `χοῖκῶν` → `χοϊκῶν` ·
`ἀῖγέλους` → `ἀγγέλους` ✱ (plate-verified from Ballerini's note (54), which quotes the
Greek) · `σωτήριός εε` → `σωτήριός τε` ✱ · `γητνων` → `γηΐνων` ✱ · `τοῦ χυοὸς` → `τοῦ
χοὸς` ✱ · `ὡς εἰπεῖ` → `ὡς εἰπεῖν` ✱.

**Per site, chunk 0001** (all ✱ unless noted, the scan covering this chunk entire): `ἡς` →
`ἧς` · `Ἀγα` → `Ἅγια` · `ὁδὺν` → `ὁδὸν` · `ἑνεκαίνισεν` → `ἐνεκαίνισεν` · `σεμνῳ` →
`σεμνῷ` · `τ´ ἐσφραγισμένον` → `τὸ ἐσφραγισμένον` · `Ἃγμα ἀγίων` → `Ἅγια ἁγίων` ·
`οἱκείοις` → `οἰκείοις` · `ἰσραρχῶν` → `ἱεραρχῶν` · `οὐδ᾽ ἂσον` → `οὐδ᾽ ὅσον` ·
`ἐπίκεινα` → `ἐπέκεινα` · `θεαυγέστατον` sound · `ἡγήοασθαι` → `ἡγήσασθαι` · `θαυμάσισς`
→ `θαυμάσιος` · `δικαιοτάτον` → `δικαιότατον` · `οἴαν` → `οἵαν` · `κἀκεῖνεν` →
`κἀκεῖθεν` · `λγάπησε` → `ἠγάπησε` · `τούτον` → `τούτων` · `Ῥδει γὰρ` → `Ἔδει γὰρ` ·
`ἄκοον` → `ἄκρον` · `ἧς τὲ σεμνὸν` → `ἧς τὸ σεμνὸν` · `ταῖδα παοὰ` → `παῖδα παρὰ` ·
`συμπεριειληκμένου` → `συμπεριειλημμένου` · `μεγαλείον ἐτοίησεν` → `μεγαλεῖα ἐποίησεν` ·
`εὖ ἔον` → `εὖ ἔχον` · `συνέὃραμεν` → `συνέδραμεν` · `Ἰνʹ` → `ΙΔʹ` (§7) · `εόπαις` →
`θεόπαις` · `περαναι` → `περᾶναι` · `ὕαύαστα.` → `θαύματα,` · `λουτοὸν. ὧ` → `λουτρόν,
ᾧ` · `τιτθης` → `τιτθῆς` · `τὰ δυτα` → `τὰ ἄδυτα` · `ἔ,η` → `ἔφη` · `δλης φρικτῇς` →
`ὅλης φρικτῆς` · `οἰκητήοιον` → `οἰκητήριον` · `οἴὔκοι` → `οἴκοι` · `κακοπαθεῖοθαι` →
`κακοπαθεῖσθαι`.

**Per site, chunk 0002:** `δʹ ἂν` → `δ᾽ ἂν` · `διὰ σαῦτα` → `διὰ ταῦτα` ✱ ·
`πεπουήκασι` → `πεποιήκασι` ✱ · `βασιλίβος` → `βασιλίδος` ✱ · `ἱἔμελλε` → `ἔμελλε` ·
`ἐπάσαντες` → `ἐπᾴσαντες` · `πα αστῆναι` → `παραστῆναι` ✱ · `ᾗεσαν` → `ᾔεσαν` ·
`προειεῆσθαι` → `προειρῆσθαι` ✱ · `πυραὸν` → `πυρσὸν` ✱ · `ὁμνούσας` → `ὑμνούσας` ·
`οίονεί` → `οἱονεί` · `σκευος` → `σκεῦος` ✱ · `ἐαυτοῦ` → `ἑαυτοῦ` · `καρὰν` → `χαρὰν` ✱ ·
`ΠΗʹ` → `ΙΗʹ` (§7) · `Εὐλόμένη` → `Εὐλογημένη` ✱ · `Ελρήνη` → `Εἰρήνη` ✱ · `ἣνὁ βλέπων`
→ `ἣν ὁ βλέπων` · `θόγατερ` → `θύγατερ` ✱ · `θψούμενον` → `ὑψούμενον` ✱ · `τοῦθχ` →
`τοῦθ᾽` ✱ · `ἣτοίμασται` → `ἡτοίμασται` ✱ · `ἀποκάλιψιν` → `ἀποκάλυψιν` ✱ · `Ἡσατου` →
`Ἡσαΐου` ✱ · `ἐπιθυμνσει` → `ἐπιθυμήσει` ✱ · `ἡρετίσατο` → `ᾑρετίσατο` ✱ · `νομίνεται` →
`νομίζεται` ✱ · `Ἵι τοίνυν` → `Ἴθι τοίνυν` ✱ · `λαμπαλουχοῦσαι` → `λαμπαδουχοῦσαι` ✱ ·
`ψήφῳ συνάδειν` → `ψήφῳ συνᾴδειν` · `εἰπεν ἀν` → `εἶπεν ἄν` ✱ · `Δαβδ` → `Δαβίδ` ✱ ·
`εἰφραίνοντα` → `εὐφραίνοντα` ✱ · `Θεός μου εἰ σύ` → `Θεός μου εἶ σύ` ✱ · `ἰερου` →
`ἱεροῦ` ✱ · `ἐστίας` → `ἑστίας` · `ἴτη` → `ἔτη` ✱ · `παιλίον` → `παιδίον` ✱ ·
`πιεύματι` → `πνεύματι` ✱ · `πληΕούμενον σοφίπς` → `πληρούμενον σοφίας` ✱ · `Πν ἐπ´ αὐτῷ`
→ `ἦν ἐπ᾽ αὐτῷ` ✱. Also `εἴρηται,,` (double comma, in **both** Calfa and the scan)
normalized to one — OCR noise on both sides, not a plate mark.

---

## 7. Section numerals — the sequence, and ONE UNRESOLVED

Rendered as arabic + period, per the anchor. Sermon II's sections run continuously from
Sermon I's, restarting at Αʹ.

| Chunk | Calfa prints | Rendered | Evidence |
|---|---|---|---|
| 0000 | Αʹ, Βʹ, Γʹ | 1., 2., 3. | Latin I, II, III; scan concurs. |
| 0000 | *(nothing — lost at the foot of col. 0041)* | **4.** | Scan prints `Δ΄.`; Latin col. 0042 prints **IV.** Restored with `[ed:]` — see §5. |
| 0000 | Εʹ, ϛʹ | 5., 6. | Sequence; no Latin (leaf gap) but the scan covers §5's position at col. 0041's foot only. Sound as printed. |
| 0000 | **ΚΖʹ** | **7.** | Intrusive-Κ class (§6): `ΚΖʹ` → `Ζʹ`. **No third witness and no Latin twin here** (Greek col. 0045 is in the leaf gap), so this rests on the class plus the sequence. |
| 0001 | Θʹ | 9. | **Latin IX** — the anchor point for the whole count. |
| 0001 | Ιʹ, ΙΑʹ, ΙΒʹ, ΙΓʹ | 10.–13. | Latin X–XIII; scan concurs (`I.`, `ΙΑ’`, `IB.`, `IΓ’`). |
| 0001 | **Ἰνʹ** | **14.** | Latin **XIV**; scan `IΔ’`. Calfa's ν is a misread of Δ. Corrected silently, twice-verified. |
| 0001 | ΙΕʹ | 15. | Latin XV; scan `IE’`. |
| 0002 | Ιϛʹ, Ιζʹ | 16., 17. | Latin XVI, XVII; scan concurs. |
| 0002 | **ΠΗʹ** | **18.** | Latin **XVIII**; scan `1Η’`. Calfa's Π is a misread of Ι — **the same Π↔Ι class as Sermon I's `Πʹ` → `ΙΓʹ` at chunk 0002**. Corrected silently, plate-verified. |
| 0002 | ΙΘʹ, Κʹ | 19., 20. | Latin XIX, XX; scan concurs. |

**⚠ UNRESOLVED, and left deliberately unmarked — the missing Ηʹ (8).** The Latin's **IX**
at col. 0047 fixes that **eight** sections precede chunk 0001. Our Greek yields only seven
marks (1–7). Section **8 is absent from every witness we hold**: Calfa prints no Ηʹ; the
scan has no leaf for Greek col. 0045, where it would fall; the Latin has no leaf for its
twin col. 0046, where **VIII** would fall — and the Latin's col. 0047, which we do have,
runs from the tail of §7 straight to **IX** with no VIII in it. So this is a **ladder row 4
case: both witnesses fail together at the same spot, and the arbitrating leaf is the one
the scan lacks.** Per the leaf-gap rule the candidate is logged here and **nothing is
marked in the English**: no `[ed:]`, because we cannot demonstrate a loss as against
Migne's own numbering skipping, and no restoration, because there is nothing to restore
from. The likeliest position, on sense, is at `Ὥσπερ γὰρ οὐ κατὰ τοὺς λοιποὺς τῶν
ἀνθρώπων…` (0000 @0045). **If the leaf for Calfa p. 30 is ever obtained, this is the first
thing to check** — and it is a cheaper check than it looks, because the same leaf would
also settle §7's `ΚΖʹ`.

---

## 8. `[lat:]` — NONE FIRED, and the candidates weighed

**Zero `[lat:]` markers in this batch.** Stated positively because it bears on pilot gate
question 3 (how many divergences per work, and does Allatius's freedom generate spam).
Across ~3,000 Greek words the Latin column and the Greek column **assert no different
fact anywhere** — no numeral, name, negation or polarity divergence, and no added or
missing clause that changes what a reader takes away. Candidates weighed and rejected:

- **0002 §16, Luke 2:22 `παραστῆναι Κυρίῳ` vs *ut sisterent eum Domino*.** The strongest
  candidate: the Latin has the transitive of the received text where the Greek prints the
  intransitive. Rejected as a difference of voice, not of fact — §2 above.
- **0001 §10, `ὁ ἅπαξ … εἰσιὼν ἱεράρχης` vs *qui **semel per annum** … pedem inferebat*.**
  The Latin adds "per annum." Rejected: the Greek itself supplies `τοῦ ἐνιαυτοῦ ἅπαξ` two
  chunks later (0002 §18), so Allatius is filling from the same text, not asserting
  otherwise.
- **0002, `τὸ τοῦ **ἔτους** δίκαιον μέτρον` vs *justam **temporis** mensuram*.** Rejected:
  Allatius smooths an odd genitive; both columns then gloss the measure as *triennium* /
  `ἡ τριετία`, so the fact is identical.
- **0002 §20, Luke 2:40 `ἐπ᾽ αὐτῷ` vs *in illa*.** The Latin feminizes the neuter.
  Rejected: same referent, and it is the Latin conforming its pronoun to the application
  the Greek makes in the same breath.
- **0000 §8, `οὐκ ἀσθενῆ … ἔλεγχον` vs *invictum … argumentum*.** Litotes flattened to a
  positive. Textbook Allatius freedom; the English keeps the litotes ("no feeble
  refutation").

**Free renderings named so a later pass does not re-raise them:** *speciosae hujus
puellae* for `καλλίπαιδος` (the same flattening the anchor caught, and the reason
"fair-childed" is fixed) · *expressissima Dei imago speculum…* collapsing two of the
seven θεο- compounds (§1) · *ineffabili modo* for `καινότατα` · *librum legendi gnaro*
for `εἰς πεῖραν ἥκοντι γραμμάτων` · *evidentissime proclamabat* for
`διακωδωνοῦντος` · *aegre avelli se sinunt* for `ὑπεριδεῖν ἔχουσι`. **Scripture in the
Latin column conformed to the Vulgate is convention, not divergence**, and fires nothing:
*plebis **tuae** Israel* (Luke 2:32) is the worked instance here — see §2 no. 4.

---

## 9. Construal cruces — printed reading kept, conjecture here

- **0000 @0045 — the unopened bracket.** Calfa prints `… τὴν δίαιταν ἔσχεν [ἄ]γγελος γὰρ
  ἦν οὐρανόθεν λειτουργῶν τῇ Παρθένῳ τὴν ἀπόῤῥητον ἐκείνην τροφήν**]**` — a **closing
  bracket with no opening bracket**. Migne plainly sets the clause as a parenthesis and
  our source has lost the `[`. **Not supplied** (Pattern 8: never supply a mark, and the
  anchor's unclosed-guillemet precedent at Sermon I 0001 rules the mirror case the same
  way); the English carries the closing bracket alone, at the same point. **This column is
  in the leaf gap**, so neither the scan nor the Latin can arbitrate, and a leaf render
  would settle it. Flagged for the merge session as the one place in the batch where a
  reader may take a source defect for ours.
- **0000 @0045 — `τὸν ὑπὲρ νας ἄνθρωπον`.** `νας` is not a word. Read `νοῦν` ("the human
  being beyond understanding"), which the parallel `τὸ καινὸν δημιούργημα τοῦτο` in the
  same clause supports. **Calfa-only column**: no Latin, no scan. The letter is
  unresolved; the sense is not in doubt.
- **0000 @0045 — `οὕτω καὶ παρὰ τοὺς λοιποὺς ἀγγελικὴν εἶχεν ἄν τις ἑστίαν … εἴγε ἐνῆν,
  ὁ σῴζων ἠνάγκαζε λόγος ἀπολαβεῖν`.** The syntax does not resolve cleanly: `εἶχεν ἄν
  τις … ἀπολαβεῖν` wants an infinitive complement, and `ὁ σῴζων … λόγος ἠνάγκαζε` sits in
  asyndeton. Rendered as closely as the printed words allow, with an em-dash for the
  break, rather than smoothed into a single period. **Calfa-only column**; not repaired.
- **0000 @0048 — `οὗπερ ἥκιστα πέπτη`.** `πέπτη` is not a word — **and Migne says so
  himself**. His note (98) on the facing column reads *Ita codex, ut videtur, pro ἔπτη*
  ("so the codex, it seems, for ἔπτη"). The Latin renders accordingly (*E quo quidem limo
  **haudquaquam evolavit***). **The plate has already adjudicated it**, so no `[sic:]` of
  ours is stacked on top (Pattern 12's "where Migne prints his own note, do not add
  ours"); the English reads "from which she by no means flew away," and the reading is
  recorded here.
- **0000 @0045 — `μόνον δικαίως ὡς ἑαυτοῦ **δεσπότην**`, masculine, of the Virgin
  (`τὴν θεόνυμφον … βασιλίδα`).** Pattern 9: Greek grammatical gender has no English
  exponent here, and the anchor already fixes Δεσπότης = "the Master." Rendered "as its
  own master." No emendation to make or undo; logged so a later sweep does not churn it.
- **0002 §16 — `τὸ μὲν τὸν πατέρα, τὸ δὲ διὰ τὴν μητέρα`.** The first limb lacks the
  preposition the second and third have (`διά`). **Both Calfa and the scan print it so**
  — two-witness concurrence, ladder row 3, therefore the plate's ellipsis, not our file's
  loss. The Latin repairs it (*illi quidem intuitu patris*). **Rendered with the ellipsis
  kept** — "these for the father, these on account of the mother" — under Pattern 7. Not a
  `[lat:]`: Allatius is supplying syntax, not a different fact.
- **0002 §16 — `φθάνει τὰ Ἱεροσόλυμα … προπλέξαντες`.** Singular verb with neuter plural
  subject, then **masculine plural** participles, and the same anacoluthon recurs at §16's
  `ὁ νοητὸς … διάκοσμος … **δεικνύντες**`. Pattern 9: no English exponent, no emendation.
  Rendered with the sense the participles carry; logged.
- **0001 §13 — `ἀνθέων πᾶσαν εὐωδεστάτων κάτω τεθεὶς πέφηνε χάριν`.** `πέφηνε` with a
  bare accusative `χάριν` will not construe as a comparison without supplying a
  preposition. Rendered "has appeared beyond all the grace of the most fragrant flowers,"
  which is the least that the printed words allow; the Latin has the participial
  *exsuperans*, i.e. it repairs the construction. The choice is recorded rather than made
  silently.
- **0001 §12 / §13 — `οὔτε … καί`, twice.** The broken correlative at `οὔτ᾽ ἦν ἱκανὸς …
  καὶ εἶχεν` (§9) and `οἵαν οὔτε Θεὸς παρορᾷ, καὶ ὡς ὀσμὴν … ὁρᾷ` (§12) is the same class
  the anchor logged at Sermon I 0002 (Ῥουβίμ). **Kept broken in the English** ("neither
  was fit … and was otherwise able"); the Latin repairs both.
- **0000 §1 — `ποῦ γὰρ ἄνθρωπος, ὅς, οὐδ᾽ εἰ μίαν βεβιωκὼς ἡμέραν εἴη … προσομιλεῖν ἄν
  τοτε … φανείη;`** `ἄν τοτε` (so in **both** Calfa and the scan) read as `ἄν ποτε`. The
  underlying allusion is Job 14:4 sec. LXX, which Migne cites on the facing column;
  it is an allusion, not a quotation, so no `[var:]`.

---

## 10. Ratio and shape

Greek 1024 / 1011 / 1022 words → English 1610 / 1555 / 1504, i.e. **1.57× · 1.54× ·
1.47×**. Tracking the anchor's 1.49× homily ratio (chronicle 1.25 · lemma-gloss 1.35 ·
dialogue 1.37 · homily 1.49); the slightly high 0000 is the epithet pile-ups and the
`[ed:]`/`[sic:]` prose, neither of which compresses.

`verify-english-pg.mjs isidore-glabas-sermo-2` → **5 chunks, anchors + frontmatter +
ratios + dedupe clean.** Column anchors reproduce 1:1 in order: 0000 five
(`[0040] [0041] [0044] [0045] [0048]`), 0001 four (`[0049] [0052] [0053] [0056]`), 0002
three (`[0057] [0060] [0061]`).

Marker totals for the batch: **1 `[sic:]` · 1 `[ed:]` · 5 `[var:]` · 0 `[lat:]` · 0
`[d:]` · 0 `[n:]`.**

---

## 11. For the merge session to adjudicate

1. **`language: "grc"` in the English frontmatter** — anchor-conformant, prompt-divergent.
   One-line sweep either way, across both sermons together.
2. **The `[sic:]` at 0000 §3** (`θαυμαρτουγιῶν`) — first PG `[sic:]` fired on scan/Calfa
   concurrence without a leaf render. §4 states the case both ways.
3. **The missing section Ηʹ** — unmarked by design, ladder row 4. §7.
4. **The unopened bracket at 0000 @0045** — carried asymmetric under Pattern 8, in a
   column with no third witness. §9.
5. **A `data/calfa-patches/` entry** restoring `Δʹ. Ἀλλὰ δὴ καὶ τὰ πρώην Ἅγια ἁγίων,` at
   col. 0041, which would let the `[ed:]` at §5 be withdrawn in the same commit
   (Pattern 13's own rule: the note exists only as long as the hole does). Plate check is
   in hand.
6. **Epithet-table merge** — §1 extends, never redefines. The παναμώμητος / πανάμωμος /
   ἀμώμητος / ἄμωμος quartet is the entry most at risk of being collapsed by a later
   agent working from the Latin, which has only *immaculata* / *sine macula*.
