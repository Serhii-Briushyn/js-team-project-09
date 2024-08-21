const closeButton = document.querySelector('.mobile-menu-close-btn');
const burgerBtn = document.querySelector('.header-mobile-open-btn');
const menu = document.querySelector('.mobile-menu');
const links = document.querySelectorAll('.mob-menu-list-link');

closeButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

links.forEach(link => {
  link.addEventListener('click', (e) => {
    menu.classList.remove('is-open');
  })
})
