var app = angular.module('slideswtf');

app.controller('NewKaraokeCtrl', function($scope, $location, TagService) {

  $scope.startKaraoke = function() {
    TagService.setTag($scope.inputTag);
    console.log(TagService.getTag());
    $location.path("/karaoke");
  }

});
