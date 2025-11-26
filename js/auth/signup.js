// fichier de script de validation // Implementer le js de ma page
// Test: alert("Test-connex-javascript");

// Récupérer le champ du nom
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
// Vérifier que l'élément existe bien avant d'ajouter un écouteur
if (inputNom) {
  // Ajout d'un écouteur d'événement au clavier
  inputNom.addEventListener("keyup", validateForm);
  inputPreNom.addEventListener("keyup", validateForm);
  inputMail.addEventListener("keyup", validateForm);
  inputPassword.addEventListener("keyup", validateForm);
  inputValidationPassword.addEventListener("keyup", validateForm);

  // évenement a écouter 'click' fonction a éxécuter 'InscrireUtilisateur'
  //btnValidation.addEventListener("click", InscrireUtilisateur);// leçon: premier fetch
}

// Fonction qui valide tout le formulaire
function validateForm() {//appel de la methode 'validateForm'
  const nomOk = validateRequired(inputNom); // Vérifie si le champ est rempli
  const prenomOk = validateRequired(inputPreNom);
  const mailOk = validateMail(inputMail);//vérification du format saisi
  const passwordOk = validatePassword(inputPassword);//vérification du password saisi
  const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

  //Bouleen pour activé le bouton inscription
  if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk){// cinq Bouléen
    btnValidation.disabled = false;
  }
  else {
    btnValidation.disabled = true;
  }
}
//Fonction verification de l'input confirmation de password
function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
  if (inputPwd.value === inputConfirmPwd.value && inputPwd.value !== "") {
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  } else {
    inputConfirmPwd.classList.add("is-invalid");
    inputConfirmPwd.classList.remove("is-valid");
    return false;
  }
}
//Fonction verification de l'input password
function validatePassword(input) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Fonction verification de l'input du formulaire: email
function validateMail(input){
  //Définir mon regex mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //récuprération dans la variable mailUser le mail present dans l'input
  const mailUser = input.value;
  // vérifier si le 'Regex' est présent
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  }
  else {
    //C'est pas ok
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

// Fonction pour valider un champ requis
function validateRequired(input) {
  //if (input.value.trim() !== "") {
  if (input.value != '') {
    // Si une valeur est saisie
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    // Si le champ est vide
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}


