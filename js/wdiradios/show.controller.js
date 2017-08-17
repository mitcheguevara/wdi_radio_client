
/* global angular */

angular.module('wdiradio')
.controller('wdiradioshowController', [
  '$stateParams',
  'wdiradio',
  wdiradioshowController
])

function wdiradioshowController($stateParams, wdiradio) {
  this.wdiradio = wdiradio.get({id: $stateParams.id})
}
