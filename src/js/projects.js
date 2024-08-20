import Swiper from 'swiper';
import 'swiper/css';

const projectsContainer = document.querySelector('.swiper-container');

if (projectsContainer) {
  const nextButton = document.querySelector('.projects-arrow-next');
  const prevButton = document.querySelector('.projects-arrow-prev');

  prevButton.classList.add('projects-arrow-disabled');

  const swiper = new Swiper(projectsContainer, {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      375: { spaceBetween: 30 },
      768: { spaceBetween: 70 },
      1440: { spaceBetween: 67 },
    },
    on: {
      slideChange: () => {
        nextButton.classList.toggle('projects-arrow-disabled', swiper.isEnd);
        prevButton.classList.toggle(
          'projects-arrow-disabled',
          swiper.isBeginning
        );
      },
    },
  });

  nextButton.addEventListener('click', () => swiper.slideNext());
  prevButton.addEventListener('click', () => swiper.slidePrev());

  projectsContainer.addEventListener('keydown', event => {
    if (document.activeElement === projectsContainer) {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          swiper.slideNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          swiper.slidePrev();
          break;
        default:
          break;
      }
    }
  });
}