// //INPUT EVENTS
// let input = document.querySelector("input");
// let log = document.getElementById("log");
// let option = document.getElementById("option");

// console.log(option);
// //==onchange====

// // input.onchange = function (e) {
// //   console.log("Onchange", e);
// // };

// //==onblur=====

// //When input loses focus /when you click away

// // input.onblur = function (e) {
// //   console.log("Onblur", e);
// // };

// //===oninput======

// //Fires when input value changes
// // input.oninput = function (e) {
// //   console.log(e.target.value);
// // };

// option.onchange = function (e) {
//   console.log(e.target.value);
// };


//BASIC FORMS

//=== What's a form?====

/*
Web forms are one of the main points of interaction between a user and a web site or application. Forms allow users to enter data, which is generally sent to a web server for processing and storage
*/

//A web form's HTML is made up of one or more form controls

//The controls are 
//1. single or multi-line text fields, //2.dropdown boxes,
//3. buttons, 
//4. checkboxes, or
//5radio buttons, and are mostly created using the<input>



//=====Sending form data to your web server====

//form action
//form method
//input field name // This is used by server side to retrieve the values. It will be two value pairs


// const registerForm = document.forms['form-id'];

// registerForm.addeventListener('submit', (e) => {
//   e.preventDefault()
//   //Get the form input values

//   const userName = document.querySelector('input[type="text"]').value

// })

const form1 = document.forms[0];

form1.addEventListener('submit', (e) => {
  e.preventDefault();
  //email
  const email = document.querySelector('#firstName').name.value;
  //radio
  const radio1 = document.querySelector('#yes');
  //checkbox
  const checkboxes = document.querySelector('#on');

  const card = document.querySelector('#card');
  // console.dir(card.value)

  //file
  const file = document.querySelector('#file');
  // console.dir(file.value);
  //slider

  const money = document.querySelector('#money'); //slider
  //time
  const time = document.querySelector('#time');
  //date
  const date2 = document.querySelector('#date2');
  // COLOR
  const color = document.querySelector('#color');
  //date
  console.log(color.value)
})