/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('rubber-ducky-store', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/categories',
      controllerAs: 'categoriesIndexCtrl',
      controller: 'CategoriesIndexController'
    })
    .when('/:id', {
      templateUrl: 'templates/categories-show',
      controllerAs: 'categoriesShowCtrl',
      controller: 'CategoriesShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
