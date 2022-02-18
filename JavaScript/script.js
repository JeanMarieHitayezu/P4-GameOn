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

function disableSubmitBtn () {
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.5';
    submitBtn.style.cursor = 'not-allowed';
  }
  
  function enableSubmitBtn () {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.style.cursor = 'pointer';
  }

  function showError(e) {
    e.setAttribute('data-error-visible', true);
  }
  
  function hideError(e) {
    e.setAttribute('data-error-visible', false)
  }

// DEDICATED FUNCTIONS TO FORM VALIDITY CHECK

/* FIRST NAME CHECK */
function firstNameValidation () {
    let parent = firstName.closest('div');
    showError(parent);
    if (firstName.value.length < 2) {
      return false;
    }
    if (firstName.value.length > 20) {
      return false;
    }  
    if (!/^([^0-9]*)$/.test(firstName.value)) {
      return false;
    }
    hideError(parent);
    return true;
  }

/* LAST NAME CHECK */
function lastNameValidation () {
    let parent = lastName.closest('div');
    showError(parent);
    if (lastName.value.length < 2) {
      return false
    }
    if (!/^([^0-9]*)$/.test(lastName.value)) {
      return false;
    }
    hideError(parent);
    return true;
  }

/* EMAIL ADDRESS CHECK */
function emailValidation () {
    let parent = email.closest('div');
    showError(parent);
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(reserve.email.value)) {
      return false;
    }
    hideError(parent);
    return true;
  }

/* AGE CHECK */
function birthdateValidation () {
    let parent = birthdate.closest('div');
    let selectedDate = new Date(birthdate.value);
    let now = new Date();
    showError(parent);
    if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(reserve.birthdate.value)) {
      return false;
    }
    if (selectedDate > now) {
      return false;
    }
    hideError(parent);
    return true;
  }

/* TOURNAMENTS COUNT CHECK */
function tournamentCountValidation () {
    let parent = tournamentCount.closest('div');
    showError(parent);
    if (tournamentCount.value < '0') {
      return false;
    } 
      hideError(parent);
      return true;
  }

/* TOURNAMENT CITY CHECK */
function locationValidation () {
    let parent = checkbox.closest('div');
    showError(parent);
    for (checkbox of locationCheckboxes) {
      if (checkbox.checked) {
        hideError(parent);
        return true;
      }
    }
  }

/* TERMS AND CONDITIONS USE CHECK */
function conditionsValidation () {
    let parent = conditionsCheckboxes.closest('div');
    showError(parent);
    if (!conditionsCheckboxes.checked) {
      return false;
    } 
      hideError(parent);
      return true;
  }

/* FORM VALIDATION TERMINATION */
function formValidation() {

    if (firstNameValidation ()
        && lastNameValidation ()
        && emailValidation ()
        && birthdateValidation ()
        && tournamentCountValidation ()
        && locationValidation ()
        && conditionsValidation()) 
        {
          enableSubmitBtn();
          return true;
        }
        disableSubmitBtn();
        return false;
  }
  
  function submitForm(e) {
    e.preventDefault();
    document.querySelector('.modal-body').innerHTML = " ";
    modalBody.style.height = "700px";
    modalBody.style.display = "flex";
    modalBody.style.flexDirection = "column";
    modalBody.style.justifyContent = "flex-end";
    thankyouMessage();
    closeBtn();
  }
  
  function thankyouMessage() {
    let thanks = document.createElement("P");
    thanks.innerText = 'Merci ! Votre réservation a été reçue.';              
    document.querySelector('.modal-body').appendChild(thanks);
    thanks.style.marginBottom = "200px";
  }
