import './js/header.js';
import './js/about-me.js';
import './js/projects.js';
import './js/faq.js';
import './js/covers.js';
import './js/reviews.js';
import './js/work-together.js';

window.onload = function () {
  window.scrollTo(0, 0);
};

let scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

scrollToTopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
