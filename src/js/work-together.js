// Обрезка текста в поле comments
document.querySelector('.footer-comment').addEventListener('input', function() {
    const maxLength = this.cols;
    if (this.value.length > maxLength) {
        this.value = this.value.substring(0, maxLength - 3) + '...';
    }
});

// Валидация при вводе данных в поле input email
document.getElementById('email').addEventListener('input', function() {
    const emailInput = this;
    const validationMessage = document.getElementById('email-validation');
    
    if (emailInput.checkValidity()) {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        validationMessage.textContent = "Success!";
        validationMessage.classList.remove('error');
        validationMessage.classList.add('success');
    } else {
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        validationMessage.textContent = "Invalid email, try again";
        validationMessage.classList.remove('success');
        validationMessage.classList.add('error');
    }
});

// Отправка формы на сервер
document.querySelector('.form-btn').addEventListener('click', function(event) {
    event.preventDefault();  // Предотвращаем отправку формы по умолчанию
    
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    // Создаем объект данных
    const data = {
        email: email,
        comment: comment
    };

    // Отправляем POST запрос
    fetch('https://portfolio-js.b.goit.study/api/requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Server error');
        }
        return response.json();
    })
    .then(result => {
        // Очищаем форму
        document.querySelector('.footer-form').reset();

        // Открываем модальное окно с успешным сообщением
        showModal(result.title, result.message);
    })
    .catch(error => {
        // Отображаем всплывающее сообщение об ошибке
        showToast('Error', 'Something went wrong. Please check your input and try again.');
    });
});

// Функция для отображения модального окна
function showModal(title, message) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">
                <svg class="modal-close-svg" width="11" height="11">
                    <use href="/src/img/sprite.svg#icon-closed-menu"></use>
                </svg>
            </button>
            <h3>${title}</h3>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(modal);

    
    // Закрытие модального окна при клике на кнопку
    modal.querySelector('.modal-close').addEventListener('click', closeModal);

    // Закрытие модального окна при клике на фон (backdrop)
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Закрытие модального окна при нажатии клавиши Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    function closeModal() {
        document.body.removeChild(modal);
    }
}

// Отображения всплывающего сообщения
function showToast(title, message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `
        <strong>${title}</strong>
        <p>${message}</p>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3000);
}