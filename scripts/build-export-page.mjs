#!/usr/bin/env node
// Build /export/ — the bulk-export page for migne.app (~/open-corpus/
// PLAN.md item 8). Reads export/manifest.json (written by
// scripts/build_export.mjs) if present; degrades to a "not yet generated"
// notice so the site still builds before the first export exists.
import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const MANIFEST_PATH = path.join(ROOT, 'export/manifest.json');
// PLACEHOLDER until the shared wroot-corpus-export R2 bucket (PLAN.md item
// 8) is actually provisioned and its public dev URL is known — update this
// the same session the bucket is created, before the first export goes live.
export const EXPORT_R2_BASE_URL = 'https://pub-wroot-corpus-export.r2.dev/migne';

const manifest = fs.existsSync(MANIFEST_PATH)
  ? JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'))
  : null;

const filesHtml = manifest
  ? `<p>Generated ${manifest.generated}. ${manifest.works} works, ~${manifest.words.toLocaleString('en-US')} words of English.</p>
<ul class="export-files">
${(manifest.files || [])
  .map(f => `  <li><a href="${EXPORT_R2_BASE_URL}/${f.name}">${f.name}</a> &mdash; ${f.description} (${(f.size_bytes / 1e6).toFixed(1)} MB)</li>`)
  .join('\n')}
</ul>`
  : `<p><i>The bulk export has not been generated yet.</i> Every englished work is still readable and machine-fetchable via its own page and <code>.txt</code>/<code>.json</code> siblings (see <a href="/rights/">/rights</a>) &mdash; this page will list a downloadable archive once <code>scripts/build_export.mjs</code> has run.</p>`;

const html = `${head({
  title: 'Bulk Export · Migne',
  description: 'Download the full text and apparatus of migne.app as structured data.',
  path: '/export/',
})}

${header()}

<main class="essay">
  <div class="essay-head">
    <p class="kicker">Data</p>
    <h1>Bulk Export</h1>
  </div>
  <article class="essay-body">
    <p>Every englished work, one JSON record per work with the full English text inline, the Latin or Greek source alongside it, source-edition citation, and license fields. See <a href="/rights/">/rights</a> for the license and the machine-use permission. Every work page also has plain-text and JSON siblings directly: append <code>.txt</code> or <code>.json</code> to a work URL, e.g. <code>/pl/139/&lt;slug&gt;.txt</code>.</p>
    ${filesHtml}
  </article>
</main>

${footer()}`;

fs.mkdirSync(path.join(ROOT, 'site/export'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'site/export/index.html'), html);
console.log('built site/export/index.html');
