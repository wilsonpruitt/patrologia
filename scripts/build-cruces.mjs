// Build /cruces/ — the per-work lists of cruces, published.
//
// WHY THIS EXISTS. content/editorial-method.md has always said, in the
// edition's own voice, "The cruces are published with the work, not held
// back," and "Each translated work carries a list of cruces — the places where
// the plate is defective or the reading uncertain, given by column, with the
// printed form, what was done, and why." Until 2026-08-01 that was NOT TRUE of
// the deployed site: 96 built work pages were checked and not one mentioned or
// linked its cruces, /method was the only page on the site that contained the
// word, and the repository is private — so no reader could reach a single crux.
// The claim a sceptical reader would most want to test was the one claim the
// site did not honour. This builder closes that gap.
//
// EDITORIAL DECISION (Wilson, 2026-08-01): the cruces are published AS WRITTEN,
// not groomed into a tidier apparatus. They are working editorial notes and
// they say so on the page. Grooming 91 works would have delayed publication
// indefinitely and would have quietly removed the record of how decisions were
// actually reached — which is the part that makes them checkable. The corpus
// was scanned before publishing: no absolute paths, no addresses, no
// credentials, no private URLs. Where a note names the drafting model, that is
// consistent with /method, which already discloses LLM-assisted drafting.
//
// NOT IN THE NAV, deliberately (Wilson): reached from /method and from each
// work page. NAV_ITEMS in lib/chrome.mjs is untouched.

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer, esc } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const SITE = path.join(ROOT, 'site');
const ENG = path.join(ROOT, 'src/english');

/* ---------------- markdown → html ----------------
   Same dialect as build-method.mjs (escape first, then bold before italic so
   ** is not eaten as two single-asterisk runs), plus the constructs the cruces
   actually use: tables, blockquotes, rules, and nested-looking continuation
   lines. Deliberately small: these files are prose and lists, not a CMS. */

function inline(md) {
  let s = esc(md);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  // ***x*** first, then bold, then italic. The bold pattern deliberately allows
  // an inner *italic* run: the cruces routinely write **Πλάστης → *Creator***
  // (a bolded lemma containing an italicised Latin gloss), and a bold rule of
  // [^*]+ cannot match across it — which left raw ** on the rendered page.
  s = s.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
  s = s.replace(/\*\*((?:[^*]|\*[^*]+\*)+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // Only absolute https links become <a>; anything else stays literal text, so
  // a stray bracket in a crux cannot emit a broken link.
  s = s.replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g,
    (m, t, u) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`);
  return s;
}

function renderRow(cells, tag) {
  return '<tr>' + cells.map(c => `<${tag}>${inline(c.trim())}</${tag}>`).join('') + '</tr>';
}

function mdToHtml(src) {
  const out = [];
  const blocks = src.split(/\n{2,}/).map(b => b.replace(/\s+$/, '')).filter(b => b.trim());
  for (const b of blocks) {
    const lines = b.split('\n');

    // horizontal rule
    if (/^\s*---+\s*$/.test(b)) { out.push('<hr>'); continue; }

    // heading. The file's single leading # is the work title, shown in the
    // masthead instead, so it is dropped here.
    const h = b.match(/^(#{1,6})\s+(.*)$/);
    if (h && lines.length === 1) {
      if (h[1].length === 1) continue;
      const lvl = Math.min(h[1].length, 4);
      out.push(`<h${lvl}>${inline(h[2])}</h${lvl}>`);
      continue;
    }

    // table: a header row, a separator row of dashes, then body rows
    if (lines.length >= 2 && /^\s*\|/.test(lines[0]) && /^\s*\|?[\s:|-]+\|/.test(lines[1])) {
      const cells = l => l.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|');
      const rows = [renderRow(cells(lines[0]), 'th')];
      for (const l of lines.slice(2)) if (/\|/.test(l)) rows.push(renderRow(cells(l), 'td'));
      out.push(`<div class="tablewrap"><table>${rows.join('')}</table></div>`);
      continue;
    }

    // blockquote
    if (/^\s*>/.test(lines[0])) {
      const text = lines.map(l => l.replace(/^\s*>\s?/, '')).join(' ');
      out.push(`<blockquote><p>${inline(text)}</p></blockquote>`);
      continue;
    }

    // list. A block may open with a lead-in sentence and only THEN start its
    // items, with no blank line between — the cruces do this constantly
    // ("...both worth naming: - **x** ... - **y** ..."). Splitting the lead-in
    // off first is what stops those dashes rendering literally mid-paragraph.
    const firstItem = lines.findIndex(l => /^\s*(?:[-*]|\d+\.)\s+/.test(l));
    if (firstItem > 0) {
      out.push(`<p>${inline(lines.slice(0, firstItem).join(' '))}</p>`);
      lines.splice(0, firstItem);
    }
    const bullet = /^\s*[-*]\s+/.test(lines[0]);
    const ordered = /^\s*\d+\.\s+/.test(lines[0]);
    if (bullet || ordered) {
      const marker = bullet ? /^\s*[-*]\s+/ : /^\s*\d+\.\s+/;
      const items = [];
      for (const l of lines) {
        if (marker.test(l)) items.push(l.replace(marker, '').trim());
        else if (items.length) items[items.length - 1] += ' ' + l.trim();
        else items.push(l.trim());
      }
      const tag = bullet ? 'ul' : 'ol';
      out.push(`<${tag}>` + items.map(i => `<li>${inline(i)}</li>`).join('') + `</${tag}>`);
      continue;
    }

    out.push(`<p>${inline(lines.join(' '))}</p>`);
  }
  return out.join('\n');
}

/* ---------------- what work does a cruces dir belong to? ----------------
   Built work pages are the authority on the public URL (build-landing.mjs uses
   the same scan). Their <title> is "Author, Title — PL 70, 1055–1106 · Migne".
   The per-work index JSONs carry the same title against the src/english dir
   name, so (series, volume, title) joins the two. */

const norm = s => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const pages = [];
for (const series of ['pl', 'pg']) {
  const dir = path.join(SITE, series);
  if (!fs.existsSync(dir)) continue;
  for (const vol of fs.readdirSync(dir)) {
    if (!/^\d+$/.test(vol)) continue;
    for (const slug of fs.readdirSync(path.join(dir, vol))) {
      const page = path.join(dir, vol, slug, 'index.html');
      if (!fs.existsSync(page)) continue;
      const m = fs.readFileSync(page, 'utf8')
        .match(/<title>(.*?), (.*?) — P[LG] \d+, [\d–-]+ · Migne<\/title>/);
      if (!m) continue;
      pages.push({ series, vol: parseInt(vol, 10), slug, author: m[1], title: m[2] });
    }
  }
}

const byKey = new Map(); // src/english dir -> {series, vol, title}
for (const series of ['pl', 'pg']) {
  const dir = path.join(ROOT, 'data/index', series);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.json')) continue;
    const d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    byKey.set(f.replace(/\.json$/, ''), { series, vol: d.volume, title: d.title });
  }
}

const resolved = new Map(); // key -> page
for (const [key, meta] of byKey) {
  const hit = pages.find(p =>
    p.series === meta.series && p.vol === meta.vol && norm(p.title) === norm(meta.title || ''));
  if (hit) resolved.set(key, hit);
}

/* ---------------- collect + render ---------------- */

const works = [];
for (const key of fs.readdirSync(ENG)) {
  const dir = path.join(ENG, key);
  if (!fs.statSync(dir).isDirectory()) continue;
  const files = fs.readdirSync(dir)
    .filter(f => /^cruces.*\.md$/.test(f))
    .sort((a, b) => (a === 'cruces.md' ? -1 : b === 'cruces.md' ? 1 : a.localeCompare(b)));
  if (!files.length) continue;
  const page = resolved.get(key);
  if (!page) { console.warn(`  (no built work page for ${key} — cruces not published)`); continue; }

  let parts = files.map(f => ({
    name: f,
    md: fs.readFileSync(path.join(dir, f), 'utf8'),
  }));

  // ⛔ DO NOT PUBLISH THE SAME APPARATUS TWICE (2026-08-30).
  //
  // Two merge FORMS exist in the corpus and both are legitimate. Some merged
  // cruces.md files EMBED their range files ("preserved below, unedited");
  // others — 11550, 11632, 11638, 8986 — are a merge LAYER only and carry just
  // what was reconciled across the ranges. This builder concatenates every
  // cruces*.md in the directory, so for the embedding form it published each
  // range file twice: once inside cruces.md and once standalone. Measured on
  // the live /cruces/pl/114/apocalypsis-b-joannis/ page, where body text from
  // cruces-0000.md and cruces-0010.md appeared twice over.
  //
  // The test is containment, measured, not a guess at the prose: what fraction
  // of a range file's text already appears inside cruces.md. Across the whole
  // corpus that number is strictly bimodal — 95–100% for the eight embedding
  // merges, 0% for the six layer merges — so any threshold in the gap does the
  // same thing. Nothing is inferred from wording, which drifts.
  //
  // ⚑ It NEVER drops text: a skipped file is reported, and any window of it not
  // found in cruces.md is warned about by name. If that warning ever fires,
  // the merge is missing something its range file has — go and look.
  const mergedPart = parts.find(p => p.name === 'cruces.md');
  if (mergedPart && parts.length > 1) {
    // Compare by SENTENCE, not by fixed-width window. A merge re-wraps the text
    // it embeds, so any fixed window straddles a wrap difference and reports a
    // false miss; sentences are stable under re-wrapping. Horizontal rules and
    // heading markers are stripped first for the same reason — the merge demotes
    // headings one level, which is not a difference in content.
    const norm = s => s
      .replace(/^\s*-{3,}\s*$/gm, '')
      .replace(/^#{1,6}\s*/gm, '')
      .replace(/\s+/g, ' ')
      .trim();
    const mergedText = norm(mergedPart.md);
    const windows = md => norm(md)
      .split(/(?<=[.!?])\s+(?=[A-ZÀ-Þ⛔⚠⭐⚑*`])/)
      .filter(s => s.length > 70);
    const kept = [];
    for (const part of parts) {
      if (part.name === 'cruces.md') { kept.push(part); continue; }
      const ws = windows(part.md);
      if (!ws.length) { kept.push(part); continue; }
      // A sentence can fail the whole-string test for a reason that is not a
      // difference in content: the merge joined or split a paragraph around it,
      // so the sentence as this file punctuates it never occurs contiguously in
      // the merge even though every word of it does. Treat a sentence as present
      // when both its head and its tail are in the merge; a real edit (8977's
      // superseded "has been checked" against "was checked when it was written")
      // changes one of them and is still caught.
      const present = w => mergedText.includes(w) ||
        (w.length > 120 && mergedText.includes(w.slice(0, 55)) && mergedText.includes(w.slice(-55)));
      const missing = ws.filter(w => !present(w));
      const contained = 1 - missing.length / ws.length;
      if (contained >= 0.9) {
        console.log(`  ${key}: ${part.name} is ${(contained * 100).toFixed(0)}% inside cruces.md — publishing once, from the merge`);
        if (missing.length) {
          // Two legitimate causes, and they want opposite responses: the merge
          // is MISSING the passage (fold it in), or the merge deliberately
          // SUPERSEDED it (leave it — oecumenius-philippians cruces-0010 asked
          // the merge session to ratify or reverse a ruling, and it reversed it).
          // Read the passage before acting; do not fold in by reflex.
          console.warn(`  ⚠ ${key}: ${missing.length} passage(s) of ${part.name} are not in cruces.md and will not be published — fold in, or confirm the merge superseded them:`);
          for (const m of missing) console.warn(`      … ${m.slice(0, 130)}`);
        }
      } else {
        kept.push(part);
      }
    }
    parts = kept;
  }
  const entries = parts.reduce((n, p) =>
    n + (p.md.match(/^\s*[-*]\s*\*\*@?\d{3,4}/gm) || []).length, 0);
  if (process.env.CRUCES_AUDIT && files.length > 1) {
    console.log(`  AUDIT ${key}: ${files.length} file(s) on disk → ${parts.length} published (${parts.map(p => p.name).join(', ')})`);
  }
  works.push({ key, page, parts, entries, bytes: parts.reduce((n, p) => n + p.md.length, 0) });
}

works.sort((a, b) =>
  a.page.series.localeCompare(b.page.series) || a.page.vol - b.page.vol ||
  a.page.title.localeCompare(b.page.title));

const PREAMBLE = `<div class="cruces-note">
<p><strong>These are the edition's working notes, published as they were
written.</strong> They record, work by work, where Migne's plate is defective or
the reading uncertain: the printed form, what the English does with it, and why.
They are not a groomed apparatus. Where a note argues with itself, withdraws an
earlier decision, or leaves a question open, that is the record of how the
reading was actually reached, and it is left standing — a conjecture that is
visible can be checked, and one that has been tidied away cannot.</p>
<p>The English never silently repairs the page. A construable but wrong reading
is rendered literally and the conjecture is recorded here, never applied to the
text. <a href="/method/">How the English is produced and checked →</a></p>
</div>`;

let pagesWritten = 0;
for (const w of works) {
  const { series, vol, slug, author, title } = w.page;
  const outDir = path.join(SITE, 'cruces', series, String(vol), slug);
  fs.mkdirSync(outDir, { recursive: true });
  const body = w.parts.map(p => mdToHtml(p.md)).join('\n<hr>\n');
  const html = `${head({
    title: `Cruces — ${author}, ${title} · Migne`,
    description: `Textual cruces for ${title}: where Migne's plate is defective or the reading uncertain, by column, with the printed form and what was done.`,
    path: `/cruces/${series}/${vol}/${slug}/`,
  })}
${header(null)}
<main class="essay">
  <div class="essay-head">
    <p class="kicker"><a href="/cruces/">Cruces</a></p>
    <h1>${esc(title)}</h1>
    <p class="essay-sub">${esc(author)} — <a href="/${series}/${vol}/${slug}/">read the work &rarr;</a></p>
  </div>
  <article class="essay-body">
${PREAMBLE}
${body}
  </article>
</main>
${footer()}
</body>
</html>
`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  pagesWritten++;
}

/* ---------------- index ---------------- */

const groups = new Map();
for (const w of works) {
  const g = `${w.page.series}/${w.page.vol}`;
  if (!groups.has(g)) groups.set(g, []);
  groups.get(g).push(w);
}
const rows = [...groups.entries()].map(([g, ws]) => {
  const [series, vol] = g.split('/');
  const label = `${series === 'pl' ? 'PL' : 'PG'} ${vol}`;
  const items = ws.map(w => `      <li><a href="/cruces/${w.page.series}/${w.page.vol}/${w.page.slug}/">${esc(w.page.author)}, <em>${esc(w.page.title)}</em></a></li>`).join('\n');
  return `    <section class="volgroup">\n      <h3>${label}</h3>\n      <ul>\n${items}\n      </ul>\n    </section>`;
}).join('\n');

const totalEntries = works.reduce((n, w) => n + w.entries, 0);

const indexHtml = `${head({
  title: 'Cruces · Migne',
  description: `The edition's textual cruces, published work by work: where Migne's plate is defective or the reading uncertain, given by column, with the printed form, what was done, and why. ${works.length} works.`,
  path: '/cruces/',
})}
${header(null)}
<main class="essay">
  <div class="essay-head">
    <p class="kicker">The apparatus</p>
    <h1>Cruces</h1>
    <p class="essay-sub">Where the plate is defective or the reading uncertain — by column, with the printed form, what was done, and why. <strong>${works.length} works</strong>${totalEntries ? `, ${totalEntries.toLocaleString('en-US')} column-keyed entries` : ''}.</p>
  </div>
  <article class="essay-body">
${PREAMBLE}
${rows}
  </article>
</main>
${footer()}
</body>
</html>
`;
fs.mkdirSync(path.join(SITE, 'cruces'), { recursive: true });
fs.writeFileSync(path.join(SITE, 'cruces/index.html'), indexHtml);

console.log(`built site/cruces/ — ${pagesWritten} work pages + index (${works.length} works, ${totalEntries} column-keyed entries)`);
const missing = [...byKey.keys()].filter(k =>
  fs.existsSync(path.join(ENG, k, 'cruces.md')) && !resolved.has(k));
if (missing.length) console.warn(`  unresolved (cruces on disk, no built page): ${missing.join(' ')}`);
