const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const counter = document.querySelector(".counter");

//Initials
counter.innerHTML = 0;
let count = 0;

//Decrease
const decreaseCounter = () => {
  count -= 1;
  counter.innerHTML = count;
  if (count < 1) {
    counter.setAttribute("class", "decreasedCounter");
  }
};

//increase
const incraseCounter = () => {
  count += 1;
  counter.innerHTML = count;
  counter.setAttribute("class", "increasedCounter");
};

//reset
const resetCounter = () => {
  count = 0;
  if (count === 0) {
    counter.setAttribute("class", "resetCounter");
    counter.innerHTML = count;
  }
};

// setInterval(() => {
//   if (count === 5) {
//     resetCounter();
//   }
//   incraseCounter();
// }, 1000);
//Decrase

const autCount = () => {
  return setInterval(() => {
    if (count === 5) {
      alert("Have you forgotten ?");
      resetCounter();
    }
    incraseCounter();
  }, 1000);
};

btn1.addEventListener("click", decreaseCounter);
btn2.addEventListener("click", resetCounter);
btn3.addEventListener("click", incraseCounter);
btn4.addEventListener("click", autCount);

window.addEventListener("load", (event) => {
  // console.log("page is fully loaded", event);
});

//======
//Offline
//========
// addEventListener version
window.addEventListener("offline", (event) => {
  console.log("The network connection has been lost.");
});

// onoffline version
window.onoffline = (event) => {
  console.log("The network connection has been lost.");
};

//Online
// addEventListener version
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

// ononline version
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
