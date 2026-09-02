#!/usr/bin/env node
// Build /glossa/ — the Glossa ordinaria held together in one place, book by book.
//
// Usage: node scripts/build-glossa.mjs
//
// Why this page exists (Wilson, 2026-08-18): the gloss is 58 separate works in
// works.json, and as more of them are Englished a reader has no way to see them as
// the one book they are. The authors index lists them under their author but flat,
// in whatever order and only once Englished; /latina/ scatters them across two
// volumes. This page puts them in BIBLICAL order and shows the whole shape at once.
//
// ⚠ Deliberately NOT in the nav (his call). It is reached from the Glossa work pages
// themselves — build-work-page.mjs emits a link to it on any work in this set — which
// is the path a reader actually takes: they arrive at one book and want the others.
//
// GENERATED, never hand-edited. The set is selected by AUTHOR, not by a title grep:
// "Anselmus Laudunensis et schola" gives exactly the 58 books of Migne's recension and
// keeps Walafrid's own works (the Hortulus, the Vita S. Galli, the verses) out of it —
// a title grep for "Glossa" or "Walafrid" pulls all of those in.

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const read = p => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const fmt = n => Number(n).toLocaleString('en-US');

const AUTHOR = 'Anselmus Laudunensis et schola';

// ⚑ Two works in these tomes are NOT the Glossa and no longer carry the Glossa author,
// so they must be named explicitly or they vanish from this page (2026-09-02). Migne gives
// each its own title block under WALAFRIDI STRABI FULDENSIS MONACHI, with its own editorial
// preface — Martianay's Admonitio for the Gospels (cols 861-916), Pez's Monitum for the
// Psalms (cols 751-794) — and Pez's preface explicitly distinguishes his Walafridian psalms
// exposition FROM the ordinaria, inviting the learned to note the discrimen between them.
// They are kept on this page anyway, and labelled 'a separate exposition', because the page
// shows what Migne prints under this head and a reader who arrives at one of the 58 wants
// to find them. Their BYLINE tells the truth even though their place here is editorial.
// 9003 still reaches this page through AUTHOR and is pending the same byline correction.
const ALSO_PRINTED_HERE = new Set(['9004']);
const works = read('data/works.json').works;
const scan = new Map(read('data/chunk-scan.json').results.map(r => [String(r.idno), r]));

// Biblical order, with the English name a reader looks for. The two entries that are
// not books of the Bible — Migne's separate exposition of the first twenty psalms, and
// the harmony on the four Gospels — sit beside the book they belong to rather than
// being hidden, because they are part of what he prints under this head.
const ORDER = [
  ['Liber Genesis', 'Genesis', 'ot'],
  ['Liber Exodus', 'Exodus', 'ot'],
  ['Liber Leviticus', 'Leviticus', 'ot'],
  ['Liber Numeri', 'Numbers', 'ot'],
  ['Liber Deuteronomii', 'Deuteronomy', 'ot'],
  ['Liber Josue Ben Nun', 'Joshua', 'ot'],
  ['Liber Judicum', 'Judges', 'ot'],
  ['Liber Ruth', 'Ruth', 'ot'],
  ['Liber I Regum', 'I Kings (I Samuel)', 'ot'],
  ['Liber II Regum', 'II Kings (II Samuel)', 'ot'],
  ['Liber III Regum', 'III Kings (I Kings)', 'ot'],
  ['Liber IV Regum', 'IV Kings (II Kings)', 'ot'],
  ['Liber Paralipomenon I', 'I Paralipomenon (I Chronicles)', 'ot'],
  ['Liber Paralipomenon II', 'II Paralipomenon (II Chronicles)', 'ot'],
  ['Liber I Esdrae', 'I Esdras (Ezra)', 'ot'],
  ['Liber Nehemiae', 'Nehemiah', 'ot'],
  ['Liber Tobiae', 'Tobit', 'ot'],
  ['Liber Judith', 'Judith', 'ot'],
  ['Liber Esther', 'Esther', 'ot'],
  ['Liber Job', 'Job', 'ot'],
  ['Liber Psalmorum', 'Psalms', 'ot'],
  ['Expositio in XX primos Psalmos', 'Psalms I–XX, a separate exposition', 'ot'],
  ['Liber Proverbiorum', 'Proverbs', 'ot'],
  ['Liber Ecclesiastes', 'Ecclesiastes', 'ot'],
  ['Canticum Canticorum', 'The Song of Songs', 'ot'],
  ['Liber Sapientiae', 'Wisdom', 'ot'],
  ['Liber Ecclesiasticus', 'Ecclesiasticus (Sirach)', 'ot'],
  ['Liber Isaiae prophetae', 'Isaiah', 'ot'],
  ['Prophetia Jeremiae', 'Jeremiah', 'ot'],
  ['Prophetia Baruch', 'Baruch', 'ot'],
  ['Evangelium secundum Matthaeum', 'Matthew', 'nt'],
  ['Evangelium secundum Marcum', 'Mark', 'nt'],
  ['Evangelium secundum Lucam', 'Luke', 'nt'],
  ['Evangelium secundum Joannem', 'John', 'nt'],
  ['Expositio in quatuor Evangelia', 'The four Gospels, a separate exposition', 'nt'],
  ['Actus Apostolorum', 'Acts', 'nt'],
  ['Epistola ad Romanos', 'Romans', 'nt'],
  ['Epistola I ad Corinthios', 'I Corinthians', 'nt'],
  ['Epistola II ad Corinthios', 'II Corinthians', 'nt'],
  ['Epistola ad Galatas', 'Galatians', 'nt'],
  ['Epistola ad Ephesios', 'Ephesians', 'nt'],
  ['Epistola ad Philippenses', 'Philippians', 'nt'],
  ['Epistola ad Colossenses', 'Colossians', 'nt'],
  ['Epistola I ad Thessalonicenses', 'I Thessalonians', 'nt'],
  ['Epistola II ad Thessalonicenses', 'II Thessalonians', 'nt'],
  ['Epistola I ad Timotheum', 'I Timothy', 'nt'],
  ['Epistola II ad Timotheum', 'II Timothy', 'nt'],
  ['Epistola ad Titum', 'Titus', 'nt'],
  ['Epistola ad Philemonem', 'Philemon', 'nt'],
  ['Epistola ad Hebraeos', 'Hebrews', 'nt'],
  ['Epistola canonica B. Jacobi', 'James', 'nt'],
  ['Epistola I B. Petri', 'I Peter', 'nt'],
  ['Epistola II B. Petri', 'II Peter', 'nt'],
  ['Epistola I B. Joannis', 'I John', 'nt'],
  ['Epistola II B. Joannis', 'II John', 'nt'],
  ['Epistola III B. Joannis', 'III John', 'nt'],
  ['Epistola Catholica Judae', 'Jude', 'nt'],
  ['Apocalypsis B. Joannis', 'The Apocalypse', 'nt'],
];
const rank = new Map(ORDER.map(([lat], i) => [lat, i]));
const english = new Map(ORDER.map(([lat, en]) => [lat, en]));
const testament = new Map(ORDER.map(([lat, , t]) => [lat, t]));

const rows = [];
for (const w of works) {
  const inSet = w.author === AUTHOR || (w.texts || []).some(t => ALSO_PRINTED_HERE.has(String(t.idno)));
  if (!inSet) continue;
  for (const t of w.texts || []) {
    const idno = String(t.idno);
    const s = scan.get(idno) || {};
    const slug = t.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const href = `/pl/${t.volume}/${slug}/`;
    // "Englished" is asserted from the BUILT PAGE, not from a flag: a work whose page
    // has not been built must never be offered to a reader as a link.
    const built = fs.existsSync(path.join(ROOT, 'site', href.slice(1), 'index.html'));
    const prepared = fs.existsSync(path.join(ROOT, 'src/latin', idno, 'manifest.json'));
    rows.push({
      idno, vol: t.volume, title: t.title, href, built, prepared,
      book: english.get(t.title) || t.title,
      testament: testament.get(t.title) || 'ot',
      words: s.sourceWords || 0,
      chunks: s.chunkCount || 0,
      rank: rank.has(t.title) ? rank.get(t.title) : 999,
    });
  }
}
rows.sort((a, b) => a.rank - b.rank);

const unplaced = rows.filter(r => r.rank === 999);
if (unplaced.length) {
  // A new title with no place in ORDER would otherwise pile up silently at the end of
  // the New Testament, which is worse than a loud failure.
  console.error(`⛔ not in the biblical-order table: ${unplaced.map(r => r.title).join(', ')}`);
  process.exit(1);
}

const englished = rows.filter(r => r.built);
const prepared = rows.filter(r => !r.built && r.prepared);
const totalWords = rows.reduce((n, r) => n + r.words, 0);

const rowHtml = r => {
  const state = r.built
    ? `<span class="g-state g-done">Englished</span>`
    : r.prepared
      ? `<span class="g-state g-prep">prepared &middot; ${r.chunks} ${r.chunks === 1 ? 'chunk' : 'chunks'}</span>`
      : `<span class="g-state">not yet Englished</span>`;
  const name = r.built
    ? `<a href="${r.href}">${esc(r.book)}</a>`
    : `<span class="g-name">${esc(r.book)}</span>`;
  return `      <li class="grow${r.built ? ' is-done' : ''}">
        <span class="g-book">${name}</span>
        <span class="g-latin"><i>${esc(r.title)}</i></span>
        <span class="g-meta"><span class="g-cite">PL ${r.vol}</span><span class="g-words">${fmt(r.words)} words</span>${state}</span>
      </li>`;
};

const section = (t, label) => `    <h2 class="g-testament">${label}</h2>
    <ol class="glist">
${rows.filter(r => r.testament === t).map(rowHtml).join('\n')}
    </ol>`;

const html = `${head({
  title: 'The Glossa ordinaria — book by book · Migne',
  description: `Migne's recension of the Glossa ordinaria, the standard medieval commentary on the Bible: ${rows.length} books in biblical order, ${englished.length} of them Englished so far.`,
  path: '/glossa/',
})}

${header()}

<main class="glossa">
  <div class="vi-head">
    <p class="kicker">One commentary, fifty-eight books</p>
    <h1>The Glossa ordinaria</h1>
    <p class="lede">The gloss a medieval reader met in the margins of the Bible: comment drawn from the Fathers — Rabanus, Isidore, Bede, Jerome, Gregory — gathered in the schools of the twelfth century and named, as it goes, for the men it quotes. Migne prints it across two volumes and it reaches us as ${rows.length} separate works. It is one book, so here it is in the order of the Bible.</p>
    <p class="legend">${englished.length} Englished &middot; ${prepared.length} prepared &middot; ${rows.length} books &middot; ${fmt(totalWords)} Latin words</p>
  </div>

  <div class="g-honest">
    <h2>What this is, exactly</h2>
    <p><b>This is Migne's abridged nineteenth-century recension</b>, not the medieval gloss as a manuscript or the <i>editio princeps</i> gives it. What that means for a reader, plainly:</p>
    <ul>
      <li><b>The marginal glosses only.</b> The interlinear layer — the short notes written between the lines of the Bible text itself — is not here.</li>
      <li><b>Fifty-eight books, not the whole Bible.</b> The New Testament is complete. The Old lacks Lamentations, Ezekiel, Daniel, the twelve minor prophets and the books of the Maccabees. (Under <i>Threni</i> the volumes carry no gloss at all, but a note from Migne&rsquo;s own editors saying why: the Douai edition had filled the gap with Paschasius Radbertus&rsquo;s exposition, which Walafrid &mdash; forty years his senior &mdash; cannot have known, so they omit it here and promise it among Paschasius&rsquo;s works instead.)</li>
      <li><b>The name on it is wrong.</b> Migne prints the whole under Walafrid Strabo, an ascription scholarship gave up long ago. The gloss is the work of a school, not a man.</li>
      <li><b>The attributions inside it are Migne's source's</b> — <i>(RAB.)</i>, <i>(ISID.)</i>, <i>(BEDA)</i> — and they are not always reliable. We print them as he printed them, and passing one through is not endorsing it.</li>
    </ul>
    <p>An English of the <i>Rusch</i> text, a different recension, exists for some books; where that is so, the book's own page says so rather than claiming a first.</p>
  </div>

${section('ot', 'The Old Testament')}

${section('nt', 'The New Testament')}

  <p class="g-foot">The order here is the Bible's. The order of the work is the smallest book first — which is why Ruth came before Genesis, and why the epistles will come before the Gospels.</p>
</main>

${footer()}`;

fs.mkdirSync(path.join(ROOT, 'site/glossa'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'site/glossa/index.html'), html);
console.log(`built site/glossa/index.html (${rows.length} books: ${englished.length} Englished, ${prepared.length} prepared, ${fmt(totalWords)} Latin words)`);
