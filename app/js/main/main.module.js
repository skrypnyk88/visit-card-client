var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var loginModule = require('./../login/login.module.js');
var cardsModule = require('./../cards/cards.module.js');
require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    loginModule.name,
    cardsModule.name
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('light-green')
      .accentPalette('deep-purple')
      .warnPalette('red')
      .backgroundPalette('grey');
  });
