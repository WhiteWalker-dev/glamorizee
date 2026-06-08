export default function Wishlist() {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
{/* Header Section */}
<header className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-surface-variant pb-8">
<div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-2">My Favorites</h1>
<p className="font-body-md text-body-md text-on-surface-variant tracking-wider">Curated selections awaiting your consideration.</p>
</div>
<div className="font-label-lg text-label-lg uppercase text-secondary tracking-widest">
                3 Items
            </div>
</header>
{/* Wishlist Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-[64px]">
{/* Product Card 1 */}
<article className="group relative flex flex-col">
<button aria-label="Remove from favorites" className="absolute top-4 right-4 z-10 text-on-surface-variant hover:text-error transition-colors p-2 bg-surface/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 duration-300 focus:opacity-100">
<span className="material-symbols-outlined">close</span>
</button>
<div className="aspect-[4/5] bg-surface-container-low mb-6 overflow-hidden relative">
<img alt="White Flower Name Necklace" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[800ms] ease-out" data-alt="A delicate gold custom name necklace resting gracefully on an off-white, textured stone pedestal. The background features softly draped linen curtains, filtering natural, warm daylight into the minimalist space. The composition exudes high-end editorial elegance with soft shadows and a pristine, luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTd236vxDj-gRYhY7lgHaMhKcQJ4hXSdV6HClDWkSCrTQPvrzoWO9Yx4enEFdBVjD7G7TXxzEhml33LBeNNhmvNZQPEkG890J7QJS_t80U8uRgdqKw1NdxfTLoLMGaUlam8Ji05kYT_BYKOvgsB9SPYMyqqvnByvRhb8J_Kw1XkBO5SyRFUXWRoCNY3uSzphXV3VmYjklaEpez45RSBmG8iYnjTfvHRarONIRyLAomenNAEFT6Rdk9Kscd8ni8-AkKOSfybeIG5lQ"/>
{/* Subtle overlay on hover */}
<div className="absolute inset-0 bg-inverse-surface/0 group-hover:bg-inverse-surface/5 transition-colors duration-500 pointer-events-none"></div>
</div>
<div className="flex flex-col gap-2 flex-grow">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">White Flower Name Necklace</h2>
<p className="font-body-md text-body-md text-secondary">Rs. 199.00</p>
</div>
<button className="mt-6 w-full py-4 bg-inverse-surface text-surface uppercase font-label-lg text-label-lg hover:bg-surface-tint transition-colors duration-300 border border-inverse-surface">
                    Add to Bag
                </button>
</article>
{/* Product Card 2 */}
<article className="group relative flex flex-col">
<button aria-label="Remove from favorites" className="absolute top-4 right-4 z-10 text-on-surface-variant hover:text-error transition-colors p-2 bg-surface/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 duration-300 focus:opacity-100">
<span className="material-symbols-outlined">close</span>
</button>
<div className="aspect-[4/5] bg-surface-container-low mb-6 overflow-hidden relative">
<img alt="Evil Eye Single Name Necklace" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[800ms] ease-out" data-alt="A sophisticated gold necklace featuring the name 'Amara' draped elegantly over luxurious, shimmering champagne silk fabric. The lighting highlights the polished gold contours against the soft folds of the silk. The mood is intimate, refined, and undeniably premium, matching a high-fashion lookbook style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_aERLVXx8BxcPN9HIoI4cxtbQMaOkIGFaTs6JBU0ab7fiZGzIsFWoc0ad_QNYDpL7XIITtU8VClfb5cupRl6LUk0oMnIw_1OJIIdlzCxRUY4G-VQj18FWutFmbYKv9E6Ln6W7qSHXq7vxl5H8gpNeb_eLjlt1iTMlnccWq8z97IOZ8Iam4Smin3x-pxSLGdA9NjOTGWSc6qqAgP2B7jiHxW2_j52W4cjuX85Kov-Qd_icsQ5JjixVXM0kOQDKDfIP9vLkWIhQwRg"/>
<div className="absolute inset-0 bg-inverse-surface/0 group-hover:bg-inverse-surface/5 transition-colors duration-500 pointer-events-none"></div>
</div>
<div className="flex flex-col gap-2 flex-grow">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Evil Eye Single Name Necklace</h2>
<p className="font-body-md text-body-md text-secondary">Rs. 199.00</p>
</div>
<button className="mt-6 w-full py-4 bg-inverse-surface text-surface uppercase font-label-lg text-label-lg hover:bg-surface-tint transition-colors duration-300 border border-inverse-surface">
                    Add to Bag
                </button>
</article>
{/* Product Card 3 */}
<article className="group relative flex flex-col">
<button aria-label="Remove from favorites" className="absolute top-4 right-4 z-10 text-on-surface-variant hover:text-error transition-colors p-2 bg-surface/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 duration-300 focus:opacity-100">
<span className="material-symbols-outlined">close</span>
</button>
<div className="aspect-[4/5] bg-surface-container-low mb-6 overflow-hidden relative">
<img alt="Crown Name Necklace" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[800ms] ease-out" data-alt="A minimalist editorial shot of a gold name necklace subtly placed on a smooth, pale beige background, catching a soft beam of sunlight. The shadows are long and architectural, creating a serene, gallery-like framing around the jewelry. The overall aesthetic emphasizes clean lines and understated luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg_DZFzuYV-92MK4QXNbQzUwaLeDvDkqMYjoMgPuec8e-mpBV74BtV46An7qM1KzW8HXGxrR7IgNXA_k-Yksdz62TwYMi6UZ-HNYPKZnolSKs7woKEogcQB4-Z4TFaUDeAFDAibtFh1pqtjuWFsil92Q2G00tqSx0-Ydw-b_sGGjO047PrkI2RuTl0rYId6A2r72aOD4pQaXXjeneywR9K-L7wxHtFxhLtLZaz8FioUJ1WtiAngKMqx4Qj98WO7Wq7P6DtEeqf31w"/>
<div className="absolute inset-0 bg-inverse-surface/0 group-hover:bg-inverse-surface/5 transition-colors duration-500 pointer-events-none"></div>
</div>
<div className="flex flex-col gap-2 flex-grow">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Crown Name Necklace</h2>
<p className="font-body-md text-body-md text-secondary">Rs. 199.00</p>
</div>
<button className="mt-6 w-full py-4 bg-inverse-surface text-surface uppercase font-label-lg text-label-lg hover:bg-surface-tint transition-colors duration-300 border border-inverse-surface">
                    Add to Bag
                </button>
</article>
</section>
{/* Empty State Example (Hidden by default for this view, but included structurally) */}
<div className="hidden flex-col items-center justify-center py-32 text-center">
<span className="material-symbols-outlined text-[64px] text-surface-variant mb-6">favorite_border</span>
<h2 className="font-display-md text-display-md text-on-surface mb-4">Your wishlist is empty</h2>
<p className="font-body-lg text-body-lg text-secondary mb-12 max-w-md">Discover our collections and curate your personal gallery of favorites.</p>
<a className="inline-block py-4 px-12 bg-transparent border border-inverse-surface text-inverse-surface uppercase font-label-lg text-label-lg hover:bg-inverse-surface hover:text-surface transition-colors duration-300" href="#">
                Continue Shopping
            </a>
</div>
</main>
  );
}
