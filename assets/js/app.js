const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const verificationName = document.querySelector(".verificationName");
const verificationEmail = document.querySelector(".verificationEmail");
const verificationPassword = document.querySelector(".verificationPassword");

let lenom = "";
let motdepasse = "";
let email = "";
let regexNom = /^([a-zA-Z_@0-9]){6,8}$/;
let regexEmail = /^([a-zA-Z0-9]){1,}@([a-z])+\.([a-z]){2,3}$/;


inputName.addEventListener("input", (e) => {
  lenom = e.target.value;
  // let taille = valeur.length;
  if (lenom.match(regexNom)) {
    verificationName.style.visibility = "visible";
    verificationName.style.backgroundColor = "green";
    verificationName.style.transition = "1s";
    verificationName.style.width = "100%";
  }
  else {
    // verificationName.style.backgroundColor = "green";
    verificationName.style.transition = "1s";
    verificationName.style.width = "0%";
    
  }



});

inputEmail.addEventListener("input", (e) => {
  email = e.target.value;
  if (email.match(regexEmail)) {
    verificationEmail.style.visibility = "visible";
    verificationEmail.style.backgroundColor = "green";
    verificationEmail.style.transition = "1s";
    verificationEmail.style.width = "100%";
  }
  else {
    // verificationName.style.backgroundColor = "green";
    verificationEmail.style.transition = "1s";
    verificationEmail.style.width = "0%";
  }
    
});

inputPassword.addEventListener("input", (e) => {
  // Partie regex
});
