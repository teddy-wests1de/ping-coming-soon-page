'use strict'
const btnSubmit = document.querySelector('.subscribe');
const email = document.querySelector('.email');
const errorText = document.querySelector('.error-text');
const inputField = document.querySelector('input-field')

const validEmail = function (inputEmail) {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(inputEmail);
  };
  
  const validate = function (input, message) {
      // console.log(message);
      input.parentNode.classList.add("error"); 
      if (!validEmail(email.value)) {
        email.parentNode.classList.add("error");
        errorText.textContent = `${message}`
      } else {
        success(input);
      }
      
  };
  const success = function (input) {
    input.parentNode.classList.remove("error");
    errorText.textContent = '';
  }
btnSubmit.addEventListener('click', function(e){
    e.preventDefault();
    validate(email, "Please enter a vaild email address...!")
})