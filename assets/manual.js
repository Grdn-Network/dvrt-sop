// DVRT SOP Reference - client-side search (filter + highlight) and active-section highlight.
(function () {
  var q = document.getElementById('q');
  var parts = Array.prototype.slice.call(document.querySelectorAll('.part'));
  var navItems = Array.prototype.slice.call(document.querySelectorAll('.nav-item'));
  var noRes = document.getElementById('noresults');
  var byPart = {};
  navItems.forEach(function (n) { byPart[n.dataset.part] = n; });

  // Remove previous <mark> wrappers and re-merge text nodes.
  function clearMarks(root) {
    var marks = root.querySelectorAll('mark.hit');
    for (var i = 0; i < marks.length; i++) {
      var m = marks[i];
      m.parentNode.replaceChild(document.createTextNode(m.textContent), m);
    }
    root.normalize();
  }

  // Wrap every case-insensitive occurrence of `term` in <mark class="hit">.
  function highlight(root, term) {
    if (!root || !term) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var targets = [], node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.toLowerCase().indexOf(term) !== -1) targets.push(node);
    }
    targets.forEach(function (n) {
      var val = n.nodeValue, low = val.toLowerCase();
      var frag = document.createDocumentFragment(), idx = 0, pos;
      while ((pos = low.indexOf(term, idx)) !== -1) {
        if (pos > idx) frag.appendChild(document.createTextNode(val.slice(idx, pos)));
        var mk = document.createElement('mark');
        mk.className = 'hit';
        mk.textContent = val.slice(pos, pos + term.length);
        frag.appendChild(mk);
        idx = pos + term.length;
      }
      if (idx < val.length) frag.appendChild(document.createTextNode(val.slice(idx)));
      n.parentNode.replaceChild(frag, n);
    });
  }

  function runSearch() {
    var term = q.value.trim().toLowerCase();
    var shown = 0;
    parts.forEach(function (sec) {
      clearMarks(sec);
      var match = !term || sec.textContent.toLowerCase().indexOf(term) !== -1;
      sec.hidden = !match;
      var nav = byPart[sec.dataset.part];
      if (nav) nav.hidden = !match;
      if (match) {
        shown++;
        if (term) highlight(sec.querySelector('.part-body'), term);
      }
    });
    if (noRes) noRes.hidden = shown > 0;
  }
  if (q) q.addEventListener('input', runSearch);

  // Highlight the nav item for whichever part is in view.
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navItems.forEach(function (n) { n.classList.remove('active'); });
          var n = byPart[e.target.dataset.part];
          if (n) n.classList.add('active');
        }
      });
    }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });
    parts.forEach(function (p) { obs.observe(p); });
  }
})();
