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
      console.log(vm.newCategory);
      $http({
        method: 'POST',
        url: '/api/categories',
        data: vm.newCategory,
      }).then(function successCallback(response) {
        vm.categories.push(response.data);
      }, function errorCallback(response) {
        console.log('There was an error posting the data: ', response);
      });
    };

    vm.editCategory = function (category) {
      $http({
        method: 'PUT',
        url: '/api/categories/' + category._id,
        data: category
      }).then(function successCallback(json) {
        // nothing to do here!
      }, function errorCallback(response) {
        console.log('There was an error editing the data', response);
      });
    };

    vm.deleteCategory = function (category) {
      $http({
        method: 'DELETE',
        url: '/api/categories/' + category._id
      }).then(function successCallback(json) {
        var index = vm.categories.indexOf(category);
        vm.categories.splice(index, 1);
      }, function errorCallback(response) {
        console.log('There was an error deleting the data: ', response);
      });
    };

  }
