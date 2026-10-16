/* Phase B: hover or tap a sentence → its counterpart lights up in the other column.
   Reads the empty <span class="sm"> boundaries the builder emits (data-p = paragraph id,
   data-s = source sentence ids). Uses the CSS Custom Highlight API: no DOM wrapping, no
   reflow. Browsers without it, or without caret hit-testing, just get the plain page. */
(function () {
  if (!(window.CSS && CSS.highlights && window.Highlight)) return;
  var caret = document.caretPositionFromPoint
    ? function (x, y) { var c = document.caretPositionFromPoint(x, y); return c && [c.offsetNode, c.offset]; }
    : document.caretRangeFromPoint
      ? function (x, y) { var r = document.caretRangeFromPoint(x, y); return r && [r.startContainer, r.startOffset]; }
      : null;
  if (!caret) return;
  var items = [], byBlock = new Map();
  document.querySelectorAll('.coltext').forEach(function (col, ci) {
    var pid = null;
    col.querySelectorAll('p, li').forEach(function (blk) {
      var ms = blk.querySelectorAll('.sm'), list = [];
      ms.forEach(function (m, i) {
        if (m.dataset.p) pid = m.dataset.p;   // a marker may carry both (PG rows name their own paragraph)
        if (!m.dataset.s) return;
        var r = document.createRange();
        r.setStartAfter(m);
        var next = null;
        for (var k = i + 1; k < ms.length; k++) if (ms[k].dataset.s) { next = ms[k]; break; }
        if (next) r.setEndBefore(next); else r.selectNodeContents(blk), r.setStartAfter(m);
        var it = { p: pid, ids: m.dataset.s.split(',').map(Number), r: r, col: ci };
        items.push(it); list.push(it);
      });
      if (list.length) byBlock.set(blk, list);
    });
  });
  if (!items.length) return;
  var hl = new Highlight(); CSS.highlights.set('sentence', hl);
  var current = null;
  function group(it) {
    var mates = items.filter(function (x) { return x.p === it.p; });
    var ids = {}; it.ids.forEach(function (i) { ids[i] = 1; });
    var sel = [it], changed = true;
    while (changed) {
      changed = false;
      mates.forEach(function (x) {
        if (sel.indexOf(x) < 0 && x.ids.some(function (i) { return ids[i]; })) {
          sel.push(x); x.ids.forEach(function (i) { ids[i] = 1; }); changed = true;
        }
      });
    }
    return sel;
  }
  function at(x, y) {
    var c = caret(x, y);
    if (!c || !c[0]) return null;
    var n = c[0], blk = n.nodeType === 1 ? n : n.parentElement;
    while (blk && !byBlock.has(blk)) blk = blk.parentElement;
    if (!blk) return null;
    var l = byBlock.get(blk);
    for (var i = 0; i < l.length; i++) if (l[i].r.isPointInRange(c[0], c[1])) return l[i];
    return null;
  }
  function show(it) {
    if (it === current) return;
    current = it; hl.clear();
    if (it) group(it).forEach(function (x) { hl.add(x.r); });
  }
  var t = 0;
  document.addEventListener('mousemove', function (e) {
    var now = Date.now(); if (now - t < 40) return; t = now;
    if (e.target.closest && !e.target.closest('.coltext')) return show(null);
    show(at(e.clientX, e.clientY));
  });
  document.addEventListener('click', function (e) { show(at(e.clientX, e.clientY)); });
})();
