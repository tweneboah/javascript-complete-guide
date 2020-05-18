//============
//Strings
//===========

//Data types
//1. strings =  ''
//numbers
//boolean

/**
 * Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
 */

var str = "Javascript";

//Methods

//1. Length

//The length property returns the length of a string:
//console.log(str.length);

//2. search()

//Find a string in a string

//This returns the postion of the first starting letter that you are searching

//It returns the index of the string if exist and negative other wise

//It start from zero and it takes spacing into consideration

//JavaScript counts positions from zero.
// 0 is the first position in a string, 1 is the second, 2 is the third ...

var mySentence = "Where are you going today";
var position = mySentence.indexOf("you");
//console.log(position);

//DEMO

// var post = "I love my family but there is one person is who is a fucking bitch";

// function checkNastyWords() {
//   //check if the post contains the fucking or bitch

//   var wordCheck = post.search("fucking");
//   console.log(wordCheck);

//   if ((wordCheck) => 0) {
//     alert("Please this word is prohibited");
//   }
// }

// checkNastyWords();

//3. slice

/**
  * slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

This example slices out a portion of a string from position 7 to position 12 (13-1)
*/

var str = "React, Node, Strapi, Express";

var res = str.slice(6, 11);

//=========
//The substring() Method
//===========

/**
 * 
substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.
 */

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

//===============
//Replacing String Content
//The replace() method replaces a specified value with another value in a string:
//==============

// var msg = "Please visit teklinco website";

// var msg2 = msg.replace("teklinco", "udemy");
// console.log(msg);
// console.log(msg2);

//==========
//The concat() Method
//concat() joins two or more strings:
//==============

// var text1 = "I Like";
// var text3 = "React Js";

// var res = text1.concat(" ", text3);

//==========
//String.trim()
//==========

//The trim() method removes whitespace from both sides of a string:

var msg = "    you are welcome    ";
var trimmed = msg.trim();

//console.log(trimmed);

//=======
//split()
//==========

//Converting a String to an Array
//A string can be converted to an array with the split() method:

var courses = "React, Node, Express, React-Native";

var convertedToArray = courses.split(", ");
//console.log(convertedToArray);

//===========
//Converting to Upper and Lower Case
//===========
var text1 = "Hello World!"; // String

var converted = text1.toUpperCase();
var converted2 = text1.toLocaleLowerCase();
console.log(converted2);
