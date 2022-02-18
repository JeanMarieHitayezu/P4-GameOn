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

// FUNCTIONS
modalFormLaunch();
modalFormClose();
disableSubmitBtn();

function closeBtn() {
  let btn = document.createElement("BUTTON");     
  btn.innerHTML = "Fermer";                   
  document.querySelector('.modal-body').appendChild(btn);
  btn.className = "btn-submit";
  btn.style.marginTop = "50px"
  btn.onclick = function() {
    modalbg.style.display = "none";
  };
}

// DEDICATED FUNCTIONS TO FORM VALIDITY CHECK

/* FIRST NAME CHECK */


/* LAST NAME CHECK */


/* EMAIL ADRESS CHECK */


/* AGE CHECK */


/* TOURNAMENTS COUNT CHECK */


/* TOURNAMENT CITY CHECK */


/* TERMS AND CONDITIONS USE CHECK */


/* FORM VALIDATION TERMINATION */