var express = require('express');
var path = require('path');
var serveStatic = require('serve-static')
var history = require('connect-history-api-fallback')

var app = express();
app.use(history());
app.use(serveStatic(__dirname + '/static'));
var port = process.env.PORT || 4078;

app.listen(port);
console.log('server started at http://localhost:' + port);