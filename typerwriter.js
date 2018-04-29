var i = 0;
var txt = ['Innovative Thinker','Inspired to design','Passionate to learn','Full Stack Developer','Bussiness Intelligence Developer','Also interested in..','Machine Learning','Deep Learning','Computer Vision','Internet of Things','Data Mining','Relational/Dimensional Modeling','Data Warehousing','Extract Transformation Load','Reporting'];
var speed = 20;
var j = -1;
var k = 0;
window.onload = heading2();

 function heading2(){
if(j==txt.length-1){
j =-1;
heading2();
}
else{
j++;
typeWriter();
setTimeout(typeDelete,3000);
}
}

function typeWriter() {
    if (i < txt[j].length) {
    document.getElementById("demo").innerHTML += txt[j].charAt(i);
    i++;
	setTimeout(typeWriter, speed);
  }
  
 
}

function typeDelete() {
  if (i > 0 ) {
    document.getElementById("demo").innerHTML = txt[j].slice(0,i);
    i--;
    setTimeout(typeDelete, speed);
  }
  else{
  document.getElementById("demo").innerHTML = " ";
  heading2();
  }
}


