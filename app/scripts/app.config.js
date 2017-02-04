'use strict';

angular.module('app-config', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .when('/menu', {
      templateUrl: 'views/menu.html'
    })
    .otherwise({
      templateUrl: '404.html'
    });

  $locationProvider.hashPrefix('');
});
