const form = document.getElementById("form");
const email = document.getElementById("email");
const checkBox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit-button");
const errors = document.querySelectorAll(".error");
const inputBoxes = document.querySelectorAll(".input-box");
const emailError = document.getElementById("email-error");
const generalEnquiry = document.getElementById("general-enquiry");
const queryTypeError = document.getElementById("query-type-error");
const consentError = document.getElementById("consent-error");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const successMessage = document.querySelector(".success-message")
function fieldRequiredError(e, id) {
  this.id = document.getElementById(id);
  e.preventDefault();
  this.id.style.border = "1.25px solid red";
  const errorid = document.getElementById(id + "-error");
  errorid.innerHTML = "This field is required";
}
email.addEventListener("invalid", (e) => {
  e.preventDefault();
  email.style.border = "1.25px solid red";
  if (email.value == "") {
    emailError.innerHTML = "This field is required";
  } else {
    emailError.innerHTML = "Please enter a valid email address";
  }
});
generalEnquiry.addEventListener("invalid", (e) =>{
  e.preventDefault();
  
  queryTypeError.innerHTML="Please select a query type";
})
checkBox.addEventListener("invalid", (e) => {
  e.preventDefault();
  consentError.innerHTML="To submit this form, please consent to being contacted"
});
submitButton.addEventListener("click", (e) => {
    resetErrors();
  if(form.checkValidity()){
    e.preventDefault();
    form.reset();
    button1.style.backgroundColor = "";
    button2.style.backgroundColor = "";
    successMessage.style.display= "block";
  }
  
});
function button1Select(){
  button1.style.backgroundColor=  "hsl(148, 38%, 91%)";
  button1.style.border= "solid 1.25px hsl(169, 82%, 27%)";
  button2.style.backgroundColor = "";
  button2.style.border = ""
}
function button2Select(){
  button2.style.backgroundColor=  "hsl(148, 38%, 91%)";
  button2.style.border= "solid 1.25px hsl(169, 82%, 27%)";
  button1.style.backgroundColor = "";
  button1.style.border = ""
}
function resetErrors() {
    errors.forEach((error) => {
        error.innerHTML="";
      });
    inputBoxes.forEach((inputBox) => {
        inputBox.style.border="";
      }); 
}
