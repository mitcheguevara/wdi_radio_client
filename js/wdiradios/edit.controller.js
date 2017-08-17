/* global angular */

angular.module('wdiradio')
.controller('wdiradioEditController', [
  '$state',
  'wdiradio',
  wdiradioEditController
])

function wdiradioEditController ($state, wdiradio) {
  this.wdiradio = wdiradio.get({id: $state.params.id})
  this.update = function () {
    this.wdiradio.$update({id: $state.params.id})
  }
  console.log(this.wdiradio)
}
