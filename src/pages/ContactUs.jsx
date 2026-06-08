export default function ContactUs() {
  return (
    <main className="w-full">
{/* Hero Section */}
<section className="w-full px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center">
<h1 className="font-display-lg text-display-lg md:text-[80px] text-on-background mb-8 max-w-4xl mx-auto">Contact Us</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Our commitment to personalized service extends beyond our physical boutiques. Connect with the Glamorizee Atelier for bespoke inquiries, styling advice, or any assistance required to curate your exclusive wardrobe.
            </p>
</section>
{/* Main Content Split: Form & Concierge */}
<section className="w-full px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pb-section-gap">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16">
{/* Contact Form (Left) */}
<div className="lg:col-span-7">
<div className="bg-surface-container-lowest p-8 md:p-12 hairline-border h-full">
<h2 className="font-headline-lg text-headline-lg mb-8 text-on-background">Send an Inquiry</h2>
<form className="space-y-12">
<div className="relative">
<input className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-3 font-body-md text-body-md text-on-background placeholder-transparent transition-colors" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-5 font-label-md text-label-md text-secondary uppercase tracking-widest peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-placeholder-shown:text-outline peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-label-md peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest transition-all duration-300" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-3 font-body-md text-body-md text-on-background placeholder-transparent transition-colors" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 -top-5 font-label-md text-label-md text-secondary uppercase tracking-widest peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-placeholder-shown:text-outline peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-label-md peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest transition-all duration-300" htmlFor="email">Email Address</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-3 font-body-md text-body-md text-on-background placeholder-transparent transition-colors" id="subject" placeholder="Subject" type="text"/>
<label className="absolute left-0 -top-5 font-label-md text-label-md text-secondary uppercase tracking-widest peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-placeholder-shown:text-outline peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-label-md peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest transition-all duration-300" htmlFor="subject">Inquiry Subject</label>
</div>
<div className="relative">
<textarea className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-3 font-body-md text-body-md text-on-background placeholder-transparent resize-none transition-colors" id="message" placeholder="Message" required="" rows="4"></textarea>
<label className="absolute left-0 -top-5 font-label-md text-label-md text-secondary uppercase tracking-widest peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-placeholder-shown:text-outline peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-label-md peer-focus:text-secondary peer-focus:uppercase peer-focus:tracking-widest transition-all duration-300" htmlFor="message">Your Message</label>
</div>
<button className="w-full md:w-auto bg-on-background text-on-primary font-label-lg text-label-lg uppercase px-12 py-4 hover:bg-tertiary transition-colors duration-300" type="submit">
                                Submit Inquiry
                            </button>
</form>
</div>
</div>
{/* Boutique Concierge (Right) */}
<div className="lg:col-span-5 flex flex-col gap-12 mt-12 lg:mt-0">
<div>
<h3 className="font-headline-lg text-headline-lg mb-6 text-on-background">Boutique Concierge</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">
                            For immediate assistance or highly specific requests, our dedicated concierge team is available to ensure your experience is flawless.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4 group cursor-pointer">
<span className="material-symbols-outlined text-tertiary mt-1 group-hover:scale-110 transition-transform">call</span>
<div>
<p className="font-label-md text-label-md uppercase text-secondary mb-1">Direct Line</p>
<p className="font-body-lg text-body-lg text-on-background">+1 (800) 555-GLAM</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<span className="material-symbols-outlined text-tertiary mt-1 group-hover:scale-110 transition-transform">chat</span>
<div>
<p className="font-label-md text-label-md uppercase text-secondary mb-1">WhatsApp Concierge</p>
<p className="font-body-lg text-body-lg text-on-background">+1 (800) 555-0199</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<span className="material-symbols-outlined text-tertiary mt-1 group-hover:scale-110 transition-transform">mail</span>
<div>
<p className="font-label-md text-label-md uppercase text-secondary mb-1">Email</p>
<p className="font-body-lg text-body-lg text-on-background hover:text-tertiary transition-colors">atelier@glamorizee.com</p>
</div>
</div>
</div>
</div>
{/* Visit Atelier snippet */}
<div className="pt-12 hairline-top border-outline-variant border-t">
<h3 className="font-headline-lg text-headline-lg mb-6 text-on-background">Visit the Atelier</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">
                            75009 Paris, France<br/>
                            Rue de la Paix, 15
                        </p>
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg uppercase text-tertiary hover:opacity-80 transition-opacity" href="#">
<span className="border-b border-tertiary pb-0.5">Get Directions</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/* Artistic Map/Location Visual */}
<section className="w-full px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pb-section-gap">
<div className="w-full h-[400px] md:h-[600px] bg-surface-variant relative overflow-hidden group">
<img alt="Paris Architecture" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-in-out" data-alt="A sophisticated black and white photograph of classic Parisian architecture featuring ornate balconies and tall windows. The image represents the location of a luxury fashion atelier in Paris. The lighting is soft and natural, emphasizing the elegant architectural lines and stone textures. The mood is timeless, refined, and distinctly high-end European editorial." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmCF3ud1ySWaS5dUZ6HpXWzXSjQ3JAI3E-9REWigbIh43T7C5tGYD33nic-gDX6PCZjE97Pr80dW2OYwX6Pem9t14sC1es1lb8xlHPa8Sew3HQgeWCXo1awQfOVYCKdFfH8N5xkgkNF3f9SbltGVO1lDn3_b4wQ8TdbsEi5iwnz_dxmNhOs9ATMSkWw_NDOKicfTwEj9zASsmZa6PnEMjyz0g0FrbIYrTvVqBmTJmIWEDYffutWIlqH4LwGUC0vJT9h9fVBBsyot8"/>
<div className="absolute inset-0 bg-background/20"></div>
<div className="absolute bottom-8 right-8 bg-surface-container-lowest p-6 hairline-border max-w-sm hidden md:block">
<p className="font-label-md text-label-md uppercase text-secondary mb-2 tracking-widest">Flagship Location</p>
<p className="font-headline-lg text-headline-lg text-on-background">Paris Atelier</p>
</div>
</div>
</section>
</main>
  );
}
