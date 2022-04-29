// Get the container element
const container = document.getElementById('container');

// Get the element cart counter
const cartCounter = document.getElementById('cart-count');

// Get the sort button dropdown element
const sortButton = document.getElementById('sortButton');

// Get the filter button dropdown element
const filterButton = document.getElementById('filterButton');

// API URL to fetch the products
const apiURL = 'https://fakestoreapi.com/products';

// Call update the DOM function
updateDOM();

// Check if localstorage has products => if not put it as empty array
if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify([]));
}

// Check if localstorage has cart => if not put it as empty array
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Update the DOM
function updateDOM() {
  // if localstorage has products
  let products = JSON.parse(localStorage.getItem('products'));

  // if localstorage has no products => fetch the products from the API
  if (!products) {
    fetchProducts().then((products) => {
      // Set the products to localstorage
      localStorage.setItem('products', JSON.stringify(products));

      // Render products
      renderProducts(products);
    });
  }
  /** Product object
     *  category: string
        description: string
        id: number
        image: string
        price: number
        rating: Object {rate: number, count: number} 
        title: string
     */

  // Render the products on the screen
  renderProducts(products);
}

// Fetches the product from te Fakestore API
async function fetchProducts() {
  // Get response from the API
  const response = await fetch(apiURL);
  // Get the response data
  const products = await response.json();
  // Return the products
  return products;
}

// Renders the products on the screen
function renderProducts(products) {
  // Clear the container
  container.innerHTML = '';

  // Loop through the products
  products.forEach((product) => {
    // Create the product card element
    const productCard = document.createElement('div'); // <div></div>

    // Add image element
    const image = document.createElement('img'); // <img />
    // Set the image source
    image.src = product.image; // <img src={product.image} />

    // Add title element
    const title = document.createElement('p'); // <p></p>
    // Set the title text
    title.textContent = product.title; // <p>{product.title}</p>

    // Add price element
    const price = document.createElement('p'); // <p></p>
    // Set the price text
    price.textContent = `$${product.price}`; // <p>{product.price}</p>

    // Add Add to Cart button
    const addToCartButton = document.createElement('button'); // <button></button>
    // Set the button text
    addToCartButton.textContent = 'Add to Cart'; // <button>Add to Cart</button>
    // Add event listener to the button
    addToCartButton.addEventListener('click', () => { // <button onclick="addToCart(product)">Add to Cart</button>
      addToCart(product);
    });

    /**
     * <div>
     *  <img src="" />
     *  <p></p>
     *  <p></p>
     *  <button onclick="addToCart(product)">Add to cart</button>
     * </div>
     * 
     * <div id="container">
     * <div>
     *  <img src="" />
     *  <p></p>
     *  <p></p>
     *  <button onclick="addToCart(product)">Add to cart</button>
     * </div>
     * </div>
     */

    // Add the elements to the product card
    productCard.append(image, title, price, addToCartButton);

    // Add the product card to the container
    container.append(productCard);
  });
}

// Add product to the cart
function addToCart(product) {
  // Get the cart from localstorage
  let cart = JSON.parse(localStorage.getItem('cart'));

  // Check if the product is already in the cart
  let productInCart = cart.find((cartItem) => {
    return cartItem.id === product.id;
  });

  // If the product is already in the cart
  if (productInCart) {
    console.log('Product already in cart');
    return;
  }

  // Push product to cart
  cart.push(product);

  // Save the cart in localstorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart count on screen
  cartCounter.textContent = cart.length;
}

// The filter button
function filterProducts() {
  // Get the products from localstorage
  let products = JSON.parse(localStorage.getItem('products'));
  // Get the filter criteria
  let filterCriteria = filterButton.value;
  // Get the sort criteria
  let sortCriteria = sortButton.value;

  products = products
    .filter((product) => {
      if (filterCriteria === '0-50') return product.price < 50;
      else if (filterCriteria === '51-100')
        return product.price > 50 && product.price <= 100;
      else if (filterCriteria === '101-200')
        return product.price > 100 && product.price <= 200;
      else if (filterCriteria === '>200') return product.price > 200;
    })
    .sort((productA, productB) => {
      if (sortCriteria === 'ASC') return productA.price - productB.price;
      else if (sortCriteria === 'DESC') return productB.price - productA.price;
    });

  // Render the products on the screen
  renderProducts(products);
}
