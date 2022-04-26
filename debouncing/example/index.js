// Create a search input to capture the user's input
var searchInput = document.getElementById("searchbox")

// Create a timer to debounce the search function
let timeout

// Create a debounce function to limit the number of times the search function is called
var debounce = function (func, delay) {
  // Clear the timeout
  clearTimeout(timeout)

  // Set the timeout
  timeout = setTimeout(func, delay)
}

// Create a function to search
function search() {
  // Get the function counter label
  let functionCounterLabel = document.getElementById("function-counter")

  // Get the function counter
  let functionCounter = functionCounterLabel.innerHTML || 0

  // Increment the function counter
  functionCounter = parseInt(functionCounter, 0) + 1

  // Set the function counter label
  functionCounterLabel.innerHTML = functionCounter

  // Get the word label
  let wordLabel = document.getElementById("word")

  // Set the word label
  wordLabel.innerHTML = searchInput.value
}

// Add an event listener to the search input
searchInput.addEventListener("input", function () {
  // Get the event counter label
  let eventCounterLabel = document.getElementById("event-counter")

  // Get the event counter
  let eventCounter = eventCounterLabel.innerHTML || 0

  // Increment the event counter
  eventCounter = parseInt(eventCounter, 0) + 1

  // Set the event counter label
  eventCounterLabel.innerHTML = eventCounter

  // Call the debounce function
  debounce(search, 200)
})
