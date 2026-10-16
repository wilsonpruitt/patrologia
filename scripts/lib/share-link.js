/* Phase E1: select text in a column → "Copy link to passage". Builds a text-fragment URL
   (…#:~:text=start,end) that Chrome, Edge and Safari scroll to and highlight natively;
   other browsers land on the page. Static, no server. A selection that spans blocks
   (newline in toString) uses the start,end form with the first and last few words. */
(function () {
  if (!window.getSelection || !document.querySelector) return;
  var css = document.createElement('style');
  css.textContent = '.sharelink{position:absolute;z-index:60;background:#1E3B2C;color:#F2EAD8;border:1px solid #C3A343;'
    + 'border-radius:3px;padding:.3rem .65rem;font:inherit;font-size:.85rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.25)}'
    + '.sharelink:hover,.sharelink:focus-visible{background:#C3A343;color:#1E3B2C}';
  document.head.appendChild(css);
  var btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'sharelink'; btn.hidden = true;
  btn.textContent = 'Copy link to passage';
  document.body.appendChild(btn);
  var text = '', timer = null;

  function enc(s) { return encodeURIComponent(s).replace(/-/g, '%2D'); }
  function words(s) { return s.trim().split(/\s+/); }
  function build(sel) {
    var w = words(sel.replace(/\s+/g, ' '));
    var frag;
    if (/\n/.test(sel.trim()) || w.length > 12) {
      var lead = w.slice(0, 5).join(' '), tail = w.slice(-5).join(' ');
      frag = w.length <= 10 ? enc(w.join(' ')) : enc(lead) + ',' + enc(tail);
    } else frag = enc(w.join(' '));
    var hash = location.hash.replace(/:~:.*$/, '');
    return location.origin + location.pathname + location.search + (hash || '#') + ':~:text=' + frag;
  }
  function inColumn(node) {
    var el = node && (node.nodeType === 1 ? node : node.parentElement);
    return el && el.closest && el.closest('.coltext');
  }
  function hide() { btn.hidden = true; }
  function update() {
    var s = window.getSelection();
    if (!s || s.isCollapsed || !s.rangeCount) return hide();
    var t = s.toString();
    if (t.trim().length < 3 || !inColumn(s.anchorNode) || !inColumn(s.focusNode)) return hide();
    text = t;
    var r = s.getRangeAt(0).getClientRects(), last = r[r.length - 1];
    if (!last) return hide();
    btn.textContent = 'Copy link to passage';
    btn.hidden = false;
    var left = Math.max(8, Math.min(last.right + window.scrollX - 80, window.scrollX + document.documentElement.clientWidth - btn.offsetWidth - 8));
    btn.style.left = left + 'px';
    btn.style.top = (last.bottom + window.scrollY + 8) + 'px';
  }
  document.addEventListener('selectionchange', function () {
    clearTimeout(timer); timer = setTimeout(update, 250);
  });
  btn.addEventListener('mousedown', function (e) { e.preventDefault(); });  // keep the selection
  btn.addEventListener('click', function () {
    var url = build(text);
    function done(ok) { btn.textContent = ok ? 'Link copied' : 'Press Ctrl/Cmd+C to copy'; setTimeout(hide, 1400); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { done(true); }, function () { fallback(url, done); });
    } else fallback(url, done);
  });
  function fallback(url, done) {
    var ta = document.createElement('textarea');
    ta.value = url; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta); done(ok);
  }
})();
