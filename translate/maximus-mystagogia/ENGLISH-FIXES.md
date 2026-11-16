# ENGLISH FIXES — Maximus *Mystagogia* (Opus fixer; coordinator Sonnet 2026-11-15)

The plate check is done (`IMAGE-CHECK.tsv`: R 83 · M 26 · P 21 · ? 20; the plate is the authority, the translators' conjectures were
sometimes withdrawn). The six chunks `my-00N.en.md` (translated, swept) must now say what the PLATE says at the spots below. Greek of each
chunk: scaffold `my-00N.md`; the plate-checked Greek is `raw/kraken/maximus-mystagogia/checked/p-NNNN.txt` (line numbers = the tag's `.LL`).
Read `CARD.md` § Terms and the Coordinator rulings in `SWEEP.md` (they bind). Edit with targeted Edits only; never touch OCR tables;
keep notes numbered 1..n with markers in the prose (add a note → renumber the rest in that chunk AND fix any "(see note N, my-00M)" cross-references).

For each row: read the plate-checked Greek line, find the English, and make the English follow the PRINTED Greek. Where the translator
had construed a conjecture, re-translate that clause from the printed Greek; where the printed Greek is faulty (a Migne misprint), keep the
sense-reading but say so in a T note: "Migne prints X (confirmed on the plate); the sense needs Y (Latin *…*)". If the clause cannot be
construed as printed, say so in the note and keep `[?]` only if no sense can be given.

| tag | what the plate prints | what to do |
|---|---|---|
| p0374.32 (my-003) | bracketed [γνώμην], not [γνῶσιν] (Latin: "Graece γνῶσιν") | English follows the plate's word ("inclination"? check the sentence: four terms science, knowledge, love, peace); T note: Combefis's own bracket; Latin has γνῶσιν |
| p0378.35 (my-003) | παθοῦσαν (footnote 37 follows), not πραθεῖσαν | the translator's "sold" is a conjecture; construe παθοῦσαν or, if impossible, keep with a T note naming Latin *venditum* |
| p0388.32/.33 (my-005) | ἑαυτῆς (not ἑαυτὴν); punctuation `Λόγον, ἑαυτὴν` | follow the plate |
| p0388.51 (my-005) | ἀσύγχυτον (ἀσύνθετον withdrawn) | confirm the English says "unconfused"; T note: Latin *vacantem compositione* |
| p0390.07 (my-005) | ἀληθὲς (not ἀληθῶς) | follow the plate |
| p0391.17 (my-005) | NO inserted clause; the sentence on the Church has no verb | keep the `[?]` and T note 17 as is (check it says the plate has no verb, the Latin supplies one) |
| p0391.33 (my-005) | τοῦ Θεοῦ ἡμῶν, NO Χριστοῦ | remove "Christ" if the English has it; T note: Latin *Christi* |
| p0392.46 (my-005) | εὐσέβειαν (εὐχαριστίαν withdrawn) | "piety"; T note: Latin *gratiarum actionem* |
| p0392.49 (my-005) | σοβόλου (non-word) | "of the symbol" is the sense: T note that Migne prints a non-word σοβόλου |
| p0394.51 (my-006) | οἰκοδομήν (ὑπομονήν withdrawn) | follow the plate: "edification"; T note: Col 1:11 / the Latin have patience |
| p0371.40 (my-002) | **μὴ** (translator read μὲν) — a NEGATIVE | decide from the sentence (answered by τὸ δὲ ἀγαθόν): if μὲν is needed the note must say the PLATE PRINTS μὴ; mark for the blind read |
| p0382.57 (my-004) | τί (sense τῷ) and οηλοῖ (δηλοῖ) | T note: Migne prints τί / οηλοῖ |
| p0374.40 (my-003) | τὴ δὲ εἰρήνη (sense ἡ) | T note (grammar only) |
| p0380.38 (my-004) | να-|λεῖν (sense κα-λεῖν) | T note, if none |
| p0390.57 (my-005) | ἐπαγγειλομένου (sense ἐπαγγειλαμένου) | T note |
| p0397.43 (my-006) | θεῷ lowercase | nothing |

Every other M row in `IMAGE-CHECK.tsv` is a letter or accent misprint that changes no sense: the build adds a `[sic:]` layer; no English change.
After the edits: verify markers 1..n and definitions in each chunk you touched. **Report** (short): per row `chunk · what changed · note number added/changed`,
every `[?]` left, and any spot where you disagree with the plate reading.
