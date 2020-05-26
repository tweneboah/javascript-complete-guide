//Objects

//Ways of creating objects

//We want to a have blueprint

//Constructor
//Blueprint (Parent) => Child (instance);

//Ways of creating Objects

//1. Function Constructor = Blueprint

var Person = function (name, yearOfBirth, job) {
  //The above arguments will be the properties of the object
  //Bind these variables the instance of the object
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calcAge = function () {
    console.log(2020 - this.yearOfBirth);
  };
};

//Create an instance of object out of the constructor function

var enkansah = new Person("Enkansah", 1988, "Programmer");

//New = brand new object is created
//The new object makes it posible to point this keyword not to the global but instead to the new object created
// The new has all the properties we passed into the function constructor

// console.log(enkansah);

//console.log(enkansah);

//display calcAge function
//console.log(enkansah.calcAge());

//Prototype/Inheritance

var Country = function (name, independentDate, founder) {
  this.name = name;
  this.independentDate = independentDate;
  this.founder = founder;
  this.sayHello = function () {
    console.log("Hi how are");
  };
};

//Assuming we want to 10 functionss with 100 lines of code it will make our constructor function clumsy thats why we use inheritance

//We have to add the methods and properties we want to inherit to the constructor prototype

// var ghana = new Country("Ghana", 1957, "Nkrumah");
// console.log(ghana);

// var togo = new Country("Togo", 1950, "JB");
// console.log(togo);
// console.log(ghana.founder);
// console.log(ghana.independentDate);
// console.log(ghana.name);
// console.log(ghana.sayHello());

//How to add aditional method/functions/properties objects

Country.prototype.culture = "Hand shaking";
Country.prototype.school = "KNUST";

Country.prototype.calcAge = function () {
  console.log("This is a method for calculating age");
};

///read
// install npm install counrty

var ghana = new Country("Ghana", 1957, "Nkrumah");
//console.log(ghana.calcAge());

//Primitive and objects

//Primitive holds their value in variable but object is not but it it's pass by reference thus it doesn't contain the object
//Object variables does not hold their actual data but it points to the object in memory

//strings
//numbers
//boolean

//Primitive
//All primitive variables holds their own value

var a = 23;

var b = a;

b = 40;

// console.log("a", a);
// console.log("b", b);

//Ojects
//objects are passed by reference

var obj3 = {
  name: "John",
  age: 40,
};

var obj4 = obj3;

obj4.name = "Emma";
// console.log("obj3", obj3);
// console.log("obj4", obj4);

//Passing objects to functions

var age = 45;

var person = {
  name: "Ben",
  city: " Kumasi",
};

//Passed in primitive value
function change1(a) {
  return a;
}
//calling the function
var result = change1(age);
//console.log(result);

//Passed in object
function change2(obj) {
  return obj;
}

var result2 = change2(person);
//console.log(result2);

//=============
//FIRST CLASS FUNCTIONS // HOC(High Order function)

//A function is an instance of an object hence it behaves like an object

//Store into a variable = function expression

//Passing a function as an argument == callback == hoc

//return a function from function

//Funtion stored into a varibale
var add = function (a, b) {
  return a + b;
};

//Anonymous function: Is a function without a name
var result = add(30, 10);
//console.log(result);

//passing a function as an argument
function greeting() {
  console.log("Hi how are you");
}

function welcome(fn) {
  console.log("You are welcome");
  console.log(fn);
}

console.log(welcome(greeting()));
