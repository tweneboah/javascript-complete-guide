// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
//===========================================

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//form
form.addEventListener("submit", addItem);
// ****** FUNCTIONS **********
//clear items
clearBtn.addEventListener('click', clearItems)

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    //add class and unique id
    element.classList.add("grocery-item");
    //add id using dataset: it's use for editting
    const attr = document.createAttribute("data-id");
    //Assign our id created above to thid dataset value
    attr.value = id;
    //add this attribute to the element
    element.setAttributeNode(attr);

    //Add html to it
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;

    //appendchild
    list.appendChild(element);
    //display alert
    displayAlert("Item added", "success");
    //show container
    container.classList.add("show-container");
    //add local storage

    //setback to default
    setBackToDefault();
    console.log(element);
    setTimeout(function () {}, 1000);
  } else if (value && editFlag) {
    console.log("Is editing");
  } else {
    displayAlert("Please Enter Value", "danger");
  }
}

//DISPLAY ALERT
function displayAlert(text, actionColor) {
  alert.innerHTML = text;
  alert.classList.add(`alert-${actionColor}`);
  //Remove Alert
  setTimeout(() => {
    alert.innerHTML = "";
    alert.classList.remove(`alert-${actionColor}`);
  }, 1000);
}

//clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach(item => {
      list.removeChild(item);
    })
  }
}

//set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  submitBtn.textContent = "submitgg";
  editID = "";
  console.log("Set to default");
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log("local");
}
// ****** SETUP ITEMS **********

var b = document.querySelector("button");

b.setAttribute("class", "helloButton");
b.setAttribute("disabled", "");

console.log(b);
