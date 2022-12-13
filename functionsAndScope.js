// Deliverable # 1 - Write the code to declare a function named "sum" that adds two numbers together.

/*
 * Your code goes here
 */
const sum = (num) => num + num;

// function sum(num) {
//   return num + num;
// }

// Deliverable # 2 - Write the code to invoke (call) your "sum" function.

/*
 * Your code goes here
 */

console.log(sum(10));

/* Exercise # 1 - Block Scope: The while loop as seen below contains a block of code.
 * A variable named "day" has been declared and assigned the value of "Monday" inside of this while loop.
 * What happens when you try to access the value of this variable outside of the while loop?
 */
let time = 10;
while (time > 0) {
  let day = "Monday";
  console.log(`Tick tock! ${time} seconds left`);
  time--;
}
console.log("Time is up!");

// Print out the value of the "day" variable here using console.log(), and notice what happens in the console.
console.log(day); // no access since day is declared in block scope while we are accessing it in the global scope.

// Exercise # 2 - Function Scope: What happens when you try to console log the value of "iceCreamFlavor" inside the "createIceCream" function vs outside of the function?
let iceCreamFlavor = "Strawberry";
function createIceCream(iceCreamFlavor) {
  console.log(iceCreamFlavor);
  // Print out the value of the "iceCreamFlavor" variable here using console.log(), and notice what happens in the console.
}
createIceCream("Matcha");
// Print out the value of the "iceCreamFlavor" variable here using console.log(), and notice what happens in the console.

console.log(iceCreamFlavor);

// Exercise # 3 - Global Scope: What happens when you create a variable in global scope and change that variable's value inside of a function or block of code?
let pasta = "Capellini";
function changePasta() {
  pasta = "Linguini";
}
console.log(pasta); // Should log : Capellini since the function wasn't invoke
changePasta();
// What will the value of "pasta" be now? Print out the value of the "pasta" variable using console.log() and find out!
console.log(pasta); // should log: Linguini since we invoke the function that changes the value of pasta

/* Deliverable # 3:
 * Step 1 - Declare a function named "guacamoleMaker" that accepts a function as its parameter.
 * Step 2 - Declare a function named "mixIngredients" that prints the string "Mixing Ingredients..." to the console.
 * Step 3 - Inside of the "guacamoleMaker" function, invoke the "mixIngredients" function. On the following line, print the string "All done!" to the console.
 * Step 4 - Invoke the "guacamoleMaker" function: Make sure to pass in the "mixIngredients" function as an argument of the "guacamoleMaker" function.
 */

/*
 * Your code goes here
 */
const guacamoleMaker = (func) => {
  mixIngredients();
  console.log("All done!");
};

const mixIngredients = () => console.log("Mixing Ingredients");

guacamoleMaker(mixIngredients);
/* Deliverable # 4:
 * Step 1 - Declare a function named "playASport".
 * Step 2 - Inside of the "playASport" function, declare a function named "playSoccer" that prints the string "GOAL!!!" to the console.
 * Step 3 - The return value of the "playASport" function should be the "playSoccer" function. Thus making "playASport" a function that returns another function.
 * Step 4 - Invoke the "playASport" function.
 */

/*
 * Your code goes here
 */

const playASport = () => {
  return (playSoccer = () => console.log("GOAL!!!"));
};

playASport();
