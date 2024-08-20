const viewport = document.querySelector('.cover-section');

function isFullyInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= viewportHeight &&
    rect.right <= viewportWidth
  );
}

function checkScroll() {
  if (isFullyInViewport(viewport)) {
    if (!viewport.classList.contains('scrolling')) {
      console.log('Section is fully in viewport.');
    }
    viewport.classList.add('scrolling');
  } else {
    if (viewport.classList.contains('scrolling')) {
      console.log('Section is out of viewport.');
    }
    viewport.classList.remove('scrolling');
  }
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const debouncedCheckScroll = debounce(checkScroll, 100);
window.addEventListener('scroll', debouncedCheckScroll);
checkScroll();
