#!/usr/bin/env node
// Decade blocker — run after every 10 shipped works, before translating more.
// Usage: node scripts/decade-check.mjs
//
// The Bonaventure/Christian-Library convention: translation cadence pauses at each
// decade so accumulated small debts get collected instead of scrolling past in agent
// reports. This script COLLECTS mechanically — it does not fix. Everything it finds
// is a decision or a small edit; the point is that nothing stays invisible.
//
// Exit non-zero if any BLOCKING category is non-empty (things that corrupt the data
// layer). Advisory categories report but never block.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const p = (...a) => path.join(ROOT, ...a);
const read = f => fs.readFileSync(f, 'utf8');
const jread = f => JSON.parse(read(f));

const shipped = fs.readdirSync(p('src/english'))
  .filter(id => fs.existsSync(p('src/latin', id, 'manifest.json')));

const blocking = [], advisory = [];
const section = (arr, title, items, hint) => {
  if (items.length) arr.push({ title, items, hint });
};

// ─── 1. Scripture Migne prints inline, never wrapped in [n: ] ──────────────────
// The indexer only harvests [n: ] notes, so these are invisible to the scripture
// index. One occurrence is noise; a cluster means the harvester needs extending.
{
  const re = /\((?:I{1,3}V?\s+)?[A-Z][a-z]{1,7}\.\s+[IVXLCDM]+,\s*[0-9][^)]*\)/g;
  const hits = [];
  for (const id of shipped) {
    for (const f of fs.readdirSync(p('src/latin', id)).filter(x => /^\d+\.md$/.test(x))) {
      const body = read(p('src/latin', id, f)).replace(/\[n: [^\]]*\]/g, '');
      for (const m of body.match(re) || []) hits.push(`${id}/${f}: ${m}`);
    }
  }
  section(advisory, 'Scripture printed inline, not in [n: ] — invisible to the index', hits,
    'One or two: leave. A cluster: extend the harvester the way [f: ] was extended.');
}

// ─── 2. Unparsed citations, split by cause ────────────────────────────────────
// Alias gaps are a one-line fix. Structural forms (chapter-only, compound refs,
// "et" connectors) need a parser decision — don't conflate them.
{
  const aliasGap = [], structural = [];
  for (const series of fs.readdirSync(p('data/index')).filter(d => fs.statSync(p('data/index', d)).isDirectory())) {
    for (const f of fs.readdirSync(p('data/index', series)).filter(x => x.endsWith('.json'))) {
      const j = jread(p('data/index', series, f));
      for (const u of j.unparsed || []) {
        const line = `${j.textIdno} @ ${u.column}: ${u.raw}`;
        (/[;]|\bet\b|,\s*c\.|^\([^,]*[IVXLCDM]+\)$|[A-Z][a-z]+\.\s+[IVXLCDM]+\s*\)/.test(u.raw)
          ? structural : aliasGap).push(line);
      }
    }
  }
  section(blocking, 'Unparsed citations — ALIAS GAP (one-line fix in BOOKS)', aliasGap,
    'Add the abbreviation to BOOKS in scripts/index-work.mjs, re-index.');
  section(advisory, 'Unparsed citations — STRUCTURAL (parser decision)', structural,
    'Chapter-only refs, compound refs, "et" connectors. Logged not dropped; decide as a batch.');
}

// ─── 3. Pattern-4 conformance (translation-style.md rule 4) ───────────────────
// "A florilegium whose index reports 0 fontes is a pipeline failure."
{
  const bad = [];
  const locator = /\*[^*]{2,60}\*/g;
  const locatorish = /\b(lib|cap|c|num|n|serm|epist|ep|tract|tr|hom)\.\s*[0-9IVXLCDM]|ibid/i;
  for (const id of shipped) {
    const latin = fs.readdirSync(p('src/latin', id)).filter(x => /^\d+\.md$/.test(x))
      .map(f => read(p('src/latin', id, f))).join('\n');
    const tails = (latin.match(locator) || []).filter(s => locatorish.test(s));
    if (tails.length < 5) continue; // below this it isn't a florilegium
    const idxPath = p('data/index/pl', `${id}.json`);
    if (!fs.existsSync(idxPath)) continue;
    const j = jread(idxPath);
    const inline = (j.fontes || []).filter(x => x.inline).length;
    if (!inline) bad.push(`${id}: ${tails.length} locator-shaped italic runs in the Latin, 0 inline fontes indexed`);
  }
  section(blocking, 'Pattern-4 gate — locator tails present but untagged', bad,
    'Tag with [f: ] per translation-style.md pattern 4, then re-index.');
}

// ─── 4. Shipped works missing an author bio ───────────────────────────────────
// Without one the byline falls back to the Latin form — fine at stage, not at deploy.
{
  const bios = jread(p('data/author-bios.json'));
  const missing = [];
  for (const id of shipped) {
    const m = jread(p('src/latin', id, 'manifest.json'));
    for (const a of m.authors || []) if (!bios[a]) missing.push(`${id}: ${a}`);
  }
  section(blocking, 'Shipped works whose author has no bio (byline falls back to Latin)', missing,
    'Add to data/author-bios.json before this batch deploys.');
}

// ─── 5. works.json status not updated for works we shipped ────────────────────
// The 2026-07-10 gotcha: triage snapshots go stale the moment we ship a work
// ourselves, and a stale "none" puts an already-translated work back in the queue.
{
  const { works } = jread(p('data/works.json'));
  const byText = new Map();
  for (const w of works) for (const t of w.texts || []) byText.set(String(t.idno), w);
  const stale = [];
  for (const id of shipped) {
    const w = byText.get(String(id));
    if (!w) continue;
    if (w.translation?.englishState !== 'ours')
      stale.push(`${id}: englishState=${w.translation?.englishState ?? 'null'} (we translated this)`);
  }
  section(blocking, 'works.json not marked ours — stale triage will re-queue these', stale,
    'Set translation.englishState = "ours". This is the 2026-07-10 recurrence guard.');
}

// ─── 6. Cruces awaiting Wilson's read-through ─────────────────────────────────
{
  const rows = [];
  for (const id of shipped) {
    const f = p('src/english', id, 'cruces.md');
    if (!fs.existsSync(f)) continue;
    const n = (read(f).match(/^[-*] |^#### /gm) || []).length;
    if (n) rows.push(`${id}: ~${n} logged`);
  }
  section(advisory, 'Cruces logged, awaiting read-through', rows,
    'Wilson reads on the live pages (standing call: publish ahead of read-through).');
}

// ─── 7. Corrected citations — the audit trail, surfaced deliberately ──────────
{
  const rows = [];
  for (const series of fs.readdirSync(p('data/index')).filter(d => fs.statSync(p('data/index', d)).isDirectory())) {
    for (const f of fs.readdirSync(p('data/index', series)).filter(x => x.endsWith('.json'))) {
      const j = jread(p('data/index', series, f));
      for (const s of j.scripture || []) if (s.corrected)
        rows.push(`${j.textIdno} @ ${s.column}: "${s.refDisplay}" -> ${s.refKey} (printed ${s.refKeyPrinted})`);
    }
  }
  section(advisory, 'Scripture refs corrected away from Migne\'s printed numbers', rows,
    'Every one is a judgment call. Skim to confirm none is wrong.');
}

// ─── report ───────────────────────────────────────────────────────────────────
const show = (arr, label) => {
  if (!arr.length) return;
  console.log(`\n${label}`);
  for (const s of arr) {
    console.log(`\n  ${s.title} (${s.items.length})`);
    for (const i of s.items.slice(0, 12)) console.log(`    - ${i}`);
    if (s.items.length > 12) console.log(`    … ${s.items.length - 12} more`);
    console.log(`    → ${s.hint}`);
  }
};

console.log(`DECADE CHECK — ${shipped.length} works shipped`);
show(blocking, 'BLOCKING — data-layer debt, clear before translating more:');
show(advisory, 'ADVISORY — collect, decide, or carry forward:');
if (!blocking.length && !advisory.length) console.log('\nClean. Nothing accumulated this decade.');
else if (!blocking.length) console.log('\nNothing blocking.');
process.exit(blocking.length ? 1 : 0);
