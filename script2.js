var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var radius= 10;
var dragging=false;

// touch is supported or not
var touchable = 'createTouch' in document;

if (touchable) {
  canvas.addEventListener('touchstart', onTouchStart, false)
  canvas.addEventListener('touchmove', onTouchMove, false)
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas.width, canvas.height)

var lastX;
var lastY;

context.lineWidth=radius*2;
var putPoint = function (e) {
    if(dragging ){
      context.lineTo (e.clientX,e.clientY);
      context.stroke();
      context.beginPath ();
      context.arc (e.clientX,e.clientY,radius,0,Math.PI*2);
      context.fill();
      context.beginPath();
      context.moveTo(e.clientX,e.clientY);
  }
}
var engage = function(e){
    dragging = true;
    putPoint(e);
}
var disengage = function(){
    dragging = false;
    context.beginPath();
}


canvas.addEventListener('mousedown',engage );
canvas.addEventListener('mousemove',putPoint);
canvas.addEventListener('mouseup',disengage )


function onTouchStart(event) {
  event.preventDefault();
  lastX=event.touches[0].clientX;
  lastY=event.touches[0].clientY;
  drawRound(lastX,lastY);
}

function onTouchMove(event) {
  try {
    event.preventDefault();
    drawLine(lastX,lastY,event.touches[0].clientX,event.touches[0].clientY);
    lastX=event.touches[0].clientX;
    lastY=event.touches[0].clientY;
  } catch(err) {
    alert( err.description);
  }
}

function drawRound(x,y) {
  context.fillStyle="#FF0000";
  context.beginPath();
  context.arc(x,y,5,0,Math.PI*2,true);
  context.closePath();
  context.fill();
}

function drawLine(startX,startY,endX,endY) {
  context.beginPath();
  context.lineCap="round";
  context.moveTo(startX,startY);
  context.lineTo(endX,endY);
  context.stroke();
}