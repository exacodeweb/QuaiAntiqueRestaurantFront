// Récupération des champs et du bouton connexion
const mailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSingnin = document.getElementById("btnSignin");
//const signinForm = document.getElementById("signinForm"); //Leçon API connexion voir page signin.html

// Écouteur d'évènement sur le bouton connexion
btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
  //alert("bouton cliqué")
  // Ici il faudra appeler l'API pour vérifier les crédentials en BDD "information factice"

  // ⚠️ Ici il faudra appeler l'API pour vérifier les crédentials en BDD //simulation de connexion
  if(mailInput.value == "test@mail.com" && PasswordInput.value == "123"){
    alert("Vous êtes connecté");

    //Il faudra récupérer le vrai token //simulation de Token
    const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfdsdgf";
    setToken(token);// ! lié au fichier script.js, appelle de la methode
    //Placé ce token en cookie

    //setCookie("role", "admin", 7);// a partir de la leçons afficher/masquer voir la ligne du desous
    setCookie(RoleCookieName, "client", 7);// a partir de la leçons afficher/masquer on peut tester avec "admin" ou "client"
    window.location.replace("/");
  }
  else{
    mailInput.classList.add("is-invalid");
    PasswordInput.classList.add("is-invalid");
  }
}
