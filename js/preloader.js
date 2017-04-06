var ctx = document.getElementById('lienzo').getContext('2d');
var al = 0;
var inicio = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height;
var diff;
function progreso(){
diff = ((al / 100) * Math.PI*2*10).toFixed(2);
ctx.clearRect(0, 0, cw, ch);
ctx.lineWidth = 10;
ctx.fillStyle = '#FFF';
ctx.strokeStyle = '#FFF';
ctx.textAlign = 'center';
ctx.font = 'bold 18px Letra2';
ctx.fillText(al+'%', cw*.5, ch*.5+5, cw);
ctx.beginPath();
ctx.arc(35*2, 35*2, 30*2, inicio, diff/10+inicio, false);
ctx.stroke();
if(al >= 100){
clearTimeout(sim);
document.getElementById('precarga').style.display="none";
document.getElementById('header').style.marginTop="1%";
document.body.style.overflow="auto";
window.scrollTo(0, 0);
}
al++;
};

var sim = setInterval(progreso, 10);

function miurl(uril) {
//location.href = uril;
window.open(uril,'_blank');
}
