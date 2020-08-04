//===========
//JavaScript Math Object
//============

//The JavaScript Math object allows you to perform mathematical tasks on numbers.

//console.log(Math.PI);

//==========
//Math.round()
//==========

//It returns to the nearest whole number

var x = 23.5422;
//console.log(Math.round(x));

//=======
//Math.pow()
//==========

//3 power 2

var y = 3;
var x = 2;
//console.log(Math.pow(y, x));

//=========
//Math.sqrt()
//=======

//It returns square root of a number
//sqaure root of 36

var x1 = 36;

//console.log(Math.sqrt(x1));

//=========
//Math.abs()
//=========

//It returns the absolute value(positive ) of a number thus convert -ve to +ve

var b = -4.9;

//console.log(Math.abs(b));

//===========
//Math.ceil()
//==========

//This returns a rounded whole number irrespective of the decimal point

var m = 5.023333;
//console.log(Math.ceil(m));

//============
//Math.floor()
//It doesn't take the decimal values into account
//============

var z = 5.99999;
//console.log(Math.floor(z));

//========
//Math.min()
//========

//console.log(Math.min(10, 30, 5));

/**
 * That is because Math.min or Math.max functions expect distinct variables and not an array. So in order to do that before ES6/ES2015 apply method was used
 */

var sales = [12, 90, 23, 8];

//Maximum
// var maxSales = Math.max.apply(Math, sales);

// console.log(maxSales);
// //Minimum
// var minSales = Math.min.apply(Math, sales);

// console.log(minSales);

//===============
//Math.random()
//================

//It  returns number from 0-1  0 inclusive and 1 EXCLUSIVE

var rand = Math.random() * 1;
//console.log(rand);

//Display random number from 0-10

var random1 = Math.random() * 35;

//Convert to whole integer
var convertedToWholeNumber = Math.floor(random1);
//console.log(convertedToWholeNumber);

//Make a tossing game

var playGame = function () {
  var number = Math.floor(Math.random() * 10);

  if (number === b) {
    alert("Huray you are a winner");
    console.log(number);
  } else {
    alert("Oh no You are a loose, try again");
    console.log(number);
  }
};

//0-10
//0-1
//30 -50
//2 -9

playGame();
