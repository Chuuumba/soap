const form = document.getElementById('authForm');
const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const submitButton = document.getElementById('submitButton');

const firstNameError = document.getElementById('firstNameError');
const surnameError = document.getElementById('surnameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Validation functions
function validateName(field, errorField) {
  const nameRegex = /^[А-ЯA-Z][а-яa-zА-ЯA-Z]+$/;
  if (!field.value.trim()) {
    errorField.textContent = 'This field is required.';
    return false;
  } else if (!nameRegex.test(field.value)) {
    errorField.textContent = 'Must start with a capital letter and contain only letters.';
    return false;
  } else {
    errorField.textContent = '';
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    emailError.textContent = 'This field is required.';
    return false;
  } else if (!emailRegex.test(email.value)) {
    emailError.textContent = 'Invalid email format.';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function validatePassword() {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.value.trim()) {
    passwordError.textContent = 'This field is required.';
    return false;
  } else if (!passwordRegex.test(password.value)) {
    passwordError.textContent = 'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.';
    return false;
  } else {
    passwordError.textContent = '';
    return true;
  }
}

// Event listeners
firstName.addEventListener('input', () => {
  const valid = validateName(firstName, firstNameError);
  firstName.classList.toggle('valid', valid);
  firstName.classList.toggle('invalid', !valid);
  toggleSubmitButton();
});

surname.addEventListener('input', () => {
  const valid = validateName(surname, surnameError);
  surname.classList.toggle('valid', valid);
  surname.classList.toggle('invalid', !valid);
  toggleSubmitButton();
});

email.addEventListener('input', () => {
  const valid = validateEmail();
  email.classList.toggle('valid', valid);
  email.classList.toggle('invalid', !valid);
  toggleSubmitButton();
});

password.addEventListener('input', () => {
  const valid = validatePassword();
  password.classList.toggle('valid', valid);
  password.classList.toggle('invalid', !valid);
  toggleSubmitButton();
});

togglePassword.addEventListener('change', () => {
  password.type = togglePassword.checked ? 'text' : 'password';
});

// Toggle submit button
function toggleSubmitButton() {
  submitButton.disabled =
    !validateName(firstName, firstNameError) ||
    !validateName(surname, surnameError) ||
    !validateEmail() ||
    !validatePassword();
}

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log({
    firstName: firstName.value,
    surname: surname.value,
    email: email.value,
    password: password.value,
  });
  alert('Form submitted successfully!');
});
