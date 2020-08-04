const car = {
  color: "red",
  year: 1992,
  isPreOwed: true,
};

const menu = {
  name: "Salted Caramel Ice Cream",
  price: 2.9,
  ingredients: ["butter", "ice cream", "salt", "sugar"],
};

//Accessing Object Properties

const bicycle = {
  color: "blue",
  type: "mountain bike",
  wheels: {
    diameter: 18,
    width: 8,
  },
  1: "React",
};

//Accessing
//1. dot notation
//console.log(bicycle.type);

//Bracket

//Dot Notation Limitations

/*
 *Note that while dot notation may be easier to read and write, it can't be used in every situation. For example, let's say there's a key in the above bicycle object that is a number. An expression like bicycle.1; will cause a error, while bicycle[1]; returns the intended value:

 bicycle.1;

// Uncaught SyntaxError: Unexpected number

bicycle[1];

// (returns the value of the `1` property)
 */

//
// console.log(bicycle["color"]);
// console.log(bicycle["wheels"]["diameter"]);

const mileTimes = [7.5, 6.25, 10.6, 8.88];

const greetings = {
  hello: {
    english: "hi",
    french: "bonjour",
    portuguese: "oi",
  },
  goodbye: {
    english: "bye",
    french: "au revoir",
    portuguese: "tchau",
  },
};

// console.log(`${greetings.hello.portuguese}`);
// console.log(`${greetings["hello"]["portuguese"]}`);

//CREATING OBJECT

//Creating Objects
// To create a new, blank (i.e., “empty”) object, you can use object literal notation, or the Object() constructor function. If you're not familiar with constructor functions, no need to worry! We'll jump into them in-depth in Lesson 3. For now, just know that the following two expressions are equivalent:

//======================
// Modifying Properties

// Keep in mind that data within objects are mutable, meaning that data can be changed. There are a few exceptions to this, but for now, let's see how we can modify/reassign existing properties in an object.

const cat = {
  age: 2,
  name: "Baily",
  meow: function () {
    console.log("Meow");
  },
  greet: function () {
    console.log(`Hell ${name}`);
  },
};

cat["meow"]; //Is there a way to use bracket notation to access method?
// cat.meow();

cat.age += 9;
cat.name = "Beny";

//=========
// Adding Properties

// Properties can be added to objects simply by specifying the property name, then giving it a value. Let's start off with a blank object, then add two properties:

const printer = {};

(printer.on = true), (printer.mode = "black and white");
printer["year"] = 2020;

printer.printMore = function () {
  console.log("Am printing");
};

//=========

//Removing Properties
// Recall that since objects are mutable, not only can we modify existing properties (or even add new ones) -- we can also delete properties from objects.

// Say that the printer object above actually doesn't have any modes (i.e., 'black and white', 'color', etc.). We can go ahead and remove that property from printer using the delete operator.

delete printer.mode;

//=======
//Passing Arguments

//Passing a Primitive
// In JavaScript, a primitive (e.g., a string, number, boolean, etc.) is immutable. In other words, any changes made to an argument inside a function effectively creates a copy local to that function, and does not affect the primitive outside of that function. Check out the following example:

function changeToEight(n) {
  n = 8;
}

let n = 7;
changeToEight(n);

// console.log(n);

//changeToEight() takes in a single argument, n, and changes it to 8. However, this change only exists inside the function itself. We then pass the global variable n (which is assigned the value 7) into the function. After invoking it, n is still equal to 7

//=====
//Passing an Object

//On the other hand, objects in JavaScript are mutable. If you pass an object into a function, Javascript passes a reference to that object. Let's see what happens if we pass an object into a function and then modify a property:

let originalObject = {
  favoriteColor: "red",
};

function setToBlue(obj) {
  obj.favoriteColor = "blue";
}

// setToBlue(originalObject);
// console.log(originalObject);

//In the above example, originalObject contains a single property, favoriteColor, which has a value of 'red'. We pass originalObject into the setToBlue() function and invoke it. After accessing originalObject's favoriteColor property, we see that the value is now 'blue'!

// How did this happen? Well, since objects in JavaScript are passed by reference, if we make changes to that reference, we're actually directly modifying the original object itself!

// What's more: the same rule applies when re-assigning an object to a new variable, and then changing that copy. Again, since objects are passed by reference, the original object is changed as well. Let's take a look at this more closely with another example.

// Consider this iceCreamOriginal object, which shows the amount of ice cream cones each instructor has eaten:

const iceCreamOriginal = {
  Andrew: 3,
  Richard: 15,
};

const iceCreamCopy = iceCreamOriginal;
iceCreamCopy.Andrew = 9;
//console.log(iceCreamOriginal);

//Since objects are passed by reference, making changes to the copy (iceCreamCopy) has a direct effect on the original object (iceCreamOriginal) as well. In both objects, the value of the Richard property is now 99.

//===========

//Comparing an Object with Another Object

const parrot = {
  group: "bird",
  feathers: true,
  chirp: function () {
    console.log("Chirp chirp!");
  },
};

const pigeon = {
  group: "bird",
  feathers: true,
  chirp: function () {
    console.log("Chirp chirp!");
  },
};

pigeon === parrot; //false

//What's going on here? As it turns out, the expression will only return true when comparing two references to exactly the same object. Using what we now know about passing objects, let's confirm this. To start off, let's create a new variable, myBird, and assign it to one of the objects above:

const myBird = parrot;

myBird === parrot; //true

//console.log(myBird);

//Summary
// Objects are commonly created with literal notation, and can include properties that point to functions called methods. Methods are accessed the same way as other properties of objects, and can be invoked the same way as regular functions, except they automatically have access to the other properties of their parent object.

// By default, objects are mutable (with a few exceptions), so data within them can be altered. New properties can be added, and existing properties can be modified by simply specifying the property name and assigning (or re-assigning) a value. Additionally, properties and methods of an object can be deleted as well with the delete operator, which directly mutates the object.

// We've modified objects quite a bit in this section, and even added new methods into them. In the very next section, we'll take a closer look at invoking these methods, as well as how these methods can directly access and modify an object itself!

//Functions vs. Methods

// At this point, we've mostly seen objects with properties that behave more like attributes. That is, properties such as color or type are data that describe an object, but they don't "do" anything. We can extend functionality to objects by adding methods to them.

// Say that we have a function, sayHello(), which simply logs a message to the console:

function sayHello3() {
  console.log("hi there");
}

const developer = {
  name: "Andrew",
};

developer.sayHello = function () {
  console.log("Say hi");
};

developer.code = "clean";
//console.log(developer);
//console.log(developer.code);
//developer.sayHello(); //undefined
//developer["sayHello"](); //using bracket notation
//How to access the method

function whoThis() {
  this.trickyish = true;
}

// console.log(whoThis());

const chamelon = {
  eye: 2,
  lookAround: function () {
    console.log(this.eye);
  },
};

//chamelon.lookAround();

//Passing Arguments Into Methods
//If the method takes arguments, you can proceed the same way, too:

const developer2 = {
  name: "Andrew",
  sayHello: function () {
    console.log("Hi there!");
  },
  favoriteLanguage: function (language) {
    console.log(`My favorite programming language is ${language}`);
  },
};

//developer2.favoriteLanguage("JavaScript");
// My favorite programming language is JavaScript'

//   Write an expression that invokes the alerter() function in the following array, myArray:

const myArray = [
  function alerter() {
    alert("Hello!");
  },
];

//myArray[0]();

//Write an expression that invokes the function referenced by the bell object's ring property:

const bell = {
  color: "gold",
  ring: function () {
    console.log("Ring ring ring!");
  },
};

// bell["ring"]();
// bell.ring();

//Call Methods by Property Name 💡
// We've been using anonymous functions (i.e., functions without a name) for object methods. However, naming those functions is still valid JavaScript syntax. Consider the following object, greeter:

//Named functions are great for a smoother debugging experience, since those functions will have a useful name to display in stack traces. They're completely optional, however, and you'll often read code written by developers who prefer one way or the other.

const greeter = {
  greet: function sayHello() {
    console.log("Hello!");
  },
};

//greeter.greet();

// 'Hello!'

//==============
//A Method Can Access the Object it was Called On
//=============

// Recall that an object can contain data and the means to manipulate that data. But just how can an object reference its own properties, much less manipulate some of those properties itself? This is all possible with the this keyword!

// Using this, methods can directly access the object that it is called on. Consider the following object, triangle:

const triangle = {
  type: "scalen",
  indentify: function () {
    console.log(this);
    console.log(`This is a ${this.type} triangle`);
  },
};

//Note that inside the identify() method, the value this is used. When you say this, what you're really saying is "this object" or "the object at hand." this is what gives the identify() method direct access to the triangle object's properties:

//When the identify() method is called, the value of this is set to the object it was called on: triangle. As a result, the identify() method can access and use triangle's type property, as seen in the above console.log() expression.

// Note that this is a reserved word in JavaScript, and cannot be used as an identifier (e.g. variable names, function names, etc.).

//triangle["indentify"]();
//triangle.indentify()

//TRY

//Let's make sure we're still on the same page! Write an expression that invokes the function referenced by the tree object's growOneFoot property:

const tree = {
  type: "redwood",
  leaves: "green",
  height: 80,
  age: 15,
  growOneFoot: function () {
    this.height += 1;
  },
};

console.log(tree.growOneFoot());

//TRY
///*

// Create an object called `chameleon` with two properties:

// 1. `color`, whose value is initially set to 'green' or 'pink'
// 2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
//     if it is 'green', or to 'green' if it is 'pink'

// */

const chameleon = {
  color: "green",
  changeColor: function () {
    let color = (this.color = "pink");
    return color;
  },
};

//=====SUMMARY=====

//The value of this💡
// Depending on how a function is called, this can be set to different values! Later in this course, we'll take a deep dive into different ways that functions can be invoked, and how each approach influences the value of this.

// Summary
// A method is a function property of an object. It is accessed the same way as any other property of the object (i.e., using dot notation or square bracket notation), and is invoked the same way as a regular function outside of an object (i.e., adding parentheses to the end of the expression).

// Since an object is a collection of data and the means to operate on that data, a method can access the object it was called on using the special this keyword. The value of this is determined when a method is invoked, and its value is the object on which the method was called. Since this is a reserved word in JavaScript, its value cannot be used as an identifier. Feel free to check out the links below for an additional look at methods and their relationship with this.

// We've spent a bit of time on this inside objects, but did you know that the value of this can have different meanings outside an object? In the next section, we'll take a close look at globals, their relationship with this, and the implications of using them.

//===============
//Things that Belong to Objects

// Previously, we saw that the properties and methods contained inside an object belong to that object. Let's drive this home with one quick example:

//========
//The window Object

// If you haven't worked with the window object yet, this object is provided by the browser environment and is globally accessible to your JavaScript code using the identifier, window. This object is not part of the JavaScript specification (i.e., ECMAScript); instead, it is developed by the W3C.

// This window object has access to a ton of information about the page itself, including:

// The page's URL (window.location;)
// The vertical scroll position of the page (window.scrollY')
// Scrolling to a new location (window.scroll(0, window.scrollY + 200); to scroll 200 pixels down from the current location)
// Opening a new web page (window.open("https://www.udacity.com/");)

console.log(window.location);
//console.log(window.open("https://www.udacity.com/"));

//TRY

//You've seen what this refers to in chameleon.lookAround(); and in whoThis(). Carefully review this code:
const car2 = {
  numberOfDoors: 4,
  drive: function () {
    console.log(this);
    console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  },
};

// const letsRoll = car2.drive; //This points to global object

// letsRoll();

//======
//Global Variables are Properties on window

// Since the window object is at the highest (i.e., global) level, an interesting thing happens with global variable declarations. Every variable declaration that is made at the global level (outside of a function) automatically becomes a property on the window object!

// Here we can see that the currentlyEating variable is set to 'ice cream'. Then, we immediately see that the window now has a currentlyEating property! Checking this property against the currentlyEating variable shows us that they are identical.

var currentlyEating = "ice cream";

window.currentlyEating === currentlyEating;
// true

//============
//globals and var, let, and const

// The keywords var, let, and const are used to declare variables in JavaScript. var has been around since the beginning of the language, while let and const are significantly newer additions (added in ES6).

// Only declaring variables with the var keyword will add them to the window object. If you declare a variable outside of a function with either let or const, it will not be added as a property to the window object.

// let currentlyEating = "ice cream";

// window.currentlyEating === currentlyEating;
// false!

//======
//Global Functions are Methods on window

// Similarly to how global variables are accessible as properties on the window object, any global function declarations are accessible on the window object as methods:

function learnSomethingNew() {
  window.open("https://www.udacity.com/");
}

window.learnSomethingNew === learnSomethingNew;
// true

//Declaring the learnSomethingNew() function as a global function declaration (i.e., it's globally accessible and not written inside another function) makes it accessible to your code as either learnSomethingNew() or window.learnSomethingNew().

//====
//Summary

// The window object is provided by the browser and is not part of the JavaScript language or specification. Any global variable declarations (i.e., those that use var) or global function declarations are added as properties to this window object. Excessive use of global variables is not a good practice, and can cause unexpected problems to accurately-written code.

// Whether you're working with the window object, or with an object you create yourself, recall that all objects are made up of key/value pairs. In the next section, we'll check out how to extract these individual keys or values!

//=======
//Object Methods

// Do you remember earlier when we used the Object() constructor function to create (i.e., instantiate) new objects with the new keyword?

//The Object() function actually includes a few methods of its own to aid in the development of your applications. These methods are:

// Object.keys()
// Object.values()
// Whether you're building logic in your code, or just writing a utility "helper" function, feel free to use these methods as necessary. Let's see how each of these work!

//====
//Object.keys() and Object.values()

// At its core, an object is just a collection of key/value pairs. What if we want to extract only the keys from an object? Say we have this object representing a real-life dictionary:

const dictionary = {
  car: "automobile",
  apple: "healthy snack",
  cat: "cute furry animal",
  dog: 90,
};

//Having a collection of just the words (i.e., the dictionary object's keys) may be particularly useful. While we could use a for...in loop to iterate through an object and build our own list of keys, it can get a bit messy and verbose. Thankfully, JavaScript provides an abstraction just for this!

// When Object.keys() is given an object, it extracts just the keys of that object, then returns those keys in an array:

console.log(Object.keys(dictionary));
//console.log(Object.values(dictionary));

//Support for Object.keys() and Object.values()
// Object.keys() has been around for quite a long time, so it is fully supported by every browser.

// Object.values(), on the other hand, is significantly newer. It was officially added to the language specification in 2017. However, just because it's been added to the specification, it necessarily doesn't mean your browser supports it yet!

//======
//Summary

// The Object() constructor function has access to several methods to aid in development. To extract property names and values from an object, we can use:

// Object.keys() returns an array of a given object's own keys (property names).
// Object.values() returns an array of a given object's own values (property values).
