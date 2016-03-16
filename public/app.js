var app = angular.module('MainApp', ['ui.router'])

app.config([
  '$stateProvide',
  '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: '/partials/login.html',
        controller: 'loginCtrl'
      })
      .state('login.register', {
        url: '/register',
        templateUrl: '/partials/register.html',
        controller: 'registerCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .state('cookbook', {
        url: '/cookbook',
        templateUrl: '/partials/cookbook.html',
        controller: 'cookbookCtrl'
      });

    $urlRouterProvider.otherwise('login');
  }
]);
