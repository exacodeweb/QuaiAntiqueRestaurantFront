import Route from "./Route.js";
import {allRoutes, websiteName} from "./allRoutes.js";

// Création d'une route pour la page 404 (page introuvable)
const route404 = new Route("404", "Page introuvable", "/pages/404.html", []);//leçons: auth routage []

// Fonction pour récupérer la route correspondant à une URL donnée
const getRouteByUrl = (url) => {let currentRoute = null;
// Parcours de toutes les routes pour trouver la correspondance
allRoutes.forEach((element) => {
if(element.url == url) {
currentRoute = element;
}
});

// Si aucune correspondance n'est trouvée, on retourne la route 404
if(currentRoute != null) {
return currentRoute;
}else{
  return route404;
}
};

// Fonction pour charger le contenu de la page
const LoadContentPage = async() => {
const path = window.location.pathname;
// Récupération de l'URL actuelle
const actualRoute = getRouteByUrl(path);

// vérifier les droits d'access à la page
const allRolesArray = actualRoute.authorize;
// verification uniquement si la taille du tableau est > 0
if (allRolesArray.length > 0){//verification si tableau est > 0
  if (allRolesArray.includes("disconnected")){// verifie si utilisateur disconnected
    if(isConnected()){// si connecter on redirige
      alert("Vous êtes déjà connecté !");//Test
      window.location.replace("/"); // ex: on peut redirigé sur une page de connexion
    }
  }
  else {//si le tableau ne contient pas le role déconnecté
    const roleUser = getRole();//verifier le role de l'utilisateur, on recupere le role de l'utilisateur "client ou admin"
    //const userConnected = isConnected();//correctif bug
    if(!allRolesArray.includes(roleUser)){// verifier si le tableau contien cet élément, si il ne le contient pas alors redirection
    //if (!userConnected || !allRolesArray.includes(roleUser)) { //correctif bug
      alert("Accès refusé. Connectez-vous pour continuer.");//Test
      window.location.replace("/"); //une redirection sur un page pour signalé que l'utilisateur n'a pas les droits d'access par exemple
    }
  }
}

// Récupération du contenu HTML de la route
const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
// Ajout du contenu HTML à l'élément avec l'ID "main-page"
document.getElementById("main-page").innerHTML = html;

// Ajout du contenu JavaScript
if (actualRoute.pathJS != "") {
// Création d'une balise script
var scriptTag = document.createElement("script");
scriptTag.setAttribute("type","text/javascript");
scriptTag.setAttribute("src",actualRoute.pathJS);

// Ajout de la balise script au corps du document
document.querySelector("body").appendChild(scriptTag);
}

// Changement du titre de la page
document.title = actualRoute.title + " - " + websiteName;

//afficher et masquer les éléments en fonction du rôle //leçons afficher/masquer
 showAndHideElementsForRoles();
};

// Fonction pour gérer les événements de routage (clic sur les liens)
const routeEvent = (event) => {
event = event || window.event;
event.preventDefault();
// Mise à jour de l'URL dans l'historique du navigateur
window.history.pushState({}, "", event.target.href);
// Chargement du contenu de la nouvelle page
LoadContentPage();
};

// Gestion de l'événement de retour en arrière dans l'historique du navigateur
window.onpopstate = LoadContentPage;
// Assignation de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent;
// Chargement du contenu de la page au chargement initial
LoadContentPage();
