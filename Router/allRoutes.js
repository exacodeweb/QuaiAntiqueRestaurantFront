import Route from "./Route.js"; // Ce fichier contient toute les routes et importe la class Route

//Définir ici vos routes
export const allRoutes = [ // Toute les routes sont définie dans ce tableaux
  // Page accueil
  new Route("/", "Accueil", "/pages/home.html", []),//, [] new Route("/adresse du site",*/ //leçons: auth routage []
  // Page Galerie
  new Route("/galerie", "La galerie", "/pages/galerie.html", [], "js/galerie.js"),//, [] " /js/galerie.js"  //leçons: auth routage []
  // Page connexion
  new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),//leçons: dynamiser la parti front:, "/js/auth/signin.js" //  //leçons: auth routage []
  new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),//leçons: champs requis // //leçons: auth routage []
  new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"]), //leçons: auth routage []
  new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]), //leçons: auth routage []
  // Page réservations
  new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]), //leçons: auth routage [] // uniquement accessible au utiltsateur connecter
  new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]), //leçons: auth routage []
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";