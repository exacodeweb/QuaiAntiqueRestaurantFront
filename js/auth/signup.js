// js/auth/signup-test.js

// Récupération des champs du formulaire
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");

const btnValidation = document.getElementById("btn-validation-inscription");

const formInscription = document.getElementById("formulaireInscription");

// Vérifier que les éléments existent avant d'ajouter les événements
if (inputNom) {

  inputNom.addEventListener("keyup", validateForm);
  inputPreNom.addEventListener("keyup", validateForm);
  inputMail.addEventListener("keyup", validateForm);
  inputPassword.addEventListener("keyup", validateForm);
  inputValidationPassword.addEventListener("keyup", validateForm);

  btnValidation.addEventListener("click", InscrireUtilisateur);
}

// Validation complète du formulaire
function validateForm() {

  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPreNom);
  const mailOk = validateMail(inputMail);
  const passwordOk = validatePassword(inputPassword);

  const passwordConfirmOk = validateConfirmationPassword(
    inputPassword,
    inputValidationPassword
  );

  // Activation / désactivation du bouton
  btnValidation.disabled = !(
    nomOk &&
    prenomOk &&
    mailOk &&
    passwordOk &&
    passwordConfirmOk
  );
}

// Vérification confirmation mot de passe
function validateConfirmationPassword(inputPwd, inputConfirmPwd) {

  if (
    inputPwd.value === inputConfirmPwd.value &&
    inputPwd.value !== ""
  ) {

    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");

    return true;
  }

  inputConfirmPwd.classList.add("is-invalid");
  inputConfirmPwd.classList.remove("is-valid");

  return false;
}

// Vérification robustesse mot de passe
function validatePassword(input) {

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const passwordUser = input.value;

  if (passwordRegex.test(passwordUser)) {

    input.classList.add("is-valid");
    input.classList.remove("is-invalid");

    return true;
  }

  input.classList.remove("is-valid");
  input.classList.add("is-invalid");

  return false;
}

// Vérification email
function validateMail(input) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const mailUser = input.value;

  if (emailRegex.test(mailUser)) {

    input.classList.add("is-valid");
    input.classList.remove("is-invalid");

    return true;
  }

  input.classList.remove("is-valid");
  input.classList.add("is-invalid");

  return false;
}

// Vérification champ requis
function validateRequired(input) {

  if (input.value.trim() !== "") {

    input.classList.add("is-valid");
    input.classList.remove("is-invalid");

    return true;
  }

  input.classList.remove("is-valid");
  input.classList.add("is-invalid");

  return false;
}

// Fonction inscription utilisateur
function InscrireUtilisateur(event) {

  event.preventDefault();

  // Réinitialisation des erreurs visuelles
  inputMail.classList.remove("is-invalid");

  // Données envoyées à l'API
  const raw = JSON.stringify({

    firstName: inputNom.value,
    lastName: inputPreNom.value,
    email: inputMail.value,
    password: inputPassword.value
  });

  // Headers
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Configuration requête
  const requestOptions = {

    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  // Requête API inscription
  fetch(apiUrl + "registration", requestOptions)

    .then(response => {

      if (!response.ok) {

        inputMail.classList.add("is-invalid");

        throw new Error("Erreur lors de l'inscription");
      }

      return response.json();
    })

    .then(result => {

      alert(
        "Bravo " +
        inputPreNom.value +
        ", vous êtes maintenant inscrit."
      );

      // Redirection connexion
      document.location.href = "/signin";
    })

    .catch(error => {

      //console.error("error", error);*/
      console.error(error);
      alert(error.message);
    });
}




























// js/auth/signup-test.js // apres requête et maintenant connexion
// fichier de script de validation // Implementer le js de ma page
// Test: alert("Test-connex-javascript");

// Récupérer le champ du nom
/*
/*const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
// envoyer des données
const formInscription = document.getElementById("formInscription");

// Vérifier que l'élément existe bien avant d'ajouter un écouteur
if (inputNom) {
  // Ajout d'un écouteur d'événement au clavier
  inputNom.addEventListener("keyup", validateForm);
  inputPreNom.addEventListener("keyup", validateForm);
  inputMail.addEventListener("keyup", validateForm);
  inputPassword.addEventListener("keyup", validateForm);
  inputValidationPassword.addEventListener("keyup", validateForm);

  // premier fetch: évenement a écouter 'click' fonction a éxécuter 'InscrireUtilisateur'
  btnValidation.addEventListener("click", InscrireUtilisateur);// leçon: premier fetch
}

// Fonction qui valide tout le formulaire
function validateForm() {//appel de la methode 'validateForm'
  const nomOk = validateRequired(inputNom); // Vérifie si le champ est rempli
  const prenomOk = validateRequired(inputPreNom);
  const mailOk = validateMail(inputMail);//vérification du format saisi
  const passwordOk = validatePassword(inputPassword);//vérification du password saisi
  const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

  //Bouleen pour activé le bouton inscription
  if (nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {// cinq Bouléen
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
function validateMail(input) {
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

function InscrireUtilisateur(event) {

  event.preventDefault();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  //Données envoyées
  const raw = JSON.stringify({
    username: inputMail.value,
    password: inputPassword.value
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  // Connexion
  fetch(apiUrl + "registration", requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        alert("Erreur lors de l'inscription");
      }
    })
    .then(result => {
      alert("Bravo " + inputPreNom.value + ", vous êtes maintenant inscrit.");
      document.location.href = "/signin";
    })
    .catch(error => console.error("error", error));
}
*/



















// js/auth/signup.js
// fichier de script de validation // Implementer le js de ma page
// Test: alert("Test-connex-javascript");

// Récupérer le champ du nom
/*const inputNom = document.getElementById("NomInput");
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
  if (nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {// cinq Bouléen
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
function validateMail(input) {
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
*/

































// code du cours fonctionnelle avec leçon: après requêtes
// js/auth/signup.js
// fichier de script de validation // Implementer le js de ma page
// Test: alert("Test-connex-javascript");

// Récupérer le champ du nom
/*const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
// envoyer des données
const formInscription = document.getElementById("formInscription");

// Vérifier que l'élément existe bien avant d'ajouter un écouteur
if (inputNom) {
  // Ajout d'un écouteur d'événement au clavier
  inputNom.addEventListener("keyup", validateForm);
  inputPreNom.addEventListener("keyup", validateForm);
  inputMail.addEventListener("keyup", validateForm);
  inputPassword.addEventListener("keyup", validateForm);
  inputValidationPassword.addEventListener("keyup", validateForm);

  // premier fetch: évenement a écouter 'click' fonction a éxécuter 'InscrireUtilisateur'
  btnValidation.addEventListener("click", InscrireUtilisateur);// leçon: premier fetch
}

// Fonction qui valide tout le formulaire
function validateForm() {//appel de la methode 'validateForm'
  const nomOk = validateRequired(inputNom); // Vérifie si le champ est rempli
  const prenomOk = validateRequired(inputPreNom);
  const mailOk = validateMail(inputMail);//vérification du format saisi
  const passwordOk = validatePassword(inputPassword);//vérification du password saisi
  const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

  //Bouleen pour activé le bouton inscription
  if (nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {// cinq Bouléen
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
function validateMail(input) {
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

// code du cours fonctionnelle avec leçon: apres requêtes
function InscrireUtilisateur() {

  const dataForm = new FormData(formInscription);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    firstName: dataForm.get("nom"),
    lastName: dataForm.get("prenom"),
    email: dataForm.get("email"),
    password: dataForm.get("mdp")
  });

  fetch("http://127.0.0.1:8000/api/registration", {
    method: "POST",
    headers: myHeaders,
    body: raw
  })

    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur inscription");
      }
      return response.json();
    })

    .then(result => {
      alert("Bravo " + dataForm.get("prenom") + ", vous êtes inscrit");
      document.location.href = "/signin";
    })

    .catch(error => {
      console.error(error);
    });
}*/


/*======================================================================================*/

/*
/*function InscrireUtilisateur() {

  let dataForm = new FormData(formInscription);

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    firstName: dataForm.get("nom"),
    lastName: dataForm.get("prenom"),
    email: dataForm.get("email"),
    password: dataForm.get("mdp")
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://127.0.0.1:8000/api/registration", requestOptions)

    .then(response => {

      if (response.ok) {
        return response.json();
      }
      else {
        alert("Erreur lors de l'inscription");
      }
    })

    .then(result => {

      alert("Bravo " + dataForm.get("prenom") + ", vous êtes maintenant inscrit.");

      document.location.href = "/signin";
    })

    .catch(error => console.error("error", error));
}*/