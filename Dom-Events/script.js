//Events
//Keyboard
//mouse

var btn = document.querySelector(".btn");
var btn1 = document.querySelector(".btn1");

//Say hello - Click
btn.addEventListener("click", function () {
  console.log("Hi Hello");
});

//Hover
var parent = document.querySelector(".parent");
btn1.addEventListener("mouseover", function () {
  parent.style.backgroundColor = "red";
});
