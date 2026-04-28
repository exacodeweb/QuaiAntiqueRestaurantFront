// js/script.js
// méthode de gestion de cookie // message de commit: gestion des cookies
//methode de connexion
const tokenCookieName = "accesstoken";
//methode de suppression (leçons afficher/masquer des éléments)
const RoleCookieName = "role";
//methode de deconnexion (leçon deconnexion)
const signoutBtn = document.getElementById("signout-btn");

//const apiUrl = "http://127.0.0.1:8000/api/";//ajouter pour le backend //Leçons: ?

// Écouteur d'évènement sur le bouton deconnexion
signoutBtn.addEventListener("click", signout);
//methode de récupération du role de l'utilisateur //leçon afficher/masquer
function getRole(){
  return getCookie(RoleCookieName);
}
//methode de deconnexion
function signout(){
  eraseCookie(tokenCookieName);
  //eraseCookie("role")// leçon afficher/masquer
  eraseCookie(RoleCookieName);
  window.location.reload();
}

//méthode de connexion
function setToken (token){
  setCookie (tokenCookieName, token, 7);//durée de validité du token
}
//méthode récupération du token
function getToken () {
  return getCookie (tokenCookieName);//récuppéré le cookie en Token
} 
// methode N° 1 placé un cookie
function setCookie(name, value, days) {
    var expires = "";//let
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
// methode N° 2 récupérer un cookie
function getCookie(name) {
    var nameEQ = name + "=";//let
    var ca = document.cookie.split(';');//let
    for(var i=0;i < ca.length;i++) {//let
        var c = ca[i];//let
        while (c.charAt(0)==' ') c = c.substring(1,c.length);//c.startsWith
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);//c.startsWith
    }
    return null;
}
// methode N° 3 suprimé un cookie
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
// fonction vérifier si connecté
function isConnected(){
    //if(getToken() == null || getToken == undefined){
    if (getToken() == null || getToken() == undefined) {
      return false;
    }
    else{
      return true;
    }
  }
//----------------------------------------Test connexion
// affichage de la modale
/*if(isConnected()){
  alert("Je suis connecté");
}
else{
  alert("Je ne suis pas connecté");
}*/
//----------------------------------------

// leçon affiché/maquer des éléments 
/*il y a :
--== 4 Roles pour l'utilisateur ==--
1er Role: Disconnected (les personnes)
2em Role: connected (admin ou client)
3em Role: utilisateur (-admin)
4em Role: utilisateur (-client)
*/

//methode pour afficher masquer les éléments en fonction du Role, leçons afficher/masquer
// 💡 Fonction à insérer ici :
function showAndHideElementsForRoles() {
  const userConnected = isConnected(); // ? l'utilisateur est-il connecter ?
  const role =getRole();//recuperer  le role
 
  let allElementToEdit = document.querySelectorAll('[data-show]');//recuperer les éléments

    allElementToEdit.forEach(Element =>{
      switch(Element.dataset.show){//parcourir tout les éléments pour les 4 Roles
        case 'disconnected':
          if (userConnected){
            Element.classList.add("d-none");
          }
            break;
          case 'connected':
          if (!userConnected){
            Element.classList.add("d-none");
          }
            break;
          case 'admin'://
          if (!userConnected || role != "admin"){
            Element.classList.add("d-none");
          }
            break;
          case 'client'://
          if (!userConnected || role != "client"){
            Element.classList.add("d-none");
          }
            break; 
      }
    });
}

// vérifier le titre à l'enregistrement, et à l'inclusion dans la pages 
// ! les chaines de caractères doivent être au format texte, pas au format HTML

// Protection XSS
function sanitizeHTML(text){
  const tempHTML = document.createElement('div');
  tempHTML.textContent = text;
  return tempHTML.innerHTML;
}