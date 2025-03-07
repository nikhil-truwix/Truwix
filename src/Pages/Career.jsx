import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Section from '../Components/Career/section'
import Section2 from '../Components/Career/Section2'
import Section3 from '../Components/Career/Section3'
import { useEffect } from 'react'
function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='w-full h-auto
    bg-black '>
      <div className="pt-6 relative z-50">
        <Navbar />
      </div>
      <h1 className='text-white md:text-[72px]  text-2xl text-center mt-6 font-bold'> Join The<span className='text-[#b97fdf]'> Truwix  </span>Team!</h1>
      <div className=' w-full flex flex-col  justify-center items-center  text-center mt-4'>
        <p className=' text-[16px] md:text-[24px] w-full text-white  md:px-32 px-4'>Feel free to reach out to us for any inquiries or support.We look forward to connecting with you!</p>
      </div>
      <Section />
      <Section2 />
      <Section3 />
      <Footer />
    </div>

  )
}

export default Career