'use strict';

(function() {

  class FormCtrl {

    constructor($http, $location) {
      this.listDPreferido = [{value: 'futbol', name: 'Fútbol'}, {value: 'basket', name: 'Baloncesto'}, {value: 'tenis', name: 'Tenis'}];

      this.listJugadoresTop = [{name: 'Federer'}, {name: 'Djokovic'}, {name: 'Nadal'}, {name: 'Murray'}];
    }

  }

  moduleAngular
  .controller('FormCtrl', ['$http','$location', FormCtrl]);

})();
