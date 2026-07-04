// Merges data/triage/perwork/result-*.json (per-work translation-status triage of
// partial/mixed-bucket PL authors) into data/works.json, normalizing a few known
// classification errors surfaced during the run (blog-sourced "copyrighted" claims,
// Brepols mislabeled as pd-ingested, etc).

import fs from 'node:fs';

const resultFiles = fs.readdirSync('data/triage/perwork').filter(f => /^result-\d+\.json$/.test(f));
const batchFiles = fs.readdirSync('data/triage/perwork').filter(f => /^batch-\d+\.json$/.test(f));

const allExpected = new Set();
for (const f of batchFiles) {
  const b = JSON.parse(fs.readFileSync(`data/triage/perwork/${f}`));
  for (const w of b.works) allExpected.add(w.workIdno);
}

const byWork = new Map();
const reclassified = [];

for (const f of resultFiles) {
  const r = JSON.parse(fs.readFileSync(`data/triage/perwork/${f}`));
  for (const item of r.results) {
    let { workIdno, status, note, confidence } = item;
    const noteStr = note || '';
    const origStatus = status;

    // Downgrade blog-sourced "copyrighted" claims lacking a named academic press.
    if (status === 'copyrighted' && /\bblog\b/i.test(noteStr) && !/press|university|brill|routledge|oxford|cambridge|brepols|liverpool|penguin|pims|acw|fotc|tth/i.test(noteStr)) {
      status = 'unclear';
      confidence = 'low';
    }

    // Brepols is a commercial academic press, not open-access — fix inverted labels.
    if (status === 'pd-ingested' && /brepols/i.test(noteStr)) {
      status = 'copyrighted';
    }

    // Fordham/Global Medieval Sourcebook are explicitly free public sourcebooks (CCEL-like).
    if (status === 'copyrighted' && /fordham medieval sourcebook|global medieval sourcebook/i.test(noteStr) && !/press|university press|brill|routledge|oup|cup/i.test(noteStr)) {
      status = 'pd-ingested';
    }

    if (status !== origStatus) {
      reclassified.push({ workIdno, from: origStatus, to: status, note: noteStr, batch: r.batch });
    }

    byWork.set(workIdno, { status, note: noteStr, confidence: confidence || null, batch: r.batch });
  }
}

console.log(`Loaded ${byWork.size} triaged works from ${resultFiles.length} result files.`);
console.log(`Reclassified ${reclassified.length} entries during normalization:`);
for (const r of reclassified) console.log(`  ${r.workIdno}: ${r.from} -> ${r.to} (batch ${r.batch})`);

const missing = [...allExpected].filter(w => !byWork.has(w));
if (missing.length) {
  console.log(`\nWARNING: ${missing.length} works from batch manifests have no result:`, missing.join(', '));
}

const extra = [...byWork.keys()].filter(w => !allExpected.has(w));
if (extra.length) {
  console.log(`\nNote: ${extra.length} result entries don't match any batch manifest workIdno (dup/typo?):`, extra.join(', '));
}

// englishState per the canonical vocabulary (ours | pd-ingested | elsewhere | untranslated).
// "unclear" triage results stay englishState:null so downstream untranslated-first gates
// don't mistake them for verified untranslated.
const STATUS_TO_ENGLISH_STATE = {
  'pd-ingested': 'pd-ingested',
  copyrighted: 'elsewhere',
  none: 'untranslated',
  unclear: null,
};

const works = JSON.parse(fs.readFileSync('data/works.json'));
let updated = 0;
for (const w of works.works) {
  const hit = byWork.get(w.workIdno);
  if (!hit) continue;
  w.translation.workStatus = hit.status;
  w.translation.englishState = STATUS_TO_ENGLISH_STATE[hit.status];
  w.translation.note = hit.note;
  w.translation.confidence = hit.confidence;
  w.translation.triageBatch = hit.batch;
  updated++;
}

works.generated = works.generated; // unchanged; per-work triage doesn't rebuild the spine
fs.writeFileSync('data/works.json', JSON.stringify(works, null, 2));
console.log(`\nUpdated ${updated} work records in data/works.json.`);

// Rollup for the resume note / future queue-building.
const counts = {};
for (const { status } of byWork.values()) counts[status] = (counts[status] || 0) + 1;
const rollup = {
  generated: 'perwork-triage-2026-07',
  totalWorksTriaged: byWork.size,
  counts,
  reclassifiedDuringNormalization: reclassified.length,
};
fs.writeFileSync('data/triage/perwork/rollup.json', JSON.stringify(rollup, null, 2));
console.log('\nStatus counts:', JSON.stringify(counts, null, 2));
