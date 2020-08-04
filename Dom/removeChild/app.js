//============
//RemoveChild()
//==============
//This is use to remove any  element/div from it's parent

let d = document.getElementById("top"); //parent div
let d_nested = document.getElementById("nested"); //children
let deleteBtn = document.querySelector(".deleteBtn"); //delete button
//delete

// deleteBtn.addEventListener("click", () => {
//   d.removeChild(d_nested);
// });

//METHOD2
let node = document.getElementById("nested");
deleteBtn.addEventListener("click", () => {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
});
