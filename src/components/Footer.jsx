import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-surface-container-highest w-full mt-section-gap border-t border-outline-variant dark:border-outline transition-all duration-500 ease-in-out opacity-80 hover:opacity-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-margin-mobile md:px-margin-desktop py-container-padding max-w-[1440px] mx-auto gap-8">
        <div className="font-display-md text-display-md text-on-surface dark:text-on-surface mb-2 md:mb-0">
          GLAMORIZEE
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-2 md:mb-0">
          <Link className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" to="/contact">Contact Us</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" to="/info/sustainability">Sustainability</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" to="/info/privacy">Privacy Policy</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" to="/info/terms">Terms of Service</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" to="/info/shipping">Shipping &amp; Returns</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" to="/info/locator">Store Locator</Link>
        </div>
        <div className="font-body-md text-body-md text-secondary dark:text-on-secondary-fixed-variant">
          © 2026 GLAMORIZEE ATELIER. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
