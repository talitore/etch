module.exports = function(server){
  var io = require('socket.io')(server);
  var User = require("../models/user.js");

  io.on('error', function(err){
    throw err;
  })

  io.on('connection', function (socket) {
    var address = socket.request.connection._peername;
    console.log(" - New connection from " + socket.id + " @ " + address.address + ":" + address.port + " " + address.family);

    user = new User({id: socket.id});
    io.emit('userConnect', { user: user });
    socket.on('disconnect', function () {
      io.emit('userDisconnect', { id: socket.id });
    });

    socket.on('originInfo', function(params) {
       socket.broadcast.emit('drawingFromOthers',params);
    });
  });

  return io;
}
