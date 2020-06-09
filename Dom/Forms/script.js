//slection
var form = document.querySelector("form");
var inpt1 = document.querySelector(".inp1");

//get value from a form
// var inputValue = inpt1.value;
//add event to the form

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(inpt1.value);
});
