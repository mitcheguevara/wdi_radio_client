/* global angular */

(function () {
  angular.module('wdiradio')
  .controller('wdiradioIndexController', [
    'wdiradio',
    wdiradioIndexControllerFunction
  ])

  function wdiradioIndexControllerFunction (wdiradio) {
    this.wdiradios = wdiradio.query()
  }
})()
