var constants = require('./../constants');

module.exports = angular
  .module('cards.resource', [
    constants.name
    ])
  .factory('cardsResource', cardsResource);

cardsResource.$inject = ['$resource', 'globalSettings'];

function cardsResource($resource, globalSettings) {
  return $resource(globalSettings.SERVER_URL + '/carts/:id.json',
  {id: '@id'},
  {
    'update': {method: 'PUT'},
    'upload': {
      url: globalSettings.SERVER_URL + '/carts/:id/upload.json',
      method: 'PUT'
    }
  });
}
