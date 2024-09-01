document.addEventListener('DOMContentLoaded', function () {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const pictures = entry.target.querySelectorAll('.cover-picture');
        pictures.forEach(picture => {
          picture.classList.add('animate-marquee');
        });
      } else {
        const pictures = entry.target.querySelectorAll('.cover-picture');
        pictures.forEach(picture => {
          picture.classList.remove('animate-marquee');
        });
      }
    });
  }, options);

  const wrap = document.querySelector('.cover-general-wrap');
  if (wrap) {
    observer.observe(wrap);
  }
});
