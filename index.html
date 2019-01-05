<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Kinderspiel</title>
    <meta name="" content="">
    <link rel="stylesheet" href="style.css">
       <script src="https://unpkg.com/konva@2.4.2/konva.min.js"></script>
      <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
      <script src="https://rawgit.com/konvajs/greensock-plugin/master/KonvaPlugin.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js"></script>
    <script src="https://www.snorkl.tv/dev/libs/greensock/plugins/ColorPropsPlugin.min.js"></script>
  </head>

  <body>
    <section>

      <div id="gallery">
        <div id="albummenubox">
          <h3>My Photo Albums</h3>
          <a href="#" onclick="return false" onmousedown="ajax_json_gallery('images1')">Landschaft</a><br>
          <a href="#" onclick="return false" onmousedown="ajax_json_gallery('images2')">Weather</a><br>
            <a href="#" onclick="return false" onmousedown="ajax_json_gallery('images3')">Buildings</a><br>
          <a href="#" onclick="return false" onmousedown="ajax_json_gallery('upload')">My Gallery</a><br>
        </div>
        <div id="thumbnailbox"></div>
      </div>

      <div id="paintingContainer">
        <div id="drawingTools">
          <div class="lightBorder">
              <div id="design">
         <button id="maedchen" ><img width="40" height="40" src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/girl.png"  />Girl</button>
               <button id="junge" >
                   <img width="40" height="40" src="https://www.emoji.co.uk/files/apple-emojis/smileys-people-ios/119-boy.png"  />Boy</button>
        <label>Fill Color: <input id="fillColor" type="color" value="#24B0D5"></label>
             <button id="animation_button" >Animate</button>
            
              <button id="landschaft" onclick="uploadEXGallery('upload_data_landschaft.php')">Nature</button>
              <button id="weather" onclick="uploadEXGallery('upload_data_weather.php')">Weather</button>
              <button id="buildings" onclick="uploadEXGallery('upload_data_buildings.php')">Buildings</button>
              <button id="myGallery" onclick="uploadEXGallery('upload_data.php')">My Gallery</button> 
              </div>
    </div>
            
            <div>
            
        </div>
            <form method="post" accept-charset="utf-8" name="form1">
            <input name="hidden_data" id='hidden_data' type="hidden"/>
        </form>
          <div id="otherTools">
            <button id="clearCanvas" onclick="clearCanvas()">C</button>
              <button id="brushSize1" onclick="changeBrushSize(5)">1</button>
              <button id="brushSize2" onclick="changeBrushSize(20)">2</button>
              <button id="brushSize3" onclick="changeBrushSize(30)">3</button>
              <button id="brushSize4" onclick="changeBrushSize(40)">4</button><br/>
              
          </div>
            <div  id="otherTools1">
                  <button id="fillCanvas" onclick="fillCanvas()">F</button>
              <button id="buttBrush" onclick="changeBrushStyle('butt')">Butt</button>
              <button id="squareBrush" onclick="changeBrushStyle('square')">Square</button>
              <button id="roundBrush" onclick="changeBrushStyle('round')">Round</button>
              <button id="openFile" onclick="triggerClick()">Open</button>
               <button id="uploadFile" onclick="uploadEx()">Download</button></div>
        </div>
          <div id="wrapper">
              
    <div id="container">

              <canvas id="canvas1"></canvas></div>
              
    <div id="zweite_spalte">
         
        <div id="zweite_spalte_button"><button >Add</button></div>
	<canvas id="canvas"></canvas>
         
       
    </div>
</div>  <!-- hier ist das Ende des Elements Wrapper -->
       
      </div>
        
        <input id="file" type="file" accept="image/*" />
        
    </section>

    <script src="./script.js"></script>
    <script>ajax_json_gallery('images1');</script>
        <script>
         var image = new Image();
    
   
            
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
            
            
function putinframe(src){
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
        if(width && height) {
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
            opacity:0.0
        });

        anchor.on('dragmove', function() {
            update(this);
            layer.draw();
        });
        anchor.on('mousedown touchstart', function() {
            group.setDraggable(false);
            this.moveToTop();
        });
        anchor.on('dragend', function() {
            group.setDraggable(true);
            layer.draw();
        });
        // add hover styling
        anchor.on('mouseover', function() {
            var layer = this.getLayer();
            document.body.style.cursor = 'pointer';
            this.setStrokeWidth(4);
            layer.draw();
        });
        anchor.on('mouseout', function() {
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
        width: 93,
        height: 104
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
    addAnchor(yodaGroup, 93, 0, 'topRight');
    addAnchor(yodaGroup, 93, 104, 'bottomRight');
    addAnchor(yodaGroup, 0, 104, 'bottomLeft');

    

    var imageObj2 = new Image();
    imageObj2.onload = function() {
        yodaImg.image(imageObj2);
        layer.draw();
    };
    imageObj2.src = src;
document.getElementById('animation_button').addEventListener('click',function(){
   
    
    if(src.slice(0,7)=='images1'){
        var imageObj2 = new Image();
    imageObj2.onload = function() {
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
    red:200,
            green: 0,
            easing: Konva.Easings.EaseInOut
        });
setTimeout(function() {
   
        tween1.play();
    }, 4000);
        
    } else if(src.slice(0,7)=='images2'){
   
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
        
  document.getElementById('zweite_spalte_button').addEventListener('click',function(){
   
    var canvas=document.getElementById('canvas');
var tmp=canvas.toDataURL();
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
        if(width && height) {
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
            opacity:0.0
        });

        anchor.on('dragmove', function() {
            update(this);
            layer.draw();
        });
        anchor.on('mousedown touchstart', function() {
            group.setDraggable(false);
            this.moveToTop();
        });
        anchor.on('dragend', function() {
            group.setDraggable(true);
            layer.draw();
        });
        // add hover styling
        anchor.on('mouseover', function() {
            var layer = this.getLayer();
            document.body.style.cursor = 'pointer';
            this.setStrokeWidth(4);
            layer.draw();
        });
        anchor.on('mouseout', function() {
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
        width: 93,
        height: 104
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
    addAnchor(yodaGroup, 93, 0, 'topRight');
    addAnchor(yodaGroup, 93, 104, 'bottomRight');
    addAnchor(yodaGroup, 0, 104, 'bottomLeft');

    

    var imageObj2 = new Image();
    imageObj2.onload = function() {
        yodaImg.image(imageObj2);
        layer.draw();
    };
    imageObj2.src = tmp;
    
}, false);
             
      document.getElementById('junge').addEventListener('click',function(){
    document.querySelector("body").style.backgroundImage = "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-022.jpg')";;
            document.querySelector("body").style.backgroundRepeat='repeat';
           document.getElementById("gallery").style.background="#B0E0E6"; 
    document.getElementById("thumbnailbox").style.background="#B0E0E6";
          document.getElementById("canvas").style.background="#F0F8FF";
          document.getElementById("canvas1").style.background="#F0F8FF";
          document.getElementById("container").style.background="#F0F8FF";
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
            
        document.getElementById('maedchen').addEventListener('click',function(){
   
      document.querySelector("body").style.backgroundImage = "url('https://www.have-fun-with-quilts.com/WebRoot/Store5/Shops/64266164/5207/6883/7EE8/CAC2/FB86/C0A8/28BC/E11C/zart_rosa.JPG')";;
            document.querySelector("body").style.backgroundRepeat='repeat';
            document.getElementById("gallery").style.background="#faebd7";
    document.getElementById("thumbnailbox").style.background="#faebd7";
             document.getElementById("canvas").style.background="#F0F8FF";
          document.getElementById("canvas1").style.background="#F0F8FF";
            document.getElementById("container").style.background="#F0F8FF";
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
            document.getElementById('file').addEventListener('change', function(e){
    URL=URL || webkitURL;
   var temp=URL.createObjectURL(e.target.files[0]);
    var image=new Image();
    image.src=temp;
    image.addEventListener('load', function(){
        imageWidth=image.naturalWidth; 
        imageHeight=image.naturalHeight;
        newImageWidth=imageWidth;
        newImageHeight=imageHeight;
        originalImageRatio=imageWidth / imageHeight;
        if(newImageWidth>newImageHeight && newImageWidth > 800){
            newImageWidth=800;
            newImageHeight=800 / originalImageRatio;
        }
        
         if((newImageWidth >= newImageHeight || newImageHeight >= newImageWidth) && newImageHeight > 600){
            newImageHeight=600;
            newImageWidth=600 * originalImageRatio;
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
        if(width && height) {
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
            opacity:0.0
        });

        anchor.on('dragmove', function() {
            update(this);
            layer.draw();
        });
        anchor.on('mousedown touchstart', function() {
            group.setDraggable(false);
            this.moveToTop();
        });
        anchor.on('dragend', function() {
            group.setDraggable(true);
            layer.draw();
        });
        // add hover styling
        anchor.on('mouseover', function() {
            var layer = this.getLayer();
            document.body.style.cursor = 'pointer';
            this.setStrokeWidth(4);
            layer.draw();
        });
        anchor.on('mouseout', function() {
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
        width: 93,
        height: 104
    });

   

    var yodaGroup = new Konva.Group({
        x: 20,
        y: 110,
        draggable: true
    });
    layer.add(yodaGroup);
    yodaGroup.add(yodaImg);
    addAnchor(yodaGroup, 0, 0, 'topLeft');
    addAnchor(yodaGroup, 93, 0, 'topRight');
    addAnchor(yodaGroup, 93, 104, 'bottomRight');
    addAnchor(yodaGroup, 0, 104, 'bottomLeft');

   

    var imageObj2 = new Image();
    imageObj2.onload = function() {
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
                function uploadEXGallery(phpDatei){
               var dataURL = stage.toDataURL();
                document.getElementById('hidden_data').value = dataURL;
                var fd = new FormData(document.forms["form1"]);
 
                var xhr = new XMLHttpRequest();
                xhr.open('POST', phpDatei, true);
 
                xhr.upload.onprogress = function(e) {
                    if (e.lengthComputable) {
                        var percentComplete = (e.loaded / e.total) * 100;
                        console.log(percentComplete + '% uploaded');
                        alert('Succesfully uploaded');
                    }
                };
 
                xhr.onload = function() {
 
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
            
  </script>
  </body>
</html>
