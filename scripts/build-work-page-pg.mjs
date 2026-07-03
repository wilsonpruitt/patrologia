#!/usr/bin/env node
// Render a translated PG work as a static parallel Greek|English page in the
// approved migne.app design. PG variant of build-work-page.mjs.
// Usage: node scripts/build-work-page-pg.mjs <workKey>
// Emits site/pg/<vol>/<slug>/index.html.
//
// PG works from Calfa carry no section heads; alignment unit is the COLUMN.
// Both sides carry identical anchor sequences (verify-english-pg.mjs
// enforces), so the page pairs column blocks by anchor. Greek body is set in
// GFS Didot — the face Migne's own Greek type descends from.

import fs from 'node:fs';
import path from 'node:path';

const key = process.argv[2];
if (!key) { console.error('usage: node scripts/build-work-page-pg.mjs <workKey>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const grcDir = path.join(ROOT, 'src/greek', key);
const engDir = path.join(ROOT, 'src/english', key);
const manifest = JSON.parse(fs.readFileSync(path.join(grcDir, 'manifest.json'), 'utf8'));
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'));
const work = reg.works.find(w => w.key === key);

const body = f => fs.readFileSync(f, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '').trim();
const joined = dir => manifest.chunks
  .map(c => body(path.join(dir, `${String(c.chunk).padStart(4, '0')}.md`)))
  .join('\n\n');

const colRe = /\[(\d{4})\]/;
// split a full text into column blocks: [{col, text}], text keeps paragraph breaks
function columnBlocks(text) {
  const parts = text.split(/\[(\d{4})\]\s*/);
  const out = [];
  // parts[0] = preamble before first anchor (should be empty for grc; eng may open mid-flow)
  if (parts[0].trim()) out.push({ col: null, text: parts[0].trim() });
  for (let i = 1; i < parts.length; i += 2) out.push({ col: parts[i], text: (parts[i + 1] || '').trim() });
  return out;
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const colId = c => 'c' + String(parseInt(c, 10));
const colDisp = c => String(parseInt(c, 10));

function paras(text, lang) {
  return text.split(/\n\n+/).map(p => `<p>${esc(p.replace(/\n/g, ' ')).replace(/\*([^*]+)\*/g, '<i>$1</i>')}</p>`).join('\n');
}

const grcBlocks = columnBlocks(joined(grcDir));
const engBlocks = columnBlocks(joined(engDir));
if (grcBlocks.length !== engBlocks.length || grcBlocks.some((b, i) => b.col !== engBlocks[i].col)) {
  console.error('column-block mismatch — run verify-english-pg.mjs first');
  process.exit(1);
}

const passages = grcBlocks.map((gb, i) => `
<div class="col-rules passage colpair" id="${gb.col ? colId(gb.col) : ''}">
  <div>
    <div class="colhead"><a class="anchor" href="#${colId(gb.col)}">${colDisp(gb.col)}</a></div>
    <div class="coltext greek" lang="grc">
${paras(gb.text, 'grc')}
    </div>
  </div>
  <div>
    <div class="colhead colhead-en"><a class="anchor" href="#${colId(gb.col)}">${colDisp(gb.col)}</a></div>
    <div class="coltext english" lang="en">
${paras(engBlocks[i].text, 'en')}
    </div>
  </div>
</div>`).join('\n');

const vol = manifest.volume;
const slug = work.slug ?? work.titleEn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const colFirst = colDisp(manifest.colFirst), colLast = colDisp(manifest.colLast);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(work.author)}, ${esc(work.title)} — PG ${vol}, ${colFirst}–${colLast} · Migne</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
</head>
<body>

<header class="bar">
  <a class="wordmark" href="/">MIGNE<span class="tld">.APP</span></a>
  <nav>
    <a href="#">Latina</a>
    <a href="#" aria-current="page">Græca</a>
    <a href="#">Authors</a>
    <a href="#">The Queue</a>
    <a href="#">Migne</a>
  </nav>
</header>

<div class="work-head">
  <div class="vol-badge" aria-hidden="true">
    <span class="series-abbr">P·G</span>
    <span class="label">${esc(work.titleEn.toUpperCase())}</span>
    <span class="num">${vol}</span>
  </div>
  <div class="work-id">
    <p class="crumbs"><a href="#">Patrologia Græca</a> · <a href="#">Vol. ${vol}</a> · <a href="#">${esc(work.author)}</a></p>
    <h1>${esc(work.title.toUpperCase())}</h1>
    <p class="byline">${esc(work.author)} <span style="font-style:normal">(13th century)</span> · ${esc(work.titleEn)}</p>
    <p class="meta">PG ${vol}, coll. ${colFirst}–${colLast} &nbsp;·&nbsp; Greek from the Migne printing &nbsp;·&nbsp; <span class="first">First English translation</span> &nbsp;·&nbsp; column numbers follow the original plates; Greek and Latin swap sides page by page, so the Greek runs in the columns marked</p>
  </div>
</div>

<main class="columns">
${passages}
</main>

<section class="apparatus">
  <div class="apparatus-inner">
    <h2>On this text</h2>
    <p>Of Joel nothing is known but this book: a world chronicle in brief, from Adam to the taking of Constantinople by the crusaders in 1204, at which it breaks off with a cry — <i>and these things Christians did to Christians</i>. The Greek is Migne's printing (PG ${vol}, coll. ${colFirst}–${colLast}), which reprints Leo Allatius's 1651 edition with his Latin version in the facing column; our text rests on the Calfa–GRE<i>g</i>ORI optical transcription of the volume, corrected against the plates where the printer let a Greek line stray into the Latin column (three such restorations, each verified on the scan). The chronicle garbles history freely — kings conflated, reigns misnumbered — and the translation preserves every such reading; it translates what Migne prints. Each gilt column number is an address: <b>migne.app/pg/${vol}/${colId(manifest.colFirst).slice(1)}</b> resolves to the first.</p>
  </div>
</section>

<footer class="colophon">
  <p class="motto">Du bon, à bon marché — carried to its limit: <span class="free">the good, free.</span></p>
  <p class="fine">A WROOT PRESS WORK · THE TEXTS ARE THE CHURCH'S · THE SITE IS YOURS</p>
</footer>

</body>
</html>
`;

const outDir = path.join(ROOT, 'site/pg', String(vol), slug);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html);

// append PG-specific styles to site/styles.css once
const cssPath = path.join(ROOT, 'site/styles.css');
let css = fs.readFileSync(cssPath, 'utf8');
if (!css.includes('/* ---------- PG work page ---------- */')) {
  css += `
/* ---------- PG work page ---------- */
/* Greek body in GFS Didot — the face Migne's Greek type descends from */
.coltext.greek { font-family: var(--didot); font-size: .98rem; line-height: 1.72; }
.colpair { border-top: 0; }
.columns .colpair:first-child { border-top: 2px solid var(--encre); }
.colhead { margin: 1.4rem 0 .6rem; }
.colhead .anchor {
  float: none; display: inline-block; margin: 0;
  border-left: 2px solid var(--dorure); border-bottom: 0; border-right: 0;
  padding: 0 0 0 .35rem; width: auto; text-align: left;
}
.colhead-en { visibility: hidden; }
@media (max-width: 860px) { .colhead-en { visibility: visible; } }
`;
  fs.writeFileSync(cssPath, css);
}

console.log(`built site/pg/${vol}/${slug}/index.html (${grcBlocks.length} column blocks)`);
