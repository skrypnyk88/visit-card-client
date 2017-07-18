var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var cardsModule = require('./../cards/cards.module.js');
require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    cardsModule.name
  ]);
