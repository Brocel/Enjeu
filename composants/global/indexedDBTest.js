//Stockage des données joueurs
const dbName = 'testJoueur';
var request = indexedDB.open(dbName, 2);

request.onerror = function(event) {
  window.alert('Erreur de création/update de la BDD');
};
request.onupgradeneeded = function(event) {
  var db = event.target.result;
  // Créer un objet de stockage qui contient les informations des joueurs.
  // Nous allons utiliser "nomJ" en tant que clé : nom de joueur sera unique.
  var objectStore = db.createObjectStore('joueurs', { keyPath: 'nomJ' });
  // Créer un index pour rechercher les joueurs par leur niveau.
  objectStore.createIndex('nivJ', 'nivJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur titre.
  objectStore.createIndex('titreJ', 'titreJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur caractère.
  objectStore.createIndex('carctJ', 'caractJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur age.
  objectStore.createIndex('ageJ', 'ageJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur taille.
  objectStore.createIndex('tailleJ', 'tailleJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur masse.
  objectStore.createIndex('masseJ', 'masseJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur sexe.
  objectStore.createIndex('sexeJ', 'sexeJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur race.
  objectStore.createIndex('raceJ', 'raceJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur métier.
  objectStore.createIndex('metierJ', 'metierJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur spécialité.
  objectStore.createIndex('speJ', 'speJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur force.
  objectStore.createIndex('forJ', 'forJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur def.
  objectStore.createIndex('defJ', 'defJ', { unique: false });
  // Créer un index pour rechercher les joueurs par leur int.
  objectStore.createIndex('intJ', 'intJ', { unique: false });
  // Utiliser la transaction "oncomplete" pour être sûr que la création de l'objet de stockage
  // est terminée avant d'ajouter des données dedans.
  objectStore.transaction.oncomplete = function(event) {
    // Stocker les valeurs dans le nouvel objet de stockage.
    var joueurObjectStore = db.transaction('joueurs', 'readwrite').objectStore('joueurs');
    for (var i in joueurData) {
      joueurObjectStore.add(joueurData[i]);
    }
  }
};
