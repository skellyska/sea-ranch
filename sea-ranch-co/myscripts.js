const shopNowButton = document.getElementById("shop-now");

shopNowButton.addEventListener("click", () => {
  window.location.href = "shop.html";
})


// Define variables for the cart and cart button
let cart = [];
const cartBtn = document.getElementById("cart-btn");

// Add click event listener to all Add to Cart buttons
const addToCartBtns = document.querySelectorAll(".product button");
addToCartBtns.forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    const product = event.target.parentElement;
    const productId = product.getAttribute("data-id");
    const productName = product.querySelector("h3").textContent;
    const productPrice = product.querySelector("p").textContent;
    const cartItem = { id: productId, name: productName, price: productPrice };
    cart.push(cartItem);
    updateCartCount();
    saveCart();
  });
});

// Update the cart count in the cart button
function updateCartCount() {
  const cartCount = cart.length;
  cartBtn.innerHTML = `Cart (${cartCount})`;
}

// Save the cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Load the cart from localStorage
function loadCart() {
  const cartString = localStorage.getItem("cart");
  if (cartString) {
    cart = JSON.parse(cartString);
    updateCartCount();
  }
}

// Initialize the cart
loadCart();
