// /**
//  * Topic Summary
//  *
//  * 1. Method attached to an object from outside
//  * 2. Method inside an object ie Method shorthand
//  * 3. "this" in methods
//  * 4. “this” is not bound ie value of this depends on context
//  * 5. Calling "this" without an object in a function
//  * 6. Arrow function has no "this" ie uses from outer variable
//  */

// // Object property(key => value) values can be string, number, boolean, function or even a new object
// // const user = {
// //     name: "John",
// //     age: 12,
// //     isStudent: true
// // }

// // What if a value of an object is a function
// // const user = {
// //     name: "John",
// //     age: 12,
// //     isStudent: true,

// //     // getName is a method
// //     getName: function() {
// //         console.log("Getting a name")
// //     }
// // }

// // We can have functions inside an object

// // Method vs Function
// // We can a function, a method when it's used inside an object

// // 1. Method attached to an object from outside
// // const user = {
// //     name: "John",
// //     age: 12,
// //     isStudent: true,
// // }

// // // Function is an object ie. Data Type
// // function getName() {
// //     console.log("Getting the name")
// // }

// // // user.location = "India"
// // user.getName = getName

// // user.getName()

// // // 2. Method inside an object ie Method shorthand
// // const user = {
// //     name: "John",
// //     age: 12,
// //     isStudent: true,
// //     getName: function(){
// //         console.log("Getting the name")
// //     }
// // }

// // user.getName()

// // // 3. "this" in methods
// // const user = {
// //     name: "John",
// //     age: 12,
// //     isStudent: true,

// //     getName: function(){
// //         console.log("The name of the user is " + this.name)
// //     }
// // }

// // user.getName()

// // OOPs => Object-Oriented Programming ie JS

// // DOM => Document Object Model

// // // 4. “this” is not bound ie value of this depends on context
// // function foo() {
// //     console.log(this)
// // }

// // /**
// //  * if this is called inside an object => Refers to that object
// //  * if it can't find the object => Refers to global object
// //  */

// // foo()

// // 5. Calling "this" without an object in a function

// // function foo() {
// //     const name = "John"

// //     console.log(this.name)
// // }

// // foo()

// // let user = {
// //   name: 'John',
// //   age: 30,

// //   sayHi() {
// //     // console.log(user.name); // "user" instead of "this"
// //   },
// // };

// // user.sayHi()

// // const admin = user

// // user = null

// // console.log(user)
// // console.log(admin.name)

// // 7. Arrow function has no "this" ie uses from outer variable

// // const user = () => {
// //     console.log(this)
// // }

// // user()

// let user = {
//   firstName: 'Ilya',
  
//   sayHi() {
//     let arrow = () => console.log(this);
//     arrow();
//   },
// };

// console.log(user)

// user.sayHi(); // Ilya
