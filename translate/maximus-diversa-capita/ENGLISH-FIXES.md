# ENGLISH FIXES — Maximus *Diversa capita*, after the image check and the apparatus (coordinator 2026-11-22; Opus fixer)

Edit ONLY `dc-0NN.en.md` in `~/patrologia/translate/maximus-diversa-capita/` (English + `## Notes`; never the `## OCR` tables). Targeted Edits; preserve every other word;
renumber a file's notes in order if you add or remove one. Read `CARD.md` first. For each row, read the chapter's Greek in the scaffold `dc-0NN.md` (find the tag) and the
verdict here; the plate verdicts are FINAL (read at 600 dpi by the image check or the coordinator). The apparatus is in `notes/result-{1,2,3,3b,4}.jsonl` (read the note
named in a row there). You may open a 600 dpi page `raw/kraken/maximus-diversa-capita/pages/p-NNNN.png` (crop with PIL into /tmp) if a row needs it; **if an image does not
display, say so; never write from an image you have not seen.** No web, no agents, no other files.
Final message: each row, what you changed (old → new) or why nothing, and any row where the printed Greek does not construe.

**Bracket rule (the plate now read):** Migne's square brackets in this work are almost all **his apparatus set into the text**: «[Regii duo X]», «[unus Reg. X]», «[ed. X]»,
«[male edita X]» (= the EARLIER EDITION's bad reading; the printed text is the correction), «[qq./qu. … ad Thalass. q. N, X]» (= the reading of the same passage in the *Quaestiones
ad Thalassium*), «[fort. X]» (= the editor's conjecture), «[ibid. X]». The English follows the PRINTED word; the bracket goes in a T note quoting it exactly as printed and saying
what kind it is. Fix every bracket T note whose quotation or classification is wrong (the translators saw only the machine reading).

## A. Plate readings that change the English
1. **I.89 p0621.34**: no stray point and no ἢ: Migne prints «χάριτος [fort. ὑπὲρ θείας ἐντολῆς]» — the editor's CONJECTURE. The English must render «on behalf of grace» only; the supplied
   «or … divine commandment» comes out of the running text; T note quotes the bracket.
2. **p0647.41** (III.~18): the plate prints the NOMINATIVE **κυβερνωμένη.** (agreeing with ἡ χρῆσις), which construes: follow it, not the genitive.
3. **p0657.01** (III.~57): the plate prints **διάσκεψιν** (not διάθεσιν): «examination» (Latin *dispectionem*); fix the English and the note.
4. **III.88 p0663.05**: the «(» is Migne's inline note **«(qu. illa 58, λύπη)»** — no word is lost: remove the `[?]`; English «punishment»; T note: the same passage in *Ad Thalassium* q. 58 reads λύπη («grief»).
5. **IV.22 p0670.16**: the plate has **no bracket** (a comma follows οὖν): remove the English [ ] supplement brackets and fix the note.
6. **III.94–99**: the plate has **no bracket** pair: remove the T note's bracket claim (keep anything else it says).
7. **IV.26 p0670.46**: Migne prints an opening bracket that never closes: render unbracketed; T note «Migne prints an opening bracket here that is never closed».
8. **IV.71 p0681.35**: the plate prints **τρόπῳ** (the translator read τόπῳ): «mode», not «place»; T note on the Latin *loco* if one exists.
9. **V.~? p0707.13**: the plate prints capital **Λόγον**: «the Word».
10. **p0616.43**: the plate has no τοῖς: if the English supplies anything for it, take it out. **p0685.38**: no μέν on the plate: take out any «on the one hand» added for it.
11. Full points on the plate that divide clauses (P rows): **p0684.41** after ἀρετῶν, **p0686.07** after ζωῆς, **p0687.46** after πάσχων, **p0705.48** after ζωήν — make the English's sentence division follow.
12. **p0674.10 (IV.~38)**: the English «of the suffering nature» (παθούσης) STAYS: Migne prints ἀπαθοῦς with an asterisk call; the asterisk note reads «Qq. ad Thalas. q. 61, παθούσης· quod et legendum», and
   the editor's note (q) calls ἀπαθοῦς «durius» and says «quod et reddidi» (he rendered παθούσης). Rewrite the T note to say exactly that.
13. **III.55 p0655.38**: the plate letter is a solid blot (ἔ/ἄ undecidable): the English «is absent» stands on the facing Latin and the second witness; the T note says the plate is illegible here.
14. **I.77 p0619.20**: the plate prints **ἀν-ύπαρκτον** (read on the page): the T note should say so (not that the English departs from the Greek).
15. **p0641.33**: the plate prints παρεχομένων («supplied») — a misprint for παρερχομένων: the English «passing away» stands; T note «Migne prints παρεχομένων».
16. **col. 1181 (dc-001, first anchor of p-0604)**: add ONE T note: «In our only scan the left edge of this column is clipped: the first letters of every line are missing; they are supplied
   from the myriobiblos transcription and the facing Latin.»

## B. Bracket quotations to correct (all English already follows the printed word)
p0611.17 «[Regii duo ἐξήπλωσε]» · p0633.53 «[Regii duo ὀδύνης]» · p0641.39 «[male edita προηγουμ.]» · p0647.01 «[edit. et unus Reg. ὅτι]» · p0654 «[duo Reg. φύσιν]» · p0663.13 «[unus Reg. ὀδύνης]» ·
p0663.14 «[ed. ταπεινοῖ]» · p0663.37 «[male edita, τοῦ εἴδους ἀπεύχεσθαι]» · p0665.35 «[qq. ad Thalass. q. 58, ὧν κατ᾿ οὐσίαν ἀντιλαμ.]» · p0668.36 «[qu. 59 ad Thalass. ἐξερευνητ.]» · p0670.06 «[unus Reg. πεφύκαμεν]» ·
p0671.26 «[male edita, ἔφεσιν, cupiditatem]» · p0672.33 «[qq. ad Thalas. q. 61. Θεὸς]» · p0678.04 «[qu. illa 61, ὅλως]» · p0690.49 «[unus Reg. ὅπου γε]» · p0696.14 «[ibid. γνωστ.]».
Also the asterisk notes that bear on a word: p-0617 «Male edita, εἶναι τῷ …» and p-0632 «** Edita, γνώσεως. Malim σχέσεως» (read them in result-1/2; give each a T note at its chapter if the English
is affected or the reader would need it).

## C. Migne's misprints that change the construal (one short T note each where none exists: «Migne prints X; the sense needs Y»)
p0655.28 τὴν δὲ (τὸν: θυμόν) · p0611.27 ταυτὴν (ταὐτήν «the same») · p0616.16 ἐργασόμεθα (subjunctive) · p0667.51 πίστει (πίστιν) and κατὰ … λόγου (λόγον) · p0676.15 ἔχει after ὁπόταν μή ·
p0702.07 τὸν νοερὸν (τὸ) · p0708.16 ἕξιν (ἕξις) · p0708.23 κατὰ τῷ ἴσον (τὸ) · p0658.26 no καί · p0646.41 ἐπιγνωμοσύνης (Latin *gratitudinis*: εὐ-?; English keeps «fair judgement» unless the sentence needs gratitude).
Accent/breathing/letter misprints that change nothing: no note (the cruces page lists them).

## D. From the apparatus, pp. 683–709 (filled in by the coordinator when reader 4 reports)
17. **V.~95 p0708.25**: Migne prints «ἀμετάθετος [male edita, μετάθετος]», and his note (q) says «Quod erat μετάθετος, valde mendosum est»: the English «unchangeable» stands; rewrite the T note («Not followed …») to say
    the bracket records the EARLIER EDITION's faulty reading without the privative, which the editor rejects.
18. **V.~99 p0709.18**: «ἀπροσδεὴς [male edita προσδεής]»: the same pattern; «in need of nothing» stands; T note as 17.
19. **p0708.07** «ὑποδεκτικὴ [ἀποδεκτικὴ]» and the other dc-019 brackets: quote them as printed if result-4 gives the full bracket; p-0708 note (r): υἱόν missing from the text — check the English's chapter there.
20. **p-0700 note (k)**: the editor SUPPLIES «τῆς πρὸς αἴσθησιν» from the manuscripts: find its chapter (V.~60–65) and make the English follow the supplement in [ ] with a T note, if it does not already.
(Rows from the re-read of pp. 656–702 may be added below before the fixer runs.)
