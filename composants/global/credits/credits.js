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
  elt.setAttribute('data', nomElt+'/'+nomElt+'.html');
  plat.appendChild (elt);
}
