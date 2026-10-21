// Язык страницы: выбранный раньше → язык браузера → английский.
(function () {
  var supported = ['en', 'ru', 'tg'];
  function pick() {
    try {
      var saved = localStorage.getItem('solim.lang');
      if (supported.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return supported.indexOf(nav) !== -1 ? nav : 'en';
  }
  window.setLang = function (lang) {
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('shown', el.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('.lang-tab').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-set') === lang);
    });
    document.documentElement.lang = lang;
    try { localStorage.setItem('solim.lang', lang); } catch (e) {}
  };
  document.addEventListener('DOMContentLoaded', function () { window.setLang(pick()); });
})();
