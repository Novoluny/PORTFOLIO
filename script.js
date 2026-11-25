const nav = document.getElementById('nav');
const burger = document.getElementById('burger');

/**
 * Назначение: открывает или закрывает мобильное меню и синхронизирует
 * состояние кнопки-бургера через атрибут aria-expanded.
 * Параметры:
 * open — логическое значение: true — открыть меню, false — закрыть.
 * Побочные эффекты: переключает класс is-open у элемента #nav,
 * устанавливает атрибут aria-expanded у #burger.
 */
function setMenu(open) {
  nav.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
}
burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); }); 
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

document.getElementById('year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(
  '.section__title, .cards, .prices, .prices__note, .steps, .about > div, .contact-card'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}