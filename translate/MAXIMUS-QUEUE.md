# MAXIMUS QUEUE — the complete works of Maximus the Confessor in Migne (PG 90–91), in order

Written 2026-11-06 (Fable), the day the *Epistulae* went live (migne.app/pg/91/epistulae/). Wilson: "set up the queue for the
complete works of Maximus in Migne." This file is the score; `MAXIMUS-ENGLISH-STATUS.md` (Sonnet, web-checked) is the
companion table of what already exists in English. Each work is its own kt-method run with its own go (model + burn),
its own RUN.md under `translate/<work>/`, and ships to `migne.app/pg/9N/<slug>/`.

## What Migne prints (CPG 7688–7721), what is on disk, and what each would cost

Costing rule, measured on the *Epistulae* (55K Greek words → 6.4M tokens all-in: Fable anchor, Opus translation, Sonnet
sweep + apparatus + build, Opus blind read, coordinator image check): **≈115K tokens per 1,000 Greek words**. Word counts
are the myriobiblos mirror's where it covers the work (`raw/mirrors/myriobiblos-maximos/`), else columns × 190.

| # | work | PG | Greek words | base on disk | English exists? (see STATUS) | est. burn | "New"? |
|---|---|---|---|---|---|---|---|
| ✅ | Epistulae 1–45 | 91.364–650 | 55,130 | API read + Kraken; LIVE | Louth: Ep. 2 only | 6.4M (spent) | yes (shipped) |
| ✅ | **Opuscula theologica et polemica** (27 pieces) — LIVE 2026-11-06 migne.app/pg/91/opuscula/ | 91.9–285 | ≈52,000 (myriobiblos has *ad Marinum* 16K) | pdf on disk (`raw/pg091/091.pdf` **pp. 11–161**, 12 duplicate leaves; Kraken running 2026-11-06) | ⚠ **Clarke 2026 (CUA, FOTC) = complete English of all 27 + Additamenta 16–19** (web-checked 2026-11-06, see STATUS); before it: Louth 3, 7; Blowers–Wilken 6; Gohl 1 | ≈6M | **no longer** |
| 2 | **Disputatio cum Pyrrho** | 91.287–354 | 11,670 | pdf pp. 162–≈196; myriobiblos full | Farrell 1990 (out of print); ⚠ **Clarke 2026 (same CUA volume)** | ≈1.4M | no |
| 3 | **Hymni** (two hymns) | 91.1417–1424 | ≈400 | pdf p. ≈773 | none found | ≈0.1M (Fable verse pilot, with the Anacreontica) | yes |
| 4 | **Mystagogia** | 91.657–717 | 11,280 | pdf pp. ≈361–390; myriobiblos full | Berthold 1985; Armstrong 2019 | ≈1.3M | no |
| 5 | **Expositio in Psalmum LIX** | 90.856–872 | 2,510 | PG 90 NOT on disk; myriobiblos full | check | ≈0.3M | likely |
| 6 | **Ad Theopemptum scholasticum** | 90.1393–1400 | 1,443 | — ; myriobiblos full | check | ≈0.2M | likely |
| 7 | **Capita alia** (the "Capita XV" etc.) | 90.1401–1461 | ≈11,000 | — | check | ≈1.3M | likely |
| 8 | Diversa capita ad theologiam et oeconomiam (5 centuries; a compilation, mostly from Ad Thalassium) | 90.1177–1392 | 36,223 | — ; myriobiblos full (`theoloikon`) | Philokalia vol. 2 (1981), "Various Texts", complete (medium confidence) | ≈4.2M | no (and spurious as a work) |
| 9 | Quaestiones et dubia | 90.785–856 | 8,269 | — ; myriobiblos full | Prassas 2010 | ≈1.0M | no |
| 10 | Expositio orationis dominicae | 90.872–909 | 6,412 | — ; myriobiblos full | Berthold 1985 | ≈0.75M | no |
| 11 | Liber asceticus | 90.912–956 | ≈8,400 | — | Sherwood 1955; Berthold | ≈1.0M | no |
| 12 | Capita de caritate (4 centuries) | 90.960–1080 | 18,426 | — ; myriobiblos full | Sherwood 1955; Berthold | ≈2.1M | no |
| 13 | Capita theologica et oeconomica (2 centuries) | 90.1084–1173 | 14,708 | — ; myriobiblos full | Berthold 1985 | ≈1.7M | no |
| 14 | Vita (BHG 1234) | 90.67–110 | 7,914 | — ; myriobiblos full | Neil–Allen 2003 | ≈0.9M | no |
| 15 | Acta: Relatio motionis, Disputatio Bizyae, Ep. Anastasii, Hypomnesticon | 90.109–222 | ≈21,000 | — | Allen–Neil 2002 (OECT), 2015 (OUP) | ≈2.5M | no |
| 16 | Quaestiones ad Thalassium | 90.244–785 | 99,443 | — ; myriobiblos (gaps at 481–488, 516–524, 565–572) | Constas 2018 (FOTC), complete | ≈11.5M | no |
| 17 | Ambigua ad Thomam + ad Johannem | 91.1031–1417 | 72,766 | pdf pp. ≈565–772; myriobiblos full | Constas 2014 (DOP), complete | ≈8.4M | no |
| 18 | Loci communes (florilegium, spurious) | 91.721–1017 | ≈56,000 | pdf pp. ≈400–560 | none | ≈6.5M | yes, but not Maximus |
| — | Computus ecclesiasticus | PG 19.1217–1280 | ≈12,000 | PG 19 not on disk | none | ≈1.4M | yes (a calendar treatise; low reader value) |
| — | Scholia in Dionysium | PG 4 | large; authorship John of Scythopolis + Maximus | PG 4 not on disk | Harrington partial | — | a separate project, under Dionysius |

**Total for everything in PG 90–91: ≈55M tokens**; the "New" tier (1, 3, 5–7) ≈ 7.6M; the dyothelite block (1–2) ≈ 7.5M.

## The order, and why

1. **Opuscula theologica et polemica.** The core of the two-wills controversy, Maximus's most-cited untranslated text
   (Opusc. 1, 3, 6, 7, 16 on the wills; 10 on the Roman primacy; 20 on the two operations; 24–27 the florilegia), no
   complete English, and the same closed glossary the *Epistulae* just fixed (operation, volition, inclination, mode).
   Sponsors fund new works; this is the one. Note: the Opuscula are not in column order of composition and several
   are fragments; Jankowiak–Booth's list dates them. Combefis's Latin faces; his notes are read as apparatus.
2. **Disputatio cum Pyrrho** completes the block (the 645 debate; Farrell's 1990 English is a small-press book, out of
   print). Myriobiblos has the full text as a free second witness.
3. **Hymni** with the Sophronius *Anacreontica* verse pilot (Fable): two short hymns, one method decision for both.
4. **Mystagogia**: short, central, cheap; two good Englishes exist (Armstrong 2019 is current), so it ships without a
   "New" claim and reads beside them.
5–7. **The small PG 90 pieces with no English** (Ps 59, Theopemptus, Capita alia): cheap, new, and the PG 90 volume has
   to be fetched and Kraken-read once for all of them (≈480 pages). 8, Diversa capita, is a Byzantine compilation
   printed under his name and the Philokalia has it: with the Berthold/Sherwood tier below.
9–15. **The PG 90 works with standard Englishes** (Q&D, Or. dom., Liber asceticus, Caritate, Cap. theol., Vita, Acta):
   our "one translation, one home" rule does not bar them (it governs our own texts), but they are not new and read
   beside Berthold / Sherwood / Allen–Neil. Do them when the site wants completeness over novelty.
16–17. **The giants with Constas's recent, complete Englishes** (Ad Thalassium, Ambigua): ≈20M tokens for texts a reader
   already has in FOTC/DOP. Last, and only for completeness.
18. **Loci communes**: 56K words of excerpts from other Fathers, printed under Maximus's name; not his. Last of all,
   or never.

## Method per work (what the Epistulae taught, 2026-11-06)
- **Base text = Kraken** (`htr/pg-ocr.sh`, model `pg-greek-cllg-ft-v1`, ≈0.6 min/page, free) → `kt-rules.py` → scaffolds
  (`kt-scaffold.py`, tags pNNNN.LL) — the Sophronius flow, NOT the October API read: the API base had strip-read holes
  (column heads, full-width lines) that only translating exposed. Render pages with `pdftoppm -r 600 -gray`, never
  `pdfimages` (it picks embedded thumbnails on 2 of 3 pages of PG 91).
- **Myriobiblos = free second witness** where it covers the work: restore its graves, align to Kraken lines by text,
  diff → extra rows in the scaffold's doubt list (the DOUBTS mechanism of kt-scaffold `--checked`). Never the base alone
  (eye-skips, 1–2 defects per 100 words).
- **Then the kt chain as run twice now**: Fable anchor (only if the register is new — the Opuscula's is not: inherit
  `translate/maximus-epistulae/{GLOSSARY,CARD}.md` and the M1–M6 rules) → Opus translators (3 chunks per brief, 3 at a
  time) → Sonnet sweep → coordinator image check (`kt-sheet` two passes) → Sonnet apparatus (8 briefs per 144 pages;
  readers cut their own 600 dpi crops) → `place.py` → Sonnet build per `BUILD.md` → Opus blind read (6 readers) → apply
  → Wilson (drafts, deploy, push).
- **Volume prep once per volume**: duplicate-leaf scan (text identity, as `dups.py` did for PG 91), column map
  (`data/pg-column-maps/pg09N.json`), Greek side per page from the gutter split.
- **PG 90 is not on disk**: fetch a copy (`data/volumes.json` tome 090 lists the Google Books / archive.org ids), check
  it is the Migne printing and not a reprint, render, Kraken all ≈480 pages in one background run (≈5 h).

## Open before work 1 starts
- ✅ 2026-11-06: Opuscula = pdf pp. 11–161 (title leaf p. 11 = col. 9; p. 162 opens the *Disputatio*, col. 287); 12 duplicate
  pages (38–39, 44–45, 54–55, 62–63, 66–67, 104–105) found by text identity on the djvu words; 139 real leaves = cols 9–286
  exactly. Map extended in `data/pg-column-maps/pg091.json`; Kraken launched over the 139 pages (`raw/kraken/maximus-opuscula/`).
- ⚠ **2026-11-06, web-checked: the "no complete English" premise of #1 and #2 is gone.** Kevin M. Clarke, *The Opuscula and
  the Dispute with Pyrrhus: The Theological and Polemical Works*, Fathers of the Church (CUA Press, 2026; ISBN
  978-0-8132-4082-4) — Opuscula 1–27, Additamenta 16–19, and the *Disputatio*; the publisher's page calls it the first
  complete English of the Opuscula. (bibliovault.org/p/cua/9780813240831.) Our rule 8 still allows the work — the queue is
  flexible, the badge is garnish — and the dyothelite block is the heart of Maximus; but the "New" tier now = 3, 5–7 only,
  and the sponsor argument ("new works are the funding lever") points at them or at the PG 90 fetch first. **Wilson's call.**
- ⬜ The rest of `MAXIMUS-ENGLISH-STATUS.md` (Ps 59, Theopemptus, Capita alia) is still unchecked on the web.
- ⬜ Wilson: which model and go, per work (the Opuscula ≈6M), with the Clarke finding in view.
