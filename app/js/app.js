var angular = require('angular');
var mainModule = require('./main/main.module.js');
var vendorModule = require('./requirements.js');

angular
  .module('card', [
    vendorModule.name,
    mainModule.name
  ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
