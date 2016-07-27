'use strict';

(function() {

  class FormCtrl {

    constructor(Modal) {
      this.listDPreferido = [{value: 'futbol', name: 'Fútbol'}, {value: 'basket', name: 'Baloncesto'}, {value: 'tenis', name: 'Tenis'}];

      this.listJugadoresTop = [{name: 'Federer'}, {name: 'Djokovic'}, {name: 'Nadal'}, {name: 'Murray'}];

      this.Modal = Modal;
    }

    showMessage(message) {
      for(let i in this.form) {
        delete this.form[i];
      }

      this.Modal.alert(message);
    }

  }

  moduleAngular
  .controller('FormCtrl', FormCtrl);

})();
