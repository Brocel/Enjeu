//Manipulations du DOM
//création de composants
  //plateau : id de la div où placer le composant
  //classe : nom de la classe de la grille associée (pour le placement dans le document)
  //newComp : id du composant à créer/ nom du dossier composant / nom du composant
  //chemin : chemin vers le composant à créer
function creaComp(plateau,classe,newComp) {
  //Variables
  var elt;
  var plat;
  plat = document.getElementById(plateau);
  //Créer l'élément, lui ajouter les attributs en fction de la valeur de para (attention au nommage des fichier html)
  elt = document.createElement('object');
  elt.setAttribute('type', 'text/html');
  elt.setAttribute('id',newComp);
  elt.setAttribute('class', classe);
  elt.setAttribute('data', newComp+'/'+newComp+'.html');
  plat.appendChild (elt);
}
//remplacement de composants
  //oldComp : id composant à retirer
  //newComp : id composant à créer/nom du dossier composant/ nom du composant
function remplaceComp(plateau,classe,oldComp,newComp) {
  //Variables
  var ancComp;
  var nouvComp;
  var plat;
  ancComp = document.getElementById(oldComp);
  plat = document.getElementById(plateau);
  nouvComp = document.createElement('object');
  nouvComp.setAttribute('type', 'text/html');
  nouvComp.setAttribute('id',newComp);
  nouvComp.setAttribute('class', classe);
  nouvComp.setAttribute('data', newComp+'/'+newComp+'.html');
  plat.replaceChild(nouvComp,ancComp);
}
//manipulation d'éléments
function manipComp(plateau,classe,oldComp,newComp) {
  var ancComp = document.getElementById(oldComp);
  if (ancComp==null) {
    creaComp(plateau,classe,newComp);
  }else {
    remplaceComp(plateau,classe,oldComp,newComp);
  }
}
//retirer des éléments
function retirComp(plateau,comp) {
  var compEff = document.getElementById(comp);
  var plat = document.getElementById(plateau);
  if (!compEff) {
    console.log('aucun élément à retirer');
  } else {
    plat.removeChild(compEff);
  }
}

//fonctions du localstorage
function stockageLocal() {
  var compNomJ = document.getElementById('nomNouvJ');
  var form  = compNomJ.querySelector('form');
  var inputNom = compNomJ.querySelector('input');
  var conseil = compNomJ.querySelector('.error');
  form.addEventListener('submit', function (event) {
    // Chaque fois que l'utilisateur tente d'envoyer les données
    // on vérifie que le champ nomJou est valide.
    if (!inputNom.validity.valid) {
      // S'il est invalide, on affiche un message d'erreur personnalisé
      conseil.innerHTML = "Première lettre en Majuscule, 20 char. max";
      conseil.className = "error active";
      // Et on empêche l'envoi des données du formulaire
      event.preventDefault();
    } else {
      var nom = inputNom.value;
      var stockage = localStorage.setItem('nomNouvJ',nom);
      testLocalStorage();
      }
    }, false);
}

//Test localstorage
function testLocalStorage() {
  var test = localStorage.getItem('nomNouvJ');
  console.log(test);
  confirm(test);
}
