import { useGSAP } from "@gsap/react"
import { products } from "../utils/product"
import gsap from "gsap"
import Banner from "./Banner"
import { useState } from "react"
import { AiFillCaretDown} from "react-icons/ai"

const Product = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, 3);

  useGSAP(()=> {
   gsap.to('#topProducts',{
    scrollTrigger: {
      trigger: '#topProducts',
      start: 'bottom bottom',
    },
    duration: 0.8,
    opacity:1,
    x: 0,
    ease: "power2.inOut",
    stagger: 0.3

   })
  }, [displayedProducts])
  return (
    <>
<Banner title="Products You Might Need"/> 
<div  className="flex flex-wrap w-3/4 m-auto">
   {displayedProducts.map((item)=> (
    <div id="topProducts" key={item.id}  className="w-96 ml-4 mr-4 mt-2 flex-1 opacity-0 translate-x-10" >
    <a href="#" className="group relative block overflow-hidden sm:w-52 xl:w-96">
  <button
    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src={item.imgUrl}
    alt=""
    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative border border-gray-100 bg-white p-6">
 <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">Product On Sell</span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">{item.name}</h3>

    <p className="mt-1.5 text-sm text-gray-700">Rs. {item.price}</p>

    <form className="mt-4">
      <button
        className="block w-full rounded bg-red-600 p-4 text-sm font-medium transition hover:scale-105 text-white"
      >
        Add to Cart
      </button>
    </form>
  </div>
  </a>
    </div>

    ))} 

    </div>
        {!showAll && <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition-all"
          >
        
            <div className="flex items-center">
              Show All Products <AiFillCaretDown className="ml-2" />
            </div>
       

          </button>
        </div>
      }
    </>

  )
}

export default Product