// This is the boilerplate code given for you
// You can modify this code
// Product data

// script.js

// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render products
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const cartList = document.getElementById("cart-list");
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    cartList.appendChild(li);

    // Update session storage
    updateSessionStorage();
  }
}

// Function to update session storage with cart data
function updateSessionStorage() {
  const cartItems = [];
  const cartList = document.getElementById("cart-list");
  cartList.childNodes.forEach(li => cartItems.push(li.textContent.trim()));
  sessionStorage.setItem("cart", JSON.stringify(cartItems));
}

// Function to load cart data from session storage
function loadCartFromSessionStorage() {
  const cartList = document.getElementById("cart-list");
  const storedCart = sessionStorage.getItem("cart");
  if (storedCart) {
    JSON.parse(storedCart).forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      cartList.appendChild(li);
    });
  }
}

// Function to clear the cart
function clearCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  sessionStorage.removeItem("cart");
}

// Initial setup
renderProducts();
loadCartFromSessionStorage();
