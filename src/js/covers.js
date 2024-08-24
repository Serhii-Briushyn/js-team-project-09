const viewport = document.querySelector('.cover-section');

function isCenterInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  // Обчислюємо центр елемента
  const elementCenterX = rect.left + rect.width / 2;
  const elementCenterY = rect.top + rect.height / 2;

  // Перевіряємо, чи центр елемента в межах вюпорта
  return (
    elementCenterX >= 0 &&
    elementCenterX <= viewportWidth &&
    elementCenterY >= 0 &&
    elementCenterY <= viewportHeight
  );
}

function checkScroll() {
  if (isCenterInViewport(viewport)) {
    if (!viewport.classList.contains('scrolling')) {
      console.log('Section is in viewport".');
    }
    viewport.classList.add('scrolling');
  } else {
    if (viewport.classList.contains('scrolling')) {
      console.log('Section is out of viewport".');
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

// *   Animation;

document.addEventListener('DOMContentLoaded', () => {
  const coverLists = document.querySelectorAll('.cover-list li');

  const listDelay = 500;

  coverLists.forEach((list, listIndex) => {
    list.style.transitionDelay = `${listIndex * listDelay}ms`;
    list.classList.add('show');

    const listItems = list.querySelectorAll('li');

    listItems.forEach((item, itemIndex) => {
      const itemDelay = 300;
      item.style.transitionDelay = `${itemIndex * itemDelay}ms`;
      item.classList.add('show');
    });
  });
});
