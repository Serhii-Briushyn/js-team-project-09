const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseButton = document.querySelector(
  '.mobile-menu-close-button'
);
const dropdownNav = document.querySelector('.dropdown-nav');
const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
const projectOrderButton = document.querySelector('.project-order-button');
const mobileOrderButton = document.querySelector('.mobile-order-button');

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
}

function toggleDropdownMenu() {
  if (dropdownNav.classList.contains('dropdown-show')) {
    dropdownNav.classList.remove('dropdown-show');
  } else {
    dropdownNav.classList.add('dropdown-show');
  }
}

function closeDropdownMenuOnEscape(evt) {
  if (evt.key === 'Escape') {
    dropdownNav.classList.remove('dropdown-show');
  }
}

function handleScroll(evt) {
  evt.preventDefault();
  if (mobileMenu.classList.contains('is-open')) {
    mobileMenu.classList.remove('is-open');
  }
  const target = evt.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(target);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth',
  });
}

mobileMenuButton.addEventListener('click', openMobileMenu);
mobileMenuCloseButton.addEventListener('click', closeMobileMenu);
menuButton.addEventListener('click', toggleDropdownMenu);
dropdownNav.addEventListener('click', handleScroll);
mobileNav.addEventListener('click', handleScroll);
window.addEventListener('keydown', closeDropdownMenuOnEscape);
projectOrderButton.addEventListener('click', handleScroll);
mobileOrderButton.addEventListener('click', handleScroll);

window.onclick = function (evt) {
  if (
    !evt.target.matches('.menu-button') &&
    !evt.target.matches('.dropdown-nav')
  ) {
    dropdownNav.classList.remove('dropdown-show');
  }
};
