angular.module('home', []);

angular.module('home')
  .config($stateProvider => {
      $stateProvider
        .state('home', {
          url: '/home',
          controller: 'Main_ctrl',
          templateUrl: 'home/home.html',
          controllerAs: 'main'
        });
  });

