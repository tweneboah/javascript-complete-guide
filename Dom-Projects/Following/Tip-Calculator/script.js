const amount = document.querySelector(".amount");

const btn = document.querySelector(".btn");

function tipMe() {
  const value = amount.value;
  console.log(value * 0.5);
}

btn.addEventListener("click", tipMe);
