app.factory('SlideService', function($http) {
  return {
    fetchSlides: function(tag, callback) {

      $http({
        method: 'GET',
        url: '/v1/slideset',
        params: {"tag": tag}
      }).then(function(response) {

          callback(JSON.parse(response.data));
          return;

      }, function(err) {
        console.log(err);
      });

    }

  };
});
