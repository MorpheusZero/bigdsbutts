'use strict';

angular.module('menu-group', [])
  .component('menuGroup', {
    bindings: {
      items: '@'
    },
    templateUrl: 'scripts/menu-layout/menu/menu-group/menu-group.template.html'
  });
