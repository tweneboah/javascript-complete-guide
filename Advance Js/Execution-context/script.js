//Execution context
//Whenever js sees () it create an execution context
//Js will first create a global execution where all the syacks will run
//When the final code runs global context get off

//====================
//Global Execution context
//This create 2 things
//1. global object = window
//2. this
//this === window
//We can add variables to our global object. Any variable / function you create attach to window object
//=--------------

function printName() {
  return "Prince";
}

function findName() {
  return printName();
}

function sayMyname() {
  return findName();
}

//console.log(sayMyname());

//=============
//PHASES
//=============

//1. Creation Phase: this and window. this is created automatically by js

//second phase: Execution phase; where our code runs
//When code is run on js engine, a global execution context is created and when you run your function execution phase is also created

//==========
//LEXICAL ENVIRONMENT

//This is where we write our code. This checks during compiling
//If you write a function inside a function it's lexical to that function
//Our first lexical environment is the global scope = window
//==========

//Execution context will check which lexical environment is our code is runing
function add() {
  //Lexical to add
  function sub() {
    return "30";
  }
  return "Prince";
}

//=========
//HOISTING
//During createion phase thus window/global object we have hoisting
//Is moving variables and functions to the top of their respective environment
//variables are partially hoisted and function declaration are hoisted
//during creation phase js create memory for your variables and functions
//Varible is partially hoisted because when you create a variable js will first assign undefined because it stores what's on the left hand side
//function is completely hoisted because it stores both right and left side
//When Js sees a var/function then it will hoist it, thus moving to the top during execution
//let and const are not hoisted
////function expression are not hoisted
//============

// console.log(teddy);
// sing();
// var teddy = "bear";
// function sing() {
//   console.log("beautiful lala");
// }

// //function expression
// var sing2 = function () {
//   console.log("Azonto");
// };
// sing2();


var one = 1;
var one = 2;

