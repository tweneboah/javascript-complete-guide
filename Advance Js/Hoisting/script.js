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

console.log(sayMyname());

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
