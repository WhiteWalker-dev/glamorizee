export default function Header() {
  return (
    <header className="bg-background dark:bg-background w-full top-0 sticky z-50 transition-all duration-500 ease-in-out border-b border-outline-variant dark:border-outline">
<div className="flex justify-between items-center w-full px-margin-desktop py-base max-w-[1440px] mx-auto">
<nav className="hidden md:flex gap-6">
<a className="font-label-lg text-label-lg uppercase text-primary dark:text-primary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" href="#">Collections</a>
<a className="font-label-lg text-label-lg uppercase text-primary dark:text-primary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" href="#">New Arrivals</a>
<a className="font-label-lg text-label-lg uppercase text-tertiary dark:text-tertiary-fixed-dim border-b border-tertiary pb-1 hover:scale-105 transition-transform duration-300" href="#">Boutique</a>
<a className="font-label-lg text-label-lg uppercase text-primary dark:text-primary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" href="#">Editorial</a>
<a className="font-label-lg text-label-lg uppercase text-primary dark:text-primary-fixed-dim hover:text-on-background transition-colors hover:scale-105 duration-300" href="#">Atelier</a>
</nav>
<div className="font-display-md text-display-md text-on-background dark:text-on-background tracking-tighter">
                GLAMORIZEE
            </div>
<div className="flex items-center gap-4">
<button aria-label="shopping_bag" className="text-primary hover:text-on-background transition-colors">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
</div>
</div>
</header>
  );
}
