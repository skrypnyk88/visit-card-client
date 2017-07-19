var angular = require('angular');
var mainModule = require('./main/main.module.js');
var vendorModule = require('./requirements.js');
var valuesModule = require('./common/values.js');

angular
  .module('card', [
    vendorModule.name,
    mainModule.name,
    valuesModule.name
  ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
