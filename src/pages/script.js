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

function updateCartUI() {
  // Calculate total number of pieces in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update the HTML text
  document.getElementById('cart-count').innerText = totalItems;
}

function removeFromCart(id) {
  // Find the index of the item in the cart array
  const itemIndex = cart.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
    // Decrease the quantity
    cart[itemIndex].quantity -= 1;

    // If quantity reaches 0, remove the item entirely from the array
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }

  // Save the updated cart to localStorage
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
}
  
  // Refresh the UI to update counts and displays
  updateCartUI();
