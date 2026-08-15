// Mechanical step of the "withdrawn" net (plan item 3):
// for every `withdraw*` mention in a cruces file, resolve its column, then ask
// whether a [sic: …] / [d: …] / [ed: …] marker exists at that column in the
// shipped English. A mention whose column carries NO marker is invisible to the
// marker sweep — that is the read-list.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = '/Users/wilsonpruitt/patrologia/src/english';
const COL = /\[([0-9]{3,5}[A-D]?)\]/g;
// column as written in a cruces line/heading: "Col 1034D", "col. 0091D", "@1141B", "**1894D §14**"
const CRUX_COL = /(?:col\.?\s*|@)?\b([0-9]{3,4}[A-D])\b/i;

const norm = c => c.replace(/^0+/, '').toUpperCase();

const rows = [];
for (const work of readdirSync(ROOT)) {
  const dir = join(ROOT, work);
  if (!statSync(dir).isDirectory()) continue;
  const files = readdirSync(dir);

  // 1. marker columns in the shipped chunks
  const markerCols = new Set();
  let markerTotal = 0;
  for (const f of files.filter(f => /^[0-9]+\.md$/.test(f))) {
    const text = readFileSync(join(dir, f), 'utf8');
    // walk the chunk, tracking the column anchor in force
    let cur = null, last = 0;
    COL.lastIndex = 0;
    const anchors = [...text.matchAll(COL)];
    const markers = [...text.matchAll(/\[(?:sic|d|ed):/g)];
    for (const m of markers) {
      markerTotal++;
      let col = null;
      for (const a of anchors) { if (a.index < m.index) col = a[1]; else break; }
      if (col) markerCols.add(norm(col));
    }
  }

  // 2. withdrawn mentions, with the nearest preceding column mention
  for (const f of files.filter(f => /^cruces.*\.md$/.test(f))) {
    const lines = readFileSync(join(dir, f), 'utf8').split('\n');
    let cur = null;
    lines.forEach((line, i) => {
      const c = line.match(CRUX_COL);
      if (c) cur = c[1];
      if (/withdraw/i.test(line)) {
        rows.push({
          work, file: f, line: i + 1,
          col: cur ? norm(cur) : null,
          hasMarker: cur ? markerCols.has(norm(cur)) : null,
          markerTotal,
          snippet: line.trim().slice(0, 110),
        });
      }
    });
  }
}

const fmt = r => `${r.work.padEnd(26)} ${String(r.col ?? '—').padEnd(7)} ${
  r.hasMarker === null ? 'NO-COL' : r.hasMarker ? 'marker' : '⚠ NONE '} ${r.file}:${r.line}`;

const invisible = rows.filter(r => r.hasMarker === false || r.hasMarker === null);
console.log(`${rows.length} mentions across ${new Set(rows.map(r => r.work)).size} works\n`);
console.log('=== column carries NO marker (invisible to the sweep) ===');
for (const r of invisible) console.log(fmt(r));
console.log('\n=== works with ZERO markers anywhere ===');
const zero = [...new Set(rows.filter(r => r.markerTotal === 0).map(r => r.work))];
console.log(zero.join(', ') || '(none)');
console.log('\n=== covered (column carries a marker the sweep read) ===');
for (const r of rows.filter(r => r.hasMarker === true)) console.log(fmt(r));
