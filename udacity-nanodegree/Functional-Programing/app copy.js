/** @format */

// /** @format */

// // /** @format */

// // //imperative

// let name = "Captain Kirk";
// let hour = new Date().getHours();

// let greeting = "";

// if (hour <= 6) {
//   greeting = "Good Morning, ";
// } else if (hour >= 17) {
//   greeting = "Good Evening, ";
// } else {
//   greeting = "Hello, ";
// }

// greeting += name + ".";

// //console.log(greeting);
// //expected output: Hello, Captain Kirk

// //Functional
// const greet = (name) => (salutation) => `${salutation}, ${name}.`;

// const determineSalutation = (callback) => {
//   const hour = new Date().getHours();

//   if (hour <= 6) {
//     return callback("Good Morning");
//   } else if (hour >= 17) {
//     return callback("Good Evening");
//   } else {
//     return callback("Hello");
//   }
// };

// let result = determineSalutation(greet("Captain Kirk"));
// console.log(result);
//expected output: Hello, Captain Kirk

// //OBJECT ORIENTED

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   determineSalutation(date) {
//     const hour = (date && date.getHours()) || new Date().getHours();

//     if (hour <= 6) {
//       return "Good Morning";
//     } else if (hour >= 17) {
//       return "Good Evening";
//     } else {
//       return "Hello";
//     }
//   }
//   greet() {
//     return `${this.determineSalutation()} ${this.name}`;
//   }
// }
// const kirk = new Person("Kirk Captain");

// kirk.greet();

// console.log(kirk.greet());

// compare_paradigms.js

// Directions: Rewrite the imperative code below as Object-Oriented

let status = "active";
let warp = 2;
let type = "Dilithium Crystal";
let status_report = "Captain, ";

if (status === "active" && warp <= 4) {
  status_report += "the engines are active and we could be going faster.";
} else if (status === "active" && warp > 4) {
  status_report += "the engines are active and we are going " + warp + ".";
} else if (status === "down") {
  status_report += "the engines are down.";
} else {
  status_report += "the comms are down and we can`t reach engineering.";
}
console.log(status_report);

function Engine(status, warp) {
  this.status = status;
  this.warp = warp;
  this.greet = function () {
    let status_report = "Captain, ";
    if (this.status === "active" && this.warp <= 4) {
      return (status_report +=
        "the engines are active and we could be going faster.");
    } else if (this.status === "active" && this.warp > 4) {
      return (status_report +=
        "the engines are active and we are going " + this.warp + ".");
    } else if (this.status === "down") {
      return (status_report += "the engines are down.");
    } else {
      return (status_report +=
        "the comms are down and we can`t reach engineering.");
    }
  };
}

const eng1 = new Engine("active", 3);

console.log(eng1.greet());
