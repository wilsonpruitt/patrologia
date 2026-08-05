# Batch 2 Opus adjudication — leaves 855–864

Adjudicated against the **wide** crops (`raw/pg088/batch2-wide/segs/`), the full
column images, and — where the crops clip — pages rendered fresh from
`raw/pg088/088.pdf` (leaf N = pdf page N+1). Migne's facing Latin was used as an
independent witness on four items and settled three of them.

75 items. **A 29 · B 12 · NEITHER 34 (16 substantive + 18 encoding-class) · UNRESOLVED 0.**

---

## Method notes that bear on the whole batch

**κ vs χ is decidable, and neither pass was decoding it reliably.** In this
Didot Greek, **κ is a clean X sitting on the baseline; χ is a larger X whose
lower-left arm descends *below* the baseline.** The distinction is invisible at
reading zoom and both passes guessed at it from the expected word. It is
recoverable by measuring the glyph's ink extent below the line's baseline
(row-profile of the crop). Verified against known κ (`ἐκβαλεῖν`, `κρότον`,
`ἀκηδείας`) and known χ (`χαρίσεται`) on the same plates. Every κ/χ verdict below
was decided this way, not by eye.

**Migne sets some lines wider than the column measure, and the WIDE crops still
clip them.** Confirmed on leaf856 (one line), leaf861 (a whole passage set
full-width across the page after the Latin column runs out). Both A and B lost
text to this, and it is the direct cause of five "disagreements" that are really
alignment artifacts. Any leaf where a verdict below says "line overruns" needs
its text re-pulled from the full page, not from a column crop.

**Grave-before-comma confirmed again:** `τὸν Θεὸν,` (leaf859), `καλὸν,`
(leaf863), `αὐτὸν,` (leaf858). Not defects.

**Encoding-class items (18):** `μετ'`/`μετ᾽`, `δι'`/`δι᾽`, `ἀλλ'`/`ἀλλ᾽`,
`Γ΄.`/`Γʹ.` etc. The plate prints ONE mark; A and B differ only in which Unicode
codepoint they used to depict it. These are not plate differences and must be
normalised by project convention, not adjudicated. Listed per leaf below as
**NEITHER (encoding)** without individual image work.

---

## leaf855
- `A=παράβα- B=παραδο-` → **READING: `παράβα-`** — **A**. seg1 last line / seg2 boundary (line is split across the seg cut; read from the full column at y≈1000). Plate: `…ἐκπεσοῦσα ἡ ψυχὴ ἀπὸ τῆς ἐντολῆς εἰς τὴν παράβα-` / `σιν, παρεδόθη`. B was pulled to `παραδο-` by the `παρεδόθη` on the next line.
- `A=κεχορεσμένου· B=κεκορεσμένου·` → **READING: `κεχορεσμένου·`** — **A**. seg2, `…καὶ ἄλλως τοῦ ___ · ὁμοίως`. Baseline test: glyph 1 stops at baseline (κ), glyph 3 descends 12 px below it (χ). The two glyphs are visibly different, so the word cannot be `κεκορεσμένου`.
  `CRUX:` plate prints `κεχορεσμένου` for `κεκορεσμένου` (perf. pass. ptcp. of κορέννυμι); Latin renders the sense (*saturi*, cf. the surrounding *aliter … aliter* series). Type-case χ for κ.
- `A=Νύαγριος B=Εὐάγριος` → **READING: `Εὐάγριος`** — **B**. seg3, `Διὸ ὅτε ἐπολεμήθη ___ ὑπὸ τῆς βλασφημίας`. Capital Ε heavily inked; υ carries a smooth breathing. Facing Latin prints **Evagrius** on the same line-band.

## leaf856
- `A=Βα- B=ὁ` → **READING: `Βασίλειος, ὁ κόσμος οὗτος.`** — **NEITHER**. seg3, last body line before the `Β'.` paragraph. **This line is set wider than the column and is clipped by BOTH the narrow and the wide crop.** Recovered from pdf p857 at 300 dpi: `…Ἡ ὁδός ἐστιν, ὡς λέγει ὁ ἅγιος Βασίλειος, ὁ κόσμος οὗτος.` A caught the truncated `Βα-`; B caught only the trailing `ὁ`. Nothing downstream could have detected this loss.

## leaf857
- `ONLY IN A: νῆφον·` → **READING: `νῆψον·`** — **NEITHER**. seg1 last line. The word IS on the plate (so A was right to have it); the letter is ψ, not φ. Compared against ψ in `Νήψωμεν` and φ in `φροντίσωμεν` seven lines above: the disputed glyph has ψ's open cup, not φ's closed oval bowl.
- `A=οὐχ B=οὐκ` → **READING: `οὐκ`** — **B**. seg1, `ὡς μηδαμινῶν· ___ εἰσὶ μικρά, νομή`. The glyph is identical to the κ of `μικρά` two words later; clean X, no descender.
- `A=ἄθλιε· B=νῆψον·` → **READING: `ἄθλιε· νῆψον·`** — **NEITHER (both printed)**. seg1 last line: `καὶ λέγων αὐτῷ, Βλέπε τί ποιεῖς, ἄθλιε· νῆψον· Ἴσθι`. A dropped nothing here; B dropped `ἄθλιε·`. Not a substitution — a deletion in B.
- `A=οὗ B=ᾧ` → **READING: `ᾗ`** — **NEITHER**. seg2 first line, in the italic Matt. 5:25 quotation: `…τῷ ἀντιδίκῳ σου, ἕως ᾗ ἐν τῇ ὁδῷ μετ' αὐτοῦ`. Two vertical strokes with iota subscript = eta, not omega (compare the `ὁδῷ` five glyphs later, which is visibly rounder and wider). **The same reading is printed independently in the first citation of the verse on leaf856 seg3.**
  `CRUX:` `ἕως ᾗ` where the NT prints `ἕως ὅτου εἶ`. Two occurrences on adjacent plates, so not a single broken sort. This is exactly the scriptural divergence the prompt says is the scholarly payload — do not repair it.
- `A=μετ' B=μετ᾽` → **NEITHER (encoding)**
- `A=Γ΄. B=Γʹ.` → **NEITHER (encoding)**
- `A=ἀλλ' B=ἀλλ᾽` → **NEITHER (encoding)**
- `A=ἀνέθη B=ἀνέβη` → **READING: `ἀνέβη`** — **B**. seg3 first line: `χῆς, ἀνέβη λογισμὸς ἐμπαθὴς εἰς τὴν καρδίαν αὐτοῦ,`. Rounded bowl with ascender = β, unambiguous at zoom.
- `A=κλήσσει B=πλήσσει` → **READING: `πλήσσει`** — **B**. seg3: `…ὅτι θλίβει ἢ πλήσσει τὸν πλησίον`. Clear π.
- `A=καρβηχόριον, B=⟨?χαρδηχόριον⟩,` → **READING: `κερβηκάριον,`** — **NEITHER**. seg4 last line (faint, low-inked): κ-ε-ρ-β-η-κ-ά-ρ-ι-ο-ν. Both X-glyphs sit on the baseline, so both are κ. **Confirmed by the Latin**, which lags one page: p859 Latin col. reads *contentus esse quis possit unico **cervicali***. κερβικάριον < Lat. *cervical*, "pillow" — and the context is bedding (`ἐν στρώματι`).
  `CRUX:` plate spells it `κερβηκάριον` (η for ι in the loanword). Record as printed.

## leaf858
- `ONLY IN A: οὐδ'` → **A** — present. seg2: `…καταπονῆσαι αὐτὸν, οὐδ' ἐνιδήποτε πράγματι.` B dropped it.
- `ONLY IN A: ἐνιδήποτε` → **A** — present, same line, set as one word.
  `CRUX:` printed solid as `ἐνιδήποτε` for `ἐν ᾧ δήποτε πράγματι`. Keep the printed word-division.
- `A=ἔσθ' B=ἔσθ᾽` → **NEITHER (encoding)**
- `A=ἀρκε- B=ἀρχε-` → **READING: `ἀρκε-`** — **A**. seg1: `Δύναταί τις ἀρκε-` / `σθῆναι ἑνὶ κεντωνίῳ`. Baseline test: the glyph stops at the baseline, identical to the κ of `ἀκηδείας` seven words earlier on the same line. **Latin confirms**: p859 *Potest item alicui **satis esse** culcitra una*.
- `A=λσνάτον, B=⟨?ἱμάτιον⟩,` → **READING: `λονάτον,`** — **NEITHER**. seg1: `…καὶ ζητεῖ λονάτον, ἴσως καὶ φιλονεικεῖ`. Legible at zoom: λ-ο-ν-ά-τ-ο-ν. **Latin confirms the referent**: p859 *satis esse culcitra una, et **tapetem** quaerit* — a rug/coverlet, not a garment. B's `ἱμάτιον` was a guess from context and is wrong.
  `CRUX:` `λονάτον`, a Latin loan (cf. *lanatum*), rendered *tapes* by Migne's translator. Rare enough that it will need a glossary note.
- `A=αὐτὸν, B=δήποτε` → **READING: `αὐτὸν, οὐδ' ἐνιδήποτε`** — **A** (alignment artifact). Both strings are on the plate; B lost the two words between them.
- `A=Δ΄. B=Δʹ.` · `A=Α΄. B=Αʹ.` · `A=δι' B=δι᾽` · `A=ἀλλ', B=ἀλλ᾽,` → **NEITHER (encoding)** ×4

**Note (layout):** leaf858 seg2 has three lines of Latin sitting mid-column below `…τῶν Πατέρων ἡμῶν.` and above the `ΔΙΔΑΣΚΑΛΙΑ Δ'.` heading. Correctly excluded by both passes here, but it confirms the bleed is common on these leaves.

## leaf859
- `ONLY IN A: κατ'` → **A** — present. seg2: `ὡς εἴπομεν, τὸν Θεὸν, κατ' ἐκεῖνον δῆλον ὅτι…`
- `ONLY IN A: γε` → **A** — present. seg3: `…τὸν τέλειον φόβον ἔλε-` / `γε τὸν τῶν ἁγίων.`
- `A=Β΄. B=Βʹ.` · `δι'`×2 · `παρ'` → **NEITHER (encoding)** ×4
- `A=Θεὸν, B=κατ᾽` → **READING: `τὸν Θεὸν, κατ' ἐκεῖνον`** — **A** (alignment artifact; both printed). Grave before the comma — Migne convention, not a defect.
- `A=¹¹⁻¹² B=⟨?ια´-ιβ´⟩·` → **READING: superscript arabic `11-12` followed by a period** — **A**. seg2: `…ὁ ἅγιος Ἀν-` / `τώνιος ¹¹⁻¹²· «Ἐγὼ οὐκ ἔτι φοβοῦμαι τὸν Θεόν.»`. Migne's footnote references in this column are **arabic superscripts**, not Greek numerals. B's Greek-numeral reconstruction is a systematic error (repeats on leaf860).
- `A=ἔλε- B=βε` → **READING: `ἔλε-` / `γε`** — **A**. seg3, `δῆλον ὅτι τὸν τέλειον φόβον ἔλε-γε τὸν τῶν ἁγίων.`
- `ἀλλ'`×2 · `Γ΄.` · `μεθ'` → **NEITHER (encoding)** ×4

## leaf860
- `A=¹³ B=⟨?ιγ´⟩` → **READING: superscript arabic `13`** — **A**. seg1 line 2, after `ἡ γάνωσις`.
- `A=¹⁴ B=⟨?ιδ´⟩` → **READING: superscript arabic `14`** — **A**. seg1, after `χερονίζων`. Same class as leaf859; B's Greek-numeral rendering is wrong in all three instances.
- `A=ἀπ' B=ἀπ᾽` · `A=δι' B=δι᾽` → **NEITHER (encoding)** ×2
- `A=προσκαλέσασθαι B=πρ[ο]σκαλέσασθαι` → **READING: `προ[σ]καλέσασθαι`** — **NEITHER**. seg3 first line, at the extreme left edge of the column. **The plate prints editorial square brackets, and they enclose the SIGMA, not the omicron.** A dropped the brackets; B kept them but around the wrong letter. Migne's own brackets are apparatus and must survive into the text.

## leaf861
- `ONLY IN A: ύθως` → **NEITHER** — a clipped fragment of `ἀκολούθως`, which B has right. Caused by the full-width setting (below).
- `ONLY IN A: ς` → **NEITHER** — a clipped fragment of `τελείας` (seg3 line 2).
- `A=ὑπὸ B=ἀκολούθως` → **READING: both printed** — **NEITHER (alignment artifact)**. After `…ὁδηγούμενος ὑπὸ` the Latin column ends and **Migne switches to full-width setting across the page**; both crops cut off the left half of every full-width line. Recovered from pdf p862: `…φυσικῶς λοιπὸν ἐνεργεῖ τὸ ἀγαθὸν, ὁδηγούμενος ὑπὸ` / `τῶν ἁγίων. Ταῦτα εἰπὼν πάνυ καλῶς καὶ ἀκολούθως ἐπιφέρει τὸ, Ζήτησον εἰρήνην καὶ δίωξον αὐ-` / `τήν· καὶ οὐκ εἶπεν, ζήτησον, μόνον, ἀλλὰ δρομαίως καταδίωξον, ἵνα καταλάβῃς αὐτήν.` **This is the source of the earlier `εὐθέως` failure on this leaf** — the fragment that invited a guess exists because the crop, not the plate, is short.
- `A=ς B=δρομαίως` → **READING: `δρομαίως`** — **B**. Same full-width line as above.
- `A=θλίψεως. B=θλίψεως,` → **READING: `θλίψεως.`** — **A**. seg2: `…ἀλλὰ μετὰ πολλῆς θλίψεως. μετὰ πολλῆς συντριβῆς.` Unambiguous period at zoom.
  `CRUX:` the plate follows the full stop with a lowercase `μετὰ`. Printed as is.
- `A=τελεία- B=τελείας` → **READING: `τελείας`** — **B**. seg3 line 2 ends `καταδιώκων· τελείας` — a final sigma, not a hyphen.
- `A=τὴν B=τὸν` → **READING: `τὸν`** — **B**. seg3: `εἰ μὴ ὁ ἔχων αὐτῆς πεῖραν; Τότε καὶ` / `τὸν τέλειον φόβον ὁ τοιοῦτος γνωρίζει`.
- `A=αθεῖν B=μαθεῖν` → **READING: `μαθεῖν`** — **B**. Full-width line at the foot of seg3; A's fragment is the crop's left cut again.
- `A=οῦ B=τοῦ` → **READING: `τοῦ`** — **B**. Same full-width band: `…ὁ φόβος τοῦ Θεοῦ, θέ-` / `…ἀπὸ τοῦ φόβου τοῦ Θεοῦ.`

## leaf862
- `ONLY IN A: [LATIN, mid-column, excluded — see LATIN-EXCLUDED below]` (7 tokens) → **A — correct, and materially important**. Verified on seg4: two lines of Latin (`hit : qua malitia nulla gravior est aut perniciosior, ut scilicet appetas.`) sit **inside the Greek column**, between `…τὸν πλησίον βλάπτειν.` and the `Ζ'.` paragraph. A flagged and excluded it exactly as the prompt requires. **B neither transcribed nor reported it** — meaning B's silence here is indistinguishable from B having correctly excluded it, which is precisely why the report line matters.
- `A=ἰὸν B=τὸν` → **READING: `ἰὸν`** — **A**. seg4 line 2: `βάλλων εἰς τὴν καρδίαν` / `αὐτοῦ ἰὸν πονηρόν.` Iota with smooth breathing, no tau crossbar. Sense (`venom`) and the facing Latin agree.

## leaf863
- `ONLY IN A: νομίαν` → **NEITHER** — not on the plate. seg1/seg2 boundary reads `ἢ τῷ ἀββᾷ πρὸς τὴν δύνα-` / `μιν τοῦ σφάλματος`. A read `οἰκο-/νομίαν` for `δύνα-/μιν`.
- `ONLY IN A: διόρ-` and `ONLY IN A: θωσιν` → **NEITHER** — the word is on the plate but **not hyphenated**: seg3 line 3 prints `καὶ γενέσθαι διόρθωσιν, οὐκ οἶδα.` A's line-break is spurious.
- `ONLY IN A: ἐάν` → **A** — present, seg4 last line.
- `A=ἀββᾷ B=ἀββᾷ,` → **READING: `ἀββᾷ`** — **A**. No comma on the plate: `ἢ τῷ ἀββᾷ πρὸς τὴν δύνα-`.
- `A=οἰκο- B=μιν` → **READING: `δύνα-` / `μιν`** — **B** (B has the true second half; A's first half is wrong).
- `A=μοι B=μου` → **READING: `μου`** — **B**. seg2 last line: `Ἡ μὲν συνείδησίς μου μαρτυρεῖ μου ὅτι…`
- `A=διὰ B=σιν` → **READING: `διὰ ὄρθω-` / `σιν`** — **NEITHER (both printed)**. Glyph comparison at 10×: the letter after `διὰ` is an **omicron with acute**, matching the `ὄ` of `ὄντως` (seg2) and NOT matching the δ of the `διὰ` immediately preceding it (δ's ascender is a thin left-curling hook; this is a solid flat-topped accent bar over a closed bowl).
  `CRUX:` the plate prints `διὰ ὄρθωσιν` here where the *same column* prints `διόρθωσιν` twice (seg2, seg3). Do not conform it.
- `A=τις B=ποτε` → **READING: `τίς ποτε`** — **NEITHER (both printed)**. seg2 last line: `ἀλλ' αἰσθάνομαι ὅτι ἔσωθέν τίς ποτε…`
- `A=εἴτε B=εἴτα` → **READING: `εἴτε`** — **A**. seg3 has the pair: `Εἴτε ἐπειδὴ ἔσχον… οὐκ οἶδα· εἴτε συκοφαντία ἐστὶ…` Both are ε.
- `A=εὔκνιστοι· B=εὔχνιστοι·` → **READING: `εὔκνιστοι·`** — **A**. seg4: `μηδὲ ἔσεσθε εὔκνιστοι·`. Baseline test: the glyph terminates at the baseline (3258), same row as the adjacent ν; no descender ⇒ κ. Corroborated by `κνίζεται` two lines below.
- `A=καλόν, B=ἐὰν` → **READING: `καλὸν, ἐάν`** — **NEITHER**. seg4 last line: `αὐτοῦ. Ὄντως καλὸν, ἐάν τις ποιῇ πρᾶγμα, καὶ`. Both words printed; A additionally has the accent wrong — the plate has a **grave** before the comma (Migne convention), not an acute.

## leaf864
- `A=Οὕτως B=Οὕτω` → **READING: `Οὕτως`** — **A**. seg1 last lines: `…ὑπηρετῆσαι τὸν γέροντα. Οὕτως δὲ ἠσπαζόμην…` Final sigma clearly present.
- `A=[τὸ] B=τὸ` → **READING: `[τὸ]`** — **A**. seg2: `καὶ καθ' ἕκαστον ἀεὶ μετὰ [τὸ] πληρῶσαί με τὴν ὑπηρεσίαν αὐτοῦ`. The square brackets are printed. Second instance of Migne's editorial brackets in this range (cf. leaf860) — B stripped them here, mis-placed them there.
- `A=πλησίον B=πλησίου` → **READING: `πλησίου`** — **B**. seg2: `Τὸ φυλάξαι τὴν συνείδησιν τοῦ πλησίου τίκτει τὴν ταπεινοφροσύνην.`
- `A=ὀπίσω B=ὄπισθεν` → **READING: `ὀπίσω`** — **A**. seg4: `ἀπὸ τοῦ νοσοκομείου ἕως τῆς ἐκκλησίας περιπατῶν` / `ὀπίσω μου ὑβρίζων με·`
