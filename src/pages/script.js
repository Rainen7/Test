// Load existing cart from storage, or start with an empty array
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// Run on page load to display correct count
updateCartUI();

function addToCart(id, name, price) {
  // Check if item is already in the cart
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    // If it exists, increase the quantity
    existingItem.quantity += 1;
  } else {
    // If it is new, push a new item object
    cart.push({ id, name, price, quantity: 1 });
  }

  // Save updated cart to localStorage
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
  
  // Refresh the counter on screen
  updateCartUI();
}

function updateCartUI() {
  // Calculate total number of pieces in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update the HTML text
  document.getElementById('cart-count').innerText = totalItems;
}
