var saveButton=document.getElementById('save');
var canvas = document.getElementById('canvas');
var data = canvas.toDataURL();
saveButton.addEventListener('click',saveImage);

function saveImage(){
  var request= new XMLHttpRequest();  
    request.onreadystatechange=function(){
        if(request.readyState==4 && request.status==200){
            var response=request.responseText;
      window.open(response,'_blank', 'location=0, menubar=0');
        }
    }
    request.open('POST', 'save.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send('img='+data);
}