let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// Run immediately on page load to show saved items
updateCartUI();

function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }

  // Save the updated cart to storage
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
  
  // Refresh the number on the screen
  updateCartUI();
} // <-- This closes addToCart properly now!

function removeFromCart(id) {
  const itemIndex = cart.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
    cart[itemIndex].quantity -= 1;

    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }

  // Save the updated cart to storage
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
  
  // Refresh the number on the screen
  updateCartUI();
} // <-- This closes removeFromCart properly now!

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const counterElement = document.getElementById('cart-count');
  if (counterElement) {
    counterElement.innerText = totalItems;
  }
} // <-- This closes updateCartUI properly now!
