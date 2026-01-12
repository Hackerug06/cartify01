let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart");
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;
}

updateCartCount();
