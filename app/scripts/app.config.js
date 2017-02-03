'use strict';

angular.module('app-config', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .when('/debug', {
      templateUrl: 'views/debug.html'
    })
    .otherwise({
      templateUrl: '404.html'
    });

  $locationProvider.hashPrefix('');
});
