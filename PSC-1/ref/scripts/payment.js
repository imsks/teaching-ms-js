function placeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}

placeOrder().then((result) => {
  if (result) {
    console.log('Order placed successfully');
  }
});
