module.exports = function(server){
  var io = require('socket.io')(server);

  io.on('error', function(err){
    throw err;
  })

  io.on('connection', function (socket) {
    var address = socket.request.connection._peername;
    console.log("New connection from " + address.address + ":" + address.port + " " + address.family);
    socket.on('draw', function(params) {
       io.emit('draw',params);
    });
  });
  return io;
}
