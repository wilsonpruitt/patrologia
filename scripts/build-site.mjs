#!/usr/bin/env node
// Build EVERY page of migne.app, in dependency order.
//
// Usage: node scripts/build-site.mjs [<idno> …]
//   with idnos : rebuild those work + cruces pages, then every index that lists them
//                (a PL idno is numeric; a PG work is named by its key in data/pg-works.json)
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
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const args = process.argv.slice(2);
const idnos = args.filter(a => /^\d+$/.test(a));
// ⛔ PG KEYS WERE SILENTLY DROPPED UNTIL 2026-11-04. Shipping Dorotheus *Doctrinae* (2026-10-27)
// ran this with the PG key, the numeric filter threw it away, the PL builders below never
// applied to it anyway, and build-cruces did not run -- so its cruces page was missing while
// preflight (which then only looked under /cruces/pl/) passed. An unknown argument now stops
// the build instead of vanishing.
const pgKeys = new Set(JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'))
  .works.map(w => w.key));
const pgWorks = args.filter(a => !/^\d+$/.test(a));
const unknown = pgWorks.filter(a => !pgKeys.has(a));
if (unknown.length) { console.error(`not a PL idno or a PG work key: ${unknown.join(', ')}`); process.exit(1); }

// Data spine first: everything downstream reads these.
const SPINE = ['build-supplements.mjs', 'build-volumes.mjs'];
// Per-work pages. Skipped entirely when no idno is named (a full run rebuilds only indexes,
// because regenerating 158 work pages is slow and they do not go stale on their own).
// ⛔ index-work.mjs BELONGS HERE AND WAS MISSING UNTIL 2026-09-07 (8956 Isaiah).
// This script exists precisely so that nobody has to remember the builder list -- and it
// forgot one, in the same shape as the failure that created it. The work's own page and its
// cruces built fine, so six of preflight's seven checks passed over the gap; what broke was
// data/index/<series>/<idno>.json, which build-cruces resolves a work's slug THROUGH. The
// symptom was a cruces page silently not published, i.e. an apparatus link that would have
// 404'd on a live page that looked completely healthy -- the 2026-08-05 Glabas failure again.
// ⚑ It must run BEFORE build-cruces, which reads what it writes.
const PERWORK = ['build-work-page.mjs', 'index-work.mjs'];
const PERWORK_PG = ['build-work-page-pg.mjs', 'index-work-pg.mjs'];
// build-cruces.mjs takes no argument: it rebuilds every cruces page from src/english +
// data/index, so it runs ONCE, after all the per-work steps above (and on a full build too).
// Indexes. ⚑ Every one of these lists works, so every one goes stale the moment a work ships.
// build-landing.mjs is LAST: it asserts that each built page is in its RECENT list and exits
// non-zero if not, which is the one check that wants everything else already in place.
const INDEXES = [
  'build-glossa.mjs',           // ← the one missed on 2026-09-05
  'build-authors-index.mjs',
  'build-browse.mjs',           // /browse (Phase A, V2-PLAN.md)
  'build-scripture-index.mjs',
  'build-commentaries.mjs',
  'build-volume-indexes.mjs',   // /latina + /graeca
  'build-sources.mjs',
  'build-queue.mjs',
  'build-rights.mjs',
  'build-export-page.mjs',
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

const named = [...idnos, ...pgWorks];
console.log(named.length ? `building site for ${named.join(', ')} + all indexes` : 'building the whole site');
for (const s of SPINE) run(s);
for (const idno of idnos) for (const s of PERWORK) run(s, [idno]);
for (const key of pgWorks) for (const s of PERWORK_PG) run(s, [key]);
run('build-cruces.mjs');
for (const s of INDEXES) run(s);
console.log('\nsite built. Now: node scripts/preflight.mjs   (must exit 0 before deploying)');
