
var img = document.getElementById('madi1');
var marginLeft = 0;
function moveRight () {
    
     marginLeft = marginLeft + 1;
     img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
     var interval = setInterval(moveRight,-100);
};


var img = document.getElementById('madi2');
var marginRight = 0;
function moveLeft () {
    
     marginRight = marginRight + 1;
     img.style.marginLeft = marginRight + 'px';
}
img.onclick = function(){
     var interval = setInterval(moveLeft,10);
};
var img = document.getElementById('madi3');
var marginLeft = 0;
function moveRight () {
    
     marginLeft = marginLeft + 5;
     img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
     var interval = setInterval(moveRight,-200);
};



var button = document.getElementById('counter');


button.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200 ){
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
       
   
   
        
        }
    }
   
};
request.open('GET','http://vikramguleria.imad.hasura-app.io/counter',true);
request.send(null);
};


var submit= document.getElementById('submit_btn');
submit.onclick = function() {
 
   
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200 ){
       
        var names = request.responseText;
   names = JSON.parse(names);
   var list = '';
   for (var i=0; i< names.length; i++) {
       list += '<li>' + names[i] + '</li>';
       
        }
       var ul=  document.getElementById('namelist');
        ul.innerHTML = list;
    }
        }
};

request.open('GET','http://vikramguleria.imad.hasura-app.io/submit-name?name='+ name,true);
request.send(null);

};

var submit= document.getElementById('submit_btn');
submit.onclick = function() {
 
   
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200 ){
       
        var passwords = request.responseText;
   passwords = JSON.parse(passwords);
   var list = '';
   for (var i=0; i< passwords.length; i++) {
       list += '<li>' + passwords[i] + '</li>';
       
        } 
        var ul=  document.getElementById('passwordlist');
        ul.innerHTML = list;
    }
        }
};
var nameInput = document.getElementById('name');
var name= nameInput.value;
var passwordInput = document.getElementById('password');
var password= passwordInput.value;
request.open('GET','http://vikramguleria.imad.hasura-app.io/submit-password?password='+ password,true);
request.send(null);

};