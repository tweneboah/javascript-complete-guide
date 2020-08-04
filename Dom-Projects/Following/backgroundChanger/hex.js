const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

//hex format #543942 (0-9) and A-F

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    // console.log(hex[i]);
    const randomNumber = Math.floor(Math.random() * 16); //0-16
    console.log(randomNumber);
    hexColor += hex[randomNumber];
  }
  color.innerHTML = hexColor;
  document.body.style.backgroundColor = hexColor;
});
