var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var fillColor = document.getElementById("fillColor");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
context.lineWidth = 5;
context.strokeStyle = fillColor.value;
context.fillStyle = fillColor.value;
var down = false;
fillColor.addEventListener("input", changeFillStyle, false);

// touch is supported or not
var touchable = 'createTouch' in document;

if (touchable) {
  canvas.addEventListener('touchstart', onTouchStart, false)
  canvas.addEventListener('touchmove', onTouchMove, false)
}

var lastX;
var lastY;

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', function () {
  down = true;
  context.beginPath();
  context.moveTo(xPos, yPos - 80);
  canvas.addEventListener('mousemove', draw);
});
canvas.addEventListener('mouseup', function () {
  down = false;
});


function downloadImage() {
  var link = document.getElementById('link');
  link.setAttribute('download', 'My drawing.png');
  link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
}

function changeFillStyle() {
  context.strokeStyle = this.value;
  context.fillStyle = this.value;
  event.stopPropagation();
}

function draw(e) {
  xPos = e.clientX - canvas.offsetLeft;
  yPos = e.clientY - canvas.offsetTop ;
  if (down == true) {
    context.lineTo(xPos, yPos - 80);
    context.stroke();
  }
}

function changeColor(color) {
  context.strokeStyle = color;
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function changeImageCanvas() {
  var imageSrc = document.getElementById("imagek").getAttribute('src');
  var images = new Image();

  images.src = imageSrc;
  context.drawImage(images, 0, 0);
  images.src = " ";
}

// function ajax_json_gallery(folder){
// 	var thumbnailbox = document.getElementById("thumbnailbox");

//   var hr = new XMLHttpRequest();
//   hr.open("POST", "json_gallery_data.php", true);
//   hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   hr.onreadystatechange = function() {
//     if(hr.readyState == 4 && hr.status == 200) {
//       var d = JSON.parse(hr.responseText);

//     thumbnailbox.innerHTML = "";
//     for(var o in d){
//       if(d[o].src){
//           thumbnailbox.innerHTML += '<div onclick="putinframe(\''+d[o].src+'\')"><img src="'+d[o].src+'"></div>';

//       }
//     }
//     }
//   }
//   hr.send("folder="+folder);
//   thumbnailbox.innerHTML = "requesting...";
// }


function putinframe(src) {
  var image = new Image();
  image.src = src;
  context.drawImage(image, 0, 0, 800, 500);
}

function onTouchStart(event) {
  event.preventDefault();
  lastX = event.touches[0].clientX;
  lastY = event.touches[0].clientY;
}

function onTouchMove(event) {
  try {
    event.preventDefault();
    drawLine(lastX, lastY, event.touches[0].clientX, event.touches[0].clientY);
    lastX = event.touches[0].clientX;
    lastY = event.touches[0].clientY;
  } catch (err) {
    alert(err.description);
  }
}


function drawLine(startX, startY, endX, endY) {
  context.beginPath();
  // context.lineCap="round";
  context.moveTo(startX - 250, startY - 210);
  context.lineTo(endX - 250, endY - 210);
  context.stroke();
}

function changeBrushSize(size) {
  context.lineWidth = size;
}

function fillCanvas() {
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function changeBrushStyle(brushStyle) {
  context.lineCap = brushStyle;
}

function triggerClick() {
  document.getElementById('file').click();
}

// ============ copy paste from index.html

var image = new Image();

function ajax_json_gallery(folder) {
  var thumbnailbox = document.getElementById("thumbnailbox");

  var hr = new XMLHttpRequest();
  hr.open("POST", "json_gallery_data.php", true);
  hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  hr.onreadystatechange = function () {
    if (hr.readyState == 4 && hr.status == 200) {
      var d = JSON.parse(hr.responseText);

      thumbnailbox.innerHTML = "";
      for (var o in d) {
        if (d[o].src) {
          thumbnailbox.innerHTML += '<div onclick="putinframe(\'' + d[o].src + '\')"><img src="' + d[o].src + '"></div>';
        }
      }
    }
  }
  hr.send("folder=" + folder);
  thumbnailbox.innerHTML = "requesting...";
}

var stage;
var imageObj2 = new Image();
var yodaGroup = new Konva.Group({
  x: 20,
  y: 110,
  draggable: true
});
// yoda
var yodaImg = new Konva.Image({
  width: 93,
  height: 104
});
var layer = new Konva.Layer();


function putinframe(src) {
  var width = window.innerWidth;
  var height = window.innerHeight;

  function update(activeAnchor) {
    var group = activeAnchor.getParent();

    var topLeft = group.get('.topLeft')[0];
    var topRight = group.get('.topRight')[0];
    var bottomRight = group.get('.bottomRight')[0];
    var bottomLeft = group.get('.bottomLeft')[0];
    var image = group.get('Image')[0];

    var anchorX = activeAnchor.getX();
    var anchorY = activeAnchor.getY();

    // update anchor positions
    switch (activeAnchor.getName()) {
      case 'topLeft':
        topRight.setY(anchorY);
        bottomLeft.setX(anchorX);
        break;
      case 'topRight':
        topLeft.setY(anchorY);
        bottomRight.setX(anchorX);
        break;
      case 'bottomRight':
        bottomLeft.setY(anchorY);
        topRight.setX(anchorX);
        break;
      case 'bottomLeft':
        bottomRight.setY(anchorY);
        topLeft.setX(anchorX);
        break;
    }

    image.position(topLeft.position());

    var width = topRight.getX() - topLeft.getX();
    var height = bottomLeft.getY() - topLeft.getY();
    if (width && height) {
      image.width(width);
      image.height(height);
    }
  }

  function addAnchor(group, x, y, name) {
    stage = group.getStage();
    var layer = group.getLayer();

    var anchor = new Konva.Circle({
      x: x,
      y: y,
      stroke: '#666',
      fill: '#ddd',
      strokeWidth: 2,
      radius: 8,
      name: name,
      draggable: true,
      dragOnTop: false,
      opacity: 0.0
    });

    anchor.on('dragmove', function () {
      update(this);
      layer.draw();
    });
    anchor.on('mousedown touchstart', function () {
      group.setDraggable(false);
      this.moveToTop();
    });
    anchor.on('dragend', function () {
      group.setDraggable(true);
      layer.draw();
    });
    // add hover styling
    anchor.on('mouseover', function () {
      var layer = this.getLayer();
      document.body.style.cursor = 'pointer';
      this.setStrokeWidth(4);
      layer.draw();
    });
    anchor.on('mouseout', function () {
      var layer = this.getLayer();
      document.body.style.cursor = 'default';
      this.setStrokeWidth(2);
      layer.draw();
    });

    group.add(anchor);
  }

  stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
  });


  stage.add(layer);




  // yoda
  var yodaImg = new Konva.Image({
    width: 293,
    height: 356
  });



  var yodaGroup = new Konva.Group({
    x: 20,
    y: 110,
    name: 'rectangle',
    draggable: true
  });
  layer.add(yodaGroup);
  yodaGroup.add(yodaImg);
  addAnchor(yodaGroup, 0, 0, 'topLeft');
  addAnchor(yodaGroup, 293, 0, 'topRight');
  addAnchor(yodaGroup, 293, 356, 'bottomRight');
  addAnchor(yodaGroup, 0, 356, 'bottomLeft');



  var imageObj2 = new Image();
  imageObj2.onload = function () {
    yodaImg.image(imageObj2);
    layer.draw();
  };
  imageObj2.src = src;
  document.getElementById('animation_button').addEventListener('click', function () {


    if (src.slice(0, 7) == 'images1') {
      var imageObj2 = new Image();
      imageObj2.onload = function () {
        yodaImg.image(imageObj2);
        yodaImg.cache();
        yodaImg.filters([Konva.Filters.RGBA]);
        yodaImg.blue(120);
        yodaImg.green(200);
        yodaImg.red(100);
        yodaImg.alpha(0.3);
        layer.draw();
      };
      imageObj2.src = src;


      // the tween has to be created after the node has been added to the layer
      var tween = new Konva.Tween({
        node: yodaImg,
        blue: 180,
        green: 100,
        easing: Konva.Easings.EaseInOut
      });


      tween.play();
      yodaImg.red(100);
      yodaImg.alpha(0.3);
      yodaImg.blue(180);
      yodaImg.green(100);


      var tween1 = new Konva.Tween({
        node: yodaImg,
        duration: 4.0,
        blue: 0,
        red: 200,
        green: 0,
        easing: Konva.Easings.EaseInOut
      });
      setTimeout(function () {

        tween1.play();
      }, 4000);

    } else if (src.slice(0, 7) == 'images2') {

      var tl = new TimelineLite();

      // plugin example
      tl.to(yodaImg, 2, {
          konva: {
            x: 300,
            y: 130,

            rotation: 360
          },
          ease: Power4.easeOut
        })
        .to(yodaImg, 2, {
          konva: {

            scaleX: 1.5,
            scaleY: 1.5
          }
        })
        .to(yodaImg, 1, {
          konva: {

            scaleX: 3,
            scaleY: 1,
            rotation: 0
          }
        });

      // animation mooving from konva
      /*   var amplitude = 100;
    var period = 2000;
    // in ms


    var anim = new Konva.Animation(function(frame) {
        yodaImg.setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period));
    }, layer);

    anim.start(); */
    }

  }, false);

}


document.getElementById('zweite_spalte_button').addEventListener('click', function () {

  var canvas = document.getElementById('canvas');
  var tmp = canvas.toDataURL();
  var width = window.innerWidth;
  var height = window.innerHeight;

  function update(activeAnchor) {
    var group = activeAnchor.getParent();

    var topLeft = group.get('.topLeft')[0];
    var topRight = group.get('.topRight')[0];
    var bottomRight = group.get('.bottomRight')[0];
    var bottomLeft = group.get('.bottomLeft')[0];
    var image = group.get('Image')[0];

    var anchorX = activeAnchor.getX();
    var anchorY = activeAnchor.getY();

    // update anchor positions
    switch (activeAnchor.getName()) {
      case 'topLeft':
        topRight.setY(anchorY);
        bottomLeft.setX(anchorX);
        break;
      case 'topRight':
        topLeft.setY(anchorY);
        bottomRight.setX(anchorX);
        break;
      case 'bottomRight':
        bottomLeft.setY(anchorY);
        topRight.setX(anchorX);
        break;
      case 'bottomLeft':
        bottomRight.setY(anchorY);
        topLeft.setX(anchorX);
        break;
    }

    image.position(topLeft.position());

    var width = topRight.getX() - topLeft.getX();
    var height = bottomLeft.getY() - topLeft.getY();
    if (width && height) {
      image.width(width);
      image.height(height);
    }
  }

  function addAnchor(group, x, y, name) {
    stage = group.getStage();
    var layer = group.getLayer();

    var anchor = new Konva.Circle({
      x: x,
      y: y,
      stroke: '#666',
      fill: '#ddd',
      strokeWidth: 2,
      radius: 8,
      name: name,
      draggable: true,
      dragOnTop: false,
      opacity: 0.0
    });

    anchor.on('dragmove', function () {
      update(this);
      layer.draw();
    });
    anchor.on('mousedown touchstart', function () {
      group.setDraggable(false);
      this.moveToTop();
    });
    anchor.on('dragend', function () {
      group.setDraggable(true);
      layer.draw();
    });
    // add hover styling
    anchor.on('mouseover', function () {
      var layer = this.getLayer();
      document.body.style.cursor = 'pointer';
      this.setStrokeWidth(4);
      layer.draw();
    });
    anchor.on('mouseout', function () {
      var layer = this.getLayer();
      document.body.style.cursor = 'default';
      this.setStrokeWidth(2);
      layer.draw();
    });

    group.add(anchor);
  }

  stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
  });

  stage.add(layer);

  // yoda
  var yodaImg = new Konva.Image({
    width: 293,
    height: 356
  });

  var yodaGroup = new Konva.Group({
    x: 20,
    y: 110,
    name: 'rectangle',
    draggable: true
  });

  layer.add(yodaGroup);
  yodaGroup.add(yodaImg);
  addAnchor(yodaGroup, 0, 0, 'topLeft');
  addAnchor(yodaGroup, 293, 0, 'topRight');
  addAnchor(yodaGroup, 293, 356, 'bottomRight');
  addAnchor(yodaGroup, 0, 356, 'bottomLeft');

  var imageObj2 = new Image();
  imageObj2.onload = function () {
    yodaImg.image(imageObj2);
    layer.draw();
  };
  imageObj2.src = tmp;

}, false);


document.getElementById('junge').addEventListener('click', function () {
  document.querySelector("body").style.backgroundImage = "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-022.jpg')";;
  document.querySelector("body").style.backgroundRepeat = 'repeat';
  document.getElementById("gallery").style.background = "#B0E0E6";
  document.getElementById("thumbnailbox").style.background = "#B0E0E6";
  document.getElementById("canvas").style.background = "#F0F8FF";
  document.getElementById("canvas1").style.background = "#F0F8FF";
  document.getElementById("container").style.background = "#F0F8FF";
  var x = document.getElementById("otherTools").querySelectorAll("Button");
  var y = document.getElementById("otherTools1").querySelectorAll("Button");

  // Set the background color of the first <p> element (index 0) in div
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "	#4169E1";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = "	#4169E1";
  }
}, false);


document.getElementById('maedchen').addEventListener('click', function () {
  document.querySelector("body").style.backgroundImage = "url('https://www.have-fun-with-quilts.com/WebRoot/Store5/Shops/64266164/5207/6883/7EE8/CAC2/FB86/C0A8/28BC/E11C/zart_rosa.JPG')";;
  document.querySelector("body").style.backgroundRepeat = 'repeat';
  document.getElementById("gallery").style.background = "#faebd7";
  document.getElementById("thumbnailbox").style.background = "#faebd7";
  document.getElementById("canvas").style.background = "#F0F8FF";
  document.getElementById("canvas1").style.background = "#F0F8FF";
  document.getElementById("container").style.background = "#F0F8FF";
  var x = document.getElementById("otherTools").querySelectorAll("Button");
  var y = document.getElementById("otherTools1").querySelectorAll("Button");

  // Set the background color of the first <p> element (index 0) in div
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#F08080";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = "#F08080";
  }
}, false);


document.getElementById('file').addEventListener('change', function (e) {
  URL = URL || webkitURL;
  var temp = URL.createObjectURL(e.target.files[0]);
  var image = new Image();
  image.src = temp;
  image.addEventListener('load', function () {
    imageWidth = image.naturalWidth;
    imageHeight = image.naturalHeight;
    newImageWidth = imageWidth;
    newImageHeight = imageHeight;
    originalImageRatio = imageWidth / imageHeight;
    if (newImageWidth > newImageHeight && newImageWidth > 800) {
      newImageWidth = 800;
      newImageHeight = 800 / originalImageRatio;
    }

    if ((newImageWidth >= newImageHeight || newImageHeight >= newImageWidth) && newImageHeight > 600) {
      newImageHeight = 600;
      newImageWidth = 600 * originalImageRatio;
    }


    var width = window.innerWidth;
    var height = window.innerHeight;

    function update(activeAnchor) {
      var group = activeAnchor.getParent();

      var topLeft = group.get('.topLeft')[0];
      var topRight = group.get('.topRight')[0];
      var bottomRight = group.get('.bottomRight')[0];
      var bottomLeft = group.get('.bottomLeft')[0];
      var image = group.get('Image')[0];

      var anchorX = activeAnchor.getX();
      var anchorY = activeAnchor.getY();

      // update anchor positions
      switch (activeAnchor.getName()) {
        case 'topLeft':
          topRight.setY(anchorY);
          bottomLeft.setX(anchorX);
          break;
        case 'topRight':
          topLeft.setY(anchorY);
          bottomRight.setX(anchorX);
          break;
        case 'bottomRight':
          bottomLeft.setY(anchorY);
          topRight.setX(anchorX);
          break;
        case 'bottomLeft':
          bottomRight.setY(anchorY);
          topLeft.setX(anchorX);
          break;
      }

      image.position(topLeft.position());

      var width = topRight.getX() - topLeft.getX();
      var height = bottomLeft.getY() - topLeft.getY();
      if (width && height) {
        image.width(width);
        image.height(height);
      }
    }

    function addAnchor(group, x, y, name) {
      stage = group.getStage();
      var layer = group.getLayer();

      var anchor = new Konva.Circle({
        x: x,
        y: y,
        stroke: '#666',
        fill: '#ddd',
        strokeWidth: 2,
        radius: 8,
        name: name,
        draggable: true,
        dragOnTop: false,
        opacity: 0.0
      });

      anchor.on('dragmove', function () {
        update(this);
        layer.draw();
      });
      anchor.on('mousedown touchstart', function () {
        group.setDraggable(false);
        this.moveToTop();
      });
      anchor.on('dragend', function () {
        group.setDraggable(true);
        layer.draw();
      });
      // add hover styling
      anchor.on('mouseover', function () {
        var layer = this.getLayer();
        document.body.style.cursor = 'pointer';
        this.setStrokeWidth(4);
        layer.draw();
      });
      anchor.on('mouseout', function () {
        var layer = this.getLayer();
        document.body.style.cursor = 'default';
        this.setStrokeWidth(2);
        layer.draw();
      });

      group.add(anchor);
    }

    stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height
    });

    stage.add(layer);

    // yoda
    var yodaImg = new Konva.Image({
      width: 293,
      height: 356
    });

    var yodaGroup = new Konva.Group({
      x: 20,
      y: 110,
      draggable: true
    });
    layer.add(yodaGroup);
    yodaGroup.add(yodaImg);
    addAnchor(yodaGroup, 0, 0, 'topLeft');
    addAnchor(yodaGroup, 293, 0, 'topRight');
    addAnchor(yodaGroup, 293, 356, 'bottomRight');
    addAnchor(yodaGroup, 0, 356, 'bottomLeft');


    var imageObj2 = new Image();
    imageObj2.onload = function () {
      yodaImg.image(imageObj2);
      layer.draw();
    };
    imageObj2.src = image.src;

    URL.revokeObjectURL(temp);

  });
});

function uploadEx() {
  document.getElementById('landschaft').style.visibility = "visible";
  document.getElementById('buildings').style.visibility = "visible";
  document.getElementById('weather').style.visibility = "visible";
  document.getElementById('myGallery').style.visibility = "visible";
}

function uploadEXGallery(phpDatei) {
  var dataURL = stage.toDataURL();
  document.getElementById('hidden_data').value = dataURL;
  var fd = new FormData(document.forms["form1"]);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', phpDatei, true);

  xhr.upload.onprogress = function (e) {
    if (e.lengthComputable) {
      var percentComplete = (e.loaded / e.total) * 100;
      console.log(percentComplete + '% uploaded');
      alert('Succesfully uploaded');
    }
  };

  xhr.onload = function () {

  };
  xhr.send(fd);
  document.getElementById('landschaft').style.visibility = "hidden";
  document.getElementById('buildings').style.visibility = "hidden";
  document.getElementById('weather').style.visibility = "hidden";
  document.getElementById('myGallery').style.visibility = "hidden";
}


/*    function downloadURI(uri, name) {
            var link = document.createElement("a");
            link.download = name;
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            delete link;
        }
 */


/*document.getElementById('save').addEventListener('click', function () {
    var dataURL = stage.toDataURL();
    downloadURI(dataURL, 'stage.png');
}, false);*/