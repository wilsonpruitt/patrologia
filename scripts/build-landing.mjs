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

const ROOT = path.join(import.meta.dirname, '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

// Recently Englished is editorial: newest first. Prepend when a work ships.
const RECENT = [
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
      works.push({
        series, vol: parseInt(vol, 10), slug, path: `/${series}/${vol}/${slug}/`,
        title: t[2], author: t[1], colFirst, colLast, anchors,
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

// translation status per work, keyed by volume + numeric first column (e.g. "50/637").
// Used to decide the RECENT badge: a work with a prior English (workStatus
// pd-ingested/copyrighted — a DELIBERATE re-translation) must NOT claim "First English
// translation". Genuine untranslated-first works (workStatus none, or ours-from-none)
// keep the "first" claim.
const PRIOR_ENGLISH = new Set(['pd-ingested', 'copyrighted', 'elsewhere']);
const normTitle = s => String(s).toLowerCase().replace(/\s+/g, ' ').trim();
const transByTitle = new Map(); // `${vol}/${normTitle}` -> translation (volume+title is unique; vol+colFirst is not — packed short works share a column)
for (const wk of (worksData.works || worksData)) {
  for (const t of (wk.texts || [])) transByTitle.set(`${t.volume}/${normTitle(t.title)}`, wk.translation || {});
}
// A status that does NOT affirmatively establish a verified none. Anything here,
// plus anything unrecognized, gets the weak claim.
const NOT_VERIFIED_NONE = new Set(['unclear', 'partial', 'mixed', 'minimal', null, undefined]);

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

const isFirstEnglish = w => {
  // FAIL SAFE (CLAUDE.md rule 8, 2026-07-28). "First English translation" is a
  // public assertion of scholarly priority and the one claim on this site a reader
  // cannot check. Absence of evidence is NOT evidence of a first, so a missing,
  // unclear, or unrecognized status renders "New English translation".
  //
  // This previously defaulted the OTHER way — a missing lookup claimed "first" —
  // and `unclear` fell through the prior-English set entirely. Three works shipped
  // a false "First" badge as a result (11545, 11546, 11548), two of them with
  // triage notes explicitly recording an unconfirmed claim that a VTT translation
  // exists. The weak claim is always true of our work, so this default costs
  // nothing; the strong one, wrongly made, is not recoverable.
  //
  // Do NOT resolve an unknown by going to verify it — rule 8 is explicit that the
  // badge never justifies a research task. Take the weak claim and move on.
  const tr = transByTitle.get(`${w.vol}/${normTitle(w.title)}`);
  if (!tr) {
    // PG pilot works (Joel etc.) aren't in the PL-derived works.json. They are in
    // fact genuine firsts, but they are hand-listed in PG_FIRSTS rather than
    // trusted by default, so a PL miss can never silently inherit the claim.
    if (PG_FIRSTS.has(w.path)) return true;
    console.warn(`  (no works.json status for ${w.path} — using "New English translation")`);
    return false;
  }
  if (NOT_VERIFIED_NONE.has(tr.workStatus)) {
    console.warn(`  (${w.path}: workStatus "${tr.workStatus}" is not a verified none — using "New English translation")`);
    return false;
  }
  return !PRIOR_ENGLISH.has(tr.workStatus);
};

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
  const badge = isFirstEnglish(w)
    ? '<span class="first">First English translation</span>'
    : '<span class="first fresh">New English translation</span>';
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
