// Affichage du nom (nouveau joueur)
function affNomJ() {
  var divNomJ = document.getElementById('nomJ');
  var valNomJ = localStorage.getItem('nomNouvJ');
  console.log(localStorage.getItem('nomNouvJ'));
  console.log(valNomJ);
  if (valNomJ!==null) {
    divNomJ.value = valNomJ;
  }
}
