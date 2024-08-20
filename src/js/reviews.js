import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';

const swiper = new Swiper('.unique-review-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: '.unique-review-arrow-next',
    prevEl: '.unique-review-arrow-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3, // 3 слайда для средних экранов
      slidesPerGroup: 3,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
  },
  on: {
    reachEnd: function () {
      document
        .querySelector('.unique-review-arrow-next')
        .classList.add('disabled');
    },
    reachBeginning: function () {
      document
        .querySelector('.unique-review-arrow-prev')
        .classList.add('disabled');
    },
    fromEdge: function () {
      document
        .querySelector('.unique-review-arrow-next')
        .classList.remove('disabled');
      document
        .querySelector('.unique-review-arrow-prev')
        .classList.remove('disabled');
    },
  },
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
  const swiperWrapper = document.querySelector('.unique-review-wrapper');
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
  swiper.update();
}

function showError(message) {
  const swiperWrapper = document.querySelector('.unique-review-wrapper');
  swiperWrapper.innerHTML = `<li class="swiper-slide"><p>${message}</p></li>`;
}

fetchReviews();
