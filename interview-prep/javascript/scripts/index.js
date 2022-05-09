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

// Q. What is High Order Function?
// // A. Accepts function as argument
// function foo(callback) {
//   // Calling callback function
//   callback(); // I'm a callback function
// }

// function bar() {
//   console.log("I'm a callback function");
// }

// // Passing bar function in foo so it gets called inside foo function
// foo(bar);

// // B. Returns a function
// function foo() {
//   return function () {
//     console.log('Logging from returned function');
//   };
// }

// const anotherFunction = foo()
// anotherFunction()

// // Q. What is IIFE?
// // A. With normal function
// function callMe() {
//     console.log('Function gets called');
//   }

//   callMe() // Function gets called

//   // B. With IFFE
//   (function () {
//     console.log("Immidialtely called after it's created."); // Immidialtely called here
//   })();

//   // TIP - Observe here that in IIFE even though function is defined but without any name. These are called Anonymous functions.

// Q. What is an anonymous function?
// // A. Assigning to a variable
// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(2, 4));

// // B. As callback function
// [1, 2, 3, 4].forEach(function (item) {
//   // Function inside forEach is anonymous function
//   // Do something with each element
// });

// // TIP - Observe here that we're provide another function in forEach function that makes our forEach function a high order function, just we understood above.

// // Q.  What is a unary function?
// function foo(a) {
//   console.log("I'm a uniary function");
// }

// function bar(a, b) {
//   console.log("I'm not a uniary function");
// }

// Q. What is a currying function?
// // A. Multi-argument function
// const sumOfThreeNumbers = (a, b, c) => {
//   return a + b + c;
// };

// sumOfThreeNumbers(1, 2, 3); // 6

// // B. With Curry function
// const sumOfThreeNumbersWithCurrying = (a) => {
//   return (b) => { // Calling sumOfThreeNumbersWithCurrying will return this
//     return (c) => { // Calling sumOfThreeNumbersWithCurrying 2x will return this
//       return a + b + c; // Calling sumOfThreeNumbersWithCurrying 3x will return this
//     };
//   };
// };

// const aFunction = sumOfThreeNumbersWithCurrying(1); // Returns a function
// const anotherFunction = aFunction(2); // Returns a function again
// const andAnotherFunction = anotherFunction(3); // Returns value
// console.log(andAnotherFunction); // 6

// // Q. What is a callback function?
// function mainFunction(firstCallback) { // 2
//   firstCallback(callBack2); // 3
// }

// function callback1(secondCallback) { // 4
//   console.log('First callback'); // 5

//   secondCallback(callback3); // 6
// }

// function callBack2(thirdCallback) { // 7
//   console.log('Second callback'); // 8

//   thirdCallback(); // 9
// }

// function callback3() { // 10
//   console.log('Third callback'); // 11
// }

// mainFunction(callback1); // 1.

// // Q. What does closures mean?
// function sum(a) {
//     return function (b) { // Here sum function returns another function
//       return a + b; // a is not defined in this scope(See cusly braces.) It's defined in OUTER function sum still it can do sum operation as a + b
//     };
//   }

//   const returnedFunction = sum(2); // Sending a here. Returns a function asking to provide b value as well
//   const result = returnedFunction(4); // Sending b here. A is already sent above No?
//   console.log(result); // 6

//   // TIP - This closure concept was also used in Currying as we saw above.

// Q. Difference between Call, Apply & Bind
// // A. Call
// const movie1 = {
//   name: 'Bahubali: The Beginning',
//   director: 'S. S. Rajamauli',
//   year: 2015,
// };

// const movie2 = {
//   name: 'Bahubali: The Conslusion',
//   director: 'S. S. Rajamauli',
//   year: 2017,
// };

// function getMovieInfo(additionArgument) {
//   console.log(`Movie's name is ${this.name}`);
//   console.log(`Movie's Director name is ${this.director}`);
//   console.log(`Movie was release in ${this.year}`);
//   console.log(`An Additional Arguement is ${additionArgument}`);
// }

// // To get Bahubali: The Beginning Data because calling with movie1 object
// getMovieInfo.call(movie1, 'An Additional Parameter');
// // To get Bahubali: The Conclusion Data because calling with movie2 object
// getMovieInfo.call(movie2, 'An Additional Parameter');

// // B. Apply => Same as Call method but parameters passed inside array
// const movie1 = {
//   name: 'Bahubali: The Beginning',
//   director: 'S. S. Rajamauli',
//   year: 2015,
// };

// const movie2 = {
//   name: 'Bahubali: The Conslusion',
//   director: 'S. S. Rajamauli',
//   year: 2017,
// };

// function getMovieInfo(additionArgument, anotherAdditionalParameter) {
//   console.log(`Movie's name is ${this.name}`);
//   console.log(`Movie's Director name is ${this.director}`);
//   console.log(`Movie was release in ${this.year}`);
//   console.log(`An Additional Arguement is ${additionArgument}`);
//   console.log(
//     `An Another Additional Arguement is ${anotherAdditionalParameter}`
//   );
// }

// // To get Bahubali: The Beginning Data because calling with movie1 object
// getMovieInfo.apply(movie1, [
//   // Observe here we pass parameter in an array, unlike call method where we simply pass without any array. That's the only difference
//   'An Additional Parameter',
//   'Another Additional Parameter',
// ]);
// // To get Bahubali: The Conclusion Data because calling with movie2 object
// getMovieInfo.apply(movie2, [
//   'An Additional Parameter',
//   'Another Additional Parameter',
// ]);

// // C. Bind
// const movie1 = {
//   name: 'Bahubali: The Beginning',
//   director: 'S. S. Rajamauli',
//   year: 2015,
// };

// const movie2 = {
//   name: 'Bahubali: The Conslusion',
//   director: 'S. S. Rajamauli',
//   year: 2017,
// };

// function getMovieInfo(additionArgument, anotherAdditionalParameter) {
//   console.log(`Movie's name is ${this.name}`);
//   console.log(`Movie's Director name is ${this.director}`);
//   console.log(`Movie was release in ${this.year}`);
//   console.log(`An Additional Arguement is ${additionArgument}`);
//   console.log(
//     `An Another Additional Arguement is ${anotherAdditionalParameter}`
//   );
// }

// // Bounded movie1 object with bind method and stored the result in movie1Info
// const movie1Info = getMovieInfo.bind(movie1);
// // Bounded movie2 object with bind method and stored the result in movie2Info
// const movie2Info = getMovieInfo.bind(movie2);

// // NOTE Bind method returns a function so we'll need to call it.

// // Case 1: Without any parameters
// movie1Info();
// /* Logged the data as follows -
// Movie's name is Bahubali: The Beginning
// Movie's Director name is S. S. Rajamauli
// Movie was release in 2015
// An Additional Arguement is undefined => HERE Undefined because while calling movie1Info() we didn't pass any parameters
// An Another Additional Arguement is undefined => HERE Undefined because while calling movie1Info() we didn't pass any parameters
// */

// // Case 2: With parameters
// movie1Info('An Additional Parameter', 'Another Additional Parameter');
// /* Logged the data as follows -
// Movie's name is Bahubali: The Beginning
// Movie's Director name is S. S. Rajamauli
// Movie was release in 2015
// An Additional Arguement is An Additional Parameter
// An Another Additional Arguement is Another Additional Parameter
// */

// // Q. Difference between == and ===
// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory

// // Q. Why do we need callback functions?
// function firstFunction() {
//   // Simulate a code delay
//   setTimeout(function () {
//     console.log('First function called');
//   }, 1000);
// }
// function secondFunction() {
//   console.log('Second function called');
// }
// firstFunction();
// secondFunction();

// // Logges in order
// // 1. Second function called
// // 2. First function called

// Q. What is a Promise?
// const promise = new Promise(function (resolve, reject) {
//   // When getting resolved
//   resolve({});

//   // When getting rejected
//   reject({});
// });

// // Case 1: When getting resolved
// const promise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("I'm a resolved Promise!");
//   }, 500);
// });

// promise1.then((value) => console.log(value)); // I'm a resolved Promise!

// // Case 2: When getting rejected
// const promise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("I'm a rejected Promise!");
//   }, 500);
// });

// promise2.catch((value) => console.log(value)); // I'm a rejected Promise!

// // Q. Why is callback hell?
// oneFunction(
//     anotherFunction(
//         andAnotherFunction()
//     )
// );

// // Q. What is a Promise Chaining?
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result); // 6
//     return result * 4;
//   });

// // Q. What is a Promise Chaining?
// // Defining all promises
// const promiseFor1Sec = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// const promiseFor2Sec = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 2000);
// });

// const promiseForReject = new Promise(function (resolve, reject) {
//   reject(2);
// });

// // // 1. Promise.all
// // // 1A. All are resolved after 2 seconds because even if 1st will resolve in 1sec,
// // //  it still waits for 2nd promise to get resolved BECAUSE ALL NEEDS TO BE RESOLVED
// // Promise.all([promiseFor1Sec, promiseFor2Sec]).then(function (values) {
// //   console.log(values); // [1, 2]
// // });

// // // 1B. Or Even if one is rejected
// // Promise.all([promiseFor1Sec, promiseFor2Sec, promiseForReject]).then(function (
// //   values
// // ) {
// //   console.log(values); // Error | Uncaught (in promise) 2
// // });

// // // 2. Promise.race
// // // 2A. For resolve
// // Promise.race([promiseFor1Sec, promiseFor2Sec]).then(function (values) {
// //   console.log(values); // 1 because promiseFor1Sec will resolve first
// // });

// // // 2B. For reject
// // Promise.race([promiseFor1Sec, promiseFor2Sec, promiseForReject]).then(function (
// //   values
// // ) {
// //   console.log(values); // 1 because promiseFor1Sec will resolve first
// // });
