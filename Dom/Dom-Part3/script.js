//innerHTML
//setAttribute
//getAttribute
//classList
//dataset
//querySelector
//querySelectorAll
//getElementById
//createTextNode
//createElement
//appendChild

//=====
//innerHTML
//=======

//Select the element
var h1 = document.querySelector("h1");
var txt = document.querySelector(".txt");
var btn = document.querySelector(".btn");
//Change the text

h1.innerHTML = "InnerHTML";
txt.innerHTML =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

btn.addEventListener("click", function () {
  btn.innerHTML = "I have changed you";
});

//setAttribute

var link = document.querySelector("a");

//setAttribute
link.setAttribute("href", "http://www.google.com");
link.setAttribute("class", "link");

//getAttribute
var attrName = link.getAttribute("class");

// if (attrName) alert("Yes it exist");

if (attrName) {
  link.setAttribute("class", "link2");
}

//ClassList
//add
//remove

var child = document.querySelector(".child");
var parent = document.querySelector(".parent");

//using function
// parent.addEventListener("click", function () {
//   child.classList.add("txt1", "txt2", "txt3", "txt4");
// });

child.classList.add("txt1", "txt2", "txt3", "txt4");

//remove

child.addEventListener("click", function () {
  child.classList.remove("txt1");
});

//createElement // appendChild //createTextNode

//select the parent
var parent2 = document.querySelector(".parent2");
//create the element
var h1Text = document.createElement("h1");
var para = document.createElement("p");
//create a content to be added to the newly created element
var h1TextContent = document.createTextNode("This is my new content");

var paraContent = document.createTextNode(
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
);
//add content to the newly created element
h1Text.appendChild(h1TextContent);
para.appendChild(paraContent);
//append the created element to the parent
parent2.appendChild(h1Text);
parent2.appendChild(para);

console.log(parent2);
