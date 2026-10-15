#!/usr/bin/env node
// Build /browse/ — migne.app 2.0 Phase A (V2-PLAN.md). One tree over the whole corpus:
// series → author → work, English-available works gilt and linked, counts at every level,
// client-side filter. Static: the data is one embedded JSON block, rendered by ~100 lines
// of inline JS, authors' work lists built lazily on first open.
//
//   PL — every work in data/works.json (5,204), grouped by primary author.
//   PG — shipped works (data/pg-works.json) + the work-level TOC (data/pg-toc/works.tsv,
//        kind=work), minus TOC rows that fall inside a shipped work's column range.
//        ⚠ PG author names come from two sources (display names vs. the printed ALL-CAPS
//        headings), so one real author can appear twice (shipped / unshipped).
//
// An "English" work is one whose built page exists (site/pl|pg/<vol>/<slug>/index.html),
// the same test preflight uses. Run after shipping a work (build-site.mjs does).
// Usage: node scripts/build-browse.mjs

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const slugify = t => String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pageFor = (series, vol, slug) => {
  const rel = `${series}/${vol}/${slug}/`;
  return fs.existsSync(path.join(ROOT, 'site', rel, 'index.html')) ? `/${rel}` : '';
};

const bios = JSON.parse(read('data/author-bios.json'));
const displayByLatin = {};
for (const [k, b] of Object.entries(bios)) if (b && b.displayName) displayByLatin[k] = b;

// ---- PL ----
const plAuthors = new Map(); // display -> {name, latin, dates, works[]}
for (const w of JSON.parse(read('data/works.json')).works) {
  const latin = w.author || w.attributions?.[0]?.author || 'Auctor incertus';
  const b = displayByLatin[latin];
  const name = b ? b.displayName : latin;
  if (!plAuthors.has(name)) plAuthors.set(name, { name, latin: b ? latin : '', dates: b?.dates || (w.attributions?.[0]?.authorYear ? `d. ${w.attributions[0].authorYear}` : ''), works: [] });
  for (const t of w.texts ?? []) {
    const vol = t.volume ?? w.volumes?.[0];
    if (vol == null || !t.title) continue;
    plAuthors.get(name).works.push([t.title, vol, `${t.colFirst ?? ''}${t.colLast && t.colLast !== t.colFirst ? '–' + t.colLast : ''}`, pageFor('pl', vol, slugify(t.title))]);
  }
}

// ---- PG ----
const pgAuthors = new Map();
const addPg = (name, work, latin = '') => {
  if (!pgAuthors.has(name)) pgAuthors.set(name, { name, latin, dates: '', works: [] });
  pgAuthors.get(name).works.push(work);
};
const shipped = JSON.parse(read('data/pg-works.json')).works;
const ranges = shipped.map(s => [s.volume, s.greekColFirst, s.greekColLast]);
for (const s of shipped) {
  const page = pageFor('pg', s.volume, s.slug ?? slugify(s.titleEn));
  if (!page) continue; // registered but not built
  addPg(s.author, [s.titleEn, s.volume, s.greekColFirst != null ? `${s.greekColFirst}–${s.greekColLast}` : '', page]);
}
const titleCase = s => s.toLowerCase().replace(/(^|[\s(-])([a-zà-ÿ])/g, (_, a, b) => a + b.toUpperCase());
const [hdr, ...rows] = read('data/pg-toc/works.tsv').trim().split('\n').map(l => l.split('\t'));
const col = Object.fromEntries(hdr.map((h, i) => [h, i]));
for (const r of rows) {
  if (r[col.kind] !== 'work') continue;
  const vol = Number(r[col.vol]), start = Number(r[col.startCol]);
  if (ranges.some(([v, a, b]) => v === vol && start >= a && start <= b)) continue;
  const end = r[col.endCol];
  addPg(titleCase(r[col.author] || 'Auctor incertus'), [r[col.title], vol, `${r[col.startCol]}${end && end !== r[col.startCol] ? '–' + end : ''}`, '']);
}

const finish = m => [...m.values()]
  .map(a => ({ ...a, works: a.works.sort((x, y) => x[1] - y[1] || String(x[2]).localeCompare(String(y[2]), 'en', { numeric: true })) }))
  .sort((a, b) => a.name.localeCompare(b.name, 'en'))
  .map(a => [a.name, a.latin, a.dates, a.works]);
const data = [{ k: 'PL', n: 'Patrologia Latina', a: finish(plAuthors) }, { k: 'PG', n: 'Patrologia Graeca', a: finish(pgAuthors) }];

const tally = d => d.map(s => ({ au: s.a.length, w: s.a.reduce((n, a) => n + a[3].length, 0), en: s.a.reduce((n, a) => n + a[3].filter(w => w[3]).length, 0) }));
const T = tally(data);
const json = JSON.stringify(data).replace(/</g, '\\u003c');

const html = `${head({
  title: 'Browse — every work · Migne',
  description: `Every work in the Patrologia Latina and Graeca as one tree: ${T[0].w + T[1].w} works under ${T[0].au + T[1].au} authors, with the ${T[0].en + T[1].en} now in English marked.`,
  path: '/browse/',
})}

${header('browse')}

<main class="browse">
  <div class="vi-head">
    <p class="kicker">The whole shelf</p>
    <h1>Browse</h1>
    <p class="lede">Every work in the Patrologia, by series and author. Works already in English are gilt and link to their page; the rest are the queue. Type to filter by author or title.</p>
  </div>
  <div class="br-controls">
    <input id="br-q" type="search" placeholder="Filter by author or title…" autocomplete="off" aria-label="Filter by author or title">
    <label class="br-en"><input id="br-en" type="checkbox"> In English only</label>
    <span id="br-count" class="br-count" aria-live="polite"></span>
  </div>
  <div id="br-tree"><noscript><p>This page needs JavaScript. The volume lists at <a href="/latina/">Latina</a> and <a href="/graeca/">Græca</a> and the <a href="/authors/">Authors</a> page work without it.</p></noscript></div>
</main>

<script id="br-data" type="application/json">${json}</script>
<script>
(function () {
  var DATA = JSON.parse(document.getElementById('br-data').textContent);
  var tree = document.getElementById('br-tree'), q = document.getElementById('br-q'),
      en = document.getElementById('br-en'), cnt = document.getElementById('br-count');
  var AUTO_OPEN = 40;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, ''); }
  function workLi(w, k, vol) {
    var cite = k + ' ' + w[1] + (w[2] ? ', ' + w[2] : '');
    var t = w[3] ? '<a class="br-en-work" href="' + w[3] + '"><i>' + esc(w[0]) + '</i></a><span class="gilt-dot" title="In English"></span>' : '<i>' + esc(w[0]) + '</i>';
    return '<li>' + t + ' <span class="a-cite">' + esc(cite) + '</span></li>';
  }
  function fill(det) {
    if (det.dataset.filled) return;
    var s = DATA[det.dataset.s], a = s.a[det.dataset.a], onlyEn = en.checked, term = det._term || '';
    var authorHit = !term || norm(a[0] + ' ' + a[1]).indexOf(term) >= 0;
    var ws = a[3].filter(function (w) { return (!onlyEn || w[3]) && (authorHit || norm(w[0]).indexOf(term) >= 0); });
    det.querySelector('ol').innerHTML = ws.map(function (w) { return workLi(w, s.k); }).join('');
    det.dataset.filled = '1';
  }
  function render() {
    var term = norm(q.value.trim()), onlyEn = en.checked, out = [], shown = 0, total = 0;
    DATA.forEach(function (s, si) {
      var rows = [], nw = 0;
      s.a.forEach(function (a, ai) {
        var authorHit = !term || norm(a[0] + ' ' + a[1]).indexOf(term) >= 0;
        var ws = a[3].filter(function (w) { return (!onlyEn || w[3]) && (authorHit || norm(w[0]).indexOf(term) >= 0); });
        if (!ws.length) return;
        nw += ws.length;
        var nEn = ws.filter(function (w) { return w[3]; }).length;
        rows.push({ ai: ai, a: a, n: ws.length, nEn: nEn });
      });
      shown += nw; total += s.a.reduce(function (n, a) { return n + a[3].length; }, 0);
      var open = term || onlyEn ? ' open' : '';
      var body = rows.map(function (r, i) {
        var o = (term || onlyEn) && rows.length <= AUTO_OPEN ? ' open' : '';
        return '<details class="br-author"' + o + ' data-s="' + si + '" data-a="' + r.ai + '"><summary><span class="br-name">' + esc(r.a[0]) + '</span>' +
          (r.a[1] ? ' <span class="a-latin">' + esc(r.a[1]) + '</span>' : '') + (r.a[2] ? ' <span class="a-dates">' + esc(r.a[2]) + '</span>' : '') +
          ' <span class="br-n">' + r.n + (r.nEn ? ' · <b>' + r.nEn + ' in English</b>' : '') + '</span></summary><ol class="a-works"></ol></details>';
      }).join('');
      out.push('<details class="br-series"' + (s.k === 'PL' || term ? ' open' : '') + '><summary><h2>' + esc(s.n) + '</h2> <span class="br-n">' + rows.length + ' authors · ' + nw + ' works</span></summary>' + (body || '<p class="br-none">Nothing matches.</p>') + '</details>');
    });
    tree.innerHTML = out.join('');
    cnt.textContent = term || onlyEn ? shown + ' of ' + total + ' works' : '';
    tree.querySelectorAll('details.br-author').forEach(function (d) {
      d._term = term;
      if (d.open) fill(d);
      d.addEventListener('toggle', function () { if (d.open) fill(d); });
    });
  }
  var t; q.addEventListener('input', function () { clearTimeout(t); t = setTimeout(render, 150); });
  en.addEventListener('change', render);
  render();
})();
</script>

${footer()}`;

fs.mkdirSync(path.join(ROOT, 'site/browse'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'site/browse/index.html'), html);
console.log(`built site/browse/index.html (PL ${T[0].au} authors / ${T[0].w} works / ${T[0].en} English; PG ${T[1].au} / ${T[1].w} / ${T[1].en}; ${(html.length / 1024).toFixed(0)} KB)`);
