//Arrays
//Is a way of storing data

//Ways of creating arrays

//1
var numbers = new Array(10, 20, 30, 40);

//2
var numbers2 = ["Emma", "Ghana", true, 31];

var mySelf = {
  firstName: "Emma",
  country: "Ghana",
  isMarried: true,
  age: 31,
  calAge: function () {
    //logic
    console.log(this);
  },
};

//Accessiong arrays
//Arrays are zero base

// console.log(numbers2[0]);
// console.log(numbers2[1]);
// console.log(numbers2[2]);
// console.log(numbers2[3]);

//Methods in arrays

var students = ["Yaw", "John", "Emma", "Enkansah"];

//1. Push -> Add item at the end of an array
//unShit ->  Add item at the begining of an array
// pop -> Removes the last item
//shift -> Remove the first elemen
//Splice -> insert elements between items, we can also remove item

// students.push("Ben");
// students.unshift("Dan");
// students.pop("Emma");
//students.shift();
//students.splice(1, 1, "Kwame", "Adwoa", "A");

//indexOf()

//return the index of the item . if there is an index of the item it means the item exist

//But if the item doesn't exist it will return -1

var students2 = ["Yaw", "John", "Emma", "Enkansah"];

//Search if Yaw is part of the students

var yawExist = students2.indexOf("Bob");
//console.log(yawExist);

//App for a movie show:
//We are going to check if a user has a ticket
//If a user doesn't have a ticker we will alert to user that please go home now

var movieShowMembers = ["Doe", "Elisa", "Emen", "Jack"];

//function to check if a user has a ticket

function memberHasATicket(name) {
  var hasATicket = movieShowMembers.indexOf(name);
  //console.log(hasATicket);
  if (hasATicket > -1) {
    alert("Wow You have a ticket");
  } else if (hasATicket <= -1) {
    alert("Hmm Go Home");
  }
}

//memberHasATicket("Elid");

//IncludeOf()

const price2 = [50, 34, 2, 10, 20];
const checkIfExist = price2.includes(50);
// console.log(checkIfExist);

//Create an app for a restaurant
//i. Assuming the there is only one type of food called pizza which cost GHS120
//Create an app that will check if the user is a customer you will reduce the price of the pizza by 10% if not reduce the by .2%

//1.Calculate the total cost of the old customer
//2. Calculate the cost for the new customer
//3. Calculate the price difference bewtween the old and the customer

//ASSIGMNENT SOLUTION

//Enkansah Restaurant app

//Give me all your customers names
//Variabls
var customersNames = ["Prince", "Ben", "Jane", "Taylor"];
var pizzaCost = 120;
var oldCusDisc = 0.1;
var newCusDisc = 0.002;

//Old Customer functions

function oldCusTotalCost(custmerName) {
  var customerExist = customersNames.indexOf(custmerName);

  if (customerExist >= 0) {
    var totalDiscount = pizzaCost * oldCusDisc;
    var totalCost = pizzaCost - totalDiscount;
    console.log(totalCost);
  } else {
    console.log(
      "You do not qualified for discount because you are not a customer"
    );
  }
}

//oldCusTotalCost("John");

//Iteration == Looping

// var names = ["Prince", "Ben", "Jane", "Taylor"];
// //console.log(names[2]);
// console.log(names[names.length - 1]);

//LOOPS / ITERATION

//Looping/iteration: Is a process of repeating/doing something until a condition is met

// console.log(workers[0]);
// console.log(workers[1]);
// console.log(workers[2]);

//for loop

//It takes 3 arguments

//1. initial variable: where you want to start
//2. constion: This stops the loop from looping when the condition becomes false
//Iteration

//Question: Print numbers from 1 - 300

// for (var num = 1; num <= 300; num++) {
//   console.log(num);
// }

// for (var i = 0; i <= 200; i += 2) {
//   console.log(i);
// }

// i = 0;
// i = 2;
// i = 4;
// i = 6;

//QUSTION
//You ask you to print all the names of the workers

// var workers = ["Ben", "Enkansah", "Emma", "Joe"];

// for (var i = 0; i <= workers.length - 1; i++) {
//   console.log(i); //Gives the index of all the workers
//   console.log(workers[i]); //Grab the actual names by index
// }

//

//================================
//OBJECTS
//=================================

//Methods are functions that can be found inside an object

var enakansahDetails = {
  firstName: "Enkansah", //String
  lastName: "Edward",
  yearOfBirth: 1983, //Number
  country: "Ghana", //Striing
  isMarried: true, //Boolean
  bills: [100, 300, 120, 500, true, 45.9], //Arrays
  //Function inside object === method
  calculateAge: function () {
    var myAge = 2020 - this.yearOfBirth;
    return myAge;
  },

  calcFullName: function () {
    var fullName = this.firstName + " " + this.lastName;
    //console.log(fullName);
  },
};

//console.log(this);

//Accessing properties on objects

//Dot notation

//console.log(enakansahDetails.firstName);
//console.log(enakansahDetails.bills);

//Bracket notation
//console.log(enakansahDetails["firstName"]);

//This is how we call a method in an object
var age = enakansahDetails.calculateAge();
//console.log(age);

//Print fullname

enakansahDetails.calcFullName();

//Assigment

//Be creative to make use of object with all the data types and a method

//==============
//ARRAYS RECAP
//===========

//we can store both objects, primitives

//Storing objects into array

var students = [
  { name: "Ben", age: 20, city: "Kumasi" },
  { name: "Joe", age: 50, city: "Atonsu" },
  { name: "Gifty", age: 50, city: "Accra" },
];

//========FOR EACH=========

//for loop and forEach are the same

//They work in the same way but FOR for each is cleaner and shorter

//The forEach() method executes a provided function once for each array element.

//It does not mutate an array
//We can pass in 3 arguements
//1.current data, index, and array

const colors = ["blue", "green", "white"];

// colors.forEach(function (eachElementInTheArray) {
//   console.log(eachElementInTheArray);
// });

// students.forEach(function (student) {
//   console.log(student.city);
// });

//Data from server

var posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body:
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body:
      "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body:
      "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body:
      "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body:
      "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
  {
    userId: 2,
    id: 11,
    title: "et ea vero quia laudantium autem",
    body:
      "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  {
    userId: 2,
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body:
      "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  },
  {
    userId: 2,
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body:
      "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
  },
  {
    userId: 2,
    id: 14,
    title: "voluptatem eligendi optio",
    body:
      "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
  },
  {
    userId: 2,
    id: 15,
    title: "eveniet quod temporibus",
    body:
      "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
  },
  {
    userId: 2,
    id: 16,
    title:
      "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body:
      "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
  },
  {
    userId: 2,
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body:
      "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
  },
  {
    userId: 2,
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body:
      "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
  },
  {
    userId: 2,
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body:
      "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
  },
  {
    userId: 2,
    id: 20,
    title: "doloribus ad provident suscipit at",
    body:
      "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
  },
  {
    userId: 3,
    id: 21,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body:
      "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
  },
  {
    userId: 3,
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body:
      "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
  },
  {
    userId: 3,
    id: 23,
    title: "maxime id vitae nihil numquam",
    body:
      "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
  },
  {
    userId: 3,
    id: 24,
    title: "autem hic labore sunt dolores incidunt",
    body:
      "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
  },
  {
    userId: 3,
    id: 25,
    title: "rem alias distinctio quo quis",
    body:
      "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
  },
  {
    userId: 3,
    id: 26,
    title: "est et quae odit qui non",
    body:
      "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero",
  },
  {
    userId: 3,
    id: 27,
    title: "quasi id et eos tenetur aut quo autem",
    body:
      "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
  },
  {
    userId: 3,
    id: 28,
    title: "delectus ullam et corporis nulla voluptas sequi",
    body:
      "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum",
  },
  {
    userId: 3,
    id: 29,
    title: "iusto eius quod necessitatibus culpa ea",
    body:
      "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores",
  },
  {
    userId: 3,
    id: 30,
    title: "a quo magni similique perferendis",
    body:
      "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia",
  },
  {
    userId: 4,
    id: 31,
    title: "ullam ut quidem id aut vel consequuntur",
    body:
      "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
  },
  {
    userId: 4,
    id: 32,
    title: "doloremque illum aliquid sunt",
    body:
      "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
  },
  {
    userId: 4,
    id: 33,
    title: "qui explicabo molestiae dolorem",
    body:
      "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod",
  },
  {
    userId: 4,
    id: 34,
    title: "magnam ut rerum iure",
    body:
      "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis",
  },
  {
    userId: 4,
    id: 35,
    title: "id nihil consequatur molestias animi provident",
    body:
      "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit",
  },
  {
    userId: 4,
    id: 36,
    title: "fuga nam accusamus voluptas reiciendis itaque",
    body:
      "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore",
  },
  {
    userId: 4,
    id: 37,
    title: "provident vel ut sit ratione est",
    body:
      "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui",
  },
  {
    userId: 4,
    id: 38,
    title: "explicabo et eos deleniti nostrum ab id repellendus",
    body:
      "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure",
  },
  {
    userId: 4,
    id: 39,
    title: "eos dolorem iste accusantium est eaque quam",
    body:
      "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex",
  },
  {
    userId: 4,
    id: 40,
    title: "enim quo cumque",
    body:
      "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam",
  },
  {
    userId: 5,
    id: 41,
    title: "non est facere",
    body:
      "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe",
  },
  {
    userId: 5,
    id: 42,
    title:
      "commodi ullam sint et excepturi error explicabo praesentium voluptas",
    body:
      "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut",
  },
  {
    userId: 5,
    id: 43,
    title:
      "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
    body:
      "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis",
  },
  {
    userId: 5,
    id: 44,
    title: "optio dolor molestias sit",
    body:
      "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae",
  },
  {
    userId: 5,
    id: 45,
    title: "ut numquam possimus omnis eius suscipit laudantium iure",
    body:
      "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem",
  },
  {
    userId: 5,
    id: 46,
    title: "aut quo modi neque nostrum ducimus",
    body:
      "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid",
  },
  {
    userId: 5,
    id: 47,
    title: "quibusdam cumque rem aut deserunt",
    body:
      "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate",
  },
  {
    userId: 5,
    id: 48,
    title: "ut voluptatem illum ea doloribus itaque eos",
    body:
      "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit",
  },
  {
    userId: 5,
    id: 49,
    title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
    body:
      "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
  },
  {
    userId: 5,
    id: 50,
    title:
      "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
    body:
      "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur",
  },
  {
    userId: 6,
    id: 51,
    title: "soluta aliquam aperiam consequatur illo quis voluptas",
    body:
      "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem",
  },
  {
    userId: 6,
    id: 52,
    title: "qui enim et consequuntur quia animi quis voluptate quibusdam",
    body:
      "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum",
  },
  {
    userId: 6,
    id: 53,
    title: "ut quo aut ducimus alias",
    body:
      "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique",
  },
  {
    userId: 6,
    id: 54,
    title: "sit asperiores ipsam eveniet odio non quia",
    body:
      "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia",
  },
  {
    userId: 6,
    id: 55,
    title: "sit vel voluptatem et non libero",
    body:
      "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit",
  },
  {
    userId: 6,
    id: 56,
    title: "qui et at rerum necessitatibus",
    body:
      "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi",
  },
  {
    userId: 6,
    id: 57,
    title: "sed ab est est",
    body:
      "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est",
  },
  {
    userId: 6,
    id: 58,
    title: "voluptatum itaque dolores nisi et quasi",
    body:
      "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam",
  },
  {
    userId: 6,
    id: 59,
    title: "qui commodi dolor at maiores et quis id accusantium",
    body:
      "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt",
  },
  {
    userId: 6,
    id: 60,
    title:
      "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
    body:
      "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis",
  },
  {
    userId: 7,
    id: 61,
    title: "voluptatem doloribus consectetur est ut ducimus",
    body:
      "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit",
  },
  {
    userId: 7,
    id: 62,
    title: "beatae enim quia vel",
    body:
      "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio",
  },
  {
    userId: 7,
    id: 63,
    title:
      "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
    body:
      "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta",
  },
  {
    userId: 7,
    id: 64,
    title: "et fugit quas eum in in aperiam quod",
    body:
      "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui",
  },
  {
    userId: 7,
    id: 65,
    title: "consequatur id enim sunt et et",
    body:
      "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur",
  },
  {
    userId: 7,
    id: 66,
    title: "repudiandae ea animi iusto",
    body:
      "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe",
  },
  {
    userId: 7,
    id: 67,
    title: "aliquid eos sed fuga est maxime repellendus",
    body:
      "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae",
  },
  {
    userId: 7,
    id: 68,
    title: "odio quis facere architecto reiciendis optio",
    body:
      "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit",
  },
  {
    userId: 7,
    id: 69,
    title: "fugiat quod pariatur odit minima",
    body:
      "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a",
  },
  {
    userId: 7,
    id: 70,
    title: "voluptatem laborum magni",
    body:
      "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore",
  },
  {
    userId: 8,
    id: 71,
    title: "et iusto veniam et illum aut fuga",
    body:
      "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis",
  },
  {
    userId: 8,
    id: 72,
    title: "sint hic doloribus consequatur eos non id",
    body:
      "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit",
  },
  {
    userId: 8,
    id: 73,
    title: "consequuntur deleniti eos quia temporibus ab aliquid at",
    body:
      "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut",
  },
  {
    userId: 8,
    id: 74,
    title: "enim unde ratione doloribus quas enim ut sit sapiente",
    body:
      "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora",
  },
  {
    userId: 8,
    id: 75,
    title: "dignissimos eum dolor ut enim et delectus in",
    body:
      "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem",
  },
  {
    userId: 8,
    id: 76,
    title: "doloremque officiis ad et non perferendis",
    body:
      "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio",
  },
  {
    userId: 8,
    id: 77,
    title: "necessitatibus quasi exercitationem odio",
    body:
      "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident",
  },
  {
    userId: 8,
    id: 78,
    title: "quam voluptatibus rerum veritatis",
    body:
      "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus",
  },
  {
    userId: 8,
    id: 79,
    title: "pariatur consequatur quia magnam autem omnis non amet",
    body:
      "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos",
  },
  {
    userId: 8,
    id: 80,
    title: "labore in ex et explicabo corporis aut quas",
    body:
      "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident",
  },
  {
    userId: 9,
    id: 81,
    title: "tempora rem veritatis voluptas quo dolores vero",
    body:
      "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut",
  },
  {
    userId: 9,
    id: 82,
    title: "laudantium voluptate suscipit sunt enim enim",
    body:
      "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic",
  },
  {
    userId: 9,
    id: 83,
    title: "odit et voluptates doloribus alias odio et",
    body:
      "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam",
  },
  {
    userId: 9,
    id: 84,
    title:
      "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
    body:
      "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio",
  },
  {
    userId: 9,
    id: 85,
    title: "dolore veritatis porro provident adipisci blanditiis et sunt",
    body:
      "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione",
  },
  {
    userId: 9,
    id: 86,
    title: "placeat quia et porro iste",
    body:
      "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio",
  },
  {
    userId: 9,
    id: 87,
    title: "nostrum quis quasi placeat",
    body:
      "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est",
  },
  {
    userId: 9,
    id: 88,
    title: "sapiente omnis fugit eos",
    body:
      "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed",
  },
  {
    userId: 9,
    id: 89,
    title: "sint soluta et vel magnam aut ut sed qui",
    body:
      "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est",
  },
  {
    userId: 9,
    id: 90,
    title: "ad iusto omnis odit dolor voluptatibus",
    body:
      "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis",
  },
  {
    userId: 10,
    id: 91,
    title: "aut amet sed",
    body:
      "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat",
  },
  {
    userId: 10,
    id: 92,
    title: "ratione ex tenetur perferendis",
    body:
      "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui",
  },
  {
    userId: 10,
    id: 93,
    title: "beatae soluta recusandae",
    body:
      "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla",
  },
  {
    userId: 10,
    id: 94,
    title: "qui qui voluptates illo iste minima",
    body:
      "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis",
  },
  {
    userId: 10,
    id: 95,
    title: "id minus libero illum nam ad officiis",
    body:
      "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt",
  },
  {
    userId: 10,
    id: 96,
    title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
    body:
      "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut",
  },
  {
    userId: 10,
    id: 97,
    title: "quas fugiat ut perspiciatis vero provident",
    body:
      "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam",
  },
  {
    userId: 10,
    id: 98,
    title: "laboriosam dolor voluptates",
    body:
      "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores",
  },
  {
    userId: 10,
    id: 99,
    title: "temporibus sit alias delectus eligendi possimus magni",
    body:
      "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia",
  },
  {
    userId: 10,
    id: 100,
    title: "at nam consequatur ea labore ea harum",
    body:
      "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut",
  },
];

// var displayOnlyTitle = posts.forEach(function (post) {
//   console.log(`${post.title} ---- ${post.body}`);
// });

//======FILTER======

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var money = [53, 12, 90, 10, 70, 23, 60];

//filter our all money less than 50;

var result = money.filter(function (data) {
  //condition: When this conditions is true then it will run
  return data < 50;
});
//console.log(result);

var schoolFees = [
  { name: "Ben", payedFees: false },
  { name: "Yeboah", payedFees: false },
  { name: "Mary", payedFees: true },
  { name: "Job", payedFees: false },
];

var notPaidFees = schoolFees.filter(function (std) {
  return std.payedFees === false;
});

console.log(notPaidFees);
