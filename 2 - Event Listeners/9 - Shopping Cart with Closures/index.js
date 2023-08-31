const products = document.querySelectorAll(".product");

const cart = {};

function addProductToCart(productId) {
  return function () {
    if (cart[productId]) {
      cart[productId]++;
    } else {
      cart[productId] = 1;
    }
    updateCart();
  };
}

function updateCart() {
  const cartItemsDiv = document.querySelector(".cart-items");
  cartItemsDiv.innerHTML = "";

  // entries = the values of an object
  for (const [productId, quantity] of Object.entries(cart)) {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `product ${productId}: ${quantity}`;
    cartItemsDiv.appendChild(cartItemDiv);
  }
}

products.forEach((product) => {
  const button = product.querySelector("button");
  const productId = product.dataset.id;
  button.addEventListener("click", addProductToCart(productId));
});

// const products = Array.from(document.querySelectorAll(".product"));

// const cart = {};

// function addProductToCart(productId) {
//   if (cart[productId]) {
//     cart[productId]++;
//   } else {
//     cart[productId] = 1;
//   }
//   updateCart();
// }

// function updateCart() {
//   const cartItemsDiv = document.querySelector(".cart-items");
//   cartItemsDiv.innerHTML = "";

//   // entries = the values of an object
//   for (const [productId, quantity] of Object.entries(cart)) {
//     const cartItemDiv = document.createElement("div");
//     cartItemDiv.className = "cart-item";
//     cartItemDiv.innerHTML = `Product ${productId}: ${quantity}`;
//     cartItemsDiv.appendChild(cartItemDiv);
//   }
// }

// products.forEach((product) => {
//   const button = product.querySelector("button");
//   const productId = product.dataset.id;
//   button.addEventListener("click", () => addProductToCart(productId));
// });
