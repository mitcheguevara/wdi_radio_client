
/* global angular */

angular.module('wdiradio')
.controller('wdiradioNewController', [
  '$state',
  'wdiradio',
  wdiradioNewController
])

function wdiradioNewController ($state, wdiradio) {
  this.wdiradio = new wdiradio()
  this.create = function () {
    this.wdiradio.$save(() => {
      $state.go('wdiradioIndex')
    })
  }
}
