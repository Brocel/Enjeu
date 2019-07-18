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
  plat.removeChild(compEff);
}
//Prompt bouton
//param message : message du prompt
//param cle : cle de la valeur enregistrée dans localStorage
//param alerte : message de l'alerte dans la fonction promptBouton
function promptBouton(message,cle,alerte) {
  var resultatPrompt = prompt(message);
  if (resultatPrompt==null) {
    resultatPrompt = document.location.reload(true);
  } else if (resultatPrompt!==/[A-Z]{1}[a-zA-ZÀ-ÿ/ ]{1,19}/) {
    alert(alerte);
    resultatPrompt = document.location.reload(true);
  } else {
    console.log(resultatPrompt);
    localStorage.setItem(cle,resultatPrompt);
  }
}
//Fonction Boutons
//param idBouton : id du bouton à écouter
function bouton(idBouton){
  if (idBouton=='bt1') {
    manipComp('plateauEnjeu','ctR','oldComp','conJ');
    manipComp('plateauEnjeu','aff','affJ','tableJ');
    retirComp('plateauEnjeu','creaJ');
  } else if (idBouton=='bt2') {
    promptBouton('Nouveau joueur (nom)','nomNouvJ','Entrer un nom de joueur valide (1ère lettre en majuscule, max char. : 20)');
    manipComp('plateauEnjeu','aff','tableJ','affJ',);
    manipComp('plateauEnjeu','aff2','oldComp','creaJ');
    retirComp('plateauEnjeu','conJ');
  }
}
