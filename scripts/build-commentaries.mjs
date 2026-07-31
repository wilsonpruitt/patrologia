#!/usr/bin/env node
// The commentary map — /scripture/commentaries/
// Usage: node scripts/build-commentaries.mjs
//
// WHY THIS IS A SEPARATE PAGE (Wilson, 2026-07-30). /scripture/ is a citation
// index: every verse Migne's authors quote, located by column. It is one of the
// best things this project has, and folding a second relation into it would muddy
// exactly what makes it good. "Commentary ON a book" and "work CITING a book" are
// different facts about a work, and a reader arrives wanting one or the other.
// So: its own page, linked from /scripture/.
//
// WHAT IT SHOWS. Every commentary in the Patrologia Latina, grouped by the book it
// expounds, whether or not we have translated it — the complete-map principle from
// PLAN.md: the map is complete, translation lights up territory. A book with eleven
// commentaries and one English is a truer picture of the work ahead than a page
// showing only the one.
//
// HOW A WORK GETS ON THE MAP. Its title names a biblical book AND the title either
// carries a commentary-genre word (expositio, explicatio, commentarius, homiliae,
// enarratio, sermones…) or governs the book with in/super. That rule is a HEURISTIC
// over titles, not evidence, and it is wrong in both directions:
//   * The biblical texts themselves (Liber Genesis, Evangelium secundum Joannem,
//     Psalterium) name a book and are not commentaries — they satisfy neither half
//     of the rule, so the rule excludes them without a reject list.
//   * Personal names collide with book names constantly — Joannes, Matthaeus,
//     Petrus, Jacobus, an empress named Judith. Those are rejected BY HAND in
//     data/commentary-overrides.json, with the reason recorded per work.
// Derived candidates are never treated as verified. This mirrors CLAUDE.md rule 9:
// controlled vocabulary is derived from what accumulates, never asserted from memory.

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer } from './lib/chrome.mjs';
import { BOOK_ORDER, BOOK_NAME, GROUPS, GROUP_NAME, rankOf } from './lib/bible-books.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const works = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/works.json'), 'utf8')).works;
const ov = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/commentary-overrides.json'), 'utf8'));
const REJECT = new Set(Object.keys(ov.reject || {}));
const ADD = ov.addBooks || {};

// Latin book names as titles inflect them (usually accusative after in/super).
// Ordered: longer/more specific patterns first, so "epistolas Pauli" wins over "Paul".
const BOOK_PATTERNS = [
  [/\bGenesi[mns]\b/, 'Gen'], [/\bExodu[mi]\b/, 'Exod'], [/\bLeviticum\b/, 'Lev'],
  [/\bNumeros\b/, 'Num'], [/\bDeuteronomium\b/, 'Deut'], [/\bJosue\b/, 'Josh'],
  [/\bJudicum\b/, 'Judg'], [/\bRuth\b/, 'Ruth'], [/\bReg[um]{2}\b/, 'Kgs'],
  [/\bParalipomenon\b/, '1Chr'], [/\bEsdrae\b/, 'Ezra'], [/\bTobiam\b/, 'Tob'],
  [/\bJudith\b/, 'Jdt'], [/\bEsther\b/, 'Esth'], [/\bJob\b/, 'Job'],
  [/\bPsalm(os|orum|um)\b|\bPsalterium\b/, 'Ps'], [/\bProverbia\b/, 'Prov'],
  [/\bEcclesiaste[ns]\b/, 'Eccl'],
  // The OTHER canticles come first. "Canticum" alone is not the Song of Songs:
  // Scripture is full of canticles, and Migne prints commentaries on several.
  // Filing the Magnificat under the Song of Songs is the kind of error that looks
  // authoritative on a page like this, so each named canticle is routed to its own
  // book before the generic pattern is allowed to run.
  [/\bCanticum Habacuc\b/, 'Hab'],
  [/\bCantic\w* Debborae\b/, 'Judg'],
  [/\bCanticum B\.? (?:Virginis )?Mariae\b|\bCanticum B\.? Virginis\b/, 'Luke'],
  [/\bCanticum Moysi\b/, 'Deut'], [/\bCanticum Annae\b/, '1Sam'],
  [/\bCanticum Zachariae\b/, 'Luke'], [/\bCanticum Simeonis\b/, 'Luke'],
  [/\bCantic[au]m? canticorum\b|\bCantica Canticorum\b|\bCanticum Salomonis\b|\bCantica\b|\bCanticorum\b/i, 'Song'],
  [/\bSapientiam\b/, 'Wis'], [/\bEcclesiasticum\b/, 'Sir'],
  [/\bIsaiam\b|\bEsaiam\b/, 'Isa'], [/\bJeremiam\b/, 'Jer'],
  [/\bThrenos\b|\bLamentationes\b/, 'Lam'], [/\bBaruch\b/, 'Bar'],
  [/\bEzechiel\w*\b/, 'Ezek'], [/\bDanielem\b/, 'Dan'], [/\bOsee\b/, 'Hos'],
  [/\bJoelem\b/, 'Joel'], [/\bAmos\b/, 'Amos'], [/\bAbdiam\b/, 'Obad'],
  [/\bJonam\b/, 'Jonah'], [/\bMichaeam\b/, 'Mic'], [/\bNahum\b/, 'Nah'],
  [/\bHabacuc\b/, 'Hab'], [/\bSophoniam\b/, 'Zeph'], [/\bAggaeum\b/, 'Hag'],
  [/\bZachariam\b/, 'Zech'], [/\bMalachiam\b/, 'Mal'], [/\bMachabaeorum\b/, 'Macc'],
  [/\bMatthaeum\b/, 'Matt'], [/\bMarcum\b/, 'Mark'], [/\bLucam\b/, 'Luke'],
  [/\bepistolas? [Jj]oannis\b/, '1John'], [/\bJoannem\b/, 'John'],
  [/\bActus [Aa]postolorum\b/i, 'Acts'],
  [/\bepistolas? Pauli\b|\bepistolas Paulinas\b/i, 'Paul'],
  [/\bepistolas canonicas\b/i, 'Cath'],
  [/\bRomanos\b/, 'Rom'], [/\bCorinthios\b/, 'Cor'], [/\bGalatas\b/, 'Gal'],
  [/\bEphesios\b/, 'Eph'], [/\bPhilippenses\b/, 'Phil'], [/\bColossenses\b/, 'Col'],
  [/\bThessalonicenses\b/, 'Thess'], [/\bTimotheum\b/, 'Tim'], [/\bTitum\b/, 'Titus'],
  [/\bPhilemonem\b/, 'Phlm'], [/\bHebraeos\b/, 'Heb'],
  [/\bepistolam? Jacobi\b/i, 'Jas'], [/\bepistolas? Petri\b/i, 'Pet'],
  [/\bepistolam? Judae\b/i, 'Jude'], [/\bApocalypsi[mns]\b/, 'Rev'],
  [/\bEvangeli\w*\b/, 'Gosp'], [/\bProphet\w*\b/, 'Proph'],
];

// NOTE: `liber` is deliberately NOT a genre word. Including it promoted every
// biblical text in the corpus (Liber Genesis, Liber Job, Liber Ruth) onto the map.
const GENRE = /\b(expositio\w*|expositiuncul\w*|explicatio\w*|explanatio\w*|commentari\w*|commentat\w*|enarratio\w*|ennarratio\w*|adnotatiuncul\w*|adnotatio\w*|annotatio\w*|gloss\w*|homili\w*|tractat\w*|moral\w*|allegori\w*|quaestion\w*|caten\w*|postill\w*|scholi\w*|collectanea|collation\w*|sermo\w*|elucidatio\w*|interrogation\w*|breviarium|compendium|fragmenta|appendicula|praefatio|prologus|metrum)\b/i;
const APPARATUS = /\b(praefatio|prologus|appendicula)\b/i;

const titleOf = w => (w.texts || []).find(t => t.title)?.title || '';
const slug = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const byBook = new Map();
let total = 0, englished = 0, totalWords = 0;

for (const w of works) {
  const title = titleOf(w);
  if (!title) continue;
  const id = String(w.workIdno);
  if (REJECT.has(id)) continue;

  let books = ADD[id];
  if (!books) {
    const hits = [];
    for (const [re, osis] of BOOK_PATTERNS) {
      const m = title.match(re);
      if (m) hits.push([osis, title.indexOf(m[0])]);
    }
    if (!hits.length) continue;
    const first = Math.min(...hits.map(h => h[1]));
    const governed = /\b(in|super)\b/i.test(title.slice(0, first));
    if (!governed && !GENRE.test(title)) continue;
    // A specific book named alongside the generic collection wins: "In Evangelium
    // S. Matthaei" is on Matthew, not on "the Gospels".
    const specific = hits.filter(h => !['Gosp', 'Proph'].includes(h[0]));
    books = (specific.length ? specific : hits).map(h => h[0]);
  }

  const tr = w.translation || {};
  const text = (w.texts || [])[0] || {};
  const rec = {
    id, title, author: w.author || '—', words: w.words || 0,
    volume: (w.volumes || [])[0], colFirst: w.colFirst, colLast: w.colLast,
    en: tr.englishState, apparatus: APPARATUS.test(title),
  };
  total++; totalWords += rec.words;
  if (rec.en === 'ours') englished++;
  for (const b of new Set(books)) {
    if (!byBook.has(b)) byBook.set(b, []);
    byBook.get(b).push(rec);
  }
}

const nameOf = b => BOOK_NAME.get(b) || GROUP_NAME.get(b) || b;
const isGroup = b => !BOOK_ORDER.has(b);
// Groups sort a half-step ahead of their anchor book, so a collection sits at the
// head of its own area rather than in an appendix (Wilson, 2026-07-30).
const ordered = [...byBook.entries()].sort((a, b) => rankOf(a[0]) - rankOf(b[0]));

// English pages are keyed by idno in works.json's translation record; the site path
// is built the same way build-landing does, so a shipped work links to its page.
const pageFor = rec => {
  const dir = path.join(ROOT, 'site/pl', String(rec.volume));
  if (!rec.volume || !fs.existsSync(dir)) return null;
  for (const d of fs.readdirSync(dir)) {
    const idx = path.join(dir, d, 'index.html');
    if (!fs.existsSync(idx)) continue;
    const html = fs.readFileSync(idx, 'utf8');
    if (html.includes(`>${esc(rec.title)}<`) || html.includes(rec.title)) return `/pl/${rec.volume}/${d}/`;
  }
  return null;
};

const sections = ordered.map(([book, recs]) => {
  recs.sort((a, b) => (b.en === 'ours') - (a.en === 'ours') || a.author.localeCompare(b.author));
  const n = recs.length, en = recs.filter(r => r.en === 'ours').length;
  const rows = recs.map(r => {
    const href = r.en === 'ours' ? pageFor(r) : null;
    const t = href ? `<a href="${href}">${esc(r.title)}</a>` : esc(r.title);
    const badge = r.en === 'ours'
      ? '<span class="cm-en">English</span>'
      : '<span class="cm-no">Latin only</span>';
    const app = r.apparatus ? ' <span class="cm-app">apparatus</span>' : '';
    const cite = r.volume ? `PL ${r.volume}, ${r.colFirst}–${r.colLast}` : '';
    return `<li>${badge}${app} <span class="cm-t">${t}</span>` +
      `<span class="cm-a">${esc(r.author)}</span>` +
      `<span class="cm-c">${esc(cite)} · ${r.words.toLocaleString()} words</span></li>`;
  }).join('\n');
  return `<section class="cm-book${isGroup(book) ? ' cm-group' : ''}" id="b-${slug(book)}">
<h2>${esc(nameOf(book))} <span class="cm-count">${n} commentar${n === 1 ? 'y' : 'ies'}${en ? ` · ${en} in English` : ''}</span></h2>
<ul class="cm-list">
${rows}
</ul>
</section>`;
}).join('\n');

const toc = ordered.map(([b, r]) =>
  `<a href="#b-${slug(b)}">${esc(nameOf(b))} <span>${r.length}</span></a>`).join(' ');

const html = `${head({
  title: 'Commentaries — Migne',
  description: 'Every commentary in the Patrologia Latina, grouped by the book of Scripture it expounds.',
  path: '/scripture/commentaries/',
})}
${header('scripture')}
<main class="wrap commentaries">
<h1>The commentary map</h1>
<p class="lede">Every commentary in the <em>Patrologia Latina</em>, grouped by the book it
expounds — ${total.toLocaleString()} works across ${ordered.length} books and groups,
${totalWords.toLocaleString()} words of Latin, of which ${englished} now carry an English
translation. The map is complete; the translations light it up.</p>
<p class="note">This is a different question from the <a href="/scripture/">scripture
index</a>, which records every verse Migne's authors <em>quote</em>, located by column.
Here a work appears under the book it <em>is about</em>. Membership is derived from each
work's title as Migne prints it and then corrected by hand, so it is a good guide and not
an authority: a commentary whose title names no book is missing until someone adds it.
Works that expound a whole collection — the Pauline epistles, the four gospels, I–IV
Regum — keep their own heading and sit at the head of that part of Scripture, just
before its first book, rather than being filed under one member they do not confine
themselves to.</p>
<nav class="cm-toc">${toc}</nav>
${sections}
</main>
${footer()}
`;

const out = path.join(ROOT, 'site/scripture/commentaries');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), html);
console.log(`built site/scripture/commentaries/index.html — ${total} commentaries, ` +
  `${ordered.length} books/groups, ${englished} englished, ${totalWords.toLocaleString()} Latin words`);
