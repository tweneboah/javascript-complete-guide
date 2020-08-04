//FOR EACH AND MAP
let arr = [1, 2, 3, 4, 5];

arr.forEach((num, index) => {
  return (arr[index] = num * 2);
});

let data = arr.map((el) => {
  return el * 2;
});

console.log(arr);
// var dogs = ["Spot", "Buddy", "Princess"];

// dogs.forEach((data) => {
//   return `${data} is good`;
// });

// console.log(dogs);
