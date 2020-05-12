// //Synthax

// function greeting() {
//   console.log("Good morning");
// }
// //calling a function
// //greeting();

// //passing in parameters

// // function add(a, b) {
// //   console.log(`The answer is ${a + b}`);
// // }

// // add(3, 5);

// function add(num1, num2) {
//   console.log(num1 + num2);
// }
// //Calling the function
// //add(2, 8);

// //Function that will subtract two numbers

// // function subtract(a, b) {
// //   var result = a - b;
// //   console.log(result);
// //   alert(result);
// // }

// // subtract(90, 10);

// // var result;

// // function subtract(a, b) {
// //   result = a - b;
// //   console.log(result);
// // }

// // subtract(90, 10);

// //Function with a return keyword

// function hello() {
//   //code above return keyword will run
//   return 10;
//   //code below won't run
// }

// // console.log(hello());
// // // alert(hello());

// // var result = hello();
// // console.log(result);

// //function to calculate person's age;

// // function calcAge(yearOfBirth) {
// //   //logic
// //   var age = 2020 - yearOfBirth;
// //   return age;
// // }

// // var myAge = calcAge(1988);
// // console.log(myAge);

// //console.log(calcAge(1988));

// //TYPES OF FUNCTION CREATION

// //Function Expression
// //Function statement

// //FUNCTION EXPRESSION
// // var greeting = function () {
// //   console.log("Hi there");
// // };
// // console.log(greeting());

// // //Function statement
// // function greeting2() {
// //   console.log("Good morning");
// // }

// // greeting2();

// //==============ASSIGNMENT=================

// //Example: Dan took an exams and he got the follwing marks, science = 59, maths=57, eng=43, cs=67

// //write a function to perform the following

// //i. calculate Dan's total score

// //ii. If Dan's total score is below 90, print 'Dan your mark is below is 90 therefore you are failed' but if Dan's total score is more than 90, print 'Dan you are promoted to the next class.

// //===========================================

// //Retirement Calc App

// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }

// function yearsUntilYouRetire(year, firstName) {
//   var age = calculateAge(year);

//   var retirment = 65 - age;

//   if (retirment >= 0) {
//     console.log("You have not retired");
//   } else {
//     console.log("You have retired already");
//   }
// }

// yearsUntilYouRetire(1988);

//

//Assigment

function testSize(num) {
  //Function Body
  if (num < 5) {
    //What do you want to do here
    return "Tiny";
  } else if (num < 10) {
    //what do you want to do
    return "Small";
  } else if (num < 15) {
    //what do you want to do
    return "Medium";
  } else {
    return "Huge";
  }
  //End of function body
}

//Call
var result = testSize(5);
console.log(result);
//display your answer - console log, alert, pass

//SOLUTION 2

function dantotalScore(a, b, x, y) {
  var totalScore = a + b + x + y;
  if (totalScore < 90) {
    return "Dan you are failed";
  } else {
    return "Dan is promoted";
  }
}

var total = dantotalScore(57, 59, 67, 43);
console.log(total);

function dantotalScore2(a, b, x, y) {
  var totalScore = a + b + x + y;
  if (totalScore < 90) {
    console.log("Dan you are failed");
  } else {
    console.log("Dan is promoted");
  }
}

dantotalScore(57, 59, 67, 43);
