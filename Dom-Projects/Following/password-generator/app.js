//selection
const characterAmountNumber = document.getElementById("characterAmountNumber");
const charactAmountRange = document.getElementById("charactAmountRange");
const passwordForm = document.getElementById("passwordForm");
const includeUpperCase = document.getElementById("IncludeUppercase");
const IncludeSymbols = document.getElementById("IncludeSymbols");

//event Listeners
charactAmountRange.addEventListener("input", synCharacter);
characterAmountNumber.addEventListener("input", synCharacter);

//Retrieving array of charcodes
const LOWER_CASE_CHAR_CODE = generateArray(65, 90);
const UPPER_CASE_CHAR_CODE = generateArray(97, 122);
const NUMBER_CHAR_CODE = generateArray(48, 90);
const SYMBOL_CHAR_CODE = generateArray(33, 47)
  .concat(generateArray(50, 64))
  .concat(generateArray(91, 96))
  .concat(generateArray(123, 126));

//submit
passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get values
  const characterAmountValue = characterAmountNumber.value;
  const includeUpperCaseValue = IncludeUppercase.checked;
  const includeNumbersValue = includeUpperCase.checked;
  const IncludeSymbolsValue = IncludeSymbols.checked;
  console.log(characterAmountValue, includeNumbersValue, includeUpperCaseValue);
  //get password
  const password = generatePassword(
    characterAmountValue,
    includeUpperCase,
    includeNumbersValue,
    IncludeSymbolsValue
  );
});

function generatePassword(
  characterAmount,
  includeUpperCase,
  includeNumbers,
  IncludeSymbols
) {
  let charCodes = LOWER_CASE_CHAR_CODE;

  //IF A USER CHECK UPPERCASE, APPEND IT
  if (includeUpperCase) {
    charCodes = charCodes.concat(UPPER_CASE_CHAR_CODE);
  } else if (characterAmount) {
    charCodes = charCodes.concat(NUMBER_CHAR_CODE);
  }
  console.log(charCodes);
}

function generateArray(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function synCharacter(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  charactAmountRange.value = value;
}

// console.log(String.fromCharCode(33));

// let name = [4, 3, 2, 4, 2, 4];

// const loop = (min, max) => {
//   for (let i = min; i <= max; i++) {
//     console.log(i);
//   }
// };

// console.log(loop(-66, 9000));


export const requestRobot = () => 