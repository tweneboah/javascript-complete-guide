//============
//JSON.STRINGFY
//============
//1. It convert object or value to a JSON String

var json = '{"result": true, "count": 42}';
var obj = JSON.parse(json); //convert to obj so that we can manipulate the values
//console.log(obj.count);

//EXAMPLE====

var myObj = {
  first: "Emma",
  age: 32,
};

//convert to jsom
var convertedJson = JSON.stringify(myObj);
console.log(convertedJson.);
console.log(myObj);
