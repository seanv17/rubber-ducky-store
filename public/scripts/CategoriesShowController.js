angular
  .module('rubber-ducky-store', [])
  .controller('CategoriesIndexController', CategoriesIndexController);

  function CategoriesIndexController () {
    var vm = this;
    vm.newCategory = {};

    vm.newCategory = {
      name: 'Gold Duckies',
      description: 'I love goooooold duckies'
    };
  }
