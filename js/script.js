// méthode de gestion de cookie // message de commit: gestion des cookies

//methode de connexion
const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");

// écouteur bouton déconnexion
signoutBtn.addEventListener("click", signout);

//méthod récuoéré le cookie "role"
function getRole(){
  return getCookie(RoleCookieName);
}

// methode pour stopé le cookie de connexion
function signout(){
  eraseCookie(tokenCookieName);//
  eraseCookie(RoleCookieName);//
  window.location.reload();
}

//méthode de connexion
function setToken(token){
  setCookie(tokenCookieName, token, 7);//durée de validité du token 
}

//méthode récupération du token
function getToken(){
  return getCookie(tokenCookieName);
}

// mthode N° 1 placé un cookie
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
// mthode N° 2 récupérer un cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// mthode N° 3 suprimé un cookie
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// fonction vérifier si connecté
function isConnected(){
  if(getToken() == null || getToken == undefined){
    return false;
  }
  else{
    return true;
  }
  }

//affichage de la modale
//if(isConnected()){
  //alert("Je suis connecté");
//}
//else{
  //alert("Je ne suis pas connecté");
//}


/*
Disconnected
connected (admin ou client)
    -admin
    -client
*/

//affiché masqué les éléments
function showAndHideElementsForRoles(){
   const userConnected = isConnected();
   const role = getRole();

   let allElementToEdit = document.querySelectorAll('[data-show]');

   allElementToEdit.forEach(element =>{
    switch(element.dataset.show){
      case 'disconnected':
        if(userConnected){
          element.classList.add("d-none");
        }
        break;
      case 'connected':
        if(!userConnected){
          element.classList.add("d-none");
        }
        break;
      case 'admin':
        if(!userConnected || role != "admin"){
          element.classList.add("d-none");
        }
        break;
      case 'client':
        if(!userConnected || role != "client"){
          element.classList.add("d-none");
        }
        break;
    }
   })
}
