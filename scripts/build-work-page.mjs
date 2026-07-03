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

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Abbo of Fleury, ${title} — PL ${vol}, ${parseInt(manifest.colFirst, 10)}–${parseInt(manifest.colLast, 10)} · Migne</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
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
    <span class="num">${vol}</span>
    <span class="label">${esc(title.toUpperCase())}</span>
  </div>
  <div class="work-id">
    <p class="crumbs"><a href="#">Patrologia Latina</a> · <a href="#">Vol. ${vol}</a> · <a href="#">Abbo Floriacensis</a></p>
    <h1>${esc(title.toUpperCase())}</h1>
    <p class="byline">Abbo of Fleury <span style="font-style:normal">(† 1004)</span></p>
    <p class="meta">PL ${vol}, coll. ${parseInt(manifest.colFirst, 10)}–${parseInt(manifest.colLast, 10)} &nbsp;·&nbsp; Latin from the Migne printing &nbsp;·&nbsp; <span class="first">First English translation</span> &nbsp;·&nbsp; column numbers follow the original plates, not the Garnier reprint</p>
  </div>
</div>

<main class="columns">
${passages}
</main>

<section class="apparatus">
  <div class="apparatus-inner">
    <h2>On this text</h2>
    <p>Abbo, abbot of Fleury, addressed this collection of canons to Hugh Capet and his son Robert about 995–996 — a mirror of royal duty and a defense of the monastic order, stitched from councils, the Theodosian code, and the fathers. The Latin is Migne's printing (PL ${vol}, coll. ${colFirstDisp}–${colLastDisp}), from the Corpus Corporum transcription; Migne's text descends from the early modern editions and prints fifty-two chapters, where the one complete manuscript carries forty-four. Parenthetical references in small type are Migne's own. Every gilt column mark is an address: <b>migne.app/pl/${vol}/${colId(manifest.colFirst).slice(1)}</b> resolves to the first.</p>
  </div>
</section>

<footer class="colophon">
  <p class="motto">Du bon, à bon marché — carried to its limit: <span class="free">the good, free.</span></p>
  <p class="fine">A WROOT PRESS WORK · THE TEXTS ARE THE CHURCH'S · THE SITE IS YOURS</p>
</footer>

</body>
</html>
`;

const outDir = path.join(ROOT, 'site/pl', String(vol), slug);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html);

// styles: sketch base + reading-page additions
let css = fs.readFileSync(path.join(ROOT, 'sketch/styles.css'), 'utf8');
css += `
/* ---------- work page: sections + note citations ---------- */
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
`;
fs.writeFileSync(path.join(ROOT, 'site/styles.css'), css);

console.log(`built site/pl/${vol}/${slug}/index.html (${latSecs.length} sections) + site/styles.css`);
