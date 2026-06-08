import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCart, getWishlist } from '../utils/cartState';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to load quantities
  const updateCounts = () => {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);

    const wishlist = getWishlist();
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    // Initial load
    updateCounts();

    // Listen to changes in cart/wishlist
    window.addEventListener('cart-updated', updateCounts);
    window.addEventListener('wishlist-updated', updateCounts);

    return () => {
      window.removeEventListener('cart-updated', updateCounts);
      window.removeEventListener('wishlist-updated', updateCounts);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-background dark:bg-background w-full top-0 sticky z-50 transition-all duration-500 ease-in-out border-b border-outline-variant dark:border-outline">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-[1440px] mx-auto">
        
        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="flex md:hidden text-primary hover:text-on-background p-1 -ml-1 transition-colors"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          <Link className="font-label-lg text-label-lg uppercase text-primary dark:text-primary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" to="/categories">Categories</Link>
          <Link className="font-label-lg text-label-lg uppercase text-primary dark:text-primary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" to="/collections">Collections</Link>
          <Link className="font-label-lg text-label-lg uppercase text-primary dark:text-primary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" to="/new-arrivals">New Arrivals</Link>
          <Link className="font-label-lg text-label-lg uppercase text-tertiary dark:text-tertiary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" to="/boutique">Boutique</Link>
          <Link className="font-label-lg text-label-lg uppercase text-primary dark:text-primary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" to="/editorial">Editorial</Link>
          <Link className="font-label-lg text-label-lg uppercase text-primary dark:text-primary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" to="/atelier">Atelier</Link>
        </nav>

        {/* Central Logo */}
        <Link to="/" className="font-display-md text-display-md text-on-background dark:text-on-background tracking-tighter text-center">
          GLAMORIZEE
        </Link>

        {/* Right Icons with dynamic badges */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Link to="/search" aria-label="search" className="text-primary hover:text-on-background transition-colors p-1">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </Link>
          <Link to="/account" aria-label="account" className="text-primary hover:text-on-background transition-colors p-1">
            <span className="material-symbols-outlined text-[24px]">person</span>
          </Link>
          <Link to="/wishlist" aria-label="wishlist" className="text-primary hover:text-on-background transition-colors p-1 relative">
            <span className="material-symbols-outlined text-[24px]">favorite</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-tertiary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans font-semibold">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/bag" aria-label="shopping_bag" className="text-primary hover:text-on-background transition-colors p-1 relative">
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-on-background text-surface text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans font-semibold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Slide-out Mobile Navigation Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 md:hidden flex flex-col bg-background animate-fade-in border-t border-outline-variant/30">
          <nav className="flex flex-col p-8 gap-6 text-center">
            <Link className="font-label-lg text-label-lg uppercase text-on-background tracking-widest text-lg py-2 border-b border-outline-variant/20" to="/categories">Categories</Link>
            <Link className="font-label-lg text-label-lg uppercase text-on-background tracking-widest text-lg py-2 border-b border-outline-variant/20" to="/collections">Collections</Link>
            <Link className="font-label-lg text-label-lg uppercase text-on-background tracking-widest text-lg py-2 border-b border-outline-variant/20" to="/new-arrivals">New Arrivals</Link>
            <Link className="font-label-lg text-label-lg uppercase text-tertiary tracking-widest text-lg py-2 border-b border-outline-variant/20" to="/boutique">Boutique</Link>
            <Link className="font-label-lg text-label-lg uppercase text-on-background tracking-widest text-lg py-2 border-b border-outline-variant/20" to="/editorial">Editorial</Link>
            <Link className="font-label-lg text-label-lg uppercase text-on-background tracking-widest text-lg py-2" to="/atelier">Atelier</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
