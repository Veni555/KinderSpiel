var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.canvas.width  = window.innerWidth;
context.canvas.height = window.innerHeight;
context.lineWidth = 5 ;
var down=false;


// touch is supported or not
var touchable = 'createTouch' in document;

if (touchable) {
  canvas.addEventListener('touchstart', onTouchStart, false)
  canvas.addEventListener('touchmove', onTouchMove, false)
}

var lastX;
var lastY;

canvas.addEventListener('mousemove',draw);

canvas.addEventListener('mousedown',function(){
    down=true;
    context.beginPath();
    context.moveTo(xPos,yPos);
    canvas.addEventListener('mousemove',draw);
});
canvas.addEventListener('mouseup', function(){
  down=false;
});


function draw(e){
    xPos=e.clientX-canvas.offsetLeft;
    yPos=e.clientY-canvas.offsetTop;
    if(down==true){
        context.lineTo(xPos,yPos);
        context.stroke();
    }
}

function changeColor(color){
    context.strokeStyle=color;
}

function clearCanvas(){
    context.clearRect(0,0,canvas.width,canvas.height);
}

function changeImageCanvas(){
    var imageSrc=document.getElementById("imagek").getAttribute('src');
    var images=new Image();

    images.src = imageSrc;
   context.drawImage(images,0,0);
    images.src=" ";
}
function ajax_json_gallery(folder){
	var thumbnailbox = document.getElementById("thumbnailbox");

    var hr = new XMLHttpRequest();
    hr.open("POST", "json_gallery_data.php", true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var d = JSON.parse(hr.responseText);

			thumbnailbox.innerHTML = "";
			for(var o in d){
				if(d[o].src){
				    thumbnailbox.innerHTML += '<div onclick="putinframe(\''+d[o].src+'\')"><img src="'+d[o].src+'"></div>';

				}
			}
	    }
    }
    hr.send("folder="+folder);
    thumbnailbox.innerHTML = "requesting...";
}



function putinframe(src){
  var image = new Image();
  image.src = src;
  context.drawImage(image, 0, 0, 800,500);
}

function onTouchStart(event) {
  event.preventDefault();
  lastX=event.touches[0].clientX;
  lastY=event.touches[0].clientY;
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


function drawLine(startX,startY,endX,endY) {
  context.beginPath();
  // context.lineCap="round";
  context.moveTo(startX-200,startY-30);
  context.lineTo(endX-200,endY-30);
  context.stroke();
}