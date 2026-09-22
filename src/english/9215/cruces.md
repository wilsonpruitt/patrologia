# Cruces — 9215 (Usuardus Sangermanensis, Martyrologium, part 2: May–December)

**Governed by `translation-style.md` Pattern 7 and the Martyrologies rules M0–M2.** The English
renders what Migne prints (PL 124, cols 9–857). It continues 9198, and the same edition and the same
scope apply. **PL 124 survives in two printings** (archive `patrologiaecurs76unkngoog`, Gallica
`bpt6k54939860`), and each has faults the other lacks. By Wilson's ruling of 2026-09-22, where one
prints a non-word and the other the sound word, the Latin follows the sound printing. Bouillart's
keyed notes: every page was read, and all 62 are placed. Stint working files: `cruces-0000.md` (C),
`cruces-0004.md` (D), `cruces-0008.md` (E), `cruces-0012.md` (F).

## Merge, chunks 0000–0014 (2026-09-22)
- **Plate patches:** 27 in `data/tei-patches/9215.json`: the banner, *lignato*, 15 where both printings
  agree against our twin, 9 press variants corrected to the sound printing (ruled), and *Ambrosii*.
- **`[cj:]`** on the November head: *XXXI*, read *XXX* (ruled).
- **Note garble check** (`data/briefs/USUARDUS-NOTE-GARBLE-VERDICTS.md`). The 0487 note had lost
  about four printed lines in transcription, identical in both printings; they are now restored.
  *hoc an. II Martii* stands as printed; Sollerius's quotation in the same note has XI.
- **Blind read** (R2–R5; `data/briefs/USUARDUS-BLIND-READ-R{2..5}.md`). Applied:
  - 0239 Cyrillus: *rursus* → "was again … beheaded". There is no earlier beheading.
  - 0099 Conon: *craticulam* is the object of *superaverunt* → "overcame the gridiron".
  - 0073 note: *Quis olim aut quae* → "What saint, man or woman".
  - 0191 note: the elided verb is *vidit*, so "which he himself (saw)", not "I".
  - 0253: *Sileae* → Silas. He is a well-known saint, so the names rule gives the English form.
  - 0435 Marcellus: Priscus is the host who invited him, not the guest.
  - 0277 note: *Ipso die* → "On this same day" (the ruled formula).
- **Considered and not changed:** 0119 note *forma litterarum haud multum assimilis* is read at the
  plate as *assimilis* on both printings. The sense arguably wants *dissimilis*, since Bouillart is
  explaining how Castellanus mistook the hand. A `[cj:]` cannot stand inside an `[nt:]`, so the
  literal rendering stands and the doubt is logged here.

## Note proofread against the plate (2026-09-22)
All 62 notes read word for word against the printed page (`data/briefs/USUARDUS-NOTE-PROOFREAD-P{3,4}.md`),
after the 0487 line-loss was found. **No other note had lost a clause or a line.** Corrections were
italics Migne sets and our transcription flattened, small-cap numerals, and three word errors:
- 0247 *lituram* → *litura*, and a stray *hoc* **picked up from the facing column's first line** —
  the gutter hazard producing an ADDITION, not a loss.
- 0309 *litura superinducta* → *liturae*.
- 0411 *Augustoduni fuerat* → *erant* (plural subject, *duobus monasteriis*).
- 0309 *Sollarius* stands: both printings print it, so it is Migne's.
- Ligatures in the note texts normalized to plain letters (ae, oe), our standing convention.
- ⚑ Left for a later pass: the English twins mark a quoted codex reading inconsistently, some with
  italics and some with single quotes. Cosmetic, and not worth touching the 101 twins for now.
