const closeButton = document.querySelector('.mobile-menu-close-btn');
const burgerBtn = document.querySelector('.header-mobile-open-btn');
const menu = document.querySelector('.mobile-menu');

closeButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});
