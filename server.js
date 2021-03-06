//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/assignment.html'));
});
app.get('/assignment2', function(req, res){
  res.sendFile(path.join(__dirname, 'Assignment2.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'Assignment3.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});