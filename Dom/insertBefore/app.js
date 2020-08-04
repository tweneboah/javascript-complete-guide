//Get the parent dive
let parentEl = document.querySelector(".parentElement");
//btn
const btn = document.querySelector(".createBtn");
//Function to create content
function createContent() {
  //Create a reference to the child you want to insert the new item before this
  let firstChildOfTheParent = parentEl.firstChild;

  //create a new div
  const newDiv = document.createElement("div");

  //create h1 element
  const h1Title = document.createElement("h1");
  //create paragraph txt
  const para = document.createElement("p");

  //Add text to it
  const h1TitleContent = document.createTextNode("How I love Js");
  //add content to the paragrap

  const paraContent = document.createTextNode(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );
  //Add this text to h1 title
  h1Title.appendChild(h1TitleContent);
  //add content to the para element
  para.appendChild(paraContent);
  //Add this to the newly created div
  newDiv.appendChild(h1Title); //the oder matters
  newDiv.appendChild(para);
  // Insert the new element before the first child
  parentEl.insertBefore(newDiv, firstChildOfTheParent);
}
//Call the func
btn.addEventListener("click", () => {
  createContent();
});
