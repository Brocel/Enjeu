// //Manipulations du DOM
// //Création de composants
// //principe: utiliser attachShadow y insérer le html de l'objet source
// //divMere: div parente, dans laquelle on insère la div fille
// //newDivFille: div fille à insérer dans le dom
// //classeName: classe CSS de placement dans la grilleEnjeu
// function creaComp(divMere,newDivFille,classeName) {
//   //Variables & constantes
//   var divM = document.getElementById(divMere);//rechercher la div mere
//   const shadow = divM.attachShadow({mode: 'open'});//associer un arbre dom shadow au dom courant (permet de retrouver les éléments à l'intérieur grace aux sélecteurs classiques)
//   var objSrc = document.createElement('object');//créer un objet
//   var newDivF = document.createElement('div');//créer la div fille
//   //Actions & Méthodes
//     //Définir le contenu de l'objet source
//   objSrc.setAttribute('type', 'text/html');
//   objSrc.setAttribute('data', newDivFille+'/'+newDivFille+'.html');
//     //Ajouter du contenu et mettre en forme la div fille
//   newDivF.innerHTML = objSrc.innerHTML;
//   newDivF.setAttribute('id',newDivFille);
//   newDivF.setAttribute('class', classeName);
//     //Ajouter l'élément créé au dom shadow
//   shadow.appendChild (newDivF);
// }
// //retirer des composants
// //classeSelector = .classeName
// function retirComp(divMere,classeSelector) {
//   var oldDivF = document.querySelector(classeSelector);//div à enlever (select par la classe de grilleEnjeu.css)
//   var divM = document.getElementById(divMere);
//   if (!oldDivF) {
//     console.log('Rien à enlever');
//   } else {
//     divM.removeChild(oldDivF);
//   }
// }
// //manipulation de composants
// function manipComp(divMere,classeSelector,newDivFille,classeName) {
//   //Actions & Methodes
//   retirComp(divMere,classeSelector);
//   creaComp(divMere,newDivFille,classeName);
// }
// //Fonction Boutons
// //param idBouton : id du bouton à écouter
// function bouton(idBouton){
//   if (idBouton=='bt1') {
//     manipComp('plateauEnjeu','.ctR','conJ','ctR');
//     manipComp('plateauEnjeu','tableJ','aff');
//     retirComp('plateauEnjeu','.aff2');
//   } else if (idBouton=='bt2') {
//     manipComp('plateauEnjeu','.ctR','nomNouvJ','ctR');
//     manipComp('plateauEnjeu','.aff','affJ','aff',);
//     manipComp('plateauEnjeu','.aff2','creaJ','aff2');
//   }
// }
// //Test localstorage
// function testLocalStorage() {
//   var test = localStorage.getItem('nomNouvJ');
//   console.log(test);
//   confirm(test);
// }






// Manipulations du DOM (probleme d'acces aux éléments internes à l'objet)
// création de composants
//   plateau : id de la div où placer le composant
//   classe : nom de la classe de la grille associée (pour le placement dans le document)
//   newComp : id du composant à créer/ nom du dossier composant / nom du composant
//   chemin : chemin vers le composant à créer
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
    console.log('Rien à enlever');
  } else {
    plat.removeChild(compEff);
  }
}
//Remplir localStorage
function remplirStorage(cle,valeur) {
    localStorage.setItem(cle,valeur);
}
function recupStorage(cle) {
  var localItem = localStorage.getItem(cle);
  console.log(localItem);
  return localItem;
}
//Fonction Boutons
//param idBouton : id du bouton à écouter
function bouton(idBouton){
  if (idBouton=='bt1') {
    manipComp('plateauEnjeu','ctR','nomNouvJ','conJ');
    manipComp('plateauEnjeu','aff','affJ','tableJ');
    retirComp('plateauEnjeu','creaJ');
  } else if (idBouton=='bt2') {
    manipComp('plateauEnjeu','ctR','conJ','nomNouvJ');
    manipComp('plateauEnjeu','aff','tableJ','affJ',);
    manipComp('plateauEnjeu','aff2','oldComp','creaJ');
    retirComp('plateauEnjeu','conJ');
  }
}
//Test localstorage
function testLocalStorage() {
  var test = localStorage.getItem('nomNouvJ');
  console.log(test);
  confirm(test);
}
