#!/usr/bin/env node
// Build the bare browsable volume indexes: /latina/ (PL 1–221) and /graeca/ (PG 1–161 + ghost 162).
// Each volume: number + principal author/content label; volumes carrying a live English
// translation link the work(s) inline and are marked with a gilt dot.
//
//   PL labels — derived from works.json (top author by word-share; "Auctor incertus" skipped)
//   PG labels — data/pg-tome-authors.json (RelTech-verified, 167/167)
//
// Run after shipping a work (a newly-Englished volume lights up). Usage: node scripts/build-volume-indexes.mjs

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');

const worksData = JSON.parse(read('data/works.json'));
const worksArr = worksData.works || worksData;
const bios = JSON.parse(read('data/author-bios.json'));
const pgTomes = JSON.parse(read('data/pg-tome-authors.json'));
const pgArr = pgTomes.tomes || Object.values(pgTomes).find(Array.isArray);

// ---- scan built work pages → englished works keyed by series/vol ----
const englished = {}; // `${series}/${vol}` -> [{title, path}]
for (const series of ['pl', 'pg']) {
  const dir = path.join(ROOT, 'site', series);
  if (!fs.existsSync(dir)) continue;
  for (const vol of fs.readdirSync(dir)) {
    if (!/^\d+$/.test(vol)) continue;
    for (const slug of fs.readdirSync(path.join(dir, vol))) {
      const page = path.join(dir, vol, slug, 'index.html');
      if (!fs.existsSync(page)) continue;
      const html = fs.readFileSync(page, 'utf8');
      const t = html.match(/<title>(.*?), (.*?) — P[LG] \d+, \d+–\d+ · Migne<\/title>/);
      if (!t) continue;
      const key = `${series}/${parseInt(vol, 10)}`;
      (englished[key] = englished[key] || []).push({ title: t[2], path: `/${series}/${vol}/${slug}/` });
    }
  }
}

// ---- PL principal-author labels from works.json ----
const isAnon = a => /auctor incertus|^anonymous/i.test(a || '');
const disp = a => (bios[a] && bios[a].displayName) || a;
const byVolWords = {}; // vol -> {author -> words}
for (const w of worksArr) {
  for (const vol of (w.volumes || [])) {
    (byVolWords[vol] = byVolWords[vol] || {});
    if (isAnon(w.author)) continue;
    byVolWords[vol][w.author] = (byVolWords[vol][w.author] || 0) + (w.words || 0);
  }
}
function plLabel(vol) {
  const ranked = Object.entries(byVolWords[vol] || {}).sort((a, b) => b[1] - a[1]);
  if (!ranked.length) return '<span class="anon">Anonymous / various</span>';
  const names = ranked.slice(0, 2).map(e => esc(disp(e[0])));
  return names.join(' · ') + (ranked.length > 2 ? ' <span class="etal">&amp; al.</span>' : '');
}

const pgByTome = {};
for (const t of pgArr) pgByTome[parseInt(t.tome, 10)] = t.author;
function pgLabel(vol) {
  const a = pgByTome[vol];
  if (!a) return '<span class="anon">—</span>';
  // RelTech multi-author strings can be long; show the first, note the rest.
  const parts = a.split(/;\s*/);
  return esc(parts[0]) + (parts.length > 1 ? ' <span class="etal">&amp; al.</span>' : '');
}

// ---- render one volume row ----
function volRow(series, vol, label) {
  const en = englished[`${series}/${vol}`] || [];
  const links = en.length
    ? `<span class="ven">${en.map(w => `<a href="${w.path}">${esc(w.title)}</a>`).join('; ')}</span>`
    : '';
  const S = series.toUpperCase();
  return `      <li class="vrow${en.length ? ' has-en' : ''}">` +
    `<span class="vnum">${S}&nbsp;${vol}</span> <span class="vlabel">${label}</span>${links}</li>`;
}

// ---- render one series page, grouped by hundreds ----
function seriesPage({ series, count, labelFn, ghost }) {
  const S = series.toUpperCase();
  const groups = [];
  for (let lo = 1; lo <= count; lo += 100) {
    const hi = Math.min(lo + 99, count);
    const rows = [];
    for (let v = lo; v <= hi; v++) rows.push(volRow(series, v, labelFn(v)));
    if (ghost && ghost >= lo && ghost <= hi + 1 && hi === count) {
      rows.push(`      <li class="vrow ghost"><span class="vnum">${S}&nbsp;${ghost}</span> <span class="vlabel">Michael Apostolius &amp; al. <span class="ghost-note">— printed and plated, burned before publication, 1868</span></span></li>`);
    }
    groups.push(`    <h2>${S}&nbsp;${lo}–${hi}</h2>\n    <ol class="vols">\n${rows.join('\n')}\n    </ol>`);
  }
  const enCount = Object.keys(englished).filter(k => k.startsWith(series + '/')).length;
  const seriesName = series === 'pl' ? 'Patrologia Latina' : 'Patrologia Græca';
  const latinName = series === 'pl' ? 'Patrologiæ Latinæ' : 'Patrologiæ Græcæ';
  const lede = series === 'pl'
    ? `${count} volumes, Petit-Montrouge 1844–1855. Every volume is mapped and citable here; the ${enCount} carrying English so far are marked in gilt. Labels name each volume's principal author by extent — a rough hand, not a table of contents.`
    : `${count} volumes, Petit-Montrouge 1857–1866 (with parallel Latin). Volume 162 was printed and plated but burned in the fire of 1868 and never reissued, which is why the Greek series ends at 161. Volumes carrying English are marked in gilt.`;
  return `${head({
    title: `${seriesName} — the volumes · Migne`,
    description: `A browsable index of every volume of Migne's ${seriesName} (${S} 1–${count}), each mapped and citable, with the volumes carrying English marked.`,
    path: `/${series === 'pl' ? 'latina' : 'graeca'}/`,
  })}

${header(series === 'pl' ? 'latina' : 'graeca')}

<main class="vol-index">
  <div class="vi-head">
    <p class="kicker">The volumes</p>
    <h1>${latinName}</h1>
    <p class="lede">${lede}</p>
    <p class="legend"><span class="gilt-dot"></span> carries an English translation on this site</p>
  </div>
${groups.join('\n')}
</main>

${footer()}`;
}

// ---- write ----
const outs = [
  { file: 'site/latina/index.html', page: seriesPage({ series: 'pl', count: 221, labelFn: plLabel }) },
  { file: 'site/graeca/index.html', page: seriesPage({ series: 'pg', count: 161, labelFn: pgLabel, ghost: 162 }) },
];
for (const { file, page } of outs) {
  fs.mkdirSync(path.dirname(path.join(ROOT, file)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, file), page);
}
const plEn = Object.keys(englished).filter(k => k.startsWith('pl/')).length;
const pgEn = Object.keys(englished).filter(k => k.startsWith('pg/')).length;
console.log(`built site/latina/index.html (PL 1–221, ${plEn} englished) + site/graeca/index.html (PG 1–161 + ghost 162, ${pgEn} englished)`);
