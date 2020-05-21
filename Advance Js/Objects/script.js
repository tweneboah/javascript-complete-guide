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

var ghana = new Country("Ghana", 1957, "Nkrumah");
console.log(ghana.calcAge());
