import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// шлях на сервер
const URL = 'https://portfolio-js.b.goit.study/api/reviews';

//  Swiper
const swiper = new Swiper('.review-swiper', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
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
    reachEnd: function () {
      document.querySelector('.custom-prev').classList.add('disabled');
    },
    reachBeginning: function () {
      document.querySelector('.custom-next').classList.add('disabled');
    },
    fromEdge: function () {
      document.querySelector('.custom-next').classList.remove('disabled');
      document.querySelector('.custom-prev').classList.remove('disabled');
    },
  },
});

// запит
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
// розмітка
function renderReviews(reviews) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const maxLength = 150;

  const markup = reviews
    .map(review => {
      return `
      <li class="swiper-slide review-card">
        <img src="${review.avatar_url}" class="review-img"  alt="${
        review.author
      }" />
        <p class="review-name">${review.author}</p>
        <p class="review-text">${
          review.review.length > maxLength
            ? review.review.substring(0, maxLength) + '...'
            : review.review
        }</p>
      </li>
    `;
    })
    .join('');

  swiperWrapper.innerHTML = markup;
  swiper.update();
}

// помилки
function showError(message) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = `<li class="swiper-slide"><p>${message}</p></li>`;
}

fetchReviews();
