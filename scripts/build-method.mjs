#!/usr/bin/env node
// Build /method/ — the editorial-method page from content/editorial-method.md.
//
// This page is the public face of translation-style.md and CLAUDE.md rule 8:
// it states how the English is produced (including that models draft it), what
// the literal-rendering rule forbids, what the verifier checks, and how a
// reader can check us. If a convention changes in translation-style.md, this
// document must change with it — they are the same policy, differently
// addressed.
//
// Tailored markdown renderer for THIS document's features only: YAML-ish
// leading italic note, # / ## headings, blank-line paragraphs, *italic*,
// **bold**, `code`, [text](url) links, "- " bullet lists and "1. " ordered lists.
// (No footnotes appear in the source — verified.)
//
// Usage: node scripts/build-method.mjs

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'content/editorial-method.md'), 'utf8');

// ---- inline formatting: escape first, then bold, italic, code ----
// Bold BEFORE italic: ** would otherwise be eaten as two single-asterisk runs.
function inline(md) {
  let s = esc(md);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // [text](url) — the sibling-corpus links in "Why translate this way". Only
  // absolute https: URLs are accepted; anything else is left as literal text
  // rather than emitted as a link, so a typo cannot become a broken <a>.
  s = s.replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g,
    (m, text, url) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`);
  // Root-relative internal links (/cruces/, /scripture/ ...). Same guard as
  // above — only a leading-slash path is accepted, so a stray bracket cannot
  // become a link — but no target/rel, because it does not leave the site.
  s = s.replace(/\[([^\]]+)\]\((\/[^\s)]*)\)/g,
    (m, text, url) => `<a href="${url}">${text}</a>`);
  return s;
}

// The source's one editorial aside is a repo-facing note to future sessions,
// not reader-facing prose. It is the italic block right after the title and is
// deliberately NOT published.
const isRepoNote = b => /^\*Reader-facing editorial note/.test(b);

const blocks = src.split(/\n{2,}/).map(b => b.trim()).filter(Boolean);
const out = [];
let dropped = 0;

for (const b of blocks) {
  if (isRepoNote(b)) { dropped++; continue; }

  const h = b.match(/^(#{1,3})\s+(.*)$/);
  if (h) {
    // the document's single # is the title (rendered in the masthead), skip it
    if (h[1].length === 1) continue;
    out.push(`  <h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
    continue;
  }

  // A list block: every line starts a "- " or "N. " item, with continuation
  // lines indented. Rejoin wrapped items before rendering.
  const bullet = /^- /.test(b);
  const ordered = /^\d+\.\s/.test(b);
  if (bullet || ordered) {
    const marker = bullet ? /^- / : /^\d+\.\s/;
    const items = [];
    for (const line of b.split('\n')) {
      if (marker.test(line)) items.push(line.replace(marker, '').trim());
      else if (items.length) items[items.length - 1] += ' ' + line.trim();
    }
    const tag = bullet ? 'ul' : 'ol';
    out.push(`  <${tag}>\n${items.map(i => `    <li>${inline(i)}</li>`).join('\n')}\n  </${tag}>`);
    continue;
  }

  out.push(`  <p>${inline(b.replace(/\n/g, ' '))}</p>`);
}

const title = 'How these translations are made';

const html = `${head({
  title: 'Method · Migne',
  description:
    'How the English on migne.app is produced and checked: a literal-rendering rule, Migne’s defects preserved rather than corrected, scripture translated from the printed page, mechanical verification against the Latin, and a published list of cruces for every work.',
  path: '/method/',
})}

${header('method')}

<main class="essay">
  <div class="essay-head">
    <p class="kicker">Editorial method</p>
    <h1>${title}</h1>
    <p class="essay-sub">What the rule is, what it forbids, and how to check us against the Latin.</p>
  </div>
  <article class="essay-body">
${out.join('\n')}
  </article>
</main>

${footer()}`;

fs.mkdirSync(path.join(ROOT, 'site/method'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'site/method/index.html'), html);
console.log(`built site/method/index.html (${out.length} blocks, ${dropped} repo-note block dropped)`);
