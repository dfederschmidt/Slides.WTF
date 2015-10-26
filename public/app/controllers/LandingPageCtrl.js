var app = angular.module('slideswtf');

app.controller('LandingPageCtrl', function($scope, $location, TopicService) {

$scope.startSlideshow = function() {
  TopicService.setTopic($scope.inputTopic);
  $location.path("/slides");
}
});
