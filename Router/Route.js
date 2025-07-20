export default class Route { // ce fichier contient toute la logique de routage
  constructor (url, title, pathHtml, authorize, pathjS = ""){ /*pathjs*/
  this.url = url; // ici La class Route contient une URL
  this.title = title; // Titre de la page
  this.pathHtml = pathHtml; // Le lien vers le fichier HTML
  this.pathJS = pathjS // Le lien vers le fichier JAVASCRIPT pathjs
    this.authorize = authorize;
  }
}

/* ajout de tableau
[] Tous le monde peut y acceder
["disconnected"] -> Réserver aux utilisateurs déconnecté
["client"] -> Réserver aux utilisateurs avec le rôle client
["admin"] -> Réserver aux utilisateurs avec le rôle admin
["admin", "client"]Réserver aux utilisateurs avec le rôle admin ou client
*/