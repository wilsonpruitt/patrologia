// Builds research batches for per-work triage of authors bucketed 'partial'/'mixed-bucket'
// at the author level in data/triage/authors-status.json. Groups by author (keeps an
// author's texts together for research coherence), splits any author over MAX_PER_BATCH
// into sequential sub-batches. Output: data/triage/perwork/batch-NN.json manifests.

import fs from 'node:fs';

const MAX_PER_BATCH = 45;

const status = JSON.parse(fs.readFileSync('data/triage/authors-status.json'));
const works = JSON.parse(fs.readFileSync('data/works.json')).works;

const targets = status.authors.filter(a => a.status === 'partial' || a.status === 'mixed-bucket');
const targetIdno = new Map(targets.map(a => [a.idno, a]));

// author idno -> [{workIdno, title(s), volumes, colFirst, colLast}]
const byAuthor = new Map();
for (const w of works) {
  for (const a of w.attributions) {
    if (targetIdno.has(a.authorIdno)) {
      if (!byAuthor.has(a.authorIdno)) byAuthor.set(a.authorIdno, []);
      byAuthor.get(a.authorIdno).push({
        workIdno: w.workIdno,
        author: a.author,
        authorIdno: a.authorIdno,
        titles: w.texts.map(t => t.title),
        cpl: w.cpl,
        volumes: w.volumes,
        colFirst: w.colFirst,
        colLast: w.colLast,
        words: w.words,
      });
    }
  }
}

// Sort authors largest-first so big ones get their own dedicated batches,
// then pack remaining small authors together.
const authorEntries = [...byAuthor.entries()].sort((a, b) => b[1].length - a[1].length);

const batches = [];
let current = [];
let currentAuthors = new Set();

function flush() {
  if (current.length) {
    batches.push({ authors: [...currentAuthors], works: current });
    current = [];
    currentAuthors = new Set();
  }
}

for (const [authorIdno, worksList] of authorEntries) {
  if (worksList.length > MAX_PER_BATCH) {
    // Big author: flush whatever's pending, then chunk this author alone across N batches.
    flush();
    for (let i = 0; i < worksList.length; i += MAX_PER_BATCH) {
      batches.push({ authors: [authorIdno], works: worksList.slice(i, i + MAX_PER_BATCH) });
    }
    continue;
  }
  if (current.length + worksList.length > MAX_PER_BATCH) {
    flush();
  }
  current.push(...worksList);
  currentAuthors.add(authorIdno);
}
flush();

fs.mkdirSync('data/triage/perwork', { recursive: true });
batches.forEach((b, i) => {
  const n = String(i + 1).padStart(2, '0');
  fs.writeFileSync(`data/triage/perwork/batch-${n}.json`, JSON.stringify(b, null, 2));
});

console.log(`Built ${batches.length} batches, ${batches.reduce((s, b) => s + b.works.length, 0)} works total.`);
console.log('Batch sizes:', batches.map(b => b.works.length).join(', '));
