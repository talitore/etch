module.exports = function(server){
  console.log('IO init');
  var io = require('socket.io')(server);
  var state = require('./state.js');

  io.on('error', function(err){
    throw err;
  })

  io.on('connection', function (socket) {
    var address = socket.request.connection._peername;
    console.log(" - New connection from " + socket.id + " @ " + address.address + ":" + address.port + " " + address.family);

    state.addUser({id: socket.id});
    io.emit('updateUsers', { users: state.currentUsers });
    socket.on('disconnect', function () {
      state.removeUser({id: socket.id});
      io.emit('updateUsers', { users: state.currentUsers });
    });

    socket.on('originInfo', function(params) {
       socket.broadcast.emit('drawingFromOthers',params);
    });
  });

  return io;
}
