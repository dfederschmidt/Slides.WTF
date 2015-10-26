app.factory('SlideService', function($http) {
  return {
    fetchSlides: function(tag, callback) {
      $http({
        method: 'GET',
        url: '/v1/slides',
        params: {
          "tag": tag
        }
      }).then(function(response) {
        callback(null, JSON.parse(response.data));
        return;
      }, function(err) {
        callback(err, null);
        return;
      });
    }
  };
});
