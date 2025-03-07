import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Aboutour from '../Components/Aboutsection/Aboutour.jsx'
import Aboutgrowth from '../Components/Aboutsection/Aboutgrowth.jsx'
import Aboutourteam from '../Components/Aboutsection/Aboutourteam.jsx'
import AboutLast from '../Components/Aboutsection/Aboutlast.jsx'
import Footer from '../Components/Footer.jsx'
import { useEffect } from 'react'
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='w-full h-auto
     bg-black'>
      <div className="pt-6 relative z-50">
        <Navbar />
      </div>


      <h1 className='text-white md:text-[72px]  text-2xl text-center mt-7 font-bold'> <span className='text-[#b97fdf]'>ABOUT </span>OUR COMPANY </h1>
      <div className=' w-full flex flex-col  justify-center items-center  text-center mt-4'>
        <p className=' text-[15px] md:text-[24px] w-full text-white  md:px-32 px-4'>Feel free to reach out to us for any inquiries or support. We look forward to connecting with you!</p>
      </div>
      <Aboutour />
      <Aboutgrowth />
      <Aboutourteam />
      <AboutLast />
      <Footer />
    </div>
  )
}

export default About