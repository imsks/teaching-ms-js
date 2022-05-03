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
