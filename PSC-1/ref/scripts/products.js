let container = document.getElementById('container');
let cartCount = document.getElementById('cart-count');

let sortButton = document.getElementById('sortButton');
let filterButton = document.getElementById('filterButton');

const API_URL = 'https://fakestoreapi.com/products';

updateDOM();

if (!localStorage.getItem('products'))
  localStorage.setItem('products', JSON.stringify([]));
if (!localStorage.getItem('cart'))
  localStorage.setItem('cart', JSON.stringify([]));

async function updateDOM() {
  try {
    let productList;

    if (JSON.parse(localStorage.getItem('products')).length > 0) {
      productList = JSON.parse(localStorage.getItem('products'));
    } else {
      productList = await fetchProducts();

      /** Product object
     *  category: string
        description: string
        id: number
        image: string
        price: number
        rating: Object {rate: number, count: number} 
        title: string
     */

      localStorage.setItem('products', JSON.stringify(productList));
    }

    updateCartCount(JSON.parse(localStorage.getItem('cart')));

    renderProducts(productList);
  } catch (error) {
    console.log(error);
  }
}

// Fetches the product from te Fakestore API
async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Renders the products on the screen
function renderProducts(productList) {
  container.innerHTML = '';

  productList.forEach((product) => {
    let productCard = document.createElement('div');

    let image = document.createElement('img');
    image.src = product.image;

    let name = document.createElement('p');
    name.textContent = product.title;

    let price = document.createElement('p');
    price.textContent = product.price;

    let addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.onclick = function () {
      addToCart(product);
    };

    productCard.append(image, name, price, addToCartButton);
    container.append(productCard);
  });
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  let isProductExistALready = cart.find(
    (cartItem) => cartItem.id === product.id
  );
  if (isProductExistALready) console.log('Product exists already');
  else {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(cart);
  }
}

function updateCartCount(cart) {
  cartCount.textContent = cart.length;
}

function filterProducts() {
  let productList = JSON.parse(localStorage.getItem('products'));
  let fiterCriteria = filterButton.value;
  let sortCriteria = sortButton.value;

  let updatedProductList = productList
    .filter((product) => {
      if (fiterCriteria === '0-50') return product.price < 50;
      else if (fiterCriteria === '51-100')
        return product.price > 50 && product.price <= 100;
      else if (fiterCriteria === '101-200')
        return product.price > 100 && product.price <= 200;
      else if (fiterCriteria === '>200') return product.price > 200;
      else return true;
    })
    .sort((productA, productB) => {
      if (sortCriteria === 'ASC') return productA.price - productB.price;
      if (sortCriteria === 'DESC') return productB.price - productA.price;
    });

  renderProducts(updatedProductList);
}

function sortProducts() {
  let productList = JSON.parse(localStorage.getItem('products'));
  let fiterCriteria = filterButton.value;
  let sortCriteria = sortButton.value;

  let updatedProductList = productList
    .filter((product) => {
      if (fiterCriteria === '0-50') return product.price < 50;
      else if (fiterCriteria === '51-100')
        return product.price > 50 && product.price <= 100;
      else if (fiterCriteria === '101-200')
        return product.price > 100 && product.price <= 200;
      else if (fiterCriteria === '>200') return product.price > 200;
      else return true;
    })
    .sort((productA, productB) => {
      if (sortCriteria === 'ASC') return productA.price - productB.price;
      if (sortCriteria === 'DESC') return productB.price - productA.price;
    });

  renderProducts(updatedProductList);
}
