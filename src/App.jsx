import Blog from "./components/Blog"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SingleBlog from "./components/SingleBlog"
import SingleServices from "./components/SingleServices"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
       <Router>
      
    <div className="relative top-0 w-full h-full">
      <Navbar/>
    </div>
    <Routes>
        <Route path="/SS-store-react"  element={<Hero/>} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:blogId" element={<SingleBlog/>} />
        <Route path="/services/:serviceId" element={<SingleServices/>} />
       </Routes>
       </Router>
    </>
  )
}

export default App
