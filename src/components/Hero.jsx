import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import heroBackground from '../assets/videos/SS-Store.mp4'
import heroBackgroundSmall from '../assets/videos/ss-store-mobile.mp4'
import { useState } from "react"
import { useEffect } from "react"

const Hero = () => {

  const [video, setVideo] = useState(
    window.innerWidth < 760 ? heroBackgroundSmall : heroBackground
  );
  
  function handleVideo() {
    window.innerWidth < 760 ? setVideo(heroBackgroundSmall) : setVideo(heroBackground);
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleVideo);
  
    return () => {
      window.removeEventListener('resize', handleVideo);
    };
  }, []);

  useGSAP(()=> {
  gsap.to('#hero-card', {
    duration: 1,
    opacity: 1,
    x: -30,
    ease: "back.in"
  })
  gsap.to('#video', {
    yoyo: true,
    repeat: -1
  })
  }, [])



  return (
    <> 
<section
id="Hero"
  className="max-sm:h-[50rem] relative bg-[url(https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-top bg-no-repeat"
>
  
  <video id="video" autoPlay playsInline muted className="absolute top-0 left-0 w-full h-full object-cover -z-1" key={video}>
    <source src={video} type="video/mp4" />
  </video>
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-1"></div>
 
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="max-sm:ml-10  relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div id="hero-card" className="max-w-xl max-sm:mt-32 text-center ltr:sm:text-left p-20  rounded-xl xl:-translate-x-[30rem] opacity-0">
      <h1 className="  text-3xl max-sm:text-4xl xl:w-[20rem] text-start font-extrabold text-white sm:text-5xl">
        SS Store
      <span><hr  className="w-36 mt-3 mb-3 border-2 border-gray-500 " /></span>
        <strong className="block font-extrabold text-rose-500 "> Buy </strong>
      </h1>

      <p className="max-sm:text-2xl mt-4 max-w-lg text-white text-start sm:text-xl/relaxed">
        Laptop, CCTV, Panel Board & Many More
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center max-sm:-ml-10 max-sm:w-[14rem]">
        <a
          href="#products"
          className="max-sm:text-lg text-start block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Start Shopping
        </a>
      </div>
    </div>
  </div>
</section>



  </>

  )
}

export default Hero