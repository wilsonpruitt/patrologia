#!/usr/bin/env node
// Merges a cursory (cheap) per-work triage file into data/works.json.
//
// This is the LOW-COST sibling of merge-perwork-triage.mjs. That script merges
// data/triage/perwork/result-*.json — a rigorous pass (multiple databases per
// work: ANF/NPNF/FOTC, academic catalogs, etc), run once in 2026-07 over
// partial/mixed-bucket authors. This script merges data/triage/perwork/cursory-*.json
// — 2 targeted WebSearch queries per work, run as-needed over the 'none'-author
// frontier that the rigorous pass never touched at work level (see
// data/briefs/GENRE-QUEUE-SURVEY-2026-09-17.md).
//
// The two tiers must stay visibly distinct in the data (CLAUDE.md rule 8's
// badge-integrity history: this exact claim has broken 3 times by two things
// quietly meaning different amounts of evidence). This script therefore ALWAYS
// writes translation.triageMethod alongside workStatus, and never overwrites a
// work that already carries a rigorous-tier result (no triageMethod field at
// all = rigorous/original batch, or explicit non-cursory triageBatch).
//
// Run: node scripts/merge-cursory-triage.mjs data/triage/perwork/cursory-<date>.json

import fs from 'node:fs';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/merge-cursory-triage.mjs <cursory-results.json>');
  process.exit(1);
}

const input = JSON.parse(fs.readFileSync(file, 'utf8'));
if (input.method !== 'cursory-2-query') {
  console.error(`Refusing to merge: method is "${input.method}", expected "cursory-2-query". This script is for the cheap tier only.`);
  process.exit(1);
}

// Same vocabulary mapping as merge-perwork-triage.mjs.
const STATUS_TO_ENGLISH_STATE = {
  'pd-ingested': 'pd-ingested',
  copyrighted: 'elsewhere',
  none: 'untranslated',
  unclear: null,
};

const works = JSON.parse(fs.readFileSync('data/works.json', 'utf8'));
const byWorkIdno = new Map(works.works.map(w => [w.workIdno, w]));

let updated = 0, skippedHadRigorous = 0, skippedNotFound = 0;
for (const r of input.results) {
  const w = byWorkIdno.get(r.workIdno);
  if (!w) { skippedNotFound++; console.log(`  SKIP ${r.workIdno}: no such work in works.json`); continue; }
  const tr = w.translation;
  if (tr.workStatus != null && !tr.triageMethod) {
    // Already has a verdict from the rigorous batch (no triageMethod = original tier). Never downgrade.
    skippedHadRigorous++;
    console.log(`  SKIP ${r.workIdno}: already has a rigorous-tier verdict (${tr.workStatus}) — cursory tier never overwrites it`);
    continue;
  }
  tr.workStatus = r.status;
  tr.englishState = STATUS_TO_ENGLISH_STATE[r.status] ?? tr.englishState ?? null;
  tr.note = r.note;
  tr.confidence = r.confidence;
  tr.triageMethod = 'cursory-2-query';
  tr.triageDate = input.generated;
  updated++;
}

fs.writeFileSync('data/works.json', JSON.stringify(works, null, 1));
console.log(`\nUpdated ${updated} work records (cursory tier). Skipped ${skippedHadRigorous} with an existing rigorous verdict, ${skippedNotFound} not found.`);
