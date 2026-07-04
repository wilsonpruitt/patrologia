#!/usr/bin/env node
// build-gap-map.mjs — Phase 2 deliverable: which PG volumes have NO usable
// machine-readable transcription yet (the only legitimate vision-OCR targets).
//
// PL is not included here: Corpus Corporum already covers 217/221 PL volumes
// (87M words, sources/pl/tei/) — that gap is already closed, tracked in
// data/cc-pl-index.json + data/pl-vol-map, not repeated here.
//
// Coverage tiers (see note fields for confidence):
//   calfa    — verified via sources/pg/calfa/README.md (33 vols, real word
//              counts, CER 1.05%/WER 4.69% baseline). HIGH confidence.
//   gap      — no known machine-readable transcription. DEFAULT for anything
//              not in the calfa list.
//
// First1KGreek/OGL checklist: verified (2026-07-04 research pass) to hold
// real transcribed text for Origen, Eusebius, Epiphanius, Hippolytus,
// Methodius, Theodoret, and Gregory of Nazianzus among early authors, plus
// Zonaras and Anna Comnena as later exceptions. As of the 2026-07-04 tome-
// author index (data/pg-tome-authors.json, built from archive.org's own
// per-item catalog descriptions — see scripts/build-pg-tome-index.mjs +
// resolve-pg-authors.mjs), this is now cross-checked against REAL tome
// numbers where the archive.org record resolves cleanly; authors not found
// below still need a dedicated search pass before being applied to any
// tome (see firstOneKCandidateAuthors.stillUnconfirmed).

import fs from 'node:fs';
import path from 'node:path';

const root = path.join(import.meta.dirname, '..');

const volumes = JSON.parse(fs.readFileSync(path.join(root, 'data/volumes.json'), 'utf8'));
const pgTomes = volumes.volumes.filter(v => v.series === 'PG').map(v => v.tome);

const pgAuthorsPath = path.join(root, 'data/pg-tome-authors.json');
const pgAuthors = fs.existsSync(pgAuthorsPath)
  ? JSON.parse(fs.readFileSync(pgAuthorsPath, 'utf8'))
  : null;
const pgAuthorByTome = new Map((pgAuthors?.tomes || []).filter(t => t.author).map(t => [t.tome, t]));

const readme = fs.readFileSync(path.join(root, 'sources/pg/calfa/README.md'), 'utf8');
const calfaRows = [...readme.matchAll(/^\|\s*([\d.]+)\s*\|\s*([^|]+)\|\s*([^|]+)\|\s*\[[^\]]+\]\(([^)]+)\)\s*\|\s*([\d,]+)\s*\|$/gm)]
  .map(m => ({
    calfaTome: m[1].trim(),
    era: m[2].trim(),
    authorWork: m[3].trim(),
    pdfLink: m[4].trim(),
    words: Number(m[5].replace(/,/g, '')),
  }));

// normalize "16.3" -> "016-3", "3" -> "003", "87.1" -> "087-1"
function calfaTomeToRegistryTome(calfaTome) {
  if (calfaTome.includes('.')) {
    const [whole, part] = calfaTome.split('.');
    return `${whole.padStart(3, '0')}-${part}`;
  }
  return calfaTome.padStart(3, '0');
}

const calfaByTome = new Map(calfaRows.map(r => [calfaTomeToRegistryTome(r.calfaTome), r]));

if (calfaByTome.size !== calfaRows.length) {
  console.error(`WARNING: tome-key collisions building calfaByTome (${calfaRows.length} rows -> ${calfaByTome.size} keys)`);
}

let unmatched = 0;
const gapMap = {
  generated: 'build-gap-map.mjs',
  source: {
    registry: 'data/volumes.json (PG series, 167 tomes incl. sub-parts)',
    calfa: 'sources/pg/calfa/README.md (33 vols table)',
  },
  totals: { registryTomes: pgTomes.length, calfaCoveredTomes: 0, gapTomes: 0, calfaWords: 0, gapTomesWithAuthor: 0 },
  firstOneKCandidateAuthors: {
    note: 'Checklist authors verified present in First1KGreek/canonical-greekLit (2026-07-04 research pass). confirmedTomes below is computed from data/pg-tome-authors.json (archive.org catalog descriptions, per-tome — not memory, not scraped). stillUnconfirmed authors have no tome match yet; do not apply First1KGreek to them without a dedicated search pass.',
    authors: [],
    stillUnconfirmed: [],
  },
  volumes: [],
};

const CHECKLIST_AUTHORS = [
  { name: 'Origen', match: /origen/i },
  { name: 'Eusebius of Caesarea', match: /eusebius/i },
  { name: 'Epiphanius of Salamis', match: /epiphanius/i },
  { name: 'Hippolytus', match: /hippolytus/i },
  { name: 'Methodius of Olympus', match: /methodius/i },
  { name: 'Theodoret of Cyrus', match: /theodoret/i },
  { name: 'Gregory of Nazianzus', match: /gregori?us nazianz/i },
  { name: 'John Zonaras (already Calfa-covered, PG 134)', match: /zonaras/i },
  { name: 'Anna Comnena (PG volume unconfirmed)', match: /comnena/i },
];

for (const { name, match } of CHECKLIST_AUTHORS) {
  const tomes = [...pgAuthorByTome.entries()].filter(([, v]) => match.test(v.author)).map(([t]) => t);
  if (tomes.length) {
    gapMap.firstOneKCandidateAuthors.authors.push({ name, confirmedTomes: tomes });
  } else {
    gapMap.firstOneKCandidateAuthors.stillUnconfirmed.push(name);
  }
}

for (const tome of pgTomes) {
  const calfa = calfaByTome.get(tome);
  if (calfa) {
    gapMap.volumes.push({
      tome,
      status: 'calfa',
      author: calfa.authorWork,
      era: calfa.era,
      words: calfa.words,
      confidence: 'high — sourced from sources/pg/calfa/README.md',
    });
    gapMap.totals.calfaCoveredTomes++;
    gapMap.totals.calfaWords += calfa.words;
  } else {
    const authorHit = pgAuthorByTome.get(tome);
    gapMap.volumes.push({
      tome,
      status: 'gap',
      author: authorHit?.author || null,
      confidence: authorHit
        ? `${authorHit.confidence} — sourced from data/pg-tome-authors.json (${authorHit.evidence})`
        : 'default — no known machine-readable transcription; no author signal yet (see firstOneKCandidateAuthors)',
    });
    gapMap.totals.gapTomes++;
    if (authorHit) gapMap.totals.gapTomesWithAuthor++;
    unmatched++;
  }
}

fs.writeFileSync(path.join(root, 'data/gap-map.json'), JSON.stringify(gapMap, null, 2) + '\n');
console.log(`Wrote data/gap-map.json: ${gapMap.totals.calfaCoveredTomes} calfa-covered, ${gapMap.totals.gapTomes} gap, ${gapMap.totals.calfaWords.toLocaleString()} calfa words`);
if (calfaRows.length !== 33) console.error(`WARNING: expected 33 Calfa rows, parsed ${calfaRows.length}`);
