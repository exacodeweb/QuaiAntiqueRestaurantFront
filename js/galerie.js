
const galerieImage = document.getElementById("allImages");

//pour simuler les faille xss
//let monImage = getImage('<img src="../images/chef.jpg"/>', "../images/chef.jpg");
//let monImage = getImage('<img src=x onerror="alert(\'ToTo\')"/>', "../images/chef.jpg");
//let titre = '<img src=x onerror="alert(\'ToTo\')"/>';
let titre = '<img src=x onerror="window.location.replace(\'https://google.com\')" />';

// sans la simulation absence d'attaque XSS
//let titre = "image du chef";

// créer une variable "images du chef"
let imgSource = "../images/chef.jpg";

let monImage = getImage(titre, imgSource);

galerieImage.innerHTML = monImage;

// Notes du professeur:
// pour les faille xss a déplacé dans le fichier script.js ? */
// vérifier le titre à l'enregistrement, et à l'inclusion dans la pages */
// ! les chaines de caractères doivent être au format texte, pas au format HTML */

/*function sanitizeHTML(text){
  /*const tempHTML = document.createElement('div');
  tempHTML.textContent = text;
  return tempHTML.innerHTML;
}*/

function getImage(titre, urlImage) {

  //pour les faille xss
  titre = sanitizeHTML(titre);
  urlImage = sanitizeHTML(urlImage);

  return `
    <div class="col p-3">
      <div class="image-card text-white">
        <img src="${urlImage}" class="rounded w-100" alt="">
        <p class="titre-image">${titre}</p>
        <div class="action-image-buttons" data-show="admin">
          <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}
