//Validation du nom

var form  = document.getElementsByTagName('form')[0];
var nomJou = document.getElementById('nomJ');
var conseil = document.querySelector('.error');
nomJou.addEventListener('input', function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ nom joueur.
  if (nomJou.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire le conseil
    conseil.innerHTML = ""; // On réinitialise le contenu
    conseil.className = "error"; // On réinitialise l'état visuel du message
    console.log(nomJou.value);
  }
}, false);

form.addEventListener('submit', function (event) {
  var nom = nomJou.value;
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ nomJou est valide.
  if (!nomJou.validity.valid) {
    // S'il est invalide, on affiche un message d'erreur personnalisé
    conseil.innerHTML = "Première lettre en Majuscule, 20 char. max";
    conseil.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  } else {
    var stockage = localStorage.setItem('nomNouvJ',nom);
    testLocalStorage();
  }
}, false);

//Test localstorage
function testLocalStorage() {
  var test = localStorage.getItem('nomNouvJ');
  console.log(test);
  confirm(test);
}
