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