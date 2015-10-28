var app = angular.module('slideswtf');

app.controller('SlidesCtrl', function($scope, $location, SlideService, $sce, TopicService, $route) {
  $scope.init = function() {
    $scope.fetchSlidesLink();
  }

  $scope.fetchSlidesLink = function() {
    SlideService.fetchSlides(TopicService.getTopic(), function(err, slides) {
      if (err != null) {
        console.log("Slides could not be loaded");
      } else {
        $scope.slides = slides;
        $scope.slidesURL = $sce.trustAsResourceUrl($scope.slides.SlideshowEmbedUrl[0]);
      }
    });
  }

  $scope.init();


});
