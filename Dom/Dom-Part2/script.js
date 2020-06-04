//TextContent
//innerHTML
//nodeValue

//These returns content within elements/HTML

//Select

// var content = document.querySelector(".content");
// content.innerHTML = "<h1>I have changed you</h1>";
// content.textContent = "Another Changed";

//===========================
//getAttribute and setAttribute
//===========================

//Dynamically adding css to yout app

// var para = document.querySelector(".paragraph");
// para.setAttribute("class", "text");
// para.styles.color = "red";
// para.style.color = "white";
// para.style.fontSize = "30px";
// para.style.backgroundColor = "red";
// para.style.border = "3px solid yellow;";
// console.log(para);

//QUERYSLECTORALL
//This returns nodelist []

var p1 = document.querySelectorAll(".c");
// var p1Selected = p1[0];
// var p2Selected = p1[1];
// p1Selected.style.color = "green";
// p2Selected.style.color = "green";

p1.forEach(function (h1Elements) {
  h1Elements.style.color = "red";
  h1Elements.style.backgroundColor = "black";
});
