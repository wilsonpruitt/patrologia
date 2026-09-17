#!/usr/bin/env node
// Refreshes data/triage/authors-status.json with live rollups computed from
// data/works.json, WITHOUT touching the original per-author verdict fields
// (status/verified/batch/words) — those record the 2026-07 author-level
// research (how much of an author's corpus has a PRIOR English translation
// anywhere in the world) and are not something a per-work pass can overwrite.
//
// What this adds, per author, computed fresh each run:
//   worksTotal      — works attributed to this author in works.json
//   worksShipped    — of those, englishState === 'ours' (we've already shipped it)
//   worksTriaged    — of those, workStatus is non-null (any triage tier, rigorous or cursory)
//   perWorkExceptions — works whose OWN workStatus disagrees with the author-level
//                       status in a way that matters (e.g. author 'none' but a work
//                       came back 'unclear'/'copyrighted'/'pd-ingested') — a flag to
//                       read before assuming every work under a 'none' author can
//                       claim "First English translation"; workStatus:'none' at work
//                       level is what actually gates the badge (scripts/lib/first-english.mjs).
//
// This is why the genre-survey brief's "73 vs 76 authors" mismatch existed: the old
// resume-note figure had implicitly excluded authors with worksShipped > 0. That's a
// real, useful filter (an author with shipped work isn't purely untouched frontier
// anymore) and now it's a field instead of tribal knowledge.
//
// Run: node scripts/refresh-authors-status.mjs

import fs from 'node:fs';

const astat = JSON.parse(fs.readFileSync('data/triage/authors-status.json', 'utf8'));
const works = JSON.parse(fs.readFileSync('data/works.json', 'utf8')).works;

const byAuthorIdno = new Map(astat.authors.map(a => [a.idno, a]));

// author idno -> { total, shipped, triaged, exceptions[] }
const rollup = new Map();
for (const idno of byAuthorIdno.keys()) rollup.set(idno, { worksTotal: 0, worksShipped: 0, worksTriaged: 0, perWorkExceptions: [] });

for (const w of works) {
  const tr = w.translation || {};
  for (const a of w.attributions || []) {
    const authorEntry = byAuthorIdno.get(a.authorIdno);
    if (!authorEntry) continue;
    const r = rollup.get(a.authorIdno);
    r.worksTotal++;
    if (tr.englishState === 'ours') r.worksShipped++;
    if (tr.workStatus != null) {
      r.worksTriaged++;
      // Flag only when the work's own status is NOT the strong evidence the
      // author-level 'none' would suggest — i.e. anything but 'none' itself.
      if (authorEntry.status === 'none' && tr.workStatus !== 'none') {
        r.perWorkExceptions.push({ workIdno: w.workIdno, workStatus: tr.workStatus, triageMethod: tr.triageMethod || 'rigorous-or-untagged' });
      }
    }
  }
}

for (const a of astat.authors) {
  const r = rollup.get(a.idno);
  a.worksTotal = r.worksTotal;
  a.worksShipped = r.worksShipped;
  a.worksTriaged = r.worksTriaged;
  if (r.perWorkExceptions.length) a.perWorkExceptions = r.perWorkExceptions;
  else delete a.perWorkExceptions;
}

astat.refreshed = new Date().toISOString().slice(0, 10);
astat.refreshNote = 'worksTotal/worksShipped/worksTriaged/perWorkExceptions computed live from data/works.json by scripts/refresh-authors-status.mjs. status/verified/batch/words are the original 2026-07 author-level research and are untouched by this script.';

fs.writeFileSync('data/triage/authors-status.json', JSON.stringify(astat, null, 1));

const noneAuthors = astat.authors.filter(a => a.status === 'none');
const pureFrontier = noneAuthors.filter(a => a.worksShipped === 0);
console.log(`Refreshed ${astat.authors.length} authors.`);
console.log(`'none'-status authors: ${noneAuthors.length} total, ${pureFrontier.length} with zero shipped works (the "pure" untouched frontier).`);
const withExceptions = astat.authors.filter(a => a.perWorkExceptions);
console.log(`${withExceptions.length} authors carry a perWorkExceptions flag (per-work triage disagrees with the author-level 'none').`);
for (const a of withExceptions) console.log(`  ${a.name} (${a.idno}):`, a.perWorkExceptions);
