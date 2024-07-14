import { useParams } from "react-router-dom"
import logo from '../../public/ss-favicon.png'
import { serviceList } from "../utils/services";
import { FaPhoneAlt } from "react-icons/fa";

const SingleServices = () => {
  const {serviceId} = useParams();
  const servicesList = serviceList.find(b => b.id === parseInt(serviceId));

  if(!servicesList) return <div className="mt-24">Product not found</div>
  return (
    <div className="flex flex-col h-full w-full mt-20">
     <h1 className="text-3xl font-bold text-amber-500 text-center mb-5 mt-5">{servicesList.title}</h1>
     <hr className="w-full mt-2 border-solid border-black border-2 rounded-3xl"/>       
 
     <img src={servicesList.img} height={550} width={550}  className="m-auto mt-5" alt="ss store" />

     <p className="w-11/12 m-auto text-lg mt-5">{servicesList.longDescription}</p>
    <hr className="w-full mt-5 border-solid border-black border-2 rounded-3xl"/>       
    <div id="footer" className="bg-rose-800">
    <p className="w-11/12 m-auto text-lg mt-5 mb-5 text-white">Contact Us: <span> <FaPhoneAlt/> +977 984-4418964</span>  For Cctv, Laptop, Panel Board  And Repairing electronics - @ssstore, Bardibas</p>
    </div>     
    </div>
  )
}

export default SingleServices