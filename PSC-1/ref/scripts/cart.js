let container = document.getElementById('container');
let totalDisplayDiv = document.getElementById('totalDisplay');

let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) localStorage.setItem('cart', JSON.stringify([]));

// Get total cart value
let total = cart.reduce((prevItem, currentItem) => {
  return prevItem.price + currentItem.price;
});

function updateTotalDisplay(total) {
  totalDisplayDiv.textContent = total;
}

updateTotalDisplay(total);
updateDOM(cart);

function updateDOM(cart) {
  cart.forEach((cartItem) => {});

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

function applyCoupon() {
  let couponInput = document.getElementById('couponCount').value;
  if (couponInput === 'MASAI30') {
    total = total - 0.3 * total;
    updateTotalDisplay(total)
  }
}
