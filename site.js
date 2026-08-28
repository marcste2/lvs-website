/* LVS: Zwei-Klick-Lösung für die Google-Karte im Footer.
   Es wird nichts von Google geladen, bevor die Besucherin nicht klickt. */
(function () {
  document.querySelectorAll('.map-consent').forEach(function (box) {
    var btn = box.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = box.getAttribute('data-map-src');
      f.title = 'Anfahrt: LVS Lohnverpackungsservice, Hauptstraße 13-15, 2332 Hennersdorf';
      f.setAttribute('loading', 'lazy');
      f.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      box.replaceWith(f);
    });
  });
})();
