// var name = "Prince";

// console.log(window.name);

// function add(a) {
//   var a = 6;
//   console.log(a);
// }

// add();

var a = 90;

function first() {
  var b = 90;
  var result = a + b;
  console.log(`The first function is called ${result}`);
}

function second() {
  var c = 90;
  setTimeout(() => {
    first();
  }, 7000);
  var result = c + a;
  console.log(`The second function called ${result}`);
}

function third() {
  var d = 20;
  var result = d + a;
  setTimeout(() => {
    second();
  }, 3000);
  console.log(`The third function is called ${result}`);
}

third();
