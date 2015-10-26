var express = require('express');
var config = require('./config');
var morgan = require('morgan');
var winston = require('winston');

var app = express();

require('./routes')(app);

//Start logging
app.use(morgan('dev'))
app.use('/', express.static(__dirname + '/public'));

//Handle 404
app.use(function(req, res, next){
  res.status(404);
  res.send({ error: 'Not found' });
  return;
});

//Start server
var server = app.listen(process.env.PORT || config.port, function () {
  var host = server.address().address;
  var port = server.address().port;
  winston.info('Server started - %s | Port %s', host, port);
});
