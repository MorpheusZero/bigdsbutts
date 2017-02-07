'use strict';

angular.module('menu', [])
  .component('menu', {
    templateUrl: 'scripts/menu-layout/menu/menu.template.html',
    controller: function() {
      this.menu =
        {
          appetizers: {
            items: [
              {
                name: "Fresh Fried Pork Skins",
                price: "$5.00",
                description: "this is some stuff"
              }
            ]
          }
        }
    }
  });
