export default function SearchOverlay() {
  return (
    <main className="fixed inset-0 z-50 flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop py-section-gap animate-entrance bg-surface">
{/* Close Action */}
<button aria-label="Close search" className="absolute top-margin-mobile md:top-margin-desktop right-margin-mobile md:right-margin-desktop text-on-surface hover:opacity-70 transition-opacity duration-300 p-2">
<span className="material-symbols-outlined font-light text-3xl md:text-4xl" style={{'fontVariationSettings': "'wght' 200"}}>close</span>
</button>
{/* Search Canvas */}
<div className="w-full max-w-[960px] mx-auto flex flex-col items-center">
{/* Search Input Area */}
<form className="w-full relative mb-section-gap group" onsubmit="event.preventDefault();">
{/* Floating Label / Hint (Editorial style) */}
<label className="sr-only" htmlFor="global-search">Search</label>
<div className="relative flex items-center w-full">
<span className="material-symbols-outlined absolute left-0 text-on-surface-variant text-2xl md:text-3xl opacity-50 group-focus-within:opacity-100 transition-opacity duration-300" style={{'fontVariationSettings': "'wght' 300"}}>search</span>
{/* 
                      Typography logic: Uses responsive font tokens mapping to Playfair Display.
                      Input fields guideline: Bottom-border only (1px Soft Beige).
                    */}
<input autocomplete="off" autofocus="" className="w-full bg-transparent border-0 border-b border-outline-variant py-4 pl-12 pr-4 font-headline-lg-mobile text-headline-lg-mobile md:font-display-md md:text-display-md text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-on-surface transition-colors duration-500 outline-none" id="global-search" placeholder="Search for your signature piece..." type="text"/>
</div>
</form>
{/* Trending Searches (Editorial Layout) */}
<div className="w-full opacity-0 translate-y-4" style={{'animation': 'fadeInScale 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s forwards'}}>
<h3 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest text-center mb-gutter">Trending Searches</h3>
<ul className="flex flex-col md:flex-row flex-wrap justify-center gap-y-6 gap-x-12 mt-8">
<li>
<a className="group flex items-center font-body-lg text-body-lg text-on-surface transition-all duration-300" href="#">
<span className="relative pb-1 border-b border-transparent group-hover:border-tertiary group-hover:text-tertiary transition-colors duration-300">Single Name Necklace</span>
</a>
</li>
<li>
<a className="group flex items-center font-body-lg text-body-lg text-on-surface transition-all duration-300" href="#">
<span className="relative pb-1 border-b border-transparent group-hover:border-tertiary group-hover:text-tertiary transition-colors duration-300">Gold Kada</span>
</a>
</li>
<li>
<a className="group flex items-center font-body-lg text-body-lg text-on-surface transition-all duration-300" href="#">
<span className="relative pb-1 border-b border-transparent group-hover:border-tertiary group-hover:text-tertiary transition-colors duration-300">3D Bar Necklace</span>
</a>
</li>
</ul>
</div>
</div>
</main>
  );
}
