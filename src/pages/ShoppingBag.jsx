export default function ShoppingBag() {
  return (
    <>
{/* Background Content (Simulated Homepage) */}
<div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center" data-alt="A high-fashion editorial photograph of a model wearing delicate, minimalist jewelry in a bright, modern studio. The lighting is soft and high-key, creating a pristine ivory and soft grey color palette. The mood is sophisticated and understated, focusing on the intricate details of a gold necklace against smooth, pale skin. The aesthetic perfectly matches a premium, minimalist fashion brand looking for elegant simplicity.">
<div className="absolute inset-0 bg-surface/20"></div>
</div>
{/* TopNavBar (Suppressed as this is a focused overlay, but included for context if it were a full page) */}
{/* Cart Overlay & Slide-out */}
<div aria-labelledby="slide-over-title" aria-modal="true" className="fixed inset-0 z-[100] flex justify-end" role="dialog">
{/* Backdrop Overlay */}
<div aria-hidden="true" className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-overlay transition-opacity duration-500"></div>
{/* Slide-out Panel */}
<div className="relative w-full max-w-md h-full bg-surface-container-lowest shadow-2xl flex flex-col transform transition-transform duration-500 ease-out translate-x-0 border-l border-outline-variant/30">
{/* Cart Header */}
<div className="flex items-center justify-between px-gutter py-6 border-b border-outline-variant/30">
<h2 className="font-headline-lg text-headline-lg text-on-surface" id="slide-over-title">Your Bag</h2>
<button aria-label="Close cart" className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 p-2 -mr-2" type="button">
<span className="material-symbols-outlined text-[24px]">close</span>
</button>
</div>
{/* Cart Items */}
<div className="flex-1 overflow-y-auto px-gutter py-8 space-y-8">
{/* Item 1 */}
<div className="flex gap-6 group">
<div className="w-24 h-32 flex-shrink-0 border border-outline-variant/30 overflow-hidden bg-surface-container">
<img alt="White Flower Name Necklace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A close-up studio shot of a delicate 'White Flower Name Necklace' resting on a smooth, matte white textured surface. The necklace features a fine gold chain and a minimalist white floral pendant. The lighting is soft and diffused, casting gentle shadows that emphasize the jewelry's subtle elegance. The color palette is strictly warm ivory, soft gold, and pure white, reflecting a high-end luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyzuPj3FSUALFA475l4apIeTVDeMvmBXX2KWdk8x72NCGCHk1WjjEhkFMa7yLKhSe6lbnDaJWCVZ8yEi86FtpnizHZnjqlHpUJu53jpTUa4ZsFoirmXK46prEA_VeOBN5RFcs2Pj-HY5FVghdq07kZ2kVelu274-u3fr5ArwhnO8x0a55wLvgnD3fgsNZFDZWP8iJEXIm_RkEAiKJ9njil1oitz1bkNoGHhr2099GY8zZ_wW1ZdzPDrzISfRKUk3FPr3bL42r6INo"/>
</div>
<div className="flex flex-col flex-1 py-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-body-md text-body-md text-on-surface mb-1">White Flower Name Necklace</h3>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Gold / 16"</p>
</div>
<button aria-label="Remove item" className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-[20px]">delete_outline</span>
</button>
</div>
<div className="mt-auto flex justify-between items-end">
<div className="flex items-center border border-outline-variant/50">
<button aria-label="Decrease quantity" className="px-3 py-1 text-on-surface-variant hover:text-on-surface transition-colors">−</button>
<span className="font-label-md text-label-md text-on-surface px-2 min-w-[2ch] text-center">1</span>
<button aria-label="Increase quantity" className="px-3 py-1 text-on-surface-variant hover:text-on-surface transition-colors">+</button>
</div>
<span className="font-body-md text-body-md text-on-surface">$145.00</span>
</div>
</div>
</div>
{/* Item 2 */}
<div className="flex gap-6 group">
<div className="w-24 h-32 flex-shrink-0 border border-outline-variant/30 overflow-hidden bg-surface-container">
<img alt="Evil Eye Single Name Necklace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A minimalist product photograph of an 'Evil Eye Single Name Necklace' beautifully displayed on a pale beige stone slab. The necklace incorporates a subtle, elegant enamel evil eye charm intertwined with a custom name pendant. The lighting is pristine and directional, highlighting the metallic sheen against the matte background. The overall mood is sophisticated, serene, and tailored to a luxury fashion boutique's visual language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASlUAJuOtZtIN3dPdHbVZ1O9ZUhwgzqHTo9EWaR_LQslMybvdjes0iNeer136vlEt309DWtNORvVd1L2BI-qR2QstETNWemZDvm8xKeZVfCgPxT3g1nmMM0bMbif1dLoV-9lBkHsUd8rePui2P5YGCITVhWHO87Ws2KkazPQStcNwvHjXDozkFRpccoLrSO9x4N4UH53ORHvc3EW2NNa8rnHgNANRkMhFbj50LF1dlRTJnPHU6NJfr4CR4kjmA-gPEgk0HPuSMiHc"/>
</div>
<div className="flex flex-col flex-1 py-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-body-md text-body-md text-on-surface mb-1">Evil Eye Single Name Necklace</h3>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Silver / 18"</p>
</div>
<button aria-label="Remove item" className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-[20px]">delete_outline</span>
</button>
</div>
<div className="mt-auto flex justify-between items-end">
<div className="flex items-center border border-outline-variant/50">
<button aria-label="Decrease quantity" className="px-3 py-1 text-on-surface-variant hover:text-on-surface transition-colors">−</button>
<span className="font-label-md text-label-md text-on-surface px-2 min-w-[2ch] text-center">1</span>
<button aria-label="Increase quantity" className="px-3 py-1 text-on-surface-variant hover:text-on-surface transition-colors">+</button>
</div>
<span className="font-body-md text-body-md text-on-surface">$120.00</span>
</div>
</div>
</div>
</div>
{/* Cart Footer */}
<div className="border-t border-outline-variant/30 px-gutter py-8 bg-surface-container-lowest">
<div className="flex justify-between items-center mb-6">
<span className="font-body-lg text-body-lg text-on-surface">Subtotal</span>
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">$265.00</span>
</div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest text-center mb-8">Shipping &amp; taxes calculated at checkout</p>
<div className="space-y-4">
<button className="w-full bg-on-surface text-surface py-4 font-label-lg text-label-lg uppercase tracking-widest hover:bg-surface-tint transition-colors duration-300">
                        Checkout
                    </button>
<a className="block w-full text-center py-4 font-label-lg text-label-lg uppercase tracking-widest text-on-surface border border-on-surface hover:bg-surface-container transition-colors duration-300" href="#">
                        View Bag
                    </a>
</div>
</div>
</div>
</div>
    </>
  );
}
