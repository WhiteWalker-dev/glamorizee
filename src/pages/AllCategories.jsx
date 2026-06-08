export default function AllCategories() {
  return (
    <main className="flex-grow flex flex-col pt-section-gap pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
{/* Header */}
<header className="mb-section-gap text-center md:text-left">
<h1 className="font-display-lg text-display-lg text-on-surface mb-base">Explore Our Collections</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Discover our meticulously curated categories, designed to elevate your personal style with understated elegance and masterful craftsmanship.</p>
</header>
{/* Collections Grid (Bento/Asymmetric Style) */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:auto-rows-[400px]">
{/* Item 1: Single Name Pendants (Large Feature) */}
<a className="group md:col-span-8 relative overflow-hidden block card-border bg-surface-container" href="#">
<div className="absolute inset-0 bg-on-surface/10 z-10 pointer-events-none mix-blend-multiply"></div>
<img alt="Single Name Pendants" className="w-full h-full object-cover hover-scale" data-alt="A close-up, high-fashion editorial shot of a delicate gold single name pendant resting gracefully on smooth, warm ivory silk fabric. The lighting is soft and directional, creating a luxurious interplay of highlights and shadows across the fabric folds and the polished gold lettering. The overall aesthetic is minimalist, premium, and sophisticated, emphasizing the fine craftsmanship of the jewelry against the muted, elegant background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwygC_D8wYCVwNjEsKOWIL9VZY2d5ESooixTksXsebKtvSmj-mcMaFlyhLTS0CT84NsM2w6QMmIB1CYt7Uzrlnzxr6WwA8iiS_3QMhWCOoyJsguKMBo9vqsS3Qu-dpWWH_Q1wyvVEQCIVEVpmyidg2qudoMPgqcAG8_z7S_70FWi8TBoFtaB97oGUrqwRPWzjHoqjwKtcZv3Ft33GFuH9acDbFbXLbPJhOcVluuYZtqMDUcRJeCYxIXTHukxt33ju_CZgVn6Mpk6g"/>
<div className="absolute bottom-0 left-0 p-container-padding z-20 w-full bg-gradient-to-t from-surface-variant/90 to-transparent">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Single Name Pendants</h2>
<span className="font-label-lg text-label-lg text-tertiary uppercase tracking-widest border-b border-tertiary pb-1 inline-block">View Collection</span>
</div>
</a>
{/* Item 2: Couple Name Pendants */}
<a className="group md:col-span-4 relative overflow-hidden block card-border bg-surface-container" href="#">
<div className="absolute inset-0 bg-on-surface/10 z-10 pointer-events-none mix-blend-multiply"></div>
<img alt="Couple Name Pendants" className="w-full h-full object-cover hover-scale" data-alt="An elegant, minimalist still life featuring two interlocking gold necklaces with nameplates, symbolizing a couple. The jewelry is laid out on a textured, soft beige stone surface bathed in warm, late-afternoon sunlight. Thin, architectural shadows cut across the scene, highlighting the brilliant luster of the gold. The composition is asymmetrical and modern, reflecting a high-end luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvdGQUUZZcvYHCQH2vn2nqckf7f6MrTA_UqUQfnQIqUvf2C2fHThqyZ62XT_1IFI-ZP00np6qeJ7CghwyWEtrb0u61KXQD_yWu97wdbsmPLER2YVQ3jSAZAt59-DLR30-sKQuq-8SuGXld9yxePtx3bCFW0JB4XJRoxd2vXRS8WOg2vuxyf8N-jWMRG-PJlyz_EbXxGZ1oFqAWllZfOZQ3CYIhHQFnvRNzXBEc8RQejoQOePIMoizRNY3pkQV7kWCzNmXs4CuUOXk"/>
<div className="absolute bottom-0 left-0 p-container-padding z-20 w-full bg-gradient-to-t from-surface-variant/90 to-transparent">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Couple Name Pendants</h2>
<span className="font-label-lg text-label-lg text-tertiary uppercase tracking-widest border-b border-tertiary pb-1 inline-block">View Collection</span>
</div>
</a>
{/* Item 3: Bracelets (Kada) */}
<a className="group md:col-span-6 relative overflow-hidden block card-border bg-surface-container" href="#">
<div className="absolute inset-0 bg-on-surface/10 z-10 pointer-events-none mix-blend-multiply"></div>
<img alt="Bracelets" className="w-full h-full object-cover hover-scale" data-alt="A sophisticated editorial photograph showcasing a stack of meticulously crafted gold Kada bracelets resting on a smooth, warm ivory plinth. The background is a muted deep charcoal, providing a striking contrast that makes the gold pop. Soft, diffused lighting accentuates the curved surfaces and subtle intricate details of the bracelets. The overall mood is quiet, poised, and exclusively premium." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwuHER2b6jlR52nHrLYI6mIF98t3HM8tRPYaJVYc0SB7z5gL9dAgdGkI2_gP3fMTmEr5nIYsxUVJ7biuI4sd7e5SfwFyjLllD1RZwKuuKUhjb4LF1a4qr2zYID4JQ0zo32Lv36NoBXJC3Zp2psaINGmmIyuCo4Q0yyrd8_LoAdWpsPt0I5EC9q9PI0v0fMBpIIhOKNHNa7nOasrn6NMvaqXBEmM_AAdKe8yEajok3ED0K73I1tg-td_VNcPk4C_NTcAhNlCSLsYwU"/>
<div className="absolute bottom-0 left-0 p-container-padding z-20 w-full bg-gradient-to-t from-surface-variant/90 to-transparent">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Bracelets (Kada)</h2>
<span className="font-label-lg text-label-lg text-tertiary uppercase tracking-widest border-b border-tertiary pb-1 inline-block">View Collection</span>
</div>
</a>
{/* Item 4: Accessories (Split into two smaller blocks for visual rhythm) */}
<div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-gutter">
<a className="group relative overflow-hidden block card-border bg-surface-container h-full min-h-[300px] md:min-h-0" href="#">
<div className="absolute inset-0 bg-on-surface/10 z-10 pointer-events-none mix-blend-multiply"></div>
<img alt="Keychains" className="w-full h-full object-cover hover-scale" data-alt="A minimalist layout of a high-end luxury keychain with subtle gold accents, placed on a pristine white surface with expansive negative space. A sharp, diagonal shadow falls across the frame, adding architectural depth. The styling is clean and modern, evoking a sense of refined taste and everyday elegance within a high-fashion context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXrPc0dWRrRYOEtZxN7czLrHn8fBHNwrc8GbhJGeZItJP9CHf12HPFr5JuTgrbzYiJsMndWG2CXrhwEZ0mfgUSSPmd-6qtnQqYbD-9sEbG-Snpm_FsY70dz1SLfsSVP7UPO2B6zq1ZDKH-OKh1GjFOeGENGjpHIGuq1Kg8IqqqMw1vVStB6caEBRi71l0D-o5evCFsmJcn1XWdd_cnk97b6AlDA4yxk4YLVd9HOs2YwbmwAeOjgz5W3shppdEpljHMR4hUn4eg6G0"/>
<div className="absolute bottom-0 left-0 p-container-padding z-20 w-full bg-gradient-to-t from-surface-variant/90 to-transparent">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Keychains</h2>
</div>
</a>
<a className="group relative overflow-hidden block card-border bg-surface-container h-full min-h-[300px] md:min-h-0" href="#">
<div className="absolute inset-0 bg-on-surface/10 z-10 pointer-events-none mix-blend-multiply"></div>
<img alt="Name Wallets" className="w-full h-full object-cover hover-scale" data-alt="A close-up shot of a premium leather name wallet in a deep charcoal hue, featuring subtle, elegant gold monogramming. The wallet is positioned asymmetrically on a soft beige background. Lighting is soft and evocative, highlighting the rich texture of the leather and the precise stitching. The composition embodies quiet luxury and sophisticated craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2gvFU1LmqXWdMmWSl3a_45Kq2TXuGmtytTFQdwk76Sh_lZxHHoxJQ32k5wLnmZho2G-ENPdK5vH3jJUsob3EBGNm-GOlNMxZGqvqzdDJEVg5vt3GECkf0Zh3PjFS-qTSedK5nertS-dQwG7EltI4JAFzj-vTdW1u2Ka81w4JpU0UCA8IG9K7CRhvCFBLx_oxojCPSjYsV73TSuogR8vYnRuOeciOiH8PJsddK5fzHLw-0ualrHyMQgRFMqHJDB85b1yMtlMrwQRc"/>
<div className="absolute bottom-0 left-0 p-container-padding z-20 w-full bg-gradient-to-t from-surface-variant/90 to-transparent">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Name Wallets</h2>
</div>
</a>
</div>
</div>
</main>
  );
}
