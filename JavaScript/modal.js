function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.getElementsByClassName('close');
const form = document.getElementsByName('reserve');

// launch modal event
modalFormLaunch();
function modalFormLaunch() {
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalCloseBtn[0].addEventListener('click', closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display="none";
}



