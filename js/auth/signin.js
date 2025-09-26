//récupération du mail et du password et boutton connexion
const mailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSingnin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");//recuperation du formulaire

//écouteur d'évenement sur le boutton connexion
btnSingnin.addEventListener("click", checkCredentials);

function checkCredentials(){
  const dataForm = new FormData(signinForm);

//------------------------------------ method fetch
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  //"firstName": dataForm.get ("nom"),
  //"lastName": dataForm.get ("prenom"),
  "username": dataForm.get ("email"),
  //"email": dataForm.get ("email"),
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

//fetch("http://127.0.0.1:8000/api/login", requestOptions)
fetch(apiUrl+"login", requestOptions)
//fetch("http://127.0.0.1:8000/api/registration", requestOptions)
  .then(response => {
    if (response.ok){
      return response.json();
    }
    else{
      //--alert ("Erreur lors de l'inscription");
      mailInput.classList.add("is-invalid");
      PasswordInput.classList.add("is-invalid");
    }
  })
  //.then((response) => response.json())
  .then((result) => {
    //--alert("Bravo "+dataForm.get("prenom")+", vous êtes maintenant inscrit, vous pouvez vous connecter.");
    //alert("Bravo vous êtes maintenant inscrit, vous pouvez vous connecter.");
    //--document.location.href="/signin"
    //console.log(result)

    //-------------------------
    //Il faudra récupérer le vrai token
    //----const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfdsdgf";
    const token = result.apiToken; 
      setToken(token);
    //Placé ce token en cookie


    //setCookie(RoleCookieName, "client", 7);//pour la connexion admin ou client
    //--setCookie(RoleCookieName, "admin", 7);//pour la connexion admin ou client
    setCookie(RoleCookieName, result.roles[0], 7);//pour la connexion admin ou client

    window.location.replace("/");
    //-------------------------

  })
  .catch((error) => console.error(error));
}

//------------------------------------

  //alert("bouton cliqué"); Test
  // Ici il faudra appeler l'API pour vérifier les crédentials en BDD

  //vérification des éléments du formulaire
  //--if(mailInput.value == "test@mail.com" && PasswordInput.value == "123"){
    //alert("Vous êtes connecté"); 

    //Il faudra récupérer le vrai token
    //--const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfdsdgf";
      //--setToken(token);
    //Placé ce token en cookie

    //--setCookie(RoleCookieName, "client", 7);//pour la connexion admin ou client

    //--window.location.replace("/");
  //--}
  //--else{
    //--mailInput.classList.add("is-invalid");
    //--PasswordInput.classList.add("is-invalid");
  //--}
//--}

