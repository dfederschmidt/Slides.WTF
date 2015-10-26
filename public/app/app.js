var app = angular.module('slideswtf', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/landingpage.html',
      controller: 'LandingPageCtrl'
    })
    .when('/slides', {
      templateUrl: 'views/presentation.html',
      controller: 'SlidesCtrl'
    });
});
