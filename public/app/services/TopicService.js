app.factory('TopicService', function() {
  var topic = "";

  return {
    setTopic: function(userTopic) {
      topic = userTopic;
    },
    getTopic: function(){
      return topic;
    }

  };
});
