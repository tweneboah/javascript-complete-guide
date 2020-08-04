/** @format */
const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//Fetch Exchange rate and update the DOM

function calculate(e) {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //BASE RATE
      const rate = data.rates[currency_two]; //Rember object
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      //calc and place total in second value input

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

//Event Listener

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

calculate();
