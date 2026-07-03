#!/usr/bin/env node
// Day-one index for a shipped PG work (rule 9). PG/Calfa variant.
// Usage: node scripts/index-work-pg.mjs <workKey>   (run AFTER verify)
// Writes data/index/pg/<workKey>.json
//
// Calfa transcriptions carry no citation apparatus ([n:] markers) and no
// section heads, so the mechanical layers indexed for PL works (scripture
// markers, fontes, heads, headnotes) are mostly empty here — recorded as
// such, not silently omitted. What IS indexed:
//   - columns: every anchor with the first words of its Greek and English
//     (column-level incipits — the resolver and search seed)
//   - cruces: count + file pointer (PG works carry a cruces.md by convention)
// Scripture/fontes indexing for PG waits on restoring Migne's note layer
// at the diff-vs-scan pass; deferral noted in the record.

import fs from 'node:fs';
import path from 'node:path';

const key = process.argv[2];
if (!key) { console.error('usage: node scripts/index-work-pg.mjs <workKey>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const grcDir = path.join(ROOT, 'src/greek', key);
const engDir = path.join(ROOT, 'src/english', key);
const manifest = JSON.parse(fs.readFileSync(path.join(grcDir, 'manifest.json'), 'utf8'));
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'));
const work = reg.works.find(w => w.key === key);

const body = f => fs.readFileSync(f, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '').trim();
const joined = dir => manifest.chunks
  .map(c => body(path.join(dir, `${String(c.chunk).padStart(4, '0')}.md`)))
  .join('\n\n');

function colIncipits(text, n = 10) {
  const parts = text.split(/\[(\d{4})\]\s*/);
  const out = {};
  for (let i = 1; i < parts.length; i += 2)
    out[parts[i]] = (parts[i + 1] || '').replace(/\s+/g, ' ').trim().split(' ').slice(0, n).join(' ');
  return out;
}

const grcInc = colIncipits(joined(grcDir));
const engInc = colIncipits(joined(engDir));
const columns = Object.keys(grcInc).map(c => ({
  col: parseInt(c, 10),
  grc: grcInc[c],
  en: engInc[c] ?? null,
}));

const crucesFile = path.join(engDir, 'cruces.md');
const cruces = fs.existsSync(crucesFile)
  ? (fs.readFileSync(crucesFile, 'utf8').match(/^- \*\*/gm) || []).length
  : 0;

const out = {
  workKey: key,
  series: 'pg',
  volume: work.volume,
  title: work.title,
  titleEn: work.titleEn ?? null,
  authors: [work.author],
  citRange: work.citRange,
  colFirst: parseInt(manifest.colFirst, 10),
  colLast: parseInt(manifest.colLast, 10),
  sourceWords: manifest.sourceWords,
  columns,
  heads: [],
  scripture: [],
  fontes: [],
  cruces: { count: cruces, file: `src/english/${key}/cruces.md` },
  note: 'Calfa source carries no citation apparatus or heads; scripture/fontes layers deferred until the diff-vs-scan pass restores Migne\'s notes. Columns indexed with Greek+English incipits.',
  indexed: null,
};

const outPath = path.join(ROOT, 'data/index/pg', `${key}.json`);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`indexed ${columns.length} columns, ${cruces} cruces → ${outPath}`);
