// Implementer le js de ma page

//récuperer les champ dans des variables
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnvalidation = document.getElementById("btn-validation-inscription");//récuperer le bouton de validation

// ecouteur d'evenement sur keyup
inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//création de la fonction validateForm 'validé tout le formulaire'
//verification des champs du formulaire: input du Nom et du Prénom
//appel de la methode 'validateForm'
function validateForm(){
  const nomOk = validateRequired(inputNom);//vérification du nom saisi
  const prenomOk = validateRequired(inputPreNom);
  const mailOk = validateMail(inputMail);//vérification du format saisi
  const passwordOk = validatePassword(inputPassword);//vérification du password saisi
  const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword)

  //booleen
  if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk){
    btnvalidation.disabled = false;
  }
  else{
    btnvalidation.disabled = true;
  }
}

//verification de l'input du formulaire: email
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

//verification de l'input du formulaire: password
function validatePassword(input){
  //Définir mon regex mail
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  //récuprération dans la variable mailUser le mail present dans l'input
  const passwordUser = input.value;
  // vérifier si le 'Regex' est présent
  if (passwordUser.match(passwordRegex)) {
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

//vérification de l'input confirmpassword creation de la methode
function validateConfirmationPassword(inputPwd, inputConfirmPwd){
  if(inputPwd.value == inputConfirmPwd.value){
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  }
  else {
    inputConfirmPwd.classList.remove("is-valid");
    inputConfirmPwd.classList.add("is-invalid");
    return false;
  }
}


//création de la fonction validateRequired 'validé un champ requi parametre (input)'
function validateRequired(input) {
//function validateRequired() {
  if (input.value != '') { //vérifier l'input
    //C'est ok
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
