/* Phases E1 + E2: select text in a column → a small bar with two copy buttons.
   "Copy link to passage": a text-fragment URL (…#:~:text=start,end) that Chrome, Edge and Safari
   scroll to and highlight natively; other browsers land on the page (E1, static).
   "Copy share link": /q/<series>/<vol>/<slug>/<chunk.para.s1-s2>, which unfurls as a quote card
   in feeds and sends people to the passage (E2). It addresses SENTENCES (the Phase 0 ids), so it
   only appears when the selection sits in one paragraph. */
(function () {
  if (!window.getSelection || !document.querySelector) return;
  var css = document.createElement('style');
  css.textContent = '.sharebar{position:absolute;z-index:60;display:flex;gap:1px;background:#C3A343;border:1px solid #C3A343;'
    + 'border-radius:3px;box-shadow:0 2px 8px rgba(0,0,0,.25)}.sharebar[hidden]{display:none}'
    + '.sharebar button{background:#1E3B2C;color:#F2EAD8;border:0;padding:.3rem .65rem;font:inherit;font-size:.85rem;cursor:pointer}'
    + '.sharebar button:hover,.sharebar button:focus-visible{background:#C3A343;color:#1E3B2C}';
  document.head.appendChild(css);
  var bar = document.createElement('div');
  bar.className = 'sharebar'; bar.hidden = true;
  function mk(label) { var b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.dataset.label = label; bar.appendChild(b); return b; }
  var bFrag = mk('Copy link to passage'), bCard = mk('Copy share link');
  document.body.appendChild(bar);
  var text = '', ref = '', timer = null;

  function enc(s) { return encodeURIComponent(s).replace(/-/g, '%2D'); }
  function build(sel) {
    var w = sel.replace(/\s+/g, ' ').trim().split(' ');
    var frag = w.length <= 10 ? enc(w.join(' ')) : enc(w.slice(0, 5).join(' ')) + ',' + enc(w.slice(-5).join(' '));
    var hash = location.hash.replace(/:~:.*$/, '');
    return location.origin + location.pathname + location.search + (hash || '#') + ':~:text=' + frag;
  }
  function colOf(node) {
    var el = node && (node.nodeType === 1 ? node : node.parentElement);
    return el && el.closest && el.closest('.coltext');
  }
  // → "<chunk>.<para>.<s1>-<s2>" for a selection inside one paragraph, else ''
  function sentenceRef(range, col) {
    var marks = col.querySelectorAll('.sm'), pS = null, pE = null, sS = null, sE = null, firstIn = null;
    for (var i = 0; i < marks.length; i++) {
      var m = marks[i], where = range.comparePoint(m, 0);
      if (where > 0) break;
      if (where === 0 && !firstIn) firstIn = { p: null, s: null };
      if (m.dataset.p) { if (where < 0) pS = m.dataset.p; pE = m.dataset.p; if (where === 0 && firstIn && firstIn.p === null) firstIn.p = m.dataset.p; }
      if (m.dataset.s) { if (where < 0) sS = m.dataset.s; sE = m.dataset.s; if (where === 0 && firstIn && firstIn.s === null) firstIn.s = m.dataset.s; }
    }
    if (!sS && firstIn) { sS = firstIn.s; if (!pS) pS = firstIn.p; }
    if (!sS || !sE || !pS || pS !== pE) return '';
    var ids = sS.split(',').concat(sE.split(',')).map(Number);
    var a = Math.min.apply(null, ids), b = Math.max.apply(null, ids);
    if (!isFinite(a) || b - a > 39) return '';
    return pS + '.' + a + (b > a ? '-' + b : '');
  }
  function cardUrl(r) {
    var m = /^\/(pl|pg)\/(\d{1,3})\/([a-z0-9-]+)\/?/.exec(location.pathname);
    return m ? location.origin + '/q/' + m[1] + '/' + m[2] + '/' + m[3] + '/' + r : '';
  }
  function hide() { bar.hidden = true; }
  function update() {
    var s = window.getSelection();
    if (!s || s.isCollapsed || !s.rangeCount) return hide();
    var t = s.toString(), col = colOf(s.anchorNode);
    if (t.trim().length < 3 || !col || colOf(s.focusNode) !== col) return hide();
    text = t;
    ref = sentenceRef(s.getRangeAt(0), col);
    bCard.hidden = !(ref && cardUrl(ref));
    var rects = s.getRangeAt(0).getClientRects(), last = rects[rects.length - 1];
    if (!last) return hide();
    bFrag.textContent = bFrag.dataset.label; bCard.textContent = bCard.dataset.label;
    bar.hidden = false;
    var left = Math.max(8, Math.min(last.right + window.scrollX - 80, window.scrollX + document.documentElement.clientWidth - bar.offsetWidth - 8));
    bar.style.left = left + 'px';
    bar.style.top = (last.bottom + window.scrollY + 8) + 'px';
  }
  document.addEventListener('selectionchange', function () { clearTimeout(timer); timer = setTimeout(update, 250); });
  bar.addEventListener('mousedown', function (e) { e.preventDefault(); });  // keep the selection
  function copy(btn, url) {
    function done(ok) { btn.textContent = ok ? 'Link copied' : 'Press Ctrl/Cmd+C to copy'; setTimeout(hide, 1400); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { done(true); }, function () { fallback(url, done); });
    } else fallback(url, done);
  }
  bFrag.addEventListener('click', function () { copy(bFrag, build(text)); });
  bCard.addEventListener('click', function () { copy(bCard, cardUrl(ref)); });
  function fallback(url, done) {
    var ta = document.createElement('textarea');
    ta.value = url; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta); done(ok);
  }
})();
