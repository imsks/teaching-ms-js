/**
 * Topic Summary
 *
 * 1. Creating an object using Object Literal
 * 2. Issues with Object Literal
 * 3. Constructor function
 * 4. Creating objects with constructor function
 * 5. Params in constructor function
 * 6. Constructor Function Vs Object Literal ie. unique context for constuctor function
 * 7. Examples of adding properties on objects & constructor function
 * 8. Built-in constructor functions
 */

// 1.  Creating an object using Object Literal
// const user = {
//   name: 'John',
//   age: 12,
//   isStudent: true,

//   getName: function () {
//     console.log();
//   },
// };

// const user2 = {
//   name: 'James',
//   age: 23,
//   isStudent: false,

//   getName: function () {
//     console.log();
//   },
// };

// const user3 = {
//   name: 'James',
//   age: 23,
//   isStudent: false,

//   getName: function () {
//     console.log();
//   },
// };

// 3. Constructor function
// function User() {
//     this.name = "John";
//     this.age = 12,
//     this.isMale = true
// }

// const user1 = new User();
// const user2 = new User();

// console.log(user1, user2)

// // variable name => String, Number etc => As noun
// // Function name => As Verb => addTwoNumber

// // 4. Params in constructor function
// function User(name, age, isStudent, location) {
//   this.name = name;
//   this.age = age;
//   this.isStudent = isStudent;
//   this.location = location
// }

// const john = new User('John', 12, true, "India");
// const james = new User('James', 23, false);

// console.log(john.location, james.location);

// 6. Constructor Function Vs Object Literal
// 6A. Object Literal
// const user1 = {
//   name: 'John',
//   age: 12,
// };

// const user2 = user1

// user1.age = 100

// console.log(user1, user2)

// // 6B. Constructor Function
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let user3 = new User('John', 12);
// let user4 = new User('James', 23);

// user3 = null

// console.log(user3, user4);


// 7. Built-in constructor functions
// const string = new String("SS")
// console.log(string)

// const user = new Object({})
// console.log(user)