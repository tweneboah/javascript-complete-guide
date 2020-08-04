const firstNames = [
  "Hope",
  "Launa",
  "Katherine",
  "Walker",
  "Moses",
  "Tayna",
  "Rosia",
  "Yahaira",
  "Tommy",
  "Elwanda",
  "Clorinda",
  "Sheron",
  "Kayla",
  "Clementina",
  "Rene",
  "Rex",
  "Kathy",
  "Latoya",
  "Shirleen",
  "Shoshana",
];

const secondNames = [
  "Chauncey",
  "Houchins",
  "Lama",
  "Frasca",
  "Houston",
  "Ake",
  "Shankles",
  "Cantor",
  "Mizell",
  "Cleland",
  "Maltby",
  "Tirrell",
  "Cary",
  "Mace",
  "Horta",
  "Carlile",
  "Deegan",
  "Torrez",
  "Humfeld",
  "Helgeson",
];

const btn = document.querySelector("button");
const firstname = document.querySelector(".firstname");

const generateName = () => {
  const randomNumber = Math.floor(Math.random() * firstNames.length);

  const displayFirstName = firstNames[randomNumber];
  const displayLastName = secondNames[randomNumber];
  firstname.innerHTML = `${displayFirstName} ${displayLastName}`;
};

btn.addEventListener("click", generateName);
