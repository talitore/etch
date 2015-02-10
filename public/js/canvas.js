var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(255,255,0)';
ctx.fillRect(0,0,600,480);
ctx.fillStyle = 'rgb(0,0,0)';

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDraw);

var drawing = false;
function startDraw(e) { drawing = true; }
function endDraw(e) { drawing = false; }

function draw(e) {
  if(!drawing) return;

  var x = e.x-e.target.offsetLeft;
  var y = e.y-e.target.offsetTop;
  console.log(x);
  console.log(y);
  // ctx.fillRect(x,y,4,4);
}
