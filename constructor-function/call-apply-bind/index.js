/**
 * Topic Summary
 *
 * 1. Bind method - Creates a new function when called has its own "this"
 * 2.
 */

/** Bind Example
 * const characterDetails = {
 *  name: "James Bind"
 * }
 *
 * const getCharacterName = function() {
 *  console.log(this.name, " is the character name")
 * }
 *
 * const characterName = getCharacterName.bind(characterDetails)
 */

// 1. Bind => Returns a function to use it with "this"
// 1A. Created an object
// const user = {
//     name: "James",
//     age: 12
// }

// // 1B. Create a function
// const getName = function getName() {
//     console.log(this.age)
// }

// // getName => gun
// // user => bullet

// const result = getName.bind(user)
// result()

/**
 * Call Method
 *
 * const characterDetails = {
 *  name: "Ramadheer Singh"
 * }
 *
 * const getCharacterDetails = function(friend) {
 *  console.log(this.name + " is friend of " + friend)
 * }
 *
 * console.log(getCharacterDetails.call(characterDetails, "Sultan"))
 */

// 2A. Created an object
// const characterDetails = {
//   name: 'Ramadheer Singh',
// };

// // 2B. Created an function
// const getCharacterDetails = function (friend) {
//   console.log(this.name + ' is a friend of ' + friend);
// };

// getCharacterDetails.call(characterDetails, 'Sultan');

/**
 * Apply Method
 *
 * const characterDetails = {
 *  name: "Ramadheer Singh"
 * }
 *
 * const getCharacterDetails = function(friend) {
 *  console.log(this.name + " is friend of " + friend)
 * }
 *
 * console.log(getCharacterDetails.call(characterDetails, ["Sultan"]))
 */

const characterDetails = {
  name: 'Ramadheer Singh',
};

// 2B. Created an function
const getCharacterDetails = function (friend) {
  console.log(this.name + ' is a friend of ' + friend);
};

getCharacterDetails.apply(characterDetails, ['Sultan']);

// Apply => uses array to pass the params
// Call => will not be using any ARRAY

// Differences => Bind && Call, Apply

// 1. Bind allows to call the function afterwards
// Call & Apply needs to call immidiately