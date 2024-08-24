import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.getElementById('email').addEventListener('input', function () {
  const emailInput = this;
  const validationMessage = document.getElementById('email-validation');

  if (emailInput.value === '') {
    emailInput.classList.remove('error', 'success');
    validationMessage.textContent = '';
  } else if (emailInput.checkValidity()) {
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
    .catch(() => {
      showToast(
        'Error',
        'Something went wrong. Please check your input and try again.'
      );
    });
});

function showModal(title, message) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalMessage = document.getElementById('modal-message');

  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.style.display = 'block';
  document.body.classList.add('modal-open');

  function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  document.getElementById('modal-close').addEventListener('click', closeModal);

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
    title: title,
    message: message,
    position: 'topRight',
    timeout: 3000,
    transitionIn: 'fadeIn',
    transitionOut: 'fadeOut',
  });
}
