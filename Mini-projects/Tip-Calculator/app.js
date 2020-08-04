//DESCRIPTION

/**
 *
 * Create an application for a shop. When a client pays for a product that cost above 450 GHS give him/her 12.0%
 * Display a message saying , hei (customer name) we have given you (...this count)
 */

//solution

var form = document.querySelector("form");
var customerName = document.querySelector(".customer");
var amount = document.querySelector(".amount");
var msg = document.querySelector(".msg");
//variables
var discount = 0.12;
var discountAmount = 450;
var totalAmountToBePaid = 0;

//form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //Get values from input
  var customerValue = customerName.value;
  var totalPurchasePrice = amount.value;

  //Calculation
  if (totalPurchasePrice >= discountAmount) {
    //Logic goes here

    //Discount Given
    var totalDiscountGiven = totalPurchasePrice * discount;
    //TotalAmountTobePaid
    totalAmountToBePaid = totalPurchasePrice - totalDiscountGiven;

    //display Message

    msg.innerHTML = `Huray ${customerName.value} your total amount to be paid is ${totalPurchasePrice} but after discount of ${totalDiscountGiven} your actual cost is ${totalAmountToBePaid}`;
  } else {
    //calc
    totalAmountToBePaid = totalPurchasePrice;
    msg.innerHTML = `Oh better next time. You didn't get any discount. Your total cost is ${totalAmountToBePaid}`;
  }
});
