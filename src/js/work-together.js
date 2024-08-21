import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document
  .querySelector('.footer-comment')
  .addEventListener('input', function () {
    const maxLength = this.cols;
    if (this.value.length > maxLength) {
      this.value = this.value.substring(0, maxLength - 3) + '...';
    }
  });

document.getElementById('email').addEventListener('input', function () {
  const emailInput = this;
  const validationMessage = document.getElementById('email-validation');

  if (emailInput.checkValidity()) {
    emailInput.classList.remove('error');
    emailInput.classList.add('success');
    validationMessage.textContent = 'Success!';
    validationMessage.classList.remove('error');
    validationMessage.classList.add('success');
  } else {
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    validationMessage.textContent = 'Invalid email, try again';
    validationMessage.classList.remove('success');
    validationMessage.classList.add('error');
  }
});

document.querySelector('.form-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  const data = {
    email: email,
    comment: comment,
  };

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Server error');
      }
      return response.json();
    })
    .then(result => {
      document.querySelector('.footer-form').reset();

      showModal(result.title, result.message);
    })
    .catch(error => {
      showToast(
        'Error',
        'Something went wrong. Please check your input and try again.'
      );
    });
});

function showModal(title, message) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">
                <svg class="modal-close-svg">
                     <use xlink:href="img/sprite.svg#icon-closed-menu"></use>
                </svg>
            </button>
            <h3 class="modal-footer-title">${title}</h3>
            <p class="modal-footer-text">${message}</p>
        </div>
    `;
  document.body.appendChild(modal);

  document.body.classList.add('modal-open');

  function closeModal() {
    document.body.removeChild(modal);
    document.body.classList.remove('modal-open');
  }

  modal.querySelector('.modal-close').addEventListener('click', closeModal);

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

function showToast(title, message) {
  iziToast.error({
    title: 'Error',
    message: 'Incorrect data entered!',
    position: 'topRight',
    timeout: 3000,
    transitionIn: 'fadeIn',
    transitionOut: 'fadeOut',
  });
}
