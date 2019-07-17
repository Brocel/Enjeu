//Local Storage
//connexion joueur (lien ac tableJ)
//Constantes
const affDiv = document.querySelector('.aff');
const f = document.querySelector('.nomJ');
const inputNomJ = document.querySelector('#nomJ');
var valInput = inputNomJ.value;
document.addEventListener('keyup', function(){
  localStorage.setItem('nomJ', );
  const nomJ = localStorage.getItem('nomJ');
  console.log(nomJ);
});
