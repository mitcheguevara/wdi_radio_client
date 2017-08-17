/* global angular */

angular.module('wdiradio')
.factory('wdiradio', [
  '$resource',
  wdiradioservice
])

function wdiradioservice ($resource) {
  return $resource('http://localhost:3000/entries/:id', {}, {
    update: {
      method: 'PUT'
    }
  })
}
