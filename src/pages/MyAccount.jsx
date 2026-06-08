export default function MyAccount() {
  return (
    <main className="flex-grow flex flex-col md:flex-row w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap gap-gutter">
{/* Sidebar Navigation (Account specific) */}
<aside className="w-full md:w-64 flex-shrink-0 mb-12 md:mb-0">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-10 text-on-surface border-b border-surface-container-highest pb-4">My Account</h2>
<nav className="flex flex-col gap-6">
<a className="font-label-lg text-label-lg uppercase tracking-widest text-tertiary flex items-center gap-4 group" href="#">
<span className="w-8 h-[1px] bg-tertiary transition-all duration-300"></span>
<span className="">Overview</span>
</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant hover:text-on-surface flex items-center gap-4 group transition-colors" href="#">
<span className="w-0 h-[1px] bg-on-surface group-hover:w-4 transition-all duration-300"></span>
<span className="">Orders &amp; Returns</span>
</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant hover:text-on-surface flex items-center gap-4 group transition-colors" href="#">
<span className="w-0 h-[1px] bg-on-surface group-hover:w-4 transition-all duration-300"></span>
<span className="">Wishlist</span>
</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant hover:text-on-surface flex items-center gap-4 group transition-colors" href="#">
<span className="w-0 h-[1px] bg-on-surface group-hover:w-4 transition-all duration-300"></span>
<span className="">Profile Details</span>
</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant hover:text-on-surface flex items-center gap-4 group transition-colors" href="#">
<span className="w-0 h-[1px] bg-on-surface group-hover:w-4 transition-all duration-300"></span>
<span className="">Address Book</span>
</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant hover:text-on-surface flex items-center gap-4 group transition-colors mt-8 pt-6 border-t border-surface-container-highest" href="#">
<span className="w-0 h-[1px] bg-on-surface group-hover:w-4 transition-all duration-300"></span>
<span className="">Sign Out</span>
</a>
</nav>
</aside>
{/* Dashboard Canvas */}
<div className="flex-grow flex flex-col gap-20">
{/* Greeting Section */}
<section className="animate-fade-in-up">
<h1 className="font-display-lg text-display-lg text-on-surface mb-4">Welcome back, Evelyn</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Discover your personalized curation, track recent acquisitions, and manage your bespoke details in one refined space.
                </p>
</section>
{/* Latest Order & Quick Actions Bento */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Order Status Card */}
<div className="lg:col-span-2 border border-surface-container-highest p-8 bg-surface flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-500">
<div className="flex justify-between items-start mb-8">
<div>
<span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-2 block">Latest Acquisition</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface">Order #GLA-84920</h3>
</div>
<span className="bg-tertiary-container text-tertiary font-label-md text-label-md uppercase px-3 py-1 border border-tertiary/20">In Transit</span>
</div>
<div className="flex items-center gap-6">
<div className="w-24 h-32 bg-surface-container overflow-hidden">
<img alt="Silk evening gown draped elegantly on a mannequin" className="w-full h-full object-cover" data-alt="A luxurious silk evening gown in deep emerald green, draped elegantly on a minimalist tailor's mannequin. The setting is a chic, high-end atelier with warm ivory walls and soft, natural daylight streaming in from a tall window. The mood is sophisticated and quiet, emphasizing the delicate sheen of the fabric. High fashion editorial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1pRX-uQ7A7AUyg83yawT8WYxfiRZdPMfJfuKbUqcyyvElxMU1B9yBWKuiocN1OLbZm9dK3KjYks8h3XQTG1T3y0Gs6SvCF3GcCjJFaIGnyiqktI1DUeDIgA-O0c6vMdN08KX14v9OLQAjgK-lkpykOaC4d1NlWC7JNIltXYn-luVcHVUiISSuoA5mmauLHRa18i1tro45S__mLLe56xqWa5A0dcDbK3xD5W5wh6fFPoXfjW4Wm2VvwmX3LyLaEIoYsIRjVMd0g6s"/>
</div>
<div className="flex-grow">
<h4 className="font-body-md text-body-md text-on-surface font-medium">Silk Charmeuse Slip Dress</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Midnight Black • Size S</p>
<a className="font-label-lg text-label-lg text-tertiary uppercase tracking-widest border-b border-tertiary pb-1 hover:opacity-70 transition-opacity" href="#">Track Package</a>
</div>
</div>
</div>
{/* Rewards / Status Card */}
<div className="border border-surface-container-highest p-8 bg-inverse-surface text-inverse-on-surface flex flex-col justify-center items-center text-center group hover:scale-[1.01] transition-transform duration-500">
<span className="material-symbols-outlined text-4xl mb-4 text-tertiary-fixed-dim" style={{'fontWeight': '200'}}>stars</span>
<h3 className="font-headline-lg text-headline-lg mb-2">Atelier Tier</h3>
<p className="font-body-md text-body-md text-surface-container-highest mb-6">You are 1,200 points away from Noir status.</p>
<a className="font-label-lg text-label-lg text-inverse-on-surface uppercase tracking-widest border-b border-inverse-on-surface pb-1 hover:text-tertiary-fixed transition-colors" href="#">View Benefits</a>
</div>
</section>
{/* Curated For You (Asymmetric Gallery) */}
<section>
<div className="flex justify-between items-end mb-10 border-b border-surface-container-highest pb-4">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Curated For You</h2>
<a className="font-label-lg text-label-lg text-on-surface uppercase tracking-widest border-b border-on-surface pb-1 hover:text-tertiary transition-colors hidden md:block" href="#">View All Recommendations</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Large Feature Product */}
<div className="md:col-span-7 group cursor-pointer">
<div className="w-full h-[600px] overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="Model wearing a structured blazer" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A high-fashion editorial shot of a female model wearing a structured, impeccably tailored oversized blazer in a soft beige tone. She stands against a stark, warm ivory minimalist studio background. The lighting is dramatic yet soft, casting sharp architectural shadows that highlight the garment's silhouette. The mood is powerful, modern, and quietly luxurious." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0--0dCp2M7sGAQ8rgz4TvI1OFaBsiAfqV9zi_d4vn9nIaiM-rxlo8fEZ_hr7fSi5KFvnVLGDcLgGNF5RZa5HuqiC_YSwl9-Ve0jmXGtNc_1OaK-9tVrV06xgFI6MnsBpuLo925s6IgyKXzTSNxJl6CDdxS2kxpcmFq_VqBmORexXRFxowde41aPXbR9_Yo7DOx2SRTEPGFlP9EkkAPIBtIeAK-q2VB2W-aG4PrrEcP6XXpURU8xdoRXyM9FGtrwp6Ba1f5H4vMSA"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-body-lg text-body-lg text-on-surface">Architectural Wool Blazer</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Soft Sand</p>
</div>
<span className="font-body-lg text-body-lg text-on-surface">$890</span>
</div>
</div>
{/* Stacked Smaller Products */}
<div className="md:col-span-5 flex flex-col gap-gutter">
<div className="group cursor-pointer flex-grow">
<div className="w-full h-[280px] overflow-hidden mb-4 relative">
<img alt="Minimalist gold jewelry" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A close-up, macro shot of minimalist luxury gold jewelry resting on a textured, deep charcoal slate surface. The pieces include a delicate chain and a geometrically shaped pendant. The lighting is highly controlled and directional, creating bright, gleaming reflections on the gold against the dark, moody background. The aesthetic is refined and highly polished." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7K7TrDt3HbdWrBskfK7MJWQjj4FKK-5STkLFl1-uvIVcI80gLSAlxaSGmSqMK3efWxcD8PWenbM6x10hhwyo2xaR97-kPRQKRk-xV3Jfm_pi57fy8yRi1VGvYNANENxAjRlB5ZMr-NNvtLC77lfx3fkwhpPfWRLUC5iw7tckgyJW1gBrxEcfzsZvb-Dpn2h6JZ1wPqBQ7JwqR4jPi3nJ-x2d8-eQp09WliBnsqa9r05B2m4GI3-NLkmuhII1J6rt8j4O4IiHXSBs"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-body-lg text-body-lg text-on-surface">Linear Drop Earrings</h3>
<p className="font-body-md text-body-md text-on-surface-variant">18k Gold Vermeil</p>
</div>
<span className="font-body-lg text-body-lg text-on-surface">$245</span>
</div>
</div>
<div className="group cursor-pointer flex-grow">
<div className="w-full h-[280px] overflow-hidden mb-4 relative bg-surface-container">
<img alt="Leather top handle bag" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A sleek, structured leather top-handle handbag in a rich, warm charcoal hue. The bag is positioned off-center on a pristine white pedestal within a minimalist gallery setting. Soft, diffused lighting enhances the smooth texture of the premium leather and the subtle glint of gold-tone hardware. The composition is asymmetrical, modern, and evocative of high-end boutique displays." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOsbwmt6Gxcx8yRLGN8apcKkwhG_0POB7y9hvd0UWyURfyQ_OgyrwhrK1HBrmQ6tv_STwKQ2gAZuRr5qFOVD1xo7zWXdSfGTP6Scygethlsevewf9juDA6tmUIVmYR17bh0JAEV6WEzLgpjyERlpkvjeedI2wTwQ8fcUT4Ndu41zmszojEne6FIq4e5NvHoolMKWrIZ0lynFJ_sX_PgLaQMhW_PH2l0-K3gMWeU1djhKne5LmDZvtKRI3Nv9sQCda1-mZgoNme2o4"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-body-lg text-body-lg text-on-surface">The Sculptural Tote</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Noir Leather</p>
</div>
<span className="font-body-lg text-body-lg text-on-surface">$1,150</span>
</div>
</div>
</div>
</div>
<div className="mt-8 md:hidden">
<a className="font-label-lg text-label-lg text-on-surface uppercase tracking-widest border-b border-on-surface pb-1 hover:text-tertiary transition-colors" href="#">View All Recommendations</a>
</div>
</section>
</div>
</main>
  );
}
