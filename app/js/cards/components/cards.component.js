module.exports = angular
  .module('cards.component', [
    ])
  .component('cardsComponent', {
    templateUrl: './app/js/cards/components/cards.template.html',
    controller: CardsController
  });


function CardsController() {
  var ctrl = this;

};
