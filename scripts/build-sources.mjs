#!/usr/bin/env node
// Where the text comes from — /sources/
// Usage: node scripts/build-sources.mjs
//
// Publishes two things that were being maintained and shown to nobody:
//   * data/provenance.json — the acquisition ledger for the bulk corpora
//     (checksums, origin URLs, fetch dates). Read by NO script before 2026-07-28.
//     For a project whose case is preservation, this is the most publishable
//     file in data/: it is the answer to "where did your Latin come from, and
//     can I get the same bytes?"
//   * pg-works.json's `greekSource`, `latinVerifier` and `editions` — per-work
//     source facts that were recorded for the PG pilot and read by nothing.
//
// Deliberately NOT published: local paths under raw/ and sources/ are shown as
// bare directory names, never as absolute paths, and nothing here links to a
// gitignored artefact a reader cannot fetch.

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const readJson = f => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));

const prov = readJson('data/provenance.json');
const pg = readJson('data/pg-works.json').works ?? [];

const mib = n => n ? `${(n / 1024 / 1024).toFixed(0)} MB` : '';
const shortSha = s => s ? `${String(s).slice(0, 16)}…` : '';

const corpusRows = prov.items.map(i => {
  const url = String(i.source ?? '');
  const link = url.startsWith('http')
    ? `<a href="${esc(url.split(' ')[0])}">${esc(url.split(' ')[0])}</a>${url.includes(' ') ? ' ' + esc(url.slice(url.indexOf(' ') + 1)) : ''}`
    : esc(url);
  const bits = [
    i.bytes ? mib(i.bytes) : null,
    i.fetched ? `fetched ${esc(i.fetched)}` : null,
  ].filter(Boolean).join(' · ');
  return `<div class="src">
  <h3>${esc(i.path)}</h3>
  <p class="origin">${link}</p>
  ${bits ? `<p class="meta">${bits}</p>` : ''}
  ${i.sha256 ? `<p class="sha" title="${esc(i.sha256)}">sha256 ${esc(shortSha(i.sha256))}</p>` : ''}
  ${i.note ? `<p class="note">${esc(i.note)}</p>` : ''}
</div>`;
}).join('\n');

// PG per-work sources — only for works that actually have an English page,
// so this never advertises a translation that does not exist.
const pgRows = pg.filter(w => w.englishState === 'ours').map(w => `<div class="src">
  <h3>${esc(w.author)}, <i>${esc(w.title)}</i></h3>
  <p class="meta">${esc(w.citRange ?? `PG ${w.volume}`)}</p>
  ${w.greekSource ? `<p><span class="lbl">Greek text</span> ${esc(w.greekSource === 'calfa' ? 'Calfa Patrologia Graeca OCR corpus (CC BY 4.0)' : w.greekSource)}</p>` : ''}
  ${w.latinVerifier ? `<p><span class="lbl">Latin verifier</span> ${esc(w.latinVerifier)}</p>` : ''}
  ${w.editions ? `<p><span class="lbl">Editions</span> ${esc(w.editions)}</p>` : ''}
</div>`).join('\n');

const html = `${head({
  title: 'Sources — Migne',
  description: 'Where the Latin and Greek text of this edition comes from: the corpora, their origins, and their checksums.',
  path: '/sources/',
})}
${header('sources')}
<main class="page">
  <h1>Sources</h1>
  <p class="lede">This edition does not transcribe Migne afresh. The Latin and Greek
  come from existing machine-readable corpora, listed here with their origins so that
  anyone can fetch the same text and check our work against it.</p>

  <h2>The corpora</h2>
${corpusRows}

  ${pgRows ? `<h2>Greek works, source by source</h2>
  <p class="idx-note">The Greek series needs saying work by work: Migne prints a Latin
  translation beside the Greek, and this edition translates from the Greek while using
  that Latin column only as a check.</p>
${pgRows}` : ''}

  <h2>Column numbers</h2>
  <p>Column references throughout follow the <strong>original Migne plates</strong>, not the
  Garnier reprints, whose columns differ. A citation such as <code>migne.app/pl/139/473a</code>
  resolves against the original.</p>
</main>
${footer()}
</body>
</html>
`;

const out = path.join(ROOT, 'site/sources');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), html);
console.log(`built site/sources/index.html — ${prov.items.length} corpora, ${pg.filter(w => w.englishState === 'ours').length} PG works`);
