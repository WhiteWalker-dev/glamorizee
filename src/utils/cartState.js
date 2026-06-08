// Utility to manage shopping cart and wishlist state via localStorage and custom events

const CART_KEY = 'glamorizee_cart';
const WISHLIST_KEY = 'glamorizee_wishlist';

// Helper to dispatch custom events for state sync
const dispatchEvent = (eventName) => {
  window.dispatchEvent(new Event(eventName));
};

// --- CART METHODS ---

export function getCart() {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading cart:', e);
    return [];
  }
}

export function addToCart(product) {
  const cart = getCart();
  // Find if item already exists
  const existingItemIndex = cart.findIndex(
    item => item.id === product.id && item.selectedOption === product.selectedOption
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
      selectedOption: product.selectedOption || 'Gold'
    });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  dispatchEvent('cart-updated');
}

export function removeFromCart(productId, selectedOption) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.selectedOption === selectedOption));
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  dispatchEvent('cart-updated');
}

export function updateCartQuantity(productId, selectedOption, quantity) {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === productId && item.selectedOption === selectedOption);
  
  if (index > -1) {
    if (quantity <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = quantity;
    }
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    dispatchEvent('cart-updated');
  }
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  dispatchEvent('cart-updated');
}

// --- WISHLIST METHODS ---

export function getWishlist() {
  try {
    const data = localStorage.getItem(WISHLIST_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading wishlist:', e);
    return [];
  }
}

export function toggleWishlist(product) {
  const wishlist = getWishlist();
  const index = wishlist.findIndex(item => item.id === product.id);

  if (index > -1) {
    // Remove if exists
    wishlist.splice(index, 1);
  } else {
    // Add if new
    wishlist.push(product);
  }

  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  dispatchEvent('wishlist-updated');
  return index === -1; // returns true if added, false if removed
}

export function isInWishlist(productId) {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === productId);
}
