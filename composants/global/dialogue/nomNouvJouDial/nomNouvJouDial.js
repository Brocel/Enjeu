//Validation du nom
//Variables
// var input = document.getElementById('nomJ');
// var inputValue = input.value;
// var boutonValider = document.getElementById('valBtn');
// var regExpr = '[A-Z][a-zA-ZÀ-ÿ/ ]{1,19}';
// var regEx = RegExp(regExpr);
// var testRegEx = regEx.test(inputValue);
// boutonValider.addEventListener('click', function() {
//   if (testRegEx==false) {
//     alert('Veuillez entrer un nom correct');
//   } else if (testRegEx==true) {
//     localStorage.setItem('nomNouvJ',inputValue);
//     window.close();
//     console.log('nom stocké : '+ localStorage.getItem('nomNouvJ'));
//   }
// });
// input.addEventListener('keyup', function() {
//   console.log(inputValue);
// });

//Validation
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
  }
}, false);

form.addEventListener('submit', function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ nomJou est valide.
  if (!nomJou.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    conseil.innerHTML = "J'attends un nom de joueur correct, mon cher !";
    conseil.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  } else {
    localStorage.setItem('nomNouvJ',nomJou.value);
    window.close();
  }
}, false);
