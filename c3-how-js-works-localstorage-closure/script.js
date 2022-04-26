// // Closure
// function sum() {
//     return function (a, b) {
//         // console.log(a, b) // undefined + undefined
//         return a + b
//     }
// }

// const result = sum()(2, 6)

// console.log(result)

// // NaN => Not A Number

// // Any function returning another function is a case of closure

function makeFunc() {
  var name = 'Mozilla';

  function displayName(name) {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();

myFunc("Sachin");
