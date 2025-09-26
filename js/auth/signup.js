// Implementer le js de ma page

//récuperer les champ dans des variables
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");//récuperer le bouton de validation
const formInscription = document.getElementById("formulaireInscription");


// ecouteur d'evenement sur keyup
inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);
// évenement a écouter 'click' fonction a éxécuter 'InscrireUtilisateur'
btnValidation.addEventListener("click", InscrireUtilisateur);




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
    btnValidation.disabled = false;
  }
  else{
    btnValidation.disabled = true;
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
  //const dataForm = new FormData(formInscription);//récupérer les données du formulaire

  //const name = dataForm.get("name");

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

  // ajout évenement eventListener sur le boutton inscription 'generer par postman'
function InscrireUtilisateur (){
  const dataForm = new FormData(formInscription);//récupérer les données du formulaire

  //const name = dataForm.get("name");

  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "firstName": dataForm.get ("nom"),
  "lastName": dataForm.get ("prenom"),
  "email": dataForm.get ("email"),
  "password": dataForm.get ("mdp")
});

/*const raw = JSON.stringify({
  "firstName": "Test fetch",
  "lastName": "test test fetch",
  "email": "test1depuisQuaiAntique@mail.com",
  "password": "Azerty25"
});*/

/*const raw = JSON.stringify({
  "firstName": "Test fetch",
  "lastName": "Test",
  "email": null,  // <- volontairement incorrect
  "password": "Azerty25"
});*/


const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

//fetch("http://127.0.0.1:8000/api/registration", requestOptions)
fetch(apiUrl+"registration", requestOptions)
  .then(response => {
    if (response.ok){
      return response.json();
    }
    else{
      alert ("Erreur lors de l'inscription");
    }
  })
  //.then((response) => response.json())
  .then((result) => {
    alert("Bravo "+dataForm.get("prenom")+", vous êtes maintenant inscrit, vous pouvez vous connecter.");
    //alert("Bravo vous êtes maintenant inscrit, vous pouvez vous connecter.");
    document.location.href="/signin"
    //console.log(result)
  })
  .catch((error) => console.error(error));
}

/*
fetch("http://127.0.0.1:8000/api/registration", requestOptions)
  .then(response => {
    if (response.ok){
      return response.json();
    }
    else{
      alert ("Erreur lors de l'inscription");
    }
  })
  //.then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}*/

/*
fetch("http://127.0.0.1:8000/api/registration", requestOptions)
  .then(response => {
    debugger;
    return response.json();
  })
  //.then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}*/

/*fetch("http://127.0.0.1:8000/api/registration", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}*/

