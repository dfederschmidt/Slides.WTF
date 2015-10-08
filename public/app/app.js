var app = angular.module('slideswtf', ['ngRoute','timer','angularSpinner']);

app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/pages/landingpage.html',
                controller:   'LandingPageCtrl'
            })
            .when('/new', {
                templateUrl : 'views/pages/new.html',
                controller:   'NewKaraokeCtrl'
            })
            .when('/karaoke', {
                templateUrl : 'views/pages/karaoke.html',
                controller:   'KaraokeCtrl'
            });
    });
