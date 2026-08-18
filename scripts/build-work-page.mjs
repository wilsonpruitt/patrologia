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
import { isFirstEnglishPL, loadPlStatusByIdno, badgeHtml } from './lib/first-english.mjs';

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

// "(cont.)" is the chunker's marker and must pass through translation untouched,
// but 7383 shipped with an agent having helpfully rendered it "(continued)" — which
// slipped every scan keyed to the literal string. Both spellings are accepted here
// so a stray translation degrades to a cosmetic issue, never a mispaired head.
const CONT_HEAD = /\((?:cont\.|continued)\)$/;

// split a full text into sections at ## heads
//
// "(cont.)" heads are REJOINED, not rendered (2026-07-28). The chunker re-emits a
// section's head with a "(cont.)" suffix on every chunk that section spans, so the
// chunk files stay independently readable. Chunk boundaries are OUR division and
// are invisible on the assembled work page — leaving those heads in made the page
// print "CHAPTER ONE." and then "CHAPTER ONE. (cont.)" a few paragraphs later, an
// artifact Migne prints nowhere (293 such heads were live site-wide when this was
// found). Merging restores the section to one head with continuous text.
// Latin and English chunk at identical boundaries, so both sides merge in step and
// the parallel columns stay aligned.
function sections(text) {
  const out = [];
  for (const part of ('\n' + text).split(/\n## /).slice(1)) {
    const nl = part.indexOf('\n');
    const head = part.slice(0, nl).trim();
    const body = part.slice(nl).trim();
    const prev = out[out.length - 1];
    if (CONT_HEAD.test(head) && prev) { prev.text += '\n\n' + body; continue; }
    out.push({ head, text: body });
  }
  return out;
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const colParts = c => c.match(/^0*([0-9]+)([A-D]?)$/) ?? [c, c, ''];
const colId = c => { const [, n, b] = colParts(c); return 'c' + n + b.toLowerCase(); };
const colDisp = c => { const [, n, b] = colParts(c); return n + b; };

// Citation corrections (data/citation-corrections.json), keyed idno + column.
// Policy (Wilson, 2026-07-18): the TEXT keeps what Migne prints and refDisplay
// stays verbatim, while refKey resolves to the TRUE reference. Until 2026-07-28
// that resolution was written to data/index/ and read by nothing but a QA script,
// so a reader saw only Migne's wrong number and our correct one was unreachable.
// The printed form is still what appears on the page — the correction is attached
// to it, never substituted for it.
const corrections = (() => {
  const p = path.join(ROOT, 'data/citation-corrections.json');
  if (!fs.existsSync(p)) return new Map();
  const all = JSON.parse(fs.readFileSync(p, 'utf8')).corrections ?? [];
  const m = new Map(); // "column" -> [entry]
  for (const c of all) {
    if (String(c.idno) !== String(idno)) continue;
    const k = String(c.column).toLowerCase();
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(c);
  }
  return m;
})();
// "Isa.11.1" -> "Isa 11:1"; "Eccl.7" -> "Eccl 7"
const prettyKey = k => {
  const [book, ch, v] = String(k).split('.');
  return v ? `${book} ${ch}:${v}` : `${book} ${ch}`;
};
const correctionFor = (noteContent, col) => {
  for (const c of corrections.get(String(col).toLowerCase()) ?? []) {
    if (noteContent.includes(c.refDisplay)) return c;
  }
  return null;
};

// `.notecite` is nowrap so a locator never splits across a line — right for
// "Prov. v, 22", wrong for anything sentence-length, which cannot share a line
// and so drops to one of its own AND stretches the justified line above it into
// a row of isolated words. CSS cannot branch on content length; the builder can,
// because it holds the text. Real locators are tiny (site-wide: median 12 chars,
// p95 18, p99 37) and the tail past ~35 is compound reference lists and Migne's
// editorial prose — 41 of them were live, up to 592 chars, the longest on the
// Becket vita. 32 sits in that gap. Being wrong toward wrapping costs a rare
// long locator an ugly break; being wrong the other way breaks the column.
const NOWRAP_MAX = 32;
const noteCls = (s, extra = '') =>
  `notecite${extra ? ' ' + extra : ''}${String(s).replace(/<[^>]*>/g, '').trim().length > NOWRAP_MAX ? ' wraps' : ''}`;

// `state` carries the current column while rendering ONE side of the parallel
// page. Latin and English are rendered in interleaved order (lat sec 0, eng sec 0,
// lat sec 1 …), so a single shared tracker would drift across the seam — each side
// gets its own, seeded from the work's first column.
function inlineHtml(s, { anchorIds, state }) {
  return esc(s)
    // anchors and notes are matched in ONE alternation so they are replaced in
    // document order; two sequential .replace passes would finish every anchor
    // before the first note and leave the column tracker useless.
    .replace(/\[([0-9]{3,5}[A-D]?)\]\s*|\[nt: ([^\]]*)\]|\[n: ([^\]]*)\]/g, (m0, c, nt, n) => {
      if (c !== undefined) {
        if (state) state.col = colDisp(c).toLowerCase();
        return `<a class="anchor" href="#${colId(c)}"${anchorIds ? ` id="${colId(c)}"` : ''}>${colDisp(c)}</a>`;
      }
      // [nt: …] — a note that is editorial PROSE rather than a locator, translated
      // per Wilson's 2026-07-28 ruling. It is Migne's note either way, so it takes
      // the same .notecite treatment; it just never carries a citation correction,
      // because there is no reference in it to correct.
      if (nt !== undefined) return `<span class="${noteCls(nt, 'prose')}">${nt}</span>`;
      const fix = state ? correctionFor(n, state.col) : null;
      if (!fix) return `<span class="${noteCls(n)}">${n}</span>`;
      const why = fix.note ? ` — ${fix.note}` : '';
      return `<span class="${noteCls(n, 'corrected')}" title="${esc(`The source prints ${fix.refDisplay}; the reference is ${prettyKey(fix.refKey)}${why}`)}">${n}</span>`;
    })
    // pattern-4 inline locators: strip the wrapper, render the content as printed
    // (the tag is an index handle, not display markup — translation-style.md rule 1)
    .replace(/\[f: ([^\]]*)\]/g, (_, f) => `<span class="fonscite">${f}</span>`)
    // pattern-11 dittography: the repeated run is REAL TEXT (Pattern 7 — we render
    // what the plate prints), so it renders normally and is only marked, never
    // hidden or deduplicated. The marker exists so the repetition reads as the source
    // text's and not as ours. Whether the doubling is Migne's compositor or the
    // transcription of him, our files cannot say; the marker no longer claims to.
    .replace(/\[d: ([^\]]*)\]/g, (_, d) =>
      `<span class="dittog" title="Repeated thus in the source text">${d}</span>`)
    // pattern-12 [sic: …]: type carried through as the source text prints it. Without it
    // italic Latin in the English is ambiguous — *precaria* (a technical term we
    // deliberately leave in Latin) and *bonorem* (broken type in the source) look identical,
    // so a reader cannot tell our editorial choice from a defect we inherited. This marks
    // the second kind only. The words render exactly as printed; only their PROVENANCE
    // is annotated, same principle as .dittog.
    .replace(/\[sic: ([^\]]*)\]/g, (_, s) =>
      `<span class="sic" title="Printed thus in the source text — see the notes on this work">${s}</span>`)
    // pattern-13 [ed: …]: the EDITION speaking in its own voice, not the author and
    // not Migne — used where the digitized source has lost text that the plate has,
    // so the page would otherwise show a hole that reads as our error. Unlike every
    // other marker this content is OURS, so it is set apart visually rather than
    // woven into the text: a reader must never mistake it for something Migne printed.
    .replace(/\[ed: ([^\]]*)\]/g, (_, e) =>
      `<span class="ednote">[${e}]</span>`)
    // pattern-14 [var: …]: the source text's scripture citation diverges from the received
    // text. Neither a defect in the type ([sic:]) nor a hole in our source ([ed:]) — the
    // reading is legible and complete, the quotation just does not agree with the Vulgate. Ours,
    // so it is set apart; but quieter than .ednote, because it annotates the text rather
    // than confessing a gap in it.
    .replace(/\[var: ([^\]]*)\]/g, (_, v) =>
      `<span class="varnote" title="The source text diverges from the received text here">[${v}]</span>`)
    // pattern-18 [cj: …]: Migne prints a REAL word, so Pattern 7 renders it and nothing
    // is marked — but the English then asserts something the author did not (*munde*,
    // "purely", where the sense is *mundo*, "to the world"). Ruled by Wilson 2026-08-15.
    // ADDITIVE: the printed word keeps its English, and our conjecture stands beside it.
    // Same family as .varnote by design — both are scholarly asides about a divergence,
    // and this one must never be mistaken for the edition confessing a hole ([ed:]) or
    // for broken type ([sic:]), because the type here is not broken at all.
    .replace(/\[cj: ([^\]]*)\]/g, (_, c) =>
      `<span class="cjnote" title="Migne's word stands in the text; the reading beside it is our conjecture">[${c}]</span>`)
    // [cn: n | …]: MIGNE'S OWN foot-of-page note, recovered from the plate and put back
    // beside the word he queried (CLAUDE.md, "Migne's conjecture notes"; Corpus Corporum's
    // TEI carries none of them). It is HIS apparatus, so it renders in the .notecite
    // family with his inline citations rather than among our markers — but a reader must
    // be able to tell a conjecture from a reference, hence the class of its own and the
    // number, which is what makes the note findable at the foot of the plate.
    // The printed reading stands in the text; the note never replaces it.
    .replace(/\[cn: ([0-9]+(?:-[0-9]+)?\*?) \| ([^\]]*)\]/g, (_, n, note) =>
      `<span class="${noteCls(note, 'conj')}" title="${esc(`Migne's own note (${n}) at the foot of this page — a conjecture; his printed reading stands in the text`)}">${note}</span>`)
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

// one column-tracker per side (see inlineHtml): both sides carry the same [n: ]
// markers, so a correction surfaces in the Latin and the English alike.
const latState = { col: String(manifest.colFirst ?? '').toLowerCase() };
const engState = { col: String(manifest.colFirst ?? '').toLowerCase() };

const passages = latSecs.map((ls, i) => `
<div class="col-rules passage">
  <div>
    <h2 class="canon-head" lang="la">${inlineHtml(ls.head, { anchorIds: false, state: latState })}</h2>
    <div class="coltext latin" lang="la">
${blockHtml(ls.text, { anchorIds: true, state: latState })}
    </div>
  </div>
  <div>
    <h2 class="canon-head">${inlineHtml(engSecs[i].head, { anchorIds: false, state: engState })}</h2>
    <div class="coltext english" lang="en">
${blockHtml(engSecs[i].text, { anchorIds: false, state: engState })}
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
// ── The priority claim ────────────────────────────────────────────────────────
// The priority claim is imported, never re-implemented here — see
// scripts/lib/first-english.mjs for the two ways this exact line has already
// failed (hardcoded 2026-08-17, then mirrored-and-drifted the same day).
const claimHtml = badgeHtml(isFirstEnglishPL(idno, loadPlStatusByIdno(ROOT), m => console.warn(`  (${m})`)));

// The Glossa ordinaria is 58 separate works that are really one book, so its pages
// carry a link to the collection at /glossa/. That page is deliberately NOT in the nav
// (Wilson, 2026-08-18) — this is how a reader reaches it: they arrive at one book of
// the gloss and want the rest. Keyed by AUTHOR, so it appears on exactly that set and
// never has to be maintained per work.
const collectionLine = (manifest.authors ?? []).includes('Anselmus Laudunensis et schola')
  ? `<p class="w-collection">One book of the <a href="/glossa/"><i>Glossa ordinaria</i></a> &mdash; the whole gloss, book by book.</p>`
  : '';

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
  // A card is warranted by a bio OR an attribution caveat. Previously only `bio`
  // opened one, which meant every `attributionFlag` in author-bios.json was dead
  // data — recorded for three shared "Auctor incertus (X?)" keys and rendered
  // nowhere, so no reader ever saw that Migne's ascription was the edition's own
  // conjecture. Those keys deliberately carry no bio (they are shared across many
  // works), so keying the card on `bio` alone hid exactly the entries that most
  // needed saying out loud.
  if (!b?.bio && !b?.attributionFlag) return name;
  const pid = `author-${i}`;
  const latinLine = b.latin && b.latin !== displayName(a)
    ? `\n  <p class="latin-name" lang="la">${esc(b.latin)}</p>` : '';
  const datesLine = b.dates ? `\n  <p class="dates">${esc(b.dates)}</p>` : '';
  const bioLine = b.bio ? `\n  <p class="bio">${esc(b.bio)}</p>` : '';
  const flagLine = b.attributionFlag
    ? `\n  <p class="attrib-flag">${esc(b.attributionFlag)}</p>` : '';
  authorCards.push(`<div id="${pid}" popover class="author-card">
  <h3>${name}</h3>${latinLine}${datesLine}${bioLine}${flagLine}
</div>`);
  return `<button type="button" class="author-pop" popovertarget="${pid}">${name}</button>`;
};
const authorNodes = credited.length ? credited.map(authorNode) : ['Anonymous'];
const authorLinks = authorNodes.join(' &amp; ');
const authorByline = authorNodes.join(' and ');

// /method promises the cruces are published WITH the work; this is the link
// that makes that literally true. Emitted only where the file actually exists,
// so the page can never advertise an apparatus that is not there.
const crucesDir = path.join(ROOT, 'src/english', String(idno));
// Match build-cruces.mjs's publish test exactly — ANY cruces*.md, not just a
// merged cruces.md. Two works (11058, 11553) carry only per-batch files, and a
// narrower test here published their apparatus while linking nothing to it.
const hasCruces = fs.existsSync(crucesDir) &&
  fs.readdirSync(crucesDir).some(f => /^cruces.*\.md$/.test(f));
const crucesLink = hasCruces
  ? `    <p class="cruces-link"><a href="/cruces/pl/${vol}/${slug}/">Cruces for this work &mdash; where the plate is defective or the reading uncertain &rarr;</a></p>`
  : '';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The page's own identity, so build-landing can look this work up by IDNO
     instead of by volume-plus-title, a key that collides on 176 pairs. -->
<meta name="migne-idno" content="${esc(String(idno))}">
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
    ${collectionLine}
    <p class="meta">PL ${vol}, coll. ${parseInt(manifest.colFirst, 10)}–${parseInt(manifest.colLast, 10)} &nbsp;·&nbsp; Latin from the Migne printing &nbsp;·&nbsp; ${claimHtml} &nbsp;·&nbsp; column numbers follow the original plates, not the Garnier reprint</p>
  </div>
</div>
${authorCards.join('\n')}

<main class="columns">
${passages}
</main>

<section class="apparatus">
  <div class="apparatus-inner">
    <h2>On this text</h2>
${crucesLink}
    <p>${workAbout[String(idno)] ?? `The Latin is Migne's printing of <i>${esc(title)}</i> (PL ${vol}, coll. ${colFirstDisp}–${colLastDisp}), by ${esc(authorNames)}, from the Corpus Corporum transcription. Parenthetical references in small type stand on Migne's page — editorial identifications inherited from the edition he reprinted or supplied by his shop, not necessarily the author's own; the author's own citations run in the prose itself. Every gilt column mark is an address: <b>migne.app/pl/${vol}/${colId(manifest.colFirst).slice(1)}</b> resolves to the first.`}</p>
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
/* Apparatus too long to sit on one line. The nowrap above is right for
   "Prov. v, 22" and wrong for anything sentence-length: an unbreakable span the
   width of a clause cannot share a line, so it drops to one of its own AND
   stretches the justified line above it into a row of isolated words. That is
   what shipped on the Antiochus letter (PG 89), whose [nt:] gloss on *laura* is
   the corpus's first long one — and the site-wide scan then found 41 more, all
   plain [n:] notes where Migne writes prose or stacks a dozen references, up to
   592 chars on the Becket vita. The builders add .wraps above NOWRAP_MAX chars;
   see the note there for the threshold. Long apparatus sits inside the sentence
   flow and must wrap, exactly as .fonscite does below.
   Run scripts/scan-nowrap-apparatus.mjs to check the class is clear. */
.notecite.wraps { white-space: normal; }
/* Migne's foot-of-page conjecture notes ([cn: …]), recovered from the plate: his
   apparatus, so it sits in the .notecite family — but his CONJECTURES must not read
   like his CITATIONS, so this one carries the maroquin and a dotted rule. It appears
   on the Latin side only, and only in works whose plate has been read (tier 3 in
   data/plate-notes/coverage.json). */
.notecite.conj {
  color: var(--maroquin);
  border-bottom: 1px dotted var(--maroquin);
  cursor: help;
}
/* pattern-4 inline locator tails: apparatus, so quieter than body text, but they
   sit INSIDE the sentence flow (unlike .notecite) and must be able to wrap. */
.fonscite {
  font-size: .82em; color: var(--encre-douce); letter-spacing: .02em;
}
/* pattern-11 dittography: Migne prints the run twice and we print it twice. The
   text is NOT dimmed or shrunk — it is the author's words, not apparatus — but a
   dotted underline plus the title attribute tell a reader the repetition is on the
   plate. Without this the page reads as though WE duplicated the words. */
.dittog {
  border-bottom: 1px dotted var(--encre-douce);
  cursor: help;
}
/* pattern-12 [sic: …]: type carried verbatim from a defective plate. Distinguished
   from .dittog by a wavy rule — both say "this oddity is Migne's, not ours", but a
   reader should be able to tell a doubled run from broken type without hovering.
   Deliberately NOT dimmed or shrunk: it is the author's text, printed as it stands. */
.sic {
  border-bottom: 1px wavy var(--dorure);
  text-decoration-skip-ink: none;
  cursor: help;
}
/* pattern-13 [ed: …]: the edition's own voice. Deliberately the ONLY thing on the
   page that does not look like the text — smaller, spaced, in the gilt, so it reads
   as a label rather than as something Migne printed. */
.ednote {
  display: inline-block;
  font-family: var(--didot);
  font-size: .82rem;
  letter-spacing: .03em;
  color: var(--dorure);
  font-style: normal;
  margin: .15em 0;
}
/* pattern-14 [var: …]: the plate's scripture reading against the received text. In the
   maroquin rather than the gilt, and unspaced — it is a scholarly aside about the
   quotation, not the edition confessing a hole, and the two must not read alike. */
/* pattern-16 [lat: …] (PG only): Migne's parallel LATIN column asserting a
   different fact than his Greek. Same family as .varnote and deliberately so —
   both are scholarly asides about a divergence between witnesses, not the
   edition confessing a hole ([ed:]) nor broken type ([sic:]).
   NB this rule must live HERE, not in site/styles.css: that file is GENERATED
   (sketch/styles.css + this block), so anything written into it directly is
   silently clobbered by the next work-page build. */
.varnote,
.latnote,
/* pattern-18 [cj: …]: our conjecture standing beside a REAL printed word whose
   faithful English misleads. Same family as .varnote and .latnote deliberately —
   all three are asides about a divergence between what is printed and what is
   meant, and none of them is the edition confessing a hole. */
.cjnote {
  font-family: var(--didot);
  font-size: .8rem;
  color: var(--maroquin);
  font-style: normal;
  cursor: help;
}

/* ---- /cruces/ — the published apparatus (build-cruces.mjs) ----
   These pages reuse the .essay chrome and inherit its measure; only the
   constructs the cruces themselves use need adding. */
.cruces-note {
  border-left: 2px solid var(--dorure);
  padding: .1rem 0 .1rem 1.1rem;
  margin: 1.6rem 0 2.2rem;
  color: var(--encre-douce);
  font-size: .95rem;
  line-height: 1.55;
}
.cruces-note p { margin: .55rem 0; }
.cruces-note strong { color: var(--encre); }
.essay-body ul li,
.essay-body ol li { margin-bottom: .45rem; }
.tablewrap { overflow-x: auto; margin: 1.2rem 0; }
.tablewrap table { border-collapse: collapse; font-size: .92rem; min-width: 100%; }
.tablewrap th,
.tablewrap td {
  border-bottom: 1px solid var(--rule);
  padding: .38rem .7rem .38rem 0;
  text-align: left;
  vertical-align: top;
}
.tablewrap th {
  font-family: var(--didot);
  font-weight: normal;
  color: var(--encre-douce);
  border-bottom-color: var(--encre-douce);
  white-space: nowrap;
}
.essay-body blockquote {
  margin: 1.1rem 0 1.1rem 1rem;
  padding-left: 1rem;
  border-left: 1px solid var(--rule);
  color: var(--encre-douce);
}
.essay-body blockquote p { margin: .4rem 0; }
.essay-body hr { border: 0; border-top: 1px solid var(--rule); margin: 2.2rem 0; opacity: .6; }
.volgroup { margin: 1.6rem 0; }
.volgroup h3 {
  font-family: var(--didot);
  font-size: .82rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--dorure);
  margin: 0 0 .4rem;
}
.volgroup ul { list-style: none; padding-left: 0; margin: 0; }
.volgroup li { margin-bottom: .3rem; }
.cruces-link {
  font-family: var(--didot);
  font-size: .9rem;
  color: var(--encre-douce);
  margin: 0 0 .9rem;
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
/* Attribution caveat: set apart from the bio by a rule and the maroquin accent,
   because it says something ABOUT the ascription rather than about the person —
   a reader must not mistake it for biography. */
.author-card .attrib-flag {
  font-size: .88rem; line-height: 1.55; margin: .8rem 0 0; padding-top: .7rem;
  border-top: 1px solid rgba(126, 45, 38, .35);
  color: var(--encre-douce);
}
/* A citation Migne misprints. The printed form still reads exactly as he set it —
   only a maroquin dotted rule marks it, with the resolved reference on hover. The
   correction is ATTACHED to the printed number, never substituted for it. */
.notecite.corrected {
  border-bottom: 1px dotted var(--maroquin, #7E2D26);
  cursor: help;
}
.author-card::backdrop { background: rgba(20, 37, 25, .35); }

/* ---------- scripture index (/scripture/) ---------- */
.jump {
  display: block; margin: 1.4rem 0 2.4rem; line-height: 2;
  font-size: .88rem; color: var(--encre-douce);
}
.jump a { color: var(--encre-douce); text-decoration: none; border-bottom: 1px solid transparent; }
.jump a:hover { border-bottom-color: var(--dorure); }
.idx-note { font-size: .9rem; color: var(--encre-douce); max-width: 42rem; }
.idx-sibling { border-left: 2px solid var(--dorure); padding-left: .8rem; }

/* ---------- commentary map: /scripture/commentaries/ ---------- */
/* Emitted here because this file fully rewrites site/styles.css; kept next to the
   scripture-index rules its page is a sibling of. */
.commentaries .lede { max-width: 44rem; }
.commentaries .note { font-size: .9rem; color: var(--encre-douce); max-width: 44rem; }
.cm-toc { margin: 1.6rem 0 2.4rem; line-height: 2.1; font-size: .88rem; }
.cm-toc a {
  color: var(--encre-douce); text-decoration: none; white-space: nowrap;
  border-bottom: 1px solid transparent; margin-right: .9rem;
}
.cm-toc a:hover { border-bottom-color: var(--dorure); }
.cm-toc a span { color: var(--dorure); font-size: .8rem; }
.cm-book { margin: 2.4rem 0 0; scroll-margin-top: 5rem; }
.cm-book > h2 {
  font-family: var(--didot); font-weight: 400; font-size: 1.5rem;
  border-bottom: 1px solid var(--dorure); padding-bottom: .3rem;
  margin-bottom: .5rem; display: flex; justify-content: space-between;
  align-items: baseline; gap: 1rem; flex-wrap: wrap;
}
.cm-count { font-family: var(--body); font-size: .78rem; color: var(--encre-douce); letter-spacing: .03em; }
/* A collection heads its part of Scripture (Wilson, 2026-07-30): it sits just before
   its first member, so it needs to read as the head of an area and not as one more
   book. Italic title + a gilt rule down the side, no extra chrome. */
.cm-group > h2 { font-style: italic; border-bottom-style: dotted; }
.cm-group { border-left: 2px solid var(--dorure); padding-left: 1rem; margin-left: -1rem; }
.cm-list { list-style: none; padding: 0; margin: 0; }
.cm-list li {
  display: grid; grid-template-columns: 5.6rem 1fr; gap: .1rem .8rem;
  padding: .5rem 0; border-bottom: 1px solid rgba(0,0,0,.06); align-items: baseline;
}
.cm-en, .cm-no, .cm-app {
  font-size: .68rem; letter-spacing: .06em; text-transform: uppercase;
  text-align: center; padding: .12rem .3rem; border-radius: 2px; align-self: start;
}
.cm-en { background: var(--vert); color: var(--papier); }
.cm-no { color: var(--encre-douce); border: 1px solid rgba(0,0,0,.18); }
.cm-app { grid-column: 1; font-size: .6rem; color: var(--maroquin); border: 0; }
.cm-t { font-size: 1rem; }
.cm-t a { color: var(--encre); text-decoration: none; border-bottom: 1px solid var(--dorure); }
.cm-t a:hover { background: rgba(195,163,67,.16); }
.cm-a, .cm-c { grid-column: 2; font-size: .82rem; color: var(--encre-douce); }
.cm-c { font-size: .76rem; }
@media (max-width: 34rem) {
  .cm-list li { grid-template-columns: 1fr; }
  .cm-a, .cm-c { grid-column: 1; }
}

.book { margin: 2.6rem 0 0; scroll-margin-top: 5rem; }
.book > h2 {
  font-family: var(--didot); font-weight: 400; font-size: 1.5rem;
  border-bottom: 1px solid var(--dorure); padding-bottom: .3rem; margin-bottom: .2rem;
}
.chapter { margin: 1.1rem 0; }
.chapter h3 {
  font-family: var(--didot); font-weight: 400; font-size: 1.05rem;
  color: var(--encre-douce); margin: 0 0 .3rem; letter-spacing: .03em;
}
.chapter ul { list-style: none; margin: 0; padding: 0; }
.chapter li { margin: .2rem 0; line-height: 1.5; }
.chapter li .cite { font-size: .82em; color: var(--encre-douce); letter-spacing: .02em; }
/* Migne's printed form beside a corrected reference — the index files the citation
   under its TRUE place, but never hides what he actually set. */
.chapter li .printed {
  font-size: .78em; color: var(--maroquin, #7E2D26);
  border-bottom: 1px dotted currentColor; cursor: help;
}
/* a citation Migne sets in the chapter head governs its whole section */
.chapter li .inhead {
  font-size: .7em; text-transform: uppercase; letter-spacing: .08em;
  color: var(--dorure); cursor: help;
}

/* ---------- resolver: shared-column disambiguation ---------- */
.choices { list-style: none; margin: 1rem 0; padding: 0; }
.choices li { margin: .5rem 0; line-height: 1.5; }
.choices .cite-range { font-size: .8em; color: var(--encre-douce); letter-spacing: .02em; }

/* ---------- sources page (/sources/) ---------- */
.src { margin: 1.4rem 0; padding-left: .9rem; border-left: 2px solid var(--dorure); }
.src h3 { font-family: var(--didot); font-weight: 400; font-size: 1.05rem; margin: 0 0 .2rem; }
.src .origin { font-size: .86rem; margin: .1rem 0; word-break: break-all; }
.src .meta, .src .sha { font-size: .8rem; color: var(--encre-douce); margin: .1rem 0; letter-spacing: .02em; }
.src .sha { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; cursor: help; }
.src .note { font-size: .88rem; color: var(--encre-douce); margin: .3rem 0 0; }
.src .lbl {
  font-size: .72rem; text-transform: uppercase; letter-spacing: .09em;
  color: var(--dorure); margin-right: .4rem;
}

/* ---------- PG work page ---------- */
/* Greek body in GFS Didot — the face Migne's Greek type descends from.
   Rows cut at sentence ends near each column anchor; anchors inline,
   hanging into the outer margins per the base .anchor rules.
   Emitted from BOTH builders, byte-identical: a PL rebuild fully rewrites
   site/styles.css and would otherwise drop the rules a live PG page depends
   on, while the PG builder strips+re-adds this block by the header line above,
   so there is never a duplicate. Keep the two copies in sync or every rebuild
   flips the file back and forth. */
.coltext.greek { font-family: var(--didot); font-size: .98rem; line-height: 1.72; }
.colpair { border-top: 0; padding-top: .4rem; }
.columns .colpair:first-child { border-top: 2px solid var(--encre); padding-top: 1.4rem; }
`;
fs.writeFileSync(path.join(ROOT, 'site/styles.css'), css);

console.log(`built site/pl/${vol}/${slug}/index.html (${latSecs.length} sections) + site/styles.css`);
