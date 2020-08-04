const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//dom
// const sectionCenter = document.querySelector(".section-center");
// const filteredBtns = document.querySelector('.filter-btn')
// window.addEventListener("DOMContentLoaded", function () {
//   let displayMenu = menu.map(function (item) {
//     //For map we can modify/customise the new data structure  our array
//     // return `<h1>Hello</h1>`; //modify the response

//     return `<article class="menu-item">
//     <img src=${item.img} alt=${item.title} class="photo" />
//     <div class="item-info">
//       <header>
//         <h4>${item.title}</h4>
//         <h4 class="price">${item.price}</h4>
//       </header>
//       <p class="item-text">
//        ${item.desc}
//       </p>
//     </div>
//   </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   sectionCenter.innerHTML = displayMenu;
//   console.log(displayMenu);
// });

//=====================
//Refactor
//====================

const sectionCenter = document.querySelector(".section-center");
const filteredBtns = document.querySelectorAll(".filter-btn");

//Onload
//==============

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
       ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

//Filter
filteredBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    //Getting the actual data
    // console.log(e.target.dataset);
    // console.log(e.currentTarget.dataset.id);
    const category = e.currentTarget.dataset.id;
    //create new array

    //Our aim is to get a filtered array and passed to our function and when that function calls our window load fn will run

    const menuCategory = menu.filter(function (menuItem) {
      return menuItem.category === category;
    });
    //Check if user clicks on all because we don't have all as a category

    if (category === "all") {
      //call our function
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
    console.log(menuCategory);
  });
});
