//If statement

var age = 29;
var name = "Joe";
var isMarried = "single";

// if (name === "joedd") {
// } else if (name) {
//   console.log("PERMITTED");
// } else {
//   console.log("You are not allowed");
// }

//BOOLEAN : deals with true/false values
// AND (&&) => true if all are true
// OR (//) => true if one is true
// NOT (!) => inverts tru/false value

/**
 *  Create an app for a club call inovo.
 * The app  will check if the person's age is greater than 18 but less than 30, print to the console 'you are allowed to enter otherwise print to the console 'you are not allowed to enter
 * */

var clubName = "inovo";
var actualTicket = 10.6;
var discount1 = 0.01;
var discount2 = 0.5; //btn 13 &

//TENARY OPERATORS

//It's also use to take decisions
//Writing if statement in one line

//It's tenary because it has 3 parts
var age = 18;

age >= 18 ? console.log("Yes") : console.log("No");

//SWTICH
// A way of writing if statement
var job = "Programmer";

switch (job) {
  case "Programmer":
    console.log("Yes  programmer");
    break;
  case "Teacher":
    console.log("teacher");
    break;
  default:
    console.log("none");
}

var age = 39;

switch (true) {
  case age < 35:
    console.log("yes");
    break;
  case age >= 40 && age <= 60:
    console.log("woow");
  default:
    break;
}

//Truthy/falsy values

//falsy
//It turn to evaluate to false when use in if statement

//1. undefined
//2.null
//3. 0
//4. ''
//5. NaN

var amount;

if (amount) {
  console.log("The value is defined");
} else {
  console.log("Not defined");
}
