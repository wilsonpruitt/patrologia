#!/usr/bin/env node
// PREFLIGHT — the one command that must exit 0 before `cd site && npx vercel --prod`.
//
// Usage:
//   node scripts/preflight.mjs            # every standing gate
//   node scripts/preflight.mjs 9004 9001  # the same, plus verify-english on those works
//
// ⭐ WHY THIS EXISTS, AND WHY IT IS A SCRIPT AND NOT A CHECKLIST ITEM.
//
// Every gate below already existed. The deploy checklist in translation-runbook.md
// named them all. And the checklist still failed, twice, in the way checklists fail:
//
//   2026-08-05  build-cruces.mjs was simply MISSING from the list. A work page links
//               to /cruces/<series>/<vol>/<slug>/ whenever a cruces file exists, so
//               Glabas Sermon III went live with its apparatus link 404ing. The work
//               page was 200 and the landing page looked right. Nothing had a
//               non-zero exit code to give.
//   2026-09-02  the ship flags were written to the TEXT record instead of the WORK
//               record, where first-english.mjs actually reads them. Nothing failed:
//               /glossa asserts "Englished" from the built page and RECENT is an
//               explicit list, so the site looked correct over a wrong record.
//
// The lesson both times is the same one the badge bugs taught (see
// scripts/lib/first-english.mjs): **a step that is remembered is a step that is
// eventually forgotten, and a silent success is worse than a loud failure.** So the
// checklist collapses to one command, and every check below either exits non-zero or
// does not count.
//
// ⛔ This does NOT build. Run the builders first; preflight then checks their output.
// A check that quietly rebuilds what it is auditing cannot fail.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.join(import.meta.dirname, '..');
const argv = process.argv.slice(2);
const read = p => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));

const results = [];
const run = (name, fn) => {
  try { const note = fn(); results.push({ name, ok: true, note }); }
  catch (e) { results.push({ name, ok: false, note: String(e.message || e).trim() }); }
};
const sub = (script, args = []) => {
  try {
    execFileSync('node', [path.join(ROOT, 'scripts', script), ...args], { cwd: ROOT, stdio: 'pipe' });
    return true;
  } catch (e) {
    const out = [e.stdout?.toString(), e.stderr?.toString()].filter(Boolean).join('\n').trim();
    throw new Error(out.split('\n').filter(l => l.trim()).slice(-6).join('\n'));
  }
};

// 1. THE RATCHET. The backlog of markers standing on unread plates may fall, never
//    rise. A new work must ship already read. (Wilson, 2026-09-02.)
run('plate ratchet — no new work adds to the unread backlog', () => {
  sub('plate-gate.mjs', ['--ratchet']);
  const b = read('data/plate-backlog-baseline.json');
  return `ceiling ${b.total} across ${Object.keys(b.works).length} works, not exceeded`;
});

// 2. Every englished work has had the blind polarity read (runbook 4a). `sites: 0`
//    is a real result; never having looked is not.
run('polarity — every englished work read for the mechanism-5/negation class', () => {
  sub('polarity-record.mjs', ['--gate']);
  return 'all englished works have a record';
});

// 3. No marker reached a reader as literal bracket text. This script has earned its
//    place three times (PG pages 2026-08-01 and 2026-08-04, the asterisk [cn:] 2026-08-24).
run('rendered markers — nothing shipped as raw [brackets]', () => {
  sub('scan-raw-markers.mjs');
  return 'clean across the built pages';
});

// 4. Every englished work actually has a built page. Catches a work marked `ours`
//    whose page was never generated — invisible on the landing page, which lists
//    RECENT explicitly rather than deriving it.
run('built pages — every englished work has one', () => {
  const works = read('data/works.json');
  const missing = [];
  for (const w of works.works) {
    if ((w.translation?.englishState ?? null) !== 'ours') continue;
    for (const t of w.texts ?? []) {
      if (String(t.volume ?? '') === '') continue;
      const slug = String(t.title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const p = path.join(ROOT, 'site/pl', String(t.volume), slug, 'index.html');
      if (!fs.existsSync(p)) missing.push(`${t.idno} ${t.title} → ${path.relative(ROOT, p)}`);
    }
  }
  if (missing.length) throw new Error(`no built page for:\n  ${missing.join('\n  ')}`);
  return 'all present';
});

// 5. THE 2026-08-05 FAILURE, made loud. A work page emits a link to its cruces page
//    whenever a cruces file exists; if build-cruces.mjs was not re-run, that link
//    404s while every other signal looks healthy.
run('cruces pages — every apparatus link has a page behind it', () => {
  const works = read('data/works.json');
  const missing = [];
  for (const w of works.works) {
    if ((w.translation?.englishState ?? null) !== 'ours') continue;
    for (const t of w.texts ?? []) {
      const src = path.join(ROOT, 'src/english', String(t.idno));
      if (!fs.existsSync(src)) continue;
      const hasCruces = fs.readdirSync(src).some(f => /^cruces.*\.md$/.test(f));
      if (!hasCruces || String(t.volume ?? '') === '') continue;
      const slug = String(t.title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const p = path.join(ROOT, 'site/cruces/pl', String(t.volume), slug, 'index.html');
      if (!fs.existsSync(p)) missing.push(`${t.idno} ${t.title} → ${path.relative(ROOT, p)}  (run build-cruces.mjs)`);
    }
  }
  if (missing.length) throw new Error(`apparatus link would 404 for:\n  ${missing.join('\n  ')}`);
  return 'all present';
});

// 6. THE 2026-09-02 FAILURE, made loud. first-english.mjs reads work-level
//    `translation`; a ship flag written to the TEXT record is read by nothing.
run('ship flags — translation lives on the WORK record, not the text', () => {
  const works = read('data/works.json');
  const stray = [];
  for (const w of works.works) {
    for (const t of w.texts ?? []) {
      if (t.translation && Object.keys(t.translation).length) {
        stray.push(`${t.idno} ${t.title} — text-level translation: ${JSON.stringify(t.translation).slice(0, 90)}`);
      }
    }
  }
  if (stray.length) {
    throw new Error(`translation written where nothing reads it:\n  ${stray.join('\n  ')}\n  Move it to the WORK record — first-english.mjs reads wk.translation.`);
  }
  return 'no stray text-level records';
});

// 7. Optional: structural verify on the works named on the command line.
for (const idno of argv) {
  run(`verify-english ${idno}`, () => { sub('verify-english.mjs', [idno]); return 'columns/notes/sections aligned'; });
}

const pad = Math.max(...results.map(r => r.name.length));
console.log('');
for (const r of results) {
  console.log(`${r.ok ? '✓' : '⛔'} ${r.name.padEnd(pad)}  ${r.ok ? r.note : ''}`);
  if (!r.ok) console.log(`\n${r.note}\n`);
}
const failed = results.filter(r => !r.ok);
if (failed.length) {
  console.error(`\n⛔ PREFLIGHT FAILED — ${failed.length} of ${results.length}. Do not deploy.`);
  process.exit(1);
}
console.log(`\npreflight OK — ${results.length} checks. Clear to deploy.`);
