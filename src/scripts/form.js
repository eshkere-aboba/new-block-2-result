const nameInput = document.getElementById('name');
const nameInputErrorField = document.getElementById('name-error');
const phoneInput = document.getElementById('phone');
const phoneInputErrorField = document.getElementById('phone-error');
const emailInput = document.getElementById('email');
const emailInputErrorField = document.getElementById('email-error');
const form = document.getElementById('form');
const button = document.getElementById('form-submit');

const nameRegex = /^[А-Яа-яЁё\s]+$/;
const phoneRegex = /^\d+$/;
const emailRegex = /^[^\s@]+@[\w-]+(\.[\w-]+)+$/;

let formState = {
  name: {
    value: '',
    isValid: true,
  },
  phone: {
    value: '',
    isValid: true,
  },
  email: {
    value: '',
    isValid: true,
  },
};

const highlightInput = (input, isValid) => {
  if (isValid) {
    input.classList.remove('input-field__input--error');
    return;
  }

  input.classList.add('input-field__input--error');
};

const checkNameInputValidity = () => {
  if (!formState.name.value.length) {
    nameInputErrorField.innerText = 'Поле "Имя" обязательно для заполнения';
    formState.name.isValid = false;
    highlightInput(nameInput, false);
    return false;
  }

  if (!formState.name.value.match(nameRegex)) {
    nameInputErrorField.innerText = 'Имя должно содержать только русские буквы и пробелы';
    formState.name.isValid = false;
    highlightInput(nameInput, false);
    return false;
  }

  nameInputErrorField.innerText = '';
  formState.name.isValid = true;
  highlightInput(nameInput, true);
  return true;
};

const checkPhoneInputValidity = () => {
  if (!formState.phone.value.length) {
    phoneInputErrorField.innerText = 'Поле "Телефон" обязательно для заполнения';
    formState.phone.isValid = false;
    highlightInput(phoneInput, false);
    return false;
  }

  if (!formState.phone.value.match(phoneRegex)) {
    phoneInputErrorField.innerText = 'Телефон должен содержать только цифры';
    formState.phone.isValid = false;
    highlightInput(phoneInput, false);
    return false;
  }

  if (formState.phone.value.trim().length !== 11) {
    phoneInputErrorField.innerText = 'Телефон должен содержать 11 цифр';
    formState.phone.isValid = false;
    highlightInput(phoneInput, false);
    return false;
  }

  phoneInputErrorField.innerText = '';
  formState.phone.isValid = true;
  highlightInput(phoneInput, true);
  return true;
};

const checkEmailInputValidity = () => {
  if (!formState.email.value.length) {
    emailInputErrorField.innerText = 'Поле "Email" обязательно для заполнения';
    formState.email.isValid = false;
    highlightInput(emailInput, false);
    return false;
  }

  if (!formState.email.value.match(emailRegex)) {
    emailInputErrorField.innerText = 'Введите корректный email (например, test@mail.ru)';
    formState.email.isValid = false;
    highlightInput(emailInput, false);
    return false;
  }

  emailInputErrorField.innerText = '';
  formState.email.isValid = true;
  highlightInput(emailInput, true);
  return true;
};

nameInput.addEventListener('input', (event) => {
  formState.name.value = event.target.value;
  if (!formState.name.isValid) {
    checkNameInputValidity();
  }
});
phoneInput.addEventListener('input', (event) => {
  formState.phone.value = event.target.value;
  if (!formState.phone.isValid) {
    checkPhoneInputValidity();
  }
});
emailInput.addEventListener('input', (event) => {
  formState.email.value = event.target.value;
  if (!formState.email.isValid) {
    checkEmailInputValidity();
  }
});

const resetForm = () => {
  form.reset();

  formState = {
    name: {
      value: '',
      isValid: true,
    },
    phone: {
      value: '',
      isValid: true,
    },
    email: {
      value: '',
      isValid: true,
    },
  };
};

const validateAllFields = () => {
  checkNameInputValidity();
  checkPhoneInputValidity();
  checkEmailInputValidity();
};

const checkFormValidity = () => {
  validateAllFields();

  return checkNameInputValidity() && checkPhoneInputValidity() && checkEmailInputValidity();
};

button.addEventListener('click', (formSubmitEvent) => {
  formSubmitEvent.preventDefault();

  const isFormValid = checkFormValidity();

  if (!isFormValid) {
    return;
  }

  // eslint-disable-next-line
  console.log({
    name: formState.name.value,
    phone: formState.phone.value,
    email: formState.email.value,
  });
  resetForm();
});
