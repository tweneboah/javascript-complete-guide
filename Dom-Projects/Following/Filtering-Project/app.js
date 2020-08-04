// //selection
// const parent = document.querySelector(".parent");

// parent.innerHTML = `<h1 class="title">Item Menu</h1>

// <div class="txt-msg">
//   <p class="txt">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sint
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id nostrum
//     fugit ipsa laborum, officia aut obcaecati totam eum officiis illo
//     repudiandae alias placeat, reiciendis, ab impedit maxime consequuntur
//     ea?
//   </p>
//   <div class="buttons">
//     <div class="btn1">
//       <button>All</button>
//     </div>
//   </div>`;

const inp = document.querySelector(".title");
const items = document.querySelector(".items");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  li.classList.add("item");
  const attr = document.createAttribute("data-id");
  li.setAttributeNode(attr);
  li.innerHTML = inp.value;
  items.appendChild(li);
  console.log(li);
});
