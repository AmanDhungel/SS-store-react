import { useParams } from "react-router-dom"
import { blog } from "../utils/blog";
import logo from '../../public/ss-favicon.png'
import { FaPhoneAlt } from "react-icons/fa";

const SingleBlog = () => {
  const {blogId} = useParams();
  const blogs = blog.find(b => b.id === parseInt(blogId));

  console.log(blogs)
  console.log(blogId)

  if(!blogs) return <div className="mt-24">Product not found</div>
  return (
    <div className="flex flex-col h-full w-full mt-20">
    <hr className="w-full mt-2 border-solid border-black border-2 rounded-3xl"/>      
     <div className="flex justify-around text-center items-center">
     {window.innerWidth < 560 ? '' :<img src={logo} alt="ss store" className="" width={200} height={200} />}
     <h1 className="text-2xl">{blogs.title}</h1>
     <h2 className="text-xl">REDGE No. 613928586</h2>
     
     </div>
     <hr className="w-full mt-2 border-solid border-black border-2 rounded-3xl"/>       
      
      <div>
          <h1 className="text-3xl font-bold text-amber-500 text-center mb-5 mt-5">{blogs.blogtitle}</h1>
           
          <p className="w-11/12 m-auto text-lg">{blogs.discription1}</p>
      </div>

     <img src={blogs.image} height={550} width={550}  className="m-auto mt-5" alt="ss store" />

     <p className="w-11/12 m-auto text-lg mt-5">{blogs.discription2}</p>

    <hr className="w-full mt-5 border-solid border-black border-2 rounded-3xl"/>       
    <div id="footer" className="bg-rose-800">
    <p className="flex flex-wrap w-11/12 m-auto text-lg mt-5 mb-5 text-white">Contact Us: <span className="flex ml-4"> <FaPhoneAlt/> +977 984-4418964</span>  For Cctv, Laptop, Panel Board  And Repairing electronics - @ssstore, Bardibas</p>
    </div>     
    </div>
  )
}

export default SingleBlog