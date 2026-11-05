# RUN — Procopius, *Rhetorica* (PG 87.3, 2793–2842) via the kt method

Started 2026-11-05 (Fable session; Wilson: "Fable go"). Third kt-method work after Dorotheus and Moschus; same
volume as Moschus (`raw/pg087c/087c.pdf`, Kraken pages `raw/kraken/procopius-rhetorica/`, pp. 9–37).

## What Migne prints here — and what it is
| cols | pdf pp. | piece | author | chunks |
|---|---|---|---|---|
| 2789–2794 | 9–11 | Villoison's Monitum + Argumentum (Latin) | — | not translated |
| 2793–2825 | 11–27 | *Panegyricus in imp. Anastasium* (Αʹ–Λʹ, 30 sections) | Procopius of Gaza — genuine | pr-001–003 |
| 2825–2828 | 27–28 | Combefis's Monitum (Latin) | — | not translated |
| 2827–2837 | 28–33 | *Descriptio S. Sophiae* | ⚠ **Procopius of CAESAREA, *Buildings* I.1** (Nika riot → the dome's repair), excerpted by Combefis | pr-004 |
| 2839–2842 | 34–35 | *Monodia in S. Sophiam terraemotu collapsam* (cod. Matrit., Iriarte p. 264) | ascribed to Gaza; if the 558 collapse, not his | pr-005 |
| 2843– | 36–37 | NOTITIA (Moschus front matter) | — | — |
Decision owed to Wilson at ship: how the site labels pr-004/005 (about-text; Migne's attribution is what we index).

## Prep (2026-11-05, no translation tokens)
- `scripts/kt-lost.py procopius-rhetorica`: **no lost body text** (8 BODY hits = running heads/titles, read on the image;
  FOOT? hits = Villoison's notes; p-0037 past the work).
- `kt-rules.py`: 212 changes (glyph 128, accent 49, lexical 35) → `ruled/`.
- Column map: `data/pg-column-maps/pg087c.json` extended to pp. 9–37, same linear law (left col = 2·page + 2771),
  plate-verified at pp. 12, 27, 28, 34, 35 off the running heads.
- Section marks found in the ruled Greek: Αʹ Βʹ Γʹ Δʹ Εʹ Ζʹ Πʹ(=Ηʹ) Θʹ Αʹ(=Ιʹ?) ΙΒʹ ΙΕʹ ΙΖʹ Ιʹ(=ΙΗʹ?) ΙΘʹ Κʹ ΚΑʹ ΚΒʹ ΚΓʹ ΚΔʹ ΚΕʹ
  ΚΖʹ ΚΗʹ ΚΘʹ Αʹ(=Λʹ); stigma (6, 16, 26) lost; 11, 13, 14 unread — translators number by sequence vs the Latin.
- Villoison's numbered note-calls `(1)`…`(72)` in the Greek are garbled/dropped by Kraken: not reproduced; apparatus read
  separately (step 5).
- 5 scaffolds (`CHUNKS.tsv`: 1468 / 1625 / 1891 / 1854 / 859 Greek words = 7,697) → 2 briefs (`_briefs/`).
- **Fable anchor:** Panegyric §§ 1–2 translated in session (foot of `CARD.md`), register section added to
  `translation-style.md` ("Late-antique panegyric and ekphrasis", R1–R7), `GLOSSARY.md` seeded.

## ✅ Step 1 — translation DONE 2026-11-05 (Opus, 2 agents, ≈0.34M)
Brief A = pr-001–003 (Panegyric, 30 sections; ≈6,750 English words; OCR rows 17/30/39), brief B = pr-004–005 (≈3,500 English
words; OCR rows 51/7). Translator corrections to the anchor: p-0012's Greek column is 2796 (card fixed). Open calls the
translators flagged: p0018.27 lacuna (Villoison's note 22 marks it; `[?]` stays) · p0018.41 εὐεργεσίᾳ `[?]` · p0032.23 and
p0032.42 (Buildings) supplied from the Latin in ⟨…⟩ · Σολῶν / *Selorum* · Ῥώμῃ "strength" (Latin) · Πισίστρατον spelling.
The English files came hard-wrapped (the card's sample shape); unwrapped in place before the site build (align-sentences
reads a line as a paragraph).

## ✅ Step 4 — image check DONE 2026-11-05 (in session, Fable): 100 rows (ocr/doubt/print) on 5 sheets + 1 pass-2 sheet
Verdicts (`IMAGE-CHECK.tsv`): **R 72 · M 15 · P 9 · ? 4** (p0024.01 ἁπλῶς, p0032.47 δια-, p0012.42-class grave accents left as
printed). `kt-apply.py` → `checked/` (74 R rows, 69 exact + 4 across a hyphen; 1 not placed → `GREEK-PATCHES.tsv`).
⚑ **kt-apply trap:** a `plate=` verdict on a word broken across a line (p0024.12 φιλοτιμού-/μενας) replaced the hyphen-side
word with the plate form of the other side; repaired by two line-exact patches. ⚑ Translators' `ocr` labels: 15 of 100 were
Migne's own (ἐμπιπλαμένης, ὅτα, κατήλειπται, αἰνεῖται, ταυτὰ, ἀνταστράπουσα …) — same 1-in-6 as Moschus's 1-in-5.
`PRINT-ERRORS.tsv` (15 M rows) = the [sic:] layer, not set (Moschus precedent: none in-text).

## ✅ Step 5 — apparatus DONE 2026-11-05 (Sonnet, ≈0.37M, 1 brief, `notes/task-1.md` → `notes/result-1.jsonl`)
103 notes: Villoison's numbered 1–74 (81 rows), VARIÆ LECTIONES 20 (filed `notae`), asterisk 2; 9 markers illegible; 2 notes
run across a page. `notes/place.py` (Moschus copy; numbered + notae + asterisk keyed in the Greek are placed) →
`APPARATUS.json`: 102 candidates; kt-to-site placed **83** in the Greek, 19 listed in the cruces (anchor word = Villoison's
lemma, not the printed form: ἐμπειρίᾳ/ἐμπείρᾳ, ἀπείρατον/ἀπείρατι, ἀδρύνεσθαι/ἁβρύνεσθαι …). ⬜ `mp-note-crops.py` generalised
(`[work]`); `mpcommon.py` takes `MP_WORK`, `mp-bands.py` `MP_FIRST/MP_LAST`.

## ✅ Site build DONE 2026-11-05 (local; nothing pushed or deployed): 5 chunks, preflight 9 of 10
`GREEK-BREAKS.tsv` = 30 section marks + 2 work openings (hand-listed; garbled marks Πʹ/ʹ./Αʹ/iΓʹ/iΔʹ/Ιʹ/Αʹ patched to
Ηʹ/Ιʹ/ΙΑʹ/ΙΓʹ/ΙΔʹ/ΙΗʹ/Λʹ by `GREEK-PATCHES.tsv` from the heading rows + Latin numerals) · `GREEK-BANDS.tsv` 80 (17 pages
fitted) — ⚠ the band tool stripped the Α of ΙΑʹ at p-0019:31 as a glued letter; row corrected by hand · `GREEK-DROPS.tsv` 12.
kt-to-site CONF `procopius-rhetorica` (key `procopius-gazaeus-rhetorica`, prefix `pr`); `MP` mode now = "has a breaks table".
`kt-to-site` → `mark-sentences` → `WIDE_PARA=1 align-sentences --write` (88.6% sentence-level) → `verify-english-pg` OK →
`plate-gate` OK → `build-site procopius-gazaeus-rhetorica` → `build-lookup-grc.py` → `preflight` **9 of 10** (blind read).
Registry `data/pg-works.json` (slug `rhetorica`, `englishState: draft`, weak badge); `work-about.json` + `author-bios.json` +
RECENT line in `build-landing.mjs` are **DRAFTS for Wilson to read before any deploy** (incl. the Caesarea attribution).

## Step 6 — blind polarity read (2 Opus readers, launched 2026-11-05; `data/briefs/PROCOPIUS-BLIND-READ-{BRIEF,LAUNCH}.md`)
⬜ record R1/R2 here; apply with `polarity-record.mjs`; rebuild; preflight 10/10; then Wilson: read the drafts · deploy (own OK)
· push (own OK) · `englishState: "ours"`.

## Owed after the run
- Sweep section numbering across pr-001–003 against the Latin Roman numerals (Villoison's Argumentum lists I–XXX).
- Glossary clashes between the two briefs.
- Step 4 image check: `kt-sheet.py procopius-rhetorica` → read → `kt-verdict.py` → `kt-apply.py` → `checked/`.
- Step 5 apparatus: Villoison's numbered notes (pp. 11–27) + Combefis's (pp. 28–35), NOTÆ at the feet — generalise
  `mp-note-crops.py`, Sonnet read, `place.py` → `notes/APPARATUS.json`.
- kt-to-site CONF entry (`pr` prefix, key TBD), `GREEK-BREAKS.tsv` = the 30 section marks + 3 work titles, bands, drops.
- Build → align → verify → plate-gate → polarity read (Wilson's go) → preflight → deploy/push (Wilson's OKs).
