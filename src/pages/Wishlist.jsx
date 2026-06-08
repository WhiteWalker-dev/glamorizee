import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWishlist, toggleWishlist, addToCart } from '../utils/cartState';

const DEFAULT_WISHLIST = [
  {
    id: 'white-flower-necklace',
    title: 'White Flower Name Necklace',
    price: 199.00,
    priceString: 'Rs. 199.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTd236vxDj-gRYhY7lgHaMhKcQJ4hXSdV6HClDWkSCrTQPvrzoWO9Yx4enEFdBVjD7G7TXxzEhml33LBeNNhmvNZQPEkG890J7QJS_t80U8uRgdqKw1NdxfTLoLMGaUlam8Ji05kYT_BYKOvgsB9SPYMyqqvnByvRhb8J_Kw1XkBO5SyRFUXWRoCNY3uSzphXV3VmYjklaEpez45RSBmG8iYnjTfvHRarONIRyLAomenNAEFT6Rdk9Kscd8ni8-AkKOSfybeIG5lQ'
  },
  {
    id: 'evil-eye-necklace',
    title: 'Evil Eye Single Name Necklace',
    price: 199.00,
    priceString: 'Rs. 199.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_aERLVXx8BxcPN9HIoI4cxtbQMaOkIGFaTs6JBU0ab7fiZGzIsFWoc0ad_QNYDpL7XIITtU8VClfb5cupRl6LUk0oMnIw_1OJIIdlzCxRUY4G-VQj18FWutFmbYKv9E6Ln6W7qSHXq7vxl5H8gpNeb_eLjlt1iTMlnccWq8z97IOZ8Iam4Smin3x-pxSLGdA9NjOTGWSc6qqAgP2B7jiHxW2_j52W4cjuX85Kov-Qd_icsQ5JjixVXM0kOQDKDfIP9vLkWIhQwRg'
  },
  {
    id: 'crown-name-necklace',
    title: 'Crown Name Necklace',
    price: 199.00,
    priceString: 'Rs. 199.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg_DZFzuYV-92MK4QXNbQzUwaLeDvDkqMYjoMgPuec8e-mpBV74BtV46An7qM1KzW8HXGxrR7IgNXA_k-Yksdz62TwYMi6UZ-HNYPKZnolSKs7woKEogcQB4-Z4TFaUDeAFDAibtFh1pqtjuWFsil92Q2G00tqSx0-Ydw-b_sGGjO047PrkI2RuTl0rYId6A2r72aOD4pQaXXjeneywR9K-L7wxHtFxhLtLZaz8FioUJ1WtiAngKMqx4Qj98WO7Wq7P6DtEeqf31w'
  }
];

export default function Wishlist() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const loadWishlist = () => {
    let list = getWishlist();
    // Pre-populate with defaults on first visit so user has items to test immediately
    if (list.length === 0 && !localStorage.getItem('glamorizee_wishlist_initialized')) {
      localStorage.setItem('glamorizee_wishlist', JSON.stringify(DEFAULT_WISHLIST));
      localStorage.setItem('glamorizee_wishlist_initialized', 'true');
      list = DEFAULT_WISHLIST;
      // Trigger count updates in header
      window.dispatchEvent(new Event('wishlist-updated'));
    }
    setItems(list);
  };

  useEffect(() => {
    loadWishlist();

    window.addEventListener('wishlist-updated', loadWishlist);
    return () => {
      window.removeEventListener('wishlist-updated', loadWishlist);
    };
  }, []);

  const handleRemove = (product) => {
    toggleWishlist(product);
  };

  const handleAddToBag = (product) => {
    // Add to cart
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      priceString: product.priceString || `Rs. ${product.price.toFixed(2)}`,
      image: product.image,
      selectedOption: 'Gold / Standard'
    });
    // Remove from wishlist
    toggleWishlist(product);
  };

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      {/* Header Section */}
      <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-outline-variant/30 pb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-2">My Favorites</h1>
          <p className="font-body-md text-body-md text-on-surface-variant tracking-wider">Curated selections awaiting your consideration.</p>
        </div>
        <div className="font-label-lg text-label-lg uppercase text-secondary tracking-widest">
          {items.length} {items.length === 1 ? 'Item' : 'Items'}
        </div>
      </header>

      {/* Wishlist Grid */}
      {items.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-[64px]">
          {items.map((product) => (
            <article key={product.id} className="group relative flex flex-col">
              <button 
                onClick={() => handleRemove(product)}
                aria-label="Remove from favorites" 
                className="absolute top-4 right-4 z-10 text-on-surface-variant hover:text-error transition-colors p-2 bg-surface/50 backdrop-blur-sm rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 duration-300 focus:opacity-100 cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <div className="aspect-[4/5] bg-surface-container-low mb-6 overflow-hidden relative">
                <img alt={product.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[800ms] ease-out" src={product.image}/>
                <div className="absolute inset-0 bg-inverse-surface/0 group-hover:bg-inverse-surface/5 transition-colors duration-500 pointer-events-none"></div>
              </div>
              
              <div className="flex flex-col gap-2 flex-grow">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{product.title}</h2>
                <p className="font-body-md text-body-md text-secondary">{product.priceString || `Rs. ${product.price}`}</p>
              </div>
              
              <button 
                onClick={() => handleAddToBag(product)}
                className="mt-6 w-full py-4 bg-inverse-surface text-surface uppercase font-label-lg text-label-lg hover:bg-tertiary transition-colors duration-300 border border-inverse-surface cursor-pointer"
              >
                Add to Bag
              </button>
            </article>
          ))}
        </section>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <span className="material-symbols-outlined text-[64px] text-outline-variant mb-6">favorite_border</span>
          <h2 className="font-display-md text-display-md text-on-surface mb-4">Your wishlist is empty</h2>
          <p className="font-body-lg text-body-lg text-secondary mb-12 max-w-md">Discover our collections and curate your personal gallery of favorites.</p>
          <button 
            onClick={() => navigate('/new-arrivals')}
            className="inline-block py-4 px-12 bg-transparent border border-inverse-surface text-inverse-surface uppercase font-label-lg text-label-lg hover:bg-inverse-surface hover:text-surface transition-colors duration-300 cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </main>
  );
}
