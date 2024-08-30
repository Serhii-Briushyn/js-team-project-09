import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  // Обработка кликов на элементы details-list
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

  // Открытие контента первого активного элемента при загрузке страницы
  const firstItem = document.querySelector(
    '.details-item.active .details-content'
  );
  if (firstItem) {
    firstItem.style.maxHeight = firstItem.scrollHeight + 'px';
  }

  // Инициализация Swiper
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
  let activeElement = elements[0]; // Изначально активен первый элемент

  // Устанавливаем активный класс для первого элемента при загрузке
  activeElement.classList.add('skills-item-active');

  if (window.innerWidth >= 1440) {
    // Код для ПК версии (ширина экрана 1024px и больше)
    elements.forEach(element => {
      element.addEventListener('mouseover', function () {
        activeElement.classList.remove('skills-item-active');
        element.classList.add('skills-item-active');
        activeElement = element;
      });
    });
  } else {
    // Код для мобильной и планшетной версии (ширина экрана меньше 1024px)
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
