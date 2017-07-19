var Resource = require('./../resources/cards.resource.js');

module.exports = angular
  .module('cards.service', [
    Resource.name
  ])
  .factory('Cards', Cards);

Cards.$inject = ['cardsResource'];

function Cards(cardsResource) {
  var service = {
    getCards: getCards,
    updateCard: updateCard,
    addCard: addCard,
    uploadPhoto: uploadPhoto,
    searchCards: searchCards
  };
  return service;

  function getCards() {
    return cardsResource.query()
      .$promise.then(responseSuccess, responseFailure);
  };

  function searchCards(obj) {
    var params = {};
    debugger;
    params.q = obj.text

    return cardsResource.query(params)
      .$promise.then(responseSuccess, responseFailure);
  };

  function updateCard(obj) {
    var params = {
      cart: {building: obj.building,
             city: obj.city,
             company_name: obj.company_name,
             email: obj.email,
             first_name: obj.first_name,
             last_name: obj.last_name,
             phone: obj.phone,
             position: obj.position,
             streat: obj.streat,
             visible: obj.visible },
      id: obj.id
    };

    return cardsResource.update(params)
      .$promise.then(responseSuccess, responseFailure);
  };

  function addCard(obj) {
    var params = {
      cart: {building: obj.building,
             city: obj.city,
             company_name: obj.company_name,
             email: obj.email,
             first_name: obj.first_name,
             last_name: obj.last_name,
             phone: obj.phone,
             position: obj.position,
             streat: obj.streat,
             visible: obj.visible }
    };

    return cardsResource.save(params)
      .$promise.then(responseSuccess, responseFailure);
  };

  function uploadPhoto(id, file) {
    var params = {
      id: id,
      file: file
    };
    debugger;
    return cardsResource.upload(params).$promise.then(responseSuccess, responseFailure);
  };

  function responseSuccess(data) {
    return data;
  };

  function responseFailure(response) {
    return console.log(response.data);
  };
}
