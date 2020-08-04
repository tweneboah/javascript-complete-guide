<<<<<<< HEAD
//child
//childNode returns all including all whitespaces

//lastChild = gives textNode
//lastChild = gives textNode

// const result = document.querySelector(".result");

// console.log("childNodes", result.childNodes);
// console.log("children", result.children);
// console.log("firstChild", result.firstChild);
// console.log("lastChild", result.lastChild);

//========================
//parentElement
//=========================

//Able to access parent element

// const heading = document.querySelector("h2");

//console.log(heading.parentElement.parentElement); //Chaining

//parent can be div li, body, html
// const parent = heading.parentElement;
// parent.style.color = "red";
// //console.log(parent);

//===============================
//previousSibling
//nextSibling
//return whitespace

// const first = document.querySelector(".first");
// first.nextSibling.nextSibling.style.color = "yellow";
// //console.log(first.nextSibling.nextSibling);

// const last = document.querySelector(".last");

//console.log(last.previousSibling.previousSibling);

//================
//TextContent
//nodeValue
//innerHTML
//===============
//All these returns content within elements

//===========================
//getAttribute and setAttribute
//===========================

// const classValue1 = document.querySelector(".first");
// const classValue2 = document.querySelector("#special");
// const parent = document.querySelector(".parent");

// //Adding attribute like class Name dynamically
// const addingAttribute = classValue1.nextElementSibling.nextElementSibling;

// addingAttribute.setAttribute("class", "second");
// console.log(parent);
// console.log(classValue1.getAttribute("class"));
// console.log(classValue2.getAttribute("id"));

//DEMO SOLUTION

const usersList = document.querySelectorAll("li");

usersList.forEach(function (user) {
  const txt = user.textContent;
  if (txt.length > 6) {
    user.setAttribute("class", "success");
  } else {
    user.setAttribute("class", "warning");
  }
});

//==========================
//CLASSLIST AND CLASSNAME
//===========================

//className: remove, add class names
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

//check for  className
const classValue = first.className;
//console.log(classValue);

//add classname;
second.className = "coloors1";
// third.className = "coloor2";

//One fallback for className is that it can only take one classname the better option is classList

//ClassList
third.classList.add("txt", "coloor2"); //adding multiple classNames

//Remove Class
//third.classList.remove("txt");

//Check if it has a class
let result = third.classList.contains("txt");
// console.log(result);

//==========================================
//createElement / createTextNode/appendChild
//=========================================

// const result2 = document.querySelector(".result2");

// //create empty div
// const bodyDiv = document.createElement("div");
// //create text node
// const text = document.createTextNode("Am a simple body div");
// //append to div created
// bodyDiv.appendChild(text);
// //attach to body to appear
// document.body.appendChild(bodyDiv); //it add to the last element

// //create a heading

// const heading3 = document.createElement("h1");
// const heading3Text = document.createTextNode("My heading");
// heading3.appendChild(heading3Text);
// result2.appendChild(heading3);

//============================
//INSERT BEFORE
//============================

//insertBefore('element', 'location')

const result2 = document.querySelector(".result2");

//create empty div
const bodyDiv = document.createElement("div");
//create text node
const text = document.createTextNode("Am a simple body div");
//append to div created
bodyDiv.appendChild(text);
//attach to body to appear
document.body.insertBefore(bodyDiv, result2);

//==============================
//EVENTS
//==============================

const copy = document.querySelector(".copy");
// console.log(copy);

// copy.addEventListener("copy", function (e) {
//   console.log(e.type === "copy");
//   if (e.type === "copy") {
//     alert("Why are copying my site");
//   }
// });

// window.addEventListener("keydown", function (e) {
//   console.log(e.code);
// });

// window.addEventListener("keydown", function (e) {
//   console.log(e);
// });

navigator.getBattery().then(function (battery) {
  console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));

  battery.addEventListener("chargingchange", function () {
    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  });
});

navigator.getBattery().then(function (battery) {
  console.log("Battery level: " + battery.level * 100 + " %");

  battery.addEventListener("levelchange", function () {
    console.log("Battery level: " + battery.level * 100 + " %");
  });
});
=======
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
>>>>>>> 4ae54ba2b7475e6b51b70f032b2f7f4b3f255909
