const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const colorDisplay = document.querySelector(".colorDisplay");

const changeMe = () => {
  const m = Math.floor(Math.random() * 3) + 1;
  document.body.style.backgroundColor = `${colors[m]}`;
  colorDisplay.innerHTML = colors[m];
  console.log(colors[m]);
};

btn.addEventListener("click", changeMe);
