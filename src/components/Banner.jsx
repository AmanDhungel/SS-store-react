import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger) 

const Banner = ({title}) => {
    useGSAP(()=> {
    gsap.to('#banner',{
      scrollTrigger: {
        trigger: '#banner',
        start: 'bottom bottom',
      },
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    })    
    }, [])
  return (
    <div id="banner" className="m-auto max-sm:ml-14 max-sm:w-[18rem] sm:w-[42rem] md:w-[54rem] xl:w-[87rem] mb-10 mt-10 opacity-0">
        <h1 className="text-2xl text-black">{title}</h1>
        <hr className="w-11/12 mt-2 border-solid border-black border-2 rounded-3xl"/>      
    </div>
  )
}

export default Banner