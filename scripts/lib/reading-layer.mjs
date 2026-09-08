// Open Corpus reading-layer contract additions (~/open-corpus/PLAN.md, item
// 5/7): schema.org JSON-LD per work page, and plain-text/JSON siblings.
// Canonical links already exist site-wide via lib/chrome.mjs's head(); the
// two hand-rolled work-page builders (build-work-page.mjs, build-work-
// page-pg.mjs) don't use that helper, so they get their own canonical tag
// from here too, to keep one source of truth for the URL shape.
import fs from 'node:fs';
import path from 'node:path';

export function canonicalTag(canonicalUrl) {
  return `<link rel="canonical" href="${canonicalUrl}">`;
}

export function jsonLdScript(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
}

export function workJsonLd({ canonical, title, author, sourceEdition, isPartOf, sourceLang }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': canonical,
    url: canonical,
    name: title,
    author: { '@type': 'Person', name: author },
    translator: { '@type': 'Organization', name: 'Wroot Press' },
    publisher: { '@type': 'Organization', name: 'Wroot Press', url: 'https://wrootpress.com' },
    inLanguage: ['en', sourceLang],
    isBasedOn: { '@type': 'Book', name: sourceEdition },
    isPartOf: { '@type': 'Collection', '@id': isPartOf },
    license: 'https://migne.app/rights/',
  };
}

// Writes <slug>.txt (English only, headered) and <slug>.json (both
// languages, plus source-edition citation) as siblings of a work's
// <series>/<vol>/<slug>/ directory — i.e. site/pl/<vol>/<slug>.txt, not
// nested inside the directory, so "append .txt to the URL" is literal.
export function writeWorkSiblings({ outParentDir, slug, canonical, title, author, sourceEdition, sourceLang, sourceText, englishText, extra = {} }) {
  const header = [
    title,
    `by ${author}`,
    'Source text: Public Domain. English translation/apparatus/encoding: CC BY-NC 4.0, Wroot Press.',
    canonical,
    '-'.repeat(40),
    '',
  ].join('\n');
  fs.writeFileSync(path.join(outParentDir, `${slug}.txt`), header + '\n' + englishText.trim() + '\n');

  const record = {
    id: slug,
    url: canonical,
    site: 'migne',
    title,
    author,
    languages: ['en', sourceLang],
    source_edition: sourceEdition,
    source_text: sourceText,
    english: englishText,
    license_source: 'Public Domain Mark 1.0',
    license_translation: 'CC BY-NC 4.0',
    license_apparatus: 'CC BY-NC 4.0',
    generated: new Date().toISOString().slice(0, 10),
    ...extra,
  };
  fs.writeFileSync(path.join(outParentDir, `${slug}.json`), JSON.stringify(record, null, 2) + '\n');
}
