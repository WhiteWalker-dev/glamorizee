import { Link } from 'react-router-dom';

export default function Collections() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <img alt="The Collections Hero" className="w-full h-full object-cover object-center opacity-90 transition-transform duration-[10s] hover:scale-105 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmqA1iMh9q8_unk53Dd-2Xs0UXFGTAQIP0zIN8hi_nNveJrxQk18ucWKv6LZVJTon6olTXHM0KE6gOLvUZlRXHX7WqvHAaKcLigDO_DuJIcWPGFcpXH6l9cFNBeyN53oyUn4sCOSgJVfFzCpOAaXXF70_5RUpX-sg021FOCcLnBAHrQehEoIFoHHoYaHpeWrQjSACIGciRuELJuzx7wvX2xeaf0WWGMfDFxpjw--V71KEDqaSHPWuYwiYaG4hntIVI-_3y8G8otTg"/>
          <div className="absolute inset-0 bg-on-background/10 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop w-full max-w-[1120px] mx-auto mt-20">
          <h1 className="font-display-lg text-display-lg md:text-[96px] text-on-secondary mb-6 tracking-tighter drop-shadow-sm">The Collections</h1>
          <p className="font-body-lg text-body-lg text-on-secondary max-w-2xl mx-auto opacity-90 drop-shadow-sm">Curated narratives of elegance. Discover our meticulously crafted series, designed to be worn as personal poetry.</p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto text-center">
        <span className="font-label-lg text-label-lg uppercase tracking-widest text-tertiary mb-6 block">Artistry &amp; Intention</span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8">Crafted for the Discerning Eye.</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Each collection represents a distinct chapter in our design philosophy. From the personalized touch of our name pieces to the architectural grace of our signature bracelets, every item is an invitation to express your unique narrative with understated luxury.
        </p>
        <div className="w-px h-16 bg-surface-variant mx-auto mt-12"></div>
      </section>

      {/* Bento Grid Collections */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[400px] md:auto-rows-[500px]">
          {/* Card 1: Name Necklaces (Large) */}
          <Link className="group relative md:col-span-8 overflow-hidden block" to="/new-arrivals">
            <img alt="Name Necklaces" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkLAsV8m-i68_Gp09xOn4BN8KL6U0IUGrF2ddgPc2oPoJe1iOl5Dts0aT0rKGyzU1wkVFOv6AghGir8_T08d3yZH7EO9QbjvKdzEUaqOZsAwKyRoN9cVzEAHMsRCa3AKIBXtyhFApeoCp32rUMBT-84k3eCglpqpMpLcX0p2MW4V4PAhhBs8mJTLGTuLrKIVaHTZ23qaWhwNFbOdbnwbCr3YFn_7wHMsioILQH1SfUZ69ku918UWPsF-YWPnVRdAN-6TLjMA_JBoY"/>
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/40 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-widest text-on-secondary mb-3 block opacity-80">Personalized</span>
                  <h3 className="font-display-md text-display-md text-on-secondary">Name Necklaces</h3>
                </div>
                <span className="font-label-lg text-label-lg uppercase text-on-secondary border-b border-on-secondary pb-1 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">Explore</span>
              </div>
            </div>
          </Link>
          {/* Card 2: Couple Pendants (Tall) */}
          <Link className="group relative md:col-span-4 md:row-span-2 overflow-hidden block" to="/categories">
            <img alt="Couple Pendants" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLsN6qapSqO-C8QH--LGslBr1Mz3CdBvm5awqkA5lOgJjsloV5L9BtxRiBN-ZK5WkAm9LkcpdFB2cenpJyWQw-kTygzf0KwBlQIulAuM4CBwxP0YQReqOXQdv47KUUmZ95eEYoFmgvZxPbiYuf6uQpojzvDgt_wdIF_5N1nyjFbaSj896IRVGZAhLsAfvGjEbU3ITbA6KQS6mWQ8qQcPrSjMd5cuZBEE4yEorlbsCdfopGz8rZ3iIDgwYH8"/>
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/40 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <span className="font-label-md text-label-md uppercase tracking-widest text-on-secondary mb-3 block opacity-80">Connection</span>
              <h3 className="font-headline-lg text-headline-lg text-on-secondary mb-4">Couple Pendants</h3>
              <span className="font-label-lg text-label-lg uppercase text-on-secondary border-b border-on-secondary pb-1 inline-block opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">Explore</span>
            </div>
          </Link>
          {/* Card 3: Signature Bracelets (Wide) */}
          <Link className="group relative md:col-span-8 overflow-hidden block" to="/new-arrivals">
            <img alt="Signature Bracelets" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDif0iyoE59dap_eTSxA9ecqnryRQxUyJiVCO7FUrxX49vJOEYD65yQaxivbyjJ0jPLvy4JZAje1u2glcnDE00PWG1kzr7GSKPwP5IblZAuvO0Q82xCEloqhbsJ6p-K2CQrz4PYZpzsPs8eHLvpow9R6hZT7tUBFxv-jCyxUou2muypa9F4sgRT8Afv7sHAqG2eXlMxXeQnO-Edaxgt-SJgu4ZchWguZV6IZTSPnmwmQAGt6Rjjc0lytT0heJoUoGLSXk1_mLx40Rs"/>
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/40 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-widest text-on-secondary mb-3 block opacity-80">Iconic</span>
                  <h3 className="font-display-md text-display-md text-on-secondary">Signature Bracelets</h3>
                </div>
                <span className="font-label-lg text-label-lg uppercase text-on-secondary border-b border-on-secondary pb-1 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">Explore</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Secondary Grid (Minimalist Cards) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter md:gap-x-12 lg:gap-x-24">
          {/* Keychains */}
          <Link className="group cursor-pointer block" to="/categories">
            <div className="w-full aspect-[4/5] bg-surface-container overflow-hidden mb-6 relative">
              <div className="w-full h-full bg-surface-variant flex items-center justify-center transition-transform duration-[2s] ease-out group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-surface-bright to-surface-dim opacity-50"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Keychains</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">Everyday elegance.</p>
              </div>
              <span className="material-symbols-outlined text-tertiary opacity-0 transform -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">arrow_forward</span>
            </div>
          </Link>
          {/* Name Wallets */}
          <Link className="group cursor-pointer block mt-12 md:mt-24" to="/categories">
            <div className="w-full aspect-[4/5] bg-surface-container overflow-hidden mb-6 relative">
              <div className="w-full h-full bg-surface-variant flex items-center justify-center transition-transform duration-[2s] ease-out group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-tr from-surface-container-low to-surface-dim opacity-50"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Name Wallets</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">Bespoke essentials.</p>
              </div>
              <span className="material-symbols-outlined text-tertiary opacity-0 transform -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">arrow_forward</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
