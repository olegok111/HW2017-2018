// 
a = prompt("������� �");
b = prompt("������� b");
z = prompt("������� ����");
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
	ans = "������������ ����";
}
alert(ans);