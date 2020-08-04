// ~ function () {
//   console.log('Yes')
//   alert('HII')
// }()


// ! function hi() {
//   console.log('Yes')
//   alert('HII')
// }()



//This create a new scope
//The screte of module pattern is it returns an object that we want it to be public

var budgetController = (function () {
  var x = 23
  var add = function (a) {
    return x + a
  }
  // This return to the outside world
  return {
    publicTest: function (b) {
      console.log(add(b))
    }
  }
}())

// budgetController.publicTest(90);


var UIController = (function () {
  //Some code
})();