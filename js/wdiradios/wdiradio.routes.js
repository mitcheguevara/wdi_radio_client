/* global angular */

angular
.module('wdiradio')
.config([
  '$stateProvider',
  RouterFunction
])

function RouterFunction ($stateProvider) {
  $stateProvider
  .state('wdiradioIndex', {
    url: '/wdiradios',
    templateUrl: 'js/wdiradios/index.html',
    controller: 'wdiradioIndexController',
    controllerAs: 'vm'
  })
  .state('wdiradioNew', {
    url: '/wdiradios/new',
    templateUrl: 'js/wdiradios/new.html',
    controller: 'wdiradioNewController',
    controllerAs: 'vm'
  })
  .state('wdiradioshow', {
    url: '/wdiradios/:id',
    templateUrl: 'js/wdiradios/show.html',
    controller: 'wdiradioshowController',
    controllerAs: 'vm'
  })
  .state('wdiradioEdit', {
    url: '/wdiradios/:id/edit',
    templateUrl: 'js/wdiradios/edit.html',
    controller: 'wdiradioEditController',
    controllerAs: 'vm'
  })
}
