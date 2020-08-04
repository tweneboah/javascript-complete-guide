//===========
//charAt && charCodeAt
//============

//DEMO
const message = "How are you";

//================
//charAt: This deals with characters. Every character has it own charCode
//You can use index of a string to detetermine the actual character = chartAt
//==============

console.log(sentence.charAt(4)); //Retrieve the charcter with index 4

//=======
//charCodeAt
//Every character been space or letters has their own charCode
//========

console.log(sentence.charCodeAt(4)); //Retrieve the actual unicode of that letter. Every letter has their unique unicode and that's what this function returns

//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
