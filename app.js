var express = require('express');
var config = require('./config');
var morgan = require('morgan');
var fs = require('fs');
var winston = require('winston');

var app = express();

require('./routes/routes')(app);

app.use(morgan('common', {
    stream: fs.createWriteStream('./logs/access.log', {flags: 'a'})
}));
app.use(morgan('dev'));

app.use('/', express.static(__dirname + '/public'));

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
