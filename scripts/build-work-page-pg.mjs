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
import { nav } from './lib/chrome.mjs';

const key = process.argv[2];
if (!key) { console.error('usage: node scripts/build-work-page-pg.mjs <workKey>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const grcDir = path.join(ROOT, 'src/greek', key);
const engDir = path.join(ROOT, 'src/english', key);
const manifest = JSON.parse(fs.readFileSync(path.join(grcDir, 'manifest.json'), 'utf8'));
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'));
const work = reg.works.find(w => w.key === key);
if (!work) { console.error(`no pg-works.json entry for ${key}`); process.exit(1); }
const bios = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/author-bios.json'), 'utf8'));
const workAbout = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/work-about.json'), 'utf8'));

const body = f => fs.readFileSync(f, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '').trim();
const joined = dir => manifest.chunks
  .map(c => body(path.join(dir, `${String(c.chunk).padStart(4, '0')}.md`)))
  .join('\n\n');

// Rows pair Greek|English per column anchor, but CUT at the sentence end
// nearest BEFORE each anchor, not at the raw column break — Migne's columns
// break mid-sentence, and a row ending on a dangling article reads badly
// (Wilson, 2026-07-03). The anchor itself renders inline at its exact plate
// position, hanging into the margin (the Abbo treatment); no words move.
const anchorRe = /\[(\d{4})\]/g;
function sentenceRows(text, terminalRe) {
  const anchors = [...text.matchAll(anchorRe)];
  const cuts = anchors.map((m, i) => {
    if (i === 0) return 0;
    let last = m.index, mm;
    terminalRe.lastIndex = 0;
    while ((mm = terminalRe.exec(text.slice(0, m.index)))) last = mm.index + mm[0].length;
    return last;
  });
  return anchors.map((m, i) => ({
    col: m[1],
    text: text.slice(cuts[i], i + 1 < cuts.length ? cuts[i + 1] : text.length).trim(),
  }));
}
// sentence terminal + space, followed by a capital or a column anchor.
// Greek: '.' and ';' (erotimatiko) end sentences — the ano teleia does NOT.
const GRC_TERM = /[.;][)\]»]*\s+(?=[A-ZΑ-ΩἈ-ᾯὉ-Ὗ«]|\[\d{4}\])/g;
const ENG_TERM = /[.!?][)\]»”"']*\s+(?=[A-ZΑ-Ω«“"]|\[\d{4}\])/g;

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const colId = c => 'c' + String(parseInt(c, 10));
const colDisp = c => String(parseInt(c, 10));

function paras(text, { anchorIds }) {
  return text.split(/\n\n+/).map(p => {
    const inline = esc(p.replace(/\n/g, ' '))
      .replace(/\[(\d{4})\]\s*/g, (_, c) =>
        `<a class="anchor" href="#${colId(c)}"${anchorIds ? ` id="${colId(c)}"` : ''}>${colDisp(c)}</a>`)
      .replace(/\*([^*]+)\*/g, '<i>$1</i>')
      .replace(/[֐-׿]+(?:\s+[֐-׿]+)*/g, m => `<span class="hebrew" dir="rtl" lang="he">${m}</span>`);
    return `<p>${inline}</p>`;
  }).join('\n');
}

const grcText = joined(grcDir);
const engText = joined(engDir);
const grcBlocks = sentenceRows(grcText, GRC_TERM);
const engBlocks = sentenceRows(engText, ENG_TERM);
if (grcBlocks.length !== engBlocks.length || grcBlocks.some((b, i) => b.col !== engBlocks[i].col)) {
  console.error('row mismatch — run verify-english-pg.mjs first');
  process.exit(1);
}
// no words lost or duplicated by the row cuts
const words = s => s.replace(anchorRe, '').split(/\s+/).filter(Boolean).length;
for (const [blocks, full, name] of [[grcBlocks, grcText, 'grc'], [engBlocks, engText, 'eng']]) {
  const rowWords = blocks.reduce((a, b) => a + words(b.text), 0);
  if (rowWords !== words(full)) { console.error(`${name}: row cut lost/duplicated words (${rowWords} vs ${words(full)})`); process.exit(1); }
  for (const b of blocks) {
    const inRow = [...b.text.matchAll(anchorRe)].map(m => m[1]);
    if (inRow.length !== 1 || inRow[0] !== b.col) { console.error(`${name}: row ${b.col} carries anchors [${inRow}]`); process.exit(1); }
  }
}

const passages = grcBlocks.map((gb, i) => `
<div class="col-rules passage colpair">
  <div>
    <div class="coltext greek" lang="grc">
${paras(gb.text, { anchorIds: true })}
    </div>
  </div>
  <div>
    <div class="coltext english" lang="en">
${paras(engBlocks[i].text, { anchorIds: false })}
    </div>
  </div>
</div>`).join('\n');

const vol = manifest.volume;
const slug = work.slug ?? work.titleEn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const colFirst = colDisp(manifest.colFirst), colLast = colDisp(manifest.colLast);

// Author byline + popover card (PL builder pattern). Bio looked up by the
// registry's `author` string; a missing bio falls back to plain text —
// acceptable at stage time, not for deploy (runbook step 5). A card is
// warranted by a bio OR an attributionFlag — the flag must reach the reader
// (a byline naming the wrong author is its own defect, CLAUDE.md rule 8).
const bio = bios[work.author];
const datesDisp = bio?.dates ? ` <span style="font-style:normal">(${esc(bio.dates)})</span>` : '';
let authorNode = esc(work.author), authorCard = '';
if (bio?.bio || bio?.attributionFlag) {
  const dispName = bio.displayName ?? work.author;
  const latinLine = bio.latin && bio.latin !== dispName ? `\n  <p class="latin-name" lang="la">${esc(bio.latin)}</p>` : '';
  const datesLine = bio.dates ? `\n  <p class="dates">${esc(bio.dates)}</p>` : '';
  const bioLine = bio.bio ? `\n  <p class="bio">${esc(bio.bio)}</p>` : '';
  const flagLine = bio.attributionFlag ? `\n  <p class="attrib-flag">${esc(bio.attributionFlag)}</p>` : '';
  authorCard = `<div id="author-0" popover class="author-card">
  <h3>${esc(dispName)}</h3>${latinLine}${datesLine}${bioLine}${flagLine}
</div>`;
  authorNode = `<button type="button" class="author-pop" popovertarget="author-0">${esc(dispName)}</button>`;
}

// Badge per CLAUDE.md rule 8, same test as build-landing's PG_FIRSTS: the
// strong claim only on an explicit verified none; everything else fails safe.
const badge = (work.translationStatus === 'none' && !!work.translationStatusVerified)
  ? 'First English translation' : 'New English translation';

// "On this text": curated prose from data/work-about.json under `pg:<workKey>`
// (curated prose lives in data, never only in generated HTML); generic fallback.
const aboutHtml = workAbout[`pg:${key}`] ?? `The Greek is Migne's printing of <i>${esc(work.title)}</i> (PG ${vol}, coll. ${colFirst}–${colLast}), by ${esc(work.author)}; our text rests on the Calfa–GRE<i>g</i>ORI optical transcription of the volume, read at translation time against Migne's parallel Latin column and the scan of the plates, with every restoration logged. The translation renders what Migne prints. Each gilt column number is an address: <b>migne.app/pg/${vol}/${colId(manifest.colFirst).slice(1)}</b> resolves to the first.`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(work.author)}, ${esc(work.title)} — PG ${vol}, ${colFirst}–${colLast} · Migne</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Frank+Ruhl+Libre:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<script defer src="/_vercel/insights/script.js"></script>
</head>
<body>

<header class="bar">
  <a class="wordmark" href="/">MIGNE<span class="tld">.APP</span></a>
${nav('graeca')}
</header>

<div class="work-head">
  <div class="vol-badge" aria-hidden="true">
    <span class="series-abbr">P·G</span>
    <span class="label">${esc(work.titleEn.toUpperCase())}</span>
    <span class="num">${vol}</span>
  </div>
  <div class="work-id">
    <p class="crumbs"><a href="/#shelf-pg-sec">Patrologia Græca</a> · <span>Vol. ${vol}</span> · ${authorNode}</p>
    <h1>${esc(work.title.toUpperCase())}</h1>
    <p class="byline">${authorNode}${datesDisp} · ${esc(work.titleEn)}</p>
    <p class="meta">PG ${vol}, coll. ${colFirst}–${colLast} &nbsp;·&nbsp; Greek from the Migne printing &nbsp;·&nbsp; <span class="first">${badge}</span> &nbsp;·&nbsp; column numbers follow the original plates; Greek and Latin swap sides page by page, so the Greek runs in the columns marked</p>
  </div>
</div>
${authorCard}

<main class="columns">
${passages}
</main>

<section class="apparatus">
  <div class="apparatus-inner">
    <h2>On this text</h2>
    <p>${aboutHtml}</p>
  </div>
</section>

<footer class="colophon">
  <p class="motto">Du bon, à bon marché — carried to its limit: <span class="free">the good, free.</span></p>
  <p class="fine">A WROOT PRESS WORK · THE TEXTS ARE THE CHURCH'S · THE SITE IS YOURS</p>
  <p class="fine rights">The Latin and Greek are public domain. The English translations, notes, and structured text are &copy; 2026 Wilson Pruitt, licensed <a href="/rights/">CC BY&#8209;NC&nbsp;4.0</a> &mdash; free to share and build on, not to sell. <a href="/rights/">Commercial use, ask.</a></p>
</footer>

<script>
/* nearest-anchor fallback: a deep link to a column mark this page doesn't
   carry lands on the nearest preceding one instead of the page top */
document.addEventListener('DOMContentLoaded', function () {
  var m = location.hash.match(/^#c(\\d{1,4})([a-d])?$/);
  if (!m || document.getElementById(location.hash.slice(1))) return;
  for (var col = parseInt(m[1], 10); col >= ${parseInt(manifest.colFirst, 10)}; col--) {
    var tries = ['', 'd', 'c', 'b', 'a'];
    for (var i = 0; i < tries.length; i++) {
      var el = document.getElementById('c' + col + tries[i]);
      if (el) { el.scrollIntoView(); return; }
    }
  }
});
</script>

</body>
</html>
`;

const outDir = path.join(ROOT, 'site/pg', String(vol), slug);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html);

// append PG-specific styles to site/styles.css once
const cssPath = path.join(ROOT, 'site/styles.css');
let css = fs.readFileSync(cssPath, 'utf8');
// strip any previous PG block, then append the current one (idempotent rebuild)
css = css.replace(/\n\/\* ---------- PG work page ---------- \*\/[\s\S]*?(?=\n\/\* ----------|$)/, '');
css += `
/* ---------- PG work page ---------- */
/* Greek body in GFS Didot — the face Migne's Greek type descends from.
   Rows cut at sentence ends near each column anchor; anchors inline,
   hanging into the outer margins per the base .anchor rules. */
.coltext.greek { font-family: var(--didot); font-size: .98rem; line-height: 1.72; }
.colpair { border-top: 0; padding-top: .4rem; }
.columns .colpair:first-child { border-top: 2px solid var(--encre); padding-top: 1.4rem; }
`;
fs.writeFileSync(cssPath, css);

console.log(`built site/pg/${vol}/${slug}/index.html (${grcBlocks.length} column blocks)`);
