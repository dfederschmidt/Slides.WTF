app.factory('TagService', function() {
  var tag = "";

  return {
    setTag: function(userTag) {
      tag = userTag;
    },
    getTag: function(){
      return tag;
    }

  };
});
