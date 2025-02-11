import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import c_logo from "./assets/Logo - Light Theme.png";
import About from "./components/About";
function App() {
  const [start,setStart] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStart(false)
    }, 2000);
  },[])
  if (start) {
    return <div  className="bg-green-50 w-full h-screen flex justify-center items-center">
       <img data-aos="flip-left" data-aos-duration="1000" className="w-1/4" src={c_logo} />
    </div>
  }
  return (
    <div>
      <Navbar/>
      <Layout>
        <HeroSection/>
        <Services/>
        <About/>
        <Contact/>
      </Layout>
      <Footer/>
    </div>
  )
}

export default App
