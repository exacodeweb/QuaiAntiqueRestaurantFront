// js/auth/signin-test.js

// Récupération des champs
const mailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");

// Écouteur du bouton connexion
btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(event) {

  event.preventDefault();

  // Création du FormData AU CLIC
  let dataForm = new FormData(signinForm);

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    username: dataForm.get("email"),
    password: dataForm.get("mdp")
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(apiUrl + "login", requestOptions)

    .then(response => {

      if (!response.ok) {

        mailInput.classList.add("is-invalid");
        PasswordInput.classList.add("is-invalid");

        throw new Error("Email ou mot de passe incorrect");
      }

      return response.json();
    })

    .then(result => {

      const token = result.apiToken;

      setToken(token);

      setCookie(RoleCookieName, result.roles[0], 7);

      window.location.replace("/");
    })

    .catch(error => console.error("error", error));
}



// js/auth/signin.js
// Récupération des champs et du bouton connexion
/*const mailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

const signinForm = document.getElementById("signinForm"); //Leçon API connexion voir page signin.html

// Écouteur d'évènement sur le bouton connexion
btnSignin.addEventListener("click", checkCredentials);

let dataForm = new FormData(signinForm); // cet element ne dois pas fonctionné car on utilise input.value ?

function checkCredentials() {

  /*--=== version ===--*/
  // methode fetch
  /*-------->function InscrireUtilisateur(event) {

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
    fetch(apiUrl + "login", requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          mailInput.classList.add("is-invalid");
          PasswordInput.classList.add("is-invalid");
        }
      })

      .then(result => {
        const token = result.apiToken;
        setToken(token);//Placé ce token en cookie // ! lié au fichier script.js, appelle de la methode

        setCookie(RoleCookieName, result.roles[0], 7);
        window.location.replace("/");
      })

      .catch(error => console.error("error", error));
  }
  /*--=== Fin version ===--*/

  /*--=== version Formateur ===--*/
  /*---------->let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    username: dataForm.get("email"),
    password: dataForm.get("mdp")
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(apiUrl+"login", requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        mailInput.classList.add("is-invalid");
        PasswordInput.classList.add("is-invalid");
      }
    })

    .then(result => {
      const token = result.apiToken;
      setToken(token);//Placé ce token en cookie // ! lié au fichier script.js, appelle de la methode

      setCookie(RoleCookieName, result.roles[0], 7);
      window.location.replace("/");
    })

    .catch(error => console.error("error", error));
  /*--=== Fin version formateur ===--*/
  /*----------->}
  */

  // ⚠️ Ici il faudra appeler l'API pour vérifier les crédentials en BDD //simulation de connexion
  /*if (mailInput.value == "test@mail.com" && PasswordInput.value == "123") {
    alert("Vous êtes connecté");

    //Il faudra récupérer le vrai token //simulation de Token
    /*const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfdsdgf";
    setToken(token);// ! lié au fichier script.js, appelle de la methode
    //Placé ce token en cookie

    //setCookie("role", "admin", 7);// a partir de la leçons afficher/masquer voir la ligne du desous
    setCookie(RoleCookieName, "client", 7);// a partir de la leçons afficher/masquer on peut tester avec "admin" ou "client"
    window.location.replace("/");*/ /*
} */
  /*else{
    mailInput.classList.add("is-invalid");
    PasswordInput.classList.add("is-invalid");
  }
}*/



// js/auth/signin.js
// Récupération des champs et du bouton connexion
/*
/*const mailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSingnin = document.getElementById("btnSignin");
//const signinForm = document.getElementById("signinForm"); //Leçon API connexion voir page signin.html

// Écouteur d'évènement sur le bouton connexion
btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
  //alert("bouton cliqué")
  // Ici il faudra appeler l'API pour vérifier les crédentials en BDD "information factice"

  // ⚠️ Ici il faudra appeler l'API pour vérifier les crédentials en BDD //simulation de connexion
  if (mailInput.value == "test@mail.com" && PasswordInput.value == "123") {
    alert("Vous êtes connecté");

    //Il faudra récupérer le vrai token //simulation de Token
    const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfdsdgf";
    setToken(token);// ! lié au fichier script.js, appelle de la methode
    //Placé ce token en cookie

    //setCookie("role", "admin", 7);// a partir de la leçons afficher/masquer voir la ligne du desous
    setCookie(RoleCookieName, "client", 7);// a partir de la leçons afficher/masquer on peut tester avec "admin" ou "client"
    window.location.replace("/");
  }
  else {
    mailInput.classList.add("is-invalid");
    PasswordInput.classList.add("is-invalid");
  }
}
*/



// pour collé a ce qu'a montre le formateur

/*
/*let myHeaders = new Headers();
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
*/
