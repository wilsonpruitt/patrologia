#!/usr/bin/env node
// Build /authors/ — the authors we've Englished. One entry per author with a live
// English translation: display name, dates + Latin form (from data/author-bios.json),
// and links to each of their works. Grows automatically as works ship.
//
// Usage: node scripts/build-authors-index.mjs

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const bios = JSON.parse(read('data/author-bios.json'));

// author displayName -> bio entry (bios are keyed by the Latin author string)
const bioByDisplay = {};
for (const [latinKey, b] of Object.entries(bios)) {
  if (!b || typeof b !== 'object' || !b.displayName) continue;
  bioByDisplay[b.displayName] = { ...b, latinKey };
}

// ---- scan built work pages → works grouped by author ----
const byAuthor = new Map(); // author -> [{title, path, series, vol}]
for (const series of ['pl', 'pg']) {
  const dir = path.join(ROOT, 'site', series);
  if (!fs.existsSync(dir)) continue;
  for (const vol of fs.readdirSync(dir)) {
    if (!/^\d+$/.test(vol)) continue;
    for (const slug of fs.readdirSync(path.join(dir, vol))) {
      const page = path.join(dir, vol, slug, 'index.html');
      if (!fs.existsSync(page)) continue;
      const html = fs.readFileSync(page, 'utf8');
      const t = html.match(/<title>(.*?), (.*?) — P[LG] (\d+), \d+–\d+ · Migne<\/title>/);
      if (!t) continue;
      const author = t[1], title = t[2];
      if (!byAuthor.has(author)) byAuthor.set(author, []);
      byAuthor.get(author).push({ title, path: `/${series}/${vol}/${slug}/`, series, vol: parseInt(vol, 10) });
    }
  }
}

// sort authors alphabetically by display name
const authors = [...byAuthor.keys()].sort((a, b) => a.localeCompare(b, 'en'));

const entries = authors.map(author => {
  const b = bioByDisplay[author];
  const works = byAuthor.get(author).sort((x, y) => x.vol - y.vol || x.title.localeCompare(y.title));
  const meta = b
    ? `<p class="a-meta">${b.latin ? `<span class="a-latin">${esc(b.latin)}</span>` : ''}${b.dates ? `<span class="a-dates">${esc(b.dates)}</span>` : ''}</p>`
    : '';
  const bio = b && b.bio ? `<p class="a-bio">${esc(b.bio)}</p>` : '';
  const worksList = works.map(w =>
    `<li><a href="${w.path}"><i>${esc(w.title)}</i></a> <span class="a-cite">${w.series.toUpperCase()} ${w.vol}</span></li>`
  ).join('\n');
  return `  <section class="author">
    <h2>${esc(author)}</h2>
    ${meta}
    ${bio}
    <ol class="a-works">
${worksList}
    </ol>
  </section>`;
}).join('\n');

const count = authors.length;
const html = `${head({
  title: 'Authors — the Englished · Migne',
  description: `The ${count} authors of the Patrologia with a work now in English on migne.app, each with their translated works.`,
  path: '/authors/',
})}

${header('authors')}

<main class="authors-index">
  <div class="vi-head">
    <p class="kicker">The Englished</p>
    <h1>Authors</h1>
    <p class="lede">Every author with a work now in English here — ${count} so far, out of the hundreds still waiting. Each name grows a list as more of their writing is translated.</p>
  </div>
${entries}
</main>

${footer()}`;

fs.mkdirSync(path.join(ROOT, 'site/authors'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'site/authors/index.html'), html);
console.log(`built site/authors/index.html (${count} authors, ${[...byAuthor.values()].reduce((n, a) => n + a.length, 0)} works)`);
