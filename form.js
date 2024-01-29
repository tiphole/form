const form = document.querySelector("#registration");
const pass1 = document.querySelector("#email_input");
const pass2 = document.querySelector("#email_verify");
form.addEventListener("submit", handleSubmit);
function handleSubmit() {
event.preventDefault();
  console.log("handleSubmit()", pass1.value, pass2.value);
  if (pass1.value === pass2.value) {
    pass2.style.background = "transparent";
  } else {
    pass2.style.background = "red";
    alert("the email is not the same")
  }
}
  
 
/* 
let email1 = document.querySelector('#email_input');
let email2 = document.getElementById('email_verify');
const symbolError = document.getElementsByClassName('.fa-circle-exclamation');
const symbolMail = document.getElementsByClassName('.fa-envelope');
const errorMessage = document.getElementsByClassName('.error');
console.log()
const emailValue = email1.value;
const emailValue2 = email2.value;

form.addEventListener("submit", checkInputs);
function checkInputs(){
  event.preventDefault();
  if (emailValue === emailValue2) {
    emailValue.style.background ='green';
    emailValue2.style.background ='green';
  } else {
    email2.style.background = "red";
    email2.style.background = "red";
    symbolMail.style.display ="none";
    symbolError.style.display ="block";
    errorMessage.style.display ="block";
  }
}   */