//récupération du mail et du password et boutton connexion
const mailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSingnin = document.getElementById("btnSignin");
//écouteur d'évenement sur le boutton connexion
btnSingnin.addEventListener("click", checkCredentials);
function checkCredentials(){
  //alert("bouton cliqué"); Test
  // Ici il faudra appeler l'API pour vérifier les crédentials en BDD

  //vérification des éléments du formulaire
  if(mailInput.value == "test@mail.com" && PasswordInput.value == "123"){
    //alert("Vous êtes connecté"); 

    //Il faudra récupérer le vrai token
    const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfdsdgf";
      setToken(token);
    //Placé ce token en cookie

    setCookie(RoleCookieName, "client", 7);//pour la connexion

    window.location.replace("/");
  }
  else{
    mailInput.classList.add("is-invalid");
    PasswordInput.classList.add("is-invalid");
  }
}

