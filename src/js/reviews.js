import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';

const reviewSwiper = new Swiper('.review-swiper', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: '.review-swiper-button-next',
    prevEl: '.review-swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
  },
  on: {
    init: function () {
      document
        .querySelector('.review-swiper-button-prev')
        .classList.add('disabled');
      document
        .querySelector('.review-swiper-button-next')
        .classList.remove('disabled');
    },
    reachEnd: function () {
      document
        .querySelector('.review-swiper-button-next')
        .classList.add('disabled');
      document
        .querySelector('.review-swiper-button-prev')
        .classList.remove('disabled');
    },
    reachBeginning: function () {
      document
        .querySelector('.review-swiper-button-prev')
        .classList.add('disabled');
      document
        .querySelector('.review-swiper-button-next')
        .classList.remove('disabled');
    },
    fromEdge: function () {
      document
        .querySelector('.review-swiper-button-prev')
        .classList.remove('disabled');
      document
        .querySelector('.review-swiper-button-next')
        .classList.remove('disabled');
    },
  },
});

document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.review-swiper-button-prev')
    .classList.add('disabled');
  document
    .querySelector('.review-swiper-button-next')
    .classList.remove('disabled');
});

async function fetchReviews() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const reviews = await response.json();
    renderReviews(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    showError('Not found');
  }
}

function renderReviews(reviews) {
  const swiperWrapper = document.querySelector('.review-swiper-wrapper');
  const maxLength = 150;

  const markup = reviews
    .map(
      review => `
      <li class="swiper-slide review-card">
        <img src="${review.avatar_url}" class="review-img" alt="${
        review.author
      }" />
        <p class="review-name">${review.author}</p>
        <p class="review-text">${
          review.review.length > maxLength
            ? review.review.substring(0, maxLength) + '...'
            : review.review
        }</p>
      </li>
    `
    )
    .join('');

  swiperWrapper.innerHTML = markup;
  reviewSwiper.update();
}

function showError(message) {
  const swiperWrapper = document.querySelector('.review-swiper-wrapper');
  swiperWrapper.innerHTML = `<li class="swiper-slide"><p>${message}</p></li>`;
}

fetchReviews();
