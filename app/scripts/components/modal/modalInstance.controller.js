'use strict';

class ModalInstanceController {

  constructor($uibModalInstance, message) {
    this.$uibModalInstance = $uibModalInstance;
    this.message = message;
  }

  ok() {
    this.$uibModalInstance.close();
  }
}

angular.module('cursoAngular20162017App')
.controller('ModalInstanceController', ModalInstanceController);
