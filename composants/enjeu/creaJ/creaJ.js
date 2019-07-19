//Prompt bouton
//param message : message du prompt
//param cle : cle de la valeur enregistrée dans localStorage
//param alerte : message de l'alerte dans la fonction promptBouton
//param regExpr : pattern pour l'entrée
function nomNouvJ(message,alerte,regExpr) {
  var resultatPrompt = prompt(message);
  var regEx = RegExp(regExpr);
  var testResPrompt = regEx.test(resultatPrompt);
  localStorage.clear();
  if (resultatPrompt==null) {
    resultatPrompt = window.location.reload(true);
  } else if (testResPrompt==false) {
    alert(alerte);
    resultatPrompt = document.location.reload(true);
  } else {
    console.log('Prompt réussi');
  }
}
//Remplir localStorage
// function remplirStorage(cle,valeur) {
//     localStorage.setItem(cle,valeur);
// }
//test du localStorage et prompt
// if(!localStorage.getItem('nomNouvJ')) {
//   console.log('PAS de nom (creaJ.js)');
//   var promptNomNouvJ = nomNouvJ('Nouveau joueur (nom)','Entrer un nom de joueur valide (1ère lettre en majuscule, max char. : 20)','[A-Z]{1}[a-zA-ZÀ-ÿ/ ]{1,19}');
//   remplirStorage('nomNouvJ',promptNomNouvJ);
//   document.location.reload(true);
// } else {
//   console.log('ya un nom (creaJ.js) : '+localStorage.getItem('nomNouvJ'));
//   localStorage.clear();
// }

if(!localStorage.getItem('nomNouvJ')) {
  console.log('PAS de nomNouvJ stocké');
  remplirStorage('nomNouvJ');
} else {
  console.log('nomNouvJ stocké : ' + localStorage.getItem('nomNouvJ'));
  localStorage.removeItem('nomNouvJ');
  document.location.reload(true);

}

function remplirStorage(cle) {
  var promptNomNouvJ = nomNouvJ('Nouveau joueur (nom)','Entrer un nom de joueur valide (1ère lettre en majuscule, max char. : 20)','[A-Z]{1}[a-zA-ZÀ-ÿ/ ]{1,19}');
  localStorage.setItem(cle, promptNomNouvJ);
}

function updateAff() {

}
