export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-surface-container-highest w-full mt-section-gap border-t border-outline-variant dark:border-outline transition-all duration-500 ease-in-out opacity-80 hover:opacity-100">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-margin-desktop py-container-padding max-w-[1440px] mx-auto">
<div className="font-headline-lg text-headline-lg text-on-surface dark:text-on-surface mb-6 md:mb-0">
                GLAMORIZEE
            </div>
<div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-0">
<a className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" href="#">Sustainability</a>
<a className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" href="#">Terms of Service</a>
<a className="font-body-md text-body-md text-secondary hover:text-primary hover:underline decoration-1 underline-offset-4 transition-colors" href="#">Shipping &amp; Returns</a>
</div>
<div className="font-body-md text-body-md text-secondary dark:text-on-secondary-fixed-variant">
                © 2024 GLAMORIZEE ATELIER. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>
  );
}
