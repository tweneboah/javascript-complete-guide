// let sodiumChloride = (function () {
//   let chemicalFormula = "NaCl";
//   let molarMass = 58.44;

//   return {
//     getProperties: function () {
//       console.log(`Formula: ${chemicalFormula}`);
//       console.log(`Molar Mass: ${molarMass} g/mol`);
//     },
//   };
// })();

// //REVEALING MODULE PATTERN

// let myModule = (function () {
//   function privateMethod(message) {
//     console.log(message);
//   }

//   function publicMethod(message) {
//     privateMethod(message);
//   }

//   return {
//     publicMethod: publicMethod,
//   };
// })();

// let myModule2 = (function () {
//   function privateMethod(message) {
//     console.log(message);
//   }

//   return {
//     publicMethod: function (message) {
//       privateMethod(message);
//     },
//   };
// })();

let myName = (function data() {
  let name = 2;
  function getName() {
    console.log(name);
  }
  return {
    getName,
  };
})();

myName.getName();
