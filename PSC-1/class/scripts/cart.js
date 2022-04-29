// Get the container element
const container = document.getElementById('container');

// Get total price element
const totalPriceDiv = document.getElementById('totalDisplay');

// Get the cart from localstorage
const cart = JSON.parse(localStorage.getItem('cart'));

// If the cart is not empty => Put an empty cart
if (!cart) localStorage.setItem('cart', JSON.stringify([]));

// Get total cart value
let total = 0;
cart.forEach((cartItem) => {
  total += cartItem.price;
});

updateTotalDisplay(total);

// Update the total display
function updateTotalDisplay(total) {
  totalPriceDiv.textContent = total;
}

// Call DOM Update functions
updateDOM();

// Update the DOM
function updateDOM() {
  container.innerHTML = '';

  cart.forEach((cartItem) => {
    let productCard = document.createElement('div');

    let image = document.createElement('img');
    image.src = cartItem.image;

    let name = document.createElement('p');
    name.textContent = cartItem.title;

    let price = document.createElement('p');
    price.textContent = cartItem.price;

    productCard.append(image, name, price);
    container.append(productCard);
  });
}

// Apply the discount
function applyCoupon() {
  let couponInput = document.getElementById('couponCount').value;

  if (couponInput === 'MASAI30') {
    total = total - 0.3 * total;
    updateTotalDisplay(total);
  }
}
