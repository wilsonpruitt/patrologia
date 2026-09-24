# 7091 cruces — stint T7 (chunks 0000–0001, cols 0627D–0636A, PDF pp. 319–324)

Every page in range was opened at the plate once (`raw/scans/pl020/pl020.pdf`, 300 dpi full width, 600 dpi on
p. 320; corners read first: 319 = 627/628, 320 = 629/630, 321 = 631/632, 322 = 633/634, 323 = 635/636,
324 = 637/638). Latin and Greek collated and every foot note read in the same visit. p. 324 carries no 7091
text. Note edits are listed in `data/briefs/7091-NOTE-EDITS.md`; TEI patches in
`data/briefs/7089-7091-PENDING-TEI-PATCHES.md`.

## Standing decisions

- **How P1 is applied on this page structure.** The chunks carry, for Epp. I, II and IV, Migne's Latin
  (Coustant's version) and then Migne's Greek as two separate blocks, each with its own column anchors. The
  English follows 7090's settled practice: **the Greek block is translated from the Greek** (this is the
  letter as composed; the Latin is not consulted for its wording), and the Latin block, which faces its own
  Latin on the page, renders that Latin. Where the two say different things, the Greek English says what the
  Greek says and the difference is listed below. A single English per letter was not possible without
  breaking anchor parity and the word ratio (the verifier counts the Greek). Ep. III, which survives only in
  Latin, is from the Latin. No `[lat:]` (a PG device; the 7090 stints fired none).
- Coustant's lettered notes: Latin `[cn: a | …]`, English `[nt: …]` only (correction (a) of the launch
  message; verifier check 9a).
- Greek register: ἀρχιερεύς → "archpriest" (the Latin column has *archiepiscopus*/*pontifex*: kept apart,
  since the Greek word is not "archbishop"). βασιλεῦ → "O king" (Latin *imperator* → "O emperor").
  δίπτυχα → "diptychs"; Latin *sacrae tabulae* → "sacred tablets".
- Pattern 17: Arcadius alone → thou (Ep. I §1; *te*/σύ). Arcadius and Eudoxia together → you
  (*vestrarum*, ὑμετέρων, ὑμῖν). Innocent addressed by Arcadius: Latin *tuam* → thy; Greek
  τὴν ὑμετέραν πρᾳότητα is PLURAL → "your gentleness", while the same letter's σῆς and λύσῃς → thy/thou
  (the Greek mixes the honorific plural with the singular; the English keeps both as printed). Ep. IV
  (*vestrum*, ὑμῶν) → you.
- Migne's brackets kept and rendered: `[decerno]` → `[I decree]` (Coustant's supplement), `[ *Forte* nil
  quidquam]` → `[ *Perhaps* nil quidquam]` (7090 precedent).
- *EPISTOLA* → EPISTLE; the Greek heads are set as the Latin chunk sets them (`* … *` line).

## Plate readings that differ from our TEI (patches filed)

- **0629 (Ep. I head)** TEI `INOCENTII` — plate `INNOCENTII`. English "INNOCENT".
- **0632C** TEI `ὠφελῆσαι;` — plate `ὠφελῆσαι·`. The TEI's Greek question mark would turn the clause into a
  question; the plate's is a statement and the English is one.
- **0632C** TEI `διπτύχοις;` — plate `διπτύχοις·`. Statement.
- **0634A** TEI `κολάζουσιν;` — plate `κολάζουσιν·`. Statement.

## Cruces (Latin)

- **0628D–0629 (Monitum §2)** `factorumque Graecorum testimoniis`: plate reads *factorumque* (checked at
  300 dpi). Rendered "and of the Greek acts". The sense wants *fastorumque*, "the Greek Fasti" (the
  consular chronicle), which does record Eudoxia's death; not marked (a real word).
- **0629A** `Ad haec, nulla`: the plate may print a semicolon after *haec*; the type is too worn to say.
  TEI followed; no patch.
- **0630B (Monitum §3)** `ut eum ne salutare quidem`: read at 600 dpi; *eum* (TEI) stands.
- **0633B (Ep. III)** `que in legatos`: the plate prints *que* (e for æ). A spelling, not a defect
  (Pattern 9); rendered "which".
- **0633B (Ep. III)** `nequidquam [ Forte nil quidquam] eorum … sciente me factum est`: rendered
  literally, "in vain … of the things … was done with my knowledge"; the sentence does not construe with
  *nequidquam*, and Migne's own bracket gives the reading that does ("nothing at all … was done with my
  knowledge"). No `[cj:]`: the edition already glosses it (Pattern 18, the 8715 decline class).
- **0634B (Ep. III)** `ut quanta maxima celeritate, comprehendi jussimus`: the *ut* has no verb of its own;
  rendered "that with the greatest possible speed, we have ordered to be seized". Literal.
- **Note a, p. 320 (Ep. I head)** prints *observatoni* (for *observationi*) and *inrasit* (the sense wants
  *invasit*, "invaded"; the Greek beside it, ἔξω αἰτίας ἐποίει, is as printed and obscure). The English note
  renders "observation" and carries *inrasit* untranslated.

## Latin–Greek differences (P1; the English of the Greek follows the Greek)

**Ep. I**
- §1 Latin *persecutionem … adversus Deum et Ecclesiam ejus*; Greek κατὰ τῆς τοῦ Θεοῦ Ἐκκλησίας καὶ τῶν
  ἱερέων αὐτοῦ, "against the Church of God and his priests".
- §1 Latin *re non judicata*; Greek ἀκρίτως, "without judgment". Latin *Doctorem totius orbis*; Greek
  τῆς οἰκουμένης διδάσκαλον.
- §1 Latin *qui … destituti sint, famem jam pati coguntur*; Greek στερηθέντων καὶ λιμωξάντων, "deprived
  … and have hungered", no "compelled".
- §1 Latin *persuasione unius mulieris, quae hoc flagitium admitti permisit*; Greek πειθηνίας μιᾶς
  γυναικὸς … τοῦτο γενέσθαι τὸ δραματούργημα: πειθηνία is "compliance, obedience", and the Greek calls the
  deed a "drama" (δραματούργημα), not an "outrage".
- §1 Latin *non ita multo post*; Greek οὐ μετὰ πολλὰς ταύτας ἡμέρας, "not many days after these".
- §1 Latin *imposturae novacula*; Greek τῷ ξυρῷ τῆς πλάνης, "the razor of deceit/error".
- §1 The Latin cites Judges XVI, 19 `[n:]`; the Greek has no reference.
- §2 Latin *segrego*; Greek ἀφορίζω, "excommunicate" (the technical verb). Latin *ab ea hora, qua vinculum
  … notum vobis fuerit*; Greek ἀφ' ἧς ὥρας ἀναγνῶτέ μου τὸν παρόντα δέσμον, "from the hour at which you
  read this present bond of mine". Latin *dignitate sua excidisse [decerno]*; Greek ὑπὸ καθαίρεσιν εἶναι,
  "to be under deposition" (no verb of decreeing: the infinitive hangs on ἀφορίζω, and the English leaves it
  hanging).
- §2 Greek `οὔτε οὐ δυνήσεται ἀξίωμα βιωτικόν τινα ὠφελῆσαι`: a compound negative followed by a simple one.
  Both are carried (7a): "nor will worldly rank not be able to help anyone". The sense, and the Latin (*nec
  quemquam … adjuvari posse*), is that no rank will help; the second οὐ is a late-Greek pleonasm, but it is
  printed and the English does not drop it.
- §2 Latin *animorum occulta erumpent et exhibebuntur ante conspectum omnium*; Greek ἐκείνων δὲ τὰ ἐντὸς
  ἐκχυθήσονται πρὸς ὑπόδειγμα πάντων, "the inward parts of those shall be poured out for an example to all":
  the Greek is bodily (the bowels gushing out, as of Judas in Acts 1:18) where the Latin is moral.
- §3 Latin *quem … in sedem episcopalem intrusistis*; Greek ὃν εἰσενήγετε, "whom you brought in".
- §3 Latin *Theophilum autem non modo dejectum e sede sua, sed etiam excommunicatione et anathemate
  multatum … alienum declaramus*; Greek Προστιθέμεθα δὲ τῇ καθαιρέσει Θεοφίλου ἀφορισμὸν καὶ
  ἀναθεματισμὸν καὶ τελείαν ἀλλοτρίωσιν τοῦ χριστιανισμοῦ, "we add to the deposition of Theophilus
  excommunication, anathematization and complete estrangement from Christianity".
- §3 Latin *episcopatum quodam adulterio polluit*; Greek ὡς μοιχεύσας τὴν ἐπισκοπήν, "as having
  committed adultery upon the episcopate". Latin *qui consulto … communicarunt*; Greek προθέσει (note d: the
  word is lacking in Glycas).

**Ep. II**
- Latin *ut mansuetudinem tuam certam redderem*; Greek πληροφορῶν τὴν ὑμετέραν πρᾳότητα (plural, see
  Pattern 17 above).
- Latin *Cum enim eorum communione sim usus, nihil causae erat cur eos affligerem*, "since I have used their
  communion"; Greek Εἰ γὰρ ἤμην συμμέτοχος αὐτῶν, εἰς τοῦτο οὐκ εἶχον τούτους κακῶσαι, "for if I had been a
  sharer with them, I would not for this have had cause to harm them": a conditional where the Latin is causal,
  and "sharer" (συμμέτοχος) where the Latin has "communion". Coustant's note c argues against the Latin's
  claim; it does not quite fit the Greek.
- Latin *ab ea … poenas exegisse*; Greek ἀνταπέδωκα, "I have requited".
- Latin *ac ne multipliciter punias*; Greek μὴ ἐκδικήσῃς πολλαχῶς, "not to avenge manifoldly".
- Nahum: Latin *Nec enim ipse Dominus bis ob idem delictum percutit* (present); Greek Οὐ γὰρ πατάξει
  Κύριος δὶς ἐπὶ τὸ αὐτό (future, "will not strike"), close to the LXX of Nah 1:9.

**Ep. IV**
- Latin *ad symbola dominica confirmatis animis accedite*, "with strengthened minds"; Greek ἐν τοῖς
  δεσποτικοῖς συμβόλοις προσέλθετε ἐῤῥωμένοι, "approach the Master's symbols in good strength" (no
  "minds"; ἐῤῥωμένοι is also the letter-closing "farewell" word, and may be heard so).
