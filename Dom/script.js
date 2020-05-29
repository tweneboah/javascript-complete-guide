//Select the element either tag or id or class

//GET ELEMEMNT BY ID -> only ID
var myVariable = document.getElementById("title");
//var myVariable = document.querySelector("#title");
myVariable.style.fontSize = "40px";
myVariable.style.color = "pink";
myVariable.style.backgroundColor = "black";
myVariable.style.padding = "30px";

//querySelector() for both id and class

//Class
var myVariable2 = document.querySelector(".nodeTitle");

//Select by Tag name

var myVariable3 = document.getElementsByTagName("p");

console.log((myVariable3[0].innerHTML = '<h1>"I have changed you ok?"</h1>'));

//DEMO
var text = document.querySelector(".score");
var score = 10;
var randomNumber = Math.random();
score = randomNumber;

text.innerHTML = score;

text.innerHTML = score;
console.log(randomNumber);
score = randomNumber;
console.log(text);

//ASSIGMENT

//1. Create a dummy blog post with title, body, author. After that use Js to style thetitle and use javascript to change the content of the author

//2. Create a box with green background and display a dynamic value into it whenever the page get refreshed
