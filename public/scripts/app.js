angular
  .module('rubber-ducky-store', [])
  .controller('CategoriesShowController', CategoriesShowController);

  CategoriesShowController.$inject = ['$http'];

  function CategoriesShowController ( $http ) {
    var vm = this;
    vm.newCategory = {};

    vm.newCategory = {
      name: 'Gold Duckies',
      description: 'I love goooooold duckies'
    };

    $http({
      method: 'GET',
      url: '/api/categories'
    }).then(function successCallback(response) {
      vm.categories = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data: ', response);
    });

    vm.createCategory = function () {
      $http({
        method: 'POST',
        url: '/api/categories',
        data: vm.newCategory,
      }).then(function successCallback(response) {
        vm.categories.push(response.data);
      }, function errorCallback(response) {
        console.log('There was an error posting the data: ', response);
      });
    }

  }
