a = prompt("input a");
b = prompt("input b");
z = prompt("input sign");
a = Number(a);
b = Number(b);
var ans;
if (z==="+") {
	ans = a+b;
} else if (z==="-") {
	ans = a-b;
} else if (z==="*") {
	ans = a*b;
} else if (z==="/" || z==="\\") {
	ans = a/b;
} else {
	ans = "incorrect sign";
}
alert(ans);