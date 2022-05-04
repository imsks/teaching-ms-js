// Q. Difference between let and const
// // A. let
// let number = 5
// number = 6 // Works

// // B. const
// const anotherNumber = 5
// anotherNumber = 6 // Error | TypeError: Assignment to constant variable.

// // Note
// // Both let & const keyword were introduced in ES6.

// // Q. What is Hoisting?
// // How Hoisting Works?
// console.log(number)
// var number = 5
// // Above line JS engines takes as
// var numbers = undefined
// console.log(number) // Till this point number is by default(Due to hoisting) has undefined value.
// number = 5

// Q. How var is different than let and const?
// // A. Hoisting
// console.log(number) // undefined
// console.log(anotherNumber) // ReferenceError: Cannot access 'anotherNumber' before initialization
// console.log(anotherAnotherNumber) // ReferenceError: Cannot access 'anotherNumber' before initialization

// var number = 5
// let anotherNumber = 5
// const anotherAnotherNumber = 5

// // TIP - As var is hoisted that's why number is undefined, anotherNumber & anotherAnotherNumber are giving an error.

// // B. Functional scope & Block Scope
// function sayMyName(characterName) {
//   var profession = 'Drug Dealer';

//   if (characterName) {
//     let age = 50;
//     const noOfChildren = 2;
//     console.log(profession); // Drug Dealer
//     console.log(age); // 50
//   }

//   console.log(age); // ReferenceError: age is not defined
//   console.log(noOfChildren); // ReferenceError: noOfChildren is not defined
// }

// sayMyName('Walter White');

// // Q. What are Primitive and Non-primitive Data Types?
// // A. Primitive Data Types
// const string = 'string'
// const number = 5
// const boolean = true
// const nullValue = null
// const undefinedValue = undefined

// // B. Non-Primitive Data Types
// const object = {}
// const array = []

// Q. How to re-declare a variable in Switch case?
// // A. Incorrect
// let number = 1;
// switch (number) {
//   case 0:
//     let name;
//     break;

//   case 1:
//     let name; // Error | SyntaxError: Identifier 'name' has already been declared
//     break;
// }

// // B. Correct
// let number = 1;
// switch (number) {
//   case 0: {
//     let name;
//     break;
//   }

//   case 1: {
//     let name;
//     break;
//   }
// }

// Q. What is an arrow function?
// Ways to write an arrow function
// // 1.
// const sum = (a, b) => {
//   return a + b;
// };

// 2
// const sum = (a, b) => a + b;

// Q. Difference between normal function and arrow function
// // A. "this" in functions
// const user = {
//   name: 'Walter White',

//   // Normal function
//   sayMyName: function () {
//     // Arrow function inside normal function
//     const sayMyNameAsArrowFunction = () => {
//       console.log(this); // Logs user object because it takes "this" from outer variable ie normal function
//     };

//     // Calling inside arrow function
//     sayMyNameAsArrowFunction();
//   },

//   // Arrow function outside normal function
//   anotherArrowFunction: () => {
//     console.log(this); // Logs window object because it takes "this" from outer variable ie global object
//   },
// };

// // Calling normal method of user object
// user.sayMyName();
// // Calling outside arrow method of user object
// user.anotherArrowFunction();

// // B. Constructor function
// // BA. With Normal function
// function Flower(color) {
//   this.color = color;
// }

// const flower = new Flower('Red');
// console.log(flower);

// // BB. With Arrow function
// const Flower = (color) => {
//   this.color = color;
// }

// const flower = new Flower('Red');
// console.log(flower); // Flower is not a constructor

// // C. "arguments” keyword exists
// // C1. With Normal function
// function sum() {
//   console.log(arguments); // Arguments(2) [2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// }

// sum(2, 3);

// // C2. With Arrow function
// const sum = () => {
//   console.log(arguments); // Error | ReferenceError: arguments is not defined
// };

// sum(2, 3);
