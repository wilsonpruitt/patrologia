// Shared page chrome for migne.app — single source of truth for the nav bar,
// <head>, and footer, so the five nav destinations stay consistent across the
// landing, work pages, and the index/authors/queue/essay pages.
//
// NAV is defined ONCE here. All builders import nav() — never hardcode nav <a>s.

export const NAV_ITEMS = [
  { key: 'latina', href: '/latina/', label: 'Latina' },
  { key: 'graeca', href: '/graeca/', label: 'Græca' },
  { key: 'authors', href: '/authors/', label: 'Authors' },
  { key: 'queue', href: '/queue/', label: 'The Queue' },
  { key: 'scripture', href: '/scripture/', label: 'Scripture' },
  { key: 'sources', href: '/sources/', label: 'Sources' },
  { key: 'method', href: '/method/', label: 'Method' },
  { key: 'migne', href: '/migne/', label: 'Migne' },
];

// current = one of the keys above (or null/undefined on the home/landing page).
export function nav(current) {
  const links = NAV_ITEMS.map(i =>
    `    <a href="${i.href}"${i.key === current ? ' aria-current="page"' : ''}>${i.label}</a>`
  ).join('\n');
  return `  <nav>\n${links}\n  </nav>`;
}

export function header(current) {
  return `<header class="bar">
  <a class="wordmark" href="/">MIGNE<span class="tld">.APP</span></a>
${nav(current)}
</header>`;
}

// Minimal <head> for the secondary pages (the landing keeps its richer OG block).
export function head({ title, description, path }) {
  const canonical = `https://migne.app${path}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Migne">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="https://migne.app/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="https://migne.app/og.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<script defer src="/_vercel/insights/script.js"></script>
</head>
<body>`;
}

// The rights line runs in every footer. Migne's Latin and Greek are public
// domain and stay that way; what is licensed is our English, our apparatus,
// and our encoding. Keep this in sync with LICENSE and /rights/.
export const rightsLine = () =>
  `  <p class="fine rights">The Latin and Greek are public domain. The English translations, notes, and structured text are &copy; 2026 Wilson Pruitt, licensed <a href="/rights/">CC BY&#8209;NC&nbsp;4.0</a> &mdash; free to share and build on, not to sell. <a href="/rights/">Commercial use, ask.</a></p>`;

export const footer = () => `<footer class="colophon">
  <p class="motto">Du bon, à bon marché — carried to its limit: <span class="free">the good, free.</span></p>
  <p class="fine">A WROOT PRESS WORK · THE TEXTS ARE THE CHURCH'S · THE SITE IS YOURS</p>
${rightsLine()}
</footer>

</body>
</html>
`;

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
