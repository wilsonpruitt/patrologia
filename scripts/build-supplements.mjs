// Build data/archive-supplements.json: archive.org sources discovered 2026-07-02 that
// patristica.net doesn't know about. Consumed by build-volumes.mjs to compute real coverage.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(readFileSync(join(root, p), 'utf-8'));

const pgMega = read('data/cache/patrologia-volumes.json');
const plScans = read('data/cache/PatrologiaLatina.json');

const supplements = {}; // "PL 008" -> [{item, file?, note?}]
const add = (series, tome, entry) => {
  const key = `${series} ${tome}`;
  (supplements[key] ??= []).push(entry);
};

// PG: mega-item patrologia-volumes has NNN.pdf / NNN{a,b,c}.pdf for everything but 075.
// patristica.net part-splits are "007-1" etc.; mega-item uses "007a".
const partLetter = { 1: 'a', 2: 'b', 3: 'c' };
const pgFiles = new Set(pgMega.files.map((f) => f.name));
const volumesJson = read('data/volumes.json');
for (const v of volumesJson.volumes) {
  if (v.series !== 'PG') continue;
  const m = v.tome.match(/^(\d+)(?:-(\d))?$/);
  if (!m) continue;
  const base = m[1].padStart(3, '0');
  const name = m[2] ? `${base}${partLetter[m[2]]}.pdf` : `${base}.pdf`;
  if (pgFiles.has(name)) {
    add('PG', v.tome, { item: 'patrologia-volumes', file: name });
    const text = name.replace('.pdf', '_text.pdf');
    if (pgFiles.has(text)) add('PG', v.tome, { item: 'patrologia-volumes', file: text, note: 'text-layer variant' });
  }
}
// PG 075: absent from mega-item; candidate confirmed by vol field (series unverified — check first pages on download)
add('PG', '075', {
  item: 'bim_early-english-books-1641-1700_patrologiae-cursus-completus-_1859_75',
  note: 'VERIFY series on download: 1859 imprint fits PG (1857-66), but title does not say Graeca',
});

// PL: scans item "Patrologia Latina Vol. N.pdf" (85 vols)
for (const f of plScans.files) {
  const m = f.name.match(/Vol\. (\d+)\.pdf$/);
  if (m) add('PL', m[1].padStart(3, '0'), { item: 'PatrologiaLatina', file: f.name });
}
// PL orphans with dedicated items (volume field verified 2026-07-02)
const plDirect = {
  120: 'patrologiaecur120mign', 151: 'patrologiaecur151mign', 161: 'patrologiaecursu0161mign',
  167: 'patrologiaecur167mign', 187: 'patrologiaecursu187mign', 194: 'patrologiaecur194mign',
  201: 'patrologiaecursu0201mign', 186: 'patrologiaecursu186mign',
};
for (const [n, item] of Object.entries(plDirect)) add('PL', String(n).padStart(3, '0'), { item });

writeFileSync(join(root, 'data/archive-supplements.json'), JSON.stringify({
  generated: '2026-07-02',
  note: 'archive.org holdings beyond patristica.net links. Corpus-level mirrors: patrologia-latina_1-221 (Patrologia_Latina_1-221.zip, 351MB, all PL as text PDFs); patrologia-volumes (all PG scans, 348GB).',
  supplements,
}, null, 1));
console.log('supplement entries for', Object.keys(supplements).length, 'tomes');
