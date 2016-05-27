angular
  .module('rubber-ducky-store')
  .controller('CategoriesShowController', CategoriesShowController);

CategoriesShowController.$inject = ['$http', '$routeParams'];

function CategoriesShowController ( $http, $routeParams ) {
  var vm = this;
  vm.newCategory = {};

  $http({
    method: 'GET',
    url: '/api/categories/' + $routeParams.id
  }).then(function successCallback(json) {
    vm.category = json.data;
    console.log('There was an error getting the data', json);
  });
}
