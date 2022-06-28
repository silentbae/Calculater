function add(){
var x=Number(document.getElementById("n1").value);
var y=Number(document.getElementById("n2").value);
var z=x+y;
document.getElementById("n3").value=z;
}
function sub(){
var x=Number(document.getElementById("n1").value);
var y=Number(document.getElementById("n2").value);
var z=x-y;
document.getElementById("n3").value=z;
}
function mul(){
var x=Number(document.getElementById("n1").value);
var y=Number(document.getElementById("n2").value);
var z=x*y;
document.getElementById("n3").value=z;
}
function div(){
var x=Number(document.getElementById("n1").value);
var y=Number(document.getElementById("n2").value);
var z=x/y;
document.getElementById("n3").value=z;
}
function rem(){
var x=Number(document.getElementById("n1").value);
var y=Number(document.getElementById("n2").value);
var z=x%y;
document.getElementById("n3").value=z;
}