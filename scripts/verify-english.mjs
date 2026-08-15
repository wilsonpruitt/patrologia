#!/usr/bin/env node
// English-chunk verifier + dedupe scan (Acta lessons as validators).
// Usage: node scripts/verify-english.mjs <textIdno>
//
// Per chunk, against its Latin twin:
//   1. Frontmatter identical (verbatim copy rule).
//   2. Column-marker sequence identical (order + count) — anchors are sacred.
//   3. Note markers: same count and order. [n: ...] citations must match the Latin
//      verbatim; [nt: ...] prose notes are translated, so only non-emptiness is checked.
//   4. Section (## head) count identical.
//   5. English/Latin word ratio in [0.85, 1.75] (pilots: EN ≈ 1.5× Latin; 1.6+ warns).
//   7. Guillemet parity vs the Latin twin — a total drop errors, a delta warns.
//   8. Pattern-11 [d: …] dittography markers: English-only, never empty.
//   9. Pattern-12 [sic: …] plate-defect markers: English-only, never empty, and
//      content must be VERBATIM in the Latin twin (it is carried type, not translation).
//  10. Pattern-13 [ed: …] editorial-voice notes: English-only, never empty, and content
//  11. Pattern-14 [var: …] scripture-divergence notes: English-only, never empty, must
//      name the witness (Vulg./LXX/Gk/Heb./Douay/Vet. Lat.).
//      must NOT be verbatim Latin (it is ours, not Migne's).
// Whole work:
//   6. Dedupe scan — any English paragraph (>15 words, normalized) appearing
//      more than once across all chunks (agents re-emitting boundary text).
//      Downgraded to a warning when the LATIN also duplicates across the same
//      chunks — canon collections legitimately quote the same authority twice
//      (e.g. Abbo cites Leg. cap. 456 in both ch. XI and ch. XXV).
// Exit non-zero on any failure.

import fs from 'node:fs';
import path from 'node:path';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/verify-english.mjs <textIdno>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const latDir = path.join(ROOT, 'src/latin', String(idno));
const engDir = path.join(ROOT, 'src/english', String(idno));

const manifest = JSON.parse(fs.readFileSync(path.join(latDir, 'manifest.json'), 'utf8'));
const errs = [];
const warns = [];
const colRe = /\[([0-9]{3,5}[A-D]?)\]/g; // keep in sync with scripts/lib/chunk-core.mjs COL_RE_SRC (banded 0473A + bare 1137)
const noteRe = /\[n: ([^\]]*)\]/g;
const words = s => s.split(/\s+/).filter(Boolean).length;
const parse = f => {
  const raw = fs.readFileSync(f, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return null;
  return { fm: m[1], body: raw.slice(m[0].length) };
};

const paraSeen = new Map(); // normalized English paragraph -> [chunk ids]
const latDupPairs = new Set(); // "0002.md+0005.md" keys where the LATIN itself repeats
const norm = p => p.replace(colRe, '').replace(/[^a-z0-9 ]/gi, '').replace(/\s+/g, ' ').trim().toLowerCase();

for (const c of manifest.chunks) {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const engPath = path.join(engDir, name);
  if (!fs.existsSync(engPath)) { errs.push(`${name}: MISSING English chunk`); continue; }
  const lat = parse(path.join(latDir, name));
  const eng = parse(engPath);
  if (!eng) { errs.push(`${name}: English chunk has no frontmatter block`); continue; }

  if (eng.fm.trim() !== lat.fm.trim())
    errs.push(`${name}: frontmatter differs from Latin twin (must be verbatim copy)`);

  const latCols = [...lat.body.matchAll(colRe)].map(m => m[1]);
  const engCols = [...eng.body.matchAll(colRe)].map(m => m[1]);
  if (latCols.join(',') !== engCols.join(','))
    errs.push(`${name}: column markers differ — Latin ${latCols.length}, English ${engCols.length}` +
      (latCols.length === engCols.length ? `; first divergence ${engCols.find((x, i) => x !== latCols[i])}` : ''));

  // Notes come in two kinds on the ENGLISH side (Wilson, 2026-07-28), and the
  // distinction is the same one Pattern 4 already draws for [f: …] tails:
  //   [n:  …] — a CITATION. Verbatim Latin, contents must equal the Latin twin's.
  //   [nt: …] — a note that is editorial PROSE, not a locator (8407's 64-word
  //             explanation of numeral subtraction, 9519's scholion on epilepsy).
  //             Contents are TRANSLATED, so they cannot be compared to the Latin.
  // The Latin twin always writes [n: …] — it stays the faithful TEI transform, so
  // the kinds are matched POSITIONALLY: same total count, same order, and only the
  // [n:]-marked positions are content-checked. An [nt:] position is free but must
  // be non-empty (an empty one is how a translated note silently vanishes).
  const anyNoteRe = /\[(n|nt): ([^\]]*)\]/g;
  const latNotes = [...lat.body.matchAll(anyNoteRe)].map(m => ({ kind: m[1], text: m[2].replace(/\s+/g, ' ').trim() }));
  const engNotes = [...eng.body.matchAll(anyNoteRe)].map(m => ({ kind: m[1], text: m[2].replace(/\s+/g, ' ').trim() }));

  const latTranslated = latNotes.filter(n => n.kind === 'nt');
  if (latTranslated.length)
    errs.push(`${name}: [nt: …] found in the LATIN chunk (${latTranslated.length}) — it is an English-only marker, like [f:] and [d:]`);

  if (latNotes.length !== engNotes.length)
    errs.push(`${name}: note markers — Latin ${latNotes.length}, English ${engNotes.length}`);
  else latNotes.forEach((n, i) => {
    const e = engNotes[i];
    if (e.kind === 'nt') {
      if (!e.text) errs.push(`${name}: note ${i} is an empty [nt: ] — a translated note must carry its text`);
    } else if (n.text !== e.text) {
      errs.push(`${name}: note ${i} differs — Latin "[n: ${n.text}]" vs English "[n: ${e.text}]"` +
        ` (if this note is editorial prose rather than a citation, it should be [nt: …])`);
    }
  });

  // 7. Guillemet parity (added 2026-07-28). « » are sacred markers per
  // translation-style.md (register section + Pattern 5): the English opens and
  // closes exactly where Migne does, 1:1. Parity against the LATIN TWIN is the
  // right test rather than internal balance, because Migne himself leaves
  // quotations unclosed (10103 at 0594B–C) and we mirror the plate.
  // A total drop is an ERROR — 9852 shipped 2026-07-20 with all 10 of its
  // charter quotations unmarked and no check caught it. Small deltas WARN:
  // they are usually Pattern 5 violations (a quote broken around "he says",
  // which ADDS a pair) but in lemma-and-gloss commentary they can be a
  // defensible marking choice, so they need an eyeball, not a hard block.
  const latQ = [lat.body.split('«').length - 1, lat.body.split('»').length - 1];
  const engQ = [eng.body.split('«').length - 1, eng.body.split('»').length - 1];
  if (latQ[0] + latQ[1] > 0 && engQ[0] + engQ[1] === 0)
    errs.push(`${name}: guillemets DROPPED — Latin has «${latQ[0]} »${latQ[1]}, English has none (quotation marks are sacred markers)`);
  else if (latQ[0] !== engQ[0] || latQ[1] !== engQ[1])
    warns.push(`${name}: guillemet counts differ — Latin «${latQ[0]} »${latQ[1]} vs English «${engQ[0]} »${engQ[1]}; check translation-style.md Pattern 5 (inquit stays INSIDE the quote — do not break it around "he says")`);

  const latHeads = (lat.body.match(/^## /gm) || []).length;
  const engHeads = (eng.body.match(/^## /gm) || []).length;
  if (latHeads !== engHeads) errs.push(`${name}: section heads — Latin ${latHeads}, English ${engHeads}`);

  // 8. Pattern-11 dittography markers are ENGLISH-ONLY (like [f: …]): the Latin
  // chunk is the faithful TEI transform and carries Migne's repetition unmarked.
  // A [d: …] on the Latin side means someone edited the Latin — a hard error.
  // The wrapper is stripped before the word-ratio count so marking a repetition
  // never moves the ratio; the repeated WORDS still count on both sides, which is
  // correct — they are printed twice in both.
  const dittoRe = /\[d: ([^\]]*)\]/g;
  const engDitto = [...eng.body.matchAll(dittoRe)];
  if (dittoRe.test(lat.body))
    errs.push(`${name}: [d: …] marker found in the LATIN chunk — the Latin is never marked up`);
  for (const m of engDitto) {
    const run = m[1].replace(/\s+/g, ' ').trim();
    if (!run) errs.push(`${name}: empty [d: ] marker`);
  }

  // 9. Pattern-12 [sic: …] — type carried through from a defective plate. Like
  // [d: …] it is ENGLISH-ONLY. What makes this one strongly checkable is that its
  // content is by definition VERBATIM Migne: a carried non-word is not translated,
  // so it must appear in the Latin twin exactly as it appears here. That is the
  // same substring test [f: …] uses, and it means a [sic: …] can never be put
  // round English words — which would silently claim our prose was Migne's defect.
  const sicRe = /\[sic: ([^\]]*)\]/g;
  if (sicRe.test(lat.body))
    errs.push(`${name}: [sic: …] marker found in the LATIN chunk — the Latin is never marked up`);
  const flat = s => s.replace(/\*/g, '').replace(/\s+/g, ' ').trim();
  const latFlat = flat(lat.body);
  for (const m of [...eng.body.matchAll(sicRe)]) {
    const run = flat(m[1]);
    if (!run) { errs.push(`${name}: empty [sic: ] marker`); continue; }
    if (!latFlat.includes(run))
      errs.push(`${name}: [sic: ${m[1]}] is not verbatim in the Latin twin — a sic marker may only wrap type carried from the plate`);
  }

  // 10. Pattern-13 [ed: …] — the EDITION's own voice, used where the digitization
  // has lost text the plate carries. English-only, never empty, and its content must
  // NOT be verbatim Latin from the twin: that would mean someone wrapped Migne's own
  // words in a marker reserved for ours, which is the mirror of the [sic:] error.
  // Stripped from the ratio count — our note is not the author's word count.
  const edRe = /\[ed: ([^\]]*)\]/g;
  if (edRe.test(lat.body))
    errs.push(`${name}: [ed: …] marker found in the LATIN chunk — the Latin is never marked up`);
  for (const m of [...eng.body.matchAll(edRe)]) {
    const run = flat(m[1]);
    if (!run) { errs.push(`${name}: empty [ed: ] marker`); continue; }
    if (latFlat.includes(run))
      errs.push(`${name}: [ed: ${m[1]}] appears verbatim in the Latin twin — [ed: ] is the edition's own voice, not Migne's text`);
  }

  // 11. Pattern-14 [var: …] — Migne's text DIVERGES FROM THE RECEIVED TEXT of a
  // scripture citation. Distinct from [sic:] (which marks defective type, and may only
  // wrap words carried verbatim from the plate) and from [ed:] (which reports text our
  // SOURCE has lost). Here the plate is perfectly legible and nothing is missing — the
  // quotation simply does not agree with the Vulgate/LXX/Greek NT. The content is OURS,
  // so it obeys the [ed:] rules: English-only, never empty, never verbatim Latin.
  const varRe = /\[var: ([^\]]*)\]/g;
  if (varRe.test(lat.body))
    errs.push(`${name}: [var: …] marker found in the LATIN chunk — the Latin is never marked up`);
  for (const m of [...eng.body.matchAll(varRe)]) {
    const run = flat(m[1]);
    if (!run) { errs.push(`${name}: empty [var: ] marker`); continue; }
    if (latFlat.includes(run))
      errs.push(`${name}: [var: ${m[1]}] appears verbatim in the Latin twin — [var: ] is our note on the received text, not Migne's words`);
    if (!/^(Vulg\.|LXX|Gk|Heb\.|Douay|Vet\. Lat\.)/.test(m[1].trim()))
      errs.push(`${name}: [var: ${m[1]}] must open by naming the witness it is comparing against (Vulg. | LXX | Gk | Heb. | Douay | Vet. Lat.)`);
  }

  // 12. Pattern-18 [cj: …] — Migne prints a REAL word, Pattern 7 renders it, and the
  // English then asserts something the author did not (*munde* "purely" for *mundo*
  // "to the world"). Ruled by Wilson 2026-08-15. Nothing here is defective type, so
  // [sic:] cannot reach it and neither can 7a⁗; the gloss is ADDITIVE — the printed
  // word keeps its English and our conjecture stands beside it.
  //
  // The form is fixed so it can be checked rather than trusted:
  //   [cj: *printed*; read *conjectured*, "gloss"]
  // Two rules do real work. The marker must NAME MIGNE'S PRINTED WORD FIRST, and that
  // word must appear verbatim in the Latin twin — which is the whole safety of the
  // convention: it makes it impossible to gloss a word the plate does not carry, i.e.
  // to smuggle in an emendation of our own invention. And it must say `read `, so the
  // conjecture is announced as a conjecture. ⚠ Note this INVERTS the [ed:]/[var:] test:
  // for those, appearing in the Latin twin is the error; here, NOT appearing is.
  const cjRe = /\[cj: ([^\]]*)\]/g;
  if (cjRe.test(lat.body))
    errs.push(`${name}: [cj: …] marker found in the LATIN chunk — the Latin is never marked up`);
  for (const m of [...eng.body.matchAll(cjRe)]) {
    const inner = m[1].trim();
    if (!inner) { errs.push(`${name}: empty [cj: ] marker`); continue; }
    const printed = inner.match(/^\*([^*]+)\*/);
    if (!printed) {
      errs.push(`${name}: [cj: ${inner}] must OPEN with Migne's printed word in italics — [cj: *munde*; read *mundo*, "to the world"]`);
    } else if (!latFlat.includes(flat(printed[1]))) {
      errs.push(`${name}: [cj: ${inner}] opens with *${printed[1]}*, which is NOT in the Latin twin — a conjecture may only be offered against a word Migne actually prints`);
    }
    if (!/\bread\s+\*/.test(inner))
      errs.push(`${name}: [cj: ${inner}] must announce the conjecture with "read *…*" — an unlabelled second word reads as a second printed reading`);
  }

  const strip = s => s.replace(colRe, '')
    .replace(dittoRe, '$1').replace(sicRe, '$1').replace(edRe, '').replace(varRe, '').replace(cjRe, '');
  const lw = words(strip(lat.body)), ew = words(strip(eng.body));
  const ratio = ew / lw;
  // Ceiling recalibrated 2026-07-18: the pilots established EN ≈ 1.5× Latin (not the
  // 1.1–1.2× originally assumed), so a 1.6 hard fail sat only 7% above the true mean
  // and misfired on dense synthetic Latin — ablative absolutes and participle stacks
  // ("ignorantiae tenebris effugatis" → "the darkness of ignorance being put to
  // flight") legitimately run 2×+. Hard fail moved to 1.75; 1.6–1.75 now WARNS so
  // these still get an eyeball instead of passing silently.
  if (ratio < 0.85 || ratio > 1.75) errs.push(`${name}: word ratio ${ratio.toFixed(2)} (${ew}/${lw}) outside [0.85, 1.75] — possible skip or padding`);
  else if (ratio > 1.6) warns.push(`${name}: ratio ${ratio.toFixed(2)} — high; confirm expansion is synthetic-Latin unpacking, not padding`);
  else if (ratio < 1.0) warns.push(`${name}: ratio ${ratio.toFixed(2)} — low for Tier-2, eyeball for compression`);

  // Question-mark parity. Added 2026-08-08 after 11632's blind read found chunk
  // 0091 missing an ENTIRE 46-WORD SENTENCE — a rhetorical question — that every
  // check here passed over: anchors matched, [n:] counts matched, and the word
  // ratio came in at 1.61, dead centre of that work's band, because the chunk was
  // long enough to absorb the loss invisibly. The reader's own tell was that the
  // Latin carried FOUR question marks and the English three.
  //
  // A dropped interrogative is the cheapest possible signal for a dropped clause,
  // and this costs one regex. It is a WARN, not an error: English legitimately
  // turns some Latin questions into statements and vice versa (an indirect
  // question, a rhetorical `numquid` rendered as an assertion), so parity is a
  // prompt to look, not a rule. Mismatches were 1 in 126 chunks on this work.
  const lq = (strip(lat.body).match(/\?/g) || []).length;
  const eq = (strip(eng.body).match(/\?/g) || []).length;
  if (lq !== eq) warns.push(`${name}: question marks ${eq} EN vs ${lq} LA — check for a dropped or added clause`);

  for (const p of eng.body.split(/\n\n+/)) {
    if (/^## /.test(p.trim())) continue; // see HEAD_EXEMPT note below
    const n = norm(p);
    if (words(n) <= 15) continue;
    if (!paraSeen.has(n)) paraSeen.set(n, []);
    paraSeen.get(n).push(name);
  }
}

// map where the Latin source itself repeats a paragraph across chunks.
//
// HEAD_EXEMPT / THRESHOLD note (2026-07-28): two bugs lived here, both found by
// 11083 chunks 0002+0003 failing on a paragraph that was never a defect.
//   (a) `## ` continuation heads are exempt from the dedupe scan entirely. The
//       CHUNKER repeats the section head with a "(cont.)" suffix on every chunk a
//       section spans — that is our apparatus, deliberately duplicated, and it is
//       not an agent re-emitting boundary text.
//   (b) The Latin side must use a LOWER word threshold than the English side.
//       Both sides used >15 words, but English runs ~1.5x Latin — so any repeated
//       Latin unit of roughly 11-15 words expands past 15 in English, registers as
//       an English duplicate, and finds no Latin twin to excuse it. 11083's head is
//       13 Latin words / 22 English. Anything the Latin repeats at all is a valid
//       explanation for an English repetition, so the floor here only needs to be
//       high enough to ignore noise.
const LAT_DUP_MIN_WORDS = 8;
{
  const latSeen = new Map();
  for (const c of manifest.chunks) {
    const name = `${String(c.chunk).padStart(4, '0')}.md`;
    const lat = parse(path.join(latDir, name));
    for (const p of lat.body.split(/\n\n+/)) {
      const n = norm(p);
      if (words(n) <= LAT_DUP_MIN_WORDS) continue;
      if (!latSeen.has(n)) latSeen.set(n, []);
      latSeen.get(n).push(name);
    }
  }
  //   (c) A Latin repetition INSIDE ONE CHUNK must count too (2026-07-28, found by
  //       11088/0002, where Migne quotes the Rule clause `Omnes ergo unanimiter et
  //       concorditer vivite…` three times — full, fragment, full — and the English
  //       mirrored it 1:1 and was failed for it). This test used `new Set(locs).size
  //       > 1`, so a paragraph repeated twice in the SAME file collapsed to size 1
  //       and never entered latDupPairs, while the English side counts raw
  //       occurrences and does flag it. Net effect: cross-chunk repetitions were
  //       excused and within-chunk ones could never be — and within-chunk is the
  //       normal shape of a lemma-and-gloss commentary, which is most of the queue.
  //       Counting occurrences makes the key match the English side's for both cases.
  for (const locs of latSeen.values()) if (locs.length > 1)
    latDupPairs.add([...new Set(locs)].sort().join('+'));
}

for (const [p, locs] of paraSeen) if (locs.length > 1) {
  const key = [...new Set(locs)].sort().join('+');
  if (latDupPairs.has(key))
    warns.push(`duplicate paragraph in ${locs.join(' + ')} matches a Latin-side repetition (source quotes the authority twice) — OK`);
  else
    errs.push(`DUPLICATE paragraph in ${locs.join(' + ')}: "${p.slice(0, 70)}…"`);
}

// ── Supplied em-dashes: reported, never failed ────────────────────────────────
// Migne prints ZERO em-dashes in the entire Latin corpus — measured 2026-08-09,
// all works, all chunks. So every one in our English is supplied, standing in for
// a mark he did print or for no mark at all.
//
// This is NOT a defect gate, and it must not become one. Translating Latin into
// coherent English genuinely needs marks the plate lacks: a labelled sample of
// 165 sites found ~12% correspond to nothing in the Latin because the English
// reordered the sentence, and those dashes are the translator's tool, not an
// error. The measured rule accuracies were poor enough that no corpus-wide sweep
// was justified (blanket dash→comma: 70.6%, 95% CI 63–77%).
//
// It exists because the habit drifted in UNMEASURED across 99 works — every blind
// reader met these one at a time and reasonably judged each as house style. The
// class only became visible when someone counted. A number printed at every
// verify means the next work reports its own density instead of accumulating
// silently. Corpus median at the time of writing: 5.3 per chunk.
{
  const APPARATUS = /\[(var|nt|sic|ed|d|n|f|b|lat):[^\]]*\]/g;
  let dashes = 0, seen = 0;
  for (const name of fs.readdirSync(engDir).filter(f => /^\d{4}\.md$/.test(f))) {
    const body = fs.readFileSync(path.join(engDir, name), 'utf8')
      .replace(/^---\n[\s\S]*?\n---\n/, '');
    seen++;
    // Prose only: a dash inside our own apparatus is editorial voice, not a
    // mark supplied for one of Migne's.
    dashes += (body.replace(APPARATUS, '').match(/—/g) || []).length;
  }
  const per = seen ? dashes / seen : 0;
  if (dashes) console.log(
    `note: ${dashes} supplied em-dashes (${per.toFixed(1)}/chunk; corpus median 5.3). ` +
    `Migne prints none — see data/emdash/labels.tsv before sweeping any.`);
}

warns.forEach(w => console.warn('warn: ' + w));
if (errs.length) { console.error('VERIFY FAILED:'); errs.forEach(e => console.error(' - ' + e)); process.exit(1); }
console.log(`verify OK: ${manifest.chunks.length} chunks, columns/notes/sections aligned, no duplicate paragraphs`);
