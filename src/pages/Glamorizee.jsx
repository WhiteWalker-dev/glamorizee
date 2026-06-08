import { Link } from 'react-router-dom';
import { addToCart } from '../utils/cartState';

export default function Glamorizee() {
  const handleQuickAdd = (product) => {
    addToCart(product);
  };

  return (
    <main className="flex-grow">
      {/* 1. Hero: Full-screen editorial campaign */}
      <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Glamorizee Luxury Editorial Hero" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjUqARSFh7YdBGMEmO6krhyZTBi44l7SYfUBeJi9jl36ysUWeqhwznYQR9M-C86q2qVj3l4UTQd19LrduO7nQe5Uv_YPl1Gf012jwJF6ese88m0GfdmqKJu0YiKmUwhr4a9djoI8Cht0Fyvp5j-q5dtQMuMVvpemj5JV-N19OBJ4m0gHDTZDbxrA4afnzdqU9NfuKE8v3jkLemYmXLJT6-5jN-UEIvJJijf7b8WdUvxVdy3VyeQuyUMt_qgAxvc_r865D2pqM8dsI"/>
          <div className="absolute inset-0 bg-on-surface/10"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-display-lg md:text-[80px] text-on-surface mb-8 tracking-tighter leading-tight drop-shadow-sm">
            The Art of<br/>Personal Expression
          </h1>
          <Link className="inline-block bg-on-surface text-surface uppercase font-label-lg text-label-lg py-4 px-10 hover:bg-surface hover:text-on-surface border border-on-surface transition-colors duration-500 rounded-none tracking-widest" to="/new-arrivals">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Categories: Clean grid of cards */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display-md text-display-md text-on-surface mb-4">Curated Collections</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Discover our meticulously crafted categories, designed for those who appreciate understated elegance.</p>
          </div>
          <Link className="hidden md:inline-flex items-center text-tertiary font-label-lg text-label-lg uppercase tracking-widest group" to="/categories">
            <span className="border-b border-tertiary pb-1 group-hover:border-transparent transition-colors duration-300">View All Categories</span>
            <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Category 1 */}
          <Link className="group block relative overflow-hidden h-[400px] hairline-border subtle-hover" to="/categories">
            <img alt="Single Name" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuJHDbJXZzKDPekukDvzlBSBzYfAdrNAArqLVHkFP9qAw-HNldVtPsh18FvIuUg8-NGTbx4JU1a-TFfm-2GmrYz1cJJFmw8dvJhKijQ8gr4TUrLkAkC-70HNBsPYjMiX6LWO-9iAV72ltGIlqUL_WjpPZixq61U-9aO_4aYs7WzAC5H2GWfMubKk6R7eBddt6UlrAQufRJRxjVMeVvIwj_6iCK1rbWMQjxVbf-bbYVuje-TFCTQ3yI2qi9Ma4RddD7ow_TAPJgthY"/>
            <div className="absolute inset-0 image-overlay-gradient"></div>
            <div className="absolute bottom-6 left-6 text-surface">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-1">Single Name</h3>
              <p className="font-label-md text-label-md uppercase tracking-widest opacity-80">Explore</p>
            </div>
          </Link>
          {/* Category 2 */}
          <Link className="group block relative overflow-hidden h-[400px] hairline-border subtle-hover bg-surface-container-high" to="/categories">
            <img alt="Couple Pendants" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfLdUFjALM2tSCpeJ6TDblUjAfLxeFceHLwD0v-1hYJAxPYmGHyjNSLXxAVWQ5MDyTJO9bYrU1LN9p8LiZo-w-7GGXCggmwW-G0vdeMffR-YlPHYVLwkmstdm32iFQvFPMcGJ1sycmow0EJlEtrvnktyLXFK004LjRKun-zfK_J6MOdmfM8jIJagrIg7FhP7LVZEkwT0HeTySUvVwqs8fnBKW8KecHsk3XS_3zLKuZk6Ee6_NMtSW5GSnVMbYejiRMOQLcSuRuByM"/>
            <div className="absolute inset-0 image-overlay-gradient"></div>
            <div className="absolute bottom-6 left-6 text-surface">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-1">Couple Pendants</h3>
              <p className="font-label-md text-label-md uppercase tracking-widest opacity-80">Explore</p>
            </div>
          </Link>
          {/* Category 3 */}
          <Link className="group block relative overflow-hidden h-[400px] hairline-border subtle-hover" to="/categories">
            <img alt="Bracelets" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC65rfIXDtxaeY-HouIHVDanZmKimHkDA5WmHCfmLvVEP0S1a0RfFxtIy-H8Edu_VFpyVbjrYs-HPfugRovOAERcp-lCcqR4rmJaxJWTaRBiyM0jx36xnriyC_lNleDb_fo-IOsz9kTv2-RnZLnb7MPjg_x097w_sdm6lZzgG2xCM8Jb0SP1VlP4C_vIlpZOs82AqZcSg1KxQu5XMI2Xh1tUyTelz1tdCraAaUaqYHjC5lQh1RqckNx5-z1s7SzO3IpKMaOTPMrRCE"/>
            <div className="absolute inset-0 image-overlay-gradient"></div>
            <div className="absolute bottom-6 left-6 text-surface">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-1">Bracelets</h3>
              <p className="font-label-md text-label-md uppercase tracking-widest opacity-80">Explore</p>
            </div>
          </Link>
          {/* Category 4 */}
          <Link className="group block relative overflow-hidden h-[400px] hairline-border subtle-hover bg-surface-container-high" to="/categories">
            <img alt="Keychains" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeXKn2V6hcb_zNlFCuVIztce_2IjLVjRqCjV-Th9mCG61UTh-EmX_pOkgfXTjRZSpSXaxakTqHlj55iSgi3a6csmmQLfTW84Gf7sLKVYt6Qg5ItI7TJJTNQ9Xwlsn9g4Ds4uMbSRgj2zASKS7apoVD4NKKEoUw4lrCxb6G92128dEWfxOdIs5UAmviDy9ku-n1R1hrpqtLnMFbyhsEfJCYAZdssZxcnbKglpMQwOBm8o-lXRlX49ibpzWPxPc29KLjg-C-7ncXCG8"/>
            <div className="absolute inset-0 image-overlay-gradient"></div>
            <div className="absolute bottom-6 left-6 text-surface">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-1">Keychains</h3>
              <p className="font-label-md text-label-md uppercase tracking-widest opacity-80">Explore</p>
            </div>
          </Link>
          {/* Category 5 */}
          <Link className="group block relative overflow-hidden h-[400px] hairline-border subtle-hover" to="/categories">
            <img alt="Name Wallets" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBnQHdA1yx2bFekW6oi0IuvYl4MfQqUj4XF2vmK-zi2slxVbbBNFmj_IaM6YzLl_u66Txn-XCVRJd7xDneenzffLLSK7TX7EkvV3UlE34lOYB55mgA4hkFlV3VkPRUFGnmYv50t5O3JArtxuPx3OpSMh2H5RFEl0xfhf8Fe9bKQmUeMv21rAz0nWJ3owe87MP13uu_9CGWIci4LhV3FysAfH6eU38PLME2rUL7jQDDcGQzzcvGR1TEyt9ZlImwBsP2ZF-gMqfx_ck"/>
            <div className="absolute inset-0 image-overlay-gradient"></div>
            <div className="absolute bottom-6 left-6 text-surface">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-1">Name Wallets</h3>
              <p className="font-label-md text-label-md uppercase tracking-widest opacity-80">Explore</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. New Arrivals: 4-column product grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto bg-surface-container-lowest">
        <div className="text-center mb-16">
          <span className="font-label-md text-label-md uppercase tracking-widest text-tertiary mb-4 block">The Latest Chapter</span>
          <h2 className="font-display-md text-display-md text-on-surface">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          
          {/* Product 1 */}
          <div className="group flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container mb-6 hairline-border">
              <img alt="White Flower Name Necklace" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGvf8_RkZ38_Az3juiYNHoyu1asE0oKITuYCytbxQoHqUWC7ufYGNrqoq-E6_pVCof1eM4HbNmdEa78hv5Gu1OIfixveFdjuaAFQa72fDerbYqn7KKt1Jsl7k1P2FL1Giv-W-peQFGaa7CSynLZ2-MjhlQfnFhuwkovBMX_8zf3fY3FLVghxOqiyLKY8jBufd0PociWcM1e2-oUfXL8v0guJzCJXILiTMlmQQ56tkFzFTtOAxs_WPcikxnRsthztJpoclXUVzEstw"/>
              <img alt="White Flower Name Necklace Model" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK66ckhD69LWxcjndolZJKOr6BG3ZgP_GR1wzj0fK3_KdBMA9uD6Dxl_OJjTfG2K_upsrTQBCj3vcwRfqYj6gNQT_CQmaj518dX_LMvbI5XkRbigagRScf6biSOebm5REyrIwoBa5-uVGKOf7HFzbce_EjazvQVrXrNY8Z_NLkk4FWmC3IebQMnWlagjAYzynBL3k4fxch_-VxEJt52xnKFKFS8CJ9WFF31Nh7104qAJ3AfO_Qn0QCfIfYLEptEg4vnwx0eqYsACo"/>
              <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <button 
                  onClick={() => handleQuickAdd({
                    id: 'white-flower-necklace',
                    title: 'White Flower Name Necklace',
                    price: 199.00,
                    priceString: 'Rs. 199.00',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGvf8_RkZ38_Az3juiYNHoyu1asE0oKITuYCytbxQoHqUWC7ufYGNrqoq-E6_pVCof1eM4HbNmdEa78hv5Gu1OIfixveFdjuaAFQa72fDerbYqn7KKt1Jsl7k1P2FL1Giv-W-peQFGaa7CSynLZ2-MjhlQfnFhuwkovBMX_8zf3fY3FLVghxOqiyLKY8jBufd0PociWcM1e2-oUfXL8v0guJzCJXILiTMlmQQ56tkFzFTtOAxs_WPcikxnRsthztJpoclXUVzEstw',
                    selectedOption: 'Gold / 16"'
                  })}
                  className="w-full bg-surface text-on-surface py-3 font-label-md text-label-md uppercase tracking-widest hairline-border-dark hover:bg-on-surface hover:text-surface transition-colors duration-300"
                >
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <Link className="font-body-lg text-body-lg text-on-surface hover:text-tertiary transition-colors duration-300 mb-2" to="/new-arrivals">White Flower Name Necklace</Link>
              <div className="flex items-center space-x-3 mt-auto">
                <span className="font-body-md text-body-md text-on-surface-variant line-through opacity-60">Rs. 699.00</span>
                <span className="font-body-md text-body-md text-on-surface font-medium">Rs. 199.00</span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container mb-6 hairline-border">
              <img alt="Evil Eye Single Name Necklace" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu8orZd2il90ve3lAT2RCL6hcHUOOYXWQcovSZeTKokr-M1ZUqIeveVprz13nmWfGW_VSLd8-IHfCB6_yezbhZADkB8E9Z1VOx8qYNP8nWMO2taKX7o3uj-Z3kEY0mnEe26OIcRHmyO8hyxjwFHKpXkN-jOZNp18dwMTQaLCxNzQsp9pJpslEbmkRjES9f5KZPf3ppdjpAABZnK83ZH0rbbKKr-E3-TUCRYDXCe8ahGwaQj95qTtMTli_88dL9V2zsL2UAzJrkWFI"/>
              <img alt="Evil Eye Single Name Necklace Model" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvWgwyTp9yw8qVqryf-SoR1akiLViQuHE4ffGy7ge3E4x64MXQJfBm3crGGO4XnF6JUbRJlHRFOYS8nD4zrC3uI1jnWAlSf09S-BSABCWlZC7acB-7iEFNMH3F1G0qiCnBVLNPJ5j3Ub2Yyk2TIwxncuJ-EJReC9dO-Nit8kK5LDemShxWJk5TjebX5Rh3xWE29szIj_xNH7qwoWgCSEfpjOvx948vQ-QGSJAG4SlYeMFwrsuR3edGsLi9p_mjoTNhzMDP0D9IQqo"/>
              <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <button 
                  onClick={() => handleQuickAdd({
                    id: 'evil-eye-necklace',
                    title: 'Evil Eye Single Name Necklace',
                    price: 199.00,
                    priceString: 'Rs. 199.00',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu8orZd2il90ve3lAT2RCL6hcHUOOYXWQcovSZeTKokr-M1ZUqIeveVprz13nmWfGW_VSLd8-IHfCB6_yezbhZADkB8E9Z1VOx8qYNP8nWMO2taKX7o3uj-Z3kEY0mnEe26OIcRHmyO8hyxjwFHKpXkN-jOZNp18dwMTQaLCxNzQsp9pJpslEbmkRjES9f5KZPf3ppdjpAABZnK83ZH0rbbKKr-E3-TUCRYDXCe8ahGwaQj95qTtMTli_88dL9V2zsL2UAzJrkWFI',
                    selectedOption: 'Silver / 18"'
                  })}
                  className="w-full bg-surface text-on-surface py-3 font-label-md text-label-md uppercase tracking-widest hairline-border-dark hover:bg-on-surface hover:text-surface transition-colors duration-300"
                >
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <Link className="font-body-lg text-body-lg text-on-surface hover:text-tertiary transition-colors duration-300 mb-2" to="/new-arrivals">Evil Eye Single Name Necklace</Link>
              <div className="flex items-center space-x-3 mt-auto">
                <span className="font-body-md text-body-md text-on-surface-variant line-through opacity-60">Rs. 699.00</span>
                <span className="font-body-md text-body-md text-on-surface font-medium">Rs. 199.00</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container mb-6 hairline-border">
              <img alt="Special Style Name Necklace" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWRoEivInM76jm2AsRdXNcBzxkklCwEbQJaHTgyXz8TVWtZER7-eUZWSIBTF5sfZ12UcaLRgs5ldTfOxsyT7dFwPeX8Rqdgfl4iTCyuJlfWGzIrcb-soEDAhRYNiae8vHD2WRj7R3qvf0sFSt3J6ADhM3bwPvyNOwLM8jrGdV6w-EB-v8skUtLL0llny7ll7mHa7W6XgwKvsfbxZ58ul1x3V7qf7jI0jgwEJg4JQopJB9djnNA8Wfj_3GSTaqyLwDAtgkQhG6y4hU"/>
              <img alt="Special Style Name Necklace Model" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU1Y0eNiPqoscIPpdNX1P_hinEkLuypJdzfRu61F-J8U3iG0jXFOzxnH9vuuUQcZE9XAUQdjzwKFIiSSIIL4GolodxkKQ9fazXmxvG1fRbnhvv7yr9gnLIOk5yij7lVF1yVQU_PyBBPilg4qCjncZZdtlzPl--0Bve2sRlQDx0PI5iMCZ0Y-sgSr7shpRj2ujKgOiOvkf6VnGpbcratJ7yMES76wew4xH_kQLYSw8s5o9Hf2aogkvuV0ZILneU1g2g5XuGQy8A9Nw"/>
              <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <button 
                  onClick={() => handleQuickAdd({
                    id: 'special-style-necklace',
                    title: 'Special Style Name Necklace',
                    price: 199.00,
                    priceString: 'Rs. 199.00',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWRoEivInM76jm2AsRdXNcBzxkklCwEbQJaHTgyXz8TVWtZER7-eUZWSIBTF5sfZ12UcaLRgs5ldTfOxsyT7dFwPeX8Rqdgfl4iTCyuJlfWGzIrcb-soEDAhRYNiae8vHD2WRj7R3qvf0sFSt3J6ADhM3bwPvyNOwLM8jrGdV6w-EB-v8skUtLL0llny7ll7mHa7W6XgwKvsfbxZ58ul1x3V7qf7jI0jgwEJg4JQopJB9djnNA8Wfj_3GSTaqyLwDAtgkQhG6y4hU',
                    selectedOption: 'Gold / 16"'
                  })}
                  className="w-full bg-surface text-on-surface py-3 font-label-md text-label-md uppercase tracking-widest hairline-border-dark hover:bg-on-surface hover:text-surface transition-colors duration-300"
                >
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <Link className="font-body-lg text-body-lg text-on-surface hover:text-tertiary transition-colors duration-300 mb-2" to="/new-arrivals">Special Style Name Necklace</Link>
              <div className="flex items-center space-x-3 mt-auto">
                <span className="font-body-md text-body-md text-on-surface-variant line-through opacity-60">Rs. 699.00</span>
                <span className="font-body-md text-body-md text-on-surface font-medium">Rs. 199.00</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container mb-6 hairline-border">
              <img alt="Crown Name Necklace" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhiKhs1f25rHmQuBBBoIiAI_NaSTQ2ZEwjEc1wSF4Uq52i5YbF19IXO3ynU_FWPb4-JOtUEAvd2Ncu1V7L5gIMtqFVfSh_xpRHsoW9x9QpJHAVUKOYXiRYTU_if9VLq1vOw4NG4nDmoy5Y2ki-vHfKV8_vTdhMMN_FmcGBVJTDlfk0HSMV0TLoahGAQhv1hIRzw44iD0GJlBQFD8rU0iPh27RiHiAahkFrxaj2ro9gdymqjIOMtyt-8jmOjvuBfZ7qneplsF8kpxo"/>
              <img alt="Crown Name Necklace Model" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4PDb5wM_dMFrt3mMyCQC3qcr4ZCQr40UEPkQ2BslwSVcV3SLBK00Gu8lmaXPRRHbcGGf0Q-C8BJAszbJ6lJNuXJOqGD689aux5uUngm06x2LYQNHl6PnXEj3P49Co8oORbInYv2fEb2o6vIBwfn82djFdWbXzy-VX_uY9MqJEUHft4v6XEWg3347vfXsYSOe-QxVcCJVHplptHyAeJFpovSF04Z4B5mzp_SQkkDUsXH4k3xbN3gPU4Z5AYrJflU4KugB1MyPQm74"/>
              <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <button 
                  onClick={() => handleQuickAdd({
                    id: 'crown-name-necklace',
                    title: 'Crown Name Necklace',
                    price: 199.00,
                    priceString: 'Rs. 199.00',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhiKhs1f25rHmQuBBBoIiAI_NaSTQ2ZEwjEc1wSF4Uq52i5YbF19IXO3ynU_FWPb4-JOtUEAvd2Ncu1V7L5gIMtqFVfSh_xpRHsoW9x9QpJHAVUKOYXiRYTU_if9VLq1vOw4NG4nDmoy5Y2ki-vHfKV8_vTdhMMN_FmcGBVJTDlfk0HSMV0TLoahGAQhv1hIRzw44iD0GJlBQFD8rU0iPh27RiHiAahkFrxaj2ro9gdymqjIOMtyt-8jmOjvuBfZ7qneplsF8kpxo',
                    selectedOption: 'Gold / 16"'
                  })}
                  className="w-full bg-surface text-on-surface py-3 font-label-md text-label-md uppercase tracking-widest hairline-border-dark hover:bg-on-surface hover:text-surface transition-colors duration-300"
                >
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <Link className="font-body-lg text-body-lg text-on-surface hover:text-tertiary transition-colors duration-300 mb-2" to="/new-arrivals">Crown Name Necklace</Link>
              <div className="flex items-center space-x-3 mt-auto">
                <span className="font-body-md text-body-md text-on-surface-variant line-through opacity-60">Rs. 699.00</span>
                <span className="font-body-md text-body-md text-on-surface font-medium">Rs. 199.00</span>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-16 text-center">
          <Link className="inline-block border-b border-on-surface text-on-surface uppercase font-label-lg text-label-lg pb-1 hover:text-tertiary hover:border-tertiary transition-colors duration-300 tracking-widest" to="/new-arrivals">
            Explore All Arrivals
          </Link>
        </div>
      </section>
    </main>
  );
}
