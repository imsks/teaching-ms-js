// Documentation to follow - https://dog.ceo/dog-api/documentation/

var searchInput = document.getElementById("searchbox")

let timeout
var debounce = function (func, delay) {
  clearTimeout(timeout)

  timeout = setTimeout(func, delay)
}

function searchDog() {
  console.log("Ready to search for a dog!")
}

searchInput.addEventListener("input", function () {
  debounce(searchDog, 200)
})
