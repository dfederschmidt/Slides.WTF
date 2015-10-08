var request = require("request");
var config = require("../config");
var sha1 = require("sha1");
var parseXML = require('xml2js').parseString;
var winston = require('winston');

module.exports = {
  fetchRandomSlideshareLink: function(userTag, callback){
    var ts = Math.floor(Date.now() / 1000)
    var hash = sha1(config.shared_secret + ts);
    if(userTag == "" || userTag == undefined){
      tag  = "random";
      page = Math.floor((Math.random() * 1000) + 1);
    } else {
      page = Math.floor((Math.random() * 3) + 1);
      tag = userTag;
    }
    winston.info("Picking page: " + page + " with tag:" + tag)


    var options = {
      url: 'https://www.slideshare.net/api/2/search_slideshows',
      qs: {
        "q": tag,
        "api_key": config.api_key,
        "limit": 100,
        "items_per_page": 50,
        "page": page,
        "hash": hash,
        "ts": ts,
        "file_type": "presentations"
        }
    };

    slidesetsReceived = function(slidesErr, slidesRes , slidesBody){
      parseXML(slidesBody, function (err, result) {
        var returnedSlidesets = result["Slideshows"]["Meta"][0]["NumResults"];
        winston.info("Number of received slidedecks: " + returnedSlidesets);

        var selectedSlideIndex = Math.floor(Math.random() * (returnedSlidesets));
        winston.info("Choosing slidedeck: " + selectedSlideIndex);

        if(returnedSlidesets == 0) {
          winston.info("No Slideshows found.");
          var error = new Error("No Slideshows found.");
          callback(error ,null);
          return;
        } else {
          callback(null, JSON.stringify(result["Slideshows"]["Slideshow"][selectedSlideIndex]));
          return;
        }
      })
    }

    request(options, slidesetsReceived);
  }

};
