import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  // Обработчик для секции "About Me"
  document.querySelectorAll('.details-item .details-btn').forEach(button => {
    button.addEventListener('click', function () {
      const item = this.closest('.details-item');
      item.classList.toggle('active');
      const content = item.querySelector('.details-content');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = 0;
      }
    });
  });

  const firstItem = document.querySelector(
    '.details-item.active .details-content'
  );
  if (firstItem) {
    firstItem.style.maxHeight = firstItem.scrollHeight + 'px';
  }

  // Инициализация Swiper
  let swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
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

  document
    .querySelector('.swiper-button-next')
    .addEventListener('click', () => {
      swiper.slideNext();
    });
});
