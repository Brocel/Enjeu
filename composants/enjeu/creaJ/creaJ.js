//Clean du storage
if(!localStorage.getItem('nomNouvJ')) {
  console.log('PAS de nomNouvJ stocké creaJ.js');
  confirmerNom();
} else {
  console.log('nomNouvJ est stocké');
  localStorage.removeItem('nomNouvJ');
  console.log('nomNouvJ stocké effacé ');
}
//Prompt CréaJ
//param message : message du prompt
//param cle : cle de la valeur enregistrée dans localStorage
//param alerte : message de l'alerte dans la fonction promptBouton
//param regExpr : pattern pour l'entrée
function nomNouvJ(message) {
  var resultatPrompt = prompt(message);
  console.log('resultatPrompt de nomNouvJ() : '+resultatPrompt);
}

function validerPrompt (alerte,regExpr) {
  var nomNewJ = nomNouvJ('Quel est le nom du nouveau personnage ?')
  var regEx = RegExp(regExpr);
  var testResPrompt = regEx.test(nomNewJ);
  if (nomNewJ==null) {
    console.log('Prompt annulé (validerPrompt())');
  } else if (testResPrompt==false) {
    alert(alerte);
    console.log('Nom invalide (validerPrompt)');
    return false;
  } else {
    console.log('Nom correct');
    return nomNewJ;
  }
}

function confirmerNom() {
  var valPrompt = validerPrompt('Entrer un nom de joueur valide, exemple : Noob (20 char. max)','[A-Z]{1}[a-zA-ZÀ-ÿ/ ]{1,19}');
  console.log('valPrompt : '+valPrompt);
  if (valPrompt==false) {
    console.log('Nom invalide (confirmerNom())');
  } else {
    confirm('Vous allez créer un nouveau personnage');
    console.log('nom confirmé');
    var nomNouveauJoueur = localStorage.setItem('nomNouvJ',valPrompt);
    console.log(nomNouveauJoueur);
  }
}
