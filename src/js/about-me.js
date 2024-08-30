import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.details-list')
    .addEventListener('click', function (event) {
      if (event.target.closest('.details-btn')) {
        const item = event.target.closest('.details-item');
        item.classList.toggle('active');
        const content = item.querySelector('.details-content');
        if (item.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = 0;
        }
      }
    });

  const firstItem = document.querySelector(
    '.details-item.active .details-content'
  );
  if (firstItem) {
    firstItem.style.maxHeight = firstItem.scrollHeight + 'px';
  }

  const swiper = new Swiper('.skills-container.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.skills-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      375: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1440: { slidesPerView: 6 },
    },
  });

  const elements = document.querySelectorAll('.skills-item');
  let activeElement = elements[0];

  activeElement.classList.add('skills-item-active');

  if (window.innerWidth >= 1440) {
    elements.forEach(element => {
      element.addEventListener('mouseover', function () {
        activeElement.classList.remove('skills-item-active');
        element.classList.add('skills-item-active');
        activeElement = element;
      });
    });
  } else {
    elements.forEach(element => {
      element.addEventListener('click', function () {
        if (activeElement) {
          activeElement.classList.remove('skills-item-active');
        }
        element.classList.add('skills-item-active');
        activeElement = element;
      });

      element.setAttribute('tabindex', '0');
      element.addEventListener('focus', function () {
        if (activeElement) {
          activeElement.classList.remove('skills-item-active');
        }
        element.classList.add('skills-item-active');
        activeElement = element;
      });
    });
  }
});
