// DVRT SOP Reference - client-side search + active-section highlight.
(function () {
  var q = document.getElementById('q');
  var parts = Array.prototype.slice.call(document.querySelectorAll('.part'));
  var navItems = Array.prototype.slice.call(document.querySelectorAll('.nav-item'));
  var noRes = document.getElementById('noresults');
  var byPart = {};
  navItems.forEach(function (n) { byPart[n.dataset.part] = n; });

  // Live search: hide parts (and their nav entries) that do not match.
  function runSearch() {
    var term = q.value.trim().toLowerCase();
    var shown = 0;
    parts.forEach(function (sec) {
      var match = !term || sec.textContent.toLowerCase().indexOf(term) !== -1;
      sec.hidden = !match;
      var nav = byPart[sec.dataset.part];
      if (nav) nav.hidden = !match;
      if (match) shown++;
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
