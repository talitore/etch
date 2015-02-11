// $ ->
document.addEventListener("DOMContentLoaded", function(event) {
  canvas = document.getElementById('canvas');
  canvas.width=800;
  canvas.height=600;

  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(200,200,200)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgb(0,0,0)';

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', endDraw);
});

var canvas;
var ctx;
var drawing = false;
var coords = [];

function startDraw(e) { drawing = true; }
function endDraw(e) {
  drawing = false;
  coords = [];
}
var draw = function (e) {
  if(!drawing) return;

  var x = e.offsetX
  var y = e.offsetY

  coords.push({x: x, y: y});
  socket.emit('originInfo', coords);
  drawOnCanvas(coords);
}
function drawOnCanvas(coords) {
  ctx.beginPath();
  ctx.moveTo(coords[0].x, coords[0].y);

  for(var i = 1; i < coords.length; i++) {
    ctx.lineTo(coords[i].x, coords[i].y);
  }
  ctx.stroke();
}
