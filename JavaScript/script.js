// DOM ELEMENTS 
const modalBody = document.querySelector(".modal-body");
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentCount = document.querySelector("input[type=number]");
const submitBtn = document.getElementById('btn-submit');
const locationCheckboxes = document.querySelectorAll("input[name='location']");
const conditionsCheckboxes = document.querySelector("input[name='conditions']");

// FORM FIELDS EVENTS
document.querySelector('form').addEventListener('change', formValidation);
document.querySelector('form').addEventListener('submit', submitForm);
firstName.addEventListener('input', firstNameValidation);
lastName.addEventListener('input', lastNameValidation);
email.addEventListener('input', emailValidation); 
birthdate.addEventListener('input', birthdateValidation); 
tournamentCount.addEventListener('input', tournamentCountValidation);
for (checkbox of locationCheckboxes) {
  checkbox.addEventListener('change', locationValidation);
}
conditionsCheckboxes.addEventListener('change', conditionsValidation);
