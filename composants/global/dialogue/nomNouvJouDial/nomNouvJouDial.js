//Validation du nom
//Variables
var input = document.getElementById('nomJ');
var inputValue = input.value;
var boutonValider = document.getElementById('valBtn');
var regExpr = '[A-Z]{1}[a-zA-ZÀ-ÿ/ ]{1,19}';
var regEx = RegExp(regExpr);
var testRegEx = regEx.test(inputValue);
boutonValider.addEventListener('click', function() {
  if (testRegEx==true) {
    localStorage.setItem('nomNouvJ',inputValue);
    window.close();
    console.log('nom stocké : '+ localStorage.getItem('nomNouvJ'));
  } else {
    alert('Veuillez entrer un nom correct');
  }

});

function promptBouton(message,alerte,regExpr) {
  var resultatPrompt = prompt(message);
  var regEx = RegExp(regExpr);
  var testResPrompt = regEx.test(resultatPrompt);
  localStorage.clear();
  if (resultatPrompt==null) {
    resultatPrompt = document.location.reload(true);
  } else if (testResPrompt==false) {
    alert(alerte);
    resultatPrompt = document.location.reload(true);
  } else {
    return resultatPrompt;
  }
}
