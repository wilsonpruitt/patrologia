# 7090 Innocent I, *Epistolae et decreta* — pending TEI patches, chunks 0000–0005 (stint T1)

Sites where this stint opened the column at the plate (`raw/scans/pl020/pl020.pdf`, 300 dpi, corners read
first) and Migne's type differs from our Corpus Corporum twin. Per "What the English translates — THE PLATE
WHERE READ", the English already renders the plate. Do not edit the TEI or `data/tei-patches/7090.json` from
here; the orchestrator merges. Each `find` should match once.

⚠ **Separate from these text patches:** this stint also placed, moved, completed and corrected many `[cn:]`
notes by hand in `src/latin/7090/0000–0005.md` (listed in `src/english/7090/cruces-0000.md`, "Notes").
`data/plate-notes/7090.tsv` must be brought into line with them BEFORE any re-chunk, or the re-chunk will
silently undo them.

## 0468B — `tradunt` in our twin, **`tradant`** on the plate
- Plate: p. 239, right col, Arcadius's law of 399: `aut juxta legem dudum latam tradant curiae facultates`.
- Proposed: `find` `juxta legem dudum latam tradunt curiae` → `juxta legem dudum latam tradant curiae`
- English (0001): "or, according to the law long since passed, to hand over their means to the curia".

## 0474A — full stop after `Unius uxoris virum`
- Plate: p. 242, right col, §9: `*Unius uxoris virum* ᵉ. Et iterum` (the key before the stop).
- Proposed: `find` `*Unius uxoris virum* Et iterum` → `*Unius uxoris virum*. Et iterum` (check the XML for the
  italic boundary).
- English (0002): "*The husband of one wife.* … And again".

## 0481B — `hauc` in our twin, **`hanc`** on the plate
- Plate: p. 246, left col, Monitum §1: `Epistolam hanc alii libri breviorem`.
- Proposed: `find` `Epistolam hauc alii` → `Epistolam hanc alii`
- English (0003): "Some books present this letter shorter".

## 0485B — `indulgetiam` in our twin, **`indulgen-|tiam`** on the plate
- Plate: p. 248, left col, line-end hyphen: `erga Priscilliani asseclas indulgen-` / `tiam nunc tam impense`.
- Proposed: `find` `asseclas indulgetiam nunc` → `asseclas indulgentiam nunc`
- English (0005): "the indulgence of the synod of Toledo".

## 0486A — `haectenus` in our twin, **`hactenus`** on the plate
- Plate: p. 248, right col, Epistle III title list IV: `ita dissimulari quae hactenus usurpata sunt`.
- Proposed: `find` `quae haectenus usurpata` → `quae hactenus usurpata`
- English (0005): "that what has been usurped hitherto".

## Checked, no patch
- 0466B `asbcessurus`: the plate prints it (p. 238). Migne's; `[sic:]` in the English.
- 0477A `nom estis`: the plate prints `nom` (p. 244, 400 dpi). Migne's; `[sic: nom]` in the English.
- 0485A `adeo que` / `necue`: plate glyphs damaged (`adeo ]ue`, `necne`/`necue` n/u indistinct at 400 dpi).
  Not patched; English renders "and thus" / "or not".
- 0486B `discederunt`: the plate prints it, and Coustant's note (e) says the manuscripts have it. Coustant's
  reading; no marker (P0).
