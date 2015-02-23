// $ ->
document.addEventListener("DOMContentLoaded", function(event) {
  socket = io();

  socket.on('drawingFromOthers', function(params) {
     drawOnCanvas(params);
  });
  socket.on('updateUsers', function(params) {
    updateUserList(params.users);
  });
  socket.on('userDisconnect', function(params) {
  });
});

var socket;
