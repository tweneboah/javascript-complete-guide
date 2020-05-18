//Arrays
//Is a way of storing data

//Ways of creating arrays

//1
var numbers = new Array(10, 20, 30, 40);

//2
var numbers2 = ["Emma", "Ghana", true, 31];

var mySelf = {
  firstName: "Emma",
  country: "Ghana",
  isMarried: true,
  age: 31,
  calAge: function () {
    //logic
    console.log(this);
  },
};

//Accessiong arrays
//Arrays are zero base

// console.log(numbers2[0]);
// console.log(numbers2[1]);
// console.log(numbers2[2]);
// console.log(numbers2[3]);

//Methods in arrays

var students = ["Yaw", "John", "Emma", "Enkansah"];

//1. Push -> Add item at the end of an array
//unShit ->  Add item at the begining of an array
// pop -> Removes the last item
//shift -> Remove the first elemen
//Splice -> insert elements between items, we can also remove item

// students.push("Ben");
// students.unshift("Dan");
// students.pop("Emma");
//students.shift();
//students.splice(1, 1, "Kwame", "Adwoa", "A");

//indexOf()

//return the index of the item . if there is an index of the item it means the item exist

//But if the item doesn't exist it will return -1

var students2 = ["Yaw", "John", "Emma", "Enkansah"];

//Search if Yaw is part of the students

var yawExist = students2.indexOf("Bob");
//console.log(yawExist);

//App for a movie show:
//We are going to check if a user has a ticket
//If a user doesn't have a ticker we will alert to user that please go home now

var movieShowMembers = ["Doe", "Elisa", "Emen", "Jack"];

//function to check if a user has a ticket

function memberHasATicket(name) {
  var hasATicket = movieShowMembers.indexOf(name);
  //console.log(hasATicket);
  if (hasATicket > -1) {
    alert("Wow You have a ticket");
  } else if (hasATicket <= -1) {
    alert("Hmm Go Home");
  }
}

//memberHasATicket("Elid");

//IncludeOf()

const price2 = [50, 34, 2, 10, 20];
const checkIfExist = price2.includes(50);
// console.log(checkIfExist);

//Create an app for a restaurant
//i. Assuming the there is only one type of food called pizza which cost GHS120
//Create an app that will check if the user is a customer you will reduce the price of the pizza by 10% if not reduce the by .2%

//1.Calculate the total cost of the old customer
//2. Calculate the cost for the new customer
//3. Calculate the price difference bewtween the old and the customer

//ASSIGMNENT SOLUTION

//Enkansah Restaurant app

//Give me all your customers names
//Variabls
var customersNames = ["Prince", "Ben", "Jane", "Taylor"];
var pizzaCost = 120;
var oldCusDisc = 0.1;
var newCusDisc = 0.002;

//Old Customer functions

function oldCusTotalCost(custmerName) {
  var customerExist = customersNames.indexOf(custmerName);

  if (customerExist >= 0) {
    var totalDiscount = pizzaCost * oldCusDisc;
    var totalCost = pizzaCost - totalDiscount;
    console.log(totalCost);
  } else {
    console.log(
      "You do not qualified for discount because you are not a customer"
    );
  }
}

//oldCusTotalCost("John");

//Iteration == Looping

// var names = ["Prince", "Ben", "Jane", "Taylor"];
// //console.log(names[2]);
// console.log(names[names.length - 1]);

//LOOPS / ITERATION

//Looping/iteration: Is a process of repeating/doing something until a condition is met

// console.log(workers[0]);
// console.log(workers[1]);
// console.log(workers[2]);

//for loop

//It takes 3 arguments

//1. initial variable: where you want to start
//2. constion: This stops the loop from looping when the condition becomes false
//Iteration

//Question: Print numbers from 1 - 300

// for (var num = 1; num <= 300; num++) {
//   console.log(num);
// }

// for (var i = 0; i <= 200; i += 2) {
//   console.log(i);
// }

// i = 0;
// i = 2;
// i = 4;
// i = 6;

//QUSTION
//You ask you to print all the names of the workers

// var workers = ["Ben", "Enkansah", "Emma", "Joe"];

// for (var i = 0; i <= workers.length - 1; i++) {
//   console.log(i); //Gives the index of all the workers
//   console.log(workers[i]); //Grab the actual names by index
// }

//

//================================
//OBJECTS
//=================================

//Methods are functions that can be found inside an object

var enakansahDetails = {
  firstName: "Enkansah", //String
  lastName: "Edward",
  yearOfBirth: 1983, //Number
  country: "Ghana", //Striing
  isMarried: true, //Boolean
  bills: [100, 300, 120, 500, true, 45.9], //Arrays
  //Function inside object === method
  calculateAge: function () {
    var myAge = 2020 - this.yearOfBirth;
    return myAge;
  },

  calcFullName: function () {
    var fullName = this.firstName + " " + this.lastName;
    console.log(fullName);
  },
};

//console.log(this);

//Accessing properties on objects

//Dot notation

//console.log(enakansahDetails.firstName);
//console.log(enakansahDetails.bills);

//Bracket notation
//console.log(enakansahDetails["firstName"]);

//This is how we call a method in an object
var age = enakansahDetails.calculateAge();
console.log(age);

//Print fullname

enakansahDetails.calcFullName();

//Assigment

//Be creative to make use of object with all the data types and a method
