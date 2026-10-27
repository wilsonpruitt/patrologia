# Pilot score: translation-as-plate-check vs the full plate check (dd-001, dd-002, dd-003)

| class | diffs (Kraken vs checked) | caught by a translator row | recall |
|---|---|---|---|
| letters | 62 | 51 | 82% |
| accent | 103 | 65 | 63% |
| punct | 37 | 28 | 76% |
| band | 6 | 2 | 33% |

Translator rows: 240; on a real diff: 156 (reading exactly matches the checked text: 122); glyph-only (fixed by rule): 50; on no diff: 34. Rows by kind: {'heading': 10, 'ocr': 199, 'space': 16, 'stray': 12, 'doubt': 3}

## Missed: letters (the ones that can change the English)

- dd-001 p0841.16: Kraken `ἀπα-Β` → checked `ἀπαρ-`
- dd-001 p0841.44: Kraken `Ο` → checked ``
- dd-001 p0843.04: Kraken `γενομένην` → checked `γεγομένην,`
- dd-002 p0843.43: Kraken `ποιῖ` → checked `ποιεῖ`
- dd-002 p0844.01: Kraken `έβης;` → checked `έδης;`
- dd-002 p0845.46: Kraken `Ο` → checked ``
- dd-002 p0846.24: Kraken `Οὐκ` → checked `Οὐχ`
- dd-003 p0849.16: Kraken `ἐκΒ` → checked `ἐκ`
- dd-003 p0849.31: Kraken `Σ` → checked ``
- dd-003 p0849.37: Kraken `` → checked `(sic)`
- dd-003 p0850.38: Kraken `Βαρσανουφίου,` → checked `Βορσανουφίου,`

## Translator rows on no diff (over-call, or the check missed it)

- dd-001 p0840.14: `πολυθεῖα` → `πολυθεία` (ocr, medium; accent; cf. πολυθείας .21)
- dd-001 p0840.26: `θεόν` → `Θεόν` (ocr, medium; capital, as everywhere else)
- dd-001 p0840.51: `ἀλλὰ χοῦ` → `ἀλλαχοῦ` (space, high; Latin alibi; foot note agrees)
- dd-001 p0841.17: `χὴν` → `ρχὴν` (ocr, high; ἀπαρχὴν, dropped ρ; Latin primitias)
- dd-001 p0841.41: `ἔγγυται` → `ἔγκειται` (ocr, medium; Gen 8:21 LXX; Latin pronum est)
- dd-001 p0841.43: `αὔ-` → `αὐ-` (ocr, high; accent)
- dd-001 p0841.47: `ἐξ αὐτῶν παθῶν` → `ἐξ αὐτῶν τῶν παθῶν` (ocr, low; dropped article? cf. p0842.02)
- dd-001 p0841.53: `ἐνδέχεται τινὰ` → `ἐνδέχεταί τινα` (ocr, medium; accent (enclitic))
- dd-001 p0842.24: `αὐτῷ` → `αὐτὸ` (ocr, high; parallels αὐτὴν τὴν; Latin ipsum odium)
- dd-001 p0842.35: `ἁμαρτίας` → `ἁμαρτίαις` (ocr, medium; dative; ὑπ᾿ αὐτῶν follows)
- dd-002 p0843.12: `καὶ κακῆς` → `τῆς κακῆς` (ocr, low; genitive after ἀνέχεσθαι; Latin appetitum nostrum)
- dd-002 p0843.19: `ἀνείδειαν` → `ἀναίδειαν` (ocr, high; ε/α; Latin impudentiam)
- dd-002 p0843.35: `κακοῦ, καὶ` → `κακοῦ τῆς` (ocr, low; Latin malum contumaciae vestrae)
- dd-002 p0843.43: `ποῖ` → `ποιεῖ` (ocr, high; letters dropped)
- dd-002 p0843.51: `ἦλθες·` → `ἦλθες` (ocr, medium; stray high point mid-phrase)
- dd-002 p0843.52: `ἥμαρτες·` → `ἥμαρτες;` (ocr, medium; question, as παρέβης;)
- dd-002 p0844.04: `ἀντέρει` → `ἀντερεῖ` (ocr, medium; accent)
- dd-002 p0844.23: `τόδε` → `τὸ` (ocr, high; article, as τὸ κρατεῖν)
- dd-002 p0844.34: `Οὖν` → `(word lost before)` (doubt, low; sentence cannot open with οὖν; Latin Igitur si (note 8))
- dd-002 p0844.35: `ἐντολάς.` → `ἐντολάς,` (ocr, medium; point mid-sentence)
- dd-002 p0844.44: `Πάτρες` → `Πατέρες` (ocr, low; or a real form: recurs p0845.16, .34, p0846.01, p0848.11; πατέρας at p0846.27)
- dd-002 p0845.16: `Πάτρες` → `Πατέρες` (ocr, low; see p0844.44)
- dd-002 p0845.34: `Πάτρες` → `Πατέρες` (ocr, low; see p0844.44)
- dd-002 p0846.01: `Πάτρες` → `Πατέρες` (ocr, low; see p0844.44)
- dd-002 p0846.11: `ἐκείνῳ` → `ἐκεῖνο` (ocr, medium; object of ἀφοῦμεν)
- dd-002 p0846.12: `ἐν ἡμῖν,` → `(phrase lost?)` (doubt, low; Latin loco centenarii (note 14))
- dd-002 p0846.23: `μηδαμηνῶν` → `μηδαμινῶν` (ocr, medium; η/ι)
- dd-003 p0848.11: `Πάτρες` → `Πατέρες` (ocr, low; or a real form; see dd-002 p0844.44)
- dd-003 p0848.32: `πᾶσαν` → `πῶς;` (ocr, medium; Latin Quod quo pacto fiat)
- dd-003 p0848.48: `εὐ-` → `εὑ-` (ocr, high; breathing)
- dd-003 p0849.11: `τῷ τούτῳ` → `τοσούτῳ` (ocr, medium; Ἐν τοσούτῳ, "meanwhile"; Latin Interim)
- dd-003 p0849.37: `μόρον` → `μόνον` (ocr, high; ρ/ν; Latin unicam hanc vocem)
- dd-003 p0849.55: `σε` → `με` (ocr, medium; the brother speaks of himself; Latin me proteget)
- dd-003 p0850.11: `κἀκείνῳ` → `κἀκεῖνοι` (ocr, medium; Latin ut illi … factitarunt)

## Missed: accent / punct

- dd-001 p0840.09 [accent]: `Ἀβραάμ,` → `Ἀβραὰμ,`
- dd-001 p0840.19 [accent]: `τολήν,` → `τολὴν,`
- dd-001 p0840.21 [accent]: `πολυθείας.` → `πολυθεΐας.`
- dd-001 p0840.40 [accent]: `ἐνὶ` → `ἑνὶ`
- dd-001 p0840.53 [accent]: `ἥγ-` → `ἤγ-`
- dd-001 p0841.06 [accent]: `βίμ,` → `βὶμ,`
- dd-001 p0841.10 [punct]: `κατέλθῃ` → `κατέλθῃ·`
- dd-001 p0841.26 [accent]: `ὥπῳ` → `ώπῳ`
- dd-001 p0841.26 [accent]: `ἀγαθόν,` → `ἀγαθὸν,`
- dd-001 p0841.27 [accent]: `κακόν,` → `κακὸν,`
- dd-001 p0841.43 [accent]: `αὔ-` → `αὐ-`
- dd-001 p0841.48 [punct]: `θυμὸς,` → `Θυμὸς,`
- dd-001 p0841.50 [accent]: `εἰσίν,` → `εἰσὶν,`
- dd-001 p0842.22 [accent]: `κακόν,` → `κακὸν,`
- dd-001 p0842.27 [punct]: `ϛ᾿.` → `Ϛ᾿.`
- dd-001 p0842.51 [punct]: `ἡμᾶς,` → `ἡμᾶς.`
- dd-002 p0843.47 [accent]: `ἐντολήν,` → `ἐντολὴν,`
- dd-002 p0844.24 [punct]: `τέκνα,` → `τέκνα`
- dd-002 p0844.29 [accent]: `ἑαυτόν,` → `ἑαυτὸν,`
- dd-002 p0844.32 [accent]: `ἀγαθόν,` → `ἀγαθὸν,`
- dd-002 p0844.36 [accent]: `ἀρετάς,` → `ἀρετὰς,`
- dd-002 p0844.45 [accent]: `ἑαυτούς,` → `ἑαυτοὺς,`
- dd-002 p0845.19 [accent]: `ἐντολαί,` → `ἐντολαὶ,`
- dd-002 p0845.38 [accent]: `λοιπόν,` → `λοιπὸν,`
- dd-002 p0846.16 [punct]: `ἀφροσύνης.` → `ἀφροσύνης,`
- dd-002 p0846.48 [accent]: `ἕνδυμα·` → `ἔνδυμα·`
- dd-002 p0847.01 [accent]: `γάρ` → `γὰρ`
- dd-003 p0847.22 [accent]: `νεφροὶ,` → `νεφροί,`
- dd-003 p0847.27 [accent]: `ὥμους` → `ὤμους`
- dd-003 p0847.29 [accent]: `ὥμους` → `ὤμους`
- dd-003 p0847.33 [accent]: `γεροντικόν,` → `γεροντικὸν,`
- dd-003 p0848.34 [accent]: `γισμός,` → `γισμὸς,`
- dd-003 p0848.48 [accent]: `εὐ-` → `εὑ-`
- dd-003 p0848.58 [accent]: `ἥνεγκεν` → `ἤνεγκεν`
- dd-003 p0848.60 [accent]: `Θεός,` → `Θεὸς,`
- dd-003 p0849.06 [accent]: `ὑπακοή,` → `ὑπακοὴ,`
- dd-003 p0849.14 [accent]: `ἥθελεν` → `ἤθελεν`
- dd-003 p0849.15 [punct]: `γέροντος,` → `γέροντος.`
- dd-003 p0849.18 [punct]: `ὕστερον.` → `ὕστερον,`
- dd-003 p0849.21 [accent]: `ποταμόν,` → `ποταμὸν,`
- dd-003 p0849.36 [accent]: `ἐλκόμενον` → `ἑλκόμενον`
- dd-003 p0849.40 [punct]: `Ιϛ᾿.` → `ΙϚ᾿.`
- dd-003 p0849.43 [accent]: `Θεός,` → `Θεὸς,`
- dd-003 p0850.22 [accent]: `«Δός,` → `«Δὸς,`
- dd-003 p0850.44 [accent]: `λογισμόν,` → `λογισμὸν,`
- dd-003 p0850.47 [accent]: `ᾐσθανόμην` → `ἠσθανόμην`
- dd-003 p0850.47 [accent]: `τὸ-` → `το-`
