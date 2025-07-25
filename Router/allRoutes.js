import Route from "./Route.js"; // Ce fichier contient toute les routes et importe la class Route

//Définir ici vos routes
export const allRoutes = [ // Toute les routes sont définie dans ce tableaux
    new Route("/", "Accueil", "/pages/home.html", []),/*new Route("/adresse du site",*/
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    /*new Route("/Galerie", "Galerie", "/pages/Galerie.html", "/js/galerie.js"),*/ //ligne pour ajouter une nouvelle page
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    /*new Route("/signup", "Inscription", "/pages/auth/signup.html"),*/
    //new Route("/signup", "Inscription", "/pages/auth/signup.html"),//, "/js/auth/signup.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["diconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "asmin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
  ];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";