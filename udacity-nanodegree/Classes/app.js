function Developer(name) {
  this.favoriteLanguage = "Javascript";
  this.name = name;
}

const dev1 = new Developer("Emmanuel");

// console.log(dev1 instanceof Developer);

function Cat(name) {
  this.name = name;
  this.sayName = function () {
    // console.log(this);
    console.log(`Meow! my name is ${this.name}`);
  };
}

// const cat1 = new Cat("Binny");
// cat1.sayName();
// console.log(cat1);

const dog = {
  bark: function () {
    console.log("Woof");
  },
  barkTwice: function () {
    this.bark();
    this.bark();
  },
};
//dog.barkTwice();

//bind and apply

//More Ways to Invoke Functions
// We've seen various ways to invoke functions, each with their own implications regarding the value of this. There are yet two more ways to invoke a function: either using the call() or the apply() methods.

// Each method can be directly invoked onto a function itself (after all, JavaScript functions are first-class functions and can have properties and methods). As a result, the receiving function will be invoked with a specified this value, as well as any arguments passed in.

// Let's take a closer look at each of these methods, starting with call()!

// call()

// call() is a method directly invoked onto a function. We first pass into it a single value to set as the value of this; then we pass in any of the receiving function's arguments one-by-one, separated by commas.

// Consider the following function, multiply(), which simply returns the product of its two arguments:

function multiply(n1, n2) {
  return n1 * n2;
}

//multiply(3, 4);

// console.log(multiply.call("window", 3, 4));

const mockingbird = {
  title: "Good know",
  describe: function () {
    console.log(`${this.title} is a classic`);
  },
};

const pride = {
  title: "Pride and Prejudice",
};

// mockingbird.describe.call(pride);

//constructor function does not implicit have return keyword

//call
//1. It helps us to point the this to another object
//2.  It takes 2 arguments ; 1. the object you want to point to 2. the arguements of original method if it has

const car = {
  name: "Nissan",
  drive: function () {
    console.log(`${this.name} is a good car`);
  },
};

const anotherCar = {
  name: "Toyota",
};

//car.drive.call(anotherCar);

const dave = {
  name: "Dave",
};

function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}

//sayHello.call(dave, "Hello there");

function invokeTwice(cb) {
  cb();
  cb();
}

const dog2 = {
  age: 25,
  growOneYear: function () {
    this.age += 1;
  },
};

//invokeTwice(dog2.growOneYear);
// console.log(dog2.age);

////=====PROTOTYPE======

function Cat(name) {
  this.lives = 9;
  this.name = name;

  this.sayName = Cat.prototype.sayName = function () {
    console.log(`Meow! My name is ${this.name}`);
  };
}

const cat3 = new Cat("Piew");

// (A) TRY

function Dalmatian(name) {
  this.name = name;
  this.bark = function () {
    console.log(`${this.name} barks!`);
  };
}

// (B)

function Dalmatian(name) {
  this.name = name;
}

Dalmatian.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};
