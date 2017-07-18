var cardsComponent = require('./components/cards.component.js');
var cardsRoute = require('./cards.route.js');

module.exports = angular
  .module('cards', [
    cardsComponent.name,
    cardsRoute.name
  ]);
