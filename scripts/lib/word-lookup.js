/* Phase C: click a Latin word → every candidate analysis (lemma + parse) and lexicon entries.
   Data is built ahead of time (scripts/build-lookup.py → site/lex/) and lazy-loaded on first click.
   Analyses are AUTOMATIC and UNRANKED: nothing here picks a best guess. window.__WORDS = {base:'/lex'}. */
(function () {
  var cfg = window.__WORDS; if (!cfg) return;
  var GREEK = cfg.lang === 'grc';
  var COLSEL = GREEK ? '.coltext.greek' : '.coltext.latin, .canon-head[lang="la"]';
  var WORDRE = GREEK ? /[\u0370-\u03FF\u1F00-\u1FFF\u0300-\u0345]/ : /[A-Za-z\u00C0-\u00FF\u00E6\u0153\u00C6\u0152]/;
  var ELIDE = '\u00b4\u1fbd\u2019\u02bc\'';
  var caret = document.caretPositionFromPoint
    ? function (x, y) { var c = document.caretPositionFromPoint(x, y); return c && [c.offsetNode, c.offset]; }
    : document.caretRangeFromPoint
      ? function (x, y) { var r = document.caretRangeFromPoint(x, y); return r && [r.startContainer, r.startOffset]; }
      : null;
  if (!caret) return;
  var manifest = null, mloading = null, cache = {}, card = null, canHl = !!(window.CSS && CSS.highlights && window.Highlight), seq = 0;
  var lhl = canHl ? new Highlight() : null;
  if (lhl) CSS.highlights.set('lookup', lhl);
  function paintWord(rng) { if (!lhl) return; lhl.clear(); if (rng) lhl.add(rng); }
  function norm(w) {
    return w.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/æ/g, 'ae').replace(/œ/g, 'oe').replace(/j/g, 'i').replace(/v/g, 'u');
  }
  function letters(w) { return GREEK ? beta(w).replace(/[^a-z]/g, '') : norm(w).replace(/[^a-z]/g, ''); }
  // Greek: mirrors scripts/lib/greek_beta.py to_beta() (lowercase; marks in beta order; elision mark -> ')
  var B = {α:'a',β:'b',γ:'g',δ:'d',ε:'e',ζ:'z',η:'h',θ:'q',ι:'i',κ:'k',λ:'l',μ:'m',ν:'n',ξ:'c',ο:'o',π:'p',ρ:'r',σ:'s',ς:'s',τ:'t',υ:'u',φ:'f',χ:'x',ψ:'y',ω:'w'};
  var MK = {'\u0313':')','\u0314':'(','\u0301':'/','\u0300':'\\','\u0342':'=','\u0345':'|','\u0308':'+'};
  var FIX = {'\u0384':'\u0301','\u1fbd':'\u0313','\u1fbf':'\u0313','\u1ffe':'\u0314'};
  var ORDER = '+)(/\\=|';
  function beta(word) {
    var parts = [], i, ch, lo;
    var d = word.normalize('NFC').toLowerCase().normalize('NFD');
    for (i = 0; i < d.length; i++) {
      ch = FIX[d[i]] || d[i]; lo = ch.toLowerCase();
      if (B[lo]) parts.push([B[lo], []]);
      else if (MK[ch] && parts.length) parts[parts.length - 1][1].push(MK[ch]);
      else if (ELIDE.indexOf(ch) >= 0 && parts.length) parts.push(["'", []]);
    }
    return parts.map(function (p) { return p[0] + p[1].sort(function (a, b) { return ORDER.indexOf(a) - ORDER.indexOf(b); }).join(''); })
      .join('').replace(/r\)r\(/g, 'rr').replace(/r\(r\)/g, 'rr');
  }
  // shard key: 2 letters, or 3 where the build split a big 2-letter shard (manifest lists those prefixes)
  function shardKey(kind, name) {
    var k = letters(name); if (k.length < 2) k = (k + '_').slice(0, 2);
    var p = k.slice(0, 2);
    if (manifest[kind] && manifest[kind].indexOf(p) >= 0) return (k + '__').slice(0, 3);
    return p;
  }
  function getJSON(u) {
    if (!cache[u]) cache[u] = fetch(u).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
    return cache[u];
  }
  function shard(kind, name) { return getJSON(cfg.base + '/' + kind + '/' + shardKey(kind, name) + '.json'); }
  function loadManifest() {
    if (!mloading) mloading = getJSON(cfg.base + '/manifest.json').then(function (m) { manifest = m; });
    return mloading;
  }
  // everything one popup needs: the form's analyses, then each lemma's L&S / Du Cange entries
  function lookup(word) {
    return loadManifest().then(function () {
      if (!manifest) return null;
      return shard('forms', word).then(function (sh) {
        var f = sh && sh[GREEK ? beta(word) : norm(word)];
        if (!f) return { f: null, ls: {}, dc: {}, lsj: {} };
        var lems = {}; f.a.forEach(function (a) { lems[a[0]] = 1; });
        var names = Object.keys(lems), ls = {}, dc = {}, lsj = {};
        return Promise.all(names.map(function (l) {
          if (GREEK) return shard('lsj', l).then(function (r) { if (r && r[l]) lsj[l] = r[l]; });
          return Promise.all([shard('ls', l), shard('dc', l)]).then(function (r) {
            if (r[0] && r[0][l]) ls[l] = r[0][l];
            if (r[1] && r[1][l]) dc[l] = r[1][l];
          });
        })).then(function () { return { f: f, ls: ls, dc: dc, lsj: lsj }; });
      });
    });
  }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function close() { seq++; if (card) { card.remove(); card = null; document.body.style.paddingBottom = ''; } paintWord(null); }
  function show(word, rng, r) {
    close();
    card = el('div', 'wl-card');
    paintWord(rng);
    card.setAttribute('role', 'dialog'); card.setAttribute('aria-label', 'Word lookup: ' + word);
    var head = el('div', 'wl-head'); head.appendChild(el('strong', null, word));
    var x_ = el('button', 'wl-x', '\u00d7'); x_.setAttribute('aria-label', 'Close'); x_.onclick = close; head.appendChild(x_);
    card.appendChild(head);
    var f = r && r.f;
    if (!r) card.appendChild(el('p', 'wl-note', 'Lookup data unavailable.'));
    else if (!f || !f.a.length) card.appendChild(el('p', 'wl-note', 'No automatic analysis for this form (abbreviation, numeral, name or unrecognised spelling).'));
    else {
      var byLemma = {}, order = [];
      f.a.forEach(function (a) { var l = a[0]; if (!byLemma[l]) { byLemma[l] = []; order.push(l); } if (a[1] && byLemma[l].indexOf(a[1]) < 0) byLemma[l].push(a[1]); });
      if (f.v) card.appendChild(el('p', 'wl-note', 'Matched via normalised spelling \u201c' + f.v + '\u201d.'));
      if (f.n) card.appendChild(el('p', 'wl-note', 'Matched with ' + f.n + ' (the form as printed was not recognised).'));
      order.forEach(function (l) {
        var blk = el('div', 'wl-lemma'); blk.appendChild(el('div', 'wl-lemma-name', l));
        if (byLemma[l].length) blk.appendChild(el('div', 'wl-parse', byLemma[l].join(' \u00b7 ')));
        (GREEK ? [['LSJ', r.lsj]] : [['L&S', r.ls], ['Du Cange (OCR)', r.dc]]).forEach(function (L) {
          (L[1][l] || []).forEach(function (e) {
            var d = el('details', 'wl-entry'); d.appendChild(el('summary', null, L[0] + ': ' + e.head + (e.fuzzy ? ' (OCR spelling matched)' : '')));
            d.appendChild(el('p', null, e.def)); blk.appendChild(d);
          });
        });
        card.appendChild(blk);
      });
    }
    var src = el('details', 'wl-src'); src.appendChild(el('summary', null, '\u24d8 sources'));
    src.appendChild(el('p', 'wl-foot', (GREEK ? 'Automatic analysis (classical lexicon: names and later vocabulary may be missing), all candidates shown, not ranked. Lexicon: Liddell\u2013Scott\u2013Jones via Perseus (CC BY-SA 4.0); analysis: Morpheus.' : 'Automatic analysis, all candidates shown, not ranked. Lexica: Lewis & Short via Perseus (CC BY-SA 4.0); Du Cange (ed. Favre, public domain), uncorrected OCR; analysis: Collatinus.')));
    card.appendChild(src);
    document.body.appendChild(card);
    document.body.style.paddingBottom = card.offsetHeight + 'px';
  }
  document.addEventListener('click', function (ev) {
    if (card && card.contains(ev.target)) return;
    var col = ev.target.closest && ev.target.closest(COLSEL);
    if (!col || ev.target.closest('a, button, summary, .notecite, .fonscite')) { close(); return; }
    var sel = window.getSelection && window.getSelection();
    if (sel && !sel.isCollapsed) return;
    var c = caret(ev.clientX, ev.clientY);
    if (!c || c[0].nodeType !== 3 || !col.contains(c[0])) { close(); return; }
    var t = c[0].data, i = c[1], re = WORDRE;
    var s = i, e = i;
    while (s > 0 && re.test(t[s - 1])) s--;
    while (e < t.length && re.test(t[e])) e++;
    if (GREEK && e < t.length && ELIDE.indexOf(t[e]) >= 0) e++;   // trailing elision mark belongs to the word
    var word = t.slice(s, e); if (word.length < 2) { close(); return; }
    var rng = document.createRange(); rng.setStart(c[0], s); rng.setEnd(c[0], e);
    var my = ++seq;
    lookup(word).then(function (r) { if (my === seq) show(word, rng, r); });
  });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') close(); });
})();
