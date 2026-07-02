// Parse patristica.net index pages (raw/html/{latina,graeca}.html) into data/volumes.json.
// Page structure: <a name='tNNN'></a> followed by repeated "NNN <a href='URL'>..." link lines.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function classify(url) {
  const host = new URL(url).hostname;
  if (host.includes('books.google')) {
    const id = new URL(url).searchParams.get('id');
    return { source: 'googlebooks', id };
  }
  if (host.endsWith('archive.org') && !host.startsWith('babel')) {
    const m = url.match(/\/details\/([^/?#]+)/);
    return { source: 'archive', id: m ? m[1] : null };
  }
  if (host === 'gallica.bnf.fr') {
    const m = url.match(/ark:\/[^?#]+/);
    return { source: 'gallica', id: m ? m[0] : null };
  }
  if (host === 'babel.hathitrust.org') {
    const m = url.match(/id=([^;&#]+)/);
    return { source: 'hathitrust', id: m ? decodeURIComponent(m[1]) : null };
  }
  return { source: 'other', id: null };
}

function parse(file, series) {
  const html = readFileSync(join(root, 'raw/html', `${file}.html`), 'utf-8');
  // Split on anchor definitions; segment i belongs to anchor i.
  const parts = html.split(/<a name='(t[^']+)'><\/a>/);
  const volumes = [];
  for (let i = 1; i < parts.length; i += 2) {
    const anchor = parts[i];
    const segment = parts[i + 1];
    const links = [];
    for (const m of segment.matchAll(/href='(https?:\/\/[^']+)'/g)) {
      const url = m[1];
      // Nav/footer links (concordances, dictionaries) don't repeat the tome label before them.
      links.push({ url, ...classify(url) });
    }
    volumes.push({
      series,
      tome: anchor.slice(1), // "001", "016a", ...
      anchor,
      links,
      sources: [...new Set(links.map((l) => l.source))].sort(),
    });
  }
  return volumes;
}

const volumes = [...parse('latina', 'PL'), ...parse('graeca', 'PG')];

// Merge archive.org supplements (discovered holdings beyond patristica.net) if present.
let supplements = {};
try {
  supplements = JSON.parse(readFileSync(join(root, 'data/archive-supplements.json'), 'utf-8')).supplements;
} catch { /* first run, before supplements exist */ }
for (const v of volumes) {
  const extra = supplements[`${v.series} ${v.tome}`];
  if (!extra) continue;
  v.archiveSupplements = extra;
  if (!v.sources.includes('archive')) v.sources = [...v.sources, 'archive'].sort();
}

// Sanity: every link should carry an extracted id for the big three sources.
const missingId = volumes.flatMap((v) =>
  v.links.filter((l) => ['googlebooks', 'archive', 'gallica'].includes(l.source) && !l.id)
    .map((l) => `${v.series} ${v.tome}: ${l.url}`)
);
if (missingId.length) console.warn('links with unextracted ids:\n' + missingId.join('\n'));

writeFileSync(
  join(root, 'data/volumes.json'),
  JSON.stringify({ generated: new Date().toISOString().slice(0, 10), source: 'patristica.net', volumes }, null, 2)
);

// Report
for (const series of ['PL', 'PG']) {
  const vs = volumes.filter((v) => v.series === series);
  const noArchive = vs.filter((v) => !v.sources.includes('archive'));
  const gbOnly = vs.filter((v) => v.sources.every((s) => s === 'googlebooks'));
  const noLinks = vs.filter((v) => v.links.length === 0);
  console.log(`${series}: ${vs.length} tomes, ${vs.reduce((n, v) => n + v.links.length, 0)} links`);
  console.log(`  no archive.org copy: ${noArchive.length} -> ${noArchive.map((v) => v.tome).join(' ')}`);
  console.log(`  googlebooks ONLY:    ${gbOnly.length} -> ${gbOnly.map((v) => v.tome).join(' ')}`);
  if (noLinks.length) console.log(`  NO LINKS AT ALL:     ${noLinks.map((v) => v.tome).join(' ')}`);
}
