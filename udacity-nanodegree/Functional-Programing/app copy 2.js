/** @format */

//==PURE FUNCTIONS====

/*
Functional Programming Specifics
So we’ve set up where functional programming came from, and that it is growing in popularity, but we haven’t yet discussed any specifics of what it contains. This lesson will focus on the concepts that are core to Functional Programming, like pure functions, side effects, and the idea of immutability. Those might sound like just a jumble of technical words, but I think you’ll be surprised at how familiar they are to you because of the amount of JavaScript you already know!

In the end, everything we learn in this section will point back to the main tenet of functional programming, which is to have confidence in the programs you write because you rely on functions that behave the same way every time. Read on to learn how pure functions and immutability will make your programs more predictable.

Pure Functions
Pure functions are a simple concept with big implications. And to start off with, I’m pretty sure you have already written a pure function! If you started off learning to write functions like this:

function add(x,y) {
    return x + y
}
Then you have written a pure function! So what makes this pure, and why is this simple idea the foundation for a powerful paradigm like functional programming?

One thing that is obvious in this case, but incredibly important, is that if given the same arguments, this function will return the same value. You can run add(2, 2) as many times as you want, and the only thing you will get is 4. Brian Lonsdorf's definition definition of a pure function in the GitBook, "Professor Frisby's Mostly Adequate Guide to Functional Programming" is this:

A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

What are the side effects? Let's take a look.
*/

//Code Review - Side Effects

let galaxy_ship = {
  torpedo_balance: 0,
  id: 123456,
};

function stock_arsenal(amount, id) {
  if (galaxy_ship.id === id) {
    // SIDE EFFECT
    // Galaxy_ship’s values are being updated, but it is not a part of the return of this function
    galaxy_ship.torpedo_balance += amount;

    // console.log("arsenal successfully stocked");
    // console.log(galaxy_ship.torpedo_balance);

    // return value is just a message
    return "arsenal successfully stocked";
  }

  console.log(`invalid account id`);
  return `invalid account id`;
}

stock_arsenal(40, 123456);
// expected output:
// arsenal successfully stocked
// 40

/**
 * 
 * Summary on Pure Functions
We just learned about side effects, which modify state and don't come from the return statement of that function. So now we have everything we need to understand pure functions. Same inputs get the same output and the return value is the total effect of running the function.

What do we get from writing pure functions? To sum it up in one word, I would say confidence. But there is a lot more to it than that. Here are some last points to consider:

If we can count on a function to produce the same result no matter where in the program it runs, then we don’t have to be afraid of calling it anywhere. It makes my functions easy to reuse.
If a function has no side effects, then we remove the mental load of needing to remember them. I have confidence about what my functions do, and the effect they will have on my app. That confidence means that I can scale things more easily and alter programs with less fear.
Immutability
Another major tenant of functional programming is that we do not “edit” things; we make new things.

For instance, if I had a set of notes for a class, and you wanted to borrow them, when you see something that you wanted to edit or add, you wouldn’t make those edits on my notes...hopefully. Instead, you would make a fresh copy of my notes and make your changes there. That would preserve my copy and let you have your new notes; in essence, that is what functional programming wants.

Editing - more commonly referred to in development as “mutating” the same thing over and over again makes it hard to know what copy you are looking at, and is prone to errors. At multiple points later in the course, we will take a look into how we can create immutable values in our JavaScript programs. For now though, this will hopefully explain why we favor ‘const’ variables over ‘let’ variables in this course.

New Terms
Pure Functions - A function that will always return the same output if given the same input, and which has no side effects.
Side effects - An effect on your overall program from running a function, that did not come from the return statement of that function.
Immutable - Unchanging. Immutable values are ones which, once declared, cannot be changed.
Exercise Instructions
Next, you will complete another exercise where you will translate a normal function into a pure function.
 */

// foundation_concepts.js

// Directions: Translate from normal function to pure function
// let greeting = "Hello, ";

// const greet4 = (name) => {
//   return (greeting += name);
// };

// this code could be problematic because greeting is in the global scope.
// We could not use the greeting a second time, because the greeting variable is changed to contain the name

// console.log(greet("Arthur."));
// console.log(greet("Arthur."));
// expected output:
//  Hello, Arthur.
//  Hello, Arthur.

//=====SOLUTION===
const greet = (name, base_greeting) => {
  return `${base_greeting} ${name}`;
};

let greeting = "Hello, ";

greet("Arthur.", greeting);
// now we can reuse greeting, and the greet function is pure

//console.log(greet("Arthur.", greeting));
// expected output:
//  Hello, Arthur.
//  Hello, Arthur.

//=====QUESTION 3 OF 4
//What are the potential problems with this imperative code?
let background = "red";
let clicked = false;

if (clicked === true) {
  background = "blue";
} else {
  background = "yellow";
}

/**
 * WHY FP?
 * Introduction
In this section, we’ll build from the core functional concepts we talked about in the previous lesson to determine why developers are turning to functional programming to solve some of the common problems in web development.

Functional Pros and Cons
It can be difficult to evaluate the pros and cons of a programming paradigm, and it can be hard to keep each paradigm straight. But one key that can really help is to remember that what typically differentiates paradigms is how they deal with application state - or put more simply - how they keep track of stuff (values and entities) and how those things change while the program runs. How does Functional Programming deal with application state? Very carefully. Functional Programming believes that values shouldn’t be sloppily edited, but rather replaced with fresh values every time. It also ensures that state changes in very predictable places -- the return values of functions. You’ll see that a lot of these pros and cons have to do with how state is handled.

Pros
Easier to test
Because every function is pure, we know that the return value is the sum of the function, and is the only part that needs to be tested. Functions that avoid side effects are easier to test.

More predictable code
Functions that avoid side effects and the use of immutable values makes changes in the programs more visible. By definition, pure functions always return the same value when given the same inputs. This predictability is the backbone of success with Functional Programming

Easier to edit and expand
Because pure functions return the same value every time, and perfectly encapsulate their logic in the return statement, it means that a function could be copied and pasted to a new part of a program, or moved to an entirely different program, and it would still always produce the same result. Functions with side effects cannot be moved without the possibility of breaking something.

Cons
More difficult to write in some languages
While most modern dynamic languages have the ability to write in a Functional style, it can go against the grain with some. Even JavaScript, for instance, does not have a way to make values truly immutable. Writing programs without classes goes against the grain of Ruby, and PHP does not have all the array methods JavaScript has that follow a Functional methodology.

Will never be able to implement completely
There is a big difference between pure academic Functional programming and practical Functional-inspired programming for the web. Unless you are using a language that was built to be Functional, like Haskell, there will be times you have to work within the limits of the language to do the best you can at writing functional programs.

Few libraries to speed progress (though this is changing)
Functional programming for the web is still fairly new, and there are not as many helpful libraries or tutorials for getting started or writing efficiency as there are for say Object Oriented programs, for which we have prebuilt ORMs, tons of tutorials, frameworks, etc..

The Functional Programming paradigm shines when things get complicated. When you need to work with concurrent or parallel programs, or with applications that need to be stable and yet scalable, this is the paradigm to choose. Confidence, simplicity, and clarity are some of the benefits of writing Functional code.

Exercise Instructions
Exercise 1: Write a pure function that prints "good afternoon" if its afternoon and "good morning" any other time of the day.
Exercise 2: Write a pure function that takes in a number and returns an array of items counting down from that number to zero.
 */

const greetMe = () => {
  let hour = new Date().getHours();
  if (hour < 12) {
    return `Good morning`;
  } else if (hour > 12) {
    return `Good afternoon`;
  } else {
    return `Good evening`;
  }
};

//console.log(greetMe());

// const count = (num) => {
//   let allNum = [];
//   for (let i = 20; i < 20; i--) {
//     return 90;
//   }
// };

function countDown(startNum) {
  let countDownArray = [];
  for (let i = startNum; i >= 0; i--) {
    countDownArray.push(i);
  }
  return countDownArray;
}

//console.log(countDown(5));

/**
 * NOTE

For exercise 2, there is a for loop which isn't Functional Programming, but in the next lesson we will cover how to do this in a Functional Programming way!
Exercise 2 could also be solved using recursion as well.
This solution has some parts written in ES5 syntax. In the following lessons, we will cover ES6 syntax. You can find more information about ES6 here.
Where You May See FP in Real Life
Haskell is probably the most purely functional programming language, but other languages you might run across that are built specifically for programming in the functional paradigm are Lisp, Scheme, Clojure, Elm, Erlang, and F#.

The most likely place to run into functional programming ideas for web developers though, is in React and Redux.

Summary
There are strengths and weaknesses to every paradigm, and the more you know, the more equipped you are to pick the best one for the job, instead of just getting into a routine of using only one. These concepts are especially helpful when learning React and Redux.

We’ve covered some of the strengths of functional programming that make it attractive to web developers, but if you want a little more challenge, think about the strengths of the other paradigms to see where using them might make sense. Also, if you want to stick a toe into learning a purely Functional language, here is an Intro to Haskell from Learn You a Haskell for Great Good!.

Glossary
Programming Paradigm - An overarching approach or style to problem-solving or ...

A philosophy, style, or general approach to writing code.

Pure Functions - A function that will always return the same output if given the same input, and which has no side effects.

Side effects - An effect on your overall program from running a function, that did not come from the return statement of that function.
Immutable - Unchanging. Immutable values are ones which, once declared, cannot be changed.
 */
