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
const colId = c => 'c' + String(parseInt(c.slice(0, 4), 10)) + c.slice(4).toLowerCase();
const colDisp = c => String(parseInt(c.slice(0, 4), 10)) + c.slice(4);

function inlineHtml(s, { anchorIds }) {
  return esc(s)
    .replace(/\[([0-9]{4}[A-D])\]\s*/g, (_, c) =>
      `<a class="anchor" href="#${colId(c)}"${anchorIds ? ` id="${colId(c)}"` : ''}>${colDisp(c)}</a>`)
    .replace(/\[n: ([^\]]*)\]/g, (_, n) => `<span class="notecite">${n}</span>`)
    .replace(/\*([^*]+)\*/g, '<i>$1</i>');
}

function blockHtml(text, opts) {
  const blocks = text.split(/\n\n+/);
  const html = [];
  for (const b of blocks) {
    const lines = b.split('\n');
    if (lines.every(l => l.startsWith('- ') || /^\[[0-9]{4}[A-D]\]$/.test(l.trim()))) {
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
const authorList = manifest.authors ?? [];
const authorNames = authorList.length ? authorList.join(' and ') : 'Anonymous';
const authorLinks = authorList.length
  ? authorList.map(a => `<a href="#">${esc(a)}</a>`).join(' &amp; ')
  : '<a href="#">Anonymous</a>';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(authorNames)}, ${title} — PL ${vol}, ${parseInt(manifest.colFirst, 10)}–${parseInt(manifest.colLast, 10)} · Migne</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<script defer src="/_vercel/insights/script.js"></script>
</head>
<body>

<header class="bar">
  <a class="wordmark" href="/">MIGNE<span class="tld">.APP</span></a>
  <nav>
    <a href="#" aria-current="page">Latina</a>
    <a href="#">Græca</a>
    <a href="#">Authors</a>
    <a href="#">The Queue</a>
    <a href="#">Migne</a>
  </nav>
</header>

<div class="work-head">
  <div class="vol-badge" aria-hidden="true">
    <span class="series-abbr">P·L</span>
    <span class="label">${esc(title.toUpperCase())}</span>
    <span class="num">${vol}</span>
  </div>
  <div class="work-id">
    <p class="crumbs"><a href="#">Patrologia Latina</a> · <a href="#">Vol. ${vol}</a> · ${authorLinks}</p>
    <h1>${esc(title.toUpperCase())}</h1>
    <p class="byline">${esc(authorNames)}</p>
    <p class="meta">PL ${vol}, coll. ${parseInt(manifest.colFirst, 10)}–${parseInt(manifest.colLast, 10)} &nbsp;·&nbsp; Latin from the Migne printing &nbsp;·&nbsp; <span class="first">First English translation</span> &nbsp;·&nbsp; column numbers follow the original plates, not the Garnier reprint</p>
  </div>
</div>

<main class="columns">
${passages}
</main>

<section class="apparatus">
  <div class="apparatus-inner">
    <h2>On this text</h2>
    <p>The Latin is Migne's printing of <i>${esc(title)}</i> (PL ${vol}, coll. ${colFirstDisp}–${colLastDisp}), by ${esc(authorNames)}, from the Corpus Corporum transcription. Parenthetical references in small type stand on Migne's page — editorial identifications inherited from the edition he reprinted or supplied by his shop, not necessarily the author's own; the author's own citations run in the prose itself. Every gilt column mark is an address: <b>migne.app/pl/${vol}/${colId(manifest.colFirst).slice(1)}</b> resolves to the first.</p>
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
`;
fs.writeFileSync(path.join(ROOT, 'site/styles.css'), css);

console.log(`built site/pl/${vol}/${slug}/index.html (${latSecs.length} sections) + site/styles.css`);
