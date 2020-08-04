//=======

// Callback Functions
// Recall that JavaScript functions are first-class functions. We can do with functions just about everything we can do with other values -- including passing them into other functions! A function that takes other functions as arguments (and/or returns a function, as we learned in the previous section) is known as a higher-order function. A function that is passed as an argument into another function is called a callback function.

// We'll be focusing on callbacks in this section. Callback functions are great because they can delegate calling functions to other functions. They allow you to build your applications with composition, leading to cleaner and more efficient code.

// Let's jump right in!

function callAndAdd(n, callbackFn) {
  return n + callbackFn;
}

function returnsThree() {
  return 3;
}

//console.log(callAndAdd(6, returnsThree()));

//Under lesson 2 of callbacks video 2 this is how you called the function callAndAdd(6, returnsThree) and it worked so am asking is the right way to pass the callback function to a function or is like this callAndAdd(6, returnsThree())

function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}

function isPositive(n) {
  return n > 0;
}

//each([-2, 7, 11, -4, -10], isPositive);

//=======
// Array Methods

// Where have you probably seen callback functions used? In array methods! Functions are commonly passed into array methods and called on elements within an array (i.e., the array on which the method was called).

// Let's check out a couple in detail:

// forEach()
// map()
// filter()
// forEach()
// Array's forEach() method takes in a callback function and invokes that function for each element in the array. In other words, forEach() allows you to iterate (i.e., loop) through an array, similar to using a for loop. Check out its signature:

// array.forEach(function callback(currentValue, index, array) {
//   // function code here
// });

//The callback function itself receives the arguments: the current array element, its index, and the entire array itself.

// Let's say we have a simple function, logIfOdd(), that takes in a single number and logs it to the console if that number is an odd number:

function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(`${n} is an odd number`);
  } else {
    console.log(`${n} is not an odd number`);
  }
}

// logIfOdd(3);

//When 2 is passed into the function, logIfOdd() does not output anything to the console because 2 is an even number. However, when 3 is passed into the function, 3 _is_ logged to the console because it's an odd number.

// The logIfOdd() function works great for individual numbers, but what if we want to check an entire array and log only the odd numbers within it?

[1, 5, 2, 4, 6, 3].forEach(function logOdd(n) {
  if (n % 2 !== 0) {
    // console.log(n);
  }
});

//=========
// map()

// Array's map() method is similar to forEach() in that it invokes a callback function for each element in an array. However, map() returns a new array based on what's returned from the callback function. Check out the following:

//Map returns a new array

//The function that's passed to map() gets called for each item in the names array! The function receives the first name in the array, stores it in the name variable and returns its length. Then it does that again for the remaining two names.

// Remember that the key difference between forEach() and map() is that forEach() doesn't return anything, while map() returns a new array with the values that are returned from the function:

const names = ["David", "Richard", "Veronika"];

const nameLength = names.map((name) => {
  //console.log(name);
  return name.length;
});

//console.log(nameLength);

const arr = names.forEach((n) => {
  // console.log(n);
  return n;
});

//console.log(arr); //undefined

//DEMO

/* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */
const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000,
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
];

const newArr = musicData.map((albm) => {
  return `${albm.name} by ${albm.artist} sold ${albm.sales} copies`;
});

//=====

//filter()

// Array's filter() method is similar to the map() method:

// It is called on an array
// It takes a function as an argument
// It returns a new array
// The difference is that the function passed to filter() is used as a test, and only items in the array that pass the test are included in the new array. Consider the following example:

//====
//scope

// If you took Intro to Javascript, you learned about block scope vs. function scope. These determine where a variable can be seen in some code. Computer scientists call this lexical scope.

// However, there also exists another kind of scope called runtime scope. When a function is run, it creates a new runtime scope. This scope represents the context of the function, or more specifically, the set of variables available for the function to use.

// So what exactly does a function have access to?

//Scope
// A function's runtime scope describes the variables available for use inside a given function. The code inside a function has access to:

// The function's arguments.
// Local variables declared within the function.
// Variables from its parent function's scope.
// Global variables.
// Check out the following image that highlights a function's scope, then we'll take a look at a live example.

//======
//JavaScript is Function-Scoped

// You may be wondering why scope is so heavily associated with functions in JavaScript. Especially if you've had past experience in another programming language, this might seem a bit unusual (e.g., blocks in Ruby have their own scope)!

// This is all because variables in JavaScript are traditionally defined in the scope of a function, rather than in the scope of a block. Since entering a function will change scope, any variables defined inside that function are not available outside of that function. On the other hand, if there are any variables defined inside a block (e.g., within an if statement), those variables are available outside of that block.

// Let's see an example of how function-scoping in JavaScript works:

//======
//Summary

// When a function is run, it creates its own scope. A function's scope is the set of variables available for use within that function. The scope of a function includes:

// The function's arguments.
// Local variables declared within the function.
// Variables from its parent function's scope.
// Global variables.
// Variables in JavaScript are also function-scoped. This means that any variables defined inside a function are not available for use outside the function, though any variables defined within blocks (e.g. if or for) are available outside that block.

// When it comes to accessing variables, the JavaScript engine will traverse the scope chain, first looking at the innermost level (e.g., a function's local variables), then to outer scopes, eventually reaching the global scope if necessary.

// In this section, we've seen quite a few examples of a nested function being able to access variables declared in its parent function's scope (i.e., in the scope in which that function was nested). These functions, combined with the lexical environment it which it was declared, actually have a very particular name: closure. Closures are very closely related to scope in JavaScript, and lead to some powerful and useful applications. We'll take a look at closures in detail next!

//=====

//Functions Retain Their Scope - closure

//==
// We just looked at how function scope works and how a scope chain is created. Just to recap: when an identifier (i.e., a variable) is used, the JavaScript engine will check the scope chain to retrieve the value for that identifier. The identifier might be found in the local scope (either in the function or block). If it's not found locally, then it might exist in an outer scope. It'll then keep checking the next outer scope followed by the next outer scope until it reaches the global scope (if necessary).

// Identifier lookup and the scope chain are really powerful tools for a function to access identifiers in the code. In fact, this lets you do something really interesting: create a function now, package it up with some variables, and save it to run later. If you have five buttons on the screen, you could write five different click handler functions, or you could use the same code five times with different saved values.

// Let's check out an example of a function retaining access to its scope. Consider the remember() function below:

function remember(number) {
  return function () {
    return number;
  };
}

// console.log(remember(89)());

const button = document.getElementById("button");

button.addEventListener(
  "click",
  (function () {
    let count = 0;
    return function () {
      count += 1;
      if (count === 2) {
        console.log("I was passed");
        count = 0;
      }
    };
  })()
);
//try
// console.log(
//   (function (n) {
//     delete n;
//     return n;
//   })(2)
// );

//IIFE

const myFunctions = (function () {
  const hi = "h1";
  return function () {
    console.log(hi);
  };
})();

//myFunctions();
