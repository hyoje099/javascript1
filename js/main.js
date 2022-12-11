const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
let ballX = ctx.canvas.width/2;
let ballY = ctx.canvas.height/2;
let dx =2;
let dy =2;
function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX,ballY,10,0,Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = "red";
    ctx.closePath();
    ballX += dx;
    ballY += dy;
    if(ballX >= canvas.width || ballX < 0 ){
        dx = -dx;
    }
    
    if(ballY >= canvas.height|| ballY<0){
        dy = -dy;
    }
}


function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
}
setInterval(draw,5);