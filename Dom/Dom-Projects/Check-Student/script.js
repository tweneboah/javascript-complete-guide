//STUDENTS

// var students = [
//   { name: "Ben", paidFees: false, year: "Level-100" },
//   { name: "Emma", paidFees: true, year: "Level-600" },
//   { name: "Enk", paidFees: false, year: "Level-500" },
//   { name: "Joe", paidFees: true, year: "Level-200" },
// ];

var selectStd = document.querySelectorAll(".student");

selectStd.forEach(function (std) {
  var nameLength = std.innerHTML;
  if (nameLength.length < 4) {
    std.setAttribute("class", "warning");
  } else {
    std.setAttribute("class", "success");
  }
});
