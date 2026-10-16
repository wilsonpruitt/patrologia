/* Phase C: click a Latin word → every candidate analysis (lemma + parse) and lexicon entries.
   Data is built ahead of time (scripts/build-lookup.py → site/lex/) and lazy-loaded on first click.
   Analyses are AUTOMATIC and UNRANKED: nothing here picks a best guess. window.__WORDS = {base:'/lex'}. */
(function () {
  var cfg = window.__WORDS; if (!cfg) return;
  var caret = document.caretPositionFromPoint
    ? function (x, y) { var c = document.caretPositionFromPoint(x, y); return c && [c.offsetNode, c.offset]; }
    : document.caretRangeFromPoint
      ? function (x, y) { var r = document.caretRangeFromPoint(x, y); return r && [r.startContainer, r.startOffset]; }
      : null;
  if (!caret) return;
  var manifest = null, mloading = null, cache = {}, card = null;
  function norm(w) {
    return w.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/æ/g, 'ae').replace(/œ/g, 'oe').replace(/j/g, 'i').replace(/v/g, 'u');
  }
  function letters(w) { return norm(w).replace(/[^a-z]/g, ''); }
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
      var key = letters(word);
      return shard('forms', key).then(function (sh) {
        var f = sh && sh[norm(word)];
        if (!f) return { f: null, ls: {}, dc: {} };
        var lems = {}; f.a.forEach(function (a) { lems[a[0]] = 1; });
        var names = Object.keys(lems), ls = {}, dc = {};
        return Promise.all(names.map(function (l) {
          return Promise.all([shard('ls', l), shard('dc', l)]).then(function (r) {
            if (r[0] && r[0][l]) ls[l] = r[0][l];
            if (r[1] && r[1][l]) dc[l] = r[1][l];
          });
        })).then(function () { return { f: f, ls: ls, dc: dc }; });
      });
    });
  }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function close() { if (card) { card.remove(); card = null; } }
  function show(word, x, y, r) {
    close();
    card = el('div', 'wl-card');
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
      order.forEach(function (l) {
        var blk = el('div', 'wl-lemma'); blk.appendChild(el('div', 'wl-lemma-name', l));
        if (byLemma[l].length) blk.appendChild(el('div', 'wl-parse', byLemma[l].join(' \u00b7 ')));
        [['L&S', r.ls], ['Du Cange (OCR)', r.dc]].forEach(function (L) {
          (L[1][l] || []).forEach(function (e) {
            var d = el('details', 'wl-entry'); d.appendChild(el('summary', null, L[0] + ': ' + e.head + (e.fuzzy ? ' (OCR spelling matched)' : '')));
            d.appendChild(el('p', null, e.def)); blk.appendChild(d);
          });
        });
        card.appendChild(blk);
      });
    }
    card.appendChild(el('p', 'wl-foot', 'Automatic analysis, all candidates shown, not ranked. Lexica: Lewis & Short via Perseus (CC BY-SA 4.0); Du Cange (ed. Favre, public domain), uncorrected OCR; analysis: Collatinus.'));
    document.body.appendChild(card);
    var w = card.offsetWidth, h = card.offsetHeight;
    card.style.left = Math.max(8, Math.min(x, window.innerWidth - w - 8)) + 'px';
    card.style.top = Math.max(8, Math.min(y + 14, window.innerHeight - h - 8)) + 'px';
  }
  document.addEventListener('click', function (ev) {
    if (card && card.contains(ev.target)) return;
    var col = ev.target.closest && ev.target.closest('.coltext.latin, .canon-head[lang="la"]');
    if (!col || ev.target.closest('a, button, summary, .notecite, .fonscite')) { close(); return; }
    var sel = window.getSelection && window.getSelection();
    if (sel && !sel.isCollapsed) return;
    var c = caret(ev.clientX, ev.clientY);
    if (!c || c[0].nodeType !== 3 || !col.contains(c[0])) { close(); return; }
    var t = c[0].data, i = c[1], re = /[A-Za-zÀ-ÿæœÆŒ]/;
    var s = i, e = i;
    while (s > 0 && re.test(t[s - 1])) s--;
    while (e < t.length && re.test(t[e])) e++;
    var word = t.slice(s, e); if (word.length < 2) { close(); return; }
    var x = ev.clientX, y = ev.clientY;
    lookup(word).then(function (r) { show(word, x, y, r); });
  });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') close(); });
})();
