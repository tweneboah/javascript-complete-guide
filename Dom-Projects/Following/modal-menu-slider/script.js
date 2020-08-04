/** @format */

const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const my = document.getElementById("my");
// Toggle nav

toggle.addEventListener("click", () => {
  console.log("toggle");
  // Add the translate to the entire body
  document.body.classList.toggle("show-nav");
});
// toggle.addEventListener('click', () =>
//   document.body.classList.toggle('show-nav')
// );

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
