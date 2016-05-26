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
  }
