#!/usr/bin/env node
// Build /queue/ — the near-term queue: works already chunked in src/latin/ but not yet
// Englished (i.e. prepared and waiting), smallest-first, with a line on the full frontier.
//
// "Lined up" = a directory in src/latin/<idno>/ whose textIdno has no English yet.
// Usage: node scripts/build-queue.mjs

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const bios = JSON.parse(read('data/author-bios.json'));
const worksArr = (() => { const d = JSON.parse(read('data/works.json')); return d.works || d; })();

const disp = a => (bios[a] && bios[a].displayName) || a;
const fmt = n => Number(n).toLocaleString('en-US');

// textIdno -> translation status, for a queue-worthiness note
const statusByText = {};
for (const w of worksArr) for (const t of (w.texts || [])) statusByText[String(t.idno)] = (w.translation || {}).workStatus;

// already-Englished textIdnos = numeric dirs under src/english/
const englishDir = path.join(ROOT, 'src/english');
const englishedIdnos = new Set(
  fs.existsSync(englishDir) ? fs.readdirSync(englishDir).filter(d => /^\d+$/.test(d)) : []
);

// scan chunked works
const latinDir = path.join(ROOT, 'src/latin');
const rows = [];
for (const idno of fs.readdirSync(latinDir)) {
  if (!/^\d+$/.test(idno)) continue;
  if (englishedIdnos.has(idno)) continue;
  const mf = path.join(latinDir, idno, 'manifest.json');
  if (!fs.existsSync(mf)) continue;
  const m = JSON.parse(fs.readFileSync(mf, 'utf8'));
  rows.push({
    idno,
    author: disp((m.authors && m.authors[0]) || 'Auctor incertus'),
    title: m.title,
    series: (m.series || 'pl').toUpperCase(),
    vol: m.volume,
    words: m.sourceWords || 0,
    chunks: m.chunkCount || 0,
    status: statusByText[idno],
  });
}
rows.sort((a, b) => a.words - b.words); // smallest-first cadence

// full frontier: verified-none across the whole corpus
let frontierWorks = 0, frontierWords = 0;
for (const w of worksArr) {
  if ((w.translation || {}).workStatus === 'none') { frontierWorks++; frontierWords += (w.words || 0); }
}

const queuedWords = rows.reduce((n, r) => n + r.words, 0);
const queuedChunks = rows.reduce((n, r) => n + r.chunks, 0);

const rowsHtml = rows.map(r => `      <li class="qrow">
        <span class="qwork">${esc(r.author)}, <i>${esc(r.title)}</i></span>
        <span class="qmeta"><span class="qcite">${r.series} ${r.vol}</span><span class="qwords">${fmt(r.words)} words</span><span class="qchunks">${r.chunks} ${r.chunks === 1 ? 'chunk' : 'chunks'}</span></span>
      </li>`).join('\n');

const html = `${head({
  title: 'The Queue — what’s next · Migne',
  description: `The works lined up for translation on migne.app: ${rows.length} already prepared and waiting, smallest-first, against a frontier of ${fmt(frontierWorks)} verified-untranslated works.`,
  path: '/queue/',
})}

${header('queue')}

<main class="queue">
  <div class="vi-head">
    <p class="kicker">What’s next</p>
    <h1>The Queue</h1>
    <p class="lede">These ${rows.length} works are already prepared — their Latin chunked and validated, waiting only for translation — listed smallest-first, the order the site works through them. Behind them stands the real frontier: <b>${fmt(frontierWorks)} works</b> verified to have no English at all, some ${fmt(Math.round(frontierWords / 1e6))} million Latin words, the work of years.</p>
    <p class="legend">${rows.length} prepared · ${fmt(queuedWords)} words · ${fmt(queuedChunks)} chunks ready</p>
  </div>
    <ol class="qlist">
${rowsHtml}
    </ol>
  <p class="q-foot">The queue is not a promise of order — a text that matters can jump it (as Vincent of Lérins’s <i>Commonitorium</i> did). It is simply what is cut, checked, and ready to be Englished next.</p>
</main>

${footer()}`;

fs.mkdirSync(path.join(ROOT, 'site/queue'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'site/queue/index.html'), html);
console.log(`built site/queue/index.html (${rows.length} prepared works, ${fmt(queuedWords)} words; frontier ${fmt(frontierWorks)} works)`);
