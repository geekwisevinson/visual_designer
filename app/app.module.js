angular.module('app', [
    'main_controller',
    'templates',
    'ui.router',
    'welcome',
    'home'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
  })
  .run(function () {

  });