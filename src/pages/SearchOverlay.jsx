import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../utils/cartState';

const SEARCHABLE_PRODUCTS = [
  {
    id: 'white-flower-necklace',
    title: 'White Flower Name Necklace',
    price: 199.00,
    priceString: 'Rs. 199.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGvf8_RkZ38_Az3juiYNHoyu1asE0oKITuYCytbxQoHqUWC7ufYGNrqoq-E6_pVCof1eM4HbNmdEa78hv5Gu1OIfixveFdjuaAFQa72fDerbYqn7KKt1Jsl7k1P2FL1Giv-W-peQFGaa7CSynLZ2-MjhlQfnFhuwkovBMX_8zf3fY3FLVghxOqiyLKY8jBufd0PociWcM1e2-oUfXL8v0guJzCJXILiTMlmQQ56tkFzFTtOAxs_WPcikxnRsthztJpoclXUVzEstw'
  },
  {
    id: 'evil-eye-necklace',
    title: 'Evil Eye Single Name Necklace',
    price: 199.00,
    priceString: 'Rs. 199.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu8orZd2il90ve3lAT2RCL6hcHUOOYXWQcovSZeTKokr-M1ZUqIeveVprz13nmWfGW_VSLd8-IHfCB6_yezbhZADkB8E9Z1VOx8qYNP8nWMO2taKX7o3uj-Z3kEY0mnEe26OIcRHmyO8hyxjwFHKpXkN-jOZNp18dwMTQaLCxNzQsp9pJpslEbmkRjES9f5KZPf3ppdjpAABZnK83ZH0rbbKKr-E3-TUCRYDXCe8ahGwaQj95qTtMTli_88dL9V2zsL2UAzJrkWFI'
  },
  {
    id: 'special-style-necklace',
    title: 'Special Style Name Necklace',
    price: 249.00,
    priceString: 'Rs. 249.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWRoEivInM76jm2AsRdXNcBzxkklCwEbQJaHTgyXz8TVWtZER7-eUZWSIBTF5sfZ12UcaLRgs5ldTfOxsyT7dFwPeX8Rqdgfl4iTCyuJlfWGzIrcb-soEDAhRYNiae8vHD2WRj7R3qvf0sFSt3J6ADhM3bwPvyNOwLM8jrGdV6w-EB-v8skUtLL0llny7ll7mHa7W6XgwKvsfbxZ58ul1x3V7qf7jI0jgwEJg4JQopJB9djnNA8Wfj_3GSTaqyLwDAtgkQhG6y4hU'
  },
  {
    id: 'crown-name-necklace',
    title: 'Crown Name Necklace',
    price: 199.00,
    priceString: 'Rs. 199.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhiKhs1f25rHmQuBBBoIiAI_NaSTQ2ZEwjEc1wSF4Uq52i5YbF19IXO3ynU_FWPb4-JOtUEAvd2Ncu1V7L5gIMtqFVfSh_xpRHsoW9x9QpJHAVUKOYXiRYTU_if9VLq1vOw4NG4nDmoy5Y2ki-vHfKV8_vTdhMMN_FmcGBVJTDlfk0HSMV0TLoahGAQhv1hIRzw44iD0GJlBQFD8rU0iPh27RiHiAahkFrxaj2ro9gdymqjIOMtyt-8jmOjvuBfZ7qneplsF8kpxo'
  },
  {
    id: 'cute-panda-necklace',
    title: 'Cute Panda Name Necklace',
    price: 189.00,
    priceString: 'Rs. 189.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9dU1EC59Mo_OBMTHLjb7MI5ZUlxLd6znoVzHdftugxBuRCu1wLSQvIUG2FFG1gdGGa7ya4IIO5g8FmLudo_xlkANngJYcZbTg5FXKjwwJrjW1LKGhy_NE3un1yHOU0dy6LVWvD4dj2tgWD7ORxH2tx0Wc_UawPeg3kB7PqsLABlpzQj09LfrFPbvjKf_OwnaEw6nS0ls5fWXG2xio00d_Q61fGZbOCASah4TvC1Tco3KZ1n8R1DBuEGr273UtB6_AvbfkXplvTgI'
  },
  {
    id: 'couple-name-necklace',
    title: 'Heart and Evil Eye Couple Necklace',
    price: 299.00,
    priceString: 'Rs. 299.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFpsvuahtsoxPMlB62ovIZ8040TYlSuXNo9VDOLfWG8H-TgQcp00bNuiLxZxCZTxC5EnokaOVkFogvFbXa4286hx0Fq3WKBiWUGElfxX0F2O9LmhtFT6C8nuQnQ1CGX87xP-PnEIXmlIsk3hh16iiLIBVVGRZGvd7-Y8kjTYrgMtZQOifehBHjRDAUNH4UKnxBG3oRc5WUrwUPVIZT5z7hMwzcT54IKyvve9reiNoiyV3KNSGui7ZA3WR8CeuL22MGpaTJX843uDs'
  },
  {
    id: 'signature-kada-bracelet',
    title: 'Signature Gold Kada Bracelet',
    price: 499.00,
    priceString: 'Rs. 499.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwuHER2b6jlR52nHrLYI6mIF98t3HM8tRPYaJVYc0SB7z5gL9dAgdGkI2_gP3fMTmEr5nIYsxUVJ7biuI4sd7e5SfwFyjLllD1RZwKuuKUhjb4LF1a4qr2zYID4JQ0zo32Lv36NoBXJC3Zp2psaINGmmIyuCo4Q0yyrd8_LoAdWpsPt0I5EC9q9PI0v0fMBpIIhOKNHNa7nOasrn6NMvaqXBEmM_AAdKe8yEajok3ED0K73I1tg-td_VNcPk4C_NTcAhNlCSLsYwU'
  },
  {
    id: 'bespoke-monogram-wallet',
    title: 'Bespoke Monogram Wallet',
    price: 349.00,
    priceString: 'Rs. 349.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2gvFU1LmqXWdMmWSl3a_45Kq2TXuGmtytTFQdwk76Sh_lZxHHoxJQ32k5wLnmZho2G-ENPdK5vH3jJUsob3EBGNm-GOlNMxZGqvqzdDJEVg5vt3GECkf0Zh3PjFS-qTSedK5nertS-dQwG7EltI4JAFzj-vTdW1u2Ka81w4JpU0UCA8IG9K7CRhvCFBLx_oxojCPSjYsV73TSuogR8vYnRuOeciOiH8PJsddK5fzHLw-0ualrHyMQgRFMqHJDB85b1yMtlMrwQRc'
  }
];

export default function SearchOverlay() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleQuickAdd = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      priceString: product.priceString,
      image: product.image,
      selectedOption: 'Standard'
    });
  };

  // Filter products based on search term
  const results = searchQuery.trim() === '' 
    ? [] 
    : SEARCHABLE_PRODUCTS.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <main className="fixed inset-0 z-50 flex flex-col px-margin-mobile md:px-margin-desktop py-12 animate-entrance bg-background overflow-y-auto">
      {/* Close Action */}
      <button 
        onClick={handleClose}
        aria-label="Close search" 
        className="absolute top-6 right-6 text-on-surface hover:opacity-70 transition-opacity duration-300 p-2 cursor-pointer z-50"
      >
        <span className="material-symbols-outlined font-light text-3xl md:text-4xl">close</span>
      </button>

      {/* Search Canvas */}
      <div className="w-full max-w-[1120px] mx-auto flex flex-col items-center mt-16 md:mt-24">
        {/* Search Input Area */}
        <form className="w-full relative mb-16 group" onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="global-search">Search</label>
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-0 text-on-surface-variant text-2xl md:text-3xl opacity-50 group-focus-within:opacity-100 transition-opacity duration-300">search</span>
            <input 
              autoComplete="off" 
              autoFocus 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-outline-variant py-4 pl-12 pr-4 font-headline-lg-mobile text-headline-lg-mobile md:font-display-md md:text-display-md text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-on-surface transition-colors duration-500 outline-none" 
              id="global-search" 
              placeholder="Search for your signature piece..." 
              type="text"
            />
          </div>
        </form>

        {/* Trending Searches (Show when query is empty) */}
        {searchQuery.trim() === '' ? (
          <div className="w-full opacity-100 mt-8">
            <h3 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest text-center mb-6">Trending Searches</h3>
            <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-y-6 gap-x-12 mt-8 text-center">
              <li>
                <button 
                  onClick={() => setSearchQuery('Name Necklace')}
                  className="group font-body-lg text-body-lg text-on-surface hover:text-tertiary transition-colors cursor-pointer"
                >
                  <span className="relative pb-1 border-b border-transparent group-hover:border-tertiary transition-colors duration-300">Name Necklace</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSearchQuery('Kada')}
                  className="group font-body-lg text-body-lg text-on-surface hover:text-tertiary transition-colors cursor-pointer"
                >
                  <span className="relative pb-1 border-b border-transparent group-hover:border-tertiary transition-colors duration-300">Gold Kada</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSearchQuery('Wallet')}
                  className="group font-body-lg text-body-lg text-on-surface hover:text-tertiary transition-colors cursor-pointer"
                >
                  <span className="relative pb-1 border-b border-transparent group-hover:border-tertiary transition-colors duration-300">Name Wallet</span>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          /* Search Results Grid */
          <div className="w-full mt-4">
            <h3 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest text-left mb-8">
              Search Results ({results.length})
            </h3>
            
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                {results.map((product) => (
                  <div key={product.id} className="group flex flex-col relative">
                    <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden bg-surface-container-low border border-surface-variant">
                      <img alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.image}/>
                      <div className="absolute inset-0 bg-inverse-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Quick Add Overlay */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={() => handleQuickAdd(product)}
                          className="w-full bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg uppercase py-3 hover:bg-on-surface transition-colors cursor-pointer"
                        >
                          Quick Add
                        </button>
                      </div>
                    </div>
                    <h3 className="font-body-md text-body-md text-on-surface mb-1">{product.title}</h3>
                    <p className="font-body-lg text-body-lg text-tertiary">{product.priceString}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <span className="material-symbols-outlined text-[48px] text-outline-variant mb-4">search_off</span>
                <p className="font-body-lg text-body-lg text-on-surface-variant">No items found matching "{searchQuery}".</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
