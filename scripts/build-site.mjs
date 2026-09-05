#!/usr/bin/env node
// Build EVERY page of migne.app, in dependency order.
//
// Usage: node scripts/build-site.mjs [<idno> …]
//   with idnos : rebuild those work + cruces pages, then every index that lists them
//   without    : rebuild the whole site
//
// ⛔ WHY THIS EXISTS. Shipping 8950 (Liber Genesis) on 2026-09-05 meant remembering NINE
// builders. Three were run — build-work-page, build-cruces, build-landing — the deploy went
// out, and `preflight.mjs` passed 6 of 6 over it, because preflight checks that a built page
// EXISTS and never that the indexes listing it were regenerated. The work was live and correct
// at its own URL and simply absent from /glossa, which is the kind of miss nobody notices from
// inside the repo: every check was green and the page you go looking at is the one that is
// right. It was caught by a smoke test on the real domain, by grepping the deployed HTML for
// the new work's slug.
//
// So: one command, and the ordering written down once instead of recalled each time.
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const idnos = process.argv.slice(2).filter(a => /^\d+$/.test(a));

// Data spine first: everything downstream reads these.
const SPINE = ['build-supplements.mjs', 'build-volumes.mjs'];
// Per-work pages. Skipped entirely when no idno is named (a full run rebuilds only indexes,
// because regenerating 158 work pages is slow and they do not go stale on their own).
const PERWORK = ['build-work-page.mjs', 'build-cruces.mjs'];
// Indexes. ⚑ Every one of these lists works, so every one goes stale the moment a work ships.
// build-landing.mjs is LAST: it asserts that each built page is in its RECENT list and exits
// non-zero if not, which is the one check that wants everything else already in place.
const INDEXES = [
  'build-glossa.mjs',           // ← the one missed on 2026-09-05
  'build-authors-index.mjs',
  'build-scripture-index.mjs',
  'build-commentaries.mjs',
  'build-volume-indexes.mjs',   // /latina + /graeca
  'build-sources.mjs',
  'build-queue.mjs',
  'build-rights.mjs',
  'build-polarity-report.mjs',
  'build-landing.mjs',
];

const run = (script, args = []) => {
  process.stdout.write(`  ${script}${args.length ? ' ' + args.join(' ') : ''} … `);
  try {
    const out = execFileSync('node', [path.join(ROOT, 'scripts', script), ...args],
      { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    console.log((out.trim().split('\n').pop() || 'ok').slice(0, 110));
  } catch (e) {
    console.log('FAILED');
    console.error((e.stdout || '') + (e.stderr || ''));
    process.exit(1);
  }
};

console.log(idnos.length ? `building site for ${idnos.join(', ')} + all indexes` : 'building the whole site');
for (const s of SPINE) run(s);
for (const idno of idnos) for (const s of PERWORK) run(s, [idno]);
for (const s of INDEXES) run(s);
console.log('\nsite built. Now: node scripts/preflight.mjs   (must exit 0 before deploying)');
