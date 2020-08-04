//slection
var myForm = document.querySelector(".my-Form");
var inpt1 = document.querySelector(".inp1");
var gender = document.querySelector(".gender");
//get value from a form
// var inputValue = inpt1.value;
//add event to the form

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(inpt1.type);
  console.log(gender.checked);
});

console.dir(gender);
