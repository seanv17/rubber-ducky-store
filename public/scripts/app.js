angular
  .module('rubber-ducky-store', [])
  .controller('CategoriesShowController', CategoriesShowController);

  function CategoriesShowController () {
    var vm = this;
    vm.newCategory = {};

    vm.newCategory = {
      name: 'Gold Duckies',
      description: 'I love goooooold duckies'
    };

    vm.categories = [
      {
        name: 'Coming Home',
        description: 'Leon Bridges'
      },
      {
        name: 'Are We There',
        description: 'Sharon Van Etten'
      },
      {
        name: 'The Queen is Dead',
        description: 'The Smiths'
      }
    ];

  }
