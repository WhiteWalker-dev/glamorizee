export default function Boutique() {
  return (
    <main className="flex-grow">
{/* Hero Header */}
<section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row items-center gap-gutter">
<div className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-12">
<h1 className="font-display-lg text-display-lg text-on-background mb-6">The Boutique</h1>
<p className="font-body-lg text-body-lg text-secondary mb-10 max-w-md">
                    A curated space dedicated to our most exclusive and artisanal pieces. Discover a collection where unparalleled craftsmanship meets timeless elegance, designed for the discerning collector.
                </p>
<div>
<a className="lux-button font-label-lg text-label-lg inline-block" href="#explore">Explore the Curations</a>
</div>
</div>
<div className="w-full md:w-1/2 mt-10 md:mt-0 relative group overflow-hidden">
<div className="absolute inset-0 image-overlay z-10 pointer-events-none"></div>
<img alt="Hero" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLvv-OREU2eK1xaWTWTIU_IwnuMOIR6eFOE7f9jsPzXulddUG6RFRWwF8R5Kc94TMEXV3XrHGJzcQ6xZPre48acs5qhWi8zODpC8ZEgXxy-5nIhpdF6jWx3hvWVFiYgdWNEe0Kr9vDnij6W3dQxB7cuOansfCuvWoyyWv_OZmwYWYiUYX4ZLI3wCpJUC8CXFe9gGYX0miv83DPTRMk-aRi3Ru6aFQiexMxC-td-FWXXoL7gWU1T5nvByntU"/>
</div>
</section>
{/* Curated Collections */}
<section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap" id="explore">
<div className="text-center mb-16">
<h2 className="font-display-md text-display-md text-on-background mb-4">Curated Collections</h2>
<div className="w-16 h-px bg-tertiary mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Large Featured Card */}
<div className="md:col-span-8 group relative overflow-hidden cursor-pointer">
<div className="absolute inset-0 image-overlay z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"></div>
<img alt="The Atelier Series" className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-102" data-alt="Close up lifestyle editorial shot of an elegant woman wearing multiple delicate gold necklaces and diamond earrings. Soft natural lighting illuminating her collarbone and the fine jewelry. High-end luxury fashion aesthetic with muted warm tones and shallow depth of field. Clean minimal background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb7sWeUzbKVtgszGEoSXD2i1BRQulC9SCz7s3sFItXSt3dIxfX0gMHJKdfSwofJlBK1MYc9I7I-J0HaJCu2D3xmprzXTMWtTVTmru8CS328YaX01uiRbcMi_kM6MmPeTXDBO6_uc8mJoqQwRJgFvUbruTCMyjbD_-6XpmGjyk3RZ9OepvOeV-j1_8NLFFrBeOQjQ9SqCFn68tmdzLXunyXcrJ9B302apZz5arJXGnvgIiRxaN040tru_79KBz4Z2KHem-YTWEBx7M"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/60 to-transparent">
<h3 className="font-headline-lg text-headline-lg text-white mb-2">The Atelier Series</h3>
<a className="font-label-lg text-label-lg text-white uppercase tracking-widest border-b border-white pb-1 inline-block hover:text-tertiary hover:border-tertiary transition-colors" href="#">Discover</a>
</div>
</div>
{/* Stacked Medium Cards */}
<div className="md:col-span-4 flex flex-col gap-gutter">
<div className="flex-1 group relative overflow-hidden cursor-pointer bg-surface-container">
<div className="absolute inset-0 image-overlay z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"></div>
<img alt="Bespoke Gold" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-102" data-alt="Still life editorial photography of a chunky bespoke gold ring resting on a textured piece of raw marble. Warm directional light creating sharp shadows and highlighting the polished gold texture. Sophisticated minimalist setting emphasizing artisanal craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZbcIbhZ4b4Dc-CX1Pp6aa7sWTM8FQ851fyI0nFydWEE4G9tz-kPhjbpwI47QoHwkoZuFDpJv_icYf6xVphn2P0PWimcYqzcwitH0enHB6XskuK8Z11Gr3FyotTGYyXWrTqpaY8Lm5oh2FxEancX0GRKsQFm6e7q9nM_HHs_y_2bE0-vOXdRpDDl7FRzAMzp7FJTg61wU-wYe4r3xZcImIM091cvM48tcX_USRWaRNCnzoCS4jzSvpO-wRFKPct8VTlnuLtZRYbXk"/>
<div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-black/50 to-transparent">
<h3 className="font-headline-lg text-headline-lg-mobile text-white mb-2">Bespoke Gold</h3>
</div>
</div>
<div className="flex-1 group relative overflow-hidden cursor-pointer bg-surface-container">
<div className="absolute inset-0 image-overlay z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"></div>
<img alt="Diamond Essentials" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-102" data-alt="Macro photography of a brilliant cut diamond necklace against a deep charcoal velvet background. High contrast cinematic lighting that captures the light refracting through the facets of the gemstone. Premium, intense and moody luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEmjYObD4DizgcS1v08Xz-3xW1kDZGQVlwdkSgwkPR3KaDBxL9b_2UoYjDWpElPCokbvVh_ACyVNX0FkwHp8u9TpIp25F66Fua-pH4fqHeUh1h_XPJaYxZkLyfK6wiQtyvdVoeZ2kNeMjizLz_DmG8zTpuSjNxl0nUU6_pnw2UGqKN1h9bZ8yWi0ejaN_GD8AxiwxcuAcq7_W-qRp4NqtTedbp2lryskBgUaAM8G3YddVv82zw6S4KpViw9mefvsX8godkm9t4xpg"/>
<div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-black/50 to-transparent">
<h3 className="font-headline-lg text-headline-lg-mobile text-white mb-2">Diamond Essentials</h3>
</div>
</div>
</div>
</div>
</section>
{/* Featured Editorial Piece */}
<section className="w-full bg-surface-container-high py-section-gap my-section-gap">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-5/12 order-2 md:order-1">
<h2 className="font-label-lg text-label-lg text-tertiary uppercase tracking-widest mb-4">Masterpiece Spotlight</h2>
<h3 className="font-display-md text-display-md text-on-background mb-6">The Signature Nameplate</h3>
<p className="font-body-lg text-body-lg text-secondary mb-8 leading-relaxed">
                        Forged in the heart of our atelier, this bespoke nameplate represents the pinnacle of personalized luxury. Each curve is meticulously sculpted from 18k solid gold, offering a unique narrative bound in precious metal. It is not merely jewelry; it is identity rendered eternal.
                    </p>
<a className="font-label-lg text-label-lg text-tertiary uppercase border-b border-tertiary pb-1 hover:text-on-background hover:border-on-background transition-colors inline-flex items-center gap-2" href="#">
                        View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
<div className="w-full md:w-7/12 order-1 md:order-2 relative">
<div className="absolute -inset-4 border border-outline-variant/30 hidden md:block"></div>
<img alt="Featured Editorial Piece" className="w-full h-auto object-cover relative z-10 shadow-sm" src="https://lh3.googleusercontent.com/aida/AP1WRLsN6qapSqO-C8QH--LGslBr1Mz3CdBvm5awqkA5lOgJjsloV5L9BtxRiBN-ZK5WkAm9LkcpdFB2cenpJyWQw-kTygzf0KwBlQIulAuM4CBwxP0YQReqOXQdv47KUUmZ95eEYoFmgvZxPbiYuf6uQpojzvDgt_wdIF_5N1nyjFbaSj896IRVGZAhLsAfvGjEbU3ITbA6KQS6mWQ8qQcPrSjMd5cuZBEE4yEorlbsCdfopGz8rZ3iIDgwYH8"/>
</div>
</div>
</section>
</main>
  );
}
