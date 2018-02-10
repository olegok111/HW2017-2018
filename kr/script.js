// 
a = prompt("Введите а");
b = prompt("Введите b");
z = prompt("Введите знак");
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
	ans = "Неправильный знак";
}
alert(ans);