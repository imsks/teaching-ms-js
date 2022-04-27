// Documentation to follow - https://dog.ceo/dog-api/documentation/

var searchInput = document.getElementById('searchbox');

let timeout;
var debounce = function (func, delay) {
  if (timeout) clearTimeout(timeout);

  timeout = setTimeout(func, delay);
};

function searchDog() {
  const dogBreedName = searchInput.value

  const BASE_URL = `https://dog.ceo/api/breed/${searchInput.value}/images`;

  console.log('Ready to search for a dog!');
  /**
   *
   * fetch(URL).then().catch()
   */

  fetch(BASE_URL)
    .then(function (response) {
      response.json().then(function (result) {
        console.log(result);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

searchInput.addEventListener('input', function () {
  console.log(searchInput.value)
  debounce(searchDog, 3000);
});
