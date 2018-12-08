<!DOCTYPE html>
<html>
<head>

 <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Kinderspiel</title>
        <meta name="" content="">
        <link rel="stylesheet" href="style.css">


 


</head>
<body>
 <section>
    
<div id="gallery"> <div id="albummenubox">
  <h3>My Photo Albums</h3>
  <a href="#" onclick="return false" onmousedown="ajax_json_gallery('images1')">Gallery 1</a><br>
  <a href="#" onclick="return false" onmousedown="ajax_json_gallery('images2')">Gallery 2</a><br>
  <a href="#" onclick="return false" onmousedown="ajax_json_gallery('images3')">Gallery 3</a><br>
</div><div id="thumbnailbox"></div></div>



      
           
    
	
    
        <div id="drawingTools">
            <div id="colors">
            <button id="black" onclick="changeColor('black')"></button>
            <button id="yellow" onclick="changeColor('yellow')"></button>
            <button id="pink" onclick="changeColor('pink')"></button>
            <button id="green" onclick="changeColor('green')"></button>
            <button id="blue" onclick="changeColor('blue')"></button>
            </div>
        <div id="otherTools">
            <button id="clearCanvas" onclick="clearCanvas()">C</button>
           
        
       
            </div>
            
           </div>
     
    <canvas id="canvas"  width="800" height="500"></canvas>

       </section>
      <script src="./script.js"></script>   
    <script>ajax_json_gallery('images1');</script>
    </body>
</html>
