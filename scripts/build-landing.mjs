#!/usr/bin/env node
// Build the migne.app landing page + resolver data from the registries.
// Usage: node scripts/build-landing.mjs
// Emits site/index.html and site/resolver-data.json.
//
// Productionizes the approved sketch (sketch/index.html, commit 0c149a4) per
// site/landing-resolver-spec.md. The englished set is derived by scanning the
// built work pages — never hardcoded — so a landing rebuild stays correct as
// works ship.

import fs from 'node:fs';
import path from 'node:path';
import { nav } from './lib/chrome.mjs';
import { isFirstEnglishPL, loadPlStatusByIdno, badgeHtml } from './lib/first-english.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

// Recently Englished is editorial: newest first. Prepend when a work ships.
const RECENT = [
  // — 2026-08-30 session: fourteen [var:] stood 14 of 14 at the plate, and the read withdrew TWO [cj:] instead — both conjectures right about the reading and wrong about whose error it was, since Migne had printed neither word our file blamed him for; a stint predicted one of the corruptions without the plate, from the same fault in a second work, and on that reasoning withheld four accusations that would all have been false —
  'pl/114/epistola-ad-hebraeos',                                  // Anselm of Laon and his school — the gloss on Hebrews; the Son as the brightness of glory and figure of the substance, Melchisedech without beginning of days, the two tabernacles and the blood that speaks better than Abel's, and the cloud of witnesses — with a rest that Migne's own page says all heard and not all heard
  // — 2026-08-30 session: the plate gate closed 7 of 7 with no false marker at all, and returned eleven defects our Latin had been reading correctly — five of Migne's own, silently tidied by the digitization, and six it had broken; one dropped letter had manufactured the work's hardest crux, which the translator had reasoned about at length and rightly refused to repair —
  'pl/114/epistola-ii-ad-corinthios',                             // Anselm of Laon and his school — the gloss on 2 Corinthians; the treasure in earthen vessels, the third heaven and the thorn in the flesh, the ministers of God in honour and dishonour — with Isaias's tavern-keepers watering the wine, which Migne prints against the Vulgate because the gloss is aiming it at the false apostles
  // — 2026-08-29 session: the plate gate run in full BEFORE a work shipped — 36 of 37 markers stood where the volume's own prior said two in three would fall, and twelve defects of Migne's came back that the digitization had repaired out of our text before we ever saw them —
  'pl/114/prophetia-jeremiae',                                    // Anselm of Laon and his school — the gloss on Jeremiah; the almond rod of the watcher, the linen girdle rotted by the Euphrates, the potter's house and the oracles against the nations, with a lemma where Migne's own gloss four lines down quotes the verse against itself
  // — 2026-08-29 session: the plate gate's first full run on a new work — nine of thirteen [sic:] markers turned out to be false accusations against Migne, and four of Migne's own defects had been silently repaired out of our text before we ever saw them —
  'pl/113/liber-ecclesiasticus',                                  // Anselm of Laon and his school — the gloss on Ecclesiasticus (Sirach); Wisdom praising herself among the trees and spices of Lebanon, the fear of the Lord as the beginning of wisdom, and the Praise of the Fathers from Enoch to Simon son of Onias — with a lemma where the Vulgate's "plough a lie" is printed "love a lie"
  // — 2026-08-28 session: the first work in the corpus collated against Migne's plate page by page, all 22 of them — 63 patches, five false public claims against Migne withdrawn, and eight real Vulgate divergences recovered that the digitization had quietly erased —
  'pl/114/expositio-in-xx-primos-psalmos',                        // Walafrid Strabo (so Migne) / Anselm of Laon and his school — the gloss on Psalms 1-20, printed from Pez's Thesaurus; Pez cut it at twenty because the rest was already in the Gloss, and the plate showed our transcription departing from Migne about three times a page
  // — 2026-08-28 session: the Glossa's ninth cadence batch, Apocalypse and the Song of Songs, and the one where a single plate page recovered three dropped Hebrew words and settled two identical-looking single-letter divergences in opposite directions —
  'pl/114/apocalypsis-b-joannis',                                 // Anselm of Laon and his school — the gloss on the Apocalypse of John; the seven churches, the seals opened and the New Jerusalem, with a Douay "shortly" that had swallowed Migne's own next lemma
  'pl/113/canticum-canticorum',                                   // Anselm of Laon and his school — the gloss on the Song of Songs; Bride and Bridegroom read as Church and Christ, and a page that had given the Bridegroom's answer to the Bride's own question until the work's own words settled it back
  // — 2026-08-25 session: the Glossa's eighth cadence batch, and the one where three blind reads found not one polarity defect in six books and every repair was a referent instead —
  'pl/114/actus-apostolorum',                                     // Anselm of Laon and his school — the gloss on Acts; Pentecost with the fire's four natures, Stephen's speech and Paul's road, and a line where the plate proved the broken sentence was our full stop and the lost colon Migne's
  'pl/113/liber-proverbiorum',                                    // Anselm of Laon and his school — the gloss on Proverbs; Wisdom read as Christ calling the persecutors back after the passion, and a note citing Isaias for a verse of Ecclesiasticus, caught from the words and never the numeral
  'pl/113/liber-iii-regum',                                       // Anselm of Laon and his school — the gloss on 1 Kings; Solomon's temple as the Church built of living stones, and a citation that names not just the wrong book but the wrong Testament, for the very verse the gloss is expounding
  'pl/113/liber-paralipomenon-i',                                 // Anselm of Laon and his school — the gloss on 1 Chronicles; the ark brought up to Sion, and a page where a relative bound to the nearest noun had handed the Incarnation and the harrowing of hell to the company of the saints
  'pl/113/liber-paralipomenon-ii',                                // Anselm of Laon and his school — the gloss on 2 Chronicles; Solomon's dedication and the reforming kings, with Athalia restored to her own sex and the grace of baptism held apart from the grace of confirmation
  // — 2026-08-24 session: the Glossa's seventh cadence batch, the historical books, and the one where the plate went against our own transcription fifteen times out of fifteen —
  'pl/113/liber-i-regum',                                         // Anselm of Laon and his school — the gloss on 1 Samuel; Hannah's song read as the Church's, Saul rejected and David chosen, and a clause where God, not Phalti, is the one who keeps him from touching Michol
  'pl/113/liber-ii-regum',                                        // Anselm of Laon and his school — the gloss on 2 Samuel; David's lament over Saul and Jonathan, Absalom's revolt, and a page that had said Absalom was cast out for the sins his father was punished for
  'pl/113/liber-iv-regum',                                        // Anselm of Laon and his school — the gloss on 2 Kings; Elisha and the axe-head, Hezekiah's prayer and the fall of Jerusalem, with the crown that was set on Joachaz against Pharao's will and not his own
  'pl/113/liber-i-esdrae',                                        // Anselm of Laon and his school — the gloss on Ezra, from Bede; the temple rebuilt among enemies, and an editorial note in which Migne slipped into his own French and our source quietly translated him back
  // — 2026-08-23 session: the Glossa's sixth cadence batch, and the one where the plate went against our own transcription seven times —
  'pl/114/epistola-ad-galatas',                                   // Anselm of Laon and his school — the gloss on Galatians; the law as schoolmaster and the freedom of the sons, with the negative displaced onto God's own name at 584D and rendered where Migne set it
  'pl/113/liber-sapientiae',                                      // Anselm of Laon and his school — the gloss on Wisdom, translated from Greek and never in the Hebrew canon; the souls of the just in the hand of God, and a reward that surpasses rather than one that is won
  'pl/113/liber-josue-ben-nun',                                   // Anselm of Laon and his school — the gloss on Joshua, read through Origen; the whole commentary turns on the name Jesus, which Migne alternates with Josue and which is left standing in both
  'pl/114/prophetia-baruch',                                      // Anselm of Laon and his school — the gloss on Baruch, which is a preface and nothing else, because the old copies carried the text of Baruch with no exposition at all, and Migne says so himself
  // — 2026-08-19 session: the Glossa's fifth cadence batch, two epistles and two Old Testament histories —
  'pl/114/epistola-i-b-joannis',                                  // Anselm of Laon and his school — the gloss on 1 John; God is love, and a lemma whose own gloss corrects it by naming the verse it belongs to
  'pl/113/liber-judicum',                                         // Anselm of Laon and his school — the gloss on Judges, read largely from Augustine's LXX-based Latin rather than the Vulgate; Gideon's fleece, and a number the text's own reckoning refutes
  'pl/113/liber-nehemiae',                                        // Anselm of Laon and his school — the gloss on Nehemiah, from Bede; the wall rebuilt as the Church repaired, and a sentence restored from the plate after our source skipped a whole line of it
  'pl/114/epistola-ad-ephesios',                                  // Anselm of Laon and his school — the gloss on Ephesians; the armour of God, and three lemmata whose divergence from the Vulgate is what the gloss is arguing from
  // — 2026-08-19 session: the Glossa's fourth cadence batch, three epistles and a wisdom book —
  'pl/113/liber-ecclesiastes',                                    // Anselm of Laon and his school — the gloss on Ecclesiastes, on Jerome's text; vanity read as the creature subjected to it unwilling, and Migne's lemmata carrying Old-Latin readings the Vulgate does not
  'pl/114/epistola-i-b-petri',                                    // Anselm of Laon and his school — the gloss on 1 Peter; the living stones and the chosen race, with a gloss whose note cites Matthew for a sentence of Luke's
  'pl/114/epistola-canonica-b-jacobi',                            // Anselm of Laon and his school — the gloss on James; faith without works and the tongue as a fire, with Migne's plate denying at one turn what its own next clause requires
  'pl/114/epistola-i-ad-timotheum',                               // Anselm of Laon and his school — the gloss on 1 Timothy; Paul first among sinners by rank and not by time, the gloss's own point and one our first English had reversed
  // — 2026-08-18 session: the Glossa's third cadence batch, two Pauline epistles and two Old Testament books —
  'pl/113/liber-esther',                                          // Anselm of Laon and his school — the gloss on Esther, read with Vasthi as the synagogue put away and Esther as the Church taken in; Migne's lemmata diverge from the Vulgate more here than in most books
  'pl/113/liber-judith',                                          // Anselm of Laon and his school — the gloss on Judith, read throughout as the Church against the devil; her beauty her doctrine, and the sword taken from his own bedside
  'pl/114/epistola-ad-colossenses',                               // Anselm of Laon and his school — the gloss on Colossians; the fulness of the Godhead bodily, the handwriting of the decree blotted out, and a lemma built on a word the Vulgate does not print
  'pl/114/epistola-ad-philippenses',                              // Anselm of Laon and his school — the gloss on Philippians; the hymn of Christ's self-emptying, closely argued, and a lemma whose gloss expounds a crown the lemma has lost
  // — 2026-08-18 session: the Glossa's second cadence batch, four epistles and its first Old Testament book since Ruth —
  'pl/113/liber-tobiae',                                          // Anselm of Laon and his school — the gloss on Tobit, read from Bede as an allegory of the Church; lemmata in guillemets, and Migne abridging his source seventeen times with etc., usque ad
  'pl/114/epistola-ii-b-petri',                                   // Anselm of Laon and his school — the gloss on 2 Peter; the false teachers and the day that comes as a thief, with Migne's lemma printing indoctas where the Vulgate has doctas
  'pl/114/epistola-ii-ad-timotheum',                              // Anselm of Laon and his school — the gloss on 2 Timothy; the deposit guarded, the soldier unentangled, and a lemma that drops the patience its own exposition rests on
  'pl/114/epistola-ii-ad-thessalonicenses',                       // Anselm of Laon and his school — the gloss on 2 Thessalonians; the man of sin and the restrainer, with Migne's refuga for the Vulgate's discessio — a deserter, not a departure
  'pl/114/epistola-i-ad-thessalonicenses',                        // Anselm of Laon and his school — the gloss on 1 Thessalonians; the dead in Christ and the day as a thief, and a lemma preserving an Ore the Vulgate does not print
  // — 2026-08-18 session: the Glossa's first cadence batch, five short New Testament books —
  'pl/114/epistola-ad-titum',                                     // Anselm of Laon and his school — the gloss on Titus; presbyters and bishops held apart, and the identification left as Migne's own act
  'pl/114/epistola-catholica-judae',                              // Anselm of Laon and his school — the gloss on Jude; the fallen angels, Cain and Balaam and Core, and a verse Migne misnumbers
  'pl/114/epistola-ad-philemonem',                                // Anselm of Laon and his school — the gloss on Philemon; Onesimus asked back as Paul's own viscera, with the debt charged to Paul
  'pl/114/epistola-iii-b-joannis',                                // Anselm of Laon and his school — the gloss on 3 John; Gaius, Diotrephes who loves the first place, and Demetrius
  'pl/114/epistola-ii-b-joannis',                                 // Anselm of Laon and his school — the gloss on 2 John; a warning against heretics, down to the refusal of the ordinary greeting
  // — 2026-08-18 session: the Glossa ordinaria opens, one small book first —
  'pl/113/liber-ruth',                                            // Anselm of Laon and his school — the standard medieval gloss on Ruth, read throughout as the calling of the Gentiles; the conventions pilot for the whole Glossa block
  // - 2026-08-18 session: the seventh Song commentary, and the first work carrying Migne's own conjecture notes -
  'pl/202/expositio-in-cantica-canticorum',                       // Gilbert Foliot - the Song verse by verse; 72 of Migne's foot-of-page conjectures recovered from the plate and printed on its cruces page
  // — 2026-08-17 session: Nebuchadnezzar's dreams read as the map of a soul's decline and repair —
  'pl/196/de-eruditione-hominis-interioris',                     // Richard of St Victor (attrib.) — the statue, the tree and the four beasts as stages of ruin; breaks off unfinished
  // — 2026-08-17 session: the sixth Song commentary, and the first work whose lemma words were named per agent —
  'pl/196/explicatio-in-cantica-canticorum',                     // Richard of St Victor (attrib.) — the Song verse by verse, 42 chapters, closing on a rhymed Marian laus
  // — 2026-08-15 session: the corpus's first liturgical ordo (Fable mini-pilot) —
  'pl/138/ordo-ad-regem-benedicendum',                           // Auctor incertus — a coronation rite from a 12th/13th-c. Vienna codex
  // — 2026-08-14 session: Ambrose enters the Song queue —
  'pl/15/commentarius-in-cantica-canticorum',                    // Ambrose of Milan — the Song read through an Old Latin / LXX text, not the Vulgate
  // — 2026-08-09 session: the largest work yet englished, and the same author twice running —
  'pl/203/commentaria-in-cantica-canticorum',                    // Philip of Harvengt — the full Song commentary, six books, 126,797 Latin words
  // — 2026-08-08 session (later): back to the PL Song-of-Songs queue —
  'pl/203/moralitates-in-cantica-canticorum',                    // Philip of Harvengt — the moral sense of the Song, seven Tomes
  // — 2026-08-08 session: first Dorotheus work; PG 88 opens —
  'pg/88/epistolae-ad-diversos',                                 // Dorotheus of Gaza — eight letters of spiritual direction, our own plate OCR
  // — 2026-08-05 session: third of the four Glabas sermons —
  'pg/139/sermo-iii-in-annuntiationem',                          // Isidore Glabas — the Annunciation, Sermon III of the set
  // — 2026-08-04 session: the Palestine block opens; FIRST PG work whose Greek is
  //   our own OCR of the plate rather than Calfa (PG 89 has no Calfa text) —
  'pg/89/the-letter-of-antiochus-the-monk-to-eustathius',        // Antiochus of Mar Saba — the 614 massacre of the Laura, to Eustathius of Ancyra
  // — 2026-08-01 session (later): first §8a.C queue addition after the PG gate opened —
  'pg/139/sermo-ii-in-praesentationem',                          // Isidore Glabas — Entry of the Theotokos into the Holy of Holies, Sermon II of the set
  // — 2026-08-01 session: the PG paired pilot ships, three works, three genres —
  'pg/118/commentarius-in-epistolam-ad-philippenses',            // Oecumenius catena — on Philippians, lemma-and-gloss (first PG 118 work)
  'pg/139/sermo-i-in-nativitatem',                               // Isidore Glabas — Nativity of the Theotokos, high Byzantine homily
  'pg/139/dialogi-de-processione-spiritus-sancti',               // Nicetas of Maroneia — Greek-Latin dialogue on the procession of the Spirit
  // — 2026-07-31 session (later) —
  'pl/115/enarrationes-in-cantica-canticorum',                   // Angelomus of Luxeuil — on the Song of Songs, dedicated to Emperor Lothair I
  // — 2026-07-31 session —
  'pl/112/commentaria-in-cantica',                               // Rabanus Maurus — on the ten canticles sung at Lauds
  // — 2026-07-30 session: the 53-chunk tier, largest single work in the corpus —
  'pl/70/expositio-in-cantica-canticorum',                       // ps.-Cassiodorus — on the Song of Songs
  'pl/175/homiliae-in-ecclesiasten',                             // Hugh of St Victor — nineteen homilies on Ecclesiastes
  // — 2026-07-29 session: 2 works, the 19- and 22-chunk tier —
  'pl/196/in-visionem-ezechielis',                               // Richard of St Victor — on Ezekiel's vision of the temple
  'pl/175/adnotatiunculae-in-threnos',                           // Hugh of St Victor — brief notes on Lamentations
  // — 2026-07-28 session (fifth): 3 works, 16- and 17-chunk tier —
  'pl/164/expositio-in-cantica-canticorum',                      // Bruno of Segni — on the Song of Songs (first of the Song commentaries)
  'pl/196/de-exterminatione-mali-et-promotione-boni',            // Richard of St Victor — the driving out of evil and the advancement of good
  'pl/176/expositio-in-regulam-s-augustini',                     // Hugh of St Victor — on the Rule of Augustine
  // — 2026-07-28 session (fourth): 4 works, 5- to 15-chunk tiers, smallest-first —
  'pl/175/adnotatiunculae-in-joelem',                            // Hugh of St Victor — brief notes on Joel
  'pl/196/expositio-de-tabernaculo',                             // Richard of St Victor — on the tabernacle, with the concordance of regnal years
  'pl/175/expositio-in-abdiam',                                  // Hugh of St Victor — on Obadiah
  'pl/196/sermo-de-missione-spiritus-sancti',                    // Richard of St Victor — on the sending of the Holy Spirit
  // — 2026-07-28 session (later): 6 works, 6- to 9-chunk tiers, smallest-first —
  'pl/176/de-sacramentis-legis-naturalis-et-scriptae',          // Hugh of St Victor — on the sacraments of the natural and written law
  'pl/196/de-verbo-incarnato',                                  // Richard of St Victor — on the Word incarnate
  'pl/175/adnotationes-in-libros-regum',                        // Hugh of St Victor — notes on the books of Kings
  'pl/176/de-virginitate-b-mariae',                             // Hugh of St Victor — on the virginity of the Blessed Mary
  'pl/196/explicatio-aliquorum-passuum-difficilium-apostoli',   // Richard of St Victor — some difficult passages of the Apostle explained
  'pl/175/de-scripturis-et-scriptoribus-sacris',                // Hugh of St Victor — on the sacred writings and their writers
  // — 2026-07-28 session: 6 works, 4- and 5-chunk tiers, smallest-first —
  'pl/196/de-gemino-paschate',                                 // Richard of St Victor — on the twofold Passover
  'pl/196/de-differentia-sacrificii-abrahae-a-sacrificio-b-mariae-virginis', // Richard of St Victor — Abraham's sacrifice vs. the Virgin's
  'pl/196/de-sacrificio-david-prophetae',                      // Richard of St Victor — on the sacrifice of David the prophet
  'pl/176/de-modo-orandi',                                     // Hugh of St Victor — on the manner of praying
  'pl/176/de-sapientia-animae-christi',                        // Hugh of St Victor — on the wisdom of Christ's soul
  'pl/145/de-dignitate-sacerdotii',                            // Peter Damian — on the dignity of the priesthood
  // — 2026-07-24 session: 9 works, 3-chunk tier, smallest-first —
  'pl/145/de-picturis-principum-apostolorum',                  // Peter Damian — on the pictures of the chief apostles
  'pl/173/epistolae',                                          // Peter the Deacon — letters
  'pl/190/vita-et-passio-s-thomae-cantuariensis',              // (Elias of Evesham?) — life & passion of Thomas of Canterbury
  'pl/204/annales',                                            // Annals of Saint-Vanne, Verdun
  'pl/150/liber-qualiter-adventus-domini-celebretur',          // Berno of Reichenau — how Advent is to be celebrated
  'pl/13/addenda',                                             // Various — addenda to the Damasus volume
  'pl/47/sermones',                                            // ps.-Augustine — sermons
  'pl/83/norma-vivendi',                                       // Anonymous — a rule of living
  'pl/101/dubia-alia',                                         // ps.-Alcuin — miscellaneous dubia
  // — 2026-07-20 session (Set A): 10 works, 2-chunk tier —
  'pl/17/philosophorum-aliquot-epistolae',                     // Various — letters of the Seven Sages
  'pl/87/analecta',                                            // Various — analecta
  'pl/90/de-computo',                                          // (Bede?) — on the computus (numeral dialogue)
  'pl/94/chronicon-breve',                                     // Anonymous — a short chronicle
  'pl/96/tractatus',                                           // Anonymous — tractate on the descent to hell
  'pl/98/appendix-ad-epistolas',                               // Various — appendix to the letters
  'pl/134/testamentum',                                        // Atto of Vercelli et al. — testament
  'pl/137/appendix-ad-translationem-corporis-s-hunegundis',    // Anonymous — appendix to the translation of St Hunegund
  'pl/138/de-prandio-monachorum',                              // Anonymous — on the monks' meal
  'pl/141/de-monasterio-fructuariensi',                        // Anonymous — on the monastery of Fruttuaria
  // — 2026-07-18/19 session: 19 works, smallest-first across the whole frontier —
  'pl/18/exhortatio-ad-monachos',                               // Anonymous — exhortation to monks
  'pl/184/in-festo-s-andreae',                                  // Nicholas of Clairvaux — for the feast of St Andrew
  'pl/144/vita-s-mauri',                                        // Peter Damian — life of St Maurus
  'pl/144/passio-ss-florae-et-lucillae',                        // Peter Damian — passion of SS. Flora and Lucilla
  'pl/104/de-modo-regiminis-ecclesiastici',                     // Agobard of Lyon — on the manner of church governance
  'pl/150/de-celanda-confessione',                              // Lanfranc of Canterbury — on keeping confession secret
  'pl/145/de-castitate-et-mediis-eam-tuendi',                   // Peter Damian — chastity and the means of guarding it
  'pl/125/quae-exsequi-debeat-episcopus',                       // Hincmar of Reims — what a bishop must carry out
  'pl/59/sermo-in-rogationibus',                                // Avitus of Vienne — sermon for the Rogations
  'pl/42/de-unitate-sanctae-trinitatis',                        // Anonymous — the unity of the Holy Trinity
  'pl/184/in-parabolam-de-decem-virginibus',                    // Anonymous — the parable of the ten virgins
  'pl/125/instructio-ad-ludovicum-balbum',                      // Hincmar of Reims — instruction to Louis the Stammerer
  'pl/112/de-passione-domini',                                  // Rabanus Maurus — on the Lord's passion
  'pl/101/vita-s-martini-turonensis',                           // Alcuin — life of St Martin of Tours
  'pl/207/de-divisione-et-scriptoribus-sacrorum-librorum',      // Peter of Blois — division and authors of the sacred books
  'pl/183/flores-seu-sententiae-ex-s-bernardo',                 // Anonymous — florilegium of Bernard
  'pl/162/epistola',                                            // Anselm of Laon — letter
  'pl/160/homilia-de-villico-iniquitatis',                      // Odo of Cambrai — homily on the unjust steward
  'pl/155/de-primordiis-et-inventione-sacrae-religionis-hierosolymorum', // Anonymous — origins of the Hospitallers
  'pl/196/declarationes-nonnullarum-difficultatum-scripturae',  // Richard of St Victor — resolving scriptural difficulties
  'pl/175/adnotatiunculae-in-librum-judicum',                   // Hugh of St Victor — notes on Judges
  'pl/196/de-judiciaria-potestate-in-finali-et-universali-judicio', // Richard of St Victor — judiciary power at the last judgment
  'pl/176/institutiones-in-decalogum',                          // Hugh of St Victor — instruction on the Decalogue
  'pl/176/de-fructibus-carnis-et-spiritus',                     // Hugh of St Victor — the fruits of flesh and spirit
  'pl/196/de-superexcellenti-baptismo-christi',                 // Richard of St Victor — the surpassing baptism of Christ
  'pl/176/epistolae',                                           // Hugh of St Victor — letters
  'pl/196/de-spiritu-blasphemiae',                              // Richard of St Victor — the spirit of blasphemy
  'pl/176/de-quatuor-voluntatibus-in-christo',                  // Hugh of St Victor — the four wills in Christ
  'pl/196/epistolae-et-miscellanea',                            // Richard of St Victor — letters & miscellany
  'pl/196/quomodo-christus-ponitur-in-signum-populorum',        // Richard of St Victor — Christ set as a sign
  'pl/196/de-tribus-appropriatis-personis-in-trinitate',        // Richard of St Victor — the three appropriations in the Trinity
  'pl/176/de-potestate-et-voluntate-dei',                       // Hugh of St Victor — the power and will of God
  'pl/196/quomodo-spiritus-sanctus-est-amor-patris-et-filii',   // Richard of St Victor — the Spirit as love of Father and Son
  'pl/196/de-comparatione-christi-ad-florem-et-mariae-ad-virgam', // Richard of St Victor — Christ the flower, Mary the rod
  'pl/175/adnotatiuncula-in-librum-ruth',                       // Hugh of St Victor — note on Ruth
  'pl/50/commonitoria',                                         // Vincent of Lérins — Commonitorium (fresh rendering of a translated classic)
  'pl/175/quaestiones-in-epistolas-pauli',                      // Hugh of St Victor (Victorine school) — Pauline questions
  'pl/175/expositio-in-hierarchiam-coelestem-s-dionysii',       // Hugh of St Victor (Victorine school) — Ps.-Dionysius commentary
  'pl/67/explicatio-in-cantica-canticorum',                     // Justus of Urgell — earliest Latin Song commentary
  'pl/100/in-cantica-canticorum',                               // Alcuin
  'pl/184/commentatio-in-cantica-canticorum-ex-bernardo-contexta', // William of St-Thierry
  'pl/175/explanatio-in-canticum-b-mariae',                     // Hugh of St Victor — Magnificat
  'pl/40/expositio-cantici-magnificat',                         // Anonymous (ps.-Augustine) — Magnificat
  'pl/150/commentaria-in-cantica-canticorum',                   // Robert of Tombelaine
  'pl/162/enarrationes-in-cantica-canticorum',                  // Anselm of Laon
  'pl/117/commentarium-in-cantica-canticorum',                  // Haimo
  'pg/139/chronographia',                                       // Joel (live)
  'pl/139/canones',                                             // Abbo (live)
];

const fmt = n => n.toLocaleString('en-US');

// ---------- scan built work pages: the englished set ----------

// pair partner of a Migne PG column (Greek|Latin spread): 223|224, 287|288 …
const partner = n => (n % 2 === 0 ? n - 1 : n + 1);

const works = [];
for (const series of ['pl', 'pg']) {
  const seriesDir = path.join(ROOT, 'site', series);
  if (!fs.existsSync(seriesDir)) continue;
  for (const vol of fs.readdirSync(seriesDir)) {
    if (!/^\d+$/.test(vol)) continue;
    for (const slug of fs.readdirSync(path.join(seriesDir, vol))) {
      const page = path.join(seriesDir, vol, slug, 'index.html');
      if (!fs.existsSync(page)) continue;
      const html = fs.readFileSync(page, 'utf8');
      const t = html.match(/<title>(.*?), (.*?) — P[LG] \d+, \d+–\d+ · Migne<\/title>/);
      if (!t) { console.error(`cannot parse <title> of ${page}`); process.exit(1); }
      const anchors = [...new Set([...html.matchAll(/id="c(\d+[a-d]?)"/g)].map(m => m[1]))];
      if (!anchors.length) { console.error(`no column anchors in ${page}`); process.exit(1); }
      const nums = anchors.map(a => parseInt(a, 10));
      let colFirst = Math.min(...nums), colLast = Math.max(...nums);
      if (series === 'pg') {
        // anchors are the Greek columns only; the citable range spans the pair
        colFirst = Math.min(colFirst, partner(colFirst));
        colLast = Math.max(colLast, partner(colLast));
      }
      // the page states its own identity; the title never identified it (see
      // scripts/lib/first-english.mjs on the 176 colliding volume+title keys).
      const idno = (html.match(/<meta name="migne-idno" content="(\d+)">/) || [])[1] ?? null;
      works.push({
        series, vol: parseInt(vol, 10), slug, path: `/${series}/${vol}/${slug}/`,
        title: t[2], author: t[1], colFirst, colLast, anchors, idno,
      });
    }
  }
}

// ---------- registries: volumes, counts, queue ----------

const volReg = JSON.parse(read('data/volumes.json'));
const volumes = { pl: {}, pg: {} };
for (const v of volReg.volumes) {
  const series = v.series.toLowerCase();
  const num = String(parseInt(v.tome, 10)); // split tomes (PG 7-1, 7-2 …) share a number
  const arch = v.links.find(l => l.source === 'archive');
  // every real volume gets an entry (the resolver validates ranges against
  // this map); scan only where an archive.org copy exists
  if (!volumes[series][num]) volumes[series][num] = arch ? { scan: arch.id } : {};
  else if (arch && !volumes[series][num].scan) volumes[series][num].scan = arch.id;
}
volumes.pg['162'] = { ghost: true };
const plCount = new Set(volReg.volumes.filter(v => v.series === 'PL').map(v => parseInt(v.tome, 10))).size;
const pgCount = new Set(volReg.volumes.filter(v => v.series === 'PG').map(v => parseInt(v.tome, 10))).size;
if (plCount !== 221 || pgCount !== 161) {
  console.error(`unexpected shelf counts: PL ${plCount}, PG ${pgCount}`); process.exit(1);
}

const worksData = JSON.parse(read('data/works.json'));
const counts = worksData.counts;

// PG works live outside the PL-derived works.json, so they are looked up in their
// own register. This READS data/pg-works.json rather than hardcoding a list: that
// file already carried `translationStatus` + `translationStatusVerified` per work
// and no script read either field, so the status was being maintained by hand and
// then ignored (2026-07-28). A PG work claims "first" only on an explicit verified
// none — never by defaulting, so a lookup miss cannot inherit the claim.
const PG_FIRSTS = (() => {
  const p = path.join(ROOT, 'data/pg-works.json');
  if (!fs.existsSync(p)) return new Set();
  const out = new Set();
  for (const w of (JSON.parse(fs.readFileSync(p, 'utf8')).works ?? [])) {
    if (w.translationStatus === 'none' && w.translationStatusVerified)
      out.add(`/${w.series}/${w.volume}/${w.slug}/`);
  }
  return out;
})();

// The priority badge. Rule, sets and lookup all live in
// scripts/lib/first-english.mjs — imported, never re-implemented, because this
// claim has already failed twice by being written in two places at once.
const plStatus = loadPlStatusByIdno(ROOT);
const isFirstEnglish = w => w.series === 'pg'
  ? PG_FIRSTS.has(w.path)
  : isFirstEnglishPL(w.idno, plStatus, m => console.warn(`  (${w.path}: ${m})`));

// ⛔ THE CHECK THAT WOULD HAVE CAUGHT BOTH FAILURES. The badge is written on two
// surfaces — this landing page and the work page one click below — and twice now
// they have disagreed in production, each time invisibly: status codes are 200 on
// both, and no reader compares them. Every built page is already in hand here, so
// assert that what a page SAYS about itself equals what this build COMPUTES for it.
// Sharing the helper makes divergence unlikely; this makes it loud.
const claimDrift = [];
for (const w of works) {
  const html = fs.readFileSync(path.join(ROOT, 'site', w.path, 'index.html'), 'utf8');
  const m = html.match(/<span class="first( fresh)?">([^<]+)<\/span>/);
  const onPage = m ? m[2] : '(no badge)';
  const computed = isFirstEnglish(w) ? 'First English translation' : 'New English translation';
  if (onPage !== computed) claimDrift.push(`  ${w.path}  page says "${onPage}", landing computes "${computed}"`);
}
if (claimDrift.length) {
  console.error(`${claimDrift.length} work page(s) disagree with the landing about the priority claim:`);
  console.error(claimDrift.join('\n'));
  console.error('Rebuild the work pages (node scripts/build-work-page.mjs <idno>) — do NOT deploy this.');
  process.exit(1);
}

const authorsReg = JSON.parse(read('data/triage/authors-status.json'));
const queueAuthors = authorsReg.authors.filter(a => a.status === 'none' && a.verified).length;

// ---------- shelves, server-rendered ----------

function shelfHtml(series, count, { ghost } = {}) {
  const S = series.toUpperCase();
  const spines = [];
  for (let i = 1; i <= count; i++) {
    const tall = i % 9 === 0 ? ' tall' : '';
    const w = works.find(x => x.series === series && x.vol === i);
    if (w) {
      spines.push(`<a class="spine englished${tall}" href="${w.path}" title="${S} ${i} — ${w.author}, ${w.title}"></a>`);
    } else {
      spines.push(`<span class="spine${tall}" title="${S} ${i}"></span>`);
    }
  }
  if (ghost) spines.push(`<span class="spine ghost" title="${S} ${ghost} — destroyed in the fire of 1868"></span>`);
  return spines.join('');
}

// ---------- recently englished ----------

const recent = RECENT.map(p => {
  const w = works.find(x => x.path === `/${p}/`);
  if (!w) { console.error(`RECENT lists ${p} but no built page found`); process.exit(1); }
  return w;
});
for (const w of works) {
  if (!RECENT.includes(w.path.slice(1, -1))) {
    console.error(`built work ${w.path} is not in the RECENT list — add it (newest first)`);
    process.exit(1);
  }
}
const recentHtml = recent.map(w => {
  const badge = badgeHtml(isFirstEnglish(w));
  return `    <li>
      <span class="work"><a href="${w.path}">${w.author}, <i>${w.title}</i></a>${badge}</span>
      <span class="cite">${w.series.toUpperCase()} ${w.vol}, ${w.colFirst}–${w.colLast}</span>
    </li>`;
}).join('\n');

// ---------- the landing page ----------

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Migne — Patrologiæ Cursus Completus, open</title>
<meta name="description" content="Every column of Migne's Patrologia Latina and Graeca, readable and citable — and, work by work, for the first time in English.">
<link rel="canonical" href="https://migne.app/">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Migne">
<meta property="og:title" content="Migne — Patrologiæ Cursus Completus, open">
<meta property="og:description" content="Every column of Migne's Patrologia Latina and Graeca, readable and citable — and, work by work, for the first time in English.">
<meta property="og:url" content="https://migne.app/">
<meta property="og:image" content="https://migne.app/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Migne — a shelf of Patrologia volumes in vert-empire green and gilt, with PG 162 shown as a ghost.">
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Migne — Patrologiæ Cursus Completus, open">
<meta name="twitter:description" content="Every column of Migne's Patrologia Latina and Graeca, readable and citable — and, work by work, for the first time in English.">
<meta name="twitter:image" content="https://migne.app/og.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<script defer src="/_vercel/insights/script.js"></script>
</head>
<body>

<header class="bar">
  <a class="wordmark" href="/">MIGNE<span class="tld">.APP</span></a>
${nav()}
</header>

<section class="titlepage">
  <hr class="rule-heavy">
  <hr class="rule-light">
  <h1>PATROLOGIÆ<br>CURSUS COMPLETUS</h1>
  <p class="series">OMNIUM SS. PATRUM, DOCTORUM SCRIPTORUMQUE ECCLESIÆ</p>
  <p class="fleuron">❦</p>
  <p class="thesis">Every column of the Latin and Greek Fathers, readable and citable — and, work by work, <b>for the first time in English.</b></p>
</section>

<section class="resolver" aria-label="Citation resolver">
  <form action="/resolve/" method="get">
    <select name="s" aria-label="Series">
      <option value="pl">PL</option>
      <option value="pg">PG</option>
    </select>
    <input type="text" name="vc" placeholder="139 : 473 A" aria-label="Volume and column">
    <button type="submit">RESOLVE</button>
  </form>
  <p class="hint">Any Migne citation is an address here — <a href="/pl/139/473a">PL 139, 473A → Abbo of Fleury, <i>Canones</i></a></p>
</section>

<section class="shelves" aria-label="The corpus, volume by volume">
  <div class="shelf-head">
    <h2>The Shelf</h2>
    <span class="legend"><span class="gilt-dot"></span>gilt label — carries English &nbsp;·&nbsp; dashed — PG 162, burned 1868</span>
  </div>
  <div class="shelf" id="shelf-pl-sec">
    <div class="shelf-inner" id="shelf-pl"><span class="shelf-label">PL&nbsp;1–221</span>${shelfHtml('pl', 221)}</div>
  </div>
  <div style="height:6px"></div>
  <div class="shelf" id="shelf-pg-sec">
    <div class="shelf-inner" id="shelf-pg"><span class="shelf-label">PG&nbsp;1–161</span>${shelfHtml('pg', 161, { ghost: 162 })}</div>
  </div>
</section>

<section class="ledger" aria-label="The corpus in figures">
  <div class="entry">
    <div class="figure">${fmt(counts.words)}</div>
    <div class="gloss">Latin words in the Patrologia Latina — ${fmt(counts.works)} works across ${fmt(plCount)} volumes, every one mapped and citable here from the start.</div>
  </div>
  <div class="entry">
    <div class="figure">387 volumes</div>
    <div class="gloss">PL 1–221 and PG 1–161, published 1844–1866 at Petit-Montrouge. Volume 162 of the Greek series burned before publication; its ghost keeps its place on the shelf.</div>
  </div>
  <div class="entry">
    <div class="figure">${fmt(queueAuthors)} authors</div>
    <div class="gloss"><em>verified never translated</em> — millions of words with no English in 180 years. That is the queue this site exists to work through.</div>
  </div>
</section>

<section class="recent" id="recent" aria-label="Recently Englished">
  <h2>Recently Englished</h2>
  <ol>
${recentHtml}
  </ol>
</section>

<section class="support" aria-label="Support the translation">
  <h2>Support the Translation</h2>
  <p>The Patrologia has never been Englished, and at 387 volumes it never will be by hand. This site translates it work by work: the map of every column is built and citable; what remains is a compute bill. Contributions go directly to the queue — ${fmt(queueAuthors)} authors with no English in 180 years.</p>
  <div class="support-tiers">
    <a href="https://buy.stripe.com/6oUcN4fPfb5cfQS6Lh4gg06" target="_blank" rel="noopener">$10 &mdash; a column</a>
    <a href="https://buy.stripe.com/fZu14mdH74GObAC4D94gg07" target="_blank" rel="noopener">$300 &mdash; a work</a>
    <a href="https://buy.stripe.com/cNi5kC8mN2yG5ce6Lh4gg0b" target="_blank" rel="noopener">$10/mo &mdash; patron</a>
  </div>
  <p class="support-fine">Migne ran his press as a funded enterprise; the translation runs the same way. Everything here is free and stays free whether you give or not. Wroot Press is a small independent press — an imprint of Wroot Labs LLC, not a charity. Contributions aren't tax-deductible; they buy compute.</p>
</section>

<footer class="colophon">
  <p class="motto">Du bon, à bon marché — carried to its limit: <span class="free">the good, free.</span></p>
  <p class="migne-line">“I confess to you in closing that my ambition is to die as the priest who will have been the most useful to the Church.” — J.-P. Migne to Dom Pitra, 1863</p>
  <p class="fine">A WROOT PRESS WORK · THE TEXTS ARE THE CHURCH'S · THE SITE IS YOURS</p>
  <p class="fine rights">The Latin and Greek are public domain. The English translations, notes, and structured text are &copy; 2026 Wilson Pruitt, licensed <a href="/rights/">CC BY&#8209;NC&nbsp;4.0</a> &mdash; free to share and build on, not to sell. <a href="/rights/">Commercial use, ask.</a></p>
</footer>

<script>
/* The URL scheme IS the product: submit navigates to the citation address
   itself; the form action stays as a no-JS fallback to /resolve/. */
document.querySelector('.resolver form').addEventListener('submit', function (e) {
  var m = this.vc.value.trim()
    .match(/^(?:p\\.?\\s*[lg]\\.?\\s*)?(\\d{1,3})[\\s.:,;·]+(\\d{1,4})[\\s.]*([a-dA-D]?)\\.?$/);
  if (!m) return;
  e.preventDefault();
  location.assign('/' + this.s.value + '/' + parseInt(m[1], 10) + '/' +
    parseInt(m[2], 10) + (m[3] || '').toLowerCase());
});
</script>

</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, 'site/index.html'), html);

// ---------- resolver data ----------

const resolverData = {
  works: works.map(w => ({
    series: w.series, vol: w.vol, slug: w.slug, path: w.path,
    title: w.title, author: w.author,
    colFirst: w.colFirst, colLast: w.colLast, anchors: w.anchors,
  })),
  volumes,
};
fs.writeFileSync(path.join(ROOT, 'site/resolver-data.json'), JSON.stringify(resolverData));

console.log(`built site/index.html (${works.length} englished works, PL ${plCount} + PG ${pgCount}+ghost spines, queue ${queueAuthors}) + site/resolver-data.json (${Object.keys(volumes.pl).length} PL / ${Object.keys(volumes.pg).length} PG volume scans)`);
