// const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * number + 1);
}

// btn.onclick = function (e) {
//   const randCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   console.log(randCol);
//   e.target.style.backgroundColor = randCol;
//   console.log(e);
// };

// myDiv.setAttribute("class", "parent");
// const txt = document.createTextNode("Woow so good");
// myDiv.appendChild(txt);
// document.body.appendChild(myDiv);

for (let i = 0; i < 40; i++) {
  const myDiv = document.createElement("div");
  myDiv.setAttribute("class", "parent");
  document.body.appendChild(myDiv);
}

//select all divs

const divs = document.querySelectorAll("div");

divs.forEach(function (d) {
  d.addEventListener("click", function (e) {
    const randCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    console.log(randCol);
    e.target.style.backgroundColor = randCol;
  });
});
