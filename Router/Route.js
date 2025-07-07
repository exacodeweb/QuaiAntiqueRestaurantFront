export default class Route { // ce fichier contient toute la logique de routage
  constructor (url, title, pathHtml, pathjs = ""){
  this.url = url; // ici La class Route contient une URL
  this.title = title; // Titre de la page
  this.pathHtml = pathHtml; // Le lien vers le fichier HTML
  this.pathjs = pathjs // Le lien vers le fichier JAVASCRIPT
  }
}