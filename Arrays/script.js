//Arrays
//Is a way of storing data

//Ways of creating arrays

//1
var numbers = new Array(10, 20, 30, 40);

//2
var numbers2 = [90, 40, 23];

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
  console.log(hasATicket);
  if (hasATicket > -1) {
    alert("Wow You have a ticket");
  } else if (hasATicket <= -1) {
    alert("Hmm Go Home");
  }
}

memberHasATicket("Elid");

//IncludeOf()

const price2 = [50, 34, 2, 10, 20];
const checkIfExist = price2.includes(50);
console.log(checkIfExist);

//Create an app for a restaurant
//i. Assuming the thers is only one type of food called piza which cost GHS120
//Create an app that will check if the user is a customer you will reduce the price of the pizza by 10% if not reduce the by .2%

//1.Calculate the total cost the old customer
//2. Calculate the cost for the new customer
//3. Calculate the price difference bewtween the old and the customer
