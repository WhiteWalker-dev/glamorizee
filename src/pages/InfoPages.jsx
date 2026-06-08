import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const INFO_CONTENT = {
  sustainability: {
    title: "Sustainability & Ethics",
    subtitle: "Mindful luxury designed for generations.",
    content: (
      <div className="space-y-8">
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          At GLAMORIZEE, we believe that true luxury is mindful. The objects we wear should leave a beautiful legacy behind. Our dedication to sustainability guides every decision we make—from the sourcing of raw metals to our zero-waste packaging.
        </p>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Responsible Gold Sourcing</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We exclusively work with suppliers that are certified by the Responsible Jewellery Council (RJC). 100% of our gold is recycled or ethically mined under strict labor and environmental standards, minimizing ecological footprints.
          </p>
        </div>
        <div className="w-full h-px bg-outline-variant/30"></div>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Gemstone Provenance</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Every diamond and gemstone selected for our custom pieces complies with the Kimberley Process, ensuring conflict-free origin. We track our gems directly from source to polish, maintaining complete transparency.
          </p>
        </div>
        <div className="w-full h-px bg-outline-variant/30"></div>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Atelier Environmental Footprint</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our atelier runs on 100% renewable electricity. We utilize closed-loop water systems in our polishing processes to prevent chemical discharges, ensuring that our local ecosystem remains pristine.
          </p>
        </div>
      </div>
    )
  },
  privacy: {
    title: "Privacy Policy",
    subtitle: "Securing your personal heritage.",
    content: (
      <div className="space-y-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <p>
          Your privacy is of paramount importance to GLAMORIZEE. This policy outlines how we collect, protect, and respect your personal information.
        </p>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Collection of Information</h3>
          <p>
            We collect personal details (such as name, email, billing address, and customization text) only to fulfill your orders, manage your account, or provide styling consultations.
          </p>
        </div>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Security Measures</h3>
          <p>
            All transaction data is processed using industry-standard SSL encryption. Your custom text and engraving records are stored securely, ensuring absolute confidentiality.
          </p>
        </div>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Third-Party Sharing</h3>
          <p>
            We never trade or sell your personal details to outside parties. Data is shared exclusively with certified courier partners to deliver your purchases.
          </p>
        </div>
      </div>
    )
  },
  terms: {
    title: "Terms of Service",
    subtitle: "Rules of the Atelier.",
    content: (
      <div className="space-y-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <p>
          Welcome to the GLAMORIZEE digital boutique. By using our website and services, you agree to comply with the following terms.
        </p>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Product Customization</h3>
          <p>
            Because each name necklace and monogrammed piece is handcrafted to order, production times may vary. Once customized, orders enter engraving stages immediately and cannot be modified.
          </p>
        </div>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Intellectual Property</h3>
          <p>
            All editorial designs, custom font layouts, photographic assets, and trademarks shown on this website are the exclusive property of GLAMORIZEE.
          </p>
        </div>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Usage Policy</h3>
          <p>
            You agree to use this site strictly for browsing, ordering, and communicating with our atelier. Unauthorized scripts or scraping are strictly prohibited.
          </p>
        </div>
      </div>
    )
  },
  shipping: {
    title: "Shipping & Returns",
    subtitle: "Complimentary worldwide delivery and care.",
    content: (
      <div className="space-y-8">
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          We treat the delivery of your signature jewelry with the same precision and care that goes into crafting it.
        </p>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Complimentary Shipping</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            GLAMORIZEE offers complimentary secure express shipping on all orders. Standard processing takes 3–5 business days for engraving, after which shipping takes 2–4 business days with signature required upon delivery.
          </p>
        </div>
        <div className="w-full h-px bg-outline-variant/30"></div>
        <div>
          <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface mb-3">Customized Return Policy</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Due to the personalized nature of name jewelry, custom orders are final sale. However, if an item is damaged or has an engraving error on our part, we will replace it free of charge within 14 days. Non-customized items can be returned in pristine condition for store credit.
          </p>
        </div>
      </div>
    )
  },
  locator: {
    title: "Our Boutique Locator",
    subtitle: "Experience luxury in person.",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Paris Flagship</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              15 Rue de la Paix, 75009 Paris, France<br/>
              Open Monday to Saturday: 10:00 AM – 7:00 PM
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Visit our flagship showroom to consult directly with our master jewelers, preview rare metal finishes, and design your signature bespoke monogram necklace in person.
            </p>
          </div>
          <div className="aspect-[4/3] bg-surface-container overflow-hidden border border-outline-variant/30">
            <img alt="Paris Boutique Showroom" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmCF3ud1ySWaS5dUZ6HpXWzXSjQ3JAI3E-9REWigbIh43T7C5tGYD33nic-gDX6PCZjE97Pr80dW2OYwX6Pem9t14sC1es1lb8xlHPa8Sew3HQgeWCXo1awQfOVYCKdFfH8N5xkgkNF3f9SbltGVO1lDn3_b4wQ8TdbsEi5iwnz_dxmNhOs9ATMSkWw_NDOKicfTwEj9zASsmZa6PnEMjyz0g0FrbIYrTvVqBmTJmIWEDYffutWIlqH4LwGUC0vJT9h9fVBBsyot8"/>
          </div>
        </div>
      </div>
    )
  }
};

export default function InfoPages() {
  const { topic } = useParams();
  const data = INFO_CONTENT[topic] || INFO_CONTENT.sustainability;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topic]);

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        {/* Sidebar Nav */}
        <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-outline-variant/30 pb-8 lg:pb-0 lg:pr-8">
          <h2 className="font-label-lg text-label-lg uppercase tracking-widest text-outline mb-8">Information</h2>
          <nav className="flex flex-row lg:flex-col gap-6 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 whitespace-nowrap lg:whitespace-normal">
            {Object.keys(INFO_CONTENT).map((key) => (
              <Link
                key={key}
                to={`/info/${key}`}
                className={`font-label-lg text-label-lg uppercase tracking-widest transition-colors ${
                  topic === key
                    ? 'text-tertiary font-bold border-b lg:border-b-0 lg:border-l-2 border-tertiary pl-0 lg:pl-3'
                    : 'text-on-surface-variant hover:text-on-surface pl-0 lg:pl-3'
                }`}
              >
                {INFO_CONTENT[key].title.split(' ')[0]} {INFO_CONTENT[key].title.split(' ')[1] || ''}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content Panel */}
        <section className="lg:col-span-9 lg:pl-8 animate-fade-in">
          <header className="mb-12 border-b border-outline-variant/30 pb-6">
            <h1 className="font-display-lg text-display-md md:text-display-lg text-on-surface mb-2">{data.title}</h1>
            <p className="font-body-lg text-body-lg text-tertiary italic">{data.subtitle}</p>
          </header>
          <div>{data.content}</div>
        </section>
      </div>
    </main>
  );
}
