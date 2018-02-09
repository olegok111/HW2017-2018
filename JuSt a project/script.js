var c = document.getElementById("my_canvas");
var ctx = c.getContext("2d");
var cx = 40;
var cy = 40;
var g = 10;
var dt = 0.25; // this argument changes mass indeed
var op = 0;
var v = 0;
var mode = 'down';

function draw() {
	op++;
	ctx.beginPath();
	ctx.arc(cx,cy,40,0,2*Math.PI);
	ctx.stroke();
	if (op % 2 === 0) {
	  ctx.clearRect(0, 0, 400, 400);
	}
	if (cy >= 360) {
		mode = 'up';
	}
	if (v === 0 && cy < 360) {
		mode = 'down';
	} else if (v === 0 && cy >= 360) {
		mode = 'stop';
	}
	if (mode === 'down') {
		v += g*dt;
		cy += v*dt/2;
	} else if (mode === 'up') {
		v -= g*dt;
		cy -= v*dt/2;
	}
	console.log(v);
	window.requestAnimationFrame(draw);
}

draw();
