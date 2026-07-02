// Corpus Corporum PL harvester. Polite (sequential, delayed), resumable (skips existing files).
// Usage: node scripts/cc-harvest.mjs index   -> crawl author/work navigation into raw/cc-index/
//        node scripts/cc-harvest.mjs build   -> build data/cc-pl-index.json from crawled XML
//        node scripts/cc-harvest.mjs texts   -> download per-text TEI into sources/pl/tei/
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://mlat.uzh.ch/php_modules';
const DELAY_MS = 400;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url, tries = 4) {
  for (let i = 1; i <= tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'wroot-press-patrologia-harvest (contact: wilson.pruitt@gmail.com)' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (e) {
      if (i === tries) throw e;
      await sleep(3000 * i); // back off harder on failure
    }
  }
}

const attr = (xml, tag) => [...xml.matchAll(new RegExp(`<${tag}[^>]*>([^<]*)</${tag}>`, 'g'))].map((m) => m[1]);

// Parse <author>/<work>/<text> blocks out of a navigation response.
function blocks(xml, type) {
  return [...xml.matchAll(new RegExp(`<${type} type="${type}"[^>]*>(.*?)</${type}>`, 'gs'))].map((m) => m[1]);
}

async function crawlIndex() {
  mkdirSync(join(root, 'raw/cc-index/authors'), { recursive: true });
  mkdirSync(join(root, 'raw/cc-index/works'), { recursive: true });
  const rootXml = readFileSync(join(root, 'raw/cc-index/pl-root.xml'), 'utf-8');
  const authors = blocks(rootXml, 'author').map((b) => ({ idno: attr(b, 'idno')[0], name: attr(b, 'name')[0] }));
  console.log(`${authors.length} authors`);

  let done = 0, skipped = 0;
  for (const a of authors) {
    try {
      const authorFile = join(root, 'raw/cc-index/authors', `${a.idno}.xml`);
      if (!existsSync(authorFile)) {
        writeFileSync(authorFile, await fetchText(`${BASE}/navigate.php?load=/38/${a.idno}&group_by=`));
        await sleep(DELAY_MS);
      }
      const works = blocks(readFileSync(authorFile, 'utf-8'), 'work');
      for (const w of works) {
        const widno = attr(w, 'idno')[0];
        const workFile = join(root, 'raw/cc-index/works', `${widno}.xml`);
        if (existsSync(workFile)) continue;
        try {
          writeFileSync(workFile, await fetchText(`${BASE}/navigate.php?load=/38/${a.idno}/${widno}&group_by=`));
        } catch (e) {
          skipped++;
          console.log(`SKIP work ${widno} (${a.name}): ${e.message}`);
          await sleep(10000); // cool off after repeated failures
        }
        await sleep(DELAY_MS);
      }
    } catch (e) {
      skipped++;
      console.log(`SKIP author ${a.idno} (${a.name}): ${e.message}`);
      await sleep(10000);
    }
    done++;
    if (done % 50 === 0) console.log(`${done}/${authors.length} authors crawled`);
  }
  console.log(`index crawl complete; ${skipped} skipped (rerun to mop up)`);
}

function buildIndex() {
  const rootXml = readFileSync(join(root, 'raw/cc-index/pl-root.xml'), 'utf-8');
  const authors = blocks(rootXml, 'author').map((b) => ({
    idno: attr(b, 'idno')[0], name: attr(b, 'name')[0],
    year: attr(b, 'year')[0] || null, words: +(attr(b, 'words_count')[0] || 0),
  }));
  const index = [];
  for (const a of authors) {
    const af = join(root, 'raw/cc-index/authors', `${a.idno}.xml`);
    if (!existsSync(af)) continue;
    for (const w of blocks(readFileSync(af, 'utf-8'), 'work')) {
      const widno = attr(w, 'idno')[0];
      const work = { author: a.name, authorIdno: a.idno, authorYear: a.year, work: attr(w, 'name')[0], workIdno: widno, words: +(attr(w, 'words_count')[0] || 0), texts: [] };
      const wf = join(root, 'raw/cc-index/works', `${widno}.xml`);
      if (existsSync(wf)) {
        for (const t of blocks(readFileSync(wf, 'utf-8'), 'text')) {
          work.texts.push({ idno: attr(t, 'idno')[0], name: attr(t, 'name')[0], words: +(attr(t, 'words_count')[0] || 0), accessible: attr(t, 'accessible')[0] === '1' });
        }
      }
      index.push(work);
    }
  }
  const texts = index.flatMap((w) => w.texts);
  writeFileSync(join(root, 'data/cc-pl-index.json'), JSON.stringify({ generated: new Date().toISOString().slice(0, 10), source: 'mlat.uzh.ch corpus 38', works: index }, null, 1));
  console.log(`index built: ${index.length} works, ${texts.length} texts, ${texts.reduce((n, t) => n + t.words, 0).toLocaleString()} words`);
}

async function downloadTexts() {
  mkdirSync(join(root, 'sources/pl/tei'), { recursive: true });
  const { works } = JSON.parse(readFileSync(join(root, 'data/cc-pl-index.json'), 'utf-8'));
  const texts = works.flatMap((w) => w.texts).filter((t) => t.accessible);
  let done = 0, skipped = 0;
  for (const t of texts) {
    const out = join(root, 'sources/pl/tei', `${t.idno}.xml`);
    if (existsSync(out)) { skipped++; continue; }
    const body = await fetchText(`${BASE}/download.php?type=file-xml&idno=${t.idno}`);
    if (!body.includes('<TEI')) { console.warn(`non-TEI response for ${t.idno} (${t.name}) — skipping`); continue; }
    writeFileSync(out, body);
    done++;
    if (done % 100 === 0) console.log(`${done} downloaded (+${skipped} already present) of ${texts.length}`);
    await sleep(DELAY_MS);
  }
  console.log(`texts complete: ${done} downloaded, ${skipped} already present, ${texts.length} total`);
}

const cmd = process.argv[2];
if (cmd === 'index') await crawlIndex();
else if (cmd === 'build') buildIndex();
else if (cmd === 'texts') await downloadTexts();
else console.log('usage: cc-harvest.mjs index|build|texts');
