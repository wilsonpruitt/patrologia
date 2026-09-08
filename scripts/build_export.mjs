#!/usr/bin/env node
// Bulk export (~/open-corpus/PLAN.md item 8, Appendix E). Aggregates the
// per-work .json siblings that build-work-page.mjs / build-work-page-pg.mjs
// already write (site/pl/<vol>/<slug>.json, site/pg/<vol>/<slug>.json) —
// so the export can never drift from what each work page itself serves.
// Run scripts/build-site.mjs (with idnos, so siblings regenerate) BEFORE
// this, then scripts/upload_export_r2.sh to publish. Uploading is
// outward-facing — Wilson's OK first, same as a deploy.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import zlib from 'node:zlib';

const ROOT = path.join(import.meta.dirname, '..');
const EXPORT = path.join(ROOT, 'export');
const today = new Date().toISOString().slice(0, 10);

function findSiblingJson(seriesDir) {
  const dir = path.join(ROOT, 'site', seriesDir);
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const vol of fs.readdirSync(dir)) {
    const volDir = path.join(dir, vol);
    if (!fs.statSync(volDir).isDirectory()) continue;
    for (const f of fs.readdirSync(volDir)) {
      if (f.endsWith('.json')) out.push(path.join(volDir, f));
    }
  }
  return out;
}

function main() {
  fs.mkdirSync(EXPORT, { recursive: true });
  const txtDir = path.join(EXPORT, 'txt');
  fs.mkdirSync(txtDir, { recursive: true });

  const files = [...findSiblingJson('pl'), ...findSiblingJson('pg')];
  const lines = [];
  let totalWords = 0;

  for (const f of files) {
    const record = JSON.parse(fs.readFileSync(f, 'utf8'));
    lines.push(JSON.stringify(record));
    totalWords += (record.english || '').split(/\s+/).filter(Boolean).length;
    const txtSibling = f.replace(/\.json$/, '.txt');
    if (fs.existsSync(txtSibling)) {
      fs.copyFileSync(txtSibling, path.join(txtDir, `${record.id}.txt`));
    }
  }

  const worksPath = path.join(EXPORT, `migne-${today}.jsonl.gz`);
  fs.writeFileSync(worksPath, zlib.gzipSync(lines.join('\n') + '\n'));

  const txtArchive = path.join(EXPORT, `migne-txt-${today}.tar.gz`);
  execFileSync('tar', ['-czf', txtArchive, '-C', EXPORT, 'txt']);
  fs.rmSync(txtDir, { recursive: true, force: true });

  const readme = `# Migne — bulk export

Generated ${today}. ${files.length} works (PL + PG), ~${totalWords.toLocaleString('en-US')} words of English.

## Files

- \`migne-${today}.jsonl.gz\` — one JSON object per work, full English text
  inline in the \`english\` field, the Latin or Greek source text in
  \`source_text\`, source-edition citation, languages, license fields.
- \`migne-txt-${today}.tar.gz\` — plain-text mirror of each work as
  \`txt/<id>.txt\` (English only, headered), one file per work inside the
  archive.

## License

**The source text.** Migne's Latin and Greek, and the editions he
reprinted, are public domain.

**The English translation, apparatus, and encoding** are
[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/),
attribution "migne.app (Wilson Pruitt, Wroot Press)". Full terms:
https://migne.app/rights — including the explicit machine-learning-use
permission (§3a of LICENSE), which covers commercial model training.

Inbound credits: Greek (PG) from the CGPG corpus (CC BY 4.0); Latin (PL)
from the University of Zurich's Corpus Corporum.

## Hosting

Served from the shared Cloudflare R2 bucket \`wroot-corpus-export\`
(prefix \`migne/\`), not baked into any deploy — see
\`~/open-corpus/PLAN.md\` item 8.
`;
  fs.writeFileSync(path.join(EXPORT, 'README.md'), readme);

  const manifest = {
    generated: today,
    works: files.length,
    words: totalWords,
    files: [
      { name: path.basename(worksPath), description: 'One JSON object per work, full text inline.', size_bytes: fs.statSync(worksPath).size },
      { name: path.basename(txtArchive), description: 'Plain-text mirror of each work, one file per work inside the archive.', size_bytes: fs.statSync(txtArchive).size },
      { name: 'README.md', description: 'Schema, license, and changelog.', size_bytes: fs.statSync(path.join(EXPORT, 'README.md')).size },
    ],
  };
  fs.writeFileSync(path.join(EXPORT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

  console.log(`Wrote ${files.length} works, ~${totalWords.toLocaleString('en-US')} words.`);
  for (const f of manifest.files) console.log(`  ${f.name}  (${f.size_bytes.toLocaleString('en-US')} bytes)`);
  console.log('Run scripts/upload_export_r2.sh to publish these to R2.');
}

main();
