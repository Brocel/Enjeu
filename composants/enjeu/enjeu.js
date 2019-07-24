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
