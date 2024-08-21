document.addEventListener('DOMContentLoaded', function () {
  const closeButton = document.querySelector('.mobile-menu-close-btn');
  const burgerBtn = document.querySelector('.header-mobile-open-btn');
  const menu = document.querySelector('.mobile-menu');

  function toggleMenu() {
    menu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  }

  if (closeButton) {
    closeButton.addEventListener('click', toggleMenu);
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu);
  }
});
