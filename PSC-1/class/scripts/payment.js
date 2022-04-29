// Place the order
// Return a promise
// Set the timeout

// Place the order
// Check if the order was placed successfully

function placeOrder() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  }).then((result) => {
    if (result) console.log('Order placed successfully');
  });
}
