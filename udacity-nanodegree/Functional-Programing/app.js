/** @format */
//====MAP====

const captains = ["Picard", "Adama", "Reynolds", "Beeblebrox"];

const newArray = captains.map((data) => {
  return `Captain ${data}`;
});

const alt = (data) => {
  return `Captain ${data}`;
};

//==Array Maps - Doubling==
const nums = [1, 2, 3, 4, 5];

const doubled = nums.map((data) => data * 2);

//method two

const doubler = (a) => a * 3;
const doubled2 = nums.map(doubler);

//===reverser this array
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resverThisArr = start.reverse();

// 2. Write a map function to print the Job: Name:
const shipMates = [
  ["Mal", "Captain"],
  ["Wash", "Pilot"],
  ["Zoey", "1st Mate"],
  ["Jayne", "Public Relations"],
];

// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"];

const result = awayTeam.map((name, i) => {
  const checkNameLenght = name.length;
  //console.log(checkNameLenght);
  return `${name}: ${i % 2 === 0 ? "even" : "odd"}`;
});

// expected output: Array: ["Picard: even", "Riker: odd", etc...]

const job = shipMates.map((data) => data);

//==ADVANCE MAP==
// One common thing we use map for in real life is to reformat objects to have a shape that is better for our purposes. For instance, we only care about the name and first three characters of the id for the races below. Use map to grab those values and create a new array with them.

var index = [
  { key: 1, sector: 10, t_score: 18, id: "1236n7e8", value: "Klingon" },
  { key: 4, sector: 145, t_score: 12, id: "293847hs8", value: "Minbari" },
  { key: 8, sector: 214, t_score: 5, id: "283hy8347", value: "Cylon" },
  { key: 3, sector: 8346, t_score: 10, id: "n9837ks857", value: "Jawa" },
];

const onlySector = index.map((data, idx, arr) => {
  return {
    name: data.value,
    onlyThree: data.id.substring(0, 3),
  };
});

//=======FILTER====
// 1. Find all the words with more than 7 characters
const words1 = ["tardis", "grok", "frak", "blaster", "klingon", "shepherd"];

// Your Code
const filtered = words1.filter((data) => {
  let nameLength = data.length;
  return nameLength > 7;
});
// expected output: Array ['shepherd']
// console.log(filtered);
// ----------------------------------------------------------
// 2. Find all even values
const words2 = [12, 13, 14, 15, 16, 17];

// Your Code
const filtered2 = words2.filter((data) => {
  return data % 2 === 0;
});
// expected output: Array [12, 14, 16]

// ----------------------------------------------------------
// REAL LIFE EXAMPLE
// We often use filter to quickly pull all the items that share a status or other characteristic. For instance, create a list of all the active bounty hunters from the array below:

const hunters = [
  {
    name: "Greedo",
    universe: "Star Wars",
    status: "active",
  },
  {
    name: "Boba Fett",
    universe: "Star Wars",
    status: "inactive",
  },
  {
    name: "Asajj Ventress",
    universe: "Star Wars",
    status: "unknown",
  },
  {
    name: "Zam Wesell",
    universe: "Star Wars",
    status: "inactive",
  },
  {
    name: "Jango Fett",
    universe: "Star Wars",
    status: "active",
  },
];

// Your code
const activeHunters = hunters.filter((data) => {
  return data.status === "active";
});

// expected output: Array [
//     {
//         name: 'Greedo',
//         universe: 'Star Wars',
//         status: 'active',
//     },
//     {
//         name: 'Jango Fett',
//         universe: 'Star Wars',
//         status: 'active',
//     },
// ]

//=====REDUCE=====
const sales = [120.0, 19.99, 3.5, 4.0];
const add = sales.reduce((curr, acc) => {
  return curr + acc;
});

// 1. Take this disjointed sentence and turn it into a single string
const text = [
  "The ships",
  "hung in the sky,",
  "much the way",
  "that bricks don`t",
];

const reducer = text.reduce((sentence, word) => sentence + " " + word);
// Your Code Here

// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
  {
    team: "A",
    score: 200,
  },
  {
    team: "B",
    score: 17,
  },
  {
    team: "C",
    score: 200,
  },
  {
    team: "D",
    score: 13,
  },
];

// Your Code Here
const high = scores.reduce((highValue, currentValue) => {
  if (currentValue.score > highValue.score) {
    return currentValue;
  } else {
    return highValue;
  }
});
// expected output: "C"

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
  {
    name: "Serenity",
    speed: "4.2G",
  },
  {
    name: "Cylon Raider",
    speed: "7.5G",
  },
  {
    name: "Swordfish II",
    speed: "50G",
  },
  {
    name: "Tie Fighters",
    speed: "4100G",
  },
];

// Your Code Here

const result2 = ships.reduce(
  (previous, current) => {
    const speed = parseInt(current.speed.slice(0, -1));
    const previousSpeed = parseInt(previous.speed.slice(0, -1));
    if (speed > previousSpeed) {
      return current;
    }
    return previous;
  },
  { name: "none", speed: "0G" }
);

// Expected output: Tie Fighters

/////===FLAT====

let nestedArr = [1, 2, [3, 4, [5, 6]]];

nestedArr.flat();

//===FIND===

const bestBars = [
  "Mos Eisley Cantina",
  "Clark`s Bar",
  "10 Forward",
  "The Restaurant at the End of the Universe",
  "The Prancing Pony",
  "10 Forward",
  "10 Forward",
];

const selected = bestBars.find((x) => {
  return x === "10 Forwar";
});

//====INCLUDES

const bestBars2 = [
  "Mos Eisley Cantina",
  "Clark`s Bar",
  "10 Forward",
  "The Restaurant at the End of the Universe",
  "The Prancing Pony",
  "10 Forward",
];

const inc = bestBars2.includes("10 Forward");

// ----------------------------------------------------------
// FLAT EXERCISE
// ----------------------------------------------------------
// This short list of some marvel characters is abitrarily nested. Experiment with the effect of flattening to various depths.

const characters = [
  ["Starlord", "Gamora", "Groot"],
  [
    "Dr. Strange",
    ["Captain America", "Bucky Barnes"],
    ["Thor", "Hulk", ["Loki"]],
    "Thanos",
  ],
  [("Iron Man", "Ultron")],
  ["Spider Man", ["Venom"]],
  ["Professor X", "Wolverine", "Quicksilver", ["Magneto"]],
];

const results = characters.flat();

// ----------------------------------------------------------
// FIND EXERCISE
// ----------------------------------------------------------
// Best use cases for FIND are when you want to cast a wider net, because you get to create your own criteria that can be either very specific or more generic.

// Determine whether any of the following have a value that contains the characters 'ABC'

const ids = ["ADHKE", "ANFKM", "QIMVU", "PQMFU", "ABCKO", "IUABC"];

const incl = ids.includes("ABC");

// ----------------------------------------------------------
// INCLUDE EXERCISES
// ----------------------------------------------------------
// 1. It best to use INCLUDES when what the value is does not matter, simply its presence. Imagine the scenario that you are need to check a user's id against a list of admin id's.

const currentUserId = "29nv283bfc0szn16723";

const admins = [
  "02398cn7syap0dmbnv0",
  "2389sakvjhw8e7f09fv",
  "09mxvb82kzjd6v1sfdg",
  "9a76zxmsdnv1u622345",
  "29nv283bfc0szn16723",
  "029834zmnv9jhgfu2ab",
  "12mnz09v87bas78fb12",
  "098Xc8x76m3nb4aposi",
];

const check = admins.includes(currentUserId);
// ----------------------------------------------------------

// 2. Checking between lists. Another thing that you might need to do in real life is check items between two arrays. Check if array B has any values that are also in array A. This becomes especially helpful when the values are hard to distinguish visually

const A = [
  "02398cn7syap0dmbnv0",
  "2389sakvjhw8e7f09fv",
  "09mxvb82kzjd6v1sfdg",
  "9a76zxmsdnv1u622345",
  "29nv283bfc0szn16723",
  "029834zmnv9jhgfu2ab",
  "12mnz09v87bas78fb12",
  "098Xc8x76m3nb4aposi",
];

const B = [
  "13xnse8aanv87Hdnfv8",
  "2389sakvjhw8e7f09fv",
  "12mn0vnZkadfh237LPd",
  "1209MNBd8723nvkwejs",
  "298374naskdj273ubsl",
  "098LKJnsvijevkwejf6",
];

const ifFound = A.filter((item) => {
  return B.includes(item);
});

/**Freeze
Object Freeze is one way to deal with the shortcomings of const to ensure that objects cannot be changed. This is the Mozilla definition object freeze: */

// ----------------------------------------------------------
// OBJECT FREEZE EXAMPLES
// ----------------------------------------------------------

const currentShow = {
  title: "Dr. Who",
  seasons: 11,
  currentSeason: 4,
};

// currentShow.seasons = 89;

Object.freeze(currentShow);
currentShow.seasons = 89;

//Keys
const character = {
  id: "12mn18udcbv9823",
  name: "Chewbacca",
  race: "Wookie",
  planet: "Kashyyyk",
  job: "First Mate",
};

// SOLUTION CODE
const keys = Object.keys(character);

keys.map((key) => {
  console.log(`This character has a(n) ${key}`);
  return `This character has a(n) ${key}`;
});

// Use Object.keys with the map method to print "This character has a(n) [property-name]" for each property

const character2 = {
  id: "12mn18udcbv9823",
  name: "Chewbacca",
  race: "Wookie",
  planet: "Kashyyyk",
  job: "First Mate",
};

const keys2 = Object.values(character2);

//----OBJECT . ASSIGN

/*
The object assign method copies the properties from a source object to a target object. All properties in the source object that aren’t in the target will be created on the target, and any property both objects share, the values will be updated to match the source object. Here is the object assign Mozilla page. This method is most useful when you want to combine two objects or update one object when it is edited.
*/

let state = {
  name: "Wash",
  favoriteThing: {
    item: "Not complicated",
  },
  ship: {
    name: "Serenity",
    class: "Firefly",
  },
  role: "Pilot",
  favoriteThing: {
    item: "Toy",
    details: {
      type: "Toy Tyrannosaurus Rex",
    },
  },
};

const newState = {
  name: "Mal",
  role: "Captain",
  favoriteThing: {
    item: "Not complicated",
  },
  history: ["Browncoat sergeant"],
};

let finalObj = Object.assign(state, newState);

//=====PUTTING ALL TOGTHER===
const characters = [
  {
    name: "Marvin the Paranoid Android",
    role: "First Mate",
    universe: "Hitchhikers Guide to the Galaxy",
    weapon: "severe depression",
    power_level: 1000,
  },
  {
    name: "Jabba the Hut",
    role: "villain",
    universe: "Star Wars",
    weapon: "henchmen",
    power_level: 200,
  },
  {
    name: "Zoë Alleyne Washburne",
    role: "First Mate",
    universe: "Firefly",
    weapon: "Winchester Model 1892 rifle",
    power_level: 160,
  },
  {
    name: "Peter Venkman",
    role: "Ghostbuster",
    universe: "Ghostbusters",
    weapon: "proton pack",
    power_level: 120,
  },
  {
    name: "Kathryn Janeway",
    role: "Captain",
    universe: "Star Trek",
    weapon: "Wit",
    power_level: 140,
  },
  {
    name: "Dr. Daniel Jackson",
    role: "Archeologist",
    universe: "Stargate",
    weapon: "Zat gun",
    power_level: 120,
  },
  {
    name: "Q",
    role: "God/Eternal",
    universe: "Star Trek",
    weapon: "Whatever he wants",
    power_level: 1000,
  },
  {
    name: "Boba Fett",
    role: "Bounty Hunter",
    universe: "Star Wars",
    weapon: "EE-3 carbine rifle",
    power_level: 400,
  },
  {
    name: "Yoda",
    role: "Jedi Master",
    universe: "Star Wars",
    weapon: "The Force",
    power_level: 900,
  },
  {
    name: "Mal Reynolds",
    role: "Captain",
    universe: "Firefly",
    weapon: "pistol",
    power_level: 160,
  },
  {
    name: "Spock",
    role: "First Mate",
    universe: "Star Trek",
    weapon: "Logic",
    power_level: 170,
  },
  {
    name: "R2-D2",
    role: "Ship`s Robot",
    universe: "Star Wars",
    weapon: "Data Probe",
    power_level: 250,
  },
  {
    name: "Lore",
    role: "Villain",
    universe: "Star Trek",
    weapon: "Intellect",
    power_level: 800,
  },
];

// ----------------------------------------------------------

// COMBINED PRACTICE 1

// ----------------------------------------------------------

// Create an array containing only the names of Captains from all universes.

// Your Code here

// expected output: ['Mal Reynolds', 'Kathryn Janeway']

// ----------------------------------------------------------

// COMBINED PRACTICE 2

// ----------------------------------------------------------

// Group all characters by role in a multidimensional array

// Your Code here

// expected output:

// [ [ { name: 'Marvin the Paranoid Android',
//       role: 'First Mate',
//       universe: 'Hitchhikers Guide to the Galaxy',
//       weapon: 'severe depression',
//       power_level: 1000 } ],
//   [ { name: 'Jabba the Hut',
//       role: 'villain',
//       universe: 'Star Wars',
//       weapon: 'henchmen',
//       power_level: 200 },
//     { name: 'Boba Fett',
//       role: 'Bounty Hunter',
//       universe: 'Star Wars',
//       weapon: 'EE-3 carbine rifle',
//       power_level: 400 },
//     { name: 'Yoda',
//       role: 'Jedi Master',
//       universe: 'Star Wars',
//       weapon: 'The Force',
//       power_level: 900 },
//     { name: 'R2-D2',
//       role: 'Ship`s Robot',
//       universe: 'Star Wars',
//       weapon: 'Data Probe',
//       power_level: 250 } ],
//   [ { name: 'Zoë Alleyne Washburne',
//       role: 'First Mate',
//       universe: 'Firefly',
//       weapon: 'Winchester Model 1892 rifle',
//       power_level: 160 },
//     { name: 'Mal Reynolds',
//       role: 'Captain',
//       universe: 'Firefly',
//       weapon: 'pistol',
//       power_level: 160 } ],
//   [ { name: 'Peter Venkman',
//       role: 'Ghostbuster',
//       universe: 'Ghostbusters',
//       weapon: 'proton pack',
//       power_level: 120 } ],
//   [ { name: 'Kathryn Janeway',
//       role: 'Captain',
//       universe: 'Star Trek',
//       weapon: 'Wit',
//       power_level: 140 },
//     { name: 'Q',
//       role: 'God/Eternal',
//       universe: 'Star Trek',
//       weapon: 'Whatever he wants',
//       power_level: 1000 },
//     { name: 'Spock',
//       role: 'First Mate',
//       universe: 'Star Trek',
//       weapon: 'Logic',
//       power_level: 170 },
//     { name: 'Lore',
//       role: 'Villain',
//       universe: 'Star Trek',
//       weapon: 'Intellect',
//       power_level: 800 } ],
//   [ { name: 'Dr. Daniel Jackson',
//       role: 'Archeologist',
//       universe: 'Stargate',
//       weapon: 'Zat gun',
//       power_level: 120 } ] ]

// ----------------------------------------------------------

// COMBINED PRACTICE 3

// ----------------------------------------------------------

// Create an array containing characters' names who are the only character listed in their universe.

// Your Code here

// expected output: [ Marvin the Paranoid Android, Peter Venkman, Dr. Daniel Jackson ]

// ----------------------------------------------------------

// COMBINED PRACTICE 4

// ----------------------------------------------------------

// What is the average power level across all characters?

// Your code here

// expected output: 68.71319452795147
