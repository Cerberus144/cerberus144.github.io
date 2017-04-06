function scroler() {
if (window.scrollY>1) { 
monor=window.scrollY;
monor-=50;
window.scrollTo(0, monor);
setTimeout("scroler()", 10);
}
}

function aparecer() {
var taje = document.getElementById('toTop');
oror=window.scrollY;
if (oror>20) { taje.style.opacity =0.5; }
if (oror>30) { taje.style.opacity =1; }
if (oror<10) { taje.style.opacity = 0.1; }
}
window.addEventListener("scroll", aparecer);

function toDown(donde) {
var a=window.scrollY;
var b=document.getElementById(donde).offsetTop;
if (a<b){ a+=35; 
window.setTimeout(function(){toDown(donde)}, 1);
}else{
a=b;
}
window.scrollTo(0, a);
}

function toUp(donde) {
var a=window.scrollY;
var b=document.getElementById(donde).offsetTop;
if (a>b){ a-=35; 
window.setTimeout(function(){toUp(donde)}, 1);
}else{
a=b;
}
window.scrollTo(0, a);
}

function toBt1(){
var a = document.getElementById('quienes').offsetTop;
var b = window.scrollY;
if (b<a){toDown('quienes'); }
if (b>a){toUp('quienes');}
}
function toBt2(){
var a = document.getElementById('porque').offsetTop;
var b = window.scrollY;
if (b<a){toDown('porque'); }
if (b>a){toUp('porque');}
}
function toBt3(){
var a = document.getElementById('vision').offsetTop;
var b = window.scrollY;
if (b<a){toDown('vision'); }
if (b>a){toUp('vision');}
}
function toBt4(){
var a = document.getElementById('mision').offsetTop;
var b = window.scrollY;
if (b<a){toDown('mision'); }
if (b>a){toUp('mision');}
}
function toBt4b(){
var a = document.getElementById('necesidades').offsetTop;
var b = window.scrollY;
if (b<a){toDown('necesidades'); }
if (b>a){toUp('necesidades');}
}

function toBt5(){
var a = document.getElementById('sumate').offsetTop;
var b = window.scrollY;
if (b<a){toDown('sumate'); }
if (b>a){toUp('sumate');}
}


