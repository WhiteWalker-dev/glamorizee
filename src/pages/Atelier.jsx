export default function Atelier() {
  return (
    <main>
{/* Hero Section */}
<section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
<div className="absolute inset-0 bg-inverse-surface/10 z-10"></div>
<img alt="Atelier Hero" className="absolute inset-0 w-full h-full object-cover object-center scale-105 transform origin-center transition-transform duration-[10s] ease-out hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIW0-_1gmvqoUvN6uh9nPQDXAhLVyUgF-JdQzlhPK9Wyehqm-pZCJKKsMrWQvJCojUkl_jD3UFyWhR7wfy5D6MUlrUzw72u1--zkgyIj0cD26ej6L0GXaiJ5VT9-HjFSdVhD7qfywgGwhTi4cneXYNJCeLyoC9lOejAuIJiTFL4PfnEqtYx2kLE4EVw4WWBSbI_o72ds7TYbNi4iNO72GUw8gRdbh6-EiXBLvCA7_p8kk4tDvHVIu1_bIlgNYPfKdcAwuLPfOuJpg"/>
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop">
<h1 className="font-display-lg text-display-md md:text-display-lg text-on-primary text-shadow-subtle mb-6">The Art of the Atelier</h1>
<p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl text-shadow-subtle">Where heritage craftsmanship meets modern design. Discover the meticulous process behind every piece.</p>
</div>
</section>
{/* The Master's Hand Section */}
<section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div className="md:col-span-5 md:col-start-2 space-y-6 order-2 md:order-1 mt-8 md:mt-0">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">The Master's Hand</h2>
<div className="w-12 h-px bg-outline-variant"></div>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Every GLAMORIZEE creation begins its journey in our dedicated atelier. Here, skilled artisans with decades of experience breathe life into precious metals. 
                    </p>
<p className="font-body-md text-body-md text-on-surface-variant">
                        The meticulous polishing process, done entirely by hand, ensures that every facet catches the light perfectly, reflecting our unwavering commitment to flawless execution and enduring beauty.
                    </p>
</div>
<div className="md:col-span-6 md:col-start-7 order-1 md:order-2 relative">
<div className="absolute -inset-4 bg-surface-container-low -z-10 hidden md:block"></div>
<img alt="Artisan polishing jewelry" className="w-full h-auto object-cover aspect-[4/5] border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgvVP_8XG1rZl1NGjdg6AP44glAZaKl35bIp95HXHtN577bvIsPOZbeS6nCqfgDxvM7lDVGVmM1EUXIrqheYDmEP_MukElCFs-B2w03Fi48sd14JYVL8sYdszjg4teflhA---S2vkOEHzLZ6mTy2N0bnIC603Fi8r3kb3FADZtFw5vg9OnJPp7x7k4chKMmtO1VNvVJ1QGfOrhaska9waIHE1J0qQhrzpFOFiEobHmq2OvYr0dT59NJ51kFa_c2YzEnEv1758rKK8"/>
</div>
</div>
</section>
{/* Materials Section */}
<section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
<div className="max-w-[1440px] mx-auto">
<div className="text-center mb-16 md:mb-24">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Sourced with Integrity</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">We believe true luxury is mindful. Our materials are selected not just for their inherent beauty, but for their ethical provenance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
<div className="md:col-span-7 mb-8 md:mb-0">
<img alt="Jewelry materials and tools" className="w-full h-auto object-cover aspect-video border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMGJFG4GPI3urIaycrjDnxewxFfEqdaTz9H1qWp4BiIfvrCD3CulVyi79eGZjd42-XY3-Ex815PoHob6RBIr4VjjLqpzUbrJnmtUiNw2QwQUDeFCeXyIDAKLDauOXciOAi6Vg5Fx8ycRasmRSyjhO_Rr12X1GF-1tJefBvU7xJkQhsSQ6f_IqubwpWFACtmXKfNA_LKXsAJnY_IduTLDTysZKcsa4JTLKnwsWhYZk8jFHgVCoHR_1RxPQIkoiMvFfjZvwGvM9HWCY"/>
</div>
<div className="md:col-span-4 md:col-start-9 space-y-12">
<div>
<h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-2">Premium 18K Gold</h3>
<p className="font-body-md text-body-md text-on-surface-variant">We exclusively use premium 18k solid gold, chosen for its rich, warm hue and exceptional durability. It's a material designed to be worn daily and passed down through generations.</p>
</div>
<div className="w-full h-px bg-outline-variant/50"></div>
<div>
<h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-2">Conscious Crafting</h3>
<p className="font-body-md text-body-md text-on-surface-variant">From refined recycled metals to responsibly sourced gemstones, our supply chain is strictly vetted to ensure our creations leave a beautiful legacy.</p>
</div>
</div>
</div>
</div>
</section>
{/* Bespoke Experience Section */}
<section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
<span className="material-symbols-outlined text-4xl text-tertiary">diamond</span>
<h2 className="font-display-md text-display-md text-on-surface">The Bespoke Experience</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                    Commissioning a personalized piece is an intimate journey. From the initial sketch to the final polish, we invite you to collaborate with our master jewelers to create a design that is unequivocally yours.
                </p>
<button className="mt-8 bg-on-background text-on-primary font-label-lg text-label-lg uppercase tracking-widest py-4 px-10 hover:bg-surface-tint transition-colors duration-300">
                    Inquire About Bespoke
                </button>
</div>
</section>
</main>
  );
}
