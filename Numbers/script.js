//NUMBERS

//JavaScript has only one type of number.

// Numbers can be written with, or without, decimals:

//============
//1. NaN = Not a Number
//=============

//If your final answer is NaN it means your you are adding a string and a number

var a = 20;
var b = "apple";

var result = a - b;

//==========
//isNaN()
//=========

// var x = "phone";
// var y = 10;

// //Check x if it's a number

// var checked = isNaN(x);

// console.log(checked);

//example 2:

//Checking if the number from the user is a number or not

function addTwoNumbers(num1, num2) {
  var checkNum = isNaN(num1); //true/false
  var checkNum2 = isNaN(num2); //true/false

  if (checkNum || checkNum2) {
    alert("Please enter only numbers");
  } else {
    var result = num1 + num2;

    console.log(result);
  }
}

addTwoNumbers("No", 9);
