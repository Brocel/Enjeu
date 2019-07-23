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
//Ouverture d'une fenêtre de dialogue
var WindowObjectReference = null; // variable globale : référence de l'objet window

function ouvrirFenetre(lien,nomFenetre) {
  if (WindowObjectReference == null || WindowObjectReference.closed) {
    /* si le pointeur vers l'objet window n'existe pas, ou s'il existe
       mais que la fenêtre a été fermée */
    var proprietesFen = 'top=75, left=10, width=500, height=200';
    WindowObjectReference = window.open(lien,nomFenetre,proprietesFen);
    /* alors, création du pointeur. La nouvelle fenêtre sera créée par dessus
       toute autre fenêtre existante. */
  }
  else {
    WindowObjectReference.focus();
    /* sinon, la référence à la fenêtre existe et la fenêtre n'a pas été
       fermée: la fenêtre est peut-être minimisée ou derrière la fenêtre
       principale. Par conséquent, on peut l'amener par dessus les autres à
       l'aide de la méthode focus(). Il n'est pas nécessaire de recréer la fenêtre
       ou de recharger la ressource référencée. */
  };
}
//Test localstorage
function testLocalStorage () {
  var dialPage;


  var test = objet.localStorage.getItem('nomNouvJ');
  console.log(test);
  confirm(test);
}
