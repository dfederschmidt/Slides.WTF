var app = angular.module('slideswtf');

app.controller('LandingPageCtrl', function($scope, $location) {

$scope.getStarted = function(){
  $location.path("/new");
}

});
