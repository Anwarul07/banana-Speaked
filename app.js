// console  using directly
console.log("console using directly");

// console  using as variable
var nya = "console using as a var ";
console.log(nya);

// alert directly

 alert("aler using directly");

//alert as a variable
var vara="this is alert using var"
alert(vara);

// I/O using directly
prompt(" what is your  father's name "+"direct i/o method");
alert("ok   direct method is sucess as ! Mr ");

// I/O using as variable
var ask = prompt(" what is your name  using var ");
alert("ok   Permission Granted  using var ! Mr " + ask);

var ask = prompt(" what is your Identity  var var");
var reply= "ok   Permission Granted  var var ! Mr " + ask
alert(reply);

var bttn = document.querySelector("#btn");
bttn.addEventListener("click", clickHandler);

function clickHandler() {
  console.log("clicked!");
}