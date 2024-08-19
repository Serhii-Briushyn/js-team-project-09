document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-item .faq-btn').forEach(button => {
    button.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      item.classList.toggle('active');
      const content = item.querySelector('.faq-content-text');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
});
