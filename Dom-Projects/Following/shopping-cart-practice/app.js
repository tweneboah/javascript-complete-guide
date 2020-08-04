//variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

//Cart

let cart = [];
let buttonsDOM = [];
//UI

class UI {
  displayProduct(arr) {
    //select the html DOM
    //Instead of us creating our html using js we will create it inside the html copy it and place it inside the DOM innerHTML
    let html = "";
    arr.forEach((product) => {
      html += `<article class="product">
      <div class="img-container">
        <img
          src="${product.url}"
          alt="product"
          class="product-img"
        />
        <button class="bag-btn" data-id=${product.id}>
          <i class="fas fa-shopping-cart"></i>
          add to bag
        </button>
      </div>
      <h3>${product.title}</h3>
      <h4>$${product.price}</h4>
    </article>
    `;
    });
    return html;
  }
  getButtons() {
    const bagBtnSpread = [...document.querySelectorAll(".bag-btn")];
    const bagBtn = document.querySelectorAll(".bag-btn");
    buttonsDOM = bagBtn;
    bagBtn.forEach((btn) => {
      let id = btn.dataset.id;
      //Find this id in cart
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        bagBtn.innerHTML = "In Cart";
        bagBtn.disabled = true;
      }
      btn.addEventListener("click", (e) => {
        e.target.innerHTML = "In Cart";
        e.target.disabled = true;
        //get Product
        let cartItem = { ...Storage.getProduct(id), amount: 1 };
        cart = [...cart, cartItem];

        //save to localst
        localStorage.setItem("product", JSON.stringify(cart));
        //Set cart Values
        this.setCartValues(cart);
      });
    });
  }
  setCartValues(cart) {
    let temTotal = 0;
    let itemsTotal = 0;
    let totalPrice = 0;
    cart.map((item) => {
      totalPrice += item.price;
      temTotal += item.price * item.amount;
      itemsTotal += item.amount;
      console.log(temTotal - itemsTotal);
      cartTotal.innerHTML = parseFloat(itemsTotal.toFixed(2));
      cartItems.innerHTML = itemsTotal;
    });
  }
}

class Storage {
  saveProductstoStorage(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((item) => item.id === id);
  }
}

class Products {
  async getProducts() {
    let data = await fetch("./products.json");
    let products = await data.json();
    let productData = products.items.map((product) => {
      const { price, title } = product.fields;
      const { id } = product.sys;
      const { url } = product.fields.image.fields.file;
      return { price, title, id, url };
    });
    return productData;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  console.log("App Started");
  //Get Products
  let products = new Products();
  let productsData = await products.getProducts();
  //save
  //DISPLAY PRODUCT
  const ui = new UI();
  const displayProduct = ui.displayProduct(productsData);
  productsDOM.innerHTML = displayProduct;
  ui.getButtons();
  let save = new Storage();
  save.saveProductstoStorage(productsData);
});
