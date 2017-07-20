var angular = require('angular');
var mainModule = require('./main/main.module.js');
var vendorModule = require('./requirements.js');
var tokenInjector = require('./common/services/tokenInjector.service.js');
var constantsModule = require('./common/constants.js');

angular
  .module('card', [
    vendorModule.name,
    constantsModule.name,
    mainModule.name,
    tokenInjector.name,
  ])
  .config(
    function($locationProvider, $httpProvider, localStorageServiceProvider) {
      $locationProvider.html5Mode(true);
      localStorageServiceProvider.setPrefix('card');
      $httpProvider.interceptors.push('tokenInjector');
    })
  .run(['$rootScope', '$state', 'auth',
    function($rootScope, $state, auth) {
      $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState) {
          auth.authorization(event, toState, fromState);
        });
    }]);
