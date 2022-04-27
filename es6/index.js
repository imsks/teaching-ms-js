// 1. var, let & const
// Previously we'd var keyword

// // 1. var
// console.log(x)
// var x = 5

/**
 * Hoisting
 *
 * Compiled as
 * var x = undefined
 * x = 5
 */

// 2. let
// console.log(x) // Hoisting doesn't work on let & const
// let x = 5
// console.log(x)

// x = 6
// console.log(x)

// // 3. const
// console.log(x)
// const x = 5

// // x = 6
// // console.log(x)

// 2. for/of => To loop over an array
// const users = ["Elon", "Jobs", "Gates"]

// 2A. For
// for(let index = 0; index < users.length; index++) {
//     console.log(users[index])
// }

// 2B. forEach => Most Recommended
// users.forEach(function (user, index) {
//     console.log(user)
// })

// 2C. for/of
// for(let user of users) {
//     console.log(user)
// }

// 3. Arrow Functions
// 3A. Normal
// const sum = function (a, b) {
//     return a + b
// }

// const result = sum(2, 4)
// console.log(result)

// 3B. Arrow Functions
// const sum = (a, b) => {
//     return a + b
// }

// const sum = (a, b) => a + b

// const result = sum(2, 6)
// console.log(result)

// const getSquareOfANumber = (number) => number ** number // 12 to the power 12

// console.log(getSquareOfANumber(12))

// 4. Map & Set
// 4A. Map
// Map is more like an object
// Advantage of map is key can be even a function
// Create Objects
// const apples = { name: 'Apples' };
// const bananas = { name: 'Bananas' };
// const oranges = { name: 'Oranges' };

// // Create a new Map
// const fruits = new Map();

// // Add new Elements to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// console.log(fruits);

// 4B. Set
// To remove duplicates from an array => array => set => array
// Create a Set
// const letters = new Set();

// // Add some values to the Set
// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("c");
// console.log(letters)

// 5. Default & Rest Parameters in functions
// 5A. Default
// const sum = (a, b = 3) => {
//     console.log(a, b)
//     return a + b
// }

// console.log(sum(6))

// // 5B. Rest Parameter
// const sum = (...args) => {
//   for (let arg of args) console.log(arg);
//   //   return a + b;
// };

// sum(6, 3, 9);

// 6. Array Methods
const numbers = [2, 4, 6];

// 6A. find => finds if an element exists
// const isEven = (value, index) => {
//   return value % 2 === 1;
// };

// const result = numbers.find(isEven);
// console.log(result);

// 6B. findIndex
// const result = numbers.findIndex((value, index) => {
//     return value % 2 === 0;
// })

// console.log(result)

// 7. Global Methods
// 7A. isFinite => Checks if a value is finite or infinite
// const number = 5 / 0

// console.log(isFinite(number))

// // 7B. isNaN => Checks if a value is number or not
// const name = "John"
// const number = 5

// console.log(isNaN(name))
// console.log(isNaN(number))