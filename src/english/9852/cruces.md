# Cruces — 9852 (Auctor incertus, *De monasterio Fructuariensi*)

This is an editorial-historical preface (Maurist-style) on the abbey of Fruttuaria, embedding quoted imperial/episcopal charters in « » and in italic runs.

- **0841C (end of chunk 0000)** — the paragraph closes with an UNBALANCED open parenthesis and never resolves it in the source: `... intra regni sui fines ( *Vide supra in* ROBERTO *rege inter praecepta ejus ecclesiastica.*` The chunk simply ends there. Rendered as printed — open paren kept, cross-reference translated with its italic structure preserved (Pattern 4: a cross-reference is editorial comment, translated, NOT an `[f:]` locator) — "( *See above under* ROBERT *the king, among his ecclesiastical precepts.*". The dangling paren is Migne's, not an omission on my part.
- **0841D (chunk 0001, §7)** — `omnium quae ( *sic* ) asserenda monasterii ejusdem libertate`: Migne prints his own `( *sic* )` flag inside the sentence, marking the anomalous `quae`. Reproduced in place as "( *sic* )", untranslated (it is Migne's editorial mark).
- **0842A (§7)** — `... a Nitardo et Rotberto germanis ipsius Gotefredi cuidam Guntardo levitae traditus est`: masculine `traditus` where the antecedent should agree with the neuter *monasterium* / the charter; the syntax is loose in the source. Rendered per sense ("which was handed over ... to a certain Guntard the levite"); not emended.
- **0843D/0844A (§9)** — `A. imperatrix et peccatrix A. [Andreae] Patri bono`: the addressee's name is abbreviated `A.` and Migne (or the editor) supplies `[Andreae]` in brackets. Bracket preserved in English as "A. [Andrew]".
- **§7 date line** — `*Actum apud Divionem publice* III *Idus Januarii ... indictione* XV *regnante...*`: the Roman numerals III and XV are printed OUTSIDE the italic runs; italic boundaries preserved exactly as printed.

## 2026-07-28 — quotation markers repaired (post-hoc sweep)

This work shipped 2026-07-20 with Migne's guillemets rendered as straight double
quotes, and with two of its nine quotations broken around "he says" in English
convention. Both were repaired 2026-07-28 under `translation-style.md` Pattern 5:

- All 10 quotations (9 in chunk 0000, 1 in 0001) restored to « … », 1:1 with the
  Latin twin's openings and closings.
- 0840A (Henry's diploma, *« Domnus, inquit, abbas Willelmus … »*) and 0840C–D
  (*« Dehinc, inquit, ut stabilius permaneat … »*): the interrupting *inquit* had
  been lifted out of the quotation as `"…," he says, "…"`. Rejoined, with "he
  says" kept inside the guillemets where Migne keeps *inquit*.

No wording was changed; this is a marker repair only. `verify-english.mjs` gained
a guillemet-parity check the same day so the class cannot ship unseen again.
