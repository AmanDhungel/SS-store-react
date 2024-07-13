import Banner from "./components/Banner"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import Services from "./components/Services"
import TopProducts from "./components/TopProducts"

function App() {

  return (
    <>
    <div className="relative top-0 w-full h-full">
      <Navbar/>
    </div>

    <Hero/>
    <Banner title="Top Selling Products"/>
       <TopProducts /> 
       <Banner title="Products You Might Need"/>
       <Product /> 
       <Banner title="Serives We Provide"/>
       <div className="flex flex-wrap w-[95rem] max-sm:w-[30rem] max-sm:gap-5 m-auto md:w-[58rem] md:gap-5 md:overflow-hidden xl:w-[92rem]">
       <Services/>
       <Services/>
       <Services/>
       <Services/>
       <Services/>
       <Services/>
       </div>
        <div className="mt-5 pb-8 md:py-10">
       <Banner title="Contact Us"/>
        </div>
       <ContactUs/>
       <Footer/>
    </>
  )
}

export default App
