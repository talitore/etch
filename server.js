var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.engine('.haml', require('hamljs').renderFile);

http.listen(app.get('port'), function() {
  console.log('Server running on localhost:'+app.get('port'));
});

io.on('connection', function(socket){
  var address = socket.request.connection._peername;
  console.log("New connection from " + address.address + ":" + address.port + " " + address.family);
  socket.on('draw', function(params) {
     io.emit('draw',params);
  });
});
