#!/usr/bin/env node
// Site-wide scripture index — /scripture/
// Usage: node scripts/build-scripture-index.mjs
//
// Reads every data/index/<series>/<idno>.json written by index-work.mjs and
// renders one page: canonical book order → chapter → each citation, linking to
// the citing work at its column anchor.
//
// This is the payoff CLAUDE.md rule 9 has been accruing since day one. The index
// was built work-by-work "so no retroactive pass is ever needed", and until
// 2026-07-28 it was read by nothing but decade-check.mjs — 1,600+ citations that
// reached no reader. Run this after index-work.mjs, like the other build-* pages,
// so the index publishes AS WORKS COME IN rather than in a later batch.
//
// Two things it deliberately shows rather than hides:
//   * Migne's misprinted references (data/citation-corrections.json) appear under
//     their TRUE book/chapter, since that is where a reader looks for them — but
//     the printed form is displayed alongside, per the 2026-07-18 policy that the
//     text keeps what Migne prints.
//   * A citation Migne set inside a chapter head (`inHead`) is marked, because a
//     verse that governs a whole sermon is not the same fact as one quoted in
//     passing.

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc as chromeEsc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const esc = chromeEsc ?? (s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));

// Canonical order + display names now live in lib/bible-books.mjs, shared with
// /scripture/commentaries/ — two copies of a 73-row ordering drift silently.
import { BOOKS, BOOK_ORDER, BOOK_NAME } from './lib/bible-books.mjs';

// slug must match build-work-page.mjs exactly or every link 404s
const slugOf = title => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// corrections, so the index can file a misprint under its TRUE reference
const corrections = (() => {
  const p = path.join(ROOT, 'data/citation-corrections.json');
  if (!fs.existsSync(p)) return new Map();
  const m = new Map();
  for (const c of (JSON.parse(fs.readFileSync(p, 'utf8')).corrections ?? []))
    m.set(`${c.idno}|${String(c.column).toLowerCase()}|${c.refDisplay}`, c);
  return m;
})();

const entries = []; // {book, ch, v, refDisplay, work, corrected}
const works = new Map();

for (const series of ['pl', 'pg']) {
  const dir = path.join(ROOT, 'data/index', series);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
    const d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    const slug = d.slug ?? slugOf(d.title);
    const work = {
      title: d.title,
      author: (d.authorsDisplay ?? d.authors ?? [])[0] ?? 'Anonymous',
      href: `/${series}/${d.volume}/${slug}/`,
      cite: `${series.toUpperCase()} ${d.volume}`,
    };
    works.set(d.textIdno ?? f, work);
    for (const s of d.scripture ?? []) {
      const [book, ch, v] = String(s.refKey).split('.');
      if (!BOOK_ORDER.has(book)) continue; // unparsed refs are tracked separately
      const key = `${d.textIdno}|${String(s.column).toLowerCase()}|${s.refDisplay}`;
      entries.push({
        book, ch: Number(ch) || 0, v: Number(v) || 0,
        refDisplay: s.refDisplay, column: s.column, inHead: !!s.inHead,
        corrected: corrections.get(key) ?? null,
        work,
      });
    }
  }
}

entries.sort((a, b) =>
  BOOK_ORDER.get(a.book) - BOOK_ORDER.get(b.book) || a.ch - b.ch || a.v - b.v ||
  a.work.title.localeCompare(b.work.title));

// group: book -> chapter -> [entry]
const byBook = new Map();
for (const e of entries) {
  if (!byBook.has(e.book)) byBook.set(e.book, new Map());
  const chs = byBook.get(e.book);
  if (!chs.has(e.ch)) chs.set(e.ch, []);
  chs.get(e.ch).push(e);
}

const jump = [...byBook.keys()]
  .map(b => `<a href="#b-${b}">${esc(BOOK_NAME.get(b))}</a>`).join(' · ');

const sectionsHtml = [...byBook.entries()].map(([book, chs]) => {
  const rows = [...chs.entries()].map(([ch, es]) => {
    const cites = es.map(e => {
      const verse = e.v ? `:${e.v}` : '';
      const printed = e.corrected
        ? ` <span class="printed" title="${esc(`Migne prints ${e.corrected.refDisplay}${e.corrected.note ? ' — ' + e.corrected.note : ''}`)}">Migne: ${esc(e.corrected.refDisplay)}</span>`
        : '';
      const head = e.inHead ? ' <span class="inhead" title="Migne sets this citation in the chapter head — it governs the section">head</span>' : '';
      return `<li><a href="${e.work.href}#c${String(e.column).toLowerCase()}">${esc(e.work.author)}, <i>${esc(e.work.title)}</i></a> <span class="cite">${esc(e.work.cite)}, ${esc(e.column)}</span>${printed}${head}</li>`;
    }).join('\n');
    return `<div class="chapter"><h3>${esc(BOOK_NAME.get(book))} ${ch}</h3>\n<ul>${cites}</ul></div>`;
  }).join('\n');
  return `<section class="book" id="b-${book}">\n<h2>${esc(BOOK_NAME.get(book))}</h2>\n${rows}\n</section>`;
}).join('\n');

const nBooks = byBook.size;
const html = `${head({
  title: 'Scripture index — Migne',
  description: `Every scripture citation Migne prints across the ${works.size} works translated so far — ${entries.length} references, by book and chapter.`,
  path: '/scripture/',
})}
${header('scripture')}
<main class="page">
  <h1>Scripture index</h1>
  <p class="lede">Every scripture reference Migne prints in the works translated so far —
  ${entries.length.toLocaleString('en-US')} citations across ${works.size} works and ${nBooks} books.
  Each links to the passage at its column. The index grows as works are published.</p>
  <p class="idx-note">References appear as Migne cites them, in the Vulgate's numbering.
  Where he misprints one, it is filed under its true place and his printed form is shown
  beside it — the text itself always keeps what he set.</p>
  <p class="idx-note idx-sibling">Looking for who <em>wrote on</em> a book rather than who
  quoted it? See <a href="/scripture/commentaries/">the commentary map</a> — every
  commentary in the Patrologia Latina, grouped by the book it expounds.</p>
  <nav class="jump">${jump}</nav>
${sectionsHtml}
</main>
${footer()}
</body>
</html>
`;

const out = path.join(ROOT, 'site/scripture');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), html);
console.log(`built site/scripture/index.html — ${entries.length} citations, ${works.size} works, ${nBooks} books`);
