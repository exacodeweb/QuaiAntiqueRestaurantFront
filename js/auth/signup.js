// Implementer le js de ma page

//récuperer les champ dans des variables
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");

// ecouteur d'evenement sur keyup
inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//création de la fonction validateForm 'validé tout le formulaire'
//verification des champs du formulaire: input du Nom et du Prénom
function validateForm(){
 validateRequired (inputNom);
 validateRequired (inputPreNom);
}

//création de la fonction validateRequired 'validé un champ requi parametre (input)'
function validateRequired(input){
 if(input.value != ''){ //vérifier l'input
  //C'est ok
  input.classList.add("is-valid");
  input.classList.remove("is-invalid");
  }
  else{
  //C'est pas ok
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
 }
}
