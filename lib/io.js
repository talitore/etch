module.exports = function(server){
  var io = require('socket.io')(server);

  io.on('error', function(err){
    throw err;
  })

  io.on('connection', function (socket) {
    var address = socket.request.connection._peername;
    console.log(" - New connection from " + socket.id + " @ " + address.address + ":" + address.port + " " + address.family);

    //refactor to user object
    io.emit('userConnect', { id: socket.id });
    socket.on('disconnect', function () {
      io.emit('userDisconnect', { id: socket.id });
    });

    socket.on('originInfo', function(params) {
       socket.broadcast.emit('drawingFromOthers',params);
    });
  });

  return io;
}
