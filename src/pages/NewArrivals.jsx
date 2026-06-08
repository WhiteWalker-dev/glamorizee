import { useState } from 'react';
import { addToCart } from '../utils/cartState';

const PRODUCTS = [
  {
    id: 'white-flower-necklace',
    title: 'White Flower Name Necklace',
    price: 199.00,
    priceString: 'Rs. 199.00',
    metal: 'Gold',
    type: 'Necklaces',
    isNew: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGvf8_RkZ38_Az3juiYNHoyu1asE0oKITuYCytbxQoHqUWC7ufYGNrqoq-E6_pVCof1eM4HbNmdEa78hv5Gu1OIfixveFdjuaAFQa72fDerbYqn7KKt1Jsl7k1P2FL1Giv-W-peQFGaa7CSynLZ2-MjhlQfnFhuwkovBMX_8zf3fY3FLVghxOqiyLKY8jBufd0PociWcM1e2-oUfXL8v0guJzCJXILiTMlmQQ56tkFzFTtOAxs_WPcikxnRsthztJpoclXUVzEstw',
    date: '2026-06-01'
  },
  {
    id: 'evil-eye-necklace',
    title: 'Evil Eye Single Name Necklace',
    price: 199.00,
    priceString: 'Rs. 199.00',
    metal: 'Gold',
    type: 'Necklaces',
    isNew: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu8orZd2il90ve3lAT2RCL6hcHUOOYXWQcovSZeTKokr-M1ZUqIeveVprz13nmWfGW_VSLd8-IHfCB6_yezbhZADkB8E9Z1VOx8qYNP8nWMO2taKX7o3uj-Z3kEY0mnEe26OIcRHmyO8hyxjwFHKpXkN-jOZNp18dwMTQaLCxNzQsp9pJpslEbmkRjES9f5KZPf3ppdjpAABZnK83ZH0rbbKKr-E3-TUCRYDXCe8ahGwaQj95qTtMTli_88dL9V2zsL2UAzJrkWFI',
    date: '2026-06-02'
  },
  {
    id: 'special-style-necklace',
    title: 'Special Style Name Necklace',
    price: 249.00,
    priceString: 'Rs. 249.00',
    metal: 'Silver',
    type: 'Necklaces',
    isNew: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWRoEivInM76jm2AsRdXNcBzxkklCwEbQJaHTgyXz8TVWtZER7-eUZWSIBTF5sfZ12UcaLRgs5ldTfOxsyT7dFwPeX8Rqdgfl4iTCyuJlfWGzIrcb-soEDAhRYNiae8vHD2WRj7R3qvf0sFSt3J6ADhM3bwPvyNOwLM8jrGdV6w-EB-v8skUtLL0llny7ll7mHa7W6XgwKvsfbxZ58ul1x3V7qf7jI0jgwEJg4JQopJB9djnNA8Wfj_3GSTaqyLwDAtgkQhG6y4hU',
    date: '2026-06-03'
  },
  {
    id: 'crown-name-necklace',
    title: 'Crown Name Necklace',
    price: 199.00,
    priceString: 'Rs. 199.00',
    metal: 'Gold',
    type: 'Necklaces',
    isNew: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhiKhs1f25rHmQuBBBoIiAI_NaSTQ2ZEwjEc1wSF4Uq52i5YbF19IXO3ynU_FWPb4-JOtUEAvd2Ncu1V7L5gIMtqFVfSh_xpRHsoW9x9QpJHAVUKOYXiRYTU_if9VLq1vOw4NG4nDmoy5Y2ki-vHfKV8_vTdhMMN_FmcGBVJTDlfk0HSMV0TLoahGAQhv1hIRzw44iD0GJlBQFD8rU0iPh27RiHiAahkFrxaj2ro9gdymqjIOMtyt-8jmOjvuBfZ7qneplsF8kpxo',
    date: '2026-06-04'
  },
  {
    id: 'cute-panda-necklace',
    title: 'Cute Panda Name Necklace',
    price: 189.00,
    priceString: 'Rs. 189.00',
    metal: 'Silver',
    type: 'Necklaces',
    isNew: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9dU1EC59Mo_OBMTHLjb7MI5ZUlxLd6znoVzHdftugxBuRCu1wLSQvIUG2FFG1gdGGa7ya4IIO5g8FmLudo_xlkANngJYcZbTg5FXKjwwJrjW1LKGhy_NE3un1yHOU0dy6LVWvD4dj2tgWD7ORxH2tx0Wc_UawPeg3kB7PqsLABlpzQj09LfrFPbvjKf_OwnaEw6nS0ls5fWXG2xio00d_Q61fGZbOCASah4TvC1Tco3KZ1n8R1DBuEGr273UtB6_AvbfkXplvTgI',
    date: '2026-06-05'
  },
  {
    id: 'couple-name-necklace',
    title: 'Heart and Evil Eye Couple Necklace',
    price: 299.00,
    priceString: 'Rs. 299.00',
    metal: 'Rose Gold',
    type: 'Necklaces',
    isNew: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFpsvuahtsoxPMlB62ovIZ8040TYlSuXNo9VDOLfWG8H-TgQcp00bNuiLxZxCZTxC5EnokaOVkFogvFbXa4286hx0Fq3WKBiWUGElfxX0F2O9LmhtFT6C8nuQnQ1CGX87xP-PnEIXmlIsk3hh16iiLIBVVGRZGvd7-Y8kjTYrgMtZQOifehBHjRDAUNH4UKnxBG3oRc5WUrwUPVIZT5z7hMwzcT54IKyvve9reiNoiyV3KNSGui7ZA3WR8CeuL22MGpaTJX843uDs',
    date: '2026-06-06'
  },
  {
    id: 'signature-kada-bracelet',
    title: 'Signature Gold Kada Bracelet',
    price: 499.00,
    priceString: 'Rs. 499.00',
    metal: 'Gold',
    type: 'Bracelets',
    isNew: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwuHER2b6jlR52nHrLYI6mIF98t3HM8tRPYaJVYc0SB7z5gL9dAgdGkI2_gP3fMTmEr5nIYsxUVJ7biuI4sd7e5SfwFyjLllD1RZwKuuKUhjb4LF1a4qr2zYID4JQ0zo32Lv36NoBXJC3Zp2psaINGmmIyuCo4Q0yyrd8_LoAdWpsPt0I5EC9q9PI0v0fMBpIIhOKNHNa7nOasrn6NMvaqXBEmM_AAdKe8yEajok3ED0K73I1tg-td_VNcPk4C_NTcAhNlCSLsYwU',
    date: '2026-05-15'
  },
  {
    id: 'bespoke-monogram-wallet',
    title: 'Bespoke Monogram Wallet',
    price: 349.00,
    priceString: 'Rs. 349.00',
    metal: 'Rose Gold',
    type: 'Wallets',
    isNew: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2gvFU1LmqXWdMmWSl3a_45Kq2TXuGmtytTFQdwk76Sh_lZxHHoxJQ32k5wLnmZho2G-ENPdK5vH3jJUsob3EBGNm-GOlNMxZGqvqzdDJEVg5vt3GECkf0Zh3PjFS-qTSedK5nertS-dQwG7EltI4JAFzj-vTdW1u2Ka81w4JpU0UCA8IG9K7CRhvCFBLx_oxojCPSjYsV73TSuogR8vYnRuOeciOiH8PJsddK5fzHLw-0ualrHyMQgRFMqHJDB85b1yMtlMrwQRc',
    date: '2026-05-20'
  }
];

export default function NewArrivals() {
  const [metalFilter, setMetalFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Featured');

  const handleQuickAdd = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      priceString: product.priceString,
      image: product.image,
      selectedOption: `${product.metal} / Standard`
    });
  };

  // Filter products
  let filtered = PRODUCTS.filter((item) => {
    const matchMetal = metalFilter === 'All' || item.metal === metalFilter;
    const matchType = typeFilter === 'All' || item.type === typeFilter;
    return matchMetal && matchType;
  });

  // Sort products
  if (sortOrder === 'Price: Low to High') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'Price: High to Low') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'Newest') {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <main className="max-w-[1440px] mx-auto pt-section-gap pb-section-gap flex-grow">
      {/* Header Section */}
      <section className="text-center px-margin-mobile md:px-margin-desktop mb-16">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-6">New Arrivals</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A curated selection of our latest handcrafted masterpieces.</p>
      </section>

      {/* Filter/Sort Bar */}
      <section className="px-margin-mobile md:px-margin-desktop mb-12 sticky top-[75px] z-40 bg-background/95 backdrop-blur-sm py-4 border-b border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex space-x-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          <div className="flex items-center space-x-2">
            <span className="font-label-md text-label-md uppercase text-on-surface-variant">Metal:</span>
            <select 
              value={metalFilter}
              onChange={(e) => setMetalFilter(e.target.value)}
              className="bg-transparent border-none text-on-surface font-body-md focus:ring-0 cursor-pointer text-sm outline-none"
            >
              <option value="All">All Metals</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Rose Gold">Rose Gold</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-label-md text-label-md uppercase text-on-surface-variant">Type:</span>
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-transparent border-none text-on-surface font-body-md focus:ring-0 cursor-pointer text-sm outline-none"
            >
              <option value="All">All Types</option>
              <option value="Necklaces">Necklaces</option>
              <option value="Bracelets">Bracelets</option>
              <option value="Wallets">Wallets</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
          <span className="font-label-md text-label-md uppercase text-on-surface-variant">Sort:</span>
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-transparent border-none text-on-surface font-body-md focus:ring-0 cursor-pointer text-sm outline-none"
          >
            <option value="Featured">Featured</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
        {filtered.map((product) => (
          <div key={product.id} className="group flex flex-col relative">
            <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden bg-surface-container-low border border-surface-variant">
              {product.isNew && (
                <span className="absolute top-4 left-4 z-10 font-label-md text-label-md uppercase tracking-widest text-on-surface bg-surface/80 px-2 py-1 border border-surface-variant">New</span>
              )}
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

        {filtered.length === 0 && (
          <div className="col-span-full py-24 text-center">
            <p className="font-body-lg text-body-lg text-on-surface-variant">No items found matching the selected filters.</p>
          </div>
        )}
      </section>
    </main>
  );
}
