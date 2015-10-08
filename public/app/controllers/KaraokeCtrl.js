var app = angular.module('slideswtf');

app.controller('KaraokeCtrl', function($scope, $location, SlideService, $sce, TagService, $route, usSpinnerService) {
  $scope.init = function() {
    $scope.contentLoaded = false;
    usSpinnerService.spin('spinner-1');
    $scope.fetchKaraokeLink();
  }

  $scope.fetchKaraokeLink = function() {
    SlideService.fetchSlides(TagService.getTag(), function(slides) {
      $scope.slides = slides;
      $scope.contentLoaded = true;
      $scope.slidesURL = $sce.trustAsResourceUrl($scope.slides.SlideshowEmbedUrl[0]);
      usSpinnerService.stop('spinner-1');
    });
  }

  $scope.endKaraoke = function() {
    $location.path("/");
  }
  $scope.reloadPage = function() {
    $route.reload();
  }

  $scope.init();


});
