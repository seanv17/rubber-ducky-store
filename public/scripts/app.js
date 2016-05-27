angular
  .module('rubber-ducky-store', ['ngRoute'])
  .config(config)
  .controller('CategoriesShowController', CategoriesShowController);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl:  'templates/categories',
      controller:   'CategoriesIndexController',
      controllerAs: 'categoriesIndexCtrl'
    })
    .when('/:id', {
      templateUrl:  '/templates/categories-show',
      controller:   'CategoriesShowController',
      controllerAs: 'categoriesShowCtrl'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
