// const div1 = document.querySelector(".div1");

// const divCreated = document.createElement("div");
// const txtCr = document.createTextNode("Woow");

// divCreated.appendChild(txtCr);
// div1.insertBefore(div1, divCreated);

// console.log(div1);

const btn = document.querySelector(".createBtn");
const parentDiv = document.querySelector(".div1");
const newDiv = document.createElement("div");
const title = document.createElement("h1");

const createContent = document.createTextNode(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
);

const titleContent = document.createTextNode("React Js");
title.appendChild(titleContent);

//append to newly created div
newDiv.appendChild(createContent);

parentDiv.insertBefore(title, newDiv);

function addElement() {
  // create a new div element
  var newDiv = document.createElement("div");
  // and give it some content
  var newContent = document.createTextNode("Hi there and greetings!");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
