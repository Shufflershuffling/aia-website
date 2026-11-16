/* AIA mobile navigation */
(function () {
  var toggle = document.querySelector('.mobile-menu-toggle');
  var links = document.getElementById('aia-mobile-links');
  if (!toggle || !links) return;
  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    links.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }
  toggle.addEventListener('click', function () { setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
  links.addEventListener('click', function (event) { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) setOpen(false); });
})();
