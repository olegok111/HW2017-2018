var c = document.getElementById("my_canvas");
var ctx = c.getContext("2d");
var cx = 40;
var cy = 40;
var op = 0;
var g = 10;
var v = 0;
var dt = 0.2;

function draw() {
  ctx.beginPath();
  ctx.arc(cx,cy,40,0,2*Math.PI);
  ctx.stroke();
}

function motion_su() {
  ctx.clearRect(0, 0, 400, 400);
  if (cy >= 360) {
	v -= g*dt;
	cy -= v*dt;
  } else {
	v += g*dt;
	cy += v*dt;
  }
  window.requestAnimationFrame(draw);
}

function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

// wszixudfoiqewfgyo9zxy9tg
draw();
motion_su();
pausecomp(1000);
motion_su();