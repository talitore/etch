// $ ->
document.addEventListener("DOMContentLoaded", function(event) {
  socket = io();

  socket.on('drawingFromOthers', function(params) {
     drawOnCanvas(params);
  });
  socket.on('userConnect', function(params) {
    pushToUserList(params);
    console.log('ID: ' + params.user.data.id + ' connected.')
  });
  socket.on('userDisconnect', function(params) {
    console.log('ID: ' + params.id + ' disconnected.')
  });
});

var socket;
