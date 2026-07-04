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
// What this does NOT do (see RESULTS/summary for why): claim specific
// First1KGreek/OGL volume matches. First1KGreek was verified (2026-07-04
// research pass) to hold real transcribed text for Origen, Eusebius,
// Epiphanius, Hippolytus, Methodius, Theodoret, and Gregory of Nazianzus
// among early authors, plus Zonaras and Anna Comnena as later exceptions —
// but data/volumes.json carries NO per-volume author metadata (unlike PL's
// cc-pl-index.json), so mapping those author names to exact PG tome numbers
// without fabricating a lookup table needs a dedicated verification pass,
// not done here. `firstOneKCandidateAuthors` is carried as a checklist for
// that follow-up, not applied to any volume.

import fs from 'node:fs';
import path from 'node:path';

const root = path.join(import.meta.dirname, '..');

const volumes = JSON.parse(fs.readFileSync(path.join(root, 'data/volumes.json'), 'utf8'));
const pgTomes = volumes.volumes.filter(v => v.series === 'PG').map(v => v.tome);

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
  totals: { registryTomes: pgTomes.length, calfaCoveredTomes: 0, gapTomes: 0, calfaWords: 0 },
  firstOneKCandidateAuthors: {
    note: 'Verified present in First1KGreek/canonical-greekLit repos (2026-07-04 research pass) but NOT mapped to specific PG tome numbers here — data/volumes.json has no per-tome author metadata to match against. Follow-up: build a real PG tome->author index (analogous to data/cc-pl-index.json for PL) before applying this list.',
    authors: ['Origen', 'Eusebius of Caesarea', 'Epiphanius of Salamis', 'Hippolytus', 'Methodius of Olympus', 'Theodoret of Cyrus', 'Gregory of Nazianzus', 'John Zonaras (already Calfa-covered, PG 134)', 'Anna Comnena (PG volume unconfirmed)'],
  },
  volumes: [],
};

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
    gapMap.volumes.push({
      tome,
      status: 'gap',
      author: null,
      confidence: 'default — no known machine-readable transcription; not yet checked against First1KGreek/OGL author-by-author (see firstOneKCandidateAuthors)',
    });
    gapMap.totals.gapTomes++;
    unmatched++;
  }
}

fs.writeFileSync(path.join(root, 'data/gap-map.json'), JSON.stringify(gapMap, null, 2) + '\n');
console.log(`Wrote data/gap-map.json: ${gapMap.totals.calfaCoveredTomes} calfa-covered, ${gapMap.totals.gapTomes} gap, ${gapMap.totals.calfaWords.toLocaleString()} calfa words`);
if (calfaRows.length !== 33) console.error(`WARNING: expected 33 Calfa rows, parsed ${calfaRows.length}`);
