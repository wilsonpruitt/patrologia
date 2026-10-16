/* Phase C: click a Latin word → every candidate analysis (lemma + parse) and lexicon entries.
   Data is built ahead of time (scripts/build-words.py, build-lexicon-*.py) and lazy-loaded on first click.
   Analyses are AUTOMATIC and UNRANKED: nothing here picks a best guess. window.__WORDS = {words, lex:[{url,label}]}. */
(function () {
  var cfg = window.__WORDS; if (!cfg) return;
  var caret = document.caretPositionFromPoint
    ? function (x, y) { var c = document.caretPositionFromPoint(x, y); return c && [c.offsetNode, c.offset]; }
    : document.caretRangeFromPoint
      ? function (x, y) { var r = document.caretRangeFromPoint(x, y); return r && [r.startContainer, r.startOffset]; }
      : null;
  if (!caret) return;
  var data = null, lex = [], loading = null, card = null;
  function norm(w) {
    return w.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/æ/g, 'ae').replace(/œ/g, 'oe').replace(/j/g, 'i').replace(/v/g, 'u');
  }
  function load() {
    if (loading) return loading;
    var get = function (u) { return fetch(u).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); };
    loading = Promise.all([get(cfg.words)].concat(cfg.lex.map(function (l) { return get(l.url); }))).then(function (res) {
      data = res[0]; lex = cfg.lex.map(function (l, i) { return { label: l.label, d: res[i + 1] }; });
    });
    return loading;
  }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function close() { if (card) { card.remove(); card = null; } }
  function show(word, x, y) {
    close();
    card = el('div', 'wl-card');
    card.setAttribute('role', 'dialog'); card.setAttribute('aria-label', 'Word lookup: ' + word);
    var head = el('div', 'wl-head'); head.appendChild(el('strong', null, word));
    var x_ = el('button', 'wl-x', '×'); x_.setAttribute('aria-label', 'Close'); x_.onclick = close; head.appendChild(x_);
    card.appendChild(head);
    var f = data && data.forms[norm(word)];
    if (!data) card.appendChild(el('p', 'wl-note', 'Lookup data unavailable.'));
    else if (!f || !f.a.length) card.appendChild(el('p', 'wl-note', 'No automatic analysis for this form (abbreviation, numeral, name or unrecognised spelling).'));
    else {
      var byLemma = {}, order = [];
      f.a.forEach(function (a) { var l = data.lemmas[a[0]]; if (!byLemma[l]) { byLemma[l] = []; order.push(l); } if (a[1] && byLemma[l].indexOf(a[1]) < 0) byLemma[l].push(a[1]); });
      if (f.via) card.appendChild(el('p', 'wl-note', 'Matched via normalised spelling “' + f.via + '”.'));
      order.forEach(function (l) {
        var blk = el('div', 'wl-lemma'); blk.appendChild(el('div', 'wl-lemma-name', l));
        if (byLemma[l].length) blk.appendChild(el('div', 'wl-parse', byLemma[l].join(' · ')));
        lex.forEach(function (L) {
          var es = L.d && L.d.entries && L.d.entries[l];
          if (!es) return;
          es.forEach(function (e) {
            var d = el('details', 'wl-entry'); d.appendChild(el('summary', null, L.label + ': ' + e.head));
            d.appendChild(el('p', null, e.def)); blk.appendChild(d);
          });
        });
        card.appendChild(blk);
      });
    }
    card.appendChild(el('p', 'wl-foot', 'Automatic analysis, all candidates shown, not ranked. Lexicon: Lewis & Short via Perseus (CC BY-SA 4.0); analysis: Collatinus.'));
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
    load().then(function () { show(word, x, y); });
  });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') close(); });
})();
