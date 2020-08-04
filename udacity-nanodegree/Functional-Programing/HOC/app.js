/** @format */
// Doubling

/**
 * you can say that a function is Higher-Order if it:
Takes in a function as an argument (a callback)
Returns a function
 */

// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two

const addTwo = (callback) => {
  return callback + 2;
};

const myFn = (num) => {
  return num * num;
};
addTwo(myFn(3));

// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`;
};
const myCallback = (cb) => {
  return cb;
};

myCallback(createFullName("Emma", "Twene", "DR"));
// you might notice that this function is less than ideal - that's great! We'll talk about why next

function greaterThan(n) {
  return (m) => n * 2;
}

// let greaterThanEight = greaterThan(8);
// console.log(greaterThan(6)())

//====Functional DOM Manipulations===

const root = document.querySelector("#root");

//we want to send html string to the DOM

const render = (root, state) => {
  root.innerHTML = App(state);
};

const welcome = () => {
  return `Welcome to my JS program`;
};

const App = (state) => {
  return `
  ${show(true)}
  <h1>${welcome()}, ${state.user.first_name}</h1>
  <div>I Exist</div>
  `;
};

// Add a new Menu component that takes in a show argument which is either true or false
// Show this content if show is true:
{
  /* <nav>
    <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Login</li>
    </ul>
</nav> */
}

// and this content if show is false:
{
  /* <nav>Menu</nav> */
}

// Your Code Here
const show = (isTrue) => {
  if (isTrue) {
    return `<nav>
    <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Login</li>
    </ul>
</nav>`;
  } else {
    return `<nav>Menu</nav>`;
  }
};

//====Holding Application State===

//App state

const store = {
  user: {
    first_name: "John",
    last_name: "Doe",
  },
};

//Store can now be passed as an argument into our app.
//render(root, store);

/**
 * One more thing, if you have recreated these two sections on your own computer and tried to see the results in your browser, there was likely a problem that caused nothing to show up on the screen except what was in your index.html file. That’s because we are missing one function that tells our JavaScript when to run. The DOM is loading at one speed, and our JavaScript file is running at another speed, so we need to make sure that our JavaScript doesn’t run before the DOM element root actually exists.
 *
 * Now we are telling our JavaScript to wait until the load event has finished in the browser, which means it's safe to create the rest of our layout.
 */

window.addEventListener("load", () => {
  render(root, store);
});
