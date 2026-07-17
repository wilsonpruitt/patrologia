#!/usr/bin/env node
// Render a translated work as a static parallel Latin|English page in the
// approved migne.app design (sketch/, commit 0c149a4).
// Usage: node scripts/build-work-page.mjs <textIdno>
// Emits site/pl/<vol>/<slug>/index.html (+ site/styles.css copied from sketch).
//
// Sections = `## ` blocks; Latin and English chunks carry identical section
// structure (verify-english.mjs enforces), so sections pair by index.
// Column anchors [0473A] become gilt margin links; ids follow the citation
// scheme (migne.app/pl/139/473a → id "c473a").

import fs from 'node:fs';
import path from 'node:path';
import { nav } from './lib/chrome.mjs';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/build-work-page.mjs <textIdno>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const latDir = path.join(ROOT, 'src/latin', String(idno));
const engDir = path.join(ROOT, 'src/english', String(idno));
const manifest = JSON.parse(fs.readFileSync(path.join(latDir, 'manifest.json'), 'utf8'));

const body = f => {
  const raw = fs.readFileSync(f, 'utf8');
  return raw.replace(/^---\n[\s\S]*?\n---\n/, '');
};
const joined = dir => manifest.chunks
  .map(c => body(path.join(dir, `${String(c.chunk).padStart(4, '0')}.md`)))
  .join('\n\n');

// split a full text into sections at ## heads
function sections(text) {
  const out = [];
  for (const part of ('\n' + text).split(/\n## /).slice(1)) {
    const nl = part.indexOf('\n');
    out.push({ head: part.slice(0, nl).trim(), text: part.slice(nl).trim() });
  }
  return out;
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const colParts = c => c.match(/^0*([0-9]+)([A-D]?)$/) ?? [c, c, ''];
const colId = c => { const [, n, b] = colParts(c); return 'c' + n + b.toLowerCase(); };
const colDisp = c => { const [, n, b] = colParts(c); return n + b; };

function inlineHtml(s, { anchorIds }) {
  return esc(s)
    .replace(/\[([0-9]{3,5}[A-D]?)\]\s*/g, (_, c) =>
      `<a class="anchor" href="#${colId(c)}"${anchorIds ? ` id="${colId(c)}"` : ''}>${colDisp(c)}</a>`)
    .replace(/\[n: ([^\]]*)\]/g, (_, n) => `<span class="notecite">${n}</span>`)
    .replace(/\*([^*]+)\*/g, '<i>$1</i>')
    // wrap runs of Hebrew (incl. maqaf/niqqud, U+0590–U+05FF) for correct RTL shaping
    .replace(/[֐-׿]+(?:\s+[֐-׿]+)*/g, m => `<span class="hebrew" dir="rtl" lang="he">${m}</span>`);
}

function blockHtml(text, opts) {
  const blocks = text.split(/\n\n+/);
  const html = [];
  for (const b of blocks) {
    const lines = b.split('\n');
    if (lines.every(l => l.startsWith('- ') || /^\[[0-9]{3,5}[A-D]?\]$/.test(l.trim()))) {
      html.push('<ul>' + lines.map(l =>
        l.startsWith('- ') ? `<li>${inlineHtml(l.slice(2), opts)}</li>` : `<li class="colmark">${inlineHtml(l.trim(), opts)}</li>`
      ).join('') + '</ul>');
    } else {
      html.push(`<p>${inlineHtml(b.replace(/\n/g, ' '), opts)}</p>`);
    }
  }
  return html.join('\n');
}

const latSecs = sections(joined(latDir));
const engSecs = sections(joined(engDir));
if (latSecs.length !== engSecs.length) {
  console.error(`section mismatch: Latin ${latSecs.length}, English ${engSecs.length} — run verify-english.mjs first`);
  process.exit(1);
}

const passages = latSecs.map((ls, i) => `
<div class="col-rules passage">
  <div>
    <h2 class="canon-head" lang="la">${inlineHtml(ls.head, { anchorIds: false })}</h2>
    <div class="coltext latin" lang="la">
${blockHtml(ls.text, { anchorIds: true })}
    </div>
  </div>
  <div>
    <h2 class="canon-head">${inlineHtml(engSecs[i].head, { anchorIds: false })}</h2>
    <div class="coltext english" lang="en">
${blockHtml(engSecs[i].text, { anchorIds: false })}
    </div>
  </div>
</div>`).join('\n');

const vol = manifest.volume;
const title = manifest.title;
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const colFirstDisp = colDisp(manifest.colFirst), colLastDisp = colDisp(manifest.colLast);
// Author display: English-first byline from data/author-bios.json, with the
// Latin form carried into the popup (and the index) to disambiguate. Dedicatees
// (royal/patron names Corpus Corporum lists in the author array but who did not
// write the work) are filtered out of author credit.
const bios = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/author-bios.json'), 'utf8'));
// Curated "On this text" paragraphs (data/work-about.json, keyed by textIdno).
// Curated prose must live in data, never only in generated HTML — a rebuild
// with no entry falls back to the generic paragraph.
const workAbout = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/work-about.json'), 'utf8'));
const bioOf = a => bios[a];
const credited = (manifest.authors ?? []).filter(a => !bioOf(a)?.dedicatee);
const displayName = a => bioOf(a)?.displayName ?? a;
const authorNames = credited.length ? credited.map(displayName).join(' and ') : 'Anonymous';

// each credited author with a bio becomes a native-popover trigger (no JS);
// authors without a bio render as plain text and fall back to the Latin form.
const authorCards = [];
const authorNode = (a, i) => {
  const b = bioOf(a), name = esc(displayName(a));
  if (!b?.bio) return name;
  const pid = `author-${i}`;
  const latinLine = b.latin && b.latin !== displayName(a)
    ? `\n  <p class="latin-name" lang="la">${esc(b.latin)}</p>` : '';
  const datesLine = b.dates ? `\n  <p class="dates">${esc(b.dates)}</p>` : '';
  authorCards.push(`<div id="${pid}" popover class="author-card">
  <h3>${name}</h3>${latinLine}${datesLine}
  <p class="bio">${esc(b.bio)}</p>
</div>`);
  return `<button type="button" class="author-pop" popovertarget="${pid}">${name}</button>`;
};
const authorNodes = credited.length ? credited.map(authorNode) : ['Anonymous'];
const authorLinks = authorNodes.join(' &amp; ');
const authorByline = authorNodes.join(' and ');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(authorNames)}, ${title} — PL ${vol}, ${parseInt(manifest.colFirst, 10)}–${parseInt(manifest.colLast, 10)} · Migne</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Frank+Ruhl+Libre:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<script defer src="/_vercel/insights/script.js"></script>
</head>
<body>

<header class="bar">
  <a class="wordmark" href="/">MIGNE<span class="tld">.APP</span></a>
${nav('latina')}
</header>

<div class="work-head">
  <div class="vol-badge" aria-hidden="true">
    <span class="series-abbr">P·L</span>
    <span class="label">${esc(title.toUpperCase())}</span>
    <span class="num">${vol}</span>
  </div>
  <div class="work-id">
    <p class="crumbs"><a href="/#shelf-pl-sec">Patrologia Latina</a> · <span>Vol. ${vol}</span> · ${authorLinks}</p>
    <h1>${esc(title.toUpperCase())}</h1>
    <p class="byline">${authorByline}</p>
    <p class="meta">PL ${vol}, coll. ${parseInt(manifest.colFirst, 10)}–${parseInt(manifest.colLast, 10)} &nbsp;·&nbsp; Latin from the Migne printing &nbsp;·&nbsp; <span class="first">First English translation</span> &nbsp;·&nbsp; column numbers follow the original plates, not the Garnier reprint</p>
  </div>
</div>
${authorCards.join('\n')}

<main class="columns">
${passages}
</main>

<section class="apparatus">
  <div class="apparatus-inner">
    <h2>On this text</h2>
    <p>${workAbout[String(idno)] ?? `The Latin is Migne's printing of <i>${esc(title)}</i> (PL ${vol}, coll. ${colFirstDisp}–${colLastDisp}), by ${esc(authorNames)}, from the Corpus Corporum transcription. Parenthetical references in small type stand on Migne's page — editorial identifications inherited from the edition he reprinted or supplied by his shop, not necessarily the author's own; the author's own citations run in the prose itself. Every gilt column mark is an address: <b>migne.app/pl/${vol}/${colId(manifest.colFirst).slice(1)}</b> resolves to the first.`}</p>
  </div>
</section>

<footer class="colophon">
  <p class="motto">Du bon, à bon marché — carried to its limit: <span class="free">the good, free.</span></p>
  <p class="fine">A WROOT PRESS WORK · THE TEXTS ARE THE CHURCH'S · THE SITE IS YOURS</p>
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

const outDir = path.join(ROOT, 'site/pl', String(vol), slug);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html);

// styles: sketch base + reading-page additions
let css = fs.readFileSync(path.join(ROOT, 'sketch/styles.css'), 'utf8');
css += `
/* ---------- work page: volume badge as a true spine ---------- */
/* one volume off the landing shelf: spine proportions, gilt head bands,
   morocco label running down the spine, volume number gilt at the tail */
.vol-badge {
  flex: none; width: 40px; height: 178px;
  display: flex; flex-direction: column; align-items: center;
  padding: 9px 0 10px;
  background: linear-gradient(90deg, #26543C 0%, var(--vert) 45%, #16301F 100%);
  border-top: 3px solid var(--dorure); border-bottom: 5px solid #0B140E;
  border-radius: 2px 2px 0 0;
  box-shadow: 3px 4px 8px rgba(20, 37, 25, .3);
  color: var(--dorure-pale); font-family: var(--didot);
}
.vol-badge .series-abbr {
  font-size: .58rem; letter-spacing: .14em; color: var(--dorure);
  padding-bottom: .3rem; border-bottom: 1px solid var(--dorure);
  margin-top: 0;
}
.vol-badge .label {
  flex: 1; display: flex; align-items: center; justify-content: center;
  writing-mode: vertical-rl;
  background: var(--maroquin); color: var(--dorure-pale);
  font-size: .58rem; letter-spacing: .26em;
  width: 28px; margin: .55rem 0 .5rem; padding: .4rem 0;
  overflow: hidden;
}
.vol-badge .num {
  display: block; font-size: .92rem; color: var(--dorure);
  letter-spacing: .04em; margin-top: 0; background: none; padding: 0;
}

/* ---------- work page: sections + note citations ---------- */
/* modern u everywhere Latin appears (locked convention, commit 0c149a4) —
   the sketch rule only covered .coltext.latin; heads are lang="la" too */
[lang="la"] { font-feature-settings: "locl" 0; }
.passage { border-top: 0; margin-bottom: .5rem; }
.columns .passage:first-child { border-top: 2px solid var(--encre); }
.canon-head {
  font-family: var(--didot); font-weight: 400; font-size: 1.05rem;
  letter-spacing: .04em; margin: 1.6rem 0 .8rem;
}
.canon-head i { font-style: italic; }
.notecite {
  font-size: .78em; color: var(--encre-douce); letter-spacing: .02em;
  white-space: nowrap;
}
.coltext ul { list-style: none; margin-bottom: 1em; }
.coltext li { margin-bottom: .2em; }
.coltext li.colmark { list-style: none; }

/* English column: anchors hang into the RIGHT page margin (outer edge),
   mirroring the Latin side — never into the center gutter where the rule runs */
.coltext.english .anchor {
  float: right; margin: .1em -3.4rem 0 .5em;
  border-right: 0; border-left: 2px solid var(--dorure);
  padding-right: 0; padding-left: .35rem; text-align: left;
}
/* below ~1080px the right margin is too tight for a hanging anchor —
   fall back to the inline treatment early (Latin's left hang just clips) */
@media (max-width: 1080px) {
  .coltext.english .anchor {
    float: none; display: inline-block; margin: 0 .5em 0 0;
    border-left: 0; border-bottom: 2px solid var(--dorure);
    width: auto; padding: 0 .1rem;
  }
}

/* ---------- author popover (native Popover API, no JS) ---------- */
/* the byline / crumbs author name is a button that opens a modest bio card;
   authors without a bio render as plain text (no button) */
.author-pop {
  font: inherit; color: inherit; background: none; border: 0; padding: 0;
  cursor: pointer; text-decoration: underline; text-decoration-color: var(--dorure);
  text-underline-offset: .18em; text-decoration-thickness: 1px;
}
.author-pop:hover { color: var(--maroquin); text-decoration-color: var(--maroquin); }
.crumbs .author-pop { text-decoration: none; }
.crumbs .author-pop:hover { text-decoration: underline; }
.author-card {
  max-width: 26rem; padding: 1.2rem 1.4rem; border: 0;
  background: var(--papier); color: var(--encre);
  border-top: 3px solid var(--dorure);
  box-shadow: 0 8px 30px rgba(20, 37, 25, .28);
}
.author-card h3 { font-family: var(--didot); font-weight: 400; font-size: 1.2rem; margin: 0 0 .1rem; }
.author-card .latin-name { font-style: italic; color: var(--encre-douce); font-size: .92rem; margin: 0 0 .1rem; }
.author-card .dates { font-size: .82rem; letter-spacing: .04em; color: var(--dorure); margin: 0 0 .7rem; text-transform: uppercase; }
.author-card .bio { font-size: .92rem; line-height: 1.6; margin: 0; }
.author-card::backdrop { background: rgba(20, 37, 25, .35); }

/* ---------- PG work page ---------- */
/* Emitted here too (identical to build-work-page-pg.mjs) so a PL rebuild,
   which fully rewrites site/styles.css, never drops the Greek-column rules
   a live PG page depends on. The PG builder strips+re-adds this same block
   by its comment header, so there is never a duplicate. */
.coltext.greek { font-family: var(--didot); font-size: .98rem; line-height: 1.72; }
.colpair { border-top: 0; padding-top: .4rem; }
.columns .colpair:first-child { border-top: 2px solid var(--encre); padding-top: 1.4rem; }
`;
fs.writeFileSync(path.join(ROOT, 'site/styles.css'), css);

console.log(`built site/pl/${vol}/${slug}/index.html (${latSecs.length} sections) + site/styles.css`);
