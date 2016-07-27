'use strict';

(function() {

  function ModalService($uibModal) {

    let animationsEnabled = true;

    let modalInstance;

    let Modal = {

      alert(log) {
        modalInstance = $uibModal.open({
          animation: animationsEnabled,
          templateUrl: 'scripts/components/modal/modalAlert.html',
          controller: 'ModalInstanceController',
          controllerAs: 'mod',
          size: 'sm',
          resolve: {
            message: function () {
              return log;
            }
          }
        });
      },

      close() {
        modalInstance.dismiss();
      }
    }

    return Modal;

  }

  angular.module('cursoAngular20162017App.modal')
  .factory('Modal', ModalService);

})();
