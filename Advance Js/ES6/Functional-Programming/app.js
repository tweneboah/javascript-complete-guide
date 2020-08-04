//separate of concern
//data and function are separated
//Function operate on data other than belonging to that data/object
//DRY
//Memory efficient

//amazon shopping

// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// }

//====
//pure function = they are imutatble
//====

//A function give input must return the same out

//No side effect
// const array = [1, 2, 3];

//This is called side effect because it has mutated the data outside the function
// function mutateArray(arr) {
//   return arr.pop();
// }

// function mutateArray2(arr) {
//   arr.forEach((element) => {
//     arr.push(10);
//   });
// }
// mutateArray(array);
// mutateArray2(array);

// mutateArray(array);
// console.log(a(array));
// console.log(array);

//The above code is difficult ti debug and the arrangement matteras that;s why pure function comes in

//SOLUTION 1

const array = [1, 2, 3];

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyBy2(arr) {
  return arr.map((item) => {
    return item * 3;
  });
}

console.log(removeLastItem(array));
console.log(multiplyBy2(array));
console.log(array);

//This has no side effect because it's not changing the global state

//INPUT MUST RETURN THE SAME OUTPUT BASE ON THE SAME INPUT

function a(num1, num2) {
  return num1 + num2;
}

//No matter how you refresh your app or call the fn it reurns the same output
console.log(a(10, 30));
