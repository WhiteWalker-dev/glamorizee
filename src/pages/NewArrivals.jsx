export default function NewArrivals() {
  return (
    <main className="max-w-[1440px] mx-auto pt-section-gap pb-section-gap">
{/* Header Section */}
<section className="text-center px-margin-mobile md:px-margin-desktop mb-section-gap">
<h1 className="font-display-lg text-display-lg md:text-display-lg text-headline-lg-mobile text-on-surface mb-6">New Arrivals</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A curated selection of our latest handcrafted masterpieces.</p>
</section>
{/* Filter/Sort Bar */}
<section className="px-margin-mobile md:px-margin-desktop mb-12 sticky top-[80px] z-40 bg-surface/95 backdrop-blur-sm py-4 border-b border-surface-variant flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex space-x-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
<div className="flex items-center space-x-2">
<span className="font-label-md text-label-md uppercase text-on-surface-variant">Metal:</span>
<select className="bg-transparent border-none text-on-surface font-body-md focus:ring-0 cursor-pointer text-sm">
<option>All</option>
<option>Gold</option>
<option>Silver</option>
<option>Rose Gold</option>
</select>
</div>
<div className="flex items-center space-x-2">
<span className="font-label-md text-label-md uppercase text-on-surface-variant">Type:</span>
<select className="bg-transparent border-none text-on-surface font-body-md focus:ring-0 cursor-pointer text-sm">
<option>All</option>
<option>Necklaces</option>
<option>Bracelets</option>
<option>Wallets</option>
</select>
</div>
</div>
<div className="flex items-center space-x-2 w-full md:w-auto justify-end">
<span className="font-label-md text-label-md uppercase text-on-surface-variant">Sort:</span>
<select className="bg-transparent border-none text-on-surface font-body-md focus:ring-0 cursor-pointer text-sm">
<option>Featured</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Newest</option>
</select>
</div>
</section>
{/* Product Grid */}
<section className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
{/* Product 1 */}
<div className="group cursor-pointer flex flex-col relative">
<div className="relative w-full aspect-[3/4] mb-4 overflow-hidden bg-surface-container-low border border-surface-variant">
<span className="absolute top-4 left-4 z-10 font-label-md text-label-md uppercase tracking-widest text-on-surface bg-surface/80 px-2 py-1 border border-surface-variant">New</span>
<img alt="White Flower Name Necklace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A delicate, high-end gold name necklace resting on a luxurious, soft beige satin fabric. The lighting is warm and directional, creating elegant shadows and highlighting the intricate typography of the pendant. The aesthetic is clean, minimalist, and deeply romantic, fitting a premium jewelry boutique lookbook." src="https://lh3.googleusercontent.com/aida/AP1WRLvdLApuP2756UmuiNw-XdRElnZHa5whi9ObTbK0HDWaQWrB6atCIcHJDV45dmqrFLNWaqktzmRHO8tLJB6_8d5rj6oKjQQqOstl4eJhuUu4MD9-5Q70E5TJfF4arp1zhaoRtt1xnVtYBQF2R112Syyq3_lh70a_p6m_97i-_t3CEtegJO9OPnazcfHjDkL-wvYC0STrM4mv1ZCj3kM6vksCBXvn9vxl_MzgEkzq7TT-6cfr_lt4p22RKhs"/>
<div className="absolute inset-0 bg-inverse-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg uppercase px-6 py-3 w-[80%] group-hover-show hover:bg-on-surface transition-colors">Quick Add</button>
</div>
<h3 className="font-body-md text-body-md text-on-surface mb-1">White Flower Name Necklace</h3>
<p className="font-body-lg text-body-lg text-tertiary">Rs. 199.00</p>
</div>
{/* Product 2 */}
<div className="group cursor-pointer flex flex-col relative">
<div className="relative w-full aspect-[3/4] mb-4 overflow-hidden bg-surface-container-low border border-surface-variant">
<img alt="Evil Eye Single Name Necklace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A sophisticated gold necklace featuring an evil eye motif and personalized name, elegantly draped across smooth, warm ivory silk. The composition is asymmetrical, drawing focus to the delicate chain and pendant details. The lighting is soft and natural, emphasizing the luxurious texture of the fabric and the gleam of the gold." src="https://lh3.googleusercontent.com/aida/AP1WRLsN6qapSqO-C8QH--LGslBr1Mz3CdBvm5awqkA5lOgJjsloV5L9BtxRiBN-ZK5WkAm9LkcpdFB2cenpJyWQw-kTygzf0KwBlQIulAuM4CBwxP0YQReqOXQdv47KUUmZ95eEYoFmgvZxPbiYuf6uQpojzvDgt_wdIF_5N1nyjFbaSj896IRVGZAhLsAfvGjEbU3ITbA6KQS6mWQ8qQcPrSjMd5cuZBEE4yEorlbsCdfopGz8rZ3iIDgwYH8"/>
<div className="absolute inset-0 bg-inverse-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg uppercase px-6 py-3 w-[80%] group-hover-show hover:bg-on-surface transition-colors">Quick Add</button>
</div>
<h3 className="font-body-md text-body-md text-on-surface mb-1">Evil Eye Single Name Necklace</h3>
<p className="font-body-lg text-body-lg text-tertiary">Rs. 199.00</p>
</div>
{/* Product 3 */}
<div className="group cursor-pointer flex flex-col relative">
<div className="relative w-full aspect-[3/4] mb-4 overflow-hidden bg-surface-container-low border border-surface-variant">
<img alt="Special Style Name Necklace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A modern, bespoke gold nameplate necklace displayed on a minimalist, textured stone surface in soft beige tones. The lighting is crisp and editorial, casting sharp, structural shadows that contrast with the delicate jewelry. The overall mood is contemporary luxury, focusing on craftsmanship and subtle elegance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYlTLOnvbfSUw0J38Wn8IKZ5PwrYHYBmhiY-U-HTEJet5bgiEJmVOBj2i3aM5QjNpNS334yIWZcmZ908SC39Rxkkt_kmm7z7JAe8nmx5hliLNrg7O_yp7HW5rViywDmkgSIOo-2n8PyJWbvW8wNoKEVHt6e0hWFiQf74Pqo1dy3uetaioJSGW9Grik45H13zV-WBRCBRa6aZmb6CjlpF0EibUM0QhxRo3fxJAag-3rsrE3axZ4J1tFfsBplt64kqZ52QawZy6H9-U"/>
<div className="absolute inset-0 bg-inverse-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg uppercase px-6 py-3 w-[80%] group-hover-show hover:bg-on-surface transition-colors">Quick Add</button>
</div>
<h3 className="font-body-md text-body-md text-on-surface mb-1">Special Style Name Necklace</h3>
<p className="font-body-lg text-body-lg text-tertiary">Rs. 199.00</p>
</div>
{/* Product 4 */}
<div className="group cursor-pointer flex flex-col relative">
<div className="relative w-full aspect-[3/4] mb-4 overflow-hidden bg-surface-container-low border border-surface-variant">
<span className="absolute top-4 left-4 z-10 font-label-md text-label-md uppercase tracking-widest text-on-surface bg-surface/80 px-2 py-1 border border-surface-variant">New</span>
<img alt="Crown Name Necklace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An ornate gold necklace with a tiny crown detail and nameplate, resting on a stark white architectural pedestal against a warm grey background. The image style is high-fashion editorial, utilizing ample negative space and strong, minimalist framing. The lighting highlights the polished surface of the gold against the matte pedestal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDimRk88Sa53Vh2diB3srqkmy69vhsE9RxoOlsyT9LEYJmgIKgqgcP-FjWnIA-aa2vUjiDpUEzblmQvFnIfLvB5qaDoTuhsdM-vzZWhG9NiLn2ozWpi22mUaH4hrkQ9AbbShUlwGdJBS4ZBnxVHn0qFpw-IsdpAVoPmi1fDaWt3RlETm2C0BhXZxmd9E1IV7DuG0pzQ4FKxJrujIdrueA9OUHGXYeXrGxy4uKMey-pXMxhwoQ7Xfz7XmomrCY93BqlfstF393LZ6lk"/>
<div className="absolute inset-0 bg-inverse-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg uppercase px-6 py-3 w-[80%] group-hover-show hover:bg-on-surface transition-colors">Quick Add</button>
</div>
<h3 className="font-body-md text-body-md text-on-surface mb-1">Crown Name Necklace</h3>
<p className="font-body-lg text-body-lg text-tertiary">Rs. 199.00</p>
</div>
{/* Product 5 */}
<div className="group cursor-pointer flex flex-col relative">
<div className="relative w-full aspect-[3/4] mb-4 overflow-hidden bg-surface-container-low border border-surface-variant">
<img alt="Cute Panda Name Necklace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A playful yet elegant gold necklace featuring a subtle panda motif alongside a nameplate, displayed flat on a sheet of handmade textured paper in a soft cream hue. A single, delicate dry flower stem crosses the frame, adding an organic, editorial touch. The lighting is bright and diffuse, creating a soft, romantic atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9dU1EC59Mo_OBMTHLjb7MI5ZUlxLd6znoVzHdftugxBuRCu1wLSQvIUG2FFG1gdGGa7ya4IIO5g8FmLudo_xlkANngJYcZbTg5FXKjwwJrjW1LKGhy_NE3un1yHOU0dy6LVWvD4dj2tgWD7ORxH2tx0Wc_UawPeg3kB7PqsLABlpzQj09LfrFPbvjKf_OwnaEw6nS0ls5fWXG2xio00d_Q61fGZbOCASah4TvC1Tco3KZ1n8R1DBuEGr273UtB6_AvbfkXplvTgI"/>
<div className="absolute inset-0 bg-inverse-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg uppercase px-6 py-3 w-[80%] group-hover-show hover:bg-on-surface transition-colors">Quick Add</button>
</div>
<h3 className="font-body-md text-body-md text-on-surface mb-1">Cute Panda Name Necklace</h3>
<p className="font-body-lg text-body-lg text-tertiary">Rs. 199.00</p>
</div>
{/* Product 6 */}
<div className="group cursor-pointer flex flex-col relative">
<div className="relative w-full aspect-[3/4] mb-4 overflow-hidden bg-surface-container-low border border-surface-variant">
<img alt="Heart and Evil Eye Couple Name Necklace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Two intertwined gold necklaces, one with a heart and one with an evil eye, laid out beautifully on a dark charcoal suede surface, providing striking contrast. The composition is tight and focused, highlighting the delicate links of the chains. Subtle, directional light catches the gold, creating a premium, luxurious feel against the dark background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFpsvuahtsoxPMlB62ovIZ8040TYlSuXNo9VDOLfWG8H-TgQcp00bNuiLxZxCZTxC5EnokaOVkFogvFbXa4286hx0Fq3WKBiWUGElfxX0F2O9LmhtFT6C8nuQnQ1CGX87xP-PnEIXmlIsk3hh16iiLIBVVGRZGvd7-Y8kjTYrgMtZQOifehBHjRDAUNH4UKnxBG3oRc5WUrwUPVIZT5z7hMwzcT54IKyvve9reiNoiyV3KNSGui7ZA3WR8CeuL22MGpaTJX843uDs"/>
<div className="absolute inset-0 bg-inverse-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg uppercase px-6 py-3 w-[80%] group-hover-show hover:bg-on-surface transition-colors">Quick Add</button>
</div>
<h3 className="font-body-md text-body-md text-on-surface mb-1">Heart and Evil Eye Couple Name...</h3>
<p className="font-body-lg text-body-lg text-tertiary">Rs. 199.00</p>
</div>
</section>
</main>
  );
}
