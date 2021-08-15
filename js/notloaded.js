let fly= document.getElementsByClassName("f")[0];
let mx = document.querySelector("body").clientWidth;
let my = window.screen.height*0.9;
let px;
let py;
let nx,ny;
let kill=document.getElementsByClassName("kill")[0];
kill.style.display="none";
//for correction in angle as atan gives value b/w -pi/2 to pi/2
function correction_in_angle(angle,dy,dx){
if((dx<0 && dy<0) ) angle=180+angle;  
  else if(dx<0 && dy>=0) angle=180-angle;  
  else if(dx>=0 && dy<0)angle=360-angle;
return angle;}
setInterval(()=>{
px=(fly.style.left=="")?0:parseInt(fly.style.left);
    py=(fly.style.top=="")?0:parseInt(fly.style.top);
 nx=(Math.random()*mx).toFixed();
ny=(Math.random()*my).toFixed();
let dx=nx-px,dy=ny-py; 
let angle=correction_in_angle((Math.atan(Math.abs(dy)/Math.abs(dx))*(180/Math.PI)),dy,dx);
fly.style.transform=`rotateZ(${angle}deg)`;
fly.style.left=`${nx}px`;
fly.style.top=`${ny}px`;
  

},1000)

const onMouseMove = (e) =>{
  if(kill.style.display=="none")kill.style.display="grid";
  kill.style.left = e.pageX + 'px';
  kill.style.top = e.pageY + 'px';
}

