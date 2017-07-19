var service = require('./../../common/services/cards.service');

module.exports = angular
  .module('cards.component', [
    service.name
    ])
  .component('cardsComponent', {
    templateUrl: './app/js/cards/components/cards.template.html',
    controller: CardsController
  });

CardsController.$inject = ['Cards', 'globalSettings'];

function CardsController(Cards, globalSettings) {
  var ctrl = this;
  ctrl.cards = {};
  ctrl.cart = {};
  ctrl.showAllCards = true;
  ctrl.showAddCart = false;
  ctrl.showEditCart = false;
  ctrl.defaultPhoto = globalSettings.DEFAULT_PHOTO;

  ctrl.loadCards = function() {
    Cards.getCards().then(
      function(data) {
        ctrl.cards = data;
      }
    );
  };
  ctrl.showCheateCatd = function(){
    ctrl.showAllCards = false;
    ctrl.showAddCart = true;
  }

  ctrl.showAllCatd = function(){
    ctrl.showAllCards = true;
    ctrl.showAddCart = false;
    ctrl.showUpdCatds = false;
    ctrl.loadCards();
  }

  ctrl.showUpdateCatd = function(el){
    ctrl.obj = Object.assign({}, el.cart)
    ctrl.showAllCards = false;
    ctrl.showUpdCatds = true;
    ctrl.obj.url = el.url;
  }

  ctrl.createCard = function(el) {
    ctrl.obj = Object.assign({}, el)
    Cards.addCard(ctrl.obj)
      .then(function(data) {
      return data;
    });
  };

  ctrl.updateCatd = function(el){
    ctrl.obj = Object.assign({}, el)
    Cards.updateCard(ctrl.obj).then(function(data) {
      return data});
  }

  ctrl.delCard = function(el, event){
    if(confirm("Are you sure")){
      ctrl.obj = Object.assign({}, el)
      ctrl.obj.cart.visible = false;
      Cards.updateCard(ctrl.obj.cart).then(function(data) {
      return data});
      event.path[3].classList.add("hide");
    };
  }

  ctrl.uploadPhoto = function(card, file) {
    var id = card.id;
    Cards.uploadPhoto(id, file).then(
      function(response) {
        debugger;
        ctrl.obj.url = response.url;
      }
    );
  }

  ctrl.loadCards();
};
