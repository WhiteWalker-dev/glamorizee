import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCart, updateCartQuantity, removeFromCart } from '../utils/cartState';

export default function ShoppingBag() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const loadCart = () => {
    setCartItems(getCart());
  };

  useEffect(() => {
    loadCart();
    
    // Listen to changes
    window.addEventListener('cart-updated', loadCart);
    return () => {
      window.removeEventListener('cart-updated', loadCart);
    };
  }, []);

  const handleQuantityChange = (id, option, newQty) => {
    updateCartQuantity(id, option, newQty);
  };

  const handleRemove = (id, option) => {
    removeFromCart(id, option);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleClose = () => {
    // Navigate back, or home if there's no history
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div aria-labelledby="slide-over-title" aria-modal="true" className="fixed inset-0 z-[100] flex justify-end" role="dialog">
      {/* Backdrop Overlay */}
      <div 
        onClick={handleClose}
        aria-hidden="true" 
        className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity duration-500 cursor-pointer"
      ></div>
      
      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md h-full bg-surface-container-lowest shadow-2xl flex flex-col transform transition-transform duration-500 ease-out translate-x-0 border-l border-outline-variant/30">
        
        {/* Cart Header */}
        <div className="flex items-center justify-between px-gutter py-6 border-b border-outline-variant/30">
          <h2 className="font-headline-lg text-headline-lg text-on-surface" id="slide-over-title">Your Bag</h2>
          <button 
            onClick={handleClose}
            aria-label="Close cart" 
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 p-2 -mr-2 cursor-pointer" 
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-gutter py-8 space-y-8">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.selectedOption}`} className="flex gap-6 group">
              <div className="w-24 h-32 flex-shrink-0 border border-outline-variant/30 overflow-hidden bg-surface-container">
                <img alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src={item.image}/>
              </div>
              <div className="flex flex-col flex-1 py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-body-md text-body-md text-on-surface mb-1">{item.title}</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{item.selectedOption}</p>
                  </div>
                  <button 
                    onClick={() => handleRemove(item.id, item.selectedOption)}
                    aria-label="Remove item" 
                    className="text-on-surface-variant hover:text-error transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">delete_outline</span>
                  </button>
                </div>
                <div className="mt-auto flex justify-between items-end">
                  <div className="flex items-center border border-outline-variant/50">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.selectedOption, item.quantity - 1)}
                      aria-label="Decrease quantity" 
                      className="px-3 py-1 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                    >
                      −
                    </button>
                    <span className="font-label-md text-label-md text-on-surface px-2 min-w-[2ch] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.selectedOption, item.quantity + 1)}
                      aria-label="Increase quantity" 
                      className="px-3 py-1 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}

          {cartItems.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <span className="material-symbols-outlined text-[64px] text-outline-variant mb-6">shopping_bag</span>
              <p className="font-body-lg text-body-lg text-secondary mb-8">Your bag is currently empty.</p>
              <button 
                onClick={handleClose}
                className="lux-button font-label-lg text-label-lg px-8 py-3"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-outline-variant/30 px-gutter py-8 bg-surface-container-lowest">
            <div className="flex justify-between items-center mb-6">
              <span className="font-body-lg text-body-lg text-on-surface">Subtotal</span>
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Rs. {calculateSubtotal().toFixed(2)}</span>
            </div>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest text-center mb-8">Complimentary express shipping applied</p>
            <div className="space-y-4">
              <button 
                onClick={() => alert('Checkout demo complete! Thank you for shopping at Glamorizee.')}
                className="w-full bg-on-surface text-surface py-4 font-label-lg text-label-lg uppercase tracking-widest hover:bg-tertiary transition-colors duration-300 cursor-pointer"
              >
                Checkout
              </button>
              <button 
                onClick={handleClose}
                className="block w-full text-center py-4 font-label-lg text-label-lg uppercase tracking-widest text-on-surface border border-on-surface hover:bg-surface-container transition-colors duration-300 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
