/* global angular */

angular.module('wdiradio')
.factory('SongFactory', [
  '$resource',
  wdiradioservice
])

function wdiradioservice ($resource) {
  return $resource('http://localhost:3000/songs/:id.json', {}, {
    update: {
      method: 'PUT'
    }
  })
}
