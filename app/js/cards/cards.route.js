module.exports = angular
  .module('cards.route', [])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('main.cards', {
      url: '/cards',
      template: '<cards-component></cards-component>'
    });
  }]);

