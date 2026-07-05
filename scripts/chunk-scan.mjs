#!/usr/bin/env node
// Corpus-wide chunker dry-run: runs the chunk transform + validators over every
// PL text with a local TEI file, WRITES NO CHUNKS, and reports pass/fail with
// reasons to data/chunk-scan.json. This is the scalability gate: before bulk
// translation, the chunker must be known-good (or known-bad-with-reason) for
// the whole corpus, not just the current queue.
// Usage: node scripts/chunk-scan.mjs [--limit N]

import fs from 'node:fs';
import path from 'node:path';
import { chunkWork } from './lib/chunk-core.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const TEI = path.join(ROOT, 'sources/pl/tei');
const limit = process.argv.includes('--limit') ? Number(process.argv[process.argv.indexOf('--limit') + 1]) : Infinity;

const works = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/works.json'), 'utf8'));
const results = [];
let n = 0, pass = 0, fail = 0, missing = 0;
const failReasons = {};
const t0 = Date.now();

outer:
for (const work of works.works) {
  for (const textRec of work.texts ?? []) {
    if (n >= limit) break outer;
    const idno = String(textRec.idno);
    const teiPath = path.join(TEI, `${idno}.xml`);
    if (!fs.existsSync(teiPath)) { missing++; continue; }
    n++;
    let rec = { idno: Number(idno), workIdno: work.workIdno, title: textRec.title, volume: textRec.volume ?? work.volumes?.[0] ?? null };
    try {
      const xml = fs.readFileSync(teiPath, 'utf8');
      const { errors, warnings, manifest } = chunkWork({ xml, work, textRec, idno });
      rec.ok = errors.length === 0;
      rec.errors = errors;
      rec.warnings = warnings;
      rec.chunkCount = manifest?.chunkCount ?? 0;
      rec.sourceWords = manifest?.sourceWords ?? 0;
    } catch (e) {
      rec.ok = false;
      rec.errors = [`exception: ${e.message}`];
      rec.warnings = [];
    }
    if (rec.ok) pass++;
    else {
      fail++;
      for (const e of rec.errors) {
        const key = e.replace(/[0-9.,%-]+/g, 'N').slice(0, 60);
        failReasons[key] = (failReasons[key] || 0) + 1;
      }
    }
    results.push(rec);
    if (n % 500 === 0) console.log(`${n} scanned (${pass} pass / ${fail} fail) [${((Date.now() - t0) / 1000).toFixed(0)}s]`);
  }
}

const out = {
  scannedAt: null, // stamped by caller/session notes, not here
  scanned: n, pass, fail, missingTei: missing,
  passRate: +(pass / n * 100).toFixed(2),
  failReasons,
  results,
};
fs.writeFileSync(path.join(ROOT, 'data/chunk-scan.json'), JSON.stringify(out, null, 1));
console.log(`\n${n} texts scanned: ${pass} pass (${out.passRate}%), ${fail} fail, ${missing} missing TEI`);
console.log('fail reasons:');
for (const [k, v] of Object.entries(failReasons).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(5)}  ${k}`);
console.log(`→ data/chunk-scan.json (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
