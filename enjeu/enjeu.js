//création d'éléments
function creaElt(nomElt,plateau,classAff) {
  //Variables
  var elt;
  var plat;
  plat = document.getElementById(plateau);
  //Créer l'élément, lui ajouter les attributs en fction de la valeur de para (attention au nommage des fichier html)
  elt = document.createElement('object');
  elt.setAttribute('type', 'text/html');
  elt.setAttribute('id',nomElt);
  elt.setAttribute('class', classAff);
  elt.setAttribute('data', '../elements/'+nomElt+'/'+nomElt+'.html');
  plat.appendChild(elt);
}
//remplacement d'éléments
function remplacElt(oldElt,newElt,plateau,classAff) {
  //Variables
  var ancElt;
  var nouvElt;
  var plat;
  ancElt = document.getElementById(oldElt);
  plat = document.getElementById(plateau);
  nouvElt = document.createElement('object');
  nouvElt.setAttribute('type', 'text/html');
  nouvElt.setAttribute('id',newElt);
  nouvElt.setAttribute('class', classAff);
  nouvElt.setAttribute('data', '../elements/'+newElt+'/'+newElt+'.html');
  plat.replaceChild(nouvElt,ancElt);
}
//manipulation d'éléments
function manipElt(oldElt,newElt,plateau,classAff) {
  var ancElt = document.getElementById(oldElt);
  if (ancElt==null) {
    creaElt(newElt,plateau,classAff);
  }else {
    remplacElt(oldElt,newElt,plateau,classAff);
  }
}
//retirer des éléments
function retirElt(elt,plateau) {
  var eltEff = document.getElementById(elt);
  var plat = document.getElementById(plateau);
  plat.removeChild(eltEff);
}

//test aff newnomJ
function affNomNouvJ (elt1,elt2) {
  var eltEcoute = document.getElementById(elt1);
  var eltAff = document.getElementById(elt2);
  var valNomJ = localStorage.getItem('nomNouvJoueur');
  console.log(valNomJ);

}
