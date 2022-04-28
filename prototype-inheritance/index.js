/**
 * Topic Sumary
 * 1. Fundamental block of JS ie Object
 * 2. Object.create() method
 * 3. Example 1 - Animals => Wolf => Dog
 * 3. Prototype Object from create method
 * 4. Example 2 - Family Structure
 * 5. What is __proto__
 * 6. Example 3 - Google Auth
 * 7. Prototype in Constructor function
 * 8. Example 4 - Student example
 * 9. Everything in Javascript that uses dot(.) is an object
 * 10. Example 5 - new Array() constructor and its prototypes
 *
 */

// const Cat = {
//   legs: 4,
//   claws: 'Sharp',
//   isTail: true,
// };

// // const Tiger = {
// //   legs: 4,
// //   claws: 'Sharp',
// //   isTail: true,
// //   speed: 60,
// // };

// const Tiger = Object.create(Cat)

// Tiger.speed = 60

// console.log(Tiger)

// // Wolf => Dog
// const Wolf = {
//   isAggresive: true,
//   location: 'Forest',
// };

// const Dog = {
//   isAggresive: false,
//   location: 'Forest',
// };

// 3. Prototype Object from create method
// const grandFather = {
//   surname: 'Bond',
//   strength: 'Hard Working',
// };

// // const father = {
// //   age: 50,
// // };

// const father = Object.create(grandFather);

// father.age = 50;

// const you = Object.create(father);

// you.age = 20;

// console.log(you);

// 4. __proto__
// const grandFather = {
//   surname: 'Bond',
//   strength: 'Hard Working',
// };

// const father = Object.create(grandFather);

// father.age = 50;

// const you = Object.create(father);

// // you.age = 20;

// console.log(you);

// Null
// Object
// Grandfather 
// Father 
// You 

// function Movie(budget, noOfCrew, directorName) {
//   this.budget = budget;
//   this.noOfCrew = noOfCrew;
//   this.directorName = directorName;
// }

// Movie.prototype.doMarketing = function () {
//   console.log('Marketing started');
// };

// Movie.prototype.daysTaken = 30

// const movie = new Movie('100cr', 50, 'Satyajeet Ray');
// movie.doMarketing();

// const arr1 = []

// const arr = new Array()
// console.log(arr)

// const str = 'Ramesh';
// console.log(str)

// What if we created our own Array Data Type
// arguments = [1, 2, 3]
// function MyArray() {
//   Object.defineProperty(this, 'length', {
//     enumerable: false,
//     writable: true,
//   });

//   for (let index = 0; index < arguments.length; index++) {
//     this[index] = arguments[index];
//   }

//   this.length = arguments.length;
// }

// MyArray.prototype.push = function (item) {
//   let index = this.length; // 3
//   this[index] = item;
//   this.length++;
// };

// MyArray.prototype.pop = function() {
//     let index = this.length - 1 // index = 2
//     delete this[index]
//     this.length--
// }

// const arr = new MyArray(1, 2, 3);

// arr.push(4);
// arr.push(4);
// arr.pop()

// console.log(arr);


// Array.prototype.pop = function () {
//     console.log("Walter White")
// }

// const arr = []
// arr.sayMyName()