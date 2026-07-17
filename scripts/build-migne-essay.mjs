#!/usr/bin/env node
// Build /migne/ — the biography essay from content/migne-biography.md.
// Tailored markdown renderer for THIS document's features only: YAML frontmatter,
// # / ## headings, blank-line paragraphs, *italic*, and pandoc [^n] footnotes.
// (No lists, blockquotes, or links appear in the source — verified.)
//
// Usage: node scripts/build-migne-essay.mjs

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'content/migne-biography.md'), 'utf8');

// ---- strip frontmatter ----
let body = src;
const fm = src.match(/^---\n([\s\S]*?)\n---\n/);
if (fm) body = src.slice(fm[0].length);

// ---- split footnote definitions from body ----
const defs = new Map(); // n -> markdown text
body = body.replace(/^\[\^(\d+)\]:[ \t]+(.*)$/gm, (_, n, text) => { defs.set(n, text.trim()); return ''; });

// ---- inline formatting: escape, then *italic* and [^n] refs ----
const seen = new Set();
function inline(md, { refs = true } = {}) {
  let s = esc(md);
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  if (refs) {
    s = s.replace(/\[\^(\d+)\]/g, (_, n) => {
      seen.add(n);
      return `<sup class="fnref" id="fnref-${n}"><a href="#fn-${n}">${n}</a></sup>`;
    });
  }
  return s;
}

// ---- render body blocks ----
const blocks = body.split(/\n{2,}/).map(b => b.trim()).filter(Boolean);
const out = [];
for (const b of blocks) {
  const h = b.match(/^(#{1,3})\s+(.*)$/);
  if (h) {
    const level = h[1].length;
    // the document's single # is the title (rendered in the masthead), skip it here
    if (level === 1) continue;
    out.push(`  <h${level}>${inline(h[2], { refs: false })}</h${level}>`);
  } else {
    out.push(`  <p>${inline(b)}</p>`);
  }
}

// ---- footnotes section (only those referenced, in numeric order) ----
const fnNums = [...defs.keys()].filter(n => seen.has(n)).sort((a, b) => a - b);
const fnHtml = fnNums.map(n =>
  `    <li id="fn-${n}">${inline(defs.get(n), { refs: false })} <a class="fnback" href="#fnref-${n}" aria-label="Back to text">↩</a></li>`
).join('\n');

const title = 'Jacques-Paul Migne';
const subtitle = 'A life of the man whose books this site opens';

const html = `${head({
  title: `${title} (1800–1875) · Migne`,
  description: 'A life of Jacques-Paul Migne — the priest-publisher whose Patrologia this site opens: Saint-Flour, Petit-Montrouge, the fire of 1868, and the verdict of his biographers.',
  path: '/migne/',
})}

${header('migne')}

<main class="essay">
  <div class="essay-head">
    <p class="kicker">The man behind the books</p>
    <h1>${title}</h1>
    <p class="essay-sub">${subtitle} · 1800–1875</p>
  </div>
  <article class="essay-body">
${out.join('\n')}
    <hr class="rule-light">
    <section class="footnotes" aria-label="Notes">
      <h2>Notes</h2>
      <ol>
${fnHtml}
      </ol>
    </section>
  </article>
</main>

${footer()}`;

fs.mkdirSync(path.join(ROOT, 'site/migne'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'site/migne/index.html'), html);
console.log(`built site/migne/index.html (${out.length} blocks, ${fnNums.length} footnotes)`);
